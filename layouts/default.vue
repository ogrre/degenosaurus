<template>
  <main class="flex flex-col justify-between h-full min-h-screen">
    <template>
      <Navbar/>
      <NuxtPage/>
      <Network v-if="get_pathname() !== '/manifesto' && get_pathname() !== '/'"/>
    </template>
    <Footer/>
  </main>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import Network from "~/components/Network.vue";

const route = useRoute();

function get_pathname() {
  return route.fullPath;
}
</script>

