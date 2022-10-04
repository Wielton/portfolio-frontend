<template>
    <v-container fluid class="projects-main">
            <v-row>
                <v-col 
                    v-for="project, i in projects"
                    :key="i"
                    :project="project"
                    cols="12" sm="6" md="4" lg="4">
                    <v-hover v-slot="{ hover }">
                        <v-card
                            
                            min-width="100"
                            max-width="400"
                            class="mx-auto projects-trans">
                            <v-img
                                :aspect-ratio="16/9"
                                :src="`${project.img}`">
                                <v-expand-transition>
                                <v-content
                                        v-if="hover"
                                        class="d-flex transition-slow-in-slow-out v-card--reveal text-h2"
                                        style="height: 100%; width: 100%; background-image: linear-gradient(white, #5fadbe); opacity: 0.9; font-color: #383838">
                                        <v-card-subtitle>{{project.name}}</v-card-subtitle>
                                        
                                        <v-card-actions>
                                            <v-card-text>Frontend code:</v-card-text>
                                            <a v-if="isFeLink" :href='project.gitLinkFE' target="_blank"><v-btn class="btn">VIEW</v-btn></a>
                                            <v-card-text>Backend code:</v-card-text>
                                            <a v-if="isBeLink" :href='project.gitLinkBE' target="_blank"><v-btn class="btn">VIEW</v-btn></a>
                                        </v-card-actions>
                                    </v-content>
                            </v-expand-transition>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "ProjectsComponent",
        isFeLink: false,
        isBeLink: false,
        data: () => ({
            viewDetails: false,
            projects: [
                {name: 'Pokemon Battle', img: require('../assets/charBattle.png'), gitLinkFE: 'https://github.com/Wielton/Week10Hackathon'},
                {name: 'reDraft Fantasy Football', img: require('../assets/redraft-home.png'), gitLinkFE: 'https://github.com/Wielton/redraft-frontend', gitLinkBE: 'https://github.com/Wielton/redraft'},
                {name: 'Foodie: A Skip Clone', img: require('../assets/foodie.png'), gitLinkFE: 'https://github.com/Wielton/project-foodie', gitLinkBE: 'https://github.com/Wielton/foodie-backend'}
            ],
        })
    }
</script>

<style lang="scss" scoped>
    .projects-main {
        margin: auto;
    }
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .9;
        position: absolute;
        margin: auto;
    }
    *a {
        text-decoration: none;
    }
    .btn {
        border: 3px solid white;
        background-image: radial-gradient(#5fadbe, white);
    }
    .projects-trans {
        display: grid;
    }
</style>