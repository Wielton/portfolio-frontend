<template>
    <v-container fluid>
        <v-row align="center" class="pa-12">
            <v-col cols="12" xs="12" sm="12" md="6" lg="8" xl="8" justify="center">
                <p class="description-p">
                    If you're looking to work together or to just say hello:
                    <br>
                    Fill out the form or send an email to the address below!
                </p>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4" justify="center">
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
        font-weight:bold;
        color: #9d8d8f;
        margin: 0;
        padding: 1em;
    }
</style>