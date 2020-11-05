<template>
    <div>
        <h1>Tic Tac Toe</h1>
        <!-- Mediante @submit.prevent viene eseguito il metodo start che passerà i dati allo Store di VueX 
        e permetterà l'accesso alla pagina del gioco -->
        <form class="lobby" @submit.prevent="start">
            <!-- Input per i nomi dei player -->
            <div>
                <label>Player 1</label>
                <!-- Utilizziamo v-model per prendere i dati inseriti nell'input -->
                <input type="text" placeholder="Name for player 1" v-model="player1">
            </div>
            <div>
                <label>Player 2</label>
                <!-- Utilizziamo v-model per prendere i dati inseriti nell'input -->
                <input type="text" placeholder="Name for player 2" v-model="player2">
            </div>
            <!-- Button per accedere al gioco -->
            <div class="lobby__action">
                <!-- Se nel form non è stato inserito il primo player o il secondo player o entrambi 
                allora il button viene disabilitato, in modo tale da non poter accedere al gioco -->
                <button type="submit" :disabled="!player1 || !player2">Start the game</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        /* Definiti i dati iniziali dei player come null per avere le input text vuote quando si accede
        al sito */
        data() {
            return {
                player1: null,
                player2: null
            };
        },
        methods: {
            start() {
                /* Effettuati i commit nello store di Vuex passando come parametri il nome del relativo 
                store e il valore inserito, accessibile dagli state 'player1' e 'player2' */
                this.$store.commit("player1Name", this.player1);
                this.$store.commit("player2Name", this.player2);
                // Mediante il push del percorso '/game' in router accediamo alla pagina del gioco
                this.$router.push({ path:"/game" });
            }
        },
        /* Utilizziamo beforeRouteEnter per proteggere la navigazione, cancellando i dati che vengono 
        inseriti. Quando si accede alla pagina del gioco, 'player1' e 'player2' vengono resi null */
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.player1 = null;
                vm.player2 = null;
            });
        }   
    };
</script>