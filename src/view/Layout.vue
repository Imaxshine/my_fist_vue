<script setup>
import {onMounted} from "vue";
import {useRouter} from 'vue-router';

// onMounted(()=>{
//   useRouter().push({name: 'login'})
// })
</script>

<template>
  <div class="d-flex flex-row justify-content-between m-2">
    <div>
      <RouterLink  :to="{name: 'login'}">Login</RouterLink>
    </div>

    <div>
      <RouterLink  :to="{name: 'register-user'}">Register</RouterLink>
    </div>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
.router-link-active{
  background-color: #aa0b40;
  border: 3px solid #aa0b40;
  padding: 3px;
}
</style>