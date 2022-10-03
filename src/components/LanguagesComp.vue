<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <h1 class="language-text">Languages</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-list class='list-styling' color="white">
                    <v-list-item
                        class="list-item"
                        v-for='(language, index) in programmingIcons'
                        :key='index'
                        :language='language'
                        >
                        <v-list-item-avatar>
                            <Icon :src='language.logo' :icon='language.logo' color="black"
                                >
                                </Icon>
                        </v-list-item-avatar>
                        <v-list-item-title class='language-text'>
                            {{language.name}}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { Icon } from '@iconify/vue2';
    export default {
        name: 'LanguagesComp',
        components: { Icon },
        data: () => ({
            programmingIcons: [
                    
                    {name: 'Vue.js', logo: 'mdi:vuejs'},
                    {name: 'React', logo: 'mdi:react'},
                    {name: 'Python', logo: 'mdi:language-python'},
                    {name: 'mySQL', logo: 'mdi:database'},
                    {name: 'Node.js', logo: 'mdi:nodejs'},
                    ],
        })
    }
</script>

<style lang="scss" scoped>

.list-item {
    border: none;
}
    
    .language-text {
        color: black;
    }
</style>