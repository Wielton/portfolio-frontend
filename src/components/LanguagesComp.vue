<template>
    <v-container>
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
                        v-for='(language, index) in programmingIcons'
                        :key='index'
                        :language='language'
                        >
                        <!-- <v-list-item-avatar>
                            <font-awesome-icon :src='language.icon' :icon='language.icon'
                                >
                                </font-awesome-icon>
                        </v-list-item-avatar> -->
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
    export default {
        name: 'LanguagesComp',
        data: () => ({
            programmingIcons: [
                    {name: 'HTML5', logo: ''},
                    {name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},
                    {name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
                    {name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
                    {name: 'mySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'}
                    ],
        })
    }
</script>

<style lang="scss" scoped>
.list-styling {
    border: 1px solid #5fadbe;
}
    h1 {
        color: #5fadbe
    }
    .language-text {
        color: #5fadbe
    }
</style>