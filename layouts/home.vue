<template>
  <main class="flex flex-col justify-between h-full min-h-screen">
    <div>
      <Navbar/>
      <Nuxt />
    </div>
  </main>
</template>

<script>
import Navbar from "~/components/Navbar";

export default {
  name: "home",
  components:{
    Navbar
  }
}
</script>

