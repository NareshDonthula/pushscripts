!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return s})),n.d(t,"__decorate",(function(){return a})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return u})),n.d(t,"__awaiter",(function(){return l})),n.d(t,"__generator",(function(){return f})),n.d(t,"__exportStar",(function(){return h})),n.d(t,"__values",(function(){return d})),n.d(t,"__read",(function(){return p})),n.d(t,"__spread",(function(){return b})),n.d(t,"__spreadArrays",(function(){return g})),n.d(t,"__await",(function(){return v})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return _})),n.d(t,"__asyncValues",(function(){return w})),n.d(t,"__makeTemplateObject",(function(){return m})),n.d(t,"__importStar",(function(){return S})),n.d(t,"__importDefault",(function(){return k}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function a(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function h(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function d(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function p(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}function v(e){return this instanceof v?(this.v=e,this):new v(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=o[e](t)).value instanceof v?Promise.resolve(n.value.v).then(c,u):l(i[0][2],n)}catch(e){l(i[0][3],e)}var n}function c(e){a("next",e)}function u(e){a("throw",e)}function l(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function _(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:v(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=d(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function m(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},a=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],o=0;o<e.length;o+=3){var i=e[o],s=o+1<e.length,a=s?e[o+1]:0,c=o+2<e.length,u=c?e[o+2]:0,l=i>>2,f=(3&i)<<4|a>>4,h=(15&a)<<2|u>>6,d=63&u;c||(d=64,s||(h=64)),r.push(n[l],n[f],n[h],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){var s=((7&o)<<18|(63&(i=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{i=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],o=0;o<e.length;){var i=n[e.charAt(o++)],s=o<e.length?n[e.charAt(o)]:0,a=++o<e.length?n[e.charAt(o)]:64,c=++o<e.length?n[e.charAt(o)]:64;if(++o,null==i||null==s||null==a||null==c)throw Error();var u=i<<2|s>>4;if(r.push(u),64!==a){var l=s<<4&240|a>>2;if(r.push(l),64!==c){var f=a<<6&192|c;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){try{return c.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&(e[n]=l(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var f=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var d="FirebaseError",p=function(e){function t(n,r){var o=e.call(this,r)||this;return o.code=n,o.name=d,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,b.prototype.create),o}return r.__extends(t,e),t}(Error),b=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=t[0]||{},o=this.service+"/"+e,i=this.errors[e],s=i?g(i,r):"Error",a=this.serviceName+": "+s+" ("+o+").",c=new p(o,a),u=0,l=Object.keys(r);u<l.length;u++){var f=l[u];"_"!==f.slice(-1)&&(f in c&&console.warn('Overwriting FirebaseError base field "'+f+'" can cause unexpected behavior.'),c[f]=r[f])}return c},e}();function g(e,t){return e.replace(v,(function(e,n){var r=t[n];return null!=r?r.toString():"<"+n+"?>"}))}var v=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){return JSON.parse(e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _=function(e){var t={},n={},r={},o="";try{var i=e.split(".");t=y(u(i[0])||""),n=y(u(i[1])||""),o=i[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:o}};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var w=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var o=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(o<<1|o>>>31)}var i,s,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],f=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(i=l^c&(u^l),s=1518500249):(i=c^u^l,s=1859775393):r<60?(i=c&u|l&(c|u),s=2400959708):(i=c^u^l,s=3395469782);o=(a<<5|a>>>27)+i+f+s+n[r]&4294967295;f=l,l=u,u=4294967295&(c<<30|c>>>2),c=a,a=o}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,o=this.buf_,i=this.inbuf_;r<t;){if(0===i)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(o[i]=e.charCodeAt(r),++r,++i===this.blockSize){this.compress_(o),i=0;break}}else for(;r<t;)if(o[i]=e[r],++r,++i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[n]>>o&255,++r;return e},e}();var m=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,o=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=S),void 0===r.error&&(r.error=S),void 0===r.complete&&(r.complete=S);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?r.error(o.finalError):r.complete()}catch(e){}})),this.observers.push(r),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function S(){}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t,n){var r="";switch(t){case 1:r=n?"first":"First";break;case 2:r=n?"second":"Second";break;case 3:r=n?"third":"Third";break;case 4:r=n?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=r+" argument "}t.CONSTANTS=o,t.Deferred=f,t.ErrorFactory=b,t.FirebaseError=p,t.Sha1=w,t.assert=i,t.assertionError=s,t.async=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];Promise.resolve(!0).then((function(){e.apply(void 0,n)})).catch((function(e){t&&t(e)}))}},t.base64=c,t.base64Decode=u,t.base64Encode=function(e){var t=a(e);return c.encodeByteArray(t,!0)},t.contains=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createSubscribe=function(e,t){var n=new m(e,t);return n.subscribe.bind(n)},t.decode=_,t.deepCopy=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return l(void 0,e)},t.deepExtend=l,t.errorPrefix=k,t.getUA=h,t.isAdmin=function(e){var t=_(e).claims;return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())},t.isNode=function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}},t.isNodeSdk=function(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isValidFormat=function(e){var t=_(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){var t=_(e).claims,n=Math.floor((new Date).getTime()/1e3),r=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),o=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!o&&n>=r&&n<=o},t.issuedAtTime=function(e){var t=_(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=y,t.map=function(e,t,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=t.call(n,e[o],o,e));return r}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,t.querystring=function(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,o=Object.entries(e);r<o.length;r++){var i=o[r];n(i[0],i[1])}return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("=");t[n[0]]=n[1]}})),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},t.stringToByteArray=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);if(o>=55296&&o<=56319){var s=o-55296;i(++r<e.length,"Surrogate pair missing trail surrogate."),o=65536+(s<<10)+(e.charCodeAt(r)-56320)}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.validateArgCount=function(e,t,n,r){var o;if(r<t?o="at least "+t:r>n&&(o=0===n?"none":"no more than "+n),o)throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+o+".")},t.validateCallback=function(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw new Error(k(e,t,r)+"must be a valid function.")},t.validateContextObject=function(e,t,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw new Error(k(e,t,r)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,t.validateNamespace=function(e,t,n,r){if((!r||n)&&"string"!=typeof n)throw new Error(k(e,t,r)+"must be a valid firebase namespace.")}}).call(this,n(4))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),i=n(1),s=n(5),a=((r={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",r["bad-app-name"]="Illegal App name: '{$appName}",r["duplicate-app"]="Firebase App named '{$appName}' already exists",r["app-deleted"]="Firebase App named '{$appName}' already deleted",r["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",r),c=new i.ErrorFactory("app","Firebase",a),u="[DEFAULT]",l=[],f=function(){function e(e,t,n){this.firebase_=n,this.isDeleted_=!1,this.services_={},this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=i.deepCopy(e),this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(e){l.push(e),setTimeout((function(){return e(null)}),0)},removeAuthTokenListener:function(e){l=l.filter((function(t){return t!==e}))}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){e.firebase_.INTERNAL.removeApp(e.name_);for(var t=[],n=0,r=Object.keys(e.services_);n<r.length;n++)for(var o=r[n],i=0,s=Object.keys(e.services_[o]);i<s.length;i++){var a=s[i];t.push(e.services_[o][a])}return Promise.all(t.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))})).then((function(){e.isDeleted_=!0,e.services_={}}))},e.prototype._getService=function(e,t){if(void 0===t&&(t=u),this.checkDestroyed_(),this.services_[e]||(this.services_[e]={}),!this.services_[e][t]){var n=t!==u?t:void 0,r=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),n);this.services_[e][t]=r}return this.services_[e][t]},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=u),this.services_[e]&&this.services_[e][t]&&delete this.services_[e][t]},e.prototype.extendApp=function(e){var t=this;i.deepExtend(this,e),e.INTERNAL&&e.INTERNAL.addAuthTokenListener&&(l.forEach((function(e){t.INTERNAL.addAuthTokenListener(e)})),l=[])},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw c.create("app-deleted",{appName:this.name_})},e}();f.prototype.name&&f.prototype.options||f.prototype.delete||console.log("dc");var h="6.6.2",d=new s.Logger("@firebase/app");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(i.isBrowser()&&void 0!==self.firebase){d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var p=self.firebase.SDK_VERSION;p&&p.indexOf("LITE")>=0&&d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var b=
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){var t=
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){var t={},n={},r={},o={__esModule:!0,initializeApp:function(n,r){void 0===r&&(r={});if("object"!=typeof r||null===r){r={name:r}}var s=r;void 0===s.name&&(s.name=u);var a=s.name;if("string"!=typeof a||!a)throw c.create("bad-app-name",{appName:String(a)});if(i.contains(t,a))throw c.create("duplicate-app",{appName:a});var f=new e(n,s,o);return t[a]=f,l(f,"create"),f},app:s,apps:null,SDK_VERSION:h,INTERNAL:{registerService:function(t,u,l,f,h){void 0===h&&(h=!1);if(n[t])return d.debug("There were multiple attempts to register service "+t+"."),o[t];n[t]=u,f&&(r[t]=f,a().forEach((function(e){f("create",e)})));function p(e){if(void 0===e&&(e=s()),"function"!=typeof e[t])throw c.create("invalid-app-argument",{appName:t});return e[t]()}void 0!==l&&i.deepExtend(p,l);return o[t]=p,e.prototype[t]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=this._getService.bind(this,t);return r.apply(this,h?e:[])},p},removeApp:function(e){l(t[e],"delete"),delete t[e]},factories:n,useAsService:f}};function s(e){if(e=e||u,!i.contains(t,e))throw c.create("no-app",{appName:e});return t[e]}function a(){return Object.keys(t).map((function(e){return t[e]}))}function l(e,t){for(var o=0,i=Object.keys(n);o<i.length;o++){var s=f(e,i[o]);if(null===s)return;r[s]&&r[s](t,e)}}function f(e,t){return"serverAuth"===t?null:t}return(o.default=o,Object.defineProperty(o,"apps",{get:a}),s.App=e,o)}(f);return t.INTERNAL=o.__assign({},t.INTERNAL,{createFirebaseNamespace:e,extendNamespace:function(e){i.deepExtend(t,e)},createSubscribe:i.createSubscribe,ErrorFactory:i.ErrorFactory,deepExtend:i.deepExtend}),t}(),g=b.initializeApp;b.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.isNode()&&d.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),g.apply(void 0,e)};var v=b;t.default=v,t.firebase=v},function(e,t,n){"use strict";var r,o=(r=n(2))&&"object"==typeof r&&"default"in r?r.default:r;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e.exports=o},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t),n.d(t,"LogLevel",(function(){return r})),n.d(t,"Logger",(function(){return a})),n.d(t,"setLogLevel",(function(){return c}));
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,o=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(r||(r={}));var i=r.INFO,s=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];if(!(t<e.logLevel)){var i=(new Date).toISOString();switch(t){case r.DEBUG:case r.VERBOSE:console.log.apply(console,["["+i+"]  "+e.name+":"].concat(n));break;case r.INFO:console.info.apply(console,["["+i+"]  "+e.name+":"].concat(n));break;case r.WARN:console.warn.apply(console,["["+i+"]  "+e.name+":"].concat(n));break;case r.ERROR:console.error.apply(console,["["+i+"]  "+e.name+":"].concat(n));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}}},a=function(){function e(e){this.name=e,this._logLevel=i,this._logHandler=s,o.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in r))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!0,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,r.DEBUG].concat(e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,r.VERBOSE].concat(e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,r.INFO].concat(e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,r.WARN].concat(e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,r.ERROR].concat(e))},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(e){o.forEach((function(t){t.logLevel=e}))}},function(e,t,n){"use strict";n.r(t);class r{constructor(){this.dataBrowser=[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,match:/Trident.*rv[ :]*11\./,identity:"Explorer"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer"},{string:navigator.userAgent,match:/Mobile Safari\/([\d.]+)/,identity:"Mobile Safari",versionSearch:"/AppleWebKit/([d.]+)/"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],this.dataOS=[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,match:/Android\s([0-9\.]*)/,subString:"Android",identity:"Android"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]}getVistorInfo(){var e={};return e.browser=this.searchString(this.dataBrowser)||"An unknown browser",e.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||this.searchMobileVersion(navigator.userAgent)||"An unknown version",e.nVersion=navigator.appVersion,e.nAgent=navigator.userAgent,e.majorVersion=e.version,e.OS=this.searchString(this.dataOS)||"An unknown OS",e.device_type=this.getPlatformType(),e}searchVersion(e){var t=e.indexOf(this.versionSearchString);if(-1!=t)return parseFloat(e.substring(t+this.versionSearchString.length+1))}searchString(e){for(var t=0;t<e.length;t++){var n=e[t].string,r=e[t].prop,o=e[t].match;if(this.versionSearchString=e[t].versionSearch||e[t].identity,o&&n.match(o))return e[t].identity;if(n){if(-1!=n.indexOf(e[t].subString))return e[t].identity}else if(r)return e[t].identity}}searchMobileVersion(e){try{if(match=e.match(/Mobile Safari\/([\d.]+)/),match)return parseFloat(match[1])}catch(e){}}getPlatformType(){return navigator.userAgent.match(/mobile/i)?"Mobile":navigator.userAgent.match(/iPad|Android|Touch/i)?"Tablet":"Desktop"}getIpAddress(){fetch("https://jsonip.com",{method:"GET"}).then(e=>e.json()).then((function(e){window._push.ip=e.ip})).catch(e=>{console.log("Error:",e)})}detectFirebase(e,t){if("https:"!=window.location.protocol)return t();var n="https://pushly.500apps.com"==window.location.origin?window.location.origin+"/pushly/firebase-messaging-sw.js":window.location.origin+"/firebase-messaging-sw.js",r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return r.open("GET",n,!1),r.send(),200===r.status?e():t()}}class o{constructor(){}init(e=o){window.localStorage.getItem("_scb")&&window.sessionStorage.getItem("_scb")||e.getPushlySideApproval()}static getPushlySideApproval(){var e=document.getElementsByTagName("BODY")[0],t=document.createElement("div");t.setAttribute("id","myConsent"),t.setAttribute("style","z-index: 10; overflow-x: overlay; overflow-y: overlay; top: 0; position: absolute; left: 0;"),e.appendChild(t),document.getElementById("myConsent").innerHTML='<div style="background: #333; position: fixed;left:69px; width: 16%;"><div style="margin: 0 auto; width: 70%; color: #f0f0f0; padding: 15px;"><img src="https://pushly.s3.ap-south-1.amazonaws.com/pushly-logo+copy.png" style="width:62px;float:left;"><p style="font-size: small;">\n        Welcome to pushly\n       </p> <a id = "_push_banner_allow" style="background: #ccc; color: #333; text-decoration: none; padding: 0px 10px; border-radius: 3px; display: inline-block; border: 1px solid #aaa; border-bottom: 2px solid #aaa; cursor: pointer;">\n       Allow\n       </a> &nbsp; <a id = "_push_banner_deny" style="background: #ccc; color: #333; text-decoration: none; padding: 0px 10px; border-radius: 3px; display: inline-block; border: 1px solid #aaa; border-bottom: 2px solid #aaa; cursor: pointer;">\n       Decline</a><p style="font-size: small;">pushly wants to send notifications</p></div></div>';var n=o;document.getElementById("_push_banner_allow").addEventListener("click",(function(){n.isPushPermissionGranted(!0),document.getElementById("myConsent").style.display="none"})),document.getElementById("_push_banner_deny").addEventListener("click",(function(){n.isPushPermissionGranted(!1),document.getElementById("myConsent").style.display="none"}))}static isPushPermissionGranted(e){return o.checkPermissionStatus(e)}static checkPermissionStatus(e){return e?(window.localStorage.setItem("_scb",1),o.openChildWindow()):o.setDenySession()}static openChildWindow(){window._pushchildWindow=window.open("https://pushly.500apps.com/pushly/sw/"+window._push.apiKey,"Ratting","width=550,height=500,left=150,top=200,toolbar=0,status=0,")}static closeChildWindow(e){"close"==e&&window.close()}static setDenySession(){window.sessionStorage.setItem("_scb",1)}}const i=n(3);n(7);class s{constructor(){i.initializeApp({apiKey:"AIzaSyCHOfzwaG8QdWZQPbsD38gZQDbNmWyk3oA",authDomain:"apptitans.firebaseapp.com",databaseURL:"https://apptitans.firebaseio.com",projectId:"apptitans",storageBucket:"",messagingSenderId:"721913454836",appId:"1:721913454836:web:68de7e40f92c5197"})}init(){let e=s,t="https://pushly.500apps.com"==window.location.origin?"/pushly/firebase-messaging-sw.js":"/firebase-messaging-sw.js";navigator.serviceWorker.register(t).then(e=>{i.messaging().useServiceWorker(e)}),e.getClientSideApproval(),i.messaging().onTokenRefresh(()=>{window._pushmessaging.getToken().then(t=>{console.log("Token refreshed."),window._Pushly.setTokenSentToServer(!1),e.getFirebaseToken()}).catch(e=>{console.log("Unable to retrieve refreshed token ",e)})})}static getFirebaseToken(e=window._Pushly){i.messaging().getToken().then(t=>(t||(console.log("No Instance ID token available. Request permission to generate one."),e.setTokenSentToServer(!1),s.getClientSideApproval()),e.sendTokenToServer(t))).catch(t=>{console.log("An error occurred while retrieving token. ",t),e.setTokenSentToServer(!1)})}static getClientSideApproval(e=s){i.messaging().requestPermission().then((function(){return console.log("Have permission..."),e.getFirebaseToken()})).catch((function(e){console.log("error occured......",e),"https://pushly.500apps.com"==window.location.origin&&o.closeChildWindow("close")}))}}class a{constructor(){this.visitor_info={},this.websiteDetails={},this.clientInfo={},this.init()}init(){this.clientInfo=new r,this.visitor_info=this.clientInfo.getVistorInfo();var e=new s,t=new o;this.clientInfo.detectFirebase(e.init,t.init)}setTokenSentToServer(e){window.localStorage.setItem("sentToServer",e?"1":"0")}sendTokenToServer(e){this.isTokenSentToServer()?console.log("Token already sent to server so won't send it again unless it changes"):(console.log("Sending token to server..."),this.setTokenSentToServer(!0),this.clientInfo.getIpAddress(),this.storeToken(e))}isTokenSentToServer(){return"1"===window.localStorage.getItem("sentToServer")}storeToken(e){let t={api_key:window._push.apiKey,nVersion:this.visitor_info.nVersion,nAgent:this.visitor_info.nAgent,browserName:this.visitor_info.browser,browser_version:this.visitor_info.version,majorVersion:this.visitor_info.majorVersion,operating_system:this.visitor_info.OS,device_type:this.visitor_info.deviceType,subscription:e};fetch("https://pushly.500apps.com/pushly/get/browserdata",{method:"post",headers:{Accept:"application/json"},body:JSON.stringify(t)}).then(e=>{"https://pushly.500apps.com"==window.location.origin&&o.closeChildWindow("close")}).catch(e=>{console.log("Error:",e),"https://pushly.500apps.com"==window.location.origin&&o.closeChildWindow("close")})}}window._Pushly=new a},function(e,t,n){"use strict";n.r(t);var r,o,i,s=n(2),a=n.n(s),c=n(0),u=n(1),l=((r={})["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["should-be-overriden"]="This method should be overriden by extended classes.",r["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",r["permission-default"]="The required permissions were not granted and dismissed instead.",r["permission-blocked"]="The required permissions were not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["notifications-blocked"]="Notifications have been blocked.",r["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["sw-registration-expected"]="A service worker registration was the expected input.",r["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",r["invalid-saved-token"]="Unable to access details of the saved token.",r["sw-reg-redundant"]="The service worker being used for push was made redundant.",r["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",r["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-before-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",r["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",r["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",r["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",r["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",r["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",r["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",r["failed-to-delete-token"]="Unable to delete the currently saved token.",r["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",r["bad-scope"]="The service worker scope must be a string with at least one character.",r["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",r["bad-subscription"]="The subscription must be a valid PushSubscription.",r["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",r["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",r["failed-delete-vapid-key"]="The VAPID key could not be deleted.",r["invalid-public-vapid-key"]="The public VAPID key must be a string.",r["use-public-key-before-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r["public-vapid-key-decryption-failed"]="The public VAPID key did not equal 65 bytes when decrypted.",r),f=new u.ErrorFactory("messaging","Messaging",l),h=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),d="https://fcm.googleapis.com";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(e,t){if(null==e||null==t)return!1;if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(var n=new DataView(e),r=new DataView(t),o=0;o<e.byteLength;o++)if(n.getUint8(o)!==r.getUint8(o))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){return function(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(c.__spread)(t)))}(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e.TYPE_OF_MSG="firebase-messaging-msg-type",e.DATA="firebase-messaging-msg-data"}(o||(o={})),function(e){e.PUSH_MSG_RECEIVED="push-msg-received",e.NOTIFICATION_CLICKED="notification-clicked"}(i||(i={}));var g=function(){function e(){}return e.prototype.getToken=function(e,t,n){return Object(c.__awaiter)(this,void 0,void 0,(function(){var r,o,i,s,a,u,l,g,v;return Object(c.__generator)(this,(function(c){switch(c.label){case 0:r=b(t.getKey("p256dh")),o=b(t.getKey("auth")),i="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+r+"&encryption_auth="+o,p(n.buffer,h.buffer)||(s=b(n),i+="&application_pub_key="+s),(a=new Headers).append("Content-Type","application/x-www-form-urlencoded"),u={method:"POST",headers:a,body:i},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(d+"/fcm/connect/subscribe",u)];case 2:return[4,c.sent().json()];case 3:return l=c.sent(),[3,5];case 4:throw g=c.sent(),f.create("token-subscribe-failed",{errorInfo:g});case 5:if(l.error)throw v=l.error.message,f.create("token-subscribe-failed",{errorInfo:v});if(!l.token)throw f.create("token-subscribe-no-token");if(!l.pushSet)throw f.create("token-subscribe-no-push-set");return[2,{token:l.token,pushSet:l.pushSet}]}}))}))},e.prototype.updateToken=function(e,t,n,r,o){return Object(c.__awaiter)(this,void 0,void 0,(function(){var i,s,a,u,l,g,v,y,_;return Object(c.__generator)(this,(function(c){switch(c.label){case 0:i=b(r.getKey("p256dh")),s=b(r.getKey("auth")),a="push_set="+n+"&token="+t+"&authorized_entity="+e+"&endpoint="+r.endpoint+"&encryption_key="+i+"&encryption_auth="+s,p(o.buffer,h.buffer)||(u=b(o),a+="&application_pub_key="+u),(l=new Headers).append("Content-Type","application/x-www-form-urlencoded"),g={method:"POST",headers:l,body:a},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(d+"/fcm/connect/subscribe",g)];case 2:return[4,c.sent().json()];case 3:return v=c.sent(),[3,5];case 4:throw y=c.sent(),f.create("token-update-failed",{errorInfo:y});case 5:if(v.error)throw _=v.error.message,f.create("token-update-failed",{errorInfo:_});if(!v.token)throw f.create("token-update-no-token");return[2,v.token]}}))}))},e.prototype.deleteToken=function(e,t,n){return Object(c.__awaiter)(this,void 0,void 0,(function(){var r,o,i,s,a,u;return Object(c.__generator)(this,(function(c){switch(c.label){case 0:r="authorized_entity="+e+"&token="+t+"&pushSet="+n,(o=new Headers).append("Content-Type","application/x-www-form-urlencoded"),i={method:"POST",headers:o,body:r},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(d+"/fcm/connect/unsubscribe",i)];case 2:return[4,c.sent().json()];case 3:if((s=c.sent()).error)throw a=s.error.message,f.create("token-unsubscribe-failed",{errorInfo:a});return[3,5];case 4:throw u=c.sent(),f.create("token-unsubscribe-failed",{errorInfo:u});case 5:return[2]}}))}))},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var y="undefined",_="fcm_token_object_Store";function w(){var e=indexedDB.open(y);e.onerror=function(e){},e.onsuccess=function(t){!function(e){if(e.objectStoreNames.contains(_)){var t=e.transaction(_).objectStore(_),n=new g,r=t.openCursor();r.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},r.onsuccess=function(){var t=r.result;if(t){var o=t.value;n.deleteToken(o.fcmSenderId,o.fcmToken,o.fcmPushSet),t.continue()}else e.close(),indexedDB.deleteDatabase(y)}}}(e.result)}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m=function(){function e(){this.dbPromise=null}return e.prototype.get=function(e){return this.createTransaction((function(t){return t.get(e)}))},e.prototype.getIndex=function(e,t){return this.createTransaction((function(n){return n.index(e).get(t)}))},e.prototype.put=function(e){return this.createTransaction((function(t){return t.put(e)}),"readwrite")},e.prototype.delete=function(e){return this.createTransaction((function(t){return t.delete(e)}),"readwrite")},e.prototype.closeDatabase=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){switch(e.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2];case 1:e.sent().close(),this.dbPromise=null,e.label=2;case 2:return[2]}}))}))},e.prototype.createTransaction=function(e,t){return void 0===t&&(t="readonly"),Object(c.__awaiter)(this,void 0,void 0,(function(){var n,r,o,i;return Object(c.__generator)(this,(function(s){switch(s.label){case 0:return[4,this.getDb()];case 1:return n=s.sent(),r=n.transaction(this.objectStoreName,t),o=r.objectStore(this.objectStoreName),[4,S(e(o))];case 2:return i=s.sent(),[2,new Promise((function(e,t){r.oncomplete=function(){e(i)},r.onerror=function(){t(r.error)}}))]}}))}))},e.prototype.getDb=function(){var e=this;return this.dbPromise||(this.dbPromise=new Promise((function(t,n){var r=indexedDB.open(e.dbName,e.dbVersion);r.onsuccess=function(){t(r.result)},r.onerror=function(){e.dbPromise=null,n(r.error)},r.onupgradeneeded=function(t){return e.onDbUpgrade(r,t)}}))),this.dbPromise},e}();function S(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_token_details_db",t.dbVersion=3,t.objectStoreName="fcm_token_object_Store",t}return Object(c.__extends)(t,e),t.prototype.onDbUpgrade=function(e,t){var n=e.result;switch(t.oldVersion){case 0:(r=n.createObjectStore(this.objectStoreName,{keyPath:"swScope"})).createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0});case 1:w();case 2:var r,o=(r=e.transaction.objectStore(this.objectStoreName)).openCursor();o.onsuccess=function(){var e=o.result;if(e){var t=e.value,n=Object(c.__assign)({},t);t.createTime||(n.createTime=Date.now()),"string"==typeof t.vapidKey&&(n.vapidKey=v(t.vapidKey)),"string"==typeof t.auth&&(n.auth=v(t.auth).buffer),"string"==typeof t.auth&&(n.p256dh=v(t.p256dh).buffer),e.update(n),e.continue()}}}},t.prototype.getTokenDetailsFromToken=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){if(!e)throw f.create("bad-token");return T({fcmToken:e}),[2,this.getIndex("fcmToken",e)]}))}))},t.prototype.getTokenDetailsFromSWScope=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){if(!e)throw f.create("bad-scope");return T({swScope:e}),[2,this.get(e)]}))}))},t.prototype.saveTokenDetails=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){if(!e.swScope)throw f.create("bad-scope");if(!e.vapidKey)throw f.create("bad-vapid-key");if(!e.endpoint||!e.auth||!e.p256dh)throw f.create("bad-subscription");if(!e.fcmSenderId)throw f.create("bad-sender-id");if(!e.fcmToken)throw f.create("bad-token");if(!e.fcmPushSet)throw f.create("bad-push-set");return T(e),[2,this.put(e)]}))}))},t.prototype.deleteToken=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t;return Object(c.__generator)(this,(function(n){switch(n.label){case 0:return"string"!=typeof e||0===e.length?[2,Promise.reject(f.create("invalid-delete-token"))]:[4,this.getTokenDetailsFromToken(e)];case 1:if(!(t=n.sent()))throw f.create("delete-token-not-found");return[4,this.delete(t.swScope)];case 2:return n.sent(),[2,t]}}))}))},t}(m);function T(e){if(e.fcmToken&&("string"!=typeof e.fcmToken||0===e.fcmToken.length))throw f.create("bad-token");if(e.swScope&&("string"!=typeof e.swScope||0===e.swScope.length))throw f.create("bad-scope");if(e.vapidKey&&(!(e.vapidKey instanceof Uint8Array)||65!==e.vapidKey.length))throw f.create("bad-vapid-key");if(e.endpoint&&("string"!=typeof e.endpoint||0===e.endpoint.length))throw f.create("bad-subscription");if(e.auth&&!(e.auth instanceof ArrayBuffer))throw f.create("bad-subscription");if(e.p256dh&&!(e.p256dh instanceof ArrayBuffer))throw f.create("bad-subscription");if(e.fcmSenderId&&("string"!=typeof e.fcmSenderId||0===e.fcmSenderId.length))throw f.create("bad-sender-id");if(e.fcmPushSet&&("string"!=typeof e.fcmPushSet||0===e.fcmPushSet.length))throw f.create("bad-push-set")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_vapid_details_db",t.dbVersion=1,t.objectStoreName="fcm_vapid_object_Store",t}return Object(c.__extends)(t,e),t.prototype.onDbUpgrade=function(e){e.result.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},t.prototype.getVapidFromSWScope=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t;return Object(c.__generator)(this,(function(n){switch(n.label){case 0:if("string"!=typeof e||0===e.length)throw f.create("bad-scope");return[4,this.get(e)];case 1:return[2,(t=n.sent())?t.vapidKey:void 0]}}))}))},t.prototype.saveVapidDetails=function(e,t){return Object(c.__awaiter)(this,void 0,void 0,(function(){var n;return Object(c.__generator)(this,(function(r){if("string"!=typeof e||0===e.length)throw f.create("bad-scope");if(null===t||65!==t.length)throw f.create("bad-vapid-key");return n={swScope:e,vapidKey:t},[2,this.put(n)]}))}))},t.prototype.deleteVapidDetails=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t;return Object(c.__generator)(this,(function(n){switch(n.label){case 0:return[4,this.getVapidFromSWScope(e)];case 1:if(!(t=n.sent()))throw f.create("delete-scope-not-found");return[4,this.delete(e)];case 2:return n.sent(),[2,t]}}))}))},t}(m),A="messagingSenderId",E=function(){function e(e){var t=this;if(!e.options[A]||"string"!=typeof e.options[A])throw f.create("bad-sender-id");this.messagingSenderId=e.options[A],this.tokenDetailsModel=new k,this.vapidDetailsModel=new O,this.iidModel=new g,this.app=e,this.INTERNAL={delete:function(){return t.delete()}}}return e.prototype.getToken=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){var e,t,n,r,o;return Object(c.__generator)(this,(function(i){switch(i.label){case 0:if("denied"===(e=this.getNotificationPermission_()))throw f.create("notifications-blocked");return"granted"!==e?[2,null]:[4,this.getSWRegistration_()];case 1:return t=i.sent(),[4,this.getPublicVapidKey_()];case 2:return n=i.sent(),[4,this.getPushSubscription(t,n)];case 3:return r=i.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];case 4:return(o=i.sent())?[2,this.manageExistingToken(t,r,n,o)]:[2,this.getNewToken(t,r,n)]}}))}))},e.prototype.manageExistingToken=function(e,t,n,r){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(o){switch(o.label){case 0:return function(e,t,n){if(!n.vapidKey||!p(t.buffer,n.vapidKey.buffer))return!1;var r=e.endpoint===n.endpoint,o=p(e.getKey("auth"),n.auth),i=p(e.getKey("p256dh"),n.p256dh);return r&&o&&i}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,n,r)?Date.now()<r.createTime+6048e5?[2,r.fcmToken]:[2,this.updateToken(e,t,n,r)]:[4,this.deleteTokenFromDB(r.fcmToken)];case 1:return o.sent(),[2,this.getNewToken(e,t,n)]}}))}))},e.prototype.updateToken=function(e,t,n,r){return Object(c.__awaiter)(this,void 0,void 0,(function(){var o,i,s;return Object(c.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,4,,6]),[4,this.iidModel.updateToken(this.messagingSenderId,r.fcmToken,r.fcmPushSet,t,n)];case 1:return o=a.sent(),i={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:o,fcmPushSet:r.fcmPushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)];case 2:return a.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return a.sent(),[2,o];case 4:return s=a.sent(),[4,this.deleteToken(r.fcmToken)];case 5:throw a.sent(),s;case 6:return[2]}}))}))},e.prototype.getNewToken=function(e,t,n){return Object(c.__awaiter)(this,void 0,void 0,(function(){var r,o;return Object(c.__generator)(this,(function(i){switch(i.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,t,n)];case 1:return r=i.sent(),o={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:r.token,fcmPushSet:r.pushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)];case 2:return i.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return i.sent(),[2,r.token]}}))}))},e.prototype.deleteToken=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(c.__generator)(this,(function(r){switch(r.label){case 0:return[4,this.deleteTokenFromDB(e)];case 1:return r.sent(),[4,this.getSWRegistration_()];case 2:return(t=r.sent())?[4,t.pushManager.getSubscription()]:[3,4];case 3:if(n=r.sent())return[2,n.unsubscribe()];r.label=4;case 4:return[2,!0]}}))}))},e.prototype.deleteTokenFromDB=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t;return Object(c.__generator)(this,(function(n){switch(n.label){case 0:return[4,this.tokenDetailsModel.deleteToken(e)];case 1:return t=n.sent(),[4,this.iidModel.deleteToken(t.fcmSenderId,t.fcmToken,t.fcmPushSet)];case 2:return n.sent(),[2]}}))}))},e.prototype.getPushSubscription=function(e,t){return e.pushManager.getSubscription().then((function(n){return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})}))},e.prototype.requestPermission=function(){throw f.create("only-available-in-window")},e.prototype.useServiceWorker=function(e){throw f.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){throw f.create("only-available-in-window")},e.prototype.onMessage=function(e,t,n){throw f.create("only-available-in-window")},e.prototype.onTokenRefresh=function(e,t,n){throw f.create("only-available-in-window")},e.prototype.setBackgroundMessageHandler=function(e){throw f.create("only-available-in-sw")},e.prototype.delete=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){switch(e.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])];case 1:return e.sent(),[2]}}))}))},e.prototype.getNotificationPermission_=function(){return Notification.permission},e.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},e.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},e.prototype.getIidModel=function(){return this.iidModel},e}();var j=function(e){function t(t){var n=e.call(this,t)||this;return n.bgMessageHandler=null,self.addEventListener("push",(function(e){n.onPush(e)})),self.addEventListener("pushsubscriptionchange",(function(e){n.onSubChange(e)})),self.addEventListener("notificationclick",(function(e){n.onNotificationClick(e)})),n}return Object(c.__extends)(t,e),t.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},t.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},t.prototype.onNotificationClick=function(e){e.waitUntil(this.onNotificationClick_(e))},t.prototype.onPush_=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o,i,s;return Object(c.__generator)(this,(function(a){switch(a.label){case 0:if(!e.data)return[2];try{t=e.data.json()}catch(e){return[2]}return[4,this.hasVisibleClients_()];case 1:return a.sent()?[2,this.sendMessageToWindowClients_(t)]:(n=this.getNotificationData_(t))?(r=n.title||"",[4,this.getSWRegistration_()]):[3,3];case 2:return o=a.sent(),i=n.actions,s=Notification.maxActions,i&&s&&i.length>s&&console.warn("This browser only supports "+s+" actions.The remaining actions will not be displayed."),[2,o.showNotification(r,n)];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:return a.sent(),[2];case 5:return[2]}}))}))},t.prototype.onSubChange_=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var e,t,n,r;return Object(c.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.getSWRegistration_()];case 1:return e=o.sent(),[3,3];case 2:throw t=o.sent(),f.create("unable-to-resubscribe",{errorInfo:t});case 3:return o.trys.push([3,5,,8]),[4,e.pushManager.getSubscription()];case 4:return o.sent(),[3,8];case 5:return n=o.sent(),[4,this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)];case 6:if(!(r=o.sent()))throw n;return[4,this.deleteToken(r.fcmToken)];case 7:throw o.sent(),n;case 8:return[2]}}))}))},t.prototype.onNotificationClick_=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o;return Object(c.__generator)(this,(function(s){switch(s.label){case 0:return e.notification&&e.notification.data&&e.notification.data.FCM_MSG?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(t=e.notification.data.FCM_MSG).notification&&(n=t.fcmOptions&&t.fcmOptions.link||t.notification.click_action)?[4,this.getWindowClient_(n)]:[2]):[2];case 1:return(r=s.sent())?[3,3]:[4,self.clients.openWindow(n)];case 2:return r=s.sent(),[3,5];case 3:return[4,r.focus()];case 4:r=s.sent(),s.label=5;case 5:return r?(delete t.notification,delete t.fcmOptions,o=N(i.NOTIFICATION_CLICKED,t),[2,this.attemptToMessageClient_(r,o)]):[2]}}))}))},t.prototype.getNotificationData_=function(e){var t;if(e&&"object"==typeof e.notification){var n=Object(c.__assign)({},e.notification);return n.data=Object(c.__assign)({},e.notification.data,((t={}).FCM_MSG=e,t)),n}},t.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw f.create("bg-handler-function-expected");this.bgMessageHandler=e},t.prototype.getWindowClient_=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o;return Object(c.__generator)(this,(function(i){switch(i.label){case 0:return t=new URL(e,self.location.href).href,[4,P()];case 1:for(n=i.sent(),r=null,o=0;o<n.length;o++)if(new URL(n[o].url,self.location.href).href===t){r=n[o];break}return[2,r]}}))}))},t.prototype.attemptToMessageClient_=function(e,t){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(n){if(!e)throw f.create("no-window-client-to-msg");return e.postMessage(t),[2]}))}))},t.prototype.hasVisibleClients_=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){switch(e.label){case 0:return[4,P()];case 1:return[2,e.sent().some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))]}}))}))},t.prototype.sendMessageToWindowClients_=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t,n,r=this;return Object(c.__generator)(this,(function(o){switch(o.label){case 0:return[4,P()];case 1:return t=o.sent(),n=N(i.PUSH_MSG_RECEIVED,e),[4,Promise.all(t.map((function(e){return r.attemptToMessageClient_(e,n)})))];case 2:return o.sent(),[2]}}))}))},t.prototype.getSWRegistration_=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){return[2,self.registration]}))}))},t.prototype.getPublicVapidKey_=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(c.__generator)(this,(function(n){switch(n.label){case 0:return[4,this.getSWRegistration_()];case 1:if(!(e=n.sent()))throw f.create("sw-registration-expected");return[4,this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];case 2:return null==(t=n.sent())?[2,h]:[2,t]}}))}))},t}(E);function P(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function N(e,t){var n;return(n={})[o.TYPE_OF_MSG]=e,n[o.DATA]=t,n
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var D,I,C=function(e){function t(t){var n=e.call(this,t)||this;return n.registrationToUse=null,n.publicVapidKeyToUse=null,n.messageObserver=null,n.tokenRefreshObserver=null,n.onMessageInternal=Object(u.createSubscribe)((function(e){n.messageObserver=e})),n.onTokenRefreshInternal=Object(u.createSubscribe)((function(e){n.tokenRefreshObserver=e})),n.setupSWMessageListener_(),n}return Object(c.__extends)(t,e),t.prototype.requestPermission=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){var e;return Object(c.__generator)(this,(function(t){switch(t.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?f.create("permission-blocked"):f.create("permission-default")}}))}))},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw f.create("sw-registration-expected");if(null!=this.registrationToUse)throw f.create("use-sw-before-get-token");this.registrationToUse=e},t.prototype.usePublicVapidKey=function(e){if("string"!=typeof e)throw f.create("invalid-public-vapid-key");if(null!=this.publicVapidKeyToUse)throw f.create("use-public-key-before-get-token");var t=v(e);if(65!==t.length)throw f.create("public-vapid-key-decryption-failed");this.publicVapidKeyToUse=t},t.prototype.onMessage=function(e,t,n){return"function"==typeof e?this.onMessageInternal(e,t,n):this.onMessageInternal(e)},t.prototype.onTokenRefresh=function(e,t,n){return"function"==typeof e?this.onTokenRefreshInternal(e,t,n):this.onTokenRefreshInternal(e)},t.prototype.waitForRegistrationToActivate_=function(e){var t=e.installing||e.waiting||e.active;return new Promise((function(n,r){if(t)if("activated"!==t.state)if("redundant"!==t.state){var o=function(){if("activated"===t.state)n(e);else{if("redundant"!==t.state)return;r(f.create("sw-reg-redundant"))}t.removeEventListener("statechange",o)};t.addEventListener("statechange",o)}else r(f.create("sw-reg-redundant"));else n(e);else r(f.create("no-sw-in-reg"))}))},t.prototype.getSWRegistration_=function(){var e=this;return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch((function(e){throw f.create("failed-serviceworker-registration",{browserErrorMessage:e.message})})).then((function(t){return e.waitForRegistrationToActivate_(t).then((function(){return e.registrationToUse=t,t.update(),t}))})))},t.prototype.getPublicVapidKey_=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,h]}))}))},t.prototype.setupSWMessageListener_=function(){var e=this;navigator.serviceWorker.addEventListener("message",(function(t){if(t.data&&t.data[o.TYPE_OF_MSG]){var n=t.data;switch(n[o.TYPE_OF_MSG]){case i.PUSH_MSG_RECEIVED:case i.NOTIFICATION_CLICKED:var r=n[o.DATA];e.messageObserver&&e.messageObserver.next(r)}}}),!1)},t}(E);function M(){return self&&"ServiceWorkerGlobalScope"in self?"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}D=a.a,I={isSupported:M},D.INTERNAL.registerService("messaging",(function(e){if(!M())throw f.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new j(e):new C(e)}),I)}]);