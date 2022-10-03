<template>
    <v-container>
        <v-row>
            <v-col>
                <h1 class="text">Frameworks</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-list color="white">
                    <v-list-item
                        class="list-item"
                        v-for='(framework, index) in frameworks'
                        :key='index'
                        :framework='framework'
                        >
                        <v-list-item-avatar>
                            <Icon
                                :src='framework.logo'
                                :icon='framework.logo'
                                color="black"
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
                {name: 'Vuetify', logo: 'mdi:vuetify'},
                {name: 'TailwindCSS', logo: 'mdi:tailwind'},
                {name: 'Bootstrap', logo: 'mdi:bootstrap'}
            ],
        })
    }
</script>

<style lang="scss" scoped>
.list-item {
    
}
    .language-text {
        color: black;
    }
</style>