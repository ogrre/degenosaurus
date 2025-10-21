<template>
  <main class="flex flex-col justify-between h-full min-h-screen">
    <Navbar/>
    <NuxtPage/>
    <Network v-if="currentPath !== '/manifesto' && currentPath !== '/'"/>
    <Footer/>
  </main>
</template>

<script setup>
import { computed } from "vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import Network from "~/components/Network.vue";

const route = useRoute();

const currentPath = computed(() => route.fullPath);
</script>

