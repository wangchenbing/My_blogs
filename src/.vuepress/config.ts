import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/My_blogs/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mr.冰的前端",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,
  plugins: [
    searchPlugin({}),
    // //樱花插件
    // ["sakura", {
    //   num: 10,  // 默认数量
    //   show: true, //  是否显示
    //   zIndex: 1,// 层级
    //   img: {
    //     replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
    //     httpUrl: '/img/sakura.png'     // 绝对路径
    //   }
    // }],
  ],

  shouldPrefetch: false,
});
