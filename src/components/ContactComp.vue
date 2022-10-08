<template>
    <v-container fluid>
        <v-row align="center" class="pa-12">
        <v-col cols="12" xs="6" sm="6" md="6" lg="4" xl="4" justify="center">
            <ContactForm />
        </v-col>
        <v-col>
            <p class="description-p">
                Leave a your name, email, comment, and company you represent
                and I will promptly return your message!
            </p>
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
    }
</style>