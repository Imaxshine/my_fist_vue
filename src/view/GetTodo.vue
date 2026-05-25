<script setup>
import {onMounted, ref} from "vue";
import {getTodoStore} from "@/stores/todo";
import axios from 'axios'

const todo = getTodoStore();
const isLoading = ref(false);
const error = ref(null);
const buttonText = ref('Try again')
const getTodoList = async function(){
  try {
    isLoading.value = true
    error.value = null;
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    const response = await axios.get(apiUrl);
    // console.log(response.data)
    todo.getList = response.data
    // console.log(todo.getList)
  }catch (e) {
    error.value = 'There is an a problem occurred, check your internet connection'
  }finally {
    isLoading.value = false;
  }
}
onMounted(()=>{
  getTodoList()
})
</script>

<template>
  <div>
    <div v-if="isLoading" class="loading-dots mt-3">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-if="!isLoading && !error">
      <h2>List over view</h2>
      <p v-for="(t, index) in todo.getList" :key="t.id">{{index + 1}}: {{t.title}}</p>
    </div>

    <!--  Error-->
    <div v-if="error" class="alert alert-danger p-2">
      {{error}} <br>
      <button class="alert alert-info" @click="getTodoList">{{buttonText}}</button>
    </div>
  </div>

</template>

<style scoped>
.loading-dots{
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-dots span{
  height: 13px;
  width: 13px;
  //background-color: #1f499e;
  margin: 0 2px;
  border-radius: 50%;
  animation: playing 1.3s infinite ease-in-out;
}
.loading-dots span:nth-child(1) {
  background-color: #5f8ff1;
  animation-delay: -0.45s;
}
.loading-dots span:nth-child(2){
  background-color: #e6a92a;
  animation-delay: -0.15s;
}
.loading-dots span:nth-child(3){
  background-color: #5f8ff1;
}
@keyframes playing {
  0%, 35%, 100%{
    transform: translateY(10px);
  }
  50%{
    transform: translateX(0);
  }
}

</style>