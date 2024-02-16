const e=JSON.parse('{"key":"v-3324c9dd","path":"/framework/mybatis/20200722-pri-sec-cache.html","title":"一二级缓存","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"MyBatis 系列","tag":"MyBatis","description":"一二级缓存 1. 前言 1.1 什么是缓存 缓存是存在内存中的临时数据，通过将我们 经常查询但不常变的数据 放在内存中，当我们查询数据时就不在需要从磁盘读取，而只需要从缓存中查询即可，大大提升了查询的效率，解决了高并发系统的性能问题。 1.2 为什么需要缓存 既然我们可以直接从数据库中查询数据，那为什么还要需要缓存呢？通过使用缓存，我们能够减少和数据库之间的交互频率，减少系统开销，从而提高系统的效率。 2. MyBatis 缓存 MyBatis 内置了一个强大的事务性查询缓存机制，通过它能够十分方便的配置和定制。默认情况下，MyBatis 默认定义了两级缓存，而且为了提高扩展性，定义了缓存接口 Cache，我们能十分方便的实现 Cache 接口来自定义二级缓存。","head":[["meta",{"property":"og:url","content":"https://cunyu1943.github.io/framework/mybatis/20200722-pri-sec-cache.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"一二级缓存"}],["meta",{"property":"og:description","content":"一二级缓存 1. 前言 1.1 什么是缓存 缓存是存在内存中的临时数据，通过将我们 经常查询但不常变的数据 放在内存中，当我们查询数据时就不在需要从磁盘读取，而只需要从缓存中查询即可，大大提升了查询的效率，解决了高并发系统的性能问题。 1.2 为什么需要缓存 既然我们可以直接从数据库中查询数据，那为什么还要需要缓存呢？通过使用缓存，我们能够减少和数据库之间的交互频率，减少系统开销，从而提高系统的效率。 2. MyBatis 缓存 MyBatis 内置了一个强大的事务性查询缓存机制，通过它能够十分方便的配置和定制。默认情况下，MyBatis 默认定义了两级缓存，而且为了提高扩展性，定义了缓存接口 Cache，我们能十分方便的实现 Cache 接口来自定义二级缓存。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T12:22:26.000Z"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:tag","content":"MyBatis"}],["meta",{"property":"article:modified_time","content":"2024-02-16T12:22:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一二级缓存\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-16T12:22:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.github.io\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[{"level":3,"title":"1.1 什么是缓存","slug":"_1-1-什么是缓存","link":"#_1-1-什么是缓存","children":[]},{"level":3,"title":"1.2 为什么需要缓存","slug":"_1-2-为什么需要缓存","link":"#_1-2-为什么需要缓存","children":[]}]},{"level":2,"title":"2. MyBatis 缓存","slug":"_2-mybatis-缓存","link":"#_2-mybatis-缓存","children":[]},{"level":2,"title":"3. 一级缓存","slug":"_3-一级缓存","link":"#_3-一级缓存","children":[{"level":3,"title":"3.1 一级缓存原理","slug":"_3-1-一级缓存原理","link":"#_3-1-一级缓存原理","children":[]},{"level":3,"title":"3.2 如何使用一级缓存","slug":"_3-2-如何使用一级缓存","link":"#_3-2-如何使用一级缓存","children":[]},{"level":3,"title":"3.3 一级缓存失效的情况","slug":"_3-3-一级缓存失效的情况","link":"#_3-3-一级缓存失效的情况","children":[]}]},{"level":2,"title":"4. 二级缓存","slug":"_4-二级缓存","link":"#_4-二级缓存","children":[{"level":3,"title":"4.1 二级缓存原理","slug":"_4-1-二级缓存原理","link":"#_4-1-二级缓存原理","children":[]},{"level":3,"title":"4.2 如何使用二级缓存","slug":"_4-2-如何使用二级缓存","link":"#_4-2-如何使用二级缓存","children":[]}]}],"git":{"createdTime":1708086146000,"updatedTime":1708086146000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":5.3,"words":1589},"filePathRelative":"framework/mybatis/20200722-pri-sec-cache.md","localizedDate":"2024年2月16日","excerpt":"<h1> 一二级缓存</h1>\\n<h2> 1. 前言</h2>\\n<h3> 1.1 什么是缓存</h3>\\n<p>缓存是存在内存中的临时数据，通过将我们 <strong>经常查询但不常变的数据</strong> 放在内存中，当我们查询数据时就不在需要从磁盘读取，而只需要从缓存中查询即可，大大提升了查询的效率，解决了高并发系统的性能问题。</p>\\n<h3> 1.2 为什么需要缓存</h3>\\n<p>既然我们可以直接从数据库中查询数据，那为什么还要需要缓存呢？通过使用缓存，我们能够减少和数据库之间的交互频率，减少系统开销，从而提高系统的效率。</p>\\n<h2> 2. MyBatis 缓存</h2>\\n<p>MyBatis 内置了一个强大的事务性查询缓存机制，通过它能够十分方便的配置和定制。默认情况下，MyBatis 默认定义了两级缓存，而且为了提高扩展性，定义了缓存接口 <code>Cache</code>，我们能十分方便的实现 <code>Cache</code> 接口来自定义二级缓存。</p>","copyright":{"author":"村雨遥","license":"著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处"},"autoDesc":true}');export{e as data};
