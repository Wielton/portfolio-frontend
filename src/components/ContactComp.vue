<template>
    <v-container fluid >
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="6" lg="8" xl="8">
                <p class="description-p">
                    If you're looking to work together or to just say hello:
                    <br>
                    Fill out the form or send an email to the address below!
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
        font-weight:bold;
        color: #C7CCDB;
        margin: 0;
        padding: 1em;
    }
</style>