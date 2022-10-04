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
                <p class="description-p">
                    Stand out in Google searches with effective
                <span class="p-span">Search Engine Optimization</span>
                using business specific keywords</p>
            </v-col>
        </v-row>
        <v-divider />
        <v-row>
            <v-col>
                <p class="description-p">Safe, trusted sites keep information 
                    <span class="p-span">Secure</span>
                    </p>
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
    h1 {
        font-size: 2.5em;
        color: grey;
    }
    .description-p {
        font-size:1.3em;
        font-weight:bold;
        color: rgb(101, 101, 101);
    }
    .p-span {
        font-size:1.7em;
        font-weight:bold;
        color: rgba(226, 86, 22, 0.8)
    }
</style>