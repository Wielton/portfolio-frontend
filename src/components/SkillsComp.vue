<template>
    <div>
        <h1 ref="skills" style="color: #5fadbe">SKILLS</h1>
        <v-divider color="#5fadbe"></v-divider>
        <v-spacer></v-spacer>
        <v-row id="skills-section" justify="start" align="center">
        <v-col xs="12" sm="4" md="4" lg="4">
            <LanguagesComp />
            <v-divider color="#5fadbe"></v-divider>
        </v-col>
        <v-col xs="12" sm="4" md="4" lg="4">
            <FrameworksComp />
        </v-col>
        <v-col xs="12" sm="4" md="4" lg="4">
            <DeploymentComp />
        </v-col>
        </v-row>
    </div>
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
</style>