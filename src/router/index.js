import VueRouter from "vue-router";
import Vue from "vue";
// import di components
import Board from "../components/Board.vue";
import Lobby from "../components/Lobby.vue";

Vue.use(VueRouter);

// definisco l'array di oggetti contenente i percorsi e i relativi components associati
const routes = [
    {
        path: "/",
        component: Lobby
    },
    {
        path: "/game",
        component: Board
    }
];

export default new VueRouter({ routes });