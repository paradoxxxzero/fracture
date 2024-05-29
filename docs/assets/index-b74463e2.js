(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var Va={exports:{}},Ti={},Wa={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Symbol.for("react.element"),f0=Symbol.for("react.portal"),d0=Symbol.for("react.fragment"),p0=Symbol.for("react.strict_mode"),h0=Symbol.for("react.profiler"),m0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),g0=Symbol.for("react.forward_ref"),y0=Symbol.for("react.suspense"),z0=Symbol.for("react.memo"),w0=Symbol.for("react.lazy"),ks=Symbol.iterator;function x0(e){return e===null||typeof e!="object"?null:(e=ks&&e[ks]||e["@@iterator"],typeof e=="function"?e:null)}var Ba={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qa=Object.assign,qa={};function It(e,n,t){this.props=e,this.context=n,this.refs=qa,this.updater=t||Ba}It.prototype.isReactComponent={};It.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};It.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ba(){}ba.prototype=It.prototype;function Eo(e,n,t){this.props=e,this.context=n,this.refs=qa,this.updater=t||Ba}var Co=Eo.prototype=new ba;Co.constructor=Eo;Qa(Co,It.prototype);Co.isPureReactComponent=!0;var Es=Array.isArray,Za=Object.prototype.hasOwnProperty,No={current:null},Xa={key:!0,ref:!0,__self:!0,__source:!0};function Ka(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Za.call(n,r)&&!Xa.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:xr,type:e,key:l,ref:o,props:i,_owner:No.current}}function S0(e,n){return{$$typeof:xr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Po(e){return typeof e=="object"&&e!==null&&e.$$typeof===xr}function k0(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Cs=/\/+/g;function Xi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?k0(""+e.key):n.toString(36)}function Qr(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xr:case f0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Xi(o,0):r,Es(i)?(t="",e!=null&&(t=e.replace(Cs,"$&/")+"/"),Qr(i,n,t,"",function(u){return u})):i!=null&&(Po(i)&&(i=S0(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Cs,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Es(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Xi(l,s);o+=Qr(l,n,t,a,i)}else if(a=x0(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Xi(l,s++),o+=Qr(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function _r(e,n,t){if(e==null)return e;var r=[],i=0;return Qr(e,r,"","",function(l){return n.call(t,l,i++)}),r}function E0(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},qr={transition:null},C0={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:qr,ReactCurrentOwner:No};function Ya(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:_r,forEach:function(e,n,t){_r(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return _r(e,function(){n++}),n},toArray:function(e){return _r(e,function(n){return n})||[]},only:function(e){if(!Po(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=It;$.Fragment=d0;$.Profiler=h0;$.PureComponent=Eo;$.StrictMode=p0;$.Suspense=y0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0;$.act=Ya;$.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qa({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=No.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Za.call(n,a)&&!Xa.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:xr,type:e.type,key:i,ref:l,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:v0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:m0,_context:e},e.Consumer=e};$.createElement=Ka;$.createFactory=function(e){var n=Ka.bind(null,e);return n.type=e,n};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:g0,render:e}};$.isValidElement=Po;$.lazy=function(e){return{$$typeof:w0,_payload:{_status:-1,_result:e},_init:E0}};$.memo=function(e,n){return{$$typeof:z0,type:e,compare:n===void 0?null:n}};$.startTransition=function(e){var n=qr.transition;qr.transition={};try{e()}finally{qr.transition=n}};$.unstable_act=Ya;$.useCallback=function(e,n){return ze.current.useCallback(e,n)};$.useContext=function(e){return ze.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};$.useEffect=function(e,n){return ze.current.useEffect(e,n)};$.useId=function(){return ze.current.useId()};$.useImperativeHandle=function(e,n,t){return ze.current.useImperativeHandle(e,n,t)};$.useInsertionEffect=function(e,n){return ze.current.useInsertionEffect(e,n)};$.useLayoutEffect=function(e,n){return ze.current.useLayoutEffect(e,n)};$.useMemo=function(e,n){return ze.current.useMemo(e,n)};$.useReducer=function(e,n,t){return ze.current.useReducer(e,n,t)};$.useRef=function(e){return ze.current.useRef(e)};$.useState=function(e){return ze.current.useState(e)};$.useSyncExternalStore=function(e,n,t){return ze.current.useSyncExternalStore(e,n,t)};$.useTransition=function(){return ze.current.useTransition()};$.version="18.3.1";Wa.exports=$;var P=Wa.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=P,P0=Symbol.for("react.element"),_0=Symbol.for("react.fragment"),T0=Object.prototype.hasOwnProperty,I0=N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R0={key:!0,ref:!0,__self:!0,__source:!0};function Ja(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)T0.call(n,r)&&!R0.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:P0,type:e,key:l,ref:o,props:i,_owner:I0.current}}Ti.Fragment=_0;Ti.jsx=Ja;Ti.jsxs=Ja;Va.exports=Ti;var m=Va.exports,Nl={},eu={exports:{}},Re={},nu={exports:{}},tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(j,D){var A=j.length;j.push(D);e:for(;0<A;){var Y=A-1>>>1,ie=j[Y];if(0<i(ie,D))j[Y]=D,j[A]=ie,A=Y;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var D=j[0],A=j.pop();if(A!==D){j[0]=A;e:for(var Y=0,ie=j.length,Nr=ie>>>1;Y<Nr;){var Mn=2*(Y+1)-1,Zi=j[Mn],An=Mn+1,Pr=j[An];if(0>i(Zi,A))An<ie&&0>i(Pr,Zi)?(j[Y]=Pr,j[An]=A,Y=An):(j[Y]=Zi,j[Mn]=A,Y=Mn);else if(An<ie&&0>i(Pr,A))j[Y]=Pr,j[An]=A,Y=An;else break e}}return D}function i(j,D){var A=j.sortIndex-D.sortIndex;return A!==0?A:j.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],u=[],p=1,v=null,h=3,x=!1,z=!1,g=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(j){for(var D=t(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=j)r(u),D.sortIndex=D.expirationTime,n(a,D);else break;D=t(u)}}function w(j){if(g=!1,d(j),!z)if(t(a)!==null)z=!0,qi(E);else{var D=t(u);D!==null&&bi(w,D.startTime-j)}}function E(j,D){z=!1,g&&(g=!1,f(C),C=-1),x=!0;var A=h;try{for(d(D),v=t(a);v!==null&&(!(v.expirationTime>D)||j&&!Ue());){var Y=v.callback;if(typeof Y=="function"){v.callback=null,h=v.priorityLevel;var ie=Y(v.expirationTime<=D);D=e.unstable_now(),typeof ie=="function"?v.callback=ie:v===t(a)&&r(a),d(D)}else r(a);v=t(a)}if(v!==null)var Nr=!0;else{var Mn=t(u);Mn!==null&&bi(w,Mn.startTime-D),Nr=!1}return Nr}finally{v=null,h=A,x=!1}}var N=!1,R=null,C=-1,B=5,M=-1;function Ue(){return!(e.unstable_now()-M<B)}function Lt(){if(R!==null){var j=e.unstable_now();M=j;var D=!0;try{D=R(!0,j)}finally{D?Dt():(N=!1,R=null)}}else N=!1}var Dt;if(typeof c=="function")Dt=function(){c(Lt)};else if(typeof MessageChannel<"u"){var Ss=new MessageChannel,c0=Ss.port2;Ss.port1.onmessage=Lt,Dt=function(){c0.postMessage(null)}}else Dt=function(){T(Lt,0)};function qi(j){R=j,N||(N=!0,Dt())}function bi(j,D){C=T(function(){j(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){z||x||(z=!0,qi(E))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var A=h;h=D;try{return j()}finally{h=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,D){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var A=h;h=j;try{return D()}finally{h=A}},e.unstable_scheduleCallback=function(j,D,A){var Y=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?Y+A:Y):A=Y,j){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=A+ie,j={id:p++,callback:D,priorityLevel:j,startTime:A,expirationTime:ie,sortIndex:-1},A>Y?(j.sortIndex=A,n(u,j),t(a)===null&&j===t(u)&&(g?(f(C),C=-1):g=!0,bi(w,A-Y))):(j.sortIndex=ie,n(a,j),z||x||(z=!0,qi(E))),j},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(j){var D=h;return function(){var A=h;h=D;try{return j.apply(this,arguments)}finally{h=A}}}})(tu);nu.exports=tu;var j0=nu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=P,Ie=j0;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ru=new Set,rr={};function Yn(e,n){St(e,n),St(e+"Capture",n)}function St(e,n){for(rr[e]=n,e=0;e<n.length;e++)ru.add(n[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pl=Object.prototype.hasOwnProperty,D0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ns={},Ps={};function M0(e){return Pl.call(Ps,e)?!0:Pl.call(Ns,e)?!1:D0.test(e)?Ps[e]=!0:(Ns[e]=!0,!1)}function A0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $0(e,n,t,r){if(n===null||typeof n>"u"||A0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function we(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new we(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var _o=/[\-:]([a-z])/g;function To(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(_o,To);ce[n]=new we(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(_o,To);ce[n]=new we(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(_o,To);ce[n]=new we(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Io(e,n,t,r){var i=ce.hasOwnProperty(n)?ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&($0(n,t,i,r)&&(t=null),r||i===null?M0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var dn=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tr=Symbol.for("react.element"),rt=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),Ro=Symbol.for("react.strict_mode"),_l=Symbol.for("react.profiler"),iu=Symbol.for("react.provider"),lu=Symbol.for("react.context"),jo=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),Lo=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),ou=Symbol.for("react.offscreen"),_s=Symbol.iterator;function Mt(e){return e===null||typeof e!="object"?null:(e=_s&&e[_s]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Ki;function Vt(e){if(Ki===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ki=n&&n[1]||""}return`
`+Ki+e}var Yi=!1;function Ji(e,n){if(!e||Yi)return"";Yi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Yi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vt(e):""}function O0(e){switch(e.tag){case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 2:case 15:return e=Ji(e.type,!1),e;case 11:return e=Ji(e.type.render,!1),e;case 1:return e=Ji(e.type,!0),e;default:return""}}function Rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case it:return"Fragment";case rt:return"Portal";case _l:return"Profiler";case Ro:return"StrictMode";case Tl:return"Suspense";case Il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case iu:return(e._context.displayName||"Context")+".Provider";case jo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lo:return n=e.displayName||null,n!==null?n:Rl(e.type)||"Memo";case mn:n=e._payload,e=e._init;try{return Rl(e(n))}catch{}}return null}function F0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rl(n);case 8:return n===Ro?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function su(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function U0(e){var n=su(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ir(e){e._valueTracker||(e._valueTracker=U0(e))}function au(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=su(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jl(e,n){var t=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ts(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=In(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function uu(e,n){n=n.checked,n!=null&&Io(e,"checked",n,!1)}function Ll(e,n){uu(e,n);var t=In(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Dl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Dl(e,n.type,In(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Is(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Dl(e,n,t){(n!=="number"||ii(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Wt=Array.isArray;function vt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+In(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ml(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Wt(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:In(t)}}function cu(e,n){var t=In(n.value),r=In(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function js(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Al(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,du=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ir(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G0=["Webkit","ms","Moz","O"];Object.keys(qt).forEach(function(e){G0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),qt[n]=qt[e]})});function pu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||qt.hasOwnProperty(e)&&qt[e]?(""+n).trim():n+"px"}function hu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=pu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var H0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $l(e,n){if(n){if(H0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Ol(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function Do(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,gt=null,yt=null;function Ls(e){if(e=Er(e)){if(typeof Ul!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Di(n),Ul(e.stateNode,e.type,n))}}function mu(e){gt?yt?yt.push(e):yt=[e]:gt=e}function vu(){if(gt){var e=gt,n=yt;if(yt=gt=null,Ls(e),n)for(e=0;e<n.length;e++)Ls(n[e])}}function gu(e,n){return e(n)}function yu(){}var el=!1;function zu(e,n,t){if(el)return e(n,t);el=!0;try{return gu(e,n,t)}finally{el=!1,(gt!==null||yt!==null)&&(yu(),vu())}}function lr(e,n){var t=e.stateNode;if(t===null)return null;var r=Di(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Gl=!1;if(an)try{var At={};Object.defineProperty(At,"passive",{get:function(){Gl=!0}}),window.addEventListener("test",At,At),window.removeEventListener("test",At,At)}catch{Gl=!1}function V0(e,n,t,r,i,l,o,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var bt=!1,li=null,oi=!1,Hl=null,W0={onError:function(e){bt=!0,li=e}};function B0(e,n,t,r,i,l,o,s,a){bt=!1,li=null,V0.apply(W0,arguments)}function Q0(e,n,t,r,i,l,o,s,a){if(B0.apply(this,arguments),bt){if(bt){var u=li;bt=!1,li=null}else throw Error(k(198));oi||(oi=!0,Hl=u)}}function Jn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function wu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ds(e){if(Jn(e)!==e)throw Error(k(188))}function q0(e){var n=e.alternate;if(!n){if(n=Jn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Ds(i),e;if(l===r)return Ds(i),n;l=l.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function xu(e){return e=q0(e),e!==null?Su(e):null}function Su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Su(e);if(n!==null)return n;e=e.sibling}return null}var ku=Ie.unstable_scheduleCallback,Ms=Ie.unstable_cancelCallback,b0=Ie.unstable_shouldYield,Z0=Ie.unstable_requestPaint,J=Ie.unstable_now,X0=Ie.unstable_getCurrentPriorityLevel,Mo=Ie.unstable_ImmediatePriority,Eu=Ie.unstable_UserBlockingPriority,si=Ie.unstable_NormalPriority,K0=Ie.unstable_LowPriority,Cu=Ie.unstable_IdlePriority,Ii=null,Ye=null;function Y0(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ii,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:nf,J0=Math.log,ef=Math.LN2;function nf(e){return e>>>=0,e===0?32:31-(J0(e)/ef|0)|0}var jr=64,Lr=4194304;function Bt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ai(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~i;s!==0?r=Bt(s):(l&=o,l!==0&&(r=Bt(l)))}else o=t&~i,o!==0?r=Bt(o):l!==0&&(r=Bt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Be(n),i=1<<t,r|=e[t],n&=~i;return r}function tf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Be(l),s=1<<o,a=i[o];a===-1?(!(s&t)||s&r)&&(i[o]=tf(s,n)):a<=n&&(e.expiredLanes|=s),l&=~s}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nu(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function nl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Sr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Be(n),e[n]=t}function lf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Be(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Ao(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Be(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var U=0;function Pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _u,$o,Tu,Iu,Ru,Wl=!1,Dr=[],Sn=null,kn=null,En=null,or=new Map,sr=new Map,yn=[],of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function As(e,n){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":or.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(n.pointerId)}}function $t(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Er(n),n!==null&&$o(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function sf(e,n,t,r,i){switch(n){case"focusin":return Sn=$t(Sn,e,n,t,r,i),!0;case"dragenter":return kn=$t(kn,e,n,t,r,i),!0;case"mouseover":return En=$t(En,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return or.set(l,$t(or.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,sr.set(l,$t(sr.get(l)||null,e,n,t,r,i)),!0}return!1}function ju(e){var n=Gn(e.target);if(n!==null){var t=Jn(n);if(t!==null){if(n=t.tag,n===13){if(n=wu(t),n!==null){e.blockedOn=n,Ru(e.priority,function(){Tu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Bl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Fl=r,t.target.dispatchEvent(r),Fl=null}else return n=Er(t),n!==null&&$o(n),e.blockedOn=t,!1;n.shift()}return!0}function $s(e,n,t){br(e)&&t.delete(n)}function af(){Wl=!1,Sn!==null&&br(Sn)&&(Sn=null),kn!==null&&br(kn)&&(kn=null),En!==null&&br(En)&&(En=null),or.forEach($s),sr.forEach($s)}function Ot(e,n){e.blockedOn===n&&(e.blockedOn=null,Wl||(Wl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,af)))}function ar(e){function n(i){return Ot(i,e)}if(0<Dr.length){Ot(Dr[0],e);for(var t=1;t<Dr.length;t++){var r=Dr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&Ot(Sn,e),kn!==null&&Ot(kn,e),En!==null&&Ot(En,e),or.forEach(n),sr.forEach(n),t=0;t<yn.length;t++)r=yn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(t=yn[0],t.blockedOn===null);)ju(t),t.blockedOn===null&&yn.shift()}var zt=dn.ReactCurrentBatchConfig,ui=!0;function uf(e,n,t,r){var i=U,l=zt.transition;zt.transition=null;try{U=1,Oo(e,n,t,r)}finally{U=i,zt.transition=l}}function cf(e,n,t,r){var i=U,l=zt.transition;zt.transition=null;try{U=4,Oo(e,n,t,r)}finally{U=i,zt.transition=l}}function Oo(e,n,t,r){if(ui){var i=Bl(e,n,t,r);if(i===null)fl(e,n,r,ci,t),As(e,r);else if(sf(i,e,n,t,r))r.stopPropagation();else if(As(e,r),n&4&&-1<of.indexOf(e)){for(;i!==null;){var l=Er(i);if(l!==null&&_u(l),l=Bl(e,n,t,r),l===null&&fl(e,n,r,ci,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else fl(e,n,r,null,t)}}var ci=null;function Bl(e,n,t,r){if(ci=null,e=Do(r),e=Gn(e),e!==null)if(n=Jn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=wu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ci=e,null}function Lu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X0()){case Mo:return 1;case Eu:return 4;case si:case K0:return 16;case Cu:return 536870912;default:return 16}default:return 16}}var wn=null,Fo=null,Zr=null;function Du(){if(Zr)return Zr;var e,n=Fo,t=n.length,r,i="value"in wn?wn.value:wn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Zr=i.slice(e,1<r?1-r:void 0)}function Xr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function Os(){return!1}function je(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Mr:Os,this.isPropagationStopped=Os,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),n}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uo=je(Rt),kr=X({},Rt,{view:0,detail:0}),ff=je(kr),tl,rl,Ft,Ri=X({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Go,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ft&&(Ft&&e.type==="mousemove"?(tl=e.screenX-Ft.screenX,rl=e.screenY-Ft.screenY):rl=tl=0,Ft=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),Fs=je(Ri),df=X({},Ri,{dataTransfer:0}),pf=je(df),hf=X({},kr,{relatedTarget:0}),il=je(hf),mf=X({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),vf=je(mf),gf=X({},Rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yf=je(gf),zf=X({},Rt,{data:0}),Us=je(zf),wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sf[e])?!!n[e]:!1}function Go(){return kf}var Ef=X({},kr,{key:function(e){if(e.key){var n=wf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Go,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cf=je(Ef),Nf=X({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gs=je(Nf),Pf=X({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Go}),_f=je(Pf),Tf=X({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),If=je(Tf),Rf=X({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jf=je(Rf),Lf=[9,13,27,32],Ho=an&&"CompositionEvent"in window,Zt=null;an&&"documentMode"in document&&(Zt=document.documentMode);var Df=an&&"TextEvent"in window&&!Zt,Mu=an&&(!Ho||Zt&&8<Zt&&11>=Zt),Hs=String.fromCharCode(32),Vs=!1;function Au(e,n){switch(e){case"keyup":return Lf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $u(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lt=!1;function Mf(e,n){switch(e){case"compositionend":return $u(n);case"keypress":return n.which!==32?null:(Vs=!0,Hs);case"textInput":return e=n.data,e===Hs&&Vs?null:e;default:return null}}function Af(e,n){if(lt)return e==="compositionend"||!Ho&&Au(e,n)?(e=Du(),Zr=Fo=wn=null,lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mu&&n.locale!=="ko"?null:n.data;default:return null}}var $f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ws(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$f[e.type]:n==="textarea"}function Ou(e,n,t,r){mu(r),n=fi(n,"onChange"),0<n.length&&(t=new Uo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Xt=null,ur=null;function Of(e){Zu(e,0)}function ji(e){var n=at(e);if(au(n))return e}function Ff(e,n){if(e==="change")return n}var Fu=!1;if(an){var ll;if(an){var ol="oninput"in document;if(!ol){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),ol=typeof Bs.oninput=="function"}ll=ol}else ll=!1;Fu=ll&&(!document.documentMode||9<document.documentMode)}function Qs(){Xt&&(Xt.detachEvent("onpropertychange",Uu),ur=Xt=null)}function Uu(e){if(e.propertyName==="value"&&ji(ur)){var n=[];Ou(n,ur,e,Do(e)),zu(Of,n)}}function Uf(e,n,t){e==="focusin"?(Qs(),Xt=n,ur=t,Xt.attachEvent("onpropertychange",Uu)):e==="focusout"&&Qs()}function Gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(ur)}function Hf(e,n){if(e==="click")return ji(n)}function Vf(e,n){if(e==="input"||e==="change")return ji(n)}function Wf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qe=typeof Object.is=="function"?Object.is:Wf;function cr(e,n){if(qe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Pl.call(n,i)||!qe(e[i],n[i]))return!1}return!0}function qs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bs(e,n){var t=qs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=qs(t)}}function Gu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hu(){for(var e=window,n=ii();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ii(e.document)}return n}function Vo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bf(e){var n=Hu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Gu(t.ownerDocument.documentElement,t)){if(r!==null&&Vo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=bs(t,l);var o=bs(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qf=an&&"documentMode"in document&&11>=document.documentMode,ot=null,Ql=null,Kt=null,ql=!1;function Zs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ql||ot==null||ot!==ii(r)||(r=ot,"selectionStart"in r&&Vo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kt&&cr(Kt,r)||(Kt=r,r=fi(Ql,"onSelect"),0<r.length&&(n=new Uo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ot)))}function Ar(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var st={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},sl={},Vu={};an&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete st.animationend.animation,delete st.animationiteration.animation,delete st.animationstart.animation),"TransitionEvent"in window||delete st.transitionend.transition);function Li(e){if(sl[e])return sl[e];if(!st[e])return e;var n=st[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Vu)return sl[e]=n[t];return e}var Wu=Li("animationend"),Bu=Li("animationiteration"),Qu=Li("animationstart"),qu=Li("transitionend"),bu=new Map,Xs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,n){bu.set(e,n),Yn(n,[e])}for(var al=0;al<Xs.length;al++){var ul=Xs[al],qf=ul.toLowerCase(),bf=ul[0].toUpperCase()+ul.slice(1);jn(qf,"on"+bf)}jn(Wu,"onAnimationEnd");jn(Bu,"onAnimationIteration");jn(Qu,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(qu,"onTransitionEnd");St("onMouseEnter",["mouseout","mouseover"]);St("onMouseLeave",["mouseout","mouseover"]);St("onPointerEnter",["pointerout","pointerover"]);St("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qt));function Ks(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Q0(r,n,void 0,e),e.currentTarget=null}function Zu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;Ks(i,s,u),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,u=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;Ks(i,s,u),l=a}}}if(oi)throw e=Hl,oi=!1,Hl=null,e}function V(e,n){var t=n[Yl];t===void 0&&(t=n[Yl]=new Set);var r=e+"__bubble";t.has(r)||(Xu(n,e,2,!1),t.add(r))}function cl(e,n,t){var r=0;n&&(r|=4),Xu(t,e,r,n)}var $r="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[$r]){e[$r]=!0,ru.forEach(function(t){t!=="selectionchange"&&(Zf.has(t)||cl(t,!1,e),cl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$r]||(n[$r]=!0,cl("selectionchange",!1,n))}}function Xu(e,n,t,r){switch(Lu(n)){case 1:var i=uf;break;case 4:i=cf;break;default:i=Oo}t=i.bind(null,n,t,e),i=void 0,!Gl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function fl(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Gn(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}zu(function(){var u=l,p=Do(t),v=[];e:{var h=bu.get(e);if(h!==void 0){var x=Uo,z=e;switch(e){case"keypress":if(Xr(t)===0)break e;case"keydown":case"keyup":x=Cf;break;case"focusin":z="focus",x=il;break;case"focusout":z="blur",x=il;break;case"beforeblur":case"afterblur":x=il;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=_f;break;case Wu:case Bu:case Qu:x=vf;break;case qu:x=If;break;case"scroll":x=ff;break;case"wheel":x=jf;break;case"copy":case"cut":case"paste":x=yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Gs}var g=(n&4)!==0,T=!g&&e==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var c=u,d;c!==null;){d=c;var w=d.stateNode;if(d.tag===5&&w!==null&&(d=w,f!==null&&(w=lr(c,f),w!=null&&g.push(dr(c,w,d)))),T)break;c=c.return}0<g.length&&(h=new x(h,z,null,t,p),v.push({event:h,listeners:g}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&t!==Fl&&(z=t.relatedTarget||t.fromElement)&&(Gn(z)||z[un]))break e;if((x||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,x?(z=t.relatedTarget||t.toElement,x=u,z=z?Gn(z):null,z!==null&&(T=Jn(z),z!==T||z.tag!==5&&z.tag!==6)&&(z=null)):(x=null,z=u),x!==z)){if(g=Fs,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=Gs,w="onPointerLeave",f="onPointerEnter",c="pointer"),T=x==null?h:at(x),d=z==null?h:at(z),h=new g(w,c+"leave",x,t,p),h.target=T,h.relatedTarget=d,w=null,Gn(p)===u&&(g=new g(f,c+"enter",z,t,p),g.target=d,g.relatedTarget=T,w=g),T=w,x&&z)n:{for(g=x,f=z,c=0,d=g;d;d=et(d))c++;for(d=0,w=f;w;w=et(w))d++;for(;0<c-d;)g=et(g),c--;for(;0<d-c;)f=et(f),d--;for(;c--;){if(g===f||f!==null&&g===f.alternate)break n;g=et(g),f=et(f)}g=null}else g=null;x!==null&&Ys(v,h,x,g,!1),z!==null&&T!==null&&Ys(v,T,z,g,!0)}}e:{if(h=u?at(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var E=Ff;else if(Ws(h))if(Fu)E=Vf;else{E=Gf;var N=Uf}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Hf);if(E&&(E=E(e,u))){Ou(v,E,t,p);break e}N&&N(e,h,u),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Dl(h,"number",h.value)}switch(N=u?at(u):window,e){case"focusin":(Ws(N)||N.contentEditable==="true")&&(ot=N,Ql=u,Kt=null);break;case"focusout":Kt=Ql=ot=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":ql=!1,Zs(v,t,p);break;case"selectionchange":if(Qf)break;case"keydown":case"keyup":Zs(v,t,p)}var R;if(Ho)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else lt?Au(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Mu&&t.locale!=="ko"&&(lt||C!=="onCompositionStart"?C==="onCompositionEnd"&&lt&&(R=Du()):(wn=p,Fo="value"in wn?wn.value:wn.textContent,lt=!0)),N=fi(u,C),0<N.length&&(C=new Us(C,e,null,t,p),v.push({event:C,listeners:N}),R?C.data=R:(R=$u(t),R!==null&&(C.data=R)))),(R=Df?Mf(e,t):Af(e,t))&&(u=fi(u,"onBeforeInput"),0<u.length&&(p=new Us("onBeforeInput","beforeinput",null,t,p),v.push({event:p,listeners:u}),p.data=R))}Zu(v,n)})}function dr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function fi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=lr(e,t),l!=null&&r.unshift(dr(e,l,i)),l=lr(e,n),l!=null&&r.push(dr(e,l,i))),e=e.return}return r}function et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ys(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=lr(t,l),a!=null&&o.unshift(dr(t,a,s))):i||(a=lr(t,l),a!=null&&o.push(dr(t,a,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Xf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function Js(e){return(typeof e=="string"?e:""+e).replace(Xf,`
`).replace(Kf,"")}function Or(e,n,t){if(n=Js(n),Js(e)!==n&&t)throw Error(k(425))}function di(){}var bl=null,Zl=null;function Xl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,Yf=typeof clearTimeout=="function"?clearTimeout:void 0,ea=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof ea<"u"?function(e){return ea.resolve(null).then(e).catch(ed)}:Kl;function ed(e){setTimeout(function(){throw e})}function dl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),ar(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);ar(n)}function Cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function na(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var jt=Math.random().toString(36).slice(2),Xe="__reactFiber$"+jt,pr="__reactProps$"+jt,un="__reactContainer$"+jt,Yl="__reactEvents$"+jt,nd="__reactListeners$"+jt,td="__reactHandles$"+jt;function Gn(e){var n=e[Xe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[un]||t[Xe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=na(e);e!==null;){if(t=e[Xe])return t;e=na(e)}return n}e=t,t=e.parentNode}return null}function Er(e){return e=e[Xe]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function at(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Di(e){return e[pr]||null}var Jl=[],ut=-1;function Ln(e){return{current:e}}function W(e){0>ut||(e.current=Jl[ut],Jl[ut]=null,ut--)}function H(e,n){ut++,Jl[ut]=e.current,e.current=n}var Rn={},he=Ln(Rn),Ee=Ln(!1),qn=Rn;function kt(e,n){var t=e.type.contextTypes;if(!t)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function pi(){W(Ee),W(he)}function ta(e,n,t){if(he.current!==Rn)throw Error(k(168));H(he,n),H(Ee,t)}function Ku(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,F0(e)||"Unknown",i));return X({},t,r)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,qn=he.current,H(he,e),H(Ee,Ee.current),!0}function ra(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Ku(e,n,qn),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(he),H(he,e)):W(Ee),H(Ee,t)}var tn=null,Mi=!1,pl=!1;function Yu(e){tn===null?tn=[e]:tn.push(e)}function rd(e){Mi=!0,Yu(e)}function Dn(){if(!pl&&tn!==null){pl=!0;var e=0,n=U;try{var t=tn;for(U=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}tn=null,Mi=!1}catch(i){throw tn!==null&&(tn=tn.slice(e+1)),ku(Mo,Dn),i}finally{U=n,pl=!1}}return null}var ct=[],ft=0,mi=null,vi=0,De=[],Me=0,bn=null,rn=1,ln="";function Fn(e,n){ct[ft++]=vi,ct[ft++]=mi,mi=e,vi=n}function Ju(e,n,t){De[Me++]=rn,De[Me++]=ln,De[Me++]=bn,bn=e;var r=rn;e=ln;var i=32-Be(r)-1;r&=~(1<<i),t+=1;var l=32-Be(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rn=1<<32-Be(n)+i|t<<i|r,ln=l+e}else rn=1<<l|t<<i|r,ln=e}function Wo(e){e.return!==null&&(Fn(e,1),Ju(e,1,0))}function Bo(e){for(;e===mi;)mi=ct[--ft],ct[ft]=null,vi=ct[--ft],ct[ft]=null;for(;e===bn;)bn=De[--Me],De[Me]=null,ln=De[--Me],De[Me]=null,rn=De[--Me],De[Me]=null}var Te=null,_e=null,Q=!1,We=null;function ec(e,n){var t=Ae(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ia(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Te=e,_e=Cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Te=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=bn!==null?{id:rn,overflow:ln}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ae(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Te=e,_e=null,!0):!1;default:return!1}}function eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function no(e){if(Q){var n=_e;if(n){var t=n;if(!ia(e,n)){if(eo(e))throw Error(k(418));n=Cn(t.nextSibling);var r=Te;n&&ia(e,n)?ec(r,t):(e.flags=e.flags&-4097|2,Q=!1,Te=e)}}else{if(eo(e))throw Error(k(418));e.flags=e.flags&-4097|2,Q=!1,Te=e}}}function la(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Fr(e){if(e!==Te)return!1;if(!Q)return la(e),Q=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Xl(e.type,e.memoizedProps)),n&&(n=_e)){if(eo(e))throw nc(),Error(k(418));for(;n;)ec(e,n),n=Cn(n.nextSibling)}if(la(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=Cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=Te?Cn(e.stateNode.nextSibling):null;return!0}function nc(){for(var e=_e;e;)e=Cn(e.nextSibling)}function Et(){_e=Te=null,Q=!1}function Qo(e){We===null?We=[e]:We.push(e)}var id=dn.ReactCurrentBatchConfig;function Ut(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Ur(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function oa(e){var n=e._init;return n(e._payload)}function tc(e){function n(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Tn(f,c),f.index=0,f.sibling=null,f}function l(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,d,w){return c===null||c.tag!==6?(c=wl(d,f.mode,w),c.return=f,c):(c=i(c,d),c.return=f,c)}function a(f,c,d,w){var E=d.type;return E===it?p(f,c,d.props.children,w,d.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&oa(E)===c.type)?(w=i(c,d.props),w.ref=Ut(f,c,d),w.return=f,w):(w=ri(d.type,d.key,d.props,null,f.mode,w),w.ref=Ut(f,c,d),w.return=f,w)}function u(f,c,d,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=xl(d,f.mode,w),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function p(f,c,d,w,E){return c===null||c.tag!==7?(c=Bn(d,f.mode,w,E),c.return=f,c):(c=i(c,d),c.return=f,c)}function v(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wl(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Tr:return d=ri(c.type,c.key,c.props,null,f.mode,d),d.ref=Ut(f,null,c),d.return=f,d;case rt:return c=xl(c,f.mode,d),c.return=f,c;case mn:var w=c._init;return v(f,w(c._payload),d)}if(Wt(c)||Mt(c))return c=Bn(c,f.mode,d,null),c.return=f,c;Ur(f,c)}return null}function h(f,c,d,w){var E=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:s(f,c,""+d,w);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Tr:return d.key===E?a(f,c,d,w):null;case rt:return d.key===E?u(f,c,d,w):null;case mn:return E=d._init,h(f,c,E(d._payload),w)}if(Wt(d)||Mt(d))return E!==null?null:p(f,c,d,w,null);Ur(f,d)}return null}function x(f,c,d,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(d)||null,s(c,f,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Tr:return f=f.get(w.key===null?d:w.key)||null,a(c,f,w,E);case rt:return f=f.get(w.key===null?d:w.key)||null,u(c,f,w,E);case mn:var N=w._init;return x(f,c,d,N(w._payload),E)}if(Wt(w)||Mt(w))return f=f.get(d)||null,p(c,f,w,E,null);Ur(c,w)}return null}function z(f,c,d,w){for(var E=null,N=null,R=c,C=c=0,B=null;R!==null&&C<d.length;C++){R.index>C?(B=R,R=null):B=R.sibling;var M=h(f,R,d[C],w);if(M===null){R===null&&(R=B);break}e&&R&&M.alternate===null&&n(f,R),c=l(M,c,C),N===null?E=M:N.sibling=M,N=M,R=B}if(C===d.length)return t(f,R),Q&&Fn(f,C),E;if(R===null){for(;C<d.length;C++)R=v(f,d[C],w),R!==null&&(c=l(R,c,C),N===null?E=R:N.sibling=R,N=R);return Q&&Fn(f,C),E}for(R=r(f,R);C<d.length;C++)B=x(R,f,C,d[C],w),B!==null&&(e&&B.alternate!==null&&R.delete(B.key===null?C:B.key),c=l(B,c,C),N===null?E=B:N.sibling=B,N=B);return e&&R.forEach(function(Ue){return n(f,Ue)}),Q&&Fn(f,C),E}function g(f,c,d,w){var E=Mt(d);if(typeof E!="function")throw Error(k(150));if(d=E.call(d),d==null)throw Error(k(151));for(var N=E=null,R=c,C=c=0,B=null,M=d.next();R!==null&&!M.done;C++,M=d.next()){R.index>C?(B=R,R=null):B=R.sibling;var Ue=h(f,R,M.value,w);if(Ue===null){R===null&&(R=B);break}e&&R&&Ue.alternate===null&&n(f,R),c=l(Ue,c,C),N===null?E=Ue:N.sibling=Ue,N=Ue,R=B}if(M.done)return t(f,R),Q&&Fn(f,C),E;if(R===null){for(;!M.done;C++,M=d.next())M=v(f,M.value,w),M!==null&&(c=l(M,c,C),N===null?E=M:N.sibling=M,N=M);return Q&&Fn(f,C),E}for(R=r(f,R);!M.done;C++,M=d.next())M=x(R,f,C,M.value,w),M!==null&&(e&&M.alternate!==null&&R.delete(M.key===null?C:M.key),c=l(M,c,C),N===null?E=M:N.sibling=M,N=M);return e&&R.forEach(function(Lt){return n(f,Lt)}),Q&&Fn(f,C),E}function T(f,c,d,w){if(typeof d=="object"&&d!==null&&d.type===it&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Tr:e:{for(var E=d.key,N=c;N!==null;){if(N.key===E){if(E=d.type,E===it){if(N.tag===7){t(f,N.sibling),c=i(N,d.props.children),c.return=f,f=c;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&oa(E)===N.type){t(f,N.sibling),c=i(N,d.props),c.ref=Ut(f,N,d),c.return=f,f=c;break e}t(f,N);break}else n(f,N);N=N.sibling}d.type===it?(c=Bn(d.props.children,f.mode,w,d.key),c.return=f,f=c):(w=ri(d.type,d.key,d.props,null,f.mode,w),w.ref=Ut(f,c,d),w.return=f,f=w)}return o(f);case rt:e:{for(N=d.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=xl(d,f.mode,w),c.return=f,f=c}return o(f);case mn:return N=d._init,T(f,c,N(d._payload),w)}if(Wt(d))return z(f,c,d,w);if(Mt(d))return g(f,c,d,w);Ur(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(f,c.sibling),c=i(c,d),c.return=f,f=c):(t(f,c),c=wl(d,f.mode,w),c.return=f,f=c),o(f)):t(f,c)}return T}var Ct=tc(!0),rc=tc(!1),gi=Ln(null),yi=null,dt=null,qo=null;function bo(){qo=dt=yi=null}function Zo(e){var n=gi.current;W(gi),e._currentValue=n}function to(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function wt(e,n){yi=e,qo=dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ke=!0),e.firstContext=null)}function Oe(e){var n=e._currentValue;if(qo!==e)if(e={context:e,memoizedValue:n,next:null},dt===null){if(yi===null)throw Error(k(308));dt=e,yi.dependencies={lanes:0,firstContext:e}}else dt=dt.next=e;return n}var Hn=null;function Xo(e){Hn===null?Hn=[e]:Hn.push(e)}function ic(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Xo(n)):(t.next=i.next,i.next=t),n.interleaved=t,cn(e,r)}function cn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var vn=!1;function Ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Nn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,cn(e,t)}return i=r.interleaved,i===null?(n.next=n,Xo(r)):(n.next=i.next,i.next=n),r.interleaved=n,cn(e,t)}function Kr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ao(e,t)}}function sa(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function zi(e,n,t,r){var i=e.updateQueue;vn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,o===null?l=u:o.next=u,o=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==o&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(l!==null){var v=i.baseState;o=0,p=u=a=null,s=l;do{var h=s.lane,x=s.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var z=e,g=s;switch(h=n,x=t,g.tag){case 1:if(z=g.payload,typeof z=="function"){v=z.call(x,v,h);break e}v=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=g.payload,h=typeof z=="function"?z.call(x,v,h):z,h==null)break e;v=X({},v,h);break e;case 2:vn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else x={eventTime:x,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=x,a=v):p=p.next=x,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(p===null&&(a=v),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Xn|=o,e.lanes=o,e.memoizedState=v}}function aa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Cr={},Je=Ln(Cr),hr=Ln(Cr),mr=Ln(Cr);function Vn(e){if(e===Cr)throw Error(k(174));return e}function Yo(e,n){switch(H(mr,n),H(hr,e),H(Je,Cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Al(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Al(n,e)}W(Je),H(Je,n)}function Nt(){W(Je),W(hr),W(mr)}function oc(e){Vn(mr.current);var n=Vn(Je.current),t=Al(n,e.type);n!==t&&(H(hr,e),H(Je,t))}function Jo(e){hr.current===e&&(W(Je),W(hr))}var b=Ln(0);function wi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var hl=[];function es(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var Yr=dn.ReactCurrentDispatcher,ml=dn.ReactCurrentBatchConfig,Zn=0,Z=null,ne=null,oe=null,xi=!1,Yt=!1,vr=0,ld=0;function fe(){throw Error(k(321))}function ns(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!qe(e[t],n[t]))return!1;return!0}function ts(e,n,t,r,i,l){if(Zn=l,Z=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Yr.current=e===null||e.memoizedState===null?ud:cd,e=t(r,i),Yt){l=0;do{if(Yt=!1,vr=0,25<=l)throw Error(k(301));l+=1,oe=ne=null,n.updateQueue=null,Yr.current=fd,e=t(r,i)}while(Yt)}if(Yr.current=Si,n=ne!==null&&ne.next!==null,Zn=0,oe=ne=Z=null,xi=!1,n)throw Error(k(300));return e}function rs(){var e=vr!==0;return vr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Z.memoizedState=oe=e:oe=oe.next=e,oe}function Fe(){if(ne===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=oe===null?Z.memoizedState:oe.next;if(n!==null)oe=n,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?Z.memoizedState=oe=e:oe=oe.next=e}return oe}function gr(e,n){return typeof n=="function"?n(e):n}function vl(e){var n=Fe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=ne,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,u=l;do{var p=u.lane;if((Zn&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var v={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=v,o=r):a=a.next=v,Z.lanes|=p,Xn|=p}u=u.next}while(u!==null&&u!==l);a===null?o=r:a.next=s,qe(r,n.memoizedState)||(ke=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,Z.lanes|=l,Xn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function gl(e){var n=Fe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);qe(l,n.memoizedState)||(ke=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function sc(){}function ac(e,n){var t=Z,r=Fe(),i=n(),l=!qe(r.memoizedState,i);if(l&&(r.memoizedState=i,ke=!0),r=r.queue,is(fc.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||oe!==null&&oe.memoizedState.tag&1){if(t.flags|=2048,yr(9,cc.bind(null,t,r,i,n),void 0,null),se===null)throw Error(k(349));Zn&30||uc(t,n,i)}return i}function uc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function cc(e,n,t,r){n.value=t,n.getSnapshot=r,dc(n)&&pc(e)}function fc(e,n,t){return t(function(){dc(n)&&pc(e)})}function dc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!qe(e,t)}catch{return!0}}function pc(e){var n=cn(e,1);n!==null&&Qe(n,e,1,-1)}function ua(e){var n=Ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:e},n.queue=e,e=e.dispatch=ad.bind(null,Z,e),[n.memoizedState,e]}function yr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function hc(){return Fe().memoizedState}function Jr(e,n,t,r){var i=Ze();Z.flags|=e,i.memoizedState=yr(1|n,t,void 0,r===void 0?null:r)}function Ai(e,n,t,r){var i=Fe();r=r===void 0?null:r;var l=void 0;if(ne!==null){var o=ne.memoizedState;if(l=o.destroy,r!==null&&ns(r,o.deps)){i.memoizedState=yr(n,t,l,r);return}}Z.flags|=e,i.memoizedState=yr(1|n,t,l,r)}function ca(e,n){return Jr(8390656,8,e,n)}function is(e,n){return Ai(2048,8,e,n)}function mc(e,n){return Ai(4,2,e,n)}function vc(e,n){return Ai(4,4,e,n)}function gc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function yc(e,n,t){return t=t!=null?t.concat([e]):null,Ai(4,4,gc.bind(null,n,e),t)}function ls(){}function zc(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ns(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function wc(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ns(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function xc(e,n,t){return Zn&21?(qe(t,n)||(t=Nu(),Z.lanes|=t,Xn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=t)}function od(e,n){var t=U;U=t!==0&&4>t?t:4,e(!0);var r=ml.transition;ml.transition={};try{e(!1),n()}finally{U=t,ml.transition=r}}function Sc(){return Fe().memoizedState}function sd(e,n,t){var r=_n(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},kc(e))Ec(n,t);else if(t=ic(e,n,t,r),t!==null){var i=ye();Qe(t,e,r,i),Cc(t,n,r)}}function ad(e,n,t){var r=_n(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(kc(e))Ec(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,s=l(o,t);if(i.hasEagerState=!0,i.eagerState=s,qe(s,o)){var a=n.interleaved;a===null?(i.next=i,Xo(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=ic(e,n,i,r),t!==null&&(i=ye(),Qe(t,e,r,i),Cc(t,n,r))}}function kc(e){var n=e.alternate;return e===Z||n!==null&&n===Z}function Ec(e,n){Yt=xi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Cc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ao(e,t)}}var Si={readContext:Oe,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},ud={readContext:Oe,useCallback:function(e,n){return Ze().memoizedState=[e,n===void 0?null:n],e},useContext:Oe,useEffect:ca,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Jr(4194308,4,gc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Jr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Jr(4,2,e,n)},useMemo:function(e,n){var t=Ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ze();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=sd.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var n=Ze();return e={current:e},n.memoizedState=e},useState:ua,useDebugValue:ls,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=ua(!1),n=e[0];return e=od.bind(null,e[1]),Ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Z,i=Ze();if(Q){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),se===null)throw Error(k(349));Zn&30||uc(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,ca(fc.bind(null,r,l,e),[e]),r.flags|=2048,yr(9,cc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Ze(),n=se.identifierPrefix;if(Q){var t=ln,r=rn;t=(r&~(1<<32-Be(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=vr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ld++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},cd={readContext:Oe,useCallback:zc,useContext:Oe,useEffect:is,useImperativeHandle:yc,useInsertionEffect:mc,useLayoutEffect:vc,useMemo:wc,useReducer:vl,useRef:hc,useState:function(){return vl(gr)},useDebugValue:ls,useDeferredValue:function(e){var n=Fe();return xc(n,ne.memoizedState,e)},useTransition:function(){var e=vl(gr)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:sc,useSyncExternalStore:ac,useId:Sc,unstable_isNewReconciler:!1},fd={readContext:Oe,useCallback:zc,useContext:Oe,useEffect:is,useImperativeHandle:yc,useInsertionEffect:mc,useLayoutEffect:vc,useMemo:wc,useReducer:gl,useRef:hc,useState:function(){return gl(gr)},useDebugValue:ls,useDeferredValue:function(e){var n=Fe();return ne===null?n.memoizedState=e:xc(n,ne.memoizedState,e)},useTransition:function(){var e=gl(gr)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:sc,useSyncExternalStore:ac,useId:Sc,unstable_isNewReconciler:!1};function He(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ro(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:X({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var $i={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ye(),i=_n(e),l=sn(r,i);l.payload=n,t!=null&&(l.callback=t),n=Nn(e,l,i),n!==null&&(Qe(n,e,i,r),Kr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ye(),i=_n(e),l=sn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Nn(e,l,i),n!==null&&(Qe(n,e,i,r),Kr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),r=_n(e),i=sn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Nn(e,i,r),n!==null&&(Qe(n,e,r,t),Kr(n,e,r))}};function fa(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!cr(t,r)||!cr(i,l):!0}function Nc(e,n,t){var r=!1,i=Rn,l=n.contextType;return typeof l=="object"&&l!==null?l=Oe(l):(i=Ce(n)?qn:he.current,r=n.contextTypes,l=(r=r!=null)?kt(e,i):Rn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=$i,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function da(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&$i.enqueueReplaceState(n,n.state,null)}function io(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ko(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Oe(l):(l=Ce(n)?qn:he.current,i.context=kt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(ro(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&$i.enqueueReplaceState(i,i.state,null),zi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pt(e,n){try{var t="",r=n;do t+=O0(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function yl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function lo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var dd=typeof WeakMap=="function"?WeakMap:Map;function Pc(e,n,t){t=sn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ei||(Ei=!0,vo=r),lo(e,n)},t}function _c(e,n,t){t=sn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){lo(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){lo(e,n),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function pa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new dd;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Nd.bind(null,e,n,t),n.then(e,e))}function ha(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ma(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=sn(-1,1),n.tag=2,Nn(t,n,1))),t.lanes|=1),e)}var pd=dn.ReactCurrentOwner,ke=!1;function ge(e,n,t,r){n.child=e===null?rc(n,null,t,r):Ct(n,e.child,t,r)}function va(e,n,t,r,i){t=t.render;var l=n.ref;return wt(n,i),r=ts(e,n,t,r,l,i),t=rs(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,fn(e,n,i)):(Q&&t&&Wo(n),n.flags|=1,ge(e,n,r,i),n.child)}function ga(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!ps(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Tc(e,n,l,r,i)):(e=ri(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:cr,t(o,r)&&e.ref===n.ref)return fn(e,n,i)}return n.flags|=1,e=Tn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Tc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(cr(l,r)&&e.ref===n.ref)if(ke=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return n.lanes=e.lanes,fn(e,n,i)}return oo(e,n,t,r,i)}function Ic(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(ht,Pe),Pe|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,H(ht,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,H(ht,Pe),Pe|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,H(ht,Pe),Pe|=r;return ge(e,n,i,t),n.child}function Rc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function oo(e,n,t,r,i){var l=Ce(t)?qn:he.current;return l=kt(n,l),wt(n,i),t=ts(e,n,t,r,l,i),r=rs(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,fn(e,n,i)):(Q&&r&&Wo(n),n.flags|=1,ge(e,n,t,i),n.child)}function ya(e,n,t,r,i){if(Ce(t)){var l=!0;hi(n)}else l=!1;if(wt(n,i),n.stateNode===null)ei(e,n),Nc(n,t,r),io(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var a=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Oe(u):(u=Ce(t)?qn:he.current,u=kt(n,u));var p=t.getDerivedStateFromProps,v=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==u)&&da(n,o,r,u),vn=!1;var h=n.memoizedState;o.state=h,zi(n,r,o,i),a=n.memoizedState,s!==r||h!==a||Ee.current||vn?(typeof p=="function"&&(ro(n,t,p,r),a=n.memoizedState),(s=vn||fa(n,t,s,r,h,a,u))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,lc(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:He(n.type,s),o.props=u,v=n.pendingProps,h=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=Oe(a):(a=Ce(t)?qn:he.current,a=kt(n,a));var x=t.getDerivedStateFromProps;(p=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==v||h!==a)&&da(n,o,r,a),vn=!1,h=n.memoizedState,o.state=h,zi(n,r,o,i);var z=n.memoizedState;s!==v||h!==z||Ee.current||vn?(typeof x=="function"&&(ro(n,t,x,r),z=n.memoizedState),(u=vn||fa(n,t,u,r,h,z,a)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,z,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,z,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=z),o.props=r,o.state=z,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return so(e,n,t,r,l,i)}function so(e,n,t,r,i,l){Rc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&ra(n,t,!1),fn(e,n,l);r=n.stateNode,pd.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Ct(n,e.child,null,l),n.child=Ct(n,null,s,l)):ge(e,n,s,l),n.memoizedState=r.state,i&&ra(n,t,!0),n.child}function jc(e){var n=e.stateNode;n.pendingContext?ta(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ta(e,n.context,!1),Yo(e,n.containerInfo)}function za(e,n,t,r,i){return Et(),Qo(i),n.flags|=256,ge(e,n,t,r),n.child}var ao={dehydrated:null,treeContext:null,retryLane:0};function uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lc(e,n,t){var r=n.pendingProps,i=b.current,l=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(b,i&1),e===null)return no(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ui(o,r,0,null),e=Bn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=uo(t),n.memoizedState=ao,e):os(n,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return hd(e,n,o,r,s,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Tn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=Tn(s,l):(l=Bn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?uo(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=ao,r}return l=e.child,e=l.sibling,r=Tn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function os(e,n){return n=Ui({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Gr(e,n,t,r){return r!==null&&Qo(r),Ct(n,e.child,null,t),e=os(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hd(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=yl(Error(k(422))),Gr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ui({mode:"visible",children:r.children},i,0,null),l=Bn(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Ct(n,e.child,null,o),n.child.memoizedState=uo(o),n.memoizedState=ao,l);if(!(n.mode&1))return Gr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(k(419)),r=yl(l,r,void 0),Gr(e,n,o,r)}if(s=(o&e.childLanes)!==0,ke||s){if(r=se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,cn(e,i),Qe(r,e,i,-1))}return ds(),r=yl(Error(k(421))),Gr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Pd.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,_e=Cn(i.nextSibling),Te=n,Q=!0,We=null,e!==null&&(De[Me++]=rn,De[Me++]=ln,De[Me++]=bn,rn=e.id,ln=e.overflow,bn=n),n=os(n,r.children),n.flags|=4096,n)}function wa(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),to(e.return,n,t)}function zl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Dc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ge(e,n,r.children,t),r=b.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wa(e,t,n);else if(e.tag===19)wa(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(b,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&wi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),zl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&wi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}zl(n,!0,t,null,l);break;case"together":zl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ei(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Xn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Tn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Tn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function md(e,n,t){switch(n.tag){case 3:jc(n),Et();break;case 5:oc(n);break;case 1:Ce(n.type)&&hi(n);break;case 4:Yo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;H(gi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(H(b,b.current&1),n.flags|=128,null):t&n.child.childLanes?Lc(e,n,t):(H(b,b.current&1),e=fn(e,n,t),e!==null?e.sibling:null);H(b,b.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Dc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(b,b.current),r)break;return null;case 22:case 23:return n.lanes=0,Ic(e,n,t)}return fn(e,n,t)}var Mc,co,Ac,$c;Mc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};co=function(){};Ac=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Vn(Je.current);var l=null;switch(t){case"input":i=jl(e,i),r=jl(e,r),l=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":i=Ml(e,i),r=Ml(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=di)}$l(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(rr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(rr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&V("scroll",e),l||s===a||(l=[])):(l=l||[]).push(u,a))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};$c=function(e,n,t,r){t!==r&&(n.flags|=4)};function Gt(e,n){if(!Q)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function vd(e,n,t){var r=n.pendingProps;switch(Bo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return Ce(n.type)&&pi(),de(n),null;case 3:return r=n.stateNode,Nt(),W(Ee),W(he),es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,We!==null&&(zo(We),We=null))),co(e,n),de(n),null;case 5:Jo(n);var i=Vn(mr.current);if(t=n.type,e!==null&&n.stateNode!=null)Ac(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return de(n),null}if(e=Vn(Je.current),Fr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Xe]=n,r[pr]=l,e=(n.mode&1)!==0,t){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Qt.length;i++)V(Qt[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Ts(r,l),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},V("invalid",r);break;case"textarea":Rs(r,l),V("invalid",r)}$l(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Or(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Or(r.textContent,s,e),i=["children",""+s]):rr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&V("scroll",r)}switch(t){case"input":Ir(r),Is(r,l,!0);break;case"textarea":Ir(r),js(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=di)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Xe]=n,e[pr]=r,Mc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ol(t,r),t){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qt.length;i++)V(Qt[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Ts(e,r),i=jl(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":Rs(e,r),i=Ml(e,r),V("invalid",e);break;default:i=r}$l(t,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?hu(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&du(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&ir(e,a):typeof a=="number"&&ir(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(rr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&V("scroll",e):a!=null&&Io(e,l,a,o))}switch(t){case"input":Ir(e),Is(e,r,!1);break;case"textarea":Ir(e),js(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?vt(e,!!r.multiple,l,!1):r.defaultValue!=null&&vt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=di)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)$c(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Vn(mr.current),Vn(Je.current),Fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Xe]=n,(l=r.nodeValue!==t)&&(e=Te,e!==null))switch(e.tag){case 3:Or(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Or(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Xe]=n,n.stateNode=r}return de(n),null;case 13:if(W(b),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&_e!==null&&n.mode&1&&!(n.flags&128))nc(),Et(),n.flags|=98560,l=!1;else if(l=Fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[Xe]=n}else Et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),l=!1}else We!==null&&(zo(We),We=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||b.current&1?re===0&&(re=3):ds())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return Nt(),co(e,n),e===null&&fr(n.stateNode.containerInfo),de(n),null;case 10:return Zo(n.type._context),de(n),null;case 17:return Ce(n.type)&&pi(),de(n),null;case 19:if(W(b),l=n.memoizedState,l===null)return de(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Gt(l,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=wi(e),o!==null){for(n.flags|=128,Gt(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return H(b,b.current&1|2),n.child}e=e.sibling}l.tail!==null&&J()>_t&&(n.flags|=128,r=!0,Gt(l,!1),n.lanes=4194304)}else{if(!r)if(e=wi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Gt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Q)return de(n),null}else 2*J()-l.renderingStartTime>_t&&t!==1073741824&&(n.flags|=128,r=!0,Gt(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=J(),n.sibling=null,t=b.current,H(b,r?t&1|2:t&1),n):(de(n),null);case 22:case 23:return fs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Pe&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function gd(e,n){switch(Bo(n),n.tag){case 1:return Ce(n.type)&&pi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Nt(),W(Ee),W(he),es(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Jo(n),null;case 13:if(W(b),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(b),null;case 4:return Nt(),null;case 10:return Zo(n.type._context),null;case 22:case 23:return fs(),null;case 24:return null;default:return null}}var Hr=!1,pe=!1,yd=typeof WeakSet=="function"?WeakSet:Set,I=null;function pt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){K(e,n,r)}else t.current=null}function fo(e,n,t){try{t()}catch(r){K(e,n,r)}}var xa=!1;function zd(e,n){if(bl=ui,e=Hu(),Vo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,s=-1,a=-1,u=0,p=0,v=e,h=null;n:for(;;){for(var x;v!==t||i!==0&&v.nodeType!==3||(s=o+i),v!==l||r!==0&&v.nodeType!==3||(a=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(x=v.firstChild)!==null;)h=v,v=x;for(;;){if(v===e)break n;if(h===t&&++u===i&&(s=o),h===l&&++p===r&&(a=o),(x=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=x}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Zl={focusedElem:e,selectionRange:t},ui=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var z=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var g=z.memoizedProps,T=z.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?g:He(n.type,g),T);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){K(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return z=xa,xa=!1,z}function Jt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&fo(n,t,l)}i=i.next}while(i!==r)}}function Oi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function po(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Oc(e){var n=e.alternate;n!==null&&(e.alternate=null,Oc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Xe],delete n[pr],delete n[Yl],delete n[nd],delete n[td])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fc(e){return e.tag===5||e.tag===3||e.tag===4}function Sa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ho(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=di));else if(r!==4&&(e=e.child,e!==null))for(ho(e,n,t),e=e.sibling;e!==null;)ho(e,n,t),e=e.sibling}function mo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mo(e,n,t),e=e.sibling;e!==null;)mo(e,n,t),e=e.sibling}var ae=null,Ve=!1;function pn(e,n,t){for(t=t.child;t!==null;)Uc(e,n,t),t=t.sibling}function Uc(e,n,t){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ii,t)}catch{}switch(t.tag){case 5:pe||pt(t,n);case 6:var r=ae,i=Ve;ae=null,pn(e,n,t),ae=r,Ve=i,ae!==null&&(Ve?(e=ae,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ae.removeChild(t.stateNode));break;case 18:ae!==null&&(Ve?(e=ae,t=t.stateNode,e.nodeType===8?dl(e.parentNode,t):e.nodeType===1&&dl(e,t),ar(e)):dl(ae,t.stateNode));break;case 4:r=ae,i=Ve,ae=t.stateNode.containerInfo,Ve=!0,pn(e,n,t),ae=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&fo(t,n,o),i=i.next}while(i!==r)}pn(e,n,t);break;case 1:if(!pe&&(pt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){K(t,n,s)}pn(e,n,t);break;case 21:pn(e,n,t);break;case 22:t.mode&1?(pe=(r=pe)||t.memoizedState!==null,pn(e,n,t),pe=r):pn(e,n,t);break;default:pn(e,n,t)}}function ka(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new yd),n.forEach(function(r){var i=_d.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ge(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Ve=!1;break e;case 3:ae=s.stateNode.containerInfo,Ve=!0;break e;case 4:ae=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(ae===null)throw Error(k(160));Uc(l,o,i),ae=null,Ve=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){K(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gc(n,e),n=n.sibling}function Gc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(n,e),be(e),r&4){try{Jt(3,e,e.return),Oi(3,e)}catch(g){K(e,e.return,g)}try{Jt(5,e,e.return)}catch(g){K(e,e.return,g)}}break;case 1:Ge(n,e),be(e),r&512&&t!==null&&pt(t,t.return);break;case 5:if(Ge(n,e),be(e),r&512&&t!==null&&pt(t,t.return),e.flags&32){var i=e.stateNode;try{ir(i,"")}catch(g){K(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&uu(i,l),Ol(s,o);var u=Ol(s,l);for(o=0;o<a.length;o+=2){var p=a[o],v=a[o+1];p==="style"?hu(i,v):p==="dangerouslySetInnerHTML"?du(i,v):p==="children"?ir(i,v):Io(i,p,v,u)}switch(s){case"input":Ll(i,l);break;case"textarea":cu(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?vt(i,!!l.multiple,x,!1):h!==!!l.multiple&&(l.defaultValue!=null?vt(i,!!l.multiple,l.defaultValue,!0):vt(i,!!l.multiple,l.multiple?[]:"",!1))}i[pr]=l}catch(g){K(e,e.return,g)}}break;case 6:if(Ge(n,e),be(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(g){K(e,e.return,g)}}break;case 3:if(Ge(n,e),be(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ar(n.containerInfo)}catch(g){K(e,e.return,g)}break;case 4:Ge(n,e),be(e);break;case 13:Ge(n,e),be(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(us=J())),r&4&&ka(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(pe=(u=pe)||p,Ge(n,e),pe=u):Ge(n,e),be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(I=e,p=e.child;p!==null;){for(v=I=p;I!==null;){switch(h=I,x=h.child,h.tag){case 0:case 11:case 14:case 15:Jt(4,h,h.return);break;case 1:pt(h,h.return);var z=h.stateNode;if(typeof z.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,z.props=n.memoizedProps,z.state=n.memoizedState,z.componentWillUnmount()}catch(g){K(r,t,g)}}break;case 5:pt(h,h.return);break;case 22:if(h.memoizedState!==null){Ca(v);continue}}x!==null?(x.return=h,I=x):Ca(v)}p=p.sibling}e:for(p=null,v=e;;){if(v.tag===5){if(p===null){p=v;try{i=v.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=v.stateNode,a=v.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=pu("display",o))}catch(g){K(e,e.return,g)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(g){K(e,e.return,g)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ge(n,e),be(e),r&4&&ka(e);break;case 21:break;default:Ge(n,e),be(e)}}function be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Fc(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ir(i,""),r.flags&=-33);var l=Sa(e);mo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Sa(e);ho(e,s,o);break;default:throw Error(k(161))}}catch(a){K(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wd(e,n,t){I=e,Hc(e)}function Hc(e,n,t){for(var r=(e.mode&1)!==0;I!==null;){var i=I,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Hr;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||pe;s=Hr;var u=pe;if(Hr=o,(pe=a)&&!u)for(I=i;I!==null;)o=I,a=o.child,o.tag===22&&o.memoizedState!==null?Na(i):a!==null?(a.return=o,I=a):Na(i);for(;l!==null;)I=l,Hc(l),l=l.sibling;I=i,Hr=s,pe=u}Ea(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,I=l):Ea(e)}}function Ea(e){for(;I!==null;){var n=I;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||Oi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!pe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:He(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&aa(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}aa(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&ar(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}pe||n.flags&512&&po(n)}catch(h){K(n,n.return,h)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function Ca(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function Na(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Oi(4,n)}catch(a){K(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){K(n,i,a)}}var l=n.return;try{po(n)}catch(a){K(n,l,a)}break;case 5:var o=n.return;try{po(n)}catch(a){K(n,o,a)}}}catch(a){K(n,n.return,a)}if(n===e){I=null;break}var s=n.sibling;if(s!==null){s.return=n.return,I=s;break}I=n.return}}var xd=Math.ceil,ki=dn.ReactCurrentDispatcher,ss=dn.ReactCurrentOwner,$e=dn.ReactCurrentBatchConfig,O=0,se=null,ee=null,ue=0,Pe=0,ht=Ln(0),re=0,zr=null,Xn=0,Fi=0,as=0,er=null,Se=null,us=0,_t=1/0,nn=null,Ei=!1,vo=null,Pn=null,Vr=!1,xn=null,Ci=0,nr=0,go=null,ni=-1,ti=0;function ye(){return O&6?J():ni!==-1?ni:ni=J()}function _n(e){return e.mode&1?O&2&&ue!==0?ue&-ue:id.transition!==null?(ti===0&&(ti=Nu()),ti):(e=U,e!==0||(e=window.event,e=e===void 0?16:Lu(e.type)),e):1}function Qe(e,n,t,r){if(50<nr)throw nr=0,go=null,Error(k(185));Sr(e,t,r),(!(O&2)||e!==se)&&(e===se&&(!(O&2)&&(Fi|=t),re===4&&zn(e,ue)),Ne(e,r),t===1&&O===0&&!(n.mode&1)&&(_t=J()+500,Mi&&Dn()))}function Ne(e,n){var t=e.callbackNode;rf(e,n);var r=ai(e,e===se?ue:0);if(r===0)t!==null&&Ms(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ms(t),n===1)e.tag===0?rd(Pa.bind(null,e)):Yu(Pa.bind(null,e)),Jf(function(){!(O&6)&&Dn()}),t=null;else{switch(Pu(r)){case 1:t=Mo;break;case 4:t=Eu;break;case 16:t=si;break;case 536870912:t=Cu;break;default:t=si}t=Xc(t,Vc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Vc(e,n){if(ni=-1,ti=0,O&6)throw Error(k(327));var t=e.callbackNode;if(xt()&&e.callbackNode!==t)return null;var r=ai(e,e===se?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ni(e,r);else{n=r;var i=O;O|=2;var l=Bc();(se!==e||ue!==n)&&(nn=null,_t=J()+500,Wn(e,n));do try{Ed();break}catch(s){Wc(e,s)}while(1);bo(),ki.current=l,O=i,ee!==null?n=0:(se=null,ue=0,n=re)}if(n!==0){if(n===2&&(i=Vl(e),i!==0&&(r=i,n=yo(e,i))),n===1)throw t=zr,Wn(e,0),zn(e,r),Ne(e,J()),t;if(n===6)zn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Sd(i)&&(n=Ni(e,r),n===2&&(l=Vl(e),l!==0&&(r=l,n=yo(e,l))),n===1))throw t=zr,Wn(e,0),zn(e,r),Ne(e,J()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Un(e,Se,nn);break;case 3:if(zn(e,r),(r&130023424)===r&&(n=us+500-J(),10<n)){if(ai(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(Un.bind(null,e,Se,nn),n);break}Un(e,Se,nn);break;case 4:if(zn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Be(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xd(r/1960))-r,10<r){e.timeoutHandle=Kl(Un.bind(null,e,Se,nn),r);break}Un(e,Se,nn);break;case 5:Un(e,Se,nn);break;default:throw Error(k(329))}}}return Ne(e,J()),e.callbackNode===t?Vc.bind(null,e):null}function yo(e,n){var t=er;return e.current.memoizedState.isDehydrated&&(Wn(e,n).flags|=256),e=Ni(e,n),e!==2&&(n=Se,Se=t,n!==null&&zo(n)),e}function zo(e){Se===null?Se=e:Se.push.apply(Se,e)}function Sd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!qe(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function zn(e,n){for(n&=~as,n&=~Fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Be(n),r=1<<t;e[t]=-1,n&=~r}}function Pa(e){if(O&6)throw Error(k(327));xt();var n=ai(e,0);if(!(n&1))return Ne(e,J()),null;var t=Ni(e,n);if(e.tag!==0&&t===2){var r=Vl(e);r!==0&&(n=r,t=yo(e,r))}if(t===1)throw t=zr,Wn(e,0),zn(e,n),Ne(e,J()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Un(e,Se,nn),Ne(e,J()),null}function cs(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(_t=J()+500,Mi&&Dn())}}function Kn(e){xn!==null&&xn.tag===0&&!(O&6)&&xt();var n=O;O|=1;var t=$e.transition,r=U;try{if($e.transition=null,U=1,e)return e()}finally{U=r,$e.transition=t,O=n,!(O&6)&&Dn()}}function fs(){Pe=ht.current,W(ht)}function Wn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Yf(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(Bo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pi();break;case 3:Nt(),W(Ee),W(he),es();break;case 5:Jo(r);break;case 4:Nt();break;case 13:W(b);break;case 19:W(b);break;case 10:Zo(r.type._context);break;case 22:case 23:fs()}t=t.return}if(se=e,ee=e=Tn(e.current,null),ue=Pe=n,re=0,zr=null,as=Fi=Xn=0,Se=er=null,Hn!==null){for(n=0;n<Hn.length;n++)if(t=Hn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Hn=null}return e}function Wc(e,n){do{var t=ee;try{if(bo(),Yr.current=Si,xi){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xi=!1}if(Zn=0,oe=ne=Z=null,Yt=!1,vr=0,ss.current=null,t===null||t.return===null){re=1,zr=n,ee=null;break}e:{var l=e,o=t.return,s=t,a=n;if(n=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,v=p.tag;if(!(p.mode&1)&&(v===0||v===11||v===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=ha(o);if(x!==null){x.flags&=-257,ma(x,o,s,l,n),x.mode&1&&pa(l,u,n),n=x,a=u;var z=n.updateQueue;if(z===null){var g=new Set;g.add(a),n.updateQueue=g}else z.add(a);break e}else{if(!(n&1)){pa(l,u,n),ds();break e}a=Error(k(426))}}else if(Q&&s.mode&1){var T=ha(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),ma(T,o,s,l,n),Qo(Pt(a,s));break e}}l=a=Pt(a,s),re!==4&&(re=2),er===null?er=[l]:er.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=Pc(l,a,n);sa(l,f);break e;case 1:s=a;var c=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Pn===null||!Pn.has(d)))){l.flags|=65536,n&=-n,l.lanes|=n;var w=_c(l,s,n);sa(l,w);break e}}l=l.return}while(l!==null)}qc(t)}catch(E){n=E,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(1)}function Bc(){var e=ki.current;return ki.current=Si,e===null?Si:e}function ds(){(re===0||re===3||re===2)&&(re=4),se===null||!(Xn&268435455)&&!(Fi&268435455)||zn(se,ue)}function Ni(e,n){var t=O;O|=2;var r=Bc();(se!==e||ue!==n)&&(nn=null,Wn(e,n));do try{kd();break}catch(i){Wc(e,i)}while(1);if(bo(),O=t,ki.current=r,ee!==null)throw Error(k(261));return se=null,ue=0,re}function kd(){for(;ee!==null;)Qc(ee)}function Ed(){for(;ee!==null&&!b0();)Qc(ee)}function Qc(e){var n=Zc(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?qc(e):ee=n,ss.current=null}function qc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=gd(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(t=vd(t,n,Pe),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);re===0&&(re=5)}function Un(e,n,t){var r=U,i=$e.transition;try{$e.transition=null,U=1,Cd(e,n,t,r)}finally{$e.transition=i,U=r}return null}function Cd(e,n,t,r){do xt();while(xn!==null);if(O&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(lf(e,l),e===se&&(ee=se=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Vr||(Vr=!0,Xc(si,function(){return xt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=$e.transition,$e.transition=null;var o=U;U=1;var s=O;O|=4,ss.current=null,zd(e,t),Gc(t,e),Bf(Zl),ui=!!bl,Zl=bl=null,e.current=t,wd(t),Z0(),O=s,U=o,$e.transition=l}else e.current=t;if(Vr&&(Vr=!1,xn=e,Ci=i),l=e.pendingLanes,l===0&&(Pn=null),Y0(t.stateNode),Ne(e,J()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ei)throw Ei=!1,e=vo,vo=null,e;return Ci&1&&e.tag!==0&&xt(),l=e.pendingLanes,l&1?e===go?nr++:(nr=0,go=e):nr=0,Dn(),null}function xt(){if(xn!==null){var e=Pu(Ci),n=$e.transition,t=U;try{if($e.transition=null,U=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,Ci=0,O&6)throw Error(k(331));var i=O;for(O|=4,I=e.current;I!==null;){var l=I,o=l.child;if(I.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(I=u;I!==null;){var p=I;switch(p.tag){case 0:case 11:case 15:Jt(8,p,l)}var v=p.child;if(v!==null)v.return=p,I=v;else for(;I!==null;){p=I;var h=p.sibling,x=p.return;if(Oc(p),p===u){I=null;break}if(h!==null){h.return=x,I=h;break}I=x}}}var z=l.alternate;if(z!==null){var g=z.child;if(g!==null){z.child=null;do{var T=g.sibling;g.sibling=null,g=T}while(g!==null)}}I=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,I=o;else e:for(;I!==null;){if(l=I,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Jt(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,I=f;break e}I=l.return}}var c=e.current;for(I=c;I!==null;){o=I;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,I=d;else e:for(o=c;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Oi(9,s)}}catch(E){K(s,s.return,E)}if(s===o){I=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,I=w;break e}I=s.return}}if(O=i,Dn(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ii,e)}catch{}r=!0}return r}finally{U=t,$e.transition=n}}return!1}function _a(e,n,t){n=Pt(t,n),n=Pc(e,n,1),e=Nn(e,n,1),n=ye(),e!==null&&(Sr(e,1,n),Ne(e,n))}function K(e,n,t){if(e.tag===3)_a(e,e,t);else for(;n!==null;){if(n.tag===3){_a(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=Pt(t,e),e=_c(n,e,1),n=Nn(n,e,1),e=ye(),n!==null&&(Sr(n,1,e),Ne(n,e));break}}n=n.return}}function Nd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,se===e&&(ue&t)===t&&(re===4||re===3&&(ue&130023424)===ue&&500>J()-us?Wn(e,0):as|=t),Ne(e,n)}function bc(e,n){n===0&&(e.mode&1?(n=Lr,Lr<<=1,!(Lr&130023424)&&(Lr=4194304)):n=1);var t=ye();e=cn(e,n),e!==null&&(Sr(e,n,t),Ne(e,t))}function Pd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),bc(e,t)}function _d(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),bc(e,t)}var Zc;Zc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ee.current)ke=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ke=!1,md(e,n,t);ke=!!(e.flags&131072)}else ke=!1,Q&&n.flags&1048576&&Ju(n,vi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ei(e,n),e=n.pendingProps;var i=kt(n,he.current);wt(n,t),i=ts(null,n,r,e,i,t);var l=rs();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ce(r)?(l=!0,hi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ko(n),i.updater=$i,n.stateNode=i,i._reactInternals=n,io(n,r,e,t),n=so(null,n,r,!0,l,t)):(n.tag=0,Q&&l&&Wo(n),ge(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ei(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Id(r),e=He(r,e),i){case 0:n=oo(null,n,r,e,t);break e;case 1:n=ya(null,n,r,e,t);break e;case 11:n=va(null,n,r,e,t);break e;case 14:n=ga(null,n,r,He(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),oo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),ya(e,n,r,i,t);case 3:e:{if(jc(n),e===null)throw Error(k(387));r=n.pendingProps,l=n.memoizedState,i=l.element,lc(e,n),zi(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Pt(Error(k(423)),n),n=za(e,n,r,t,i);break e}else if(r!==i){i=Pt(Error(k(424)),n),n=za(e,n,r,t,i);break e}else for(_e=Cn(n.stateNode.containerInfo.firstChild),Te=n,Q=!0,We=null,t=rc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Et(),r===i){n=fn(e,n,t);break e}ge(e,n,r,t)}n=n.child}return n;case 5:return oc(n),e===null&&no(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Xl(r,i)?o=null:l!==null&&Xl(r,l)&&(n.flags|=32),Rc(e,n),ge(e,n,o,t),n.child;case 6:return e===null&&no(n),null;case 13:return Lc(e,n,t);case 4:return Yo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ct(n,null,r,t):ge(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),va(e,n,r,i,t);case 7:return ge(e,n,n.pendingProps,t),n.child;case 8:return ge(e,n,n.pendingProps.children,t),n.child;case 12:return ge(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,H(gi,r._currentValue),r._currentValue=o,l!==null)if(qe(l.value,o)){if(l.children===i.children&&!Ee.current){n=fn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=sn(-1,t&-t),a.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),to(l.return,t,n),s.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(k(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),to(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ge(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,wt(n,t),i=Oe(i),r=r(i),n.flags|=1,ge(e,n,r,t),n.child;case 14:return r=n.type,i=He(r,n.pendingProps),i=He(r.type,i),ga(e,n,r,i,t);case 15:return Tc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),ei(e,n),n.tag=1,Ce(r)?(e=!0,hi(n)):e=!1,wt(n,t),Nc(n,r,i),io(n,r,i,t),so(null,n,r,!0,e,t);case 19:return Dc(e,n,t);case 22:return Ic(e,n,t)}throw Error(k(156,n.tag))};function Xc(e,n){return ku(e,n)}function Td(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,n,t,r){return new Td(e,n,t,r)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Id(e){if(typeof e=="function")return ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jo)return 11;if(e===Lo)return 14}return 2}function Tn(e,n){var t=e.alternate;return t===null?(t=Ae(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ri(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")ps(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case it:return Bn(t.children,i,l,n);case Ro:o=8,i|=8;break;case _l:return e=Ae(12,t,n,i|2),e.elementType=_l,e.lanes=l,e;case Tl:return e=Ae(13,t,n,i),e.elementType=Tl,e.lanes=l,e;case Il:return e=Ae(19,t,n,i),e.elementType=Il,e.lanes=l,e;case ou:return Ui(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case iu:o=10;break e;case lu:o=9;break e;case jo:o=11;break e;case Lo:o=14;break e;case mn:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Ae(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Bn(e,n,t,r){return e=Ae(7,e,r,n),e.lanes=t,e}function Ui(e,n,t,r){return e=Ae(22,e,r,n),e.elementType=ou,e.lanes=t,e.stateNode={isHidden:!1},e}function wl(e,n,t){return e=Ae(6,e,null,n),e.lanes=t,e}function xl(e,n,t){return n=Ae(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Rd(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hs(e,n,t,r,i,l,o,s,a){return e=new Rd(e,n,t,s,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ae(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ko(l),e}function jd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Kc(e){if(!e)return Rn;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Ce(t))return Ku(e,t,n)}return n}function Yc(e,n,t,r,i,l,o,s,a){return e=hs(t,r,!0,e,i,l,o,s,a),e.context=Kc(null),t=e.current,r=ye(),i=_n(t),l=sn(r,i),l.callback=n??null,Nn(t,l,i),e.current.lanes=i,Sr(e,i,r),Ne(e,r),e}function Gi(e,n,t,r){var i=n.current,l=ye(),o=_n(i);return t=Kc(t),n.context===null?n.context=t:n.pendingContext=t,n=sn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Nn(i,n,o),e!==null&&(Qe(e,i,o,l),Kr(e,i,o)),o}function Pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ta(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ms(e,n){Ta(e,n),(e=e.alternate)&&Ta(e,n)}function Ld(){return null}var Jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function vs(e){this._internalRoot=e}Hi.prototype.render=vs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Gi(e,n,null,null)};Hi.prototype.unmount=vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kn(function(){Gi(null,e,null,null)}),n[un]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Iu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<yn.length&&n!==0&&n<yn[t].priority;t++);yn.splice(t,0,e),t===0&&ju(e)}};function gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ia(){}function Dd(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=Pi(o);l.call(u)}}var o=Yc(n,r,e,0,null,!1,!1,"",Ia);return e._reactRootContainer=o,e[un]=o.current,fr(e.nodeType===8?e.parentNode:e),Kn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Pi(a);s.call(u)}}var a=hs(e,0,!1,null,null,!1,!1,"",Ia);return e._reactRootContainer=a,e[un]=a.current,fr(e.nodeType===8?e.parentNode:e),Kn(function(){Gi(n,a,t,r)}),a}function Wi(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=Pi(o);s.call(a)}}Gi(n,o,e,i)}else o=Dd(t,n,e,i,r);return Pi(o)}_u=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Bt(n.pendingLanes);t!==0&&(Ao(n,t|1),Ne(n,J()),!(O&6)&&(_t=J()+500,Dn()))}break;case 13:Kn(function(){var r=cn(e,1);if(r!==null){var i=ye();Qe(r,e,1,i)}}),ms(e,1)}};$o=function(e){if(e.tag===13){var n=cn(e,134217728);if(n!==null){var t=ye();Qe(n,e,134217728,t)}ms(e,134217728)}};Tu=function(e){if(e.tag===13){var n=_n(e),t=cn(e,n);if(t!==null){var r=ye();Qe(t,e,n,r)}ms(e,n)}};Iu=function(){return U};Ru=function(e,n){var t=U;try{return U=e,n()}finally{U=t}};Ul=function(e,n,t){switch(n){case"input":if(Ll(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Di(r);if(!i)throw Error(k(90));au(r),Ll(r,i)}}}break;case"textarea":cu(e,t);break;case"select":n=t.value,n!=null&&vt(e,!!t.multiple,n,!1)}};gu=cs;yu=Kn;var Md={usingClientEntryPoint:!1,Events:[Er,at,Di,mu,vu,cs]},Ht={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ad={bundleType:Ht.bundleType,version:Ht.version,rendererPackageName:Ht.rendererPackageName,rendererConfig:Ht.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ht.findFiberByHostInstance||Ld,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Ii=Wr.inject(Ad),Ye=Wr}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md;Re.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gs(n))throw Error(k(200));return jd(e,n,null,t)};Re.createRoot=function(e,n){if(!gs(e))throw Error(k(299));var t=!1,r="",i=Jc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=hs(e,1,!1,null,null,t,!1,r,i),e[un]=n.current,fr(e.nodeType===8?e.parentNode:e),new vs(n)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=xu(n),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Kn(e)};Re.hydrate=function(e,n,t){if(!Vi(n))throw Error(k(200));return Wi(null,e,n,!0,t)};Re.hydrateRoot=function(e,n,t){if(!gs(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Jc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Yc(n,null,e,1,t??null,i,!1,l,o),e[un]=n.current,fr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Hi(n)};Re.render=function(e,n,t){if(!Vi(n))throw Error(k(200));return Wi(null,e,n,!1,t)};Re.unmountComponentAtNode=function(e){if(!Vi(e))throw Error(k(40));return e._reactRootContainer?(Kn(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Re.unstable_batchedUpdates=cs;Re.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Vi(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Wi(e,n,t,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function e0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e0)}catch(e){console.error(e)}}e0(),eu.exports=Re;var $d=eu.exports,Ra=$d;Nl.createRoot=Ra.createRoot,Nl.hydrateRoot=Ra.hydrateRoot;class ja extends P.Component{constructor(n){super(n),this.state={error:!1}}static getDerivedStateFromError(n){return{error:!0}}static getDerivedStateFromProps(n){return{error:n.error}}componentDidCatch(n,t){this.props.onError(n,t)}render(){return this.state.error?null:this.props.children}}const Sl={0:BigInt(1),1:BigInt(10),2:BigInt(100),3:BigInt(1e3),4:BigInt(1e4),5:BigInt(1e5),6:BigInt(1e6),7:BigInt(1e7),8:BigInt(1e8),9:BigInt(1e9),10:BigInt(1e10)},kl=e=>(Sl[e]||(Sl[e]=BigInt(10)**BigInt(e)),Sl[e]),El=16,en=16;class La{constructor(n=0,t){if(typeof n=="bigint"){this._n=n,this.precision=t||El;return}typeof n=="number"&&(n===0?n="0.0":n=n.toFixed(-Math.log10(Math.abs(n))+El)),typeof n=="string"&&n.match(/e/)&&(n=parseFloat(n).toFixed(El));let[r,i]=n.split(".").concat("");this.precision=t||i.length||1,this._n=BigInt(r+i.padEnd(this.precision,"0").slice(0,this.precision))}toPrecision(n){n!==this.precision&&(n>this.precision?this._n*=BigInt(10)**BigInt(n-this.precision):this._n/=BigInt(10)**BigInt(this.precision-n),this.precision=n)}adapt(n){return n=F(n),this.precision>n.precision?n.toPrecision(this.precision):this.precision<n.precision&&this.toPrecision(n.precision),n}add(n){return n instanceof Ke?n.add(this):(n=this.adapt(n),F(this._n+n._n,this.precision))}subtract(n){return n instanceof Ke?n.neg().add(this):(n=this.adapt(n),F(this._n-n._n,this.precision))}multiply(n){return n instanceof Ke?n.multiply(this):(n=this.adapt(n),F(this._n*n._n/kl(this.precision),this.precision))}divide(n){return n instanceof Ke?n.pow(-1).multiply(this):(n=this.adapt(n),F(this._n*kl(this.precision)/n._n,this.precision))}pow(n){if(n instanceof Ke)return n.pow(this);let t=this;if(n%1===0){for(let r=1;r<n;r++)t=t.multiply(this);return t}return n=this.adapt(n),t.log().multiply(n).exp()}tetra(n){let t=F(1);for(let r=0;r<n;r++)t=this.pow(t);return t}abs(){return F(this._n<0?-this._n:this._n,this.precision)}sign(){return F(this._n<0?-1:this._n>0?1:0)}neg(){return this._n=-this._n,this}nop(){return this}sqrt(){const n=this.precision;let t=this._n,r=t,i=(t+1n)/2n;for(;i<r;)r=i,i=(r+t/r)/2n;return F(r,n)}atan(){const n=this.precision;let t=this,r=F(0,n);for(let i=1;i<en;i+=2)r=r.add(t.pow(i).divide(i)),t=t.neg();return r}exp(){const n=this.precision;let t=this,r=F(1,n);for(let i=1;i<en;i++)r=r.add(t.pow(i).divide(i));return r}frexp(){let n=this,t=F();for(;n.gt(F(1));)n=n.divide(2),t=t.add(1);return[n,t]}log(){const n=this.precision,[t,r]=this.frexp();let i=t.subtract(1),l=F(),o=1;for(let s=1;s<n;s++)l=l.add(i.pow(s).divide(s).multiply(o)),o*=-1;return l.add(r.multiply(Od(n)))}cos(){const n=this.precision;let t=this,r=F(1,n),i=-1;for(let l=2;l<en;l+=2)r=r.add(t.pow(l).divide(l).neg().multiply(i)),i*=-1;return r}sin(){let n=this,t=n,r=-1;for(let i=3;i<en;i+=2)t=t.add(n.pow(i).divide(i).neg().multiply(r)),r*=-1;return t}tan(){this.precision;let n=this,t=n,r=1;for(let i=3;i<en;i+=2)t=t.add(n.pow(i).divide(i).multiply(r)),r*=-1;return t}sinh(){const n=this.precision;let t=this,r=F(1,n);for(let i=2;i<en;i+=2)r=r.add(t.pow(i).divide(i));return r}cosh(){const n=this.precision;let t=this,r=F(1,n);for(let i=2;i<en;i+=2)r=r.add(t.pow(i).divide(i));return r}acos(){const n=this.precision;let t=this,r=F(0,n),i=1;for(let l=1;l<en;l+=2)r=r.add(t.pow(l).divide(l).multiply(i)),i*=-1;return r}asin(){const n=this.precision;let t=this,r=F(0,n),i=1;for(let l=1;l<en;l+=2)r=r.add(t.pow(l).divide(l).multiply(i)),i*=-1;return r}toExp(){}eq(n){return n=this.adapt(n),this._n===n._n}gt(n){return n=this.adapt(n),this._n>n._n}lt(n){return n=this.adapt(n),this._n<n._n}gte(n){return n=this.adapt(n),this._n>=n._n}lte(n){return n=this.adapt(n),this._n<=n._n}toNumber(){return Number(this._n)/Number(kl(this.precision))}toString(){let n=this._n.toString().replace("-","").padStart(this.precision+1,"0");return n=(n.slice(0,-this.precision)+"."+n.slice(-this.precision)).replace(/(\.0*|0+)$/,""),this._n<0?"-"+n:n}}const F=(e,n)=>!n&&e instanceof La?e:new La(e,n);let Ke=class xe{constructor(n,t){this.re=n,this.im=t}add(n){return n=y(n),new xe(this.re.add(n.re),this.im.add(n.im))}subtract(n){return n=y(n),new xe(this.re.subtract(n.re),this.im.subtract(n.im))}multiply(n){return n=y(n),new xe(this.re.multiply(n.re).subtract(this.im.multiply(n.im)),this.re.multiply(n.im).add(this.im.multiply(n.re)))}divide(n){n=y(n);const t=n.re.multiply(n.re).add(n.im.multiply(n.im));return new xe(this.re.multiply(n.re).add(this.im.multiply(n.im)).divide(t),this.im.multiply(n.re).subtract(this.re.multiply(n.im)).divide(t))}neg(){return new xe(this.re.neg(),this.im.neg())}exp(){const n=this.re.exp();return new xe(this.im.cos().multiply(n),this.im.sin().multiply(n))}atan2(){const{re:n,im:t}=this,r=n.abs(),i=t.abs();if(r._n===0n&&i._n===0n)return F(0);if(r._n===0n)return t>0n?F(Math.PI/2):F(-Math.PI/2);const o=t.divide(n).atan();return n._n>0n?o:t._n>=0n?o.add(Math.PI):o.subtract(Math.PI)}sqrt(){const n=this.abs().sqrt(),t=this.arg().divide(2);return new xe(n.multiply(t.cos()),n.multiply(t.sin()))}cos(){return new xe(this.re.cos().multiply(this.im.sinh()),this.re.sin().multiply(this.im.cosh()))}sin(){return new xe(this.re.sin().multiply(this.im.cosh()),this.re.cos().multiply(this.im.sinh()))}tan(){return this.sin().divide(this.cos())}sinh(){return new xe(this.re.sinh().multiply(this.im.cos()),this.re.cosh().multiply(this.im.sin()))}cosh(){return new xe(this.re.cosh().multiply(this.im.cos()),this.re.sinh().multiply(this.im.sin()))}tanh(){return this.sinh().divide(this.cosh())}asin(){return this.multiply(this).neg().add(1).sqrt().add(this.im).log().neg().multiply(y(0,1))}acos(){return this.multiply(this).neg().add(1).sqrt().add(this).log().neg().multiply(y(0,1))}atan(){return this.add(y(0,1)).log().neg().multiply(y(0,.5))}asinh(){return this.multiply(this).add(1).sqrt().add(this).log()}acosh(){return this.multiply(this).subtract(1).sqrt().add(this).log()}atanh(){return this.add(1).divide(this.neg().add(1)).log().multiply(y(.5))}log(){return new xe(this.abs().log(),this.arg())}pow(n){if(n=y(n),n.im.toNumber()===0){const t=n.re.toNumber();if(t%1===0){if(t===0)return y(1);if(t===1)return this;if(t===2)return this.multiply(this);if(t===3)return this.multiply(this).multiply(this);if(t===4){const i=this.multiply(this);return i.multiply(i)}if(t===5){const i=this.multiply(this);return i.multiply(i).multiply(this)}if(t===6){const i=this.multiply(this);return i.multiply(i).multiply(i)}if(t===7){const i=this.multiply(this);return i.multiply(i).multiply(i).multiply(this)}if(t===8){const i=this.multiply(this),l=i.multiply(i);return l.multiply(l)}if(t===9){const i=this.multiply(this),l=i.multiply(i);return l.multiply(l).multiply(this)}let r=this;for(let i=1;i<t;i++)r=r.multiply(this);return r}}return this.re.toNumber()===0&&this.im.toNumber()===0?y(0):n.re.toNumber()===0&&n.im.toNumber()===0?y(1):this.log().multiply(n).exp()}tetra(n){let t=y(1);for(let r=0;r<n;r++)t=this.pow(t);return t}norm2(){return this.re.multiply(this.re).add(this.im.multiply(this.im))}norm(){return F(this.norm2().sqrt())}arg(){return this.atan2()}conj(){return y(this.re,-this.im)}real(){return this.re}imag(){return this.im}toString(){return`complex: <${this.re}+${this.im}i>`}to2fv(){return[this.re.toNumber(),this.im.toNumber()]}static isComplexString(n){return n.match(/^complex: <.+\+.+i>$/)}static fromString(n){const t=n.match(/^complex: <(.+)\+(.+)i>$/);if(!t)throw new Error("Invalid complex string");const[,r,i]=t;return new xe(F(r),F(i))}};const Od=e=>F("0.6931471805599453094172321214581765680755001343602552541206800094933936219696947156058633269964186875420014810205706857336855202357581305570326707516350759619307275708283714351903070386238916734711233501153644979552391204751726815749320651555247341395258829504530070953263666426541042391578149520437404303855008019441706416715186447128399681717845469570262716310645461502572074024816377733896385506952606683411372738737229289564935470257626520988596932019650585547647033067936544325476327449512504060694381471046899465",e),y=(e=0,n=0,t=null)=>e instanceof Ke?e:new Ke(F(e,t),F(n,t));window.m=F;window.cx=y;const Fd={whitespace:/^\s+/,float:/^([0-9]+([.][0-9]*)?|[.][0-9]+)/,integer:/^[0-9]+/,operator:/^(\*\*|[+\-*/]|\^{1,2}|\|-\|)/,unaryPrefix:/^~/,unarySuffix:/^#/,identifier:/^[a-zA-Z_][a-zA-Z0-9_]*'*/,pipe:/^\|/,lparen:/^\(/,rparen:/^\)/,comma:/^,/},Le={"+":1,"-":2,"*":3,"/":4,"~":5,"^":6,"^^":6};class Ud{constructor(n,t,r,i){this.type=n,this.value=t,this.start=r,this.end=i}toString(){return`<${this.type}: ${this.value} at ${this.start}-${this.end}>`}}const n0=["PI","TAU","ETA","PHI","GAMMA","E","SQRT2","SQRT3","LN10","LN2","LEMNISCATE","GAUSS"],Gd={"+":"cadd","-":"csub","*":"cmul","/":"cdiv","^":"cpow","^^":"ctetra","|-|":"diffabs"},wo={R:"R",I:"I",sqrt:"csqrt",cos:"ccos",sin:"csin",tan:"ctan",acos:"cacos",asin:"casin",atan:"catan",cosh:"ccosh",sinh:"csinh",tanh:"ctanh",acosh:"cacosh",asinh:"casinh",atanh:"catanh",log:"clog",exp:"cexp",abs:"cnorm",beta:"cbeta","beta'":"cdbeta",gamma:"cgamma","gamma'":"cdgamma",factorial:"cfactorial",eta:"ceta",zeta:"czeta","zeta'":"cdzeta",psi:"cpsi",polygamma:"cpolygamma",phi:"cphi",xi:"cxi",li:"cli",sn:"csn",cn:"ccn",dn:"cdn",arg:"carg",norm:"cnorm",tania:"ctania","tania'":"cdtania",atania:"catania","atania'":"cdatania",doya:"cdoya",filog:"cfilog",tet:"ctet",ate:"cate",tetra:"ctetranat",fibonacci:"cfibonacci",weierstrass:"cweierstrass","weierstrass'":"cdweierstrass",nome:"cnome",ellk:"cellk",ellfi:"cellipticFi"},Da={"+":(e,n)=>e+n,"-":(e,n)=>e-n,"*":(e,n)=>e*n,"/":(e,n)=>e/n,"^":(e,n)=>e**n,"^^":(e,n)=>{let t=1;for(let r=0;r<n;r++)t=e**t;return t}},Hd={"-":"-","~":"conj",abs:"abs",sign:"sign"},Vd={"+":"add","-":"subtract","*":"multiply","/":"divide","^":"pow","^^":"tetra"},Wd={"-":"neg","~":"conj",abs:"abs",sign:"sign"};class S{constructor(n,t,r){this.type=n,this.left=t,this.right=r}is(n){return this.type===n.type&&this.left.is(n.left)&&this.right.is(n.right)}clone(n=null,t=null){let r=this.left,i=this.right;return n&&(r.is(n)&&(r=t),i.is(n)&&(i=t)),new S(this.type,r.clone(n,t),i.clone(n,t))}isPureReal(){return this.left.isPureReal()&&this.right.isPureReal()||this.left.isPureImag()&&this.right.isPureImag()}isPureImag(){return["+","-"].includes(this.type)?this.left.isPureImag()&&this.right.isPureImag():["*","/"].includes(this.type)?this.left.isPureImag()&&this.right.isPureReal()||this.left.isPureReal()&&this.right.isPureImag():!1}toTree(){return`<${this.type}: ${this.left.toTree()} ${this.right.toTree()}>`}toString(){let n=this.left.toString(),t=this.right.toString();return this.type==="complex"?`(${n} + ${t}i)`:((this.left instanceof S&&Le[this.left.type]<Le[this.type]||Le[this.left.type]===Le[this.type]&&["-","/","^","^^"].includes(this.type))&&(n=`(${n})`),(this.right instanceof S&&Le[this.right.type]<Le[this.type]||Le[this.right.type]===Le[this.type]&&["-","/","^","^^"].includes(this.type))&&(t=`(${t})`),["^","^^"].includes(this.type)?`${n}${this.type}${t}`:`${n} ${this.type} ${t}`)}toShader(){if(this.type==="^"&&(this.right.type==="number"||this.right instanceof te&&this.right.operand.type==="number")){let n=0;return this.right instanceof te?n=this.right.operand.value*(this.right.type==="-"?-1:1):n=this.right.value,n%1===0?n===1?this.left.toShader():n>0&&n<10?`cpow${n}(${this.left.toShader()})`:`cpow(${this.left.toShader()}, ${n})`:`cpow(${this.left.toShader()}, ${n})`}return`${Gd[this.type]}(${this.left.toShader()}, ${this.right.toShader()})`}toComplex(){return`(${this.left.toComplex()}).${Vd[this.type]}(${this.right.toComplex()})`}toDerivative(n,t){const r=[...n,...t];if(["+","-"].includes(this.type))return new S(this.type,this.left.toDerivative(n,t),this.right.toDerivative(n,t));if(this.type==="*")return new S("+",new S("*",this.left.toDerivative(n,t),this.right),new S("*",this.left,this.right.toDerivative(n,t)));if(this.type==="/")return new S("/",new S("-",new S("*",this.left.toDerivative(n,t),this.right),new S("*",this.left,this.right.toDerivative(n,t))),new S("^",this.right,new L("number",2)));if(this.type==="^")return new S("*",new S("^",this.left,new S("-",this.right,new L("number",1))),new S("+",new S("*",this.right,this.left.toDerivative(n,t)),new S("*",new S("*",this.left,new G("log",[this.left])),this.right.toDerivative(n,t))));if(this.type==="^^"){if((this.left.type==="number"||this.left.type==="identifier"&&!r.includes(this.left.value))&&(this.right.type==="number"||this.right.type==="identifier"&&!r.includes(this.right.value)))return this;const i=(l,o)=>o<=1?new L("number",1):new S("*",new S("^^",l,new L("number",o)),new S("+",new S("*",i(l,o-1),new G("log",[l])),new S("*",new S("^^",l,new L("number",o-1)),new S("/",new L("number",1),l))));if(this.right.type==="number")return new S("*",this.left.toDerivative(n,t),i(this.left,this.right.value))}return new S(this.type,this.left.toDerivative(n,t),this.right.toDerivative(n,t))}simplify(){const n=this.left.simplify(),t=this.right.simplify();if(this.type==="+"){if(n.type==="number"&&n.value===0)return t;if(t.type==="number"&&t.value===0)return n}if(this.type==="-"){if(n.type==="number"&&n.value===0)return new te("-",t).simplify();if(t.type==="number"&&t.value===0)return n}if(this.type==="*"){if(n.type==="number"&&n.value===0||t.type==="number"&&t.value===0)return new L("number",0);if(n.type==="number"&&n.value===1)return t;if(t.type==="number"&&t.value===1)return n}if(this.type==="/"){if(n.type==="number"&&n.value===0)return new L("number",0);if(t.type==="number"&&t.value===1)return n}if(this.type==="^"&&(t.type==="number"||t instanceof te&&t.operand.type==="number")){let r=0;if(t instanceof te?r=t.operand.value*(t.type==="-"?-1:1):r=t.value,r===0)return new L("number",1);if(r===1)return n;if(n.type==="^"&&n.right.type==="number")return new S("^",n.left,new L("number",n.right.value*r)).simplify()}if(this.type==="^^"&&(t.type==="number"||t instanceof te&&t.operand.type==="number")){let r=0;if(t instanceof te?r=t.operand.value*(t.type==="-"?-1:1):r=t.value,r===0)return new L("number",1);if(r===1)return n}if(t.type==="number"&&n.type==="number"){const r=this.type==="**"?"^":this.type;return Da[r](n.value,t.value)%1===0?new L("number",Da[r](n.value,t.value)):this}if(n.type==="complex"&&t.isPureReal()){if(["+","-"].includes(this.type))return new $n(new S(this.type,n.real,t),n.imag).simplify();if(["*","/"].includes(this.type))return new $n(new S(this.type,n.real,t),new S(this.type,n.imag,t)).simplify()}if(n.isPureReal()&&t.type==="complex"){if(["+","-"].includes(this.type))return new $n(new S(this.type,n,t.real),t.imag).simplify();if(["*","/"].includes(this.type))return new $n(new S(this.type,n,t.real),new S(this.type,n,t.imag)).simplify()}if(n.type==="complex"&&t.type==="complex"){if(["+","-"].includes(this.type))return new $n(new S(this.type,n.real,t.real),new S(this.type,n.imag,t.imag)).simplify();if(this.type==="*")return new $n(new S("-",new S("*",n.real,t.real),new S("*",n.imag,t.imag)),new S("+",new S("*",n.real,t.imag),new S("*",n.imag,t.real))).simplify();if(this.type==="/"){const r=new S("+",new S("^",t.real,2),new S("^",t.imag,2));return new $n(new S("/",new S("+",new S("*",n.real,t.real),new S("*",n.imag,t.imag)),r),new S("/",new S("-",new S("*",n.imag,t.real),new S("*",n.real,t.imag)),r)).simplify()}}return new S(this.type,n,t)}}class te{constructor(n,t){this.type=n,this.operand=t}is(n){return this.type===n.type&&this.operand.is(n.operand)}clone(n=null,t=null){let r=this.operand;return n&&r.is(n)&&(r=t),new te(this.type,r.clone(n,t))}isPureReal(){return this.operand.isPureReal()}isPureImag(){return["+","-","~"].includes(this.type)&&this.operand.isPureImag()}toTree(){return`<${this.type}: ${this.operand.toTree()}>`}toString(){let n=this.operand.toString();return(this.operand instanceof S&&Le[this.operand.type]<Le[this.type]||Le[this.operand.type]===Le[this.type]&&["-","/","^"].includes(this.type))&&(n=`(${n})`),`${this.type}${n}`}toShader(){return this.type==="+"?this.operand.toShader():`${Hd[this.type]}(${this.operand.toShader()})`}toComplex(){return this.type==="+"?this.operand.toComplex():`(${this.operand.toComplex()}).${Wd[this.type]}()`}toDerivative(n,t){return new te(this.type,this.operand.toDerivative(n,t))}simplify(){const n=this.operand.simplify();return this.type==="+"?n:this.type==="'"?n.toDerivative([],["z","z_1"]).simplify():this.type==="#"?new S("/",n,n.toDerivative([],["z","z_1"])).simplify():this.type==="-"&&n.type==="number"?new L("number",-n.value):n instanceof te&&["-","~"].includes(this.type)&&n.type===this.type?n.operand:new te(this.type,n)}}class G{constructor(n,t){this.name=n,this.args=t,this.type="function"}is(n){return this.type===n.type&&this.name===n.name&&this.args.every((t,r)=>t.is(n.args[r]))}clone(n=null,t=null){return new G(this.name,this.args.map(r=>r.clone(n,t)))}isPureReal(){return["abs","re","im"].includes(this.name)}isPureImag(){return!1}toTree(){return`<${this.name}(): ${this.args.map(n=>n.toTree()).join(", ")}>`}toString(){return`${this.name}(${this.args.map(n=>n.toString()).join(", ")})`}toShader(){if(["sum","product"].includes(this.name)&&this.args.length===4&&this.args[0].type==="identifier"&&this.args[1].type==="number"&&this.args[2].type==="number"){const[n,t,r,i]=this.args;let l=new L("number",this.name==="sum"?0:1);for(let o=t.value;o<=r.value;o++)l=new S(this.name==="sum"?"+":"*",l,i.clone(n,new L("number",o)));return l.simplify().toShader()}if(this.args.length===0)return`${wo[this.name]||this.name}()`;if(this.name==="re"){const n=this.args[0].toShader();return this.args[0].type==="number"?n:`vec2(${n}.x, 0.)`}return this.name==="im"?this.args[0].type==="number"?new L("number",0).toShader():`vec2(${this.args[0].toShader()}.y, 0.)`:`${wo[this.name]||this.name}(${this.args.map(n=>n.toShader()).join(", ")})`}toComplex(){let n={re:"real",im:"imag"}[this.name]||this.name;return n=n.replace("'","_prime"),this.args.length===0?`${n}()`:`${this.args[0].toComplex()}.${n}(${this.args.slice(1).map(t=>t.toComplex()).join(", ")})`}toDerivative(n,t){return this.name==="log"?new S("/",this.args[0].toDerivative(n,t),this.args[0]):this.name==="exp"?new S("*",this,this.args[0].toDerivative(n,t)):this.name==="abs"?new S("*",new G("sign",this.args),this.args[0].toDerivative(n,t)):this.name==="sqrt"?new S("/",this.args[0].toDerivative(n,t),new S("*",new L("number",2),this)):this.name==="sin"?new S("*",new G("cos",this.args),this.args[0].toDerivative(n,t)):this.name==="cos"?new S("*",new te("-",new G("sin",this.args)),this.args[0].toDerivative(n,t)):this.name==="tan"?new S("/",this.args[0].toDerivative(n,t),new S("^",new G("cos",this.args),new L("number",2))):this.name==="asin"?new S("/",this.args[0].toDerivative(n,t),new S("^",new S("-",new L("number",1),new S("^",this.args[0],new L("number",2))),new L("number",.5))):this.name==="acos"?new S("/",new te("-",this.args[0].toDerivative(n,t)),new S("^",new S("-",new L("number",1),new S("^",this.args[0],new L("number",2))),new L("number",.5))):this.name==="atan"?new S("/",this.args[0].toDerivative(n,t),new S("+",new L("number",1),new S("^",this.args[0],new L("number",2)))):this.name==="sinh"?new S("*",new G("cosh",this.args),this.args[0].toDerivative(n,t)):this.name==="cosh"?new S("*",new G("sinh",this.args),this.args[0].toDerivative(n,t)):this.name==="tanh"?new S("/",this.args[0].toDerivative(n,t),new S("^",new G("cosh",this.args),new L("number",2))):this.name==="asinh"?new S("/",this.args[0].toDerivative(n,t),new S("^",new S("+",new S("^",this.args[0],new L("number",2)),new L("number",1)),new L("number",.5))):this.name==="acosh"?new S("/",this.args[0].toDerivative(n,t),new S("^",new S("-",new S("^",this.args[0],new L("number",2)),new L("number",1)),new L("number",.5))):this.name==="atanh"?new S("/",this.args[0].toDerivative(n,t),new S("-",new L("number",1),new S("^",this.args[0],new L("number",2)))):this.name==="log2"?new S("/",new G("log",[new L("number",2)]),this.args[0].toDerivative(n,t)):this.name==="log10"?new S("/",new G("log",[new L("number",10)]),this.args[0].toDerivative(n,t)):this.name==="sn"?new S("*",new S("*",new G("cn",this.args),new G("dn",this.args)),this.args[0].toDerivative(n,t)):this.name==="cn"?new S("*",new S("*",new te("-",new G("sn",this.args)),new G("dn",this.args)),this.args[0].toDerivative(n,t)):this.name==="dn"?new S("*",new S("*",new S("*",new te("-",this.args[1]||new L("number",.8)),new G("sn",this.args)),new G("cn",this.args)),this.args[0].toDerivative(n,t)):["re","im"].includes(this.name)?new G(this.name,this.args.map(r=>r.toDerivative(n,t))):this.name==="sign"?new L("number",0):new S("*",new G(`${this.name}'`,this.args),this.args[0].toDerivative(n,t))}simplify(){const n=this.args.map(t=>t.simplify());return new G(this.name,n)}}let $n=class xo{constructor(n,t){this.real=n,this.imag=t,this.type="complex"}is(n){return this.type===n.type&&this.real===n.real&&this.imag===n.imag}clone(n,t){return new xo(this.real,this.imag)}isPureReal(){return!1}isPureImag(){return!1}toTree(){return`<complex: ${this.real.toTree()} + ${this.imag.toTree()}i>`}toString(){return`${this.real.toString()} + ${this.imag.toString()}i`}toShader(){return`vec2(${this.real.toShader()}, ${this.imag.toShader()})`}toComplex(){return`cx(${this.real.toComplex()}, ${this.imag.toComplex()})`}toDerivative(n,t){return new L("number",0)}simplify(){return new xo(this.real.simplify(),this.imag.simplify())}};class L{constructor(n,t){this.type=n,this.value=t}is(n){return this.type===n.type&&this.value===n.value}clone(n,t){return new L(this.type,this.value)}isPureReal(){return this.type==="number"}isPureImag(){return this.type==="identifier"&&this.value==="i"}toTree(){return`<${this.type}: ${this.value}>`}toString(){return`${this.value}`}toShader(){return this.isPureImag()?"vec2(0., 1.)":n0.includes(this.value)?`vec2(${this.value}, 0.)`:this.type==="identifier"?this.value.replace(/'/g,"_prime"):`vec2(${this.value.toFixed(6)}, 0.)`}toComplex(){return this.isPureImag()?"cx(0, 1)":this.type==="identifier"?this.value.replace(/'/g,"_prime"):`cx(${this.value})`}toDerivative(n,t){const r=[...n,...t];return this.type==="identifier"&&this.value==="i"?new L("number",0):this.type==="identifier"&&r.includes(this.value)?t.includes(this.value)?new L("number",1):new L("identifier",`${this.value}'`):new L("number",0)}simplify(){return this.type==="identifier"&&this.value==="x"?new G("re",[new L("identifier","z")]):this.type==="identifier"&&this.value==="y"?new G("im",[new L("identifier","z")]):this}}const Bd=(e,n)=>{const t=Object.entries(Fd);for(let r=0;r<t.length;r++){const[i,l]=t[r],o=e.slice(n).match(l);if(o!==null){const s=o[0];return new Ud(i,s,n,n+s.length)}}throw new SyntaxError("Tokenization error at index "+n+" in "+e)},Bi=e=>{let n=[];for(let t=0;t<e.length;){const r=Bd(e,t);t=r.end,r.type!=="whitespace"&&n.push(r)}return n},Qi=e=>{let n=0;const t=()=>{let a=r();for(;n<e.length;){const u=e[n];if(!u)throw new SyntaxError("Unexpected EOF");if(u.type==="operator"&&["+","-","|-|"].includes(u.value))n++,a=new S(u.value,a,r());else break}return a},r=()=>{let a=i();for(;n<e.length;){const u=e[n];if(!u)throw new SyntaxError("Unexpected EOF");if(u.type==="operator"&&["*","/"].includes(u.value))n++,a=new S(u.value,a,i());else if(["lparen","identifier"].includes(u.type))a=new S("*",a,i());else break}return a},i=()=>{let a=l();for(;n<e.length;){const u=e[n];if(!u)throw new SyntaxError("Unexpected EOF");if(u.type==="operator"&&["^","**","^^"].includes(u.value))n++,a=new S(u.value==="**"?"^":u.value,a,i());else break}return a},l=()=>{let a=o();for(;n<e.length;){const u=e[n];if(!u)throw new SyntaxError("Unexpected EOF");if(u.type==="unarySuffix")n++,a=new te(u.value,a);else break}return a},o=()=>{var u,p,v,h,x,z,g;const a=e[n];if(!a)throw new SyntaxError("Unexpected EOF");if(a.type==="lparen"){n++;const T=t();if(((u=e[n])==null?void 0:u.type)!=="rparen")throw new SyntaxError("Expected ) at "+(((p=e[n])==null?void 0:p.start)||"EOF"));return n++,T}else if(a.type==="pipe"){n++;const T=t();if(((v=e[n])==null?void 0:v.type)!=="pipe")throw new SyntaxError("Expected | at "+(((h=e[n])==null?void 0:h.start)||"EOF"));return n++,new G("abs",[T])}else{if(a.type==="unaryPrefix")return n++,new te(a.value,i());if(a.type==="operator"&&"+-".includes(a.value))return n++,new te(a.value,i());if(a.type==="float"||a.type==="integer")return n++,new L("number",parseFloat(a.value));if(a.type==="identifier"){n++;const T=new L("identifier",a.value);if(((x=e[n])==null?void 0:x.type)==="lparen"){n++;const f=[];for(;((z=e[n])==null?void 0:z.type)!=="rparen";){if(f.push(t()),!e[n])throw new SyntaxError("Expected ) at EOF");((g=e[n])==null?void 0:g.type)==="comma"&&n++}return n++,new G(T.value,f)}return T}else throw new SyntaxError(`Unexpected token ${a}`)}},s=t();if(n!==e.length)throw new SyntaxError(`Unexpected EOF ${e[n]}`);return s},mt=(e,n=[])=>{if(e.type==="identifier"&&!n.includes(e.value)&&e.value!=="i"&&n.push(e.value),e.left&&(n=mt(e.left,n)),e.right&&(n=mt(e.right,n)),e.args){const t=[...e.args];let r=null;["sum","product"].includes(e.name)&&(r=t.shift().value),t.forEach(i=>{n=mt(i,n).filter(l=>l!=r)})}return e.operand&&(n=mt(e.operand,n)),n},on=e=>Qi(Bi(e)).simplify(),wr=(e,n=["z","z_1"],t=[])=>Qi(Bi(e)).simplify().toDerivative(n,t).simplify();window.tokenize=Bi;window.parse=Qi;window.ast=on;window.vars=mt;window.derive=wr;window.astRaw=e=>Qi(Bi(e));const t0=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},tr=(e,n)=>!Array.isArray(e)||!Array.isArray(n)?e===n:e.length!==n.length?!1:e.every((t,r)=>Array.isArray(t)?tr(t,n[r]):t===n[r]),r0=["yellow_blue","rainbow","red_green","yellow_green","orange_purple","yellow_purple","pink_green","pink_yellow"],i0=["none","log","exp","distance","distance_scaled"],Tt={args:{z:y(),c:y()},scale:y(1.2),varying:"c",move:"c",usePerturbation:null,useDerivative:!0,derivative:100,useDistanceEstimate:!1,showDerivative:!1,smoothing:"log",offset:80,velocity:100,hue:0,saturation:100,lightness:100,iterations:1e3,supersampling:window.devicePixelRatio>2?window.devicePixelRatio/2:1.1,transform:[[1,0],[0,1]],f:"z^2 + c",f_prime_z:null,f_prime_c:null,f_perturb:null,palette:"yellow_blue",useRoots:!1,convergent:!1,bailin:-6,divergent:!0,bailout:2.5,showGrid:!0,gridScale:100,gridLog:!1,gridWidth:1,showNormGrid:!0,normShade:!0,normShadeValue:70,normGridScale:100,normGridLog:!0,normGridWidth:1,showArgGrid:!0,argShade:!0,argShadeValue:40,argGridScale:200,argGridLog:!1,argGridWidth:1,scaled:!1,showZeroes:!0,zeroes:-4,showPoles:!0,poles:4,animate:!1,speed:100,showPolya:!1,polya:15,polyaColor:!0,polyaLightness:120},Qd=Object.keys(Tt),qd=["f","f_prime_z","f_prime_c","f_perturb","args","varying","move","useRoots","convergent","divergent","palette","perturb","useDerivative","showDerivative","useDistanceEstimate","smoothing","showGrid","showNormGrid","normShade","gridLog","normGridLog","showArgGrid","argShade","argGridLog","scaled","showZeroes","showPoles","showPolya","polyaColor","animate"],ys={scale:{type:"2fv",value:e=>e.to2fv()},aspect:{type:"2fv",value:(e,n)=>[n.gl.canvas.width/n.gl.canvas.height,1/Math.max(n.gl.canvas.width,n.gl.canvas.height)]},transform:{type:"m2fv",value:e=>e.flat(1)},iterations:"1i",maxIterations:{type:"2iv",value:()=>[0,0]},orbit:{type:"1i",value:()=>0},bailin:"1f",bailout:"1f",derivative:"1f",offset:{type:"1f",value:e=>e/25},velocity:{type:"1f",value:e=>e/1e3},hue:{type:"1f",value:e=>e/360},saturation:{type:"1f",value:e=>e/100},lightness:{type:"1f",value:e=>e/100},gridScale:{type:"1f",value:e=>e/100},gridWidth:"1f",normGridScale:{type:"1f",value:e=>e/100},normShadeValue:{type:"1f",value:e=>e/100},normGridWidth:"1f",argGridScale:{type:"1f",value:e=>e/100},argShadeValue:{type:"1f",value:e=>e/100},argGridWidth:"1f",time:{type:"1f",value:()=>0},speed:{type:"1f",value:e=>e/1e6},zeroes:"1f",poles:"1f",polya:"1f",polyaLightness:{type:"1f",value:e=>e/100}},bd=`#version 300 es
precision highp float;

##CONFIG

uniform vec2 args;
uniform vec2 scale;
uniform vec2 aspect;
uniform mat2 transform;

uniform int iterations;
uniform float bailin;
uniform float bailout;
uniform float derivative;

uniform float offset;
uniform float velocity;
uniform float hue;
uniform float saturation;
uniform float lightness;

uniform float gridScale;
uniform float gridWidth;
uniform float normGridScale;
uniform float normGridWidth;
uniform float normShadeValue;
uniform float argGridWidth;
uniform float argGridScale;
uniform float argShadeValue;
uniform float zeroes;
uniform float poles;
uniform float polya;
uniform float polyaLightness;

uniform float speed;
uniform float time;

#ifdef PERTURB
uniform sampler2D orbit;
uniform ivec2 maxIterations;
#endif

#include includes

in vec2 uv;
out vec4 fragColor;

void main(void) {
    float k = -time * speed;
    vec2 pixel = cmul(scale, vec2(aspect.x, 1.)) * (2. * uv - 1.);
    float BAILOUT = pow(10., bailout);
    float BAILIN = pow(10., bailin);

    #init_args

    #ifdef PERTURB
    vec2 dz = vec2(0.);
    vec2 dz_1 = vec2(0.);
    vec2 dc = vec2(0.);
    int m = 0;
    bool shift = true;
    int max = maxIterations.y;
    vec2 C = c;
    vec2 Z = fetchRef(m, shift);
    z = Z + dz;
    c = C + dc;
    #endif

    #transform_args

    vec2 z_1 = vec2(0.);
    vec2 z_2 = vec2(0.);

    #if SMOOTHING >= 3
    vec2 zdc = vec2(0., 0.);
    vec2 zdc_1 = vec2(0., 0.);
    #endif

    #ifdef USE_DERIVATIVE
    float zdzmax = exp(-derivative * .15);
    vec2 zdz = vec2(1., 0.);
    vec2 zdz_1 = vec2(0., 0.);
    #endif

    #ifdef SHOW_POLYA
    float polyasize = 2. / polya;
    // #ifdef SCALED
    polyasize *= scale.x;
    // #endif
    vec2 ztile = (floor(pixel / polyasize) + 0.5) * polyasize;
    vec2 ptile = pixel - ztile;
    #endif

    #if SMOOTHING == 2
    float zexp = 0.;
    #endif

    vec3 col = vec3(0.);
    for (int i = 0; i < iterations; i++) {
        float n = float(i) + 1.;
        #if SMOOTHING >= 3
        vec2 zdct = zdc;
        zdc = F_prime_c(z, c, zdc, zdc_1);
        zdc_1 = zdct;
        #endif

        vec2 zt = z;
        #ifdef PERTURB
        vec2 dzt = dz;
        dz = F_perturb(Z, dz, dc);
        dz_1 = dzt;
        m++;
        Z = fetchRef(m, shift);
        z = Z + dz;
        #else
        z = F(z, c);
        #ifdef SHOW_POLYA
        ztile = F(ztile, c);
        #endif
        #endif
        z_2 = z_1;
        z_1 = zt;

        #if SMOOTHING == 2
        zexp += exp(-length(z) - .5 / (length(z - z_1)));
        #endif

        #if defined(USE_DERIVATIVE) && (defined(CONVERGENT) || defined(DIVERGENT))
        vec2 zdzt = zdz;
        zdz = F_prime_z(z, c, zdz, zdz_1);
        zdz_1 = zdzt;

        float zdzzdz = dot(zdz, zdz);
        if (zdzzdz < zdzmax) {
            #ifdef SHOW_DERIVATIVE
            float c = n;
            #if SMOOTHING == 1
            // n -= log2(1. / log2(1. / zdzzdz));
            #elif SMOOTHING == 2
            c = 10. * zexp;
            #endif
            col = color(c, .5 + k);
            #endif
            break;
        }
        #endif

        #ifdef CONVERGENT
        float z_z_1 = dot2(z - z_1);
        if (z_z_1 < BAILIN) {
            float r = 0.;
            #ifdef USE_ROOTS
            if (abs(z.y) < BAILIN) {
                z.y = 0.;
                if (abs(z.x) < BAILIN) {
                    z.x = 0.;
                }
            }
            float l = length(z);
            if (l > .002) {
                r = (mod(atan(z.y, z.x) + l * TAU, TAU)) / (TAU);
            }
            #endif

            #if SMOOTHING == 1
            float diff = dot2(z - z_1);
            float prev = dot2(z_1 - z_2);
            float c = n - 1. + log(BAILIN / prev) / log(diff / prev);
            #elif SMOOTHING == 2
            c = 10. * zexp;
            #elif SMOOTHING >= 3
            float d = sqrt(dot(z, z) / dot(zdc, zdc)) * .5 * log(dot(z, z));
            #if SMOOTHING == 4
            d /= scale.x;
            #endif
            c = 130. / pow(d, .02);
            #endif
            col = color(c, r + k);
            break;
        }
        #endif

        #ifdef DIVERGENT
        float zz = dot(z, z);
        if (zz > BAILOUT) {
            float c = n - 1.;
            float r = 0.;
            #ifdef USE_ROOTS
            r = atan(z.y, z.x) / (length(z) * TAU);
            #endif

            // Smooth iteration count
            #if SMOOTHING == 1
            c -= log2(log2(zz)) - 4.0;
            #elif SMOOTHING == 2
            c = 10. * zexp;
            #elif SMOOTHING >= 3
            float d = sqrt(zz / dot(zdc, zdc)) * .5 * log(zz);
            #if SMOOTHING == 4
            d /= scale.x;
            #endif
            c = 130. / pow(d, .02);
            #endif

            col = color(c, r + k);
            break;
        }
        #endif

        #ifdef PERTURB
        // Rebasing
        if (dot(z, z) < dot(dz, dz) || m >= max) {
            dz = z;
            m = 0;
            max = maxIterations.x;
            shift = false;
            Z = fetchRef(m, shift);
        }
        #endif
    }

    #if !defined(CONVERGENT) && !defined(DIVERGENT)
    // Domain coloring of z:
    float h = (atan(z.y, z.x)) / TAU;
    float lz = length(z);
    #ifdef SCALED
    lz /= sqrt(dot2(scale));
    #endif
    float ll = log2(lz);

    #ifdef ARG_GRID_LOG
    float ag = log2(abs(h));
    #else
    float ag = h;
    #endif
    #ifdef NORM_GRID_LOG
    float ng = ll;
    #else
    float ng = lz;
    #endif

    #if !defined(SHOW_POLYA) || defined(POLYA_COLOR)
    col = color((h + k) * 100.);
    #endif

    #ifdef SHADE_NORM
    col *= 1. - normShadeValue * aafract(ng * normGridScale + k);
    #endif
    #ifdef SHADE_ARG
    col *= 1. + argShadeValue * aafract(ag * argGridScale + k);
    #endif

    #ifdef SHOW_GRID
    vec2 zs = z;
    #ifdef SCALED
    zs /= dot2(scale);
    #endif
    #ifdef GRID_LOG
    vec2 g = log2(abs(zs));
    #else
    vec2 g = zs;
    #endif
    vec2 d = fract(2. * (g + vec2(k)) * gridScale);
    d = min(d, 1. - d);
    d /= fwidth(g) * gridScale;
    col = mix(vec3(0.), col, smoothstep(0., gridWidth * 3., d.x));
    col = mix(col * .3, col, smoothstep(0., gridWidth * 4., d.y));
    #endif

    #ifdef SHOW_NORM_GRID
    float dl = fract((ng + k) * normGridScale);
    dl = min(dl, 1. - dl);
    dl /= fwidth(ng) * normGridScale / 2.;
    col = mix(col, vec3(1.), smoothstep(normGridWidth * 3., 0., dl));
    #endif

    #ifdef SHOW_ARG_GRID
    float dh = fract(2. * (ag + k * .25) * argGridScale);

    dh = min(dh, 1. - dh);
    dh /= min(fwidth(ag), .01) * argGridScale;

    col = mix(col, col + .5, smoothstep(argGridWidth * 3., 0., dh));

    #endif

    #ifdef SHOW_ZEROES
    col = mix(col, vec3(1.), smoothstep(0., PI, zeroes - ll));
    #endif
    #ifdef SHOW_POLES
    col = mix(col, vec3(0.), smoothstep(0., PI, ll - poles));
    #endif
    #endif

    #ifdef SHOW_POLYA

    vec2 zp = conj(z);
    vec2 zr = conj(ztile);

    float shade = 1.;
    #ifdef ANIMATE
    shade = 1. - smoothstep(polyasize * .3, polyasize * .5, length(ptile));
    #endif

    float arrow = 0.;
    float base = length(zr) * .1;
    float len = clamp(base, .08, .35);
    float angle = atan(zp.y, zp.x);

    ptile = opRotate(ptile, angle);

    float sc = 1. / polyasize;
    ptile *= sc;
    #ifdef ANIMATE
    ptile.x += k * base * 25.;
    float r = min(.35 / len, 2.);
    ptile.x -= round(ptile.x * r) / r;
    #endif
    arrow = sdArrow(ptile, vec2(-len, 0.), vec2(len, 0.), .02, .08, 2.);
    arrow /= sc;
    vec3 arrowColor = col + polyaLightness - 1.;
    #ifndef POLYA_COLOR
    float al = log2(base + .1);
    arrowColor = color(al * 5.);
    #endif

    float aaa = .003 * scale.x;
    col = mix(col, arrowColor, shade * (1.0 - smoothstep(0.0, aaa, arrow)));

    #endif

    fragColor = vec4(col, 1.0);
}
`,Zd=`#include globals
#include colors
#include render
#include complex
#include special
`,Xd=`const float PI = 3.1415926535897932384626433832795;
const float TAU = 6.283185307179586476925286766559;
const float ETA = 1.5707963267948966192313216916398;
const float PHI = 1.6180339887498948482045868343656;
const float GAMMA = 0.5772156649015328606065120900824;
const float E = 2.7182818284590452353602874713527;
const float SQRT2 = 1.4142135623730950488016887242097;
const float SQRT3 = 1.7320508075688772935274463415059;
const float LN10 = 2.3025850929940456840179914546844;
const float LN2 = 0.69314718055994530941723212145818;
const float LEMNISCATE = 2.6220575542921198109666348067973;
const float GAUSS = 0.83462684167407318628142973279905;
const float pi = PI;
const float tau = TAU;
const float eta = ETA;
const float phi = PHI;
const float gamma = GAMMA;
const float e = E;
const float sqrt2 = SQRT2;
const float sqrt3 = SQRT3;
const float ln10 = LN10;
const float ln2 = LN2;
const float lemniscate = LEMNISCATE;
const float gauss = GAUSS;

const float[] B2N = float[](1., 0.16666666666666666, -0.03333333333333333, 0.023809523809523808, -0.03333333333333333, 0.07575757575757576, -0.2531135531135531, 1.1666666666666667, -7.092156862745098, 54.971177944862156, -529.1242424242424, 6192.123188405797, -86580.25311355312, 1425517.1666666667, -27298231.067816094, 601580873.9006424, -15116315767.092157, 429614643061.1667, -13711655205088.332, 488332318973593.2, -1.9296579341940068e+16, 8.416930475736826e+17, -4.0338071854059454e+19, 2.1150748638081993e+21, -1.2086626522296526e+23, 7.500866746076964e+24, -5.038778101481069e+26, 3.6528776484818122e+28, -2.849876930245088e+30, 2.3865427499683627e+32, -2.1399949257225335e+34, 2.0500975723478097e+36, -2.093800591134638e+38);
const vec2 c0 = vec2(0., 0.);
const vec2 c1 = vec2(1., 0.);
const vec2 ci = vec2(0., 1.);

vec2 R(float x) {
    return vec2(x, 0.);
}
vec2 R(int x) {
    return vec2(float(x), 0.);
}
vec2 I(float y) {
    return vec2(0., y);
}
vec2 I(int y) {
    return vec2(0., float(y));
}
`,Kd=`
#ifdef PERTURB
vec2 fetchRef(in int n, in bool shift) {
  vec4 tex = texelFetch(orbit, ivec2(n % 128, n / 128), 0);
  return shift ? tex.zw : tex.xy;
}
#endif

float aafract(float x) {
  float v = fract(x);
  float w = length(vec2(dFdx(x), dFdy(x)));
  return v < 1. - w ? v / (1. - w) : (1. - v) / w;
}

float aastep(float x) {
  float w = length(vec2(dFdx(x), dFdy(x)));
  return smoothstep(.7, -.7, (abs(fract(x - .25) - .5) - .25) / w);
}

// iquilezles.org/articles/distfunctions2d
vec2 opRotate(in vec2 p, in float theta) {
  float c = cos(theta);
  float s = sin(theta);
  p *= mat2(c, s, -s, c);
  return p;
}

float sdArrow(in vec2 p, vec2 a, vec2 b, float w1, float w2, float k) {
  vec2 ba = b - a;
  float l2 = dot(ba, ba);
  float l = sqrt(l2);

  p = p - a;
  p = mat2(ba.x, -ba.y, ba.y, ba.x) * p / l;
  p.y = abs(p.y);
  vec2 pz = p - vec2(l - w2 * k, w2);

  vec2 q = p;
  q.x -= clamp(q.x, 0.0, l - w2 * k);
  q.y -= w1;
  float di = dot(q, q);
  q = pz;
  q.y -= clamp(q.y, w1 - w2, 0.0);
  di = min(di, dot(q, q));
  if(p.x < w1) // conditional is optional
  {
    q = p;
    q.y -= clamp(q.y, 0.0, w1);
    di = min(di, dot(q, q));
  }
  if(pz.x > 0.0) // conditional is optional
  {
    q = pz;
    q -= vec2(k, -1.0) * clamp((q.x * k - q.y) / (k * k + 1.0), 0.0, w2);
    di = min(di, dot(q, q));
  }

  float si = 1.0;
  float z = l - p.x;
  if(min(p.x, z) > 0.0) {
    float h = (pz.x < 0.0) ? w1 : z / k;
    if(p.y < h)
      si = -1.0;
  }
  return si * sqrt(di);
}

float diffabs(in float X, in float x) {
  if(X >= 0.) {
    if(X + x >= 0.) {
      return x;
    } else {
      return -(2. * X + x);
    }
  } else {
    if(X + x > 0.) {
      return 2. * X + x;
    } else {
      return -x;
    }
  }
}
`,Yd=`vec3 hsl2rgb(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
}
vec3 rgb2hcv(in vec3 col) {
  vec4 P = mix(vec4(col.bg, -1.0, 2.0 / 3.0), vec4(col.gb, 0.0, -1.0 / 3.0), step(col.b, col.g));
  vec4 Q = mix(vec4(P.xyw, col.r), vec4(col.r, P.yzx), step(P.x, col.r));
  float C = Q.x - min(Q.w, Q.y);
  float H = abs((Q.w - Q.y) / (6. * C + 1e-9) + Q.z);
  return vec3(H, C, Q.x);
}

vec3 rgb2hsl(in vec3 col) {
  col = rgb2hcv(col);
  float L = col.z - col.y * 0.5;
  float S = col.y / (1. - abs(L * 2. - 1.) + 1e-9);
  return vec3(col.x, S, L);
}

// vec3 hsl2rgb(in vec3 c) {
//   vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
//   return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
// }

// vec3 rgb2hsl(vec3 col) {
//   float eps = 1e-10;
//   float minc = min(col.r, min(col.g, col.b));
//   float maxc = max(col.r, max(col.g, col.b));
//   vec3 mask = step(col.grr, col.rgb) * step(col.bbg, col.rgb);
//   vec3 h = mask * (vec3(0.0, 2.0, 4.0) + (col.gbr - col.brg) / (maxc - minc + eps)) / 6.0;
//   return vec3(fract(1.0 + h.x + h.y + h.z), (maxc - minc) / (1.0 - abs(minc + maxc - 1.0) + eps), (minc + maxc) * 0.5);
// }

vec3 hueAdjust(in vec3 col, in float p) {
  vec3 hsl = rgb2hsl(col);
  hsl.x += p + hue;
  hsl.y *= saturation;
  hsl.z *= lightness;
  return hsl2rgb(hsl);
}

// https://iquilezles.org/articles/palettes
vec3 cosPalette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
  return a + b * cos(offset + TAU * (c * velocity * .1 * t + d));
}

vec3 palette(float t) {
  return cosPalette(t, 
#if PALETTE == 0
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.0, 0.10, 0.20)
#elif PALETTE == 1
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.0, 0.33, 0.67)
#elif PALETTE == 2
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.3, 0.20, 0.20)
#elif PALETTE == 3
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 0.5), vec3(0.8, 0.90, 0.30)
#elif PALETTE == 4
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 0.7, 0.4), vec3(0.0, 0.15, 0.20)
#elif PALETTE == 5
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(2.0, 1.0, 0.0), vec3(0.5, 0.20, 0.25)
#elif PALETTE == 6
  vec3(0.8, 0.5, 0.4), vec3(0.2, 0.4, 0.2), vec3(2.0, 1.0, 1.0), vec3(0.0, 0.25, 0.25)
#else
  vec3(0.731, 1.098, 0.192), vec3(0.358, 1.090, 0.657), vec3(1.077, 0.360, 0.328), vec3(0.965, 2.265, 0.837)
#endif
  );
}

vec3 color(float t, float p) {
  return hueAdjust(palette(t), p);
}

vec3 color(float t) {
  return color(t, 0.);
}
`,Jd=`float dot2(in vec2 z) {
    return dot(z, z);
}

vec2 cadd(in vec2 z0, in vec2 z1) {
    return z0 + z1;
}

vec2 csub(in vec2 z0, in vec2 z1) {
    return z0 - z1;
}

vec2 cmul(in vec2 z, in vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

vec2 cinv(in vec2 z) {
    return z * vec2(1, -1) / dot(z, z);
}
vec2 cdiv(in vec2 z0, in vec2 z1) {
    return cmul(z0, cinv(z1));
}

vec2 conj(in vec2 z) {
    return vec2(z.x, -z.y);
}

vec2 expi(in float x) {
    return vec2(cos(x), sin(x));
}
vec2 cexp(in vec2 z) {
    return exp(z.x) * expi(z.y);
}

vec2 cnorm(in vec2 z) {
    return R(length(z));
}
vec2 carg(in vec2 z) {
    return R(atan(z.y, z.x));
}

vec2 csqrt(in vec2 z) {
    float r = length(z);
    return vec2(sqrt(0.5 * (r + z.x)), sign(z.y) * sqrt(0.5 * (r - z.x)));
}

vec2 clog(in vec2 z) {
    return vec2(log(length(z)), atan(z.y, z.x));
}

vec2 ccos(in vec2 z) {
    return vec2(cos(z.x) * cosh(z.y), -sin(z.x) * sinh(z.y));
}

vec2 csin(in vec2 z) {
    return vec2(sin(z.x) * cosh(z.y), cos(z.x) * sinh(z.y));
}

vec2 ctan(in vec2 z) {
    return cdiv(csin(z), ccos(z));
}
vec2 cacos(in vec2 z) {
    return cmul(-ci, clog(cadd(z, cmul(ci, csqrt(csub(c1, cmul(z, z)))))));
}

vec2 casin(in vec2 z) {
    return cmul(-ci, clog(cadd(cmul(z, ci), csqrt(csub(c1, cmul(z, z))))));
}

vec2 catan(in vec2 z) {
    return cmul(ci * .5, clog(cdiv(cadd(ci, z), csub(ci, z))));
}

vec2 ccosh(in vec2 z) {
    return .5 * cadd(cexp(z), cexp(cmul(-ci, z)));
}

vec2 csinh(in vec2 z) {
    return .5 * (cexp(z) - cexp(cmul(-ci, z)));
}

vec2 ctanh(in vec2 z) {
    return cdiv(csinh(z), ccosh(z));
}

vec2 cacosh(in vec2 z) {
    return clog(cadd(z, csqrt(csub(cmul(z, z), c1))));
}

vec2 casinh(in vec2 z) {
    return clog(cadd(z, csqrt(cadd(cmul(z, z), c1))));
}

vec2 catanh(in vec2 z) {
    return cmul(vec2(0.5, 0.), clog(cdiv(cadd(c1, z), csub(c1, z))));
}

vec2 cpow(in vec2 z, in vec2 k) {
    return cexp(cmul(k, clog(z)));
}

vec2 cpow(in vec2 z, in int k) {
    vec2 w = vec2(1., 0.);
    if (abs(k) > 10) {
        return cpow(z, R(k));
    }
    if (k < 0) {
        z = cinv(z);
        k = -k;
    }
    for (int i = 0; i < k; i++) {
        w = cmul(w, z);
    }
    return w;
}

// Fast integer power functions
vec2 cpow0(in vec2 z) {
    return vec2(1., 0.);
}
vec2 cpow1(in vec2 z) {
    return z;
}
vec2 cpow2(in vec2 z) {
    return cmul(z, z);
}
vec2 cpow3(in vec2 z) {
    return cmul(z, cpow2(z));
}
vec2 cpow4(in vec2 z) {
    return cmul(cpow2(z), cpow2(z));
}
vec2 cpow5(in vec2 z) {
    return cmul(z, cpow4(z));
}
vec2 cpow6(in vec2 z) {
    return cpow2(cpow3(z));
}
vec2 cpow7(in vec2 z) {
    return cmul(z, cpow6(z));
}
vec2 cpow8(in vec2 z) {
    return cpow2(cpow4(z));
}
vec2 cpow9(in vec2 z) {
    return cmul(z, cpow8(z));
}
`,e1=`// https://www.ils.uec.ac.jp/~dima/BOOK/443.pdf

vec2 catania(in vec2 z) {
    return cadd(z, csub(clog(z), c1));
}
vec2 cdatania(in vec2 z) {
    return cadd(c1, cinv(z));
}

vec2 ctaniatay(vec2 z) {
    int n;
    vec2 res = vec2(-4.7 / 147456., 0.);
    res = cmul(res, z);
    res = cadd(res, vec2(1.3 / 6144., 0.));
    res = cmul(res, z);
    res = cadd(res, vec2(-1. / 3072., 0.));
    res = cmul(res, z);
    res = cadd(res, vec2(-1. / 192., 0.));
    res = cmul(res, z);
    res = cadd(res, vec2(1. / 16., 0.));
    res = cmul(res, z);
    res = cadd(res, vec2(.5, 0.));
    res = cmul(res, z);
    res = cadd(res, c1);
    for (int i = 0; i < 4; i++) {
        res = cadd(res, cdiv(csub(z, catania(res)), cdatania(res)));
    }
    return res;
}
vec2 ctanianega(vec2 z) {
    vec2 res = cexp(cadd(csub(z, cexp(z)), c1));
    for (int i = 0; i < 5; i++) {
        res = cadd(res, cdiv(csub(z, catania(res)), cdatania(res)));
    }
    return res;
}
vec2 ctaniabig(vec2 z) {
    vec2 res = cadd(csub(z, -clog(z)), c1);
    for (int i = 0; i < 4; i++) {
        res = cadd(res, cdiv(csub(z, catania(res)), cdatania(res)));
    }
    return res;
}
vec2 ctanias(vec2 z) {
    vec2 t = z + vec2(2., -PI);
    t *= 2. / 9.;
    t = cmul(vec2(0., 1.), csqrt(t));
    vec2 res = vec2(-12.51 / 224., 0.);
    res = cmul(res, t);
    res = cadd(res, vec2(-.3 / 7., 0.));
    res = cmul(res, t);
    res = cadd(res, vec2(.9 / 16., 0.));
    res = cmul(res, t);
    res = cadd(res, vec2(.3, 0.));
    res = cmul(res, t);
    res = cadd(res, vec2(.75, 0.));
    res = cmul(res, t);
    res = cadd(res, vec2(-3., 0.));
    res = cmul(res, t);
    res = cadd(res, vec2(3., 0.));
    res = cmul(res, t);
    res = cadd(res, vec2(-1., 0.));

    for (int i = 0; i < 4; i++) {
        res = cadd(res, cdiv(csub(z, catania(res)), cdatania(res)));
    }
    return res;
}
vec2 ctania(in vec2 z) {
    if (abs(z.y) < PI && z.x < -2.51) {
        return ctanianega(z);
    }
    if (length(z) > 7. || z.x > 3.8) {
        return ctaniabig(z);
    }
    if (z.y > .7) {
        return ctanias(z);
    }
    if (z.y < -.7) {
        return conj(ctanias(conj(z)));
    }
    return ctaniatay(z);
}

vec2 cdtania(in vec2 z) {
    vec2 t = ctania(z);
    return cdiv(t, cadd(c1, t));
}

vec2 cdoya(in vec2 z, in vec2 n) {
    return ctania(cadd(vec2(int(n.x), 0.), catania(z)));
}
vec2 cdoya(in vec2 z) {
    return cdoya(z, c1);
}

vec2 cfilog(in vec2 z) {
    return cdiv(ctania(csub(clog(z), c1 + I(PI))), -z);
}
// https://www.ams.org/journals/mcom/2009-78-267/S0025-5718-09-02188-7/S0025-5718-09-02188-7.pdf
vec2 cfima(in vec2 z) {
    // if(z.y <= 4. + .2379 * z.x) {
    //   return cexp(cfima(csub(z, c1)));
    // }
    int shift = 0;
    for (; shift < 250; shift++) {
        if (z.y > 4. + .2379 * z.x) {
            break;
        }
        z.x -= 1.;
    }
    vec2 a0 = vec2(0.31813150520476413531, 1.33723570143068940890);
    vec2 a1 = c1;
    vec2 a2 = .5 * cinv(csub(a0, a1));
    vec2 a3 = cdiv(cadd(a2, R(1. / 6.)), csub(cmul(a0, a0), c1));
    vec2 a4 = cdiv(cadd(a2 * .5, cadd(cmul(a2, a2) * .5, cadd(a3, R(1. / 24.)))), csub(cmul(a0, cmul(a0, a0)), c1));
    vec2 a5 = cdiv(cadd(cmul(a2, a2) * .5, cadd(a2 / 6., cadd(cmul(a2, a3), cadd(a3 * .5, cadd(a4, R(1. / 120.)))))), csub(cmul(a0, cmul(a0, cmul(a0, a0))), c1));
    vec2 R_ = vec2(1.0779614375278, -.9465409639479);
    vec2 b = vec2(0.12233176, 0.02366108);
    vec2 e = cexp(cadd(cmul(a0, z), R_));
    vec2 Li = vec2(0., TAU);

    vec2 res = cadd(a0, cmul(e, cadd(a1, cmul(e, cadd(a2, cmul(e, cadd(a3, cmul(e, cadd(a4, cmul(e, a5))))))))));
    res = cadd(res, cmul(b, cexp(cmul(Li, z))));

    for (int i = 0; i < shift; i++) {
        res = cexp(res);
    }
    return res;
}

vec2 ctai(in vec2 z) {
    // if(cnorm(z) > .5) {
    //   return vec2(1.);
    // }
    int flog = 0;
    int fexp = 0;
    for (int shift = 0; shift < 25; shift++) {
        if (z.x > .5) {
            z.x -= 1.;
            fexp++;
        } else if (z.x < -.5) {
            z.x += 1.;
            flog++;
        } else {
            break;
        }
    }
    if (z.x < -.5) {
        z.x = -.5;
    }

    vec2[] t = vec2[](vec2(0.37090658903228507226, 1.33682167078891400713), vec2(0.03660096537598455518, 0.13922215389950498565), vec2(-0.16888431840641535131, 0.09718533619629270148), vec2(-0.12681315048680869007, -0.11831628767028627702), vec2(0.04235809310323926380, -0.10520930088320722129), vec2(0.05848306393563178218, -0.00810224524496080435), vec2(0.02340031665294847393, 0.01807777011820375229), vec2(0.00344260984701375092, 0.01815103755635914459), vec2(-0.00803695814441672193, 0.00917428467034995393), vec2(-0.00704695528168774229, -0.00093958506727472686), vec2(-0.00184617963095305509, -0.00322342583181676459), vec2(0.00054064885443097391, -0.00189672061015605498), vec2(0.00102243648088806748, -0.00055968657179243165), vec2(0.00064714396398048754, 0.00025980661935827123), vec2(0.00010444455593372213, 0.00037199472598828116), vec2(-0.00011178535404343476, 0.00016786687552190863), vec2(-0.00010630158710808594, 0.00002072200033125881), vec2(-0.00005078098819110608, -0.00003575913005741248), vec2(-0.00000314742998690270, -0.00003523185937587781), vec2(0.00001347661344130504, -0.00001333034137448205), vec2(0.00000980239082395275, 0.00000047607184151673), vec2(0.00000355493475454698, 0.00000389816212201278), vec2(-0.00000021552652645735, 0.00000296273413237997), vec2(-0.00000131673903627820, 0.00000097381354534333), vec2(-0.00000083401960806066, -0.00000018663858711081), vec2(-0.00000022869610981361, -0.00000037497716770031), vec2(0.00000005372584613379, -0.00000023060136585176), vec2(0.00000011406656653786, -0.00000006569510293486), vec2(0.00000006663595460757, 0.00000002326630571343), vec2(0.00000001396786846375, 0.00000003315118300198), vec2(-0.00000000684890556421, 0.00000001713041981611), vec2(-0.00000000916619598268, 0.00000000403886083652), vec2(-0.00000000502933384276, -0.00000000222121299478), vec2(-0.00000000084484352792, -0.00000000273668661113), vec2(0.00000000070086729861, -0.00000000124687683156), vec2(0.00000000070558101710, -0.00000000021962577544), vec2(0.00000000035900951951, 0.00000000018774741308), vec2(0.00000000005248658571, 0.00000000021201177126), vec2(-0.00000000006264758835, 0.00000000009059171879), vec2(-0.00000000005333473585, 0.00000000001006078866), vec2(-0.00000000002432138144, -0.00000000001506937008), vec2(-0.00000000000331880379, -0.00000000001544700067), vec2(0.00000000000501652570, -0.00000000000658967459), vec2(0.00000000000401214135, -0.00000000000036708383), vec2(0.00000000000158629111, 0.00000000000119885992), vec2(0.00000000000019668766, 0.00000000000106532662), vec2(-0.00000000000036355730, 0.00000000000047229527), vec2(-0.00000000000029920206, 0.00000000000001251827), vec2(-0.00000000000010305550, -0.00000000000009571381), vec2(-0.00000000000000910369, -0.00000000000007087680), vec2(0.00000000000002418310, -0.00000000000003240337));

    vec2 res = t[0];
    vec2 zn_3i = c1;
    vec2 z_3i = csub(z, vec2(0., 3.)) * .5;

    for (int i = 1; i < 51; i++) {
        zn_3i = cmul(zn_3i, z_3i);
        res = cadd(res, cmul(t[i], zn_3i));
    }

    for (int i = 0; i < flog; i++) {
        res = clog(res);
    }
    for (int i = 0; i < fexp; i++) {
        res = cexp(res);
    }

    return res;
}
vec2 cmaclo(in vec2 z) {
    // if(cnorm(z) > .5) {
    //   return vec2(0.5);
    // }

    int flog = 0;
    int fexp = 0;
    for (int shift = 0; shift < 25; shift++) {
        if (z.x > .5) {
            z.x -= 1.;
            fexp++;
        } else if (z.x < -.5) {
            z.x += 1.;
            flog++;
        } else {
            break;
        }
    }
    if (z.x < -.5) {
        z.x = -.5;
    }

    float[] s = float[](0.30685281944005469058, 1.18353470251664338875, 1.58593285160678321155, 1.36629265207672068172, 1.36264601823980036066, 1.21734246689515424045, 1.10981816083559525765, 0.96674692974769849130, 0.84089872598668435888, 0.71353210966804747617, 0.60168548504001373445, 0.49928574281440518678, 0.41140086629121763728, 0.33506195665178500898, 0.27104779243942234146, 0.21728554054610033086, 0.17311050207880035456, 0.13690016038526570119, 0.10765949732729711286, 0.08413804539743192923, 0.06542450487497340761, 0.05060001212013485322, 0.03895655493977817629, 0.02985084640296329153, 0.02277908979501017117, 0.01730960309240666892, 0.01310389615589767874, 0.00988251130733762764, 0.00742735935367278347, 0.00556296426263720549, 0.00415334478103463346, 0.00309116153137843543, 0.00229387529664008653, 0.00169729976398295653, 0.00125245885041635465, 0.00092172809095368547, 0.00067661152429638357, 0.00049544127485341987, 0.00036192128589181518, 0.00026376927786672476, 0.00019180840045267570, 0.00013917553105723647, 0.00010077412023867018, 0.00007281884753121133, 0.00005251474516228446, 0.00003779882770351268, 0.00002715594536867241, 0.00001947408515177282, 0.00001394059355016322, 0.00000996213949015693, 0.00000710713872292710, 0.00000506199803708578, 0.00000359960968975399, 0.00000255569149787694, 0.00000181175810338313, 0.00000128245831538430, 0.00000090647322737496, 0.00000063980422418981, 0.00000045095738191441, 0.00000031741772125007, 0.00000022312521183625, 0.00000015663840476155, 0.00000010982301013230, 0.00000007690305934973, 0.00000005378502675604, 0.00000003757126131521, 0.00000002621429405247, 0.00000001826909956818, 0.00000001271754463425, 0.00000000884310192977, 0.00000000614230041407, 0.00000000426177146865, 0.00000000295386817285, 0.00000000204522503591, 0.00000000141464900426, 0.00000000097750884878, 0.00000000067478454029, 0.00000000046535930671, 0.00000000032062550784, 0.00000000022069891976, 0.00000000015177557961, 0.00000000010428189463, 0.00000000007158597119, 0.00000000004909806710, 0.00000000003364531769, 0.00000000002303635851, 0.00000000001575933679, 0.00000000001077213757, 0.00000000000735717912, 0.00000000000502077719, 0.00000000000342362421, 0.00000000000233271256, 0.00000000000158818623, 0.00000000000108046566, 0.00000000000073450488, 0.00000000000049894945, 0.00000000000033868911, 0.00000000000022973789, 0.00000000000015572383, 0.00000000000010548054, 0.00000000000007139840, 0.00000000000004829557, 0.00000000000003264619, 0.00000000000002205299, 0.00000000000001488731, 0.00000000000001004347, 0.00000000000000677124, 0.00000000000000456225, 0.00000000000000307196, 0.00000000000000206720, 0.00000000000000139022, 0.00000000000000093437, 0.00000000000000062762, 0.00000000000000042133, 0.00000000000000028267, 0.00000000000000018954, 0.00000000000000012701, 0.00000000000000008507, 0.00000000000000005694, 0.00000000000000003809);
    vec2 res = cadd(clog(cadd(z, vec2(2., 0.))), vec2(s[0], 0.));
    vec2 zn = c1;

    for (int i = 1; i < 120; i++) {
        zn = cmul(zn, .5 * z);
        res = cadd(res, cmul(vec2(s[i], 0.), zn));
    }

    for (int i = 0; i < flog; i++) {
        res = clog(res);
    }
    for (int i = 0; i < fexp; i++) {
        res = cexp(res);
    }
    return res;
}

vec2 ctet(in vec2 z) {
    // e^^z
    if (z.y > 4.5) {
        return cfima(z);
    } else if (z.y > 1.5) {
        return ctai(z);
    } else if (z.y > -1.5) {
        return cmaclo(z);
    } else if (z.y > -4.5) {
        return conj(ctai(conj(z)));
    }
    return conj(cfima(conj(z)));
}

vec2 cate(in vec2 z) {
    vec2 shift = c0;

    for (int i = 0; i < 25; i++) {
        if (abs(z.y) > 1.3372357014306895) {
            z = clog(z);
            shift.x++;
        } else if (z.x > 2.) {
            shift.x++;
            z = clog(z);
        } else if (z.x < 0.31813150520476413) {
            shift.x--;
            z = cexp(z);
        } else if (length(csub(clog(z), c1)) < length(csub(z, c1))) {
            z = clog(z);
            shift.x++;
        } else {
            break;
        }
    }

    float[] u = float[](1.4192252155045112363, -0.05213258059503801667, 0.00693219127232187586, -0.00015617045803377859, -0.00100912103192385785, 0.00082172671942507903, -0.00035776641706493177, -0.00000931803078422933, 0.00016678111348857047, -0.00014181446429806932, 0.00003186488716454018, 0.00006022937595596333, -0.00007769822429012910, 0.00002881816919640196, 0.00003346765914794806, -0.00005635940084759932, 0.00002613708927959275, 0.00002533341053138444, -0.00005010441151688034, 0.00002593810263640952, 0.00002404611936084357, -0.00005163238246428602, 0.00002794638872473000, 0.00002700739592764804, -0.00005939035114511979, 0.00003210955504312860, 0.00003438232223525011, -0.00007428278434380886, 0.00003866302665809861, 0.00004803799918127077, -0.00009914141292927652, 0.00004800025436154043, 0.00007191960183392704, -0.00013922522917537457, 0.00006043126908005670, 0.00011338211995240744, -0.00020351111316586852, 0.00007562971718596908, 0.00018585637209671475, -0.00030700846364341576, 0.00009132512919756623, 0.00031386108850653502, -0.00047464470561729965, 0.00010030770871287629, 0.00054232170050706079, -0.00074759603610534669, 0.00008375204845585605, 0.00095389423083896800, -0.00119336225449479362, -0.00000327383738614825, 0.00170107934819055851, -0.00192109516273315209, -0.00026290310001950487, 0.00306590657916818192, -0.00310372506294090238, -0.00091982425407694250, 0.00556979490215834833, -0.00500546835451257978, -0.00245869651201214212, 0.01017705593773498771, -0.00800820238034244403, -0.00590649361431362999, 0.01866321477729812259, -0.01260156096677063874, -0.01341963601206602220, 0.03429254345271898208, -0.01926894593144593687, -0.02946277663641767158, 0.06300065960337521143, -0.02800532706641396460, -0.06325609033757989552, 0.11556117355587923468, -0.03708367328869965895, -0.13352664223772733876, 0.21104853030721187901, -0.03941069742436464907, -0.27853504829255953945, 0.38331715278474703945, -0.01491397058539710788, -0.57446133459038406510, 0.68905734940479856920, 0.09065013779953061401, -1.17542205931169707611, 1.22536662105515059551, 0.40500835675024698945, -2.37977019901803332758, 2.13411821810153146117, 1.24184396615612624437, -4.78947531960227212977, 3.64093109251482172084, 3.27095016057312193425, -9.53051815711462246838, 5.92750355113636295812, 8.12068845726284394004, -18.89123486907114468636, 9.07245090167984002960, 18.99435214920948311601, -36.62201395750987842348, 12.69160696640316032813, 43.73569046442687380249, -71.43155879446639744401, 14.83661067193675719977, 95.94011857707508283966, -135.28537549407113260713, 4.55415019762845751927, 212.46383399209483400227, -258.45286561264816782568, -34.35533596837944259050, 440.37608695652170354151, -466.49328063241102881875, -184.78893280632408391284, 969.10988142292478642048, -888.80079051383393107244, -485.21897233201576682404, 1912.15652173913008482486, -1381.80553359683767666866, -1490.15335968379417863616, 4216.82213438735107047250, -2565.99525691699591334327, -3155.47826086956501967506, 7689.57470355731129529886, -3206.47588932806274897303, -8547.41501976284416741692, 17971.70592885375299374573, -7203.41501976284507691162, -16388.65454545454485923983, 28589.12885375493715400808, -2355.80711462450562976301);

    vec2 a0 = vec2(0.31813150520476413531, 1.33723570143068940890);
    vec2 ac = conj(a0);

    vec2 res = c0;
    vec2 z_1 = csub(z, c1) * .5;

    for (int i = 127; i > 0; i--) {
        res = cadd(res, vec2(u[i], 0.));
        res = cmul(res, z_1);
    }

    res = cadd(res, vec2(u[0], 0.));
    res = cadd(res, cdiv(clog(csub(z, a0)), a0));
    res = cadd(res, cdiv(clog(csub(z, ac)), ac));
    res = cadd(res, shift);
    return res;
}

vec2 ctetranat(in vec2 z, in vec2 w) {
    return ctet(w + cate(z));
}

vec2 ctetranat(in vec2 z) {
    return ctetranat(z, c1);
}
vec2 ctetra(in vec2 z, in vec2 n) {
    vec2 w = c1;
    int nr = int(n.x);
    for (int i = 0; i < nr; i++) {
        w = cpow(z, w);
    }
    return w;
}

// https://www.shadertoy.com/view/Mlsfzs
void sncndn(float u, float k2, out float sn, out float cn, out float dn) {
    float emc = 1.0 - k2;
    float a, b, c;
    const int N = 4;
    float em[N], en[N];
    a = 1.0;
    dn = 1.0;
    for (int i = 0; i < N; i++) {
        em[i] = a;
        emc = sqrt(emc);
        en[i] = emc;
        c = 0.5 * (a + emc);
        emc = a * emc;
        a = c;
    }
    // Nothing up to here depends on u, so
    // could be precalculated.
    u = c * u;
    sn = sin(u);
    cn = cos(u);
    if (sn != 0.0) {
        a = cn / sn;
        c = a * c;
        for (int i = N - 1; i >= 0; i--) {
            b = em[i];
            a = c * a;
            c = dn * c;
            dn = (en[i] + a) / (b + a);
            a = c / b;
        }
        a = 1.0 / sqrt(c * c + 1.0);
        if (sn < 0.0)
            sn = -a;
        else
            sn = a;
        cn = c * sn;
    }
}

vec2 csn(vec2 z, vec2 w2) {
    float k2 = w2.x;
    float snu, cnu, dnu, snv, cnv, dnv;
    sncndn(z.x, k2, snu, cnu, dnu);
    sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
    float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
    return a * vec2(snu * dnv, cnu * dnu * snv * cnv);
}

vec2 ccn(vec2 z, vec2 w2) {
    float k2 = w2.x;
    float snu, cnu, dnu, snv, cnv, dnv;
    sncndn(z.x, k2, snu, cnu, dnu);
    sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
    float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
    return a * vec2(cnu * cnv, -snu * dnu * snv * dnv);
}

vec2 cdn(vec2 z, vec2 w2) {
    float k2 = w2.x;
    float snu, cnu, dnu, snv, cnv, dnv;
    sncndn(z.x, k2, snu, cnu, dnu);
    sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
    float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
    return a * vec2(dnu * cnv * dnv, -k2 * snu * cnu * snv);
}

vec2 csn(vec2 z) {
    return csn(z, R(.5));
}
vec2 ccn(vec2 z) {
    return ccn(z, R(.5));
}
vec2 cdn(vec2 z) {
    return cdn(z, R(.5));
}

vec2 cgamma(in vec2 z) {
    // Lanczos
    float LG = 5.65;
    float[] P = float[](2.506628275635, 225.525584619175, -268.295973841305, 80.9030806934622, -5.007578639705, 0.0114684895435);

    vec2 zz = (z.x > 1.0) ? (z) : (c1 - z);
    vec2 sum = vec2(P[0], 0.0) + P[1] * cinv(zz + c1) + P[2] * cinv(zz + vec2(2.0, 0.0)) + P[3] * cinv(zz + vec2(3.0, 0.0)) + P[4] * cinv(zz + vec2(4.0, 0.0)) + P[5] * cinv(zz + vec2(5.0, 0.0));
    vec2 zh = zz + vec2(LG, 0.0);
    vec2 w = cexp(clog(sum) + cmul(zz + vec2(0.5, 0.0), clog(zh)) - clog(zz) - zh);

    return ((z.x > 1.0) ? (w) : (PI * cinv(cmul(w, csin(PI * z)))));
}

vec2 cgammaem(vec2 z) {
    // Spouge
    const int N = 16;
    float Nf = float(N);
    float c = sqrt(TAU);
    vec2 s = R(c);
    float f = 1.;
    for (int k = 1; k < N; k++) {
        float kf = float(k);
        float Nk = Nf - kf;
        c = exp(Nk) * pow(Nk, kf - .5) / f;
        f *= -kf;
        s += c * cinv(z + R(kf));
    }
    s = cmul(s, cmul(cexp(-z - R(Nf)), cpow(z + R(Nf), z + R(.5))));
    return cdiv(s, z);
}

vec2 cfactorial(in vec2 z) {
    return cgamma(cadd(z, c1));
}

vec2 czeta(in vec2 z, in vec2 a) {
    // Hurwitz Zeta function
    vec2 suffix = c0;

    // Naive SUM:
    // for(int n = 0; n < 100; n++) {
    //   suffix += cpow(cadd(a, R(float(n))), -z);
    // }
    // return suffix;

    if (a.x > 1. && z.x < 0.) {
        // zeta(s, a) = zeta(s, a + m) + sum(0 -> m - 1, (n + a)^-s)
        // zeta(s, a + m) = zeta(s, a) - sum(0 -> m - 1, (n + a)^-s)

        float k = fract(a.x);
        float m = a.x - k;
        a.x = k;
        for (int i = 0; i < int(m); i++) {
            suffix = cadd(suffix, cpow(cadd(R(float(i)), a), -z));
        }
        suffix = -suffix;
    } else if (a.x < 0. && z.x < 0.) {
        // zeta(s, a) = zeta(s, a + m) + sum(0 -> m - 1, (n + a)^-s)
        // zeta(s, a + m) = zeta(s, a) - sum(0 -> m - 1, (n + a)^-s)

        float m = -floor(a.x);
        float k = a.x + m;

        for (int i = 0; i < int(m); i++) {
            suffix = cadd(suffix, cpow(cadd(R(float(i)), a), -z));
        }
        a.x = k;
    }

    if (z.x < -1. && (abs(a.y) < 1e-9 && a.x > 0. && a.x <= 1.)) {
        // Fast convergence on negative real part
        // zeta(s, a) = 2*gamma(1-s) / (TAU)^(1-s) (
        //    sin(ETA*s) * sum(1 -> inf, cos(TAU*n*a) * n^(1-s)) +
        //    cos(ETA*s) * sum(1 -> inf, sin(TAU*n*a) * n^(1-s)))
        const int N = 40;
        vec2 sum1 = c0;
        vec2 sum2 = c0;
        vec2 z_1 = csub(z, c1);
        float k = TAU * a.x;
        for (int i = 1; i < N; i++) {
            float d = float(i);
            vec2 p = cpow(R(d), z_1);
            sum1 += cos(d * k) * p;
            sum2 += sin(d * k) * p;
        }
        vec2 f = cmul(csin(ETA * z), sum1) + cmul(ccos(ETA * z), sum2);
        return cadd(2. * cmul(cpow(R(TAU), z_1), cmul(cgamma(-z_1), f)), suffix);
    }

    vec2 zeta = c0;
    int n = 15;
    vec2 N = R(float(n));
    vec2 aN = cadd(a, N);
    vec2 s = -z;
    for (int i = 0; i < n; i++) {
        zeta = cadd(zeta, cpow(cadd(a, R(float(i))), s));
    }
    vec2 deriv = cpow(aN, s);
    vec2 term = .5 * deriv;
    zeta = cadd(zeta, term);

    vec2 emq = aN;
    term = cmul(deriv, emq);
    s = cadd(s, c1);
    term = cdiv(term, s);
    zeta = csub(zeta, term);

    emq = cinv(emq);
    deriv = cmul(deriv, emq);

    emq = cmul(emq, emq);

    float fact = .5;

    s = csub(s, c1);
    s = -s;
    vec2 spoch = s;
    int k = 1;
    while (k < 20) {
        float ft = B2N[k];
        ft *= fact;

        term = ft * deriv;
        term = cmul(term, spoch);
        zeta = cadd(zeta, term);

        ft = dot2(term);
        if (ft < 1e-9) {
            break;
        }
        k++;
        float k2 = 2. * float(k);
        fact /= k2 * (k2 - 1.);
        deriv = cmul(deriv, emq);
        s = cadd(s, c1);
        spoch = cmul(spoch, s);
        s = cadd(s, c1);
        spoch = cmul(spoch, s);
    }

    zeta = cadd(zeta, suffix);

    return zeta;
}

vec2 czeta(in vec2 z) {
    return czeta(z, c1);
}

vec2 cdzeta(in vec2 z) {
    vec2 sum = vec2(0);
    for (float i = 1.; i < 30.; ++i) {
        sum += -log(i) * cos(-z.y * log(i) - vec2(ETA, 0.)) / pow(i, z.x);
    }
    return sum;
}

vec2 _cpsi_asymptotic(in vec2 z) {
    // Digamma function
    float[] B = float[](0.166666666666666667, -0.0333333333333333333, 0.0238095238095238095, -0.0333333333333333333, 0.0757575757575757576, -0.253113553113553114, 1.16666666666666667, -7.09215686274509804, 54.9711779448621554, -529.124242424242424, 6192.12318840579710, -86580.2531135531136, 1425517.16666666667, -27298231.0678160920, 601580873.900642368, -15116315767.0921569);
    vec2 rzz = cdiv(cinv(z), z);
    vec2 zfac = c1;
    vec2 term = c0;
    vec2 res = csub(clog(z), .5 * cinv(z));

    for (int i = 1; i < 17; i++) {
        zfac = cmul(zfac, rzz);
        term = -B[i - 1] * zfac / (2. * float(i));
        res = cadd(res, term);
        if (length(term) < 2.220446092504131e-16 * length(res)) {
            break;
        }
    }
    return res;
}
vec2 _forward_rec(in vec2 z, in vec2 s, in int n) {
    vec2 res = s;
    for (int i = 0; i < n; i++) {
        res = cadd(res, cinv(cadd(z, vec2(float(i), 0.))));
    }
    return res;
}
vec2 _backward_rec(in vec2 z, in vec2 s, in int n) {
    vec2 res = s;
    for (int i = 1; i < n + 1; i++) {
        res = csub(res, cinv(csub(z, vec2(float(i), 0.))));
    }
    return res;
}

vec2 cpsi(in vec2 z) {
    float absz = length(z);
    vec2 res = c0;
    float smallabsz = 14.;

    if (z.x < 0. && abs(z.y) < smallabsz) {
        res = csub(res, PI * cdiv(ccos(PI * z), csin(PI * z)));
        z = csub(c1, z);
        absz = length(z);
    }

    if (absz < 0.5) {
        res = csub(res, cinv(z));
        z = cadd(c1, z);
        absz = length(z);
    }

    if (absz > smallabsz) {
        res = cadd(res, _cpsi_asymptotic(z));
    } else if (z.x >= 0.) {
        int n = int(smallabsz - absz) + 1;
        res = cadd(res, _backward_rec(cadd(z, vec2(float(n), 0.)), _cpsi_asymptotic(cadd(z, vec2(float(n), 0.))), n));
    } else {
        int n = int(smallabsz - absz) - 1;
        res = cadd(res, _forward_rec(csub(z, vec2(float(n), 0.)), _cpsi_asymptotic(csub(z, vec2(float(n), 0.))), n));
    }
    return res;
}
vec2 cpolygamma(in vec2 z, in vec2 w) {
    if (length(w) < 1e-6) {
        return cpsi(z);
    }
    return cmul(cmul(cpow(-c1, cadd(w, c1)), cfactorial(w)), czeta(cadd(w, c1), z));
}

// vec2 cpolygamma(in vec2 z, in float k) {
//     if (abs(k) < 1e-6) {
//         return cpsi(z);
//     }

//     if (fract(k) > 1e-6) {
//         return cpolygamma(z, R(k));
//     }
//     int n = int(k);
//     // Compute !n:
//     int fact = 1;
//     for (int i = 1; i < n; i++) {
//         fact *= i;
//     }
//     float sign = 1.;
//     if (n % 2 == 0) {
//         sign *= -1.;
//     }
//     return sign * float(fact) * czeta(float(fact + 1), z);
// }

vec2 ceta(in vec2 z) {
    return cmul(czeta(z), csub(c1, cpow2(csub(c1, z))));
}
vec2 cdgamma(in vec2 z) {
    return cmul(cgamma(z), cpsi(z));
}

vec2 cbeta(in vec2 z, in vec2 w) {
    return cdiv(cgamma(z) * cgamma(w), cgamma(cadd(z, w)));
}

vec2 cdbeta(in vec2 z, in vec2 w) {
    return cmul(cbeta(z, w), csub(cpsi(z), cpsi(cadd(z, w))));
}

vec2 cphi(in vec2 z, in vec2 s, in vec2 a) {
    // Lerch Phi function
    vec2 sum = vec2(0);
    vec2 term = vec2(0);
    vec2 zk = c1;

    for (float i = 0.; i < 50.; ++i) {
        term = cdiv(zk, cpow(cadd(a, vec2(float(i), 0.)), s));
        sum += term;
        if (length(term) <= 1e-9 * (1. + length(sum))) {
            break;
        }
        zk = cmul(zk, z);
    }
    return sum;
}

vec2 cxi(in vec2 z) {
    vec2 hz = .5 * z;
    return cmul(cmul(cmul(cmul(hz, csub(z, c1)), cpow(R(PI), -hz)), cgamma(hz)), czeta(z));
}

vec2 cfibonacci(in vec2 z) {
    // Using generalized Binet formula
    return csub(cpow(R(PHI), z), cpow(R(-PHI), -z)) / (2. * PHI - 1.);
}

vec2 cweierstrass(in vec2 z) {
    // Weierstrass elliptic function
    const float om = 1.529954037057; // real semiperiod
    const float o3 = 0.57735026919; // 1/sqrt(3)
    const vec2 ep = vec2(0.5, 0.866025403784); // exp(i * pi/3)

    vec2 zt = z - 2.0 * om * (vec2(floor(0.5 - o3 * dot(vec2(ep.x, -ep.y), z) / om), 0.) + floor(o3 * z.y / om + 0.5) * ep);
    bool zq = (dot(zt, zt) > 0.25);
    vec2 zz = zq ? 0.0625 * zt : zt;

    vec2 z2 = cmul(zz, zz), z4 = cmul(z2, z2), z3 = cmul(zz, z2), z6 = cmul(z4, z2);
    vec2 wp = cinv(z2) + cdiv(cmul(z4 / 28.0, c1 + z6 / 2730.0), c1 + cmul(z6 / 420.0, z6 / 1729.0 - c1));

    if (zq) {
        for (int k = 0; k < 4; k++) {
            vec2 tmp1 = cmul(wp, cmul(wp, wp));
            wp = cdiv(cmul(tmp1 + vec2(2.0, 0.), wp), 4.0 * tmp1 - c1);
        }
    }

    return wp;
}
vec2 cdweierstrass(in vec2 z) {
    // Weierstrass elliptic function
    const float om = 1.529954037057; // real semiperiod
    const float o3 = 0.57735026919; // 1/sqrt(3)
    const vec2 ep = vec2(0.5, 0.866025403784); // exp(i * pi/3)
    // constants for Padé approximation
    const float P0 = 0.00328332715973; // 3191/971880
    const float P1 = 0.0148207056102; // 205/13832

    // period reduction and rescaling
    vec2 zt = z - 2.0 * om * (vec2(floor(0.5 - o3 * dot(vec2(ep.x, -ep.y), z) / om), 0.) + floor(o3 * z.y / om + 0.5) * ep);
    bool zq = (dot(zt, zt) > 0.25);
    vec2 zz = zq ? 0.0625 * zt : zt;

    // evaluate the Padé approximants
    vec2 z2 = cmul(zz, zz), z4 = cmul(z2, z2), z3 = cmul(zz, z2), z6 = cmul(z4, z2);
    vec2 pd = cdiv(cmul(z3 / 7.0, c1 + P0 * z6), c1 + cmul(z6 / 3738.0, P1 * z6 - vec2(13.4, 0.))) - 2.0 * cinv(z3);

    if (zq) {
        for (int k = 0; k < 4; k++) {
            vec2 tmp2 = cmul(pd, pd);
            pd = cdiv(cmul(tmp2 - vec2(18.0, 0.), tmp2) - vec2(27.0, 0.), 8.0 * cmul(pd, tmp2));
        }
    }

    return pd;
}
vec2 cellk(in vec2 z) {
    vec2 agA = c1, agB = csqrt(agA - z);
    vec2 tmp = vec2(0.0), h = tmp;

    for (int i = 0; i <= 9; i++) {
        tmp = csqrt(cmul(agA, agB));
        h = 0.5 * (agB - agA);
        agA += h;
        agB = tmp;
        if (length(h) < 1.0e-6)
            break;
    }

    return (PI * cinv(agA + agB));
}

float polevl(float x, float[11] coef) {
    float ans = coef[0];

    for (int i = 0; i < 11; i++) {
        ans = ans * x + coef[i];
    }
    return ans;
}

float cellpk(in float x) {
    const float P[11] = float[](1.37982864606273237150E-4, 2.28025724005875567385E-3, 7.97404013220415179367E-3, 9.85821379021226008714E-3, 6.87489687449949877925E-3, 6.18901033637687613229E-3, 8.79078273952743772254E-3, 1.49380448916805252718E-2, 3.08851465246711995998E-2, 9.65735902811690126535E-2, 1.38629436111989062502E0);
    const float Q[11] = float[](2.94078955048598507511E-5, 9.14184723865917226571E-4, 5.94058303753167793257E-3, 1.54850516649762399335E-2, 2.39089602715924892727E-2, 3.01204715227604046988E-2, 3.73774314173823228969E-2, 4.88280347570998239232E-2, 7.03124996963957469739E-2, 1.24999999999870820058E-1, 4.99999999999999999821E-1);
    if (x > 0.) {
        return (polevl(x, P) - log(x) * polevl(x, Q));
    } else {
        return (1.3862943611198906188E0 - 0.5 * log(x));
    }
}

float cellik(in float phi, in float m) {
    float a = 1.;
    float b = sqrt(1. - m);
    float c = sqrt(m);
    float d = 1.;
    for (int i = 0; abs(c) > 1e-6; i++) {
        if (mod(phi, PI) != 0.) {
            float dPhi = atan((b * tan(phi)), a);
            if (dPhi < 0.) {
                dPhi += PI;
            }
            phi += dPhi + floor(phi / PI) * PI;
        } else {
            phi += phi;
        }
        c = (a + b) / 2.;
        b = sqrt(a * b);
        a = c;
        c = (a - b) / 2.;
        d += d;
    }
    return phi / (d * a);
}

float cellipticF(in float phi, in float m) {
    float b = sqrt(1. - m);
    float t = tan(phi);

    if (abs(t) > 10.) {
        float e = 1.0 / (b * t);
        phi = atan(e);
        return cellpk(1. - m) - cellik(phi, m);
    }
    return cellik(phi, m);
}

vec2 cellipticFi(in vec2 z, in vec2 w) {
    float m = w.x;
    float r = abs(z.x);
    float i = abs(z.y);
    if (r == 0.) {
        return vec2(0., cellipticF(0., 1. - m) * sign(z.y));
    }
    if (abs(r - ETA) < .001) {
        r = ETA - .001;
    }

    float sinhPsi2 = pow(sinh(i), 2.);
    float cscPhi2 = 1. / (sin(r) * sin(r));
    float cotPhi2 = 1. / (tan(r) * tan(r));
    float b = -(cotPhi2 + m * (sinhPsi2 * cscPhi2) - 1. + m);
    float c = (m - 1.) * cotPhi2;
    float cotLambda2 = (-b + sqrt(max(0., b * b - 4. * c))) / 2.;
    r = cellipticF(atan(1. / sqrt(max(0., cotLambda2))), m) * sign(z.x);
    i = cellipticF(atan(sqrt(max(0., (cotLambda2 / cotPhi2 - 1.) / m))), 1. - m) * sign(z.y);
    return vec2(r, i);
}

vec2 cellipticFi(in vec2 z) {
    return cellipticFi(z, R(.5));
}

// https://www.shadertoy.com/view/wllGD4#
vec2 cnome(in vec2 z) {
    return cexp(-PI * cdiv(cellk(c1 - z), cellk(z)));
}

vec2 clinaive(in vec2 z, in vec2 w) {
    vec2 sum = z;

    vec2 zn = cmul(z, z);
    for (int i = 2; i < 60; i++) {
        vec2 term = cdiv(zn, cpow(R(i), w));
        vec2 osum = sum;
        sum = cadd(sum, term);
        zn = cmul(zn, z);
    }
    return sum;
}

// vec2 cli(in vec2 z, in vec2 w) {
//   vec2 z2 = dot2(z);
//   if(z2 <= .5625) {
//     return clinaive(z, w);
//   } else if(z2 > 1.96) {
//     return cmul(cpow(-1., w), clinaive(cinv(z), w)))...;
//   }
//   return vec2(0.);
// }

vec2 cli(in vec2 z, in vec2 w) {
    float s = w.x;
    vec2 so = R(1. - s);
    vec2 rln = cdiv(clog(-z), ci * TAU);
    vec2 sum = cadd(cmul(cpow(ci, so), czeta(so, cadd(R(.5), rln))), cmul(cpow(ci, -so), czeta(so, csub(R(.5), rln))));

    return cmul(sum, cdiv(cgamma(so), cpow(R(TAU), so)));
}

vec2 clcos(in vec2 z, in vec2 w) {
    vec2 a = cexp(cmul(z, ci));
    vec2 b = cinv(a);

    return .5 * cadd(cli(a, w), cli(b, w));
}
`,n1=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`,t1={includes:Zd,globals:Xd,colors:Yd,render:Kd,complex:Jd,special:e1},r1=(e,n)=>(Object.entries(t1).forEach(([t,r])=>{n=n.replace(`#include ${t}`,r)}),n=n.replace("##CONFIG",[e.perturb&&e.f_perturb?"#define PERTURB":"",e.convergent?"#define CONVERGENT":"",e.divergent?"#define DIVERGENT":"",e.useDerivative&&e.f_prime_z&&e.f_prime_c?"#define USE_DERIVATIVE":"",e.showDerivative?"#define SHOW_DERIVATIVE":"",e.useSmoothing?"#define USE_SMOOTHING":"",e.useDistanceEstimate?"#define USE_DISTANCE_ESTIMATE":"",e.useRoots?"#define USE_ROOTS":"",e.showGrid?"#define SHOW_GRID":"",e.showNormGrid?"#define SHOW_NORM_GRID":"",e.normShade?"#define SHADE_NORM":"",e.showArgGrid?"#define SHOW_ARG_GRID":"",e.argShade?"#define SHADE_ARG":"",e.gridLog?"#define GRID_LOG":"",e.normGridLog?"#define NORM_GRID_LOG":"",e.argGridLog?"#define ARG_GRID_LOG":"",e.showPoles?"#define SHOW_POLES":"",e.showZeroes?"#define SHOW_ZEROES":"",e.animate?"#define ANIMATE":"",e.scaled?"#define SCALED":"",e.showPolya?"#define SHOW_POLYA":"",e.polyaColor?"#define POLYA_COLOR":"",`#define PALETTE ${r0.indexOf(e.palette)}`,`#define SMOOTHING ${i0.indexOf(e.smoothing)}`].filter(Boolean).join(`
`)),n=n.replace("uniform vec2 args;",Object.keys(e.args).map(t=>`uniform vec2 arg_${t};`).join(`
`)),n=n.replace("#init_args",Object.keys(e.args).map(t=>`vec2 ${t} = arg_${t};`).join(`
`)),n=n.replace("#transform_args",Object.keys(e.args).filter(t=>e.varying.includes(t)).concat(e.perturb?["z","c"].filter(t=>e.varying.includes(t)).map(t=>`d${t}`):[]).map(t=>`${t} += pixel;
  ${t} *= transform;`).join(`
`)),n=n.replace(/\bF\(\s*(.+?)\s*,\s*(.+?)\s*\)/g,on(e.f).toShader().replace(/\bz\b/g,"$1").replace(/\bc\b/g,"$2")),e.f_prime_z?n=n.replace(/\bF_prime_z\s*\(\s*(.+?)\s*,\s*(.+?)\s*,\s*(.*?)\s*,\s*(.*?)\s*\)/g,on(e.f_prime_z).toShader().replace(/\bz\b/g,"$1").replace(/\bc\b/g,"$2").replace(/\bz_prime\b/g,"$3").replace(/\bz_1_prime\b/g,"$4")):n=n.replace(/\bF_prime_z\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,"vec2(0)"),e.f_prime_c?n=n.replace(/\bF_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,on(e.f_prime_c).toShader().replace(/z_prime/g,"$1").replace(/z_1_prime/g,"$2")):n=n.replace(/\bF_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,"vec2(0)"),e.f_perturb?n=n.replace(/F_perturb\(Z,\s*dz,\s*dc\)/g,on(e.f_perturb).toShader()):n=n.replace(/F_perturb\(Z,\s*dz,\s*dc\)/g,"vec2(0)"),window.location.search.includes("debug")&&console.info(n.split(`
`).map((t,r)=>`${r+1}: ${t}`).join(`
`)),n),l0=(e,n,t)=>{var l;const{gl:r}=e;if(r.shaderSource(t,n),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS)){const o=r.getShaderInfoLog(t);let s=n;const a=(l=o.match(/ERROR: \d+:(\d+):/))==null?void 0:l[1];if(a){const u=parseInt(a),p=5,v=n.split(`
`),h=Math.max(0,u-p),x=Math.min(v.length,u+p);s=v.slice(h,x).map((z,g)=>(g===p-1?"=>":"  ")+z).join(`
`)}return console.error(`An error occurred compiling shader: ${o}`,s),o}},i1=e=>{const{gl:n}=e;if(n.linkProgram(e.env.program),!n.getProgramParameter(e.env.program,n.LINK_STATUS)){const r=n.getProgramInfoLog(e.env.program);return console.error(`Unable to initialize the shader program: ${r}`),r}},o0=e=>{l0(e,n1,e.env.vertexShader)},zs=e=>{const{gl:n}=e;l0(e,r1(e,bd),e.env.fragmentShader),i1(e),n.useProgram(e.env.program),e.env.uniforms=Object.keys(ys).concat(Object.keys(e.args).map(t=>`arg_${t}`)).reduce((t,r)=>(t[r]=n.getUniformLocation(e.env.program,r),t),{}),window.location.search.includes("debug")&&["f","f_prime_z","f_prime_c","f_perturb"].forEach((t,r)=>{if(!e[t])return;const i=on(e[t]);console.info(t,i.toShader(),i.toComplex())}),ws(e)},Ma=(e,n,t)=>{let r=document.getElementById("webgl2");r||(r=document.createElement("canvas"),r.id="webgl2",document.body.insertBefore(r,document.body.firstChild));const i=r.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});if(r.addEventListener("webglcontextlost",n,!1),r.addEventListener("webglcontextrestored",t,!1),e={...e,gl:i},!i){console.error("Unable to initialize WebGL. Your browser may not support it.");return}e.env={vertexShader:i.createShader(i.VERTEX_SHADER),fragmentShader:i.createShader(i.FRAGMENT_SHADER),program:i.createProgram()},i.attachShader(e.env.program,e.env.vertexShader),i.attachShader(e.env.program,e.env.fragmentShader),o0(e),zs(e);const l=i.createTexture();return i.bindTexture(i.TEXTURE_2D,l),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,128,128,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),{...e,gl:i,textures:{orbit:l}}},ws=e=>{const{uniforms:n}=e.env;Object.entries(ys).concat(Object.entries(e.args).map(([t,r])=>[`arg_${t}`,{type:"2fv",value:()=>r.to2fv()}])).forEach(([t,r])=>{typeof r=="string"&&(r={type:r,value:a=>a});const{type:i,value:l}=r,o=n[t];if(!o)return;const s=l(e[t],e);i.startsWith("m")?e.gl["uniformMatrix"+i.slice(1)](o,!1,s):e.gl["uniform"+i](o,s)})},l1=(e,n,t)=>{let r=e.clientWidth,i=e.clientHeight,l=t?t.width:r*n,o=t?t.height:i*n;return l!==e.width||o!==e.height?(l=Math.floor(l),o=Math.floor(o),e.width=l,e.height=o,!0):!!t},Aa=(e,n)=>y(e.re.multiply(n[0][0]).add(e.im.multiply(n[0][1])),e.re.multiply(n[1][0]).add(e.im.multiply(n[1][1]))),$a=(e,n,t,r,i,l)=>{const[o,s]=l?[2,3]:[0,1],a=new Function("z","c","z_1",`return ${on(e.f).toComplex()}`),u=F(e.bailout);let p=0,v=y();for(;p<e.iterations;p++){n[p*4+o]=t.re.toNumber(),n[p*4+s]=t.im.toNumber();let h=t;if(t=a(t,r,v),v=h,t.norm2().gte(u))break}return i[l?1:0]=p,{orbit:n,max:p}},Qn=(e,n)=>{if(!e.gl)return;const{gl:t}=e;if(t.uniform1f(e.env.uniforms.time,e.animate?performance.now()-e.timeref:0),l1(t.canvas,e.supersampling,n)&&(t.viewport(0,0,t.canvas.width,t.canvas.height),t.uniform2fv(e.env.uniforms.aspect,[t.canvas.width/t.canvas.height,1/Math.max(t.canvas.width,t.canvas.height)]),n)){const{x:r,y:i,width:l,height:o,fullWidth:s,fullHeight:a}=n,{scale:u,varying:p,args:v}=e,{uniforms:h}=e.env;t.uniform2fv(h.aspect,[l/o,1/Math.max(l,o)]);const x=u.multiply(o/a);t.uniform2fv(h.scale,x.to2fv());const z=y(s/2,a/2),T=y(r+l/2,i+o/2).subtract(z).multiply(u).divide(y(a/2));p.split("").forEach(f=>{const c=v[f].add(T);t.uniform2fv(h[`arg_${f}`],c.to2fv())})}if(e.perturb){const r=new Float32Array(65536),i=[0,0],l=e.varying.includes("z")?Aa(e.args.z,e.transform):e.args.z,o=e.varying.includes("c")?Aa(e.args.c,e.transform):e.args.c;try{$a(e,r,y(),o,i),$a(e,r,l,o,i,!0)}catch(s){console.warn(s)}t.uniform2iv(e.env.uniforms.maxIterations,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,128,128,0,t.RGBA,t.FLOAT,r)}t.drawArrays(t.TRIANGLES,0,3)};window.render=Qn;const o1=(e,n)=>{const t=P.useRef(null),r=P.useRef({args:e.args,scale:e.scale,pointers:new Map}),i=t0(()=>{n({args:r.current.args,scale:r.current.scale})},150);P.useEffect(()=>{r.current.args={...e.args}},[e.args]),P.useEffect(()=>{r.current.scale=e.scale},[e.scale]);const l=P.useCallback(()=>{t.current=null,Qn(e)},[e]),o=P.useCallback((u,p,v,h)=>{const x=e.gl.canvas.width/e.gl.canvas.height,z=r.current.scale.multiply(2);(v?e.varying:e.move).split("").forEach(T=>{r.current.args[T]=r.current.args[T].add(y(-u*x,p).multiply(z))})},[e.gl.canvas.height,e.gl.canvas.width,e.move,e.varying]),s=P.useCallback((u,p,v)=>{const h=.5-p,x=.5-v;o(h*u,x*u,!0);const z=r.current.scale.multiply(u),T=z.real().toString().match(/^-?0\.(0*)/);T&&T[1].length>z.real().precision-16&&(z.real().precision=T[1].length+16),r.current.scale=r.current.scale.subtract(z)},[o]),a=P.useCallback(()=>{e.args=r.current.args,e.scale=r.current.scale,Object.keys(e.args).forEach(u=>{e.gl.uniform2fv(e.env.uniforms[`arg_${u}`],r.current.args[u].to2fv())}),e.gl.uniform2fv(e.env.uniforms.scale,r.current.scale.to2fv()),t.current||(t.current=requestAnimationFrame(l))},[l,e.type]);P.useEffect(()=>{let u=null,p=null;const v=z=>{z.button!==0||z.target.id!=="webgl2"||r.current.pointers.set(z.pointerId,[z.clientX,z.clientY])},h=z=>{if(!r.current.pointers.has(z.pointerId))return;const g=r.current.pointers.get(z.pointerId),T=[z.clientX-g[0],z.clientY-g[1]];if(r.current.pointers.set(z.pointerId,[z.clientX,z.clientY]),r.current.pointers.size>1){const d=r.current.pointers.values(),w=d.next().value,E=d.next().value;p===null&&(p=[(w[0]+E[0])/(2*window.innerWidth),(w[1]+E[1])/(2*window.innerHeight)]);const N=Math.hypot(w[0]-E[0],w[1]-E[1]);if(u===null){u=N;return}const R=(N-u)/window.innerWidth;u=N,s(R*2,...p),a();return}const f=T[0]/window.innerWidth,c=T[1]/window.innerHeight;o(f,c,!1,z.shiftKey),a()},x=z=>{i(),r.current.pointers.clear(),u=null,p=null};return document.addEventListener("pointerdown",v),document.addEventListener("pointermove",h),document.addEventListener("pointerup",x),()=>{document.removeEventListener("pointerdown",v),document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",x)}},[o,s,a]),P.useEffect(()=>{const u=p=>{if(p.target.id!=="webgl2")return;const v=-p.deltaY/window.innerWidth,h=p.clientX/window.innerWidth,x=p.clientY/window.innerHeight;s(v,h,x),a(),i()};return document.addEventListener("wheel",u),()=>{document.removeEventListener("wheel",u)}},[a,s])};function s1({runtime:e,updateParams:n}){return o1(e,n),null}const Cl=(e,n)=>n.map(t=>e[t]),a1=e=>Object.entries(e).map(([n,t])=>`${n}|${t}`).join("#"),u1=(e,n)=>{P.useEffect(()=>{n(r=>({...r,perturb:r.usePerturbation===null?Math.log10(r.scale.real().toNumber())<-4.5:r.usePerturbation}))},[e.scale,e.usePerturbation,n]),P.useEffect(()=>{n(r=>(ws(r),r))},[...Cl(e,Object.keys(ys)),a1(e.args),n]),P.useEffect(()=>{n(r=>(zs(r),r))},[...Cl(e,qd),n]),P.useEffect(()=>{if(!e.gl.canvas)return;const r=new ResizeObserver(()=>{Qn(e)});return r.observe(e.gl.canvas,{box:"content-box"}),()=>r.disconnect()},[e,e.gl.canvas]);const t=P.useRef(null);P.useEffect(()=>{if(e.animate){e.timeref=performance.now();const r=()=>{Qn(e),t.current=requestAnimationFrame(r)};return r(),()=>{cancelAnimationFrame(t.current),t.current=null}}},[e.animate]),P.useEffect(()=>{n(r=>(Qn(r),r))},Cl(e,Qd))};function c1({runtime:e,setRuntime:n}){return u1(e,n),null}function f1({runtime:e,setRuntime:n,updateParams:t}){var i,l;window.rt=e;const r=P.useCallback(o=>s=>{s.type=o,n(a=>({...a,error:s}))},[n]);return m.jsxs(m.Fragment,{children:[m.jsx(ja,{error:(i=e.error)==null?void 0:i.render,onError:r("render"),children:m.jsx(c1,{runtime:e,setRuntime:n})}),m.jsx(ja,{error:(l=e.error)==null?void 0:l.interact,onError:r("interact"),children:m.jsx(s1,{runtime:e,updateParams:t})})]})}const d1=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:m.jsx("path",{fill:"currentColor",d:"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"})}),s0=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),p1=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),h1=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),m1=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),v1=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"})}),g1=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"currentColor",d:"M6 18V6h12v12z"})}),y1=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"currentColor",d:"M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"})}),z1=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"currentColor",d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"})}),w1=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"currentColor",d:"M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"})}),x1=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"currentColor",d:"M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709m.497-1.017q3.09-.202 5.295-2.459T20 12t-2.185-5.505T12.5 4.017z"})}),S1=m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"currentColor",d:"m21.11 22.53l-3.508-3.507q-1.161.935-2.578 1.456T12 21q-1.868 0-3.51-.709t-2.857-1.923t-1.924-2.858T3 12q0-1.608.521-3.024q.521-1.417 1.456-2.578l-3.09-3.09l.713-.714l19.223 19.223zM12 20q1.394 0 2.628-.454t2.249-1.248L12 13.421zm7.625-3.192l-.744-.745q.544-.894.831-1.913T20 12q0-3.325-2.337-5.663T12 4v5.183L7.192 4.375q1.05-.656 2.262-1.016Q10.667 3 12 3q1.868 0 3.51.709t2.858 1.924T20.29 8.49T21 12q0 1.333-.36 2.546t-1.015 2.262"})}),nt=e=>[[Math.cos(e),-Math.sin(e)],[Math.sin(e),Math.cos(e)]],So=(e,n)=>n===0||n===e?1:So(e-1,n-1)+So(e-1,n),k1=(e,n,t,r=0)=>{let i="";for(let l=r;l<=t;l++){const o=So(t,l);if(o===0)continue;const s=(h,x)=>x===0?"":x===1?h:`${h}^${x}`,a=s(e,t-l),u=s(n,l),p=a&&u?`${a} * ${u}`:a||u,v=o===1?p:`${o} * ${p}`;i?i=`${v} + ${i}`:i=v}return i},ve=(e,n,t={})=>({name:e,params:{f:`z^${n} + c`,f_perturb:`${k1("Z","dz",n,1)} + dc`,...t}}),tt=(e,n,t,r={})=>({name:e,params:{...ve(e,n).params,derivative:85,velocity:70,varying:"z",args:{z:y(),c:t},...r}}),me=(e,n,t={})=>{var r;return{name:e,params:{varying:"z",f:`z - ${(r=t==null?void 0:t.args)!=null&&r.a?"a * ":""}(${n})# + c`,iterations:75,useDerivative:!1,useRoots:!0,convergent:!0,divergent:!1,...t}}},hn=(e,n,t={})=>{var r;return{name:e,params:{args:{z:y(1),c:y(-.5)},f:`z - ${(r=t==null?void 0:t.args)!=null&&r.a?"a * ":""}(${n})# + c`,useDerivative:!1,convergent:!0,divergent:!1,...t}}},_=(e,n,t={})=>({name:e,params:{f:n,iterations:1,varying:"z",palette:"rainbow",divergent:!1,useDerivative:!1,usePerturbation:!1,scale:y(2.5),...t}}),a0=e=>e.map(({name:n,params:t,subforms:r})=>({name:n,params:{...Tt,f_perturb:null,...t,f_prime_z:t.f_prime_z||wr(t.f,["z","z_1"]).toString(),f_prime_c:t.f_prime_c||wr(t.f,["z","z_1"],["c"]).toString()},subforms:r?a0(r):[]})),gn=a0([{...ve("Mandelbrot",2,{args:{z:y(),c:y(-.5)}}),subforms:[ve("Minibrot",2,{args:{z:y(),c:y(-1.71121,2e-5)},scale:y(85e-5),smoothing:"distance_scaled",velocity:70,saturation:0,lightness:250}),ve("Bibrot",3),ve("Tribrot",4),ve("Quadribrot",5),ve("Quintibrot",6),ve("Hexibrot",7),ve("Heptibrot",8),ve("Octibrot",9),ve("Nonibrot",10),ve("Decabrot",11),ve("Invbibrot",-2,{args:{z:y(10),c:y()},convergent:!0,scale:y(3),derivative:250}),ve("Invtribrot",-3,{args:{z:y(10),c:y()},convergent:!0,scale:y(3),derivative:350}),{name:"Mandelbar",params:{...ve("Mandelbar",2).params,f:"~z^2 + c",f_perturb:"~(2 * Z * dz + dz^2) + dc"}},{name:"Tearbrot",params:{args:{z:y(),c:y(0,1)},scale:y(4),transform:nt(-Math.PI/2),f:"(z + 1)^2 / c",showDerivative:!0,derivative:80,f_perturb:"(C * dz^2 + 2 * C * dz * Z + 2 * C * dz - dc * Z^2 - 2 * dc * Z - dc) / (C * (C + dc))"}},{name:"Moonbrot",params:{scale:y(6),f:"c / (z + 1)^2",derivative:120}},{name:"Mothbrot",params:{scale:y(1.5),f:"z^2 * (|re(z)| + |im(z)|i)^3 + c",derivative:120}},{name:"Burningship",params:{args:{z:y(),c:y(.5,.5)},transform:nt(Math.PI),derivative:100,scale:y(1.5),f:"(|re(z)| + |im(z)|i)^2 + c",f_perturb:"(2 * re(dz) * re(Z) + re(dz) * re(dz) - 2 * im(Z) * im(dz) - im(dz) * im(dz) + 2 * (diffabs((re(Z) * im(Z)), (re(Z) * im(dz) + re(dz) * im(Z) + re(dz) * im(dz)))) * i) + dc"},subforms:[{name:"Miniship",params:{args:{z:y(),c:y(1.85982,.004584)},transform:nt(Math.PI),derivative:100,smoothing:"distance_scaled",scale:y(.008069),velocity:62,lightness:300,saturation:0,f:"(|re(z)| + |im(z)|i)^2 + c",f_perturb:"(2 * re(dz) * re(Z) + re(dz) * re(dz) - 2 * im(Z) * im(dz) - im(dz) * im(dz) + 2i * diffabs((re(Z) * im(Z)), (re(Z) * im(dz) + re(dz) * im(Z) + re(dz) * im(dz)))) + dc"}},{name:"Bird of Prey",params:{transform:nt(-3*Math.PI/4),derivative:100,scale:y(1.5),f:"(|re(z)| + |im(z)|i)^3 + c",f_perturb:"(re(Z)^2 - 3 * im(Z)^2) * diffabs(re(Z), re(dz)) + (2 * (re(Z) * re(dz)) + re(dz)^2 - 6 * (im(Z) * im(dz)) - 3 * im(dz)^2) * abs(re(Z) + re(dz)) + i * ((3 * re(Z)^2 - im(Z)^2) * diffabs(im(Z), im(dz)) + (6 * (re(Z) * re(dz)) + 3 * re(dz)^2 - 2 * (im(Z) * im(dz)) - im(dz)^2) * abs(im(Z) + im(dz))) + dc"}},{name:"Buffalo",params:{transform:nt(Math.PI),f:"(|re(z)| + |im(z)|i)^2 - (|re(z)| + |im(z)|i) + c"}},{name:"Bird",params:{f:"(re(z) - |im(z)|i)^2 + c"}}]},{name:"Magnet",params:{args:{z:y(),c:y(1)},scale:y(3),f:"((z^2 + c - 1) / (2z + c - 2))^2",useDerivative:!1,convergent:!0}},{name:"Tetrate",params:{args:{z:y(.5),c:y(1)},scale:y(3),f:"c^z",useDerivative:!1}},{name:"Celtic",params:{args:{z:y(),c:y(-.7)},scale:y(2),f:"|re(z^2)| + i * im(z^2) + c",useDerivative:!1}}]},{...tt("Julia 0 + .8i",2,y(0,.8)),subforms:[tt("Julia -.7 + .27015",2,y(-.7,.27015)),tt("Julia .355 + .355i",2,y(.355,.355)),tt("Bijulia -.371594 + .662412i",3,y(-.371594,.662412)),tt("Trijulia -.29053 - .450488i",4,y(-.29053,-.450488),{derivative:175}),tt("2iJulia","(2i)",y(),{useDerivative:!1,bailout:4.1,iterations:100}),{name:"Phoenix",params:{args:{z:y(),c:y(.5667)},scale:y(1.5),transform:nt(-Math.PI/2),varying:"z",f:"z^2 + c - 0.5 * z_1",useDerivative:!1,f_perturb:"2 * Z * dz + dz^2 + dc - 0.5 * dz_1"}},{name:"Frothy",params:{args:{z:y(.5),c:y(2+.03,-.01)},varying:"z",scale:y(3),f:"z^2 - c*~z",f_perturb:"dz^2 + 2 * dz * Z - C * ~dz - dc * ~Z - dc * ~dz"}},{name:"Whirlpool",params:{varying:"z",args:{z:y(),c:y(2,0)},scale:y(3),f:"(c/z + (im(z)*z - re(z))/c)^2"}}]},{...me("Newton","(z - r)(z - s)(z - t)",{args:{r:y(1),s:y(-.5,-.86603),t:y(-.5,.86603),a:y(1),c:y(),z:y()}}),subforms:[me("Newton","z^3 + 1"),me("Newton","z^4 - 1"),me("Newton","(z^4 - b) / (z - d) - e",{args:{b:y(-1),d:y(3),e:y(1),a:y(1),z:y(),c:y()}}),me("Newton","z^3 - 2z + 2"),me("Newton","z^8 + 15z^4 - 16"),me("Newton","z^5 - 3i * z^3 - (5 + 2i) * z^2 + 3z + 1"),me("Newton","z^6 + z^3 - 1"),me("Newton","z^^3 - 1"),me("Newton","sin(z)",{args:{z:y(Math.PI/2),c:y()}}),me("Newton","cosh(z) - 1",{args:{z:y(-3.14,-3.14),c:y()}}),me("Newton","z^4 * sin(z) - 1"),me("Newton generalized","z^3 - 1",{divergent:!0,convergent:!1,smoothing:"exp",velocity:750,args:{z:y(),c:y(),a:y(-.5)}}),me("Newton generalized","z^2 - 1",{divergent:!0,convergent:!1,smoothing:"exp",velocity:750,bailout:1.5,iterations:100,useRoots:!1,args:{z:y(),c:y(),a:y(1,1)}}),me("Newton generalized","z^(4 + 3i) - 1",{args:{z:y(1,.25),c:y(),a:y(1.9)},scale:y(.05)})]},{...hn("Nova","(z - r)(z - s)(z - t)",{args:{r:y(1),s:y(-.5,-.86603),t:y(-.5,.86603),a:y(1),z:y(1),c:y(-.5)}}),subforms:[hn("Nova","z^3 - 1"),hn("Nova","z^4 - 1"),hn("Nova","(z - 1)(z - 4 + i * sqrt(2))(z + sqrt(3) - i * sqrt(3))",{args:{z:y(1),c:y()},scale:y(2)}),hn("Nova","z^3 - 2z + 2"),hn("Nova","z^8 + 15z^4 - 16"),hn("Nova","z^6 + z^3 - 1"),hn("Nova","z^4 * sin(z) - 1")]},{..._("Domain coloring Polynomial","z + c"),subforms:[_("z²","z^2 + c"),_("","((z - 1)(z + 1)^2) / ((z + i)(z - i)^2) + c"),_("","(z^3 - 2 * z + i) / (z^2 + 1) + c"),_("","z / 2 + 1 / (2 * z) + c")]},{..._("Domain coloring Trigonometry","sin(z) + c",{scale:y(3)}),subforms:[_("Cos","cos(z) + c"),_("Tan","tan(z) + c"),_("Acos","acos(z) + c"),_("Asin","asin(z) + c"),_("Atan","atan(z) + c"),_("Cosh","cosh(z) + c"),_("Sinh","sinh(z) + c"),_("Tanh","tanh(z) + c"),_("Acosh","acosh(z) + c"),_("Asinh","asinh(z) + c"),_("Atanh","atanh(z) + c"),_("Cn","cn(z, .5) + c"),_("Sn","sn(z, .5) + c"),_("Dn","dn(z, .5) + c"),_("Cn","cn(z, .5) / cos(z) + c"),_("Complete Elliptic Integral of First Kind","ellk(z) + c"),_("Incomplet Elliptic Integral of First Kind","ellfi(z, .5) + c"),_("Nome","nome(z) + c")]},{..._("Domain coloring Transcendental","exp(z) + c"),subforms:[_("Log","log(z) + c"),_("","exp(z^-1) + c",{scale:y(1.5)}),_("","exp(-z^2) + c",{scale:y(1.5),showPolya:!0}),_("Square Root","sqrt(z) + c"),_("Cubic Root","z^(1/3) + c"),_("Complex Exponentiation","z^c",{args:{z:y(),c:y(2.5)}}),_("²z","z^^2 + c"),_("³z","z^^3 + c"),_("⁴z","z^^4 + c"),_("Beta","beta(z, c)",{args:{z:y(),c:y(2)}}),_("Beta First derivative","beta'(z, c)",{args:{z:y(),c:y(2)}}),_("Gamma","gamma(z) + c"),_("Gamma First derivative","gamma'(z) + c"),_("Eta","eta(z) + c"),_("Zeta","zeta(z) + c"),_("Zeta First derivative","zeta'(z) + c"),_("Psi (Digamma)","psi(z) + c"),_("Tania","tania(z) + c"),_("Atania","atania(z) + c"),_("Doya","doya(z) + c"),_("Filog","filog(z) + c"),_("Tet","tet(z) + c"),_("Ate","ate(z) + c"),_("Tetra","tetra(z, c)",{args:{z:y(0,-1),c:y()},args:{z:y(),c:y(2,2)}})]},{..._("Domain coloring Misc","fibonacci(z) + c"),subforms:[_("Arg","arg(z) + c"),_("Norm","norm(z) + c"),_("","z^-1 + z^-2 + z^-3 + z^-4 + z^-5 + c"),_("","z * sin(z^-1) + c"),_("","sin(z^-2) + c",{scale:y(1.5)}),_("","(z^-18 - z^-1) / (z^-1 - 1) + c"),_("","sqrt(1 - z^-2 + z^3) + c"),_("","((z - 2 - i)^2 * (z^2 - 1)) / (z^2 + 2 + i) + c"),_("","z^(2/3 + i) + c"),_("","(exp(z) - 1) / z^2 + c"),_("","cos(z) / z^2 + c"),_("","sinh(z) / z^4 + c"),_("","(1 - cos(z)) / z^2 + c"),_("","sin(z) / z + c"),_("","z / (exp(z) - 1) + c"),_("","(z - 1) cos(1 / z) + c"),_("","z / i - i / z + c"),_("","z^(4z^(3z^(2z^z))) + c"),_("Wilmshurst","im(exp(-i*PI / 4) * z^c) + i * im(exp(i * PI / 4) * (z - 1)^c)",{args:{z:y(),c:y(4)}}),_("","sum(n, 1, 20, z^n / (c - z^n))",{args:{z:y(),c:y(1)}}),_("","product(n, 1, 20, (c - z^n))",{args:{z:y(),c:y(1)}})]}]);function On({allowNull:e,name:n,label:t,value:r,onChange:i}){const l=P.useCallback(s=>{let{name:a,checked:u}=s.target,p;e?p=r===!1?!0:r?null:!1:p=u,i(a,p)},[e,i,r]),o=P.useRef(null);return P.useLayoutEffect(()=>{e&&o.current&&(r===null?o.current.indeterminate=!0:o.current.indeterminate=!1)},[r,e]),m.jsxs("label",{className:"boolean-label",children:[t,m.jsx("input",{type:"checkbox",ref:o,name:n,checked:r||!1,onChange:l})]})}function Oa({name:e,label:n,min:t=0,max:r=1/0,value:i,toggler:l,maxWidth:o=5,togglerName:s,decimal:a,onChange:u,...p}){const[v,h]=P.useState(`${i}`);P.useEffect(()=>{try{(a?!i.eq(F(v)):i!==parseFloat(v))&&(h(`${i}`),z(!0))}catch(c){console.warn(c),z(!1)}},[a,i]);const[x,z]=P.useState(!0),g=P.useCallback(c=>{if(h(c),!c||!c.match(/^\s*-?\s*(\d+(\.\d*)?|\.\d+)(e-?\d+)?\s*$/)){z(!1);return}const d=a?F(c):parseFloat(c);!a&&(isNaN(d)||d<t||d>r)?z(!1):(z(!0),u(e,d))},[a,r,t,e,u]),T=c=>{const d=c.target.value;g(d)},f=c=>{u(c.target.name,c.target.checked)};return m.jsxs("label",{className:`number ${x?"valid":"invalid"}`,children:[n&&m.jsx("span",{className:"number-label",children:n}),s&&m.jsx("input",{type:"checkbox",name:s,checked:l,onChange:f}),(!s||l)&&m.jsx("div",{className:"number-control",children:m.jsx("input",{type:"text",name:e,value:v,style:{width:`${v.length+.3}ch`,maxWidth:`${o}ch`},onChange:T,...p})})]})}function Fa({name:e,label:n,min:t=0,max:r=1/0,step:i=1,initial:l=y(0,0),value:o,toggler:s,togglerName:a,arg:u,varying:p=null,onChange:v,...h}){const x=d=>{v(d.target.name,d.target.checked)},z=(d,w)=>{u?v("args",{...o,[d]:w}):v(d,w)},g=()=>{p.includes(e)?v("varying",p.replace(e,"")):v("varying",p+e)},T=u?o[e]:o,f=(d,w)=>{z(e,y(w,T.im))},c=(d,w)=>{z(e,y(T.re,w))};return m.jsxs("label",{className:"complex",children:[n&&m.jsx("span",{className:"complex-label",children:n}),a&&m.jsx("input",{type:"checkbox",name:a,checked:s,onChange:x}),(!a||s)&&m.jsxs("div",{className:"complex-control",children:[m.jsx(Oa,{name:`${e}-re`,value:T.re,onChange:f,decimal:!0,...h}),m.jsx("span",{className:"complex-inner-label",children:"+"}),m.jsx(Oa,{name:`${e}-im`,value:T.im,onChange:c,decimal:!0,...h}),m.jsx("span",{className:"complex-inner-label",children:"i"}),p!==null?m.jsx("button",{type:"button",onClick:g,className:"button",children:p.includes(e)?w1:z1}):null,m.jsx("button",{type:"button",onClick:()=>z(e,l),className:"button",children:s0})]})]})}function Br({name:e,label:n,togglerName:t,toggler:r,value:i,maxWidth:l=50,onChange:o,...s}){const a=P.useCallback(()=>`${i}`,[i]),[u,p]=P.useState(a);P.useEffect(()=>{p(a()),h(!0)},[a,i]);const[v,h]=P.useState(!0),x=P.useCallback(T=>{p(T);try{const f=["z","c","Z","dz","dc","z_prime","z_1","z_1_prime","dz_1"],c=new Function(...f,`return ${on(T).toComplex()}`),d=f.map(w=>y(Math.random(),Math.random()));c(...d)}catch(f){if(f instanceof SyntaxError){console.warn("Syntax error in formula",f),h(!1);return}const c=f.toString();if(c.includes("is not a function")){const d=c.match(/(.+) is not a function/)[1].split(".").slice(-1)[0].replace("_prime","'");if(!Object.keys(wo).includes(d)){console.warn("Unknown function in formula",f),h(!1),o(e,T);return}}if(c.includes("undeclared identifier")||c.includes("is not defined")){const d=c.match(/(.+) is not defined/)[1].split(": ").slice(-1)[0];if(d.length>1&&!n0.includes(d)){console.warn("Undeclared identifier in formula",f),h(!1),o(e,T);return}}}h(!0),o(e,T)},[o,e]),z=T=>{const f=T.target.value;x(f)},g=T=>{o(T.target.name,T.target.checked)};return m.jsxs("label",{className:`complex-formula ${v?"valid":"invalid"}`,children:[n&&m.jsx("span",{className:"complex-formula-label",children:n}),t&&m.jsx("input",{type:"checkbox",name:t,checked:r,onChange:g}),(!t||r)&&m.jsx("input",{type:"text",name:e,value:u,style:{width:`${u.length+.3}ch`,maxWidth:`${l}ch`},onChange:z,...s})]})}const E1=(e,n,t,r,i)=>{let l=!0,o=0;return parseInt(r)!==parseFloat(r)?o=e===""?"":parseFloat(e):o=e===""?"":parseInt(e),l=!(o===""||isNaN(o)||o<n||o>t||i&&r%1===0&&o%r!==0||r%1!==0&&e.endsWith(".")||n<0&&e==="-0"),{valid:l,raw:e,value:o}};function q({name:e,label:n,min:t=0,max:r=1/0,step:i=1,value:l,toggler:o,maxWidth:s=5,togglerName:a,noPlusMinus:u,stepLock:p=!1,togglerOnly:v=!1,onChange:h,...x}){const z=P.useCallback(()=>`${l}`,[l]),[g,T]=P.useState(z);P.useEffect(()=>{T(z()),c(!0)},[z,l]);const[f,c]=P.useState(!0),d=P.useCallback((C,B=!1)=>{const M=E1(C,t,r,i,p);T(M.raw),c(M.valid),M.valid&&h(e,M.value)},[r,t,e,h,i]),w=P.useCallback(()=>{if(!f){d(`${t}`);return}if(g!==`${t}`){let C=parseInt(i)===parseFloat(i)?parseInt(g):parseFloat(g)+1e-9;C-=C%i,C-=i,i>0&&i<1?d(C.toFixed(i.toString().split(".")[1].length)):d(C.toString())}},[t,g,i,d,f]),E=P.useCallback(()=>{if(!f){d(`${t}`);return}if(g!==`${r}`){let C=parseInt(i)===parseFloat(i)?parseInt(g):parseFloat(g)+1e-9;C-=C%i,C+=i,i>0&&i<1?d(C.toFixed(i.toString().split(".")[1].length)):d(C.toString())}},[r,t,g,i,d,f]),N=C=>{const B=C.target.value;d(B,!0)},R=C=>{h(C.target.name,C.target.checked)};return m.jsxs("label",{className:`number ${f?"valid":"invalid"}`,children:[n||a?m.jsxs("div",{className:"number-head",children:[n&&m.jsx("span",{className:"number-label",children:n}),a&&m.jsx("input",{type:"checkbox",name:a,checked:o,onChange:R})]}):null,(!a||o)&&!v&&m.jsxs("div",{className:`number-control${u?" noplusminus":""}`,children:[m.jsx("input",{type:"text",name:e,value:g,style:{width:`${Math.max(...[i,g].map(C=>C.toString().length))+.3}ch`,maxWidth:`${s}ch`},onChange:N,...x}),!u&&m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"plusminus minus",onClick:w,tabIndex:-1,children:"−"}),m.jsx("button",{className:"plusminus plus",onClick:E,tabIndex:-1,children:"+"})]})]})]})}const le={width:300,height:150},xs=document.createElement("canvas");xs.width=le.width;xs.height=le.height;const C1={locked:!1,gl:null,env:null,queue:[],init(){this.gl=xs.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1}),this.env={vertexShader:this.gl.createShader(this.gl.VERTEX_SHADER),fragmentShader:this.gl.createShader(this.gl.FRAGMENT_SHADER),program:this.gl.createProgram()},o0(this),this.gl.attachShader(this.env.program,this.env.vertexShader),this.gl.attachShader(this.env.program,this.env.fragmentShader)},render(e){this.gl||this.init();const n={gl:this.gl,env:this.env,...Tt,...e,perturb:!1};zs(n),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.viewport(0,0,le.width,le.height),this.gl.uniform2fv(this.env.uniforms.aspect,[le.width/le.height,1/Math.max(le.width,le.height)]),this.gl.drawArrays(this.gl.TRIANGLES,0,3);const t=new Uint8Array(le.width*le.height*4);return this.gl.readPixels(0,0,le.width,le.height,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),t}},N1=P.memo(function({params:n}){const t=P.useRef();return P.useEffect(()=>{setTimeout(()=>{if(!t.current)return;const r=C1.render(n);t.current.width=le.width,t.current.height=le.height;const i=t.current.getContext("2d"),l=new ImageData(new Uint8ClampedArray(r),le.width,le.height);i.putImageData(l,0,0),i.scale(1,-1),i.translate(0,-le.height),i.drawImage(t.current,0,0)},5)},[n]),m.jsx("canvas",{ref:t,className:"preview",style:le})}),P1=e=>{const n=Object.keys(e).filter(t=>t!="z").sort();return n.length?n.length===1?n[0]:`{${n.join(", ")}}`:null};function u0({args:e}){const n=P1(e);return m.jsxs(m.Fragment,{children:["F",n?m.jsx("sub",{children:n}):null,"(z) ="]})}const ko=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(ko).join("");if(typeof e=="object"&&e)return ko(e.props.children)},Ua=(e,n)=>n==="*"?!0:typeof e=="string"?ko(e).toLowerCase().includes(n.toLowerCase()):!1,_1=P.memo(function e({name:n,index:t,params:r,search:i,subforms:l=[],sub:o=!1,shown:s,onPreset:a}){const[u,p]=P.useState(!1),[v,h]=P.useState(!0),[x,z]=P.useState(!1);return P.useEffect(()=>{x&&p(!0)},[x]),P.useEffect(()=>{if(!i){h(!0),z(!1);return}if(l.length&&l.some(({name:g})=>Ua(g,i))){h(!0),z(!0);return}if(Ua(n,i)){h(!0);return}h(!1),z(!1)},[n,i,l]),m.jsxs("div",{style:{display:v?"block":"none"},children:[m.jsx("div",{className:`preset${o?" sub":""}`,onClick:()=>a(r,t),children:m.jsxs("div",{className:`preset-header preset-name-${l.length?"button":"only"}`,children:[l.length?m.jsx("button",{className:`preset-toggle ${x?"open":"closed"}`,onClick:g=>{g.stopPropagation(),z(!x)},children:x?"-":"+"}):null,m.jsxs("div",{className:"preset-content-preview",children:[m.jsxs("div",{className:"preset-content",children:[m.jsx("span",{className:"preset-name",children:n}),m.jsxs("code",{className:"preset-formula",children:[m.jsx("span",{className:"preset-assignment",children:m.jsx(u0,{args:r.args})}),r.f]}),m.jsxs("code",{className:"preset-derivative_z",children:[m.jsx("span",{className:"preset-assignment",children:"dF(z, z', c)/dz = "}),r.f_prime_z]}),m.jsxs("code",{className:"preset-derivative_c",children:[m.jsx("span",{className:"preset-assignment",children:"dF(z, z', c)/dc = "}),r.f_prime_c]})]}),s?m.jsx(N1,{params:r}):null]})]})}),m.jsx("div",{className:"subforms",style:{display:x?"block":"none"},children:l.map((g,T)=>m.jsx(e,{...g,sub:!0,search:i,shown:s&&u,onPreset:a},T))})]})});function T1({open:e,onPreset:n,onExportImage:t,closePresets:r}){const[i,l]=P.useState(!1),[o,s]=P.useState(""),[a,u]=P.useState(""),p=P.useRef();P.useEffect(()=>{e&&(l(!0),p.current.focus())},[e]);const v=P.useCallback(h=>{u(h.target.value),t0(s(h.target.value),50)},[]);return m.jsxs("div",{style:{display:e?"block":"none"},children:[m.jsx("div",{className:"presets-overlay",onClick:r}),m.jsx("div",{className:"presets",children:m.jsxs("div",{className:"presets-modal",children:[m.jsxs("div",{className:"presets-header",children:[m.jsxs("div",{className:"presets-search",children:[m.jsx("input",{type:"text",placeholder:"Search",ref:p,value:a,onChange:v}),m.jsx("button",{className:"presets-clear",onClick:()=>{s(""),u("")},children:s0})]}),m.jsxs("div",{className:"presets-actions",children:[m.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:p1}),m.jsx("button",{className:"presets-action",onClick:t,children:h1}),m.jsx("button",{className:"presets-action",onClick:r,children:m1})]})]}),m.jsx("div",{className:"presets-list",children:gn.map(({type:h,content:x,name:z,params:g,subforms:T},f)=>m.jsx(P.Fragment,{children:h==="title"?m.jsx("h2",{children:x}):h==="group"?m.jsx("h4",{children:x}):m.jsx(_1,{name:z,index:f,params:g,search:o,shown:i,subforms:T,onPreset:n})},f))})]})})]})}function Ga({name:e,value:n,options:t,label:r,onChange:i,...l}){const o=P.useCallback(s=>{const{value:a}=s.target;i(e,a)},[e,i]);return m.jsxs("label",{className:"select-label",children:[r,m.jsx("select",{name:e,value:n,className:"select",onChange:o,children:t.map(s=>m.jsx("option",{value:s,children:s.replace(/_/g," ").replace(/./,a=>a.toUpperCase())},s))})]})}function I1(){return new Promise(e=>{setTimeout(e,100)})}const R1=(e,n,t,r,i,l,o,s=0)=>{const{gl:a}=e,u={left:0,right:0,top:0,bottom:0};u.left=Math.min(s,r),u.top=Math.min(s,i),u.right=Math.min(s,n-r-l),u.bottom=Math.min(s,t-i-o),Qn(e,{height:o+u.top+u.bottom,width:l+u.left+u.right,x:r-u.left,y:i-u.top,fullWidth:n,fullHeight:t});const p=new Uint8ClampedArray(l*o*4);return a.bindFramebuffer(a.FRAMEBUFFER,null),a.readPixels(u.left,u.bottom,l,o,a.RGBA,a.UNSIGNED_BYTE,p),new ImageData(p,l,o)},j1=async(e,n,t,r,i,l,o,s=0)=>{const a=Math.ceil(n/r)*Math.ceil(t/i);let u=0;for(let p=0;p<t;p+=i){const v=Math.min(i,t-p);for(let h=0;h<n;h+=r){const x=Math.min(r,n-h),z=R1(e,n,t,h,p,x,v,s);if(!z)return;o.putImageData(z,h,p),l.innerHTML=`${(++u/a*100).toFixed(0)}%`,await I1()}}};async function L1(e,n,t){const o=document.createElement("div");o.className="export-progress",document.body.appendChild(o);const s=document.createElement("canvas");s.width=n,s.height=t;const a=s.getContext("2d");try{await j1(e,n,t,100,100,o,a,0)}finally{document.body.removeChild(o)}return ws(e),Qn(e),s.toDataURL("image/png")}const D1=()=>{try{return localStorage.getItem("showUI")||"simple"}catch(e){return console.error(e),"simple"}};function M1({runtime:e,params:n,setRuntime:t,updateParams:r}){const[i,l]=P.useState(D1),[o,s]=P.useState(!1),[a,u]=P.useState(0),[p,v]=P.useState(!1),h=P.useCallback(()=>{r({animate:!1}),s(!0)},[r]),x=P.useCallback(()=>{s(!1)},[]),z=P.useCallback((w,E)=>{r(w,!0),u(E),x()},[r,x]),g=P.useCallback((w,E)=>{r({[w]:E})},[r]),T=P.useCallback(()=>l(w=>{const E={simple:"advanced",advanced:"full",full:"empty",empty:"simple"}[w];try{localStorage.setItem("showUI",E)}catch(N){console.error(N)}return E}),[]),f=P.useCallback(()=>{v(w=>!w)},[]);P.useEffect(()=>{const w=E=>{if(E.target.tagName!=="INPUT"){if(E.key==="ArrowLeft"&&E.ctrlKey&&a>0){let N=a-1;for(;gn[N].type;){if(N<2)return;N--}z(gn[N].params,N)}else if(E.key==="ArrowRight"&&E.ctrlKey&&a<gn.length-1){let N=a+1;for(;gn[N].type;){if(N>gn.length-2)return;N++}z(gn[N].params,N)}}};return window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}},[z,a]);const c=P.useCallback(async()=>{x();const w=window.prompt("Select image resolution","500x500");if(!w||!w.includes("x")){console.error("Invalid resolution");return}const[E,N]=w.split("x").map(C=>parseInt(C));if(isNaN(E)||isNaN(N)){console.error("Invalid resolution");return}const R=await L1(e,E,N);if(R){const C=document.createElement("a");document.body.appendChild(C),C.style.display="none",C.href=R,C.download=`${document.title}-${E}x${N}`,C.click()}},[x,e]),d=Object.keys(n.args);return m.jsxs(m.Fragment,{children:[m.jsx(T1,{open:o,onPreset:z,onExportImage:c,closePresets:x}),m.jsxs("main",{className:"ui"+(p?" readable ":"")+(e.error?" error":""),title:e.error,children:[m.jsxs("div",{className:"ui-row ui-row-top",children:[m.jsx("aside",{className:"controls",children:m.jsxs("div",{className:"subcontrols",children:[m.jsx("button",{className:"button",onClick:T,children:y1}),["advanced","full"].includes(i)?m.jsx("button",{className:"button",onClick:f,children:p?x1:S1}):null,["simple","advanced","full"].includes(i)?m.jsx("button",{className:"button",onClick:()=>r({animate:!n.animate}),children:n.animate?g1:v1}):null]})}),["simple","advanced","full"].includes(i)?m.jsxs("aside",{className:"formula",children:[m.jsx(Br,{label:m.jsx(u0,{args:n.args}),name:"f",value:n.f,onChange:g}),["advanced","full"].includes(i)&&n.useDerivative?m.jsx(Br,{label:"dF(z, z', c)/dz =",name:"f_prime_z",value:e.f_prime_z,onChange:g}):null,["advanced","full"].includes(i)&&n.useDerivative?m.jsx(Br,{label:"dF(z, z', c)/dc =",name:"f_prime_c",value:e.f_prime_c,onChange:g}):null,["advanced","full"].includes(i)&&e.perturb?m.jsx(Br,{label:"F(Z, dz, dc) =",name:"f_perturb",value:n.f_perturb,onChange:g}):null]}):null]}),m.jsxs("div",{className:"ui-row ui-row-middle",children:[["simple","advanced","full"].includes(i)?m.jsxs("aside",{className:"view",children:[m.jsx(Ga,{label:"Palette",name:"palette",value:n.palette,options:r0,onChange:g}),n.convergent||n.divergent?m.jsx(Ga,{label:"Smoothing",name:"smoothing",value:n.smoothing,options:i0,onChange:g}):null,["full"].includes(i)?m.jsx(q,{name:"offset",label:"Offset",min:0,step:10,value:n.offset,onChange:g}):null,["full"].includes(i)?m.jsx(q,{name:"velocity",label:"Velocity",min:0,step:10,value:n.velocity,onChange:g}):null,["full"].includes(i)?m.jsx(q,{name:"hue",label:"Hue",min:0,max:360,step:10,value:n.hue,onChange:g}):null,["full"].includes(i)?m.jsx(q,{name:"saturation",label:"Saturation",min:0,step:10,value:n.saturation,onChange:g}):null,["full"].includes(i)?m.jsx(q,{name:"lightness",label:"Lightness",min:0,step:10,value:n.lightness,onChange:g}):null,["advanced","full"].includes(i)&&n.animate?m.jsx(q,{name:"speed",label:"Speed",min:0,value:n.speed,onChange:g}):null,m.jsx(q,{name:"supersampling",label:"Supersampling",min:0,step:.1,value:n.supersampling,onChange:g})]}):null,["simple","advanced","full"].includes(i)?m.jsxs("aside",{className:"params",children:[m.jsx(q,{name:"iterations",label:"Iterations",min:0,step:1,value:n.iterations,onChange:g}),["advanced","full"].includes(i)&&(n.convergent||n.divergent)?m.jsx(On,{className:"button",label:"Roots",name:"useRoots",value:n.useRoots,onChange:g}):null,["advanced","full"].includes(i)?m.jsx(q,{name:"bailin",label:"Bailin",min:-1/0,step:.1,value:n.bailin,togglerName:"convergent",toggler:n.convergent,onChange:g}):null,["advanced","full"].includes(i)?m.jsx(q,{name:"bailout",label:"Bailout",min:-1/0,step:.1,value:n.bailout,togglerName:"divergent",toggler:n.divergent,onChange:g}):null,n.convergent||n.divergent?m.jsxs(m.Fragment,{children:[["advanced","full"].includes(i)?m.jsx(q,{name:"derivative",label:"Derivative",min:0,value:n.derivative,togglerName:"useDerivative",toggler:n.useDerivative,onChange:g}):null,["advanced","full"].includes(i)&&n.useDerivative?m.jsx(On,{label:"Derivative",className:"button",name:"showDerivative",value:n.showDerivative,onChange:g}):null,i==="full"?m.jsx(On,{label:"Perturbation",className:"button",name:"usePerturbation",allowNull:!0,value:n.usePerturbation,onChange:g}):null]}):m.jsxs(m.Fragment,{children:[["full"].includes(i)?m.jsx(On,{name:"scaled",label:"Scaled",value:n.scaled,onChange:g}):null,["advanced","full"].includes(i)?m.jsx(q,{name:"gridScale",label:"Grid",min:0,value:n.gridScale,togglerName:"showGrid",toggler:n.showGrid,togglerOnly:i!=="full",onChange:g}):null,["full"].includes(i)&&n.showGrid?m.jsx(q,{name:"gridWidth",label:"Grid Width",step:.1,value:n.gridWidth,onChange:g}):null,["full"].includes(i)&&n.showGrid?m.jsx(On,{name:"gridLog",label:"Grid Log",value:n.gridLog,togglerOnly:i!=="full",onChange:g}):null,["advanced","full"].includes(i)?m.jsx(q,{label:"Norm Grid",step:.1,name:"normGridWidth",value:n.normGridWidth,togglerName:"showNormGrid",toggler:n.showNormGrid,togglerOnly:i!=="full",onChange:g}):null,["advanced","full"].includes(i)?m.jsx(q,{label:"Norm Shade",className:"button",name:"normShadeValue",value:n.normShadeValue,togglerName:"normShade",toggler:n.normShade,togglerOnly:i!=="full",onChange:g}):null,["advanced","full"].includes(i)&&(n.showNormGrid||n.normShade)?m.jsx(q,{name:"normGridScale",label:"Norm Grid Scale",min:0,value:n.normGridScale,onChange:g}):null,["advanced","full"].includes(i)&&(n.showNormGrid||n.normShade)?m.jsx(On,{name:"normGridLog",label:"Norm Grid Log",value:n.normGridLog,onChange:g}):null,["advanced","full"].includes(i)?m.jsx(q,{label:"Arg Grid",step:.1,name:"argGridWidth",value:n.argGridWidth,togglerName:"showArgGrid",toggler:n.showArgGrid,togglerOnly:i!=="full",onChange:g}):null,["advanced","full"].includes(i)?m.jsx(q,{label:"Arg Shade",className:"button",name:"argShadeValue",value:n.argShadeValue,togglerName:"argShade",toggler:n.argShade,togglerOnly:i!=="full",onChange:g}):null,["advanced","full"].includes(i)&&(n.showArgGrid||n.argShade)?m.jsx(q,{name:"argGridScale",label:"Arg Grid Scale",min:0,value:n.argGridScale,onChange:g}):null,["advanced","full"].includes(i)&&(n.showArgGrid||n.argShade)?m.jsx(On,{name:"argGridLog",label:"Arg Grid Log",value:n.argGridLog,onChange:g}):null,["advanced","full"].includes(i)?m.jsx(q,{label:"Zeroes",className:"button",name:"zeroes",min:-1/0,value:n.zeroes,togglerName:"showZeroes",toggler:n.showZeroes,togglerOnly:i!=="full",onChange:g}):null,["advanced","full"].includes(i)?m.jsx(q,{label:"Poles",className:"button",name:"poles",min:-1/0,value:n.poles,togglerName:"showPoles",toggler:n.showPoles,togglerOnly:i!=="full",onChange:g}):null,["advanced","full"].includes(i)?m.jsx(q,{name:"polya",label:"Polya Plot",min:0,value:n.polya,togglerName:"showPolya",toggler:n.showPolya,togglerOnly:i!=="full",onChange:g}):null,["full"].includes(i)&&n.showPolya?m.jsx(q,{name:"polyaLightness",label:"Polya Lightness",min:0,step:10,togglerName:"polyaColor",toggler:n.polyaColor,value:n.polyaLightness,onChange:g}):null]})]}):null]}),m.jsxs("div",{className:"ui-row ui-row-bottom",children:[["simple","advanced","full"].includes(i)?m.jsx("button",{className:"preset-button button",onClick:h,title:"Presets",children:d1}):null,["advanced","full"].includes(i)&&m.jsxs("aside",{className:"bounds",children:[d.sort().reverse().map(w=>m.jsx(Fa,{name:w,label:w,maxWidth:null,value:n.args,arg:!0,varying:n.varying,onChange:g},w)),m.jsx(Fa,{name:"scale",label:"Scale",maxWidth:null,initial:y(1,0),value:n.scale,onChange:g})]}),["simple","advanced","full"].includes(i)?m.jsxs("button",{className:`space-button button${e.processing?" processing":""}`,onClick:()=>r({move:d[(d.indexOf(n.move)+1)%d.length]||"c"}),children:["𝚫",n.move]}):null]})]})]})}const _i=(e,n=[],t)=>{const r={...e},i=[];if(Object.entries(r).forEach(([l,o])=>{typeof Tt[l]=="number"?(o===""||isNaN(o))&&(delete r[l],i.push(l)):Array.isArray(Tt[l])&&(Array.isArray(o[0])?o.find(s=>s.find(a=>o===""||isNaN(a)))&&(delete r[l],i.push(l)):o.find(s=>o===""||isNaN(s))&&(delete r[l],i.push(l)))}),n.includes("f")){const l=mt(on(r.f)).filter(s=>s.length===1);l.includes("z")||l.push("z");const o=Object.keys(r.args);if(tr(l,o)||(r.args=l.reduce((s,a)=>(s[a]=r.args[a]||y(1),s),{})),!n.includes("f_prime_z")||r.f_prime_z===null)try{r.f_prime_z=wr(r.f,["z","z_1"]).toString()}catch(s){i.push("f_prime_z"),console.warn(s)}if(!n.includes("f_prime_c")||r.f_prime_c===null)try{r.f_prime_c=wr(r.f,["z","z_1"],["c"]).toString()}catch(s){i.push("f_prime_c"),console.warn(s)}}return(n.includes("convergent")||n.includes("divergent"))&&!r.convergent&&!r.divergent&&(r.useDerivative=!1,r.usePerturbation=!1),r.args.z||(r.args.z=y()),{params:r,badParams:i}};function A1({params:e,updateParams:n}){const[t,r]=P.useState({...e,perturb:!1,timeref:0}),[i,l]=P.useState(!1);return P.useEffect(()=>{if(!t.gl&&t.error)return;const o=a=>{console.error("WebGL context lost",a),r(u=>({...u,gl:null,error:new Error("WebGL context lost")})),a.preventDefault()},s=()=>{console.warn("WebGL context restored"),r(a=>({...a,...Ma(a,o,s),error:null}))};r(a=>{try{return a.gl?a:Ma(a,o,s)}catch(u){return console.error(u),{...a,error:u}}})},[t.gl,t.error]),P.useEffect(()=>{r(o=>({...o,..._i(e).params}))},[e]),m.jsxs(m.Fragment,{children:[t.error?m.jsxs("aside",{className:"global-error",children:[m.jsxs("div",{children:[t.error.toString()," ",m.jsxs("button",{onClick:()=>l(o=>!o),children:[i?"Hide":"Show"," stack"]})]}),t.error.stack&&i?m.jsx("pre",{children:t.error.stack}):null]}):null,t.gl?m.jsxs(m.Fragment,{children:[m.jsx(M1,{runtime:t,params:e,setRuntime:r,updateParams:n}),m.jsx(f1,{runtime:t,setRuntime:r,updateParams:n})]}):null]})}const $1=(e,n)=>n instanceof Ke?n.toString():n,O1=(e,n)=>typeof n=="string"&&Ke.isComplexString(n)?Ke.fromString(n):n,Ha=()=>{const{location:e}=window;if(e.hash)try{const t=JSON.parse(atob(e.hash.slice(1)),O1);return _i({...Tt,...t}).params}catch(t){console.warn(t),e.hash=""}const n=gn.map(t=>t.subforms?t.subforms.map(r=>r.params).concat(t.params):t.params).flat(1);return _i(n[~~(n.length*Math.random())]).params},F1=(e,n=!1)=>{const t="#"+btoa(JSON.stringify(e,$1));window.history[n?"replaceState":"pushState"](null,null,t)},U1=()=>{const[e,n]=P.useState(Ha()),t=P.useCallback(i=>{const l=Ha();l&&(Object.entries(l).forEach(([o,s])=>{Array.isArray(s)&&tr(s,e[o])&&(l[o]=e[o])}),n(l))},[e]),r=P.useCallback((i,l=!1)=>{n(o=>{if(!Object.entries(i).filter(([u,p])=>Array.isArray(p)?!tr(p,o[u]):typeof p=="object"&&p!==null?!tr(Object.entries(p),Object.entries(o[u])):o[u]!==p).length)return o;const{params:s,badParams:a}=_i(l?i:{...o,...i},l?[]:Object.keys(i));return a.length||F1(s,Object.keys(i).length===1&&i.matrix),s})},[]);return P.useEffect(()=>(window.addEventListener("popstate",t),()=>{window.removeEventListener("popstate",t)}),[t]),m.jsx(A1,{params:e,updateParams:r})};Nl.createRoot(document.getElementById("root")).render(m.jsx(U1,{}));
