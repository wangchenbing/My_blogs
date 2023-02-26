import { useStyleTag } from "/Users/wangchenbing/Desktop/My_blogs/node_modules/vuepress-plugin-components/lib/client/composables/index.js";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import FontIcon from "/Users/wangchenbing/Desktop/My_blogs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "/Users/wangchenbing/Desktop/My_blogs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "/Users/wangchenbing/Desktop/My_blogs/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import CodePen from "/Users/wangchenbing/Desktop/My_blogs/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import PDF from "/Users/wangchenbing/Desktop/My_blogs/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import StackBlitz from "/Users/wangchenbing/Desktop/My_blogs/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import VideoPlayer from "/Users/wangchenbing/Desktop/My_blogs/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import YouTube from "/Users/wangchenbing/Desktop/My_blogs/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import BackToTop from "/Users/wangchenbing/Desktop/My_blogs/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("FontIcon", FontIcon);
    app.component("Badge", Badge);
    app.component("BiliBili", BiliBili);
    app.component("CodePen", CodePen);
    app.component("PDF", PDF);
    app.component("StackBlitz", StackBlitz);
    app.component("VideoPlayer", VideoPlayer);
    app.component("YouTube", YouTube);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});