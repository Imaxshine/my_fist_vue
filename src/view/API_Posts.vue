<script setup>
import {ref, computed, onMounted} from 'vue';
import {getTodoStore} from "@/stores/todo.js";
import my_api from "@/services/myAPI.js";
import Loading from "@/view/Loading.vue";

const products = getTodoStore()
const isLoad = ref(false)
const switchOnAddData = ref(false);
const switchOnEdit = ref(false);

//Inputs
const newProduct = ref('');

const isProducts = computed(()=>{
  return products.getList.length;
})

const readData = async function(){
  try{
    isLoad.value = true;
    products.getList = [];
    const res = await my_api.get('/get');
    if (res.data.status === 'ok'){
      products.getList.push(res.data.data);
    }else{
      console.log(res.data)
    }
  }catch (error){
    alert(`${error.message}`)
  }finally {
    isLoad.value = false;
  }

}

const getAllData = computed(()=>{
  return products.getList;
})

function add(){
  switchOnAddData.value = true;
}
function edit(id,currentHistory){
  const changes = prompt('Change data', currentHistory);
  if (changes.trim() !== currentHistory){
    const changed = products.getList.find(d=>d.id === id);
    changed.name = changes.trim();
  }else{
    return null;
  }

  // switchOnEdit.value = true;
}
function closeAdd(){
  switchOnAddData.value = false;
}
//TODO Add NewData
const addNewData = async ()=>{
  try {
    isLoad.value = true;
    const res = await my_api.post('/get', {name: newProduct.value});
    if (newProduct.value === "") return
    const id = ref(products.getList[0]['id']);
    products.getList.unshift({id: id.value +=1, name: newProduct.value});
    newProduct.value = '';
  }catch (e) {
    alert(`Error: ${e.message}`);
  }finally {
    isLoad.value = false;
  }
}

async function delete_data(id){
  try{
    isLoad.value = true;
    const surely = confirm('You are about to delete this permanently');
    if (surely){
      const res = await my_api.delete(`/get?id=${id}`);
      products.getList = products.getList.filter(d=>d.id !== id);
    }
    return null;
  }catch (err){

  }finally {
    isLoad.value = false;
  }
}
//Edit

onMounted(()=>{
  readData()
})

</script>

<template>
  <dialog v-if="isLoad" open class="dialog1">
    <div>
      <Loading />
    </div>
  </dialog>

<!--Add NewData-->
  <dialog v-if="switchOnAddData" open class="add_form">
      <div class="bg-body-secondary p-3 rounded-2 form_body">
          <div class="text-end">
            <button class="btn btn-danger" v-on:click="closeAdd">Close</button>
          </div>
          <form v-on:submit.prevent="addNewData">
            <div class="my-2">
              <input class="form-control" type="text" v-model.trim="newProduct" placeholder="New Product">
            </div>

            <div>
              <button class="btn btn-primary w-100">Add</button>
            </div>
          </form>
      </div>
  </dialog>

<!-- Edit Data -->
<!--  <h1>Open</h1>-->
<!--  <dialog v-if="switchOnEdit" open class="edit_data">-->
<!--    <div class="w-75">-->
<!--      <div>-->
<!--        <button class="btn btn-danger">Close</button>-->
<!--      </div>-->
<!--      <div>-->
<!--        &lt;!&ndash; Form &ndash;&gt;-->
<!--        <form>-->

<!--        </form>-->
<!--      </div>-->
<!--    </div>-->
<!--  </dialog>-->

<div class="cont container-fluid">
    <div class="the_top d-flex flex-row bg-primary p-2 justify-content-evenly">
      <p class="text-light fs-3">Max E\web </p>
      <p class="text-light fs-5 ms-5">
        <button class="btn btn-secondary" @click="add">Add product</button>
      </p>
    </div>

  <div v-if="isProducts > 0" class="prod-body bg-body-secondary">
    <div v-for="product in getAllData" :key="product.id">
      <div>
        <p class="text-center text-light text-capitalize fs-3 w-75 my-2 rounded-2"
           style="margin: 0 auto; background: rgba(0, 0, 0, 0.2); height: auto;">{{product.name}}</p>

        <div class="text-center d-flex flex-row justify-content-evenly w-50" style="margin: 0 auto;">
          <div>
            <button class="btn btn-success" @click="edit(product.id, product.name)">Edit</button>
          </div>

          <div>
            <button class="btn btn-danger" @click="delete_data(product.id)">Delete</button>
          </div>

        </div>
      </div>
      <hr/>

    </div>
  </div>
  <p v-else class="fw-bolder alert alert-info text-center">No any product were found</p>
</div>
</template>

<style scoped>
.cont{
  position: absolute;
}
.the_top{
  position: sticky;
}
.prod-body{
  min-height: auto;
  padding: 5px;
  overflow: auto;
}
.dialog1{
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(7, 7, 7, 0.4);
  backdrop-filter: blur(5px);
  min-height: 100vh;
  min-width: 100vw;
  border: none;
}
.add_form{
  border: none;
  z-index: 1;
  min-height: 100vh;
  min-width: 100vw;
  background: rgba(19, 18, 18, 0.4);
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.form_body{
  min-width: 45%;
  margin: 0 auto;
}
.edit_data{
  z-index: 1;
}
</style>