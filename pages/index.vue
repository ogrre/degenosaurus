<template>
  <section class="bg-sky flex flex-col">
    <div class="container mx-auto lg:px-24 text-center flex py-16 items-center justify-center flex-col">
      <img class="w-3/4 xl:w-1/2" alt="degenosaurus" src="/main/degenosaurus.png"/>
      <img class="hidden w-1/6 lg:block absolute left-10 bottom-1/2" alt="degenosaurus" src="/home/Cloud.png"/>
      <h3 class="mx-12 mt-6 mb-12 lg:mt-12 text-xl xl:text-2xl text-gray-900 font-extrabold text-center">777 Dinos coming to bring fun back to NFT minting !</h3>
<!--      <div class="container mx-auto text-center">-->
<!--        <button class="button-82-pushable" role="button">-->
<!--          <span class="button-82-shadow"></span>-->
<!--          <span class="button-82-edge"></span>-->
<!--          <span class="button-82-front text">-->
<!--          <a>ENTER</a>-->
<!--        </span>-->
<!--        </button>-->
<!--      </div>-->
      <img class="hidden w-1/5 lg:block absolute right-10 bottom-2/3" alt="degenosaurus" src="/home/Cloud.png"/>
    </div>
<!--    <img class="w-1/6 absolute right-0 bottom-3/4" alt="degenosaurus" src="/home/Cloud.png"/>-->
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'home',
  name: 'Home',
  props:{},
})
</script>
