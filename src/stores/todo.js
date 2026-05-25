import {defineStore} from "pinia";

export const getTodoStore = defineStore('todo', {
    state: ()=>{
        return{
            getList: []
        }
    },
    actions: {
        addTodoList(obj){
            this.getList.unshift(obj);
        }
    }
})