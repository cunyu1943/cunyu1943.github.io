import{_ as d}from"./wechatpublic-6d7ffb69.js";import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c,a as n,d as e,b as o,e as i}from"./app-063650a4.js";const p="/assets/71423640d214226a7ec32b1e87e0bb9f-56abe1ff.png",h={},u=i(`<h1 id="python-3-7-安装-polyglot-失败" tabindex="-1"><a class="header-anchor" href="#python-3-7-安装-polyglot-失败" aria-hidden="true">#</a> Python 3.7 安装 polyglot 失败</h1><div class="hint-container info"><p class="hint-container-title">共勉</p><p>不要哀求，学会争取。若是如此，终有所获。</p></div><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>学习自然语言处理的过程中，在使用 <code>polyglot</code> 工具进行分词时，安装 <code>polyglot</code> 后发现使用时总是出现如下错误：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ImportError: cannot <span class="token function">import</span> name <span class="token string">&#39;Locale&#39;</span> from <span class="token string">&#39;icu&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>防止下次再次遇见，特在此记录如下。博主使用的环境变量如下：</p><ul><li>Windows 10</li><li>Python 3.7</li></ul><p>以下解决方案均基于已经安装 <code>polyglot</code> 之上，若你还没有安装，请运行如下命令进行安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> polyglot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外，本文只针对 Windows 平台，若是 Linux 平台，可能不适用，还请谅解。</p><h2 id="二、解决方法" tabindex="-1"><a class="header-anchor" href="#二、解决方法" aria-hidden="true">#</a> 二、解决方法</h2><h3 id="_1-安装-pyicu" tabindex="-1"><a class="header-anchor" href="#_1-安装-pyicu" aria-hidden="true">#</a> 1. 安装 pyicu</h3><p>在网上搜到的解决方案，有的可以通过直接安装 <code>pyicu</code> 即可解决，安装命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> pyicu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我尝试过这个方法，最终没能解决我的问题，但还是在这里贴出来，方便大家也尝试一下，能解决最好不过，不能的话也排除了这种方法。</p><h3 id="_2-安装依赖包" tabindex="-1"><a class="header-anchor" href="#_2-安装依赖包" aria-hidden="true">#</a> 2. 安装依赖包</h3>`,16),g={href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/",target:"_blank",rel:"noopener noreferrer"},f=i(`<ul><li><strong>pycld2</strong></li><li><strong>PyICU</strong></li><li><strong>Morfessor</strong></li></ul><p>具体下载的版本请根据你的 Python 版本进行对应下载，还有一点请注意，我的 Python 3.7 版本在安装 PyICU 2.6 版本时，会报错平台不支持，此时可以尝试安装旧的版本解决该问题；</p><p>下载好上述依赖包之后，都是以 <code>.whl</code> 为后缀，然后进行安装，安装过程如下：</p><ol><li>首先从控制台进入依赖包所在文件夹；</li><li>然后使用如下命令进行安装即可；</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> xxx.whl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><p>通过上面的步骤，我们就可以完成 polyglot 相关依赖的安装了。一开始安装失败问题就得到了解决，也希望对你有所帮助！</p><p>最后，既然安装成功了，那就得试一下呀！以下是一个利用 <code>polyglot</code> 分词的结果，可以看看效果如何哦。<br> 另外，你觉得相比于 <code>jieba</code>、<code>SnowNLP</code>、<code>PkuSeg</code>、<code>THULAC</code>、<code>HanLP</code> 等分词工具，谁的效果更胜一筹呢？</p><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="⏳-联系" tabindex="-1"><a class="header-anchor" href="#⏳-联系" aria-hidden="true">#</a> ⏳ 联系</h2><p>想解锁更多知识？不妨关注我的微信公众号：<strong>村雨遥（id：JavaPark）</strong>。</p><p>扫一扫，探索另一个全新的世界。</p><figure><img src="'+d+'" alt="" width="150" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',13);function b(m,_){const s=a("ExternalLinkIcon"),l=a("Share");return r(),c("div",null,[u,n("p",null,[e("到 "),n("a",g,[e("Python Extension Packages for Windows - Christoph Gohlke (uci.edu)"),o(s)]),e(" 去下载所需要的依赖包：")]),f,o(l,{colorful:""})])}const k=t(h,[["render",b],["__file","20220421-polyglot-install.html.vue"]]);export{k as default};
