import {defineStore} from "pinia";

export const useAuthPiniaStore = defineStore('auth', {
    state:()=>{
        return{
            isLoggedIn: false,
            userName: 'Emmanuel'
        }
    },
    actions: {
        toggleLogin(){
            this.isLoggedIn = !this.isLoggedIn;
        }
    }

})