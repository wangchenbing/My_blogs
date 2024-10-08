export const data = JSON.parse("{\"key\":\"v-0d223344\",\"path\":\"/tag/react/\",\"title\":\"React 标签\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"React 标签\",\"blog\":{\"type\":\"category\",\"name\":\"React\",\"key\":\"tag\"},\"layout\":\"Blog\"},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null}")

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
