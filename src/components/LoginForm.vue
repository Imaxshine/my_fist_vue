<script setup>
import {ref} from "vue";
import Loading from "@/view/Loading.vue";
import {useRouter} from "vue-router";
import api from "@/services/api";
const router = useRouter();

import {useTokenStore} from "@/stores/tokens";
const token = useTokenStore();

import {getTimer} from "@/helpFunc.js";
import BaseButton from "@/components/base/BaseBtn.vue";
const email = ref('');
const password = ref('');
const isErrors = ref(false);
const errorMsg = ref('');
const isSearching = ref(false);

const validateData = async ()=>{
  try {
    isSearching.value = true;
    if (email.value === '' || password.value === ''){
      isErrors.value = true;
      isSearching.value = false;
      errorMsg.value = 'All field\'s are required 😖!'
      await getTimer(4000);
      isErrors.value = false;
      errorMsg.value = '';
      return;
    }
    const payloads = {
      email: email.value,
      password: password.value
    }
    const response = await api.post('/dt', payloads)
    if (response.data.error){
      // isSearching.value = false;
     errorMsg.value = response.data.error;
     isErrors.value = true;
     await getTimer(4000);
      errorMsg.value = "";
      isErrors.value = false;
    }else{
      //Register tokens
      token.setToken(response.data.token);
      email.value = '';
      password.value = '';
      router.replace({name: 'default'})
      console.log(response.data)
    }

  }catch (error) {
    console.log(`Error: ${error}`);
    errorMsg.value = `Failed to get connection or ${error.message}`;
    isErrors.value = true;
    await getTimer(4000);
    isErrors.value = false;
    errorMsg.value = '';
  }finally {
    isSearching.value = false;
  }

}
</script>

<template>

  <dialog v-if="isSearching" open class="mt-4">
      <div>
        <Loading />
      </div>
  </dialog>
  <div class="d-flex flex-column justify-content-center align-items-center bg-body-secondary" style="min-height: 100vh;">
    <div>

      <div v-if="isErrors" class="m-2 alert alert-danger">
        <p>{{errorMsg}}</p>
      </div>

      <h3 class="text-center text-info">Login form</h3>
      <form @submit.prevent="validateData">
        <div class="m-2">
          <input class="form-control" v-model.trim="email" type="text" placeholder="@email...">
        </div>

        <div class="m-2">
          <input class="form-control" v-model.trim="password" type="password" placeholder="XXXXXX">
        </div>

        <div class="m-2">
          <button class="w-100 btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
dialog{
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(7, 7, 7, 0.4);
  backdrop-filter: blur(5px);
  min-height: 100vh;
  min-width: 100vw;
  border: none;
}

</style>