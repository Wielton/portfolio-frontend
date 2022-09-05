<template>
    <v-card style="background-color: #121315" elevation="0" cols="12">
        <v-text-field
        background-color="#5fadbe"
        v-model="firstName"
        type="text"
        outlined
        placeholder="First name..."
        ></v-text-field>
        <v-text-field
        background-color="#5fadbe"
        v-model="companyName"
        type="text"
        outlined
        placeholder="Company name..."
        ></v-text-field>
        <v-text-field
        background-color="#5fadbe"
        v-model="email"
        type="email"
        outlined
        placeholder="Email..."
        ></v-text-field>
        <v-textarea
        background-color="#5fadbe"
        v-model="comment"
        type="comment"
        outlined
        placeholder="Leave a comment..."
        ></v-textarea>
        <v-spacer></v-spacer>
        <v-card-actions>
        <v-btn
            color="#5fadbe"
            @click="postComment(firstName, companyName, email, comment)"
            >Add Review</v-btn
        >
        </v-card-actions>
    </v-card>
</template>

<script>
import {mapActions} from 'pinia';
import {useUserStore} from '@/store/index';
export default {
    name: 'ContactFormComp',
    methods: {
    
    ...mapActions(useUserStore, ['postComment'])
    },
};
</script>

<style lang="scss" scoped>
</style>