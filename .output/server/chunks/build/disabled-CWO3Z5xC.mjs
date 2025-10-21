import { _ as _sfc_main$1 } from './FooterBlock-BJAmnZew.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/main/jurassic_park_meme.jpg");
const _sfc_main = {
  name: "disabled",
  components: {
    FooterBlock: _sfc_main$1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nuxt = resolveComponent("Nuxt");
  const _component_FooterBlock = resolveComponent("FooterBlock");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between h-full min-h-screen" }, _attrs))}><img class="h-full w-full m-auto"${ssrRenderAttr("src", _imports_0)} alt="jurassic_park_meme.jpg">`);
  _push(ssrRenderComponent(_component_Nuxt, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterBlock, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/disabled.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const disabled = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { disabled as default };
//# sourceMappingURL=disabled-CWO3Z5xC.mjs.map
