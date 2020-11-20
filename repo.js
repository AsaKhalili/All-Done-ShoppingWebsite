(function(){
  window.app = window.app || {};

  window.app.products = [
    // {"id":1,"title":"گوشی موبایل سامسونگ مدل Galaxy S20 Ultra 5G SM-G988B/DS دو سیم کارت ظرفیت 128 گیگابایت","img":"https://dkstatics-public.digikala.com/digikala-products/121614556.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90","rankAverage":0.5,"rankCount":381,"price":257000,"views":787,"sold":296},{"id":2,"title":"ماسک تنفسی کد 2925 بسته 50 عددی","img":"https://dkstatics-public-2.digikala.com/digikala-products/110909552.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90","rankAverage":3.8,"rankCount":165,"price":8000,"views":847,"sold":364},{"id":3,"title":"گوشی موبایل شیائومی مدل Redmi Note 8 Pro m1906g7G دو سیم‌ کارت ظرفیت 64 گیگابایت","img":"https://dkstatics-public.digikala.com/digikala-products/114533958.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90","rankAverage":3.8,"rankCount":205,"price":897000,"views":578,"sold":678},{"id":4,"title":"گوشی موبایل هوآوی مدل P30 Pro VOG-L29 دو سیم کارت ظرفیت 256 گیگابایت","img":"https://dkstatics-public-2.digikala.com/digikala-products/110926758.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90","rankAverage":2.5,"rankCount":943,"price":706000,"views":246,"sold":222},{"id":5,"title":"گوشی موبایل شیائومی مدل Redmi Note 9 Pro M2003J6B2G دو سیم‌ کارت ظرفیت 64 گیگابایت","img":"https://dkstatics-public.digikala.com/digikala-products/9236d53437d221c908f3ea53a0ae4d5f165ea8e9_1594729254.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90","rankAverage":4.7,"rankCount":95,"price":917000,"views":785,"sold":527}
  ];

  window.app.Repository = {
    numProductsPerPage: numProductsPerPage,
    mostViewdProductsSorted: mostViewdProductsSorted,
    mostBoughtProducts: mostBoughtProducts,
    mostPopularProducts: mostPopularProducts,
    mostExpensiveProducts: mostExpensiveProducts
  };

//I did not use a "compare" function because I think this code looks beautiful! 
  function numProductsPerPage(pageNum){
    return app.products.slice((pageNum-1) * 16 , pageNum * 16); //0 - 16 page 1, 16 - 32 page 2, etc 
  };

  function mostViewdProductsSorted(pageNum){
    return app.products.sort((a,b) => b.views - a.views).slice((pageNum-1) * 16 , pageNum * 16);
  };

  function mostBoughtProducts(pageNum){
    return app.products.sort((a,b) => b.sold - a.sold).slice((pageNum-1) * 16 , pageNum * 16);
  };
  function mostPopularProducts(pageNum){
    return app.products.sort((a,b) => b.rankAverage - a.rankAverage).slice((pageNum-1) * 16 , pageNum * 16);
  };
  function mostExpensiveProducts(pageNum){
    return app.products.sort((a,b) => b.price - a.price).slice((pageNum-1) * 16 , pageNum * 16);
  };

})();