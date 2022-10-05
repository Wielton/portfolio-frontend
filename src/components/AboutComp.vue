<template>
    <div class="about-div">
        <v-row
            align="center"
            
            >
            <v-col cols="12" sm="6" xl="6">
                <h1 class="seo-h1">
                    SEO
                </h1>  
            </v-col>
            <v-col cols="12" sm="6" xl="6">
                <p class="description-p">
                    Stand out in Google searches with effective
                <span class="p-span">Search Engine Optimization</span>
                using business specific keywords</p>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="6" xl="6">
                <p class="description-p">Safe, trusted sites keep information 
                    <span class="p-span">Secure</span>
                    </p>
            </v-col>
            <v-col cols="12" sm="6" xl="6">
                <h1 class="secure-h1">
                    Secure
                </h1>  
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
    .about-div {
        height: 40em;
    }
    h1 {
        font-size: 3em;
        color: grey;
    }
    .description-p {
        margin: 3em;
        font-size:1.3em;
        font-weight:bold;
        color: rgb(101, 101, 101);
    }
    .p-span {
        // margin: auto;

        font-size:1.7em;
        font-weight:bold;
        color: rgba(226, 86, 22, 0.8);
    }
</style>