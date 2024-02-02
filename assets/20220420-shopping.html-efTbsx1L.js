const n=JSON.parse(`{"key":"v-0adebd77","path":"/program-language/python/tutorial/20220420-shopping.html","title":"Python 实现购物车","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"Python 教程","tag":["Python"],"date":"2022-04-20T00:00:00.000Z","description":"Python 实现购物车 共勉 不要哀求，学会争取。若是如此，终有所获。 要求 代码 # --*--coding:utf-8--*-- # Author: 村雨 import pprint productList = [('Iphone 8', 10000), ('GTX2080', 8000), ('Z7KP7-GT', 6000), ('Mac pro', 15000), ('Honor 10', 2800), ('Iphone XR', 12000), ('Mi 8', 2999) ] shoppingList = [] print('输入你的工资:') salary = input() if not salary.isdigit(): print('请输入整数') else: salary = int(salary) while True: for index, item in enumerate(productList): print(index + 1, item) print('输入你要买的商品的序号：') userWant = input() if userWant.isdigit(): userWant = int(userWant) if userWant &lt;= len(productList) and userWant &gt; 0: print('你要购买的是：', productList[userWant - 1][0]) if salary &gt;= productList[userWant - 1][1]: shoppingList.append(productList[userWant - 1][0]) salary -= productList[userWant - 1][1] print('你已经购买了' + productList[userWant - 1][0] + ', 你的余额为 ' + str(salary)) else: print('对不起，你的余额不足！请努力工作吧！') print('你当前所购买的商品为：') for brought in shoppingList: pprint.pprint(brought) print('你当前余额为：', salary) exit() else: print('你输入的商品序号有错，请重新输入') elif userWant == 'q': print('-----------Shopping List----------') for brought in shoppingList: pprint.pprint(brought) print('你的余额为 ', salary) exit() else: print('Invalid input！！！')","head":[["meta",{"property":"og:url","content":"https://cunyu1943.github.io/program-language/python/tutorial/20220420-shopping.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"Python 实现购物车"}],["meta",{"property":"og:description","content":"Python 实现购物车 共勉 不要哀求，学会争取。若是如此，终有所获。 要求 代码 # --*--coding:utf-8--*-- # Author: 村雨 import pprint productList = [('Iphone 8', 10000), ('GTX2080', 8000), ('Z7KP7-GT', 6000), ('Mac pro', 15000), ('Honor 10', 2800), ('Iphone XR', 12000), ('Mi 8', 2999) ] shoppingList = [] print('输入你的工资:') salary = input() if not salary.isdigit(): print('请输入整数') else: salary = int(salary) while True: for index, item in enumerate(productList): print(index + 1, item) print('输入你要买的商品的序号：') userWant = input() if userWant.isdigit(): userWant = int(userWant) if userWant &lt;= len(productList) and userWant &gt; 0: print('你要购买的是：', productList[userWant - 1][0]) if salary &gt;= productList[userWant - 1][1]: shoppingList.append(productList[userWant - 1][0]) salary -= productList[userWant - 1][1] print('你已经购买了' + productList[userWant - 1][0] + ', 你的余额为 ' + str(salary)) else: print('对不起，你的余额不足！请努力工作吧！') print('你当前所购买的商品为：') for brought in shoppingList: pprint.pprint(brought) print('你当前余额为：', salary) exit() else: print('你输入的商品序号有错，请重新输入') elif userWant == 'q': print('-----------Shopping List----------') for brought in shoppingList: pprint.pprint(brought) print('你的余额为 ', salary) exit() else: print('Invalid input！！！')"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T10:39:17.000Z"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:published_time","content":"2022-04-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T10:39:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 实现购物车\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T10:39:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.github.io\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"要求","slug":"要求","link":"#要求","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]},{"level":2,"title":"结果","slug":"结果","link":"#结果","children":[]},{"level":2,"title":"⏳ 联系","slug":"⏳-联系","link":"#⏳-联系","children":[]}],"git":{"createdTime":1706870357000,"updatedTime":1706870357000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":1.05,"words":315},"filePathRelative":"program-language/python/tutorial/20220420-shopping.md","localizedDate":"2022年4月20日","excerpt":"<h1> Python 实现购物车</h1>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">共勉</p>\\n<p>不要哀求，学会争取。若是如此，终有所获。</p>\\n</div>\\n<h2> 要求</h2>\\n<figure><figcaption></figcaption></figure>\\n<h2> 代码</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\"># --*--coding:utf-8--*--</span>\\n<span class=\\"token comment\\"># Author: 村雨</span>\\n\\n<span class=\\"token keyword\\">import</span> pprint\\n\\nproductList <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Iphone 8'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n               <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'GTX2080'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">8000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n               <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Z7KP7-GT'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n               <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Mac pro'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">15000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n               <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Honor 10'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2800</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n               <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Iphone XR'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">12000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n               <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Mi 8'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2999</span><span class=\\"token punctuation\\">)</span>\\n               <span class=\\"token punctuation\\">]</span>\\n\\nshoppingList <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'输入你的工资:'</span><span class=\\"token punctuation\\">)</span>\\nsalary <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">input</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">if</span> <span class=\\"token keyword\\">not</span> salary<span class=\\"token punctuation\\">.</span>isdigit<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'请输入整数'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n    salary <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">(</span>salary<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">for</span> index<span class=\\"token punctuation\\">,</span> item <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">enumerate</span><span class=\\"token punctuation\\">(</span>productList<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n            <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>index <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> item<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'输入你要买的商品的序号：'</span><span class=\\"token punctuation\\">)</span>\\n        userWant <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">input</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">if</span> userWant<span class=\\"token punctuation\\">.</span>isdigit<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n            userWant <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">(</span>userWant<span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">if</span> userWant <span class=\\"token operator\\">&lt;=</span> <span class=\\"token builtin\\">len</span><span class=\\"token punctuation\\">(</span>productList<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">and</span> userWant <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span>\\n                <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'你要购买的是：'</span><span class=\\"token punctuation\\">,</span> productList<span class=\\"token punctuation\\">[</span>userWant <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n                <span class=\\"token keyword\\">if</span> salary <span class=\\"token operator\\">&gt;=</span> productList<span class=\\"token punctuation\\">[</span>userWant <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span>\\n                    shoppingList<span class=\\"token punctuation\\">.</span>append<span class=\\"token punctuation\\">(</span>productList<span class=\\"token punctuation\\">[</span>userWant <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n                    salary <span class=\\"token operator\\">-=</span> productList<span class=\\"token punctuation\\">[</span>userWant <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span>\\n                    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'你已经购买了'</span> <span class=\\"token operator\\">+</span> productList<span class=\\"token punctuation\\">[</span>userWant <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token string\\">', 你的余额为 '</span> <span class=\\"token operator\\">+</span> <span class=\\"token builtin\\">str</span><span class=\\"token punctuation\\">(</span>salary<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n                <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n                    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'对不起，你的余额不足！请努力工作吧！'</span><span class=\\"token punctuation\\">)</span>\\n                    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'你当前所购买的商品为：'</span><span class=\\"token punctuation\\">)</span>\\n                    <span class=\\"token keyword\\">for</span> brought <span class=\\"token keyword\\">in</span> shoppingList<span class=\\"token punctuation\\">:</span>\\n                        pprint<span class=\\"token punctuation\\">.</span>pprint<span class=\\"token punctuation\\">(</span>brought<span class=\\"token punctuation\\">)</span>\\n                    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'你当前余额为：'</span><span class=\\"token punctuation\\">,</span> salary<span class=\\"token punctuation\\">)</span>\\n                    exit<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n                <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'你输入的商品序号有错，请重新输入'</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">elif</span> userWant <span class=\\"token operator\\">==</span> <span class=\\"token string\\">'q'</span><span class=\\"token punctuation\\">:</span>\\n            <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'-----------Shopping List----------'</span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">for</span> brought <span class=\\"token keyword\\">in</span> shoppingList<span class=\\"token punctuation\\">:</span>\\n                pprint<span class=\\"token punctuation\\">.</span>pprint<span class=\\"token punctuation\\">(</span>brought<span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'你的余额为 '</span><span class=\\"token punctuation\\">,</span> salary<span class=\\"token punctuation\\">)</span>\\n            exit<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n            <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Invalid input！！！'</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"村雨遥","license":"著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处"},"autoDesc":true}`);export{n as data};
