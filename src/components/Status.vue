<template>
    <div class="game__status">
        <!-- Struttura if-else annidata per restituire lo stato del gioco, se con vincitore, pareggio o 
        in corso -->
        <span v-if="winner">Winner is {{ winnerName }}</span>
        <span v-else-if="isDrawGame">That's a draw game</span>
        <span v-else>Next player is {{ playerName }}</span>
    </div>
</template>

<script>
    export default {
        // definizione props
        props: {
            winner: String,
            player: String,
            isDrawGame: Boolean
        },
        computed: {
            // Funzione che restituisce il nome del giocatore corrente in base al simbolo
            playerName() {
                const { player1Name, player2Name } = this.$store.state;
                return this.player === "X" ? player1Name : player2Name;
            },
            // Funzione che restituisce il nome del giocatore vincitore in base al simbolo
            winnerName() {
                const { player1Name, player2Name } = this.$store.state;
                return this.winner === "X" ? player1Name : player2Name;
            }
        }  
    }
</script>