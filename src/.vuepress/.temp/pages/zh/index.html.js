export const data = JSON.parse("{\"key\":\"v-2d0ad528\",\"path\":\"/zh/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"博客主页\",\"heroText\":\"Mr.冰的前端\",\"heroFullScreen\":true,\"tagline\":\"They laugh at you because you are getting better and better\",\"bgImage\":\"/guidao.png\"},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.77,\"words\":232},\"filePathRelative\":\"zh/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
