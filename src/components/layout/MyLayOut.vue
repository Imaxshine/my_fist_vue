<script setup>
import {defineAsyncComponent, ref} from "vue";

import {useCount} from "@/composables/useCounter";
import {useToggle} from "@/composables/useToggle";
// Todo Tumia Destructure kurahisisha access ya methods za composables
const {count, increase, decrease} = useCount()
const {isShow, content, getState} = useToggle()

const GetProduct = defineAsyncComponent(function (){
  return import('./Products.vue')
})
const oneshaProduct = ref(false)
</script>

<template>
  <div class="bg-warning p-3">
    <p>Count is: {{count}}</p>
    <div class="d-flex p-2">
      <div class="ms-2">
        <BaseButton @click="increase" >Increase</BaseButton>
      </div>

      <div class="ms-2">
        <BaseButton color="danger" @click="decrease" >Decrease</BaseButton>
      </div>
    </div>
  </div>

  <hr>

  <div class="bg-success p-3">
    <div>
      <BaseButton v-on:click="getState" color="info">{{isShow ? "Hide" : "Show"}}</BaseButton>
    </div>
    <p v-if="isShow" class="text-light my-3">{{content}}</p>
  </div>
  <hr>
<!--Products View-->
 <div v-if="!oneshaProduct">
   <BaseButton @click="oneshaProduct = true">Open chart</BaseButton>
 </div>

  <div>
    <GetProduct v-if="oneshaProduct" />
  </div>
</template>

<style scoped>

</style>