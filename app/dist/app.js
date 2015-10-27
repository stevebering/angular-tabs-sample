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

},{"./alerts/alertPanelDirective":3,"./bootstrapper":5,"./dataService":7,"./draggable/index":13,"./promiseWaiterCtrl":15,"./router":16,"./tabs/index":18,"./tabs/tabsCtrl":22,"es5-sham":1,"es5-shim":2}],5:[function(require,module,exports){
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
var Data = require('./dataStore.json');

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
        var items = Data;
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
        data: data,
        isLoading: isLoading
    };
}

module.exports = dataService;

},{"./contact":6,"./dataStore.json":8}],8:[function(require,module,exports){
module.exports=[
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "address": {
                "street": "123 Any Street",
                "city": "Anytown",
                "state": "WA",
                "zip": "98100"
        },
        "dob": "1/2/1934",
        "gender": "M",
        "occupation": "Old Guy",
        "hobbies": [
                "fishing",
                "gabbing",
                "drinking coffee"
        ]
    },{
        "id": 2,
        "firstName": "Missy",
        "lastName": "Belle",
        "address": {
                "street": "234 Some Street",
                "city": "Sometown",
                "state": "WA",
                "zip": "98200"
        },
        "dob": "6/7/1957",
        "gender": "F",
        "occupation": "Debutante",
        "hobbies": [
                "shopping",
                "gossipping"
        ]
    },{
        "id": 3,
        "firstName": "Devon",
        "lastName": "Dude",
        "address": {
                "street": "456 10th Street",
                "city": "Narrowtown",
                "state": "WA",
                "zip": "98300"
        },
        "dob": "8/9/1982",
        "gender": "M",
        "occupation": "Hacker",
        "hobbies": [
                "coding",
                "caffeine",
                "making stuff"
        ]
    }
]
},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{"./draggableDirective":9,"./draggableListDirective":10,"./draggableListListDirective":11,"./droppableDirective":12,"./indexFilter":14}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{"./TabFourthLeftDirective":17,"./tabFourthDirective":19,"./tabFourthMiddleDirective":20,"./tabFourthRightDirective":21,"./tabsCtrl":22}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{"../dataService":7,"../promiseWaiterCtrl":15}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZXM1LXNoaW0vZXM1LXNoYW0ubWluLmpzIiwibm9kZV9tb2R1bGVzL2VzNS1zaGltL2VzNS1zaGltLm1pbi5qcyIsInNyYy9hbGVydHMvYWxlcnRQYW5lbERpcmVjdGl2ZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvYm9vdHN0cmFwcGVyLmpzIiwic3JjL2NvbnRhY3QuanMiLCJzcmMvZGF0YVNlcnZpY2UuanMiLCJzcmMvZGF0YVN0b3JlLmpzb24iLCJzcmMvZHJhZ2dhYmxlL2RyYWdnYWJsZURpcmVjdGl2ZS5qcyIsInNyYy9kcmFnZ2FibGUvZHJhZ2dhYmxlTGlzdERpcmVjdGl2ZS5qcyIsInNyYy9kcmFnZ2FibGUvZHJhZ2dhYmxlTGlzdExpc3REaXJlY3RpdmUuanMiLCJzcmMvZHJhZ2dhYmxlL2Ryb3BwYWJsZURpcmVjdGl2ZS5qcyIsInNyYy9kcmFnZ2FibGUvaW5kZXguanMiLCJzcmMvZHJhZ2dhYmxlL2luZGV4RmlsdGVyLmpzIiwic3JjL3Byb21pc2VXYWl0ZXJDdHJsLmpzIiwic3JjL3JvdXRlci5qcyIsInNyYy90YWJzL1RhYkZvdXJ0aExlZnREaXJlY3RpdmUuanMiLCJzcmMvdGFicy9pbmRleC5qcyIsInNyYy90YWJzL3RhYkZvdXJ0aERpcmVjdGl2ZS5qcyIsInNyYy90YWJzL3RhYkZvdXJ0aE1pZGRsZURpcmVjdGl2ZS5qcyIsInNyYy90YWJzL3RhYkZvdXJ0aFJpZ2h0RGlyZWN0aXZlLmpzIiwic3JjL3RhYnMvdGFic0N0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cbiAqIEBsaWNlbnNlIGVzNS1zaGltIENvcHlyaWdodCAyMDA5LTIwMTUgYnkgY29udHJpYnV0b3JzLCBNSVQgTGljZW5zZVxuICogc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL3Y0LjEuMTUvTElDRU5TRVxuICovXG4oZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUodCl9ZWxzZSBpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCIpe21vZHVsZS5leHBvcnRzPXQoKX1lbHNle2UucmV0dXJuRXhwb3J0cz10KCl9fSkodGhpcyxmdW5jdGlvbigpe3ZhciBlPUZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO3ZhciB0PU9iamVjdC5wcm90b3R5cGU7dmFyIHI9ZS5iaW5kKHQuaGFzT3duUHJvcGVydHkpO3ZhciBuPWUuYmluZCh0LnByb3BlcnR5SXNFbnVtZXJhYmxlKTt2YXIgbz1lLmJpbmQodC50b1N0cmluZyk7dmFyIGk7dmFyIGM7dmFyIGY7dmFyIGE7dmFyIGw9cih0LFwiX19kZWZpbmVHZXR0ZXJfX1wiKTtpZihsKXtpPWUuYmluZCh0Ll9fZGVmaW5lR2V0dGVyX18pO2M9ZS5iaW5kKHQuX19kZWZpbmVTZXR0ZXJfXyk7Zj1lLmJpbmQodC5fX2xvb2t1cEdldHRlcl9fKTthPWUuYmluZCh0Ll9fbG9va3VwU2V0dGVyX18pfWlmKCFPYmplY3QuZ2V0UHJvdG90eXBlT2Ype09iamVjdC5nZXRQcm90b3R5cGVPZj1mdW5jdGlvbiBnZXRQcm90b3R5cGVPZihlKXt2YXIgcj1lLl9fcHJvdG9fXztpZihyfHxyPT09bnVsbCl7cmV0dXJuIHJ9ZWxzZSBpZihvKGUuY29uc3RydWN0b3IpPT09XCJbb2JqZWN0IEZ1bmN0aW9uXVwiKXtyZXR1cm4gZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGV9ZWxzZSBpZihlIGluc3RhbmNlb2YgT2JqZWN0KXtyZXR1cm4gdH1lbHNle3JldHVybiBudWxsfX19dmFyIHU9ZnVuY3Rpb24gZG9lc0dldE93blByb3BlcnR5RGVzY3JpcHRvcldvcmsoZSl7dHJ5e2Uuc2VudGluZWw9MDtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLFwic2VudGluZWxcIikudmFsdWU9PT0wfWNhdGNoKHQpe3JldHVybiBmYWxzZX19O2lmKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSl7dmFyIHA9dSh7fSk7dmFyIHM9dHlwZW9mIGRvY3VtZW50PT09XCJ1bmRlZmluZWRcInx8dShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtpZighc3x8IXApe3ZhciBiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3J9fWlmKCFPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yfHxiKXt2YXIgTz1cIk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgY2FsbGVkIG9uIGEgbm9uLW9iamVjdDogXCI7T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcj1mdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxvKXtpZih0eXBlb2YgZSE9PVwib2JqZWN0XCImJnR5cGVvZiBlIT09XCJmdW5jdGlvblwifHxlPT09bnVsbCl7dGhyb3cgbmV3IFR5cGVFcnJvcihPK2UpfWlmKGIpe3RyeXtyZXR1cm4gYi5jYWxsKE9iamVjdCxlLG8pfWNhdGNoKGkpe319dmFyIGM7aWYoIXIoZSxvKSl7cmV0dXJuIGN9Yz17ZW51bWVyYWJsZTpuKGUsbyksY29uZmlndXJhYmxlOnRydWV9O2lmKGwpe3ZhciB1PWUuX19wcm90b19fO3ZhciBwPWUhPT10O2lmKHApe2UuX19wcm90b19fPXR9dmFyIHM9ZihlLG8pO3ZhciB5PWEoZSxvKTtpZihwKXtlLl9fcHJvdG9fXz11fWlmKHN8fHkpe2lmKHMpe2MuZ2V0PXN9aWYoeSl7Yy5zZXQ9eX1yZXR1cm4gY319Yy52YWx1ZT1lW29dO2Mud3JpdGFibGU9dHJ1ZTtyZXR1cm4gY319aWYoIU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKXtPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcz1mdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGUpe3JldHVybiBPYmplY3Qua2V5cyhlKX19aWYoIU9iamVjdC5jcmVhdGUpe3ZhciB5O3ZhciBkPSEoe19fcHJvdG9fXzpudWxsfWluc3RhbmNlb2YgT2JqZWN0KTt2YXIgaj1mdW5jdGlvbiBzaG91bGRVc2VBY3RpdmVYKCl7aWYoIWRvY3VtZW50LmRvbWFpbil7cmV0dXJuIGZhbHNlfXRyeXtyZXR1cm4hIW5ldyBBY3RpdmVYT2JqZWN0KFwiaHRtbGZpbGVcIil9Y2F0Y2goZSl7cmV0dXJuIGZhbHNlfX07dmFyIHY9ZnVuY3Rpb24gZ2V0RW1wdHlWaWFBY3RpdmVYKCl7dmFyIGU7dmFyIHQ7dD1uZXcgQWN0aXZlWE9iamVjdChcImh0bWxmaWxlXCIpO3Qud3JpdGUoXCI8c2NyaXB0Pjwvc2NyaXB0PlwiKTt0LmNsb3NlKCk7ZT10LnBhcmVudFdpbmRvdy5PYmplY3QucHJvdG90eXBlO3Q9bnVsbDtyZXR1cm4gZX07dmFyIF89ZnVuY3Rpb24gZ2V0RW1wdHlWaWFJRnJhbWUoKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO3ZhciB0PWRvY3VtZW50LmJvZHl8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt2YXIgcjtlLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dC5hcHBlbmRDaGlsZChlKTtlLnNyYz1cImphdmFzY3JpcHQ6XCI7cj1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0LnByb3RvdHlwZTt0LnJlbW92ZUNoaWxkKGUpO2U9bnVsbDtyZXR1cm4gcn07aWYoZHx8dHlwZW9mIGRvY3VtZW50PT09XCJ1bmRlZmluZWRcIil7eT1mdW5jdGlvbigpe3JldHVybntfX3Byb3RvX186bnVsbH19fWVsc2V7eT1mdW5jdGlvbigpe3ZhciBlPWooKT92KCk6XygpO2RlbGV0ZSBlLmNvbnN0cnVjdG9yO2RlbGV0ZSBlLmhhc093blByb3BlcnR5O2RlbGV0ZSBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO2RlbGV0ZSBlLmlzUHJvdG90eXBlT2Y7ZGVsZXRlIGUudG9Mb2NhbGVTdHJpbmc7ZGVsZXRlIGUudG9TdHJpbmc7ZGVsZXRlIGUudmFsdWVPZjt2YXIgdD1mdW5jdGlvbiBFbXB0eSgpe307dC5wcm90b3R5cGU9ZTt5PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0fTtyZXR1cm4gbmV3IHR9fU9iamVjdC5jcmVhdGU9ZnVuY3Rpb24gY3JlYXRlKGUsdCl7dmFyIHI7dmFyIG49ZnVuY3Rpb24gVHlwZSgpe307aWYoZT09PW51bGwpe3I9eSgpfWVsc2V7aWYodHlwZW9mIGUhPT1cIm9iamVjdFwiJiZ0eXBlb2YgZSE9PVwiZnVuY3Rpb25cIil7dGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBwcm90b3R5cGUgbWF5IG9ubHkgYmUgYW4gT2JqZWN0IG9yIG51bGxcIil9bi5wcm90b3R5cGU9ZTtyPW5ldyBuO3IuX19wcm90b19fPWV9aWYodCE9PXZvaWQgMCl7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMocix0KX1yZXR1cm4gcn19dmFyIHc9ZnVuY3Rpb24gZG9lc0RlZmluZVByb3BlcnR5V29yayhlKXt0cnl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJzZW50aW5lbFwiLHt9KTtyZXR1cm5cInNlbnRpbmVsXCJpbiBlfWNhdGNoKHQpe3JldHVybiBmYWxzZX19O2lmKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSl7dmFyIG09dyh7fSk7dmFyIFA9dHlwZW9mIGRvY3VtZW50PT09XCJ1bmRlZmluZWRcInx8dyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtpZighbXx8IVApe3ZhciBFPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxoPU9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzfX1pZighT2JqZWN0LmRlZmluZVByb3BlcnR5fHxFKXt2YXIgZz1cIlByb3BlcnR5IGRlc2NyaXB0aW9uIG11c3QgYmUgYW4gb2JqZWN0OiBcIjt2YXIgej1cIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSBjYWxsZWQgb24gbm9uLW9iamVjdDogXCI7dmFyIFQ9XCJnZXR0ZXJzICYgc2V0dGVycyBjYW4gbm90IGJlIGRlZmluZWQgb24gdGhpcyBqYXZhc2NyaXB0IGVuZ2luZVwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eT1mdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShlLHIsbil7aWYodHlwZW9mIGUhPT1cIm9iamVjdFwiJiZ0eXBlb2YgZSE9PVwiZnVuY3Rpb25cInx8ZT09PW51bGwpe3Rocm93IG5ldyBUeXBlRXJyb3IoeitlKX1pZih0eXBlb2YgbiE9PVwib2JqZWN0XCImJnR5cGVvZiBuIT09XCJmdW5jdGlvblwifHxuPT09bnVsbCl7dGhyb3cgbmV3IFR5cGVFcnJvcihnK24pfWlmKEUpe3RyeXtyZXR1cm4gRS5jYWxsKE9iamVjdCxlLHIsbil9Y2F0Y2gobyl7fX1pZihcInZhbHVlXCJpbiBuKXtpZihsJiYoZihlLHIpfHxhKGUscikpKXt2YXIgdT1lLl9fcHJvdG9fXztlLl9fcHJvdG9fXz10O2RlbGV0ZSBlW3JdO2Vbcl09bi52YWx1ZTtlLl9fcHJvdG9fXz11fWVsc2V7ZVtyXT1uLnZhbHVlfX1lbHNle2lmKCFsJiYoXCJnZXRcImluIG58fFwic2V0XCJpbiBuKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihUKX1pZihcImdldFwiaW4gbil7aShlLHIsbi5nZXQpfWlmKFwic2V0XCJpbiBuKXtjKGUscixuLnNldCl9fXJldHVybiBlfX1pZighT2JqZWN0LmRlZmluZVByb3BlcnRpZXN8fGgpe09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzPWZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoZSx0KXtpZihoKXt0cnl7cmV0dXJuIGguY2FsbChPYmplY3QsZSx0KX1jYXRjaChyKXt9fU9iamVjdC5rZXlzKHQpLmZvckVhY2goZnVuY3Rpb24ocil7aWYociE9PVwiX19wcm90b19fXCIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIsdFtyXSl9fSk7cmV0dXJuIGV9fWlmKCFPYmplY3Quc2VhbCl7T2JqZWN0LnNlYWw9ZnVuY3Rpb24gc2VhbChlKXtpZihPYmplY3QoZSkhPT1lKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LnNlYWwgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIE9iamVjdHMuXCIpfXJldHVybiBlfX1pZighT2JqZWN0LmZyZWV6ZSl7T2JqZWN0LmZyZWV6ZT1mdW5jdGlvbiBmcmVlemUoZSl7aWYoT2JqZWN0KGUpIT09ZSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5mcmVlemUgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIE9iamVjdHMuXCIpfXJldHVybiBlfX10cnl7T2JqZWN0LmZyZWV6ZShmdW5jdGlvbigpe30pfWNhdGNoKHgpe09iamVjdC5mcmVlemU9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIGZyZWV6ZSh0KXtpZih0eXBlb2YgdD09PVwiZnVuY3Rpb25cIil7cmV0dXJuIHR9ZWxzZXtyZXR1cm4gZSh0KX19fShPYmplY3QuZnJlZXplKX1pZighT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKXtPYmplY3QucHJldmVudEV4dGVuc2lvbnM9ZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoZSl7aWYoT2JqZWN0KGUpIT09ZSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyBjYW4gb25seSBiZSBjYWxsZWQgb24gT2JqZWN0cy5cIil9cmV0dXJuIGV9fWlmKCFPYmplY3QuaXNTZWFsZWQpe09iamVjdC5pc1NlYWxlZD1mdW5jdGlvbiBpc1NlYWxlZChlKXtpZihPYmplY3QoZSkhPT1lKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmlzU2VhbGVkIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBPYmplY3RzLlwiKX1yZXR1cm4gZmFsc2V9fWlmKCFPYmplY3QuaXNGcm96ZW4pe09iamVjdC5pc0Zyb3plbj1mdW5jdGlvbiBpc0Zyb3plbihlKXtpZihPYmplY3QoZSkhPT1lKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmlzRnJvemVuIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBPYmplY3RzLlwiKX1yZXR1cm4gZmFsc2V9fWlmKCFPYmplY3QuaXNFeHRlbnNpYmxlKXtPYmplY3QuaXNFeHRlbnNpYmxlPWZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShlKXtpZihPYmplY3QoZSkhPT1lKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmlzRXh0ZW5zaWJsZSBjYW4gb25seSBiZSBjYWxsZWQgb24gT2JqZWN0cy5cIil9dmFyIHQ9XCJcIjt3aGlsZShyKGUsdCkpe3QrPVwiP1wifWVbdF09dHJ1ZTt2YXIgbj1yKGUsdCk7ZGVsZXRlIGVbdF07cmV0dXJuIG59fX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXM1LXNoYW0ubWFwXG4iLCIvKiFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbVxuICogQGxpY2Vuc2UgZXM1LXNoaW0gQ29weXJpZ2h0IDIwMDktMjAxNSBieSBjb250cmlidXRvcnMsIE1JVCBMaWNlbnNlXG4gKiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2Jsb2IvdjQuMS4xNS9MSUNFTlNFXG4gKi9cbihmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2lmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZSh0KX1lbHNlIGlmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIil7bW9kdWxlLmV4cG9ydHM9dCgpfWVsc2V7ZS5yZXR1cm5FeHBvcnRzPXQoKX19KSh0aGlzLGZ1bmN0aW9uKCl7dmFyIGU9QXJyYXk7dmFyIHQ9ZS5wcm90b3R5cGU7dmFyIHI9T2JqZWN0O3ZhciBuPXIucHJvdG90eXBlO3ZhciBpPUZ1bmN0aW9uLnByb3RvdHlwZTt2YXIgYT1TdHJpbmc7dmFyIG89YS5wcm90b3R5cGU7dmFyIGw9TnVtYmVyO3ZhciB1PWwucHJvdG90eXBlO3ZhciBmPXQuc2xpY2U7dmFyIHM9dC5zcGxpY2U7dmFyIGM9dC5wdXNoO3ZhciB2PXQudW5zaGlmdDt2YXIgcD10LmNvbmNhdDt2YXIgaD1pLmNhbGw7dmFyIGc9TWF0aC5tYXg7dmFyIHk9TWF0aC5taW47dmFyIGQ9bi50b1N0cmluZzt2YXIgdz10eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnPT09XCJzeW1ib2xcIjt2YXIgbTt2YXIgYj1GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcsVD1mdW5jdGlvbiB0cnlGdW5jdGlvbk9iamVjdChlKXt0cnl7Yi5jYWxsKGUpO3JldHVybiB0cnVlfWNhdGNoKHQpe3JldHVybiBmYWxzZX19LHg9XCJbb2JqZWN0IEZ1bmN0aW9uXVwiLE89XCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiO209ZnVuY3Rpb24gaXNDYWxsYWJsZShlKXtpZih0eXBlb2YgZSE9PVwiZnVuY3Rpb25cIil7cmV0dXJuIGZhbHNlfWlmKHcpe3JldHVybiBUKGUpfXZhciB0PWQuY2FsbChlKTtyZXR1cm4gdD09PXh8fHQ9PT1PfTt2YXIgUzt2YXIgaj1SZWdFeHAucHJvdG90eXBlLmV4ZWMsRT1mdW5jdGlvbiB0cnlSZWdleEV4ZWMoZSl7dHJ5e2ouY2FsbChlKTtyZXR1cm4gdHJ1ZX1jYXRjaCh0KXtyZXR1cm4gZmFsc2V9fSxJPVwiW29iamVjdCBSZWdFeHBdXCI7Uz1mdW5jdGlvbiBpc1JlZ2V4KGUpe2lmKHR5cGVvZiBlIT09XCJvYmplY3RcIil7cmV0dXJuIGZhbHNlfXJldHVybiB3P0UoZSk6ZC5jYWxsKGUpPT09SX07dmFyIEQ7dmFyIE09U3RyaW5nLnByb3RvdHlwZS52YWx1ZU9mLE49ZnVuY3Rpb24gdHJ5U3RyaW5nT2JqZWN0KGUpe3RyeXtNLmNhbGwoZSk7cmV0dXJuIHRydWV9Y2F0Y2godCl7cmV0dXJuIGZhbHNlfX0saz1cIltvYmplY3QgU3RyaW5nXVwiO0Q9ZnVuY3Rpb24gaXNTdHJpbmcoZSl7aWYodHlwZW9mIGU9PT1cInN0cmluZ1wiKXtyZXR1cm4gdHJ1ZX1pZih0eXBlb2YgZSE9PVwib2JqZWN0XCIpe3JldHVybiBmYWxzZX1yZXR1cm4gdz9OKGUpOmQuY2FsbChlKT09PWt9O3ZhciBVPWZ1bmN0aW9uKGUpe3ZhciB0PXIuZGVmaW5lUHJvcGVydHkmJmZ1bmN0aW9uKCl7dHJ5e3ZhciBlPXt9O3IuZGVmaW5lUHJvcGVydHkoZSxcInhcIix7ZW51bWVyYWJsZTpmYWxzZSx2YWx1ZTplfSk7Zm9yKHZhciB0IGluIGUpe3JldHVybiBmYWxzZX1yZXR1cm4gZS54PT09ZX1jYXRjaChuKXtyZXR1cm4gZmFsc2V9fSgpO3ZhciBuO2lmKHQpe249ZnVuY3Rpb24oZSx0LG4saSl7aWYoIWkmJnQgaW4gZSl7cmV0dXJufXIuZGVmaW5lUHJvcGVydHkoZSx0LHtjb25maWd1cmFibGU6dHJ1ZSxlbnVtZXJhYmxlOmZhbHNlLHdyaXRhYmxlOnRydWUsdmFsdWU6bn0pfX1lbHNle249ZnVuY3Rpb24oZSx0LHIsbil7aWYoIW4mJnQgaW4gZSl7cmV0dXJufWVbdF09cn19cmV0dXJuIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModCxyLGkpe2Zvcih2YXIgYSBpbiByKXtpZihlLmNhbGwocixhKSl7bih0LGEsclthXSxpKX19fX0obi5oYXNPd25Qcm9wZXJ0eSk7dmFyIEY9ZnVuY3Rpb24gaXNQcmltaXRpdmUoZSl7dmFyIHQ9dHlwZW9mIGU7cmV0dXJuIGU9PT1udWxsfHx0IT09XCJvYmplY3RcIiYmdCE9PVwiZnVuY3Rpb25cIn07dmFyIFI9bC5pc05hTnx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT1lfTt2YXIgQT17VG9JbnRlZ2VyOmZ1bmN0aW9uIFRvSW50ZWdlcihlKXt2YXIgdD0rZTtpZihSKHQpKXt0PTB9ZWxzZSBpZih0IT09MCYmdCE9PTEvMCYmdCE9PS0oMS8wKSl7dD0odD4wfHwtMSkqTWF0aC5mbG9vcihNYXRoLmFicyh0KSl9cmV0dXJuIHR9LFRvUHJpbWl0aXZlOmZ1bmN0aW9uIFRvUHJpbWl0aXZlKGUpe3ZhciB0LHIsbjtpZihGKGUpKXtyZXR1cm4gZX1yPWUudmFsdWVPZjtpZihtKHIpKXt0PXIuY2FsbChlKTtpZihGKHQpKXtyZXR1cm4gdH19bj1lLnRvU3RyaW5nO2lmKG0obikpe3Q9bi5jYWxsKGUpO2lmKEYodCkpe3JldHVybiB0fX10aHJvdyBuZXcgVHlwZUVycm9yfSxUb09iamVjdDpmdW5jdGlvbihlKXtpZihlPT1udWxsKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FuJ3QgY29udmVydCBcIitlK1wiIHRvIG9iamVjdFwiKX1yZXR1cm4gcihlKX0sVG9VaW50MzI6ZnVuY3Rpb24gVG9VaW50MzIoZSl7cmV0dXJuIGU+Pj4wfX07dmFyICQ9ZnVuY3Rpb24gRW1wdHkoKXt9O1UoaSx7YmluZDpmdW5jdGlvbiBiaW5kKGUpe3ZhciB0PXRoaXM7aWYoIW0odCkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlIFwiK3QpfXZhciBuPWYuY2FsbChhcmd1bWVudHMsMSk7dmFyIGk7dmFyIGE9ZnVuY3Rpb24oKXtpZih0aGlzIGluc3RhbmNlb2YgaSl7dmFyIGE9dC5hcHBseSh0aGlzLHAuY2FsbChuLGYuY2FsbChhcmd1bWVudHMpKSk7aWYocihhKT09PWEpe3JldHVybiBhfXJldHVybiB0aGlzfWVsc2V7cmV0dXJuIHQuYXBwbHkoZSxwLmNhbGwobixmLmNhbGwoYXJndW1lbnRzKSkpfX07dmFyIG89ZygwLHQubGVuZ3RoLW4ubGVuZ3RoKTt2YXIgbD1bXTtmb3IodmFyIHU9MDt1PG87dSsrKXtjLmNhbGwobCxcIiRcIit1KX1pPUZ1bmN0aW9uKFwiYmluZGVyXCIsXCJyZXR1cm4gZnVuY3Rpb24gKFwiK2wuam9pbihcIixcIikrXCIpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cIikoYSk7aWYodC5wcm90b3R5cGUpeyQucHJvdG90eXBlPXQucHJvdG90eXBlO2kucHJvdG90eXBlPW5ldyAkOyQucHJvdG90eXBlPW51bGx9cmV0dXJuIGl9fSk7dmFyIEM9aC5iaW5kKG4uaGFzT3duUHJvcGVydHkpO3ZhciBQPWguYmluZChuLnRvU3RyaW5nKTt2YXIgWj1oLmJpbmQoby5zbGljZSk7dmFyIEo9aC5iaW5kKG8uc3BsaXQpO3ZhciB6PWUuaXNBcnJheXx8ZnVuY3Rpb24gaXNBcnJheShlKXtyZXR1cm4gUChlKT09PVwiW29iamVjdCBBcnJheV1cIn07dmFyIEI9W10udW5zaGlmdCgwKSE9PTE7VSh0LHt1bnNoaWZ0OmZ1bmN0aW9uKCl7di5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHRoaXMubGVuZ3RofX0sQik7VShlLHtpc0FycmF5Onp9KTt2YXIgRz1yKFwiYVwiKTt2YXIgSD1HWzBdIT09XCJhXCJ8fCEoMCBpbiBHKTt2YXIgTD1mdW5jdGlvbiBwcm9wZXJseUJveGVkKGUpe3ZhciB0PXRydWU7dmFyIHI9dHJ1ZTtpZihlKXtlLmNhbGwoXCJmb29cIixmdW5jdGlvbihlLHIsbil7aWYodHlwZW9mIG4hPT1cIm9iamVjdFwiKXt0PWZhbHNlfX0pO2UuY2FsbChbMV0sZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyPXR5cGVvZiB0aGlzPT09XCJzdHJpbmdcIn0sXCJ4XCIpfXJldHVybiEhZSYmdCYmcn07VSh0LHtmb3JFYWNoOmZ1bmN0aW9uIGZvckVhY2goZSl7dmFyIHQ9QS5Ub09iamVjdCh0aGlzKTt2YXIgcj1IJiZEKHRoaXMpP0oodGhpcyxcIlwiKTp0O3ZhciBuPS0xO3ZhciBpPUEuVG9VaW50MzIoci5sZW5ndGgpO3ZhciBhO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7YT1hcmd1bWVudHNbMV19aWYoIW0oZSkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5wcm90b3R5cGUuZm9yRWFjaCBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIil9d2hpbGUoKytuPGkpe2lmKG4gaW4gcil7aWYodHlwZW9mIGE9PT1cInVuZGVmaW5lZFwiKXtlKHJbbl0sbix0KX1lbHNle2UuY2FsbChhLHJbbl0sbix0KX19fX19LCFMKHQuZm9yRWFjaCkpO1UodCx7bWFwOmZ1bmN0aW9uIG1hcCh0KXt2YXIgcj1BLlRvT2JqZWN0KHRoaXMpO3ZhciBuPUgmJkQodGhpcyk/Sih0aGlzLFwiXCIpOnI7dmFyIGk9QS5Ub1VpbnQzMihuLmxlbmd0aCk7dmFyIGE9ZShpKTt2YXIgbztpZihhcmd1bWVudHMubGVuZ3RoPjEpe289YXJndW1lbnRzWzFdfWlmKCFtKHQpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkucHJvdG90eXBlLm1hcCBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIil9Zm9yKHZhciBsPTA7bDxpO2wrKyl7aWYobCBpbiBuKXtpZih0eXBlb2Ygbz09PVwidW5kZWZpbmVkXCIpe2FbbF09dChuW2xdLGwscil9ZWxzZXthW2xdPXQuY2FsbChvLG5bbF0sbCxyKX19fXJldHVybiBhfX0sIUwodC5tYXApKTtVKHQse2ZpbHRlcjpmdW5jdGlvbiBmaWx0ZXIoZSl7dmFyIHQ9QS5Ub09iamVjdCh0aGlzKTt2YXIgcj1IJiZEKHRoaXMpP0oodGhpcyxcIlwiKTp0O3ZhciBuPUEuVG9VaW50MzIoci5sZW5ndGgpO3ZhciBpPVtdO3ZhciBhO3ZhciBvO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7bz1hcmd1bWVudHNbMV19aWYoIW0oZSkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5wcm90b3R5cGUuZmlsdGVyIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKX1mb3IodmFyIGw9MDtsPG47bCsrKXtpZihsIGluIHIpe2E9cltsXTtpZih0eXBlb2Ygbz09PVwidW5kZWZpbmVkXCI/ZShhLGwsdCk6ZS5jYWxsKG8sYSxsLHQpKXtjLmNhbGwoaSxhKX19fXJldHVybiBpfX0sIUwodC5maWx0ZXIpKTtVKHQse2V2ZXJ5OmZ1bmN0aW9uIGV2ZXJ5KGUpe3ZhciB0PUEuVG9PYmplY3QodGhpcyk7dmFyIHI9SCYmRCh0aGlzKT9KKHRoaXMsXCJcIik6dDt2YXIgbj1BLlRvVWludDMyKHIubGVuZ3RoKTt2YXIgaTtpZihhcmd1bWVudHMubGVuZ3RoPjEpe2k9YXJndW1lbnRzWzFdfWlmKCFtKGUpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkucHJvdG90eXBlLmV2ZXJ5IGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKX1mb3IodmFyIGE9MDthPG47YSsrKXtpZihhIGluIHImJiEodHlwZW9mIGk9PT1cInVuZGVmaW5lZFwiP2UoclthXSxhLHQpOmUuY2FsbChpLHJbYV0sYSx0KSkpe3JldHVybiBmYWxzZX19cmV0dXJuIHRydWV9fSwhTCh0LmV2ZXJ5KSk7VSh0LHtzb21lOmZ1bmN0aW9uIHNvbWUoZSl7dmFyIHQ9QS5Ub09iamVjdCh0aGlzKTt2YXIgcj1IJiZEKHRoaXMpP0oodGhpcyxcIlwiKTp0O3ZhciBuPUEuVG9VaW50MzIoci5sZW5ndGgpO3ZhciBpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7aT1hcmd1bWVudHNbMV19aWYoIW0oZSkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5wcm90b3R5cGUuc29tZSBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIil9Zm9yKHZhciBhPTA7YTxuO2ErKyl7aWYoYSBpbiByJiYodHlwZW9mIGk9PT1cInVuZGVmaW5lZFwiP2UoclthXSxhLHQpOmUuY2FsbChpLHJbYV0sYSx0KSkpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9fSwhTCh0LnNvbWUpKTt2YXIgWD1mYWxzZTtpZih0LnJlZHVjZSl7WD10eXBlb2YgdC5yZWR1Y2UuY2FsbChcImVzNVwiLGZ1bmN0aW9uKGUsdCxyLG4pe3JldHVybiBufSk9PT1cIm9iamVjdFwifVUodCx7cmVkdWNlOmZ1bmN0aW9uIHJlZHVjZShlKXt2YXIgdD1BLlRvT2JqZWN0KHRoaXMpO3ZhciByPUgmJkQodGhpcyk/Sih0aGlzLFwiXCIpOnQ7dmFyIG49QS5Ub1VpbnQzMihyLmxlbmd0aCk7aWYoIW0oZSkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5wcm90b3R5cGUucmVkdWNlIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKX1pZihuPT09MCYmYXJndW1lbnRzLmxlbmd0aD09PTEpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJyZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpfXZhciBpPTA7dmFyIGE7aWYoYXJndW1lbnRzLmxlbmd0aD49Mil7YT1hcmd1bWVudHNbMV19ZWxzZXtkb3tpZihpIGluIHIpe2E9cltpKytdO2JyZWFrfWlmKCsraT49bil7dGhyb3cgbmV3IFR5cGVFcnJvcihcInJlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWVcIil9fXdoaWxlKHRydWUpfWZvcig7aTxuO2krKyl7aWYoaSBpbiByKXthPWUoYSxyW2ldLGksdCl9fXJldHVybiBhfX0sIVgpO3ZhciBZPWZhbHNlO2lmKHQucmVkdWNlUmlnaHQpe1k9dHlwZW9mIHQucmVkdWNlUmlnaHQuY2FsbChcImVzNVwiLGZ1bmN0aW9uKGUsdCxyLG4pe3JldHVybiBufSk9PT1cIm9iamVjdFwifVUodCx7cmVkdWNlUmlnaHQ6ZnVuY3Rpb24gcmVkdWNlUmlnaHQoZSl7dmFyIHQ9QS5Ub09iamVjdCh0aGlzKTt2YXIgcj1IJiZEKHRoaXMpP0oodGhpcyxcIlwiKTp0O3ZhciBuPUEuVG9VaW50MzIoci5sZW5ndGgpO2lmKCFtKGUpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0IGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKX1pZihuPT09MCYmYXJndW1lbnRzLmxlbmd0aD09PTEpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJyZWR1Y2VSaWdodCBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWVcIil9dmFyIGk7dmFyIGE9bi0xO2lmKGFyZ3VtZW50cy5sZW5ndGg+PTIpe2k9YXJndW1lbnRzWzFdfWVsc2V7ZG97aWYoYSBpbiByKXtpPXJbYS0tXTticmVha31pZigtLWE8MCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcInJlZHVjZVJpZ2h0IG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKX19d2hpbGUodHJ1ZSl9aWYoYTwwKXtyZXR1cm4gaX1kb3tpZihhIGluIHIpe2k9ZShpLHJbYV0sYSx0KX19d2hpbGUoYS0tKTtyZXR1cm4gaX19LCFZKTt2YXIgcT10LmluZGV4T2YmJlswLDFdLmluZGV4T2YoMSwyKSE9PS0xO1UodCx7aW5kZXhPZjpmdW5jdGlvbiBpbmRleE9mKGUpe3ZhciB0PUgmJkQodGhpcyk/Sih0aGlzLFwiXCIpOkEuVG9PYmplY3QodGhpcyk7dmFyIHI9QS5Ub1VpbnQzMih0Lmxlbmd0aCk7aWYocj09PTApe3JldHVybi0xfXZhciBuPTA7aWYoYXJndW1lbnRzLmxlbmd0aD4xKXtuPUEuVG9JbnRlZ2VyKGFyZ3VtZW50c1sxXSl9bj1uPj0wP246ZygwLHIrbik7Zm9yKDtuPHI7bisrKXtpZihuIGluIHQmJnRbbl09PT1lKXtyZXR1cm4gbn19cmV0dXJuLTF9fSxxKTt2YXIgSz10Lmxhc3RJbmRleE9mJiZbMCwxXS5sYXN0SW5kZXhPZigwLC0zKSE9PS0xO1UodCx7bGFzdEluZGV4T2Y6ZnVuY3Rpb24gbGFzdEluZGV4T2YoZSl7dmFyIHQ9SCYmRCh0aGlzKT9KKHRoaXMsXCJcIik6QS5Ub09iamVjdCh0aGlzKTt2YXIgcj1BLlRvVWludDMyKHQubGVuZ3RoKTtpZihyPT09MCl7cmV0dXJuLTF9dmFyIG49ci0xO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7bj15KG4sQS5Ub0ludGVnZXIoYXJndW1lbnRzWzFdKSl9bj1uPj0wP246ci1NYXRoLmFicyhuKTtmb3IoO24+PTA7bi0tKXtpZihuIGluIHQmJmU9PT10W25dKXtyZXR1cm4gbn19cmV0dXJuLTF9fSxLKTt2YXIgUT1mdW5jdGlvbigpe3ZhciBlPVsxLDJdO3ZhciB0PWUuc3BsaWNlKCk7cmV0dXJuIGUubGVuZ3RoPT09MiYmeih0KSYmdC5sZW5ndGg9PT0wfSgpO1UodCx7c3BsaWNlOmZ1bmN0aW9uIHNwbGljZShlLHQpe2lmKGFyZ3VtZW50cy5sZW5ndGg9PT0wKXtyZXR1cm5bXX1lbHNle3JldHVybiBzLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fSwhUSk7dmFyIFY9ZnVuY3Rpb24oKXt2YXIgZT17fTt0LnNwbGljZS5jYWxsKGUsMCwwLDEpO3JldHVybiBlLmxlbmd0aD09PTF9KCk7VSh0LHtzcGxpY2U6ZnVuY3Rpb24gc3BsaWNlKGUsdCl7aWYoYXJndW1lbnRzLmxlbmd0aD09PTApe3JldHVybltdfXZhciByPWFyZ3VtZW50czt0aGlzLmxlbmd0aD1nKEEuVG9JbnRlZ2VyKHRoaXMubGVuZ3RoKSwwKTtpZihhcmd1bWVudHMubGVuZ3RoPjAmJnR5cGVvZiB0IT09XCJudW1iZXJcIil7cj1mLmNhbGwoYXJndW1lbnRzKTtpZihyLmxlbmd0aDwyKXtjLmNhbGwocix0aGlzLmxlbmd0aC1lKX1lbHNle3JbMV09QS5Ub0ludGVnZXIodCl9fXJldHVybiBzLmFwcGx5KHRoaXMscil9fSwhVik7dmFyIFc9ZnVuY3Rpb24oKXt2YXIgdD1uZXcgZSgxZTUpO3RbOF09XCJ4XCI7dC5zcGxpY2UoMSwxKTtyZXR1cm4gdC5pbmRleE9mKFwieFwiKT09PTd9KCk7dmFyIF89ZnVuY3Rpb24oKXt2YXIgZT0yNTY7dmFyIHQ9W107dFtlXT1cImFcIjt0LnNwbGljZShlKzEsMCxcImJcIik7cmV0dXJuIHRbZV09PT1cImFcIn0oKTtVKHQse3NwbGljZTpmdW5jdGlvbiBzcGxpY2UoZSx0KXt2YXIgcj1BLlRvT2JqZWN0KHRoaXMpO3ZhciBuPVtdO3ZhciBpPUEuVG9VaW50MzIoci5sZW5ndGgpO3ZhciBvPUEuVG9JbnRlZ2VyKGUpO3ZhciBsPW88MD9nKGkrbywwKTp5KG8saSk7dmFyIHU9eShnKEEuVG9JbnRlZ2VyKHQpLDApLGktbCk7dmFyIHM9MDt2YXIgYzt3aGlsZShzPHUpe2M9YShsK3MpO2lmKEMocixjKSl7bltzXT1yW2NdfXMrPTF9dmFyIHY9Zi5jYWxsKGFyZ3VtZW50cywyKTt2YXIgcD12Lmxlbmd0aDt2YXIgaDtpZihwPHUpe3M9bDt3aGlsZShzPGktdSl7Yz1hKHMrdSk7aD1hKHMrcCk7aWYoQyhyLGMpKXtyW2hdPXJbY119ZWxzZXtkZWxldGUgcltoXX1zKz0xfXM9aTt3aGlsZShzPmktdStwKXtkZWxldGUgcltzLTFdO3MtPTF9fWVsc2UgaWYocD51KXtzPWktdTt3aGlsZShzPmwpe2M9YShzK3UtMSk7aD1hKHMrcC0xKTtpZihDKHIsYykpe3JbaF09cltjXX1lbHNle2RlbGV0ZSByW2hdfXMtPTF9fXM9bDtmb3IodmFyIGQ9MDtkPHYubGVuZ3RoOysrZCl7cltzXT12W2RdO3MrPTF9ci5sZW5ndGg9aS11K3A7cmV0dXJuIG59fSwhV3x8IV8pO3ZhciBlZT0he3RvU3RyaW5nOm51bGx9LnByb3BlcnR5SXNFbnVtZXJhYmxlKFwidG9TdHJpbmdcIik7dmFyIHRlPWZ1bmN0aW9uKCl7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInByb3RvdHlwZVwiKTt2YXIgcmU9IUMoXCJ4XCIsXCIwXCIpO3ZhciBuZT1mdW5jdGlvbihlKXt2YXIgdD1lLmNvbnN0cnVjdG9yO3JldHVybiB0JiZ0LnByb3RvdHlwZT09PWV9O3ZhciBpZT17JHdpbmRvdzp0cnVlLCRjb25zb2xlOnRydWUsJHBhcmVudDp0cnVlLCRzZWxmOnRydWUsJGZyYW1lOnRydWUsJGZyYW1lczp0cnVlLCRmcmFtZUVsZW1lbnQ6dHJ1ZSwkd2Via2l0SW5kZXhlZERCOnRydWUsJHdlYmtpdFN0b3JhZ2VJbmZvOnRydWV9O3ZhciBhZT1mdW5jdGlvbigpe2lmKHR5cGVvZiB3aW5kb3c9PT1cInVuZGVmaW5lZFwiKXtyZXR1cm4gZmFsc2V9Zm9yKHZhciBlIGluIHdpbmRvdyl7dHJ5e2lmKCFpZVtcIiRcIitlXSYmQyh3aW5kb3csZSkmJndpbmRvd1tlXSE9PW51bGwmJnR5cGVvZiB3aW5kb3dbZV09PT1cIm9iamVjdFwiKXtuZSh3aW5kb3dbZV0pfX1jYXRjaCh0KXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfSgpO3ZhciBvZT1mdW5jdGlvbihlKXtpZih0eXBlb2Ygd2luZG93PT09XCJ1bmRlZmluZWRcInx8IWFlKXtyZXR1cm4gbmUoZSl9dHJ5e3JldHVybiBuZShlKX1jYXRjaCh0KXtyZXR1cm4gZmFsc2V9fTt2YXIgbGU9W1widG9TdHJpbmdcIixcInRvTG9jYWxlU3RyaW5nXCIsXCJ2YWx1ZU9mXCIsXCJoYXNPd25Qcm9wZXJ0eVwiLFwiaXNQcm90b3R5cGVPZlwiLFwicHJvcGVydHlJc0VudW1lcmFibGVcIixcImNvbnN0cnVjdG9yXCJdO3ZhciB1ZT1sZS5sZW5ndGg7dmFyIGZlPWZ1bmN0aW9uIGlzQXJndW1lbnRzKGUpe3JldHVybiBQKGUpPT09XCJbb2JqZWN0IEFyZ3VtZW50c11cIn07dmFyIHNlPWZ1bmN0aW9uIGlzQXJndW1lbnRzKGUpe3JldHVybiBlIT09bnVsbCYmdHlwZW9mIGU9PT1cIm9iamVjdFwiJiZ0eXBlb2YgZS5sZW5ndGg9PT1cIm51bWJlclwiJiZlLmxlbmd0aD49MCYmIXooZSkmJm0oZS5jYWxsZWUpfTt2YXIgY2U9ZmUoYXJndW1lbnRzKT9mZTpzZTtVKHIse2tleXM6ZnVuY3Rpb24ga2V5cyhlKXt2YXIgdD1tKGUpO3ZhciByPWNlKGUpO3ZhciBuPWUhPT1udWxsJiZ0eXBlb2YgZT09PVwib2JqZWN0XCI7dmFyIGk9biYmRChlKTtpZighbiYmIXQmJiFyKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdFwiKX12YXIgbz1bXTt2YXIgbD10ZSYmdDtpZihpJiZyZXx8cil7Zm9yKHZhciB1PTA7dTxlLmxlbmd0aDsrK3Upe2MuY2FsbChvLGEodSkpfX1pZighcil7Zm9yKHZhciBmIGluIGUpe2lmKCEobCYmZj09PVwicHJvdG90eXBlXCIpJiZDKGUsZikpe2MuY2FsbChvLGEoZikpfX19aWYoZWUpe3ZhciBzPW9lKGUpO2Zvcih2YXIgdj0wO3Y8dWU7disrKXt2YXIgcD1sZVt2XTtpZighKHMmJnA9PT1cImNvbnN0cnVjdG9yXCIpJiZDKGUscCkpe2MuY2FsbChvLHApfX19cmV0dXJuIG99fSk7dmFyIHZlPXIua2V5cyYmZnVuY3Rpb24oKXtyZXR1cm4gci5rZXlzKGFyZ3VtZW50cykubGVuZ3RoPT09Mn0oMSwyKTt2YXIgcGU9ci5rZXlzJiZmdW5jdGlvbigpe3ZhciBlPXIua2V5cyhhcmd1bWVudHMpO3JldHVybiBhcmd1bWVudHMubGVuZ3RoIT09MXx8ZS5sZW5ndGghPT0xfHxlWzBdIT09MX0oMSk7dmFyIGhlPXIua2V5cztVKHIse2tleXM6ZnVuY3Rpb24ga2V5cyhlKXtpZihjZShlKSl7cmV0dXJuIGhlKGYuY2FsbChlKSl9ZWxzZXtyZXR1cm4gaGUoZSl9fX0sIXZlfHxwZSk7dmFyIGdlPS02MjE5ODc1NTJlNTt2YXIgeWU9XCItMDAwMDAxXCI7dmFyIGRlPURhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nJiZuZXcgRGF0ZShnZSkudG9JU09TdHJpbmcoKS5pbmRleE9mKHllKT09PS0xO3ZhciB3ZT1EYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyYmbmV3IERhdGUoLTEpLnRvSVNPU3RyaW5nKCkhPT1cIjE5NjktMTItMzFUMjM6NTk6NTkuOTk5WlwiO1UoRGF0ZS5wcm90b3R5cGUse3RvSVNPU3RyaW5nOmZ1bmN0aW9uIHRvSVNPU3RyaW5nKCl7dmFyIGUsdCxyLG4saTtpZighaXNGaW5pdGUodGhpcykpe3Rocm93IG5ldyBSYW5nZUVycm9yKFwiRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgY2FsbGVkIG9uIG5vbi1maW5pdGUgdmFsdWUuXCIpfW49dGhpcy5nZXRVVENGdWxsWWVhcigpO2k9dGhpcy5nZXRVVENNb250aCgpO24rPU1hdGguZmxvb3IoaS8xMik7aT0oaSUxMisxMiklMTI7ZT1baSsxLHRoaXMuZ2V0VVRDRGF0ZSgpLHRoaXMuZ2V0VVRDSG91cnMoKSx0aGlzLmdldFVUQ01pbnV0ZXMoKSx0aGlzLmdldFVUQ1NlY29uZHMoKV07bj0objwwP1wiLVwiOm4+OTk5OT9cIitcIjpcIlwiKStaKFwiMDAwMDBcIitNYXRoLmFicyhuKSwwPD1uJiZuPD05OTk5Py00Oi02KTt0PWUubGVuZ3RoO3doaWxlKHQtLSl7cj1lW3RdO2lmKHI8MTApe2VbdF09XCIwXCIrcn19cmV0dXJuIG4rXCItXCIrZi5jYWxsKGUsMCwyKS5qb2luKFwiLVwiKStcIlRcIitmLmNhbGwoZSwyKS5qb2luKFwiOlwiKStcIi5cIitaKFwiMDAwXCIrdGhpcy5nZXRVVENNaWxsaXNlY29uZHMoKSwtMykrXCJaXCJ9fSxkZXx8d2UpO3ZhciBtZT1mdW5jdGlvbigpe3RyeXtyZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9KU09OJiZuZXcgRGF0ZShOYU4pLnRvSlNPTigpPT09bnVsbCYmbmV3IERhdGUoZ2UpLnRvSlNPTigpLmluZGV4T2YoeWUpIT09LTEmJkRhdGUucHJvdG90eXBlLnRvSlNPTi5jYWxsKHt0b0lTT1N0cmluZzpmdW5jdGlvbigpe3JldHVybiB0cnVlfX0pfWNhdGNoKGUpe3JldHVybiBmYWxzZX19KCk7aWYoIW1lKXtEYXRlLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24gdG9KU09OKGUpe3ZhciB0PXIodGhpcyk7dmFyIG49QS5Ub1ByaW1pdGl2ZSh0KTtpZih0eXBlb2Ygbj09PVwibnVtYmVyXCImJiFpc0Zpbml0ZShuKSl7cmV0dXJuIG51bGx9dmFyIGk9dC50b0lTT1N0cmluZztpZighbShpKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcInRvSVNPU3RyaW5nIHByb3BlcnR5IGlzIG5vdCBjYWxsYWJsZVwiKX1yZXR1cm4gaS5jYWxsKHQpfX12YXIgYmU9RGF0ZS5wYXJzZShcIiswMzM2NTgtMDktMjdUMDE6NDY6NDAuMDAwWlwiKT09PTFlMTU7dmFyIFRlPSFpc05hTihEYXRlLnBhcnNlKFwiMjAxMi0wNC0wNFQyNDowMDowMC41MDBaXCIpKXx8IWlzTmFOKERhdGUucGFyc2UoXCIyMDEyLTExLTMxVDIzOjU5OjU5LjAwMFpcIikpfHwhaXNOYU4oRGF0ZS5wYXJzZShcIjIwMTItMTItMzFUMjM6NTk6NjAuMDAwWlwiKSk7dmFyIHhlPWlzTmFOKERhdGUucGFyc2UoXCIyMDAwLTAxLTAxVDAwOjAwOjAwLjAwMFpcIikpO2lmKHhlfHxUZXx8IWJlKXt2YXIgT2U9TWF0aC5wb3coMiwzMSktMTt2YXIgU2U9TWF0aC5mbG9vcihPZS8xZTMpO3ZhciBqZT1SKG5ldyBEYXRlKDE5NzAsMCwxLDAsMCwwLE9lKzEpLmdldFRpbWUoKSk7RGF0ZT1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbiBEYXRlKHIsbixpLG8sbCx1LGYpe3ZhciBzPWFyZ3VtZW50cy5sZW5ndGg7dmFyIGM7aWYodGhpcyBpbnN0YW5jZW9mIGUpe3ZhciB2PXU7dmFyIHA9ZjtpZihqZSYmcz49NyYmZj5PZSl7dmFyIGg9TWF0aC5mbG9vcihmL09lKSpPZTt2YXIgZz1NYXRoLmZsb29yKGgvMWUzKTt2Kz1nO3AtPWcqMWUzfWM9cz09PTEmJmEocik9PT1yP25ldyBlKHQucGFyc2UocikpOnM+PTc/bmV3IGUocixuLGksbyxsLHYscCk6cz49Nj9uZXcgZShyLG4saSxvLGwsdik6cz49NT9uZXcgZShyLG4saSxvLGwpOnM+PTQ/bmV3IGUocixuLGksbyk6cz49Mz9uZXcgZShyLG4saSk6cz49Mj9uZXcgZShyLG4pOnM+PTE/bmV3IGUocik6bmV3IGV9ZWxzZXtjPWUuYXBwbHkodGhpcyxhcmd1bWVudHMpfWlmKCFGKGMpKXtVKGMse2NvbnN0cnVjdG9yOnR9LHRydWUpfXJldHVybiBjfTt2YXIgcj1uZXcgUmVnRXhwKFwiXlwiK1wiKFxcXFxkezR9fFsrLV1cXFxcZHs2fSlcIitcIig/Oi0oXFxcXGR7Mn0pXCIrXCIoPzotKFxcXFxkezJ9KVwiK1wiKD86XCIrXCJUKFxcXFxkezJ9KVwiK1wiOihcXFxcZHsyfSlcIitcIig/OlwiK1wiOihcXFxcZHsyfSlcIitcIig/OihcXFxcLlxcXFxkezEsfSkpP1wiK1wiKT9cIitcIihcIitcIlp8XCIrXCIoPzpcIitcIihbLStdKVwiK1wiKFxcXFxkezJ9KVwiK1wiOihcXFxcZHsyfSlcIitcIilcIitcIik/KT8pPyk/XCIrXCIkXCIpO3ZhciBuPVswLDMxLDU5LDkwLDEyMCwxNTEsMTgxLDIxMiwyNDMsMjczLDMwNCwzMzQsMzY1XTt2YXIgaT1mdW5jdGlvbiBkYXlGcm9tTW9udGgoZSx0KXt2YXIgcj10PjE/MTowO3JldHVybiBuW3RdK01hdGguZmxvb3IoKGUtMTk2OStyKS80KS1NYXRoLmZsb29yKChlLTE5MDErcikvMTAwKStNYXRoLmZsb29yKChlLTE2MDErcikvNDAwKSszNjUqKGUtMTk3MCl9O3ZhciBvPWZ1bmN0aW9uIHRvVVRDKHQpe3ZhciByPTA7dmFyIG49dDtpZihqZSYmbj5PZSl7dmFyIGk9TWF0aC5mbG9vcihuL09lKSpPZTt2YXIgYT1NYXRoLmZsb29yKGkvMWUzKTtyKz1hO24tPWEqMWUzfXJldHVybiBsKG5ldyBlKDE5NzAsMCwxLDAsMCxyLG4pKX07Zm9yKHZhciB1IGluIGUpe2lmKEMoZSx1KSl7dFt1XT1lW3VdfX1VKHQse25vdzplLm5vdyxVVEM6ZS5VVEN9LHRydWUpO3QucHJvdG90eXBlPWUucHJvdG90eXBlO1UodC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnR9LHRydWUpO3ZhciBmPWZ1bmN0aW9uIHBhcnNlKHQpe3ZhciBuPXIuZXhlYyh0KTtpZihuKXt2YXIgYT1sKG5bMV0pLHU9bChuWzJdfHwxKS0xLGY9bChuWzNdfHwxKS0xLHM9bChuWzRdfHwwKSxjPWwobls1XXx8MCksdj1sKG5bNl18fDApLHA9TWF0aC5mbG9vcihsKG5bN118fDApKjFlMyksaD1Cb29sZWFuKG5bNF0mJiFuWzhdKSxnPW5bOV09PT1cIi1cIj8xOi0xLHk9bChuWzEwXXx8MCksZD1sKG5bMTFdfHwwKSx3O3ZhciBtPWM+MHx8dj4wfHxwPjA7aWYoczwobT8yNDoyNSkmJmM8NjAmJnY8NjAmJnA8MWUzJiZ1Pi0xJiZ1PDEyJiZ5PDI0JiZkPDYwJiZmPi0xJiZmPGkoYSx1KzEpLWkoYSx1KSl7dz0oKGkoYSx1KStmKSoyNCtzK3kqZykqNjA7dz0oKHcrYytkKmcpKjYwK3YpKjFlMytwO2lmKGgpe3c9byh3KX1pZigtODY0ZTEzPD13JiZ3PD04NjRlMTMpe3JldHVybiB3fX1yZXR1cm4gTmFOfXJldHVybiBlLnBhcnNlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07VSh0LHtwYXJzZTpmfSk7cmV0dXJuIHR9KERhdGUpfWlmKCFEYXRlLm5vdyl7RGF0ZS5ub3c9ZnVuY3Rpb24gbm93KCl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9fXZhciBFZT11LnRvRml4ZWQmJig4ZS01LnRvRml4ZWQoMykhPT1cIjAuMDAwXCJ8fC45LnRvRml4ZWQoMCkhPT1cIjFcInx8MS4yNTUudG9GaXhlZCgyKSE9PVwiMS4yNVwifHwweGRlMGI2YjNhNzY0MDA4MC50b0ZpeGVkKDApIT09XCIxMDAwMDAwMDAwMDAwMDAwMTI4XCIpO3ZhciBJZT17YmFzZToxZTcsc2l6ZTo2LGRhdGE6WzAsMCwwLDAsMCwwXSxtdWx0aXBseTpmdW5jdGlvbiBtdWx0aXBseShlLHQpe3ZhciByPS0xO3ZhciBuPXQ7d2hpbGUoKytyPEllLnNpemUpe24rPWUqSWUuZGF0YVtyXTtJZS5kYXRhW3JdPW4lSWUuYmFzZTtuPU1hdGguZmxvb3Iobi9JZS5iYXNlKX19LGRpdmlkZTpmdW5jdGlvbiBkaXZpZGUoZSl7dmFyIHQ9SWUuc2l6ZSxyPTA7d2hpbGUoLS10Pj0wKXtyKz1JZS5kYXRhW3RdO0llLmRhdGFbdF09TWF0aC5mbG9vcihyL2UpO3I9ciVlKkllLmJhc2V9fSxudW1Ub1N0cmluZzpmdW5jdGlvbiBudW1Ub1N0cmluZygpe3ZhciBlPUllLnNpemU7dmFyIHQ9XCJcIjt3aGlsZSgtLWU+PTApe2lmKHQhPT1cIlwifHxlPT09MHx8SWUuZGF0YVtlXSE9PTApe3ZhciByPWEoSWUuZGF0YVtlXSk7aWYodD09PVwiXCIpe3Q9cn1lbHNle3QrPVooXCIwMDAwMDAwXCIsMCw3LXIubGVuZ3RoKStyfX19cmV0dXJuIHR9LHBvdzpmdW5jdGlvbiBwb3coZSx0LHIpe3JldHVybiB0PT09MD9yOnQlMj09PTE/cG93KGUsdC0xLHIqZSk6cG93KGUqZSx0LzIscil9LGxvZzpmdW5jdGlvbiBsb2coZSl7dmFyIHQ9MDt2YXIgcj1lO3doaWxlKHI+PTQwOTYpe3QrPTEyO3IvPTQwOTZ9d2hpbGUocj49Mil7dCs9MTtyLz0yfXJldHVybiB0fX07VSh1LHt0b0ZpeGVkOmZ1bmN0aW9uIHRvRml4ZWQoZSl7dmFyIHQscixuLGksbyx1LGYsczt0PWwoZSk7dD1SKHQpPzA6TWF0aC5mbG9vcih0KTtpZih0PDB8fHQ+MjApe3Rocm93IG5ldyBSYW5nZUVycm9yKFwiTnVtYmVyLnRvRml4ZWQgY2FsbGVkIHdpdGggaW52YWxpZCBudW1iZXIgb2YgZGVjaW1hbHNcIil9cj1sKHRoaXMpO2lmKFIocikpe3JldHVyblwiTmFOXCJ9aWYocjw9LTFlMjF8fHI+PTFlMjEpe3JldHVybiBhKHIpfW49XCJcIjtpZihyPDApe249XCItXCI7cj0tcn1pPVwiMFwiO2lmKHI+MWUtMjEpe289SWUubG9nKHIqSWUucG93KDIsNjksMSkpLTY5O3U9bzwwP3IqSWUucG93KDIsLW8sMSk6ci9JZS5wb3coMixvLDEpO3UqPTQ1MDM1OTk2MjczNzA0OTY7bz01Mi1vO2lmKG8+MCl7SWUubXVsdGlwbHkoMCx1KTtmPXQ7d2hpbGUoZj49Nyl7SWUubXVsdGlwbHkoMWU3LDApO2YtPTd9SWUubXVsdGlwbHkoSWUucG93KDEwLGYsMSksMCk7Zj1vLTE7d2hpbGUoZj49MjMpe0llLmRpdmlkZSgxPDwyMyk7Zi09MjN9SWUuZGl2aWRlKDE8PGYpO0llLm11bHRpcGx5KDEsMSk7SWUuZGl2aWRlKDIpO2k9SWUubnVtVG9TdHJpbmcoKX1lbHNle0llLm11bHRpcGx5KDAsdSk7SWUubXVsdGlwbHkoMTw8LW8sMCk7aT1JZS5udW1Ub1N0cmluZygpK1ooXCIwLjAwMDAwMDAwMDAwMDAwMDAwMDAwXCIsMiwyK3QpfX1pZih0PjApe3M9aS5sZW5ndGg7aWYoczw9dCl7aT1uK1ooXCIwLjAwMDAwMDAwMDAwMDAwMDAwMDBcIiwwLHQtcysyKStpfWVsc2V7aT1uK1ooaSwwLHMtdCkrXCIuXCIrWihpLHMtdCl9fWVsc2V7aT1uK2l9cmV0dXJuIGl9fSxFZSk7aWYoXCJhYlwiLnNwbGl0KC8oPzphYikqLykubGVuZ3RoIT09Mnx8XCIuXCIuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoIT09NHx8XCJ0ZXNzdFwiLnNwbGl0KC8ocykqLylbMV09PT1cInRcInx8XCJ0ZXN0XCIuc3BsaXQoLyg/OikvLC0xKS5sZW5ndGghPT00fHxcIlwiLnNwbGl0KC8uPy8pLmxlbmd0aHx8XCIuXCIuc3BsaXQoLygpKCkvKS5sZW5ndGg+MSl7KGZ1bmN0aW9uKCl7dmFyIGU9dHlwZW9mLygpPz8vLmV4ZWMoXCJcIilbMV09PT1cInVuZGVmaW5lZFwiO3ZhciB0PU1hdGgucG93KDIsMzIpLTE7by5zcGxpdD1mdW5jdGlvbihyLG4pe3ZhciBpPXRoaXM7aWYodHlwZW9mIHI9PT1cInVuZGVmaW5lZFwiJiZuPT09MCl7cmV0dXJuW119aWYoIVMocikpe3JldHVybiBKKHRoaXMscixuKX12YXIgYT1bXTt2YXIgbz0oci5pZ25vcmVDYXNlP1wiaVwiOlwiXCIpKyhyLm11bHRpbGluZT9cIm1cIjpcIlwiKSsoci51bmljb2RlP1widVwiOlwiXCIpKyhyLnN0aWNreT9cInlcIjpcIlwiKSxsPTAsdSxzLHYscDt2YXIgaD1uZXcgUmVnRXhwKHIuc291cmNlLG8rXCJnXCIpO2krPVwiXCI7aWYoIWUpe3U9bmV3IFJlZ0V4cChcIl5cIitoLnNvdXJjZStcIiQoPyFcXFxccylcIixvKX12YXIgZz10eXBlb2Ygbj09PVwidW5kZWZpbmVkXCI/dDpBLlRvVWludDMyKG4pO3M9aC5leGVjKGkpO3doaWxlKHMpe3Y9cy5pbmRleCtzWzBdLmxlbmd0aDtpZih2Pmwpe2MuY2FsbChhLFooaSxsLHMuaW5kZXgpKTtpZighZSYmcy5sZW5ndGg+MSl7c1swXS5yZXBsYWNlKHUsZnVuY3Rpb24oKXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGgtMjtlKyspe2lmKHR5cGVvZiBhcmd1bWVudHNbZV09PT1cInVuZGVmaW5lZFwiKXtzW2VdPXZvaWQgMH19fSl9aWYocy5sZW5ndGg+MSYmcy5pbmRleDxpLmxlbmd0aCl7Yy5hcHBseShhLGYuY2FsbChzLDEpKX1wPXNbMF0ubGVuZ3RoO2w9djtpZihhLmxlbmd0aD49Zyl7YnJlYWt9fWlmKGgubGFzdEluZGV4PT09cy5pbmRleCl7aC5sYXN0SW5kZXgrK31zPWguZXhlYyhpKX1pZihsPT09aS5sZW5ndGgpe2lmKHB8fCFoLnRlc3QoXCJcIikpe2MuY2FsbChhLFwiXCIpfX1lbHNle2MuY2FsbChhLFooaSxsKSl9cmV0dXJuIGEubGVuZ3RoPmc/WihhLDAsZyk6YX19KSgpfWVsc2UgaWYoXCIwXCIuc3BsaXQodm9pZCAwLDApLmxlbmd0aCl7by5zcGxpdD1mdW5jdGlvbiBzcGxpdChlLHQpe2lmKHR5cGVvZiBlPT09XCJ1bmRlZmluZWRcIiYmdD09PTApe3JldHVybltdfXJldHVybiBKKHRoaXMsZSx0KX19dmFyIERlPW8ucmVwbGFjZTt2YXIgTWU9ZnVuY3Rpb24oKXt2YXIgZT1bXTtcInhcIi5yZXBsYWNlKC94KC4pPy9nLGZ1bmN0aW9uKHQscil7Yy5jYWxsKGUscil9KTtyZXR1cm4gZS5sZW5ndGg9PT0xJiZ0eXBlb2YgZVswXT09PVwidW5kZWZpbmVkXCJ9KCk7aWYoIU1lKXtvLnJlcGxhY2U9ZnVuY3Rpb24gcmVwbGFjZShlLHQpe3ZhciByPW0odCk7dmFyIG49UyhlKSYmL1xcKVsqP10vLnRlc3QoZS5zb3VyY2UpO2lmKCFyfHwhbil7cmV0dXJuIERlLmNhbGwodGhpcyxlLHQpfWVsc2V7dmFyIGk9ZnVuY3Rpb24ocil7dmFyIG49YXJndW1lbnRzLmxlbmd0aDt2YXIgaT1lLmxhc3RJbmRleDtlLmxhc3RJbmRleD0wO3ZhciBhPWUuZXhlYyhyKXx8W107ZS5sYXN0SW5kZXg9aTtjLmNhbGwoYSxhcmd1bWVudHNbbi0yXSxhcmd1bWVudHNbbi0xXSk7cmV0dXJuIHQuYXBwbHkodGhpcyxhKX07cmV0dXJuIERlLmNhbGwodGhpcyxlLGkpfX19dmFyIE5lPW8uc3Vic3RyO3ZhciBrZT1cIlwiLnN1YnN0ciYmXCIwYlwiLnN1YnN0cigtMSkhPT1cImJcIjtVKG8se3N1YnN0cjpmdW5jdGlvbiBzdWJzdHIoZSx0KXt2YXIgcj1lO2lmKGU8MCl7cj1nKHRoaXMubGVuZ3RoK2UsMCl9cmV0dXJuIE5lLmNhbGwodGhpcyxyLHQpfX0sa2UpO3ZhciBVZT1cIlx0XFxuXHUwMDBiXFxmXFxyIFxceGEwXFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXCIrXCJcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1MjAyOFwiK1wiXFx1MjAyOVxcdWZlZmZcIjt2YXIgRmU9XCJcXHUyMDBiXCI7dmFyIFJlPVwiW1wiK1VlK1wiXVwiO3ZhciBBZT1uZXcgUmVnRXhwKFwiXlwiK1JlK1JlK1wiKlwiKTt2YXIgJGU9bmV3IFJlZ0V4cChSZStSZStcIiokXCIpO3ZhciBDZT1vLnRyaW0mJihVZS50cmltKCl8fCFGZS50cmltKCkpO1Uobyx7dHJpbTpmdW5jdGlvbiB0cmltKCl7aWYodHlwZW9mIHRoaXM9PT1cInVuZGVmaW5lZFwifHx0aGlzPT09bnVsbCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbid0IGNvbnZlcnQgXCIrdGhpcytcIiB0byBvYmplY3RcIil9cmV0dXJuIGEodGhpcykucmVwbGFjZShBZSxcIlwiKS5yZXBsYWNlKCRlLFwiXCIpfX0sQ2UpO2lmKHBhcnNlSW50KFVlK1wiMDhcIikhPT04fHxwYXJzZUludChVZStcIjB4MTZcIikhPT0yMil7cGFyc2VJbnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9L14wW3hYXS87cmV0dXJuIGZ1bmN0aW9uIHBhcnNlSW50KHIsbil7dmFyIGk9YShyKS50cmltKCk7dmFyIG89bChuKXx8KHQudGVzdChpKT8xNjoxMCk7cmV0dXJuIGUoaSxvKX19KHBhcnNlSW50KX19KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVzNS1zaGltLm1hcFxuIiwiQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmZ1bmN0aW9uIEFsZXJ0UGFuZWxEaXJlY3RpdmUoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgYWxlcnRzOiAnPScsXG4gICAgICBtb2RlOiAnQCdcbiAgICB9LFxuICAgIHRlbXBsYXRlVXJsOiBmdW5jdGlvbih0RWxlbWVudCwgdEF0dHJzKSB7XG4gICAgICAgIHJldHVybiBnZXRUZW1wbGF0ZVVybCh0QXR0cnMubW9kZSk7XG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIENvbnRyb2xsZXIoJGxvZykge1xuICB2YXIgdm0gPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJGxvZy5kZWJ1ZyhuZXcgRGF0ZSgpICsgJzogU3RhcnRpbmcgYWxlcnREaXJlY3RpdmUgaW4gbW9kZTogJyArIHZtLm1vZGUgKyAnIHdpdGggZGF0YTonLCB2bS5hbGVydHMpO1xuICB9XG5cbiAgaW5pdCgpO1xufVxuXG5mdW5jdGlvbiBnZXRUZW1wbGF0ZVVybChtb2RlKSB7XG4gIGNvbnNvbGUubG9nKCdnZXR0aW5nIHRlbXBsYXRlIGZvciBtb2RlOiAnLCBtb2RlKTtcbiAgaWYgKG1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgcmV0dXJuICcvYXBwL3RhYjQvYWxlcnRiYXIuaHRtbCc7XG4gIH1cblxuICByZXR1cm4gJy9hcHAvdGFiNC9hbGVydGxpc3QuaHRtbCc7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBBbGVydFBhbmVsRGlyZWN0aXZlO1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCdlczUtc2hpbScpO1xucmVxdWlyZSgnZXM1LXNoYW0nKTtcblxudmFyIHJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyJyksXG4gICAgYm9vdHN0cmFwcGVyID0gcmVxdWlyZSgnLi9ib290c3RyYXBwZXInKSxcbiAgICBwcm9taXNlV2FpdGVyID0gcmVxdWlyZSgnLi9wcm9taXNlV2FpdGVyQ3RybCcpLFxuICAgIGRhdGFTZXJ2aWNlID0gcmVxdWlyZSgnLi9kYXRhU2VydmljZScpLFxuICAgIHRhYnNDb250cm9sbGVyID0gcmVxdWlyZSgnLi90YWJzL3RhYnNDdHJsJyksXG4gICAgYWxlcnRQYW5lbCA9IHJlcXVpcmUoJy4vYWxlcnRzL2FsZXJ0UGFuZWxEaXJlY3RpdmUnKVxuICAgIDtcblxuLy9yZXF1aXJlKCdhbmd1bGFyLXVpLXJvdXRlcicpO1xuLy9yZXF1aXJlKCdhbmd1bGFyLXVpLWJvb3RzdHJhcCcpO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyTW9kYWxTZXJ2aWNlJ10pO1xuYXBwLnJ1bihib290c3RyYXBwZXIpO1xuYXBwLmNvbmZpZyhyb3V0ZXIpO1xuYXBwLmNvbnRyb2xsZXIoJ3Byb21pc2VXYWl0ZXInLCBwcm9taXNlV2FpdGVyKTtcbmFwcC5mYWN0b3J5KCdkYXRhU2VydmljZScsIGRhdGFTZXJ2aWNlKTtcbmFwcC5kaXJlY3RpdmUoJ2FsZXJ0UGFuZWwnLCBhbGVydFBhbmVsKTtcblxucmVxdWlyZSgnLi9kcmFnZ2FibGUvaW5kZXgnKTtcbnJlcXVpcmUoJy4vdGFicy9pbmRleCcpO1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRsb2cpIHtcbiAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgYmVnaW4uLi4nKTtcblxuXG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZC4nKTtcbn07XG4iLCIvKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGFuZ3VsYXI6IGZhbHNlLCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFjdDtcblxuZnVuY3Rpb24gQ29udGFjdCgpIHsgfVxuXG5Db250YWN0LnByb3RvdHlwZS5pc0RpcnR5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRGlydHk7XG59O1xuXG5Db250YWN0LnByb3RvdHlwZS5tYXJrRGlydHkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbn07XG5cbkNvbnRhY3QucHJvdG90eXBlLnByb3BlcnR5Q2hhbmdlZCA9IGZ1bmN0aW9uKHByb3BOYW1lKSB7XG4gICAgdGhpcy5tYXJrRGlydHkoKTtcbn07XG5cbkNvbnRhY3QucHJvdG90eXBlLmdldFNldEZpcnN0TmFtZSA9IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuICAgICAgICAvLyBhIHZhbHVlIG9yIG51bGwgb3IgdW5kZWZpbmVkIHdhcyBwYXNzLCBjb25zaWRlciBpdCBhIHNldHRlclxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuZmlyc3ROYW1lKSB7XG4gICAgICAgICAgICAvLyBzb21ldGhpbmcgaXMgY2hhbmdpbmdcbiAgICAgICAgICAgIC8vIGEgdmFsdWUgb3IgbnVsbCBvciB1bmRlZmluZWQgd2FzIHBhc3MsIGNvbnNpZGVyIGl0IGEgc2V0dGVyXG4gICAgICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5faXNEaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG59O1xuXG5Db250YWN0LnByb3RvdHlwZS5nZXRTZXRMYXN0TmFtZSA9IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gYSB2YWx1ZSBvciBudWxsIG9yIHVuZGVmaW5lZCB3YXMgcGFzcywgY29uc2lkZXIgaXQgYSBzZXR0ZXJcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLmxhc3ROYW1lKSB7XG4gICAgICAgICAgICAvLyBzb21ldGhpbmcgaXMgY2hhbmdpbmdcbiAgICAgICAgICAgIHRoaXMubGFzdE5hbWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2lzRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubGFzdE5hbWU7XG59O1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29udGFjdCA9IHJlcXVpcmUoJy4vY29udGFjdCcpO1xudmFyIERhdGEgPSByZXF1aXJlKCcuL2RhdGFTdG9yZS5qc29uJyk7XG5cbmRhdGFTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRxJywgJyR0aW1lb3V0J107XG5cbmZ1bmN0aW9uIGRhdGFTZXJ2aWNlKCRodHRwLCAkcSwgJHRpbWVvdXQpIHtcbiAgICB2YXIgY3VycmVudEl0ZW0gPSB7fSxcbiAgICAgICAgY29udGFjdCA9IG5ldyBDb250YWN0KCksXG4gICAgICAgIGl0ZW1zID0gW10sXG4gICAgICAgIGlzTG9hZGluZyA9IGZhbHNlLFxuICAgICAgICBkYXRhID0ge307XG5cbiAgICBhbmd1bGFyLmV4dGVuZChjb250YWN0LCBjdXJyZW50SXRlbSk7XG4gICAgZGF0YS5pdGVtID0gY29udGFjdDtcbiAgICBkYXRhLml0ZW1zID0gaXRlbXM7XG5cbiAgICB2YXIgc2VsZWN0ID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHNlbGYuZGF0YS5pdGVtID0ge307XG5cbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaXRlbTtcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW1JZCA9IDA7IGl0ZW1JZCA8IHNlbGYuaXRlbXMubGVuZ3RoOyBpdGVtSWQgKysgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuaXRlbXNbaXRlbUlkXSAmJiBzZWxmLml0ZW1zW2l0ZW1JZF0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBzZWxmLml0ZW1zW2l0ZW1JZF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRJdGVtID0gaXRlbTtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFjdCA9IG5ldyBDb250YWN0KCk7XG4gICAgICAgICAgICAgICAgYW5ndWxhci5leHRlbmQoY29udGFjdCwgaXRlbSk7XG4gICAgICAgICAgICAgICAgc2VsZi5kYXRhLml0ZW0gPSBjb250YWN0O1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29udGFjdCk7XG4gICAgICAgICAgICAgICAgc2VsZi5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCdVbmFibGUgdG8gbG9jYXRlIGl0ZW0gd2l0aCBpZCAnICsgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDAwKTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYnVpbGRVcChzZWxmKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IERhdGE7XG4gICAgICAgIHNlbGYuaXRlbXMgPSBpdGVtcztcbiAgICAgICAgc2VsZi5kYXRhLmtleXMgPSBbXTtcblxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIHNlbGYuZGF0YS5rZXlzLnB1c2goaXRlbXNbaV0uaWQpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuZGF0YS5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIHZhciBsb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRVcChzZWxmKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5kYXRhLml0ZW1zID0gc2VsZi5pdGVtcztcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoc2VsZi5pdGVtcyk7XG4gICAgICAgICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudEl0ZW06IGN1cnJlbnRJdGVtLFxuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIGxvYWQ6IGxvYWQsXG4gICAgICAgIHNlbGVjdDogc2VsZWN0LFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZ1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGF0YVNlcnZpY2U7XG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gICAge1xuICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgIFwiZmlyc3ROYW1lXCI6IFwiSm9oblwiLFxuICAgICAgICBcImxhc3ROYW1lXCI6IFwiRG9lXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJzdHJlZXRcIjogXCIxMjMgQW55IFN0cmVldFwiLFxuICAgICAgICAgICAgICAgIFwiY2l0eVwiOiBcIkFueXRvd25cIixcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IFwiV0FcIixcbiAgICAgICAgICAgICAgICBcInppcFwiOiBcIjk4MTAwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkb2JcIjogXCIxLzIvMTkzNFwiLFxuICAgICAgICBcImdlbmRlclwiOiBcIk1cIixcbiAgICAgICAgXCJvY2N1cGF0aW9uXCI6IFwiT2xkIEd1eVwiLFxuICAgICAgICBcImhvYmJpZXNcIjogW1xuICAgICAgICAgICAgICAgIFwiZmlzaGluZ1wiLFxuICAgICAgICAgICAgICAgIFwiZ2FiYmluZ1wiLFxuICAgICAgICAgICAgICAgIFwiZHJpbmtpbmcgY29mZmVlXCJcbiAgICAgICAgXVxuICAgIH0se1xuICAgICAgICBcImlkXCI6IDIsXG4gICAgICAgIFwiZmlyc3ROYW1lXCI6IFwiTWlzc3lcIixcbiAgICAgICAgXCJsYXN0TmFtZVwiOiBcIkJlbGxlXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJzdHJlZXRcIjogXCIyMzQgU29tZSBTdHJlZXRcIixcbiAgICAgICAgICAgICAgICBcImNpdHlcIjogXCJTb21ldG93blwiLFxuICAgICAgICAgICAgICAgIFwic3RhdGVcIjogXCJXQVwiLFxuICAgICAgICAgICAgICAgIFwiemlwXCI6IFwiOTgyMDBcIlxuICAgICAgICB9LFxuICAgICAgICBcImRvYlwiOiBcIjYvNy8xOTU3XCIsXG4gICAgICAgIFwiZ2VuZGVyXCI6IFwiRlwiLFxuICAgICAgICBcIm9jY3VwYXRpb25cIjogXCJEZWJ1dGFudGVcIixcbiAgICAgICAgXCJob2JiaWVzXCI6IFtcbiAgICAgICAgICAgICAgICBcInNob3BwaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJnb3NzaXBwaW5nXCJcbiAgICAgICAgXVxuICAgIH0se1xuICAgICAgICBcImlkXCI6IDMsXG4gICAgICAgIFwiZmlyc3ROYW1lXCI6IFwiRGV2b25cIixcbiAgICAgICAgXCJsYXN0TmFtZVwiOiBcIkR1ZGVcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IHtcbiAgICAgICAgICAgICAgICBcInN0cmVldFwiOiBcIjQ1NiAxMHRoIFN0cmVldFwiLFxuICAgICAgICAgICAgICAgIFwiY2l0eVwiOiBcIk5hcnJvd3Rvd25cIixcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IFwiV0FcIixcbiAgICAgICAgICAgICAgICBcInppcFwiOiBcIjk4MzAwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkb2JcIjogXCI4LzkvMTk4MlwiLFxuICAgICAgICBcImdlbmRlclwiOiBcIk1cIixcbiAgICAgICAgXCJvY2N1cGF0aW9uXCI6IFwiSGFja2VyXCIsXG4gICAgICAgIFwiaG9iYmllc1wiOiBbXG4gICAgICAgICAgICAgICAgXCJjb2RpbmdcIixcbiAgICAgICAgICAgICAgICBcImNhZmZlaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJtYWtpbmcgc3R1ZmZcIlxuICAgICAgICBdXG4gICAgfVxuXSIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgc3RhcnQgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICB1aS5oZWxwZXIuYWRkQ2xhc3MoJ3VpLWRyYWdnaW5nJyk7XG4gIH07XG5cbiAgdmFyIHN0b3AgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcblxuICB9O1xuXG4gIHZhciBsaW5rZXIgPSBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICBlbGVtZW50LmRyYWdnYWJsZSh7XG4gICAgICAgIGNvbnRhaW5tZW50OiAnZG9jdW1lbnQnLFxuICAgICAgICBoZWxwZXI6ICdjbG9uZScsXG4gICAgICAgIGN1cnNvcjogJ21vdmUnLFxuICAgICAgICByZXZlcnQ6ICdpbnZhbGlkJyxcbiAgICAgICAgcmV2ZXJ0RHVyYXRpb246IDUwMCxcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICBzdG9wOiBzdG9wLFxuICAgICAgICBzdGFjazogJy51aS1kcmFnZ2FibGUnXG4gICAgfSk7XG5cbiAgICB2YXIgcGFyZW50SWQgPSBlbGVtZW50LnBhcmVudCgpWzBdLmlkO1xuICAgIGVsZW1lbnQuZGF0YSgnbGlzdCcsIHBhcmVudElkKTtcbiAgICBlbGVtZW50LmFkZENsYXNzKCd1aS1kcmFnZ2FibGUnKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogbGlua2VyLFxuICAgIHNjb3BlOiB7XG4gICAgICBpdGVtU3RyaW5nOiAnQGl0ZW0nXG4gICAgfVxuICB9O1xufTtcbiIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gRHJhZ2dhYmxlTGlzdENvbnRyb2xsZXIoJGxvZykge1xuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdCRsb2cuZGVidWcoJ0luIGRyYWdnYWJsZUxpc3QgY29udHJvbGxlci4uLi4nKTtcblxuXHR2bS5vbkxpc3RNb3ZlID0gb25MaXN0TW92ZTtcblxuXHRmdW5jdGlvbiBvbkxpc3RNb3ZlKGl0ZW0sIGZyb21MaXN0SWQsIHRvTGlzdCkge1xuXHRcdCRsb2cuZGVidWcoJ01vdmluZyBpdGVtICcgKyBpdGVtLm5hbWUgKyAnIHRvIGxpc3QgJyArIHRvTGlzdC5pZCk7XG5cdFx0dm0ub25Ecm9wKCkoaXRlbSwgZnJvbUxpc3RJZCwgdG9MaXN0KTtcblx0fVxufVxuXG5EcmFnZ2FibGVMaXN0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gRHJhZ2dhYmxlTGlzdERpcmVjdGl2ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRsaXN0OiAnPScsXG5cdFx0XHRvbkRyb3A6ICcmZHJvcHBhYmxlRHJvcCdcblx0XHR9LFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3RlbXBsYXRlcy9ob3NwaXRhbC1jZW5zdXMtaXRlbS5odG1sJyxcblx0XHRjb250cm9sbGVyOiBEcmFnZ2FibGVMaXN0Q29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9O1xufTtcbiIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gQ29udHJvbGxlcigkbG9nKSB7XG5cdHZhciB2bSA9IHRoaXM7XG5cblx0JGxvZy5kZWJ1ZygnSW4gZHJhZ2dhYmxlTGlzdExpc3QgY29udHJvbGxlci4uLi4nKTtcblxuXHR2bS5vbkxpc3RNb3ZlID0gb25MaXN0TW92ZTtcblxuXHRmdW5jdGlvbiBvbkxpc3RNb3ZlKGl0ZW0sIGZyb21MaXN0SWQsIHRvTGlzdCkge1xuXHRcdCRsb2cuZGVidWcoJ01vdmluZyBpdGVtICcgKyBpdGVtLm5hbWUgKyAnIHRvIGxpc3QgJyArIHRvTGlzdC5pZCk7XG5cdFx0Ly8gZ2V0IHRoZSBsaXN0IHdlIGFyZSBwdWxsaW5nIHRoZSBpdGVtIGZyb21cblx0XHR2YXIgZnJvbUxpc3QgPSBnZXRMaXN0QnlJZChmcm9tTGlzdElkKTtcblx0XHQvLyBmaW5kIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgb3JpZ2luYXRpbmcgbGlzdFxuXHRcdHZhciBpdGVtSW5kZXggPSBpdGVtLmluZGV4O1xuXHRcdC8vIHB1dCB0aGUgaXRlbSBpbnRvIHRoZSBkZXN0aW5hdGlvbiBsaXN0XG5cdFx0dG9MaXN0Lml0ZW1zLnB1c2goZnJvbUxpc3QuaXRlbXNbaXRlbUluZGV4XSk7XG5cdFx0Ly8gcmVtb3ZlIHRoZSBpdGVtIGZyb20gdGhlIHNvdXJjZSBsaXN0XG4gICAgICAgICAgZnJvbUxpc3QuaXRlbXMuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRMaXN0QnlJZChpZCkge1xuXHRcdGZvciAodmFyIGluZGV4PTA7IGluZGV4IDwgdm0ubGlzdHMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRpZiAodm0ubGlzdHNbaW5kZXhdLmlkID09PSBpZCkge1xuXHRcdFx0XHRyZXR1cm4gdm0ubGlzdHNbaW5kZXhdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBEaXJlY3RpdmUoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRzY29wZToge1xuXHRcdFx0bGlzdHM6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvdGVtcGxhdGVzL2hvc3BpdGFsLWNlbnN1cy5odG1sJyxcblx0XHRjb250cm9sbGVyOiBDb250cm9sbGVyLFxuXHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuXHRcdHRyYW5zY2x1ZGU6IHRydWVcblx0fTtcbn07XG4iLCIvKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGFuZ3VsYXI6IGZhbHNlLCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZHJvcCA9IGZ1bmN0aW9uKGV2ZW50LCB1aSwgc2NvcGUpIHtcbiAgICAgICAgdmFyIGRyYWdJdGVtID0gYW5ndWxhci5lbGVtZW50KHVpLmRyYWdnYWJsZSkuZGF0YSgnaXRlbScpLFxuICAgICAgICAgICAgcmVqZWN0ID0gYW5ndWxhci5lbGVtZW50KHVpLmRyYWdnYWJsZSkuZGF0YSgncmVqZWN0JyksXG4gICAgICAgICAgICBkcmFnRnJvbUxpc3RJZCA9IGFuZ3VsYXIuZWxlbWVudCh1aS5kcmFnZ2FibGUpLmRhdGEoJ2xpc3QnKTtcblxuICAgICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgICAgICB1aS5kcmFnZ2FibGUuZHJhZ2dhYmxlKCdvcHRpb24nLCAncmV2ZXJ0JywgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbW92ZVRvTGlzdCA9IHNjb3BlLm1vZGVsLmxpc3Q7XG5cbiAgICAgICAgaWYgKGRyYWdJdGVtICYmIGRyYWdGcm9tTGlzdElkICYmIG1vdmVUb0xpc3QgJiYgc2NvcGUub25Ecm9wKSB7XG4gICAgICAgICAgICBzY29wZS5vbkRyb3AoKShkcmFnSXRlbSwgZHJhZ0Zyb21MaXN0SWQsIG1vdmVUb0xpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyBpdGVtcyBmcm9tIGxpc3QgdG8gbGlzdDonLCBkcmFnSXRlbSwgZHJhZ0Zyb21MaXN0SWQsIG1vdmVUb0xpc3QpO1xuICAgICAgICBzY29wZS4kYXBwbHkoKTtcbiAgICB9O1xuXG4gICAgdmFyIGxpbmsgPSBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgZWxlbWVudC5kcm9wcGFibGUoe1xuICAgICAgICAgICAgaG92ZXJDbGFzczogJ3VpLWRyb3BwYWJsZS1ob3ZlcicsXG4gICAgICAgICAgICBkcm9wOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICBkcm9wKGV2ZW50LCB1aSwgc2NvcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgbGluazogbGluayxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIG1vZGVsOiAnPWRyb3BwYWJsZU1vZGVsJyxcbiAgICAgICAgICAgIG9uRHJvcDogJyZkcm9wcGFibGVEcm9wJ1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCIvKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGFuZ3VsYXI6IGZhbHNlLCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbmRleEZpbHRlciA9IHJlcXVpcmUoJy4vaW5kZXhGaWx0ZXInKTtcbnZhciBkcm9wcGFibGUgPSByZXF1aXJlKCcuL2Ryb3BwYWJsZURpcmVjdGl2ZScpO1xudmFyIGRyYWdnYWJsZSA9IHJlcXVpcmUoJy4vZHJhZ2dhYmxlRGlyZWN0aXZlJyk7XG52YXIgbGlzdCA9IHJlcXVpcmUoJy4vZHJhZ2dhYmxlTGlzdERpcmVjdGl2ZScpO1xudmFyIGxpc3RPZkxpc3RzID0gcmVxdWlyZSgnLi9kcmFnZ2FibGVMaXN0TGlzdERpcmVjdGl2ZScpO1xuXG5hbmd1bGFyXG4gIC5tb2R1bGUoJ2FwcCcpXG4gIC5maWx0ZXIoJ2luZGV4JywgaW5kZXhGaWx0ZXIpXG4gIC5kaXJlY3RpdmUoJ2Ryb3BwYWJsZScsIGRyb3BwYWJsZSlcbiAgLmRpcmVjdGl2ZSgnZHJhZ2dhYmxlJywgZHJhZ2dhYmxlKVxuICAuZGlyZWN0aXZlKCdkcmFnZ2FibGVMaXN0JywgbGlzdClcbiAgLmRpcmVjdGl2ZSgnZHJhZ2dhYmxlTGlzdExpc3QnLCBsaXN0T2ZMaXN0cylcbiAgO1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJyYXksIGluZGV4KSB7XG4gICAgICAgIGlmICghaW5kZXgpIHtcbiAgICAgICAgICAgIGluZGV4ID0gJ2luZGV4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheVtpXVtpbmRleF0gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG59O1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZVdhaXRlckNvbnRyb2xsZXI7XG5cblByb21pc2VXYWl0ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbW9kYWxJbnN0YW5jZScsICdkYXRhJ107XG5cbmZ1bmN0aW9uIFByb21pc2VXYWl0ZXJDb250cm9sbGVyKCRzY29wZSwgJG1vZGFsSW5zdGFuY2UsIGRhdGEpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZtLm1lc3NhZ2VzID0gW107XG4gICAgdm0uc2hvd0Nsb3NlID0gZmFsc2U7XG4gICAgdm0udGl0bGUgPSBkYXRhLnRpdGxlO1xuXG4gICAgdmFyIGNsb3NlTW9kYWwgPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UocmVzdWx0KTtcbiAgICB9O1xuXG4gICAgdm0uZGlzbWlzcyA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICBjbG9zZU1vZGFsKHJlc3VsdCk7XG4gICAgfTtcblxuICAgIGFjdGl2YXRlKCk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgICAgICB2bS5tZXNzYWdlcyA9IFtdO1xuICAgICAgICB2bS5zaG93Q2xvc2UgPSBmYWxzZTtcblxuICAgICAgICBkYXRhLnByb21pc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cbiAgICAgICAgICAgIC8vIHdlIHJlc29sdmVkIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgICAgY2xvc2VNb2RhbCgnT0snKTtcblxuICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcblxuICAgICAgICAgICAgLy8gd2UgZXJyZWRcbiAgICAgICAgICAgIHZtLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZtLnNob3dDbG9zZSA9IHRydWU7XG5cbiAgICAgICAgfSwgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcblxuICAgICAgICAgICAgLy8gd2Ugd2VyZSBub3RpZmllZFxuICAgICAgICAgICAgdm0ubWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHByb2dyZXNzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2FwcC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSkge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gXCJIb21lIFJvdXRlXCI7XG5cbiAgICAgICAgICAgICAgdGhpcy5nbyA9IGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgICAkc3RhdGUuZ28ocm91dGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgIH0pXG5cbiAgICAgIC5zdGF0ZSgnZHJhZ0Ryb3AnLCB7XG4gICAgICAgICAgdXJsOiAnL2RyYWcnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2RyYWdEcm9wLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgICAgICAgIHZtLmxpc3QxID0ge1xuICAgICAgICAgICAgICAgICAgaWQ6ICdsaXN0MScsXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnU29mdHdhcmUnLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdKYXZhU2NyaXB0JywgcmVqZWN0OiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQyMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnU2FzcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdTUUwnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnSFRNTCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdKYXZhJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ05vZGVKUycgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdSdWJ5JyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xFU1MnIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB2bS5saXN0MiA9IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAnbGlzdDInLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ0JldmVyYWdlcycsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0NvZmZlZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdTY290Y2gnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQm91cmJvbicgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHZtLmxpc3QzID0ge1xuICAgICAgICAgICAgICAgICAgaWQ6ICdsaXN0MycsXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnR3JlZWsgR29kcycsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1pldXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQXRoZW5hJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1Bvc2VpZG9uJyB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2bS5saXN0NCA9IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAnbGlzdDQnLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ1ZlZ2V0YWJsZXMnLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdCcnVzc2VsIFNwcm91dHMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQ2FiYmFnZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdCcm9jY29saScgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdm0ubGlzdDUgPSB7XG4gICAgICAgICAgICAgICAgICBpZDogJ2xpc3Q1JyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdGcnVpdHMnLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdCYW5hbmFzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ09yYW5nZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQXBwbGVzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1BlYXJzJyB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2bS5saXN0cyA9IFtcbiAgICAgICAgICAgICAgICAgIHZtLmxpc3QxLFxuICAgICAgICAgICAgICAgICAgdm0ubGlzdDIsXG4gICAgICAgICAgICAgICAgICB2bS5saXN0MyxcbiAgICAgICAgICAgICAgICAgIHZtLmxpc3Q0LFxuICAgICAgICAgICAgICAgICAgdm0ubGlzdDVcbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICB2bS5vbkxpc3RNb3ZlID0gZnVuY3Rpb24obGlzdCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01vdmluZyBpdGVtICcgKyBpdGVtLm5hbWUgKyAnIHRvIGxpc3QgJyArIGxpc3QuaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgIH0pXG5cbiAgICAgIC5zdGF0ZSgndGFicycsIHtcbiAgICAgICAgICB1cmw6ICcvdGFicycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGFicy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVGFic0NvbnRyb2xsZXInLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgfSlcblxuICAgICAgLnN0YXRlKCd0YWJzLnRhYjEnLCB7XG4gICAgICAgICAgdXJsOiAnL3RhYjEnLFxuICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgIFwiXCI6IHsgdGVtcGxhdGVVcmw6ICdhcHAvdGFiMS90YWIxLmh0bWwnIH0sXG4gICAgICAgICAgICAgIFwibGVmdEB0YWJzLnRhYjFcIjoge1xuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGFiMS9sZWZ0Lmh0bWwnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCBkYXRhU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnTmVzdGVkIFRhYjEgTGVmdCc7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YVNlcnZpY2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJtaWRkbGVAdGFicy50YWIxXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjEvbWlkZGxlLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCBkYXRhU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnTmVzdGVkIFRhYjEgTWlkZGxlJztcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhU2VydmljZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInJpZ2h0QHRhYnMudGFiMVwiOiB7XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC90YWIxL3JpZ2h0Lmh0bWwnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCBkYXRhU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnTmVzdGVkIFRhYjEgUmlnaHQnO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGFTZXJ2aWNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAuc3RhdGUoJ3RhYnMudGFiMicsIHtcbiAgICAgICAgICB1cmw6ICcvdGFiMicsXG4gICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgXCJcIjogeyB0ZW1wbGF0ZVVybDogJ2FwcC90YWIyL3RhYjIuaHRtbCcgfSxcbiAgICAgICAgICAgICAgXCJsZWZ0QHRhYnMudGFiMlwiOiB7XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC90YWIyL2xlZnQuaHRtbCcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiMiBMZWZ0JztcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBkYXRhU2VydmljZS5kYXRhLml0ZW07XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwibWlkZGxlQHRhYnMudGFiMlwiOiB7XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC90YWIyL21pZGRsZS5odG1sJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gJ05lc3RlZCBUYWIyIE1pZGRsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gZGF0YVNlcnZpY2UuZGF0YS5pdGVtO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInJpZ2h0QHRhYnMudGFiMlwiOiB7XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC90YWIyL3JpZ2h0Lmh0bWwnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCBkYXRhU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnTmVzdGVkIFRhYjIgUmlnaHQnO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRhdGFTZXJ2aWNlLmRhdGEuaXRlbTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC5zdGF0ZSgndGFicy50YWIzJywge1xuICAgICAgICAgIHVybDogJy90YWIzJyxcbiAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICBcIlwiOiB7IHRlbXBsYXRlVXJsOiAnYXBwL3RhYjMvdGFiMy5odG1sJyB9LFxuICAgICAgICAgICAgICBcImxlZnRAdGFicy50YWIzXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjMvbGVmdC5odG1sJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gJ05lc3RlZCBUYWIzIFRvcCc7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gZGF0YVNlcnZpY2UuY3VycmVudEl0ZW07XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwibWlkZGxlQHRhYnMudGFiM1wiOiB7XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC90YWIzL21pZGRsZS5odG1sJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gJ05lc3RlZCBUYWIzIE1pZGRsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gZGF0YVNlcnZpY2UuY3VycmVudEl0ZW07XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicmlnaHRAdGFicy50YWIzXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjMvcmlnaHQuaHRtbCcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdOZXN0ZWQgVGFiMyBCb3R0b20nO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRhdGFTZXJ2aWNlLmN1cnJlbnRJdGVtO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLnN0YXRlKCd0YWJzLnRhYjQnLCB7XG4gICAgICAgICAgdXJsOiAnL3RhYjQnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhYjQvdGFiNERpcmVjdGl2ZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnTmVzdGVkIFRhYiA0J1xuICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhU2VydmljZS5kYXRhO1xuICAgICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC5zdGF0ZSgndGFicy50YWI1Jywge1xuICAgICAgICAgIHVybDogJy90YWI1JyxcbiAgICAgICAgICB0ZW1wbGF0ZTogJzx0YWItZm91cnRoIGRhdGE9XCJ2bS5kYXRhXCIgcHJpdmF0ZS1kYXRhPVwidm0ucHJpdmF0ZURhdGFcIj48L3RhYi1mb3VydGg+J1xuICAgICAgfSlcbiAgO1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn07XG4iLCIvKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGFuZ3VsYXI6IGZhbHNlLCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHRhYkZvdXJ0aExlZnREaXJlY3RpdmUoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRzY29wZToge1xuXHRcdFx0ZGF0YTogJz0nLFxuXHRcdFx0c3RhdGU6ICdAJ1xuXHRcdH0sXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvdGFiMS9sZWZ0Lmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG5cdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0fTtcbn1cblxuZnVuY3Rpb24gQ29udHJvbGxlcigkbG9nKSB7XG5cdHZhciB2bSA9IHRoaXM7XG5cblx0ZnVuY3Rpb24gaW5pdCgpIHtcblx0XHQkbG9nLmRlYnVnKG5ldyBEYXRlKCkgKyAnOiBTdGFydGluZyB0YWI0LWxlZnQgZGlyZWN0aXZlIHdpdGggZGF0YTonLCB2bS5kYXRhKTtcblx0fVxuXG5cdGluaXQoKTtcbn1cblxuQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbm1vZHVsZS5leHBvcnRzID0gdGFiRm91cnRoTGVmdERpcmVjdGl2ZTtcbiIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHRhYnNDdHJsID0gcmVxdWlyZSgnLi90YWJzQ3RybCcpO1xudmFyIHRhYkZvdXJ0aCA9IHJlcXVpcmUoJy4vdGFiRm91cnRoRGlyZWN0aXZlJyk7XG52YXIgdGFiRm91cnRoTGVmdCA9IHJlcXVpcmUoJy4vVGFiRm91cnRoTGVmdERpcmVjdGl2ZScpO1xudmFyIHRhYkZvdXJ0aE1pZGRsZSA9IHJlcXVpcmUoJy4vdGFiRm91cnRoTWlkZGxlRGlyZWN0aXZlJyk7XG52YXIgdGFiRm91cnRoUmlnaHQgPSByZXF1aXJlKCcuL3RhYkZvdXJ0aFJpZ2h0RGlyZWN0aXZlJyk7XG5cbmFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAuY29udHJvbGxlcignVGFic0NvbnRyb2xsZXInLCB0YWJzQ3RybClcbiAgLmRpcmVjdGl2ZSgndGFiRm91cnRoJywgdGFiRm91cnRoKVxuICAuZGlyZWN0aXZlKCd0YWJGb3VydGhMZWZ0JywgdGFiRm91cnRoTGVmdClcbiAgLmRpcmVjdGl2ZSgndGFiRm91cnRoTWlkZGxlJywgdGFiRm91cnRoTWlkZGxlKVxuICAuZGlyZWN0aXZlKCd0YWJGb3VydGhSaWdodCcsIHRhYkZvdXJ0aFJpZ2h0KVxuICA7XG4iLCIvKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGFuZ3VsYXI6IGZhbHNlLCByZXF1aXJlOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHRhYkZvdXJ0aERpcmVjdGl2ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRkYXRhOiAnPScsXG5cdFx0XHRwcml2YXRlRGF0YTogJz0nXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC90YWI0L3RhYjREaXJlY3RpdmUuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9O1xufVxuXG5mdW5jdGlvbiBDb250cm9sbGVyKCRsb2cpIHtcblx0dmFyIHZtID0gdGhpcztcblxuXHRmdW5jdGlvbiBpbml0KCkge1xuXHRcdCRsb2cuZGVidWcobmV3IERhdGUoKSArICc6IFN0YXJ0aW5nIHRhYjQgZGlyZWN0aXZlIHdpdGggZGF0YTonLCB2bS5kYXRhKTtcblx0fVxuXG5cdGluaXQoKTtcbn1cblxuQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbm1vZHVsZS5leHBvcnRzID0gdGFiRm91cnRoRGlyZWN0aXZlO1xuIiwiLyoganNsaW50IG5vZGU6IHRydWUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiB0YWJGb3VydGhNaWRkbGVDb250cm9sbGVyKCRsb2cpIHtcblx0dmFyIHZtID0gdGhpcztcblxuXHRmdW5jdGlvbiBpbml0KCkge1xuXHRcdCRsb2cuZGVidWcobmV3IERhdGUoKSArICc6IFN0YXJ0aW5nIHRhYjQtbWlkZGxlIGRpcmVjdGl2ZSB3aXRoIGRhdGE6Jywgdm0uZGF0YSk7XG5cdH1cblxuXHRpbml0KCk7XG59XG5cbnRhYkZvdXJ0aE1pZGRsZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5mdW5jdGlvbiB0YWJGb3VydGhNaWRkbGVEaXJlY3RpdmUoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRzY29wZToge1xuXHRcdFx0ZGF0YTogJz0nLFxuXHRcdFx0c3RhdGU6ICdAJ1xuXHRcdH0sXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvdGFiMS9taWRkbGUuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogdGFiRm91cnRoTWlkZGxlQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYkZvdXJ0aE1pZGRsZURpcmVjdGl2ZTtcbiIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG4vKiBnbG9iYWwgYW5ndWxhcjogZmFsc2UsIHJlcXVpcmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gQ29udHJvbGxlcigkbG9nKSB7XG5cdHZhciB2bSA9IHRoaXM7XG5cblx0ZnVuY3Rpb24gaW5pdCgpIHtcblx0XHQkbG9nLmRlYnVnKG5ldyBEYXRlKCkgKyAnOiBTdGFydGluZyB0YWI0LXJpZ2h0IGRpcmVjdGl2ZSB3aXRoIGRhdGE6Jywgdm0uZGF0YSk7XG5cdH1cblxuXHRpbml0KCk7XG59XG5cbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5mdW5jdGlvbiB0YWJGb3VydGhSaWdodERpcmVjdGl2ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRkYXRhOiAnPScsXG5cdFx0XHRzdGF0ZTogJ0AnXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC90YWIxL3JpZ2h0Lmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG5cdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0YWJGb3VydGhSaWdodERpcmVjdGl2ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIG1vZHVsZTogZmFsc2UsIHJlcXVpcmU6IGZhbHNlICovXG5cbnJlcXVpcmUoJy4uL2RhdGFTZXJ2aWNlJyk7XG5yZXF1aXJlKCcuLi9wcm9taXNlV2FpdGVyQ3RybCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRhYnNDb250cm9sbGVyO1xuXG5UYWJzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHN0YXRlJywgJyRtb2RhbCcsICdkYXRhU2VydmljZScsICdNb2RhbFNlcnZpY2UnXTtcblxuZnVuY3Rpb24gVGFic0NvbnRyb2xsZXIoJHNjb3BlLCAkc3RhdGUsICRtb2RhbCwgZGF0YVNlcnZpY2UsIE1vZGFsU2VydmljZSkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdm0uc3RhdGUgPSAnVGFicyBSb3V0ZSc7XG5cbiAgICB2bS5nbyA9IGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICAgICRzdGF0ZS5nbyhyb3V0ZSk7XG4gICAgfTtcblxuICAgIHZtLnRhYnMgPSBbXG4gICAgICB7IGlkOiAndGFicy50YWIxJywgdGl0bGU6ICdSb3V0ZWQgVGFiJywgYWN0aXZlOiB0cnVlLCBkaXNhYmxlZDogZmFsc2UsIHNlbGVjdDogXCJ2bS5nbygndGFicy50YWIxJylcIiB9LFxuICAgICAgeyBpZDogJ3RhYnMudGFiMicsIHRpdGxlOiAnUm91dGVkIFRhYiB3LyBMYXlvdXRzJywgYWN0aXZlOiBmYWxzZSwgZGlzYWJsZWQ6IGZhbHNlLCBzZWxlY3Q6IFwidm0uZ28oJ3RhYnMudGFiMicpXCIgfSxcbiAgICAgIHsgaWQ6ICd0YWJzLnRhYjMnLCB0aXRsZTogJ1RvZ2dsZWQgVGFiJywgYWN0aXZlOiBmYWxzZSwgZGlzYWJsZWQ6IHRydWUsIHNlbGVjdDogXCJ2bS5nbygndGFicy50YWIzJylcIiB9LFxuICAgICAgeyBpZDogJ3RhYnMudGFiNCcsIHRpdGxlOiAnTmVzdGVkIERpcmVjdGl2ZScsIGFjdGl2ZTogZmFsc2UsIGRpc2FibGVkOiBmYWxzZSwgc2VsZWN0OiBcInZtLmdvKCd0YWJzLnRhYjQnKVwiIH0sXG4gICAgICB7IGlkOiAndGFicy50YWI1JywgdGl0bGU6ICdSb3V0ZWQgRGlyZWN0aXZlJywgYWN0aXZlOiBmYWxzZSwgZGlzYWJsZWQ6IGZhbHNlLCBzZWxlY3Q6IFwidm0uZ28oJ3RhYnMudGFiNScpXCIgfSxcbiAgICBdO1xuXG4gICAgdm0uc2hvdWxkU2hvd05leHQgPSBzaG91bGRTaG93TmV4dDtcbiAgICB2bS5zaG93TmV4dCA9IHNob3dOZXh0O1xuICAgIHZtLnNob3VsZFNob3dQcmV2ID0gc2hvdWxkU2hvd1ByZXY7XG4gICAgdm0uc2hvd1ByZXYgPSBzaG93UHJldjtcblxuICAgIHZtLmRhdGEgPSBkYXRhU2VydmljZS5kYXRhO1xuICAgIHZtLnByaXZhdGVEYXRhID0gJ3NlY3JldCc7XG5cbiAgICBhY3RpdmF0ZSgpO1xuXG4gICAgLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldFRhYkJ5SWQoaWQpIHtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dm0udGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh2bS50YWJzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZtLnRhYnNbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlVGFiKGlkKSB7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHZtLnRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2bS50YWJzW2ldLmFjdGl2ZSA9IHZtLnRhYnNbaV0uaWQgPT09IGlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmV4dElkKGFycmF5LCBjdXJyZW50SWQpIHtcbiAgICAgICAgaWYgKCFhcnJheSkgeyByZXR1cm47IH1cbiAgICAgICAgdmFyIGluZGV4ID0gYXJyYXkuaW5kZXhPZihjdXJyZW50SWQpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheVtpbmRleCsxXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByZXZpb3VzSWQoYXJyYXksIGN1cnJlbnRJZCkge1xuICAgICAgICBpZiAoIWFycmF5KSB7IHJldHVybjsgfVxuICAgICAgICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGN1cnJlbnRJZCk7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheVtpbmRleC0xXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0N1cnJlbnRJdGVtKCkge1xuICAgICAgICByZXR1cm4gdm0uZGF0YS5pdGVtICYmIHZtLmRhdGEuaXRlbS5pZCAmJiB2bS5kYXRhLmtleXMgJiYgdm0uZGF0YS5rZXlzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG91bGRTaG93TmV4dCgpIHtcbiAgICAgICAgaWYgKGhhc0N1cnJlbnRJdGVtKCkpIHtcbiAgICAgICAgICAgIHZhciBuZXh0SWQgPSBnZXROZXh0SWQodm0uZGF0YS5rZXlzLCB2bS5kYXRhLml0ZW0uaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBuZXh0SWQgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG91bGRTaG93UHJldigpIHtcbiAgICAgICAgaWYgKGhhc0N1cnJlbnRJdGVtKCkpIHtcbiAgICAgICAgICAgIHZhciBwcmV2SWQgPSBnZXRQcmV2aW91c0lkKHZtLmRhdGEua2V5cywgdm0uZGF0YS5pdGVtLmlkKTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcHJldklkICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd05leHQoKSB7XG4gICAgICAgIHZhciBuZXh0SWQgPSBnZXROZXh0SWQodm0uZGF0YS5rZXlzLCB2bS5kYXRhLml0ZW0uaWQpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnNlbGVjdChuZXh0SWQpO1xuICAgICAgICBzaG93Qm9vdHN0cmFwTW9kYWwocHJvbWlzZSwgbmV4dElkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2V0dXBUYWJzKG5leHRJZCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcmV2KCkge1xuICAgICAgICB2YXIgcHJldklkID0gZ2V0UHJldmlvdXNJZCh2bS5kYXRhLmtleXMsIHZtLmRhdGEuaXRlbS5pZCk7XG4gICAgICAgIHZhciBwcm9taXNlID0gZGF0YVNlcnZpY2Uuc2VsZWN0KHByZXZJZCk7XG4gICAgICAgIHNob3dCb290c3RyYXBNb2RhbChwcm9taXNlLCBwcmV2SWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXR1cFRhYnMocHJldklkLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBUYWJzKGlkLCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LnByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBnZXRUYWJCeUlkKCd0YWJzLnRhYjMnKS5kaXNhYmxlZCA9IGRhdGEuaWQgJiYgZGF0YS5pZCAhPT0gMjtcbiAgICAgICAgICAgIHZtLmdvKCd0YWJzLnRhYjEnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0Jvb3RzdHJhcE1vZGFsKHByb21pc2UsIGl0ZW1JZCkge1xuICAgICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBtb2RhbCBlbnRpdHkgYW5kIHJlc29sdmUgY29udHJvbGxlclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGVtcGxhdGVzL3Byb21pc2VXYWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAncHJvbWlzZVdhaXRlcicsXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXG4gICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgICAgICAgICBzaXplOiAnc20nLFxuICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZyBpdGVtICcgKyBpdGVtSWQgKyAnLi4uJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB3ZSByZXR1cm4gc3VjY2Vzc2Z1bGx5XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIHByb21pc2U6IHByb21pc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gY2FsbGVkIHdoZW4gd2UgZGlzbWlzcyBpbnN0ZWFkIG9mIHNheWluZyAnT0snXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdDogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgICAgIC8vIHdpdGhpbiB0aGlzIHBhZ2UsIGlmIHdlIGNoYW5nZSBzdGF0ZSBzdWNjZXNzZnVsbHksIHdlIG5lZWQgdG8gdXBkYXRlIG91ciBhY3RpdmUgdGFiXG4gICAgICAgICRzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbihldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcyl7XG4gICAgICAgICAgICBzZXRBY3RpdmVUYWIodG9TdGF0ZS5uYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGF0YVNlcnZpY2UubG9hZCgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnNlbGVjdCgxKTtcbiAgICAgICAgICAgIHNob3dCb290c3RyYXBNb2RhbChwcm9taXNlLCAxKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBzZXR1cFRhYnMoMSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZSkge1xuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
