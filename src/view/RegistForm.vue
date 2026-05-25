<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

import {Timer} from '@/helpFunc';

const isVisible = ref(false);
const name = ref('');
const email = ref('');
const password = ref('')
const anyError = ref('')

const router = useRouter();

function resetForm(){
  name.value = '';
  email.value = '';
  password.value = '';
}
async function formValidation(){
  if (!name.value){
    isVisible.value = true
    anyError.value = 'Name is required!'
    await Timer(3000);
    isVisible.value = false
    anyError.value = '';
    return
  }
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
  await router.push({name: 'login'});
}


</script>

<template>
  <div class="bg-body-secondary d-flex flex-column align-items-center justify-content-center" style="height: 100vh">
    <div class="w-75">
      <p v-if="isVisible" class="alert alert-danger">{{anyError}}</p>
      <p class="text-center fw-bolder">REGISTER FORM</p>
      <form @submit.prevent="formValidation">
        <div class="mt-2">
          <input v-model.trim="name" class="form-control" type="text" placeholder="Name">
        </div>

        <div class="mt-2">
          <input v-model.trim="email" class="form-control" type="email" placeholder="Email">
        </div>

        <div class="mt-2">
          <input v-model.trim="password" class="form-control" type="password" placeholder="Password">
        </div>

        <div  class="mt-2 text-center">
          <button class="btn btn-primary" type="submit" >Register</button>
          <p>Do you have an account? <RouterLink :to="{name: 'login'}">Click to login</RouterLink> </p>
        </div>

      </form>
    </div>
  </div>
</template>

<style scoped>

</style>