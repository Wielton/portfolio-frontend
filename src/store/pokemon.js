import axios from "axios";
import { defineStore } from "pinia";


export const usePokemonStore = defineStore('pokemon',{
    state : () => {
        return{
            pokemonList: []
        }   
        
    },
    actions: {
        getPokemon(){
            axios.request({
                url:'https://pokeapi.co/api/v2/pokemon/',
                method : "GET",
                
                
            }).then((response)=>{
                this.pokemonList = response.data.results;
                console.log(response);
            }).catch((error)=>{
                console.log(error);
            })
        }
    },
    
})
