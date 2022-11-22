<template>
    <v-container fluid class="projects-main">
        <v-row
            v-for="project, i in projects"
            :key="i"
            :project="project"
            align="center"
            justify="center"
            class="ma-auto"
            >
                <v-col cols="12" sm="12" md="6" lg="6">
                    <h1>{{project.name}}</h1>
                    <p class="description-p">{{project.description}}</p>
                    <a v-if="project.appLink && project.isApp === true" :href="project.appLink" target="_blank"><v-btn rounded text elevation="0" class="btn">App Link</v-btn></a>
                    <a v-if="project.gitLinkFE" :href="project.gitLinkFE" target="_blank"><v-btn rounded text elevation="0" class="btn">Frontend Code</v-btn></a>
                    <a v-if="project.gitLinkBE" :href="project.gitLinkBE" target="_blank"><v-btn rounded text elevation="0" class="btn">Backend Code</v-btn></a>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="d-flex justify-center align-center pa-6">
                    <v-img
                        max-width="500"
                        min-width="300"
                        :aspect-ratio="16/9"
                        :src="`${project.img}`">
                    </v-img>
                </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "ProjectsComponent",
        data: () => ({
            projects: [
                // {name: 'Pokemon Battle', img: require('../assets/charBattle.png'), gitLinkFE: 'https://github.com/Wielton/Week10Hackathon',description: 'Week 10 Hackathon submission using HTML, CSS, and JavaScript fundamentals.  Upon selection of a Pokemon character, the user is directed to the battle page against a random "evil" character.  The user has four attack options with varying hit values while receiving a counter-attack within the same range.'},
                {name: 'Moody4Foody: A Skip Clone', img: require('../assets/foodie.png'), isApp: true, appLink: 'https://moody4foody.ml', gitLinkFE: 'https://github.com/Wielton/project-foodie', gitLinkBE: 'https://github.com/Wielton/foodie-backend', description: 'Just what the title says!  This project was built in two 14-day phases.  The fully-responsive frontend levied the power of Vue, and its framework Vuetify, while using Axios for RESTful API calls. Python/Flask and MariaDB/MySQL handled the backend logic and database queries.'},
                {name: 'reDraft Fantasy Football', img: require('../assets/redraft-home.png'), isApp: false, appLink: 'https://redraft.ml', gitLinkFE: 'https://github.com/Wielton/redraft-frontend', gitLinkBE: 'https://github.com/Wielton/redraft', description: 'A scalable fantasy football league app consisting of live, turn-based, and timed drafts, roster management, schedule, scoring, and updating rankings.  The current product was my school MVP submission using Vue/Vuetify, Axios, Flask, MariaDB.  User features include the ability to register/join, login/logout, create/join league, add/delete players, and viewing current rosters within the same league.'},
                
            ],
        })
    }
</script>

<style lang="scss" scoped>
    .projects-main {
        padding: 1.3em;
        margin: 0;
    }
    .projects-container {
        margin: 0;
    }
    .description-p {
        font-size: 1.3em;
        color: #2A324B;
        margin: 0;
        padding: 2em;
        @media screen and (min-width: 600px) {
                font-size: 1.4em;
        }
        @media screen and (min-width: 1024px) {
            font-size: 1.5em;
        }
    }
    
    h1 {
        font-size: 2.5em;
        color: #692C2C;
        
    }
    a {
        text-decoration: none;
    }
    .btn {
        color: #C7CCDB;
        background-color: #692C2C;
    }
    .projects-trans {
        display: grid;
    }
    .text-h2 {
        color: #46344e;
        
    }
</style>