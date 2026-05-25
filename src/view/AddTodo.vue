<script setup>
import {ref, onMounted} from "vue";
import axios from 'axios';
import {getTodoStore} from "@/stores/todo"; //Pinia store
const todo = getTodoStore();
const isLoaded = ref(false);

const newTask = ref('');
const addNewTask = async ()=>{
  if (newTask.value === '') return
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  const payload = {
    title: newTask.value,
    completed: false
  }
  const responses = await axios.post(apiUrl, payload);
  todo.addTodoList(responses.data);
  newTask.value = "";
}
onMounted(()=>{
  addNewTask();
  isLoaded.value = true;
})
</script>

<template>
  <div>
    <div class="bg-light p-3 m-1 rounded-3 w-100 d-flex justify-content-center">
      <form @submit.prevent="addNewTask">
        <div class="my-1">
          <input type="text" v-model.trim="newTask" placeholder="Add new task" class="form-control">
        </div>

        <div class="my-2">
          <button v-if="isLoaded" class="btn btn-info">Add new</button>
        </div>
      </form>
    </div>
<!--    Todo list-->
    <div>
      <div>
        <p v-for="(t,index) in todo.getList" :key="t.id">{{index + 1}}: {{t.title}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>