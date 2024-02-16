import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,e as o}from"./app-BwFInxZ8.js";const t="/assets/04d451920a17d9859e053f1b07cbb41f-C1QCnDqI.png",c="/assets/6cfef34c322df4d1fa527b782a39c5ea-D-MN-Szp.png",s="/assets/de5c00f96e55e78b53aa06395f2f8f83-BiSPZeHT.png",d="/assets/d25464db8f1ccad9d4fe193df1657553-xDJZEGvE.png",r="/assets/ccde635d53ecde5db61fbd8b4770a6e3-DL96uxYb.png",n="/assets/972c4ada250cbcb1ae11fc64d67d1ea8-9IVV3-6e.png",g="/assets/14acea39ce07988b9c47b9dd72ec796a-DQzVvHcM.png",l="/assets/d8f597a48d75ac8679a19ede476345cb-Ck7N41hR.png",p="/assets/6e15b68a9641a7a44be4108e9e81b3c9-dhnKGH46.png",f="/assets/88596c55247c9a327fdf825629a05bfa-Dq-CYkhV.png",h="/assets/15781307661c1c8e0626ef0dc5730a37-CZ_wQ-yq.png",b="/assets/3bd19984a627c03b15ce27a86af8e59a-BrL24LYT.png",u="/assets/294881a19a526faee6a12ba990576f0b-BiMi388M.png",_="/assets/27b5edf246d19c84dd8e028bb69a5c9b-DDq0QGOX.png",m="/assets/07af7f2c11fe8ca624cc72b198e3aefe-CUocmuRK.png",x={},S=o('<h1 id="windows-安装-postgresql" tabindex="-1"><a class="header-anchor" href="#windows-安装-postgresql" aria-hidden="true">#</a> Windows 安装 PostgreSQL</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>之前由于学习，所以选择的是受众范围较广的 <code>MySQL</code>。至于 <code>MySQL</code>，在这里就不用说了，想必大家都是很熟悉的。正式参加工作之后，才发现原来不同的公司选择的数据库都不一样，有的选择 <code>Oracle</code>，有的选择 <code>MySQL</code>，而有的则选择 <code>PostgreSQL</code>。<code>Oracle</code> 的确很厉害，不过始终是面向收费的，一般小体量的公司用起来成本太高，所以大家还是更倾向于 <code>MySQL</code>。关于 <code>MySQL</code> 的教程、知识分享博客有很多，而且大家写的也很详细，所以在这里就不在赘述了。我们今天就主要来聊聊另一款数据库 <code>PostgreSQL</code>，揭开他的神秘面纱，一探究竟。</p><h2 id="postgresql-的安装" tabindex="-1"><a class="header-anchor" href="#postgresql-的安装" aria-hidden="true">#</a> PostgreSQL 的安装</h2><h3 id="什么是-postgresql" tabindex="-1"><a class="header-anchor" href="#什么是-postgresql" aria-hidden="true">#</a> 什么是 PostgreSQL</h3><p>它是一个免费的对象-关系数据库服务器(ORDBMS)，它自称是 &quot;世界上最先进的开源关系型数据库&quot;，那么它是否有它所自称的那么强大呢，下面我们就先来看看如何安装它。</p><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><p>经过上面的介绍之后，现在我们就来看看如何安装 PostgreSQL。</p><p>在正式安装过程之前，我们先需要准备好安装包，这里我主要是以 Windows 平台为例，理论上来讲普遍适用于全系 Windows 系统。</p><p>那么我们首先要做的就是去 PostgreSQL 官网：https://www.postgresql.org/ 去下载最新版本 PostgreSQL 安装包。</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后选择对应平台进入下载安装包，这里提供 <code>.exe</code> 的安装包，也支持下载 <code>.zip</code> 的压缩包形式解压缩安装，这里根据自己的喜好进行下载即可，下边我主要以 <code>.exe</code> 形式的安装包安装为例。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="安装过程" tabindex="-1"><a class="header-anchor" href="#安装过程" aria-hidden="true">#</a> 安装过程</h3><p>准备工作好了之后，接下来就是正式安装过程了。</p><ol><li>双击我们下载好的安装包之后，进入安装界面，首先是一个欢迎界面，直接 <code>Next</code> 下一步即可；</li></ol><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>然后是选择安装路径，这里默认是在 <code>C:\\Program Files\\PostgreSQL\\13</code> 下，不过我们一般推荐安装到自己平常安装软件的地方，不要直接安装在 C 盘；</li></ol><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>选择所要安装的组件，这里默认是全部安装，如果你们有特殊的要求，那就默认直接点击 <code>Next</code> 下一步即可；</li></ol><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>选择数据数据存放的地方，这里默认实在安装路径下的 <code>data</code> 子目录下，如果你之前在第 2 步中自定义了安装路径，那么这里直接选择 <code>Next</code> 下一步即可；</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>设置密码，也就是待会儿我们安装结束后登陆时所需的密码，这里自己设置即可（<strong>一定要记住！</strong>）；</li></ol><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>端口设置，PostgreSQL 默认端口是 5432，如果你不想使用默认端口，可以自定义想要使用的端口，这里如果改动了也要记住，确保不要和其他服务冲突；</li></ol><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>其实就是时区选择，这里直接默认点击 <code>Next</code> 下一步即可；</li></ol><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="8"><li>然后是确认信息，确保我们已经准备好了要开始 PostgreSQL 的安装，直接点击 <code>Next</code> 下一步即可；</li></ol><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="9"><li>接下来就是相对漫长的安装过程了，这里等待即可；</li></ol><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>好了，显示此界面就说明我们的安装过程结束了，点击 <code>Finish</code> 完成安装即可。</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><p>既然我们的 PostgreSQL 安装好了，那么接下来就是看看如何使用它了。</p><p>去我们的程序列表中找到 <code>SQL Shell(psql)</code>，也就是下图中的程序打开（这里我因为安装了快捷搜索软件，所以你查找的界面会和我不一样，但是软件是一个）。</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后就是登陆过程了，首先是 <code>Server</code>，也就是说数据库 url，默认是在本地（所以是 <code>localhost</code>），没有该动的就直接回车下一步好了。</p><p>接着是 <code>Database</code>，也即我们数据库，这里默认是使用 <code>postgres</code>，因为我们是第一次登陆，所以这里也就直接回车下一步就好了。</p><p>再接着是 <code>Port</code>，也就是端口号，默认是 5432，如果你安装的时候改动了，那么此时你最好也改成你当时改的端口，否则可能导致连接失败。</p><p>然后是 <code>Username</code>，也就是 PostgreSQL 的用户，这里一般默认是超级用户（<code>postgres</code>，这里不同于 MySQL 的 <code>root</code>，要注意），而我们也是第一次登陆，没有建立新账户，直接默认回车下一步即可。</p><p>最后要输入的则是口令，也就是登陆数据库的密码，这里我们已经在上边设置过了，直接输入后回车即可。</p><p>如果我们登陆成功，那么就会出现下面图中的提示了。</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>OK，今天的文章到此就结束了，主要介绍了如何在 Windows 中安装 PostgreSQL，以及 PostgreSQL 的一些简介和如何验证安装是否成功。</p><p>原创不易，如果你觉得本文对你有所帮助，那就来个点赞关注吧。</p>',50),Q=[S];function L(y,P){return a(),i("div",null,Q)}const w=e(x,[["render",L],["__file","20210807-windows-install-pgsql.html.vue"]]);export{w as default};
