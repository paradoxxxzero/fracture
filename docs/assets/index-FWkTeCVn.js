var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!C.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)C.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,te=-1,S=5,C=-1;function ne(){return g?!0:!(e.unstable_now()-C<S)}function re(){if(g=!1,ee){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case C:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D={pending:!1,data:null,method:null,action:null},O=[],k=-1;function de(e){return{current:e}}function A(e){0>k||(e.current=O[k],O[k]=null,k--)}function j(e,t){k++,O[k]=e.current,e.current=t}var fe=de(null),pe=de(null),me=de(null),he=de(null);function M(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}A(fe),j(fe,e)}function ge(){A(fe),A(pe),A(me)}function _e(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ve(e){pe.current===e&&(A(fe),A(pe)),he.current===e&&(A(he),Qf._currentValue=D)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function tt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&it(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function it(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ut(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var dt=Math.random().toString(36).slice(2),ft=`__reactFiber$`+dt,pt=`__reactProps$`+dt,mt=`__reactContainer$`+dt,ht=`__reactEvents$`+dt,gt=`__reactListeners$`+dt,_t=`__reactHandles$`+dt,vt=`__reactResources$`+dt,yt=`__reactMarker$`+dt;function bt(e){delete e[ft],delete e[pt],delete e[ht],delete e[gt],delete e[_t]}function xt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ft])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function St(e){if(e=e[ft]||e[mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ct(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function wt(e){var t=e[vt];return t||=e[vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Tt(e){e[yt]=!0}var N=new Set,Et={};function Dt(e,t){Ot(e,t),Ot(e+`Capture`,t)}function Ot(e,t){for(Et[e]=t,e=0;e<t.length;e++)N.add(t[e])}var kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),At={},jt={};function Mt(e){return Ee.call(jt,e)?!0:Ee.call(At,e)?!1:kt.test(e)?jt[e]=!0:(At[e]=!0,!1)}function Nt(e,t,n){if(Mt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ft(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function It(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Rt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zt(e){if(!e._valueTracker){var t=Lt(e)?`checked`:`value`;e._valueTracker=Rt(e,t,``+e[t])}}function Bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Lt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Vt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ht=/[\n"\\]/g;function P(e){return e.replace(Ht,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ut(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+It(t)):e.value!==``+It(t)&&(e.value=``+It(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Wt(e,o,It(n)):Wt(e,o,It(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+It(s):e.removeAttribute(`name`)}function F(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){zt(e);return}n=n==null?``:``+It(n),t=t==null?n:``+It(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),zt(e)}function Wt(e,t,n){t===`number`&&Vt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kt(e,t,n){if(t!=null&&(t=``+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+It(n)}function qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=It(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),zt(e)}function I(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Yt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Jt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Xt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Yt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Yt(e,o,t[o])}function Zt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),$t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function en(e){return $t.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function L(){}var tn=null;function nn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rn=null,an=null;function on(e){var t=St(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ut(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+P(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[pt]||null;if(!a)throw Error(i(90));Ut(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Bt(r)}break a;case`textarea`:Kt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}}}var sn=!1;function cn(e,t,n){if(sn)return e(t,n);sn=!0;try{return e(t)}finally{if(sn=!1,(rn!==null||an!==null)&&(bu(),rn&&(t=rn,e=an,an=rn=null,on(t),e)))for(t=0;t<e.length;t++)on(e[t])}}function ln(e,t){var n=e.stateNode;if(n===null)return null;var r=n[pt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var un=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),dn=!1;if(un)try{var fn={};Object.defineProperty(fn,`passive`,{get:function(){dn=!0}}),window.addEventListener(`test`,fn,fn),window.removeEventListener(`test`,fn,fn)}catch{dn=!1}var pn=null,mn=null,hn=null;function gn(){if(hn)return hn;var e,t=mn,n=t.length,r,i=`value`in pn?pn.value:pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return hn=i.slice(e,1<r?1-r:void 0)}function _n(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vn(){return!0}function yn(){return!1}function bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?vn:yn,this.isPropagationStopped=yn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=bn(xn),Cn=h({},xn,{view:0,detail:0}),wn=bn(Cn),Tn,En,Dn,On=h({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Dn&&(Dn&&e.type===`mousemove`?(Tn=e.screenX-Dn.screenX,En=e.screenY-Dn.screenY):En=Tn=0,Dn=e),Tn)},movementY:function(e){return`movementY`in e?e.movementY:En}}),kn=bn(On),An=bn(h({},On,{dataTransfer:0})),jn=bn(h({},Cn,{relatedTarget:0})),Mn=bn(h({},xn,{animationName:0,elapsedTime:0,pseudoElement:0})),Nn=bn(h({},xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Pn=bn(h({},xn,{data:0})),Fn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},In={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Ln={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ln[e])?!!t[e]:!1}function zn(){return Rn}var Bn=bn(h({},Cn,{key:function(e){if(e.key){var t=Fn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=_n(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?In[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zn,charCode:function(e){return e.type===`keypress`?_n(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?_n(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Vn=bn(h({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=bn(h({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zn})),Un=bn(h({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wn=bn(h({},On,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Gn=bn(h({},xn,{newState:0,oldState:0})),Kn=[9,13,27,32],qn=un&&`CompositionEvent`in window,Jn=null;un&&`documentMode`in document&&(Jn=document.documentMode);var Yn=un&&`TextEvent`in window&&!Jn,Xn=un&&(!qn||Jn&&8<Jn&&11>=Jn),Zn=` `,Qn=!1;function $n(e,t){switch(e){case`keyup`:return Kn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function er(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var tr=!1;function nr(e,t){switch(e){case`compositionend`:return er(t);case`keypress`:return t.which===32?(Qn=!0,Zn):null;case`textInput`:return e=t.data,e===Zn&&Qn?null:e;default:return null}}function rr(e,t){if(tr)return e===`compositionend`||!qn&&$n(e,t)?(e=gn(),hn=mn=pn=null,tr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Xn&&t.locale!==`ko`?null:t.data;default:return null}}var ir={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ir[e.type]:t===`textarea`}function or(e,t,n,r){rn?an?an.push(r):an=[r]:rn=r,t=Ed(t,`onChange`),0<t.length&&(n=new Sn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var sr=null,cr=null;function lr(e){yd(e,0)}function ur(e){if(Bt(Ct(e)))return e}function dr(e,t){if(e===`change`)return t}var fr=!1;if(un){var pr;if(un){var mr=`oninput`in document;if(!mr){var hr=document.createElement(`div`);hr.setAttribute(`oninput`,`return;`),mr=typeof hr.oninput==`function`}pr=mr}else pr=!1;fr=pr&&(!document.documentMode||9<document.documentMode)}function gr(){sr&&(sr.detachEvent(`onpropertychange`,_r),cr=sr=null)}function _r(e){if(e.propertyName===`value`&&ur(cr)){var t=[];or(t,cr,e,nn(e)),cn(lr,t)}}function vr(e,t,n){e===`focusin`?(gr(),sr=t,cr=n,sr.attachEvent(`onpropertychange`,_r)):e===`focusout`&&gr()}function yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ur(cr)}function br(e,t){if(e===`click`)return ur(t)}function xr(e,t){if(e===`input`||e===`change`)return ur(t)}function Sr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Cr=typeof Object.is==`function`?Object.is:Sr;function wr(e,t){if(Cr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!Cr(e[i],t[i]))return!1}return!0}function Tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n=Tr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Tr(n)}}function Dr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Or(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vt(e.document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ar=un&&`documentMode`in document&&11>=document.documentMode,jr=null,Mr=null,Nr=null,Pr=!1;function Fr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||jr==null||jr!==Vt(r)||(r=jr,`selectionStart`in r&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&wr(Nr,r)||(Nr=r,r=Ed(Mr,`onSelect`),0<r.length&&(t=new Sn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Lr={animationend:Ir(`Animation`,`AnimationEnd`),animationiteration:Ir(`Animation`,`AnimationIteration`),animationstart:Ir(`Animation`,`AnimationStart`),transitionrun:Ir(`Transition`,`TransitionRun`),transitionstart:Ir(`Transition`,`TransitionStart`),transitioncancel:Ir(`Transition`,`TransitionCancel`),transitionend:Ir(`Transition`,`TransitionEnd`)},Rr={},zr={};un&&(zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),`TransitionEvent`in window||delete Lr.transitionend.transition);function Br(e){if(Rr[e])return Rr[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zr)return Rr[e]=t[n];return e}var Vr=Br(`animationend`),Hr=Br(`animationiteration`),Ur=Br(`animationstart`),Wr=Br(`transitionrun`),Gr=Br(`transitionstart`),Kr=Br(`transitioncancel`),qr=Br(`transitionend`),Jr=new Map,Yr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Yr.push(`scrollEnd`);function Xr(e,t){Jr.set(e,t),Dt(t,[e])}var Zr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Qr=[],$r=0,ei=0;function ti(){for(var e=$r,t=ei=$r=0;t<e;){var n=Qr[t];Qr[t++]=null;var r=Qr[t];Qr[t++]=null;var i=Qr[t];Qr[t++]=null;var a=Qr[t];if(Qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ai(n,i,a)}}function ni(e,t,n,r){Qr[$r++]=e,Qr[$r++]=t,Qr[$r++]=n,Qr[$r++]=r,ei|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ri(e,t,n,r){return ni(e,t,n,r),oi(e)}function ii(e,t){return ni(e,null,null,t),oi(e)}function ai(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function oi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var si={};function ci(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,t,n,r){return new ci(e,t,n,r)}function ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function di(e,t){var n=e.alternate;return n===null?(n=li(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ui(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=li(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return mi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=li(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case C:return e=li(13,n,t,a),e.elementType=C,e.lanes=o,e;case ne:return e=li(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break a;case ee:s=9;break a;case S:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=li(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function mi(e,t,n,r){return e=li(7,e,r,t),e.lanes=n,e}function hi(e,t,n){return e=li(6,e,null,t),e.lanes=n,e}function gi(e){var t=li(18,null,null,0);return t.stateNode=e,t}function _i(e,t,n){return t=li(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vi=new WeakMap;function yi(e,t){if(typeof e==`object`&&e){var n=vi.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},vi.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var bi=[],xi=0,Si=null,Ci=0,wi=[],Ti=0,Ei=null,Di=1,Oi=``;function ki(e,t){bi[xi++]=Ci,bi[xi++]=Si,Si=e,Ci=t}function Ai(e,t,n){wi[Ti++]=Di,wi[Ti++]=Oi,wi[Ti++]=Ei,Ei=e;var r=Di;e=Oi;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Di=1<<32-Ue(t)+i|n<<i|r,Oi=a+e}else Di=1<<a|n<<i|r,Oi=e}function ji(e){e.return!==null&&(ki(e,1),Ai(e,1,0))}function Mi(e){for(;e===Si;)Si=bi[--xi],bi[xi]=null,Ci=bi[--xi],bi[xi]=null;for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Oi=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null}function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Oi,wi[Ti++]=Ei,Di=t.id,Oi=t.overflow,Ei=e}var Pi=null,R=null,z=!1,Fi=null,Ii=!1,Li=Error(i(519));function Ri(e){throw Wi(yi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Li}function zi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ft]=e,t[pt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),F(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=L),t=!0):t=!1,t||Ri(e,!0)}function Bi(e){for(Pi=e.return;Pi;)switch(Pi.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Pi=Pi.return}}function Vi(e){if(e!==Pi)return!1;if(!z)return Bi(e),z=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&R&&Ri(e),Bi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=uf(e)}else t===27?(t=R,Zd(e.type)?(e=lf,lf=null,R=e):R=t):R=Pi?cf(e.stateNode.nextSibling):null;return!0}function Hi(){R=Pi=null,z=!1}function Ui(){var e=Fi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Fi=null),e}function Wi(e){Fi===null?Fi=[e]:Fi.push(e)}var Gi=de(null),Ki=null,qi=null;function Ji(e,t,n){j(Gi,t._currentValue),t._currentValue=n}function Yi(e){e._currentValue=Gi.current,A(Gi)}function Xi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Zi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Xi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Xi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Qi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Cr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Zi(t,e,n,r),t.flags|=262144}function $i(e){for(e=e.firstContext;e!==null;){if(!Cr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ea(e){Ki=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ta(e){return ra(Ki,e)}function na(e,t){return Ki===null&&ea(e),ra(e,t)}function ra(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qi===null){if(e===null)throw Error(i(308));qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qi=qi.next=t;return n}var ia=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},aa=t.unstable_scheduleCallback,oa=t.unstable_NormalPriority,sa={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ca(){return{controller:new ia,data:new Map,refCount:0}}function la(e){e.refCount--,e.refCount===0&&aa(oa,function(){e.controller.abort()})}var ua=null,da=0,fa=0,pa=null;function ma(e,t){if(ua===null){var n=ua=[];da=0,fa=dd(),pa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return da++,t.then(ha,ha),t}function ha(){if(--da===0&&ua!==null){pa!==null&&(pa.status=`fulfilled`);var e=ua;ua=null,fa=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var _a=T.S;T.S=function(e,t){eu=je(),typeof t==`object`&&t&&typeof t.then==`function`&&ma(e,t),_a!==null&&_a(e,t)};var va=de(null);function ya(){var e=va.current;return e===null?K.pooledCache:e}function ba(e,t){t===null?j(va,va.current):j(va,t.pool)}function xa(){var e=ya();return e===null?null:{parent:sa._currentValue,pool:e}}var Sa=Error(i(460)),Ca=Error(i(474)),wa=Error(i(542)),Ta={then:function(){}};function Ea(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Da(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(L,L),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e;default:if(typeof t.status==`string`)t.then(L,L);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e}throw ka=t,Sa}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ka=e,Sa):e}}var ka=null;function Aa(){if(ka===null)throw Error(i(459));var e=ka;return ka=null,e}function ja(e){if(e===Sa||e===wa)throw Error(i(483))}var Ma=null,Na=0;function Pa(e){var t=Na;return Na+=1,Ma===null&&(Ma=[]),Da(Ma,e,t)}function Fa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ia(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function La(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=di(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Oa(i)===t.type)?(t=a(t,n.props),Fa(t,n),t.return=e,t):(t=pi(n.type,n.key,n.props,null,e.mode,r),Fa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=mi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=hi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=pi(t.type,t.key,t.props,null,e.mode,n),Fa(n,t),n.return=e,n;case v:return t=_i(t,e.mode,n),t.return=e,t;case w:return t=Oa(t),f(e,t,n)}if(ue(t)||se(t))return t=mi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Pa(t),n);if(t.$$typeof===te)return f(e,na(e,t),n);Ia(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Oa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Pa(n),r);if(n.$$typeof===te)return p(e,t,na(e,n),r);Ia(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Oa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Pa(r),i);if(r.$$typeof===te)return m(e,t,n,na(t,r),i);Ia(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),z&&ki(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&ki(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),z&&ki(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&ki(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&ki(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&ki(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Oa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Fa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=mi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=pi(o.type,o.key,o.props,null,e.mode,c),Fa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=_i(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Oa(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Pa(o),c);if(o.$$typeof===te)return b(e,r,na(e,o),c);Ia(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=hi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Na=0;var i=b(e,t,n,r);return Ma=null,i}catch(t){if(t===Sa||t===wa)throw t;var a=li(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ra=La(!0),za=La(!1),Ba=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ha(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=oi(e),ai(e,null,n),t}return ni(e,r,t,n),oi(e)}function Ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qa=!1;function Ja(){if(qa){var e=pa;if(e!==null)throw e}}function Ya(e,t,n,r){qa=!1;var i=e.updateQueue;Ba=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===fa&&(qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ba=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Xa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Za(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xa(n[e],t)}var Qa=de(null),$a=de(0);function eo(e,t){e=Wl,j($a,e),j(Qa,t),Wl=e|t.baseLanes}function to(){j($a,Wl),j(Qa,Qa.current)}function no(){Wl=$a.current,A(Qa),A($a)}var ro=de(null),io=null;function ao(e){var t=e.alternate;j(uo,uo.current&1),j(ro,e),io===null&&(t===null||Qa.current!==null||t.memoizedState!==null)&&(io=e)}function oo(e){j(uo,uo.current),j(ro,e),io===null&&(io=e)}function so(e){e.tag===22?(j(uo,uo.current),j(ro,e),io===null&&(io=e)):co(e)}function co(){j(uo,uo.current),j(ro,ro.current)}function lo(e){A(ro),io===e&&(io=null),A(uo)}var uo=de(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,V=null,mo=null,ho=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function H(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Cr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Bs:Vs,_o=!1,a=n(r,i),_o=!1,go&&(a=To(t,n,r,i)),wo(e),a}function wo(e){T.H=zs;var t=V!==null&&V.next!==null;if(po=0,mo=V=B=null,ho=!1,yo=0,bo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&$i(e)&&(ic=!0))}function To(e,t,n,r){B=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,mo=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Hs,o=t(n,r)}while(go);return o}function Eo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Do(){var e=vo!==0;return vo=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}po=0,mo=V=B=null,go=!1,yo=vo=0,bo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mo===null?B.memoizedState=mo=e:mo=mo.next=e,mo}function jo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=mo===null?B.memoizedState:mo.next;if(t!==null)mo=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},mo===null?B.memoizedState=mo=e:mo=mo.next=e}return mo}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=Da(bo,e,t),t=B,(mo===null?t.memoizedState:mo.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===te)return ta(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),V,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===fa&&(d=!0);else if((po&p)===p){u=u.next,p===fa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Gl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Cr(o,e.memoizedState)&&(ic=!0,d&&(n=pa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Cr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=B,a=jo(),o=z;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Cr((V||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||mo!==null&&mo.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||po&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Mo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cr(e,n)}catch{return!0}}function Go(e){var t=ii(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),_o){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,V,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(z){var n=K.formState;if(n!==null){a:{var r=B;if(z){if(R){b:{for(var i=R,a=Ii;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){R=cf(i.nextSibling),r=i.data===`F!`;break a}}Ri(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,B,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,B,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),V,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Sa?wa:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=V;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Mo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();B.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&So(r,V.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(B.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Mo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),_o){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||po&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),B.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Cr(n,t)?n:Qa.current===null?!(po&42)||po&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),B.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Cr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Fs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ga(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,D,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:D,baseState:D,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:D},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ta(Qf)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ua(n);var r=Wa(t,e,n);r!==null&&(hu(r,t,n),Ga(r,t,n)),t={cache:ca()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ri(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Cr(s,o))return ni(e,t,i,0),K===null&&ti(),!1}catch{}if(n=ri(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ri(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ls(e,t){go=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var zs={readContext:ta,use:Po,useCallback:H,useContext:H,useEffect:H,useImperativeHandle:H,useLayoutEffect:H,useInsertionEffect:H,useMemo:H,useReducer:H,useRef:H,useState:H,useDebugValue:H,useDeferredValue:H,useTransition:H,useSyncExternalStore:H,useId:H,useHostTransitionStatus:H,useFormState:H,useActionState:H,useOptimistic:H,useMemoCache:H,useCacheRefresh:H};zs.useEffectEvent=H;var Bs={readContext:ta,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ta,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(_o){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(_o){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,B,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Ao();if(z){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=K.identifierPrefix;if(z){var n=Oi,r=Di;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,B)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ta,use:Po,useCallback:ys,useContext:ta,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),V.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ta,use:Po,useCallback:ys,useContext:ta,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return V===null?xs(n,e,t):Ss(n,V.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return V===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ua(r);i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(hu(t,e,r),Ga(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ua(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(hu(t,e,r),Ga(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ua(n);r.tag=2,t!=null&&(r.callback=t),t=Wa(e,r,n),t!==null&&(hu(t,e,n),Ga(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){Zr(e)}function Ys(e){console.error(e)}function Xs(e){Zr(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ua(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Qi(t,n,a,!0),n=ro.current,n!==null){switch(n.tag){case 31:case 13:return io===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(z)return t=ro.current,t===null?(r!==Li&&(t=Error(i(423),{cause:r}),Wi(yi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=yi(r,n),a=$s(e.stateNode,r,a),Ka(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Li&&(e=Error(i(422),{cause:r}),Wi(yi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=yi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=yi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ka(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ka(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?za(t,null,n,r):Ra(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ea(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(z&&s&&ji(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ui(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=pi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?wr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=di(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(wr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ba(t,a===null?null:a.cachePool),a===null?to():eo(t,a),so(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ba(t,null),to(),co(t)):(ba(t,a.cachePool),eo(t,a),co(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=ya();return a=a===null?null:{parent:sa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ba(t,null),to(),so(t),e!==null&&Qi(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ra(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,lo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(z){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(oo(t),(e=R)?(e=rf(e,Ii),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=gi(e),n.return=t,t.child=n,Pi=t,R=null)):e=null,e===null)throw Ri(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(oo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||Qi(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ii(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,R=cf(s.nextSibling),Pi=t,z=!0,Fi=null,Ii=!1,e!==null&&Ni(t,e),t=fc(t,r),t.flags|=4096;return t}return e=di(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ea(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(z&&r&&ji(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ea(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(z&&r&&ji(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ea(t),t.stateNode===null){var a=si,o=n.contextType;typeof o==`object`&&o&&(a=ta(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Va(t),o=n.contextType,a.context=typeof o==`object`&&o?ta(o):si,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Ya(t,r,a,i),Ja(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=si,typeof u==`object`&&u&&(o=ta(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ba=!1;var f=t.memoizedState;a.state=f,Ya(t,r,a,i),Ja(),l=t.memoizedState,s||f!==l||Ba?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ba||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ha(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=si,typeof l==`object`&&l&&(c=ta(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ba=!1,f=t.memoizedState,a.state=f,Ya(t,r,a,i),Ja();var p=t.memoizedState;o!==d||f!==p||Ba||e!==null&&e.dependencies!==null&&$i(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ba||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&$i(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ra(t,e.child,null,i),t.child=Ra(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Hi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:xa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(uo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(z){if(a?ao(t):co(t),(e=R)?(e=rf(e,Ii),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=gi(e),n.return=t,t.child=n,Pi=t,R=null)):e=null,e===null)throw Ri(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(co(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=mi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(ao(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ao(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(co(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=mi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ra(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(co(t),t.child=e.child,t.flags|=128,t=null);else if(ao(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Wi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||Qi(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ii(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,R=cf(c.nextSibling),Pi=t,z=!0,Fi=null,Ii=!1,e!==null&&Ni(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(co(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=di(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=mi(c,a,n,null),c.flags|=2):c=di(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=xa():(l=sa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(ao(t),n=e.child,e=n.sibling,n=di(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=li(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ra(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=uo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(uo,o),ac(e,t,r,n),r=z?Ci:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&$i(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:M(t,t.stateNode.containerInfo),Ji(t,sa,e.memoizedState.cache),Hi();break;case 27:case 5:_e(t);break;case 4:M(t,t.stateNode.containerInfo);break;case 10:Ji(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ao(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(ao(t),t.flags|=128,null);ao(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Qi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(uo,uo.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Ji(t,sa,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,z&&t.flags&1048576&&Ai(t,Ci,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e==`function`)ui(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(M(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ha(e,t),Ya(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ji(t,sa,r),r!==o.cache&&Zi(t,[sa],n,!0),Ja(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=yi(Error(i(424)),t),Wi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(R=cf(e.firstChild),Pi=t,z=!0,Fi=null,Ii=!0,n=za(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Hi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:z||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[ft]=t,r[pt]=e,Pd(r,n,e),Tt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&z&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),Pi=t,Ii=!0,a=R,Zd(t.type)?(lf=a,R=cf(r.firstChild)):R=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&z&&((a=r=R)&&(r=tf(r,t.type,t.pendingProps,Ii),r===null?a=!1:(t.stateNode=r,Pi=t,R=cf(r.firstChild),Ii=!1,a=!0)),a||Ri(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&z&&((e=n=R)&&(n=nf(n,t.pendingProps,Ii),n===null?e=!1:(t.stateNode=n,Pi=t,R=null,e=!0)),e||Ri(t)),null;case 13:return Cc(e,t,n);case 4:return M(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ra(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ji(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ea(t),a=ta(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ea(t),r=ta(sa),e===null?(a=ya(),a===null&&(a=K,o=ca(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Va(t),Ji(t,sa,a)):((e.lanes&n)!==0&&(Ha(e,t),Ya(t,null,null,n),Ja()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ji(t,sa,r),r!==a.cache&&Zi(t,[sa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ji(t,sa,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ka=Ta,Ca}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ka=Ta,Ca}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:et(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Mi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Yi(sa),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ui())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(ve(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=fe.current,Vi(t)?zi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=fe.current,Vi(t))zi(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ft]=t,o[pt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Vi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Pi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ri(t,!0)}else e=Bd(e).createTextNode(r),e[ft]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Vi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ft]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lo(t),t):(lo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ft]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(lo(t),t):(lo(t),null)}return lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ge(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Yi(t.type),U(t),null;case 19:if(A(uo),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fi(n,e),n=n.sibling;return j(uo,uo.current&1|2),z&&ki(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!z)return U(t),null}else 2*je()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=uo.current,j(uo,a?n&1|2:n&1),z&&ki(t,r.treeForkCount),e);case 22:case 23:return lo(t),no(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&A(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yi(sa),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Mi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(sa),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(lo(t),t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(uo),null;case 4:return ge(),null;case 10:return Yi(t.type),null;case 22:case 23:return lo(t),no(),e!==null&&A(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yi(sa),null;case 25:return null;default:return null}}function Vc(e,t){switch(Mi(t),t.tag){case 3:Yi(sa),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&lo(t);break;case 13:lo(t);break;case 19:A(uo);break;case 10:Yi(t.type);break;case 22:case 23:lo(t),no(),e!==null&&A(va);break;case 24:Yi(sa)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Za(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[pt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=L));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ft]=e,t[pt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Or(e),kr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Za(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[yt]||o[ft]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ft]=e,Tt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ft]=e,Tt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{I(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(I(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Xa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&la(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:la(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ta(sa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ta(sa).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:T.T===null?lt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||z){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Jl=e}else Jl=536870912;return e=ro.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),nt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-je(),10<a)){if(yu(r,t,Jl,!Vl),Ze(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:L},Ml(t,a,d);var m=(a&62914560)===a?$l-je():(a&4194048)===a?eu-je():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Cr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&it(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,qi=Ki=null,ko(e),Ma=null,Na=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=di(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=Qe(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ti(),n}function Cu(e,t){B=null,T.H=zs,t===Sa||t===wa?(t=Aa(),Y=3):t===Ca?(t=Aa(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,yi(t,e.current)))}function wu(){var e=ro.current;return e===null?!0:(J&4194048)===J?io===null:(J&62914560)===J||J&536870912?e===io:!1}function Tu(){var e=T.H;return T.H=zs,e===null?zs:e}function Eu(){var e=T.A;return T.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ro.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ro.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,qi=Ki=null,G=r,T.H=i,T.A=a,q===null&&(K=null,J=0,ti()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=je()+500,Su(e,t)):Hl=Qe(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ea(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Ea(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return qi=Ki=null,T.H=r,T.A=a,G=n,q===null?(K=null,J=0,ti(),X):0}function ju(){for(;q!==null&&!ke();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:ko(t);default:Vc(n,t),t=q=fi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){qi=Ki=null,ko(t),Ma=null,Na=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,yi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,yi(n,e.current)),q=null;return}t.flags&32768?(z||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ro.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ei,rt(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Fe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,E.p=a,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Or(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Dr(s.ownerDocument.documentElement,s)){if(c!==null&&kr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Er(s,h),v=Er(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ae();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ct(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,la(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ct(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=yi(n,t),t=$s(e.stateNode,t,2),e=Wa(e,t,2),e!==null&&(nt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=yi(n,e),n=ec(2),r=Wa(t,n,2),r!==null&&(tc(n,r,t,e),nt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>je()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=et()),e=ii(e,t),e!==null&&(nt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return De(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Ze(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=je(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),ct(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=cd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Ze(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,je()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?De(Ne,ad):od()})}function dd(){if(nd===0){var e=fa;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:en(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[pt]||null).action),o=r.submitter;o&&(t=(t=o[pt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Sn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Yr.length;hd++){var gd=Yr[hd];Xr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Xr(Vr,`onAnimationEnd`),Xr(Hr,`onAnimationIteration`),Xr(Ur,`onAnimationStart`),Xr(`dblclick`,`onDoubleClick`),Xr(`focusin`,`onFocus`),Xr(`focusout`,`onBlur`),Xr(Wr,`onTransitionRun`),Xr(Gr,`onTransitionStart`),Xr(Kr,`onTransitionCancel`),Xr(qr,`onTransitionEnd`),Ot(`onMouseEnter`,[`mouseout`,`mouseover`]),Ot(`onMouseLeave`,[`mouseout`,`mouseover`]),Ot(`onPointerEnter`,[`pointerout`,`pointerover`]),Ot(`onPointerLeave`,[`pointerout`,`pointerover`]),Dt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Dt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Dt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Dt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ht];n===void 0&&(n=t[ht]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,N.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!dn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=xt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}cn(function(){var r=a,i=nn(n),s=[];a:{var c=Jr.get(e);if(c!==void 0){var l=Sn,u=e;switch(e){case`keypress`:if(_n(n)===0)break a;case`keydown`:case`keyup`:l=Bn;break;case`focusin`:u=`focus`,l=jn;break;case`focusout`:u=`blur`,l=jn;break;case`beforeblur`:case`afterblur`:l=jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=An;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Hn;break;case Vr:case Hr:case Ur:l=Mn;break;case qr:l=Un;break;case`scroll`:case`scrollend`:l=wn;break;case`wheel`:l=Wn;break;case`copy`:case`cut`:case`paste`:l=Nn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Vn;break;case`toggle`:case`beforetoggle`:l=Gn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=ln(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==tn&&(u=n.relatedTarget||n.fromElement)&&(xt(u)||u[mt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?xt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=kn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Vn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ct(l),h=u==null?c:Ct(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,xt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ct(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=dr;else if(ar(c))if(fr)v=xr;else{v=yr;var y=vr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Zt(r.elementType)&&(v=dr):v=br;if(v&&=v(e,r)){or(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Wt(c,`number`,c.value)}switch(y=r?Ct(r):window,e){case`focusin`:(ar(y)||y.contentEditable===`true`)&&(jr=y,Mr=r,Nr=null);break;case`focusout`:Nr=Mr=jr=null;break;case`mousedown`:Pr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Pr=!1,Fr(s,n,i);break;case`selectionchange`:if(Ar)break;case`keydown`:case`keyup`:Fr(s,n,i)}var b;if(qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else tr?$n(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Xn&&n.locale!==`ko`&&(tr||x!==`onCompositionStart`?x===`onCompositionEnd`&&tr&&(b=gn()):(pn=i,mn=`value`in pn?pn.value:pn.textContent,tr=!0)),y=Ed(r,x),0<y.length&&(x=new Pn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=er(n),b!==null&&(x.data=b)))),(b=Yn?nr(e,n):rr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Pn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=ln(e,n),i!=null&&r.unshift(Td(e,i,a)),i=ln(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=ln(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=ln(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||I(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&I(e,``+r);break;case`className`:Pt(e,`class`,r);break;case`tabIndex`:Pt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Pt(e,n,r);break;case`style`:Xt(e,r,o);break;case`data`:if(t!==`object`){Pt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=L);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=en(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Nt(e,`popover`,r);break;case`xlinkActuate`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Nt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Qt.get(n)||n,Nt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Xt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?I(e,r):(typeof r==`number`||typeof r==`bigint`)&&I(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=L);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Et.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[pt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Nt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}F(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Gt(e,!!r,n,!0):Gt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Zt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Ut(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Gt(e,!!n,n?[]:``,!1):Gt(e,!!n,t,!0)):Gt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Kt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Zt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[yt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[yt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=St(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=P(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+P(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+P(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+P(n.imageSizes)+`"]`)):i+=`[href="`+P(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+P(r)+`"][href="`+P(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Tt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=wt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Tt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=wt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=wt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+P(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Tt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+P(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+P(n.href)+`"]`);if(r)return t.instance=r,Tt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Tt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Tt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Tt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Tt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Tt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[yt]||a[ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Tt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Tt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:D,_currentValue2:D,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=li(3,null,null,t),e.current=a,a.stateNode=e,t=ca(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Va(a),e}function tp(e){return e?(e=si,e):si}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ua(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Wa(e,r,t),n!==null&&(hu(n,e,t),Ga(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ii(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=st(t);var n=ii(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=St(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=je()+500,id(0,!1))}}break;case 31:case 13:s=ii(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=nn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=xt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=St(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=xt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tn=r,n.target.dispatchEvent(r),tn=null}else return t=St(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=St(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[pt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[pt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[mt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[mt]=t.current,Sd(e),new Fp(t)}})),g=c(o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))(),1),_=c(u(),1),v=class extends _.Component{constructor(e){super(e),this.state={error:!1}}static getDerivedStateFromError(e){return{error:!0}}static getDerivedStateFromProps(e){return{error:e.error}}componentDidCatch(e,t){this.props.onError(e,t)}render(){return this.state.error?null:this.props.children}},y={0:BigInt(1),1:BigInt(10),2:BigInt(100),3:BigInt(1e3),4:BigInt(1e4),5:BigInt(1e5),6:BigInt(1e6),7:BigInt(1e7),8:BigInt(1e8),9:BigInt(1e9),10:BigInt(1e10)},b=e=>(y[e]||(y[e]=BigInt(10)**BigInt(e)),y[e]),x=16,ee=16,te={PI:`3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989`,TAU:`6.2831853071795864769252867665590057683943387987502116419498891846156328125724179972560696506842341359642961730265646132941876892191011644634507188162569622349005682054038770422111192892458979098607639288576219513318668922569512964675735663305424038182912971338469206972209086532964267872145204982825474491740132126311763497630418419256585081834307287357851807200226610610976409330427682939038830232188661145407315191839061843722347638652235862102370961489247599254991347037715054497824558763660238982596673467248813132861720427898927904494743814043597218874055410784343525863535047693496369353388102640011362542905271216555715426855155792183472743574429368818024499068602930991707421015845593785178470840399122242580439217280688363196272595495426199210374144226999999967459560999021194634656321926371900489189106938166052850446165066893700705238623763420200062756775057731750664167628412343553382946071965069808575109374623191257277647075751875039155637155610643424536132260038557532223918184328403978`,ETA:`1.5707963267948966192313216916397514420985846996875529104874722961539082031431044993140174126710585339910740432566411533235469223047752911158626797040642405587251420513509692605527798223114744774651909822144054878329667230642378241168933915826356009545728242834617301743052271633241066968036301245706368622935033031577940874407604604814146270458576821839462951800056652652744102332606920734759707558047165286351828797959765460930586909663058965525592740372311899813747836759428763624456139690915059745649168366812203283215430106974731976123685953510899304718513852696085881465883761923374092338347025660002840635726317804138928856713788948045868185893607342204506124767150732747926855253961398446294617710099780560645109804320172090799068148873856549802593536056749999991864890249755298658664080481592975122297276734541513212611541266723425176309655940855050015689193764432937666041907103085888345736517991267452143777343655797814319411768937968759788909288902660856134033065009639383055979546082100994`,PHI:`1.6180339887498948482045868343656381177203091798057628621354486227052604628189024497072072041893911374847540880753868917521266338622235369317931800607667263544333890865959395829056383226613199282902678806752087668925017116962070322210432162695486262963136144381497587012203408058879544547492461856953648644492410443207713449470495658467885098743394422125448770664780915884607499887124007652170575179788341662562494075890697040002812104276217711177780531531714101170466659914669798731761356006708748071013179523689427521948435305678300228785699782977834784587822891109762500302696156170025046433824377648610283831268330372429267526311653392473167111211588186385133162038400522216579128667529465490681131715993432359734949850904094762132229810172610705961164562990981629055520852479035240602017279974717534277759277862561943208275051312181562855122248093947123414517022373580577278616008688382952304592647878017889921990270776903895321968198615143780314997411069260886742962267575605231727775203536139362`,GAMMA:`0.57721566490153286060651209008240243104215933593992359880576723488486772677766467093694706329174674951463144724980708248096050401448654283622417399764492353625350033374293733773767394279259525824709491600873520394816567085323315177661152862119950150798479374508570574002992135478614669402960432542151905877553526733139925401296742051375413954911168510280798423487758720503843109399736137255306088933126760017247953783675927135157722610273492913940798430103417771778088154957066107501016191663340152278935867965497252036212879226555953669628176388792726801324310104765059637039473949576389065729679296010090151251959509222435014093498712282479497471956469763185066761290638110518241974448678363808617494551698927923018773910729457815543160050021828440960537724342032854783670151773943987003023703395183286900015581939880427074115422278197165230110735658339673487176504919418123000406546931429992977795693031005030863034185698032310836916400258929708909854868257773642882539549258736295961332985747393`,E:`2.718281828459045235360287471352662497757247093699959574966967627724076630353547594571382178525166427427466391932003059921817413596629043572900334295260595630738132328627943490763233829880753195251019011573834187930702154089149934884167509244761460668082264800168477411853742345442437107539077744992069551702761838606261331384583000752044933826560297606737113200709328709127443747047230696977209310141692836819025515108657463772111252389784425056953696770785449969967946864454905987931636889230098793127736178215424999229576351482208269895193668033182528869398496465105820939239829488793320362509443117301238197068416140397019837679320683282376464804295311802328782509819455815301756717361332069811250996181881593041690351598888519345807273866738589422879228499892086805825749279610484198444363463244968487560233624827041978623209002160990235304369941849146314093431738143640546253152096183690888707016768396424378140592714563549061303107208510383750510115747704171898610687396965521267154688957035035402`,SQRT2:`1.41421356237309504880168872420969807856967187537694807317667973799073247846210703885038753432764157273501384623091229702492483605585073721264412149709993583141322266592750559275579995050115278206057147010955997160597027453459686201472851741864088919860955232923048430871432145083976260362799525140798968725339654633180882964062061525835239505474575028775996172983557522033753185701135437460340849884716038689997069900481503054402779031645424782306849293691862158057846311159666871301301561856898723723528850926486124949771542183342042856860601468247207714358548741556570696776537202264854470158588016207584749226572260020855844665214583988939443709265918003113882464681570826301005948587040031864803421948972782906410450726368813137398552561173220402450912277002269411275736272804957381089675040183698683684507257993647290607629969413804756548237289971803268024744206292691248590521810044598421505911202494413417285314781058036033710773091828693147101711116839165817268894197587165821521282295184884`,SQRT3:`1.73205080756887729352744634150587236694280525381038062805580697945193301690880003708114618675724857567562614141540670302996994509499895247881165551209437364852809323190230558206797482010108467492326501531234326690332288665067225466892183797122704713166036786158801904998653737985938946765034750657605075661834812960610094760218719032508314582952395983299778982450828871446383291734722416398458785539766795806381835366611084317378089437831610208830552490167002352071114428869599095636579708716849807289949329648428302078640860398873869753758231731783139599298300783870287705391336956331210370726401924910676823119928837564114142201674275210237299427083105989845947598766428889779614783795839022885485290357603385280806438197234466105968972287286526415382266469842002119548415527844118128653450703519165001668929441548084607127714399976292683462957743836189511012714863874697654598245178855097537901388066496191196222295711055524292372319219773826256163146884203285371668293864961191704973883639549593`,LN10:`2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286248633409525465082806756666287369098781689482907208325554680843799894826233198528393505308965377732628846163366222287698219886746543667474404243274365155048934314939391479619404400222105101714174800368808401264708068556774321622835522011480466371565912137345074785694768346361679210180644507064800027750268491674655058685693567342067058113642922455440575892572420824131469568901675894025677631135691929203337658714166023010570308963457207544037084746994016826928280848118428931484852494864487192780967627127577539702766860595249671667418348570442250719796500471495105049221477656763693866297697952211071826454973477266242570942932258279850258550978526538320760672631716430950599508780752371033310119785754733154142180842754386359177811705430982748238504564801909561029929182431823752535770975053956518769751037497088869218020518933950723853920514463419726528728696511086257149219884997`,LN2:`0.6931471805599453094172321214581765680755001343602552541206800094933936219696947156058633269964186875420014810205706857336855202357581305570326707516350759619307275708283714351903070386238916734711233501153644979552391204751726815749320651555247341395258829504530070953263666426541042391578149520437404303855008019441706416715186447128399681717845469570262716310645461502572074024816377733896385506952606683411372738737229289564935470257626520988596932019650585547647033067936544325476327449512504060694381471046899465062201677204245245296126879465461931651746813926725041038025462596568691441928716082938031727143677826548775664850856740776484514644399404614226031930967354025744460703080960850474866385231381816767514386674766478908814371419854942315199735488037516586127535291661000710535582498794147295092931138971559982056543928717000721808576102523688921324497138932037843935308877482597017155910708823683627589842589185353024363421436706118923678919237231467232172053401649256872747782344535347`,LEMNISCATE:`2.622057554292119810464839589891119413682754951431623162816821703800790587070414250230295532961429093446135752671783218055608956901393935694701119434775235840422641497164906951936899979932146072383121390810206221897429600856554539772305369549710288888325526487021329012097540833128568511729752229214296692430513968456455539432881415381331735108409226312132476667633414509988603429421479224714487963907872564189521811027252516629964333384660679333635093139808526237739409142626489848034804572541477046175421256342129955863129980224054609012091499139897885645312480971101149665075060542093841723886900040274785389625483030580303946324783219558325522973037191341918983592199914229536672569106861130938134980725552913015093730332611087045814240765781886530766932476940761626721636249549480066760961388122322476925591018705775743614648912879832686662030731373313562107612636379245785801781364105361306093563472025022592312041202668270457723044608378953311357002940577442011806826257962983642671092116`,GAUSS:`0.83462684167407318628142973279904680899399301349034700244982737010368199270952641186969116035127532412906785035241201008672478900763475039265906052674271256032068599897375152146157410719066771476231124461664405187138396784514028386920045138133589075855302049848005280446931643580936897895689068917412073729109406655817518702547740107467837971652635675333190654545251769296103056005406849466254896421861429472075214865365816107620214603752034877535962085677116829220032535910958989989306983319969697733588373910495908596740291824695687469164857451910672757407861143814276105801843203454261549375461009570891175210684201358033124753921938139023239090952343408874222691843888629942222592633521639478011022099075214906939643083603825771794119487059673964272655835084832169397133695059511623882815154747022864207775775371060188804723248904618525301889597025689818013878804895735929346540394633132158338785532854522493441641765173202349682703374720941476496496460623737943995705190866698254812596246577649`},S=class{constructor(e=0,t){if(typeof e==`bigint`){this._n=e,this.precision=t||x;return}typeof e==`number`&&(e=e===0?`0.0`:e.toFixed(-Math.log10(Math.abs(e))+x)),typeof e==`string`&&(e.match(/\d+.?e-?\d+/)&&(e=parseFloat(e).toFixed(x)),e in te&&(e=te[e]));let[n,r]=e.split(`.`).concat(``);this.precision=t||r.length||1,this._n=BigInt(n+r.padEnd(this.precision,`0`).slice(0,this.precision))}toPrecision(e){e!==this.precision&&(e>this.precision?this._n*=BigInt(10)**BigInt(e-this.precision):this._n/=BigInt(10)**BigInt(this.precision-e),this.precision=e)}adapt(e){return e=C(e),this.precision>e.precision?e.toPrecision(this.precision):this.precision<e.precision&&this.toPrecision(e.precision),e}add(e){return e instanceof ne?e.add(this):(e=this.adapt(e),C(this._n+e._n,this.precision))}subtract(e){return e instanceof ne?e.neg().add(this):(e=this.adapt(e),C(this._n-e._n,this.precision))}multiply(e){return e instanceof ne?e.multiply(this):(e=this.adapt(e),C(this._n*e._n/b(this.precision),this.precision))}divide(e){return e instanceof ne?e.pow(-1).multiply(this):(e=this.adapt(e),C(this._n*b(this.precision)/e._n,this.precision))}pow(e){if(e instanceof ne)return e.pow(this);let t=this;if(e%1==0){for(let n=1;n<e;n++)t=t.multiply(this);return t}return e=this.adapt(e),t.log().multiply(e).exp()}tetra(e){let t=C(1);for(let n=0;n<e;n++)t=this.pow(t);return t}abs(){return C(this._n<0?-this._n:this._n,this.precision)}sign(){return C(this._n<0?-1:+(this._n>0))}neg(){return this._n=-this._n,this}nop(){return this}sqrt(){let e=this.precision,t=this._n,n=t,r=(t+1n)/2n;for(;r<n;)n=r,r=(n+t/n)/2n;return C(n,e)}atan(){let e=this.precision,t=this,n=C(0,e);for(let e=1;e<ee;e+=2)n=n.add(t.pow(e).divide(e)),t=t.neg();return n}exp(){let e=this.precision,t=this,n=C(1,e);for(let e=1;e<ee;e++)n=n.add(t.pow(e).divide(e));return n}frexp(){let e=this,t=C();for(;e.gt(C(1));)e=e.divide(2),t=t.add(1);return[e,t]}log(){let e=this.precision,[t,n]=this.frexp(),r=t.subtract(1),i=C(),a=1;for(let t=1;t<e;t++)i=i.add(r.pow(t).divide(t).multiply(a)),a*=-1;return i.add(n.multiply(re(e)))}cos(){let e=this.precision,t=this,n=C(1,e),r=-1;for(let e=2;e<ee;e+=2)n=n.add(t.pow(e).divide(e).neg().multiply(r)),r*=-1;return n}sin(){let e=this,t=e,n=-1;for(let r=3;r<ee;r+=2)t=t.add(e.pow(r).divide(r).neg().multiply(n)),n*=-1;return t}tan(){this.precision;let e=this,t=e,n=1;for(let r=3;r<ee;r+=2)t=t.add(e.pow(r).divide(r).multiply(n)),n*=-1;return t}sinh(){let e=this.precision,t=this,n=C(1,e);for(let e=2;e<ee;e+=2)n=n.add(t.pow(e).divide(e));return n}cosh(){let e=this.precision,t=this,n=C(1,e);for(let e=2;e<ee;e+=2)n=n.add(t.pow(e).divide(e));return n}acos(){let e=this.precision,t=this,n=C(0,e),r=1;for(let e=1;e<ee;e+=2)n=n.add(t.pow(e).divide(e).multiply(r)),r*=-1;return n}asin(){let e=this.precision,t=this,n=C(0,e),r=1;for(let e=1;e<ee;e+=2)n=n.add(t.pow(e).divide(e).multiply(r)),r*=-1;return n}toExp(){}eq(e){return e=this.adapt(e),this._n===e._n}gt(e){return e=this.adapt(e),this._n>e._n}lt(e){return e=this.adapt(e),this._n<e._n}gte(e){return e=this.adapt(e),this._n>=e._n}lte(e){return e=this.adapt(e),this._n<=e._n}toNumber(){return Number(this._n)/Number(b(this.precision))}toString(){let e=this._n.toString().replace(`-`,``).padStart(this.precision+1,`0`);return e=(e.slice(0,-this.precision)+`.`+e.slice(-this.precision)).replace(/(\.0*|0+)$/,``),this._n<0?`-`+e:e}toFloat(){return parseFloat(this.toString())}},C=(e,t)=>!t&&e instanceof S?e:new S(e,t),ne=class e{constructor(e,t){this.re=e,this.im=t}add(t){return t=w(t),new e(this.re.add(t.re),this.im.add(t.im))}subtract(t){return t=w(t),new e(this.re.subtract(t.re),this.im.subtract(t.im))}multiply(t){return t=w(t),new e(this.re.multiply(t.re).subtract(this.im.multiply(t.im)),this.re.multiply(t.im).add(this.im.multiply(t.re)))}divide(t){t=w(t);let n=t.re.multiply(t.re).add(t.im.multiply(t.im));return new e(this.re.multiply(t.re).add(this.im.multiply(t.im)).divide(n),this.im.multiply(t.re).subtract(this.re.multiply(t.im)).divide(n))}neg(){return new e(this.re.neg(),this.im.neg())}exp(){let t=this.re.exp();return new e(this.im.cos().multiply(t),this.im.sin().multiply(t))}atan2(){let{re:e,im:t}=this,n=e.abs(),r=t.abs();if(n._n===0n&&r._n===0n)return C(0);if(n._n===0n)return C(t>0n?Math.PI/2:-Math.PI/2);let i=t.divide(e).atan();return e._n>0n?i:t._n>=0n?i.add(Math.PI):i.subtract(Math.PI)}sqrt(){let t=this.abs().sqrt(),n=this.arg().divide(2);return new e(t.multiply(n.cos()),t.multiply(n.sin()))}cos(){return new e(this.re.cos().multiply(this.im.sinh()),this.re.sin().multiply(this.im.cosh()))}sin(){return new e(this.re.sin().multiply(this.im.cosh()),this.re.cos().multiply(this.im.sinh()))}tan(){return this.sin().divide(this.cos())}sinh(){return new e(this.re.sinh().multiply(this.im.cos()),this.re.cosh().multiply(this.im.sin()))}cosh(){return new e(this.re.cosh().multiply(this.im.cos()),this.re.sinh().multiply(this.im.sin()))}tanh(){return this.sinh().divide(this.cosh())}asin(){return this.multiply(this).neg().add(1).sqrt().add(this.im).log().neg().multiply(w(0,1))}acos(){return this.multiply(this).neg().add(1).sqrt().add(this).log().neg().multiply(w(0,1))}atan(){return this.add(w(0,1)).log().neg().multiply(w(0,.5))}asinh(){return this.multiply(this).add(1).sqrt().add(this).log()}acosh(){return this.multiply(this).subtract(1).sqrt().add(this).log()}atanh(){return this.add(1).divide(this.neg().add(1)).log().multiply(w(.5))}log(){return new e(this.abs().log(),this.arg())}pow(e){if(e=w(e),e.im.toNumber()===0){let t=e.re.toNumber();if(t%1==0){if(t===0)return w(1);if(t===1)return this;if(t===2)return this.multiply(this);if(t===3)return this.multiply(this).multiply(this);if(t===4){let e=this.multiply(this);return e.multiply(e)}if(t===5){let e=this.multiply(this);return e.multiply(e).multiply(this)}if(t===6){let e=this.multiply(this);return e.multiply(e).multiply(e)}if(t===7){let e=this.multiply(this);return e.multiply(e).multiply(e).multiply(this)}if(t===8){let e=this.multiply(this),t=e.multiply(e);return t.multiply(t)}if(t===9){let e=this.multiply(this),t=e.multiply(e);return t.multiply(t).multiply(this)}let e=this;for(let n=1;n<t;n++)e=e.multiply(this);return e}}return this.re.toNumber()===0&&this.im.toNumber()===0?w(0):e.re.toNumber()===0&&e.im.toNumber()===0?w(1):this.log().multiply(e).exp()}tetra(e){let t=w(1);for(let n=0;n<e;n++)t=this.pow(t);return t}norm2(){return this.re.multiply(this.re).add(this.im.multiply(this.im))}norm(){return C(this.norm2().sqrt())}arg(){return this.atan2()}conj(){return w(this.re,-this.im)}real(){return this.re}imag(){return this.im}toString(){return`complex: <${this.re}+${this.im}i>`}to2fv(){return[this.re.toNumber(),this.im.toNumber()]}static isComplexString(e){return e.match(/^complex: <.+\+.+i>$/)}static fromString(t){let n=t.match(/^complex: <(.+)\+(.+)i>$/);if(!n)throw Error(`Invalid complex string`);let[,r,i]=n;return new e(C(r),C(i))}},re=e=>C(`0.6931471805599453094172321214581765680755001343602552541206800094933936219696947156058633269964186875420014810205706857336855202357581305570326707516350759619307275708283714351903070386238916734711233501153644979552391204751726815749320651555247341395258829504530070953263666426541042391578149520437404303855008019441706416715186447128399681717845469570262716310645461502572074024816377733896385506952606683411372738737229289564935470257626520988596932019650585547647033067936544325476327449512504060694381471046899465`,e),w=(e=0,t=0,n=null)=>e instanceof ne?e:new ne(C(e,n),C(t,n));window.m=C,window.cx=w;var ie={whitespace:/^\s+/,float:/^([0-9]+([.][0-9]*)?|[.][0-9]+)/,integer:/^[0-9]+/,operator:/^(\*\*|[+\-*/%]|\^{1,2}|\|-\|)/,unaryPrefix:/^~/,unarySuffix:/^[#']/,identifier:/^[a-zA-Z_][a-zA-Z0-9_]*'*/,pipe:/^\|/,lparen:/^\(/,rparen:/^\)/,comma:/^,/},ae={"+":1,"-":2,"*":3,"/":4,"%":5,"~":5,"^":6,"^^":6},oe=class{constructor(e,t,n,r){this.type=e,this.value=t,this.start=n,this.end=r}toString(){return`<${this.type}: ${this.value} at ${this.start}-${this.end}>`}},se={"+":`cadd`,"-":`csub`,"*":`cmul`,"/":`cdiv`,"%":`cmod`,"^":`cpow`,"^^":`ctetra`,"|-|":`diffabs`},ce={R:`R`,I:`I`,sqrt:`csqrt`,cos:`ccos`,sin:`csin`,tan:`ctan`,acos:`cacos`,asin:`casin`,atan:`catan`,cosh:`ccosh`,sinh:`csinh`,tanh:`ctanh`,acosh:`cacosh`,asinh:`casinh`,atanh:`catanh`,log:`clog`,exp:`cexp`,expint:`cexpint`,lint:`clint`,abs:`cnorm`,norm:`cnorm`,arg:`carg`,polar:`cpolar`,unpolar:`cunpolar`,mod:`cmod`,beta:`cbeta`,"beta'":`cdbeta`,gamma:`cgamma`,"gamma'":`cdgamma`,factorial:`cfactorial`,eta:`ceta`,zeta:`czeta`,"zeta'":`cdzeta`,psi:`cpsi`,polygamma:`cpolygamma`,phi:`cphi`,xi:`cxi`,li:`cli`,sn:`csn`,cn:`ccn`,dn:`cdn`,tania:`ctania`,"tania'":`cdtania`,atania:`catania`,"atania'":`cdatania`,doya:`cdoya`,filog:`cfilog`,tet:`ctet`,ate:`cate`,tetra:`ctetranat`,fibonacci:`cfibonacci`,fibonaccir:`cfibonaccir`,weierstrass:`cweierstrass`,"weierstrass'":`cdweierstrass`,weierstrassr:`cweierstrassr`,nome:`cnome`,ellk:`cellk`,ellfi:`cellipticFi`,erf:`cerf`,"erf'":`cderf`,erfc:`cerfc`,erfcx:`cerfcx`,erfi:`cerfi`,dawson:`cdawson`,faddeeva:`cfaddeeva`,"faddeeva'":`cdfaddeeva`,fresnels:`cfresnels`,fresnelc:`cfresnelc`,fresnelf:`cfresnelf`,fresnelg:`cfresnelg`,lambertw:`clambertw`,W0:`clambertw`,omega:`comega`,sec:`csec`,csc:`ccsc`,cot:`ccot`,sech:`csech`,csch:`ccsch`,coth:`ccoth`,acot:`cacot`,asec:`casec`,acsc:`cacsc`,acoth:`cacoth`,asech:`casech`,acsch:`cacsch`,cbrt:`ccbrt`,root:`croot`,sinc:`csinc`,floor:`cfloor`,ceil:`cceil`,round:`cround`,frac:`cfrac`,log2:`clog2`,log10:`clog10`,logb:`clogb`,sgn:`csgn`,lgamma:`clgamma`,rgamma:`crgamma`,trigamma:`ctrigamma`,"psi'":`ctrigamma`,gammal:`cgammal`,gammau:`cgammau`,gammap:`cgammap`,gammaq:`cgammaq`,rstheta:`crstheta`,riemannz:`criemannz`,dirichletbeta:`cdirichletbeta`,dirichletl3:`cdirichletl3`,dirichletlambda:`cdirichletlambda`,qnome:`cqnome`,theta1:`ctheta1`,theta2:`ctheta2`,theta3:`ctheta3`,theta4:`ctheta4`,"theta1'":`cdtheta1`,"theta2'":`cdtheta2`,"theta3'":`cdtheta3`,"theta4'":`cdtheta4`,qpoch:`cqpoch`,eulerq:`ceulerq`,dedekind:`cdedekind`,eisenstein4:`ceisenstein4`,eisenstein6:`ceisenstein6`,kleinj:`ckleinj`,modlambda:`cmodlambda`,ellke:`cellke`,wp:`cwp`,hyp0f1:`chyp0f1`,hyp1f1:`chyp1f1`,hyp2f1:`chyp2f1`,legendre:`clegendrep`,chebyshevt:`cchebyshevt`,chebyshevu:`cchebyshevu`,laguerre:`claguerre`,hermite:`chermite`,besselj:`cbesselj`,bessely:`cbessely`,besselh1:`cbesselh1`,besselh2:`cbesselh2`,besseli:`cbesseli`,besselk:`cbesselk`,airyai:`cairyai`,airybi:`cairybi`,sinint:`csinint`,cosint:`ccosint`,sinhint:`csinhint`,coshint:`ccoshint`},le={"+":(e,t)=>e+t,"-":(e,t)=>e-t,"*":(e,t)=>e*t,"/":(e,t)=>e/t,"%":(e,t)=>e%t,"^":(e,t)=>e**t,"^^":(e,t)=>{let n=1;for(let r=0;r<t;r++)n=e**n;return n}},ue={"-":`-`,"~":`conj`,abs:`abs`,sign:`sign`},T={"+":`add`,"-":`subtract`,"*":`multiply`,"/":`divide`,"%":`mod`,"^":`pow`,"^^":`tetra`},E={"-":`neg`,"~":`conj`,abs:`abs`,sign:`sign`},D=class e{constructor(e,t,n){this.type=e,this.left=t,this.right=n}is(e){return this.type===e.type&&this.left.is(e.left)&&this.right.is(e.right)}clone(t=null,n=null){let r=this.left,i=this.right;return t&&(r.is(t)&&(r=n),i.is(t)&&(i=n)),new e(this.type,r.clone(t,n),i.clone(t,n))}isPureReal(){return this.left.isPureReal()&&this.right.isPureReal()||this.left.isPureImag()&&this.right.isPureImag()}isPureImag(){return[`+`,`-`].includes(this.type)?this.left.isPureImag()&&this.right.isPureImag():[`*`,`/`].includes(this.type)?this.left.isPureImag()&&this.right.isPureReal()||this.left.isPureReal()&&this.right.isPureImag():!1}toTree(){return`<${this.type}: ${this.left.toTree()} ${this.right.toTree()}>`}toString(){let t=this.left.toString(),n=this.right.toString();return this.type===`complex`?`(${t} + ${n}i)`:((this.left instanceof e&&ae[this.left.type]<ae[this.type]||ae[this.left.type]===ae[this.type]&&[`-`,`/`,`^`,`^^`].includes(this.type))&&(t=`(${t})`),(this.right instanceof e&&ae[this.right.type]<ae[this.type]||ae[this.right.type]===ae[this.type]&&[`-`,`/`,`^`,`^^`].includes(this.type))&&(n=`(${n})`),[`^`,`^^`].includes(this.type)?`${t}${this.type}${n}`:`${t} ${this.type} ${n}`)}toShader(){if(this.type===`^`&&(this.right.type===`number`||this.right instanceof O&&this.right.operand.type===`number`)){let e=0;if(e=this.right instanceof O?this.right.operand.value*(this.right.type===`-`?-1:1):this.right.value,e%1==0)return e===1?this.left.toShader():e>0&&e<10?`cpow${e}(${this.left.toShader()})`:`cpow(${this.left.toShader()}, ${e})`}return`${se[this.type]}(${this.left.toShader()}, ${this.right.toShader()})`}toComplex(){return`(${this.left.toComplex()}).${T[this.type]}(${this.right.toComplex()})`}toDerivative(t,n){let r=[...t,...n];if([`+`,`-`].includes(this.type))return new e(this.type,this.left.toDerivative(t,n),this.right.toDerivative(t,n));if(this.type===`*`)return new e(`+`,new e(`*`,this.left.toDerivative(t,n),this.right),new e(`*`,this.left,this.right.toDerivative(t,n)));if(this.type===`/`)return new e(`/`,new e(`-`,new e(`*`,this.left.toDerivative(t,n),this.right),new e(`*`,this.left,this.right.toDerivative(t,n))),new e(`^`,this.right,new M(`number`,2)));if(this.type===`^`)return new e(`*`,new e(`^`,this.left,new e(`-`,this.right,new M(`number`,1))),new e(`+`,new e(`*`,this.right,this.left.toDerivative(t,n)),new e(`*`,new e(`*`,this.left,new me(`log`,[this.left])),this.right.toDerivative(t,n))));if(this.type===`^^`){if((this.left.type===`number`||this.left.type===`identifier`&&!r.includes(this.left.value))&&(this.right.type===`number`||this.right.type===`identifier`&&!r.includes(this.right.value)))return this;let i=(t,n)=>n<=1?new M(`number`,1):new e(`*`,new e(`^^`,t,new M(`number`,n)),new e(`+`,new e(`*`,i(t,n-1),new me(`log`,[t])),new e(`*`,new e(`^^`,t,new M(`number`,n-1)),new e(`/`,new M(`number`,1),t))));if(this.right.type===`number`)return new e(`*`,this.left.toDerivative(t,n),i(this.left,this.right.value))}return new e(this.type,this.left.toDerivative(t,n),this.right.toDerivative(t,n))}simplify(){let t=this.left.simplify(),n=this.right.simplify();if(this.type===`+`){if(t.type===`number`&&t.value===0)return n;if(n.type===`number`&&n.value===0)return t}if(this.type===`-`){if(t.type===`number`&&t.value===0)return new O(`-`,n).simplify();if(n.type===`number`&&n.value===0)return t}if(this.type===`*`){if(t.type===`number`&&t.value===0||n.type===`number`&&n.value===0)return new M(`number`,0);if(t.type===`number`&&t.value===1)return n;if(n.type===`number`&&n.value===1)return t}if(this.type===`/`){if(t.type===`number`&&t.value===0)return new M(`number`,0);if(n.type===`number`&&n.value===1)return t}if(this.type===`^`&&(n.type===`number`||n instanceof O&&n.operand.type===`number`)){let r=0;if(r=n instanceof O?n.operand.value*(n.type===`-`?-1:1):n.value,r===0)return new M(`number`,1);if(r===1)return t;if(t.type===`^`&&t.right.type===`number`)return new e(`^`,t.left,new M(`number`,t.right.value*r)).simplify()}if(this.type===`^^`&&(n.type===`number`||n instanceof O&&n.operand.type===`number`)){let e=0;if(e=n instanceof O?n.operand.value*(n.type===`-`?-1:1):n.value,e===0)return new M(`number`,1);if(e===1)return t}if(n.type===`number`&&t.type===`number`){let e=this.type===`**`?`^`:this.type;return le[e](t.value,n.value)%1==0?new M(`number`,le[e](t.value,n.value)):this}if(t.type===`complex`&&n.isPureReal()){if([`+`,`-`].includes(this.type))return new he(new e(this.type,t.real,n),t.imag).simplify();if([`*`,`/`].includes(this.type))return new he(new e(this.type,t.real,n),new e(this.type,t.imag,n)).simplify()}if(t.isPureReal()&&n.type===`complex`){if([`+`,`-`].includes(this.type))return new he(new e(this.type,t,n.real),n.imag).simplify();if([`*`,`/`].includes(this.type))return new he(new e(this.type,t,n.real),new e(this.type,t,n.imag)).simplify()}if(t.type===`complex`&&n.type===`complex`){if([`+`,`-`].includes(this.type))return new he(new e(this.type,t.real,n.real),new e(this.type,t.imag,n.imag)).simplify();if(this.type===`*`)return new he(new e(`-`,new e(`*`,t.real,n.real),new e(`*`,t.imag,n.imag)),new e(`+`,new e(`*`,t.real,n.imag),new e(`*`,t.imag,n.real))).simplify();if(this.type===`/`){let r=new e(`+`,new e(`^`,n.real,2),new e(`^`,n.imag,2));return new he(new e(`/`,new e(`+`,new e(`*`,t.real,n.real),new e(`*`,t.imag,n.imag)),r),new e(`/`,new e(`-`,new e(`*`,t.imag,n.real),new e(`*`,t.real,n.imag)),r)).simplify()}}return new e(this.type,t,n)}},O=class e{constructor(e,t){this.type=e,this.operand=t}is(e){return this.type===e.type&&this.operand.is(e.operand)}clone(t=null,n=null){let r=this.operand;return t&&r.is(t)&&(r=n),new e(this.type,r.clone(t,n))}isPureReal(){return this.operand.isPureReal()}isPureImag(){return[`+`,`-`,`~`].includes(this.type)&&this.operand.isPureImag()}toTree(){return`<${this.type}: ${this.operand.toTree()}>`}toString(){let e=this.operand.toString();return(this.operand instanceof D&&ae[this.operand.type]<ae[this.type]||ae[this.operand.type]===ae[this.type]&&[`-`,`/`,`^`].includes(this.type))&&(e=`(${e})`),`${this.type}${e}`}toShader(){return this.type===`+`?this.operand.toShader():`${ue[this.type]}(${this.operand.toShader()})`}toComplex(){return this.type===`+`?this.operand.toComplex():`(${this.operand.toComplex()}).${E[this.type]}()`}toDerivative(t,n){return new e(this.type,this.operand.toDerivative(t,n))}simplify(){let t=this.operand.simplify();return this.type===`+`?t:this.type===`'`?t.toDerivative([],[`z`,`z_1`]).simplify():this.type===`#`?new D(`/`,t,t.toDerivative([],[`z`,`z_1`])).simplify():this.type===`-`&&t.type===`number`?new M(`number`,-t.value):t instanceof e&&[`-`,`~`].includes(this.type)&&t.type===this.type?t.operand:new e(this.type,t)}},k=e=>new M(`number`,e),de=e=>new M(`identifier`,e),A=(e,t,n)=>new D(e,t,n),j=(e,...t)=>new me(e,t),fe=()=>A(`/`,k(2),j(`sqrt`,de(`PI`))),pe=(e,t,n)=>{let{name:r,args:i}=e,a=i[0],o=i[i.length-1],s=a.toDerivative(t,n),c=o.toDerivative(t,n),l=(e,t=s)=>A(`*`,e,t),u=i[1],d=e=>A(e<0?`-`:`+`,u,k(Math.abs(e)));switch(r){case`sec`:return l(A(`*`,j(`sec`,a),j(`tan`,a)));case`csc`:return l(new O(`-`,A(`*`,j(`csc`,a),j(`cot`,a))));case`cot`:return A(`/`,new O(`-`,s),A(`^`,j(`sin`,a),k(2)));case`sech`:return l(new O(`-`,A(`*`,j(`sech`,a),j(`tanh`,a))));case`csch`:return l(new O(`-`,A(`*`,j(`csch`,a),j(`coth`,a))));case`coth`:return A(`/`,new O(`-`,s),A(`^`,j(`sinh`,a),k(2)));case`cbrt`:return A(`/`,s,A(`*`,k(3),A(`^`,j(`cbrt`,a),k(2))));case`lgamma`:return l(j(`psi`,a));case`expint`:return l(A(`/`,j(`exp`,a),a));case`lint`:return l(A(`/`,k(1),j(`log`,a)));case`sinint`:return l(A(`/`,j(`sin`,a),a));case`cosint`:return l(A(`/`,j(`cos`,a),a));case`sinhint`:return l(A(`/`,j(`sinh`,a),a));case`coshint`:return l(A(`/`,j(`cosh`,a),a));case`erfc`:return l(new O(`-`,j(`erf'`,a)));case`erfi`:return l(A(`*`,fe(),j(`exp`,A(`^`,a,k(2)))));case`dawson`:return l(A(`-`,k(1),A(`*`,k(2),A(`*`,a,j(`dawson`,a)))));case`lambertw`:case`W0`:return l(A(`/`,e,A(`*`,a,A(`+`,k(1),j(`lambertw`,...i)))));case`omega`:return l(A(`/`,e,A(`+`,k(1),e)));case`besselj`:case`bessely`:return i.length===2?l(A(`/`,A(`-`,j(r,a,d(-1)),j(r,a,d(1))),k(2))):null;case`besseli`:return i.length===2?l(A(`/`,A(`+`,j(r,a,d(-1)),j(r,a,d(1))),k(2))):null;case`besselk`:return i.length===2?l(new O(`-`,A(`/`,A(`+`,j(r,a,d(-1)),j(r,a,d(1))),k(2)))):null;case`hyp2f1`:if(i.length===4){let[e,t,n]=i;return l(A(`*`,A(`/`,A(`*`,e,t),n),j(r,A(`+`,e,k(1)),A(`+`,t,k(1)),A(`+`,n,k(1)),o)),c)}return null;case`hyp1f1`:if(i.length===3){let[e,t]=i;return l(A(`*`,A(`/`,e,t),j(r,A(`+`,e,k(1)),A(`+`,t,k(1)),o)),c)}return null;case`hyp0f1`:return i.length===2?l(A(`/`,j(r,A(`+`,a,k(1)),o),a),c):null;case`gammal`:case`gammau`:{let[e]=i,t=A(`*`,A(`^`,o,A(`-`,e,k(1))),j(`exp`,new O(`-`,o)));return l(r===`gammal`?t:new O(`-`,t),c)}default:return null}},me=class e{constructor(e,t){this.name=e,this.args=t,this.type=`function`}is(e){return this.type===e.type&&this.name===e.name&&this.args.every((t,n)=>t.is(e.args[n]))}clone(t=null,n=null){return new e(this.name,this.args.map(e=>e.clone(t,n)))}isPureReal(){return[`abs`,`re`,`im`].includes(this.name)}isPureImag(){return!1}toTree(){return`<${this.name}(): ${this.args.map(e=>e.toTree()).join(`, `)}>`}toString(){return`${this.name}(${this.args.map(e=>e.toString()).join(`, `)})`}toShader(){if([`sum`,`product`].includes(this.name)&&this.args.length===4&&this.args[0].type===`identifier`&&this.args[1].type===`number`&&this.args[2].type===`number`){let[e,t,n,r]=this.args,i=new M(`number`,this.name===`sum`?0:1);for(let a=t.value;a<=n.value;a++)i=new D(this.name===`sum`?`+`:`*`,i,r.clone(e,new M(`number`,a)));return i.simplify().toShader()}if(this.args.length===0)return`${ce[this.name]||this.name}()`;if(this.name===`re`){let e=this.args[0].toShader();return this.args[0].type===`number`?e:`vec2(${e}.x, 0.)`}return this.name===`im`?this.args[0].type===`number`?new M(`number`,0).toShader():`vec2(${this.args[0].toShader()}.y, 0.)`:`${ce[this.name]||this.name}(${this.args.map(e=>e.toShader()).join(`, `)})`}toComplex(){let e={re:`real`,im:`imag`}[this.name]||this.name;return e=e.replace(`'`,`_prime`),this.args.length===0?`${e}()`:`${this.args[0].toComplex()}.${e}(${this.args.slice(1).map(e=>e.toComplex()).join(`, `)})`}toDerivative(t,n){return this.name===`log`?new D(`/`,this.args[0].toDerivative(t,n),this.args[0]):this.name===`exp`?new D(`*`,this,this.args[0].toDerivative(t,n)):this.name===`abs`?new D(`*`,new e(`sign`,this.args),this.args[0].toDerivative(t,n)):this.name===`sqrt`?new D(`/`,this.args[0].toDerivative(t,n),new D(`*`,new M(`number`,2),this)):this.name===`sin`?new D(`*`,new e(`cos`,this.args),this.args[0].toDerivative(t,n)):this.name===`cos`?new D(`*`,new O(`-`,new e(`sin`,this.args)),this.args[0].toDerivative(t,n)):this.name===`tan`?new D(`/`,this.args[0].toDerivative(t,n),new D(`^`,new e(`cos`,this.args),new M(`number`,2))):this.name===`asin`?new D(`/`,this.args[0].toDerivative(t,n),new D(`^`,new D(`-`,new M(`number`,1),new D(`^`,this.args[0],new M(`number`,2))),new M(`number`,.5))):this.name===`acos`?new D(`/`,new O(`-`,this.args[0].toDerivative(t,n)),new D(`^`,new D(`-`,new M(`number`,1),new D(`^`,this.args[0],new M(`number`,2))),new M(`number`,.5))):this.name===`atan`?new D(`/`,this.args[0].toDerivative(t,n),new D(`+`,new M(`number`,1),new D(`^`,this.args[0],new M(`number`,2)))):this.name===`sinh`?new D(`*`,new e(`cosh`,this.args),this.args[0].toDerivative(t,n)):this.name===`cosh`?new D(`*`,new e(`sinh`,this.args),this.args[0].toDerivative(t,n)):this.name===`tanh`?new D(`/`,this.args[0].toDerivative(t,n),new D(`^`,new e(`cosh`,this.args),new M(`number`,2))):this.name===`asinh`?new D(`/`,this.args[0].toDerivative(t,n),new D(`^`,new D(`+`,new D(`^`,this.args[0],new M(`number`,2)),new M(`number`,1)),new M(`number`,.5))):this.name===`acosh`?new D(`/`,this.args[0].toDerivative(t,n),new D(`^`,new D(`-`,new D(`^`,this.args[0],new M(`number`,2)),new M(`number`,1)),new M(`number`,.5))):this.name===`atanh`?new D(`/`,this.args[0].toDerivative(t,n),new D(`-`,new M(`number`,1),new D(`^`,this.args[0],new M(`number`,2)))):[`log2`,`log10`].includes(this.name)?new D(`/`,this.args[0].toDerivative(t,n),new D(`*`,this.args[0],new e(`log`,[new M(`number`,this.name===`log2`?2:10)]))):this.name===`sn`?new D(`*`,new D(`*`,new e(`cn`,this.args),new e(`dn`,this.args)),this.args[0].toDerivative(t,n)):this.name===`cn`?new D(`*`,new D(`*`,new O(`-`,new e(`sn`,this.args)),new e(`dn`,this.args)),this.args[0].toDerivative(t,n)):this.name===`dn`?new D(`*`,new D(`*`,new D(`*`,new O(`-`,this.args[1]||new M(`number`,.5)),new e(`sn`,this.args)),new e(`cn`,this.args)),this.args[0].toDerivative(t,n)):pe(this,t,n)||([`re`,`im`].includes(this.name)?new e(this.name,this.args.map(e=>e.toDerivative(t,n))):this.name===`sign`?new M(`number`,0):new D(`*`,new e(`${this.name}'`,this.args),this.args[0].toDerivative(t,n)))}simplify(){let t=this.args.map(e=>e.simplify());return new e(this.name,t)}},he=class e{constructor(e,t){this.real=e,this.imag=t,this.type=`complex`}is(e){return this.type===e.type&&this.real===e.real&&this.imag===e.imag}clone(t,n){return new e(this.real,this.imag)}isPureReal(){return!1}isPureImag(){return!1}toTree(){return`<complex: ${this.real.toTree()} + ${this.imag.toTree()}i>`}toString(){return`${this.real.toString()} + ${this.imag.toString()}i`}toShader(){return`vec2(${this.real.toShader()}, ${this.imag.toShader()})`}toComplex(){return`cx(${this.real.toComplex()}, ${this.imag.toComplex()})`}toDerivative(e,t){return new M(`number`,0)}simplify(){return new e(this.real.simplify(),this.imag.simplify())}},M=class e{constructor(e,t){this.type=e,this.value=t}is(e){return this.type===e.type&&this.value===e.value}clone(t,n){return new e(this.type,this.value)}isPureReal(){return this.type===`number`}isPureImag(){return this.type===`identifier`&&this.value===`i`}isConstant(){return Object.keys(te).includes(this.value)}toTree(){return`<${this.type}: ${this.value}>`}toString(){return`${this.value}`}toShader(){return this.isPureImag()?`vec2(0., 1.)`:this.isConstant()?`vec2(${this.value}, 0.)`:this.type===`identifier`?this.value.replace(/'/g,`_prime`):`vec2(${this.value.toFixed(6)}, 0.)`}toComplex(){return this.isPureImag()?`cx(0, 1)`:this.isConstant()?`cx("${this.value}")`:this.type===`identifier`?this.value.replace(/'/g,`_prime`):`cx(${this.value})`}toDerivative(t,n){let r=[...t,...n];return this.type===`identifier`&&this.value===`i`?new e(`number`,0):this.type===`identifier`&&r.includes(this.value)?n.includes(this.value)?new e(`number`,1):new e(`identifier`,`${this.value}'`):new e(`number`,0)}simplify(){return this.type===`identifier`&&this.value===`x`?new me(`re`,[new e(`identifier`,`z`)]):this.type===`identifier`&&this.value===`y`?new me(`im`,[new e(`identifier`,`z`)]):this}},ge=(e,t)=>{let n=Object.entries(ie);for(let r=0;r<n.length;r++){let[i,a]=n[r],o=e.slice(t).match(a);if(o!==null){let e=o[0];return new oe(i,e,t,t+e.length)}}throw SyntaxError(`Tokenization error at index `+t+` in `+e)},_e=e=>{let t=[];for(let n=0;n<e.length;){let r=ge(e,n);n=r.end,r.type!==`whitespace`&&t.push(r)}return t},ve=e=>{let t=0,n=()=>{let n=r();for(;t<e.length;){let i=e[t];if(!i)throw SyntaxError(`Unexpected EOF`);if(i.type===`operator`&&[`+`,`-`,`|-|`].includes(i.value))t++,n=new D(i.value,n,r());else break}return n},r=()=>{let n=i();for(;t<e.length;){let r=e[t];if(!r)throw SyntaxError(`Unexpected EOF`);if(r.type===`operator`&&[`*`,`/`,`%`].includes(r.value))t++,n=new D(r.value,n,i());else if([`lparen`,`identifier`].includes(r.type))n=new D(`*`,n,i());else break}return n},i=()=>{let n=a();for(;t<e.length;){let r=e[t];if(!r)throw SyntaxError(`Unexpected EOF`);if(r.type===`operator`&&[`^`,`**`,`^^`].includes(r.value))t++,n=new D(r.value===`**`?`^`:r.value,n,i());else break}return n},a=()=>{let n=o();for(;t<e.length;){let r=e[t];if(!r)throw SyntaxError(`Unexpected EOF`);if(r.type===`unarySuffix`)t++,n=new O(r.value,n);else break}return n},o=()=>{let r=e[t];if(!r)throw SyntaxError(`Unexpected EOF`);if(r.type===`lparen`){t++;let r=n();if(e[t]?.type!==`rparen`)throw SyntaxError(`Expected ) at `+(e[t]?.start||`EOF`));return t++,r}else if(r.type===`pipe`){t++;let r=n();if(e[t]?.type!==`pipe`)throw SyntaxError(`Expected | at `+(e[t]?.start||`EOF`));return t++,new me(`abs`,[r])}else if(r.type===`unaryPrefix`)return t++,new O(r.value,i());else if(r.type===`operator`&&`+-`.includes(r.value))return t++,new O(r.value,i());else if(r.type===`float`||r.type===`integer`)return t++,new M(`number`,parseFloat(r.value));else if(r.type===`identifier`){t++;let i=new M(`identifier`,r.value);if(e[t]?.type===`lparen`){t++;let r=[];for(;e[t]?.type!==`rparen`;){if(r.push(n()),!e[t])throw SyntaxError(`Expected ) at EOF`);e[t]?.type===`comma`&&t++}return t++,new me(i.value,r)}return i}else throw SyntaxError(`Unexpected token ${r}`)},s=n();if(t!==e.length)throw SyntaxError(`Unexpected EOF ${e[t]}`);return s},ye=(e,t=[])=>{if(e.type===`identifier`&&!t.includes(e.value)&&e.value!==`i`&&t.push(e.value),e.left&&(t=ye(e.left,t)),e.right&&(t=ye(e.right,t)),e.args){let n=[...e.args],r=null;[`sum`,`product`].includes(e.name)&&(r=n.shift().value),n.forEach(e=>{t=ye(e,t).filter(e=>e!=r)})}return e.operand&&(t=ye(e.operand,t)),t},be=e=>ve(_e(e)).simplify(),xe=(e,t=[`z`,`z_1`],n=[])=>ve(_e(e)).simplify().toDerivative(t,n).simplify(),Se=(e,t={})=>Function(...Object.keys(t),`return ${be(e).toComplex()}`)(...Object.values(t));window.tokenize=_e,window.parse=ve,window.ast=be,window.vars=ye,window.derive=xe,window.evaluate=Se,window.astRaw=e=>ve(_e(e));var Ce=(e,t)=>{let n;return(...r)=>(clearTimeout(n),n=setTimeout(()=>e(...r),t),()=>clearTimeout(n))},we=(e,t)=>!Array.isArray(e)||!Array.isArray(t)?e===t:e.length===t.length?e.every((e,n)=>Array.isArray(e)?we(e,t[n]):e===t[n]):!1,Te=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Ee=e=>Math.abs(e)<1e-9?0:e,De=e=>{for(let t=0;t<e.length;t++)for(let n=0;n<e[t].length;n++)e[t][n]=Ee(e[t][n]);return e},Oe=(e,t,n)=>{let r=Te();return r[0][3]=e,r[1][3]=t,r[2][3]=n,r},ke=(e,t,n)=>{let r=Math.cos(e),i=Math.sin(e),a=Te();return a[t][t]=r,a[t][n]=-i,a[n][t]=i,a[n][n]=r,a},Ae=(e,t)=>{let n=Array(e.length);for(let r=0;r<e.length;r++){let i=0;for(let n=0;n<e[0].length;n++)i+=e[r][n]*t[n];n[r]=i}return n},je=(e,t)=>{let n=Array(e.length);for(let r=0;r<e.length;r++){n[r]=Array(t[0].length);for(let i=0;i<t[0].length;i++){let a=0;for(let n=0;n<t.length;n++)a+=e[r][n]*t[n][i];n[r][i]=a}}return n},Me=e=>{e=De(e);let t=e.length,n=[];for(let r=0;r<t;r++)n.push([...e[r],...Te(t)[r]]);for(let e=0;e<t;e++){let r=n[e][e];if(r===0){let i=e+1;for(;i<t&&n[i][e]===0;)i++;if(i===t)throw Error(`Matrix is singular and cannot be inverted.`);[n[e],n[i]]=[n[i],n[e]],r=n[e][e]}for(let i=0;i<2*t;i++)n[e][i]/=r;for(let r=0;r<t;r++)if(r!==e){let i=n[r][e];for(let a=0;a<2*t;a++)n[r][a]-=i*n[e][a]}}return n.map(e=>e.slice(t))},Ne=({left:e,right:t,top:n,bottom:r,near:i,far:a})=>{let o=Te();return o[0][0]=2*i/(t-e),o[0][2]=(t+e)/(t-e),o[1][1]=2*i/(n-r),o[1][2]=(n+r)/(n-r),o[2][2]=-(a+i)/(a-i),o[2][3]=-2*i*a/(a-i),o[3][2]=-1,o[3][3]=0,o},Pe=e=>[e[0][0],e[1][0],e[2][0],e[3][0],e[0][1],e[1][1],e[2][1],e[3][1],e[0][2],e[1][2],e[2][2],e[3][2],e[0][3],e[1][3],e[2][3],e[3][3]],Fe=[`yellow_blue`,`rainbow`,`red_green`,`yellow_green`,`orange_purple`,`yellow_purple`,`pink_green`,`pink_yellow`,`viridis`,`plasma`,`magma`,`inferno`,`turbo`,`texture`],Ie=[`domain_coloring`,`bail_time`,`bail_time_log`,`exponential_map`,`lyapunov_exponent`,`distance`,`distance_scaled`],Le=[`arg`,`3d`,`4d`],Re={dimensions:2,args:{z:w(),c:w()},scale:w(1.2),varying:`c`,move:`c`,control:`3d`,anakata:10,usePerturbation:null,useDerivative:!0,useCycle:!0,derivative:100,onlyBailed:!0,shading:`bail_time_log`,offset:80,velocity:100,transparent:!0,hue:0,saturation:100,lightness:100,iterations:1e3,supersampling:window.devicePixelRatio>2?window.devicePixelRatio/2:1.1,transform:[[1,0],[0,1]],matrix:Te(),rotation:0,f:`z^2 + c`,f_prime_z:null,f_prime_c:null,f_perturb:null,palette:`yellow_blue`,useRoots:!1,convergent:!1,bailin:-6,divergent:!0,bailout:2.5,showGrid:!1,gridScale:100,gridLog:!1,gridWidth:1,showNormGrid:!1,normShade:!1,normShadeValue:70,normGridScale:100,normGridLog:!0,normGridWidth:1,showArgGrid:!1,argShade:!1,argShadeValue:40,argGridScale:200,argGridLog:!1,argGridWidth:1,scaled:!1,showZeroes:!1,zeroes:-4,showPoles:!1,poles:4,animate:!1,speed:100,showPolya:!1,polya:15,polyaColor:!0,polyaLightness:120,texture:`https://threejs.org/examples/textures/uv_grid_opengl.jpg`,textureBlend:1},ze=Object.keys(Re),Be={palette:e=>Fe.indexOf(e.palette),shading:e=>Ie.indexOf(e.shading),perturb:e=>!!(e.perturb&&e.f_perturb),useDerivative:e=>!!(e.useDerivative&&e.f_prime_z&&e.f_prime_c),convergent:null,divergent:null,onlyBailed:null,useCycle:null,useRoots:null,showGrid:null,showNormGrid:null,normShade:null,showArgGrid:null,argShade:null,gridLog:null,normGridLog:null,argGridLog:null,showPoles:null,showZeroes:null,animate:null,scaled:null,showPolya:null,polyaColor:null},Ve=[`f`,`f_prime_z`,`f_prime_c`,`f_perturb`,`varying`,...Object.keys(Be)],He={scale:{type:`2fv`,value:e=>e.to2fv()},aspect:{type:`2fv`,value:(e,t)=>[t.gl.canvas.width/t.gl.canvas.height,1/Math.max(t.gl.canvas.width,t.gl.canvas.height)]},transform:{type:`m2fv`,value:e=>e.flat(1)},anakata:`1f`,iterations:`1i`,maxIterations:{type:`2iv`,value:()=>[0,0]},orbit:{type:`1i`,value:()=>1},tex:{type:`1i`,value:()=>2},textureRatio:{type:`1f`,value:(e,t)=>t.textureElement?t.textureElement.width/t.textureElement.height:1},textureBlend:`1f`,bailin:`1f`,bailout:`1f`,derivative:`1f`,offset:{type:`1f`,value:e=>e/25},velocity:{type:`1f`,value:e=>e/1e3},hue:{type:`1f`,value:e=>e/360},saturation:{type:`1f`,value:e=>e/100},lightness:{type:`1f`,value:e=>e/100},gridScale:{type:`1f`,value:e=>e/100},gridWidth:`1f`,normGridScale:{type:`1f`,value:e=>e/100},normShadeValue:{type:`1f`,value:e=>e/100},normGridWidth:`1f`,argGridScale:{type:`1f`,value:e=>e/100},argShadeValue:{type:`1f`,value:e=>e/100},argGridWidth:`1f`,time:{type:`1f`,value:()=>0},speed:{type:`1f`,value:e=>e/1e6},zeroes:`1f`,poles:`1f`,polya:`1f`,polyaLightness:{type:`1f`,value:e=>e/100},matrix:{type:`m4fv`,value:e=>Pe(e)}},Ue=`#version 300 es
precision highp float;

##CONFIG

#include includes

in vec2 uv;
out vec4 outColor;

void main(void) {
    float timeFactor = -time * speed;
    vec2 pixel = cmul(scale, vec2(aspect.x, 1.)) * (2. * uv - 1.);

    #init_args
    #transform_args

    #if defined(USE_DERIVATIVE) || SHADING == 4
    float zdzmax = exp(-derivative * .15);
    vec2 zdz = vec2(1., 0.);
    vec2 zdz_1 = vec2(0., 0.);
    #endif

    vec2 z0 = z;
    z.y = 0.;
    z = cmul(z, cis(o.x));

    for(int i = 0; i < iterations; i++) {
        #if (defined(USE_DERIVATIVE) || SHADING == 4)
        vec2 zdzt = zdz;
        zdz = F_prime_z(z, c, zdz, zdz_1);
        zdz_1 = zdzt;
        #endif

        z = F(z, c);
    }

    z = cdiv(z, cis(o.y));

    vec3 col = vec3(0.);

    #ifdef SHOW_GRID
    vec2 gridZ = z0;

    #ifdef SCALED
    gridZ /= dot2(scale);
    #endif

    #ifdef GRID_LOG
    vec2 grid = log2(abs(gridZ));
    #else
    vec2 grid = gridZ;
    #endif

    vec2 gridDist = fract((grid + vec2(timeFactor)) * gridScale);
    gridDist = min(gridDist, 1. - gridDist);
    gridDist /= fwidth(grid) * gridScale;

    col = mix(vec3(.3), col, smoothstep(0., gridWidth, gridDist.x));
    col = mix(vec3(.3), col, smoothstep(0., gridWidth, gridDist.y));

    float axisDist = min(abs(z0.x), abs(z0.y));
    axisDist /= fwidth(axisDist);
    col = mix(vec3(1.), col, smoothstep(0., gridWidth, axisDist));
    #endif

    float root = 0.;
    float dist = abs(z.x - z0.y);
    #if (defined(USE_DERIVATIVE) || SHADING == 4)
    float dd = zdz.x;
    #else
    float dd = dFdx(z.x) / (scale.x * .003 / 2.);
    #endif

    dd = min(abs(dd), 5000. / scale.x);
    dd = sqrt(1. + dd * dd) * scale.x * .003;
    dist /= dd;
    col = mix(color(0., root + timeFactor), col, smoothstep(0., gridWidth * 1.2, dist));
    col = mix(col, color(0., root + timeFactor), step(z0.y, z.x) * .1);
    outColor = vec4(col, 1.);
}
`,We=`#version 300 es
precision highp float;

##CONFIG

#include includes
#include iterate

in vec2 uv;
out vec4 outColor;

void main(void) {
    vec2 pixel = cmul(scale, vec2(aspect.x, 1.)) * (2. * uv - 1.);
    outColor = iterate(pixel);
}
`,Ge=`#version 300 es

precision highp float;
precision highp int;

##CONFIG

#include includes
#include iterate

uniform vec3 eye;

in vec2 vPixel;
in vec3 vPosition;
in vec2 vUv;
in vec3 vNormal;

out vec4 outColor;

void main() {
    // if (min(mod(vUv.x, .05), mod(vUv.y, .05)) > .003) {
    //     discard;
    // }

    vec3 albedo = iterate(vPixel).rgb;
    vec3 eyeDirection = eye - vPosition;
    eyeDirection = normalize(eyeDirection);
    vec3 lightDirection = eyeDirection;
    float diffuse = abs(dot(vNormal, lightDirection));
    vec3 halfVector = normalize(lightDirection + eyeDirection);
    // float specular = pow(abs(dot(vNormal, halfVector)), 32.);
    float k = diffuse; //+ specular;

    outColor = vec4(vec3(k * albedo), 1.);
}
`,Ke=`uniform vec2 args;
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

uniform float anakata;
uniform float speed;
uniform float time;

#ifdef PERTURB
uniform sampler2D orbit;
uniform ivec2 maxIterations;
#endif

uniform sampler2D tex;
uniform float textureRatio;
uniform float textureBlend;

#include globals
#include colors
#include render
#include complex
#include special
#include extra
`,qe=`const float PI = 3.1415926535897932384626433832795;
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
`,Je=`
#ifdef PERTURB
vec2 fetchRef(in int n, in bool shift) {
    vec4 tex = texelFetch(orbit, ivec2(n % 128, n / 128), 0);
    return shift ? tex.zw : tex.xy;
}
#endif

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
    if (p.x < w1) // conditional is optional
    {
        q = p;
        q.y -= clamp(q.y, 0.0, w1);
        di = min(di, dot(q, q));
    }
    if (pz.x > 0.0) // conditional is optional
    {
        q = pz;
        q -= vec2(k, -1.0) * clamp((q.x * k - q.y) / (k * k + 1.0), 0.0, w2);
        di = min(di, dot(q, q));
    }

    float si = 1.0;
    float z = l - p.x;
    if (min(p.x, z) > 0.0) {
        float h = (pz.x < 0.0) ? w1 : z / k;
        if (p.y < h)
            si = -1.0;
    }
    return si * sqrt(di);
}

float diffabs(in float X, in float x) {
    if (X >= 0.) {
        if (X + x >= 0.) {
            return x;
        } else {
            return -(2. * X + x);
        }
    } else {
        if (X + x > 0.) {
            return 2. * X + x;
        } else {
            return -x;
        }
    }
}

vec2 diffabs(in vec2 X, in vec2 x) {
    return vec2(diffabs(X.x, x.x), diffabs(X.y, x.y));
}
`,Ye=`vec3 hsl2rgb(in vec3 c) {
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
// https://www.shadertoy.com/view/3lBXR3
vec3 sixticPalette(in float t, in vec3 c0, in vec3 c1, in vec3 c2, in vec3 c3, in vec3 c4, in vec3 c5, in vec3 c6) {
    t = velocity * .1 * (TAU * offset + t);
    t = 2. * abs(t / 2. - floor((t + 1.) / 2.));
    return c0 + t * (c1 + t * (c2 + t * (c3 + t * (c4 + t * (c5 + t * c6)))));
}

vec3 palette(float t) {
    #if PALETTE < 8
    return cosPalette(t,
        #if PALETTE == 0 // yellow_blue
        vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.0, 0.10, 0.20)
        #elif PALETTE == 1 // rainbow
        vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.0, 0.33, 0.67)
        #elif PALETTE == 2 // red_green
        vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.3, 0.20, 0.20)
        #elif PALETTE == 3 // yellow_green
        vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 0.5), vec3(0.8, 0.90, 0.30)
        #elif PALETTE == 4 // orange_purple
        vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 0.7, 0.4), vec3(0.0, 0.15, 0.20)
        #elif PALETTE == 5 // yellow_purple
        vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(2.0, 1.0, 0.0), vec3(0.5, 0.20, 0.25)
        #elif PALETTE == 6 // pink_green
        vec3(0.8, 0.5, 0.4), vec3(0.2, 0.4, 0.2), vec3(2.0, 1.0, 1.0), vec3(0.0, 0.25, 0.25)
        #elif PALETTE == 7 // pink_yellow
        vec3(0.731, 1.098, 0.192), vec3(0.358, 1.090, 0.657), vec3(1.077, 0.360, 0.328), vec3(0.965, 2.265, 0.837)
    #endif
    );
    #elif PALETTE < 13
    return sixticPalette(t,
        #if PALETTE == 8 // viridis
        vec3(0.2777273272234177, 0.005407344544966578, 0.3340998053353061),
        vec3(0.1050930431085774, 1.404613529898575, 1.384590162594685),
        vec3(-0.3308618287255563, 0.214847559468213, 0.09509516302823659),
        vec3(-4.634230498983486, -5.799100973351585, -19.33244095627987),
        vec3(6.228269936347081, 14.17993336680509, 56.69055260068105),
        vec3(4.776384997670288, -13.74514537774601, -65.35303263337234),
        vec3(-5.435455855934631, 4.645852612178535, 26.3124352495832)
        #elif PALETTE == 9 // plasma
        vec3(0.05873234392399702, 0.02333670892565664, 0.5433401826748754),
        vec3(2.176514634195958, 0.2383834171260182, 0.7539604599784036),
        vec3(-2.689460476458034, -7.455851135738909, 3.110799939717086),
        vec3(6.130348345893603, 42.3461881477227, -28.51885465332158),
        vec3(-11.10743619062271, -82.66631109428045, 60.13984767418263),
        vec3(10.02306557647065, 71.41361770095349, -54.07218655560067),
        vec3(-3.658713842777788, -22.93153465461149, 18.19190778539828)
        #elif PALETTE == 10 // magma
        vec3(-0.002136485053939582, -0.000749655052795221, -0.005386127855323933),
        vec3(0.2516605407371642, 0.6775232436837668, 2.494026599312351),
        vec3(8.353717279216625, -3.577719514958484, 0.3144679030132573),
        vec3(-27.66873308576866, 14.26473078096533, -13.64921318813922),
        vec3(52.17613981234068, -27.94360607168351, 12.94416944238394),
        vec3(-50.76852536473588, 29.04658282127291, 4.23415299384598),
        vec3(18.65570506591883, -11.48977351997711, -5.601961508734096)
        #elif PALETTE == 11 // inferno
        vec3(0.0002189403691192265, 0.001651004631001012, -0.01948089843709184),
        vec3(0.1065134194856116, 0.5639564367884091, 3.932712388889277),
        vec3(11.60249308247187, -3.972853965665698, -15.9423941062914),
        vec3(-41.70399613139459, 17.43639888205313, 44.35414519872813),
        vec3(77.162935699427, -33.40235894210092, -81.80730925738993),
        vec3(-71.31942824499214, 32.62606426397723, 73.20951985803202),
        vec3(25.13112622477341, -12.24266895238567, -23.07032500287172)
        #elif PALETTE == 12  // turbo
        vec3(0.1140890109226559, 0.06288340699912215, 0.2248337216805064),
        vec3(6.716419496985708, 3.182286745507602, 7.571581586103393),
        vec3(-66.09402360453038, -4.9279827041226, -10.09439367561635),
        vec3(228.7660791526501, 25.04986699771073, -91.54105330182436),
        vec3(-334.8351565777451, -69.31749712757485, 288.5858850615712),
        vec3(218.7637218434795, 67.52150567819112, -305.2045772184957),
        vec3(-52.88903478218835, -21.54527364654712, 110.5174647748972)
    #endif
    );
    #else
    return vec3(.5);
    #endif
}

vec3 color(float t, float p) {
    return hueAdjust(palette(t), p);
}

vec3 color(float t) {
    return color(t, 0.);
}
`,Xe=`float dot2(in vec2 z) {
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

vec2 cis(in float x) {
    return vec2(cos(x), sin(x));
}

vec2 cexp(in vec2 z) {
    return exp(z.x) * cis(z.y);
}

vec2 cnorm(in vec2 z) {
    return R(length(z));
}

vec2 carg(in vec2 z) {
    return R(atan(z.y, z.x));
}

vec2 cpolar(in vec2 z) {
    return vec2(length(z), atan(z.y, z.x));
}

vec2 cunpolar(in vec2 z) {
    return z.x * cis(z.y);
}

vec2 cmod(in vec2 z, in vec2 m) {
    return csub(z, cmul(m, round(cdiv(z, m))));
}

vec2 csqrt(in vec2 z) {
    float r = length(z);
    return vec2(sqrt(0.5 * (r + z.x)), (z.y < 0. ? -1. : 1.) * sqrt(0.5 * (r - z.x)));
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
    return .5 * cadd(cexp(z), cexp(-z));
}

vec2 csinh(in vec2 z) {
    return .5 * csub(cexp(z), cexp(-z));
}

vec2 ctanh(in vec2 z) {
    vec2 e2z = cexp(-2. * z);
    return cdiv(csub(c1, e2z), cadd(c1, e2z));
}

vec2 cacosh(in vec2 z) {
    return clog(cadd(z, cmul(csqrt(cadd(z, c1)), csqrt(csub(z, c1)))));
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
    if(abs(k) > 10) {
        return cpow(z, R(k));
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
`,Ze=`// https://www.ils.uec.ac.jp/~dima/BOOK/443.pdf

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

// https://www.sci.utah.edu/~vpegorar/research/2011_JGT.pdf
vec2 cexpintpower(in vec2 z) {
    vec2 ei = cadd(R(GAMMA), clog(z));
    vec2 tmp = c1;
    for (float k = 1.; k < 20.; k += 1.) {
        tmp = cmul(tmp, z / k);
        ei = cadd(ei, tmp / k);
    }
    return ei;
}

vec2 cexpintasymp(in vec2 z) {
    vec2 ei = I(sign(z.y) * PI);
    vec2 tmp = cdiv(cexp(z), z);
    for (float k = 1.; k <= length(z) + 1.; k += 1.) {
        ei = cadd(ei, tmp);
        tmp = cmul(tmp, k * cinv(z));
    }
    return ei;
}
vec2 cexpintcontinuedff(in vec2 z) {
    vec2 ei = I(sign(z.y) * PI);
    vec2 c = c0;
    vec2 d = c0;
    c = cinv(ei);
    c = cinv(csub(csub(c1, z), cmul(cexp(z), c)));
    d = cinv(csub(csub(c1, z), cmul(cexp(z), d)));
    ei = cmul(ei, cdiv(d, c));

    for (float k = 1.; k <= 20.; k += 1.) {
        c = cinv(csub(csub(R(2. * k + 1.), z), k * k * c));
        d = cinv(csub(csub(R(2. * k + 1.), z), k * k * d));
        ei = cmul(ei, cdiv(d, c));
    }
    return ei;
}

vec2 cexpint(in vec2 z) {
    if (length(z) > 2. - 1.035 * log(1e-3)) {
        return cexpintasymp(z);
    }
    if (length(z) > 1. && (z.x < 0. || abs(z.y) > 1.)) {
        return cexpintcontinuedff(z);
    }
    return cexpintpower(z);
}

vec2 clint(in vec2 z) {
    return cexpint(clog(z));
}

vec2 cgamma(in vec2 z) {
    // Lanczos
    float LG = 5.65;
    float[] P = float[](2.506628275635, 225.525584619175, -268.295973841305, 80.9030806934622, -5.007578639705, 0.0114684895435);

    vec2 zz = (z.x > 0.5) ? (z) : (c1 - z);
    vec2 sum = vec2(P[0], 0.0) + P[1] * cinv(zz + c1) + P[2] * cinv(zz + vec2(2.0, 0.0)) + P[3] * cinv(zz + vec2(3.0, 0.0)) + P[4] * cinv(zz + vec2(4.0, 0.0)) + P[5] * cinv(zz + vec2(5.0, 0.0));
    vec2 zh = zz + vec2(LG, 0.0);
    vec2 w = cexp(clog(sum) + cmul(zz + vec2(0.5, 0.0), clog(zh)) - clog(zz) - zh);

    return ((z.x > 0.5) ? (w) : (PI * cinv(cmul(w, csin(PI * z)))));
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

vec2 _czeta_hurwitz(in vec2 z, in vec2 a) {
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
    // Large N makes the direct sum cancel catastrophically when Re(s) < 0
    int n = z.x < 0. ? min(4 + int(.2 * length(z)), 15) : 15;
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

vec2 czeta(in vec2 z, in vec2 a) {
    if (abs(a.y) < 1e-9 && abs(a.x - 1.) < 1e-9 && z.x < 0.) {
        // Functional equation: zeta(s) = 2^s pi^(s-1) sin(pi s / 2) gamma(1 - s) zeta(1 - s)
        vec2 s1 = c1 - z;
        vec2 f = cmul(cpow(R(2.), z), cpow(R(PI), z - c1));
        return cmul(cmul(f, csin(.5 * PI * z)), cmul(cgamma(s1), _czeta_hurwitz(s1, c1)));
    }
    return _czeta_hurwitz(z, a);
}

vec2 czeta(in vec2 z) {
    return czeta(z, c1);
}

vec2 cdzeta(in vec2 s) {
    // Derivative of zeta, differentiating its Euler-Maclaurin sum term by term
    const int n = 10;
    float N = float(n);
    float lnN = log(N);
    vec2 d = c0;
    for (int i = 1; i < n; i++) {
        float li = log(float(i));
        d -= li * cexp(-li * s);
    }
    vec2 sm1 = s - c1;
    vec2 Ns = cexp(-lnN * s);
    vec2 t = cmul(N * Ns, cinv(sm1));
    d += -lnN * t - cmul(t, cinv(sm1));
    d += -.5 * lnN * Ns;

    vec2 poch = s;
    vec2 dpoch = c1;
    vec2 pw = cexp(-lnN * (s + c1));
    float fact = .5;
    for (int k = 1; k < 7; k++) {
        vec2 dlog = c0;
        float m = float(2 * k - 1);
        // poch = s (s + 1) ... (s + m - 1)
        poch = s;
        dlog = cinv(s);
        for (int j = 1; j < 12; j++) {
            if (float(j) >= m) {
                break;
            }
            poch = cmul(poch, s + R(float(j)));
            dlog += cinv(s + R(float(j)));
        }
        float ft = B2N[k] * fact;
        d += ft * cmul(cmul(poch, pw), dlog - lnN * c1);
        float k2 = 2. * float(k + 1);
        fact /= k2 * (k2 - 1.);
        pw = pw / (N * N);
    }
    return d;
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
    return cmul(czeta(z), csub(c1, cpow(R(2.), csub(c1, z))));
}
vec2 cdgamma(in vec2 z) {
    return cmul(cgamma(z), cpsi(z));
}

vec2 cbeta(in vec2 z, in vec2 w) {
    return cdiv(cmul(cgamma(z), cgamma(w)), cgamma(cadd(z, w)));
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

vec2 cfibonaccir(in vec2 z) {
    // Generalized Binet formula, real on the real axis
    return csub(cpow(R(PHI), z), cmul(cpow(R(PHI), -z), ccos(PI * z))) / (2. * PHI - 1.);
}

vec2 cweierstrass(in vec2 z) {
    // Weierstrass elliptic function
    // https://www.shadertoy.com/view/WtXGzs
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

vec2 cweierstrassr(in vec2 z, in vec2 w) {
    // Generalization of the weierstrass function
    vec2 res = c0;
    float a = 1.;
    float b = 1.;
    for (int i = 0; i < 15; i++) {
        res = cadd(res, a * ccos(b * PI * z));
        a *= w.x;
        b *= w.y;
    }
    return res;
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

    for (int i = 1; i < 11; i++) {
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
    // The expression below has a pole of gamma at positive integer orders: move away from them
    if (abs(s - round(s)) < 1e-3) {
        s += 2e-3;
    }
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

vec2 cfaddeeva(vec2 z) {
    // https://arxiv.org/pdf/1511.00774
    int num = 16;
    float vm = 6. / TAU;
    float hi = vm / float(num);
    float sig = 2.5;
    float sig2 = sig * sig;
    float tauhi = TAU * hi;

    bool is_neg = z.y < 0.;
    if (is_neg) {
        z = -z;
    }
    vec2 t = cadd(z, ci * sig);
    vec2 tt = cpow(t, 2);

    vec2 res = cdiv(ci * 2. * hi * exp(sig * sig), t);
    for (int i = 1; i <= num; i++) {
        float n = float(i);
        float tauhin = tauhi * n;
        float k = exp(sig2 - (tauhin * tauhin));
        float th = 2. * tauhin * sig;
        float hik = 4. * hi * k;

        float A = tauhin * hik * sin(th);
        float B = hik * cos(th);
        float C = tauhin;
        res = cadd(res, cdiv(csub(R(A), cmul(ci, t) * B), csub(R(C * C), tt)));
    }
    if (is_neg) {
        res = csub(2. * cexp(-cpow(z, 2)), res);
    }
    return res;
}

vec2 cerf(vec2 z) {
    if (z.x < 0.) {
        return csub(cmul(cexp(-cpow(z, 2)), cfaddeeva(cmul(ci, -z))), c1);
    }
    return csub(c1, cmul(cexp(-cpow(z, 2)), cfaddeeva(cmul(ci, z))));
}

vec2 cerfc(vec2 z) {
    return csub(c1, cerf(z));
}

vec2 cerfcx(vec2 z) {
    return cfaddeeva(cmul(ci, z));
}

vec2 cerfi(vec2 z) {
    return -cmul(ci, cerf(cmul(ci, z)));
}

vec2 cdawson(vec2 z) {
    return sqrt(PI) * .5 * cmul(cexp(-cpow(z, 2)), cerfi(z));
}

vec2 cdfaddeeva(vec2 z) {
    return 2. * csub(ci / sqrt(PI), cmul(z, cfaddeeva(z)));
}

vec2 cderf(vec2 z) {
    return 2. / sqrt(PI) * cexp(-cpow(z, 2));
}

vec2 cfresnels(vec2 z) {
    return cmul(sqrt(ETA) * .25 * vec2(1., 1.), csub(cerf(cmul(vec2(1., 1.) / SQRT2, z)), cmul(ci, cerf(cmul(vec2(1., -1.) / SQRT2, z)))));
}
vec2 cfresnelc(vec2 z) {
    return cmul(sqrt(ETA) * .25 * vec2(1., -1.), cadd(cerf(cmul(vec2(1., 1.) / SQRT2, z)), cmul(ci, cerf(cmul(vec2(1., -1.) / SQRT2, z)))));
}

vec2 cfresnelf(vec2 z) {
    // S and C are int sin(t^2) and int cos(t^2), whose limit at infinity is sqrt(pi/8)
    vec2 z2 = cmul(z, z);
    vec2 h = R(sqrt(PI / 8.));
    return csub(cmul(csub(h, cfresnels(z)), ccos(z2)), cmul(csub(h, cfresnelc(z)), csin(z2)));
}
vec2 cfresnelg(vec2 z) {
    vec2 z2 = cmul(z, z);
    vec2 h = R(sqrt(PI / 8.));
    return csub(cmul(csub(h, cfresnels(z)), csin(z2)), cmul(csub(h, cfresnelc(z)), ccos(z2)));
}

vec2 clambertw(vec2 z, vec2 k) {
    // https://www.researchgate.net/publication/346309410_Precise_and_fast_computation_of_Lambert_W_function_by_piecewise_minimax_rational_function_approximation_with_variable_transformation?channel=doi&linkId=5fbe04fd458515b7976a3395&showFulltext=true

    int branch = int(k.x);
    // Initial guess for Lambert W function
    vec2 tauki = TAU * float(branch) * ci;
    vec2 w = clog(z) + tauki - clog(clog(z) + tauki);
    vec2 m = cadd(c1, 2. * z);

    if (branch == 0 && length(z) < 1.) {
        vec2 p = csqrt(2. * (E * z + c1));
        vec2 p2 = cpow2(p) / 3.;
        vec2 p3 = 11. * cpow3(p) / 72.;
        w = -c1 + p - p2 + p3;
    }

    if (branch == 0 && length(csub(z, R(.5))) <= .5) {
        w = cdiv(0.35173371 * cadd(R(0.1237166), 7.061302897 * z), cadd(R(2.), 0.827184 * m));
    }

    vec2 wp = w;
    vec2 c2 = R(2.);

    for (int i = 0; i < 30; i++) {
        wp = w;
        vec2 ew = cexp(w);
        w = csub(w, cdiv(cmul(c2, cmul(w + c1, cmul(w, ew) - z)), cmul(ew, cpow2(w) + cmul(c2, w) + c2) + cmul(w + c2, z)));

        if (length(csub(w, wp)) < 1e-9) {
            break;
        }
    }
    return w;
}

vec2 clambertw(vec2 z) {
    return clambertw(z, c0);
}

vec2 comega(in vec2 z) {
    return clambertw(cexp(z), R(ceil((z.y - PI) / TAU)));
}
`,Qe=`// Additional elementary and special functions

// Move a value off an integer (used before reflection formulas that are singular on integers)
vec2 _nudge(in vec2 x) {
    if(abs(x.y) < 1e-3 && abs(x.x - round(x.x)) < 1e-3) {
        x.x += 2e-3;
    }
    return x;
}

// ---------------------------------------------------------------------------
// Elementary
// ---------------------------------------------------------------------------
vec2 csec(in vec2 z) {
    return cinv(ccos(z));
}
vec2 ccsc(in vec2 z) {
    return cinv(csin(z));
}
vec2 ccot(in vec2 z) {
    return cdiv(ccos(z), csin(z));
}
vec2 csech(in vec2 z) {
    return cinv(ccosh(z));
}
vec2 ccsch(in vec2 z) {
    return cinv(csinh(z));
}
vec2 ccoth(in vec2 z) {
    return cdiv(ccosh(z), csinh(z));
}
vec2 cacot(in vec2 z) {
    return catan(cinv(z));
}
vec2 casec(in vec2 z) {
    return cacos(cinv(z));
}
vec2 cacsc(in vec2 z) {
    return casin(cinv(z));
}
vec2 cacoth(in vec2 z) {
    return catanh(cinv(z));
}
vec2 casech(in vec2 z) {
    return cacosh(cinv(z));
}
vec2 cacsch(in vec2 z) {
    return casinh(cinv(z));
}
vec2 ccbrt(in vec2 z) {
    return cpow(z, R(1. / 3.));
}
vec2 croot(in vec2 z, in vec2 n) {
    return cpow(z, cinv(n));
}
vec2 csinc(in vec2 z) {
    if(dot2(z) < 1e-10) {
        return c1;
    }
    return cdiv(csin(z), z);
}
vec2 cfloor(in vec2 z) {
    return floor(z);
}
vec2 cceil(in vec2 z) {
    return ceil(z);
}
vec2 cround(in vec2 z) {
    return round(z);
}
vec2 cfrac(in vec2 z) {
    return fract(z);
}
vec2 clog2(in vec2 z) {
    return clog(z) / LN2;
}
vec2 clog10(in vec2 z) {
    return clog(z) / LN10;
}
vec2 clogb(in vec2 z, in vec2 b) {
    return cdiv(clog(z), clog(b));
}
vec2 csgn(in vec2 z) {
    float r = length(z);
    return r == 0. ? c0 : z / r;
}

// ---------------------------------------------------------------------------
// Gamma related
// ---------------------------------------------------------------------------
// Reciprocal gamma, entire
vec2 crgamma(in vec2 z) {
    if(abs(z.y) < 1e-6 && z.x <= 0. && abs(z.x - round(z.x)) < 1e-6) {
        return c0;
    }
    return cinv(cgamma(z));
}

// log(gamma(z)), continuous away from the negative real axis (does not wrap like log(gamma(z)))
vec2 clgamma(in vec2 z) {
    float sgn = z.y < 0. ? -1. : 1.;
    z.y *= sgn;
    vec2 shift = c0;
    bool refl = z.x < .5;
    vec2 w = refl ? csub(c1, z) : z;
    for(int i = 0; i < 12; i++) {
        if(w.x >= 8.) {
            break;
        }
        shift += clog(w);
        w += c1;
    }
    vec2 iw = cinv(w);
    vec2 iw2 = cmul(iw, iw);
    vec2 series = cmul(iw, R(1. / 12.) + cmul(iw2, R(-1. / 360.) + cmul(iw2, R(1. / 1260.) + cmul(iw2, R(-1. / 1680.)))));
    vec2 res = cmul(w - R(.5), clog(w)) - w + R(.5 * log(TAU)) + series - shift;
    if(refl) {
        // log sin(pi z) = log(i / 2) - i pi z + log(1 - exp(2 i pi z)), continuous for Im z > 0
        vec2 lsin = vec2(-LN2, ETA) + vec2(PI * z.y, -PI * z.x) + clog(c1 - cexp(vec2(-TAU * z.y, TAU * z.x)));
        res = R(log(PI)) - lsin - res;
    }
    res.y *= sgn;
    return res;
}

vec2 ctrigamma(in vec2 z) {
    return cpolygamma(z, c1);
}

// Incomplete gamma functions
vec2 cgammal(in vec2 s, in vec2 z) {
    vec2 t = cinv(s);
    vec2 sum = t;
    for(int k = 1; k < 120; k++) {
        t = cdiv(cmul(t, z), s + R(float(k)));
        sum += t;
        if(dot2(t) < 1e-14 * dot2(sum)) {
            break;
        }
    }
    return cmul(cmul(cpow(z, s), cexp(-z)), sum);
}

vec2 _gammau_cf(in vec2 a, in vec2 x) {
    vec2 b = x + c1 - a;
    vec2 c = R(1e30);
    vec2 d = cinv(b);
    vec2 h = d;
    for(int i = 1; i < 60; i++) {
        float fi = float(i);
        vec2 an = -fi * (R(fi) - a);
        b += R(2.);
        d = cinv(cmul(an, d) + b);
        c = b + cdiv(an, c);
        vec2 del = cmul(d, c);
        h = cmul(h, del);
        if(length(del - c1) < 1e-6) {
            break;
        }
    }
    return cmul(cexp(-x + cmul(a, clog(x))), h);
}

vec2 cgammau(in vec2 s, in vec2 z) {
    if(dot2(z) <= 4. || z.x < 0.) {
        return csub(cgamma(s), cgammal(s, z));
    }
    return _gammau_cf(s, z);
}
vec2 cgammap(in vec2 s, in vec2 z) {
    return cmul(cgammal(s, z), crgamma(s));
}
vec2 cgammaq(in vec2 s, in vec2 z) {
    return cmul(cgammau(s, z), crgamma(s));
}

// Riemann-Siegel theta and Z (analytic in t)
vec2 crstheta(in vec2 t) {
    vec2 a = clgamma(R(.25) + .5 * cmul(ci, t));
    vec2 b = clgamma(R(.25) - .5 * cmul(ci, t));
    return cmul(a - b, vec2(0., -.5)) - .5 * log(PI) * t;
}
vec2 criemannz(in vec2 t) {
    return cmul(cexp(cmul(ci, crstheta(t))), czeta(R(.5) + cmul(ci, t)));
}

// Dirichlet L-functions for the characters mod 3 and mod 4, and lambda
vec2 cdirichletbeta(in vec2 s) {
    return cmul(cpow(R(4.), -s), czeta(s, R(.25)) - czeta(s, R(.75)));
}
vec2 cdirichletl3(in vec2 s) {
    return cmul(cpow(R(3.), -s), czeta(s, R(1. / 3.)) - czeta(s, R(2. / 3.)));
}
vec2 cdirichletlambda(in vec2 s) {
    return cmul(csub(c1, cpow(R(2.), -s)), czeta(s));
}

// ---------------------------------------------------------------------------
// Theta and modular functions
// theta_k(z, q) with nome q = exp(i pi tau), |q| < 1
// ---------------------------------------------------------------------------
vec2 cqnome(in vec2 tau) {
    return cexp(vec2(-PI * tau.y, PI * tau.x));
}

vec2 ctheta1(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 0; n < 16; n++) {
        float k = float(n) + .5;
        float sg = (n % 2 == 0) ? 1. : -1.;
        s += sg * cmul(cexp(k * k * lq), csin((2. * float(n) + 1.) * z));
    }
    return 2. * s;
}

vec2 ctheta2(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 0; n < 16; n++) {
        float k = float(n) + .5;
        s += cmul(cexp(k * k * lq), ccos((2. * float(n) + 1.) * z));
    }
    return 2. * s;
}

vec2 ctheta3(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 1; n < 16; n++) {
        float k = float(n);
        s += cmul(cexp(k * k * lq), ccos(2. * k * z));
    }
    return c1 + 2. * s;
}

vec2 ctheta4(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 1; n < 16; n++) {
        float k = float(n);
        float sg = (n % 2 == 0) ? 1. : -1.;
        s += sg * cmul(cexp(k * k * lq), ccos(2. * k * z));
    }
    return c1 + 2. * s;
}

// Derivatives of the theta functions with respect to z
vec2 cdtheta1(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 0; n < 16; n++) {
        float k = float(n) + .5;
        float sg = (n % 2 == 0) ? 1. : -1.;
        s += sg * (2. * float(n) + 1.) * cmul(cexp(k * k * lq), ccos((2. * float(n) + 1.) * z));
    }
    return 2. * s;
}

vec2 cdtheta2(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 0; n < 16; n++) {
        float k = float(n) + .5;
        s += (2. * float(n) + 1.) * cmul(cexp(k * k * lq), csin((2. * float(n) + 1.) * z));
    }
    return -2. * s;
}

vec2 cdtheta3(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 1; n < 16; n++) {
        float k = float(n);
        s += k * cmul(cexp(k * k * lq), csin(2. * k * z));
    }
    return -4. * s;
}

vec2 cdtheta4(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 1; n < 16; n++) {
        float k = float(n);
        float sg = (n % 2 == 0) ? 1. : -1.;
        s += sg * k * cmul(cexp(k * k * lq), csin(2. * k * z));
    }
    return -4. * s;
}

// q-Pochhammer (a; q)_inf and Euler function
vec2 cqpoch(in vec2 a, in vec2 q) {
    vec2 p = c1;
    vec2 qk = c1;
    for(int k = 0; k < 48; k++) {
        p = cmul(p, c1 - cmul(a, qk));
        qk = cmul(qk, q);
    }
    return p;
}
vec2 ceulerq(in vec2 q) {
    return cqpoch(q, q);
}

// Dedekind eta function of tau in the upper half plane
vec2 cdedekind(in vec2 t) {
    if(t.y <= 0.) {
        return c0;
    }
    vec2 mult = c1;
    for(int i = 0; i < 24; i++) {
        float n = round(t.x);
        if(n != 0.) {
            mult = cmul(mult, cis(PI * n / 12.));
            t.x -= n;
        }
        if(dot2(t) < .9999) {
            mult = cdiv(mult, csqrt(cmul(-ci, t)));
            t = -cinv(t);
        } else {
            break;
        }
    }
    vec2 q = cexp(vec2(-TAU * t.y, TAU * t.x));
    vec2 p = c1;
    vec2 qn = c1;
    for(int n = 1; n < 14; n++) {
        qn = cmul(qn, q);
        p = cmul(p, c1 - qn);
    }
    return cmul(mult, cmul(cexp(vec2(-PI * t.y / 12., PI * t.x / 12.)), p));
}

// Eisenstein series E4 and E6 of tau in the upper half plane
vec2 _eisenstein(in vec2 t, in int k) {
    if(t.y <= 0.) {
        return c1;
    }
    vec2 mult = c1;
    for(int i = 0; i < 24; i++) {
        t.x -= round(t.x);
        if(dot2(t) < .9999) {
            mult = cmul(mult, cpow(t, -k));
            t = -cinv(t);
        } else {
            break;
        }
    }
    vec2 q = cexp(vec2(-TAU * t.y, TAU * t.x));
    vec2 qn = c1;
    vec2 s = c0;
    for(int n = 1; n < 18; n++) {
        qn = cmul(qn, q);
        float fn = float(n);
        s += pow(fn, float(k - 1)) * cdiv(qn, c1 - qn);
    }
    float coef = k == 4 ? 240. : -504.;
    return cmul(mult, c1 + coef * s);
}
vec2 ceisenstein4(in vec2 t) {
    return _eisenstein(t, 4);
}
vec2 ceisenstein6(in vec2 t) {
    return _eisenstein(t, 6);
}

// Modular lambda function lambda(tau) = theta2^4 / theta3^4
vec2 cmodlambda(in vec2 t) {
    vec2 q = cqnome(t);
    return cdiv(cpow4(ctheta2(c0, q)), cpow4(ctheta3(c0, q)));
}

// Klein's absolute invariant j(tau), through the modular lambda function
// of tau reduced to the fundamental domain (stable for large Im tau)
vec2 ckleinj(in vec2 t) {
    if(t.y <= 0.) {
        return c0;
    }
    for(int i = 0; i < 24; i++) {
        t.x -= round(t.x);
        if(dot2(t) < .9999) {
            t = -cinv(t);
        } else {
            break;
        }
    }
    vec2 l = cmodlambda(t);
    vec2 l1 = c1 - l;
    return 256. * cdiv(cpow3(l1 + cmul(l, l)), cmul(cmul(l, l), cmul(l1, l1)));
}

// ---------------------------------------------------------------------------
// Elliptic integrals / functions
// ---------------------------------------------------------------------------
// Complete elliptic integral of the second kind E(m)
vec2 cellke(in vec2 m) {
    vec2 a = c1;
    vec2 b = csqrt(c1 - m);
    vec2 s = .5 * m;
    float pw = 1.;
    for(int i = 0; i < 12; i++) {
        vec2 h = .5 * (b - a);
        s += pw * cmul(h, h);
        pw *= 2.;
        vec2 an = a + h;
        b = csqrt(cmul(a, b));
        a = an;
        if(length(h) < 1e-7) {
            break;
        }
    }
    return cmul(PI * cinv(2. * a), c1 - s);
}

// Weierstrass p function on the lattice generated by 1 and tau (Im tau > 0)
vec2 cwp(in vec2 z, in vec2 tau) {
    vec2 q = cqnome(tau);
    vec2 t3 = ctheta3(c0, q);
    vec2 t4 = ctheta4(c0, q);
    vec2 pz = PI * z;
    vec2 k = PI * cmul(t3, t4);
    vec2 r = cmul(k, cdiv(ctheta2(pz, q), ctheta1(pz, q)));
    return PI * PI / 3. * (cpow4(t3) + cpow4(t4)) + cmul(r, r);
}

// ---------------------------------------------------------------------------
// Hypergeometric functions
// ---------------------------------------------------------------------------
vec2 chyp0f1(in vec2 b, in vec2 z) {
    vec2 t = c1;
    vec2 s = c1;
    for(int k = 0; k < 100; k++) {
        float kf = float(k);
        t = cdiv(cmul(t, z), (b + R(kf)) * (kf + 1.));
        s += t;
        if(dot2(t) < 1e-14 * dot2(s)) {
            break;
        }
    }
    return s;
}

vec2 _hyp1f1s(in vec2 a, in vec2 b, in vec2 z) {
    vec2 t = c1;
    vec2 s = c1;
    for(int k = 0; k < 120; k++) {
        float kf = float(k);
        t = cdiv(cmul(cmul(t, a + R(kf)), z), (b + R(kf)) * (kf + 1.));
        s += t;
        if(dot2(t) < 1e-14 * dot2(s)) {
            break;
        }
    }
    return s;
}

// Kummer confluent hypergeometric function M(a, b, z), accurate for moderate |z|
vec2 chyp1f1(in vec2 a, in vec2 b, in vec2 z) {
    if(z.x < 0.) {
        return cmul(cexp(z), _hyp1f1s(b - a, b, -z));
    }
    return _hyp1f1s(a, b, z);
}

vec2 _hyp2f1s(in vec2 a, in vec2 b, in vec2 c, in vec2 z) {
    vec2 t = c1;
    vec2 s = c1;
    for(int k = 0; k < 160; k++) {
        float kf = float(k);
        t = cdiv(cmul(cmul(t, a + R(kf)), b + R(kf)), (c + R(kf)) * (kf + 1.));
        t = cmul(t, z);
        s += t;
        if(dot2(t) < 1e-14 * dot2(s)) {
            break;
        }
    }
    return s;
}

bool _nearint(in vec2 x) {
    return abs(x.y) < 1e-3 && abs(x.x - round(x.x)) < 1e-3;
}

// z -> 1 - z transformation, singular when c - a - b is an integer
vec2 _hyp2f1_w(in vec2 a, in vec2 b, in vec2 c, in vec2 w) {
    vec2 d = c - a - b;
    vec2 g1 = cdiv(cmul(cgamma(c), cgamma(d)), cmul(cgamma(c - a), cgamma(c - b)));
    vec2 g2 = cdiv(cmul(cgamma(c), cgamma(-d)), cmul(cgamma(a), cgamma(b)));
    vec2 f1 = cmul(g1, _hyp2f1s(a, b, c1 - d, w));
    vec2 f2 = cmul(cmul(g2, cpow(w, d)), _hyp2f1s(c - a, c - b, c1 + d, w));
    return f1 + f2;
}

// z -> 1 / z transformation, singular when b - a is an integer
vec2 _hyp2f1_iz(in vec2 a, in vec2 b, in vec2 c, in vec2 z) {
    vec2 d = b - a;
    vec2 iz = cinv(z);
    vec2 mz = -z;
    vec2 g1 = cdiv(cmul(cgamma(c), cgamma(d)), cmul(cgamma(b), cgamma(c - a)));
    vec2 g2 = cdiv(cmul(cgamma(c), cgamma(-d)), cmul(cgamma(a), cgamma(c - b)));
    vec2 f1 = cmul(cmul(g1, cpow(mz, -a)), _hyp2f1s(a, a - c + c1, c1 - d, iz));
    vec2 f2 = cmul(cmul(g2, cpow(mz, -b)), _hyp2f1s(b, b - c + c1, c1 + d, iz));
    return f1 + f2;
}

// Gauss hypergeometric function 2F1(a, b; c; z), analytically continued.
// In the degenerate (integer difference) cases the two terms of the connection
// formula are averaged over a small symmetric shift of a parameter.
vec2 chyp2f1(in vec2 a, in vec2 b, in vec2 c, in vec2 z) {
    float rz = length(z);
    vec2 w = c1 - z;
    const vec2 dl = vec2(2e-3, 0.);
    if(rz <= .9) {
        return _hyp2f1s(a, b, c, z);
    }
    if(length(w) <= .9) {
        if(_nearint(c - a - b)) {
            return .5 * (_hyp2f1_w(a, b, c + dl, w) + _hyp2f1_w(a, b, c - dl, w));
        }
        return _hyp2f1_w(a, b, c, w);
    }
    if(rz >= 1.1) {
        if(_nearint(b - a)) {
            return .5 * (_hyp2f1_iz(a, b + dl, c, z) + _hyp2f1_iz(a, b - dl, c, z));
        }
        return _hyp2f1_iz(a, b, c, z);
    }
    // Pfaff transformation
    return cmul(cpow(w, -a), _hyp2f1s(a, c - b, c, cdiv(z, z - c1)));
}

// Orthogonal polynomials (generalised to complex degree)
vec2 clegendrep(in vec2 z, in vec2 nu) {
    return chyp2f1(-nu, nu + c1, c1, .5 * (c1 - z));
}
vec2 cchebyshevt(in vec2 z, in vec2 nu) {
    return chyp2f1(-nu, nu, R(.5), .5 * (c1 - z));
}
vec2 cchebyshevu(in vec2 z, in vec2 nu) {
    return cmul(nu + c1, chyp2f1(-nu, nu + R(2.), R(1.5), .5 * (c1 - z)));
}
vec2 claguerre(in vec2 z, in vec2 nu) {
    return chyp1f1(-nu, c1, z);
}
vec2 chermite(in vec2 z, in vec2 nu) {
    vec2 z2 = cmul(z, z);
    vec2 h = .5 * (c1 - nu);
    vec2 a = cmul(chyp1f1(-.5 * nu, R(.5), z2), crgamma(h));
    vec2 b = 2. * cmul(z, cmul(chyp1f1(h, R(1.5), z2), crgamma(-.5 * nu)));
    return cmul(cmul(cpow(R(2.), nu), R(sqrt(PI))), a - b);
}

// ---------------------------------------------------------------------------
// Bessel functions
// ---------------------------------------------------------------------------
// sum_k sg^k (z/2)^(2k) / (k! (nu + 1)_k)
vec2 _bessel_series(in vec2 z, in vec2 nu, in float sg) {
    vec2 q = sg * .25 * cmul(z, z);
    vec2 t = c1;
    vec2 s = c1;
    for(int k = 0; k < 100; k++) {
        float kf = float(k);
        t = cdiv(cmul(t, q), (nu + R(kf + 1.)) * (kf + 1.));
        s += t;
        if(dot2(t) < 1e-14 * dot2(s)) {
            break;
        }
    }
    return s;
}

vec2 _besselj_series(in vec2 z, in vec2 nu) {
    return cmul(cmul(cpow(.5 * z, nu), crgamma(nu + c1)), _bessel_series(z, nu, -1.));
}
vec2 _besseli_series(in vec2 z, in vec2 nu) {
    return cmul(cmul(cpow(.5 * z, nu), crgamma(nu + c1)), _bessel_series(z, nu, 1.));
}

// Hankel asymptotic sums: s1 = sum i^k a_k / z^k, s2 = sum (-i)^k a_k / z^k
void _hankel_sums(in vec2 z, in vec2 nu, out vec2 s1, out vec2 s2) {
    vec2 mu = 4. * cmul(nu, nu);
    vec2 u = cmul(ci, cinv(z));
    vec2 t1 = c1;
    vec2 t2 = c1;
    s1 = c1;
    s2 = c1;
    float prev = 1e30;
    for(int k = 1; k < 24; k++) {
        float kf = float(k);
        float o = 2. * kf - 1.;
        vec2 f = cdiv(mu - R(o * o), R(8. * kf));
        vec2 n1 = cmul(cmul(t1, f), u);
        vec2 n2 = cmul(cmul(t2, f), -u);
        float m = dot2(n1) + dot2(n2);
        if(m > prev) {
            break;
        }
        prev = m;
        t1 = n1;
        t2 = n2;
        s1 += t1;
        s2 += t2;
        if(m < 1e-16) {
            break;
        }
    }
}

void _hankel_pair(in vec2 z, in vec2 nu, out vec2 h1, out vec2 h2) {
    vec2 s1, s2;
    _hankel_sums(z, nu, s1, s2);
    vec2 chi = z - nu * ETA - R(PI * .25);
    vec2 pref = sqrt(2. / PI) * cinv(csqrt(z));
    h1 = cmul(pref, cmul(cexp(cmul(ci, chi)), s1));
    h2 = cmul(pref, cmul(cexp(cmul(-ci, chi)), s2));
}

bool _bessel_asym(in vec2 z, in vec2 nu) {
    return dot2(z) > 36. && dot2(z) > 4. * dot2(nu);
}

vec2 _besselj_asym(in vec2 z, in vec2 nu) {
    vec2 h1, h2;
    _hankel_pair(z, nu, h1, h2);
    return .5 * (h1 + h2);
}

vec2 cbesselj(in vec2 z, in vec2 nu) {
    float sg = 1.;
    if(abs(nu.y) < 1e-6 && nu.x < 0. && abs(nu.x - round(nu.x)) < 1e-6) {
        float n = -round(nu.x);
        nu = R(n);
        sg = mod(n, 2.) < .5 ? 1. : -1.;
    }
    if(dot2(z) < 1e-20) {
        return length(nu) < 1e-6 ? c1 : c0;
    }
    if(_bessel_asym(z, nu)) {
        return sg * _besselj_asym(z, nu);
    }
    return sg * _besselj_series(z, nu);
}

bool _bessel_isint(in vec2 nu) {
    return abs(nu.y) < 1e-6 && abs(nu.x - round(nu.x)) < 1e-6 && abs(nu.x) < 9.5;
}

// Y_n and K_n for an integer order n >= 0 (logarithmic series)
void _bessel_yk_int(in vec2 z, in int n, out vec2 yn, out vec2 kn) {
    vec2 x = .5 * z;
    vec2 x2 = cmul(x, x);
    vec2 lx = clog(x);
    float nf = float(n);
    vec2 xn = cpow(x, n);

    // finite sums F = sum (n-k-1)!/k! x^(2k-n), Fa = same with (-1)^k
    vec2 F = c0;
    vec2 Fa = c0;
    float fac = 1.;
    for(int j = 2; j < 10; j++) {
        if(j >= n) {
            break;
        }
        fac *= float(j);
    }
    // fac = (n-1)! for n >= 1
    vec2 pw = n > 0 ? cinv(xn) : c0;
    float sg = 1.;
    for(int k = 0; k < 9; k++) {
        if(k >= n) {
            break;
        }
        F += fac * pw;
        Fa += sg * fac * pw;
        sg = -sg;
        fac /= max(float(n - k - 1) * float(k + 1), 1.);
        pw = cmul(pw, x2);
    }

    // power series
    float nfact = 1.;
    for(int j = 2; j < 10; j++) {
        if(j > n) {
            break;
        }
        nfact *= float(j);
    }
    vec2 t = R(1. / nfact);
    float hk = 0.;
    float hnk = 0.;
    for(int j = 1; j < 10; j++) {
        if(j > n) {
            break;
        }
        hnk += 1. / float(j);
    }
    vec2 sI = c0;
    vec2 sJ = c0;
    vec2 sY = c0;
    vec2 sK = c0;
    float alt = 1.;
    for(int k = 0; k < 80; k++) {
        float ck = -2. * GAMMA + hk + hnk;
        sI += t;
        sJ += alt * t;
        sY += alt * ck * t;
        sK += ck * t;
        float kf = float(k);
        t = cmul(t, x2) / ((kf + 1.) * (kf + 1. + nf));
        hk += 1. / (kf + 1.);
        hnk += 1. / (kf + 1. + nf);
        alt = -alt;
        if(dot2(t) < 1e-14 * dot2(sI)) {
            break;
        }
    }
    vec2 In = cmul(xn, sI);
    vec2 Jn = cmul(xn, sJ);
    yn = (2. * cmul(Jn, lx) - F - cmul(xn, sY)) / PI;
    float s = mod(nf, 2.) < .5 ? 1. : -1.;
    kn = .5 * Fa - s * cmul(lx, In) + .5 * s * cmul(xn, sK);
}

vec2 _bessely_series(in vec2 z, in vec2 nu) {
    vec2 jp = _besselj_series(z, nu);
    vec2 jm = _besselj_series(z, -nu);
    return cdiv(cmul(jp, ccos(PI * nu)) - jm, csin(PI * nu));
}

vec2 cbessely(in vec2 z, in vec2 nu) {
    if(_bessel_asym(z, nu)) {
        vec2 h1, h2;
        _hankel_pair(z, nu, h1, h2);
        return cmul(h1 - h2, vec2(0., -.5));
    }
    if(_bessel_isint(nu)) {
        vec2 yn, kn;
        int n = int(abs(round(nu.x)));
        _bessel_yk_int(z, n, yn, kn);
        return (nu.x < 0. && mod(float(n), 2.) > .5) ? -yn : yn;
    }
    if(_nearint(nu)) {
        // The reflection formula is singular for integer orders: average over nu +- delta
        return .5 * (_bessely_series(z, nu + vec2(1e-2, 0.)) + _bessely_series(z, nu - vec2(1e-2, 0.)));
    }
    return _bessely_series(z, nu);
}

vec2 cbesselh1(in vec2 z, in vec2 nu) {
    return cbesselj(z, nu) + cmul(ci, cbessely(z, nu));
}
vec2 cbesselh2(in vec2 z, in vec2 nu) {
    return cbesselj(z, nu) - cmul(ci, cbessely(z, nu));
}

vec2 cbesseli(in vec2 z, in vec2 nu) {
    if(abs(nu.y) < 1e-6 && nu.x < 0. && abs(nu.x - round(nu.x)) < 1e-6) {
        nu = R(-round(nu.x));
    }
    if(dot2(z) < 1e-20) {
        return length(nu) < 1e-6 ? c1 : c0;
    }
    if(_bessel_asym(z, nu)) {
        // I_nu(z) = exp(-+ i pi nu / 2) J_nu(+- i z), rotating z into the sector where the Hankel expansion is accurate
        float s = z.y < 0. ? -1. : 1.;
        return cmul(cexp(cmul(ci, nu) * (s * ETA)), _besselj_asym(cmul(vec2(0., -s), z), nu));
    }
    return _besseli_series(z, nu);
}

vec2 _besselk_series(in vec2 z, in vec2 nu) {
    vec2 ip = _besseli_series(z, nu);
    vec2 im = _besseli_series(z, -nu);
    return PI * .5 * cdiv(im - ip, csin(PI * nu));
}

vec2 cbesselk(in vec2 z, in vec2 nu) {
    if(dot2(z) > 25.) {
        vec2 mu = 4. * cmul(nu, nu);
        vec2 iz = cinv(z);
        vec2 t = c1;
        vec2 s = c1;
        float prev = 1e30;
        for(int k = 1; k < 24; k++) {
            float kf = float(k);
            float o = 2. * kf - 1.;
            vec2 n = cmul(cmul(t, cdiv(mu - R(o * o), R(8. * kf))), iz);
            float m = dot2(n);
            if(m > prev) {
                break;
            }
            prev = m;
            t = n;
            s += t;
            if(m < 1e-16) {
                break;
            }
        }
        return cmul(cmul(sqrt(PI / 2.) * cinv(csqrt(z)), cexp(-z)), s);
    }
    if(_bessel_isint(nu)) {
        vec2 yn, kn;
        _bessel_yk_int(z, int(abs(round(nu.x))), yn, kn);
        return kn;
    }
    if(_nearint(nu)) {
        return .5 * (_besselk_series(z, nu + vec2(1e-2, 0.)) + _besselk_series(z, nu - vec2(1e-2, 0.)));
    }
    return _besselk_series(z, nu);
}

// ---------------------------------------------------------------------------
// Airy functions
// ---------------------------------------------------------------------------
const float AIRY_AI0 = 0.35502805388781723926;
const float AIRY_AIP0 = -0.25881940379280679840;

void _airy_maclaurin(in vec2 z, out vec2 f, out vec2 g) {
    vec2 z3 = cmul(z, cmul(z, z));
    vec2 tf = c1;
    vec2 tg = z;
    f = c1;
    g = z;
    for(int k = 0; k < 60; k++) {
        float kf = float(k);
        tf = cmul(tf, z3) / ((3. * kf + 2.) * (3. * kf + 3.));
        tg = cmul(tg, z3) / ((3. * kf + 3.) * (3. * kf + 4.));
        f += tf;
        g += tg;
        if(dot2(tf) + dot2(tg) < 1e-16 * (dot2(f) + dot2(g))) {
            break;
        }
    }
}

vec2 _airy_sum(in vec2 zeta, in float alt) {
    vec2 iz = alt * cinv(zeta);
    vec2 p = c1;
    vec2 s = c1;
    float u = 1.;
    float prev = 1e30;
    for(int k = 1; k < 16; k++) {
        float kf = float(k);
        u *= (6. * kf - 5.) * (6. * kf - 3.) * (6. * kf - 1.) / ((2. * kf - 1.) * 216. * kf);
        p = cmul(p, iz);
        vec2 t = u * p;
        float m = dot2(t);
        if(m > prev) {
            break;
        }
        prev = m;
        s += t;
        if(m < 1e-16) {
            break;
        }
    }
    return s;
}

void _airy_pq(in vec2 zeta, out vec2 P, out vec2 Q) {
    vec2 iz = cinv(zeta);
    vec2 p = c1;
    float u = 1.;
    float prev = 1e30;
    P = c1;
    Q = c0;
    for(int k = 1; k < 16; k++) {
        float kf = float(k);
        u *= (6. * kf - 5.) * (6. * kf - 3.) * (6. * kf - 1.) / ((2. * kf - 1.) * 216. * kf);
        p = cmul(p, iz);
        vec2 t = u * p;
        float m = dot2(t);
        if(m > prev) {
            break;
        }
        prev = m;
        int r = k % 4;
        if(r == 0) {
            P += t;
        } else if(r == 1) {
            Q += t;
        } else if(r == 2) {
            P -= t;
        } else {
            Q -= t;
        }
        if(m < 1e-16) {
            break;
        }
    }
}

vec2 _airy_ai_asym(in vec2 z) {
    if(abs(atan(z.y, z.x)) < 2.0943951) {
        vec2 zeta = (2. / 3.) * cmul(z, csqrt(z));
        vec2 s = _airy_sum(zeta, -1.);
        return cdiv(cmul(cexp(-zeta), s), 2. * sqrt(PI) * csqrt(csqrt(z)));
    }
    vec2 w = -z;
    vec2 zeta = (2. / 3.) * cmul(w, csqrt(w));
    vec2 P, Q;
    _airy_pq(zeta, P, Q);
    vec2 th = zeta - R(PI * .25);
    return cdiv(cmul(ccos(th), P) + cmul(csin(th), Q), sqrt(PI) * csqrt(csqrt(w)));
}

vec2 cairyai(in vec2 z) {
    if(dot2(z) > 9.) {
        return _airy_ai_asym(z);
    }
    vec2 f, g;
    _airy_maclaurin(z, f, g);
    return AIRY_AI0 * f + AIRY_AIP0 * g;
}

vec2 cairybi(in vec2 z) {
    if(dot2(z) > 9.) {
        vec2 a = cairyai(cmul(z, cis(2.0943951)));
        vec2 b = cairyai(cmul(z, cis(-2.0943951)));
        return cmul(cis(PI / 6.), a) + cmul(cis(-PI / 6.), b);
    }
    vec2 f, g;
    _airy_maclaurin(z, f, g);
    return SQRT3 * (AIRY_AI0 * f - AIRY_AIP0 * g);
}

// ---------------------------------------------------------------------------
// Trigonometric / hyperbolic integrals
// ---------------------------------------------------------------------------
// Auxiliary asymptotic functions f(z) and g(z) (Re z > 0)
void _sici_fg(in vec2 z, out vec2 f, out vec2 g) {
    vec2 iz2 = cinv(cmul(z, z));
    vec2 tf = cinv(z);
    vec2 tg = cmul(tf, cinv(z));
    f = tf;
    g = tg;
    float prev = 1e30;
    for(int k = 1; k < 14; k++) {
        float kf = float(k);
        vec2 nf = -cmul(tf, iz2) * (2. * kf - 1.) * (2. * kf);
        vec2 ng = -cmul(tg, iz2) * (2. * kf) * (2. * kf + 1.);
        float m = dot2(nf) + dot2(ng);
        if(m > prev) {
            break;
        }
        prev = m;
        tf = nf;
        tg = ng;
        f += tf;
        g += tg;
        if(m < 1e-16) {
            break;
        }
    }
}

vec2 _si_series(in vec2 z) {
    vec2 mz2 = -cmul(z, z);
    vec2 t = c1;
    vec2 s = c1;
    for(int k = 0; k < 40; k++) {
        float kf = float(k);
        t = cmul(t, mz2) / ((2. * kf + 2.) * (2. * kf + 3.));
        s += t / (2. * kf + 3.);
        if(dot2(t) < 1e-16) {
            break;
        }
    }
    return cmul(z, s);
}

vec2 _ci_series(in vec2 z) {
    vec2 mz2 = -cmul(z, z);
    vec2 t = c1;
    vec2 s = c0;
    for(int k = 0; k < 40; k++) {
        float kf = float(k);
        t = cmul(t, mz2) / ((2. * kf + 1.) * (2. * kf + 2.));
        s += t / (2. * kf + 2.);
        if(dot2(t) < 1e-16) {
            break;
        }
    }
    return R(GAMMA) + clog(z) + s;
}

vec2 csinint(in vec2 z) {
    if(dot2(z) < 81.) {
        return _si_series(z);
    }
    float sg = 1.;
    if(z.x < 0.) {
        z = -z;
        sg = -1.;
    }
    vec2 f, g;
    _sici_fg(z, f, g);
    return sg * (R(ETA) - cmul(f, ccos(z)) - cmul(g, csin(z)));
}

vec2 ccosint(in vec2 z) {
    if(dot2(z) < 81.) {
        return _ci_series(z);
    }
    vec2 shift = c0;
    if(z.x < 0.) {
        shift = vec2(0., z.y < 0. ? -PI : PI);
        z = -z;
    }
    vec2 f, g;
    _sici_fg(z, f, g);
    return cmul(f, csin(z)) - cmul(g, ccos(z)) + shift;
}

vec2 csinhint(in vec2 z) {
    return cmul(vec2(0., -1.), csinint(cmul(ci, z)));
}

vec2 ccoshint(in vec2 z) {
    vec2 shift = c0;
    if(z.x < 0.) {
        shift = vec2(0., z.y < 0. ? -PI : PI);
        z = -z;
    }
    return ccosint(cmul(ci, z)) - vec2(0., ETA) + shift;
}
`,$e=`float aafract(float x) {
    float v = fract(x);
    float w = length(vec2(dFdx(x), dFdy(x)));
    return v < 1. - w ? v / (1. - w) : (1. - v) / w;
}

float aastep(float x) {
    float w = length(vec2(dFdx(x), dFdy(x)));
    return smoothstep(.7, -.7, (abs(fract(x - .25) - .5) - .25) / w);
}

vec4 iterate(vec2 pixel) {
    float timeFactor = -time * speed;
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

    #if SHADING >= 5
    vec2 zdc = vec2(0., 0.);
    vec2 zdc_1 = vec2(0., 0.);
    #endif

    #if defined(USE_DERIVATIVE) || SHADING == 4
    float zdzmax = exp(-derivative * .15);
    vec2 zdz = vec2(1., 0.);
    vec2 zdz_1 = vec2(0., 0.);
    #endif

    #ifdef SHOW_POLYA
    float polyaSize = 2. / polya;
    // #ifdef SCALED
    polyaSize *= scale.x;
    // #endif
    vec2 tileZ = (floor(pixel / polyaSize) + 0.5) * polyaSize;
    vec2 polyaTile = pixel - tileZ;
    #endif

    #if SHADING == 3 || SHADING == 4
    float itercoef = 0.;
    #endif

    #ifdef USE_CYCLE
    ivec4 cycle = ivec4(3, 0, 10, 0);
    vec2 cycleZRef = vec2(0.);
    #endif

    float n = 0.;
    for (int i = 0; i < iterations; i++) {
        n = float(i) + 1.;

        #if SHADING >= 5
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
        tileZ = F(tileZ, c);
        #endif
        #endif
        z_2 = z_1;
        z_1 = zt;

        #if SHADING == 3
        itercoef += exp(-length(z) - .5 / (length(z - z_1)));
        #endif

        #if (defined(USE_DERIVATIVE) || SHADING == 4)
        vec2 zdzt = zdz;
        zdz = F_prime_z(z, c, zdz, zdz_1);
        zdz_1 = zdzt;
        #endif

        #if SHADING == 4
        // Prevent overflow
        itercoef += log(clamp(dot2(zdz), 1e-32, 1e32));
        #endif

        #ifdef USE_DERIVATIVE
        if (dot2(zdz) < zdzmax) {
            n = float(iterations);
            break;
        }
        #endif

        #ifdef USE_CYCLE
        if (dot2(z - cycleZRef) < 1e-16) {
            n = float(iterations);
            break;
        }

        if (cycle.x == cycle.y) {
            cycle.y = 0;
            if (cycle.z == cycle.w) {
                cycle.w = 0;
                cycle.x *= 2;
            }
            cycle.w++;
            cycleZRef = z;
        }
        cycle.y++;
        #endif

        #ifdef CONVERGENT
        if (dot2(z - z_1) < BAILIN) {
            break;
        }
        #endif

        #ifdef DIVERGENT
        if (dot2(z) > BAILOUT) {
            break;
        }
        #endif

        #ifdef PERTURB
        // Rebasing
        if (dot2(z) < dot2(dz) || m >= max) {
            dz = z;
            m = 0;
            max = maxIterations.x;
            shift = false;
            Z = fetchRef(m, shift);
        }
        #endif
    }
    // Domain coloring of z:
    float argZ = (atan(z.y, z.x)) / TAU;
    float lengthZ = length(z);
    #ifdef SCALED
    lengthZ /= sqrt(dot2(scale));
    #endif
    float log2LengthZ = log2(lengthZ);

    #ifdef ARG_GRID_LOG
    float argGrid = log2(abs(argZ));
    #else
    float argGrid = argZ;
    #endif
    #ifdef NORM_GRID_LOG
    float normGrid = log2LengthZ;
    #else
    float normGrid = lengthZ;
    #endif

    vec3 col = vec3(0.);
    #ifdef ONLY_BAILED
    if (n < float(iterations)) {
        #endif
        float colorLevel = 0.;
        float root = 0.;
        #ifdef USE_ROOTS
        if (lengthZ > .002) {
            root = (mod((argZ + lengthZ) * TAU, TAU)) / TAU;
        }
        #endif
        #if SHADING == 0
        colorLevel = (argZ + timeFactor + .5) * 100.;
        #elif SHADING == 1
        colorLevel = n + 1.;
        #elif SHADING == 2
        colorLevel = n + 1. - log2(2. * log2(lengthZ)) - 4.0;

        #ifdef CONVERGENT
        if (dot2(z - z_1) < BAILIN) {
            float diff = dot2(z - z_1);
            float prev = dot2(z_1 - z_2);
            colorLevel = n - 1. + log(BAILIN / prev) / log(diff / prev);
        }
        #endif

        #elif SHADING == 3
        colorLevel = 10. * itercoef;
        #elif SHADING == 4
        colorLevel = itercoef / float(iterations);
        #elif SHADING >= 5
        float distEstimate = sqrt(dot2(z) / dot2(zdc)) * .5 * log(dot2(z));
        #if SHADING == 6
        distEstimate /= scale.x;
        #endif
        colorLevel = 130. / pow(distEstimate, .02);
        #endif

        col = color(colorLevel, root + timeFactor);

        #ifdef ONLY_BAILED
    }
    #endif

    #if PALETTE == 13
    vec2 uv = mod((z * vec2(1., -textureRatio) * velocity) - vec2(.5), vec2(1.0));
    // vec2 textureDist = min(uv, 1. - uv) / fwidth(uv);
    vec3 texCol = texture(tex, uv).rgb;
    col = mix(max(texCol, col), texCol, textureBlend);
    #endif

    #ifdef NORM_SHADE
    col *= 1. - normShadeValue * aafract(normGrid * normGridScale + timeFactor);
    #endif

    #ifdef ARG_SHADE
    col *= 1. + argShadeValue * aafract(argGrid * argGridScale + timeFactor);
    #endif

    #ifdef SHOW_GRID
    vec2 gridZ = z;

    #ifdef SCALED
    gridZ /= dot2(scale);
    #endif

    #ifdef GRID_LOG
    vec2 grid = log2(abs(gridZ));
    #else
    vec2 grid = gridZ;
    #endif

    vec2 gridDist = fract(2. * (grid + vec2(timeFactor)) * gridScale);
    gridDist = min(gridDist, 1. - gridDist);
    gridDist /= fwidth(grid) * gridScale;
    col = mix(vec3(0.), col, smoothstep(0., gridWidth * 3., gridDist.x));
    col = mix(col * .3, col, smoothstep(0., gridWidth * 4., gridDist.y));
    #endif

    #ifdef SHOW_NORM_GRID
    float normGridDist = fract((normGrid + timeFactor) * normGridScale);
    normGridDist = min(normGridDist, 1. - normGridDist);
    normGridDist /= fwidth(normGrid) * normGridScale / 2.;
    col = mix(col, vec3(1.), smoothstep(normGridWidth * 3., 0., normGridDist));
    #endif

    #ifdef SHOW_ARG_GRID
    float argGridDist = fract(2. * (argGrid + timeFactor * .25) * argGridScale);
    argGridDist = min(argGridDist, 1. - argGridDist);
    argGridDist /= min(fwidth(argGrid), .01) * argGridScale;
    col = mix(col, col + .5, smoothstep(argGridWidth * 3., 0., argGridDist));
    #endif

    #ifdef SHOW_ZEROES
    col = mix(col, vec3(1.), smoothstep(0., PI, zeroes - log2LengthZ));
    #endif

    #ifdef SHOW_POLES
    col = mix(col, vec3(0.), smoothstep(0., PI, log2LengthZ - poles));
    #endif

    #ifdef SHOW_POLYA
    vec2 polyaZ = conj(z);

    float shade = 1.;
    #ifdef ANIMATE
    shade = 1. - smoothstep(polyaSize * .3, polyaSize * .5, length(polyaTile));
    #endif

    float arrow = 0.;
    float arrowBase = length(conj(tileZ)) * .1;
    float arrowLength = clamp(arrowBase, .08, .35);
    float arrowAngle = atan(polyaZ.y, polyaZ.x);

    polyaTile = opRotate(polyaTile, arrowAngle);

    float polyaScale = 1. / polyaSize;
    polyaTile *= polyaScale;

    #ifdef ANIMATE
    polyaTile.x += timeFactor * arrowBase * 25.;
    float arrowRound = min(.35 / arrowLength, 2.);
    polyaTile.x -= round(polyaTile.x * arrowRound) / arrowRound;
    #endif

    arrow = sdArrow(polyaTile, vec2(-arrowLength, 0.), vec2(arrowLength, 0.), .02, .08, 2.);
    arrow /= polyaScale;

    #ifndef POLYA_COLOR
    float arrowCol = log2(arrowBase + .1);
    vec3 arrowColor = color(arrowCol * 5.);
    col = vec3(0.);
    #else
    vec3 arrowColor = col + polyaLightness - 1.;
    #endif

    float aaa = .003 * scale.x;
    col = mix(col, arrowColor, shade * (1.0 - smoothstep(0.0, aaa, arrow)));
    #endif

    return vec4(col, 1.);
}
`,et=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`,tt=`#version 300 es
precision highp float;
precision highp int;

##CONFIG

#include includes

in vec2 vertex;
in vec2 uv;

out vec3 vPosition;
out vec2 vUv;
out vec2 vPixel;
out vec3 vNormal;

uniform mat4 matrix;
uniform mat4 viewProjection;

vec4 viewProject(vec3 position) {
    return viewProjection * vec4(position, 1.);
}

void main() {
    vec2 pixel = 2. * vertex * scale.x;

    #init_args
    #transform_args
    vec2 z0 = z;
    // Tangent and bitangent
    float eps = 1e-4;
    vec2 zt = z + R(eps);
    vec2 zb = z + I(eps);
    vec2 zt0 = zt;
    vec2 zb0 = zb;

    for(int i = 0; i < iterations; i++) {
        z = F(z, c);
        zt = F(zt, c);
        zb = F(zb, c);
    }

    mat4 transformMatrix = matrix / scale.x;

    // Unshift z translation
    z0 -= arg_z;
    zt0 -= arg_z;
    zb0 -= arg_z;
    z = cdiv(z, cis(o.x));
    zt = cdiv(zt, cis(o.x));
    zb = cdiv(zb, cis(o.x));

    vPosition = (transformMatrix * vec4(z0, z.x, 1.)).xyz;
    vec3 tangent = (transformMatrix * vec4(zt0, zt.x, 1.)).xyz - vPosition;
    vec3 bitangent = (transformMatrix * vec4(zb0, zb.x, 1.)).xyz - vPosition;

    vNormal = normalize(cross(tangent, bitangent));
    vUv = uv;
    vPixel = pixel;
    gl_Position = vec4(viewProject(vPosition));
}
`,nt=`#version 300 es
precision highp float;
precision highp int;

##CONFIG

#include includes

in vec2 vertex;
in vec2 uv;

out vec3 vPosition;
out vec2 vUv;
out vec2 vPixel;
out vec3 vNormal;

uniform mat4 matrix;
uniform mat4 viewProjection;

vec3 xproject(vec4 pos) {
    // return pos.xyz;
    // return vec3(pos.xy, length(pos.zw));
    float limit = abs(anakata);
    if (pos.w < -limit) {
        return vec3(intBitsToFloat(-1));
    }
    return vec3(limit * pos.xyz / (limit + pos.w));
}

vec4 viewProject(vec3 position) {
    return viewProjection * vec4(position, 1.);
}

void main() {
    vec2 pixel = 2. * vertex * scale.x;

    #init_args
    #transform_args
    vec2 z0 = z;
    // Tangent and bitangent
    float eps = 1e-3;
    vec2 zt = z + R(eps);
    vec2 zb = z + I(eps);
    vec2 zt0 = zt;
    vec2 zb0 = zb;

    for (int i = 0; i < iterations; i++) {
        z = F(z, c);
        zt = F(zt, c);
        zb = F(zb, c);
    }

    mat4 transformMatrix = matrix / scale.x;

    // Unshift z translation
    z0 -= arg_z;
    zt0 -= arg_z;
    zb0 -= arg_z;
    if (anakata < 0.) {
        z = clamp(z, anakata, -anakata);
    }

    vPosition = xproject(transformMatrix * vec4(z0, z));
    vec3 tangent = xproject(transformMatrix * vec4(zt0, zt)) - vPosition;
    vec3 bitangent = xproject(transformMatrix * vec4(zb0, zb)) - vPosition;

    vNormal = normalize(cross(tangent, bitangent));
    vUv = uv;
    vPixel = pixel;
    gl_Position = vec4(viewProject(vPosition));
}
`,rt=({resolution:e=100}={})=>{let t=[],n=[],r=[],i=1/e,a=2*e+1;for(let e=0;e<a;e++)for(let o=0;o<a;o++)if(n.push(-1+o*i,-1+e*i),r.push(o/(a-1),e/(a-1)),o>0&&e>0){let n=o-1,r=e-1;t.push(o+e*a,o+r*a,n+r*a),t.push(o+e*a,n+r*a,n+e*a)}return{vertices:n,indices:t,uvs:r}},it={includes:Ke,globals:qe,colors:Ye,render:Je,complex:Xe,special:Ze,extra:Qe,iterate:$e},at=e=>e.replace(/[A-Z]/g,e=>`_${e.toLowerCase()}`).toUpperCase(),ot=e=>Object.entries(Be).map(([t,n])=>(e=>e===!1?``:`#define ${at(t)}${e===!0?``:` ${e}`}`)(typeof n==`function`?n(e):e[t])).filter(e=>e).join(`
`),st=(e,t)=>(Object.entries(it).forEach(([e,n])=>{t=t.replace(`#include ${e}`,n)}),t=t.replace(`##CONFIG`,ot(e)),t=t.replace(`uniform vec2 args;`,Object.keys(e.args).map(e=>`uniform vec2 arg_${e};`).join(`
`)),t=t.replace(`#init_args`,Object.keys(e.args).map(e=>`vec2 ${e} = arg_${e};`).join(`
`)),t=t.replace(`#transform_args`,Object.keys(e.args).filter(t=>e.varying.includes(t)).concat(e.perturb&&e.f_perturb?[`z`,`c`].filter(t=>e.varying.includes(t)).map(e=>`d${e}`):[]).map(e=>`${e} += pixel;\n  ${e} *= transform;`).join(`
`)),t=t.replace(/\bF\(\s*(.+?)\s*,\s*(.+?)\s*\)/g,be(e.f).toShader().replace(/\bz\b/g,`$1`).replace(/\bc\b/g,`$2`)),t=e.f_prime_z?t.replace(/\bF_prime_z\s*\(\s*(.+?)\s*,\s*(.+?)\s*,\s*(.*?)\s*,\s*(.*?)\s*\)/g,be(e.f_prime_z).toShader().replace(/\bz\b/g,`$1`).replace(/\bc\b/g,`$2`).replace(/\bz_prime\b/g,`$3`).replace(/\bz_1_prime\b/g,`$4`)):t.replace(/\bF_prime_z\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,`vec2(0)`),t=e.f_prime_c?t.replace(/\bF_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,be(e.f_prime_c).toShader().replace(/z_prime/g,`$1`).replace(/z_1_prime/g,`$2`)):t.replace(/\bF_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,`vec2(0)`),t=e.f_perturb?t.replace(/F_perturb\(Z,\s*dz,\s*dc\)/g,be(e.f_perturb).toShader()):t.replace(/F_perturb\(Z,\s*dz,\s*dc\)/g,`vec2(0)`),window.location.search.includes(`debug`)&&console.info(t.split(`
`).map((e,t)=>`${t+1}: ${e}`).join(`
`)),t),ct=(e,t,n)=>{let{gl:r}=e;if(r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS)){let e=r.getShaderInfoLog(n),i=t,a=e.match(/ERROR: \d+:(\d+):/)?.[1];if(a){let e=parseInt(a),n=t.split(`
`),r=Math.max(0,e-5),o=Math.min(n.length,e+5);i=n.slice(r,o).map((e,t)=>(t===4?`=>`:`  `)+e).join(`
`)}return console.error(`An error occurred compiling shader: ${e}`,i),e}},lt=e=>{let{gl:t}=e;if(t.linkProgram(e.env.program),!t.getProgramParameter(e.env.program,t.LINK_STATUS)){let n=t.getProgramInfoLog(e.env.program);return console.error(`Unable to initialize the shader program: ${n}`),n}},ut=e=>{ct(e,e.dimensions<3?et:st(e,e.dimensions===3?tt:nt),e.env.vertexShader)},dt=e=>{let{gl:t}=e;e.env.texture&&t.deleteTexture(e.env.texture),ct(e,st(e,e.dimensions===1?Ue:e.dimensions===2?We:Ge),e.env.fragmentShader),lt(e),t.useProgram(e.env.program),t.activeTexture(t.TEXTURE2),e.env.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,e.env.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e.textureElement?e.textureElement.width:1,e.textureElement?e.textureElement.height:1,0,t.RGBA,t.UNSIGNED_BYTE,e.textureElement?e.textureElement:new Uint8Array([255,0,0,255])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e.env.uniforms=Object.keys(He).concat(Object.keys(e.args).map(e=>`arg_${e}`)).reduce((n,r)=>(n[r]=t.getUniformLocation(e.env.program,r),n),{}),window.location.search.includes(`debug`)&&[`f`,`f_prime_z`,`f_prime_c`,`f_perturb`].forEach((t,n)=>{if(!e[t])return;let r=be(e[t]);console.info(t,r.toShader(),r.toComplex())}),e.dimensions>2&&(e.env.uniforms.viewProjection=t.getUniformLocation(e.env.program,`viewProjection`),e.env.uniforms.eye=t.getUniformLocation(e.env.program,`eye`)),mt(e)},ft=e=>{let t=e.gl;if(e.env){if(e.env.dimensions===e.dimensions){console.warn(`Dimensions already set`,e.dimensions);return}e.env.dimensions<3?t.deleteTexture(e.env.orbit):(t.deleteBuffer(e.env.uvBuffer),t.deleteBuffer(e.env.vertexBuffer),t.deleteBuffer(e.env.indexBuffer),t.deleteVertexArray(e.env.vao)),t.deleteShader(e.env.vertexShader),t.deleteShader(e.env.fragmentShader),t.deleteProgram(e.env.program),delete e.env}if(e.env={vertexShader:t.createShader(t.VERTEX_SHADER),fragmentShader:t.createShader(t.FRAGMENT_SHADER),program:t.createProgram(),dimensions:e.dimensions},t.attachShader(e.env.program,e.env.vertexShader),t.attachShader(e.env.program,e.env.fragmentShader),ut(e),dt(e),e.dimensions<3)t.activeTexture(t.TEXTURE1),e.env.orbit=t.createTexture(),t.bindTexture(t.TEXTURE_2D,e.env.orbit),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,128,128,0,t.RGBA,t.FLOAT,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1);else{e.env.camera={zoom:2,fov:Math.PI/3,eye:[0,0,0],rotation:ke(Math.PI/2,1,2),near:.01,far:100,update(n){let r=Oe(0,0,this.zoom),i=[0,0,this.zoom,0];this.eye=Ae(this.rotation,i).slice(0,3);let a=Me(je(this.rotation,r));this.aspect=n?n.fullWidth/n.fullHeight:t.canvas.clientWidth/t.canvas.clientHeight;let o=Math.min(this.aspect,1),s={left:0,right:0,top:0,bottom:0,near:this.near,far:this.far};s.top=this.near*Math.tan(this.fov/2)/o;let c=2*s.top,l=this.aspect*c;s.left=-.5*l,n&&(s.left+=n.x*l/n.fullWidth,s.top-=n.y*c/n.fullHeight,l*=n.width/n.fullWidth,c*=n.height/n.fullHeight),s.bottom=s.top-c,s.right=s.left+l,this.viewProjection=Pe(je(Ne(s),a)),t.uniformMatrix4fv(e.env.uniforms.viewProjection,!1,this.viewProjection),t.uniform3fv(e.env.uniforms.eye,this.eye)},center(){this.eye=[0,0,0],this.rotation=ke(Math.PI/2,1,2),this.update()}},e.env.camera.update();let n=rt();e.env.elements=n.indices.length,e.env.vao=t.createVertexArray(),t.bindVertexArray(e.env.vao),e.env.indiceBuffer=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.env.indiceBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(n.indices),t.STATIC_DRAW),e.env.vertexBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,e.env.vertexBuffer),e.env.vertexLocation=t.getAttribLocation(e.env.program,`vertex`),t.enableVertexAttribArray(e.env.vertexLocation),t.vertexAttribPointer(e.env.vertexLocation,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n.vertices),t.STATIC_DRAW),e.env.uvBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,e.env.uvBuffer),e.env.uvLocation=t.getAttribLocation(e.env.program,`uv`),t.enableVertexAttribArray(e.env.uvLocation),t.vertexAttribPointer(e.env.uvLocation,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n.uvs),t.STATIC_DRAW)}},pt=(e,t,n)=>{let r=document.getElementById(`webgl2`);r||(r=document.createElement(`canvas`),r.id=`webgl2`,document.body.insertBefore(r,document.body.firstChild));let i=r.getContext(`webgl2`,{antialias:!1,stencil:!1,powerPreference:`high-performance`});if(r.addEventListener(`webglcontextlost`,t,!1),r.addEventListener(`webglcontextrestored`,n,!1),e={...e,gl:i},!i){console.error(`Unable to initialize WebGL. Your browser may not support it.`);return}return ft(e),{...e,gl:i}},mt=e=>{let{uniforms:t}=e.env;Object.entries(He).concat(Object.entries(e.args).map(([e,t])=>[`arg_${e}`,{type:`2fv`,value:()=>t.to2fv()}])).forEach(([n,r])=>{typeof r==`string`&&(r={type:r,value:e=>e});let{type:i,value:a}=r,o=t[n];if(!o)return;let s=a(e[n],e);i.startsWith(`m`)?e.gl[`uniformMatrix`+i.slice(1)](o,!1,s):e.gl[`uniform`+i](o,s)}),e.env.camera?.update()},ht=(e,t,n)=>{let r=e.clientWidth,i=e.clientHeight,a=n?n.width:r*t,o=n?n.height:i*t;return a!==e.width||o!==e.height?(a=Math.floor(a),o=Math.floor(o),e.width=a,e.height=o,!0):!!n},gt=(e,t)=>w(e.re.multiply(t[0][0]).add(e.im.multiply(t[0][1])),e.re.multiply(t[1][0]).add(e.im.multiply(t[1][1]))),_t=(e,t,n,r,i,a)=>{let[o,s]=a?[2,3]:[0,1],c=Function(`z`,`c`,`z_1`,`return ${be(e.f).toComplex()}`),l=C(10**e.bailout),u=0,d=w();for(;u<e.iterations;u++){t[u*4+o]=n.re.toNumber(),t[u*4+s]=n.im.toNumber();let e=n;if(n=c(n,r,d),d=e,n.norm2().gte(l))break}return i[+!!a]=u,{orbit:t,max:u}},vt=(e,t)=>{if(!e.gl)return;let{gl:n}=e;if(n.uniform1f(e.env.uniforms.time,e.animate?performance.now()-e.timeref:0),ht(n.canvas,e.supersampling,t)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),n.uniform2fv(e.env.uniforms.aspect,[n.canvas.width/n.canvas.height,1/Math.max(n.canvas.width,n.canvas.height)]),t)){let{x:r,y:i,width:a,height:o,fullWidth:s,fullHeight:c}=t,{scale:l,varying:u,args:d}=e,{uniforms:f}=e.env;n.uniform2fv(f.aspect,[a/o,1/Math.max(a,o)]);let p=l.multiply(o/c);n.uniform2fv(f.scale,p.to2fv());let m=w(s/2,c/2),h=w(r+a/2,i+o/2).subtract(m).multiply(l).divide(w(c/2));u.split(``).forEach(e=>{let t=d[e].add(h);n.uniform2fv(f[`arg_${e}`],t.to2fv())})}if(e.dimensions<3){if(n.disable(n.DEPTH_TEST),n.disable(n.BLEND),e.perturb){let t=new Float32Array(16384*4),r=[0,0],i=e.varying.includes(`z`)?gt(e.args.z,e.transform):e.args.z,a=e.varying.includes(`c`)?gt(e.args.c,e.transform):e.args.c;try{_t(e,t,w(),a,r),_t(e,t,i,a,r,!0)}catch(e){console.warn(e)}n.uniform2iv(e.env.uniforms.maxIterations,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,128,128,0,n.RGBA,n.FLOAT,t)}n.drawArrays(n.TRIANGLES,0,3)}else n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.enable(n.DEPTH_TEST),e.transparent?(n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.depthFunc(n.ALWAYS)):(n.disable(n.BLEND),n.depthFunc(n.LEQUAL)),n.drawElements(n.TRIANGLES,e.env.elements,n.UNSIGNED_SHORT,0)};window.render=vt;var yt=(e,t)=>{let n=(0,_.useRef)(null),r=(0,_.useRef)({args:e.args,scale:e.scale,matrix:e.matrix,anakata:e.anakata,pointers:new Map}),i=Ce(()=>{t({args:r.current.args,scale:r.current.scale,matrix:r.current.matrix,anakata:r.current.anakata})},150);(0,_.useEffect)(()=>{r.current.args={...e.args}},[e.args]),(0,_.useEffect)(()=>{r.current.scale=e.scale},[e.scale]),(0,_.useEffect)(()=>{r.current.matrix=e.matrix},[e.matrix]),(0,_.useEffect)(()=>{r.current.anakata=e.anakata},[e.anakata]);let a=(0,_.useCallback)(()=>{n.current=null,vt(e)},[e]),o=(0,_.useCallback)((t,n,i,a)=>{if(e.dimensions>2){if(e.control===`4d`){let i=[[[1,2],[0,1]],[[2,3],[0,3]],[[1,3],[0,2]]];r.current.matrix=je(je(ke(5*t,...i[e.rotation][1]),ke(5*n,...i[e.rotation][0])),r.current.matrix);return}if(e.control===`3d`){e.env.camera.rotation=je(e.env.camera.rotation,je(ke(5*t,0,2),ke(-5*n,1,2))),e.env.camera.update();return}}let o=e.gl.canvas.width/e.gl.canvas.height,s=r.current.scale.multiply(2);(i?e.varying:e.move).split(``).forEach(e=>{r.current.args[e]=r.current.args[e].add(w(-t*o,n).multiply(s))})},[e.gl.canvas.height,e.gl.canvas.width,e.move,e.dimensions,e.control,e.rotation,e.varying]),s=(0,_.useCallback)((t,n,i)=>{let a=.5-n,s=.5-i;if(e.dimensions<3&&o(a*t,s*t,!0),e.dimensions>2){if(e.control===`3d`){e.env.camera.zoom-=t,e.env.camera.update();return}if(e.control===`4d`){r.current.anakata+=t;return}}let c=r.current.scale.multiply(t),l=c.real().toString().match(/^-?0\.(0*)/);l&&l[1].length>c.real().precision-16&&(c.real().precision=l[1].length+16),r.current.scale=r.current.scale.subtract(c)},[o,e.dimensions,e.control]),c=(0,_.useCallback)(()=>{e.args=r.current.args,e.scale=r.current.scale,e.matrix=r.current.matrix,e.anakata=r.current.anakata,Object.keys(e.args).forEach(t=>{e.gl.uniform2fv(e.env.uniforms[`arg_${t}`],r.current.args[t].to2fv())}),e.gl.uniform2fv(e.env.uniforms.scale,r.current.scale.to2fv()),e.gl.uniformMatrix4fv(e.env.uniforms.matrix,!1,Pe(r.current.matrix)),e.gl.uniform1f(e.env.uniforms.anakata,r.current.anakata),n.current||=requestAnimationFrame(a)},[a,e.type]);(0,_.useEffect)(()=>{let e=null,t=null,n=e=>{e.button!==0||e.target.id!==`webgl2`||r.current.pointers.set(e.pointerId,[e.clientX,e.clientY])},a=n=>{if(!r.current.pointers.has(n.pointerId))return;let i=r.current.pointers.get(n.pointerId),a=[n.clientX-i[0],n.clientY-i[1]];if(r.current.pointers.set(n.pointerId,[n.clientX,n.clientY]),r.current.pointers.size>1){let n=r.current.pointers.values(),i=n.next().value,a=n.next().value;t===null&&(t=[(i[0]+a[0])/(2*window.innerWidth),(i[1]+a[1])/(2*window.innerHeight)]);let o=Math.hypot(i[0]-a[0],i[1]-a[1]);if(e===null){e=o;return}let l=(o-e)/window.innerWidth;e=o,s(l*2,...t),c();return}let l=a[0]/window.innerWidth,u=a[1]/window.innerHeight;if(n.shiftKey&&(l+=u,u=0),(n.ctrlKey||n.metaKey)&&(u+=l,l=0),n.altKey){let e=(l+u)/2;l=e,u=e}o(l,u,!1),c()},l=n=>{i(),r.current.pointers.clear(),e=null,t=null};return document.addEventListener(`pointerdown`,n),document.addEventListener(`pointermove`,a),document.addEventListener(`pointerup`,l),()=>{document.removeEventListener(`pointerdown`,n),document.removeEventListener(`pointermove`,a),document.removeEventListener(`pointerup`,l)}},[o,s,c]),(0,_.useEffect)(()=>{let e=e=>{e.target.id===`webgl2`&&(s(-e.deltaY/window.innerWidth,e.clientX/window.innerWidth,e.clientY/window.innerHeight),c(),i())};return document.addEventListener(`wheel`,e),()=>{document.removeEventListener(`wheel`,e)}},[c,s])};function bt({runtime:e,updateParams:t}){return yt(e,t),null}var xt=(e,t)=>t.map(t=>e[t]),St=e=>Object.entries(e).map(([e,t])=>`${e}|${t}`).join(`#`),Ct=(e,t)=>{(0,_.useEffect)(()=>{t(e=>({...e,perturb:e.usePerturbation===null?Math.log10(e.scale.real().toNumber())<-4.5:e.usePerturbation}))},[e.scale,e.usePerturbation,t]),(0,_.useEffect)(()=>{t(e=>(ft(e),e))},[e.dimensions,t]),(0,_.useEffect)(()=>{t(e=>(ut(e),dt(e),e))},[...xt(e,Ve),t]),(0,_.useEffect)(()=>{if(!e.texture)return;let n=new Image;n.crossOrigin=`anonymous`,n.onload=()=>{t(e=>{let t=e.gl;return t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,e.env.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,n.width,n.height,0,t.RGBA,t.UNSIGNED_BYTE,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),{...e,textureElement:n}})},n.src=e.texture},[e.texture]),(0,_.useEffect)(()=>{t(e=>(mt(e),e))},[...xt(e,Object.keys(He)),St(e.args),e.textureElement,t]),(0,_.useEffect)(()=>{if(!e.gl.canvas)return;let t=new ResizeObserver(()=>{vt(e)});return t.observe(e.gl.canvas,{box:`content-box`}),()=>t.disconnect()},[e,e.gl.canvas]);let n=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(e.animate){e.timeref=performance.now();let t=()=>{vt(e),n.current=requestAnimationFrame(t)};return t(),()=>{cancelAnimationFrame(n.current),n.current=null}}},[e.animate]),(0,_.useEffect)(()=>{t(e=>(vt(e),e))},xt(e,ze))};function wt({runtime:e,setRuntime:t}){return Ct(e,t),null}var Tt=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),N=o(((e,t)=>{t.exports=Tt()}))();function Et({runtime:e,setRuntime:t,updateParams:n}){window.rt=e;let r=(0,_.useCallback)(e=>n=>{n.type=e,t(e=>({...e,error:n}))},[t]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{error:e.error?.render,onError:r(`render`),children:(0,N.jsx)(wt,{runtime:e,setRuntime:t})}),(0,N.jsx)(v,{error:e.error?.interact,onError:r(`interact`),children:(0,N.jsx)(bt,{runtime:e,updateParams:n})})]})}var Dt=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z`})}),Ot=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z`})}),kt=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z`})}),At=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82`})}),jt=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z`})}),Mt=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M8 5.14v14l11-7z`})}),Nt=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M6 18V6h12v12z`})}),Pt=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0`})}),Ft=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z`})}),It=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z`})}),Lt=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709m.497-1.017q3.09-.202 5.295-2.459T20 12t-2.185-5.505T12.5 4.017z`})}),Rt=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`m21.11 22.53l-3.508-3.507q-1.161.935-2.578 1.456T12 21q-1.868 0-3.51-.709t-2.857-1.923t-1.924-2.858T3 12q0-1.608.521-3.024q.521-1.417 1.456-2.578l-3.09-3.09l.713-.714l19.223 19.223zM12 20q1.394 0 2.628-.454t2.249-1.248L12 13.421zm7.625-3.192l-.744-.745q.544-.894.831-1.913T20 12q0-3.325-2.337-5.663T12 4v5.183L7.192 4.375q1.05-.656 2.262-1.016Q10.667 3 12 3q1.868 0 3.51.709t2.858 1.924T20.29 8.49T21 12q0 1.333-.36 2.546t-1.015 2.262`})}),zt=(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{fill:`currentColor`,d:`M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2M5.5 16.5l3.5-4.5l2.5 3.01L14.5 12l4.5 6H5.5z`})}),Bt=e=>[[Math.cos(e),-Math.sin(e)],[Math.sin(e),Math.cos(e)]],Vt=(e,t)=>t===0||t===e?1:Vt(e-1,t-1)+Vt(e-1,t),Ht=(e,t,n,r=0)=>{let i=``;for(let a=r;a<=n;a++){let r=Vt(n,a);if(r===0)continue;let o=(e,t)=>t===0?``:t===1?e:`${e}^${t}`,s=o(e,n-a),c=o(t,a),l=s&&c?`${s} * ${c}`:s||c,u=r===1?l:`${r} * ${l}`;i=i?`${u} + ${i}`:u}return i},P=(e,t,n={})=>({name:e,params:{f:`z^${t} + c`,f_perturb:`${Ht(`Z`,`dz`,t,1)} + dc`,showGrid:!1,showNormGrid:!1,showArgGrid:!1,normShade:!1,argShade:!1,showZeroes:!1,showPoles:!1,onlyBailed:!0,...n}}),Ut=(e,t,n,r={})=>({name:e,params:{...P(e,t).params,derivative:85,velocity:70,varying:`z`,args:{z:w(),c:n},...r}}),F=(e,t,n={})=>({name:e,params:{varying:`z`,f:`z - ${n?.args?.a?`a * `:``}(${t})# + c`,iterations:75,useDerivative:!1,useCycle:!1,useRoots:!0,convergent:!0,divergent:!1,showGrid:!1,showNormGrid:!1,showArgGrid:!1,normShade:!1,argShade:!1,showZeroes:!1,showPoles:!1,onlyBailed:!0,...n}}),Wt=(e,t,n={})=>({name:e,params:{args:{z:w(1),c:w(-.5)},f:`z - ${n?.args?.a?`a * `:``}(${t})# + c`,useDerivative:!1,convergent:!0,divergent:!1,showGrid:!1,showNormGrid:!1,showArgGrid:!1,normShade:!1,argShade:!1,showZeroes:!1,showPoles:!1,onlyBailed:!0,...n}}),Gt=(e,t,n={})=>({name:e,params:{...P(e,2).params,f:t,f_perturb:null,useDerivative:!1,...n}}),Kt=(e,t,n,r={})=>{let i=`(${n})'`,a=`(${n})''`,o={halley:`z - 2 * (${n}) * ${i} / (2 * (${i})^2 - (${n}) * ${a})`,schroder:`z - (${n}) * ${i} / ((${i})^2 - (${n}) * ${a})`,secant:`z - (${n}) * (z - z_1) / ((${n}) - (${n.replace(/\bz\b/g,`z_1`)}))`};return{name:t,params:{...F(t,n,r).params,f:`${o[e]} + c`}}},qt=(e,t,n,r={})=>{let i=`floor(${t} * frac(z))`,a=e=>`(1 - |${e}(${i}) - 1|)`,o={both:`${a(`re`)} * ${a(`im`)}`,either:`(${a(`re`)} + ${a(`im`)} - ${a(`re`)} * ${a(`im`)})`,neither:`(1 - ${a(`re`)}) * (1 - ${a(`im`)})`,xor2:`re(${i}) * im(${i})`};return{name:e,params:{args:{z:w(.5,.5),c:w(t)},scale:w(.55),varying:`z`,f:`c * frac(z) - ${i} + 1000 * (${o[n]} + |re(floor(z))| + |im(floor(z))|)`,shading:`bail_time`,palette:`turbo`,offset:0,velocity:200,iterations:100,useDerivative:!1,useCycle:!1,onlyBailed:!0,...r}}},I=(e,t,n={})=>({name:e,params:{f:t,shading:`domain_coloring`,offset:0,iterations:1,varying:`z`,palette:`rainbow`,divergent:!1,useDerivative:!1,useCycle:!1,usePerturbation:!1,onlyBailed:!1,showGrid:!0,gridScale:100,gridLog:!1,gridWidth:1,showNormGrid:!0,normShade:!0,normShadeValue:70,normGridScale:100,normGridLog:!0,normGridWidth:1,showArgGrid:!0,argShade:!0,argShadeValue:40,argGridScale:200,argGridLog:!1,argGridWidth:1,scaled:!1,showZeroes:!0,showPoles:!0,scale:w(2.5),...n}}),Jt=e=>e.map(({name:e,params:t,subforms:n})=>({name:e,params:{...Re,f_perturb:null,...t,f_prime_z:t.f_prime_z||xe(t.f,[`z`,`z_1`]).toString(),f_prime_c:t.f_prime_c||xe(t.f,[`z`,`z_1`],[`c`]).toString()},subforms:n?Jt(n):[]})),Yt=Jt([{...P(`Mandelbrot`,2,{args:{z:w(),c:w(-.5)}}),subforms:[P(`Minibrot`,2,{args:{z:w(),c:w(-1.71121,2e-5)},scale:w(85e-5),shading:`distance_scaled`,velocity:70,saturation:0,lightness:250}),P(`Bibrot`,3),P(`Tribrot`,4),P(`Quadribrot`,5),P(`Quintibrot`,6),P(`Hexibrot`,7),P(`Heptibrot`,8),P(`Octibrot`,9),P(`Nonibrot`,10),P(`Decabrot`,11),P(`Invbibrot`,-2,{args:{z:w(10),c:w()},divergent:!1,shading:`lyapunov_exponent`,iterations:250,useDerivative:!1,useCycle:!1,offset:25,onlyBailed:!1,scale:w(3)}),P(`Invtribrot`,-3,{args:{z:w(10),c:w()},divergent:!1,shading:`lyapunov_exponent`,iterations:250,useDerivative:!1,useCycle:!1,offset:140,onlyBailed:!1,palette:`red_green`,scale:w(3)}),{name:`Mandelbar`,params:{...P(`Mandelbar`,2).params,f:`~z^2 + c`,f_perturb:`~(2 * Z * dz + dz^2) + dc`}},{name:`Tearbrot`,params:{args:{z:w(),c:w(0,1)},scale:w(4),transform:Bt(-Math.PI/2),f:`(z + 1)^2 / c`,bailed:!0,derivative:80,f_perturb:`(C * dz^2 + 2 * C * dz * Z + 2 * C * dz - dc * Z^2 - 2 * dc * Z - dc) / (C * (C + dc))`}},{name:`Moonbrot`,params:{scale:w(6),f:`c / (z + 1)^2`,derivative:120}},{name:`Mothbrot`,params:{scale:w(1.5),f:`z^2 * (|re(z)| + |im(z)|i)^3 + c`,derivative:120}},{name:`Burningship`,params:{args:{z:w(),c:w(.5,.5)},transform:Bt(Math.PI),derivative:100,scale:w(1.5),f:`(|re(z)| + |im(z)|i)^2 + c`,f_perturb:`(2 * re(dz) * re(Z) + re(dz) * re(dz) - 2 * im(Z) * im(dz) - im(dz) * im(dz) + 2 * (diffabs((re(Z) * im(Z)), (re(Z) * im(dz) + re(dz) * im(Z) + re(dz) * im(dz)))) * i) + dc`},subforms:[{name:`Miniship`,params:{args:{z:w(),c:w(1.85982,.004584)},transform:Bt(Math.PI),derivative:100,shading:`distance_scaled`,scale:w(.008069),velocity:62,lightness:300,saturation:0,f:`(|re(z)| + |im(z)|i)^2 + c`,f_perturb:`(2 * re(dz) * re(Z) + re(dz) * re(dz) - 2 * im(Z) * im(dz) - im(dz) * im(dz) + 2i * diffabs((re(Z) * im(Z)), (re(Z) * im(dz) + re(dz) * im(Z) + re(dz) * im(dz)))) + dc`}},{name:`Bird of Prey`,params:{transform:Bt(-3*Math.PI/4),derivative:100,scale:w(1.5),f:`(|re(z)| + |im(z)|i)^3 + c`,f_perturb:`(re(Z)^2 - 3 * im(Z)^2) * diffabs(re(Z), re(dz)) + (2 * (re(Z) * re(dz)) + re(dz)^2 - 6 * (im(Z) * im(dz)) - 3 * im(dz)^2) * abs(re(Z) + re(dz)) + i * ((3 * re(Z)^2 - im(Z)^2) * diffabs(im(Z), im(dz)) + (6 * (re(Z) * re(dz)) + 3 * re(dz)^2 - 2 * (im(Z) * im(dz)) - im(dz)^2) * abs(im(Z) + im(dz))) + dc`}},{name:`Buffalo`,params:{transform:Bt(Math.PI),f:`(|re(z)| + |im(z)|i)^2 - (|re(z)| + |im(z)|i) + c`}},{name:`Bird`,params:{f:`(re(z) - |im(z)|i)^2 + c`}}]},{name:`Magnet`,params:{args:{z:w(),c:w(1)},scale:w(3),f:`((z^2 + c - 1) / (2z + c - 2))^2`,useDerivative:!1,convergent:!0}},{name:`Tetrate`,params:{args:{z:w(.5),c:w(1)},scale:w(3),f:`c^z`,useDerivative:!1}},{name:`Celtic`,params:{args:{z:w(),c:w(-.7)},scale:w(2),f:`|re(z^2)| + i * im(z^2) + c`,useDerivative:!1}},Gt(`Heart`,`(|re(z)| + im(z)i)^2 + c`,{args:{z:w(),c:w(-.6)},scale:w(1.6)}),Gt(`Perpendicular Burning Ship`,`(|re(z)| - im(z)i)^2 + c`,{args:{z:w(),c:w(-.1)},scale:w(2.2)}),Gt(`Fractional Multibrot`,`z^(5/2) + c`,{args:{z:w(),c:w()},scale:w(1.6)}),Gt(`Lambda`,`c * z * (1 - z)`,{args:{z:w(.5),c:w(2)},scale:w(3.5)}),Gt(`Manowar`,`z^2 + z_1 + c`,{args:{z:w(),c:w(-.2)},scale:w(.9)}),Gt(`Phoenix Mandelbrot`,`z^2 + re(c) + im(c) * z_1`,{args:{z:w(),c:w()},scale:w(2)}),Gt(`Magnet II`,`((z^3 + 3(c - 1)z + (c - 1)(c - 2)) / (3z^2 + 3(c - 2)z + (c - 1)(c - 2) + 1))^2`,{args:{z:w(),c:w(2)},scale:w(2.2),convergent:!0}),Gt(`Exponential`,`c * exp(z)`,{args:{z:w(),c:w(.3)},scale:w(2.5)}),Gt(`Sine`,`c * sin(z)`,{args:{z:w(Math.PI/2),c:w()},scale:w(3)}),Gt(`Cosine`,`c * cos(z)`,{args:{z:w(),c:w()},scale:w(3)})]},{...Ut(`Julia 0 + .8i`,2,w(0,.8)),subforms:[Ut(`Julia -.7 + .27015`,2,w(-.7,.27015)),Ut(`Julia .355 + .355i`,2,w(.355,.355)),Ut(`Bijulia -.371594 + .662412i`,3,w(-.371594,.662412)),Ut(`Trijulia -.29053 - .450488i`,4,w(-.29053,-.450488),{derivative:175}),Ut(`2iJulia`,`(2i)`,w(),{useDerivative:!1,bailout:4.1,iterations:100}),{name:`Collatz`,params:{args:{z:w(),c:w()},scale:w(2),f:`z/2+(z/2+1/4)(1-exp(z*i*PI))+ c`,varying:`z`,shading:`lyapunov_exponent`,onlyBailed:!1,useDerivative:!1,divergent:!1}},{name:`Phoenix`,params:{args:{z:w(),c:w(.5667)},scale:w(1.5),transform:Bt(-Math.PI/2),varying:`z`,f:`z^2 + c - 0.5 * z_1`,useDerivative:!1,f_perturb:`2 * Z * dz + dz^2 + dc - 0.5 * dz_1`}},{name:`Frothy`,params:{args:{z:w(.5),c:w(2.03,-.01)},varying:`z`,scale:w(3),f:`z^2 - c*~z`,f_perturb:`dz^2 + 2 * dz * Z - C * ~dz - dc * ~Z - dc * ~dz`}},{name:`Floral`,params:{args:{z:w(-.24,.13),c:w(-.348,-.58)},scale:w(3),varying:`z`,f:`sin(z^-2) + c`,iterations:300,palette:`yellow_green`,lightness:180,velocity:40,bailout:3,useDerivative:!1}},{name:`Whirlpool`,params:{varying:`z`,args:{z:w(),c:w(2,0)},scale:w(3),f:`(c/z + (im(z)*z - re(z))/c)^2`}},{name:`Smokey`,params:{varying:`z`,args:{z:w(53.95,211.7435),c:w(-1.247,-.9564)},scale:w(395),iterations:50,divergent:!1,onlyBailed:!1,palette:`viridis`,cycle:!1,derivative:!1,offset:0,shading:`lyapunov_exponent`,f:`faddeeva(z) + c`}},Ut(`Dendrite`,2,w(0,1)),Ut(`Douady Rabbit`,2,w(-.123,.745)),Ut(`Siegel Disk`,2,w(-.391,-.587)),Ut(`Airplane`,2,w(-1.755,0),{scale:w(2)}),Ut(`San Marco`,2,w(-.75,0),{scale:w(1.8)}),Ut(`Cauliflower`,2,w(.25,0),{scale:w(1.8)}),Ut(`Dragon`,2,w(-.8,.156)),Ut(`Spiral`,2,w(-.7269,.1889)),Gt(`Sine Julia`,`c * sin(z)`,{args:{z:w(),c:w(1,1)},varying:`z`,scale:w(5)}),Gt(`Heart Julia`,`(|re(z)| + im(z)i)^2 + c`,{args:{z:w(),c:w(-.8,.1)},varying:`z`,scale:w(1.5)}),Gt(`Celtic Julia`,`|re(z^2)| + i * im(z^2) + c`,{args:{z:w(),c:w(-.7,.2)},varying:`z`,scale:w(2)}),Gt(`Burning Ship Julia`,`(|re(z)| + |im(z)|i)^2 + c`,{args:{z:w(),c:w(-1.755,-.04)},varying:`z`,scale:w(2)}),Gt(`Hénon basin`,`1 - re(c) * re(z)^2 + im(z) + i * im(c) * re(z)`,{args:{z:w(),c:w(1.4,.3)},varying:`z`,scale:w(3),iterations:100,shading:`bail_time`,palette:`turbo`,offset:0,velocity:200})]},{...F(`Newton`,`(z - r)(z - s)(z - t)`,{args:{r:w(1),s:w(-.5,-.86603),t:w(-.5,.86603),a:w(1),c:w(),z:w()}}),subforms:[F(`Newton`,`z^3 + 1`),F(`Newton`,`z^4 - 1`),F(`Newton`,`(z^4 - b) / (z - d) - e`,{args:{b:w(-1),d:w(3),e:w(1),a:w(1),z:w(),c:w()}}),F(`Newton`,`z^3 - 2z + 2`),F(`Newton`,`z^8 + 15z^4 - 16`),F(`Newton`,`z^5 - 3i * z^3 - (5 + 2i) * z^2 + 3z + 1`),F(`Newton`,`z^6 + z^3 - 1`),F(`Newton`,`z^^3 - 1`),F(`Newton`,`sin(z)`,{args:{z:w(Math.PI/2),c:w()}}),F(`Newton`,`cosh(z) - 1`,{args:{z:w(-3.14,-3.14),c:w()}}),F(`Newton`,`z^4 * sin(z) - 1`),F(`Newton generalized`,`z^3 - 1`,{divergent:!1,convergent:!1,offset:100,velocity:150,shading:`lyapunov_exponent`,onlyBailed:!1,useRoots:!1,args:{z:w(),c:w(),a:w(-.5)}}),F(`Newton generalized`,`z^4 - 1`,{divergent:!1,convergent:!1,velocity:150,shading:`lyapunov_exponent`,onlyBailed:!1,useRoots:!1,args:{z:w(),c:w(),a:w(.03357,-.4829)},scale:w(1.5),palette:`red_green`,offset:220}),F(`Newton generalized`,`z^2 - 1`,{divergent:!1,convergent:!1,offset:100,velocity:150,shading:`lyapunov_exponent`,onlyBailed:!1,iterations:100,useRoots:!1,args:{z:w(),c:w(),a:w(1,1)}}),F(`Newton generalized`,`z^(4 + 3i) - 1`,{args:{z:w(1,.25),c:w(),a:w(1.9)},scale:w(.05)}),F(`Newton`,`z^5 - 1`),F(`Newton`,`z^7 - 1`),F(`Newton`,`z^3 - z`,{scale:w(2.5)}),F(`Newton`,`z^z - 1`,{scale:w(3)}),F(`Newton`,`besselj(z, 0)`,{args:{z:w(),c:w()},scale:w(10)}),Kt(`halley`,`Halley`,`z^3 - 1`,{scale:w(2)}),Kt(`halley`,`Halley`,`z^5 - 1`,{scale:w(2)}),Kt(`halley`,`Halley`,`sin(z)`,{args:{z:w(Math.PI/2),c:w()},scale:w(3)}),Kt(`schroder`,`Schroder`,`z^3 - 1`),Kt(`schroder`,`Schroder`,`z^4 - 1`),Kt(`secant`,`Secant`,`z^3 - 1`),Kt(`secant`,`Secant`,`z^5 - 1`)]},{...Wt(`Nova`,`(z - r)(z - s)(z - t)`,{args:{r:w(1),s:w(-.5,-.86603),t:w(-.5,.86603),a:w(1),z:w(1),c:w(-.5)}}),subforms:[Wt(`Nova`,`z^3 - 1`,{shading:`lyapunov_exponent`,convergent:!1,divergent:!1,onlyBailed:!1,useCycle:!1,iterations:100}),Wt(`Nova`,`z^4 - 1`),Wt(`Nova`,`(z - 1)(z - 4 + i * sqrt(2))(z + sqrt(3) - i * sqrt(3))`,{args:{z:w(1),c:w()},scale:w(2)}),Wt(`Nova`,`z^3 - 2z + 2`),Wt(`Nova`,`z^8 + 15z^4 - 16`),Wt(`Nova`,`z^6 + z^3 - 1`),Wt(`Nova`,`z^4 * sin(z) - 1`),Wt(`Nova`,`z^5 - 1`),Wt(`Nova`,`z^3 - z`)]},{...qt(`Sierpinski Triangle`,2,`xor2`),subforms:[qt(`Sierpinski Carpet`,3,`both`),qt(`Cantor Dust`,3,`either`),qt(`Vicsek`,3,`neither`)]},{...I(`Domain coloring Polynomial`,`z + c`),subforms:[I(`z²`,`z^2 + c`),I(``,`((z - 1)(z + 1)^2) / ((z + i)(z - i)^2) + c`),I(``,`(z^3 - 2 * z + i) / (z^2 + 1) + c`),I(``,`z / 2 + 1 / (2 * z) + c`)]},{...I(`Domain coloring Trigonometry`,`sin(z) + c`,{scale:w(3)}),subforms:[I(`Cos`,`cos(z) + c`),I(`Tan`,`tan(z) + c`),I(`Acos`,`acos(z) + c`),I(`Asin`,`asin(z) + c`),I(`Atan`,`atan(z) + c`),I(`Cosh`,`cosh(z) + c`),I(`Sinh`,`sinh(z) + c`),I(`Tanh`,`tanh(z) + c`),I(`Acosh`,`acosh(z) + c`),I(`Asinh`,`asinh(z) + c`),I(`Atanh`,`atanh(z) + c`),I(`Cn`,`cn(z, .5) + c`),I(`Sn`,`sn(z, .5) + c`),I(`Dn`,`dn(z, .5) + c`),I(`Cn`,`cn(z, .5) / cos(z) + c`),I(`Complete Elliptic Integral of First Kind`,`ellk(z) + c`),I(`Incomplet Elliptic Integral of First Kind`,`ellfi(z, .5) + c`),I(`Nome`,`nome(z) + c`)]},{...I(`Domain coloring Transcendental`,`exp(z) + c`),subforms:[I(`Logarithm`,`log(z) + c`),I(`Exponential Inverse`,`exp(z^-1) + c`,{scale:w(1.5)}),I(`Exponential Square Inverse`,`exp(-z^2) + c`,{scale:w(1.5),showPolya:!0}),I(`Square Root`,`sqrt(z) + c`),I(`Cubic Root`,`z^(1/3) + c`),I(`Complex Exponentiation`,`z^c`,{args:{z:w(),c:w(2.5)}}),I(`²z`,`z^^2 + c`),I(`³z`,`z^^3 + c`),I(`⁴z`,`z^^4 + c`),I(`Exponential Integral`,`expint(z) + c`),I(`Logarithm Integral`,`lint(z) + c`),I(`Error Function`,`erf(z) + c`),I(`Faddeeva`,`faddeeva(z) + c`),I(`Error Function Complementary`,`erfc(z) + c`),I(`Error Function Scaled Complementary`,`erfcx(z) + c`),I(`Error Function Imaginary`,`erfi(z) + c`),I(`Fresnel Cosine`,`fresnelc(z) + c`),I(`Fresnel Sine`,`fresnels(z) + c`),I(`Fresnel Auxiliary F`,`fresnelf(z) + c`),I(`Fresnel Auxiliary G`,`fresnelg(z) + c`),I(`Dawson`,`dawson(z) + c`),I(`Lambert W`,`lambertw(z, k) + c`,{args:{z:w(0),k:w(0),c:w(0)}}),I(`Lambert Omega`,`omega(z) + c`),I(`Beta`,`beta(z, c)`,{args:{z:w(),c:w(2)}}),I(`Beta First derivative`,`beta'(z, c)`,{args:{z:w(),c:w(2)}}),I(`Gamma`,`gamma(z) + c`),I(`Gamma First derivative`,`gamma'(z) + c`),I(`Eta`,`eta(z) + c`),I(`Zeta`,`zeta(z) + c`),I(`Zeta First derivative`,`zeta'(z) + c`),I(`Psi (Digamma)`,`psi(z) + c`),I(`Polygamma`,`polygamma(z, w) + c`,{args:{z:w(1),w:w(1),c:w()}}),I(`Tania`,`tania(z) + c`),I(`Atania`,`atania(z) + c`),I(`Doya`,`doya(z) + c`),I(`Filog`,`filog(z) + c`),I(`Tet`,`tet(z) + c`),I(`Ate`,`ate(z) + c`),I(`Tetra`,`tetra(z, c)`,{args:{z:w(0),c:w(2,2)}})]},{...I(`Domain coloring Theta & Modular`,`theta3(z, c)`,{args:{z:w(),c:w(.3,.2)},scale:w(3)}),subforms:[I(`Theta 1`,`theta1(z, c)`,{args:{z:w(),c:w(.3,.2)},scale:w(3)}),I(`Theta 2`,`theta2(z, c)`,{args:{z:w(),c:w(.3,.2)},scale:w(3)}),I(`Theta 3`,`theta3(z, c)`,{args:{z:w(),c:w(.3,.2)},scale:w(3)}),I(`Theta 4`,`theta4(z, c)`,{args:{z:w(),c:w(.3,.2)},scale:w(3)}),I(`Theta 3 (nome)`,`theta3(0, z) + c`,{scale:w(1.1),c:w()}),I(`Euler Function`,`eulerq(z) + c`,{scale:w(1.1),c:w()}),I(`q-Pochhammer`,`qpoch(c, z)`,{args:{z:w(),c:w(.5,.2)},scale:w(1.1)}),I(`Dedekind Eta`,`dedekind(z) + c`,{args:{z:w(0,1),c:w()},scale:w(1.5)}),I(`Eisenstein E4`,`eisenstein4(z) + c`,{args:{z:w(0,1),c:w()},scale:w(1.5)}),I(`Eisenstein E6`,`eisenstein6(z) + c`,{args:{z:w(0,1),c:w()},scale:w(1.5)}),I(`Klein j-invariant`,`kleinj(z) + c`,{args:{z:w(0,1),c:w()},scale:w(1.5)}),I(`Modular Lambda`,`modlambda(z) + c`,{args:{z:w(0,1),c:w()},scale:w(1.5)}),I(`Weierstrass on a lattice (1, c)`,`wp(z, c)`,{args:{z:w(),c:w(.2,1)},scale:w(1.5)}),I(`Complete Elliptic Integral of Second Kind`,`ellke(z) + c`)]},{...I(`Domain coloring Bessel & Hypergeometric`,`besselj(z, c)`,{args:{z:w(),c:w(1)},scale:w(10)}),subforms:[I(`Bessel J`,`besselj(z, c)`,{args:{z:w(),c:w(1)},scale:w(10)}),I(`Bessel Y`,`bessely(z, c)`,{args:{z:w(),c:w(1)},scale:w(10)}),I(`Hankel H1`,`besselh1(z, c)`,{args:{z:w(),c:w(1)},scale:w(10)}),I(`Hankel H2`,`besselh2(z, c)`,{args:{z:w(),c:w(1)},scale:w(10)}),I(`Modified Bessel I`,`besseli(z, c)`,{args:{z:w(),c:w(1)},scale:w(10)}),I(`Modified Bessel K`,`besselk(z, c)`,{args:{z:w(),c:w(1)},scale:w(10)}),I(`Airy Ai`,`airyai(z) + c`,{scale:w(8)}),I(`Airy Bi`,`airybi(z) + c`,{scale:w(8)}),I(`Hypergeometric 2F1`,`hyp2f1(a, b, c, z)`,{args:{z:w(),a:w(.5),b:w(.5),c:w(1)},scale:w(3)}),I(`Kummer 1F1`,`hyp1f1(a, c, z)`,{args:{z:w(),a:w(1),c:w(2)},scale:w(8)}),I(`Hypergeometric 0F1`,`hyp0f1(c, z)`,{args:{z:w(),c:w(1.5)},scale:w(8)}),I(`Legendre P`,`legendre(z, c)`,{args:{z:w(),c:w(2.5)},scale:w(3)}),I(`Chebyshev T`,`chebyshevt(z, c)`,{args:{z:w(),c:w(3.5)},scale:w(3)}),I(`Chebyshev U`,`chebyshevu(z, c)`,{args:{z:w(),c:w(3.5)},scale:w(3)}),I(`Laguerre`,`laguerre(z, c)`,{args:{z:w(),c:w(2.5)},scale:w(8)}),I(`Hermite`,`hermite(z, c)`,{args:{z:w(),c:w(2.5)},scale:w(3)}),I(`Sine Integral`,`sinint(z) + c`),I(`Cosine Integral`,`cosint(z) + c`),I(`Hyperbolic Sine Integral`,`sinhint(z) + c`),I(`Hyperbolic Cosine Integral`,`coshint(z) + c`),I(`Lower Incomplete Gamma`,`gammal(c, z)`,{args:{z:w(),c:w(2.5)},scale:w(6)}),I(`Upper Incomplete Gamma`,`gammau(c, z)`,{args:{z:w(),c:w(2.5)},scale:w(6)}),I(`Log Gamma`,`lgamma(z) + c`,{scale:w(6)}),I(`Reciprocal Gamma`,`rgamma(z) + c`,{scale:w(6)}),I(`Trigamma`,`psi'(z) + c`,{scale:w(6)}),I(`Riemann-Siegel Z`,`riemannz(z) + c`,{args:{z:w(25,0),c:w()},scale:w(25)}),I(`Dirichlet Beta`,`dirichletbeta(z) + c`,{scale:w(8)}),I(`Dirichlet L (mod 3)`,`dirichletl3(z) + c`,{scale:w(8)})]},{...I(`Domain coloring Misc`,`fibonacci(z) + c`),subforms:[I(`Arg`,`arg(z) + c`),I(`Norm`,`norm(z) + c`),I(``,`z^-1 + z^-2 + z^-3 + z^-4 + z^-5 + c`),I(``,`z * sin(z^-1) + c`),I(``,`sin(z^-2) + c`,{scale:w(1.5)}),I(``,`(z^-18 - z^-1) / (z^-1 - 1) + c`),I(``,`sqrt(1 - z^-2 + z^3) + c`),I(``,`((z - 2 - i)^2 * (z^2 - 1)) / (z^2 + 2 + i) + c`),I(``,`z^(2/3 + i) + c`),I(``,`(exp(z) - 1) / z^2 + c`),I(``,`cos(z) / z^2 + c`),I(``,`sinh(z) / z^4 + c`),I(``,`(1 - cos(z)) / z^2 + c`),I(``,`sin(z) / z + c`),I(``,`z / (exp(z) - 1) + c`),I(``,`(z - 1) cos(1 / z) + c`),I(``,`z / i - i / z + c`),I(``,`z^(4z^(3z^(2z^z))) + c`),I(`Weierstrass Elliptic`,`weierstrass(z) + c`),I(`Weierstrass`,`weierstrassr(z, c)`,{args:{z:w(),c:w(.9,1.12)},scale:w(.35)}),I(`Wilmshurst`,`im(exp(-i*PI / 4) * z^c) + i * im(exp(i * PI / 4) * (z - 1)^c)`,{args:{z:w(),c:w(4)}}),I(``,`sum(n, 1, 20, z^n / (c - z^n))`,{args:{z:w(),c:w(1)}}),I(``,`product(n, 1, 20, (c - z^n))`,{args:{z:w(),c:w(1)}})]}]);function Xt({allowNull:e,name:t,label:n,value:r,onChange:i}){let a=(0,_.useCallback)(t=>{let{name:n,checked:a}=t.target,o;o=e?r===!1?!0:r?null:!1:a,i(n,o)},[e,i,r]),o=(0,_.useRef)(null);return(0,_.useLayoutEffect)(()=>{e&&o.current&&(r===null?o.current.indeterminate=!0:o.current.indeterminate=!1)},[r,e]),(0,N.jsxs)(`label`,{className:`boolean-label`,children:[n,(0,N.jsx)(`input`,{type:`checkbox`,ref:o,name:t,checked:r||!1,onChange:a})]})}function Zt({name:e,label:t,min:n=0,max:r=1/0,value:i,toggler:a,maxWidth:o=5,togglerName:s,decimal:c,onChange:l,...u}){let[d,f]=(0,_.useState)(`${i}`),p=(0,_.useCallback)(e=>{if(c)try{return C(e)}catch{try{return Se(e).real()}catch{return NaN}}return parseFloat(e)},[c]);(0,_.useEffect)(()=>{try{(c?!i.eq(p(d)):i!==p(d))&&(f(`${i}`),h(!0))}catch(e){console.warn(e),h(!1)}},[c,i]);let[m,h]=(0,_.useState)(!0),g=(0,_.useCallback)(t=>{if(f(t),!t){h(!1);return}let i=p(t);if(isNaN(i)||!c&&(i<n||i>r)){h(!1);return}h(!0),l(e,i)},[c,r,n,e,l]);return(0,N.jsxs)(`label`,{className:`number ${m?`valid`:`invalid`}`,children:[t&&(0,N.jsx)(`span`,{className:`number-label`,children:t}),s&&(0,N.jsx)(`input`,{type:`checkbox`,name:s,checked:a,onChange:e=>{l(e.target.name,e.target.checked)}}),(!s||a)&&(0,N.jsx)(`div`,{className:`number-control`,children:(0,N.jsx)(`input`,{type:`text`,name:e,value:d,style:{width:`${d.length+.3}ch`,maxWidth:`${o}ch`},onChange:e=>{let t=e.target.value;g(t)},...u})})]})}function Qt({name:e,label:t,min:n=0,max:r=1/0,step:i=1,initial:a=w(0,0),value:o,toggler:s,togglerName:c,arg:l,varying:u=null,onChange:d,...f}){let p=e=>{d(e.target.name,e.target.checked)},m=(e,t)=>{l?d(`args`,{...o,[e]:t}):d(e,t)},h=()=>{u.includes(e)?d(`varying`,u.replace(e,``)):d(`varying`,u+e)},g=l?o[e]:o,_=(t,n)=>{m(e,w(n,g.im))},v=(t,n)=>{m(e,w(g.re,n))};return(0,N.jsxs)(`label`,{className:`complex`,children:[t&&(0,N.jsx)(`span`,{className:`complex-label`,children:t}),c&&(0,N.jsx)(`input`,{type:`checkbox`,name:c,checked:s,onChange:p}),(!c||s)&&(0,N.jsxs)(`div`,{className:`complex-control`,children:[(0,N.jsx)(Zt,{name:`${e}-re`,value:g.re,onChange:_,decimal:!0,...f}),(0,N.jsx)(`span`,{className:`complex-inner-label`,children:`+`}),(0,N.jsx)(Zt,{name:`${e}-im`,value:g.im,onChange:v,decimal:!0,...f}),(0,N.jsx)(`span`,{className:`complex-inner-label`,children:`i`}),u===null?null:(0,N.jsx)(`button`,{type:`button`,onClick:h,className:`button`,children:u.includes(e)?It:Ft}),(0,N.jsx)(`button`,{type:`button`,onClick:()=>m(e,a),className:`button`,children:Ot})]})]})}function $t({name:e,label:t,togglerName:n,toggler:r,value:i,maxWidth:a=50,onChange:o,...s}){let c=(0,_.useCallback)(()=>`${i}`,[i]),[l,u]=(0,_.useState)(c);(0,_.useEffect)(()=>{u(c()),f(!0)},[c,i]);let[d,f]=(0,_.useState)(!0),p=(0,_.useCallback)(t=>{u(t);try{let e=[`z`,`c`,`Z`,`dz`,`dc`,`z_prime`,`z_1`,`z_1_prime`,`dz_1`];Function(...e,`return ${be(t).toComplex()}`)(...e.map(e=>w(Math.random(),Math.random())))}catch(n){if(n instanceof SyntaxError){console.warn(`Syntax error in formula`,n),f(!1);return}let r=n.toString();if(r.includes(`is not a function`)){let i=r.match(/(.+) is not a function/)[1].split(`.`).slice(-1)[0].replace(`_prime`,`'`);if(!Object.keys(ce).includes(i)){console.warn(`Unknown function in formula`,n),f(!1),o(e,t);return}}if(r.includes(`undeclared identifier`)||r.includes(`is not defined`)){let i=r.match(/(.+) is not defined/)[1].split(`: `).slice(-1)[0];if(i.length>1&&!te.includes(i)){console.warn(`Undeclared identifier in formula`,n),f(!1),o(e,t);return}}}f(!0),o(e,t)},[o,e]);return(0,N.jsxs)(`label`,{className:`complex-formula ${d?`valid`:`invalid`}`,children:[t&&(0,N.jsx)(`span`,{className:`complex-formula-label`,children:t}),n&&(0,N.jsx)(`input`,{type:`checkbox`,name:n,checked:r,onChange:e=>{o(e.target.name,e.target.checked)}}),(!n||r)&&(0,N.jsx)(`input`,{type:`text`,name:e,value:l,style:{width:`${l.length+.3}ch`,maxWidth:`${a}ch`},onChange:e=>{let t=e.target.value;p(t)},...s})]})}var en=(e,t,n,r,i)=>{let a=!0,o=0;return o=parseInt(r)===parseFloat(r)?e===``?``:parseInt(e):e===``?``:parseFloat(e),a=!(o===``||isNaN(o)||o<t||o>n||i&&r%1==0&&o%r!==0||r%1!=0&&e.endsWith(`.`)||t<0&&e===`-0`),{valid:a,raw:e,value:o}};function L({name:e,label:t,min:n=0,max:r=1/0,step:i=1,value:a,toggler:o,maxWidth:s=5,togglerName:c,noPlusMinus:l,stepLock:u=!1,togglerOnly:d=!1,onChange:f,...p}){let m=(0,_.useCallback)(()=>`${a}`,[a]),[h,g]=(0,_.useState)(m);(0,_.useEffect)(()=>{g(m()),y(!0)},[m,a]);let[v,y]=(0,_.useState)(!0),b=(0,_.useCallback)((t,a=!1)=>{let o=en(t,n,r,i,u);g(o.raw),y(o.valid),o.valid&&f(e,o.value)},[r,n,e,f,i]),x=(0,_.useCallback)(()=>{if(!v){b(`${n}`);return}if(h!==`${n}`){let e=parseInt(i)===parseFloat(i)?parseInt(h):parseFloat(h);e-=i,b(i>0&&i<1?e.toFixed(i.toString().split(`.`)[1].length):e.toString())}},[n,h,i,b,v]),ee=(0,_.useCallback)(()=>{if(!v){b(`${n}`);return}if(h!==`${r}`){let e=parseInt(i)===parseFloat(i)?parseInt(h):parseFloat(h);e+=i,b(i>0&&i<1?e.toFixed(i.toString().split(`.`)[1].length):e.toString())}},[r,n,h,i,b,v]),te=e=>{let t=e.target.value;b(t,!0)};return(0,N.jsxs)(`label`,{className:`number ${v?`valid`:`invalid`}`,children:[t||c?(0,N.jsxs)(`div`,{className:`number-head`,children:[t&&(0,N.jsx)(`span`,{className:`number-label`,children:t}),c&&(0,N.jsx)(`input`,{type:`checkbox`,name:c,checked:o,onChange:e=>{f(e.target.name,e.target.checked)}})]}):null,(!c||o)&&!d&&(0,N.jsxs)(`div`,{className:`number-control${l?` noplusminus`:``}`,children:[(0,N.jsx)(`input`,{type:`text`,name:e,value:h,style:{width:`${Math.max(...[i,h].map(e=>e.toString().length))+.3}ch`,maxWidth:`${s}ch`},onChange:te,...p}),!l&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`button`,{className:`plusminus minus`,onClick:x,tabIndex:-1,children:`−`}),(0,N.jsx)(`button`,{className:`plusminus plus`,onClick:ee,tabIndex:-1,children:`+`})]})]})]})}var tn={width:300,height:150},nn=document.createElement(`canvas`);nn.width=tn.width,nn.height=tn.height;var rn={dimensions:2,locked:!1,gl:null,env:null,queue:[],init(){this.gl=nn.getContext(`webgl2`,{antialias:!1,stencil:!1}),this.env={vertexShader:this.gl.createShader(this.gl.VERTEX_SHADER),fragmentShader:this.gl.createShader(this.gl.FRAGMENT_SHADER),program:this.gl.createProgram()},ut(this,!1),this.gl.attachShader(this.env.program,this.env.vertexShader),this.gl.attachShader(this.env.program,this.env.fragmentShader)},render(e){this.gl||this.init(),dt({gl:this.gl,env:this.env,...Re,...e,perturb:!1}),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.viewport(0,0,tn.width,tn.height),this.gl.uniform2fv(this.env.uniforms.aspect,[tn.width/tn.height,1/Math.max(tn.width,tn.height)]),this.gl.drawArrays(this.gl.TRIANGLES,0,3);let t=new Uint8Array(tn.width*tn.height*4);return this.gl.readPixels(0,0,tn.width,tn.height,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),t}},an=(0,_.memo)(function({params:e}){let t=(0,_.useRef)();return(0,_.useEffect)(()=>{setTimeout(()=>{if(!t.current)return;let n=rn.render(e);t.current.width=tn.width,t.current.height=tn.height;let r=t.current.getContext(`2d`),i=new ImageData(new Uint8ClampedArray(n),tn.width,tn.height);r.putImageData(i,0,0),r.scale(1,-1),r.translate(0,-tn.height),r.drawImage(t.current,0,0)},0)},[e]),(0,N.jsx)(`canvas`,{ref:t,className:`preview`,style:tn})}),on=e=>{let t=Object.keys(e).filter(e=>e!=`z`).sort();return t.length?t.length===1?t[0]:`{${t.join(`, `)}}`:null};function sn({args:e}){let t=on(e);return(0,N.jsxs)(N.Fragment,{children:[`F`,t?(0,N.jsx)(`sub`,{children:t}):null,`(z) =`]})}var cn=e=>{if([`string`,`number`].includes(typeof e))return e;if(e instanceof Array)return e.map(cn).join(``);if(typeof e==`object`&&e)return cn(e.props.children)},ln=(e,t)=>t===`*`?!0:typeof e==`string`?cn(e).toLowerCase().includes(t.toLowerCase()):!1,un=(0,_.memo)(function e({name:t,index:n,params:r,search:i,subforms:a=[],sub:o=!1,shown:s,onPreset:c}){let[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!0),[p,m]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{p&&u(!0)},[p]),(0,_.useEffect)(()=>{if(!i){f(!0),m(!1);return}if(a.length&&a.some(({name:e})=>ln(e,i))){f(!0),m(!0);return}if(ln(t,i)){f(!0);return}f(!1),m(!1)},[t,i,a]),(0,N.jsxs)(`div`,{style:{display:d?`block`:`none`},children:[(0,N.jsx)(`div`,{className:`preset${o?` sub`:``}`,onClick:()=>c(r,n),children:(0,N.jsxs)(`div`,{className:`preset-header preset-name-${a.length?`button`:`only`}`,children:[a.length?(0,N.jsx)(`button`,{className:`preset-toggle ${p?`open`:`closed`}`,onClick:e=>{e.stopPropagation(),m(!p)},children:p?`-`:`+`}):null,(0,N.jsxs)(`div`,{className:`preset-content-preview`,children:[(0,N.jsxs)(`div`,{className:`preset-content`,children:[(0,N.jsx)(`span`,{className:`preset-name`,children:t}),(0,N.jsxs)(`code`,{className:`preset-formula`,children:[(0,N.jsx)(`span`,{className:`preset-assignment`,children:(0,N.jsx)(sn,{args:r.args})}),` `,r.f]}),(0,N.jsxs)(`code`,{className:`preset-derivative_z`,children:[(0,N.jsx)(`span`,{className:`preset-assignment`,children:`dF(z, z', c)/dz = `}),r.f_prime_z]}),(0,N.jsxs)(`code`,{className:`preset-derivative_c`,children:[(0,N.jsx)(`span`,{className:`preset-assignment`,children:`dF(z, z', c)/dc = `}),r.f_prime_c]})]}),s?(0,N.jsx)(an,{params:r}):null]})]})}),(0,N.jsx)(`div`,{className:`subforms`,style:{display:p?`block`:`none`},children:a.map((t,n)=>(0,N.jsx)(e,{...t,sub:!0,search:i,shown:s&&l,onPreset:c},n))})]})});function dn({open:e,onPreset:t,onExportImage:n,closePresets:r}){let[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(``),[c,l]=(0,_.useState)(``),u=(0,_.useRef)();(0,_.useEffect)(()=>{e&&(a(!0),u.current.focus())},[e]);let d=(0,_.useCallback)(e=>{l(e.target.value),s(e.target.value)},[]);return(0,N.jsxs)(`div`,{style:{display:e?`block`:`none`},children:[(0,N.jsx)(`div`,{className:`presets-overlay`,onClick:r}),(0,N.jsx)(`div`,{className:`presets`,children:(0,N.jsxs)(`div`,{className:`presets-modal`,children:[(0,N.jsxs)(`div`,{className:`presets-header`,children:[(0,N.jsxs)(`div`,{className:`presets-search`,children:[(0,N.jsx)(`input`,{type:`text`,placeholder:`Search`,ref:u,value:c,onChange:d}),(0,N.jsx)(`button`,{className:`presets-clear`,onClick:()=>{s(``),l(``)},children:Ot})]}),(0,N.jsxs)(`div`,{className:`presets-actions`,children:[(0,N.jsx)(`a`,{className:`presets-action`,href:`https://florian.mounier.dev/`,children:kt}),(0,N.jsx)(`button`,{className:`presets-action`,onClick:n,children:At}),(0,N.jsx)(`button`,{className:`presets-action`,onClick:r,children:jt})]})]}),(0,N.jsx)(`div`,{className:`presets-list`,children:Yt.map(({type:e,content:n,name:r,params:a,subforms:s},c)=>(0,N.jsx)(_.Fragment,{children:e===`title`?(0,N.jsx)(`h2`,{children:n}):e===`group`?(0,N.jsx)(`h4`,{children:n}):(0,N.jsx)(un,{name:r,index:c,params:a,search:o,shown:i,subforms:s,onPreset:t})},c))})]})})]})}function fn({name:e,value:t,options:n,label:r,onChange:i,...a}){return(0,N.jsxs)(`label`,{className:`select-label`,children:[r,(0,N.jsx)(`select`,{name:e,value:t,className:`select`,onChange:(0,_.useCallback)(t=>{let{value:n}=t.target;i(e,n)},[e,i]),children:n.map(e=>(0,N.jsx)(`option`,{value:e,children:e.replace(/_/g,` `).replace(/./,e=>e.toUpperCase())},e))})]})}function pn(){return new Promise(e=>{setTimeout(e,100)})}var mn=(e,t,n,r,i,a,o,s=0)=>{let{gl:c}=e,l={left:0,right:0,top:0,bottom:0};l.left=Math.min(s,r),l.top=Math.min(s,i),l.right=Math.min(s,t-r-a),l.bottom=Math.min(s,n-i-o),vt(e,{height:o+l.top+l.bottom,width:a+l.left+l.right,x:r-l.left,y:i-l.top,fullWidth:t,fullHeight:n});let u=new Uint8ClampedArray(a*o*4);return c.bindFramebuffer(c.FRAMEBUFFER,null),c.readPixels(l.left,l.bottom,a,o,c.RGBA,c.UNSIGNED_BYTE,u),new ImageData(u,a,o)},hn=async(e,t,n,r,i,a,o,s=0)=>{let c=Math.ceil(t/r)*Math.ceil(n/i),l=0;for(let u=0;u<n;u+=i){let d=Math.min(i,n-u);for(let i=0;i<t;i+=r){let f=Math.min(r,t-i),p=mn(e,t,n,i,u,f,d,s);if(!p)return;o.putImageData(p,i,u),a.innerHTML=`${(++l/c*100).toFixed(0)}%`,await pn()}}};async function gn(e,t,n){let r=document.createElement(`div`);r.className=`export-progress`,document.body.appendChild(r);let i=document.createElement(`canvas`);i.width=t,i.height=n;let a=i.getContext(`2d`);try{await hn(e,t,n,1e3,1e3,r,a,0)}finally{document.body.removeChild(r)}return mt(e),vt(e),i.toDataURL(`image/png`)}function _n({name:e,value:t,options:n,label:r,onChange:i,children:a,truncate:o,...s}){let c=(0,_.useCallback)(t=>{let{value:n}=t.target;n?.slice(-1)!==`…`&&i(e,n)},[e,i]);o&&t.length>o&&(t=t.slice(0,o)+`…`);let l=(0,N.jsx)(`input`,{type:`text`,name:e,value:t,className:`text`,onChange:c,...s});return a&&(l=(0,N.jsxs)(`div`,{className:`text-wrapper`,children:[l,a]})),(0,N.jsxs)(`label`,{className:`select-label`,...s,children:[r,l]})}var vn=()=>{try{return localStorage.getItem(`showUI`)||`simple`}catch(e){return console.error(e),`simple`}};function yn({runtime:e,params:t,setRuntime:n,updateParams:r}){let[i,a]=(0,_.useState)(vn),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(0),[u,d]=(0,_.useState)(!1),f=(0,_.useCallback)(()=>{r({animate:!1}),s(!0)},[r]),p=(0,_.useCallback)(()=>{let e=document.createElement(`input`);e.type=`file`,e.accept=`image/*`,e.onchange=e=>{let t=new FileReader;t.onload=()=>{r({texture:t.result})},t.readAsDataURL(e.target.files[0])},e.click()},[r]),m=(0,_.useCallback)(()=>{s(!1)},[]),h=(0,_.useCallback)((e,t)=>{r(e,!0),l(t),m()},[r,m]),g=(0,_.useCallback)((e,t)=>{r({[e]:t})},[r]),v=(0,_.useCallback)(()=>a(e=>{let t={simple:`advanced`,advanced:`full`,full:`empty`,empty:`simple`}[e];try{localStorage.setItem(`showUI`,t)}catch(e){console.error(e)}return t}),[]),y=(0,_.useCallback)(()=>{d(e=>!e)},[]);(0,_.useEffect)(()=>{let e=e=>{if(e.target.tagName!==`INPUT`){if(e.key===`ArrowLeft`&&e.ctrlKey&&c>0){let e=c-1;for(;Yt[e].type;){if(e<2)return;e--}h(Yt[e].params,e)}else if(e.key===`ArrowRight`&&e.ctrlKey&&c<Yt.length-1){let e=c+1;for(;Yt[e].type;){if(e>Yt.length-2)return;e++}h(Yt[e].params,e)}}};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[h,c]);let b=(0,_.useCallback)(async()=>{m();let t=window.prompt(`Select image resolution`,`5000x5000`);if(!t||!t.includes(`x`)){console.error(`Invalid resolution`);return}let[n,r]=t.split(`x`).map(e=>parseInt(e));if(isNaN(n)||isNaN(r)){console.error(`Invalid resolution`);return}let i=await gn(e,n,r);if(i){let e=document.createElement(`a`);document.body.appendChild(e),e.style.display=`none`,e.href=i,e.download=`${document.title}-${n}x${r}`,e.click()}},[m,e]),x=Object.keys(t.args);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(dn,{open:o,onPreset:h,onExportImage:b,closePresets:m}),(0,N.jsxs)(`main`,{className:`ui`+(u?` readable `:``)+(e.error?` error`:``),title:e.error,children:[(0,N.jsxs)(`div`,{className:`ui-row ui-row-top`,children:[(0,N.jsx)(`aside`,{className:`controls`,children:(0,N.jsxs)(`div`,{className:`subcontrols`,children:[(0,N.jsx)(`button`,{className:`button`,onClick:v,children:Pt}),[`advanced`,`full`].includes(i)?(0,N.jsx)(`button`,{className:`button`,onClick:y,children:u?Lt:Rt}):null,[`simple`,`advanced`,`full`].includes(i)?(0,N.jsx)(`button`,{className:`button`,onClick:()=>r({animate:!t.animate}),children:t.animate?Nt:Mt}):null,[`simple`,`advanced`,`full`].includes(i)?(0,N.jsxs)(`button`,{className:`button`,onClick:()=>r({dimensions:(t.dimensions+1)%5||1}),children:[t.dimensions,`D`]}):null,t.dimensions>2&&[`simple`,`advanced`,`full`].includes(i)?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`button`,{className:`button`,onClick:()=>r({control:Le[(Le.indexOf(t.control)+1)%(Le.length-+(t.dimensions===3))]}),children:t.control}),t.control===`4d`?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`button`,{className:`button`,onClick:()=>r({matrix:Te(),anakata:10}),children:`c`}),(0,N.jsx)(`button`,{className:`button`,onClick:()=>r({rotation:(t.rotation+1)%3}),children:t.rotation})]}):null,t.control===`3d`?(0,N.jsx)(`button`,{className:`button`,onClick:()=>{e.env.camera.rotation=ke(Math.PI/2,1,2),e.env.camera.zoom=2,e.env.camera.update(),vt(e)},children:`c`}):null,(0,N.jsx)(`button`,{className:`button`,onClick:()=>r({transparent:!t.transparent}),children:t.transparent?`T`:`O`})]}):null]})}),[`simple`,`advanced`,`full`].includes(i)?(0,N.jsxs)(`aside`,{className:`formula`,children:[(0,N.jsx)($t,{label:(0,N.jsx)(sn,{args:t.args}),name:`f`,value:t.f,onChange:g}),[`advanced`,`full`].includes(i)&&t.useDerivative?(0,N.jsx)($t,{label:`dF(z, z', c)/dz =`,name:`f_prime_z`,value:e.f_prime_z,onChange:g}):null,[`advanced`,`full`].includes(i)&&t.useDerivative?(0,N.jsx)($t,{label:`dF(z, z', c)/dc =`,name:`f_prime_c`,value:e.f_prime_c,onChange:g}):null,[`advanced`,`full`].includes(i)&&e.perturb?(0,N.jsx)($t,{label:`F(Z, dz, dc) =`,name:`f_perturb`,value:t.f_perturb,onChange:g}):null]}):null]}),(0,N.jsxs)(`div`,{className:`ui-row ui-row-middle`,children:[[`simple`,`advanced`,`full`].includes(i)?(0,N.jsxs)(`aside`,{className:`view`,children:[(0,N.jsx)(fn,{label:`Palette`,name:`palette`,value:t.palette,options:Fe,onChange:g}),e.palette===`texture`?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(_n,{name:`texture`,label:`Texture`,value:t.texture,onChange:g,truncate:1e3,className:`texture-input`,children:(0,N.jsx)(`button`,{className:`button small`,onClick:p,title:`Image`,children:zt})}),(0,N.jsx)(L,{name:`textureBlend`,label:`Texture Blend`,min:0,step:.1,value:t.textureBlend,onChange:g})]}):null,(0,N.jsx)(fn,{label:`Shading`,name:`shading`,value:t.shading,options:Ie,onChange:g}),[`full`].includes(i)?(0,N.jsx)(L,{name:`offset`,label:`Offset`,min:0,step:10,value:t.offset,onChange:g}):null,[`full`].includes(i)?(0,N.jsx)(L,{name:`velocity`,label:`Velocity`,min:0,step:10,value:t.velocity,onChange:g}):null,[`full`].includes(i)?(0,N.jsx)(L,{name:`hue`,label:`Hue`,min:0,max:360,step:10,value:t.hue,onChange:g}):null,[`full`].includes(i)?(0,N.jsx)(L,{name:`saturation`,label:`Saturation`,min:0,step:10,value:t.saturation,onChange:g}):null,[`full`].includes(i)?(0,N.jsx)(L,{name:`lightness`,label:`Lightness`,min:0,step:10,value:t.lightness,onChange:g}):null,[`advanced`,`full`].includes(i)&&t.animate?(0,N.jsx)(L,{name:`speed`,label:`Speed`,min:0,value:t.speed,onChange:g}):null,(0,N.jsx)(L,{name:`supersampling`,label:`Supersampling`,min:0,step:.1,value:t.supersampling,onChange:g})]}):null,[`simple`,`advanced`,`full`].includes(i)?(0,N.jsxs)(`aside`,{className:`params`,children:[(0,N.jsx)(L,{name:`iterations`,label:`Iterations`,min:1,step:1,value:t.iterations,onChange:g}),[`advanced`,`full`].includes(i)?(0,N.jsx)(Xt,{className:`button`,label:`Roots`,name:`useRoots`,value:t.useRoots,onChange:g}):null,[`advanced`,`full`].includes(i)?(0,N.jsx)(L,{name:`bailin`,label:`Bailin`,min:-1/0,step:.1,value:t.bailin,togglerName:`convergent`,toggler:t.convergent,onChange:g}):null,[`advanced`,`full`].includes(i)?(0,N.jsx)(L,{name:`bailout`,label:`Bailout`,min:-1/0,step:.1,value:t.bailout,togglerName:`divergent`,toggler:t.divergent,onChange:g}):null,[`advanced`,`full`].includes(i)&&(0,N.jsx)(Xt,{label:`Only Bailed`,className:`button`,name:`onlyBailed`,value:t.onlyBailed,onChange:g}),[`advanced`,`full`].includes(i)?(0,N.jsx)(L,{name:`derivative`,label:`Derivative`,min:0,value:t.derivative,togglerName:`useDerivative`,toggler:t.useDerivative,onChange:g}):null,[`advanced`,`full`].includes(i)?(0,N.jsx)(Xt,{name:`useCycle`,label:`Cycle`,value:t.useCycle,onChange:g}):null,i===`full`?(0,N.jsx)(Xt,{label:`Perturbation`,className:`button`,name:`usePerturbation`,allowNull:!0,value:t.usePerturbation,onChange:g}):null,[`full`].includes(i)?(0,N.jsx)(Xt,{name:`scaled`,label:`Scaled`,value:t.scaled,onChange:g}):null,[`advanced`,`full`].includes(i)?(0,N.jsx)(L,{name:`gridScale`,label:`Grid`,min:0,value:t.gridScale,togglerName:`showGrid`,toggler:t.showGrid,togglerOnly:i!==`full`,onChange:g}):null,[`full`].includes(i)&&t.showGrid?(0,N.jsx)(L,{name:`gridWidth`,label:`Grid Width`,step:.1,value:t.gridWidth,onChange:g}):null,[`full`].includes(i)&&t.showGrid?(0,N.jsx)(Xt,{name:`gridLog`,label:`Grid Log`,value:t.gridLog,togglerOnly:i!==`full`,onChange:g}):null,[`advanced`,`full`].includes(i)?(0,N.jsx)(L,{label:`Norm Grid`,step:.1,name:`normGridWidth`,value:t.normGridWidth,togglerName:`showNormGrid`,toggler:t.showNormGrid,togglerOnly:i!==`full`,onChange:g}):null,[`advanced`,`full`].includes(i)?(0,N.jsx)(L,{label:`Norm Shade`,className:`button`,name:`normShadeValue`,value:t.normShadeValue,togglerName:`normShade`,toggler:t.normShade,togglerOnly:i!==`full`,onChange:g}):null,[`advanced`,`full`].includes(i)&&(t.showNormGrid||t.normShade)?(0,N.jsx)(L,{name:`normGridScale`,label:`Norm Grid Scale`,min:0,value:t.normGridScale,onChange:g}):null,[`advanced`,`full`].includes(i)&&(t.showNormGrid||t.normShade)?(0,N.jsx)(Xt,{name:`normGridLog`,label:`Norm Grid Log`,value:t.normGridLog,onChange:g}):null,[`advanced`,`full`].includes(i)?(0,N.jsx)(L,{label:`Arg Grid`,step:.1,name:`argGridWidth`,value:t.argGridWidth,togglerName:`showArgGrid`,toggler:t.showArgGrid,togglerOnly:i!==`full`,onChange:g}):null,[`advanced`,`full`].includes(i)?(0,N.jsx)(L,{label:`Arg Shade`,className:`button`,name:`argShadeValue`,value:t.argShadeValue,togglerName:`argShade`,toggler:t.argShade,togglerOnly:i!==`full`,onChange:g}):null,[`advanced`,`full`].includes(i)&&(t.showArgGrid||t.argShade)?(0,N.jsx)(L,{name:`argGridScale`,label:`Arg Grid Scale`,min:0,value:t.argGridScale,onChange:g}):null,[`advanced`,`full`].includes(i)&&(t.showArgGrid||t.argShade)?(0,N.jsx)(Xt,{name:`argGridLog`,label:`Arg Grid Log`,value:t.argGridLog,onChange:g}):null,[`advanced`,`full`].includes(i)?(0,N.jsx)(L,{label:`Zeroes`,className:`button`,name:`zeroes`,min:-1/0,value:t.zeroes,togglerName:`showZeroes`,toggler:t.showZeroes,togglerOnly:i!==`full`,onChange:g}):null,[`advanced`,`full`].includes(i)?(0,N.jsx)(L,{label:`Poles`,className:`button`,name:`poles`,min:-1/0,value:t.poles,togglerName:`showPoles`,toggler:t.showPoles,togglerOnly:i!==`full`,onChange:g}):null,[`advanced`,`full`].includes(i)?(0,N.jsx)(L,{name:`polya`,label:`Polya Plot`,min:0,value:t.polya,togglerName:`showPolya`,toggler:t.showPolya,togglerOnly:i!==`full`,onChange:g}):null,[`full`].includes(i)&&t.showPolya?(0,N.jsx)(L,{name:`polyaLightness`,label:`Polya Lightness`,min:0,step:10,togglerName:`polyaColor`,toggler:t.polyaColor,value:t.polyaLightness,onChange:g}):null]}):null]}),(0,N.jsxs)(`div`,{className:`ui-row ui-row-bottom`,children:[[`simple`,`advanced`,`full`].includes(i)?(0,N.jsx)(`button`,{className:`preset-button button`,onClick:f,title:`Presets`,children:Dt}):null,[`advanced`,`full`].includes(i)&&(0,N.jsxs)(`aside`,{className:`bounds`,children:[x.sort().reverse().map(e=>(0,N.jsx)(Qt,{name:e,label:e,maxWidth:null,value:t.args,arg:!0,varying:t.varying,onChange:g},e)),(0,N.jsx)(Qt,{name:`scale`,label:`Scale`,maxWidth:null,initial:w(1,0),value:t.scale,onChange:g})]}),[`simple`,`advanced`,`full`].includes(i)?(0,N.jsxs)(`button`,{className:`space-button button${e.processing?` processing`:``}`,onClick:()=>r({move:x[(x.indexOf(t.move)+1)%x.length]||`c`}),children:[`∆`,t.move]}):null]})]})]})}var bn=(e,t=[],n)=>{let r={...e},i=[];if(Object.entries(r).forEach(([e,t])=>{typeof Re[e]==`number`?(t===``||isNaN(t))&&(delete r[e],i.push(e)):Array.isArray(Re[e])&&(Array.isArray(t[0])?t.find(e=>e.find(e=>t===``||isNaN(e)))&&(delete r[e],i.push(e)):t.find(e=>t===``||isNaN(e))&&(delete r[e],i.push(e)))}),t.includes(`f`)||t.includes(`dimensions`)){let e=ye(be(r.f)).filter(e=>e.length===1);if(e.includes(`z`)||e.push(`z`),(r.dimensions===1||r.dimensions===3)&&(e.includes(`o`)||e.push(`o`)),we(e,Object.keys(r.args))||(r.args=e.reduce((e,t)=>(e[t]=r.args[t]||w(+!`o`.includes(t)),e),{})),!t.includes(`f_prime_z`)||r.f_prime_z===null)try{r.f_prime_z=xe(r.f,[`z`,`z_1`]).toString()}catch(e){i.push(`f_prime_z`),console.warn(e)}if(!t.includes(`f_prime_c`)||r.f_prime_c===null)try{r.f_prime_c=xe(r.f,[`z`,`z_1`],[`c`]).toString()}catch(e){i.push(`f_prime_c`),console.warn(e)}e.includes(r.move)||(r.move=`z`)}return t.includes(`dimensions`)&&r.dimensions===4&&(r.transparent=!0),(t.includes(`convergent`)||t.includes(`divergent`))&&!r.convergent&&!r.divergent&&(r.useDerivative=!1,r.usePerturbation=!1),r.args.z||(r.args.z=w()),{params:r,badParams:i}};function xn({params:e,updateParams:t}){let[n,r]=(0,_.useState)({...e,perturb:!1,textureElement:null,timeref:0}),[i,a]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{if(!n.gl&&n.error)return;let e=e=>{console.error(`WebGL context lost`,e),r(e=>({...e,gl:null,error:Error(`WebGL context lost`)})),e.preventDefault()},t=()=>{console.warn(`WebGL context restored`),r(n=>({...n,...pt(n,e,t),error:null}))};r(n=>{try{return n.gl?n:pt(n,e,t)}catch(e){return console.error(e),{...n,error:e}}})},[n.gl,n.error]),(0,_.useEffect)(()=>{r(t=>({...t,...bn(e).params}))},[e]),(0,N.jsxs)(N.Fragment,{children:[n.error?(0,N.jsxs)(`aside`,{className:`global-error`,children:[(0,N.jsxs)(`div`,{children:[n.error.toString(),` `,(0,N.jsxs)(`button`,{onClick:()=>a(e=>!e),children:[i?`Hide`:`Show`,` stack`]})]}),n.error.stack&&i?(0,N.jsx)(`pre`,{children:n.error.stack}):null]}):null,n.gl?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(yn,{runtime:n,params:e,setRuntime:r,updateParams:t}),(0,N.jsx)(Et,{runtime:n,setRuntime:r,updateParams:t})]}):null]})}var Sn=(e,t)=>t instanceof ne?t.toString():t,Cn=(e,t)=>typeof t==`string`&&ne.isComplexString(t)?ne.fromString(t):t,wn=()=>{let{location:e}=window;if(e.hash)try{let t=JSON.parse(atob(e.hash.slice(1)),Cn);return bn({...Re,...t}).params}catch(t){console.warn(t),e.hash=``}let t=Yt.map(e=>e.subforms?e.subforms.map(e=>e.params).concat(e.params):e.params).flat(1);return bn(t[~~(t.length*Math.random())]).params},Tn=(e,t=!1)=>{let n=`#`+btoa(JSON.stringify(e,Sn));window.history[t?`replaceState`:`pushState`](null,null,n)};g.createRoot(document.getElementById(`root`)).render((0,N.jsx)(()=>{let[e,t]=(0,_.useState)(wn()),n=(0,_.useCallback)(n=>{let r=wn();r&&(Object.entries(r).forEach(([t,n])=>{Array.isArray(n)&&we(n,e[t])&&(r[t]=e[t])}),t(r))},[e]),r=(0,_.useCallback)((e,n=!1)=>{t(t=>{if(!Object.entries(e).filter(([e,n])=>Array.isArray(n)?!we(n,t[e]):typeof n==`object`&&n?!we(Object.entries(n),Object.entries(t[e])):t[e]!==n).length)return t;let{params:r,badParams:i}=bn(n?e:{...t,...e},n?[]:Object.keys(e),t);return i.length||Tn(r,Object.keys(e).length===1&&e.matrix),r})},[]);return(0,_.useEffect)(()=>(window.addEventListener(`popstate`,n),()=>{window.removeEventListener(`popstate`,n)}),[n]),(0,N.jsx)(xn,{params:e,updateParams:r})},{}));