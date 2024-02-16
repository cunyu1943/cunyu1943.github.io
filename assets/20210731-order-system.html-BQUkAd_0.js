const e=JSON.parse('{"key":"v-67ef1c06","path":"/java-tutorial/in-action/project/20210731-order-system.html","title":"饭馆点菜系统","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"项目实践","tag":["Java"],"date":"2021-07-31T00:00:00.000Z","description":"饭馆点菜系统 前言 继上次写了一个 Java SE 版本的 学生成绩管理系统 之后，发现大家反响还不错，所以今天我有带来了差不多一样的点菜系统，希望利用我们所学的 Java SE 知识，实现我们的点菜系统。 而在上次文章的评论中，我也看到了大家的一些建议，可能没有及时回复大家，但是在这次文章中，我会尽量满足大家提的一些好的建议，向着更好的方向前进！ 需求分析 此次可以，我们需要设计一个点菜系统，我们就需要对我们的系统进行分析，面向的对象是谁？对象常用的操作又有哪些？ 既然是点菜系统，那我们的餐馆一般都是有一个固定的菜单，然后面向的对象一般都是顾客，顾客可以通过这个菜单进行点菜、删除菜，查看已经点过的菜，以及最后用完餐后的结账。","head":[["meta",{"property":"og:url","content":"https://cunyu1943.github.io/java-tutorial/in-action/project/20210731-order-system.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"饭馆点菜系统"}],["meta",{"property":"og:description","content":"饭馆点菜系统 前言 继上次写了一个 Java SE 版本的 学生成绩管理系统 之后，发现大家反响还不错，所以今天我有带来了差不多一样的点菜系统，希望利用我们所学的 Java SE 知识，实现我们的点菜系统。 而在上次文章的评论中，我也看到了大家的一些建议，可能没有及时回复大家，但是在这次文章中，我会尽量满足大家提的一些好的建议，向着更好的方向前进！ 需求分析 此次可以，我们需要设计一个点菜系统，我们就需要对我们的系统进行分析，面向的对象是谁？对象常用的操作又有哪些？ 既然是点菜系统，那我们的餐馆一般都是有一个固定的菜单，然后面向的对象一般都是顾客，顾客可以通过这个菜单进行点菜、删除菜，查看已经点过的菜，以及最后用完餐后的结账。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T06:39:45.000Z"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2021-07-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-16T06:39:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"饭馆点菜系统\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-16T06:39:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.github.io\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"功能预览","slug":"功能预览","link":"#功能预览","children":[{"level":3,"title":"系统菜单","slug":"系统菜单","link":"#系统菜单","children":[]},{"level":3,"title":"点菜","slug":"点菜","link":"#点菜","children":[]},{"level":3,"title":"查看已点菜品","slug":"查看已点菜品","link":"#查看已点菜品","children":[]},{"level":3,"title":"删除菜品","slug":"删除菜品","link":"#删除菜品","children":[]},{"level":3,"title":"结账","slug":"结账","link":"#结账","children":[]},{"level":3,"title":"退出系统","slug":"退出系统","link":"#退出系统","children":[]}]},{"level":2,"title":"功能实现","slug":"功能实现","link":"#功能实现","children":[{"level":3,"title":"主界面","slug":"主界面","link":"#主界面","children":[]},{"level":3,"title":"主类设计","slug":"主类设计","link":"#主类设计","children":[]},{"level":3,"title":"功能接口","slug":"功能接口","link":"#功能接口","children":[]},{"level":3,"title":"初始化菜单","slug":"初始化菜单","link":"#初始化菜单","children":[]},{"level":3,"title":"展示菜品列表","slug":"展示菜品列表","link":"#展示菜品列表","children":[]},{"level":3,"title":"展示已点菜品","slug":"展示已点菜品","link":"#展示已点菜品","children":[]},{"level":3,"title":"移除菜品","slug":"移除菜品","link":"#移除菜品","children":[]},{"level":3,"title":"结账","slug":"结账-1","link":"#结账-1","children":[]}]},{"level":2,"title":"总程序","slug":"总程序","link":"#总程序","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1708065585000,"updatedTime":1708065585000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":7.21,"words":2164},"filePathRelative":"java-tutorial/in-action/project/20210731-order-system.md","localizedDate":"2021年7月31日","excerpt":"<h1> 饭馆点菜系统</h1>\\n<h2> 前言</h2>\\n<p>继上次写了一个 Java SE 版本的 学生成绩管理系统 之后，发现大家反响还不错，所以今天我有带来了差不多一样的点菜系统，希望利用我们所学的 Java SE 知识，实现我们的点菜系统。</p>\\n<p>而在上次文章的评论中，我也看到了大家的一些建议，可能没有及时回复大家，但是在这次文章中，我会尽量满足大家提的一些好的建议，向着更好的方向前进！</p>\\n<h2> 需求分析</h2>\\n<p>此次可以，我们需要设计一个点菜系统，我们就需要对我们的系统进行分析，面向的对象是谁？对象常用的操作又有哪些？</p>\\n<p>既然是点菜系统，那我们的餐馆一般都是有一个固定的菜单，然后面向的对象一般都是顾客，顾客可以通过这个菜单进行点菜、删除菜，查看已经点过的菜，以及最后用完餐后的结账。</p>","copyright":{"author":"村雨遥","license":"著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处"},"autoDesc":true}');export{e as data};
