<template>
    <v-container fluid class="about-div">
        <v-row
            align="center"
            class="section"
            >
            <v-col cols="12">
                <h1 class="h1">
                    About Me
                </h1>  
                <p class="description-p">
                    My days used to be spent building a product from scratch.  Sometimes with blueprints, sometimes without.
                    In a fast-paced, custom fabrication environment, I used various metals and sophisticated tools.  
                    I perfected most welding techniques, learned how to keep imperfections to a minimum, and always provided the highest quality. 
                    The trade required accountability and taking ownership of my work.  It also required innovation and creative problem-solving.
                    <br />
                    When I was focused on welding I would have lots of time to think.  Sometimes I would have app ideas, but once I had a vision of a new fantasy football concept.
                    I love fantasy football and I wanted to build this app.
                </p>
            </v-col>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
        </v-row>
        <v-row
            class="section"
            align="center">
            <v-col cols="12" sm="12" xl="6">
                <p class="description-p">
                    I began self-learning on Udemy, Code Academy, and google.  I had a goal but this goal would become much bigger than I anticipated.
                    I began experiencing debilitating pain, and in September 2021 I was diagnosed with Fibromyalgia.  No longer was my goal just a passion and a hobby.
                    Shit got serious.  I quit work and recently graduated from InnoTech College with a Full Stack Developer Diploma! 
                    <br />
                    Many skills I learned in my welding career parallel with web development.  This, along with my disability, and my passion for development provided an easy, logical solution 
                    to the biggest problem I've ever faced. Pursue my dreams and become a developer. 
                </p>
            </v-col>
        </v-row>
        <v-row
            class="section"
            >
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-col cols="12">
                
                <p class="description-p">
                    Continue scrolling to see some projects, including the beginning code to my football app!
                    <br />
                    There's also a comment section if you'd like to drop a line!
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
                font-size: 3em;
        }
        @media screen and (min-width: 600px) {
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
    }
</style>