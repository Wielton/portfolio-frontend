<template>
    <container app fluid class="skills-container">
        <div>
            <h1 ref="skills" style="color: #121315">SKILLS</h1>
        </div>
        <v-divider color="#5fadbe"></v-divider>
        
            <v-spacer></v-spacer>
        <v-row id="skills-section" align="center">
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
            <LanguagesComp />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
            <FrameworksComp />
        </v-col>
        
        </v-row>
    </container>
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
    .skills-container {
        
    }
</style>