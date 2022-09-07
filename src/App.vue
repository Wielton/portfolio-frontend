<template>

  <v-app id="app" class="app-container" style="background-color:#121315">
    <AppbarComp class="app-bar"/>
    <HeroComp id="top-section" class="hero-main"/>
    <!-- <PokemonComp /> -->
          <v-main
            class="app-main"
            app
            align="center">
              <v-container fluid>
                <v-row
                  id="top-section"
                  align="center"
                  justify="center">
                    <v-col 
                      cols="12" 
                      sm="4" 
                      class="text-center">
                        <h1 style="color:#5fadbe"></h1>
                          <p style="color:#5fadbe"> 
                            
                          </p>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="8"
                      align="center">
                        
                    </v-col>
                </v-row>
              <!-- <v-divider color="#5fadbe"></v-divider> -->
                <h1 style="color:#5fadbe">ABOUT</h1>
                <v-row
                  id="about-section"
                  ref="about"
                  align="center">
                  <v-col>
                    <div>
                      <h3 style="color:#5fadbe">
                            
                      </h3>
                    </div>
                  </v-col>
                </v-row>
              <!-- <v-divider color="#5fadbe"></v-divider> -->
                <h1 ref="projects" style="color:#5fadbe">PROJECTS</h1>
                  <v-row
                    id="projects-section"
                    align="center">
                    <v-col 
                      v-for="project in projects"
                      :key="project.id"
                      :project="project"
                      cols="12" sm="6" md="4" lg="4">
                        <v-hover v-slot="{ hover }">
                          <v-card
                            color="grey lighten-4"
                            min-width="100"
                            max-width="300"
                            class="mx-auto">
                              <v-img
                                :aspect-ratio="16/9"
                                :src="`${project.img}`">
                                  <v-expand-transition>
                                    <div
                                      v-if="hover"
                                      class="d-flex transition-slow-in-fast-out v-card--reveal text-h2"
                                      style="height: 100%; background-color:#5fadbe; font-color: #383838">
                                      {{project.name}}
                                    </div>
                                  </v-expand-transition>
                              </v-img>
                          </v-card>
                        </v-hover>
                    </v-col>
                  </v-row>
                  <!-- <v-divider color="#5fadbe"></v-divider> -->
                  
                  <h1 ref="skills" style="color:#5fadbe">SKILLS</h1>
                  <!-- <v-divider color="#5fadbe"></v-divider> -->
                  <v-spacer></v-spacer>
                  <v-row
                    id="skills-section"
                    justify="start"
                    align="center"
                    >
                    <v-col
                      xs="12" sm="4" md="4" lg="4">
                      <LanguagesComp />
                      <!-- <v-divider color="#5fadbe"></v-divider> -->
                    </v-col>
                  </v-row>
                    <v-row
                      justify="center">
                    <v-col
                      
                      xs="12" sm="4" md="4" lg="4">
                      <FrameworksComp />
                    </v-col>
                    </v-row>
                    <v-row
                      justify="end">
                    <v-col
                      xs="12" sm="4" md="4" lg="4">
                      <DeploymentComp />
                    </v-col>
                  </v-row>
                <v-divider color="#5fadbe"></v-divider>
                  <h1 ref="contact" style="color:#5fadbe">CONTACT</h1>
                  <v-row
                    id="contact-section"
                    align="center"
                    justify="center">
                      <v-col cols="12" sm="6" md="4" lg="4">
                          <ContactComp />
                      </v-col>
                      <v-col
                          xs="12" sm="6" md="4" lg="4">
                          <h2 style="color:#5fadbe">Grant Wielgosz</h2>
                          <v-divider></v-divider>
                          <h4 style="color:#5fadbe">Edmonton, Alberta</h4>
                          <v-divider></v-divider>
                          <h4 style="color:#5fadbe">grantWielgosz@gmail.com</h4>
                          <v-divider></v-divider>
                          <!-- <p style="color:#5fadbe">Please contact me for more info!</p> -->
                          <v-avatar
                            v-for="link, index in socialIcons"
                            :key="index"
                            :link="link"
                            >
                            <a :href="link.link">
                            
                              
                            <Icon
                              style="color:#5fadbe"
                              width="50"
                              height="50"
                              :icon="link.logo">
                            </Icon>
                            </a>
                          </v-avatar>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
            
    
  </v-app>
</template>

<script>
import { Icon } from '@iconify/vue2';
import AppbarComp from './components/AppbarComp.vue';
import HeroComp from './components/HeroComp.vue';
import LanguagesComp from './components/LanguagesComp.vue';
import FrameworksComp from './components/FrameworksComp.vue';
import DeploymentComp from './components/DeploymentComp.vue';
import ContactComp from './components/ContactComp.vue';
import { useUserStore } from './store';
import {mapActions} from 'pinia';
// import PokemonComp from './components/pokemon/PokemonComp.vue';


export default {
  components: { AppbarComp, HeroComp, LanguagesComp, FrameworksComp, DeploymentComp, ContactComp, Icon },
  name: 'App',
  props: {
    
  },
  data: () => ({
      drawer: false,
      projects: [
        {name: 'Pokemon Battle', img: require('../src/assets/charBattle.png'), skill: "fa-brands fa-html5",id: 1},
        {name: 'reDraft Fantasy Football', img: require('../src/assets/redraft-home.png'), id: 2},
        {name: 'Foodie: A Skip Clone', img: require('../src/assets/foodie.png'), id: 3}
      ],
      justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
      
      socialIcons: [
        {name: 'Linkedin', link: 'https://www.linkedin.com/in/grant-wielgosz/', logo: 'mdi:linkedin'},
        {name: 'Github', link: 'https://github.com/Wielton?tab=repositories', logo: 'mdi:github'},
        ],
      
  }),
  methods: {
    ...mapActions(useUserStore, ['scrollsTo'])
  },
  computed: {
    
  }
  
};
</script>
<style lang="css" scoped>
#app {
  background-color: 
#121315;
}
  
  #top-section {
    height: 80%;
  }
.app-bar {
        height: 10vh;
    }
    
  .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
.hero-main {
        width: 100%;
        height: 50vh;
    }
  /* #hero-h3 {
    display: inline-block;
    position: relative;
    top: 100px;
    left: 100px;
  } */
  /* #hero-img {
    display: flex;
    position: absolute;
    top: 200px;
    left: 200px;
  } */
</style>
