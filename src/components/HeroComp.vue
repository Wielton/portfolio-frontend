<template>
        <v-container class="outer" fluid>
            <v-row>
                <v-col cols="12">
                    <v-row> 
                        <v-col cols="8" xs="4">
                            <h1 class="full-div-text animate__animated animate__bounceInLeft">Full</h1>
                        </v-col>
                        <v-col cols="4" xs="2">
                                    <h2 class="text stack-s animate__animated animate__bounceInDown animate__delay-5s">S</h2>
                                    <h2 class="text stack-t animate__animated animate__bounceInDown animate__delay-4s">T</h2>
                                    <h2 class="text stack-a animate__animated animate__bounceInDown animate__delay-3s">A</h2>                      
                                    <h2 class="text stack-c animate__animated animate__bounceInDown animate__delay-2s">C</h2>
                                    <h2 class="text stack-k animate__animated animate__bounceInDown animate__delay-1s">K</h2>
                                
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <h1 class="dev-div-h1 animate__animated animate__bounceInRight">Development</h1>
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
        height: 100%;
        
    }
    .full-div-text {
        font-size: 7em;
        color: rgba(32, 20, 137, 0.5);
    }
    .stack-div-text {
        
        font-size: 2em;
    }
    .dev-div-h1 {
        color: rgba(32, 20, 137, 0.5);
        font-size: 4em;
        @media screen and (max-width: 415px) {
                font-size: 3em;
        }
    }
    
    
    .text-stack-div {
        
        position: relative;
        }
    .text {
        color: rgba(32, 20, 137, 0.6);
        font-size: 3em;
    }
    .stack-s { 
        --animate-delay: 0.1s;
        left: 70%;
        }
    .stack-t { 
        --animate-delay: 0.1s;
        left: 70%;
        }
    .stack-a { 
        --animate-delay: 0.1s;
        left: 70%;
        }
    .stack-c { 
        --animate-delay: 0.1s;
        left: 70%;
        }
    .stack-k { 
        --animate-delay: 100ms;
        left: 70%;
        }
    
</style>

