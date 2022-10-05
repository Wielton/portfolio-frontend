<template>
    <v-container fluid class="projects-main">
            <v-row>
                <v-col 
                    v-for="project, i in projects"
                    :key="i"
                    :project="project"
                    cols="12" sm="6" md="6" lg="6" xl="6">
                    <v-hover v-slot="{ hover }">
                        <v-card
                        height="auto"
                            width="400"
                            class="mx-auto projects-trans">
                            <v-img
                                :aspect-ratio="16/9"
                                :src="`${project.img}`">
                                
                        </v-img>
                        <v-expand-transition background-color="transparent">
                                <v-card
                                        v-if="hover"
                                        
                                        class="transition-slow-in-fast-out v-card--reveal text-h2">
                                        <v-card-title>{{project.name}}</v-card-title>
                                        
                                        <v-card-actions>
                                            <a :href='project.gitLinkFE' target="_blank"><v-btn class="btn">Frontend Code</v-btn></a>
                                            <v-spacer></v-spacer>
                                            <a :href='project.gitLinkBE' target="_blank"><v-btn class="btn">Backend Code</v-btn></a>
                                        </v-card-actions>
                                    </v-card>
                            </v-expand-transition>
                    </v-card>
                    

                </v-hover>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "ProjectsComponent",
        data: () => ({
            projects: [
                {name: 'Pokemon Battle', img: require('../assets/charBattle.png'), gitLinkFE: 'https://github.com/Wielton/Week10Hackathon', description: 'Our Week 10 Hackathon competition submission using vanilla HTML, CSS, and JavaScript fundamentals.  Upon selection of a Pokemon character, the user is directed to the battle page against a random "evil" character.  The user has four attack options with varying hit values while receiving a counter-attack within the same range.'},
                {name: 'reDraft Fantasy Football', img: require('../assets/redraft-home.png'), gitLinkFE: 'https://github.com/Wielton/redraft-frontend', gitLinkBE: 'https://github.com/Wielton/redraft'},
                {name: 'Foodie: A Skip Clone', img: require('../assets/foodie.png'), gitLinkFE: 'https://github.com/Wielton/project-foodie', gitLinkBE: 'https://github.com/Wielton/foodie-backend'}
            ],
        })
    }
</script>

<style lang="scss" scoped>
    
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .9;
    }
    *a {
        text-decoration: none;
    }
    .btn {
        background-image: linear-gradient(to right, rgba(32, 20, 137, 0.6), white);
    }
    .projects-trans {
        display: grid;
    }
    .text-h2 {
        color: rgba(32, 20, 137, 0.6);
        
    }
</style>