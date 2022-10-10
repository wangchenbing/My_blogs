<template><div><p>您可以使用带有 Markdown 支持的插槽来自定义页面布局。</p>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>此处仅仅是一个演示，你应该自行根据需求添加样式。</p>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-enable MD033 -->
</div>
<p>::: slot page-top</p>
<p>页面顶部内容</p>
<p>:::</p>
<p>::: slot page-bottom</p>
<p>页面底部内容</p>
<p>:::</p>
<p>::: slot content-top</p>
<p>内容顶部内容</p>
<p>:::</p>
<p>::: slot content-bottom</p>
<p>内容底部内容</p>
<p>:::</p>
<p>::: slot navbar-start</p>
<p>导航栏起始内容</p>
<p>:::</p>
<p>::: slot navbar-center</p>
<p>导航栏中部内容</p>
<p>:::</p>
<p>::: slot navbar-end</p>
<p>导航栏末尾内容</p>
<p>:::</p>
<p>::: slot sidebar-top</p>
<p>侧边栏顶部内容</p>
<p>:::</p>
<p>::: slot sidebar-center</p>
<p>侧边栏中部内容</p>
<p>:::</p>
<p>::: slot sidebar-bottom</p>
<p>侧边栏底部内容</p>
<p>:::</p>
<p>更多详情，详见 <a href="https://vuepress-theme-hope.github.io/v1/zh/guide/layout/custom.html" target="_blank" rel="noopener noreferrer">自定义布局<ExternalLinkIcon/></a>.</p>
</div></template>



<style lang="stylus">
@require '~@mr-hope/vuepress-shared/styles/wrapper'

.content__navbar-start, .content__navbar-center, .content__navbar-end
  display inline-block
  
  p
    margin 0
    line-height 2rem

.content__sidebar-top, .content__sidebar-center, .content__sidebar-bottom
  text-align center

.content__page-top, .content__page-bottom, .content__content-top, .content__content-bottom
  @extend $wrapper
  padding-top 0
  padding-bottom 0
  text-align center
</style>