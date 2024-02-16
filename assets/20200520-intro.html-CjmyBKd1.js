import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as p,b as d,a as o,d as i,e as c}from"./app-CPMzY54I.js";const l="/assets/e004e85b17f27105407b1916186d9943-DfJqCunB.png",s="/assets/d497cf5ecdfa0901da96910ed026d52d-5OGyKIEM.png",g={},h=c('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p><code>Spring</code> 是重量级企业开发框架 <code>EJB（Enterprise JavaBean）</code> 的替代品，是为了解决企业级应用开发的复杂性而创建的，简化开发。通过 <strong>依赖注入（DI）</strong> 和 <strong>面向切面编程</strong>，用简单的 <strong><code>Java</code> 对象（<code>POJO</code>，<code>Plain Old Java Object</code>）</strong> 实现 <code>EJB</code> 的功能，<strong>其组件代码轻量，但是配置很繁琐（需要大量 <code>XML</code> 配置）</strong>。<code>Spring 2.5</code> 引入基于注解的组件扫描，<code>Spring 3.0</code> 引入基于 <code>Java</code> 的配置，可以代替 <code>XML</code>，虽然引入的特性大大提高了配置的效率，但是也无法避免，针对这一问题，<code>Spring Boot</code> 应运而生。</p><p>Spring Boot 是为简化 Spring 应用初始搭建和开发过程，我们只要基于特定方式来进行配置即可。</p><p>今天我们就来看看，关于 Spring Boot 的相关介绍吧！</p><h2 id="spring-boot" tabindex="-1"><a class="header-anchor" href="#spring-boot" aria-hidden="true">#</a> Spring Boot</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><blockquote><p>Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can “just run”...Most Spring Boot applications need very little Spring configuration.</p></blockquote><p>上面的一段话来自 <code>Spring</code> 官方，即“<code>Spring Boot</code> 能够轻松创建基于 <code>Spring</code> 的独立的生产级别的应用程序，而只需要通过 “<code>just run</code> （可能是 <code>java -jar、tomcat、maven、shell、&#39;Application&#39;</code> 等）”就可以让项目跑起来，大多 <code>Spring Boot</code> 项目仅需少量配置即可运行”。</p><p>Spring Boot 基于 Spring 开发，Spirng Boot 本身并不提供 Spring 框架的核心特性以及扩展功能，只是用于快速、敏捷地开发新一代基于 Spring 框架的应用程序。也就是说，它并不是用来替代 Spring 的解决方案，而是和 Spring 框架紧密结合用于提升 Spring 开发者体验的工具。Spring Boot 以<strong>约定大于配置的核心思想</strong>，默认帮我们进行了很多设置，多数 Spring Boot 应用只需要很少的 Spring 配置。同时它集成了大量常用的第三方库配置（例如 Redis、MongoDB、Jpa、RabbitMQ、Quartz 等等）。</p><h3 id="为什么需要-spring-boot" tabindex="-1"><a class="header-anchor" href="#为什么需要-spring-boot" aria-hidden="true">#</a> 为什么需要 Spring Boot</h3><p><code>Spring</code> 框架能够让 <code>J2EE</code>企业应用程序开发更加简化，但是还是需要配置大量文件，针对这一问题，<code>Spring Boot</code> 能够进一步简化 <code>Spring</code> 框架，使得开发更为高效；</p>',12),S=c('<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ul><li>可以创建独立 <code>Spring</code> 应用程序，并且基于 <code>Maven</code> 或 <code>Gradle</code> 插件，可以创建可执行的 <code>JARs</code> 和 <code>WARs</code>；</li><li>内嵌 <code>Tomcat</code> 或 <code>Jetty</code> 等 <code>Servlet</code> 容器；</li><li>提供自动配置的 <code>started</code> 项目对象模型（<code>POMS</code>）以简化 <code>Maven</code> 配置；</li><li>尽可能自动配置 <code>Spring</code> 容器；</li><li>提供准备好的特性，如指标、健康检查和外部化配置；</li><li>没有冗余代码生成，不需要 <code>XML</code> 配置；</li></ul><h3 id="重要策略" tabindex="-1"><a class="header-anchor" href="#重要策略" aria-hidden="true">#</a> 重要策略</h3><ul><li><strong>开箱即用</strong>：<code>Outofbox</code>，指在开发过程中，通过在 <code>Maven</code> 项目的 <code>pom</code> 文件中添加相关依赖包，然后使用对应注解来代替繁琐的 <code>XML</code> 配置文件以管理对象的生命周期。这一特点使得开发人员摆脱了复杂的配置工作以及相关依赖的管理工作，更加专注于业务逻辑；</li><li><strong>约定优于配置</strong>：<code>Convention over configuration</code>，一种由 <code>SpringBoot</code> 本身来配置目标结构，由开发者在结构中添加信息的软件设计范式。这一特点虽然降低了部分灵活性，增加了 <code>BUG</code> 定位的复杂性，但减少了开发人员需要做出决定的数量，同时减少了大量 <code>XML</code> 配置，而且可以将代码编译、测试和打包等工作自动化；</li></ul><h3 id="spring-boot-项目约定" tabindex="-1"><a class="header-anchor" href="#spring-boot-项目约定" aria-hidden="true">#</a> Spring Boot 项目约定</h3><ul><li>约定项目中有且只有一个入口类，其类名推荐使用：<code>xxxApplication.java</code>。而且该入口类必须位于所有的子包之外，其中必须存在一个用于启动项目的 <code>main</code> 函数。</li></ul><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>此外， Spring Boot 项目约定必须在项目根目录中存在一个名为 <code>application.yml</code> 或者 <code>yml.prpperties</code> 的配置文件，一般是位于 <code>resources</code> 目录下。</li></ul><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="spring-boot-的优缺点" tabindex="-1"><a class="header-anchor" href="#spring-boot-的优缺点" aria-hidden="true">#</a> Spring Boot 的优缺点</h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ol><li>使得开发基于 <code>Spring</code> 的应用程序变得简单；</li><li><code>Spring Boot</code> 项目开发所需时间明显减少，提高整体生产力；</li><li>无需编写大量样板代码、<code>XML</code> 配置和注释；</li><li>与 <code>Spring</code> 生态系统更加容易集成，如 <code>Spring JDBC、Spring ORM、Spring Data、Spring Security</code>；</li><li>遵循默认配置，我们通过修改默认配置能够减少开发工作；</li><li>提供嵌入式 <code>http</code> 服务器，方便开发测试 <code>web</code> 应用程序；</li><li>提供命令行接口（<code>CLI</code>）工具，用于开发测试 <code>Spring Boot</code> 应用程序；</li><li>提供多种插件，能使用内置工具（<code>Maven &amp; Gradle</code>）开发测试 <code>Spring Boot</code> 应用程序；</li></ol><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ol><li>相关文档资料较少；</li><li>版本迭代快，导致各版本间的模块改动可能很大；</li></ol><p>总体来讲，采用 Spring Boot 的优点是绝对的，而且其缺点看似是缺点，但如果保持学习，还是很容易就能掌握的。而之所以迭代，不就是为了像 SSM -&gt; Spring Boot 这样简化我们的开发，提高开发效率么？有了更高的效率，那是不是就意味着我们能有更多的时间摸鱼或者早点下班跑路？🤪</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>以上就是今天的所有内容了，主要讲了 Spring Boot 的定义、特点、项目约定以及其优缺点。而关于 Spring Boot 项目的具体事例的搭建，我们就下期文章再见吧！</p>',17),u={href:"https://blog.csdn.net/github_39655029/article/details/119618308",target:"_blank",rel:"noopener noreferrer"},f=o("p",null,"最后，如果本文对你有所帮助，那就点个赞再走鸭 ~",-1);function b(B,_){const r=e("Mermaid"),a=e("ExternalLinkIcon");return t(),p("div",null,[h,d(r,{id:"mermaid-38",code:"eJxLL0osyFDwCeJyjPZKLEtUCE5VUFNwdY1V0NW1U3CKDi4oysxLj+WCs8DizlCeglN+fkksFwDDdRTe"}),S,o("blockquote",null,[o("p",null,[i("传送门："),o("a",u,[i("创建 SpringBoot 项目的 3 种方式"),d(a)])])]),f])}const M=n(g,[["render",b],["__file","20200520-intro.html.vue"]]);export{M as default};
