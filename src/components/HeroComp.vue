<template>
        <v-container class="outer" >
            <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                    <v-container class="text">
                        <v-row> 
                            <v-col cols="8">
                                <div class="full-div-text">Full</div>
                            </v-col>
                            <v-col cols="4">
                                <div class="stack-div-text">
                                    <div class="text-stack-s"><h2>S</h2></div>
                                    <div class="text-stack-t"><h2>T</h2></div>
                                    <div class="text-stack-a"><h2>A</h2></div>
                                    <div class="text-stack-c"><h2>C</h2></div>
                                    <div class="text-stack-k"><h2>K</h2></div>                        
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <div class="dev-div">
                                    <h1 class="dev-div-h1">Development</h1>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
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
        display: block;
        font-size: 10em;
        
    }
    .stack-div-text {
        display: block;
        font-size: 2em;
    }
    .dev-div-h1 {
        display:block;
        font-size: 4em;
    }
    
    
    
</style>

