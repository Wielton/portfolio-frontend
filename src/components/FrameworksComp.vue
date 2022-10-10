<template>
<div class="frameworks-section">
    <h3 class="description-p">
        I take advantage of industry-leading frameworks to provide a <span class="p-span">responsive design</span> from mobile to widescreen sizes.
        <br>
        Animations and effects add a modern touch, while colour schemes add elegance.
    </h3>
    <!-- <v-avatar v-for="framework, index in frameworks" :key="index" :framework="framework" class="icon-color">
        <Icon
            :src='framework.logo'
            :icon='framework.logo'
            
        >
        </Icon>
    </v-avatar> -->
</div>
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
.frameworks-section {
        padding: 4%;
        margin: 0;
    }
    
    .description-p {
        font-size:1.3em;
        font-weight:bold;
        color: #b3aaab;
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