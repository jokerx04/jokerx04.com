import{R as bn,r as gn}from"./index-Ds7qnLop.js";import{H as Yf,C as Gf}from"./hls-IROWLhY3.js";import{C as Un,M as zf}from"./mixin-BY5xW4uI.js";var Qf=Object.create,xm=Object.defineProperty,jf=Object.getOwnPropertyDescriptor,Zf=Object.getOwnPropertyNames,Xf=Object.getPrototypeOf,Jf=Object.prototype.hasOwnProperty,Om=function(t,e){return function(){return t&&(e=t(t=0)),e}},it=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}},eE=function(t,e,i,a){if(e&&typeof e=="object"||typeof e=="function")for(var r=Zf(e),n=0,s=r.length,o;n<s;n++)o=r[n],!Jf.call(t,o)&&o!==i&&xm(t,o,{get:(function(l){return e[l]}).bind(null,o),enumerable:!(a=jf(e,o))||a.enumerable});return t},tE=function(t,e,i){return i=t!=null?Qf(Xf(t)):{},eE(!t||!t.__esModule?xm(i,"default",{value:t,enumerable:!0}):i,t)};function ma(t,e){return e!=null&&typeof Symbol<"u"&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):ma(t,e)}var pa=Om(function(){pa()});function Nm(t){"@swc/helpers - typeof";return t&&typeof Symbol<"u"&&t.constructor===Symbol?"symbol":typeof t}var Pm=Om(function(){}),$m=it(function(t,e){var i=Array.prototype.slice;e.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),iE=it(function(t,e){pa(),e.exports=i;function i(a,r){if(!ma(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),aE=it(function(t,e){pa(),e.exports=i;function i(a,r){if(!ma(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),Um=it(function(t,e){e.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),Hm=it(function(t,e){e.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),Bm=it(function(t,e){e.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),rE=it(function(t,e){Pm(),e.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(h){switch(h.nodeType){case 3:return m(h.data);case 8:return"<!--"+h.data+"-->";default:return r(h)}}function r(h){var u=[],v=h.tagName;return h.namespaceURI==="http://www.w3.org/1999/xhtml"&&(v=v.toLowerCase()),u.push("<"+v+d(h)+o(h)),i.indexOf(v)>-1?u.push(" />"):(u.push(">"),h.childNodes.length?u.push.apply(u,h.childNodes.map(a)):h.textContent||h.innerText?u.push(m(h.textContent||h.innerText)):h.innerHTML&&u.push(h.innerHTML),u.push("</"+v+">")),u.join("")}function n(h,u){var v=Nm(h[u]);return u==="style"&&Object.keys(h.style).length>0?!0:h.hasOwnProperty(u)&&(v==="string"||v==="boolean"||v==="number")&&u!=="nodeName"&&u!=="className"&&u!=="tagName"&&u!=="textContent"&&u!=="innerText"&&u!=="namespaceURI"&&u!=="innerHTML"}function s(h){if(typeof h=="string")return h;var u="";return Object.keys(h).forEach(function(v){var E=h[v];v=v.replace(/[A-Z]/g,function(g){return"-"+g.toLowerCase()}),u+=v+":"+E+";"}),u}function o(h){var u=h.dataset,v=[];for(var E in u)v.push({name:"data-"+E,value:u[E]});return v.length?l(v):""}function l(h){var u=[];return h.forEach(function(v){var E=v.name,g=v.value;E==="style"&&(g=s(g)),u.push(E+'="'+p(g)+'"')}),u.length?" "+u.join(" "):""}function d(h){var u=[];for(var v in h)n(h,v)&&u.push({name:v,value:h[v]});for(var E in h._attributes)for(var g in h._attributes[E]){var y=h._attributes[E][g],T=(y.prefix?y.prefix+":":"")+g;u.push({name:T,value:y.value})}return h.className&&u.push({name:"class",value:h.className}),u.length?l(u):""}function m(h){var u="";return typeof h=="string"?u=h:h&&(u=h.toString()),u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(h){return m(h).replace(/"/g,"&quot;")}}),Wm=it(function(t,e){pa();var i=$m(),a=Um(),r=Hm(),n=Bm(),s=rE(),o="http://www.w3.org/1999/xhtml";e.exports=l;function l(d,m,p){if(!ma(this,l))return new l(d);var h=p===void 0?o:p||null;this.tagName=h===o?String(d).toUpperCase():d,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=m||null,this.namespaceURI=h,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(d){return d.parentNode&&d.parentNode.removeChild(d),this.childNodes.push(d),d.parentNode=this,d},l.prototype.replaceChild=function(d,m){d.parentNode&&d.parentNode.removeChild(d);var p=this.childNodes.indexOf(m);return m.parentNode=null,this.childNodes[p]=d,d.parentNode=this,m},l.prototype.removeChild=function(d){var m=this.childNodes.indexOf(d);return this.childNodes.splice(m,1),d.parentNode=null,d},l.prototype.insertBefore=function(d,m){d.parentNode&&d.parentNode.removeChild(d);var p=m==null?-1:this.childNodes.indexOf(m);return p>-1?this.childNodes.splice(p,0,d):this.childNodes.push(d),d.parentNode=this,d},l.prototype.setAttributeNS=function(d,m,p){var h=null,u=m,v=m.indexOf(":");if(v>-1&&(h=m.substr(0,v),u=m.substr(v+1)),this.tagName==="INPUT"&&m==="type")this.type=p;else{var E=this._attributes[d]||(this._attributes[d]={});E[u]={value:p,prefix:h}}},l.prototype.getAttributeNS=function(d,m){var p=this._attributes[d],h=p&&p[m]&&p[m].value;return this.tagName==="INPUT"&&m==="type"?this.type:typeof h!="string"?null:h},l.prototype.removeAttributeNS=function(d,m){var p=this._attributes[d];p&&delete p[m]},l.prototype.hasAttributeNS=function(d,m){var p=this._attributes[d];return!!p&&m in p},l.prototype.setAttribute=function(d,m){return this.setAttributeNS(null,d,m)},l.prototype.getAttribute=function(d){return this.getAttributeNS(null,d)},l.prototype.removeAttribute=function(d){return this.removeAttributeNS(null,d)},l.prototype.hasAttribute=function(d){return this.hasAttributeNS(null,d)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(d){var m=d.split(" "),p=[];return i(this,function(h){if(h.nodeType===1){var u=h.className||"",v=u.split(" ");m.every(function(E){return v.indexOf(E)!==-1})&&p.push(h)}}),p},l.prototype.getElementsByTagName=function(d){d=d.toLowerCase();var m=[];return i(this.childNodes,function(p){p.nodeType===1&&(d==="*"||p.tagName.toLowerCase()===d)&&m.push(p)}),m},l.prototype.contains=function(d){return i(this,function(m){return d===m})||!1}}),nE=it(function(t,e){pa();var i=Wm();e.exports=a;function a(r){if(!ma(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),sE=it(function(t,e){e.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),oE=it(function(t,e){pa();var i=$m(),a=iE(),r=aE(),n=Wm(),s=nE(),o=sE(),l=Um(),d=Hm(),m=Bm();e.exports=p;function p(){if(!ma(this,p))return new p;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var h=p.prototype;h.createTextNode=function(u){return new r(u,this)},h.createElementNS=function(u,v){var E=u===null?null:String(u);return new n(v,this,E)},h.createElement=function(u){return new n(u,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(u){return new o(u)},h.createComment=function(u){return new a(u,this)},h.getElementById=function(u){u=String(u);var v=i(this.childNodes,function(E){if(String(E.id)===u)return E});return v||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=m,h.addEventListener=d,h.dispatchEvent=l}),lE=it(function(t,e){var i=oE();e.exports=new i}),dE=it(function(t,e){var i=typeof global<"u"?global:typeof window<"u"?window:{},a=lE(),r;typeof document<"u"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),e.exports=r});function uE(t){if(Array.isArray(t))return t}function cE(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(t);!(r=(s=i.next()).done)&&(a.push(s.value),!(e&&a.length===e));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function hE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kl(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function Fm(t,e){if(t){if(typeof t=="string")return Kl(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Kl(t,e)}}function Ei(t,e){return uE(t)||cE(t,e)||Fm(t,e)||hE()}var mE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:{},V=mE,pE={now:function(){var t=V.performance,e=t&&t.timing,i=e&&e.navigationStart,a=typeof i=="number"&&typeof t.now=="function"?i+t.now():Date.now();return Math.round(a)}},Me=pE,yn=function(){var t,e,i;if(typeof((t=V.crypto)===null||t===void 0?void 0:t.getRandomValues)=="function"){i=new Uint8Array(32),V.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var d=l==="x"?i[n]:i[n]&3|8;return n++,d.toString(16)});var s=Me.now(),o=s?.toString(16).substring(3);return o?e.substring(0,28)+o:e},Km=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},Et=function(t){if(t&&typeof t.nodeName<"u")return t.muxId||(t.muxId=Km()),t.muxId;var e;try{e=document.querySelector(t)}catch{}return e&&!e.muxId&&(e.muxId=t),e?.muxId||t},Eo=function(t){var e;t&&typeof t.nodeName<"u"?(e=t,t=Et(e)):e=document.querySelector(t);var i=e&&e.nodeName?e.nodeName.toLowerCase():"";return[e,t,i]};function vE(t){if(Array.isArray(t))return Kl(t)}function fE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function EE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _t(t){return vE(t)||fE(t)||Fm(t)||EE()}var ia={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},_E=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=[console,t],l=(i=console.trace).bind.apply(i,_t(o)),d=(a=console.info).bind.apply(a,_t(o)),m=(r=console.debug).bind.apply(r,_t(o)),p=(n=console.warn).bind.apply(n,_t(o)),h=(s=console.error).bind.apply(s,_t(o)),u=e;return{trace:function(){for(var v=arguments.length,E=new Array(v),g=0;g<v;g++)E[g]=arguments[g];if(!(u>ia.TRACE))return l.apply(void 0,_t(E))},debug:function(){for(var v=arguments.length,E=new Array(v),g=0;g<v;g++)E[g]=arguments[g];if(!(u>ia.DEBUG))return m.apply(void 0,_t(E))},info:function(){for(var v=arguments.length,E=new Array(v),g=0;g<v;g++)E[g]=arguments[g];if(!(u>ia.INFO))return d.apply(void 0,_t(E))},warn:function(){for(var v=arguments.length,E=new Array(v),g=0;g<v;g++)E[g]=arguments[g];if(!(u>ia.WARN))return p.apply(void 0,_t(E))},error:function(){for(var v=arguments.length,E=new Array(v),g=0;g<v;g++)E[g]=arguments[g];if(!(u>ia.ERROR))return h.apply(void 0,_t(E))},get level(){return u},set level(v){v!==this.level&&(u=v??e)}}},ae=_E("[mux]");function Vl(){var t=V.doNotTrack||V.navigator&&V.navigator.doNotTrack;return t==="1"}function $(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}pa();function Ee(t,e){if(!ma(t,e))throw new TypeError("Cannot call a class as a function")}function Zc(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ct(t,e,i){return e&&Zc(t.prototype,e),i&&Zc(t,i),t}function I(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function dr(t){return dr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},dr(t)}function bE(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&(t=dr(t),t!==null););return t}function rs(t,e,i){return typeof Reflect<"u"&&Reflect.get?rs=Reflect.get:rs=function(a,r,n){var s=bE(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},rs(t,e,i||t)}function ql(t,e){return ql=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},ql(t,e)}function gE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ql(t,e)}function yE(t,e){if(t==null)return{};var i={},a=Object.keys(t),r,n;for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function TE(t,e){if(t==null)return{};var i=yE(t,e),a,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}function AE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Pm();function kE(t,e){return e&&(Nm(e)==="object"||typeof e=="function")?e:$(t)}function wE(t){var e=AE();return function(){var i=dr(t),a;if(e){var r=dr(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return kE(this,a)}}var wt=function(t){return Tn(t)[0]},Tn=function(t){if(typeof t!="string"||t==="")return["localhost"];var e=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,i=t.match(e)||[],a=i[4],r;return a&&(r=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,r]},SE={exists:function(){var t=V.performance,e=t&&t.timing;return e!==void 0},domContentLoadedEventEnd:function(){var t=V.performance,e=t&&t.timing;return e&&e.domContentLoadedEventEnd},navigationStart:function(){var t=V.performance,e=t&&t.timing;return e&&e.navigationStart}},_o=SE;function Ie(t,e,i){i=i===void 0?1:i,t[e]=t[e]||0,t[e]+=i}function An(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){I(t,r,i[r])})}return t}function IE(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i.push.apply(i,a)}return i}function uu(t,e){return e=e??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):IE(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}),t}var RE=["x-cdn","content-type"],Vm=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],LE=RE.concat(Vm);function cu(t){t=t||"";var e={},i=t.trim().split(/[\r\n]+/);return i.forEach(function(a){if(a){var r=a.split(": "),n=r.shift();n&&(LE.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(e[n]=r.join(": "))}}),e}function bo(t){if(t){var e=Vm.find(function(i){return t[i]!==void 0});return e?t[e]:void 0}}var CE=function(t){var e={};for(var i in t){var a=t[i],r=a["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=a["DATA-ID"].replace("io.litix.data.","");e[n]=a.VALUE}}return e},qm=CE,Hn=function(t){if(!t)return{};var e=_o.navigationStart(),i=t.loading,a=i?i.start:t.trequest,r=i?i.first:t.tfirst,n=i?i.end:t.tload;return{bytesLoaded:t.total,requestStart:Math.round(e+a),responseStart:Math.round(e+r),responseEnd:Math.round(e+n)}},Ar=function(t){if(!(!t||typeof t.getAllResponseHeaders!="function"))return cu(t.getAllResponseHeaders())},DE=function(t,e,i){var a=arguments.length>4?arguments[4]:void 0,r=t.log,n=t.utils.secondsToMs,s=function(g){var y=parseInt(a.version),T;return y===1&&g.programDateTime!==null&&(T=g.programDateTime),y===0&&g.pdt!==null&&(T=g.pdt),T};if(!_o.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(g,y){return t.emit(e,g,y)},l=function(g,y){var T=y.levels,_=y.audioTracks,k=y.url,C=y.stats,M=y.networkDetails,S=y.sessionData,U={},q={};T.forEach(function(_e,Be){U[Be]={width:_e.width,height:_e.height,bitrate:_e.bitrate,attrs:_e.attrs}}),_.forEach(function(_e,Be){q[Be]={name:_e.name,language:_e.lang,bitrate:_e.bitrate}});var W=Hn(C),B=W.bytesLoaded,Pe=W.requestStart,Qe=W.responseStart,je=W.responseEnd;o("requestcompleted",uu(An({},qm(S)),{request_event_type:g,request_bytes_loaded:B,request_start:Pe,request_response_start:Qe,request_response_end:je,request_type:"manifest",request_hostname:wt(k),request_response_headers:Ar(M),request_rendition_lists:{media:U,audio:q,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(g,y){var T=y.details,_=y.level,k=y.networkDetails,C=y.stats,M=Hn(C),S=M.bytesLoaded,U=M.requestStart,q=M.responseStart,W=M.responseEnd,B=T.fragments[T.fragments.length-1],Pe=s(B)+n(B.duration);o("requestcompleted",{request_event_type:g,request_bytes_loaded:S,request_start:U,request_response_start:q,request_response_end:W,request_current_level:_,request_type:"manifest",request_hostname:wt(T.url),request_response_headers:Ar(k),video_holdback:T.holdBack&&n(T.holdBack),video_part_holdback:T.partHoldBack&&n(T.partHoldBack),video_part_target_duration:T.partTarget&&n(T.partTarget),video_target_duration:T.targetduration&&n(T.targetduration),video_source_is_live:T.live,player_manifest_newest_program_time:isNaN(Pe)?void 0:Pe})};i.on(a.Events.LEVEL_LOADED,d);var m=function(g,y){var T=y.details,_=y.networkDetails,k=y.stats,C=Hn(k),M=C.bytesLoaded,S=C.requestStart,U=C.responseStart,q=C.responseEnd;o("requestcompleted",{request_event_type:g,request_bytes_loaded:M,request_start:S,request_response_start:U,request_response_end:q,request_type:"manifest",request_hostname:wt(T.url),request_response_headers:Ar(_)})};i.on(a.Events.AUDIO_TRACK_LOADED,m);var p=function(g,y){var T=y.stats,_=y.networkDetails,k=y.frag;T=T||k.stats;var C=Hn(T),M=C.bytesLoaded,S=C.requestStart,U=C.responseStart,q=C.responseEnd,W=_?Ar(_):void 0,B={request_event_type:g,request_bytes_loaded:M,request_start:S,request_response_start:U,request_response_end:q,request_hostname:_?wt(_.responseURL):void 0,request_id:W?bo(W):void 0,request_response_headers:W,request_media_duration:k.duration,request_url:_?.responseURL};k.type==="main"?(B.request_type="media",B.request_current_level=k.level,B.request_video_width=(i.levels[k.level]||{}).width,B.request_video_height=(i.levels[k.level]||{}).height,B.request_labeled_bitrate=(i.levels[k.level]||{}).bitrate):B.request_type=k.type,o("requestcompleted",B)};i.on(a.Events.FRAG_LOADED,p);var h=function(g,y){var T=y.frag,_=T.start,k=s(T),C={currentFragmentPDT:k,currentFragmentStart:n(_)};o("fragmentchange",C)};i.on(a.Events.FRAG_CHANGED,h);var u=function(g,y){var T=y.type,_=y.details,k=y.response,C=y.fatal,M=y.frag,S=y.networkDetails,U=M?.url||y.url||"",q=S?Ar(S):void 0;if((_===a.ErrorDetails.MANIFEST_LOAD_ERROR||_===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||_===a.ErrorDetails.FRAG_LOAD_ERROR||_===a.ErrorDetails.FRAG_LOAD_TIMEOUT||_===a.ErrorDetails.LEVEL_LOAD_ERROR||_===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||_===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||_===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||_===a.ErrorDetails.SUBTITLE_LOAD_ERROR||_===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||_===a.ErrorDetails.KEY_LOAD_ERROR||_===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:_,request_url:U,request_hostname:wt(U),request_id:q?bo(q):void 0,request_type:_===a.ErrorDetails.FRAG_LOAD_ERROR||_===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":_===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||_===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":_===a.ErrorDetails.SUBTITLE_LOAD_ERROR||_===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":_===a.ErrorDetails.KEY_LOAD_ERROR||_===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:k?.code,request_error_text:k?.text}),C){var W,B="".concat(U?"url: ".concat(U,`
`):"")+"".concat(k&&(k.code||k.text)?"response: ".concat(k.code,", ").concat(k.text,`
`):"")+"".concat(y.reason?"failure reason: ".concat(y.reason,`
`):"")+"".concat(y.level?"level: ".concat(y.level,`
`):"")+"".concat(y.parent?"parent stream controller: ".concat(y.parent,`
`):"")+"".concat(y.buffer?"buffer length: ".concat(y.buffer,`
`):"")+"".concat(y.error?"error: ".concat(y.error,`
`):"")+"".concat(y.event?"event: ".concat(y.event,`
`):"")+"".concat(y.err?"error message: ".concat((W=y.err)===null||W===void 0?void 0:W.message,`
`):"");o("error",{player_error_code:T,player_error_message:_,player_error_context:B})}};i.on(a.Events.ERROR,u);var v=function(g,y){var T=y.frag,_=T&&T._url||"";o("requestcanceled",{request_event_type:g,request_url:_,request_type:"media",request_hostname:wt(_)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var E=function(g,y){var T=y.level,_=i.levels[T];if(_&&_.attrs&&_.attrs.BANDWIDTH){var k=_.attrs.BANDWIDTH,C,M=parseFloat(_.attrs["FRAME-RATE"]);isNaN(M)||(C=M),k?o("renditionchange",{video_source_fps:C,video_source_bitrate:k,video_source_width:_.width,video_source_height:_.height,video_source_rendition_name:_.name,video_source_codec:_?.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,E),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,m),i.off(a.Events.FRAG_LOADED,p),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,u),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,E),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},ME=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},Xc=function(t,e){if(!t||!t.requestEndDate)return{};var i=wt(t.url),a=t.url,r=t.bytesLoaded,n=new Date(t.requestStartDate).getTime(),s=new Date(t.firstByteDate).getTime(),o=new Date(t.requestEndDate).getTime(),l=isNaN(t.duration)?0:t.duration,d=typeof e.getMetricsFor=="function"?e.getMetricsFor(t.mediaType).HttpList:e.getDashMetrics().getHttpRequests(t.mediaType),m;d.length>0&&(m=cu(d[d.length-1]._responseHeaders||""));var p=m?bo(m):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:m,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:p}},xE=function(t,e){if(typeof e.getCurrentRepresentationForType=="function"){var i=e.getCurrentRepresentationForType(t);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=e.getQualityFor(t),r=e.getCurrentTrackFor(t).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},OE=function(t){var e;return(e=t.match(/.*codecs\*?="(.*)"/))===null||e===void 0?void 0:e[1]},NE=function(t){try{var e,i,a=(i=t.getVersion)===null||i===void 0||(e=i.call(t))===null||e===void 0?void 0:e.split(".").map(function(r){return parseInt(r)})[0];return a}catch{return!1}},PE=function(t,e,i){var a=t.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=NE(i),n=function(T,_){return t.emit(e,T,_)},s=function(T){var _=T.type,k=T.data,C=(k||{}).url;n("requestcompleted",{request_event_type:_,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:wt(C),request_url:C})};i.on("manifestLoaded",s);var o={},l=function(T){if(typeof T.getRequests!="function")return null;var _=T.getRequests({state:"executed"});return _.length===0?null:_[_.length-1]},d=function(T){var _=T.type,k=T.fragmentModel,C=T.chunk,M=l(k);m({type:_,request:M,chunk:C})},m=function(T){var _=T.type,k=T.chunk,C=T.request,M=(k||{}).mediaInfo,S=M||{},U=S.type,q=S.bitrateList;q=q||[];var W={};q.forEach(function(Ze,Re){W[Re]={},W[Re].width=Ze.width,W[Re].height=Ze.height,W[Re].bitrate=Ze.bandwidth,W[Re].attrs={}}),U==="video"?o.video=W:U==="audio"?o.audio=W:o.media=W;var B=Xc(C,i),Pe=B.requestStart,Qe=B.requestResponseStart,je=B.requestResponseEnd,_e=B.requestResponseHeaders,Be=B.requestMediaDuration,Lt=B.requestHostname,We=B.requestUrl,mt=B.requestId;n("requestcompleted",{request_event_type:_,request_start:Pe,request_response_start:Qe,request_response_end:je,request_bytes_loaded:-1,request_type:U+"_init",request_response_headers:_e,request_hostname:Lt,request_id:mt,request_url:We,request_media_duration:Be,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",m):i.on("initFragmentLoaded",d);var p=function(T){var _=T.type,k=T.fragmentModel,C=T.chunk,M=l(k);h({type:_,request:M,chunk:C})},h=function(T){var _=T.type,k=T.chunk,C=T.request,M=k||{},S=M.mediaInfo,U=M.start,q=S||{},W=q.type,B=Xc(C,i),Pe=B.requestStart,Qe=B.requestResponseStart,je=B.requestResponseEnd,_e=B.requestBytesLoaded,Be=B.requestResponseHeaders,Lt=B.requestMediaDuration,We=B.requestHostname,mt=B.requestUrl,Ze=B.requestId,Re=xE(W,i),Jt=Re.currentLevel,$e=Re.renditionWidth,Fe=Re.renditionHeight,ei=Re.renditionBitrate;n("requestcompleted",{request_event_type:_,request_start:Pe,request_response_start:Qe,request_response_end:je,request_bytes_loaded:_e,request_type:W,request_response_headers:Be,request_hostname:We,request_id:Ze,request_url:mt,request_media_start_time:U,request_media_duration:Lt,request_current_level:Jt,request_labeled_bitrate:ei,request_video_width:$e,request_video_height:Fe})};r>=4?i.on("mediaFragmentLoaded",h):i.on("mediaFragmentLoaded",p);var u={video:void 0,audio:void 0,totalBitrate:void 0},v=function(){if(u.video&&typeof u.video.bitrate=="number"){if(!(u.video.width&&u.video.height)){a.warn("have bitrate info for video but missing width/height");return}var T=u.video.bitrate;if(u.audio&&typeof u.audio.bitrate=="number"&&(T+=u.audio.bitrate),T!==u.totalBitrate)return u.totalBitrate=T,{video_source_bitrate:T,video_source_height:u.video.height,video_source_width:u.video.width,video_source_codec:OE(u.video.codec)}}},E=function(T,_,k){var C=T.mediaType;if(C==="audio"||C==="video"){var M;if(typeof i.getRepresentationsByType=="function")if(T.newRepresentation)M={bitrate:T.newRepresentation.bandwidth,width:T.newRepresentation.width,height:T.newRepresentation.height,qualityIndex:T.newRepresentation.absoluteIndex};else{var S=i.getRepresentationsByType(C);if(S&&typeof T.newQuality=="number"){var U=S.find(function(W){return W.absoluteIndex===T.newQuality||W.index===T.newQuality});U&&(M={bitrate:U.bandwidth,width:U.width,height:U.height,qualityIndex:T.newQuality})}}else{if(typeof T.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",T);return}M=i.getBitrateInfoListFor(C).find(function(W){var B=W.qualityIndex;return B===T.newQuality})}if(!(M&&typeof M.bitrate=="number")){a.warn("missing bitrate info for ".concat(C));return}u[C]=uu(An({},M),{codec:i.getCurrentTrackFor(C).codec});var q=v();q&&n("renditionchange",q)}};i.on("qualityChangeRendered",E);var g=function(T){var _=T.request,k=T.mediaType;_=_||{},n("requestcanceled",{request_event_type:_.type+"_"+_.action,request_url:_.url,request_type:k,request_hostname:wt(_.url)})};i.on("fragmentLoadingAbandoned",g);var y=function(T){var _=T.error,k,C,M=(_==null||(k=_.data)===null||k===void 0?void 0:k.request)||{},S=(_==null||(C=_.data)===null||C===void 0?void 0:C.response)||{};_?.code===27&&n("requestfailed",{request_error:M.type+"_"+M.action,request_url:M.url,request_hostname:wt(M.url),request_type:M.mediaType,request_error_code:S.status,request_error_text:S.statusText});var U="".concat(M!=null&&M.url?"url: ".concat(M.url,`
`):"")+"".concat(S!=null&&S.status||S!=null&&S.statusText?"response: ".concat(S?.status,", ").concat(S?.statusText,`
`):"");n("error",{player_error_code:_?.code,player_error_message:_?.message,player_error_context:U})};i.on("error",y),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",m),i.off("mediaFragmentLoaded",h),i.off("qualityChangeRendered",E),i.off("error",y),i.off("fragmentLoadingAbandoned",g),delete i._stopMuxMonitor}},$E=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},Jc=0,UE=(function(){function t(){Ee(this,t),I(this,"_listeners",void 0)}return ct(t,[{key:"on",value:function(e,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++Jc,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],a&&(i=i.bind(a)),this._listeners[e].push(i),i}},{key:"off",value:function(e,i){var a=this._listeners&&this._listeners[e];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(e,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++Jc;var n=function(){r.off(e,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(e,n)}},{key:"emit",value:function(e,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before"+e]||[],n=this._listeners["before*"]||[],s=this._listeners[e]||[],o=this._listeners["after"+e]||[],l=function(d,m){d=d.slice(),d.forEach(function(p){p.call(a,{type:e},m)})};l(r,i),l(n,i),l(s,i),l(o,i)}}}]),t})(),HE=UE,BE=(function(){function t(e){var i=this;Ee(this,t),I(this,"_playbackHeartbeatInterval",void 0),I(this,"_playheadShouldBeProgressing",void 0),I(this,"pm",void 0),this.pm=e,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,e.on("playing",function(){i._playheadShouldBeProgressing=!0}),e.on("play",this._startPlaybackHeartbeatInterval.bind(this)),e.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),e.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),e.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("seeked",function(){e.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),e.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&e.emit("playbackheartbeat")}),e.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(V.clearInterval(i._playbackHeartbeatInterval),e.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return ct(t,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=V.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(V.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),t})(),WE=BE,FE=function t(e){var i=this;Ee(this,t),I(this,"viewErrored",void 0),e.on("viewinit",function(){i.viewErrored=!1}),e.on("error",function(a,r){try{var n=e.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(e.data.player_error_code=n.player_error_code||r.player_error_code,e.data.player_error_message=n.player_error_message||r.player_error_message,e.data.player_error_context=n.player_error_context||r.player_error_context,e.data.player_error_severity=n.player_error_severity||r.player_error_severity,e.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){e.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),e.on("aftererror",function(){var a,r,n,s,o;(a=e.data)===null||a===void 0||delete a.player_error_code,(r=e.data)===null||r===void 0||delete r.player_error_message,(n=e.data)===null||n===void 0||delete n.player_error_context,(s=e.data)===null||s===void 0||delete s.player_error_severity,(o=e.data)===null||o===void 0||delete o.player_error_business_exception})},KE=FE,VE=(function(){function t(e){Ee(this,t),I(this,"_watchTimeTrackerLastCheckedTime",void 0),I(this,"pm",void 0),this.pm=e,this._watchTimeTrackerLastCheckedTime=null,e.on("playbackheartbeat",this._updateWatchTime.bind(this)),e.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return ct(t,[{key:"_updateWatchTime",value:function(e,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),Ie(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(e,i){this._updateWatchTime(e,i),this._watchTimeTrackerLastCheckedTime=null}}]),t})(),qE=VE,YE=(function(){function t(e){var i=this;Ee(this,t),I(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),I(this,"_lastTime",void 0),I(this,"_isAdPlaying",void 0),I(this,"_callbackUpdatePlaybackTime",void 0),I(this,"pm",void 0),this.pm=e,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Me.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,e.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);e.on("playing",a),e.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};e.on("seeked",r),e.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);e.on("playbackheartbeatend",n),e.on("seeking",n),e.on("rebufferstart",n),e.on("adplaying",function(){i._isAdPlaying=!0}),e.on("adended",function(){i._isAdPlaying=!1}),e.on("adpause",function(){i._isAdPlaying=!1}),e.on("adbreakstart",function(){i._isAdPlaying=!1}),e.on("adbreakend",function(){i._isAdPlaying=!1}),e.on("adplay",function(){i._isAdPlaying=!1}),e.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Me.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return ct(t,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=Me.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,i=Me.now(),a=i-this._lastTime,r=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?r=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(r=a),r>0&&r<=1e3&&Ie(this.pm.data,"view_content_playback_time",r),this._callbackUpdatePlaybackTime!==null&&a>0&&a<=1e3&&(this._isAdPlaying&&Ie(this.pm.data,"ad_playing_time_ms_cumulative",a),Ie(this.pm.data,"view_playing_time_ms_cumulative",a)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=i}}]),t})(),GE=YE,zE=(function(){function t(e){Ee(this,t),I(this,"pm",void 0),this.pm=e;var i=this._updatePlayheadTime.bind(this);e.on("playbackheartbeat",i),e.on("playbackheartbeatend",i),e.on("timeupdate",i),e.on("destroy",function(){e.off("timeupdate",i)})}return ct(t,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),t})(),QE=zE,eh=300*1e3,jE=function t(e){if(Ee(this,t),!e.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;Ie(e.data,"view_rebuffer_duration",s),i=n.viewer_time,e.data.view_rebuffer_duration>eh&&(e.emit("viewend"),e.send("viewend"),e.mux.log.warn("Ending view after rebuffering for longer than ".concat(eh,"ms, future events will be ignored unless a programchange or videochange occurs.")))}e.data.view_watch_time>=0&&e.data.view_rebuffer_count>0&&(e.data.view_rebuffer_frequency=e.data.view_rebuffer_count/e.data.view_watch_time,e.data.view_rebuffer_percentage=e.data.view_rebuffer_duration/e.data.view_watch_time)};e.on("playbackheartbeat",function(n,s){return r(s)}),e.on("rebufferstart",function(n,s){i||(Ie(e.data,"view_rebuffer_count",1),i=s.viewer_time,e.one("rebufferend",a))}),e.on("viewinit",function(){i=void 0,e.off("rebufferend",a)})}},ZE=jE,XE=(function(){function t(e){var i=this;Ee(this,t),I(this,"_lastCheckedTime",void 0),I(this,"_lastPlayheadTime",void 0),I(this,"_lastPlayheadTimeUpdatedTime",void 0),I(this,"_rebuffering",void 0),I(this,"pm",void 0),this.pm=e,!(e.disableRebufferTracking||e.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,e.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),e.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),e.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Me.now()})}))}return ct(t,[{key:"_checkIfRebuffering",value:function(e,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),t})(),JE=XE,e_=(function(){function t(e){var i=this;Ee(this,t),I(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){var a=e.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof e.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof e.data.view_time_to_first_frame>"u"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||Me.now(),r)};e.one("playing",n),e.one("adplaying",n),e.one("viewend",function(){e.off("playing",n),e.off("adplaying",n)})}})}return ct(t,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),t})(),t_=e_,i_=function t(e){var i=this;Ee(this,t),I(this,"_lastPlayerHeight",void 0),I(this,"_lastPlayerWidth",void 0),I(this,"_lastPlayheadPosition",void 0),I(this,"_lastSourceHeight",void 0),I(this,"_lastSourceWidth",void 0),e.on("viewinit",function(){i._lastPlayheadPosition=-1});var a=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"],r=["playing","hb","renditionchange","orientationchange","playbackmodechange"];a.forEach(function(n){e.on(n,function(){if(i._lastPlayheadPosition>=0&&e.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var s=e.data.player_playhead_time-i._lastPlayheadPosition;if(s<0){i._lastPlayheadPosition=-1;return}var o=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),l=Math.max(0,o-1),d=Math.max(0,1-o);e.data.view_max_upscale_percentage=Math.max(e.data.view_max_upscale_percentage||0,l),e.data.view_max_downscale_percentage=Math.max(e.data.view_max_downscale_percentage||0,d),Ie(e.data,"view_total_content_playback_time",s),Ie(e.data,"view_total_upscaling",l*s),Ie(e.data,"view_total_downscaling",d*s)}i._lastPlayheadPosition=-1})}),r.forEach(function(n){e.on(n,function(){i._lastPlayheadPosition=e.data.player_playhead_time,i._lastPlayerWidth=e.data.player_width,i._lastPlayerHeight=e.data.player_height,i._lastSourceWidth=e.data.video_source_width,i._lastSourceHeight=e.data.video_source_height})})},a_=i_,r_=2e3,n_=function t(e){var i=this;Ee(this,t),I(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=Me.now(),s=(e.data.viewer_time||n)-(a||n);Ie(e.data,"view_seek_duration",s),e.data.view_max_seek_time=Math.max(e.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};e.on("seeking",function(n,s){if(Object.assign(e.data,s),i.isSeeking&&s.viewer_time-a<=r_){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,Ie(e.data,"view_seek_count",1),e.send("seeking")}),e.on("seeked",function(){r()}),e.on("viewend",function(){i.isSeeking&&(r(),e.send("seeked")),i.isSeeking=!1,a=-1})},s_=n_,th=function(t,e){t.push(e),t.sort(function(i,a){return i.viewer_time-a.viewer_time})},o_=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],l_=(function(){function t(e){var i=this;Ee(this,t),I(this,"_adHasPlayed",void 0),I(this,"_adRequests",void 0),I(this,"_adResponses",void 0),I(this,"_currentAdRequestNumber",void 0),I(this,"_currentAdResponseNumber",void 0),I(this,"_prerollPlayTime",void 0),I(this,"_wouldBeNewAdPlay",void 0),I(this,"isAdBreak",void 0),I(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),o_.forEach(function(r){return e.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};e.on("adbreakstart",function(){i.isAdBreak=!0}),e.on("play",a),e.on("playing",a),e.on("viewend",a),e.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),th(i._adRequests,n),Ie(e.data,"view_ad_request_count"),i.inPrerollPosition()&&(e.data.view_preroll_requested=!0,i._adHasPlayed||Ie(e.data,"view_preroll_request_count"))}),e.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),th(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&Ie(e.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),e.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,Ie(e.data,"view_ad_played_count")),i.inPrerollPosition()&&!e.data.view_preroll_played&&(e.data.view_preroll_played=!0,i._adRequests.length>0&&(e.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),e.data.view_start&&(e.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-e.data.view_start)),i._prerollPlayTime=n.viewer_time)}),e.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof e.data.view_preroll_load_time>"u"&&typeof i._prerollPlayTime<"u"&&(e.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,e.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),e.on("adclicked",function(r,n){i._wouldBeNewAdPlay||Ie(e.data,"view_ad_clicked_count")}),e.on("adskipped",function(r,n){i._wouldBeNewAdPlay||Ie(e.data,"view_ad_skipped_count")}),e.on("adended",function(){i._wouldBeNewAdPlay=!0}),e.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return ct(t,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===e)return this._adRequests[i]}},{key:"_updateAdData",value:function(e,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=Ei(Tn(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=Ei(Tn(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=i?.ad_asset_url,this.pm.data.ad_tag_url=i?.ad_tag_url,this.pm.data.ad_creative_id=i?.ad_creative_id,this.pm.data.ad_id=i?.ad_id,this.pm.data.ad_universal_id=i?.ad_universal_id,i!=null&&i.ad_type&&(this.pm.data.ad_type=i?.ad_type)}}]),t})(),d_=l_,u_=function t(e){var i=this;Ee(this,t),I(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Me.now(),e.on("before*",r)},r=function(n){var s=Me.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(e.emit("devicesleep",{viewer_time:o}),Object.assign(e.data,{viewer_time:o}),e.send("devicesleep"),e.emit("devicewake",{viewer_time:s}),Object.assign(e.data,{viewer_time:s}),e.send("devicewake"))};e.one("playbackheartbeat",a),e.on("playbackheartbeatend",function(){e.off("before*",r),e.one("playbackheartbeat",a)})},c_=u_,Ym=(function(t){return t()})(function(){var t=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function e(i){function a(r,n,s){var o;if(typeof document<"u"){if(arguments.length>1){if(s=t({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch{}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var d=document.cookie?document.cookie.split("; "):[],m=/(%[0-9A-Z]{2})+/g,p=0;p<d.length;p++){var h=d[p].split("="),u=h.slice(1).join("=");u.charAt(0)==='"'&&(u=u.slice(1,-1));try{var v=h[0].replace(m,decodeURIComponent);if(u=i.read?i.read(u,v):i(u,v)||u.replace(m,decodeURIComponent),this.json)try{u=JSON.parse(u)}catch{}if(r===v){o=u;break}r||(o[v]=u)}catch{}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",t(n,{expires:-1}))},a.withConverter=e,a}return e(function(){})}),Gm="muxData",h_=function(t){return Object.entries(t).map(function(e){var i=Ei(e,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},m_=function(t){return t.split("&").reduce(function(e,i){var a=Ei(i.split("="),2),r=a[0],n=a[1],s=+n,o=n&&s==n?s:n;return e[r]=o,e},{})},zm=function(){var t;try{t=m_(Ym.get(Gm)||"")}catch{t={}}return t},Qm=function(t){try{Ym.set(Gm,h_(t),{expires:365})}catch{}},p_=function(){var t=zm();return t.mux_viewer_id=t.mux_viewer_id||yn(),t.msn=t.msn||Math.random(),Qm(t),{mux_viewer_id:t.mux_viewer_id,mux_sample_number:t.msn}},v_=function(){var t=zm(),e=Me.now();return t.session_start&&(t.sst=t.session_start,delete t.session_start),t.session_id&&(t.sid=t.session_id,delete t.session_id),t.session_expires&&(t.sex=t.session_expires,delete t.session_expires),(!t.sex||t.sex<e)&&(t.sid=yn(),t.sst=e),t.sex=e+1500*1e3,Qm(t),{session_id:t.sid,session_start:t.sst,session_expires:t.sex}};function f_(t,e){var i=e.beaconCollectionDomain,a=e.beaconDomain;if(i){var r=/localhost(?::\d+)?$/.test(i)?"http://":"https://";return r+i}t=t||"inferred";var n=a||"litix.io";return t.match(/^[a-z0-9]+$/)?"https://"+t+"."+n:"https://img.litix.io/a.gif"}var E_={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},__=jm(E_),b_={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",si:"sid",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},ih=jm(b_);function jm(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[t[i]]=i);return e}function Yl(t){var e={},i={};return Object.keys(t).forEach(function(a){var r=!1;if(t.hasOwnProperty(a)&&t[a]!==void 0){var n=a.split("_"),s=n[0],o=__[s];o||(ae.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),ih[l]?o+=ih[l]:Number.isInteger(Number(l))?o+=l:(ae.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=t[a]:e[o]=t[a]}}),Object.assign(e,i)}var g_=tE(dE()),y_=typeof document<"u"?document:g_.default,Aa=y_,T_={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},A_=56*1024,k_=["hb","requestcompleted","requestfailed","requestcanceled"],w_="https://img.litix.io",_i=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=t||w_,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},T_,e)};_i.prototype.queueEvent=function(t,e){var i=Object.assign({},e);return this._eventQueue.length<=this._options.maxQueueLength||t==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};_i.prototype.flushEvents=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(t&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};_i.prototype.destroy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,t?this._clearBeaconQueue():this.flushEvents(),V.clearTimeout(this._sendTimeout)};_i.prototype._clearBeaconQueue=function(){var t=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,e=this._eventQueue.slice(t);t>0&&Object.assign(e[e.length-1],Yl({mux_view_message:"event queue truncated"}));var i=this._createPayload(e);Zm(this._beaconUrl,i,!0,function(){})};_i.prototype._sendBeaconQueue=function(){var t=this;if(this._postInFlight){this._resendAfterPost=!0;return}var e=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(e),a=Me.now();Zm(this._beaconUrl,i,!1,function(r,n){n?(t._eventQueue=e.concat(t._eventQueue),t._failureCount+=1,ae.info("Error sending beacon: "+n)):t._failureCount=0,t._roundTripTime=Me.now()-a,t._postInFlight=!1,t._resendAfterPost&&(t._resendAfterPost=!1,t._eventQueue.length>0&&t._sendBeaconQueue())})};_i.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var t=Math.pow(2,this._failureCount-1);return t=t*Math.random(),(1+t)*this._options.baseTimeBetweenBeacons};_i.prototype._startBeaconSending=function(){var t=this;V.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=V.setTimeout(function(){t._eventQueue.length&&t._sendBeaconQueue(),t._startBeaconSending()},this._getNextBeaconTime()))};_i.prototype._createPayload=function(t){var e=this,i={transmission_timestamp:Math.round(Me.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||t}),n=a.length/1024},o=function(){return n<=e._options.maxPayloadKBSize};return s(),o()||(ae.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=t.filter(function(l){return k_.indexOf(l.e)===-1}),s()),o()||(ae.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var d in l){var m=l[d],p=50*1024;typeof m=="string"&&m.length>p&&(l[d]=m.substring(0,p))}}),s()),a};var S_=typeof Aa.exitPictureInPicture=="function"?function(t){return t.length<=A_}:function(t){return!1},Zm=function(t,e,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(t,e)){a();return}if(V.fetch){V.fetch(t,{method:"POST",body:e,headers:{"Content-Type":"text/plain"},keepalive:S_(e)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(V.XMLHttpRequest){var r=new V.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",t),r.setRequestHeader("Content-Type","text/plain"),r.send(e);return}a()},I_=_i,R_=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],L_=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],C_=["ad_id","ad_creative_id","ad_universal_id"],D_=["viewstart","error","ended","viewend"],M_=600*1e3,x_=(function(){function t(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Ee(this,t);var r,n,s,o,l,d,m,p,h,u,v,E;I(this,"mux",void 0),I(this,"envKey",void 0),I(this,"options",void 0),I(this,"eventQueue",void 0),I(this,"sampleRate",void 0),I(this,"disableCookies",void 0),I(this,"respectDoNotTrack",void 0),I(this,"previousBeaconData",void 0),I(this,"lastEventTime",void 0),I(this,"rateLimited",void 0),I(this,"pageLevelData",void 0),I(this,"viewerData",void 0),this.mux=e,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new I_(f_(this.envKey,this.options));var g;this.sampleRate=(g=this.options.sampleRate)!==null&&g!==void 0?g:1;var y;this.disableCookies=(y=this.options.disableCookies)!==null&&y!==void 0?y:!1;var T;this.respectDoNotTrack=(T=this.options.respectDoNotTrack)!==null&&T!==void 0?T:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(m=this.options.platform)===null||m===void 0||(d=m.os)===null||d===void 0?void 0:d.family,viewer_os_architecture:(h=this.options.platform)===null||h===void 0||(p=h.os)===null||p===void 0?void 0:p.architecture,viewer_os_version:(v=this.options.platform)===null||v===void 0||(u=v.os)===null||u===void 0?void 0:u.version,page_url:V==null||(E=V.location)===null||E===void 0?void 0:E.href},this.viewerData=this.disableCookies?{}:p_()}return ct(t,[{key:"send",value:function(e,i){if(!(!e||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&Vl())return ae.info("Not sending `"+e+"` because Do Not Track is enabled");if(!i||typeof i!="object")return ae.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:v_(),r=uu(An({},this.pageLevelData,i,a,this.viewerData),{event:e,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=this._deduplicateBeaconData(e,r),l=Yl(o);if(this.lastEventTime=this.mux.utils.now(),s)return ae.info("Not sending event due to sample rate restriction",e,r,l);if(this.envKey||ae.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,r,l),!this.rateLimited)if(ae.info("Sending event",e,r,l),this.rateLimited=!this.eventQueue.queueEvent(e,l),this.mux.WINDOW_UNLOADING&&e==="viewend")this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&e==="hb")this.eventQueue.flushEvents(!0);else if(D_.indexOf(e)>=0){if(e==="error"&&i.player_error_severity==="warning")return;this.eventQueue.flushEvents()}if(this.rateLimited)return r.event="eventrateexceeded",l=Yl(r),this.eventQueue.queueEvent(r.event,l),ae.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,i){var a=this,r={},n=i.view_id;if(n==="-1"||e==="viewstart"||e==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=M_)r=An({},i),n&&(this.previousBeaconData=r),n&&e==="viewend"&&(this.previousBeaconData=null);else{var s=e.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=Ei(o,2),d=l[0],m=l[1];a.previousBeaconData&&(m!==a.previousBeaconData[d]||R_.indexOf(d)>-1||a.objectHasChanged(s,d,m,a.previousBeaconData[d])||a.eventRequiresKey(e,d))&&(r[d]=m,a.previousBeaconData[d]=m)})}return r}},{key:"objectHasChanged",value:function(e,i,a,r){return!e||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(e,i){return!!(e==="renditionchange"&&i.indexOf("video_source_")===0||C_.includes(i)&&L_.includes(e)||e==="playbackmodechange"&&i.indexOf("player_playback_mode")===0)}}]),t})(),O_=function t(e){Ee(this,t);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,d=function(h,u){var v=u.request_start,E=u.request_response_start,g=u.request_response_end,y=u.request_bytes_loaded;n++;var T,_;if(E?(T=E-(v??0),_=(g??0)-E):_=(g??0)-(v??0),_>0&&y&&y>0){var k=y/_*8e3;s++,a+=y,r+=_,e.data.view_min_request_throughput=Math.min(e.data.view_min_request_throughput||1/0,k),e.data.view_average_request_throughput=a/r*8e3,e.data.view_request_count=n,T>0&&(i+=T,e.data.view_max_request_latency=Math.max(e.data.view_max_request_latency||0,T),e.data.view_average_request_latency=i/s)}},m=function(h,u){n++,o++,e.data.view_request_count=n,e.data.view_request_failed_count=o},p=function(h,u){n++,l++,e.data.view_request_count=n,e.data.view_request_canceled_count=l};e.on("requestcompleted",d),e.on("requestfailed",m),e.on("requestcanceled",p)},N_=O_,P_=3600*1e3,$_=function t(e){var i=this;Ee(this,t),I(this,"_lastEventTime",void 0),e.on("before*",function(a,r){var n=r.viewer_time,s=Me.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>P_){var l=Object.keys(e.data).reduce(function(m,p){return p.indexOf("video_")===0?Object.assign(m,I({},p,e.data[p])):m},{});e.mux.log.info("Received event after at least an hour inactivity, creating a new view");var d=e.playbackHeartbeat._playheadShouldBeProgressing;e._resetView(Object.assign({viewer_time:n},l)),e.playbackHeartbeat._playheadShouldBeProgressing=d,e.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(e.emit("play",{viewer_time:n}),a.type!=="playing"&&e.emit("playing",{viewer_time:n}))}})},U_=$_,H_=function t(e){Ee(this,t);var i=function(o){var l=B_(o),d=W_(o);if(l!=null&&!ah(l,n)&&s<=d){n=l,s=d;var m={video_cdn:l};e.emit("cdnchange",m)}},a=null,r=null,n=null,s=0;e.on("viewinit",function(){a=null,r=null,n=null,s=0}),e.on("beforecdnchange",function(o,l){var d=l?.video_cdn;d&&(typeof l.video_previous_cdn>"u"||l.video_previous_cdn===null)&&(ah(d,r)?l.video_previous_cdn=a??void 0:(l.video_previous_cdn=r??void 0,a=r,r=d))}),e.on("requestcompleted",function(o,l){i(l)})};function ah(t,e){return t?.toLowerCase()===e?.toLowerCase()}function B_(t){var e;return t!=null&&t.request_type&&(t.request_type==="media"||t.request_type==="video")&&!((e=t.request_response_headers)===null||e===void 0)&&e["x-cdn"]?t.request_response_headers["x-cdn"]:t!=null&&t.video_cdn?t.video_cdn:null}function W_(t){return t!=null&&t.request_start?t.request_start:t!=null&&t.viewer_time?t.viewer_time:Date.now()}var F_=H_,K_=function(t){try{return JSON.parse(t),!0}catch{return!1}},V_=function t(e){var i=this;Ee(this,t),I(this,"_emittingAutomaticEvent",!1),I(this,"_hasInitialized",!1),I(this,"_currentMode","standard"),e.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=e.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,e.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),e.on("viewend",function(){i._hasInitialized=!1}),e.on("playbackmodechange",function(a,r){i._emittingAutomaticEvent||(r.player_playback_mode_data?K_(r.player_playback_mode_data)||(e.mux.log.warn("Invalid JSON string for player_playback_mode_data"),r.player_playback_mode_data="{}"):r.player_playback_mode_data="{}",e.data.player_playback_mode_data=r.player_playback_mode_data,e.data.player_playback_mode=r.player_playback_mode,i._currentMode=r.player_playback_mode)})},q_=V_,Y_=(function(){function t(e){Ee(this,t),I(this,"pm",void 0),I(this,"_currentRangeStart",void 0),I(this,"_lastPlayheadTime",void 0),this.pm=e,this._currentRangeStart=null,this._lastPlayheadTime=null,e.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),e.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return ct(t,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var i=this.pm.data.player_playhead_time||0;e[e.length-1][1]=i}}},{key:"_updatePlaybackRange",value:function(){var e,i=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&!((e=this.pm.adTracker)===null||e===void 0)&&e.isAdBreak&&this._lastPlayheadTime!==null&&i<this._lastPlayheadTime)){if(this._lastPlayheadTime!==null&&this._currentRangeStart!==null){var a=Math.abs(i-this._lastPlayheadTime);if(a>1e3){var r=this.pm.data.video_playback_ranges;r&&r.length>0&&(r[r.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}}if(this._currentRangeStart===null){var n=this.pm.data.video_playback_ranges||[];n.length>0&&n[n.length-1][1]===i?this._currentRangeStart=n[n.length-1][0]:(this._currentRangeStart=i,n.push([i,i])),this.pm.data.video_playback_ranges=n}else this._updateLastRangeEnd();this._lastPlayheadTime=i}}},{key:"_endPlaybackRange",value:function(){this._currentRangeStart!==null&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),t})(),G_=Y_,Ft=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),z_=function(t){if(!t)return Ft.UNKNOWN;switch(t){case"cellular":case"wimax":return Ft.CELLULAR;case"wifi":return Ft.WIFI;case"ethernet":return Ft.WIRED;case"none":return Ft.NO_CONNECTION;case"bluetooth":case"other":return Ft.OTHER;case"unknown":return Ft.UNKNOWN;default:return Ft.OTHER}},Q_=function(t){return typeof t=="object"&&"connection"in t&&typeof t.connection=="object"},j_=(function(){function t(e){var i=this;Ee(this,t),I(this,"pm",void 0),I(this,"lastType",void 0),I(this,"lastLowDataMode",void 0),this.pm=e,this.pm.one("viewinit",function(){var a,r=i.emit.bind(i);r(),V.addEventListener("online",r),V.addEventListener("offline",r),(a=t.connection)===null||a===void 0||a.addEventListener("change",r),i.pm.on("destroy",function(){var n;(n=t.connection)===null||n===void 0||n.removeEventListener("change",r),V.removeEventListener("online",r),V.removeEventListener("offline",r)})})}return ct(t,[{key:"type",get:function(){var e,i;return((e=V.navigator)===null||e===void 0?void 0:e.onLine)===!1?Ft.NO_CONNECTION:!((i=t.connection)===null||i===void 0)&&i.type?z_(t.connection.type):Ft.UNKNOWN}},{key:"lowDataMode",get:function(){var e;return(e=t.connection)===null||e===void 0?void 0:e.saveData}},{key:"emit",value:function(){var e=this.type,i=this.lowDataMode;e===this.lastType&&i===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=i,this.pm.emit("networkchange",An({viewer_connection_type:e},i!==void 0&&{viewer_connection_low_data_mode:i})))}}],[{key:"connection",get:function(){return Q_(V.navigator)?V.navigator.connection:null}}]),t})(),Z_=j_,X_=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],J_=new Set(["requestcompleted","requestfailed","requestcanceled"]),eb=(function(t){gE(i,t);var e=wE(i);function i(a,r,n){Ee(this,i);var s;s=e.call(this),I($(s),"pageLoadEndTime",void 0),I($(s),"pageLoadInitTime",void 0),I($(s),"_destroyed",void 0),I($(s),"_heartBeatTimeout",void 0),I($(s),"adTracker",void 0),I($(s),"dashjs",void 0),I($(s),"data",void 0),I($(s),"disablePlayheadRebufferTracking",void 0),I($(s),"disableRebufferTracking",void 0),I($(s),"disableAdPlaybackRangeFiltering",void 0),I($(s),"errorTracker",void 0),I($(s),"errorTranslator",void 0),I($(s),"emitTranslator",void 0),I($(s),"getAdData",void 0),I($(s),"getPlayheadTime",void 0),I($(s),"getStateData",void 0),I($(s),"stateDataTranslator",void 0),I($(s),"hlsjs",void 0),I($(s),"id",void 0),I($(s),"longResumeTracker",void 0),I($(s),"minimumRebufferDuration",void 0),I($(s),"mux",void 0),I($(s),"playbackEventDispatcher",void 0),I($(s),"playbackHeartbeat",void 0),I($(s),"playbackHeartbeatTime",void 0),I($(s),"playheadTime",void 0),I($(s),"seekingTracker",void 0),I($(s),"sustainedRebufferThreshold",void 0),I($(s),"watchTimeTracker",void 0),I($(s),"currentFragmentPDT",void 0),I($(s),"currentFragmentStart",void 0),s.pageLoadInitTime=_o.navigationStart(),s.pageLoadEndTime=_o.domContentLoadedEventEnd();var o={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(h){return h},emitTranslator:function(){for(var h=arguments.length,u=new Array(h),v=0;v<h;v++)u[v]=arguments[v];return u},stateDataTranslator:function(h){return h}};s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(o,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),ae.level=n.debug?ia.DEBUG:ia.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.disableAdPlaybackRangeFiltering=n.disableAdPlaybackRangeFiltering,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new x_(a,n.data.env_key,n),s.data={player_instance_id:yn(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var l=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind($(s));if(s.on("viewinit",function(h,u){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,u),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)}),s.on("videochange",function(h,u){this._resetView(u)}),s.on("programchange",function(h,u){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(u,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(h,u){this.currentFragmentPDT=u.currentFragmentPDT,this.currentFragmentStart=u.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var d=function(){var h=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",h&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",d,!1);var m=function(h){h.persisted||s.destroy()};window.addEventListener("pagehide",m,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",d),window.removeEventListener("pagehide",m)})}s.on("playerready",function(h,u){Object.assign(this.data,u)}),X_.forEach(function(h){s.on(h,function(u,v){h.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,v),this._sanitizeData()}),s.on("after"+h,function(){(h!=="error"||this.errorTracker.viewErrored)&&this.send(h)})}),s.on("viewend",function(h,u){Object.assign(s.data,u)});var p=function(h){var u=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=u-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",p),s.longResumeTracker=new U_($(s)),s.errorTracker=new KE($(s)),new c_($(s)),s.seekingTracker=new s_($(s)),s.playheadTime=new QE($(s)),s.playbackHeartbeat=new WE($(s)),new a_($(s)),s.watchTimeTracker=new qE($(s)),new GE($(s)),new G_($(s)),s.adTracker=new d_($(s)),new JE($(s)),new ZE($(s)),new t_($(s)),new N_($(s)),new F_($(s)),new q_($(s)),new Z_($(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return ct(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=rs(dr(i.prototype),"emit",this)).call.apply(n,[this].concat(_t(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(d){r[d]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=Ei(Tn(r.video_source_url),2),o=s[0],l=s[1];r.video_source_domain=l,r.video_source_hostname=o}delete r.ad_request_id,r.video_playback_ranges&&(r.video_playback_range=JSON.stringify(r.video_playback_ranges.filter(function(d){return d[0]!==d[1]}).map(function(d){return"".concat(d[0],":").concat(d[1])})),delete r.video_playback_ranges),this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,J_.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a,r=this.getStateData();if(typeof this.stateDataTranslator=="function")try{r=this.stateDataTranslator(r)}catch(s){this.mux.log.warn("Exception in stateDataTranslator translator callback.",s)}if(!((a=this.data)===null||a===void 0)&&a.video_cdn&&r!=null&&r.video_cdn){r.video_cdn;var n=TE(r,["video_cdn"]);r=n}Object.assign(this.data,r),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"];r.forEach(function(s){var o=parseInt(a.data[s],10);a.data[s]=isNaN(o)?void 0:o});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(a.data[s]){var o=a.data[s].toLowerCase();(o.indexOf("data:")===0||o.indexOf("blob:")===0)&&(a.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=yn(),n=function(){r===a.data.view_id&&Ie(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,DE(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(ME(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,PE(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&($E(this.dashjs),this.dashjs=void 0)}}]),i})(HE),tb=eb;function Al(){return Aa&&!!(Aa.fullscreenElement||Aa.webkitFullscreenElement||Aa.mozFullScreenElement||Aa.msFullscreenElement)}var ib=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],ab={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function rb(t,e,i){var a=Ei(Eo(e),3),r=a[0],n=a[1],s=a[2],o=t.log,l=t.utils.getComputedStyle,d=t.utils.secondsToMs,m={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners"));var p={getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var u,v,E,g=((u=(v=this).getPlayheadTime)===null||u===void 0?void 0:u.call(v))||d(r.currentTime),y=this.hlsjs&&this.hlsjs.url,T=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),_={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:Al(),video_poster_url:r.poster,video_source_url:y||T||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(E=r.getVideoPlaybackQuality)===null||E===void 0?void 0:E.call(r).droppedVideoFrames};if(r.getStartDate&&g>0){var k=r.getStartDate();if(k&&typeof k.getTime=="function"&&k.getTime()){var C=k.getTime();if(_.player_program_time=C+g,r.seekable.length>0){var M=C+r.seekable.end(r.seekable.length-1);_.player_live_edge_program_time=M}}}return _}};i=Object.assign(m,i,p),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:t.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(u,v){t.emit(n,u,v)},r.mux.updateData=function(u){r.mux.emit("hb",u)};var h=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(u){r.removeEventListener(u,r.mux.listeners[u],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=h,r.mux.swapElement=h,r.mux.emit=h,r.mux.addHLSJS=h,r.mux.addDashJS=h,r.mux.removeHLSJS=h,r.mux.removeDashJS=h,r.mux.updateData=h,r.mux.setEmitTranslator=h,r.mux.setStateDataTranslator=h,r.mux.setGetPlayheadTime=h,r.mux.deleted=!0,t.emit(n,"destroy")},r.mux.swapElement=function(u){var v=Ei(Eo(u),3),E=v[0],g=v[1],y=v[2];if(E){if(y!=="video"&&y!=="audio")return t.log.error("The element of `"+g+"` was not a media element.")}else return t.log.error("No element was found with the `"+g+"` query selector.");E.muxId=r.muxId,delete r.muxId,E.mux=E.mux||{},E.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(E.mux.listeners).forEach(function(T){r.removeEventListener(T,E.mux.listeners[T],!1),E.addEventListener(T,E.mux.listeners[T],!1)}),E.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,E.mux.swapElement=r.mux.swapElement,E.mux.destroy=r.mux.destroy,delete r.mux,r=E},r.mux.addHLSJS=function(u){t.addHLSJS(n,u)},r.mux.addDashJS=function(u){t.addDashJS(n,u)},r.mux.removeHLSJS=function(){t.removeHLSJS(n)},r.mux.removeDashJS=function(){t.removeDashJS(n)},r.mux.setEmitTranslator=function(u){t.setEmitTranslator(n,u)},r.mux.setStateDataTranslator=function(u){t.setStateDataTranslator(n,u)},r.mux.setGetPlayheadTime=function(u){u||(u=i.getPlayheadTime),t.setGetPlayheadTime(n,u)},t.init(n,i),t.emit(n,"playerready"),r.paused||(t.emit(n,"play"),r.readyState>2&&t.emit(n,"playing")),r.mux.listeners={},ib.forEach(function(u){u==="error"&&!i.automaticErrorTracking||(r.mux.listeners[u]=function(){var v={};if(u==="error"){if(!r.error||r.error.code===1)return;v.player_error_code=r.error.code,v.player_error_message=ab[r.error.code]||r.error.message}t.emit(n,u,v)},r.addEventListener(u,r.mux.listeners[u],!1))}),r.mux.listeners.enterpictureinpicture=function(){t.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var u=Al()?"fullscreen":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:u,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var u=Al(),v=document.fullscreenElement;if(u&&(v===r||v!=null&&v.contains(r)))t.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!u){var E=document.pictureInPictureElement===r,g=E?"pip":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:g,player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}function nb(t,e,i,a){var r=a;if(t&&typeof t[e]=="function")try{r=t[e].apply(t,i)}catch(n){ae.info("safeCall error",n)}return r}var ka;V&&V.WeakMap&&(ka=new WeakMap);function sb(t,e){if(!t||!e||!V||typeof V.getComputedStyle!="function")return"";var i;return ka&&ka.has(t)&&(i=ka.get(t)),i||(i=V.getComputedStyle(t,null),ka&&ka.set(t,i)),i.getPropertyValue(e)}function ob(t){return Math.floor(t*1e3)}var qi={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},Jo=function(t){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(t),this.manifest};Jo.prototype.process=function(t){var e;for(this.buffer+=t,e=this.buffer.indexOf(`
`);e>-1;e=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)};Jo.prototype.processLine=function(t){var e=t.indexOf(":"),i=cb(t,e),a=i[0],r=i.length===2?hu(i[1]):void 0;if(a[0]!=="#")this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case qi.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case qi.PART_INF:{kl(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case qi.SERVER_CONTROL:{kl(this.manifest,i),this.setHoldBack();break}case qi.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case qi.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case qi.VERSION:{kl(this.manifest,i);break}case qi.SESSION_DATA:{var o=hb(i[1]),l=qm(o);Object.assign(this.manifest.sessionData,l)}}};Jo.prototype.setHoldBack=function(){var t=this.manifest,e=t.serverControl,i=t.targetDuration,a=t.partTargetDuration;if(e){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!e.hasOwnProperty(r)&&(e[r]=s),s&&e[r]<s&&(e[r]=s),a&&!e.hasOwnProperty(n)&&(e[n]=a*3),a&&e[n]<o&&(e[n]=o)}};var kl=function(t,e){var i=Xm(e[0].replace("#EXT-X-","")),a;ub(e[1])?(a={},a=Object.assign(db(e[1]),a)):a=hu(e[1]),t[i]=a},Xm=function(t){return t.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},hu=function(t){if(t.toLowerCase()==="yes"||t.toLowerCase()==="no")return t.toLowerCase()==="yes";var e=t.indexOf(":")!==-1?t:parseFloat(t);return isNaN(e)?t:e},lb=function(t){var e={},i=t.split("=");if(i.length>1){var a=Xm(i[0]);e[a]=hu(i[1])}return e},db=function(t){for(var e=t.split(","),i={},a=0;e.length>a;a++){var r=e[a],n=lb(r);i=Object.assign(n,i)}return i},ub=function(t){return t.indexOf("=")>-1},cb=function(t,e){return e===-1?[t]:[t.substring(0,e),t.substring(e+1)]},hb=function(t){var e={};if(t){var i=t.search(","),a=t.slice(0,i),r=t.slice(i+1),n=[a,r];return n.forEach(function(s,o){for(var l=s.replace(/['"]+/g,"").split("="),d=0;d<l.length;d++)l[d]==="DATA-ID"&&(e["DATA-ID"]=l[1-d]),l[d]==="VALUE"&&(e.VALUE=l[1-d])}),{data:e}}},mb=Jo,pb={safeCall:nb,safeIncrement:Ie,getComputedStyle:sb,secondsToMs:ob,assign:Object.assign,headersStringToObject:cu,cdnHeadersToRequestId:bo,extractHostnameAndDomain:Tn,extractHostname:wt,manifestParser:mb,generateShortID:Km,generateUUID:yn,now:Me.now,findMediaElement:Eo},vb=pb,fb={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},Eb=fb,_b="mux-embed",bb="5.18.2",gb="2.1",ge={},Hi=function(t){var e=arguments;typeof t=="string"?Hi.hasOwnProperty(t)?V.setTimeout(function(){e=Array.prototype.splice.call(e,1),Hi[t].apply(null,e)},0):ae.warn("`"+t+"` is an unknown task"):typeof t=="function"?V.setTimeout(function(){t(Hi)},0):ae.warn("`"+t+"` is invalid.")},yb={loaded:Me.now(),NAME:_b,VERSION:bb,API_VERSION:gb,PLAYER_TRACKED:!1,monitor:function(t,e){return rb(Hi,t,e)},destroyMonitor:function(t){var e=Ei(Eo(t),1),i=e[0];i&&i.mux&&typeof i.mux.destroy=="function"?i.mux.destroy():ae.error("A video element monitor for `"+t+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(t,e){var i=Et(t);ge[i]?ge[i].addHLSJS(e):ae.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(t,e){var i=Et(t);ge[i]?ge[i].addDashJS(e):ae.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(t){var e=Et(t);ge[e]?ge[e].removeHLSJS():ae.error("A monitor for `"+e+"` has not been initialized.")},removeDashJS:function(t){var e=Et(t);ge[e]?ge[e].removeDashJS():ae.error("A monitor for `"+e+"` has not been initialized.")},init:function(t,e){Vl()&&e&&e.respectDoNotTrack&&ae.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=Et(t);ge[i]=new tb(Hi,i,e)},emit:function(t,e,i){var a=Et(t);ge[a]?(ge[a].emit(e,i),e==="destroy"&&delete ge[a]):ae.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(t,e){var i=Et(t);ge[i]?ge[i].emit("hb",e):ae.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(t,e){var i=Et(t);ge[i]?ge[i].emitTranslator=e:ae.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(t,e){var i=Et(t);ge[i]?ge[i].stateDataTranslator=e:ae.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(t,e){var i=Et(t);ge[i]?ge[i].getPlayheadTime=e:ae.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:Vl,log:ae,utils:vb,events:Eb,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(Hi,yb);typeof V<"u"&&typeof V.addEventListener=="function"&&V.addEventListener("pagehide",function(t){t.persisted||(Hi.WINDOW_UNLOADING=!0)},!1);var mu=Hi;var F=Yf,Z={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},N={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_RECONNECTING:2000003,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},el=t=>t===Z.VIDEO?"playback":t,Ti=class Or extends Error{constructor(e,i=Or.MEDIA_ERR_CUSTOM,a,r){var n;super(e),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=Or.MEDIA_ERR_NETWORK&&i<=Or.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=Or.defaultMessages[this.code])!=null?n:"")}};Ti.MEDIA_ERR_ABORTED=1,Ti.MEDIA_ERR_NETWORK=2,Ti.MEDIA_ERR_DECODE=3,Ti.MEDIA_ERR_SRC_NOT_SUPPORTED=4,Ti.MEDIA_ERR_ENCRYPTED=5,Ti.MEDIA_ERR_CUSTOM=100,Ti.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var R=Ti,Tb=t=>t==null,pu=(t,e)=>Tb(e)?!1:t in e,Gl={ANY:"any",MUTED:"muted"},X={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},Gt={MSE:"mse",NATIVE:"native"},Nr={HEADER:"header",QUERY:"query",NONE:"none"},go=Object.values(Nr),pi={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},rh={HLS:pi.M3U8};[...Object.values(pi)];var Bk={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},Wk={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},Fk={DESCENDING:"desc"},Ab="en",zl={code:Ab},kb=t=>{let e=t;for(;e;){if(e.hasAttribute("lang"))return e.getAttribute("lang")||void 0;let i=e.getRootNode();e=i instanceof ShadowRoot?i.host:void 0}},wb=t=>{var e,i,a;let r=(a=(e=globalThis.navigator)==null?void 0:e.languages)!=null?a:[(i=globalThis.navigator)==null?void 0:i.language];return[kb(t),...r].filter(n=>!!n)},me=(t,e,i,a,r=t)=>{r.addEventListener(e,i,a),t.addEventListener("teardown",()=>{r.removeEventListener(e,i)},{once:!0})};function Sb(t,e,i){e&&i>e&&(i=e);for(let a=0;a<t.length;a++)if(t.start(a)<=i&&t.end(a)>=i)return!0;return!1}var vu=t=>{let e=t.indexOf("?");if(e<0)return[t];let i=t.slice(0,e),a=t.slice(e);return[i,a]},tl=t=>{let{type:e}=t;if(e){let i=e.toUpperCase();return pu(i,rh)?rh[i]:e}return Ib(t)},Jm=t=>t==="VOD"?X.ON_DEMAND:X.LIVE,ep=t=>t==="EVENT"?Number.POSITIVE_INFINITY:t==="VOD"?Number.NaN:0,Ib=t=>{let{src:e}=t;if(!e)return"";let i="";try{i=il(e).pathname}catch{console.error("Invalid url when trying to infer mime type",e)}let a=i.lastIndexOf(".");if(a<0)return Cb(t)?pi.M3U8:"";let r=i.slice(a+1).toUpperCase();return pu(r,pi)?pi[r]:""},Ql=t=>{try{return new URL(t),!1}catch{return!0}},Rb=t=>t.split(`
`).find((e,i,a)=>i>0&&a[i-1].startsWith("#EXT-X-STREAM-INF")),il=(t,e)=>{var i;if(!Ql(t))return new URL(t);let a=(i=window?.location)==null?void 0:i.href,r=e??a;return e&&Ql(e.toString())&&(r=new URL(e,a)),new URL(t,r)},Lb="mux.com",Cb=({src:t,customDomain:e=Lb})=>{let i;try{i=new URL(`${t}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${e}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},Ja=t=>{let e=(t??"").split(".")[1];if(e)try{let i=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},Db=({exp:t},e=Date.now())=>!t||t*1e3<e,Mb=({sub:t},e)=>t!==e,xb=({aud:t},e)=>!t,Ob=({aud:t},e)=>t!==e,tp="en";function x(t,e=!0){var i,a;let r=e&&(a=(i=zl)==null?void 0:i[t])!=null?a:t,n=e?zl.code:tp;return new Nb(r,n)}var Nb=class{constructor(e,i=(a=>(a=zl)!=null?a:tp)()){this.message=e,this.locale=i}format(e){return this.message.replace(/\{(\w+)\}/g,(i,a)=>{var r;return(r=e[a])!=null?r:""})}toString(){return this.message}},Pb=Object.values(Gl),nh=t=>typeof t=="boolean"||typeof t=="string"&&Pb.includes(t),$b=(t,e,i)=>{let{autoplay:a}=t,r=!1,n=!1,s=nh(a)?a:!!a,o=()=>{r||me(e,"playing",()=>{r=!0},{once:!0})};if(o(),me(e,"loadstart",()=>{r=!1,o(),wl(e,s)},{once:!0}),me(e,"loadstart",()=>{i||(t.streamType&&t.streamType!==X.UNKNOWN?n=t.streamType===X.LIVE:n=!Number.isFinite(e.duration)),wl(e,s)},{once:!0}),i&&i.once(F.Events.LEVEL_LOADED,(l,d)=>{var m;t.streamType&&t.streamType!==X.UNKNOWN?n=t.streamType===X.LIVE:n=(m=d.details.live)!=null?m:!1}),!s){let l=()=>{!n||Number.isFinite(t.startTime)||(i!=null&&i.liveSyncPosition?e.currentTime=i.liveSyncPosition:Number.isFinite(e.seekable.end(0))&&(e.currentTime=e.seekable.end(0)))};i&&me(e,"play",()=>{e.preload==="metadata"?i.once(F.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=nh(l)?l:!!l,wl(e,s))}},wl=(t,e)=>{if(!e)return;let i=t.muted,a=()=>t.muted=i;switch(e){case Gl.ANY:t.play().catch(()=>{t.muted=!0,t.play().catch(a)});break;case Gl.MUTED:t.muted=!0,t.play().catch(a);break;default:t.play().catch(()=>{});break}},Ub=({preload:t,src:e},i,a)=>{let r=p=>{p!=null&&["","none","metadata","auto"].includes(p)?i.setAttribute("preload",p):i.removeAttribute("preload")};if(!a)return r(t),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=p=>{r(p);let h=p??i.preload;s||h==="none"||(h==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),m())},m=()=>{!n&&e&&(n=!0,a.loadSource(e))};return me(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,m()},{once:!0}),d(t),d},Hb=(t,e,i)=>{let{minPreloadSegments:a}=t;if(a==null||a<=0||!i)return;let r=0,n=!1,s=e.playbackRate||1,o=()=>{e.playbackRate!==0&&(s=e.playbackRate,e.playbackRate=0)};e.playbackRate=0,me(e,"ratechange",o);let l=(d,{frag:m})=>{n||m.type!=="main"||(r++,r>=a&&(n=!0,e.removeEventListener("ratechange",o),e.playbackRate=s))};i.on(F.Events.FRAG_BUFFERED,l),e.addEventListener("teardown",()=>{n||(n=!0,i.off(F.Events.FRAG_BUFFERED,l),e.playbackRate=s)},{once:!0})},Bb=(t,e,i)=>{let{initialEstimateSegments:a}=t;if(a==null||a<=0||!i)return;let r=0;i.on(F.Events.FRAG_BUFFERED,(n,{frag:s})=>{s.type==="main"&&(r++,r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate))})};function Wb(t,e){var i;if(!("videoTracks"in t))return;let a=new WeakMap;e.on(F.Events.MANIFEST_PARSED,function(d,m){l();let p=t.addVideoTrack("main");p.selected=!0;for(let[h,u]of m.levels.entries()){let v=p.addRendition(u.url[0],u.width,u.height,u.videoCodec,u.bitrate);a.set(u,`${h}`),v.id=`${h}`}}),e.on(F.Events.AUDIO_TRACKS_UPDATED,function(d,m){o();for(let p of m.audioTracks){let h=p.default?"main":"alternative",u=t.addAudioTrack(h,p.name,p.lang);u.id=`${p.id}`,p.default&&(u.enabled=!0)}});let r=()=>{var d;let m=+((d=[...t.audioTracks].find(h=>h.enabled))==null?void 0:d.id),p=e.audioTracks.map(h=>h.id);m!=e.audioTrack&&p.includes(m)&&(e.audioTrack=m)};t.audioTracks.addEventListener("change",r),e.on(F.Events.LEVELS_UPDATED,function(d,m){var p;let h=t.videoTracks[(p=t.videoTracks.selectedIndex)!=null?p:0];if(!h)return;let u=m.levels.map(v=>a.get(v));for(let v of t.videoRenditions)v.id&&!u.includes(v.id)&&h.removeRendition(v)});let n=d=>{let m=d.target.selectedIndex;m!=e.nextLevel&&(e.nextLevel=m)};(i=t.videoRenditions)==null||i.addEventListener("change",n);let s=()=>{for(let d of t.videoTracks)t.removeVideoTrack(d)},o=()=>{for(let d of t.audioTracks)t.removeAudioTrack(d)},l=()=>{s(),o()};e.once(F.Events.DESTROYING,()=>{var d,m;l(),(d=t.audioTracks)==null||d.removeEventListener("change",r),(m=t.videoRenditions)==null||m.removeEventListener("change",n)})}var sh=t=>t.split("-")[0],ns=({language:t})=>typeof t=="string"?t.toLowerCase():void 0;function Fb(t,e){var i,a;let r=e.toLowerCase(),n=sh(r);return(a=(i=t.find(s=>ns(s)===r))!=null?i:t.find(s=>ns(s)===n))!=null?a:t.find(s=>{let o=ns(s);return o!==void 0&&sh(o)===n})}function Kb(t,e){var i;let a=(Array.isArray(t)?t:[]).filter(r=>typeof r?.title=="string"&&r.title!=="");if(!a.length)return"";for(let r of e){let n=Fb(a,r);if(n)return n.title}return((i=a.find(r=>ns(r)==="und"))!=null?i:a[0]).title}function Vb(t,e=[]){return Array.isArray(t)?t.filter(i=>typeof i?.["start-time"]=="number").map((i,a,r)=>{var n;let s=i["start-time"],o=(n=r[a+1])==null?void 0:n["start-time"],l=typeof i.duration=="number"?s+i.duration:typeof o=="number"?o:void 0;return{startTime:s,...l!=null?{endTime:l}:{},value:Kb(i.titles,e)}}).filter(i=>i.value!==""):[]}var ip=Number.MAX_SAFE_INTEGER,Sl=t=>"time"in t?t.time:t.startTime;function qb(t,e){e.on(F.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let d=(o=s.subtitleTrack)!=null?o:s.closedCaptions,m=e.subtitleTracks.findIndex(({lang:h,name:u,type:v})=>h==d?.lang&&u===s.label&&v.toLowerCase()===s.kind),p=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${m}`;fu(t,s.kind,s.label,d?.lang,p,s.default)})});let i=()=>{if(!e.subtitleTracks.length)return;let r=Array.from(t.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=e.subtitleTracks[e.subtitleTrack],s=n?n.default?"default":`${e.subtitleTracks[e.subtitleTrack].type.toLowerCase()}${e.subtitleTrack}`:void 0;if(e.subtitleTrack<0||r?.id!==s){let o=e.subtitleTracks.findIndex(({lang:l,name:d,type:m,default:p})=>r.id==="default"&&p||l==r.language&&d===r.label&&m.toLowerCase()===r.kind);e.subtitleTrack=o}r?.id===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};t.textTracks.addEventListener("change",i),e.on(F.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=t.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(d=>{var m;(m=o.cues)!=null&&m.getCueById(d.id)||o.addCue(d)}),l&&(o.mode="disabled")}),e.once(F.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(t.textTracks).forEach(r=>{var n;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let s="track";r.kind&&(s+=`[kind="${r.kind}"]`),r.label&&(s+=`[label="${r.label}"]`);let o=t.querySelector(s),l=o?.getAttribute("src");o&&l&&(o.removeAttribute("src"),setTimeout(()=>{o.setAttribute("src",l)},0))}r.mode!=="hidden"&&(r.mode="hidden")}})};e.once(F.Events.MANIFEST_LOADED,a),e.once(F.Events.MEDIA_ATTACHED,a)}function fu(t,e,i,a,r,n){let s=document.createElement("track");return s.kind=e,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(e)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),t.append(s),s.track}function Yb(t,e){let i=Array.prototype.find.call(t.querySelectorAll("track"),a=>a.track===e);i?.remove()}function Pn(t,e,i){var a;return(a=Array.from(t.querySelectorAll("track")).find(r=>r.track.label===e&&r.track.kind===i))==null?void 0:a.track}var Il=new WeakMap;async function Eu(t,e,i){let a=Pn(t,e,i);if(a){let s=Il.get(a);return s&&await s,a}let r=fu(t,i,e);r.mode="hidden";let n=new Promise(s=>setTimeout(s,0));return Il.set(r,n),await n,Il.delete(r),r}async function Gb(t,e,i,a){let r=await Eu(t,i,a);return _u(t,r,e,a),r}function _u(t,e,i,a){e.mode!=="hidden"&&(e.mode="hidden"),[...i].sort((r,n)=>Sl(n)-Sl(r)).forEach(r=>{var n,s;let o=r.value,l=Sl(r);if("endTime"in r&&r.endTime!=null&&Number.isFinite(r.endTime))e?.addCue(new VTTCue(l,r.endTime,a==="chapters"?o:JSON.stringify(o??null)));else{let d=Array.prototype.findIndex.call(e?.cues,u=>u.startTime>=l),m=(n=e?.cues)==null?void 0:n[d],p=m?m.startTime:Number.isFinite(t.duration)&&t.duration>0?t.duration:ip,h=(s=e?.cues)==null?void 0:s[d-1];h&&(h.endTime=l),e?.addCue(new VTTCue(l,p,a==="chapters"?o:JSON.stringify(o??null)))}}),t.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}var bu="cuepoints",ap=Object.freeze({label:bu});async function rp(t,e,i=ap){return Gb(t,e,i.label,"metadata")}var jl=t=>({time:t.startTime,value:JSON.parse(t.text)});function zb(t,e={label:bu}){let i=Pn(t,e.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>jl(a)):[]}function np(t,e={label:bu}){var i,a;let r=Pn(t,e.label,"metadata");if(!((i=r?.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return jl(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return jl(s||r.activeCues[0])}async function Qb(t,e=ap){return new Promise(i=>{me(t,"loadstart",async()=>{let a=await rp(t,[],e);me(t,"cuechange",()=>{let r=np(t);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}var gu="chapters",yu=Object.freeze({label:gu}),Zl=(t,e)=>{let{duration:i}=e,a=Number.isFinite(i)&&i>0?Math.min(t.endTime,i):t.endTime>=ip?1/0:t.endTime;return{startTime:t.startTime,endTime:a,value:t.text}},Xl=new WeakSet;function sp(t){var e;Array.from((e=t.cues)!=null?e:[]).filter(i=>Xl.has(i)).forEach(i=>t.removeCue(i))}async function op(t,e,i=yu){let a=await Eu(t,i.label,"chapters");return e.length&&sp(a),_u(t,a,e,"chapters"),a}async function jb(t,e,i,a=yu){var r,n;let s=await Eu(t,a.label,"chapters");return i!=null&&i.aborted||Array.from((r=s.cues)!=null?r:[]).some(o=>!Xl.has(o))||(sp(s),_u(t,s,e,"chapters"),Array.from((n=s.cues)!=null?n:[]).forEach(o=>Xl.add(o))),s}function Zb(t,e={label:gu}){var i;let a=Pn(t,e.label,"chapters");return(i=a?.cues)!=null&&i.length?Array.from(a.cues,r=>Zl(r,t)):[]}function lp(t,e={label:gu}){var i,a;let r=Pn(t,e.label,"chapters");if(!((i=r?.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return Zl(r.activeCues[0],t);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return Zl(s||r.activeCues[0],t)}async function Xb(t,e=yu){return new Promise(i=>{me(t,"loadstart",async()=>{let a=await op(t,[],e);me(t,"cuechange",()=>{let r=lp(t);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}function Jb(t,e){if(e){let i=e.playingDate;if(i!=null)return new Date(i.getTime()-t.currentTime*1e3)}return typeof t.getStartDate=="function"?t.getStartDate():new Date(NaN)}function eg(t,e){if(e&&e.playingDate)return e.playingDate;if(typeof t.getStartDate=="function"){let i=t.getStartDate();return new Date(i.getTime()+t.currentTime*1e3)}return new Date(NaN)}var on={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},tg=t=>{if(t===Z.VIDEO)return on.VIDEO;if(t===Z.DRM)return on.DRM},ig=(t,e)=>{var i,a;let r=el(t),n=`${r}Token`;return(i=e.tokens)!=null&&i[r]?(a=e.tokens)==null?void 0:a[r]:pu(n,e)?e[n]:void 0},yo=(t,e,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,o;if(n){let y=x("Your device appears to be offline",r),T,_=R.MEDIA_ERR_NETWORK,k=new R(y,_,!1,T);return k.errorCategory=e,k.muxCode=N.NETWORK_OFFLINE,k.data=t,k}let l="status"in t?t.status:t.code,d=Date.now(),m=R.MEDIA_ERR_NETWORK;if(l===200)return;let p=el(e),h=ig(e,i),u=tg(e),[v]=vu((s=i.playbackId)!=null?s:"");if(!l||!v)return;let E=Ja(h);if(h&&!E){let y=x("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:p}),T=x("Compact JWT string: {token}",r).format({token:h}),_=new R(y,m,!0,T);return _.errorCategory=e,_.muxCode=N.NETWORK_TOKEN_MALFORMED,_.data=t,_}if(l>=500){let y=new R("",m,a??!0);return y.errorCategory=e,y.muxCode=N.NETWORK_UNKNOWN_ERROR,y}if(l===403)if(E){if(Db(E,d)){let y={timeStyle:"medium",dateStyle:"medium"},T=x("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:p}),_=x("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",y).format((o=E.exp)!=null?o:0*1e3),currentDate:new Intl.DateTimeFormat("en",y).format(d)}),k=new R(T,m,!0,_);return k.errorCategory=e,k.muxCode=N.NETWORK_TOKEN_EXPIRED,k.data=t,k}if(Mb(E,v)){let y=x("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p}),T=x("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:p,playbackId:v,tokenPlaybackId:E.sub}),_=new R(y,m,!0,T);return _.errorCategory=e,_.muxCode=N.NETWORK_TOKEN_SUB_MISMATCH,_.data=t,_}if(xb(E)){let y=x("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),T=x("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:u}),_=new R(y,m,!0,T);return _.errorCategory=e,_.muxCode=N.NETWORK_TOKEN_AUD_MISSING,_.data=t,_}if(Ob(E,u)){let y=x("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),T=x("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:u,aud:E.aud}),_=new R(y,m,!0,T);return _.errorCategory=e,_.muxCode=N.NETWORK_TOKEN_AUD_MISMATCH,_.data=t,_}}else{let y=x("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p,category:e}),T=x("Specified playback ID: {playbackId}",r).format({playbackId:v}),_=new R(y,m,a??!0,T);return _.errorCategory=e,_.muxCode=N.NETWORK_TOKEN_MISSING,_.data=t,_}if(l===412){let y=x("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),T=x("Specified playback ID: {playbackId}",r).format({playbackId:v}),_=new R(y,m,a??!0,T);return _.errorCategory=e,_.muxCode=N.NETWORK_NOT_READY,_.streamType=i.streamType===X.LIVE?"live":i.streamType===X.ON_DEMAND?"on-demand":"unknown",_.data=t,_}if(l===404){let y=x("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),T=x("Specified playback ID: {playbackId}",r).format({playbackId:v}),_=new R(y,m,a??!0,T);return _.errorCategory=e,_.muxCode=N.NETWORK_NOT_FOUND,_.data=t,_}if(l===400){let y=x("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),T=x("Specified playback ID: {playbackId}",r).format({playbackId:v}),_=new R(y,m,a??!0,T);return _.errorCategory=e,_.muxCode=N.NETWORK_INVALID_URL,_.data=t,_}let g=new R("",m,a??!0);return g.errorCategory=e,g.muxCode=N.NETWORK_UNKNOWN_ERROR,g.data=t,g},Jl=F.DefaultConfig.capLevelController;Jl||console.error("MinCapLevelController - hls.js DefaultConfig.capLevelController is unavailable");var ag={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function rg(t){let e=t.toLowerCase().trim();return ag[e]}var ed=class Pr extends Jl{constructor(e){super(e)}static setMaxAutoResolution(e,i){i?Pr.maxAutoResolution.set(e,i):Pr.maxAutoResolution.delete(e)}getMaxAutoResolution(){var e;let i=this.hls;return(e=Pr.maxAutoResolution.get(i))!=null?e:void 0}get levels(){var e;return(e=this.hls.levels)!=null?e:[]}getValidLevels(e){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=e)}getMaxLevelCapped(e){let i=this.getValidLevels(e),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(e);let r=rg(a);if(!r)return super.getMaxLevel(e);let n=i.filter(l=>l.width*l.height<=r),s=n.findIndex(l=>l.width*l.height===r);if(s!==-1){let l=n[s];return i.findIndex(d=>d===l)}if(n.length===0)return 0;let o=n[n.length-1];return i.findIndex(l=>l===o)}getMaxLevel(e){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(e);let i=super.getMaxLevel(e),a=this.getValidLevels(e);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=Pr.minMaxResolution;return r>=n?i:Jl.getMaxLevelByMediaSize(a,n*(16/9),n)}};ed.minMaxResolution=720,ed.maxAutoResolution=new WeakMap;var ng=ed,td=ng,sg="com.apple.fps.1_0",og="application/vnd.apple.mpegurl",lg=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in t)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let h=x("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),u=new R(h,R.MEDIA_ERR_ENCRYPTED,!0);return u.errorCategory=Z.DRM,u.muxCode=N.ENCRYPTED_CDM_ERROR,a(t,u),()=>{}}let n=t,s=e(),o=null,l=h=>{(async()=>{try{n.webkitKeys||d();let u=await s;if(h.initData===null||u==null)return;let v=dg(h.initData,u);m(v)}catch(u){console.error("Could not start encrypted playback due to exception",u),a(n,u)}})()},d=()=>{try{let h=new WebKitMediaKeys(sg);n.webkitSetMediaKeys(h),r()}catch{let h="Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",u=new R(h,R.MEDIA_ERR_ENCRYPTED,!0);throw u.errorCategory=Z.DRM,u.muxCode=N.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,u}},m=h=>{let u=n.webkitKeys.createSession(og,h),v=async y=>{try{let T=y.message,_=await i(T);u.update(_)}catch(T){console.error("Error on FairPlay session message",T),a(t,T)}},E=y=>{let T=y.target.error;if(!T)return;console.error(`Internal Webkit Key Session Error - sysCode: ${T.systemCode} code: ${T.code}`);let _=x("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),k=new R(_,R.MEDIA_ERR_ENCRYPTED,!0);k.errorCategory=Z.DRM,k.muxCode=N.ENCRYPTED_CDM_ERROR,a(t,k)},g=()=>{u.removeEventListener("webkitkeymessage",v),u.removeEventListener("webkitkeyerror",E),t.removeEventListener("teardown",g),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",g),o=null;try{u.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",g,{once:!0}),u.addEventListener("webkitkeymessage",v),u.addEventListener("webkitkeyerror",E),t.addEventListener("teardown",g),o=g},p=()=>{t.removeEventListener("webkitneedkey",l),t.removeEventListener("teardown",p),o?.();try{n.webkitSetMediaKeys(null)}catch{}};return t.addEventListener("webkitneedkey",l),t.addEventListener("teardown",p,{once:!0}),p},dg=(t,e)=>{let i=cg(ug(t)),a=new Uint8Array(t),r=new Uint8Array(i),n=new Uint8Array(e),s=a.byteLength+4+n.byteLength+4+r.byteLength,o=new Uint8Array(s),l=0,d=p=>{o.set(p,l),l+=p.byteLength},m=p=>{let h=new DataView(o.buffer),u=p.byteLength;h.setUint32(l,u,!0),l+=4,d(p)};return d(a),m(r),m(n),o},ug=t=>new TextDecoder("utf-16le").decode(t).replace("skd://","").slice(1);function cg(t){let e=new ArrayBuffer(t.length*2),i=new DataView(e);for(let a=0;a<t.length;a++)i.setUint16(a*2,t.charCodeAt(a),!0);return e}var hg=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async p=>{try{let h=p.initDataType;if(h!=="skd"){console.error(`Received unexpected initialization data type "${h}"`);return}t.mediaKeys||await l(h);let u=p.initData;if(u==null){console.error(`Could not start encrypted playback due to missing initData in ${p.type} event`);return}await d(h,u)}catch(h){a(t,h);return}},l=async p=>{let h=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[p],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(v=>(r(),v)).catch(()=>{let v=x("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),E=new R(v,R.MEDIA_ERR_ENCRYPTED,!0);E.errorCategory=Z.DRM,E.muxCode=N.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(t,E)});if(!h)return;let u=await h.createMediaKeys();try{let v=await e();await u.setServerCertificate(v).catch(()=>{let E=x("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),g=new R(E,R.MEDIA_ERR_ENCRYPTED,!0);return g.errorCategory=Z.DRM,g.muxCode=N.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(g)})}catch(v){a(t,v);return}await t.setMediaKeys(u)},d=async(p,h)=>{let u=t.mediaKeys.createSession(),v=async y=>{let T=y.message,_=await i(T);try{await u.update(_)}catch{let k=x("Failed to update DRM license. This may be an issue with the player or your protected content."),C=new R(k,R.MEDIA_ERR_ENCRYPTED,!0);C.errorCategory=Z.DRM,C.muxCode=N.ENCRYPTED_UPDATE_LICENSE_FAILED,a(t,C)}},E=()=>{let y=T=>{let _;if(T==="internal-error"){let k=x("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");_=new R(k,R.MEDIA_ERR_ENCRYPTED,!0),_.errorCategory=Z.DRM,_.muxCode=N.ENCRYPTED_CDM_ERROR}else if(T==="output-restricted"||T==="output-downscaled"){let k=x("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");_=new R(k,R.MEDIA_ERR_ENCRYPTED,!1),_.errorCategory=Z.DRM,_.muxCode=N.ENCRYPTED_OUTPUT_RESTRICTED}_&&a(t,_)};u.keyStatuses.forEach(T=>y(T))};u.addEventListener("keystatuseschange",E),u.addEventListener("message",v);let g=async()=>{u.removeEventListener("keystatuseschange",E),u.removeEventListener("message",v),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",g),t.removeEventListener("teardown",g),await u.close().catch(y=>{console.warn("There was an error when closing EME session",y)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",g,{once:!0}),t.addEventListener("teardown",g,{once:!0}),s=g,await u.generateRequest(p,h).catch(async y=>{if(y.name==="NotSupportedError"&&"webkitCurrentPlaybackTargetIsWireless"in t&&t.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),n?.();else{let T=x("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),_=new R(T,R.MEDIA_ERR_ENCRYPTED,!0);return _.errorCategory=Z.DRM,_.muxCode=N.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",y),Promise.reject(_)}})},m=async()=>{t.removeEventListener("encrypted",o),t.removeEventListener("teardown",m),s&&await s(),await t.setMediaKeys(null).catch(()=>{})};return t.addEventListener("encrypted",o),t.addEventListener("teardown",m,{once:!0}),m},mg=({hls:t,mediaEl:e,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,d=!1,m=!1,p=!1,h=()=>{o!=null&&(clearTimeout(o),o=void 0)},u=S=>S?.muxCode===N.NETWORK_RECONNECTING,v=()=>!e.paused&&e.readyState<HTMLMediaElement.HAVE_FUTURE_DATA,E=()=>{let S=a.get(e);if(u(S?.error))return;let U=new R(x("Attempting to reconnect..."),R.MEDIA_ERR_NETWORK,!1);U.errorCategory=Z.VIDEO,U.muxCode=N.NETWORK_RECONNECTING,S&&(S.error=U),e.dispatchEvent(new CustomEvent("error",{detail:U}))},g=()=>{if(!p&&i){t.loadSource(i);return}t.startLoad(e.currentTime)},y=()=>{d=!1,m=!0,h();let S=new R(x("Network error, try reloading."),R.MEDIA_ERR_NETWORK,!0);S.errorCategory=Z.VIDEO,S.reload=!0,r(e,S)},T=()=>{if(o!=null||d)return;if(l>=n){y();return}d=!0;let S=Math.min(1e3*2**l,3e4);o=setTimeout(()=>{o=void 0,l+=1,g()},S)},_=()=>{let S=a.get(e);!(S!=null&&S.networkError)||m||v()&&(E(),T())},k=()=>{let S=a.get(e);S&&(S.networkError=!0),d=!1,_()},C=()=>{let S=a.get(e);S!=null&&S.networkError&&(l=0,m=!1,h(),d=!0,g())};(s=globalThis.addEventListener)==null||s.call(globalThis,"online",C);let M=()=>{let S=a.get(e);S&&(!S.networkError&&!u(S.error)||(S.networkError=!1,d=!1,l=0,m=!1,h(),S.error&&(S.error=null,e.dispatchEvent(new Event("emptied")))))};return t.on(F.Events.FRAG_BUFFERED,M),me(e,"playing",()=>{let S=a.get(e);S!=null&&S.networkError&&(d=!1,l=0,m=!1,h(),S.error&&(S.error=null))}),me(e,"waiting",_),e.addEventListener("teardown",()=>{var S;(S=globalThis.removeEventListener)==null||S.call(globalThis,"online",C),h()},{once:!0}),{handleHlsError:(S,U)=>{var q,W;if(S.type!==F.ErrorTypes.NETWORK_ERROR)return!1;let B=(W=(q=S.response)==null?void 0:q.code)!=null?W:0;return(U.muxCode===N.NETWORK_OFFLINE||B===0||B>=500)&&S.fatal?(k(),!0):!1},onManifestLoaded:()=>{p=!0,d=!1,h()}}},ss={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},pg=t=>{if(t.includes("fps"))return ss.FAIRPLAY;if(t.includes("playready"))return ss.PLAYREADY;if(t.includes("widevine"))return ss.WIDEVINE},vg=(t,e,i)=>{let a=Rb(t);if(!a)return Promise.reject(new Error("No media playlist URL found in multivariant playlist"));if(Ql(a)&&!e)return Promise.reject(new Error("masterPlaylistUrl is required to resolve relative media playlist URL"));let r;try{r=il(a,e)}catch(n){return Promise.reject(n)}return fetch(r,{signal:i}).then(n=>n.status!==200?Promise.reject(n):n.text())},fg=t=>{let e=t.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!e.length)return{};let i={};for(let a of e){let r=_g(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},Eg=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function _g(t){let e=[...t.matchAll(Eg)];return Object.fromEntries(e.map(([,i,a])=>[i,a]))}var bg=t=>{var e,i,a;let r=t.split(`
`),n=(i=((e=r.find(d=>d.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?e:"").split(":")[1])==null?void 0:i.trim(),s=Jm(n),o=ep(n),l;if(s===X.LIVE){let d=r.find(m=>m.startsWith("#EXT-X-PART-INF"));if(d)l=+d.split(":")[1].split("=")[1]*2;else{let m=r.find(h=>h.startsWith("#EXT-X-TARGETDURATION")),p=(a=m?.split(":"))==null?void 0:a[1];l=+(p??6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},gg=async(t,e,i)=>{if(e===pi.MP4)return{streamType:X.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0};if(e===pi.M3U8){let a=await fetch(t,{signal:i});if(!a.ok)return Promise.reject(a);let r=await a.text(),n=a.url||t,s=await vg(r,n,i);return{...fg(r),...bg(s),playlistUrl:n}}return console.error(`Media type ${e} is an unrecognized or unsupported type for src ${t}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0}},yg=async(t,e,i=tl({src:t}),a=al(e))=>{var r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:m,playlistUrl:p}=await gg(t,i,a);if(a.aborted)return;let h=dp(m?.["com.apple.hls.chapters"],p??t);h&&hp(h,e,a),((r=J.get(e))!=null?r:{}).liveEdgeStartOffset=d,((n=J.get(e))!=null?n:{}).targetLiveWindow=l,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=J.get(e))!=null?s:{}).streamType=o,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},dp=(t,e)=>{var i;let a=t?.URI||((i=t?.VALUE)!=null&&i.toLocaleLowerCase().startsWith("http")?t.VALUE:void 0);if(a)try{return il(a,e).toString()}catch{return}},al=t=>{let e=new AbortController;return t.addEventListener("teardown",()=>e.abort(),{once:!0}),e.signal},up=async(t,e)=>{try{let i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to fetch ${t}: ${i.status} ${i.statusText}`);let a=await i.json();return e.aborted?void 0:a}catch(i){e.aborted||console.error(i);return}},cp=(t,e)=>{var i,a;if(!Array.isArray((i=t?.[0])==null?void 0:i.metadata))return;let r={};for(let s of t[0].metadata)s!=null&&s.key&&s!=null&&s.value&&(r[s.key]=s.value);((a=J.get(e))!=null?a:{}).metadata=r;let n=new CustomEvent("muxmetadata");e.dispatchEvent(n)},Tg=async(t,e,i=al(e))=>{let a=await up(t,i);a!==void 0&&cp(a,e)},hp=async(t,e,i=al(e))=>{let a=await up(t,i);a!==void 0&&(cp(a,e),await jb(e,Vb(a,wb(e)),i))},Ag=t=>{var e;let i=t.type,a=Jm(i),r=ep(i),n,s=!!((e=t.partList)!=null&&e.length);return a===X.LIVE&&(n=s?t.partTarget*2:t.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},kg=(t,e,i)=>{var a,r,n,s,o,l,d,m;let{streamType:p,targetLiveWindow:h,liveEdgeStartOffset:u,lowLatency:v}=Ag(t);if(p===X.LIVE){v?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let E=Object.freeze({get length(){return e.seekable.length},start(g){return e.seekable.start(g)},end(g){var y;return g>this.length||g<0||Number.isFinite(e.duration)?e.seekable.end(g):(y=i.liveSyncPosition)!=null?y:e.seekable.end(g)}});((o=J.get(e))!=null?o:{}).seekable=E}((l=J.get(e))!=null?l:{}).liveEdgeStartOffset=u,((d=J.get(e))!=null?d:{}).targetLiveWindow=h,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((m=J.get(e))!=null?m:{}).streamType=p,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},oh,lh,mp=(lh=(oh=globalThis?.navigator)==null?void 0:oh.userAgent)!=null?lh:"",dh,uh,ch,wg=(ch=(uh=(dh=globalThis?.navigator)==null?void 0:dh.userAgentData)==null?void 0:uh.platform)!=null?ch:"",Sg=mp.toLowerCase().includes("android")||["x11","android"].some(t=>wg.toLowerCase().includes(t)),Ig=t=>/^((?!chrome|android).)*safari/i.test(mp)&&!!t.canPlayType("application/vnd.apple.mpegurl"),J=new WeakMap,vi="mux.com",hh,mh,pp=(mh=(hh=F).isSupported)==null?void 0:mh.call(hh),Rg=t=>Sg||!Ig(t),Tu=()=>{if(typeof window<"u")return mu.utils.now()},Lg=mu.utils.generateUUID,id=({playbackId:t,customDomain:e=vi,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:m=d}={},extraSourceParams:p={}}={})=>{if(!t)return;let[h,u=""]=vu(t),v=new URL(`https://stream.${e}/${h}.m3u8${u}`);return m||v.searchParams.has("token")?(v.searchParams.forEach((E,g)=>{g!="token"&&v.searchParams.delete(g)}),m&&v.searchParams.set("token",m)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(p).forEach(([E,g])=>{g!=null&&v.searchParams.set(E,g)})),v.toString()},rl=t=>{if(!t)return;let[e]=t.split("?");return e||void 0},Au=t=>{if(!t||!t.startsWith("https://stream."))return;let[e]=new URL(t).pathname.slice(1).split(/\.m3u8|\//);return e||void 0},Cg=t=>{var e,i,a;return(e=t?.metadata)!=null&&e.video_id?t.metadata.video_id:Ap(t)&&(a=(i=rl(t.playbackId))!=null?i:Au(t.src))!=null?a:t.src},vp=t=>{var e;return(e=J.get(t))==null?void 0:e.error},Dg=t=>{var e;return(e=J.get(t))==null?void 0:e.metadata},ad=t=>{var e,i;return(i=(e=J.get(t))==null?void 0:e.streamType)!=null?i:X.UNKNOWN},Mg=t=>{var e,i;return(i=(e=J.get(t))==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN},ku=t=>{var e,i;return(i=(e=J.get(t))==null?void 0:e.seekable)!=null?i:t.seekable},xg=t=>{var e;let i=(e=J.get(t))==null?void 0:e.liveEdgeStartOffset;if(typeof i!="number")return Number.NaN;let a=ku(t);return a.length?a.end(a.length-1)-i:Number.NaN},Og=t=>{var e;return(e=J.get(t))==null?void 0:e.coreReference},wu=.034,Ng=(t,e,i=wu)=>Math.abs(t-e)<=i,fp=(t,e,i=wu)=>t>e||Ng(t,e,i),Pg=(t,e=wu)=>t.paused&&fp(t.currentTime,t.duration,e),Ep=(t,e)=>{var i,a,r;if(!e||!t.buffered.length)return;if(t.readyState>2)return!1;let n=e.currentLevel>=0?(a=(i=e.levels)==null?void 0:i[e.currentLevel])==null?void 0:a.details:(r=e.levels.find(p=>!!p.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(t.currentTime<t.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(t.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=t.buffered.start(t.buffered.length-1),m=t.buffered.end(t.buffered.length-1);return l>d&&l<m},_p=(t,e)=>t.ended||t.loop?t.ended:e&&Ep(t,e)?!0:Pg(t),bp=(t,e,i)=>{gp(e,i,t);let{metadata:a={}}=t,{view_session_id:r=Lg()}=a,n=Cg(t);a.view_session_id=r,a.video_id=n,t.metadata=a;let s=h=>{var u;(u=e.mux)==null||u.emit("hb",{view_drm_type:h})};t.drmTypeCb=s,t.fallbackToWebkitFairplay=async()=>{var h;let u=!e.paused,v=e.currentTime;t.useWebkitFairplay=!0;let E=t.muxDataKeepSession;t.muxDataKeepSession=!0;let g=(h=J.get(e))==null?void 0:h.coreReference;bp(t,e,g),t.muxDataKeepSession=E,t.useWebkitFairplay=!1,u&&await e.play().then(()=>{e.currentTime=v}).catch(()=>{}),e.currentTime=v},J.set(e,{retryCount:0});let o=Bg(t,e),l=Ub(t,e,o);t!=null&&t.muxDataKeepSession&&e!=null&&e.mux&&!e.mux.deleted?o&&e.mux.addHLSJS({hlsjs:o,Hls:o?F:void 0}):kp(t,e,o),Gg(t,e,o),Qb(e),Xb(e);let d=$b(t,e,o);Hb(t,e,o),Bb(t,e,o);let m={engine:o,setAutoplay:d,setPreload:l},p=J.get(e);return p&&(p.coreReference=m),m},$g=()=>{let t=new Date(0).toUTCString(),e=new Set(["muxData"]);document.cookie.split(";").forEach(i=>{let a=i.split("=")[0].trim();a.startsWith("muxData")&&e.add(a)}),e.forEach(i=>{document.cookie=`${i}=;expires=${t};path=/`})},Rl=new WeakMap,Ug=(t,e,i)=>{e&&(e.mux&&(e.mux.deleted||e.mux.destroy(),delete e.mux),!Rl.has(e)&&Rl.set(e,Promise.resolve().then(()=>{var a,r;Rl.delete(e);let n=J.get(e);if(!n||e.mux&&!e.mux.deleted)return;let s=(r=(a=n.coreReference)!=null?a:i)==null?void 0:r.engine;kp(t,e,s)})))},Hg=(t,e,i)=>{if(!e)return;let a=!!t.disableCookies,r=J.get(e);!r||r.muxDataDisableCookies===a||(Ug(t,e,i),a&&Promise.resolve().then(()=>{t.disableCookies&&$g()}))},gp=(t,e,i)=>{let a=e?.engine;t!=null&&t.mux&&!t.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&t.mux.removeHLSJS():(t.mux.destroy(),delete t.mux)),a&&(a.detachMedia(),a.destroy()),t&&(t.hasAttribute("src")&&(t.removeAttribute("src"),t.load()),t.removeEventListener("error",Sp),t.removeEventListener("error",rd),t.removeEventListener("durationchange",wp),J.delete(t),t.dispatchEvent(new Event("teardown")))};function yp(t,e){var i;let a=tl(t);if(a!==pi.M3U8)return!0;let r=!a||((i=e.canPlayType(a))!=null?i:!0),{preferPlayback:n}=t,s=n===Gt.MSE,o=n===Gt.NATIVE,l=pp&&(s||Rg(e));return r&&(o||!l)}var Bg=(t,e)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=t,m=tl(t)===pi.M3U8,p=yp(t,e);if(m&&!p&&pp){let h={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...d!=null?{abrEwmaDefaultEstimate:d*1e3}:{}},u=Wg(a),v=Fg(t),E=[Nr.QUERY,Nr.HEADER].includes(s)?{useHeaders:s===Nr.HEADER,sessionId:n?.view_session_id,contentId:n?.video_id}:void 0,g=Yg(t),y=new F({debug:i,startPosition:r,cmcd:E,xhrSetup:(T,_)=>{var k,C;if(s&&s!==Nr.QUERY)return;let M=il(_);if(!M.searchParams.has("CMCD"))return;let S=((C=(k=M.searchParams.get("CMCD"))==null?void 0:k.split(","))!=null?C:[]).filter(U=>U.startsWith("sid")||U.startsWith("cid")).join(",");M.searchParams.set("CMCD",S),T.open("GET",M)},...h,...g,...u,...v,...o});return g.capLevelController===td&&l!==void 0&&td.setMaxAutoResolution(y,l),y.on(F.Events.MANIFEST_LOADED,async function(T,_){var k;let C=dp((k=_.sessionData)==null?void 0:k["com.apple.hls.chapters"],_.url);C&&hp(C,e)}),y}},Wg=t=>t===X.LIVE?{backBufferLength:8}:{},Fg=t=>{let{tokens:{drm:e}={},playbackId:i,drmTypeCb:a}=t,r=rl(i);return!e||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:os(t,"fairplay"),serverCertificateUrl:Tp(t,"fairplay")},"com.widevine.alpha":{licenseUrl:os(t,"widevine")},"com.microsoft.playready":{licenseUrl:os(t,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let d=(l=o.videoCapabilities)==null?void 0:l.map(m=>({...m,robustness:"HW_SECURE_ALL"}));return{...o,videoCapabilities:d}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=pg(n);return a?.(l),o}))}},Kg=async t=>{let e=await fetch(t);return e.status!==200?Promise.reject(e):await e.arrayBuffer()},Vg=async(t,e)=>{let i=await fetch(e,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:t});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},qg=(t,e)=>{let i={mediaEl:e,getAppCertificate:()=>Kg(Tp(t,"fairplay")).catch(a=>{if(a instanceof Response){let r=yo(a,Z.DRM,t);return console.error("mediaError",r?.message,r?.context),r?Promise.reject(r):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(a)}),getLicenseKey:a=>Vg(a,os(t,"fairplay")).catch(r=>{if(r instanceof Response){let n=yo(r,Z.DRM,t);return console.error("mediaError",n?.message,n?.context),n?Promise.reject(n):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(r)}),saveAndDispatchError:ui,drmTypeCb:()=>{var a;(a=t.drmTypeCb)==null||a.call(t,ss.FAIRPLAY)}};if(t.useWebkitFairplay)lg(i);else{let a={fallbackToWebkitFairplay:async()=>{var n;await r(),(n=t.fallbackToWebkitFairplay)==null||n.call(t)},...i},r=hg(a)}},os=({playbackId:t,tokens:{drm:e}={},customDomain:i=vi},a)=>{let r=rl(t);return`https://license.${i.toLocaleLowerCase().endsWith(vi)?i:vi}/license/${a}/${r}?token=${e}`},Tp=({playbackId:t,tokens:{drm:e}={},customDomain:i=vi},a)=>{let r=rl(t);return`https://license.${i.toLocaleLowerCase().endsWith(vi)?i:vi}/appcert/${a}/${r}?token=${e}`},Ap=({playbackId:t,src:e,customDomain:i})=>{if(t)return!0;if(typeof e!="string")return!1;let a=window?.location.href,r=new URL(e,a).hostname.toLocaleLowerCase();return r.includes(vi)||!!i&&r.includes(i.toLocaleLowerCase())},Yg=(t,e)=>{let i={};return i.capLevelToPlayerSize=t.capRenditionToPlayerSize,i.capLevelToPlayerSize==null?(i.capLevelController=td,i.capLevelToPlayerSize=!0):i.capLevelController=Gf,i},kp=(t,e,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=mu,muxDataSDKOptions:o={}}=t,l=Ap(t),d=J.get(e);if(d&&(d.muxDataDisableCookies=!!t.disableCookies),!n&&(r||l)){let{playerInitTime:m,playerSoftwareName:p,playerSoftwareVersion:h,beaconCollectionDomain:u,debug:v,disableCookies:E}=t,g={...t.metadata,video_title:((a=t?.metadata)==null?void 0:a.video_title)||void 0},y=T=>typeof T.player_error_code=="string"?!1:typeof t.errorTranslator=="function"?t.errorTranslator(T):T;s.monitor(e,{debug:v,beaconCollectionDomain:u,hlsjs:i,Hls:i?F:void 0,automaticErrorTracking:!1,errorTranslator:y,disableCookies:E,...o,data:{...r?{env_key:r}:{},player_software_name:p,player_software:p,player_software_version:h,player_init_time:m,...g}})}},Gg=(t,e,i)=>{var a,r,n;let s=yp(t,e),{src:o,customDomain:l=vi}=t,d=()=>{e.ended||t.disablePseudoEnded||!_p(e,i)||(Ep(e,i)?e.currentTime=e.buffered.end(e.buffered.length-1):e.dispatchEvent(new Event("ended")))},m,p,h=()=>{let u=ku(e),v,E;u.length>0&&(v=u.start(0),E=u.end(0)),(p!==E||m!==v)&&e.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),m=v,p=E};if(me(e,"durationchange",h),e&&s){let u=tl(t);if(typeof o=="string"){if(o.endsWith(".mp4")&&o.includes(l)){let g=Au(o),y=new URL(`https://stream.${l}/${g}/metadata.json`);Tg(y.toString(),e)}let v=()=>{if(ad(e)!==X.LIVE||Number.isFinite(e.duration))return;let g=setInterval(h,1e3);e.addEventListener("teardown",()=>{clearInterval(g)},{once:!0}),me(e,"durationchange",()=>{Number.isFinite(e.duration)&&clearInterval(g)})},E=async()=>{let g=al(e);return yg(o,e,u,g).then(()=>{g.aborted||v()}).catch(y=>{if(y instanceof Response){let T=yo(y,Z.VIDEO,t);if(T){ui(e,T);return}}})};if(e.preload==="none"){let g=()=>{E(),e.removeEventListener("loadedmetadata",y)},y=()=>{E(),e.removeEventListener("play",g)};me(e,"play",g,{once:!0}),me(e,"loadedmetadata",y,{once:!0})}else E();(a=t.tokens)!=null&&a.drm?qg(t,e):me(e,"encrypted",()=>{let g=x("Attempting to play DRM-protected content without providing a DRM token."),y=new R(g,R.MEDIA_ERR_ENCRYPTED,!0);y.errorCategory=Z.DRM,y.muxCode=N.ENCRYPTED_MISSING_TOKEN,ui(e,y)},{once:!0}),e.setAttribute("src",o),t.startTime&&(((r=J.get(e))!=null?r:{}).startTime=t.startTime,e.addEventListener("durationchange",wp,{once:!0}))}else e.removeAttribute("src");e.addEventListener("error",Sp),e.addEventListener("error",rd),e.addEventListener("emptied",()=>{e.querySelectorAll("track[data-removeondestroy]").forEach(v=>{v.remove()})},{once:!0}),me(e,"pause",d),me(e,"seeked",d),me(e,"play",()=>{e.ended||fp(e.currentTime,e.duration)&&(e.currentTime=e.seekable.length?e.seekable.start(0):0)})}else if(i&&o){i.once(F.Events.LEVEL_LOADED,(E,g)=>{kg(g.details,e,i),h(),ad(e)===X.LIVE&&!Number.isFinite(e.duration)&&(i.on(F.Events.LEVEL_UPDATED,h),me(e,"durationchange",()=>{Number.isFinite(e.duration)&&i.off(F.Events.LEVELS_UPDATED,h)}))});let u=(n=t.maxReconnectRetries)!=null?n:0,v=u>0?mg({hls:i,mediaEl:e,src:o,muxMediaState:J,saveAndDispatchError:ui,maxRetries:u}):void 0;i.on(F.Events.ERROR,(E,g)=>{var y,T;let _=zg(g,t);if(_.muxCode===N.NETWORK_NOT_READY){let k=(y=J.get(e))!=null?y:{},C=(T=k.retryCount)!=null?T:0;if(C<6){let M=C===0?5e3:6e4,S=new R(`Retrying in ${M/1e3} seconds...`,_.code,_.fatal);Object.assign(S,_),ui(e,S);let U=setTimeout(()=>{k.retryCount=C+1,g.details==="manifestLoadError"&&g.url&&i.loadSource(g.url)},M);e.addEventListener("teardown",()=>clearTimeout(U),{once:!0});return}else{k.retryCount=0;let M=new R("Network error, try reloading.",_.code,_.fatal);Object.assign(M,_),M.reload=!0,ui(e,M);return}}v!=null&&v.handleHlsError(g,_)||ui(e,_)}),i.on(F.Events.MANIFEST_LOADED,()=>{v?.onManifestLoaded();let E=J.get(e);E!=null&&E.networkError||E&&E.error&&(E.error=null,E.retryCount=0,e.dispatchEvent(new Event("emptied")),e.dispatchEvent(new Event("loadstart")))}),e.addEventListener("error",rd),me(e,"waiting",d),Wb(t,i),qb(e,i),i.attachMedia(e)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function wp(t){var e;let i=t.target,a=(e=J.get(i))==null?void 0:e.startTime;if(a&&Sb(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function Sp(t){if(!t.isTrusted)return;t.stopImmediatePropagation();let e=t.target;if(!(e!=null&&e.error))return;let{message:i,code:a}=e.error,r=new R(i,a);if(e.src&&a===R.MEDIA_ERR_SRC_NOT_SUPPORTED&&e.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=vp(e))!=null?n:e.error;s?.code===R.MEDIA_ERR_SRC_NOT_SUPPORTED&&ui(e,r)},500);return}if(e.src&&(a!==R.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(e.src);r.data={response:{code:n}}}catch{}ui(e,r)}function ui(t,e){var i;e.fatal&&(((i=J.get(t))!=null?i:{}).error=e,t.dispatchEvent(new CustomEvent("error",{detail:e})))}function rd(t){var e,i;if(!(t instanceof CustomEvent)||!(t.detail instanceof R))return;let a=t.target,r=t.detail;!r||!r.fatal||(((e=J.get(a))!=null?e:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var zg=(t,e)=>{var i,a,r;t.fatal?console.error("getErrorFromHlsErrorData()",t):e.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",t);let n={[F.ErrorTypes.NETWORK_ERROR]:R.MEDIA_ERR_NETWORK,[F.ErrorTypes.MEDIA_ERROR]:R.MEDIA_ERR_DECODE,[F.ErrorTypes.KEY_SYSTEM_ERROR]:R.MEDIA_ERR_ENCRYPTED},s=m=>[F.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,F.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(m.details)?R.MEDIA_ERR_NETWORK:n[m.type],o=m=>{if(m.type===F.ErrorTypes.KEY_SYSTEM_ERROR)return Z.DRM;if(m.type===F.ErrorTypes.NETWORK_ERROR)return Z.VIDEO},l,d=s(t);if(d===R.MEDIA_ERR_NETWORK&&t.response){let m=(i=o(t))!=null?i:Z.VIDEO;l=(a=yo(t.response,m,e,t.fatal))!=null?a:new R("",d,t.fatal)}else if(d===R.MEDIA_ERR_ENCRYPTED)if(t.details===F.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let m=x("Attempting to play DRM-protected content without providing a DRM token.");l=new R(m,R.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=Z.DRM,l.muxCode=N.ENCRYPTED_MISSING_TOKEN}else if(t.details===F.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let m=x("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");l=new R(m,R.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=Z.DRM,l.muxCode=N.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(t.details===F.ErrorDetails.KEY_SYSTEM_NO_SESSION){let m=x("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");l=new R(m,R.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=Z.DRM,l.muxCode=N.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(t.details===F.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let m=x("Failed to update DRM license. This may be an issue with the player or your protected content.");l=new R(m,R.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=Z.DRM,l.muxCode=N.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(t.details===F.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let m=x("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");l=new R(m,R.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=Z.DRM,l.muxCode=N.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(t.details===F.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let m=x("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");l=new R(m,R.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=Z.DRM,l.muxCode=N.ENCRYPTED_CDM_ERROR}else if(t.details===F.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let m=x("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");l=new R(m,R.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=Z.DRM,l.muxCode=N.ENCRYPTED_OUTPUT_RESTRICTED}else l=new R(t.error.message,R.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=Z.DRM,l.muxCode=N.ENCRYPTED_ERROR;else l=new R("",d,t.fatal);return l.context||(l.context=`${t.url?`url: ${t.url}
`:""}${t.response&&(t.response.code||t.response.text)?`response: ${t.response.code}, ${t.response.text}
`:""}${t.reason?`failure reason: ${t.reason}
`:""}${t.level?`level: ${t.level}
`:""}${t.parent?`parent stream controller: ${t.parent}
`:""}${t.buffer?`buffer length: ${t.buffer}
`:""}${t.error?`error: ${t.error}
`:""}${t.event?`event: ${t.event}
`:""}${t.err?`error message: ${(r=t.err)==null?void 0:r.message}
`:""}`),l.data=t,l},Ip=t=>{throw TypeError(t)},Su=(t,e,i)=>e.has(t)||Ip("Cannot "+i),pe=(t,e,i)=>(Su(t,e,"read from private field"),i?i.call(t):e.get(t)),rt=(t,e,i)=>e.has(t)?Ip("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Tt=(t,e,i,a)=>(Su(t,e,"write to private field"),e.set(t,i),i),Bn=(t,e,i)=>(Su(t,e,"access private method"),i),Qg=()=>{try{return"0.31.5"}catch{}return"UNKNOWN"},jg=Qg(),Zg=()=>jg,Xg=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,f={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},Jg=Object.values(f),ph=Zg(),vh="mux-video",$r,ls,Ur,ds,us,cs,hs,ms,Hr,ps,et,Ai,vs,Br,e0=class extends Un{constructor(){super(),rt(this,et),rt(this,$r),rt(this,ls),rt(this,Ur,{}),rt(this,ds,{}),rt(this,us),rt(this,cs),rt(this,hs),rt(this,ms),rt(this,Hr,""),rt(this,ps,e=>{var i;let a=Dg(this.nativeEl),r=(i=this.metadata)!=null?i:{};this.metadata={...a,...r},a?.["com.mux.video.branding"]==="mux-free-plan"&&(Tt(this,Hr,"default"),this.updateLogo())}),rt(this,vs),Tt(this,ls,Tu())}static get NAME(){return vh}static get VERSION(){return ph}static get observedAttributes(){var e;return[...Jg,...(e=Un.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?Xg:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var i;return`
      ${Un.getTemplateHTML(e)}
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
        ${this.getLogoHTML((i=e[f.LOGO])!=null?i:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(f.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?go.includes(e)?this.setAttribute(f.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${go.join()}`):this.removeAttribute(f.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(f.PLAYER_INIT_TIME)?+this.getAttribute(f.PLAYER_INIT_TIME):pe(this,ls)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(f.PLAYER_INIT_TIME):this.setAttribute(f.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=pe(this,hs))!=null?e:vh}set playerSoftwareName(e){Tt(this,hs,e)}get playerSoftwareVersion(){var e;return(e=pe(this,cs))!=null?e:ph}set playerSoftwareVersion(e){Tt(this,cs,e)}get _hls(){var e;return(e=pe(this,et,Ai))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=vp(this.nativeEl))!=null?e:null}get errorTranslator(){return pe(this,ms)}set errorTranslator(e){Tt(this,ms,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(f.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(f.TYPE,e):this.removeAttribute(f.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(f.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(f.DEBUG,""):this.removeAttribute(f.DEBUG))}get disableTracking(){return this.hasAttribute(f.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(f.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(f.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(f.DISABLE_COOKIES,""):this.removeAttribute(f.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(f.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(f.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(f.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(f.MAX_RECONNECT_RETRIES);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(e==null?this.removeAttribute(f.MAX_RECONNECT_RETRIES):this.setAttribute(f.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(f.START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(f.START_TIME):this.setAttribute(f.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(f.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(e==null?this.removeAttribute(f.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(f.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(f.INITIAL_ESTIMATE_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(e==null?this.removeAttribute(f.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(f.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(f.MIN_PRELOAD_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set minPreloadSegments(e){e!==this.minPreloadSegments&&(e==null?this.removeAttribute(f.MIN_PRELOAD_SEGMENTS):this.setAttribute(f.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(f.PLAYBACK_ID)?this.getAttribute(f.PLAYBACK_ID):(e=Au(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(f.PLAYBACK_ID,e):this.removeAttribute(f.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(f.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(f.MAX_RESOLUTION,e):this.removeAttribute(f.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(f.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(f.MIN_RESOLUTION,e):this.removeAttribute(f.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(f.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(f.MAX_AUTO_RESOLUTION):this.setAttribute(f.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(f.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(f.RENDITION_ORDER,e):this.removeAttribute(f.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(f.PROGRAM_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programStartTime(e){e==null?this.removeAttribute(f.PROGRAM_START_TIME):this.setAttribute(f.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(f.PROGRAM_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programEndTime(e){e==null?this.removeAttribute(f.PROGRAM_END_TIME):this.setAttribute(f.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(f.ASSET_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetStartTime(e){e==null?this.removeAttribute(f.ASSET_START_TIME):this.setAttribute(f.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(f.ASSET_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetEndTime(e){e==null?this.removeAttribute(f.ASSET_END_TIME):this.setAttribute(f.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(f.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(f.CUSTOM_DOMAIN,e):this.removeAttribute(f.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return((e=this._hlsConfig)==null?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:pe(this,vs)}set capRenditionToPlayerSize(e){Tt(this,vs,e)}get drmToken(){var e;return(e=this.getAttribute(f.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(f.DRM_TOKEN,e):this.removeAttribute(f.DRM_TOKEN))}get playbackToken(){var e,i,a,r;if(this.hasAttribute(f.PLAYBACK_TOKEN))return(e=this.getAttribute(f.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(f.PLAYBACK_ID)){let[,n]=vu((i=this.playbackId)!=null?i:"");return(a=new URLSearchParams(n).get("token"))!=null?a:void 0}if(this.src)return(r=new URLSearchParams(this.src).get("token"))!=null?r:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(f.PLAYBACK_TOKEN,e):this.removeAttribute(f.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(f.PLAYBACK_TOKEN),i=this.getAttribute(f.DRM_TOKEN);return{...pe(this,ds),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{}}}set tokens(e){Tt(this,ds,e??{})}get ended(){return _p(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(f.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(f.ENV_KEY,e):this.removeAttribute(f.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(f.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(f.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(f.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(f.STREAM_TYPE))!=null?e:ad(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(f.STREAM_TYPE,e):this.removeAttribute(f.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(f.TARGET_LIVE_WINDOW)?+this.getAttribute(f.TARGET_LIVE_WINDOW):Mg(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(f.TARGET_LIVE_WINDOW):this.setAttribute(f.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,i;if(this.hasAttribute(f.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,r=(e=this.nativeEl.seekable.end(0))!=null?e:0,n=(i=this.nativeEl.seekable.start(0))!=null?i:0;return Math.max(n,r-a)}return xg(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(f.LIVE_EDGE_OFFSET))return+this.getAttribute(f.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(f.LIVE_EDGE_OFFSET):this.setAttribute(f.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return ku(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),rp(this.nativeEl,e)}get activeCuePoint(){return np(this.nativeEl)}get cuePoints(){return zb(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),op(this.nativeEl,e)}get activeChapter(){return lp(this.nativeEl)}get chapters(){return Zb(this.nativeEl)}getStartDate(){return Jb(this.nativeEl,this._hls)}get currentPdt(){return eg(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(f.PREFER_PLAYBACK);if(e===Gt.MSE||e===Gt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Gt.MSE||e===Gt.NATIVE?this.setAttribute(f.PREFER_PLAYBACK,e):this.removeAttribute(f.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![f.METADATA_URL].includes(e)).reduce((e,i)=>{let a=this.getAttribute(i);return a!=null&&(e[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...pe(this,Ur)}}set metadata(e){Tt(this,Ur,e??{}),this.mux&&this.mux.emit("hb",pe(this,Ur))}get _hlsConfig(){return pe(this,us)}set _hlsConfig(e){Tt(this,us,e)}get logo(){var e;return(e=this.getAttribute(f.LOGO))!=null?e:pe(this,Hr)}set logo(e){e?this.setAttribute(f.LOGO,e):this.removeAttribute(f.LOGO)}load(){bp(this,this.nativeEl,pe(this,et,Ai))}unload(){gp(this.nativeEl,pe(this,et,Ai),this)}attributeChangedCallback(e,i,a){var r,n;switch(Un.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,i,a),e){case f.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case f.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let s=!!i,o=!!a;!s&&o?Bn(this,et,Br).call(this):s&&!o?this.unload():s&&o&&(this.unload(),Bn(this,et,Br).call(this));break}case"autoplay":if(a===i)break;(r=pe(this,et,Ai))==null||r.setAutoplay(this.autoplay);break;case"preload":if(a===i)break;(n=pe(this,et,Ai))==null||n.setPreload(a);break;case f.PLAYBACK_ID:case f.CUSTOM_DOMAIN:case f.MAX_RESOLUTION:case f.MIN_RESOLUTION:case f.RENDITION_ORDER:case f.PROGRAM_START_TIME:case f.PROGRAM_END_TIME:case f.ASSET_START_TIME:case f.ASSET_END_TIME:case f.PLAYBACK_TOKEN:this.hasAttribute(f.PLAYBACK_ID)&&(this.src=id(this));break;case f.DEBUG:{let s=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=s);break}case f.METADATA_URL:a&&fetch(a).then(s=>s.json()).then(s=>this.metadata=s).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case f.STREAM_TYPE:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case f.TARGET_LIVE_WINDOW:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case f.LOGO:(a==null||a!==i)&&this.updateLogo();break;case f.DISABLE_TRACKING:{if(a==null||a!==i){let s=this.currentTime,o=this.paused;this.unload(),Bn(this,et,Br).call(this).then(()=>{this.currentTime=s,o||this.play()})}break}case f.DISABLE_COOKIES:{(a==null||a!==i)&&Hg(this,this.nativeEl,pe(this,et,Ai));break}case f.CAP_RENDITION_TO_PLAYER_SIZE:(a==null||a!==i)&&(this.capRenditionToPlayerSize=a!=null?!0:void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let i=this.constructor.getLogoHTML(pe(this,Hr)||this.logo);e.innerHTML=i}connectedCallback(){var e,i;(e=super.connectedCallback)==null||e.call(this),(i=this.nativeEl)==null||i.addEventListener("muxmetadata",pe(this,ps)),this.nativeEl&&this.src&&!pe(this,et,Ai)&&Bn(this,et,Br).call(this)}disconnectedCallback(){var e,i;(e=this.nativeEl)==null||e.removeEventListener("muxmetadata",pe(this,ps)),this.unload(),(i=super.disconnectedCallback)==null||i.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};$r=new WeakMap,ls=new WeakMap,Ur=new WeakMap,ds=new WeakMap,us=new WeakMap,cs=new WeakMap,hs=new WeakMap,ms=new WeakMap,Hr=new WeakMap,ps=new WeakMap,et=new WeakSet,Ai=function(){return Og(this.nativeEl)},vs=new WeakMap,Br=async function(){pe(this,$r)||(await Tt(this,$r,Promise.resolve()),Tt(this,$r,null),this.load())};const Bi=new WeakMap;class Ll extends Error{}class t0 extends Error{}const i0=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],a0=globalThis.WeakRef?class extends Set{add(t){super.add(new WeakRef(t))}forEach(t){super.forEach(e=>{const i=e.deref();i&&t(i)})}}:Set;function r0(t){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?t():customElements.whenDefined("google-cast-button").then(t):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(t)}}function n0(){return globalThis.chrome}function s0(){const t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${t}"]`))return;const e=document.createElement("script");e.src=t,document.head.append(e)}function $i(){return globalThis.cast?.framework?.CastContext.getInstance()}function Iu(){return $i()?.getCurrentSession()}function Ru(){return Iu()?.getSessionObj().media[0]}function o0(t){return new Promise((e,i)=>{Ru().editTracksInfo(t,e,i)})}function l0(t){return new Promise((e,i)=>{Ru().getStatus(t,e,i)})}function fh(t){return $i().setOptions({...Rp(),...t})}function Rp(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function Eh(t){if(!t)return;const e=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,i=t.match(e);return i?i[1]:null}function d0(t){for(const e of t.split(`
`)){const i=e.trim();if(i.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(i)){const a=i.match(/URI="([^"]+)"/i);if(a)return a[1]}}}function u0(t){const e=t.split(`
`),i=[];for(let a=0;a<e.length;a++)if(e[a].trim().startsWith("#EXT-X-STREAM-INF")){const n=e[a+1]?e[a+1].trim():"";n&&!n.startsWith("#")&&i.push(n)}return i}function _h(t){return t.split(`
`).find(a=>!a.trim().startsWith("#")&&a.trim()!=="")?.trim()}async function c0(t){if(!t)return!1;if(/\.m3u8?(\?.*)?$/i.test(t))return!0;if(t.startsWith("blob:"))return!1;try{const i=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return i0.some(a=>i===a)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function h0(t){if(!t||t.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{const e=await(await fetch(t)).text();let i=e;const a=u0(e);if(a.length>0){const l=new URL(a[0],t).toString();i=await(await fetch(l)).text()}const r=_h(i),n=Eh(r),s=d0(e);let o=n;if(s)try{const l=new URL(s,t).toString(),d=await(await fetch(l)).text(),m=_h(d);o=Eh(m)??n}catch(l){console.error("Error while trying to parse the audio rendition playlist",l)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}const fs=new a0,ti=new WeakSet;let we;r0(()=>{if(!globalThis.chrome?.cast?.isAvailable){console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);return}we||(we=cast.framework,$i().addEventListener(we.CastContextEventType.CAST_STATE_CHANGED,t=>{fs.forEach(e=>Bi.get(e).onCastStateChanged?.(t))}),$i().addEventListener(we.CastContextEventType.SESSION_STATE_CHANGED,t=>{fs.forEach(e=>Bi.get(e).onSessionStateChanged?.(t))}),fs.forEach(t=>Bi.get(t).init?.()))});let bh=0;class m0 extends EventTarget{#t;#r;#i;#a;#e="disconnected";#n=!1;#o=new Set;#h=new WeakMap;#l=()=>this.#c();constructor(e){super(),this.#t=e,fs.add(this),Bi.set(this,{init:()=>this.#u(),onCastStateChanged:()=>this.#d(),onSessionStateChanged:()=>this.#v(),getCastPlayer:()=>this.#s}),this.#u()}destroy(){this.#t?.textTracks?.removeEventListener("change",this.#l),this.#a&&this.#i?.controller&&Object.entries(this.#a).forEach(([e,i])=>{this.#i.controller.removeEventListener(e,i)}),this.#t&&ti.delete(this.#t),this.#r=!1}get#s(){if(ti.has(this.#t))return this.#i}get state(){return this.#e}async watchAvailability(e){if(this.#t.disableRemotePlayback)throw new Ll("disableRemotePlayback attribute is present.");return this.#h.set(e,++bh),this.#o.add(e),queueMicrotask(()=>e(this.#p())),bh}async cancelWatchAvailability(e){if(this.#t.disableRemotePlayback)throw new Ll("disableRemotePlayback attribute is present.");e?this.#o.delete(e):this.#o.clear()}async prompt(){if(this.#t.disableRemotePlayback)throw new Ll("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new t0("The RemotePlayback API is disabled on this platform.");const e=ti.has(this.#t);ti.add(this.#t),fh(this.#t.castOptions),Object.entries(this.#a).forEach(([i,a])=>{this.#i.controller.addEventListener(i,a)});try{await $i().requestSession()}catch(i){if(e||ti.delete(this.#t),i==="cancel")return;throw new Error(i)}Bi.get(this.#t)?.loadOnPrompt?.()}#m(){ti.has(this.#t)&&(Object.entries(this.#a).forEach(([e,i])=>{this.#i.controller.removeEventListener(e,i)}),ti.delete(this.#t),this.#t.muted=this.#i.isMuted,this.#t.currentTime=this.#i.savedPlayerState.currentTime,this.#i.savedPlayerState.isPaused===!1&&this.#t.play())}#p(){const e=$i()?.getCastState();return e&&e!=="NO_DEVICES_AVAILABLE"}#d(){const e=$i().getCastState();if(ti.has(this.#t)&&e==="CONNECTING"&&(this.#e="connecting",this.dispatchEvent(new Event("connecting"))),!this.#n&&e?.includes("CONNECT")){this.#n=!0;for(let i of this.#o)i(!0)}else if(this.#n&&(!e||e==="NO_DEVICES_AVAILABLE")){this.#n=!1;for(let i of this.#o)i(!1)}}async#v(){const{SESSION_RESUMED:e}=we.SessionState;if($i().getSessionState()===e&&this.#t.castSrc===Ru()?.media.contentId){ti.add(this.#t),Object.entries(this.#a).forEach(([i,a])=>{this.#i.controller.addEventListener(i,a)});try{await l0(new chrome.cast.media.GetStatusRequest)}catch(i){console.error(i)}this.#a[we.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#a[we.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#u(){!we||this.#r||(this.#r=!0,fh(this.#t.castOptions),this.#t.textTracks.addEventListener("change",this.#l),this.#d(),this.#i=new we.RemotePlayer,new we.RemotePlayerController(this.#i),this.#a={[we.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{e===!0?(this.#e="connected",this.dispatchEvent(new Event("connect"))):(this.#m(),this.#e="disconnected",this.dispatchEvent(new Event("disconnect")))},[we.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#t.dispatchEvent(new Event("durationchange"))},[we.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[we.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[we.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#s?.isMediaLoaded&&this.#t.dispatchEvent(new Event("timeupdate"))},[we.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#t.dispatchEvent(new Event("resize"))},[we.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#t.dispatchEvent(new Event(this.paused?"pause":"play"))},[we.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#s?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#t.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#s?.playerState]))},[we.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#s?.isMediaLoaded&&(await Promise.resolve(),this.#f())}})}#f(){this.#c()}async#c(){if(!this.#s)return;const i=(this.#i.mediaInfo?.tracks??[]).filter(({type:p})=>p===chrome.cast.media.TrackType.TEXT),a=[...this.#t.textTracks].filter(({kind:p})=>p==="subtitles"||p==="captions"),r=i.map(({language:p,name:h,trackId:u})=>{const{mode:v}=a.find(E=>E.language===p&&E.label===h)??{};return v?{mode:v,trackId:u}:!1}).filter(Boolean),s=r.filter(({mode:p})=>p!=="showing").map(({trackId:p})=>p),o=r.find(({mode:p})=>p==="showing"),l=Iu()?.getSessionObj().media[0]?.activeTrackIds??[];let d=l;if(l.length&&(d=d.filter(p=>!s.includes(p))),o?.trackId&&(d=[...d,o.trackId]),d=[...new Set(d)],!((p,h)=>p.length===h.length&&p.every(u=>h.includes(u)))(l,d))try{const p=new chrome.cast.media.EditTracksInfoRequest(d);await o0(p)}catch(p){console.error(p)}}}const p0=t=>class extends t{static observedAttributes=[...t.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#t={paused:!1};#r=Rp();#i;#a;get remote(){return this.#a?this.#a:n0()?this.isConnected?(this.disableRemotePlayback||s0(),Bi.set(this,{loadOnPrompt:()=>this.#n()}),this.#a=new m0(this)):void 0:super.remote}get#e(){return Bi.get(this.#a)?.getCastPlayer?.()}disconnectedCallback(){this.#a?.destroy(),this.#a=null,Bi.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(i,a,r){if(super.attributeChangedCallback(i,a,r),i==="cast-receiver"&&r){this.#r.receiverApplicationId=r;return}if(this.#e)switch(i){case"cast-stream-type":case"cast-src":this.load();break}}async#n(){this.#t.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(i){console.error(i)}}async load(){if(!this.#e)return super.load();const i=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);i.customData=this.castCustomData;const a=[...this.querySelectorAll("track")].filter(({kind:l,src:d})=>d&&(l==="subtitles"||l==="captions")),r=[];let n=0;if(a.length&&(i.tracks=a.map(l=>{const d=++n;r.length===0&&l.track.mode==="showing"&&r.push(d);const m=new chrome.cast.media.Track(d,chrome.cast.media.TrackType.TEXT);return m.trackContentId=l.src,m.trackContentType="text/vtt",m.subtype=l.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,m.name=l.label,m.language=l.srclang,m})),this.castStreamType==="live"?i.streamType=chrome.cast.media.StreamType.LIVE:i.streamType=chrome.cast.media.StreamType.BUFFERED,i.metadata=new chrome.cast.media.GenericMediaMetadata,i.metadata.title=this.title,i.metadata.images=[{url:this.poster}],await c0(this.castSrc)){i.contentType||(i.contentType="application/x-mpegURL");const{videoFormat:l,audioFormat:d}=await h0(this.castSrc);l?.includes("m4s")||l?.includes("mp4")||l?.includes("m4a")?(i.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,i.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):d?.includes("aac")?(i.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,i.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(l?.includes("ts")||d?.includes("ts"))&&(i.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,i.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}const o=new chrome.cast.media.LoadRequest(i);o.currentTime=super.currentTime??0,o.autoplay=!this.#t.paused,o.activeTrackIds=r,await Iu()?.loadMedia(o),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#e){this.#e.isPaused&&this.#e.controller?.playOrPause();return}return super.play()}pause(){if(this.#e){this.#e.isPaused||this.#e.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#r}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(i){this.castReceiver!=i&&this.setAttribute("cast-receiver",`${i}`)}get castSrc(){const i=this.currentSrc,a=i?.startsWith("blob:")?void 0:i;return this.getAttribute("cast-src")??this.querySelector("source")?.src??a??this.getAttribute("src")??void 0}set castSrc(i){this.castSrc!=i&&this.setAttribute("cast-src",`${i}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(i){this.setAttribute("cast-content-type",`${i}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(i){this.setAttribute("cast-stream-type",`${i}`)}get castCustomData(){return this.#i}set castCustomData(i){const a=typeof i;if(!["object","undefined"].includes(a)){console.error(`castCustomData must be nullish or an object but value was of type ${a}`);return}this.#i=i}get readyState(){if(this.#e)switch(this.#e.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#e?this.#e.isPaused:super.paused}get muted(){return this.#e?this.#e?.isMuted:super.muted}set muted(i){if(this.#e){(i&&!this.#e.isMuted||!i&&this.#e.isMuted)&&this.#e.controller?.muteOrUnmute();return}super.muted=i}get volume(){return this.#e?this.#e?.volumeLevel??1:super.volume}set volume(i){if(this.#e){this.#e.volumeLevel=+i,this.#e.controller?.setVolumeLevel();return}super.volume=i}get duration(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.duration??NaN:super.duration}get currentTime(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.currentTime??0:super.currentTime}set currentTime(i){if(this.#e){this.#e.currentTime=i,this.#e.controller?.seek();return}super.currentTime=i}};var Lp=t=>{throw TypeError(t)},Cp=(t,e,i)=>e.has(t)||Lp("Cannot "+i),v0=(t,e,i)=>(Cp(t,e,"read from private field"),i?i.call(t):e.get(t)),f0=(t,e,i)=>e.has(t)?Lp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),E0=(t,e,i,a)=>(Cp(t,e,"write to private field"),e.set(t,i),i),Dp=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class t extends Dp{}globalThis.DocumentFragment=t}var _0=class extends Dp{},b0={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(_0)}},g0={customElements:b0},y0=typeof window>"u"||typeof globalThis.customElements>"u",Cl=y0?g0:globalThis,Es,gh=class extends p0(zf(e0)){constructor(){super(...arguments),f0(this,Es)}get autoplay(){let t=this.getAttribute("autoplay");return t===null?!1:t===""?!0:t}set autoplay(t){let e=this.autoplay;t!==e&&(t?this.setAttribute("autoplay",typeof t=="string"?t:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var t;return(t=v0(this,Es))!=null?t:this.muxCastCustomData}set castCustomData(t){E0(this,Es,t)}};Es=new WeakMap;Cl.customElements.get("mux-video")||(Cl.customElements.define("mux-video",gh),Cl.MuxVideoElement=gh);const D={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},j={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Mp={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},xp=Object.entries(Mp),c=xp.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),T0={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},Xt=xp.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...T0});Object.entries(Xt).reduce((t,[e,i])=>{const a=c[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const A0=Object.entries(c).reduce((t,[e,i])=>{const a=Xt[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),jt={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},er={DISABLED:"disabled",SHOWING:"showing"},Dl={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},Je={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},di={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},k0={FULLSCREEN:"fullscreen"};function w0(t){return t?.map(I0).join(" ")}function S0(t){return t?.split(/\s+/).map(R0)}function I0(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function R0(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function L0(t){return t?.map(D0).join(" ")}function C0(t){return t?.split(/\s+/).map(M0)}function D0(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(n=>n!=null).join(":")}}function M0(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function x0(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Lu(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function Op(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}const Np=t=>new Promise(e=>setTimeout(e,t)),O0={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."};var yh;const ln={en:O0};let tr=((yh=globalThis.navigator)==null?void 0:yh.language)||"en";const N0=t=>{tr=t},P0=t=>{var e,i,a;const[r]=tr.split("-");return((e=ln[tr])==null?void 0:e[t])||((i=ln[r])==null?void 0:i[t])||((a=ln.en)==null?void 0:a[t])||t},$0=()=>{const[t]=tr.split("-");return ln[tr]?tr:ln[t]?t:"en"},L=(t,e={})=>P0(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`),Th=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Ah=(t,e)=>{const i=L(t===1?Th[e].singular:Th[e].plural);return`${t} ${i}`},dn=t=>{if(!Lu(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0),n=[a.getHours(),a.getMinutes(),a.getSeconds()].map((s,o)=>s&&Ah(s,o)).filter(s=>s).join(", ");return i?L("{time} remaining",{time:n}):e===0?Ah(0,2):n};function Wi(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);const s=Math.floor(e/60%60),o=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}let Pp=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};class $p extends Pp{}let kh=class extends $p{constructor(){super(...arguments),this.role=null}};class U0{observe(){}unobserve(){}disconnect(){}}const Up={createElement:function(){return new kn.HTMLElement},createElementNS:function(){return new kn.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},kn={ResizeObserver:U0,document:Up,Node:$p,Element:kh,HTMLElement:class extends kh{constructor(){super(...arguments),this.innerHTML=""}get content(){return new kn.DocumentFragment}},DocumentFragment:class extends Pp{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},Hp="global"in globalThis&&globalThis?.global===globalThis||typeof window>"u"||typeof window.customElements>"u",Bp=Object.keys(kn).every(t=>t in globalThis),b=Hp&&!Bp?kn:globalThis,Ae=Hp&&!Bp?Up:globalThis.document,wh=new WeakMap,Cu=t=>{let e=wh.get(t);return e||wh.set(t,e=new Set),e},Wp=new b.ResizeObserver(t=>{for(const e of t)for(const i of Cu(e.target))i(e)});function ur(t,e){Cu(t).add(e),Wp.observe(t)}function cr(t,e){const i=Cu(t);i.delete(e),i.size||Wp.unobserve(t)}function at(t){const e={};for(const i of t)e[i.name]=i.value;return e}function ze(t){var e;return(e=nd(t))!=null?e:fr(t,"media-controller")}function nd(t){var e;const{MEDIA_CONTROLLER:i}=j,a=t.getAttribute(i);if(a)return(e=nl(t))==null?void 0:e.getElementById(a)}const Fp=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},H0=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},Kp=(t,e)=>H0(t,e)[0],bi=(t,e)=>!t||!e?!1:t?.contains(e)?!0:bi(t,e.getRootNode().host),fr=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||fr(t.getRootNode().host,e)};function Du(t=document){var e;const i=t?.activeElement;return i?(e=Du(i.shadowRoot))!=null?e:i:null}function nl(t){var e;const i=(e=t?.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function Vp(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function B0(t,e,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((t-i.x)*r+(e-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function Se(t,e){const i=W0(t,a=>a===e);return i||Mu(t,e)}function W0(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(e(s.selectorText))return s}}function Mu(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r?.[r.length-1];if(!n?.sheet)return console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const s=n?.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length);return(a=n.sheet.cssRules)==null?void 0:a[s]}function re(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function he(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}re(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function G(t,e){return t.hasAttribute(e)}function z(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}G(t,e)!=i&&t.toggleAttribute(e,i)}function le(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function ne(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;le(t,e,void 0)!==a&&t.setAttribute(e,a)}var qp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},vt=(t,e,i)=>(qp(t,e,"read from private field"),i?i.call(t):e.get(t)),F0=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Wn=(t,e,i,a)=>(qp(t,e,"write to private field"),e.set(t,i),i),Ne;function K0(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class sl extends b.HTMLElement{constructor(){if(super(),F0(this,Ne,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[j.MEDIA_CONTROLLER,c.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===j.MEDIA_CONTROLLER&&(i&&((n=(r=vt(this,Ne))==null?void 0:r.unassociateElement)==null||n.call(r,this),Wn(this,Ne,null)),a&&this.isConnected&&(Wn(this,Ne,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=vt(this,Ne))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Wn(this,Ne,V0(this)),this.getAttribute(j.MEDIA_CONTROLLER)&&((i=(e=vt(this,Ne))==null?void 0:e.associateElement)==null||i.call(e,this)),vt(this,Ne)&&(vt(this,Ne).addEventListener("pointerdown",this),vt(this,Ne).addEventListener("click",this),vt(this,Ne).hasAttribute("tabindex")||(vt(this,Ne).tabIndex=0))}disconnectedCallback(){var e,i,a,r;this.getAttribute(j.MEDIA_CONTROLLER)&&((i=(e=vt(this,Ne))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=vt(this,Ne))==null||a.removeEventListener("pointerdown",this),(r=vt(this,Ne))==null||r.removeEventListener("click",this),Wn(this,Ne,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:s}=e,{left:o,top:l,width:d,height:m}=this.getBoundingClientRect(),p=n-o,h=s-l;if(p<0||h<0||p>d||h>m||d===0&&m===0)return;const u=this._pointerType||"mouse";if(this._pointerType=void 0,u===Dl.TOUCH){this.handleTap(e);return}else if(u===Dl.MOUSE||u===Dl.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return G(this,c.MEDIA_PAUSED)}set mediaPaused(e){z(this,c.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?D.MEDIA_PLAY_REQUEST:D.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new b.CustomEvent(i,{composed:!0,bubbles:!0}))}}Ne=new WeakMap;sl.shadowRootOptions={mode:"open"};sl.getTemplateHTML=K0;function V0(t){var e;const i=t.getAttribute(j.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):fr(t,"media-controller")}b.customElements.get("media-gesture-receiver")||b.customElements.define("media-gesture-receiver",sl);var Sh=sl,xu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ve=(t,e,i)=>(xu(t,e,"read from private field"),i?i.call(t):e.get(t)),Ke=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},bt=(t,e,i,a)=>(xu(t,e,"write to private field"),e.set(t,i),i),It=(t,e,i)=>(xu(t,e,"access private method"),i),Wr,To,wa,hr,za,sd,Sa,_s,od,Yp,ld,Gp,wn,ol,ll,Ou,mr,Sn,ki,bs;const P={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function q0(t){return`
    <style>
      
      :host([${c.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
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

      :host(:not([${P.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
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

      
      :host([${P.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${P.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${P.AUDIO}])[${P.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${P.AUDIO}])[${P.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${P.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${P.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${P.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
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

      
      :host(:not([${P.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${P.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${P.USER_INACTIVE}]:not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_AIRPLAYING}]):not([${c.MEDIA_IS_CASTING}]):not([${P.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${P.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${P.USER_INACTIVE}]:not([${P.NO_AUTOHIDE}]):not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_CASTING}]):not([${P.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${P.USER_INACTIVE}][${P.AUTOHIDE_OVER_CONTROLS}]:not([${P.NO_AUTOHIDE}]):not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_CASTING}]):not([${P.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${P.AUDIO}])[${c.MEDIA_HAS_PLAYED}]) slot[name=poster] {
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
        <template shadowrootmode="${Sh.shadowRootOptions.mode}">
          ${Sh.getTemplateHTML({})}
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
  `}const Y0=Object.values(c),G0="sm:384 md:576 lg:768 xl:960";function z0(t){zp(t.target,t.contentRect.width)}function zp(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(P.BREAKPOINTS))!=null?i:G0,r=Q0(a),n=j0(r,e);let s=!1;if(Object.keys(r).forEach(o=>{if(n.includes(o)){t.hasAttribute(`breakpoint${o}`)||(t.setAttribute(`breakpoint${o}`,""),s=!0);return}t.hasAttribute(`breakpoint${o}`)&&(t.removeAttribute(`breakpoint${o}`),s=!0)}),s){const o=new CustomEvent(Xt.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(o)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(Xt.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function Q0(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function j0(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class dl extends b.HTMLElement{constructor(){if(super(),Ke(this,od),Ke(this,ld),Ke(this,wn),Ke(this,ll),Ke(this,mr),Ke(this,Wr,void 0),Ke(this,To,0),Ke(this,wa,null),Ke(this,hr,null),Ke(this,za,void 0),this.breakpointsComputed=!1,Ke(this,sd,e=>{const i=this.media;for(const a of e){if(a.type!=="childList")continue;const r=a.removedNodes;for(const n of r){if(n.slot!="media"||a.target!=this)continue;let s=a.previousSibling&&a.previousSibling.previousElementSibling;if(!s||!i)this.mediaUnsetCallback(n);else{let o=s.slot!=="media";for(;(s=s.previousSibling)!==null;)s.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(n)}}if(i)for(const n of a.addedNodes)n===i&&this.handleMediaUpdated(i)}}),Ke(this,Sa,!1),Ke(this,_s,e=>{ve(this,Sa)||(setTimeout(()=>{z0(e),bt(this,Sa,!1)},0),bt(this,Sa,!0))}),Ke(this,ki,void 0),Ke(this,bs,()=>{if(!ve(this,ki).assignedElements({flatten:!0}).length){ve(this,wa)&&this.mediaUnsetCallback(ve(this,wa));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}bt(this,Wr,new MutationObserver(ve(this,sd)))}static get observedAttributes(){return[P.AUTOHIDE,P.GESTURES_DISABLED].concat(Y0).filter(e=>![c.MEDIA_RENDITION_LIST,c.MEDIA_AUDIO_TRACK_LIST,c.MEDIA_CHAPTERS_CUES,c.MEDIA_WIDTH,c.MEDIA_HEIGHT,c.MEDIA_ERROR,c.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==P.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(bt(this,wa,e),e.localName.includes("-")&&await b.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;ve(this,Wr).observe(this,{childList:!0,subtree:!0}),ur(this,ve(this,_s));const i=this.getAttribute(P.AUDIO)!=null,a=L(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(P.USER_INACTIVE,""),zp(this,this.getBoundingClientRect().width);const r=this.querySelector(":scope > slot[slot=media]");r&&(bt(this,ki,r),ve(this,ki).addEventListener("slotchange",ve(this,bs))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=b.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;cr(this,ve(this,_s)),clearTimeout(ve(this,hr)),ve(this,Wr).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=b.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),ve(this,ki)&&(ve(this,ki).removeEventListener("slotchange",ve(this,bs)),bt(this,ki,null)),bt(this,Sa,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){bt(this,wa,null)}handleEvent(e){switch(e.type){case"pointerdown":bt(this,To,e.timeStamp);break;case"pointermove":It(this,od,Yp).call(this,e);break;case"pointerup":It(this,ld,Gp).call(this,e);break;case"mouseleave":It(this,wn,ol).call(this);break;case"mouseup":this.removeAttribute(P.KEYBOARD_CONTROL);break;case"keyup":It(this,mr,Sn).call(this),this.setAttribute(P.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);bt(this,za,isNaN(i)?0:i)}get autohide(){return(ve(this,za)===void 0?2:ve(this,za)).toString()}get breakpoints(){return le(this,P.BREAKPOINTS)}set breakpoints(e){ne(this,P.BREAKPOINTS,e)}get audio(){return G(this,P.AUDIO)}set audio(e){z(this,P.AUDIO,e)}get gesturesDisabled(){return G(this,P.GESTURES_DISABLED)}set gesturesDisabled(e){z(this,P.GESTURES_DISABLED,e)}get keyboardControl(){return G(this,P.KEYBOARD_CONTROL)}set keyboardControl(e){z(this,P.KEYBOARD_CONTROL,e)}get noAutohide(){return G(this,P.NO_AUTOHIDE)}set noAutohide(e){z(this,P.NO_AUTOHIDE,e)}get autohideOverControls(){return G(this,P.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){z(this,P.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return G(this,P.USER_INACTIVE)}set userInteractive(e){z(this,P.USER_INACTIVE,e)}}Wr=new WeakMap;To=new WeakMap;wa=new WeakMap;hr=new WeakMap;za=new WeakMap;sd=new WeakMap;Sa=new WeakMap;_s=new WeakMap;od=new WeakSet;Yp=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-ve(this,To)<250)return;It(this,ll,Ou).call(this),clearTimeout(ve(this,hr));const e=this.hasAttribute(P.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&It(this,mr,Sn).call(this)};ld=new WeakSet;Gp=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(P.USER_INACTIVE);[this,this.media].includes(t.target)&&e?It(this,wn,ol).call(this):It(this,mr,Sn).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e?.localName))&&It(this,mr,Sn).call(this)};wn=new WeakSet;ol=function(){if(ve(this,za)<0||this.hasAttribute(P.USER_INACTIVE))return;this.setAttribute(P.USER_INACTIVE,"");const t=new b.CustomEvent(Xt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};ll=new WeakSet;Ou=function(){if(!this.hasAttribute(P.USER_INACTIVE))return;this.removeAttribute(P.USER_INACTIVE);const t=new b.CustomEvent(Xt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};mr=new WeakSet;Sn=function(){It(this,ll,Ou).call(this),clearTimeout(ve(this,hr));const t=parseInt(this.autohide);t<0||bt(this,hr,setTimeout(()=>{It(this,wn,ol).call(this)},t*1e3))};ki=new WeakMap;bs=new WeakMap;dl.shadowRootOptions={mode:"open"};dl.getTemplateHTML=q0;b.customElements.get("media-container")||b.customElements.define("media-container",dl);var Qp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},De=(t,e,i)=>(Qp(t,e,"read from private field"),i?i.call(t):e.get(t)),kr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Fn=(t,e,i,a)=>(Qp(t,e,"write to private field"),e.set(t,i),i),Ia,Ra,Ao,ra,ri,wi;class Nu{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){kr(this,ri),kr(this,Ia,void 0),kr(this,Ra,void 0),kr(this,Ao,void 0),kr(this,ra,new Set),Fn(this,Ia,e),Fn(this,Ra,i),Fn(this,Ao,new Set(a))}[Symbol.iterator](){return De(this,ri,wi).values()}get length(){return De(this,ri,wi).size}get value(){var e;return(e=[...De(this,ri,wi)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Fn(this,ra,new Set),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...De(this,ri,wi)][e]}values(){return De(this,ri,wi).values()}forEach(e,i){De(this,ri,wi).forEach(e,i)}add(...e){var i,a;e.forEach(r=>De(this,ra).add(r)),!(this.value===""&&!((i=De(this,Ia))!=null&&i.hasAttribute(`${De(this,Ra)}`)))&&((a=De(this,Ia))==null||a.setAttribute(`${De(this,Ra)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>De(this,ra).delete(a)),(i=De(this,Ia))==null||i.setAttribute(`${De(this,Ra)}`,`${this.value}`)}contains(e){return De(this,ri,wi).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}Ia=new WeakMap;Ra=new WeakMap;Ao=new WeakMap;ra=new WeakMap;ri=new WeakSet;wi=function(){return De(this,ra).size?De(this,ra):De(this,Ao)};const Z0=(t="")=>t.split(/\s+/),jp=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?jt.CAPTIONS:jt.SUBTITLES,language:i,label:r}},ul=(t="",e={})=>Z0(t).map(i=>{const a=jp(i);return{...e,...a}}),Zp=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?jp(e):e):typeof t=="string"?ul(t):[t]:[],dd=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,In=(t=[])=>Array.prototype.map.call(t,dd).join(" "),X0=(t,e)=>i=>i[t]===e,Xp=t=>{const e=Object.entries(t).map(([i,a])=>X0(i,a));return i=>e.every(a=>a(i))},un=(t,e=[],i=[])=>{const a=Zp(i).map(Xp),r=n=>a.some(s=>s(n));Array.from(e).filter(r).forEach(n=>{n.mode=t})},cl=(t,e=()=>!0)=>{if(!t?.textTracks)return[];const i=typeof e=="function"?e:Xp(e);return Array.from(t.textTracks).filter(i)},Jp=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(c.MEDIA_SUBTITLES_SHOWING)},J0=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(e=a[r])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},Ih="exitFullscreen"in Ae?"exitFullscreen":"webkitExitFullscreen"in Ae?"webkitExitFullscreen":"webkitCancelFullScreen"in Ae?"webkitCancelFullScreen":void 0,ey=t=>{var e;const{documentElement:i}=t;if(Ih){const a=(e=i?.[Ih])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},Fr="fullscreenElement"in Ae?"fullscreenElement":"webkitFullscreenElement"in Ae?"webkitFullscreenElement":void 0,ty=t=>{const{documentElement:e,media:i}=t,a=e?.[Fr];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===k0.FULLSCREEN?i:a},iy=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const n=ty(t);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(Fr in s))return bi(n,r);for(;s?.[Fr];){if(s[Fr]===r)return!0;s=(e=s[Fr])==null?void 0:e.shadowRoot}}return!1},ay="fullscreenEnabled"in Ae?"fullscreenEnabled":"webkitFullscreenEnabled"in Ae?"webkitFullscreenEnabled":void 0,ry=t=>{const{documentElement:e,media:i}=t;return!!e?.[ay]||i&&"webkitSupportsFullscreen"in i};let Kn;const Pu=()=>{var t,e;return Kn||(Kn=(e=(t=Ae)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),Kn)},ny=async(t=Pu())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([sy(t,i.signal),oy(t,e)]);return i.abort(),a},sy=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),oy=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await Np(10)}return t.volume!==e},ly=/.*Version\/.*Safari\/.*/.test(b.navigator.userAgent),ev=(t=Pu())=>b.matchMedia("(display-mode: standalone)").matches&&ly?!1:typeof t?.requestPictureInPicture=="function",tv=(t=Pu())=>ry({documentElement:Ae,media:t}),dy=tv(),uy=ev(),cy=!!b.WebKitPlaybackTargetAvailabilityEvent,hy=!!b.chrome,ko=t=>cl(t.media,e=>[jt.SUBTITLES,jt.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),iv=t=>cl(t.media,e=>e.mode===er.SHOWING&&[jt.SUBTITLES,jt.CAPTIONS].includes(e.kind)),av=(t,e)=>{const i=ko(t),a=iv(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)un(er.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let n=i[0];const{options:s}=t;if(!s?.noSubtitlesLangPref){const m=b.localStorage.getItem("media-chrome-pref-subtitles-lang"),p=m?[m,...b.navigator.languages]:b.navigator.languages,h=i.filter(u=>p.some(v=>u.language.toLowerCase().startsWith(v.split("-")[0]))).sort((u,v)=>{const E=p.findIndex(y=>u.language.toLowerCase().startsWith(y.split("-")[0])),g=p.findIndex(y=>v.language.toLowerCase().startsWith(y.split("-")[0]));return E-g});h[0]&&(n=h[0])}const{language:o,label:l,kind:d}=n;un(er.DISABLED,i,a),un(er.SHOWING,i,[{language:o,label:l,kind:d}])}}},$u=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?my(t,e):Object.entries(t).every(([i,a])=>i in e&&$u(a,e[i])),my=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,n)=>$u(r,e[n])):!0},py=Object.values(di);let wo;const vy=ny().then(t=>(wo=t,wo)),fy=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof b.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=b.customElements.get(i);a&&e instanceof a||(await b.customElements.whenDefined(i),b.customElements.upgrade(e))}))},Ey=new b.DOMParser,_y=t=>t&&(Ey.parseFromString(t,"text/html").body.textContent||t),Kr={mediaError:{get(t,e){const{media:i}=t;if(e?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if(e?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if(e?.type!=="playing")return(a=(i=r?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i?.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i?.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i?.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i?.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i?.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i?.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const r=b.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&b.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;b.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=b.localStorage.getItem("media-chrome-pref-muted")==="true";Kr.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){const{media:e}=t;return e?.loop},set(t,e){const{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i?.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?b.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&b.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=b.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Kr.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof e?.volume>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i?.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!Lu(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata","seeking"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e?.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return e?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i?.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i?.buffered)!=null?e:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[di.LIVE,di.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(py.includes(r))return r===di.UNKNOWN?a:r;const n=e.duration;return n===1/0?di.LIVE:Number.isFinite(n)?di.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=Kr.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===di.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(Kr.mediaStreamType.get(t)===di.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return ko(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return iv(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:n}=e;if(!r)return;const s=o=>{var l;!n.defaultSubtitles||o&&![jt.CAPTIONS,jt.SUBTITLES].includes((l=o?.track)==null?void 0:l.kind)||av(e,!0)};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=cl(i,{kind:jt.CHAPTERS});return Array.from((e=a?.cues)!=null?e:[]).map(({text:r,startTime:n,endTime:s})=>({text:_y(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",t),n?.addEventListener("load",t),()=>{r?.removeEventListener("load",t),n?.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?bi(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!Ae.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else Ae.pictureInPictureElement&&Ae.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i?.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r?.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i?.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a?.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return iy(t)},set(t,e,i){var a,r;t?(J0(e),i.detail&&!((a=e.media)!=null&&a.inert)&&((r=e.media)==null||r.focus())):ey(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!i?.remote||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:i.remote.state==="connected"},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&b.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!dy||!tv(e))return Je.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!uy||!ev(e))return Je.UNSUPPORTED;if(e?.disablePictureInPicture)return Je.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(wo===!1||e?.volume==null)return Je.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{wo==null&&vy.then(e=>t(e?void 0:Je.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!hy||!((i=a?.remote)!=null&&i.state))return Je.UNSUPPORTED;if(!(e==null||e==="available"))return Je.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!cy)return Je.UNSUPPORTED;if(e?.availability==="not-available")return Je.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!i?.videoRenditions)return Je.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return Je.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!a?.audioTracks)return Je.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return Je.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},by={[D.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,n;const{media:s}=e,o=i??void 0;let l,d;if(s&&o!=null){const[u]=cl(s,{kind:jt.METADATA,label:"thumbnails"}),v=Array.prototype.find.call((a=u?.cues)!=null?a:[],(E,g,y)=>g===0?E.endTime>o:g===y.length-1?E.startTime<=o:E.startTime<=o&&E.endTime>o);if(v){const E=/'^(?:[a-z]+:)?\/\//i.test(v.text)||(r=s?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,g=new URL(v.text,E);d=new URLSearchParams(g.hash).get("#xywh").split(",").map(T=>+T),l=g.href}}const m=t.mediaDuration.get(e);let h=(n=t.mediaChaptersCues.get(e).find((u,v,E)=>v===E.length-1&&m===u.endTime?u.startTime<=o&&u.endTime>=o:u.startTime<=o&&u.endTime>o))==null?void 0:n.text;return i!=null&&h==null&&(h=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:d,mediaPreviewChapter:h}},[D.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[D.MEDIA_PLAY_REQUEST](t,e){var i,a,r,n;const s="mediaPaused",l=t.mediaStreamType.get(e)===di.LIVE,d=!((i=e.options)!=null&&i.noAutoSeekToLive),m=t.mediaTargetLiveWindow.get(e)>0;if(l&&d&&!m){const p=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(p){const h=(n=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,u=p-h;t.mediaCurrentTime.set(u,e)}}t[s].set(!1,e)},[D.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[D.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[D.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[D.MEDIA_LOOP_REQUEST](t,e,{detail:i}){const a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[D.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[D.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[D.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const n="mediaCurrentTime",s=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,l=s-o;t[n].set(l,e)},[D.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,n=ko(e),s=Zp(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&b.localStorage.setItem("media-chrome-pref-subtitles-lang",o),un(er.SHOWING,n,s)},[D.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=ko(e),r=i??[];un(er.DISABLED,a,r)},[D.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){av(e,i)},[D.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[D.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[D.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[D.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[D.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[D.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[D.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[D.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[D.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},gy=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=Kr,requestMap:r=by,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:{...n}};let d=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const m=E=>{E!=null&&($u(E,d)||(d=Object.freeze({...d,...E}),o.forEach(g=>g(d))))},p=()=>{const E=Object.entries(a).reduce((g,[y,{get:T}])=>(g[y]=T(l),g),{});m(E)},h={};let u;const v=async(E,g)=>{var y,T,_,k,C,M,S,U,q,W,B,Pe,Qe,je,_e,Be;const Lt=!!u;if(u={...l,...u??{},...E},Lt)return;await fy(...Object.values(E));const We=o.length>0&&g===0&&s,mt=l.media!==u.media,Ze=((y=l.media)==null?void 0:y.textTracks)!==((T=u.media)==null?void 0:T.textTracks),Re=((_=l.media)==null?void 0:_.videoRenditions)!==((k=u.media)==null?void 0:k.videoRenditions),Jt=((C=l.media)==null?void 0:C.audioTracks)!==((M=u.media)==null?void 0:M.audioTracks),$e=((S=l.media)==null?void 0:S.remote)!==((U=u.media)==null?void 0:U.remote),Fe=l.documentElement!==u.documentElement,ei=!!l.media&&(mt||We),yr=!!((q=l.media)!=null&&q.textTracks)&&(Ze||We),Bc=!!((W=l.media)!=null&&W.videoRenditions)&&(Re||We),Wc=!!((B=l.media)!=null&&B.audioTracks)&&(Jt||We),Fc=!!((Pe=l.media)!=null&&Pe.remote)&&($e||We),Kc=!!l.documentElement&&(Fe||We),Tl=ei||yr||Bc||Wc||Fc||Kc,va=o.length===0&&g===1&&s,Vc=!!u.media&&(mt||va),qc=!!((Qe=u.media)!=null&&Qe.textTracks)&&(Ze||va),Yc=!!((je=u.media)!=null&&je.videoRenditions)&&(Re||va),Gc=!!((_e=u.media)!=null&&_e.audioTracks)&&(Jt||va),zc=!!((Be=u.media)!=null&&Be.remote)&&($e||va),Qc=!!u.documentElement&&(Fe||va),jc=Vc||qc||Yc||Gc||zc||Qc;if(!(Tl||jc)){Object.entries(u).forEach(([ee,Tr])=>{l[ee]=Tr}),p(),u=void 0;return}Object.entries(a).forEach(([ee,{get:Tr,mediaEvents:Hf=[],textTracksEvents:Bf=[],videoRenditionsEvents:Wf=[],audioTracksEvents:Ff=[],remoteEvents:Kf=[],rootEvents:Vf=[],stateOwnersUpdateHandlers:qf=[]}])=>{h[ee]||(h[ee]={});const Xe=de=>{const be=Tr(l,de);m({[ee]:be})};let Le;Le=h[ee].mediaEvents,Hf.forEach(de=>{Le&&ei&&(l.media.removeEventListener(de,Le),h[ee].mediaEvents=void 0),Vc&&(u.media.addEventListener(de,Xe),h[ee].mediaEvents=Xe)}),Le=h[ee].textTracksEvents,Bf.forEach(de=>{var be,pt;Le&&yr&&((be=l.media.textTracks)==null||be.removeEventListener(de,Le),h[ee].textTracksEvents=void 0),qc&&((pt=u.media.textTracks)==null||pt.addEventListener(de,Xe),h[ee].textTracksEvents=Xe)}),Le=h[ee].videoRenditionsEvents,Wf.forEach(de=>{var be,pt;Le&&Bc&&((be=l.media.videoRenditions)==null||be.removeEventListener(de,Le),h[ee].videoRenditionsEvents=void 0),Yc&&((pt=u.media.videoRenditions)==null||pt.addEventListener(de,Xe),h[ee].videoRenditionsEvents=Xe)}),Le=h[ee].audioTracksEvents,Ff.forEach(de=>{var be,pt;Le&&Wc&&((be=l.media.audioTracks)==null||be.removeEventListener(de,Le),h[ee].audioTracksEvents=void 0),Gc&&((pt=u.media.audioTracks)==null||pt.addEventListener(de,Xe),h[ee].audioTracksEvents=Xe)}),Le=h[ee].remoteEvents,Kf.forEach(de=>{var be,pt;Le&&Fc&&((be=l.media.remote)==null||be.removeEventListener(de,Le),h[ee].remoteEvents=void 0),zc&&((pt=u.media.remote)==null||pt.addEventListener(de,Xe),h[ee].remoteEvents=Xe)}),Le=h[ee].rootEvents,Vf.forEach(de=>{Le&&Kc&&(l.documentElement.removeEventListener(de,Le),h[ee].rootEvents=void 0),Qc&&(u.documentElement.addEventListener(de,Xe),h[ee].rootEvents=Xe)});const $n=h[ee].stateOwnersUpdateHandlers;if($n&&Tl&&(Array.isArray($n)?$n:[$n]).forEach(be=>{typeof be=="function"&&be()}),jc){const de=qf.map(be=>be(Xe,u)).filter(be=>typeof be=="function");h[ee].stateOwnersUpdateHandlers=de.length===1?de[0]:de}else Tl&&(h[ee].stateOwnersUpdateHandlers=void 0)}),Object.entries(u).forEach(([ee,Tr])=>{l[ee]=Tr}),p(),u=void 0};return v({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(E){const{type:g,detail:y}=E;if(r[g]&&d.mediaErrorCode==null){m(r[g](a,l,E));return}g==="mediaelementchangerequest"?v({media:y}):g==="fullscreenelementchangerequest"?v({fullscreenElement:y}):g==="documentelementchangerequest"?v({documentElement:y}):g==="optionschangerequest"&&(Object.entries(y??{}).forEach(([T,_])=>{l.options[T]=_}),p())},getState(){return d},subscribe(E){return v({},o.length+1),o.push(E),E(d),()=>{const g=o.indexOf(E);g>=0&&(v({},o.length-1),o.splice(g,1))}}}};var Uu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},O=(t,e,i)=>(Uu(t,e,"read from private field"),i?i.call(t):e.get(t)),nt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},gt=(t,e,i,a)=>(Uu(t,e,"write to private field"),e.set(t,i),i),wr=(t,e,i)=>(Uu(t,e,"access private method"),i),ci,Vr,Y,zt,qr,Ot,gs,Yr,ys,ud,la,Ts,cd,hd,rv;const nv=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],Rh=10,Lh=.025,Ch=.25,yy=.25,Ty=2,w={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class sv extends dl{constructor(){super(),nt(this,ys),nt(this,Ts),nt(this,hd),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,nt(this,ci,new Nu(this,w.HOTKEYS)),nt(this,Vr,void 0),nt(this,Y,void 0),nt(this,zt,null),nt(this,qr,void 0),nt(this,Ot,void 0),nt(this,gs,i=>{var a;(a=O(this,Y))==null||a.dispatch(i)}),nt(this,Yr,void 0),nt(this,la,i=>{const{key:a,shiftKey:r}=i;if(!(r&&(a==="/"||a==="?")||nv.includes(a))){this.removeEventListener("keyup",O(this,la));return}this.keyboardShortcutHandler(i)}),this.associateElement(this);let e={};gt(this,qr,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),s=new b.CustomEvent(A0[n],{composed:!0,detail:r});this.dispatchEvent(s)}),e=i})}static get observedAttributes(){return super.observedAttributes.concat(w.NO_HOTKEYS,w.HOTKEYS,w.DEFAULT_STREAM_TYPE,w.DEFAULT_SUBTITLES,w.DEFAULT_DURATION,w.NO_MUTED_PREF,w.NO_VOLUME_PREF,w.LANG,w.LOOP,w.LIVE_EDGE_OFFSET,w.SEEK_TO_LIVE_OFFSET,w.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return O(this,Y)}set mediaStore(e){var i,a;if(O(this,Y)&&((i=O(this,Ot))==null||i.call(this),gt(this,Ot,void 0)),gt(this,Y,e),!O(this,Y)&&!this.hasAttribute(w.NO_DEFAULT_STORE)){wr(this,ys,ud).call(this);return}gt(this,Ot,(a=O(this,Y))==null?void 0:a.subscribe(O(this,qr)))}get fullscreenElement(){var e;return(e=O(this,Vr))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(w.FULLSCREEN_ELEMENT)&&this.removeAttribute(w.FULLSCREEN_ELEMENT),gt(this,Vr,e),(i=O(this,Y))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return G(this,w.DEFAULT_SUBTITLES)}set defaultSubtitles(e){z(this,w.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return le(this,w.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){ne(this,w.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return re(this,w.DEFAULT_DURATION)}set defaultDuration(e){he(this,w.DEFAULT_DURATION,e)}get noHotkeys(){return G(this,w.NO_HOTKEYS)}set noHotkeys(e){z(this,w.NO_HOTKEYS,e)}get keysUsed(){return le(this,w.KEYS_USED)}set keysUsed(e){ne(this,w.KEYS_USED,e)}get liveEdgeOffset(){return re(this,w.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){he(this,w.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return G(this,w.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){z(this,w.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return G(this,w.NO_VOLUME_PREF)}set noVolumePref(e){z(this,w.NO_VOLUME_PREF,e)}get noMutedPref(){return G(this,w.NO_MUTED_PREF)}set noMutedPref(e){z(this,w.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return G(this,w.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){z(this,w.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return G(this,w.NO_DEFAULT_STORE)}set noDefaultStore(e){z(this,w.NO_DEFAULT_STORE,e)}get resolvedLang(){return $0()}attributeChangedCallback(e,i,a){var r,n,s,o,l,d,m,p,h,u,v,E;if(super.attributeChangedCallback(e,i,a),e===w.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(w.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===w.HOTKEYS)O(this,ci).value=a;else if(e===w.DEFAULT_SUBTITLES&&a!==i)(r=O(this,Y))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(w.DEFAULT_SUBTITLES)}});else if(e===w.DEFAULT_STREAM_TYPE)(s=O(this,Y))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(w.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===w.LIVE_EDGE_OFFSET&&a!==i)(o=O(this,Y))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(w.SEEK_TO_LIVE_OFFSET):this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0}});else if(e===w.SEEK_TO_LIVE_OFFSET&&a!==i)(l=O(this,Y))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(w.SEEK_TO_LIVE_OFFSET):this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0}});else if(e===w.NO_AUTO_SEEK_TO_LIVE)(d=O(this,Y))==null||d.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(w.NO_AUTO_SEEK_TO_LIVE)}});else if(e===w.FULLSCREEN_ELEMENT){const g=a?(m=this.getRootNode())==null?void 0:m.getElementById(a):void 0;gt(this,Vr,g),(p=O(this,Y))==null||p.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===w.LANG&&a!==i?(N0(a),(h=O(this,Y))==null||h.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===w.LOOP&&a!==i?(u=O(this,Y))==null||u.dispatch({type:D.MEDIA_LOOP_REQUEST,detail:a!=null}):e===w.NO_VOLUME_PREF&&a!==i?(v=O(this,Y))==null||v.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(w.NO_VOLUME_PREF)}}):e===w.NO_MUTED_PREF&&a!==i&&((E=O(this,Y))==null||E.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(w.NO_MUTED_PREF)}}))}connectedCallback(){var e,i,a;this.associateElement(this),!O(this,Y)&&!this.hasAttribute(w.NO_DEFAULT_STORE)&&wr(this,ys,ud).call(this),(e=O(this,Y))==null||e.dispatch({type:"documentelementchangerequest",detail:Ae}),(i=O(this,Y))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),O(this,Y)&&!O(this,Ot)&&gt(this,Ot,(a=O(this,Y))==null?void 0:a.subscribe(O(this,qr))),O(this,Yr)!==void 0&&O(this,Y)&&this.media&&setTimeout(()=>{var r,n,s;(n=(r=this.media)==null?void 0:r.textTracks)!=null&&n.length&&((s=O(this,Y))==null||s.dispatch({type:D.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:O(this,Yr)}))},0),this.hasAttribute(w.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r,n,s;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),O(this,Y)){const o=O(this,Y).getState();gt(this,Yr,!!((i=o.mediaSubtitlesShowing)!=null&&i.length)),(a=O(this,Y))==null||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(r=O(this,Y))==null||r.dispatch({type:"documentelementchangerequest",detail:void 0}),(n=O(this,Y))==null||n.dispatch({type:D.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}O(this,Ot)&&((s=O(this,Ot))==null||s.call(this),gt(this,Ot,void 0)),this.unassociateElement(this),O(this,zt)&&(O(this,zt).remove(),gt(this,zt,null))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=O(this,Y))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=O(this,Y))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){xh(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=Ry(e,a,r);Object.values(D).forEach(s=>{e.addEventListener(s,O(this,gs))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(D).forEach(r=>{e.removeEventListener(r,O(this,gs))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),O(this,Y)&&Object.entries(O(this,Y).getState()).forEach(([r,n])=>{xh([e],r,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",wr(this,Ts,cd))}disableHotkeys(){this.removeEventListener("keydown",wr(this,Ts,cd)),this.removeEventListener("keyup",O(this,la))}get hotkeys(){return O(this,ci)}set hotkeys(e){ne(this,w.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,n,s,o,l,d,m;const p=e.target;if(((r=(a=(i=p.getAttribute(w.KEYS_USED))==null?void 0:i.split(" "))!=null?a:p?.keysUsed)!=null?r:[]).map(y=>y==="Space"?" ":y).filter(Boolean).includes(e.key))return;let u,v,E;if(!(O(this,ci).contains(`no${e.key.toLowerCase()}`)||e.key===" "&&O(this,ci).contains("nospace")||e.shiftKey&&(e.key==="/"||e.key==="?")&&O(this,ci).contains("noshift+/")))switch(e.key){case" ":case"k":u=O(this,Y).getState().mediaPaused?D.MEDIA_PLAY_REQUEST:D.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new b.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u=this.mediaStore.getState().mediaVolumeLevel==="off"?D.MEDIA_UNMUTE_REQUEST:D.MEDIA_MUTE_REQUEST,this.dispatchEvent(new b.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?D.MEDIA_EXIT_FULLSCREEN_REQUEST:D.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new b.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new b.CustomEvent(D.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const y=this.hasAttribute(w.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(w.KEYBOARD_BACKWARD_SEEK_OFFSET):Rh;v=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-y,0),E=new b.CustomEvent(D.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(E);break}case"ArrowRight":case"l":{const y=this.hasAttribute(w.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(w.KEYBOARD_FORWARD_SEEK_OFFSET):Rh;v=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+y,0),E=new b.CustomEvent(D.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(E);break}case"ArrowUp":{const y=this.hasAttribute(w.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(w.KEYBOARD_UP_VOLUME_STEP):Lh;v=Math.min(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)+y,1),E=new b.CustomEvent(D.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(E);break}case"ArrowDown":{const y=this.hasAttribute(w.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(w.KEYBOARD_DOWN_VOLUME_STEP):Lh;v=Math.max(((l=this.mediaStore.getState().mediaVolume)!=null?l:1)-y,0),E=new b.CustomEvent(D.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(E);break}case"<":{const y=(d=this.mediaStore.getState().mediaPlaybackRate)!=null?d:1;v=Math.max(y-Ch,yy).toFixed(2),E=new b.CustomEvent(D.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(E);break}case">":{const y=(m=this.mediaStore.getState().mediaPlaybackRate)!=null?m:1;v=Math.min(y+Ch,Ty).toFixed(2),E=new b.CustomEvent(D.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(E);break}case"/":case"?":{e.shiftKey&&wr(this,hd,rv).call(this);break}case"p":{u=this.mediaStore.getState().mediaIsPip?D.MEDIA_EXIT_PIP_REQUEST:D.MEDIA_ENTER_PIP_REQUEST,E=new b.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(E);break}}}}ci=new WeakMap;Vr=new WeakMap;Y=new WeakMap;zt=new WeakMap;qr=new WeakMap;Ot=new WeakMap;gs=new WeakMap;Yr=new WeakMap;ys=new WeakSet;ud=function(){var t;this.mediaStore=gy({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(w.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(w.DEFAULT_DURATION)?+this.getAttribute(w.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(w.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(w.SEEK_TO_LIVE_OFFSET):this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(w.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(w.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(w.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(w.NO_SUBTITLES_LANG_PREF)}})};la=new WeakMap;Ts=new WeakSet;cd=function(t){var e;const{metaKey:i,altKey:a,key:r,shiftKey:n}=t,s=n&&(r==="/"||r==="?");if(s&&((e=O(this,zt))!=null&&e.open)){this.removeEventListener("keyup",O(this,la));return}if(i||a||!s&&!nv.includes(r)){this.removeEventListener("keyup",O(this,la));return}const o=t.target,l=o instanceof HTMLElement&&(o.tagName.toLowerCase()==="media-volume-range"||o.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!(O(this,ci).contains(`no${r.toLowerCase()}`)||r===" "&&O(this,ci).contains("nospace"))&&!l&&t.preventDefault(),this.addEventListener("keyup",O(this,la),{once:!0})};hd=new WeakSet;rv=function(){O(this,zt)||(gt(this,zt,Ae.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(O(this,zt))),O(this,zt).open=!0};const Ay=Object.values(c),ky=Object.values(Mp),ov=t=>{var e,i,a,r;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(b.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const s=(r=(a=(i=t?.getAttribute)==null?void 0:i.call(t,j.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>Ay.includes(o)):[]},wy=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&b.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof b.customElements.get(t.nodeName.toLowerCase()))&&b.customElements.upgrade(t),ky.some(a=>a in t)},md=t=>wy(t)||!!ov(t).length,Dh=t=>{var e;return(e=t?.join)==null?void 0:e.call(t,":")},Mh={[c.MEDIA_SUBTITLES_LIST]:In,[c.MEDIA_SUBTITLES_SHOWING]:In,[c.MEDIA_SEEKABLE]:Dh,[c.MEDIA_BUFFERED]:t=>t?.map(Dh).join(" "),[c.MEDIA_PREVIEW_COORDS]:t=>t?.join(" "),[c.MEDIA_RENDITION_LIST]:w0,[c.MEDIA_AUDIO_TRACK_LIST]:L0},Sy=async(t,e,i)=>{var a,r;if(t.isConnected||await Np(0),typeof i=="boolean"||i==null)return z(t,e,i);if(typeof i=="number")return he(t,e,i);if(typeof i=="string")return ne(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(r=(a=Mh[e])==null?void 0:a.call(Mh,i))!=null?r:i;return t.setAttribute(e,n)},Iy=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},ji=(t,e)=>{if(Iy(t))return;const i=(r,n)=>{var s,o;md(r)&&n(r);const{children:l=[]}=r??{},d=(o=(s=r?.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...d].forEach(p=>ji(p,n))},a=t?.nodeName.toLowerCase();if(a.includes("-")&&!md(t)){b.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},xh=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=ov(a),n=e.toLowerCase();r.includes(n)&&Sy(a,n,i)})},Ry=(t,e,i)=>{ji(t,e);const a=m=>{var p;const h=(p=m?.composedPath()[0])!=null?p:m.target;e(h)},r=m=>{var p;const h=(p=m?.composedPath()[0])!=null?p:m.target;i(h)};t.addEventListener(D.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(D.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=m=>{m.forEach(p=>{const{addedNodes:h=[],removedNodes:u=[],type:v,target:E,attributeName:g}=p;v==="childList"?(Array.prototype.forEach.call(h,y=>ji(y,e)),Array.prototype.forEach.call(u,y=>ji(y,i))):v==="attributes"&&g===j.MEDIA_CHROME_ATTRIBUTES&&(md(E)?e(E):i(E))})};let s=[];const o=m=>{const p=m.target;p.name!=="media"&&(s.forEach(h=>ji(h,i)),s=[...p.assignedElements({flatten:!0})],s.forEach(h=>ji(h,e)))};t.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{ji(t,i),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(D.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(D.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};b.customElements.get("media-controller")||b.customElements.define("media-controller",sv);var Ly=sv;const fa={PLACEMENT:"placement",BOUNDS:"bounds"};function Cy(t){return`
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
  `}class hl extends b.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Vp(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=fr(this,"#"+this.bounds))!=null?e:ze(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),d=o+l,m=n+s,p=a.getPropertyValue("--media-tooltip-offset-x"),h=p?parseFloat(p.replace("px","")):0,u=a.getPropertyValue("--media-tooltip-container-margin"),v=u?parseFloat(u.replace("px","")):0,E=o-n+h-v,g=d-m+h+v;if(E<0){this.style.setProperty("--media-tooltip-offset-x",`${E}px`);return}if(g>0){this.style.setProperty("--media-tooltip-offset-x",`${g}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[fa.PLACEMENT,fa.BOUNDS]}get placement(){return le(this,fa.PLACEMENT)}set placement(e){ne(this,fa.PLACEMENT,e)}get bounds(){return le(this,fa.BOUNDS)}set bounds(e){ne(this,fa.BOUNDS,e)}}hl.shadowRootOptions={mode:"open"};hl.getTemplateHTML=Cy;b.customElements.get("media-tooltip")||b.customElements.define("media-tooltip",hl);var Oh=hl,Hu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ye=(t,e,i)=>(Hu(t,e,"read from private field"),i?i.call(t):e.get(t)),Ea=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Vn=(t,e,i,a)=>(Hu(t,e,"write to private field"),e.set(t,i),i),Dy=(t,e,i)=>(Hu(t,e,"access private method"),i),Nt,Qa,Pi,La,As,pd,lv;const gi={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function My(t,e={}){return`
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

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Oh.shadowRootOptions.mode}">
          ${Oh.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function xy(t,e){return`
    <slot></slot>
  `}function Oy(){return""}class xe extends b.HTMLElement{constructor(){if(super(),Ea(this,pd),Ea(this,Nt,void 0),this.preventClick=!1,this.tooltipEl=null,Ea(this,Qa,e=>{this.preventClick||this.handleClick(e),setTimeout(ye(this,Pi),0)}),Ea(this,Pi,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),Ea(this,La,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",ye(this,La));return}this.preventClick||this.handleClick(e)}),Ea(this,As,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",ye(this,La));return}this.addEventListener("keyup",ye(this,La),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",gi.TOOLTIP_PLACEMENT,j.MEDIA_CONTROLLER,c.MEDIA_LANG]}enable(){this.addEventListener("click",ye(this,Qa)),this.addEventListener("keydown",ye(this,As)),this.tabIndex=0}disable(){this.removeEventListener("click",ye(this,Qa)),this.removeEventListener("keydown",ye(this,As)),this.removeEventListener("keyup",ye(this,La)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===j.MEDIA_CONTROLLER?(i&&((n=(r=ye(this,Nt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Vn(this,Nt,null)),a&&this.isConnected&&(Vn(this,Nt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=ye(this,Nt))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===gi.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===c.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),ye(this,Pi).call(this)}connectedCallback(){var e,i,a;const{style:r}=Se(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(j.MEDIA_CONTROLLER);n&&(Vn(this,Nt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=ye(this,Nt))==null?void 0:i.associateElement)==null||a.call(i,this)),b.customElements.whenDefined("media-tooltip").then(()=>Dy(this,pd,lv).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=ye(this,Nt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Vn(this,Nt,null),this.removeEventListener("mouseenter",ye(this,Pi)),this.removeEventListener("focus",ye(this,Pi)),this.removeEventListener("click",ye(this,Qa))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return le(this,gi.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){ne(this,gi.TOOLTIP_PLACEMENT,e)}get mediaController(){return le(this,j.MEDIA_CONTROLLER)}set mediaController(e){ne(this,j.MEDIA_CONTROLLER,e)}get disabled(){return G(this,gi.DISABLED)}set disabled(e){z(this,gi.DISABLED,e)}get noTooltip(){return G(this,gi.NO_TOOLTIP)}set noTooltip(e){z(this,gi.NO_TOOLTIP,e)}handleClick(e){}}Nt=new WeakMap;Qa=new WeakMap;Pi=new WeakMap;La=new WeakMap;As=new WeakMap;pd=new WeakSet;lv=function(){this.addEventListener("mouseenter",ye(this,Pi)),this.addEventListener("focus",ye(this,Pi)),this.addEventListener("click",ye(this,Qa));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};xe.shadowRootOptions={mode:"open"};xe.getTemplateHTML=My;xe.getSlotTemplateHTML=xy;xe.getTooltipContentHTML=Oy;b.customElements.get("media-chrome-button")||b.customElements.define("media-chrome-button",xe);const Nh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function Ny(t){return`
    <style>
      :host([${c.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Nh}</slot>
      <slot name="exit">${Nh}</slot>
    </slot>
  `}function Py(){return`
    <slot name="tooltip-enter">${L("start airplay")}</slot>
    <slot name="tooltip-exit">${L("stop airplay")}</slot>
  `}const Ph=t=>{const e=t.mediaIsAirplaying?L("stop airplay"):L("start airplay");t.setAttribute("aria-label",e)};class Bu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_AIRPLAYING,c.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Ph(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_IS_AIRPLAYING&&Ph(this)}get mediaIsAirplaying(){return G(this,c.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){z(this,c.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return le(this,c.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){ne(this,c.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new b.CustomEvent(D.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}Bu.getSlotTemplateHTML=Ny;Bu.getTooltipContentHTML=Py;b.customElements.get("media-airplay-button")||b.customElements.define("media-airplay-button",Bu);const $y=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Uy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Hy(t){return`
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
      <slot name="on">${$y}</slot>
      <slot name="off">${Uy}</slot>
    </slot>
  `}function By(){return`
    <slot name="tooltip-enable">${L("Enable captions")}</slot>
    <slot name="tooltip-disable">${L("Disable captions")}</slot>
  `}const $h=t=>{t.setAttribute("aria-checked",Jp(t).toString())};class Wu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",L("closed captions")),$h(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_SUBTITLES_SHOWING&&$h(this)}get mediaSubtitlesList(){return Uh(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Hh(this,c.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Uh(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Hh(this,c.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new b.CustomEvent(D.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}Wu.getSlotTemplateHTML=Hy;Wu.getTooltipContentHTML=By;const Uh=(t,e)=>{const i=t.getAttribute(e);return i?ul(i):[]},Hh=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=In(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};b.customElements.get("media-captions-button")||b.customElements.define("media-captions-button",Wu);const Wy='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',Fy='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function Ky(t){return`
    <style>
      :host([${c.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Wy}</slot>
      <slot name="exit">${Fy}</slot>
    </slot>
  `}function Vy(){return`
    <slot name="tooltip-enter">${L("Start casting")}</slot>
    <slot name="tooltip-exit">${L("Stop casting")}</slot>
  `}const Bh=t=>{const e=t.mediaIsCasting?L("stop casting"):L("start casting");t.setAttribute("aria-label",e)};class Fu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_CASTING,c.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Bh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_IS_CASTING&&Bh(this)}get mediaIsCasting(){return G(this,c.MEDIA_IS_CASTING)}set mediaIsCasting(e){z(this,c.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return le(this,c.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){ne(this,c.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?D.MEDIA_EXIT_CAST_REQUEST:D.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new b.CustomEvent(e,{composed:!0,bubbles:!0}))}}Fu.getSlotTemplateHTML=Ky;Fu.getTooltipContentHTML=Vy;b.customElements.get("media-cast-button")||b.customElements.define("media-cast-button",Fu);var Ku=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},da=(t,e,i)=>(Ku(t,e,"read from private field"),e.get(t)),ii=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Vu=(t,e,i,a)=>(Ku(t,e,"write to private field"),e.set(t,i),i),Yi=(t,e,i)=>(Ku(t,e,"access private method"),i),So,Rn,ha,ks,vd,fd,dv,Ed,uv,_d,cv,bd,hv,gd,mv;function qy(t){return`
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
    ${this.getSlotTemplateHTML(t)}
  `}function Yy(t){return`
    <slot id="content"></slot>
  `}const Sr={OPEN:"open",ANCHOR:"anchor"};class Er extends b.HTMLElement{constructor(){super(),ii(this,ks),ii(this,fd),ii(this,Ed),ii(this,_d),ii(this,bd),ii(this,gd),ii(this,So,!1),ii(this,Rn,null),ii(this,ha,null)}static get observedAttributes(){return[Sr.OPEN,Sr.ANCHOR]}get open(){return G(this,Sr.OPEN)}set open(e){z(this,Sr.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":Yi(this,_d,cv).call(this,e);break;case"focusout":Yi(this,bd,hv).call(this,e);break;case"keydown":Yi(this,gd,mv).call(this,e);break}}connectedCallback(){Yi(this,ks,vd).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,i,a){Yi(this,ks,vd).call(this),e===Sr.OPEN&&a!==i&&(this.open?Yi(this,fd,dv).call(this):Yi(this,Ed,uv).call(this))}focus(){Vu(this,Rn,Du());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a?.focus()}get keysUsed(){return["Escape","Tab"]}}So=new WeakMap;Rn=new WeakMap;ha=new WeakMap;ks=new WeakSet;vd=function(){if(!da(this,So)&&(Vu(this,So,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=at(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=Se(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};fd=new WeakSet;dv=function(){var t;(t=da(this,ha))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};Ed=new WeakSet;uv=function(){var t;(t=da(this,ha))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};_d=new WeakSet;cv=function(t){Vu(this,ha,t.relatedTarget),bi(this,t.relatedTarget)||(this.open=!this.open)};bd=new WeakSet;hv=function(t){var e;bi(this,t.relatedTarget)||((e=da(this,Rn))==null||e.focus(),da(this,ha)&&da(this,ha)!==t.relatedTarget&&this.open&&(this.open=!1))};gd=new WeakSet;mv=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:d}=t;o||l||d||this.keysUsed.includes(s)&&(t.preventDefault(),t.stopPropagation(),s==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=da(this,Rn))==null||n.focus(),this.open=!1))};Er.shadowRootOptions={mode:"open"};Er.getTemplateHTML=qy;Er.getSlotTemplateHTML=Yy;b.customElements.get("media-chrome-dialog")||b.customElements.define("media-chrome-dialog",Er);var qu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ue=(t,e,i)=>(qu(t,e,"read from private field"),i?i.call(t):e.get(t)),Oe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Si=(t,e,i,a)=>(qu(t,e,"write to private field"),e.set(t,i),i),At=(t,e,i)=>(qu(t,e,"access private method"),i),Pt,ml,ws,Ss,kt,Io,Is,Rs,Ls,Yu,pv,Cs,yd,Ds,Td,Ro,Gu,Ad,vv,kd,fv,wd,Ev,Sd,_v;function Gy(t){return`
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

      ${this.getContainerTemplateHTML(t)}
    </div>
    <div id="rightgap"></div>
  `}function zy(t){return""}class _r extends b.HTMLElement{constructor(){if(super(),Oe(this,Yu),Oe(this,Cs),Oe(this,Ds),Oe(this,Ro),Oe(this,Ad),Oe(this,kd),Oe(this,wd),Oe(this,Sd),Oe(this,Pt,void 0),Oe(this,ml,void 0),Oe(this,ws,void 0),Oe(this,Ss,void 0),Oe(this,kt,{}),Oe(this,Io,[]),Oe(this,Is,()=>{if(this.range.matches(":focus-visible")){const{style:e}=Se(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Oe(this,Rs,()=>{const{style:e}=Se(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Oe(this,Ls,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),Si(this,ws,this.shadowRoot.querySelector("#startpoint")),Si(this,Ss,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",j.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===j.MEDIA_CONTROLLER?(i&&((n=(r=ue(this,Pt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Si(this,Pt,null)),a&&this.isConnected&&(Si(this,Pt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=ue(this,Pt))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),At(this,Cs,yd).call(this)):(this.range.setAttribute(e,a),At(this,Ds,Td).call(this)))}connectedCallback(){var e,i,a;const{style:r}=Se(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ue(this,kt).pointer=Se(this.shadowRoot,"#pointer"),ue(this,kt).progress=Se(this.shadowRoot,"#progress"),ue(this,kt).thumb=Se(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),ue(this,kt).activeSegment=Se(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(j.MEDIA_CONTROLLER);n&&(Si(this,Pt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=ue(this,Pt))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ue(this,Is)),this.shadowRoot.addEventListener("focusout",ue(this,Rs)),At(this,Cs,yd).call(this),ur(this.container,ue(this,Ls))}disconnectedCallback(){var e,i;At(this,Ds,Td).call(this),(i=(e=ue(this,Pt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Si(this,Pt,null),this.shadowRoot.removeEventListener("focusin",ue(this,Is)),this.shadowRoot.removeEventListener("focusout",ue(this,Rs)),cr(this.container,ue(this,Ls))}updatePointerBar(e){var i;(i=ue(this,kt).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=ue(this,kt).progress)==null||e.style.setProperty("width",`${a}%`),(i=ue(this,kt).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];Si(this,Io,[...a]);const r=a.pop();for(const[n,s]of a.entries()){const[o,l]=[n===0,n===a.length-1],d=o?"calc(var(--segments-gap) / -1)":`${s*100}%`,p=`calc(${((l?r:a[n+1])-s)*100}%${o||l?"":" - var(--segments-gap)"})`,h=Ae.createElementNS("http://www.w3.org/2000/svg","rect"),u=Mu(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);u.style.setProperty("x",d),u.style.setProperty("width",p),i.append(h)}}getPointerRatio(e){return B0(e.clientX,e.clientY,ue(this,ws).getBoundingClientRect(),ue(this,Ss).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":At(this,Sd,_v).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":At(this,Ad,vv).call(this,e);break;case"pointerdown":At(this,Ro,Gu).call(this,e);break;case"pointerup":At(this,kd,fv).call(this);break;case"pointerleave":At(this,wd,Ev).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}Pt=new WeakMap;ml=new WeakMap;ws=new WeakMap;Ss=new WeakMap;kt=new WeakMap;Io=new WeakMap;Is=new WeakMap;Rs=new WeakMap;Ls=new WeakMap;Yu=new WeakSet;pv=function(t){const e=ue(this,kt).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${ue(this,Io).findIndex((n,s,o)=>{const l=o[s+1];return l!=null&&i>=n&&i<=l})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Cs=new WeakSet;yd=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Ds=new WeakSet;Td=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(t=b.window)==null||t.removeEventListener("pointerup",this),(e=b.window)==null||e.removeEventListener("pointermove",this)};Ro=new WeakSet;Gu=function(t){var e;Si(this,ml,t.composedPath().includes(this.range)),(e=b.window)==null||e.addEventListener("pointerup",this,{once:!0})};Ad=new WeakSet;vv=function(t){var e;t.pointerType!=="mouse"&&At(this,Ro,Gu).call(this,t),this.addEventListener("pointerleave",this,{once:!0}),(e=b.window)==null||e.addEventListener("pointermove",this)};kd=new WeakSet;fv=function(){var t;(t=b.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};wd=new WeakSet;Ev=function(){var t,e;this.removeEventListener("pointerleave",this),(t=b.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=ue(this,kt).activeSegment)==null||e.style.removeProperty("transform")};Sd=new WeakSet;_v=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),At(this,Yu,pv).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!ue(this,ml))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};_r.shadowRootOptions={mode:"open"};_r.getTemplateHTML=Gy;_r.getContainerTemplateHTML=zy;b.customElements.get("media-chrome-range")||b.customElements.define("media-chrome-range",_r);var bv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},qn=(t,e,i)=>(bv(t,e,"read from private field"),i?i.call(t):e.get(t)),Qy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Yn=(t,e,i,a)=>(bv(t,e,"write to private field"),e.set(t,i),i),$t;function jy(t){return`
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
  `}class zu extends b.HTMLElement{constructor(){if(super(),Qy(this,$t,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[j.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===j.MEDIA_CONTROLLER&&(i&&((n=(r=qn(this,$t))==null?void 0:r.unassociateElement)==null||n.call(r,this),Yn(this,$t,null)),a&&this.isConnected&&(Yn(this,$t,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=qn(this,$t))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(j.MEDIA_CONTROLLER);r&&(Yn(this,$t,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=qn(this,$t))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=qn(this,$t))==null?void 0:e.unassociateElement)==null||i.call(e,this),Yn(this,$t,null)}}$t=new WeakMap;zu.shadowRootOptions={mode:"open"};zu.getTemplateHTML=jy;b.customElements.get("media-control-bar")||b.customElements.define("media-control-bar",zu);var gv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Gn=(t,e,i)=>(gv(t,e,"read from private field"),i?i.call(t):e.get(t)),Zy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},zn=(t,e,i,a)=>(gv(t,e,"write to private field"),e.set(t,i),i),Ut;function Xy(t,e={}){return`
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

    ${this.getSlotTemplateHTML(t,e)}
  `}function Jy(t,e){return`
    <slot></slot>
  `}class Ki extends b.HTMLElement{constructor(){if(super(),Zy(this,Ut,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[j.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===j.MEDIA_CONTROLLER&&(i&&((n=(r=Gn(this,Ut))==null?void 0:r.unassociateElement)==null||n.call(r,this),zn(this,Ut,null)),a&&this.isConnected&&(zn(this,Ut,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Gn(this,Ut))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const{style:r}=Se(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(j.MEDIA_CONTROLLER);n&&(zn(this,Ut,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=Gn(this,Ut))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Gn(this,Ut))==null?void 0:e.unassociateElement)==null||i.call(e,this),zn(this,Ut,null)}}Ut=new WeakMap;Ki.shadowRootOptions={mode:"open"};Ki.getTemplateHTML=Xy;Ki.getSlotTemplateHTML=Jy;b.customElements.get("media-text-display")||b.customElements.define("media-text-display",Ki);var yv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Wh=(t,e,i)=>(yv(t,e,"read from private field"),i?i.call(t):e.get(t)),e1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},t1=(t,e,i,a)=>(yv(t,e,"write to private field"),e.set(t,i),i),Gr;function i1(t,e){return`
    <slot>${Wi(e.mediaDuration)}</slot>
  `}class Tv extends Ki{constructor(){var e;super(),e1(this,Gr,void 0),t1(this,Gr,this.shadowRoot.querySelector("slot")),Wh(this,Gr).textContent=Wi((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===c.MEDIA_DURATION&&(Wh(this,Gr).textContent=Wi(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return re(this,c.MEDIA_DURATION)}set mediaDuration(e){he(this,c.MEDIA_DURATION,e)}}Gr=new WeakMap;Tv.getSlotTemplateHTML=i1;b.customElements.get("media-duration-display")||b.customElements.define("media-duration-display",Tv);const a1={2:L("Network Error"),3:L("Decode Error"),4:L("Source Not Supported"),5:L("Encryption Error")},r1={2:L("A network error caused the media download to fail."),3:L("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:L("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:L("The media is encrypted and there are no keys to decrypt it.")},Qu=t=>{var e,i;return t.code===1?null:{title:(e=a1[t.code])!=null?e:`Error ${t.code}`,message:(i=r1[t.code])!=null?i:t.message}};var Av=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},n1=(t,e,i)=>(Av(t,e,"read from private field"),i?i.call(t):e.get(t)),s1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},o1=(t,e,i,a)=>(Av(t,e,"write to private field"),e.set(t,i),i),Ms;function l1(t){return`
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
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${kv({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function d1(t){return t.code&&Qu(t)!==null}function kv(t){var e;const{title:i,message:a}=(e=Qu(t))!=null?e:{};let r="";return i&&(r+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),r}const Fh=[c.MEDIA_ERROR_CODE,c.MEDIA_ERROR_MESSAGE];class pl extends Er{constructor(){super(...arguments),s1(this,Ms,null)}static get observedAttributes(){return[...super.observedAttributes,...Fh]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!Fh.includes(e))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=d1(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n),!this.hasAttribute("aria-label"))){const{title:s}=Qu(n);s&&this.setAttribute("aria-label",s)}}get mediaError(){return n1(this,Ms)}set mediaError(e){o1(this,Ms,e)}get mediaErrorCode(){return re(this,"mediaerrorcode")}set mediaErrorCode(e){he(this,"mediaerrorcode",e)}get mediaErrorMessage(){return le(this,"mediaerrormessage")}set mediaErrorMessage(e){ne(this,"mediaerrormessage",e)}}Ms=new WeakMap;pl.getSlotTemplateHTML=l1;pl.formatErrorMessage=kv;b.customElements.get("media-error-dialog")||b.customElements.define("media-error-dialog",pl);var wv=pl,u1=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},yi=(t,e,i)=>(u1(t,e,"read from private field"),i?i.call(t):e.get(t)),Kh=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ca,Da;function c1(t){return`
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
      ${h1()}
    </slot>
  `}function h1(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:i,description:a})=>`
      <tr>
        <td>
          <div class="key-combo">${i.map((n,s)=>s>0?`<span class="key-separator">or</span><span class="key">${n}</span>`:`<span class="key">${n}</span>`).join("")}</div>
        </td>
        <td class="description">${a}</td>
      </tr>
    `).join("")}</table>
  `}class Sv extends Er{constructor(){super(...arguments),Kh(this,Ca,e=>{var i;if(!this.open)return;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;const r=e.composedPath(),n=r[0]===this||r.includes(this),s=r.includes(a);n&&!s&&(this.open=!1)}),Kh(this,Da,e=>{if(!this.open)return;const i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",yi(this,Ca)),document.addEventListener("keydown",yi(this,Da)))}disconnectedCallback(){this.removeEventListener("click",yi(this,Ca)),document.removeEventListener("keydown",yi(this,Da))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e==="open"&&(this.open?(this.addEventListener("click",yi(this,Ca)),document.addEventListener("keydown",yi(this,Da))):(this.removeEventListener("click",yi(this,Ca)),document.removeEventListener("keydown",yi(this,Da))))}}Ca=new WeakMap;Da=new WeakMap;Sv.getSlotTemplateHTML=c1;b.customElements.get("media-keyboard-shortcuts-dialog")||b.customElements.define("media-keyboard-shortcuts-dialog",Sv);var Iv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},m1=(t,e,i)=>(Iv(t,e,"read from private field"),e.get(t)),p1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},v1=(t,e,i,a)=>(Iv(t,e,"write to private field"),e.set(t,i),i),xs;const f1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,E1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function _1(t){return`
    <style>
      :host([${c.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${f1}</slot>
      <slot name="exit">${E1}</slot>
    </slot>
  `}function b1(){return`
    <slot name="tooltip-enter">${L("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${L("Exit fullscreen mode")}</slot>
  `}const Vh=t=>{const e=t.mediaIsFullscreen?L("exit fullscreen mode"):L("enter fullscreen mode");t.setAttribute("aria-label",e)};class ju extends xe{constructor(){super(...arguments),p1(this,xs,null)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_FULLSCREEN,c.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Vh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_IS_FULLSCREEN&&Vh(this)}get mediaFullscreenUnavailable(){return le(this,c.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){ne(this,c.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return G(this,c.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){z(this,c.MEDIA_IS_FULLSCREEN,e)}handleClick(e){v1(this,xs,e);const i=m1(this,xs)instanceof PointerEvent,a=this.mediaIsFullscreen?new b.CustomEvent(D.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new b.CustomEvent(D.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}}xs=new WeakMap;ju.getSlotTemplateHTML=_1;ju.getTooltipContentHTML=b1;b.customElements.get("media-fullscreen-button")||b.customElements.define("media-fullscreen-button",ju);const{MEDIA_TIME_IS_LIVE:Os,MEDIA_PAUSED:cn}=c,{MEDIA_SEEK_TO_LIVE_REQUEST:g1,MEDIA_PLAY_REQUEST:y1}=D,T1='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function A1(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Os}]:not([${cn}])) slot[name=indicator] > *,
      :host([${Os}]:not([${cn}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Os}]:not([${cn}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${T1}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${L("live")}</slot>
  `}const qh=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=L(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=L("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class Rv extends xe{static get observedAttributes(){return[...super.observedAttributes,Os,cn]}connectedCallback(){super.connectedCallback(),qh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),qh(this)}get mediaPaused(){return G(this,c.MEDIA_PAUSED)}set mediaPaused(e){z(this,c.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return G(this,c.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){z(this,c.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new b.CustomEvent(g1,{composed:!0,bubbles:!0})),this.hasAttribute(cn)&&this.dispatchEvent(new b.CustomEvent(y1,{composed:!0,bubbles:!0})))}}Rv.getSlotTemplateHTML=A1;b.customElements.get("media-live-button")||b.customElements.define("media-live-button",Rv);var Lv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ir=(t,e,i)=>(Lv(t,e,"read from private field"),i?i.call(t):e.get(t)),Yh=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Rr=(t,e,i,a)=>(Lv(t,e,"write to private field"),e.set(t,i),i),Ht,Ns;const Qn={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},Cv=500,k1=`
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
`;function w1(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Cv}ms);
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

      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) #status {
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

    <slot name="icon">${k1}</slot>
    <div id="status" role="status" aria-live="polite">${L("media loading")}</div>
  `}class Zu extends b.HTMLElement{constructor(){if(super(),Yh(this,Ht,void 0),Yh(this,Ns,Cv),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[j.MEDIA_CONTROLLER,c.MEDIA_PAUSED,c.MEDIA_LOADING,Qn.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Qn.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===j.MEDIA_CONTROLLER&&(i&&((n=(r=Ir(this,Ht))==null?void 0:r.unassociateElement)==null||n.call(r,this),Rr(this,Ht,null)),a&&this.isConnected&&(Rr(this,Ht,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Ir(this,Ht))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(j.MEDIA_CONTROLLER);r&&(Rr(this,Ht,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Ir(this,Ht))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Ir(this,Ht))==null?void 0:e.unassociateElement)==null||i.call(e,this),Rr(this,Ht,null)}get loadingDelay(){return Ir(this,Ns)}set loadingDelay(e){Rr(this,Ns,e);const{style:i}=Se(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return G(this,c.MEDIA_PAUSED)}set mediaPaused(e){z(this,c.MEDIA_PAUSED,e)}get mediaLoading(){return G(this,c.MEDIA_LOADING)}set mediaLoading(e){z(this,c.MEDIA_LOADING,e)}get mediaController(){return le(this,j.MEDIA_CONTROLLER)}set mediaController(e){ne(this,j.MEDIA_CONTROLLER,e)}get noAutohide(){return G(this,Qn.NO_AUTOHIDE)}set noAutohide(e){z(this,Qn.NO_AUTOHIDE,e)}}Ht=new WeakMap;Ns=new WeakMap;Zu.shadowRootOptions={mode:"open"};Zu.getTemplateHTML=w1;b.customElements.get("media-loading-indicator")||b.customElements.define("media-loading-indicator",Zu);const S1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Gh=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,I1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function R1(t){return`
    <style>
      :host(:not([${c.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${c.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${c.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${c.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${S1}</slot>
      <slot name="low">${Gh}</slot>
      <slot name="medium">${Gh}</slot>
      <slot name="high">${I1}</slot>
    </slot>
  `}function L1(){return`
    <slot name="tooltip-mute">${L("Mute")}</slot>
    <slot name="tooltip-unmute">${L("Unmute")}</slot>
  `}const zh=t=>{const e=t.mediaVolumeLevel==="off",i=L(e?"unmute":"mute");t.setAttribute("aria-label",i)};class Xu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),zh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_VOLUME_LEVEL&&zh(this)}get mediaVolumeLevel(){return le(this,c.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){ne(this,c.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?D.MEDIA_UNMUTE_REQUEST:D.MEDIA_MUTE_REQUEST;this.dispatchEvent(new b.CustomEvent(e,{composed:!0,bubbles:!0}))}}Xu.getSlotTemplateHTML=R1;Xu.getTooltipContentHTML=L1;b.customElements.get("media-mute-button")||b.customElements.define("media-mute-button",Xu);const Qh=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function C1(t){return`
    <style>
      :host([${c.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${c.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Qh}</slot>
      <slot name="exit">${Qh}</slot>
    </slot>
  `}function D1(){return`
    <slot name="tooltip-enter">${L("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${L("Exit picture in picture mode")}</slot>
  `}const jh=t=>{const e=t.mediaIsPip?L("exit picture in picture mode"):L("enter picture in picture mode");t.setAttribute("aria-label",e)};class Ju extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_PIP,c.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),jh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_IS_PIP&&jh(this)}get mediaPipUnavailable(){return le(this,c.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){ne(this,c.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return G(this,c.MEDIA_IS_PIP)}set mediaIsPip(e){z(this,c.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?D.MEDIA_EXIT_PIP_REQUEST:D.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new b.CustomEvent(e,{composed:!0,bubbles:!0}))}}Ju.getSlotTemplateHTML=C1;Ju.getTooltipContentHTML=D1;b.customElements.get("media-pip-button")||b.customElements.define("media-pip-button",Ju);var M1=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},_a=(t,e,i)=>(M1(t,e,"read from private field"),i?i.call(t):e.get(t)),x1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ii;const Ml={RATES:"rates"},Dv=[1,1.2,1.5,1.7,2],ja=1;function Fi(t){return Math.round(t*100)/100}function O1(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?Fi(+t.mediaplaybackrate):ja}x</slot>
  `}function N1(){return L("Playback rate")}class ec extends xe{constructor(){var e;super(),x1(this,Ii,new Nu(this,Ml.RATES,{defaultValue:Dv})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Fi((e=this.mediaPlaybackRate)!=null?e:ja)}x`}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE,Ml.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===Ml.RATES&&(_a(this,Ii).value=a),e===c.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Fi(Number.isNaN(r)?ja:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",L("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return _a(this,Ii)}set rates(e){e?Array.isArray(e)?_a(this,Ii).value=e.join(" "):typeof e=="string"&&(_a(this,Ii).value=e):_a(this,Ii).value=""}get mediaPlaybackRate(){return re(this,c.MEDIA_PLAYBACK_RATE,ja)}set mediaPlaybackRate(e){he(this,c.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(_a(this,Ii).values(),s=>+s).sort((s,o)=>s-o),r=(i=(e=a.find(s=>s>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:ja,n=new b.CustomEvent(D.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}Ii=new WeakMap;ec.getSlotTemplateHTML=O1;ec.getTooltipContentHTML=N1;b.customElements.get("media-playback-rate-button")||b.customElements.define("media-playback-rate-button",ec);const P1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,$1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function U1(t){return`
    <style>
      :host([${c.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${c.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${c.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${c.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${P1}</slot>
      <slot name="pause">${$1}</slot>
    </slot>
  `}function H1(){return`
    <slot name="tooltip-play">${L("Play")}</slot>
    <slot name="tooltip-pause">${L("Pause")}</slot>
  `}const Zh=t=>{const e=t.mediaPaused?L("play"):L("pause");t.setAttribute("aria-label",e)};class tc extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PAUSED,c.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Zh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===c.MEDIA_PAUSED||e===c.MEDIA_LANG)&&Zh(this)}get mediaPaused(){return G(this,c.MEDIA_PAUSED)}set mediaPaused(e){z(this,c.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?D.MEDIA_PLAY_REQUEST:D.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new b.CustomEvent(e,{composed:!0,bubbles:!0}))}}tc.getSlotTemplateHTML=U1;tc.getTooltipContentHTML=H1;b.customElements.get("media-play-button")||b.customElements.define("media-play-button",tc);const Ct={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function B1(t){return`
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
  `}const W1=t=>{t.style.removeProperty("background-image")},F1=(t,e)=>{t.style["background-image"]=`url('${e}')`};class ic extends b.HTMLElement{static get observedAttributes(){return[Ct.PLACEHOLDER_SRC,Ct.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===Ct.SRC&&(a==null?this.image.removeAttribute(Ct.SRC):this.image.setAttribute(Ct.SRC,a)),e===Ct.PLACEHOLDER_SRC&&(a==null?W1(this.image):F1(this.image,a))}get placeholderSrc(){return le(this,Ct.PLACEHOLDER_SRC)}set placeholderSrc(e){ne(this,Ct.SRC,e)}get src(){return le(this,Ct.SRC)}set src(e){ne(this,Ct.SRC,e)}}ic.shadowRootOptions={mode:"open"};ic.getTemplateHTML=B1;b.customElements.get("media-poster-image")||b.customElements.define("media-poster-image",ic);var Mv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},K1=(t,e,i)=>(Mv(t,e,"read from private field"),i?i.call(t):e.get(t)),V1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},q1=(t,e,i,a)=>(Mv(t,e,"write to private field"),e.set(t,i),i),Ps;class Y1 extends Ki{constructor(){super(),V1(this,Ps,void 0),q1(this,Ps,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PREVIEW_CHAPTER,c.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===c.MEDIA_PREVIEW_CHAPTER||e===c.MEDIA_LANG)&&a!==i&&a!=null)if(K1(this,Ps).textContent=a,a!==""){const r=L("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return le(this,c.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){ne(this,c.MEDIA_PREVIEW_CHAPTER,e)}}Ps=new WeakMap;b.customElements.get("media-preview-chapter-display")||b.customElements.define("media-preview-chapter-display",Y1);var xv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},jn=(t,e,i)=>(xv(t,e,"read from private field"),i?i.call(t):e.get(t)),G1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Zn=(t,e,i,a)=>(xv(t,e,"write to private field"),e.set(t,i),i),Bt;function z1(t){return`
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
  `}class vl extends b.HTMLElement{constructor(){if(super(),G1(this,Bt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[j.MEDIA_CONTROLLER,c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(j.MEDIA_CONTROLLER);r&&(Zn(this,Bt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=jn(this,Bt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=jn(this,Bt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Zn(this,Bt,null)}attributeChangedCallback(e,i,a){var r,n,s,o,l;[c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===j.MEDIA_CONTROLLER&&(i&&((n=(r=jn(this,Bt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Zn(this,Bt,null)),a&&this.isConnected&&(Zn(this,Bt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=jn(this,Bt))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return le(this,c.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ne(this,c.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(c.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(c.MEDIA_PREVIEW_COORDS);return}this.setAttribute(c.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,n,s]=e,o=i.split("#")[0],l=getComputedStyle(this),{maxWidth:d,maxHeight:m,minWidth:p,minHeight:h}=l,u=l.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain";let v,E;if(u==="fill"){const M=parseInt(d)/n,S=parseInt(m)/s,U=parseInt(p)/n,q=parseInt(h)/s;v=M<1?M:Math.max(M,U),E=S<1?S:Math.max(S,q)}else{const M=Math.min(parseInt(d)/n,parseInt(m)/s),S=Math.max(parseInt(p)/n,parseInt(h)/s),q=M<1?M:S>1?S:1;v=q,E=q}const{style:g}=Se(this.shadowRoot,":host"),y=Se(this.shadowRoot,"img").style,T=this.shadowRoot.querySelector("img"),k=Math.min(v,E)<1?"min":"max";g.setProperty(`${k}-width`,"initial","important"),g.setProperty(`${k}-height`,"initial","important"),g.width=`${n*v}px`,g.height=`${s*E}px`;const C=()=>{y.width=`${this.imgWidth*v}px`,y.height=`${this.imgHeight*E}px`,y.display="block"};T.src!==o&&(T.onload=()=>{this.imgWidth=T.naturalWidth,this.imgHeight=T.naturalHeight,C(),T.onload=null},T.src=o,C()),C(),y.transform=`translate(-${a*v}px, -${r*E}px)`}}Bt=new WeakMap;vl.shadowRootOptions={mode:"open"};vl.getTemplateHTML=z1;b.customElements.get("media-preview-thumbnail")||b.customElements.define("media-preview-thumbnail",vl);var Xh=vl,Ov=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Jh=(t,e,i)=>(Ov(t,e,"read from private field"),i?i.call(t):e.get(t)),Q1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},j1=(t,e,i,a)=>(Ov(t,e,"write to private field"),e.set(t,i),i),zr;class Z1 extends Ki{constructor(){super(),Q1(this,zr,void 0),j1(this,zr,this.shadowRoot.querySelector("slot")),Jh(this,zr).textContent=Wi(0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_PREVIEW_TIME&&a!=null&&(Jh(this,zr).textContent=Wi(parseFloat(a)))}get mediaPreviewTime(){return re(this,c.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){he(this,c.MEDIA_PREVIEW_TIME,e)}}zr=new WeakMap;b.customElements.get("media-preview-time-display")||b.customElements.define("media-preview-time-display",Z1);const ba={SEEK_OFFSET:"seekoffset"},xl=30,X1=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function J1(t,e){return`
    <slot name="icon">${X1(e.seekOffset)}</slot>
  `}const eT=(t,e)=>{t.setAttribute("aria-label",L("seek back {seekOffset} seconds",{seekOffset:e}))};function tT(){return L("Seek backward")}const iT=0;class ac extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_CURRENT_TIME,ba.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=re(this,ba.SEEK_OFFSET,xl)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),eT(this,this.seekOffset),e===ba.SEEK_OFFSET&&(this.seekOffset=re(this,ba.SEEK_OFFSET,xl))}get seekOffset(){return re(this,ba.SEEK_OFFSET,xl)}set seekOffset(e){he(this,ba.SEEK_OFFSET,e),this.setAttribute("aria-label",L("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),Fp(Kp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return re(this,c.MEDIA_CURRENT_TIME,iT)}set mediaCurrentTime(e){he(this,c.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new b.CustomEvent(D.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}ac.getSlotTemplateHTML=J1;ac.getTooltipContentHTML=tT;b.customElements.get("media-seek-backward-button")||b.customElements.define("media-seek-backward-button",ac);const ga={SEEK_OFFSET:"seekoffset"},Ol=30,aT=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function rT(t,e){return`
    <slot name="icon">${aT(e.seekOffset)}</slot>
  `}const nT=(t,e)=>{t.setAttribute("aria-label",L("seek forward {seekOffset} seconds",{seekOffset:e}))};function sT(){return L("Seek forward")}const oT=0;class rc extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_CURRENT_TIME,ga.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=re(this,ga.SEEK_OFFSET,Ol)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),nT(this,this.seekOffset),e===ga.SEEK_OFFSET&&(this.seekOffset=re(this,ga.SEEK_OFFSET,Ol))}get seekOffset(){return re(this,ga.SEEK_OFFSET,Ol)}set seekOffset(e){he(this,ga.SEEK_OFFSET,e),this.setAttribute("aria-label",L("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),Fp(Kp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return re(this,c.MEDIA_CURRENT_TIME,oT)}set mediaCurrentTime(e){he(this,c.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new b.CustomEvent(D.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}rc.getSlotTemplateHTML=rT;rc.getTooltipContentHTML=sT;b.customElements.get("media-seek-forward-button")||b.customElements.define("media-seek-forward-button",rc);var nc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},St=(t,e,i)=>(nc(t,e,"read from private field"),i?i.call(t):e.get(t)),Gi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},sc=(t,e,i,a)=>(nc(t,e,"write to private field"),e.set(t,i),i),xi=(t,e,i)=>(nc(t,e,"access private method"),i),Ma,Zt,fl,oc,Nv,Lo,lc,Qr,$s,Us,Id;const Ri={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},em=[...Object.values(Ri),c.MEDIA_CURRENT_TIME,c.MEDIA_DURATION,c.MEDIA_SEEKABLE],Pv=["Enter"," "],lT="&nbsp;/&nbsp;",Rd=(t,{timesSep:e=lT}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,n]=(a=t.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(n)&&(s=n);const o=t.remaining?Wi(0-(s-r)):Wi(r);return t.showDuration?`${o}${e}${Wi(s)}`:o},dT=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-description",L("video not loaded, unknown time."));return}const n=t.remaining?dn(0-(r-i)):dn(i);if(!t.showDuration){t.setAttribute("aria-description",n);return}const s=dn(r),o=L("{currentTime} of {totalTime}",{currentTime:n,totalTime:s});t.setAttribute("aria-description",o)};function uT(t,e){return`
    <slot>${Rd(e)}</slot>
  `}const cT=t=>{t.setAttribute("aria-label",L("playback time"))};class $v extends Ki{constructor(){super(),Gi(this,oc),Gi(this,Lo),Gi(this,Qr),Gi(this,Us),Gi(this,Ma,void 0),Gi(this,Zt,null),Gi(this,fl,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!Pv.includes(r)){this.removeEventListener("keyup",St(this,Zt));return}this.addEventListener("keyup",St(this,Zt))}),sc(this,Ma,this.shadowRoot.querySelector("slot")),St(this,Ma).innerHTML=`${Rd(this)}`}static get observedAttributes(){return[...super.observedAttributes,...em,"disabled"]}connectedCallback(){const{style:e}=Se(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",L("playback time")),xi(this,Qr,$s).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),xi(this,Lo,lc).call(this),super.disconnectedCallback()}attributeChangedCallback(e,i,a){cT(this),em.includes(e)?this.update():e==="disabled"&&a!==i?a==null?xi(this,Qr,$s).call(this):xi(this,Us,Id).call(this):e===Ri.NO_TOGGLE&&a!==i&&(this.noToggle?xi(this,Us,Id).call(this):xi(this,Qr,$s).call(this)),super.attributeChangedCallback(e,i,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return G(this,Ri.REMAINING)}set remaining(e){z(this,Ri.REMAINING,e)}get showDuration(){return G(this,Ri.SHOW_DURATION)}set showDuration(e){z(this,Ri.SHOW_DURATION,e)}get noToggle(){return G(this,Ri.NO_TOGGLE)}set noToggle(e){z(this,Ri.NO_TOGGLE,e)}get mediaDuration(){return re(this,c.MEDIA_DURATION)}set mediaDuration(e){he(this,c.MEDIA_DURATION,e)}get mediaCurrentTime(){return re(this,c.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){he(this,c.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(c.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(c.MEDIA_SEEKABLE);return}this.setAttribute(c.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Rd(this);dT(this),e!==St(this,Ma).innerHTML&&(St(this,Ma).innerHTML=e)}}Ma=new WeakMap;Zt=new WeakMap;fl=new WeakMap;oc=new WeakSet;Nv=function(){St(this,Zt)||(sc(this,Zt,t=>{const{key:e}=t;if(!Pv.includes(e)){this.removeEventListener("keyup",St(this,Zt));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",St(this,fl)),this.addEventListener("click",this.toggleTimeDisplay))};Lo=new WeakSet;lc=function(){St(this,Zt)&&(this.removeEventListener("keyup",St(this,Zt)),this.removeEventListener("keydown",St(this,fl)),this.removeEventListener("click",this.toggleTimeDisplay),sc(this,Zt,null))};Qr=new WeakSet;$s=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),xi(this,oc,Nv).call(this))};Us=new WeakSet;Id=function(){this.removeAttribute("role"),this.disable(),xi(this,Lo,lc).call(this)};$v.getSlotTemplateHTML=uT;b.customElements.get("media-time-display")||b.customElements.define("media-time-display",$v);var Uv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ce=(t,e,i)=>(Uv(t,e,"read from private field"),e.get(t)),Dt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},tt=(t,e,i,a)=>(Uv(t,e,"write to private field"),e.set(t,i),i),hT=(t,e,i,a)=>({set _(r){tt(t,e,r)},get _(){return Ce(t,e)}}),xa,Hs,Oa,jr,Bs,Ws,Fs,Na,Zi,Ks;class mT{constructor(e,i,a){Dt(this,xa,void 0),Dt(this,Hs,void 0),Dt(this,Oa,void 0),Dt(this,jr,void 0),Dt(this,Bs,void 0),Dt(this,Ws,void 0),Dt(this,Fs,void 0),Dt(this,Na,void 0),Dt(this,Zi,0),Dt(this,Ks,(r=performance.now())=>{tt(this,Zi,requestAnimationFrame(Ce(this,Ks))),tt(this,jr,performance.now()-Ce(this,Oa));const n=1e3/this.fps;if(Ce(this,jr)>n){tt(this,Oa,r-Ce(this,jr)%n);const s=1e3/((r-Ce(this,Hs))/++hT(this,Bs)._),o=(r-Ce(this,Ws))/1e3/this.duration;let l=Ce(this,Fs)+o*this.playbackRate;l-Ce(this,xa).valueAsNumber>0?tt(this,Na,this.playbackRate/this.duration/s):(tt(this,Na,.995*Ce(this,Na)),l=Ce(this,xa).valueAsNumber+Ce(this,Na)),this.callback(l)}}),tt(this,xa,e),this.callback=i,this.fps=a}start(){Ce(this,Zi)===0&&(tt(this,Oa,performance.now()),tt(this,Hs,Ce(this,Oa)),tt(this,Bs,0),Ce(this,Ks).call(this))}stop(){Ce(this,Zi)!==0&&(cancelAnimationFrame(Ce(this,Zi)),tt(this,Zi,0))}update({start:e,duration:i,playbackRate:a}){const r=e-Ce(this,xa).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.5/i||n>=.5)&&this.callback(e),tt(this,Fs,e),tt(this,Ws,performance.now()),this.duration=i,this.playbackRate=a}}xa=new WeakMap;Hs=new WeakMap;Oa=new WeakMap;jr=new WeakMap;Bs=new WeakMap;Ws=new WeakMap;Fs=new WeakMap;Na=new WeakMap;Zi=new WeakMap;Ks=new WeakMap;var dc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},oe=(t,e,i)=>(dc(t,e,"read from private field"),i?i.call(t):e.get(t)),ke=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ot=(t,e,i,a)=>(dc(t,e,"write to private field"),e.set(t,i),i),ut=(t,e,i)=>(dc(t,e,"access private method"),i),Pa,Oi,Co,hn,Do,Vs,Ln,Cn,$a,Ua,Zr,Ld,Hv,Cd,Mo,uc,xo,cc,Oo,hc,Dd,Bv,Dn,No,Md,Wv;const pT=t=>{const e=t.range,i=dn(+Fv(t)),a=dn(+t.mediaSeekableEnd),r=i&&a?L("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):L("video not loaded, unknown time.");e.setAttribute("aria-valuetext",r)};function vT(t){return`
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

      :host(:is([${c.MEDIA_PREVIEW_IMAGE}], [${c.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${c.MEDIA_PREVIEW_IMAGE}], [${c.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
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

      :host([${c.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${c.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${c.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${c.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${c.MEDIA_PREVIEW_TIME}]:hover) {
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

      :host([${c.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${c.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${c.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${c.MEDIA_PREVIEW_CHAPTER}]) {
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

      :host([${c.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${c.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${c.MEDIA_PREVIEW_TIME}]:hover) {
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
          <template shadowrootmode="${Xh.shadowRootOptions.mode}">
            ${Xh.getTemplateHTML({})}
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
  `}const Xn=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},Fv=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class mc extends _r{constructor(){super(),ke(this,Ld),ke(this,Mo),ke(this,xo),ke(this,Oo),ke(this,Dd),ke(this,Dn),ke(this,Md),ke(this,Pa,null),ke(this,Oi,void 0),ke(this,Co,void 0),ke(this,hn,void 0),ke(this,Do,void 0),ke(this,Vs,void 0),ke(this,Ln,void 0),ke(this,Cn,void 0),ke(this,$a,void 0),ke(this,Ua,void 0),ke(this,Zr,()=>{ut(this,Ld,Hv).call(this)?oe(this,Oi).start():oe(this,Oi).stop()}),ke(this,Cd,a=>{this.dragging||(Lu(a)&&(this.range.valueAsNumber=a),oe(this,Ua)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),ot(this,Co,this.shadowRoot.querySelectorAll('[part~="box"]')),ot(this,Do,this.shadowRoot.querySelector('[part~="preview-box"]')),ot(this,Vs,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);ot(this,Ln,parseInt(i.getPropertyValue("--media-box-padding-left"))),ot(this,Cn,parseInt(i.getPropertyValue("--media-box-padding-right"))),ot(this,Oi,new mT(this.range,oe(this,Cd),60))}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PAUSED,c.MEDIA_DURATION,c.MEDIA_SEEKABLE,c.MEDIA_CURRENT_TIME,c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_TIME,c.MEDIA_PREVIEW_CHAPTER,c.MEDIA_BUFFERED,c.MEDIA_PLAYBACK_RATE,c.MEDIA_LOADING,c.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",L("seek")),oe(this,Zr).call(this),ot(this,Pa,this.getRootNode()),(e=oe(this,Pa))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),oe(this,Oi).stop(),(e=oe(this,Pa))==null||e.removeEventListener("transitionstart",this),ot(this,Pa,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===c.MEDIA_CURRENT_TIME||e===c.MEDIA_PAUSED||e===c.MEDIA_ENDED||e===c.MEDIA_LOADING||e===c.MEDIA_DURATION||e===c.MEDIA_SEEKABLE?(oe(this,Oi).update({start:Xn(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),oe(this,Zr).call(this),pT(this)):e===c.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===c.MEDIA_DURATION||e===c.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=oe(this,$a),this.updateBar()))}get mediaChaptersCues(){return oe(this,$a)}set mediaChaptersCues(e){var i;ot(this,$a,e),this.updateSegments((i=oe(this,$a))==null?void 0:i.map(a=>({start:Xn(this,a.startTime),end:Xn(this,a.endTime)})))}get mediaPaused(){return G(this,c.MEDIA_PAUSED)}set mediaPaused(e){z(this,c.MEDIA_PAUSED,e)}get mediaLoading(){return G(this,c.MEDIA_LOADING)}set mediaLoading(e){z(this,c.MEDIA_LOADING,e)}get mediaDuration(){return re(this,c.MEDIA_DURATION)}set mediaDuration(e){he(this,c.MEDIA_DURATION,e)}get mediaCurrentTime(){return re(this,c.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){he(this,c.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return re(this,c.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){he(this,c.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(c.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(c.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(c.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(c.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(c.MEDIA_SEEKABLE);return}this.setAttribute(c.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return le(this,c.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ne(this,c.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return re(this,c.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){he(this,c.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return G(this,c.MEDIA_ENDED)}set mediaEnded(e){z(this,c.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(e=i.find(([o,l])=>o<=n&&n<=l))!=null?e:[];a=Xn(this,s)}const{style:r}=Se(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=Se(this.shadowRoot,"#current-rail"),a=Se(this.shadowRoot,'[part~="current-box"]'),r=ut(this,Mo,uc).call(this,oe(this,Vs)),n=ut(this,xo,cc).call(this,r,this.range.valueAsNumber),s=ut(this,Oo,hc).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${s}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":ut(this,Md,Wv).call(this);break;case"pointermove":ut(this,Dd,Bv).call(this,e);break;case"pointerup":oe(this,Ua)&&ot(this,Ua,!1);break;case"pointerdown":ot(this,Ua,!0);break;case"pointerleave":ut(this,Dn,No).call(this,null);break;case"transitionstart":bi(e.target,this)&&setTimeout(()=>oe(this,Zr).call(this),0);break}}}Pa=new WeakMap;Oi=new WeakMap;Co=new WeakMap;hn=new WeakMap;Do=new WeakMap;Vs=new WeakMap;Ln=new WeakMap;Cn=new WeakMap;$a=new WeakMap;Ua=new WeakMap;Zr=new WeakMap;Ld=new WeakSet;Hv=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Vp(this)};Cd=new WeakMap;Mo=new WeakSet;uc=function(t){var e;const a=((e=this.getAttribute("bounds")?fr(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=t.offsetWidth,s=-(r.left-a.left-n/2),o=a.right-r.left-n/2;return{box:{width:n,min:s,max:o},bounds:a,range:r}};xo=new WeakSet;cc=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:n}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const o=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${o})`}return i};Oo=new WeakSet;hc=function(t,e){const{width:i,min:a,max:r}=t.box,n=e*t.range.width;if(n<a+oe(this,Ln)){const s=t.range.left-t.bounds.left-oe(this,Ln);return`${n-i/2+s}px`}if(n>r-oe(this,Cn)){const s=t.bounds.right-t.range.right-oe(this,Cn);return`${n+i/2-s-t.range.width}px`}return 0};Dd=new WeakSet;Bv=function(t){const e=[...oe(this,Co)].some(m=>t.composedPath().includes(m));if(!this.dragging&&(e||!t.composedPath().includes(this))){ut(this,Dn,No).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=Se(this.shadowRoot,"#preview-rail"),r=Se(this.shadowRoot,'[part~="preview-box"]'),n=ut(this,Mo,uc).call(this,oe(this,Do));let s=(t.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=ut(this,xo,cc).call(this,n,s),l=ut(this,Oo,hc).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const d=Math.round(oe(this,hn))-Math.round(s*i);Math.abs(d)<1&&s>.01&&s<.99||(ot(this,hn,s*i),ut(this,Dn,No).call(this,oe(this,hn)))};Dn=new WeakSet;No=function(t){this.dispatchEvent(new b.CustomEvent(D.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Md=new WeakSet;Wv=function(){oe(this,Oi).stop();const t=Fv(this);this.dispatchEvent(new b.CustomEvent(D.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};mc.shadowRootOptions={mode:"open"};mc.getContainerTemplateHTML=vT;b.customElements.get("media-time-range")||b.customElements.define("media-time-range",mc);var fT=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},tm=(t,e,i)=>(fT(t,e,"read from private field"),i?i.call(t):e.get(t)),ET=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qs;const _T=1,bT=t=>t.mediaMuted?0:t.mediaVolume,gT=t=>`${Math.round(t*100)}%`;class yT extends _r{constructor(){super(...arguments),ET(this,qs,()=>{const e=this.range.value,i=new b.CustomEvent(D.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_VOLUME,c.MEDIA_MUTED,c.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",L("volume")),this.range.addEventListener("input",tm(this,qs))}disconnectedCallback(){this.range.removeEventListener("input",tm(this,qs)),super.disconnectedCallback()}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===c.MEDIA_VOLUME||e===c.MEDIA_MUTED)&&(this.range.valueAsNumber=bT(this),this.range.setAttribute("aria-valuetext",gT(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return re(this,c.MEDIA_VOLUME,_T)}set mediaVolume(e){he(this,c.MEDIA_VOLUME,e)}get mediaMuted(){return G(this,c.MEDIA_MUTED)}set mediaMuted(e){z(this,c.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return le(this,c.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){ne(this,c.MEDIA_VOLUME_UNAVAILABLE,e)}}qs=new WeakMap;b.customElements.get("media-volume-range")||b.customElements.define("media-volume-range",yT);function TT(t){return`
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

        :host([${c.MEDIA_LOOP}]) #checked-indicator {
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
    `}function AT(){return L("Loop")}class pc extends xe{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=L("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return G(this,c.MEDIA_LOOP)}set mediaLoop(e){z(this,c.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,i=new b.CustomEvent(D.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}pc.getSlotTemplateHTML=TT;pc.getTooltipContentHTML=AT;b.customElements.get("media-loop-button")||b.customElements.define("media-loop-button",pc);var Kv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},K=(t,e,i)=>(Kv(t,e,"read from private field"),i?i.call(t):e.get(t)),qt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},mi=(t,e,i,a)=>(Kv(t,e,"write to private field"),e.set(t,i),i),Ha,Ys,Xi,Xr,Li,Ci,Di,Ji,Ba,Gs,yt;const im=1,am=0,kT=1,wT={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof Rt&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Rt?r.element[r.attributeName]=n:r.value=n}}}};class El extends b.DocumentFragment{constructor(e,i,a=wT){var r;super(),qt(this,Ha,void 0),qt(this,Ys,void 0),this.append(e.content.cloneNode(!0)),mi(this,Ha,Vv(this)),mi(this,Ys,a),(r=a.createCallback)==null||r.call(a,this,K(this,Ha),i),a.processCallback(this,K(this,Ha),i)}update(e){K(this,Ys).processCallback(this,K(this,Ha),e)}}Ha=new WeakMap;Ys=new WeakMap;const Vv=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new IT;for([i,a]of nm(r.value))if(!i)n.append(a);else{const s=new Rt(t,r.name,r.namespaceURI);n.append(s),e.push([a,s])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===im&&!(r instanceof HTMLTemplateElement))Vv(r,e);else{const n=r.data;if(r.nodeType===im||n.includes("{{")){const s=[];if(n)for([i,a]of nm(n))if(!i)s.push(new Text(a));else{const o=new br(t);s.push(o),e.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new Gv(t,r);s.push(o),e.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return e},rm={},nm=t=>{let e="",i=0,a=rm[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([am,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([kT,e.trim()]),e="",r++):e+=n||"";return e&&a.push([am,(i>0?"{{":"")+e]),rm[t]=a},ST=11;class qv{get value(){return""}set value(e){}toString(){return this.value}}const Yv=new WeakMap;class IT{constructor(){qt(this,Xi,[])}[Symbol.iterator](){return K(this,Xi).values()}get length(){return K(this,Xi).length}item(e){return K(this,Xi)[e]}append(...e){for(const i of e)i instanceof Rt&&Yv.set(i,this),K(this,Xi).push(i)}toString(){return K(this,Xi).join("")}}Xi=new WeakMap;class Rt extends qv{constructor(e,i,a){super(),qt(this,Ji),qt(this,Xr,""),qt(this,Li,void 0),qt(this,Ci,void 0),qt(this,Di,void 0),mi(this,Li,e),mi(this,Ci,i),mi(this,Di,a)}get attributeName(){return K(this,Ci)}get attributeNamespace(){return K(this,Di)}get element(){return K(this,Li)}get value(){return K(this,Xr)}set value(e){K(this,Xr)!==e&&(mi(this,Xr,e),!K(this,Ji,Ba)||K(this,Ji,Ba).length===1?e==null?K(this,Li).removeAttributeNS(K(this,Di),K(this,Ci)):K(this,Li).setAttributeNS(K(this,Di),K(this,Ci),e):K(this,Li).setAttributeNS(K(this,Di),K(this,Ci),K(this,Ji,Ba).toString()))}get booleanValue(){return K(this,Li).hasAttributeNS(K(this,Di),K(this,Ci))}set booleanValue(e){if(!K(this,Ji,Ba)||K(this,Ji,Ba).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}}Xr=new WeakMap;Li=new WeakMap;Ci=new WeakMap;Di=new WeakMap;Ji=new WeakSet;Ba=function(){return Yv.get(this)};class br extends qv{constructor(e,i){super(),qt(this,Gs,void 0),qt(this,yt,void 0),mi(this,Gs,e),mi(this,yt,i?[...i]:[new Text])}get replacementNodes(){return K(this,yt)}get parentNode(){return K(this,Gs)}get nextSibling(){return K(this,yt)[K(this,yt).length-1].nextSibling}get previousSibling(){return K(this,yt)[0].previousSibling}get value(){return K(this,yt).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const i=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===ST?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),mi(this,yt,RT(K(this,yt)[0].parentNode,K(this,yt),i,this.nextSibling))}}Gs=new WeakMap;yt=new WeakMap;class Gv extends br{constructor(e,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=i,this.directive=a}}function RT(t,e,i,a=null){let r=0,n,s,o,l=i.length,d=e.length;for(;r<l&&r<d&&e[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==e[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)t.insertBefore(i[r++],a);if(r==l)for(;r<d;)t.removeChild(e[r++]);else{for(n=e[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(t.replaceChild(o,n),n=s):t.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,t.removeChild(n),n=s}return i}const sm={string:t=>String(t)};class zv{constructor(e){this.template=e,this.state=void 0}}const na=new WeakMap,sa=new WeakMap,xd={partial:(t,e)=>{e[t.expression]=new zv(t.template)},if:(t,e)=>{var i;if(Qv(t.expression,e))if(na.get(t)!==t.template){na.set(t,t.template);const a=new El(t.template,e,vc);t.replace(a),sa.set(t,a)}else(i=sa.get(t))==null||i.update(e);else t.replace(""),na.delete(t),sa.delete(t)}},LT=Object.keys(xd),vc={processCallback(t,e,i){var a,r;if(i)for(const[n,s]of e){if(s instanceof Gv){if(!s.directive){const l=LT.find(d=>s.template.hasAttribute(d));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=xd[s.directive])==null||a.call(xd,s,i);continue}let o=Qv(n,i);if(o instanceof zv){na.get(s)!==o.template?(na.set(s,o.template),o=new El(o.template,o.state,vc),s.value=o,sa.set(s,o)):(r=sa.get(s))==null||r.update(o.state);continue}o?(s instanceof Rt&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof Rt?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,na.delete(s),sa.delete(s))):s instanceof Rt?s.value=void 0:(s.value=void 0,na.delete(s),sa.delete(s))}}},om={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=sm[e])==null?void 0:i.call(sm,t)}};function CT(t){return DT(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function Qv(t,e={}){var i,a,r,n,s,o,l;const d=CT(t);if(d.length===0||d.some(({type:m})=>!m))return Lr(t);if(((i=d[0])==null?void 0:i.token)===">"){const m=e[(a=d[1])==null?void 0:a.token];if(!m)return Lr(t);const p={...e};m.state=p;const h=d.slice(2);for(let u=0;u<h.length;u+=3){const v=(r=h[u])==null?void 0:r.token,E=(n=h[u+1])==null?void 0:n.token,g=(s=h[u+2])==null?void 0:s.token;v&&E==="="&&(p[v]=Cr(g,e))}return m}if(d.length===1)return Jn(d[0])?Cr(d[0].token,e):Lr(t);if(d.length===2){const m=(o=d[0])==null?void 0:o.token,p=om[m];if(!p||!Jn(d[1]))return Lr(t);const h=Cr(d[1].token,e);return p(h)}if(d.length===3){const m=(l=d[1])==null?void 0:l.token,p=om[m];if(!p||!Jn(d[0])||!Jn(d[2]))return Lr(t);const h=Cr(d[0].token,e);if(m==="|")return p(h,d[2].token);const u=Cr(d[2].token,e);return p(h,u)}}function Lr(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function Jn({type:t}){return["number","boolean","string","param"].includes(t)}function Cr(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):Op(t)?parseFloat(t):e[t]}function DT(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const s in e)a=e[s].exec(t),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var fc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Mi=(t,e,i)=>(fc(t,e,"read from private field"),i?i.call(t):e.get(t)),zi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},hi=(t,e,i,a)=>(fc(t,e,"write to private field"),e.set(t,i),i),Nl=(t,e,i)=>(fc(t,e,"access private method"),i),ir,zs,ar,Wa,Od,jv,Qs,Nd,Jr;const Pl={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Zv=Ae.createElement("template");Zv.innerHTML=`
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
`;class _l extends b.HTMLElement{constructor(){super(),zi(this,Od),zi(this,Qs),zi(this,ir,void 0),zi(this,zs,void 0),zi(this,ar,void 0),zi(this,Wa,void 0),zi(this,Jr,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),hi(this,Wa,new MutationObserver(e=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||e.some(a=>{const r=a.target;return r===this?!0:r.localName!=="media-controller"?!1:!!(Pl[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()})),hi(this,Jr,this.render.bind(this)),Nl(this,Od,jv).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Mi(this,ir))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(hi(this,ir,e),hi(this,ar,null),this.createRenderer())}get props(){var e,i,a;const r=[...Array.from((i=(e=this.mediaController)==null?void 0:e.attributes)!=null?i:[]).filter(({name:s})=>Pl[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const o=(a=Pl[s.name])!=null?a:x0(s.name);let{value:l}=s;l!=null?(Op(l)&&(l=parseFloat(l)),n[o]=l===""?!0:l):n[o]=!1}return n}attributeChangedCallback(e,i,a){e==="template"&&i!=a&&Nl(this,Qs,Nd).call(this)}connectedCallback(){this.addEventListener(Xt.BREAKPOINTS_COMPUTED,Mi(this,Jr)),Mi(this,Wa).observe(this,{attributes:!0}),Mi(this,Wa).observe(this.renderRoot,{attributes:!0,subtree:!0}),Nl(this,Qs,Nd).call(this)}disconnectedCallback(){this.removeEventListener(Xt.BREAKPOINTS_COMPUTED,Mi(this,Jr)),Mi(this,Wa).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Mi(this,zs)&&(hi(this,zs,this.template),this.renderer=new El(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Zv.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}}ir=new WeakMap;zs=new WeakMap;ar=new WeakMap;Wa=new WeakMap;Od=new WeakSet;jv=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};Qs=new WeakSet;Nd=function(){var t;const e=this.getAttribute("template");if(!e||e===Mi(this,ar))return;const i=this.getRootNode(),a=(t=i?.getElementById)==null?void 0:t.call(i,e);if(a){hi(this,ar,e),hi(this,ir,a),this.createRenderer();return}MT(e)&&(hi(this,ar,e),xT(e).then(r=>{const n=Ae.createElement("template");n.innerHTML=r,hi(this,ir,n),this.createRenderer()}).catch(console.error))};Jr=new WeakMap;_l.observedAttributes=["template"];_l.processor=vc;function MT(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function xT(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}b.customElements.get("media-theme")||b.customElements.define("media-theme",_l);function OT({anchor:t,floating:e,placement:i}){const a=NT({anchor:t,floating:e}),{x:r,y:n}=$T(a,i);return{x:r,y:n}}function NT({anchor:t,floating:e}){return{anchor:PT(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function PT(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function $T({anchor:t,floating:e},i){const a=UT(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=Xv(i),s=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,l=t[r]/2-e[r]/2;let d;switch(n){case"top":d={x:s,y:t.y-e.height};break;case"bottom":d={x:s,y:t.y+t.height};break;case"right":d={x:t.x+t.width,y:o};break;case"left":d={x:t.x-e.width,y:o};break;default:d={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":d[a]-=l;break;case"end":d[a]+=l;break}return d}function Xv(t){return t.split("-")[0]}function UT(t){return["top","bottom"].includes(Xv(t))?"y":"x"}class Ec extends Event{constructor({action:e="auto",relatedTarget:i,...a}){super("invoke",a),this.action=e,this.relatedTarget=i}}class HT extends Event{constructor({newState:e,oldState:i,...a}){super("toggle",a),this.newState=e,this.oldState=i}}var _c=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Q=(t,e,i)=>(_c(t,e,"read from private field"),i?i.call(t):e.get(t)),te=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},lt=(t,e,i,a)=>(_c(t,e,"write to private field"),e.set(t,i),i),ie=(t,e,i)=>(_c(t,e,"access private method"),i),Wt,Ui,fi,js,en,ua,Mn,Pd,Jv,Po,bc,$o,Zs,$d,Ud,ef,Hd,tf,Bd,af,rr,nr,sr,xn,Uo,gc,Wd,rf,yc,nf,Fd,sf,Tc,of,Kd,lf,Vd,df,mn,Ho,qd,uf,pn,Bo,Xs,Yd;function pr({type:t,text:e,value:i,checked:a}){const r=Ae.createElement("media-chrome-menu-item");r.type=t,r.part.add("menu-item"),r.part.add(t),r.value=i,r.checked=a;const n=Ae.createElement("span");return n.textContent=e,r.append(n),r}function ca(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function BT(t){return`
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
  `}const Qi={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class ht extends b.HTMLElement{constructor(){if(super(),te(this,Pd),te(this,Po),te(this,Zs),te(this,Ud),te(this,Hd),te(this,Bd),te(this,sr),te(this,Uo),te(this,Wd),te(this,yc),te(this,Fd),te(this,Tc),te(this,Kd),te(this,Vd),te(this,mn),te(this,qd),te(this,pn),te(this,Xs),te(this,Wt,null),te(this,Ui,null),te(this,fi,null),te(this,js,new Set),te(this,en,void 0),te(this,ua,!1),te(this,Mn,null),te(this,$o,()=>{const e=Q(this,js),i=new Set(this.items);for(const a of e)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));lt(this,js,i)}),te(this,rr,()=>{ie(this,sr,xn).call(this),ie(this,Uo,gc).call(this,!1)}),te(this,nr,()=>{ie(this,sr,xn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),lt(this,en,new MutationObserver(Q(this,$o)))}static get observedAttributes(){return[Qi.DISABLED,Qi.HIDDEN,Qi.STYLE,Qi.ANCHOR,j.MEDIA_CONTROLLER]}static formatMenuItemText(e,i){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":ie(this,Pd,Jv).call(this,e);break;case"invoke":ie(this,Ud,ef).call(this,e);break;case"click":ie(this,Wd,rf).call(this,e);break;case"toggle":ie(this,Fd,sf).call(this,e);break;case"focusout":ie(this,Kd,lf).call(this,e);break;case"keydown":ie(this,Vd,df).call(this,e);break}}connectedCallback(){var e,i;Q(this,en).observe(this.defaultSlot,{childList:!0}),lt(this,Mn,Mu(this.shadowRoot,":host")),ie(this,Zs,$d).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),lt(this,Wt,nd(this)),(i=(e=Q(this,Wt))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(ur(On(this),Q(this,rr)),ur(this,Q(this,nr))),ie(this,Po,bc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,i;Q(this,en).disconnect(),cr(On(this),Q(this,rr)),cr(this,Q(this,nr)),this.disable(),(i=(e=Q(this,Wt))==null?void 0:e.unassociateElement)==null||i.call(e,this),lt(this,Wt,null),lt(this,Ui,null),lt(this,fi,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,i,a){var r,n,s,o;e===Qi.HIDDEN&&a!==i?(Q(this,ua)||lt(this,ua,!0),this.hidden?ie(this,Bd,af).call(this):ie(this,Hd,tf).call(this),this.dispatchEvent(new HT({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===j.MEDIA_CONTROLLER?(i&&((n=(r=Q(this,Wt))==null?void 0:r.unassociateElement)==null||n.call(r,this),lt(this,Wt,null)),a&&this.isConnected&&(lt(this,Wt,nd(this)),(o=(s=Q(this,Wt))==null?void 0:s.associateElement)==null||o.call(s,this))):e===Qi.DISABLED&&a!==i?a==null?this.enable():this.disable():e===Qi.STYLE&&a!==i&&ie(this,Zs,$d).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=nl(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(WT)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(a=>a.value===e);i&&ie(this,Xs,Yd).call(this,i)}focus(){if(lt(this,Ui,Du()),this.items.length){ie(this,pn,Bo).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e?.focus()}handleSelect(e){var i;const a=ie(this,mn,Ho).call(this,e);a&&(ie(this,Xs,Yd).call(this,a,a.type==="checkbox"),Q(this,fi)&&!this.hidden&&((i=Q(this,Ui))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,a;const{key:r}=e,n=this.items,s=(a=(i=ie(this,mn,Ho).call(this,e))!=null?i:ie(this,qd,uf).call(this))!=null?a:n[0],o=n.indexOf(s);let l=Math.max(0,o);r==="ArrowDown"?l++:r==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=n.length-1),l<0&&(l=n.length-1),l>n.length-1&&(l=0),ie(this,pn,Bo).call(this,n[l]),n[l].focus()}}Wt=new WeakMap;Ui=new WeakMap;fi=new WeakMap;js=new WeakMap;en=new WeakMap;ua=new WeakMap;Mn=new WeakMap;Pd=new WeakSet;Jv=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&ie(this,Po,bc).call(this),e.name||Q(this,$o).call(this)};Po=new WeakSet;bc=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};$o=new WeakMap;Zs=new WeakSet;$d=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};Ud=new WeakSet;ef=function(t){lt(this,fi,t.relatedTarget),bi(this,t.relatedTarget)||(this.hidden=!this.hidden)};Hd=new WeakSet;tf=function(){var t;(t=Q(this,fi))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),ur(On(this),Q(this,rr)),ur(this,Q(this,nr))};Bd=new WeakSet;af=function(){var t;(t=Q(this,fi))==null||t.setAttribute("aria-expanded","false"),cr(On(this),Q(this,rr)),cr(this,Q(this,nr))};rr=new WeakMap;nr=new WeakMap;sr=new WeakSet;xn=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=OT({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=On(this).getBoundingClientRect(),n=r.width-e-t,s=r.height-i-this.offsetHeight,{style:o}=Q(this,Mn);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,n)}px`),o.setProperty("--_menu-bottom",`${s}px`);const l=getComputedStyle(this),m=o.getPropertyValue("--_menu-bottom")===l.bottom?s:parseFloat(l.bottom),p=r.height-m-parseFloat(l.marginBottom);this.style.setProperty("--_menu-max-height",`${p}px`)};Uo=new WeakSet;gc=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e?.querySelector('[role="menu"]'),{style:a}=Q(this,Mn);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),ie(this,sr,xn).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),ie(this,sr,xn).call(this);a.removeProperty("--media-menu-transition-in")};Wd=new WeakSet;rf=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(Q(this,yc,nf))){(e=Q(this,Ui))==null||e.focus(),this.hidden=!0;return}const i=ie(this,mn,Ho).call(this,t);!i||i.hasAttribute("disabled")||(ie(this,pn,Bo).call(this,i),this.handleSelect(t))};yc=new WeakSet;nf=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};Fd=new WeakSet;sf=function(t){if(t.target===this)return;ie(this,Tc,of).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Ec({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);ie(this,Uo,gc).call(this,!0)};Tc=new WeakSet;of=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};Kd=new WeakSet;lf=function(t){var e;bi(this,t.relatedTarget)||(Q(this,ua)&&((e=Q(this,Ui))==null||e.focus()),Q(this,fi)&&Q(this,fi)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};Vd=new WeakSet;df=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:d}=t;if(!(o||l||d)&&this.keysUsed.includes(s))if(t.preventDefault(),t.stopPropagation(),s==="Tab"){if(Q(this,ua)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=Q(this,Ui))==null||n.focus(),Q(this,ua)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(t):this.handleMove(t)};mn=new WeakSet;Ho=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};qd=new WeakSet;uf=function(){return this.items.find(t=>t.tabIndex===0)};pn=new WeakSet;Bo=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};Xs=new WeakSet;Yd=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};ht.shadowRootOptions={mode:"open"};ht.getTemplateHTML=BT;function WT(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t?.role)}function On(t){var e;return(e=t.getAttribute("bounds")?fr(t,`#${t.getAttribute("bounds")}`):ze(t)||t.parentElement)!=null?e:t}b.customElements.get("media-chrome-menu")||b.customElements.define("media-chrome-menu",ht);var Ac=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ve=(t,e,i)=>(Ac(t,e,"read from private field"),i?i.call(t):e.get(t)),ai=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$l=(t,e,i,a)=>(Ac(t,e,"write to private field"),e.set(t,i),i),Za=(t,e,i)=>(Ac(t,e,"access private method"),i),Js,vn,Gd,cf,Wo,kc,wc,hf,Qt,Fa,zd,eo,Qd;function FT(t){return`
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
      ${this.getSuffixSlotInnerHTML(t)}
    </slot>
    <slot name="submenu"></slot>
  `}function KT(t){return""}const st={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class Vi extends b.HTMLElement{constructor(){if(super(),ai(this,Gd),ai(this,Wo),ai(this,wc),ai(this,eo),ai(this,Js,!1),ai(this,vn,void 0),ai(this,Qt,()=>{var e,i;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(i=r?.dataset.description)!=null?i:r?.text,s=Ae.createElement("span");s.textContent=n??"",a.replaceChildren(s)}),ai(this,Fa,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",Ve(this,Fa));return}this.handleClick(e)}),ai(this,zd,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",Ve(this,Fa));return}this.addEventListener("keyup",Ve(this,Fa),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=at(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[st.TYPE,st.DISABLED,st.CHECKED,st.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Dr(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":Za(this,Gd,cf).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":Ve(this,zd).call(this,e);break;case"keyup":Ve(this,Fa).call(this,e);break}}attributeChangedCallback(e,i,a){e===st.CHECKED&&Dr(this)&&!Ve(this,Js)?this.setAttribute("aria-checked",a!=null?"true":"false"):e===st.TYPE&&a!==i?this.role="menuitem"+a:e===st.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(st.DISABLED)||this.enable(),this.role="menuitem"+this.type,$l(this,vn,jd(this,this.parentNode)),Za(this,eo,Qd).call(this),this.submenuElement&&Za(this,Wo,kc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),Za(this,eo,Qd).call(this),$l(this,vn,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=nl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(st.TYPE))!=null?e:""}set type(e){this.setAttribute(st.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(st.VALUE))!=null?e:this.text}set value(e){this.setAttribute(st.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Dr(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Dr(this)&&($l(this,Js,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Dr(this)||this.invokeTargetElement&&bi(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Ec({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}Js=new WeakMap;vn=new WeakMap;Gd=new WeakSet;cf=function(t){const e=t.target;if(!e?.name)for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?Za(this,Wo,kc).call(this):Za(this,wc,hf).call(this))};Wo=new WeakSet;kc=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Ve(this,Qt)),this.submenuElement.addEventListener("addmenuitem",Ve(this,Qt)),this.submenuElement.addEventListener("removemenuitem",Ve(this,Qt)),Ve(this,Qt).call(this)};wc=new WeakSet;hf=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Ve(this,Qt)),this.submenuElement.removeEventListener("addmenuitem",Ve(this,Qt)),this.submenuElement.removeEventListener("removemenuitem",Ve(this,Qt)),Ve(this,Qt).call(this)};Qt=new WeakMap;Fa=new WeakMap;zd=new WeakMap;eo=new WeakSet;Qd=function(){var t;const e=(t=Ve(this,vn))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};Vi.shadowRootOptions={mode:"open"};Vi.getTemplateHTML=FT;Vi.getSuffixSlotInnerHTML=KT;function Dr(t){return t.type==="radio"||t.type==="checkbox"}function jd(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?jd(t,i):e?.items?e:jd(e,e?.parentNode)}b.customElements.get("media-chrome-menu-item")||b.customElements.define("media-chrome-menu-item",Vi);function VT(t){return`
    ${ht.getTemplateHTML(t)}
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
  `}class mf extends ht{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ze(this).querySelector("media-settings-menu-button")}}mf.getTemplateHTML=VT;b.customElements.get("media-settings-menu")||b.customElements.define("media-settings-menu",mf);function qT(t){return`
    ${Vi.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function YT(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class bl extends Vi{}bl.shadowRootOptions={mode:"open"};bl.getTemplateHTML=qT;bl.getSuffixSlotInnerHTML=YT;b.customElements.get("media-settings-menu-item")||b.customElements.define("media-settings-menu-item",bl);class gr extends xe{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=nl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new Ec({relatedTarget:this}))}}b.customElements.get("media-chrome-menu-button")||b.customElements.define("media-chrome-menu-button",gr);function GT(){return`
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
  `}function zT(){return L("Settings")}class Sc extends gr{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",L("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:ze(this).querySelector("media-settings-menu")}}Sc.getSlotTemplateHTML=GT;Sc.getTooltipContentHTML=zT;b.customElements.get("media-settings-menu-button")||b.customElements.define("media-settings-menu-button",Sc);var Ic=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},pf=(t,e,i)=>(Ic(t,e,"read from private field"),i?i.call(t):e.get(t)),es=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Zd=(t,e,i,a)=>(Ic(t,e,"write to private field"),e.set(t,i),i),ts=(t,e,i)=>(Ic(t,e,"access private method"),i),tn,Fo,to,Xd,io,Jd;class QT extends ht{constructor(){super(...arguments),es(this,to),es(this,io),es(this,tn,[]),es(this,Fo,void 0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_AUDIO_TRACK_LIST,c.MEDIA_AUDIO_TRACK_ENABLED,c.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:e===c.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(Zd(this,tn,C0(a??"")),ts(this,to,Xd).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ts(this,io,Jd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ts(this,io,Jd))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=ze(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return pf(this,tn)}set mediaAudioTrackList(e){Zd(this,tn,e),ts(this,to,Xd).call(this)}get mediaAudioTrackEnabled(){var e;return(e=le(this,c.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){ne(this,c.MEDIA_AUDIO_TRACK_ENABLED,e)}}tn=new WeakMap;Fo=new WeakMap;to=new WeakSet;Xd=function(){if(pf(this,Fo)===JSON.stringify(this.mediaAudioTrackList))return;Zd(this,Fo,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="",t.sort((e,i)=>e.id.localeCompare(i.id,void 0,{numeric:!0}));for(const e of t){const i=this.formatMenuItemText(e.label,e),a=pr({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(ca(this,"checked-indicator")),this.defaultSlot.append(a)}};io=new WeakSet;Jd=function(){if(this.value==null)return;const t=new b.CustomEvent(D.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};b.customElements.get("media-audio-track-menu")||b.customElements.define("media-audio-track-menu",QT);const jT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function ZT(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${jT}</slot>
  `}function XT(){return L("Audio")}const lm=t=>{const e=L("Audio");t.setAttribute("aria-label",e)};class Rc extends gr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_AUDIO_TRACK_ENABLED,c.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_LANG&&lm(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=ze(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=le(this,c.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){ne(this,c.MEDIA_AUDIO_TRACK_ENABLED,e)}}Rc.getSlotTemplateHTML=ZT;Rc.getTooltipContentHTML=XT;b.customElements.get("media-audio-track-menu-button")||b.customElements.define("media-audio-track-menu-button",Rc);var Lc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},JT=(t,e,i)=>(Lc(t,e,"read from private field"),e.get(t)),Ul=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},eA=(t,e,i,a)=>(Lc(t,e,"write to private field"),e.set(t,i),i),is=(t,e,i)=>(Lc(t,e,"access private method"),i),Ko,ao,eu,ro,tu;const tA=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function iA(t){return`
    ${ht.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${tA}</slot>
  `}class vf extends ht{constructor(){super(...arguments),Ul(this,ao),Ul(this,ro),Ul(this,Ko,void 0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_SUBTITLES_LIST&&i!==a?is(this,ao,eu).call(this):e===c.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a||"",is(this,ao,eu).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",is(this,ro,tu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",is(this,ro,tu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ze(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return dm(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){um(this,c.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dm(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){um(this,c.MEDIA_SUBTITLES_SHOWING,e)}}Ko=new WeakMap;ao=new WeakSet;eu=function(){var t;const e=JT(this,Ko)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(c.MEDIA_SUBTITLES_SHOWING);if(!e&&!i)return;eA(this,Ko,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=pr({type:"radio",text:this.formatMenuItemText(L("Off")),value:"off",checked:a});r.prepend(ca(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const s of n){const o=pr({type:"radio",text:this.formatMenuItemText(s.label,s),value:dd(s),checked:this.value==dd(s)});o.prepend(ca(this,"checked-indicator")),((t=s.kind)!=null?t:"subs")==="captions"&&o.append(ca(this,"captions-indicator")),this.defaultSlot.append(o)}};ro=new WeakSet;tu=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(c.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t?.length&&i&&this.dispatchEvent(new b.CustomEvent(D.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new b.CustomEvent(D.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};vf.getTemplateHTML=iA;const dm=(t,e)=>{const i=t.getAttribute(e);return i?ul(i):[]},um=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=In(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};b.customElements.get("media-captions-menu")||b.customElements.define("media-captions-menu",vf);const aA=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,rA=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function nA(){return`
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
      <slot name="on">${aA}</slot>
      <slot name="off">${rA}</slot>
    </slot>
  `}function sA(){return L("Captions")}const cm=t=>{t.setAttribute("data-captions-enabled",Jp(t).toString())},hm=t=>{t.setAttribute("aria-label",L("closed captions"))};class Cc extends gr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING,c.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),hm(this),cm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_SUBTITLES_SHOWING?cm(this):e===c.MEDIA_LANG&&hm(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=ze(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return mm(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){pm(this,c.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return mm(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){pm(this,c.MEDIA_SUBTITLES_SHOWING,e)}}Cc.getSlotTemplateHTML=nA;Cc.getTooltipContentHTML=sA;const mm=(t,e)=>{const i=t.getAttribute(e);return i?ul(i):[]},pm=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=In(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};b.customElements.get("media-captions-menu-button")||b.customElements.define("media-captions-menu-button",Cc);var ff=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ka=(t,e,i)=>(ff(t,e,"read from private field"),i?i.call(t):e.get(t)),Hl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ya=(t,e,i)=>(ff(t,e,"access private method"),i),Ni,Va,an,no,iu;const Bl={RATES:"rates"};class oA extends ht{constructor(){super(),Hl(this,Va),Hl(this,no),Hl(this,Ni,new Nu(this,Bl.RATES,{defaultValue:Dv})),ya(this,Va,an).call(this)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE,Bl.RATES]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_PLAYBACK_RATE&&i!=a?(this.value=a,ya(this,Va,an).call(this)):e===Bl.RATES&&i!=a&&(Ka(this,Ni).value=a,ya(this,Va,an).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ya(this,no,iu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ya(this,no,iu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ze(this).querySelector("media-playback-rate-menu-button")}get rates(){return Ka(this,Ni)}set rates(e){e?Array.isArray(e)?Ka(this,Ni).value=e.join(" "):typeof e=="string"&&(Ka(this,Ni).value=e):Ka(this,Ni).value="",ya(this,Va,an).call(this)}get mediaPlaybackRate(){return re(this,c.MEDIA_PLAYBACK_RATE,ja)}set mediaPlaybackRate(e){he(this,c.MEDIA_PLAYBACK_RATE,e)}}Ni=new WeakMap;Va=new WeakSet;an=function(){this.defaultSlot.textContent="";const t=Fi(this.mediaPlaybackRate),e=new Set(Array.from(Ka(this,Ni)).map(a=>Fi(Number(a))));t>0&&!e.has(t)&&e.add(t);const i=Array.from(e).sort((a,r)=>a-r);for(const a of i){const r=pr({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:t===a});r.prepend(ca(this,"checked-indicator")),this.defaultSlot.append(r)}};no=new WeakSet;iu=function(){if(!this.value)return;const t=new b.CustomEvent(D.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};b.customElements.get("media-playback-rate-menu")||b.customElements.define("media-playback-rate-menu",oA);const so=1;function lA(t){return`
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
    <slot name="icon">${t.mediaplaybackrate?Fi(+t.mediaplaybackrate):so}x</slot>
  `}function dA(){return L("Playback rate")}class Dc extends gr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Fi((e=this.mediaPlaybackRate)!=null?e:so)}x`}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===c.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Fi(Number.isNaN(r)?so:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",L("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:ze(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return re(this,c.MEDIA_PLAYBACK_RATE,so)}set mediaPlaybackRate(e){he(this,c.MEDIA_PLAYBACK_RATE,e)}}Dc.getSlotTemplateHTML=lA;Dc.getTooltipContentHTML=dA;b.customElements.get("media-playback-rate-menu-button")||b.customElements.define("media-playback-rate-menu-button",Dc);var Mc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ni=(t,e,i)=>(Mc(t,e,"read from private field"),i?i.call(t):e.get(t)),as=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},vm=(t,e,i,a)=>(Mc(t,e,"write to private field"),e.set(t,i),i),Ta=(t,e,i)=>(Mc(t,e,"access private method"),i),rn,Kt,qa,nn,oo,au;class uA extends ht{constructor(){super(...arguments),as(this,qa),as(this,oo),as(this,rn,[]),as(this,Kt,{})}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_RENDITION_LIST,c.MEDIA_RENDITION_SELECTED,c.MEDIA_RENDITION_UNAVAILABLE,c.MEDIA_HEIGHT,c.MEDIA_WIDTH]}static formatMenuItemText(e,i){return super.formatMenuItemText(e,i)}static formatRendition(e,{showBitrate:i=!1}={}){const a=`${Math.min(e.width,e.height)}p`;if(i&&e.bitrate){const r=e.bitrate/1e6,n=`${r.toFixed(r<1?1:0)} Mbps`;return`${a} (${n})`}return this.formatMenuItemText(a,e)}static compareRendition(e,i){var a,r;return i.height===e.height?((a=i.bitrate)!=null?a:0)-((r=e.bitrate)!=null?r:0):i.height-e.height}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),i!==a)switch(e){case c.MEDIA_RENDITION_SELECTED:this.value=a??"auto",Ta(this,qa,nn).call(this);break;case c.MEDIA_RENDITION_LIST:vm(this,rn,S0(a)),Ta(this,qa,nn).call(this);break;case c.MEDIA_HEIGHT:case c.MEDIA_WIDTH:Ta(this,qa,nn).call(this);break}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ta(this,oo,au))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ta(this,oo,au))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ze(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return ni(this,rn)}set mediaRenditionList(e){vm(this,rn,e),Ta(this,qa,nn).call(this)}get mediaRenditionSelected(){return le(this,c.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ne(this,c.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return re(this,c.MEDIA_HEIGHT)}set mediaHeight(e){he(this,c.MEDIA_HEIGHT,e)}get mediaWidth(){return re(this,c.MEDIA_WIDTH)}set mediaWidth(e){he(this,c.MEDIA_WIDTH,e)}compareRendition(e,i){return this.constructor.compareRendition(e,i)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}formatRendition(e,i){return this.constructor.formatRendition(e,i)}showRenditionBitrate(e){return this.mediaRenditionList.some(i=>i!==e&&i.height===e.height&&i.bitrate!==e.bitrate)}}rn=new WeakMap;Kt=new WeakMap;qa=new WeakSet;nn=function(){const t=!this.mediaRenditionSelected;if(ni(this,Kt).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&ni(this,Kt).mediaHeight===this.mediaHeight&&ni(this,Kt).mediaWidth===this.mediaWidth&&ni(this,Kt).isAuto===t)return;ni(this,Kt).mediaRenditionList=JSON.stringify(this.mediaRenditionList),ni(this,Kt).mediaHeight=this.mediaHeight,ni(this,Kt).mediaWidth=this.mediaWidth,ni(this,Kt).isAuto=t;const e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),i=e.find(s=>s.id===this.mediaRenditionSelected);for(const s of e)s.selected=s===i;this.defaultSlot.textContent="";for(const s of e){const o=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),l=pr({type:"radio",text:o,value:`${s.id}`,checked:s.selected&&!t});l.prepend(ca(this,"checked-indicator")),this.defaultSlot.append(l)}const a=i&&this.showRenditionBitrate(i);let r;t&&(i?r=this.formatMenuItemText(`${L("Auto")} • ${this.formatRendition(i,{showBitrate:a})}`,i):this.mediaHeight>0&&this.mediaWidth>0&&(r=this.formatMenuItemText(`${L("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),r||(r=this.formatMenuItemText(L("Auto")));const n=pr({type:"radio",text:r,value:"auto",checked:t});n.dataset.description=r,n.prepend(ca(this,"checked-indicator")),this.defaultSlot.append(n)};oo=new WeakSet;au=function(){if(this.value==null)return;const t=new b.CustomEvent(D.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};b.customElements.get("media-rendition-menu")||b.customElements.define("media-rendition-menu",uA);const cA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function hA(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${cA}</slot>
  `}function mA(){return L("Quality")}class xc extends gr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_RENDITION_SELECTED,c.MEDIA_RENDITION_UNAVAILABLE,c.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",L("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:ze(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return le(this,c.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ne(this,c.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return re(this,c.MEDIA_HEIGHT)}set mediaHeight(e){he(this,c.MEDIA_HEIGHT,e)}}xc.getSlotTemplateHTML=hA;xc.getTooltipContentHTML=mA;b.customElements.get("media-rendition-menu-button")||b.customElements.define("media-rendition-menu-button",xc);var Oc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Vt=(t,e,i)=>(Oc(t,e,"read from private field"),i?i.call(t):e.get(t)),Mt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ef=(t,e,i,a)=>(Oc(t,e,"write to private field"),e.set(t,i),i),dt=(t,e,i)=>(Oc(t,e,"access private method"),i),vr,Nn,gl,aa,Xa,Nc,_f,lo,ru,uo,nu,bf,Vo,qo,co;function pA(t){return`
      ${ht.getTemplateHTML(t)}
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
    `}class gf extends ht{constructor(){super(),Mt(this,Nn),Mt(this,aa),Mt(this,Nc),Mt(this,lo),Mt(this,nu),Mt(this,vr,!1),Mt(this,uo,e=>{const i=e.target,a=i?.nodeName==="VIDEO",r=dt(this,lo,ru).call(this,i);(a||r)&&(Vt(this,vr)?dt(this,aa,Xa).call(this):dt(this,nu,bf).call(this,e))}),Mt(this,Vo,e=>{const i=e.target,a=this.contains(i),r=e.button===2,n=i?.nodeName==="VIDEO",s=dt(this,lo,ru).call(this,i);a||r&&(n||s)||dt(this,aa,Xa).call(this)}),Mt(this,qo,e=>{e.key==="Escape"&&dt(this,aa,Xa).call(this)}),Mt(this,co,e=>{var i,a;const r=e.target;if((i=r.matches)!=null&&i.call(r,'button[invoke="copy"]')){const n=(a=r.closest("media-context-menu-item"))==null?void 0:a.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}dt(this,aa,Xa).call(this)}),this.setAttribute("noautohide",""),dt(this,Nn,gl).call(this)}connectedCallback(){super.connectedCallback(),ze(this).addEventListener("contextmenu",Vt(this,uo)),this.addEventListener("click",Vt(this,co))}disconnectedCallback(){super.disconnectedCallback(),ze(this).removeEventListener("contextmenu",Vt(this,uo)),this.removeEventListener("click",Vt(this,co)),document.removeEventListener("mousedown",Vt(this,Vo)),document.removeEventListener("keydown",Vt(this,qo))}}vr=new WeakMap;Nn=new WeakSet;gl=function(){this.hidden=!Vt(this,vr)};aa=new WeakSet;Xa=function(){Ef(this,vr,!1),dt(this,Nn,gl).call(this)};Nc=new WeakSet;_f=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var i;e!==this&&dt(i=e,aa,Xa).call(i)})};lo=new WeakSet;ru=function(t){return t?t.hasAttribute("slot")&&t.getAttribute("slot")==="media"?!0:t.nodeName.includes("-")&&t.tagName.includes("-")?t.hasAttribute("src")||t.hasAttribute("poster")||t.hasAttribute("preload")||t.hasAttribute("playsinline"):!1:!1};uo=new WeakMap;nu=new WeakSet;bf=function(t){t.preventDefault(),dt(this,Nc,_f).call(this),Ef(this,vr,!0),this.style.position="fixed",this.style.left=`${t.clientX}px`,this.style.top=`${t.clientY}px`,dt(this,Nn,gl).call(this),document.addEventListener("mousedown",Vt(this,Vo),{once:!0}),document.addEventListener("keydown",Vt(this,qo),{once:!0})};Vo=new WeakMap;qo=new WeakMap;co=new WeakMap;gf.getTemplateHTML=pA;b.customElements.get("media-context-menu")||b.customElements.define("media-context-menu",gf);function vA(t){return`
    ${Vi.getTemplateHTML.call(this,t)}
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
  `}class Pc extends Vi{}Pc.shadowRootOptions={mode:"open"};Pc.getTemplateHTML=vA;b.customElements.get("media-context-menu-item")||b.customElements.define("media-context-menu-item",Pc);var yf=t=>{throw TypeError(t)},$c=(t,e,i)=>e.has(t)||yf("Cannot "+i),H=(t,e,i)=>($c(t,e,"read from private field"),i?i.call(t):e.get(t)),Te=(t,e,i)=>e.has(t)?yf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ge=(t,e,i,a)=>($c(t,e,"write to private field"),e.set(t,i),i),fe=(t,e,i)=>($c(t,e,"access private method"),i),yl=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends yl{}globalThis.DocumentFragment=t}var Uc=class extends yl{},fA=class extends yl{},EA={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Uc)}},ho,_A=class{constructor(t,e={}){Te(this,ho),Ge(this,ho,e?.detail)}get detail(){return H(this,ho)}initCustomEvent(){}};ho=new WeakMap;function bA(t,e){return new Uc}var Tf={document:{createElement:bA},DocumentFragment,customElements:EA,CustomEvent:_A,EventTarget:yl,HTMLElement:Uc,HTMLVideoElement:fA},Af=typeof window>"u"||typeof globalThis.customElements>"u",Yt=Af?Tf:globalThis,Yo=Af?Tf.document:globalThis.document;function gA(t){let e="";return Object.entries(t).forEach(([i,a])=>{a!=null&&(e+=`${su(i)}: ${a}; `)}),e?e.trim():void 0}function su(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function kf(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function He(t){if(t==null)return;let e=+t;return Number.isNaN(e)?void 0:e}function wf(t){let e=yA(t).toString();return e?"?"+e:""}function yA(t){let e={};for(let i in t)t[i]!=null&&(e[i]=t[i]);return new URLSearchParams(e)}var Sf=(t,e)=>!t||!e?!1:t.contains(e)?!0:Sf(t,e.getRootNode().host),If="mux.com",TA=()=>{try{return"3.14.0"}catch{}return"UNKNOWN"},AA=TA(),Rf=()=>AA,kA=(t,{token:e,customDomain:i=If,thumbnailTime:a,programTime:r}={})=>{var n;let s=e==null?a:void 0,{aud:o}=(n=Ja(e))!=null?n:{};if(!(e&&o!=="t"))return`https://image.${i}/${t}/thumbnail.webp${wf({token:e,time:s,program_time:r})}`},wA=(t,{token:e,customDomain:i=If,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=Ja(e))!=null?n:{};if(!(e&&s!=="s"))return`https://image.${i}/${t}/storyboard.vtt${wf({token:e,format:"webp",program_start_time:a,program_end_time:r})}`},Hc=t=>{if(t){if([X.LIVE,X.ON_DEMAND].includes(t))return t;if(t!=null&&t.includes("live"))return X.LIVE}},SA={crossorigin:"crossOrigin",playsinline:"playsInline"};function IA(t){var e;return(e=SA[t])!=null?e:kf(t)}var Ya,Ga,qe,RA=class{constructor(e,i){Te(this,Ya),Te(this,Ga),Te(this,qe,[]),Ge(this,Ya,e),Ge(this,Ga,i)}[Symbol.iterator](){return H(this,qe).values()}get length(){return H(this,qe).length}get value(){var e;return(e=H(this,qe).join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Ge(this,qe,[]),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return H(this,qe)[e]}values(){return H(this,qe).values()}keys(){return H(this,qe).keys()}forEach(e){H(this,qe).forEach(e)}add(...e){var i,a;e.forEach(r=>{this.contains(r)||H(this,qe).push(r)}),!(this.value===""&&!((i=H(this,Ya))!=null&&i.hasAttribute(`${H(this,Ga)}`)))&&((a=H(this,Ya))==null||a.setAttribute(`${H(this,Ga)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>{H(this,qe).splice(H(this,qe).indexOf(a),1)}),(i=H(this,Ya))==null||i.setAttribute(`${H(this,Ga)}`,`${this.value}`)}contains(e){return H(this,qe).includes(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){this.remove(e),this.add(i)}};Ya=new WeakMap,Ga=new WeakMap,qe=new WeakMap;var Lf=`[mux-player ${Rf()}]`;function si(...t){console.warn(Lf,...t)}function Ye(...t){console.error(Lf,...t)}function fm(t){var e;let i=(e=t.message)!=null?e:"";t.context&&(i+=` ${t.context}`),t.file&&(i+=` ${x("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t.file}`),si(i)}var Ue={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},ea={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},Em=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),LA=Object.values(Ue).filter(t=>Ue.PLAYSINLINE!==t),CA=Object.values(ea),DA=[...LA,...CA],MA=class extends Yt.HTMLElement{static get observedAttributes(){return DA}constructor(){super()}attributeChangedCallback(t,e,i){var a,r;switch(t){case ea.MUTED:{this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return}case ea.VOLUME:{let n=(a=He(i))!=null?a:1;this.media&&(this.media.volume=n);return}case ea.PLAYBACKRATE:{let n=(r=He(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var t,e;return(e=(t=this.media)==null?void 0:t.play())!=null?e:Promise.reject()}pause(){var t;(t=this.media)==null||t.pause()}load(){var t;(t=this.media)==null||t.load()}get media(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var t,e;return(e=(t=this.media)==null?void 0:t.paused)!=null?e:!0}get duration(){var t,e;return(e=(t=this.media)==null?void 0:t.duration)!=null?e:NaN}get ended(){var t,e;return(e=(t=this.media)==null?void 0:t.ended)!=null?e:!1}get buffered(){var t,e;return(e=(t=this.media)==null?void 0:t.buffered)!=null?e:Em}get seekable(){var t,e;return(e=(t=this.media)==null?void 0:t.seekable)!=null?e:Em}get readyState(){var t,e;return(e=(t=this.media)==null?void 0:t.readyState)!=null?e:0}get videoWidth(){var t,e;return(e=(t=this.media)==null?void 0:t.videoWidth)!=null?e:0}get videoHeight(){var t,e;return(e=(t=this.media)==null?void 0:t.videoHeight)!=null?e:0}get currentSrc(){var t,e;return(e=(t=this.media)==null?void 0:t.currentSrc)!=null?e:""}get currentTime(){var t,e;return(e=(t=this.media)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.media&&(this.media.currentTime=Number(t))}get volume(){var t,e;return(e=(t=this.media)==null?void 0:t.volume)!=null?e:1}set volume(t){this.media&&(this.media.volume=Number(t))}get playbackRate(){var t,e;return(e=(t=this.media)==null?void 0:t.playbackRate)!=null?e:1}set playbackRate(t){this.media&&(this.media.playbackRate=Number(t))}get defaultPlaybackRate(){var t;return(t=He(this.getAttribute(ea.PLAYBACKRATE)))!=null?t:1}set defaultPlaybackRate(t){t!=null?this.setAttribute(ea.PLAYBACKRATE,`${t}`):this.removeAttribute(ea.PLAYBACKRATE)}get crossOrigin(){return Mr(this,Ue.CROSSORIGIN)}set crossOrigin(t){this.setAttribute(Ue.CROSSORIGIN,`${t}`)}get autoplay(){return Mr(this,Ue.AUTOPLAY)!=null}set autoplay(t){t?this.setAttribute(Ue.AUTOPLAY,typeof t=="string"?t:""):this.removeAttribute(Ue.AUTOPLAY)}get loop(){return Mr(this,Ue.LOOP)!=null}set loop(t){t?this.setAttribute(Ue.LOOP,""):this.removeAttribute(Ue.LOOP)}get muted(){var t,e;return(e=(t=this.media)==null?void 0:t.muted)!=null?e:!1}set muted(t){this.media&&(this.media.muted=!!t)}get defaultMuted(){return Mr(this,Ue.MUTED)!=null}set defaultMuted(t){t?this.setAttribute(Ue.MUTED,""):this.removeAttribute(Ue.MUTED)}get playsInline(){return Mr(this,Ue.PLAYSINLINE)!=null}set playsInline(t){Ye("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(t){["","none","metadata","auto"].includes(t)?this.setAttribute(Ue.PRELOAD,t):this.removeAttribute(Ue.PRELOAD)}};function Mr(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var _m=MA,xA=`:host {
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
`,xr=new WeakMap,OA=class Cf{constructor(e,i){this.element=e,this.type=i,this.element.addEventListener(this.type,this);let a=xr.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let i=xr.get(this.element);i&&i.delete(this.type)}}static for(e){xr.has(e.element)||xr.set(e.element,new Map);let i=e.attributeName.slice(2),a=xr.get(e.element);return a&&a.has(i)?a.get(i):new Cf(e.element,i)}};function NA(t,e){return t instanceof Rt&&t.attributeName.startsWith("on")?(OA.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function PA(t,e){return e instanceof Df&&t instanceof br?(e.renderInto(t),!0):!1}function $A(t,e){return e instanceof DocumentFragment&&t instanceof br?(e.childNodes.length&&t.replace(...e.childNodes),!0):!1}function UA(t,e){if(t instanceof Rt){let i=t.attributeNamespace,a=t.element.getAttributeNS(i,t.attributeName);return String(e)!==a&&(t.value=String(e)),!0}return t.value=String(e),!0}function HA(t,e){if(t instanceof Rt&&e instanceof Element){let i=t.element;return i[t.attributeName]!==e&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),i[t.attributeName]=e),!0}return!1}function BA(t,e){if(typeof e=="boolean"&&t instanceof Rt){let i=t.attributeNamespace,a=t.element.hasAttributeNS(i,t.attributeName);return e!==a&&(t.booleanValue=e),!0}return!1}function WA(t,e){return e===!1&&t instanceof br?(t.replace(""),!0):!1}function FA(t,e){HA(t,e)||BA(t,e)||NA(t,e)||WA(t,e)||PA(t,e)||$A(t,e)||UA(t,e)}var Wl=new Map,bm=new WeakMap,gm=new WeakMap,Df=class{constructor(t,e,i){this.strings=t,this.values=e,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(Wl.has(this.stringsKey))return Wl.get(this.stringsKey);{let t=Yo.createElement("template"),e=this.strings.length-1;return t.innerHTML=this.strings.reduce((i,a,r)=>i+a+(r<e?`{{ ${r} }}`:""),""),Wl.set(this.stringsKey,t),t}}renderInto(t){var e;let i=this.template;if(bm.get(t)!==i){bm.set(t,i);let r=new El(i,this.values,this.processor);gm.set(t,r),t instanceof br?t.replace(...r.children):t.appendChild(r);return}let a=gm.get(t);(e=a?.update)==null||e.call(a,this.values)}},KA={processCallback(t,e,i){var a;if(i){for(let[r,n]of e)if(r in i){let s=(a=i[r])!=null?a:"";FA(n,s)}}}};function mo(t,...e){return new Df(t,e,KA)}function VA(t,e){t.renderInto(e)}var qA=t=>{let{tokens:e}=t;return e.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},YA=t=>mo`
  <style>
    ${qA(t)}
    ${xA}
  </style>
  ${jA(t)}
`,GA=t=>{let e=t.hotKeys?`${t.hotKeys}`:"";return Hc(t.streamType)==="live"&&(e+=" noarrowleft noarrowright"),e},zA={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},QA=Object.values(zA).join(", "),jA=t=>{var e,i,a,r,n,s,o,l,d,m,p,h,u,v,E,g,y,T,_,k,C,M,S,U,q,W,B,Pe,Qe,je,_e,Be,Lt,We,mt,Ze,Re,Jt,$e,Fe,ei,yr;return mo`
  <media-theme
    template="${t.themeTemplate||!1}"
    defaultstreamtype="${(e=t.defaultStreamType)!=null?e:!1}"
    hotkeys="${GA(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||!1}"
    noautoseektolive="${!!((i=t.streamType)!=null&&i.includes(X.LIVE))&&t.targetLiveWindow!==0}"
    novolumepref="${t.novolumepref||!1}"
    nomutedpref="${t.nomutedpref||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(a=t.audio)!=null?a:!1}"
    style="${(r=gA({"--media-primary-color":t.primaryColor,"--media-secondary-color":t.secondaryColor,"--media-accent-color":t.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!t.defaultHiddenCaptions}"
    forwardseekoffset="${(n=t.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=t.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(o=t.playbackRates)!=null?o:!1}"
    defaultshowremainingtime="${(l=t.defaultShowRemainingTime)!=null?l:!1}"
    defaultduration="${(d=t.defaultDuration)!=null?d:!1}"
    hideduration="${(m=t.hideDuration)!=null?m:!1}"
    title="${(p=t.title)!=null?p:!1}"
    videotitle="${(h=t.videoTitle)!=null?h:!1}"
    proudlydisplaymuxbadge="${(u=t.proudlyDisplayMuxBadge)!=null?u:!1}"
    exportparts="${QA}"
  >
    <mux-video
      slot="media"
      inert="${(v=t.noHotKeys)!=null?v:!1}"
      target-live-window="${(E=t.targetLiveWindow)!=null?E:!1}"
      stream-type="${(g=Hc(t.streamType))!=null?g:!1}"
      crossorigin="${(y=t.crossOrigin)!=null?y:""}"
      playsinline
      autoplay="${(T=t.autoplay)!=null?T:!1}"
      muted="${(_=t.muted)!=null?_:!1}"
      loop="${(k=t.loop)!=null?k:!1}"
      preload="${(C=t.preload)!=null?C:!1}"
      debug="${(M=t.debug)!=null?M:!1}"
      prefer-cmcd="${(S=t.preferCmcd)!=null?S:!1}"
      disable-tracking="${(U=t.disableTracking)!=null?U:!1}"
      disable-cookies="${(q=t.disableCookies)!=null?q:!1}"
      prefer-playback="${(W=t.preferPlayback)!=null?W:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      initial-bandwidth-estimate-kbps="${t.initialBandwidthEstimateKbps!=null?t.initialBandwidthEstimateKbps:!1}"
      initial-estimate-segments="${t.initialEstimateSegments!=null?t.initialEstimateSegments:!1}"
      min-preload-segments="${t.minPreloadSegments!=null?t.minPreloadSegments:!1}"
      beacon-collection-domain="${(B=t.beaconCollectionDomain)!=null?B:!1}"
      player-init-time="${(Pe=t.playerInitTime)!=null?Pe:!1}"
      player-software-name="${(Qe=t.playerSoftwareName)!=null?Qe:!1}"
      player-software-version="${(je=t.playerSoftwareVersion)!=null?je:!1}"
      env-key="${(_e=t.envKey)!=null?_e:!1}"
      custom-domain="${(Be=t.customDomain)!=null?Be:!1}"
      src="${t.src?t.src:t.playbackId?id(t):!1}"
      cast-src="${t.src?t.src:t.playbackId?id(t):!1}"
      cast-receiver="${(Lt=t.castReceiver)!=null?Lt:!1}"
      drm-token="${(mt=(We=t.tokens)==null?void 0:We.drm)!=null?mt:!1}"
      playback-token="${(Re=(Ze=t.tokens)==null?void 0:Ze.playback)!=null?Re:!1}"
      exportparts="video"
      disable-pseudo-ended="${(Jt=t.disablePseudoEnded)!=null?Jt:!1}"
      max-reconnect-retries="${($e=t.maxReconnectRetries)!=null?$e:!1}"
      max-auto-resolution="${(Fe=t.maxAutoResolution)!=null?Fe:!1}"
      cap-rendition-to-player-size="${(ei=t.capRenditionToPlayerSize)!=null?ei:!1}"
    >
      ${t.storyboard?mo`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:mo``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${t.poster?t.poster:!1}"
        placeholdersrc="${(yr=t.placeholder)!=null?yr:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Mf=t=>t.charAt(0).toUpperCase()+t.slice(1),ZA=(t,e=!1)=>{var i,a;if(t.muxCode){let r=Mf((i=t.errorCategory)!=null?i:"video"),n=el((a=t.errorCategory)!=null?a:Z.VIDEO);if(t.muxCode===N.NETWORK_OFFLINE)return x("Your device appears to be offline",e);if(t.muxCode===N.NETWORK_RECONNECTING)return x("Reconnecting...",e);if(t.muxCode===N.NETWORK_TOKEN_EXPIRED)return x("{category} URL has expired",e).format({category:r});if([N.NETWORK_TOKEN_SUB_MISMATCH,N.NETWORK_TOKEN_AUD_MISMATCH,N.NETWORK_TOKEN_AUD_MISSING,N.NETWORK_TOKEN_MALFORMED].includes(t.muxCode))return x("{category} URL is formatted incorrectly",e).format({category:r});if(t.muxCode===N.NETWORK_TOKEN_MISSING)return x("Invalid {categoryName} URL",e).format({categoryName:n});if(t.muxCode===N.NETWORK_NOT_FOUND)return x("{category} does not exist",e).format({category:r});if(t.muxCode===N.NETWORK_NOT_READY){let s=t.streamType==="live"?"Live stream":"Video";return x("{mediaType} is not currently available",e).format({mediaType:s})}}if(t.code){if(t.code===R.MEDIA_ERR_NETWORK)return x("Network Error",e);if(t.code===R.MEDIA_ERR_DECODE)return x("Media Error",e);if(t.code===R.MEDIA_ERR_SRC_NOT_SUPPORTED)return x("Source Not Supported",e)}return x("Error",e)},XA=(t,e=!1)=>{var i,a;if(t.reload)return'Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a>';if(t.muxCode){let r=Mf((i=t.errorCategory)!=null?i:"video"),n=el((a=t.errorCategory)!=null?a:Z.VIDEO);return t.muxCode===N.NETWORK_OFFLINE?x("Check your internet connection and try reloading this video.",e):t.muxCode===N.NETWORK_RECONNECTING?x("Your connection was interrupted. Attempting to resume playback...",e):t.muxCode===N.NETWORK_TOKEN_EXPIRED?x("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:n}):t.muxCode===N.NETWORK_TOKEN_SUB_MISMATCH?x("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:n}):t.muxCode===N.NETWORK_TOKEN_MALFORMED?x("{category} URL is formatted incorrectly",e).format({category:r}):[N.NETWORK_TOKEN_AUD_MISMATCH,N.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode)?x("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:n}):[N.NETWORK_TOKEN_MISSING,N.NETWORK_INVALID_URL].includes(t.muxCode)?x("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",e).format({tokenNamePrefix:n}):t.muxCode===N.NETWORK_NOT_FOUND?"":t.message}return t.code&&(t.code===R.MEDIA_ERR_NETWORK||t.code===R.MEDIA_ERR_DECODE||(t.code,R.MEDIA_ERR_SRC_NOT_SUPPORTED)),t.message},JA=(t,e=!1)=>{let i=ZA(t,e).toString(),a=XA(t,e).toString();return{title:i,message:a}},ek=t=>{if(t.muxCode){if(t.muxCode===N.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(t.muxCode===N.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([N.NETWORK_TOKEN_AUD_MISMATCH,N.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode))return"403-incorrect-aud-value.md";if(t.muxCode===N.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(t.muxCode===N.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(t.muxCode===N.NETWORK_NOT_FOUND)return"404-not-found.md";if(t.muxCode===N.NETWORK_NOT_READY)return"412-not-playable.md"}if(t.code){if(t.code===R.MEDIA_ERR_NETWORK)return"";if(t.code===R.MEDIA_ERR_DECODE)return"media-decode-error.md";if(t.code===R.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},xf=(t,e)=>{let i=ek(t);return{message:t.message,context:t.context,file:i}},tk=`<template id="media-theme-gerwig">
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
`,ou=Yo.createElement("template");"innerHTML"in ou&&(ou.innerHTML=tk);var ym,Tm,Of=class extends _l{};Of.template=(Tm=(ym=ou.content)==null?void 0:ym.children)==null?void 0:Tm[0];Yt.customElements.get("media-theme-gerwig")||Yt.customElements.define("media-theme-gerwig",Of);var ik="gerwig",oi={SRC:"src",POSTER:"poster"},A={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},lu=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function ak(t,e){var i,a,r;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src||!!t.currentSrc,poster:t.poster,storyboard:((i=t.media)==null?void 0:i.currentSrc)&&t.storyboard,storyboardSrc:t.getAttribute(A.STORYBOARD_SRC),fullscreenElement:t.getAttribute(A.FULLSCREEN_ELEMENT),placeholder:t.getAttribute("placeholder"),themeTemplate:nk(t),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(A.NOHOTKEYS),hotKeys:t.getAttribute(A.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableTracking:t.disableTracking,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,maxResolution:t.maxResolution,minResolution:t.minResolution,maxAutoResolution:t.maxAutoResolution,programStartTime:t.programStartTime,programEndTime:t.programEndTime,assetStartTime:t.assetStartTime,assetEndTime:t.assetEndTime,renditionOrder:t.renditionOrder,metadata:t.metadata,playerInitTime:t.playerInitTime,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,initialBandwidthEstimateKbps:t.initialBandwidthEstimateKbps,initialEstimateSegments:t.initialEstimateSegments,minPreloadSegments:t.minPreloadSegments,preferPlayback:t.preferPlayback,audio:t.audio,defaultStreamType:t.defaultStreamType,targetLiveWindow:t.getAttribute(f.TARGET_LIVE_WINDOW),streamType:Hc(t.getAttribute(f.STREAM_TYPE)),primaryColor:t.getAttribute(A.PRIMARY_COLOR),secondaryColor:t.getAttribute(A.SECONDARY_COLOR),accentColor:t.getAttribute(A.ACCENT_COLOR),forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultDuration:t.defaultDuration,defaultShowRemainingTime:t.defaultShowRemainingTime,hideDuration:sk(t),playbackRates:t.getAttribute(A.PLAYBACK_RATES),customDomain:(a=t.getAttribute(f.CUSTOM_DOMAIN))!=null?a:void 0,title:t.getAttribute(A.TITLE),videoTitle:(r=t.getAttribute(A.VIDEO_TITLE))!=null?r:t.getAttribute(A.TITLE),novolumepref:t.hasAttribute(A.NO_VOLUME_PREF),nomutedpref:t.hasAttribute(A.NO_MUTED_PREF),proudlyDisplayMuxBadge:t.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:t.castReceiver,disablePseudoEnded:t.hasAttribute(A.DISABLE_PSEUDO_ENDED),maxReconnectRetries:t.maxReconnectRetries,capRenditionToPlayerSize:t.capRenditionToPlayerSize,...e,extraSourceParams:t.extraSourceParams}}var rk=wv.formatErrorMessage;wv.formatErrorMessage=t=>{var e,i;if(t instanceof R){let a=JA(t,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a?.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(e=a.linkText)!=null?e:""} ${x("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return rk(t)};function nk(t){var e,i;let a=t.theme;if(a){let r=(i=(e=t.getRootNode())==null?void 0:e.getElementById)==null?void 0:i.call(e,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=Yt.customElements.get(a);if(n!=null&&n.template)return n.template}}function sk(t){var e;let i=(e=t.mediaController)==null?void 0:e.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function sn(t){let e=t.videoTitle?{video_title:t.videoTitle}:{};return t.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=t.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},e)}var ok=Object.values(f),lk=Object.values(oi),dk=Object.values(A),Am=Rf(),km="mux-player",wm={isDialogOpen:!1},uk={redundant_streams:!0},po,fn,vo,ta,fo,En,Go,zo,or,Qo,jo,Zo,_n,lr,Xo,ce,li,Nf,du,oa,Sm,Im,Rm,Lm,ck=class extends _m{constructor(){super(),Te(this,ce),Te(this,po),Te(this,fn,!1),Te(this,vo,{}),Te(this,ta,!0),Te(this,fo,new RA(this,"hotkeys")),Te(this,En),Te(this,Go,()=>fe(this,ce,oa).call(this)),Te(this,zo,()=>fe(this,ce,oa).call(this)),Te(this,or,()=>fe(this,ce,oa).call(this)),Te(this,Qo,e=>{e.composedPath().find(i=>{var a;return(a=i?.hasAttribute)==null?void 0:a.call(i,"data-mux-reload")})&&(e.preventDefault(),window.location.reload())}),Te(this,jo,e=>{var i;((i=e.composedPath()[0])==null?void 0:i.localName)==="media-error-dialog"&&fe(this,ce,du).call(this,{isDialogOpen:!1})}),Te(this,Zo,e=>{var i;((i=e.composedPath()[0])==null?void 0:i.localName)==="media-error-dialog"&&(Sf(this,Yo.activeElement)||e.preventDefault())}),Te(this,_n),Te(this,lr,{...wm}),Te(this,Xo,e=>{var i;let a=(i=this.media)==null?void 0:i.error;if(!(a instanceof R)){let{message:n,code:s}=a??{};a=new R(n,s)}if(!(a!=null&&a.fatal)){si(a),a.data&&si(`${a.name} data:`,a.data);return}let r=xf(a);r.message&&fm(r),Ye(a),a.data&&Ye(`${a.name} data:`,a.data),fe(this,ce,du).call(this,{isDialogOpen:!0})}),Ge(this,po,Tu()),this.attachShadow({mode:"open"}),fe(this,ce,Nf).call(this),this.isConnected&&fe(this,ce,li).call(this)}static get NAME(){return km}static get VERSION(){return Am}static get observedAttributes(){var e;return[...(e=_m.observedAttributes)!=null?e:[],...lk,...ok,...dk]}setAttribute(e,i){super.setAttribute(e,i),e.startsWith("metadata-")&&this.media&&(this.media.metadata=sn(this))}removeAttribute(e){super.removeAttribute(e),e.startsWith("metadata-")&&this.media&&(this.media.metadata=sn(this))}get mediaTheme(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("media-theme")}get mediaController(){var e,i;return(i=(e=this.mediaTheme)==null?void 0:e.shadowRoot)==null?void 0:i.querySelector("media-controller")}connectedCallback(){fe(this,ce,li).call(this);let e=this.media;e&&(e.metadata=sn(this))}disconnectedCallback(){var e,i,a,r,n,s,o,l,d,m;(e=H(this,En))==null||e.disconnect(),(i=this.media)==null||i.removeEventListener("streamtypechange",H(this,Go)),(a=this.media)==null||a.removeEventListener("loadstart",H(this,zo)),this.removeEventListener("error",H(this,Xo)),this.removeEventListener("click",H(this,Qo)),(r=this.mediaTheme)==null||r.removeEventListener("close",H(this,jo)),(n=this.mediaTheme)==null||n.removeEventListener("focusin",H(this,Zo)),this.media&&(this.media.errorTranslator=void 0),(o=(s=this.media)==null?void 0:s.textTracks)==null||o.removeEventListener("addtrack",H(this,or)),(d=(l=this.media)==null?void 0:l.textTracks)==null||d.removeEventListener("removetrack",H(this,or)),(m=H(this,_n))==null||m.call(this),Ge(this,_n,void 0),Ge(this,fn,!1)}attributeChangedCallback(e,i,a){switch(fe(this,ce,li).call(this),super.attributeChangedCallback(e,i,a),e){case A.HOTKEYS:H(this,fo).value=a;break;case A.THUMBNAIL_TIME:{a!=null&&this.tokens.thumbnail&&si(x("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case A.THUMBNAIL_TOKEN:{if(a){let r=Ja(a);if(r){let{aud:n}=r,s=on.THUMBNAIL;n!==s&&si(x("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:n,expectedAud:s,tokenNamePrefix:"thumbnail"}))}}break}case A.STORYBOARD_TOKEN:{if(a){let r=Ja(a);if(r){let{aud:n}=r,s=on.STORYBOARD;n!==s&&si(x("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:n,expectedAud:s,tokenNamePrefix:"storyboard"}))}}break}case A.DRM_TOKEN:{if(a){let r=Ja(a);if(r){let{aud:n}=r,s=on.DRM;n!==s&&si(x("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:n,expectedAud:s,tokenNamePrefix:"drm"}))}}break}case f.PLAYBACK_ID:{a!=null&&a.includes("?token")&&Ye(x("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:a}));break}case f.STREAM_TYPE:{a&&![X.LIVE,X.ON_DEMAND,X.UNKNOWN].includes(a)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=a.includes("dvr")?Number.POSITIVE_INFINITY:0:fm({file:"invalid-stream-type.md",message:x("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):a===X.LIVE?this.getAttribute(A.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break}case A.FULLSCREEN_ELEMENT:{if(a!=null||a!==i){let r=Yo.getElementById(a),n=r?.querySelector("mux-player");this.mediaController&&r&&n&&(this.mediaController.fullscreenElement=r)}break}case f.CAP_RENDITION_TO_PLAYER_SIZE:{(a==null||a!==i)&&(this.capRenditionToPlayerSize=a!=null?!0:void 0);break}case f.MAX_RECONNECT_RETRIES:{(a==null||a!==i)&&(this.maxReconnectRetries=Number(a));break}}[f.PLAYBACK_ID,oi.SRC,A.PLAYBACK_TOKEN].includes(e)&&i!==a&&Ge(this,lr,{...H(this,lr),...wm}),fe(this,ce,oa).call(this,{[IA(e)]:a})}async requestFullscreen(e){var i;if(!(!this.mediaController||this.mediaController.hasAttribute(c.MEDIA_IS_FULLSCREEN)))return(i=this.mediaController)==null||i.dispatchEvent(new Yt.CustomEvent(D.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,r)=>{var n;(n=this.mediaController)==null||n.addEventListener(Xt.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(c.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new Yt.CustomEvent(D.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(Xt.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}get preferCmcd(){var e;return(e=this.getAttribute(f.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?go.includes(e)?this.setAttribute(f.PREFER_CMCD,e):si(`Invalid value for preferCmcd. Must be one of ${go.join()}`):this.removeAttribute(f.PREFER_CMCD))}get hasPlayed(){var e,i;return(i=(e=this.mediaController)==null?void 0:e.hasAttribute(c.MEDIA_HAS_PLAYED))!=null?i:!1}get inLiveWindow(){var e;return(e=this.mediaController)==null?void 0:e.hasAttribute(c.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return(e=this.media)==null?void 0:e._hls}get mux(){var e;return(e=this.media)==null?void 0:e.mux}get theme(){var e;return(e=this.getAttribute(A.THEME))!=null?e:ik}set theme(e){this.setAttribute(A.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let i={};for(let a of e.getAttributeNames()){if(lu.includes(a))continue;let r=e.getAttribute(a);i[kf(a)]=r===""?!0:r}return i}set themeProps(e){var i,a;fe(this,ce,li).call(this);let r={...this.themeProps,...e};for(let n in r){if(lu.includes(n))continue;let s=e?.[n];typeof s=="boolean"||s==null?(i=this.mediaTheme)==null||i.toggleAttribute(su(n),!!s):(a=this.mediaTheme)==null||a.setAttribute(su(n),s)}}get playbackId(){var e;return(e=this.getAttribute(f.PLAYBACK_ID))!=null?e:void 0}set playbackId(e){e?this.setAttribute(f.PLAYBACK_ID,e):this.removeAttribute(f.PLAYBACK_ID)}get src(){var e,i;return this.playbackId?(e=xt(this,oi.SRC))!=null?e:void 0:(i=this.getAttribute(oi.SRC))!=null?i:void 0}set src(e){e?this.setAttribute(oi.SRC,e):this.removeAttribute(oi.SRC)}get poster(){var e;let i=this.getAttribute(oi.POSTER);if(i!=null)return i;let{tokens:a}=this;if(a.playback&&!a.thumbnail){si("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return kA(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(e=this.thumbnailTime)!=null?e:this.startTime,programTime:this.programStartTime,token:a.thumbnail})}set poster(e){e||e===""?this.setAttribute(oi.POSTER,e):this.removeAttribute(oi.POSTER)}get storyboardSrc(){var e;return(e=this.getAttribute(A.STORYBOARD_SRC))!=null?e:void 0}set storyboardSrc(e){e?this.setAttribute(A.STORYBOARD_SRC,e):this.removeAttribute(A.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;if(this.storyboardSrc&&!e.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[X.LIVE,X.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard))return wA(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(A.AUDIO)}set audio(e){if(!e){this.removeAttribute(A.AUDIO);return}this.setAttribute(A.AUDIO,"")}get hotkeys(){return H(this,fo)}get nohotkeys(){return this.hasAttribute(A.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(A.NOHOTKEYS);return}this.setAttribute(A.NOHOTKEYS,"")}get thumbnailTime(){return He(this.getAttribute(A.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(A.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,i;return(i=(e=this.getAttribute(A.VIDEO_TITLE))!=null?e:this.getAttribute(A.TITLE))!=null?i:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(A.VIDEO_TITLE,e):this.removeAttribute(A.VIDEO_TITLE))}get placeholder(){var e;return(e=xt(this,A.PLACEHOLDER))!=null?e:""}set placeholder(e){this.setAttribute(A.PLACEHOLDER,`${e}`)}get primaryColor(){var e,i;let a=this.getAttribute(A.PRIMARY_COLOR);if(a!=null||this.mediaTheme&&(a=(i=(e=Yt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_primary-color"))==null?void 0:i.trim(),a))return a}set primaryColor(e){this.setAttribute(A.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,i;let a=this.getAttribute(A.SECONDARY_COLOR);if(a!=null||this.mediaTheme&&(a=(i=(e=Yt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_secondary-color"))==null?void 0:i.trim(),a))return a}set secondaryColor(e){this.setAttribute(A.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,i;let a=this.getAttribute(A.ACCENT_COLOR);if(a!=null||this.mediaTheme&&(a=(i=(e=Yt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_accent-color"))==null?void 0:i.trim(),a))return a}set accentColor(e){this.setAttribute(A.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(A.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(A.PLAYBACK_RATES))return this.getAttribute(A.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,i)=>e-i)}set playbackRates(e){if(!e){this.removeAttribute(A.PLAYBACK_RATES);return}this.setAttribute(A.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return(e=He(this.getAttribute(A.FORWARD_SEEK_OFFSET)))!=null?e:10}set forwardSeekOffset(e){this.setAttribute(A.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return(e=He(this.getAttribute(A.BACKWARD_SEEK_OFFSET)))!=null?e:10}set backwardSeekOffset(e){this.setAttribute(A.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(A.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return He(this.getAttribute(A.DEFAULT_DURATION))}set defaultDuration(e){e==null?this.removeAttribute(A.DEFAULT_DURATION):this.setAttribute(A.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(f.PLAYER_INIT_TIME)?He(this.getAttribute(f.PLAYER_INIT_TIME)):H(this,po)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(f.PLAYER_INIT_TIME):this.setAttribute(f.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=this.getAttribute(f.PLAYER_SOFTWARE_NAME))!=null?e:km}get playerSoftwareVersion(){var e;return(e=this.getAttribute(f.PLAYER_SOFTWARE_VERSION))!=null?e:Am}get beaconCollectionDomain(){var e;return(e=this.getAttribute(f.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(f.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(f.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return(e=this.getAttribute(f.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(f.MAX_RESOLUTION,e):this.removeAttribute(f.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(f.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(f.MIN_RESOLUTION,e):this.removeAttribute(f.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(f.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(f.MAX_AUTO_RESOLUTION):this.setAttribute(f.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(f.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(f.RENDITION_ORDER,e):this.removeAttribute(f.RENDITION_ORDER))}get programStartTime(){return He(this.getAttribute(f.PROGRAM_START_TIME))}set programStartTime(e){e==null?this.removeAttribute(f.PROGRAM_START_TIME):this.setAttribute(f.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return He(this.getAttribute(f.PROGRAM_END_TIME))}set programEndTime(e){e==null?this.removeAttribute(f.PROGRAM_END_TIME):this.setAttribute(f.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return He(this.getAttribute(f.ASSET_START_TIME))}set assetStartTime(e){e==null?this.removeAttribute(f.ASSET_START_TIME):this.setAttribute(f.ASSET_START_TIME,`${e}`)}get assetEndTime(){return He(this.getAttribute(f.ASSET_END_TIME))}set assetEndTime(e){e==null?this.removeAttribute(f.ASSET_END_TIME):this.setAttribute(f.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(A.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(A.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[i,a])=>(e[i]=a,e),{}):uk}set extraSourceParams(e){e==null?this.removeAttribute(A.EXTRA_SOURCE_PARAMS):this.setAttribute(A.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return(e=this.getAttribute(f.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(f.CUSTOM_DOMAIN,e):this.removeAttribute(f.CUSTOM_DOMAIN))}get envKey(){var e;return(e=xt(this,f.ENV_KEY))!=null?e:void 0}set envKey(e){this.setAttribute(f.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(A.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(A.NO_VOLUME_PREF,""):this.removeAttribute(A.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(A.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(A.NO_MUTED_PREF,""):this.removeAttribute(A.NO_MUTED_PREF)}get debug(){return xt(this,f.DEBUG)!=null}set debug(e){e?this.setAttribute(f.DEBUG,""):this.removeAttribute(f.DEBUG)}get disableTracking(){return xt(this,f.DISABLE_TRACKING)!=null}set disableTracking(e){this.toggleAttribute(f.DISABLE_TRACKING,!!e)}get disableCookies(){return xt(this,f.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(f.DISABLE_COOKIES,""):this.removeAttribute(f.DISABLE_COOKIES)}get streamType(){var e,i,a;return(a=(i=this.getAttribute(f.STREAM_TYPE))!=null?i:(e=this.media)==null?void 0:e.streamType)!=null?a:X.UNKNOWN}set streamType(e){this.setAttribute(f.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,i,a;return(a=(i=this.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?i:(e=this.mediaController)==null?void 0:e.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?a:X.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(A.DEFAULT_STREAM_TYPE,e):this.removeAttribute(A.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,i;return this.hasAttribute(A.TARGET_LIVE_WINDOW)?+this.getAttribute(A.TARGET_LIVE_WINDOW):(i=(e=this.media)==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(e==null?this.removeAttribute(A.TARGET_LIVE_WINDOW):this.setAttribute(A.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return(e=this.media)==null?void 0:e.liveEdgeStart}get startTime(){return He(xt(this,f.START_TIME))}set startTime(e){this.setAttribute(f.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return He(xt(this,f.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){e==null?this.removeAttribute(f.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(f.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return He(xt(this,f.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){e==null?this.removeAttribute(f.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(f.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return He(xt(this,f.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){e==null?this.removeAttribute(f.MIN_PRELOAD_SEGMENTS):this.setAttribute(f.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(f.PREFER_PLAYBACK);if(e===Gt.MSE||e===Gt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Gt.MSE||e===Gt.NATIVE?this.setAttribute(f.PREFER_PLAYBACK,e):this.removeAttribute(f.PREFER_PLAYBACK))}get metadata(){var e;return(e=this.media)==null?void 0:e.metadata}set metadata(e){if(fe(this,ce,li).call(this),!this.media){Ye("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...sn(this),...e}}get _hlsConfig(){var e;return(e=this.media)==null?void 0:e._hlsConfig}set _hlsConfig(e){if(fe(this,ce,li).call(this),!this.media){Ye("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var i;if(fe(this,ce,li).call(this),!this.media){Ye("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(i=this.media)==null?void 0:i.addCuePoints(e)}get activeCuePoint(){var e;return(e=this.media)==null?void 0:e.activeCuePoint}get cuePoints(){var e,i;return(i=(e=this.media)==null?void 0:e.cuePoints)!=null?i:[]}addChapters(e){var i;if(fe(this,ce,li).call(this),!this.media){Ye("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(i=this.media)==null?void 0:i.addChapters(e)}get activeChapter(){var e;return(e=this.media)==null?void 0:e.activeChapter}get chapters(){var e,i;return(i=(e=this.media)==null?void 0:e.chapters)!=null?i:[]}getStartDate(){var e;return(e=this.media)==null?void 0:e.getStartDate()}get currentPdt(){var e;return(e=this.media)==null?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(A.PLAYBACK_TOKEN),i=this.getAttribute(A.DRM_TOKEN),a=this.getAttribute(A.THUMBNAIL_TOKEN),r=this.getAttribute(A.STORYBOARD_TOKEN);return{...H(this,vo),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{},...a!=null?{thumbnail:a}:{},...r!=null?{storyboard:r}:{}}}set tokens(e){Ge(this,vo,e??{})}get playbackToken(){var e;return(e=this.getAttribute(A.PLAYBACK_TOKEN))!=null?e:void 0}set playbackToken(e){this.setAttribute(A.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return(e=this.getAttribute(A.DRM_TOKEN))!=null?e:void 0}set drmToken(e){this.setAttribute(A.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return(e=this.getAttribute(A.THUMBNAIL_TOKEN))!=null?e:void 0}set thumbnailToken(e){this.setAttribute(A.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return(e=this.getAttribute(A.STORYBOARD_TOKEN))!=null?e:void 0}set storyboardToken(e){this.setAttribute(A.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,i,a,r){var n;let s=(n=this.media)==null?void 0:n.nativeEl;if(s)return fu(s,e,i,a,r)}removeTextTrack(e){var i;let a=(i=this.media)==null?void 0:i.nativeEl;if(a)return Yb(a,e)}get textTracks(){var e;return(e=this.media)==null?void 0:e.textTracks}get castReceiver(){var e;return(e=this.getAttribute(A.CAST_RECEIVER))!=null?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(A.CAST_RECEIVER,e):this.removeAttribute(A.CAST_RECEIVER))}get castCustomData(){var e;return(e=this.media)==null?void 0:e.castCustomData}set castCustomData(e){if(!this.media){Ye("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(A.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(A.NO_TOOLTIPS);return}this.setAttribute(A.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(A.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return(e=this.media)==null?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){if(!this.media){Ye("underlying media element missing when trying to set capRenditionToPlayerSize");return}this.media.capRenditionToPlayerSize=e}get maxReconnectRetries(){var e;return(e=this.media)==null?void 0:e.maxReconnectRetries}set maxReconnectRetries(e){if(!this.media){Ye("underlying media element missing when trying to set maxReconnectRetries");return}this.media.maxReconnectRetries=e}};po=new WeakMap,fn=new WeakMap,vo=new WeakMap,ta=new WeakMap,fo=new WeakMap,En=new WeakMap,Go=new WeakMap,zo=new WeakMap,or=new WeakMap,Qo=new WeakMap,jo=new WeakMap,Zo=new WeakMap,_n=new WeakMap,lr=new WeakMap,Xo=new WeakMap,ce=new WeakSet,li=function(){var t,e,i,a;if(!H(this,fn)){Ge(this,fn,!0),fe(this,ce,oa).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Yt.HTMLElement))throw""}catch{Ye("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{Ye("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof Ly))throw""}catch{Ye("<media-controller> failed to upgrade!")}fe(this,ce,Sm).call(this),fe(this,ce,Im).call(this),fe(this,ce,Rm).call(this),Ge(this,ta,(e=(t=this.mediaController)==null?void 0:t.hasAttribute(P.USER_INACTIVE))!=null?e:!0),fe(this,ce,Lm).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",H(this,Go)),(a=this.media)==null||a.addEventListener("loadstart",H(this,zo)),this.media&&(this.media.metadata=sn(this))}},Nf=function(){var t,e;try{(t=window?.CSS)==null||t.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(e=window?.CSS)==null||e.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},du=function(t){Object.assign(H(this,lr),t),fe(this,ce,oa).call(this)},oa=function(t={}){VA(YA(ak(this,{...H(this,lr),...t})),this.shadowRoot)},Sm=function(){let t=e=>{var i,a;if(!(e!=null&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(lu.includes(r))return;let n=this.getAttribute(e);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};Ge(this,En,new MutationObserver(e=>{for(let{attributeName:i}of e)t(i)})),H(this,En).observe(this,{attributes:!0}),this.getAttributeNames().forEach(t)},Im=function(){var t,e;this.addEventListener("error",H(this,Xo)),this.addEventListener("click",H(this,Qo)),(t=this.mediaTheme)==null||t.addEventListener("close",H(this,jo)),(e=this.mediaTheme)==null||e.addEventListener("focusin",H(this,Zo)),this.media&&(this.media.errorTranslator=(i={})=>{var a,r,n;if(!(((a=this.media)==null?void 0:a.error)instanceof R))return i;let s=xf((r=this.media)==null?void 0:r.error);return{player_error_code:(n=this.media)==null?void 0:n.error.code,player_error_message:s.message?String(s.message):i.player_error_message,player_error_context:s.context?String(s.context):i.player_error_context}})},Rm=function(){var t,e,i,a;(e=(t=this.media)==null?void 0:t.textTracks)==null||e.addEventListener("addtrack",H(this,or)),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",H(this,or))},Lm=function(){var t,e;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===X.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(d,m,p=!1)=>{r()||Array.from(d&&d.activeCues||[]).forEach(h=>{if(!(!h.snapToLines||h.line<-5||h.line>=0&&h.line<10))if(!m||this.paused){let u=h.text.split(`
`).length,v=-3;this.streamType===X.LIVE&&(v=-2);let E=v-u;if(h.line===E&&!p)return;a.has(h)||a.set(h,h.line),h.line=E}else setTimeout(()=>{h.line=a.get(h)||"auto"},500)})},s=()=>{var d,m;n(i,(m=(d=this.mediaController)==null?void 0:d.hasAttribute(P.USER_INACTIVE))!=null?m:!1)},o=()=>{var d,m;let p=Array.from(((m=(d=this.mediaController)==null?void 0:d.media)==null?void 0:m.textTracks)||[]).filter(h=>["subtitles","captions"].includes(h.kind)&&h.mode==="showing")[0];p!==i&&i?.removeEventListener("cuechange",s),i=p,i?.addEventListener("cuechange",s),n(i,H(this,ta))};o(),(t=this.textTracks)==null||t.addEventListener("change",o),(e=this.textTracks)==null||e.addEventListener("addtrack",o);let l=()=>{var d,m;let p=(m=(d=this.mediaController)==null?void 0:d.hasAttribute(P.USER_INACTIVE))!=null?m:!0;H(this,ta)!==p&&(Ge(this,ta,p),n(i,H(this,ta)))};this.addEventListener("userinactivechange",l),Ge(this,_n,()=>{var d,m;i?.removeEventListener("cuechange",s),(d=this.textTracks)==null||d.removeEventListener("change",o),(m=this.textTracks)==null||m.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};function xt(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Cm=ck,Pf=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends Pf{}globalThis.DocumentFragment=t}var hk=class extends Pf{},mk={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(hk)}},pk={customElements:mk},vk=typeof window>"u"||typeof globalThis.customElements>"u",Fl=vk?pk:globalThis;Fl.customElements.get("mux-player")||(Fl.customElements.define("mux-player",Cm),Fl.MuxPlayerElement=Cm);var $f=parseInt(bn.version)>=19,Dm={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},fk=t=>t==null,Ek=(t,e)=>fk(e)?!1:t in e,_k=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),bk=(t,e)=>{if(!(!$f&&typeof e=="boolean"&&!e)){if(Ek(t,Dm))return Dm[t];if(typeof e<"u")return/[A-Z]/.test(t)?_k(t):t}},gk=(t,e)=>!$f&&typeof t=="boolean"?"":t,yk=(t={})=>{let{ref:e,...i}=t;return Object.entries(i).reduce((a,[r,n])=>{let s=bk(r,n);if(!s)return a;let o=gk(n);return a[s]=o,a},{})};function Mm(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Tk(...t){return e=>{let i=!1,a=t.map(r=>{let n=Mm(r,e);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():Mm(t[r],null)}}}}function Ak(...t){return gn.useCallback(Tk(...t),t)}var kk=Object.prototype.hasOwnProperty,wk=(t,e)=>{if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.some((r,n)=>e[n]===r);let i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!kk.call(e,i[r])||!Object.is(t[i[r]],e[i[r]]))return!1;return!0},Uf=(t,e,i)=>!wk(e,t[i]),Sk=(t,e,i)=>{t[i]=e},Ik=(t,e,i,a=Sk,r=Uf)=>gn.useEffect(()=>{let n=i?.current;n&&r(n,e,t)&&a(n,e,t)},[i?.current,e]),ft=Ik,Rk=()=>{try{return"3.14.0"}catch{}return"UNKNOWN"},Lk=Rk(),Ck=()=>Lk,se=(t,e,i)=>gn.useEffect(()=>{let a=e?.current;if(!a||!i)return;let r=t,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[e?.current,i,t]),Dk=bn.forwardRef(({children:t,...e},i)=>bn.createElement("mux-player",{suppressHydrationWarning:!0,...yk(e),ref:i},t)),Mk=(t,e)=>{var i;let{onAbort:a,onCanPlay:r,onCanPlayThrough:n,onEmptied:s,onLoadStart:o,onLoadedData:l,onLoadedMetadata:d,onProgress:m,onDurationChange:p,onVolumeChange:h,onRateChange:u,onResize:v,onWaiting:E,onPlay:g,onPlaying:y,onTimeUpdate:T,onPause:_,onSeeking:k,onSeeked:C,onStalled:M,onSuspend:S,onEnded:U,onError:q,onCuePointChange:W,onChapterChange:B,metadata:Pe,tokens:Qe,paused:je,playbackId:_e,playbackRates:Be,currentTime:Lt,themeProps:We,extraSourceParams:mt,castCustomData:Ze,_hlsConfig:Re,...Jt}=e;return ft("tokens",Qe,t),ft("playbackId",_e,t),ft("playbackRates",Be,t),ft("metadata",Pe,t),ft("disableCookies",(i=e.disableCookies)!=null?i:!1,t),ft("extraSourceParams",mt,t),ft("_hlsConfig",Re,t),ft("themeProps",We,t),ft("castCustomData",Ze,t),ft("paused",je,t,($e,Fe)=>{Fe!=null&&(Fe?$e.pause():$e.play())},($e,Fe,ei)=>$e.hasAttribute("autoplay")&&!$e.hasPlayed?!1:Uf($e,Fe,ei)),ft("currentTime",Lt,t,($e,Fe)=>{Fe!=null&&($e.currentTime=Fe)}),se("abort",t,a),se("canplay",t,r),se("canplaythrough",t,n),se("emptied",t,s),se("loadstart",t,o),se("loadeddata",t,l),se("loadedmetadata",t,d),se("progress",t,m),se("durationchange",t,p),se("volumechange",t,h),se("ratechange",t,u),se("resize",t,v),se("waiting",t,E),se("play",t,g),se("playing",t,y),se("timeupdate",t,T),se("pause",t,_),se("seeking",t,k),se("seeked",t,C),se("stalled",t,M),se("suspend",t,S),se("ended",t,U),se("error",t,q),se("cuepointchange",t,W),se("chapterchange",t,B),[Jt]},xk=Ck(),Ok="mux-player-react",Nk=bn.forwardRef((t,e)=>{var i;let a=gn.useRef(null),r=Ak(a,e),[n]=Mk(a,t),[s]=gn.useState((i=t.playerInitTime)!=null?i:Tu());return bn.createElement(Dk,{ref:r,defaultHiddenCaptions:t.defaultHiddenCaptions,playerSoftwareName:Ok,playerSoftwareVersion:xk,playerInitTime:s,...n})}),iw=Nk;export{Bk as MaxResolution,R as MediaError,Wk as MinResolution,Fk as RenditionOrder,iw as default,Tu as generatePlayerInitTime,Ok as playerSoftwareName,xk as playerSoftwareVersion};
