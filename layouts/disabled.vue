<template>
  <main class="flex flex-col justify-between h-full min-h-screen ">
      <img class="h-full w-full m-auto" src="/main/jurassic_park_meme.jpg" alt="jurassic_park_meme.jpg">
      <Nuxt/>
    <FooterBlock/>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar";
import FooterBlock from "@/components/blocks/FooterBlock";

export default {
  name: "disabled",
  components: {
    FooterBlock
  }

}
</script>

