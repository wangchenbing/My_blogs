<template><div><h2 id="_1-下载nginx安装包" tabindex="-1"><a class="header-anchor" href="#_1-下载nginx安装包" aria-hidden="true">#</a> 1.下载Nginx安装包</h2>
<ol>
<li>官网下载安装包</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>直接下载.tar.gz安装包，地址：https://nginx.org/en/download.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://www.zpzpup.com/assets/image/nginx/nginx01.png" alt="下载安装包">
<ol start="2">
<li>命令行下载安装包</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  wget -c https://nginx.org/download/nginx-1.18.0.tar.gz // 可切换至 /usr 目录下载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-解压" tabindex="-1"><a class="header-anchor" href="#_2-解压" aria-hidden="true">#</a> 2.解压</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 解压
tar -zxvf nginx-1.18.0.tar.gz  
// 切换到nginx目录
cd nginx-1.18.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置" aria-hidden="true">#</a> 3.配置</h2>
<p>1.使用默认配置（推荐）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./configure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://www.zpzpup.com/assets/image/nginx/nginx02.png" alt="使用默认配置">
<p>错误为：./configure: error: the HTTP rewrite module requires the PCRE library.</p>
<img src="https://www.zpzpup.com/assets/image/nginx/nginx-err01.png" alt="错误">
<p>安装pcre-devel解决问题</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install pcre-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还有可能出现：</p>
<p>错误提示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./configure: error: the HTTP cache module requires md5 functions
from OpenSSL library.   You can either disable the module by using
--without-http-cache option, or install the OpenSSL library into the system,
or build the OpenSSL library statically from the source with nginx by using
--with-http_ssl_module --with-openssl=&lt;path> options.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.自定义配置（不推荐）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./configure \
--prefix=/usr/local/nginx \
--conf-path=/usr/local/nginx/conf/nginx.conf \
--pid-path=/usr/local/nginx/conf/nginx.pid \
--lock-path=/var/lock/nginx.lock \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-http_gzip_static_module \
--http-client-body-temp-path=/var/temp/nginx/client \
--http-proxy-temp-path=/var/temp/nginx/proxy \
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
--http-scgi-temp-path=/var/temp/nginx/scgi
注：将临时文件目录指定为/var/temp/nginx，需要在/var下创建temp及nginx目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-编译安装" tabindex="-1"><a class="header-anchor" href="#_4-编译安装" aria-hidden="true">#</a> 4.编译安装</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://www.zpzpup.com/assets/image/nginx/nginx03.png">
<img src="https://www.zpzpup.com/assets/image/nginx/nginx04.png">
<p>查找安装路径</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>whereis nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://www.zpzpup.com/assets/image/nginx/nginx05.png">
<p>启动、停止nginx</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /usr/local/nginx/sbin/
./nginx 
./nginx -s stop
./nginx -s quit
./nginx -s reload
./nginx -s quit:此方式停止步骤是待nginx进程处理任务完毕进行停止。
./nginx -s stop:此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://www.zpzpup.com/assets/image/nginx/nginx06.png">
<p>查询nginx进程：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ps aux|grep nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启 nginx</p>
<p>1.先停止再启动（推荐）：
对 nginx 进行重启相当于先停止再启动，即先执行停止命令再执行启动命令。如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./nginx -s 
./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://www.zpzpup.com/assets/image/nginx/nginx09.png">
<p>2.重新加载配置文件：
当 nginx的配置文件 nginx.conf 修改后，要想让配置生效需要重启 nginx，使用-s reload不用先停止 ngin x再启动 nginx 即可将配置信息在 nginx 中生效，如下：
./nginx -s reload</p>
<p>启动成功可以看到</p>
<h2 id="_5-开机自动启动" tabindex="-1"><a class="header-anchor" href="#_5-开机自动启动" aria-hidden="true">#</a> 5.开机自动启动</h2>
<p>即在rc.local增加启动代码就可以了。</p>
<p><a href="http://1.vi" target="_blank" rel="noopener noreferrer">1.vi<ExternalLinkIcon/></a> /etc/rc.local</p>
<p>2.i 进行修改</p>
<p>3.增加一行 /usr/local/nginx/sbin/nginx</p>
<p>4.Esc 退出编辑</p>
<p>5.:wq 报存退出</p>
<img src="https://www.zpzpup.com/assets/image/nginx/nginx10.png">
<p>6.设置执行权限：
chmod 755 rc.local</p>
</div></template>


