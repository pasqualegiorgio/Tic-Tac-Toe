<template>
    <!-- Casella di gioco. In base al valore inserito vengono applicati diversi stili dinamici. Ci sono 
    anche stili dinamici nel caso di game over e per il vincitore -->
    <div 
        class="game__box" 
        @click="onClick" 
        :class="{ 
            'game__box--x': value === 'X', 
            'game__box--o': value === 'O',
            'game__box--over': isGameOver,
            'game__box--winner': isWinner 
        }"
    >
        <span>{{ value }}</span>
    </div>
</template>

<script>
    export default {
        // definizione props
        props: {
            value: String,
            isGameOver: Boolean,
            isWinner: Boolean
        },
        methods: {
            // Funzione che emette l'evento al click della casella di gioco
            onClick() {
                this.$emit('click');
            }
        }
    }
</script>