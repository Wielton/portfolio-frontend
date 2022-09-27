<template>
<!-- <v-img :src="require('../src/assets/verticaljspic.jpg')"> -->
  <v-app app class="app-container">
    <AppbarComp />
    
      <v-main
        app
        align="center"
        >
        
        <v-container fluid>
            <HeroComp ref="hero"/>
            
            <v-divider color="#5fadbe"></v-divider>
              
            <AboutComp ref="about"/>
              
            <v-divider color="#5fadbe"></v-divider>
              
            <ProjectsComp ref="projects"/>
              
            <v-divider color="#5fadbe"></v-divider>

            <ContactComp ref="contacts"/>

            <v-divider color="#5fadbe"></v-divider>
          </v-container>
          
      </v-main>
    
  </v-app>
</template>

<script>
import AppbarComp from './components/AppbarComp.vue';
import HeroComp from './components/HeroComp.vue';
import AboutComp from './components/AboutComp.vue';
import ProjectsComp from './components/ProjectsComp.vue';
import ContactComp from './components/ContactComp.vue';

// import PokemonComp from './components/pokemon/PokemonComp.vue';


export default {
  components: { AppbarComp, HeroComp, AboutComp, ProjectsComp, ContactComp},
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
      
      
      
  }),
  methods: {
    
  },
  
};
</script>
<style lang="css" scoped>
#app {
  width: 100vw;
  background-color: white;
  scroll-behavior: smooth;
  
}
.app-main {
  height: 100%;
}
/* .app-container {
  height: 100vh;
} */


  
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
