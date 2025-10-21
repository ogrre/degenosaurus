import { b as __nuxt_component_0 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$1 } from './Navbar-DLiLjOz9.mjs';
import { _ as _sfc_main$2 } from './FooterBlock-BJAmnZew.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './nuxt-link-y8OVtzTc.mjs';

const _imports_0 = publicAssetsURL("/home/Rock_big.png");
const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between h-full min-h-screen bg-sky" }, _attrs))}><template>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</template><div class="flex flex-col z-10"><div class="mx-auto flex justify-center"><img class="h-32 md:h-56 xl:h-72 translate-y-3" alt="dino"${ssrRenderAttr("src", _imports_0)}></div><div class="bg-ground border-t-2 lg:border-t-4 border-t-gray-900">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-DUsH6sAn.mjs.map
