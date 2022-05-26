<template>
  <section class="bg-sky flex flex-col">
    <div class="container mx-auto lg:px-24 text-center flex py-16 items-center justify-center flex-col">
      <img class="w-3/4 xl:w-1/2 z-30" alt="degenosaurus-logotype" src="/main/degenosaurus.png"/>
      <h3 class="mx-12 mt-6 mb-12 lg:mt-12 text-xl xl:text-2xl text-gray-900 font-extrabold text-center z-30">777 Dinos
        coming to bring fun back to NFT minting !</h3>

      <div class="z-0">
        <div class="w-full absolute left-0 top-0 h-full hidden lg:block animate-cloud">
          <img class="hidden w-1/6 absolute lg:block left-10 bottom-1/2" alt="cloud1" src="/home/Cloud.png"/>
          <img class="hidden w-1/5 absolute lg:block right-10 bottom-2/3" alt="cloud2" src="/home/Cloud.png"/>
        </div>

        <div class="w-full absolute left-0 top-0 h-full hidden lg:block animate-cloud2">
          <img class="hidden w-1/6 absolute lg:block left-10 bottom-1/2" alt="cloud1" src="/home/Cloud.png"/>
          <img class="hidden w-1/5 absolute lg:block right-10 bottom-2/3" alt="cloud2" src="/home/Cloud.png"/>
        </div>

        <div class="w-full absolute left-0 top-0 h-full -ml-1/2 hidden lg:block animate-slowCloud">
          <img class="hidden w-1/6 absolute lg:block left-10 bottom-1/2" alt="cloud1" src="/home/Cloud.png"/>
          <img class="hidden w-1/5 absolute lg:block right-10 bottom-2/3" alt="cloud2" src="/home/Cloud.png"/>
        </div>

        <div class="w-full absolute left-0 top-0 h-full -ml-1/2  hidden lg:block animate-slowCloud2">
          <img class="hidden w-1/6 absolute lg:block left-10 bottom-1/2" alt="cloud1" src="/home/Cloud.png"/>
          <img class="hidden w-1/5 absolute lg:block right-10 bottom-2/3" alt="cloud2" src="/home/Cloud.png"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'home',
  name: 'Home',
  props: {},
})
</script>
