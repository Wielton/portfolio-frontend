<template>
    <div class="about">
        <h1 style="color:#5fadbe">ABOUT</h1>
        <v-row
            id="about-section"
            ref="about"
            align="center">
            <v-col>
                <p class="about-content-one">
                    
                    
                </p>  
            </v-col> 
        </v-row>
        
    </div>
</template>

<script>
    export default {
        name: 'AboutComponent'
    }
</script>

<style lang="scss" scoped>
    
    .about-content-one {
        color:#5fadbe;
        margin: auto;
        align-items: center;
    }
    .about-content-two {
        color:#5fadbe;
        align-items: center;
    }
</style>