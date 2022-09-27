<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>Deployment</h1>
            </v-col>
        </v-row>
            <v-divider color="#5fadbe"></v-divider>

        <v-row>
            <v-col>
                <v-list 
                    border='1px 1px solid #121315'
                    color="#121315">
                    <v-list-item
                        class="list-item"
                        v-for='(tool, index) in deploymentTools'
                        :key='index'
                        :tool='tool'
                        >
                        <v-list-item-avatar>
                            <Icon
                                :src='tool.logo'
                                :icon='tool.logo'
                                color="#5fadbe"
                                >
                                </Icon>
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
import { Icon } from '@iconify/vue2';
    export default {
        components: { Icon },
        name: 'LanguagesComp',
        data: () => ({
            deploymentTools: [
                {name: 'GoogleCloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'},
                {name: 'Apache', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg'},
                {name: 'Debian', logo: 'mdi:debian'},
                {name: 'Linux', logo: 'mdi:linux'},
                {name: 'ssh', logo: 'mdi:ssh'}
            ]
        })
    }
</script>

<style lang="scss" scoped>
.list-item {
    border: 1px solid #5fadbe;
}
    h1 {
        color: #5fadbe
    }
    .language-text {
        color: #5fadbe
    }
</style>