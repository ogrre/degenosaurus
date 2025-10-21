import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Network",
  __ssrInlineRender: true,
  setup(__props) {
    const networks = ref([
      {
        src: "/networks/Degenosaur_Roadmap.png",
        alt: "Degenosaur_Roadmap",
        title: "roadmap",
        text: "The plan",
        link: "/roadmap"
      },
      {
        src: "/networks/Degenosaur_Discord.png",
        alt: "Degenosaur_Discord",
        title: "discord",
        text: "Join community",
        link: "https://discord.gg/HF88aGHWdm"
      },
      {
        src: "/networks/Degenosaur_Twitter.png",
        alt: "Degenosaur_Twitter",
        title: "twitter",
        text: "Stay informed",
        link: "https://twitter.com/Degenosaur_Us"
      },
      {
        src: "/networks/Degenosaur_Manifesto.png",
        alt: "Degenosaur_Roadmap",
        title: "instagram",
        text: "Beautiful dinos",
        link: "https://www.instagram.com/degenosaur.us/"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto my-12" }, _attrs))}><div class="px-16 grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(unref(networks), (network) => {
        _push(`<div class="${ssrRenderClass([
          "h-24 col-span-1 bg-ivory relative duration-200",
          network.disabled ? "hover:bg-gray-500/30 time-cursor" : "hover:bg-dino-green/30 cursor-pointer"
        ])}">`);
        if (network.disabled) {
          _push(`<a class="flex justify-between mx-6 my-4 time-cursor"><div><h1 class="first-letter:uppercase text-gray-900 text-xl md:text-2xl">${ssrInterpolate(network.title)}</h1><p class="text-dino-green text-xs">${ssrInterpolate(network.text)}</p></div><img class="absolute bottom-0 right-0 h-20" alt="dino"${ssrRenderAttr("src", network.src)}></a>`);
        } else if (network.title === "roadmap") {
          _push(`<a${ssrRenderAttr("href", network.link)} class="flex justify-between mx-6 my-4"><div><h1 class="first-letter:uppercase text-gray-900 text-xl md:text-2xl">${ssrInterpolate(network.title)}</h1><p class="text-dino-green text-xs">${ssrInterpolate(network.text)}</p></div><img class="absolute bottom-0 right-0 h-20" alt="dino"${ssrRenderAttr("src", network.src)}></a>`);
        } else {
          _push(`<a${ssrRenderAttr("href", network.link)} target="_blank" rel="noopener noreferrer" class="flex justify-between mx-6 my-4"><div><h1 class="first-letter:uppercase text-gray-900 text-xl md:text-2xl">${ssrInterpolate(network.title)}</h1><p class="text-dino-green text-xs">${ssrInterpolate(network.text)}</p></div><img class="absolute bottom-0 right-0 h-20" alt="dino"${ssrRenderAttr("src", network.src)}></a>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Network.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Network-BThr8NSg.mjs.map
