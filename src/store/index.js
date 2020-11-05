import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    /* definisco gli state 'player1Name' e 'player2Name' (per l'accesso al gioco nella lobby) come stringhe 
    vuote */
    state: {
        player1Name: "",
        player2Name: ""
    },
    // 
    mutations: {
        /**
         * Funzione che pulisce le input del form della lobby, per poter inserire nuovi nomi quando il gioco 
        si riavvia. Accede ai valori degli state 'player1Name' e 'player2Name' e assegna loro null
        @param state
        */
        clear(state) {
            state.player1Name = null;
            state.player2Name = null;
        },
        /**
         * Funzione che cambia lo state 'player1Name' e lo imposta al valore passato come parametro
         * @param state 
         * @param value 
         */
        player1Name(state, value) {
            state.player1Name = value;
        },
        /**
         * Funzione che cambia lo state 'player2Name' e lo imposta al valore passato come parametro
         * @param state 
         * @param value 
         */
        player2Name(state, value) {
            state.player2Name = value;
        }
    }
})