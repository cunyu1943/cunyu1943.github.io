import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as i,a as s,d as n,b as e,e as p}from"./app-BwFInxZ8.js";const l="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ___size_16_color_FFFFFF_t_70-20240216142826169-CY-HCxGv.png",u="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ___size_16_color_FFFFFF_t_70-20240216142826327-BIsjxEIF.png",r="/assets/format_png-Dr4nuLd_.png",d={},k=p('<h1 id="注解方式整合-mybatis-实例" tabindex="-1"><a class="header-anchor" href="#注解方式整合-mybatis-实例" aria-hidden="true">#</a> 注解方式整合 MyBatis 实例</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>目前而言，国内大家使用最多的持久层框架可能还是 MyBatis 吧，那既然如此，更强大的 Spring Boot 遇上炽手可热的 MyBatis，又会擦出什么样的火花呢？</p><p>那本文就来看看，如何利用 SpringBoot 来整合 Mybatis。</p><p>如下图是总结的整合过程的大概流程，那接下来我们就来开始具体的整合操作！</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="整合过程" tabindex="-1"><a class="header-anchor" href="#整合过程" aria-hidden="true">#</a> 整合过程</h2><p>最终项目结构如下图所示：</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="新建-spring-boot-项目" tabindex="-1"><a class="header-anchor" href="#新建-spring-boot-项目" aria-hidden="true">#</a> 新建 Spring Boot 项目</h3>',10),m={href:"https://blog.csdn.net/github_39655029/article/details/119618308",target:"_blank",rel:"noopener noreferrer"},v=p(`<h3 id="添加-pom-依赖" tabindex="-1"><a class="header-anchor" href="#添加-pom-依赖" aria-hidden="true">#</a> 添加 pom 依赖</h3><p>由于要整合 MyBatis，所以我们需要在项目的配置文件 <code>pom.xml</code> 中添加 mysql 驱动和 SpringBoot MyBatis 整合包；</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--     springboot mybatis 整合包   --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.1.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--    mysql 驱动    --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准备数据库" tabindex="-1"><a class="header-anchor" href="#准备数据库" aria-hidden="true">#</a> 准备数据库</h3><ol><li>数据库创建及输入插入</li></ol><p>准备一张 <code>user</code> 表，有 <code>id</code>、<code>name</code>、<code>age</code> 三个属性，其中 <code>id</code> 为主键且自增，然后插入三条数据；</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>user<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;主键&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;姓名&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>age<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;年龄&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span>  <span class="token keyword">user</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;村雨遥&quot;</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span>  <span class="token keyword">user</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span>  <span class="token keyword">user</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>数据源配置</li></ol><p>在项目配置文件 <code>application.properties</code> 中配置数据源；</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 数据库配置</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">0908</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/springboot?useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=UTC</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pojo-层" tabindex="-1"><a class="header-anchor" href="#pojo-层" aria-hidden="true">#</a> pojo 层</h3><p>根据数据库创建实体类，为了精简代码，后面过程中都或多或少用了 Lombok 插件，所以需要事先在 <code>pom.xml</code> 引入；</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : User
 * <span class="token keyword">@date</span> : 2020/7/26 20:44
 * <span class="token keyword">@description</span> : User 实体类
 */</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dao-层" tabindex="-1"><a class="header-anchor" href="#dao-层" aria-hidden="true">#</a> dao 层</h3><p>实体类创建完成后，编写实体类对应接口；</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Select</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @InterfaceName : UserDao
 * @Author : cunyu
 * @Date : 2020/7/26 20:47
 * @Version : 1.0
 * @Description : User 类对应接口
 **/</span>

<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">id</span> 用户 id
     * <span class="token keyword">@return</span> 对应 id 的用户
     * <span class="token keyword">@description</span> 根据用户 id 查询用户
     * <span class="token keyword">@date</span> 2020/7/26 20:48
     * <span class="token keyword">@author</span> cunyu1943
     * <span class="token keyword">@version</span> 1.0
     */</span>
    
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT id,name,age FROM user where id = #{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service-层" tabindex="-1"><a class="header-anchor" href="#service-层" aria-hidden="true">#</a> service 层</h3><ol><li>service 接口</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : UserService
 * <span class="token keyword">@date</span> : 2020/7/26 20:57
 * <span class="token keyword">@description</span> : User service 接口
 */</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">id</span> 用户 iD
     * <span class="token keyword">@return</span> 对应 id 的用户
     * <span class="token keyword">@description</span> 根据 id 查找用户
     * <span class="token keyword">@date</span> 2020/7/26 20:58
     * <span class="token keyword">@author</span> cunyu1943
     * <span class="token keyword">@version</span> 1.0
     */</span>
    <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>service 接口实现类</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">UserDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : UserServiceImpl
 * <span class="token keyword">@date</span> : 2020/7/26 20:59
 * <span class="token keyword">@description</span> : service 接口实现类
 */</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserDao</span> userDao<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userDao<span class="token punctuation">.</span><span class="token function">getUserById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="controller-层" tabindex="-1"><a class="header-anchor" href="#controller-层" aria-hidden="true">#</a> controller 层</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : UserController
 * <span class="token keyword">@date</span> : 2020/7/26 21:01
 * <span class="token keyword">@description</span> : User controller
 */</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 自动注入
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="入口程序配置" tabindex="-1"><a class="header-anchor" href="#入口程序配置" aria-hidden="true">#</a> 入口程序配置</h3><p>在入口程序中配置 mapper 自动扫描；</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">MapperScan</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">&quot;com.cunyu.dao&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisXmlApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MybatisXmlApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网页测试" tabindex="-1"><a class="header-anchor" href="#网页测试" aria-hidden="true">#</a> 网页测试</h3><p>完成上述所有步骤之后，在浏览器中访问 <code>http://localhost:8080/user</code>，就可以在网页中显示对应 <code>id</code> 的 <code>User</code> 对象的所有信息；</p><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>',31),b={href:"https://blog.csdn.net/github_39655029/article/details/107602406",target:"_blank",rel:"noopener noreferrer"};function g(y,w){const a=o("ExternalLinkIcon");return c(),i("div",null,[k,s("p",null,[n("新建一个 Spring Boot 项目，添加 Web 组件，具体过程可以参照我的另一篇博客 "),s("a",m,[n("创建 Spring Boot 项目的方式"),e(a)]),n("。")]),v,s("p",null,[n("以上就是 Spring Boot 整合 MyBatis 的具体过程了，不过你可能也发现了，我们在 DAO 层未使用任何 XML 文件，取而代之的是各种不同的注解。那我们下一篇文章就来看看，"),s("a",b,[n("Spring Boot 如何通过 XML 的方式来整合 MyBatis"),e(a)]),n("！")])])}const _=t(d,[["render",g],["__file","20200727-annotation-mybatis.html.vue"]]);export{_ as default};
