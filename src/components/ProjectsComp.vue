<template>
    <v-container fluid class="projects-main ">
        <v-row
            v-for="project, i in projects"
            :key="i"
            :project="project"
            align="center"
            justify="center"
            >
                <v-col cols="12" sm="12" md="6" lg="6" class="justify-center align-center">
                    <h1>{{project.name}}</h1>
                    <p class="description-p">{{project.description}}</p>
                    <v-btn rounded text color="rgb(245,245,245)" elevation="10" class="btn" :to="project.gitLinkFE" target="_blank">Frontend Code</v-btn>
                    <v-btn rounded text color="rgb(245,245,245)" elevation="10" class="btn" :to='project.gitLinkBE' target="_blank">Backend Code</v-btn>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="d-flex justify-center align-center">
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
                {name: 'Pokemon Battle', img: require('../assets/charBattle.png'), gitLinkFE: 'https://github.com/Wielton/Week10Hackathon', description: 'Week 10 Hackathon submission using HTML, CSS, and JavaScript fundamentals.  Upon selection of a Pokemon character, the user is directed to the battle page against a random "evil" character.  The user has four attack options with varying hit values while receiving a counter-attack within the same range.'},
                {name: 'Foodie: A Skip Clone', img: require('../assets/foodie.png'), gitLinkFE: 'https://github.com/Wielton/project-foodie', gitLinkBE: 'https://github.com/Wielton/foodie-backend', description: 'Just what the title says!  This project was built in two 14-day phases.  The fully-responsive frontend levied the power of Vue, and its framework Vuetify, while using Axios for RESTful API calls. Python/Flask and MariaDB/MySQL handled the backend logic and database queries.'},
                {name: 'reDraft Fantasy Football', img: require('../assets/redraft-home.png'), gitLinkFE: 'https://github.com/Wielton/redraft-frontend', gitLinkBE: 'https://github.com/Wielton/redraft', description: 'A scalable fantasy football league app consisting of live, turn-based, and timed drafts, roster management, matchup schedule, scoring, and updating rankings.  The current product was my school MVP submission using Vue/Vuetify, Axios, Flask, MariaDB.  User features include the ability to register/join, login/logout, create/join league, add/delete players, view current rosters within league.'},
                
            ],
        })
    }
</script>

<style lang="scss" scoped>
    .projects-main {
        padding: 2%;
    }
    .description-p {
        font-size:1.3em;
        font-weight:bold;
        color: whitesmoke;
        margin: 0;
        padding: 5%;
    }
    
    h1 {
        font-size: 3em;
        color: #b3aaab;
        
    }
    
    .btn {
        background-color: #9d8d8f;
    }
    .projects-trans {
        display: grid;
    }
    .text-h2 {
        color: #46344e;
        
    }
</style>