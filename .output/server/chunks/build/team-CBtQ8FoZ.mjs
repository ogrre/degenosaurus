import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2 } from './Network-BThr8NSg.mjs';
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
  name: "TeamBlock",
  data() {
    return {
      teammates: [
        {
          pfp: "/pfp/Dobiche.png",
          name: "ELAPHOS",
          job: "CPO",
          twitter: "https://twitter.com/Elaphos42",
          description: "Doctor in chemistry, passionate about new technology has first explored the world of DeFi before finding his place in the NFT space."
        },
        {
          pfp: "/pfp/0GRE.png",
          name: "OGRE",
          job: "CTO",
          twitter: "https://twitter.com/Degen_0gre",
          description: "Back end web developer, passionate about artistic creation and recently introduced to web3 and blockchain technologies, joining an NFT project was the logical next step."
        },
        {
          pfp: "/pfp/Chiro.png",
          name: "CHIRONEX",
          job: "CFO",
          twitter: "https://twitter.com/Ch1r0nex",
          description: "Entrepreneur, tech enthusiast and biochemist. Early into crypto and in love with its fundamentals. As a DeFi & NFT addict, always ready for new challenges - Making business models rain."
        },
        {
          pfp: "/pfp/JohnnyBoy.png",
          name: "JOHNNYBOY",
          job: "CIO",
          twitter: "https://twitter.com/us_johnnyBoy",
          description: "Former studio sound engineer/owner - full stack web dev by day, degen by night - coming straight from Solana and Nervos DeFi."
        },
        {
          pfp: "/pfp/EBO.png",
          name: "EBO",
          job: "CMO",
          twitter: "https://twitter.com/_EB0_",
          description: "Previously a web developer, started his blockchain journey by mining Dogecoin in 2014 and never stopped since. Loves trading, DeFi and NFT everywhere, anytimes."
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto lg:my-12 mt-0 mb-12 py-8 border-b-2 border-b-dino-green/50" }, _attrs))}><div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-max mx-auto"><div class="row-span-1 col-span-full text-center md:text-left px-2"><h1 class="text-2xl md:text-3xl xl:text-4xl mb-6">TEAM</h1><h2 class="first-letter:uppercase sm:text-lg md:text-xl text-dino-green">an incredible band of degenerate friends</h2></div><!--[-->`);
  ssrRenderList($data.teammates, (teammate) => {
    _push(`<div class="mx-auto col-span-1 w-64 p-2 duration-300 hover:backdrop-brightness-[96%] hover:scale-110 hover:skew-y-1"><img class="w-64" alt="dino"${ssrRenderAttr("src", teammate.pfp)}><div class="flex justify-between mt-2 mb-1"><h3 class="text-lg lg:text-2xl text-gray-900">${ssrInterpolate(teammate.name)}</h3><button class="rounded-lg bg-lime-50 hover:bg-ivory hover:scale-110 ease-in-out duration-300 py-2 px-3"><a${ssrRenderAttr("href", teammate.twitter)} target="_blank" rel="noopener noreferrer"><svg class="fill-gray-900 hover:fill-dino-green cursor-pointer w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></button></div><h3 class="lg:text-lg text-dino-green mb-1">${ssrInterpolate(teammate.job)}</h3><p class="text-sm">${ssrInterpolate(teammate.description)}</p></div>`);
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/TeamBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TeamBlock = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "BlocksTeamBlock" });
const _sfc_main = {
  name: "team",
  components: { Network: _sfc_main$2, TeamBlock }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TeamBlock = resolveComponent("TeamBlock");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_TeamBlock, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const team = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { team as default };
//# sourceMappingURL=team-CBtQ8FoZ.mjs.map
