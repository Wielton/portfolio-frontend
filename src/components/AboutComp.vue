<template>
    <v-container fluid class="about-div">
        <v-row
            align="center"
            class="design-section"
            >
            <v-col cols="12" sm="6" xl="6">
                <h1 class="seo-h1">
                    Design
                </h1>  
            </v-col>
            <v-col cols="12" sm="6" xl="6">
                <p class="description-p">
                    Using rich colour schemes, readable layout, schemantic markup, and complementing font styles, I create attractive, usable 
                <span class="p-span">UI/UX</span>
                    for my clients and their users</p>
            </v-col>
        </v-row>
        <v-row
            class="secure-section"
            align="center">
            <v-col cols="12" sm="6" xl="6">
                <p class="description-p">Safe, trusted sites keep information 
                    <span class="p-span">Database</span>
                    </p>
            </v-col>
            <v-col cols="12" sm="6" xl="6">
                <h1 class="secure-h1">
                    Secure
                </h1>  
            </v-col>
        </v-row>
        <v-row
            align="center"
            class="seo-section"
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
        <v-row
            class="secure-section"
            align="center">
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
    </v-container>
</template>

<script>
    export default {
        name: 'AboutComponent'
    }
</script>

<style lang="scss" scoped>
    .about-div {
        background-color: white;
    }
    .seo-section {
        padding: 5em;
    }
    .secure-section {
        padding: 5em;
    }
    h1 {
        font-size: 3em;
        color: grey;
    }
    .description-p {
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