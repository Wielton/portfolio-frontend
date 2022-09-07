<template>
    <div>
        <v-btn @click="getPokemon()">GET</v-btn>
        <div 
            >
            <v-card
                v-for="pokemon in pokemonList"
                :key="pokemon.id"
                :pokemon="pokemon"
            >
                <v-card-title>{{pokemon.name}}</v-card-title>
                <v-card-subtitle>{{pokemon.url}}</v-card-subtitle>
            </v-card>
        </div>
    </div>
</template>

<script>
import {usePokemonStore} from '@/store/pokemon';
import {mapActions, mapState} from 'pinia';
    export default {
        computed: {
            ...mapState(usePokemonStore, ['pokemonList'])
        },
        methods: {
            ...mapActions(usePokemonStore, ['getPokemon'])
            }
        
    }
</script>

<style lang="scss" scoped>
    
</style>