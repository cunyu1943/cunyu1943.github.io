import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as p}from"./app-D9rloBXv.js";const e="/assets/cac197c9b025943ec3248c259fe5fcfd-BRkny3hG.png",t="/assets/e4b67a02887add618a56cb99721b7753-CwYcZs0a.png",c={},o=p('<h1 id="链表解惑" tabindex="-1"><a class="header-anchor" href="#链表解惑" aria-hidden="true">#</a> 链表解惑</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>链表是一种 <strong>递归</strong> 的数据结构，或者为空 <code>null</code>，或者指向一个结点（<code>node</code>）的引用，一个结点含有 <strong>一个泛型元素和一个指向另一条链表的引用</strong>。</p><p>通常分为如下三种类型：</p><ul><li><strong>单向链表</strong>：结点被分成两个部分。第一个部分保存或者显示关于结点的信息，第二个部分存储下一个结点的地址，只能向一个方向遍历。</li><li><strong>双向链表</strong>：每个数据结点中都有两个指针，分别指向直接后继和直接前驱。</li><li><strong>循环链表</strong>：一种 <strong>链式存储结构</strong>，它的最后一个结点指向头结点，形成一个环。</li></ul><h3 id="单向链表" tabindex="-1"><a class="header-anchor" href="#单向链表" aria-hidden="true">#</a> 单向链表</h3><p>单向链表包括一个值和一个指向下一结点的指针，其典型结构定义如下：</p><figure><img src="'+e+`" alt="单链表" tabindex="0" loading="lazy"><figcaption>单链表</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token punctuation">{</span>
    <span class="token comment">// 数据对象</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> val<span class="token punctuation">;</span>
    <span class="token comment">// 指向后继结点</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span> next<span class="token punctuation">;</span>
    
    <span class="token comment">// 无参构造函数</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 指向数据对象和后继结点的引用都置空</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 有参构造函数</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">Object</span> val<span class="token punctuation">,</span> <span class="token class-name">Node</span> node<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 获取当前存放位置的数据对象</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 将给定元素存放至当前位置，同时返回此前存放的数据对象</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">setVal</span><span class="token punctuation">(</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Object</span> oldVal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">return</span> oldVal<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 取当前结点后继结点</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 修改当前结点后继结点</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNext</span><span class="token punctuation">(</span><span class="token class-name">Node</span> newNext<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> newNext<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双向链表" tabindex="-1"><a class="header-anchor" href="#双向链表" aria-hidden="true">#</a> 双向链表</h3><p>每个数据结点中都有两个指针，分别指向直接后继和直接前驱，其典型结构定义如下：</p><figure><img src="`+t+`" alt="双向链表" tabindex="0" loading="lazy"><figcaption>双向链表</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DoubleNode</span><span class="token punctuation">{</span>
	<span class="token comment">// 数据对象</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> val<span class="token punctuation">;</span> 
    <span class="token comment">// 指向前驱结点</span>
    <span class="token keyword">private</span> <span class="token class-name">DoubleNode</span> prev<span class="token punctuation">;</span>
    <span class="token comment">// 指向后继结点</span>
    <span class="token keyword">private</span> <span class="token class-name">DoubleNode</span> next<span class="token punctuation">;</span>
    
    <span class="token comment">// 无参构造函数</span>
    <span class="token keyword">public</span> <span class="token class-name">DoubleNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 有参构造函数</span>
    <span class="token keyword">public</span> <span class="token class-name">DoubleNode</span><span class="token punctuation">(</span><span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token class-name">DoubleNode</span> previous<span class="token punctuation">,</span> <span class="token class-name">DoubleNode</span> next<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> previous<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 获取当前位置数据对象</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 将给定元素放在当前位置，返回此前存放的元素</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">setVal</span><span class="token punctuation">(</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Object</span> oldVal <span class="token operator">=</span> val<span class="token punctuation">;</span>
        val <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">return</span> oldVal<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 获取当前结点后继结点</span>
    <span class="token keyword">public</span> <span class="token class-name">DoubleNode</span> <span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 修改后继结点</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNext</span><span class="token punctuation">(</span><span class="token class-name">DoubleNode</span> newNext<span class="token punctuation">)</span><span class="token punctuation">{</span>
        next <span class="token operator">=</span> newNext<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 获取当前位置前驱结点</span>
    <span class="token keyword">public</span> <span class="token class-name">DoubleNode</span> <span class="token function">getPrev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 修改前驱结点</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPrev</span><span class="token punctuation">(</span><span class="token class-name">DoubleNode</span> newPrev<span class="token punctuation">)</span><span class="token punctuation">{</span>
        prev <span class="token operator">=</span> newPrev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单向链表的增删改查" tabindex="-1"><a class="header-anchor" href="#单向链表的增删改查" aria-hidden="true">#</a> 单向链表的增删改查</h2><h3 id="基于链表实现栈" tabindex="-1"><a class="header-anchor" href="#基于链表实现栈" aria-hidden="true">#</a> 基于链表实现栈</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyStack</span><span class="token punctuation">{</span>
    <span class="token comment">// 指向栈顶元素（头结点）</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 栈中元素数目</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    
    <span class="token comment">// 构造方法（构造一个空栈）</span>
    <span class="token keyword">public</span> <span class="token class-name">MyStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 查询栈中元素个数</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 判断栈是否为空</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// 或者 size == 0;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 读取栈顶（首结点信息）</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;栈空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>     
        <span class="token keyword">return</span> head<span class="token punctuation">.</span><span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 压栈（即插入首结点）</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertAtHead</span><span class="token punctuation">(</span><span class="token class-name">Object</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建一个新结点，将其作为首结点插入</span>
        <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 更新首结点引用</span>
        head <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token comment">// 栈中元素数目增加</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
   <span class="token comment">// 出栈（删除首结点）</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">removeAtHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>isEmpty<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;栈空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 当前结点数据对象</span>
        <span class="token class-name">Object</span> tmp <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 更新首结点引用</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> tmp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基于链表实现队列" tabindex="-1"><a class="header-anchor" href="#基于链表实现队列" aria-hidden="true">#</a> 基于链表实现队列</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyQueue</span><span class="token punctuation">{</span>
    <span class="token comment">// 队列首元素（首结点）</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 队列尾元素（尾结点）</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span> tail<span class="token punctuation">;</span>
    <span class="token comment">// 队列规模</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>

    <span class="token comment">// 构造空队列</span>
    <span class="token keyword">public</span> <span class="token class-name">MyQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>

    <span class="token comment">// 队列规模</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 判断当前队列是否为空</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 查看队首元素</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getFront</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> head<span class="token punctuation">.</span><span class="token function">getElem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 入队</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token class-name">Object</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 新结点作为末结点插入</span>
        node<span class="token punctuation">.</span><span class="token function">setVal</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 若当前队列为空，则直接插入</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            head <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 否则将新结点接至队列末端</span>
            tail<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 更新指向末结点的引用</span>
        tail <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token comment">// 更新队列规模</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 出队</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Object</span> tmp <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 更新队列规模</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token comment">// 队列为空时，将末结点引用置空</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> tmp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 遍历队列</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">traversal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Node</span> node <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双向链表的增删改查" tabindex="-1"><a class="header-anchor" href="#双向链表的增删改查" aria-hidden="true">#</a> 双向链表的增删改查</h2><p>实现双向链表时，通常在最前端和最后端各设置一个 <strong>哑元结点</strong>，分别称为 <strong>头结点</strong> 和 <strong>尾结点</strong>，起着 <strong>哨兵</strong> 的作用。但实际上两者并不存储任何实质的数据对象，头（尾）结点的 <code>next</code>（<code>prev</code>）引用指向首（末）结点，而 <code>prev</code>（<code>next</code>）引用为空。</p><h3 id="首尾结点的插入" tabindex="-1"><a class="header-anchor" href="#首尾结点的插入" aria-hidden="true">#</a> 首尾结点的插入</h3><p>假设要进行首结点的插入，则通常需要如下步骤，而末结点的插入则是和首结点的插入过程对称。</p><ol><li>首先生成一个新结点；</li><li>然后将其接入队列的前端；</li><li>接着将头结点的 <code>next</code> 的引用指向新插入的结点，同时将首结点的 <code>prev</code> 的引用指向新插入的结点。</li></ol><h3 id="首尾结点的删除" tabindex="-1"><a class="header-anchor" href="#首尾结点的删除" aria-hidden="true">#</a> 首尾结点的删除</h3><p>假设要进行末结点的删除，通常需要如下步骤，而首结点的删除过程适合尾结点的删除过程对称。</p><ol><li>将新的末结点的 <code>next</code> 引用指向尾结点；</li><li>同时将尾结点的 <code>prev</code> 引用指向新的末结点；</li><li>最后原先的末结点将会被系统回收。</li></ol><h3 id="一般结点的插入与删除" tabindex="-1"><a class="header-anchor" href="#一般结点的插入与删除" aria-hidden="true">#</a> 一般结点的插入与删除</h3><p>要实现在一般结点之间插入新结点，通常需要进行如下步骤：</p><ol><li>创建一个新的结点，然后将其 <code>prev</code> 引用指向前一个结点，同时将其 <code>next</code> 引用指向后一个结点；</li><li>然后将前一个结点的 <code>next</code> 引用指向新结点，同时将后一个结点的 <code>prev</code> 引用指向新结点。</li></ol><p>而要实现在一般结点之间删除结点，通常需要进行如下步骤：</p><ol><li>首先找到要删除的结点的前驱和后继结点；</li><li>然后将其前驱结点的 <code>next</code> 引用指向后驱结点，同时将后驱结点的 <code>prev</code> 引用指向前驱结点。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyDoubleQueue</span><span class="token punctuation">{</span>
    <span class="token comment">// 指向头结点（哨兵）</span>
    <span class="token keyword">private</span> <span class="token class-name">DoubleNode</span> header<span class="token punctuation">;</span>
    <span class="token comment">// 指向尾结点（哨兵）</span>
    <span class="token keyword">private</span> <span class="token class-name">DoubleNode</span> trailer<span class="token punctuation">;</span>
    <span class="token comment">// 队列规模</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>

    <span class="token comment">// 无参构造函数</span>
    <span class="token keyword">public</span> <span class="token class-name">MyDoubleQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        header <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trailer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoubleNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        header<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>trailer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        trailer<span class="token punctuation">.</span><span class="token function">setPrev</span><span class="token punctuation">(</span>trailer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取当前队列规模</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 判断队列是否为空</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 取首元素</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> header<span class="token punctuation">.</span><span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 取末元素</span>
    <span class="token keyword">public</span> <span class="token class-name">Objecct</span> <span class="token function">getTrail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> trailer<span class="token punctuation">.</span><span class="token function">getPrev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 遍历</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">traversal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">DoubleNode</span> node <span class="token operator">=</span> header<span class="token punctuation">.</span><span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>node <span class="token operator">!=</span> trailer<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 前端插入新结点</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertFirst</span><span class="token punctuation">(</span><span class="token class-name">Object</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">DoubleNode</span> second <span class="token operator">=</span> header<span class="token punctuation">.</span><span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DoubleNode</span> first <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoubleNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> header<span class="token punctuation">,</span> second<span class="token punctuation">)</span><span class="token punctuation">;</span>
        second<span class="token punctuation">.</span><span class="token function">setPrev</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span>
        header<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>
            size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 前端删除结点</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
        <span class="token punctuation">}</span>

        <span class="token comment">// first 是要删除的结点，找到要删除结点的后继结点 second</span>
        <span class="token class-name">DoubleNode</span> first <span class="token operator">=</span> header<span class="token punctuation">.</span><span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DoubleNode</span> second <span class="token operator">=</span> first<span class="token punctuation">.</span><span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 要删除结点的值</span>
        <span class="token class-name">Object</span> value <span class="token operator">=</span> first<span class="token punctuation">.</span><span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 将头结点的 next 指向要删除的后继结点 second，同时将 second 的前驱结点指向头结点</span>
        header<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>second<span class="token punctuation">)</span><span class="token punctuation">;</span>
        second<span class="token punctuation">.</span><span class="token function">setPrev</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 更新规模</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 后端插入新结点</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertLast</span><span class="token punctuation">(</span><span class="token class-name">Object</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">DoubleNode</span> second <span class="token operator">=</span> trailer<span class="token punctuation">.</span><span class="token function">getPrev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DoubleNode</span> first <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoubleNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> second<span class="token punctuation">,</span> trailer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        second<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span>
        trailer<span class="token punctuation">.</span><span class="token function">setPrev</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 后端删除结点</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">DoubleNode</span> first <span class="token operator">=</span> trailer<span class="token punctuation">.</span><span class="token function">getPrev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DoubleNode</span> second <span class="token operator">=</span> first<span class="token punctuation">.</span><span class="token function">getPrev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 要删除结点的值</span>
        <span class="token class-name">Object</span> value <span class="token operator">=</span> first<span class="token punctuation">.</span><span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 将尾结点的 prev 指向要删除的前驱结点 second，同时将 second 的后继结点指向尾结点</span>
        trailer<span class="token punctuation">.</span><span class="token function">setPrev</span><span class="token punctuation">(</span>second<span class="token punctuation">)</span><span class="token punctuation">;</span>
        second<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>trailer<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 更新规模</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本文从单向链表和双向链表的结构定义出发，然后又分别介绍了如何基于单向链表实现堆和栈，最后则是对双向链表的增删改查进行了总结。对于文中有疏漏的地方，欢迎评论留言。如果你觉得文章对你有所帮助，那就点个赞再走吧！</p>`,34),l=[o];function i(u,k){return s(),a("div",null,l)}const v=n(c,[["render",i],["__file","20220515-linkedlist.html.vue"]]);export{v as default};
