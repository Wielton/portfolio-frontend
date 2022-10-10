<template>
    <v-container fluid class="about-div">
        <v-row
            align="center"
            class="section"
            >
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                <h1 class="h1">
                    Design
                </h1>  
                <p class="description-p">
                    Using rich colour schemes, readable layout, semantic markup, and complementing font styles, I create attractive and usable 
                <span class="p-span">UI/UX</span>
                    for my clients and users.</p>
            </v-col>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
        </v-row>
        <v-row
            class="section"
            align="center">
            <v-col cols="12" sm="12" xl="6">
                <h1 class="h1 secure-h1">
                    Engineered
                </h1>  
            
                <p class="description-p">
                    Just a few functions your company can utilize through a 
                    <span class="p-span">database</span>
                    include memberships, client lists, and inventory.  How can a database help you?
                    </p>
            </v-col>
        </v-row>
        <v-row
            class="section"
            >
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                <h1 class="h1 seo-h1">
                    SEO
                </h1>
                <p class="description-p">
                    Stand out in Google searches with effective
                <span class="p-span">Search Engine Optimization</span>
                using business specific keywords.</p>
            </v-col>
        </v-row>
        <v-row
            class="section"
            align="center">
            <v-col cols="12" sm="12" md="12" lg="12" xl="6">
                <h1 class="h1 dependability-h1">
                    Dependability
                </h1>
                <p class="description-p">Safe, trusted sites keep your 
                    <span class="p-span">information secure</span>
                    and ensures your privacy.
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
        padding: 4%;
        margin: 0;
    }
    h1 {
        font-size: 2.5em;
        color: #46344e;
        @media screen and (min-width: 395px) {
                font-size: 3em;
        }
        @media screen and (min-width: 600px) {
                font-size: 4em;
        }
    }
    
    .seo-h1 {
        color: #3d2e44;
    }
    .dependability-h1 {
        color: #332639;
    }
    .description-p {
        font-size:1.3em;
        font-weight:bold;
        color: whitesmoke;
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
        color: #faed26;
    }
</style>