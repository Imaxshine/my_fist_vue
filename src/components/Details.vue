<script setup>
import {ref, onMounted, computed} from "vue";
import axios from 'axios';
const myObject = ref([]);

  async function getUserData(){
    try {
      const response = await axios.get('http://localhost/api/index.php');
      myObject.value = response.data;
    }catch (e) {
      console.error(`Kuna tatizo:- ${e}`);
    }
  }


onMounted(()=>{
  getUserData();
})
const isDataAvailable = computed(()=>{
  return  myObject.value.length;
})
const deleteData = (item)=>{
  myObject.value.splice(item, 1);
}
</script>

<template>
<div class="container-fluid d-flex flex-row justify-content-center bg-light">
  <div>
    <h2>User's Enrollments</h2>
    <div class="">
      <div class="text-end bg-body-secondary p-2 rounded-2">
        <RouterLink class="btn btn-success text-capitalize" :to="{name: 'login_form'}">Login</RouterLink>
      </div>
    </div>

      <div>
        <table class="table table-hover">
          <thead>
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>OCCUPATION</th>
            <th>DELETE</th>
          </tr>
          </thead>
<!--          Table Data-->
          <tbody>
          <tr v-for="(data, num) in myObject" :key="data.id">
              <td>{{num + 1}}</td>
              <td>{{data.name}}</td>
              <td>{{data.gender}}</td>
              <td>{{data.occupation}}</td>
              <td>
                <button class="btn btn-outline-danger" @click="deleteData(num)">Delete</button>
              </td>
          </tr>
          <td v-if="isDataAvailable < 1" colspan="5" class="alert alert-info text-center">No data found</td>
          </tbody>

        </table>
      </div>
  </div>
</div>
</template>

<style scoped>
.container-fluid{
  height: 100vh;
}
</style>