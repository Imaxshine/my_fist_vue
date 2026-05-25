<script setup>
defineProps({
  inputType:{
    type: String,
    default: "text"
  },
  label:{
    type: String,
    default: "Title"
  },
  placeHolder:{
    type: String,
    default: "Typing..."
  },
  labelFor:{
    type: String
  },
  inputId:{
    type: String
  },
  modelValue: [String, Number]
})
const emits = defineEmits(['update:modelValue', 'add-data'])
</script>

<template>
  <div class="btn-container">
    <label class="my-2 myLabel" :for="labelFor">{{label}}</label>
    <input
        :type="inputType"
        :placeholder="placeHolder"
        :id="inputId"
        :value="modelValue"
        @input="emits('update:modelValue', $event.target.value)"
        class="form-control w-75"
    >
<!--    <div class="text-center">-->
<!--      <BaseButton class="my-2 w-50" @click="emits('add-data', modelValue)" color="info">Add data</BaseButton>-->
<!--    </div>-->
  </div>
</template>

<style scoped>
.myLabel{
  font-weight: bold;
  font-family: cursive;
  cursor: pointer;
}
</style>