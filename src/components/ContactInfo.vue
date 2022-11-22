<template>
    <v-container app fluid class="footer-container">
        <v-row>
            <v-col cols="12" xs="12" sm="6" md="6" lg="6" align-self="center">
                <div class="footer-info">
                <h2 class="text name">Grant Wielgosz</h2>
                <h4 class="text location">Edmonton, Alberta</h4>
                <h4 class="text email">grantwielgosz@gmail.com</h4>
                </div>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6" lg="6" align-self="center">
                <div class="footer-links">
                    <v-avatar
                        v-for="link, index in socialIcons"
                        :key="index"
                        :link="link"
                        >
                        <a :href="link.link">
                            <Icon
                                style="color: #C7CCDB;"
                                width="50"
                                height="50"
                                :icon="link.logo">
                            </Icon>
                        </a>
                    </v-avatar>
                </div>
            </v-col>
        </v-row>
        <v-row class="align-center justify-center">
            <v-col cols="12" align-self="center" >
                <p class="text copyright">
                        <v-icon class="text">
                            mdi-copyright
                        </v-icon>
                    2022 WieltonWebDev 
                </p>
                
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
                {name: 'Linkedin', link: 'https://www.linkedin.com/in/grant-wielgosz/', logo: 'mdi:linkedin', brandColor: '#61DBFB'},
                {name: 'Github', link: 'https://github.com/Wielton?tab=repositories', logo: 'mdi:github', brandColor: '#F1502F'},
                
            ],
        })
    }
</script>

<style lang="scss" scoped>
    *div {
        text-align: center;
    }
    
    .text {
        color: #C7CCDB;
    }
    .footer-container {
        width: 100%;
        
    }
</style>