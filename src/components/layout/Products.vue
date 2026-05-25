<script setup>
import {ref, shallowRef, computed} from "vue";
const deepList = ref([
  { id: 1,
    jina: "Godoro",
    bei: 70000,
    idadi: 21
  },
  { id: 2,
    jina: "Foronya",
    bei: 5000,
    idadi: 33
  },
  { id: 3,
    jina: "Mashuka",
    bei: 9000,
    idadi: 55
  },
  { id: 4,
    jina: "Pazia",
    bei: 7000,
    idadi: 83
  },
  { id: 5,
    jina: "Rangi",
    bei: 84000,
    idadi: 10
  },
  { id: 6,
    jina: "Cement",
    bei: 22500,
    idadi: 200
  },
  { id: 7,
    jina: "Tailles",
    bei: 37000,
    idadi: 140
  },
]);
const lists = shallowRef(deepList)
// Edit function
const editManual = (index, name, price, quantity)=>{
  deepList.value[index] = {
    jina: name,
    bei: price,
    idadi: quantity
  }
}
// Delete
function deleteData(index){
  let message = "Would you like to delete this data?";
  let question = confirm(`${message}`);
  if (question){
    deepList.value.splice(index, 1);
  }
}
const tableView = ref(false)
const tableCondition = ()=>{
  tableView.value = !tableView.value
}
const length = computed(()=>{
  return deepList.value.length
})
</script>

<template>
  <div>
    <div v-if="tableView" class="tableHolder overflow-auto">
      <table class="table table-dark table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>JINA</th>
          <th>BEI</th>
          <th>IDADI</th>
          <th>EDIT</th>
          <th>ERADICATE</th>
        </tr>
        </thead>

        <tbody>
        <tr v-if="length > 0" v-for="(list, index) in lists" :key="list.id" v-memo="[list.jina, list.bei, list.idadi]">
          <td>{{index + 1}}</td>
          <td>{{list.jina}}</td>
          <td>{{list.bei}}</td>
          <td>{{list.idadi}}</td>
          <td>
            <button class="btn btn-info" @click="editManual(index, 'Soksi', 3500, 20)">Edit</button>
          </td>

          <td>
            <button class="btn btn-danger" @click="deleteData(index)">Eradicate</button>
          </td>
        </tr>
        <tr v-else>
         <td class="text-center text-danger" colspan="6">
           <p>No data were found</p>
         </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div v-if="length > 0" class="text-end m-2">
      <button class="btn btn-primary" v-on:click="tableCondition">{{tableView ? "Hide products" : "Show products"}}</button>
    </div>
  </div>
</template>

<style scoped>
.tableHolder{
  height: 55vh;
}
thead th{
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>