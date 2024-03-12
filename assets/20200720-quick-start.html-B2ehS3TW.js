import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as l,a as n,d as s,b as t,e}from"./app-Bybaa24v.js";const i="/assets/aacb76f5ffabbbc9ede23f683256be41-nYTxIiAT.webp",u="/assets/ba28cca59f160f88a2c5c0535fceeb2e-CYe_aZXj.webp",d="/assets/644f607ea9707de6d25f9dfafb4cfb96-D5efdsJ-.webp",k="/assets/2b5ad394c94ba5803bc2e894744d8ba7-BlSkYLbF.webp",r="/assets/571f9bfe5b4baaab08ca1586f0e5ff6a-B7FWDxl7.webp",m="/assets/087f7db9a7249e900dde8c00df58dd8e-C4SjHiIE.webp",v={},b=e(`<h1 id="入门实例" tabindex="-1"><a class="header-anchor" href="#入门实例" aria-hidden="true">#</a> 入门实例</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>上一篇文章中我们讲了什么是持久化以及 Mybatis 的相关简介，今天就来看看如何创建一个 Mybatis 入门实例以及如何利用 Mybatis 进行 CRUD。</p><h2 id="数据库准备" tabindex="-1"><a class="header-anchor" href="#数据库准备" aria-hidden="true">#</a> 数据库准备</h2><ol><li>首先，我们来创建一个数据库，用于后序步骤的使用；</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> test<span class="token punctuation">;</span>
<span class="token keyword">USE</span> test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>接着创建一个表，用于存放数据；</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>
	id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    password <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>向数据库中插入数据</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> password<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;村雨遥&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1234567&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12345678&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建-maven-工程" tabindex="-1"><a class="header-anchor" href="#创建-maven-工程" aria-hidden="true">#</a> 创建 Maven 工程</h2>`,11),g={href:"http://cunyu1943.github.io/posts/8ced8971/",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"pom.xml",-1),q={href:"https://cunyu1943.github.io/posts/f7032e71",target:"_blank",rel:"noopener noreferrer"},h=e(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.0.25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.18.22<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><ol><li>编写 MyBatis 核心配置文件，在 <code>main/resources</code> 文件下新建 <code>mybatis-config.xml</code> ，配置数据库。这里主要是配置连接的数据库，数据库连接用户名以及密码。</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Config 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--  配置连接数据库的环境  --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>development<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>development<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>JDBC<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POOLED<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>driver<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.mysql.cj.jdbc.Driver<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span>
                          <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jdbc:mysql://localhost:3306/learndb?characterEncoding=utf8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cunyu1943<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--  引入映射文件  --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mappers/UserMapper.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>编写 MyBatis 工具类；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>util</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Resources</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSession</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSessionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSessionFactoryBuilder</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * @Package : com.cunyu.util
 * @ClassName : MybatisUtil.java
 * @CreateTime : 2022/2/26 22:06
 * @Version : 1.0
 * @Author : 村雨
 * @Email : 747731461@qq.com
 * @公众号 : 村雨遥
 * @Website : https://cunyu1943.github.io
 * @Description : MyBatis 工具类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisUtil</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">SqlSessionFactory</span> sqlSessionFactory<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> resourceName <span class="token operator">=</span> <span class="token string">&quot;mybatis-config.xml&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span>resourceName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sqlSessionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * @Author 村雨遥
     * @Version 1.0
     * @Description
     * @Date 22:21 2022/2/26
     * <span class="token keyword">@param</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SqlSession</span> <span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>接下来创建实体类，用于映射数据库中的 <code>user</code> 表。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * @Author : 村雨遥
 * @Version : 1.0
 * @Package : com.cunyu.entity
 * @ClassName : User.java
 * @CreateTime : 2022/2/26 18:09
 * @Email : 747731461@qq.com
 * @公众号 : 村雨遥
 * @Website : https://cunyu1943.github.io
 * @Description :
 */</span>

<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插入操作-insert" tabindex="-1"><a class="header-anchor" href="#插入操作-insert" aria-hidden="true">#</a> 插入操作 <code>insert</code></h2><ol><li>首先在 <code>UserMapper</code> 接口中添加对应方法</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     * <span class="token keyword">@return</span>
     * @Author 村雨遥
     * @Version 1.0
     * @Description
     * @Date 21:50 2022/2/26
     */</span>
<span class="token keyword">int</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在映射文件 <code>UserMapper.xml</code> 中添加 <code>Insert</code> 语句；</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--绑定对应Dao/Mapper接口--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.mapper.UserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.entity.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        INSERT INTO user(id, name, password)
        VALUES (#{id}, #{name}, #{password})
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>测试方法中测试；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">UserMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">MybatisUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSession</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * @Package : com.cunyu.test
 * @ClassName : InsertTest.java
 * @CreateTime : 2022/2/26 22:03
 * @Version : 1.0
 * @Author : 村雨
 * @Email : 747731461@qq.com
 * @公众号 : 村雨遥
 * @Website : https://cunyu1943.github.io
 * @Description :
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InsertTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 获取 SqlSession 对象</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtil</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">UserMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;小雨&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6543210&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 提交事务到数据库</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;添加用户成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 关闭 SqlSession</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="插入成功" tabindex="0" loading="lazy"><figcaption>插入成功</figcaption></figure><h2 id="查询操作-select" tabindex="-1"><a class="header-anchor" href="#查询操作-select" aria-hidden="true">#</a> 查询操作 <code>select</code></h2><ol><li>在 <code>UserMapper</code> 中添加对应方法：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span>
     * <span class="token keyword">@return</span> 对应 id 的用户
     * @Author 村雨遥
     * @Version 1.0
     * @Description
     * @Date 22:42 2022/2/26
     */</span>
<span class="token class-name">User</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>接着在 <code>UserMapper.xml</code> 中添加 <code>Select</code> 语句。其中各属性含义如下：</li></ol><ul><li><strong>id</strong>：对应接口中的 <strong>方法名</strong>；</li><li><strong>resultType</strong>：SQL 语句执行的返回值；</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>query<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.entity.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    SELECT *
    FROM user
    WHERE id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在测试类中测试即可；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">UserMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">MybatisUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSession</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * @Package : com.cunyu.test
 * @ClassName : QueryTest.java
 * @CreateTime : 2022/2/26 22:39
 * @Version : 1.0
 * @Author : 村雨
 * @Email : 747731461@qq.com
 * @公众号 : 村雨遥
 * @Website : https://cunyu1943.github.io
 * @Description :
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QueryTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取 SqlSession 对象</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtil</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">UserMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">User</span> user <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;查询用户成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 关闭 SqlSession</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="查询成功" tabindex="0" loading="lazy"><figcaption>查询成功</figcaption></figure><h2 id="修改操作-update" tabindex="-1"><a class="header-anchor" href="#修改操作-update" aria-hidden="true">#</a> 修改操作 <code>update</code></h2><ol><li>在 <code>UserMapper</code> 添加对应接口；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> 
     * <span class="token keyword">@return</span>
     * @Author 村雨遥
     * @Version 1.0
     * @Description
     * @Date 22:52 2022/2/26
     */</span>
<span class="token keyword">int</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在 <code>UserMapper.xml</code> 中添加 <code>update</code> 语句；</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    UPDATE user
    SET name    =#{name},
    password=#{password}
    WHERE id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>测试类中测试；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">UserMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">MybatisUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSession</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * @Package : com.cunyu.test
 * @ClassName : UpdateTest.java
 * @CreateTime : 2022/2/26 22:45
 * @Version : 1.0
 * @Author : 村雨
 * @Email : 747731461@qq.com
 * @公众号 : 村雨遥
 * @Website : https://cunyu1943.github.io
 * @Description :
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UpdateTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取 SqlSession 对象</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtil</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;7891011&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;更新数据成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 关闭 SqlSession</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="删除操作-delete" tabindex="-1"><a class="header-anchor" href="#删除操作-delete" aria-hidden="true">#</a> 删除操作 <code>delete</code></h2><ol><li>在 <code>UserMapper</code> 中添加接口；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">id</span> 用户 id
     * <span class="token keyword">@return</span>
     * @Author 村雨遥
     * @Version 1.0
     * @Description
     * @Date 22:53 2022/2/26
     */</span>
<span class="token keyword">int</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 <code>UserMapper.xml</code> 中添加 <code>delete</code> 语句；</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>delete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    DELETE
    FROM user
    WHERE id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在测试类中测试；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">UserMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">MybatisUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSession</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * @Package : com.cunyu.test
 * @ClassName : DeleteTest.java
 * @CreateTime : 2022/2/26 22:55
 * @Version : 1.0
 * @Author : 村雨
 * @Email : 747731461@qq.com
 * @公众号 : 村雨遥
 * @Website : https://cunyu1943.github.io
 * @Description :
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeleteTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取 SqlSession 对象</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtil</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> i <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除数据成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 关闭 SqlSession</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2><p>以上就是我们今天的所有内容了，原创不易，如果你觉得我的文章对你有所帮助，那就帮忙点赞关注吧，我们就下篇文章再见吧 ~</p><p>而关于文章中的示例代码，我已经上传到了 Github，如果有需要的朋友，可以自取。</p><blockquote><p>传送门：https://github.com/cunyu1943/java-learning-demos</p></blockquote>',47);function w(f,S){const a=c("ExternalLinkIcon");return o(),l("div",null,[b,n("ol",null,[n("li",null,[s("对于如何创建 Maven 工程，可以参照我之前写的一篇文章："),n("a",g,[s("利用 IDEA 搭建一个 Maven 项目 "),t(a)])]),n("li",null,[s("接着在项目的 "),y,s(" 中添加 MyBatis、MySQL、Junit 以及 Lombok 的依赖，关于更多 Lombok 的使用，可以参考我的另一篇文章："),n("a",q,[s("Lombok 安装及使用指南"),t(a)])])]),h])}const E=p(v,[["render",w],["__file","20200720-quick-start.html.vue"]]);export{E as default};
