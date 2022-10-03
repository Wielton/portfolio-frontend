<template>
    <v-container fluid>
        <v-row
            >
            <v-col>
                <h1 class="seo-h1">
                    SEO
                </h1>  
            </v-col>
            <v-col>
                <p class="seo-p">Stand out in Google searches with effective <span class="p-span">Search Engine Optimization</span></p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p class="secure-p">Safe, trusted sites keep information<span class="p-span">Secure</span></p>
            </v-col>
            <v-col>
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
    // .about {
    //     background-image: linear-gradient(to top, black, white);
    // }
    .seo-h1 {
        font-size: 2.5em;
        color: grey;
    }
    .secure-h1 {
        font-size: 2.5em;
        color: grey;
    }
    .p-span {
        font-size:1.5em;
        font-weight:bold;
        color: rgba(226, 86, 22, 0.8)
    }
</style>