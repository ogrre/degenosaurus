<template>
  <section class="container mx-auto lg:my-12 mt-0 mb-12 pb-12 border-b-2 border-dino-green/50 grid grid-cols-1 gap-4">

    <div class="col-span-1 mx-auto min-w-full">
      <h1 class="text-2xl md:text-3xl xl:text-4xl mb-6 text-center">ATTRIBUTES</h1>
      <h2 class="first-letter:uppercase sm:text-lg md:text-xl text-dino-green text-center">How rare is my Degenosaur ?</h2>
    </div>

    <div v-for="category in categories" class="col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8
    max-w-max mx-auto border-dino-green/50 border-t last:border-b py-8">
        <div class="row-span-full col-span-full text-center md:text-left">
          <h2 class="first-letter:uppercase text-2xl">{{category.name}}</h2>
        </div>
      <div v-for="attribute in attributes" v-if="attribute.type === category.name" class="mx-auto max-w-max p-3 bg-dino-green/50 rounded-2xl col-span-1 border border-dino-green">
        <div class="text-center flex justify-center">
          <img class="rounded-2xl border border-2 border-gray-900 w-52" alt="dino" :src="'/attributes/' + attribute.src" />
        </div>
        <div class="flex flex-col justify-between gap-1 my-1">
          <h3 class="text-dino-green">
            {{ attribute.type }}
          </h3>
          <h3 class="first-letter:uppercase text-lg lg:text-xl text-gray-900">
            {{ attribute.name }}
          </h3>
        </div>
        <h3 v-for="rarity in rarities" v-if="rarity.name === attribute.rarity" class="mt-3 mb-1">
          <span :class="['box-decoration-clone px-2 rounded ', rarity.style]">
          {{ attribute.rarity }}
          </span>
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AttributesBlock",
  data(){
    return {
      attributes: [
        {
          src: 'legendary/Cyborg.png',
          name: 'Cyborg',
          type: 'legendary',
          rarity: 'unique'
        },
        {
          src: 'legendary/Ghost.png',
          name: 'Ghost',
          type: 'legendary',
          rarity: 'unique'
        },
        {
          src: 'legendary/Gold.png',
          name: 'Gold',
          type: 'legendary',
          rarity: 'unique'
        },
        {
          src: 'legendary/Leviathan.png',
          name: 'Leviathan',
          type: 'legendary',
          rarity: 'unique'
        },
        {
          src: 'legendary/Mirrored.png',
          name: 'Mirrored',
          type: 'legendary',
          rarity: 'unique'
        },
        {
          src: 'legendary/Skeleton.png',
          name: 'Skeleton',
          type: 'legendary',
          rarity: 'unique'
        },
        {
          src: 'legendary/Zombie.png',
          name: 'Zombie',
          type: 'legendary',
          rarity: 'unique'
        },
        {
          src: 'EYES_angry.png',
          name: 'angry',
          type: 'eyes',
          rarity: 'common'
        },
        {
          src: 'EYES_3D.png',
          name: '3D',
          type: 'eyes',
          rarity: 'uncommon'
        },
        {
          src: 'EYES_solana.png',
          name: 'solana',
          type: 'eyes',
          rarity: 'uncommon'
        },
        {
          src: 'EYES_cyclope.png',
          name: 'cyclope',
          type: 'eyes',
          rarity: 'rare'
        },
        {
          src: 'EYES_monocle.png',
          name: 'monocle',
          type: 'eyes',
          rarity: 'rare'
        },
        {
          src: 'EYES_laser.png',
          name: 'laser',
          type: 'eyes',
          rarity: 'epic'
        },
        {
          src: 'HEAD_headset.png',
          name: 'headset',
          type: 'head',
          rarity: 'common'
        },
        {
          src: 'HEAD_cap.png',
          name: 'cap',
          type: 'head',
          rarity: 'common'
        },
        {
          src: 'HEAD_halo.png',
          name: 'halo',
          type: 'head',
          rarity: 'uncommon'
        },
        {
          src: 'HEAD_pirate.png',
          name: 'pirate',
          type: 'head',
          rarity: 'rare'
        },
        {
          src: 'HEAD_tophat.png',
          name: 'tophat',
          type: 'head',
          rarity: 'rare'
        },
        {
          src: 'HEAD_crown.png',
          name: 'crown',
          type: 'head',
          rarity: 'epic'
        },
        {
          src: 'MOUTH_default.png',
          name: 'default',
          type: 'mouth',
          rarity: 'common'
        },
        {
          src: 'MOUTH_open.png',
          name: 'open',
          type: 'mouth',
          rarity: 'common'
        },
        {
          src: 'MOUTH_teeth.png',
          name: 'teeth',
          type: 'mouth',
          rarity: 'uncommon'
        },
        {
          src: 'MOUTH_bubble.png',
          name: 'bubble',
          type: 'mouth',
          rarity: 'uncommon'
        },
        {
          src: 'MOUTH_smoke.png',
          name: 'smoke',
          type: 'mouth',
          rarity: 'rare'
        },
        {
          src: 'MOUTH_flame.png',
          name: 'flame',
          type: 'mouth',
          rarity: 'epic'
        },
        {
          src: 'TAIL_default.png',
          name: 'default',
          type: 'tail',
          rarity: 'common'
        },
        {
          src: 'TAIL_stegosaurus.png',
          name: 'stegosaurus',
          type: 'tail',
          rarity: 'uncommon'
        },
        {
          src: 'TAIL_flames.png',
          name: 'flames',
          type: 'tail',
          rarity: 'rare'
        },
        {
          src: 'TAIL_punk.png',
          name: 'punk',
          type: 'tail',
          rarity: 'rare'
        },
        {
          src: 'TAIL_wings.png',
          name: 'wings',
          type: 'tail',
          rarity: 'epic'
        },
      ],
      rarities: [
        {
          name: 'common',
          style: 'bg-white text-gray-900'
        },
        {
          name: 'uncommon',
          style: 'bg-blue-400 text-blue-800'
        },
        {
          name: 'rare',
          style: 'bg-yellow-400 text-yellow-800'
        },
        {
          name: 'epic',
          style: 'bg-purple-400 text-purple-800'
        },
        {
          name: 'unique',
          style: 'bg-gradient-to-r from-purple-500 to-yellow-400 text-white'
        }
      ],
      categories: [
        {
          name: 'legendary',
        },
        {
          name: 'eyes',
        },
        {
          name: 'head',
        },
        {
          name: 'mouth',
        },
        {
          name: 'tail',
        },
        {
          name: 'arm',
        },
      ]
    }
  }
}
</script>
