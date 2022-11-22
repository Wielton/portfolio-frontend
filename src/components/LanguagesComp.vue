<template>
<v-container class="languages-section">
    <v-row class="text-align">
        <v-col cols="12">
            <h3 class="description-p">
                Hello, I'm Grant, a junior full stack developer from Edmonton, Alberta.  I love using <span class="p-span">UI/UX</span>
                to bring creative problem solving to production. 
                <!-- Using <span class="p-span">VueJS</span> and its frameworks <span class="p-span">Vuetify</span>,
                <span class="p-span">Vue Router</span>, and <span class="p-span">Vue Cookies</span>  
                <br> -->
                
            </h3>
    <!-- <v-avatar class="vue logo">
        <Icon
            :src='languages.vue.logo'
            :icon='languages.vue.logo'>
        </Icon>
    </v-avatar>
    <v-avatar class="react logo">
        <Icon
            :src='languages.react.logo'
            :icon='languages.react.logo'>
        </Icon>
    </v-avatar>
    <v-avatar class="python logo">
        <Icon
            :src='languages.python.logo'
            :icon='languages.python.logo'>
        </Icon>
    </v-avatar>
    <v-avatar class="mysql logo">
        <Icon
            :src='languages.mysql.logo'
            :icon='languages.mysql.logo'>
        </Icon>
    </v-avatar> -->
</v-col>
</v-row>
</v-container>
                <!-- <span><h2>React</h2>
                    <v-avatar>
                        <Icon
                            :src='react.logo'
                            :icon='react.logo'
                            :color="react.color"
                            >
                            </Icon>
                    </v-avatar>
                </span>
                and <span><h2>Vue</h2>
                
                    </span> -->
    
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
        padding: 5em;
        margin: 0;
    }
    
    .description-p {
        font-size:1.3em;
        font-weight:bold;
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
        font-weight:bold;
        color: #692C2C;
    }
</style>