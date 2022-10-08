<template>
<div>
    <h3 class="description">
                Using the powerful <span class="p-span">JavaScript </span>programming language, I am untethered and free from design restrictions, 

                <br>
                opening up an endless creative environment.
            </h3>
            <v-avatar v-for="language, index in languages" :key="index" :language="language">
                <Icon
                    :src='language.logo'
                    :icon='language.logo'
                    color="#46344e"
                    >
                </Icon>
            </v-avatar>
</div>
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
                
                    </span> -->
    
</template>
<script>
    import { Icon } from '@iconify/vue2';
    export default {
        name: 'LanguagesComp',
        components: { Icon },
        data: () => ({
            languages: [
            {name: 'React', logo: 'mdi:react', color: '#61DBFB'},
            {name: 'Vue.js', logo: 'mdi:vuejs', color: '#42b883'},
            {name: 'Python', logo: 'mdi:language-python'},
            {name: 'mySQL', logo: 'mdi:database'},
            ]
        })
    }
</script>

<style lang="scss" scoped>

.list-item {
    border: none;
}
.languages-section {
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