<template>
    <v-container fluid class="about-div">
        <v-row
            align="center"
            class="design-section"
            >
            <v-col cols="12" sm="6" xl="6" >
                <h1 class="seo-h1">
                    Design
                </h1>  
            
            
            
                <p class="description-p">
                    Using rich colour schemes, readable layout, semantic markup, and complementing font styles, I create attractive and usable 
                <span class="p-span">UI/UX</span>
                    for my clients and users</p>
            </v-col>
        </v-row>
        <v-row
            class="secure-section"
            align="center">
            <v-col cols="12" sm="12" xl="6">
                <h1 class="secure-h1">
                    Organization
                </h1>  
            
                <p class="description-p">
                    Just a few functions your company can utilize through the usage of a 
                    <span class="p-span">database</span>
                    include memberships, client lists, and inventory.  How can a database help you?
                    </p>
            </v-col>
        </v-row>
        <v-row
            
            class="seo-section"
            >
            <v-col cols="12" sm="6" xl="12">
                <h1 class="seo-h1">
                    SEO
                </h1>
                <p class="description-seo">
                    Stand out in Google searches with effective
                <span class="p-span">Search Engine Optimization</span>
                using business specific keywords</p>
            </v-col>
        </v-row>
        <v-row
            class="secure-section"
            align="center">
            <v-col cols="12" sm="12" xl="6">
                <h1 class="secure-h1">
                    Dependability
                </h1>
                <p class="description-depend">Safe, trusted sites keep your 
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
    .about-div {
    }
    .seo-section {
        padding: 5em;
        margin: 0;
    }
    .secure-section {
        padding: 5em;
        margin: 0;
    }
    h1 {
        font-size: 3em;
        color: #46344e;
        
    }
    .description-p {
        font-size:1.3em;
        font-weight:bold;
        color: whitesmoke;
        margin: 0;
    }
    .description-seo {
        font-size:1.3em;
        font-weight:bold;
        color: whitesmoke;
        margin: 0;
    }
    .description-depend {
        font-size:1.3em;
        font-weight:bold;
        color: whitesmoke;
        margin: 0;
    }
    .p-span {
        // margin: auto;

        font-size:1.7em;
        font-weight:bold;
        color: #faed26;
    }
</style>