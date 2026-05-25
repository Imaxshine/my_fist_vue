<script setup>

</script>

<template>
  <div class="main container-fluid">
    <div class="d-flex flex-row justify-content-around mt-2">
      <div>
        <RouterLink class="btn btn-outline-primary" :to="{name: 'read'}">Get Todo-list</RouterLink>
      </div>

      <div>
        <RouterLink class="btn btn-outline-primary" :to="{name: 'add_new'}">Add Todo-list</RouterLink>
      </div>
    </div>
<!--    Component window-->
    <div>
      <main class="m-3 p-2">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.main{
  min-height: 100vh;
  background-color: #e6cece;
  padding: 0.2rem;
}
.router-link-active{
  background-color: #333533;
  color: #c6c1c1;
  font-weight: bold;
}
</style>