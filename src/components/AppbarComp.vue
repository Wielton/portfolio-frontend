<template>
<div class="appbar">
    <v-app-bar
            
            
            fixed
            color="#121315"
            elevate-on-scroll
            dense
            >
            <h1 class="hidden-md-and-up">GW</h1>
            <h1 class="hidden-sm-and-down">Grant Wielgosz</h1>
            <v-spacer></v-spacer>
            
            <v-tabs
                right
                color="#5fadbe"
                class="hidden-sm-and-down tabs-style"
                >
                <v-tab 
                    v-for="(link, index) in navLinks"
                    :key="index"
                    
                    style="color:#5fadbe" @click="scrollsTo(`${link.url}`)">{{link.name}}
                </v-tab>
            </v-tabs>
            <v-btn
                @click="drawer = !drawer"
                style="background-color:#121315"
                max-width="50"
                elevation="0"
                
                >
                <span class="material-symbols-outlined hidden-md-and-up">menu</span>
                
            </v-btn>
    </v-app-bar>
    <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary>
            <v-list dense>
                <v-list-item
                v-for="(link, index) in navLinks"
                :key="index"
                >
                <v-list-item-content
                    @click="scrollsTo()">
                        <v-list-item-title>{{ link.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-btn @click="drawer = !drawer">X</v-btn>
        </v-navigation-drawer>
</div>
</template>

<script>
import { useUserStore } from '@/store';
import {mapActions} from 'pinia';
export default {
    name: 'AppbarComp',
    data: () => ({
        drawer: false,
        navLinks: [
        { url: '#hero', name:"HOME"},
        { url: '#about', name: "ABOUT"},
        { url: '#projects', name: "PROJECTS"},
        { url: '#contact', name: "CONTACT"}
        ],
    }),
    methods: {
        ...mapActions(useUserStore, ['scrollsTo'])
    },
    computed: {
        
    }
    
};
</script>

<style lang="scss">
.appbar {
    height: 10vh;

}
h1 {
    color: #5fadbe;
}
.tabs-style {
    max-width: 70%;
}
.material-symbols-outlined {
    color: #5fadbe;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}
</style>
