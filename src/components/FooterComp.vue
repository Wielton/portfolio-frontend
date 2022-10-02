<template>
    <v-footer
        fluid
        class="footer"
        >
        <ContactInfo />
    </v-footer>
</template>

<script>
import ContactInfo from './ContactInfo.vue'
    export default {
        name: 'FooterComponent',
        components: { ContactInfo }
    }
</script>

<style lang="scss" scoped>
    .footer {
        display: flex;
        justify-content: center;
        background-image: linear-gradient(to bottom, white, black);
        }
</style>