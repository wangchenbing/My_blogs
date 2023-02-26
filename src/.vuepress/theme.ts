import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  iconAssets: "iconfont",
  logo: "/xiao.png",
  repo: "https://gitee.com/dashboard/projects",
  docsDir: "docs",
  fullscreen: true,
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word"],
  encrypt: {
    config: {
      "/zh/各类密码": ["poiuy", "yuiop"],
    },
  },
  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Repo", "Search"],
  },
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      displayFooter: true,
      blog: {
        description: "一个前端开发者",
      },
    },
  },
  plugins: {
    blog: {
      autoExcerpt: true,
    },
    copyCode: {},
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true
    },

    pwa: {
      favicon: "/xiao.png",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      manifest: {
        icons: [
          {
            src: "/xiao.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/xiao.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/xiao.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/xiao.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
    // 你想使用的组件
    components: [
      "Badge",
      "BiliBili",
      "CodePen",
      "PDF",
      "StackBlitz",
      "VideoPlayer",
      "YouTube",
    ],
  },
});
