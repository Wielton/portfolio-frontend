<template>
    <v-parallax class="background">
        <v-divider />
        <div>
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
    </v-parallax>
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
    .background {
        height: 100em;
        background-color: white;
    }
</style>