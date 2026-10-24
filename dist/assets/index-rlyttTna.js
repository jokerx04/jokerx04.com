import{r as a,R as I,p as st,j as N,I as ge}from"./index-C0ahQAKE.js";import{P as ve}from"./PageBreadcrumb-C-8sC3Sx.js";var _e=Object.create,Wt=Object.defineProperty,be=Object.getOwnPropertyDescriptor,Te=Object.getOwnPropertyNames,xe=Object.getPrototypeOf,we=Object.prototype.hasOwnProperty,ke=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ee=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Te(e))!we.call(t,o)&&o!==r&&Wt(t,o,{get:()=>e[o],enumerable:!(s=be(e,o))||s.enumerable});return t},Ie=(t,e,r)=>(r=t!=null?_e(xe(t)):{},Ee(!t||!t.__esModule?Wt(r,"default",{value:t,enumerable:!0}):r,t)),Le=ke((t,e)=>{(function(r,s){typeof t=="object"&&typeof e<"u"?s(t):typeof define=="function"&&define.amd?define(["exports"],s):(r=typeof globalThis<"u"?globalThis:r||self,s(r.fastUniqueNumbers={}))})(t,function(r){var s=function(T){return function(k){var d=T(k);return k.add(d),d}},o=function(T){return function(k,d){return T.set(k,d),d}},l=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,i=536870912,h=i*2,p=function(T,k){return function(d){var g=k.get(d),f=g===void 0?d.size:g<h?g+1:0;if(!d.has(f))return T(d,f);if(d.size<i){for(;d.has(f);)f=Math.floor(Math.random()*h);return T(d,f)}if(d.size>l)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;d.has(f);)f=Math.floor(Math.random()*l);return T(d,f)}},v=new WeakMap,b=o(v),E=p(b,v),R=s(E);r.addUniqueNumber=R,r.generateUniqueNumber=E})});Ie(Le());var Q=(typeof window>"u"?"undefined":typeof window)=="object",K={setTimeout:Q?setTimeout.bind(window):setTimeout,clearTimeout:Q?clearTimeout.bind(window):clearTimeout,setInterval:Q?setInterval.bind(window):setInterval,clearInterval:Q?clearInterval.bind(window):clearInterval};function Ce(t){K.setTimeout=t.setTimeout,K.clearTimeout=t.clearTimeout,K.setInterval=t.setInterval,K.clearInterval=t.clearInterval}var ct={},Ae=class{name;closed=!1;mc=new MessageChannel;constructor(t){this.name=t,ct[t]=ct[t]||[],ct[t].push(this),this.mc.port1.start(),this.mc.port2.start(),this.onStorage=this.onStorage.bind(this),window.addEventListener("storage",this.onStorage)}onStorage(t){if(t.storageArea!==window.localStorage||t.key.substring(0,this.name.length)!==this.name||t.newValue===null)return;let e=JSON.parse(t.newValue);this.mc.port2.postMessage(e)}postMessage(t){if(this.closed)throw new Error("InvalidStateError");let e=JSON.stringify(t),r=`${this.name}:${String(Date.now())}${String(Math.random())}`;window.localStorage.setItem(r,e),K.setTimeout(()=>{window.localStorage.removeItem(r)},500),ct[this.name].forEach(s=>{s!==this&&s.mc.port2.postMessage(JSON.parse(e))})}close(){if(this.closed)return;this.closed=!0,this.mc.port1.close(),this.mc.port2.close(),window.removeEventListener("storage",this.onStorage);let t=ct[this.name].indexOf(this);ct[this.name].splice(t,1)}get onmessage(){return this.mc.port1.onmessage}set onmessage(t){this.mc.port1.onmessage=t}get onmessageerror(){return this.mc.port1.onmessageerror}set onmessageerror(t){this.mc.port1.onmessageerror=t}addEventListener(t,e){return this.mc.port1.addEventListener(t,e)}removeEventListener(t,e){return this.mc.port1.removeEventListener(t,e)}dispatchEvent(t){return this.mc.port1.dispatchEvent(t)}},Re=typeof window>"u"?void 0:typeof window.BroadcastChannel=="function"?window.BroadcastChannel:Ae;function Me(t=0){return new Promise(e=>K.setTimeout(e,t))}function Zt(){return Math.random().toString(36).substring(2)}var Oe=class{options;channel;token=Zt();isLeader=!1;isDead=!1;isApplying=!1;reApply=!1;intervals=[];listeners=[];deferred;constructor(t,e){this.channel=t,this.options=e,this.apply=this.apply.bind(this),this.awaitLeadership=this.awaitLeadership.bind(this),this.sendAction=this.sendAction.bind(this)}async apply(){if(this.isLeader||this.isDead)return!1;if(this.isApplying)return this.reApply=!0,!1;this.isApplying=!0;let t=!1,e=r=>{let{token:s,action:o}=r.data;s!==this.token&&(o===0&&s>this.token&&(t=!0),o===1&&(t=!0))};this.channel.addEventListener("message",e);try{return this.sendAction(0),await Me(this.options.responseTime),this.channel.removeEventListener("message",e),this.isApplying=!1,t?this.reApply?this.apply():!1:(this.assumeLead(),!0)}catch{return!1}}awaitLeadership(){if(this.isLeader)return Promise.resolve();let t=!1,e=null;return new Promise(r=>{let s=()=>{if(t)return;t=!0;try{K.clearInterval(e)}catch{}let l=this.intervals.indexOf(e);l>=0&&this.intervals.splice(l,1),this.channel.removeEventListener("message",o),r()};e=K.setInterval(()=>{this.apply().then(()=>{this.isLeader&&s()})},this.options.fallbackInterval),this.intervals.push(e);let o=l=>{let{action:i}=l.data;i===2&&this.apply().then(()=>{this.isLeader&&s()})};this.channel.addEventListener("message",o)})}sendAction(t){this.channel.postMessage({action:t,token:this.token})}assumeLead(){this.isLeader=!0;let t=e=>{let{action:r}=e.data;r===0&&this.sendAction(1)};return this.channel.addEventListener("message",t),this.listeners.push(t),this.sendAction(1)}waitForLeadership(){return this.deferred?this.deferred:(this.deferred=this.awaitLeadership(),this.deferred)}close(){if(!this.isDead){this.isDead=!0,this.isLeader=!1,this.sendAction(2);try{this.listeners.forEach(t=>this.channel.removeEventListener("message",t)),this.intervals.forEach(t=>K.clearInterval(t))}catch{}}}},Pe=class{channel;options;elector;token=Zt();registry=new Map;allIdle=!1;isLastActive=!1;constructor(t){let{channelName:e}=t;if(this.options=t,this.channel=new Re(e),this.registry.set(this.token,1),t.leaderElection){let r={fallbackInterval:2e3,responseTime:100};this.elector=new Oe(this.channel,r),this.elector.waitForLeadership()}this.channel.addEventListener("message",r=>{let{action:s,token:o,data:l}=r.data;switch(s){case 3:this.registry.set(o,2);break;case 4:this.registry.delete(o);break;case 5:this.idle(o);break;case 6:this.active(o);break;case 7:this.prompt(o);break;case 8:this.start(o);break;case 9:this.reset(o);break;case 10:this.activate(o);break;case 11:this.pause(o);break;case 12:this.resume(o);break;case 13:this.options.onMessage(l);break}}),this.send(3)}get isLeader(){if(!this.elector)throw new Error('❌ Leader election is not enabled. To Enable it set the "leaderElection" property to true.');return this.elector.isLeader}prompt(t=this.token){this.registry.set(t,0);let e=[...this.registry.values()].every(r=>r===0);t===this.token&&this.send(7),e&&this.options.onPrompt()}idle(t=this.token){this.registry.set(t,2);let e=[...this.registry.values()].every(r=>r===2);t===this.token&&this.send(5),!this.allIdle&&e&&(this.allIdle=!0,this.options.onIdle())}active(t=this.token){this.allIdle=!1,this.registry.set(t,1);let e=[...this.registry.values()].some(r=>r===1);t===this.token&&this.send(6),e&&this.options.onActive(),this.isLastActive=t===this.token}start(t=this.token){this.allIdle=!1,this.registry.set(t,1),t===this.token?this.send(8):this.options.start(!0),this.isLastActive=t===this.token}reset(t=this.token){this.allIdle=!1,this.registry.set(t,1),t===this.token?this.send(9):this.options.reset(!0),this.isLastActive=t===this.token}activate(t=this.token){this.allIdle=!1,this.registry.set(t,1),t===this.token?this.send(10):this.options.activate(!0),this.isLastActive=t===this.token}pause(t=this.token){t===this.token?this.send(11):this.options.pause(!0)}resume(t=this.token){t===this.token?this.send(12):this.options.resume(!0)}message(t){try{this.channel.postMessage({action:13,token:this.token,data:t})}catch{}}send(t){try{this.channel.postMessage({action:t,token:this.token})}catch{}}close(){this.options.leaderElection&&this.elector.close(),this.send(4),this.channel.close()}},Ne=Q?document:null,$e=["mousemove","keydown","wheel","DOMMouseScroll","mousewheel","mousedown","touchstart","touchmove","MSPointerDown","MSPointerMove","visibilitychange","focus"];function Se(t,e){let r;function s(...o){r&&clearTimeout(r),r=setTimeout(()=>{t(...o),r=null},e)}return s.cancel=function(){clearTimeout(r)},s}function Ot(t,e){let r=0;return function(...s){let o=new Date().getTime();if(!(o-r<e))return r=o,t(...s)}}var P=()=>Date.now(),ut=2147483647;function ze({timeout:t=1e3*60*20,promptTimeout:e=0,promptBeforeIdle:r=0,element:s=Ne,events:o=$e,timers:l=void 0,immediateEvents:i=[],onPresenceChange:h=()=>{},onPrompt:p=()=>{},onIdle:v=()=>{},onActive:b=()=>{},onAction:E=()=>{},onMessage:R=()=>{},debounce:T=0,throttle:k=0,eventsThrottle:d=200,startOnMount:g=!0,startManually:f=!1,stopOnIdle:c=!1,crossTab:u=!1,name:_="idle-timer",syncTimers:L=0,leaderElection:$=!1,disabled:y=!1}={}){let w=a.useRef(P()),S=a.useRef(P()),C=a.useRef(null),M=a.useRef(null),F=a.useRef(0),U=a.useRef(0),q=a.useRef(0),z=a.useRef(0),A=a.useRef(!1),O=a.useRef(!1),B=a.useRef(!1),G=a.useRef(!0),ft=a.useRef(!1),J=a.useRef(null),m=a.useRef(null),H=a.useRef(t),tt=a.useRef(0);a.useEffect(()=>{if(e&&console.warn("⚠️ IdleTimer -- The `promptTimeout` property has been deprecated in favor of `promptBeforeIdle`. It will be removed in the next major release."),r&&e)throw new Error("❌ Both promptTimeout and promptBeforeIdle can not be set. The promptTimeout property will be deprecated in a future version.");if(t>=ut)throw new Error(`❌ The value for the timeout property must fit in a 32 bit signed integer, ${ut}.`);if(e>=ut)throw new Error(`❌ The value for the promptTimeout property must fit in a 32 bit signed integer, ${ut}.`);if(r>=ut)throw new Error(`❌ The value for the promptBeforeIdle property must fit in a 32 bit signed integer, ${ut}.`);if(r>=t)throw new Error(`❌ The value for the promptBeforeIdle property must be less than the timeout property, ${t}.`);if(r?(H.current=t-r,tt.current=r):(H.current=t,tt.current=e),!G.current){if(f||y)return;A.current&&(it.current(null,X),m.current&&m.current.active()),ot()}},[t,e,r,f,y]);let Dt=a.useRef(c);a.useEffect(()=>{Dt.current=c},[c]);let Bt=a.useRef(i),dt=a.useRef(s),It=a.useRef([...new Set([...o,...i]).values()]),Y=a.useRef(y);a.useEffect(()=>{Y.current=y,!G.current&&(y?Tt():f||ot())},[y]);let mt=a.useRef(h);a.useEffect(()=>{mt.current=h},[h]);let gt=a.useRef(p);a.useEffect(()=>{gt.current=p},[p]);let vt=a.useRef(v);a.useEffect(()=>{vt.current=v},[v]);let it=a.useRef(b);a.useEffect(()=>{it.current=b},[b]);let _t=a.useRef(E);a.useEffect(()=>{_t.current=E},[E]);let lt=a.useRef(R);a.useEffect(()=>{lt.current=R},[R]);let et=a.useMemo(()=>{let n=(j,xt)=>_t.current(j,xt);return T>0?Se(n,T):k>0?Ot(n,k):n},[k,T]),jt=a.useRef();a.useEffect(()=>{u&&L&&(jt.current=Ot(()=>{m.current.active()},L))},[u,L]);let V=()=>{J.current!==null&&(K.clearTimeout(J.current),J.current=null)},rt=(n,j=!0)=>{V(),J.current=K.setTimeout(Ct,n||H.current),j&&(M.current=P())},Ft=n=>{!O.current&&!A.current&&(gt.current(n,X),mt.current({type:"active",prompted:!0},X)),z.current=0,q.current=P(),O.current=!0,rt(tt.current,!1)},Ut=()=>{V(),A.current||(vt.current(null,X),mt.current({type:"idle"},X)),A.current=!0,C.current=P(),Dt.current?at():O.current&&(q.current=0,O.current=!1)},Lt=n=>{V(),(A.current||O.current)&&(it.current(n,X),mt.current({type:"active",prompted:!1},X)),O.current=!1,q.current=0,A.current=!1,F.current+=P()-C.current,U.current+=P()-C.current,Z(),rt()},Ct=n=>{if(!A.current){et.cancel&&et.cancel();let j=P()-M.current;if(!(H.current+tt.current<j)&&tt.current>0&&!O.current){m.current?m.current.prompt():Ft(n);return}m.current?m.current.idle():Ut();return}m.current?m.current.active():Lt(n)},At=n=>{if(!g&&!M.current&&(M.current=P(),it.current(null,X)),et(n,X),O.current)return;if(V(),!A.current&&Bt.current.includes(n.type)){Ct(n);return}let j=P()-M.current;if(A.current&&!c||!A.current&&j>=H.current){Ct(n);return}B.current=!1,z.current=0,q.current=0,rt(),u&&L&&jt.current()},bt=a.useRef(At);a.useEffect(()=>{let n=ft.current;n&&at(),d>0?bt.current=Ot(At,d):bt.current=At,n&&Z()},[d,k,T,_t,u,L]);let Z=()=>{Q&&dt.current&&(ft.current||(It.current.forEach(n=>{dt.current.addEventListener(n,bt.current,{capture:!0,passive:!0})}),ft.current=!0))},at=(n=!1)=>{Q&&dt.current&&(ft.current||n)&&(It.current.forEach(j=>{dt.current.removeEventListener(j,bt.current,{capture:!0})}),ft.current=!1)},ot=a.useCallback(n=>Y.current?!1:(V(),Z(),A.current=!1,O.current=!1,B.current=!1,z.current=0,q.current=0,m.current&&!n&&m.current.start(),rt(),!0),[J,A,Y,H,m]),Rt=a.useCallback(n=>Y.current?!1:(V(),Z(),S.current=P(),F.current+=P()-C.current,U.current+=P()-C.current,F.current=0,A.current=!1,O.current=!1,B.current=!1,z.current=0,q.current=0,m.current&&!n&&m.current.reset(),f||rt(),!0),[J,A,H,f,Y,m]),Xt=a.useCallback(n=>Y.current?!1:(V(),Z(),(A.current||O.current)&&Lt(),A.current=!1,O.current=!1,B.current=!1,z.current=0,q.current=0,S.current=P(),m.current&&!n&&m.current.activate(),rt(),!0),[J,A,O,Y,H,m]),Tt=a.useCallback((n=!1)=>Y.current||B.current?!1:(z.current=qt(),B.current=!0,at(),V(),m.current&&!n&&m.current.pause(),!0),[J,Y,m]),Mt=a.useCallback((n=!1)=>Y.current||!B.current?!1:(B.current=!1,O.current||Z(),A.current||rt(z.current),q.current&&(q.current=P()),m.current&&!n&&m.current.resume(),!0),[J,H,Y,z,m]),ie=a.useCallback((n,j)=>(m.current?(j&&lt.current(n,X),m.current.message(n)):j&&lt.current(n,X),!0),[R]),le=a.useCallback(()=>A.current,[A]),ce=a.useCallback(()=>O.current,[O]),ue=a.useCallback(()=>m.current?m.current.isLeader:null,[m]),fe=a.useCallback(()=>m.current?m.current.isLastActive:null,[m]),de=a.useCallback(()=>m.current?m.current.token:null,[m]),qt=a.useCallback(()=>{if(B.current)return z.current;let n=z.current?z.current:tt.current+H.current,j=M.current?P()-M.current:0,xt=Math.floor(n-j);return xt<0?0:Math.abs(xt)},[H,tt,O,z,M]),Ht=a.useCallback(()=>Math.round(P()-S.current),[S]),Yt=a.useCallback(()=>Math.round(P()-w.current),[w]),me=a.useCallback(()=>C.current?new Date(C.current):null,[C]),pe=a.useCallback(()=>M.current?new Date(M.current):null,[M]),Vt=a.useCallback(()=>A.current?Math.round(P()-C.current+F.current):Math.round(F.current),[C,F]),Kt=a.useCallback(()=>A.current?Math.round(P()-C.current+U.current):Math.round(U.current),[C,U]),ye=a.useCallback(()=>{let n=Math.round(Ht()-Vt());return n>=0?n:0},[C,F]),he=a.useCallback(()=>{let n=Math.round(Yt()-Kt());return n>=0?n:0},[C,F]);a.useEffect(()=>{if(T>0&&k>0)throw new Error("❌ onAction can either be throttled or debounced, not both.");l&&Ce(l);let n=()=>{m.current&&m.current.close(),et.cancel&&et.cancel(),V(),at(!0)};return Q&&window.addEventListener("beforeunload",n),()=>{Q&&window.removeEventListener("beforeunload",n),m.current&&m.current.close(),et.cancel&&et.cancel(),V(),at(!0)}},[]),a.useEffect(()=>{m.current&&m.current.close(),u?m.current=new Pe({channelName:_,leaderElection:$,onPrompt:()=>{Ft()},onIdle:()=>{Ut()},onActive:()=>{Lt()},onMessage:n=>{lt.current(n,X)},start:ot,reset:Rt,activate:Xt,pause:Tt,resume:Mt}):m.current=null},[u,_,$,gt,vt,it,lt,ot,Rt,Tt,Mt]),a.useEffect(()=>{G.current||(V(),at(!0)),!(f||y)&&(g?ot():Z())},[f,g,y,G]),a.useEffect(()=>{if(!G.current){let n=[...new Set([...o,...i]).values()];if(at(),It.current=n,dt.current=s,Bt.current=i,f||y)return;g?ot():Z()}},[s,JSON.stringify(o),JSON.stringify(i),G,y,f,g]),a.useEffect(()=>{G.current&&(G.current=!1)},[G]);let X={message:ie,start:ot,reset:Rt,activate:Xt,pause:Tt,resume:Mt,isIdle:le,isPrompted:ce,isLeader:ue,isLastActiveTab:fe,getTabId:de,getRemainingTime:qt,getElapsedTime:Ht,getTotalElapsedTime:Yt,getLastIdleTime:me,getLastActiveTime:pe,getIdleTime:Vt,getTotalIdleTime:Kt,getActiveTime:ye,getTotalActiveTime:he,setOnPresenceChange:n=>{h=n,mt.current=n},setOnPrompt:n=>{p=n,gt.current=n},setOnIdle:n=>{v=n,vt.current=n},setOnActive:n=>{b=n,it.current=n},setOnAction:n=>{E=n,_t.current=n},setOnMessage:n=>{R=n,lt.current=n}};return X}var De=a.createContext(null);De.Consumer;var yt=t=>typeof t=="number"&&!isNaN(t),nt=t=>typeof t=="string",W=t=>typeof t=="function",Be=t=>nt(t)||yt(t),Nt=t=>nt(t)||W(t)?t:null,je=(t,e)=>t===!1||yt(t)&&t>0?t:e,$t=t=>a.isValidElement(t)||nt(t)||W(t)||yt(t);function Fe(t,e,r=300){let{scrollHeight:s,style:o}=t;requestAnimationFrame(()=>{o.minHeight="initial",o.height=s+"px",o.transition=`all ${r}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(e,r)})})}function Ue({enter:t,exit:e,appendPosition:r=!1,collapse:s=!0,collapseDuration:o=300}){return function({children:l,position:i,preventExitTransition:h,done:p,nodeRef:v,isIn:b,playToast:E}){let R=r?`${t}--${i}`:t,T=r?`${e}--${i}`:e,k=a.useRef(0);return a.useLayoutEffect(()=>{let d=v.current,g=R.split(" "),f=c=>{c.target===v.current&&(E(),d.removeEventListener("animationend",f),d.removeEventListener("animationcancel",f),k.current===0&&c.type!=="animationcancel"&&d.classList.remove(...g))};d.classList.add(...g),d.addEventListener("animationend",f),d.addEventListener("animationcancel",f)},[]),a.useEffect(()=>{let d=v.current,g=()=>{d.removeEventListener("animationend",g),s?Fe(d,p,o):p()};b||(h?g():(k.current=1,d.className+=` ${T}`,d.addEventListener("animationend",g)))},[b]),I.createElement(I.Fragment,null,l)}}function Gt(t,e){return{content:te(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function te(t,e,r=!1){return a.isValidElement(t)&&!nt(t.type)?a.cloneElement(t,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:r}):W(t)?t({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:r}):t}function Xe({closeToast:t,theme:e,ariaLabel:r="close"}){return I.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:s=>{s.stopPropagation(),t(!0)},"aria-label":r},I.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},I.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function qe({delay:t,isRunning:e,closeToast:r,type:s="default",hide:o,className:l,controlledProgress:i,progress:h,rtl:p,isIn:v,theme:b}){let E=o||i&&h===0,R={animationDuration:`${t}ms`,animationPlayState:e?"running":"paused"};i&&(R.transform=`scaleX(${h})`);let T=st("Toastify__progress-bar",i?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${b}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":p}),k=W(l)?l({rtl:p,type:s,defaultClassName:T}):st(T,l),d={[i&&h>=1?"onTransitionEnd":"onAnimationEnd"]:i&&h<1?null:()=>{v&&r()}};return I.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":E},I.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${b} Toastify__progress-bar--${s}`}),I.createElement("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer","aria-valuenow":i?Math.round(h*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:k,style:R,...d}))}var He=1,ee=()=>`${He++}`;function Ye(t,e,r){let s=1,o=0,l=[],i=[],h=e,p=new Map,v=new Set,b=c=>(v.add(c),()=>v.delete(c)),E=()=>{i=Array.from(p.values()),v.forEach(c=>c())},R=({containerId:c,toastId:u,updateId:_})=>{let L=c?c!==t:t!==1,$=p.has(u)&&_==null;return L||$},T=(c,u)=>{p.forEach(_=>{var L;(u==null||u===_.props.toastId)&&((L=_.toggle)==null||L.call(_,c))})},k=c=>{var u,_;c.isActive&&((_=(u=c.props)==null?void 0:u.onClose)==null||_.call(u,c.removalReason),c.isActive=!1,r(Gt(c,"removed")))},d=c=>{if(c==null)p.forEach(k);else{let u=p.get(c);u&&k(u)}E()},g=()=>{o-=l.length,l=[]},f=c=>{var u,_;let{toastId:L,updateId:$}=c.props,y=$==null;c.staleId&&p.delete(c.staleId),c.isActive=!0,p.set(L,c),E(),r(Gt(c,y?"added":"updated")),y&&((_=(u=c.props).onOpen)==null||_.call(u))};return{id:t,props:h,observe:b,toggle:T,removeToast:d,toasts:p,clearQueue:g,buildToast:(c,u)=>{if(R(u))return;let{toastId:_,updateId:L,data:$,staleId:y,delay:w}=u,S=L==null;S&&o++;let C={...h,style:h.toastStyle,key:s++,...Object.fromEntries(Object.entries(u).filter(([F,U])=>U!=null)),toastId:_,updateId:L,data:$,isIn:!1,className:Nt(u.className||h.toastClassName),progressClassName:Nt(u.progressClassName||h.progressClassName),autoClose:u.isLoading?!1:je(u.autoClose,h.autoClose),closeToast(F){let U=p.get(_);U&&(U.removalReason=F,d(_))},deleteToast(){if(p.get(_)!=null){if(p.delete(_),o--,o<0&&(o=0),l.length>0){f(l.shift());return}E()}}};C.closeButton=h.closeButton,u.closeButton===!1||$t(u.closeButton)?C.closeButton=u.closeButton:u.closeButton===!0&&(C.closeButton=$t(h.closeButton)?h.closeButton:!0);let M={content:c,props:C,staleId:y};h.limit&&h.limit>0&&o>h.limit&&S?l.push(M):yt(w)?setTimeout(()=>{f(M)},w):f(M)},setProps(c){h=c},setToggle:(c,u)=>{let _=p.get(c);_&&(_.toggle=u)},isToastActive:c=>{var u;return(u=p.get(c))==null?void 0:u.isActive},getSnapshot:()=>i}}var D=new Map,pt=[],St=new Set,Ve=t=>St.forEach(e=>e(t)),re=()=>D.size>0;function Ke(){pt.forEach(t=>oe(t.content,t.options)),pt=[]}var Ge=(t,{containerId:e})=>{var r;return(r=D.get(e||1))==null?void 0:r.toasts.get(t)};function ae(t,e){var r;if(e)return!!((r=D.get(e))!=null&&r.isToastActive(t));let s=!1;return D.forEach(o=>{o.isToastActive(t)&&(s=!0)}),s}function Je(t){if(!re()){pt=pt.filter(e=>t!=null&&e.options.toastId!==t);return}if(t==null||Be(t))D.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=D.get(t.containerId);e?e.removeToast(t.id):D.forEach(r=>{r.removeToast(t.id)})}}var Qe=(t={})=>{D.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})};function oe(t,e){$t(t)&&(re()||pt.push({content:t,options:e}),D.forEach(r=>{r.buildToast(t,e)}))}function We(t){var e;(e=D.get(t.containerId||1))==null||e.setToggle(t.id,t.fn)}function se(t,e){D.forEach(r=>{(e==null||!(e!=null&&e.containerId)||e?.containerId===r.id)&&r.toggle(t,e?.id)})}function Ze(t){let e=t.containerId||1;return{subscribe(r){let s=Ye(e,t,Ve);D.set(e,s);let o=s.observe(r);return Ke(),()=>{o(),D.delete(e)}},setProps(r){var s;(s=D.get(e))==null||s.setProps(r)},getSnapshot(){var r;return(r=D.get(e))==null?void 0:r.getSnapshot()}}}function tr(t){return St.add(t),()=>{St.delete(t)}}function er(t){return t&&(nt(t.toastId)||yt(t.toastId))?t.toastId:ee()}function ht(t,e){return oe(t,e),e.toastId}function wt(t,e){return{...e,type:e&&e.type||t,toastId:er(e)}}function kt(t){return(e,r)=>ht(e,wt(t,r))}function x(t,e){return ht(t,wt("default",e))}x.loading=(t,e)=>ht(t,wt("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function rr(t,{pending:e,error:r,success:s},o){let l;e&&(l=nt(e)?x.loading(e,o):x.loading(e.render,{...o,...e}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},h=(v,b,E)=>{if(b==null){x.dismiss(l);return}let R={type:v,...i,...o,data:E},T=nt(b)?{render:b}:b;return l?x.update(l,{...R,...T}):x(T.render,{...R,...T}),E},p=W(t)?t():t;return p.then(v=>h("success",s,v)).catch(v=>h("error",r,v)),p}x.promise=rr;x.success=kt("success");x.info=kt("info");x.error=kt("error");x.warning=kt("warning");x.warn=x.warning;x.dark=(t,e)=>ht(t,wt("default",{theme:"dark",...e}));function ar(t){Je(t)}x.dismiss=ar;x.clearWaitingQueue=Qe;x.isActive=ae;x.update=(t,e={})=>{let r=Ge(t,e);if(r){let{props:s,content:o}=r,l={delay:100,...s,...e,toastId:e.toastId||t,updateId:ee()};l.toastId!==t&&(l.staleId=t);let i=l.render||o;delete l.render,ht(i,l)}};x.done=t=>{x.update(t,{progress:1})};x.onChange=tr;x.play=t=>se(!0,t);x.pause=t=>se(!1,t);function or(t){var e;let{subscribe:r,getSnapshot:s,setProps:o}=a.useRef(Ze(t)).current;o(t);let l=(e=a.useSyncExternalStore(r,s,s))==null?void 0:e.slice();function i(h){if(!l)return[];let p=new Map;return t.newestOnTop&&l.reverse(),l.forEach(v=>{let{position:b}=v.props;p.has(b)||p.set(b,[]),p.get(b).push(v)}),Array.from(p,v=>h(v[0],v[1]))}return{getToastToRender:i,isToastActive:ae,count:l?.length}}function sr(t){let[e,r]=a.useState(!1),[s,o]=a.useState(!1),l=a.useRef(null),i=a.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:h,pauseOnHover:p,closeToast:v,onClick:b,closeOnClick:E}=t;We({id:t.toastId,containerId:t.containerId,fn:r}),a.useEffect(()=>{if(t.pauseOnFocusLoss)return R(),()=>{T()}},[t.pauseOnFocusLoss]);function R(){document.hasFocus()||f(),window.addEventListener("focus",g),window.addEventListener("blur",f)}function T(){window.removeEventListener("focus",g),window.removeEventListener("blur",f)}function k(y){if(t.draggable===!0||t.draggable===y.pointerType){c();let w=l.current;i.canCloseOnClick=!0,i.canDrag=!0,w.style.transition="none",t.draggableDirection==="x"?(i.start=y.clientX,i.removalDistance=w.offsetWidth*(t.draggablePercent/100)):(i.start=y.clientY,i.removalDistance=w.offsetHeight*(t.draggablePercent===80?t.draggablePercent*1.5:t.draggablePercent)/100)}}function d(y){let{top:w,bottom:S,left:C,right:M}=l.current.getBoundingClientRect();y.pointerType==="mouse"&&t.pauseOnHover&&y.clientX>=C&&y.clientX<=M&&y.clientY>=w&&y.clientY<=S?f():g()}function g(){r(!0)}function f(){r(!1)}function c(){i.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",L)}function u(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",L)}function _(y){let w=l.current;if(i.canDrag&&w){i.didMove=!0,e&&f(),t.draggableDirection==="x"?i.delta=y.clientX-i.start:i.delta=y.clientY-i.start,i.start!==y.clientX&&(i.canCloseOnClick=!1);let S=t.draggableDirection==="x"?`${i.delta}px, var(--y)`:`0, calc(${i.delta}px + var(--y))`;w.style.transform=`translate3d(${S},0)`,w.style.opacity=`${1-Math.abs(i.delta/i.removalDistance)}`}}function L(){u();let y=l.current;if(i.canDrag&&i.didMove&&y){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance){o(!0),t.closeToast(!0),t.collapseAll();return}y.style.transition="transform 0.2s, opacity 0.2s",y.style.removeProperty("transform"),y.style.removeProperty("opacity")}}let $={onPointerDown:k,onPointerUp:d};return h&&p&&($.onMouseEnter=f,t.stacked||($.onMouseLeave=g)),E&&($.onClick=y=>{b&&b(y),i.canCloseOnClick&&v(!0)}),{playToast:g,pauseToast:f,isRunning:e,preventExitTransition:s,toastRef:l,eventHandlers:$}}var ne=typeof window<"u"?a.useLayoutEffect:a.useEffect,Et=({theme:t,type:e,isLoading:r,...s})=>I.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...s});function nr(t){return I.createElement(Et,{...t},I.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function ir(t){return I.createElement(Et,{...t},I.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function lr(t){return I.createElement(Et,{...t},I.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function cr(t){return I.createElement(Et,{...t},I.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function ur(){return I.createElement("div",{className:"Toastify__spinner"})}var zt={info:ir,warning:nr,success:lr,error:cr,spinner:ur},fr=t=>t in zt;function dr({theme:t,type:e,isLoading:r,icon:s}){let o=null,l={theme:t,type:e};return s===!1||(W(s)?o=s({...l,isLoading:r}):a.isValidElement(s)?o=a.cloneElement(s,l):r?o=zt.spinner():fr(e)&&(o=zt[e](l))),o}var mr=t=>{let{isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:o,playToast:l}=sr(t),{closeButton:i,children:h,autoClose:p,onClick:v,type:b,hideProgressBar:E,closeToast:R,transition:T,position:k,className:d,style:g,progressClassName:f,updateId:c,role:u,progress:_,rtl:L,toastId:$,deleteToast:y,isIn:w,isLoading:S,closeOnClick:C,theme:M,ariaLabel:F}=t,U=st("Toastify__toast",`Toastify__toast-theme--${M}`,`Toastify__toast--${b}`,{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":C}),q=W(d)?d({rtl:L,position:k,type:b,defaultClassName:U}):st(U,d),z=dr(t),A=!!_||!p,O={closeToast:R,type:b,theme:M},B=null;return i===!1||(W(i)?B=i(O):a.isValidElement(i)?B=a.cloneElement(i,O):B=Xe(O)),I.createElement(T,{isIn:w,done:y,position:k,preventExitTransition:r,nodeRef:s,playToast:l},I.createElement("div",{id:$,tabIndex:0,onClick:v,"data-in":w,className:q,...o,style:g,ref:s,...w&&{role:u,"aria-label":F}},z!=null&&I.createElement("div",{className:st("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},z),te(h,t,!e),B,!t.customProgressBar&&I.createElement(qe,{...c&&!A?{key:`p-${c}`}:{},rtl:L,theme:M,delay:p,isRunning:e,isIn:w,closeToast:R,hide:E,type:b,className:f,controlledProgress:A,progress:_||0})))},pr=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),yr=Ue(pr("bounce",!0)),hr={position:"top-right",transition:yr,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&t.code==="KeyT"};function gr(t){let e={...hr,...t},r=t.stacked,[s,o]=a.useState(!0),l=a.useRef(null),{getToastToRender:i,isToastActive:h,count:p}=or(e),{className:v,style:b,rtl:E,containerId:R,hotKeys:T}=e;function k(g){let f=st("Toastify__toast-container",`Toastify__toast-container--${g}`,{"Toastify__toast-container--rtl":E});return W(v)?v({position:g,rtl:E,defaultClassName:f}):st(f,Nt(v))}function d(){r&&(o(!0),x.play())}return ne(()=>{var g;if(r){let f=l.current.querySelectorAll('[data-in="true"]'),c=12,u=(g=e.position)==null?void 0:g.includes("top"),_=0,L=0;Array.from(f).reverse().forEach(($,y)=>{let w=$;w.classList.add("Toastify__toast--stacked"),y>0&&(w.dataset.collapsed=`${s}`),w.dataset.pos||(w.dataset.pos=u?"top":"bot");let S=_*(s?.2:1)+(s?0:c*y),C=Math.max(.5,1-(s?L:0));w.style.setProperty("--y",`${u?S:S*-1}px`),w.style.setProperty("--g",`${c}`),w.style.setProperty("--s",`${C}`),_+=w.offsetHeight,L+=.025})}},[s,p,r]),a.useEffect(()=>{function g(f){var c;let u=l.current;T(f)&&((c=u?.querySelector('[tabIndex="0"]'))==null||c.focus(),o(!1),x.pause()),f.key==="Escape"&&(document.activeElement===u||u!=null&&u.contains(document.activeElement))&&(o(!0),x.play())}return document.addEventListener("keydown",g),()=>{document.removeEventListener("keydown",g)}},[T]),I.createElement("section",{ref:l,className:"Toastify",id:R,onMouseEnter:()=>{r&&(o(!1),x.pause())},onMouseLeave:d,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},i((g,f)=>{let c=f.length?{...b}:{...b,pointerEvents:"none"};return I.createElement("div",{tabIndex:-1,className:k(g),"data-stacked":r,style:c,key:`c-${g}`},f.map(({content:u,props:_})=>I.createElement(mr,{..._,stacked:r,collapseAll:d,isIn:h(_.toastId,_.containerId),key:`t-${_.key}`},u)))}))}var vr=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,Jt=new Map,_r=(t,e)=>{ne(()=>{if(typeof document>"u")return;let r=document,s=Jt.get(r);if(s){e&&s.setAttribute("nonce",e);return}let o=r.createElement("style");o.textContent=t,e&&o.setAttribute("nonce",e),r.head.appendChild(o),Jt.set(r,o)},[e])};function br(t){return _r(vr,t.nonce),I.createElement(gr,{...t})}const Qt=5e3,Pt="idle-warning",Tr=()=>{const[t,e]=a.useState("Active"),[r,s]=a.useState(Qt),{getRemainingTime:o}=ze({onIdle:()=>{e("Inactive")},onActive:()=>{e("Active")},onAction:()=>{e("Active")},timeout:Qt,throttle:500});return a.useEffect(()=>{const l=setInterval(()=>{s(Math.ceil(o()/1e3))},500);return()=>{clearInterval(l)}},[o]),a.useEffect(()=>{t==="Inactive"?x.isActive(Pt)||x.warning("You've been inactive for too long. Please interact with the page to continue.",{toastId:Pt,autoClose:!1,hideProgressBar:!0,theme:"colored"}):(x.dismiss(Pt),x.success("Welcome back!",{hideProgressBar:!0,autoClose:2e3,theme:"colored"}))},[t]),N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"card",children:[N.jsx("div",{className:"card-header",children:N.jsx("h4",{className:"card-title",children:"Idle Timer Plugin"})}),N.jsxs("div",{className:"card-body",children:[t==="Inactive"&&N.jsx("div",{className:"bg-danger/15 text-danger idle-alert mb-4 rounded px-4 py-3",role:"alert",children:"Your session has expired. Please move your mouse to resume your activity."}),N.jsx("p",{className:"text-default-400",children:"The Idle Timer plugin allows you to monitor user activity on the page. Idle is defined as a lack of mouse movement, scrolling, or keyboard input."}),N.jsxs("div",{className:"p-6 text-center",children:[N.jsx(ge,{icon:"fingerprint",className:"block mb-5 text-4xl mx-auto"}),N.jsxs("h3",{className:"mb-2 text-2xl italic",children:["Please stay idle for ",r," seconds"]})]}),N.jsx("p",{children:"You can instantiate the timer either statically or on a specific element. Element-bound timers will only track activity within that element, whereas global timers will monitor activity on the entire page."})]})]}),N.jsx(br,{})]})},kr=()=>N.jsxs(N.Fragment,{children:[N.jsx(ve,{title:"Idle Timer",subtitle:"Plugins"}),N.jsx("div",{className:"container",children:N.jsx("div",{className:"grid grid-cols-1 gap-base",children:N.jsx(Tr,{})})})]});export{kr as default};
