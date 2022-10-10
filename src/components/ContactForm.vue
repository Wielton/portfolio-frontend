<template>
    <v-form class="contact-form ma-0">
        <v-text-field
            color="#332639"
            background-color='#9d8d8f'
            v-model="firstName"
            type="text"
            outlined
            placeholder="First name..."
            >
        </v-text-field>
        <v-text-field
            color="#332639"
            background-color='#9d8d8f'
            v-model="companyName"
            type="text"
            outlined
            placeholder="Company name..."
            >
        </v-text-field>
        <v-text-field
            color="#332639"
            background-color='#9d8d8f'
            v-model="email"
            type="email"
            outlined
            placeholder="Email..."
            >
        </v-text-field>
        <v-textarea
            color="#332639"
            background-color='#9d8d8f'
            v-model="comment"
            type="comment"
            outlined
            placeholder="Leave a comment..."
            counter="200"
            >
        </v-textarea>
            
            <v-btn
                class="button"
                rounded
                text
                elevation="10"
                color="rgb(245,245,245)"
                @click="postComment(firstName, companyName, email, comment)"
                >send a comment</v-btn>
                
    </v-form>
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
    background-color: inherit;
    color: whitesmoke;
    max-width: 500px;
}

.button {
    background-color: #9d8d8f;
}
</style>