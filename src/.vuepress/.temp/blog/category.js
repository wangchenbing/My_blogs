export const categoryMap = {"category":{"/":{"path":"/category/","map":{}}},"tag":{"/":{"path":"/tag/","map":{"git":{"path":"/tag/git/","keys":["v-366c1d22"]},"npm/nvm":{"path":"/tag/npmnvm/","keys":["v-224bddf6"]},"书籍":{"path":"/tag/%E4%B9%A6%E7%B1%8D/","keys":["v-3d936d79"]},"CSS":{"path":"/tag/css/","keys":["v-1008f34a","v-7d129068"]},"React":{"path":"/tag/react/","keys":["v-0b8632af","v-36aebfc3","v-25fac9ac","v-4210f258","v-36c5b1e6","v-4727e05c","v-a5df2dc8","v-0597d322"]},"JS":{"path":"/tag/js/","keys":["v-00551d52","v-3b873037","v-2b4fbd32","v-a48e2144","v-4b34ef16","v-c5ffdcd4","v-0f16aeaf","v-9107dc64","v-6f57b1a5","v-ca152ac6","v-3beb343e","v-1bd9656c","v-4974543d","v-5f7207ff","v-2a179ea0","v-73103fe8","v-4eba84f9"]},"markdown":{"path":"/tag/markdown/","keys":["v-306f242c"]},"css面试":{"path":"/tag/css%E9%9D%A2%E8%AF%95/","keys":["v-18829fa6"]},"JS面试":{"path":"/tag/js%E9%9D%A2%E8%AF%95/","keys":["v-92a87d74","v-43646608"]}}}}}

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
