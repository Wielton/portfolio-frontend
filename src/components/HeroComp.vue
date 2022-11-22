<template>
        <v-container class="outer" fluid>
            <v-row>
                <v-col cols="12">
                    <v-row class="hero-row-top"> 
                        <v-col cols="8" xs="4" align="end">
                            <h1 class="full-div-text animate__animated animate__bounceInLeft">Full</h1>
                        </v-col>
                        <v-col cols="4" xs="2" align="start">
                            <div class="text-stack-div">  
                                <h2 class="text stack-s animate__animated animate__bounceInDown animate__delay-5s">S</h2>
                                <h2 class="text stack-t animate__animated animate__bounceInDown animate__delay-4s">T</h2>
                                <h2 class="text stack-a animate__animated animate__bounceInDown animate__delay-3s">A</h2>                      
                                <h2 class="text stack-c animate__animated animate__bounceInDown animate__delay-2s">C</h2>
                                <h2 class="text stack-k animate__animated animate__bounceInDown animate__delay-1s">K</h2>
                            </div>    
                        </v-col>
                    </v-row>
                    <v-row>
                            <v-col cols="10" align="end">
                                <h1 class="dev-div-h1 animate__animated animate__bounceInRight">Developer</h1>
                            </v-col>
                        </v-row>
                    
                </v-col>
                <!-- <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                    <h4 class="text">
                        SEO Optimization
                        <br>
                        Secure
                        <br>
                        Modern Designs
                        <br>
                        Latest Technologies
                    </h4>
                </v-col> -->
            </v-row>
        </v-container>
</template>

<script>
import 'animate.css';
export default {
    name: 'HeroComp',
    data: () => {
        

        return {}
    }
}
</script>
<style lang="scss" scoped>
    .outer {
        width: 100%;
        height: 80%;
    }
    .hero-row-top {
        height: 40%;
    }
    .full-div-text {
        font-size: 7em;
        // color: #faed26;
        color: #1A4C78;
        @media screen and (min-width: 400px) {
                font-size: 10em;
        }
        @media screen and (min-width: 601px) {
                font-size: 15em;
        }
        @media screen and (min-width: 1000px) {
                font-size: 20em;
        }
    }
    .dev-div-h1 {
        color: #692C2C;
        
        font-size: 3em;
        @media screen and (min-width: 400px) {
                font-size: 4em;
        }
        @media screen and (min-width: 601px) {
                font-size: 5em;
        }
        @media screen and (min-width: 1000px) {
                font-size: 7em;
        }
    }
    
    
    .text-stack-div {
        height: 100%;
        position: relative;

        }
    .text {
        color: #692C2C;
        margin: 0;
        height: 10%;
        top: 75%;
        font-size: 2em;
        @media screen and (min-width: 400px) {
                font-size: 3em;
        }
        @media screen and (min-width: 601px) {
                font-size: 4em;
        }
        @media screen and (min-width: 1000px) {
                font-size: 6em;
        }
    }
    .stack-s {
        --animate-delay: 0.1s;
        
        
        }
    .stack-t {
        --animate-delay: 0.1s;
        
        
        }
    .stack-a {
        --animate-delay: 0.1s;
        
        }
    .stack-c {
        --animate-delay: 0.1s;
        }
    .stack-k {
        --animate-delay: 100ms;
        }
    
</style>

