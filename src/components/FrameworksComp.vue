<template>
<div class="frameworks-section">
    <h3 class="description">
        I take advantage of industry-leading frameworks to provide a <span class="p-span">responsive design</span> from mobile to widescreen sizes.
        <br>
        Animations and effects add a modern touch, while colour schemes add elegance.
    </h3>
    <v-avatar v-for="framework, index in frameworks" :key="index" :framework="framework">
        <Icon
            :src='framework.logo'
            :icon='framework.logo'
            color="#46344e"
        >
        </Icon>
    </v-avatar>
</div>
</template>

<script>
import { Icon } from '@iconify/vue2';
    export default {
        components: { Icon },
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
        padding: 5em;
        margin: 0;
    }
    .description {
        font-size:1.3em;
        font-weight:bold;
        color: #b3aaab;
    }
    .p-span {
        // margin: auto;

        font-size:1.7em;
        font-weight:bold;
        color: #faed26;
    }
</style>