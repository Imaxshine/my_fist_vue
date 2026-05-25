<script setup>
import {useTokenStore} from "@/stores/tokens";
import Loading from "@/view/Loading.vue";
import {ref} from "vue";
import api from "@/services/api";

const isLoaded = ref(false);

const verifyToken = async ()=>{
  try{
    const token = useTokenStore();
    isLoaded.value = true;
    const res = await api.get(`/get`, {
      headers: {'Authorization': `Bearer ${token.token}`} //Pinia
    });
    alert(res.data.error)

  }catch (e) {
    console.error(e);
    alert(e.message)
  }finally {
    isLoaded.value = false;
  }
}
</script>

<template>
  <dialog v-if="isLoaded" open>
    <div>
      <Loading />
    </div>
  </dialog>
  <div class="container-fluid bg-body-secondary" style="min-height: 100vh;">
    <div>
      <h2 class="text-center">Home Page & About us</h2>
    </div>
    <div class="row">
      <div class="col-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Debitis ipsam iure maxime nemo
          quod recusandae. Cupiditate dolorem esse iste magnam,
          non repellendus veritatis?
        </p>
      </div>

      <div class="col-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores blanditiis dicta eius eum, eveniet ex facilis fuga id illo
          incidunt iusto laudantium mollitia nam possimus praesentium quia
          quidem quod rem repellendus saepe soluta, suscipit temporibus
          tenetur unde voluptatem! Animi autem, dolor doloribus eius,
          facilis impedit ipsam qui quibusdam quidem quod quos ratione
          soluta veritatis vitae?
        </p>
      </div>

    </div>

    <div class="py-2">
      <button class="btn btn-primary" v-on:click="verifyToken">Show todo list</button>
      <RouterLink :to="{name: 'posts'}" class="ms-3 btn btn-primary">Posts</RouterLink>
    </div>
  </div>
</template>

<style scoped>
dialog{
  min-height: 100vh;
  min-width: 100vw;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(32, 32, 32, 0.93);
}
dialog div{
  color: #ffffff;
  font-style: italic;
}
</style>