<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>Frameworks</h1>
            </v-col>
        </v-row>
            <v-divider color="#5fadbe"></v-divider>

        <v-row>
            <v-col>
                <v-list color="#121315">
                    <v-list-item
                        v-for='(framework, index) in frameworks'
                        :key='index'
                        :framework='framework'
                        >
                        <v-list-item-avatar>
                            <Icon
                                :src='framework.logo'
                                :icon='framework.logo'
                                color="#5fadbe"
                                >
                                </Icon>
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
import { Icon } from '@iconify/vue2';
    export default {
        components: { Icon },
        data: () => ({
            
            frameworks: [
                {name: 'Vue', logo: 'mdi:vuejs'},
                {name: 'React', logo: 'mdi:react'},
                {name: 'Flask', logo: ''}
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