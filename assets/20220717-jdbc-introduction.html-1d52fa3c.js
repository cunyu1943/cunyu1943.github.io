const e=JSON.parse('{"key":"v-ec34b19e","path":"/java-tutorial/javase-series/20220717-jdbc-introduction.html","title":"JDBC 入门指南","lang":"zh-CN","frontmatter":{"isOriginal":true,"order":1,"category":["Java 基础"],"tag":["Java","JDBC"],"description":"JDBC 入门指南 共勉 不要哀求，学会争取。若是如此，终有所获。 原文 https://mp.weixin.qq.com/s/DOXFxk5dk9WBfAVK0UJUng","head":[["meta",{"property":"og:url","content":"https://cunyu1943.github.io/java-tutorial/javase-series/20220717-jdbc-introduction.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"JDBC 入门指南"}],["meta",{"property":"og:description","content":"JDBC 入门指南 共勉 不要哀求，学会争取。若是如此，终有所获。 原文 https://mp.weixin.qq.com/s/DOXFxk5dk9WBfAVK0UJUng"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cunyu1943.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-26T15:36:16.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"JDBC 入门指南"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JDBC"}],["meta",{"property":"article:modified_time","content":"2023-08-26T15:36:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JDBC 入门指南\\",\\"image\\":[\\"https://cunyu1943.github.io/\\"],\\"dateModified\\":\\"2023-08-26T15:36:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.github.io\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"JDBC 简介","slug":"jdbc-简介","link":"#jdbc-简介","children":[{"level":3,"title":"导入驱动包","slug":"导入驱动包","link":"#导入驱动包","children":[]},{"level":3,"title":"初始化并建立连接","slug":"初始化并建立连接","link":"#初始化并建立连接","children":[]}]},{"level":2,"title":"JDBC 增删改查","slug":"jdbc-增删改查","link":"#jdbc-增删改查","children":[{"level":3,"title":"查询数据","slug":"查询数据","link":"#查询数据","children":[]},{"level":3,"title":"增加数据","slug":"增加数据","link":"#增加数据","children":[]},{"level":3,"title":"删除数据","slug":"删除数据","link":"#删除数据","children":[]},{"level":3,"title":"修改数据","slug":"修改数据","link":"#修改数据","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":3,"title":"JDBC 工具类","slug":"jdbc-工具类","link":"#jdbc-工具类","children":[]}]},{"level":2,"title":"JDBC 事务","slug":"jdbc-事务","link":"#jdbc-事务","children":[{"level":3,"title":"事务 4 大特性","slug":"事务-4-大特性","link":"#事务-4-大特性","children":[]},{"level":3,"title":"脏读、幻读 & 不可重复读","slug":"脏读、幻读-不可重复读","link":"#脏读、幻读-不可重复读","children":[]},{"level":3,"title":"隔离级别","slug":"隔离级别","link":"#隔离级别","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]},{"level":2,"title":"连接池","slug":"连接池","link":"#连接池","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"常用数据库连接池","slug":"常用数据库连接池","link":"#常用数据库连接池","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1693064176000,"updatedTime":1693064176000,"contributors":[{"name":"cunyu1943","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":19.01,"words":5703},"filePathRelative":"java-tutorial/javase-series/20220717-jdbc-introduction.md","localizedDate":"2023年8月26日","excerpt":"<h1> JDBC 入门指南</h1>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">共勉</p>\\n<p>不要哀求，学会争取。若是如此，终有所获。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">原文</p>\\n<p><a href=\\"https://mp.weixin.qq.com/s/DOXFxk5dk9WBfAVK0UJUng\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://mp.weixin.qq.com/s/DOXFxk5dk9WBfAVK0UJUng</a></p>\\n</div>","copyright":{"author":"村雨遥","license":"著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处"},"autoDesc":true}');export{e as data};
