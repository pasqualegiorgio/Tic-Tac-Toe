<template>
    <div class="game__action">
        <button @click="onClick">Restart game</button>
    </div>
</template>

<script>
    export default {
        methods: {
            // Funzione che emette l'evento al click del button
            onClick() {
                this.$emit("click");
            }
        }   
    }
</script>