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

Controller.$inject = ['$log'];

module.exports = AlertPanelDirective;

},{}],4:[function(require,module,exports){
'use strict';

/* global angular: false, require: false */

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
app.controller('promiseWaiter', ['$scope', '$modalInstance', 'data', promiseWaiter]);
app.factory('dataService', ['$http', '$q', '$timeout', dataService]);

/*
app.controller('TabsController',
  ['$scope', '$state', '$modal', 'dataService', 'ModalService',
  tabsController]);
*/

app.directive('alertPanel', alertPanel);

require('./draggable/index');
require('./tabs/index');

},{"./alerts/alertPanelDirective":3,"./bootstrapper":5,"./dataService":7,"./draggable/index":12,"./promiseWaiterCtrl":14,"./router":15,"./tabs/index":17,"./tabs/tabsCtrl":21,"es5-sham":1,"es5-shim":2}],5:[function(require,module,exports){
'use strict';

module.exports = function($log) {
  $log.debug('runBlock begin...');


  $log.debug('runBlock end.');
};

},{}],6:[function(require,module,exports){
function Contact() {

}

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

module.exports = Contact;

},{}],7:[function(require,module,exports){
'use strict';

/* global angular: false, require: false, module: false */
var Contact = require('./contact');

module.exports = function($http, $q, $timeout) {
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
};

},{"./contact":6}],8:[function(require,module,exports){
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
/* global angular: false */

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
'use strict';

module.exports = function($scope, $modalInstance, data) {
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
    };

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
/* global angular: false */

var tabsCtrl = require('./tabsCtrl');
var tabFourth = require('./tabFourthDirective');
var tabFourthLeft = require('./TabFourthLeftDirective');
var tabFourthMiddle = require('./tabFourthMiddleDirective');
var tabFourthRight = require('./tabFourthRightDirective');

angular.module('app')
  .controller('TabsController',
    ['$scope', '$state', '$modal', 'dataService', 'ModalService', tabsCtrl])
  .directive('tabFourth', tabFourth)
  .directive('tabFourthLeft', tabFourthLeft)
  .directive('tabFourthMiddle', tabFourthMiddle)
  .directive('tabFourthRight', tabFourthRight)
  ;

},{"./TabFourthLeftDirective":16,"./tabFourthDirective":18,"./tabFourthMiddleDirective":19,"./tabFourthRightDirective":20,"./tabsCtrl":21}],18:[function(require,module,exports){
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
//dependencies = ['$scope', '$state', '$modal', 'dataService', 'ModalService'];
require('../dataService');
require('../promiseWaiterCtrl');

module.exports = function TabsController($scope, $state, $modal, dataService, ModalService) {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZXM1LXNoaW0vZXM1LXNoYW0ubWluLmpzIiwibm9kZV9tb2R1bGVzL2VzNS1zaGltL2VzNS1zaGltLm1pbi5qcyIsInNyYy9hbGVydHMvYWxlcnRQYW5lbERpcmVjdGl2ZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvYm9vdHN0cmFwcGVyLmpzIiwic3JjL2NvbnRhY3QuanMiLCJzcmMvZGF0YVNlcnZpY2UuanMiLCJzcmMvZHJhZ2dhYmxlL2RyYWdnYWJsZURpcmVjdGl2ZS5qcyIsInNyYy9kcmFnZ2FibGUvZHJhZ2dhYmxlTGlzdERpcmVjdGl2ZS5qcyIsInNyYy9kcmFnZ2FibGUvZHJhZ2dhYmxlTGlzdExpc3REaXJlY3RpdmUuanMiLCJzcmMvZHJhZ2dhYmxlL2Ryb3BwYWJsZURpcmVjdGl2ZS5qcyIsInNyYy9kcmFnZ2FibGUvaW5kZXguanMiLCJzcmMvZHJhZ2dhYmxlL2luZGV4RmlsdGVyLmpzIiwic3JjL3Byb21pc2VXYWl0ZXJDdHJsLmpzIiwic3JjL3JvdXRlci5qcyIsInNyYy90YWJzL1RhYkZvdXJ0aExlZnREaXJlY3RpdmUuanMiLCJzcmMvdGFicy9pbmRleC5qcyIsInNyYy90YWJzL3RhYkZvdXJ0aERpcmVjdGl2ZS5qcyIsInNyYy90YWJzL3RhYkZvdXJ0aE1pZGRsZURpcmVjdGl2ZS5qcyIsInNyYy90YWJzL3RhYkZvdXJ0aFJpZ2h0RGlyZWN0aXZlLmpzIiwic3JjL3RhYnMvdGFic0N0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbVxuICogQGxpY2Vuc2UgZXM1LXNoaW0gQ29weXJpZ2h0IDIwMDktMjAxNSBieSBjb250cmlidXRvcnMsIE1JVCBMaWNlbnNlXG4gKiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2Jsb2IvdjQuMS4xNS9MSUNFTlNFXG4gKi9cbihmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2lmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZSh0KX1lbHNlIGlmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIil7bW9kdWxlLmV4cG9ydHM9dCgpfWVsc2V7ZS5yZXR1cm5FeHBvcnRzPXQoKX19KSh0aGlzLGZ1bmN0aW9uKCl7dmFyIGU9RnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7dmFyIHQ9T2JqZWN0LnByb3RvdHlwZTt2YXIgcj1lLmJpbmQodC5oYXNPd25Qcm9wZXJ0eSk7dmFyIG49ZS5iaW5kKHQucHJvcGVydHlJc0VudW1lcmFibGUpO3ZhciBvPWUuYmluZCh0LnRvU3RyaW5nKTt2YXIgaTt2YXIgYzt2YXIgZjt2YXIgYTt2YXIgbD1yKHQsXCJfX2RlZmluZUdldHRlcl9fXCIpO2lmKGwpe2k9ZS5iaW5kKHQuX19kZWZpbmVHZXR0ZXJfXyk7Yz1lLmJpbmQodC5fX2RlZmluZVNldHRlcl9fKTtmPWUuYmluZCh0Ll9fbG9va3VwR2V0dGVyX18pO2E9ZS5iaW5kKHQuX19sb29rdXBTZXR0ZXJfXyl9aWYoIU9iamVjdC5nZXRQcm90b3R5cGVPZil7T2JqZWN0LmdldFByb3RvdHlwZU9mPWZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGUpe3ZhciByPWUuX19wcm90b19fO2lmKHJ8fHI9PT1udWxsKXtyZXR1cm4gcn1lbHNlIGlmKG8oZS5jb25zdHJ1Y3Rvcik9PT1cIltvYmplY3QgRnVuY3Rpb25dXCIpe3JldHVybiBlLmNvbnN0cnVjdG9yLnByb3RvdHlwZX1lbHNlIGlmKGUgaW5zdGFuY2VvZiBPYmplY3Qpe3JldHVybiB0fWVsc2V7cmV0dXJuIG51bGx9fX12YXIgdT1mdW5jdGlvbiBkb2VzR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yV29yayhlKXt0cnl7ZS5zZW50aW5lbD0wO3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsXCJzZW50aW5lbFwiKS52YWx1ZT09PTB9Y2F0Y2godCl7cmV0dXJuIGZhbHNlfX07aWYoT2JqZWN0LmRlZmluZVByb3BlcnR5KXt2YXIgcD11KHt9KTt2YXIgcz10eXBlb2YgZG9jdW1lbnQ9PT1cInVuZGVmaW5lZFwifHx1KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO2lmKCFzfHwhcCl7dmFyIGI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcn19aWYoIU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3J8fGIpe3ZhciBPPVwiT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciBjYWxsZWQgb24gYSBub24tb2JqZWN0OiBcIjtPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yPWZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLG8pe2lmKHR5cGVvZiBlIT09XCJvYmplY3RcIiYmdHlwZW9mIGUhPT1cImZ1bmN0aW9uXCJ8fGU9PT1udWxsKXt0aHJvdyBuZXcgVHlwZUVycm9yKE8rZSl9aWYoYil7dHJ5e3JldHVybiBiLmNhbGwoT2JqZWN0LGUsbyl9Y2F0Y2goaSl7fX12YXIgYztpZighcihlLG8pKXtyZXR1cm4gY31jPXtlbnVtZXJhYmxlOm4oZSxvKSxjb25maWd1cmFibGU6dHJ1ZX07aWYobCl7dmFyIHU9ZS5fX3Byb3RvX187dmFyIHA9ZSE9PXQ7aWYocCl7ZS5fX3Byb3RvX189dH12YXIgcz1mKGUsbyk7dmFyIHk9YShlLG8pO2lmKHApe2UuX19wcm90b19fPXV9aWYoc3x8eSl7aWYocyl7Yy5nZXQ9c31pZih5KXtjLnNldD15fXJldHVybiBjfX1jLnZhbHVlPWVbb107Yy53cml0YWJsZT10cnVlO3JldHVybiBjfX1pZighT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpe09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzPWZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoZSl7cmV0dXJuIE9iamVjdC5rZXlzKGUpfX1pZighT2JqZWN0LmNyZWF0ZSl7dmFyIHk7dmFyIGQ9ISh7X19wcm90b19fOm51bGx9aW5zdGFuY2VvZiBPYmplY3QpO3ZhciBqPWZ1bmN0aW9uIHNob3VsZFVzZUFjdGl2ZVgoKXtpZighZG9jdW1lbnQuZG9tYWluKXtyZXR1cm4gZmFsc2V9dHJ5e3JldHVybiEhbmV3IEFjdGl2ZVhPYmplY3QoXCJodG1sZmlsZVwiKX1jYXRjaChlKXtyZXR1cm4gZmFsc2V9fTt2YXIgdj1mdW5jdGlvbiBnZXRFbXB0eVZpYUFjdGl2ZVgoKXt2YXIgZTt2YXIgdDt0PW5ldyBBY3RpdmVYT2JqZWN0KFwiaHRtbGZpbGVcIik7dC53cml0ZShcIjxzY3JpcHQ+PC9zY3JpcHQ+XCIpO3QuY2xvc2UoKTtlPXQucGFyZW50V2luZG93Lk9iamVjdC5wcm90b3R5cGU7dD1udWxsO3JldHVybiBlfTt2YXIgXz1mdW5jdGlvbiBnZXRFbXB0eVZpYUlGcmFtZSgpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7dmFyIHQ9ZG9jdW1lbnQuYm9keXx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O3ZhciByO2Uuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt0LmFwcGVuZENoaWxkKGUpO2Uuc3JjPVwiamF2YXNjcmlwdDpcIjtyPWUuY29udGVudFdpbmRvdy5PYmplY3QucHJvdG90eXBlO3QucmVtb3ZlQ2hpbGQoZSk7ZT1udWxsO3JldHVybiByfTtpZihkfHx0eXBlb2YgZG9jdW1lbnQ9PT1cInVuZGVmaW5lZFwiKXt5PWZ1bmN0aW9uKCl7cmV0dXJue19fcHJvdG9fXzpudWxsfX19ZWxzZXt5PWZ1bmN0aW9uKCl7dmFyIGU9aigpP3YoKTpfKCk7ZGVsZXRlIGUuY29uc3RydWN0b3I7ZGVsZXRlIGUuaGFzT3duUHJvcGVydHk7ZGVsZXRlIGUucHJvcGVydHlJc0VudW1lcmFibGU7ZGVsZXRlIGUuaXNQcm90b3R5cGVPZjtkZWxldGUgZS50b0xvY2FsZVN0cmluZztkZWxldGUgZS50b1N0cmluZztkZWxldGUgZS52YWx1ZU9mO3ZhciB0PWZ1bmN0aW9uIEVtcHR5KCl7fTt0LnByb3RvdHlwZT1lO3k9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHR9O3JldHVybiBuZXcgdH19T2JqZWN0LmNyZWF0ZT1mdW5jdGlvbiBjcmVhdGUoZSx0KXt2YXIgcjt2YXIgbj1mdW5jdGlvbiBUeXBlKCl7fTtpZihlPT09bnVsbCl7cj15KCl9ZWxzZXtpZih0eXBlb2YgZSE9PVwib2JqZWN0XCImJnR5cGVvZiBlIT09XCJmdW5jdGlvblwiKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IHByb3RvdHlwZSBtYXkgb25seSBiZSBhbiBPYmplY3Qgb3IgbnVsbFwiKX1uLnByb3RvdHlwZT1lO3I9bmV3IG47ci5fX3Byb3RvX189ZX1pZih0IT09dm9pZCAwKXtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhyLHQpfXJldHVybiByfX12YXIgdz1mdW5jdGlvbiBkb2VzRGVmaW5lUHJvcGVydHlXb3JrKGUpe3RyeXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcInNlbnRpbmVsXCIse30pO3JldHVyblwic2VudGluZWxcImluIGV9Y2F0Y2godCl7cmV0dXJuIGZhbHNlfX07aWYoT2JqZWN0LmRlZmluZVByb3BlcnR5KXt2YXIgbT13KHt9KTt2YXIgUD10eXBlb2YgZG9jdW1lbnQ9PT1cInVuZGVmaW5lZFwifHx3KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO2lmKCFtfHwhUCl7dmFyIEU9T2JqZWN0LmRlZmluZVByb3BlcnR5LGg9T2JqZWN0LmRlZmluZVByb3BlcnRpZXN9fWlmKCFPYmplY3QuZGVmaW5lUHJvcGVydHl8fEUpe3ZhciBnPVwiUHJvcGVydHkgZGVzY3JpcHRpb24gbXVzdCBiZSBhbiBvYmplY3Q6IFwiO3ZhciB6PVwiT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxlZCBvbiBub24tb2JqZWN0OiBcIjt2YXIgVD1cImdldHRlcnMgJiBzZXR0ZXJzIGNhbiBub3QgYmUgZGVmaW5lZCBvbiB0aGlzIGphdmFzY3JpcHQgZW5naW5lXCI7T2JqZWN0LmRlZmluZVByb3BlcnR5PWZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGUscixuKXtpZih0eXBlb2YgZSE9PVwib2JqZWN0XCImJnR5cGVvZiBlIT09XCJmdW5jdGlvblwifHxlPT09bnVsbCl7dGhyb3cgbmV3IFR5cGVFcnJvcih6K2UpfWlmKHR5cGVvZiBuIT09XCJvYmplY3RcIiYmdHlwZW9mIG4hPT1cImZ1bmN0aW9uXCJ8fG49PT1udWxsKXt0aHJvdyBuZXcgVHlwZUVycm9yKGcrbil9aWYoRSl7dHJ5e3JldHVybiBFLmNhbGwoT2JqZWN0LGUscixuKX1jYXRjaChvKXt9fWlmKFwidmFsdWVcImluIG4pe2lmKGwmJihmKGUscil8fGEoZSxyKSkpe3ZhciB1PWUuX19wcm90b19fO2UuX19wcm90b19fPXQ7ZGVsZXRlIGVbcl07ZVtyXT1uLnZhbHVlO2UuX19wcm90b19fPXV9ZWxzZXtlW3JdPW4udmFsdWV9fWVsc2V7aWYoIWwmJihcImdldFwiaW4gbnx8XCJzZXRcImluIG4pKXt0aHJvdyBuZXcgVHlwZUVycm9yKFQpfWlmKFwiZ2V0XCJpbiBuKXtpKGUscixuLmdldCl9aWYoXCJzZXRcImluIG4pe2MoZSxyLG4uc2V0KX19cmV0dXJuIGV9fWlmKCFPYmplY3QuZGVmaW5lUHJvcGVydGllc3x8aCl7T2JqZWN0LmRlZmluZVByb3BlcnRpZXM9ZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhlLHQpe2lmKGgpe3RyeXtyZXR1cm4gaC5jYWxsKE9iamVjdCxlLHQpfWNhdGNoKHIpe319T2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihyKXtpZihyIT09XCJfX3Byb3RvX19cIil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix0W3JdKX19KTtyZXR1cm4gZX19aWYoIU9iamVjdC5zZWFsKXtPYmplY3Quc2VhbD1mdW5jdGlvbiBzZWFsKGUpe2lmKE9iamVjdChlKSE9PWUpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Quc2VhbCBjYW4gb25seSBiZSBjYWxsZWQgb24gT2JqZWN0cy5cIil9cmV0dXJuIGV9fWlmKCFPYmplY3QuZnJlZXplKXtPYmplY3QuZnJlZXplPWZ1bmN0aW9uIGZyZWV6ZShlKXtpZihPYmplY3QoZSkhPT1lKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmZyZWV6ZSBjYW4gb25seSBiZSBjYWxsZWQgb24gT2JqZWN0cy5cIil9cmV0dXJuIGV9fXRyeXtPYmplY3QuZnJlZXplKGZ1bmN0aW9uKCl7fSl9Y2F0Y2goeCl7T2JqZWN0LmZyZWV6ZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gZnJlZXplKHQpe2lmKHR5cGVvZiB0PT09XCJmdW5jdGlvblwiKXtyZXR1cm4gdH1lbHNle3JldHVybiBlKHQpfX19KE9iamVjdC5mcmVlemUpfWlmKCFPYmplY3QucHJldmVudEV4dGVuc2lvbnMpe09iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucz1mdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhlKXtpZihPYmplY3QoZSkhPT1lKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBPYmplY3RzLlwiKX1yZXR1cm4gZX19aWYoIU9iamVjdC5pc1NlYWxlZCl7T2JqZWN0LmlzU2VhbGVkPWZ1bmN0aW9uIGlzU2VhbGVkKGUpe2lmKE9iamVjdChlKSE9PWUpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QuaXNTZWFsZWQgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIE9iamVjdHMuXCIpfXJldHVybiBmYWxzZX19aWYoIU9iamVjdC5pc0Zyb3plbil7T2JqZWN0LmlzRnJvemVuPWZ1bmN0aW9uIGlzRnJvemVuKGUpe2lmKE9iamVjdChlKSE9PWUpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QuaXNGcm96ZW4gY2FuIG9ubHkgYmUgY2FsbGVkIG9uIE9iamVjdHMuXCIpfXJldHVybiBmYWxzZX19aWYoIU9iamVjdC5pc0V4dGVuc2libGUpe09iamVjdC5pc0V4dGVuc2libGU9ZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGUpe2lmKE9iamVjdChlKSE9PWUpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QuaXNFeHRlbnNpYmxlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBPYmplY3RzLlwiKX12YXIgdD1cIlwiO3doaWxlKHIoZSx0KSl7dCs9XCI/XCJ9ZVt0XT10cnVlO3ZhciBuPXIoZSx0KTtkZWxldGUgZVt0XTtyZXR1cm4gbn19fSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lczUtc2hhbS5tYXBcbiIsIi8qIVxuICogaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG4gKiBAbGljZW5zZSBlczUtc2hpbSBDb3B5cmlnaHQgMjAwOS0yMDE1IGJ5IGNvbnRyaWJ1dG9ycywgTUlUIExpY2Vuc2VcbiAqIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vYmxvYi92NC4xLjE1L0xJQ0VOU0VcbiAqL1xuKGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7aWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKHQpfWVsc2UgaWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiKXttb2R1bGUuZXhwb3J0cz10KCl9ZWxzZXtlLnJldHVybkV4cG9ydHM9dCgpfX0pKHRoaXMsZnVuY3Rpb24oKXt2YXIgZT1BcnJheTt2YXIgdD1lLnByb3RvdHlwZTt2YXIgcj1PYmplY3Q7dmFyIG49ci5wcm90b3R5cGU7dmFyIGk9RnVuY3Rpb24ucHJvdG90eXBlO3ZhciBhPVN0cmluZzt2YXIgbz1hLnByb3RvdHlwZTt2YXIgbD1OdW1iZXI7dmFyIHU9bC5wcm90b3R5cGU7dmFyIGY9dC5zbGljZTt2YXIgcz10LnNwbGljZTt2YXIgYz10LnB1c2g7dmFyIHY9dC51bnNoaWZ0O3ZhciBwPXQuY29uY2F0O3ZhciBoPWkuY2FsbDt2YXIgZz1NYXRoLm1heDt2YXIgeT1NYXRoLm1pbjt2YXIgZD1uLnRvU3RyaW5nO3ZhciB3PXR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJnR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWc9PT1cInN5bWJvbFwiO3ZhciBtO3ZhciBiPUZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyxUPWZ1bmN0aW9uIHRyeUZ1bmN0aW9uT2JqZWN0KGUpe3RyeXtiLmNhbGwoZSk7cmV0dXJuIHRydWV9Y2F0Y2godCl7cmV0dXJuIGZhbHNlfX0seD1cIltvYmplY3QgRnVuY3Rpb25dXCIsTz1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI7bT1mdW5jdGlvbiBpc0NhbGxhYmxlKGUpe2lmKHR5cGVvZiBlIT09XCJmdW5jdGlvblwiKXtyZXR1cm4gZmFsc2V9aWYodyl7cmV0dXJuIFQoZSl9dmFyIHQ9ZC5jYWxsKGUpO3JldHVybiB0PT09eHx8dD09PU99O3ZhciBTO3ZhciBqPVJlZ0V4cC5wcm90b3R5cGUuZXhlYyxFPWZ1bmN0aW9uIHRyeVJlZ2V4RXhlYyhlKXt0cnl7ai5jYWxsKGUpO3JldHVybiB0cnVlfWNhdGNoKHQpe3JldHVybiBmYWxzZX19LEk9XCJbb2JqZWN0IFJlZ0V4cF1cIjtTPWZ1bmN0aW9uIGlzUmVnZXgoZSl7aWYodHlwZW9mIGUhPT1cIm9iamVjdFwiKXtyZXR1cm4gZmFsc2V9cmV0dXJuIHc/RShlKTpkLmNhbGwoZSk9PT1JfTt2YXIgRDt2YXIgTT1TdHJpbmcucHJvdG90eXBlLnZhbHVlT2YsTj1mdW5jdGlvbiB0cnlTdHJpbmdPYmplY3QoZSl7dHJ5e00uY2FsbChlKTtyZXR1cm4gdHJ1ZX1jYXRjaCh0KXtyZXR1cm4gZmFsc2V9fSxrPVwiW29iamVjdCBTdHJpbmddXCI7RD1mdW5jdGlvbiBpc1N0cmluZyhlKXtpZih0eXBlb2YgZT09PVwic3RyaW5nXCIpe3JldHVybiB0cnVlfWlmKHR5cGVvZiBlIT09XCJvYmplY3RcIil7cmV0dXJuIGZhbHNlfXJldHVybiB3P04oZSk6ZC5jYWxsKGUpPT09a307dmFyIFU9ZnVuY3Rpb24oZSl7dmFyIHQ9ci5kZWZpbmVQcm9wZXJ0eSYmZnVuY3Rpb24oKXt0cnl7dmFyIGU9e307ci5kZWZpbmVQcm9wZXJ0eShlLFwieFwiLHtlbnVtZXJhYmxlOmZhbHNlLHZhbHVlOmV9KTtmb3IodmFyIHQgaW4gZSl7cmV0dXJuIGZhbHNlfXJldHVybiBlLng9PT1lfWNhdGNoKG4pe3JldHVybiBmYWxzZX19KCk7dmFyIG47aWYodCl7bj1mdW5jdGlvbihlLHQsbixpKXtpZighaSYmdCBpbiBlKXtyZXR1cm59ci5kZWZpbmVQcm9wZXJ0eShlLHQse2NvbmZpZ3VyYWJsZTp0cnVlLGVudW1lcmFibGU6ZmFsc2Usd3JpdGFibGU6dHJ1ZSx2YWx1ZTpufSl9fWVsc2V7bj1mdW5jdGlvbihlLHQscixuKXtpZighbiYmdCBpbiBlKXtyZXR1cm59ZVt0XT1yfX1yZXR1cm4gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0LHIsaSl7Zm9yKHZhciBhIGluIHIpe2lmKGUuY2FsbChyLGEpKXtuKHQsYSxyW2FdLGkpfX19fShuLmhhc093blByb3BlcnR5KTt2YXIgRj1mdW5jdGlvbiBpc1ByaW1pdGl2ZShlKXt2YXIgdD10eXBlb2YgZTtyZXR1cm4gZT09PW51bGx8fHQhPT1cIm9iamVjdFwiJiZ0IT09XCJmdW5jdGlvblwifTt2YXIgUj1sLmlzTmFOfHxmdW5jdGlvbihlKXtyZXR1cm4gZSE9PWV9O3ZhciBBPXtUb0ludGVnZXI6ZnVuY3Rpb24gVG9JbnRlZ2VyKGUpe3ZhciB0PStlO2lmKFIodCkpe3Q9MH1lbHNlIGlmKHQhPT0wJiZ0IT09MS8wJiZ0IT09LSgxLzApKXt0PSh0PjB8fC0xKSpNYXRoLmZsb29yKE1hdGguYWJzKHQpKX1yZXR1cm4gdH0sVG9QcmltaXRpdmU6ZnVuY3Rpb24gVG9QcmltaXRpdmUoZSl7dmFyIHQscixuO2lmKEYoZSkpe3JldHVybiBlfXI9ZS52YWx1ZU9mO2lmKG0ocikpe3Q9ci5jYWxsKGUpO2lmKEYodCkpe3JldHVybiB0fX1uPWUudG9TdHJpbmc7aWYobShuKSl7dD1uLmNhbGwoZSk7aWYoRih0KSl7cmV0dXJuIHR9fXRocm93IG5ldyBUeXBlRXJyb3J9LFRvT2JqZWN0OmZ1bmN0aW9uKGUpe2lmKGU9PW51bGwpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJjYW4ndCBjb252ZXJ0IFwiK2UrXCIgdG8gb2JqZWN0XCIpfXJldHVybiByKGUpfSxUb1VpbnQzMjpmdW5jdGlvbiBUb1VpbnQzMihlKXtyZXR1cm4gZT4+PjB9fTt2YXIgJD1mdW5jdGlvbiBFbXB0eSgpe307VShpLHtiaW5kOmZ1bmN0aW9uIGJpbmQoZSl7dmFyIHQ9dGhpcztpZighbSh0KSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgXCIrdCl9dmFyIG49Zi5jYWxsKGFyZ3VtZW50cywxKTt2YXIgaTt2YXIgYT1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBpKXt2YXIgYT10LmFwcGx5KHRoaXMscC5jYWxsKG4sZi5jYWxsKGFyZ3VtZW50cykpKTtpZihyKGEpPT09YSl7cmV0dXJuIGF9cmV0dXJuIHRoaXN9ZWxzZXtyZXR1cm4gdC5hcHBseShlLHAuY2FsbChuLGYuY2FsbChhcmd1bWVudHMpKSl9fTt2YXIgbz1nKDAsdC5sZW5ndGgtbi5sZW5ndGgpO3ZhciBsPVtdO2Zvcih2YXIgdT0wO3U8bzt1Kyspe2MuY2FsbChsLFwiJFwiK3UpfWk9RnVuY3Rpb24oXCJiaW5kZXJcIixcInJldHVybiBmdW5jdGlvbiAoXCIrbC5qb2luKFwiLFwiKStcIil7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVwiKShhKTtpZih0LnByb3RvdHlwZSl7JC5wcm90b3R5cGU9dC5wcm90b3R5cGU7aS5wcm90b3R5cGU9bmV3ICQ7JC5wcm90b3R5cGU9bnVsbH1yZXR1cm4gaX19KTt2YXIgQz1oLmJpbmQobi5oYXNPd25Qcm9wZXJ0eSk7dmFyIFA9aC5iaW5kKG4udG9TdHJpbmcpO3ZhciBaPWguYmluZChvLnNsaWNlKTt2YXIgSj1oLmJpbmQoby5zcGxpdCk7dmFyIHo9ZS5pc0FycmF5fHxmdW5jdGlvbiBpc0FycmF5KGUpe3JldHVybiBQKGUpPT09XCJbb2JqZWN0IEFycmF5XVwifTt2YXIgQj1bXS51bnNoaWZ0KDApIT09MTtVKHQse3Vuc2hpZnQ6ZnVuY3Rpb24oKXt2LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdGhpcy5sZW5ndGh9fSxCKTtVKGUse2lzQXJyYXk6en0pO3ZhciBHPXIoXCJhXCIpO3ZhciBIPUdbMF0hPT1cImFcInx8ISgwIGluIEcpO3ZhciBMPWZ1bmN0aW9uIHByb3Blcmx5Qm94ZWQoZSl7dmFyIHQ9dHJ1ZTt2YXIgcj10cnVlO2lmKGUpe2UuY2FsbChcImZvb1wiLGZ1bmN0aW9uKGUscixuKXtpZih0eXBlb2YgbiE9PVwib2JqZWN0XCIpe3Q9ZmFsc2V9fSk7ZS5jYWxsKFsxXSxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3I9dHlwZW9mIHRoaXM9PT1cInN0cmluZ1wifSxcInhcIil9cmV0dXJuISFlJiZ0JiZyfTtVKHQse2ZvckVhY2g6ZnVuY3Rpb24gZm9yRWFjaChlKXt2YXIgdD1BLlRvT2JqZWN0KHRoaXMpO3ZhciByPUgmJkQodGhpcyk/Sih0aGlzLFwiXCIpOnQ7dmFyIG49LTE7dmFyIGk9QS5Ub1VpbnQzMihyLmxlbmd0aCk7dmFyIGE7aWYoYXJndW1lbnRzLmxlbmd0aD4xKXthPWFyZ3VtZW50c1sxXX1pZighbShlKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5mb3JFYWNoIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKX13aGlsZSgrK248aSl7aWYobiBpbiByKXtpZih0eXBlb2YgYT09PVwidW5kZWZpbmVkXCIpe2UocltuXSxuLHQpfWVsc2V7ZS5jYWxsKGEscltuXSxuLHQpfX19fX0sIUwodC5mb3JFYWNoKSk7VSh0LHttYXA6ZnVuY3Rpb24gbWFwKHQpe3ZhciByPUEuVG9PYmplY3QodGhpcyk7dmFyIG49SCYmRCh0aGlzKT9KKHRoaXMsXCJcIik6cjt2YXIgaT1BLlRvVWludDMyKG4ubGVuZ3RoKTt2YXIgYT1lKGkpO3ZhciBvO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7bz1hcmd1bWVudHNbMV19aWYoIW0odCkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5wcm90b3R5cGUubWFwIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKX1mb3IodmFyIGw9MDtsPGk7bCsrKXtpZihsIGluIG4pe2lmKHR5cGVvZiBvPT09XCJ1bmRlZmluZWRcIil7YVtsXT10KG5bbF0sbCxyKX1lbHNle2FbbF09dC5jYWxsKG8sbltsXSxsLHIpfX19cmV0dXJuIGF9fSwhTCh0Lm1hcCkpO1UodCx7ZmlsdGVyOmZ1bmN0aW9uIGZpbHRlcihlKXt2YXIgdD1BLlRvT2JqZWN0KHRoaXMpO3ZhciByPUgmJkQodGhpcyk/Sih0aGlzLFwiXCIpOnQ7dmFyIG49QS5Ub1VpbnQzMihyLmxlbmd0aCk7dmFyIGk9W107dmFyIGE7dmFyIG87aWYoYXJndW1lbnRzLmxlbmd0aD4xKXtvPWFyZ3VtZW50c1sxXX1pZighbShlKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5maWx0ZXIgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpfWZvcih2YXIgbD0wO2w8bjtsKyspe2lmKGwgaW4gcil7YT1yW2xdO2lmKHR5cGVvZiBvPT09XCJ1bmRlZmluZWRcIj9lKGEsbCx0KTplLmNhbGwobyxhLGwsdCkpe2MuY2FsbChpLGEpfX19cmV0dXJuIGl9fSwhTCh0LmZpbHRlcikpO1UodCx7ZXZlcnk6ZnVuY3Rpb24gZXZlcnkoZSl7dmFyIHQ9QS5Ub09iamVjdCh0aGlzKTt2YXIgcj1IJiZEKHRoaXMpP0oodGhpcyxcIlwiKTp0O3ZhciBuPUEuVG9VaW50MzIoci5sZW5ndGgpO3ZhciBpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7aT1hcmd1bWVudHNbMV19aWYoIW0oZSkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5wcm90b3R5cGUuZXZlcnkgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpfWZvcih2YXIgYT0wO2E8bjthKyspe2lmKGEgaW4gciYmISh0eXBlb2YgaT09PVwidW5kZWZpbmVkXCI/ZShyW2FdLGEsdCk6ZS5jYWxsKGksclthXSxhLHQpKSl7cmV0dXJuIGZhbHNlfX1yZXR1cm4gdHJ1ZX19LCFMKHQuZXZlcnkpKTtVKHQse3NvbWU6ZnVuY3Rpb24gc29tZShlKXt2YXIgdD1BLlRvT2JqZWN0KHRoaXMpO3ZhciByPUgmJkQodGhpcyk/Sih0aGlzLFwiXCIpOnQ7dmFyIG49QS5Ub1VpbnQzMihyLmxlbmd0aCk7dmFyIGk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKXtpPWFyZ3VtZW50c1sxXX1pZighbShlKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5zb21lIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKX1mb3IodmFyIGE9MDthPG47YSsrKXtpZihhIGluIHImJih0eXBlb2YgaT09PVwidW5kZWZpbmVkXCI/ZShyW2FdLGEsdCk6ZS5jYWxsKGksclthXSxhLHQpKSl7cmV0dXJuIHRydWV9fXJldHVybiBmYWxzZX19LCFMKHQuc29tZSkpO3ZhciBYPWZhbHNlO2lmKHQucmVkdWNlKXtYPXR5cGVvZiB0LnJlZHVjZS5jYWxsKFwiZXM1XCIsZnVuY3Rpb24oZSx0LHIsbil7cmV0dXJuIG59KT09PVwib2JqZWN0XCJ9VSh0LHtyZWR1Y2U6ZnVuY3Rpb24gcmVkdWNlKGUpe3ZhciB0PUEuVG9PYmplY3QodGhpcyk7dmFyIHI9SCYmRCh0aGlzKT9KKHRoaXMsXCJcIik6dDt2YXIgbj1BLlRvVWludDMyKHIubGVuZ3RoKTtpZighbShlKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5yZWR1Y2UgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpfWlmKG49PT0wJiZhcmd1bWVudHMubGVuZ3RoPT09MSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcInJlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWVcIil9dmFyIGk9MDt2YXIgYTtpZihhcmd1bWVudHMubGVuZ3RoPj0yKXthPWFyZ3VtZW50c1sxXX1lbHNle2Rve2lmKGkgaW4gcil7YT1yW2krK107YnJlYWt9aWYoKytpPj1uKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwicmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKX19d2hpbGUodHJ1ZSl9Zm9yKDtpPG47aSsrKXtpZihpIGluIHIpe2E9ZShhLHJbaV0saSx0KX19cmV0dXJuIGF9fSwhWCk7dmFyIFk9ZmFsc2U7aWYodC5yZWR1Y2VSaWdodCl7WT10eXBlb2YgdC5yZWR1Y2VSaWdodC5jYWxsKFwiZXM1XCIsZnVuY3Rpb24oZSx0LHIsbil7cmV0dXJuIG59KT09PVwib2JqZWN0XCJ9VSh0LHtyZWR1Y2VSaWdodDpmdW5jdGlvbiByZWR1Y2VSaWdodChlKXt2YXIgdD1BLlRvT2JqZWN0KHRoaXMpO3ZhciByPUgmJkQodGhpcyk/Sih0aGlzLFwiXCIpOnQ7dmFyIG49QS5Ub1VpbnQzMihyLmxlbmd0aCk7aWYoIW0oZSkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHQgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpfWlmKG49PT0wJiZhcmd1bWVudHMubGVuZ3RoPT09MSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcInJlZHVjZVJpZ2h0IG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKX12YXIgaTt2YXIgYT1uLTE7aWYoYXJndW1lbnRzLmxlbmd0aD49Mil7aT1hcmd1bWVudHNbMV19ZWxzZXtkb3tpZihhIGluIHIpe2k9clthLS1dO2JyZWFrfWlmKC0tYTwwKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwicmVkdWNlUmlnaHQgb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpfX13aGlsZSh0cnVlKX1pZihhPDApe3JldHVybiBpfWRve2lmKGEgaW4gcil7aT1lKGksclthXSxhLHQpfX13aGlsZShhLS0pO3JldHVybiBpfX0sIVkpO3ZhciBxPXQuaW5kZXhPZiYmWzAsMV0uaW5kZXhPZigxLDIpIT09LTE7VSh0LHtpbmRleE9mOmZ1bmN0aW9uIGluZGV4T2YoZSl7dmFyIHQ9SCYmRCh0aGlzKT9KKHRoaXMsXCJcIik6QS5Ub09iamVjdCh0aGlzKTt2YXIgcj1BLlRvVWludDMyKHQubGVuZ3RoKTtpZihyPT09MCl7cmV0dXJuLTF9dmFyIG49MDtpZihhcmd1bWVudHMubGVuZ3RoPjEpe249QS5Ub0ludGVnZXIoYXJndW1lbnRzWzFdKX1uPW4+PTA/bjpnKDAscituKTtmb3IoO248cjtuKyspe2lmKG4gaW4gdCYmdFtuXT09PWUpe3JldHVybiBufX1yZXR1cm4tMX19LHEpO3ZhciBLPXQubGFzdEluZGV4T2YmJlswLDFdLmxhc3RJbmRleE9mKDAsLTMpIT09LTE7VSh0LHtsYXN0SW5kZXhPZjpmdW5jdGlvbiBsYXN0SW5kZXhPZihlKXt2YXIgdD1IJiZEKHRoaXMpP0oodGhpcyxcIlwiKTpBLlRvT2JqZWN0KHRoaXMpO3ZhciByPUEuVG9VaW50MzIodC5sZW5ndGgpO2lmKHI9PT0wKXtyZXR1cm4tMX12YXIgbj1yLTE7aWYoYXJndW1lbnRzLmxlbmd0aD4xKXtuPXkobixBLlRvSW50ZWdlcihhcmd1bWVudHNbMV0pKX1uPW4+PTA/bjpyLU1hdGguYWJzKG4pO2Zvcig7bj49MDtuLS0pe2lmKG4gaW4gdCYmZT09PXRbbl0pe3JldHVybiBufX1yZXR1cm4tMX19LEspO3ZhciBRPWZ1bmN0aW9uKCl7dmFyIGU9WzEsMl07dmFyIHQ9ZS5zcGxpY2UoKTtyZXR1cm4gZS5sZW5ndGg9PT0yJiZ6KHQpJiZ0Lmxlbmd0aD09PTB9KCk7VSh0LHtzcGxpY2U6ZnVuY3Rpb24gc3BsaWNlKGUsdCl7aWYoYXJndW1lbnRzLmxlbmd0aD09PTApe3JldHVybltdfWVsc2V7cmV0dXJuIHMuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19LCFRKTt2YXIgVj1mdW5jdGlvbigpe3ZhciBlPXt9O3Quc3BsaWNlLmNhbGwoZSwwLDAsMSk7cmV0dXJuIGUubGVuZ3RoPT09MX0oKTtVKHQse3NwbGljZTpmdW5jdGlvbiBzcGxpY2UoZSx0KXtpZihhcmd1bWVudHMubGVuZ3RoPT09MCl7cmV0dXJuW119dmFyIHI9YXJndW1lbnRzO3RoaXMubGVuZ3RoPWcoQS5Ub0ludGVnZXIodGhpcy5sZW5ndGgpLDApO2lmKGFyZ3VtZW50cy5sZW5ndGg+MCYmdHlwZW9mIHQhPT1cIm51bWJlclwiKXtyPWYuY2FsbChhcmd1bWVudHMpO2lmKHIubGVuZ3RoPDIpe2MuY2FsbChyLHRoaXMubGVuZ3RoLWUpfWVsc2V7clsxXT1BLlRvSW50ZWdlcih0KX19cmV0dXJuIHMuYXBwbHkodGhpcyxyKX19LCFWKTt2YXIgVz1mdW5jdGlvbigpe3ZhciB0PW5ldyBlKDFlNSk7dFs4XT1cInhcIjt0LnNwbGljZSgxLDEpO3JldHVybiB0LmluZGV4T2YoXCJ4XCIpPT09N30oKTt2YXIgXz1mdW5jdGlvbigpe3ZhciBlPTI1Njt2YXIgdD1bXTt0W2VdPVwiYVwiO3Quc3BsaWNlKGUrMSwwLFwiYlwiKTtyZXR1cm4gdFtlXT09PVwiYVwifSgpO1UodCx7c3BsaWNlOmZ1bmN0aW9uIHNwbGljZShlLHQpe3ZhciByPUEuVG9PYmplY3QodGhpcyk7dmFyIG49W107dmFyIGk9QS5Ub1VpbnQzMihyLmxlbmd0aCk7dmFyIG89QS5Ub0ludGVnZXIoZSk7dmFyIGw9bzwwP2coaStvLDApOnkobyxpKTt2YXIgdT15KGcoQS5Ub0ludGVnZXIodCksMCksaS1sKTt2YXIgcz0wO3ZhciBjO3doaWxlKHM8dSl7Yz1hKGwrcyk7aWYoQyhyLGMpKXtuW3NdPXJbY119cys9MX12YXIgdj1mLmNhbGwoYXJndW1lbnRzLDIpO3ZhciBwPXYubGVuZ3RoO3ZhciBoO2lmKHA8dSl7cz1sO3doaWxlKHM8aS11KXtjPWEocyt1KTtoPWEocytwKTtpZihDKHIsYykpe3JbaF09cltjXX1lbHNle2RlbGV0ZSByW2hdfXMrPTF9cz1pO3doaWxlKHM+aS11K3Ape2RlbGV0ZSByW3MtMV07cy09MX19ZWxzZSBpZihwPnUpe3M9aS11O3doaWxlKHM+bCl7Yz1hKHMrdS0xKTtoPWEocytwLTEpO2lmKEMocixjKSl7cltoXT1yW2NdfWVsc2V7ZGVsZXRlIHJbaF19cy09MX19cz1sO2Zvcih2YXIgZD0wO2Q8di5sZW5ndGg7KytkKXtyW3NdPXZbZF07cys9MX1yLmxlbmd0aD1pLXUrcDtyZXR1cm4gbn19LCFXfHwhXyk7dmFyIGVlPSF7dG9TdHJpbmc6bnVsbH0ucHJvcGVydHlJc0VudW1lcmFibGUoXCJ0b1N0cmluZ1wiKTt2YXIgdGU9ZnVuY3Rpb24oKXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlKFwicHJvdG90eXBlXCIpO3ZhciByZT0hQyhcInhcIixcIjBcIik7dmFyIG5lPWZ1bmN0aW9uKGUpe3ZhciB0PWUuY29uc3RydWN0b3I7cmV0dXJuIHQmJnQucHJvdG90eXBlPT09ZX07dmFyIGllPXskd2luZG93OnRydWUsJGNvbnNvbGU6dHJ1ZSwkcGFyZW50OnRydWUsJHNlbGY6dHJ1ZSwkZnJhbWU6dHJ1ZSwkZnJhbWVzOnRydWUsJGZyYW1lRWxlbWVudDp0cnVlLCR3ZWJraXRJbmRleGVkREI6dHJ1ZSwkd2Via2l0U3RvcmFnZUluZm86dHJ1ZX07dmFyIGFlPWZ1bmN0aW9uKCl7aWYodHlwZW9mIHdpbmRvdz09PVwidW5kZWZpbmVkXCIpe3JldHVybiBmYWxzZX1mb3IodmFyIGUgaW4gd2luZG93KXt0cnl7aWYoIWllW1wiJFwiK2VdJiZDKHdpbmRvdyxlKSYmd2luZG93W2VdIT09bnVsbCYmdHlwZW9mIHdpbmRvd1tlXT09PVwib2JqZWN0XCIpe25lKHdpbmRvd1tlXSl9fWNhdGNoKHQpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9KCk7dmFyIG9lPWZ1bmN0aW9uKGUpe2lmKHR5cGVvZiB3aW5kb3c9PT1cInVuZGVmaW5lZFwifHwhYWUpe3JldHVybiBuZShlKX10cnl7cmV0dXJuIG5lKGUpfWNhdGNoKHQpe3JldHVybiBmYWxzZX19O3ZhciBsZT1bXCJ0b1N0cmluZ1wiLFwidG9Mb2NhbGVTdHJpbmdcIixcInZhbHVlT2ZcIixcImhhc093blByb3BlcnR5XCIsXCJpc1Byb3RvdHlwZU9mXCIsXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLFwiY29uc3RydWN0b3JcIl07dmFyIHVlPWxlLmxlbmd0aDt2YXIgZmU9ZnVuY3Rpb24gaXNBcmd1bWVudHMoZSl7cmV0dXJuIFAoZSk9PT1cIltvYmplY3QgQXJndW1lbnRzXVwifTt2YXIgc2U9ZnVuY3Rpb24gaXNBcmd1bWVudHMoZSl7cmV0dXJuIGUhPT1udWxsJiZ0eXBlb2YgZT09PVwib2JqZWN0XCImJnR5cGVvZiBlLmxlbmd0aD09PVwibnVtYmVyXCImJmUubGVuZ3RoPj0wJiYheihlKSYmbShlLmNhbGxlZSl9O3ZhciBjZT1mZShhcmd1bWVudHMpP2ZlOnNlO1Uocix7a2V5czpmdW5jdGlvbiBrZXlzKGUpe3ZhciB0PW0oZSk7dmFyIHI9Y2UoZSk7dmFyIG49ZSE9PW51bGwmJnR5cGVvZiBlPT09XCJvYmplY3RcIjt2YXIgaT1uJiZEKGUpO2lmKCFuJiYhdCYmIXIpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0XCIpfXZhciBvPVtdO3ZhciBsPXRlJiZ0O2lmKGkmJnJlfHxyKXtmb3IodmFyIHU9MDt1PGUubGVuZ3RoOysrdSl7Yy5jYWxsKG8sYSh1KSl9fWlmKCFyKXtmb3IodmFyIGYgaW4gZSl7aWYoIShsJiZmPT09XCJwcm90b3R5cGVcIikmJkMoZSxmKSl7Yy5jYWxsKG8sYShmKSl9fX1pZihlZSl7dmFyIHM9b2UoZSk7Zm9yKHZhciB2PTA7djx1ZTt2Kyspe3ZhciBwPWxlW3ZdO2lmKCEocyYmcD09PVwiY29uc3RydWN0b3JcIikmJkMoZSxwKSl7Yy5jYWxsKG8scCl9fX1yZXR1cm4gb319KTt2YXIgdmU9ci5rZXlzJiZmdW5jdGlvbigpe3JldHVybiByLmtleXMoYXJndW1lbnRzKS5sZW5ndGg9PT0yfSgxLDIpO3ZhciBwZT1yLmtleXMmJmZ1bmN0aW9uKCl7dmFyIGU9ci5rZXlzKGFyZ3VtZW50cyk7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGghPT0xfHxlLmxlbmd0aCE9PTF8fGVbMF0hPT0xfSgxKTt2YXIgaGU9ci5rZXlzO1Uocix7a2V5czpmdW5jdGlvbiBrZXlzKGUpe2lmKGNlKGUpKXtyZXR1cm4gaGUoZi5jYWxsKGUpKX1lbHNle3JldHVybiBoZShlKX19fSwhdmV8fHBlKTt2YXIgZ2U9LTYyMTk4NzU1MmU1O3ZhciB5ZT1cIi0wMDAwMDFcIjt2YXIgZGU9RGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcmJm5ldyBEYXRlKGdlKS50b0lTT1N0cmluZygpLmluZGV4T2YoeWUpPT09LTE7dmFyIHdlPURhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nJiZuZXcgRGF0ZSgtMSkudG9JU09TdHJpbmcoKSE9PVwiMTk2OS0xMi0zMVQyMzo1OTo1OS45OTlaXCI7VShEYXRlLnByb3RvdHlwZSx7dG9JU09TdHJpbmc6ZnVuY3Rpb24gdG9JU09TdHJpbmcoKXt2YXIgZSx0LHIsbixpO2lmKCFpc0Zpbml0ZSh0aGlzKSl7dGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyBjYWxsZWQgb24gbm9uLWZpbml0ZSB2YWx1ZS5cIil9bj10aGlzLmdldFVUQ0Z1bGxZZWFyKCk7aT10aGlzLmdldFVUQ01vbnRoKCk7bis9TWF0aC5mbG9vcihpLzEyKTtpPShpJTEyKzEyKSUxMjtlPVtpKzEsdGhpcy5nZXRVVENEYXRlKCksdGhpcy5nZXRVVENIb3VycygpLHRoaXMuZ2V0VVRDTWludXRlcygpLHRoaXMuZ2V0VVRDU2Vjb25kcygpXTtuPShuPDA/XCItXCI6bj45OTk5P1wiK1wiOlwiXCIpK1ooXCIwMDAwMFwiK01hdGguYWJzKG4pLDA8PW4mJm48PTk5OTk/LTQ6LTYpO3Q9ZS5sZW5ndGg7d2hpbGUodC0tKXtyPWVbdF07aWYocjwxMCl7ZVt0XT1cIjBcIityfX1yZXR1cm4gbitcIi1cIitmLmNhbGwoZSwwLDIpLmpvaW4oXCItXCIpK1wiVFwiK2YuY2FsbChlLDIpLmpvaW4oXCI6XCIpK1wiLlwiK1ooXCIwMDBcIit0aGlzLmdldFVUQ01pbGxpc2Vjb25kcygpLC0zKStcIlpcIn19LGRlfHx3ZSk7dmFyIG1lPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBEYXRlLnByb3RvdHlwZS50b0pTT04mJm5ldyBEYXRlKE5hTikudG9KU09OKCk9PT1udWxsJiZuZXcgRGF0ZShnZSkudG9KU09OKCkuaW5kZXhPZih5ZSkhPT0tMSYmRGF0ZS5wcm90b3R5cGUudG9KU09OLmNhbGwoe3RvSVNPU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHRydWV9fSl9Y2F0Y2goZSl7cmV0dXJuIGZhbHNlfX0oKTtpZighbWUpe0RhdGUucHJvdG90eXBlLnRvSlNPTj1mdW5jdGlvbiB0b0pTT04oZSl7dmFyIHQ9cih0aGlzKTt2YXIgbj1BLlRvUHJpbWl0aXZlKHQpO2lmKHR5cGVvZiBuPT09XCJudW1iZXJcIiYmIWlzRmluaXRlKG4pKXtyZXR1cm4gbnVsbH12YXIgaT10LnRvSVNPU3RyaW5nO2lmKCFtKGkpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwidG9JU09TdHJpbmcgcHJvcGVydHkgaXMgbm90IGNhbGxhYmxlXCIpfXJldHVybiBpLmNhbGwodCl9fXZhciBiZT1EYXRlLnBhcnNlKFwiKzAzMzY1OC0wOS0yN1QwMTo0Njo0MC4wMDBaXCIpPT09MWUxNTt2YXIgVGU9IWlzTmFOKERhdGUucGFyc2UoXCIyMDEyLTA0LTA0VDI0OjAwOjAwLjUwMFpcIikpfHwhaXNOYU4oRGF0ZS5wYXJzZShcIjIwMTItMTEtMzFUMjM6NTk6NTkuMDAwWlwiKSl8fCFpc05hTihEYXRlLnBhcnNlKFwiMjAxMi0xMi0zMVQyMzo1OTo2MC4wMDBaXCIpKTt2YXIgeGU9aXNOYU4oRGF0ZS5wYXJzZShcIjIwMDAtMDEtMDFUMDA6MDA6MDAuMDAwWlwiKSk7aWYoeGV8fFRlfHwhYmUpe3ZhciBPZT1NYXRoLnBvdygyLDMxKS0xO3ZhciBTZT1NYXRoLmZsb29yKE9lLzFlMyk7dmFyIGplPVIobmV3IERhdGUoMTk3MCwwLDEsMCwwLDAsT2UrMSkuZ2V0VGltZSgpKTtEYXRlPWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uIERhdGUocixuLGksbyxsLHUsZil7dmFyIHM9YXJndW1lbnRzLmxlbmd0aDt2YXIgYztpZih0aGlzIGluc3RhbmNlb2YgZSl7dmFyIHY9dTt2YXIgcD1mO2lmKGplJiZzPj03JiZmPk9lKXt2YXIgaD1NYXRoLmZsb29yKGYvT2UpKk9lO3ZhciBnPU1hdGguZmxvb3IoaC8xZTMpO3YrPWc7cC09ZyoxZTN9Yz1zPT09MSYmYShyKT09PXI/bmV3IGUodC5wYXJzZShyKSk6cz49Nz9uZXcgZShyLG4saSxvLGwsdixwKTpzPj02P25ldyBlKHIsbixpLG8sbCx2KTpzPj01P25ldyBlKHIsbixpLG8sbCk6cz49ND9uZXcgZShyLG4saSxvKTpzPj0zP25ldyBlKHIsbixpKTpzPj0yP25ldyBlKHIsbik6cz49MT9uZXcgZShyKTpuZXcgZX1lbHNle2M9ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9aWYoIUYoYykpe1UoYyx7Y29uc3RydWN0b3I6dH0sdHJ1ZSl9cmV0dXJuIGN9O3ZhciByPW5ldyBSZWdFeHAoXCJeXCIrXCIoXFxcXGR7NH18WystXVxcXFxkezZ9KVwiK1wiKD86LShcXFxcZHsyfSlcIitcIig/Oi0oXFxcXGR7Mn0pXCIrXCIoPzpcIitcIlQoXFxcXGR7Mn0pXCIrXCI6KFxcXFxkezJ9KVwiK1wiKD86XCIrXCI6KFxcXFxkezJ9KVwiK1wiKD86KFxcXFwuXFxcXGR7MSx9KSk/XCIrXCIpP1wiK1wiKFwiK1wiWnxcIitcIig/OlwiK1wiKFstK10pXCIrXCIoXFxcXGR7Mn0pXCIrXCI6KFxcXFxkezJ9KVwiK1wiKVwiK1wiKT8pPyk/KT9cIitcIiRcIik7dmFyIG49WzAsMzEsNTksOTAsMTIwLDE1MSwxODEsMjEyLDI0MywyNzMsMzA0LDMzNCwzNjVdO3ZhciBpPWZ1bmN0aW9uIGRheUZyb21Nb250aChlLHQpe3ZhciByPXQ+MT8xOjA7cmV0dXJuIG5bdF0rTWF0aC5mbG9vcigoZS0xOTY5K3IpLzQpLU1hdGguZmxvb3IoKGUtMTkwMStyKS8xMDApK01hdGguZmxvb3IoKGUtMTYwMStyKS80MDApKzM2NSooZS0xOTcwKX07dmFyIG89ZnVuY3Rpb24gdG9VVEModCl7dmFyIHI9MDt2YXIgbj10O2lmKGplJiZuPk9lKXt2YXIgaT1NYXRoLmZsb29yKG4vT2UpKk9lO3ZhciBhPU1hdGguZmxvb3IoaS8xZTMpO3IrPWE7bi09YSoxZTN9cmV0dXJuIGwobmV3IGUoMTk3MCwwLDEsMCwwLHIsbikpfTtmb3IodmFyIHUgaW4gZSl7aWYoQyhlLHUpKXt0W3VdPWVbdV19fVUodCx7bm93OmUubm93LFVUQzplLlVUQ30sdHJ1ZSk7dC5wcm90b3R5cGU9ZS5wcm90b3R5cGU7VSh0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6dH0sdHJ1ZSk7dmFyIGY9ZnVuY3Rpb24gcGFyc2UodCl7dmFyIG49ci5leGVjKHQpO2lmKG4pe3ZhciBhPWwoblsxXSksdT1sKG5bMl18fDEpLTEsZj1sKG5bM118fDEpLTEscz1sKG5bNF18fDApLGM9bChuWzVdfHwwKSx2PWwobls2XXx8MCkscD1NYXRoLmZsb29yKGwobls3XXx8MCkqMWUzKSxoPUJvb2xlYW4obls0XSYmIW5bOF0pLGc9bls5XT09PVwiLVwiPzE6LTEseT1sKG5bMTBdfHwwKSxkPWwoblsxMV18fDApLHc7dmFyIG09Yz4wfHx2PjB8fHA+MDtpZihzPChtPzI0OjI1KSYmYzw2MCYmdjw2MCYmcDwxZTMmJnU+LTEmJnU8MTImJnk8MjQmJmQ8NjAmJmY+LTEmJmY8aShhLHUrMSktaShhLHUpKXt3PSgoaShhLHUpK2YpKjI0K3MreSpnKSo2MDt3PSgodytjK2QqZykqNjArdikqMWUzK3A7aWYoaCl7dz1vKHcpfWlmKC04NjRlMTM8PXcmJnc8PTg2NGUxMyl7cmV0dXJuIHd9fXJldHVybiBOYU59cmV0dXJuIGUucGFyc2UuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtVKHQse3BhcnNlOmZ9KTtyZXR1cm4gdH0oRGF0ZSl9aWYoIURhdGUubm93KXtEYXRlLm5vdz1mdW5jdGlvbiBub3coKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKX19dmFyIEVlPXUudG9GaXhlZCYmKDhlLTUudG9GaXhlZCgzKSE9PVwiMC4wMDBcInx8LjkudG9GaXhlZCgwKSE9PVwiMVwifHwxLjI1NS50b0ZpeGVkKDIpIT09XCIxLjI1XCJ8fDB4ZGUwYjZiM2E3NjQwMDgwLnRvRml4ZWQoMCkhPT1cIjEwMDAwMDAwMDAwMDAwMDAxMjhcIik7dmFyIEllPXtiYXNlOjFlNyxzaXplOjYsZGF0YTpbMCwwLDAsMCwwLDBdLG11bHRpcGx5OmZ1bmN0aW9uIG11bHRpcGx5KGUsdCl7dmFyIHI9LTE7dmFyIG49dDt3aGlsZSgrK3I8SWUuc2l6ZSl7bis9ZSpJZS5kYXRhW3JdO0llLmRhdGFbcl09biVJZS5iYXNlO249TWF0aC5mbG9vcihuL0llLmJhc2UpfX0sZGl2aWRlOmZ1bmN0aW9uIGRpdmlkZShlKXt2YXIgdD1JZS5zaXplLHI9MDt3aGlsZSgtLXQ+PTApe3IrPUllLmRhdGFbdF07SWUuZGF0YVt0XT1NYXRoLmZsb29yKHIvZSk7cj1yJWUqSWUuYmFzZX19LG51bVRvU3RyaW5nOmZ1bmN0aW9uIG51bVRvU3RyaW5nKCl7dmFyIGU9SWUuc2l6ZTt2YXIgdD1cIlwiO3doaWxlKC0tZT49MCl7aWYodCE9PVwiXCJ8fGU9PT0wfHxJZS5kYXRhW2VdIT09MCl7dmFyIHI9YShJZS5kYXRhW2VdKTtpZih0PT09XCJcIil7dD1yfWVsc2V7dCs9WihcIjAwMDAwMDBcIiwwLDctci5sZW5ndGgpK3J9fX1yZXR1cm4gdH0scG93OmZ1bmN0aW9uIHBvdyhlLHQscil7cmV0dXJuIHQ9PT0wP3I6dCUyPT09MT9wb3coZSx0LTEsciplKTpwb3coZSplLHQvMixyKX0sbG9nOmZ1bmN0aW9uIGxvZyhlKXt2YXIgdD0wO3ZhciByPWU7d2hpbGUocj49NDA5Nil7dCs9MTI7ci89NDA5Nn13aGlsZShyPj0yKXt0Kz0xO3IvPTJ9cmV0dXJuIHR9fTtVKHUse3RvRml4ZWQ6ZnVuY3Rpb24gdG9GaXhlZChlKXt2YXIgdCxyLG4saSxvLHUsZixzO3Q9bChlKTt0PVIodCk/MDpNYXRoLmZsb29yKHQpO2lmKHQ8MHx8dD4yMCl7dGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJOdW1iZXIudG9GaXhlZCBjYWxsZWQgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBkZWNpbWFsc1wiKX1yPWwodGhpcyk7aWYoUihyKSl7cmV0dXJuXCJOYU5cIn1pZihyPD0tMWUyMXx8cj49MWUyMSl7cmV0dXJuIGEocil9bj1cIlwiO2lmKHI8MCl7bj1cIi1cIjtyPS1yfWk9XCIwXCI7aWYocj4xZS0yMSl7bz1JZS5sb2cocipJZS5wb3coMiw2OSwxKSktNjk7dT1vPDA/cipJZS5wb3coMiwtbywxKTpyL0llLnBvdygyLG8sMSk7dSo9NDUwMzU5OTYyNzM3MDQ5NjtvPTUyLW87aWYobz4wKXtJZS5tdWx0aXBseSgwLHUpO2Y9dDt3aGlsZShmPj03KXtJZS5tdWx0aXBseSgxZTcsMCk7Zi09N31JZS5tdWx0aXBseShJZS5wb3coMTAsZiwxKSwwKTtmPW8tMTt3aGlsZShmPj0yMyl7SWUuZGl2aWRlKDE8PDIzKTtmLT0yM31JZS5kaXZpZGUoMTw8Zik7SWUubXVsdGlwbHkoMSwxKTtJZS5kaXZpZGUoMik7aT1JZS5udW1Ub1N0cmluZygpfWVsc2V7SWUubXVsdGlwbHkoMCx1KTtJZS5tdWx0aXBseSgxPDwtbywwKTtpPUllLm51bVRvU3RyaW5nKCkrWihcIjAuMDAwMDAwMDAwMDAwMDAwMDAwMDBcIiwyLDIrdCl9fWlmKHQ+MCl7cz1pLmxlbmd0aDtpZihzPD10KXtpPW4rWihcIjAuMDAwMDAwMDAwMDAwMDAwMDAwMFwiLDAsdC1zKzIpK2l9ZWxzZXtpPW4rWihpLDAscy10KStcIi5cIitaKGkscy10KX19ZWxzZXtpPW4raX1yZXR1cm4gaX19LEVlKTtpZihcImFiXCIuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGghPT0yfHxcIi5cIi5zcGxpdCgvKC4/KSguPykvKS5sZW5ndGghPT00fHxcInRlc3N0XCIuc3BsaXQoLyhzKSovKVsxXT09PVwidFwifHxcInRlc3RcIi5zcGxpdCgvKD86KS8sLTEpLmxlbmd0aCE9PTR8fFwiXCIuc3BsaXQoLy4/LykubGVuZ3RofHxcIi5cIi5zcGxpdCgvKCkoKS8pLmxlbmd0aD4xKXsoZnVuY3Rpb24oKXt2YXIgZT10eXBlb2YvKCk/Py8uZXhlYyhcIlwiKVsxXT09PVwidW5kZWZpbmVkXCI7dmFyIHQ9TWF0aC5wb3coMiwzMiktMTtvLnNwbGl0PWZ1bmN0aW9uKHIsbil7dmFyIGk9dGhpcztpZih0eXBlb2Ygcj09PVwidW5kZWZpbmVkXCImJm49PT0wKXtyZXR1cm5bXX1pZighUyhyKSl7cmV0dXJuIEoodGhpcyxyLG4pfXZhciBhPVtdO3ZhciBvPShyLmlnbm9yZUNhc2U/XCJpXCI6XCJcIikrKHIubXVsdGlsaW5lP1wibVwiOlwiXCIpKyhyLnVuaWNvZGU/XCJ1XCI6XCJcIikrKHIuc3RpY2t5P1wieVwiOlwiXCIpLGw9MCx1LHMsdixwO3ZhciBoPW5ldyBSZWdFeHAoci5zb3VyY2UsbytcImdcIik7aSs9XCJcIjtpZighZSl7dT1uZXcgUmVnRXhwKFwiXlwiK2guc291cmNlK1wiJCg/IVxcXFxzKVwiLG8pfXZhciBnPXR5cGVvZiBuPT09XCJ1bmRlZmluZWRcIj90OkEuVG9VaW50MzIobik7cz1oLmV4ZWMoaSk7d2hpbGUocyl7dj1zLmluZGV4K3NbMF0ubGVuZ3RoO2lmKHY+bCl7Yy5jYWxsKGEsWihpLGwscy5pbmRleCkpO2lmKCFlJiZzLmxlbmd0aD4xKXtzWzBdLnJlcGxhY2UodSxmdW5jdGlvbigpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aC0yO2UrKyl7aWYodHlwZW9mIGFyZ3VtZW50c1tlXT09PVwidW5kZWZpbmVkXCIpe3NbZV09dm9pZCAwfX19KX1pZihzLmxlbmd0aD4xJiZzLmluZGV4PGkubGVuZ3RoKXtjLmFwcGx5KGEsZi5jYWxsKHMsMSkpfXA9c1swXS5sZW5ndGg7bD12O2lmKGEubGVuZ3RoPj1nKXticmVha319aWYoaC5sYXN0SW5kZXg9PT1zLmluZGV4KXtoLmxhc3RJbmRleCsrfXM9aC5leGVjKGkpfWlmKGw9PT1pLmxlbmd0aCl7aWYocHx8IWgudGVzdChcIlwiKSl7Yy5jYWxsKGEsXCJcIil9fWVsc2V7Yy5jYWxsKGEsWihpLGwpKX1yZXR1cm4gYS5sZW5ndGg+Zz9aKGEsMCxnKTphfX0pKCl9ZWxzZSBpZihcIjBcIi5zcGxpdCh2b2lkIDAsMCkubGVuZ3RoKXtvLnNwbGl0PWZ1bmN0aW9uIHNwbGl0KGUsdCl7aWYodHlwZW9mIGU9PT1cInVuZGVmaW5lZFwiJiZ0PT09MCl7cmV0dXJuW119cmV0dXJuIEoodGhpcyxlLHQpfX12YXIgRGU9by5yZXBsYWNlO3ZhciBNZT1mdW5jdGlvbigpe3ZhciBlPVtdO1wieFwiLnJlcGxhY2UoL3goLik/L2csZnVuY3Rpb24odCxyKXtjLmNhbGwoZSxyKX0pO3JldHVybiBlLmxlbmd0aD09PTEmJnR5cGVvZiBlWzBdPT09XCJ1bmRlZmluZWRcIn0oKTtpZighTWUpe28ucmVwbGFjZT1mdW5jdGlvbiByZXBsYWNlKGUsdCl7dmFyIHI9bSh0KTt2YXIgbj1TKGUpJiYvXFwpWyo/XS8udGVzdChlLnNvdXJjZSk7aWYoIXJ8fCFuKXtyZXR1cm4gRGUuY2FsbCh0aGlzLGUsdCl9ZWxzZXt2YXIgaT1mdW5jdGlvbihyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoO3ZhciBpPWUubGFzdEluZGV4O2UubGFzdEluZGV4PTA7dmFyIGE9ZS5leGVjKHIpfHxbXTtlLmxhc3RJbmRleD1pO2MuY2FsbChhLGFyZ3VtZW50c1tuLTJdLGFyZ3VtZW50c1tuLTFdKTtyZXR1cm4gdC5hcHBseSh0aGlzLGEpfTtyZXR1cm4gRGUuY2FsbCh0aGlzLGUsaSl9fX12YXIgTmU9by5zdWJzdHI7dmFyIGtlPVwiXCIuc3Vic3RyJiZcIjBiXCIuc3Vic3RyKC0xKSE9PVwiYlwiO1Uobyx7c3Vic3RyOmZ1bmN0aW9uIHN1YnN0cihlLHQpe3ZhciByPWU7aWYoZTwwKXtyPWcodGhpcy5sZW5ndGgrZSwwKX1yZXR1cm4gTmUuY2FsbCh0aGlzLHIsdCl9fSxrZSk7dmFyIFVlPVwiXHRcXG5cdTAwMGJcXGZcXHIgXFx4YTBcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcIitcIlxcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXHUyMDI4XCIrXCJcXHUyMDI5XFx1ZmVmZlwiO3ZhciBGZT1cIlxcdTIwMGJcIjt2YXIgUmU9XCJbXCIrVWUrXCJdXCI7dmFyIEFlPW5ldyBSZWdFeHAoXCJeXCIrUmUrUmUrXCIqXCIpO3ZhciAkZT1uZXcgUmVnRXhwKFJlK1JlK1wiKiRcIik7dmFyIENlPW8udHJpbSYmKFVlLnRyaW0oKXx8IUZlLnRyaW0oKSk7VShvLHt0cmltOmZ1bmN0aW9uIHRyaW0oKXtpZih0eXBlb2YgdGhpcz09PVwidW5kZWZpbmVkXCJ8fHRoaXM9PT1udWxsKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FuJ3QgY29udmVydCBcIit0aGlzK1wiIHRvIG9iamVjdFwiKX1yZXR1cm4gYSh0aGlzKS5yZXBsYWNlKEFlLFwiXCIpLnJlcGxhY2UoJGUsXCJcIil9fSxDZSk7aWYocGFyc2VJbnQoVWUrXCIwOFwiKSE9PTh8fHBhcnNlSW50KFVlK1wiMHgxNlwiKSE9PTIyKXtwYXJzZUludD1mdW5jdGlvbihlKXt2YXIgdD0vXjBbeFhdLztyZXR1cm4gZnVuY3Rpb24gcGFyc2VJbnQocixuKXt2YXIgaT1hKHIpLnRyaW0oKTt2YXIgbz1sKG4pfHwodC50ZXN0KGkpPzE2OjEwKTtyZXR1cm4gZShpLG8pfX0ocGFyc2VJbnQpfX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXM1LXNoaW0ubWFwXG4iLCJmdW5jdGlvbiBBbGVydFBhbmVsRGlyZWN0aXZlKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGFsZXJ0czogJz0nLFxuICAgICAgbW9kZTogJ0AnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24odEVsZW1lbnQsIHRBdHRycykge1xuICAgICAgICByZXR1cm4gZ2V0VGVtcGxhdGVVcmwodEF0dHJzLm1vZGUpO1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBDb250cm9sbGVyKCRsb2cpIHtcbiAgdmFyIHZtID0gdGhpcztcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgICRsb2cuZGVidWcobmV3IERhdGUoKSArICc6IFN0YXJ0aW5nIGFsZXJ0RGlyZWN0aXZlIGluIG1vZGU6ICcgKyB2bS5tb2RlICsgJyB3aXRoIGRhdGE6Jywgdm0uYWxlcnRzKTtcbiAgfVxuXG4gIGluaXQoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGVtcGxhdGVVcmwobW9kZSkge1xuICBjb25zb2xlLmxvZygnZ2V0dGluZyB0ZW1wbGF0ZSBmb3IgbW9kZTogJywgbW9kZSk7XG4gIGlmIChtb2RlID09PSAnc2luZ2xlJykge1xuICAgIHJldHVybiAnL2FwcC90YWI0L2FsZXJ0YmFyLmh0bWwnO1xuICB9XG5cbiAgcmV0dXJuICcvYXBwL3RhYjQvYWxlcnRsaXN0Lmh0bWwnO1xufVxuXG5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBBbGVydFBhbmVsRGlyZWN0aXZlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlICovXG5cbnJlcXVpcmUoJ2VzNS1zaGltJyk7XG5yZXF1aXJlKCdlczUtc2hhbScpO1xuXG52YXIgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXInKSxcbiAgICBib290c3RyYXBwZXIgPSByZXF1aXJlKCcuL2Jvb3RzdHJhcHBlcicpLFxuICAgIHByb21pc2VXYWl0ZXIgPSByZXF1aXJlKCcuL3Byb21pc2VXYWl0ZXJDdHJsJyksXG4gICAgZGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuL2RhdGFTZXJ2aWNlJyksXG4gICAgdGFic0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3RhYnMvdGFic0N0cmwnKSxcbiAgICBhbGVydFBhbmVsID0gcmVxdWlyZSgnLi9hbGVydHMvYWxlcnRQYW5lbERpcmVjdGl2ZScpXG4gICAgO1xuXG4vL3JlcXVpcmUoJ2FuZ3VsYXItdWktcm91dGVyJyk7XG4vL3JlcXVpcmUoJ2FuZ3VsYXItdWktYm9vdHN0cmFwJyk7XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ2FuZ3VsYXJNb2RhbFNlcnZpY2UnXSk7XG5hcHAucnVuKGJvb3RzdHJhcHBlcik7XG5hcHAuY29uZmlnKHJvdXRlcik7XG5hcHAuY29udHJvbGxlcigncHJvbWlzZVdhaXRlcicsIFsnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJywgJ2RhdGEnLCBwcm9taXNlV2FpdGVyXSk7XG5hcHAuZmFjdG9yeSgnZGF0YVNlcnZpY2UnLCBbJyRodHRwJywgJyRxJywgJyR0aW1lb3V0JywgZGF0YVNlcnZpY2VdKTtcblxuLypcbmFwcC5jb250cm9sbGVyKCdUYWJzQ29udHJvbGxlcicsXG4gIFsnJHNjb3BlJywgJyRzdGF0ZScsICckbW9kYWwnLCAnZGF0YVNlcnZpY2UnLCAnTW9kYWxTZXJ2aWNlJyxcbiAgdGFic0NvbnRyb2xsZXJdKTtcbiovXG5cbmFwcC5kaXJlY3RpdmUoJ2FsZXJ0UGFuZWwnLCBhbGVydFBhbmVsKTtcblxucmVxdWlyZSgnLi9kcmFnZ2FibGUvaW5kZXgnKTtcbnJlcXVpcmUoJy4vdGFicy9pbmRleCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRsb2cpIHtcbiAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgYmVnaW4uLi4nKTtcblxuXG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZC4nKTtcbn07XG4iLCJmdW5jdGlvbiBDb250YWN0KCkge1xuXG59XG5cbkNvbnRhY3QucHJvdG90eXBlLmlzRGlydHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNEaXJ0eTtcbn07XG5cbkNvbnRhY3QucHJvdG90eXBlLm1hcmtEaXJ0eSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2lzRGlydHkgPSB0cnVlO1xufTtcblxuQ29udGFjdC5wcm90b3R5cGUucHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24ocHJvcE5hbWUpIHtcbiAgICB0aGlzLm1hcmtEaXJ0eSgpO1xufTtcblxuQ29udGFjdC5wcm90b3R5cGUuZ2V0U2V0Rmlyc3ROYW1lID0gZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG4gICAgICAgIC8vIGEgdmFsdWUgb3IgbnVsbCBvciB1bmRlZmluZWQgd2FzIHBhc3MsIGNvbnNpZGVyIGl0IGEgc2V0dGVyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5maXJzdE5hbWUpIHtcbiAgICAgICAgICAgIC8vIHNvbWV0aGluZyBpcyBjaGFuZ2luZ1xuICAgICAgICAgICAgLy8gYSB2YWx1ZSBvciBudWxsIG9yIHVuZGVmaW5lZCB3YXMgcGFzcywgY29uc2lkZXIgaXQgYSBzZXR0ZXJcbiAgICAgICAgICAgIHRoaXMuZmlyc3ROYW1lID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbn07XG5cbkNvbnRhY3QucHJvdG90eXBlLmdldFNldExhc3ROYW1lID0gZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAvLyBhIHZhbHVlIG9yIG51bGwgb3IgdW5kZWZpbmVkIHdhcyBwYXNzLCBjb25zaWRlciBpdCBhIHNldHRlclxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMubGFzdE5hbWUpIHtcbiAgICAgICAgICAgIC8vIHNvbWV0aGluZyBpcyBjaGFuZ2luZ1xuICAgICAgICAgICAgdGhpcy5sYXN0TmFtZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5faXNEaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sYXN0TmFtZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFjdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIGFuZ3VsYXI6IGZhbHNlLCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xudmFyIENvbnRhY3QgPSByZXF1aXJlKCcuL2NvbnRhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkaHR0cCwgJHEsICR0aW1lb3V0KSB7XG4gICAgdmFyIGN1cnJlbnRJdGVtID0ge30sXG4gICAgICAgIGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpLFxuICAgICAgICBpdGVtcyA9IFtdLFxuICAgICAgICBpc0xvYWRpbmcgPSBmYWxzZSxcbiAgICAgICAgZGF0YSA9IHt9O1xuXG4gICAgYW5ndWxhci5leHRlbmQoY29udGFjdCwgY3VycmVudEl0ZW0pO1xuICAgIGRhdGEuaXRlbSA9IGNvbnRhY3Q7XG4gICAgZGF0YS5pdGVtcyA9IGl0ZW1zO1xuXG4gICAgdmFyIHNlbGVjdCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBzZWxmLmRhdGEuaXRlbSA9IHt9O1xuXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGl0ZW07XG4gICAgICAgICAgICBmb3IgKHZhciBpdGVtSWQgPSAwOyBpdGVtSWQgPCBzZWxmLml0ZW1zLmxlbmd0aDsgaXRlbUlkICsrICkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLml0ZW1zW2l0ZW1JZF0gJiYgc2VsZi5pdGVtc1tpdGVtSWRdLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gc2VsZi5pdGVtc1tpdGVtSWRdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50SXRlbSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKGNvbnRhY3QsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIHNlbGYuZGF0YS5pdGVtID0gY29udGFjdDtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbnRhY3QpO1xuICAgICAgICAgICAgICAgIHNlbGYuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgnVW5hYmxlIHRvIGxvY2F0ZSBpdGVtIHdpdGggaWQgJyArIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwMCk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGJ1aWxkVXAoc2VsZikge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnSm9obicsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdEb2UnLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWV0OiAnMTIzIEFueSBTdHJlZXQnLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiAnQW55dG93bicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiAnV0EnLFxuICAgICAgICAgICAgICAgICAgICB6aXA6ICc5ODEwMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvYjogJzEvMi8xOTM0JyxcbiAgICAgICAgICAgICAgICBnZW5kZXI6ICdNJyxcbiAgICAgICAgICAgICAgICBvY2N1cGF0aW9uOiAnT2xkIEd1eScsXG4gICAgICAgICAgICAgICAgaG9iYmllczogW1xuICAgICAgICAgICAgICAgICAgICAnZmlzaGluZycsXG4gICAgICAgICAgICAgICAgICAgICdnYWJiaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ2RyaW5raW5nIGNvZmZlZSdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJ01pc3N5JyxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ0JlbGxlJyxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmVldDogJzIzNCBTb21lIFN0cmVldCcsXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6ICdTb21ldG93bicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiAnV0EnLFxuICAgICAgICAgICAgICAgICAgICB6aXA6ICc5ODIwMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvYjogJzYvNy8xOTU3JyxcbiAgICAgICAgICAgICAgICBnZW5kZXI6ICdGJyxcbiAgICAgICAgICAgICAgICBvY2N1cGF0aW9uOiAnRGVidXRhbnRlJyxcbiAgICAgICAgICAgICAgICBob2JiaWVzOiBbXG4gICAgICAgICAgICAgICAgICAgICdzaG9wcGluZycsXG4gICAgICAgICAgICAgICAgICAgICdnb3NzaXBwaW5nJ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnRGV2b24nLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnRHVkZScsXG4gICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICBzdHJlZXQ6ICc0NTYgMTB0aCBTdHJlZXQnLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiAnTmFycm93dG93bicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiAnV0EnLFxuICAgICAgICAgICAgICAgICAgICB6aXA6ICc5ODMwMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvYjogJzgvOS8xOTgyJyxcbiAgICAgICAgICAgICAgICBnZW5kZXI6ICdNJyxcbiAgICAgICAgICAgICAgICBvY2N1cGF0aW9uOiAnSGFja2VyJyxcbiAgICAgICAgICAgICAgICBob2JiaWVzOiBbXG4gICAgICAgICAgICAgICAgICAgICdjb2RpbmcnLFxuICAgICAgICAgICAgICAgICAgICAnY2FmZmVpbmUnLFxuICAgICAgICAgICAgICAgICAgICAnbWFraW5nIHN0dWZmJ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBzZWxmLml0ZW1zID0gaXRlbXM7XG4gICAgICAgIHNlbGYuZGF0YS5rZXlzID0gW107XG5cbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBzZWxmLmRhdGEua2V5cy5wdXNoKGl0ZW1zW2ldLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmRhdGEuaXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGJ1aWxkVXAoc2VsZik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuZGF0YS5pdGVtcyA9IHNlbGYuaXRlbXM7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHNlbGYuaXRlbXMpO1xuICAgICAgICAgICAgc2VsZi5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRJdGVtOiBjdXJyZW50SXRlbSxcbiAgICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgICBsb2FkOiBsb2FkLFxuICAgICAgICBzZWxlY3Q6IHNlbGVjdCxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgc3RhcnQgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICB1aS5oZWxwZXIuYWRkQ2xhc3MoJ3VpLWRyYWdnaW5nJyk7XG4gIH07XG5cbiAgdmFyIHN0b3AgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcblxuICB9O1xuXG4gIHZhciBsaW5rZXIgPSBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICBlbGVtZW50LmRyYWdnYWJsZSh7XG4gICAgICAgIGNvbnRhaW5tZW50OiAnZG9jdW1lbnQnLFxuICAgICAgICBoZWxwZXI6ICdjbG9uZScsXG4gICAgICAgIGN1cnNvcjogJ21vdmUnLFxuICAgICAgICByZXZlcnQ6ICdpbnZhbGlkJyxcbiAgICAgICAgcmV2ZXJ0RHVyYXRpb246IDUwMCxcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICBzdG9wOiBzdG9wLFxuICAgICAgICBzdGFjazogJy51aS1kcmFnZ2FibGUnXG4gICAgfSk7XG5cbiAgICB2YXIgcGFyZW50SWQgPSBlbGVtZW50LnBhcmVudCgpWzBdLmlkO1xuICAgIGVsZW1lbnQuZGF0YSgnbGlzdCcsIHBhcmVudElkKTtcbiAgICBlbGVtZW50LmFkZENsYXNzKCd1aS1kcmFnZ2FibGUnKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogbGlua2VyLFxuICAgIHNjb3BlOiB7XG4gICAgICBpdGVtU3RyaW5nOiAnQGl0ZW0nXG4gICAgfVxuICB9O1xufTtcbiIsImZ1bmN0aW9uIERyYWdnYWJsZUxpc3RDb250cm9sbGVyKCRsb2cpIHtcblx0dmFyIHZtID0gdGhpcztcblxuXHQkbG9nLmRlYnVnKCdJbiBkcmFnZ2FibGVMaXN0IGNvbnRyb2xsZXIuLi4uJyk7XG5cblx0dm0ub25MaXN0TW92ZSA9IG9uTGlzdE1vdmU7XG5cblx0ZnVuY3Rpb24gb25MaXN0TW92ZShpdGVtLCBmcm9tTGlzdElkLCB0b0xpc3QpIHtcblx0XHQkbG9nLmRlYnVnKCdNb3ZpbmcgaXRlbSAnICsgaXRlbS5uYW1lICsgJyB0byBsaXN0ICcgKyB0b0xpc3QuaWQpO1xuXHRcdHZtLm9uRHJvcCgpKGl0ZW0sIGZyb21MaXN0SWQsIHRvTGlzdCk7XG5cdH1cbn1cblxuRHJhZ2dhYmxlTGlzdENvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIERyYWdnYWJsZUxpc3REaXJlY3RpdmUoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRzY29wZToge1xuXHRcdFx0bGlzdDogJz0nLFxuXHRcdFx0b25Ecm9wOiAnJmRyb3BwYWJsZURyb3AnXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC90ZW1wbGF0ZXMvaG9zcGl0YWwtY2Vuc3VzLWl0ZW0uaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogRHJhZ2dhYmxlTGlzdENvbnRyb2xsZXIsXG5cdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0fTtcbn07XG4iLCJmdW5jdGlvbiBDb250cm9sbGVyKCRsb2cpIHtcblx0dmFyIHZtID0gdGhpcztcblxuXHQkbG9nLmRlYnVnKCdJbiBkcmFnZ2FibGVMaXN0TGlzdCBjb250cm9sbGVyLi4uLicpO1xuXG5cdHZtLm9uTGlzdE1vdmUgPSBvbkxpc3RNb3ZlO1xuXG5cdGZ1bmN0aW9uIG9uTGlzdE1vdmUoaXRlbSwgZnJvbUxpc3RJZCwgdG9MaXN0KSB7XG5cdFx0JGxvZy5kZWJ1ZygnTW92aW5nIGl0ZW0gJyArIGl0ZW0ubmFtZSArICcgdG8gbGlzdCAnICsgdG9MaXN0LmlkKTtcblx0XHQvLyBnZXQgdGhlIGxpc3Qgd2UgYXJlIHB1bGxpbmcgdGhlIGl0ZW0gZnJvbVxuXHRcdHZhciBmcm9tTGlzdCA9IGdldExpc3RCeUlkKGZyb21MaXN0SWQpO1xuXHRcdC8vIGZpbmQgdGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBvcmlnaW5hdGluZyBsaXN0XG5cdFx0dmFyIGl0ZW1JbmRleCA9IGl0ZW0uaW5kZXg7XG5cdFx0Ly8gcHV0IHRoZSBpdGVtIGludG8gdGhlIGRlc3RpbmF0aW9uIGxpc3Rcblx0XHR0b0xpc3QuaXRlbXMucHVzaChmcm9tTGlzdC5pdGVtc1tpdGVtSW5kZXhdKTtcblx0XHQvLyByZW1vdmUgdGhlIGl0ZW0gZnJvbSB0aGUgc291cmNlIGxpc3RcbiAgICAgICAgICBmcm9tTGlzdC5pdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExpc3RCeUlkKGlkKSB7XG5cdFx0Zm9yICh2YXIgaW5kZXg9MDsgaW5kZXggPCB2bS5saXN0cy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGlmICh2bS5saXN0c1tpbmRleF0uaWQgPT09IGlkKSB7XG5cdFx0XHRcdHJldHVybiB2bS5saXN0c1tpbmRleF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIERpcmVjdGl2ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRsaXN0czogJz0nXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC90ZW1wbGF0ZXMvaG9zcGl0YWwtY2Vuc3VzLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG5cdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZHJvcCA9IGZ1bmN0aW9uKGV2ZW50LCB1aSwgc2NvcGUpIHtcbiAgICAgICAgdmFyIGRyYWdJdGVtID0gYW5ndWxhci5lbGVtZW50KHVpLmRyYWdnYWJsZSkuZGF0YSgnaXRlbScpLFxuICAgICAgICAgICAgcmVqZWN0ID0gYW5ndWxhci5lbGVtZW50KHVpLmRyYWdnYWJsZSkuZGF0YSgncmVqZWN0JyksXG4gICAgICAgICAgICBkcmFnRnJvbUxpc3RJZCA9IGFuZ3VsYXIuZWxlbWVudCh1aS5kcmFnZ2FibGUpLmRhdGEoJ2xpc3QnKTtcblxuICAgICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgICAgICB1aS5kcmFnZ2FibGUuZHJhZ2dhYmxlKCdvcHRpb24nLCAncmV2ZXJ0JywgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbW92ZVRvTGlzdCA9IHNjb3BlLm1vZGVsLmxpc3Q7XG5cbiAgICAgICAgaWYgKGRyYWdJdGVtICYmIGRyYWdGcm9tTGlzdElkICYmIG1vdmVUb0xpc3QgJiYgc2NvcGUub25Ecm9wKSB7XG4gICAgICAgICAgICBzY29wZS5vbkRyb3AoKShkcmFnSXRlbSwgZHJhZ0Zyb21MaXN0SWQsIG1vdmVUb0xpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyBpdGVtcyBmcm9tIGxpc3QgdG8gbGlzdDonLCBkcmFnSXRlbSwgZHJhZ0Zyb21MaXN0SWQsIG1vdmVUb0xpc3QpO1xuICAgICAgICBzY29wZS4kYXBwbHkoKTtcbiAgICB9O1xuXG4gICAgdmFyIGxpbmsgPSBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgZWxlbWVudC5kcm9wcGFibGUoe1xuICAgICAgICAgICAgaG92ZXJDbGFzczogJ3VpLWRyb3BwYWJsZS1ob3ZlcicsXG4gICAgICAgICAgICBkcm9wOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICBkcm9wKGV2ZW50LCB1aSwgc2NvcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgbGluazogbGluayxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIG1vZGVsOiAnPWRyb3BwYWJsZU1vZGVsJyxcbiAgICAgICAgICAgIG9uRHJvcDogJyZkcm9wcGFibGVEcm9wJ1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCIvKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UgKi9cblxudmFyIGluZGV4RmlsdGVyID0gcmVxdWlyZSgnLi9pbmRleEZpbHRlcicpO1xudmFyIGRyb3BwYWJsZSA9IHJlcXVpcmUoJy4vZHJvcHBhYmxlRGlyZWN0aXZlJyk7XG52YXIgZHJhZ2dhYmxlID0gcmVxdWlyZSgnLi9kcmFnZ2FibGVEaXJlY3RpdmUnKTtcbnZhciBsaXN0ID0gcmVxdWlyZSgnLi9kcmFnZ2FibGVMaXN0RGlyZWN0aXZlJyk7XG52YXIgbGlzdE9mTGlzdHMgPSByZXF1aXJlKCcuL2RyYWdnYWJsZUxpc3RMaXN0RGlyZWN0aXZlJyk7XG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgnYXBwJylcbiAgLmZpbHRlcignaW5kZXgnLCBpbmRleEZpbHRlcilcbiAgLmRpcmVjdGl2ZSgnZHJvcHBhYmxlJywgZHJvcHBhYmxlKVxuICAuZGlyZWN0aXZlKCdkcmFnZ2FibGUnLCBkcmFnZ2FibGUpXG4gIC5kaXJlY3RpdmUoJ2RyYWdnYWJsZUxpc3QnLCBsaXN0KVxuICAuZGlyZWN0aXZlKCdkcmFnZ2FibGVMaXN0TGlzdCcsIGxpc3RPZkxpc3RzKVxuICA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJyYXksIGluZGV4KSB7XG4gICAgICAgIGlmICghaW5kZXgpIHtcbiAgICAgICAgICAgIGluZGV4ID0gJ2luZGV4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheVtpXVtpbmRleF0gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzY29wZSwgJG1vZGFsSW5zdGFuY2UsIGRhdGEpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgdm0ubWVzc2FnZXMgPSBbXTtcbiAgICAgICAgdm0uc2hvd0Nsb3NlID0gZmFsc2U7XG4gICAgICAgIHZtLnRpdGxlID0gZGF0YS50aXRsZTtcblxuICAgICAgICB2YXIgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UocmVzdWx0KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5kaXNtaXNzID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKHJlc3VsdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYWN0aXZhdGUoKTtcblxuICAgICAgICAvLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICAgICAgICAgIHZtLm1lc3NhZ2VzID0gW107XG4gICAgICAgICAgICB2bS5zaG93Q2xvc2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgZGF0YS5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXG4gICAgICAgICAgICAgICAgLy8gd2UgcmVzb2x2ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgnT0snKTtcblxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG5cbiAgICAgICAgICAgICAgICAvLyB3ZSBlcnJlZFxuICAgICAgICAgICAgICAgIHZtLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2bS5zaG93Q2xvc2UgPSB0cnVlO1xuXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihwcm9ncmVzcykge1xuXG4gICAgICAgICAgICAgICAgLy8gd2Ugd2VyZSBub3RpZmllZFxuICAgICAgICAgICAgICAgIHZtLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHByb2dyZXNzXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvYXBwLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcIkhvbWUgUm91dGVcIjtcblxuICAgICAgICAgICAgICB0aGlzLmdvID0gZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbyhyb3V0ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgfSlcblxuICAgICAgLnN0YXRlKCdkcmFnRHJvcCcsIHtcbiAgICAgICAgICB1cmw6ICcvZHJhZycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZHJhZ0Ryb3AuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgdm0ubGlzdDEgPSB7XG4gICAgICAgICAgICAgICAgICBpZDogJ2xpc3QxJyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdTb2Z0d2FyZScsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0phdmFTY3JpcHQnLCByZWplY3Q6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdDIycgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdTYXNzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1NRTCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdIVE1MJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0phdmEnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTm9kZUpTJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1J1YnknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTEVTUycgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHZtLmxpc3QyID0ge1xuICAgICAgICAgICAgICAgICAgaWQ6ICdsaXN0MicsXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnQmV2ZXJhZ2VzJyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQ29mZmVlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1Njb3RjaCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdCb3VyYm9uJyB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgdm0ubGlzdDMgPSB7XG4gICAgICAgICAgICAgICAgICBpZDogJ2xpc3QzJyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdHcmVlayBHb2RzJyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnWmV1cycgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdBdGhlbmEnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnUG9zZWlkb24nIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZtLmxpc3Q0ID0ge1xuICAgICAgICAgICAgICAgICAgaWQ6ICdsaXN0NCcsXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnVmVnZXRhYmxlcycsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0JydXNzZWwgU3Byb3V0cycgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdDYWJiYWdlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0Jyb2Njb2xpJyB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2bS5saXN0NSA9IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAnbGlzdDUnLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ0ZydWl0cycsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0JhbmFuYXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnT3JhbmdlcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdBcHBsZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnUGVhcnMnIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZtLmxpc3RzID0gW1xuICAgICAgICAgICAgICAgICAgdm0ubGlzdDEsXG4gICAgICAgICAgICAgICAgICB2bS5saXN0MixcbiAgICAgICAgICAgICAgICAgIHZtLmxpc3QzLFxuICAgICAgICAgICAgICAgICAgdm0ubGlzdDQsXG4gICAgICAgICAgICAgICAgICB2bS5saXN0NVxuICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgIHZtLm9uTGlzdE1vdmUgPSBmdW5jdGlvbihsaXN0LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTW92aW5nIGl0ZW0gJyArIGl0ZW0ubmFtZSArICcgdG8gbGlzdCAnICsgbGlzdC5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgfSlcblxuICAgICAgLnN0YXRlKCd0YWJzJywge1xuICAgICAgICAgIHVybDogJy90YWJzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC90YWJzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdUYWJzQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICB9KVxuXG4gICAgICAuc3RhdGUoJ3RhYnMudGFiMScsIHtcbiAgICAgICAgICB1cmw6ICcvdGFiMScsXG4gICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgXCJcIjogeyB0ZW1wbGF0ZVVybDogJ2FwcC90YWIxL3RhYjEuaHRtbCcgfSxcbiAgICAgICAgICAgICAgXCJsZWZ0QHRhYnMudGFiMVwiOiB7XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC90YWIxL2xlZnQuaHRtbCcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiMSBMZWZ0JztcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhU2VydmljZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcIm1pZGRsZUB0YWJzLnRhYjFcIjoge1xuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGFiMS9taWRkbGUuaHRtbCcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiMSBNaWRkbGUnO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGFTZXJ2aWNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicmlnaHRAdGFicy50YWIxXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjEvcmlnaHQuaHRtbCcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiMSBSaWdodCc7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YVNlcnZpY2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC5zdGF0ZSgndGFicy50YWIyJywge1xuICAgICAgICAgIHVybDogJy90YWIyJyxcbiAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICBcIlwiOiB7IHRlbXBsYXRlVXJsOiAnYXBwL3RhYjIvdGFiMi5odG1sJyB9LFxuICAgICAgICAgICAgICBcImxlZnRAdGFicy50YWIyXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjIvbGVmdC5odG1sJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gJ05lc3RlZCBUYWIyIExlZnQnO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRhdGFTZXJ2aWNlLmRhdGEuaXRlbTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJtaWRkbGVAdGFicy50YWIyXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjIvbWlkZGxlLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCBkYXRhU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnTmVzdGVkIFRhYjIgTWlkZGxlJztcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBkYXRhU2VydmljZS5kYXRhLml0ZW07XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicmlnaHRAdGFicy50YWIyXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjIvcmlnaHQuaHRtbCcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiMiBSaWdodCc7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gZGF0YVNlcnZpY2UuZGF0YS5pdGVtO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLnN0YXRlKCd0YWJzLnRhYjMnLCB7XG4gICAgICAgICAgdXJsOiAnL3RhYjMnLFxuICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgIFwiXCI6IHsgdGVtcGxhdGVVcmw6ICdhcHAvdGFiMy90YWIzLmh0bWwnIH0sXG4gICAgICAgICAgICAgIFwibGVmdEB0YWJzLnRhYjNcIjoge1xuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGFiMy9sZWZ0Lmh0bWwnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCBkYXRhU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnTmVzdGVkIFRhYjMgVG9wJztcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBkYXRhU2VydmljZS5jdXJyZW50SXRlbTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJtaWRkbGVAdGFicy50YWIzXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjMvbWlkZGxlLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCBkYXRhU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnTmVzdGVkIFRhYjMgTWlkZGxlJztcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBkYXRhU2VydmljZS5jdXJyZW50SXRlbTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJyaWdodEB0YWJzLnRhYjNcIjoge1xuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGFiMy9yaWdodC5odG1sJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gJ05lc3RlZCBUYWIzIEJvdHRvbSc7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gZGF0YVNlcnZpY2UuY3VycmVudEl0ZW07XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAuc3RhdGUoJ3RhYnMudGFiNCcsIHtcbiAgICAgICAgICB1cmw6ICcvdGFiNCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGFiNC90YWI0RGlyZWN0aXZlLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiIDQnXG4gICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGFTZXJ2aWNlLmRhdGE7XG4gICAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLnN0YXRlKCd0YWJzLnRhYjUnLCB7XG4gICAgICAgICAgdXJsOiAnL3RhYjUnLFxuICAgICAgICAgIHRlbXBsYXRlOiAnPHRhYi1mb3VydGggZGF0YT1cInZtLmRhdGFcIiBwcml2YXRlLWRhdGE9XCJ2bS5wcml2YXRlRGF0YVwiPjwvdGFiLWZvdXJ0aD4nXG4gICAgICB9KVxuICA7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufTtcbiIsImZ1bmN0aW9uIHRhYkZvdXJ0aExlZnREaXJlY3RpdmUoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRzY29wZToge1xuXHRcdFx0ZGF0YTogJz0nLFxuXHRcdFx0c3RhdGU6ICdAJ1xuXHRcdH0sXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvdGFiMS9sZWZ0Lmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG5cdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0fTtcbn1cblxuZnVuY3Rpb24gQ29udHJvbGxlcigkbG9nKSB7XG5cdHZhciB2bSA9IHRoaXM7XG5cblx0ZnVuY3Rpb24gaW5pdCgpIHtcblx0XHQkbG9nLmRlYnVnKG5ldyBEYXRlKCkgKyAnOiBTdGFydGluZyB0YWI0LWxlZnQgZGlyZWN0aXZlIHdpdGggZGF0YTonLCB2bS5kYXRhKTtcblx0fVxuXG5cdGluaXQoKTtcbn1cblxuQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbm1vZHVsZS5leHBvcnRzID0gdGFiRm91cnRoTGVmdERpcmVjdGl2ZTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSAqL1xuXG52YXIgdGFic0N0cmwgPSByZXF1aXJlKCcuL3RhYnNDdHJsJyk7XG52YXIgdGFiRm91cnRoID0gcmVxdWlyZSgnLi90YWJGb3VydGhEaXJlY3RpdmUnKTtcbnZhciB0YWJGb3VydGhMZWZ0ID0gcmVxdWlyZSgnLi9UYWJGb3VydGhMZWZ0RGlyZWN0aXZlJyk7XG52YXIgdGFiRm91cnRoTWlkZGxlID0gcmVxdWlyZSgnLi90YWJGb3VydGhNaWRkbGVEaXJlY3RpdmUnKTtcbnZhciB0YWJGb3VydGhSaWdodCA9IHJlcXVpcmUoJy4vdGFiRm91cnRoUmlnaHREaXJlY3RpdmUnKTtcblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gIC5jb250cm9sbGVyKCdUYWJzQ29udHJvbGxlcicsXG4gICAgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRtb2RhbCcsICdkYXRhU2VydmljZScsICdNb2RhbFNlcnZpY2UnLCB0YWJzQ3RybF0pXG4gIC5kaXJlY3RpdmUoJ3RhYkZvdXJ0aCcsIHRhYkZvdXJ0aClcbiAgLmRpcmVjdGl2ZSgndGFiRm91cnRoTGVmdCcsIHRhYkZvdXJ0aExlZnQpXG4gIC5kaXJlY3RpdmUoJ3RhYkZvdXJ0aE1pZGRsZScsIHRhYkZvdXJ0aE1pZGRsZSlcbiAgLmRpcmVjdGl2ZSgndGFiRm91cnRoUmlnaHQnLCB0YWJGb3VydGhSaWdodClcbiAgO1xuIiwiZnVuY3Rpb24gdGFiRm91cnRoRGlyZWN0aXZlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0c2NvcGU6IHtcblx0XHRcdGRhdGE6ICc9Jyxcblx0XHRcdHByaXZhdGVEYXRhOiAnPSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3RhYjQvdGFiNERpcmVjdGl2ZS5odG1sJyxcblx0XHRjb250cm9sbGVyOiBDb250cm9sbGVyLFxuXHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdH07XG59XG5cbmZ1bmN0aW9uIENvbnRyb2xsZXIoJGxvZykge1xuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0JGxvZy5kZWJ1ZyhuZXcgRGF0ZSgpICsgJzogU3RhcnRpbmcgdGFiNCBkaXJlY3RpdmUgd2l0aCBkYXRhOicsIHZtLmRhdGEpO1xuXHR9XG5cblx0aW5pdCgpO1xufVxuXG5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxubW9kdWxlLmV4cG9ydHMgPSB0YWJGb3VydGhEaXJlY3RpdmU7XG4iLCJmdW5jdGlvbiB0YWJGb3VydGhNaWRkbGVDb250cm9sbGVyKCRsb2cpIHtcblx0dmFyIHZtID0gdGhpcztcblxuXHRmdW5jdGlvbiBpbml0KCkge1xuXHRcdCRsb2cuZGVidWcobmV3IERhdGUoKSArICc6IFN0YXJ0aW5nIHRhYjQtbWlkZGxlIGRpcmVjdGl2ZSB3aXRoIGRhdGE6Jywgdm0uZGF0YSk7XG5cdH1cblxuXHRpbml0KCk7XG59XG5cbnRhYkZvdXJ0aE1pZGRsZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5mdW5jdGlvbiB0YWJGb3VydGhNaWRkbGVEaXJlY3RpdmUoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRzY29wZToge1xuXHRcdFx0ZGF0YTogJz0nLFxuXHRcdFx0c3RhdGU6ICdAJ1xuXHRcdH0sXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvdGFiMS9taWRkbGUuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogdGFiRm91cnRoTWlkZGxlQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYkZvdXJ0aE1pZGRsZURpcmVjdGl2ZTtcbiIsImZ1bmN0aW9uIENvbnRyb2xsZXIoJGxvZykge1xuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0JGxvZy5kZWJ1ZyhuZXcgRGF0ZSgpICsgJzogU3RhcnRpbmcgdGFiNC1yaWdodCBkaXJlY3RpdmUgd2l0aCBkYXRhOicsIHZtLmRhdGEpO1xuXHR9XG5cblx0aW5pdCgpO1xufVxuXG5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxuZnVuY3Rpb24gdGFiRm91cnRoUmlnaHREaXJlY3RpdmUoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRzY29wZToge1xuXHRcdFx0ZGF0YTogJz0nLFxuXHRcdFx0c3RhdGU6ICdAJ1xuXHRcdH0sXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvdGFiMS9yaWdodC5odG1sJyxcblx0XHRjb250cm9sbGVyOiBDb250cm9sbGVyLFxuXHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGFiRm91cnRoUmlnaHREaXJlY3RpdmU7XG4iLCIvL2RlcGVuZGVuY2llcyA9IFsnJHNjb3BlJywgJyRzdGF0ZScsICckbW9kYWwnLCAnZGF0YVNlcnZpY2UnLCAnTW9kYWxTZXJ2aWNlJ107XG5yZXF1aXJlKCcuLi9kYXRhU2VydmljZScpO1xucmVxdWlyZSgnLi4vcHJvbWlzZVdhaXRlckN0cmwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUYWJzQ29udHJvbGxlcigkc2NvcGUsICRzdGF0ZSwgJG1vZGFsLCBkYXRhU2VydmljZSwgTW9kYWxTZXJ2aWNlKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2bS5zdGF0ZSA9ICdUYWJzIFJvdXRlJztcblxuICAgIHZtLmdvID0gZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgICAgJHN0YXRlLmdvKHJvdXRlKTtcbiAgICB9O1xuXG4gICAgdm0udGFicyA9IFtcbiAgICAgIHsgaWQ6ICd0YWJzLnRhYjEnLCB0aXRsZTogJ1JvdXRlZCBUYWInLCBhY3RpdmU6IHRydWUsIGRpc2FibGVkOiBmYWxzZSwgc2VsZWN0OiBcInZtLmdvKCd0YWJzLnRhYjEnKVwiIH0sXG4gICAgICB7IGlkOiAndGFicy50YWIyJywgdGl0bGU6ICdSb3V0ZWQgVGFiIHcvIExheW91dHMnLCBhY3RpdmU6IGZhbHNlLCBkaXNhYmxlZDogZmFsc2UsIHNlbGVjdDogXCJ2bS5nbygndGFicy50YWIyJylcIiB9LFxuICAgICAgeyBpZDogJ3RhYnMudGFiMycsIHRpdGxlOiAnVG9nZ2xlZCBUYWInLCBhY3RpdmU6IGZhbHNlLCBkaXNhYmxlZDogdHJ1ZSwgc2VsZWN0OiBcInZtLmdvKCd0YWJzLnRhYjMnKVwiIH0sXG4gICAgICB7IGlkOiAndGFicy50YWI0JywgdGl0bGU6ICdOZXN0ZWQgRGlyZWN0aXZlJywgYWN0aXZlOiBmYWxzZSwgZGlzYWJsZWQ6IGZhbHNlLCBzZWxlY3Q6IFwidm0uZ28oJ3RhYnMudGFiNCcpXCIgfSxcbiAgICAgIHsgaWQ6ICd0YWJzLnRhYjUnLCB0aXRsZTogJ1JvdXRlZCBEaXJlY3RpdmUnLCBhY3RpdmU6IGZhbHNlLCBkaXNhYmxlZDogZmFsc2UsIHNlbGVjdDogXCJ2bS5nbygndGFicy50YWI1JylcIiB9LFxuICAgIF07XG5cbiAgICB2bS5zaG91bGRTaG93TmV4dCA9IHNob3VsZFNob3dOZXh0O1xuICAgIHZtLnNob3dOZXh0ID0gc2hvd05leHQ7XG4gICAgdm0uc2hvdWxkU2hvd1ByZXYgPSBzaG91bGRTaG93UHJldjtcbiAgICB2bS5zaG93UHJldiA9IHNob3dQcmV2O1xuXG4gICAgdm0uZGF0YSA9IGRhdGFTZXJ2aWNlLmRhdGE7XG4gICAgdm0ucHJpdmF0ZURhdGEgPSAnc2VjcmV0JztcblxuICAgIGFjdGl2YXRlKCk7XG5cbiAgICAvLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0VGFiQnlJZChpZCkge1xuICAgICAgICBmb3IodmFyIGk9MDsgaTx2bS50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHZtLnRhYnNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdm0udGFic1tpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3RpdmVUYWIoaWQpIHtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dm0udGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZtLnRhYnNbaV0uYWN0aXZlID0gdm0udGFic1tpXS5pZCA9PT0gaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROZXh0SWQoYXJyYXksIGN1cnJlbnRJZCkge1xuICAgICAgICBpZiAoIWFycmF5KSB7IHJldHVybjsgfVxuICAgICAgICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGN1cnJlbnRJZCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgYXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5W2luZGV4KzFdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJldmlvdXNJZChhcnJheSwgY3VycmVudElkKSB7XG4gICAgICAgIGlmICghYXJyYXkpIHsgcmV0dXJuOyB9XG4gICAgICAgIHZhciBpbmRleCA9IGFycmF5LmluZGV4T2YoY3VycmVudElkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5W2luZGV4LTFdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzQ3VycmVudEl0ZW0oKSB7XG4gICAgICAgIHJldHVybiB2bS5kYXRhLml0ZW0gJiYgdm0uZGF0YS5pdGVtLmlkICYmIHZtLmRhdGEua2V5cyAmJiB2bS5kYXRhLmtleXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3VsZFNob3dOZXh0KCkge1xuICAgICAgICBpZiAoaGFzQ3VycmVudEl0ZW0oKSkge1xuICAgICAgICAgICAgdmFyIG5leHRJZCA9IGdldE5leHRJZCh2bS5kYXRhLmtleXMsIHZtLmRhdGEuaXRlbS5pZCk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIG5leHRJZCAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3VsZFNob3dQcmV2KCkge1xuICAgICAgICBpZiAoaGFzQ3VycmVudEl0ZW0oKSkge1xuICAgICAgICAgICAgdmFyIHByZXZJZCA9IGdldFByZXZpb3VzSWQodm0uZGF0YS5rZXlzLCB2bS5kYXRhLml0ZW0uaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBwcmV2SWQgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TmV4dCgpIHtcbiAgICAgICAgdmFyIG5leHRJZCA9IGdldE5leHRJZCh2bS5kYXRhLmtleXMsIHZtLmRhdGEuaXRlbS5pZCk7XG4gICAgICAgIHZhciBwcm9taXNlID0gZGF0YVNlcnZpY2Uuc2VsZWN0KG5leHRJZCk7XG4gICAgICAgIHNob3dCb290c3RyYXBNb2RhbChwcm9taXNlLCBuZXh0SWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXR1cFRhYnMobmV4dElkLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1ByZXYoKSB7XG4gICAgICAgIHZhciBwcmV2SWQgPSBnZXRQcmV2aW91c0lkKHZtLmRhdGEua2V5cywgdm0uZGF0YS5pdGVtLmlkKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBkYXRhU2VydmljZS5zZWxlY3QocHJldklkKTtcbiAgICAgICAgc2hvd0Jvb3RzdHJhcE1vZGFsKHByb21pc2UsIHByZXZJZClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHNldHVwVGFicyhwcmV2SWQsIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cFRhYnMoaWQsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQucHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGdldFRhYkJ5SWQoJ3RhYnMudGFiMycpLmRpc2FibGVkID0gZGF0YS5pZCAmJiBkYXRhLmlkICE9PSAyO1xuICAgICAgICAgICAgdm0uZ28oJ3RhYnMudGFiMScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93Qm9vdHN0cmFwTW9kYWwocHJvbWlzZSwgaXRlbUlkKSB7XG4gICAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICAgICAgLy8gY3JlYXRlIG1vZGFsIGVudGl0eSBhbmQgcmVzb2x2ZSBjb250cm9sbGVyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC90ZW1wbGF0ZXMvcHJvbWlzZVdhaXRlci5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdwcm9taXNlV2FpdGVyJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgICAgIHNpemU6ICdzbScsXG4gICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nIGl0ZW0gJyArIGl0ZW1JZCArICcuLi4nXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIC8vIGNhbGxlZCB3aGVuIHdlIHJldHVybiBzdWNjZXNzZnVsbHlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB3ZSBkaXNtaXNzIGluc3RlYWQgb2Ygc2F5aW5nICdPSydcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICAgICAgLy8gd2l0aGluIHRoaXMgcGFnZSwgaWYgd2UgY2hhbmdlIHN0YXRlIHN1Y2Nlc3NmdWxseSwgd2UgbmVlZCB0byB1cGRhdGUgb3VyIGFjdGl2ZSB0YWJcbiAgICAgICAgJHNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKXtcbiAgICAgICAgICAgIHNldEFjdGl2ZVRhYih0b1N0YXRlLm5hbWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkYXRhU2VydmljZS5sb2FkKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gZGF0YVNlcnZpY2Uuc2VsZWN0KDEpO1xuICAgICAgICAgICAgc2hvd0Jvb3RzdHJhcE1vZGFsKHByb21pc2UsIDEpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHVwVGFicygxLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
