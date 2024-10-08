import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    // "/",
    {
      text: "js",
      collapsable: true,
      prefix: "js/",
      icon: 'javascript',
      children: [
        '数组',
        'js封装工具',
        "BOM对象",
        "DOM操作",
        "移动端踩坑指南",
        "CentOS7安装Nginx",
        'promise使用',
        'async|await',
        'let,const,var区别',
        '构造函数与原型链',
        'call && apply && bind',
        'arguments对象',
        '深拷贝与浅拷贝',
        'TypeScript',
        '函数式编程',
        'Currying函数柯里化',
        'Cookie',
        '正则表达式'
      ],
    },
    {
      text: "css",
      icon: 'css',
      collapsable: true,
      prefix: "css/",
      children: ['css新花样', 'flex布局', "Grid布局", "slides"],
    },
    {
      text: "react",
      icon: 'react',

      collapsable: true,
      prefix: "react/",
      children: [
        '公用内容',
        'class类组件',
        'Hooks函数组件',
        '功能组件',
        '源码编写',
        '组件antd注意事项',
        '自定义Hooks',
        '额外笔记',
        '封装组件'
      ],
    },
    {
      text: "面试题",
      collapsable: true,
      icon: "write",
      prefix: "面试题/",
      children: ["js原生", "手写代码", "css面试"],
    },
    {
      text: "前端工具",
      icon: 'repair',
      collapsable: true,
      prefix: "前端工具/",
      children: [
        'spark-md5',
        '包管理器',
        'lodash',
        'Day.js',
        "Git",],
    },
    { text: "npm", link: "/zh/npm.md", icon: "npm" },
    { text: "git", link: "/zh/git.md", icon: "git" },
    { text: "学习与书籍", link: "/zh/学习与书籍.md", icon: "editor" },
    { text: "各类密码", link: "/zh/各类密码.md", icon: "editor" },
  ],
});
