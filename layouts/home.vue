<template>
  <main class="flex flex-col justify-between h-full min-h-screen bg-sky">
    <Navbar/>
    <NuxtPage/>
    <div class="flex flex-col z-10">
      <div class="mx-auto flex justify-center">
        <img class="h-32 md:h-56 xl:h-72 translate-y-3" alt="dino" src="/home/Rock_big.png"/>
      </div>
      <div class="bg-ground border-t-2 lg:border-t-4 border-t-gray-900">
        <FooterBlock/>
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import FooterBlock from "@/components/blocks/FooterBlock.vue";
</script>

