import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-CPMzY54I.js";const e="/assets/format_png-20240216182743467-C8AuOote.png",p="/assets/format_png-20240216182743462-Db00OjCB.png",o="/assets/format_png-20240216182743470-Dg74qZe9.png",c={},l=t(`<h1 id="注解开发" tabindex="-1"><a class="header-anchor" href="#注解开发" aria-hidden="true">#</a> 注解开发</h1><h2 id="_1-mybatis-注解" tabindex="-1"><a class="header-anchor" href="#_1-mybatis-注解" aria-hidden="true">#</a> 1. MyBatis 注解</h2><p>之前的实例中，利用 MyBatis 进行开发时，一旦添加新的方法，则每次都需要在 XML 配置文件中进行映射。而现在随着注解开发的大肆流行，MyBatis 3 也提供了基于注解的配置。但是通过注解的方式表达力和灵活性有限，必要时要是需要通过 <code>mapper</code> 配置文件来进行构建，常用的注解主要用如下几个：</p><table><thead><tr><th>注解</th><th>功能</th></tr></thead><tbody><tr><td><code>@Select()</code></td><td>查询</td></tr><tr><td><code>@Update()</code></td><td>更新</td></tr><tr><td><code>@Insert()</code></td><td>插入</td></tr><tr><td><code>@Delete()</code></td><td>删除</td></tr></tbody></table><h2 id="_2-基于注解开发" tabindex="-1"><a class="header-anchor" href="#_2-基于注解开发" aria-hidden="true">#</a> 2. 基于注解开发</h2><h3 id="_2-1-查询" tabindex="-1"><a class="header-anchor" href="#_2-1-查询" aria-hidden="true">#</a> 2.1 查询</h3><ol><li>接口中声明方法同时添加注解；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Select</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @InterfaceName : UserDao
 * @Author : cunyu
 * @Date : 2020/7/15 8:00
 * @Version : 1.0
 * @Description : UserDao 接口
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAllUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>然后在 MyBatis 的核心配置文件 <code>mybatis-config.xml</code> 中进行类注入，要注意 <code>resource</code> 属性和 <code>class</code> 属性的区别；</li></ol><ul><li><code>resource</code>：指定的是 <code>mapper.xml</code> 的路径；</li><li><code>class</code>：指定的是类的全限名；</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.dao.UserDao<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>不同于基于 XML 配置的方式，此时不需要再去配置 XML，直接进行测试即可；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>utils<span class="token punctuation">.</span></span><span class="token class-name">MybatisUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSession</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : UserDaoTest
 * <span class="token keyword">@date</span> : 2020/7/15 8:07
 * <span class="token keyword">@description</span> : 测试类
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDaoTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetAllUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtil</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">UserDao</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserDao</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> userList <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">getAllUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> userList
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-新增" tabindex="-1"><a class="header-anchor" href="#_2-2-新增" aria-hidden="true">#</a> 2.2 新增</h3><ol><li>接口中声明方法并注解；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Insert</span><span class="token punctuation">(</span><span class="token string">&quot;insert into user (id, name, password) values (#{id},#{name},#{password})&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">boolean</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 MyBatis 的核心配置中进行注入，由于已经在查询操作时注入过，所以不需要再次注入；</li><li>直接进行测试；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAddUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtil</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">UserDao</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserDao</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">addUser</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;小鬼&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;09080706&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;插入成功：&quot;</span> <span class="token operator">+</span> flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-3-更新" tabindex="-1"><a class="header-anchor" href="#_2-3-更新" aria-hidden="true">#</a> 2.3 更新</h3><ol><li>接口中声明方法并注解；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Update</span><span class="token punctuation">(</span><span class="token string">&quot;update user set password=#{password},name=#{name} where id=#{id}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">boolean</span> <span class="token function">updateUserById</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>测试</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtil</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">UserDao</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserDao</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">updateUserById</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;小猪&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;更新成功：&quot;</span> <span class="token operator">+</span> flag<span class="token punctuation">)</span><span class="token punctuation">;</span>

    sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-4-删除" tabindex="-1"><a class="header-anchor" href="#_2-4-删除" aria-hidden="true">#</a> 2.4 删除</h3><ol><li>接口中声明方法并注解；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Delete</span><span class="token punctuation">(</span><span class="token string">&quot;delete from user where id=#{id}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">boolean</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>测试</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDeleteUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SqlSession</span> sqlsession <span class="token operator">=</span> <span class="token class-name">MybatisUtil</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">UserDao</span> mapper <span class="token operator">=</span> sqlsession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserDao</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除成功：&quot;</span> <span class="token operator">+</span> flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    sqlsession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-注意事项" tabindex="-1"><a class="header-anchor" href="#_3-注意事项" aria-hidden="true">#</a> 3. 注意事项</h2><h3 id="_3-1-param" tabindex="-1"><a class="header-anchor" href="#_3-1-param" aria-hidden="true">#</a> 3.1 @Param</h3><p>在接口中添加方法时，可以利用 <code>@Param</code> 注解给方法的参数进行取名。</p><ul><li>当方法只接收一个参数时，可以不用该注解，如下两种方式等价：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Delete</span><span class="token punctuation">(</span><span class="token string">&quot;delete from user where id=#{id}&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">boolean</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Delete</span><span class="token punctuation">(</span><span class="token string">&quot;delete from user where id=#{id}&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">boolean</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当方法接收多个参数时，建议使用该注解；</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Delete</span><span class="token punctuation">(</span><span class="token string">&quot;delete from user where id=#{id},name=#{name}&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">boolean</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token keyword">int</span> id<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>若方法接收的参数是 <code>JavaBean</code> 时，不可以使用该注解；</li></ul><h3 id="_3-2-和-对比" tabindex="-1"><a class="header-anchor" href="#_3-2-和-对比" aria-hidden="true">#</a> 3.2 #{} 和 ${} 对比</h3><p>MyBatis 中可以将参数传到 XML 文件中，然后由 MyBatis 对 SQL 及其语法进行解析，支持 <code>${}</code> 和 <code>#{}</code> 两种方式，两者的区别如下：</p><ol><li><code>#{}</code> 传入的参数，MyBatis 默认会将其解析为 <strong>字符串</strong>，而 <code>${}</code> 传入的参数，MyBatis 不会对其做任何特殊处理。假如我们传入数据库表名 <code>test</code>：</li></ol><table><thead><tr><th>对比项目</th><th>传参语句</th><th>解析后的语句</th></tr></thead><tbody><tr><td><code>#{}</code></td><td><code>select * from #{table};</code></td><td><code>select * from &quot;test&quot;;</code></td></tr><tr><td><code>${}</code></td><td><code>select * from #{table};</code></td><td><code>select * from test;</code></td></tr></tbody></table><ol start="2"><li><code>#{}</code> 和 <code>${}</code> 在预编译处理时不一样，<code>#{}</code> 类似于 JDBC 中的 <code>PreparedStatement</code>，对于传入的参数，会在预处理阶段用 <code>?</code> 进行替代，然后在真正需要执行语句时才带入参数；而 <code>${}</code> 则会直接进行简单的替换；</li></ol><table><thead><tr><th>对比项目</th><th>传参语句</th><th>解析后的语句</th></tr></thead><tbody><tr><td><code>#{}</code></td><td><code>select * from user where id=#{id};</code></td><td><code>select * from user where id=?;</code></td></tr><tr><td><code>${}</code></td><td><code>select * from user where id=#{id};</code></td><td><code>select * from user where id=2;</code></td></tr></tbody></table><ol start="3"><li><code>#{}</code> 能够有效防止 SQL 注入，而 <code>${}</code> 则可能导致 SQL 注入；</li></ol>',47),i=[l];function u(d,r){return s(),a("div",null,i)}const v=n(c,[["render",u],["__file","20200721-annotation.html.vue"]]);export{v as default};
