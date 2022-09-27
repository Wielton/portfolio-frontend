<template>
    <v-container app fluid class="home-hero">
                <v-row
                    class="border-styles"
                    align="center"
                    justify="center">
                        <v-col 
                        cols="12"
                        sm="4"
                        md="6">
                            <div class="hero-animation-div">
                                <div class="hero-full-text"><h1 class="linear">FULL</h1></div>
                                <div class="hero-stack-text"><h1 class="linear">STACK</h1></div>
                                <div class="hero-development-text"><h1 class="linear">DEVELOPMENT</h1></div>
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                
                            </div>
                        </v-col>
                        
                </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HeroComp',
    data: () => {
        

        return {}
    }
}
</script>
<style lang="scss" scoped>
    .home-hero {
        // background-color: rgb(188, 187, 187);
        background-color: white;
        
    }
    .hero-animation-div {
        text-align: left;
        margin: auto;
        *h1 {
        color: #383838;
        font-size: 5em;
    }
    }
    
    
    
    
</style>

