import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e as s}from"./app--6MeOu58.js";const i="/assets/9da8b3765509b2d69aa52f4d186a7701-iq3cEErW.png",d="/assets/97c86fe924d22384d36088a0b2989bf3-JhkG0TKa.png",l={},o=s('<h1 id="redis-持久化" tabindex="-1"><a class="header-anchor" href="#redis-持久化" aria-hidden="true">#</a> Redis 持久化</h1><h2 id="什么是持久化" tabindex="-1"><a class="header-anchor" href="#什么是持久化" aria-hidden="true">#</a> 什么是持久化？</h2><p>所谓持久化，其实就是一种机制，它能够 <strong>将内存中的数据库状态保存到磁盘</strong> 中，从而防止服务器宕机导致内存数据丢失。<code>Redis</code> 的 <strong>数据都是存在内存中</strong> 的，一旦出现宕机等情况，所有数据将会丢失，而持久化机制则是为了应对这一突发故障而提出的机制。</p><h2 id="持久化的过程" tabindex="-1"><a class="header-anchor" href="#持久化的过程" aria-hidden="true">#</a> 持久化的过程</h2><p>要进行持久化，都是由客户端发起请求，然后再到服务器真实地写入磁盘中，一般需要经过如下步骤：</p><ol><li>客户端向数据库 <strong>发送写命令请求</strong>，此时数据存在于客户端的内存中；</li><li>数据库 <strong>接收</strong> 来自客户端的 <strong>写命令请求</strong>，此时数据存在于服务器的内存中；</li><li>数据库 <strong>调用系统 API</strong> 将数据写入磁盘，此时数据从服务器内存准备写入磁盘，位于 <strong>内核缓冲区</strong>；</li><li>操作系统将 <strong>写缓冲区</strong> 传输到 <strong>磁盘控制器</strong>，此时 <strong>数据由内核缓冲区进入磁盘缓存</strong>；</li><li>操作系统的磁盘控制器将数据 <strong>写入实际物理媒介中</strong>，此时数据写入磁盘；</li></ol><h2 id="持久化的两种方式" tabindex="-1"><a class="header-anchor" href="#持久化的两种方式" aria-hidden="true">#</a> 持久化的两种方式</h2><ul><li><strong>RDB</strong>：在指定时间间隔内对数据进行快照存储，是 <code>Redis</code> 默认的持久化方式；</li><li><strong>AOF</strong>：记录每次服务器进行的写操作，当服务器重启时重新执行这些命令以恢复原始数据；</li></ul><h3 id="rdb" tabindex="-1"><a class="header-anchor" href="#rdb" aria-hidden="true">#</a> RDB</h3><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h4><ol><li><code>Redis</code> 调用 <code>fork()</code>，产生一个子进程；</li><li>子进程将数据写到一个临时的 <code>RDB</code> 文件；</li><li>当子进程完成新的 <code>RDB</code> 文件写入后，替换掉旧的 <code>RDB</code> 文件；</li></ol><h4 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h4><ol><li><strong>优点</strong></li></ol><ul><li><code>RDB</code> 是一个单文件，十分简洁，保存了某一时间点的 Redis 数据，适合做备份；</li><li><code>RDB</code> 适合用于容灾，单文件传输十分方便；</li><li><code>RDB</code> 性能较好，要进行持久化时，主进程 <code>fork</code> 一个子进程，然后将持久化的工作交给子进程，而主进程无需进行相关的 <code>I/O</code> 操作；</li><li>相比于 <code>AOF</code>，数据量大时，其启动速度更快。</li></ul><ol><li><strong>缺点</strong></li></ol><ul><li><code>RDB</code> 容易造成数据丢失，数据安全性较低；</li><li><code>RDB</code> 利用 <code>fork()</code> 产生子进程进行数据的持久化，一旦数据过大就会消耗一定时间，造成 <code>Redis</code> 停止服务几毫秒甚至更久。</li></ul><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># RDB 文件名，默认 dump.rdb</span>
<span class="token key attr-name">dbfilename</span> <span class="token value attr-value">dump.rdb</span>

<span class="token comment"># 文件存放目录，默认为当前工作目录</span>
<span class="token key attr-name">dir</span> <span class="token value attr-value">./</span>

<span class="token comment"># 保存点，假设为每 60s，数据发生 1000 次以上变动</span>
<span class="token key attr-name">save</span> <span class="token value attr-value">60 1000</span>

<span class="token comment"># 持久化出错，主进程是否停止希尔</span>
<span class="token key attr-name">stop-writes-on-bgsave-error</span> <span class="token value attr-value">yes</span>

<span class="token comment"># 数据是否压缩</span>
<span class="token key attr-name">rdbcompression</span> <span class="token value attr-value">yes</span>

<span class="token comment"># 数据是否校验</span>
<span class="token key attr-name">rdbchecksum</span> <span class="token value attr-value">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="手动触发方式" tabindex="-1"><a class="header-anchor" href="#手动触发方式" aria-hidden="true">#</a> 手动触发方式</h4><ol><li><strong>save</strong></li></ol><p>会阻塞当前 <code>Redis</code> 服务器，直到持久化完成，对于线上要禁止使用；</p><ol><li><strong>bgsave</strong></li></ol><p><code>fork</code> 一个子进程，由子进程负责持久化进程，因此阻塞只会发生在 <code>fork</code> 子进程的过程中；</p><h3 id="aof" tabindex="-1"><a class="header-anchor" href="#aof" aria-hidden="true">#</a> AOF</h3><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="工作原理-1" tabindex="-1"><a class="header-anchor" href="#工作原理-1" aria-hidden="true">#</a> 工作原理</h4><ol><li>命令的实时写入，通过增量追加到文件的流程为：命令写入 -&gt; 追加到 <code>AOF</code> 缓存 -&gt; 同步到 <code>AOF</code> 磁盘；</li><li>对 <code>AOF</code> 文件的重写，是为了减少 <code>AOF</code> 文件的大小，可以手动（<code>bgrewriteaof</code>）或自动触发；</li></ol><h4 id="优缺点-1" tabindex="-1"><a class="header-anchor" href="#优缺点-1" aria-hidden="true">#</a> 优缺点</h4><ol><li><strong>优点</strong></li></ol><ul><li>比 <code>RDB</code> 更可靠，能制定不同的同步策略：不进行同步，每秒同步一次和每次查询进行同步，默认为每秒同步一次；</li><li><code>AOF</code> 是一个纯追加的文件，面对突发情况也不回出现日志定位或损坏问题；</li><li>当 <code>AOF</code> 过大时，<code>Redis</code> 会自动重写。重写是在一个新文件上进行，同时 <code>Redis</code> 会继续往旧文件中追加数据，新文件上会写入能重建当前数据集的最小操作命令的集合。当新文件重写完之后，<code>Redis</code> 就将新旧文件进行替换，然后将数据写入新文件；</li><li><code>AOF</code> 将操作命令以简易的格式保存在文件中，容易导出用于恢复数据；</li></ul><ol start="2"><li><strong>缺点</strong></li></ol><ul><li>数据量相同时，<code>AOF</code> 文件的大小一般都会比 <code>RDB</code> 文件大；</li><li>在某些同步策略下，<code>AOF</code> 的速度比 <code>RDB</code> 慢，通常同步设置为每秒一次就能获得较高性能；</li><li>有可能出现 <code>AOF</code> 重建的数据和原数据不一致的问题；</li></ul><h4 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1" aria-hidden="true">#</a> 配置</h4><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 是否开启aof</span>
<span class="token key attr-name">appendonly</span> <span class="token value attr-value">yes</span>

<span class="token comment"># 文件存放目录，与 RDB 公用，默认为当前工作目录</span>
<span class="token key attr-name">dir</span> <span class="token value attr-value">./</span>

<span class="token comment"># 文件名称，默认为 appendonly.aof </span>
<span class="token key attr-name">appendfilename</span> <span class="token value attr-value">&quot;appendonly.aof&quot;</span>

<span class="token comment"># 同步方式</span>
<span class="token comment"># appendfsync always</span>
<span class="token key attr-name">appendfsync</span> <span class="token value attr-value">everysec</span>
<span class="token comment"># appendfsync no</span>

<span class="token comment"># aof重写期间是否同步</span>
<span class="token key attr-name">no-appendfsync-on-rewrite</span> <span class="token value attr-value">no</span>

<span class="token comment"># 重写触发配置</span>
<span class="token key attr-name">auto-aof-rewrite-percentage</span> <span class="token value attr-value">100</span>
<span class="token key attr-name">auto-aof-rewrite-min-size</span> <span class="token value attr-value">64mb</span>

<span class="token comment"># 加载aof时如果有错如何处理</span>
<span class="token key attr-name">aof-load-truncated</span> <span class="token value attr-value">yes</span>

<span class="token comment"># 文件重写策略</span>
<span class="token key attr-name">aof-rewrite-incremental-fsync</span> <span class="token value attr-value">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>以上就是 <code>Redis</code> 持久化的相关内容了，首先讲了什么是持久化，然后讲了持久化的过程，最后则是 <code>Redis</code> 中持久化的两种方式：<code>RDB</code> + <code>AOF</code>。</p>`,37),c=[o];function r(t,p){return a(),n("div",null,c)}const m=e(l,[["render",r],["__file","20221016-persistence.html.vue"]]);export{m as default};
