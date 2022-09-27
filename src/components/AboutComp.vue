<template>
    <div class="about">
        <h1 style="color:#5fadbe">ABOUT</h1>
        <v-row
            id="about-section"
            ref="about"
            align="center">
            <v-col>
                <p class="about-content-one">
                    Welcome to my site! I'm a Full Stack Developer from Canada, creating interactive and responsive designs
                    <br>
                    On both <span>FRONTEND</span> and <span>BACKEND</span>
                    
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
        padding: 5%;
        align-items: center;
    }
    .about-content-two {
        color:#5fadbe;
        align-items: center;
    }
</style>