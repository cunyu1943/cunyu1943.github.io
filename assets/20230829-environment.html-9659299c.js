import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as i,c as s,a as e,d as o,b as t,e as n}from"./app-c649d9c7.js";const l="/assets/image-20230829222932583-041b8a73.png",h="/assets/image-20230829224404655-b40f4f45.png",p={},_=n('<h1 id="开发环境搭建" tabindex="-1"><a class="header-anchor" href="#开发环境搭建" aria-hidden="true">#</a> 开发环境搭建</h1><div class="hint-container info"><p class="hint-container-title">共勉</p><p>不要哀求，学会争取。若是如此，终有所获。</p></div><div class="hint-container tip"><p class="hint-container-title">原文</p></div><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>正所谓欲善其事，必先利器。那在正式学习 <code>Web</code> 前端之前，不妨来看看，我们都要先做好那些事前准备。</p><p>首先，既然要开始写代码了，一个趁手的编辑器/<code>IDE</code> 肯定是必不可少了，不可能还去使用记事本吧。当然也不是看不起记事本，只是技术虽然很重要，但效率也不能落下，要两手抓，才能有更好的产出。</p><p>目前主流市场中，前端开发无非主要有以下几个常用的编辑器/<code>IDE</code>，它们分别是：</p><ul><li><strong>Visual Studio Code</strong></li><li><strong>Webstorm</strong></li><li><strong>HBuider</strong></li><li><strong>Sublime Text</strong></li></ul><p>软件各有千秋，都有着各自的特色功能。不过环顾左右的前端开发者，大多都选择的是 <code>VS Code</code>（<code>Visual Studio Code</code>）。于是，我们也选择它作为我们 <code>Web</code> 前端教程中的代码编辑器。</p><p>有了写代码的家伙事儿还不够，所谓前端，最终的目的无非是实现各种图形化的效果，供用户交互，让用户能一目了然的看到效果。既然如此，写了代码之外，我们就还需要一个载体，将我们代码实现的效果渲染。而这个载体也很常见，也就是我们日常都会用到的浏览器。</p><p>截止目前，根据 <code>W3Counter</code> 的统计，<code>Chrome</code> 浏览器占据了绝大部分市场，处于绝对领先地位。</p><figure><img src="'+l+'" alt="2023.8 浏览器市场份额" tabindex="0" loading="lazy"><figcaption>2023.8 浏览器市场份额</figcaption></figure><p>同时，<code>Chrome</code> 也深受前端开发者的欢迎。出于两方面的考虑，因此选用 <code>Chrome</code> 作为系列教程中用于看效果的载体。</p><p>接下来，我们就先来看看，如何在我们的电脑中安装 <code>VS Code</code> 和 <code>Chrome</code>。</p><h2 id="二、vs-code-安装" tabindex="-1"><a class="header-anchor" href="#二、vs-code-安装" aria-hidden="true">#</a> 二、VS Code 安装</h2><h3 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载" aria-hidden="true">#</a> 1. 下载</h3><p>说起来好笑，之前在网上看到有人仿了一个 <code>VS Code</code> 的官网，并且下载安装需要收费。当时没忍住，直接笑出了声。不过也从侧面说明，肯定也有不少小白上过当的，不然也就不会有人闲的去仿官网了。</p><p>在此，提醒下大家，<code>VS Code</code> 是微软完全免费开源的一款编辑器，完全没有收费一说。下载时，请认准唯一指定官网。</p>',18),u={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},g=n('<figure><img src="'+h+'" alt="VS Code 官网" tabindex="0" loading="lazy"><figcaption>VS Code 官网</figcaption></figure><p>虽说官网是英文界面，不过都很简单。选择对应操作的安装包，点击 <code>Download</code> 就能得到想要的安装包了。</p><h3 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2. 安装</h3><h3 id="_3-插件" tabindex="-1"><a class="header-anchor" href="#_3-插件" aria-hidden="true">#</a> 3. 插件</h3><p><strong>（1）插件安装</strong></p><p>点击左侧扩展（插件）-&gt; 搜索插件 -&gt; install -&gt; 重启 <code>VS Code</code>。</p><p><strong>（2）推荐插件</strong></p><ul><li><strong>Chinese</strong></li></ul><p>安装该插件后，<code>VS Code</code> 就能支持中文了，再也不用害怕是英语操作界面而苦恼。</p><ul><li><strong>Open in Browser</strong></li></ul><p>顾名思义，就是能够在写好的代码文件中鼠标右键打开对应选项，它就会自动打开浏览器帮助我们渲染了。</p><h2 id="三、chrome-安装" tabindex="-1"><a class="header-anchor" href="#三、chrome-安装" aria-hidden="true">#</a> 三、Chrome 安装</h2><h3 id="_1-下载-1" tabindex="-1"><a class="header-anchor" href="#_1-下载-1" aria-hidden="true">#</a> 1. 下载</h3><p>当然了，最靠谱的方式就是从 <code>Chrome</code> 官网下载安装包。不过不出意外的话，大概率是打不开官网的。</p>',14),m={href:"https://www.google.com/chrome/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[o("这个时候，我们就必须退而求其次，去找找我们能正常下载 "),e("code",null,"Chrome"),o(" 的地址了。这里推荐去异次元软件世界进行下载，网站提供 Windows 7/8/10/11、macOS 等平台稳定版、测试版、金丝雀版的离线包的下载，还区分 32/64 位安装包，可以说是非常良心了。")],-1),b={href:"https://www.iplaysoft.com/tools/chrome/",target:"_blank",rel:"noopener noreferrer"},C=e("h3",{id:"_2-安装-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-安装-1","aria-hidden":"true"},"#"),o(" 2. 安装")],-1),x=e("p",null,[o("相对与下载而言，"),e("code",null,"Chrome"),o(" 的安装就十分简单了，只需要双击打开安装包，它就会自动开始安装。")],-1);function S(w,V){const r=a("ExternalLinkIcon"),d=a("Share");return i(),s("div",null,[_,e("blockquote",null,[e("p",null,[e("a",u,[o("https://code.visualstudio.com/"),t(r)])])]),g,e("blockquote",null,[e("p",null,[e("a",m,[o("https://www.google.com/chrome/"),t(r)])])]),f,e("blockquote",null,[e("p",null,[e("a",b,[o("https://www.iplaysoft.com/tools/chrome/"),t(r)])])]),C,x,t(d,{colorful:""})])}const E=c(p,[["render",S],["__file","20230829-environment.html.vue"]]);export{E as default};
