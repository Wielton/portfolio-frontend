import axios from "axios";
import { defineStore } from "pinia";


export const useUserStore = defineStore('user',{
    state : () => {
        return{
            
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
        }
        
    },
    
})
