<template>
    <div>
        <v-app-bar
            class="app-bar"
            app
            fixed
            color="#121315"
            elevate-on-scroll
            dense
            >
            
            <v-spacer></v-spacer>
            <v-tabs
                right
                color="#5fadbe"
                class="hidden-sm-and-down"
                >
                <v-tab style="color:#5fadbe" @click="scrollsTo('about')">ABOUT
                </v-tab>
                <v-tab style="color:#5fadbe" @click="scrollsTo('projects')">PROJECTS
                </v-tab>
                <v-tab style="color:#5fadbe" @click="scrollsTo('skills')">SKILLS
                </v-tab>
                <v-tab style="color:#5fadbe" @click="scrollsTo('contact')">CONTACT
                </v-tab>
            </v-tabs>
            <!-- <v-btn
                @click="drawer = !drawer"
                style="background-color:#383838"
                max-width="50"
                elevation="0"
                class="hidden-md-and-up"
                >
                <v-icon  style="color:#e1bf74">mdi-menu</v-icon>
            </v-btn> -->
        </v-app-bar>
    </div>
</template>

<script>

export default {
    name: 'AppbarComp',
    data: () => ({
        
    }),
    methods: {
        scrollsTo(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            window.scrollTo(0, top);
        },
    },
    computed: {
        
    }
    
};
</script>
