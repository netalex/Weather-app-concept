parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"j33M":[function(require,module,exports) {
"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"xyyE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=t(require("../_lib/requiredArgs/index.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){(0,e.default)(1,arguments);var r=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===r?new Date(t.getTime()):"number"==typeof t||"[object Number]"===r?new Date(t):("string"!=typeof t&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}
},{"../_lib/requiredArgs/index.js":"j33M"}],"TNzJ":[function(require,module,exports) {
"use strict";function e(e){if(null===e||!0===e||!1===e)return NaN;var r=Number(e);return isNaN(r)?r:r<0?Math.ceil(r):Math.floor(r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"HO3d":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=u(require("../toDate/index.js")),r=u(require("../_lib/toInteger/index.js")),t=u(require("../_lib/requiredArgs/index.js"));function u(e){return e&&e.__esModule?e:{default:e}}function i(u){(0,t.default)(1,arguments);var i=(0,r.default)(u);return(0,e.default)(1e3*i)}
},{"../toDate/index.js":"xyyE","../_lib/toInteger/index.js":"TNzJ","../_lib/requiredArgs/index.js":"j33M"}],"GBBb":[function(require,module,exports) {
module.exports="/LosAngeles.16f6ae07.jpg";
},{}],"Oc4J":[function(require,module,exports) {
module.exports="/milano.d01c37dd.jpg";
},{}],"oZYS":[function(require,module,exports) {
module.exports="/roma.6245c2be.jpg";
},{}],"m0ih":[function(require,module,exports) {
module.exports="/sanFrancisco.4798b65b.jpg";
},{}],"FYL4":[function(require,module,exports) {
module.exports={LosAngeles:require("./LosAngeles.jpg"),milano:require("./milano.jpg"),roma:require("./roma.jpg"),sanFrancisco:require("./sanFrancisco.jpg")};
},{"./LosAngeles.jpg":"GBBb","./milano.jpg":"Oc4J","./roma.jpg":"oZYS","./sanFrancisco.jpg":"m0ih"}],"s1LM":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e=t(require("date-fns/fromUnixTime")),a=t(require("../img/*.jpg"));function t(e){return e&&e.__esModule?e:{default:e}}const n="../img",l="61041e80233a8a40dbfc8a80a89dc295",i="https://api.openweathermap.org",o="/data/2.5",r="/onecall",c="lat",s="lon",m="appid",d=[{cityName:"los angeles",lat:45.4642,lon:-118.243683,img:"LosAngeles"},{cityName:"san francisco",lat:37.773972,lon:-122.431297,img:"sanFrancisco"},{cityName:"milano",lat:45.4642,lon:9.19,img:"milano"},{cityName:"roma",lat:41.902782,lon:12.496366,img:"roma"}];async function g(t,n){let l=[];for(let a=0;a<t.length;a++){const d=t[a];let u=`${i}${o}${r}?${c}=${d.lat}&${s}=${d.lon}&${m}=${n}&units=metric&exclude=minutely,hourly`;console.log(`fetching city ${d.cityName}`);try{let n=await fetch(u).then(e=>e.json());l.push(n);const i={date:n.current.dt,wType:n.current.weather[0].main,temp:n.current.temp,min:n.daily[0].temp.min,max:n.daily[0].temp.max,week:[]};for(let a=0;a<n.daily.length;a++){const t=n.daily[a],l=new Date((0,e.default)(t.dt));let o="";switch(l.getDay()){case 0:o="SUN";break;case 1:o="MON";break;case 2:o="TUE";break;case 3:o="WED";break;case 4:o="THU";break;case 5:o="FRI";break;case 6:o="SAT"}i.week.push({dayName:o,wType:t.weather[0].icon,min:t.temp.min,max:t.temp.max})}t[a].today=i}catch(g){console.log("error: ",g)}}console.log(l),console.log(t);const d={speed:1e3,parallax:!0,grabCursor:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0},virtual:{slides:function(){let e=[];for(let a=0;a<t.length;a++)e.push(`<div id="bkg${[a]}" class="background-img"></div>`);return e}()}};new Swiper(".swiper-container",d);for(let e=0;e<t.length;e++)document.getElementById(`bkg${[e]}`).style.backgroundImage=`url(${a.default[t[e].img]})`}window.onload=function(){g(d,l).then(console.log("done"))};
},{"regenerator-runtime/runtime":"KA2S","date-fns/fromUnixTime":"HO3d","../img/*.jpg":"FYL4"}]},{},["s1LM"], null)
//# sourceMappingURL=/js.ed9abda4.js.map