<template>
    <v-container fluid>
        <h1 ref="contact" style="color: #5fadbe">CONTACT</h1>
        <v-row id="contact-section" align="center">
        <v-col cols="12" xm="10" sm="10" md="4" lg="4" justify="center">
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
            color: white;
        }
    }
</style>