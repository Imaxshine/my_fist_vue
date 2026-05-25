<script setup>


defineProps({
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
<div>
  <button :class="['button', color]">
    <slot></slot>
  </button>
</div>
</template>

<style scoped>
.button{
  background-color: #1f499e;
  color: #ffffff;
  padding: 6px;
  border-radius: 10px;
  border: none;
}
.danger{
  background-color: #cf0d0d;
  color: #ffffff;
}
.info{
  background-color: #56a9c6;
  color: rgba(11, 4, 4, 0.96);
}
</style>