<script setup>
import {useRoute} from 'vue-router';
import {ref, computed} from "vue";
import Image from '/public/desktop.jpeg';

const cousers = ref([
  {
    id: 207,
    course: 'HTML',
    price: 0,
    duration: "1 month's",
    description: 'Karibu ujifunze Programming language (HTML) kwa lugha ya Kiswahili',
    teacher: "James Kimbiti"
  },
  {
    id: 119,
    course: 'CSS',
    price: 0,
    duration: "2 month's",
    description: 'Karibu ujifunze Programming language (CSS) kwa lugha ya Kiswahili',
    teacher: "Albert Tech"
  },
  {
    id: 78,
    course: 'Javascript',
    price: 15000,
    duration: "3 month's",
    description: 'Karibu ujifunze Programming language (JS) kwa lugha ya Kiswahili',
    teacher: "Halima Ally"
  },
  {
    id: 293,
    course: 'PHP',
    price: 25000,
    duration: "8 month's",
    description: 'Karibu ujifunze Programming language (PHP) kwa lugha ya Kiswahili',
    teacher: "Rajabu Bongoclass"
  },
  {
    id: 344,
    course: 'Vue.js',
    price: 15000,
    duration: "3 month's",
    description: 'Karibu ujifunze Programming language (Vue.js) kwa lugha ya Kiswahili',
    teacher: "Imax Shine"
  }
])
const route = useRoute();
const idYaUkurasa = computed(()=>{
  return cousers.value.find(page=>page.id === Number(route.params.pageNo))
})


</script>

<template>
  <div class="bg-body-secondary" style="height: 100vh;">
    <h2 class="text-center">Kozi za programming zinazopatikana bongoclass</h2>
    <div class="d-flex justify-content-evenly my-2">
      <div v-for="c in cousers" :key="c.id" v-memo="[c.course]">
        <RouterLink class="text-decoration-none btn btn-primary" :to="{name: 'web', params:{pageNo: c.id}}">{{c.course}}</RouterLink>
      </div>
    </div>
<!--   If selected -->
    <div v-if="idYaUkurasa">
      <div class="row d-flex justify-content-center">
        <div class="col-10 overflow-auto text-center ">
          <table class="m-auto table table-info table-hover">
            <thead>
            <tr>
              <th>#</th>
              <th>COURSE NAME</th>
              <th>PRICE</th>
              <th>DURATION</th>
              <th>DESCRIPTION</th>
              <th>TEACHER</th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <td>{{idYaUkurasa.id}}</td>
              <td>{{idYaUkurasa.course}}</td>
              <td>
                <p v-if="idYaUkurasa.price > 0">{{idYaUkurasa.price.toLocaleString()}}</p>
                <p v-else class="bg-success text-light p-1">FREE</p>
              </td>
              <td>{{idYaUkurasa.duration}}</td>
              <td>{{idYaUkurasa.description}}</td>
              <td>{{idYaUkurasa.teacher}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
<!--    If not selected-->
    <div v-else>
      <p class="alert alert-danger text-center">Hakuna kozi yoyote iliyochaguliwa</p>
    </div>
  </div>
</template>

<style scoped>
.router-link-active{
  border-bottom: 5px solid rgba(9, 9, 9, 0.96);
  padding: 1px;
}
</style>