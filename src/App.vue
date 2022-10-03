<template>
<!-- <v-img :src="require('../src/assets/verticaljspic.jpg')"> -->
  <v-app app class="app-container">
    <v-app-bar
            app
            fixed
            color="white"
            hide-on-scroll
            elevate-on-scroll
            class="Navbar"
            >
            <h1 class="hidden-md-and-up">GW</h1>
            <h1 class="hidden-sm-and-down">Grant Wielgosz</h1>
            <v-spacer></v-spacer>
            
            <v-tabs
                right
                color="black"
                class="hidden-sm-and-down tabs-style"
                hide-slider
                >
                <v-tab 
                    v-for="(link, index) in navLinks"
                    :key="index"
                    
                    style="color: black" @click="scrollsTo(link.url)">{{link.name}}
                </v-tab>
            </v-tabs>
            <v-btn
                @click="drawer = !drawer"
                style="background-color: transparent"
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
                            <v-tab @click="scrollsTo(link.url)" >{{ link.name }}</v-tab>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-btn @click="drawer = !drawer">X</v-btn>
        </v-navigation-drawer>
      <v-main
        app
        align="center"
        >
        <v-container fluid>

          <v-row ref="hero" app class="hero">
            <v-col>
              <HeroComp />
            </v-col>
          </v-row>
          <v-row ref="about" app class="about">       
            <v-col>
            <AboutComp />
            </v-col>
          </v-row>
          <v-row ref="skills" app class="skills">   
            <v-col>
            <SkillsComp />
            </v-col>
          </v-row>
          <v-row ref="projects" app class="projects">  
            <v-col>  
            <ProjectsComp />
            </v-col>
          </v-row>
          <v-row ref="contacts" app class="contact">
            <v-col>
            <ContactComp />
            </v-col>
          </v-row>
          
        </v-container>
      </v-main>
      <v-footer class="footer">
        <ContactInfo />
      </v-footer>
  </v-app>
</template>

<script>
import HeroComp from './components/HeroComp.vue';
import AboutComp from './components/AboutComp.vue';
import ProjectsComp from './components/ProjectsComp.vue';
import ContactComp from './components/ContactComp.vue';
import SkillsComp from './components/SkillsComp.vue';
import ContactInfo from './components/ContactInfo.vue';
// import PokemonComp from './components/pokemon/PokemonComp.vue';


export default {
  components: { HeroComp, AboutComp, ProjectsComp, ContactComp, SkillsComp, ContactInfo},
  name: 'App',
  props: {
    
  },
  data: () => ({
      drawer: false,
      justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
      navLinks: [
                { url: 'hero', name:"HERO"},
                { url: 'about', name: "ABOUT"},
                { url: 'skills', name: "SKILLS"},
                { url: 'projects', name: "PROJECTS"},
                { url: 'contacts', name: "CONTACT"}
                ],
      
      
  }),
  methods: {
    scrollsTo(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            window.scrollTo(0, top);
            
        },
  },
  
};
</script>
<style lang="scss" scoped>

#app {
  height: 100%;
  width: 100%;
  background-color: white;
  scroll-behavior: smooth;
  overflow: hidden;
  
}
.app-container {
  
  
}
.description-content {
  display: flex;
  
  font-size: 1em;
}
// .Navbar {
//     background-image: linear-gradient(to top, white, black)
// }
h1 {
    color: black;
}
.tabs-style {
    max-width: 70%;
}
.material-symbols-outlined {
    color: black;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}

</style>
