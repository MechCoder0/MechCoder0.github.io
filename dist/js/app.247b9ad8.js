(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],f=0,s=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&s.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==u[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d7487":"0a8d305f","chunk-2d0e95f1":"4a33fbb9","chunk-2d213b29":"4ba230cb","chunk-57ec320d":"d18eee5f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-57ec320d":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d7487":"31d6cfe0","chunk-2d0e95f1":"31d6cfe0","chunk-2d213b29":"31d6cfe0","chunk-57ec320d":"6c1eeeda"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===u))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){l=s[c],f=l.getAttribute("data-href");if(f===r||f===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}u[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"navigation",attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/nedStory"}},[e._v("Ned's Story")]),e._v(" | "),n("router-link",{attrs:{to:"/coffee"}},[e._v("Coffee")]),e._v(" | "),n("router-link",{attrs:{to:"/food"}},[e._v("Food")])],1),n("router-view")],1)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("head",[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro|Handlee|Pacifico",rel:"stylesheet"}})])}],a=(n("034f"),n("2877")),c={},i=Object(a["a"])(c,o,u,!1,null,null,null),l=i.exports,f=n("8c4f");r["a"].use(f["a"]);const s=[d("",n.e("chunk-57ec320d").then(n.bind(null,"bb51"))),d("home",n.e("chunk-57ec320d").then(n.bind(null,"bb51"))),d("nedStory",n.e("chunk-2d0e95f1").then(n.bind(null,"8cf6"))),d("coffee",n.e("chunk-2d0d7487").then(n.bind(null,"75c6"))),d("food",n.e("chunk-2d213b29").then(n.bind(null,"ae7f")))];function d(e,t){return{path:"/"+e,name:e,component:function(){return t}}}const p=new f["a"]({routes:s});var h=p;r["a"].config.productionTip=!1,new r["a"]({router:h,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.247b9ad8.js.map