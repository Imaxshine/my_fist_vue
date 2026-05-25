import {ref} from "vue";

export function useToggle(){
    const isShow = ref(false);
    const content = ref('API loaders start\'s to working....');
    const getState = function (){
        isShow.value = !isShow.value;
    }
    return {
        isShow,
        content,
        getState
    }
}