<template>
<v-container fluid class="skills-div">
    <v-row align="center" justify="center">
        
        <v-col cols="12">
            <LanguagesComp />
        </v-col>
        <v-col cols="12">
            <FrameworksComp />
        </v-col>
    </v-row>
</v-container>
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
        
}),
};
</script>

<style lang="scss" scoped>
    // .skills-container {
    //     background-image: linear-gradient(to top, black, white);
    // }
    
</style>