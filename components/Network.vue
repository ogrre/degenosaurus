<template>
  <section class="container mx-auto my-12">
    <div class="px-16 grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      <div v-for="network in networks" :class="['h-24 col-span-1 bg-ivory',
      network.disabled ? 'hover:bg-gray-500/30 relative time-cursor'
      : 'hover:bg-dino-green/30 relative cursor-pointer']">
        <a v-if="network.disabled" class="flex justify-between mx-6 my-4 time-cursor">
          <div>
            <h1 class="first-letter:uppercase text-gray-900 text-xl md:text-2xl">
              {{ network.title }}
            </h1>
            <p class="text-dino-green text-xs">
              {{ network.text }}
            </p>
          </div>
          <img class="absolute bottom-0 right-0 h-20" alt="dino" :src="network.src"/>
        </a>
        <a v-else-if="network.title === 'roadmap'" :href="network.link" class="flex justify-between mx-6 my-4">
          <div>
            <h1 class="first-letter:uppercase text-gray-900 text-xl md:text-2xl">
              {{ network.title }}
            </h1>
            <p class="text-dino-green text-xs">
              {{ network.text }}
            </p>
          </div>
          <img class="absolute bottom-0 right-0 h-20" alt="dino" :src="network.src"/>
        </a>
        <a v-else :href="network.link" target="_blank" rel="noopener noreferrer" class="flex justify-between mx-6 my-4">
          <div>
            <h1 class="first-letter:uppercase text-gray-900 text-xl md:text-2xl">
              {{ network.title }}
            </h1>
            <p class="text-dino-green text-xs">
              {{ network.text }}
            </p>
          </div>
          <img class="absolute bottom-0 right-0 h-20" alt="dino" :src="network.src"/>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Network",
  data(){
    return{
      networks: [
        {
          src: '/networks/Degenosaur_Roadmap.png',
          alt: 'Degenosaur_Roadmap',
          title: 'roadmap',
          text: 'The plan',
          link: '/roadmap',
        },
        {
          src: '/networks/Degenosaur_Discord.png',
          alt: 'Degenosaur_Discord',
          title: 'discord',
          text: 'Join community',
          link: 'https://discord.gg/HF88aGHWdm',
        },
        {
          src: '/networks/Degenosaur_Twitter.png',
          alt: 'Degenosaur_Twitter',
          title: 'twitter',
          text: 'Stay informed',
          link: 'https://twitter.com/Degenosaur_Us',
        },
        {
          src: '/networks/Degenosaur_Manifesto.png',
          alt: 'Degenosaur_Roadmap',
          title: 'insta',
          text: 'Beautiful dinos',
          link: 'https://www.instagram.com/degenosaur.us/',
        }
      ]
    }
  }
}
</script>
