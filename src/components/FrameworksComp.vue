<template>
<v-container class="frameworks-section">
    <v-row>
        <v-col>
            <h3 class="description-p">
                I take advantage of industry-leading frameworks to provide a <span class="p-span">responsive design</span> from mobile to widescreen sizes.
            </h3>
        </v-col>
    </v-row>
    <v-row align="center" justify="space-around">
        <v-col cols="3" v-for="(framework, index) in frameworks" :key="index" :framework="framework">
            <v-avatar class="icon-color">
                <Icon
                    :src='framework.logo'
                    :icon='framework.logo'
                >
                </Icon>
        </v-avatar>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { Icon } from '@iconify/vue2';
    export default {
        components: { Icon },
        data: () => ({
            
            frameworks: [
                {name: 'Vuetify', logo: 'mdi-vuetify'},
                {name: 'VueJS', logo: 'mdi-vuejs'},
                {name: 'Python', logo: 'mdi-language-python'},
                {name: 'JavaScript', logo: 'mdi-language-javascript'},
                {name: 'JavaScript', logo: 'mdi-la'},
            ],
        })
    }
</script>

<style lang="scss" scoped>
.frameworks-section {
        padding: 4%;
        margin: 0;
    }
    .icon-color {
        color: #C7CCDB;
    }
    
    .description-p {
        font-size:1.3em;
        font-weight:bold;
        color: #2A324B;
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
        color: #692C2C;
    }
    
</style>