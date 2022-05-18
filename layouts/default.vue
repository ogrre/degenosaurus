<template>
  <main class="flex flex-col justify-between h-full min-h-screen">
    <div>
      <Navbar/>
      <Nuxt/>
      <Network v-if="get_pathname() !== '/manifesto'"/>
    </div>
    <Footer/>
  </main>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Network from "../components/Network";

export default {
  name: "Layout",
  components: {
    Network,
    Navbar,
    Footer,
  },
  methods: {
    get_pathname() {
      return this.$route.fullPath
    }
  }
}
</script>

