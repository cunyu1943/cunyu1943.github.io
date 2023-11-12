const e=JSON.parse('{"key":"v-7f719a7d","path":"/java-tutorial/javase-series/20220707-control-process.html","title":"流程控制","lang":"zh-CN","frontmatter":{"isOriginal":true,"order":1,"category":["Java 基础"],"tag":["Java"],"description":"流程控制 共勉 不要哀求，学会争取。若是如此，终有所获。 原文 https://mp.weixin.qq.com/s/3WU5l37DpPkR6o7CnFiStA 前言 我们在 上一篇文章 中讲了各种操作符的使用技巧，接上一篇文章中的内容，本次文章主要将流程控制，文章主要内容安排如下：","head":[["meta",{"property":"og:url","content":"https://cunyu1943.github.io/java-tutorial/javase-series/20220707-control-process.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"流程控制"}],["meta",{"property":"og:description","content":"流程控制 共勉 不要哀求，学会争取。若是如此，终有所获。 原文 https://mp.weixin.qq.com/s/3WU5l37DpPkR6o7CnFiStA 前言 我们在 上一篇文章 中讲了各种操作符的使用技巧，接上一篇文章中的内容，本次文章主要将流程控制，文章主要内容安排如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cunyu1943.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-15T00:12:02.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"流程控制"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:modified_time","content":"2023-09-15T00:12:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流程控制\\",\\"image\\":[\\"https://cunyu1943.github.io/\\"],\\"dateModified\\":\\"2023-09-15T00:12:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.github.io\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"输入输出","slug":"输入输出","link":"#输入输出","children":[{"level":3,"title":"输入","slug":"输入","link":"#输入","children":[]},{"level":3,"title":"输出","slug":"输出","link":"#输出","children":[]}]},{"level":2,"title":"顺序结构","slug":"顺序结构","link":"#顺序结构","children":[]},{"level":2,"title":"分支结构","slug":"分支结构","link":"#分支结构","children":[{"level":3,"title":"if","slug":"if","link":"#if","children":[]},{"level":3,"title":"switch","slug":"switch","link":"#switch","children":[]}]},{"level":2,"title":"循环结构","slug":"循环结构","link":"#循环结构","children":[{"level":3,"title":"while","slug":"while","link":"#while","children":[]},{"level":3,"title":"for","slug":"for","link":"#for","children":[]},{"level":3,"title":"for 和 while 的区别","slug":"for-和-while-的区别","link":"#for-和-while-的区别","children":[]},{"level":3,"title":"continue & break","slug":"continue-break","link":"#continue-break","children":[]},{"level":3,"title":"break","slug":"break","link":"#break","children":[]},{"level":3,"title":"continue","slug":"continue","link":"#continue","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"⏳ 联系","slug":"⏳-联系","link":"#⏳-联系","children":[]}],"git":{"createdTime":1693098355000,"updatedTime":1694736722000,"contributors":[{"name":"cunyu1943","email":"747731461@qq.com","commits":1},{"name":"村雨遥","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":13.93,"words":4178},"filePathRelative":"java-tutorial/javase-series/20220707-control-process.md","localizedDate":"2023年8月27日","excerpt":"<h1> 流程控制</h1>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">共勉</p>\\n<p>不要哀求，学会争取。若是如此，终有所获。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">原文</p>\\n<p>https://mp.weixin.qq.com/s/3WU5l37DpPkR6o7CnFiStA</p>\\n</div>\\n<h2> 前言</h2>\\n<p>我们在 <a href=\\"https://mp.weixin.qq.com/s/49KRDz8bpcGdPlU15OJD0g\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">上一篇文章</a> 中讲了各种操作符的使用技巧，接上一篇文章中的内容，本次文章主要将流程控制，文章主要内容安排如下：</p>","copyright":{"author":"村雨遥","license":"著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处"},"autoDesc":true}');export{e as data};
