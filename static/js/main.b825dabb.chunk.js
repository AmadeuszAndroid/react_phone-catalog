(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{16:function(e,s,t){},19:function(e,s,t){"use strict";t.r(s);var a,c=t(4),r=t(11),i=t.n(r),o=(t(16),t(1)),l=function(e){var s=e.imageClasses;return Object(o.jsx)("img",{src:"img/logo.svg",alt:"Logo",className:s})},n=function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)(l,{imageClasses:"footer__logo logo"}),Object(o.jsxs)("div",{className:"footer__links",children:[Object(o.jsx)("a",{className:"footer__link",href:"https://github.com/AmadeuszAndroid/react_phone-catalog/tree/develop",children:"Github"}),Object(o.jsx)("a",{className:"footer__link",href:"#/",children:"Contacts"}),Object(o.jsx)("a",{className:"footer__link",href:"#/",children:"rights"})]}),Object(o.jsxs)("div",{className:"footer__top-nav",children:[Object(o.jsx)("a",{className:"footer__top-link-text",href:"#header",children:"Back to top"}),Object(o.jsx)("a",{href:"#header",className:"footer__top-link",children:Object(o.jsx)("img",{className:"footer__top-link-image",src:"img/footer-arrow-up.svg",alt:"Top button"})})]})]})},j=function(){return Object(o.jsx)(c.b,{className:"cart",to:"cart",children:Object(o.jsx)("img",{className:"cart__icon",src:"img/header/cart.svg",alt:"Cart"})})},b=function(){return Object(o.jsx)(c.b,{className:"favourites",to:"favourites",children:Object(o.jsx)("img",{className:"favourites__icon",src:"img/header/favourites.svg",alt:"Favourites"})})},d=function(){return Object(o.jsxs)("nav",{className:"nav",children:[Object(o.jsx)(c.b,{className:"nav__link",to:"/",children:"home"}),Object(o.jsx)(c.b,{className:"nav__link",to:"phones",children:"phones"}),Object(o.jsx)(c.b,{className:"nav__link",to:"tablets",children:"tablets"}),Object(o.jsx)(c.b,{className:"nav__link",to:"accessories",children:"accessories"})]})},h=function(){return Object(o.jsxs)("header",{id:"header",className:"header",children:[Object(o.jsxs)("div",{className:"header__part header__part--left",children:[Object(o.jsx)(l,{imageClasses:"header__logo logo"}),Object(o.jsx)(d,{})]}),Object(o.jsxs)("div",{className:"header__part",children:[Object(o.jsx)(b,{}),Object(o.jsx)(j,{})]})]})},_=t(3),m=t(9),g=t.n(m),O=t(0);!function(e){e[e.phones=0]="phones",e[e.tablets=1]="tablets",e[e.accessories=2]="accessories"}(a||(a={}));var u=function(){var e,s=Object(O.useState)(-1),t=Object(_.a)(s,2),c=t[0],r=t[1],i=Object(O.useState)(0),l=Object(_.a)(i,2),n=l[0],j=l[1];switch(n){case a.tablets:e="tablets";break;case a.accessories:e="accessories";break;case a.phones:default:e="phones"}var b="img/home/slider/banner-".concat(e,".png"),d=g()("categories-slider__bar",{"categories-slider__bar--visible":0===n}),h=g()("categories-slider__bar",{"categories-slider__bar--visible":1===n}),m=g()("categories-slider__bar",{"categories-slider__bar--visible":2===n}),u=function(){var e;e=n===a.accessories?a.phones:n+1,j(e)};return Object(O.useEffect)((function(){clearInterval(c),r(+setInterval((function(){return u()}),5e3))}),[n]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"home__categories-slider categories-slider",children:[Object(o.jsx)("button",{className:"categories-slider__nav",type:"button",onClick:function(){var e;e=n===a.phones?a.accessories:n-1,j(e)},children:Object(o.jsx)("img",{className:"categories-slider__arrow",src:"img/home/slider/arrow-left.svg",alt:"Arrow left"})}),Object(o.jsx)("img",{className:"categories-slider__image",src:b,alt:"Banner"}),Object(o.jsx)("button",{className:"categories-slider__nav",type:"button",onClick:u,children:Object(o.jsx)("img",{className:"categories-slider__arrow",src:"img/home/slider/arrow-right.svg",alt:"Arrow right"})})]}),Object(o.jsxs)("div",{className:"categories-slider__bars",children:[Object(o.jsx)("div",{className:d}),Object(o.jsx)("div",{className:h}),Object(o.jsx)("div",{className:m})]})]})},x=function(){return Object(o.jsx)("div",{"data-cy":"cardsContainer",className:"home__products-slider products-slider",children:Object(o.jsx)("h1",{className:"products-slider__title",children:"Hot prices"})})},v=function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(u,{}),Object(o.jsx)(x,{})]})},f=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(h,{}),Object(o.jsx)(v,{}),Object(o.jsx)(n,{})]})};i.a.render(Object(o.jsx)(c.a,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b825dabb.chunk.js.map