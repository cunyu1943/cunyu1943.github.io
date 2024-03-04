const e=JSON.parse('{"key":"v-2f513f9c","path":"/interview/knowledge/20240203-java-advanced.html","title":"Java 进阶面试知识点","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"求职面试","tag":"面试","date":"2024-02-03T00:00:00.000Z","description":"异常 异常类层次结构 从结构图可以看出，所有异常均继承自 Throwable 类，它有两个重要的子类：Exception 和 Error ，各自又包含大量子类。 1. Exception 程序本身可以处理的异常，又可以分为 受检异常 和  非受检异常 ，受检异常 可以用 try...catch... 语句进行捕获处理，而且能从异常中恢复。但 非受检异常...","head":[["meta",{"property":"og:url","content":"https://cunyu1943.github.io/interview/knowledge/20240203-java-advanced.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"Java 进阶面试知识点"}],["meta",{"property":"og:description","content":"异常 异常类层次结构 从结构图可以看出，所有异常均继承自 Throwable 类，它有两个重要的子类：Exception 和 Error ，各自又包含大量子类。 1. Exception 程序本身可以处理的异常，又可以分为 受检异常 和  非受检异常 ，受检异常 可以用 try...catch... 语句进行捕获处理，而且能从异常中恢复。但 非受检异常..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-04T10:23:47.000Z"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:published_time","content":"2024-02-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-04T10:23:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 进阶面试知识点\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-04T10:23:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.github.io\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"异常","slug":"异常","link":"#异常","children":[{"level":3,"title":"异常类层次结构","slug":"异常类层次结构","link":"#异常类层次结构","children":[]},{"level":3,"title":"Throwable 常用方法","slug":"throwable-常用方法","link":"#throwable-常用方法","children":[]},{"level":3,"title":"try-catch-finally 和 try-with-resources","slug":"try-catch-finally-和-try-with-resources","link":"#try-catch-finally-和-try-with-resources","children":[]}]},{"level":2,"title":"IO","slug":"io","link":"#io","children":[{"level":3,"title":"IO 流的定义","slug":"io-流的定义","link":"#io-流的定义","children":[]},{"level":3,"title":"IO 分类","slug":"io-分类","link":"#io-分类","children":[]},{"level":3,"title":"字节流 vs 字符流","slug":"字节流-vs-字符流","link":"#字节流-vs-字符流","children":[]},{"level":3,"title":"BIO、NIO 和 AIO","slug":"bio、nio-和-aio","link":"#bio、nio-和-aio","children":[]},{"level":3,"title":"读取大数据量文件，如何选择流？","slug":"读取大数据量文件-如何选择流","link":"#读取大数据量文件-如何选择流","children":[]},{"level":3,"title":"NIO","slug":"nio","link":"#nio","children":[]}]},{"level":2,"title":"集合","slug":"集合","link":"#集合","children":[{"level":3,"title":"Collections 工具类","slug":"collections-工具类","link":"#collections-工具类","children":[]},{"level":3,"title":"Arrays 工具类","slug":"arrays-工具类","link":"#arrays-工具类","children":[]}]},{"level":2,"title":"泛型","slug":"泛型","link":"#泛型","children":[{"level":3,"title":"什么是泛型？使用泛型的好处？","slug":"什么是泛型-使用泛型的好处","link":"#什么是泛型-使用泛型的好处","children":[]},{"level":3,"title":"泛型的工作机制？","slug":"泛型的工作机制","link":"#泛型的工作机制","children":[]},{"level":3,"title":"泛型的三种使用方式","slug":"泛型的三种使用方式","link":"#泛型的三种使用方式","children":[]},{"level":3,"title":"泛型通配符？","slug":"泛型通配符","link":"#泛型通配符","children":[]},{"level":3,"title":"限定通配符和非限定通配符？","slug":"限定通配符和非限定通配符","link":"#限定通配符和非限定通配符","children":[]},{"level":3,"title":"可以把 List 传递给一个接受 List","slug":"可以把-list-传递给一个接受-list","link":"#可以把-list-传递给一个接受-list","children":[]},{"level":3,"title":"Array 中是否可以使用泛型？","slug":"array-中是否可以使用泛型","link":"#array-中是否可以使用泛型","children":[]}]},{"level":2,"title":"多线程","slug":"多线程","link":"#多线程","children":[{"level":3,"title":"线程、进程、程序","slug":"线程、进程、程序","link":"#线程、进程、程序","children":[]},{"level":3,"title":"线程基本状态","slug":"线程基本状态","link":"#线程基本状态","children":[]},{"level":3,"title":"使用多线程的三种方式","slug":"使用多线程的三种方式","link":"#使用多线程的三种方式","children":[]},{"level":3,"title":"线程优先级","slug":"线程优先级","link":"#线程优先级","children":[]}]},{"level":2,"title":"反射","slug":"反射","link":"#反射","children":[{"level":3,"title":"反射的定义及作用？","slug":"反射的定义及作用","link":"#反射的定义及作用","children":[]},{"level":3,"title":"反射的优缺点","slug":"反射的优缺点","link":"#反射的优缺点","children":[]},{"level":3,"title":"反射的基本运用","slug":"反射的基本运用","link":"#反射的基本运用","children":[]},{"level":3,"title":"如何利用反射创建对象","slug":"如何利用反射创建对象","link":"#如何利用反射创建对象","children":[]},{"level":3,"title":"反射中的一些注意事项","slug":"反射中的一些注意事项","link":"#反射中的一些注意事项","children":[]}]},{"level":2,"title":"注解","slug":"注解","link":"#注解","children":[{"level":3,"title":"什么是注解？","slug":"什么是注解","link":"#什么是注解","children":[]},{"level":3,"title":"注解的用途？","slug":"注解的用途","link":"#注解的用途","children":[]},{"level":3,"title":"注解的原理？","slug":"注解的原理","link":"#注解的原理","children":[]},{"level":3,"title":"元注解","slug":"元注解","link":"#元注解","children":[]},{"level":3,"title":"自定义注解的规则","slug":"自定义注解的规则","link":"#自定义注解的规则","children":[]}]}],"git":{"createdTime":1706973496000,"updatedTime":1707042227000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":2}]},"readingTime":{"minutes":23.48,"words":7043},"filePathRelative":"interview/knowledge/20240203-java-advanced.md","localizedDate":"2024年2月3日","copyright":{"author":"村雨遥","license":"著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处"},"autoDesc":true,"excerpt":""}');export{e as data};
