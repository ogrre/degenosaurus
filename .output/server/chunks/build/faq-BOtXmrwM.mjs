import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$1 = {
  name: "FAQBlock",
  data() {
    return {
      questions: [
        {
          label: "🦖 What is Degenosaur.us?",
          answer: "Degenosaur.us is a community built with ♥ by 5 passionates. We aim to provide a unique and high rewarding NFT\ngambling experience to every NFT user on the Solana Blockchain."
        },
        {
          label: "🔭 What does Degenosaur.us do?",
          answer: "We offer lottery tickets for a fun, community-centric, and high rewarding raffle. We are innovating from old boring\nmints by bringing back fun into NFTs."
        },
        {
          label: "👨‍👩‍👧‍👦 Who is it for?",
          answer: `We are introducing this experience to every user in the Solana NFT ecosystem. Although our name includes the
term "degen", you shouldn't be fooled: this is a fun experience for everyone!`
        },
        {
          label: "🎰 What is the supply?",
          answer: "777 Degenosaurs will be released into the wild."
        },
        {
          label: "🏷️ How much is it?",
          answer: "2 SOL"
        },
        {
          label: "💰 How much are the royalties?",
          answer: "7.77%"
        },
        {
          label: "♾️ How many can I mint?",
          answer: "TBD"
        },
        {
          label: "🚀 Wen mint?",
          answer: "TBA"
        },
        {
          label: "📜 How do I get whitelisted?",
          answer: "1 - Be active, positive and a helpful mumber of the community! The Degenosaurus team will be actively watching\nand hand picking valuable contributors who are showing interest and making genuine connections.\n2 - Participate in 🎉｜giveaway\n3 - If your project/DAO want to make a collab with us, fill the form at \0｜collabs\n4 - Make some 🎨｜fan-art\n5 - Make @EBO laugh at 💯｜memes"
        },
        {
          label: "📬 Is Degenosaur.us giving whitelist spots to DAOs and alpha communities?",
          answer: "Yes we are, for collaborations, please fill the following form :",
          html: true
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto lg:my-12 mt-0 mb-12 py-8 p-12 border-b-2 border-dino-green/50" }, _attrs))}><div class="text-center md:text-left"><h1 class="text-2xl md:text-3xl xl:text-4xl mb-6">FAQ</h1><h2 class="sm:text-lg md:text-xl text-dino-green mb-12">Everything you need to know to Degenosaur</h2><!--[-->`);
  ssrRenderList($data.questions, (question) => {
    _push(`<details class="bg-ivory p-4 border-dino-green/50 border-t last:border-b cursor-pointer"><summary class="uppercase font-semibold mt-4">${ssrInterpolate(question.label)}</summary><p class="mt-8 mb-4 pl-8 text-sm">${ssrInterpolate(question.answer)} `);
    if (question.html) {
      _push(`<span><a class="font-bold underline text-dino-green" href="https://docs.google.com/forms/d/e/1FAIpQLScVReROwjjfi3KYn0LFo7qk1D0my57Klo1oLn339XKViG_rSA/viewform" target="_blank" rel="noopener noreferrer">Want WL Spot</a> , We will contact you as soon as possible </span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</p></details>`);
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/FAQBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FAQBlock = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "BlocksFAQBlock" });
const _sfc_main = {
  name: "faq",
  components: { FAQBlock }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FAQBlock = resolveComponent("FAQBlock");
  _push(ssrRenderComponent(_component_FAQBlock, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { faq as default };
//# sourceMappingURL=faq-BOtXmrwM.mjs.map
