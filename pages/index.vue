<template>
  <section class="bg-sky flex flex-col justify-between h-full min-h-screen relative">
    <div class="container mx-auto lg:px-24 text-center flex py-16 items-center justify-center flex-col">
      <img class="w-3/4 xl:w-1/2" alt="degenosaurus" src="/degenosaurus.png"/>
      <h3 class="mx-12 mt-6 mb-12 lg:mt-12 text-xl xl:text-2xl text-gray-900 font-extrabold text-center">777 Dinos coming to bring fun back to NFT minting !</h3>
      <div class="container mx-auto text-center">
        <button class="button-82-pushable" role="button">
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text">
          <a>ENTER</a>
        </span>
        </button>
      </div>
    </div>
    <div>
      <div class="relative bottom-0 border-gray-900 border-t-2">
        <img class="absolute -bottom-2 h-12 left-10" alt="dino" src="/home/Bush.png" />
        <img class="absolute -bottom-2 h-32 left-1/4" alt="dino" src="/home/Rock_big.png" />
        <img class="absolute -bottom-2 h-16 left-1/2" alt="dino" src="/home/Trunc.png" />
        <img class="absolute -bottom-2 h-6 left-3/4" alt="dino" src="/home/Rock_small.png" />
        <img class="absolute -bottom-2 h-12 right-10" alt="dino" src="/home/Bush.png" />
      </div>
      <div class="pb-24 bg-ground"></div>
    </div>
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
