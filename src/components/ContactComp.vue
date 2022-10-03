<template>
    <v-container fluid>
        <h1 ref="contact" style="color: black">CONTACT</h1>
        <v-row id="contact-section" align="center">
        <v-col cols="12" xm="6" sm="6" md="6" lg="6" justify="center">
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
            color: black;
        }
    }
</style>