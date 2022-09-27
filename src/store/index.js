import axios from "axios";
import { defineStore } from "pinia";


export const useUserStore = defineStore('user',{
    state : () => {
        return{
            navLinks: [
                { url: '/', name:"HOME"},
                { url: '/about', name: "ABOUT"},
                { url: '/skills', name: "SKILLS"},
                { url: '/projects', name: "PROJECTS"},
                { url: '/contact', name: "CONTACT"}
                ],
        }   
        
    },
    actions: {
        postComment(firstName, companyName, email, comment){
            axios.request({
                url:process.env.VUE_APP_API_URL+"user",
                method : "POST",
                data: {
                    firstName,
                    companyName,
                    email,
                    comment
                }
                
            }).then((response)=>{
                console.log(response);
            }).catch((error)=>{
                console.log(error);
            })
        },
        scrollsTo(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            window.scrollTo(0, top);
        },
        
    },
    
})
