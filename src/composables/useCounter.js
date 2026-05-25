import {ref, watchEffect} from "vue";

export function useCount(){
    const count = ref(0);

    watchEffect(()=>{
        if(count.value <= 0){
            count.value = 0
        }
    })
    function increase(){
        count.value += 1;
    }
    function decrease(){
        count.value -= 1;
    }
    return {
        count,
        increase,
        decrease
    }
}