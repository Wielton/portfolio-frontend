<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <h1>Languages</h1>
            </v-col>
        </v-row>
            <v-divider color="#5fadbe"></v-divider>
        <v-row>
            <v-col>
                <v-list class='list-styling' color="#121315">
                    <v-list-item
                        class="list-item"
                        v-for='(language, index) in programmingIcons'
                        :key='index'
                        :language='language'
                        >
                        <v-list-item-avatar>
                            <Icon :src='language.logo' :icon='language.logo' color="#5fadbe"
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
                    {name: 'HTML5', logo: 'mdi:language-html5'},
                    {name: 'CSS3', logo: 'mdi:language-css3'},
                    {name: 'JavaScript', logo: 'mdi:language-javascript'},
                    {name: 'Python', logo: 'mdi:language-python'},
                    {name: 'mySQL', logo: 'mdi:database'}
                    ],
        })
    }
</script>

<style lang="scss" scoped>

.list-item {
    border: 1px solid #5fadbe;
}
    h1 {
        color: #5fadbe;
    }
    .language-text {
        color: #5fadbe;
    }
</style>