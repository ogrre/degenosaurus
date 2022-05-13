<template>
  <section class="container mx-auto lg:my-12 mt-0 mb-12 py-8 p-12 border-b-2 border-dino-green/50">
    <div class="text-center md:text-left">
      <h1 class="text-2xl md:text-3xl xl:text-4xl mb-6">FAQ</h1>
      <h2 class="sm:text-lg md:text-xl text-dino-green mb-12">Everything you need to know to Degenosaur</h2>
      <details v-for="question in questions" class="bg-ivory p-4 border-dino-green/50 border-t last:border-b cursor-pointer">
        <summary class="uppercase font-semibold mt-4">{{ question.label }}</summary>
        <p class="mt-8 mb-4 pl-8 text-sm">{{ question.answer }}</p>
      </details>
    </div>
  </section>
</template>

<script>
export default {
  name: "FAQBlock",
  data(){
    return {
      questions: [
        {
          label: '🦖 Who we are ?',
          answer: 'Degenosaur.us is a community built with **♥**  by 5 passionates.',
        },
        {
          label: '🔭 What we do ?',
          answer: 'We offer lottery tickets for a fun, community-centric, and high rewarding raffle. We are innovating from old boring mints by bringing back fun into NFTs.',
        },
        {
          label: '👨‍👩‍👧‍👦 Who is it for ?',
          answer: 'We are introducing this experience to every user in the Solana NFT ecosystem. Although our name includes the term "degen", you shouldn\'t be fooled: this is a fun experience for everyone !',
        },
        {
          label:  'What is the supply ?',
          answer: '777 Degenausor will be created',
        },
        {
          label: '🏷️ What is the Mint price ?',
          answer: '2 SOL',
        },
        {
          label: '🎰 How many Degenausor can I mint ?',
          answer: 'TBD per wallet',
        },
        {
          label: '🚀 When will we Launch ?',
          answer: 'June 10',
        },
        {
          label: '📜 How do I get whitelisted ?',
          answer: 'TBD',
        },
        {
          label: '📬 Are we giving degenosaur.us spot to DAO’s, Alpha Communities ?',
          answer: 'Yes we are, for collaborations, please DM us on Twitter or open a ticket and tag us on Discord',
        },
      ]
    }
  }
}
</script>
