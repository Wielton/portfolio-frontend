<template>
    <v-container app fluid class="footer-container">
        <v-row>
            <v-col cols="12" xs="12" sm="6" md="6" lg="6" align-self="center">
                <div class="footer-info">
                <h2 class="text name">Grant Wielgosz</h2>
                <h4 class="text location">Edmonton, Alberta</h4>
                <h4 class="text email">grantWielgosz@gmail.com</h4>
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
                            :color="link.brandColor"
                            width="50"
                            height="50"
                            :icon="link.logo">
                        </Icon>
                    </a>
                    <v-spacer></v-spacer>
                </v-avatar>
                
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" align-self="center">
                <div class="footer-copyright">
                <p class="text copyright">
                    <span>
                        <v-icon style="color:#383838">
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
        color: #383838;
    }
    .footer-container {
        width: 100%;
        
    }
    .footer-info {
        
    }
    .footer-links {
        
    }
</style>