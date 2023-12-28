(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{30:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a,s=c(7),r=c(25),n=c.n(r),o=c(1),i=c(3);c(30);!function(e){e.left="left",e.right="right",e.top="up"}(a||(a={}));var l=c(6),u=c.n(l),d=c(0),j=function(e){var t=e.direction,c=e.buttonExtraClass,a=e.onClick,s=e.disabled,r=e.dataCy,n="img/arrows/arrow-".concat(t).concat(s?"-disabled":"",".svg"),o="Arrow ".concat(t),i=u()("arrow",{"arrow--disabled":s},c);return Object(d.jsx)("button",{className:i,type:"button",onClick:a,disabled:s,"data-cy":r,children:Object(d.jsx)("img",{className:"arrow__img",src:n,alt:o})})};j.defaultProps={buttonExtraClass:"",disabled:!1,dataCy:""};var b=function(e){var t=e.imageClasses;return Object(d.jsx)("img",{src:"img/logo.svg",alt:"Logo",className:t})},m=function(e){var t=e.hasTopNav,c=void 0===t||t,s=function(){return window.scrollTo(1440,0)};return Object(d.jsxs)("footer",{className:"home__footer footer",children:[Object(d.jsxs)("div",{className:"footer__left",children:[Object(d.jsx)(b,{imageClasses:"footer__logo logo"}),Object(d.jsxs)("div",{className:"footer__links",children:[Object(d.jsx)("a",{className:"footer__link",href:"https://github.com/AmadeuszAndroid/react_phone-catalog/tree/develop",children:"Github"}),Object(d.jsx)("a",{className:"footer__link",href:"#/",children:"Contacts"}),Object(d.jsx)("a",{className:"footer__link",href:"#/",children:"rights"})]})]}),c&&Object(d.jsxs)("nav",{className:"footer__top-nav",children:[Object(d.jsx)("button",{className:"footer__top-link-text",type:"button",onClick:s,children:"Back to top"}),Object(d.jsx)(j,{direction:a.top,onClick:s})]})]})};m.defaultProps={hasTopNav:!0};var h="/phones",p="/tablets",O="/accessories",x="/favorites",f="/cart",v="/product",_=function(e){var t=e.count;return Object(d.jsx)("div",{className:"image-link__counter counter",children:Object(d.jsx)("span",{className:"counter__text",children:t})})},g=function(e){var t=e.link,c=e.imageSource,a=e.alternativeName,r=e.itemsCount;return Object(d.jsxs)(s.c,{className:"image-link",to:t,children:[Object(d.jsx)("img",{className:"image-link__icon",src:c,alt:a}),-1!==r&&Object(d.jsx)(_,{count:r})]})},N=function(e){var t=e.count,c=void 0===t?-1:t;return Object(d.jsx)(g,{alternativeName:"Cart",imageSource:"img/header/cart.svg",link:f,itemsCount:c})};N.defaultProps={count:-1};var y,C=function(e){var t=e.count,c=void 0===t?-1:t;return Object(d.jsx)(g,{alternativeName:"Favourites",imageSource:"img/header/favourites.svg",link:x,itemsCount:c})};C.defaultProps={count:-1},function(e){e.phone="phone",e.tablet="tablet",e.accessories="accessory",e.all="all"}(y||(y={}));var w=function(e){var t=e.activeCategory,c=u()("nav__link",{active:t===y.phone}),a=u()("nav__link",{active:t===y.tablet}),r=u()("nav__link",{active:t===y.accessories});return Object(d.jsxs)("nav",{className:"nav",children:[Object(d.jsx)(s.c,{className:"nav__link",to:"/",children:"home"}),Object(d.jsx)(s.c,{className:c,to:h,children:"phones"}),Object(d.jsx)(s.c,{className:a,to:p,children:"tablets"}),Object(d.jsx)(s.c,{className:r,to:O,children:"accessories"})]})};w.defaultProps={activeCategory:-1};var k=c(4),P="query",S="page",F=function(e){var t,c=e.currentPage,a=Object(s.d)(),r=Object(k.a)(a,2),n=r[0],i=r[1],l=Object(o.useRef)(null),u=n.get(P),j="Search in ".concat(c,"..."),b=function(){n.delete(P),i(n)};return Object(o.useEffect)((function(){var e=l.current;null!==e&&(e.value=u||"")}),[u]),Object(d.jsxs)("div",{className:"search",children:[n.get(P)?Object(d.jsx)("button",{onClick:b,type:"button",className:"search__close","data-cy":"searchDelete",children:Object(d.jsx)("img",{src:"img/header/search/close.svg",alt:"Clear search"})}):Object(d.jsx)("label",{className:"search__label",htmlFor:"search",children:Object(d.jsx)("img",{src:"img/header/search/search.svg",alt:"Search"})}),Object(d.jsx)("input",{id:"search",className:"search__input",type:"text",placeholder:j,onChange:function(e){var c=e.target.value;clearTimeout(t),t=+setTimeout((function(){c?(n.set(P,c),null!==n.get(S)&&n.set(S,"1"),i(n)):b()}),1e3)},ref:l})]})},T=function(e){var t=e.hasSearch,c=e.currentPage,a=void 0===c?"":c,s=e.favoritesCount,r=e.cartCount,n=e.hasNav,o=e.hasFavorites,i=e.activeCategory;return Object(d.jsxs)("header",{id:"header",className:"header",children:[Object(d.jsxs)("div",{className:"header__part header__part--left",children:[Object(d.jsx)(b,{imageClasses:"header__logo logo"}),n&&Object(d.jsx)(w,{activeCategory:i})]}),Object(d.jsxs)("div",{className:"header__part",children:[t&&Object(d.jsx)(F,{currentPage:a}),o&&Object(d.jsx)(C,{count:s}),Object(d.jsx)(N,{count:r})]})]})};T.defaultProps={favoritesCount:-1,cartCount:-1,currentPage:"",hasNav:!0,hasFavorites:!0,activeCategory:y.all};var B=function(e){var t=e.children,c=e.extraClassName,a=u()("title",c);return Object(d.jsx)("h1",{className:a,children:t})};B.defaultProps={extraClassName:""};var E=function(e){var t=e.name,c=e.imagePath,a=e.productsCount,s="".concat(a," models");return Object(d.jsxs)("div",{className:"category",children:[Object(d.jsx)("img",{className:"category__image",src:c,alt:t}),Object(d.jsx)("h3",{className:"category__name",children:t}),Object(d.jsx)("p",{className:"category__count",children:s})]})},A=c(15),I="https://mate-academy.github.io/react_phone-catalog/api/products.json";function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.all;return fetch(I).then((function(e){return e.json()})).then((function(t){var c=t.map((function(e){var t=e.price,c=t*e.discount/100;return Object(A.a)(Object(A.a)({},e),{},{discountedPrice:+(t-c).toFixed(2)})}));return e===y.all?c:c.filter((function(t){return t.type===e}))}))}function q(e){return e.price*e.discount/100}var M,D=function(){var e=Object(o.useState)([]),t=Object(k.a)(e,2),c=t[0],a=t[1];function r(e){return c.filter((function(t){return t.type===e})).length}var n=r(y.phone),i=r(y.tablet),l=r(y.accessories);return Object(o.useEffect)((function(){R().then(a)}),[]),Object(d.jsxs)("div",{className:"home__categories shop-by-category",children:[Object(d.jsx)(B,{children:"Shop by category"}),Object(d.jsxs)("div",{"data-cy":"categoryLinksContainer",className:"shop-by-category__categories",children:[Object(d.jsx)(s.b,{className:"shop-by-category__link",to:"phones",children:Object(d.jsx)(E,{imagePath:"img/home/categories/mobile-phones.png",name:"Mobile phones",productsCount:n})}),Object(d.jsx)(s.b,{className:"shop-by-category__link",to:"tablets",children:Object(d.jsx)(E,{imagePath:"img/home/categories/tablets.png",name:"Tablets",productsCount:i})}),Object(d.jsx)(s.b,{className:"shop-by-category__link",to:"accessories",children:Object(d.jsx)(E,{imagePath:"img/home/categories/accessories.png",name:"Accessories",productsCount:l})})]})]})},L=function(e){var t=e.src,c=e.alt;return Object(d.jsx)("li",{className:"category-slider-image",children:Object(d.jsx)("img",{className:"category-slider-image__banner",src:t,alt:c})})};!function(e){e[e.phones=0]="phones",e[e.tablets=1]="tablets",e[e.accessories=2]="accessories"}(M||(M={}));var Q=function(){var e=Object(o.useState)(0),t=Object(k.a)(e,2),c=t[0],s=t[1],r=["phones","tablets","accessories"].map((function(e){return{src:"img/home/slider/banner-".concat(e,".png"),alt:e}})),n=c===M.tablets,i=c===M.accessories,l=u()("categories-slider__images",{"categories-slider__images--1":n,"categories-slider__images--2":i}),b=u()("categories-slider__bar",{"categories-slider__bar--visible":0===c}),m=u()("categories-slider__bar",{"categories-slider__bar--visible":1===c}),h=u()("categories-slider__bar",{"categories-slider__bar--visible":2===c}),p=function(){var e;e=c===M.accessories?M.phones:c+1,s(e)};return Object(o.useEffect)((function(){var e=setInterval((function(){return p()}),5e3);return function(){return clearInterval(e)}}),[c]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"home__categories-slider categories-slider",children:[Object(d.jsx)(j,{direction:a.left,buttonExtraClass:"categories-slider__nav",onClick:function(){var e;e=c===M.phones?M.accessories:c-1,s(e)}}),Object(d.jsx)("div",{className:"categories-slider__content",children:Object(d.jsx)("ul",{className:l,children:r.map((function(e){var t=e.src,c=e.alt;return Object(d.jsx)(L,{alt:c,src:t},c)}))})}),Object(d.jsx)(j,{direction:a.right,buttonExtraClass:"categories-slider__nav",onClick:p})]}),Object(d.jsxs)("div",{className:"categories-slider__bars",children:[Object(d.jsx)("div",{className:b}),Object(d.jsx)("div",{className:m}),Object(d.jsx)("div",{className:h})]})]})},$=function(e){var t=e.children,c="$".concat(t);return Object(d.jsx)("h2",{className:"old-price",children:c})},J=c(10);function z(e){var t=function(){var t=localStorage.getItem(e);return"string"===typeof t?JSON.parse(t):[]},c=Object(o.useState)(t),a=Object(k.a)(c,2),s=a[0],r=a[1];return[t,function(t){r(t),localStorage.setItem(e,JSON.stringify(t))},function(e){return s.some((function(t){return"id"in t?t.id===e:t.product.id===e}))},s.length]}var U="cart",G=Object(o.createContext)({increment:function(){},decrement:function(){}}),Y=function(e){var t=e.product,c=e.areBig,a=z(U),s=Object(k.a)(a,3),r=s[0],n=s[1],i=s[2],l=z("favorites"),j=Object(k.a)(l,3),b=j[0],m=j[1],h=j[2],p=Object(o.useContext)(G),O=p.increment,x=p.decrement,f=t.id,v=i(f),_=u()("product-buttons__cart",{"product-buttons__cart--clicked":v,"product-buttons__cart--big":c}),g=u()("product-buttons__cart-text",{"product-buttons__cart-text--clicked":v}),N=v?"Added to cart":"Add to cart",y=u()("product-buttons__favorites",{"product-buttons__favorites--big":c}),C=h(f)?"img/favorites/heart-selected.svg":"img/favorites/heart.svg";return Object(d.jsxs)("div",{className:"product-buttons",children:[Object(d.jsx)("button",{className:_,type:"button",onClick:function(){if(!i(f)){var e={product:t,quantity:1};n([].concat(Object(J.a)(r()),[e]))}},children:Object(d.jsx)("div",{className:g,children:N})}),Object(d.jsx)("button",{className:y,type:"button",onClick:function(){h(f)?(m(Object(J.a)(b().filter((function(e){return"id"in e?e.id!==f:e.product.id!==f})))),x()):(m([].concat(Object(J.a)(b()),[t])),O())},"data-cy":"addToFavorite",children:Object(d.jsx)("img",{className:"product-buttons__heart",src:C,alt:"Add to favorites"})})]})};function H(e){return""===e?"":"".concat(e.split("MB")[0]," ","MB")}function W(e){return""===e?"":e.replace(" inches","\u201d")}Y.defaultProps={areBig:!1};var K=function(e){var t=e.name,c=e.value,a=e.isBig,s=u()("product-spec__name",{"product-spec__name--big":a}),r=u()("product-spec__value",{"product-spec__value--big":a,"product-spec__value--small":!a});return Object(d.jsxs)("div",{className:"product-spec",children:[Object(d.jsx)("div",{className:s,children:t}),Object(d.jsx)("div",{className:r,children:c})]})};K.defaultProps={isBig:!1};var V,X=function(e){var t=e.specs,c=e.isBig,a=e.listClasses;return Object(d.jsx)("ul",{className:a,children:t.map((function(e){var t=e.name,a=e.value;if(a)return Object(d.jsx)(K,{name:t,value:a,isBig:c},t)}))})},Z=function(e){var t=e.product,c=t.imageUrl,a=t.name,r=t.price,n=t.discountedPrice,o=t.screen,i=t.capacity,l=t.ram,u=t.id,j="$".concat(n),b=W(o),m=H(i),h=H(l),p="".concat(v,"/").concat(u),O=[{name:"Screen",value:b},{name:"Capacity",value:m},{name:"Ram",value:h}];return Object(d.jsxs)("li",{className:"product-card",children:[Object(d.jsxs)(s.b,{className:"product-card__link",to:p,children:[Object(d.jsx)("img",{className:"product-card__image",src:c,alt:"Product"}),Object(d.jsx)("p",{className:"product-card__name",children:a}),Object(d.jsxs)("div",{className:"product-card__prices",children:[Object(d.jsx)("h2",{className:"product-card__current-price",children:j}),n<r&&Object(d.jsx)($,{children:r})]}),Object(d.jsx)(X,{isBig:!1,listClasses:"product-card__details",specs:O})]}),Object(d.jsx)("div",{className:"product-card__buttons",children:Object(d.jsx)(Y,{product:t})})]})},ee=function(e){var t=e.products;return Object(d.jsx)("ul",{"data-cy":"cardsContainer",className:"products-slider__cards",children:t.map((function(e){return Object(d.jsx)(Z,{product:e},e.id)}))})};!function(e){e[e.hotProducts=0]="hotProducts",e[e.newProducts=1]="newProducts",e[e.random=2]="random"}(V||(V={}));var te=function(e){var t=e.type,c=e.children,s=e.withoutId,r=void 0===s?"":s,n=Object(o.useState)([]),i=Object(k.a)(n,2),l=i[0],b=i[1],m=Object(o.useState)(0),h=Object(k.a)(m,2),p=h[0],O=h[1],x=l.slice(p,4+p),f=0===p,v=p+4===l.length,_=u()("products-slider",{"home__products-slider--down":t===V.newProducts,"home__products-slider--up":t===V.hotProducts,"product-details__slider":t===V.random});return Object(o.useEffect)((function(){switch(t){case V.newProducts:return void R().then((function(e){return e.filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price}))})).then(b);case V.random:return void function(e){return R().then((function(t){for(var c=t.filter((function(t){return t.id!==e})),a=[],s=function(){var e=Math.floor(Math.random()*c.length),t=c[e];a.push(t),c=c.filter((function(e){return e.id!==t.id}))};c.length;)s();return a}))}(r).then(b);case V.hotProducts:default:R().then((function(e){return e.filter((function(e){return e.discount>0})).sort((function(e,t){return q(t)-q(e)}))})).then(b)}}),[r]),Object(d.jsxs)("div",{className:_,children:[Object(d.jsxs)("div",{className:"products-slider__header",children:[Object(d.jsx)(B,{children:c}),Object(d.jsxs)("div",{className:"cardsContainer__arrows",children:[Object(d.jsx)(j,{direction:a.left,onClick:function(){p>0&&O(p-1)},disabled:f}),Object(d.jsx)(j,{direction:a.right,onClick:function(){p+4<l.length&&O(p+1)},disabled:v})]})]}),Object(d.jsx)(ee,{products:x})]})};te.defaultProps={withoutId:""};var ce,ae=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T,{hasSearch:!1,currentPage:"home"}),Object(d.jsxs)("main",{className:"home",children:[Object(d.jsx)(Q,{}),Object(d.jsx)(te,{type:V.hotProducts,children:"Hot prices"}),Object(d.jsx)(D,{}),Object(d.jsx)(te,{type:V.newProducts,children:"Brand new models"})]}),Object(d.jsx)(m,{})]})};!function(e){e.features="dropdown-features",e.pages="dropdown-pages"}(ce||(ce={}));var se="query",re="page",ne="perPage",oe="sort",ie=function(e){var t=e.path;return Object(d.jsxs)("div",{"data-cy":"breadCrumbs",className:"products__breadcrumbs breadcrumbs",children:[Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("img",{className:"breadcrumbs__home",src:"img/home-breadcrumbs.svg",alt:"home"})}),t.map((function(e,c){var a=e.link,r=e.text;return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)("img",{className:"breadcrumbs__image",src:"img/arrows/arrow-right-breadcrumbs.svg",alt:"Arrow right"}),c===t.length-1?Object(d.jsx)("p",{className:"breadcrumbs__text",children:r}):Object(d.jsx)(s.b,{to:a||"",children:Object(d.jsx)("span",{className:"breadcrumbs__text breadcrumbs__link",children:r})})]},a+r)}))]})},le=function(){return Object(d.jsx)(B,{children:"No search products found"})},ue=function(e){var t=e.countText,c=e.extraClasses,a=u()("products-count",c);return Object(d.jsx)("p",{className:a,children:t})},de=function(e){var t=e.products;return Object(d.jsx)("ul",{className:"products__list products-list","data-cy":"productList",children:t.map((function(e){return Object(d.jsx)(Z,{product:e},e.id)}))})},je=function(e){var t,c=e.id,a=e.description,r=e.options,n=Object(o.useState)(!1),i=Object(k.a)(n,2),l=i[0],j=i[1],b=Object(o.useState)(-1),m=Object(k.a)(b,2),h=m[0],p=m[1],O=Object(o.useState)(!1),x=Object(k.a)(O,2),f=x[0],v=x[1],_=Object(o.useState)(!1),g=Object(k.a)(_,2),N=g[0],y=g[1],C=Object(s.d)(),w=Object(k.a)(C,2),P=w[0],S=w[1],F=Object(o.useRef)(null),T=Object(o.useRef)(null),B=Object(o.useRef)(null),E=Object(o.useRef)(null),A=u()("dropdown__select",{"dropdown__select--big":c===ce.features,"dropdown__select--small":c===ce.pages}),I=u()("dropdown__arrow-icon",{"dropdown__arrow-icon--big":c===ce.features,"dropdown__arrow-icon--small":c===ce.pages}),R=u()("dropdown__list",{"dropdown__list--big":c===ce.features,"dropdown__list--small":c===ce.pages}),q="img/arrows/arrow-".concat(l?"up":"down","-dropdown.svg"),M=c===ce.features?oe:ne,D=P.get(M),L=null===(t=r.find((function(e){return e.value===D})))||void 0===t?void 0:t.text,Q=function(){f||j(!l)},$=function(e){j(!1);var t=c===ce.features?oe:ne;P.set(t,e),t===ne&&("all"===e?P.delete(re):P.set(re,"1")),S(P)},J=function(){N||(v(!0),j(!1),p(-1),window.setTimeout((function(){return v(!1)}),500))};null===P.get(M)&&(P.set(M,r[0].value),S(P));var z=function(e){y(!0);var t=e.key,a="ArrowUp"===t,s="ArrowDown"===t,n="Enter"===t,o="Escape"===t,i=c===ce.pages;if(l&&(a||s||n||o)){switch(e.preventDefault(),h){case 0:var u;if(s)null===(u=T.current)||void 0===u||u.focus(),p((function(e){return e+1}));break;case 1:var d;if(a)null===(d=F.current)||void 0===d||d.focus(),p((function(e){return e-1}));else if(s){var j;null===(j=B.current)||void 0===j||j.focus(),p((function(e){return e+1}))}break;case 2:var b;if(a)null===(b=T.current)||void 0===b||b.focus(),p((function(e){return e-1}));else if(s&&i){var m;null===(m=E.current)||void 0===m||m.focus(),p((function(e){return e+1}))}break;case 3:var O;if(a&&i)null===(O=B.current)||void 0===O||O.focus(),p((function(e){return e-1}))}n&&$(r[h].value),o&&Q()}y(!1)};return Object(o.useEffect)((function(){var e;l&&(p(0),null!==F&&(null===(e=F.current)||void 0===e||e.focus()))}),[l]),Object(o.useEffect)((function(){return window.addEventListener("keydown",z),function(){window.removeEventListener("keydown",z)}}),[l,h]),Object(d.jsxs)("div",{className:"dropdown",children:[Object(d.jsx)("p",{className:"dropdown__title",children:a}),Object(d.jsxs)("button",{className:A,type:"button",onClick:Q,children:[Object(d.jsx)("div",{className:"dropdown__select-content",children:Object(d.jsx)("p",{className:"dropdown__select-text",children:L})}),Object(d.jsx)("img",{className:I,src:q,alt:"Dropdown arrow"})]}),l&&Object(d.jsx)("div",{className:R,children:r.map((function(e,t){var c,a=e.text,s=e.value;switch(t){case 1:c=T;break;case 2:c=B;break;case 3:c=E;break;default:c=F}return Object(d.jsx)("button",{className:"dropdown__option",value:s,type:"button",onMouseDown:function(){return $(s)},ref:c,onBlur:J,children:a},a)}))})]})},be=function(){return Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)("div",{className:"loader__content"})})},me=function(e){var t=e.categoryName,c="".concat(t," not found");return Object(d.jsx)(B,{children:c})},he=function(e){var t=e.pageNumber,c=e.isSelected,a=e.onClick,s=u()("page",{page__active:c});return Object(d.jsx)("button",{type:"button",className:s,onClick:function(){return a(t)},disabled:c,children:t})},pe=function(e){for(var t=e.total,c=e.perPage,s=e.currentPage,r=void 0===s?1:s,n=e.onPageChange,o=[1],i=2;i<=Math.ceil(t/c);i+=1)o.push(i);return Object(d.jsxs)("div",{className:"products__pagination pagination","data-cy":"pagination",children:[Object(d.jsx)(j,{direction:a.left,onClick:function(){return n(r-1)},disabled:1===r,dataCy:"paginationLeft"}),Object(d.jsx)("ul",{className:"pagination__pages",children:o.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(he,{pageNumber:e,isSelected:e===r,onClick:n})},Date.now()+e)}))}),Object(d.jsx)(j,{direction:a.right,onClick:function(){return n(r+1)},disabled:r===o.length,dataCy:"paginationRight"})]})};pe.defaultProps={currentPage:1};var Oe=function(e){var t,c,a,r,n,i,l=e.categoryType,j=Object(o.useState)(null),b=Object(k.a)(j,2),h=b[0],p=b[1],O=Object(o.useState)(0),x=Object(k.a)(O,2),f=x[0],v=x[1],_=Object(o.useState)(0),g=Object(k.a)(_,2),N=g[0],C=g[1],w=Object(s.d)(),P=Object(k.a)(w,2),S=P[0],F=P[1],E=null===(t=S.get(se))||void 0===t?void 0:t.toLowerCase(),A=S.get(oe),I=S.get(ne),q=+(S.get(re)||1),M=(null===h||void 0===h?void 0:h.length)||0;switch(l){case y.tablet:c="tablets",a="Tablets",r=R(y.tablet),n="Tablets";break;case y.accessories:c="accesories",a="Accessories",r=R(y.accessories),n="Accessories";break;default:case y.phone:c="phones",a="Phones",r=R(y.phone),n="Mobile phones"}var D=["age","name","price"],L=["all","4","8","16"],Q=f>=+L[1],$=[{text:"Newest",value:D[0]},{text:"Alphabetically",value:D[1]},{text:"Cheapest",value:D[2]}],z=u()("products__count",{"products__count--query":E}),U=L.map((function(e){return{text:e,value:e}}));i=I===L[0]?M:+(I||M);var G,Y=[{text:a}];G=E?"".concat(f," result").concat(1===f?"":"s"):"".concat(f," model").concat(1===f?"":"s");var H=I!==L[0]&&f>=i&&Q,W=null===S.get(re)||Number.isInteger(q)&&q>0&&q<=Math.ceil(f/i),K=!f&&E||A&&!D.includes(A)||I&&!L.includes(I)||!W;return Object(o.useEffect)((function(){null===S.get(ne)&&S.set(ne,L[0]),null===S.get(oe)&&S.set(oe,D[0]),F(S)}),[]),Object(o.useEffect)((function(){r.then((function(e){C(e.length);var t=Object(J.a)(e);if(E&&(t=e.filter((function(e){return e.name.toLowerCase().includes(E)}))),v(t.length),t.sort((function(e,t){switch(A){case"price":return e.price-t.price;default:case"name":return e.name.localeCompare(t.name);case"age":return e.age-t.age}})),I&&I!==L[0]){var c=(q-1)*i,a=q*i-1;p(t.filter((function(e,t){return t>=c&&t<=a})))}else p(t)}))}),[E,A,q,I]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T,{hasSearch:!0,currentPage:c}),null===h?Object(d.jsx)(be,{}):Object(d.jsxs)("main",{className:"products",children:[!E&&Object(d.jsx)(ie,{path:Y}),K||!N?Object(d.jsx)("div",{className:"products__no-results",children:N?Object(d.jsx)(le,{}):Object(d.jsx)(me,{categoryName:n})}):Object(d.jsxs)(d.Fragment,{children:[!E&&Object(d.jsx)(B,{extraClassName:"products__title",children:n}),Object(d.jsx)(ue,{countText:G,extraClasses:z}),Q&&Object(d.jsxs)("div",{className:"products__filters",children:[Object(d.jsx)(je,{id:ce.features,description:"Sort by",options:$}),Object(d.jsx)(je,{id:ce.pages,description:"Items on page",options:U})]}),M&&Object(d.jsx)(de,{products:h}),H&&Object(d.jsx)(pe,{onPageChange:function(e){S.set(re,e.toString()),F(S)},perPage:i,currentPage:q,total:f})]})]}),Object(d.jsx)(m,{})]})},xe=function(){return Object(d.jsx)(Oe,{categoryType:y.phone})},fe=function(){return Object(d.jsx)(Oe,{categoryType:y.tablet})},ve=function(){return Object(d.jsx)(Oe,{categoryType:y.accessories})},_e=function(){var e,t=z("favorites"),c=Object(k.a)(t,1)[0],a=Object(s.d)(),r=null===(e=Object(k.a)(a,1)[0].get(se))||void 0===e?void 0:e.toLowerCase(),n=Object(o.useState)(c()),i=Object(k.a)(n,2),l=i[0],j=i[1],b=Object(o.useState)(l.length),h=Object(k.a)(b,2),p=h[0],O=h[1],x=r?"result":"item",f="".concat(p," ").concat(x).concat(1===p?"":"s"),v=u()("favorites__count",{"favorites__count--query":r});return Object(o.useEffect)((function(){var e;e=r?c().filter((function(e){return e.name.toLowerCase().includes(r)})):c(),j(e),O(e.length)}),[r,p]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(G.Provider,{value:{increment:function(){return O((function(e){return e+1}))},decrement:function(){return O((function(e){return e-1}))}},children:[Object(d.jsx)(T,{hasSearch:!0,currentPage:"favourites",favoritesCount:p}),Object(d.jsx)("main",{className:"favorites",children:p?Object(d.jsxs)(d.Fragment,{children:[!r&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ie,{path:[{text:"Favourites"}]}),Object(d.jsx)(B,{extraClassName:"favorites__title",children:"Favourites"})]}),Object(d.jsx)(ue,{countText:f,extraClasses:v}),Object(d.jsx)(de,{products:l})]}):Object(d.jsx)("div",{className:"favorites__no-search",children:r?Object(d.jsx)(le,{}):Object(d.jsx)(me,{categoryName:"Favorites"})})})]}),Object(d.jsx)(m,{})]})},ge=function(e){var t=e.extraClass,c=u()("back",t),a=Object(i.o)();return Object(d.jsxs)("button",{className:c,type:"button",onClick:function(){return a(-1)},"data-cy":"backButton",children:[Object(d.jsx)("img",{className:"back__image",src:"img/arrows/arrow-left.svg",alt:"Arrow left"}),Object(d.jsx)("p",{className:"back__text",children:"Back"})]})},Ne=function(e){var t=e.productInCart,c=t.product,a=t.quantity,s=e.onRemoveClick,r=e.onQuantityClick,n=c.imageUrl,o=c.name,i=c.discountedPrice,l=c.id,u="$".concat(+(i*a).toFixed(2));return Object(d.jsxs)("li",{className:"cart-item",children:[Object(d.jsx)("button",{type:"button",className:"cart-item__remove-button","data-cy":"cartDeleteButton",onClick:function(){return s(l)},children:Object(d.jsx)("img",{className:"cart-item__remove-icon",src:"img/cart/close.svg",alt:"Delete item"})}),Object(d.jsx)("img",{className:"cart-item__product-image",src:n,alt:"Product"}),Object(d.jsx)("p",{className:"cart-item__product-name",children:o}),Object(d.jsx)("button",{className:"cart-item__minus",type:"button",disabled:1===a,onClick:function(){return r(l,!0)},children:"-"}),Object(d.jsx)("div",{"data-cy":"productQauntity",className:"cart-item__quantity",children:a}),Object(d.jsx)("button",{className:"cart-item__plus",type:"button",onClick:function(){return r(l,!1)},children:"+"}),Object(d.jsx)("span",{className:"cart-item__total-price",children:u})]})},ye=function(e){var t=e.productsInCart,c=e.onRemoveClick,a=e.onQuantityClick;return Object(d.jsx)("ul",{className:"cart-items",children:t.map((function(e){var t=e.product.id;return Object(d.jsx)(Ne,{productInCart:e,onRemoveClick:c,onQuantityClick:a},t)}))})},Ce=function(){var e=z(U),t=Object(k.a)(e,4),c=t[0],a=t[1],s=t[3],r=Object(o.useState)(!1),n=Object(k.a)(r,2),i=n[0],l=n[1],u=c(),j=u.reduce((function(e,t){var c=t.quantity;return e+t.product.discountedPrice*c}),0),b="$".concat(+j.toFixed(2)),h=u.reduce((function(e,t){return e+t.quantity}),0),p="Total for ".concat(h," item").concat(1===h?"":"s"),O=0===s;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T,{hasSearch:!1,hasNav:!1,hasFavorites:!1,cartCount:h}),Object(d.jsxs)("main",{className:"cart",children:[Object(d.jsx)(ge,{extraClass:"cart__back"}),O?Object(d.jsx)(B,{extraClassName:"cart__title",children:"Your cart is empty"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(B,{extraClassName:"cart__title",children:"Cart"}),Object(d.jsxs)("div",{className:"cart__content",children:[Object(d.jsx)("div",{className:"cart__items",children:Object(d.jsx)(ye,{productsInCart:u,onRemoveClick:function(e){a(u.filter((function(t){return t.product.id!==e})))},onQuantityClick:function(e,t){a(u.map((function(c){var a=Object(A.a)({},c),s=c.product,r=c.quantity;return s.id===e&&(t?r>1&&(a.quantity-=1):a.quantity+=1),Object(A.a)({},a)})))}})}),Object(d.jsxs)("div",{className:"cart__summary-wrapper",children:[Object(d.jsxs)("div",{className:"cart__summary",children:[Object(d.jsx)(B,{extraClassName:"cart__total-price",children:b}),Object(d.jsx)("p",{className:"cart__count-text",children:p}),Object(d.jsx)("button",{type:"button",className:"cart__checkout-button",onClick:function(){l(!0)},children:Object(d.jsx)("div",{className:"cart__checkout-button-text",children:"Checkout"})})]}),i&&Object(d.jsx)("p",{children:"We are sorry, but this feature is not implemented yet"})]})]})]})]}),Object(d.jsx)(m,{hasTopNav:!1})]})},we=function(e){var t=e.imageSource,c=e.isSelected,a=e.index,s=e.onClick,r=u()("small-photo",{"small-photo--selected":c});return Object(d.jsx)("button",{type:"button",className:r,onClick:function(){return s(a)},children:Object(d.jsx)("img",{className:"small-photo__picture",src:t,alt:"Small product"})})},ke=function(e){var t=e.children;return Object(d.jsx)("h2",{className:"subtitle",children:t})},Pe=function(){var e,t,c=Object(o.useState)(!1),a=Object(k.a)(c,2),s=a[0],r=a[1],n=Object(o.useState)(null),l=Object(k.a)(n,2),j=l[0],b=l[1],x=Object(o.useState)(null),f=Object(k.a)(x,2),v=f[0],_=f[1],g=Object(o.useState)(0),N=Object(k.a)(g,2),C=N[0],w=N[1],P=Object(i.q)().productId,S=(null===j||void 0===j?void 0:j.type)||y.all,F=[{name:"Screen",value:W((null===j||void 0===j?void 0:j.screen)||"")},{name:"Resolution",value:(null===v||void 0===v?void 0:v.display.screenResolution)||""},{name:"Processor",value:(null===v||void 0===v?void 0:v.hardware.cpu)||""},{name:"RAM",value:H((null===j||void 0===j?void 0:j.ram)||"")}],E=[].concat(F,[{name:"Built in memory",value:H((null===v||void 0===v?void 0:v.storage.flash)||"")},{name:"Camera",value:(null===v||void 0===v?void 0:v.camera.primary)||""},{name:"Cell",value:(null===v||void 0===v?void 0:v.connectivity.cell)||""}]),A="$".concat(null===j||void 0===j?void 0:j.discountedPrice);switch(S){case y.phone:e="Phones",t=h;break;case y.tablet:e="Tablets",t=p;break;case y.accessories:e="Accessories",t=O;break;default:e="",t=""}var I="ID: ".concat(function(e){switch(e){case"motorola-atrix-4g":return 802390;case"samsung-gem":return 802391;case"dell-venue":return 802392;case"nexus-s":return 802393;case"lg-axis":return 802394;case"samsung-showcase-a-galaxy-s-phone":return 802395;case"droid-2-global-by-motorola":return 802396;case"droid-pro-by-motorola":return 802397;case"motorola-bravo-with-motoblur":return 802398;case"motorola-defy-with-motoblur":case"t-mobile-mytouch-4g":return 802399;case"samsung-mesmerize-a-galaxy-s-phone":return 802400;case"sanyo-zio":return 802401;case"samsung-transform":return 802402;case"t-mobile-g2":return 802403;case"motorola-charm-with-motoblur":return 802404;case"motorola-xoom-with-wi-fi":return 802405;case"motorola-xoom":return 802406;case"dell-streak-7":return 802407;case"samsung-galaxy-tab":return 802408;default:return 0}}(null===j||void 0===j?void 0:j.id)),q=[{text:e,link:t},{text:(null===j||void 0===j?void 0:j.name)||""}],M=u()("product-details__specs","product-details__specs--up"),D=u()("product-details__specs","product-details__specs--down"),L=function(e){return w(e)};return Object(o.useEffect)((function(){R().then((function(e){b(e.find((function(e){return e.id===P}))||null)})),function(e){if(!e)throw new Error("Product not found");var t="https://mate-academy.github.io/react_phone-catalog/api/products/".concat(e,".json");return fetch(t).then((function(e){return e.json()}))}(P).then(_).catch((function(){return r(!0)}))}),[P]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T,{hasSearch:!1,activeCategory:S}),null!==j&&null!==v?Object(d.jsxs)("main",{className:"product-details",children:[Object(d.jsx)(ie,{path:q}),Object(d.jsx)(ge,{extraClass:"product-details__back"}),Object(d.jsx)(B,{extraClassName:"product-details__title",children:j.name}),Object(d.jsxs)("section",{className:"product-details__content-up",children:[Object(d.jsx)("ul",{className:"product-details__small-photos",children:v.images.map((function(e,t){var c=t===C;return Object(d.jsx)("li",{children:Object(d.jsx)(we,{isSelected:c,imageSource:e,index:t,onClick:L})},e)}))}),Object(d.jsx)("img",{className:"product-details__big-photo",src:v.images[C],alt:"Selected"}),Object(d.jsxs)("div",{className:"product-details__up-details",children:[Object(d.jsxs)("div",{className:"product-details__prices",children:[Object(d.jsx)(B,{children:A}),!!j.discount&&Object(d.jsx)($,{children:j.price})]}),Object(d.jsx)("div",{className:"product-details__buttons",children:Object(d.jsx)(Y,{product:j,areBig:!0})}),Object(d.jsx)(X,{isBig:!1,listClasses:M,specs:F})]}),Object(d.jsx)("p",{className:"product-details__id",children:I})]}),Object(d.jsxs)("section",{className:"product-details__content-down",children:[Object(d.jsxs)("div",{className:"product-details__content-down-left",children:[Object(d.jsx)(ke,{children:"About"}),Object(d.jsx)("article",{className:"product-details__description","data-cy":"productDescription",children:v.description})]}),Object(d.jsxs)("div",{className:"product-details__content-down-right",children:[Object(d.jsx)(ke,{children:"Tech-specs"}),Object(d.jsx)(X,{isBig:!0,listClasses:D,specs:E})]})]}),Object(d.jsx)(te,{type:V.random,withoutId:j.id,children:"You may also like"})]}):!s&&Object(d.jsx)(be,{}),s&&Object(d.jsx)("main",{className:"product-details__not-found",children:Object(d.jsx)(B,{children:"Phone was not found"})}),Object(d.jsx)(m,{})]})},Se=function(){return Object(d.jsxs)("main",{className:"not-found",children:[Object(d.jsx)(B,{children:"Page not found"}),Object(d.jsx)(s.b,{to:"/",children:"Go to home"})]})},Fe=function(){var e="".concat(v,"/:productId");return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",element:Object(d.jsx)(ae,{})}),Object(d.jsx)(i.a,{path:h,element:Object(d.jsx)(xe,{})}),Object(d.jsx)(i.a,{path:p,element:Object(d.jsx)(fe,{})}),Object(d.jsx)(i.a,{path:O,element:Object(d.jsx)(ve,{})}),Object(d.jsx)(i.a,{path:x,element:Object(d.jsx)(_e,{})}),Object(d.jsx)(i.a,{path:f,element:Object(d.jsx)(Ce,{})}),Object(d.jsx)(i.a,{path:e,element:Object(d.jsx)(Pe,{})}),Object(d.jsx)(i.a,{path:"/*",element:Object(d.jsx)(Se,{})})]})})};n.a.render(Object(d.jsx)(s.a,{children:Object(d.jsx)(o.StrictMode,{children:Object(d.jsx)(Fe,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.370935b8.chunk.js.map