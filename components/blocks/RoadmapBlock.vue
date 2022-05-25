<template>
  <section class="container mx-auto lg:my-12 mt-0 mb-12 py-8 p-12 border-b-2 border-dino-green/50">
    <div class="text-center">
      <h1 class="text-2xl md:text-3xl xl:text-4xl mb-6">Roadmap</h1>
      <h2 class="sm:text-lg md:text-xl text-dino-green mb-12">What is planned for Degenosaurs</h2>
    </div>
  <div v-for="quarter in quarters"  :class="['mx-auto w-full lg:w-2/3  flex border-dashed border-red-600 p-2 ', quarter.inverse ? 'border-r-8 border-y-8 rounded-r-lg' : 'border-l-8']">
    <div class="w-full p-4 lg:p-8">
        <h1 class="text-center text-xl mb-8">{{quarter.title}} 2022</h1>
        <div v-for="step in quarter.steps" :class="['relative p-4 m-4 flex gap-2 border-2 border-dino-green rounded', step.validated && 'bg-dino-green/20']">
          <h2>{{step.title}}</h2>
          <img v-if="step.validated" class="absolute right-0 bottom-0 h-12 lg:h-16" src="/stickers/STICKER_flame_HD.png" alt="">
        </div>
    </div>
  </div>
    <div class="text-center">
      <h2 class="sm:text-lg md:text-xl my-12">More infos? Click on white paper!</h2>
      <div class="flex justify-center align-middle">
        <a href="https://drive.google.com/file/d/1QaVD9yxD8okTqp6z0pjJrokKxmTNEHUY/view" class="cursor-pointer mx-auto bg-dino-green rounded-full p-3 motion-safe:animate-bounce" target="_blank" rel="noopener noreferrer">
          <svg class="fill-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M127.1 0C74.98 0 31.98 86 31.98 192v172.1c0 41.12-9.751 62.75-31.13 126.9C-2.65 501.2 5.101 512 15.98 512h280.9c13.88 0 26-8.75 30.38-21.88c12.88-38.5 24.75-72.37 24.75-126L351.1 192c0-83.62 23.62-153.5 60.5-192H127.1zM95.99 224C87.11 224 79.99 216.9 79.99 208S87.11 192 95.99 192s16 7.125 16 16S104.9 224 95.99 224zM159.1 224c-8.875 0-16-7.125-16-16S151.1 192 159.1 192s16 7.125 16 16S168.9 224 159.1 224zM223.1 224C215.1 224 207.1 216.9 207.1 208S215.1 192 223.1 192c8.875 0 16 7.125 16 16S232.9 224 223.1 224zM287.1 224C279.1 224 271.1 216.9 271.1 208S279.1 192 287.1 192c8.875 0 16 7.125 16 16S296.9 224 287.1 224zM479.1 0c-53 0-96 86.06-96 192.1C383.1 298.1 426.1 384 479.1 384S576 298 576 192C576 86 532.1 0 479.1 0zM479.1 256c-17.63 0-32-28.62-32-64s14.38-64 32-64c17.63 0 32 28.62 32 64S497.6 256 479.1 256z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RoadmapBlock",
  data(){
    return {
      quarters: [
        {
          title: 'Q2',
          steps: [
            {
              title: '🐦 Twitter Release',
              validated: true
            },
            {
              title: '💬 Discord Opening',
              validated: true
            },
            {
              title: '🌐 Website Release',
              validated: true
            },
          ]
        },
        {
          title: 'Q3',
          steps: [
            {
              title: '🖼️ PFP Mint',
            },
            {
              title: '🏪 Marketplaces Listing',
            },
            {
              title: '🗳️ DAOnosaurus',
            },
            {
              title: '🎟️ Raffles Launch',
            },
            {
              title: '🔒 Staking Platform',
            }
          ],
          inverse: true
        },
        {
          title: 'Q4',
          steps: [
            {
              title: '👙 Merchosaurus',
            },
            {
              title: '🎊 Surprises !',
            }
          ]
        }
      ]
    }
  }
}
</script>
