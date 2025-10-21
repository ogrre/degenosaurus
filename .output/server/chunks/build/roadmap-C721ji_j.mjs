import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _imports_0 = publicAssetsURL("/stickers/STICKER_flame_HD.png");
const _sfc_main$1 = {
  name: "RoadmapBlock",
  data() {
    return {
      quarters: [
        {
          title: "Q2",
          steps: [
            {
              title: "🐦 Twitter Release",
              validated: true
            },
            {
              title: "💬 Discord Opening",
              validated: true
            },
            {
              title: "🌐 Website Release",
              validated: true
            }
          ]
        },
        {
          title: "Q3",
          steps: [
            {
              title: "🖼️ PFP Mint"
            },
            {
              title: "🏪 Marketplaces Listing"
            },
            {
              title: "🗳️ DAOnosaurus"
            },
            {
              title: "🎟️ Raffles Launch"
            },
            {
              title: "🔒 Staking Platform"
            }
          ],
          inverse: true
        },
        {
          title: "Q4",
          steps: [
            {
              title: "👙 Merchosaurus"
            },
            {
              title: "🎊 Surprises !"
            }
          ]
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto lg:my-12 mt-0 mb-12 py-8 p-12 border-b-2 border-dino-green/50" }, _attrs))}><div class="text-center"><h1 class="text-2xl md:text-3xl xl:text-4xl mb-6">Roadmap</h1><h2 class="sm:text-lg md:text-xl text-dino-green mb-12">What is planned for Degenosaurs</h2></div><!--[-->`);
  ssrRenderList($data.quarters, (quarter) => {
    _push(`<div class="${ssrRenderClass(["mx-auto w-full lg:w-2/3  flex border-dashed border-red-600 p-2 ", quarter.inverse ? "border-r-8 border-y-8 rounded-r-lg" : "border-l-8"])}"><div class="w-full p-4 lg:p-8"><h1 class="text-center text-xl mb-8">${ssrInterpolate(quarter.title)} 2022</h1><!--[-->`);
    ssrRenderList(quarter.steps, (step) => {
      _push(`<div class="${ssrRenderClass(["relative p-4 m-4 flex gap-2 border-2 border-dino-green rounded", step.validated && "bg-dino-green/20"])}"><h2>${ssrInterpolate(step.title)}</h2>`);
      if (step.validated) {
        _push(`<img class="absolute right-0 bottom-0 h-12 lg:h-16"${ssrRenderAttr("src", _imports_0)} alt="">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]--></div></div>`);
  });
  _push(`<!--]--><div class="text-center"><h2 class="sm:text-lg md:text-xl my-12">More infos? Click on white paper!</h2><div class="flex justify-center align-middle"><a href="https://drive.google.com/file/d/1QaVD9yxD8okTqp6z0pjJrokKxmTNEHUY/view" class="cursor-pointer mx-auto bg-dino-green rounded-full p-3 motion-safe:animate-bounce" target="_blank" rel="noopener noreferrer"><svg class="fill-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M127.1 0C74.98 0 31.98 86 31.98 192v172.1c0 41.12-9.751 62.75-31.13 126.9C-2.65 501.2 5.101 512 15.98 512h280.9c13.88 0 26-8.75 30.38-21.88c12.88-38.5 24.75-72.37 24.75-126L351.1 192c0-83.62 23.62-153.5 60.5-192H127.1zM95.99 224C87.11 224 79.99 216.9 79.99 208S87.11 192 95.99 192s16 7.125 16 16S104.9 224 95.99 224zM159.1 224c-8.875 0-16-7.125-16-16S151.1 192 159.1 192s16 7.125 16 16S168.9 224 159.1 224zM223.1 224C215.1 224 207.1 216.9 207.1 208S215.1 192 223.1 192c8.875 0 16 7.125 16 16S232.9 224 223.1 224zM287.1 224C279.1 224 271.1 216.9 271.1 208S279.1 192 287.1 192c8.875 0 16 7.125 16 16S296.9 224 287.1 224zM479.1 0c-53 0-96 86.06-96 192.1C383.1 298.1 426.1 384 479.1 384S576 298 576 192C576 86 532.1 0 479.1 0zM479.1 256c-17.63 0-32-28.62-32-64s14.38-64 32-64c17.63 0 32 28.62 32 64S497.6 256 479.1 256z"></path></svg></a></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/RoadmapBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RoadmapBlock = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "BlocksRoadmapBlock" });
const _sfc_main = {
  // layout: 'disabled',
  name: "roadmap",
  components: { RoadmapBlock }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RoadmapBlock = resolveComponent("RoadmapBlock");
  _push(ssrRenderComponent(_component_RoadmapBlock, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/roadmap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const roadmap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { roadmap as default };
//# sourceMappingURL=roadmap-C721ji_j.mjs.map
