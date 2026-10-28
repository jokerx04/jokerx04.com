(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,742033,e=>{"use strict";let t,i,a;var r=e.i(271645),n=Object.create,s=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,d=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=function(e,t){return function(){return e&&(t=e(e=0)),t}},h=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};function m(e,t){return null!=t&&"u">typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):m(e,t)}var p=c(function(){p()});function v(e){return e&&"u">typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var b=c(function(){}),g=h(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),f=h(function(e,t){function i(e,t){if(!m(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}p(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),E=h(function(e,t){function i(e,t){if(!m(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}p(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),y=h(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),_=h(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),T=h(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),k=h(function(e,t){b(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var i in e)(function(e,t){var i=v(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),A=h(function(e,t){p();var i=g(),a=y(),r=_(),n=T(),s=k(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!m(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),w=h(function(e,t){p();var i=A();function a(e){if(!m(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),S=h(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),I=h(function(e,t){p();var i=g(),a=f(),r=E(),n=A(),s=w(),o=S(),l=y(),d=_(),u=T();function c(){if(!m(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),C=h(function(e,t){t.exports=new(I())}),R=h(function(t,i){var a,r=e.g,n=C();"u">typeof document?a=document:(a=r["__GLOBAL_DOCUMENT_CACHE@4"])||(a=r["__GLOBAL_DOCUMENT_CACHE@4"]=n),i.exports=a});function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function M(e,t){if(e){if("string"==typeof e)return L(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return L(e,t)}}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||M(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var D="u">typeof globalThis?globalThis:"u">typeof window?window:"u">typeof self?self:{},O=function(){var e=D.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())},P=function(){if("function"==typeof(null==(e=D.crypto)?void 0:e.getRandomValues)){i=new Uint8Array(32),D.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=O(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},N=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},U=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=N()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},H=function(e){e&&void 0!==e.nodeName?e=U(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function W(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||M(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,W(o)),d=(i=console.info).bind.apply(i,W(o)),u=(a=console.debug).bind.apply(a,W(o)),c=(r=console.warn).bind.apply(r,W(o)),h=(n=console.error).bind.apply(n,W(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>0))return l.apply(void 0,W(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>1))return u.apply(void 0,W(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>2))return d.apply(void 0,W(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>3))return c.apply(void 0,W(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>4))return h.apply(void 0,W(t))},get level(){return m},set level(e){e!==this.level&&(m=null!=e?e:s)}}}("[mux]");function $(){return"1"===(D.doNotTrack||D.navigator&&D.navigator.doNotTrack)}function q(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){if(!m(e,t))throw TypeError("Cannot call a class as a function")}function F(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function K(e,t,i){return t&&F(e.prototype,t),i&&F(e,i),e}function j(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t,i){return(Y="u">typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}function Z(e){var t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,a=G(e);return i=t?Reflect.construct(a,arguments,G(this).constructor):a.apply(this,arguments),i&&("object"===v(i)||"function"==typeof i)?i:q(this)}}p(),b();var X=function(e){return J(e)[0]},J=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},ee=function(){var e=D.performance;return void 0!==(e&&e.timing)},et=function(){var e=D.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},ei=function(){var e=D.performance,t=e&&e.timing;return t&&t.navigationStart};function ea(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function er(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){j(e,t,i[t])})}return e}function en(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t.push.apply(t,i)}return t})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var es=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],eo=["x-cdn","content-type"].concat(es);function el(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(eo.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function ed(e){if(e){var t=es.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var eu=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},ec=["addtrack","removetrack","change"],eh=function(e,t){try{if(e&&t in e){var i,a=e[t];if(a&&"object"==typeof a&&"length"in a&&"number"==typeof a.length&&(i=a)&&"object"==typeof i&&"addEventListener"in i&&"function"==typeof i.addEventListener&&"removeEventListener"in i&&"function"==typeof i.removeEventListener)return a}}catch(e){B.warn("Unable to access `"+t+"` on the media element.",e)}},em=function(e,t,i){if(!(e.readyState<1))return Array.prototype.find.call(t,i)||null},ep=function(e,t,i,a){var r=eh(e,t);if(r){var n,s=function(){try{var s=em(e,r,i);void 0!==s&&s!==n&&(n=s,a(n))}catch(e){B.warn("Exception while checking `"+t+"` for changes.",e)}},o=function(){try{e.removeEventListener("loadedmetadata",s),e.removeEventListener("emptied",s),ec.forEach(function(e){return r.removeEventListener(e,s)})}catch(e){B.warn("Unable to stop monitoring `"+t+"`.",e)}};try{ec.forEach(function(e){return r.addEventListener(e,s)}),e.addEventListener("loadedmetadata",s),e.addEventListener("emptied",s)}catch(e){B.warn("Unable to monitor `"+t+"`.",e),o();return}return{refresh:s,destroy:o}}},ev=function(e){switch(e){case 1:return"mono";case 2:return"stereo";case 6:return"5.1";case 8:return"7.1"}return String(e)},eb=function(e){if(!e)return{player_audio_track_enabled:!1};var t,i,a={player_audio_track_enabled:!0};return e.label&&(a.player_audio_track_name=e.label),e.language&&(a.player_audio_track_language=e.language),null!=(t=e.configuration)&&t.codec&&(a.player_audio_track_codec=e.configuration.codec),null!=(i=e.configuration)&&i.numberOfChannels&&(a.player_audio_track_channels=ev(e.configuration.numberOfChannels)),a},eg=function(e){return e.enabled},ef=function(e){var t=eh(e,"audioTracks");if(t){var i=em(e,t,eg);return void 0===i?void 0:eb(i)}if("mozHasAudio"in e&&"boolean"==typeof e.mozHasAudio)return{player_audio_track_enabled:e.mozHasAudio}},eE=function(e){var t=e.mediaElement,i=e.onChange;return ep(t,"audioTracks",eg,function(e){return i(eb(e))})},ey=function(e){switch(e){case"captions":return"cc";case"subtitles":case"forced":return"subtitles"}},e_=function(e){return"showing"===e.mode&&void 0!==ey(e.kind)},eT=function(e,t){if(Array.prototype.some.call(t.querySelectorAll("track"),function(t){return t.track===e}))return"webvtt"},ek=function(e,t){if(!e)return{player_text_track_enabled:!1};var i={player_text_track_enabled:!0},a=ey(e.kind);a&&(i.player_text_track_type=a);var r=eT(e,t);return r&&(i.player_text_track_format=r),e.label&&(i.player_text_track_name=e.label),e.language&&(i.player_text_track_language=e.language),i},eA=function(e){var t=eh(e,"textTracks");if(t){var i=em(e,t,e_);if(void 0!==i)return ek(i,e)}},ew=function(e){var t=e.mediaElement,i=e.onChange;return ep(t,"textTracks",e_,function(e){return i(ek(e,t))})},eS=function(e,t){var i=Object.keys(e),a=Object.keys(t);return i.length===a.length&&i.every(function(i){return Object.prototype.hasOwnProperty.call(t,i)&&e[i]===t[i]})},eI=function(e){if(e){if((e=String(e)).endsWith("/JOC"))return"atmos";var t=parseInt(e,10);return String(t)===e?ev(t):e}},eC=function(e){if(e.length)return e[0].player_audio_track_enabled?e.reduce(function(e,t){return er({},t,e)}):{player_audio_track_enabled:!1}},eR=function(e){var t,i={player_audio_track_enabled:!0};e.name&&(i.player_audio_track_name=e.name),e.lang&&(i.player_audio_track_language=e.lang),e.audioCodec&&(i.player_audio_track_codec=e.audioCodec);var a=e.channels||(null==(t=e.attrs)?void 0:t.CHANNELS),r=a&&eI(a);return r&&(i.player_audio_track_channels=r),i},eL=["mp4a","ac-3","ec-3","ac-4","opus","flac","alac"],eM=function(e){var t,i,a={player_audio_track_enabled:!0};if(e.codec){var r="audio"===e.id?e.codec:e.codec.split(",").map(function(e){return e.trim()}).find(function(e){return -1!==eL.indexOf(e.slice(0,4).toLowerCase())});r&&(a.player_audio_track_codec=r)}return null!=(i=e.metadata)&&i.channelCount&&(a.player_audio_track_channels=ev(null==(t=e.metadata)?void 0:t.channelCount)),a},ex=function(e){var t=e.find(function(e){return e.audio});if(t)return t.audio;var i=e.find(function(e){return e.audiovideo});return null==i?void 0:i.audiovideo},eD=function(e,t){var i=!1,a=!0,r=!1,n=void 0;try{for(var s,o=["player_audio_track_name","player_audio_track_language"][Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var l=s.value,d=e[l],u=t[l];if(d&&u){if(d!==u)return!1;i=!0}}}catch(e){r=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}return i},eO=function(){function e(t){var i=t.hls,a=t.Hls,r=t.onAudioTrackChange,n=this;V(this,e),j(this,"hls",void 0),j(this,"audioSwitchIsPlayheadBased",!1),j(this,"listeners",[]),j(this,"onAudioTrackChange",void 0),j(this,"previousEvent",void 0),j(this,"transition",void 0),this.onAudioTrackChange=r;var s=x(String(null==a?void 0:a.version).split("."),2),o=s[0],l=s[1];if("1"!==o)return void B.warn("Unsupported hls.js version "+(null==a?void 0:a.version)+" for audiotrackchange detection. Audio track changes are only reported from the media element.");var d=parseInt(l);isFinite(d)&&d>=7&&(this.audioSwitchIsPlayheadBased=!0);var u,c=a.Events||{},h=(j(u={},c.LEVEL_SWITCHING,this.onLevelSwitching),j(u,c.LEVEL_SWITCHED,this.onLevelSwitched),j(u,c.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching),j(u,c.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched),j(u,c.BUFFER_CODECS,this.onBufferCodecs),j(u,c.MANIFEST_LOADING,this.onManifestLoading),j(u,c.MEDIA_ATTACHED,this.onMediaAttached),j(u,c.MEDIA_DETACHING,this.onMediaDetaching),j(u,c.ERROR,this.onError),u);this.hls=i,this.addMediaElementMonitorOverride(),Object.keys(h).forEach(function(e){var t=h[e],a=function(e,i){try{t.call(n,e,i)}catch(t){B.warn("Exception in hls.js "+e+" handler for audiotrackchange.",t)}};n.listeners.push([e,a]),i.on(e,a)})}return K(e,[{key:"addMediaElementMonitorOverride",value:function(){var e,t,i=this;null!=(t=this.hls)&&null!=(e=t.media)&&e.mux&&(this.hls.media.mux.audioTrackChangeHandler=function(e){return i.onMediaElementMonitorEvent(e)})}},{key:"removeMediaElementMonitorOverride",value:function(){var e,t,i;null==(i=this.hls)||null==(t=i.media)||null==(e=t.mux)||delete e.audioTrackChangeHandler}},{key:"destroy",value:function(){var e=this.hls;e&&(this.removeMediaElementMonitorOverride(),this.hls=void 0,this.transition=void 0,this.listeners.forEach(function(t){var i=x(t,2),a=i[0],r=i[1];return e.off(a,r)}),this.listeners=[])}},{key:"onMediaElementMonitorEvent",value:function(e){this.transition&&(this.transition.mediaElementMonitorEvent=e)}},{key:"onManifestLoading",value:function(){this.transition=void 0}},{key:"onMediaAttached",value:function(){this.addMediaElementMonitorOverride()}},{key:"onMediaDetaching",value:function(){this.removeMediaElementMonitorOverride(),this.transition=void 0,this.previousEvent=void 0}},{key:"onError",value:function(e,t){null!=t&&t.fatal&&(this.transition=void 0)}},{key:"onLevelSwitching",value:function(e,t){this.transition=this.transition||{},this.transition.levelSwitching=er({},t),this.transition.levelSwitched&&(this.transition.levelSwitched=void 0,this.transition.bufferCodecs=void 0)}},{key:"onLevelSwitched",value:function(e,t){this.transition&&(this.transition.levelSwitched=er({},t),this.checkTransitionFinished())}},{key:"onBufferCodecs",value:function(e,t){this.transition&&(this.transition.bufferCodecs=this.transition.bufferCodecs||[],this.transition.bufferCodecs.push(er({},t)))}},{key:"onAudioTrackSwitching",value:function(e,t){this.transition=this.transition||{},this.transition.audioTrackSwitching=er({},t);var i,a,r,n="number"==typeof(null==t?void 0:t.id)?t.id:null==(i=this.hls)?void 0:i.audioTrack;this.transition.audioTrackObj=null==(r=this.hls)||null==(a=r.audioTracks)?void 0:a[n],this.transition.audioTrackSwitched&&(this.transition.audioTrackSwitched=void 0,this.transition.bufferCodecs=void 0)}},{key:"onAudioTrackSwitched",value:function(e,t){this.transition&&(this.transition.audioTrackSwitched=er({},t),this.checkTransitionFinished())}},{key:"checkTransitionFinished",value:function(){var e,t,i,a=this.transition;if(a&&!(a.audioTrackSwitching&&!a.audioTrackSwitched)&&!(a.levelSwitching&&!a.levelSwitched)){this.transition=void 0;var r=a.audioTrackObj||(null==(t=this.hls)||null==(e=t.audioTracks)?void 0:e[this.hls.audioTrack]),n=(null==(i=a.bufferCodecs)?void 0:i.length)&&ex(a.bufferCodecs);if(!(r&&!a.audioTrackSwitched&&!n&&!a.mediaElementMonitorEvent)){var s=[],o=r&&eR(r);o&&s.push(o),n&&s.push(eM(n));var l=a.mediaElementMonitorEvent;if(!l){var d,u=null==(d=this.hls)?void 0:d.media;u&&(this.audioSwitchIsPlayheadBased||a.levelSwitched)&&(l=ef(u))}l&&(!o||eD(l,o))&&s.push(l);var c=eC(s);if(c){var h=this.previousEvent;h&&!a.audioTrackSwitched&&eS(h,c)||(this.previousEvent=c,this.onAudioTrackChange(er({},c)))}}}}}]),e}(),eP=["public.accessibility.transcribes-spoken-dialog","public.accessibility.describes-music-and-sound"],eN=function(e){if(e){var t=e.split(",").map(function(e){return e.trim()});if(eP.every(function(e){return -1!==t.indexOf(e)}))return"cc"}return"subtitles"},eU=function(e){if(e)return"wvtt"===e?"webvtt":0===e.indexOf("stpp")?"ttml":e},eH=function(e){var t,i={player_text_track_enabled:!0},a=eN(e.characteristics||(null==(t=e.attrs)?void 0:t.CHARACTERISTICS));a&&(i.player_text_track_type=a);var r=eU(e.textCodec);return r&&(i.player_text_track_format=r),e.name&&(i.player_text_track_name=e.name),e.lang&&(i.player_text_track_language=e.lang),i},eW=function(){function e(t){var i=t.hls,a=t.Hls,r=t.onTextTrackChange,n=this;if(V(this,e),j(this,"hls",void 0),j(this,"listeners",[]),j(this,"onTextTrackChange",void 0),j(this,"levelSwitched",!1),j(this,"previousEvent",void 0),this.onTextTrackChange=r,"1"!==x(String(null==a?void 0:a.version).split("."),1)[0])return void B.warn("Unsupported hls.js version "+(null==a?void 0:a.version)+" for texttrackchange detection. Text track changes are only reported from the media element.");var s=a.Events||{},o=[[s.LEVEL_SWITCHED,this.onLevelSwitched],[s.SUBTITLE_TRACKS_UPDATED,this.refresh],[s.SUBTITLE_TRACKS_CLEARED,this.refresh],[s.SUBTITLE_TRACK_SWITCH,this.refresh],[s.MEDIA_ATTACHED,this.onMediaAttached],[s.MEDIA_DETACHING,this.onMediaDetaching]];this.hls=i,this.addMediaElementMonitorOverride(),o.forEach(function(e){var t=x(e,2),a=t[0],r=t[1];if(a){var s=function(e){try{r.call(n)}catch(t){B.warn("Exception in hls.js "+e+" handler for texttrackchange.",t)}};n.listeners.push([a,s]),i.on(a,s)}}),this.refresh()}return K(e,[{key:"addMediaElementMonitorOverride",value:function(){var e,t,i=this;null!=(t=this.hls)&&null!=(e=t.media)&&e.mux&&(this.hls.media.mux.textTrackChangeHandler=function(e){return i.onMediaElementMonitorEvent(e)})}},{key:"removeMediaElementMonitorOverride",value:function(){var e,t,i;null==(i=this.hls)||null==(t=i.media)||null==(e=t.mux)||delete e.textTrackChangeHandler}},{key:"destroy",value:function(){var e=this.hls;e&&(this.removeMediaElementMonitorOverride(),this.hls=void 0,this.listeners.forEach(function(t){var i=x(t,2),a=i[0],r=i[1];return e.off(a,r)}),this.listeners=[])}},{key:"getSelectedSubtitleTrack",value:function(){var e,t=this.hls;if(!(!t||"number"!=typeof t.subtitleTrack||t.subtitleTrack<0))return null==(e=t.subtitleTracks)?void 0:e[t.subtitleTrack]}},{key:"onMediaElementMonitorEvent",value:function(e){try{if(this.getSelectedSubtitleTrack())return;this.emit(e)}catch(e){B.warn("Exception handling a media element text track change for hls.js.",e)}}},{key:"onLevelSwitched",value:function(){this.levelSwitched=!0,this.refresh()}},{key:"onMediaAttached",value:function(){this.addMediaElementMonitorOverride(),this.getSelectedSubtitleTrack()&&this.refresh()}},{key:"onMediaDetaching",value:function(){this.removeMediaElementMonitorOverride(),this.previousEvent=void 0}},{key:"isLevelSwitched",value:function(){var e,t=null==(e=this.hls)?void 0:e.currentLevel;return this.levelSwitched||"number"==typeof t&&t>=0}},{key:"refresh",value:function(){try{var e=this.hls;if(!e||!this.isLevelSwitched())return;var t=this.getSelectedSubtitleTrack();if(t)return void this.emit(eH(t));var i=e.media&&eA(e.media);i&&this.emit(i)}catch(e){B.warn("Exception while refreshing the hls.js text track state.",e)}}},{key:"emit",value:function(e){this.previousEvent&&eS(this.previousEvent,e)||(this.previousEvent=e,this.onTextTrackChange(er({},e)))}}]),e}(),eB=function(e){if(!e)return{};var t=ei(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},e$=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return el(e.getAllResponseHeaders())},eq=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!ee())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=eB(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",en(er({},eu(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:X(r),request_response_headers:e$(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=eB(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:X(i.url),request_response_headers:e$(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=eB(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:X(i.url),request_response_headers:e$(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=eB(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?e$(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?X(r.responseURL):void 0,request_id:h?ed(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?e$(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:X(c),request_id:h?ed(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:X(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v);var b=new eO({hls:i,Hls:a,onAudioTrackChange:function(e){o("audiotrackchange",e)}}),g=new eW({hls:i,Hls:a,onTextTrackChange:function(e){o("texttrackchange",e)}});i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),b.destroy(),g.destroy(),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},eV=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eF=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=X(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=el(u[u.length-1]._responseHeaders||""));var c=i?ed(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},eK=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},ej=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},eG=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eY=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=eG(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:X(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=eF(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,g=c.requestHostname,f=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:g,request_id:c.requestId,request_url:f,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=eF(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,g=u.requestHostname,f=u.requestUrl,E=u.requestId,y=eK(d,i),_=y.currentLevel,T=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:g,request_id:E,request_url:f,request_media_start_time:l,request_media_duration:b,request_current_level:_,request_labeled_bitrate:y.renditionBitrate,request_video_width:T,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:ej(c.video.codec)}}},m=function(e,t,r){var s=e.mediaType;if("audio"===s||"video"===s){if("function"==typeof i.getRepresentationsByType)if(e.newRepresentation)o={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var o,l=i.getRepresentationsByType(s);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(o={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}else{if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality})}if(!(o&&"number"==typeof o.bitrate))return void a.warn("missing bitrate info for ".concat(s));c[s]=en(er({},o),{codec:i.getCurrentTrackFor(s).codec});var u=h();u&&n("renditionchange",u)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:X(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},s=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:X(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},ez=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eQ=0,eZ=function(){function e(){V(this,e),j(this,"_listeners",void 0)}return K(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eQ,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eQ;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t),o(s,t)}}}]),e}(),eX=function(){function e(t){var i=this;V(this,e),j(this,"_playbackHeartbeatInterval",void 0),j(this,"_playheadShouldBeProgressing",void 0),j(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(D.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return K(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=D.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(D.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eJ=function e(t){var i=this;V(this,e),j(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},e0=function(){function e(t){V(this,e),j(this,"_watchTimeTrackerLastCheckedTime",void 0),j(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return K(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),ea(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),e1=function(){function e(t){var i=this;V(this,e),j(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),j(this,"_lastTime",void 0),j(this,"_isAdPlaying",void 0),j(this,"_callbackUpdatePlaybackTime",void 0),j(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=O(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=O(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return K(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=O(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=O(),i=t-this._lastTime,a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i),a>0&&a<=1e3&&ea(this.pm.data,"view_content_playback_time",a),null!==this._callbackUpdatePlaybackTime&&i>0&&i<=1e3&&(this._isAdPlaying&&ea(this.pm.data,"ad_playing_time_ms_cumulative",i),ea(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),e2=function(){function e(t){V(this,e),j(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return K(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),e3=function e(t){if(V(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;ea(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(ea(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},e4=function(){function e(t){var i=this;V(this,e),j(this,"_lastCheckedTime",void 0),j(this,"_lastPlayheadTime",void 0),j(this,"_lastPlayheadTimeUpdatedTime",void 0),j(this,"_rebuffering",void 0),j(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:O()})}))}return K(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),e5=function(){function e(t){var i=this;V(this,e),j(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||O(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||O(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return K(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),e9=function e(t){var i=this;V(this,e),j(this,"_lastPlayerHeight",void 0),j(this,"_lastPlayerWidth",void 0),j(this,"_lastPlayheadPosition",void 0),j(this,"_lastSourceHeight",void 0),j(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),ea(t.data,"view_total_content_playback_time",e),ea(t.data,"view_total_upscaling",r*e),ea(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},e8=function e(t){var i=this;V(this,e),j(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=O(),r=(t.data.viewer_time||e)-(a||e);ea(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,ea(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},e6=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},e7=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],te=function(){function e(t){var i=this;V(this,e),j(this,"_adHasPlayed",void 0),j(this,"_adRequests",void 0),j(this,"_adResponses",void 0),j(this,"_currentAdRequestNumber",void 0),j(this,"_currentAdResponseNumber",void 0),j(this,"_prerollPlayTime",void 0),j(this,"_wouldBeNewAdPlay",void 0),j(this,"isAdBreak",void 0),j(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),e7.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),e6(i._adRequests,a),ea(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||ea(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),e6(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&ea(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,ea(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||ea(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||ea(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return K(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=x(J(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=x(J(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),tt=function e(t){var i=this;V(this,e),j(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=O(),t.on("before*",r)},r=function(e){var a=O(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},ti=(i1=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("u">typeof document){if(arguments.length>1){if("number"==typeof(r=i1({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",a,r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",i1(t,{expires:-1}))},i.withConverter=e,i}(function(){})),ta="muxData",tr=function(){var e;try{e=(ti.get(ta)||"").split("&").reduce(function(e,t){var i=x(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},tn=function(e){try{ti.set(ta,Object.entries(e).map(function(e){var t=x(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},ts=function(){var e=tr();return e.mux_viewer_id=e.mux_viewer_id||P(),e.msn=e.msn||Math.random(),tn(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},to=function(){var e=tr(),t=O();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=P(),e.sst=t),e.sex=t+15e5,tn(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},tl=tu({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),td=tu({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",cj:"channels",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",si:"sid",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tr:"track",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function tu(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function tc(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=tl[s];o||(B.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),td[e]?o+=td[e]:Number.isInteger(Number(e))?o+=e:(B.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var th=(i3=null!=(i2=R())?n(d(i2)):{},function(e,t,i){if(t&&"object"==typeof t||"function"==typeof t)for(var a,r=l(t),n=0,d=r.length;n<d;n++)a=r[n],u.call(e,a)||void 0===a||s(e,a,{get:(function(e){return t[e]}).bind(null,a),enumerable:!(i=o(t,a))||i.enumerable});return e}(i2&&i2.__esModule?i3:s(i3,"default",{value:i2,enumerable:!0}),i2)),tm="u">typeof document?document:th.default,tp={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},tv=["hb","requestcompleted","requestfailed","requestcanceled"],tb=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},tp,t)};tb.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},tb.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},tb.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),D.clearTimeout(this._sendTimeout)},tb.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],tc({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);tf(this._beaconUrl,i,!0,function(){})},tb.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=O();tf(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,B.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=O()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},tb.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},tb.prototype._startBeaconSending=function(){var e=this;D.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=D.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},tb.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(O())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(B.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===tv.indexOf(e.e)}),s()),o()||(B.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var tg="function"==typeof tm.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},tf=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(D.fetch)return void D.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:tg(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(D.XMLHttpRequest){var r=new D.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},tE=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],ty=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],t_=["ad_id","ad_creative_id","ad_universal_id"],tT=["viewstart","error","ended","viewend"],tk=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,b,g,f,E,y,_,T=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};V(this,e),j(this,"mux",void 0),j(this,"envKey",void 0),j(this,"options",void 0),j(this,"eventQueue",void 0),j(this,"sampleRate",void 0),j(this,"disableCookies",void 0),j(this,"respectDoNotTrack",void 0),j(this,"previousBeaconData",void 0),j(this,"lastEventTime",void 0),j(this,"rateLimited",void 0),j(this,"pageLevelData",void 0),j(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new tb((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?(/localhost(?::\d+)?$/.test(n)?"http://":"https://")+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(E=this.options.sampleRate)?E:1,this.disableCookies=null!=(y=this.options.disableCookies)&&y,this.respectDoNotTrack=null!=(_=this.options.respectDoNotTrack)&&_,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(v=this.options.platform)||null==(p=v.os)?void 0:p.architecture,viewer_os_version:null==(g=this.options.platform)||null==(b=g.os)?void 0:b.version,page_url:null==D||null==(f=D.location)?void 0:f.href},this.viewerData=this.disableCookies?{}:ts()}return K(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&$())return B.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return B.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:to(),a=en(er({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,s=tc(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return B.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||B.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited)if(B.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(tT.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return a.event="eventrateexceeded",s=tc(a),this.eventQueue.queueEvent(a.event,s),B.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=er({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=x(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||tE.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){switch(e){case"audiotrackchange":if(t.startsWith("player_audio_track_"))return!0;break;case"playbackmodechange":if(t.startsWith("player_playback_mode"))return!0;break;case"renditionchange":if(t.startsWith("video_source_"))return!0;break;case"texttrackchange":if(t.startsWith("player_text_track_"))return!0}return!!(t_.includes(t)&&ty.includes(e))}}]),e}(),tA=function e(t){V(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tw=function e(t){var i=this;V(this,e),j(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=O(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,j({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function tS(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var tI=function e(t){V(this,e);var i=function(e){var i,a,r,o=null!=(i=e)&&i.request_type&&("media"===i.request_type||"video"===i.request_type)&&null!=(a=i.request_response_headers)&&a["x-cdn"]?i.request_response_headers["x-cdn"]:null!=i&&i.video_cdn?i.video_cdn:null,l=null!=(r=e)&&r.request_start?r.request_start:null!=r&&r.viewer_time?r.viewer_time:Date.now();null!=o&&!tS(o,n)&&s<=l&&(n=o,s=l,t.emit("cdnchange",{video_cdn:o}))},a=null,r=null,n=null,s=0;t.on("viewinit",function(){a=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(e,t){var i=null==t?void 0:t.video_cdn;i&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(tS(i,r)?t.video_previous_cdn=null!=a?a:void 0:(t.video_previous_cdn=null!=r?r:void 0,a=r,r=i))}),t.on("requestcompleted",function(e,t){i(t)})},tC=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},tR=function e(t){var i=this;V(this,e),j(this,"_emittingAutomaticEvent",!1),j(this,"_hasInitialized",!1),j(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(e,a){i._emittingAutomaticEvent||(a.player_playback_mode_data?tC(a.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),a.player_playback_mode_data="{}"):a.player_playback_mode_data="{}",t.data.player_playback_mode_data=a.player_playback_mode_data,t.data.player_playback_mode=a.player_playback_mode,i._currentMode=a.player_playback_mode)})},tL=function(){function e(t){V(this,e),j(this,"pm",void 0),j(this,"_currentRangeStart",void 0),j(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return K(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&null!=(e=this.pm.adTracker)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var i=this.pm.data.video_playback_ranges;i&&i.length>0&&(i[i.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var a=this.pm.data.video_playback_ranges||[];a.length>0&&a[a.length-1][1]===t?this._currentRangeStart=a[a.length-1][0]:(this._currentRangeStart=t,a.push([t,t])),this.pm.data.video_playback_ranges=a}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}();b();var tM=function e(t,i,a){var r=this;V(this,e),j(this,"_lastPayload",null),j(this,"_seenThisView",!1),j(this,"_emittingAutomaticEvent",!1);var n=function(e){var t={};return Object.keys(e).forEach(function(i){i.startsWith(a)&&(t[i]=e[i])}),t},s=function(){Object.keys(t.data).forEach(function(e){e.startsWith(a)&&delete t.data[e]})};t.on("viewinit",function(){r._seenThisView=!1,s()}),t.on("viewstart",function(){r._lastPayload&&!r._seenThisView&&(r._emittingAutomaticEvent=!0,t.emit(i,er({},r._lastPayload)),r._emittingAutomaticEvent=!1)});var o=a+"enabled";t.on("before"+i,function(e,l){var d=l[o];if("boolean"!=typeof d){var u=Object.keys(l).some(function(e){return e!==o&&e.startsWith(a)&&void 0!==l[e]});l[o]=u,t.mux.log.warn("Expected a boolean for ".concat(o," on ").concat(i,", got ").concat(void 0===d?"undefined":v(d)," ")+"(".concat(String(d),"); inferred as ").concat(u," from the payload."))}r._emittingAutomaticEvent||(r._seenThisView=!0,r._lastPayload=n(l)),s()})},tx=function(e){Q(i,e);var t=Z(i);function i(e){return V(this,i),t.call(this,e,"texttrackchange","player_text_track_")}return i}(tM),tD=function(e){Q(i,e);var t=Z(i);function i(e){return V(this,i),t.call(this,e,"audiotrackchange","player_audio_track_")}return i}(tM),tO=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),tP=function(e){if(!e)return tO.UNKNOWN;switch(e){case"cellular":case"wimax":return tO.CELLULAR;case"wifi":return tO.WIFI;case"ethernet":return tO.WIRED;case"none":return tO.NO_CONNECTION;case"bluetooth":case"other":default:return tO.OTHER;case"unknown":return tO.UNKNOWN}},tN=function(){function e(t){var i=this;V(this,e),j(this,"pm",void 0),j(this,"lastType",void 0),j(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var t,a=i.emit.bind(i);a(),D.addEventListener("online",a),D.addEventListener("offline",a),null==(t=e.connection)||t.addEventListener("change",a),i.pm.on("destroy",function(){var t;null==(t=e.connection)||t.removeEventListener("change",a),D.removeEventListener("online",a),D.removeEventListener("offline",a)})})}return K(e,[{key:"type",get:function(){var t,i;return(null==(t=D.navigator)?void 0:t.onLine)===!1?tO.NO_CONNECTION:null!=(i=e.connection)&&i.type?tP(e.connection.type):tO.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return null==(t=e.connection)?void 0:t.saveData}},{key:"emit",value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit("networkchange",er({viewer_connection_type:e},void 0!==t&&{viewer_connection_low_data_mode:t})))}}],[{key:"connection",get:function(){var e;return"object"==typeof(e=D.navigator)&&"connection"in e&&"object"==typeof e.connection?D.navigator.connection:null}}]),e}(),tU=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange","texttrackchange","audiotrackchange"],tH=new Set(["requestcompleted","requestfailed","requestcanceled"]),tW=function(e){Q(i,e);var t=Z(i);function i(e,a,r){V(this,i),j(q(n=t.call(this)),"pageLoadEndTime",void 0),j(q(n),"pageLoadInitTime",void 0),j(q(n),"_destroyed",void 0),j(q(n),"_heartBeatTimeout",void 0),j(q(n),"adTracker",void 0),j(q(n),"dashjs",void 0),j(q(n),"data",void 0),j(q(n),"disablePlayheadRebufferTracking",void 0),j(q(n),"disableRebufferTracking",void 0),j(q(n),"disableAdPlaybackRangeFiltering",void 0),j(q(n),"errorTracker",void 0),j(q(n),"errorTranslator",void 0),j(q(n),"emitTranslator",void 0),j(q(n),"getAdData",void 0),j(q(n),"getPlayheadTime",void 0),j(q(n),"getStateData",void 0),j(q(n),"stateDataTranslator",void 0),j(q(n),"hlsjs",void 0),j(q(n),"id",void 0),j(q(n),"longResumeTracker",void 0),j(q(n),"minimumRebufferDuration",void 0),j(q(n),"mux",void 0),j(q(n),"playbackEventDispatcher",void 0),j(q(n),"playbackHeartbeat",void 0),j(q(n),"playbackHeartbeatTime",void 0),j(q(n),"playheadTime",void 0),j(q(n),"seekingTracker",void 0),j(q(n),"sustainedRebufferThreshold",void 0),j(q(n),"watchTimeTracker",void 0),j(q(n),"currentFragmentPDT",void 0),j(q(n),"currentFragmentStart",void 0),n.pageLoadInitTime=ei(),n.pageLoadEndTime=et(),n.mux=e,n.id=a,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),B.level=r.debug?1:3,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new tk(e,r.data.env_key,r),n.data={player_instance_id:P(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(q(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"u">typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tU.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tw(q(n)),n.errorTracker=new eJ(q(n)),new tt(q(n)),n.seekingTracker=new e8(q(n)),n.playheadTime=new e2(q(n)),n.playbackHeartbeat=new eX(q(n)),new e9(q(n)),n.watchTimeTracker=new e0(q(n)),new e1(q(n)),new tL(q(n)),n.adTracker=new te(q(n)),new e4(q(n)),new e3(q(n)),new e5(q(n)),new tA(q(n)),new tI(q(n)),new tR(q(n)),new tx(q(n)),new tD(q(n)),new tN(q(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return K(i,[{key:"emit",value:function(e,t){var a,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(a=Y(G(i.prototype),"emit",this)).call.apply(a,[this].concat(W(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(1/0===t.player_source_duration||1/0===t.video_source_duration?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=x(J(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tH.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}null!=(e=this.data)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate","player_audio_track_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=P(),i=function(){t===e.data.view_id&&ea(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){e.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,eq(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(eV(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){e.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,eY(this.mux,this.id,e.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(ez(this.dashjs),this.dashjs=void 0)}}]),i}(eZ);function tB(){return tm&&!!(tm.fullscreenElement||tm.webkitFullscreenElement||tm.mozFullScreenElement||tm.msFullscreenElement)}var t$=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tq={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};D&&D.WeakMap&&(i4=new WeakMap);var tV=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tV.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tV.prototype.processLine=function(e){var t=e.indexOf(":"),i=tQ(e,t),a=i[0],r=2===i.length?tj(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case"#EXT-X-TARGETDURATION":if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case"#EXT-X-PART-INF":tF(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":tF(this.manifest,i),this.setHoldBack();break;case"#EXTINF":0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case"#EXT-X-PROGRAM-DATE-TIME":var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case"#EXT-X-VERSION":tF(this.manifest,i);break;case"#EXT-X-SESSION-DATA":var s=eu(tZ(i[1]));Object.assign(this.manifest.sessionData,s)}},tV.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tF=function(e,t){var i,a=tK(t[0].replace("#EXT-X-",""));tz(t[1])?(i={},i=Object.assign(tY(t[1]),i)):i=tj(t[1]),e[a]=i},tK=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tj=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tG=function(e){var t={},i=e.split("=");return i.length>1&&(t[tK(i[0])]=tj(i[1])),t},tY=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tG(t[a]),i);return i},tz=function(e){return e.indexOf("=")>-1},tQ=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tZ=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tX={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){B.info("safeCall error",e)}return r},safeIncrement:ea,getComputedStyle:function(e,t){var i;return e&&t&&D&&"function"==typeof D.getComputedStyle?(i4&&i4.has(e)&&(i=i4.get(e)),i||(i=D.getComputedStyle(e,null),i4&&i4.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:el,cdnHeadersToRequestId:ed,extractHostnameAndDomain:J,extractHostname:X,manifestParser:tV,generateShortID:N,generateUUID:P,now:O,findMediaElement:H},tJ={},t0=function(e){var t=arguments;"string"==typeof e?t0.hasOwnProperty(e)?D.setTimeout(function(){t=Array.prototype.splice.call(t,1),t0[e].apply(null,t)},0):B.warn("`"+e+"` is an unknown task"):"function"==typeof e?D.setTimeout(function(){e(t0)},0):B.warn("`"+e+"` is invalid.")},t1={loaded:O(),NAME:"mux-embed",VERSION:"5.19.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=x(H(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tB(),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();s.player_program_time=u+i,r.seekable.length>0&&(s.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u,c,h=function(){u&&(u.destroy(),u=void 0),c&&(c.destroy(),c=void 0)},m=function(){h(),null==(u=eE({mediaElement:r,onChange:function(t){var i;null!=(i=r.mux)&&i.audioTrackChangeHandler?r.mux.audioTrackChangeHandler(t):e.emit(n,"audiotrackchange",t)}}))||u.refresh(),null==(c=ew({mediaElement:r,onChange:function(t){var i;null!=(i=r.mux)&&i.textTrackChangeHandler?r.mux.textTrackChangeHandler(t):e.emit(n,"texttrackchange",t)}}))||c.refresh()},p=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){h(),Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=p,r.mux.swapElement=p,r.mux.emit=p,r.mux.addHLSJS=p,r.mux.addDashJS=p,r.mux.removeHLSJS=p,r.mux.removeDashJS=p,r.mux.updateData=p,r.mux.setEmitTranslator=p,r.mux.setStateDataTranslator=p,r.mux.setGetPlayheadTime=p,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=x(H(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a,m()):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),m(),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},t$.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tq[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=tB()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=tB(),i=document.fullscreenElement;if(t&&(i===r||null!=i&&i.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var a=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:a?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(t0,e,t)},destroyMonitor:function(e){var t=x(H(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():B.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=U(e);tJ[i]?tJ[i].addHLSJS(t):B.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=U(e);tJ[i]?tJ[i].addDashJS(t):B.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=U(e);tJ[t]?tJ[t].removeHLSJS():B.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=U(e);tJ[t]?tJ[t].removeDashJS():B.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){$()&&t&&t.respectDoNotTrack&&B.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=U(e);tJ[i]=new tW(t0,i,t)},emit:function(e,t,i){var a=U(e);tJ[a]?(tJ[a].emit(t,i),"destroy"===t&&delete tJ[a]):B.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=U(e);tJ[i]?tJ[i].emit("hb",t):B.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=U(e);tJ[i]?tJ[i].emitTranslator=t:B.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=U(e);tJ[i]?tJ[i].stateDataTranslator=t:B.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=U(e);tJ[i]?tJ[i].getPlayheadTime=t:B.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:$,log:B,utils:tX,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",TEXT_TRACK_CHANGE:"texttrackchange",AUDIO_TRACK_CHANGE:"audiotrackchange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(t0,t1),void 0!==D&&"function"==typeof D.addEventListener&&D.addEventListener("pagehide",function(e){e.persisted||(t0.WINDOW_UNLOADING=!0)},!1);var t2=e.i(650471),t3=t2.U,t4="video",t5=e=>e===t4?"playback":e,t9=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};t9.MEDIA_ERR_ABORTED=1,t9.MEDIA_ERR_NETWORK=2,t9.MEDIA_ERR_DECODE=3,t9.MEDIA_ERR_SRC_NOT_SUPPORTED=4,t9.MEDIA_ERR_ENCRYPTED=5,t9.MEDIA_ERR_CUSTOM=100,t9.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var t8=(e,t)=>null!=t&&e in t,t6={ANY:"any",MUTED:"muted"},t7="on-demand",ie="live",it="unknown",ii="native",ia={HEADER:"header",QUERY:"query",NONE:"none"},ir=Object.values(ia),is={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},io={HLS:is.M3U8};Object.keys(io),[...Object.values(is)];var il={code:"en"},id=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},iu=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},ic=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return t8(e,io)?io[e]:t}return ip(e)},ih=e=>"VOD"===e?t7:ie,im=e=>"EVENT"===e?1/0:"VOD"===e?0/0:0,ip=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=ib(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let a=i.lastIndexOf(".");if(a<0)return iE(e)?is.M3U8:"";let r=i.slice(a+1).toUpperCase();return t8(r,is)?is[r]:""},iv=e=>{try{return new URL(e),!1}catch{return!0}},ib=(e,t)=>{var i;if(!iv(e))return new URL(e);let a=null==(i=null==window?void 0:window.location)?void 0:i.href,r=null!=t?t:a;return t&&iv(t.toString())&&(r=new URL(t,a)),new URL(e,r)},ig="mux.com",iE=({src:e,customDomain:t=ig})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},iy=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function i_(e,t=!0){var i;return new iT(t&&null!=(i=null==il?void 0:il[e])?i:e,t?il.code:"en")}var iT=class{constructor(e,t=(e=>null!=(e=il)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},ik=Object.values(t6),iA=e=>"boolean"==typeof e||"string"==typeof e&&ik.includes(e),iw=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case t6.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case t6.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},iS=e=>e.split("-")[0],iI=({language:e})=>"string"==typeof e?e.toLowerCase():void 0,iC=Number.MAX_SAFE_INTEGER,iR=e=>"time"in e?e.time:e.startTime;function iL(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function iM(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}var ix=new WeakMap;async function iD(e,t,i){let a=iM(e,t,i);if(a){let e=ix.get(a);return e&&await e,a}let r=iL(e,i,t);r.mode="hidden";let n=new Promise(e=>setTimeout(e,0));return ix.set(r,n),await n,ix.delete(r),r}async function iO(e,t,i,a){let r=await iD(e,i,a);return iP(e,r,t,a),r}function iP(e,t,i,a){"hidden"!==t.mode&&(t.mode="hidden"),[...i].sort((e,t)=>iR(t)-iR(e)).forEach(i=>{var r,n;let s=i.value,o=iR(i);if("endTime"in i&&null!=i.endTime&&Number.isFinite(i.endTime))null==t||t.addCue(new VTTCue(o,i.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let i=Array.prototype.findIndex.call(null==t?void 0:t.cues,e=>e.startTime>=o),l=null==(r=null==t?void 0:t.cues)?void 0:r[i],d=l?l.startTime:Number.isFinite(e.duration)&&e.duration>0?e.duration:iC,u=null==(n=null==t?void 0:t.cues)?void 0:n[i-1];u&&(u.endTime=o),null==t||t.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}var iN="cuepoints",iU=Object.freeze({label:iN});async function iH(e,t,i=iU){return iO(e,t,i.label,"metadata")}var iW=e=>({time:e.startTime,value:JSON.parse(e.text)});function iB(e,t={label:iN}){var i,a;let r=iM(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iW(r.activeCues[0]);let{currentTime:n}=e;return iW(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function i$(e,t=iU){return new Promise(i=>{id(e,"loadstart",async()=>{let a=await iH(e,[],t);id(e,"cuechange",()=>{let t=iB(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iq="chapters",iV=Object.freeze({label:iq}),iF=(e,t)=>{let{duration:i}=t,a=Number.isFinite(i)&&i>0?Math.min(e.endTime,i):e.endTime>=iC?1/0:e.endTime;return{startTime:e.startTime,endTime:a,value:e.text}},iK=new WeakSet;function ij(e){var t;Array.from(null!=(t=e.cues)?t:[]).filter(e=>iK.has(e)).forEach(t=>e.removeCue(t))}async function iG(e,t,i=iV){let a=await iD(e,i.label,"chapters");return t.length&&ij(a),iP(e,a,t,"chapters"),a}async function iY(e,t,i,a=iV){var r,n;let s=await iD(e,a.label,"chapters");return null!=i&&i.aborted||Array.from(null!=(r=s.cues)?r:[]).some(e=>!iK.has(e))||(ij(s),iP(e,s,t,"chapters"),Array.from(null!=(n=s.cues)?n:[]).forEach(e=>iK.add(e))),s}function iz(e,t={label:iq}){var i,a;let r=iM(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iF(r.activeCues[0],e);let{currentTime:n}=e;return iF(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0],e)}async function iQ(e,t=iV){return new Promise(i=>{id(e,"loadstart",async()=>{let a=await iG(e,[],t);id(e,"cuechange",()=>{let t=iz(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iZ=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o,l;let d,u;if(n){let i=i_("Your device appears to be offline",r),a=t9.MEDIA_ERR_NETWORK,n=new t9(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=2000002,n.data=e,n}let c="status"in e?e.status:e.code,h=Date.now(),m=t9.MEDIA_ERR_NETWORK;if(200===c)return;let p=t5(t),v=(d=t5(t),u=`${d}Token`,null!=(o=i.tokens)&&o[d]?null==(l=i.tokens)?void 0:l[d]:t8(u,i)?i[u]:void 0),b=t===t4?"v":"drm"===t?"d":void 0,[g]=iu(null!=(s=i.playbackId)?s:"");if(!c||!g)return;let f=iy(v);if(v&&!f){let i=new t9(i_("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:p}),m,!0,i_("Compact JWT string: {token}",r).format({token:v}));return i.errorCategory=t,i.muxCode=2412202,i.data=e,i}if(c>=500){let e=new t9("",m,null==a||a);return e.errorCategory=t,e.muxCode=2e6,e}if(403===c)if(f){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(f,h)){let i={timeStyle:"medium",dateStyle:"medium"},a=i_("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:p}),n=new Intl.DateTimeFormat("en",i).format(h),s=new t9(a,m,!0,f.exp?i_("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(1e3*f.exp),currentDate:n}):i_("The {tokenNamePrefix}-token has no exp value. Current time: {currentDate}.",r).format({tokenNamePrefix:p,currentDate:n}));return s.errorCategory=t,s.muxCode=2403210,s.data=e,s}if((({sub:e},t)=>e!==t)(f,g)){let i=new t9(i_("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p}),m,!0,i_("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:p,playbackId:g,tokenPlaybackId:f.sub}));return i.errorCategory=t,i.muxCode=2403232,i.data=e,i}if((({aud:e})=>!e)(f)){let i=new t9(i_("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),m,!0,i_("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:b}));return i.errorCategory=t,i.muxCode=2403221,i.data=e,i}if((({aud:e},t)=>e!==t)(f,b)){let i=new t9(i_("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),m,!0,i_("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:b,aud:f.aud}));return i.errorCategory=t,i.muxCode=2403222,i.data=e,i}}else{let i=new t9(i_("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p,category:t}),m,null==a||a,i_("Specified playback ID: {playbackId}",r).format({playbackId:g}));return i.errorCategory=t,i.muxCode=2403201,i.data=e,i}if(412===c){let n=new t9(i_("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),m,null==a||a,i_("Specified playback ID: {playbackId}",r).format({playbackId:g}));return n.errorCategory=t,n.muxCode=2412e3,n.streamType=i.streamType===ie?"live":i.streamType===t7?"on-demand":"unknown",n.data=e,n}if(404===c){let i=new t9(i_("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),m,null==a||a,i_("Specified playback ID: {playbackId}",r).format({playbackId:g}));return i.errorCategory=t,i.muxCode=2404e3,i.data=e,i}if(400===c){let i=new t9(i_("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),m,null==a||a,i_("Specified playback ID: {playbackId}",r).format({playbackId:g}));return i.errorCategory=t,i.muxCode=24e5,i.data=e,i}let E=new t9("",m,null==a||a);return E.errorCategory=t,E.muxCode=2e6,E.data=e,E},iX=t3.DefaultConfig.capLevelController;iX||console.error("MinCapLevelController - hls.js DefaultConfig.capLevelController is unavailable");var iJ={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},i0=class e extends iX{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=iJ[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iX.getMaxLevelByMediaSize(a,16/9*n,n)}};i0.minMaxResolution=720,i0.maxAutoResolution=new WeakMap;var i1,i2,i3,i4,i5,i9,i8,i6,i7,ae,at=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),ai="fairplay",aa=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,ar=async(e,t,i)=>{if(t===is.MP4)return{streamType:t7,targetLiveWindow:0/0,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0};if(t===is.M3U8){let t=await fetch(e,{signal:i});if(!t.ok)return Promise.reject(t);let a=await t.text(),r=t.url||e,n=await ((e,t,i)=>{let a,r=e.split(`
`).find((e,t,i)=>t>0&&i[t-1].startsWith("#EXT-X-STREAM-INF"));if(!r)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(iv(r)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{a=ib(r,t)}catch(e){return Promise.reject(e)}return fetch(a,{signal:i}).then(e=>200!==e.status?Promise.reject(e):e.text())})(a,r,i);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(aa)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(a),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=ih(n),o=im(n),l;if(s===ie){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(n),playlistUrl:r}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0}},an=async(e,t,i=ic({src:e}),a=ao(t))=>{var r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u,playlistUrl:c}=await ar(e,i,a);if(a.aborted)return;let h=as(null==u?void 0:u["com.apple.hls.chapters"],null!=c?c:e);h&&ac(h,t,a),(null!=(r=av.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=av.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=av.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},as=(e,t)=>{var i;let a=(null==e?void 0:e.URI)||(null!=(i=null==e?void 0:e.VALUE)&&i.toLocaleLowerCase().startsWith("http")?e.VALUE:void 0);if(a)try{return ib(a,t).toString()}catch{return}},ao=e=>{let t=new AbortController;return e.addEventListener("teardown",()=>t.abort(),{once:!0}),t.signal},al=async(e,t)=>{try{let i=await fetch(e,{signal:t});if(!i.ok)throw Error(`Failed to fetch ${e}: ${i.status} ${i.statusText}`);let a=await i.json();return t.aborted?void 0:a}catch(e){t.aborted||console.error(e);return}},ad=(e,t)=>{var i,a;if(!Array.isArray(null==(i=null==e?void 0:e[0])?void 0:i.metadata))return;let r={};for(let t of e[0].metadata)null!=t&&t.key&&null!=t&&t.value&&(r[t.key]=t.value);(null!=(a=av.get(t))?a:{}).metadata=r;let n=new CustomEvent("muxmetadata");t.dispatchEvent(n)},au=async(e,t,i=ao(t))=>{let a=await al(e,i);void 0!==a&&ad(a,t)},ac=async(e,t,i=ao(t))=>{var a,r,n;let s,o=await al(e,i);void 0!==o&&(ad(o,t),await iY(t,function(e,t=[]){return Array.isArray(e)?e.filter(e=>"number"==typeof(null==e?void 0:e["start-time"])).map((e,i,a)=>{var r;let n=e["start-time"],s=null==(r=a[i+1])?void 0:r["start-time"],o="number"==typeof e.duration?n+e.duration:"number"==typeof s?s:void 0;return{startTime:n,...null!=o?{endTime:o}:{},value:function(e,t){var i;let a=(Array.isArray(e)?e:[]).filter(e=>"string"==typeof(null==e?void 0:e.title)&&""!==e.title);if(!a.length)return"";for(let e of t){let t=function(e,t){var i,a;let r=t.toLowerCase(),n=iS(r);return null!=(a=null!=(i=e.find(e=>iI(e)===r))?i:e.find(e=>iI(e)===n))?a:e.find(e=>{let t=iI(e);return void 0!==t&&iS(t)===n})}(a,e);if(t)return t.title}return(null!=(i=a.find(e=>"und"===iI(e)))?i:a[0]).title}(e.titles,t)}}).filter(e=>""!==e.value):[]}(o,(s=null!=(n=null==(a=globalThis.navigator)?void 0:a.languages)?n:[null==(r=globalThis.navigator)?void 0:r.language],[(e=>{let t=e;for(;t;){if(t.hasAttribute("lang"))return t.getAttribute("lang")||void 0;let e=t.getRootNode();t=e instanceof ShadowRoot?e.host:void 0}})(t),...s].filter(e=>!!e))),i))},ah=null!=(i9=null==(i5=null==globalThis?void 0:globalThis.navigator)?void 0:i5.userAgent)?i9:"",am=null!=(i7=null==(i6=null==(i8=null==globalThis?void 0:globalThis.navigator)?void 0:i8.userAgentData)?void 0:i6.platform)?i7:"",ap=ah.toLowerCase().includes("android")||["x11","android"].some(e=>am.toLowerCase().includes(e)),av=new WeakMap,ab="mux.com",ag=null==(ae=t3.isSupported)?void 0:ae.call(t3),af=()=>{if("u">typeof window)return t0.utils.now()},aE=t0.utils.generateUUID,ay=({playbackId:e,customDomain:t=ab,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=iu(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},a_=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},aT=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},ak=e=>{var t;return null==(t=av.get(e))?void 0:t.error},aA=e=>{var t,i;return null!=(i=null==(t=av.get(e))?void 0:t.streamType)?i:it},aw=e=>{var t,i;return null!=(i=null==(t=av.get(e))?void 0:t.seekable)?i:e.seekable},aS=.034,aI=(e,t,i=aS)=>e>t||((e,t,i=aS)=>Math.abs(e-t)<=i)(e,t,i),aC=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},aR=(e,t)=>e.ended||e.loop?e.ended:!!(t&&aC(e,t))||((e,t=aS)=>e.paused&&aI(e.currentTime,e.duration,t))(e),aL=(e,t,i)=>{var a,r,n;ax(t,i,e);let{metadata:s={}}=e,{view_session_id:o=aE()}=s,l=null!=(a=null==e?void 0:e.metadata)&&a.video_id?e.metadata.video_id:a$(e)&&null!=(n=null!=(r=a_(e.playbackId))?r:aT(e.src))?n:e.src;s.view_session_id=o,s.video_id=l,e.metadata=s,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(i=av.get(t))?void 0:i.coreReference;aL(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},av.set(t,{retryCount:0});let d=aO(e,t),u=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return id(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,d);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?d&&t.mux.addHLSJS({hlsjs:d,Hls:d?t3:void 0}):aV(e,t,d),aF(e,t,d),i$(t),iQ(t);let c=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=iA(a)?a:!!a,o=()=>{r||id(t,"playing",()=>{r=!0},{once:!0})};if(o(),id(t,"loadstart",()=>{r=!1,o(),iw(t,s)},{once:!0}),id(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==it?e.streamType===ie:!Number.isFinite(t.duration)),iw(t,s)},{once:!0}),i&&i.once(t3.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==it?e.streamType===ie:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&id(t,"play",()=>{"metadata"===t.preload?i.once(t3.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||iw(t,s=iA(e)?e:!!e)}})(e,t,d);((e,t,i)=>{let{minPreloadSegments:a}=e;if(null==a||a<=0||!i)return;let r=0,n=!1,s=t.playbackRate||1,o=()=>{0!==t.playbackRate&&(s=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,id(t,"ratechange",o);let l=(e,{frag:i})=>{n||"main"!==i.type||++r>=a&&(n=!0,t.removeEventListener("ratechange",o),t.playbackRate=s)};i.on(t3.Events.FRAG_BUFFERED,l),t.addEventListener("teardown",()=>{n||(n=!0,i.off(t3.Events.FRAG_BUFFERED,l),t.playbackRate=s)},{once:!0})})(e,t,d),((e,t)=>{let{initialEstimateSegments:i}=e;if(null==i||i<=0||!t)return;let a=0;t.on(t3.Events.FRAG_BUFFERED,(e,{frag:r})=>{"main"===r.type&&++a<i&&t.abrController.resetEstimator(t.config.abrEwmaDefaultEstimate)})})(e,d);let h={engine:d,setAutoplay:c,setPreload:u},m=av.get(t);return m&&(m.coreReference=h),h},aM=new WeakMap,ax=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",aj),e.removeEventListener("error",aY),e.removeEventListener("durationchange",aK),av.delete(e),e.dispatchEvent(new Event("teardown")))};function aD(e,t){var i;let a=ic(e);if(a!==is.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=ag&&("mse"===n||ap||!(/^((?!chrome|android).)*safari/i.test(ah)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(n===ii||!s)}var aO=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=e,u=ic(e)===is.M3U8,c=aD(e,t);if(u&&!c&&ag){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=d?{abrEwmaDefaultEstimate:1e3*d}:{}},c=aP(a),h=aN(e),m=[ia.QUERY,ia.HEADER].includes(s)?{useHeaders:s===ia.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,p=aq(e,o),v=new t3({debug:i,startPosition:r,cmcd:m,xhrSetup:(e,t)=>{var i,a;if(s&&s!==ia.QUERY)return;let r=ib(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...u,...p,...c,...h,...o});return p.capLevelController===i0&&void 0!==l&&i0.setMaxAutoResolution(v,l),v.on(t3.Events.MANIFEST_LOADED,async function(e,i){var a;let r=as(null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"],i.url);r&&ac(r,t)}),v}},aP=e=>e===ie?{backBufferLength:8}:{},aN=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=a_(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:aW(e,"fairplay"),serverCertificateUrl:aB(e,"fairplay")},"com.widevine.alpha":{licenseUrl:aW(e,"widevine")},"com.microsoft.playready":{licenseUrl:aW(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=e.includes("fps")?ai:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==a||a(i),t}))}:{}},aU=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},aH=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},aW=({playbackId:e,tokens:{drm:t}={},customDomain:i=ab},a)=>{let r=a_(e);return`https://license.${i.toLocaleLowerCase().endsWith(ab)?i:ab}/license/${a}/${r}?token=${t}`},aB=({playbackId:e,tokens:{drm:t}={},customDomain:i=ab},a)=>{let r=a_(e);return`https://license.${i.toLocaleLowerCase().endsWith(ab)?i:ab}/appcert/${a}/${r}?token=${t}`},a$=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(ab)||!!i&&a.includes(i.toLocaleLowerCase())},aq=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=i0,i.capLevelToPlayerSize=!0):i.capLevelController=t2.M,i},aV=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=t0,muxDataSDKOptions:o={}}=e,l=a$(e),d=av.get(t);if(d&&(d.muxDataDisableCookies=!!e.disableCookies),!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?t3:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},aF=(e,t,i)=>{var a,r,n;let s=aD(e,t),{src:o,customDomain:l=ab}=e,d=()=>{t.ended||e.disablePseudoEnded||!aR(t,i)||(aC(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},u,c,h=()=>{let e=aw(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(c!==a||u!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),u=i,c=a};if(id(t,"durationchange",h),t&&s){let i=ic(e);if("string"==typeof o){if(o.endsWith(".mp4")&&o.includes(l)){let e=aT(o);au(new URL(`https://stream.${l}/${e}/metadata.json`).toString(),t)}let n=async()=>{let a=ao(t);return an(o,t,i,a).then(()=>{a.aborted||(()=>{if(aA(t)!==ie||Number.isFinite(t.duration))return;let e=setInterval(h,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),id(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})})()}).catch(i=>{if(i instanceof Response){let a=iZ(i,t4,e);if(a)return void aG(t,a)}})};if("none"===t.preload){let e=()=>{n(),t.removeEventListener("loadedmetadata",i)},i=()=>{n(),t.removeEventListener("play",e)};id(t,"play",e,{once:!0}),id(t,"loadedmetadata",i,{once:!0})}else n();null!=(a=e.tokens)&&a.drm?((e,t)=>{let i={mediaEl:t,getAppCertificate:()=>aU(aB(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iZ(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>aH(t,aW(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iZ(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:aG,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,ai)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new t9(i_("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),t9.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000005,a(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{var i,r;let a,s,o,u,c,h,m,p;e.webkitKeys||l();let v=await n;if(null===t.initData||null==v)return;let b=(i=t.initData,r=v,a=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(at(i)),s=new Uint8Array(i),o=new Uint8Array(a),u=new Uint8Array(r),c=new Uint8Array(s.byteLength+4+u.byteLength+4+o.byteLength),h=0,m=e=>{c.set(e,h),h+=e.byteLength},p=e=>{let t=new DataView(c.buffer),i=e.byteLength;t.setUint32(h,i,!0),h+=4,m(e)},m(s),p(o),p(u),c);d(b)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new t9("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",t9.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory="drm",e.muxCode=5000001,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},o=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new t9(i_("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),t9.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory="drm",r.muxCode=5000005,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0})})(i);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let i=t.initDataType;if("skd"!==i)return void console.error(`Received unexpected initialization data type "${i}"`);e.mediaKeys||await l(i);let a=t.initData;if(null==a)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new t9(i_("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),t9.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000001,a(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=new t9(i_("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t9.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory="drm",e.muxCode=5000004,Promise.reject(e)})}catch(t){a(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await o.update(n)}catch{let t=new t9(i_("Failed to update DRM license. This may be an issue with the player or your protected content."),t9.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000003,a(e,t)}},d=()=>{o.keyStatuses.forEach(t=>{let i;"internal-error"===t?((i=new t9(i_("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),t9.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",i.muxCode=5000005):("output-restricted"===t||"output-downscaled"===t)&&((i=new t9(i_("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),t9.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",i.muxCode=5000006),i&&a(e,i)})};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new t9(i_("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),t9.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory="drm",e.muxCode=5000002,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u})({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}})(e,t):id(t,"encrypted",()=>{let e=new t9(i_("Attempting to play DRM-protected content without providing a DRM token."),t9.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000002,aG(t,e)},{once:!0}),t.setAttribute("src",o),e.startTime&&((null!=(r=av.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",aK,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",aj),t.addEventListener("error",aY),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),id(t,"pause",d),id(t,"seeked",d),id(t,"play",()=>{t.ended||aI(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else if(i&&o){let a,r;i.once(t3.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u,c;let h,m,p,v,b,{streamType:g,targetLiveWindow:f,liveEdgeStartOffset:E,lowLatency:y}=(m=ih(h=e.type),p=im(h),b=!!(null!=(c=e.partList)&&c.length),m===ie&&(v=b?2*e.partTarget:3*e.targetduration),{streamType:m,targetLiveWindow:p,liveEdgeStartOffset:v,lowLatency:b});if(g===ie){y?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=av.get(t))?o:{}).seekable=e}(null!=(l=av.get(t))?l:{}).liveEdgeStartOffset=E,(null!=(d=av.get(t))?d:{}).targetLiveWindow=f,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=av.get(t))?u:{}).streamType=g,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),h(),aA(t)!==ie||Number.isFinite(t.duration)||(i.on(t3.Events.LEVEL_UPDATED,h),id(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(t3.Events.LEVELS_UPDATED,h)}))});let s=null!=(n=e.maxReconnectRetries)?n:0,l=s>0?(({hls:e,mediaEl:t,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,d=!1,u=!1,c=!1,h=()=>{null!=o&&(clearTimeout(o),o=void 0)},m=e=>(null==e?void 0:e.muxCode)===2000003,p=()=>{!c&&i?e.loadSource(i):e.startLoad(t.currentTime)},v=()=>{let e=a.get(t);!(null!=e&&e.networkError)||u||!t.paused&&t.readyState<HTMLMediaElement.HAVE_FUTURE_DATA&&((()=>{let e=a.get(t);if(m(null==e?void 0:e.error))return;let i=new t9(i_("Attempting to reconnect..."),t9.MEDIA_ERR_NETWORK,!1);i.errorCategory=t4,i.muxCode=2000003,e&&(e.error=i),t.dispatchEvent(new CustomEvent("error",{detail:i}))})(),(()=>{if(null==o&&!d){if(l>=n){let e;return d=!1,u=!0,h(),(e=new t9(i_("Network error, try reloading."),t9.MEDIA_ERR_NETWORK,!0)).errorCategory=t4,e.reload=!0,r(t,e)}d=!0,o=setTimeout(()=>{o=void 0,l+=1,p()},Math.min(1e3*2**l,3e4))}})())},b=()=>{let e=a.get(t);null!=e&&e.networkError&&(l=0,u=!1,h(),d=!0,p())};return null==(s=globalThis.addEventListener)||s.call(globalThis,"online",b),e.on(t3.Events.FRAG_BUFFERED,()=>{let e=a.get(t);e&&(e.networkError||m(e.error))&&(e.networkError=!1,d=!1,l=0,u=!1,h(),e.error&&(e.error=null,t.dispatchEvent(new Event("emptied"))))}),id(t,"playing",()=>{let e=a.get(t);null!=e&&e.networkError&&(d=!1,l=0,u=!1,h(),e.error&&(e.error=null))}),id(t,"waiting",v),t.addEventListener("teardown",()=>{var e;null==(e=globalThis.removeEventListener)||e.call(globalThis,"online",b),h()},{once:!0}),{handleHlsError:(e,i)=>{var r,n;let s;if(e.type!==t3.ErrorTypes.NETWORK_ERROR)return!1;let o=null!=(n=null==(r=e.response)?void 0:r.code)?n:0;return(2000002===i.muxCode||0===o||o>=500)&&!!e.fatal&&((s=a.get(t))&&(s.networkError=!0),d=!1,v(),!0)},onManifestLoaded:()=>{c=!0,d=!1,h()}}})({hls:i,mediaEl:t,src:o,muxMediaState:av,saveAndDispatchError:aG,maxRetries:s}):void 0;i.on(t3.Events.ERROR,(a,r)=>{var n,s;let o=a7(r,e);if(2412e3===o.muxCode){let e=null!=(n=av.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new t9(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),aG(t,s);let l=setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let i=new t9("Network error, try reloading.",o.code,o.fatal);Object.assign(i,o),i.reload=!0,aG(t,i);return}}null!=l&&l.handleHlsError(r,o)||aG(t,o)}),i.on(t3.Events.MANIFEST_LOADED,()=>{null==l||l.onManifestLoaded();let e=av.get(t);null!=e&&e.networkError||e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",aY),id(t,"waiting",d),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(t3.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(t3.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}});let r=()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)};e.audioTracks.addEventListener("change",r),t.on(t3.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)};null==(i=e.videoRenditions)||i.addEventListener("change",n);let s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),s()};t.once(t3.Events.DESTROYING,()=>{var t,i;o(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(i=e.videoRenditions)||i.removeEventListener("change",n)})}(e,i),i.on(t3.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:a})=>{a.forEach(e=>{var a,r;let n=null!=(a=e.subtitleTrack)?a:e.closedCaptions,s=i.subtitleTracks.findIndex(({lang:t,name:i,type:a})=>t==(null==n?void 0:n.lang)&&i===e.label&&a.toLowerCase()===e.kind),o=(null!=(r=e._id)?r:e.default)?"default":`${e.kind}${s}`;iL(t,e.kind,e.label,null==n?void 0:n.lang,o,e.default)})}),a=()=>{if(!i.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let a=i.subtitleTracks[i.subtitleTrack],r=a?a.default?"default":`${i.subtitleTracks[i.subtitleTrack].type.toLowerCase()}${i.subtitleTrack}`:void 0;if(i.subtitleTrack<0||(null==e?void 0:e.id)!==r){let t=i.subtitleTracks.findIndex(({lang:t,name:i,type:a,default:r})=>"default"===e.id&&r||t==e.language&&i===e.label&&a.toLowerCase()===e.kind);i.subtitleTrack=t}(null==e?void 0:e.id)===r&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",a),i.on(t3.Events.CUES_PARSED,(e,{track:i,cues:a})=>{let r=t.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),i.once(t3.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",a),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),r=()=>{Array.from(t.textTracks).forEach(e=>{var i;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(i=e.cues)&&i.length)){let i="track";e.kind&&(i+=`[kind="${e.kind}"]`),e.label&&(i+=`[label="${e.label}"]`);let a=t.querySelector(i),r=null==a?void 0:a.getAttribute("src");a&&r&&(a.removeAttribute("src"),setTimeout(()=>{a.setAttribute("src",r)},0))}"hidden"!==e.mode&&(e.mode="hidden")}})},i.once(t3.Events.MANIFEST_LOADED,r),i.once(t3.Events.MEDIA_ATTACHED,r),i.attachMedia(t)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function aK(e){var t;let i=e.target,a=null==(t=av.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function aj(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new t9(i,a);if(t.src&&a===t9.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=ak(t))?e:t.error;(null==i?void 0:i.code)===t9.MEDIA_ERR_SRC_NOT_SUPPORTED&&aG(t,r)},500);if(t.src&&(a!==t9.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}aG(t,r)}function aG(e,t){var i;t.fatal&&((null!=(i=av.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function aY(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof t9))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=av.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var az,aQ,aZ,aX,aJ,a0,a1,a2,a3,a4,a5,a9,a8,a6,a7=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[t3.ErrorTypes.NETWORK_ERROR]:t9.MEDIA_ERR_NETWORK,[t3.ErrorTypes.MEDIA_ERROR]:t9.MEDIA_ERR_DECODE,[t3.ErrorTypes.KEY_SYSTEM_ERROR]:t9.MEDIA_ERR_ENCRYPTED},s,o=[t3.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,t3.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?t9.MEDIA_ERR_NETWORK:n[e.type];if(o===t9.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===t3.ErrorTypes.KEY_SYSTEM_ERROR?"drm":e.type===t3.ErrorTypes.NETWORK_ERROR?t4:void 0)?i:t4;s=null!=(a=iZ(e.response,r,t,e.fatal))?a:new t9("",o,e.fatal)}else o===t9.MEDIA_ERR_ENCRYPTED?e.details===t3.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new t9(i_("Attempting to play DRM-protected content without providing a DRM token."),t9.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000002):e.details===t3.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new t9(i_("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),t9.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000001):e.details===t3.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new t9(i_("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),t9.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",s.muxCode=5000002):e.details===t3.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new t9(i_("Failed to update DRM license. This may be an issue with the player or your protected content."),t9.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000003):e.details===t3.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new t9(i_("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t9.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000004):e.details===t3.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new t9(i_("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),t9.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000005):e.details===t3.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new t9(i_("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),t9.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",s.muxCode=5000006):((s=new t9(e.error.message,t9.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5e6):s=new t9("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s},re=e.i(502709),rt=e=>{throw TypeError(e)},ri=(e,t,i)=>t.has(e)||rt("Cannot "+i),ra=(e,t,i)=>(ri(e,t,"read from private field"),i?i.call(e):t.get(e)),rr=(e,t,i)=>t.has(e)?rt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rn=(e,t,i,a)=>(ri(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rs=(e,t,i)=>(ri(e,t,"access private method"),i),ro=(()=>{try{return"0.31.6"}catch{}return"UNKNOWN"})(),rl=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,rd={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},ru=Object.values(rd),rc="mux-video",rh=class extends re.a{constructor(){super(),rr(this,a5),rr(this,az),rr(this,aQ),rr(this,aZ,{}),rr(this,aX,{}),rr(this,aJ),rr(this,a0),rr(this,a1),rr(this,a2),rr(this,a3,""),rr(this,a4,e=>{var t,i,a;let r=(i=this.nativeEl,null==(a=av.get(i))?void 0:a.metadata),n=null!=(t=this.metadata)?t:{};this.metadata={...r,...n},(null==r?void 0:r["com.mux.video.branding"])==="mux-free-plan"&&(rn(this,a3,"default"),this.updateLogo())}),rr(this,a8),rn(this,aQ,af())}static get NAME(){return rc}static get VERSION(){return ro}static get observedAttributes(){var e;return[...ru,...null!=(e=re.a.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?rl:`<img part="logo" src="${e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${re.a.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[rd.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(rd.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?ir.includes(e)?this.setAttribute(rd.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${ir.join()}`):this.removeAttribute(rd.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(rd.PLAYER_INIT_TIME)?+this.getAttribute(rd.PLAYER_INIT_TIME):ra(this,aQ)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(rd.PLAYER_INIT_TIME):this.setAttribute(rd.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=ra(this,a1))?e:rc}set playerSoftwareName(e){rn(this,a1,e)}get playerSoftwareVersion(){var e;return null!=(e=ra(this,a0))?e:ro}set playerSoftwareVersion(e){rn(this,a0,e)}get _hls(){var e;return null==(e=ra(this,a5,a9))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=ak(this.nativeEl))?e:null}get errorTranslator(){return ra(this,a2)}set errorTranslator(e){rn(this,a2,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(rd.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(rd.TYPE,e):this.removeAttribute(rd.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(rd.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(rd.DEBUG,""):this.removeAttribute(rd.DEBUG))}get disableTracking(){return this.hasAttribute(rd.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(rd.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(rd.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(rd.DISABLE_COOKIES,""):this.removeAttribute(rd.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(rd.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(rd.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(rd.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(rd.MAX_RECONNECT_RETRIES);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(null==e?this.removeAttribute(rd.MAX_RECONNECT_RETRIES):this.setAttribute(rd.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(rd.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(rd.START_TIME):this.setAttribute(rd.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(rd.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(null==e?this.removeAttribute(rd.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(rd.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(rd.INITIAL_ESTIMATE_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(null==e?this.removeAttribute(rd.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(rd.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(rd.MIN_PRELOAD_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(null==e?this.removeAttribute(rd.MIN_PRELOAD_SEGMENTS):this.setAttribute(rd.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(rd.PLAYBACK_ID)?this.getAttribute(rd.PLAYBACK_ID):null!=(e=aT(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(rd.PLAYBACK_ID,e):this.removeAttribute(rd.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(rd.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(rd.MAX_RESOLUTION,e):this.removeAttribute(rd.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(rd.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(rd.MIN_RESOLUTION,e):this.removeAttribute(rd.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(rd.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(rd.MAX_AUTO_RESOLUTION):this.setAttribute(rd.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(rd.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(rd.RENDITION_ORDER,e):this.removeAttribute(rd.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(rd.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(rd.PROGRAM_START_TIME):this.setAttribute(rd.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(rd.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(rd.PROGRAM_END_TIME):this.setAttribute(rd.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(rd.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(rd.ASSET_START_TIME):this.setAttribute(rd.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(rd.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(rd.ASSET_END_TIME):this.setAttribute(rd.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(rd.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(rd.CUSTOM_DOMAIN,e):this.removeAttribute(rd.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:ra(this,a8)}set capRenditionToPlayerSize(e){rn(this,a8,e)}get drmToken(){var e;return null!=(e=this.getAttribute(rd.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(rd.DRM_TOKEN,e):this.removeAttribute(rd.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(rd.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(rd.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(rd.PLAYBACK_ID)){let[,e]=iu(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(rd.PLAYBACK_TOKEN,e):this.removeAttribute(rd.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(rd.PLAYBACK_TOKEN),t=this.getAttribute(rd.DRM_TOKEN);return{...ra(this,aX),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){rn(this,aX,null!=e?e:{})}get ended(){return aR(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(rd.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(rd.ENV_KEY,e):this.removeAttribute(rd.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(rd.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(rd.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(rd.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(rd.STREAM_TYPE))?e:aA(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(rd.STREAM_TYPE,e):this.removeAttribute(rd.STREAM_TYPE))}get targetLiveWindow(){var e,t,i;return this.hasAttribute(rd.TARGET_LIVE_WINDOW)?+this.getAttribute(rd.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(i=null==(t=av.get(e))?void 0:t.targetLiveWindow)?i:0/0)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(rd.TARGET_LIVE_WINDOW):this.setAttribute(rd.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(rd.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(e=>{var t;let i=null==(t=av.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return 0/0;let a=aw(e);return a.length?a.end(a.length-1)-i:0/0})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(rd.LIVE_EDGE_OFFSET))return+this.getAttribute(rd.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(rd.LIVE_EDGE_OFFSET):this.setAttribute(rd.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return aw(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),iH(this.nativeEl,e)}get activeCuePoint(){return iB(this.nativeEl)}get cuePoints(){return function(e,t={label:iN}){let i=iM(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>iW(e)):[]}(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),iG(this.nativeEl,e)}get activeChapter(){return iz(this.nativeEl)}get chapters(){return function(e,t={label:iq}){var i;let a=iM(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,t=>iF(t,e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(0/0)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:0/0)}get preferPlayback(){let e=this.getAttribute(rd.PREFER_PLAYBACK);if("mse"===e||e===ii)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===ii?this.setAttribute(rd.PREFER_PLAYBACK,e):this.removeAttribute(rd.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![rd.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...ra(this,aZ)}}set metadata(e){rn(this,aZ,null!=e?e:{}),this.mux&&this.mux.emit("hb",ra(this,aZ))}get _hlsConfig(){return ra(this,aJ)}set _hlsConfig(e){rn(this,aJ,e)}get logo(){var e;return null!=(e=this.getAttribute(rd.LOGO))?e:ra(this,a3)}set logo(e){e?this.setAttribute(rd.LOGO,e):this.removeAttribute(rd.LOGO)}load(){aL(this,this.nativeEl,ra(this,a5,a9))}unload(){ax(this.nativeEl,ra(this,a5,a9),this)}attributeChangedCallback(e,t,i){var a,r;switch(re.a.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case rd.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case rd.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?rs(this,a5,a6).call(this):e&&!a?this.unload():e&&a&&(this.unload(),rs(this,a5,a6).call(this));break}case"autoplay":if(i===t)break;null==(a=ra(this,a5,a9))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=ra(this,a5,a9))||r.setPreload(i);break;case rd.PLAYBACK_ID:case rd.CUSTOM_DOMAIN:case rd.MAX_RESOLUTION:case rd.MIN_RESOLUTION:case rd.RENDITION_ORDER:case rd.PROGRAM_START_TIME:case rd.PROGRAM_END_TIME:case rd.ASSET_START_TIME:case rd.ASSET_END_TIME:case rd.PLAYBACK_TOKEN:this.hasAttribute(rd.PLAYBACK_ID)&&(this.src=ay(this));break;case rd.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case rd.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case rd.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case rd.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case rd.LOGO:(null==i||i!==t)&&this.updateLogo();break;case rd.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),rs(this,a5,a6).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case rd.DISABLE_COOKIES:(null==i||i!==t)&&((e,t,i)=>{if(!t)return;let a=!!e.disableCookies,r=av.get(t);!r||r.muxDataDisableCookies===a||(t&&(t.mux&&(t.mux.deleted||t.mux.destroy(),delete t.mux),aM.has(t)||aM.set(t,Promise.resolve().then(()=>{var a,r;aM.delete(t);let n=av.get(t);n&&(!t.mux||t.mux.deleted)&&aV(e,t,null==(r=null!=(a=n.coreReference)?a:i)?void 0:r.engine)}))),a&&Promise.resolve().then(()=>{let t,i;e.disableCookies&&(t=new Date(0).toUTCString(),i=new Set(["muxData"]),document.cookie.split(";").forEach(e=>{let t=e.split("=")[0].trim();t.startsWith("muxData")&&i.add(t)}),i.forEach(e=>{document.cookie=`${e}=;expires=${t};path=/`}))}))})(this,this.nativeEl,ra(this,a5,a9));break;case rd.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(ra(this,a3)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",ra(this,a4)),this.nativeEl&&this.src&&!ra(this,a5,a9)&&rs(this,a5,a6).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",ra(this,a4)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};az=new WeakMap,aQ=new WeakMap,aZ=new WeakMap,aX=new WeakMap,aJ=new WeakMap,a0=new WeakMap,a1=new WeakMap,a2=new WeakMap,a3=new WeakMap,a4=new WeakMap,a5=new WeakSet,a9=function(){var e,t;return e=this.nativeEl,null==(t=av.get(e))?void 0:t.coreReference},a8=new WeakMap,a6=async function(){ra(this,az)||(await rn(this,az,Promise.resolve()),rn(this,az,null),this.load())};let rm=new WeakMap;class rp extends Error{}class rv extends Error{}let rb=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function rg(){return globalThis.cast?.framework?.CastContext.getInstance()}function rf(){return rg()?.getCurrentSession()}function rE(){return rf()?.getSessionObj().media[0]}function ry(e){return rg().setOptions({...r_(),...e})}function r_(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function rT(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}function rk(e){let t=e.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());return t?.trim()}async function rA(e){if(!e)return!1;if(/\.m3u8?(\?.*)?$/i.test(e))return!0;if(e.startsWith("blob:"))return!1;try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return rb.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function rw(e){if(!e||e.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{let t=await (await fetch(e)).text(),i=t,a=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(t);if(a.length>0){let t=new URL(a[0],e).toString();i=await (await fetch(t)).text()}let r=rk(i),n=rT(r),s=function(e){for(let t of e.split("\n")){let e=t.trim();if(e.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(e)){let t=e.match(/URI="([^"]+)"/i);if(t)return t[1]}}}(t),o=n;if(s)try{let t=new URL(s,e).toString(),i=await (await fetch(t)).text(),a=rk(i);o=rT(a)??n}catch(e){console.error("Error while trying to parse the audio rendition playlist",e)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}let rS=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),rI=new WeakSet;rH=()=>{globalThis.chrome?.cast?.isAvailable?t||(t=cast.framework,rg().addEventListener(t.CastContextEventType.CAST_STATE_CHANGED,e=>{rS.forEach(t=>rm.get(t).onCastStateChanged?.(e))}),rg().addEventListener(t.CastContextEventType.SESSION_STATE_CHANGED,e=>{rS.forEach(t=>rm.get(t).onSessionStateChanged?.(e))}),rS.forEach(e=>rm.get(e).init?.())):console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable)},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?rH():customElements.whenDefined("google-cast-button").then(rH):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(rH)};let rC=0;class rR extends EventTarget{#e;#t;#i;#a;#r="disconnected";#n=!1;#s=new Set;#o=new WeakMap;#l=()=>this.#d();constructor(e){super(),this.#e=e,rS.add(this),rm.set(this,{init:()=>this.#u(),onCastStateChanged:()=>this.#c(),onSessionStateChanged:()=>this.#h(),getCastPlayer:()=>this.#m}),this.#u()}destroy(){this.#e?.textTracks?.removeEventListener("change",this.#l),this.#a&&this.#i?.controller&&Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.removeEventListener(e,t)}),this.#e&&rI.delete(this.#e),this.#t=!1}get #m(){if(rI.has(this.#e))return this.#i}get state(){return this.#r}async watchAvailability(e){if(this.#e.disableRemotePlayback)throw new rp("disableRemotePlayback attribute is present.");return this.#o.set(e,++rC),this.#s.add(e),queueMicrotask(()=>e(this.#p())),rC}async cancelWatchAvailability(e){if(this.#e.disableRemotePlayback)throw new rp("disableRemotePlayback attribute is present.");e?this.#s.delete(e):this.#s.clear()}async prompt(){if(this.#e.disableRemotePlayback)throw new rp("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new rv("The RemotePlayback API is disabled on this platform.");let e=rI.has(this.#e);rI.add(this.#e),ry(this.#e.castOptions),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{await rg().requestSession()}catch(t){if(e||rI.delete(this.#e),"cancel"===t)return;throw Error(t)}rm.get(this.#e)?.loadOnPrompt?.()}#v(){rI.has(this.#e)&&(Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.removeEventListener(e,t)}),rI.delete(this.#e),this.#e.muted=this.#i.isMuted,this.#e.currentTime=this.#i.savedPlayerState.currentTime,!1===this.#i.savedPlayerState.isPaused&&this.#e.play())}#p(){let e=rg()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#c(){let e=rg().getCastState();if(rI.has(this.#e)&&"CONNECTING"===e&&(this.#r="connecting",this.dispatchEvent(new Event("connecting"))),!this.#n&&e?.includes("CONNECT"))for(let e of(this.#n=!0,this.#s))e(!0);else if(this.#n&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#n=!1,this.#s))e(!1)}async #h(){let{SESSION_RESUMED:e}=t.SessionState;if(rg().getSessionState()===e&&this.#e.castSrc===rE()?.media.contentId){rI.add(this.#e),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{var i;await (i=new chrome.cast.media.GetStatusRequest,new Promise((e,t)=>{rE().getStatus(i,e,t)}))}catch(e){console.error(e)}this.#a[t.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#a[t.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#u(){t&&!this.#t&&(this.#t=!0,ry(this.#e.castOptions),this.#e.textTracks.addEventListener("change",this.#l),this.#c(),this.#i=new t.RemotePlayer,new t.RemotePlayerController(this.#i),this.#a={[t.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#r="connected",this.dispatchEvent(new Event("connect"))):(this.#v(),this.#r="disconnected",this.dispatchEvent(new Event("disconnect")))},[t.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#e.dispatchEvent(new Event("durationchange"))},[t.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[t.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[t.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#m?.isMediaLoaded&&this.#e.dispatchEvent(new Event("timeupdate"))},[t.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#e.dispatchEvent(new Event("resize"))},[t.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#e.dispatchEvent(new Event(this.paused?"pause":"play"))},[t.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#m?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#e.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#m?.playerState]))},[t.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#m?.isMediaLoaded&&(await Promise.resolve(),this.#b())}})}#b(){this.#d()}async #d(){let e;if(!this.#m)return;let t=(this.#i.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#e.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=rf()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{rE().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let rL=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#g={paused:!1};#f=r_();#E;#y;get remote(){if(this.#y)return this.#y;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),rm.set(this,{loadOnPrompt:()=>this.#_()}),this.#y=new rR(this)}return super.remote}get #m(){return rm.get(this.#y)?.getCastPlayer?.()}disconnectedCallback(){this.#y?.destroy(),this.#y=null,rm.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#f.receiverApplicationId=i;return}if(this.#m)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #_(){this.#g.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#m)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],await rA(this.castSrc)){e.contentType||(e.contentType="application/x-mpegURL");let{videoFormat:t,audioFormat:i}=await rw(this.castSrc);t?.includes("m4s")||t?.includes("mp4")||t?.includes("m4a")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):i?.includes("aac")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(t?.includes("ts")||i?.includes("ts"))&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#g.paused,r.activeTrackIds=i,await rf()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#m){this.#m.isPaused&&this.#m.controller?.playOrPause();return}return super.play()}pause(){if(this.#m){this.#m.isPaused||this.#m.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#f}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){let e=this.currentSrc,t=e?.startsWith("blob:")?void 0:e;return this.getAttribute("cast-src")??this.querySelector("source")?.src??t??this.getAttribute("src")??void 0}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#E}set castCustomData(e){let t=typeof e;["object","undefined"].includes(t)?this.#E=e:console.error(`castCustomData must be nullish or an object but value was of type ${t}`)}get readyState(){if(this.#m)switch(this.#m.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#m?this.#m.isPaused:super.paused}get muted(){return this.#m?this.#m?.isMuted:super.muted}set muted(e){if(this.#m){(e&&!this.#m.isMuted||!e&&this.#m.isMuted)&&this.#m.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#m?this.#m?.volumeLevel??1:super.volume}set volume(e){if(this.#m){this.#m.volumeLevel=+e,this.#m.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#m&&this.#m?.isMediaLoaded?this.#m?.duration??0/0:super.duration}get currentTime(){return this.#m&&this.#m?.isMediaLoaded?this.#m?.currentTime??0:super.currentTime}set currentTime(e){if(this.#m){this.#m.currentTime=e,this.#m.controller?.seek();return}super.currentTime=e}};e.i(791205);var rM=e.i(7180),rx=e=>{throw TypeError(e)},rD=(e,t,i)=>t.has(e)||rx("Cannot "+i),rO=(e,t,i)=>(rD(e,t,"read from private field"),i?i.call(e):t.get(e)),rP=(e,t,i)=>t.has(e)?rx("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rN=(e,t,i,a)=>(rD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rU=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends rU{});var rH,rW,rB=class extends rU{},r$=class{constructor(e,t={}){rP(this,rW),rN(this,rW,null==t?void 0:t.detail)}get detail(){return rO(this,rW)}initCustomEvent(){}};rW=new WeakMap;var rq={document:{createElement:function(e,t){return new rB}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(rB)},CustomEvent:r$,EventTarget:rU,HTMLElement:rB,HTMLVideoElement:class extends rU{}},rV="u"<typeof window||void 0===globalThis.customElements,rF=rV?rq:globalThis;rV&&rq.document;var rK,rj=class extends rL((0,rM.f)(rh)){constructor(){super(...arguments),rP(this,rK)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=rO(this,rK))?e:this.muxCastCustomData}set castCustomData(e){rN(this,rK,e)}};rK=new WeakMap,rF.customElements.get("mux-video")||(rF.customElements.define("mux-video",rj),rF.MuxVideoElement=rj);let rG={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},rY={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},rz={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},rQ=Object.entries(rz),rZ=rQ.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),rX=rQ.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),rJ=Object.entries(rX).reduce((e,[t,i])=>{let a=rZ[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),r0=Object.entries(rZ).reduce((e,[t,i])=>{let a=rX[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),r1={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},r2={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},r3={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},r4={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},r5={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},r9={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function r8(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function r6(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function r7(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function ne(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function nt(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function ni(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}e.s(["AttributeToStateChangeEventMap",0,r0,"AvailabilityStates",0,r4,"MediaStateChangeEvents",0,rX,"MediaStateReceiverAttributes",0,rY,"MediaUIAttributes",0,rZ,"MediaUIEvents",0,rG,"MediaUIProps",0,rz,"PointerTypes",0,r3,"ReadyStates",0,{HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},"StateChangeEventToAttributeMap",0,rJ,"StreamTypes",0,r5,"TextTrackKinds",0,r1,"TextTrackModes",0,r2,"VolumeLevels",0,{HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},"WebkitPresentationModes",0,r9],992617),e.i(992617);let na=e=>new Promise(t=>setTimeout(t,e)),nr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function nn(e){return String(e).replace(/[&<>"']/g,e=>nr[e])}let ns={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},no=(null==(cc=globalThis.navigator)?void 0:cc.language)||"en",nl=(e,t={})=>(e=>{var t,i,a;let[r]=no.split("-");return(null==(t=ns[no])?void 0:t[e])||(null==(i=ns[r])?void 0:i[e])||(null==(a=ns.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`),nd=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],nu=(e,t)=>{let i=1===e?nl(nd[t].singular):nl(nd[t].plural);return`${e} ${i}`},nc=e=>{if(!nt(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&nu(e,t)).filter(e=>e).join(", ");return i?nl("{time} remaining",{time:r}):0===t?nu(0,2):r};function nh(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||1/0===e)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}let nm=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});e.s(["emptyTimeRanges",0,nm,"formatAsTimePhrase",0,nc,"formatTime",0,nh,"serializeTimeRanges",0,function(e=nm){return Array.from(e).map((t,i)=>[Number(e.start(i).toFixed(3)),Number(e.end(i).toFixed(3))].join(":")).join(" ")}],538333),e.i(538333);class np{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class nv extends np{}class nb extends nv{constructor(){super(...arguments),this.role=null}}let ng={createElement:function(){return new nf.HTMLElement},createElementNS:function(){return new nf.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},nf={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:ng,Node:nv,Element:nb,HTMLElement:class extends nb{constructor(){super(...arguments),this.innerHTML=""}get content(){return new nf.DocumentFragment}},DocumentFragment:class extends np{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},nE="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"u"<typeof window||void 0===window.customElements,ny=Object.keys(nf).every(e=>e in globalThis),n_=nE&&!ny?nf:globalThis,nT=nE&&!ny?ng:globalThis.document,nk=new WeakMap,nA=e=>{let t=nk.get(e);return t||nk.set(e,t=new Set),t},nw=new n_.ResizeObserver(e=>{for(let t of e)for(let e of nA(t.target))e(t)});function nS(e,t){nA(e).add(t),nw.observe(e)}function nI(e,t){let i=nA(e);i.delete(t),i.size||nw.unobserve(e)}function nC(e){let t={};for(let i of e)t[i.name]=i.value;return t}function nR(e){var t;return null!=(t=nL(e))?t:nO(e,"media-controller")}function nL(e){var t;let{MEDIA_CONTROLLER:i}=rY,a=e.getAttribute(i);if(a)return null==(t=nN(e))?void 0:t.getElementById(a)}let nM=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},nx=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},nD=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||nD(e,t.getRootNode().host)),nO=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||nO(e.getRootNode().host,t)};function nP(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=nP(i.shadowRoot))?t:i:null}function nN(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function nU(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function nH(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||nW(e,t)}function nW(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let s=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(a=n.sheet.cssRules)?void 0:a[s]}function nB(e,t,i=0/0){let a=e.getAttribute(t);return null!=a?+a:i}function n$(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}nB(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function nq(e,t){return e.hasAttribute(t)}function nV(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}nq(e,t)!=i&&e.toggleAttribute(t,i)}function nF(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function nK(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;nF(e,t,void 0)!==a&&e.setAttribute(t,a)}var nj=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nG=(e,t,i)=>(nj(e,t,"read from private field"),i?i.call(e):t.get(e)),nY=(e,t,i,a)=>(nj(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nz extends n_.HTMLElement{constructor(){super();var e=ch;if(e.has(this))throw TypeError("Cannot add the same private member more than once");if(e instanceof WeakSet?e.add(this):e.set(this,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rY.MEDIA_CONTROLLER,rZ.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rY.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=nG(this,ch))?void 0:a.unassociateElement)||r.call(a,this),nY(this,ch,null)),i&&this.isConnected&&(nY(this,ch,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=nG(this,ch))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;let r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),nY(this,ch,(i=this,(r=i.getAttribute(rY.MEDIA_CONTROLLER))?null==(a=i.getRootNode())?void 0:a.getElementById(r):nO(i,"media-controller"))),this.getAttribute(rY.MEDIA_CONTROLLER)&&(null==(t=null==(e=nG(this,ch))?void 0:e.associateElement)||t.call(e,this)),nG(this,ch)&&(nG(this,ch).addEventListener("pointerdown",this),nG(this,ch).addEventListener("click",this),nG(this,ch).hasAttribute("tabindex")||(nG(this,ch).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(rY.MEDIA_CONTROLLER)&&(null==(t=null==(e=nG(this,ch))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=nG(this,ch))||i.removeEventListener("pointerdown",this),null==(a=nG(this,ch))||a.removeEventListener("click",this),nY(this,ch,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===r3.TOUCH)return void this.handleTap(e);if(d===r3.MOUSE||d===r3.PEN)return void this.handleMouseClick(e)}}}get mediaPaused(){return nq(this,rZ.MEDIA_PAUSED)}set mediaPaused(e){nV(this,rZ.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?rG.MEDIA_PLAY_REQUEST:rG.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new n_.CustomEvent(t,{composed:!0,bubbles:!0}))}}ch=new WeakMap,nz.shadowRootOptions={mode:"open"},nz.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},n_.customElements.get("media-gesture-receiver")||n_.customElements.define("media-gesture-receiver",nz);var nQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nZ=(e,t,i)=>(nQ(e,t,"read from private field"),i?i.call(e):t.get(e)),nX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nJ=(e,t,i,a)=>(nQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),n0=(e,t,i)=>(nQ(e,t,"access private method"),i);let n1="audio",n2="autohide",n3="breakpoints",n4="gesturesdisabled",n5="keyboardcontrol",n9="noautohide",n8="userinactive",n6="autohideovercontrols",n7=Object.values(rZ);function se(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(n3))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(rX.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(rX.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class st extends n_.HTMLElement{constructor(){if(super(),nX(this,c_),nX(this,ck),nX(this,cw),nX(this,cI),nX(this,cR),nX(this,cm,void 0),nX(this,cp,0),nX(this,cv,null),nX(this,cb,null),nX(this,cg,void 0),this.breakpointsComputed=!1,nX(this,cf,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),nX(this,cE,!1),nX(this,cy,e=>{nZ(this,cE)||(setTimeout(()=>{se(e.target,e.contentRect.width),nJ(this,cE,!1)},0),nJ(this,cE,!0))}),nX(this,cM,void 0),nX(this,cx,()=>{if(!nZ(this,cM).assignedElements({flatten:!0}).length){nZ(this,cv)&&this.mediaUnsetCallback(nZ(this,cv));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}nJ(this,cm,new MutationObserver(nZ(this,cf)))}static get observedAttributes(){return[n2,n4].concat(n7).filter(e=>![rZ.MEDIA_RENDITION_LIST,rZ.MEDIA_AUDIO_TRACK_LIST,rZ.MEDIA_CHAPTERS_CUES,rZ.MEDIA_WIDTH,rZ.MEDIA_HEIGHT,rZ.MEDIA_ERROR,rZ.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==n2&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(nJ(this,cv,e),e.localName.includes("-")&&await n_.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;nZ(this,cm).observe(this,{childList:!0,subtree:!0}),nS(this,nZ(this,cy));let t=null!=this.getAttribute(n1)?nl("audio player"):nl("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(n8,""),se(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(nJ(this,cM,i),nZ(this,cM).addEventListener("slotchange",nZ(this,cx))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=n_.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;nI(this,nZ(this,cy)),clearTimeout(nZ(this,cb)),nZ(this,cm).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=n_.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),nZ(this,cM)&&(nZ(this,cM).removeEventListener("slotchange",nZ(this,cx)),nJ(this,cM,null)),nJ(this,cE,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){nJ(this,cv,null)}handleEvent(e){switch(e.type){case"pointerdown":nJ(this,cp,e.timeStamp);break;case"pointermove":n0(this,c_,cT).call(this,e);break;case"pointerup":n0(this,ck,cA).call(this,e);break;case"mouseleave":n0(this,cw,cS).call(this);break;case"mouseup":this.removeAttribute(n5);break;case"keyup":n0(this,cR,cL).call(this),this.setAttribute(n5,"")}}set autohide(e){let t=Number(e);nJ(this,cg,isNaN(t)?0:t)}get autohide(){return(void 0===nZ(this,cg)?2:nZ(this,cg)).toString()}get breakpoints(){return nF(this,n3)}set breakpoints(e){nK(this,n3,e)}get audio(){return nq(this,n1)}set audio(e){nV(this,n1,e)}get gesturesDisabled(){return nq(this,n4)}set gesturesDisabled(e){nV(this,n4,e)}get keyboardControl(){return nq(this,n5)}set keyboardControl(e){nV(this,n5,e)}get noAutohide(){return nq(this,n9)}set noAutohide(e){nV(this,n9,e)}get autohideOverControls(){return nq(this,n6)}set autohideOverControls(e){nV(this,n6,e)}get userInteractive(){return nq(this,n8)}set userInteractive(e){nV(this,n8,e)}}cm=new WeakMap,cp=new WeakMap,cv=new WeakMap,cb=new WeakMap,cg=new WeakMap,cf=new WeakMap,cE=new WeakMap,cy=new WeakMap,c_=new WeakSet,cT=function(e){if("mouse"!==e.pointerType&&e.timeStamp-nZ(this,cp)<250)return;n0(this,cI,cC).call(this),clearTimeout(nZ(this,cb));let t=this.hasAttribute(n6);([this,this.media].includes(e.target)||t)&&n0(this,cR,cL).call(this)},ck=new WeakSet,cA=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(n8);[this,this.media].includes(e.target)&&t?n0(this,cw,cS).call(this):n0(this,cR,cL).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&n0(this,cR,cL).call(this)},cw=new WeakSet,cS=function(){if(0>nZ(this,cg)||this.hasAttribute(n8))return;this.setAttribute(n8,"");let e=new n_.CustomEvent(rX.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},cI=new WeakSet,cC=function(){if(!this.hasAttribute(n8))return;this.removeAttribute(n8);let e=new n_.CustomEvent(rX.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},cR=new WeakSet,cL=function(){n0(this,cI,cC).call(this),clearTimeout(nZ(this,cb));let e=parseInt(this.autohide);e<0||nJ(this,cb,setTimeout(()=>{n0(this,cw,cS).call(this)},1e3*e))},cM=new WeakMap,cx=new WeakMap,st.shadowRootOptions={mode:"open"},st.getTemplateHTML=function(e){return`
    <style>
      
      :host([${rZ.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${n1}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${n1}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${n1}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${n1}])[${n4}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${n1}])[${n4}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${n1}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${n1}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${n1}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${n1}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${n9}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${n8}]:not([${rZ.MEDIA_PAUSED}]):not([${rZ.MEDIA_IS_AIRPLAYING}]):not([${rZ.MEDIA_IS_CASTING}]):not([${n1}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${n9}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${n8}]:not([${n9}]):not([${rZ.MEDIA_PAUSED}]):not([${rZ.MEDIA_IS_CASTING}]):not([${n1}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${n8}][${n6}]:not([${n9}]):not([${rZ.MEDIA_PAUSED}]):not([${rZ.MEDIA_IS_CASTING}]):not([${n1}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      
      :host(:not([${n1}])[${rZ.MEDIA_HAS_PLAYED}]) slot[name=poster],
      :host(:not([${n1}])[${rZ.MEDIA_STREAM_TYPE}="${r5.ON_DEMAND}"][${rZ.MEDIA_CURRENT_TIME}]:not([${rZ.MEDIA_CURRENT_TIME}="0"])) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${nz.shadowRootOptions.mode}">
          ${nz.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},n_.customElements.get("media-container")||n_.customElements.define("media-container",st);var si=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sa=(e,t,i)=>(si(e,t,"read from private field"),i?i.call(e):t.get(e)),sr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sn=(e,t,i,a)=>(si(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ss=(e,t,i)=>(si(e,t,"access private method"),i);let so="open";class sl extends n_.HTMLElement{constructor(){super(),sr(this,cN),sr(this,cH),sr(this,cB),sr(this,cq),sr(this,cF),sr(this,cj),sr(this,cD,!1),sr(this,cO,null),sr(this,cP,null)}static get observedAttributes(){return[so,"anchor"]}get open(){return nq(this,so)}set open(e){nV(this,so,e)}handleEvent(e){switch(e.type){case"invoke":ss(this,cq,cV).call(this,e);break;case"focusout":ss(this,cF,cK).call(this,e);break;case"keydown":ss(this,cj,cG).call(this,e)}}connectedCallback(){ss(this,cN,cU).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){ss(this,cN,cU).call(this),e===so&&i!==t&&(this.open?ss(this,cH,cW).call(this):ss(this,cB,c$).call(this))}focus(){sn(this,cO,nP());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}cD=new WeakMap,cO=new WeakMap,cP=new WeakMap,cN=new WeakSet,cU=function(){if(!sa(this,cD)&&(sn(this,cD,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=nH(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},cH=new WeakSet,cW=function(){var e;null==(e=sa(this,cP))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},cB=new WeakSet,c$=function(){var e;null==(e=sa(this,cP))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},cq=new WeakSet,cV=function(e){sn(this,cP,e.relatedTarget),nD(this,e.relatedTarget)||(this.open=!this.open)},cF=new WeakSet,cK=function(e){var t;!nD(this,e.relatedTarget)&&(null==(t=sa(this,cO))||t.focus(),sa(this,cP)&&sa(this,cP)!==e.relatedTarget&&this.open&&(this.open=!1))},cj=new WeakSet,cG=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=sa(this,cO))||n.focus(),this.open=!1))},sl.shadowRootOptions={mode:"open"},sl.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},sl.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},n_.customElements.get("media-chrome-dialog")||n_.customElements.define("media-chrome-dialog",sl);var sd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},su=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let sc="hotkeys",sh=[{keys:[{key:" ",label:"Space"},{key:"k"}],description:"Toggle Playback"},{keys:[{key:"m"}],description:"Toggle mute"},{keys:[{key:"f"}],description:"Toggle fullscreen"},{keys:[{key:"c"}],description:"Toggle captions or subtitles, if available"},{keys:[{key:"p"}],description:"Toggle Picture in Picture"},{keys:[{key:"ArrowLeft",label:"←"},{key:"j"}],description:"Seek back 10s"},{keys:[{key:"ArrowRight",label:"→"},{key:"l"}],description:"Seek forward 10s"},{keys:[{key:"ArrowUp",label:"↑"}],description:"Turn volume up"},{keys:[{key:"ArrowDown",label:"↓"}],description:"Turn volume down"},{keys:[{key:"<",label:"< (SHIFT+,)"}],description:"Decrease playback rate"},{keys:[{key:">",label:"> (SHIFT+.)"}],description:"Increase playback rate"},{keys:[{key:"shift+/",label:"SHIFT+/"}],description:"Show keyboard shortcuts"}];function sm(e){return" "===e?"nospace":`no${e.toLowerCase()}`}function sp(e){let t,i=(t=new Set(null==e?void 0:e.split(/\s+/)),sh.map(({keys:e,description:i})=>({keys:e.filter(({key:e})=>!t.has(sm(e))),description:i})).filter(({keys:e})=>e.length)).map(({keys:e,description:t})=>{let i=e.map(({key:e,label:t=e},i)=>i>0?`<span class="key-separator">or</span><span class="key">${t}</span>`:`<span class="key">${t}</span>`).join("");return`
        <tr>
          <td>
            <div class="key-combo">${i}</div>
          </td>
          <td class="description">${t}</td>
        </tr>
      `}).join("");return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${i}</table>
  `}class sv extends sl{constructor(){super(...arguments),su(this,cY,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),su(this,cz,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}static get observedAttributes(){return[...super.observedAttributes,sc]}get hotkeys(){var e;return null!=(e=nF(this,sc))?e:void 0}set hotkeys(e){nK(this,sc,e)}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",sd(this,cY)),document.addEventListener("keydown",sd(this,cz)))}disconnectedCallback(){this.removeEventListener("click",sd(this,cY)),document.removeEventListener("keydown",sd(this,cz))}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),"open"===e)this.open?(this.addEventListener("click",sd(this,cY)),document.addEventListener("keydown",sd(this,cz))):(this.removeEventListener("click",sd(this,cY)),document.removeEventListener("keydown",sd(this,cz)));else if(e===sc&&i!==t){let e=null==(a=this.shadowRoot)?void 0:a.querySelector("#content");e&&(e.innerHTML=sp(i))}}}cY=new WeakMap,cz=new WeakMap,sv.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${sp(e[sc])}
    </slot>
  `},n_.customElements.get("media-keyboard-shortcuts-dialog")||n_.customElements.define("media-keyboard-shortcuts-dialog",sv);var sb=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sg=(e,t,i)=>(sb(e,t,"read from private field"),i?i.call(e):t.get(e)),sf=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sE=(e,t,i,a)=>(sb(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sy{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){sf(this,c0),sf(this,cQ,void 0),sf(this,cZ,void 0),sf(this,cX,void 0),sf(this,cJ,new Set),sE(this,cQ,e),sE(this,cZ,t),sE(this,cX,new Set(i))}[Symbol.iterator](){return sg(this,c0,c1).values()}get length(){return sg(this,c0,c1).size}get value(){var e;return null!=(e=[...sg(this,c0,c1)].join(" "))?e:""}set value(e){var t;e!==this.value&&(sE(this,cJ,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...sg(this,c0,c1)][e]}values(){return sg(this,c0,c1).values()}forEach(e,t){sg(this,c0,c1).forEach(e,t)}add(...e){var t,i;e.forEach(e=>sg(this,cJ).add(e)),(""!==this.value||(null==(t=sg(this,cQ))?void 0:t.hasAttribute(`${sg(this,cZ)}`)))&&(null==(i=sg(this,cQ))||i.setAttribute(`${sg(this,cZ)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>sg(this,cJ).delete(e)),null==(t=sg(this,cQ))||t.setAttribute(`${sg(this,cZ)}`,`${this.value}`)}contains(e){return sg(this,c0,c1).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}cQ=new WeakMap,cZ=new WeakMap,cX=new WeakMap,cJ=new WeakMap,c0=new WeakSet,c1=function(){return sg(this,cJ).size?sg(this,cJ):sg(this,cX)};let s_=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?r1.CAPTIONS:r1.SUBTITLES,language:i,label:r}},sT=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=s_(e);return{...t,...i}}),sk=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?s_(e):e):"string"==typeof e?sT(e):[e]:[],sA=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,sw=(e=[])=>Array.prototype.map.call(e,sA).join(" "),sS=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},sI=(e,t=[],i=[])=>{let a=sk(i).map(sS);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},sC=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:sS(t);return Array.from(e.textTracks).filter(i)},sR=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(rZ.MEDIA_SUBTITLES_SHOWING)},sL="exitFullscreen"in nT?"exitFullscreen":"webkitExitFullscreen"in nT?"webkitExitFullscreen":"webkitCancelFullScreen"in nT?"webkitCancelFullScreen":void 0,sM="fullscreenElement"in nT?"fullscreenElement":"webkitFullscreenElement"in nT?"webkitFullscreenElement":void 0,sx="fullscreenEnabled"in nT?"fullscreenEnabled":"webkitFullscreenEnabled"in nT?"webkitFullscreenEnabled":void 0,sD=()=>{var e;return i||(i=null==(e=null==nT?void 0:nT.createElement)?void 0:e.call(nT,"video"))},sO=async(e=sD())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([sP(e,i.signal),sN(e,t)]);return i.abort(),a},sP=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),sN=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await na(10)}return e.volume!==t},sU=/.*Version\/.*Safari\/.*/.test(n_.navigator.userAgent),sH=(e=sD())=>(!n_.matchMedia("(display-mode: standalone)").matches||!sU)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),sW=(e=sD())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[sx])||i&&"webkitSupportsFullscreen"in i})({documentElement:nT,media:e}),sB=sW(),s$=sH(),sq=!!n_.WebKitPlaybackTargetAvailabilityEvent,sV=!!n_.chrome,sF=e=>sC(e.media,e=>[r1.SUBTITLES,r1.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),sK=e=>sC(e.media,e=>e.mode===r2.SHOWING&&[r1.SUBTITLES,r1.CAPTIONS].includes(e.kind)),sj=(e,t)=>{let i=sF(e),a=sK(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)sI(r2.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=n_.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...n_.navigator.languages]:n_.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;sI(r2.DISABLED,i,a),sI(r2.SHOWING,i,[{language:n,label:s,kind:o}])}}},sG=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?sY(e,t):Object.entries(e).every(([e,i])=>e in t&&sG(i,t[e])))),sY=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>sG(e,t[i])))},sz=Object.values(r5),sQ=sO().then(e=>a=e),sZ=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof n_.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=n_.customElements.get(t);i&&e instanceof i||(await n_.customElements.whenDefined(t),n_.customElements.upgrade(e))}))},sX=new n_.DOMParser,sJ={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==n_.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&n_.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;n_.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===n_.localStorage.getItem("media-chrome-pref-muted");sJ.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?n_.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||n_.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=n_.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;sJ.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&nt(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata","seeking"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:0/0},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[r5.LIVE,r5.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(sz.includes(r))return r===r5.UNKNOWN?a:r;let n=t.duration;return 1/0===n?r5.LIVE:Number.isFinite(n)?r5.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return 0/0;let{targetLiveWindow:i}=t,a=sJ.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===r5.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(sJ.mediaStreamType.get(e)!==r5.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>sF(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>sK(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![r1.CAPTIONS,r1.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||sj(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=sC(i,{kind:r1.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&sX.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&nD(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!nT.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else nT.pictureInPictureElement&&nT.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[sM];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===r9.FULLSCREEN?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(sM in e))return nD(n,r);for(;null==e?void 0:e[sM];){if(e[sM]===r)return!0;e=null==(t=e[sM])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a,r;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(r=t.media)||r.focus()):(e=>{var t;let{documentElement:i}=e;if(sL){let e=null==(t=null==i?void 0:i[sL])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&"connected"===i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&n_.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!sB||!sW(t))return r4.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return s$&&sH(t)?(null==t?void 0:t.disablePictureInPicture)?r4.UNAVAILABLE:void 0:r4.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===a||(null==t?void 0:t.volume)==void 0)return r4.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==a&&sQ.then(t=>e(t?void 0:r4.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return sV&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?r4.UNAVAILABLE:void 0:r4.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>sq?(null==t?void 0:t.availability)==="not-available"?r4.UNAVAILABLE:void 0:r4.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:r4.UNAVAILABLE:r4.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?r4.UNAVAILABLE:void 0:r4.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},s0={[rG.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=sC(l,{kind:r1.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[rG.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[rG.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===r5.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[rG.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[rG.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[rG.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[rG.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[rG.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[rG.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[rG.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[rG.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=sF(t),s=sk(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&n_.localStorage.setItem("media-chrome-pref-subtitles-lang",o),sI(r2.SHOWING,n,s)},[rG.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=sF(t);sI(r2.DISABLED,a,null!=i?i:[])},[rG.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){sj(t,i)},[rG.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[rG.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[rG.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[rG.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[rG.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[rG.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[rG.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[rG.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[rG.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var s1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s2=(e,t,i)=>(s1(e,t,"read from private field"),i?i.call(e):t.get(e)),s3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s4=(e,t,i,a)=>(s1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),s5=(e,t,i)=>(s1(e,t,"access private method"),i);let s9=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],s8="defaultsubtitles",s6="defaultstreamtype",s7="defaultduration",oe="fullscreenelement",ot="hotkeys",oi="keyboardbackwardseekoffset",oa="keyboardforwardseekoffset",or="keyboarddownvolumestep",on="keyboardupvolumestep",os="keysused",oo="lang",ol="loop",od="liveedgeoffset",ou="noautoseektolive",oc="nodefaultstore",oh="nohotkeys",om="nomutedpref",op="nosubtitleslangpref",ov="novolumepref",ob="seektoliveoffset";class og extends st{constructor(){super(),s3(this,he),s3(this,ha),s3(this,hn),s3(this,ho),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,s3(this,c2,new sy(this,ot)),s3(this,c3,void 0),s3(this,c4,void 0),s3(this,c5,null),s3(this,c9,void 0),s3(this,c8,void 0),s3(this,c6,e=>{var t;null==(t=s2(this,c4))||t.dispatch(e)}),s3(this,c7,void 0),s3(this,hi,e=>{let{key:t,shiftKey:i}=e;i&&("/"===t||"?"===t)||s9.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",s2(this,hi))}),this.associateElement(this);let e={};s4(this,c9,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new n_.CustomEvent(r0[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(oh,ot,s6,s8,s7,om,ov,oo,ol,od,ob,ou)}get mediaStore(){return s2(this,c4)}set mediaStore(e){var t,i;(s2(this,c4)&&(null==(t=s2(this,c8))||t.call(this),s4(this,c8,void 0)),s4(this,c4,e),s2(this,c4)||this.hasAttribute(oc))?s4(this,c8,null==(i=s2(this,c4))?void 0:i.subscribe(s2(this,c9))):s5(this,he,ht).call(this)}get fullscreenElement(){var e;return null!=(e=s2(this,c3))?e:this}set fullscreenElement(e){var t;this.hasAttribute(oe)&&this.removeAttribute(oe),s4(this,c3,e),null==(t=s2(this,c4))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return nq(this,s8)}set defaultSubtitles(e){nV(this,s8,e)}get defaultStreamType(){return nF(this,s6)}set defaultStreamType(e){nK(this,s6,e)}get defaultDuration(){return nB(this,s7)}set defaultDuration(e){n$(this,s7,e)}get noHotkeys(){return nq(this,oh)}set noHotkeys(e){nV(this,oh,e)}get keysUsed(){return nF(this,os)}set keysUsed(e){nK(this,os,e)}get liveEdgeOffset(){return nB(this,od)}set liveEdgeOffset(e){n$(this,od,e)}get noAutoSeekToLive(){return nq(this,ou)}set noAutoSeekToLive(e){nV(this,ou,e)}get noVolumePref(){return nq(this,ov)}set noVolumePref(e){nV(this,ov,e)}get noMutedPref(){return nq(this,om)}set noMutedPref(e){nV(this,om,e)}get noSubtitlesLangPref(){return nq(this,op)}set noSubtitlesLangPref(e){nV(this,op,e)}get noDefaultStore(){return nq(this,oc)}set noDefaultStore(e){nV(this,oc,e)}get resolvedLang(){return(()=>{let[e]=no.split("-");return ns[no]?no:ns[e]?e:"en"})()}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,i),e===oh)i!==t&&""===i?(this.hasAttribute(ot)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys(),s5(this,hn,hs).call(this);else if(e===ot)s2(this,c2).value=i,s5(this,hn,hs).call(this);else if(e===s8&&i!==t)null==(a=s2(this,c4))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(s8)}});else if(e===s6)null==(n=s2(this,c4))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(s6))?r:void 0}});else if(e===od&&i!==t)null==(s=s2(this,c4))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(od)?+this.getAttribute(od):void 0,seekToLiveOffset:this.hasAttribute(ob)?+this.getAttribute(ob):this.hasAttribute(od)?+this.getAttribute(od):void 0}});else if(e===ob&&i!==t)null==(o=s2(this,c4))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(ob)?+this.getAttribute(ob):this.hasAttribute(od)?+this.getAttribute(od):void 0}});else if(e===ou)null==(l=s2(this,c4))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(ou)}});else if(e===oe){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;s4(this,c3,e),null==(u=s2(this,c4))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===oo&&i!==t?(no=i,null==(c=s2(this,c4))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===ol&&i!==t?null==(h=s2(this,c4))||h.dispatch({type:rG.MEDIA_LOOP_REQUEST,detail:null!=i}):e===ov&&i!==t?null==(m=s2(this,c4))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(ov)}}):e===om&&i!==t&&(null==(p=s2(this,c4))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(om)}}))}connectedCallback(){var e,t,i;this.associateElement(this),s2(this,c4)||this.hasAttribute(oc)||s5(this,he,ht).call(this),null==(e=s2(this,c4))||e.dispatch({type:"documentelementchangerequest",detail:nT}),null==(t=s2(this,c4))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),s2(this,c4)&&!s2(this,c8)&&s4(this,c8,null==(i=s2(this,c4))?void 0:i.subscribe(s2(this,c9))),void 0!==s2(this,c7)&&s2(this,c4)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=s2(this,c4))||i.dispatch({type:rG.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:s2(this,c7)}))},0),this.hasAttribute(oh)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),s2(this,c4)){let e=s2(this,c4).getState();s4(this,c7,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=s2(this,c4))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=s2(this,c4))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=s2(this,c4))||r.dispatch({type:rG.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}s2(this,c8)&&(null==(n=s2(this,c8))||n.call(this),s4(this,c8,void 0)),this.unassociateElement(this),s2(this,c5)&&(s2(this,c5).remove(),s4(this,c5,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=s2(this,c4))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=s2(this,c4))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){oS(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=oI(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(rG).forEach(t=>{e.addEventListener(t,s2(this,c6))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(rG).forEach(t=>{e.removeEventListener(t,s2(this,c6))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),s2(this,c4)&&Object.entries(s2(this,c4).getState()).forEach(([t,i])=>{oS([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",s5(this,ha,hr))}disableHotkeys(){this.removeEventListener("keydown",s5(this,ha,hr)),this.removeEventListener("keyup",s2(this,hi))}get hotkeys(){return s2(this,c2)}set hotkeys(e){nK(this,ot,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,d;let u,c,h,m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(os))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||s2(this,c2).contains(sm(e.key)))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&s2(this,c2).contains("noshift+/")))switch(e.key){case" ":case"k":u=s2(this,c4).getState().mediaPaused?rG.MEDIA_PLAY_REQUEST:rG.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new n_.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?rG.MEDIA_UNMUTE_REQUEST:rG.MEDIA_MUTE_REQUEST,this.dispatchEvent(new n_.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?rG.MEDIA_EXIT_FULLSCREEN_REQUEST:rG.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new n_.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new n_.CustomEvent(rG.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(oi)?+this.getAttribute(oi):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new n_.CustomEvent(rG.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(oa)?+this.getAttribute(oa):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new n_.CustomEvent(rG.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(on)?+this.getAttribute(on):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new n_.CustomEvent(rG.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(or)?+this.getAttribute(or):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new n_.CustomEvent(rG.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new n_.CustomEvent(rG.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new n_.CustomEvent(rG.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&s5(this,ho,hl).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?rG.MEDIA_EXIT_PIP_REQUEST:rG.MEDIA_ENTER_PIP_REQUEST,h=new n_.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}c2=new WeakMap,c3=new WeakMap,c4=new WeakMap,c5=new WeakMap,c9=new WeakMap,c8=new WeakMap,c6=new WeakMap,c7=new WeakMap,he=new WeakSet,ht=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=sJ,requestMap:r=s0,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||sG(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,b,g,f,E,y,_,T,k,A,w;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await sZ(...Object.values(e));let I=l.length>0&&0===t&&s,C=d.media!==o.media,R=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),x=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),D=d.documentElement!==o.documentElement,O=!!d.media&&(C||I),P=!!(null==(f=d.media)?void 0:f.textTracks)&&(R||I),N=!!(null==(E=d.media)?void 0:E.videoRenditions)&&(L||I),U=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||I),H=!!(null==(_=d.media)?void 0:_.remote)&&(x||I),W=!!d.documentElement&&(D||I),B=O||P||N||U||H||W,$=0===l.length&&1===t&&s,q=!!o.media&&(C||$),V=!!(null==(T=o.media)?void 0:T.textTracks)&&(R||$),F=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(L||$),K=!!(null==(A=o.media)?void 0:A.audioTracks)&&(M||$),j=!!(null==(w=o.media)?void 0:w.remote)&&(x||$),G=!!o.documentElement&&(D||$),Y=q||V||F||K||j||G;if(!(B||Y)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&O&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),q&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),V&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&N&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),F&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),K&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),j&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),G&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&B&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),Y){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else B&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?c(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(s8),defaultDuration:this.hasAttribute(s7)?+this.getAttribute(s7):void 0,defaultStreamType:null!=(e=this.getAttribute(s6))?e:void 0,liveEdgeOffset:this.hasAttribute(od)?+this.getAttribute(od):void 0,seekToLiveOffset:this.hasAttribute(ob)?+this.getAttribute(ob):this.hasAttribute(od)?+this.getAttribute(od):void 0,noAutoSeekToLive:this.hasAttribute(ou),noVolumePref:this.hasAttribute(ov),noMutedPref:this.hasAttribute(om),noSubtitlesLangPref:this.hasAttribute(op)}})},hi=new WeakMap,ha=new WeakSet,hr=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=s2(this,c5))?void 0:t.open)||i||a||!s&&!s9.includes(r))return void this.removeEventListener("keyup",s2(this,hi));let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||s2(this,c2).contains(sm(r))||l||e.preventDefault(),this.addEventListener("keyup",s2(this,hi),{once:!0})},hn=new WeakSet,hs=function(){s2(this,c5)&&(s2(this,c5).hotkeys=s2(this,c2).value||void 0,(this.noHotkeys||s2(this,c2).contains("noshift+/"))&&(s2(this,c5).open=!1))},ho=new WeakSet,hl=function(){s2(this,c5)||(s4(this,c5,nT.createElement("media-keyboard-shortcuts-dialog")),s5(this,hn,hs).call(this),this.appendChild(s2(this,c5))),s2(this,c5).open=!0};let of=Object.values(rZ),oE=Object.values(rz),oy=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(n_.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,rY.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>of.includes(e)):[]},o_=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&n_.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof n_.customElements.get(e.nodeName.toLowerCase()))&&n_.customElements.upgrade(e),oE.some(t=>t in e)||!!oy(e).length},oT=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},ok={[rZ.MEDIA_SUBTITLES_LIST]:sw,[rZ.MEDIA_SUBTITLES_SHOWING]:sw,[rZ.MEDIA_SEEKABLE]:oT,[rZ.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(oT).join(" "),[rZ.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[rZ.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(r8).join(" ")},[rZ.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(r7).join(" ")}},oA=async(e,t,i)=>{var a,r;if(e.isConnected||await na(0),"boolean"==typeof i||null==i)return nV(e,t,i);if("number"==typeof i)return n$(e,t,i);if("string"==typeof i)return nK(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=ok[t])?void 0:a.call(ok,i))?r:i;return e.setAttribute(t,n)},ow=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;o_(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>ow(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!o_(e)?n_.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},oS=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=oy(e),r=t.toLowerCase();a.includes(r)&&oA(e,r,i)})},oI=(e,t,i)=>{ow(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(rG.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(rG.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>ow(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>ow(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>ow(e,t)),Array.prototype.forEach.call(r,e=>ow(e,i))):"attributes"===n&&o===rY.MEDIA_CHROME_ATTRIBUTES&&(o_(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{ow(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(rG.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(rG.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};n_.customElements.get("media-controller")||n_.customElements.define("media-controller",og);let oC="placement",oR="bounds";class oL extends n_.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!nU(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=nO(this,"#"+this.bounds))?e:nR(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;h<0?this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[oC,oR]}get placement(){return nF(this,oC)}set placement(e){nK(this,oC,e)}get bounds(){return nF(this,oR)}set bounds(e){nK(this,oR,e)}}oL.shadowRootOptions={mode:"open"},oL.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},n_.customElements.get("media-tooltip")||n_.customElements.define("media-tooltip",oL);var oM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ox=(e,t,i)=>(oM(e,t,"read from private field"),i?i.call(e):t.get(e)),oD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oO=(e,t,i,a)=>(oM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oP=(e,t,i)=>(oM(e,t,"access private method"),i);let oN="tooltipplacement",oU="disabled",oH="notooltip";class oW extends n_.HTMLElement{constructor(){if(super(),oD(this,hc),oD(this,hb),oD(this,hd,void 0),this.preventClick=!1,this.tooltipEl=null,oD(this,hu,e=>{this.preventClick||this.handleClick(e),setTimeout(ox(this,hm),0)}),oD(this,hm,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),oD(this,hp,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",ox(this,hp))}),oD(this,hv,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",ox(this,hp)):this.addEventListener("keyup",ox(this,hp),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",oN,rY.MEDIA_CONTROLLER,rZ.MEDIA_LANG]}enable(){this.addEventListener("click",ox(this,hu)),this.addEventListener("keydown",ox(this,hv)),this.tabIndex=0}disable(){this.removeEventListener("click",ox(this,hu)),this.removeEventListener("keydown",ox(this,hv)),this.removeEventListener("keyup",ox(this,hp)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rY.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ox(this,hd))?void 0:a.unassociateElement)||r.call(a,this),oO(this,hd,null)),i&&this.isConnected&&(oO(this,hd,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ox(this,hd))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===oN&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===rZ.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),oP(this,hc,hh).call(this)&&ox(this,hm).call(this)}connectedCallback(){var e,t,i;let{style:a}=nH(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(rY.MEDIA_CONTROLLER);r&&(oO(this,hd,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ox(this,hd))?void 0:t.associateElement)||i.call(t,this)),n_.customElements.whenDefined("media-tooltip").then(()=>oP(this,hb,hg).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=ox(this,hd))?void 0:e.unassociateElement)||t.call(e,this),oO(this,hd,null),this.removeEventListener("mouseenter",ox(this,hm)),this.removeEventListener("focus",ox(this,hm)),this.removeEventListener("click",ox(this,hu))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return nF(this,oN)}set tooltipPlacement(e){nK(this,oN,e)}get mediaController(){return nF(this,rY.MEDIA_CONTROLLER)}set mediaController(e){nK(this,rY.MEDIA_CONTROLLER,e)}get disabled(){return nq(this,oU)}set disabled(e){nV(this,oU,e)}get noTooltip(){return nq(this,oH)}set noTooltip(e){nV(this,oH,e)}handleClick(e){}}hd=new WeakMap,hu=new WeakMap,hc=new WeakSet,hh=function(){try{return this.matches(":hover, :focus-visible")}catch{return this.matches(":hover, :focus")}},hm=new WeakMap,hp=new WeakMap,hv=new WeakMap,hb=new WeakSet,hg=function(){this.addEventListener("mouseenter",ox(this,hm)),this.addEventListener("focus",ox(this,hm)),this.addEventListener("click",ox(this,hu));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},oW.shadowRootOptions={mode:"open"},oW.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${oL.shadowRootOptions.mode}">
          ${oL.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},oW.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},oW.getTooltipContentHTML=function(){return""},n_.customElements.get("media-chrome-button")||n_.customElements.define("media-chrome-button",oW);let oB=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,o$=e=>{let t=e.mediaIsAirplaying?nl("stop airplay"):nl("start airplay");e.setAttribute("aria-label",t)};class oq extends oW{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_IS_AIRPLAYING,rZ.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),o$(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_IS_AIRPLAYING&&o$(this)}get mediaIsAirplaying(){return nq(this,rZ.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){nV(this,rZ.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return nF(this,rZ.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){nK(this,rZ.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new n_.CustomEvent(rG.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}oq.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rZ.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rZ.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rZ.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${rZ.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${oB}</slot>
      <slot name="exit">${oB}</slot>
    </slot>
  `},oq.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${nl("start airplay")}</slot>
    <slot name="tooltip-exit">${nl("stop airplay")}</slot>
  `},n_.customElements.get("media-airplay-button")||n_.customElements.define("media-airplay-button",oq);let oV=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,oF=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,oK=e=>{e.setAttribute("aria-checked",sR(e).toString())};class oj extends oW{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_SUBTITLES_LIST,rZ.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",nl("closed captions")),oK(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_SUBTITLES_SHOWING&&oK(this)}get mediaSubtitlesList(){return oG(this,rZ.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){oY(this,rZ.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return oG(this,rZ.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){oY(this,rZ.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new n_.CustomEvent(rG.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}oj.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${oV}</slot>
      <slot name="off">${oF}</slot>
    </slot>
  `},oj.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${nl("Enable captions")}</slot>
    <slot name="tooltip-disable">${nl("Disable captions")}</slot>
  `};let oG=(e,t)=>{let i=e.getAttribute(t);return i?sT(i):[]},oY=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sw(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};n_.customElements.get("media-captions-button")||n_.customElements.define("media-captions-button",oj);let oz=e=>{let t=e.mediaIsCasting?nl("stop casting"):nl("start casting");e.setAttribute("aria-label",t)};class oQ extends oW{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_IS_CASTING,rZ.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),oz(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_IS_CASTING&&oz(this)}get mediaIsCasting(){return nq(this,rZ.MEDIA_IS_CASTING)}set mediaIsCasting(e){nV(this,rZ.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return nF(this,rZ.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){nK(this,rZ.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?rG.MEDIA_EXIT_CAST_REQUEST:rG.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new n_.CustomEvent(e,{composed:!0,bubbles:!0}))}}oQ.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rZ.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rZ.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rZ.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${rZ.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},oQ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${nl("Start casting")}</slot>
    <slot name="tooltip-exit">${nl("Stop casting")}</slot>
  `},n_.customElements.get("media-cast-button")||n_.customElements.define("media-cast-button",oQ);var oZ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oX=(e,t,i)=>(oZ(e,t,"read from private field"),i?i.call(e):t.get(e)),oJ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o0=(e,t,i,a)=>(oZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),o1=(e,t,i)=>(oZ(e,t,"access private method"),i);class o2 extends n_.HTMLElement{constructor(){if(super(),oJ(this,hI),oJ(this,hR),oJ(this,hM),oJ(this,hD),oJ(this,hP),oJ(this,hU),oJ(this,hW),oJ(this,h$),oJ(this,hf,void 0),oJ(this,hE,void 0),oJ(this,hy,void 0),oJ(this,h_,void 0),oJ(this,hT,{}),oJ(this,hk,[]),oJ(this,hA,()=>{if(this.range.matches(":focus-visible")){let{style:e}=nH(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),oJ(this,hw,()=>{let{style:e}=nH(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),oJ(this,hS,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),o0(this,hy,this.shadowRoot.querySelector("#startpoint")),o0(this,h_,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",rY.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rY.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=oX(this,hf))?void 0:a.unassociateElement)||r.call(a,this),o0(this,hf,null)),i&&this.isConnected&&(o0(this,hf,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oX(this,hf))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),o1(this,hR,hL).call(this)):(this.range.setAttribute(e,i),o1(this,hM,hx).call(this)))}connectedCallback(){var e,t,i;let{style:a}=nH(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),oX(this,hT).pointer=nH(this.shadowRoot,"#pointer"),oX(this,hT).progress=nH(this.shadowRoot,"#progress"),oX(this,hT).thumb=nH(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),oX(this,hT).activeSegment=nH(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(rY.MEDIA_CONTROLLER);r&&(o0(this,hf,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=oX(this,hf))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",oX(this,hA)),this.shadowRoot.addEventListener("focusout",oX(this,hw)),o1(this,hR,hL).call(this),nS(this.container,oX(this,hS))}disconnectedCallback(){var e,t;o1(this,hM,hx).call(this),null==(t=null==(e=oX(this,hf))?void 0:e.unassociateElement)||t.call(e,this),o0(this,hf,null),this.shadowRoot.removeEventListener("focusin",oX(this,hA)),this.shadowRoot.removeEventListener("focusout",oX(this,hw)),nI(this.container,oX(this,hS))}updatePointerBar(e){var t;null==(t=oX(this,hT).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=oX(this,hT).progress)||e.style.setProperty("width",`${i}%`),null==(t=oX(this,hT).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];o0(this,hk,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=nT.createElementNS("http://www.w3.org/2000/svg","rect"),c=nW(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let n,s,o;return t=e.clientX,i=e.clientY,a=oX(this,hy).getBoundingClientRect(),n=(r=oX(this,h_).getBoundingClientRect()).x-a.x,0==(o=n*n+(s=r.y-a.y)*s)?0:Math.max(0,Math.min(1,((t-a.x)*n+(i-a.y)*s)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":o1(this,h$,hq).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":o1(this,hP,hN).call(this,e);break;case"pointerdown":o1(this,hD,hO).call(this,e);break;case"pointerup":o1(this,hU,hH).call(this);break;case"pointerleave":o1(this,hW,hB).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}hf=new WeakMap,hE=new WeakMap,hy=new WeakMap,h_=new WeakMap,hT=new WeakMap,hk=new WeakMap,hA=new WeakMap,hw=new WeakMap,hS=new WeakMap,hI=new WeakSet,hC=function(e){let t=oX(this,hT).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=oX(this,hk).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},hR=new WeakSet,hL=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},hM=new WeakSet,hx=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=n_.window)||e.removeEventListener("pointerup",this),null==(t=n_.window)||t.removeEventListener("pointermove",this)},hD=new WeakSet,hO=function(e){var t;o0(this,hE,e.composedPath().includes(this.range)),null==(t=n_.window)||t.addEventListener("pointerup",this,{once:!0})},hP=new WeakSet,hN=function(e){var t;"mouse"!==e.pointerType&&o1(this,hD,hO).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=n_.window)||t.addEventListener("pointermove",this)},hU=new WeakSet,hH=function(){var e;null==(e=n_.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},hW=new WeakSet,hB=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=n_.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=oX(this,hT).activeSegment)||t.style.removeProperty("transform")},h$=new WeakSet,hq=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),o1(this,hI,hC).call(this,e),this.dragging&&("mouse"!==e.pointerType||!oX(this,hE))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},o2.shadowRootOptions={mode:"open"},o2.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},o2.getContainerTemplateHTML=function(e){return""},n_.customElements.get("media-chrome-range")||n_.customElements.define("media-chrome-range",o2);var o3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o4=(e,t,i)=>(o3(e,t,"read from private field"),i?i.call(e):t.get(e)),o5=(e,t,i,a)=>(o3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class o9 extends n_.HTMLElement{constructor(){super();var e=hV;if(e.has(this))throw TypeError("Cannot add the same private member more than once");if(e instanceof WeakSet?e.add(this):e.set(this,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rY.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rY.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=o4(this,hV))?void 0:a.unassociateElement)||r.call(a,this),o5(this,hV,null)),i&&this.isConnected&&(o5(this,hV,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=o4(this,hV))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rY.MEDIA_CONTROLLER);a&&(o5(this,hV,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=o4(this,hV))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=o4(this,hV))?void 0:e.unassociateElement)||t.call(e,this),o5(this,hV,null)}}hV=new WeakMap,o9.shadowRootOptions={mode:"open"},o9.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},n_.customElements.get("media-control-bar")||n_.customElements.define("media-control-bar",o9);var o8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o6=(e,t,i)=>(o8(e,t,"read from private field"),i?i.call(e):t.get(e)),o7=(e,t,i,a)=>(o8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class le extends n_.HTMLElement{constructor(){super();var e=hF;if(e.has(this))throw TypeError("Cannot add the same private member more than once");if(e instanceof WeakSet?e.add(this):e.set(this,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rY.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rY.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=o6(this,hF))?void 0:a.unassociateElement)||r.call(a,this),o7(this,hF,null)),i&&this.isConnected&&(o7(this,hF,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=o6(this,hF))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=nH(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(rY.MEDIA_CONTROLLER);r&&(o7(this,hF,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=o6(this,hF))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=o6(this,hF))?void 0:e.unassociateElement)||t.call(e,this),o7(this,hF,null)}}hF=new WeakMap,le.shadowRootOptions={mode:"open"},le.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},le.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},n_.customElements.get("media-text-display")||n_.customElements.define("media-text-display",le);var lt=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},li=(e,t,i)=>(lt(e,t,"read from private field"),i?i.call(e):t.get(e));class la extends le{constructor(){super();var e,t,i,a=hK;if(a.has(this))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(this):a.set(this,void 0),t=hK,i=this.shadowRoot.querySelector("slot"),lt(this,t,"write to private field"),t.set(this,i),li(this,hK).textContent=nh(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===rZ.MEDIA_DURATION&&(li(this,hK).textContent=nh(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return nB(this,rZ.MEDIA_DURATION)}set mediaDuration(e){n$(this,rZ.MEDIA_DURATION,e)}}hK=new WeakMap,la.getSlotTemplateHTML=function(e,t){return`
    <slot>${nh(t.mediaDuration)}</slot>
  `},n_.customElements.get("media-duration-display")||n_.customElements.define("media-duration-display",la);let lr={2:nl("Network Error"),3:nl("Decode Error"),4:nl("Source Not Supported"),5:nl("Encryption Error")},ln={2:nl("A network error caused the media download to fail."),3:nl("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:nl("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:nl("The media is encrypted and there are no keys to decrypt it.")},ls=e=>{var t,i;return 1===e.code?null:{title:null!=(t=lr[e.code])?t:`Error ${e.code}`,message:null!=(i=ln[e.code])?i:e.message}};var lo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function ll(e){var t;let{title:i,message:a}=null!=(t=ls(e))?t:{},r=nn(e.code),n="";return i&&(n+=`<slot name="error-${r}-title"><h3>${nn(i)}</h3></slot>`),a&&(n+=`<slot name="error-${r}-message"><p>${nn(a)}</p></slot>`),n}let ld=[rZ.MEDIA_ERROR_CODE,rZ.MEDIA_ERROR_MESSAGE];class lu extends sl{constructor(){super(...arguments);var e=hj;if(e.has(this))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(this):e.set(this,null)}static get observedAttributes(){return[...super.observedAttributes,...ld]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!ld.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==ls(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=ls(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e;return lo(this,e=hj,"read from private field"),e.get(this)}set mediaError(e){var t;lo(this,t=hj,"write to private field"),t.set(this,e)}get mediaErrorCode(){return nB(this,"mediaerrorcode")}set mediaErrorCode(e){n$(this,"mediaerrorcode",e)}get mediaErrorMessage(){return nF(this,"mediaerrormessage")}set mediaErrorMessage(e){nK(this,"mediaerrormessage",e)}}hj=new WeakMap,lu.getSlotTemplateHTML=function(e){let t=+e.mediaerrorcode;return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t}" id="content">
      ${ll({code:t,message:e.mediaerrormessage})}
    </slot>
  `},lu.formatErrorMessage=ll,n_.customElements.get("media-error-dialog")||n_.customElements.define("media-error-dialog",lu);var lc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let lh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,lm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,lp=e=>{let t=e.mediaIsFullscreen?nl("exit fullscreen mode"):nl("enter fullscreen mode");e.setAttribute("aria-label",t)};class lv extends oW{constructor(){super(...arguments);var e=hG;if(e.has(this))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(this):e.set(this,null)}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_IS_FULLSCREEN,rZ.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lp(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_IS_FULLSCREEN&&lp(this)}get mediaFullscreenUnavailable(){return nF(this,rZ.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){nK(this,rZ.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return nq(this,rZ.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){nV(this,rZ.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i;lc(this,t=hG,"write to private field"),t.set(this,e);let a=(lc(this,i=hG,"read from private field"),i.get(this)instanceof PointerEvent),r=this.mediaIsFullscreen?new n_.CustomEvent(rG.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new n_.CustomEvent(rG.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}hG=new WeakMap,lv.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rZ.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rZ.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rZ.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${rZ.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${lh}</slot>
      <slot name="exit">${lm}</slot>
    </slot>
  `},lv.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${nl("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${nl("Exit fullscreen mode")}</slot>
  `},n_.customElements.get("media-fullscreen-button")||n_.customElements.define("media-fullscreen-button",lv);let{MEDIA_TIME_IS_LIVE:lb,MEDIA_PAUSED:lg}=rZ,{MEDIA_SEEK_TO_LIVE_REQUEST:lf,MEDIA_PLAY_REQUEST:lE}=rG,ly=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?nl("seek to live"):nl("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=nl("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class l_ extends oW{static get observedAttributes(){return[...super.observedAttributes,lb,lg]}connectedCallback(){super.connectedCallback(),ly(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),ly(this)}get mediaPaused(){return nq(this,rZ.MEDIA_PAUSED)}set mediaPaused(e){nV(this,rZ.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return nq(this,rZ.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){nV(this,rZ.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new n_.CustomEvent(lf,{composed:!0,bubbles:!0})),this.hasAttribute(lg)&&this.dispatchEvent(new n_.CustomEvent(lE,{composed:!0,bubbles:!0})))}}l_.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${lb}]:not([${lg}])) slot[name=indicator] > *,
      :host([${lb}]:not([${lg}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${lb}]:not([${lg}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${nl("live")}</slot>
  `},n_.customElements.get("media-live-button")||n_.customElements.define("media-live-button",l_);var lT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lk=(e,t,i)=>(lT(e,t,"read from private field"),i?i.call(e):t.get(e)),lA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lw=(e,t,i,a)=>(lT(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lS="loadingdelay",lI="noautohide",lC=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class lR extends n_.HTMLElement{constructor(){if(super(),lA(this,hY,void 0),lA(this,hz,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rY.MEDIA_CONTROLLER,rZ.MEDIA_PAUSED,rZ.MEDIA_LOADING,lS]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===lS&&t!==i?this.loadingDelay=Number(i):e===rY.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=lk(this,hY))?void 0:a.unassociateElement)||r.call(a,this),lw(this,hY,null)),i&&this.isConnected&&(lw(this,hY,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=lk(this,hY))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rY.MEDIA_CONTROLLER);a&&(lw(this,hY,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=lk(this,hY))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=lk(this,hY))?void 0:e.unassociateElement)||t.call(e,this),lw(this,hY,null)}get loadingDelay(){return lk(this,hz)}set loadingDelay(e){lw(this,hz,e);let{style:t}=nH(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return nq(this,rZ.MEDIA_PAUSED)}set mediaPaused(e){nV(this,rZ.MEDIA_PAUSED,e)}get mediaLoading(){return nq(this,rZ.MEDIA_LOADING)}set mediaLoading(e){nV(this,rZ.MEDIA_LOADING,e)}get mediaController(){return nF(this,rY.MEDIA_CONTROLLER)}set mediaController(e){nK(this,rY.MEDIA_CONTROLLER,e)}get noAutohide(){return nq(this,lI)}set noAutohide(e){nV(this,lI,e)}}hY=new WeakMap,hz=new WeakMap,lR.shadowRootOptions={mode:"open"},lR.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${rZ.MEDIA_LOADING}]:not([${rZ.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${rZ.MEDIA_LOADING}]:not([${rZ.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${rZ.MEDIA_LOADING}]:not([${rZ.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${lC}</slot>
    <div id="status" role="status" aria-live="polite">${nl("media loading")}</div>
  `},n_.customElements.get("media-loading-indicator")||n_.customElements.define("media-loading-indicator",lR);let lL=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,lM=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,lx=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,lD=e=>{let t="off"===e.mediaVolumeLevel?nl("unmute"):nl("mute");e.setAttribute("aria-label",t)};class lO extends oW{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),lD(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_VOLUME_LEVEL&&lD(this)}get mediaVolumeLevel(){return nF(this,rZ.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){nK(this,rZ.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?rG.MEDIA_UNMUTE_REQUEST:rG.MEDIA_MUTE_REQUEST;this.dispatchEvent(new n_.CustomEvent(e,{composed:!0,bubbles:!0}))}}lO.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${rZ.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${rZ.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${rZ.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${rZ.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${rZ.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${rZ.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${rZ.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${lL}</slot>
      <slot name="low">${lM}</slot>
      <slot name="medium">${lM}</slot>
      <slot name="high">${lx}</slot>
    </slot>
  `},lO.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${nl("Mute")}</slot>
    <slot name="tooltip-unmute">${nl("Unmute")}</slot>
  `},n_.customElements.get("media-mute-button")||n_.customElements.define("media-mute-button",lO);let lP=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,lN=e=>{let t=e.mediaIsPip?nl("exit picture in picture mode"):nl("enter picture in picture mode");e.setAttribute("aria-label",t)};class lU extends oW{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_IS_PIP,rZ.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lN(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_IS_PIP&&lN(this)}get mediaPipUnavailable(){return nF(this,rZ.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){nK(this,rZ.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return nq(this,rZ.MEDIA_IS_PIP)}set mediaIsPip(e){nV(this,rZ.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?rG.MEDIA_EXIT_PIP_REQUEST:rG.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new n_.CustomEvent(e,{composed:!0,bubbles:!0}))}}lU.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rZ.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${rZ.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rZ.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${rZ.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${lP}</slot>
      <slot name="exit">${lP}</slot>
    </slot>
  `},lU.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${nl("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${nl("Exit picture in picture mode")}</slot>
  `},n_.customElements.get("media-pip-button")||n_.customElements.define("media-pip-button",lU);var lH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let lW="rates",lB=[1,1.2,1.5,1.7,2];function l$(e){return Math.round(100*e)/100}class lq extends oW{constructor(){super();var e,t=hQ,i=new sy(this,lW,{defaultValue:lB});if(t.has(this))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(this):t.set(this,i),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${l$(null!=(e=this.mediaPlaybackRate)?e:1)}x`}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_PLAYBACK_RATE,lW]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===lW&&(lH(this,hQ).value=i),e===rZ.MEDIA_PLAYBACK_RATE){let e=i?+i:0/0,t=l$(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",nl("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return lH(this,hQ)}set rates(e){e?Array.isArray(e)?lH(this,hQ).value=e.join(" "):"string"==typeof e&&(lH(this,hQ).value=e):lH(this,hQ).value=""}get mediaPlaybackRate(){return nB(this,rZ.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){n$(this,rZ.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(lH(this,hQ).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new n_.CustomEvent(rG.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}hQ=new WeakMap,lq.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?l$(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},lq.getTooltipContentHTML=function(){return nl("Playback rate")},n_.customElements.get("media-playback-rate-button")||n_.customElements.define("media-playback-rate-button",lq);let lV=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,lF=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,lK=e=>{let t=e.mediaPaused?nl("play"):nl("pause");e.setAttribute("aria-label",t)};class lj extends oW{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_PAUSED,rZ.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),lK(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===rZ.MEDIA_PAUSED||e===rZ.MEDIA_LANG)&&lK(this)}get mediaPaused(){return nq(this,rZ.MEDIA_PAUSED)}set mediaPaused(e){nV(this,rZ.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?rG.MEDIA_PLAY_REQUEST:rG.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new n_.CustomEvent(e,{composed:!0,bubbles:!0}))}}lj.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rZ.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${rZ.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${rZ.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${rZ.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${lV}</slot>
      <slot name="pause">${lF}</slot>
    </slot>
  `},lj.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${nl("Play")}</slot>
    <slot name="tooltip-pause">${nl("Pause")}</slot>
  `},n_.customElements.get("media-play-button")||n_.customElements.define("media-play-button",lj);let lG="placeholdersrc";class lY extends n_.HTMLElement{static get observedAttributes(){return[lG,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===lG)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return nF(this,lG)}set placeholderSrc(e){nK(this,"src",e)}get src(){return nF(this,"src")}set src(e){nK(this,"src",e)}}lY.shadowRootOptions={mode:"open"},lY.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},n_.customElements.get("media-poster-image")||n_.customElements.define("media-poster-image",lY);var lz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};hZ=new WeakMap,n_.customElements.get("media-preview-chapter-display")||n_.customElements.define("media-preview-chapter-display",class extends le{constructor(){var e;if(super(),hZ.has(this))throw TypeError("Cannot add the same private member more than once");hZ instanceof WeakSet?hZ.add(this):hZ.set(this,void 0),e=this.shadowRoot.querySelector("slot"),lz(this,hZ,"write to private field"),hZ.set(this,e)}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_PREVIEW_CHAPTER,rZ.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===rZ.MEDIA_PREVIEW_CHAPTER||e===rZ.MEDIA_LANG)&&i!==t&&null!=i)if((lz(this,hZ,"read from private field"),hZ.get(this)).textContent=i,""!==i){let e=nl("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return nF(this,rZ.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){nK(this,rZ.MEDIA_PREVIEW_CHAPTER,e)}});var lQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lZ=(e,t,i)=>(lQ(e,t,"read from private field"),i?i.call(e):t.get(e)),lX=(e,t,i,a)=>(lQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lJ extends n_.HTMLElement{constructor(){super();var e=hX;if(e.has(this))throw TypeError("Cannot add the same private member more than once");if(e instanceof WeakSet?e.add(this):e.set(this,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rY.MEDIA_CONTROLLER,rZ.MEDIA_PREVIEW_IMAGE,rZ.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(rY.MEDIA_CONTROLLER);a&&(lX(this,hX,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=lZ(this,hX))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=lZ(this,hX))?void 0:e.unassociateElement)||t.call(e,this),lX(this,hX,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[rZ.MEDIA_PREVIEW_IMAGE,rZ.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===rY.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=lZ(this,hX))?void 0:a.unassociateElement)||r.call(a,this),lX(this,hX,null)),i&&this.isConnected&&(lX(this,hX,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=lZ(this,hX))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return nF(this,rZ.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){nK(this,rZ.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(rZ.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(rZ.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(rZ.MEDIA_PREVIEW_COORDS)}update(){let e,t,i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[r,n,s,o]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(u)/s,a=parseInt(c)/o,r=parseInt(h)/s,n=parseInt(m)/o;e=i<1?i:Math.max(i,r),t=a<1?a:Math.max(a,n)}else{let i=Math.min(parseInt(u)/s,parseInt(c)/o),a=Math.max(parseInt(h)/s,parseInt(m)/o),r=i<1?i:a>1?a:1;e=r,t=r}let{style:p}=nH(this.shadowRoot,":host"),v=nH(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),g=1>Math.min(e,t)?"min":"max";p.setProperty(`${g}-width`,"initial","important"),p.setProperty(`${g}-height`,"initial","important"),p.width=`${s*e}px`,p.height=`${o*t}px`;let f=()=>{v.width=`${this.imgWidth*e}px`,v.height=`${this.imgHeight*t}px`,v.display="block"};b.src!==l&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,f(),b.onload=null},b.src=l,f()),f(),v.transform=`translate(-${r*e}px, -${n*t}px)`}}hX=new WeakMap,lJ.shadowRootOptions={mode:"open"},lJ.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},n_.customElements.get("media-preview-thumbnail")||n_.customElements.define("media-preview-thumbnail",lJ);var l0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l1=(e,t,i)=>(l0(e,t,"read from private field"),i?i.call(e):t.get(e));hJ=new WeakMap,n_.customElements.get("media-preview-time-display")||n_.customElements.define("media-preview-time-display",class extends le{constructor(){var e;if(super(),hJ.has(this))throw TypeError("Cannot add the same private member more than once");hJ instanceof WeakSet?hJ.add(this):hJ.set(this,void 0),e=this.shadowRoot.querySelector("slot"),l0(this,hJ,"write to private field"),hJ.set(this,e),l1(this,hJ).textContent=nh(0)}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_PREVIEW_TIME&&null!=i&&(l1(this,hJ).textContent=nh(parseFloat(i)))}get mediaPreviewTime(){return nB(this,rZ.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){n$(this,rZ.MEDIA_PREVIEW_TIME,e)}});let l2="seekoffset";class l3 extends oW{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_CURRENT_TIME,l2]}connectedCallback(){super.connectedCallback(),this.seekOffset=nB(this,l2,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",nl("seek back {seekOffset} seconds",{seekOffset:a})),e===l2&&(this.seekOffset=nB(this,l2,30))}get seekOffset(){return nB(this,l2,30)}set seekOffset(e){n$(this,l2,e),this.setAttribute("aria-label",nl("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),nM(nx(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nB(this,rZ.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){n$(this,rZ.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new n_.CustomEvent(rG.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}l3.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},l3.getTooltipContentHTML=function(){return nl("Seek backward")},n_.customElements.get("media-seek-backward-button")||n_.customElements.define("media-seek-backward-button",l3);let l4="seekoffset";class l5 extends oW{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_CURRENT_TIME,l4]}connectedCallback(){super.connectedCallback(),this.seekOffset=nB(this,l4,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",nl("seek forward {seekOffset} seconds",{seekOffset:a})),e===l4&&(this.seekOffset=nB(this,l4,30))}get seekOffset(){return nB(this,l4,30)}set seekOffset(e){n$(this,l4,e),this.setAttribute("aria-label",nl("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),nM(nx(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nB(this,rZ.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){n$(this,rZ.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new n_.CustomEvent(rG.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}l5.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},l5.getTooltipContentHTML=function(){return nl("Seek forward")},n_.customElements.get("media-seek-forward-button")||n_.customElements.define("media-seek-forward-button",l5);var l9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l8=(e,t,i)=>(l9(e,t,"read from private field"),i?i.call(e):t.get(e)),l6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l7=(e,t,i,a)=>(l9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),de=(e,t,i)=>(l9(e,t,"access private method"),i);let dt={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},di=[...Object.values(dt),rZ.MEDIA_CURRENT_TIME,rZ.MEDIA_DURATION,rZ.MEDIA_SEEKABLE],da=["Enter"," "],dr="&nbsp;/&nbsp;",dn=(e,{timesSep:t=dr}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?nh(0-(s-r)):nh(r);return e.showDuration?`${o}${t}${nh(s)}`:o};class ds extends le{constructor(){super(),l6(this,h3),l6(this,h5),l6(this,h8),l6(this,h7),l6(this,h0,void 0),l6(this,h1,null),l6(this,h2,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!da.includes(a)?this.removeEventListener("keyup",l8(this,h1)):this.addEventListener("keyup",l8(this,h1))}),l7(this,h0,this.shadowRoot.querySelector("slot")),l8(this,h0).innerHTML=`${dn(this)}`}static get observedAttributes(){return[...super.observedAttributes,...di,"disabled"]}connectedCallback(){let{style:e}=nH(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",nl("playback time")),de(this,h8,h6).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),de(this,h5,h9).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){this.setAttribute("aria-label",nl("playback time")),di.includes(e)?this.update():"disabled"===e&&i!==t?null==i?de(this,h8,h6).call(this):de(this,h7,me).call(this):e===dt.NO_TOGGLE&&i!==t&&(this.noToggle?de(this,h7,me).call(this):de(this,h8,h6).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return nq(this,dt.REMAINING)}set remaining(e){nV(this,dt.REMAINING,e)}get showDuration(){return nq(this,dt.SHOW_DURATION)}set showDuration(e){nV(this,dt.SHOW_DURATION,e)}get noToggle(){return nq(this,dt.NO_TOGGLE)}set noToggle(e){nV(this,dt.NO_TOGGLE,e)}get mediaDuration(){return nB(this,rZ.MEDIA_DURATION)}set mediaDuration(e){n$(this,rZ.MEDIA_DURATION,e)}get mediaCurrentTime(){return nB(this,rZ.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){n$(this,rZ.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(rZ.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(rZ.MEDIA_SEEKABLE):this.setAttribute(rZ.MEDIA_SEEKABLE,e.join(":"))}update(){let e=dn(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-description",nl("video not loaded, unknown time."));let n=e.remaining?nc(0-(r-i)):nc(i);if(!e.showDuration)return e.setAttribute("aria-description",n);let s=nl("{currentTime} of {totalTime}",{currentTime:n,totalTime:nc(r)});e.setAttribute("aria-description",s)})(this),e!==l8(this,h0).innerHTML&&(l8(this,h0).innerHTML=e)}}h0=new WeakMap,h1=new WeakMap,h2=new WeakMap,h3=new WeakSet,h4=function(){l8(this,h1)||(l7(this,h1,e=>{let{key:t}=e;da.includes(t)?this.toggleTimeDisplay():this.removeEventListener("keyup",l8(this,h1))}),this.addEventListener("keydown",l8(this,h2)),this.addEventListener("click",this.toggleTimeDisplay))},h5=new WeakSet,h9=function(){l8(this,h1)&&(this.removeEventListener("keyup",l8(this,h1)),this.removeEventListener("keydown",l8(this,h2)),this.removeEventListener("click",this.toggleTimeDisplay),l7(this,h1,null))},h8=new WeakSet,h6=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),de(this,h3,h4).call(this))},h7=new WeakSet,me=function(){this.removeAttribute("role"),this.disable(),de(this,h5,h9).call(this)},ds.getSlotTemplateHTML=function(e,t){return`
    <slot>${dn(t)}</slot>
  `},n_.customElements.get("media-time-display")||n_.customElements.define("media-time-display",ds);var dl=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dd=(e,t,i)=>(dl(e,t,"read from private field"),i?i.call(e):t.get(e)),du=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dc=(e,t,i,a)=>(dl(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class dh{constructor(e,t,i){du(this,mt,void 0),du(this,mi,void 0),du(this,ma,void 0),du(this,mr,void 0),du(this,mn,void 0),du(this,ms,void 0),du(this,mo,void 0),du(this,ml,void 0),du(this,md,0),du(this,mu,(e=performance.now())=>{dc(this,md,requestAnimationFrame(dd(this,mu))),dc(this,mr,performance.now()-dd(this,ma));let t=1e3/this.fps;if(dd(this,mr)>t){let i,a;dc(this,ma,e-dd(this,mr)%t);let r=1e3/((e-dd(this,mi))/++(i=this,a=mn,{set _(e){dc(i,a,e,void 0)},get _(){return dd(i,a,void 0)}})._),n=(e-dd(this,ms))/1e3/this.duration,s=dd(this,mo)+n*this.playbackRate;s-dd(this,mt).valueAsNumber>0?dc(this,ml,this.playbackRate/this.duration/r):(dc(this,ml,.995*dd(this,ml)),s=dd(this,mt).valueAsNumber+dd(this,ml)),this.callback(s)}}),dc(this,mt,e),this.callback=t,this.fps=i}start(){0===dd(this,md)&&(dc(this,ma,performance.now()),dc(this,mi,dd(this,ma)),dc(this,mn,0),dd(this,mu).call(this))}stop(){0!==dd(this,md)&&(cancelAnimationFrame(dd(this,md)),dc(this,md,0))}update({start:e,duration:t,playbackRate:i}){let a=e-dd(this,mt).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.5/t||r>=.5)&&this.callback(e),dc(this,mo,e),dc(this,ms,performance.now()),this.duration=t,this.playbackRate=i}}mt=new WeakMap,mi=new WeakMap,ma=new WeakMap,mr=new WeakMap,mn=new WeakMap,ms=new WeakMap,mo=new WeakMap,ml=new WeakMap,md=new WeakMap,mu=new WeakMap;var dm=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dp=(e,t,i)=>(dm(e,t,"read from private field"),i?i.call(e):t.get(e)),dv=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},db=(e,t,i,a)=>(dm(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dg=(e,t,i)=>(dm(e,t,"access private method"),i);let df=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},dE=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class dy extends o2{constructor(){super(),dv(this,mT),dv(this,mw),dv(this,mI),dv(this,mR),dv(this,mM),dv(this,mD),dv(this,mP),dv(this,mc,null),dv(this,mh,void 0),dv(this,mm,void 0),dv(this,mp,void 0),dv(this,mv,void 0),dv(this,mb,void 0),dv(this,mg,void 0),dv(this,mf,void 0),dv(this,mE,void 0),dv(this,my,void 0),dv(this,m_,()=>{dg(this,mT,mk).call(this)?dp(this,mh).start():dp(this,mh).stop()}),dv(this,mA,e=>{!this.dragging&&(nt(e)&&(this.range.valueAsNumber=e),dp(this,my)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),db(this,mm,this.shadowRoot.querySelectorAll('[part~="box"]')),db(this,mv,this.shadowRoot.querySelector('[part~="preview-box"]')),db(this,mb,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);db(this,mg,parseInt(e.getPropertyValue("--media-box-padding-left"))),db(this,mf,parseInt(e.getPropertyValue("--media-box-padding-right"))),db(this,mh,new dh(this.range,dp(this,mA),60))}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_PAUSED,rZ.MEDIA_DURATION,rZ.MEDIA_SEEKABLE,rZ.MEDIA_CURRENT_TIME,rZ.MEDIA_PREVIEW_IMAGE,rZ.MEDIA_PREVIEW_TIME,rZ.MEDIA_PREVIEW_CHAPTER,rZ.MEDIA_BUFFERED,rZ.MEDIA_PLAYBACK_RATE,rZ.MEDIA_LOADING,rZ.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",nl("seek")),dp(this,m_).call(this),db(this,mc,this.getRootNode()),null==(e=dp(this,mc))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),dp(this,mh).stop(),null==(e=dp(this,mc))||e.removeEventListener("transitionstart",this),db(this,mc,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===rZ.MEDIA_CURRENT_TIME||e===rZ.MEDIA_PAUSED||e===rZ.MEDIA_ENDED||e===rZ.MEDIA_LOADING||e===rZ.MEDIA_DURATION||e===rZ.MEDIA_SEEKABLE){let e,t,i,a;dp(this,mh).update({start:df(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),dp(this,m_).call(this),e=this.range,t=nc(+dE(this)),i=nc(+this.mediaSeekableEnd),a=t&&i?nl("{currentTime} of {totalTime}",{currentTime:t,totalTime:i}):nl("video not loaded, unknown time."),e.setAttribute("aria-valuetext",a)}else e===rZ.MEDIA_BUFFERED&&this.updateBufferedBar();(e===rZ.MEDIA_DURATION||e===rZ.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=dp(this,mE),this.updateBar())}}get mediaChaptersCues(){return dp(this,mE)}set mediaChaptersCues(e){var t;db(this,mE,e),this.updateSegments(null==(t=dp(this,mE))?void 0:t.map(e=>({start:df(this,e.startTime),end:df(this,e.endTime)})))}get mediaPaused(){return nq(this,rZ.MEDIA_PAUSED)}set mediaPaused(e){nV(this,rZ.MEDIA_PAUSED,e)}get mediaLoading(){return nq(this,rZ.MEDIA_LOADING)}set mediaLoading(e){nV(this,rZ.MEDIA_LOADING,e)}get mediaDuration(){return nB(this,rZ.MEDIA_DURATION)}set mediaDuration(e){n$(this,rZ.MEDIA_DURATION,e)}get mediaCurrentTime(){return nB(this,rZ.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){n$(this,rZ.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return nB(this,rZ.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){n$(this,rZ.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(rZ.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(rZ.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(rZ.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(rZ.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(rZ.MEDIA_SEEKABLE):this.setAttribute(rZ.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return nF(this,rZ.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){nK(this,rZ.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return nB(this,rZ.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){n$(this,rZ.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return nq(this,rZ.MEDIA_ENDED)}set mediaEnded(e){nV(this,rZ.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=df(this,r)}let{style:a}=nH(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=nH(this.shadowRoot,"#current-rail"),t=nH(this.shadowRoot,'[part~="current-box"]'),i=dg(this,mw,mS).call(this,dp(this,mb)),a=dg(this,mI,mC).call(this,i,this.range.valueAsNumber),r=dg(this,mR,mL).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":dg(this,mP,mN).call(this);break;case"pointermove":dg(this,mM,mx).call(this,e);break;case"pointerup":dp(this,my)&&db(this,my,!1);break;case"pointerdown":db(this,my,!0);break;case"pointerleave":dg(this,mD,mO).call(this,null);break;case"transitionstart":nD(e.target,this)&&setTimeout(()=>dp(this,m_).call(this),0)}}}mc=new WeakMap,mh=new WeakMap,mm=new WeakMap,mp=new WeakMap,mv=new WeakMap,mb=new WeakMap,mg=new WeakMap,mf=new WeakMap,mE=new WeakMap,my=new WeakMap,m_=new WeakMap,mT=new WeakSet,mk=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&nU(this)},mA=new WeakMap,mw=new WeakSet,mS=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?nO(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},mI=new WeakSet,mC=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},mR=new WeakSet,mL=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+dp(this,mg)){let t=e.range.left-e.bounds.left-dp(this,mg);return`${n-i/2+t}px`}if(n>r-dp(this,mf)){let t=e.bounds.right-e.range.right-dp(this,mf);return`${n+i/2-t-e.range.width}px`}return 0},mM=new WeakSet,mx=function(e){let t=[...dp(this,mm)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void dg(this,mD,mO).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=nH(this.shadowRoot,"#preview-rail"),r=nH(this.shadowRoot,'[part~="preview-box"]'),n=dg(this,mw,mS).call(this,dp(this,mv)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=dg(this,mI,mC).call(this,n,s),l=dg(this,mR,mL).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(dp(this,mp))-Math.round(s*i))&&s>.01&&s<.99||(db(this,mp,s*i),dg(this,mD,mO).call(this,dp(this,mp)))},mD=new WeakSet,mO=function(e){this.dispatchEvent(new n_.CustomEvent(rG.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},mP=new WeakSet,mN=function(){dp(this,mh).stop();let e=dE(this);this.dispatchEvent(new n_.CustomEvent(rG.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},dy.shadowRootOptions={mode:"open"},dy.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${rZ.MEDIA_PREVIEW_IMAGE}], [${rZ.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${rZ.MEDIA_PREVIEW_IMAGE}], [${rZ.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${rZ.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${rZ.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${rZ.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${rZ.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${rZ.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${rZ.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${rZ.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${rZ.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${rZ.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${rZ.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${rZ.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${rZ.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${lJ.shadowRootOptions.mode}">
            ${lJ.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},n_.customElements.get("media-time-range")||n_.customElements.define("media-time-range",dy);var d_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};mU=new WeakMap,n_.customElements.get("media-volume-range")||n_.customElements.define("media-volume-range",class extends o2{constructor(){super(...arguments);var e=()=>{let e=this.range.value,t=new n_.CustomEvent(rG.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)};if(mU.has(this))throw TypeError("Cannot add the same private member more than once");mU instanceof WeakSet?mU.add(this):mU.set(this,e)}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_VOLUME,rZ.MEDIA_MUTED,rZ.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",nl("volume")),this.range.addEventListener("input",d_(this,mU))}disconnectedCallback(){this.range.removeEventListener("input",d_(this,mU)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_VOLUME||e===rZ.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return nB(this,rZ.MEDIA_VOLUME,1)}set mediaVolume(e){n$(this,rZ.MEDIA_VOLUME,e)}get mediaMuted(){return nq(this,rZ.MEDIA_MUTED)}set mediaMuted(e){nV(this,rZ.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return nF(this,rZ.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){nK(this,rZ.MEDIA_VOLUME_UNAVAILABLE,e)}});class dT extends oW{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=nl("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return nq(this,rZ.MEDIA_LOOP)}set mediaLoop(e){nV(this,rZ.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new n_.CustomEvent(rG.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}dT.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${rZ.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},dT.getTooltipContentHTML=function(){return nl("Loop")},n_.customElements.get("media-loop-button")||n_.customElements.define("media-loop-button",dT);var dk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dA=(e,t,i)=>(dk(e,t,"read from private field"),i?i.call(e):t.get(e)),dw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dS=(e,t,i,a)=>(dk(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let dI={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof dP&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof dP?a.element[a.attributeName]=t:a.value=t}}}};class dC extends n_.DocumentFragment{constructor(e,t,i=dI){var a;super(),dw(this,mH,void 0),dw(this,mW,void 0),this.append(e.content.cloneNode(!0)),dS(this,mH,dR(this)),dS(this,mW,i),null==(a=i.createCallback)||a.call(i,this,dA(this,mH),t),i.processCallback(this,dA(this,mH),t)}update(e){dA(this,mW).processCallback(this,dA(this,mH),e)}}mH=new WeakMap,mW=new WeakMap;let dR=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new dO;for([i,a]of dM(r.value))if(i){let i=new dP(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of dM(n))if(i){let i=new dN(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new dU(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else dR(r,t);return t},dL={},dM=e=>{let t="",i=0,a=dL[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),dL[e]=a};class dx{get value(){return""}set value(e){}toString(){return this.value}}let dD=new WeakMap;class dO{constructor(){dw(this,mB,[])}[Symbol.iterator](){return dA(this,mB).values()}get length(){return dA(this,mB).length}item(e){return dA(this,mB)[e]}append(...e){for(let t of e)t instanceof dP&&dD.set(t,this),dA(this,mB).push(t)}toString(){return dA(this,mB).join("")}}mB=new WeakMap;class dP extends dx{constructor(e,t,i){super(),dw(this,mK),dw(this,m$,""),dw(this,mq,void 0),dw(this,mV,void 0),dw(this,mF,void 0),dS(this,mq,e),dS(this,mV,t),dS(this,mF,i)}get attributeName(){return dA(this,mV)}get attributeNamespace(){return dA(this,mF)}get element(){return dA(this,mq)}get value(){return dA(this,m$)}set value(e){dA(this,m$)!==e&&(dS(this,m$,e),dA(this,mK,mj)&&1!==dA(this,mK,mj).length?dA(this,mq).setAttributeNS(dA(this,mF),dA(this,mV),dA(this,mK,mj).toString()):null==e?dA(this,mq).removeAttributeNS(dA(this,mF),dA(this,mV)):dA(this,mq).setAttributeNS(dA(this,mF),dA(this,mV),e))}get booleanValue(){return dA(this,mq).hasAttributeNS(dA(this,mF),dA(this,mV))}set booleanValue(e){if(dA(this,mK,mj)&&1!==dA(this,mK,mj).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}m$=new WeakMap,mq=new WeakMap,mV=new WeakMap,mF=new WeakMap,mK=new WeakSet,mj=function(){return dD.get(this)};class dN extends dx{constructor(e,t){super(),dw(this,mG,void 0),dw(this,mY,void 0),dS(this,mG,e),dS(this,mY,t?[...t]:[new Text])}get replacementNodes(){return dA(this,mY)}get parentNode(){return dA(this,mG)}get nextSibling(){return dA(this,mY)[dA(this,mY).length-1].nextSibling}get previousSibling(){return dA(this,mY)[0].previousSibling}get value(){return dA(this,mY).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),dS(this,mY,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(dA(this,mY)[0].parentNode,dA(this,mY),t,this.nextSibling))}}mG=new WeakMap,mY=new WeakMap;class dU extends dN{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let dH={string:e=>String(e)};class dW{constructor(e){this.template=e,this.state=void 0}}let dB=new WeakMap,d$=new WeakMap,dq={partial:(e,t)=>{t[e.expression]=new dW(e.template)},if:(e,t)=>{var i;if(dj(e.expression,t))if(dB.get(e)!==e.template){dB.set(e,e.template);let i=new dC(e.template,t,dF);e.replace(i),d$.set(e,i)}else null==(i=d$.get(e))||i.update(t);else e.replace(""),dB.delete(e),d$.delete(e)}},dV=Object.keys(dq),dF={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof dU){if(!n.directive){let e=dV.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=dq[n.directive])||a.call(dq,n,i);continue}let t=dj(e,i);if(t instanceof dW){dB.get(n)!==t.template?(dB.set(n,t.template),n.value=t=new dC(t.template,t.state,dF),d$.set(n,t)):null==(r=d$.get(n))||r.update(t.state);continue}t?(n instanceof dP&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof dP?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,dB.delete(n),d$.delete(n))):n instanceof dP?n.value=void 0:(n.value=void 0,dB.delete(n),d$.delete(n))}}},dK={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=dH[t])?void 0:i.call(dH,e)}};function dj(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return dG(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return dG(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=dz(d,t))}return i}if(1===d.length)return dY(d[0])?dz(d[0].token,t):dG(e);if(2===d.length){let i=dK[null==(o=d[0])?void 0:o.token];return i&&dY(d[1])?i(dz(d[1].token,t)):dG(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=dK[i];if(!a||!dY(d[0])||!dY(d[2]))return dG(e);let r=dz(d[0].token,t);return a(r,"|"===i?d[2].token:dz(d[2].token,t))}}function dG(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function dY({type:e}){return["number","boolean","string","param"].includes(e)}function dz(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):ni(e)?parseFloat(e):t[e]}var dQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dZ=(e,t,i)=>(dQ(e,t,"read from private field"),i?i.call(e):t.get(e)),dX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dJ=(e,t,i,a)=>(dQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),d0=(e,t,i)=>(dQ(e,t,"access private method"),i);let d1={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},d2=nT.createElement("template");d2.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class d3 extends n_.HTMLElement{constructor(){super(),dX(this,mJ),dX(this,m1),dX(this,mz,void 0),dX(this,mQ,void 0),dX(this,mZ,void 0),dX(this,mX,void 0),dX(this,m3,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),dJ(this,mX,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(d1[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),dJ(this,m3,this.render.bind(this)),d0(this,mJ,m0).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=dZ(this,mz))?e:this.constructor.template}set template(e){null===e?this.removeAttribute("template"):"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(dJ(this,mz,e),dJ(this,mZ,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>d1[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=d1[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(ni(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&d0(this,m1,m2).call(this)}connectedCallback(){this.addEventListener(rX.BREAKPOINTS_COMPUTED,dZ(this,m3)),dZ(this,mX).observe(this,{attributes:!0}),dZ(this,mX).observe(this.renderRoot,{attributes:!0,subtree:!0}),d0(this,m1,m2).call(this)}disconnectedCallback(){this.removeEventListener(rX.BREAKPOINTS_COMPUTED,dZ(this,m3)),dZ(this,mX).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==dZ(this,mQ)&&(dJ(this,mQ,this.template),this.renderer=new dC(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(d2.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function d4(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function d5(e){return e.split("-")[0]}mz=new WeakMap,mQ=new WeakMap,mZ=new WeakMap,mX=new WeakMap,mJ=new WeakSet,m0=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},m1=new WeakSet,m2=function(){var e;let t=this.getAttribute("template");if(!t||t===dZ(this,mZ))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){dJ(this,mZ,t),dJ(this,mz,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(dJ(this,mZ,t),d4(t).then(e=>{let t=nT.createElement("template");t.innerHTML=e,dJ(this,mz,t),this.createRenderer()}).catch(console.error))},m3=new WeakMap,d3.observedAttributes=["template"],d3.processor=dF,n_.customElements.get("media-theme")||n_.customElements.define("media-theme",d3);class d9 extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class d8 extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var d6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d7=(e,t,i)=>(d6(e,t,"read from private field"),i?i.call(e):t.get(e)),ue=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ut=(e,t,i,a)=>(d6(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ui=(e,t,i)=>(d6(e,t,"access private method"),i);function ua({type:e,text:t,value:i,checked:a}){let r=nT.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=nT.createElement("span");return n.textContent=t,r.append(n),r}function ur(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let un="style",us="hidden",uo="disabled";class ul extends n_.HTMLElement{constructor(){if(super(),ue(this,pt),ue(this,pa),ue(this,ps),ue(this,pl),ue(this,pu),ue(this,ph),ue(this,pb),ue(this,pf),ue(this,py),ue(this,pT),ue(this,pA),ue(this,pS),ue(this,pC),ue(this,pL),ue(this,px),ue(this,pO),ue(this,pN),ue(this,pH),ue(this,m4,null),ue(this,m5,null),ue(this,m9,null),ue(this,m8,new Set),ue(this,m6,void 0),ue(this,m7,!1),ue(this,pe,null),ue(this,pn,()=>{let e=d7(this,m8),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));ut(this,m8,t)}),ue(this,pp,()=>{ui(this,pb,pg).call(this),ui(this,pf,pE).call(this,!1)}),ue(this,pv,()=>{ui(this,pb,pg).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),ut(this,m6,new MutationObserver(d7(this,pn)))}static get observedAttributes(){return[uo,us,un,"anchor",rY.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":ui(this,pt,pi).call(this,e);break;case"invoke":ui(this,pl,pd).call(this,e);break;case"click":ui(this,py,p_).call(this,e);break;case"toggle":ui(this,pA,pw).call(this,e);break;case"focusout":ui(this,pC,pR).call(this,e);break;case"keydown":ui(this,pL,pM).call(this,e)}}connectedCallback(){var e,t;d7(this,m6).observe(this.defaultSlot,{childList:!0}),ut(this,pe,nW(this.shadowRoot,":host")),ui(this,ps,po).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),ut(this,m4,nL(this)),null==(t=null==(e=d7(this,m4))?void 0:e.associateElement)||t.call(e,this),this.hidden||(nS(uu(this),d7(this,pp)),nS(this,d7(this,pv))),ui(this,pa,pr).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;d7(this,m6).disconnect(),nI(uu(this),d7(this,pp)),nI(this,d7(this,pv)),this.disable(),null==(t=null==(e=d7(this,m4))?void 0:e.unassociateElement)||t.call(e,this),ut(this,m4,null),ut(this,m5,null),ut(this,m9,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,r,n,s;e===us&&i!==t?(d7(this,m7)||ut(this,m7,!0),this.hidden?ui(this,ph,pm).call(this):ui(this,pu,pc).call(this),this.dispatchEvent(new d8({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===rY.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=d7(this,m4))?void 0:a.unassociateElement)||r.call(a,this),ut(this,m4,null)),i&&this.isConnected&&(ut(this,m4,nL(this)),null==(s=null==(n=d7(this,m4))?void 0:n.associateElement)||s.call(n,this))):e===uo&&i!==t?null==i?this.enable():this.disable():e===un&&i!==t&&ui(this,ps,po).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=nN(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(ud)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&ui(this,pH,pW).call(this,t)}focus(){if(ut(this,m5,nP()),this.items.length){ui(this,pN,pU).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=ui(this,px,pD).call(this,e);i&&(ui(this,pH,pW).call(this,i,"checkbox"===i.type),d7(this,m9)&&!this.hidden&&(null==(t=d7(this,m5))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=ui(this,px,pD).call(this,e))?t:ui(this,pO,pP).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),ui(this,pN,pU).call(this,r[s]),r[s].focus()}}function ud(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function uu(e){var t;return null!=(t=e.getAttribute("bounds")?nO(e,`#${e.getAttribute("bounds")}`):nR(e)||e.parentElement)?t:e}m4=new WeakMap,m5=new WeakMap,m9=new WeakMap,m8=new WeakMap,m6=new WeakMap,m7=new WeakMap,pe=new WeakMap,pt=new WeakSet,pi=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&ui(this,pa,pr).call(this),t.name||d7(this,pn).call(this)},pa=new WeakSet,pr=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},pn=new WeakMap,ps=new WeakSet,po=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},pl=new WeakSet,pd=function(e){ut(this,m9,e.relatedTarget),nD(this,e.relatedTarget)||(this.hidden=!this.hidden)},pu=new WeakSet,pc=function(){var e;null==(e=d7(this,m9))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),nS(uu(this),d7(this,pp)),nS(this,d7(this,pv))},ph=new WeakSet,pm=function(){var e;null==(e=d7(this,m9))||e.setAttribute("aria-expanded","false"),nI(uu(this),d7(this,pp)),nI(this,d7(this,pv))},pp=new WeakMap,pv=new WeakMap,pb=new WeakSet,pg=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(d5(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=d5(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let n,s;return{anchor:(i=e,a=t.offsetParent,n=i.getBoundingClientRect(),s=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=uu(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=d7(this,pe);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},pf=new WeakSet,pE=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=d7(this,pe);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),ui(this,pb,pg).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),ui(this,pb,pg).call(this);a.removeProperty("--media-menu-transition-in")},py=new WeakSet,p_=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(d7(this,pT,pk))){null==(t=d7(this,m5))||t.focus(),this.hidden=!0;return}let i=ui(this,px,pD).call(this,e);!i||i.hasAttribute("disabled")||(ui(this,pN,pU).call(this,i),this.handleSelect(e))},pT=new WeakSet,pk=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},pA=new WeakSet,pw=function(e){if(e.target===this)return;ui(this,pS,pI).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new d9({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);ui(this,pf,pE).call(this,!0)},pS=new WeakSet,pI=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},pC=new WeakSet,pR=function(e){var t;nD(this,e.relatedTarget)||(d7(this,m7)&&(null==(t=d7(this,m5))||t.focus()),d7(this,m9)&&d7(this,m9)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},pL=new WeakSet,pM=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(d7(this,m7)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=d7(this,m5))||n.focus(),d7(this,m7)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},px=new WeakSet,pD=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},pO=new WeakSet,pP=function(){return this.items.find(e=>0===e.tabIndex)},pN=new WeakSet,pU=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},pH=new WeakSet,pW=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},ul.shadowRootOptions={mode:"open"},ul.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},n_.customElements.get("media-chrome-menu")||n_.customElements.define("media-chrome-menu",ul);var uc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uh=(e,t,i)=>(uc(e,t,"read from private field"),i?i.call(e):t.get(e)),um=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},up=(e,t,i,a)=>(uc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uv=(e,t,i)=>(uc(e,t,"access private method"),i);let ub="type",ug="value",uf="checked",uE="disabled";class uy extends n_.HTMLElement{constructor(){if(super(),um(this,pq),um(this,pF),um(this,pj),um(this,pZ),um(this,pB,!1),um(this,p$,void 0),um(this,pY,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=nT.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),um(this,pz,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",uh(this,pz))}),um(this,pQ,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",uh(this,pz)):this.addEventListener("keyup",uh(this,pz),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nC(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ub,uE,uf,ug]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),u_(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":uv(this,pq,pV).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":uh(this,pQ).call(this,e);break;case"keyup":uh(this,pz).call(this,e)}}attributeChangedCallback(e,t,i){e===uf&&u_(this)&&!uh(this,pB)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===ub&&i!==t?this.role="menuitem"+i:e===uE&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(uE)||this.enable(),this.role="menuitem"+this.type,up(this,p$,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),uv(this,pZ,pX).call(this),this.submenuElement&&uv(this,pF,pK).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),uv(this,pZ,pX).call(this),up(this,p$,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nN(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(ub))?e:""}set type(e){this.setAttribute(ub,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(ug))?e:this.text}set value(e){this.setAttribute(ug,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(u_(this))return"true"===this.getAttribute("aria-checked")}set checked(e){u_(this)&&(up(this,pB,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!u_(this)&&this.invokeTargetElement&&nD(this,e.target)&&this.invokeTargetElement.dispatchEvent(new d9({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function u_(e){return"radio"===e.type||"checkbox"===e.type}pB=new WeakMap,p$=new WeakMap,pq=new WeakSet,pV=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?uv(this,pF,pK).call(this):uv(this,pj,pG).call(this))},pF=new WeakSet,pK=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",uh(this,pY)),this.submenuElement.addEventListener("addmenuitem",uh(this,pY)),this.submenuElement.addEventListener("removemenuitem",uh(this,pY)),uh(this,pY).call(this)},pj=new WeakSet,pG=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",uh(this,pY)),this.submenuElement.removeEventListener("addmenuitem",uh(this,pY)),this.submenuElement.removeEventListener("removemenuitem",uh(this,pY)),uh(this,pY).call(this)},pY=new WeakMap,pz=new WeakMap,pQ=new WeakMap,pZ=new WeakSet,pX=function(){var e;let t=null==(e=uh(this,p$))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},uy.shadowRootOptions={mode:"open"},uy.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},uy.getSuffixSlotInnerHTML=function(e){return""},n_.customElements.get("media-chrome-menu-item")||n_.customElements.define("media-chrome-menu-item",uy);class uT extends ul{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nR(this).querySelector("media-settings-menu-button")}}uT.getTemplateHTML=function(e){return`
    ${ul.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},n_.customElements.get("media-settings-menu")||n_.customElements.define("media-settings-menu",uT);class uk extends uy{}uk.shadowRootOptions={mode:"open"},uk.getTemplateHTML=function(e){return`
    ${uy.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},uk.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},n_.customElements.get("media-settings-menu-item")||n_.customElements.define("media-settings-menu-item",uk);class uA extends oW{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nN(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new d9({relatedTarget:this}))}}n_.customElements.get("media-chrome-menu-button")||n_.customElements.define("media-chrome-menu-button",uA);class uw extends uA{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",nl("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nR(this).querySelector("media-settings-menu")}}uw.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},uw.getTooltipContentHTML=function(){return nl("Settings")},n_.customElements.get("media-settings-menu-button")||n_.customElements.define("media-settings-menu-button",uw);var uS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uI=(e,t,i)=>(uS(e,t,"read from private field"),i?i.call(e):t.get(e)),uC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uR=(e,t,i,a)=>(uS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uL=(e,t,i)=>(uS(e,t,"access private method"),i);pJ=new WeakMap,p0=new WeakMap,p1=new WeakSet,p2=function(){if(uI(this,p0)===JSON.stringify(this.mediaAudioTrackList))return;uR(this,p0,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=ua({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(ur(this,"checked-indicator")),this.defaultSlot.append(e)}},p3=new WeakSet,p4=function(){if(null==this.value)return;let e=new n_.CustomEvent(rG.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},n_.customElements.get("media-audio-track-menu")||n_.customElements.define("media-audio-track-menu",class extends ul{constructor(){super(...arguments),uC(this,p1),uC(this,p3),uC(this,pJ,[]),uC(this,p0,void 0)}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_AUDIO_TRACK_LIST,rZ.MEDIA_AUDIO_TRACK_ENABLED,rZ.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===rZ.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;uR(this,pJ,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(ne)),uL(this,p1,p2).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uL(this,p3,p4))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uL(this,p3,p4))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=nR(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return uI(this,pJ)}set mediaAudioTrackList(e){uR(this,pJ,e),uL(this,p1,p2).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=nF(this,rZ.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){nK(this,rZ.MEDIA_AUDIO_TRACK_ENABLED,e)}});let uM=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,ux=e=>{let t=nl("Audio");e.setAttribute("aria-label",t)};class uD extends uA{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_AUDIO_TRACK_ENABLED,rZ.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ux(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_LANG&&ux(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nR(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=nF(this,rZ.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){nK(this,rZ.MEDIA_AUDIO_TRACK_ENABLED,e)}}uD.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${uM}</slot>
  `},uD.getTooltipContentHTML=function(){return nl("Audio")},n_.customElements.get("media-audio-track-menu-button")||n_.customElements.define("media-audio-track-menu-button",uD);var uO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uP=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uN=(e,t,i)=>(uO(e,t,"access private method"),i);let uU=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class uH extends ul{constructor(){super(...arguments),uP(this,p9),uP(this,p6),uP(this,p5,void 0)}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_SUBTITLES_LIST,rZ.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_SUBTITLES_LIST&&t!==i?uN(this,p9,p8).call(this):e===rZ.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",uN(this,p9,p8).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uN(this,p6,p7))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uN(this,p6,p7))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nR(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return uW(this,rZ.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){uB(this,rZ.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return uW(this,rZ.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){uB(this,rZ.MEDIA_SUBTITLES_SHOWING,e)}}p5=new WeakMap,p9=new WeakSet,p8=function(){var e,t,i,a;let r=(uO(this,t=p5,"read from private field"),t.get(this)!==JSON.stringify(this.mediaSubtitlesList)),n=this.value!==this.getAttribute(rZ.MEDIA_SUBTITLES_SHOWING);if(!r&&!n)return;i=p5,a=JSON.stringify(this.mediaSubtitlesList),uO(this,i,"write to private field"),i.set(this,a),this.defaultSlot.textContent="";let s=!this.value,o=ua({type:"radio",text:this.formatMenuItemText(nl("Off")),value:"off",checked:s});for(let t of(o.prepend(ur(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=ua({type:"radio",text:this.formatMenuItemText(t.label,t),value:sA(t),checked:this.value==sA(t)});i.prepend(ur(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(ur(this,"captions-indicator")),this.defaultSlot.append(i)}},p6=new WeakSet,p7=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(rZ.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new n_.CustomEvent(rG.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new n_.CustomEvent(rG.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},uH.getTemplateHTML=function(e){return`
    ${ul.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${uU}</slot>
  `};let uW=(e,t)=>{let i=e.getAttribute(t);return i?sT(i):[]},uB=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sw(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};n_.customElements.get("media-captions-menu")||n_.customElements.define("media-captions-menu",uH);let u$=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,uq=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,uV=e=>{e.setAttribute("data-captions-enabled",sR(e).toString())},uF=e=>{e.setAttribute("aria-label",nl("closed captions"))};class uK extends uA{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_SUBTITLES_LIST,rZ.MEDIA_SUBTITLES_SHOWING,rZ.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),uF(this),uV(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_SUBTITLES_SHOWING?uV(this):e===rZ.MEDIA_LANG&&uF(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nR(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return uj(this,rZ.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){uG(this,rZ.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return uj(this,rZ.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){uG(this,rZ.MEDIA_SUBTITLES_SHOWING,e)}}uK.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${u$}</slot>
      <slot name="off">${uq}</slot>
    </slot>
  `},uK.getTooltipContentHTML=function(){return nl("Captions")};let uj=(e,t)=>{let i=e.getAttribute(t);return i?sT(i):[]},uG=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sw(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};n_.customElements.get("media-captions-menu-button")||n_.customElements.define("media-captions-menu-button",uK);var uY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uz=(e,t,i)=>(uY(e,t,"read from private field"),i?i.call(e):t.get(e)),uQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uZ=(e,t,i)=>(uY(e,t,"access private method"),i);let uX="rates";ve=new WeakMap,vt=new WeakSet,vi=function(){this.defaultSlot.textContent="";let e=l$(this.mediaPlaybackRate),t=new Set(Array.from(uz(this,ve)).map(e=>l$(Number(e))));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=ua({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(ur(this,"checked-indicator")),this.defaultSlot.append(t)}},va=new WeakSet,vr=function(){if(!this.value)return;let e=new n_.CustomEvent(rG.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},n_.customElements.get("media-playback-rate-menu")||n_.customElements.define("media-playback-rate-menu",class extends ul{constructor(){super(),uQ(this,vt),uQ(this,va),uQ(this,ve,new sy(this,uX,{defaultValue:lB})),uZ(this,vt,vi).call(this)}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_PLAYBACK_RATE,uX]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,uZ(this,vt,vi).call(this)):e===uX&&t!=i&&(uz(this,ve).value=i,uZ(this,vt,vi).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uZ(this,va,vr))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uZ(this,va,vr))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nR(this).querySelector("media-playback-rate-menu-button")}get rates(){return uz(this,ve)}set rates(e){e?Array.isArray(e)?uz(this,ve).value=e.join(" "):"string"==typeof e&&(uz(this,ve).value=e):uz(this,ve).value="",uZ(this,vt,vi).call(this)}get mediaPlaybackRate(){return nB(this,rZ.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){n$(this,rZ.MEDIA_PLAYBACK_RATE,e)}});class uJ extends uA{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${l$(null!=(e=this.mediaPlaybackRate)?e:1)}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rZ.MEDIA_PLAYBACK_RATE){let e=i?+i:0/0,t=l$(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",nl("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nR(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return nB(this,rZ.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){n$(this,rZ.MEDIA_PLAYBACK_RATE,e)}}uJ.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?l$(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},uJ.getTooltipContentHTML=function(){return nl("Playback rate")},n_.customElements.get("media-playback-rate-menu-button")||n_.customElements.define("media-playback-rate-menu-button",uJ);var u0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},u1=(e,t,i)=>(u0(e,t,"read from private field"),i?i.call(e):t.get(e)),u2=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},u3=(e,t,i,a)=>(u0(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),u4=(e,t,i)=>(u0(e,t,"access private method"),i);vn=new WeakMap,vs=new WeakMap,vo=new WeakSet,vl=function(){let e,t=!this.mediaRenditionSelected;if(u1(this,vs).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&u1(this,vs).mediaHeight===this.mediaHeight&&u1(this,vs).mediaWidth===this.mediaWidth&&u1(this,vs).isAuto===t)return;u1(this,vs).mediaRenditionList=JSON.stringify(this.mediaRenditionList),u1(this,vs).mediaHeight=this.mediaHeight,u1(this,vs).mediaWidth=this.mediaWidth,u1(this,vs).isAuto=t;let i=this.mediaRenditionList.sort(this.compareRendition.bind(this)),a=i.find(e=>e.id===this.mediaRenditionSelected);for(let e of i)e.selected=e===a;for(let e of(this.defaultSlot.textContent="",i)){let i=ua({type:"radio",text:this.formatRendition(e,{showBitrate:this.showRenditionBitrate(e)}),value:`${e.id}`,checked:e.selected&&!t});i.prepend(ur(this,"checked-indicator")),this.defaultSlot.append(i)}let r=a&&this.showRenditionBitrate(a);t&&(a?e=this.formatMenuItemText(`${nl("Auto")} • ${this.formatRendition(a,{showBitrate:r})}`,a):this.mediaHeight>0&&this.mediaWidth>0&&(e=this.formatMenuItemText(`${nl("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),e||(e=this.formatMenuItemText(nl("Auto")));let n=ua({type:"radio",text:e,value:"auto",checked:t});n.dataset.description=e,n.prepend(ur(this,"checked-indicator")),this.defaultSlot.append(n)},vd=new WeakSet,vu=function(){if(null==this.value)return;let e=new n_.CustomEvent(rG.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},n_.customElements.get("media-rendition-menu")||n_.customElements.define("media-rendition-menu",class extends ul{constructor(){super(...arguments),u2(this,vo),u2(this,vd),u2(this,vn,[]),u2(this,vs,{})}static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_RENDITION_LIST,rZ.MEDIA_RENDITION_SELECTED,rZ.MEDIA_RENDITION_UNAVAILABLE,rZ.MEDIA_HEIGHT,rZ.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case rZ.MEDIA_RENDITION_SELECTED:this.value=null!=i?i:"auto",u4(this,vo,vl).call(this);break;case rZ.MEDIA_RENDITION_LIST:u3(this,vn,null==i?void 0:i.split(/\s+/).map(r6)),u4(this,vo,vl).call(this);break;case rZ.MEDIA_HEIGHT:case rZ.MEDIA_WIDTH:u4(this,vo,vl).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",u4(this,vd,vu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",u4(this,vd,vu))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nR(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return u1(this,vn)}set mediaRenditionList(e){u3(this,vn,e),u4(this,vo,vl).call(this)}get mediaRenditionSelected(){return nF(this,rZ.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){nK(this,rZ.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nB(this,rZ.MEDIA_HEIGHT)}set mediaHeight(e){n$(this,rZ.MEDIA_HEIGHT,e)}get mediaWidth(){return nB(this,rZ.MEDIA_WIDTH)}set mediaWidth(e){n$(this,rZ.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}});let u5=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class u9 extends uA{static get observedAttributes(){return[...super.observedAttributes,rZ.MEDIA_RENDITION_SELECTED,rZ.MEDIA_RENDITION_UNAVAILABLE,rZ.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",nl("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nR(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return nF(this,rZ.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){nK(this,rZ.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nB(this,rZ.MEDIA_HEIGHT)}set mediaHeight(e){n$(this,rZ.MEDIA_HEIGHT,e)}}u9.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${u5}</slot>
  `},u9.getTooltipContentHTML=function(){return nl("Quality")},n_.customElements.get("media-rendition-menu-button")||n_.customElements.define("media-rendition-menu-button",u9);var u8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},u6=(e,t,i)=>(u8(e,t,"read from private field"),i?i.call(e):t.get(e)),u7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ce=(e,t,i,a)=>(u8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ct=(e,t,i)=>(u8(e,t,"access private method"),i);class ci extends ul{constructor(){super(),u7(this,vh),u7(this,vp),u7(this,vb),u7(this,vf),u7(this,v_),u7(this,vc,!1),u7(this,vy,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=ct(this,vf,vE).call(this,t);(i||a)&&(u6(this,vc)?ct(this,vp,vv).call(this):ct(this,v_,vT).call(this,e))}),u7(this,vk,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=ct(this,vf,vE).call(this,t);i||a&&(r||n)||ct(this,vp,vv).call(this)}),u7(this,vA,e=>{"Escape"===e.key&&ct(this,vp,vv).call(this)}),u7(this,vw,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}ct(this,vp,vv).call(this)}),this.setAttribute("noautohide",""),ct(this,vh,vm).call(this)}connectedCallback(){super.connectedCallback(),nR(this).addEventListener("contextmenu",u6(this,vy)),this.addEventListener("click",u6(this,vw))}disconnectedCallback(){super.disconnectedCallback(),nR(this).removeEventListener("contextmenu",u6(this,vy)),this.removeEventListener("click",u6(this,vw)),document.removeEventListener("mousedown",u6(this,vk)),document.removeEventListener("keydown",u6(this,vA))}}vc=new WeakMap,vh=new WeakSet,vm=function(){this.hidden=!u6(this,vc)},vp=new WeakSet,vv=function(){ce(this,vc,!1),ct(this,vh,vm).call(this)},vb=new WeakSet,vg=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&ct(e,vp,vv).call(e)})},vf=new WeakSet,vE=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},vy=new WeakMap,v_=new WeakSet,vT=function(e){e.preventDefault(),ct(this,vb,vg).call(this),ce(this,vc,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,ct(this,vh,vm).call(this),document.addEventListener("mousedown",u6(this,vk),{once:!0}),document.addEventListener("keydown",u6(this,vA),{once:!0})},vk=new WeakMap,vA=new WeakMap,vw=new WeakMap,ci.getTemplateHTML=function(e){return`
      ${ul.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},n_.customElements.get("media-context-menu")||n_.customElements.define("media-context-menu",ci);class ca extends uy{}ca.shadowRootOptions={mode:"open"},ca.getTemplateHTML=function(e){return`
    ${uy.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},n_.customElements.get("media-context-menu-item")||n_.customElements.define("media-context-menu-item",ca);var cr=e=>{throw TypeError(e)},cn=(e,t,i)=>t.has(e)||cr("Cannot "+i),cs=(e,t,i)=>(cn(e,t,"read from private field"),i?i.call(e):t.get(e)),co=(e,t,i)=>t.has(e)?cr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),cl=(e,t,i,a)=>(cn(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cd=(e,t,i)=>(cn(e,t,"access private method"),i),cu=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends cu{});var cc,ch,cm,cp,cv,cb,cg,cf,cE,cy,c_,cT,ck,cA,cw,cS,cI,cC,cR,cL,cM,cx,cD,cO,cP,cN,cU,cH,cW,cB,c$,cq,cV,cF,cK,cj,cG,cY,cz,cQ,cZ,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hb,hg,hf,hE,hy,h_,hT,hk,hA,hw,hS,hI,hC,hR,hL,hM,hx,hD,hO,hP,hN,hU,hH,hW,hB,h$,hq,hV,hF,hK,hj,hG,hY,hz,hQ,hZ,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mb,mg,mf,mE,my,m_,mT,mk,mA,mw,mS,mI,mC,mR,mL,mM,mx,mD,mO,mP,mN,mU,mH,mW,mB,m$,mq,mV,mF,mK,mj,mG,mY,mz,mQ,mZ,mX,mJ,m0,m1,m2,m3,m4,m5,m9,m8,m6,m7,pe,pt,pi,pa,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pb,pg,pf,pE,py,p_,pT,pk,pA,pw,pS,pI,pC,pR,pL,pM,px,pD,pO,pP,pN,pU,pH,pW,pB,p$,pq,pV,pF,pK,pj,pG,pY,pz,pQ,pZ,pX,pJ,p0,p1,p2,p3,p4,p5,p9,p8,p6,p7,ve,vt,vi,va,vr,vn,vs,vo,vl,vd,vu,vc,vh,vm,vp,vv,vb,vg,vf,vE,vy,v_,vT,vk,vA,vw,vS,vI=class extends cu{},vC=class{constructor(e,t={}){co(this,vS),cl(this,vS,null==t?void 0:t.detail)}get detail(){return cs(this,vS)}initCustomEvent(){}};vS=new WeakMap;var vR={document:{createElement:function(e,t){return new vI}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(vI)},CustomEvent:vC,EventTarget:cu,HTMLElement:vI,HTMLVideoElement:class extends cu{}},vL="u"<typeof window||void 0===globalThis.customElements,vM=vL?vR:globalThis,vx=vL?vR.document:globalThis.document;function vD(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function vO(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function vP(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function vN(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function vU(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var vH,vW,vB,v$=(e,t)=>!!e&&!!t&&(!!e.contains(t)||v$(e,t.getRootNode().host)),vq="mux.com",vV=(()=>{try{return"3.14.1"}catch{}return"UNKNOWN"})(),vF=e=>{if(e){if([ie,t7].includes(e))return e;if(null!=e&&e.includes("live"))return ie}},vK={crossorigin:"crossOrigin",playsinline:"playsInline"},vj=class{constructor(e,t){co(this,vH),co(this,vW),co(this,vB,[]),cl(this,vH,e),cl(this,vW,t)}[Symbol.iterator](){return cs(this,vB).values()}get length(){return cs(this,vB).length}get value(){var e;return null!=(e=cs(this,vB).join(" "))?e:""}set value(e){var t;e!==this.value&&(cl(this,vB,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return cs(this,vB)[e]}values(){return cs(this,vB).values()}keys(){return cs(this,vB).keys()}forEach(e){cs(this,vB).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||cs(this,vB).push(e)}),(""!==this.value||null!=(t=cs(this,vH))&&t.hasAttribute(`${cs(this,vW)}`))&&null!=(i=cs(this,vH))&&i.setAttribute(`${cs(this,vW)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{cs(this,vB).splice(cs(this,vB).indexOf(e),1)}),null==(t=cs(this,vH))||t.setAttribute(`${cs(this,vW)}`,`${this.value}`)}contains(e){return cs(this,vB).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};vH=new WeakMap,vW=new WeakMap,vB=new WeakMap;var vG=`[mux-player ${vV}]`;function vY(...e){console.warn(vG,...e)}function vz(...e){console.error(vG,...e)}function vQ(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${i_("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),vY(i)}var vZ={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},vX={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},vJ=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),v0=[...Object.values(vZ).filter(e=>vZ.PLAYSINLINE!==e),...Object.values(vX)];function v1(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var v2=class extends vM.HTMLElement{static get observedAttributes(){return v0}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case vX.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case vX.VOLUME:{let e=null!=(a=vN(i))?a:1;this.media&&(this.media.volume=e);return}case vX.PLAYBACKRATE:{let e=null!=(r=vN(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:0/0}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:vJ}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:vJ}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=vN(this.getAttribute(vX.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(vX.PLAYBACKRATE,`${e}`):this.removeAttribute(vX.PLAYBACKRATE)}get crossOrigin(){return v1(this,vZ.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(vZ.CROSSORIGIN,`${e}`)}get autoplay(){return null!=v1(this,vZ.AUTOPLAY)}set autoplay(e){e?this.setAttribute(vZ.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(vZ.AUTOPLAY)}get loop(){return null!=v1(this,vZ.LOOP)}set loop(e){e?this.setAttribute(vZ.LOOP,""):this.removeAttribute(vZ.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=v1(this,vZ.MUTED)}set defaultMuted(e){e?this.setAttribute(vZ.MUTED,""):this.removeAttribute(vZ.MUTED)}get playsInline(){return null!=v1(this,vZ.PLAYSINLINE)}set playsInline(e){vz("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(vZ.PRELOAD,e):this.removeAttribute(vZ.PRELOAD)}},v3=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,v4=new WeakMap,v5=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=v4.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=v4.get(this.element);e&&e.delete(this.type)}}static for(t){v4.has(t.element)||v4.set(t.element,new Map);let i=t.attributeName.slice(2),a=v4.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},v9=new Map,v8=new WeakMap,v6=new WeakMap,v7=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(v9.has(this.stringsKey))return v9.get(this.stringsKey);{let e=vx.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),v9.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(v8.get(e)!==i){v8.set(e,i);let t=new dC(i,this.values,this.processor);v6.set(e,t),e instanceof dN?e.replace(...t.children):e.appendChild(t);return}let a=v6.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},be={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof dP&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof dP){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof dP&&e.attributeName.startsWith("on")&&(v5.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof dN&&(e.replace(""),1)||t instanceof v7&&e instanceof dN&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof dN&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof dP){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function bt(e,...t){return new v7(e,t,be)}var bi=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),ba=e=>e.charAt(0).toUpperCase()+e.slice(1),br=(e,t)=>{let i=(e=>{if(e.muxCode){if(2403210===e.muxCode)return"403-expired-token.md";if(2412202===e.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(e.muxCode))return"403-incorrect-aud-value.md";if(2403232===e.muxCode)return"403-playback-id-mismatch.md";if(2403201===e.muxCode)return"missing-signed-tokens.md";if(2404e3===e.muxCode)return"404-not-found.md";if(2412e3===e.muxCode)return"412-not-playable.md"}if(e.code){if(e.code===t9.MEDIA_ERR_NETWORK)return"";if(e.code===t9.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===t9.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},bn=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,bs=vx.createElement("template");"innerHTML"in bs&&(bs.innerHTML=bn);var bo,bl,bd=class extends d3{};bd.template=null==(bl=null==(bo=bs.content)?void 0:bo.children)?void 0:bl[0],vM.customElements.get("media-theme-gerwig")||vM.customElements.define("media-theme-gerwig",bd);var bu={SRC:"src",POSTER:"poster"},bc={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},bh=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],bm=lu.formatErrorMessage;function bp(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}lu.formatErrorMessage=e=>{var t,i,a;if(e instanceof t9){let r=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=ba(null!=(i=e.errorCategory)?i:"video"),n=t5(null!=(a=e.errorCategory)?a:t4);if(2000002===e.muxCode)return i_("Your device appears to be offline",t);if(2000003===e.muxCode)return i_("Reconnecting...",t);if(2403210===e.muxCode)return i_("{category} URL has expired",t).format({category:r});if([2403232,2403222,2403221,2412202].includes(e.muxCode))return i_("{category} URL is formatted incorrectly",t).format({category:r});if(2403201===e.muxCode)return i_("Invalid {categoryName} URL",t).format({categoryName:n});if(2404e3===e.muxCode)return i_("{category} does not exist",t).format({category:r});if(2412e3===e.muxCode){let i="live"===e.streamType?"Live stream":"Video";return i_("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===t9.MEDIA_ERR_NETWORK)return i_("Network Error",t);if(e.code===t9.MEDIA_ERR_DECODE)return i_("Media Error",t);if(e.code===t9.MEDIA_ERR_SRC_NOT_SUPPORTED)return i_("Source Not Supported",t)}return i_("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.reload)return"";if(e.muxCode){let r=ba(null!=(i=e.errorCategory)?i:"video"),n=t5(null!=(a=e.errorCategory)?a:t4);return 2000002===e.muxCode?i_("Check your internet connection and try reloading this video.",t):2000003===e.muxCode?i_("Your connection was interrupted. Attempting to resume playback...",t):2403210===e.muxCode?i_("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):2403232===e.muxCode?i_("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):2412202===e.muxCode?i_("{category} URL is formatted incorrectly",t).format({category:r}):[2403222,2403221].includes(e.muxCode)?i_("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[2403201,24e5].includes(e.muxCode)?i_("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):2404e3===e.muxCode?"":e.message}return e.code&&(e.code===t9.MEDIA_ERR_NETWORK||e.code===t9.MEDIA_ERR_DECODE||e.code===t9.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString(),reload:!!e.reload}))(e,!1);return null!=r&&r.reload?`
      ${null!=r&&r.title?`<h3>${vD(r.title)}</h3>`:""}
      <p>Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a></p>
    `:`
      ${null!=r&&r.title?`<h3>${vD(r.title)}</h3>`:""}
      ${null!=r&&r.message||null!=r&&r.linkUrl?`<p>
        ${vD(null!=(t=null==r?void 0:r.message)?t:"")}
        ${null!=r&&r.linkUrl?`<a
              href="${vD(r.linkUrl)}"
              target="_blank"
              rel="external noopener"
              aria-label="${vD(null!=(i=r.linkText)?i:"")} ${i_("(opens in a new window)")}"
              >${vD(null!=(a=r.linkText)?a:r.linkUrl)}</a
            >`:""}
      </p>`:""}
    `}return bm(e)};var bv,bb,bg,bf,bE,by,b_,bT,bk,bA,bw,bS,bI,bC,bR,bL,bM,bx,bD,bO,bP,bN,bU,bH,bW=Object.values(rd),bB=Object.values(bu),b$=Object.values(bc),bq="mux-player",bV={isDialogOpen:!1},bF={redundant_streams:!0},bK=class extends v2{constructor(){super(),co(this,bL),co(this,bv),co(this,bb,!1),co(this,bg,{}),co(this,bf,!0),co(this,bE,new vj(this,"hotkeys")),co(this,by),co(this,b_,()=>cd(this,bL,bO).call(this)),co(this,bT,()=>cd(this,bL,bO).call(this)),co(this,bk,()=>cd(this,bL,bO).call(this)),co(this,bA,e=>{e.composedPath().find(e=>{var t;return null==(t=null==e?void 0:e.hasAttribute)?void 0:t.call(e,"data-mux-reload")})&&(e.preventDefault(),window.location.reload())}),co(this,bw,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&cd(this,bL,bD).call(this,{isDialogOpen:!1})}),co(this,bS,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(v$(this,vx.activeElement)||e.preventDefault())}),co(this,bI),co(this,bC,{...bV}),co(this,bR,e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof t9)){let{message:e,code:t}=null!=i?i:{};i=new t9(e,t)}if(!(null!=i&&i.fatal)){vY(i),i.data&&vY(`${i.name} data:`,i.data);return}let a=br(i,!1);a.message&&vQ(a),vz(i),i.data&&vz(`${i.name} data:`,i.data),cd(this,bL,bD).call(this,{isDialogOpen:!0})}),cl(this,bv,af()),this.attachShadow({mode:"open"}),cd(this,bL,bx).call(this),this.isConnected&&cd(this,bL,bM).call(this)}static get NAME(){return bq}static get VERSION(){return vV}static get observedAttributes(){var e;return[...null!=(e=v2.observedAttributes)?e:[],...bB,...bW,...b$]}setAttribute(e,t){super.setAttribute(e,t),e.startsWith("metadata-")&&this.media&&(this.media.metadata=bp(this))}removeAttribute(e){super.removeAttribute(e),e.startsWith("metadata-")&&this.media&&(this.media.metadata=bp(this))}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){cd(this,bL,bM).call(this);let e=this.media;e&&(e.metadata=bp(this))}disconnectedCallback(){var e,t,i,a,r,n,s,o,l,d;null==(e=cs(this,by))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",cs(this,b_)),null==(i=this.media)||i.removeEventListener("loadstart",cs(this,bT)),this.removeEventListener("error",cs(this,bR)),this.removeEventListener("click",cs(this,bA)),null==(a=this.mediaTheme)||a.removeEventListener("close",cs(this,bw)),null==(r=this.mediaTheme)||r.removeEventListener("focusin",cs(this,bS)),this.media&&(this.media.errorTranslator=void 0),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("addtrack",cs(this,bk)),null==(l=null==(o=this.media)?void 0:o.textTracks)||l.removeEventListener("removetrack",cs(this,bk)),null==(d=cs(this,bI))||d.call(this),cl(this,bI,void 0),cl(this,bb,!1)}attributeChangedCallback(e,t,i){var a;switch(cd(this,bL,bM).call(this),super.attributeChangedCallback(e,t,i),e){case bc.HOTKEYS:cs(this,bE).value=i;break;case bc.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&vY(i_("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case bc.THUMBNAIL_TOKEN:if(i){let e=iy(i);if(e){let{aud:t}=e;"t"!==t&&vY(i_("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case bc.STORYBOARD_TOKEN:if(i){let e=iy(i);if(e){let{aud:t}=e;"s"!==t&&vY(i_("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case bc.DRM_TOKEN:if(i){let e=iy(i);if(e){let{aud:t}=e;"d"!==t&&vY(i_("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case rd.PLAYBACK_ID:null!=i&&i.includes("?token")&&vz(i_("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case rd.STREAM_TYPE:i&&![ie,t7,it].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:vQ({file:"invalid-stream-type.md",message:i_("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===ie?null==this.getAttribute(bc.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=0/0;break;case bc.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=vx.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case rd.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0);break;case rd.MAX_RECONNECT_RETRIES:(null==i||i!==t)&&(this.maxReconnectRetries=Number(i))}[rd.PLAYBACK_ID,bu.SRC,bc.PLAYBACK_TOKEN].includes(e)&&t!==i&&cl(this,bC,{...cs(this,bC),...bV}),cd(this,bL,bO).call(this,{[null!=(a=vK[e])?a:vP(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(rZ.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new vM.CustomEvent(rG.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(rX.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(rZ.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new vM.CustomEvent(rG.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(rX.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(rd.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?ir.includes(e)?this.setAttribute(rd.PREFER_CMCD,e):vY(`Invalid value for preferCmcd. Must be one of ${ir.join()}`):this.removeAttribute(rd.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rZ.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(rZ.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(bc.THEME))?e:"gerwig"}set theme(e){this.setAttribute(bc.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(bh.includes(i))continue;let a=e.getAttribute(i);t[vP(i)]=""===a||a}return t}set themeProps(e){var t,i;cd(this,bL,bM).call(this);let a={...this.themeProps,...e};for(let r in a){if(bh.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(vO(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(vO(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(rd.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(rd.PLAYBACK_ID,e):this.removeAttribute(rd.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=bj(this,bu.SRC))?e:void 0:null!=(t=this.getAttribute(bu.SRC))?t:void 0}set src(e){e?this.setAttribute(bu.SRC,e):this.removeAttribute(bu.SRC)}get poster(){var e;let t=this.getAttribute(bu.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void vY("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=vq,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=iy(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${vU({token:t,time:s,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(bu.POSTER,e):this.removeAttribute(bu.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(bc.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(bc.STORYBOARD_SRC,e):this.removeAttribute(bc.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[ie,it].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=vq,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=iy(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${vU({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(bc.AUDIO)}set audio(e){e?this.setAttribute(bc.AUDIO,""):this.removeAttribute(bc.AUDIO)}get hotkeys(){return cs(this,bE)}get nohotkeys(){return this.hasAttribute(bc.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(bc.NOHOTKEYS,""):this.removeAttribute(bc.NOHOTKEYS)}get thumbnailTime(){return vN(this.getAttribute(bc.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(bc.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(bc.VIDEO_TITLE))?e:this.getAttribute(bc.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(bc.VIDEO_TITLE,e):this.removeAttribute(bc.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=bj(this,bc.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(bc.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(bc.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vM.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(bc.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(bc.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vM.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(bc.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(bc.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vM.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(bc.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(bc.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(bc.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(bc.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(bc.PLAYBACK_RATES))return this.getAttribute(bc.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(bc.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(bc.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=vN(this.getAttribute(bc.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(bc.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=vN(this.getAttribute(bc.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(bc.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(bc.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(bc.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(bc.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return vN(this.getAttribute(bc.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(bc.DEFAULT_DURATION):this.setAttribute(bc.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(rd.PLAYER_INIT_TIME)?vN(this.getAttribute(rd.PLAYER_INIT_TIME)):cs(this,bv)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(rd.PLAYER_INIT_TIME):this.setAttribute(rd.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(rd.PLAYER_SOFTWARE_NAME))?e:bq}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(rd.PLAYER_SOFTWARE_VERSION))?e:vV}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(rd.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(rd.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(rd.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(rd.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(rd.MAX_RESOLUTION,e):this.removeAttribute(rd.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(rd.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(rd.MIN_RESOLUTION,e):this.removeAttribute(rd.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(rd.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(rd.MAX_AUTO_RESOLUTION):this.setAttribute(rd.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(rd.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(rd.RENDITION_ORDER,e):this.removeAttribute(rd.RENDITION_ORDER))}get programStartTime(){return vN(this.getAttribute(rd.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(rd.PROGRAM_START_TIME):this.setAttribute(rd.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return vN(this.getAttribute(rd.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(rd.PROGRAM_END_TIME):this.setAttribute(rd.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return vN(this.getAttribute(rd.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(rd.ASSET_START_TIME):this.setAttribute(rd.ASSET_START_TIME,`${e}`)}get assetEndTime(){return vN(this.getAttribute(rd.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(rd.ASSET_END_TIME):this.setAttribute(rd.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(bc.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(bc.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):bF}set extraSourceParams(e){null==e?this.removeAttribute(bc.EXTRA_SOURCE_PARAMS):this.setAttribute(bc.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(rd.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(rd.CUSTOM_DOMAIN,e):this.removeAttribute(rd.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=bj(this,rd.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(rd.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(bc.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(bc.NO_VOLUME_PREF,""):this.removeAttribute(bc.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(bc.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(bc.NO_MUTED_PREF,""):this.removeAttribute(bc.NO_MUTED_PREF)}get debug(){return null!=bj(this,rd.DEBUG)}set debug(e){e?this.setAttribute(rd.DEBUG,""):this.removeAttribute(rd.DEBUG)}get disableTracking(){return null!=bj(this,rd.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(rd.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=bj(this,rd.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(rd.DISABLE_COOKIES,""):this.removeAttribute(rd.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(rd.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:it}set streamType(e){this.setAttribute(rd.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(bc.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(bc.DEFAULT_STREAM_TYPE))?i:t7}set defaultStreamType(e){e?this.setAttribute(bc.DEFAULT_STREAM_TYPE,e):this.removeAttribute(bc.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(bc.TARGET_LIVE_WINDOW)?+this.getAttribute(bc.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:0/0}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(bc.TARGET_LIVE_WINDOW):this.setAttribute(bc.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return vN(bj(this,rd.START_TIME))}set startTime(e){this.setAttribute(rd.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return vN(bj(this,rd.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){null==e?this.removeAttribute(rd.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(rd.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return vN(bj(this,rd.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){null==e?this.removeAttribute(rd.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(rd.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return vN(bj(this,rd.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){null==e?this.removeAttribute(rd.MIN_PRELOAD_SEGMENTS):this.setAttribute(rd.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(rd.PREFER_PLAYBACK);if("mse"===e||e===ii)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===ii?this.setAttribute(rd.PREFER_PLAYBACK,e):this.removeAttribute(rd.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(cd(this,bL,bM).call(this),this.media)?this.media.metadata={...bp(this),...e}:vz("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(cd(this,bL,bM).call(this),this.media)?this.media._hlsConfig=e:vz("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(cd(this,bL,bM).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void vz("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(cd(this,bL,bM).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void vz("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(bc.PLAYBACK_TOKEN),t=this.getAttribute(bc.DRM_TOKEN),i=this.getAttribute(bc.THUMBNAIL_TOKEN),a=this.getAttribute(bc.STORYBOARD_TOKEN);return{...cs(this,bg),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){cl(this,bg,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(bc.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(bc.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(bc.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(bc.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(bc.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(bc.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(bc.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(bc.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return iL(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(bc.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(bc.CAST_RECEIVER,e):this.removeAttribute(bc.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:vz("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(bc.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(bc.NO_TOOLTIPS,""):this.removeAttribute(bc.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(bc.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(bc.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(bc.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){this.media?this.media.capRenditionToPlayerSize=e:vz("underlying media element missing when trying to set capRenditionToPlayerSize")}get maxReconnectRetries(){var e;return null==(e=this.media)?void 0:e.maxReconnectRetries}set maxReconnectRetries(e){this.media?this.media.maxReconnectRetries=e:vz("underlying media element missing when trying to set maxReconnectRetries")}};function bj(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}bv=new WeakMap,bb=new WeakMap,bg=new WeakMap,bf=new WeakMap,bE=new WeakMap,by=new WeakMap,b_=new WeakMap,bT=new WeakMap,bk=new WeakMap,bA=new WeakMap,bw=new WeakMap,bS=new WeakMap,bI=new WeakMap,bC=new WeakMap,bR=new WeakMap,bL=new WeakSet,bM=function(){var e,t,i,a;if(!cs(this,bb)){cl(this,bb,!0),cd(this,bL,bO).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof vM.HTMLElement))throw""}catch{vz("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{vz("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof og))throw""}catch{vz("<media-controller> failed to upgrade!")}cd(this,bL,bP).call(this),cd(this,bL,bN).call(this),cd(this,bL,bU).call(this),cl(this,bf,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(n8))||t),cd(this,bL,bH).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",cs(this,b_)),null==(a=this.media)||a.addEventListener("loadstart",cs(this,bT)),this.media&&(this.media.metadata=bp(this))}},bx=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},bD=function(e){Object.assign(cs(this,bC),e),cd(this,bL,bO).call(this)},bO=function(e={}){var t,i,a,r,n,s,o,l,d,u,c,h,m,p,v,b,g,f,E,y,_,T,k,A,w,S,I,C,R,L,M,x,D,O,P,N,U,H,W,B,$,q,V,F,K,j,G,Y,z,Q,Z;let X,J,ee,et;t={...cs(this,bC),...e},X={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(bc.STORYBOARD_SRC),fullscreenElement:this.getAttribute(bc.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=vM.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(bc.NOHOTKEYS),hotKeys:this.getAttribute(bc.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(rd.TARGET_LIVE_WINDOW),streamType:vF(this.getAttribute(rd.STREAM_TYPE)),primaryColor:this.getAttribute(bc.PRIMARY_COLOR),secondaryColor:this.getAttribute(bc.SECONDARY_COLOR),accentColor:this.getAttribute(bc.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(J=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(J).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(bc.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(rd.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(bc.TITLE),videoTitle:null!=(r=this.getAttribute(bc.VIDEO_TITLE))?r:this.getAttribute(bc.TITLE),novolumepref:this.hasAttribute(bc.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(bc.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(bc.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(bc.DISABLE_PSEUDO_ENDED),maxReconnectRetries:this.maxReconnectRetries,capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},s=bt`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(X)}
    ${v3}
  </style>
  ${l=X,bt`
  <media-theme
    template="${l.themeTemplate||!1}"
    defaultstreamtype="${null!=(d=l.defaultStreamType)&&d}"
    hotkeys="${ee=l.hotKeys?`${l.hotKeys}`:"","live"===vF(l.streamType)&&(ee+=" noarrowleft noarrowright"),ee||!1}"
    nohotkeys="${l.noHotKeys||!l.hasSrc||!1}"
    noautoseektolive="${!!(null!=(u=l.streamType)&&u.includes(ie))&&0!==l.targetLiveWindow}"
    novolumepref="${l.novolumepref||!1}"
    nomutedpref="${l.nomutedpref||!1}"
    disabled="${!l.hasSrc||l.isDialogOpen}"
    audio="${null!=(c=l.audio)&&c}"
    style="${null!=(Z={"--media-primary-color":l.primaryColor,"--media-secondary-color":l.secondaryColor,"--media-accent-color":l.accentColor},et="",Object.entries(Z).forEach(([e,t])=>{null!=t&&(et+=`${vO(e)}: ${t}; `)}),h=et?et.trim():void 0)&&h}"
    defaultsubtitles="${!l.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(m=l.forwardSeekOffset)&&m}"
    backwardseekoffset="${null!=(p=l.backwardSeekOffset)&&p}"
    playbackrates="${null!=(v=l.playbackRates)&&v}"
    defaultshowremainingtime="${null!=(b=l.defaultShowRemainingTime)&&b}"
    defaultduration="${null!=(g=l.defaultDuration)&&g}"
    hideduration="${null!=(f=l.hideDuration)&&f}"
    title="${null!=(E=l.title)&&E}"
    videotitle="${null!=(y=l.videoTitle)&&y}"
    proudlydisplaymuxbadge="${null!=(_=l.proudlyDisplayMuxBadge)&&_}"
    exportparts="${bi}"
  >
    <mux-video
      slot="media"
      inert="${null!=(T=l.noHotKeys)&&T}"
      target-live-window="${null!=(k=l.targetLiveWindow)&&k}"
      stream-type="${null!=(A=vF(l.streamType))&&A}"
      crossorigin="${null!=(w=l.crossOrigin)?w:""}"
      playsinline
      autoplay="${null!=(S=l.autoplay)&&S}"
      muted="${null!=(I=l.muted)&&I}"
      loop="${null!=(C=l.loop)&&C}"
      preload="${null!=(R=l.preload)&&R}"
      debug="${null!=(L=l.debug)&&L}"
      prefer-cmcd="${null!=(M=l.preferCmcd)&&M}"
      disable-tracking="${null!=(x=l.disableTracking)&&x}"
      disable-cookies="${null!=(D=l.disableCookies)&&D}"
      prefer-playback="${null!=(O=l.preferPlayback)&&O}"
      start-time="${null!=l.startTime&&l.startTime}"
      initial-bandwidth-estimate-kbps="${null!=l.initialBandwidthEstimateKbps&&l.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=l.initialEstimateSegments&&l.initialEstimateSegments}"
      min-preload-segments="${null!=l.minPreloadSegments&&l.minPreloadSegments}"
      beacon-collection-domain="${null!=(P=l.beaconCollectionDomain)&&P}"
      player-init-time="${null!=(N=l.playerInitTime)&&N}"
      player-software-name="${null!=(U=l.playerSoftwareName)&&U}"
      player-software-version="${null!=(H=l.playerSoftwareVersion)&&H}"
      env-key="${null!=(W=l.envKey)&&W}"
      custom-domain="${null!=(B=l.customDomain)&&B}"
      src="${l.src?l.src:!!l.playbackId&&ay(l)}"
      cast-src="${l.src?l.src:!!l.playbackId&&ay(l)}"
      cast-receiver="${null!=($=l.castReceiver)&&$}"
      drm-token="${null!=(V=null==(q=l.tokens)?void 0:q.drm)&&V}"
      playback-token="${null!=(K=null==(F=l.tokens)?void 0:F.playback)&&K}"
      exportparts="video"
      disable-pseudo-ended="${null!=(j=l.disablePseudoEnded)&&j}"
      max-reconnect-retries="${null!=(G=l.maxReconnectRetries)&&G}"
      max-auto-resolution="${null!=(Y=l.maxAutoResolution)&&Y}"
      cap-rendition-to-player-size="${null!=(z=l.capRenditionToPlayerSize)&&z}"
    >
      ${l.storyboard?bt`<track label="thumbnails" default kind="metadata" src="${l.storyboard}" />`:bt``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!l.poster&&l.poster}"
        placeholdersrc="${null!=(Q=l.placeholder)&&Q}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,o=this.shadowRoot,s.renderInto(o)},bP=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(bh.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};cl(this,by,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),cs(this,by).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},bN=function(){var e,t;this.addEventListener("error",cs(this,bR)),this.addEventListener("click",cs(this,bA)),null==(e=this.mediaTheme)||e.addEventListener("close",cs(this,bw)),null==(t=this.mediaTheme)||t.addEventListener("focusin",cs(this,bS)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof t9))return e;let r=br(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},bU=function(){var e,t,i,a;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",cs(this,bk)),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",cs(this,bk))},bH=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===ie&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===ie&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(n8))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,cs(this,bf))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o);let l=()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(n8))||t;cs(this,bf)!==a&&(cl(this,bf,a),n(i,cs(this,bf)))};this.addEventListener("userinactivechange",l),cl(this,bI,()=>{var e,t;null==i||i.removeEventListener("cuechange",s),null==(e=this.textTracks)||e.removeEventListener("change",o),null==(t=this.textTracks)||t.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};var bG=e=>{throw TypeError(e)},bY=(e,t,i)=>t.has(e)||bG("Cannot "+i),bz=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends bz{});var bQ,bZ=class extends bz{},bX=class{constructor(e,t={}){let i,a,r;(i=bQ).has(this)?bG("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(this):i.set(this,void 0),a=bQ,r=null==t?void 0:t.detail,bY(this,a,"write to private field"),a.set(this,r)}get detail(){let e;return bY(this,e=bQ,"read from private field"),e.get(this)}initCustomEvent(){}};bQ=new WeakMap;var bJ={document:{createElement:function(e,t){return new bZ}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(bZ)},CustomEvent:bX,EventTarget:bz,HTMLElement:bZ,HTMLVideoElement:class extends bz{}},b0="u"<typeof window||void 0===globalThis.customElements,b1=b0?bJ:globalThis;b0&&bJ.document,b1.customElements.get("mux-player")||(b1.customElements.define("mux-player",bK),b1.MuxPlayerElement=bK);var b2=parseInt(r.default.version)>=19,b3={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function b4(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var b5=Object.prototype.hasOwnProperty,b9=(e,t,i)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!b5.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0})(t,e[i]),b8=(e,t,i)=>{e[i]=t},b6=(e,t,i,a=b8,n=b9)=>(0,r.useEffect)(()=>{let r=null==i?void 0:i.current;r&&n(r,t,e)&&a(r,t,e)},[null==i?void 0:i.current,t]),b7=(()=>{try{return"3.14.1"}catch{}return"UNKNOWN"})(),ge=(e,t,i)=>(0,r.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),gt=r.default.forwardRef(({children:e,...t},i)=>r.default.createElement("mux-player",{suppressHydrationWarning:!0,...((e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((e,[t,i])=>{let a=((e,t)=>{if(!(!b2&&"boolean"==typeof t&&!t)){let i,a;if(i=e,null!=(a=b3)&&i in a)return b3[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e}})(t,i);if(!a)return e;let r=b2||"boolean"!=typeof i?i:"";return e[a]=r,e},{})})(t),ref:i},e)),gi="mux-player-react",ga=r.default.forwardRef((e,t)=>{var i;let a=(0,r.useRef)(null),n=function(...e){return r.useCallback(function(...e){return t=>{let i=!1,a=e.map(e=>{let a=b4(e,t);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let t=0;t<a.length;t++){let i=a[t];"function"==typeof i?i():b4(e[t],null)}}}}(...e),e)}(a,t),[s]=((e,t)=>{var i;let{onAbort:a,onCanPlay:r,onCanPlayThrough:n,onEmptied:s,onLoadStart:o,onLoadedData:l,onLoadedMetadata:d,onProgress:u,onDurationChange:c,onVolumeChange:h,onRateChange:m,onResize:p,onWaiting:v,onPlay:b,onPlaying:g,onTimeUpdate:f,onPause:E,onSeeking:y,onSeeked:_,onStalled:T,onSuspend:k,onEnded:A,onError:w,onCuePointChange:S,onChapterChange:I,metadata:C,tokens:R,paused:L,playbackId:M,playbackRates:x,currentTime:D,themeProps:O,extraSourceParams:P,castCustomData:N,_hlsConfig:U,...H}=t;return b6("tokens",R,e),b6("playbackId",M,e),b6("playbackRates",x,e),b6("metadata",C,e),b6("disableCookies",null!=(i=t.disableCookies)&&i,e),b6("extraSourceParams",P,e),b6("_hlsConfig",U,e),b6("themeProps",O,e),b6("castCustomData",N,e),b6("paused",L,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&b9(e,t,i)),b6("currentTime",D,e,(e,t)=>{null!=t&&(e.currentTime=t)}),ge("abort",e,a),ge("canplay",e,r),ge("canplaythrough",e,n),ge("emptied",e,s),ge("loadstart",e,o),ge("loadeddata",e,l),ge("loadedmetadata",e,d),ge("progress",e,u),ge("durationchange",e,c),ge("volumechange",e,h),ge("ratechange",e,m),ge("resize",e,p),ge("waiting",e,v),ge("play",e,b),ge("playing",e,g),ge("timeupdate",e,f),ge("pause",e,E),ge("seeking",e,y),ge("seeked",e,_),ge("stalled",e,T),ge("suspend",e,k),ge("ended",e,A),ge("error",e,w),ge("cuepointchange",e,S),ge("chapterchange",e,I),[H]})(a,e),[o]=(0,r.useState)(null!=(i=e.playerInitTime)?i:af());return r.default.createElement(gt,{ref:n,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:gi,playerSoftwareVersion:b7,playerInitTime:o,...s})});e.s(["MaxResolution",0,{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},"MediaError",0,t9,"MinResolution",0,{noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},"RenditionOrder",0,{DESCENDING:"desc"},"default",0,ga,"generatePlayerInitTime",0,af,"playerSoftwareName",0,gi,"playerSoftwareVersion",0,b7],742033)}]);