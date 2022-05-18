<template>
  <main class="flex flex-col justify-between h-full min-h-screen bg-sky">
    <template>
      <Navbar/>
      <Nuxt/>
    </template>
    <div class="flex flex-col ">
      <div class="mx-auto flex justify-center">
        <img class="h-32 md:h-56 xl:h-72 translate-y-3" alt="dino" src="/home/Rock_big.png"/>
      </div>
      <div class="pt-24 bg-ground border-t-2 lg:border-t-4 border-t-gray-900">
        <FooterBlock/>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "~/components/Navbar";
import FooterBlock from "@/components/blocks/FooterBlock";

export default {
  name: "home",
  components: {
    Navbar,
    FooterBlock
  }
}
</script>

