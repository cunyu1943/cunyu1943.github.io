import{_ as s}from"./wechatpublic-6d7ffb69.js";import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as i,b as p,e as c}from"./app-c57f0ec1.js";const o="/assets/16-5d40576f.webp",l="/assets/17-4def8e87.webp",r="/assets/18-d700e333.webp",u="/assets/20190306220952858-30020fe7.webp",d="/assets/20190306221430823-69deafa2.webp",m={},k=c(`<h1 id="python3-编程实例-16-20" tabindex="-1"><a class="header-anchor" href="#python3-编程实例-16-20" aria-hidden="true">#</a> Python3 编程实例（16 - 20）</h1><div class="hint-container info"><p class="hint-container-title">共勉</p><p>不要哀求，学会争取。若是如此，终有所获。</p></div><h2 id="实例16" tabindex="-1"><a class="header-anchor" href="#实例16" aria-hidden="true">#</a> 实例16</h2><h3 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h3><p>输出指定格式的日期；</p><h3 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h3><p>没啥说的，直接调用 <code>datetime</code> 模块即可；</p><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2019/3/5 22:47</span>
<span class="token comment"># @Author  : cunyu</span>
<span class="token comment"># @Site    : cunyu1943.github.io</span>
<span class="token comment"># @File    : sixteen.py</span>
<span class="token comment"># @Software: PyCharm</span>

<span class="token keyword">import</span> datetime

<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
	<span class="token comment"># 输出当前日期</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>date<span class="token punctuation">.</span>today<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment"># 创建日期对象</span>
	Z_Birth <span class="token operator">=</span> datetime<span class="token punctuation">.</span>date<span class="token punctuation">(</span><span class="token number">1994</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>Z_Birth<span class="token punctuation">)</span>

	<span class="token comment"># 指定格式输出</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>Z_Birth<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&#39;%m/%d/%Y&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment"># 日期替换</span>
	Z_Birth <span class="token operator">=</span> Z_Birth<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>year<span class="token operator">=</span>Z_Birth<span class="token punctuation">.</span>year<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>Z_Birth<span class="token punctuation">)</span>

	<span class="token comment"># 日期运算</span>
	Next_Z_Birth <span class="token operator">=</span> Z_Birth <span class="token operator">+</span> datetime<span class="token punctuation">.</span>timedelta<span class="token punctuation">(</span>days<span class="token operator">=</span><span class="token number">366</span><span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>Next_Z_Birth<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h3><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="实例17" tabindex="-1"><a class="header-anchor" href="#实例17" aria-hidden="true">#</a> 实例17</h2><h3 id="题目-1" tabindex="-1"><a class="header-anchor" href="#题目-1" aria-hidden="true">#</a> 题目</h3><p>输入一行字符，分别统计出其中英文字母、空格、数字和其它字符的个数；</p><h3 id="分析-1" tabindex="-1"><a class="header-anchor" href="#分析-1" aria-hidden="true">#</a> 分析</h3><p>遍历字符串，然后统计其中是否为对应种类即可；</p><h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2019/3/6 21:37</span>
<span class="token comment"># @Author  : cunyu</span>
<span class="token comment"># @Site    : cunyu1943.github.io</span>
<span class="token comment"># @File    : seventeen.py</span>
<span class="token comment"># @Software: PyCharm</span>

<span class="token keyword">import</span> string

s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入字符串:\\n&#39;</span><span class="token punctuation">)</span>
num_letter <span class="token operator">=</span> <span class="token number">0</span>
num_space <span class="token operator">=</span> <span class="token number">0</span>
num_digit <span class="token operator">=</span> <span class="token number">0</span>
num_other <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">if</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		num_space <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token keyword">elif</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		num_digit <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token keyword">elif</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		num_letter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token keyword">else</span><span class="token punctuation">:</span>
		num_other <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;character: &#39;</span><span class="token punctuation">,</span> num_letter<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;space: &#39;</span><span class="token punctuation">,</span> num_space<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;digit: &#39;</span><span class="token punctuation">,</span> num_digit<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;other: &#39;</span><span class="token punctuation">,</span> num_other<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结果-1" tabindex="-1"><a class="header-anchor" href="#结果-1" aria-hidden="true">#</a> 结果</h3><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="实例18" tabindex="-1"><a class="header-anchor" href="#实例18" aria-hidden="true">#</a> 实例18</h2><h3 id="题目-2" tabindex="-1"><a class="header-anchor" href="#题目-2" aria-hidden="true">#</a> 题目</h3><p>求 s=a+aa+aaa+aaaa+aa...a 的值，其中a是一个数字。例如 2+22+222+2222+22222 (此时共有 5 个数相加)，几个数相加由键盘控制；</p><h3 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2019/3/6 21:46</span>
<span class="token comment"># @Author  : cunyu</span>
<span class="token comment"># @Site    : cunyu1943.github.io</span>
<span class="token comment"># @File    : eighteen.py</span>
<span class="token comment"># @Software: PyCharm</span>

num <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;输入重复的数字:\\n&#39;</span><span class="token punctuation">)</span>
times <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;你要重复的次数:\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

answer <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">:</span>
	answer <span class="token operator">+=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
	num <span class="token operator">+=</span> num<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;结果为: &#39;</span><span class="token punctuation">,</span> answer<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结果-2" tabindex="-1"><a class="header-anchor" href="#结果-2" aria-hidden="true">#</a> 结果</h3><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="实例19" tabindex="-1"><a class="header-anchor" href="#实例19" aria-hidden="true">#</a> 实例19</h2><h3 id="题目-3" tabindex="-1"><a class="header-anchor" href="#题目-3" aria-hidden="true">#</a> 题目</h3><p>一个数如果恰好等于它的因子之和，这个数就称为&quot;完数&quot;。例如6=1＋2＋3.编程找出1000以内的所有完数；</p><h3 id="代码-3" tabindex="-1"><a class="header-anchor" href="#代码-3" aria-hidden="true">#</a> 代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2019/3/6 21:57</span>
<span class="token comment"># @Author  : cunyu</span>
<span class="token comment"># @Site    : cunyu1943.github.io</span>
<span class="token comment"># @File    : nineteen.py</span>
<span class="token comment"># @Software: PyCharm</span>


<span class="token keyword">for</span> num <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">if</span> num <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
			arr<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">==</span> num<span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结果-3" tabindex="-1"><a class="header-anchor" href="#结果-3" aria-hidden="true">#</a> 结果</h3><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="实例20" tabindex="-1"><a class="header-anchor" href="#实例20" aria-hidden="true">#</a> 实例20</h2><h3 id="题目-4" tabindex="-1"><a class="header-anchor" href="#题目-4" aria-hidden="true">#</a> 题目</h3><p>一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，求它在第10次落地时，共经过多少米？第10次反弹多高？</p><h3 id="代码-4" tabindex="-1"><a class="header-anchor" href="#代码-4" aria-hidden="true">#</a> 代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2019/3/6 22:10</span>
<span class="token comment"># @Author  : cunyu</span>
<span class="token comment"># @Site    : cunyu1943.github.io</span>
<span class="token comment"># @File    : 20th.py</span>
<span class="token comment"># @Software: PyCharm</span>

<span class="token comment"># 初始距离</span>
distance <span class="token operator">=</span> <span class="token number">100</span>

total <span class="token operator">=</span> <span class="token number">0</span>

total <span class="token operator">+=</span> distance

<span class="token comment"># 第10次落地时，经历了9次弹起到落地</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	distance <span class="token operator">/=</span> <span class="token number">2</span>
	total <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> distance

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;总共经过距离: &#39;</span><span class="token punctuation">,</span> total<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;第10次反弹距离: &#39;</span><span class="token punctuation">,</span> distance <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结果-4" tabindex="-1"><a class="header-anchor" href="#结果-4" aria-hidden="true">#</a> 结果</h3><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="⏳-联系" tabindex="-1"><a class="header-anchor" href="#⏳-联系" aria-hidden="true">#</a> ⏳ 联系</h2><p>想解锁更多知识？不妨关注我的微信公众号：<strong>村雨遥（id：JavaPark）</strong>。</p><p>扫一扫，探索另一个全新的世界。</p><figure><img src="'+s+'" alt="" width="150" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',45);function v(h,b){const n=e("Share");return t(),i("div",null,[k,p(n,{colorful:""})])}const _=a(m,[["render",v],["__file","20181006-16-20.html.vue"]]);export{_ as default};
