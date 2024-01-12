(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{30:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a,s=c(7),r=c(25),n=c.n(r),o=c(1),i=c(3),l=c(4);c(30);function u(e){return""===e?"":"".concat(e.split("MB")[0]," ","MB")}function d(e){return""===e?"":e.replace(" inches","\u201d")}function j(){return window.innerWidth>1030}!function(e){e.left="left",e.right="right",e.top="up"}(a||(a={}));var b=c(5),m=c.n(b),h=c(0),p=function(e){var t=e.direction,c=e.buttonExtraClass,a=e.onClick,s=e.disabled,r=e.dataCy,n="img/arrows/arrow-".concat(t).concat(s?"-disabled":"",".svg"),o="Arrow ".concat(t),i=m()("arrow",{"arrow--disabled":s},c);return Object(h.jsx)("button",{className:i,type:"button",onClick:a,disabled:s,"data-cy":r,children:Object(h.jsx)("img",{className:"arrow__img",src:n,alt:o})})};p.defaultProps={buttonExtraClass:"",disabled:!1,dataCy:""};var O=function(e){var t=e.vertical,c=m()("bottom-navigation",{"bottom-navigation__vertical":t});return Object(h.jsxs)("div",{className:c,children:[Object(h.jsx)("a",{className:"bottom-navigation__link",href:"https://github.com/AmadeuszAndroid/react_phone-catalog/tree/develop",children:"Github"}),Object(h.jsx)("a",{className:"bottom-navigation__link",href:"#/",children:"Contacts"}),Object(h.jsx)("a",{className:"bottom-navigation__link",href:"#/",children:"rights"})]})};O.defaultProps={vertical:!1};var x=function(e){var t=e.imageExtraClass,c=m()("logo",t);return Object(h.jsx)("img",{src:"img/logo.svg",alt:"Logo",className:c})};x.defaultProps={imageExtraClass:""};var v=function(e){var t=e.hasTopNav,c=void 0===t||t,s=function(){return window.scrollTo(1440,0)};return Object(h.jsxs)("footer",{className:"home__footer footer",children:[Object(h.jsxs)("div",{className:"footer__left",children:[Object(h.jsx)(x,{imageExtraClass:"footer__logo logo"}),j()&&Object(h.jsx)(O,{})]}),c&&Object(h.jsxs)("nav",{className:"footer__top-nav",children:[Object(h.jsx)("button",{className:"footer__top-link-text",type:"button",onClick:s,children:"Back to top"}),Object(h.jsx)(p,{direction:a.top,onClick:s})]})]})};v.defaultProps={hasTopNav:!0};var f="/phones",_="/tablets",g="/accessories",N="/favorites",C="/cart",y="/product",w=function(e){var t=e.count;return Object(h.jsx)("div",{className:"image-link__counter counter",children:Object(h.jsx)("span",{className:"counter__text",children:t})})},k=Object(o.createContext)({expandMenu:function(){},collapseMenu:function(){}}),P=function(e){var t=e.link,c=e.imageSource,a=e.alternativeName,r=e.itemsCount,n=e.vertical,i=Object(o.useContext)(k).collapseMenu,l=m()("image-link",{"image-link--vertical":n});return Object(h.jsxs)(s.c,{className:l,to:t,onClick:i,children:[Object(h.jsx)("img",{className:"image-link__icon",src:c,alt:a}),-1!==r&&Object(h.jsx)(w,{count:r})]})};P.defaultProps={vertical:!1};var S=function(e){var t=e.count,c=void 0===t?-1:t,a=e.vertical;return Object(h.jsx)(P,{alternativeName:"Cart",imageSource:"img/header/cart.svg",link:C,itemsCount:c,vertical:a})};S.defaultProps={count:-1,vertical:!1};var E=function(e){var t=e.count,c=void 0===t?-1:t;return Object(h.jsx)(P,{alternativeName:"Favourites",imageSource:"img/header/favourites.svg",link:N,itemsCount:c})};E.defaultProps={count:-1};var F=function(e){var t=e.vertical,c=Object(o.useContext)(k).collapseMenu,a=m()("nav",{"nav--vertical":t}),r=m()("nav__link",{"nav__link--vertical":t});return Object(h.jsxs)("nav",{className:a,children:[Object(h.jsx)(s.c,{className:r,to:"/",onClick:c,children:"home"}),Object(h.jsx)(s.c,{className:r,to:f,onClick:c,children:"phones"}),Object(h.jsx)(s.c,{className:r,to:_,onClick:c,children:"tablets"}),Object(h.jsx)(s.c,{className:r,to:g,onClick:c,children:"accessories"})]})};F.defaultProps={vertical:!1};var T="query",B="page",M=function(e){var t,c=e.currentPage,a=Object(s.d)(),r=Object(i.a)(a,2),n=r[0],l=r[1],u=Object(o.useRef)(null),d=n.get(T),j="Search in ".concat(c,"..."),b=function(){n.delete(T),l(n)};return Object(o.useEffect)((function(){var e=u.current;null!==e&&(e.value=d||"")}),[d]),Object(h.jsxs)("div",{className:"search",children:[n.get(T)?Object(h.jsx)("button",{onClick:b,type:"button",className:"search__close","data-cy":"searchDelete",children:Object(h.jsx)("img",{src:"img/header/search/close.svg",alt:"Clear search"})}):Object(h.jsx)("label",{className:"search__label",htmlFor:"search",children:Object(h.jsx)("img",{src:"img/header/search/search.svg",alt:"Search"})}),Object(h.jsx)("input",{id:"search",className:"search__input",type:"text",placeholder:j,onChange:function(e){var c=e.target.value;clearTimeout(t),t=+setTimeout((function(){c?(n.set(T,c),null!==n.get(B)&&n.set(B,"1"),l(n)):b()}),1e3)},ref:u})]})},A=function(e){var t=e.hasSearch,c=e.currentPage,a=void 0===c?"":c,s=e.favoritesCount,r=e.cartCount,n=e.hasNav,i=e.hasFavorites,l=Object(o.useContext)(k).expandMenu;return Object(h.jsxs)("header",{id:"header",className:"header",children:[Object(h.jsx)("div",{className:"header__part header__part--left",children:j()?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{imageExtraClass:"header__logo logo"}),n&&Object(h.jsx)(F,{})]}):Object(h.jsx)("button",{className:"header__dropdown-menu",onClick:l,type:"button",children:Object(h.jsx)("img",{src:"img/menu.svg",alt:"menu"})})}),Object(h.jsxs)("div",{className:"header__part",children:[t&&Object(h.jsx)(M,{currentPage:a}),j()&&i&&Object(h.jsx)(E,{count:s}),j()&&Object(h.jsx)(S,{count:r})]})]})};A.defaultProps={favoritesCount:-1,cartCount:-1,currentPage:"",hasNav:!0,hasFavorites:!0};var I=function(e){var t=e.children,c=e.extraClassName,a=m()("title",c);return Object(h.jsx)("h1",{className:a,children:t})};I.defaultProps={extraClassName:""};var R,q=function(e){var t=e.name,c=e.imagePath,a=e.productsCount,s="".concat(a," models");return Object(h.jsxs)("div",{className:"category",children:[Object(h.jsx)("img",{className:"category__image",src:c,alt:t}),Object(h.jsx)("h3",{className:"category__name",children:t}),Object(h.jsx)("p",{className:"category__count",children:s})]})},D=c(15);!function(e){e.phone="phone",e.tablet="tablet",e.accessories="accessory",e.all="all"}(R||(R={}));var L="https://mate-academy.github.io/react_phone-catalog/api/products.json",Q=0;function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.all;return fetch(L).then((function(e){return e.json()})).then((function(t){Q=0;var c=t.map((function(e){var t=e.price,c=t*e.discount/100;return Object(D.a)(Object(D.a)({},e),{},{discountedPrice:+(t-c).toFixed(2)})}));return e===R.all?c:c.filter((function(t){return t.type===e}))})).catch((function(){return Q<20?(Q+=1,$(e)):(Q=0,[])}))}function J(e){return e.price*e.discount/100}var z,U=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1];function r(e){return c.filter((function(t){return t.type===e})).length}var n=r(R.phone),l=r(R.tablet),u=r(R.accessories);return Object(o.useEffect)((function(){$().then(a)}),[]),Object(h.jsxs)("div",{className:"home__categories shop-by-category",children:[Object(h.jsx)(I,{children:"Shop by category"}),Object(h.jsxs)("div",{"data-cy":"categoryLinksContainer",className:"shop-by-category__categories",children:[Object(h.jsx)(s.b,{className:"shop-by-category__link",to:"phones",children:Object(h.jsx)(q,{imagePath:"img/home/categories/mobile-phones.png",name:"Mobile phones",productsCount:n})}),Object(h.jsx)(s.b,{className:"shop-by-category__link",to:"tablets",children:Object(h.jsx)(q,{imagePath:"img/home/categories/tablets.png",name:"Tablets",productsCount:l})}),Object(h.jsx)(s.b,{className:"shop-by-category__link",to:"accessories",children:Object(h.jsx)(q,{imagePath:"img/home/categories/accessories.png",name:"Accessories",productsCount:u})})]})]})},W=function(e){var t=e.src,c=e.alt;return Object(h.jsx)("li",{className:"category-slider-image",children:Object(h.jsx)("img",{className:"category-slider-image__banner",src:t,alt:c})})};!function(e){e[e.phones=0]="phones",e[e.tablets=1]="tablets",e[e.accessories=2]="accessories"}(z||(z={}));var G=function(){var e=Object(o.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],r=["phones","tablets","accessories"].map((function(e){return{src:"img/home/slider/banner-".concat(e,".png"),alt:e}})),n=c===z.tablets,l=c===z.accessories,u=m()("categories-slider__images",{"categories-slider__images--1":n,"categories-slider__images--2":l}),d=m()("categories-slider__bar",{"categories-slider__bar--visible":0===c}),j=m()("categories-slider__bar",{"categories-slider__bar--visible":1===c}),b=m()("categories-slider__bar",{"categories-slider__bar--visible":2===c}),O=function(){var e;e=c===z.accessories?z.phones:c+1,s(e)};return Object(o.useEffect)((function(){var e=setInterval((function(){return O()}),5e3);return function(){return clearInterval(e)}}),[c]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"home__categories-slider categories-slider",children:[Object(h.jsx)(p,{direction:a.left,buttonExtraClass:"categories-slider__nav",onClick:function(){var e;e=c===z.phones?z.accessories:c-1,s(e)}}),Object(h.jsx)("div",{className:"categories-slider__content",children:Object(h.jsx)("ul",{className:u,children:r.map((function(e){var t=e.src,c=e.alt;return Object(h.jsx)(W,{alt:c,src:t},c)}))})}),Object(h.jsx)(p,{direction:a.right,buttonExtraClass:"categories-slider__nav",onClick:O})]}),Object(h.jsxs)("div",{className:"categories-slider__bars",children:[Object(h.jsx)("div",{className:d}),Object(h.jsx)("div",{className:j}),Object(h.jsx)("div",{className:b})]})]})},Y=function(e){var t=e.children,c="$".concat(t);return Object(h.jsx)("h2",{className:"old-price",children:c})},H=c(10);function K(e){var t=function(){var t=localStorage.getItem(e);return"string"===typeof t?JSON.parse(t):[]},c=Object(o.useState)(t),a=Object(i.a)(c,2),s=a[0],r=a[1];return[t,function(t){r(t),localStorage.setItem(e,JSON.stringify(t))},function(e){return s.some((function(t){return"id"in t?t.id===e:t.product.id===e}))},s.length]}var V="favorites",X="cart",Z=Object(o.createContext)({increment:function(){},decrement:function(){}}),ee=function(e){var t=e.children,c=e.buttonClasses,a=e.textClasses,s=e.onClick;return Object(h.jsx)("button",{className:c,type:"button",onClick:s,children:Object(h.jsx)("div",{className:a,children:t})})},te=function(e){var t=e.product,c=e.areBig,a=K(X),s=Object(i.a)(a,3),r=s[0],n=s[1],l=s[2],u=K(V),d=Object(i.a)(u,3),j=d[0],b=d[1],p=d[2],O=Object(o.useContext)(Z),x=O.increment,v=O.decrement,f=t.id,_=l(f),g=m()("button",{"button--clicked":_,"button--big":c}),N=m()("button__text",{"button__text--clicked":_}),C=_?"Added to cart":"Add to cart",y=m()("product-buttons__favorites",{"product-buttons__favorites--big":c}),w=p(f)?"img/favorites/heart-selected.svg":"img/favorites/heart.svg";return Object(h.jsxs)("div",{className:"product-buttons",children:[Object(h.jsx)(ee,{buttonClasses:g,onClick:function(){if(!l(f)){var e={product:t,quantity:1};n([].concat(Object(H.a)(r()),[e]))}},textClasses:N,children:C}),Object(h.jsx)("button",{className:y,type:"button",onClick:function(){p(f)?(b(Object(H.a)(j().filter((function(e){return"id"in e?e.id!==f:e.product.id!==f})))),v()):(b([].concat(Object(H.a)(j()),[t])),x())},"data-cy":"addToFavorite",children:Object(h.jsx)("img",{className:"product-buttons__heart",src:w,alt:"Add to favorites"})})]})};te.defaultProps={areBig:!1};var ce=function(e){var t=e.name,c=e.value,a=e.isBig,s=m()("product-spec__name",{"product-spec__name--big":a}),r=m()("product-spec__value",{"product-spec__value--big":a,"product-spec__value--small":!a});return Object(h.jsxs)("div",{className:"product-spec",children:[Object(h.jsx)("div",{className:s,children:t}),Object(h.jsx)("div",{className:r,children:c})]})};ce.defaultProps={isBig:!1};var ae,se=function(e){var t=e.specs,c=e.isBig,a=e.listClasses;return Object(h.jsx)("ul",{className:a,children:t.map((function(e){var t=e.name,a=e.value;if(a)return Object(h.jsx)(ce,{name:t,value:a,isBig:c},t)}))})},re=function(e){var t=e.product,c=t.imageUrl,a=t.name,r=t.price,n=t.discountedPrice,o=t.screen,i=t.capacity,l=t.ram,j=t.id,b="$".concat(n),m=d(o),p=u(i),O=u(l),x="".concat(y,"/").concat(j),v=[{name:"Screen",value:m},{name:"Capacity",value:p},{name:"Ram",value:O}];return Object(h.jsxs)("li",{className:"product-card",children:[Object(h.jsxs)(s.b,{className:"product-card__link",to:x,children:[Object(h.jsx)("img",{className:"product-card__image",src:c,alt:"Product"}),Object(h.jsx)("p",{className:"product-card__name",children:a}),Object(h.jsxs)("div",{className:"product-card__prices",children:[Object(h.jsx)("h2",{className:"product-card__current-price",children:b}),n<r&&Object(h.jsx)(Y,{children:r})]}),Object(h.jsx)(se,{isBig:!1,listClasses:"product-card__details",specs:v})]}),Object(h.jsx)("div",{className:"product-card__buttons",children:Object(h.jsx)(te,{product:t})})]})},ne=function(e){var t=e.products;return Object(h.jsx)("ul",{"data-cy":"cardsContainer",className:"products-slider__cards",children:t.map((function(e){return Object(h.jsx)(re,{product:e},e.id)}))})};!function(e){e[e.hotProducts=0]="hotProducts",e[e.newProducts=1]="newProducts",e[e.random=2]="random"}(ae||(ae={}));var oe=function(e){var t=e.type,c=e.children,s=e.withoutId,r=void 0===s?"":s,n=Object(o.useState)([]),l=Object(i.a)(n,2),u=l[0],d=l[1],j=Object(o.useState)(0),b=Object(i.a)(j,2),O=b[0],x=b[1],v=4,f=document.documentElement.clientWidth;f<1440&&f>=1024?v=3:f<1024&&f>=768?v=2:f<768&&(v=1);var _=u.slice(O,v+O),g=0===O,N=O+v===u.length,C=m()("products-slider",{"home__products-slider--down":t===ae.newProducts,"home__products-slider--up":t===ae.hotProducts,"product-details__slider":t===ae.random});return Object(o.useEffect)((function(){switch(t){case ae.newProducts:return void $().then((function(e){return e.filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price}))})).then(d);case ae.random:return void function(e){return $().then((function(t){for(var c=t.filter((function(t){return t.id!==e})),a=[],s=function(){var e=Math.floor(Math.random()*c.length),t=c[e];a.push(t),c=c.filter((function(e){return e.id!==t.id}))};c.length;)s();return a}))}(r).then(d);case ae.hotProducts:default:$().then((function(e){return e.filter((function(e){return e.discount>0})).sort((function(e,t){return J(t)-J(e)}))})).then(d)}}),[r]),Object(h.jsxs)("div",{className:C,children:[Object(h.jsxs)("div",{className:"products-slider__header",children:[Object(h.jsx)(I,{children:c}),Object(h.jsxs)("div",{className:"cardsContainer__arrows",children:[Object(h.jsx)(p,{direction:a.left,onClick:function(){O>0&&x(O-1)},disabled:g}),Object(h.jsx)(p,{direction:a.right,onClick:function(){O+v<u.length&&x(O+1)},disabled:N})]})]}),Object(h.jsx)(ne,{products:_})]})};oe.defaultProps={withoutId:""};var ie,le=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{hasSearch:!1,currentPage:"home"}),Object(h.jsxs)("main",{className:"home",children:[Object(h.jsx)(G,{}),Object(h.jsx)(oe,{type:ae.hotProducts,children:"Hot prices"}),Object(h.jsx)(U,{}),Object(h.jsx)(oe,{type:ae.newProducts,children:"Brand new models"})]}),Object(h.jsx)(v,{})]})};!function(e){e.features="dropdown-features",e.pages="dropdown-pages"}(ie||(ie={}));var ue="query",de="page",je="perPage",be="sort",me=function(e){var t=e.path;return Object(h.jsxs)("div",{"data-cy":"breadCrumbs",className:"products__breadcrumbs breadcrumbs",children:[Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)("img",{className:"breadcrumbs__home",src:"img/home-breadcrumbs.svg",alt:"home"})}),t.map((function(e,c){var a=e.link,r=e.text;return Object(h.jsxs)(o.Fragment,{children:[Object(h.jsx)("img",{className:"breadcrumbs__image",src:"img/arrows/arrow-right-breadcrumbs.svg",alt:"Arrow right"}),c===t.length-1?Object(h.jsx)("p",{className:"breadcrumbs__text",children:r}):Object(h.jsx)(s.b,{to:a||"",children:Object(h.jsx)("span",{className:"breadcrumbs__text breadcrumbs__link",children:r})})]},a+r)}))]})},he=function(){return Object(h.jsx)(I,{children:"No search products found"})},pe=function(e){var t=e.countText,c=e.extraClasses,a=m()("products-count",c);return Object(h.jsx)("p",{className:a,children:t})},Oe=function(e){var t=e.products;return Object(h.jsx)("ul",{className:"products__list products-list","data-cy":"productList",children:t.map((function(e){return Object(h.jsx)(re,{product:e},e.id)}))})},xe=function(e){var t,c=e.id,a=e.description,r=e.options,n=Object(o.useState)(!1),l=Object(i.a)(n,2),u=l[0],d=l[1],j=Object(o.useState)(-1),b=Object(i.a)(j,2),p=b[0],O=b[1],x=Object(o.useState)(!1),v=Object(i.a)(x,2),f=v[0],_=v[1],g=Object(o.useState)(!1),N=Object(i.a)(g,2),C=N[0],y=N[1],w=Object(s.d)(),k=Object(i.a)(w,2),P=k[0],S=k[1],E=Object(o.useRef)(null),F=Object(o.useRef)(null),T=Object(o.useRef)(null),B=Object(o.useRef)(null),M=m()("dropdown__select",{"dropdown__select--big":c===ie.features,"dropdown__select--small":c===ie.pages}),A=m()("dropdown__arrow-icon",{"dropdown__arrow-icon--big":c===ie.features,"dropdown__arrow-icon--small":c===ie.pages}),I=m()("dropdown__list",{"dropdown__list--big":c===ie.features,"dropdown__list--small":c===ie.pages}),R="img/arrows/arrow-".concat(u?"up":"down","-dropdown.svg"),q=c===ie.features?be:je,D=P.get(q),L=null===(t=r.find((function(e){return e.value===D})))||void 0===t?void 0:t.text,Q=function(){f||d(!u)},$=function(e){d(!1);var t=c===ie.features?be:je;P.set(t,e),t===je&&("all"===e?P.delete(de):P.set(de,"1")),S(P)},J=function(){C||(_(!0),d(!1),O(-1),window.setTimeout((function(){return _(!1)}),500))};null===P.get(q)&&(P.set(q,r[0].value),S(P));var z=function(e){y(!0);var t=e.key,a="ArrowUp"===t,s="ArrowDown"===t,n="Enter"===t,o="Escape"===t,i=c===ie.pages;if(u&&(a||s||n||o)){switch(e.preventDefault(),p){case 0:var l;if(s)null===(l=F.current)||void 0===l||l.focus(),O((function(e){return e+1}));break;case 1:var d;if(a)null===(d=E.current)||void 0===d||d.focus(),O((function(e){return e-1}));else if(s){var j;null===(j=T.current)||void 0===j||j.focus(),O((function(e){return e+1}))}break;case 2:var b;if(a)null===(b=F.current)||void 0===b||b.focus(),O((function(e){return e-1}));else if(s&&i){var m;null===(m=B.current)||void 0===m||m.focus(),O((function(e){return e+1}))}break;case 3:var h;if(a&&i)null===(h=T.current)||void 0===h||h.focus(),O((function(e){return e-1}))}n&&$(r[p].value),o&&Q()}y(!1)};return Object(o.useEffect)((function(){var e;u&&(O(0),null!==E&&(null===(e=E.current)||void 0===e||e.focus()))}),[u]),Object(o.useEffect)((function(){return window.addEventListener("keydown",z),function(){window.removeEventListener("keydown",z)}}),[u,p]),Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsx)("p",{className:"dropdown__title",children:a}),Object(h.jsxs)("button",{className:M,type:"button",onClick:Q,children:[Object(h.jsx)("div",{className:"dropdown__select-content",children:Object(h.jsx)("p",{className:"dropdown__select-text",children:L})}),Object(h.jsx)("img",{className:A,src:R,alt:"Dropdown arrow"})]}),u&&Object(h.jsx)("div",{className:I,children:r.map((function(e,t){var c,a=e.text,s=e.value;switch(t){case 1:c=F;break;case 2:c=T;break;case 3:c=B;break;default:c=E}return Object(h.jsx)("button",{className:"dropdown__option",value:s,type:"button",onMouseDown:function(){return $(s)},ref:c,onBlur:J,children:a},a)}))})]})},ve=function(){return Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("div",{className:"loader__content"})})},fe=function(e){var t=e.categoryName,c="".concat(t," not found");return Object(h.jsx)(I,{children:c})},_e=function(e){var t=e.pageNumber,c=e.isSelected,a=e.onClick,s=m()("page",{page__active:c});return Object(h.jsx)("button",{type:"button",className:s,onClick:function(){return a(t)},disabled:c,children:t})},ge=function(e){for(var t=e.total,c=e.perPage,s=e.currentPage,r=void 0===s?1:s,n=e.onPageChange,o=[1],i=2;i<=Math.ceil(t/c);i+=1)o.push(i);return Object(h.jsxs)("div",{className:"products__pagination pagination","data-cy":"pagination",children:[Object(h.jsx)(p,{direction:a.left,onClick:function(){return n(r-1)},disabled:1===r,dataCy:"paginationLeft"}),Object(h.jsx)("ul",{className:"pagination__pages",children:o.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(_e,{pageNumber:e,isSelected:e===r,onClick:n})},Date.now()+e)}))}),Object(h.jsx)(p,{direction:a.right,onClick:function(){return n(r+1)},disabled:r===o.length,dataCy:"paginationRight"})]})};ge.defaultProps={currentPage:1};var Ne=function(e){var t,c,a,r,n,l,u=e.categoryType,d=Object(o.useState)(null),j=Object(i.a)(d,2),b=j[0],p=j[1],O=Object(o.useState)(0),x=Object(i.a)(O,2),f=x[0],_=x[1],g=Object(o.useState)(-1),N=Object(i.a)(g,2),C=N[0],y=N[1],w=Object(o.useState)(!1),k=Object(i.a)(w,2),P=k[0],S=k[1],E=Object(s.d)(),F=Object(i.a)(E,2),T=F[0],B=F[1],M=null===(t=T.get(ue))||void 0===t?void 0:t.toLowerCase(),q=T.get(be),D=T.get(je),L=+(T.get(de)||1),Q=(null===b||void 0===b?void 0:b.length)||0;switch(u){case R.tablet:c="tablets",a="Tablets",r=$(R.tablet),n="Tablets";break;case R.accessories:c="accesories",a="Accessories",r=$(R.accessories),n="Accessories";break;default:case R.phone:c="phones",a="Phones",r=$(R.phone),n="Mobile phones"}var J=["age","name","price"],z=["all","4","8","16"],U=f>=+z[1],W=[{text:"Newest",value:J[0]},{text:"Alphabetically",value:J[1]},{text:"Cheapest",value:J[2]}],G=m()("products__count",{"products__count--query":M}),Y=z.map((function(e){return{text:e,value:e}}));l=D===z[0]?Q:+(D||Q);var K,V=[{text:a}];K=M?"".concat(f," result").concat(1===f?"":"s"):"".concat(f," model").concat(1===f?"":"s");var X=D!==z[0]&&f>=l&&U,Z=null===T.get(de)||Number.isInteger(L)&&L>0&&L<=Math.ceil(f/l),ee=!f&&M||q&&!J.includes(q)||D&&!z.includes(D)||!Z;return Object(o.useEffect)((function(){P||(null===T.get(je)&&T.set(je,z[0]),null===T.get(be)&&T.set(be,J[0]),B(T,{replace:!0}),S(!0))}),[]),Object(o.useEffect)((function(){null!==T.get("sort")&&null!==T.get("perPage")&&r.then((function(e){y(e.length);var t=Object(H.a)(e);if(M&&(t=e.filter((function(e){return e.name.toLowerCase().includes(M)}))),_(t.length),t.sort((function(e,t){switch(q){case"price":return e.price-t.price;default:case"name":return e.name.localeCompare(t.name);case"age":return e.age-t.age}})),D&&D!==z[0]){var c=(L-1)*l,a=L*l-1;p(t.filter((function(e,t){return t>=c&&t<=a})))}else p(t)}))}),[M,q,L,D]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{hasSearch:!0,currentPage:c}),null===b?Object(h.jsx)(ve,{}):Object(h.jsxs)("main",{className:"products",children:[!M&&Object(h.jsx)(me,{path:V}),ee||!C?Object(h.jsx)("div",{className:"products__no-results",children:C?Object(h.jsx)(he,{}):Object(h.jsx)(fe,{categoryName:n})}):Object(h.jsxs)(h.Fragment,{children:[!M&&Object(h.jsx)(I,{extraClassName:"products__title",children:n}),Object(h.jsx)(pe,{countText:K,extraClasses:G}),U&&Object(h.jsxs)("div",{className:"products__filters",children:[Object(h.jsx)(xe,{id:ie.features,description:"Sort by",options:W}),Object(h.jsx)(xe,{id:ie.pages,description:"Items on page",options:Y})]}),Q&&Object(h.jsx)(Oe,{products:b}),X&&Object(h.jsx)(ge,{onPageChange:function(e){T.set(de,e.toString()),B(T)},perPage:l,currentPage:L,total:f})]})]}),Object(h.jsx)(v,{})]})},Ce=function(){return Object(h.jsx)(Ne,{categoryType:R.phone})},ye=function(){return Object(h.jsx)(Ne,{categoryType:R.tablet})},we=function(){return Object(h.jsx)(Ne,{categoryType:R.accessories})},ke=function(){var e,t=K("favorites"),c=Object(i.a)(t,1)[0],a=Object(s.d)(),r=null===(e=Object(i.a)(a,1)[0].get(ue))||void 0===e?void 0:e.toLowerCase(),n=Object(o.useState)(c()),l=Object(i.a)(n,2),u=l[0],d=l[1],j=Object(o.useState)(u.length),b=Object(i.a)(j,2),p=b[0],O=b[1],x=r?"result":"item",f="".concat(p," ").concat(x).concat(1===p?"":"s"),_=m()("favorites__count",{"favorites__count--query":r});return Object(o.useEffect)((function(){var e;e=r?c().filter((function(e){return e.name.toLowerCase().includes(r)})):c(),d(e),O(e.length)}),[r,p]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(Z.Provider,{value:{increment:function(){return O((function(e){return e+1}))},decrement:function(){return O((function(e){return e-1}))}},children:[Object(h.jsx)(A,{hasSearch:!0,currentPage:"favourites",favoritesCount:p}),Object(h.jsx)("main",{className:"favorites",children:p?Object(h.jsxs)(h.Fragment,{children:[!r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(me,{path:[{text:"Favourites"}]}),Object(h.jsx)(I,{extraClassName:"favorites__title",children:"Favourites"})]}),Object(h.jsx)(pe,{countText:f,extraClasses:_}),Object(h.jsx)(Oe,{products:u})]}):Object(h.jsx)("div",{className:"favorites__no-search",children:r?Object(h.jsx)(he,{}):Object(h.jsx)(fe,{categoryName:"Favorites"})})})]}),Object(h.jsx)(v,{})]})},Pe=function(e){var t=e.extraClass,c=m()("back",t),a=Object(l.o)();return Object(h.jsxs)("button",{className:c,type:"button",onClick:function(){return a(-1)},"data-cy":"backButton",children:[Object(h.jsx)("img",{className:"back__image",src:"img/arrows/arrow-left.svg",alt:"Arrow left"}),Object(h.jsx)("p",{className:"back__text",children:"Back"})]})},Se=function(e){var t=e.productInCart,c=t.product,a=t.quantity,s=e.onRemoveClick,r=e.onQuantityClick,n=c.imageUrl,o=c.name,i=c.discountedPrice,l=c.id,u="$".concat(+(i*a).toFixed(2));return Object(h.jsxs)("li",{className:"cart-item",children:[Object(h.jsx)("button",{type:"button",className:"cart-item__remove-button","data-cy":"cartDeleteButton",onClick:function(){return s(l)},children:Object(h.jsx)("img",{className:"cart-item__remove-icon",src:"img/cart/close.svg",alt:"Delete item"})}),Object(h.jsx)("img",{className:"cart-item__product-image",src:n,alt:"Product"}),Object(h.jsx)("p",{className:"cart-item__product-name",children:o}),Object(h.jsx)("button",{className:"cart-item__minus",type:"button",disabled:1===a,onClick:function(){return r(l,!0)},children:"-"}),Object(h.jsx)("div",{"data-cy":"productQauntity",className:"cart-item__quantity",children:a}),Object(h.jsx)("button",{className:"cart-item__plus",type:"button",onClick:function(){return r(l,!1)},children:"+"}),Object(h.jsx)("span",{className:"cart-item__total-price",children:u})]})},Ee=function(e){var t=e.productsInCart,c=e.onRemoveClick,a=e.onQuantityClick;return Object(h.jsx)("ul",{className:"cart-items",children:t.map((function(e){var t=e.product.id;return Object(h.jsx)(Se,{productInCart:e,onRemoveClick:c,onQuantityClick:a},t)}))})},Fe=function(){var e=K(X),t=Object(i.a)(e,4),c=t[0],a=t[1],s=t[3],r=Object(o.useState)(!1),n=Object(i.a)(r,2),l=n[0],u=n[1],d=c(),j=m()("button","button--big",{"button--clicked":l}),b=m()("button__text",{"button__text--clicked":l}),p=d.reduce((function(e,t){var c=t.quantity;return e+t.product.discountedPrice*c}),0),O="$".concat(+p.toFixed(2)),x=d.reduce((function(e,t){return e+t.quantity}),0),f="Total for ".concat(x," item").concat(1===x?"":"s"),_=0===s;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{hasSearch:!1,hasNav:!1,hasFavorites:!1,cartCount:x}),Object(h.jsxs)("main",{className:"cart",children:[Object(h.jsx)(Pe,{extraClass:"cart__back"}),_?Object(h.jsx)(I,{extraClassName:"cart__title",children:"Your cart is empty"}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(I,{extraClassName:"cart__title",children:"Cart"}),Object(h.jsxs)("div",{className:"cart__content",children:[Object(h.jsx)("div",{className:"cart__items",children:Object(h.jsx)(Ee,{productsInCart:d,onRemoveClick:function(e){a(d.filter((function(t){return t.product.id!==e})))},onQuantityClick:function(e,t){a(d.map((function(c){var a=Object(D.a)({},c),s=c.product,r=c.quantity;return s.id===e&&(t?r>1&&(a.quantity-=1):a.quantity+=1),Object(D.a)({},a)})))}})}),Object(h.jsxs)("div",{className:"cart__summary-wrapper",children:[Object(h.jsxs)("div",{className:"cart__summary",children:[Object(h.jsx)(I,{extraClassName:"cart__total-price",children:O}),Object(h.jsx)("p",{className:"cart__count-text",children:f}),Object(h.jsx)(ee,{buttonClasses:j,onClick:function(){u(!0)},textClasses:b,children:"Checkout"})]}),l&&Object(h.jsx)("p",{children:"We are sorry, but this feature is not implemented yet"})]})]})]})]}),Object(h.jsx)(v,{hasTopNav:!1})]})},Te=function(e){var t=e.imageSource,c=e.isSelected,a=e.index,s=e.onClick,r=m()("small-photo",{"small-photo--selected":c});return Object(h.jsx)("button",{type:"button",className:r,onClick:function(){return s(a)},children:Object(h.jsx)("img",{className:"small-photo__picture",src:t,alt:"Small product"})})},Be=function(e){var t=e.children;return Object(h.jsx)("h2",{className:"subtitle",children:t})},Me=function(){var e,t,c=Object(o.useState)(!1),a=Object(i.a)(c,2),s=a[0],r=a[1],n=Object(o.useState)(null),j=Object(i.a)(n,2),b=j[0],p=j[1],O=Object(o.useState)(null),x=Object(i.a)(O,2),N=x[0],C=x[1],y=Object(o.useState)(0),w=Object(i.a)(y,2),k=w[0],P=w[1],S=Object(l.q)().productId,E=(null===b||void 0===b?void 0:b.type)||R.all,F=[{name:"Screen",value:d((null===b||void 0===b?void 0:b.screen)||"")},{name:"Resolution",value:(null===N||void 0===N?void 0:N.display.screenResolution)||""},{name:"Processor",value:(null===N||void 0===N?void 0:N.hardware.cpu)||""},{name:"RAM",value:u((null===b||void 0===b?void 0:b.ram)||"")}],T=[].concat(F,[{name:"Built in memory",value:u((null===N||void 0===N?void 0:N.storage.flash)||"")},{name:"Camera",value:(null===N||void 0===N?void 0:N.camera.primary)||""},{name:"Cell",value:(null===N||void 0===N?void 0:N.connectivity.cell)||""}]),B="$".concat(null===b||void 0===b?void 0:b.discountedPrice);switch(E){case R.phone:e="Phones",t=f;break;case R.tablet:e="Tablets",t=_;break;case R.accessories:e="Accessories",t=g;break;default:e="",t=""}var M="ID: ".concat(function(e){switch(e){case"motorola-atrix-4g":return 802390;case"samsung-gem":return 802391;case"dell-venue":return 802392;case"nexus-s":return 802393;case"lg-axis":return 802394;case"samsung-showcase-a-galaxy-s-phone":return 802395;case"droid-2-global-by-motorola":return 802396;case"droid-pro-by-motorola":return 802397;case"motorola-bravo-with-motoblur":return 802398;case"motorola-defy-with-motoblur":case"t-mobile-mytouch-4g":return 802399;case"samsung-mesmerize-a-galaxy-s-phone":return 802400;case"sanyo-zio":return 802401;case"samsung-transform":return 802402;case"t-mobile-g2":return 802403;case"motorola-charm-with-motoblur":return 802404;case"motorola-xoom-with-wi-fi":return 802405;case"motorola-xoom":return 802406;case"dell-streak-7":return 802407;case"samsung-galaxy-tab":return 802408;default:return 0}}(null===b||void 0===b?void 0:b.id)),q=[{text:e,link:t},{text:(null===b||void 0===b?void 0:b.name)||""}],D=m()("product-details__specs","product-details__specs--up"),L=m()("product-details__specs","product-details__specs--down"),Q=function(e){return P(e)};return Object(o.useEffect)((function(){$().then((function(e){p(e.find((function(e){return e.id===S}))||null)})),function(e){if(!e)throw new Error("Product not found");var t="https://mate-academy.github.io/react_phone-catalog/api/products/".concat(e,".json");return fetch(t).then((function(e){return e.json()}))}(S).then(C).catch((function(){return r(!0)}))}),[S]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{hasSearch:!1}),null!==b&&null!==N?Object(h.jsxs)("main",{className:"product-details",children:[Object(h.jsx)(me,{path:q}),Object(h.jsx)(Pe,{extraClass:"product-details__back"}),Object(h.jsx)(I,{extraClassName:"product-details__title",children:b.name}),Object(h.jsxs)("section",{className:"product-details__content-up",children:[Object(h.jsx)("ul",{className:"product-details__small-photos",children:N.images.map((function(e,t){var c=t===k;return Object(h.jsx)("li",{children:Object(h.jsx)(Te,{isSelected:c,imageSource:e,index:t,onClick:Q})},e)}))}),Object(h.jsx)("img",{className:"product-details__big-photo",src:N.images[k],alt:"Selected"}),Object(h.jsxs)("div",{className:"product-details__up-details",children:[Object(h.jsxs)("div",{className:"product-details__prices",children:[Object(h.jsx)(I,{children:B}),!!b.discount&&Object(h.jsx)(Y,{children:b.price})]}),Object(h.jsx)("div",{className:"product-details__buttons",children:Object(h.jsx)(te,{product:b,areBig:!0})}),Object(h.jsx)(se,{isBig:!1,listClasses:D,specs:F})]}),Object(h.jsx)("p",{className:"product-details__id",children:M})]}),Object(h.jsxs)("section",{className:"product-details__content-down",children:[Object(h.jsxs)("div",{className:"product-details__content-down-left",children:[Object(h.jsx)(Be,{children:"About"}),Object(h.jsx)("article",{className:"product-details__description","data-cy":"productDescription",children:N.description})]}),Object(h.jsxs)("div",{className:"product-details__content-down-right",children:[Object(h.jsx)(Be,{children:"Tech-specs"}),Object(h.jsx)(se,{isBig:!0,listClasses:L,specs:T})]})]}),Object(h.jsx)(oe,{type:ae.random,withoutId:b.id,children:"You may also like"})]}):!s&&Object(h.jsx)(ve,{}),s&&Object(h.jsx)("main",{className:"product-details__not-found",children:Object(h.jsx)(I,{children:"Phone was not found"})}),Object(h.jsx)(v,{})]})},Ae=function(){return Object(h.jsxs)("main",{className:"not-found",children:[Object(h.jsx)(I,{children:"Page not found"}),Object(h.jsx)(s.b,{to:"/",children:"Go to home"})]})};function Ie(e,t){return window.location.hash.includes(t)?e:-1}var Re=function(){var e=Object(o.useContext)(k).collapseMenu,t=K(X),c=Object(i.a)(t,4)[3],a=K(V),s=Object(i.a)(a,4)[3],r=Ie(c,C),n=Ie(s,N);return Object(h.jsx)("div",{className:"drop-down-menu",children:Object(h.jsxs)("div",{className:"drop-down-menu__content",children:[Object(h.jsx)("button",{onClick:e,type:"button",className:"drop-down-menu__close",children:Object(h.jsx)("img",{src:"img/header/search/close.svg",alt:"Clear search"})}),Object(h.jsx)(x,{}),Object(h.jsx)(F,{vertical:!0}),Object(h.jsx)(S,{vertical:!0,count:r}),Object(h.jsx)(E,{count:n}),Object(h.jsx)(O,{vertical:!0})]})})},qe=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],s="".concat(y,"/:productId");return Object(h.jsx)("div",{className:"app",children:Object(h.jsx)(k.Provider,{value:{collapseMenu:function(){return a(!1)},expandMenu:function(){return a(!0)}},children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",element:c?Object(h.jsx)(Re,{}):Object(h.jsx)(le,{})}),Object(h.jsx)(l.a,{path:f,element:c?Object(h.jsx)(Re,{}):Object(h.jsx)(Ce,{})}),Object(h.jsx)(l.a,{path:_,element:c?Object(h.jsx)(Re,{}):Object(h.jsx)(ye,{})}),Object(h.jsx)(l.a,{path:g,element:c?Object(h.jsx)(Re,{}):Object(h.jsx)(we,{})}),Object(h.jsx)(l.a,{path:N,element:c?Object(h.jsx)(Re,{}):Object(h.jsx)(ke,{})}),Object(h.jsx)(l.a,{path:C,element:c?Object(h.jsx)(Re,{}):Object(h.jsx)(Fe,{})}),Object(h.jsx)(l.a,{path:s,element:c?Object(h.jsx)(Re,{}):Object(h.jsx)(Me,{})}),Object(h.jsx)(l.a,{path:"/*",element:Object(h.jsx)(Ae,{})})]})})})};n.a.render(Object(h.jsx)(s.a,{children:Object(h.jsx)(o.StrictMode,{children:Object(h.jsx)(qe,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d072f241.chunk.js.map