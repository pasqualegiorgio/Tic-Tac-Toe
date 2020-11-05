<template>
  <div class="game">
    <!-- Stato del gioco. E' un component a cui passiamo 3 props: winner, player e isDrawGame -->
    <Status :winner="winner.player" :player="player" :isDrawGame="isDrawGame" />
    <div class="game__board">
      <!-- Singola casella della tabella di gioco. Iteriamo il numero di caselle 9 volte e passiamo 
      come props is-game-over, is-winner e emettiamo l'avento onSquareClick che permette l'inserimento 
      di X o O -->
      <Square 
        v-for="(squareValue, position) in squares" 
        :key="position" 
        :value="squareValue"
        :is-game-over="isGameOver"
        :is-winner="isWinner(position)"
        @click="onSquareClick(position)"
      />
    </div>
    <!-- Button di restart per ricominciare da capo -->
    <Restart @click="reset()"/>
  </div>
</template>

<script>
  // import di components
  import Status from "./Status";
  import Square from "./Square";
  import Restart from "./Restart";
  /* import della funzione che permette di capire le combinazioni che determinano il vincitore di una 
  partita */
  import getWinner from "../utils/winner";

  export default {
    components: {
      Status,
      Square,
      Restart
    },
    /**
     * Dati restituiti: 
     *  - al player viene assegnato automaticamente la X, quindi assumiamo che il primo turno è del player1
     *  - squares è inizialmente un array di 9 elementi null. In questo modo quando viene creata la tabella 
     *  di gioco vengono inseriti inizialmente 9 caselle vuote.
    */ 
    data() {
      return {
        player: "X",
        squares: Array(9).fill(null)
      };
    },
    /* Metodi per i dati da passare come props */
    computed: {
      /* Funzione winner che restituisce il vincitore del gioco in base al risultato della funzione 
         getWinner a cui passiamo come parametro squares ogni qualvolta viene riempito */
      winner() {
        return getWinner(this.squares);
      },
      /* Funzione che restituisce un valore true o false per capire se il gioco è terminato in pareggio, 
         se non ci sono più caselle di gioco da riempire */
      isDrawGame() {
        return this.squares.filter(square => !square).length === 0;
      },
      /* Funzione che restituisce un valore true o false per capire se il gioco è game over, se è finito 
         in pareggio e non c'è un vincitore */
      isGameOver() {
        return this.isDrawGame || this.winner.player != null;
      }
    },
    methods: {
      /**
       * Funzione che determina se una casella è vuota
       * @param {Number} position
       */
      isSquareEmpty(position) {
        return this.squares[position] === null;
      },
      /**
       * Funzione che viene eseguita al click della casella di gioco
       * @param {Number} position
       */
      onSquareClick(position) {
        // se l'elemento alla posizione passata è vuoto o c'è un vincitore, non restituire nulla
        if (!this.isSquareEmpty(position) || this.winner.player) {
          return;
        }
        // imposta il valore di 'player' alla posizione 'position' dell'array squares
        this.$set(this.squares, position, this.player);
        /* 'player' è true o false a seconda dell'attuale stato di 'player'. Serve per impostare chi 
           dovrà giocare il prossimo turno */
        this.player = this.player === "X" ? "O" : "X";
      },
      /**
       * Funzione che determina la combinazione di caselle vincitrice
       * @param {Number} position
       */
      isWinner(position) {
        return this.winner.positions.includes(position);
      },
      /**
       * Funzione che resetta tutta la tabella di gioco:
       */
      reset() {
        // al player viene assegnato automaticamente la X
        this.player = "X";
        // squares è inizialmente un array di 9 elementi null
        this.squares = Array(9).fill(null);
        // allo store globale di Vuex viene fatto un commit che esegue la funzione clear
        this.$store.commit("clear");
        // al router viene passato il percorso / per tornare alla pagina iniziale
        this.$router.push({ path: "/" });  
      }
    }
  };
</script>
