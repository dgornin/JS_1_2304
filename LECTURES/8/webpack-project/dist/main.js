!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);let i=["HTML5 & CSS3","JavaScript base","JavaScript advanced","PHP","React"],r=[100,120,130,50,150],o=[1,2,3,4,5],c=["http://placehold.it/200x150","http://placehold.it/200x150","http://placehold.it/200x150","http://placehold.it/200x150","http://placehold.it/200x150"],a=t=>({product_name:i[t],price:r[t],id_product:o[t],img:c[t]}),s={items:[],show:!1,container:".basket-items",init(){this._render(),this._eventHandler()},_eventHandler(){document.querySelector(this.container).addEventListener("click",t=>{"remove"==t.target.name&&this.remove(t.target.dataset)}),document.querySelector(".btn-basket").addEventListener("click",()=>{this.show=!this.show,document.querySelector(".basket-block").classList.toggle("invisible")})},_render(){let t="";this.items.forEach(e=>{t+=`<div class="basket-item">\n                            <img src="http://placehold.it/100x80" alt="${e.product_name}">\n                            <div class="product-desc">\n                                <p class="product-title">${e.product_name}</p>\n                                <p class="product-amount">${e.amount}</p>\n                                <p class="product-single-price">${e.price}</p>\n                            </div>\n                            <div class="right-block">\n                                <p class="product-price">${e.price*e.amount}</p>\n                                <button class="del-btn" name="remove" data-id="${e.id_product}">&times;</button>\n                            </div>\n                        </div>`}),document.querySelector(this.container).innerHTML=t},add(t){let e=this.items.find(e=>e.id_product==t.id);e?e.amount++:this.items.push(Object.assign({},a(+t.id-1),{amount:1})),this._render()},remove(t){let e=this.items.find(e=>e.id_product==t.id);1==e.amount?this.items.splice(this.items.indexOf(e),1):e.amount--,this._render()}},d={items:[],container:".catalog-items",basket:s,init(){o.forEach((t,e)=>{d.items.push(a(e))}),this._render(),this._eventHandler()},_eventHandler(){document.querySelector(this.container).addEventListener("click",t=>{"buy"==t.target.name&&this.basket.add(t.target.dataset)})},_render(){let t="";this.items.forEach(e=>{t+=`<div class="catalog-item">\n                        <img src="${e.img}" alt="${e.product_name}">\n                        <div class="desc">\n                            <h3>${e.product_name}</h3>\n                            <p>${e.price} $</p>\n                            <button \n                                class="buy-btn" \n                                name="buy"\n                                data-id="${e.id_product}"\n                            >Buy</button>\n                        </div>\n                    </div>`}),document.querySelector(this.container).innerHTML=t}};n(0),n(1);s.init(),d.init()}]);