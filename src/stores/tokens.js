import {defineStore} from 'pinia';
export const useTokenStore = defineStore('token', {
    state: ()=>{
        return {
            token: localStorage.getItem('token') || null
        }
    },
    actions: {
        setToken(userToken){
            localStorage.setItem('token', userToken);
            this.token = localStorage.getItem('token');
        },
        removeToken(){
            if (localStorage.getItem('token')){
                localStorage.removeItem('token');
                this.token = null;
            }
        }
    }
})