<template>
    <v-container fluid>
        <v-row align="center">
        <v-col cols="12" xs="6" sm="6" md="6" lg="4" xl="4" justify="center">
            <ContactForm />
        </v-col>
        <v-col>
            <div class="contact-message">
                <h3>
                    Leave a your name, email, comment, and company you represent
                </h3>
                <br />
                <h3>
                    and I will promptly return your message!
                </h3>
            </div>
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
    .contact-message {
        h3 {
        color: grey;
            
        }
    }
</style>