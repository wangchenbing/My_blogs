export const categoryMap = {"category":{"/":{"path":"/category/","map":{}},"/zh/":{"path":"/zh/category/","map":{"使用指南":{"path":"/zh/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-54aa038c","v-9bacb062","v-78b3be72","v-306f242c","v-c0c65444"]}}}},"tag":{"/":{"path":"/tag/","map":{}},"/zh/":{"path":"/zh/tag/","map":{"文章加密":{"path":"/zh/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/","keys":["v-78b3be72"]},"markdown":{"path":"/zh/tag/markdown/","keys":["v-306f242c"]},"页面配置":{"path":"/zh/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","keys":["v-54aa038c"]},"使用指南":{"path":"/zh/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-54aa038c"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
