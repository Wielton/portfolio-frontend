<template>
    <div app>
        <h2 style="color:#5fadbe">Grant Wielgosz</h2>
        
        <v-divider></v-divider>
        
        <h4 style="color:#5fadbe">Edmonton, Alberta</h4>
        
        <v-divider></v-divider>
        
        <h4 style="color:#5fadbe">grantWielgosz@gmail.com</h4>
        
        <v-divider></v-divider>
        <!-- <p style="color:#5fadbe">Please contact me for more info!</p> -->
        <v-avatar
            v-for="link, index in socialIcons"
            :key="index"
            :link="link"
            >
            <a :href="link.link">
                <Icon
                    style="color:#5fadbe"
                    width="50"
                    height="50"
                    :icon="link.logo">
                </Icon>
            </a>
        </v-avatar>
    </div>
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

</style>