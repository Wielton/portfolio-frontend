<template>
        
        <div class="skills-div">
        <v-row>
            <v-col cols="6" xs="12" sm="12" md="6" lg="6">
                <LanguagesComp />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                <FrameworksComp />
            </v-col>
        </v-row>
        <v-row>

        </v-row>
        </div>
</template>

<script>
import LanguagesComp from './LanguagesComp.vue';
import FrameworksComp from './FrameworksComp.vue';
export default {
    name: 'SkillsComponent',
    components: {
        LanguagesComp, FrameworksComp
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
};
</script>

<style lang="scss" scoped>
    // .skills-container {
    //     background-image: linear-gradient(to top, black, white);
    // }
    .skills-div {
        height: 30em;
    }
</style>