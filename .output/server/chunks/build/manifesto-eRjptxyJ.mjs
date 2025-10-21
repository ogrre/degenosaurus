import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
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
  name: "ManifestoBlock"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto lg:mt-12 mt-0 mb-12 py-8" }, _attrs))}><div class="lg:w-1/2 mb-40 lg:mb-12 px-12 md:pl-8 text-left"><h1 class="text-2xl md:text-3xl xl:text-4xl mb-6">MANIFESTO</h1><p class="text-gray-900"><span class="uppercase text-xl text-dino-green">Gm fren ! 👋🏻</span><br><br> We are probably living right now the golden age of the NFT. Opensea is full of everything, NFTs are coming to more and more chains everyday. And we all saw what happened with the first Solana summer. Solana summer was <span class="text-dino-green font-bold">fun</span>. Minting was <span class="text-dino-green font-bold">fun</span>. <br><br> For many of us, it has become a work, and fun has been slowly disappearing since then. Tasteless mints, common art, whitelist chase hassle… <br><br> Thankfully, many new projects are breathing the wind of change in the community, and <span class="text-dino-green font-bold">we are one of those</span> and <span class="text-dino-green font-bold">bringing back</span> fun to minting. <br><br> Let me ask you a question: would you rather work your whole life or make <span class="text-dino-green font-bold">life changing</span> gains in 1 mint ? 100% of winner have once played! <br><br> Hold your seat and stick with us, <span class="text-dino-green font-bold">WAGMI</span> ! </p></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/ManifestoBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ManifestoBlock = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "BlocksManifestoBlock" });
const _sfc_main = {
  name: "manifesto",
  components: { ManifestoBlock }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ManifestoBlock = resolveComponent("ManifestoBlock");
  _push(ssrRenderComponent(_component_ManifestoBlock, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manifesto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const manifesto = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { manifesto as default };
//# sourceMappingURL=manifesto-eRjptxyJ.mjs.map
