<template>
<!-- <v-img :src="require('../src/assets/verticaljspic.jpg')"> -->
  <v-app id="app" class="app-container">
    <AppbarComp app/>
    <HeroComp id="top-section"/>
    <!-- <PokemonComp /> -->
          <v-main
            class="app-main"
            app
            align="center">
              <v-container fluid>
                
              <!-- <v-divider color="#5fadbe"></v-divider> -->
                <AboutComp />
              <!-- <v-divider color="#5fadbe"></v-divider> -->
                <ProjectsComp />
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
                    <v-col
                      
                      xs="12" sm="4" md="4" lg="4">
                      <FrameworksComp />
                    </v-col>
                    <v-col
                      xs="12" sm="4" md="4" lg="4">
                      <DeploymentComp />
                    </v-col>
                  </v-row>
                    <!-- <v-row
                      justify="center">
                    
                    </v-row>
                    <v-row
                      justify="end">
                    
                  </v-row> -->
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
<!-- </v-img> -->
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
import AboutComp from './components/AboutComp.vue';
import ProjectsComp from './components/ProjectsComp.vue';
// import PokemonComp from './components/pokemon/PokemonComp.vue';


export default {
  components: { AppbarComp, HeroComp, LanguagesComp, FrameworksComp, DeploymentComp, ContactComp, Icon, AboutComp, ProjectsComp },
  name: 'App',
  props: {
    
  },
  data: () => ({
      drawer: false,
      viewDetails: false,
      
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


  .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
/* .hero-main {
        width: 100%;
        height: 50vh;
    } */

.description-content {
  display: flex;
  
  font-size: 1em;
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
