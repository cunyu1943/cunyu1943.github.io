import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c,a as s,d as n,b as i,e as a}from"./app-BwFInxZ8.js";const l={},u=a('<h1 id="有序数组去重" tabindex="-1"><a class="header-anchor" href="#有序数组去重" aria-hidden="true">#</a> 有序数组去重</h1><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>给定一个有序数组，要删除数组重复出现的元素，使得每个元素只出现一次，然后返回移除重复数组后的新长度；</p><p><strong>示例</strong>：</p><p>假设给定一个数组 <code>nums = [1,2,4,4]</code>，删除重复出现的元素 4 后，原数组变成 <code>nums = [1, 2, 4]</code>，此时新的数组长度为 3；</p><h2 id="解决思路" tabindex="-1"><a class="header-anchor" href="#解决思路" aria-hidden="true">#</a> 解决思路</h2><h3 id="数组原地操作" tabindex="-1"><a class="header-anchor" href="#数组原地操作" aria-hidden="true">#</a> 数组原地操作</h3>',7),r={href:"https://juejin.cn/post/6959725810160762888",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>这是一种时间换空间的方法，此时的空间复杂度为 $O(1)$，时间复杂度为 $O(n^2)$，具体实现可以参考如下代码，其中也详细注释了每一步操作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
* 去除有序数组中重复元素并返回数组的新长度
* <span class="token keyword">@param</span> <span class="token parameter">nums</span>
* <span class="token keyword">@return</span> 删除重复元素后数组的新长度
*/</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数组初始容量</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    
    <span class="token comment">// 我们假定数组最后一个元素是唯一的，然后对于其他的每个元素，如果自身与它后边的数相同，那么就删除这个相同的元素</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 比较当前元素与其后一个元素是否相等</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 若相等，则移除后一位，并将所有元素向前移动一位</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                num<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            length<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 返回数组的新长度</span>
    <span class="token keyword">return</span> length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="普通方法" tabindex="-1"><a class="header-anchor" href="#普通方法" aria-hidden="true">#</a> 普通方法</h3><p>针对数组原地操作算法时间复杂度为 $O(n^2)$，为降低时间复杂度提高算法效率，可以通过空间换时间的做法，通过定义新的数组，从而实现去除重复元素的目的，此时的时间复杂度为 $O(n)$，而空间复杂度也由 $O(1)$ 变成了 $O(n)$。但是有几点需要注意：</p><ol><li>临界情况（即数组为空）；</li><li>创建新数组时，需要指定其容量，所以需要先求出原数组中无重复元素时的元素个数；</li><li>最后则是将原数组中未重复的元素赋值给新数组；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
* 去除有序数组中重复元素并返回数组的新长度
* <span class="token keyword">@param</span> <span class="token parameter">nums</span>
* <span class="token keyword">@return</span> 删除重复元素后的新数组
*/</span>
<span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 临界情况</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 先求出数组中无重复时的元素个数</span>
    <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            size<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 用于存放不含重复元素的有序数组</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> resultArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            resultArr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 返回新的不含重复元素的有序数组</span>
    <span class="token keyword">return</span> resultArr<span class="token punctuation">;</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h3><p>以上的两种方法要么是以时间换空间，要么是以空间换时间，那我们有没有一种折中的办法，既能保证时间复杂度很低，也能保证空间复杂度呢？答案是：当然有！</p><p>利用双指针的思想，既可以将空间复杂度控制在 $O(1)$，也可以将时间复杂度控制在 $O(n)$。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
* 去除有序数组中重复元素并返回数组的新长度
* <span class="token keyword">@param</span> <span class="token parameter">nums</span>
* <span class="token keyword">@return</span> 删除重复元素后数组的新长度
*/</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 	<span class="token comment">// 临界情况</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        reutrn <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span><span class="token operator">++</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>    
    
    <span class="token comment">// 返回新长度</span>
    <span class="token keyword">return</span> size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>以上就是 3 种去除有序数组中重复元素的三种算法，其中既有以时间换空间的数组原地操作法，也有空间换时间的普通方法，最后的话则是有一种综合前两种方法优点的方法 - 双指针。通过双指针方法，既能保证空间复杂度为 $O(1)$，也将时间复杂度限制在了 $O(n)$。</p><p>想不到连简单的数组去重都有这么大的学问，我们在日常学习时，大多可能只关注于如何实现功能即可。但如果要应用到工作场景中，可能就需要考虑效率问题，此时则需要根据我们的具体需求来进行选择了。</p><p>好了，以上就是今天的内容了，如果你还有其他更好的方法，欢迎留言交流呀！</p>`,14);function d(m,v){const p=t("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("数组原地操作，此时无需创建新的数组，只需要在原来的数组上操作即可。相当于首先要找到数组中重复的元素，然后将重复的元素移除，此时就涉及到数组中的删除操作，相关知识点可以看我的另一篇文章 "),s("a",r,[n("数组的增删改查"),i(p)]),n("。")]),k])}const w=e(l,[["render",d],["__file","20210519-sorted-arr-duplication.html.vue"]]);export{w as default};
