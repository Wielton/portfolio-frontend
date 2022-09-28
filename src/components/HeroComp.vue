<template>
    <v-container app fluid class="home-hero">
                <v-row
                    cols="12"
                    class="border-styles"
                    align="center"
                    justify="center">
                        <v-col 
                            sm="12"
                            md="4"
                        >
                            <v-content md4 class="hero-animation-div">
                                <h1 class="linear">FULL</h1>
                                <h1 class="linear">STACK</h1>
                            </v-content>
                        </v-col>
                        <v-col>
                            <v-content>
                                
                            </v-content>
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

