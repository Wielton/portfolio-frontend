<template>
    <div>
        <h1 ref="contact" style="color: #5fadbe">CONTACT</h1>
        <v-row id="contact-section" align="center" justify="center">
        <v-col cols="12" sm="6" md="4" lg="4">
            <ContactForm />
        </v-col>
        <v-col xs="12" sm="6" md="4" lg="4">
            <ContactInfo />
        </v-col>
        </v-row>
    </div>
</template>

<script>
import ContactForm from './ContactForm.vue';
import ContactInfo from './ContactInfo.vue';
export default {
    name:  'ContactComponent',
    components: { ContactForm, ContactInfo }
};
</script>

<style lang="scss" scoped>
</style>