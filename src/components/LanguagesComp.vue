<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <h3 class="description">Take advantage of industry-leading frameworks providing responsive design from mobile to widescreen sizes.
                    <br>
                    Animations and effects add a modern touch, while colour schemes add elegance.
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
                <v-avatar>
                        <Icon
                            :src='vue.logo'
                            :icon='vue.logo'
                            :color="vue.color"
                            >
                            </Icon>
                    </v-avatar>
                    </span> -->
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
            react: {name: 'React', logo: 'mdi:react', color: '#61DBFB'},
            vue: {name: 'Vue.js', logo: 'mdi:vuejs', color: '#42b883'},
            python: {name: 'Python', logo: 'mdi:language-python'},
            mysql : {name: 'mySQL', logo: 'mdi:database'},
            
        })
    }
</script>

<style lang="scss" scoped>

.list-item {
    border: none;
}
    
    .description {
        font-size:1.3em;
        font-weight:bold;
        color: rgb(101, 101, 101);
    }
</style>