var posts=["01/0101-aini/","01/0101-lianhualou/","01/0101-xianyu/","01/0102-jiandaochenxin/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };