<template>
    <v-container fluid>
        <h1 ref="projects" style="color:#5fadbe">PROJECTS</h1>
            <v-row
                id="projects-section"
                align="center">
                <v-col 
                    v-for="project, i in projects"
                    :key="i"
                    :project="project"
                    cols="12" sm="6" md="4" lg="4">
                    <v-hover v-slot="{ hover }">
                        <v-card
                            color="grey lighten-4"
                            min-width="100"
                            max-width="300"
                            class="mx-auto">
                            <v-img
                                :aspect-ratio="16/9"
                                :src="`${project.img}`">
                                <v-expand-transition>
                                <div
                                        v-if="hover"
                                        class="d-flex transition-slow-in-fast-out v-card--reveal text-h2"
                                        style="height: 100%; background-color:#5fadbe; font-color: #383838">
                                        <v-card-subtitle>{{project.name}}</v-card-subtitle>
                                        <v-card-actions>
                                            <p>View the front end code on GitHub:</p>
                                            <v-btn><a :href="project.gitLinkFE" target="/blank">VIEW</a></v-btn>
                                        </v-card-actions>
                                    <div>
                                        <v-expand-x-transition>
                                            <div
                                                v-if="viewDetails">
                                                <p
                                                    class="description-content" 
                                                    >{{project.description}}</p>
                                            </div>
                                        </v-expand-x-transition>
                                    </div>
                                </div>
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
        data: () => ({
            projects: [
                // {name: 'Pokemon Battle', img: require('../src/assets/charBattle.png'), skill: "fa-brands fa-html5", gitLink: ''},
                {name: 'reDraft Fantasy Football', img: require('../assets/redraft-home.png'), gitLinkFE: 'https://github.com/Wielton/redraft-frontend', gitLinkBE: 'https://github.com/Wielton/redraft'},
                {name: 'Foodie: A Skip Clone', img: require('../assets/foodie.png'), gitLinkFE: 'https://github.com/Wielton/project-foodie', gitLinkBE: 'https://github.com/Wielton/foodie-backend'}
            ],
        })
    }
</script>

<style lang="scss" scoped>

</style>