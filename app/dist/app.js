(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.1.15/LICENSE
 */
(function(e,t){"use strict";if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){var e=Function.prototype.call;var t=Object.prototype;var r=e.bind(t.hasOwnProperty);var n=e.bind(t.propertyIsEnumerable);var o=e.bind(t.toString);var i;var c;var f;var a;var l=r(t,"__defineGetter__");if(l){i=e.bind(t.__defineGetter__);c=e.bind(t.__defineSetter__);f=e.bind(t.__lookupGetter__);a=e.bind(t.__lookupSetter__)}if(!Object.getPrototypeOf){Object.getPrototypeOf=function getPrototypeOf(e){var r=e.__proto__;if(r||r===null){return r}else if(o(e.constructor)==="[object Function]"){return e.constructor.prototype}else if(e instanceof Object){return t}else{return null}}}var u=function doesGetOwnPropertyDescriptorWork(e){try{e.sentinel=0;return Object.getOwnPropertyDescriptor(e,"sentinel").value===0}catch(t){return false}};if(Object.defineProperty){var p=u({});var s=typeof document==="undefined"||u(document.createElement("div"));if(!s||!p){var b=Object.getOwnPropertyDescriptor}}if(!Object.getOwnPropertyDescriptor||b){var O="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function getOwnPropertyDescriptor(e,o){if(typeof e!=="object"&&typeof e!=="function"||e===null){throw new TypeError(O+e)}if(b){try{return b.call(Object,e,o)}catch(i){}}var c;if(!r(e,o)){return c}c={enumerable:n(e,o),configurable:true};if(l){var u=e.__proto__;var p=e!==t;if(p){e.__proto__=t}var s=f(e,o);var y=a(e,o);if(p){e.__proto__=u}if(s||y){if(s){c.get=s}if(y){c.set=y}return c}}c.value=e[o];c.writable=true;return c}}if(!Object.getOwnPropertyNames){Object.getOwnPropertyNames=function getOwnPropertyNames(e){return Object.keys(e)}}if(!Object.create){var y;var d=!({__proto__:null}instanceof Object);var j=function shouldUseActiveX(){if(!document.domain){return false}try{return!!new ActiveXObject("htmlfile")}catch(e){return false}};var v=function getEmptyViaActiveX(){var e;var t;t=new ActiveXObject("htmlfile");t.write("<script></script>");t.close();e=t.parentWindow.Object.prototype;t=null;return e};var _=function getEmptyViaIFrame(){var e=document.createElement("iframe");var t=document.body||document.documentElement;var r;e.style.display="none";t.appendChild(e);e.src="javascript:";r=e.contentWindow.Object.prototype;t.removeChild(e);e=null;return r};if(d||typeof document==="undefined"){y=function(){return{__proto__:null}}}else{y=function(){var e=j()?v():_();delete e.constructor;delete e.hasOwnProperty;delete e.propertyIsEnumerable;delete e.isPrototypeOf;delete e.toLocaleString;delete e.toString;delete e.valueOf;var t=function Empty(){};t.prototype=e;y=function(){return new t};return new t}}Object.create=function create(e,t){var r;var n=function Type(){};if(e===null){r=y()}else{if(typeof e!=="object"&&typeof e!=="function"){throw new TypeError("Object prototype may only be an Object or null")}n.prototype=e;r=new n;r.__proto__=e}if(t!==void 0){Object.defineProperties(r,t)}return r}}var w=function doesDefinePropertyWork(e){try{Object.defineProperty(e,"sentinel",{});return"sentinel"in e}catch(t){return false}};if(Object.defineProperty){var m=w({});var P=typeof document==="undefined"||w(document.createElement("div"));if(!m||!P){var E=Object.defineProperty,h=Object.defineProperties}}if(!Object.defineProperty||E){var g="Property description must be an object: ";var z="Object.defineProperty called on non-object: ";var T="getters & setters can not be defined on this javascript engine";Object.defineProperty=function defineProperty(e,r,n){if(typeof e!=="object"&&typeof e!=="function"||e===null){throw new TypeError(z+e)}if(typeof n!=="object"&&typeof n!=="function"||n===null){throw new TypeError(g+n)}if(E){try{return E.call(Object,e,r,n)}catch(o){}}if("value"in n){if(l&&(f(e,r)||a(e,r))){var u=e.__proto__;e.__proto__=t;delete e[r];e[r]=n.value;e.__proto__=u}else{e[r]=n.value}}else{if(!l&&("get"in n||"set"in n)){throw new TypeError(T)}if("get"in n){i(e,r,n.get)}if("set"in n){c(e,r,n.set)}}return e}}if(!Object.defineProperties||h){Object.defineProperties=function defineProperties(e,t){if(h){try{return h.call(Object,e,t)}catch(r){}}Object.keys(t).forEach(function(r){if(r!=="__proto__"){Object.defineProperty(e,r,t[r])}});return e}}if(!Object.seal){Object.seal=function seal(e){if(Object(e)!==e){throw new TypeError("Object.seal can only be called on Objects.")}return e}}if(!Object.freeze){Object.freeze=function freeze(e){if(Object(e)!==e){throw new TypeError("Object.freeze can only be called on Objects.")}return e}}try{Object.freeze(function(){})}catch(x){Object.freeze=function(e){return function freeze(t){if(typeof t==="function"){return t}else{return e(t)}}}(Object.freeze)}if(!Object.preventExtensions){Object.preventExtensions=function preventExtensions(e){if(Object(e)!==e){throw new TypeError("Object.preventExtensions can only be called on Objects.")}return e}}if(!Object.isSealed){Object.isSealed=function isSealed(e){if(Object(e)!==e){throw new TypeError("Object.isSealed can only be called on Objects.")}return false}}if(!Object.isFrozen){Object.isFrozen=function isFrozen(e){if(Object(e)!==e){throw new TypeError("Object.isFrozen can only be called on Objects.")}return false}}if(!Object.isExtensible){Object.isExtensible=function isExtensible(e){if(Object(e)!==e){throw new TypeError("Object.isExtensible can only be called on Objects.")}var t="";while(r(e,t)){t+="?"}e[t]=true;var n=r(e,t);delete e[t];return n}}});


},{}],2:[function(require,module,exports){
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.1.15/LICENSE
 */
(function(e,t){"use strict";if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){var e=Array;var t=e.prototype;var r=Object;var n=r.prototype;var i=Function.prototype;var a=String;var o=a.prototype;var l=Number;var u=l.prototype;var f=t.slice;var s=t.splice;var c=t.push;var v=t.unshift;var p=t.concat;var h=i.call;var g=Math.max;var y=Math.min;var d=n.toString;var w=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var m;var b=Function.prototype.toString,T=function tryFunctionObject(e){try{b.call(e);return true}catch(t){return false}},x="[object Function]",O="[object GeneratorFunction]";m=function isCallable(e){if(typeof e!=="function"){return false}if(w){return T(e)}var t=d.call(e);return t===x||t===O};var S;var j=RegExp.prototype.exec,E=function tryRegexExec(e){try{j.call(e);return true}catch(t){return false}},I="[object RegExp]";S=function isRegex(e){if(typeof e!=="object"){return false}return w?E(e):d.call(e)===I};var D;var M=String.prototype.valueOf,N=function tryStringObject(e){try{M.call(e);return true}catch(t){return false}},k="[object String]";D=function isString(e){if(typeof e==="string"){return true}if(typeof e!=="object"){return false}return w?N(e):d.call(e)===k};var U=function(e){var t=r.defineProperty&&function(){try{var e={};r.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e){return false}return e.x===e}catch(n){return false}}();var n;if(t){n=function(e,t,n,i){if(!i&&t in e){return}r.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:n})}}else{n=function(e,t,r,n){if(!n&&t in e){return}e[t]=r}}return function defineProperties(t,r,i){for(var a in r){if(e.call(r,a)){n(t,a,r[a],i)}}}}(n.hasOwnProperty);var F=function isPrimitive(e){var t=typeof e;return e===null||t!=="object"&&t!=="function"};var R=l.isNaN||function(e){return e!==e};var A={ToInteger:function ToInteger(e){var t=+e;if(R(t)){t=0}else if(t!==0&&t!==1/0&&t!==-(1/0)){t=(t>0||-1)*Math.floor(Math.abs(t))}return t},ToPrimitive:function ToPrimitive(e){var t,r,n;if(F(e)){return e}r=e.valueOf;if(m(r)){t=r.call(e);if(F(t)){return t}}n=e.toString;if(m(n)){t=n.call(e);if(F(t)){return t}}throw new TypeError},ToObject:function(e){if(e==null){throw new TypeError("can't convert "+e+" to object")}return r(e)},ToUint32:function ToUint32(e){return e>>>0}};var $=function Empty(){};U(i,{bind:function bind(e){var t=this;if(!m(t)){throw new TypeError("Function.prototype.bind called on incompatible "+t)}var n=f.call(arguments,1);var i;var a=function(){if(this instanceof i){var a=t.apply(this,p.call(n,f.call(arguments)));if(r(a)===a){return a}return this}else{return t.apply(e,p.call(n,f.call(arguments)))}};var o=g(0,t.length-n.length);var l=[];for(var u=0;u<o;u++){c.call(l,"$"+u)}i=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this, arguments); }")(a);if(t.prototype){$.prototype=t.prototype;i.prototype=new $;$.prototype=null}return i}});var C=h.bind(n.hasOwnProperty);var P=h.bind(n.toString);var Z=h.bind(o.slice);var J=h.bind(o.split);var z=e.isArray||function isArray(e){return P(e)==="[object Array]"};var B=[].unshift(0)!==1;U(t,{unshift:function(){v.apply(this,arguments);return this.length}},B);U(e,{isArray:z});var G=r("a");var H=G[0]!=="a"||!(0 in G);var L=function properlyBoxed(e){var t=true;var r=true;if(e){e.call("foo",function(e,r,n){if(typeof n!=="object"){t=false}});e.call([1],function(){"use strict";r=typeof this==="string"},"x")}return!!e&&t&&r};U(t,{forEach:function forEach(e){var t=A.ToObject(this);var r=H&&D(this)?J(this,""):t;var n=-1;var i=A.ToUint32(r.length);var a;if(arguments.length>1){a=arguments[1]}if(!m(e)){throw new TypeError("Array.prototype.forEach callback must be a function")}while(++n<i){if(n in r){if(typeof a==="undefined"){e(r[n],n,t)}else{e.call(a,r[n],n,t)}}}}},!L(t.forEach));U(t,{map:function map(t){var r=A.ToObject(this);var n=H&&D(this)?J(this,""):r;var i=A.ToUint32(n.length);var a=e(i);var o;if(arguments.length>1){o=arguments[1]}if(!m(t)){throw new TypeError("Array.prototype.map callback must be a function")}for(var l=0;l<i;l++){if(l in n){if(typeof o==="undefined"){a[l]=t(n[l],l,r)}else{a[l]=t.call(o,n[l],l,r)}}}return a}},!L(t.map));U(t,{filter:function filter(e){var t=A.ToObject(this);var r=H&&D(this)?J(this,""):t;var n=A.ToUint32(r.length);var i=[];var a;var o;if(arguments.length>1){o=arguments[1]}if(!m(e)){throw new TypeError("Array.prototype.filter callback must be a function")}for(var l=0;l<n;l++){if(l in r){a=r[l];if(typeof o==="undefined"?e(a,l,t):e.call(o,a,l,t)){c.call(i,a)}}}return i}},!L(t.filter));U(t,{every:function every(e){var t=A.ToObject(this);var r=H&&D(this)?J(this,""):t;var n=A.ToUint32(r.length);var i;if(arguments.length>1){i=arguments[1]}if(!m(e)){throw new TypeError("Array.prototype.every callback must be a function")}for(var a=0;a<n;a++){if(a in r&&!(typeof i==="undefined"?e(r[a],a,t):e.call(i,r[a],a,t))){return false}}return true}},!L(t.every));U(t,{some:function some(e){var t=A.ToObject(this);var r=H&&D(this)?J(this,""):t;var n=A.ToUint32(r.length);var i;if(arguments.length>1){i=arguments[1]}if(!m(e)){throw new TypeError("Array.prototype.some callback must be a function")}for(var a=0;a<n;a++){if(a in r&&(typeof i==="undefined"?e(r[a],a,t):e.call(i,r[a],a,t))){return true}}return false}},!L(t.some));var X=false;if(t.reduce){X=typeof t.reduce.call("es5",function(e,t,r,n){return n})==="object"}U(t,{reduce:function reduce(e){var t=A.ToObject(this);var r=H&&D(this)?J(this,""):t;var n=A.ToUint32(r.length);if(!m(e)){throw new TypeError("Array.prototype.reduce callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var a;if(arguments.length>=2){a=arguments[1]}else{do{if(i in r){a=r[i++];break}if(++i>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<n;i++){if(i in r){a=e(a,r[i],i,t)}}return a}},!X);var Y=false;if(t.reduceRight){Y=typeof t.reduceRight.call("es5",function(e,t,r,n){return n})==="object"}U(t,{reduceRight:function reduceRight(e){var t=A.ToObject(this);var r=H&&D(this)?J(this,""):t;var n=A.ToUint32(r.length);if(!m(e)){throw new TypeError("Array.prototype.reduceRight callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")}var i;var a=n-1;if(arguments.length>=2){i=arguments[1]}else{do{if(a in r){i=r[a--];break}if(--a<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(a<0){return i}do{if(a in r){i=e(i,r[a],a,t)}}while(a--);return i}},!Y);var q=t.indexOf&&[0,1].indexOf(1,2)!==-1;U(t,{indexOf:function indexOf(e){var t=H&&D(this)?J(this,""):A.ToObject(this);var r=A.ToUint32(t.length);if(r===0){return-1}var n=0;if(arguments.length>1){n=A.ToInteger(arguments[1])}n=n>=0?n:g(0,r+n);for(;n<r;n++){if(n in t&&t[n]===e){return n}}return-1}},q);var K=t.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;U(t,{lastIndexOf:function lastIndexOf(e){var t=H&&D(this)?J(this,""):A.ToObject(this);var r=A.ToUint32(t.length);if(r===0){return-1}var n=r-1;if(arguments.length>1){n=y(n,A.ToInteger(arguments[1]))}n=n>=0?n:r-Math.abs(n);for(;n>=0;n--){if(n in t&&e===t[n]){return n}}return-1}},K);var Q=function(){var e=[1,2];var t=e.splice();return e.length===2&&z(t)&&t.length===0}();U(t,{splice:function splice(e,t){if(arguments.length===0){return[]}else{return s.apply(this,arguments)}}},!Q);var V=function(){var e={};t.splice.call(e,0,0,1);return e.length===1}();U(t,{splice:function splice(e,t){if(arguments.length===0){return[]}var r=arguments;this.length=g(A.ToInteger(this.length),0);if(arguments.length>0&&typeof t!=="number"){r=f.call(arguments);if(r.length<2){c.call(r,this.length-e)}else{r[1]=A.ToInteger(t)}}return s.apply(this,r)}},!V);var W=function(){var t=new e(1e5);t[8]="x";t.splice(1,1);return t.indexOf("x")===7}();var _=function(){var e=256;var t=[];t[e]="a";t.splice(e+1,0,"b");return t[e]==="a"}();U(t,{splice:function splice(e,t){var r=A.ToObject(this);var n=[];var i=A.ToUint32(r.length);var o=A.ToInteger(e);var l=o<0?g(i+o,0):y(o,i);var u=y(g(A.ToInteger(t),0),i-l);var s=0;var c;while(s<u){c=a(l+s);if(C(r,c)){n[s]=r[c]}s+=1}var v=f.call(arguments,2);var p=v.length;var h;if(p<u){s=l;while(s<i-u){c=a(s+u);h=a(s+p);if(C(r,c)){r[h]=r[c]}else{delete r[h]}s+=1}s=i;while(s>i-u+p){delete r[s-1];s-=1}}else if(p>u){s=i-u;while(s>l){c=a(s+u-1);h=a(s+p-1);if(C(r,c)){r[h]=r[c]}else{delete r[h]}s-=1}}s=l;for(var d=0;d<v.length;++d){r[s]=v[d];s+=1}r.length=i-u+p;return n}},!W||!_);var ee=!{toString:null}.propertyIsEnumerable("toString");var te=function(){}.propertyIsEnumerable("prototype");var re=!C("x","0");var ne=function(e){var t=e.constructor;return t&&t.prototype===e};var ie={$window:true,$console:true,$parent:true,$self:true,$frame:true,$frames:true,$frameElement:true,$webkitIndexedDB:true,$webkitStorageInfo:true};var ae=function(){if(typeof window==="undefined"){return false}for(var e in window){try{if(!ie["$"+e]&&C(window,e)&&window[e]!==null&&typeof window[e]==="object"){ne(window[e])}}catch(t){return true}}return false}();var oe=function(e){if(typeof window==="undefined"||!ae){return ne(e)}try{return ne(e)}catch(t){return false}};var le=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ue=le.length;var fe=function isArguments(e){return P(e)==="[object Arguments]"};var se=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&!z(e)&&m(e.callee)};var ce=fe(arguments)?fe:se;U(r,{keys:function keys(e){var t=m(e);var r=ce(e);var n=e!==null&&typeof e==="object";var i=n&&D(e);if(!n&&!t&&!r){throw new TypeError("Object.keys called on a non-object")}var o=[];var l=te&&t;if(i&&re||r){for(var u=0;u<e.length;++u){c.call(o,a(u))}}if(!r){for(var f in e){if(!(l&&f==="prototype")&&C(e,f)){c.call(o,a(f))}}}if(ee){var s=oe(e);for(var v=0;v<ue;v++){var p=le[v];if(!(s&&p==="constructor")&&C(e,p)){c.call(o,p)}}}return o}});var ve=r.keys&&function(){return r.keys(arguments).length===2}(1,2);var pe=r.keys&&function(){var e=r.keys(arguments);return arguments.length!==1||e.length!==1||e[0]!==1}(1);var he=r.keys;U(r,{keys:function keys(e){if(ce(e)){return he(f.call(e))}else{return he(e)}}},!ve||pe);var ge=-621987552e5;var ye="-000001";var de=Date.prototype.toISOString&&new Date(ge).toISOString().indexOf(ye)===-1;var we=Date.prototype.toISOString&&new Date(-1).toISOString()!=="1969-12-31T23:59:59.999Z";U(Date.prototype,{toISOString:function toISOString(){var e,t,r,n,i;if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}n=this.getUTCFullYear();i=this.getUTCMonth();n+=Math.floor(i/12);i=(i%12+12)%12;e=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];n=(n<0?"-":n>9999?"+":"")+Z("00000"+Math.abs(n),0<=n&&n<=9999?-4:-6);t=e.length;while(t--){r=e[t];if(r<10){e[t]="0"+r}}return n+"-"+f.call(e,0,2).join("-")+"T"+f.call(e,2).join(":")+"."+Z("000"+this.getUTCMilliseconds(),-3)+"Z"}},de||we);var me=function(){try{return Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(ge).toJSON().indexOf(ye)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(e){return false}}();if(!me){Date.prototype.toJSON=function toJSON(e){var t=r(this);var n=A.ToPrimitive(t);if(typeof n==="number"&&!isFinite(n)){return null}var i=t.toISOString;if(!m(i)){throw new TypeError("toISOString property is not callable")}return i.call(t)}}var be=Date.parse("+033658-09-27T01:46:40.000Z")===1e15;var Te=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));var xe=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(xe||Te||!be){var Oe=Math.pow(2,31)-1;var Se=Math.floor(Oe/1e3);var je=R(new Date(1970,0,1,0,0,0,Oe+1).getTime());Date=function(e){var t=function Date(r,n,i,o,l,u,f){var s=arguments.length;var c;if(this instanceof e){var v=u;var p=f;if(je&&s>=7&&f>Oe){var h=Math.floor(f/Oe)*Oe;var g=Math.floor(h/1e3);v+=g;p-=g*1e3}c=s===1&&a(r)===r?new e(t.parse(r)):s>=7?new e(r,n,i,o,l,v,p):s>=6?new e(r,n,i,o,l,v):s>=5?new e(r,n,i,o,l):s>=4?new e(r,n,i,o):s>=3?new e(r,n,i):s>=2?new e(r,n):s>=1?new e(r):new e}else{c=e.apply(this,arguments)}if(!F(c)){U(c,{constructor:t},true)}return c};var r=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var n=[0,31,59,90,120,151,181,212,243,273,304,334,365];var i=function dayFromMonth(e,t){var r=t>1?1:0;return n[t]+Math.floor((e-1969+r)/4)-Math.floor((e-1901+r)/100)+Math.floor((e-1601+r)/400)+365*(e-1970)};var o=function toUTC(t){var r=0;var n=t;if(je&&n>Oe){var i=Math.floor(n/Oe)*Oe;var a=Math.floor(i/1e3);r+=a;n-=a*1e3}return l(new e(1970,0,1,0,0,r,n))};for(var u in e){if(C(e,u)){t[u]=e[u]}}U(t,{now:e.now,UTC:e.UTC},true);t.prototype=e.prototype;U(t.prototype,{constructor:t},true);var f=function parse(t){var n=r.exec(t);if(n){var a=l(n[1]),u=l(n[2]||1)-1,f=l(n[3]||1)-1,s=l(n[4]||0),c=l(n[5]||0),v=l(n[6]||0),p=Math.floor(l(n[7]||0)*1e3),h=Boolean(n[4]&&!n[8]),g=n[9]==="-"?1:-1,y=l(n[10]||0),d=l(n[11]||0),w;var m=c>0||v>0||p>0;if(s<(m?24:25)&&c<60&&v<60&&p<1e3&&u>-1&&u<12&&y<24&&d<60&&f>-1&&f<i(a,u+1)-i(a,u)){w=((i(a,u)+f)*24+s+y*g)*60;w=((w+c+d*g)*60+v)*1e3+p;if(h){w=o(w)}if(-864e13<=w&&w<=864e13){return w}}return NaN}return e.parse.apply(this,arguments)};U(t,{parse:f});return t}(Date)}if(!Date.now){Date.now=function now(){return(new Date).getTime()}}var Ee=u.toFixed&&(8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)!=="1"||1.255.toFixed(2)!=="1.25"||0xde0b6b3a7640080.toFixed(0)!=="1000000000000000128");var Ie={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function multiply(e,t){var r=-1;var n=t;while(++r<Ie.size){n+=e*Ie.data[r];Ie.data[r]=n%Ie.base;n=Math.floor(n/Ie.base)}},divide:function divide(e){var t=Ie.size,r=0;while(--t>=0){r+=Ie.data[t];Ie.data[t]=Math.floor(r/e);r=r%e*Ie.base}},numToString:function numToString(){var e=Ie.size;var t="";while(--e>=0){if(t!==""||e===0||Ie.data[e]!==0){var r=a(Ie.data[e]);if(t===""){t=r}else{t+=Z("0000000",0,7-r.length)+r}}}return t},pow:function pow(e,t,r){return t===0?r:t%2===1?pow(e,t-1,r*e):pow(e*e,t/2,r)},log:function log(e){var t=0;var r=e;while(r>=4096){t+=12;r/=4096}while(r>=2){t+=1;r/=2}return t}};U(u,{toFixed:function toFixed(e){var t,r,n,i,o,u,f,s;t=l(e);t=R(t)?0:Math.floor(t);if(t<0||t>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}r=l(this);if(R(r)){return"NaN"}if(r<=-1e21||r>=1e21){return a(r)}n="";if(r<0){n="-";r=-r}i="0";if(r>1e-21){o=Ie.log(r*Ie.pow(2,69,1))-69;u=o<0?r*Ie.pow(2,-o,1):r/Ie.pow(2,o,1);u*=4503599627370496;o=52-o;if(o>0){Ie.multiply(0,u);f=t;while(f>=7){Ie.multiply(1e7,0);f-=7}Ie.multiply(Ie.pow(10,f,1),0);f=o-1;while(f>=23){Ie.divide(1<<23);f-=23}Ie.divide(1<<f);Ie.multiply(1,1);Ie.divide(2);i=Ie.numToString()}else{Ie.multiply(0,u);Ie.multiply(1<<-o,0);i=Ie.numToString()+Z("0.00000000000000000000",2,2+t)}}if(t>0){s=i.length;if(s<=t){i=n+Z("0.0000000000000000000",0,t-s+2)+i}else{i=n+Z(i,0,s-t)+"."+Z(i,s-t)}}else{i=n+i}return i}},Ee);if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var e=typeof/()??/.exec("")[1]==="undefined";var t=Math.pow(2,32)-1;o.split=function(r,n){var i=this;if(typeof r==="undefined"&&n===0){return[]}if(!S(r)){return J(this,r,n)}var a=[];var o=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(r.sticky?"y":""),l=0,u,s,v,p;var h=new RegExp(r.source,o+"g");i+="";if(!e){u=new RegExp("^"+h.source+"$(?!\\s)",o)}var g=typeof n==="undefined"?t:A.ToUint32(n);s=h.exec(i);while(s){v=s.index+s[0].length;if(v>l){c.call(a,Z(i,l,s.index));if(!e&&s.length>1){s[0].replace(u,function(){for(var e=1;e<arguments.length-2;e++){if(typeof arguments[e]==="undefined"){s[e]=void 0}}})}if(s.length>1&&s.index<i.length){c.apply(a,f.call(s,1))}p=s[0].length;l=v;if(a.length>=g){break}}if(h.lastIndex===s.index){h.lastIndex++}s=h.exec(i)}if(l===i.length){if(p||!h.test("")){c.call(a,"")}}else{c.call(a,Z(i,l))}return a.length>g?Z(a,0,g):a}})()}else if("0".split(void 0,0).length){o.split=function split(e,t){if(typeof e==="undefined"&&t===0){return[]}return J(this,e,t)}}var De=o.replace;var Me=function(){var e=[];"x".replace(/x(.)?/g,function(t,r){c.call(e,r)});return e.length===1&&typeof e[0]==="undefined"}();if(!Me){o.replace=function replace(e,t){var r=m(t);var n=S(e)&&/\)[*?]/.test(e.source);if(!r||!n){return De.call(this,e,t)}else{var i=function(r){var n=arguments.length;var i=e.lastIndex;e.lastIndex=0;var a=e.exec(r)||[];e.lastIndex=i;c.call(a,arguments[n-2],arguments[n-1]);return t.apply(this,a)};return De.call(this,e,i)}}}var Ne=o.substr;var ke="".substr&&"0b".substr(-1)!=="b";U(o,{substr:function substr(e,t){var r=e;if(e<0){r=g(this.length+e,0)}return Ne.call(this,r,t)}},ke);var Ue="	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";var Fe="\u200b";var Re="["+Ue+"]";var Ae=new RegExp("^"+Re+Re+"*");var $e=new RegExp(Re+Re+"*$");var Ce=o.trim&&(Ue.trim()||!Fe.trim());U(o,{trim:function trim(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}return a(this).replace(Ae,"").replace($e,"")}},Ce);if(parseInt(Ue+"08")!==8||parseInt(Ue+"0x16")!==22){parseInt=function(e){var t=/^0[xX]/;return function parseInt(r,n){var i=a(r).trim();var o=l(n)||(t.test(i)?16:10);return e(i,o)}}(parseInt)}});


},{}],3:[function(require,module,exports){
Controller.$inject = ['$log'];

function AlertPanelDirective() {
  return {
    restrict: 'E',
    scope: {
      alerts: '=',
      mode: '@'
    },
    templateUrl: function(tElement, tAttrs) {
        return getTemplateUrl(tAttrs.mode);
    },
    controller: Controller,
    controllerAs: 'vm',
    bindToController: true
  };
}

function Controller($log) {
  var vm = this;

  function init() {
    $log.debug(new Date() + ': Starting alertDirective in mode: ' + vm.mode + ' with data:', vm.alerts);
  }

  init();
}

function getTemplateUrl(mode) {
  console.log('getting template for mode: ', mode);
  if (mode === 'single') {
    return '/app/tab4/alertbar.html';
  }

  return '/app/tab4/alertlist.html';
}


module.exports = AlertPanelDirective;

},{}],4:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false */

'use strict';

require('es5-shim');
require('es5-sham');

var router = require('./router'),
    bootstrapper = require('./bootstrapper'),
    promiseWaiter = require('./promiseWaiterCtrl'),
    dataService = require('./dataService'),
    tabsController = require('./tabs/tabsCtrl'),
    alertPanel = require('./alerts/alertPanelDirective')
    ;

//require('angular-ui-router');
//require('angular-ui-bootstrap');

var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'angularModalService']);
app.run(bootstrapper);
app.config(router);
app.controller('promiseWaiter', promiseWaiter);
app.factory('dataService', dataService);
app.directive('alertPanel', alertPanel);

require('./draggable/index');
require('./tabs/index');

},{"./alerts/alertPanelDirective":3,"./bootstrapper":5,"./dataService":7,"./draggable/index":12,"./promiseWaiterCtrl":14,"./router":15,"./tabs/index":17,"./tabs/tabsCtrl":21,"es5-sham":1,"es5-shim":2}],5:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

module.exports = function($log) {
  $log.debug('runBlock begin...');


  $log.debug('runBlock end.');
};

},{}],6:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

module.exports = Contact;

function Contact() { }

Contact.prototype.isDirty = function() {
    return this._isDirty;
};

Contact.prototype.markDirty = function() {
    this._isDirty = true;
};

Contact.prototype.propertyChanged = function(propName) {
    this.markDirty();
};

Contact.prototype.getSetFirstName = function(newValue) {
    if ( arguments.length ) {
        // a value or null or undefined was pass, consider it a setter
        if (newValue !== this.firstName) {
            // something is changing
            // a value or null or undefined was pass, consider it a setter
            this.firstName = newValue;
            this._isDirty = true;
        }
    }

    return this.firstName;
};

Contact.prototype.getSetLastName = function(newValue) {
    if (arguments.length) {
        // a value or null or undefined was pass, consider it a setter
        if (newValue !== this.lastName) {
            // something is changing
            this.lastName = newValue;
            this._isDirty = true;
        }
    }

    return this.lastName;
};

},{}],7:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

var Contact = require('./contact');

dataService.$inject = ['$http', '$q', '$timeout'];

function dataService($http, $q, $timeout) {
    var currentItem = {},
        contact = new Contact(),
        items = [],
        isLoading = false,
        data = {};

    angular.extend(contact, currentItem);
    data.item = contact;
    data.items = items;

    var select = function(id) {
        var self = this;
        self.isLoading = true;
        self.data.item = {};

        var deferred = $q.defer();
        $timeout(function() {
            var item;
            for (var itemId = 0; itemId < self.items.length; itemId ++ ) {
                if (self.items[itemId] && self.items[itemId].id === id) {
                    item = self.items[itemId];
                    break;
                }
            }

            if (item) {
                self.currentItem = item;
                var contact = new Contact();
                angular.extend(contact, item);
                self.data.item = contact;
                deferred.resolve(contact);
                self.isLoading = false;
            } else {
                deferred.reject('Unable to locate item with id ' + id);
            }
        }, 5000);

        return deferred.promise;
    };

    function buildUp(self) {
        var items = [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                address: {
                    street: '123 Any Street',
                    city: 'Anytown',
                    state: 'WA',
                    zip: '98100'
                },
                dob: '1/2/1934',
                gender: 'M',
                occupation: 'Old Guy',
                hobbies: [
                    'fishing',
                    'gabbing',
                    'drinking coffee'
                ]
            },
            {
                id: 2,
                firstName: 'Missy',
                lastName: 'Belle',
                address: {
                    street: '234 Some Street',
                    city: 'Sometown',
                    state: 'WA',
                    zip: '98200'
                },
                dob: '6/7/1957',
                gender: 'F',
                occupation: 'Debutante',
                hobbies: [
                    'shopping',
                    'gossipping'
                ]
            },
            {
                id: 3,
                firstName: 'Devon',
                lastName: 'Dude',
                address: {
                    street: '456 10th Street',
                    city: 'Narrowtown',
                    state: 'WA',
                    zip: '98300'
                },
                dob: '8/9/1982',
                gender: 'M',
                occupation: 'Hacker',
                hobbies: [
                    'coding',
                    'caffeine',
                    'making stuff'
                ]
            }
        ];

        self.items = items;
        self.data.keys = [];

        for ( var i = 0; i < items.length; i++ ) {
            self.data.keys.push(items[i].id);
        }
        self.data.items = items;
    }

    var load = function() {
        var self = this;
        self.isLoading = true;
        var deferred = $q.defer();

        $timeout(function() {
            if (self.items.length === 0) {
                buildUp(self);
            }

            self.data.items = self.items;
            deferred.resolve(self.items);
            self.isLoading = false;
        }, 2000);

        return deferred.promise;
    };

    return {
        currentItem: currentItem,
        items: items,
        load: load,
        select: select,
        data: data
    };
}

module.exports = dataService;

},{"./contact":6}],8:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

module.exports = function() {

  var start = function(event, ui) {
    ui.helper.addClass('ui-dragging');
  };

  var stop = function(event, ui) {

  };

  var linker = function(scope, element, attrs) {
    element.draggable({
        containment: 'document',
        helper: 'clone',
        cursor: 'move',
        revert: 'invalid',
        revertDuration: 500,
        start: start,
        stop: stop,
        stack: '.ui-draggable'
    });

    var parentId = element.parent()[0].id;
    element.data('list', parentId);
    element.addClass('ui-draggable');
  };

  return {
    restrict: 'A',
    link: linker,
    scope: {
      itemString: '@item'
    }
  };
};

},{}],9:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

function DraggableListController($log) {
	var vm = this;

	$log.debug('In draggableList controller....');

	vm.onListMove = onListMove;

	function onListMove(item, fromListId, toList) {
		$log.debug('Moving item ' + item.name + ' to list ' + toList.id);
		vm.onDrop()(item, fromListId, toList);
	}
}

DraggableListController.$inject = ['$log'];

module.exports = function DraggableListDirective() {
	return {
		restrict: 'E',
		scope: {
			list: '=',
			onDrop: '&droppableDrop'
		},
		templateUrl: 'app/templates/hospital-census-item.html',
		controller: DraggableListController,
		controllerAs: 'vm',
		bindToController: true
	};
};

},{}],10:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

function Controller($log) {
	var vm = this;

	$log.debug('In draggableListList controller....');

	vm.onListMove = onListMove;

	function onListMove(item, fromListId, toList) {
		$log.debug('Moving item ' + item.name + ' to list ' + toList.id);
		// get the list we are pulling the item from
		var fromList = getListById(fromListId);
		// find the index of the item in the originating list
		var itemIndex = item.index;
		// put the item into the destination list
		toList.items.push(fromList.items[itemIndex]);
		// remove the item from the source list
          fromList.items.splice(itemIndex, 1);
	}

	function getListById(id) {
		for (var index=0; index < vm.lists.length; index++) {
			if (vm.lists[index].id === id) {
				return vm.lists[index];
			}
		}
	}
}

Controller.$inject = ['$log'];

module.exports = function Directive() {
	return {
		restrict: 'E',
		scope: {
			lists: '='
		},
		templateUrl: 'app/templates/hospital-census.html',
		controller: Controller,
		controllerAs: 'vm',
		bindToController: true,
		transclude: true
	};
};

},{}],11:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

module.exports = function() {

    var drop = function(event, ui, scope) {
        var dragItem = angular.element(ui.draggable).data('item'),
            reject = angular.element(ui.draggable).data('reject'),
            dragFromListId = angular.element(ui.draggable).data('list');

        if (reject) {
            ui.draggable.draggable('option', 'revert', true);
            return;
        }

        var moveToList = scope.model.list;

        if (dragItem && dragFromListId && moveToList && scope.onDrop) {
            scope.onDrop()(dragItem, dragFromListId, moveToList);
        }

        console.log('moving items from list to list:', dragItem, dragFromListId, moveToList);
        scope.$apply();
    };

    var link = function(scope, element, attrs) {
        element.droppable({
            hoverClass: 'ui-droppable-hover',
            drop: function(event, ui) {
                drop(event, ui, scope);
            }
        });
    };

    return {
        restrict: 'A',
        link: link,
        scope: {
            model: '=droppableModel',
            onDrop: '&droppableDrop'
        }
    };
};

},{}],12:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

var indexFilter = require('./indexFilter');
var droppable = require('./droppableDirective');
var draggable = require('./draggableDirective');
var list = require('./draggableListDirective');
var listOfLists = require('./draggableListListDirective');

angular
  .module('app')
  .filter('index', indexFilter)
  .directive('droppable', droppable)
  .directive('draggable', draggable)
  .directive('draggableList', list)
  .directive('draggableListList', listOfLists)
  ;

},{"./draggableDirective":8,"./draggableListDirective":9,"./draggableListListDirective":10,"./droppableDirective":11,"./indexFilter":13}],13:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

module.exports = function() {
    return function (array, index) {
        if (!index) {
            index = 'index';
        }

        for (var i=0; i < array.length; i++) {
            array[i][index] = i;
        }

        return array;
    };
};

},{}],14:[function(require,module,exports){
/* jslint node: true */
/* global require: false, module: false */

'use strict';

module.exports = PromiseWaiterController;

PromiseWaiterController.$inject = ['$scope', '$modalInstance', 'data'];

function PromiseWaiterController($scope, $modalInstance, data) {
    var vm = this;
    vm.messages = [];
    vm.showClose = false;
    vm.title = data.title;

    var closeModal = function(result) {
        $modalInstance.close(result);
    };

    vm.dismiss = function(result) {
        closeModal(result);
    };

    activate();

    ///////////////

    function activate() {
        vm.messages = [];
        vm.showClose = false;

        data.promise.then(function (result) {

            // we resolved successfully
            closeModal('OK');

        }, function(err) {

            // we erred
            vm.messages.push({
                type: 'error',
                message: err
            });
            vm.showClose = true;

        }, function(progress) {

            // we were notified
            vm.messages.push({
                type: 'info',
                message: progress
            });

        });
    }
}

},{}],15:[function(require,module,exports){
'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'app/app.html',
          controller: function($scope, $state) {
              this.state = "Home Route";

              this.go = function(route) {
                  $state.go(route);
              }
          },
          controllerAs: 'vm'
      })

      .state('dragDrop', {
          url: '/drag',
          templateUrl: 'app/dragDrop.html',
          controller: function() {
              var vm = this;

              vm.list1 = {
                  id: 'list1',
                  name: 'Software',
                  items: [
                      { name: 'JavaScript', reject: true },
                      { name: 'C#' },
                      { name: 'Sass' },
                      { name: 'SQL' },
                      { name: 'HTML' },
                      { name: 'Java' },
                      { name: 'NodeJS' },
                      { name: 'Ruby' },
                      { name: 'LESS' }
                  ]
              };

              vm.list2 = {
                  id: 'list2',
                  name: 'Beverages',
                  items: [
                      { name: 'Coffee' },
                      { name: 'Scotch' },
                      { name: 'Bourbon' }
                  ]
              };

              vm.list3 = {
                  id: 'list3',
                  name: 'Greek Gods',
                  items: [
                      { name: 'Zeus' },
                      { name: 'Athena' },
                      { name: 'Poseidon' }
                  ]
              }

              vm.list4 = {
                  id: 'list4',
                  name: 'Vegetables',
                  items: [
                      { name: 'Brussel Sprouts' },
                      { name: 'Cabbage' },
                      { name: 'Broccoli' }
                  ]
              }

              vm.list5 = {
                  id: 'list5',
                  name: 'Fruits',
                  items: [
                      { name: 'Bananas' },
                      { name: 'Oranges' },
                      { name: 'Apples' },
                      { name: 'Pears' }
                  ]
              }

              vm.lists = [
                  vm.list1,
                  vm.list2,
                  vm.list3,
                  vm.list4,
                  vm.list5
              ];

              vm.onListMove = function(list, item) {
                  console.log('Moving item ' + item.name + ' to list ' + list.id);
              }
          },
          controllerAs: 'vm'
      })

      .state('tabs', {
          url: '/tabs',
          templateUrl: 'app/tabs.html',
          controller: 'TabsController',
          controllerAs: 'vm'
      })

      .state('tabs.tab1', {
          url: '/tab1',
          views: {
              "": { templateUrl: 'app/tab1/tab1.html' },
              "left@tabs.tab1": {
                  templateUrl: 'app/tab1/left.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab1 Left';
                      this.data = dataService.data;
                  },
                  controllerAs: 'vm'
              },
              "middle@tabs.tab1": {
                  templateUrl: 'app/tab1/middle.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab1 Middle';
                      this.data = dataService.data;
                  },
                  controllerAs: 'vm'
              },
              "right@tabs.tab1": {
                  templateUrl: 'app/tab1/right.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab1 Right';
                      this.data = dataService.data;
                  },
                  controllerAs: 'vm'
              }
          }
      })

      .state('tabs.tab2', {
          url: '/tab2',
          views: {
              "": { templateUrl: 'app/tab2/tab2.html' },
              "left@tabs.tab2": {
                  templateUrl: 'app/tab2/left.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab2 Left';
                      this.item = dataService.data.item;
                  },
                  controllerAs: 'vm'
              },
              "middle@tabs.tab2": {
                  templateUrl: 'app/tab2/middle.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab2 Middle';
                      this.item = dataService.data.item;
                  },
                  controllerAs: 'vm'
              },
              "right@tabs.tab2": {
                  templateUrl: 'app/tab2/right.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab2 Right';
                      this.item = dataService.data.item;
                  },
                  controllerAs: 'vm'
              }
          }
      })

      .state('tabs.tab3', {
          url: '/tab3',
          views: {
              "": { templateUrl: 'app/tab3/tab3.html' },
              "left@tabs.tab3": {
                  templateUrl: 'app/tab3/left.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab3 Top';
                      this.item = dataService.currentItem;
                  },
                  controllerAs: 'vm'
              },
              "middle@tabs.tab3": {
                  templateUrl: 'app/tab3/middle.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab3 Middle';
                      this.item = dataService.currentItem;
                  },
                  controllerAs: 'vm'
              },
              "right@tabs.tab3": {
                  templateUrl: 'app/tab3/right.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab3 Bottom';
                      this.item = dataService.currentItem;
                  },
                  controllerAs: 'vm'
              }
          }
      })

      .state('tabs.tab4', {
          url: '/tab4',
          templateUrl: 'app/tab4/tab4Directive.html',
          controller: function($scope, dataService) {
              this.state = 'Nested Tab 4'
              this.data = dataService.data;
          }
      })

      .state('tabs.tab5', {
          url: '/tab5',
          template: '<tab-fourth data="vm.data" private-data="vm.privateData"></tab-fourth>'
      })
  ;

  $urlRouterProvider.otherwise('/');
};

},{}],16:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

function tabFourthLeftDirective() {
	return {
		restrict: 'E',
		scope: {
			data: '=',
			state: '@'
		},
		templateUrl: 'app/tab1/left.html',
		controller: Controller,
		controllerAs: 'vm',
		bindToController: true
	};
}

function Controller($log) {
	var vm = this;

	function init() {
		$log.debug(new Date() + ': Starting tab4-left directive with data:', vm.data);
	}

	init();
}

Controller.$inject = ['$log'];

module.exports = tabFourthLeftDirective;

},{}],17:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

var tabsCtrl = require('./tabsCtrl');
var tabFourth = require('./tabFourthDirective');
var tabFourthLeft = require('./TabFourthLeftDirective');
var tabFourthMiddle = require('./tabFourthMiddleDirective');
var tabFourthRight = require('./tabFourthRightDirective');

angular.module('app')
  .controller('TabsController', tabsCtrl)
  .directive('tabFourth', tabFourth)
  .directive('tabFourthLeft', tabFourthLeft)
  .directive('tabFourthMiddle', tabFourthMiddle)
  .directive('tabFourthRight', tabFourthRight)
  ;

},{"./TabFourthLeftDirective":16,"./tabFourthDirective":18,"./tabFourthMiddleDirective":19,"./tabFourthRightDirective":20,"./tabsCtrl":21}],18:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

function tabFourthDirective() {
	return {
		restrict: 'E',
		scope: {
			data: '=',
			privateData: '='
		},
		templateUrl: 'app/tab4/tab4Directive.html',
		controller: Controller,
		controllerAs: 'vm',
		bindToController: true
	};
}

function Controller($log) {
	var vm = this;

	function init() {
		$log.debug(new Date() + ': Starting tab4 directive with data:', vm.data);
	}

	init();
}

Controller.$inject = ['$log'];

module.exports = tabFourthDirective;

},{}],19:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

function tabFourthMiddleController($log) {
	var vm = this;

	function init() {
		$log.debug(new Date() + ': Starting tab4-middle directive with data:', vm.data);
	}

	init();
}

tabFourthMiddleController.$inject = ['$log'];

function tabFourthMiddleDirective() {
	return {
		restrict: 'E',
		scope: {
			data: '=',
			state: '@'
		},
		templateUrl: 'app/tab1/middle.html',
		controller: tabFourthMiddleController,
		controllerAs: 'vm',
		bindToController: true
	};
}

module.exports = tabFourthMiddleDirective;

},{}],20:[function(require,module,exports){
/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

function Controller($log) {
	var vm = this;

	function init() {
		$log.debug(new Date() + ': Starting tab4-right directive with data:', vm.data);
	}

	init();
}

Controller.$inject = ['$log'];

function tabFourthRightDirective() {
	return {
		restrict: 'E',
		scope: {
			data: '=',
			state: '@'
		},
		templateUrl: 'app/tab1/right.html',
		controller: Controller,
		controllerAs: 'vm',
		bindToController: true
	};
}

module.exports = tabFourthRightDirective;

},{}],21:[function(require,module,exports){
'use strict';

/* global module: false, require: false */

require('../dataService');
require('../promiseWaiterCtrl');

module.exports = TabsController;

TabsController.$inject = ['$scope', '$state', '$modal', 'dataService', 'ModalService'];

function TabsController($scope, $state, $modal, dataService, ModalService) {
    var vm = this;
    vm.state = 'Tabs Route';

    vm.go = function(route) {
        $state.go(route);
    };

    vm.tabs = [
      { id: 'tabs.tab1', title: 'Routed Tab', active: true, disabled: false, select: "vm.go('tabs.tab1')" },
      { id: 'tabs.tab2', title: 'Routed Tab w/ Layouts', active: false, disabled: false, select: "vm.go('tabs.tab2')" },
      { id: 'tabs.tab3', title: 'Toggled Tab', active: false, disabled: true, select: "vm.go('tabs.tab3')" },
      { id: 'tabs.tab4', title: 'Nested Directive', active: false, disabled: false, select: "vm.go('tabs.tab4')" },
      { id: 'tabs.tab5', title: 'Routed Directive', active: false, disabled: false, select: "vm.go('tabs.tab5')" },
    ];

    vm.shouldShowNext = shouldShowNext;
    vm.showNext = showNext;
    vm.shouldShowPrev = shouldShowPrev;
    vm.showPrev = showPrev;

    vm.data = dataService.data;
    vm.privateData = 'secret';

    activate();

    /////

    function getTabById(id) {
        for(var i=0; i<vm.tabs.length; i++) {
          if (vm.tabs[i].id === id) {
            return vm.tabs[i];
          }
        }
    }

    function setActiveTab(id) {
        for(var i=0; i<vm.tabs.length; i++) {
          vm.tabs[i].active = vm.tabs[i].id === id;
        }
    }

    function getNextId(array, currentId) {
        if (!array) { return; }
        var index = array.indexOf(currentId);
        if (index >= 0 && index < array.length - 1) {
            return array[index+1];
        }
    }

    function getPreviousId(array, currentId) {
        if (!array) { return; }
        var index = array.indexOf(currentId);
        if (index > 0) {
            return array[index-1];
        }
    }

    function hasCurrentItem() {
        return vm.data.item && vm.data.item.id && vm.data.keys && vm.data.keys.length;
    }

    function shouldShowNext() {
        if (hasCurrentItem()) {
            var nextId = getNextId(vm.data.keys, vm.data.item.id);
            return typeof nextId !== 'undefined';
        }
        return false;
    }

    function shouldShowPrev() {
        if (hasCurrentItem()) {
            var prevId = getPreviousId(vm.data.keys, vm.data.item.id);
            return typeof prevId !== 'undefined';
        }
        return false;
    }

    function showNext() {
        var nextId = getNextId(vm.data.keys, vm.data.item.id);
        var promise = dataService.select(nextId);
        showBootstrapModal(promise, nextId)
            .then(function(result) {
                setupTabs(nextId, result);
            });
    }

    function showPrev() {
        var prevId = getPreviousId(vm.data.keys, vm.data.item.id);
        var promise = dataService.select(prevId);
        showBootstrapModal(promise, prevId)
            .then(function(result) {
                setupTabs(prevId, result);
            });
    }

    function setupTabs(id, result) {
        result.promise.then(function(data) {
            getTabById('tabs.tab3').disabled = data.id && data.id !== 2;
            vm.go('tabs.tab1');
        });
    }

    function showBootstrapModal(promise, itemId) {
        var modalInstance = $modal.open({
            // create modal entity and resolve controller
            templateUrl: 'app/templates/promiseWaiter.html',
            controller: 'promiseWaiter',
            controllerAs: 'vm',
            backdrop: 'static',
            keyboard: false,
            size: 'sm',
            resolve: {
                data: function() {
                    return {
                        promise: promise,
                        title: 'Loading item ' + itemId + '...'
                    };
                }
            }
        });

        return modalInstance.result.then(function(result) {
            // called when we return successfully
            return {
                result: result,
                promise: promise
            };
        }, function() {
            // called when we dismiss instead of saying 'OK'
            return {
                result: 'Cancel',
                promise: promise
            };
        });
    }

    function activate() {
        // within this page, if we change state successfully, we need to update our active tab
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            setActiveTab(toState.name);
        });

        dataService.load().then(function() {
            var promise = dataService.select(1);
            showBootstrapModal(promise, 1)
                .then(function(result) {
                    setupTabs(1, result);
                });
        }).catch(function(e) {

        });
    }
}

},{"../dataService":7,"../promiseWaiterCtrl":14}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZXM1LXNoaW0vZXM1LXNoYW0ubWluLmpzIiwibm9kZV9tb2R1bGVzL2VzNS1zaGltL2VzNS1zaGltLm1pbi5qcyIsInNyYy9hbGVydHMvYWxlcnRQYW5lbERpcmVjdGl2ZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvYm9vdHN0cmFwcGVyLmpzIiwic3JjL2NvbnRhY3QuanMiLCJzcmMvZGF0YVNlcnZpY2UuanMiLCJzcmMvZHJhZ2dhYmxlL2RyYWdnYWJsZURpcmVjdGl2ZS5qcyIsInNyYy9kcmFnZ2FibGUvZHJhZ2dhYmxlTGlzdERpcmVjdGl2ZS5qcyIsInNyYy9kcmFnZ2FibGUvZHJhZ2dhYmxlTGlzdExpc3REaXJlY3RpdmUuanMiLCJzcmMvZHJhZ2dhYmxlL2Ryb3BwYWJsZURpcmVjdGl2ZS5qcyIsInNyYy9kcmFnZ2FibGUvaW5kZXguanMiLCJzcmMvZHJhZ2dhYmxlL2luZGV4RmlsdGVyLmpzIiwic3JjL3Byb21pc2VXYWl0ZXJDdHJsLmpzIiwic3JjL3JvdXRlci5qcyIsInNyYy90YWJzL1RhYkZvdXJ0aExlZnREaXJlY3RpdmUuanMiLCJzcmMvdGFicy9pbmRleC5qcyIsInNyYy90YWJzL3RhYkZvdXJ0aERpcmVjdGl2ZS5qcyIsInNyYy90YWJzL3RhYkZvdXJ0aE1pZGRsZURpcmVjdGl2ZS5qcyIsInNyYy90YWJzL3RhYkZvdXJ0aFJpZ2h0RGlyZWN0aXZlLmpzIiwic3JjL3RhYnMvdGFic0N0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIVxuICogaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG4gKiBAbGljZW5zZSBlczUtc2hpbSBDb3B5cmlnaHQgMjAwOS0yMDE1IGJ5IGNvbnRyaWJ1dG9ycywgTUlUIExpY2Vuc2VcbiAqIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vYmxvYi92NC4xLjE1L0xJQ0VOU0VcbiAqL1xuKGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7aWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKHQpfWVsc2UgaWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiKXttb2R1bGUuZXhwb3J0cz10KCl9ZWxzZXtlLnJldHVybkV4cG9ydHM9dCgpfX0pKHRoaXMsZnVuY3Rpb24oKXt2YXIgZT1GdW5jdGlvbi5wcm90b3R5cGUuY2FsbDt2YXIgdD1PYmplY3QucHJvdG90eXBlO3ZhciByPWUuYmluZCh0Lmhhc093blByb3BlcnR5KTt2YXIgbj1lLmJpbmQodC5wcm9wZXJ0eUlzRW51bWVyYWJsZSk7dmFyIG89ZS5iaW5kKHQudG9TdHJpbmcpO3ZhciBpO3ZhciBjO3ZhciBmO3ZhciBhO3ZhciBsPXIodCxcIl9fZGVmaW5lR2V0dGVyX19cIik7aWYobCl7aT1lLmJpbmQodC5fX2RlZmluZUdldHRlcl9fKTtjPWUuYmluZCh0Ll9fZGVmaW5lU2V0dGVyX18pO2Y9ZS5iaW5kKHQuX19sb29rdXBHZXR0ZXJfXyk7YT1lLmJpbmQodC5fX2xvb2t1cFNldHRlcl9fKX1pZighT2JqZWN0LmdldFByb3RvdHlwZU9mKXtPYmplY3QuZ2V0UHJvdG90eXBlT2Y9ZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoZSl7dmFyIHI9ZS5fX3Byb3RvX187aWYocnx8cj09PW51bGwpe3JldHVybiByfWVsc2UgaWYobyhlLmNvbnN0cnVjdG9yKT09PVwiW29iamVjdCBGdW5jdGlvbl1cIil7cmV0dXJuIGUuY29uc3RydWN0b3IucHJvdG90eXBlfWVsc2UgaWYoZSBpbnN0YW5jZW9mIE9iamVjdCl7cmV0dXJuIHR9ZWxzZXtyZXR1cm4gbnVsbH19fXZhciB1PWZ1bmN0aW9uIGRvZXNHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JXb3JrKGUpe3RyeXtlLnNlbnRpbmVsPTA7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxcInNlbnRpbmVsXCIpLnZhbHVlPT09MH1jYXRjaCh0KXtyZXR1cm4gZmFsc2V9fTtpZihPYmplY3QuZGVmaW5lUHJvcGVydHkpe3ZhciBwPXUoe30pO3ZhciBzPXR5cGVvZiBkb2N1bWVudD09PVwidW5kZWZpbmVkXCJ8fHUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7aWYoIXN8fCFwKXt2YXIgYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yfX1pZighT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnx8Yil7dmFyIE89XCJPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIGNhbGxlZCBvbiBhIG5vbi1vYmplY3Q6IFwiO09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I9ZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsbyl7aWYodHlwZW9mIGUhPT1cIm9iamVjdFwiJiZ0eXBlb2YgZSE9PVwiZnVuY3Rpb25cInx8ZT09PW51bGwpe3Rocm93IG5ldyBUeXBlRXJyb3IoTytlKX1pZihiKXt0cnl7cmV0dXJuIGIuY2FsbChPYmplY3QsZSxvKX1jYXRjaChpKXt9fXZhciBjO2lmKCFyKGUsbykpe3JldHVybiBjfWM9e2VudW1lcmFibGU6bihlLG8pLGNvbmZpZ3VyYWJsZTp0cnVlfTtpZihsKXt2YXIgdT1lLl9fcHJvdG9fXzt2YXIgcD1lIT09dDtpZihwKXtlLl9fcHJvdG9fXz10fXZhciBzPWYoZSxvKTt2YXIgeT1hKGUsbyk7aWYocCl7ZS5fX3Byb3RvX189dX1pZihzfHx5KXtpZihzKXtjLmdldD1zfWlmKHkpe2Muc2V0PXl9cmV0dXJuIGN9fWMudmFsdWU9ZVtvXTtjLndyaXRhYmxlPXRydWU7cmV0dXJuIGN9fWlmKCFPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyl7T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM9ZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhlKXtyZXR1cm4gT2JqZWN0LmtleXMoZSl9fWlmKCFPYmplY3QuY3JlYXRlKXt2YXIgeTt2YXIgZD0hKHtfX3Byb3RvX186bnVsbH1pbnN0YW5jZW9mIE9iamVjdCk7dmFyIGo9ZnVuY3Rpb24gc2hvdWxkVXNlQWN0aXZlWCgpe2lmKCFkb2N1bWVudC5kb21haW4pe3JldHVybiBmYWxzZX10cnl7cmV0dXJuISFuZXcgQWN0aXZlWE9iamVjdChcImh0bWxmaWxlXCIpfWNhdGNoKGUpe3JldHVybiBmYWxzZX19O3ZhciB2PWZ1bmN0aW9uIGdldEVtcHR5VmlhQWN0aXZlWCgpe3ZhciBlO3ZhciB0O3Q9bmV3IEFjdGl2ZVhPYmplY3QoXCJodG1sZmlsZVwiKTt0LndyaXRlKFwiPHNjcmlwdD48L3NjcmlwdD5cIik7dC5jbG9zZSgpO2U9dC5wYXJlbnRXaW5kb3cuT2JqZWN0LnByb3RvdHlwZTt0PW51bGw7cmV0dXJuIGV9O3ZhciBfPWZ1bmN0aW9uIGdldEVtcHR5VmlhSUZyYW1lKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTt2YXIgdD1kb2N1bWVudC5ib2R5fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7dmFyIHI7ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3QuYXBwZW5kQ2hpbGQoZSk7ZS5zcmM9XCJqYXZhc2NyaXB0OlwiO3I9ZS5jb250ZW50V2luZG93Lk9iamVjdC5wcm90b3R5cGU7dC5yZW1vdmVDaGlsZChlKTtlPW51bGw7cmV0dXJuIHJ9O2lmKGR8fHR5cGVvZiBkb2N1bWVudD09PVwidW5kZWZpbmVkXCIpe3k9ZnVuY3Rpb24oKXtyZXR1cm57X19wcm90b19fOm51bGx9fX1lbHNle3k9ZnVuY3Rpb24oKXt2YXIgZT1qKCk/digpOl8oKTtkZWxldGUgZS5jb25zdHJ1Y3RvcjtkZWxldGUgZS5oYXNPd25Qcm9wZXJ0eTtkZWxldGUgZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtkZWxldGUgZS5pc1Byb3RvdHlwZU9mO2RlbGV0ZSBlLnRvTG9jYWxlU3RyaW5nO2RlbGV0ZSBlLnRvU3RyaW5nO2RlbGV0ZSBlLnZhbHVlT2Y7dmFyIHQ9ZnVuY3Rpb24gRW1wdHkoKXt9O3QucHJvdG90eXBlPWU7eT1mdW5jdGlvbigpe3JldHVybiBuZXcgdH07cmV0dXJuIG5ldyB0fX1PYmplY3QuY3JlYXRlPWZ1bmN0aW9uIGNyZWF0ZShlLHQpe3ZhciByO3ZhciBuPWZ1bmN0aW9uIFR5cGUoKXt9O2lmKGU9PT1udWxsKXtyPXkoKX1lbHNle2lmKHR5cGVvZiBlIT09XCJvYmplY3RcIiYmdHlwZW9mIGUhPT1cImZ1bmN0aW9uXCIpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgcHJvdG90eXBlIG1heSBvbmx5IGJlIGFuIE9iamVjdCBvciBudWxsXCIpfW4ucHJvdG90eXBlPWU7cj1uZXcgbjtyLl9fcHJvdG9fXz1lfWlmKHQhPT12b2lkIDApe09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHIsdCl9cmV0dXJuIHJ9fXZhciB3PWZ1bmN0aW9uIGRvZXNEZWZpbmVQcm9wZXJ0eVdvcmsoZSl7dHJ5e09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwic2VudGluZWxcIix7fSk7cmV0dXJuXCJzZW50aW5lbFwiaW4gZX1jYXRjaCh0KXtyZXR1cm4gZmFsc2V9fTtpZihPYmplY3QuZGVmaW5lUHJvcGVydHkpe3ZhciBtPXcoe30pO3ZhciBQPXR5cGVvZiBkb2N1bWVudD09PVwidW5kZWZpbmVkXCJ8fHcoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7aWYoIW18fCFQKXt2YXIgRT1PYmplY3QuZGVmaW5lUHJvcGVydHksaD1PYmplY3QuZGVmaW5lUHJvcGVydGllc319aWYoIU9iamVjdC5kZWZpbmVQcm9wZXJ0eXx8RSl7dmFyIGc9XCJQcm9wZXJ0eSBkZXNjcmlwdGlvbiBtdXN0IGJlIGFuIG9iamVjdDogXCI7dmFyIHo9XCJPYmplY3QuZGVmaW5lUHJvcGVydHkgY2FsbGVkIG9uIG5vbi1vYmplY3Q6IFwiO3ZhciBUPVwiZ2V0dGVycyAmIHNldHRlcnMgY2FuIG5vdCBiZSBkZWZpbmVkIG9uIHRoaXMgamF2YXNjcmlwdCBlbmdpbmVcIjtPYmplY3QuZGVmaW5lUHJvcGVydHk9ZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoZSxyLG4pe2lmKHR5cGVvZiBlIT09XCJvYmplY3RcIiYmdHlwZW9mIGUhPT1cImZ1bmN0aW9uXCJ8fGU9PT1udWxsKXt0aHJvdyBuZXcgVHlwZUVycm9yKHorZSl9aWYodHlwZW9mIG4hPT1cIm9iamVjdFwiJiZ0eXBlb2YgbiE9PVwiZnVuY3Rpb25cInx8bj09PW51bGwpe3Rocm93IG5ldyBUeXBlRXJyb3IoZytuKX1pZihFKXt0cnl7cmV0dXJuIEUuY2FsbChPYmplY3QsZSxyLG4pfWNhdGNoKG8pe319aWYoXCJ2YWx1ZVwiaW4gbil7aWYobCYmKGYoZSxyKXx8YShlLHIpKSl7dmFyIHU9ZS5fX3Byb3RvX187ZS5fX3Byb3RvX189dDtkZWxldGUgZVtyXTtlW3JdPW4udmFsdWU7ZS5fX3Byb3RvX189dX1lbHNle2Vbcl09bi52YWx1ZX19ZWxzZXtpZighbCYmKFwiZ2V0XCJpbiBufHxcInNldFwiaW4gbikpe3Rocm93IG5ldyBUeXBlRXJyb3IoVCl9aWYoXCJnZXRcImluIG4pe2koZSxyLG4uZ2V0KX1pZihcInNldFwiaW4gbil7YyhlLHIsbi5zZXQpfX1yZXR1cm4gZX19aWYoIU9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzfHxoKXtPYmplY3QuZGVmaW5lUHJvcGVydGllcz1mdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGUsdCl7aWYoaCl7dHJ5e3JldHVybiBoLmNhbGwoT2JqZWN0LGUsdCl9Y2F0Y2gocil7fX1PYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKHIpe2lmKHIhPT1cIl9fcHJvdG9fX1wiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHRbcl0pfX0pO3JldHVybiBlfX1pZighT2JqZWN0LnNlYWwpe09iamVjdC5zZWFsPWZ1bmN0aW9uIHNlYWwoZSl7aWYoT2JqZWN0KGUpIT09ZSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5zZWFsIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBPYmplY3RzLlwiKX1yZXR1cm4gZX19aWYoIU9iamVjdC5mcmVlemUpe09iamVjdC5mcmVlemU9ZnVuY3Rpb24gZnJlZXplKGUpe2lmKE9iamVjdChlKSE9PWUpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QuZnJlZXplIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBPYmplY3RzLlwiKX1yZXR1cm4gZX19dHJ5e09iamVjdC5mcmVlemUoZnVuY3Rpb24oKXt9KX1jYXRjaCh4KXtPYmplY3QuZnJlZXplPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbiBmcmVlemUodCl7aWYodHlwZW9mIHQ9PT1cImZ1bmN0aW9uXCIpe3JldHVybiB0fWVsc2V7cmV0dXJuIGUodCl9fX0oT2JqZWN0LmZyZWV6ZSl9aWYoIU9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyl7T2JqZWN0LnByZXZlbnRFeHRlbnNpb25zPWZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGUpe2lmKE9iamVjdChlKSE9PWUpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QucHJldmVudEV4dGVuc2lvbnMgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIE9iamVjdHMuXCIpfXJldHVybiBlfX1pZighT2JqZWN0LmlzU2VhbGVkKXtPYmplY3QuaXNTZWFsZWQ9ZnVuY3Rpb24gaXNTZWFsZWQoZSl7aWYoT2JqZWN0KGUpIT09ZSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5pc1NlYWxlZCBjYW4gb25seSBiZSBjYWxsZWQgb24gT2JqZWN0cy5cIil9cmV0dXJuIGZhbHNlfX1pZighT2JqZWN0LmlzRnJvemVuKXtPYmplY3QuaXNGcm96ZW49ZnVuY3Rpb24gaXNGcm96ZW4oZSl7aWYoT2JqZWN0KGUpIT09ZSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5pc0Zyb3plbiBjYW4gb25seSBiZSBjYWxsZWQgb24gT2JqZWN0cy5cIil9cmV0dXJuIGZhbHNlfX1pZighT2JqZWN0LmlzRXh0ZW5zaWJsZSl7T2JqZWN0LmlzRXh0ZW5zaWJsZT1mdW5jdGlvbiBpc0V4dGVuc2libGUoZSl7aWYoT2JqZWN0KGUpIT09ZSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5pc0V4dGVuc2libGUgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIE9iamVjdHMuXCIpfXZhciB0PVwiXCI7d2hpbGUocihlLHQpKXt0Kz1cIj9cIn1lW3RdPXRydWU7dmFyIG49cihlLHQpO2RlbGV0ZSBlW3RdO3JldHVybiBufX19KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVzNS1zaGFtLm1hcFxuIiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cbiAqIEBsaWNlbnNlIGVzNS1zaGltIENvcHlyaWdodCAyMDA5LTIwMTUgYnkgY29udHJpYnV0b3JzLCBNSVQgTGljZW5zZVxuICogc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL3Y0LjEuMTUvTElDRU5TRVxuICovXG4oZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUodCl9ZWxzZSBpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCIpe21vZHVsZS5leHBvcnRzPXQoKX1lbHNle2UucmV0dXJuRXhwb3J0cz10KCl9fSkodGhpcyxmdW5jdGlvbigpe3ZhciBlPUFycmF5O3ZhciB0PWUucHJvdG90eXBlO3ZhciByPU9iamVjdDt2YXIgbj1yLnByb3RvdHlwZTt2YXIgaT1GdW5jdGlvbi5wcm90b3R5cGU7dmFyIGE9U3RyaW5nO3ZhciBvPWEucHJvdG90eXBlO3ZhciBsPU51bWJlcjt2YXIgdT1sLnByb3RvdHlwZTt2YXIgZj10LnNsaWNlO3ZhciBzPXQuc3BsaWNlO3ZhciBjPXQucHVzaDt2YXIgdj10LnVuc2hpZnQ7dmFyIHA9dC5jb25jYXQ7dmFyIGg9aS5jYWxsO3ZhciBnPU1hdGgubWF4O3ZhciB5PU1hdGgubWluO3ZhciBkPW4udG9TdHJpbmc7dmFyIHc9dHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZz09PVwic3ltYm9sXCI7dmFyIG07dmFyIGI9RnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nLFQ9ZnVuY3Rpb24gdHJ5RnVuY3Rpb25PYmplY3QoZSl7dHJ5e2IuY2FsbChlKTtyZXR1cm4gdHJ1ZX1jYXRjaCh0KXtyZXR1cm4gZmFsc2V9fSx4PVwiW29iamVjdCBGdW5jdGlvbl1cIixPPVwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIjttPWZ1bmN0aW9uIGlzQ2FsbGFibGUoZSl7aWYodHlwZW9mIGUhPT1cImZ1bmN0aW9uXCIpe3JldHVybiBmYWxzZX1pZih3KXtyZXR1cm4gVChlKX12YXIgdD1kLmNhbGwoZSk7cmV0dXJuIHQ9PT14fHx0PT09T307dmFyIFM7dmFyIGo9UmVnRXhwLnByb3RvdHlwZS5leGVjLEU9ZnVuY3Rpb24gdHJ5UmVnZXhFeGVjKGUpe3RyeXtqLmNhbGwoZSk7cmV0dXJuIHRydWV9Y2F0Y2godCl7cmV0dXJuIGZhbHNlfX0sST1cIltvYmplY3QgUmVnRXhwXVwiO1M9ZnVuY3Rpb24gaXNSZWdleChlKXtpZih0eXBlb2YgZSE9PVwib2JqZWN0XCIpe3JldHVybiBmYWxzZX1yZXR1cm4gdz9FKGUpOmQuY2FsbChlKT09PUl9O3ZhciBEO3ZhciBNPVN0cmluZy5wcm90b3R5cGUudmFsdWVPZixOPWZ1bmN0aW9uIHRyeVN0cmluZ09iamVjdChlKXt0cnl7TS5jYWxsKGUpO3JldHVybiB0cnVlfWNhdGNoKHQpe3JldHVybiBmYWxzZX19LGs9XCJbb2JqZWN0IFN0cmluZ11cIjtEPWZ1bmN0aW9uIGlzU3RyaW5nKGUpe2lmKHR5cGVvZiBlPT09XCJzdHJpbmdcIil7cmV0dXJuIHRydWV9aWYodHlwZW9mIGUhPT1cIm9iamVjdFwiKXtyZXR1cm4gZmFsc2V9cmV0dXJuIHc/TihlKTpkLmNhbGwoZSk9PT1rfTt2YXIgVT1mdW5jdGlvbihlKXt2YXIgdD1yLmRlZmluZVByb3BlcnR5JiZmdW5jdGlvbigpe3RyeXt2YXIgZT17fTtyLmRlZmluZVByb3BlcnR5KGUsXCJ4XCIse2VudW1lcmFibGU6ZmFsc2UsdmFsdWU6ZX0pO2Zvcih2YXIgdCBpbiBlKXtyZXR1cm4gZmFsc2V9cmV0dXJuIGUueD09PWV9Y2F0Y2gobil7cmV0dXJuIGZhbHNlfX0oKTt2YXIgbjtpZih0KXtuPWZ1bmN0aW9uKGUsdCxuLGkpe2lmKCFpJiZ0IGluIGUpe3JldHVybn1yLmRlZmluZVByb3BlcnR5KGUsdCx7Y29uZmlndXJhYmxlOnRydWUsZW51bWVyYWJsZTpmYWxzZSx3cml0YWJsZTp0cnVlLHZhbHVlOm59KX19ZWxzZXtuPWZ1bmN0aW9uKGUsdCxyLG4pe2lmKCFuJiZ0IGluIGUpe3JldHVybn1lW3RdPXJ9fXJldHVybiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHQscixpKXtmb3IodmFyIGEgaW4gcil7aWYoZS5jYWxsKHIsYSkpe24odCxhLHJbYV0saSl9fX19KG4uaGFzT3duUHJvcGVydHkpO3ZhciBGPWZ1bmN0aW9uIGlzUHJpbWl0aXZlKGUpe3ZhciB0PXR5cGVvZiBlO3JldHVybiBlPT09bnVsbHx8dCE9PVwib2JqZWN0XCImJnQhPT1cImZ1bmN0aW9uXCJ9O3ZhciBSPWwuaXNOYU58fGZ1bmN0aW9uKGUpe3JldHVybiBlIT09ZX07dmFyIEE9e1RvSW50ZWdlcjpmdW5jdGlvbiBUb0ludGVnZXIoZSl7dmFyIHQ9K2U7aWYoUih0KSl7dD0wfWVsc2UgaWYodCE9PTAmJnQhPT0xLzAmJnQhPT0tKDEvMCkpe3Q9KHQ+MHx8LTEpKk1hdGguZmxvb3IoTWF0aC5hYnModCkpfXJldHVybiB0fSxUb1ByaW1pdGl2ZTpmdW5jdGlvbiBUb1ByaW1pdGl2ZShlKXt2YXIgdCxyLG47aWYoRihlKSl7cmV0dXJuIGV9cj1lLnZhbHVlT2Y7aWYobShyKSl7dD1yLmNhbGwoZSk7aWYoRih0KSl7cmV0dXJuIHR9fW49ZS50b1N0cmluZztpZihtKG4pKXt0PW4uY2FsbChlKTtpZihGKHQpKXtyZXR1cm4gdH19dGhyb3cgbmV3IFR5cGVFcnJvcn0sVG9PYmplY3Q6ZnVuY3Rpb24oZSl7aWYoZT09bnVsbCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbid0IGNvbnZlcnQgXCIrZStcIiB0byBvYmplY3RcIil9cmV0dXJuIHIoZSl9LFRvVWludDMyOmZ1bmN0aW9uIFRvVWludDMyKGUpe3JldHVybiBlPj4+MH19O3ZhciAkPWZ1bmN0aW9uIEVtcHR5KCl7fTtVKGkse2JpbmQ6ZnVuY3Rpb24gYmluZChlKXt2YXIgdD10aGlzO2lmKCFtKHQpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSBcIit0KX12YXIgbj1mLmNhbGwoYXJndW1lbnRzLDEpO3ZhciBpO3ZhciBhPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIGkpe3ZhciBhPXQuYXBwbHkodGhpcyxwLmNhbGwobixmLmNhbGwoYXJndW1lbnRzKSkpO2lmKHIoYSk9PT1hKXtyZXR1cm4gYX1yZXR1cm4gdGhpc31lbHNle3JldHVybiB0LmFwcGx5KGUscC5jYWxsKG4sZi5jYWxsKGFyZ3VtZW50cykpKX19O3ZhciBvPWcoMCx0Lmxlbmd0aC1uLmxlbmd0aCk7dmFyIGw9W107Zm9yKHZhciB1PTA7dTxvO3UrKyl7Yy5jYWxsKGwsXCIkXCIrdSl9aT1GdW5jdGlvbihcImJpbmRlclwiLFwicmV0dXJuIGZ1bmN0aW9uIChcIitsLmpvaW4oXCIsXCIpK1wiKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XCIpKGEpO2lmKHQucHJvdG90eXBlKXskLnByb3RvdHlwZT10LnByb3RvdHlwZTtpLnByb3RvdHlwZT1uZXcgJDskLnByb3RvdHlwZT1udWxsfXJldHVybiBpfX0pO3ZhciBDPWguYmluZChuLmhhc093blByb3BlcnR5KTt2YXIgUD1oLmJpbmQobi50b1N0cmluZyk7dmFyIFo9aC5iaW5kKG8uc2xpY2UpO3ZhciBKPWguYmluZChvLnNwbGl0KTt2YXIgej1lLmlzQXJyYXl8fGZ1bmN0aW9uIGlzQXJyYXkoZSl7cmV0dXJuIFAoZSk9PT1cIltvYmplY3QgQXJyYXldXCJ9O3ZhciBCPVtdLnVuc2hpZnQoMCkhPT0xO1UodCx7dW5zaGlmdDpmdW5jdGlvbigpe3YuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0aGlzLmxlbmd0aH19LEIpO1UoZSx7aXNBcnJheTp6fSk7dmFyIEc9cihcImFcIik7dmFyIEg9R1swXSE9PVwiYVwifHwhKDAgaW4gRyk7dmFyIEw9ZnVuY3Rpb24gcHJvcGVybHlCb3hlZChlKXt2YXIgdD10cnVlO3ZhciByPXRydWU7aWYoZSl7ZS5jYWxsKFwiZm9vXCIsZnVuY3Rpb24oZSxyLG4pe2lmKHR5cGVvZiBuIT09XCJvYmplY3RcIil7dD1mYWxzZX19KTtlLmNhbGwoWzFdLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cj10eXBlb2YgdGhpcz09PVwic3RyaW5nXCJ9LFwieFwiKX1yZXR1cm4hIWUmJnQmJnJ9O1UodCx7Zm9yRWFjaDpmdW5jdGlvbiBmb3JFYWNoKGUpe3ZhciB0PUEuVG9PYmplY3QodGhpcyk7dmFyIHI9SCYmRCh0aGlzKT9KKHRoaXMsXCJcIik6dDt2YXIgbj0tMTt2YXIgaT1BLlRvVWludDMyKHIubGVuZ3RoKTt2YXIgYTtpZihhcmd1bWVudHMubGVuZ3RoPjEpe2E9YXJndW1lbnRzWzFdfWlmKCFtKGUpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkucHJvdG90eXBlLmZvckVhY2ggY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpfXdoaWxlKCsrbjxpKXtpZihuIGluIHIpe2lmKHR5cGVvZiBhPT09XCJ1bmRlZmluZWRcIil7ZShyW25dLG4sdCl9ZWxzZXtlLmNhbGwoYSxyW25dLG4sdCl9fX19fSwhTCh0LmZvckVhY2gpKTtVKHQse21hcDpmdW5jdGlvbiBtYXAodCl7dmFyIHI9QS5Ub09iamVjdCh0aGlzKTt2YXIgbj1IJiZEKHRoaXMpP0oodGhpcyxcIlwiKTpyO3ZhciBpPUEuVG9VaW50MzIobi5sZW5ndGgpO3ZhciBhPWUoaSk7dmFyIG87aWYoYXJndW1lbnRzLmxlbmd0aD4xKXtvPWFyZ3VtZW50c1sxXX1pZighbSh0KSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5tYXAgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpfWZvcih2YXIgbD0wO2w8aTtsKyspe2lmKGwgaW4gbil7aWYodHlwZW9mIG89PT1cInVuZGVmaW5lZFwiKXthW2xdPXQobltsXSxsLHIpfWVsc2V7YVtsXT10LmNhbGwobyxuW2xdLGwscil9fX1yZXR1cm4gYX19LCFMKHQubWFwKSk7VSh0LHtmaWx0ZXI6ZnVuY3Rpb24gZmlsdGVyKGUpe3ZhciB0PUEuVG9PYmplY3QodGhpcyk7dmFyIHI9SCYmRCh0aGlzKT9KKHRoaXMsXCJcIik6dDt2YXIgbj1BLlRvVWludDMyKHIubGVuZ3RoKTt2YXIgaT1bXTt2YXIgYTt2YXIgbztpZihhcmd1bWVudHMubGVuZ3RoPjEpe289YXJndW1lbnRzWzFdfWlmKCFtKGUpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkucHJvdG90eXBlLmZpbHRlciBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIil9Zm9yKHZhciBsPTA7bDxuO2wrKyl7aWYobCBpbiByKXthPXJbbF07aWYodHlwZW9mIG89PT1cInVuZGVmaW5lZFwiP2UoYSxsLHQpOmUuY2FsbChvLGEsbCx0KSl7Yy5jYWxsKGksYSl9fX1yZXR1cm4gaX19LCFMKHQuZmlsdGVyKSk7VSh0LHtldmVyeTpmdW5jdGlvbiBldmVyeShlKXt2YXIgdD1BLlRvT2JqZWN0KHRoaXMpO3ZhciByPUgmJkQodGhpcyk/Sih0aGlzLFwiXCIpOnQ7dmFyIG49QS5Ub1VpbnQzMihyLmxlbmd0aCk7dmFyIGk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKXtpPWFyZ3VtZW50c1sxXX1pZighbShlKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5ldmVyeSBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIil9Zm9yKHZhciBhPTA7YTxuO2ErKyl7aWYoYSBpbiByJiYhKHR5cGVvZiBpPT09XCJ1bmRlZmluZWRcIj9lKHJbYV0sYSx0KTplLmNhbGwoaSxyW2FdLGEsdCkpKXtyZXR1cm4gZmFsc2V9fXJldHVybiB0cnVlfX0sIUwodC5ldmVyeSkpO1UodCx7c29tZTpmdW5jdGlvbiBzb21lKGUpe3ZhciB0PUEuVG9PYmplY3QodGhpcyk7dmFyIHI9SCYmRCh0aGlzKT9KKHRoaXMsXCJcIik6dDt2YXIgbj1BLlRvVWludDMyKHIubGVuZ3RoKTt2YXIgaTtpZihhcmd1bWVudHMubGVuZ3RoPjEpe2k9YXJndW1lbnRzWzFdfWlmKCFtKGUpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkucHJvdG90eXBlLnNvbWUgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpfWZvcih2YXIgYT0wO2E8bjthKyspe2lmKGEgaW4gciYmKHR5cGVvZiBpPT09XCJ1bmRlZmluZWRcIj9lKHJbYV0sYSx0KTplLmNhbGwoaSxyW2FdLGEsdCkpKXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfX0sIUwodC5zb21lKSk7dmFyIFg9ZmFsc2U7aWYodC5yZWR1Y2Upe1g9dHlwZW9mIHQucmVkdWNlLmNhbGwoXCJlczVcIixmdW5jdGlvbihlLHQscixuKXtyZXR1cm4gbn0pPT09XCJvYmplY3RcIn1VKHQse3JlZHVjZTpmdW5jdGlvbiByZWR1Y2UoZSl7dmFyIHQ9QS5Ub09iamVjdCh0aGlzKTt2YXIgcj1IJiZEKHRoaXMpP0oodGhpcyxcIlwiKTp0O3ZhciBuPUEuVG9VaW50MzIoci5sZW5ndGgpO2lmKCFtKGUpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkucHJvdG90eXBlLnJlZHVjZSBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIil9aWYobj09PTAmJmFyZ3VtZW50cy5sZW5ndGg9PT0xKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwicmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKX12YXIgaT0wO3ZhciBhO2lmKGFyZ3VtZW50cy5sZW5ndGg+PTIpe2E9YXJndW1lbnRzWzFdfWVsc2V7ZG97aWYoaSBpbiByKXthPXJbaSsrXTticmVha31pZigrK2k+PW4pe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJyZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpfX13aGlsZSh0cnVlKX1mb3IoO2k8bjtpKyspe2lmKGkgaW4gcil7YT1lKGEscltpXSxpLHQpfX1yZXR1cm4gYX19LCFYKTt2YXIgWT1mYWxzZTtpZih0LnJlZHVjZVJpZ2h0KXtZPXR5cGVvZiB0LnJlZHVjZVJpZ2h0LmNhbGwoXCJlczVcIixmdW5jdGlvbihlLHQscixuKXtyZXR1cm4gbn0pPT09XCJvYmplY3RcIn1VKHQse3JlZHVjZVJpZ2h0OmZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGUpe3ZhciB0PUEuVG9PYmplY3QodGhpcyk7dmFyIHI9SCYmRCh0aGlzKT9KKHRoaXMsXCJcIik6dDt2YXIgbj1BLlRvVWludDMyKHIubGVuZ3RoKTtpZighbShlKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodCBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIil9aWYobj09PTAmJmFyZ3VtZW50cy5sZW5ndGg9PT0xKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwicmVkdWNlUmlnaHQgb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpfXZhciBpO3ZhciBhPW4tMTtpZihhcmd1bWVudHMubGVuZ3RoPj0yKXtpPWFyZ3VtZW50c1sxXX1lbHNle2Rve2lmKGEgaW4gcil7aT1yW2EtLV07YnJlYWt9aWYoLS1hPDApe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJyZWR1Y2VSaWdodCBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWVcIil9fXdoaWxlKHRydWUpfWlmKGE8MCl7cmV0dXJuIGl9ZG97aWYoYSBpbiByKXtpPWUoaSxyW2FdLGEsdCl9fXdoaWxlKGEtLSk7cmV0dXJuIGl9fSwhWSk7dmFyIHE9dC5pbmRleE9mJiZbMCwxXS5pbmRleE9mKDEsMikhPT0tMTtVKHQse2luZGV4T2Y6ZnVuY3Rpb24gaW5kZXhPZihlKXt2YXIgdD1IJiZEKHRoaXMpP0oodGhpcyxcIlwiKTpBLlRvT2JqZWN0KHRoaXMpO3ZhciByPUEuVG9VaW50MzIodC5sZW5ndGgpO2lmKHI9PT0wKXtyZXR1cm4tMX12YXIgbj0wO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7bj1BLlRvSW50ZWdlcihhcmd1bWVudHNbMV0pfW49bj49MD9uOmcoMCxyK24pO2Zvcig7bjxyO24rKyl7aWYobiBpbiB0JiZ0W25dPT09ZSl7cmV0dXJuIG59fXJldHVybi0xfX0scSk7dmFyIEs9dC5sYXN0SW5kZXhPZiYmWzAsMV0ubGFzdEluZGV4T2YoMCwtMykhPT0tMTtVKHQse2xhc3RJbmRleE9mOmZ1bmN0aW9uIGxhc3RJbmRleE9mKGUpe3ZhciB0PUgmJkQodGhpcyk/Sih0aGlzLFwiXCIpOkEuVG9PYmplY3QodGhpcyk7dmFyIHI9QS5Ub1VpbnQzMih0Lmxlbmd0aCk7aWYocj09PTApe3JldHVybi0xfXZhciBuPXItMTtpZihhcmd1bWVudHMubGVuZ3RoPjEpe249eShuLEEuVG9JbnRlZ2VyKGFyZ3VtZW50c1sxXSkpfW49bj49MD9uOnItTWF0aC5hYnMobik7Zm9yKDtuPj0wO24tLSl7aWYobiBpbiB0JiZlPT09dFtuXSl7cmV0dXJuIG59fXJldHVybi0xfX0sSyk7dmFyIFE9ZnVuY3Rpb24oKXt2YXIgZT1bMSwyXTt2YXIgdD1lLnNwbGljZSgpO3JldHVybiBlLmxlbmd0aD09PTImJnoodCkmJnQubGVuZ3RoPT09MH0oKTtVKHQse3NwbGljZTpmdW5jdGlvbiBzcGxpY2UoZSx0KXtpZihhcmd1bWVudHMubGVuZ3RoPT09MCl7cmV0dXJuW119ZWxzZXtyZXR1cm4gcy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX0sIVEpO3ZhciBWPWZ1bmN0aW9uKCl7dmFyIGU9e307dC5zcGxpY2UuY2FsbChlLDAsMCwxKTtyZXR1cm4gZS5sZW5ndGg9PT0xfSgpO1UodCx7c3BsaWNlOmZ1bmN0aW9uIHNwbGljZShlLHQpe2lmKGFyZ3VtZW50cy5sZW5ndGg9PT0wKXtyZXR1cm5bXX12YXIgcj1hcmd1bWVudHM7dGhpcy5sZW5ndGg9ZyhBLlRvSW50ZWdlcih0aGlzLmxlbmd0aCksMCk7aWYoYXJndW1lbnRzLmxlbmd0aD4wJiZ0eXBlb2YgdCE9PVwibnVtYmVyXCIpe3I9Zi5jYWxsKGFyZ3VtZW50cyk7aWYoci5sZW5ndGg8Mil7Yy5jYWxsKHIsdGhpcy5sZW5ndGgtZSl9ZWxzZXtyWzFdPUEuVG9JbnRlZ2VyKHQpfX1yZXR1cm4gcy5hcHBseSh0aGlzLHIpfX0sIVYpO3ZhciBXPWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IGUoMWU1KTt0WzhdPVwieFwiO3Quc3BsaWNlKDEsMSk7cmV0dXJuIHQuaW5kZXhPZihcInhcIik9PT03fSgpO3ZhciBfPWZ1bmN0aW9uKCl7dmFyIGU9MjU2O3ZhciB0PVtdO3RbZV09XCJhXCI7dC5zcGxpY2UoZSsxLDAsXCJiXCIpO3JldHVybiB0W2VdPT09XCJhXCJ9KCk7VSh0LHtzcGxpY2U6ZnVuY3Rpb24gc3BsaWNlKGUsdCl7dmFyIHI9QS5Ub09iamVjdCh0aGlzKTt2YXIgbj1bXTt2YXIgaT1BLlRvVWludDMyKHIubGVuZ3RoKTt2YXIgbz1BLlRvSW50ZWdlcihlKTt2YXIgbD1vPDA/ZyhpK28sMCk6eShvLGkpO3ZhciB1PXkoZyhBLlRvSW50ZWdlcih0KSwwKSxpLWwpO3ZhciBzPTA7dmFyIGM7d2hpbGUoczx1KXtjPWEobCtzKTtpZihDKHIsYykpe25bc109cltjXX1zKz0xfXZhciB2PWYuY2FsbChhcmd1bWVudHMsMik7dmFyIHA9di5sZW5ndGg7dmFyIGg7aWYocDx1KXtzPWw7d2hpbGUoczxpLXUpe2M9YShzK3UpO2g9YShzK3ApO2lmKEMocixjKSl7cltoXT1yW2NdfWVsc2V7ZGVsZXRlIHJbaF19cys9MX1zPWk7d2hpbGUocz5pLXUrcCl7ZGVsZXRlIHJbcy0xXTtzLT0xfX1lbHNlIGlmKHA+dSl7cz1pLXU7d2hpbGUocz5sKXtjPWEocyt1LTEpO2g9YShzK3AtMSk7aWYoQyhyLGMpKXtyW2hdPXJbY119ZWxzZXtkZWxldGUgcltoXX1zLT0xfX1zPWw7Zm9yKHZhciBkPTA7ZDx2Lmxlbmd0aDsrK2Qpe3Jbc109dltkXTtzKz0xfXIubGVuZ3RoPWktdStwO3JldHVybiBufX0sIVd8fCFfKTt2YXIgZWU9IXt0b1N0cmluZzpudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInRvU3RyaW5nXCIpO3ZhciB0ZT1mdW5jdGlvbigpe30ucHJvcGVydHlJc0VudW1lcmFibGUoXCJwcm90b3R5cGVcIik7dmFyIHJlPSFDKFwieFwiLFwiMFwiKTt2YXIgbmU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb25zdHJ1Y3RvcjtyZXR1cm4gdCYmdC5wcm90b3R5cGU9PT1lfTt2YXIgaWU9eyR3aW5kb3c6dHJ1ZSwkY29uc29sZTp0cnVlLCRwYXJlbnQ6dHJ1ZSwkc2VsZjp0cnVlLCRmcmFtZTp0cnVlLCRmcmFtZXM6dHJ1ZSwkZnJhbWVFbGVtZW50OnRydWUsJHdlYmtpdEluZGV4ZWREQjp0cnVlLCR3ZWJraXRTdG9yYWdlSW5mbzp0cnVlfTt2YXIgYWU9ZnVuY3Rpb24oKXtpZih0eXBlb2Ygd2luZG93PT09XCJ1bmRlZmluZWRcIil7cmV0dXJuIGZhbHNlfWZvcih2YXIgZSBpbiB3aW5kb3cpe3RyeXtpZighaWVbXCIkXCIrZV0mJkMod2luZG93LGUpJiZ3aW5kb3dbZV0hPT1udWxsJiZ0eXBlb2Ygd2luZG93W2VdPT09XCJvYmplY3RcIil7bmUod2luZG93W2VdKX19Y2F0Y2godCl7cmV0dXJuIHRydWV9fXJldHVybiBmYWxzZX0oKTt2YXIgb2U9ZnVuY3Rpb24oZSl7aWYodHlwZW9mIHdpbmRvdz09PVwidW5kZWZpbmVkXCJ8fCFhZSl7cmV0dXJuIG5lKGUpfXRyeXtyZXR1cm4gbmUoZSl9Y2F0Y2godCl7cmV0dXJuIGZhbHNlfX07dmFyIGxlPVtcInRvU3RyaW5nXCIsXCJ0b0xvY2FsZVN0cmluZ1wiLFwidmFsdWVPZlwiLFwiaGFzT3duUHJvcGVydHlcIixcImlzUHJvdG90eXBlT2ZcIixcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsXCJjb25zdHJ1Y3RvclwiXTt2YXIgdWU9bGUubGVuZ3RoO3ZhciBmZT1mdW5jdGlvbiBpc0FyZ3VtZW50cyhlKXtyZXR1cm4gUChlKT09PVwiW29iamVjdCBBcmd1bWVudHNdXCJ9O3ZhciBzZT1mdW5jdGlvbiBpc0FyZ3VtZW50cyhlKXtyZXR1cm4gZSE9PW51bGwmJnR5cGVvZiBlPT09XCJvYmplY3RcIiYmdHlwZW9mIGUubGVuZ3RoPT09XCJudW1iZXJcIiYmZS5sZW5ndGg+PTAmJiF6KGUpJiZtKGUuY2FsbGVlKX07dmFyIGNlPWZlKGFyZ3VtZW50cyk/ZmU6c2U7VShyLHtrZXlzOmZ1bmN0aW9uIGtleXMoZSl7dmFyIHQ9bShlKTt2YXIgcj1jZShlKTt2YXIgbj1lIT09bnVsbCYmdHlwZW9mIGU9PT1cIm9iamVjdFwiO3ZhciBpPW4mJkQoZSk7aWYoIW4mJiF0JiYhcil7dGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5rZXlzIGNhbGxlZCBvbiBhIG5vbi1vYmplY3RcIil9dmFyIG89W107dmFyIGw9dGUmJnQ7aWYoaSYmcmV8fHIpe2Zvcih2YXIgdT0wO3U8ZS5sZW5ndGg7Kyt1KXtjLmNhbGwobyxhKHUpKX19aWYoIXIpe2Zvcih2YXIgZiBpbiBlKXtpZighKGwmJmY9PT1cInByb3RvdHlwZVwiKSYmQyhlLGYpKXtjLmNhbGwobyxhKGYpKX19fWlmKGVlKXt2YXIgcz1vZShlKTtmb3IodmFyIHY9MDt2PHVlO3YrKyl7dmFyIHA9bGVbdl07aWYoIShzJiZwPT09XCJjb25zdHJ1Y3RvclwiKSYmQyhlLHApKXtjLmNhbGwobyxwKX19fXJldHVybiBvfX0pO3ZhciB2ZT1yLmtleXMmJmZ1bmN0aW9uKCl7cmV0dXJuIHIua2V5cyhhcmd1bWVudHMpLmxlbmd0aD09PTJ9KDEsMik7dmFyIHBlPXIua2V5cyYmZnVuY3Rpb24oKXt2YXIgZT1yLmtleXMoYXJndW1lbnRzKTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCE9PTF8fGUubGVuZ3RoIT09MXx8ZVswXSE9PTF9KDEpO3ZhciBoZT1yLmtleXM7VShyLHtrZXlzOmZ1bmN0aW9uIGtleXMoZSl7aWYoY2UoZSkpe3JldHVybiBoZShmLmNhbGwoZSkpfWVsc2V7cmV0dXJuIGhlKGUpfX19LCF2ZXx8cGUpO3ZhciBnZT0tNjIxOTg3NTUyZTU7dmFyIHllPVwiLTAwMDAwMVwiO3ZhciBkZT1EYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyYmbmV3IERhdGUoZ2UpLnRvSVNPU3RyaW5nKCkuaW5kZXhPZih5ZSk9PT0tMTt2YXIgd2U9RGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcmJm5ldyBEYXRlKC0xKS50b0lTT1N0cmluZygpIT09XCIxOTY5LTEyLTMxVDIzOjU5OjU5Ljk5OVpcIjtVKERhdGUucHJvdG90eXBlLHt0b0lTT1N0cmluZzpmdW5jdGlvbiB0b0lTT1N0cmluZygpe3ZhciBlLHQscixuLGk7aWYoIWlzRmluaXRlKHRoaXMpKXt0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkRhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nIGNhbGxlZCBvbiBub24tZmluaXRlIHZhbHVlLlwiKX1uPXRoaXMuZ2V0VVRDRnVsbFllYXIoKTtpPXRoaXMuZ2V0VVRDTW9udGgoKTtuKz1NYXRoLmZsb29yKGkvMTIpO2k9KGklMTIrMTIpJTEyO2U9W2krMSx0aGlzLmdldFVUQ0RhdGUoKSx0aGlzLmdldFVUQ0hvdXJzKCksdGhpcy5nZXRVVENNaW51dGVzKCksdGhpcy5nZXRVVENTZWNvbmRzKCldO249KG48MD9cIi1cIjpuPjk5OTk/XCIrXCI6XCJcIikrWihcIjAwMDAwXCIrTWF0aC5hYnMobiksMDw9biYmbjw9OTk5OT8tNDotNik7dD1lLmxlbmd0aDt3aGlsZSh0LS0pe3I9ZVt0XTtpZihyPDEwKXtlW3RdPVwiMFwiK3J9fXJldHVybiBuK1wiLVwiK2YuY2FsbChlLDAsMikuam9pbihcIi1cIikrXCJUXCIrZi5jYWxsKGUsMikuam9pbihcIjpcIikrXCIuXCIrWihcIjAwMFwiK3RoaXMuZ2V0VVRDTWlsbGlzZWNvbmRzKCksLTMpK1wiWlwifX0sZGV8fHdlKTt2YXIgbWU9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIERhdGUucHJvdG90eXBlLnRvSlNPTiYmbmV3IERhdGUoTmFOKS50b0pTT04oKT09PW51bGwmJm5ldyBEYXRlKGdlKS50b0pTT04oKS5pbmRleE9mKHllKSE9PS0xJiZEYXRlLnByb3RvdHlwZS50b0pTT04uY2FsbCh7dG9JU09TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gdHJ1ZX19KX1jYXRjaChlKXtyZXR1cm4gZmFsc2V9fSgpO2lmKCFtZSl7RGF0ZS5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uIHRvSlNPTihlKXt2YXIgdD1yKHRoaXMpO3ZhciBuPUEuVG9QcmltaXRpdmUodCk7aWYodHlwZW9mIG49PT1cIm51bWJlclwiJiYhaXNGaW5pdGUobikpe3JldHVybiBudWxsfXZhciBpPXQudG9JU09TdHJpbmc7aWYoIW0oaSkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJ0b0lTT1N0cmluZyBwcm9wZXJ0eSBpcyBub3QgY2FsbGFibGVcIil9cmV0dXJuIGkuY2FsbCh0KX19dmFyIGJlPURhdGUucGFyc2UoXCIrMDMzNjU4LTA5LTI3VDAxOjQ2OjQwLjAwMFpcIik9PT0xZTE1O3ZhciBUZT0haXNOYU4oRGF0ZS5wYXJzZShcIjIwMTItMDQtMDRUMjQ6MDA6MDAuNTAwWlwiKSl8fCFpc05hTihEYXRlLnBhcnNlKFwiMjAxMi0xMS0zMVQyMzo1OTo1OS4wMDBaXCIpKXx8IWlzTmFOKERhdGUucGFyc2UoXCIyMDEyLTEyLTMxVDIzOjU5OjYwLjAwMFpcIikpO3ZhciB4ZT1pc05hTihEYXRlLnBhcnNlKFwiMjAwMC0wMS0wMVQwMDowMDowMC4wMDBaXCIpKTtpZih4ZXx8VGV8fCFiZSl7dmFyIE9lPU1hdGgucG93KDIsMzEpLTE7dmFyIFNlPU1hdGguZmxvb3IoT2UvMWUzKTt2YXIgamU9UihuZXcgRGF0ZSgxOTcwLDAsMSwwLDAsMCxPZSsxKS5nZXRUaW1lKCkpO0RhdGU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24gRGF0ZShyLG4saSxvLGwsdSxmKXt2YXIgcz1hcmd1bWVudHMubGVuZ3RoO3ZhciBjO2lmKHRoaXMgaW5zdGFuY2VvZiBlKXt2YXIgdj11O3ZhciBwPWY7aWYoamUmJnM+PTcmJmY+T2Upe3ZhciBoPU1hdGguZmxvb3IoZi9PZSkqT2U7dmFyIGc9TWF0aC5mbG9vcihoLzFlMyk7dis9ZztwLT1nKjFlM31jPXM9PT0xJiZhKHIpPT09cj9uZXcgZSh0LnBhcnNlKHIpKTpzPj03P25ldyBlKHIsbixpLG8sbCx2LHApOnM+PTY/bmV3IGUocixuLGksbyxsLHYpOnM+PTU/bmV3IGUocixuLGksbyxsKTpzPj00P25ldyBlKHIsbixpLG8pOnM+PTM/bmV3IGUocixuLGkpOnM+PTI/bmV3IGUocixuKTpzPj0xP25ldyBlKHIpOm5ldyBlfWVsc2V7Yz1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1pZighRihjKSl7VShjLHtjb25zdHJ1Y3Rvcjp0fSx0cnVlKX1yZXR1cm4gY307dmFyIHI9bmV3IFJlZ0V4cChcIl5cIitcIihcXFxcZHs0fXxbKy1dXFxcXGR7Nn0pXCIrXCIoPzotKFxcXFxkezJ9KVwiK1wiKD86LShcXFxcZHsyfSlcIitcIig/OlwiK1wiVChcXFxcZHsyfSlcIitcIjooXFxcXGR7Mn0pXCIrXCIoPzpcIitcIjooXFxcXGR7Mn0pXCIrXCIoPzooXFxcXC5cXFxcZHsxLH0pKT9cIitcIik/XCIrXCIoXCIrXCJafFwiK1wiKD86XCIrXCIoWy0rXSlcIitcIihcXFxcZHsyfSlcIitcIjooXFxcXGR7Mn0pXCIrXCIpXCIrXCIpPyk/KT8pP1wiK1wiJFwiKTt2YXIgbj1bMCwzMSw1OSw5MCwxMjAsMTUxLDE4MSwyMTIsMjQzLDI3MywzMDQsMzM0LDM2NV07dmFyIGk9ZnVuY3Rpb24gZGF5RnJvbU1vbnRoKGUsdCl7dmFyIHI9dD4xPzE6MDtyZXR1cm4gblt0XStNYXRoLmZsb29yKChlLTE5NjkrcikvNCktTWF0aC5mbG9vcigoZS0xOTAxK3IpLzEwMCkrTWF0aC5mbG9vcigoZS0xNjAxK3IpLzQwMCkrMzY1KihlLTE5NzApfTt2YXIgbz1mdW5jdGlvbiB0b1VUQyh0KXt2YXIgcj0wO3ZhciBuPXQ7aWYoamUmJm4+T2Upe3ZhciBpPU1hdGguZmxvb3Iobi9PZSkqT2U7dmFyIGE9TWF0aC5mbG9vcihpLzFlMyk7cis9YTtuLT1hKjFlM31yZXR1cm4gbChuZXcgZSgxOTcwLDAsMSwwLDAscixuKSl9O2Zvcih2YXIgdSBpbiBlKXtpZihDKGUsdSkpe3RbdV09ZVt1XX19VSh0LHtub3c6ZS5ub3csVVRDOmUuVVRDfSx0cnVlKTt0LnByb3RvdHlwZT1lLnByb3RvdHlwZTtVKHQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp0fSx0cnVlKTt2YXIgZj1mdW5jdGlvbiBwYXJzZSh0KXt2YXIgbj1yLmV4ZWModCk7aWYobil7dmFyIGE9bChuWzFdKSx1PWwoblsyXXx8MSktMSxmPWwoblszXXx8MSktMSxzPWwobls0XXx8MCksYz1sKG5bNV18fDApLHY9bChuWzZdfHwwKSxwPU1hdGguZmxvb3IobChuWzddfHwwKSoxZTMpLGg9Qm9vbGVhbihuWzRdJiYhbls4XSksZz1uWzldPT09XCItXCI/MTotMSx5PWwoblsxMF18fDApLGQ9bChuWzExXXx8MCksdzt2YXIgbT1jPjB8fHY+MHx8cD4wO2lmKHM8KG0/MjQ6MjUpJiZjPDYwJiZ2PDYwJiZwPDFlMyYmdT4tMSYmdTwxMiYmeTwyNCYmZDw2MCYmZj4tMSYmZjxpKGEsdSsxKS1pKGEsdSkpe3c9KChpKGEsdSkrZikqMjQrcyt5KmcpKjYwO3c9KCh3K2MrZCpnKSo2MCt2KSoxZTMrcDtpZihoKXt3PW8odyl9aWYoLTg2NGUxMzw9dyYmdzw9ODY0ZTEzKXtyZXR1cm4gd319cmV0dXJuIE5hTn1yZXR1cm4gZS5wYXJzZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O1UodCx7cGFyc2U6Zn0pO3JldHVybiB0fShEYXRlKX1pZighRGF0ZS5ub3cpe0RhdGUubm93PWZ1bmN0aW9uIG5vdygpe3JldHVybihuZXcgRGF0ZSkuZ2V0VGltZSgpfX12YXIgRWU9dS50b0ZpeGVkJiYoOGUtNS50b0ZpeGVkKDMpIT09XCIwLjAwMFwifHwuOS50b0ZpeGVkKDApIT09XCIxXCJ8fDEuMjU1LnRvRml4ZWQoMikhPT1cIjEuMjVcInx8MHhkZTBiNmIzYTc2NDAwODAudG9GaXhlZCgwKSE9PVwiMTAwMDAwMDAwMDAwMDAwMDEyOFwiKTt2YXIgSWU9e2Jhc2U6MWU3LHNpemU6NixkYXRhOlswLDAsMCwwLDAsMF0sbXVsdGlwbHk6ZnVuY3Rpb24gbXVsdGlwbHkoZSx0KXt2YXIgcj0tMTt2YXIgbj10O3doaWxlKCsrcjxJZS5zaXplKXtuKz1lKkllLmRhdGFbcl07SWUuZGF0YVtyXT1uJUllLmJhc2U7bj1NYXRoLmZsb29yKG4vSWUuYmFzZSl9fSxkaXZpZGU6ZnVuY3Rpb24gZGl2aWRlKGUpe3ZhciB0PUllLnNpemUscj0wO3doaWxlKC0tdD49MCl7cis9SWUuZGF0YVt0XTtJZS5kYXRhW3RdPU1hdGguZmxvb3Ioci9lKTtyPXIlZSpJZS5iYXNlfX0sbnVtVG9TdHJpbmc6ZnVuY3Rpb24gbnVtVG9TdHJpbmcoKXt2YXIgZT1JZS5zaXplO3ZhciB0PVwiXCI7d2hpbGUoLS1lPj0wKXtpZih0IT09XCJcInx8ZT09PTB8fEllLmRhdGFbZV0hPT0wKXt2YXIgcj1hKEllLmRhdGFbZV0pO2lmKHQ9PT1cIlwiKXt0PXJ9ZWxzZXt0Kz1aKFwiMDAwMDAwMFwiLDAsNy1yLmxlbmd0aCkrcn19fXJldHVybiB0fSxwb3c6ZnVuY3Rpb24gcG93KGUsdCxyKXtyZXR1cm4gdD09PTA/cjp0JTI9PT0xP3BvdyhlLHQtMSxyKmUpOnBvdyhlKmUsdC8yLHIpfSxsb2c6ZnVuY3Rpb24gbG9nKGUpe3ZhciB0PTA7dmFyIHI9ZTt3aGlsZShyPj00MDk2KXt0Kz0xMjtyLz00MDk2fXdoaWxlKHI+PTIpe3QrPTE7ci89Mn1yZXR1cm4gdH19O1UodSx7dG9GaXhlZDpmdW5jdGlvbiB0b0ZpeGVkKGUpe3ZhciB0LHIsbixpLG8sdSxmLHM7dD1sKGUpO3Q9Uih0KT8wOk1hdGguZmxvb3IodCk7aWYodDwwfHx0PjIwKXt0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk51bWJlci50b0ZpeGVkIGNhbGxlZCB3aXRoIGludmFsaWQgbnVtYmVyIG9mIGRlY2ltYWxzXCIpfXI9bCh0aGlzKTtpZihSKHIpKXtyZXR1cm5cIk5hTlwifWlmKHI8PS0xZTIxfHxyPj0xZTIxKXtyZXR1cm4gYShyKX1uPVwiXCI7aWYocjwwKXtuPVwiLVwiO3I9LXJ9aT1cIjBcIjtpZihyPjFlLTIxKXtvPUllLmxvZyhyKkllLnBvdygyLDY5LDEpKS02OTt1PW88MD9yKkllLnBvdygyLC1vLDEpOnIvSWUucG93KDIsbywxKTt1Kj00NTAzNTk5NjI3MzcwNDk2O289NTItbztpZihvPjApe0llLm11bHRpcGx5KDAsdSk7Zj10O3doaWxlKGY+PTcpe0llLm11bHRpcGx5KDFlNywwKTtmLT03fUllLm11bHRpcGx5KEllLnBvdygxMCxmLDEpLDApO2Y9by0xO3doaWxlKGY+PTIzKXtJZS5kaXZpZGUoMTw8MjMpO2YtPTIzfUllLmRpdmlkZSgxPDxmKTtJZS5tdWx0aXBseSgxLDEpO0llLmRpdmlkZSgyKTtpPUllLm51bVRvU3RyaW5nKCl9ZWxzZXtJZS5tdWx0aXBseSgwLHUpO0llLm11bHRpcGx5KDE8PC1vLDApO2k9SWUubnVtVG9TdHJpbmcoKStaKFwiMC4wMDAwMDAwMDAwMDAwMDAwMDAwMFwiLDIsMit0KX19aWYodD4wKXtzPWkubGVuZ3RoO2lmKHM8PXQpe2k9bitaKFwiMC4wMDAwMDAwMDAwMDAwMDAwMDAwXCIsMCx0LXMrMikraX1lbHNle2k9bitaKGksMCxzLXQpK1wiLlwiK1ooaSxzLXQpfX1lbHNle2k9bitpfXJldHVybiBpfX0sRWUpO2lmKFwiYWJcIi5zcGxpdCgvKD86YWIpKi8pLmxlbmd0aCE9PTJ8fFwiLlwiLnNwbGl0KC8oLj8pKC4/KS8pLmxlbmd0aCE9PTR8fFwidGVzc3RcIi5zcGxpdCgvKHMpKi8pWzFdPT09XCJ0XCJ8fFwidGVzdFwiLnNwbGl0KC8oPzopLywtMSkubGVuZ3RoIT09NHx8XCJcIi5zcGxpdCgvLj8vKS5sZW5ndGh8fFwiLlwiLnNwbGl0KC8oKSgpLykubGVuZ3RoPjEpeyhmdW5jdGlvbigpe3ZhciBlPXR5cGVvZi8oKT8/Ly5leGVjKFwiXCIpWzFdPT09XCJ1bmRlZmluZWRcIjt2YXIgdD1NYXRoLnBvdygyLDMyKS0xO28uc3BsaXQ9ZnVuY3Rpb24ocixuKXt2YXIgaT10aGlzO2lmKHR5cGVvZiByPT09XCJ1bmRlZmluZWRcIiYmbj09PTApe3JldHVybltdfWlmKCFTKHIpKXtyZXR1cm4gSih0aGlzLHIsbil9dmFyIGE9W107dmFyIG89KHIuaWdub3JlQ2FzZT9cImlcIjpcIlwiKSsoci5tdWx0aWxpbmU/XCJtXCI6XCJcIikrKHIudW5pY29kZT9cInVcIjpcIlwiKSsoci5zdGlja3k/XCJ5XCI6XCJcIiksbD0wLHUscyx2LHA7dmFyIGg9bmV3IFJlZ0V4cChyLnNvdXJjZSxvK1wiZ1wiKTtpKz1cIlwiO2lmKCFlKXt1PW5ldyBSZWdFeHAoXCJeXCIraC5zb3VyY2UrXCIkKD8hXFxcXHMpXCIsbyl9dmFyIGc9dHlwZW9mIG49PT1cInVuZGVmaW5lZFwiP3Q6QS5Ub1VpbnQzMihuKTtzPWguZXhlYyhpKTt3aGlsZShzKXt2PXMuaW5kZXgrc1swXS5sZW5ndGg7aWYodj5sKXtjLmNhbGwoYSxaKGksbCxzLmluZGV4KSk7aWYoIWUmJnMubGVuZ3RoPjEpe3NbMF0ucmVwbGFjZSh1LGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoLTI7ZSsrKXtpZih0eXBlb2YgYXJndW1lbnRzW2VdPT09XCJ1bmRlZmluZWRcIil7c1tlXT12b2lkIDB9fX0pfWlmKHMubGVuZ3RoPjEmJnMuaW5kZXg8aS5sZW5ndGgpe2MuYXBwbHkoYSxmLmNhbGwocywxKSl9cD1zWzBdLmxlbmd0aDtsPXY7aWYoYS5sZW5ndGg+PWcpe2JyZWFrfX1pZihoLmxhc3RJbmRleD09PXMuaW5kZXgpe2gubGFzdEluZGV4Kyt9cz1oLmV4ZWMoaSl9aWYobD09PWkubGVuZ3RoKXtpZihwfHwhaC50ZXN0KFwiXCIpKXtjLmNhbGwoYSxcIlwiKX19ZWxzZXtjLmNhbGwoYSxaKGksbCkpfXJldHVybiBhLmxlbmd0aD5nP1ooYSwwLGcpOmF9fSkoKX1lbHNlIGlmKFwiMFwiLnNwbGl0KHZvaWQgMCwwKS5sZW5ndGgpe28uc3BsaXQ9ZnVuY3Rpb24gc3BsaXQoZSx0KXtpZih0eXBlb2YgZT09PVwidW5kZWZpbmVkXCImJnQ9PT0wKXtyZXR1cm5bXX1yZXR1cm4gSih0aGlzLGUsdCl9fXZhciBEZT1vLnJlcGxhY2U7dmFyIE1lPWZ1bmN0aW9uKCl7dmFyIGU9W107XCJ4XCIucmVwbGFjZSgveCguKT8vZyxmdW5jdGlvbih0LHIpe2MuY2FsbChlLHIpfSk7cmV0dXJuIGUubGVuZ3RoPT09MSYmdHlwZW9mIGVbMF09PT1cInVuZGVmaW5lZFwifSgpO2lmKCFNZSl7by5yZXBsYWNlPWZ1bmN0aW9uIHJlcGxhY2UoZSx0KXt2YXIgcj1tKHQpO3ZhciBuPVMoZSkmJi9cXClbKj9dLy50ZXN0KGUuc291cmNlKTtpZighcnx8IW4pe3JldHVybiBEZS5jYWxsKHRoaXMsZSx0KX1lbHNle3ZhciBpPWZ1bmN0aW9uKHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg7dmFyIGk9ZS5sYXN0SW5kZXg7ZS5sYXN0SW5kZXg9MDt2YXIgYT1lLmV4ZWMocil8fFtdO2UubGFzdEluZGV4PWk7Yy5jYWxsKGEsYXJndW1lbnRzW24tMl0sYXJndW1lbnRzW24tMV0pO3JldHVybiB0LmFwcGx5KHRoaXMsYSl9O3JldHVybiBEZS5jYWxsKHRoaXMsZSxpKX19fXZhciBOZT1vLnN1YnN0cjt2YXIga2U9XCJcIi5zdWJzdHImJlwiMGJcIi5zdWJzdHIoLTEpIT09XCJiXCI7VShvLHtzdWJzdHI6ZnVuY3Rpb24gc3Vic3RyKGUsdCl7dmFyIHI9ZTtpZihlPDApe3I9Zyh0aGlzLmxlbmd0aCtlLDApfXJldHVybiBOZS5jYWxsKHRoaXMscix0KX19LGtlKTt2YXIgVWU9XCJcdFxcblx1MDAwYlxcZlxcciBcXHhhMFxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1wiK1wiXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdTIwMjhcIitcIlxcdTIwMjlcXHVmZWZmXCI7dmFyIEZlPVwiXFx1MjAwYlwiO3ZhciBSZT1cIltcIitVZStcIl1cIjt2YXIgQWU9bmV3IFJlZ0V4cChcIl5cIitSZStSZStcIipcIik7dmFyICRlPW5ldyBSZWdFeHAoUmUrUmUrXCIqJFwiKTt2YXIgQ2U9by50cmltJiYoVWUudHJpbSgpfHwhRmUudHJpbSgpKTtVKG8se3RyaW06ZnVuY3Rpb24gdHJpbSgpe2lmKHR5cGVvZiB0aGlzPT09XCJ1bmRlZmluZWRcInx8dGhpcz09PW51bGwpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJjYW4ndCBjb252ZXJ0IFwiK3RoaXMrXCIgdG8gb2JqZWN0XCIpfXJldHVybiBhKHRoaXMpLnJlcGxhY2UoQWUsXCJcIikucmVwbGFjZSgkZSxcIlwiKX19LENlKTtpZihwYXJzZUludChVZStcIjA4XCIpIT09OHx8cGFyc2VJbnQoVWUrXCIweDE2XCIpIT09MjIpe3BhcnNlSW50PWZ1bmN0aW9uKGUpe3ZhciB0PS9eMFt4WF0vO3JldHVybiBmdW5jdGlvbiBwYXJzZUludChyLG4pe3ZhciBpPWEocikudHJpbSgpO3ZhciBvPWwobil8fCh0LnRlc3QoaSk/MTY6MTApO3JldHVybiBlKGksbyl9fShwYXJzZUludCl9fSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lczUtc2hpbS5tYXBcbiIsIkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5mdW5jdGlvbiBBbGVydFBhbmVsRGlyZWN0aXZlKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGFsZXJ0czogJz0nLFxuICAgICAgbW9kZTogJ0AnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24odEVsZW1lbnQsIHRBdHRycykge1xuICAgICAgICByZXR1cm4gZ2V0VGVtcGxhdGVVcmwodEF0dHJzLm1vZGUpO1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBDb250cm9sbGVyKCRsb2cpIHtcbiAgdmFyIHZtID0gdGhpcztcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgICRsb2cuZGVidWcobmV3IERhdGUoKSArICc6IFN0YXJ0aW5nIGFsZXJ0RGlyZWN0aXZlIGluIG1vZGU6ICcgKyB2bS5tb2RlICsgJyB3aXRoIGRhdGE6Jywgdm0uYWxlcnRzKTtcbiAgfVxuXG4gIGluaXQoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGVtcGxhdGVVcmwobW9kZSkge1xuICBjb25zb2xlLmxvZygnZ2V0dGluZyB0ZW1wbGF0ZSBmb3IgbW9kZTogJywgbW9kZSk7XG4gIGlmIChtb2RlID09PSAnc2luZ2xlJykge1xuICAgIHJldHVybiAnL2FwcC90YWI0L2FsZXJ0YmFyLmh0bWwnO1xuICB9XG5cbiAgcmV0dXJuICcvYXBwL3RhYjQvYWxlcnRsaXN0Lmh0bWwnO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQWxlcnRQYW5lbERpcmVjdGl2ZTtcbiIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnZXM1LXNoaW0nKTtcbnJlcXVpcmUoJ2VzNS1zaGFtJyk7XG5cbnZhciByb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcicpLFxuICAgIGJvb3RzdHJhcHBlciA9IHJlcXVpcmUoJy4vYm9vdHN0cmFwcGVyJyksXG4gICAgcHJvbWlzZVdhaXRlciA9IHJlcXVpcmUoJy4vcHJvbWlzZVdhaXRlckN0cmwnKSxcbiAgICBkYXRhU2VydmljZSA9IHJlcXVpcmUoJy4vZGF0YVNlcnZpY2UnKSxcbiAgICB0YWJzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vdGFicy90YWJzQ3RybCcpLFxuICAgIGFsZXJ0UGFuZWwgPSByZXF1aXJlKCcuL2FsZXJ0cy9hbGVydFBhbmVsRGlyZWN0aXZlJylcbiAgICA7XG5cbi8vcmVxdWlyZSgnYW5ndWxhci11aS1yb3V0ZXInKTtcbi8vcmVxdWlyZSgnYW5ndWxhci11aS1ib290c3RyYXAnKTtcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlcicsICd1aS5ib290c3RyYXAnLCAnYW5ndWxhck1vZGFsU2VydmljZSddKTtcbmFwcC5ydW4oYm9vdHN0cmFwcGVyKTtcbmFwcC5jb25maWcocm91dGVyKTtcbmFwcC5jb250cm9sbGVyKCdwcm9taXNlV2FpdGVyJywgcHJvbWlzZVdhaXRlcik7XG5hcHAuZmFjdG9yeSgnZGF0YVNlcnZpY2UnLCBkYXRhU2VydmljZSk7XG5hcHAuZGlyZWN0aXZlKCdhbGVydFBhbmVsJywgYWxlcnRQYW5lbCk7XG5cbnJlcXVpcmUoJy4vZHJhZ2dhYmxlL2luZGV4Jyk7XG5yZXF1aXJlKCcuL3RhYnMvaW5kZXgnKTtcbiIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkbG9nKSB7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGJlZ2luLi4uJyk7XG5cblxuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQuJyk7XG59O1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhY3Q7XG5cbmZ1bmN0aW9uIENvbnRhY3QoKSB7IH1cblxuQ29udGFjdC5wcm90b3R5cGUuaXNEaXJ0eSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0RpcnR5O1xufTtcblxuQ29udGFjdC5wcm90b3R5cGUubWFya0RpcnR5ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faXNEaXJ0eSA9IHRydWU7XG59O1xuXG5Db250YWN0LnByb3RvdHlwZS5wcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbihwcm9wTmFtZSkge1xuICAgIHRoaXMubWFya0RpcnR5KCk7XG59O1xuXG5Db250YWN0LnByb3RvdHlwZS5nZXRTZXRGaXJzdE5hbWUgPSBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCApIHtcbiAgICAgICAgLy8gYSB2YWx1ZSBvciBudWxsIG9yIHVuZGVmaW5lZCB3YXMgcGFzcywgY29uc2lkZXIgaXQgYSBzZXR0ZXJcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgLy8gc29tZXRoaW5nIGlzIGNoYW5naW5nXG4gICAgICAgICAgICAvLyBhIHZhbHVlIG9yIG51bGwgb3IgdW5kZWZpbmVkIHdhcyBwYXNzLCBjb25zaWRlciBpdCBhIHNldHRlclxuICAgICAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2lzRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xufTtcblxuQ29udGFjdC5wcm90b3R5cGUuZ2V0U2V0TGFzdE5hbWUgPSBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIGEgdmFsdWUgb3IgbnVsbCBvciB1bmRlZmluZWQgd2FzIHBhc3MsIGNvbnNpZGVyIGl0IGEgc2V0dGVyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5sYXN0TmFtZSkge1xuICAgICAgICAgICAgLy8gc29tZXRoaW5nIGlzIGNoYW5naW5nXG4gICAgICAgICAgICB0aGlzLmxhc3ROYW1lID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxhc3ROYW1lO1xufTtcbiIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIENvbnRhY3QgPSByZXF1aXJlKCcuL2NvbnRhY3QnKTtcblxuZGF0YVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJHEnLCAnJHRpbWVvdXQnXTtcblxuZnVuY3Rpb24gZGF0YVNlcnZpY2UoJGh0dHAsICRxLCAkdGltZW91dCkge1xuICAgIHZhciBjdXJyZW50SXRlbSA9IHt9LFxuICAgICAgICBjb250YWN0ID0gbmV3IENvbnRhY3QoKSxcbiAgICAgICAgaXRlbXMgPSBbXSxcbiAgICAgICAgaXNMb2FkaW5nID0gZmFsc2UsXG4gICAgICAgIGRhdGEgPSB7fTtcblxuICAgIGFuZ3VsYXIuZXh0ZW5kKGNvbnRhY3QsIGN1cnJlbnRJdGVtKTtcbiAgICBkYXRhLml0ZW0gPSBjb250YWN0O1xuICAgIGRhdGEuaXRlbXMgPSBpdGVtcztcblxuICAgIHZhciBzZWxlY3QgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5kYXRhLml0ZW0gPSB7fTtcblxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBpdGVtO1xuICAgICAgICAgICAgZm9yICh2YXIgaXRlbUlkID0gMDsgaXRlbUlkIDwgc2VsZi5pdGVtcy5sZW5ndGg7IGl0ZW1JZCArKyApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pdGVtc1tpdGVtSWRdICYmIHNlbGYuaXRlbXNbaXRlbUlkXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHNlbGYuaXRlbXNbaXRlbUlkXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudEl0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIHZhciBjb250YWN0ID0gbmV3IENvbnRhY3QoKTtcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmV4dGVuZChjb250YWN0LCBpdGVtKTtcbiAgICAgICAgICAgICAgICBzZWxmLmRhdGEuaXRlbSA9IGNvbnRhY3Q7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb250YWN0KTtcbiAgICAgICAgICAgICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoJ1VuYWJsZSB0byBsb2NhdGUgaXRlbSB3aXRoIGlkICcgKyBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMDApO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBidWlsZFVwKHNlbGYpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJ0pvaG4nLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnRG9lJyxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmVldDogJzEyMyBBbnkgU3RyZWV0JyxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogJ0FueXRvd24nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJ1dBJyxcbiAgICAgICAgICAgICAgICAgICAgemlwOiAnOTgxMDAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb2I6ICcxLzIvMTkzNCcsXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiAnTScsXG4gICAgICAgICAgICAgICAgb2NjdXBhdGlvbjogJ09sZCBHdXknLFxuICAgICAgICAgICAgICAgIGhvYmJpZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ2Zpc2hpbmcnLFxuICAgICAgICAgICAgICAgICAgICAnZ2FiYmluZycsXG4gICAgICAgICAgICAgICAgICAgICdkcmlua2luZyBjb2ZmZWUnXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICdNaXNzeScsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdCZWxsZScsXG4gICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICBzdHJlZXQ6ICcyMzQgU29tZSBTdHJlZXQnLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiAnU29tZXRvd24nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJ1dBJyxcbiAgICAgICAgICAgICAgICAgICAgemlwOiAnOTgyMDAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb2I6ICc2LzcvMTk1NycsXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiAnRicsXG4gICAgICAgICAgICAgICAgb2NjdXBhdGlvbjogJ0RlYnV0YW50ZScsXG4gICAgICAgICAgICAgICAgaG9iYmllczogW1xuICAgICAgICAgICAgICAgICAgICAnc2hvcHBpbmcnLFxuICAgICAgICAgICAgICAgICAgICAnZ29zc2lwcGluZydcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJ0Rldm9uJyxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ0R1ZGUnLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWV0OiAnNDU2IDEwdGggU3RyZWV0JyxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogJ05hcnJvd3Rvd24nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJ1dBJyxcbiAgICAgICAgICAgICAgICAgICAgemlwOiAnOTgzMDAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb2I6ICc4LzkvMTk4MicsXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiAnTScsXG4gICAgICAgICAgICAgICAgb2NjdXBhdGlvbjogJ0hhY2tlcicsXG4gICAgICAgICAgICAgICAgaG9iYmllczogW1xuICAgICAgICAgICAgICAgICAgICAnY29kaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NhZmZlaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgJ21ha2luZyBzdHVmZidcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgc2VsZi5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICBzZWxmLmRhdGEua2V5cyA9IFtdO1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgc2VsZi5kYXRhLmtleXMucHVzaChpdGVtc1tpXS5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5kYXRhLml0ZW1zID0gaXRlbXM7XG4gICAgfVxuXG4gICAgdmFyIGxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBidWlsZFVwKHNlbGYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmRhdGEuaXRlbXMgPSBzZWxmLml0ZW1zO1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShzZWxmLml0ZW1zKTtcbiAgICAgICAgICAgIHNlbGYuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50SXRlbTogY3VycmVudEl0ZW0sXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgICAgbG9hZDogbG9hZCxcbiAgICAgICAgc2VsZWN0OiBzZWxlY3QsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRhdGFTZXJ2aWNlO1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gIHZhciBzdGFydCA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIHVpLmhlbHBlci5hZGRDbGFzcygndWktZHJhZ2dpbmcnKTtcbiAgfTtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuXG4gIH07XG5cbiAgdmFyIGxpbmtlciA9IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgIGVsZW1lbnQuZHJhZ2dhYmxlKHtcbiAgICAgICAgY29udGFpbm1lbnQ6ICdkb2N1bWVudCcsXG4gICAgICAgIGhlbHBlcjogJ2Nsb25lJyxcbiAgICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICAgIHJldmVydDogJ2ludmFsaWQnLFxuICAgICAgICByZXZlcnREdXJhdGlvbjogNTAwLFxuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIHN0b3A6IHN0b3AsXG4gICAgICAgIHN0YWNrOiAnLnVpLWRyYWdnYWJsZSdcbiAgICB9KTtcblxuICAgIHZhciBwYXJlbnRJZCA9IGVsZW1lbnQucGFyZW50KClbMF0uaWQ7XG4gICAgZWxlbWVudC5kYXRhKCdsaXN0JywgcGFyZW50SWQpO1xuICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ3VpLWRyYWdnYWJsZScpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBsaW5rZXIsXG4gICAgc2NvcGU6IHtcbiAgICAgIGl0ZW1TdHJpbmc6ICdAaXRlbSdcbiAgICB9XG4gIH07XG59O1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBEcmFnZ2FibGVMaXN0Q29udHJvbGxlcigkbG9nKSB7XG5cdHZhciB2bSA9IHRoaXM7XG5cblx0JGxvZy5kZWJ1ZygnSW4gZHJhZ2dhYmxlTGlzdCBjb250cm9sbGVyLi4uLicpO1xuXG5cdHZtLm9uTGlzdE1vdmUgPSBvbkxpc3RNb3ZlO1xuXG5cdGZ1bmN0aW9uIG9uTGlzdE1vdmUoaXRlbSwgZnJvbUxpc3RJZCwgdG9MaXN0KSB7XG5cdFx0JGxvZy5kZWJ1ZygnTW92aW5nIGl0ZW0gJyArIGl0ZW0ubmFtZSArICcgdG8gbGlzdCAnICsgdG9MaXN0LmlkKTtcblx0XHR2bS5vbkRyb3AoKShpdGVtLCBmcm9tTGlzdElkLCB0b0xpc3QpO1xuXHR9XG59XG5cbkRyYWdnYWJsZUxpc3RDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBEcmFnZ2FibGVMaXN0RGlyZWN0aXZlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0c2NvcGU6IHtcblx0XHRcdGxpc3Q6ICc9Jyxcblx0XHRcdG9uRHJvcDogJyZkcm9wcGFibGVEcm9wJ1xuXHRcdH0sXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvdGVtcGxhdGVzL2hvc3BpdGFsLWNlbnN1cy1pdGVtLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6IERyYWdnYWJsZUxpc3RDb250cm9sbGVyLFxuXHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdH07XG59O1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBDb250cm9sbGVyKCRsb2cpIHtcblx0dmFyIHZtID0gdGhpcztcblxuXHQkbG9nLmRlYnVnKCdJbiBkcmFnZ2FibGVMaXN0TGlzdCBjb250cm9sbGVyLi4uLicpO1xuXG5cdHZtLm9uTGlzdE1vdmUgPSBvbkxpc3RNb3ZlO1xuXG5cdGZ1bmN0aW9uIG9uTGlzdE1vdmUoaXRlbSwgZnJvbUxpc3RJZCwgdG9MaXN0KSB7XG5cdFx0JGxvZy5kZWJ1ZygnTW92aW5nIGl0ZW0gJyArIGl0ZW0ubmFtZSArICcgdG8gbGlzdCAnICsgdG9MaXN0LmlkKTtcblx0XHQvLyBnZXQgdGhlIGxpc3Qgd2UgYXJlIHB1bGxpbmcgdGhlIGl0ZW0gZnJvbVxuXHRcdHZhciBmcm9tTGlzdCA9IGdldExpc3RCeUlkKGZyb21MaXN0SWQpO1xuXHRcdC8vIGZpbmQgdGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBvcmlnaW5hdGluZyBsaXN0XG5cdFx0dmFyIGl0ZW1JbmRleCA9IGl0ZW0uaW5kZXg7XG5cdFx0Ly8gcHV0IHRoZSBpdGVtIGludG8gdGhlIGRlc3RpbmF0aW9uIGxpc3Rcblx0XHR0b0xpc3QuaXRlbXMucHVzaChmcm9tTGlzdC5pdGVtc1tpdGVtSW5kZXhdKTtcblx0XHQvLyByZW1vdmUgdGhlIGl0ZW0gZnJvbSB0aGUgc291cmNlIGxpc3RcbiAgICAgICAgICBmcm9tTGlzdC5pdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExpc3RCeUlkKGlkKSB7XG5cdFx0Zm9yICh2YXIgaW5kZXg9MDsgaW5kZXggPCB2bS5saXN0cy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGlmICh2bS5saXN0c1tpbmRleF0uaWQgPT09IGlkKSB7XG5cdFx0XHRcdHJldHVybiB2bS5saXN0c1tpbmRleF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIERpcmVjdGl2ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRsaXN0czogJz0nXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC90ZW1wbGF0ZXMvaG9zcGl0YWwtY2Vuc3VzLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG5cdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZVxuXHR9O1xufTtcbiIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkcm9wID0gZnVuY3Rpb24oZXZlbnQsIHVpLCBzY29wZSkge1xuICAgICAgICB2YXIgZHJhZ0l0ZW0gPSBhbmd1bGFyLmVsZW1lbnQodWkuZHJhZ2dhYmxlKS5kYXRhKCdpdGVtJyksXG4gICAgICAgICAgICByZWplY3QgPSBhbmd1bGFyLmVsZW1lbnQodWkuZHJhZ2dhYmxlKS5kYXRhKCdyZWplY3QnKSxcbiAgICAgICAgICAgIGRyYWdGcm9tTGlzdElkID0gYW5ndWxhci5lbGVtZW50KHVpLmRyYWdnYWJsZSkuZGF0YSgnbGlzdCcpO1xuXG4gICAgICAgIGlmIChyZWplY3QpIHtcbiAgICAgICAgICAgIHVpLmRyYWdnYWJsZS5kcmFnZ2FibGUoJ29wdGlvbicsICdyZXZlcnQnLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtb3ZlVG9MaXN0ID0gc2NvcGUubW9kZWwubGlzdDtcblxuICAgICAgICBpZiAoZHJhZ0l0ZW0gJiYgZHJhZ0Zyb21MaXN0SWQgJiYgbW92ZVRvTGlzdCAmJiBzY29wZS5vbkRyb3ApIHtcbiAgICAgICAgICAgIHNjb3BlLm9uRHJvcCgpKGRyYWdJdGVtLCBkcmFnRnJvbUxpc3RJZCwgbW92ZVRvTGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnbW92aW5nIGl0ZW1zIGZyb20gbGlzdCB0byBsaXN0OicsIGRyYWdJdGVtLCBkcmFnRnJvbUxpc3RJZCwgbW92ZVRvTGlzdCk7XG4gICAgICAgIHNjb3BlLiRhcHBseSgpO1xuICAgIH07XG5cbiAgICB2YXIgbGluayA9IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBlbGVtZW50LmRyb3BwYWJsZSh7XG4gICAgICAgICAgICBob3ZlckNsYXNzOiAndWktZHJvcHBhYmxlLWhvdmVyJyxcbiAgICAgICAgICAgIGRyb3A6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgIGRyb3AoZXZlbnQsIHVpLCBzY29wZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBsaW5rOiBsaW5rLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgbW9kZWw6ICc9ZHJvcHBhYmxlTW9kZWwnLFxuICAgICAgICAgICAgb25Ecm9wOiAnJmRyb3BwYWJsZURyb3AnXG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGluZGV4RmlsdGVyID0gcmVxdWlyZSgnLi9pbmRleEZpbHRlcicpO1xudmFyIGRyb3BwYWJsZSA9IHJlcXVpcmUoJy4vZHJvcHBhYmxlRGlyZWN0aXZlJyk7XG52YXIgZHJhZ2dhYmxlID0gcmVxdWlyZSgnLi9kcmFnZ2FibGVEaXJlY3RpdmUnKTtcbnZhciBsaXN0ID0gcmVxdWlyZSgnLi9kcmFnZ2FibGVMaXN0RGlyZWN0aXZlJyk7XG52YXIgbGlzdE9mTGlzdHMgPSByZXF1aXJlKCcuL2RyYWdnYWJsZUxpc3RMaXN0RGlyZWN0aXZlJyk7XG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgnYXBwJylcbiAgLmZpbHRlcignaW5kZXgnLCBpbmRleEZpbHRlcilcbiAgLmRpcmVjdGl2ZSgnZHJvcHBhYmxlJywgZHJvcHBhYmxlKVxuICAuZGlyZWN0aXZlKCdkcmFnZ2FibGUnLCBkcmFnZ2FibGUpXG4gIC5kaXJlY3RpdmUoJ2RyYWdnYWJsZUxpc3QnLCBsaXN0KVxuICAuZGlyZWN0aXZlKCdkcmFnZ2FibGVMaXN0TGlzdCcsIGxpc3RPZkxpc3RzKVxuICA7XG4iLCIvKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGFuZ3VsYXI6IGZhbHNlLCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcnJheSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCFpbmRleCkge1xuICAgICAgICAgICAgaW5kZXggPSAnaW5kZXgnO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5W2ldW2luZGV4XSA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcbn07XG4iLCIvKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuLyogZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlV2FpdGVyQ29udHJvbGxlcjtcblxuUHJvbWlzZVdhaXRlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJywgJ2RhdGEnXTtcblxuZnVuY3Rpb24gUHJvbWlzZVdhaXRlckNvbnRyb2xsZXIoJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSwgZGF0YSkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdm0ubWVzc2FnZXMgPSBbXTtcbiAgICB2bS5zaG93Q2xvc2UgPSBmYWxzZTtcbiAgICB2bS50aXRsZSA9IGRhdGEudGl0bGU7XG5cbiAgICB2YXIgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShyZXN1bHQpO1xuICAgIH07XG5cbiAgICB2bS5kaXNtaXNzID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIGNsb3NlTW9kYWwocmVzdWx0KTtcbiAgICB9O1xuXG4gICAgYWN0aXZhdGUoKTtcblxuICAgIC8vLy8vLy8vLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgICAgIHZtLm1lc3NhZ2VzID0gW107XG4gICAgICAgIHZtLnNob3dDbG9zZSA9IGZhbHNlO1xuXG4gICAgICAgIGRhdGEucHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblxuICAgICAgICAgICAgLy8gd2UgcmVzb2x2ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgICAgICBjbG9zZU1vZGFsKCdPSycpO1xuXG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuXG4gICAgICAgICAgICAvLyB3ZSBlcnJlZFxuICAgICAgICAgICAgdm0ubWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdm0uc2hvd0Nsb3NlID0gdHJ1ZTtcblxuICAgICAgICB9LCBmdW5jdGlvbihwcm9ncmVzcykge1xuXG4gICAgICAgICAgICAvLyB3ZSB3ZXJlIG5vdGlmaWVkXG4gICAgICAgICAgICB2bS5tZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcHJvZ3Jlc3NcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvYXBwLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcIkhvbWUgUm91dGVcIjtcblxuICAgICAgICAgICAgICB0aGlzLmdvID0gZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbyhyb3V0ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgfSlcblxuICAgICAgLnN0YXRlKCdkcmFnRHJvcCcsIHtcbiAgICAgICAgICB1cmw6ICcvZHJhZycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZHJhZ0Ryb3AuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgdm0ubGlzdDEgPSB7XG4gICAgICAgICAgICAgICAgICBpZDogJ2xpc3QxJyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdTb2Z0d2FyZScsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0phdmFTY3JpcHQnLCByZWplY3Q6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdDIycgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdTYXNzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1NRTCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdIVE1MJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0phdmEnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTm9kZUpTJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1J1YnknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTEVTUycgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHZtLmxpc3QyID0ge1xuICAgICAgICAgICAgICAgICAgaWQ6ICdsaXN0MicsXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnQmV2ZXJhZ2VzJyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQ29mZmVlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1Njb3RjaCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdCb3VyYm9uJyB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgdm0ubGlzdDMgPSB7XG4gICAgICAgICAgICAgICAgICBpZDogJ2xpc3QzJyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdHcmVlayBHb2RzJyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnWmV1cycgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdBdGhlbmEnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnUG9zZWlkb24nIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZtLmxpc3Q0ID0ge1xuICAgICAgICAgICAgICAgICAgaWQ6ICdsaXN0NCcsXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnVmVnZXRhYmxlcycsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0JydXNzZWwgU3Byb3V0cycgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdDYWJiYWdlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0Jyb2Njb2xpJyB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2bS5saXN0NSA9IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAnbGlzdDUnLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ0ZydWl0cycsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0JhbmFuYXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnT3JhbmdlcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdBcHBsZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnUGVhcnMnIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZtLmxpc3RzID0gW1xuICAgICAgICAgICAgICAgICAgdm0ubGlzdDEsXG4gICAgICAgICAgICAgICAgICB2bS5saXN0MixcbiAgICAgICAgICAgICAgICAgIHZtLmxpc3QzLFxuICAgICAgICAgICAgICAgICAgdm0ubGlzdDQsXG4gICAgICAgICAgICAgICAgICB2bS5saXN0NVxuICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgIHZtLm9uTGlzdE1vdmUgPSBmdW5jdGlvbihsaXN0LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTW92aW5nIGl0ZW0gJyArIGl0ZW0ubmFtZSArICcgdG8gbGlzdCAnICsgbGlzdC5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgfSlcblxuICAgICAgLnN0YXRlKCd0YWJzJywge1xuICAgICAgICAgIHVybDogJy90YWJzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC90YWJzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdUYWJzQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICB9KVxuXG4gICAgICAuc3RhdGUoJ3RhYnMudGFiMScsIHtcbiAgICAgICAgICB1cmw6ICcvdGFiMScsXG4gICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgXCJcIjogeyB0ZW1wbGF0ZVVybDogJ2FwcC90YWIxL3RhYjEuaHRtbCcgfSxcbiAgICAgICAgICAgICAgXCJsZWZ0QHRhYnMudGFiMVwiOiB7XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC90YWIxL2xlZnQuaHRtbCcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiMSBMZWZ0JztcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhU2VydmljZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcIm1pZGRsZUB0YWJzLnRhYjFcIjoge1xuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGFiMS9taWRkbGUuaHRtbCcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiMSBNaWRkbGUnO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGFTZXJ2aWNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicmlnaHRAdGFicy50YWIxXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjEvcmlnaHQuaHRtbCcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiMSBSaWdodCc7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YVNlcnZpY2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC5zdGF0ZSgndGFicy50YWIyJywge1xuICAgICAgICAgIHVybDogJy90YWIyJyxcbiAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICBcIlwiOiB7IHRlbXBsYXRlVXJsOiAnYXBwL3RhYjIvdGFiMi5odG1sJyB9LFxuICAgICAgICAgICAgICBcImxlZnRAdGFicy50YWIyXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjIvbGVmdC5odG1sJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gJ05lc3RlZCBUYWIyIExlZnQnO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRhdGFTZXJ2aWNlLmRhdGEuaXRlbTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJtaWRkbGVAdGFicy50YWIyXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjIvbWlkZGxlLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCBkYXRhU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnTmVzdGVkIFRhYjIgTWlkZGxlJztcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBkYXRhU2VydmljZS5kYXRhLml0ZW07XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicmlnaHRAdGFicy50YWIyXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjIvcmlnaHQuaHRtbCcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiMiBSaWdodCc7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gZGF0YVNlcnZpY2UuZGF0YS5pdGVtO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLnN0YXRlKCd0YWJzLnRhYjMnLCB7XG4gICAgICAgICAgdXJsOiAnL3RhYjMnLFxuICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgIFwiXCI6IHsgdGVtcGxhdGVVcmw6ICdhcHAvdGFiMy90YWIzLmh0bWwnIH0sXG4gICAgICAgICAgICAgIFwibGVmdEB0YWJzLnRhYjNcIjoge1xuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGFiMy9sZWZ0Lmh0bWwnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCBkYXRhU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnTmVzdGVkIFRhYjMgVG9wJztcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBkYXRhU2VydmljZS5jdXJyZW50SXRlbTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJtaWRkbGVAdGFicy50YWIzXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjMvbWlkZGxlLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCBkYXRhU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnTmVzdGVkIFRhYjMgTWlkZGxlJztcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBkYXRhU2VydmljZS5jdXJyZW50SXRlbTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJyaWdodEB0YWJzLnRhYjNcIjoge1xuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGFiMy9yaWdodC5odG1sJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gJ05lc3RlZCBUYWIzIEJvdHRvbSc7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gZGF0YVNlcnZpY2UuY3VycmVudEl0ZW07XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAuc3RhdGUoJ3RhYnMudGFiNCcsIHtcbiAgICAgICAgICB1cmw6ICcvdGFiNCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGFiNC90YWI0RGlyZWN0aXZlLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiIDQnXG4gICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGFTZXJ2aWNlLmRhdGE7XG4gICAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLnN0YXRlKCd0YWJzLnRhYjUnLCB7XG4gICAgICAgICAgdXJsOiAnL3RhYjUnLFxuICAgICAgICAgIHRlbXBsYXRlOiAnPHRhYi1mb3VydGggZGF0YT1cInZtLmRhdGFcIiBwcml2YXRlLWRhdGE9XCJ2bS5wcml2YXRlRGF0YVwiPjwvdGFiLWZvdXJ0aD4nXG4gICAgICB9KVxuICA7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufTtcbiIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gdGFiRm91cnRoTGVmdERpcmVjdGl2ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRkYXRhOiAnPScsXG5cdFx0XHRzdGF0ZTogJ0AnXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC90YWIxL2xlZnQuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9O1xufVxuXG5mdW5jdGlvbiBDb250cm9sbGVyKCRsb2cpIHtcblx0dmFyIHZtID0gdGhpcztcblxuXHRmdW5jdGlvbiBpbml0KCkge1xuXHRcdCRsb2cuZGVidWcobmV3IERhdGUoKSArICc6IFN0YXJ0aW5nIHRhYjQtbGVmdCBkaXJlY3RpdmUgd2l0aCBkYXRhOicsIHZtLmRhdGEpO1xuXHR9XG5cblx0aW5pdCgpO1xufVxuXG5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxubW9kdWxlLmV4cG9ydHMgPSB0YWJGb3VydGhMZWZ0RGlyZWN0aXZlO1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGFic0N0cmwgPSByZXF1aXJlKCcuL3RhYnNDdHJsJyk7XG52YXIgdGFiRm91cnRoID0gcmVxdWlyZSgnLi90YWJGb3VydGhEaXJlY3RpdmUnKTtcbnZhciB0YWJGb3VydGhMZWZ0ID0gcmVxdWlyZSgnLi9UYWJGb3VydGhMZWZ0RGlyZWN0aXZlJyk7XG52YXIgdGFiRm91cnRoTWlkZGxlID0gcmVxdWlyZSgnLi90YWJGb3VydGhNaWRkbGVEaXJlY3RpdmUnKTtcbnZhciB0YWJGb3VydGhSaWdodCA9IHJlcXVpcmUoJy4vdGFiRm91cnRoUmlnaHREaXJlY3RpdmUnKTtcblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gIC5jb250cm9sbGVyKCdUYWJzQ29udHJvbGxlcicsIHRhYnNDdHJsKVxuICAuZGlyZWN0aXZlKCd0YWJGb3VydGgnLCB0YWJGb3VydGgpXG4gIC5kaXJlY3RpdmUoJ3RhYkZvdXJ0aExlZnQnLCB0YWJGb3VydGhMZWZ0KVxuICAuZGlyZWN0aXZlKCd0YWJGb3VydGhNaWRkbGUnLCB0YWJGb3VydGhNaWRkbGUpXG4gIC5kaXJlY3RpdmUoJ3RhYkZvdXJ0aFJpZ2h0JywgdGFiRm91cnRoUmlnaHQpXG4gIDtcbiIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gdGFiRm91cnRoRGlyZWN0aXZlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0c2NvcGU6IHtcblx0XHRcdGRhdGE6ICc9Jyxcblx0XHRcdHByaXZhdGVEYXRhOiAnPSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3RhYjQvdGFiNERpcmVjdGl2ZS5odG1sJyxcblx0XHRjb250cm9sbGVyOiBDb250cm9sbGVyLFxuXHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdH07XG59XG5cbmZ1bmN0aW9uIENvbnRyb2xsZXIoJGxvZykge1xuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0JGxvZy5kZWJ1ZyhuZXcgRGF0ZSgpICsgJzogU3RhcnRpbmcgdGFiNCBkaXJlY3RpdmUgd2l0aCBkYXRhOicsIHZtLmRhdGEpO1xuXHR9XG5cblx0aW5pdCgpO1xufVxuXG5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxubW9kdWxlLmV4cG9ydHMgPSB0YWJGb3VydGhEaXJlY3RpdmU7XG4iLCIvKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGFuZ3VsYXI6IGZhbHNlLCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHRhYkZvdXJ0aE1pZGRsZUNvbnRyb2xsZXIoJGxvZykge1xuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0JGxvZy5kZWJ1ZyhuZXcgRGF0ZSgpICsgJzogU3RhcnRpbmcgdGFiNC1taWRkbGUgZGlyZWN0aXZlIHdpdGggZGF0YTonLCB2bS5kYXRhKTtcblx0fVxuXG5cdGluaXQoKTtcbn1cblxudGFiRm91cnRoTWlkZGxlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmZ1bmN0aW9uIHRhYkZvdXJ0aE1pZGRsZURpcmVjdGl2ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRkYXRhOiAnPScsXG5cdFx0XHRzdGF0ZTogJ0AnXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC90YWIxL21pZGRsZS5odG1sJyxcblx0XHRjb250cm9sbGVyOiB0YWJGb3VydGhNaWRkbGVDb250cm9sbGVyLFxuXHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGFiRm91cnRoTWlkZGxlRGlyZWN0aXZlO1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBDb250cm9sbGVyKCRsb2cpIHtcblx0dmFyIHZtID0gdGhpcztcblxuXHRmdW5jdGlvbiBpbml0KCkge1xuXHRcdCRsb2cuZGVidWcobmV3IERhdGUoKSArICc6IFN0YXJ0aW5nIHRhYjQtcmlnaHQgZGlyZWN0aXZlIHdpdGggZGF0YTonLCB2bS5kYXRhKTtcblx0fVxuXG5cdGluaXQoKTtcbn1cblxuQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmZ1bmN0aW9uIHRhYkZvdXJ0aFJpZ2h0RGlyZWN0aXZlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0c2NvcGU6IHtcblx0XHRcdGRhdGE6ICc9Jyxcblx0XHRcdHN0YXRlOiAnQCdcblx0XHR9LFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3RhYjEvcmlnaHQuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYkZvdXJ0aFJpZ2h0RGlyZWN0aXZlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgbW9kdWxlOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UgKi9cblxucmVxdWlyZSgnLi4vZGF0YVNlcnZpY2UnKTtcbnJlcXVpcmUoJy4uL3Byb21pc2VXYWl0ZXJDdHJsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGFic0NvbnRyb2xsZXI7XG5cblRhYnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckc3RhdGUnLCAnJG1vZGFsJywgJ2RhdGFTZXJ2aWNlJywgJ01vZGFsU2VydmljZSddO1xuXG5mdW5jdGlvbiBUYWJzQ29udHJvbGxlcigkc2NvcGUsICRzdGF0ZSwgJG1vZGFsLCBkYXRhU2VydmljZSwgTW9kYWxTZXJ2aWNlKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2bS5zdGF0ZSA9ICdUYWJzIFJvdXRlJztcblxuICAgIHZtLmdvID0gZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgICAgJHN0YXRlLmdvKHJvdXRlKTtcbiAgICB9O1xuXG4gICAgdm0udGFicyA9IFtcbiAgICAgIHsgaWQ6ICd0YWJzLnRhYjEnLCB0aXRsZTogJ1JvdXRlZCBUYWInLCBhY3RpdmU6IHRydWUsIGRpc2FibGVkOiBmYWxzZSwgc2VsZWN0OiBcInZtLmdvKCd0YWJzLnRhYjEnKVwiIH0sXG4gICAgICB7IGlkOiAndGFicy50YWIyJywgdGl0bGU6ICdSb3V0ZWQgVGFiIHcvIExheW91dHMnLCBhY3RpdmU6IGZhbHNlLCBkaXNhYmxlZDogZmFsc2UsIHNlbGVjdDogXCJ2bS5nbygndGFicy50YWIyJylcIiB9LFxuICAgICAgeyBpZDogJ3RhYnMudGFiMycsIHRpdGxlOiAnVG9nZ2xlZCBUYWInLCBhY3RpdmU6IGZhbHNlLCBkaXNhYmxlZDogdHJ1ZSwgc2VsZWN0OiBcInZtLmdvKCd0YWJzLnRhYjMnKVwiIH0sXG4gICAgICB7IGlkOiAndGFicy50YWI0JywgdGl0bGU6ICdOZXN0ZWQgRGlyZWN0aXZlJywgYWN0aXZlOiBmYWxzZSwgZGlzYWJsZWQ6IGZhbHNlLCBzZWxlY3Q6IFwidm0uZ28oJ3RhYnMudGFiNCcpXCIgfSxcbiAgICAgIHsgaWQ6ICd0YWJzLnRhYjUnLCB0aXRsZTogJ1JvdXRlZCBEaXJlY3RpdmUnLCBhY3RpdmU6IGZhbHNlLCBkaXNhYmxlZDogZmFsc2UsIHNlbGVjdDogXCJ2bS5nbygndGFicy50YWI1JylcIiB9LFxuICAgIF07XG5cbiAgICB2bS5zaG91bGRTaG93TmV4dCA9IHNob3VsZFNob3dOZXh0O1xuICAgIHZtLnNob3dOZXh0ID0gc2hvd05leHQ7XG4gICAgdm0uc2hvdWxkU2hvd1ByZXYgPSBzaG91bGRTaG93UHJldjtcbiAgICB2bS5zaG93UHJldiA9IHNob3dQcmV2O1xuXG4gICAgdm0uZGF0YSA9IGRhdGFTZXJ2aWNlLmRhdGE7XG4gICAgdm0ucHJpdmF0ZURhdGEgPSAnc2VjcmV0JztcblxuICAgIGFjdGl2YXRlKCk7XG5cbiAgICAvLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0VGFiQnlJZChpZCkge1xuICAgICAgICBmb3IodmFyIGk9MDsgaTx2bS50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHZtLnRhYnNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdm0udGFic1tpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3RpdmVUYWIoaWQpIHtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dm0udGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZtLnRhYnNbaV0uYWN0aXZlID0gdm0udGFic1tpXS5pZCA9PT0gaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROZXh0SWQoYXJyYXksIGN1cnJlbnRJZCkge1xuICAgICAgICBpZiAoIWFycmF5KSB7IHJldHVybjsgfVxuICAgICAgICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGN1cnJlbnRJZCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgYXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5W2luZGV4KzFdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJldmlvdXNJZChhcnJheSwgY3VycmVudElkKSB7XG4gICAgICAgIGlmICghYXJyYXkpIHsgcmV0dXJuOyB9XG4gICAgICAgIHZhciBpbmRleCA9IGFycmF5LmluZGV4T2YoY3VycmVudElkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5W2luZGV4LTFdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzQ3VycmVudEl0ZW0oKSB7XG4gICAgICAgIHJldHVybiB2bS5kYXRhLml0ZW0gJiYgdm0uZGF0YS5pdGVtLmlkICYmIHZtLmRhdGEua2V5cyAmJiB2bS5kYXRhLmtleXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3VsZFNob3dOZXh0KCkge1xuICAgICAgICBpZiAoaGFzQ3VycmVudEl0ZW0oKSkge1xuICAgICAgICAgICAgdmFyIG5leHRJZCA9IGdldE5leHRJZCh2bS5kYXRhLmtleXMsIHZtLmRhdGEuaXRlbS5pZCk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIG5leHRJZCAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3VsZFNob3dQcmV2KCkge1xuICAgICAgICBpZiAoaGFzQ3VycmVudEl0ZW0oKSkge1xuICAgICAgICAgICAgdmFyIHByZXZJZCA9IGdldFByZXZpb3VzSWQodm0uZGF0YS5rZXlzLCB2bS5kYXRhLml0ZW0uaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBwcmV2SWQgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TmV4dCgpIHtcbiAgICAgICAgdmFyIG5leHRJZCA9IGdldE5leHRJZCh2bS5kYXRhLmtleXMsIHZtLmRhdGEuaXRlbS5pZCk7XG4gICAgICAgIHZhciBwcm9taXNlID0gZGF0YVNlcnZpY2Uuc2VsZWN0KG5leHRJZCk7XG4gICAgICAgIHNob3dCb290c3RyYXBNb2RhbChwcm9taXNlLCBuZXh0SWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXR1cFRhYnMobmV4dElkLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1ByZXYoKSB7XG4gICAgICAgIHZhciBwcmV2SWQgPSBnZXRQcmV2aW91c0lkKHZtLmRhdGEua2V5cywgdm0uZGF0YS5pdGVtLmlkKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBkYXRhU2VydmljZS5zZWxlY3QocHJldklkKTtcbiAgICAgICAgc2hvd0Jvb3RzdHJhcE1vZGFsKHByb21pc2UsIHByZXZJZClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHNldHVwVGFicyhwcmV2SWQsIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cFRhYnMoaWQsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQucHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGdldFRhYkJ5SWQoJ3RhYnMudGFiMycpLmRpc2FibGVkID0gZGF0YS5pZCAmJiBkYXRhLmlkICE9PSAyO1xuICAgICAgICAgICAgdm0uZ28oJ3RhYnMudGFiMScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93Qm9vdHN0cmFwTW9kYWwocHJvbWlzZSwgaXRlbUlkKSB7XG4gICAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICAgICAgLy8gY3JlYXRlIG1vZGFsIGVudGl0eSBhbmQgcmVzb2x2ZSBjb250cm9sbGVyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC90ZW1wbGF0ZXMvcHJvbWlzZVdhaXRlci5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdwcm9taXNlV2FpdGVyJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgICAgIHNpemU6ICdzbScsXG4gICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nIGl0ZW0gJyArIGl0ZW1JZCArICcuLi4nXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIC8vIGNhbGxlZCB3aGVuIHdlIHJldHVybiBzdWNjZXNzZnVsbHlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB3ZSBkaXNtaXNzIGluc3RlYWQgb2Ygc2F5aW5nICdPSydcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICAgICAgLy8gd2l0aGluIHRoaXMgcGFnZSwgaWYgd2UgY2hhbmdlIHN0YXRlIHN1Y2Nlc3NmdWxseSwgd2UgbmVlZCB0byB1cGRhdGUgb3VyIGFjdGl2ZSB0YWJcbiAgICAgICAgJHNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKXtcbiAgICAgICAgICAgIHNldEFjdGl2ZVRhYih0b1N0YXRlLm5hbWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkYXRhU2VydmljZS5sb2FkKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gZGF0YVNlcnZpY2Uuc2VsZWN0KDEpO1xuICAgICAgICAgICAgc2hvd0Jvb3RzdHJhcE1vZGFsKHByb21pc2UsIDEpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHVwVGFicygxLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
