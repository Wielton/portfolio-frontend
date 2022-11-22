<template>
    <v-container fluid>
        <v-row align="center">
            <v-col cols="12" xs="12" sm="12" md="6" lg="8" xl="8">
                <p class="description-p">
                    If you'd like to discuss me joining your team, drop me a line!
                </p>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
                <ContactForm />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ContactForm from './ContactForm.vue';
export default {
    name:  'ContactComponent',
    components: { ContactForm }
};
</script>

<style lang="scss" scoped>
    .description-p {
        font-size:1.3em;
        color: #C7CCDB;
        margin: 0;
        padding: 2em;
        @media screen and (min-width: 600px) {
                font-size: 1.5em;
        }
        @media screen and (min-width: 1024px) {
            font-size: 2em;
        }
    }
</style>