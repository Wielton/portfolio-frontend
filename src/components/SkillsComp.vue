<template>
    <container app fluid class="skills-container">
        <div>
            <h1 ref="skills" style="color: #121315">SKILLS</h1>
        </div>
        <v-divider color="#5fadbe"></v-divider>
        
            <v-spacer></v-spacer>
        <v-row id="skills-section" align="center">
        <v-col xs="12" sm="4" md="4" lg="4">
            <v-spacer></v-spacer>
            <LanguagesComp />
        </v-col>
        <v-col xs="12" sm="4" md="4" lg="4">
            <v-spacer></v-spacer>
            <FrameworksComp />
        </v-col>
        <v-col xs="12" sm="4" md="4" lg="4">
            <v-spacer></v-spacer>
            <DeploymentComp />
        </v-col>
        </v-row>
    </container>
</template>

<script>
import LanguagesComp from './LanguagesComp.vue';
import FrameworksComp from './FrameworksComp.vue';
import DeploymentComp from './DeploymentComp.vue';
export default {
    name: 'SkillsComponent',
    components: {
        LanguagesComp, FrameworksComp, DeploymentComp
    }
};
</script>

<style lang="scss" scoped>
    .skills-container {
        height: 100%;
        width: 100%;
    }
</style>