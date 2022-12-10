<template>
  <div class="card-xl-stretch mb-xl-8 card hoverable cursor-default shadow-sm" :class="class_style">
    <div class="card-body">
        <div class="d-flex flex-row align-items-center">
            <h1 class="text-white m-0">{{ price}} €</h1>
        </div>
        <div class="text-white fw-bolder fs-3 mb-2 mt-5">{{ text }}</div>
        <div class="text-white fw-bold fs-7">{{ subText }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name:"PriceBox",
  props:{
    price:{
      type:Number,
      default:0
    },
    text:{
      type:String,
      default:''
    },
    subText:{
      type:String,
      default:''
    },
    class_style:{
      type:String,
      default:'bg-primary'
    },
  }
})
</script>

<style>

</style>