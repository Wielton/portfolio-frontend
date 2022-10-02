<template>
    <div>
    <v-card class="contact-form" elevation="0" cols="12">
        <v-text-field
            color='#5fadbe'
            background-color='white'
            v-model="firstName"
            type="text"
            outlined
            placeholder="First name..."
            >
        </v-text-field>
        <v-text-field
            color='#5fadbe'
            background-color='white'
            v-model="companyName"
            type="text"
            outlined
            placeholder="Company name..."
            >
        </v-text-field>
        <v-text-field
            color='#5fadbe'
            background-color='white'
            v-model="email"
            type="email"
            outlined
            placeholder="Email..."
            >
        </v-text-field>
        <v-textarea
            color='#5fadbe'
            background-color='white'
            v-model="comment"
            type="comment"
            outlined
            placeholder="Leave a comment..."
            >
        </v-textarea>
        <v-spacer></v-spacer>
        <v-card-actions>
            <v-btn
                
                color="#5fadbe"
                @click="postComment(firstName, companyName, email, comment)"
                >Add Review</v-btn>
        </v-card-actions>
    </v-card>
    </div>
</template>

<script>
import {mapActions} from 'pinia';
import {useUserStore} from '@/store/index';
export default {
    name: 'ContactFormComp',
    data: () => ({
        firstName: '',
        companyName: '',
        email: '',
        comment: ''
    }),
    methods: {
    
    ...mapActions(useUserStore, ['postComment'])
    },
};
</script>

<style lang="scss" scoped>
.contact-form {
    align-items: center;
    color: #5fadbe;
    background-color: black;
}
</style>