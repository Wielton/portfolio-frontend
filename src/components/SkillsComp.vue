<template>
    <div class="skills-container">
    <container app fluid>
        <v-row>
            <v-col cols="12">
                <h1 ref="skills" style="color: black">SKILLS</h1>
            </v-col>
        </v-row>
        
        <v-row id="skills-section" align="center">
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
            <LanguagesComp />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
            <FrameworksComp />
        </v-col>
        
        </v-row>
    </container>
    </div>
</template>

<script>
import LanguagesComp from './LanguagesComp.vue';
import FrameworksComp from './FrameworksComp.vue';
export default {
    name: 'SkillsComponent',
    components: {
        LanguagesComp, FrameworksComp
    }
};
</script>

<style lang="scss" scoped>
    // .skills-container {
    //     background-image: linear-gradient(to top, black, white);
    // }
</style>