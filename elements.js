(function(){
  window.app = window.app || {};
  window.app.View = {
    createProductsPage: createProductsPage,
    createPagination: createPagination,
    createFiltersList: createFiltersList
  };

//this could be added to a "helper.js" file, but I didn't want my files to be too many
  function createElement(tagName, attributes, content){
    var el = document.createElement(tagName);

    for (var key in attributes){
      el.setAttribute(key, attributes[key]);
    }

    if (typeof content !== "undefined"){
      if (content instanceof HTMLElement){
        el.appendChild(content);
      } else {
        el.innerText = content;
      }
    }

    return el;
  }

  function createProductsPage(productDesc, imgSrc, rankAverage, rankCount, productPrice){
    var container = createElement('div', {class:'product-1'},);
    var img = createElement('img',{class:'pic-cell', src: imgSrc, alt:'product-image'},);
    var description = createElement('p', {class:'description'}, productDesc);
    var rating = createElement('p',{class:'rating'},);
    var ratingStar = createElement('i', {class:'fas fa-star', id:'rate-star'},);
    var price = createElement('p', {class:'price'}, `${productPrice} تومان`)

    rating.appendChild(ratingStar);
    rating.innerHTML += `${rankAverage} (${rankCount})`;

    container.appendChild(img);
    container.appendChild(description);
    container.appendChild(rating);
    container.appendChild(price);

    return container;
  }

  function createPagination(totalItems, itemsPerPage, currentActivePage){
    var pageNumbers = Math.ceil(totalItems / itemsPerPage);

    var footer = document.querySelector('.pagination');
    var insertionNode = document.querySelector('.page-num');
    insertionNode.innerHTML = '';


    for (var i = 0; i < pageNumbers; i++){
      if ( i+1 === currentActivePage ){
        insertionNode.appendChild(createElement('li',{class:'active-num'}, createElement('button',{class:'active-num', 'data-page': i+1}, app.Utils.toPersianNum(i+1))));
      } else{
        insertionNode.appendChild(createElement('li',{}, createElement('button',{'data-page': i+1}, app.Utils.toPersianNum(i+1))));
      }
    }

    footer.appendChild(insertionNode);
  }


  function createFiltersList(activeFilter){
    var filters = { 
      mostViewed: 'پربازدید ترین',
      mostSold: 'پرفروش ترین ها',
      mostPopular: 'پرطرفدارترین ها',
      mostExpensive: 'گران ترین ها'
    };

    var filterListElement = document.getElementById('filters-ul');
    filterListElement.innerHTML = '';

    for (var key in filters){
      filterListElement.appendChild(
        createElement('li',{class: activeFilter === key ? 'selected' : '', 'data-filter': key}, createElement('a', {href: '#'}, filters[key])));
    }
  }

})(); 