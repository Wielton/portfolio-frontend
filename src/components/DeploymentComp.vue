<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>Deployment Tools</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-list color="#121315">
                    <v-list-item
                        v-for='(tool, index) in deploymentTools'
                        :key='index'
                        :tool='tool'
                        >
                        <v-list-item-avatar>
                            <v-img
                                :src='tool.logo'
                                >
                                </v-img>
                            {{tool.logo}}
                        </v-list-item-avatar>
                        <v-list-item-title class='language-text'>
                            {{tool.name}}
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
            deploymentTools: [
                {name: 'GoogleCloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'},
                {name: 'Apache', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg'},
                {name: 'Debian', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg'},
                {name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'},
                {name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'},
                {name: 'ssh', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg'}
            ]
        })
    }
</script>

<style lang="scss" scoped>
    h1 {
        color: #5fadbe
    }
    .language-text {
        color: #5fadbe
    }
</style>