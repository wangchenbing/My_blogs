export const data = JSON.parse("{\"key\":\"v-4974543d\",\"path\":\"/zh/js/let,const,var%E5%8C%BA%E5%88%AB.html\",\"title\":\"let,const,var区别\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"let,const,var区别\",\"date\":\"2022-07-18T00:00:00.000Z\",\"tags\":[\"JS\"],\"summary\":\"不存在变量提升 var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined. 为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。 上面代码中，变量foo用var命令声明，会发生变量提升，即脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined。变量bar用let命令声明，不\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/My_blogs/zh/js/let,const,var%E5%8C%BA%E5%88%AB.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.冰的前端\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"let,const,var区别\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"JS\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-07-18T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"不存在变量提升\",\"slug\":\"不存在变量提升\",\"link\":\"#不存在变量提升\",\"children\":[]},{\"level\":2,\"title\":\"暂时性死区\",\"slug\":\"暂时性死区\",\"link\":\"#暂时性死区\",\"children\":[]},{\"level\":2,\"title\":\"不允许重复声明\",\"slug\":\"不允许重复声明\",\"link\":\"#不允许重复声明\",\"children\":[]},{\"level\":2,\"title\":\"块级作用域\",\"slug\":\"块级作用域\",\"link\":\"#块级作用域\",\"children\":[]}],\"readingTime\":{\"minutes\":1.42,\"words\":425},\"filePathRelative\":\"zh/js/let,const,var区别.md\",\"localizedDate\":\"2022年7月18日\"}")

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
