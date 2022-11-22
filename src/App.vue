<template>
<!-- <v-img :src="require('../src/assets/verticaljspic.jpg')"> -->
  <v-app app class="app-container pa-0 ma-0" ref="top">
    <v-btn  right bottom small fixed fab @click="scrollsTo(topLink.url)" color="#692C2C"><v-icon color="#C7CCDB">mdi-chevron-up </v-icon></v-btn>
    <v-app-bar
            app
            fixed
            elevation="0"
            color="transparent"
            hide-on-scroll
            class="Navbar"
            >
            
            <h1 class="hidden-md-and-up"><span class="yellow-text">G</span><span class="white-text">W</span></h1>
            <h1 class="hidden-sm-and-down"><span class="yellow-text">Grant</span><span class="white-text"> Wielgosz</span></h1>
            <v-spacer />
            <v-tabs
                right
                class="hidden-sm-and-down tabs"
                hide-slider
                
                >
                <v-tab
                    
                    v-for="(link, index) in navLinks"
                    :key="index"
                    class="tab-links"
                    @click="scrollsTo(link.url)">{{link.name}}
                    
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
            fixed
            temporary
            height="fit-content">
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
        </v-navigation-drawer>
        
      <v-main
        app
        align="center"

        >
        <v-container fluid app>
          <v-row ref="hero" class="hero main-row ma-0">
            <HeroComp />
          </v-row>
          
          <v-row ref="skills" class="skills main-row ma-0">   
            <SkillsComp />
          </v-row>
          
          <v-row ref="projects" class="projects main-row ma-0">  
            <ProjectsComp />
          </v-row>
          
          <v-row ref="about" class="about main-row ma-0">       
            <AboutComp />
          </v-row>

          <v-row ref="contacts" class="contact main-row ma-0">
            <ContactComp />
          </v-row>
        </v-container>
      </v-main>
      <v-footer class="footer" color="transparent">
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
  components: { HeroComp, ProjectsComp, ContactComp, SkillsComp, ContactInfo, AboutComp},
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
                { url: 'skills', name: "SKILLS"},
                { url: 'projects', name: "PROJECTS"},
                { url: 'about', name: "ABOUT"},
                { url: 'contacts', name: "CONTACT"}
                ],
      topLink: {url: 'top', name: 'TOP'}
      
  }),
  methods: {
    scrollsTo(refName) {
            var element = this.$refs[refName];
            var element_position = element.offsetTop;
            var top = element.offsetTop - element_position;
            console.log(top);
            
            window.scrollTo(0, element_position);

            
        },
  },
  
};
</script>
<style lang="scss" scoped>

#app {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to top, #2A324B, #767B91, #C7CCDB);
  scroll-behavior: smooth;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.main-row {
  margin: 0;
}

.description-content {
  display: flex;
  
  font-size: 1em;
}
// .Navbar {
//     background-image: linear-gradient(to left, rgba(141, 0, 33, 0.8), rgb(207, 187, 187));
// }

.yellow-text {
  color: #425a7d;
}
.white-text {
  color: #692C2C;
}
h1 {
    color: #425a7d;
}
.tabs {
    
    max-width: 70%;
}
.tab-links {
  color: #692C2C;
}
.material-symbols-outlined {
    color: #692C2C;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}

</style>
