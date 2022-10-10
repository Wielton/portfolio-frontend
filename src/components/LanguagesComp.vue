<template>
<div class="languages-section">
    <h3 class="description">
        Using <span class="p-span">powerful programming languages</span>, I am untethered and free from design restrictions, 
        <br>
        opening up an extensive creative environment.
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
</div>
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
    color: #332639;
}
.languages-section {
        padding: 5em;
        margin: 0;
    }
    
    .description {
        font-size:1.3em;
        font-weight:bold;
        color: #b3aaab;
    }
    .p-span {
        // margin: auto;

        font-size:1.7em;
        font-weight:bold;
        color: #faed26;
    }
</style>