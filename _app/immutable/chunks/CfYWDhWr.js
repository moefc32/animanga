var Qa=Object.defineProperty;var _a=i=>{throw TypeError(i)};var Xa=(i,r,a)=>r in i?Qa(i,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[r]=a;var D=(i,r,a)=>Xa(i,typeof r!="symbol"?r+"":r,a),ga=(i,r,a)=>r.has(i)||_a("Cannot "+a);var S=(i,r,a)=>(ga(i,r,"read from private field"),a?a.call(i):r.get(i)),P=(i,r,a)=>r.has(i)?_a("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(i):r.set(i,a);var L=(i,r,a)=>(ga(i,r,"access private method"),a);import{af as Wa,b as Oa,aC as Da,L as K,h as E,ai as ya,a as X,j as W,Q as Za,J as $a,K as ba,M as F,d as H,ao as xa,N as Ha,c as na,p as ar,aD as x,as as Ra,a5 as rr,D as Aa,aE as la,aF as wa,aG as oa,_ as ir,z as ma,H as er,aH as tr,aI as sr,ar as fr,aJ as nr,aK as za,aL as lr,ah as Ba,ap as or,an as ur,aM as cr,G as vr,aN as dr,aO as hr,aP as _r,v as j,w as J,t as ta,a9 as Ta,B as Ea,n as gr,s as aa,q as br,o as Ar}from"./C4J2x-WJ.js";import{i as Ia,j as wr,k as mr,l as Tr,n as Pa,o as Er,p as Ir,q as Mr,r as Lr,v as Nr,a as q,t as Ua,c as Sr,b as kr,s as Cr}from"./wOM-AQHa.js";import{a as ra,i as Ma}from"./BOPnvoRn.js";let Q=null;function ai(i){Q=i}function ri(i,r){return r}function Or(i,r,a,e){for(var s=[],t=r.length,f=0;f<t;f++)sr(r[f].e,s,!0);var o=t>0&&s.length===0&&a!==null;if(o){var h=a.parentNode;fr(h),h.append(a),e.clear(),O(i,r[0].prev,r[t-1].next)}nr(s,()=>{for(var u=0;u<t;u++){var g=r[u];o||(e.delete(g.k),O(i,g.prev,g.next)),za(g.e,!o)}})}function ii(i,r,a,e,s,t=null){var f=i,o={flags:r,items:new Map,first:null},h=(r&Da)!==0;if(h){var u=i;f=E?K(ya(u)):u.appendChild(Wa())}E&&X();var g=null,c=!1,n=Za(()=>{var b=a();return er(b)?b:b==null?[]:Ra(b)});Oa(()=>{var b=W(n),_=b.length;if(c&&_===0)return;c=_===0;let A=!1;if(E){var T=f.data===$a;T!==(_===0)&&(f=ba(),K(f),F(!1),A=!0)}if(E){for(var w=null,M,d=0;d<_;d++){if(H.nodeType===8&&H.data===xa){f=H,A=!0,F(!1);break}var l=b[d],v=e(l,d);M=Va(H,o,w,null,l,v,d,s,r,a),o.items.set(v,M),w=M}_>0&&K(ba())}E||Dr(b,o,f,s,r,e,a),t!==null&&(_===0?g?Ha(g):g=na(()=>t(f)):g!==null&&ar(g,()=>{g=null})),A&&F(!0),W(n)}),E&&(f=H)}function Dr(i,r,a,e,s,t,f){var ua,ca,va,da;var o=(s&tr)!==0,h=(s&(la|oa))!==0,u=i.length,g=r.items,c=r.first,n=c,b,_=null,A,T=[],w=[],M,d,l,v;if(o)for(v=0;v<u;v+=1)M=i[v],d=t(M,v),l=g.get(d),l!==void 0&&((ua=l.a)==null||ua.measure(),(A??(A=new Set)).add(l));for(v=0;v<u;v+=1){if(M=i[v],d=t(M,v),l=g.get(d),l===void 0){var C=n?n.e.nodes_start:a;_=Va(C,r,_,_===null?r.first:_.next,M,d,v,e,s,f),g.set(d,_),T=[],w=[],n=_.next;continue}if(h&&yr(l,M,v,s),l.e.f&x&&(Ha(l.e),o&&((ca=l.a)==null||ca.unfix(),(A??(A=new Set)).delete(l))),l!==n){if(b!==void 0&&b.has(l)){if(T.length<w.length){var m=w[0],N;_=m.prev;var G=T[0],Z=T[T.length-1];for(N=0;N<T.length;N+=1)La(T[N],m,a);for(N=0;N<w.length;N+=1)b.delete(w[N]);O(r,G.prev,Z.next),O(r,_,G),O(r,Z,m),n=m,_=Z,v-=1,T=[],w=[]}else b.delete(l),La(l,n,a),O(r,l.prev,l.next),O(r,l,_===null?r.first:_.next),O(r,_,l),_=l;continue}for(T=[],w=[];n!==null&&n.k!==d;)n.e.f&x||(b??(b=new Set)).add(n),w.push(n),n=n.next;if(n===null)continue;l=n}T.push(l),_=l,n=l.next}if(n!==null||b!==void 0){for(var B=b===void 0?[]:Ra(b);n!==null;)n.e.f&x||B.push(n),n=n.next;var $=B.length;if($>0){var Ja=s&Da&&u===0?a:null;if(o){for(v=0;v<$;v+=1)(va=B[v].a)==null||va.measure();for(v=0;v<$;v+=1)(da=B[v].a)==null||da.fix()}Or(r,B,Ja,g)}}o&&rr(()=>{var ha;if(A!==void 0)for(l of A)(ha=l.a)==null||ha.apply()}),Aa.first=r.first&&r.first.e,Aa.last=_&&_.e}function yr(i,r,a,e){e&la&&wa(i.v,r),e&oa?wa(i.i,a):i.i=a}function Va(i,r,a,e,s,t,f,o,h,u){var g=Q,c=(h&la)!==0,n=(h&lr)===0,b=c?n?ir(s):ma(s):s,_=h&oa?ma(f):f,A={i:_,v:b,k:t,a:null,e:null,prev:a,next:e};Q=A;try{return A.e=na(()=>o(i,b,_,u),E),A.e.prev=a&&a.e,A.e.next=e&&e.e,a===null?r.first=A:(a.next=A,a.e.next=A.e),e!==null&&(e.prev=A,e.e.prev=A.e),A}finally{Q=g}}function La(i,r,a){for(var e=i.next?i.next.e.nodes_start:a,s=r?r.e.nodes_start:a,t=i.e.nodes_start;t!==e;){var f=Ba(t);s.before(t),t=f}}function O(i,r,a){r===null?i.first=a:(r.next=a,r.e.next=a&&a.e),a!==null&&(a.prev=r,a.e.prev=r&&r.e)}function Hr(i,r,a,e,s){var t=i,f="",o;Oa(()=>{if(f===(f=r()??"")){E&&X();return}o!==void 0&&(za(o),o=void 0),f!==""&&(o=na(()=>{if(E){H.data;for(var h=X(),u=h;h!==null&&(h.nodeType!==8||h.data!=="");)u=h,h=Ba(h);if(h===null)throw or(),ur;Ia(H,u),t=K(h);return}var g=f+"",c=wr(g);Ia(ya(c),c.lastChild),t.before(c)}))})}function ei(i,r,a,e,s){var o;E&&X();var t=(o=r.$$slots)==null?void 0:o[a],f=!1;t===!0&&(t=r.children,f=!0),t===void 0||t(i,f?()=>e:e)}function qa(i){var r,a,e="";if(typeof i=="string"||typeof i=="number")e+=i;else if(typeof i=="object")if(Array.isArray(i)){var s=i.length;for(r=0;r<s;r++)i[r]&&(a=qa(i[r]))&&(e&&(e+=" "),e+=a)}else for(a in i)i[a]&&(e&&(e+=" "),e+=a);return e}function Rr(){for(var i,r,a=0,e="",s=arguments.length;a<s;a++)(i=arguments[a])&&(r=qa(i))&&(e&&(e+=" "),e+=r);return e}function zr(i){return typeof i=="object"?Rr(i):i??""}const Na=[...` 	
\r\f \v\uFEFF`];function Br(i,r,a){var e=i==null?"":""+i;if(r&&(e=e?e+" "+r:r),a){for(var s in a)if(a[s])e=e?e+" "+s:s;else if(e.length)for(var t=s.length,f=0;(f=e.indexOf(s,f))>=0;){var o=f+t;(f===0||Na.includes(e[f-1]))&&(o===e.length||Na.includes(e[o]))?e=(f===0?"":e.substring(0,f))+e.substring(o+1):f=o}}return e===""?null:e}function Sa(i,r=!1){var a=r?" !important;":";",e="";for(var s in i){var t=i[s];t!=null&&t!==""&&(e+=" "+s+": "+t+a)}return e}function ia(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function Pr(i,r){if(r){var a="",e,s;if(Array.isArray(r)?(e=r[0],s=r[1]):e=r,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var t=!1,f=0,o=!1,h=[];e&&h.push(...Object.keys(e).map(ia)),s&&h.push(...Object.keys(s).map(ia));var u=0,g=-1;const A=i.length;for(var c=0;c<A;c++){var n=i[c];if(o?n==="/"&&i[c-1]==="*"&&(o=!1):t?t===n&&(t=!1):n==="/"&&i[c+1]==="*"?o=!0:n==='"'||n==="'"?t=n:n==="("?f++:n===")"&&f--,!o&&t===!1&&f===0){if(n===":"&&g===-1)g=c;else if(n===";"||c===A-1){if(g!==-1){var b=ia(i.substring(u,g).trim());if(!h.includes(b)){n!==";"&&c++;var _=i.substring(u,c).trim();a+=" "+_+";"}}u=c+1,g=-1}}}}return e&&(a+=Sa(e)),s&&(a+=Sa(s,!0)),a=a.trim(),a===""?null:a}return i==null?null:String(i)}function sa(i,r,a,e,s,t){var f=i.__className;if(E||f!==a){var o=Br(a,e,t);(!E||o!==i.getAttribute("class"))&&(o==null?i.removeAttribute("class"):r?i.className=o:i.setAttribute("class",o)),i.__className=a}else if(t&&s!==t)for(var h in t){var u=!!t[h];(s==null||u!==!!s[h])&&i.classList.toggle(h,u)}return t}function ea(i,r={},a,e){for(var s in a){var t=a[s];r[s]!==t&&(a[s]==null?i.style.removeProperty(s):i.style.setProperty(s,t,e))}}function Ur(i,r,a,e){var s=i.__style;if(E||s!==r){var t=Pr(r,e);(!E||t!==i.getAttribute("style"))&&(t==null?i.removeAttribute("style"):i.style.cssText=t),i.__style=r}else e&&(Array.isArray(e)?(ea(i,a==null?void 0:a[0],e[0]),ea(i,a==null?void 0:a[1],e[1],"important")):ea(i,a,e));return e}const U=Symbol("class"),V=Symbol("style"),Fa=Symbol("is custom element"),Ya=Symbol("is html");function ti(i){if(E){var r=!1,a=()=>{if(!r){if(r=!0,i.hasAttribute("value")){var e=i.value;z(i,"value",null),i.value=e}if(i.hasAttribute("checked")){var s=i.checked;z(i,"checked",null),i.checked=s}}};i.__on_r=a,_r(a),Lr()}}function Vr(i,r){r?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function z(i,r,a,e){var s=pa(i);E&&(s[r]=i.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&i.nodeName==="LINK")||s[r]!==(s[r]=a)&&(r==="loading"&&(i[dr]=a),a==null?i.removeAttribute(r):typeof a!="string"&&Ga(i).includes(r)?i[r]=a:i.setAttribute(r,a))}function si(i,r,a,e,s=!1){var t=pa(i),f=t[Fa],o=!t[Ya];let h=E&&f;h&&F(!1);var u=r||{},g=i.tagName==="OPTION";for(var c in r)c in a||(a[c]=null);a.class?a.class=zr(a.class):a[U]&&(a.class=null),a[V]&&(a.style??(a.style=null));var n=Ga(i);for(const d in a){let l=a[d];if(g&&d==="value"&&l==null){i.value=i.__value="",u[d]=l;continue}if(d==="class"){var b=i.namespaceURI==="http://www.w3.org/1999/xhtml";sa(i,b,l,e,r==null?void 0:r[U],a[U]),u[d]=l,u[U]=a[U];continue}if(d==="style"){Ur(i,l,r==null?void 0:r[V],a[V]),u[d]=l,u[V]=a[V];continue}var _=u[d];if(l!==_){u[d]=l;var A=d[0]+d[1];if(A!=="$$")if(A==="on"){const v={},C="$$"+d;let m=d.slice(2);var T=Mr(m);if(mr(m)&&(m=m.slice(0,-7),v.capture=!0),!T&&_){if(l!=null)continue;i.removeEventListener(m,u[C],v),u[C]=null}if(l!=null)if(T)i[`__${m}`]=l,Pa([m]);else{let N=function(G){u[d].call(this,G)};u[C]=Tr(m,i,N,v)}else T&&(i[`__${m}`]=void 0)}else if(d==="style")z(i,d,l);else if(d==="autofocus")Er(i,!!l);else if(!f&&(d==="__value"||d==="value"&&l!=null))i.value=i.__value=l;else if(d==="selected"&&g)Vr(i,l);else{var w=d;o||(w=Ir(w));var M=w==="defaultValue"||w==="defaultChecked";if(l==null&&!f&&!M)if(t[d]=null,w==="value"||w==="checked"){let v=i;const C=r===void 0;if(w==="value"){let m=v.defaultValue;v.removeAttribute(w),v.defaultValue=m,v.value=v.__value=C?m:null}else{let m=v.defaultChecked;v.removeAttribute(w),v.defaultChecked=m,v.checked=C?m:!1}}else i.removeAttribute(d);else M||n.includes(w)&&(f||typeof l!="string")?i[w]=l:typeof l!="function"&&z(i,w,l)}}}return h&&F(!0),u}function pa(i){return i.__attributes??(i.__attributes={[Fa]:i.nodeName.includes("-"),[Ya]:i.namespaceURI===cr})}var ka=new Map;function Ga(i){var r=ka.get(i.nodeName);if(r)return r;ka.set(i.nodeName,r=[]);for(var a,e=i,s=Element.prototype;s!==e;){a=hr(e);for(var t in a)a[t].set&&r.push(t);e=vr(e)}return r}const qr={attention:"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",error:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z",info:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",success:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",warning:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z",promise:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"};var Fr=Nr('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"></path></svg>');function Yr(i,r){var a=Fr(),e=j(a);J(a),ta(()=>z(e,"d",qr[r.type])),q(i,a)}let pr=1;const Gr=()=>pr++,y={closable:!1,duration:5e3,infinite:!1,rich:!1},fi={start:.75,opacity:0,duration:150},Ca=i=>{if(typeof i=="number")return i;if(!/ms|s$/.test(i))throw new Error("[SVoast] `duration` prop was given a string but not a leading identifier (ms/s).");const r=parseFloat(i.split(/ms|s/)[0]);return/(?=ms)(?!s)/.test(i)?r:r*1e3},Kr=(i,r)=>({...i,...r});var Y,p,R,I,k,Ka,fa;class jr{constructor(){P(this,I);P(this,Y,Ta(ra([])));P(this,p,Ta("bottom-left"));P(this,R,new Map);D(this,"info",(r,a=y)=>L(this,I,k).call(this,"info",r,{opts:a}));D(this,"attention",(r,a=y)=>L(this,I,k).call(this,"attention",r,{opts:a}));D(this,"success",(r,a=y)=>L(this,I,k).call(this,"success",r,{opts:a}));D(this,"warning",(r,a=y)=>L(this,I,k).call(this,"warning",r,{opts:a}));D(this,"error",(r,a=y)=>L(this,I,k).call(this,"error",r,{opts:a}));D(this,"promise",(r,a)=>{var s;if(!(r instanceof Promise))throw Error("`promise` is not a valid Promise.");const e=L(this,I,k).call(this,"promise",a.loading,{opts:a});return(s=a.onStart)==null||s.call(a),r.then(t=>{var o;const f=typeof a.success=="string"?a.success:a.success(t);L(this,I,k).call(this,"success",f,{opts:a,id:e}),(o=a==null?void 0:a.onSuccess)==null||o.call(a,t)}).catch(t=>{var o;const f=typeof a.error=="string"?a.error:a.error(t);L(this,I,k).call(this,"error",f,{opts:a,id:e}),(o=a==null?void 0:a.onError)==null||o.call(a,t)}).finally(()=>{var t;a!=null&&a.infinite||setTimeout(()=>{this.removeById(e)},Ca(a.duration||y.duration)),(t=a==null?void 0:a.onFinish)==null||t.call(a)}),r})}get toasts(){return W(S(this,Y))}set toasts(r){Ea(S(this,Y),ra(r))}get position(){return W(S(this,p))}set position(r){Ea(S(this,p),ra(r))}removeById(r){this.toasts.find(e=>e.id===r)&&(this.toasts=this.toasts.filter(e=>e.id!==r),L(this,I,fa).call(this,r))}removeByIndex(r){const a=this.toasts[r];a&&(this.toasts=this.toasts.filter((e,s)=>r!==s),L(this,I,fa).call(this,a.id))}removeAll(){this.toasts=[],S(this,R).clear()}}Y=new WeakMap,p=new WeakMap,R=new WeakMap,I=new WeakSet,k=function(r,a,{opts:e,id:s}){var T;const t=s||Gr(),f=((T=e==null?void 0:e.component)==null?void 0:T[1])||{},{closable:o,component:h,infinite:u,rich:g,onMount:c,onRemove:n,duration:b}=Kr(y,e),_=Ca(b),A={id:t,type:r,message:a,duration:_,closable:o,component:h,infinite:u,rich:g,...f};return typeof window<"u"&&(c==null||c()),L(this,I,Ka).call(this,A,t),!u&&r!=="promise"&&S(this,R).set(t,setTimeout(()=>{this.removeById(t),n==null||n()},_)),t},Ka=function(r,a){this.toasts.find(e=>e.id===a)?this.toasts=this.toasts.map(e=>e.id===a?{...e,...r}:e):this.toasts=this.position.includes("bottom")?[...this.toasts,r]:[r,...this.toasts]},fa=function(r){const a=S(this,R).get(r);a&&(clearTimeout(a),S(this,R).delete(r))};const ja=new jr;var Jr=(i,r)=>ja.removeById(r.toast.id),Qr=Ua('<button aria-label="Close toast" type="button" class="svoast-dismiss svelte-wbah57"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button>'),Xr=Ua('<div aria-live="polite" role="status"><div class="svoast-bar svelte-wbah57"></div> <div><!></div> <div class="svoast-message"><!></div> <!></div>');function ni(i,r){gr(r,!0);var a=Xr(),e=aa(j(a),2),s=j(e);Yr(s,{get type(){return r.toast.type}}),J(e);var t=aa(e,2),f=j(t);{var o=c=>{var n=Sr(),b=Ar(n);Hr(b,()=>r.toast.message),q(c,n)},h=c=>{var n=kr();ta(()=>Cr(n,r.toast.message)),q(c,n)};Ma(f,c=>{r.toast.rich?c(o):c(h,!1)})}J(t);var u=aa(t,2);{var g=c=>{var n=Qr();n.__click=[Jr,r],q(c,n)};Ma(u,c=>{r.toast.closable&&r.toast.type!=="promise"&&c(g)})}J(a),ta(()=>{z(a,"id",`svoast-${r.toast.id??""}`),sa(a,1,`svoast ${r.toast.type??""}`,"svelte-wbah57"),z(a,"data-position",ja.position),sa(e,1,`svoast-icon ${r.toast.type??""}`,"svelte-wbah57")}),q(i,a),br()}Pa(["click"]);export{fi as D,ni as T,ei as a,ai as b,Q as c,si as d,ii as e,Ur as f,sa as g,ri as i,Kr as o,ti as r,z as s,ja as t};
