(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var Hu={exports:{}},Ii={},Vu={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),f0=Symbol.for("react.portal"),d0=Symbol.for("react.fragment"),p0=Symbol.for("react.strict_mode"),h0=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),m0=Symbol.for("react.context"),g0=Symbol.for("react.forward_ref"),y0=Symbol.for("react.suspense"),z0=Symbol.for("react.memo"),w0=Symbol.for("react.lazy"),ks=Symbol.iterator;function x0(e){return e===null||typeof e!="object"?null:(e=ks&&e[ks]||e["@@iterator"],typeof e=="function"?e:null)}var Wu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bu=Object.assign,Qu={};function _t(e,n,t){this.props=e,this.context=n,this.refs=Qu,this.updater=t||Wu}_t.prototype.isReactComponent={};_t.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};_t.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zu(){}Zu.prototype=_t.prototype;function Co(e,n,t){this.props=e,this.context=n,this.refs=Qu,this.updater=t||Wu}var No=Co.prototype=new Zu;No.constructor=Co;Bu(No,_t.prototype);No.isPureReactComponent=!0;var Es=Array.isArray,Yu=Object.prototype.hasOwnProperty,_o={current:null},Xu={key:!0,ref:!0,__self:!0,__source:!0};function Ku(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Yu.call(n,r)&&!Xu.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:wr,type:e,key:l,ref:o,props:i,_owner:_o.current}}function S0(e,n){return{$$typeof:wr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Po(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function k0(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Cs=/\/+/g;function Ki(e,n){return typeof e=="object"&&e!==null&&e.key!=null?k0(""+e.key):n.toString(36)}function Br(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case wr:case f0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ki(o,0):r,Es(i)?(t="",e!=null&&(t=e.replace(Cs,"$&/")+"/"),Br(i,n,t,"",function(a){return a})):i!=null&&(Po(i)&&(i=S0(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Cs,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Es(e))for(var u=0;u<e.length;u++){l=e[u];var s=r+Ki(l,u);o+=Br(l,n,t,s,i)}else if(s=x0(e),typeof s=="function")for(e=s.call(e),u=0;!(l=e.next()).done;)l=l.value,s=r+Ki(l,u++),o+=Br(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function _r(e,n,t){if(e==null)return e;var r=[],i=0;return Br(e,r,"","",function(l){return n.call(t,l,i++)}),r}function E0(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Qr={transition:null},C0={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Qr,ReactCurrentOwner:_o};$.Children={map:_r,forEach:function(e,n,t){_r(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return _r(e,function(){n++}),n},toArray:function(e){return _r(e,function(n){return n})||[]},only:function(e){if(!Po(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=_t;$.Fragment=d0;$.Profiler=h0;$.PureComponent=Co;$.StrictMode=p0;$.Suspense=y0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0;$.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bu({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=_o.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Yu.call(n,s)&&!Xu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:wr,type:e.type,key:i,ref:l,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:m0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:v0,_context:e},e.Consumer=e};$.createElement=Ku;$.createFactory=function(e){var n=Ku.bind(null,e);return n.type=e,n};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:g0,render:e}};$.isValidElement=Po;$.lazy=function(e){return{$$typeof:w0,_payload:{_status:-1,_result:e},_init:E0}};$.memo=function(e,n){return{$$typeof:z0,type:e,compare:n===void 0?null:n}};$.startTransition=function(e){var n=Qr.transition;Qr.transition={};try{e()}finally{Qr.transition=n}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,n){return ye.current.useCallback(e,n)};$.useContext=function(e){return ye.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};$.useEffect=function(e,n){return ye.current.useEffect(e,n)};$.useId=function(){return ye.current.useId()};$.useImperativeHandle=function(e,n,t){return ye.current.useImperativeHandle(e,n,t)};$.useInsertionEffect=function(e,n){return ye.current.useInsertionEffect(e,n)};$.useLayoutEffect=function(e,n){return ye.current.useLayoutEffect(e,n)};$.useMemo=function(e,n){return ye.current.useMemo(e,n)};$.useReducer=function(e,n,t){return ye.current.useReducer(e,n,t)};$.useRef=function(e){return ye.current.useRef(e)};$.useState=function(e){return ye.current.useState(e)};$.useSyncExternalStore=function(e,n,t){return ye.current.useSyncExternalStore(e,n,t)};$.useTransition=function(){return ye.current.useTransition()};$.version="18.2.0";Vu.exports=$;var C=Vu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=C,_0=Symbol.for("react.element"),P0=Symbol.for("react.fragment"),I0=Object.prototype.hasOwnProperty,T0=N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L0={key:!0,ref:!0,__self:!0,__source:!0};function qu(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)I0.call(n,r)&&!L0.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:_0,type:e,key:l,ref:o,props:i,_owner:T0.current}}Ii.Fragment=P0;Ii.jsx=qu;Ii.jsxs=qu;Hu.exports=Ii;var h=Hu.exports,_l={},Ju={exports:{}},Le={},bu={exports:{}},ea={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(I,D){var A=I.length;I.push(D);e:for(;0<A;){var q=A-1>>>1,re=I[q];if(0<i(re,D))I[q]=D,I[A]=re,A=q;else break e}}function t(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var D=I[0],A=I.pop();if(A!==D){I[0]=A;e:for(var q=0,re=I.length,Cr=re>>>1;q<Cr;){var Mn=2*(q+1)-1,Xi=I[Mn],An=Mn+1,Nr=I[An];if(0>i(Xi,A))An<re&&0>i(Nr,Xi)?(I[q]=Nr,I[An]=A,q=An):(I[q]=Xi,I[Mn]=A,q=Mn);else if(An<re&&0>i(Nr,A))I[q]=Nr,I[An]=A,q=An;else break e}}return D}function i(I,D){var A=I.sortIndex-D.sortIndex;return A!==0?A:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],a=[],v=1,m=null,p=3,g=!1,y=!1,z=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(I){for(var D=t(a);D!==null;){if(D.callback===null)r(a);else if(D.startTime<=I)r(a),D.sortIndex=D.expirationTime,n(s,D);else break;D=t(a)}}function x(I){if(z=!1,d(I),!y)if(t(s)!==null)y=!0,Zi(N);else{var D=t(a);D!==null&&Yi(x,D.startTime-I)}}function N(I,D){y=!1,z&&(z=!1,f(E),E=-1),g=!0;var A=p;try{for(d(D),m=t(s);m!==null&&(!(m.expirationTime>D)||I&&!Ue());){var q=m.callback;if(typeof q=="function"){m.callback=null,p=m.priorityLevel;var re=q(m.expirationTime<=D);D=e.unstable_now(),typeof re=="function"?m.callback=re:m===t(s)&&r(s),d(D)}else r(s);m=t(s)}if(m!==null)var Cr=!0;else{var Mn=t(a);Mn!==null&&Yi(x,Mn.startTime-D),Cr=!1}return Cr}finally{m=null,p=A,g=!1}}var L=!1,j=null,E=-1,W=5,M=-1;function Ue(){return!(e.unstable_now()-M<W)}function Tt(){if(j!==null){var I=e.unstable_now();M=I;var D=!0;try{D=j(!0,I)}finally{D?Lt():(L=!1,j=null)}}else L=!1}var Lt;if(typeof c=="function")Lt=function(){c(Tt)};else if(typeof MessageChannel<"u"){var Ss=new MessageChannel,c0=Ss.port2;Ss.port1.onmessage=Tt,Lt=function(){c0.postMessage(null)}}else Lt=function(){_(Tt,0)};function Zi(I){j=I,L||(L=!0,Lt())}function Yi(I,D){E=_(function(){I(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Zi(N))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var A=p;p=D;try{return I()}finally{p=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var A=p;p=I;try{return D()}finally{p=A}},e.unstable_scheduleCallback=function(I,D,A){var q=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?q+A:q):A=q,I){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=A+re,I={id:v++,callback:D,priorityLevel:I,startTime:A,expirationTime:re,sortIndex:-1},A>q?(I.sortIndex=A,n(a,I),t(s)===null&&I===t(a)&&(z?(f(E),E=-1):z=!0,Yi(x,A-q))):(I.sortIndex=re,n(s,I),y||g||(y=!0,Zi(N))),I},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(I){var D=p;return function(){var A=p;p=D;try{return I.apply(this,arguments)}finally{p=A}}}})(ea);bu.exports=ea;var j0=bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=C,Te=j0;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ta=new Set,tr={};function Kn(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(tr[e]=n,e=0;e<n.length;e++)ta.add(n[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pl=Object.prototype.hasOwnProperty,R0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ns={},_s={};function D0(e){return Pl.call(_s,e)?!0:Pl.call(Ns,e)?!1:R0.test(e)?_s[e]=!0:(Ns[e]=!0,!1)}function M0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A0(e,n,t,r){if(n===null||typeof n>"u"||M0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ze(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new ze(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Io=/[\-:]([a-z])/g;function To(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Io,To);ce[n]=new ze(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Io,To);ce[n]=new ze(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Io,To);ce[n]=new ze(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lo(e,n,t,r){var i=ce.hasOwnProperty(n)?ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(A0(n,t,i,r)&&(t=null),r||i===null?D0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var fn=na.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pr=Symbol.for("react.element"),nt=Symbol.for("react.portal"),tt=Symbol.for("react.fragment"),jo=Symbol.for("react.strict_mode"),Il=Symbol.for("react.profiler"),ra=Symbol.for("react.provider"),ia=Symbol.for("react.context"),Ro=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),Do=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),la=Symbol.for("react.offscreen"),Ps=Symbol.iterator;function jt(e){return e===null||typeof e!="object"?null:(e=Ps&&e[Ps]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,qi;function Gt(e){if(qi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);qi=n&&n[1]||""}return`
`+qi+e}var Ji=!1;function bi(e,n){if(!e||Ji)return"";Ji=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{Ji=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Gt(e):""}function $0(e){switch(e.tag){case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 2:case 15:return e=bi(e.type,!1),e;case 11:return e=bi(e.type.render,!1),e;case 1:return e=bi(e.type,!0),e;default:return""}}function jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tt:return"Fragment";case nt:return"Portal";case Il:return"Profiler";case jo:return"StrictMode";case Tl:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ia:return(e.displayName||"Context")+".Consumer";case ra:return(e._context.displayName||"Context")+".Provider";case Ro:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Do:return n=e.displayName||null,n!==null?n:jl(e.type)||"Memo";case hn:n=e._payload,e=e._init;try{return jl(e(n))}catch{}}return null}function O0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jl(n);case 8:return n===jo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function F0(e){var n=oa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ir(e){e._valueTracker||(e._valueTracker=F0(e))}function sa(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=oa(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,n){var t=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Is(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Tn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ua(e,n){n=n.checked,n!=null&&Lo(e,"checked",n,!1)}function Dl(e,n){ua(e,n);var t=Tn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ml(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ml(e,n.type,Tn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ts(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ml(e,n,t){(n!=="number"||ii(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ht=Array.isArray;function pt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Tn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Al(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ls(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Ht(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Tn(t)}}function aa(e,n){var t=Tn(n.value),r=Tn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function js(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ca(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $l(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ca(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,fa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function rr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U0=["Webkit","ms","Moz","O"];Object.keys(Qt).forEach(function(e){U0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Qt[n]=Qt[e]})});function da(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Qt.hasOwnProperty(e)&&Qt[e]?(""+n).trim():n+"px"}function pa(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=da(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var G0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,n){if(n){if(G0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Fl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function Mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,ht=null,vt=null;function Rs(e){if(e=kr(e)){if(typeof Gl!="function")throw Error(S(280));var n=e.stateNode;n&&(n=Di(n),Gl(e.stateNode,e.type,n))}}function ha(e){ht?vt?vt.push(e):vt=[e]:ht=e}function va(){if(ht){var e=ht,n=vt;if(vt=ht=null,Rs(e),n)for(e=0;e<n.length;e++)Rs(n[e])}}function ma(e,n){return e(n)}function ga(){}var el=!1;function ya(e,n,t){if(el)return e(n,t);el=!0;try{return ma(e,n,t)}finally{el=!1,(ht!==null||vt!==null)&&(ga(),va())}}function ir(e,n){var t=e.stateNode;if(t===null)return null;var r=Di(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Hl=!1;if(sn)try{var Rt={};Object.defineProperty(Rt,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",Rt,Rt),window.removeEventListener("test",Rt,Rt)}catch{Hl=!1}function H0(e,n,t,r,i,l,o,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(v){this.onError(v)}}var Zt=!1,li=null,oi=!1,Vl=null,V0={onError:function(e){Zt=!0,li=e}};function W0(e,n,t,r,i,l,o,u,s){Zt=!1,li=null,H0.apply(V0,arguments)}function B0(e,n,t,r,i,l,o,u,s){if(W0.apply(this,arguments),Zt){if(Zt){var a=li;Zt=!1,li=null}else throw Error(S(198));oi||(oi=!0,Vl=a)}}function qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function za(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ds(e){if(qn(e)!==e)throw Error(S(188))}function Q0(e){var n=e.alternate;if(!n){if(n=qn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Ds(i),e;if(l===r)return Ds(i),n;l=l.sibling}throw Error(S(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function wa(e){return e=Q0(e),e!==null?xa(e):null}function xa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xa(e);if(n!==null)return n;e=e.sibling}return null}var Sa=Te.unstable_scheduleCallback,Ms=Te.unstable_cancelCallback,Z0=Te.unstable_shouldYield,Y0=Te.unstable_requestPaint,b=Te.unstable_now,X0=Te.unstable_getCurrentPriorityLevel,Ao=Te.unstable_ImmediatePriority,ka=Te.unstable_UserBlockingPriority,si=Te.unstable_NormalPriority,K0=Te.unstable_LowPriority,Ea=Te.unstable_IdlePriority,Ti=null,Je=null;function q0(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Ti,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:ef,J0=Math.log,b0=Math.LN2;function ef(e){return e>>>=0,e===0?32:31-(J0(e)/b0|0)|0}var Lr=64,jr=4194304;function Vt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ui(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=Vt(u):(l&=o,l!==0&&(r=Vt(l)))}else o=t&~i,o!==0?r=Vt(o):l!==0&&(r=Vt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Be(n),i=1<<t,r|=e[t],n&=~i;return r}function nf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Be(l),u=1<<o,s=i[o];s===-1?(!(u&t)||u&r)&&(i[o]=nf(u,n)):s<=n&&(e.expiredLanes|=u),l&=~u}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ca(){var e=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),e}function nl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function xr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Be(n),e[n]=t}function rf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Be(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function $o(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Be(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var U=0;function Na(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _a,Oo,Pa,Ia,Ta,Bl=!1,Rr=[],Sn=null,kn=null,En=null,lr=new Map,or=new Map,gn=[],lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function As(e,n){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":lr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(n.pointerId)}}function Dt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=kr(n),n!==null&&Oo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function of(e,n,t,r,i){switch(n){case"focusin":return Sn=Dt(Sn,e,n,t,r,i),!0;case"dragenter":return kn=Dt(kn,e,n,t,r,i),!0;case"mouseover":return En=Dt(En,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return lr.set(l,Dt(lr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,or.set(l,Dt(or.get(l)||null,e,n,t,r,i)),!0}return!1}function La(e){var n=Un(e.target);if(n!==null){var t=qn(n);if(t!==null){if(n=t.tag,n===13){if(n=za(t),n!==null){e.blockedOn=n,Ta(e.priority,function(){Pa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ql(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ul=r,t.target.dispatchEvent(r),Ul=null}else return n=kr(t),n!==null&&Oo(n),e.blockedOn=t,!1;n.shift()}return!0}function $s(e,n,t){Zr(e)&&t.delete(n)}function sf(){Bl=!1,Sn!==null&&Zr(Sn)&&(Sn=null),kn!==null&&Zr(kn)&&(kn=null),En!==null&&Zr(En)&&(En=null),lr.forEach($s),or.forEach($s)}function Mt(e,n){e.blockedOn===n&&(e.blockedOn=null,Bl||(Bl=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,sf)))}function sr(e){function n(i){return Mt(i,e)}if(0<Rr.length){Mt(Rr[0],e);for(var t=1;t<Rr.length;t++){var r=Rr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&Mt(Sn,e),kn!==null&&Mt(kn,e),En!==null&&Mt(En,e),lr.forEach(n),or.forEach(n),t=0;t<gn.length;t++)r=gn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(t=gn[0],t.blockedOn===null);)La(t),t.blockedOn===null&&gn.shift()}var mt=fn.ReactCurrentBatchConfig,ai=!0;function uf(e,n,t,r){var i=U,l=mt.transition;mt.transition=null;try{U=1,Fo(e,n,t,r)}finally{U=i,mt.transition=l}}function af(e,n,t,r){var i=U,l=mt.transition;mt.transition=null;try{U=4,Fo(e,n,t,r)}finally{U=i,mt.transition=l}}function Fo(e,n,t,r){if(ai){var i=Ql(e,n,t,r);if(i===null)fl(e,n,r,ci,t),As(e,r);else if(of(i,e,n,t,r))r.stopPropagation();else if(As(e,r),n&4&&-1<lf.indexOf(e)){for(;i!==null;){var l=kr(i);if(l!==null&&_a(l),l=Ql(e,n,t,r),l===null&&fl(e,n,r,ci,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else fl(e,n,r,null,t)}}var ci=null;function Ql(e,n,t,r){if(ci=null,e=Mo(r),e=Un(e),e!==null)if(n=qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=za(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ci=e,null}function ja(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X0()){case Ao:return 1;case ka:return 4;case si:case K0:return 16;case Ea:return 536870912;default:return 16}default:return 16}}var zn=null,Uo=null,Yr=null;function Ra(){if(Yr)return Yr;var e,n=Uo,t=n.length,r,i="value"in zn?zn.value:zn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Yr=i.slice(e,1<r?1-r:void 0)}function Xr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function Os(){return!1}function je(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Dr:Os,this.isPropagationStopped=Os,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),n}var Pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=je(Pt),Sr=X({},Pt,{view:0,detail:0}),cf=je(Sr),tl,rl,At,Li=X({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==At&&(At&&e.type==="mousemove"?(tl=e.screenX-At.screenX,rl=e.screenY-At.screenY):rl=tl=0,At=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),Fs=je(Li),ff=X({},Li,{dataTransfer:0}),df=je(ff),pf=X({},Sr,{relatedTarget:0}),il=je(pf),hf=X({},Pt,{animationName:0,elapsedTime:0,pseudoElement:0}),vf=je(hf),mf=X({},Pt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=je(mf),yf=X({},Pt,{data:0}),Us=je(yf),zf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xf[e])?!!n[e]:!1}function Ho(){return Sf}var kf=X({},Sr,{key:function(e){if(e.key){var n=zf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ho,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ef=je(kf),Cf=X({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gs=je(Cf),Nf=X({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ho}),_f=je(Nf),Pf=X({},Pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),If=je(Pf),Tf=X({},Li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=je(Tf),jf=[9,13,27,32],Vo=sn&&"CompositionEvent"in window,Yt=null;sn&&"documentMode"in document&&(Yt=document.documentMode);var Rf=sn&&"TextEvent"in window&&!Yt,Da=sn&&(!Vo||Yt&&8<Yt&&11>=Yt),Hs=String.fromCharCode(32),Vs=!1;function Ma(e,n){switch(e){case"keyup":return jf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Aa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rt=!1;function Df(e,n){switch(e){case"compositionend":return Aa(n);case"keypress":return n.which!==32?null:(Vs=!0,Hs);case"textInput":return e=n.data,e===Hs&&Vs?null:e;default:return null}}function Mf(e,n){if(rt)return e==="compositionend"||!Vo&&Ma(e,n)?(e=Ra(),Yr=Uo=zn=null,rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Da&&n.locale!=="ko"?null:n.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ws(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Af[e.type]:n==="textarea"}function $a(e,n,t,r){ha(r),n=fi(n,"onChange"),0<n.length&&(t=new Go("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Xt=null,ur=null;function $f(e){Ya(e,0)}function ji(e){var n=ot(e);if(sa(n))return e}function Of(e,n){if(e==="change")return n}var Oa=!1;if(sn){var ll;if(sn){var ol="oninput"in document;if(!ol){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),ol=typeof Bs.oninput=="function"}ll=ol}else ll=!1;Oa=ll&&(!document.documentMode||9<document.documentMode)}function Qs(){Xt&&(Xt.detachEvent("onpropertychange",Fa),ur=Xt=null)}function Fa(e){if(e.propertyName==="value"&&ji(ur)){var n=[];$a(n,ur,e,Mo(e)),ya($f,n)}}function Ff(e,n,t){e==="focusin"?(Qs(),Xt=n,ur=t,Xt.attachEvent("onpropertychange",Fa)):e==="focusout"&&Qs()}function Uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(ur)}function Gf(e,n){if(e==="click")return ji(n)}function Hf(e,n){if(e==="input"||e==="change")return ji(n)}function Vf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ze=typeof Object.is=="function"?Object.is:Vf;function ar(e,n){if(Ze(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Pl.call(n,i)||!Ze(e[i],n[i]))return!1}return!0}function Zs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ys(e,n){var t=Zs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Zs(t)}}function Ua(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ua(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ga(){for(var e=window,n=ii();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ii(e.document)}return n}function Wo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Wf(e){var n=Ga(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ua(t.ownerDocument.documentElement,t)){if(r!==null&&Wo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ys(t,l);var o=Ys(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bf=sn&&"documentMode"in document&&11>=document.documentMode,it=null,Zl=null,Kt=null,Yl=!1;function Xs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yl||it==null||it!==ii(r)||(r=it,"selectionStart"in r&&Wo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kt&&ar(Kt,r)||(Kt=r,r=fi(Zl,"onSelect"),0<r.length&&(n=new Go("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=it)))}function Mr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var lt={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionend:Mr("Transition","TransitionEnd")},sl={},Ha={};sn&&(Ha=document.createElement("div").style,"AnimationEvent"in window||(delete lt.animationend.animation,delete lt.animationiteration.animation,delete lt.animationstart.animation),"TransitionEvent"in window||delete lt.transitionend.transition);function Ri(e){if(sl[e])return sl[e];if(!lt[e])return e;var n=lt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ha)return sl[e]=n[t];return e}var Va=Ri("animationend"),Wa=Ri("animationiteration"),Ba=Ri("animationstart"),Qa=Ri("transitionend"),Za=new Map,Ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,n){Za.set(e,n),Kn(n,[e])}for(var ul=0;ul<Ks.length;ul++){var al=Ks[ul],Qf=al.toLowerCase(),Zf=al[0].toUpperCase()+al.slice(1);jn(Qf,"on"+Zf)}jn(Va,"onAnimationEnd");jn(Wa,"onAnimationIteration");jn(Ba,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(Qa,"onTransitionEnd");zt("onMouseEnter",["mouseout","mouseover"]);zt("onMouseLeave",["mouseout","mouseover"]);zt("onPointerEnter",["pointerout","pointerover"]);zt("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wt));function qs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,B0(r,n,void 0,e),e.currentTarget=null}function Ya(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==l&&i.isPropagationStopped())break e;qs(i,u,a),l=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,a=u.currentTarget,u=u.listener,s!==l&&i.isPropagationStopped())break e;qs(i,u,a),l=s}}}if(oi)throw e=Vl,oi=!1,Vl=null,e}function H(e,n){var t=n[bl];t===void 0&&(t=n[bl]=new Set);var r=e+"__bubble";t.has(r)||(Xa(n,e,2,!1),t.add(r))}function cl(e,n,t){var r=0;n&&(r|=4),Xa(t,e,r,n)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[Ar]){e[Ar]=!0,ta.forEach(function(t){t!=="selectionchange"&&(Yf.has(t)||cl(t,!1,e),cl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ar]||(n[Ar]=!0,cl("selectionchange",!1,n))}}function Xa(e,n,t,r){switch(ja(n)){case 1:var i=uf;break;case 4:i=af;break;default:i=Fo}t=i.bind(null,n,t,e),i=void 0,!Hl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function fl(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;u!==null;){if(o=Un(u),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}u=u.parentNode}}r=r.return}ya(function(){var a=l,v=Mo(t),m=[];e:{var p=Za.get(e);if(p!==void 0){var g=Go,y=e;switch(e){case"keypress":if(Xr(t)===0)break e;case"keydown":case"keyup":g=Ef;break;case"focusin":y="focus",g=il;break;case"focusout":y="blur",g=il;break;case"beforeblur":case"afterblur":g=il;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=_f;break;case Va:case Wa:case Ba:g=vf;break;case Qa:g=If;break;case"scroll":g=cf;break;case"wheel":g=Lf;break;case"copy":case"cut":case"paste":g=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gs}var z=(n&4)!==0,_=!z&&e==="scroll",f=z?p!==null?p+"Capture":null:p;z=[];for(var c=a,d;c!==null;){d=c;var x=d.stateNode;if(d.tag===5&&x!==null&&(d=x,f!==null&&(x=ir(c,f),x!=null&&z.push(fr(c,x,d)))),_)break;c=c.return}0<z.length&&(p=new g(p,y,null,t,v),m.push({event:p,listeners:z}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&t!==Ul&&(y=t.relatedTarget||t.fromElement)&&(Un(y)||y[un]))break e;if((g||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=t.relatedTarget||t.toElement,g=a,y=y?Un(y):null,y!==null&&(_=qn(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=a),g!==y)){if(z=Fs,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(z=Gs,x="onPointerLeave",f="onPointerEnter",c="pointer"),_=g==null?p:ot(g),d=y==null?p:ot(y),p=new z(x,c+"leave",g,t,v),p.target=_,p.relatedTarget=d,x=null,Un(v)===a&&(z=new z(f,c+"enter",y,t,v),z.target=d,z.relatedTarget=_,x=z),_=x,g&&y)n:{for(z=g,f=y,c=0,d=z;d;d=Jn(d))c++;for(d=0,x=f;x;x=Jn(x))d++;for(;0<c-d;)z=Jn(z),c--;for(;0<d-c;)f=Jn(f),d--;for(;c--;){if(z===f||f!==null&&z===f.alternate)break n;z=Jn(z),f=Jn(f)}z=null}else z=null;g!==null&&Js(m,p,g,z,!1),y!==null&&_!==null&&Js(m,_,y,z,!0)}}e:{if(p=a?ot(a):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var N=Of;else if(Ws(p))if(Oa)N=Hf;else{N=Uf;var L=Ff}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(N=Gf);if(N&&(N=N(e,a))){$a(m,N,t,v);break e}L&&L(e,p,a),e==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&Ml(p,"number",p.value)}switch(L=a?ot(a):window,e){case"focusin":(Ws(L)||L.contentEditable==="true")&&(it=L,Zl=a,Kt=null);break;case"focusout":Kt=Zl=it=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,Xs(m,t,v);break;case"selectionchange":if(Bf)break;case"keydown":case"keyup":Xs(m,t,v)}var j;if(Vo)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else rt?Ma(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Da&&t.locale!=="ko"&&(rt||E!=="onCompositionStart"?E==="onCompositionEnd"&&rt&&(j=Ra()):(zn=v,Uo="value"in zn?zn.value:zn.textContent,rt=!0)),L=fi(a,E),0<L.length&&(E=new Us(E,e,null,t,v),m.push({event:E,listeners:L}),j?E.data=j:(j=Aa(t),j!==null&&(E.data=j)))),(j=Rf?Df(e,t):Mf(e,t))&&(a=fi(a,"onBeforeInput"),0<a.length&&(v=new Us("onBeforeInput","beforeinput",null,t,v),m.push({event:v,listeners:a}),v.data=j))}Ya(m,n)})}function fr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function fi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ir(e,t),l!=null&&r.unshift(fr(e,l,i)),l=ir(e,n),l!=null&&r.push(fr(e,l,i))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Js(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,i?(s=ir(t,l),s!=null&&o.unshift(fr(t,s,u))):i||(s=ir(t,l),s!=null&&o.push(fr(t,s,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Xf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function bs(e){return(typeof e=="string"?e:""+e).replace(Xf,`
`).replace(Kf,"")}function $r(e,n,t){if(n=bs(n),bs(e)!==n&&t)throw Error(S(425))}function di(){}var Xl=null,Kl=null;function ql(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,qf=typeof clearTimeout=="function"?clearTimeout:void 0,eu=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof eu<"u"?function(e){return eu.resolve(null).then(e).catch(bf)}:Jl;function bf(e){setTimeout(function(){throw e})}function dl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),sr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);sr(n)}function Cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var It=Math.random().toString(36).slice(2),Ke="__reactFiber$"+It,dr="__reactProps$"+It,un="__reactContainer$"+It,bl="__reactEvents$"+It,ed="__reactListeners$"+It,nd="__reactHandles$"+It;function Un(e){var n=e[Ke];if(n)return n;for(var t=e.parentNode;t;){if(n=t[un]||t[Ke]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=nu(e);e!==null;){if(t=e[Ke])return t;e=nu(e)}return n}e=t,t=e.parentNode}return null}function kr(e){return e=e[Ke]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ot(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Di(e){return e[dr]||null}var eo=[],st=-1;function Rn(e){return{current:e}}function V(e){0>st||(e.current=eo[st],eo[st]=null,st--)}function G(e,n){st++,eo[st]=e.current,e.current=n}var Ln={},he=Rn(Ln),ke=Rn(!1),Bn=Ln;function wt(e,n){var t=e.type.contextTypes;if(!t)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function pi(){V(ke),V(he)}function tu(e,n,t){if(he.current!==Ln)throw Error(S(168));G(he,n),G(ke,t)}function Ka(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(S(108,O0(e)||"Unknown",i));return X({},t,r)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,Bn=he.current,G(he,e),G(ke,ke.current),!0}function ru(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Ka(e,n,Bn),r.__reactInternalMemoizedMergedChildContext=e,V(ke),V(he),G(he,e)):V(ke),G(ke,t)}var tn=null,Mi=!1,pl=!1;function qa(e){tn===null?tn=[e]:tn.push(e)}function td(e){Mi=!0,qa(e)}function Dn(){if(!pl&&tn!==null){pl=!0;var e=0,n=U;try{var t=tn;for(U=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}tn=null,Mi=!1}catch(i){throw tn!==null&&(tn=tn.slice(e+1)),Sa(Ao,Dn),i}finally{U=n,pl=!1}}return null}var ut=[],at=0,vi=null,mi=0,De=[],Me=0,Qn=null,rn=1,ln="";function On(e,n){ut[at++]=mi,ut[at++]=vi,vi=e,mi=n}function Ja(e,n,t){De[Me++]=rn,De[Me++]=ln,De[Me++]=Qn,Qn=e;var r=rn;e=ln;var i=32-Be(r)-1;r&=~(1<<i),t+=1;var l=32-Be(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rn=1<<32-Be(n)+i|t<<i|r,ln=l+e}else rn=1<<l|t<<i|r,ln=e}function Bo(e){e.return!==null&&(On(e,1),Ja(e,1,0))}function Qo(e){for(;e===vi;)vi=ut[--at],ut[at]=null,mi=ut[--at],ut[at]=null;for(;e===Qn;)Qn=De[--Me],De[Me]=null,ln=De[--Me],De[Me]=null,rn=De[--Me],De[Me]=null}var Ie=null,Pe=null,B=!1,We=null;function ba(e,n){var t=Ae(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function iu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ie=e,Pe=Cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ie=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Qn!==null?{id:rn,overflow:ln}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ae(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ie=e,Pe=null,!0):!1;default:return!1}}function no(e){return(e.mode&1)!==0&&(e.flags&128)===0}function to(e){if(B){var n=Pe;if(n){var t=n;if(!iu(e,n)){if(no(e))throw Error(S(418));n=Cn(t.nextSibling);var r=Ie;n&&iu(e,n)?ba(r,t):(e.flags=e.flags&-4097|2,B=!1,Ie=e)}}else{if(no(e))throw Error(S(418));e.flags=e.flags&-4097|2,B=!1,Ie=e}}}function lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Or(e){if(e!==Ie)return!1;if(!B)return lu(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ql(e.type,e.memoizedProps)),n&&(n=Pe)){if(no(e))throw ec(),Error(S(418));for(;n;)ba(e,n),n=Cn(n.nextSibling)}if(lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=Cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=Ie?Cn(e.stateNode.nextSibling):null;return!0}function ec(){for(var e=Pe;e;)e=Cn(e.nextSibling)}function xt(){Pe=Ie=null,B=!1}function Zo(e){We===null?We=[e]:We.push(e)}var rd=fn.ReactCurrentBatchConfig;function He(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var gi=Rn(null),yi=null,ct=null,Yo=null;function Xo(){Yo=ct=yi=null}function Ko(e){var n=gi.current;V(gi),e._currentValue=n}function ro(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function gt(e,n){yi=e,Yo=ct=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Se=!0),e.firstContext=null)}function Oe(e){var n=e._currentValue;if(Yo!==e)if(e={context:e,memoizedValue:n,next:null},ct===null){if(yi===null)throw Error(S(308));ct=e,yi.dependencies={lanes:0,firstContext:e}}else ct=ct.next=e;return n}var Gn=null;function qo(e){Gn===null?Gn=[e]:Gn.push(e)}function nc(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,qo(n)):(t.next=i.next,i.next=t),n.interleaved=t,an(e,r)}function an(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var vn=!1;function Jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Nn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,an(e,t)}return i=r.interleaved,i===null?(n.next=n,qo(r)):(n.next=i.next,i.next=n),r.interleaved=n,an(e,t)}function Kr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,$o(e,t)}}function ou(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function zi(e,n,t,r){var i=e.updateQueue;vn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,a=s.next;s.next=null,o===null?l=a:o.next=a,o=s;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==o&&(u===null?v.firstBaseUpdate=a:u.next=a,v.lastBaseUpdate=s))}if(l!==null){var m=i.baseState;o=0,v=a=s=null,u=l;do{var p=u.lane,g=u.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,z=u;switch(p=n,g=t,z.tag){case 1:if(y=z.payload,typeof y=="function"){m=y.call(g,m,p);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=z.payload,p=typeof y=="function"?y.call(g,m,p):y,p==null)break e;m=X({},m,p);break e;case 2:vn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else g={eventTime:g,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(a=v=g,s=m):v=v.next=g,o|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(v===null&&(s=m),i.baseState=s,i.firstBaseUpdate=a,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Yn|=o,e.lanes=o,e.memoizedState=m}}function su(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var rc=new na.Component().refs;function io(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:X({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ai={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Pn(e),l=on(r,i);l.payload=n,t!=null&&(l.callback=t),n=Nn(e,l,i),n!==null&&(Qe(n,e,i,r),Kr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Pn(e),l=on(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Nn(e,l,i),n!==null&&(Qe(n,e,i,r),Kr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=Pn(e),i=on(t,r);i.tag=2,n!=null&&(i.callback=n),n=Nn(e,i,r),n!==null&&(Qe(n,e,r,t),Kr(n,e,r))}};function uu(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!ar(t,r)||!ar(i,l):!0}function ic(e,n,t){var r=!1,i=Ln,l=n.contextType;return typeof l=="object"&&l!==null?l=Oe(l):(i=Ee(n)?Bn:he.current,r=n.contextTypes,l=(r=r!=null)?wt(e,i):Ln),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ai,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function au(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ai.enqueueReplaceState(n,n.state,null)}function lo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=rc,Jo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Oe(l):(l=Ee(n)?Bn:he.current,i.context=wt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(io(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ai.enqueueReplaceState(i,i.state,null),zi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $t(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;u===rc&&(u=i.refs={}),o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Fr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function cu(e){var n=e._init;return n(e._payload)}function lc(e){function n(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=In(f,c),f.index=0,f.sibling=null,f}function l(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,d,x){return c===null||c.tag!==6?(c=wl(d,f.mode,x),c.return=f,c):(c=i(c,d),c.return=f,c)}function s(f,c,d,x){var N=d.type;return N===tt?v(f,c,d.props.children,x,d.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===hn&&cu(N)===c.type)?(x=i(c,d.props),x.ref=$t(f,c,d),x.return=f,x):(x=ti(d.type,d.key,d.props,null,f.mode,x),x.ref=$t(f,c,d),x.return=f,x)}function a(f,c,d,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=xl(d,f.mode,x),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function v(f,c,d,x,N){return c===null||c.tag!==7?(c=Wn(d,f.mode,x,N),c.return=f,c):(c=i(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wl(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Pr:return d=ti(c.type,c.key,c.props,null,f.mode,d),d.ref=$t(f,null,c),d.return=f,d;case nt:return c=xl(c,f.mode,d),c.return=f,c;case hn:var x=c._init;return m(f,x(c._payload),d)}if(Ht(c)||jt(c))return c=Wn(c,f.mode,d,null),c.return=f,c;Fr(f,c)}return null}function p(f,c,d,x){var N=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return N!==null?null:u(f,c,""+d,x);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Pr:return d.key===N?s(f,c,d,x):null;case nt:return d.key===N?a(f,c,d,x):null;case hn:return N=d._init,p(f,c,N(d._payload),x)}if(Ht(d)||jt(d))return N!==null?null:v(f,c,d,x,null);Fr(f,d)}return null}function g(f,c,d,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(d)||null,u(c,f,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pr:return f=f.get(x.key===null?d:x.key)||null,s(c,f,x,N);case nt:return f=f.get(x.key===null?d:x.key)||null,a(c,f,x,N);case hn:var L=x._init;return g(f,c,d,L(x._payload),N)}if(Ht(x)||jt(x))return f=f.get(d)||null,v(c,f,x,N,null);Fr(c,x)}return null}function y(f,c,d,x){for(var N=null,L=null,j=c,E=c=0,W=null;j!==null&&E<d.length;E++){j.index>E?(W=j,j=null):W=j.sibling;var M=p(f,j,d[E],x);if(M===null){j===null&&(j=W);break}e&&j&&M.alternate===null&&n(f,j),c=l(M,c,E),L===null?N=M:L.sibling=M,L=M,j=W}if(E===d.length)return t(f,j),B&&On(f,E),N;if(j===null){for(;E<d.length;E++)j=m(f,d[E],x),j!==null&&(c=l(j,c,E),L===null?N=j:L.sibling=j,L=j);return B&&On(f,E),N}for(j=r(f,j);E<d.length;E++)W=g(j,f,E,d[E],x),W!==null&&(e&&W.alternate!==null&&j.delete(W.key===null?E:W.key),c=l(W,c,E),L===null?N=W:L.sibling=W,L=W);return e&&j.forEach(function(Ue){return n(f,Ue)}),B&&On(f,E),N}function z(f,c,d,x){var N=jt(d);if(typeof N!="function")throw Error(S(150));if(d=N.call(d),d==null)throw Error(S(151));for(var L=N=null,j=c,E=c=0,W=null,M=d.next();j!==null&&!M.done;E++,M=d.next()){j.index>E?(W=j,j=null):W=j.sibling;var Ue=p(f,j,M.value,x);if(Ue===null){j===null&&(j=W);break}e&&j&&Ue.alternate===null&&n(f,j),c=l(Ue,c,E),L===null?N=Ue:L.sibling=Ue,L=Ue,j=W}if(M.done)return t(f,j),B&&On(f,E),N;if(j===null){for(;!M.done;E++,M=d.next())M=m(f,M.value,x),M!==null&&(c=l(M,c,E),L===null?N=M:L.sibling=M,L=M);return B&&On(f,E),N}for(j=r(f,j);!M.done;E++,M=d.next())M=g(j,f,E,M.value,x),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?E:M.key),c=l(M,c,E),L===null?N=M:L.sibling=M,L=M);return e&&j.forEach(function(Tt){return n(f,Tt)}),B&&On(f,E),N}function _(f,c,d,x){if(typeof d=="object"&&d!==null&&d.type===tt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Pr:e:{for(var N=d.key,L=c;L!==null;){if(L.key===N){if(N=d.type,N===tt){if(L.tag===7){t(f,L.sibling),c=i(L,d.props.children),c.return=f,f=c;break e}}else if(L.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===hn&&cu(N)===L.type){t(f,L.sibling),c=i(L,d.props),c.ref=$t(f,L,d),c.return=f,f=c;break e}t(f,L);break}else n(f,L);L=L.sibling}d.type===tt?(c=Wn(d.props.children,f.mode,x,d.key),c.return=f,f=c):(x=ti(d.type,d.key,d.props,null,f.mode,x),x.ref=$t(f,c,d),x.return=f,f=x)}return o(f);case nt:e:{for(L=d.key;c!==null;){if(c.key===L)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=xl(d,f.mode,x),c.return=f,f=c}return o(f);case hn:return L=d._init,_(f,c,L(d._payload),x)}if(Ht(d))return y(f,c,d,x);if(jt(d))return z(f,c,d,x);Fr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(f,c.sibling),c=i(c,d),c.return=f,f=c):(t(f,c),c=wl(d,f.mode,x),c.return=f,f=c),o(f)):t(f,c)}return _}var St=lc(!0),oc=lc(!1),Er={},be=Rn(Er),pr=Rn(Er),hr=Rn(Er);function Hn(e){if(e===Er)throw Error(S(174));return e}function bo(e,n){switch(G(hr,n),G(pr,e),G(be,Er),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:$l(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=$l(n,e)}V(be),G(be,n)}function kt(){V(be),V(pr),V(hr)}function sc(e){Hn(hr.current);var n=Hn(be.current),t=$l(n,e.type);n!==t&&(G(pr,e),G(be,t))}function es(e){pr.current===e&&(V(be),V(pr))}var Z=Rn(0);function wi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var hl=[];function ns(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var qr=fn.ReactCurrentDispatcher,vl=fn.ReactCurrentBatchConfig,Zn=0,Y=null,ne=null,le=null,xi=!1,qt=!1,vr=0,id=0;function fe(){throw Error(S(321))}function ts(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ze(e[t],n[t]))return!1;return!0}function rs(e,n,t,r,i,l){if(Zn=l,Y=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,qr.current=e===null||e.memoizedState===null?ud:ad,e=t(r,i),qt){l=0;do{if(qt=!1,vr=0,25<=l)throw Error(S(301));l+=1,le=ne=null,n.updateQueue=null,qr.current=cd,e=t(r,i)}while(qt)}if(qr.current=Si,n=ne!==null&&ne.next!==null,Zn=0,le=ne=Y=null,xi=!1,n)throw Error(S(300));return e}function is(){var e=vr!==0;return vr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Fe(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=le===null?Y.memoizedState:le.next;if(n!==null)le=n,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function mr(e,n){return typeof n=="function"?n(e):n}function ml(e){var n=Fe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=ne,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,s=null,a=l;do{var v=a.lane;if((Zn&v)===v)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var m={lane:v,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=m,o=r):s=s.next=m,Y.lanes|=v,Yn|=v}a=a.next}while(a!==null&&a!==l);s===null?o=r:s.next=u,Ze(r,n.memoizedState)||(Se=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,Y.lanes|=l,Yn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function gl(e){var n=Fe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ze(l,n.memoizedState)||(Se=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function uc(){}function ac(e,n){var t=Y,r=Fe(),i=n(),l=!Ze(r.memoizedState,i);if(l&&(r.memoizedState=i,Se=!0),r=r.queue,ls(dc.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||le!==null&&le.memoizedState.tag&1){if(t.flags|=2048,gr(9,fc.bind(null,t,r,i,n),void 0,null),se===null)throw Error(S(349));Zn&30||cc(t,n,i)}return i}function cc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function fc(e,n,t,r){n.value=t,n.getSnapshot=r,pc(n)&&hc(e)}function dc(e,n,t){return t(function(){pc(n)&&hc(e)})}function pc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ze(e,t)}catch{return!0}}function hc(e){var n=an(e,1);n!==null&&Qe(n,e,1,-1)}function fu(e){var n=Xe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},n.queue=e,e=e.dispatch=sd.bind(null,Y,e),[n.memoizedState,e]}function gr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function vc(){return Fe().memoizedState}function Jr(e,n,t,r){var i=Xe();Y.flags|=e,i.memoizedState=gr(1|n,t,void 0,r===void 0?null:r)}function $i(e,n,t,r){var i=Fe();r=r===void 0?null:r;var l=void 0;if(ne!==null){var o=ne.memoizedState;if(l=o.destroy,r!==null&&ts(r,o.deps)){i.memoizedState=gr(n,t,l,r);return}}Y.flags|=e,i.memoizedState=gr(1|n,t,l,r)}function du(e,n){return Jr(8390656,8,e,n)}function ls(e,n){return $i(2048,8,e,n)}function mc(e,n){return $i(4,2,e,n)}function gc(e,n){return $i(4,4,e,n)}function yc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zc(e,n,t){return t=t!=null?t.concat([e]):null,$i(4,4,yc.bind(null,n,e),t)}function os(){}function wc(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ts(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function xc(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ts(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Sc(e,n,t){return Zn&21?(Ze(t,n)||(t=Ca(),Y.lanes|=t,Yn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=t)}function ld(e,n){var t=U;U=t!==0&&4>t?t:4,e(!0);var r=vl.transition;vl.transition={};try{e(!1),n()}finally{U=t,vl.transition=r}}function kc(){return Fe().memoizedState}function od(e,n,t){var r=Pn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ec(e))Cc(n,t);else if(t=nc(e,n,t,r),t!==null){var i=ge();Qe(t,e,r,i),Nc(t,n,r)}}function sd(e,n,t){var r=Pn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))Cc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,Ze(u,o)){var s=n.interleaved;s===null?(i.next=i,qo(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=nc(e,n,i,r),t!==null&&(i=ge(),Qe(t,e,r,i),Nc(t,n,r))}}function Ec(e){var n=e.alternate;return e===Y||n!==null&&n===Y}function Cc(e,n){qt=xi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Nc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,$o(e,t)}}var Si={readContext:Oe,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},ud={readContext:Oe,useCallback:function(e,n){return Xe().memoizedState=[e,n===void 0?null:n],e},useContext:Oe,useEffect:du,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Jr(4194308,4,yc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Jr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Jr(4,2,e,n)},useMemo:function(e,n){var t=Xe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Xe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=od.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var n=Xe();return e={current:e},n.memoizedState=e},useState:fu,useDebugValue:os,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=fu(!1),n=e[0];return e=ld.bind(null,e[1]),Xe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Y,i=Xe();if(B){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),se===null)throw Error(S(349));Zn&30||cc(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,du(dc.bind(null,r,l,e),[e]),r.flags|=2048,gr(9,fc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Xe(),n=se.identifierPrefix;if(B){var t=ln,r=rn;t=(r&~(1<<32-Be(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=vr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=id++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ad={readContext:Oe,useCallback:wc,useContext:Oe,useEffect:ls,useImperativeHandle:zc,useInsertionEffect:mc,useLayoutEffect:gc,useMemo:xc,useReducer:ml,useRef:vc,useState:function(){return ml(mr)},useDebugValue:os,useDeferredValue:function(e){var n=Fe();return Sc(n,ne.memoizedState,e)},useTransition:function(){var e=ml(mr)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:uc,useSyncExternalStore:ac,useId:kc,unstable_isNewReconciler:!1},cd={readContext:Oe,useCallback:wc,useContext:Oe,useEffect:ls,useImperativeHandle:zc,useInsertionEffect:mc,useLayoutEffect:gc,useMemo:xc,useReducer:gl,useRef:vc,useState:function(){return gl(mr)},useDebugValue:os,useDeferredValue:function(e){var n=Fe();return ne===null?n.memoizedState=e:Sc(n,ne.memoizedState,e)},useTransition:function(){var e=gl(mr)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:uc,useSyncExternalStore:ac,useId:kc,unstable_isNewReconciler:!1};function Et(e,n){try{var t="",r=n;do t+=$0(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function yl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function oo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var fd=typeof WeakMap=="function"?WeakMap:Map;function _c(e,n,t){t=on(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ei||(Ei=!0,go=r),oo(e,n)},t}function Pc(e,n,t){t=on(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){oo(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){oo(e,n),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function pu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new fd;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Cd.bind(null,e,n,t),n.then(e,e))}function hu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function vu(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=on(-1,1),n.tag=2,Nn(t,n,1))),t.lanes|=1),e)}var dd=fn.ReactCurrentOwner,Se=!1;function me(e,n,t,r){n.child=e===null?oc(n,null,t,r):St(n,e.child,t,r)}function mu(e,n,t,r,i){t=t.render;var l=n.ref;return gt(n,i),r=rs(e,n,t,r,l,i),t=is(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,cn(e,n,i)):(B&&t&&Bo(n),n.flags|=1,me(e,n,r,i),n.child)}function gu(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!hs(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Ic(e,n,l,r,i)):(e=ti(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:ar,t(o,r)&&e.ref===n.ref)return cn(e,n,i)}return n.flags|=1,e=In(l,r),e.ref=n.ref,e.return=n,n.child=e}function Ic(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(ar(l,r)&&e.ref===n.ref)if(Se=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return n.lanes=e.lanes,cn(e,n,i)}return so(e,n,t,r,i)}function Tc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(dt,_e),_e|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,G(dt,_e),_e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,G(dt,_e),_e|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,G(dt,_e),_e|=r;return me(e,n,i,t),n.child}function Lc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function so(e,n,t,r,i){var l=Ee(t)?Bn:he.current;return l=wt(n,l),gt(n,i),t=rs(e,n,t,r,l,i),r=is(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,cn(e,n,i)):(B&&r&&Bo(n),n.flags|=1,me(e,n,t,i),n.child)}function yu(e,n,t,r,i){if(Ee(t)){var l=!0;hi(n)}else l=!1;if(gt(n,i),n.stateNode===null)br(e,n),ic(n,t,r),lo(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var s=o.context,a=t.contextType;typeof a=="object"&&a!==null?a=Oe(a):(a=Ee(t)?Bn:he.current,a=wt(n,a));var v=t.getDerivedStateFromProps,m=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==a)&&au(n,o,r,a),vn=!1;var p=n.memoizedState;o.state=p,zi(n,r,o,i),s=n.memoizedState,u!==r||p!==s||ke.current||vn?(typeof v=="function"&&(io(n,t,v,r),s=n.memoizedState),(u=vn||uu(n,t,u,r,p,s,a))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=a,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,tc(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:He(n.type,u),o.props=a,m=n.pendingProps,p=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Oe(s):(s=Ee(t)?Bn:he.current,s=wt(n,s));var g=t.getDerivedStateFromProps;(v=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||p!==s)&&au(n,o,r,s),vn=!1,p=n.memoizedState,o.state=p,zi(n,r,o,i);var y=n.memoizedState;u!==m||p!==y||ke.current||vn?(typeof g=="function"&&(io(n,t,g,r),y=n.memoizedState),(a=vn||uu(n,t,a,r,p,y,s)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=s,r=a):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return uo(e,n,t,r,l,i)}function uo(e,n,t,r,i,l){Lc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&ru(n,t,!1),cn(e,n,l);r=n.stateNode,dd.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=St(n,e.child,null,l),n.child=St(n,null,u,l)):me(e,n,u,l),n.memoizedState=r.state,i&&ru(n,t,!0),n.child}function jc(e){var n=e.stateNode;n.pendingContext?tu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&tu(e,n.context,!1),bo(e,n.containerInfo)}function zu(e,n,t,r,i){return xt(),Zo(i),n.flags|=256,me(e,n,t,r),n.child}var ao={dehydrated:null,treeContext:null,retryLane:0};function co(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rc(e,n,t){var r=n.pendingProps,i=Z.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(Z,i&1),e===null)return to(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ui(o,r,0,null),e=Wn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=co(t),n.memoizedState=ao,e):ss(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return pd(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=In(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=In(u,l):(l=Wn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?co(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=ao,r}return l=e.child,e=l.sibling,r=In(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ss(e,n){return n=Ui({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ur(e,n,t,r){return r!==null&&Zo(r),St(n,e.child,null,t),e=ss(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function pd(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=yl(Error(S(422))),Ur(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ui({mode:"visible",children:r.children},i,0,null),l=Wn(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&St(n,e.child,null,o),n.child.memoizedState=co(o),n.memoizedState=ao,l);if(!(n.mode&1))return Ur(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(S(419)),r=yl(l,r,void 0),Ur(e,n,o,r)}if(u=(o&e.childLanes)!==0,Se||u){if(r=se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,an(e,i),Qe(r,e,i,-1))}return ps(),r=yl(Error(S(421))),Ur(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Nd.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Pe=Cn(i.nextSibling),Ie=n,B=!0,We=null,e!==null&&(De[Me++]=rn,De[Me++]=ln,De[Me++]=Qn,rn=e.id,ln=e.overflow,Qn=n),n=ss(n,r.children),n.flags|=4096,n)}function wu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ro(e.return,n,t)}function zl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Dc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(me(e,n,r.children,t),r=Z.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wu(e,t,n);else if(e.tag===19)wu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(Z,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&wi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),zl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&wi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}zl(n,!0,t,null,l);break;case"together":zl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function br(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Yn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=In(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=In(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function hd(e,n,t){switch(n.tag){case 3:jc(n),xt();break;case 5:sc(n);break;case 1:Ee(n.type)&&hi(n);break;case 4:bo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;G(gi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(G(Z,Z.current&1),n.flags|=128,null):t&n.child.childLanes?Rc(e,n,t):(G(Z,Z.current&1),e=cn(e,n,t),e!==null?e.sibling:null);G(Z,Z.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Dc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Z,Z.current),r)break;return null;case 22:case 23:return n.lanes=0,Tc(e,n,t)}return cn(e,n,t)}var Mc,fo,Ac,$c;Mc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fo=function(){};Ac=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Hn(be.current);var l=null;switch(t){case"input":i=Rl(e,i),r=Rl(e,r),l=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":i=Al(e,i),r=Al(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=di)}Ol(t,r);var o;t=null;for(a in i)if(!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&i[a]!=null)if(a==="style"){var u=i[a];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(tr.hasOwnProperty(a)?l||(l=[]):(l=l||[]).push(a,null));for(a in r){var s=r[a];if(u=i!=null?i[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(l=l||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(tr.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&H("scroll",e),l||u===s||(l=[])):(l=l||[]).push(a,s))}t&&(l=l||[]).push("style",t);var a=l;(n.updateQueue=a)&&(n.flags|=4)}};$c=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ot(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function vd(e,n,t){var r=n.pendingProps;switch(Qo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return Ee(n.type)&&pi(),de(n),null;case 3:return r=n.stateNode,kt(),V(ke),V(he),ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,We!==null&&(wo(We),We=null))),fo(e,n),de(n),null;case 5:es(n);var i=Hn(hr.current);if(t=n.type,e!==null&&n.stateNode!=null)Ac(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return de(n),null}if(e=Hn(be.current),Or(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Ke]=n,r[dr]=l,e=(n.mode&1)!==0,t){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Wt.length;i++)H(Wt[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Is(r,l),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},H("invalid",r);break;case"textarea":Ls(r,l),H("invalid",r)}Ol(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&$r(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&$r(r.textContent,u,e),i=["children",""+u]):tr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&H("scroll",r)}switch(t){case"input":Ir(r),Ts(r,l,!0);break;case"textarea":Ir(r),js(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=di)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ca(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Ke]=n,e[dr]=r,Mc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Fl(t,r),t){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wt.length;i++)H(Wt[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Is(e,r),i=Rl(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ls(e,r),i=Al(e,r),H("invalid",e);break;default:i=r}Ol(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var s=u[l];l==="style"?pa(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fa(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&rr(e,s):typeof s=="number"&&rr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(tr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&H("scroll",e):s!=null&&Lo(e,l,s,o))}switch(t){case"input":Ir(e),Ts(e,r,!1);break;case"textarea":Ir(e),js(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?pt(e,!!r.multiple,l,!1):r.defaultValue!=null&&pt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=di)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)$c(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=Hn(hr.current),Hn(be.current),Or(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ke]=n,(l=r.nodeValue!==t)&&(e=Ie,e!==null))switch(e.tag){case 3:$r(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$r(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ke]=n,n.stateNode=r}return de(n),null;case 13:if(V(Z),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Pe!==null&&n.mode&1&&!(n.flags&128))ec(),xt(),n.flags|=98560,l=!1;else if(l=Or(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Ke]=n}else xt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),l=!1}else We!==null&&(wo(We),We=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Z.current&1?te===0&&(te=3):ps())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return kt(),fo(e,n),e===null&&cr(n.stateNode.containerInfo),de(n),null;case 10:return Ko(n.type._context),de(n),null;case 17:return Ee(n.type)&&pi(),de(n),null;case 19:if(V(Z),l=n.memoizedState,l===null)return de(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Ot(l,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=wi(e),o!==null){for(n.flags|=128,Ot(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return G(Z,Z.current&1|2),n.child}e=e.sibling}l.tail!==null&&b()>Ct&&(n.flags|=128,r=!0,Ot(l,!1),n.lanes=4194304)}else{if(!r)if(e=wi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ot(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!B)return de(n),null}else 2*b()-l.renderingStartTime>Ct&&t!==1073741824&&(n.flags|=128,r=!0,Ot(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=b(),n.sibling=null,t=Z.current,G(Z,r?t&1|2:t&1),n):(de(n),null);case 22:case 23:return ds(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?_e&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function md(e,n){switch(Qo(n),n.tag){case 1:return Ee(n.type)&&pi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return kt(),V(ke),V(he),ns(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return es(n),null;case 13:if(V(Z),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));xt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(Z),null;case 4:return kt(),null;case 10:return Ko(n.type._context),null;case 22:case 23:return ds(),null;case 24:return null;default:return null}}var Gr=!1,pe=!1,gd=typeof WeakSet=="function"?WeakSet:Set,P=null;function ft(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){K(e,n,r)}else t.current=null}function po(e,n,t){try{t()}catch(r){K(e,n,r)}}var xu=!1;function yd(e,n){if(Xl=ai,e=Ga(),Wo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,s=-1,a=0,v=0,m=e,p=null;n:for(;;){for(var g;m!==t||i!==0&&m.nodeType!==3||(u=o+i),m!==l||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(g=m.firstChild)!==null;)p=m,m=g;for(;;){if(m===e)break n;if(p===t&&++a===i&&(u=o),p===l&&++v===r&&(s=o),(g=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=g}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Kl={focusedElem:e,selectionRange:t},ai=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var z=y.memoizedProps,_=y.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?z:He(n.type,z),_);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){K(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return y=xu,xu=!1,y}function Jt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&po(n,t,l)}i=i.next}while(i!==r)}}function Oi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ho(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Oc(e){var n=e.alternate;n!==null&&(e.alternate=null,Oc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ke],delete n[dr],delete n[bl],delete n[ed],delete n[nd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fc(e){return e.tag===5||e.tag===3||e.tag===4}function Su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=di));else if(r!==4&&(e=e.child,e!==null))for(vo(e,n,t),e=e.sibling;e!==null;)vo(e,n,t),e=e.sibling}function mo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mo(e,n,t),e=e.sibling;e!==null;)mo(e,n,t),e=e.sibling}var ue=null,Ve=!1;function dn(e,n,t){for(t=t.child;t!==null;)Uc(e,n,t),t=t.sibling}function Uc(e,n,t){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Ti,t)}catch{}switch(t.tag){case 5:pe||ft(t,n);case 6:var r=ue,i=Ve;ue=null,dn(e,n,t),ue=r,Ve=i,ue!==null&&(Ve?(e=ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ue.removeChild(t.stateNode));break;case 18:ue!==null&&(Ve?(e=ue,t=t.stateNode,e.nodeType===8?dl(e.parentNode,t):e.nodeType===1&&dl(e,t),sr(e)):dl(ue,t.stateNode));break;case 4:r=ue,i=Ve,ue=t.stateNode.containerInfo,Ve=!0,dn(e,n,t),ue=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&po(t,n,o),i=i.next}while(i!==r)}dn(e,n,t);break;case 1:if(!pe&&(ft(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){K(t,n,u)}dn(e,n,t);break;case 21:dn(e,n,t);break;case 22:t.mode&1?(pe=(r=pe)||t.memoizedState!==null,dn(e,n,t),pe=r):dn(e,n,t);break;default:dn(e,n,t)}}function ku(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new gd),n.forEach(function(r){var i=_d.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ge(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:ue=u.stateNode,Ve=!1;break e;case 3:ue=u.stateNode.containerInfo,Ve=!0;break e;case 4:ue=u.stateNode.containerInfo,Ve=!0;break e}u=u.return}if(ue===null)throw Error(S(160));Uc(l,o,i),ue=null,Ve=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(a){K(i,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gc(n,e),n=n.sibling}function Gc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(n,e),Ye(e),r&4){try{Jt(3,e,e.return),Oi(3,e)}catch(z){K(e,e.return,z)}try{Jt(5,e,e.return)}catch(z){K(e,e.return,z)}}break;case 1:Ge(n,e),Ye(e),r&512&&t!==null&&ft(t,t.return);break;case 5:if(Ge(n,e),Ye(e),r&512&&t!==null&&ft(t,t.return),e.flags&32){var i=e.stateNode;try{rr(i,"")}catch(z){K(e,e.return,z)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&ua(i,l),Fl(u,o);var a=Fl(u,l);for(o=0;o<s.length;o+=2){var v=s[o],m=s[o+1];v==="style"?pa(i,m):v==="dangerouslySetInnerHTML"?fa(i,m):v==="children"?rr(i,m):Lo(i,v,m,a)}switch(u){case"input":Dl(i,l);break;case"textarea":aa(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var g=l.value;g!=null?pt(i,!!l.multiple,g,!1):p!==!!l.multiple&&(l.defaultValue!=null?pt(i,!!l.multiple,l.defaultValue,!0):pt(i,!!l.multiple,l.multiple?[]:"",!1))}i[dr]=l}catch(z){K(e,e.return,z)}}break;case 6:if(Ge(n,e),Ye(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(z){K(e,e.return,z)}}break;case 3:if(Ge(n,e),Ye(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{sr(n.containerInfo)}catch(z){K(e,e.return,z)}break;case 4:Ge(n,e),Ye(e);break;case 13:Ge(n,e),Ye(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(cs=b())),r&4&&ku(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(pe=(a=pe)||v,Ge(n,e),pe=a):Ge(n,e),Ye(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!v&&e.mode&1)for(P=e,v=e.child;v!==null;){for(m=P=v;P!==null;){switch(p=P,g=p.child,p.tag){case 0:case 11:case 14:case 15:Jt(4,p,p.return);break;case 1:ft(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(z){K(r,t,z)}}break;case 5:ft(p,p.return);break;case 22:if(p.memoizedState!==null){Cu(m);continue}}g!==null?(g.return=p,P=g):Cu(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{i=m.stateNode,a?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=da("display",o))}catch(z){K(e,e.return,z)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=a?"":m.memoizedProps}catch(z){K(e,e.return,z)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ge(n,e),Ye(e),r&4&&ku(e);break;case 21:break;default:Ge(n,e),Ye(e)}}function Ye(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Fc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rr(i,""),r.flags&=-33);var l=Su(e);mo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Su(e);vo(e,u,o);break;default:throw Error(S(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zd(e,n,t){P=e,Hc(e)}function Hc(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var i=P,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gr;if(!o){var u=i.alternate,s=u!==null&&u.memoizedState!==null||pe;u=Gr;var a=pe;if(Gr=o,(pe=s)&&!a)for(P=i;P!==null;)o=P,s=o.child,o.tag===22&&o.memoizedState!==null?Nu(i):s!==null?(s.return=o,P=s):Nu(i);for(;l!==null;)P=l,Hc(l),l=l.sibling;P=i,Gr=u,pe=a}Eu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,P=l):Eu(e)}}function Eu(e){for(;P!==null;){var n=P;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||Oi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!pe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:He(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&su(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}su(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var v=a.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&sr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}pe||n.flags&512&&ho(n)}catch(p){K(n,n.return,p)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function Cu(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function Nu(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Oi(4,n)}catch(s){K(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){K(n,i,s)}}var l=n.return;try{ho(n)}catch(s){K(n,l,s)}break;case 5:var o=n.return;try{ho(n)}catch(s){K(n,o,s)}}}catch(s){K(n,n.return,s)}if(n===e){P=null;break}var u=n.sibling;if(u!==null){u.return=n.return,P=u;break}P=n.return}}var wd=Math.ceil,ki=fn.ReactCurrentDispatcher,us=fn.ReactCurrentOwner,$e=fn.ReactCurrentBatchConfig,O=0,se=null,ee=null,ae=0,_e=0,dt=Rn(0),te=0,yr=null,Yn=0,Fi=0,as=0,bt=null,xe=null,cs=0,Ct=1/0,nn=null,Ei=!1,go=null,_n=null,Hr=!1,wn=null,Ci=0,er=0,yo=null,ei=-1,ni=0;function ge(){return O&6?b():ei!==-1?ei:ei=b()}function Pn(e){return e.mode&1?O&2&&ae!==0?ae&-ae:rd.transition!==null?(ni===0&&(ni=Ca()),ni):(e=U,e!==0||(e=window.event,e=e===void 0?16:ja(e.type)),e):1}function Qe(e,n,t,r){if(50<er)throw er=0,yo=null,Error(S(185));xr(e,t,r),(!(O&2)||e!==se)&&(e===se&&(!(O&2)&&(Fi|=t),te===4&&yn(e,ae)),Ce(e,r),t===1&&O===0&&!(n.mode&1)&&(Ct=b()+500,Mi&&Dn()))}function Ce(e,n){var t=e.callbackNode;tf(e,n);var r=ui(e,e===se?ae:0);if(r===0)t!==null&&Ms(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ms(t),n===1)e.tag===0?td(_u.bind(null,e)):qa(_u.bind(null,e)),Jf(function(){!(O&6)&&Dn()}),t=null;else{switch(Na(r)){case 1:t=Ao;break;case 4:t=ka;break;case 16:t=si;break;case 536870912:t=Ea;break;default:t=si}t=Kc(t,Vc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Vc(e,n){if(ei=-1,ni=0,O&6)throw Error(S(327));var t=e.callbackNode;if(yt()&&e.callbackNode!==t)return null;var r=ui(e,e===se?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ni(e,r);else{n=r;var i=O;O|=2;var l=Bc();(se!==e||ae!==n)&&(nn=null,Ct=b()+500,Vn(e,n));do try{kd();break}catch(u){Wc(e,u)}while(1);Xo(),ki.current=l,O=i,ee!==null?n=0:(se=null,ae=0,n=te)}if(n!==0){if(n===2&&(i=Wl(e),i!==0&&(r=i,n=zo(e,i))),n===1)throw t=yr,Vn(e,0),yn(e,r),Ce(e,b()),t;if(n===6)yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!xd(i)&&(n=Ni(e,r),n===2&&(l=Wl(e),l!==0&&(r=l,n=zo(e,l))),n===1))throw t=yr,Vn(e,0),yn(e,r),Ce(e,b()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:Fn(e,xe,nn);break;case 3:if(yn(e,r),(r&130023424)===r&&(n=cs+500-b(),10<n)){if(ui(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Jl(Fn.bind(null,e,xe,nn),n);break}Fn(e,xe,nn);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Be(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wd(r/1960))-r,10<r){e.timeoutHandle=Jl(Fn.bind(null,e,xe,nn),r);break}Fn(e,xe,nn);break;case 5:Fn(e,xe,nn);break;default:throw Error(S(329))}}}return Ce(e,b()),e.callbackNode===t?Vc.bind(null,e):null}function zo(e,n){var t=bt;return e.current.memoizedState.isDehydrated&&(Vn(e,n).flags|=256),e=Ni(e,n),e!==2&&(n=xe,xe=t,n!==null&&wo(n)),e}function wo(e){xe===null?xe=e:xe.push.apply(xe,e)}function xd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Ze(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function yn(e,n){for(n&=~as,n&=~Fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Be(n),r=1<<t;e[t]=-1,n&=~r}}function _u(e){if(O&6)throw Error(S(327));yt();var n=ui(e,0);if(!(n&1))return Ce(e,b()),null;var t=Ni(e,n);if(e.tag!==0&&t===2){var r=Wl(e);r!==0&&(n=r,t=zo(e,r))}if(t===1)throw t=yr,Vn(e,0),yn(e,n),Ce(e,b()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Fn(e,xe,nn),Ce(e,b()),null}function fs(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(Ct=b()+500,Mi&&Dn())}}function Xn(e){wn!==null&&wn.tag===0&&!(O&6)&&yt();var n=O;O|=1;var t=$e.transition,r=U;try{if($e.transition=null,U=1,e)return e()}finally{U=r,$e.transition=t,O=n,!(O&6)&&Dn()}}function ds(){_e=dt.current,V(dt)}function Vn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,qf(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(Qo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pi();break;case 3:kt(),V(ke),V(he),ns();break;case 5:es(r);break;case 4:kt();break;case 13:V(Z);break;case 19:V(Z);break;case 10:Ko(r.type._context);break;case 22:case 23:ds()}t=t.return}if(se=e,ee=e=In(e.current,null),ae=_e=n,te=0,yr=null,as=Fi=Yn=0,xe=bt=null,Gn!==null){for(n=0;n<Gn.length;n++)if(t=Gn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Gn=null}return e}function Wc(e,n){do{var t=ee;try{if(Xo(),qr.current=Si,xi){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xi=!1}if(Zn=0,le=ne=Y=null,qt=!1,vr=0,us.current=null,t===null||t.return===null){te=1,yr=n,ee=null;break}e:{var l=e,o=t.return,u=t,s=n;if(n=ae,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,v=u,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var g=hu(o);if(g!==null){g.flags&=-257,vu(g,o,u,l,n),g.mode&1&&pu(l,a,n),n=g,s=a;var y=n.updateQueue;if(y===null){var z=new Set;z.add(s),n.updateQueue=z}else y.add(s);break e}else{if(!(n&1)){pu(l,a,n),ps();break e}s=Error(S(426))}}else if(B&&u.mode&1){var _=hu(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),vu(_,o,u,l,n),Zo(Et(s,u));break e}}l=s=Et(s,u),te!==4&&(te=2),bt===null?bt=[l]:bt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=_c(l,s,n);ou(l,f);break e;case 1:u=s;var c=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(_n===null||!_n.has(d)))){l.flags|=65536,n&=-n,l.lanes|=n;var x=Pc(l,u,n);ou(l,x);break e}}l=l.return}while(l!==null)}Zc(t)}catch(N){n=N,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(1)}function Bc(){var e=ki.current;return ki.current=Si,e===null?Si:e}function ps(){(te===0||te===3||te===2)&&(te=4),se===null||!(Yn&268435455)&&!(Fi&268435455)||yn(se,ae)}function Ni(e,n){var t=O;O|=2;var r=Bc();(se!==e||ae!==n)&&(nn=null,Vn(e,n));do try{Sd();break}catch(i){Wc(e,i)}while(1);if(Xo(),O=t,ki.current=r,ee!==null)throw Error(S(261));return se=null,ae=0,te}function Sd(){for(;ee!==null;)Qc(ee)}function kd(){for(;ee!==null&&!Z0();)Qc(ee)}function Qc(e){var n=Xc(e.alternate,e,_e);e.memoizedProps=e.pendingProps,n===null?Zc(e):ee=n,us.current=null}function Zc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=md(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,ee=null;return}}else if(t=vd(t,n,_e),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);te===0&&(te=5)}function Fn(e,n,t){var r=U,i=$e.transition;try{$e.transition=null,U=1,Ed(e,n,t,r)}finally{$e.transition=i,U=r}return null}function Ed(e,n,t,r){do yt();while(wn!==null);if(O&6)throw Error(S(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(rf(e,l),e===se&&(ee=se=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Hr||(Hr=!0,Kc(si,function(){return yt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=$e.transition,$e.transition=null;var o=U;U=1;var u=O;O|=4,us.current=null,yd(e,t),Gc(t,e),Wf(Kl),ai=!!Xl,Kl=Xl=null,e.current=t,zd(t),Y0(),O=u,U=o,$e.transition=l}else e.current=t;if(Hr&&(Hr=!1,wn=e,Ci=i),l=e.pendingLanes,l===0&&(_n=null),q0(t.stateNode),Ce(e,b()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ei)throw Ei=!1,e=go,go=null,e;return Ci&1&&e.tag!==0&&yt(),l=e.pendingLanes,l&1?e===yo?er++:(er=0,yo=e):er=0,Dn(),null}function yt(){if(wn!==null){var e=Na(Ci),n=$e.transition,t=U;try{if($e.transition=null,U=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,Ci=0,O&6)throw Error(S(331));var i=O;for(O|=4,P=e.current;P!==null;){var l=P,o=l.child;if(P.flags&16){var u=l.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(P=a;P!==null;){var v=P;switch(v.tag){case 0:case 11:case 15:Jt(8,v,l)}var m=v.child;if(m!==null)m.return=v,P=m;else for(;P!==null;){v=P;var p=v.sibling,g=v.return;if(Oc(v),v===a){P=null;break}if(p!==null){p.return=g,P=p;break}P=g}}}var y=l.alternate;if(y!==null){var z=y.child;if(z!==null){y.child=null;do{var _=z.sibling;z.sibling=null,z=_}while(z!==null)}}P=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,P=o;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Jt(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,P=f;break e}P=l.return}}var c=e.current;for(P=c;P!==null;){o=P;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,P=d;else e:for(o=c;P!==null;){if(u=P,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Oi(9,u)}}catch(N){K(u,u.return,N)}if(u===o){P=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,P=x;break e}P=u.return}}if(O=i,Dn(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Ti,e)}catch{}r=!0}return r}finally{U=t,$e.transition=n}}return!1}function Pu(e,n,t){n=Et(t,n),n=_c(e,n,1),e=Nn(e,n,1),n=ge(),e!==null&&(xr(e,1,n),Ce(e,n))}function K(e,n,t){if(e.tag===3)Pu(e,e,t);else for(;n!==null;){if(n.tag===3){Pu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=Et(t,e),e=Pc(n,e,1),n=Nn(n,e,1),e=ge(),n!==null&&(xr(n,1,e),Ce(n,e));break}}n=n.return}}function Cd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,se===e&&(ae&t)===t&&(te===4||te===3&&(ae&130023424)===ae&&500>b()-cs?Vn(e,0):as|=t),Ce(e,n)}function Yc(e,n){n===0&&(e.mode&1?(n=jr,jr<<=1,!(jr&130023424)&&(jr=4194304)):n=1);var t=ge();e=an(e,n),e!==null&&(xr(e,n,t),Ce(e,t))}function Nd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Yc(e,t)}function _d(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Yc(e,t)}var Xc;Xc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Se=!1,hd(e,n,t);Se=!!(e.flags&131072)}else Se=!1,B&&n.flags&1048576&&Ja(n,mi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;br(e,n),e=n.pendingProps;var i=wt(n,he.current);gt(n,t),i=rs(null,n,r,e,i,t);var l=is();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ee(r)?(l=!0,hi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jo(n),i.updater=Ai,n.stateNode=i,i._reactInternals=n,lo(n,r,e,t),n=uo(null,n,r,!0,l,t)):(n.tag=0,B&&l&&Bo(n),me(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(br(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Id(r),e=He(r,e),i){case 0:n=so(null,n,r,e,t);break e;case 1:n=yu(null,n,r,e,t);break e;case 11:n=mu(null,n,r,e,t);break e;case 14:n=gu(null,n,r,He(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),so(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),yu(e,n,r,i,t);case 3:e:{if(jc(n),e===null)throw Error(S(387));r=n.pendingProps,l=n.memoizedState,i=l.element,tc(e,n),zi(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Et(Error(S(423)),n),n=zu(e,n,r,t,i);break e}else if(r!==i){i=Et(Error(S(424)),n),n=zu(e,n,r,t,i);break e}else for(Pe=Cn(n.stateNode.containerInfo.firstChild),Ie=n,B=!0,We=null,t=oc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(xt(),r===i){n=cn(e,n,t);break e}me(e,n,r,t)}n=n.child}return n;case 5:return sc(n),e===null&&to(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,ql(r,i)?o=null:l!==null&&ql(r,l)&&(n.flags|=32),Lc(e,n),me(e,n,o,t),n.child;case 6:return e===null&&to(n),null;case 13:return Rc(e,n,t);case 4:return bo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=St(n,null,r,t):me(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),mu(e,n,r,i,t);case 7:return me(e,n,n.pendingProps,t),n.child;case 8:return me(e,n,n.pendingProps.children,t),n.child;case 12:return me(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,G(gi,r._currentValue),r._currentValue=o,l!==null)if(Ze(l.value,o)){if(l.children===i.children&&!ke.current){n=cn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=on(-1,t&-t),s.tag=2;var a=l.updateQueue;if(a!==null){a=a.shared;var v=a.pending;v===null?s.next=s:(s.next=v.next,v.next=s),a.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),ro(l.return,t,n),u.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(S(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),ro(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}me(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,gt(n,t),i=Oe(i),r=r(i),n.flags|=1,me(e,n,r,t),n.child;case 14:return r=n.type,i=He(r,n.pendingProps),i=He(r.type,i),gu(e,n,r,i,t);case 15:return Ic(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),br(e,n),n.tag=1,Ee(r)?(e=!0,hi(n)):e=!1,gt(n,t),ic(n,r,i),lo(n,r,i,t),uo(null,n,r,!0,e,t);case 19:return Dc(e,n,t);case 22:return Tc(e,n,t)}throw Error(S(156,n.tag))};function Kc(e,n){return Sa(e,n)}function Pd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,n,t,r){return new Pd(e,n,t,r)}function hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Id(e){if(typeof e=="function")return hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ro)return 11;if(e===Do)return 14}return 2}function In(e,n){var t=e.alternate;return t===null?(t=Ae(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ti(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")hs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case tt:return Wn(t.children,i,l,n);case jo:o=8,i|=8;break;case Il:return e=Ae(12,t,n,i|2),e.elementType=Il,e.lanes=l,e;case Tl:return e=Ae(13,t,n,i),e.elementType=Tl,e.lanes=l,e;case Ll:return e=Ae(19,t,n,i),e.elementType=Ll,e.lanes=l,e;case la:return Ui(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ra:o=10;break e;case ia:o=9;break e;case Ro:o=11;break e;case Do:o=14;break e;case hn:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Ae(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Wn(e,n,t,r){return e=Ae(7,e,r,n),e.lanes=t,e}function Ui(e,n,t,r){return e=Ae(22,e,r,n),e.elementType=la,e.lanes=t,e.stateNode={isHidden:!1},e}function wl(e,n,t){return e=Ae(6,e,null,n),e.lanes=t,e}function xl(e,n,t){return n=Ae(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Td(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vs(e,n,t,r,i,l,o,u,s){return e=new Td(e,n,t,u,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ae(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jo(l),e}function Ld(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function qc(e){if(!e)return Ln;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ee(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(Ee(t))return Ka(e,t,n)}return n}function Jc(e,n,t,r,i,l,o,u,s){return e=vs(t,r,!0,e,i,l,o,u,s),e.context=qc(null),t=e.current,r=ge(),i=Pn(t),l=on(r,i),l.callback=n??null,Nn(t,l,i),e.current.lanes=i,xr(e,i,r),Ce(e,r),e}function Gi(e,n,t,r){var i=n.current,l=ge(),o=Pn(i);return t=qc(t),n.context===null?n.context=t:n.pendingContext=t,n=on(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Nn(i,n,o),e!==null&&(Qe(e,i,o,l),Kr(e,i,o)),o}function _i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Iu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ms(e,n){Iu(e,n),(e=e.alternate)&&Iu(e,n)}function jd(){return null}var bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function gs(e){this._internalRoot=e}Hi.prototype.render=gs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Gi(e,n,null,null)};Hi.prototype.unmount=gs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xn(function(){Gi(null,e,null,null)}),n[un]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ia();e={blockedOn:null,target:e,priority:n};for(var t=0;t<gn.length&&n!==0&&n<gn[t].priority;t++);gn.splice(t,0,e),t===0&&La(e)}};function ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tu(){}function Rd(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var a=_i(o);l.call(a)}}var o=Jc(n,r,e,0,null,!1,!1,"",Tu);return e._reactRootContainer=o,e[un]=o.current,cr(e.nodeType===8?e.parentNode:e),Xn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var a=_i(s);u.call(a)}}var s=vs(e,0,!1,null,null,!1,!1,"",Tu);return e._reactRootContainer=s,e[un]=s.current,cr(e.nodeType===8?e.parentNode:e),Xn(function(){Gi(n,s,t,r)}),s}function Wi(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var s=_i(o);u.call(s)}}Gi(n,o,e,i)}else o=Rd(t,n,e,i,r);return _i(o)}_a=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Vt(n.pendingLanes);t!==0&&($o(n,t|1),Ce(n,b()),!(O&6)&&(Ct=b()+500,Dn()))}break;case 13:Xn(function(){var r=an(e,1);if(r!==null){var i=ge();Qe(r,e,1,i)}}),ms(e,1)}};Oo=function(e){if(e.tag===13){var n=an(e,134217728);if(n!==null){var t=ge();Qe(n,e,134217728,t)}ms(e,134217728)}};Pa=function(e){if(e.tag===13){var n=Pn(e),t=an(e,n);if(t!==null){var r=ge();Qe(t,e,n,r)}ms(e,n)}};Ia=function(){return U};Ta=function(e,n){var t=U;try{return U=e,n()}finally{U=t}};Gl=function(e,n,t){switch(n){case"input":if(Dl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Di(r);if(!i)throw Error(S(90));sa(r),Dl(r,i)}}}break;case"textarea":aa(e,t);break;case"select":n=t.value,n!=null&&pt(e,!!t.multiple,n,!1)}};ma=fs;ga=Xn;var Dd={usingClientEntryPoint:!1,Events:[kr,ot,Di,ha,va,fs]},Ft={findFiberByHostInstance:Un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Md={bundleType:Ft.bundleType,version:Ft.version,rendererPackageName:Ft.rendererPackageName,rendererConfig:Ft.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wa(e),e===null?null:e.stateNode},findFiberByHostInstance:Ft.findFiberByHostInstance||jd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vr.isDisabled&&Vr.supportsFiber)try{Ti=Vr.inject(Md),Je=Vr}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dd;Le.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ys(n))throw Error(S(200));return Ld(e,n,null,t)};Le.createRoot=function(e,n){if(!ys(e))throw Error(S(299));var t=!1,r="",i=bc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=vs(e,1,!1,null,null,t,!1,r,i),e[un]=n.current,cr(e.nodeType===8?e.parentNode:e),new gs(n)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=wa(n),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Xn(e)};Le.hydrate=function(e,n,t){if(!Vi(n))throw Error(S(200));return Wi(null,e,n,!0,t)};Le.hydrateRoot=function(e,n,t){if(!ys(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=bc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Jc(n,null,e,1,t??null,i,!1,l,o),e[un]=n.current,cr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Hi(n)};Le.render=function(e,n,t){if(!Vi(n))throw Error(S(200));return Wi(null,e,n,!1,t)};Le.unmountComponentAtNode=function(e){if(!Vi(e))throw Error(S(40));return e._reactRootContainer?(Xn(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Le.unstable_batchedUpdates=fs;Le.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Vi(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Wi(e,n,t,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function e0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e0)}catch(e){console.error(e)}}e0(),Ju.exports=Le;var Ad=Ju.exports,Lu=Ad;_l.createRoot=Lu.createRoot,_l.hydrateRoot=Lu.hydrateRoot;class ju extends C.Component{constructor(n){super(n),this.state={error:!1}}static getDerivedStateFromError(n){return{error:!0}}static getDerivedStateFromProps(n){return{error:n.error}}componentDidCatch(n,t){this.props.onError(n,t)}render(){return this.state.error?null:this.props.children}}const Sl={0:BigInt(1),1:BigInt(10),2:BigInt(100),3:BigInt(1e3),4:BigInt(1e4),5:BigInt(1e5),6:BigInt(1e6),7:BigInt(1e7),8:BigInt(1e8),9:BigInt(1e9),10:BigInt(1e10)},kl=e=>(Sl[e]||(Sl[e]=BigInt(10)**BigInt(e)),Sl[e]),El=16,en=16;class Ru{constructor(n=0,t){if(typeof n=="bigint"){this._n=n,this.precision=t||El;return}typeof n=="number"&&(n===0?n="0.0":n=n.toFixed(-Math.log10(Math.abs(n))+El)),typeof n=="string"&&n.match(/e/)&&(n=parseFloat(n).toFixed(El));let[r,i]=n.split(".").concat("");this.precision=t||i.length||1,this._n=BigInt(r+i.padEnd(this.precision,"0").slice(0,this.precision))}toPrecision(n){n!==this.precision&&(n>this.precision?this._n*=BigInt(10)**BigInt(n-this.precision):this._n/=BigInt(10)**BigInt(this.precision-n),this.precision=n)}adapt(n){return n=F(n),this.precision>n.precision?n.toPrecision(this.precision):this.precision<n.precision&&this.toPrecision(n.precision),n}add(n){return n instanceof qe?n.add(this):(n=this.adapt(n),F(this._n+n._n,this.precision))}subtract(n){return n instanceof qe?n.neg().add(this):(n=this.adapt(n),F(this._n-n._n,this.precision))}multiply(n){return n instanceof qe?n.multiply(this):(n=this.adapt(n),F(this._n*n._n/kl(this.precision),this.precision))}divide(n){return n instanceof qe?n.pow(-1).multiply(this):(n=this.adapt(n),F(this._n*kl(this.precision)/n._n,this.precision))}pow(n){if(n instanceof qe)return n.pow(this);let t=this;if(n%1===0){for(let r=1;r<n;r++)t=t.multiply(this);return t}return n=this.adapt(n),t.log().multiply(n).exp()}tetra(n){let t=F(1);for(let r=0;r<n;r++)t=this.pow(t);return t}abs(){return F(this._n<0?-this._n:this._n,this.precision)}sign(){return F(this._n<0?-1:this._n>0?1:0)}neg(){return this._n=-this._n,this}nop(){return this}sqrt(){const n=this.precision;let t=this._n,r=t,i=(t+1n)/2n;for(;i<r;)r=i,i=(r+t/r)/2n;return F(r,n)}atan(){const n=this.precision;let t=this,r=F(0,n);for(let i=1;i<en;i+=2)r=r.add(t.pow(i).divide(i)),t=t.neg();return r}exp(){const n=this.precision;let t=this,r=F(1,n);for(let i=1;i<en;i++)r=r.add(t.pow(i).divide(i));return r}frexp(){let n=this,t=F();for(;n.gt(F(1));)n=n.divide(2),t=t.add(1);return[n,t]}log(){const n=this.precision,[t,r]=this.frexp();let i=t.subtract(1),l=F(),o=1;for(let u=1;u<n;u++)l=l.add(i.pow(u).divide(u).multiply(o)),o*=-1;return l.add(r.multiply($d(n)))}cos(){const n=this.precision;let t=this,r=F(1,n),i=-1;for(let l=2;l<en;l+=2)r=r.add(t.pow(l).divide(l).neg().multiply(i)),i*=-1;return r}sin(){let n=this,t=n,r=-1;for(let i=3;i<en;i+=2)t=t.add(n.pow(i).divide(i).neg().multiply(r)),r*=-1;return t}tan(){this.precision;let n=this,t=n,r=1;for(let i=3;i<en;i+=2)t=t.add(n.pow(i).divide(i).multiply(r)),r*=-1;return t}sinh(){const n=this.precision;let t=this,r=F(1,n);for(let i=2;i<en;i+=2)r=r.add(t.pow(i).divide(i));return r}cosh(){const n=this.precision;let t=this,r=F(1,n);for(let i=2;i<en;i+=2)r=r.add(t.pow(i).divide(i));return r}acos(){const n=this.precision;let t=this,r=F(0,n),i=1;for(let l=1;l<en;l+=2)r=r.add(t.pow(l).divide(l).multiply(i)),i*=-1;return r}asin(){const n=this.precision;let t=this,r=F(0,n),i=1;for(let l=1;l<en;l+=2)r=r.add(t.pow(l).divide(l).multiply(i)),i*=-1;return r}toExp(){}eq(n){return n=this.adapt(n),this._n===n._n}gt(n){return n=this.adapt(n),this._n>n._n}lt(n){return n=this.adapt(n),this._n<n._n}gte(n){return n=this.adapt(n),this._n>=n._n}lte(n){return n=this.adapt(n),this._n<=n._n}toNumber(){return Number(this._n)/Number(kl(this.precision))}toString(){let n=this._n.toString().replace("-","").padStart(this.precision+1,"0");return n=(n.slice(0,-this.precision)+"."+n.slice(-this.precision)).replace(/(\.0*|0+)$/,""),this._n<0?"-"+n:n}}const F=(e,n)=>!n&&e instanceof Ru?e:new Ru(e,n);let qe=class we{constructor(n,t){this.re=n,this.im=t}add(n){return n=k(n),new we(this.re.add(n.re),this.im.add(n.im))}subtract(n){return n=k(n),new we(this.re.subtract(n.re),this.im.subtract(n.im))}multiply(n){return n=k(n),new we(this.re.multiply(n.re).subtract(this.im.multiply(n.im)),this.re.multiply(n.im).add(this.im.multiply(n.re)))}divide(n){n=k(n);const t=n.re.multiply(n.re).add(n.im.multiply(n.im));return new we(this.re.multiply(n.re).add(this.im.multiply(n.im)).divide(t),this.im.multiply(n.re).subtract(this.re.multiply(n.im)).divide(t))}neg(){return new we(this.re.neg(),this.im.neg())}exp(){const n=this.re.exp();return new we(this.im.cos().multiply(n),this.im.sin().multiply(n))}atan2(){const{re:n,im:t}=this,r=n.abs(),i=t.abs();if(r._n===0n&&i._n===0n)return F(0);if(r._n===0n)return t>0n?F(Math.PI/2):F(-Math.PI/2);const o=t.divide(n).atan();return n._n>0n?o:t._n>=0n?o.add(Math.PI):o.subtract(Math.PI)}sqrt(){const n=this.abs().sqrt(),t=this.arg().divide(2);return new we(n.multiply(t.cos()),n.multiply(t.sin()))}cos(){return new we(this.re.cos().multiply(this.im.sinh()),this.re.sin().multiply(this.im.cosh()))}sin(){return new we(this.re.sin().multiply(this.im.cosh()),this.re.cos().multiply(this.im.sinh()))}tan(){return this.sin().divide(this.cos())}sinh(){return new we(this.re.sinh().multiply(this.im.cos()),this.re.cosh().multiply(this.im.sin()))}cosh(){return new we(this.re.cosh().multiply(this.im.cos()),this.re.sinh().multiply(this.im.sin()))}tanh(){return this.sinh().divide(this.cosh())}asin(){return this.multiply(this).neg().add(1).sqrt().add(this.im).log().neg().multiply(k(0,1))}acos(){return this.multiply(this).neg().add(1).sqrt().add(this).log().neg().multiply(k(0,1))}atan(){return this.add(k(0,1)).log().neg().multiply(k(0,.5))}asinh(){return this.multiply(this).add(1).sqrt().add(this).log()}acosh(){return this.multiply(this).subtract(1).sqrt().add(this).log()}atanh(){return this.add(1).divide(this.neg().add(1)).log().multiply(k(.5))}log(){return new we(this.abs().log(),this.arg())}pow(n){if(n=k(n),n.im.toNumber()===0){const t=n.re.toNumber();if(t%1===0){if(t===0)return k(1);if(t===1)return this;if(t===2)return this.multiply(this);if(t===3)return this.multiply(this).multiply(this);if(t===4){const i=this.multiply(this);return i.multiply(i)}if(t===5){const i=this.multiply(this);return i.multiply(i).multiply(this)}if(t===6){const i=this.multiply(this);return i.multiply(i).multiply(i)}if(t===7){const i=this.multiply(this);return i.multiply(i).multiply(i).multiply(this)}if(t===8){const i=this.multiply(this),l=i.multiply(i);return l.multiply(l)}if(t===9){const i=this.multiply(this),l=i.multiply(i);return l.multiply(l).multiply(this)}let r=this;for(let i=1;i<t;i++)r=r.multiply(this);return r}}return this.re.toNumber()===0&&this.im.toNumber()===0?k(0):n.re.toNumber()===0&&n.im.toNumber()===0?k(1):this.log().multiply(n).exp()}tetra(n){let t=k(1);for(let r=0;r<n;r++)t=this.pow(t);return t}norm2(){return this.re.multiply(this.re).add(this.im.multiply(this.im))}norm(){return F(this.norm2().sqrt())}arg(){return this.atan2()}conj(){return k(this.re,-this.im)}real(){return this.re}imag(){return this.im}toString(){return`complex: <${this.re}+${this.im}i>`}to2fv(){return[this.re.toNumber(),this.im.toNumber()]}static isComplexString(n){return n.match(/^complex: <.+\+.+i>$/)}static fromString(n){const t=n.match(/^complex: <(.+)\+(.+)i>$/);if(!t)throw new Error("Invalid complex string");const[,r,i]=t;return new we(F(r),F(i))}};const $d=e=>F("0.6931471805599453094172321214581765680755001343602552541206800094933936219696947156058633269964186875420014810205706857336855202357581305570326707516350759619307275708283714351903070386238916734711233501153644979552391204751726815749320651555247341395258829504530070953263666426541042391578149520437404303855008019441706416715186447128399681717845469570262716310645461502572074024816377733896385506952606683411372738737229289564935470257626520988596932019650585547647033067936544325476327449512504060694381471046899465",e),k=(e=0,n=0,t=null)=>e instanceof qe?e:new qe(F(e,t),F(n,t));window.m=F;window.cx=k;const Od={whitespace:/^\s+/,float:/^([0-9]+([.][0-9]*)?|[.][0-9]+)/,integer:/^[0-9]+/,operator:/^(\*\*|[+\-*/]|\^{1,2}|\|-\|)/,unaryPrefix:/^~/,unarySuffix:/^#/,identifier:/^[a-zA-Z_][a-zA-Z0-9_]*'*/,pipe:/^\|/,lparen:/^\(/,rparen:/^\)/,comma:/^,/},Re={"+":1,"-":2,"*":3,"/":4,"~":5,"^":6,"^^":6};class Fd{constructor(n,t,r,i){this.type=n,this.value=t,this.start=r,this.end=i}toString(){return`<${this.type}: ${this.value} at ${this.start}-${this.end}>`}}const Ud={"+":"cadd","-":"csub","*":"cmul","/":"cdiv","^":"cpow","^^":"ctetra","|-|":"diffabs"},xo={sqrt:"csqrt",cos:"ccos",sin:"csin",tan:"ctan",acos:"cacos",asin:"casin",atan:"catan",cosh:"ccosh",sinh:"csinh",tanh:"ctanh",acosh:"cacosh",asinh:"casinh",atanh:"catanh",log:"clog",exp:"cexp",abs:"cnorm",beta:"cbeta","beta'":"cdbeta",gamma:"cgamma","gamma'":"cdgamma",zeta:"czeta","zeta'":"cdzeta",psi:"cpsi",phi:"cphi",sn:"csn",cn:"ccn",dn:"cdn",arg:"carg",norm:"length",tania:"ctania","tania'":"ctaniad",atania:"catania","atania'":"cataniad",doya:"cdoya",filog:"cfilog",tet:"ctet",ate:"cate",tetra:"ctetranat",fibonacci:"cfibonacci"},Du={"+":(e,n)=>e+n,"-":(e,n)=>e-n,"*":(e,n)=>e*n,"/":(e,n)=>e/n,"^":(e,n)=>e**n,"^^":(e,n)=>{let t=1;for(let r=0;r<n;r++)t=e**t;return t}},Gd={"-":"-","~":"conj",abs:"abs",sign:"sign"},Hd={"+":"add","-":"subtract","*":"multiply","/":"divide","^":"pow","^^":"tetra"},Vd={"-":"neg","~":"conj",abs:"abs",sign:"sign"};class w{constructor(n,t,r){this.type=n,this.left=t,this.right=r}isPureReal(){return this.left.isPureReal()&&this.right.isPureReal()||this.left.isPureImag()&&this.right.isPureImag()}isPureImag(){return["+","-"].includes(this.type)?this.left.isPureImag()&&this.right.isPureImag():["*","/"].includes(this.type)?this.left.isPureImag()&&this.right.isPureReal()||this.left.isPureReal()&&this.right.isPureImag():!1}toTree(){return`<${this.type}: ${this.left.toTree()} ${this.right.toTree()}>`}toString(){let n=this.left.toString(),t=this.right.toString();return this.type==="complex"?`(${n} + ${t}i)`:((this.left instanceof w&&Re[this.left.type]<Re[this.type]||Re[this.left.type]===Re[this.type]&&["-","/","^","^^"].includes(this.type))&&(n=`(${n})`),(this.right instanceof w&&Re[this.right.type]<Re[this.type]||Re[this.right.type]===Re[this.type]&&["-","/","^","^^"].includes(this.type))&&(t=`(${t})`),["^","^^"].includes(this.type)?`${n}${this.type}${t}`:`${n} ${this.type} ${t}`)}toShader(){if(this.type==="^"&&(this.right.type==="number"||this.right instanceof oe&&this.right.operand.type==="number")){let n=0;return this.right instanceof oe?n=this.right.operand.value*(this.right.type==="-"?-1:1):n=this.right.value,n%1===0?n===1?this.left.toShader():n>0&&n<10?`cpow${n}(${this.left.toShader()})`:`cpow(${this.left.toShader()}, ${n})`:`cpow(${this.left.toShader()}, ${n})`}return`${Ud[this.type]}(${this.left.toShader()}, ${this.right.toShader()})`}toComplex(){return`(${this.left.toComplex()}).${Hd[this.type]}(${this.right.toComplex()})`}toDerivative(n,t){const r=[...n,...t];if(["+","-"].includes(this.type))return new w(this.type,this.left.toDerivative(n,t),this.right.toDerivative(n,t));if(this.type==="*")return new w("+",new w("*",this.left.toDerivative(n,t),this.right),new w("*",this.left,this.right.toDerivative(n,t)));if(this.type==="/")return new w("/",new w("-",new w("*",this.left.toDerivative(n,t),this.right),new w("*",this.left,this.right.toDerivative(n,t))),new w("^",this.right,new R("number",2)));if(this.type==="^")return new w("*",new w("^",this.left,new w("-",this.right,new R("number",1))),new w("+",new w("*",this.right,this.left.toDerivative(n,t)),new w("*",new w("*",this.left,new Q("log",[this.left])),this.right.toDerivative(n,t))));if(this.type==="^^"){if((this.left.type==="number"||this.left.type==="identifier"&&!r.includes(this.left.value))&&(this.right.type==="number"||this.right.type==="identifier"&&!r.includes(this.right.value)))return this;const i=(l,o)=>o<=1?new R("number",1):new w("*",new w("^^",l,new R("number",o)),new w("+",new w("*",i(l,o-1),new Q("log",[l])),new w("*",new w("^^",l,new R("number",o-1)),new w("/",new R("number",1),l))));if(this.right.type==="number")return new w("*",this.left.toDerivative(n,t),i(this.left,this.right.value))}return new w(this.type,this.left.toDerivative(n,t),this.right.toDerivative(n,t))}simplify(){const n=this.left.simplify(),t=this.right.simplify();if(this.type==="+"){if(n.type==="number"&&n.value===0)return t;if(t.type==="number"&&t.value===0)return n}if(this.type==="-"){if(n.type==="number"&&n.value===0)return new oe("-",t).simplify();if(t.type==="number"&&t.value===0)return n}if(this.type==="*"){if(n.type==="number"&&n.value===0||t.type==="number"&&t.value===0)return new R("number",0);if(n.type==="number"&&n.value===1)return t;if(t.type==="number"&&t.value===1)return n}if(this.type==="/"){if(n.type==="number"&&n.value===0)return new R("number",0);if(t.type==="number"&&t.value===1)return n}if(this.type==="^"&&(t.type==="number"||t instanceof oe&&t.operand.type==="number")){let r=0;if(t instanceof oe?r=t.operand.value*(t.type==="-"?-1:1):r=t.value,r===0)return new R("number",1);if(r===1)return n;if(n.type==="^"&&n.right.type==="number")return new w("^",n.left,new R("number",n.right.value*r)).simplify()}if(this.type==="^^"&&(t.type==="number"||t instanceof oe&&t.operand.type==="number")){let r=0;if(t instanceof oe?r=t.operand.value*(t.type==="-"?-1:1):r=t.value,r===0)return new R("number",1);if(r===1)return n}if(t.type==="number"&&n.type==="number"){const r=this.type==="**"?"^":this.type;return Du[r](n.value,t.value)%1===0?new R("number",Du[r](n.value,t.value)):this}if(n.type==="complex"&&t.isPureReal()){if(["+","-"].includes(this.type))return new $n(new w(this.type,n.real,t),n.imag).simplify();if(["*","/"].includes(this.type))return new $n(new w(this.type,n.real,t),new w(this.type,n.imag,t)).simplify()}if(n.isPureReal()&&t.type==="complex"){if(["+","-"].includes(this.type))return new $n(new w(this.type,n,t.real),t.imag).simplify();if(["*","/"].includes(this.type))return new $n(new w(this.type,n,t.real),new w(this.type,n,t.imag)).simplify()}if(n.type==="complex"&&t.type==="complex"){if(["+","-"].includes(this.type))return new $n(new w(this.type,n.real,t.real),new w(this.type,n.imag,t.imag)).simplify();if(this.type==="*")return new $n(new w("-",new w("*",n.real,t.real),new w("*",n.imag,t.imag)),new w("+",new w("*",n.real,t.imag),new w("*",n.imag,t.real))).simplify();if(this.type==="/"){const r=new w("+",new w("^",t.real,2),new w("^",t.imag,2));return new $n(new w("/",new w("+",new w("*",n.real,t.real),new w("*",n.imag,t.imag)),r),new w("/",new w("-",new w("*",n.imag,t.real),new w("*",n.real,t.imag)),r)).simplify()}}return new w(this.type,n,t)}}class oe{constructor(n,t){this.type=n,this.operand=t}isPureReal(){return this.operand.isPureReal()}isPureImag(){return["+","-","~"].includes(this.type)&&this.operand.isPureImag()}toTree(){return`<${this.type}: ${this.operand.toTree()}>`}toString(){let n=this.operand.toString();return(this.operand instanceof w&&Re[this.operand.type]<Re[this.type]||Re[this.operand.type]===Re[this.type]&&["-","/","^"].includes(this.type))&&(n=`(${n})`),`${this.type}${n}`}toShader(){return this.type==="+"?this.operand.toShader():`${Gd[this.type]}(${this.operand.toShader()})`}toComplex(){return this.type==="+"?this.operand.toComplex():`(${this.operand.toComplex()}).${Vd[this.type]}()`}toDerivative(n,t){return new oe(this.type,this.operand.toDerivative(n,t))}simplify(){const n=this.operand.simplify();return this.type==="+"?n:this.type==="'"?n.toDerivative([],["z","z_1"]).simplify():this.type==="#"?new w("/",n,n.toDerivative([],["z","z_1"])).simplify():this.type==="-"&&n.type==="number"?new R("number",-n.value):n instanceof oe&&["-","~"].includes(this.type)&&n.type===this.type?n.operand:new oe(this.type,n)}}class Q{constructor(n,t){this.name=n.toLowerCase(),this.args=t,this.type="function"}isPureReal(){return["abs","re","im"].includes(this.name)}isPureImag(){return!1}toTree(){return`<${this.name}(): ${this.args.map(n=>n.toTree()).join(", ")}>`}toString(){return`${this.name}(${this.args.map(n=>n.toString()).join(", ")})`}toShader(){return this.args.length===0?`${xo[this.name]||this.name}()`:this.name==="re"?`${this.args[0].toShader()}.x`:this.name==="im"?`${this.args[0].toShader()}.y`:`${xo[this.name]||this.name}(${this.args.map(n=>n.toShader()).join(", ")})`}toComplex(){let n={re:"real",im:"imag"}[this.name]||this.name;return n=n.replace("'","_prime"),this.args.length===0?`${n}()`:`${this.args[0].toComplex()}.${n}(${this.args.slice(1).map(t=>t.toComplex()).join(", ")})`}toDerivative(n,t){return this.name==="log"?new w("/",this.args[0].toDerivative(n,t),this.args[0]):this.name==="exp"?new w("*",this,this.args[0].toDerivative(n,t)):this.name==="abs"?new w("*",new Q("sign",this.args),this.args[0].toDerivative(n,t)):this.name==="sqrt"?new w("/",this.args[0].toDerivative(n,t),new w("*",new R("number",2),this)):this.name==="sin"?new w("*",new Q("cos",this.args),this.args[0].toDerivative(n,t)):this.name==="cos"?new w("*",new oe("-",new Q("sin",this.args)),this.args[0].toDerivative(n,t)):this.name==="tan"?new w("/",this.args[0].toDerivative(n,t),new w("^",new Q("cos",this.args),new R("number",2))):this.name==="asin"?new w("/",this.args[0].toDerivative(n,t),new w("^",new w("-",new R("number",1),new w("^",this.args[0],new R("number",2))),new R("number",.5))):this.name==="acos"?new w("/",new oe("-",this.args[0].toDerivative(n,t)),new w("^",new w("-",new R("number",1),new w("^",this.args[0],new R("number",2))),new R("number",.5))):this.name==="atan"?new w("/",this.args[0].toDerivative(n,t),new w("+",new R("number",1),new w("^",this.args[0],new R("number",2)))):this.name==="sinh"?new w("*",new Q("cosh",this.args),this.args[0].toDerivative(n,t)):this.name==="cosh"?new w("*",new Q("sinh",this.args),this.args[0].toDerivative(n,t)):this.name==="tanh"?new w("/",this.args[0].toDerivative(n,t),new w("^",new Q("cosh",this.args),new R("number",2))):this.name==="asinh"?new w("/",this.args[0].toDerivative(n,t),new w("^",new w("+",new w("^",this.args[0],new R("number",2)),new R("number",1)),new R("number",.5))):this.name==="acosh"?new w("/",this.args[0].toDerivative(n,t),new w("^",new w("-",new w("^",this.args[0],new R("number",2)),new R("number",1)),new R("number",.5))):this.name==="atanh"?new w("/",this.args[0].toDerivative(n,t),new w("-",new R("number",1),new w("^",this.args[0],new R("number",2)))):this.name==="log2"?new w("/",new Q("log",[new R("number",2)]),this.args[0].toDerivative(n,t)):this.name==="log10"?new w("/",new Q("log",[new R("number",10)]),this.args[0].toDerivative(n,t)):this.name==="sn"?new w("*",new w("*",new Q("cn",this.args),new Q("dn",this.args)),this.args[0].toDerivative(n,t)):this.name==="cn"?new w("*",new w("*",new oe("-",new Q("sn",this.args)),new Q("dn",this.args)),this.args[0].toDerivative(n,t)):this.name==="dn"?new w("*",new w("*",new w("*",new oe("-",this.args[1]||new R("number",.8)),new Q("sn",this.args)),new Q("cn",this.args)),this.args[0].toDerivative(n,t)):["re","im"].includes(this.name)?new Q(this.name,this.args.map(r=>r.toDerivative(n,t))):this.name==="sign"?new R("number",0):new w("*",new Q(`${this.name}'`,this.args),this.args[0].toDerivative(n,t))}simplify(){const n=this.args.map(t=>t.simplify());return new Q(this.name,n)}}let $n=class n0{constructor(n,t){this.real=n,this.imag=t,this.type="complex"}isPureReal(){return!1}isPureImag(){return!1}toTree(){return`<complex: ${this.real.toTree()} + ${this.imag.toTree()}i>`}toString(){return`${this.real.toString()} + ${this.imag.toString()}i`}toShader(){return`vec2(${this.real.toShader()}, ${this.imag.toShader()})`}toComplex(){return`cx(${this.real.toComplex()}, ${this.imag.toComplex()})`}toDerivative(n,t){return new R("number",0)}simplify(){return new n0(this.real.simplify(),this.imag.simplify())}};class R{constructor(n,t){this.type=n,this.value=t}isPureReal(){return this.type==="number"}isPureImag(){return this.type==="identifier"&&this.value==="i"}toTree(){return`<${this.type}: ${this.value}>`}toString(){return`${this.value}`}toShader(){return this.isPureImag()?"vec2(0., 1.)":this.type==="identifier"?this.value.replace(/'/g,"_prime"):`${this.value.toFixed(6)}`}toComplex(){return this.isPureImag()?"cx(0, 1)":this.type==="identifier"?this.value.replace(/'/g,"_prime"):`cx(${this.value})`}toDerivative(n,t){const r=[...n,...t];return this.type==="identifier"&&this.value==="i"?new R("number",0):this.type==="identifier"&&r.includes(this.value)?t.includes(this.value)?new R("number",1):new R("identifier",`${this.value}'`):new R("number",0)}simplify(){return this}}const Wd=(e,n)=>{const t=Object.entries(Od);for(let r=0;r<t.length;r++){const[i,l]=t[r],o=e.slice(n).match(l);if(o!==null){const u=o[0];return new Fd(i,u,n,n+u.length)}}throw new SyntaxError("Tokenization error at index "+n+" in "+e)},Bi=e=>{let n=[];for(let t=0;t<e.length;){const r=Wd(e,t);t=r.end,r.type!=="whitespace"&&n.push(r)}return n},Qi=e=>{let n=0;const t=()=>{let s=r();for(;n<e.length;){const a=e[n];if(!a)throw new SyntaxError("Unexpected EOF");if(a.type==="operator"&&["+","-","|-|"].includes(a.value))n++,s=new w(a.value,s,r());else break}return s},r=()=>{let s=i();for(;n<e.length;){const a=e[n];if(!a)throw new SyntaxError("Unexpected EOF");if(a.type==="operator"&&["*","/"].includes(a.value))n++,s=new w(a.value,s,i());else if(["lparen","identifier"].includes(a.type))s=new w("*",s,i());else break}return s},i=()=>{let s=l();for(;n<e.length;){const a=e[n];if(!a)throw new SyntaxError("Unexpected EOF");if(a.type==="operator"&&["^","**","^^"].includes(a.value))n++,s=new w(a.value==="**"?"^":a.value,s,i());else break}return s},l=()=>{let s=o();for(;n<e.length;){const a=e[n];if(!a)throw new SyntaxError("Unexpected EOF");if(a.type==="unarySuffix")n++,s=new oe(a.value,s);else break}return s},o=()=>{var a,v,m,p,g,y,z;const s=e[n];if(!s)throw new SyntaxError("Unexpected EOF");if(s.type==="lparen"){n++;const _=t();if(((a=e[n])==null?void 0:a.type)!=="rparen")throw new SyntaxError("Expected ) at "+(((v=e[n])==null?void 0:v.start)||"EOF"));return n++,_}else if(s.type==="pipe"){n++;const _=t();if(((m=e[n])==null?void 0:m.type)!=="pipe")throw new SyntaxError("Expected | at "+(((p=e[n])==null?void 0:p.start)||"EOF"));return n++,new Q("abs",[_])}else{if(s.type==="unaryPrefix")return n++,new oe(s.value,i());if(s.type==="operator"&&"+-".includes(s.value))return n++,new oe(s.value,i());if(s.type==="float"||s.type==="integer")return n++,new R("number",parseFloat(s.value));if(s.type==="identifier"){n++;const _=new R("identifier",s.value);if(((g=e[n])==null?void 0:g.type)==="lparen"){n++;const f=[];for(;((y=e[n])==null?void 0:y.type)!=="rparen";){if(f.push(t()),!e[n])throw new SyntaxError("Expected ) at EOF");((z=e[n])==null?void 0:z.type)==="comma"&&n++}return n++,new Q(_.value,f)}return _}else throw new SyntaxError(`Unexpected token ${s}`)}},u=t();if(n!==e.length)throw new SyntaxError(`Unexpected EOF ${e[n]}`);return u},Bt=(e,n=[])=>(e.type==="identifier"&&!n.includes(e.value)&&e.value!=="i"&&n.push(e.value),e.left&&(n=Bt(e.left,n)),e.right&&(n=Bt(e.right,n)),e.args&&e.args.forEach(t=>{n=Bt(t,n)}),e.operand&&(n=Bt(e.operand,n)),n),xn=e=>Qi(Bi(e)).simplify(),zr=(e,n=["z","z_1"],t=[])=>Qi(Bi(e)).simplify().toDerivative(n,t).simplify();window.tokenize=Bi;window.parse=Qi;window.ast=xn;window.vars=Bt;window.derive=zr;window.astRaw=e=>Qi(Bi(e));const t0=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},Bd=(e,n=null,t=1,r=!1)=>{if(n===null&&(n=e,e=0),t===0)throw new Error("Step cannot be zero.");if(n<e&&t>0||n>e&&t<0){if(r)return[];t=-t}return new Array(Math.ceil((n-e)/t)).fill().map((i,l)=>e+l*t)},So=(e,n)=>!Array.isArray(e)||!Array.isArray(n)?e===n:e.length!==n.length?!1:e.every((t,r)=>Array.isArray(t)?So(t,n[r]):t===n[r]),r0=["yellow_blue","rainbow","red_green","yellow_green","orange_purple","yellow_purple","pink_green","pink_yellow"],i0=["none","log","exp","distance","distance_scaled"],ri=["z","c","zc"],Nt={center:k(),point:k(),scale:k(1.2),varying:"c",usePerturbation:null,useDerivative:!0,derivative:100,useDistanceEstimate:!1,showDerivative:!1,smoothing:"log",offset:80,velocity:100,hue:0,saturation:100,lightness:100,iterations:1e3,supersampling:window.devicePixelRatio>2?window.devicePixelRatio/2:1.1,transform:[[1,0],[0,1]],f:"z^2 + c",f_prime_z:null,f_prime_c:null,f_perturb:null,palette:"yellow_blue",useRoots:!1,convergent:!1,bailin:-6,divergent:!0,bailout:2.5,showGrid:!0,gridScale:100,gridLog:!1,gridWidth:1,showNormGrid:!0,normGridScale:100,normGridLog:!0,normGridWidth:1,showArgGrid:!0,argGridScale:200,argGridLog:!1,argGridWidth:1,scaled:!1,showZeroes:!0,zeroes:-4,showPoles:!0,poles:4,shadeNorm:!0,animate:!1,speed:100,moveCenter:!0,lockCenter:!1,showPolya:!1,polya:15,polyaColor:!0,polyaLightness:120},Qd=Object.keys(Nt),Zd=["f","f_prime_z","f_prime_c","f_perturb","varying","useRoots","convergent","divergent","palette","perturb","useDerivative","showDerivative","useDistanceEstimate","smoothing","showGrid","showNormGrid","showArgGrid","gridLog","normGridLog","argGridLog","scaled","showZeroes","showPoles","shadeNorm","showPolya","polyaColor","animate"],zs={center:{type:"2fv",value:e=>e.to2fv()},point:{type:"2fv",value:e=>e.to2fv()},scale:{type:"2fv",value:e=>e.to2fv()},aspect:{type:"2fv",value:(e,n)=>[n.gl.canvas.width/n.gl.canvas.height,1/Math.max(n.gl.canvas.width,n.gl.canvas.height)]},transform:{type:"m2fv",value:e=>e.flat(1)},iterations:"1i",maxIterations:{type:"2iv",value:()=>[0,0]},orbit:{type:"1i",value:()=>0},bailin:"1f",bailout:"1f",derivative:"1f",offset:{type:"1f",value:e=>e/25},velocity:{type:"1f",value:e=>e/1e3},hue:{type:"1f",value:e=>e/360},saturation:{type:"1f",value:e=>e/100},lightness:{type:"1f",value:e=>e/100},gridScale:{type:"1f",value:e=>e/100},gridWidth:"1f",normGridScale:{type:"1f",value:e=>e/100},normGridWidth:"1f",argGridScale:{type:"1f",value:e=>e/100},argGridWidth:"1f",time:{type:"1f",value:()=>0},speed:{type:"1f",value:e=>e/1e6},zeroes:"1f",poles:"1f",polya:"1f",polyaLightness:{type:"1f",value:e=>e/100}},Yd=`#version 300 es
precision highp float;

##CONFIG

uniform vec2 center;
uniform vec2 point;
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
uniform float argGridWidth;
uniform float argGridScale;
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
  vec2 p = cmul(scale, vec2(aspect.x, 1.)) * (2. * uv - 1.);
  float BAILOUT = pow(10., bailout);
  float BAILIN = pow(10., bailin);

  #ifdef PERTURB
  vec2 z = vec2(0.);
  vec2 c = vec2(0.);
  vec2 dz = vec2(0.);
  vec2 dc = vec2(0.);
  vec2 C = point;
    #if VARYING == 0 || VARYING == 2
  dz += p; // Mandelbrot-like
  dz *= transform;
    #endif
    #if VARYING == 1 || VARYING == 2
  dc += p; // Julia-like
  dc *= transform;
    #endif
  vec2 dz_1 = vec2(0.);
  #else
  vec2 z = center;
  vec2 c = point;
    #if VARYING == 0 || VARYING == 2
  z += p; // Mandelbrot-like
  z *= transform;
    #endif
    #if VARYING == 1 || VARYING == 2
  c += p; // Julia-like
  c *= transform;
    #endif
  #endif

  vec2 z_1 = vec2(0.);
  vec2 z_2 = vec2(0.);

  #if defined(USE_DERIVATIVE) || SMOOTHING >= 3
  float zdzmax = exp(-derivative * .15);
    #ifdef FIXED// Mandelbrot-like
  vec2 zdc = vec2(0., 0.);
    #else // Julia-like
  vec2 zdc = vec2(1., 0.);
    #endif
  vec2 zdz = vec2(1., 0.);

  vec2 zdc_1 = vec2(0., 0.);
  vec2 zdz_1 = vec2(0., 0.);
  #endif

  #ifdef PERTURB
  int m = 0;
  bool shift = true;
  int max = maxIterations.y;
  vec2 Z = fetchRef(m, shift);
  z = Z + dz;
  c = C + dc;
  #endif

  #if SMOOTHING == 2
  float zexp = 0.;
  #endif

  vec3 col = vec3(0.);
  for(int i = 0; i < iterations; i++) {
    #if defined(USE_DERIVATIVE) || SMOOTHING >= 3
    vec2 zdct = zdc;
    zdc = F_prime_c(z, c, zdc, zdc_1);
    zdc_1 = zdct;
    #endif

    vec2 zt = z;
    #ifdef PERTURB
    vec2 dzt = dz;
    dz = F(Z, dz, dc);
    dz_1 = dzt;
    m++;
    Z = fetchRef(m, shift);
    z = Z + dz;
    #else
    z = F(z, c);
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
    if(zdzzdz < zdzmax) {
      #ifdef SHOW_DERIVATIVE
      float n = float(i) + 1.;
      #if SMOOTHING == 1
      // n -= log2(1. / log2(1. / zdzzdz));
      #elif SMOOTHING == 2
      n = 10. * zexp;
      #endif
      col = color(n, .5 + k);
      #endif
      break;
    }
    #endif

    #ifdef CONVERGENT
    float z_z_1 = dot2(z - z_1);
    if(z_z_1 < BAILIN) {
      float n = float(i);
      float r = 0.;
      #ifdef USE_ROOTS
      if(abs(z.y) < BAILIN) {
        z.y = 0.;
        if(abs(z.x) < BAILIN) {
          z.x = 0.;
        }
      }
      float l = length(z);
      if(l > .002) {
        r = (mod(atan(z.y, z.x) + l * TAU, TAU)) / (TAU);
      }
      #endif

      #if SMOOTHING == 1
      float diff = dot2(z - z_1);
      float prev = dot2(z_1 - z_2);
      n += log(BAILIN / prev) / log(diff / prev);
      #elif SMOOTHING == 2
      n = 10. * zexp;
      #elif SMOOTHING >= 3
      float d = sqrt(dot(z, z) / dot(zdc, zdc)) * .5 * log(dot(z, z));
        #if SMOOTHING == 4
      d /= scale.x;
        #endif
      n = 130. / pow(d, .02);
      #endif
      col = color(n, r + k);
      break;
    }
    #endif

    #ifdef DIVERGENT
    float zz = dot(z, z);
    if(zz > BAILOUT) {
      float n = float(i);
      float r = 0.;
      #ifdef USE_ROOTS
      r = carg(z) / (cnorm(z) * TAU);
      #endif

      // Smooth iteration count
      #if SMOOTHING == 1
      n -= log2(log2(zz)) - 4.0;
      #elif SMOOTHING == 2
      n = 10. * zexp;
      #elif SMOOTHING >= 3
      float d = sqrt(zz / dot(zdc, zdc)) * .5 * log(zz);
        #if SMOOTHING == 4
      d /= scale.x;
        #endif
      n = 130. / pow(d, .02);
      #endif

      col = color(n, r + k);
      break;
    }
    #endif

    #if !defined(CONVERGENT) && !defined(DIVERGENT)
    // Domain coloring of z:
    float h = (atan(z.y, z.x)) / TAU;
    float lz = length(z);
      #ifdef SCALED
    lz /= sqrt(dot2(scale));
      #endif
    float ll = log2(lz);
    float l = 1. - .7 * aafract(ll + k);
    // float l = 2. * atan(length(z)) / PI;
      #if !defined(SHOW_POLYA) || defined(POLYA_COLOR)
    col = color((h + k) * 100.);
      #endif

      #ifdef SHADE_NORM
    col *= l;
      #endif
    //     #if AMBIANCE == 2 || AMBIANCE == 3
    // res *= scale * scale;
    //     #endif
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
        #ifdef NORM_GRID_LOG
    float ng = ll;
        #else
    float ng = lz;
        #endif
    float dl = fract((ng + k) * normGridScale);
    dl = min(dl, 1. - dl);
    dl /= fwidth(ng) * normGridScale / 2.;
    col = mix(col, vec3(1.), smoothstep(normGridWidth * 3., 0., dl));
      #endif

      #ifdef SHOW_ARG_GRID
        #ifdef ARG_GRID_LOG
    float ag = log2(abs(h));
        #else
    float ag = h;
        #endif
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

        #ifdef SHOW_POLYA
    float size = 2. / polya;
          #ifdef SCALED
    size *= scale.x;
          #endif

    vec2 ztile = (floor(z_1 / size) + 0.5) * size;
    vec2 zp = conj(F(z_1, c));
    vec2 zr = conj(F(ztile, c));

    vec2 p = z_1 - ztile;
    float shade = 1.;
          #ifdef ANIMATE
    shade = 1. - smoothstep(size * .3, size * .5, length(p));
          #endif

    float arrow = 0.;
    float base = length(zr) * .1;
    float len = clamp(base, .08, .35);
    float angle = atan(zp.y, zp.x);

    p = opRotate(p, angle);

    float sc = 1. / size;
    p *= sc;
          #ifdef ANIMATE
    p.x += k * base * 25.;
    float r = min(.35 / len, 2.);
    p.x -= round(p.x * r) / r;
          #endif
    arrow = sdArrow(p, vec2(-len, 0.), vec2(len, 0.), .02, .08, 2.);
    arrow /= sc;
    vec3 arrowColor = col + polyaLightness - 1.;
          #ifndef POLYA_COLOR
    float al = log2(base + .1);
    arrowColor = color(al * 5.);
          #endif

    float aaa = .003 * scale.x;
    col = mix(col, arrowColor, shade * (1.0 - smoothstep(0.0, aaa, arrow)));
        #endif

    break;
    #endif

    #ifdef PERTURB
    // Rebasing
    if(dot(z, z) < dot(dz, dz) || m >= max) {
      dz = z;
      m = 0;
      max = maxIterations.x;
      shift = false;
      Z = fetchRef(m, shift);
    }
    #endif
  }

  fragColor = vec4(col, 1.0);
}
`,Xd=`const float PI = 3.1415926535897932384626433832795;
const float TAU = 6.283185307179586476925286766559;
const float ETA = 1.5707963267948966192313216916398;
const float PHI = 1.6180339887498948482045868343656;

const vec2 c1 = vec2(1., 0.);
const vec2 ci = vec2(0., 1.);

vec3 hsl2rgb(in vec3 c) {
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

float dot2(in vec2 z) {
  return dot(z, z);
}

vec2 cadd(in vec2 z0, in vec2 z1) {
  return z0 + z1;
}
vec2 cadd(in vec2 z, in float w) {
  return z + vec2(w, 0.);
}
vec2 cadd(in float k, in vec2 w) {
  return vec2(k, 0.) + w;
}
float cadd(in float k, in float w) {
  return k + w;
}

vec2 csub(in vec2 z0, in vec2 z1) {
  return z0 - z1;
}
vec2 csub(in vec2 z, in float w) {
  return z - vec2(w, 0.);
}
vec2 csub(in float k, in vec2 w) {
  return vec2(k, 0.) - w;
}
float csub(in float k, in float w) {
  return k - w;
}

vec2 cmul(in vec2 z, in vec2 w) {
  return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}
vec2 cmul(in vec2 z, in float k) {
  return k * z;
}
vec2 cmul(in float k, in vec2 w) {
  return k * w;
}
float cmul(in float k, in float w) {
  return k * w;
}

vec2 cinv(in vec2 z) {
  return z * vec2(1, -1) / dot(z, z);
}
vec2 cdiv(in vec2 z0, in vec2 z1) {
  return cmul(z0, cinv(z1));
}
vec2 cdiv(in vec2 z0, in float k) {
  return z0 / k;
}
vec2 cdiv(in float k, in vec2 w) {
  return k * cinv(w);
}
float cdiv(in float k, in float w) {
  return k / w;
}

vec2 conj(in vec2 z) {
  return vec2(z.x, -z.y);
}
float conj(in float k) {
  return k;
}

vec2 expi(in float x) {
  return vec2(cos(x), sin(x));
}
vec2 cexp(in vec2 z) {
  return exp(z.x) * expi(z.y);
}
float cexp(in float k) {
  return exp(k);
}

float cnorm(in vec2 z) {
  return length(z);
}
float cnorm(in float k) {
  return abs(k);
}
float carg(in vec2 z) {
  return atan(z.y, z.x);
}
float carg(in float k) {
  return sign(k) * ETA;
}

vec2 csqrt(in vec2 z) {
  float r = length(z);
  return vec2(sqrt(0.5 * (r + z.x)), sign(z.y) * sqrt(0.5 * (r - z.x)));
}
float csqrt(in float k) {
  return sqrt(k);
}

vec2 clog(in vec2 z) {
  return vec2(log(length(z)), atan(z.y, z.x));
}
float clog(in float k) {
  return log(k);
}

vec2 ccos(in vec2 z) {
  return vec2(cos(z.x) * cosh(z.y), -sin(z.x) * sinh(z.y));
}
float ccos(in float k) {
  return cos(k);
}

vec2 csin(in vec2 z) {
  return vec2(sin(z.x) * cosh(z.y), cos(z.x) * sinh(z.y));
}
float csin(in float k) {
  return sin(k);
}

vec2 ctan(in vec2 z) {
  return cdiv(csin(z), ccos(z));
}
float ctan(in float k) {
  return tan(k);
}

vec2 cacos(in vec2 z) {
  return cmul(-ci, clog(cadd(z, cmul(ci, csqrt(csub(c1, cmul(z, z)))))));
}
float cacos(in float k) {
  return acos(k);
}

vec2 casin(in vec2 z) {
  return cmul(-ci, clog(cadd(cmul(z, ci), csqrt(csub(c1, cmul(z, z))))));
}
float casin(in float k) {
  return asin(k);
}

vec2 catan(in vec2 z) {
  return cmul(ci * .5, clog(cdiv(cadd(ci, z), csub(ci, z))));
}
float catan(in float k) {
  return atan(k);
}

vec2 ccosh(in vec2 z) {
  return cdiv(cadd(cexp(z), cexp(cmul(-ci, z))), 2.0);
}
float ccosh(in float k) {
  return cosh(k);
}

vec2 csinh(in vec2 z) {
  return cdiv(cexp(z) - cexp(cmul(-ci, z)), 2.0);
}
float csinh(in float k) {
  return sinh(k);
}

vec2 ctanh(in vec2 z) {
  return cdiv(csinh(z), ccosh(z));
}
float ctanh(in float k) {
  return tanh(k);
}

vec2 cacosh(in vec2 z) {
  return clog(cadd(z, csqrt(csub(cmul(z, z), c1))));
}
float cacosh(in float k) {
  return acosh(k);
}

vec2 casinh(in vec2 z) {
  return clog(cadd(z, csqrt(cadd(cmul(z, z), c1))));
}
float casinh(in float k) {
  return asinh(k);
}

vec2 catanh(in vec2 z) {
  return cmul(vec2(0.5, 0.), clog(cdiv(cadd(c1, z), csub(c1, z))));
}
float catanh(in float k) {
  return atanh(k);
}

vec2 cpow(in vec2 z, in vec2 k) {
  return cexp(cmul(k, clog(z)));
}
float cpow(in float z, in float k) {
  return pow(z, k);
}
vec2 cpow(in float k, in vec2 z) {
  return cpow(vec2(k, 0.), z);
}
vec2 cpow(in vec2 z, in float k) {
  return cexp(k * clog(z));
}
vec2 cpow(in vec2 z, in int k) {
  vec2 w = vec2(1., 0.);
  if(abs(k) > 10) {
    return cpow(z, float(k));
  }
  if(k < 0) {
    z = cinv(z);
    k = -k;
  }
  for(int i = 0; i < k; i++) {
    w = cmul(w, z);
  }
  return w;
}

// Fast integer power functions
vec2 cpow0(in vec2 z) {
  return vec2(1., 0.);
}
float cpow0(in float z) {
  return 1.;
}
vec2 cpow1(in vec2 z) {
  return z;
}
float cpow1(in float z) {
  return z;
}
vec2 cpow2(in vec2 z) {
  return cmul(z, z);
}
float cpow2(in float z) {
  return z * z;
}
vec2 cpow3(in vec2 z) {
  return cmul(z, cpow2(z));
}
float cpow3(in float z) {
  return cmul(z, cpow2(z));
}
vec2 cpow4(in vec2 z) {
  return cmul(cpow2(z), cpow2(z));
}
float cpow4(in float z) {
  return cmul(cpow2(z), cpow2(z));
}
vec2 cpow5(in vec2 z) {
  return cmul(z, cpow4(z));
}
float cpow5(in float z) {
  return cmul(z, cpow4(z));
}
vec2 cpow6(in vec2 z) {
  return cpow2(cpow3(z));
}
float cpow6(in float z) {
  return cpow2(cpow3(z));
}
vec2 cpow7(in vec2 z) {
  return cmul(z, cpow6(z));
}
float cpow7(in float z) {
  return cmul(z, cpow6(z));
}
vec2 cpow8(in vec2 z) {
  return cpow2(cpow4(z));
}
float cpow8(in float z) {
  return cpow2(cpow4(z));
}
vec2 cpow9(in vec2 z) {
  return cmul(z, cpow8(z));
}
float cpow9(in float z) {
  return cmul(z, cpow8(z));
}
// https://www.ils.uec.ac.jp/~dima/BOOK/443.pdf

vec2 catania(in vec2 z) {
  return cadd(z, csub(clog(z), vec2(1., 0.)));
}
vec2 cataniad(in vec2 z) {
  return cadd(vec2(1., 0.), cinv(z));
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
  res = cadd(res, vec2(1., 0.));
  for(int i = 0; i < 4; i++) {
    res = cadd(res, cdiv(csub(z, catania(res)), cataniad(res)));
  }
  return res;
}
vec2 ctanianega(vec2 z) {
  vec2 res = cexp(cadd(csub(z, cexp(z)), vec2(1., 0.)));
  for(int i = 0; i < 5; i++) {
    res = cadd(res, cdiv(csub(z, catania(res)), cataniad(res)));
  }
  return res;
}
vec2 ctaniabig(vec2 z) {
  vec2 res = cadd(csub(z, -clog(z)), vec2(1., 0.));
  for(int i = 0; i < 4; i++) {
    res = cadd(res, cdiv(csub(z, catania(res)), cataniad(res)));
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

  for(int i = 0; i < 4; i++) {
    res = cadd(res, cdiv(csub(z, catania(res)), cataniad(res)));
  }
  return res;
}
vec2 ctania(in vec2 z) {
  if(abs(z.y) < PI && z.x < -2.51) {
    return ctanianega(z);
  }
  if(cnorm(z) > 7. || z.x > 3.8) {
    return ctaniabig(z);
  }
  if(z.y > .7) {
    return ctanias(z);
  }
  if(z.y < -.7) {
    return conj(ctanias(conj(z)));
  }
  return ctaniatay(z);
}

vec2 ctaniad(in vec2 z) {
  vec2 t = ctania(z);
  return cdiv(t, cadd(vec2(1., 0.), t));
}

vec2 cdoya(in vec2 z, in float n) {
  return ctania(cadd(vec2(int(n), 0.), catania(z)));
}
vec2 cdoya(in vec2 z) {
  return cdoya(z, 1.);
}

vec2 cfilog(in vec2 z) {
  return cdiv(ctania(csub(clog(z), vec2(1., PI))), -z);
}
// https://www.ams.org/journals/mcom/2009-78-267/S0025-5718-09-02188-7/S0025-5718-09-02188-7.pdf
vec2 cfima(in vec2 z) {
  // if(z.y <= 4. + .2379 * z.x) {
  //   return cexp(cfima(csub(z, vec2(1., 0.))));
  // }
  int shift = 0;
  for(; shift < 250; shift++) {
    if(z.y > 4. + .2379 * z.x) {
      break;
    }
    z.x -= 1.;
  }
  vec2 a0 = vec2(0.31813150520476413531, 1.33723570143068940890);
  vec2 a1 = vec2(1., 0.);
  vec2 a2 = .5 * cinv(csub(a0, a1));
  vec2 a3 = cdiv(cadd(a2, vec2(1. / 6., 0.)), csub(cmul(a0, a0), vec2(1., 0.)));
  vec2 a4 = cdiv(cadd(a2 * .5, cadd(cmul(a2, a2) * .5, cadd(a3, 1. / 24.))), csub(cmul(a0, cmul(a0, a0)), vec2(1., 0.)));
  vec2 a5 = cdiv(cadd(cmul(a2, a2) * .5, cadd(a2 / 6., cadd(cmul(a2, a3), cadd(a3 * .5, cadd(a4, 1. / 120.))))), csub(cmul(a0, cmul(a0, cmul(a0, a0))), vec2(1., 0.)));
  vec2 R = vec2(1.0779614375278, -.9465409639479);
  vec2 b = vec2(0.12233176, 0.02366108);
  vec2 e = cexp(cadd(cmul(a0, z), R));
  vec2 Li = vec2(0., TAU);

  vec2 res = cadd(a0, cmul(e, cadd(a1, cmul(e, cadd(a2, cmul(e, cadd(a3, cmul(e, cadd(a4, cmul(e, a5))))))))));
  res = cadd(res, cmul(b, cexp(cmul(Li, z))));

  for(int i = 0; i < shift; i++) {
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
  for(int shift = 0; shift < 25; shift++) {
    if(z.x > .5) {
      z.x -= 1.;
      fexp++;
    } else if(z.x < -.5) {
      z.x += 1.;
      flog++;
    } else {
      break;
    }
  }
  if(z.x < -.5) {
    z.x = -.5;
  }

  vec2[] t = vec2[](vec2(0.37090658903228507226, 1.33682167078891400713), vec2(0.03660096537598455518, 0.13922215389950498565), vec2(-0.16888431840641535131, 0.09718533619629270148), vec2(-0.12681315048680869007, -0.11831628767028627702), vec2(0.04235809310323926380, -0.10520930088320722129), vec2(0.05848306393563178218, -0.00810224524496080435), vec2(0.02340031665294847393, 0.01807777011820375229), vec2(0.00344260984701375092, 0.01815103755635914459), vec2(-0.00803695814441672193, 0.00917428467034995393), vec2(-0.00704695528168774229, -0.00093958506727472686), vec2(-0.00184617963095305509, -0.00322342583181676459), vec2(0.00054064885443097391, -0.00189672061015605498), vec2(0.00102243648088806748, -0.00055968657179243165), vec2(0.00064714396398048754, 0.00025980661935827123), vec2(0.00010444455593372213, 0.00037199472598828116), vec2(-0.00011178535404343476, 0.00016786687552190863), vec2(-0.00010630158710808594, 0.00002072200033125881), vec2(-0.00005078098819110608, -0.00003575913005741248), vec2(-0.00000314742998690270, -0.00003523185937587781), vec2(0.00001347661344130504, -0.00001333034137448205), vec2(0.00000980239082395275, 0.00000047607184151673), vec2(0.00000355493475454698, 0.00000389816212201278), vec2(-0.00000021552652645735, 0.00000296273413237997), vec2(-0.00000131673903627820, 0.00000097381354534333), vec2(-0.00000083401960806066, -0.00000018663858711081), vec2(-0.00000022869610981361, -0.00000037497716770031), vec2(0.00000005372584613379, -0.00000023060136585176), vec2(0.00000011406656653786, -0.00000006569510293486), vec2(0.00000006663595460757, 0.00000002326630571343), vec2(0.00000001396786846375, 0.00000003315118300198), vec2(-0.00000000684890556421, 0.00000001713041981611), vec2(-0.00000000916619598268, 0.00000000403886083652), vec2(-0.00000000502933384276, -0.00000000222121299478), vec2(-0.00000000084484352792, -0.00000000273668661113), vec2(0.00000000070086729861, -0.00000000124687683156), vec2(0.00000000070558101710, -0.00000000021962577544), vec2(0.00000000035900951951, 0.00000000018774741308), vec2(0.00000000005248658571, 0.00000000021201177126), vec2(-0.00000000006264758835, 0.00000000009059171879), vec2(-0.00000000005333473585, 0.00000000001006078866), vec2(-0.00000000002432138144, -0.00000000001506937008), vec2(-0.00000000000331880379, -0.00000000001544700067), vec2(0.00000000000501652570, -0.00000000000658967459), vec2(0.00000000000401214135, -0.00000000000036708383), vec2(0.00000000000158629111, 0.00000000000119885992), vec2(0.00000000000019668766, 0.00000000000106532662), vec2(-0.00000000000036355730, 0.00000000000047229527), vec2(-0.00000000000029920206, 0.00000000000001251827), vec2(-0.00000000000010305550, -0.00000000000009571381), vec2(-0.00000000000000910369, -0.00000000000007087680), vec2(0.00000000000002418310, -0.00000000000003240337));

  vec2 res = t[0];
  vec2 zn_3i = vec2(1., 0.);
  vec2 z_3i = csub(z, vec2(0., 3.)) * .5;

  for(int i = 1; i < 51; i++) {
    zn_3i = cmul(zn_3i, z_3i);
    res = cadd(res, cmul(t[i], zn_3i));
  }

  for(int i = 0; i < flog; i++) {
    res = clog(res);
  }
  for(int i = 0; i < fexp; i++) {
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
  for(int shift = 0; shift < 25; shift++) {
    if(z.x > .5) {
      z.x -= 1.;
      fexp++;
    } else if(z.x < -.5) {
      z.x += 1.;
      flog++;
    } else {
      break;
    }
  }
  if(z.x < -.5) {
    z.x = -.5;
  }

  float[] s = float[](0.30685281944005469058, 1.18353470251664338875, 1.58593285160678321155, 1.36629265207672068172, 1.36264601823980036066, 1.21734246689515424045, 1.10981816083559525765, 0.96674692974769849130, 0.84089872598668435888, 0.71353210966804747617, 0.60168548504001373445, 0.49928574281440518678, 0.41140086629121763728, 0.33506195665178500898, 0.27104779243942234146, 0.21728554054610033086, 0.17311050207880035456, 0.13690016038526570119, 0.10765949732729711286, 0.08413804539743192923, 0.06542450487497340761, 0.05060001212013485322, 0.03895655493977817629, 0.02985084640296329153, 0.02277908979501017117, 0.01730960309240666892, 0.01310389615589767874, 0.00988251130733762764, 0.00742735935367278347, 0.00556296426263720549, 0.00415334478103463346, 0.00309116153137843543, 0.00229387529664008653, 0.00169729976398295653, 0.00125245885041635465, 0.00092172809095368547, 0.00067661152429638357, 0.00049544127485341987, 0.00036192128589181518, 0.00026376927786672476, 0.00019180840045267570, 0.00013917553105723647, 0.00010077412023867018, 0.00007281884753121133, 0.00005251474516228446, 0.00003779882770351268, 0.00002715594536867241, 0.00001947408515177282, 0.00001394059355016322, 0.00000996213949015693, 0.00000710713872292710, 0.00000506199803708578, 0.00000359960968975399, 0.00000255569149787694, 0.00000181175810338313, 0.00000128245831538430, 0.00000090647322737496, 0.00000063980422418981, 0.00000045095738191441, 0.00000031741772125007, 0.00000022312521183625, 0.00000015663840476155, 0.00000010982301013230, 0.00000007690305934973, 0.00000005378502675604, 0.00000003757126131521, 0.00000002621429405247, 0.00000001826909956818, 0.00000001271754463425, 0.00000000884310192977, 0.00000000614230041407, 0.00000000426177146865, 0.00000000295386817285, 0.00000000204522503591, 0.00000000141464900426, 0.00000000097750884878, 0.00000000067478454029, 0.00000000046535930671, 0.00000000032062550784, 0.00000000022069891976, 0.00000000015177557961, 0.00000000010428189463, 0.00000000007158597119, 0.00000000004909806710, 0.00000000003364531769, 0.00000000002303635851, 0.00000000001575933679, 0.00000000001077213757, 0.00000000000735717912, 0.00000000000502077719, 0.00000000000342362421, 0.00000000000233271256, 0.00000000000158818623, 0.00000000000108046566, 0.00000000000073450488, 0.00000000000049894945, 0.00000000000033868911, 0.00000000000022973789, 0.00000000000015572383, 0.00000000000010548054, 0.00000000000007139840, 0.00000000000004829557, 0.00000000000003264619, 0.00000000000002205299, 0.00000000000001488731, 0.00000000000001004347, 0.00000000000000677124, 0.00000000000000456225, 0.00000000000000307196, 0.00000000000000206720, 0.00000000000000139022, 0.00000000000000093437, 0.00000000000000062762, 0.00000000000000042133, 0.00000000000000028267, 0.00000000000000018954, 0.00000000000000012701, 0.00000000000000008507, 0.00000000000000005694, 0.00000000000000003809);
  vec2 res = cadd(clog(cadd(z, vec2(2., 0.))), vec2(s[0], 0.));
  vec2 zn = vec2(1., 0.);

  for(int i = 1; i < 120; i++) {
    zn = cmul(zn, .5 * z);
    res = cadd(res, cmul(vec2(s[i], 0.), zn));
  }

  for(int i = 0; i < flog; i++) {
    res = clog(res);
  }
  for(int i = 0; i < fexp; i++) {
    res = cexp(res);
  }
  return res;
}

vec2 ctet(in vec2 z) {
  // e^^z
  if(z.y > 4.5) {
    return cfima(z);
  } else if(z.y > 1.5) {
    return ctai(z);
  } else if(z.y > -1.5) {
    return cmaclo(z);
  } else if(z.y > -4.5) {
    return conj(ctai(conj(z)));
  }
  return conj(cfima(conj(z)));
}

vec2 cate(in vec2 z) {
  vec2 shift = vec2(0.);

  for(int i = 0; i < 25; i++) {
    if(abs(z.y) > 1.3372357014306895) {
      z = clog(z);
      shift.x++;
    } else if(z.x > 2.) {
      shift.x++;
      z = clog(z);
    } else if(z.x < 0.31813150520476413) {
      shift.x--;
      z = cexp(z);
    } else if(cnorm(csub(clog(z), vec2(1., 0.))) < cnorm(csub(z, vec2(1., 0.)))) {
      z = clog(z);
      shift.x++;
    } else {
      break;
    }
  }

  float[] u = float[](1.4192252155045112363, -0.05213258059503801667, 0.00693219127232187586, -0.00015617045803377859, -0.00100912103192385785, 0.00082172671942507903, -0.00035776641706493177, -0.00000931803078422933, 0.00016678111348857047, -0.00014181446429806932, 0.00003186488716454018, 0.00006022937595596333, -0.00007769822429012910, 0.00002881816919640196, 0.00003346765914794806, -0.00005635940084759932, 0.00002613708927959275, 0.00002533341053138444, -0.00005010441151688034, 0.00002593810263640952, 0.00002404611936084357, -0.00005163238246428602, 0.00002794638872473000, 0.00002700739592764804, -0.00005939035114511979, 0.00003210955504312860, 0.00003438232223525011, -0.00007428278434380886, 0.00003866302665809861, 0.00004803799918127077, -0.00009914141292927652, 0.00004800025436154043, 0.00007191960183392704, -0.00013922522917537457, 0.00006043126908005670, 0.00011338211995240744, -0.00020351111316586852, 0.00007562971718596908, 0.00018585637209671475, -0.00030700846364341576, 0.00009132512919756623, 0.00031386108850653502, -0.00047464470561729965, 0.00010030770871287629, 0.00054232170050706079, -0.00074759603610534669, 0.00008375204845585605, 0.00095389423083896800, -0.00119336225449479362, -0.00000327383738614825, 0.00170107934819055851, -0.00192109516273315209, -0.00026290310001950487, 0.00306590657916818192, -0.00310372506294090238, -0.00091982425407694250, 0.00556979490215834833, -0.00500546835451257978, -0.00245869651201214212, 0.01017705593773498771, -0.00800820238034244403, -0.00590649361431362999, 0.01866321477729812259, -0.01260156096677063874, -0.01341963601206602220, 0.03429254345271898208, -0.01926894593144593687, -0.02946277663641767158, 0.06300065960337521143, -0.02800532706641396460, -0.06325609033757989552, 0.11556117355587923468, -0.03708367328869965895, -0.13352664223772733876, 0.21104853030721187901, -0.03941069742436464907, -0.27853504829255953945, 0.38331715278474703945, -0.01491397058539710788, -0.57446133459038406510, 0.68905734940479856920, 0.09065013779953061401, -1.17542205931169707611, 1.22536662105515059551, 0.40500835675024698945, -2.37977019901803332758, 2.13411821810153146117, 1.24184396615612624437, -4.78947531960227212977, 3.64093109251482172084, 3.27095016057312193425, -9.53051815711462246838, 5.92750355113636295812, 8.12068845726284394004, -18.89123486907114468636, 9.07245090167984002960, 18.99435214920948311601, -36.62201395750987842348, 12.69160696640316032813, 43.73569046442687380249, -71.43155879446639744401, 14.83661067193675719977, 95.94011857707508283966, -135.28537549407113260713, 4.55415019762845751927, 212.46383399209483400227, -258.45286561264816782568, -34.35533596837944259050, 440.37608695652170354151, -466.49328063241102881875, -184.78893280632408391284, 969.10988142292478642048, -888.80079051383393107244, -485.21897233201576682404, 1912.15652173913008482486, -1381.80553359683767666866, -1490.15335968379417863616, 4216.82213438735107047250, -2565.99525691699591334327, -3155.47826086956501967506, 7689.57470355731129529886, -3206.47588932806274897303, -8547.41501976284416741692, 17971.70592885375299374573, -7203.41501976284507691162, -16388.65454545454485923983, 28589.12885375493715400808, -2355.80711462450562976301);

  vec2 a0 = vec2(0.31813150520476413531, 1.33723570143068940890);
  vec2 ac = conj(a0);

  vec2 res = vec2(0.);
  vec2 z_1 = csub(z, vec2(1., 0.)) * .5;

  for(int i = 127; i > 0; i--) {
    res = cadd(res, vec2(u[i], 0.));
    res = cmul(res, z_1);
  }

  res = cadd(res, vec2(u[0], 0.));
  res = cadd(res, cdiv(clog(csub(z, a0)), a0));
  res = cadd(res, cdiv(clog(csub(z, ac)), ac));
  res = cadd(res, shift);
  return res;
}

vec2 cate(in float k) {
  return cate(vec2(k, 0.));
}

vec2 ctetranat(in vec2 z, in vec2 w) {
  return ctet(w + cate(z));
}
vec2 ctetranat(in float k, in vec2 w) {
  return ctetranat(vec2(k, 0.), w);
}
vec2 ctetranat(in vec2 z, in float w) {
  return ctetranat(z, vec2(w, 0.));
}
vec2 ctetranat(in float k, in float w) {
  return ctetranat(vec2(k, 0.), vec2(w, 0.));
}

vec2 ctetranat(in vec2 z) {
  return ctetranat(z, 1.);
}
vec2 ctetra(in vec2 z, in int n) {
  vec2 w = vec2(1., 0.);
  for(int i = 0; i < n; i++) {
    w = cpow(z, w);
  }
  return w;
}

float ctetra(in float z, in int n) {
  float k = 1.;
  for(int i = 0; i < n; i++) {
    k = pow(z, k);
  }
  return k;
}

vec2 ctetra(in vec2 z, in float n) {
  return ctetra(z, int(n));
}

void sncndn(float u, float k2, out float sn, out float cn, out float dn) {
  float emc = 1.0 - k2;
  float a, b, c;
  const int N = 4;
  float em[N], en[N];
  a = 1.0;
  dn = 1.0;
  for(int i = 0; i < N; i++) {
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
  if(sn != 0.0) {
    a = cn / sn;
    c = a * c;
    for(int i = N - 1; i >= 0; i--) {
      b = em[i];
      a = c * a;
      c = dn * c;
      dn = (en[i] + a) / (b + a);
      a = c / b;
    }
    a = 1.0 / sqrt(c * c + 1.0);
    if(sn < 0.0)
      sn = -a;
    else
      sn = a;
    cn = c * sn;
  }
}

vec2 csn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(snu * dnv, cnu * dnu * snv * cnv);
}

vec2 ccn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(cnu * cnv, -snu * dnu * snv * dnv);
}

vec2 cdn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(dnu * cnv * dnv, -k2 * snu * cnu * snv);
}

vec2 csn(vec2 z) {
  return csn(z, .8);
}
vec2 ccn(vec2 z) {
  return ccn(z, .8);
}
vec2 cdn(vec2 z) {
  return cdn(z, .8);
}

vec2 czeta(in vec2 z) {
  vec2 sum = vec2(0);
  for(float i = 1.; i < 30.; ++i) {
    sum += sin(-z.y * log(i) - vec2(ETA, 0.)) / pow(i, z.x);
  }
  return sum;
}

vec2 cdzeta(in vec2 z) {
  vec2 sum = vec2(0);
  for(float i = 1.; i < 30.; ++i) {
    sum += -log(i) * cos(-z.y * log(i) - vec2(ETA, 0.)) / pow(i, z.x);
  }
  return sum;
}

vec2 czeta(in vec2 z, in vec2 a) {
  // Hurwitz Zeta function
  return czeta(z + a) - czeta(z);

}
vec2 czeta(in vec2 z, in float a) {
  return czeta(z, vec2(a, 0.));
}
vec2 czeta(in float k, in vec2 a) {
  return czeta(vec2(k, 0.), a);
}

vec2 cgamma(in vec2 z) {
  float LG = 5.65;
  float[] P = float[](2.506628275635, 225.525584619175, -268.295973841305, 80.9030806934622, -5.007578639705, 0.0114684895435);

  vec2 zz = (z.x > 1.0) ? (z) : (vec2(1.0, 0.0) - z);
  vec2 sum = vec2(P[0], 0.0) + P[1] * cinv(zz + vec2(1.0, 0.0)) + P[2] * cinv(zz + vec2(2.0, 0.0)) + P[3] * cinv(zz + vec2(3.0, 0.0)) + P[4] * cinv(zz + vec2(4.0, 0.0)) + P[5] * cinv(zz + vec2(5.0, 0.0));
  vec2 zh = zz + vec2(LG, 0.0);
  vec2 w = cexp(clog(sum) + cmul(zz + vec2(0.5, 0.0), clog(zh)) - clog(zz) - zh);

  return ((z.x > 1.0) ? (w) : (PI * cinv(cmul(w, csin(PI * z)))));
}

vec2 _cpsi_asymptotic(in vec2 z) {
  // Digamma function
  float[] B = float[](0.166666666666666667, -0.0333333333333333333, 0.0238095238095238095, -0.0333333333333333333, 0.0757575757575757576, -0.253113553113553114, 1.16666666666666667, -7.09215686274509804, 54.9711779448621554, -529.124242424242424, 6192.12318840579710, -86580.2531135531136, 1425517.16666666667, -27298231.0678160920, 601580873.900642368, -15116315767.0921569);
  vec2 rzz = cdiv(cinv(z), z);
  vec2 zfac = vec2(1., 0.);
  vec2 term = vec2(0.);
  vec2 res = csub(clog(z), .5 * cinv(z));

  for(int i = 1; i < 17; i++) {
    zfac = cmul(zfac, rzz);
    term = -cmul(B[i - 1], zfac / (2. * float(i)));
    res = cadd(res, term);
    if(cnorm(term) < 2.220446092504131e-16 * cnorm(res)) {
      break;
    }
  }
  return res;
}
vec2 _forward_rec(in vec2 z, in vec2 s, in int n) {
  vec2 res = s;
  for(int i = 0; i < n; i++) {
    res = cadd(res, cinv(cadd(z, vec2(float(i), 0.))));
  }
  return res;
}
vec2 _backward_rec(in vec2 z, in vec2 s, in int n) {
  vec2 res = s;
  for(int i = 1; i < n + 1; i++) {
    res = csub(res, cinv(csub(z, vec2(float(i), 0.))));
  }
  return res;
}

vec2 cpsi(in vec2 z) {
  float absz = cnorm(z);
  vec2 res = vec2(0.);
  float smallabsz = 14.;

  if(z.x < 0. && abs(z.y) < smallabsz) {
    res = csub(res, PI * cdiv(ccos(PI * z), csin(PI * z)));
    z = csub(vec2(1., 0.), z);
    absz = cnorm(z);
  }

  if(absz < 0.5) {
    res = csub(res, cinv(z));
    z = cadd(vec2(1., 0.), z);
    absz = cnorm(z);
  }

  if(absz > smallabsz) {
    res = cadd(res, _cpsi_asymptotic(z));
  } else if(z.x >= 0.) {
    int n = int(smallabsz - absz) + 1;
    res = cadd(res, _backward_rec(cadd(z, vec2(float(n), 0.)), _cpsi_asymptotic(cadd(z, vec2(float(n), 0.))), n));
  } else {
    int n = int(smallabsz - absz) - 1;
    res = cadd(res, _forward_rec(csub(z, vec2(float(n), 0.)), _cpsi_asymptotic(csub(z, vec2(float(n), 0.))), n));
  }
  return res;
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
  vec2 zk = vec2(1., 0.);

  for(float i = 0.; i < 50.; ++i) {
    term = cdiv(zk, cpow(cadd(a, vec2(float(i), 0.)), s));
    sum += term;
    if(cnorm(term) <= 1e-9 * (1. + cnorm(sum))) {
      break;
    }
    zk = cmul(zk, z);
  }
  return sum;
}

vec2 cphi(in float k, in vec2 s, in vec2 a) {
  return cphi(vec2(k, 0.), s, a);
}
vec2 cphi(in vec2 z, in float s, in vec2 a) {
  return cphi(z, vec2(s, 0.), a);
}
vec2 cphi(in vec2 z, in vec2 s, in float a) {
  return cphi(z, s, vec2(a, 0.));
}
vec2 cphi(in float k, in float s, in vec2 a) {
  return cphi(vec2(k, 0.), vec2(s, 0.), a);
}
vec2 cphi(in float k, in vec2 s, in float a) {
  return cphi(vec2(k, 0.), s, vec2(a, 0.));
}
vec2 cphi(in vec2 z, in float s, in float a) {
  return cphi(z, vec2(s, 0.), vec2(a, 0.));
}
vec2 cphi(in float k, in float s, in float a) {
  return cphi(vec2(k, 0.), vec2(s, 0.), vec2(a, 0.));
}

vec2 cfibonacci(in vec2 z) {
  // Using generalized Binet formula
  return cdiv(csub(cpow(PHI, z), cpow(-PHI, -z)), 2. * PHI - 1.);
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
`,Kd=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`,qd=(e,n)=>(n=n.replace("##CONFIG",[e.perturb&&e.f_perturb?"#define PERTURB":"",e.convergent?"#define CONVERGENT":"",e.divergent?"#define DIVERGENT":"",e.useDerivative&&e.f_prime_z&&e.f_prime_c?"#define USE_DERIVATIVE":"",e.showDerivative?"#define SHOW_DERIVATIVE":"",e.useSmoothing?"#define USE_SMOOTHING":"",e.useDistanceEstimate?"#define USE_DISTANCE_ESTIMATE":"",e.useRoots?"#define USE_ROOTS":"",e.showGrid?"#define SHOW_GRID":"",e.showNormGrid?"#define SHOW_NORM_GRID":"",e.showArgGrid?"#define SHOW_ARG_GRID":"",e.gridLog?"#define GRID_LOG":"",e.normGridLog?"#define NORM_GRID_LOG":"",e.argGridLog?"#define ARG_GRID_LOG":"",e.showPoles?"#define SHOW_POLES":"",e.showZeroes?"#define SHOW_ZEROES":"",e.shadeNorm?"#define SHADE_NORM":"",e.animate?"#define ANIMATE":"",e.scaled?"#define SCALED":"",e.showPolya?"#define SHOW_POLYA":"",e.polyaColor?"#define POLYA_COLOR":"",`#define VARYING ${ri.indexOf(e.varying)}`,`#define PALETTE ${r0.indexOf(e.palette)}`,`#define SMOOTHING ${i0.indexOf(e.smoothing)}`].filter(Boolean).join(`
`)).replace("#include includes",Xd).replace(/F\(\s*(.+?)\s*,\s*(.+?)\s*\)/g,xn(e.f).toShader().replace(/\bz\b/g,"$1").replace(/\bc\b/g,"$2")),e.f_prime_z?n=n.replace(/F_prime_z\s*\(\s*(.+?)\s*,\s*(.+?)\s*,\s*(.*?)\s*,\s*(.*?)\s*\)/g,xn(e.f_prime_z).toShader().replace(/\bz\b/g,"$1").replace(/\bc\b/g,"$2").replace(/\bz_prime\b/g,"$3").replace(/\bz_1_prime\b/g,"$4")):n=n.replace(/F_prime_z\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,"vec2(0)"),e.f_prime_c?n=n.replace(/F_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,xn(e.f_prime_c).toShader().replace(/z_prime/g,"$1").replace(/z_1_prime/g,"$2")):n=n.replace(/F_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,"vec2(0)"),e.f_perturb?n=n.replace(/F\(Z,\s*dz,\s*dc\)/g,xn(e.f_perturb).toShader()):n=n.replace(/F\(Z,\s*dz,\s*dc\)/g,"vec2(0)"),window.location.search.includes("debug")&&console.info(n.split(`
`).map((t,r)=>`${r+1}: ${t}`).join(`
`)),n),l0=(e,n,t)=>{var l;const{gl:r}=e;if(r.shaderSource(t,n),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS)){const o=r.getShaderInfoLog(t);let u=n;const s=(l=o.match(/ERROR: \d+:(\d+):/))==null?void 0:l[1];if(s){const a=parseInt(s),v=5,m=n.split(`
`),p=Math.max(0,a-v),g=Math.min(m.length,a+v);u=m.slice(p,g).map((y,z)=>(z===v-1?"=>":"  ")+y).join(`
`)}return console.error(`An error occurred compiling shader: ${o}`,u),o}},Jd=e=>{const{gl:n}=e;if(n.linkProgram(e.env.program),!n.getProgramParameter(e.env.program,n.LINK_STATUS)){const r=n.getProgramInfoLog(e.env.program);return console.error(`Unable to initialize the shader program: ${r}`),r}},o0=e=>{l0(e,Kd,e.env.vertexShader)},ws=e=>{const{gl:n}=e;l0(e,qd(e,Yd),e.env.fragmentShader),Jd(e),n.useProgram(e.env.program),e.env.uniforms=Object.keys(zs).reduce((t,r)=>(t[r]=n.getUniformLocation(e.env.program,r),t),{}),window.location.search.includes("debug")&&["f","f_prime_z","f_prime_c","f_perturb"].forEach((t,r)=>{if(!e[t])return;const i=xn(e[t]);console.info(t,i.toShader(),i.toComplex())}),s0(e)},Mu=(e,n,t)=>{let r=document.getElementById("webgl2");r||(r=document.createElement("canvas"),r.id="webgl2",document.body.insertBefore(r,document.body.firstChild));const i=r.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});if(r.addEventListener("webglcontextlost",n,!1),r.addEventListener("webglcontextrestored",t,!1),e={...e,gl:i},!i){console.error("Unable to initialize WebGL. Your browser may not support it.");return}e.env={vertexShader:i.createShader(i.VERTEX_SHADER),fragmentShader:i.createShader(i.FRAGMENT_SHADER),program:i.createProgram()},i.attachShader(e.env.program,e.env.vertexShader),i.attachShader(e.env.program,e.env.fragmentShader),o0(e),ws(e);const l=i.createTexture();return i.bindTexture(i.TEXTURE_2D,l),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,128,128,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),{...e,gl:i,textures:{orbit:l}}},s0=e=>{const{uniforms:n}=e.env;Object.entries(zs).forEach(([t,r])=>{typeof r=="string"&&(r={type:r,value:s=>s});const{type:i,value:l}=r,o=n[t];if(!o)return;const u=l(e[t],e);i.startsWith("m")?e.gl["uniformMatrix"+i.slice(1)](o,!1,u):e.gl["uniform"+i](o,u)})},bd=(e,n)=>{let t=e.clientWidth,r=e.clientHeight,i=t*n,l=r*n;if(i!==e.width||l!==e.height)return i=Math.floor(i),l=Math.floor(l),e.width=i,e.height=l,!0},Au=(e,n)=>k(e.re.multiply(n[0][0]).add(e.im.multiply(n[0][1])),e.re.multiply(n[1][0]).add(e.im.multiply(n[1][1]))),$u=(e,n,t,r,i,l)=>{const[o,u]=l?[2,3]:[0,1],s=new Function("z","c","z_1",`return ${xn(e.f).toComplex()}`),a=F(e.bailout);let v=0,m=k();for(;v<e.iterations;v++){n[v*4+o]=t.re.toNumber(),n[v*4+u]=t.im.toNumber();let p=t;if(t=s(t,r,m),m=p,t.norm2().gte(a))break}return i[l?1:0]=v,{orbit:n,max:v}},nr=e=>{if(!e.gl)return;const{gl:n}=e;if(n.uniform1f(e.env.uniforms.time,e.animate?performance.now()-e.timeref:0),bd(n.canvas,e.supersampling)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),n.uniform2fv(e.env.uniforms.aspect,[n.canvas.width/n.canvas.height,1/Math.max(n.canvas.width,n.canvas.height)])),e.perturb){const t=new Float32Array(65536),r=[0,0],i=e.varying.includes("z")?Au(e.center,e.transform):e.center,l=e.varying.includes("c")?Au(e.point,e.transform):e.point;try{$u(e,t,k(),l,r),$u(e,t,i,l,r,!0)}catch(o){console.warn(o)}n.uniform2iv(e.env.uniforms.maxIterations,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,128,128,0,n.RGBA,n.FLOAT,t)}n.drawArrays(n.TRIANGLES,0,3)};window.render=nr;const ep=(e,n)=>{const t=C.useRef(null),r=C.useRef({center:e.center,point:e.point,scale:e.scale,pointers:new Map}),i=t0(()=>{n({center:r.current.center,point:r.current.point,scale:r.current.scale})},150);C.useEffect(()=>{r.current.center=e.center},[e.center]),C.useEffect(()=>{r.current.point=e.point},[e.point]),C.useEffect(()=>{r.current.scale=e.scale},[e.scale]);const l=C.useCallback(()=>{t.current=null,nr(e)},[e]),o=C.useCallback((a,v,m,p)=>{const g=e.gl.canvas.width/e.gl.canvas.height,y=r.current.scale.multiply(2);p=!p===(m||e.moveCenter),e.varying.includes("c")===p&&(r.current.point=r.current.point.add(k(-a*g,v).multiply(y))),e.varying.includes("z")===(p||e.varying==="zc")&&(r.current.center=r.current.center.add(k(-a*g,v).multiply(y)))},[e.gl.canvas.height,e.gl.canvas.width,e.moveCenter,e.varying]),u=C.useCallback((a,v,m)=>{const p=.5-v,g=.5-m;e.lockCenter||o(p*a,g*a,!0);const y=r.current.scale.multiply(a),_=y.real().toString().match(/^-?0\.(0*)/);_&&_[1].length>y.real().precision-16&&(y.real().precision=_[1].length+16),r.current.scale=r.current.scale.subtract(y)},[o,e.lockCenter]),s=C.useCallback(()=>{e.center=r.current.center,e.point=r.current.point,e.scale=r.current.scale,e.gl.uniform2fv(e.env.uniforms.center,r.current.center.to2fv()),e.gl.uniform2fv(e.env.uniforms.point,r.current.point.to2fv()),e.gl.uniform2fv(e.env.uniforms.scale,r.current.scale.to2fv()),i(),t.current||(t.current=requestAnimationFrame(l))},[l,e.type]);C.useEffect(()=>{let a=null,v=null;const m=y=>{y.button!==0||y.target.id!=="webgl2"||r.current.pointers.set(y.pointerId,[y.clientX,y.clientY])},p=y=>{if(!r.current.pointers.has(y.pointerId))return;const z=r.current.pointers.get(y.pointerId),_=[y.clientX-z[0],y.clientY-z[1]];if(r.current.pointers.set(y.pointerId,[y.clientX,y.clientY]),r.current.pointers.size>1){const d=r.current.pointers.values(),x=d.next().value,N=d.next().value;v===null&&(v=[(x[0]+N[0])/(2*window.innerWidth),(x[1]+N[1])/(2*window.innerHeight)]);const L=Math.hypot(x[0]-N[0],x[1]-N[1]);if(a===null){a=L;return}const j=(L-a)/window.innerWidth;a=L,u(j*2,...v),s();return}const f=_[0]/window.innerWidth,c=_[1]/window.innerHeight;o(f,c,!1,y.shiftKey),s()},g=y=>{r.current.pointers.clear(),a=null,v=null};return document.addEventListener("pointerdown",m),document.addEventListener("pointermove",p),document.addEventListener("pointerup",g),()=>{document.removeEventListener("pointerdown",m),document.removeEventListener("pointermove",p),document.removeEventListener("pointerup",g)}},[o,u,s]),C.useEffect(()=>{const a=v=>{if(v.target.id!=="webgl2")return;const m=-v.deltaY/window.innerWidth,p=v.clientX/window.innerWidth,g=v.clientY/window.innerHeight;u(m,p,g),s()};return document.addEventListener("wheel",a),()=>{document.removeEventListener("wheel",a)}},[s,u])};function np({runtime:e,updateParams:n}){return ep(e,n),null}const Cl=(e,n)=>n.map(t=>e[t]),tp=(e,n)=>{C.useEffect(()=>{n(r=>({...r,perturb:r.usePerturbation===null?Math.log10(r.scale.real().toNumber())<-4.5:r.usePerturbation}))},[e.scale,e.usePerturbation,n]),C.useEffect(()=>{n(r=>(s0(r),r))},[...Cl(e,Object.keys(zs)),n]),C.useEffect(()=>{n(r=>(ws(r),r))},[...Cl(e,Zd),n]),C.useEffect(()=>{if(!e.gl.canvas)return;const r=new ResizeObserver(()=>{nr(e)});return r.observe(e.gl.canvas,{box:"content-box"}),()=>r.disconnect()},[e,e.gl.canvas]);const t=C.useRef(null);C.useEffect(()=>{if(e.animate){e.timeref=performance.now();const r=()=>{nr(e),t.current=requestAnimationFrame(r)};return r(),()=>{cancelAnimationFrame(t.current),t.current=null}}},[e.animate]),C.useEffect(()=>{n(r=>(nr(r),r))},Cl(e,Qd))};function rp({runtime:e,setRuntime:n}){return tp(e,n),null}function ip({runtime:e,setRuntime:n,updateParams:t}){var i,l;window.rt=e;const r=C.useCallback(o=>u=>{u.type=o,n(s=>({...s,error:u}))},[n]);return h.jsxs(h.Fragment,{children:[h.jsx(ju,{error:(i=e.error)==null?void 0:i.render,onError:r("render"),children:h.jsx(rp,{runtime:e,setRuntime:n})}),h.jsx(ju,{error:(l=e.error)==null?void 0:l.interact,onError:r("interact"),children:h.jsx(np,{runtime:e,updateParams:t})})]})}const lp=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h.jsx("path",{fill:"currentColor",d:"M13 6v5h5V7.75L22.25 12L18 16.25V13h-5v5h3.25L12 22.25L7.75 18H11v-5H6v3.25L1.75 12L6 7.75V11h5V6H7.75L12 1.75L16.25 6z"})}),op=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h.jsx("path",{fill:"currentColor",d:"M8 14.25L4.75 11H7c.25-5.61 2.39-10 5-10c2 0 3.77 2.64 4.55 6.45C20.36 8.23 23 10 23 12c0 1.83-2.17 3.43-5.4 4.3l.29-2.03C19.8 13.72 21 12.91 21 12c0-1.06-1.65-2-4.13-2.5c.08.79.13 1.63.13 2.5c0 6.08-2.24 11-5 11c-1.83 0-3.43-2.17-4.3-5.4l2.03.29C10.28 19.8 11.09 21 12 21c1.66 0 3-4.03 3-9c0-1-.05-1.95-.15-2.85C13.95 9.05 13 9 12 9l-1.86.06l.29-2.01L12 7c.87 0 1.71.05 2.5.13C14 4.65 13.06 3 12 3c-1.54 0-2.82 3.5-3 8h2.25zM14.25 16L11 19.25V17c-5.61-.25-10-2.39-10-5c0-1.83 2.17-3.43 5.4-4.3l-.29 2.03C4.2 10.28 3 11.09 3 12c0 1.54 3.5 2.82 8 3v-2.25z"})}),sp=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:h.jsx("path",{fill:"currentColor",d:"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"})}),up=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h.jsx("path",{fill:"currentColor",d:"M16 6v1h.75A3.25 3.25 0 0 1 20 10.25v7.5A3.25 3.25 0 0 1 16.75 21h-9.5A3.25 3.25 0 0 1 4 17.75v-7.5A3.25 3.25 0 0 1 7.25 7H8V6a4 4 0 1 1 8 0ZM9.5 6v1h5V6a2.5 2.5 0 0 0-5 0Zm2.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"})}),ap=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h.jsx("path",{fill:"currentColor",d:"M16 5a2.5 2.5 0 0 1 5 0v.25a.75.75 0 0 0 1.5 0V5a4 4 0 0 0-8 0v2H7.25A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21h9.5A3.25 3.25 0 0 0 20 17.75v-7.5A3.25 3.25 0 0 0 16.75 7H16V5Zm-4 10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"})}),u0=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),cp=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),fp=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),dp=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),pp=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h.jsx("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"})}),hp=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h.jsx("path",{fill:"currentColor",d:"M6 18V6h12v12z"})}),vp=h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h.jsx("path",{fill:"currentColor",d:"M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"})}),bn=e=>[[Math.cos(e),-Math.sin(e)],[Math.sin(e),Math.cos(e)]],ko=(e,n)=>n===0||n===e?1:ko(e-1,n-1)+ko(e-1,n),mp=(e,n,t,r=0)=>{let i="";for(let l=r;l<=t;l++){const o=ko(t,l);if(o===0)continue;const u=(p,g)=>g===0?"":g===1?p:`${p}^${g}`,s=u(e,t-l),a=u(n,l),v=s&&a?`${s} * ${a}`:s||a,m=o===1?v:`${o} * ${v}`;i?i=`${m} + ${i}`:i=m}return i},ve=(e,n,t={})=>({name:e,params:{f:`z^${n} + c`,f_perturb:`${mp("Z","dz",n,1)} + dc`,...t}}),Ut=(e,n,t,r={})=>({name:e,params:{...ve(e,n).params,derivative:85,velocity:70,varying:"z",point:t,...r}}),Ne=(e,n,t,r={})=>({name:e,params:{varying:"z",f:`z - ${t?`${t} * `:""}(${n})# + c`,iterations:75,useDerivative:!1,useRoots:!0,convergent:!0,divergent:!1,...r}}),et=(e,n,t,r={})=>({name:e,params:{center:k(1),point:k(-.5),f:`z - ${t?`${t} * `:""}(${n})# + c`,useDerivative:!1,convergent:!0,divergent:!1,...r}}),T=(e,n,t={})=>({name:e,params:{f:n,varying:"z",palette:"rainbow",divergent:!1,useDerivative:!1,usePerturbation:!1,scale:k(2.5),...t}}),a0=e=>e.map(({name:n,params:t,subforms:r})=>({name:n,params:{...Nt,f_perturb:null,...t,f_prime_z:t.f_prime_z||zr(t.f,["z","z_1"]).toString(),f_prime_c:t.f_prime_c||zr(t.f,["z","z_1"],["c"]).toString()},subforms:r?a0(r):[]})),mn=a0([{...ve("Mandelbrot",2,{point:k(-.5)}),subforms:[ve("Minibrot",2,{point:k(-1.71121,2e-5),scale:k(85e-5),smoothing:"distance_scaled",velocity:70,saturation:0,lightness:250}),ve("Bibrot",3),ve("Tribrot",4),ve("Quadribrot",5),ve("Quintibrot",6),ve("Hexibrot",7),ve("Heptibrot",8),ve("Octibrot",9),ve("Nonibrot",10),ve("Decabrot",11),ve("Invbibrot",-2,{center:k(10),convergent:!0,scale:k(3),derivative:250}),ve("Invtribrot",-3,{center:k(10),convergent:!0,scale:k(3),derivative:350})]},{...Ut("Julia 0 + .8i",2,k(0,.8)),subforms:[Ut("Julia -.7 + .27015",2,k(-.7,.27015)),Ut("Julia .355 + .355i",2,k(.355,.355)),Ut("Bijulia -.371594 + .662412i",3,k(-.371594,.662412)),Ut("Trijulia -.29053 - .450488i",4,k(-.29053,-.450488),{derivative:175})]},{name:"Mandelbar",params:{...ve("Mandelbar",2).params,f:"~z^2 + c",f_perturb:"~(2 * Z * dz + dz^2) + dc"}},{name:"Burningship",params:{point:k(.5,.5),transform:bn(Math.PI),derivative:100,scale:k(1.5),f:"(|re(z)| + |im(z)|i)^2 + c",f_perturb:"(2 * re(dz) * re(Z) + re(dz) * re(dz) - 2 * im(Z) * im(dz) - im(dz) * im(dz) + 2 * (diffabs((re(Z) * im(Z)), (re(Z) * im(dz) + re(dz) * im(Z) + re(dz) * im(dz)))) * i) + dc"},subforms:[{name:"Miniship",params:{point:k(1.85982,.004584),transform:bn(Math.PI),derivative:100,smoothing:"distance_scaled",scale:k(.008069),velocity:62,lightness:300,saturation:0,f:"(|re(z)| + |im(z)|i)^2 + c",f_perturb:"(2 * re(dz) * re(Z) + re(dz) * re(dz) - 2 * im(Z) * im(dz) - im(dz) * im(dz) + 2i * diffabs((re(Z) * im(Z)), (re(Z) * im(dz) + re(dz) * im(Z) + re(dz) * im(dz)))) + dc"}},{name:"Bird of Prey",params:{transform:bn(-3*Math.PI/4),derivative:100,scale:k(1.5),f:"(|re(z)| + |im(z)|i)^3 + c",f_perturb:"(re(Z)^2 - 3 * im(Z)^2) * diffabs(re(Z), re(dz)) + (2 * (re(Z) * re(dz)) + re(dz)^2 - 6 * (im(Z) * im(dz)) - 3 * im(dz)^2) * abs(re(Z) + re(dz)) + i * ((3 * re(Z)^2 - im(Z)^2) * diffabs(im(Z), im(dz)) + (6 * (re(Z) * re(dz)) + 3 * re(dz)^2 - 2 * (im(Z) * im(dz)) - im(dz)^2) * abs(im(Z) + im(dz))) + dc"}},{name:"Buffalo",params:{transform:bn(Math.PI),f:"(|re(z)| + |im(z)|i)^2 - (|re(z)| + |im(z)|i) + c"}},{name:"Bird",params:{f:"(re(z) - |im(z)|i)^2 + c"}}]},{name:"Tearbrot",params:{point:k(0,1),scale:k(4),transform:bn(-Math.PI/2),f:"(z + 1)^2 / c",showDerivative:!0,derivative:80,f_perturb:"(C * dz^2 + 2 * C * dz * Z + 2 * C * dz - dc * Z^2 - 2 * dc * Z - dc) / (C * (C + dc))"}},{name:"Moonbrot",params:{scale:k(6),f:"c / (z + 1)^2",derivative:120}},{name:"Mothbrot",params:{scale:k(1.5),f:"z^2 * (|re(z)| + |im(z)|i)^3 + c",derivative:120}},{name:"Phoenix",params:{point:k(.5667),scale:k(1.5),transform:bn(-Math.PI/2),varying:"z",f:"z^2 + c - 0.5 * z_1",useDerivative:!1,f_perturb:"2 * Z * dz + dz^2 + dc - 0.5 * dz_1"}},{name:"Frothy",params:{center:k(.5,0),point:k(2+.03,-.01),varying:"z",scale:k(3),f:"z^2 - c*~z",f_perturb:"dz^2 + 2 * dz * Z - C * ~dz - dc * ~Z - dc * ~dz"}},{name:"Whirlpool",params:{varying:"z",point:k(2,0),scale:k(3),f:"(c/z + (im(z)*z - re(z))/c)^2"}},{name:"Magnet",params:{point:k(1),scale:k(3),f:"((z^2 + c - 1) / (2z + c - 2))^2",useDerivative:!1,convergent:!0}},{name:"Tetrate",params:{center:k(.5),point:k(1),scale:k(3),f:"c^z",useDerivative:!1}},{name:"Celtic",params:{point:k(-.7),scale:k(2),f:"|re(z^2)| + i * im(z^2) + c",useDerivative:!1}},{...Ne("Newton","z^3 - 1"),subforms:[Ne("Newton","z^4 - 1"),Ne("Newton","z^3 - 2z + 2"),Ne("Newton","z^8 + 15z^4 - 16"),Ne("Newton","z^5 - 3i * z^3 - (5 + 2i) * z^2 + 3z + 1"),Ne("Newton","z^6 + z^3 - 1"),Ne("Newton","z^^3 - 1"),Ne("Newton","sin(z)",null,{center:k(Math.PI/2)}),Ne("Newton","cosh(z) - 1",null,{center:k(-3.14,-3.14)}),Ne("Newton","z^4 * sin(z) - 1"),Ne("Newton generalized","z^3 - 1",-.5,{divergent:!0,convergent:!1,smoothing:"exp",velocity:750}),Ne("Newton generalized","z^2 - 1","(1 + i)",{divergent:!0,convergent:!1,smoothing:"exp",velocity:750,bailout:1.5,iterations:100,useRoots:!1}),Ne("Newton generalized","z^(4 + 3i) - 1",2,{center:k(1,.25),scale:k(.05)})]},{...et("Nova","z^3 - 1"),subforms:[et("Nova","z^4 - 1"),et("Nova","z^3 - 2z + 2"),et("Nova","z^8 + 15z^4 - 16"),et("Nova","z^6 + z^3 - 1"),et("Nova","z^4 * sin(z) - 1")]},{...T("Domain coloring Polynomial","z + c"),subforms:[T("z²","z^2 + c"),T("","((z - 1)(z + 1)^2) / ((z + i)(z - i)^2) + c"),T("","(z^3 - 2 * z + i) / (z^2 + 1) + c"),T("","z / 2 + 1 / (2 * z) + c")]},{...T("Domain coloring Trigonometry","sin(z) + c",{scale:k(3)}),subforms:[T("Cos","cos(z) + c"),T("Tan","tan(z) + c"),T("Cn","cn(z, .5) + c"),T("Sn","sn(z, .5) + c"),T("Dn","dn(z, .5) + c"),T("Cn","cn(z, .5) / cos(z) + c"),T("Tan","tan(z) + c"),T("Acos","acos(z) + c"),T("Asin","asin(z) + c"),T("Atan","atan(z) + c"),T("Cosh","cosh(z) + c"),T("Sinh","sinh(z) + c"),T("Tanh","tanh(z) + c"),T("Acosh","acosh(z) + c"),T("Asinh","asinh(z) + c"),T("Atanh","atanh(z) + c")]},{...T("Domain coloring Transcendental","exp(z) + c"),subforms:[T("Log","log(z) + c"),T("","exp(z^-1) + c",{scale:k(1.5)}),T("","exp(-z^2) + c",{scale:k(1.5),showPolya:!0}),T("Square Root","sqrt(z) + c"),T("Cubic Root","z^(1/3) + c"),T("Complex Exponentiation","z^c",{point:k(2.5)}),T("²z","z^^2 + c"),T("³z","z^^3 + c"),T("⁴z","z^^4 + c"),T("Beta","beta(z, c)",{point:k(2)}),T("Beta First derivative","beta'(z, c)",{point:k(2)}),T("Gamma","gamma(z) + c"),T("Gamma First derivative","gamma'(z) + c"),T("Zeta","zeta(z) + c"),T("Zeta First derivative","zeta'(z) + c"),T("Psi (Digamma)","psi(z) + c"),T("Tania","tania(z) + c"),T("Atania","atania(z) + c"),T("Doya","doya(z) + c"),T("Filog","filog(z) + c"),T("Tet","tet(z) + c"),T("Ate","ate(z) + c"),T("Tetra","tetra(z, c)",{center:k(0,-1),point:k(2,2)})]},{...T("Domain coloring Misc","fibonacci(z) + c"),subforms:[T("Arg","arg(z) + c"),T("Norm","norm(z) + c"),T("","z^-1 + z^-2 + z^-3 + z^-4 + z^-5 + c"),T("","z * sin(z^-1) + c"),T("","sin(z^-2) + c",{scale:k(1.5)}),T("","(z^-18 - z^-1) / (z^-1 - 1) + c"),T("","sqrt(1 - z^-2 + z^3) + c"),T("","((z - 2 - i)^2 * (z^2 - 1)) / (z^2 + 2 + i) + c"),T("","z^(2/3 + i) + c"),T("","(exp(z) - 1) / z^2 + c"),T("","cos(z) / z^2 + c"),T("","sinh(z) / z^4 + c"),T("","(1 - cos(z)) / z^2 + c"),T("","sin(z) / z + c"),T("","z / (exp(z) - 1) + c"),T("","(z - 1) cos(1/z) + c"),T("",Bd(1,21).map(e=>`z^${e} / (1 - z^${e})`).join(" + ")+" + c")]}]);function pn({allowNull:e,name:n,label:t,value:r,onChange:i}){const l=C.useCallback(u=>{let{name:s,checked:a}=u.target,v;e?v=r===!1?!0:r?null:!1:v=a,i(s,v)},[e,i,r]),o=C.useRef(null);return C.useLayoutEffect(()=>{e&&o.current&&(r===null?o.current.indeterminate=!0:o.current.indeterminate=!1)},[r,e]),h.jsxs("label",{className:"boolean-label",children:[t,h.jsx("input",{type:"checkbox",ref:o,name:n,checked:r||!1,onChange:l})]})}function Ou({name:e,label:n,min:t=0,max:r=1/0,value:i,toggler:l,maxWidth:o=5,togglerName:u,decimal:s,onChange:a,...v}){const[m,p]=C.useState(`${i}`);C.useEffect(()=>{try{(s?!i.eq(F(m)):i!==parseFloat(m))&&(p(`${i}`),y(!0))}catch(c){console.warn(c),y(!1)}},[s,i]);const[g,y]=C.useState(!0),z=C.useCallback(c=>{if(p(c),!c||!c.match(/^\s*-?\s*(\d+(\.\d*)?|\.\d+)(e-?\d+)?\s*$/)){y(!1);return}const d=s?F(c):parseFloat(c);!s&&(isNaN(d)||d<t||d>r)?y(!1):(y(!0),a(e,d))},[s,r,t,e,a]),_=c=>{const d=c.target.value;z(d)},f=c=>{a(c.target.name,c.target.checked)};return h.jsxs("label",{className:`number ${g?"valid":"invalid"}`,children:[n&&h.jsx("span",{className:"number-label",children:n}),u&&h.jsx("input",{type:"checkbox",name:u,checked:l,onChange:f}),(!u||l)&&h.jsx("div",{className:"number-control",children:h.jsx("input",{type:"text",name:e,value:m,style:{width:`${m.length+.3}ch`,maxWidth:`${o}ch`},onChange:_,...v})})]})}function Nl({name:e,label:n,min:t=0,max:r=1/0,step:i=1,initial:l=k(0,0),value:o,toggler:u,togglerName:s,onChange:a,...v}){const m=y=>{a(y.target.name,y.target.checked)},p=(y,z)=>{a(e,k(z,o.im))},g=(y,z)=>{a(e,k(o.re,z))};return h.jsxs("label",{className:"complex",children:[n&&h.jsx("span",{className:"complex-label",children:n}),s&&h.jsx("input",{type:"checkbox",name:s,checked:u,onChange:m}),(!s||u)&&h.jsxs("div",{className:"complex-control",children:[h.jsx(Ou,{name:`${e}-re`,value:o.re,onChange:p,decimal:!0,...v}),h.jsx("span",{className:"complex-inner-label",children:"+"}),h.jsx(Ou,{name:`${e}-im`,value:o.im,onChange:g,decimal:!0,...v}),h.jsx("span",{className:"complex-inner-label",children:"i"}),h.jsx("button",{type:"button",onClick:()=>a(e,l),className:"button",children:u0})]})]})}function Wr({name:e,label:n,togglerName:t,toggler:r,value:i,maxWidth:l=50,onChange:o,...u}){const s=C.useCallback(()=>`${i}`,[i]),[a,v]=C.useState(s);C.useEffect(()=>{v(s()),p(!0)},[s,i]);const[m,p]=C.useState(!0),g=C.useCallback(_=>{v(_);try{const f=["z","c","Z","dz","dc","z_prime","z_1","z_1_prime","dz_1"],c=new Function(...f,`return ${xn(_).toComplex()}`),d=f.map(x=>k(Math.random(),Math.random()));c(...d)}catch(f){if(f instanceof SyntaxError){console.warn("Syntax error in formula",f),p(!1);return}const c=f.toString();if(c.includes("is not a function")){const d=c.match(/(.+) is not a function/)[1].split(".").slice(-1)[0].replace("_prime","'");if(!Object.keys(xo).includes(d)){console.warn("Unknown function in formula",f),p(!1);return}}if(c.includes("undeclared identifier")||c.includes("is not defined")){console.warn("Undeclared identifier in formula",f),p(!1);return}}p(!0),o(e,_)},[o,e]),y=_=>{const f=_.target.value;g(f)},z=_=>{o(_.target.name,_.target.checked)};return h.jsxs("label",{className:`complex-formula ${m?"valid":"invalid"}`,children:[n&&h.jsx("span",{className:"complex-formula-label",children:n}),t&&h.jsx("input",{type:"checkbox",name:t,checked:r,onChange:z}),(!t||r)&&h.jsx("input",{type:"text",name:e,value:a,style:{width:`${a.length+.3}ch`,maxWidth:`${l}ch`},onChange:y,...u})]})}const gp=(e,n,t,r,i)=>{let l=!0,o=0;return parseInt(r)!==parseFloat(r)?o=e===""?"":parseFloat(e):o=e===""?"":parseInt(e),l=!(o===""||isNaN(o)||o<n||o>t||i&&r%1===0&&o%r!==0||r%1!==0&&e.endsWith(".")||n<0&&e==="-0"),{valid:l,raw:e,value:o}};function J({name:e,label:n,min:t=0,max:r=1/0,step:i=1,value:l,toggler:o,maxWidth:u=5,togglerName:s,noPlusMinus:a,stepLock:v=!1,togglerOnly:m=!1,onChange:p,...g}){const y=C.useCallback(()=>`${l}`,[l]),[z,_]=C.useState(y);C.useEffect(()=>{_(y()),c(!0)},[y,l]);const[f,c]=C.useState(!0),d=C.useCallback((E,W=!1)=>{const M=gp(E,t,r,i,v);_(M.raw),c(M.valid),M.valid&&p(e,M.value)},[r,t,e,p,i]),x=C.useCallback(()=>{if(!f){d(`${t}`);return}if(z!==`${t}`){let E=parseInt(i)===parseFloat(i)?parseInt(z):parseFloat(z)+1e-9;E-=E%i,E-=i,i>0&&i<1?d(E.toFixed(i.toString().split(".")[1].length)):d(E.toString())}},[t,z,i,d,f]),N=C.useCallback(()=>{if(!f){d(`${t}`);return}if(z!==`${r}`){let E=parseInt(i)===parseFloat(i)?parseInt(z):parseFloat(z)+1e-9;E-=E%i,E+=i,i>0&&i<1?d(E.toFixed(i.toString().split(".")[1].length)):d(E.toString())}},[r,t,z,i,d,f]),L=E=>{const W=E.target.value;d(W,!0)},j=E=>{p(E.target.name,E.target.checked)};return h.jsxs("label",{className:`number ${f?"valid":"invalid"}`,children:[n||s?h.jsxs("div",{className:"number-head",children:[n&&h.jsx("span",{className:"number-label",children:n}),s&&h.jsx("input",{type:"checkbox",name:s,checked:o,onChange:j})]}):null,(!s||o)&&!m&&h.jsxs("div",{className:`number-control${a?" noplusminus":""}`,children:[h.jsx("input",{type:"text",name:e,value:z,style:{width:`${Math.max(...[i,z].map(E=>E.toString().length))+.3}ch`,maxWidth:`${u}ch`},onChange:L,...g}),!a&&h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"plusminus minus",onClick:x,tabIndex:-1,children:"−"}),h.jsx("button",{className:"plusminus plus",onClick:N,tabIndex:-1,children:"+"})]})]})]})}const ie={width:300,height:150},xs=document.createElement("canvas");xs.width=ie.width;xs.height=ie.height;const yp={locked:!1,gl:null,env:null,queue:[],init(){this.gl=xs.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1}),this.env={vertexShader:this.gl.createShader(this.gl.VERTEX_SHADER),fragmentShader:this.gl.createShader(this.gl.FRAGMENT_SHADER),program:this.gl.createProgram()},o0(this),this.gl.attachShader(this.env.program,this.env.vertexShader),this.gl.attachShader(this.env.program,this.env.fragmentShader)},render(e){this.gl||this.init();const n={gl:this.gl,env:this.env,...Nt,...e,perturb:!1};ws(n),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.viewport(0,0,ie.width,ie.height),this.gl.uniform2fv(this.env.uniforms.aspect,[ie.width/ie.height,1/Math.max(ie.width,ie.height)]),this.gl.drawArrays(this.gl.TRIANGLES,0,3);const t=new Uint8Array(ie.width*ie.height*4);return this.gl.readPixels(0,0,ie.width,ie.height,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),t}},zp=C.memo(function({params:n}){const t=C.useRef();return C.useEffect(()=>{setTimeout(()=>{if(!t.current)return;const r=yp.render(n);t.current.width=ie.width,t.current.height=ie.height;const i=t.current.getContext("2d"),l=new ImageData(new Uint8ClampedArray(r),ie.width,ie.height);i.putImageData(l,0,0),i.scale(1,-1),i.translate(0,-ie.height),i.drawImage(t.current,0,0)},5)},[n]),h.jsx("canvas",{ref:t,className:"preview",style:ie})}),Eo=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(Eo).join("");if(typeof e=="object"&&e)return Eo(e.props.children)},Fu=(e,n)=>typeof e=="string"?Eo(e).toLowerCase().includes(n.toLowerCase()):!1,wp=C.memo(function e({name:n,index:t,params:r,search:i,subforms:l=[],sub:o=!1,shown:u,onPreset:s}){const[a,v]=C.useState(!1),[m,p]=C.useState(!0),[g,y]=C.useState(!1);return C.useEffect(()=>{g&&v(!0)},[g]),C.useEffect(()=>{if(!i){p(!0),y(!1);return}if(Fu(n,i)){p(!0);return}if(l.length&&l.some(({name:z})=>Fu(z,i))){p(!0),y(!0);return}p(!1),y(!1)},[n,i,l]),h.jsxs("div",{style:{display:m?"block":"none"},children:[h.jsx("div",{className:`preset${o?" sub":""}`,onClick:()=>s(r,t),children:h.jsxs("div",{className:`preset-header preset-name-${l.length?"button":"only"}`,children:[l.length?h.jsx("button",{className:`preset-toggle ${g?"open":"closed"}`,onClick:z=>{z.stopPropagation(),y(!g)},children:g?"-":"+"}):null,h.jsxs("div",{className:"preset-content-preview",children:[h.jsxs("div",{className:"preset-content",children:[h.jsx("span",{className:"preset-name",children:n}),h.jsxs("code",{className:"preset-formula",children:[h.jsx("span",{className:"preset-assignment",children:"F(z, c) = "}),r.f]}),h.jsxs("code",{className:"preset-derivative_c",children:[h.jsx("span",{className:"preset-assignment",children:"dF(z, z', c)/dc = "}),r.f_prime_c]})]}),u?h.jsx(zp,{params:r}):null]})]})}),h.jsx("div",{className:"subforms",style:{display:g?"block":"none"},children:l.map((z,_)=>h.jsx(e,{...z,sub:!0,search:i,shown:u&&a,onPreset:s},_))})]})});function xp({open:e,onPreset:n,onExportImage:t,closePresets:r}){const[i,l]=C.useState(!1),[o,u]=C.useState(""),[s,a]=C.useState("");C.useEffect(()=>{e&&l(!0)},[e]);const v=C.useCallback(m=>{a(m.target.value),t0(u(m.target.value),50)},[]);return h.jsxs("div",{style:{display:e?"block":"none"},children:[h.jsx("div",{className:"presets-overlay",onClick:r}),h.jsx("div",{className:"presets",children:h.jsxs("div",{className:"presets-modal",children:[h.jsxs("div",{className:"presets-header",children:[h.jsxs("div",{className:"presets-search",children:[h.jsx("input",{type:"text",placeholder:"Search",value:s,onChange:v}),h.jsx("button",{className:"presets-clear",onClick:()=>{u(""),a("")},children:u0})]}),h.jsxs("div",{className:"presets-actions",children:[h.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:cp}),h.jsx("button",{className:"presets-action",onClick:t,children:fp}),h.jsx("button",{className:"presets-action",onClick:r,children:dp})]})]}),h.jsx("div",{className:"presets-list",children:mn.map(({type:m,content:p,name:g,params:y,subforms:z},_)=>h.jsx(C.Fragment,{children:m==="title"?h.jsx("h2",{children:p}):m==="group"?h.jsx("h4",{children:p}):h.jsx(wp,{name:g,index:_,params:y,search:o,shown:i,subforms:z,onPreset:n})},_))})]})})]})}function Uu({name:e,value:n,options:t,label:r,onChange:i,...l}){const o=C.useCallback(u=>{const{value:s}=u.target;i(e,s)},[e,i]);return h.jsxs("label",{className:"select-label",children:[r,h.jsx("select",{name:e,value:n,className:"select",onChange:o,children:t.map(u=>h.jsx("option",{value:u,children:u.replace(/_/g," ").replace(/./,s=>s.toUpperCase())},u))})]})}const Sp=()=>{try{return localStorage.getItem("showUI")||"simple"}catch(e){return console.error(e),"simple"}};function kp({runtime:e,params:n,setRuntime:t,updateParams:r}){const[i,l]=C.useState(Sp),[o,u]=C.useState(!1),[s,a]=C.useState(0),v=C.useCallback(()=>{r({animate:!1}),u(!0)},[r]),m=C.useCallback(()=>{u(!1)},[]),p=C.useCallback((z,_)=>{r(z,!0),a(_),m()},[r,m]),g=C.useCallback((z,_)=>{r({[z]:_})},[r]),y=C.useCallback(()=>l(z=>{const _={simple:"advanced",advanced:"full",full:"empty",empty:"simple"}[z];try{localStorage.setItem("showUI",_)}catch(f){console.error(f)}return _}),[]);return C.useEffect(()=>{const z=_=>{if(_.target.tagName!=="INPUT"){if(_.key==="ArrowLeft"&&_.ctrlKey&&s>0){let f=s-1;for(;mn[f].type;){if(f<2)return;f--}p(mn[f].params,f)}else if(_.key==="ArrowRight"&&_.ctrlKey&&s<mn.length-1){let f=s+1;for(;mn[f].type;){if(f>mn.length-2)return;f++}p(mn[f].params,f)}}};return window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}},[p,s]),h.jsxs(h.Fragment,{children:[h.jsx(xp,{open:o,onPreset:p,closePresets:m}),h.jsxs("main",{className:e.error?"error ui":"ui",title:e.error,children:[h.jsxs("div",{className:"ui-row ui-row-top",children:[h.jsx("aside",{className:"controls",children:h.jsxs("div",{className:"subcontrols",children:[h.jsx("button",{className:"button",onClick:y,children:vp}),["simple","advanced","full"].includes(i)?h.jsx("button",{className:"button",onClick:()=>r({moveCenter:!n.moveCenter}),children:n.moveCenter?lp:op}):null,["advanced","full"].includes(i)?h.jsx("button",{className:"button",onClick:()=>r({lockCenter:!n.lockCenter}),children:n.lockCenter?up:ap}):null,["simple","advanced","full"].includes(i)?h.jsx("button",{className:"button",onClick:()=>r({animate:!n.animate}),children:n.animate?hp:pp}):null]})}),["simple","advanced","full"].includes(i)?h.jsxs("aside",{className:"formula",children:[h.jsx(Wr,{label:"F(z, c) =",name:"f",value:n.f,onChange:g}),["advanced","full"].includes(i)&&n.useDerivative?h.jsx(Wr,{label:"dF(z, z', c)/dz =",name:"f_prime_z",value:e.f_prime_z,onChange:g}):null,["advanced","full"].includes(i)&&n.useDerivative?h.jsx(Wr,{label:"dF(z, z', c)/dc =",name:"f_prime_c",value:e.f_prime_c,onChange:g}):null,["advanced","full"].includes(i)&&e.perturb?h.jsx(Wr,{label:"F(Z, dz, dc) =",name:"f_perturb",value:n.f_perturb,onChange:g}):null]}):null]}),h.jsxs("div",{className:"ui-row ui-row-middle",children:[["simple","advanced","full"].includes(i)?h.jsxs("aside",{className:"view",children:[h.jsx(Uu,{label:"Palette",name:"palette",value:n.palette,options:r0,onChange:g}),h.jsx(Uu,{label:"Smoothing",name:"smoothing",value:n.smoothing,options:i0,onChange:g}),["full"].includes(i)?h.jsx(J,{name:"offset",label:"Offset",min:0,step:10,value:n.offset,onChange:g}):null,["full"].includes(i)?h.jsx(J,{name:"velocity",label:"Velocity",min:0,step:10,value:n.velocity,onChange:g}):null,["full"].includes(i)?h.jsx(J,{name:"hue",label:"Hue",min:0,max:360,step:10,value:n.hue,onChange:g}):null,["full"].includes(i)?h.jsx(J,{name:"saturation",label:"Saturation",min:0,step:10,value:n.saturation,onChange:g}):null,["full"].includes(i)?h.jsx(J,{name:"lightness",label:"Lightness",min:0,step:10,value:n.lightness,onChange:g}):null,["advanced","full"].includes(i)&&n.animate?h.jsx(J,{name:"speed",label:"Speed",min:0,value:n.speed,onChange:g}):null,h.jsx(J,{name:"supersampling",label:"Supersampling",min:0,step:.1,value:n.supersampling,onChange:g})]}):null,["simple","advanced","full"].includes(i)?h.jsxs("aside",{className:"params",children:[n.convergent||n.divergent?h.jsx(J,{name:"iterations",label:"Iterations",min:0,step:1,value:n.iterations,onChange:g}):null,["advanced","full"].includes(i)&&(n.convergent||n.divergent)?h.jsx(pn,{className:"button",label:"Roots",name:"useRoots",value:n.useRoots,onChange:g}):null,["advanced","full"].includes(i)?h.jsx(J,{name:"bailin",label:"Bailin",min:-1/0,step:.1,value:n.bailin,togglerName:"convergent",toggler:n.convergent,onChange:g}):null,["advanced","full"].includes(i)?h.jsx(J,{name:"bailout",label:"Bailout",min:-1/0,step:.1,value:n.bailout,togglerName:"divergent",toggler:n.divergent,onChange:g}):null,n.convergent||n.divergent?h.jsxs(h.Fragment,{children:[["advanced","full"].includes(i)?h.jsx(J,{name:"derivative",label:"Derivative",min:0,value:n.derivative,togglerName:"useDerivative",toggler:n.useDerivative,onChange:g}):null,["advanced","full"].includes(i)&&n.useDerivative?h.jsx(pn,{label:"Derivative",className:"button",name:"showDerivative",value:n.showDerivative,onChange:g}):null,i==="full"?h.jsx(pn,{label:"Perturbation",className:"button",name:"usePerturbation",allowNull:!0,value:n.usePerturbation,onChange:g}):null]}):h.jsxs(h.Fragment,{children:[["full"].includes(i)?h.jsx(pn,{name:"scaled",label:"Scaled",value:n.scaled,onChange:g}):null,["advanced","full"].includes(i)?h.jsx(J,{name:"gridScale",label:"Grid",min:0,value:n.gridScale,togglerName:"showGrid",toggler:n.showGrid,togglerOnly:i!=="full",onChange:g}):null,["full"].includes(i)&&n.showGrid?h.jsx(J,{name:"gridWidth",label:"Grid Width",step:.1,value:n.gridWidth,onChange:g}):null,["full"].includes(i)&&n.showGrid?h.jsx(pn,{name:"gridLog",label:"Grid Log",value:n.gridLog,togglerOnly:i!=="full",onChange:g}):null,["advanced","full"].includes(i)?h.jsx(J,{name:"normGridScale",label:"Norm Grid",min:0,value:n.normGridScale,togglerName:"showNormGrid",toggler:n.showNormGrid,togglerOnly:i!=="full",onChange:g}):null,["advanced","full"].includes(i)&&n.showNormGrid?h.jsx(pn,{name:"normGridLog",label:"Norm Grid Log",value:n.normGridLog,togglerOnly:i!=="full",onChange:g}):null,["full"].includes(i)&&n.showNormGrid?h.jsx(J,{label:"Norm Grid Width",step:.1,name:"normGridWidth",value:n.normGridWidth,onChange:g}):null,["advanced","full"].includes(i)?h.jsx(J,{name:"argGridScale",label:"Arg Grid",min:0,value:n.argGridScale,togglerName:"showArgGrid",toggler:n.showArgGrid,togglerOnly:i!=="full",onChange:g}):null,["full"].includes(i)&&n.showArgGrid?h.jsx(pn,{name:"argGridLog",label:"Arg Grid Log",value:n.argGridLog,togglerOnly:i!=="full",onChange:g}):null,["full"].includes(i)&&n.showArgGrid?h.jsx(J,{label:"Arg Grid Width",step:.1,name:"argGridWidth",value:n.argGridWidth,onChange:g}):null,["advanced","full"].includes(i)?h.jsx(J,{label:"Zeroes",className:"button",name:"zeroes",min:-1/0,value:n.zeroes,togglerName:"showZeroes",toggler:n.showZeroes,togglerOnly:i!=="full",onChange:g}):null,["advanced","full"].includes(i)?h.jsx(J,{label:"Poles",className:"button",name:"poles",min:-1/0,value:n.poles,togglerName:"showPoles",toggler:n.showPoles,togglerOnly:i!=="full",onChange:g}):null,["advanced","full"].includes(i)?h.jsx(pn,{label:"Shade Norm",className:"button",name:"shadeNorm",value:n.shadeNorm,onChange:g}):null,["advanced","full"].includes(i)?h.jsx(J,{name:"polya",label:"Polya Plot",min:0,value:n.polya,togglerName:"showPolya",toggler:n.showPolya,togglerOnly:i!=="full",onChange:g}):null,["full"].includes(i)&&n.showPolya?h.jsx(J,{name:"polyaLightness",label:"Polya Lightness",min:0,step:10,togglerName:"polyaColor",toggler:n.polyaColor,value:n.polyaLightness,onChange:g}):null]})]}):null]}),h.jsxs("div",{className:"ui-row ui-row-bottom",children:[["simple","advanced","full"].includes(i)?h.jsx("button",{className:"preset-button button",onClick:v,title:"Presets",children:sp}):null,["advanced","full"].includes(i)&&h.jsxs("aside",{className:"bounds",children:[h.jsx(Nl,{name:"center",label:"Center",value:n.center,maxWidth:null,onChange:g}),h.jsx(Nl,{name:"point",label:"Point",maxWidth:null,value:n.point,onChange:g}),h.jsx(Nl,{name:"scale",label:"Scale",maxWidth:null,initial:k(1,0),value:n.scale,onChange:g})]}),["simple","advanced","full"].includes(i)?h.jsx("button",{className:`space-button button${e.processing?" processing":""}`,onClick:()=>r({varying:ri[(ri.indexOf(n.varying)+1)%ri.length]||"c"}),children:n.varying}):null]})]})]})}const Pi=(e,n=[],t)=>{const r={...e},i=[];if(Object.entries(r).forEach(([l,o])=>{typeof Nt[l]=="number"?(o===""||isNaN(o))&&(delete r[l],i.push(l)):Array.isArray(Nt[l])&&(Array.isArray(o[0])?o.find(u=>u.find(s=>o===""||isNaN(s)))&&(delete r[l],i.push(l)):o.find(u=>o===""||isNaN(u))&&(delete r[l],i.push(l)))}),n.includes("f")&&!n.includes("f_prime_z")||r.f_prime_z===null)try{r.f_prime_z=zr(r.f,["z","z_1"]).toString()}catch(l){i.push("f_prime_z"),console.warn(l)}if(n.includes("f")&&!n.includes("f_prime_c")||r.f_prime_c===null)try{r.f_prime_c=zr(r.f,["z","z_1"],["c"]).toString()}catch(l){i.push("f_prime_c"),console.warn(l)}return(n.includes("convergent")||n.includes("divergent"))&&!r.convergent&&!r.divergent&&(r.usePerturbation=!1),{params:r,badParams:i}};function Ep({params:e,updateParams:n}){const[t,r]=C.useState({...e,lockCenter:!1,perturb:!1,timeref:0}),[i,l]=C.useState(!1);return C.useEffect(()=>{if(!t.gl&&t.error)return;const o=s=>{console.error("WebGL context lost",s),r(a=>({...a,gl:null,error:new Error("WebGL context lost")})),s.preventDefault()},u=()=>{console.warn("WebGL context restored"),r(s=>({...s,...Mu(s,o,u),error:null}))};r(s=>{try{return s.gl?s:Mu(s,o,u)}catch(a){return console.error(a),{...s,error:a}}})},[t.gl,t.error]),C.useEffect(()=>{r(o=>({...o,...Pi(e).params}))},[e]),h.jsxs(h.Fragment,{children:[t.error?h.jsxs("aside",{className:"global-error",children:[h.jsxs("div",{children:[t.error.toString()," ",h.jsxs("button",{onClick:()=>l(o=>!o),children:[i?"Hide":"Show"," stack"]})]}),t.error.stack&&i?h.jsx("pre",{children:t.error.stack}):null]}):null,t.gl?h.jsxs(h.Fragment,{children:[h.jsx(kp,{runtime:t,params:e,setRuntime:r,updateParams:n}),h.jsx(ip,{runtime:t,setRuntime:r,updateParams:n})]}):null]})}const Cp=(e,n)=>n instanceof qe?n.toString():n,Np=(e,n)=>typeof n=="string"&&qe.isComplexString(n)?qe.fromString(n):n,Gu=()=>{const{location:e}=window;if(e.hash)try{const t=JSON.parse(atob(e.hash.slice(1)),Np);return Pi({...Nt,...t}).params}catch(t){console.warn(t),e.hash=""}const n=mn.map(t=>t.subforms?t.subforms.map(r=>r.params).concat(t.params):t.params).flat(1);return Pi(n[~~(n.length*Math.random())]).params},_p=(e,n=!1)=>{const t="#"+btoa(JSON.stringify(e,Cp));window.history[n?"replaceState":"pushState"](null,null,t)},Pp=()=>{const[e,n]=C.useState(Gu()),t=C.useCallback(i=>{const l=Gu();l&&(Object.entries(l).forEach(([o,u])=>{Array.isArray(u)&&So(u,e[o])&&(l[o]=e[o])}),n(l))},[e]),r=C.useCallback((i,l=!1)=>{n(o=>{if(!Object.entries(i).filter(([a,v])=>Array.isArray(v)?!So(v,o[a]):o[a]!==v).length)return o;const{params:u,badParams:s}=Pi(l?i:{...o,...i},l?[]:Object.keys(i));return s.length||_p(u,Object.keys(i).length===1&&i.matrix),u})},[]);return C.useEffect(()=>(window.addEventListener("popstate",t),()=>{window.removeEventListener("popstate",t)}),[t]),h.jsx(Ep,{params:e,updateParams:r})};_l.createRoot(document.getElementById("root")).render(h.jsx(Pp,{}));
