var posts=["01/0101-aini/","01/0101-aiqinggongyu/","01/0101-haishanggangqinshi/","01/0101-lianhualou/","01/0101-xianyu/","01/0102-jiandaochenxin/","01/0103-mengqi30/","01/0105-labubu/","04/0401-dark-mode-night-eye/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };