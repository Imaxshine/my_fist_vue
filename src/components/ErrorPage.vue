<script setup>
import {useRoute, useRouter} from 'vue-router';
import {onMounted, ref} from "vue";
import {getTimer} from "@/helpFunc.js";

const route = useRoute();
const router = useRouter();
const title = ref('click for best URL')
function ifErrorCode(){
  console.log(`Ukurasa wa ${route.params.matchPage} haupatikani kwa sasa!`)
}
async function autoDirect(){
  await getTimer(2000);
  router.push({name: 'detail'});
}
const whenClicked = ()=>{
  router.replace({name: 'detail'});
}

onMounted(()=>{
  ifErrorCode();
  //call auto-direct function
  // autoDirect();
})
</script>
cls
<template>
  <div class="d-flex flex-column text-center justify-content-center ">
    <div>
      <h2>Page not found</h2>
    </div>

    <div class="alert alert-danger">
      <p>
        A page that you are looking for is current not available,
        please wait a moment while we are finding out on a good way to
        re-directing you on a current URL <br>
      </p>

      <div class="d-flex flex-row justify-content-center">
        <div class="m-1">
          <small>
            <i>
              [404: Page not found]
            </i>
          </small>
        </div>

        <div class="m-1">
              <button @click="whenClicked" :title="title" class="btn btn-outline-secondary">Click to find out</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>