import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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

const _imports_0 = publicAssetsURL("/main/degenosaurus.png");
const _imports_1 = publicAssetsURL("/home/Cloud.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-sky flex flex-col" }, _attrs))}><div class="container mx-auto lg:px-24 text-center flex py-16 items-center justify-center flex-col"><img class="w-3/4 xl:w-1/2 z-30" alt="degenosaurus-logotype"${ssrRenderAttr("src", _imports_0)}><h3 class="mx-12 mt-6 mb-12 lg:mt-12 text-xl xl:text-2xl text-gray-900 font-extrabold text-center z-30">777 Dinos coming to bring fun back to NFT minting !</h3><div class="z-0"><div class="w-full absolute left-0 top-0 h-full hidden lg:block animate-cloud"><img class="hidden w-1/6 absolute lg:block left-10 bottom-1/2" alt="cloud1"${ssrRenderAttr("src", _imports_1)}><img class="hidden w-1/5 absolute lg:block right-10 bottom-2/3" alt="cloud2"${ssrRenderAttr("src", _imports_1)}></div><div class="w-full absolute left-0 top-0 h-full hidden lg:block animate-cloud2"><img class="hidden w-1/6 absolute lg:block left-10 bottom-1/2" alt="cloud1"${ssrRenderAttr("src", _imports_1)}><img class="hidden w-1/5 absolute lg:block right-10 bottom-2/3" alt="cloud2"${ssrRenderAttr("src", _imports_1)}></div><div class="w-full absolute left-0 top-0 h-full -ml-1/2 hidden lg:block animate-slowCloud"><img class="hidden w-1/6 absolute lg:block left-10 bottom-1/2" alt="cloud1"${ssrRenderAttr("src", _imports_1)}><img class="hidden w-1/5 absolute lg:block right-10 bottom-2/3" alt="cloud2"${ssrRenderAttr("src", _imports_1)}></div><div class="w-full absolute left-0 top-0 h-full -ml-1/2 hidden lg:block animate-slowCloud2"><img class="hidden w-1/6 absolute lg:block left-10 bottom-1/2" alt="cloud1"${ssrRenderAttr("src", _imports_1)}><img class="hidden w-1/5 absolute lg:block right-10 bottom-2/3" alt="cloud2"${ssrRenderAttr("src", _imports_1)}></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DpznGXFA.mjs.map
