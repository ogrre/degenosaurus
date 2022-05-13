<template>
  <section class="container mx-auto lg:my-12 mt-0 mb-12 py-8 border-b-2 border-b-dino-green/50">
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-max mx-auto">
      <div class="row-span-1 col-span-full text-center md:text-left px-2">
        <h1 class="text-2xl md:text-3xl xl:text-4xl mb-6">TEAM</h1>
        <h2 class="first-letter:uppercase sm:text-lg md:text-xl text-dino-green">an incredible band of degenerate friends</h2>
      </div>
      <div v-for="teammate in teammates" class="mx-auto col-span-1 w-64 px-2">
        <img class="w-64" alt="dino" :src="teammate.pfp" />
          <div class="flex justify-between mt-2 mb-1">
            <h3 class="text-lg lg:text-2xl text-gray-900">
              {{ teammate.name }}
            </h3>
            <div class="pt-1.5 rounded-lg bg-lime-50 hover:bg-ivory hover:scale-110 ease-in-out duration-300 cursor-pointer">
              <a class="m-2 pt-2 pb-1 px-3 text-gray-900 hover:text-dino-green" target="_blank" rel="noopener noreferrer"
                 :href="teammate.twitter">
                <fa :icon='["fab" , "twitter"]' />
              </a>
            </div>
          </div>
          <h3 class="lg:text-lg text-dino-green mb-1">
            {{ teammate.job }}
          </h3>
          <p class="text-sm">
            {{ teammate.description }}
          </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamBlock",
  data(){
    return {
      teammates: [
        {
          pfp: '/pfp/Dobiche.png',
          name: 'ELAPHOS',
          job: 'CPO',
          twitter: 'https://twitter.com/Elaphos42',
          description: 'Doctor in chemistry, passionate about new technology has first explored the world of DeFi before finding his place in the NFT space.'
        },
        {
          pfp: '/pfp/0GRE.png',
          name: 'OGRE',
          job: 'CTO',
          twitter: 'https://twitter.com/OGRE90768203',
          description: 'Back end web developer, passionate about artistic creation and recently introduced to web3 and blockchain technologies, joining an NFT project was the logical next step.'
        },
        {
          pfp: '/pfp/Chiro.png',
          name: 'CHIRONEX',
          job: 'CFO',
          twitter: 'https://twitter.com/Ch1r0nex',
          description: 'Entrepreneur, tech enthusiast and biochemist. Early into crypto and in love with its fundamentals. As a DeFi & NFT addict, always ready for new challenges - Making business models rain.'
        },
        {
          pfp: '/pfp/JohnnyBoy.png',
          name: 'JOHNNYBOY',
          job: 'CIO',
          twitter: 'https://twitter.com/us_johnnyBoy',
          description: 'Former studio sound engineer/owner - full stack web dev by day, degen by night - coming straight from Solana and Nervos DeFi.'
        },
        {
          pfp: '/pfp/EBO.png',
          name: 'EBO',
          job: 'CMO',
          twitter: 'https://twitter.com/_EB0_',
          description: 'Previously a web developer, started his blockchain journey by mining Dogecoin in 2014 and never stopped since. Loves trading, DeFi and NFT everywhere, anytimes.'
        },
      ]
    }
  }
}
</script>

