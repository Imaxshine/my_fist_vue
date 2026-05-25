<script setup>
import {ref} from 'vue';
import {Timer} from '@/helpFunc';

const isVisible = ref(false);
const email = ref('');
const password = ref('')
const anyError = ref('')

function resetForm(){
  email.value = '';
  password.value = '';
}
async function formValidation(){
  if (!email.value){
    isVisible.value = true;
    anyError.value = 'User email is required!'
    await Timer(3000);
    isVisible.value = false;
    anyError.value = '';
    return
  }
  if (!password.value){
    isVisible.value = true;
    anyError.value = 'Passwords is required';
    await Timer(3000);
    isVisible.value = false;
    anyError.value = '';
    return
  }
  resetForm()
}


</script>

<template>
  <div class="bg-body-secondary d-flex flex-column align-items-center justify-content-center" style="height: 100vh">
    <div class="w-75">
      <p v-if="isVisible" class="alert alert-danger">{{anyError}}</p>
      <p class="text-center fw-bolder">LOGIN FORM</p>
      <form @submit.prevent="formValidation">
<!--        <div class="mt-2">-->
<!--          <input v-model.trim="name" class="form-control" type="text" placeholder="Name">-->
<!--        </div>-->

        <div class="mt-2">
          <input v-model.trim="email" class="form-control" type="email" placeholder="Email">
        </div>

        <div class="mt-2">
          <input v-model.trim="password" class="form-control" type="password" placeholder="Password">
        </div>

        <div  class="mt-2 text-center">
          <button class="btn btn-primary" type="submit" >Login</button>
          <p>Don't you have an account yet? <RouterLink :to="{name: 'register-user'}">Click to register</RouterLink> </p>
        </div>

      </form>
    </div>
  </div>
</template>

<style scoped>

</style>