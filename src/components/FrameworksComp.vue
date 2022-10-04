<template>
    <h3 class="description">Take advantage of industry-leading frameworks providing responsive design from mobile to widescreen sizes.
                    <br>
                    Animations and effects add a modern touch, while colour schemes add elegance.
                <!-- <span><h2>React</h2>
                    <v-avatar>
                        <Icon
                            :src='react.logo'
                            :icon='react.logo'
                            :color="react.color"
                            >
                            </Icon>
                    </v-avatar>
                </span>
                and <span><h2>Vue</h2>
                <v-avatar>
                        <Icon
                            :src='vue.logo'
                            :icon='vue.logo'
                            :color="vue.color"
                            >
                            </Icon>
                    </v-avatar>
                    </span> -->
                </h3>
</template>

<script>
// import { Icon } from '@iconify/vue2';
    export default {
        // components: { Icon },
        data: () => ({
            
            frameworks: [
                {name: 'Vuetify', logo: 'mdi:vuetify'},
                {name: 'TailwindCSS', logo: 'mdi:tailwind'},
                {name: 'Bootstrap', logo: 'mdi:bootstrap'}
            ],
        })
    }
</script>

<style lang="scss" scoped>
.list-item {
    
}
    .language-text {
        color: black;
    }
</style>