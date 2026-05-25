<script setup>

</script>

<template>
  <div class="loading_dots">
    <small class="fw-bolder me-1">Loading</small>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
.loading_dots{
  display: flex;
  margin: 5px;
}
.loading_dots span{
  height: 12px;
  width: 12px;
  margin: 7px 0 0.2em;
  border-radius: 50%;
  animation: playing 1.1s infinite;
}
.loading_dots span:nth-child(1){
  background-color: #1f499e;
  animation-delay: -0.70s;
}
.loading_dots span:nth-child(2){
  background-color: #97b4f1;
  animation-delay: -0.50s;
}
.loading_dots span:nth-child(3){
  background-color: #141fcf;
  animation-delay: -0.30s;
}
.loading_dots span:nth-child(4){
  background-color: #464749;
  animation-delay: -0.10s;
}
@keyframes playing {
      0%, 25%, 60%, 100%{
        transform: scale(0);
      }
      50%{
        transform: scale(1.2);
      }
}
</style>