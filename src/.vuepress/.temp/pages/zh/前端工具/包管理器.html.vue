<template><div><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h2>
<h3 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目" aria-hidden="true">#</a> 新建项目</h3>
<ul>
<li>yarn init</li>
</ul>
<h3 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖" aria-hidden="true">#</a> 添加依赖</h3>
<ul>
<li>yarn add [package]</li>
<li>yarn add [package]@[version]</li>
<li>yarn add [package]@[tag]</li>
</ul>
<h3 id="更新依赖" tabindex="-1"><a class="header-anchor" href="#更新依赖" aria-hidden="true">#</a> 更新依赖</h3>
<ul>
<li>yarn upgrade [package]</li>
<li>yarn upgrade [package]@[version]</li>
<li>yarn upgrade [package]@[tag]</li>
</ul>
<h3 id="删除依赖" tabindex="-1"><a class="header-anchor" href="#删除依赖" aria-hidden="true">#</a> 删除依赖</h3>
<ul>
<li>yarn remove [package]</li>
<li>例:yarn remove react-transition-group</li>
</ul>
<h3 id="根据package-json文件为项目安装所有依赖" tabindex="-1"><a class="header-anchor" href="#根据package-json文件为项目安装所有依赖" aria-hidden="true">#</a> 根据package.json文件为项目安装所有依赖</h3>
<ul>
<li>yarn</li>
<li>or</li>
<li>yarn install</li>
</ul>
<h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2>
<h3 id="查看源" tabindex="-1"><a class="header-anchor" href="#查看源" aria-hidden="true">#</a> 查看源</h3>
<ul>
<li>npm config get registry</li>
<li>npm config list</li>
</ul>
<h3 id="npm-换源" tabindex="-1"><a class="header-anchor" href="#npm-换源" aria-hidden="true">#</a> npm 换源</h3>
<ul>
<li>淘宝： npm config set registry <a href="https://registry" target="_blank" rel="noopener noreferrer">https://registry<ExternalLinkIcon/></a>.npm.taobao.org</li>
</ul>
<h3 id="清除npm缓存" tabindex="-1"><a class="header-anchor" href="#清除npm缓存" aria-hidden="true">#</a> 清除npm缓存</h3>
<ul>
<li>npm cache clean --force</li>
</ul>
<h3 id="删包" tabindex="-1"><a class="header-anchor" href="#删包" aria-hidden="true">#</a> 删包</h3>
<ul>
<li>npm uninstall &lt;&gt;</li>
</ul>
<h3 id="初始项目" tabindex="-1"><a class="header-anchor" href="#初始项目" aria-hidden="true">#</a> 初始项目</h3>
<ul>
<li>npm init</li>
</ul>
<h3 id="安装指定版本的包" tabindex="-1"><a class="header-anchor" href="#安装指定版本的包" aria-hidden="true">#</a> 安装指定版本的包</h3>
<ul>
<li>npm install jquery@1.11.0</li>
</ul>
<p>安装包的后缀</p>
<ul>
<li>g</li>
</ul>
<p>–global 缩写为 -g ，表示安装包的时候，视作全局的包。安装之后的包将位于系统预设的目录之下。</p>
<ul>
<li>S</li>
</ul>
<p>–save ,缩写为 -S ， 表示安装的包将写入package.json里面的dependencies。生产依赖</p>
<ul>
<li>D</li>
</ul>
<p>–save-dev ，缩写为 -D ，表示将安装的包写入package.json里面的devDependencies。开发依赖</p>
<ul>
<li>O</li>
</ul>
<p>–save-optional ,缩写为 -O,表示将安装的包写入package.json里面的optionalDependencies。</p>
<ul>
<li>E</li>
</ul>
<p>–save-exact缩写为-E，表示安装的包的版本是精确指定的。</p>
<ul>
<li>B</li>
</ul>
<p>–save-bundle 缩写为 -B , 表示将安装的包写入package.json里面的bundleDependencies。</p>
</div></template>


