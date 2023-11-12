(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function gu(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Te={},ar=[],Kt=()=>{},Hv=()=>!1,Wv=/^on[^a-z]/,ka=t=>Wv.test(t),_u=t=>t.startsWith("onUpdate:"),rt=Object.assign,yu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kv=Object.prototype.hasOwnProperty,le=(t,e)=>Kv.call(t,e),Y=Array.isArray,cr=t=>Ki(t)==="[object Map]",Da=t=>Ki(t)==="[object Set]",dd=t=>Ki(t)==="[object Date]",ne=t=>typeof t=="function",qe=t=>typeof t=="string",vr=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",Kp=t=>(we(t)||ne(t))&&ne(t.then)&&ne(t.catch),zp=Object.prototype.toString,Ki=t=>zp.call(t),zv=t=>Ki(t).slice(8,-1),Gp=t=>Ki(t)==="[object Object]",vu=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mo=gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gv=/-(\w)/g,gn=Oa(t=>t.replace(Gv,(e,n)=>n?n.toUpperCase():"")),Qv=/\B([A-Z])/g,xr=Oa(t=>t.replace(Qv,"-$1").toLowerCase()),Na=Oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lc=Oa(t=>t?`on${Na(t)}`:""),ks=(t,e)=>!Object.is(t,e),Uo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Jo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fd;const vl=()=>fd||(fd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Eu(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?Zv(s):Eu(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(qe(t)||we(t))return t}const Yv=/;(?![^(]*\))/g,Jv=/:([^]+)/,Xv=/\/\*[^]*?\*\//g;function Zv(t){const e={};return t.replace(Xv,"").split(Yv).forEach(n=>{if(n){const s=n.split(Jv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function zi(t){let e="";if(qe(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=zi(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const eE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tE=gu(eE);function Qp(t){return!!t||t===""}function nE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=xa(t[s],e[s]);return n}function xa(t,e){if(t===e)return!0;let n=dd(t),s=dd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=vr(t),s=vr(e),n||s)return t===e;if(n=Y(t),s=Y(e),n||s)return n&&s?nE(t,e):!1;if(n=we(t),s=we(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!xa(t[o],e[o]))return!1}}return String(t)===String(e)}function sE(t,e){return t.findIndex(n=>xa(n,e))}const J=t=>qe(t)?t:t==null?"":Y(t)||we(t)&&(t.toString===zp||!ne(t.toString))?JSON.stringify(t,Yp,2):String(t),Yp=(t,e)=>e&&e.__v_isRef?Yp(t,e.value):cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Da(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!Y(e)&&!Gp(e)?String(e):e;let jt;class Jp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function rE(t){return new Jp(t)}function iE(t,e=jt){e&&e.active&&e.effects.push(t)}function oE(){return jt}const Iu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xp=t=>(t.w&ts)>0,Zp=t=>(t.n&ts)>0,aE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ts},cE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Xp(r)&&!Zp(r)?r.delete(t):e[n++]=r,r.w&=~ts,r.n&=~ts}e.length=n}},El=new WeakMap;let ti=0,ts=1;const Il=30;let qt;const Rs=Symbol(""),wl=Symbol("");class wu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,iE(this,s)}run(){if(!this.active)return this.fn();let e=qt,n=Yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,Yn=!0,ts=1<<++ti,ti<=Il?aE(this):pd(this),this.fn()}finally{ti<=Il&&cE(this),ts=1<<--ti,qt=this.parent,Yn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(pd(this),this.onStop&&this.onStop(),this.active=!1)}}function pd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Yn=!0;const em=[];function Vr(){em.push(Yn),Yn=!1}function Lr(){const t=em.pop();Yn=t===void 0?!0:t}function St(t,e,n){if(Yn&&qt){let s=El.get(t);s||El.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Iu()),tm(r)}}function tm(t,e){let n=!1;ti<=Il?Zp(t)||(t.n|=ts,n=!Xp(t)):n=!t.has(qt),n&&(t.add(qt),qt.deps.push(t))}function bn(t,e,n,s,r,i){const o=El.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!vr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?vu(n)&&a.push(o.get("length")):(a.push(o.get(Rs)),cr(t)&&a.push(o.get(wl)));break;case"delete":Y(t)||(a.push(o.get(Rs)),cr(t)&&a.push(o.get(wl)));break;case"set":cr(t)&&a.push(o.get(Rs));break}if(a.length===1)a[0]&&Tl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Tl(Iu(c))}}function Tl(t,e){const n=Y(t)?t:[...t];for(const s of n)s.computed&&md(s);for(const s of n)s.computed||md(s)}function md(t,e){(t!==qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const lE=gu("__proto__,__v_isRef,__isVue"),nm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vr)),gd=uE();function uE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=he(this);for(let i=0,o=this.length;i<o;i++)St(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vr();const s=he(this)[e].apply(this,n);return Lr(),s}}),t}function hE(t){const e=he(this);return St(e,"has",t),e.hasOwnProperty(t)}class sm{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&s===(r?i?AE:am:i?om:im).get(e))return e;const o=Y(e);if(!r){if(o&&le(gd,n))return Reflect.get(gd,n,s);if(n==="hasOwnProperty")return hE}const a=Reflect.get(e,n,s);return(vr(n)?nm.has(n):lE(n))||(r||St(e,"get",n),i)?a:ht(a)?o&&vu(n)?a:a.value:we(a)?r?lm(a):Gi(a):a}}class rm extends sm{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(Er(i)&&ht(i)&&!ht(s))return!1;if(!this._shallow&&(!Zo(s)&&!Er(s)&&(i=he(i),s=he(s)),!Y(e)&&ht(i)&&!ht(s)))return i.value=s,!0;const o=Y(e)&&vu(n)?Number(n)<e.length:le(e,n),a=Reflect.set(e,n,s,r);return e===he(r)&&(o?ks(s,i)&&bn(e,"set",n,s):bn(e,"add",n,s)),a}deleteProperty(e,n){const s=le(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&bn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!vr(n)||!nm.has(n))&&St(e,"has",n),s}ownKeys(e){return St(e,"iterate",Y(e)?"length":Rs),Reflect.ownKeys(e)}}class dE extends sm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const fE=new rm,pE=new dE,mE=new rm(!0),Tu=t=>t,Va=t=>Reflect.getPrototypeOf(t);function Eo(t,e,n=!1,s=!1){t=t.__v_raw;const r=he(t),i=he(e);n||(ks(e,i)&&St(r,"get",e),St(r,"get",i));const{has:o}=Va(r),a=s?Tu:n?Pu:Ii;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Io(t,e=!1){const n=this.__v_raw,s=he(n),r=he(t);return e||(ks(t,r)&&St(s,"has",t),St(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function wo(t,e=!1){return t=t.__v_raw,!e&&St(he(t),"iterate",Rs),Reflect.get(t,"size",t)}function _d(t){t=he(t);const e=he(this);return Va(e).has.call(e,t)||(e.add(t),bn(e,"add",t,t)),this}function yd(t,e){e=he(e);const n=he(this),{has:s,get:r}=Va(n);let i=s.call(n,t);i||(t=he(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?ks(e,o)&&bn(n,"set",t,e):bn(n,"add",t,e),this}function vd(t){const e=he(this),{has:n,get:s}=Va(e);let r=n.call(e,t);r||(t=he(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&bn(e,"delete",t,void 0),i}function Ed(){const t=he(this),e=t.size!==0,n=t.clear();return e&&bn(t,"clear",void 0,void 0),n}function To(t,e){return function(s,r){const i=this,o=i.__v_raw,a=he(o),c=e?Tu:t?Pu:Ii;return!t&&St(a,"iterate",Rs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Ao(t,e,n){return function(...s){const r=this.__v_raw,i=he(r),o=cr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Tu:e?Pu:Ii;return!e&&St(i,"iterate",c?wl:Rs),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Fn(t){return function(...e){return t==="delete"?!1:this}}function gE(){const t={get(i){return Eo(this,i)},get size(){return wo(this)},has:Io,add:_d,set:yd,delete:vd,clear:Ed,forEach:To(!1,!1)},e={get(i){return Eo(this,i,!1,!0)},get size(){return wo(this)},has:Io,add:_d,set:yd,delete:vd,clear:Ed,forEach:To(!1,!0)},n={get(i){return Eo(this,i,!0)},get size(){return wo(this,!0)},has(i){return Io.call(this,i,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:To(!0,!1)},s={get(i){return Eo(this,i,!0,!0)},get size(){return wo(this,!0)},has(i){return Io.call(this,i,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:To(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ao(i,!1,!1),n[i]=Ao(i,!0,!1),e[i]=Ao(i,!1,!0),s[i]=Ao(i,!0,!0)}),[t,n,e,s]}const[_E,yE,vE,EE]=gE();function Au(t,e){const n=e?t?EE:vE:t?yE:_E;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(le(n,r)&&r in s?n:s,r,i)}const IE={get:Au(!1,!1)},wE={get:Au(!1,!0)},TE={get:Au(!0,!1)},im=new WeakMap,om=new WeakMap,am=new WeakMap,AE=new WeakMap;function RE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function PE(t){return t.__v_skip||!Object.isExtensible(t)?0:RE(zv(t))}function Gi(t){return Er(t)?t:Ru(t,!1,fE,IE,im)}function cm(t){return Ru(t,!1,mE,wE,om)}function lm(t){return Ru(t,!0,pE,TE,am)}function Ru(t,e,n,s,r){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=PE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function lr(t){return Er(t)?lr(t.__v_raw):!!(t&&t.__v_isReactive)}function Er(t){return!!(t&&t.__v_isReadonly)}function Zo(t){return!!(t&&t.__v_isShallow)}function um(t){return lr(t)||Er(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function hm(t){return Jo(t,"__v_skip",!0),t}const Ii=t=>we(t)?Gi(t):t,Pu=t=>we(t)?lm(t):t;function dm(t){Yn&&qt&&(t=he(t),tm(t.dep||(t.dep=Iu())))}function fm(t,e){t=he(t);const n=t.dep;n&&Tl(n)}function ht(t){return!!(t&&t.__v_isRef===!0)}function bE(t){return pm(t,!1)}function SE(t){return pm(t,!0)}function pm(t,e){return ht(t)?t:new CE(t,e)}class CE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:Ii(e)}get value(){return dm(this),this._value}set value(e){const n=this.__v_isShallow||Zo(e)||Er(e);e=n?e:he(e),ks(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ii(e),fm(this))}}function ur(t){return ht(t)?t.value:t}const kE={get:(t,e,n)=>ur(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ht(r)&&!ht(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function mm(t){return lr(t)?t:new Proxy(t,kE)}class DE{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new wu(e,()=>{this._dirty||(this._dirty=!0,fm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=he(this);return dm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function OE(t,e,n=!1){let s,r;const i=ne(t);return i?(s=t,r=Kt):(s=t.get,r=t.set),new DE(s,r,i||!r,n)}function Jn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){La(i,e,n)}return r}function zt(t,e,n,s){if(ne(t)){const i=Jn(t,e,n,s);return i&&Kp(i)&&i.catch(o=>{La(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(zt(t[i],e,n,s));return r}function La(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Jn(c,null,10,[t,o,a]);return}}NE(t,n,r,s)}function NE(t,e,n,s=!0){console.error(t)}let wi=!1,Al=!1;const ut=[];let on=0;const hr=[];let Tn=null,ys=0;const gm=Promise.resolve();let bu=null;function _m(t){const e=bu||gm;return t?e.then(this?t.bind(this):t):e}function xE(t){let e=on+1,n=ut.length;for(;e<n;){const s=e+n>>>1,r=ut[s],i=Ti(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function Su(t){(!ut.length||!ut.includes(t,wi&&t.allowRecurse?on+1:on))&&(t.id==null?ut.push(t):ut.splice(xE(t.id),0,t),ym())}function ym(){!wi&&!Al&&(Al=!0,bu=gm.then(Em))}function VE(t){const e=ut.indexOf(t);e>on&&ut.splice(e,1)}function LE(t){Y(t)?hr.push(...t):(!Tn||!Tn.includes(t,t.allowRecurse?ys+1:ys))&&hr.push(t),ym()}function Id(t,e=wi?on+1:0){for(;e<ut.length;e++){const n=ut[e];n&&n.pre&&(ut.splice(e,1),e--,n())}}function vm(t){if(hr.length){const e=[...new Set(hr)];if(hr.length=0,Tn){Tn.push(...e);return}for(Tn=e,Tn.sort((n,s)=>Ti(n)-Ti(s)),ys=0;ys<Tn.length;ys++)Tn[ys]();Tn=null,ys=0}}const Ti=t=>t.id==null?1/0:t.id,ME=(t,e)=>{const n=Ti(t)-Ti(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Em(t){Al=!1,wi=!0,ut.sort(ME);const e=Kt;try{for(on=0;on<ut.length;on++){const n=ut[on];n&&n.active!==!1&&Jn(n,null,14)}}finally{on=0,ut.length=0,vm(),wi=!1,bu=null,(ut.length||hr.length)&&Em()}}function UE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Te;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Te;d&&(r=n.map(m=>qe(m)?m.trim():m)),h&&(r=n.map(Xo))}let a,c=s[a=Lc(e)]||s[a=Lc(gn(e))];!c&&i&&(c=s[a=Lc(xr(e))]),c&&zt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(l,t,6,r)}}function Im(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ne(t)){const c=l=>{const u=Im(l,e,!0);u&&(a=!0,rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&s.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):rt(o,i),we(t)&&s.set(t,o),o)}function Ma(t,e){return!t||!ka(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,xr(e))||le(t,e))}let Ft=null,Ua=null;function ea(t){const e=Ft;return Ft=t,Ua=t&&t.type.__scopeId||null,e}function yt(t){Ua=t}function vt(){Ua=null}function Oe(t,e=Ft,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Od(-1);const i=ea(e);let o;try{o=t(...r)}finally{ea(i),s._d&&Od(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Mc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:y,inheritAttrs:A}=t;let I,S;const O=ea(t);try{if(n.shapeFlag&4){const k=r||s;I=rn(u.call(k,k,h,i,m,d,y)),S=c}else{const k=e;I=rn(k.length>1?k(i,{attrs:c,slots:a,emit:l}):k(i,null)),S=e.props?c:FE(c)}}catch(k){hi.length=0,La(k,t,1),I=U(Ds)}let j=I;if(S&&A!==!1){const k=Object.keys(S),{shapeFlag:de}=j;k.length&&de&7&&(o&&k.some(_u)&&(S=$E(S,o)),j=Ir(j,S))}return n.dirs&&(j=Ir(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),I=j,ea(O),I}const FE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ka(n))&&((e||(e={}))[n]=t[n]);return e},$E=(t,e)=>{const n={};for(const s in t)(!_u(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function BE(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?wd(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ma(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?wd(s,o,l):!0:!!o;return!1}function wd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ma(n,i))return!0}return!1}function jE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const wm="components";function G(t,e){return HE(wm,t,!0,e)||t}const qE=Symbol.for("v-ndc");function HE(t,e,n=!0,s=!1){const r=Ft||et;if(r){const i=r.type;if(t===wm){const a=LI(i,!1);if(a&&(a===e||a===gn(e)||a===Na(gn(e))))return i}const o=Td(r[t]||i[t],e)||Td(r.appContext[t],e);return!o&&s?i:o}}function Td(t,e){return t&&(t[e]||t[gn(e)]||t[Na(gn(e))])}const WE=t=>t.__isSuspense;function KE(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):LE(t)}const Ro={};function dr(t,e,n){return Tm(t,e,n)}function Tm(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Te){var a;const c=oE()===((a=et)==null?void 0:a.scope)?et:null;let l,u=!1,h=!1;if(ht(t)?(l=()=>t.value,u=Zo(t)):lr(t)?(l=()=>t,s=!0):Y(t)?(h=!0,u=t.some(k=>lr(k)||Zo(k)),l=()=>t.map(k=>{if(ht(k))return k.value;if(lr(k))return Is(k);if(ne(k))return Jn(k,c,2)})):ne(t)?e?l=()=>Jn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),zt(t,c,3,[m])}:l=Kt,e&&s){const k=l;l=()=>Is(k())}let d,m=k=>{d=O.onStop=()=>{Jn(k,c,4)}},y;if(Ri)if(m=Kt,e?n&&zt(e,c,3,[l(),h?[]:void 0,m]):l(),r==="sync"){const k=FI();y=k.__watcherHandles||(k.__watcherHandles=[])}else return Kt;let A=h?new Array(t.length).fill(Ro):Ro;const I=()=>{if(O.active)if(e){const k=O.run();(s||u||(h?k.some((de,me)=>ks(de,A[me])):ks(k,A)))&&(d&&d(),zt(e,c,3,[k,A===Ro?void 0:h&&A[0]===Ro?[]:A,m]),A=k)}else O.run()};I.allowRecurse=!!e;let S;r==="sync"?S=I:r==="post"?S=()=>Pt(I,c&&c.suspense):(I.pre=!0,c&&(I.id=c.uid),S=()=>Su(I));const O=new wu(l,S);e?n?I():A=O.run():r==="post"?Pt(O.run.bind(O),c&&c.suspense):O.run();const j=()=>{O.stop(),c&&c.scope&&yu(c.scope.effects,O)};return y&&y.push(j),j}function zE(t,e,n){const s=this.proxy,r=qe(t)?t.includes(".")?Am(s,t):()=>s[t]:t.bind(s,s);let i;ne(e)?i=e:(i=e.handler,n=e);const o=et;wr(this);const a=Tm(r,i.bind(s),n);return o?wr(o):Ps(),a}function Am(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Is(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ht(t))Is(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Is(t[n],e);else if(Da(t)||cr(t))t.forEach(n=>{Is(n,e)});else if(Gp(t))for(const n in t)Is(t[n],e);return t}function Dt(t,e){const n=Ft;if(n===null)return t;const s=ja(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Te]=e[i];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&Is(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ms(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Vr(),zt(c,n,8,[t.el,a,t,e]),Lr())}}/*! #__NO_SIDE_EFFECTS__ */function Rm(t,e){return ne(t)?(()=>rt({name:t.name},e,{setup:t}))():t}const Fo=t=>!!t.type.__asyncLoader,Pm=t=>t.type.__isKeepAlive;function GE(t,e){bm(t,"a",e)}function QE(t,e){bm(t,"da",e)}function bm(t,e,n=et){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Fa(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Pm(r.parent.vnode)&&YE(s,e,n,r),r=r.parent}}function YE(t,e,n,s){const r=Fa(e,t,s,!0);Sm(()=>{yu(s[e],r)},n)}function Fa(t,e,n=et,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Vr(),wr(n);const a=zt(e,n,t,o);return Ps(),Lr(),a});return s?r.unshift(i):r.push(i),i}}const xn=t=>(e,n=et)=>(!Ri||t==="sp")&&Fa(t,(...s)=>e(...s),n),JE=xn("bm"),XE=xn("m"),ZE=xn("bu"),eI=xn("u"),tI=xn("bum"),Sm=xn("um"),nI=xn("sp"),sI=xn("rtg"),rI=xn("rtc");function iI(t,e=et){Fa("ec",t,e)}function Vn(t,e,n,s){let r;const i=n&&n[s];if(Y(t)||qe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(we(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Rl=t=>t?Fm(t)?ja(t)||t.proxy:Rl(t.parent):null,ui=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rl(t.parent),$root:t=>Rl(t.root),$emit:t=>t.emit,$options:t=>Cu(t),$forceUpdate:t=>t.f||(t.f=()=>Su(t.update)),$nextTick:t=>t.n||(t.n=_m.bind(t.proxy)),$watch:t=>zE.bind(t)}),Uc=(t,e)=>t!==Te&&!t.__isScriptSetup&&le(t,e),oI={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Uc(s,e))return o[e]=1,s[e];if(r!==Te&&le(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==Te&&le(n,e))return o[e]=4,n[e];Pl&&(o[e]=0)}}const u=ui[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&le(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,le(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Uc(r,e)?(r[e]=n,!0):s!==Te&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Te&&le(t,o)||Uc(e,o)||(a=i[0])&&le(a,o)||le(s,o)||le(ui,o)||le(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ad(t){return Y(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pl=!0;function aI(t){const e=Cu(t),n=t.proxy,s=t.ctx;Pl=!1,e.beforeCreate&&Rd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:y,activated:A,deactivated:I,beforeDestroy:S,beforeUnmount:O,destroyed:j,unmounted:k,render:de,renderTracked:me,renderTriggered:We,errorCaptured:it,serverPrefetch:Lt,expose:It,inheritAttrs:Mn,components:ps,directives:en,filters:Kr}=e;if(l&&cI(l,s,null),o)for(const Ee in o){const fe=o[Ee];ne(fe)&&(s[Ee]=fe.bind(n))}if(r){const Ee=r.call(n,n);we(Ee)&&(t.data=Gi(Ee))}if(Pl=!0,i)for(const Ee in i){const fe=i[Ee],In=ne(fe)?fe.bind(n,n):ne(fe.get)?fe.get.bind(n,n):Kt,Un=!ne(fe)&&ne(fe.set)?fe.set.bind(n):Kt,tn=Mt({get:In,set:Un});Object.defineProperty(s,Ee,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Rt=>tn.value=Rt})}if(a)for(const Ee in a)Cm(a[Ee],s,n,Ee);if(c){const Ee=ne(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(fe=>{$o(fe,Ee[fe])})}u&&Rd(u,t,"c");function Ke(Ee,fe){Y(fe)?fe.forEach(In=>Ee(In.bind(n))):fe&&Ee(fe.bind(n))}if(Ke(JE,h),Ke(XE,d),Ke(ZE,m),Ke(eI,y),Ke(GE,A),Ke(QE,I),Ke(iI,it),Ke(rI,me),Ke(sI,We),Ke(tI,O),Ke(Sm,k),Ke(nI,Lt),Y(It))if(It.length){const Ee=t.exposed||(t.exposed={});It.forEach(fe=>{Object.defineProperty(Ee,fe,{get:()=>n[fe],set:In=>n[fe]=In})})}else t.exposed||(t.exposed={});de&&t.render===Kt&&(t.render=de),Mn!=null&&(t.inheritAttrs=Mn),ps&&(t.components=ps),en&&(t.directives=en)}function cI(t,e,n=Kt){Y(t)&&(t=bl(t));for(const s in t){const r=t[s];let i;we(r)?"default"in r?i=Sn(r.from||s,r.default,!0):i=Sn(r.from||s):i=Sn(r),ht(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Rd(t,e,n){zt(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cm(t,e,n,s){const r=s.includes(".")?Am(n,s):()=>n[s];if(qe(t)){const i=e[t];ne(i)&&dr(r,i)}else if(ne(t))dr(r,t.bind(n));else if(we(t))if(Y(t))t.forEach(i=>Cm(i,e,n,s));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&dr(r,i,t)}}function Cu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>ta(c,l,o,!0)),ta(c,e,o)),we(e)&&i.set(e,c),c}function ta(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ta(t,i,n,!0),r&&r.forEach(o=>ta(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=lI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const lI={data:Pd,props:bd,emits:bd,methods:ni,computed:ni,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:ni,directives:ni,watch:hI,provide:Pd,inject:uI};function Pd(t,e){return e?t?function(){return rt(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function uI(t,e){return ni(bl(t),bl(e))}function bl(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?rt(Object.create(null),t,e):e}function bd(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:rt(Object.create(null),Ad(t),Ad(e??{})):e}function hI(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const s in e)n[s]=Tt(t[s],e[s]);return n}function km(){return{app:null,config:{isNativeTag:Hv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dI=0;function fI(t,e){return function(s,r=null){ne(s)||(s=rt({},s)),r!=null&&!we(r)&&(r=null);const i=km(),o=new WeakSet;let a=!1;const c=i.app={_uid:dI++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:$I,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ne(l.install)?(o.add(l),l.install(c,...u)):ne(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=U(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ja(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){na=c;try{return l()}finally{na=null}}};return c}}let na=null;function $o(t,e){if(et){let n=et.provides;const s=et.parent&&et.parent.provides;s===n&&(n=et.provides=Object.create(s)),n[t]=e}}function Sn(t,e,n=!1){const s=et||Ft;if(s||na){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:na._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ne(e)?e.call(s&&s.proxy):e}}function pI(t,e,n,s=!1){const r={},i={};Jo(i,Ba,1),t.propsDefaults=Object.create(null),Dm(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:cm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function mI(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=he(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ma(t.emitsOptions,d))continue;const m=e[d];if(c)if(le(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const y=gn(d);r[y]=Sl(c,a,y,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Dm(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=xr(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Sl(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],l=!0)}l&&bn(t,"set","$attrs")}function Dm(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Mo(c))continue;const l=e[c];let u;r&&le(r,u=gn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ma(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=he(n),l=a||Te;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Sl(r,c,h,l[h],t,!le(l,h))}}return o}function Sl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ne(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(wr(r),s=l[n]=c.call(null,e),Ps())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===xr(n))&&(s=!0))}return s}function Om(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ne(t)){const u=h=>{c=!0;const[d,m]=Om(h,e,!0);rt(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return we(t)&&s.set(t,ar),ar;if(Y(i))for(let u=0;u<i.length;u++){const h=gn(i[u]);Sd(h)&&(o[h]=Te)}else if(i)for(const u in i){const h=gn(u);if(Sd(h)){const d=i[u],m=o[h]=Y(d)||ne(d)?{type:d}:rt({},d);if(m){const y=Dd(Boolean,m.type),A=Dd(String,m.type);m[0]=y>-1,m[1]=A<0||y<A,(y>-1||le(m,"default"))&&a.push(h)}}}const l=[o,a];return we(t)&&s.set(t,l),l}function Sd(t){return t[0]!=="$"}function Cd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function kd(t,e){return Cd(t)===Cd(e)}function Dd(t,e){return Y(e)?e.findIndex(n=>kd(n,t)):ne(e)&&kd(e,t)?0:-1}const Nm=t=>t[0]==="_"||t==="$stable",ku=t=>Y(t)?t.map(rn):[rn(t)],gI=(t,e,n)=>{if(e._n)return e;const s=Oe((...r)=>ku(e(...r)),n);return s._c=!1,s},xm=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Nm(r))continue;const i=t[r];if(ne(i))e[r]=gI(r,i,s);else if(i!=null){const o=ku(i);e[r]=()=>o}}},Vm=(t,e)=>{const n=ku(e);t.slots.default=()=>n},_I=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),Jo(e,"_",n)):xm(e,t.slots={})}else t.slots={},e&&Vm(t,e);Jo(t.slots,Ba,1)},yI=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Te;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(rt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,xm(e,r)),o=e}else e&&(Vm(t,e),o={default:1});if(i)for(const a in r)!Nm(a)&&o[a]==null&&delete r[a]};function Cl(t,e,n,s,r=!1){if(Y(t)){t.forEach((d,m)=>Cl(d,e&&(Y(e)?e[m]:e),n,s,r));return}if(Fo(s)&&!r)return;const i=s.shapeFlag&4?ja(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(qe(l)?(u[l]=null,le(h,l)&&(h[l]=null)):ht(l)&&(l.value=null)),ne(c))Jn(c,a,12,[o,u]);else{const d=qe(c),m=ht(c);if(d||m){const y=()=>{if(t.f){const A=d?le(h,c)?h[c]:u[c]:c.value;r?Y(A)&&yu(A,i):Y(A)?A.includes(i)||A.push(i):d?(u[c]=[i],le(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,le(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Pt(y,n)):y()}}}const Pt=KE;function vI(t){return EI(t)}function EI(t,e){const n=vl();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Kt,insertStaticContent:y}=t,A=(p,g,_,v=null,T=null,R=null,M=!1,C=null,D=!!g.dynamicChildren)=>{if(p===g)return;p&&!Gr(p,g)&&(v=E(p),Rt(p,T,R,!0),p=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:b,ref:K,shapeFlag:q}=g;switch(b){case $a:I(p,g,_,v);break;case Ds:S(p,g,_,v);break;case Bo:p==null&&O(g,_,v,M);break;case $e:ps(p,g,_,v,T,R,M,C,D);break;default:q&1?de(p,g,_,v,T,R,M,C,D):q&6?en(p,g,_,v,T,R,M,C,D):(q&64||q&128)&&b.process(p,g,_,v,T,R,M,C,D,N)}K!=null&&T&&Cl(K,p&&p.ref,R,g||p,!g)},I=(p,g,_,v)=>{if(p==null)s(g.el=a(g.children),_,v);else{const T=g.el=p.el;g.children!==p.children&&l(T,g.children)}},S=(p,g,_,v)=>{p==null?s(g.el=c(g.children||""),_,v):g.el=p.el},O=(p,g,_,v)=>{[p.el,p.anchor]=y(p.children,g,_,v,p.el,p.anchor)},j=({el:p,anchor:g},_,v)=>{let T;for(;p&&p!==g;)T=d(p),s(p,_,v),p=T;s(g,_,v)},k=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),r(p),p=_;r(g)},de=(p,g,_,v,T,R,M,C,D)=>{M=M||g.type==="svg",p==null?me(g,_,v,T,R,M,C,D):Lt(p,g,T,R,M,C,D)},me=(p,g,_,v,T,R,M,C)=>{let D,b;const{type:K,props:q,shapeFlag:z,transition:te,dirs:re}=p;if(D=p.el=o(p.type,R,q&&q.is,q),z&8?u(D,p.children):z&16&&it(p.children,D,null,v,T,R&&K!=="foreignObject",M,C),re&&ms(p,null,v,"created"),We(D,p,p.scopeId,M,v),q){for(const ye in q)ye!=="value"&&!Mo(ye)&&i(D,ye,null,q[ye],R,p.children,v,T,ot);"value"in q&&i(D,"value",null,q.value),(b=q.onVnodeBeforeMount)&&sn(b,v,p)}re&&ms(p,null,v,"beforeMount");const Ie=II(T,te);Ie&&te.beforeEnter(D),s(D,g,_),((b=q&&q.onVnodeMounted)||Ie||re)&&Pt(()=>{b&&sn(b,v,p),Ie&&te.enter(D),re&&ms(p,null,v,"mounted")},T)},We=(p,g,_,v,T)=>{if(_&&m(p,_),v)for(let R=0;R<v.length;R++)m(p,v[R]);if(T){let R=T.subTree;if(g===R){const M=T.vnode;We(p,M,M.scopeId,M.slotScopeIds,T.parent)}}},it=(p,g,_,v,T,R,M,C,D=0)=>{for(let b=D;b<p.length;b++){const K=p[b]=C?jn(p[b]):rn(p[b]);A(null,K,g,_,v,T,R,M,C)}},Lt=(p,g,_,v,T,R,M)=>{const C=g.el=p.el;let{patchFlag:D,dynamicChildren:b,dirs:K}=g;D|=p.patchFlag&16;const q=p.props||Te,z=g.props||Te;let te;_&&gs(_,!1),(te=z.onVnodeBeforeUpdate)&&sn(te,_,g,p),K&&ms(g,p,_,"beforeUpdate"),_&&gs(_,!0);const re=T&&g.type!=="foreignObject";if(b?It(p.dynamicChildren,b,C,_,v,re,R):M||fe(p,g,C,null,_,v,re,R,!1),D>0){if(D&16)Mn(C,g,q,z,_,v,T);else if(D&2&&q.class!==z.class&&i(C,"class",null,z.class,T),D&4&&i(C,"style",q.style,z.style,T),D&8){const Ie=g.dynamicProps;for(let ye=0;ye<Ie.length;ye++){const xe=Ie[ye],Bt=q[xe],Ys=z[xe];(Ys!==Bt||xe==="value")&&i(C,xe,Bt,Ys,T,p.children,_,v,ot)}}D&1&&p.children!==g.children&&u(C,g.children)}else!M&&b==null&&Mn(C,g,q,z,_,v,T);((te=z.onVnodeUpdated)||K)&&Pt(()=>{te&&sn(te,_,g,p),K&&ms(g,p,_,"updated")},v)},It=(p,g,_,v,T,R,M)=>{for(let C=0;C<g.length;C++){const D=p[C],b=g[C],K=D.el&&(D.type===$e||!Gr(D,b)||D.shapeFlag&70)?h(D.el):_;A(D,b,K,null,v,T,R,M,!0)}},Mn=(p,g,_,v,T,R,M)=>{if(_!==v){if(_!==Te)for(const C in _)!Mo(C)&&!(C in v)&&i(p,C,_[C],null,M,g.children,T,R,ot);for(const C in v){if(Mo(C))continue;const D=v[C],b=_[C];D!==b&&C!=="value"&&i(p,C,b,D,M,g.children,T,R,ot)}"value"in v&&i(p,"value",_.value,v.value)}},ps=(p,g,_,v,T,R,M,C,D)=>{const b=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:q,dynamicChildren:z,slotScopeIds:te}=g;te&&(C=C?C.concat(te):te),p==null?(s(b,_,v),s(K,_,v),it(g.children,_,K,T,R,M,C,D)):q>0&&q&64&&z&&p.dynamicChildren?(It(p.dynamicChildren,z,_,T,R,M,C),(g.key!=null||T&&g===T.subTree)&&Lm(p,g,!0)):fe(p,g,_,K,T,R,M,C,D)},en=(p,g,_,v,T,R,M,C,D)=>{g.slotScopeIds=C,p==null?g.shapeFlag&512?T.ctx.activate(g,_,v,M,D):Kr(g,_,v,T,R,M,D):zs(p,g,D)},Kr=(p,g,_,v,T,R,M)=>{const C=p.component=DI(p,v,T);if(Pm(p)&&(C.ctx.renderer=N),OI(C),C.asyncDep){if(T&&T.registerDep(C,Ke),!p.el){const D=C.subTree=U(Ds);S(null,D,g,_)}return}Ke(C,p,g,_,T,R,M)},zs=(p,g,_)=>{const v=g.component=p.component;if(BE(p,g,_))if(v.asyncDep&&!v.asyncResolved){Ee(v,g,_);return}else v.next=g,VE(v.update),v.update();else g.el=p.el,v.vnode=g},Ke=(p,g,_,v,T,R,M)=>{const C=()=>{if(p.isMounted){let{next:K,bu:q,u:z,parent:te,vnode:re}=p,Ie=K,ye;gs(p,!1),K?(K.el=re.el,Ee(p,K,M)):K=re,q&&Uo(q),(ye=K.props&&K.props.onVnodeBeforeUpdate)&&sn(ye,te,K,re),gs(p,!0);const xe=Mc(p),Bt=p.subTree;p.subTree=xe,A(Bt,xe,h(Bt.el),E(Bt),p,T,R),K.el=xe.el,Ie===null&&jE(p,xe.el),z&&Pt(z,T),(ye=K.props&&K.props.onVnodeUpdated)&&Pt(()=>sn(ye,te,K,re),T)}else{let K;const{el:q,props:z}=g,{bm:te,m:re,parent:Ie}=p,ye=Fo(g);if(gs(p,!1),te&&Uo(te),!ye&&(K=z&&z.onVnodeBeforeMount)&&sn(K,Ie,g),gs(p,!0),q&&pe){const xe=()=>{p.subTree=Mc(p),pe(q,p.subTree,p,T,null)};ye?g.type.__asyncLoader().then(()=>!p.isUnmounted&&xe()):xe()}else{const xe=p.subTree=Mc(p);A(null,xe,_,v,p,T,R),g.el=xe.el}if(re&&Pt(re,T),!ye&&(K=z&&z.onVnodeMounted)){const xe=g;Pt(()=>sn(K,Ie,xe),T)}(g.shapeFlag&256||Ie&&Fo(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&p.a&&Pt(p.a,T),p.isMounted=!0,g=_=v=null}},D=p.effect=new wu(C,()=>Su(b),p.scope),b=p.update=()=>D.run();b.id=p.uid,gs(p,!0),b()},Ee=(p,g,_)=>{g.component=p;const v=p.vnode.props;p.vnode=g,p.next=null,mI(p,g.props,v,_),yI(p,g.children,_),Vr(),Id(),Lr()},fe=(p,g,_,v,T,R,M,C,D=!1)=>{const b=p&&p.children,K=p?p.shapeFlag:0,q=g.children,{patchFlag:z,shapeFlag:te}=g;if(z>0){if(z&128){Un(b,q,_,v,T,R,M,C,D);return}else if(z&256){In(b,q,_,v,T,R,M,C,D);return}}te&8?(K&16&&ot(b,T,R),q!==b&&u(_,q)):K&16?te&16?Un(b,q,_,v,T,R,M,C,D):ot(b,T,R,!0):(K&8&&u(_,""),te&16&&it(q,_,v,T,R,M,C,D))},In=(p,g,_,v,T,R,M,C,D)=>{p=p||ar,g=g||ar;const b=p.length,K=g.length,q=Math.min(b,K);let z;for(z=0;z<q;z++){const te=g[z]=D?jn(g[z]):rn(g[z]);A(p[z],te,_,null,T,R,M,C,D)}b>K?ot(p,T,R,!0,!1,q):it(g,_,v,T,R,M,C,D,q)},Un=(p,g,_,v,T,R,M,C,D)=>{let b=0;const K=g.length;let q=p.length-1,z=K-1;for(;b<=q&&b<=z;){const te=p[b],re=g[b]=D?jn(g[b]):rn(g[b]);if(Gr(te,re))A(te,re,_,null,T,R,M,C,D);else break;b++}for(;b<=q&&b<=z;){const te=p[q],re=g[z]=D?jn(g[z]):rn(g[z]);if(Gr(te,re))A(te,re,_,null,T,R,M,C,D);else break;q--,z--}if(b>q){if(b<=z){const te=z+1,re=te<K?g[te].el:v;for(;b<=z;)A(null,g[b]=D?jn(g[b]):rn(g[b]),_,re,T,R,M,C,D),b++}}else if(b>z)for(;b<=q;)Rt(p[b],T,R,!0),b++;else{const te=b,re=b,Ie=new Map;for(b=re;b<=z;b++){const kt=g[b]=D?jn(g[b]):rn(g[b]);kt.key!=null&&Ie.set(kt.key,b)}let ye,xe=0;const Bt=z-re+1;let Ys=!1,ld=0;const zr=new Array(Bt);for(b=0;b<Bt;b++)zr[b]=0;for(b=te;b<=q;b++){const kt=p[b];if(xe>=Bt){Rt(kt,T,R,!0);continue}let nn;if(kt.key!=null)nn=Ie.get(kt.key);else for(ye=re;ye<=z;ye++)if(zr[ye-re]===0&&Gr(kt,g[ye])){nn=ye;break}nn===void 0?Rt(kt,T,R,!0):(zr[nn-re]=b+1,nn>=ld?ld=nn:Ys=!0,A(kt,g[nn],_,null,T,R,M,C,D),xe++)}const ud=Ys?wI(zr):ar;for(ye=ud.length-1,b=Bt-1;b>=0;b--){const kt=re+b,nn=g[kt],hd=kt+1<K?g[kt+1].el:v;zr[b]===0?A(null,nn,_,hd,T,R,M,C,D):Ys&&(ye<0||b!==ud[ye]?tn(nn,_,hd,2):ye--)}}},tn=(p,g,_,v,T=null)=>{const{el:R,type:M,transition:C,children:D,shapeFlag:b}=p;if(b&6){tn(p.component.subTree,g,_,v);return}if(b&128){p.suspense.move(g,_,v);return}if(b&64){M.move(p,g,_,N);return}if(M===$e){s(R,g,_);for(let q=0;q<D.length;q++)tn(D[q],g,_,v);s(p.anchor,g,_);return}if(M===Bo){j(p,g,_);return}if(v!==2&&b&1&&C)if(v===0)C.beforeEnter(R),s(R,g,_),Pt(()=>C.enter(R),T);else{const{leave:q,delayLeave:z,afterLeave:te}=C,re=()=>s(R,g,_),Ie=()=>{q(R,()=>{re(),te&&te()})};z?z(R,re,Ie):Ie()}else s(R,g,_)},Rt=(p,g,_,v=!1,T=!1)=>{const{type:R,props:M,ref:C,children:D,dynamicChildren:b,shapeFlag:K,patchFlag:q,dirs:z}=p;if(C!=null&&Cl(C,null,_,p,!0),K&256){g.ctx.deactivate(p);return}const te=K&1&&z,re=!Fo(p);let Ie;if(re&&(Ie=M&&M.onVnodeBeforeUnmount)&&sn(Ie,g,p),K&6)vo(p.component,_,v);else{if(K&128){p.suspense.unmount(_,v);return}te&&ms(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,_,T,N,v):b&&(R!==$e||q>0&&q&64)?ot(b,g,_,!1,!0):(R===$e&&q&384||!T&&K&16)&&ot(D,g,_),v&&Gs(p)}(re&&(Ie=M&&M.onVnodeUnmounted)||te)&&Pt(()=>{Ie&&sn(Ie,g,p),te&&ms(p,null,g,"unmounted")},_)},Gs=p=>{const{type:g,el:_,anchor:v,transition:T}=p;if(g===$e){Qs(_,v);return}if(g===Bo){k(p);return}const R=()=>{r(_),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(p.shapeFlag&1&&T&&!T.persisted){const{leave:M,delayLeave:C}=T,D=()=>M(_,R);C?C(p.el,R,D):D()}else R()},Qs=(p,g)=>{let _;for(;p!==g;)_=d(p),r(p),p=_;r(g)},vo=(p,g,_)=>{const{bum:v,scope:T,update:R,subTree:M,um:C}=p;v&&Uo(v),T.stop(),R&&(R.active=!1,Rt(M,p,g,_)),C&&Pt(C,g),Pt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ot=(p,g,_,v=!1,T=!1,R=0)=>{for(let M=R;M<p.length;M++)Rt(p[M],g,_,v,T)},E=p=>p.shapeFlag&6?E(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),$=(p,g,_)=>{p==null?g._vnode&&Rt(g._vnode,null,null,!0):A(g._vnode||null,p,g,null,null,null,_),Id(),vm(),g._vnode=p},N={p:A,um:Rt,m:tn,r:Gs,mt:Kr,mc:it,pc:fe,pbc:It,n:E,o:t};let H,pe;return e&&([H,pe]=e(N)),{render:$,hydrate:H,createApp:fI($,H)}}function gs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function II(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Lm(t,e,n=!1){const s=t.children,r=e.children;if(Y(s)&&Y(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=jn(r[i]),a.el=o.el),n||Lm(o,a)),a.type===$a&&(a.el=o.el)}}function wI(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const TI=t=>t.__isTeleport,$e=Symbol.for("v-fgt"),$a=Symbol.for("v-txt"),Ds=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),hi=[];let Ht=null;function V(t=!1){hi.push(Ht=t?null:[])}function AI(){hi.pop(),Ht=hi[hi.length-1]||null}let Ai=1;function Od(t){Ai+=t}function Mm(t){return t.dynamicChildren=Ai>0?Ht||ar:null,AI(),Ai>0&&Ht&&Ht.push(t),t}function L(t,e,n,s,r,i){return Mm(f(t,e,n,s,r,i,!0))}function Du(t,e,n,s,r){return Mm(U(t,e,n,s,r,!0))}function kl(t){return t?t.__v_isVNode===!0:!1}function Gr(t,e){return t.type===e.type&&t.key===e.key}const Ba="__vInternal",Um=({key:t})=>t??null,jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||ht(t)||ne(t)?{i:Ft,r:t,k:e,f:!!n}:t:null);function f(t,e=null,n=null,s=0,r=null,i=t===$e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Um(e),ref:e&&jo(e),scopeId:Ua,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ft};return a?(Ou(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Ai>0&&!o&&Ht&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ht.push(c),c}const U=RI;function RI(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===qE)&&(t=Ds),kl(t)){const a=Ir(t,e,!0);return n&&Ou(a,n),Ai>0&&!i&&Ht&&(a.shapeFlag&6?Ht[Ht.indexOf(t)]=a:Ht.push(a)),a.patchFlag|=-2,a}if(MI(t)&&(t=t.__vccOpts),e){e=PI(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=zi(a)),we(c)&&(um(c)&&!Y(c)&&(c=rt({},c)),e.style=Eu(c))}const o=qe(t)?1:WE(t)?128:TI(t)?64:we(t)?4:ne(t)?2:0;return f(t,e,n,s,r,o,i,!0)}function PI(t){return t?um(t)||Ba in t?rt({},t):t:null}function Ir(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?SI(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Um(a),ref:e&&e.ref?n&&r?Y(r)?r.concat(jo(e)):[r,jo(e)]:jo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ir(t.ssContent),ssFallback:t.ssFallback&&Ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ne(t=" ",e=0){return U($a,null,t,e)}function bI(t,e){const n=U(Bo,null,t);return n.staticCount=e,n}function ns(t="",e=!1){return e?(V(),Du(Ds,null,t)):U(Ds,null,t)}function rn(t){return t==null||typeof t=="boolean"?U(Ds):Y(t)?U($e,null,t.slice()):typeof t=="object"?jn(t):U($a,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ir(t)}function Ou(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ou(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ba in e)?e._ctx=Ft:r===3&&Ft&&(Ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:Ft},n=32):(e=String(e),s&64?(n=16,e=[Ne(e)]):n=8);t.children=e,t.shapeFlag|=n}function SI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=zi([e.class,s.class]));else if(r==="style")e.style=Eu([e.style,s.style]);else if(ka(r)){const i=e[r],o=s[r];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function sn(t,e,n,s=null){zt(t,e,7,[n,s])}const CI=km();let kI=0;function DI(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||CI,i={uid:kI++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Om(s,r),emitsOptions:Im(s,r),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:s.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=UE.bind(null,i),t.ce&&t.ce(i),i}let et=null,Nu,Js,Nd="__VUE_INSTANCE_SETTERS__";(Js=vl()[Nd])||(Js=vl()[Nd]=[]),Js.push(t=>et=t),Nu=t=>{Js.length>1?Js.forEach(e=>e(t)):Js[0](t)};const wr=t=>{Nu(t),t.scope.on()},Ps=()=>{et&&et.scope.off(),Nu(null)};function Fm(t){return t.vnode.shapeFlag&4}let Ri=!1;function OI(t,e=!1){Ri=e;const{props:n,children:s}=t.vnode,r=Fm(t);pI(t,n,r,e),_I(t,s);const i=r?NI(t,e):void 0;return Ri=!1,i}function NI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=hm(new Proxy(t.ctx,oI));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?VI(t):null;wr(t),Vr();const i=Jn(s,t,0,[t.props,r]);if(Lr(),Ps(),Kp(i)){if(i.then(Ps,Ps),e)return i.then(o=>{xd(t,o,e)}).catch(o=>{La(o,t,0)});t.asyncDep=i}else xd(t,i,e)}else $m(t,e)}function xd(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=mm(e)),$m(t,n)}let Vd;function $m(t,e,n){const s=t.type;if(!t.render){if(!e&&Vd&&!s.render){const r=s.template||Cu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=rt(rt({isCustomElement:i,delimiters:a},o),c);s.render=Vd(r,l)}}t.render=s.render||Kt}{wr(t),Vr();try{aI(t)}finally{Lr(),Ps()}}}function xI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}}))}function VI(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return xI(t)},slots:t.slots,emit:t.emit,expose:e}}function ja(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(mm(hm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ui)return ui[n](t)},has(e,n){return n in e||n in ui}}))}function LI(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function MI(t){return ne(t)&&"__vccOpts"in t}const Mt=(t,e)=>OE(t,e,Ri);function Bm(t,e,n){const s=arguments.length;return s===2?we(e)&&!Y(e)?kl(e)?U(t,null,[e]):U(t,e):U(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&kl(n)&&(n=[n]),U(t,e,n))}const UI=Symbol.for("v-scx"),FI=()=>Sn(UI),$I="3.3.8",BI="http://www.w3.org/2000/svg",vs=typeof document<"u"?document:null,Ld=vs&&vs.createElement("template"),jI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?vs.createElementNS(BI,t):vs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>vs.createTextNode(t),createComment:t=>vs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ld.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ld.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qI=Symbol("_vtc");function HI(t,e,n){const s=t[qI];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const WI=Symbol("_vod");function KI(t,e,n){const s=t.style,r=qe(n);if(n&&!r){if(e&&!qe(e))for(const i in e)n[i]==null&&Dl(s,i,"");for(const i in n)Dl(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),WI in t&&(s.display=i)}}const Md=/\s*!important$/;function Dl(t,e,n){if(Y(n))n.forEach(s=>Dl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=zI(t,e);Md.test(n)?t.setProperty(xr(s),n.replace(Md,""),"important"):t[s]=n}}const Ud=["Webkit","Moz","ms"],Fc={};function zI(t,e){const n=Fc[e];if(n)return n;let s=gn(e);if(s!=="filter"&&s in t)return Fc[e]=s;s=Na(s);for(let r=0;r<Ud.length;r++){const i=Ud[r]+s;if(i in t)return Fc[e]=i}return e}const Fd="http://www.w3.org/1999/xlink";function GI(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Fd,e.slice(6,e.length)):t.setAttributeNS(Fd,e,n);else{const i=tE(e);n==null||i&&!Qp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function QI(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Qp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Es(t,e,n,s){t.addEventListener(e,n,s)}function YI(t,e,n,s){t.removeEventListener(e,n,s)}const $d=Symbol("_vei");function JI(t,e,n,s,r=null){const i=t[$d]||(t[$d]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=XI(e);if(s){const l=i[e]=tw(s,r);Es(t,a,l,c)}else o&&(YI(t,a,o,c),i[e]=void 0)}}const Bd=/(?:Once|Passive|Capture)$/;function XI(t){let e;if(Bd.test(t)){e={};let s;for(;s=t.match(Bd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xr(t.slice(2)),e]}let $c=0;const ZI=Promise.resolve(),ew=()=>$c||(ZI.then(()=>$c=0),$c=Date.now());function tw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;zt(nw(s,n.value),e,5,[s])};return n.value=t,n.attached=ew(),n}function nw(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const jd=/^on[a-z]/,sw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?HI(t,s,r):e==="style"?KI(t,n,s):ka(e)?_u(e)||JI(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rw(t,e,s,r))?QI(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),GI(t,e,s,r))};function rw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&jd.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||jd.test(e)&&qe(n)?!1:e in t}const sa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>Uo(e,n):e};function iw(t){t.target.composing=!0}function qd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fr=Symbol("_assign"),Wt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[fr]=sa(r);const i=s||r.props&&r.props.type==="number";Es(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Xo(a)),t[fr](a)}),n&&Es(t,"change",()=>{t.value=t.value.trim()}),e||(Es(t,"compositionstart",iw),Es(t,"compositionend",qd),Es(t,"change",qd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[fr]=sa(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Xo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Hd={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Da(e);Es(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Xo(ra(o)):ra(o));t[fr](t.multiple?r?new Set(i):i:i[0])}),t[fr]=sa(s)},mounted(t,{value:e}){Wd(t,e)},beforeUpdate(t,e,n){t[fr]=sa(n)},updated(t,{value:e}){Wd(t,e)}};function Wd(t,e){const n=t.multiple;if(!(n&&!Y(e)&&!Da(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=ra(i);if(n)Y(e)?i.selected=sE(e,o)>-1:i.selected=e.has(o);else if(xa(ra(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ra(t){return"_value"in t?t._value:t.value}const ow=["ctrl","shift","alt","meta"],aw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ow.some(n=>t[`${n}Key`]&&!e.includes(n))},qa=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=aw[e[r]];if(i&&i(n,e))return}return t(n,...s)},cw=rt({patchProp:sw},jI);let Kd;function lw(){return Kd||(Kd=vI(cw))}const uw=(...t)=>{const e=lw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=hw(s);if(!r)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function hw(t){return qe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */const jm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},dw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),s.push(n[u],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new fw;const d=i<<2|a>>4;if(s.push(d),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pw=function(t){const e=jm(t);return qm.encodeByteArray(e,!0)},ia=function(t){return pw(t).replace(/\./g,"")},Hm=function(t){try{return qm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function mw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const gw=()=>mw().__FIREBASE_DEFAULTS__,_w=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hm(t[1]);return e&&JSON.parse(e)},Ha=()=>{try{return gw()||_w()||yw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wm=t=>{var e,n;return(n=(e=Ha())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Km=t=>{const e=Wm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},zm=()=>{var t;return(t=Ha())===null||t===void 0?void 0:t.config},Gm=t=>{var e;return(e=Ha())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Qm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ia(JSON.stringify(n)),ia(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ew(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function Iw(){var t;const e=(t=Ha())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ww(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aw(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rw(){try{return typeof indexedDB=="object"}catch{return!1}}function Pw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const bw="FirebaseError";class yn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=bw,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Sw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new yn(r,a,s)}}function Sw(t,e){return t.replace(Cw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Cw=/\{\$([^}]+)}/g;function kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oa(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(zd(i)&&zd(o)){if(!oa(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function zd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Yi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function si(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ri(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dw(t,e){const n=new Ow(t,e);return n.subscribe.bind(n)}class Ow{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Nw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Bc),r.error===void 0&&(r.error=Bc),r.complete===void 0&&(r.complete=Bc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bc(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function be(t){return t&&t._delegate?t._delegate:t}class ss{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const _s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class xw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new vw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lw(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vw(t){return t===_s?void 0:t}function Lw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Mw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Uw={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Fw=oe.INFO,$w={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Bw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=$w[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xu{constructor(e){this.name=e,this._logLevel=Fw,this._logHandler=Bw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const jw=(t,e)=>e.some(n=>t instanceof n);let Gd,Qd;function qw(){return Gd||(Gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hw(){return Qd||(Qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ym=new WeakMap,Ol=new WeakMap,Jm=new WeakMap,jc=new WeakMap,Vu=new WeakMap;function Ww(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ym.set(n,t)}).catch(()=>{}),Vu.set(e,t),e}function Kw(t){if(Ol.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ol.set(t,e)}let Nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zw(t){Nl=t(Nl)}function Gw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qc(this),e,...n);return Jm.set(s,e.sort?e.sort():[e]),Xn(s)}:Hw().includes(t)?function(...e){return t.apply(qc(this),e),Xn(Ym.get(this))}:function(...e){return Xn(t.apply(qc(this),e))}}function Qw(t){return typeof t=="function"?Gw(t):(t instanceof IDBTransaction&&Kw(t),jw(t,qw())?new Proxy(t,Nl):t)}function Xn(t){if(t instanceof IDBRequest)return Ww(t);if(jc.has(t))return jc.get(t);const e=Qw(t);return e!==t&&(jc.set(t,e),Vu.set(e,t)),e}const qc=t=>Vu.get(t);function Yw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Xn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Xn(o.result),c.oldVersion,c.newVersion,Xn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Jw=["get","getKey","getAll","getAllKeys","count"],Xw=["put","add","delete","clear"],Hc=new Map;function Yd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hc.get(e))return Hc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Xw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Jw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Hc.set(e,i),i}zw(t=>({...t,get:(e,n,s)=>Yd(e,n)||t.get(e,n,s),has:(e,n)=>!!Yd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Zw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eT(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function eT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xl="@firebase/app",Jd="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Os=new xu("@firebase/app"),tT="@firebase/app-compat",nT="@firebase/analytics-compat",sT="@firebase/analytics",rT="@firebase/app-check-compat",iT="@firebase/app-check",oT="@firebase/auth",aT="@firebase/auth-compat",cT="@firebase/database",lT="@firebase/database-compat",uT="@firebase/functions",hT="@firebase/functions-compat",dT="@firebase/installations",fT="@firebase/installations-compat",pT="@firebase/messaging",mT="@firebase/messaging-compat",gT="@firebase/performance",_T="@firebase/performance-compat",yT="@firebase/remote-config",vT="@firebase/remote-config-compat",ET="@firebase/storage",IT="@firebase/storage-compat",wT="@firebase/firestore",TT="@firebase/firestore-compat",AT="firebase",RT="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Vl="[DEFAULT]",PT={[xl]:"fire-core",[tT]:"fire-core-compat",[sT]:"fire-analytics",[nT]:"fire-analytics-compat",[iT]:"fire-app-check",[rT]:"fire-app-check-compat",[oT]:"fire-auth",[aT]:"fire-auth-compat",[cT]:"fire-rtdb",[lT]:"fire-rtdb-compat",[uT]:"fire-fn",[hT]:"fire-fn-compat",[dT]:"fire-iid",[fT]:"fire-iid-compat",[pT]:"fire-fcm",[mT]:"fire-fcm-compat",[gT]:"fire-perf",[_T]:"fire-perf-compat",[yT]:"fire-rc",[vT]:"fire-rc-compat",[ET]:"fire-gcs",[IT]:"fire-gcs-compat",[wT]:"fire-fst",[TT]:"fire-fst-compat","fire-js":"fire-js",[AT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const aa=new Map,Ll=new Map;function bT(t,e){try{t.container.addComponent(e)}catch(n){Os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ns(t){const e=t.name;if(Ll.has(e))return Os.debug(`There were multiple attempts to register component ${e}.`),!1;Ll.set(e,t);for(const n of aa.values())bT(n,t);return!0}function Wa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ST={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zn=new Qi("app","Firebase",ST);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class CT{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const $s=RT;function Xm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Zn.create("bad-app-name",{appName:String(r)});if(n||(n=zm()),!n)throw Zn.create("no-options");const i=aa.get(r);if(i){if(oa(n,i.options)&&oa(s,i.config))return i;throw Zn.create("duplicate-app",{appName:r})}const o=new Mw(r);for(const c of Ll.values())o.addComponent(c);const a=new CT(n,s,o);return aa.set(r,a),a}function Lu(t=Vl){const e=aa.get(t);if(!e&&t===Vl&&zm())return Xm();if(!e)throw Zn.create("no-app",{appName:t});return e}function hn(t,e,n){var s;let r=(s=PT[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Os.warn(a.join(" "));return}Ns(new ss(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const kT="firebase-heartbeat-database",DT=1,Pi="firebase-heartbeat-store";let Wc=null;function Zm(){return Wc||(Wc=Yw(kT,DT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pi)}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),Wc}async function OT(t){try{return await(await Zm()).transaction(Pi).objectStore(Pi).get(eg(t))}catch(e){if(e instanceof yn)Os.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Os.warn(n.message)}}}async function Xd(t,e){try{const s=(await Zm()).transaction(Pi,"readwrite");await s.objectStore(Pi).put(e,eg(t)),await s.done}catch(n){if(n instanceof yn)Os.warn(n.message);else{const s=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Os.warn(s.message)}}}function eg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const NT=1024,xT=30*24*60*60*1e3;class VT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=xT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zd(),{heartbeatsToSend:s,unsentEntries:r}=LT(this._heartbeatsCache.heartbeats),i=ia(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zd(){return new Date().toISOString().substring(0,10)}function LT(t,e=NT){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ef(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ef(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class MT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rw()?Pw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ef(t){return ia(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function UT(t){Ns(new ss("platform-logger",e=>new Zw(e),"PRIVATE")),Ns(new ss("heartbeat",e=>new VT(e),"PRIVATE")),hn(xl,Jd,t),hn(xl,Jd,"esm2017"),hn("fire-js","")}UT("");function Mu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function tg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FT=tg,ng=new Qi("auth","Firebase",tg());/**
 * @license
 * Copyright 2020 Google LLC
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
 */const ca=new xu("@firebase/auth");function $T(t,...e){ca.logLevel<=oe.WARN&&ca.warn(`Auth (${$s}): ${t}`,...e)}function qo(t,...e){ca.logLevel<=oe.ERROR&&ca.error(`Auth (${$s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Qt(t,...e){throw Uu(t,...e)}function dn(t,...e){return Uu(t,...e)}function BT(t,e,n){const s=Object.assign(Object.assign({},FT()),{[e]:n});return new Qi("auth","Firebase",s).create(e,{appName:t.name})}function Uu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ng.create(t,...e)}function Q(t,e,...n){if(!t)throw Uu(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qo(e),new Error(e)}function kn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ml(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jT(){return tf()==="http:"||tf()==="https:"}function tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function qT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jT()||ww()||"connection"in navigator)?navigator.onLine:!0}function HT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ew()||Tw()}get(){return qT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Fu(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class sg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const WT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
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
 */const KT=new Ji(3e4,6e4);function Ln(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vn(t,e,n,s,r={}){return rg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Yi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),sg.fetch()(ig(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function rg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},WT),e);try{const r=new GT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Po(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Po(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Po(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Po(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw BT(t,u,l);Qt(t,u)}}catch(r){if(r instanceof yn)throw r;Qt(t,"network-request-failed",{message:String(r)})}}async function Xi(t,e,n,s,r={}){const i=await vn(t,e,n,s,r);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ig(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Fu(t.config,r):`${t.config.apiScheme}://${r}`}function zT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class GT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(dn(this.auth,"network-request-failed")),KT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Po(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=dn(t,e,s);return r.customData._tokenResponse=n,r}function nf(t){return t!==void 0&&t.enterprise!==void 0}class QT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function YT(t,e){return vn(t,"GET","/v2/recaptchaConfig",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function JT(t,e){return vn(t,"POST","/v1/accounts:delete",e)}async function XT(t,e){return vn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZT(t,e=!1){const n=be(t),s=await n.getIdToken(e),r=$u(s);Q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:di(Kc(r.auth_time)),issuedAtTime:di(Kc(r.iat)),expirationTime:di(Kc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Kc(t){return Number(t)*1e3}function $u(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Hm(n);return r?JSON.parse(r):(qo("Failed to decode base64 JWT payload"),null)}catch(r){return qo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function e0(t){const e=$u(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Tr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof yn&&t0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function t0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class n0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class og{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function la(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Tr(t,XT(n,{idToken:s}));Q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?i0(i.providerUserInfo):[],a=r0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new og(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function s0(t){const e=be(t);await la(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function r0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function i0(t){return t.map(e=>{var{providerId:n}=e,s=Mu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function o0(t,e){const n=await rg(t,{},async()=>{const s=Yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=ig(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function a0(t,e){return vn(t,"POST","/v2/accounts:revokeToken",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):e0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await o0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new bi;return s&&(Q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(Q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function $n(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Mu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new og(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZT(this,e)}reload(){return s0(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await la(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Tr(this,JT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:k,isAnonymous:de,providerData:me,stsTokenManager:We}=n;Q(j&&We,e,"internal-error");const it=bi.fromJSON(this.name,We);Q(typeof j=="string",e,"internal-error"),$n(h,e.name),$n(d,e.name),Q(typeof k=="boolean",e,"internal-error"),Q(typeof de=="boolean",e,"internal-error"),$n(m,e.name),$n(y,e.name),$n(A,e.name),$n(I,e.name),$n(S,e.name),$n(O,e.name);const Lt=new bs({uid:j,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:de,photoURL:y,phoneNumber:m,tenantId:A,stsTokenManager:it,createdAt:S,lastLoginAt:O});return me&&Array.isArray(me)&&(Lt.providerData=me.map(It=>Object.assign({},It))),I&&(Lt._redirectEventId=I),Lt}static async _fromIdTokenResponse(e,n,s=!1){const r=new bi;r.updateFromServerResponse(n);const i=new bs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await la(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const sf=new Map;function Rn(t){kn(t instanceof Function,"Expected a class definition");let e=sf.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ag{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ag.type="NONE";const rf=ag;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Ho(t,e,n){return`firebase:${t}:${e}:${n}`}class pr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ho(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ho("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pr(Rn(rf),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Rn(rf);const o=Ho(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=bs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new pr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new pr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function of(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ug(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dg(e))return"Blackberry";if(fg(e))return"Webos";if(Bu(e))return"Safari";if((e.includes("chrome/")||lg(e))&&!e.includes("edge/"))return"Chrome";if(hg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cg(t=mt()){return/firefox\//i.test(t)}function Bu(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lg(t=mt()){return/crios\//i.test(t)}function ug(t=mt()){return/iemobile/i.test(t)}function hg(t=mt()){return/android/i.test(t)}function dg(t=mt()){return/blackberry/i.test(t)}function fg(t=mt()){return/webos/i.test(t)}function Ka(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c0(t=mt()){var e;return Ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function l0(){return Aw()&&document.documentMode===10}function pg(t=mt()){return Ka(t)||hg(t)||fg(t)||dg(t)||/windows phone/i.test(t)||ug(t)}function u0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function mg(t,e=[]){let n;switch(t){case"Browser":n=of(mt());break;case"Worker":n=`${of(mt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class h0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function d0(t,e={}){return vn(t,"GET","/v2/passwordPolicy",Ln(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const f0=6;class p0{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:f0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class m0{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new af(this),this.idTokenSubscription=new af(this),this.beforeStateQueue=new h0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await pr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await la(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?be(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await d0(this),n=new p0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await a0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await pr.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$T(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cs(t){return be(t)}class af{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dw(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function g0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gg(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=dn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",g0().appendChild(s)})}function _0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const y0="https://www.google.com/recaptcha/enterprise.js?render=",v0="recaptcha-enterprise",E0="NO_RECAPTCHA";class I0{constructor(e){this.type=v0,this.auth=cs(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{YT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new QT(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;nf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(E0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&nf(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}gg(y0+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function cf(t,e,n,s=!1){const r=new I0(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ua(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await cf(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cf(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function w0(t,e){const n=Wa(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(oa(i,e??{}))return r;Qt(r,"already-initialized")}return n.initialize({options:e})}function T0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function A0(t,e,n){const s=cs(t);Q(s._canInitEmulator,s,"emulator-config-failed"),Q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=_g(e),{host:o,port:a}=R0(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||P0()}function _g(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function R0(t){const e=_g(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:lf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:lf(o)}}}function lf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function P0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ju{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function b0(t,e){return vn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function S0(t,e){return Xi(t,"POST","/v1/accounts:signInWithPassword",Ln(t,e))}async function C0(t,e){return vn(t,"POST","/v1/accounts:sendOobCode",Ln(t,e))}async function k0(t,e){return C0(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function D0(t,e){return Xi(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}async function O0(t,e){return Xi(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Si extends ju{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Si(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Si(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ua(e,n,"signInWithPassword",S0);case"emailLink":return D0(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ua(e,s,"signUpPassword",b0);case"emailLink":return O0(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function mr(t,e){return Xi(t,"POST","/v1/accounts:signInWithIdp",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const N0="http://localhost";class xs extends ju{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Mu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new xs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,mr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mr(e,n)}buildRequest(){const e={requestUri:N0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function x0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V0(t){const e=si(ri(t)).link,n=e?si(ri(e)).deep_link_id:null,s=si(ri(t)).deep_link_id;return(s?si(ri(s)).link:null)||s||n||e||t}class qu{constructor(e){var n,s,r,i,o,a;const c=si(ri(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=x0((r=c.mode)!==null&&r!==void 0?r:null);Q(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=V0(e);try{return new qu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Mr{constructor(){this.providerId=Mr.PROVIDER_ID}static credential(e,n){return Si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=qu.parseLink(n);return Q(s,"argument-error"),Si._fromEmailAndCode(e,s.code,s.tenantId)}}Mr.PROVIDER_ID="password";Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class yg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Zi extends yg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Hn extends Zi{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Wn extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xs._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Wn.credential(n,s)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Kn extends Zi{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class zn extends Zi{constructor(){super("twitter.com")}static credential(e,n){return xs._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return zn.credential(n,s)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function L0(t,e){return Xi(t,"POST","/v1/accounts:signUp",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await bs._fromIdTokenResponse(e,s,r),o=uf(s);return new Vs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=uf(s);return new Vs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function uf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ha extends yn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ha.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ha(e,n,s,r)}}function vg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ha._fromErrorAndOperation(t,i,e,s):i})}async function M0(t,e,n=!1){const s=await Tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function U0(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Tr(t,vg(s,r,e,t),n);Q(i.idToken,s,"internal-error");const o=$u(i.idToken);Q(o,s,"internal-error");const{sub:a}=o;return Q(t.uid===a,s,"user-mismatch"),Vs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Eg(t,e,n=!1){const s="signIn",r=await vg(t,s,e),i=await Vs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function F0(t,e){return Eg(cs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function $0(t,e,n){var s;Q(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),Q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ig(t){const e=cs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function B0(t,e,n){const s=cs(t),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&$0(s,r,n),await ua(s,r,"getOobCode",k0)}async function j0(t,e,n){const s=cs(t),o=await ua(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",L0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ig(t),c}),a=await Vs._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function q0(t,e,n){return F0(be(t),Mr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ig(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function H0(t,e){return vn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function W0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=be(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Tr(s,H0(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function K0(t,e,n,s){return be(t).onIdTokenChanged(e,n,s)}function z0(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function Et(t,e,n,s){return be(t).onAuthStateChanged(e,n,s)}function G0(t){return be(t).signOut()}const da="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(da,"1"),this.storage.removeItem(da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Q0(){const t=mt();return Bu(t)||Ka(t)}const Y0=1e3,J0=10;class Tg extends wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Q0()&&u0(),this.fallbackToPolling=pg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);l0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,J0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tg.type="LOCAL";const X0=Tg;/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ag extends wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ag.type="SESSION";const Rg=Ag;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Z0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new za(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Z0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}za.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Hu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class eA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Hu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function fn(){return window}function tA(t){fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Pg(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function nA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rA(){return Pg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const bg="firebaseLocalStorageDb",iA=1,fa="firebaseLocalStorage",Sg="fbase_key";class eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ga(t,e){return t.transaction([fa],e?"readwrite":"readonly").objectStore(fa)}function oA(){const t=indexedDB.deleteDatabase(bg);return new eo(t).toPromise()}function Ul(){const t=indexedDB.open(bg,iA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(fa,{keyPath:Sg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(fa)?e(s):(s.close(),await oA(),e(await Ul()))})})}async function hf(t,e,n){const s=Ga(t,!0).put({[Sg]:e,value:n});return new eo(s).toPromise()}async function aA(t,e){const n=Ga(t,!1).get(e),s=await new eo(n).toPromise();return s===void 0?null:s.value}function df(t,e){const n=Ga(t,!0).delete(e);return new eo(n).toPromise()}const cA=800,lA=3;class Cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>lA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=za._getInstance(rA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nA(),!this.activeServiceWorker)return;this.sender=new eA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ul();return await hf(e,da,"1"),await df(e,da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>hf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>aA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>df(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ga(r,!1).getAll();return new eo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cg.type="LOCAL";const uA=Cg;new Ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function hA(t,e){return e?Rn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Wu extends ju{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dA(t){return Eg(t.auth,new Wu(t),t.bypassAuthState)}function fA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),U0(n,new Wu(t),t.bypassAuthState)}async function pA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),M0(n,new Wu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class kg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dA;case"linkViaPopup":case"linkViaRedirect":return pA;case"reauthViaPopup":case"reauthViaRedirect":return fA;default:Qt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const mA=new Ji(2e3,1e4);class ir extends kg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ir.currentPopupAction&&ir.currentPopupAction.cancel(),ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mA.get())};e()}}ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const gA="pendingRedirect",Wo=new Map;class _A extends kg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const s=await yA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yA(t,e){const n=IA(e),s=EA(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function vA(t,e){Wo.set(t._key(),e)}function EA(t){return Rn(t._redirectPersistence)}function IA(t){return Ho(gA,t.config.apiKey,t.name)}async function wA(t,e,n=!1){const s=cs(t),r=hA(s,e),o=await new _A(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const TA=10*60*1e3;class AA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Dg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ff(e))}saveEventToCache(e){this.cachedEventUids.add(ff(e)),this.lastProcessedEventTime=Date.now()}}function ff(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function PA(t,e={}){return vn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const bA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SA=/^https?/;async function CA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PA(t);for(const n of e)try{if(kA(n))return}catch{}Qt(t,"unauthorized-domain")}function kA(t){const e=Ml(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!SA.test(n))return!1;if(bA.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const DA=new Ji(3e4,6e4);function pf(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OA(t){return new Promise((e,n)=>{var s,r,i;function o(){pf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pf(),n(dn(t,"network-request-failed"))},timeout:DA.get()})}if(!((r=(s=fn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=fn().gapi)===null||i===void 0)&&i.load)o();else{const a=_0("iframefcb");return fn()[a]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},gg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ko=null,e})}let Ko=null;function NA(t){return Ko=Ko||OA(t),Ko}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const xA=new Ji(5e3,15e3),VA="__/auth/iframe",LA="emulator/auth/iframe",MA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FA(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fu(e,LA):`https://${t.config.authDomain}/${VA}`,s={apiKey:e.apiKey,appName:t.name,v:$s},r=UA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Yi(s).slice(1)}`}async function $A(t){const e=await NA(t),n=fn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:FA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MA,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),a=fn().setTimeout(()=>{i(o)},xA.get());function c(){fn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const BA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jA=500,qA=600,HA="_blank",WA="http://localhost";class mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KA(t,e,n,s=jA,r=qA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},BA),{width:s.toString(),height:r.toString(),top:i,left:o}),l=mt().toLowerCase();n&&(a=lg(l)?HA:n),cg(l)&&(e=e||WA,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(c0(l)&&a!=="_self")return zA(e||"",a),new mf(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new mf(h)}function zA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const GA="__/auth/handler",QA="emulator/auth/handler",YA=encodeURIComponent("fac");async function gf(t,e,n,s,r,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:$s,eventId:r};if(e instanceof yg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Zi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${YA}=${encodeURIComponent(c)}`:"";return`${JA(t)}?${Yi(a).slice(1)}${l}`}function JA({config:t}){return t.emulator?Fu(t,QA):`https://${t.authDomain}/${GA}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const zc="webStorageSupport";class XA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rg,this._completeRedirectFn=wA,this._overrideRedirectResult=vA}async _openPopup(e,n,s,r){var i;kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await gf(e,n,s,Ml(),r);return KA(e,o,Hu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await gf(e,n,s,Ml(),r);return tA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(kn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $A(e),s=new AA(e);return n.register("authEvent",r=>(Q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zc,{type:zc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[zc];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pg()||Bu()||Ka()}}const ZA=XA;var _f="@firebase/auth",yf="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class eR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function tR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nR(t){Ns(new ss("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mg(t)},l=new m0(s,r,i,c);return T0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ns(new ss("auth-internal",e=>{const n=cs(e.getProvider("auth").getImmediate());return(s=>new eR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(_f,yf,tR(t)),hn(_f,yf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const sR=5*60,rR=Gm("authIdTokenMaxAge")||sR;let vf=null;const iR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>rR)return;const r=n==null?void 0:n.token;vf!==r&&(vf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ve(t=Lu()){const e=Wa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=w0(t,{popupRedirectResolver:ZA,persistence:[uA,X0,Rg]}),s=Gm("authTokenSyncURL");if(s){const i=iR(s);z0(n,i,()=>i(n.currentUser)),K0(n,o=>i(o))}const r=Wm("auth");return r&&A0(n,`http://${r}`),n}nR("Browser");const ae=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},oR={data(){return{user:!1}}},aR={id:"container"};function cR(t,e,n,s,r,i){const o=G("router-view");return V(),L("div",aR,[U(o)])}const lR=ae(oR,[["render",cR]]);function uR(){return Og().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Og(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const hR=typeof Proxy=="function",dR="devtools-plugin:setup",fR="plugin:settings:set";let Xs,Fl;function pR(){var t;return Xs!==void 0||(typeof window<"u"&&window.performance?(Xs=!0,Fl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Xs=!0,Fl=global.perf_hooks.performance):Xs=!1),Xs}function mR(){return pR()?Fl.now():Date.now()}class gR{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return mR()}},n&&n.on(fR,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function _R(t,e){const n=t,s=Og(),r=uR(),i=hR&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(dR,t,e);else{const o=i?new gR(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const tr=typeof window<"u";function yR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function Gc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Yt(r)?r.map(t):t(r)}return n}const fi=()=>{},Yt=Array.isArray,vR=/\/$/,ER=t=>t.replace(vR,"");function Qc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=AR(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function IR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ef(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wR(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ar(e.matched[s],n.matched[r])&&Ng(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ar(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ng(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TR(t[n],e[n]))return!1;return!0}function TR(t,e){return Yt(t)?If(t,e):Yt(e)?If(e,t):t===e}function If(t,e){return Yt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function AR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Ci;(function(t){t.pop="pop",t.push="push"})(Ci||(Ci={}));var pi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pi||(pi={}));function RR(t){if(!t)if(tr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ER(t)}const PR=/^[^#]+#/;function bR(t,e){return t.replace(PR,"#")+e}function SR(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Qa=()=>({left:window.pageXOffset,top:window.pageYOffset});function CR(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=SR(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wf(t,e){return(history.state?history.state.position-e:-1)+t}const $l=new Map;function kR(t,e){$l.set(t,e)}function DR(t){const e=$l.get(t);return $l.delete(t),e}let OR=()=>location.protocol+"//"+location.host;function xg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ef(c,"")}return Ef(n,t)+s+r}function NR(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const m=xg(t,location),y=n.value,A=e.value;let I=0;if(d){if(n.value=m,e.value=d,o&&o===y){o=null;return}I=A?d.position-A.position:0}else s(m);r.forEach(S=>{S(n.value,y,{delta:I,type:Ci.pop,direction:I?I>0?pi.forward:pi.back:pi.unknown})})};function c(){o=n.value}function l(d){r.push(d);const m=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(ge({},d.state,{scroll:Qa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Tf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Qa():null}}function xR(t){const{history:e,location:n}=window,s={value:xg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:OR()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=ge({},e.state,Tf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ge({},r.value,e.state,{forward:c,scroll:Qa()});i(u.current,u,!0);const h=ge({},Tf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function VR(t){t=RR(t);const e=xR(t),n=NR(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:bR.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function LR(t){return typeof t=="string"||t&&typeof t=="object"}function Vg(t){return typeof t=="string"||typeof t=="symbol"}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lg=Symbol("");var Af;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Af||(Af={}));function Rr(t,e){return ge(new Error,{type:t,[Lg]:!0},e)}function wn(t,e){return t instanceof Error&&Lg in t&&(e==null||!!(t.type&e))}const Rf="[^/]+?",MR={sensitive:!1,strict:!1,start:!0,end:!0},UR=/[.+*?^${}()[\]/\\]/g;function FR(t,e){const n=ge({},MR,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(UR,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:A,optional:I,regexp:S}=d;i.push({name:y,repeatable:A,optional:I});const O=S||Rf;if(O!==Rf){m+=10;try{new RegExp(`(${O})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${y}" (${O}): `+k.message)}}let j=A?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(j=I&&l.length<2?`(?:/${j})`:"/"+j),I&&(j+="?"),r+=j,m+=20,I&&(m+=-8),A&&(m+=-20),O===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",y=i[d-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:A,optional:I}=m,S=y in l?l[y]:"";if(Yt(S)&&!A)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const O=Yt(S)?S.join("/"):S;if(!O)if(I)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function $R(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function BR(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=$R(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Pf(s))return 1;if(Pf(r))return-1}return r.length-s.length}function Pf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jR={type:0,value:""},qR=/[a-zA-Z0-9_]/;function HR(t){if(!t)return[[]];if(t==="/")return[[jR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:qR.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function WR(t,e,n){const s=FR(HR(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function KR(t,e){const n=[],s=new Map;e=Cf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const m=!d,y=zR(u);y.aliasOf=d&&d.record;const A=Cf(e,u),I=[y];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of j)I.push(ge({},y,{components:d?d.record.components:y.components,path:k,aliasOf:d?d.record:y}))}let S,O;for(const j of I){const{path:k}=j;if(h&&k[0]!=="/"){const de=h.record.path,me=de[de.length-1]==="/"?"":"/";j.path=h.record.path+(k&&me+k)}if(S=WR(j,h,A),d?d.alias.push(S):(O=O||S,O!==S&&O.alias.push(S),m&&u.name&&!Sf(S)&&o(u.name)),y.children){const de=y.children;for(let me=0;me<de.length;me++)i(de[me],S,d&&d.children[me])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return O?()=>{o(O)}:fi}function o(u){if(Vg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&BR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Mg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Sf(u)&&s.set(u.record.name,u)}function l(u,h){let d,m={},y,A;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Rr(1,{location:u});A=d.record.name,m=ge(bf(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&bf(u.params,d.keys.map(O=>O.name))),y=d.stringify(m)}else if("path"in u)y=u.path,d=n.find(O=>O.re.test(y)),d&&(m=d.parse(y),A=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw Rr(1,{location:u,currentLocation:h});A=d.record.name,m=ge({},h.params,u.params),y=d.stringify(m)}const I=[];let S=d;for(;S;)I.unshift(S.record),S=S.parent;return{name:A,path:y,params:m,matched:I,meta:QR(I)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function bf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function zR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:GR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function GR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Sf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function QR(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Cf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Mg(t,e){return e.children.some(n=>n===t||Mg(t,n))}const Ug=/#/g,YR=/&/g,JR=/\//g,XR=/=/g,ZR=/\?/g,Fg=/\+/g,eP=/%5B/g,tP=/%5D/g,$g=/%5E/g,nP=/%60/g,Bg=/%7B/g,sP=/%7C/g,jg=/%7D/g,rP=/%20/g;function Ku(t){return encodeURI(""+t).replace(sP,"|").replace(eP,"[").replace(tP,"]")}function iP(t){return Ku(t).replace(Bg,"{").replace(jg,"}").replace($g,"^")}function Bl(t){return Ku(t).replace(Fg,"%2B").replace(rP,"+").replace(Ug,"%23").replace(YR,"%26").replace(nP,"`").replace(Bg,"{").replace(jg,"}").replace($g,"^")}function oP(t){return Bl(t).replace(XR,"%3D")}function aP(t){return Ku(t).replace(Ug,"%23").replace(ZR,"%3F")}function cP(t){return t==null?"":aP(t).replace(JR,"%2F")}function pa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function lP(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Fg," "),o=i.indexOf("="),a=pa(o<0?i:i.slice(0,o)),c=o<0?null:pa(i.slice(o+1));if(a in e){let l=e[a];Yt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function kf(t){let e="";for(let n in t){const s=t[n];if(n=oP(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(s)?s.map(i=>i&&Bl(i)):[s&&Bl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function uP(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Yt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const hP=Symbol(""),Df=Symbol(""),zu=Symbol(""),qg=Symbol(""),jl=Symbol("");function Qr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Rr(4,{from:n,to:e})):h instanceof Error?a(h):LR(h)?a(Rr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Yc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(dP(a)){const l=(a.__vccOpts||a)[e];l&&r.push(qn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=yR(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&qn(d,n,s,i,o)()}))}}return r}function dP(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Of(t){const e=Sn(zu),n=Sn(qg),s=Mt(()=>e.resolve(ur(t.to))),r=Mt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ar.bind(null,u));if(d>-1)return d;const m=Nf(c[l-2]);return l>1&&Nf(u)===m&&h[h.length-1].path!==m?h.findIndex(Ar.bind(null,c[l-2])):d}),i=Mt(()=>r.value>-1&&mP(n.params,s.value.params)),o=Mt(()=>r.value>-1&&r.value===n.matched.length-1&&Ng(n.params,s.value.params));function a(c={}){return pP(c)?e[ur(t.replace)?"replace":"push"](ur(t.to)).catch(fi):Promise.resolve()}return{route:s,href:Mt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const fP=Rm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Of,setup(t,{slots:e}){const n=Gi(Of(t)),{options:s}=Sn(zu),r=Mt(()=>({[xf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[xf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Bm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Hg=fP;function pP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function mP(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Yt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Nf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xf=(t,e,n)=>t??e??n,gP=Rm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Sn(jl),r=Mt(()=>t.route||s.value),i=Sn(Df,0),o=Mt(()=>{let l=ur(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Mt(()=>r.value.matched[o.value]);$o(Df,Mt(()=>o.value+1)),$o(hP,a),$o(jl,r);const c=bE();return dr(()=>[c.value,a.value,t.name],([l,u,h],[d,m,y])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Ar(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Vf(n.default,{Component:d,route:l});const m=h.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,I=Bm(d,ge({},y,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Vf(n.default,{Component:I,route:l})||I}}});function Vf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _P=gP;function yP(t){const e=KR(t.routes,t),n=t.parseQuery||lP,s=t.stringifyQuery||kf,r=t.history,i=Qr(),o=Qr(),a=Qr(),c=SE(Bn);let l=Bn;tr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Gc.bind(null,E=>""+E),h=Gc.bind(null,cP),d=Gc.bind(null,pa);function m(E,$){let N,H;return Vg(E)?(N=e.getRecordMatcher(E),H=$):H=E,e.addRoute(H,N)}function y(E){const $=e.getRecordMatcher(E);$&&e.removeRoute($)}function A(){return e.getRoutes().map(E=>E.record)}function I(E){return!!e.getRecordMatcher(E)}function S(E,$){if($=ge({},$||c.value),typeof E=="string"){const _=Qc(n,E,$.path),v=e.resolve({path:_.path},$),T=r.createHref(_.fullPath);return ge(_,v,{params:d(v.params),hash:pa(_.hash),redirectedFrom:void 0,href:T})}let N;if("path"in E)N=ge({},E,{path:Qc(n,E.path,$.path).path});else{const _=ge({},E.params);for(const v in _)_[v]==null&&delete _[v];N=ge({},E,{params:h(_)}),$.params=h($.params)}const H=e.resolve(N,$),pe=E.hash||"";H.params=u(d(H.params));const p=IR(s,ge({},E,{hash:iP(pe),path:H.path})),g=r.createHref(p);return ge({fullPath:p,hash:pe,query:s===kf?uP(E.query):E.query||{}},H,{redirectedFrom:void 0,href:g})}function O(E){return typeof E=="string"?Qc(n,E,c.value.path):ge({},E)}function j(E,$){if(l!==E)return Rr(8,{from:$,to:E})}function k(E){return We(E)}function de(E){return k(ge(O(E),{replace:!0}))}function me(E){const $=E.matched[E.matched.length-1];if($&&$.redirect){const{redirect:N}=$;let H=typeof N=="function"?N(E):N;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=O(H):{path:H},H.params={}),ge({query:E.query,hash:E.hash,params:"path"in H?{}:E.params},H)}}function We(E,$){const N=l=S(E),H=c.value,pe=E.state,p=E.force,g=E.replace===!0,_=me(N);if(_)return We(ge(O(_),{state:typeof _=="object"?ge({},pe,_.state):pe,force:p,replace:g}),$||N);const v=N;v.redirectedFrom=$;let T;return!p&&wR(s,H,N)&&(T=Rr(16,{to:v,from:H}),tn(H,H,!0,!1)),(T?Promise.resolve(T):It(v,H)).catch(R=>wn(R)?wn(R,2)?R:Un(R):fe(R,v,H)).then(R=>{if(R){if(wn(R,2))return We(ge({replace:g},O(R.to),{state:typeof R.to=="object"?ge({},pe,R.to.state):pe,force:p}),$||v)}else R=ps(v,H,!0,g,pe);return Mn(v,H,R),R})}function it(E,$){const N=j(E,$);return N?Promise.reject(N):Promise.resolve()}function Lt(E){const $=Qs.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(E):E()}function It(E,$){let N;const[H,pe,p]=vP(E,$);N=Yc(H.reverse(),"beforeRouteLeave",E,$);for(const _ of H)_.leaveGuards.forEach(v=>{N.push(qn(v,E,$))});const g=it.bind(null,E,$);return N.push(g),ot(N).then(()=>{N=[];for(const _ of i.list())N.push(qn(_,E,$));return N.push(g),ot(N)}).then(()=>{N=Yc(pe,"beforeRouteUpdate",E,$);for(const _ of pe)_.updateGuards.forEach(v=>{N.push(qn(v,E,$))});return N.push(g),ot(N)}).then(()=>{N=[];for(const _ of p)if(_.beforeEnter)if(Yt(_.beforeEnter))for(const v of _.beforeEnter)N.push(qn(v,E,$));else N.push(qn(_.beforeEnter,E,$));return N.push(g),ot(N)}).then(()=>(E.matched.forEach(_=>_.enterCallbacks={}),N=Yc(p,"beforeRouteEnter",E,$),N.push(g),ot(N))).then(()=>{N=[];for(const _ of o.list())N.push(qn(_,E,$));return N.push(g),ot(N)}).catch(_=>wn(_,8)?_:Promise.reject(_))}function Mn(E,$,N){a.list().forEach(H=>Lt(()=>H(E,$,N)))}function ps(E,$,N,H,pe){const p=j(E,$);if(p)return p;const g=$===Bn,_=tr?history.state:{};N&&(H||g?r.replace(E.fullPath,ge({scroll:g&&_&&_.scroll},pe)):r.push(E.fullPath,pe)),c.value=E,tn(E,$,N,g),Un()}let en;function Kr(){en||(en=r.listen((E,$,N)=>{if(!vo.listening)return;const H=S(E),pe=me(H);if(pe){We(ge(pe,{replace:!0}),H).catch(fi);return}l=H;const p=c.value;tr&&kR(wf(p.fullPath,N.delta),Qa()),It(H,p).catch(g=>wn(g,12)?g:wn(g,2)?(We(g.to,H).then(_=>{wn(_,20)&&!N.delta&&N.type===Ci.pop&&r.go(-1,!1)}).catch(fi),Promise.reject()):(N.delta&&r.go(-N.delta,!1),fe(g,H,p))).then(g=>{g=g||ps(H,p,!1),g&&(N.delta&&!wn(g,8)?r.go(-N.delta,!1):N.type===Ci.pop&&wn(g,20)&&r.go(-1,!1)),Mn(H,p,g)}).catch(fi)}))}let zs=Qr(),Ke=Qr(),Ee;function fe(E,$,N){Un(E);const H=Ke.list();return H.length?H.forEach(pe=>pe(E,$,N)):console.error(E),Promise.reject(E)}function In(){return Ee&&c.value!==Bn?Promise.resolve():new Promise((E,$)=>{zs.add([E,$])})}function Un(E){return Ee||(Ee=!E,Kr(),zs.list().forEach(([$,N])=>E?N(E):$()),zs.reset()),E}function tn(E,$,N,H){const{scrollBehavior:pe}=t;if(!tr||!pe)return Promise.resolve();const p=!N&&DR(wf(E.fullPath,0))||(H||!N)&&history.state&&history.state.scroll||null;return _m().then(()=>pe(E,$,p)).then(g=>g&&CR(g)).catch(g=>fe(g,E,$))}const Rt=E=>r.go(E);let Gs;const Qs=new Set,vo={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:I,getRoutes:A,resolve:S,options:t,push:k,replace:de,go:Rt,back:()=>Rt(-1),forward:()=>Rt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ke.add,isReady:In,install(E){const $=this;E.component("RouterLink",Hg),E.component("RouterView",_P),E.config.globalProperties.$router=$,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ur(c)}),tr&&!Gs&&c.value===Bn&&(Gs=!0,k(r.location).catch(pe=>{}));const N={};for(const pe in Bn)Object.defineProperty(N,pe,{get:()=>c.value[pe],enumerable:!0});E.provide(zu,$),E.provide(qg,cm(N)),E.provide(jl,c);const H=E.unmount;Qs.add(E),E.unmount=function(){Qs.delete(E),Qs.size<1&&(l=Bn,en&&en(),en=null,c.value=Bn,Gs=!1,Ee=!1),H()}}};function ot(E){return E.reduce(($,N)=>$.then(()=>Lt(N)),Promise.resolve())}return vo}function vP(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ar(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ar(l,c))||r.push(c))}return[n,s,r]}var EP="firebase",IP="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */hn(EP,IP,"app");/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Wg="firebasestorage.googleapis.com",Kg="storageBucket",wP=2*60*1e3,TP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class De extends yn{constructor(e,n,s=0){super(Jc(e),`Firebase Storage: ${n} (${Jc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function Jc(t){return"storage/"+t}function Gu(){const t="An unknown error occurred, please check the error payload for server response.";return new De(Ce.UNKNOWN,t)}function AP(t){return new De(Ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function RP(t){return new De(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function PP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(Ce.UNAUTHENTICATED,t)}function bP(){return new De(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function SP(t){return new De(Ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function CP(){return new De(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kP(){return new De(Ce.CANCELED,"User canceled the upload/download.")}function DP(t){return new De(Ce.INVALID_URL,"Invalid URL '"+t+"'.")}function OP(t){return new De(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function NP(){return new De(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Kg+"' property when initializing the app?")}function xP(){return new De(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function VP(){return new De(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function LP(t){return new De(Ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ql(t){return new De(Ce.INVALID_ARGUMENT,t)}function zg(){return new De(Ce.APP_DELETED,"The Firebase app was deleted.")}function MP(t){return new De(Ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function mi(t,e){return new De(Ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Yr(t){throw new De(Ce.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ot.makeFromUrl(e,n)}catch{return new Ot(e,"")}if(s.path==="")return s;throw OP(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),y={bucket:1,path:3},A=n===Wg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",S=new RegExp(`^https?://${A}/${r}/${I}`,"i"),j=[{regex:a,indices:c,postModify:i},{regex:m,indices:y,postModify:l},{regex:S,indices:{bucket:1,path:2},postModify:l}];for(let k=0;k<j.length;k++){const de=j[k],me=de.regex.exec(e);if(me){const We=me[de.indices.bucket];let it=me[de.indices.path];it||(it=""),s=new Ot(We,it),de.postModify(s);break}}if(s==null)throw DP(e);return s}}class UP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function FP(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...I){l||(l=!0,e.apply(null,I))}function h(I){r=setTimeout(()=>{r=null,t(m,c())},I)}function d(){i&&clearTimeout(i)}function m(I,...S){if(l){d();return}if(I){d(),u.call(null,I,...S);return}if(c()||o){d(),u.call(null,I,...S);return}s<64&&(s*=2);let j;a===1?(a=2,j=0):j=(s+Math.random())*1e3,h(j)}let y=!1;function A(I){y||(y=!0,d(),!l&&(r!==null?(I||(a=2),clearTimeout(r),h(0)):I||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function $P(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function BP(t){return t!==void 0}function jP(t){return typeof t=="object"&&!Array.isArray(t)}function Qu(t){return typeof t=="string"||t instanceof String}function Lf(t){return Yu()&&t instanceof Blob}function Yu(){return typeof Blob<"u"&&!Iw()}function Mf(t,e,n,s){if(s<e)throw ql(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ql(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ju(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Gg(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Ss;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ss||(Ss={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function qP(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class HP{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new bo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ss.NO_ERROR,c=i.getStatus();if(!a||qP(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Ss.ABORT;s(!1,new bo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new bo(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());BP(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Gu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?zg():kP();o(c)}else{const c=CP();o(c)}};this.canceled_?n(!1,new bo(!1,null,!0)):this.backoffId_=FP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$P(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function WP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function QP(t,e,n,s,r,i,o=!0){const a=Gg(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return zP(l,e),WP(l,n),KP(l,i),GP(l,s),new HP(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function YP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function JP(...t){const e=YP();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Yu())return new Blob(t);throw new De(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function XP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ZP(t){if(typeof atob>"u")throw LP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xc{constructor(e,n){this.data=e,this.contentType=n||null}}function eb(t,e){switch(t){case cn.RAW:return new Xc(Qg(e));case cn.BASE64:case cn.BASE64URL:return new Xc(Yg(t,e));case cn.DATA_URL:return new Xc(nb(e),sb(e))}throw Gu()}function Qg(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function tb(t){let e;try{e=decodeURIComponent(t)}catch{throw mi(cn.DATA_URL,"Malformed data URL.")}return Qg(e)}function Yg(t,e){switch(t){case cn.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw mi(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw mi(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZP(e)}catch(r){throw r.message.includes("polyfill")?r:mi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Jg{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw mi(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=rb(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function nb(t){const e=new Jg(t);return e.base64?Yg(cn.BASE64,e.rest):tb(e.rest)}function sb(t){return new Jg(t).contentType}function rb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Gn{constructor(e,n){let s=0,r="";Lf(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Lf(this.data_)){const s=this.data_,r=XP(s,e,n);return r===null?null:new Gn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Gn(s,!0)}}static getBlob(...e){if(Yu()){const n=e.map(s=>s instanceof Gn?s.data_:s);return new Gn(JP.apply(null,n))}else{const n=e.map(o=>Qu(o)?eb(cn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Gn(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Xg(t){let e;try{e=JSON.parse(t)}catch{return null}return jP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ib(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ob(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Zg(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ab(t,e){return e}class wt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||ab}}let So=null;function cb(t){return!Qu(t)||t.length<2?t:Zg(t)}function e_(){if(So)return So;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(i,o){return cb(o)}const n=new wt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new wt("size");return r.xform=s,t.push(r),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),So=t,So}function lb(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Ot(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function ub(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return lb(s,t),s}function t_(t,e,n){const s=Xg(e);return s===null?null:ub(t,s,n)}function hb(t,e,n,s){const r=Xg(e);if(r===null||!Qu(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),m=Ju(d,n,s),y=Gg({alt:"media",token:l});return m+y})[0]}function db(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class n_{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function s_(t){if(!t)throw Gu()}function fb(t,e){function n(s,r){const i=t_(t,r,e);return s_(i!==null),i}return n}function pb(t,e){function n(s,r){const i=t_(t,r,e);return s_(i!==null),hb(i,r,t.host,t._protocol)}return n}function r_(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=bP():r=PP():n.getStatus()===402?r=RP(t.bucket):n.getStatus()===403?r=SP(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function mb(t){const e=r_(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=AP(t.path)),i.serverResponse=r.serverResponse,i}return n}function gb(t,e,n){const s=e.fullServerUrl(),r=Ju(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new n_(r,i,pb(t,n),o);return a.errorHandler=mb(e),a}function _b(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yb(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=_b(null,e)),s}function vb(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let j="";for(let k=0;k<2;k++)j=j+Math.random().toString().slice(2);return j}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=yb(e,s,r),u=db(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",m=Gn.getBlob(h,s,d);if(m===null)throw xP();const y={name:l.fullPath},A=Ju(i,t.host,t._protocol),I="POST",S=t.maxUploadRetryTime,O=new n_(A,I,fb(t,n),S);return O.urlParams=y,O.headers=o,O.body=m.uploadData(),O.errorHandler=r_(e),O}class Eb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ss.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ss.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ss.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Yr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Yr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Yr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Yr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Yr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ib extends Eb{initXhr(){this.xhr_.responseType="text"}}function i_(){return new Ib}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ls{constructor(e,n){this._service=e,n instanceof Ot?this._location=n:this._location=Ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ls(e,n)}get root(){const e=new Ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zg(this._location.path)}get storage(){return this._service}get parent(){const e=ib(this._location.path);if(e===null)return null;const n=new Ot(this._location.bucket,e);return new Ls(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw MP(e)}}function wb(t,e,n){t._throwIfRoot("uploadBytes");const s=vb(t.storage,t._location,e_(),new Gn(e,!0),n);return t.storage.makeRequestWithTokens(s,i_).then(r=>({metadata:r,ref:t}))}function Tb(t){t._throwIfRoot("getDownloadURL");const e=gb(t.storage,t._location,e_());return t.storage.makeRequestWithTokens(e,i_).then(n=>{if(n===null)throw VP();return n})}function Ab(t,e){const n=ob(t._location.path,e),s=new Ot(t._location.bucket,n);return new Ls(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Rb(t){return/^[A-Za-z]+:\/\//.test(t)}function Pb(t,e){return new Ls(t,e)}function o_(t,e){if(t instanceof Xu){const n=t;if(n._bucket==null)throw NP();const s=new Ls(n,n._bucket);return e!=null?o_(s,e):s}else return e!==void 0?Ab(t,e):t}function bb(t,e){if(e&&Rb(e)){if(t instanceof Xu)return Pb(t,e);throw ql("To use ref(service, url), the first argument must be a Storage instance.")}else return o_(t,e)}function Uf(t,e){const n=e==null?void 0:e[Kg];return n==null?null:Ot.makeFromBucketSpec(n,t)}function Sb(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Qm(r,t.app.options.projectId))}class Xu{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Wg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wP,this._maxUploadRetryTime=TP,this._requests=new Set,r!=null?this._bucket=Ot.makeFromBucketSpec(r,this._host):this._bucket=Uf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ot.makeFromBucketSpec(this._url,e):this._bucket=Uf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ls(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new UP(zg());{const o=QP(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Ff="@firebase/storage",$f="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
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
 */const a_="storage";function c_(t,e,n){return t=be(t),wb(t,e,n)}function l_(t){return t=be(t),Tb(t)}function u_(t,e){return t=be(t),bb(t,e)}function Ya(t=Lu(),e){t=be(t);const s=Wa(t,a_).getImmediate({identifier:e}),r=Km("storage");return r&&Cb(s,...r),s}function Cb(t,e,n,s={}){Sb(t,e,n,s)}function kb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Xu(n,s,r,e,$s)}function Db(){Ns(new ss(a_,kb,"PUBLIC").setMultipleInstances(!0)),hn(Ff,$f,""),hn(Ff,$f,"esm2017")}Db();const Ob={apiKey:"AIzaSyAOK75O6JGOgR9UFbglIR0IArQqba0VOrQ",authDomain:"drigmo2-8f507.firebaseapp.com",projectId:"drigmo2-8f507",storageBucket:"drigmo2-8f507.appspot.com",messagingSenderId:"56142698014",appId:"1:56142698014:web:57e408a5a61e960037c00f"},Fe=Xm(Ob),Nb=Ya(Fe);var xb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Zu=Zu||{},Z=xb||self;function Ja(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function to(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Vb(t){return Object.prototype.hasOwnProperty.call(t,Zc)&&t[Zc]||(t[Zc]=++Lb)}var Zc="closure_uid_"+(1e9*Math.random()>>>0),Lb=0;function Mb(t,e,n){return t.call.apply(t.bind,arguments)}function Ub(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=Mb:dt=Ub,dt.apply(null,arguments)}function Co(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function ls(){this.s=this.s,this.o=this.o}var Fb=0;ls.prototype.s=!1;ls.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Fb!=0)&&Vb(this)};ls.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const h_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function eh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Bf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ja(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var $b=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",()=>{},e),Z.removeEventListener("test",()=>{},e)}catch{}return t}();function ki(t){return/^[\s\xa0]*$/.test(t)}function Xa(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return Xa().indexOf(t)!=-1}function th(t){return th[" "](t),t}th[" "]=function(){};function Bb(t,e){var n=NS;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var jb=an("Opera"),Pr=an("Trident")||an("MSIE"),d_=an("Edge"),Hl=d_||Pr,f_=an("Gecko")&&!(Xa().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),qb=Xa().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function p_(){var t=Z.document;return t?t.documentMode:void 0}var Wl;e:{var el="",tl=function(){var t=Xa();if(f_)return/rv:([^\);]+)(\)|;)/.exec(t);if(d_)return/Edge\/([\d\.]+)/.exec(t);if(Pr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qb)return/WebKit\/(\S+)/.exec(t);if(jb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(tl&&(el=tl?tl[1]:""),Pr){var nl=p_();if(nl!=null&&nl>parseFloat(el)){Wl=String(nl);break e}}Wl=el}var Kl;if(Z.document&&Pr){var jf=p_();Kl=jf||parseInt(Wl,10)||void 0}else Kl=void 0;var Hb=Kl;function Di(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(f_){e:{try{th(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Wb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Di.$.h.call(this)}}Je(Di,ft);var Wb={2:"touch",3:"pen",4:"mouse"};Di.prototype.h=function(){Di.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var no="closure_listenable_"+(1e6*Math.random()|0),Kb=0;function zb(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++Kb,this.fa=this.ia=!1}function Za(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function nh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Gb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function m_(t){const e={};for(const n in t)e[n]=t[n];return e}const qf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g_(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<qf.length;i++)n=qf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ec(t){this.src=t,this.g={},this.h=0}ec.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Gl(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new zb(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function zl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=h_(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Za(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var sh="closure_lm_"+(1e6*Math.random()|0),sl={};function __(t,e,n,s,r){if(s&&s.once)return v_(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)__(t,e[i],n,s,r);return null}return n=oh(n),t&&t[no]?t.O(e,n,to(s)?!!s.capture:!!s,r):y_(t,e,n,!1,s,r)}function y_(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=to(r)?!!r.capture:!!r,a=ih(t);if(a||(t[sh]=a=new ec(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Qb(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)$b||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(I_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qb(){function t(n){return e.call(t.src,t.listener,n)}const e=Yb;return t}function v_(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)v_(t,e[i],n,s,r);return null}return n=oh(n),t&&t[no]?t.P(e,n,to(s)?!!s.capture:!!s,r):y_(t,e,n,!0,s,r)}function E_(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)E_(t,e[i],n,s,r);else s=to(s)?!!s.capture:!!s,n=oh(n),t&&t[no]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Gl(i,n,s,r),-1<n&&(Za(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ih(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gl(e,n,s,r)),(n=-1<t?e[t]:null)&&rh(n))}function rh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[no])zl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(I_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ih(e))?(zl(n,t),n.h==0&&(n.src=null,e[sh]=null)):Za(t)}}}function I_(t){return t in sl?sl[t]:sl[t]="on"+t}function Yb(t,e){if(t.fa)t=!0;else{e=new Di(e,this);var n=t.listener,s=t.la||t.src;t.ia&&rh(t),t=n.call(s,e)}return t}function ih(t){return t=t[sh],t instanceof ec?t:null}var rl="__closure_events_fn_"+(1e9*Math.random()>>>0);function oh(t){return typeof t=="function"?t:(t[rl]||(t[rl]=function(e){return t.handleEvent(e)}),t[rl])}function Ge(){ls.call(this),this.i=new ec(this),this.S=this,this.J=null}Je(Ge,ls);Ge.prototype[no]=!0;Ge.prototype.removeEventListener=function(t,e,n,s){E_(this,t,e,n,s)};function nt(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var r=e;e=new ft(s,t),g_(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ko(o,s,!0,e)&&r}if(o=e.g=t,r=ko(o,s,!0,e)&&r,r=ko(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ko(o,s,!1,e)&&r}Ge.prototype.N=function(){if(Ge.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Za(n[s]);delete t.g[e],t.h--}}this.J=null};Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ge.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ko(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&zl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ah=Z.JSON.stringify;class Jb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Xb(){var t=ch;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Zb{constructor(){this.h=this.g=null}add(e,n){const s=w_.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var w_=new Jb(()=>new eS,t=>t.reset());class eS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function tS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function nS(t){Z.setTimeout(()=>{throw t},0)}let Oi,Ni=!1,ch=new Zb,T_=()=>{const t=Z.Promise.resolve(void 0);Oi=()=>{t.then(sS)}};var sS=()=>{for(var t;t=Xb();){try{t.h.call(t.g)}catch(n){nS(n)}var e=w_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ni=!1};function tc(t,e){Ge.call(this),this.h=t||1,this.g=e||Z,this.j=dt(this.qb,this),this.l=Date.now()}Je(tc,Ge);x=tc.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(lh(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){tc.$.N.call(this),lh(this),delete this.g};function uh(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function A_(t){t.g=uh(()=>{t.g=null,t.i&&(t.i=!1,A_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rS extends ls{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:A_(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(t){ls.call(this),this.h=t,this.g={}}Je(xi,ls);var Hf=[];function R_(t,e,n,s){Array.isArray(n)||(n&&(Hf[0]=n.toString()),n=Hf);for(var r=0;r<n.length;r++){var i=__(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function P_(t){nh(t.g,function(e,n){this.g.hasOwnProperty(n)&&rh(e)},t),t.g={}}xi.prototype.N=function(){xi.$.N.call(this),P_(this)};xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function nc(){this.g=!0}nc.prototype.Ea=function(){this.g=!1};function iS(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function oS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function or(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+cS(t,n)+(s?" "+s:"")})}function aS(t,e){t.info(function(){return"TIMEOUT: "+e})}nc.prototype.info=function(){};function cS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ah(n)}catch{return e}}var Bs={},Wf=null;function sc(){return Wf=Wf||new Ge}Bs.Ta="serverreachability";function b_(t){ft.call(this,Bs.Ta,t)}Je(b_,ft);function Vi(t){const e=sc();nt(e,new b_(e))}Bs.STAT_EVENT="statevent";function S_(t,e){ft.call(this,Bs.STAT_EVENT,t),this.stat=e}Je(S_,ft);function At(t){const e=sc();nt(e,new S_(e,t))}Bs.Ua="timingevent";function C_(t,e){ft.call(this,Bs.Ua,t),this.size=e}Je(C_,ft);function so(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var rc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},k_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hh(){}hh.prototype.h=null;function Kf(t){return t.h||(t.h=t.i())}function D_(){}var ro={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dh(){ft.call(this,"d")}Je(dh,ft);function fh(){ft.call(this,"c")}Je(fh,ft);var Ql;function ic(){}Je(ic,hh);ic.prototype.g=function(){return new XMLHttpRequest};ic.prototype.i=function(){return{}};Ql=new ic;function io(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new xi(this),this.P=lS,t=Hl?125:void 0,this.V=new tc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new O_}function O_(){this.i=null,this.g="",this.h=!1}var lS=45e3,Yl={},ma={};x=io.prototype;x.setTimeout=function(t){this.P=t};function Jl(t,e,n){t.L=1,t.v=ac(Dn(e)),t.s=n,t.S=!0,N_(t,null)}function N_(t,e){t.G=Date.now(),oo(t),t.A=Dn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),B_(n.i,"t",s),t.C=0,n=t.l.J,t.h=new O_,t.g=cy(t.l,n?e:null,!t.s),0<t.O&&(t.M=new rS(dt(t.Pa,t,t.g),t.O)),R_(t.U,t.g,"readystatechange",t.nb),e=t.I?m_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Vi(),iS(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&ln(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Hl||this.g&&(this.h.h||this.g.ja()||Yf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Vi(3):Vi(2)),oc(this);var n=this.g.da();this.ca=n;t:if(x_(this)){var s=Yf(this.g);t="";var r=s.length,i=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ws(this),gi(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,oS(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ki(a)){var l=a;break t}}l=null}if(n=l)or(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xl(this,n);else{this.i=!1,this.o=3,At(12),ws(this),gi(this);break e}}this.S?(V_(this,u,o),Hl&&this.i&&u==3&&(R_(this.U,this.V,"tick",this.mb),this.V.start())):(or(this.j,this.m,o,null),Xl(this,o)),u==4&&ws(this),this.i&&!this.J&&(u==4?ry(this.l,this):(this.i=!1,oo(this)))}else kS(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),ws(this),gi(this)}}}catch{}finally{}};function x_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function V_(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=uS(t,n),r==ma){e==4&&(t.o=4,At(14),s=!1),or(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Yl){t.o=4,At(15),or(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else or(t.j,t.m,r,null),Xl(t,r);x_(t)&&r!=ma&&r!=Yl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),vh(e),e.M=!0,At(11))):(or(t.j,t.m,n,"[Invalid Chunked Response]"),ws(t),gi(t))}x.mb=function(){if(this.g){var t=ln(this.g),e=this.g.ja();this.C<e.length&&(oc(this),V_(this,t,e),this.i&&t!=4&&oo(this))}};function uS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ma:(n=Number(e.substring(n,s)),isNaN(n)?Yl:(s+=1,s+n>e.length?ma:(e=e.slice(s,s+n),t.C=s+n,e)))}x.cancel=function(){this.J=!0,ws(this)};function oo(t){t.Y=Date.now()+t.P,L_(t,t.P)}function L_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=so(dt(t.lb,t),e)}function oc(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(aS(this.j,this.A),this.L!=2&&(Vi(),At(17)),ws(this),this.o=2,gi(this)):L_(this,this.Y-t)};function gi(t){t.l.H==0||t.J||ry(t.l,t)}function ws(t){oc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,lh(t.V),P_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Xl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Zl(n.i,t))){if(!t.K&&Zl(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ya(n),uc(n);else break e;yh(n),At(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=so(dt(n.ib,n),6e3));if(1>=H_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ts(n,11)}else if((t.K||n.g==t)&&ya(n),!ki(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ph(i,i.h),i.h=null))}if(s.F){const A=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.Da=A,Ae(s.I,s.F,A))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=ay(s,s.J?s.pa:null,s.Y),o.K){W_(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(oc(a),oo(a)),s.g=o}else ny(s);0<n.j.length&&hc(n)}else l[0]!="stop"&&l[0]!="close"||Ts(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ts(n,7):_h(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Vi(4)}catch{}}function hS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ja(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function dS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ja(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function M_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ja(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=dS(t),s=hS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var U_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Cs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Cs){this.h=t.h,ga(this,t.j),this.s=t.s,this.g=t.g,_a(this,t.m),this.l=t.l;var e=t.i,n=new Li;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zf(this,n),this.o=t.o}else t&&(e=String(t).match(U_))?(this.h=!1,ga(this,e[1]||"",!0),this.s=ii(e[2]||""),this.g=ii(e[3]||"",!0),_a(this,e[4]),this.l=ii(e[5]||"",!0),zf(this,e[6]||"",!0),this.o=ii(e[7]||"")):(this.h=!1,this.i=new Li(null,this.h))}Cs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(oi(e,Gf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(oi(e,Gf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(oi(n,n.charAt(0)=="/"?gS:mS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",oi(n,yS)),t.join("")};function Dn(t){return new Cs(t)}function ga(t,e,n){t.j=n?ii(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _a(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zf(t,e,n){e instanceof Li?(t.i=e,vS(t.i,t.h)):(n||(e=oi(e,_S)),t.i=new Li(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function ac(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ii(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function oi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,pS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function pS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gf=/[#\/\?@]/g,mS=/[#\?:]/g,gS=/[#\?]/g,_S=/[#\?@]/g,yS=/#/g;function Li(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function us(t){t.g||(t.g=new Map,t.h=0,t.i&&fS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Li.prototype;x.add=function(t,e){us(this),this.i=null,t=Ur(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function F_(t,e){us(t),e=Ur(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $_(t,e){return us(t),e=Ur(t,e),t.g.has(e)}x.forEach=function(t,e){us(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};x.ta=function(){us(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};x.Z=function(t){us(this);let e=[];if(typeof t=="string")$_(this,t)&&(e=e.concat(this.g.get(Ur(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return us(this),this.i=null,t=Ur(this,t),$_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function B_(t,e,n){F_(t,e),0<n.length&&(t.i=null,t.g.set(Ur(t,e),eh(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ur(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function vS(t,e){e&&!t.j&&(us(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(F_(this,s),B_(this,r,n))},t)),t.j=e}var ES=class{constructor(t,e){this.g=t,this.map=e}};function j_(t){this.l=t||IS,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var IS=10;function q_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function H_(t){return t.h?1:t.g?t.g.size:0}function Zl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ph(t,e){t.g?t.g.add(e):t.h=e}function W_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}j_.prototype.cancel=function(){if(this.i=K_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function K_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return eh(t.i)}var wS=class{stringify(t){return Z.JSON.stringify(t,void 0)}parse(t){return Z.JSON.parse(t,void 0)}};function TS(){this.g=new wS}function AS(t,e,n){const s=n||"";try{M_(t,function(r,i){let o=r;to(r)&&(o=ah(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function RS(t,e){const n=new nc;if(Z.Image){const s=new Image;s.onload=Co(Do,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Co(Do,n,s,"TestLoadImage: error",!1,e),s.onabort=Co(Do,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Co(Do,n,s,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Do(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ao(t){this.l=t.ec||null,this.j=t.ob||!1}Je(ao,hh);ao.prototype.g=function(){return new cc(this.l,this.j)};ao.prototype.i=function(t){return function(){return t}}({});function cc(t,e){Ge.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=mh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(cc,Ge);var mh=0;x=cc.prototype;x.open=function(t,e){if(this.readyState!=mh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mi(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,co(this)),this.readyState=mh};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mi(this)),this.g&&(this.readyState=3,Mi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;z_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function z_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?co(this):Mi(this),this.readyState==3&&z_(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,co(this))};x.Ya=function(t){this.g&&(this.response=t,co(this))};x.ka=function(){this.g&&co(this)};function co(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mi(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Mi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(cc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PS=Z.JSON.parse;function ke(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=G_,this.L=this.M=!1}Je(ke,Ge);var G_="",bS=/^https?$/i,SS=["POST","PUT"];x=ke.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ql.g(),this.C=this.u?Kf(this.u):Kf(Ql),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Qf(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Z.FormData&&t instanceof Z.FormData,!(0<=h_(SS,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{J_(this),0<this.B&&((this.L=CS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=uh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Qf(this,i)}};function CS(t){return Pr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Zu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function Qf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Q_(t),lc(t)}function Q_(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),lc(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lc(this,!0)),ke.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?Y_(this):this.kb())};x.kb=function(){Y_(this)};function Y_(t){if(t.h&&typeof Zu<"u"&&(!t.C[1]||ln(t)!=4||t.da()!=2)){if(t.v&&ln(t)==4)uh(t.La,0,t);else if(nt(t,"readystatechange"),ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(U_)[1]||null;!r&&Z.self&&Z.self.location&&(r=Z.self.location.protocol.slice(0,-1)),s=!bS.test(r?r.toLowerCase():"")}n=s}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var i=2<ln(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Q_(t)}}finally{lc(t)}}}}function lc(t,e){if(t.g){J_(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=s}catch{}}}function J_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function ln(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PS(e)}};function Yf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case G_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function kS(t){const e={};t=(t.g&&2<=ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(ki(t[s]))continue;var n=tS(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}Gb(e,function(s){return s.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function X_(t){let e="";return nh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=X_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Jr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Z_(t){this.Ga=0,this.j=[],this.l=new nc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Jr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Jr("baseRetryDelayMs",5e3,t),this.hb=Jr("retryDelaySeedMs",1e4,t),this.eb=Jr("forwardChannelMaxRetries",2,t),this.xa=Jr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new j_(t&&t.concurrentRequestLimit),this.Ja=new TS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=Z_.prototype;x.ra=8;x.H=1;function _h(t){if(ey(t),t.H==3){var e=t.W++,n=Dn(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),lo(t,n),e=new io(t,t.l,e),e.L=2,e.v=ac(Dn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon)try{n=Z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=cy(e.l,null),e.g.ha(e.v)),e.G=Date.now(),oo(e)}oy(t)}function uc(t){t.g&&(vh(t),t.g.cancel(),t.g=null)}function ey(t){uc(t),t.u&&(Z.clearTimeout(t.u),t.u=null),ya(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function hc(t){if(!q_(t.i)&&!t.m){t.m=!0;var e=t.Na;Oi||T_(),Ni||(Oi(),Ni=!0),ch.add(e,t),t.C=0}}function DS(t,e){return H_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=so(dt(t.Na,t,e),iy(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new io(this,this.l,t);let i=this.s;if(this.U&&(i?(i=m_(i),g_(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ty(this,r,e),n=Dn(this.I),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),lo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(X_(i)))+"&"+e:this.o&&gh(n,this.o,i)),ph(this.i,r),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),r.aa=!0,Jl(r,n,null)):Jl(r,n,e),this.H=2}}else this.H==3&&(t?Jf(this,t):this.j.length==0||q_(this.i)||Jf(this))};function Jf(t,e){var n;e?n=e.m:n=t.W++;const s=Dn(t.I);Ae(s,"SID",t.K),Ae(s,"RID",n),Ae(s,"AID",t.V),lo(t,s),t.o&&t.s&&gh(s,t.o,t.s),n=new io(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ty(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ph(t.i,n),Jl(n,s,e)}function lo(t,e){t.na&&nh(t.na,function(n,s){Ae(e,s,n)}),t.h&&M_({},function(n,s){Ae(e,s,n)})}function ty(t,e,n){n=Math.min(t.j.length,n);var s=t.h?dt(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{AS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function ny(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Oi||T_(),Ni||(Oi(),Ni=!0),ch.add(e,t),t.A=0}}function yh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=so(dt(t.Ma,t),iy(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,sy(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=so(dt(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,At(10),uc(this),sy(this))};function vh(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function sy(t){t.g=new io(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Dn(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),lo(t,e),t.o&&t.s&&gh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ac(Dn(e)),n.s=null,n.S=!0,N_(n,t)}x.ib=function(){this.v!=null&&(this.v=null,uc(this),yh(this),At(19))};function ya(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function ry(t,e){var n=null;if(t.g==e){ya(t),vh(t),t.g=null;var s=2}else if(Zl(t.i,e))n=e.F,W_(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=sc(),nt(s,new C_(s,n)),hc(t)}else ny(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&DS(t,e)||s==2&&yh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Ts(t,5);break;case 4:Ts(t,10);break;case 3:Ts(t,6);break;default:Ts(t,2)}}}function iy(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ts(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=dt(t.pb,t);n||(n=new Cs("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||ga(n,"https"),ac(n)),RS(n.toString(),s)}else At(2);t.H=0,t.h&&t.h.za(e),oy(t),ey(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),At(2)):(this.l.info("Failed to ping google.com"),At(1))};function oy(t){if(t.H=0,t.ma=[],t.h){const e=K_(t.i);(e.length!=0||t.j.length!=0)&&(Bf(t.ma,e),Bf(t.ma,t.j),t.i.i.length=0,eh(t.j),t.j.length=0),t.h.ya()}}function ay(t,e,n){var s=n instanceof Cs?Dn(n):new Cs(n);if(s.g!="")e&&(s.g=e+"."+s.g),_a(s,s.m);else{var r=Z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Cs(null);s&&ga(i,s),e&&(i.g=e),r&&_a(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Ae(s,n,e),Ae(s,"VER",t.ra),lo(t,s),s}function cy(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ke(new ao({ob:!0})):new ke(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function ly(){}x=ly.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function va(){if(Pr&&!(10<=Number(Hb)))throw Error("Environmental error: no available transport.")}va.prototype.g=function(t,e){return new Vt(t,e)};function Vt(t,e){Ge.call(this),this.g=new Z_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ki(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ki(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fr(this)}Je(Vt,Ge);Vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ay(t,null,t.Y),hc(t)};Vt.prototype.close=function(){_h(this.g)};Vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ah(t),t=n);e.j.push(new ES(e.fb++,t)),e.H==3&&hc(e)};Vt.prototype.N=function(){this.g.h=null,delete this.j,_h(this.g),delete this.g,Vt.$.N.call(this)};function uy(t){dh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(uy,dh);function hy(){fh.call(this),this.status=1}Je(hy,fh);function Fr(t){this.g=t}Je(Fr,ly);Fr.prototype.Ba=function(){nt(this.g,"a")};Fr.prototype.Aa=function(t){nt(this.g,new uy(t))};Fr.prototype.za=function(t){nt(this.g,new hy)};Fr.prototype.ya=function(){nt(this.g,"b")};function OS(){this.blockSize=-1}function Jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Je(Jt,OS);Jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function il(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Jt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)il(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){il(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){il(this,s),r=0;break}}this.h=r,this.i+=e};Jt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function _e(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var NS={};function Eh(t){return-128<=t&&128>t?Bb(t,function(e){return new _e([e|0],0>e?-1:0)}):new _e([t|0],0>t?-1:0)}function un(t){if(isNaN(t)||!isFinite(t))return gr;if(0>t)return Ze(un(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=eu;return new _e(e,0)}function dy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(dy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=un(Math.pow(e,8)),s=gr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=un(Math.pow(e,i)),s=s.R(i).add(un(o))):(s=s.R(n),s=s.add(un(o)))}return s}var eu=4294967296,gr=Eh(0),tu=Eh(1),Xf=Eh(16777216);x=_e.prototype;x.ea=function(){if(Ut(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:eu+s)*e,e*=eu}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Pn(this))return"0";if(Ut(this))return"-"+Ze(this).toString(t);for(var e=un(Math.pow(t,6)),n=this,s="";;){var r=Ia(n,e).g;n=Ea(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Pn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Pn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ut(t){return t.h==-1}x.X=function(t){return t=Ea(this,t),Ut(t)?-1:Pn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new _e(n,~t.h).add(tu)}x.abs=function(){return Ut(this)?Ze(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new _e(n,n[n.length-1]&-2147483648?-1:0)};function Ea(t,e){return t.add(Ze(e))}x.R=function(t){if(Pn(this)||Pn(t))return gr;if(Ut(this))return Ut(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Ut(t))return Ze(this.R(Ze(t)));if(0>this.X(Xf)&&0>t.X(Xf))return un(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Oo(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Oo(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Oo(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Oo(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new _e(n,0)};function Oo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Xr(t,e){this.g=t,this.h=e}function Ia(t,e){if(Pn(e))throw Error("division by zero");if(Pn(t))return new Xr(gr,gr);if(Ut(t))return e=Ia(Ze(t),e),new Xr(Ze(e.g),Ze(e.h));if(Ut(e))return e=Ia(t,Ze(e)),new Xr(Ze(e.g),e.h);if(30<t.g.length){if(Ut(t)||Ut(e))throw Error("slowDivide_ only works with positive integers.");for(var n=tu,s=e;0>=s.X(t);)n=Zf(n),s=Zf(s);var r=Zs(n,1),i=Zs(s,1);for(s=Zs(s,2),n=Zs(n,2);!Pn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Zs(s,1),n=Zs(n,1)}return e=Ea(t,r.R(e)),new Xr(r,e)}for(r=gr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=un(n),o=i.R(e);Ut(o)||0<o.X(t);)n-=s,i=un(n),o=i.R(e);Pn(i)&&(i=tu),r=r.add(i),t=Ea(t,o)}return new Xr(r,t)}x.gb=function(t){return Ia(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new _e(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new _e(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new _e(n,this.h^t.h)};function Zf(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new _e(n,t.h)}function Zs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new _e(r,t.h)}va.prototype.createWebChannel=va.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;rc.NO_ERROR=0;rc.TIMEOUT=8;rc.HTTP_ERROR=6;k_.COMPLETE="complete";D_.EventType=ro;ro.OPEN="a";ro.CLOSE="b";ro.ERROR="c";ro.MESSAGE="d";Ge.prototype.listen=Ge.prototype.O;ke.prototype.listenOnce=ke.prototype.P;ke.prototype.getLastError=ke.prototype.Sa;ke.prototype.getLastErrorCode=ke.prototype.Ia;ke.prototype.getStatus=ke.prototype.da;ke.prototype.getResponseJson=ke.prototype.Wa;ke.prototype.getResponseText=ke.prototype.ja;ke.prototype.send=ke.prototype.ha;ke.prototype.setWithCredentials=ke.prototype.Oa;Jt.prototype.digest=Jt.prototype.l;Jt.prototype.reset=Jt.prototype.reset;Jt.prototype.update=Jt.prototype.j;_e.prototype.add=_e.prototype.add;_e.prototype.multiply=_e.prototype.R;_e.prototype.modulo=_e.prototype.gb;_e.prototype.compare=_e.prototype.X;_e.prototype.toNumber=_e.prototype.ea;_e.prototype.toString=_e.prototype.toString;_e.prototype.getBits=_e.prototype.D;_e.fromNumber=un;_e.fromString=dy;var xS=function(){return new va},VS=function(){return sc()},ol=rc,LS=k_,MS=Bs,ep={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},US=ao,No=D_,FS=ke,$S=Jt,_r=_e;const tp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let $r="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ms=new xu("@firebase/firestore");function Zr(){return Ms.logLevel}function B(t,...e){if(Ms.logLevel<=oe.DEBUG){const n=e.map(Ih);Ms.debug(`Firestore (${$r}): ${t}`,...n)}}function On(t,...e){if(Ms.logLevel<=oe.ERROR){const n=e.map(Ih);Ms.error(`Firestore (${$r}): ${t}`,...n)}}function br(t,...e){if(Ms.logLevel<=oe.WARN){const n=e.map(Ih);Ms.warn(`Firestore (${$r}): ${t}`,...n)}}function Ih(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${$r}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function Pe(t,e){t||X()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class jS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qS{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pe(typeof s.accessToken=="string"),new fy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new ct(e)}}class HS{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class WS{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new HS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new KS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function GS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class py{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=GS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function Sr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Be(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Be(0,0))}static max(){return new ee(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ui{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ui?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends Ui{construct(e,n,s){return new Re(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(w.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const QS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Ui{construct(e,n,s){return new tt(e,n,s)}static isValidIdentifier(e){return QS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Re.fromString(e))}static fromName(e){return new W(Re.fromString(e).popFirst(5))}static empty(){return new W(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Re(e.slice()))}}function YS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ee.fromTimestamp(s===1e9?new Be(n+1,0):new Be(n,s));return new rs(r,W.empty(),e)}function JS(t){return new rs(t.readTime,t.key,-1)}class rs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new rs(ee.min(),W.empty(),-1)}static max(){return new rs(ee.max(),W.empty(),-1)}}function XS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const ZS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function uo(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==ZS)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(r=>r?P.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new P((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new P((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ho(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class wh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}wh._e=-1;function dc(t){return t==null}function wa(t){return t===0&&1/t==-1/0}function tC(t){return typeof t=="number"&&Number.isInteger(t)&&!wa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function np(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function my(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=r??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Xe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,s,r,i){return this}insert(e,n,s){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class st{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sp(this.data.getIterator())}getIteratorFrom(e){return new sp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class sp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Nt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new st(tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Sr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class gy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gy("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const nC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=nC.exec(t);if(Pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Us(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Th(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ah(t){const e=t.mapValue.fields.__previous_value__;return Th(e)?Ah(e):e}function Fi(t){const e=is(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sC{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class $i{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $i&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Vo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Th(t)?4:rC(t)?9007199254740991:10:X()}function _n(t,e){if(t===e)return!0;const n=Fs(t);if(n!==Fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fi(t).isEqual(Fi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=is(r.timestampValue),a=is(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Us(r.bytesValue).isEqual(Us(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Le(r.doubleValue),a=Le(i.doubleValue);return o===a?wa(o)===wa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Sr(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(np(o)!==np(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!_n(o[c],a[c])))return!1;return!0}(t,e);default:return X()}}function Bi(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Cr(t,e){if(t===e)return 0;const n=Fs(t),s=Fs(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Le(i.integerValue||i.doubleValue),c=Le(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return rp(t.timestampValue,e.timestampValue);case 4:return rp(Fi(t),Fi(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Us(i),c=Us(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ue(a[l],c[l]);if(u!==0)return u}return ue(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ue(Le(i.latitude),Le(o.latitude));return a!==0?a:ue(Le(i.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Cr(a[l],c[l]);if(u)return u}return ue(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Vo.mapValue&&o===Vo.mapValue)return 0;if(i===Vo.mapValue)return 1;if(o===Vo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ue(c[h],u[h]);if(d!==0)return d;const m=Cr(a[c[h]],l[u[h]]);if(m!==0)return m}return ue(c.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function rp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=is(t),s=is(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function kr(t){return nu(t)}function nu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=is(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Us(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=nu(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${nu(n.fields[o])}`;return r+"}"}(t.mapValue):X()}function ip(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function su(t){return!!t&&"integerValue"in t}function Rh(t){return!!t&&"arrayValue"in t}function op(t){return!!t&&"nullValue"in t}function ap(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zo(t){return!!t&&"mapValue"in t}function _i(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return js(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=_i(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_i(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_i(n)}setAll(e){let n=tt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=_i(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];zo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){js(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new bt(_i(this.value))}}function _y(t){const e=[];return js(t.fields,(n,s)=>{const r=new tt([n]);if(zo(s)){const i=_y(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,ee.min(),ee.min(),ee.min(),bt.empty(),0)}static newFoundDocument(e,n,s,r){return new lt(e,1,n,ee.min(),s,r,0)}static newNoDocument(e,n){return new lt(e,2,n,ee.min(),ee.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,ee.min(),ee.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ta{constructor(e,n){this.position=e,this.inclusive=n}}function cp(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=Cr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function lp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ji{constructor(e,n="asc"){this.field=e,this.dir=n}}function iC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class yy{}class Me extends yy{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new aC(e,n,s):n==="array-contains"?new uC(e,s):n==="in"?new hC(e,s):n==="not-in"?new dC(e,s):n==="array-contains-any"?new fC(e,s):new Me(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new cC(e,s):new lC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Cr(n,this.value)):n!==null&&Fs(this.value)===Fs(n)&&this.matchesComparison(Cr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends yy{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Xt(e,n)}matches(e){return vy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function vy(t){return t.op==="and"}function Ey(t){return oC(t)&&vy(t)}function oC(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function ru(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+kr(t.value);if(Ey(t))return t.filters.map(e=>ru(e)).join(",");{const e=t.filters.map(n=>ru(n)).join(",");return`${t.op}(${e})`}}function Iy(t,e){return t instanceof Me?function(s,r){return r instanceof Me&&s.op===r.op&&s.field.isEqual(r.field)&&_n(s.value,r.value)}(t,e):t instanceof Xt?function(s,r){return r instanceof Xt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&Iy(o,r.filters[a]),!0):!1}(t,e):void X()}function wy(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${kr(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(wy).join(" ,")+"}"}(t):"Filter"}class aC extends Me{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class cC extends Me{constructor(e,n){super(e,"in",n),this.keys=Ty("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lC extends Me{constructor(e,n){super(e,"not-in",n),this.keys=Ty("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ty(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class uC extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rh(n)&&Bi(n.arrayValue,this.value)}}class hC extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bi(this.value.arrayValue,n)}}class dC extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bi(this.value.arrayValue,n)}}class fC extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Bi(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class pC{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function up(t,e=null,n=[],s=[],r=null,i=null,o=null){return new pC(t,e,n,s,r,i,o)}function Ph(t){const e=se(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ru(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),dc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>kr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>kr(s)).join(",")),e.ce=n}return e.ce}function bh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Iy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lp(t.startAt,e.startAt)&&lp(t.endAt,e.endAt)}function iu(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Br{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function mC(t,e,n,s,r,i,o,a){return new Br(t,e,n,s,r,i,o,a)}function fc(t){return new Br(t)}function hp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ay(t){return t.collectionGroup!==null}function yi(t){const e=se(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new st(tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ji(i,s))}),n.has(tt.keyField().canonicalString())||e.le.push(new ji(tt.keyField(),s))}return e.le}function pn(t){const e=se(t);return e.he||(e.he=gC(e,yi(t))),e.he}function gC(t,e){if(t.limitType==="F")return up(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new ji(r.field,i)});const n=t.endAt?new Ta(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Ta(t.startAt.position,t.startAt.inclusive):null;return up(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function ou(t,e){const n=t.filters.concat([e]);return new Br(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function au(t,e,n){return new Br(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pc(t,e){return bh(pn(t),pn(e))&&t.limitType===e.limitType}function Ry(t){return`${Ph(pn(t))}|lt:${t.limitType}`}function nr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>wy(r)).join(", ")}]`),dc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>kr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>kr(r)).join(",")),`Target(${s})`}(pn(t))}; limitType=${t.limitType})`}function mc(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):W.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of yi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const l=cp(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,yi(s),r)||s.endAt&&!function(o,a,c){const l=cp(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,yi(s),r))}(t,e)}function _C(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Py(t){return(e,n)=>{let s=!1;for(const r of yi(t)){const i=yC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function yC(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Cr(c,l):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return my(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const vC=new Se(W.comparator);function Nn(){return vC}const by=new Se(W.comparator);function ai(...t){let e=by;for(const n of t)e=e.insert(n.key,n);return e}function Sy(t){let e=by;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function As(){return vi()}function Cy(){return vi()}function vi(){return new jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const EC=new Se(W.comparator),IC=new st(W.comparator);function ie(...t){let e=IC;for(const n of t)e=e.add(n);return e}const wC=new st(ue);function TC(){return wC}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ky(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wa(e)?"-0":e}}function Dy(t){return{integerValue:""+t}}function AC(t,e){return tC(e)?Dy(e):ky(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class gc{constructor(){this._=void 0}}function RC(t,e,n){return t instanceof qi?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Th(i)&&(i=Ah(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Hi?Ny(t,e):t instanceof Wi?xy(t,e):function(r,i){const o=Oy(r,i),a=dp(o)+dp(r.Ie);return su(o)&&su(r.Ie)?Dy(a):ky(r.serializer,a)}(t,e)}function PC(t,e,n){return t instanceof Hi?Ny(t,e):t instanceof Wi?xy(t,e):n}function Oy(t,e){return t instanceof Aa?function(s){return su(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class qi extends gc{}class Hi extends gc{constructor(e){super(),this.elements=e}}function Ny(t,e){const n=Vy(e);for(const s of t.elements)n.some(r=>_n(r,s))||n.push(s);return{arrayValue:{values:n}}}class Wi extends gc{constructor(e){super(),this.elements=e}}function xy(t,e){let n=Vy(e);for(const s of t.elements)n=n.filter(r=>!_n(r,s));return{arrayValue:{values:n}}}class Aa extends gc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function dp(t){return Le(t.integerValue||t.doubleValue)}function Vy(t){return Rh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bC{constructor(e,n){this.field=e,this.transform=n}}function SC(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Hi&&r instanceof Hi||s instanceof Wi&&r instanceof Wi?Sr(s.elements,r.elements,_n):s instanceof Aa&&r instanceof Aa?_n(s.Ie,r.Ie):s instanceof qi&&r instanceof qi}(t.transform,e.transform)}class CC{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Go(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _c{}function Ly(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sh(t.key,Gt.none()):new fo(t.key,t.data,Gt.none());{const n=t.data,s=bt.empty();let r=new st(tt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new hs(t.key,s,new Nt(r.toArray()),Gt.none())}}function kC(t,e,n){t instanceof fo?function(r,i,o){const a=r.value.clone(),c=pp(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof hs?function(r,i,o){if(!Go(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=pp(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(My(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ei(t,e,n,s){return t instanceof fo?function(i,o,a,c){if(!Go(i.precondition,o))return a;const l=i.value.clone(),u=mp(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof hs?function(i,o,a,c){if(!Go(i.precondition,o))return a;const l=mp(i.fieldTransforms,c,o),u=o.data;return u.setAll(My(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return Go(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function DC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Oy(s.transform,r||null);i!=null&&(n===null&&(n=bt.empty()),n.set(s.field,i))}return n||null}function fp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Sr(s,r,(i,o)=>SC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends _c{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class hs extends _c{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function My(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function pp(t,e,n){const s=new Map;Pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,PC(o,a,n[r]))}return s}function mp(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,RC(i,o,e))}return s}class Sh extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OC extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class NC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&kC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ei(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ei(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Cy();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Ly(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Sr(this.mutations,e.mutations,(n,s)=>fp(n,s))&&Sr(this.baseMutations,e.baseMutations,(n,s)=>fp(n,s))}}class Ch{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Pe(e.mutations.length===s.length);let r=function(){return EC}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ch(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class xC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class VC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Ve,ce;function LC(t){switch(t){default:return X();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Uy(t){if(t===void 0)return On("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ve.OK:return w.OK;case Ve.CANCELLED:return w.CANCELLED;case Ve.UNKNOWN:return w.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return w.INTERNAL;case Ve.UNAVAILABLE:return w.UNAVAILABLE;case Ve.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ve.NOT_FOUND:return w.NOT_FOUND;case Ve.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ve.ABORTED:return w.ABORTED;case Ve.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ve.DATA_LOSS:return w.DATA_LOSS;default:return X()}}(ce=Ve||(Ve={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function MC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const UC=new _r([4294967295,4294967295],0);function gp(t){const e=MC().encode(t),n=new $S;return n.update(e),new Uint8Array(n.digest())}function _p(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _r([n,s],0),new _r([r,i],0)]}class kh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ci(`Invalid padding: ${n}`);if(s<0)throw new ci(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ci(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ci(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=_r.fromNumber(this.Te)}de(e,n,s){let r=e.add(n.multiply(_r.fromNumber(s)));return r.compare(UC)===1&&(r=new _r([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=gp(e),[s,r]=_p(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new kh(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=gp(e),[s,r]=_p(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class yc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,po.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new yc(ee.min(),r,new Se(ue),Nn(),ie())}}class po{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new po(s,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qo{constructor(e,n,s,r){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=r}}class Fy{constructor(e,n){this.targetId=e,this.fe=n}}class $y{constructor(e,n,s=gt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class yp{constructor(){this.ge=0,this.pe=Ep(),this.ye=gt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ie(),n=ie(),s=ie();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:X()}}),new po(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=Ep()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class FC{constructor(e){this.Le=e,this.ke=new Map,this.qe=Nn(),this.Qe=vp(),this.Ke=new Se(ue)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,s=e.fe.count,r=this.Ye(n);if(r){const i=r.target;if(iu(i))if(s===0){const o=new W(i.path);this.We(n,o,lt.newNoDocument(o,ee.min()))}else Pe(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Us(s).toUint8Array()}catch(c){if(c instanceof gy)return br("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new kh(o,r,i)}catch(c){return br(c instanceof ci?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),r++)}),r}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&iu(a.target)){const c=new W(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,lt.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let s=ie();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const r=new yc(e,n,this.Ke,this.qe,s);return this.qe=Nn(),this.Qe=vp(),this.Ke=new Se(ue),r}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const r=this.ze(e);this.st(e,n)?r.Me(n,1):r.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new yp,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new st(ue),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new yp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function vp(){return new Se(W.comparator)}function Ep(){return new Se(W.comparator)}const $C=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),BC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),jC=(()=>({and:"AND",or:"OR"}))();class qC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cu(t,e){return t.useProto3Json||dc(e)?e:{value:e}}function Ra(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function By(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function HC(t,e){return Ra(t,e.toTimestamp())}function mn(t){return Pe(!!t),ee.fromTimestamp(function(n){const s=is(n);return new Be(s.seconds,s.nanos)}(t))}function Dh(t,e){return function(s){return new Re(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function jy(t){const e=Re.fromString(t);return Pe(Ky(e)),e}function lu(t,e){return Dh(t.databaseId,e.path)}function al(t,e){const n=jy(e);if(n.get(1)!==t.databaseId.projectId)throw new F(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(qy(n))}function uu(t,e){return Dh(t.databaseId,e)}function WC(t){const e=jy(t);return e.length===4?Re.emptyPath():qy(e)}function hu(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qy(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ip(t,e,n){return{name:lu(t,e),fields:n.value.mapValue.fields}}function KC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Pe(u===void 0||typeof u=="string"),gt.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Uint8Array),gt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?w.UNKNOWN:Uy(l.code);return new F(u,l.message||"")}(o);n=new $y(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=al(t,s.document.name),i=mn(s.document.updateTime),o=s.document.createTime?mn(s.document.createTime):ee.min(),a=new bt({mapValue:{fields:s.document.fields}}),c=lt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Qo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=al(t,s.document),i=s.readTime?mn(s.readTime):ee.min(),o=lt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Qo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=al(t,s.document),i=s.removedTargetIds||[];n=new Qo([],i,r,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new VC(r,i),a=s.targetId;n=new Fy(a,o)}}return n}function zC(t,e){let n;if(e instanceof fo)n={update:Ip(t,e.key,e.value)};else if(e instanceof Sh)n={delete:lu(t,e.key)};else if(e instanceof hs)n={update:Ip(t,e.key,e.data),updateMask:n1(e.fieldMask)};else{if(!(e instanceof OC))return X();n={verify:lu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof qi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Hi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Aa)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw X()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:HC(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function GC(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?mn(r.updateTime):mn(i);return o.isEqual(ee.min())&&(o=mn(i)),new CC(o,r.transformResults||[])}(n,e))):[]}function QC(t,e){return{documents:[uu(t,e.path)]}}function YC(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=uu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=uu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Wy(Xt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:sr(h.field),direction:ZC(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=cu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function JC(t){let e=WC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Pe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Hy(h);return d instanceof Xt&&Ey(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new ji(rr(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,dc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new Ta(m,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,m=h.values||[];return new Ta(m,d)}(n.endAt)),mC(e,r,o,i,a,"F",c,l)}function XC(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=rr(n.unaryFilter.field);return Me.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=rr(n.unaryFilter.field);return Me.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rr(n.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rr(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(rr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(s=>Hy(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function ZC(t){return $C[t]}function e1(t){return BC[t]}function t1(t){return jC[t]}function sr(t){return{fieldPath:t.canonicalString()}}function rr(t){return tt.fromServerFormat(t.fieldPath)}function Wy(t){return t instanceof Me?function(n){if(n.op==="=="){if(ap(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NAN"}};if(op(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ap(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NAN"}};if(op(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(n.field),op:e1(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const s=n.getFilters().map(r=>Wy(r));return s.length===1?s[0]:{compositeFilter:{op:t1(n.op),filters:s}}}(t):X()}function n1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ky(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qn{constructor(e,n,s,r,i=ee.min(),o=ee.min(),a=gt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class s1{constructor(e){this.ut=e}}function r1(t){const e=JC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?au(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class i1{constructor(){this.on=new o1}addToCollectionParentIndex(e,n){return this.on.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(rs.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(rs.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class o1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new st(Re.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new st(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Dr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Dr(0)}static Nn(){return new Dr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class a1{constructor(){this.changes=new jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class c1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class l1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ei(s.mutation,r,Nt.empty(),Be.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ie()){const r=As();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ai();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=As();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ie()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Nn();const o=vi(),a=function(){return vi()}();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof hs)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ei(u.mutation,l,u.mutation.getFieldMask(),Be.now())):o.set(l.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new c1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=vi();let r=new Se((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Nt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ie()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Cy();u.forEach(d=>{if(!i.has(d)){const m=Ly(n.get(d),s.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ay(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):P.resolve(As());let a=-1,c=i;return o.next(l=>P.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:Sy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let r=ai();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=ai();return this.indexManager.getCollectionParents(e,i).next(a=>P.forEach(a,c=>{const l=function(h,d){return new Br(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s,r).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,lt.newInvalidDocument(u)))});let a=ai();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Ei(u.mutation,l,Nt.empty(),Be.now()),mc(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class u1{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(r){return{id:r.id,version:r.version,createTime:mn(r.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(r){return{name:r.name,query:r1(r.bundledQuery),readTime:mn(r.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class h1{constructor(){this.overlays=new Se(W.comparator),this.lr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=As();return P.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.lt(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const r=As(),i=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return P.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=As(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=As(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return P.resolve(a)}lt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.lr.get(r.largestBatchId).delete(s.key);this.lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new xC(n,s));let i=this.lr.get(n);i===void 0&&(i=ie(),this.lr.set(n,i)),this.lr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Oh{constructor(){this.hr=new st(ze.Pr),this.Ir=new st(ze.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new ze(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new ze(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new W(new Re([])),s=new ze(n,e),r=new ze(n,e+1),i=[];return this.Ir.forEachInRange([s,r],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new W(new Re([])),s=new ze(n,e),r=new ze(n,e+1);let i=ie();return this.Ir.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return W.comparator(e.key,n.key)||ue(e.gr,n.gr)}static Tr(e,n){return ue(e.gr,n.gr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class d1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new st(ze.Pr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NC(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.yr=this.yr.add(new ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Sr(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),r=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([s,r],o=>{const a=this.wr(o.gr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new st(ue);return n.forEach(r=>{const i=new ze(r,0),o=new ze(r,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{s=s.add(a.gr)})}),P.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;W.isDocumentKey(i)||(i=i.child(""));const o=new ze(new W(i),0);let a=new st(ue);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gr)),!0)},o),P.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const r=this.wr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Pe(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return P.forEach(n.mutations,r=>{const i=new ze(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new ze(n,0),r=this.yr.firstAfterOrEqual(s);return P.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class f1{constructor(e){this.Cr=e,this.docs=function(){return new Se(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let s=Nn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():lt.newInvalidDocument(r))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Nn();const o=n.path,a=new W(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||XS(JS(u),s)<=0||(r.has(u.key)||mc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,s,r){X()}vr(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new p1(this)}getSize(e){return P.resolve(this.size)}}class p1 extends a1{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this._r.addEntry(e,r)):this._r.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class m1{constructor(e){this.persistence=e,this.Fr=new jr(n=>Ph(n),bh),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Oh,this.targetCount=0,this.Nr=Dr.On()}forEachTarget(e,n){return this.Fr.forEach((s,r)=>n(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),P.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Dr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.kn(n),P.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class g1{constructor(e,n){this.Br={},this.overlays={},this.Lr=new wh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new m1(this),this.indexManager=new i1,this.remoteDocumentCache=function(r){return new f1(r)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new s1(n),this.Kr=new u1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new h1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new d1(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const r=new _1(this.Lr.next());return this.referenceDelegate.$r(),s(r).next(i=>this.referenceDelegate.Ur(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Wr(e,n){return P.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class _1 extends eC{constructor(e){super(),this.currentSequenceNumber=e}}class Nh{constructor(e){this.persistence=e,this.Gr=new Oh,this.zr=null}static jr(e){return new Nh(e)}get Hr(){if(this.zr)return this.zr;throw X()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(r=>this.Hr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,s=>{const r=W.fromPath(s);return this.Jr(e,r).next(i=>{i||n.removeEntry(r,ee.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=r}static Qi(e,n){let s=ie(),r=ie();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xh(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class y1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class v1{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new y1;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,s,r){return s.documentReadCount<this.Ui?(Zr()<=oe.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",nr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),P.resolve()):(Zr()<=oe.DEBUG&&B("QueryEngine","Query:",nr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Wi*r?(Zr()<=oe.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",nr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):P.resolve())}zi(e,n){if(hp(n))return P.resolve(null);let s=pn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=au(n,null,"F"),s=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ie(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,au(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,s,r){return hp(n)||r.isEqual(ee.min())?P.resolve(null):this.Gi.getDocuments(e,s).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,s,r)?P.resolve(null):(Zr()<=oe.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),nr(n)),this.Xi(e,o,n,YS(r,-1)).next(a=>a))})}Yi(e,n){let s=new st(Py(e));return n.forEach((r,i)=>{mc(e,i)&&(s=s.add(i))}),s}Zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,n,s){return Zr()<=oe.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",nr(n)),this.Gi.getDocumentsMatchingQuery(e,n,rs.min(),s)}Xi(e,n,s,r){return this.Gi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class E1{constructor(e,n,s,r){this.persistence=e,this.es=n,this.serializer=r,this.ts=new Se(ue),this.ns=new jr(i=>Ph(i),bh),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new l1(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function I1(t,e,n,s){return new E1(t,e,n,s)}async function zy(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ie();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function w1(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let m=P.resolve();return d.forEach(y=>{m=m.next(()=>u.getEntry(c,y)).next(A=>{const I=l.docVersions.get(y);Pe(I!==null),A.version.compareTo(I)<0&&(h.applyToRemoteDocument(A,l),A.isValidDocument()&&(A.setReadTime(l.commitVersion),u.addEntry(A)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=ie();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Gy(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function T1(t,e){const n=se(t),s=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(gt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(h,m),function(A,I,S){return A.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,m,u)&&a.push(n.qr.updateTargetData(i,m))});let c=Nn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(A1(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!s.isEqual(ee.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=r,i))}function A1(t,e,n){let s=ie(),r=ie();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Nn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:r}})}function R1(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function P1(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.qr.getTargetData(s,e).next(i=>i?(r=i,P.resolve(r)):n.qr.allocateTargetId(s).next(o=>(r=new Qn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function du(t,e,n){const s=se(t),r=s.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ho(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(r.target)}function wp(t,e,n){const s=se(t);let r=ee.min(),i=ie();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=se(c),d=h.ns.get(u);return d!==void 0?P.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(s,o,pn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?r:ee.min(),n?i:ie())).next(a=>(b1(s,_C(e),a),{documents:a,ls:i})))}function b1(t,e,n){let s=t.rs.get(e)||ee.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.rs.set(e,s)}class Tp{constructor(){this.activeTargetIds=TC()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class S1{constructor(){this.eo=new Tp,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Tp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class C1{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ap{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Lo=null;function cl(){return Lo===null?Lo=function(){return 268435456+Math.round(2147483648*Math.random())}():Lo++,"0x"+Lo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const k1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class D1{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const at="WebChannelConnection";class O1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${r}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get yo(){return!1}wo(n,s,r,i,o){const a=cl(),c=this.So(n,s);B("RestConnection",`Sending RPC '${n}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,r).then(u=>(B("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw br("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",r),u})}Co(n,s,r,i,o,a){return this.wo(n,s,r,i,o)}bo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$r}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}So(n,s){const r=k1[n];return`${this.mo}/v1/${s}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,r){const i=cl();return new Promise((o,a)=>{const c=new FS;c.setWithCredentials(!0),c.listenOnce(LS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ol.NO_ERROR:const u=c.getResponseJson();B(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ol.TIMEOUT:B(at,`RPC '${e}' ${i} timed out`),a(new F(w.DEADLINE_EXCEEDED,"Request time out"));break;case ol.HTTP_ERROR:const h=c.getStatus();if(B(at,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(I){const S=I.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(S)>=0?S:w.UNKNOWN}(m.status);a(new F(y,m.message))}else a(new F(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(w.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{B(at,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);B(at,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}vo(e,n,s){const r=cl(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xS(),a=VS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new US({})),this.bo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");B(at,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,m=!1;const y=new D1({co:I=>{m?B(at,`Not sending because RPC '${e}' stream ${r} is closed:`,I):(d||(B(at,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),B(at,`RPC '${e}' stream ${r} sending:`,I),h.send(I))},lo:()=>h.close()}),A=(I,S,O)=>{I.listen(S,j=>{try{O(j)}catch(k){setTimeout(()=>{throw k},0)}})};return A(h,No.EventType.OPEN,()=>{m||B(at,`RPC '${e}' stream ${r} transport opened.`)}),A(h,No.EventType.CLOSE,()=>{m||(m=!0,B(at,`RPC '${e}' stream ${r} transport closed`),y.Ro())}),A(h,No.EventType.ERROR,I=>{m||(m=!0,br(at,`RPC '${e}' stream ${r} transport errored:`,I),y.Ro(new F(w.UNAVAILABLE,"The operation could not be completed")))}),A(h,No.EventType.MESSAGE,I=>{var S;if(!m){const O=I.data[0];Pe(!!O);const j=O,k=j.error||((S=j[0])===null||S===void 0?void 0:S.error);if(k){B(at,`RPC '${e}' stream ${r} received error:`,k);const de=k.status;let me=function(Lt){const It=Ve[Lt];if(It!==void 0)return Uy(It)}(de),We=k.message;me===void 0&&(me=w.INTERNAL,We="Unknown error status: "+de+" with message "+k.message),m=!0,y.Ro(new F(me,We)),h.close()}else B(at,`RPC '${e}' stream ${r} received:`,O),y.Vo(O)}}),A(a,MS.STAT_EVENT,I=>{I.stat===ep.PROXY?B(at,`RPC '${e}' stream ${r} detected buffering proxy`):I.stat===ep.NOPROXY&&B(at,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function ll(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function vc(t){return new qC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),r=Math.max(0,n-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Yy{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Ko=s,this.$o=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Qy(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Uo===n&&this.s_(s,r)},s=>{e(()=>{const r=new F(w.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(r)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(r=>{s(()=>this.o_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class N1 extends Yy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=KC(this.serializer,e),s=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?mn(o.readTime):ee.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=hu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=iu(c)?{documents:QC(i,c)}:{query:YC(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=By(i,o.resumeToken);const l=cu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Ra(i,o.snapshotVersion.toTimestamp());const l=cu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const s=XC(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=hu(this.serializer),n.removeTarget=e,this.e_(n)}}class x1 extends Yy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=GC(e.writeResults,e.commitTime),s=mn(e.commitTime);return this.listener.I_(s,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=hu(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>zC(this.serializer,s))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class V1 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new F(w.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.wo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(w.UNKNOWN,r.toString())})}Co(e,n,s,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(w.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class L1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(On(n),this.f_=!1):B("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class M1{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{s.enqueueAndForget(async()=>{qs(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=se(c);l.C_.add(4),await mo(l),l.M_.set("Unknown"),l.C_.delete(4),await Ec(l)}(this))})}),this.M_=new L1(s,r)}}async function Ec(t){if(qs(t))for(const e of t.v_)await e(!0)}async function mo(t){for(const e of t.v_)await e(!1)}function Jy(t,e){const n=se(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Mh(n)?Lh(n):qr(n).Ho()&&Vh(n,e))}function Xy(t,e){const n=se(t),s=qr(n);n.D_.delete(e),s.Ho()&&Zy(n,e),n.D_.size===0&&(s.Ho()?s.Zo():qs(n)&&n.M_.set("Unknown"))}function Vh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qr(t).u_(e)}function Zy(t,e){t.x_.Oe(e),qr(t).c_(e)}function Lh(t){t.x_=new FC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),qr(t).start(),t.M_.g_()}function Mh(t){return qs(t)&&!qr(t).jo()&&t.D_.size>0}function qs(t){return se(t).C_.size===0}function ev(t){t.x_=void 0}async function U1(t){t.D_.forEach((e,n)=>{Vh(t,e)})}async function F1(t,e){ev(t),Mh(t)?(t.M_.w_(e),Lh(t)):t.M_.set("Unknown")}async function $1(t,e,n){if(t.M_.set("Online"),e instanceof $y&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.D_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.D_.delete(a),r.x_.removeTarget(a))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Pa(t,s)}else if(e instanceof Qo?t.x_.$e(e):e instanceof Fy?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ee.min()))try{const s=await Gy(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(gt.EMPTY_BYTE_STRING,u.snapshotVersion)),Zy(i,c);const h=new Qn(u.target,c,l,u.sequenceNumber);Vh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await Pa(t,s)}}async function Pa(t,e,n){if(!ho(e))throw e;t.C_.add(1),await mo(t),t.M_.set("Offline"),n||(n=()=>Gy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Ec(t)})}function tv(t,e){return e().catch(n=>Pa(t,n,e))}async function Ic(t){const e=se(t),n=os(e);let s=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;B1(e);)try{const r=await R1(e.localStore,s);if(r===null){e.b_.length===0&&n.Zo();break}s=r.batchId,j1(e,r)}catch(r){await Pa(e,r)}nv(e)&&sv(e)}function B1(t){return qs(t)&&t.b_.length<10}function j1(t,e){t.b_.push(e);const n=os(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function nv(t){return qs(t)&&!os(t).jo()&&t.b_.length>0}function sv(t){os(t).start()}async function q1(t){os(t).E_()}async function H1(t){const e=os(t);for(const n of t.b_)e.P_(n.mutations)}async function W1(t,e,n){const s=t.b_.shift(),r=Ch.from(s,e,n);await tv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ic(t)}async function K1(t,e){e&&os(t).h_&&await async function(s,r){if(function(o){return LC(o)&&o!==w.ABORTED}(r.code)){const i=s.b_.shift();os(s).Yo(),await tv(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ic(s)}}(t,e),nv(t)&&sv(t)}async function Rp(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=qs(n);n.C_.add(3),await mo(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Ec(n)}async function z1(t,e){const n=se(t);e?(n.C_.delete(2),await Ec(n)):e||(n.C_.add(2),await mo(n),n.M_.set("Unknown"))}function qr(t){return t.O_||(t.O_=function(n,s,r){const i=se(n);return i.A_(),new N1(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:U1.bind(null,t),Io:F1.bind(null,t),a_:$1.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Mh(t)?Lh(t):t.M_.set("Unknown")):(await t.O_.stop(),ev(t))})),t.O_}function os(t){return t.N_||(t.N_=function(n,s,r){const i=se(n);return i.A_(),new x1(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:q1.bind(null,t),Io:K1.bind(null,t),T_:H1.bind(null,t),I_:W1.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Ic(t)):(await t.N_.stop(),t.b_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Uh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Uh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fh(t,e){if(On("AsyncQueue",`${e}: ${t}`),ho(t))return new F(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class yr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=ai(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new yr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new yr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pp{constructor(){this.B_=new Se(W.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):X():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Or{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Or(e,n,yr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class G1{constructor(){this.k_=void 0,this.listeners=[]}}class Q1{constructor(){this.queries=new jr(e=>Ry(e),pc),this.onlineState="Unknown",this.q_=new Set}}async function $h(t,e){const n=se(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new G1),r)try{i.k_=await n.onListen(s)}catch(o){const a=Fh(o,`Initialization of query '${nr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&jh(n)}async function Bh(t,e){const n=se(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Y1(t,e){const n=se(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(r)&&(s=!0);o.k_=r}}s&&jh(n)}function J1(t,e,n){const s=se(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function jh(t){t.q_.forEach(e=>{e.next()})}class qh{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Or(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rv{constructor(e){this.key=e}}class iv{constructor(e){this.key=e}}class X1{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ie(),this.mutatedKeys=ie(),this._a=Py(e),this.aa=new yr(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new Pp,r=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),m=mc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),A=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;d&&m?d.data.isEqual(m.data)?y!==A&&(s.track({type:3,doc:m}),I=!0):this.ha(d,m)||(s.track({type:2,doc:m}),I=!0,(c&&this._a(m,c)>0||l&&this._a(m,l)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),I=!0):d&&!m&&(s.track({type:1,doc:d}),I=!0,(c||l)&&(a=!0)),I&&(m?(o=o.add(m),i=A?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{aa:o,la:s,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const i=e.la.L_();i.sort((l,u)=>function(d,m){const y=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return y(d)-y(m)}(l.type,u.type)||this._a(l.doc,u.doc)),this.Pa(s);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,i.length!==0||c?{snapshot:new Or(this.query,e.aa,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Pp,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ie(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new iv(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new rv(s))}),n}da(e){this.ia=e.ls,this.oa=ie();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Or.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Z1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ek{constructor(e){this.key=e,this.Ra=!1}}class tk{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new jr(a=>Ry(a),pc),this.fa=new Map,this.ga=new Set,this.pa=new Se(W.comparator),this.ya=new Map,this.wa=new Oh,this.Sa={},this.ba=new Map,this.Da=Dr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function nk(t,e){const n=dk(t);let s,r;const i=n.ma.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Aa();else{const o=await P1(n.localStore,pn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await sk(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Jy(n.remoteStore,o)}return r}async function sk(t,e,n,s,r){t.va=(h,d,m)=>async function(A,I,S,O){let j=I.view.ca(S);j.Zi&&(j=await wp(A.localStore,I.query,!1).then(({documents:me})=>I.view.ca(me,j)));const k=O&&O.targetChanges.get(I.targetId),de=I.view.applyChanges(j,A.isPrimaryClient,k);return Sp(A,I.targetId,de.Ta),de.snapshot}(t,h,d,m);const i=await wp(t.localStore,e,!0),o=new X1(e,i.ls),a=o.ca(i.documents),c=po.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Sp(t,n,l.Ta);const u=new Z1(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function rk(t,e){const n=se(t),s=n.ma.get(e),r=n.fa.get(s.targetId);if(r.length>1)return n.fa.set(s.targetId,r.filter(i=>!pc(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await du(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xy(n.remoteStore,s.targetId),fu(n,s.targetId)}).catch(uo)):(fu(n,s.targetId),await du(n.localStore,s.targetId,!0))}async function ik(t,e,n){const s=fk(t);try{const r=await function(o,a){const c=se(o),l=Be.now(),u=a.reduce((m,y)=>m.add(y.key),ie());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=Nn(),A=ie();return c.ss.getEntries(m,u).next(I=>{y=I,y.forEach((S,O)=>{O.isValidDocument()||(A=A.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,y)).next(I=>{h=I;const S=[];for(const O of a){const j=DC(O,h.get(O.key).overlayedDocument);j!=null&&S.push(new hs(O.key,j,_y(j.value.mapValue),Gt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,S,a)}).next(I=>{d=I;const S=I.applyToLocalDocumentSet(h,A);return c.documentOverlayCache.saveOverlays(m,I.batchId,S)})}).then(()=>({batchId:d.batchId,changes:Sy(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Se(ue)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(s,r.batchId,n),await go(s,r.changes),await Ic(s.remoteStore)}catch(r){const i=Fh(r,"Failed to persist write");n.reject(i)}}async function ov(t,e){const n=se(t);try{const s=await T1(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ya.get(i);o&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ra=!0:r.modifiedDocuments.size>0?Pe(o.Ra):r.removedDocuments.size>0&&(Pe(o.Ra),o.Ra=!1))}),await go(n,s,e)}catch(s){await uo(s)}}function bp(t,e,n){const s=se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=se(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&jh(c)}(s.eventManager,e),r.length&&s.Va.a_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ok(t,e,n){const s=se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ya.get(e),i=r&&r.key;if(i){let o=new Se(W.comparator);o=o.insert(i,lt.newNoDocument(i,ee.min()));const a=ie().add(i),c=new yc(ee.min(),new Map,new Se(ue),o,a);await ov(s,c),s.pa=s.pa.remove(i),s.ya.delete(e),Hh(s)}else await du(s.localStore,e,!1).then(()=>fu(s,e,n)).catch(uo)}async function ak(t,e){const n=se(t),s=e.batch.batchId;try{const r=await w1(n.localStore,e);cv(n,s,null),av(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await go(n,r)}catch(r){await uo(r)}}async function ck(t,e,n){const s=se(t);try{const r=await function(o,a){const c=se(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Pe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(s.localStore,e);cv(s,e,n),av(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await go(s,r)}catch(r){await uo(r)}}function av(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function cv(t,e,n){const s=se(t);let r=s.Sa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Sa[s.currentUser.toKey()]=r}}function fu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||lv(t,s)})}function lv(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Xy(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Hh(t))}function Sp(t,e,n){for(const s of n)s instanceof rv?(t.wa.addReference(s.key,e),lk(t,s)):s instanceof iv?(B("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||lv(t,s.key)):X()}function lk(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(B("SyncEngine","New document in limbo: "+n),t.ga.add(s),Hh(t))}function Hh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new W(Re.fromString(e)),s=t.Da.next();t.ya.set(s,new ek(n)),t.pa=t.pa.insert(n,s),Jy(t.remoteStore,new Qn(pn(fc(n.path)),s,"TargetPurposeLimboResolution",wh._e))}}async function go(t,e,n){const s=se(t),r=[],i=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,c)=>{o.push(s.va(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=xh.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Va.a_(r),await async function(c,l){const u=se(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(l,d=>P.forEach(d.ki,m=>u.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>P.forEach(d.qi,m=>u.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!ho(h))throw h;B("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const m=u.ts.get(d),y=m.snapshotVersion,A=m.withLastLimboFreeSnapshotVersion(y);u.ts=u.ts.insert(d,A)}}}(s.localStore,i))}async function uk(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await zy(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new F(w.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await go(n,s._s)}}function hk(t,e){const n=se(t),s=n.ya.get(e);if(s&&s.Ra)return ie().add(s.key);{let r=ie();const i=n.fa.get(e);if(!i)return r;for(const o of i){const a=n.ma.get(o);r=r.unionWith(a.view.ua)}return r}}function dk(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ov.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ok.bind(null,e),e.Va.a_=Y1.bind(null,e.eventManager),e.Va.Fa=J1.bind(null,e.eventManager),e}function fk(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ak.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ck.bind(null,e),e}class Cp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return I1(this.persistence,new v1,e.initialUser,this.serializer)}createPersistence(e){return new g1(Nh.jr,this.serializer)}createSharedClientState(e){return new S1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uk.bind(null,this.syncEngine),await z1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Q1}()}createDatastore(e){const n=vc(e.databaseInfo.databaseId),s=function(i){return new O1(i)}(e.databaseInfo);return function(i,o,a,c){return new V1(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new M1(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>bp(this.syncEngine,n,0),function(){return Ap.D()?new Ap:new C1}())}createSyncEngine(e,n){return function(r,i,o,a,c,l,u){const h=new tk(r,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=se(n);B("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await mo(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class Wh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class mk{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ct.UNAUTHENTICATED,this.clientId=py.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Fh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ul(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await zy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _k(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Rp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Rp(e.remoteStore,i)),t._onlineComponents=e}function gk(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function _k(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!gk(n))throw n;br("Error using user provided cache. Falling back to memory cache: "+n),await ul(t,new Cp)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await ul(t,new Cp);return t._offlineComponents}async function uv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await kp(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await kp(t,new pk))),t._onlineComponents}function yk(t){return uv(t).then(e=>e.syncEngine)}async function ba(t){const e=await uv(t),n=e.eventManager;return n.onListen=nk.bind(null,e.syncEngine),n.onUnlisten=rk.bind(null,e.syncEngine),n}function vk(t,e,n={}){const s=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Wh({next:d=>{o.enqueueAndForget(()=>Bh(i,h));const m=d.docs.has(a);!m&&d.fromCache?l.reject(new F(w.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?l.reject(new F(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new qh(fc(a.path),u,{includeMetadataChanges:!0,J_:!0});return $h(i,h)}(await ba(t),t.asyncQueue,e,n,s)),s.promise}function Ek(t,e,n={}){const s=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Wh({next:d=>{o.enqueueAndForget(()=>Bh(i,h)),d.fromCache&&c.source==="server"?l.reject(new F(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new qh(a,u,{includeMetadataChanges:!0,J_:!0});return $h(i,h)}(await ba(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function hv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Dp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function dv(t,e,n){if(!n)throw new F(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ik(t,e,n,s){if(e===!0&&s===!0)throw new F(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Op(t){if(!W.isDocumentKey(t))throw new F(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Np(t){if(W.isDocumentKey(t))throw new F(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wc(t);throw new F(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class xp{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new F(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ik("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xp(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new BS;switch(s.type){case"firstParty":return new WS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new F(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Dp.get(n);s&&(B("ComponentProvider","Removing Datastore"),Dp.delete(n),s.terminate())}(this),Promise.resolve()}}function wk(t,e,n,s={}){var r;const i=(t=xt(t,Tc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&br("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=ct.MOCK_USER;else{a=Qm(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new F(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ct(l)}t._authCredentials=new jS(new fy(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ds{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class pt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class es extends ds{constructor(e,n,s){super(e,n,fc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new W(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function Ue(t,e,...n){if(t=be(t),dv("collection","path",e),t instanceof Tc){const s=Re.fromString(e,...n);return Np(s),new es(t,null,s)}{if(!(t instanceof pt||t instanceof es))throw new F(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Re.fromString(e,...n));return Np(s),new es(t.firestore,null,s)}}function je(t,e,...n){if(t=be(t),arguments.length===1&&(e=py.newId()),dv("doc","path",e),t instanceof Tc){const s=Re.fromString(e,...n);return Op(s),new pt(t,null,new W(s))}{if(!(t instanceof pt||t instanceof es))throw new F(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Re.fromString(e,...n));return Op(s),new pt(t.firestore,t instanceof es?t.converter:null,new W(s))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Tk{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Qy(this,"async_queue_retry"),this.iu=()=>{const n=ll();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=ll();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=ll();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Cn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ho(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw On("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const r=Uh.createAndSchedule(this,e,n,s,i=>this.au(i));return this.Xa.push(r),r}su(){this.eu&&X()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Vp(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class as extends Tc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new Tk}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fv(this),this._firestoreClient.terminate()}}function He(t,e){const n=typeof t=="object"?t:Lu(),s=typeof t=="string"?t:e||"(default)",r=Wa(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Km("firestore");i&&wk(r,...i)}return r}function Ac(t){return t._firestoreClient||fv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fv(t){var e,n,s;const r=t._freezeSettings(),i=function(a,c,l,u){return new sC(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,hv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new mk(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nr(gt.fromBase64String(e))}catch(n){throw new F(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nr(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Rc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class _o{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ak=/^__.*__$/;class Rk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new fo(e,this.data,n,this.fieldTransforms)}}class pv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new hs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class zh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new zh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Au(e),r}Ru(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Pu(),r}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Sa(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(mv(this.Iu)&&Ak.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Pk{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||vc(e)}pu(e,n,s,r=!1){return new zh({Iu:e,methodName:n,gu:s,path:tt.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gh(t){const e=t._freezeSettings(),n=vc(t._databaseId);return new Pk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bk(t,e,n,s,r,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,r);Yh("Data must be an object, but it was:",o,s);const a=gv(s,o);let c,l;if(i.merge)c=new Nt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=pu(e,h,n);if(!o.contains(d))throw new F(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);yv(u,d)||u.push(d)}c=new Nt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Rk(new bt(a),c,l)}class Pc extends _o{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pc}}class Qh extends _o{_toFieldTransform(e){return new bC(e.path,new qi)}isEqual(e){return e instanceof Qh}}function Sk(t,e,n,s){const r=t.pu(1,e,n);Yh("Data must be an object, but it was:",r,s);const i=[],o=bt.empty();js(s,(c,l)=>{const u=Jh(e,c,n);l=be(l);const h=r.Ru(u);if(l instanceof Pc)i.push(u);else{const d=yo(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Nt(i);return new pv(o,a,r.fieldTransforms)}function Ck(t,e,n,s,r,i){const o=t.pu(1,e,n),a=[pu(e,s,n)],c=[r];if(i.length%2!=0)throw new F(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(pu(e,i[d])),c.push(i[d+1]);const l=[],u=bt.empty();for(let d=a.length-1;d>=0;--d)if(!yv(l,a[d])){const m=a[d];let y=c[d];y=be(y);const A=o.Ru(m);if(y instanceof Pc)l.push(m);else{const I=yo(y,A);I!=null&&(l.push(m),u.set(m,I))}}const h=new Nt(l);return new pv(u,h,o.fieldTransforms)}function kk(t,e,n,s=!1){return yo(n,t.pu(s?4:3,e))}function yo(t,e){if(_v(t=be(t)))return Yh("Unsupported field value:",e,t),gv(t,e);if(t instanceof _o)return function(s,r){if(!mv(r.Iu))throw r.mu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.mu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=yo(a,r.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=be(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return AC(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Be.fromDate(s);return{timestampValue:Ra(r.serializer,i)}}if(s instanceof Be){const i=new Be(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ra(r.serializer,i)}}if(s instanceof Kh)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Nr)return{bytesValue:By(r.serializer,s._byteString)};if(s instanceof pt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dh(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.mu(`Unsupported field value: ${wc(s)}`)}(t,e)}function gv(t,e){const n={};return my(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):js(t,(s,r)=>{const i=yo(r,e.Eu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function _v(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Kh||t instanceof Nr||t instanceof pt||t instanceof _o)}function Yh(t,e,n){if(!_v(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=wc(n);throw s==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+s)}}function pu(t,e,n){if((e=be(e))instanceof Rc)return e._internalPath;if(typeof e=="string")return Jh(t,e);throw Sa("Field path arguments must be of type string or ",t,!1,void 0,n)}const Dk=new RegExp("[~\\*/\\[\\]]");function Jh(t,e,n){if(e.search(Dk)>=0)throw Sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rc(...e.split("."))._internalPath}catch{throw Sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sa(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new F(w.INVALID_ARGUMENT,a+t+c)}function yv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class vv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ok extends vv{data(){return super.data()}}function bc(t,e){return typeof e=="string"?Jh(t,e):e instanceof Rc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ev(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xh{}class Iv extends Xh{}function Qe(t,e,...n){let s=[];e instanceof Xh&&s.push(e),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof Zh).length,a=i.filter(c=>c instanceof Sc).length;if(o>1||o>0&&a>0)throw new F(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Sc extends Iv{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Sc(e,n,s)}_apply(e){const n=this._parse(e);return wv(e._query,n),new ds(e.firestore,e.converter,ou(e._query,n))}_parse(e){const n=Gh(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new F(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Mp(h,u);const m=[];for(const y of h)m.push(Lp(c,i,y));d={arrayValue:{values:m}}}else d=Lp(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Mp(h,u),d=kk(a,o,h,u==="in"||u==="not-in");return Me.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _t(t,e,n){const s=e,r=bc("where",t);return Sc._create(r,s,n)}class Zh extends Xh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)wv(o,c),o=ou(o,c)}(e._query,n),new ds(e.firestore,e.converter,ou(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ed extends Iv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ed(e,n)}_apply(e){const n=function(r,i,o){if(r.startAt!==null)throw new F(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new F(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ji(i,o)}(e._query,this._field,this._direction);return new ds(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Br(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Hs(t,e="asc"){const n=e,s=bc("orderBy",t);return ed._create(s,n)}function Lp(t,e,n){if(typeof(n=be(n))=="string"){if(n==="")throw new F(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ay(e)&&n.indexOf("/")!==-1)throw new F(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Re.fromString(n));if(!W.isDocumentKey(s))throw new F(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ip(t,new W(s))}if(n instanceof pt)return ip(t,n._key);throw new F(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wc(n)}.`)}function Mp(t,e){if(!Array.isArray(t)||t.length===0)throw new F(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wv(t,e){const n=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Nk{convertValue(e,n="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return js(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Kh(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ah(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Fi(e));default:return null}}convertTimestamp(e){const n=is(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Re.fromString(e);Pe(Ky(s));const r=new $i(s.get(1),s.get(3)),i=new W(s.popFirst(5));return r.isEqual(n)||On(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function xk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tv extends vv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(bc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Yo extends Tv{data(e={}){return super.data(e)}}class Av{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new li(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Yo(this._firestore,this._userDataWriter,s.key,s,new li(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new Yo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new li(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Yo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new li(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Vk(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Vk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function $t(t){t=xt(t,pt);const e=xt(t.firestore,as);return vk(Ac(e),t._key).then(n=>Pv(e,t,n))}class td extends Nk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function Ye(t){t=xt(t,ds);const e=xt(t.firestore,as),n=Ac(e),s=new td(e);return Ev(t._query),Ek(n,t._query).then(r=>new Av(e,s,t,r))}function Rv(t,e,n){t=xt(t,pt);const s=xt(t.firestore,as),r=xk(t.converter,e,n);return sd(s,[bk(Gh(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Gt.none())])}function nd(t,e,n,...s){t=xt(t,pt);const r=xt(t.firestore,as),i=Gh(r);let o;return o=typeof(e=be(e))=="string"||e instanceof Rc?Ck(i,"updateDoc",t._key,e,n,s):Sk(i,"updateDoc",t._key,e),sd(r,[o.toMutation(t._key,Gt.exists(!0))])}function Lk(t){return sd(xt(t.firestore,as),[new Sh(t._key,Gt.none())])}function Mk(t,...e){var n,s,r;t=be(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Vp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof pt)l=xt(t.firestore,as),u=fc(t._key.path),c={next:h=>{e[o]&&e[o](Pv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=xt(t,ds);l=xt(h.firestore,as),u=h._query;const d=new td(l);c={next:m=>{e[o]&&e[o](new Av(l,d,h,m))},error:e[o+1],complete:e[o+2]},Ev(t._query)}return function(d,m,y,A){const I=new Wh(A),S=new qh(m,I,y);return d.asyncQueue.enqueueAndForget(async()=>$h(await ba(d),S)),()=>{I.Na(),d.asyncQueue.enqueueAndForget(async()=>Bh(await ba(d),S))}}(Ac(l),u,a,c)}function sd(t,e){return function(s,r){const i=new Cn;return s.asyncQueue.enqueueAndForget(async()=>ik(await yk(s),r,i)),i.promise}(Ac(t),e)}function Pv(t,e,n){const s=n.docs.get(e._key),r=new td(t);return new Tv(t,r,e._key,s,new li(n.hasPendingWrites,n.fromCache),e.converter)}function Up(){return new Qh("serverTimestamp")}(function(e,n=!0){(function(r){$r=r})($s),Ns(new ss("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new as(new qS(s.getProvider("auth-internal")),new zS(s.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new F(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(l.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),hn(tp,"4.3.2",e),hn(tp,"4.3.2","esm2017")})();const bv="/assets/logo_transparent-6f52b913.png";He(Fe);const Uk={name:"LogIn",data(){return{email:"",password:""}},methods:{login(){const t=ve();q0(t,this.email,this.password).then(()=>{alert("Successfully logged in"),this.$router.push({name:"HomePage"})}).catch(e=>{alert(e.message)})},goToSignUp(){this.$router.push({name:"SignUpPage"})},goToForgetPassword(){this.$router.push({name:"PasswordRecoveryPage"})}}},Ws=t=>(yt("data-v-402061b2"),t=t(),vt(),t),Fk={id:"mainContainer"},$k=Ws(()=>f("div",{id:"imageContainer"},[f("img",{src:bv,alt:"login picture"})],-1)),Bk={id:"formContainer"},jk=Ws(()=>f("div",{id:"headerText"},[f("h1",null,"Log In")],-1)),qk={class:"inputFields"},Hk=Ws(()=>f("label",{for:"email"},"Email",-1)),Wk=Ws(()=>f("label",{for:"passwordInput"},"Your Password",-1)),Kk=Ws(()=>f("div",{id:"submitBtnContainer"},[f("button",{id:"loginbutton",type:"submit"},"Sign In")],-1)),zk={id:"loginPrompt"},Gk=Ws(()=>f("span",null,"New to our community?",-1)),Qk=Ws(()=>f("br",null,null,-1));function Yk(t,e,n,s,r,i){return V(),L("div",Fk,[$k,f("div",Bk,[jk,f("form",{id:"logInForm",onSubmit:e[3]||(e[3]=qa((...o)=>i.login&&i.login(...o),["prevent"]))},[f("div",qk,[Hk,Dt(f("input",{type:"text",id:"email","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),placeholder:"Enter your email",required:""},null,512),[[Wt,r.email]]),Wk,Dt(f("input",{type:"password",id:"passwordInput","onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o),placeholder:"Enter your password",required:""},null,512),[[Wt,r.password]]),f("button",{id:"forgetpw",onClick:e[2]||(e[2]=(...o)=>i.goToForgetPassword&&i.goToForgetPassword(...o)),type:"button"},"Forget your password?"),Kk])],32),f("div",zk,[Gk,Qk,f("button",{id:"createAccountBtn",type:"button",onClick:e[4]||(e[4]=(...o)=>i.goToSignUp&&i.goToSignUp(...o))},"Create an account")])])])}const Jk=ae(Uk,[["render",Yk],["__scopeId","data-v-402061b2"]]),Xk={name:"LogInPage",components:{LogIn:Jk}};function Zk(t,e,n,s,r,i){const o=G("LogIn");return V(),L("div",null,[U(o)])}const eD=ae(Xk,[["render",Zk]]);const tD={name:"SignUp",data(){return{email:"",password:"",name:"",bio:"",imageFile:null,imageUrl:null}},methods:{async isUsernameUnique(t){const e=He(),n=je(e,"usernames",t);return!(await $t(n)).exists()},triggerFileUpload(){this.$refs.imageUpload.click()},onImageSelected(t){if(this.imageFile=t.target.files[0],this.imageFile){const e=new FileReader;e.readAsDataURL(this.imageFile),e.onload=n=>{this.imageUrl=n.target.result}}else this.imageUrl=null},async uploadImage(t){if(!this.imageFile)return null;const e=u_(Nb,`profile_images/${t}`);return await c_(e,this.imageFile),l_(e)},async deleteImage(){this.$refs.imageUpload&&(this.$refs.imageUpload.value="");let t=document.getElementById("profilephoto");t&&(t.src="../assets/defaultProfile.png"),this.imageFile=null,this.imageUrl=null,console.log("Image reset to default successfully")},async register(){const t=ve();try{if(!await this.isUsernameUnique(this.name)){alert("Username is already taken. Please choose a different one.");return}const s=(await j0(t,this.email,this.password)).user,r=await this.uploadImage(this.name);await W0(s,{displayName:this.name,photoURL:r||s.photoURL});const i=He();await Rv(je(i,"usernames",this.name),{uid:s.uid,bio:this.bio,imageUrl:r,following:[],posts:[]}),alert("Successfully registered!"),this.$router.push({name:"LogInPage"})}catch(e){alert(e.message)}},goToLogIn(){this.$router.push({name:"LogInPage"})}}},fs=t=>(yt("data-v-123c3beb"),t=t(),vt(),t),nD={id:"mainContainer"},sD={id:"imageContainer"},rD=["src"],iD={id:"formContainer"},oD=fs(()=>f("div",{id:"headerText"},[f("h1",null,"Create an Account")],-1)),aD={class:"inputFields"},cD=fs(()=>f("label",{for:"userNameInput"},"What should we call you?",-1)),lD=fs(()=>f("label",{for:"emailInput"},"What's your email?",-1)),uD=fs(()=>f("label",{for:"passwordInput"},"Create a password",-1)),hD=fs(()=>f("label",{for:"bioInput"},"Tell us about yourself",-1)),dD=fs(()=>f("div",{id:"submitBtnContainer"},[f("button",{id:"submitAccountBtn",type:"submit"},"Create Account")],-1)),fD={id:"loginPrompt"},pD=fs(()=>f("span",null,"Already have an account?",-1)),mD=fs(()=>f("br",null,null,-1));function gD(t,e,n,s,r,i){return V(),L("div",nD,[f("div",sD,[f("img",{id:"profilephoto",src:r.imageUrl?r.imageUrl:"../assets/defaultProfile.png",alt:"Profile picture"},null,8,rD),f("input",{type:"file",id:"imageUpload",accept:"image/*",onChange:e[0]||(e[0]=(...o)=>i.onImageSelected&&i.onImageSelected(...o)),ref:"imageUpload",hidden:""},null,544),f("button",{type:"button",onClick:e[1]||(e[1]=(...o)=>i.triggerFileUpload&&i.triggerFileUpload(...o)),id:"uploadImageButton"},"Upload Image"),r.imageUrl?(V(),L("button",{key:0,type:"button",onClick:e[2]||(e[2]=(...o)=>i.deleteImage&&i.deleteImage(...o)),id:"deleteImageButton"},"Remove Image")):ns("",!0)]),f("div",iD,[oD,f("form",{id:"registrationForm",onSubmit:e[7]||(e[7]=qa((...o)=>i.register&&i.register(...o),["prevent"]))},[f("div",aD,[cD,Dt(f("input",{type:"text",id:"userNameInput","onUpdate:modelValue":e[3]||(e[3]=o=>r.name=o),pattern:"[a-zA-Z0-9._]+",title:"Letters, numbers, underscore and period are allowed",placeholder:"Enter your username",required:""},null,512),[[Wt,r.name]]),lD,Dt(f("input",{type:"email",id:"emailInput","onUpdate:modelValue":e[4]||(e[4]=o=>r.email=o),placeholder:"Enter your email address",required:""},null,512),[[Wt,r.email]]),uD,Dt(f("input",{type:"password",id:"passwordInput","onUpdate:modelValue":e[5]||(e[5]=o=>r.password=o),placeholder:"Enter your password",required:""},null,512),[[Wt,r.password]]),hD,Dt(f("textarea",{id:"bioInput","onUpdate:modelValue":e[6]||(e[6]=o=>r.bio=o),placeholder:"Enter your bio",required:""},null,512),[[Wt,r.bio]]),dD])],32),f("div",fD,[pD,mD,f("button",{id:"loginBtn",type:"button",onClick:e[8]||(e[8]=(...o)=>i.goToLogIn&&i.goToLogIn(...o))},"Log in")])])])}const _D=ae(tD,[["render",gD],["__scopeId","data-v-123c3beb"]]),yD={name:"SignUpPage",components:{SignUp:_D}};function vD(t,e,n,s,r,i){const o=G("SignUp");return V(),L("div",null,[U(o)])}const ED=ae(yD,[["render",vD]]);const ID={name:"ForgetPassword",data(){return{email:""}},methods:{resetPassword(){const t=ve();B0(t,this.email).then(()=>{alert("Link to reset your password has been sent to your email"),this.$router.push({name:"LogInPage"})}).catch(e=>{alert(e.message)})},goToLogIn(){this.$router.push({name:"LogInPage"})}}},rd=t=>(yt("data-v-a6820d9d"),t=t(),vt(),t),wD={id:"PasswordReset"},TD={id:"header"},AD=rd(()=>f("h1",null,"Reset Password",-1)),RD={class:"formField"},PD=rd(()=>f("label",{for:"email"},"Email",-1)),bD=rd(()=>f("button",{id:"resetButton",type:"submit"},"Send Password Reset Link",-1));function SD(t,e,n,s,r,i){return V(),L("div",wD,[f("div",TD,[f("button",{id:"back",class:"round",onClick:e[0]||(e[0]=(...o)=>i.goToLogIn&&i.goToLogIn(...o))},"‹"),AD]),f("form",{id:"resetForm",onSubmit:e[2]||(e[2]=qa((...o)=>i.resetPassword&&i.resetPassword(...o),["prevent"]))},[f("div",RD,[PD,Dt(f("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=o=>r.email=o),placeholder:"Enter your email here",required:""},null,512),[[Wt,r.email]])]),bD],32)])}const CD=ae(ID,[["render",SD],["__scopeId","data-v-a6820d9d"]]),kD={name:"PasswordRecoveryPage",components:{PasswordRecovery:CD}};function DD(t,e,n,s,r,i){const o=G("PasswordRecovery");return V(),L("div",null,[U(o)])}const OD=ae(kD,[["render",DD]]),ND="/assets/defaultProfile-6be0f302.png";const hl=He(Fe),xD=ve(),VD=Ya(Fe),LD={name:"CreatePost",props:{postId:String},data(){return{posttitle:"",typeofcuisine:"",pricepoint:"",address:"",caption:"",uid:"",postImageURL:"",isEditMode:!1,CreatedAt:Up()}},async created(){if(console.log("CreatePost created with postId:",this.postId),Et(xD,t=>{t&&(this.uid=t.uid)}),this.postId){this.isEditMode=!0;const t=je(hl,"Posts",this.postId),e=await $t(t);if(e.exists()){const n=e.data();this.populateFormData(n)}else console.error("No such document!")}},methods:{populateFormData(t){this.posttitle=t.Title,this.address=t.Address,this.typeofcuisine=t.typeofcuisine,this.pricepoint=t.PricePoint,this.caption=t.Caption,this.postImageURL=t.Image_URL},async savePost(){let t=this.$refs.uploadbutton,e=t.files.length>0?t.files[0]:null,n=this.postImageURL;try{let s;if(this.isEditMode&&this.postId)s=je(hl,"Posts",this.postId),e&&(n=await this.uploadToCloud(this.postId,e)),await nd(s,{Title:this.posttitle,Address:this.address,TypeOfCuisine:this.typeofcuisine,PricePoint:this.pricepoint,Caption:this.caption,Image_URL:n}),alert("Post updated!");else{if(!e){alert("Upload Image!");return}s=je(Ue(hl,"Posts")),n=await this.uploadToCloud(s.id,e),await Rv(s,{UserID:this.uid,Title:this.posttitle,Address:this.address,TypeOfCuisine:this.typeofcuisine,PricePoint:this.pricepoint,Caption:this.caption,Image_URL:n,CreatedAt:Up()}),alert("Post created!")}this.$router.push({name:"HomePage"})}catch(s){console.error("Error saving post: ",s),alert("Error saving post: "+s.message)}},async uploadToCloud(t,e){const n=u_(VD,"Posts/"+t);return await c_(n,e),await l_(n)},updatePostImage:async function(){console.log("updating post image");var t=new FileReader;try{var e=document.getElementById("uploadbutton");t.readAsDataURL(e.files[0]),t.onloadend=function(n){var s=document.getElementById("postphoto");s.src=n.target.result},alert("Post image displayed")}catch(n){alert("No post image found ",n),document.getElementById("postphoto").src="../assets/defaultPost.png"}},deletePostImage:function(){document.getElementById("uploadbutton").value==""?alert("Upload Image!"):(document.getElementById("uploadbutton").value="",document.getElementById("postphoto").src="../assets/defaultPost.png",alert("Post Image Successfully Removed"))},goToHomePage(){this.$router.push({name:"HomePage"})}}},MD={id:"postcreate"},UD=f("div",{id:"postheader"},[f("h2",null,"Create Post")],-1),FD={id:"container"},$D={id:"leftcontainer"},BD={id:"postphotoset"},jD=f("img",{id:"postphoto",src:ND,alt:"Post Photo"},null,-1),qD={id:"buttonsupdate"},HD=f("label",{for:"uploadbutton"},"Upload Image",-1),WD={id:"rightcontainer"},KD={class:"formli"},zD={class:"input-group"},GD=f("label",{for:"posttitle"},"Post Title",-1),QD={class:"input-group"},YD=f("label",{for:"address"},"Address",-1),JD={class:"input-group"},XD=f("label",{for:"typeofcuisine"},"Type of Cuisine",-1),ZD=bI('<option value="" selected hidden disabled>Select Type of Cuisine</option><option value="Local">Local</option><option value="Western">Western</option><option value="Korean">Korean</option><option value="Japanese">Japanese</option><option value="Others">Others</option>',6),eO=[ZD],tO={class:"input-group"},nO=f("label",{for:"pricepoint"},"Price Point",-1),sO=f("option",{value:"",selected:"",hidden:"",disabled:""},"Select price point",-1),rO=f("option",{value:"$"},"$",-1),iO=f("option",{value:"$$"},"$$",-1),oO=f("option",{value:"$$$"},"$$$",-1),aO=[sO,rO,iO,oO],cO=f("label",{for:"caption"},"How would you describe this restaurant?",-1),lO={id:"buttonsupdate"},uO=f("button",{id:"savebutton",type:"submit"},"Post",-1);function hO(t,e,n,s,r,i){return V(),L("div",MD,[UD,f("div",FD,[f("div",$D,[f("div",BD,[jD,f("div",qD,[HD,f("input",{type:"file",id:"uploadbutton",accept:"image/*",onChange:e[0]||(e[0]=(...o)=>i.updatePostImage&&i.updatePostImage(...o)),ref:"uploadbutton",hidden:""},null,544),f("button",{id:"deletebutton",type:"button",onClick:e[1]||(e[1]=(...o)=>i.deletePostImage&&i.deletePostImage(...o))},"Remove Image")])])]),f("div",WD,[f("form",{id:"myform",onSubmit:e[8]||(e[8]=qa((...o)=>i.savePost&&i.savePost(...o),["prevent"]))},[f("div",KD,[f("div",zD,[GD,Dt(f("input",{type:"text",id:"posttitle","onUpdate:modelValue":e[2]||(e[2]=o=>r.posttitle=o),placeholder:"Enter Post Title",required:""},null,512),[[Wt,r.posttitle]])]),f("div",QD,[YD,Dt(f("input",{type:"text",id:"address","onUpdate:modelValue":e[3]||(e[3]=o=>r.address=o),placeholder:"Enter the food place's address",required:""},null,512),[[Wt,r.address]])]),f("div",JD,[XD,Dt(f("select",{id:"typeofcuisine","onUpdate:modelValue":e[4]||(e[4]=o=>r.typeofcuisine=o),name:"typeofcuisine",required:""},eO,512),[[Hd,r.typeofcuisine]])]),f("div",tO,[nO,Dt(f("select",{id:"pricepoint","onUpdate:modelValue":e[5]||(e[5]=o=>r.pricepoint=o),name:"pricepoint",required:""},aO,512),[[Hd,r.pricepoint]])]),cO,Dt(f("textarea",{id:"caption","onUpdate:modelValue":e[6]||(e[6]=o=>r.caption=o),placeholder:"Enter a description of the restaurant",required:""},null,512),[[Wt,r.caption]]),f("div",lO,[f("button",{id:"cancelbutton",type:"button",onClick:e[7]||(e[7]=(...o)=>i.goToHomePage&&i.goToHomePage(...o))},"Cancel"),uO])])],32)])])])}const dO=ae(LD,[["render",hO]]),fO={name:"CreatePostPage",components:{CreatePost:dO},props:{postId:String},data(){return{currentPostId:""}},mounted(){console.log("Received postId:",this.postId),this.currentPostId=this.postId}};function pO(t,e,n,s,r,i){const o=G("CreatePost");return V(),L("div",null,[U(o,{postId:n.postId},null,8,["postId"])])}const mO=ae(fO,[["render",pO]]);const gO={data(){return{searchInput:""}},methods:{routeToSearch(){this.$router.push({path:"/userquerydisplay",query:{q:this.searchInput}}),this.searchInput=""},routeToPost(){this.$router.push({name:"CreatePostPage"})},logout(){const t=ve();G0(t).then(()=>{this.$router.push({name:"LogInPage"})}).catch(e=>{console.error("Logout failed",e),alert("Failed to log out. Please try again.")})}}},_O=t=>(yt("data-v-0c68329d"),t=t(),vt(),t),yO={id:"main"},vO=_O(()=>f("img",{class:"logo",src:bv,alt:"logo"},null,-1)),EO={id:"nav"},IO={id:"nav-search"},wO={id:"post"};function TO(t,e,n,s,r,i){const o=G("router-link");return V(),L("div",yO,[vO,f("div",EO,[U(o,{to:"HomePage",class:"routerlink",style:{"margin-right":"1vw"}},{default:Oe(()=>[Ne(" Discover ")]),_:1}),U(o,{to:"OwnProfilePage",class:"routerlink",style:{"margin-right":"1vw"}},{default:Oe(()=>[Ne(" Profile ")]),_:1}),f("button",{class:"logout-button",onClick:e[0]||(e[0]=(...a)=>i.logout&&i.logout(...a))}," Logout ")]),f("div",IO,[Dt(f("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>r.searchInput=a),type:"text",placeholder:"🔍 search for friends"},null,512),[[Wt,r.searchInput]]),Ne("  "),f("button",{class:"btn",onClick:e[2]||(e[2]=(...a)=>i.routeToSearch&&i.routeToSearch(...a)),role:"link"}," search"),Ne("       ")]),f("div",wO,[f("button",{class:"btn",onClick:e[3]||(e[3]=(...a)=>i.routeToPost&&i.routeToPost(...a))}," Post ")])])}const En=ae(gO,[["render",TO],["__scopeId","data-v-0c68329d"]]);const dl=He(Fe),AO=ve(),RO={name:"DiscoveryFeed",data(){return{relevantPosts:[]}},props:{uid:String,type:String},created(){console.log("created "+this.uid),this.fetchRelevantPosts(this.uid)},methods:{async fetchRelevantPosts(t){if(!t){console.error("UID is undefined");return}AO.currentUser;const e=Ue(dl,"usernames"),n=Qe(e,_t("uid","==",t)),s=await Ye(n);if(s.empty){console.log(`No usernames found for UID: ${t}`);return}const r=s.docs[0];console.log("Username document retrieved");const i=r.data().following;console.log("Retreived:"+i);const o=i.map(h=>{const d=je(dl,"usernames",h);return $t(d)}),c=(await Promise.all(o)).map(h=>h.exists()?h.data().uid:(console.error(`No document found for username: ${username}`),null)).filter(h=>h!==null);console.log("Retreived:"+c);const l=Qe(Ue(dl,"Posts"),Hs("CreatedAt","desc"));(await Ye(l)).forEach(h=>{const d=h.data();c.includes(d.UserID)&&this.relevantPosts.push({id:h.id,...d})}),console.log("Stored:"+post)}}},PO={class:"discovery-feed"},bO=["src"],SO={class:"caption"},CO={class:"description"};function kO(t,e,n,s,r,i){return V(),L("div",PO,[(V(!0),L($e,null,Vn(r.relevantPosts,o=>(V(),L("div",{key:o.id,class:"post"},[f("img",{src:o.Image_URL,alt:"Post image",class:"img",loading:"lazy"},null,8,bO),f("div",SO,J(o.Title),1),f("div",CO,[f("p",null,J(o.Caption),1),f("p",null,"Cuisine: "+J(o.TypeOfCuisine),1),f("p",null,"Location: "+J(o.Address),1),f("p",null,"Price: "+J(o.PricePoint),1)])]))),128))])}const DO=ae(RO,[["render",kO],["__scopeId","data-v-47048de0"]]);const OO={name:"CuisineBar",data(){return{user:!1}}},NO={class:"cuisine-bar"};function xO(t,e,n,s,r,i){const o=G("router-link");return V(),L("div",NO,[U(o,{to:"/Japanese",class:"cuisine-bar-button"},{default:Oe(()=>[Ne("Japanese")]),_:1}),U(o,{to:"/Western",class:"cuisine-bar-button"},{default:Oe(()=>[Ne("Western")]),_:1}),U(o,{to:"/Korean",class:"cuisine-bar-button"},{default:Oe(()=>[Ne("Korean")]),_:1}),U(o,{to:"/Local",class:"cuisine-bar-button"},{default:Oe(()=>[Ne("Local")]),_:1}),U(o,{to:"/Others",class:"cuisine-bar-button"},{default:Oe(()=>[Ne("Others")]),_:1})])}const Hr=ae(OO,[["render",xO]]);const VO={name:"HomePage",components:{NavBar:En,DiscoveryFeed:DO,CuisineBar:Hr},data(){return{docID:"self",user:!1}},created(){const t=ve();Et(t,e=>{e&&(this.user=e,console.log("Discovery Page printing userID: "+this.user.uid))})}},Cc=t=>(yt("data-v-c84a0524"),t=t(),vt(),t),LO={key:0},MO={class:"navbar-container"},UO={class:"main"},FO={class:"cuisine-container"},$O=Cc(()=>f("br",null,null,-1)),BO=Cc(()=>f("br",null,null,-1)),jO=Cc(()=>f("h1",null,"What are your friends eating",-1)),qO={class:"posts-container"},HO=Cc(()=>f("h5",null,"Discovery Page",-1)),WO={key:1};function KO(t,e,n,s,r,i){const o=G("NavBar"),a=G("CuisineBar"),c=G("DiscoveryFeed"),l=G("router-link");return r.user?(V(),L("div",LO,[f("div",MO,[U(o,{style:{"align-items":"center"}})]),f("div",UO,[f("div",FO,[U(a,{style:{"align-items":"center"}})]),$O,BO,jO,f("div",qO,[U(c,{uid:r.user.uid,type:"self"},null,8,["uid"])]),HO])])):(V(),L("div",WO,[U(l,{to:{name:"LogInPage"}},{default:Oe(()=>[Ne(" Go Back to Login ")]),_:1})]))}const zO=ae(VO,[["render",KO],["__scopeId","data-v-c84a0524"]]);const fl=He(Fe),GO=ve(),QO={name:"JapaneseDiscoveryFeed",data(){return{relevantPosts:[]}},props:{uid:String,type:String},created(){console.log("created "+this.uid),this.fetchRelevantPosts(this.uid)},methods:{async fetchRelevantPosts(t){if(!t){console.error("UID is undefined");return}GO.currentUser;const e=Ue(fl,"usernames"),n=Qe(e,_t("uid","==",t)),s=await Ye(n);if(s.empty){console.log(`No usernames found for UID: ${t}`);return}const r=s.docs[0];console.log("Username document retrieved");const i=r.data().following;console.log("Retreived:"+i);const o=i.map(h=>{const d=je(fl,"usernames",h);return $t(d)}),c=(await Promise.all(o)).map(h=>h.exists()?h.data().uid:(console.error(`No document found for username: ${username}`),null)).filter(h=>h!==null);console.log("Retreived:"+c);const l=Qe(Ue(fl,"Posts"),_t("TypeOfCuisine","==","Japanese"),Hs("CreatedAt","desc"));(await Ye(l)).forEach(h=>{const d=h.data();c.includes(d.UserID)&&this.relevantPosts.push({id:h.id,...d})}),console.log("Stored:"+post)}}},YO={class:"discovery-feed"},JO=["src"],XO={class:"caption"},ZO={class:"description"};function eN(t,e,n,s,r,i){return V(),L("div",YO,[(V(!0),L($e,null,Vn(r.relevantPosts,o=>(V(),L("div",{key:o.id,class:"post"},[f("img",{src:o.Image_URL,alt:"Post image",class:"img",loading:"lazy"},null,8,JO),f("div",XO,J(o.Title),1),f("div",ZO,[f("p",null,J(o.Caption),1),f("p",null,"Cuisine: "+J(o.TypeOfCuisine),1),f("p",null,"Location: "+J(o.Address),1),f("p",null,"Price: "+J(o.PricePoint),1)])]))),128))])}const tN=ae(QO,[["render",eN],["__scopeId","data-v-00d97884"]]);const nN={name:"Japanese",components:{NavBar:En,JapaneseDiscoveryFeed:tN,CuisineBar:Hr},data(){return{docID:"self",user:!1}},created(){const t=ve();Et(t,e=>{e&&(this.user=e,console.log("Discovery Page printing userID: "+this.user.uid))})}},kc=t=>(yt("data-v-f16574c1"),t=t(),vt(),t),sN={key:0},rN={class:"navbar-container"},iN={class:"main"},oN={class:"cuisine-container"},aN=kc(()=>f("br",null,null,-1)),cN=kc(()=>f("br",null,null,-1)),lN=kc(()=>f("h1",null,"Japanese Cuisine",-1)),uN={class:"posts-container"},hN=kc(()=>f("h5",null,"Japenese Cuisine",-1)),dN={key:1};function fN(t,e,n,s,r,i){const o=G("NavBar"),a=G("CuisineBar"),c=G("JapaneseDiscoveryFeed"),l=G("router-link");return r.user?(V(),L("div",sN,[f("div",rN,[U(o,{style:{"align-items":"center"}})]),f("div",iN,[f("div",oN,[U(a,{style:{"align-items":"center"}})]),aN,cN,lN,f("div",uN,[U(c,{uid:r.user.uid,type:"self"},null,8,["uid"])]),hN])])):(V(),L("div",dN,[U(l,{to:{name:"LogInPage"}},{default:Oe(()=>[Ne(" Go Back to Login ")]),_:1})]))}const pN=ae(nN,[["render",fN],["__scopeId","data-v-f16574c1"]]);const pl=He(Fe),mN=ve(),gN={name:"KoreanDiscoveryFeed",data(){return{relevantPosts:[]}},props:{uid:String,type:String},created(){console.log("created "+this.uid),this.fetchRelevantPosts(this.uid)},methods:{async fetchRelevantPosts(t){if(!t){console.error("UID is undefined");return}mN.currentUser;const e=Ue(pl,"usernames"),n=Qe(e,_t("uid","==",t)),s=await Ye(n);if(s.empty){console.log(`No usernames found for UID: ${t}`);return}const r=s.docs[0];console.log("Username document retrieved");const i=r.data().following;console.log("Retreived:"+i);const o=i.map(h=>{const d=je(pl,"usernames",h);return $t(d)}),c=(await Promise.all(o)).map(h=>h.exists()?h.data().uid:(console.error(`No document found for username: ${username}`),null)).filter(h=>h!==null);console.log("Retreived:"+c);const l=Qe(Ue(pl,"Posts"),_t("TypeOfCuisine","==","Korean"),Hs("CreatedAt","desc"));(await Ye(l)).forEach(h=>{const d=h.data();c.includes(d.UserID)&&this.relevantPosts.push({id:h.id,...d})}),console.log("Stored:"+post)}}},_N={class:"discovery-feed"},yN=["src"],vN={class:"caption"},EN={class:"description"};function IN(t,e,n,s,r,i){return V(),L("div",_N,[(V(!0),L($e,null,Vn(r.relevantPosts,o=>(V(),L("div",{key:o.id,class:"post"},[f("img",{src:o.Image_URL,alt:"Post image",class:"img",loading:"lazy"},null,8,yN),f("div",vN,J(o.Title),1),f("div",EN,[f("p",null,J(o.Caption),1),f("p",null,"Cuisine: "+J(o.TypeOfCuisine),1),f("p",null,"Location: "+J(o.Address),1),f("p",null,"Price: "+J(o.PricePoint),1)])]))),128))])}const wN=ae(gN,[["render",IN],["__scopeId","data-v-91e72918"]]);const TN={name:"Korean",components:{NavBar:En,KoreanDiscoveryFeed:wN,CuisineBar:Hr},data(){return{docID:"self",user:!1}},created(){const t=ve();Et(t,e=>{e&&(this.user=e,console.log("Discovery Page printing userID: "+this.user.uid))})}},Dc=t=>(yt("data-v-48e1d773"),t=t(),vt(),t),AN={key:0},RN={class:"navbar-container"},PN={class:"main"},bN={class:"cuisine-container"},SN=Dc(()=>f("br",null,null,-1)),CN=Dc(()=>f("br",null,null,-1)),kN=Dc(()=>f("h1",null,"Korean Cuisine",-1)),DN={class:"posts-container"},ON=Dc(()=>f("h5",null,"Korean Cuisine",-1)),NN={key:1};function xN(t,e,n,s,r,i){const o=G("NavBar"),a=G("CuisineBar"),c=G("KoreanDiscoveryFeed"),l=G("router-link");return r.user?(V(),L("div",AN,[f("div",RN,[U(o,{style:{"align-items":"center"}})]),f("div",PN,[f("div",bN,[U(a,{style:{"align-items":"center"}})]),SN,CN,kN,f("div",DN,[U(c,{uid:r.user.uid,type:"self"},null,8,["uid"])]),ON])])):(V(),L("div",NN,[U(l,{to:{name:"LogInPage"}},{default:Oe(()=>[Ne(" Go Back to Login ")]),_:1})]))}const VN=ae(TN,[["render",xN],["__scopeId","data-v-48e1d773"]]);const ml=He(Fe),LN=ve(),MN={name:"WesternDiscoveryFeed",data(){return{relevantPosts:[]}},props:{uid:String,type:String},created(){console.log("created "+this.uid),this.fetchRelevantPosts(this.uid)},methods:{async fetchRelevantPosts(t){if(!t){console.error("UID is undefined");return}LN.currentUser;const e=Ue(ml,"usernames"),n=Qe(e,_t("uid","==",t)),s=await Ye(n);if(s.empty){console.log(`No usernames found for UID: ${t}`);return}const r=s.docs[0];console.log("Username document retrieved");const i=r.data().following;console.log("Retreived:"+i);const o=i.map(h=>{const d=je(ml,"usernames",h);return $t(d)}),c=(await Promise.all(o)).map(h=>h.exists()?h.data().uid:(console.error(`No document found for username: ${username}`),null)).filter(h=>h!==null);console.log("Retreived:"+c);const l=Qe(Ue(ml,"Posts"),_t("TypeOfCuisine","==","Western"),Hs("CreatedAt","desc"));(await Ye(l)).forEach(h=>{const d=h.data();c.includes(d.UserID)&&this.relevantPosts.push({id:h.id,...d})}),console.log("Stored:"+post)}}},UN={class:"discovery-feed"},FN=["src"],$N={class:"caption"},BN={class:"description"};function jN(t,e,n,s,r,i){return V(),L("div",UN,[(V(!0),L($e,null,Vn(r.relevantPosts,o=>(V(),L("div",{key:o.id,class:"post"},[f("img",{src:o.Image_URL,alt:"Post image",class:"img",loading:"lazy"},null,8,FN),f("div",$N,J(o.Title),1),f("div",BN,[f("p",null,J(o.Caption),1),f("p",null,"Cuisine: "+J(o.TypeOfCuisine),1),f("p",null,"Location: "+J(o.Address),1),f("p",null,"Price: "+J(o.PricePoint),1)])]))),128))])}const qN=ae(MN,[["render",jN],["__scopeId","data-v-551ec245"]]);const HN={name:"Western",components:{NavBar:En,WesternDiscoveryFeed:qN,CuisineBar:Hr},data(){return{docID:"self",user:!1}},created(){const t=ve();Et(t,e=>{e&&(this.user=e,console.log("Discovery Page printing userID: "+this.user.uid))})}},Oc=t=>(yt("data-v-05df75db"),t=t(),vt(),t),WN={key:0},KN={class:"navbar-container"},zN={class:"main"},GN={class:"cuisine-container"},QN=Oc(()=>f("br",null,null,-1)),YN=Oc(()=>f("br",null,null,-1)),JN=Oc(()=>f("h1",null,"Western Cuisine",-1)),XN={class:"posts-container"},ZN=Oc(()=>f("h5",null,"Western Cuisine",-1)),ex={key:1};function tx(t,e,n,s,r,i){const o=G("NavBar"),a=G("CuisineBar"),c=G("WesternDiscoveryFeed"),l=G("router-link");return r.user?(V(),L("div",WN,[f("div",KN,[U(o,{style:{"align-items":"center"}})]),f("div",zN,[f("div",GN,[U(a,{style:{"align-items":"center"}})]),QN,YN,JN,f("div",XN,[U(c,{uid:r.user.uid,type:"self"},null,8,["uid"])]),ZN])])):(V(),L("div",ex,[U(l,{to:{name:"LogInPage"}},{default:Oe(()=>[Ne(" Go Back to Login ")]),_:1})]))}const nx=ae(HN,[["render",tx],["__scopeId","data-v-05df75db"]]);const gl=He(Fe),sx=ve(),rx={name:"LocalDiscoveryFeed",data(){return{relevantPosts:[]}},props:{uid:String,type:String},created(){console.log("created "+this.uid),this.fetchRelevantPosts(this.uid)},methods:{async fetchRelevantPosts(t){if(!t){console.error("UID is undefined");return}sx.currentUser;const e=Ue(gl,"usernames"),n=Qe(e,_t("uid","==",t)),s=await Ye(n);if(s.empty){console.log(`No usernames found for UID: ${t}`);return}const r=s.docs[0];console.log("Username document retrieved");const i=r.data().following;console.log("Retreived:"+i);const o=i.map(h=>{const d=je(gl,"usernames",h);return $t(d)}),c=(await Promise.all(o)).map(h=>h.exists()?h.data().uid:(console.error(`No document found for username: ${username}`),null)).filter(h=>h!==null);console.log("Retreived:"+c);const l=Qe(Ue(gl,"Posts"),_t("TypeOfCuisine","==","Local"),Hs("CreatedAt","desc"));(await Ye(l)).forEach(h=>{const d=h.data();c.includes(d.UserID)&&this.relevantPosts.push({id:h.id,...d})}),console.log("Stored:"+post)}}},ix={class:"discovery-feed"},ox=["src"],ax={class:"caption"},cx={class:"description"};function lx(t,e,n,s,r,i){return V(),L("div",ix,[(V(!0),L($e,null,Vn(r.relevantPosts,o=>(V(),L("div",{key:o.id,class:"post"},[f("img",{src:o.Image_URL,alt:"Post image",class:"img",loading:"lazy"},null,8,ox),f("div",ax,J(o.Title),1),f("div",cx,[f("p",null,J(o.Caption),1),f("p",null,"Cuisine: "+J(o.TypeOfCuisine),1),f("p",null,"Location: "+J(o.Address),1),f("p",null,"Price: "+J(o.PricePoint),1)])]))),128))])}const ux=ae(rx,[["render",lx],["__scopeId","data-v-a66c2053"]]);const hx={name:"Local",components:{NavBar:En,LocalDiscoveryFeed:ux,CuisineBar:Hr},data(){return{docID:"self",user:!1}},created(){const t=ve();Et(t,e=>{e&&(this.user=e,console.log("Discovery Page printing userID: "+this.user.uid))})}},Nc=t=>(yt("data-v-25bcae90"),t=t(),vt(),t),dx={key:0},fx={class:"navbar-container"},px={class:"main"},mx={class:"cuisine-container"},gx=Nc(()=>f("br",null,null,-1)),_x=Nc(()=>f("br",null,null,-1)),yx=Nc(()=>f("h1",null,"Local Cuisine",-1)),vx={class:"posts-container"},Ex=Nc(()=>f("h5",null,"Local Cuisine",-1)),Ix={key:1};function wx(t,e,n,s,r,i){const o=G("NavBar"),a=G("CuisineBar"),c=G("LocalDiscoveryFeed"),l=G("router-link");return r.user?(V(),L("div",dx,[f("div",fx,[U(o,{style:{"align-items":"center"}})]),f("div",px,[f("div",mx,[U(a,{style:{"align-items":"center"}})]),gx,_x,yx,f("div",vx,[U(c,{uid:r.user.uid,type:"self"},null,8,["uid"])]),Ex])])):(V(),L("div",Ix,[U(l,{to:{name:"LogInPage"}},{default:Oe(()=>[Ne(" Go Back to Login ")]),_:1})]))}const Tx=ae(hx,[["render",wx],["__scopeId","data-v-25bcae90"]]);const _l=He(Fe),Ax=ve(),Rx={name:"OthersDiscoveryFeed",data(){return{relevantPosts:[]}},props:{uid:String,type:String},created(){console.log("created "+this.uid),this.fetchRelevantPosts(this.uid)},methods:{async fetchRelevantPosts(t){if(!t){console.error("UID is undefined");return}Ax.currentUser;const e=Ue(_l,"usernames"),n=Qe(e,_t("uid","==",t)),s=await Ye(n);if(s.empty){console.log(`No usernames found for UID: ${t}`);return}const r=s.docs[0];console.log("Username document retrieved");const i=r.data().following;console.log("Retreived:"+i);const o=i.map(h=>{const d=je(_l,"usernames",h);return $t(d)}),c=(await Promise.all(o)).map(h=>h.exists()?h.data().uid:(console.error(`No document found for username: ${username}`),null)).filter(h=>h!==null);console.log("Retreived:"+c);const l=Qe(Ue(_l,"Posts"),_t("TypeOfCuisine","==","Others"),Hs("CreatedAt","desc"));(await Ye(l)).forEach(h=>{const d=h.data();c.includes(d.UserID)&&this.relevantPosts.push({id:h.id,...d})}),console.log("Stored:"+post)}}},Px={class:"discovery-feed"},bx=["src"],Sx={class:"caption"},Cx={class:"description"};function kx(t,e,n,s,r,i){return V(),L("div",Px,[(V(!0),L($e,null,Vn(r.relevantPosts,o=>(V(),L("div",{key:o.id,class:"post"},[f("img",{src:o.Image_URL,alt:"Post image",class:"img",loading:"lazy"},null,8,bx),f("div",Sx,J(o.Title),1),f("div",Cx,[f("p",null,J(o.Caption),1),f("p",null,"Cuisine: "+J(o.TypeOfCuisine),1),f("p",null,"Location: "+J(o.Address),1),f("p",null,"Price: "+J(o.PricePoint),1)])]))),128))])}const Dx=ae(Rx,[["render",kx],["__scopeId","data-v-b1d31520"]]);const Ox={name:"Others",components:{NavBar:En,OthersDiscoveryFeed:Dx,CuisineBar:Hr},data(){return{docID:"self",user:!1}},created(){const t=ve();Et(t,e=>{e&&(this.user=e,console.log("Discovery Page printing userID: "+this.user.uid))})}},xc=t=>(yt("data-v-3fdf0e48"),t=t(),vt(),t),Nx={key:0},xx={class:"navbar-container"},Vx={class:"main"},Lx={class:"cuisine-container"},Mx=xc(()=>f("br",null,null,-1)),Ux=xc(()=>f("br",null,null,-1)),Fx=xc(()=>f("h1",null,"Others",-1)),$x={class:"posts-container"},Bx=xc(()=>f("h5",null,"Others",-1)),jx={key:1};function qx(t,e,n,s,r,i){const o=G("NavBar"),a=G("CuisineBar"),c=G("OthersDiscoveryFeed"),l=G("router-link");return r.user?(V(),L("div",Nx,[f("div",xx,[U(o,{style:{"align-items":"center"}})]),f("div",Vx,[f("div",Lx,[U(a,{style:{"align-items":"center"}})]),Mx,Ux,Fx,f("div",$x,[U(c,{uid:r.user.uid,type:"self"},null,8,["uid"])]),Bx])])):(V(),L("div",jx,[U(l,{to:{name:"LogInPage"}},{default:Oe(()=>[Ne(" Go Back to Login ")]),_:1})]))}const Hx=ae(Ox,[["render",qx],["__scopeId","data-v-3fdf0e48"]]);const Wx=ve(),Fp=He(Fe);Ya(Fe);const Kx={data(){return{searchList:[],myUsername:"",user:null}},props:{searchText:String,uid:String},methods:{async searchFriends(t){console.log("search:"+this.myUsername);let e=Qe(Ue(Fp,"usernames")),n=await Ye(e);this.searchList=[],n.forEach(s=>{let r=s.data();s.id>=t&&s.id<=t+""&&s.id!=this.myUsername&&(r.username=s.id,this.searchList.push(r))}),this.searchList.sort(function(s,r){return r.username-s.username})},async getFollowingField(t){let e=Qe(Ue(Fp,"usernames"),_t("uid","==",t)),n=await Ye(e),s=[];return n.empty?console.log("No documents found."):(s=n.docs[0],console.log(s)),s}},watch:{searchText:{immediate:!0,handler(t,e){console.log("watch"),this.myUsername&&this.searchFriends(t)}}},created(){console.log("created"),this.searchFriends(this.searchText),Et(Wx,t=>{t&&(this.user=t,this.getFollowingField(this.user.uid).then(e=>{e.data(),this.myUsername=e.id,this.searchFriends(this.searchText)}))})}},Sv=t=>(yt("data-v-10f428b0"),t=t(),vt(),t),zx={key:0,id:"main"},Gx=Sv(()=>f("div",{id:"page-title"},"Search Results",-1)),Qx={id:"user-query"},Yx={class:"queryContainer"},Jx={class:"queryItem"},Xx={class:"nameAndBio"},Zx={class:"itemname"},eV=Sv(()=>f("br",null,null,-1)),tV={class:"userDescription"},nV={class:"profileImage"},sV=["src"];function rV(t,e,n,s,r,i){const o=G("router-link");return r.user?(V(),L("div",zx,[Gx,f("div",Qx,"You searched for: "+J(n.searchText),1),f("div",Yx,[(V(!0),L($e,null,Vn(r.searchList,a=>(V(),L("div",Jx,[f("div",Xx,[U(o,{to:{name:"OthersProfilePage",query:{q:a.username}},class:"routerLink"},{default:Oe(()=>[f("span",Zx,J(a.username),1),eV,f("p",tV,J(a.bio),1)]),_:2},1032,["to"])]),f("div",nV,[a.imageUrl?(V(),L("img",{key:0,src:a.imageUrl,alt:"profileImage"},null,8,sV)):ns("",!0)])]))),256))])])):ns("",!0)}const iV=ae(Kx,[["render",rV],["__scopeId","data-v-10f428b0"]]),oV={name:"UserQueryDisplayPage",components:{navBar:En,userQueryDisplay:iV},data(){return{user:!1}},props:{searchString:String},created(){const t=ve();Et(t,e=>{e&&(this.user=e)})}},aV={key:0,class:"main",style:{"text-align":"center"}},cV=f("br",null,null,-1),lV={key:1},uV=f("p",null,null,-1);function hV(t,e,n,s,r,i){const o=G("navBar"),a=G("userQueryDisplay"),c=G("router-link");return V(),L($e,null,[r.user?(V(),L("div",aV,[U(o),cV,U(a,{searchText:n.searchString},null,8,["searchText"])])):(V(),L("div",lV,[U(c,{to:{name:"LogInPage"}},{default:Oe(()=>[Ne(" Go Back to Login ")]),_:1})])),uV],64)}const dV=ae(oV,[["render",hV]]);const ei=He(),fV={data(){return{user:!1,userName:"no username",userImage:null,userPosts:5,userFollowing:0,userBio:"this user has no bio",targetUID:""}},props:{doc_id:String,type:String},methods:{async setTargetUID(t,e){console.log(e);const n=je(t,"usernames",e),s=await $t(n);this.targetUID=s.data().uid,console.log("setTargetUID: "+this.targetUID)},async countPosts(t,e){console.log(e),console.log("countPost: check if it is called");let n=Qe(Ue(t,"Posts"),_t("UserID","==",e)),s=await Ye(n);console.log("countPost: "+s.size),this.userPosts=s.size,console.log("After setting user"+this.userPosts)},async fetchProfileData(t,e){try{console.log("async fetchProfileData: "+e);const n=Ue(t,"usernames"),s=Qe(n,_t("uid","==",e)),r=await Ye(s);if(r.empty){console.log("No documents found for the user in Firestore.");return}const i=r.docs[0].data(),o=r.docs[0].id;this.userName=o||"No name",this.userImage=i.imageUrl,this.userFollowing=i.following?i.following.length:0,this.userBio=i.bio||"No bio set",this.updateLocalStorage()}catch(n){console.error("Error fetching profile data:",n)}},updateLocalStorage(){const t={userName:this.userName,userImage:this.userImage,userPosts:this.userPosts,userFollowing:this.userFollowing,userBio:this.userBio};localStorage.setItem("profileData",JSON.stringify(t))}},created(){console.log(this.doc_id);const t=ve();Et(t,n=>{n&&(this.user=n,this.doc_id=="self"?(this.targetUID=this.user.uid,console.log("tardet "+this.targetUID),this.fetchProfileData(ei,this.targetUID),this.countPosts(ei,this.targetUID)):this.setTargetUID(ei,this.doc_id).then(()=>{this.fetchProfileData(ei,this.targetUID),this.countPosts(ei,this.targetUID)}))});const e=localStorage.getItem("profileData");if(e&&this.doc_id=="self"){const n=JSON.parse(e);this.userName=n.userName,this.userImage=n.userImage,this.userPosts=n.userPosts,this.userFollowing=n.userFollowing,this.userBio=n.userBio}}},Cv=t=>(yt("data-v-f0809bd7"),t=t(),vt(),t),pV={class:"user-profile-info"},mV={class:"profile-pic-name-and-stats"},gV={class:"div"},_V={class:"column"},yV={class:"profile-pic-container"},vV=["src"],EV={class:"name"},IV={class:"column-2"},wV=Cv(()=>f("div",{class:"posts"},"Posts",-1)),TV={class:"no-of-posts"},AV={class:"column-3"},RV=Cv(()=>f("div",{class:"div-2"},"Following",-1)),PV={class:"no-of-following"},bV={class:"biography"};function SV(t,e,n,s,r,i){const o=G("router-link");return V(),L("div",pV,[f("div",mV,[f("div",gV,[f("div",_V,[f("div",yV,[f("img",{src:r.userImage,loading:"lazy",class:"profile-pic",alt:"Profile Picture"},null,8,vV)]),f("div",EV,J(r.userName)+" ",1)]),f("div",IV,[wV,f("div",TV,J(r.userPosts),1)]),f("div",AV,[U(o,{to:{name:"WorkingFollowingPage",query:{q:this.userName}},class:"routerLink"},{default:Oe(()=>[RV]),_:1},8,["to"]),f("div",PV,J(r.userFollowing),1)])])]),f("div",bV,J(r.userBio),1)])}const kv=ae(fV,[["render",SV],["__scopeId","data-v-f0809bd7"]]);const CV={name:"ShareProfileButton",methods:{copyProfileUrlToClipboard(){const t=window.location.href;navigator.clipboard.writeText(t).then(()=>{alert("Profile URL copied to clipboard")}).catch(e=>{console.error("Failed to copy:",e),alert("Failed to copy URL")})}}},kV=t=>(yt("data-v-62840d74"),t=t(),vt(),t),DV=kV(()=>f("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/4686fa12-300e-435d-9064-77bc6512f227?",class:"img-3",alt:"Share Profile"},null,-1)),OV=[DV];function NV(t,e,n,s,r,i){return V(),L("button",{class:"share-profile-button",onClick:e[0]||(e[0]=(...o)=>i.copyProfileUrlToClipboard&&i.copyProfileUrlToClipboard(...o))},OV)}const Dv=ae(CV,[["render",NV],["__scopeId","data-v-62840d74"]]);He(Fe);ve();const xV={name:"PostsItem",props:{postType:String,post:{type:Object,required:!0}},methods:{editPost(t){console.log("Edit button clicked:",t),this.$emit("edit-post",t)},deletePost(t){console.log("Delete button clicked:",t),window.confirm("Are you sure you want to delete this post?")?this.$emit("delete-post",t):console.log("Deletion cancelled.")}},created(){console.log(this.postType)}},VV={class:"post-item"},LV={class:"images"},MV={class:"div"},UV={class:"column"},FV=["src"],$V={class:"caption"},BV={class:"description"};function jV(t,e,n,s,r,i){return V(),L("div",VV,[n.postType=="self"?(V(),L("button",{key:0,onClick:e[0]||(e[0]=o=>i.editPost(n.post.id)),class:"edit-button"})):ns("",!0),n.postType=="self"?(V(),L("button",{key:1,onClick:e[1]||(e[1]=o=>i.deletePost(n.post.id)),class:"delete-button"})):ns("",!0),f("div",LV,[f("div",MV,[f("div",UV,[f("img",{src:n.post.Image_URL,alt:"Post image",class:"img",loading:"lazy"},null,8,FV)])])]),f("div",$V,J(n.post.Title),1),f("div",BV,[f("p",null,J(n.post.Caption),1),f("p",null,"Cuisine: "+J(n.post.TypeOfCuisine),1),f("p",null,"Location: "+J(n.post.Address),1),f("p",null,"Price: "+J(n.post.PricePoint),1)])])}const qV=ae(xV,[["render",jV],["__scopeId","data-v-6852f5d4"]]);const $p=He(Fe),HV=ve(),WV={name:"PostsContainer",components:{PostItem:qV},data(){return{posts:[]}},props:{uid:String,type:String},created(){console.log("created "+this.uid),this.fetchPosts(this.uid)},methods:{async fetchPosts(t){HV.currentUser;const e=Ue($p,"Posts"),n=Qe(e,_t("UserID","==",t),Hs("CreatedAt","desc")),s=await Ye(n);this.posts=s.docs.map(r=>({id:r.id,...r.data()}))},async handleEditPost(t){console.log("editing",t),this.$router.push({name:"CreatePostPage",query:{postId:t}})},async handleDeletePost(t){console.log(`Deleting post with ID: ${t}`);try{const e=je($p,"Posts",t);await Lk(e),this.posts=this.posts.filter(n=>n.id!==t),console.log("Post deleted successfully")}catch(e){console.error("Error deleting post: ",e)}}}};function KV(t,e,n,s,r,i){const o=G("PostItem");return V(),L("div",null,[(V(!0),L($e,null,Vn(r.posts,a=>(V(),Du(o,{key:a.id,post:a,postType:this.type,onEditPost:i.handleEditPost,onDeletePost:i.handleDeletePost},null,8,["post","postType","onEditPost","onDeletePost"]))),128))])}const Ov=ae(WV,[["render",KV],["__scopeId","data-v-96296bd3"]]);const zV={name:"OwnProfilePage",components:{NavBar:En,UserProfileInfo:kv,ShareProfileButton:Dv,PostsContainer:Ov},data(){return{docID:"self",user:!1}},created(){const t=ve();Et(t,e=>{e&&(this.user=e,console.log("OwnprofilePage printing userID: "+this.user.uid))})}},Nv=t=>(yt("data-v-2c484bb6"),t=t(),vt(),t),GV={key:0},QV={class:"navbar-container"},YV={class:"profile-page"},JV={class:"header"},XV={class:"user-profile-info"},ZV={class:"div"},eL=Nv(()=>f("br",null,null,-1)),tL=Nv(()=>f("br",null,null,-1)),nL={class:"div-4"},sL={key:1};function rL(t,e,n,s,r,i){const o=G("NavBar"),a=G("UserProfileInfo"),c=G("ShareProfileButton"),l=G("PostsContainer"),u=G("router-link");return V(),L("div",null,[r.user?(V(),L("div",GV,[f("div",QV,[U(o,{style:{"align-items":"center"}})]),f("div",YV,[f("div",JV,[f("div",XV,[U(a,{doc_id:r.docID},null,8,["doc_id"])]),f("div",ZV,[U(c)])]),eL,tL,f("div",nL,[U(l,{uid:r.user.uid,type:"self"},null,8,["uid"])])])])):(V(),L("div",sL,[U(u,{to:{name:"LogInPage"}},{default:Oe(()=>[Ne(" Go Back to Login ")]),_:1})]))])}const iL=ae(zV,[["render",rL],["__scopeId","data-v-2c484bb6"]]);const Bp=He(Fe),oL={name:"FollowButton",props:{currentUserID:String,otherProfileUserID:String},data(){return{isFollowing:!1}},methods:{async toggleFollow(){this.isFollowing=!this.isFollowing,this.$emit("update-follow",this.isFollowing),je(Bp,"Users",this.currentUserID),je(Bp,"Users",this.otherProfileUserID);try{await nd(profileUserRef,{userFollowing:_o.increment(this.isFollowing?1:-1)})}catch(t){console.error("Error updating follow status:",t)}}}};function aL(t,e,n,s,r,i){return V(),L("button",{onClick:e[0]||(e[0]=(...o)=>i.toggleFollow&&i.toggleFollow(...o)),class:zi({following:r.isFollowing})},J(r.isFollowing?"Unfollow":"Follow"),3)}const cL=ae(oL,[["render",aL],["__scopeId","data-v-d35059dc"]]);const jp=He(Fe),lL={name:"FllwButton",props:{username:String},data(){return{user:!1,isFollowing:!1,following:[],myUsername:""}},methods:{updateFollow(){if(console.log("updateFollow function called"),console.log("before:"+this.isFollowing),this.isFollowing){this.isFollowing=!1;let t=this.following;const e=t.indexOf(this.username);e>-1&&t.splice(e,1),this.following=t,this.updateDB()}else this.isFollowing=!0,this.following.push(this.username),this.updateDB();console.log("after:"+this.isFollowing)},async getFollowingField(t){let e=Qe(Ue(jp,"usernames"),_t("uid","==",t)),n=await Ye(e),s=[];return n.empty?console.log("No documents found."):(s=n.docs[0],console.log(s)),s},async updateDB(){console.log(this.following),console.log(this.myUsername);const t=je(jp,"usernames",this.myUsername);await nd(t,{following:this.following})}},mounted(){const t=ve();Et(t,e=>{e&&(this.user=e,this.getFollowingField(this.user.uid).then(n=>{let s=n.data();this.following=s.following,this.myUsername=n.id,this.isFollowing=this.following.includes(this.username)}))})},watch:{isFollowing:{immediate:!0,handler(t,e){}}}},uL={key:0},hL={key:1};function dL(t,e,n,s,r,i){return V(),L("button",{onClick:e[0]||(e[0]=(...o)=>i.updateFollow&&i.updateFollow(...o)),class:zi({following:r.isFollowing})},[r.isFollowing?(V(),L("span",uL," Unfollow ")):(V(),L("span",hL," Follow "))],2)}const fL=ae(lL,[["render",dL],["__scopeId","data-v-e07e78ff"]]);const pL=He(Fe),mL={name:"OthersProfilePage",components:{UserProfileInfo:kv,PostsContainer:Ov,FollowButton:cL,ShareProfileButton:Dv,FllwButton:fL,NavBar:En},data(){return{viewedUser:{},userPosts:[],UID:"",user:!1}},props:{username:String},methods:{async setTargetUID(t,e){console.log(e);const n=je(t,"usernames",e),s=await $t(n);this.UID=s.data().uid}},created(){const t=ve();Et(t,e=>{e&&(this.user=e,console.log("OthersprofilePage printing userID: "+this.user.uid))}),this.setTargetUID(pL,this.username)}},id=t=>(yt("data-v-f61d0f49"),t=t(),vt(),t),gL={key:0},_L={class:"profile-page"},yL={class:"header"},vL={class:"user-profile-info"},EL=id(()=>f("br",null,null,-1)),IL={class:"column-4"},wL={class:"buttons"},TL={class:"div"},AL={class:"column-5"},RL=id(()=>f("br",null,null,-1)),PL=id(()=>f("br",null,null,-1)),bL={class:"div-4"},SL={key:1};function CL(t,e,n,s,r,i){const o=G("NavBar"),a=G("UserProfileInfo"),c=G("FllwButton"),l=G("ShareProfileButton"),u=G("PostsContainer"),h=G("router-link");return r.user?(V(),L("div",gL,[U(o,{style:{"align-items":"center"}}),f("div",_L,[f("div",yL,[f("div",vL,[U(a,{doc_id:n.username},null,8,["doc_id"]),Ne(),EL,f("div",IL,[U(c,{username:n.username},null,8,["username"])])]),f("div",wL,[f("div",TL,[f("div",AL,[U(l)])])])]),RL,PL,f("div",bL,[r.UID?(V(),Du(u,{key:0,uid:r.UID,type:"others"},null,8,["uid"])):ns("",!0)])])])):(V(),L("div",SL,[U(h,{to:{name:"LogInPage"}},{default:Oe(()=>[Ne(" Go Back to Login ")]),_:1})]))}const kL=ae(mL,[["render",CL],["__scopeId","data-v-f61d0f49"]]);const DL=ve(),qp=He(Fe);Ya(Fe);const OL={data(){return{searchList:[],uid:null}},props:{username:String},methods:{async searchFriends(){const t=je(qp,"usernames",this.username);let n=(await $t(t)).data().following;console.log(n),this.searchList=[],n.forEach(async s=>{const r=je(qp,"usernames",s);let o=(await $t(r)).data();o.username=s,console.log(o.uid),console.log(o.bio),this.searchList.push(o)}),this.searchList.sort(function(s,r){return r.username-s.username})}},created(){this.searchFriends(),Et(DL,t=>{t&&(this.uid=t.uid)})}},xv=t=>(yt("data-v-83e23e4f"),t=t(),vt(),t),NL={key:0,id:"main"},xL=xv(()=>f("div",{id:"page-title"},"Following",-1)),VL={id:"user-query"},LL={class:"queryContainer"},ML={class:"queryItem"},UL={class:"nameAndBio"},FL={class:"itemname"},$L=xv(()=>f("br",null,null,-1)),BL={class:"userDescription"},jL={class:"profileImage"},qL=["src"];function HL(t,e,n,s,r,i){const o=G("router-link");return r.uid?(V(),L("div",NL,[xL,f("div",VL,J(n.username)+" is following these friends:",1),f("div",LL,[(V(!0),L($e,null,Vn(r.searchList,a=>(V(),L("div",ML,[f("div",UL,[U(o,{to:{name:"OthersProfilePage",query:{q:a.username}},class:"routerLink"},{default:Oe(()=>[f("span",FL,J(a.username),1),$L,f("p",BL,J(a.bio),1)]),_:2},1032,["to"])]),f("div",jL,[a.imageUrl?(V(),L("img",{key:0,src:a.imageUrl,alt:"profileImage"},null,8,qL)):ns("",!0)])]))),256))])])):ns("",!0)}const WL=ae(OL,[["render",HL],["__scopeId","data-v-83e23e4f"]]),KL={name:"FollowerDisplayPage",components:{navBar:En,FollowerDisplay:WL,RouterLink:Hg},props:{username:String},data(){return{user:""}},created(){const t=ve();Et(t,e=>{e&&(this.user=e)})}},zL={key:0,class:"main",style:{"text-align":"center"}},GL=f("br",null,null,-1),QL={key:1};function YL(t,e,n,s,r,i){const o=G("navBar"),a=G("FollowerDisplay"),c=G("router-link");return r.user?(V(),L("div",zL,[U(o),GL,U(a,{username:n.username},null,8,["username"])])):(V(),L("div",QL,[U(c,{to:{name:"LogInPage"}},{default:Oe(()=>[Ne(" Go Back to Login ")]),_:1})]))}const JL=ae(KL,[["render",YL]]),XL=ve(),ZL=[{path:"/",name:"LogInPage",component:eD},{path:"/signup",name:"SignUpPage",component:ED},{path:"/createPost",name:"CreatePostPage",component:mO,props:t=>({postId:t.query.postId})},{path:"/passwordRecovery",name:"PasswordRecoveryPage",component:OD},{path:"/homepage",name:"HomePage",component:zO},{path:"/Japanese",name:"Japanese",component:pN},{path:"/Korean",name:"Korean",component:VN},{path:"/Western",name:"Western",component:nx},{path:"/Local",name:"Local",component:Tx},{path:"/Others",name:"Others",component:Hx},{path:"/userquerydisplay",name:"UserQueryDisplayPage",component:dV,props:t=>({searchString:t.query.q})},{path:"/ownprofilepage",name:"OwnProfilePage",component:iL},{path:"/othersprofilepage",name:"OthersProfilePage",component:kL,props:t=>({username:t.query.q})},{path:"/workingfollowingpage",name:"WorkingFollowingPage",component:JL,props:t=>({username:t.query.q})}],eM=yP({history:VR(),routes:ZL});new Promise(t=>{Et(XL,e=>{t()})});/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var tM="store";function Wr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function nM(t){return t!==null&&typeof t=="object"}function sM(t){return t&&typeof t.then=="function"}function rM(t,e){return function(){return t(e)}}function Vv(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Lv(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Vc(t,n,[],t._modules.root,!0),od(t,n,e)}function od(t,e,n){var s=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=rE(!0);c.run(function(){Wr(i,function(l,u){o[u]=rM(l,t),a[u]=Mt(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Gi({data:e}),t._scope=c,t.strict&&lM(t),s&&n&&t._withCommit(function(){s.data=null}),r&&r.stop()}function Vc(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=ad(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=iM(t,o,n);s.forEachMutation(function(u,h){var d=o+h;oM(t,d,u,l)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,m=u.handler||u;aM(t,d,m,l)}),s.forEachGetter(function(u,h){var d=o+h;cM(t,d,u,l)}),s.forEachChild(function(u,h){Vc(t,e,n.concat(h),u,r)})}function iM(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=Ca(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(i,o,a){var c=Ca(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return Mv(t,e)}},state:{get:function(){return ad(t.state,n)}}}),r}function Mv(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function oM(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function aM(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return sM(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function cM(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function lM(t){dr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function ad(t,e){return e.reduce(function(n,s){return n[s]},t)}function Ca(t,e,n){return nM(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var uM="vuex bindings",Hp="vuex:mutations",yl="vuex:actions",er="vuex",hM=0;function dM(t,e){_R({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[uM]},function(n){n.addTimelineLayer({id:Hp,label:"Vuex Mutations",color:Wp}),n.addTimelineLayer({id:yl,label:"Vuex Actions",color:Wp}),n.addInspector({id:er,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===er)if(s.filter){var r=[];Bv(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[$v(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===er){var r=s.nodeId;Mv(e,r),s.state=mM(_M(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===er){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(er),n.sendInspectorState(er),n.addTimelineEvent({layerId:Hp,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=hM++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:yl,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:yl,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var Wp=8702998,fM=6710886,pM=16777215,Uv={label:"namespaced",textColor:pM,backgroundColor:fM};function Fv(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function $v(t,e){return{id:e||"root",label:Fv(e),tags:t.namespaced?[Uv]:[],children:Object.keys(t._children).map(function(n){return $v(t._children[n],e+n+"/")})}}function Bv(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Uv]:[]}),Object.keys(e._children).forEach(function(r){Bv(t,e._children[r],n,s+r+"/")})}function mM(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=gM(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Fv(o):o,editable:!1,value:mu(function(){return i[o]})}})}return r}function gM(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=mu(function(){return t[n]})}else e[n]=mu(function(){return t[n]})}),e}function _M(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function mu(t){try{return t()}catch(e){return e}}var Zt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},jv={namespaced:{configurable:!0}};jv.namespaced.get=function(){return!!this._rawModule.namespaced};Zt.prototype.addChild=function(e,n){this._children[e]=n};Zt.prototype.removeChild=function(e){delete this._children[e]};Zt.prototype.getChild=function(e){return this._children[e]};Zt.prototype.hasChild=function(e){return e in this._children};Zt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Zt.prototype.forEachChild=function(e){Wr(this._children,e)};Zt.prototype.forEachGetter=function(e){this._rawModule.getters&&Wr(this._rawModule.getters,e)};Zt.prototype.forEachAction=function(e){this._rawModule.actions&&Wr(this._rawModule.actions,e)};Zt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Wr(this._rawModule.mutations,e)};Object.defineProperties(Zt.prototype,jv);var Ks=function(e){this.register([],e,!1)};Ks.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};Ks.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};Ks.prototype.update=function(e){qv([],this.root,e)};Ks.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Zt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Wr(n.modules,function(a,c){r.register(e.concat(c),a,s)})};Ks.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};Ks.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function qv(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;qv(t.concat(s),e.getChild(s),n.modules[s])}}function yM(t){return new Ct(t)}var Ct=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Ks(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,m){return c.call(o,d,m)},this.commit=function(d,m,y){return l.call(o,d,m,y)},this.strict=r;var u=this._modules.root.state;Vc(this,u,[],this._modules.root),od(this,u),s.forEach(function(h){return h(n)})},cd={state:{configurable:!0}};Ct.prototype.install=function(e,n){e.provide(n||tM,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&dM(e,this)};cd.state.get=function(){return this._state.data};cd.state.set=function(t){};Ct.prototype.commit=function(e,n,s){var r=this,i=Ca(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,r.state)}))};Ct.prototype.dispatch=function(e,n){var s=this,r=Ca(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{s._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,s.state,d)})}catch{}h(d)})})}};Ct.prototype.subscribe=function(e,n){return Vv(e,this._subscribers,n)};Ct.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Vv(s,this._actionSubscribers,n)};Ct.prototype.watch=function(e,n,s){var r=this;return dr(function(){return e(r.state,r.getters)},n,Object.assign({},s))};Ct.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Ct.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Vc(this,this.state,e,this._modules.get(e),s.preserveState),od(this,this.state)};Ct.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=ad(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Lv(this)};Ct.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ct.prototype.hotUpdate=function(e){this._modules.update(e),Lv(this,!0)};Ct.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Ct.prototype,cd);const vM=He(Fe),EM=yM({state:{postArray:[],postLoaded:null},getters:{postsData(t){return t.postArray}},mutations:{},actions:{async getPosts({state:t}){const e=Ue(vM,"Posts");Mk(e,n=>{n.forEach(s=>{const r=s.data();r.PostID=s.id;const i=t.postArray.findIndex(o=>o.PostID===s.id);i===-1&&(t.postArray.push(r),t.postArray[i]=r)})}),t.postLoaded=!0}}});uw(lR).use(eM).use(EM).mount("#app");
