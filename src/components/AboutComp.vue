<template>
    <v-container fluid class="about-div">
        <v-row
            align="center"
            class="section"
            >
            <v-col cols="12"> 
                <p class="description-p">
                    My days used to be spent in a fast-paced, custom fabrication environment, using various metals and sophisticated tools.
                    Now my tools of choice are Vue and its plugins, Python and its frameworks, handling RESTful API calls with Axios and database queries with MySQL.
                    
                </p>
            </v-col>
        </v-row>
        <v-row class="section">
            <v-col cols="12">
                <p class="description-p">
                    What started as a hobby and self-learning has culminated into a Full Stack Web Developer diploma and a career overhaul.
                    I've transferred my skills into the tech industry, and am looking for my first opportunity with an experienced team!
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'AboutComponent'
    }
</script>

<style lang="scss" scoped>
    
    .section {
        padding: 10%;
        margin: 0;
    }
    h1 {
        font-size: 2.5em;
        color: #692C2C;
        @media screen and (min-width: 395px) {
                font-size: 2em;
        }
        @media screen and (min-width: 600px) {
                font-size: 3em;
        }
        @media screen and (min-width: 1024px) {
            font-size: 4em;
        }
    }
    
    .seo-h1 {
        color: #692C2C;
    }
    .dependability-h1 {
        color: #2A324B;
    }
    .description-p {
        font-size:1.3em;
        color: #C7CCDB;
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
    }
</style>