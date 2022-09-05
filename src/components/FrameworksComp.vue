<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>Frameworks</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-list color="#121315">
                    <v-list-item
                        v-for='(framework, index) in frameworks'
                        :key='index'
                        :framework='framework'
                        >
                        <v-list-item-avatar>
                            <v-img
                                :src='framework.logo'
                                >
                                </v-img>
                            {{framework.logo}}
                        </v-list-item-avatar>
                        <v-list-item-title class='language-text'>
                            {{framework.name}}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            frameworks: [
                {name: 'Vue', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
                {name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
                {name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'}
            ],
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