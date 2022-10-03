<template>
    <v-container app fluid class="footer-container">
        <v-row>
            <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                <div class="footer-info">
                <h2>Grant Wielgosz</h2>
                <h4>Edmonton, Alberta</h4>
                <h4>grantWielgosz@gmail.com</h4>
                </div>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                <div class="footer-links">
                <v-avatar
                    v-for="link, index in socialIcons"
                    :key="index"
                    :link="link"
                    >
                    <a :href="link.link">
                        <Icon
                            style="color:black"
                            width="50"
                            height="50"
                            :icon="link.logo">
                        </Icon>
                    </a>
                </v-avatar>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="footer-copyright">
                <p >
                    <span>
                        <v-icon style="color:white">
                            mdi-copyright
                        </v-icon>
                    </span>
                    2022 WieltonWebDev 
                </p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { Icon } from '@iconify/vue2';
    export default {
        name: 'ContactFormComp',
        components: { Icon },
        data: () => ({
            socialIcons: [
                {name: 'Linkedin', link: 'https://www.linkedin.com/in/grant-wielgosz/', logo: 'mdi:linkedin'},
                {name: 'Github', link: 'https://github.com/Wielton?tab=repositories', logo: 'mdi:github'},
                
            ],
        })
    }
</script>

<style lang="scss" scoped>
    *div {
        text-align: center;
    }
    *h2 h4 {
        color: black;
    }
    p {
        color: white;
    }
    .footer-container {
        width: 100%;
    }
    .footer-links {

    }
</style>