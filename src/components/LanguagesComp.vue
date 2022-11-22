<template>
<v-container class="languages-section" fluid>
    <v-row align="center" justify="center">
        <v-col cols="12">
            <h3 class="description-p">
                Hello, I'm Grant, a junior full stack developer from Edmonton, Alberta.  I love using <span class="p-span">UI/UX</span>
                to bring creative problem solving to production.
            </h3>
        </v-col>
    </v-row>
</v-container>
    
</template>
<script>
    // import { Icon } from '@iconify/vue2';
    export default {
        name: 'LanguagesComp',
        // components: { Icon },
        data: () => ({
            languages: {
                react: {name: 'React', logo: 'mdi:react', color: '#61DBFB'},
                vue: {name: 'Vue.js', logo: 'mdi:vuejs', color: '#42b883'},
                python : {name: 'Python', logo: 'mdi:language-python'},
                mysql : {name: 'mySQL', logo: 'mdi:database'},
            }
            
            
            
            
            
        })
    }
</script>

<style lang="scss" scoped>

.logo {
    color: #C7CCDB;
}
.languages-section {
        padding: 2em;
        margin: 0;
    }
    
    .description-p {
        font-size:1.3em;
        color: #2A324B;
        margin: 0;
        @media screen and (min-width: 600px) {
                font-size: 1.5em;
        }
        @media screen and (min-width: 1023px) {
                font-size: 2em;
        }
    }
    
    .p-span {
        // margin: auto;

        font-size:1.7em;
        color: #692C2C;
    }
</style>