<template>
<div class="appbar">
    <v-app-bar
            
            app
            fixed
            color="white"
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
                    
                    style="color:#5fadbe" :to="link.url">{{link.name}}
                </v-tab>
            </v-tabs>
            <v-btn
                @click="drawer = !drawer"
                style="background-color:white"
                max-width="50"
                elevation="0"
                class="hidden-md-and-up"
                >
                <span class="material-symbols-outlined">menu</span>
                
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
                <v-list-item-content>
                        <v-list-item-title>
                            <v-tab :to="link.url">{{ link.name }}</v-tab>

                            </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-btn @click="drawer = !drawer">X</v-btn>
        </v-navigation-drawer>
</div>
</template>

<script>
import { useUserStore } from '@/store';
import { mapState } from 'pinia';
export default {
    name: 'AppbarComp',
    data: () => ({
        drawer: false,
        
    }),
    methods: {
        // ...mapActions(useUserStore, ['scrollsTo'])
    },
    computed: {
        ...mapState(useUserStore, ['navLinks'])
    }
    
};
</script>

<style lang="scss">

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
