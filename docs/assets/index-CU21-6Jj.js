(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function f(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(d){if(d.ep)return;d.ep=!0;const h=f(d);fetch(d.href,h)}})();function o5(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Bu={exports:{}},ka={};var f1;function d5(){if(f1)return ka;f1=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(s,d,h){var b=null;if(h!==void 0&&(b=""+h),d.key!==void 0&&(b=""+d.key),"key"in d){h={};for(var D in d)D!=="key"&&(h[D]=d[D])}else h=d;return d=h.ref,{$$typeof:u,type:s,key:b,ref:d!==void 0?d:null,props:h}}return ka.Fragment=c,ka.jsx=f,ka.jsxs=f,ka}var r1;function v5(){return r1||(r1=1,Bu.exports=d5()),Bu.exports}var p=v5(),Lu={exports:{}},te={};var o1;function h5(){if(o1)return te;o1=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),q=Symbol.iterator;function J(z){return z===null||typeof z!="object"?null:(z=q&&z[q]||z["@@iterator"],typeof z=="function"?z:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,F={};function P(z,R,Z){this.props=z,this.context=R,this.refs=F,this.updater=Z||Y}P.prototype.isReactComponent={},P.prototype.setState=function(z,R){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,R,"setState")},P.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function me(){}me.prototype=P.prototype;function X(z,R,Z){this.props=z,this.context=R,this.refs=F,this.updater=Z||Y}var $=X.prototype=new me;$.constructor=X,G($,P.prototype),$.isPureReactComponent=!0;var ve=Array.isArray;function ue(){}var ne={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function vt(z,R,Z){var V=Z.ref;return{$$typeof:u,type:z,key:R,ref:V!==void 0?V:null,props:Z}}function Ot(z,R){return vt(z.type,R,z.props)}function Lt(z){return typeof z=="object"&&z!==null&&z.$$typeof===u}function at(z){var R={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Z){return R[Z]})}var Xn=/\/+/g;function Jt(z,R){return typeof z=="object"&&z!==null&&z.key!=null?at(""+z.key):R.toString(36)}function Gt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(ue,ue):(z.status="pending",z.then(function(R){z.status==="pending"&&(z.status="fulfilled",z.value=R)},function(R){z.status==="pending"&&(z.status="rejected",z.reason=R)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function N(z,R,Z,V,le){var se=typeof z;(se==="undefined"||se==="boolean")&&(z=null);var be=!1;if(z===null)be=!0;else switch(se){case"bigint":case"string":case"number":be=!0;break;case"object":switch(z.$$typeof){case u:case c:be=!0;break;case j:return be=z._init,N(be(z._payload),R,Z,V,le)}}if(be)return le=le(z),be=V===""?"."+Jt(z,0):V,ve(le)?(Z="",be!=null&&(Z=be.replace(Xn,"$&/")+"/"),N(le,R,Z,"",function(ta){return ta})):le!=null&&(Lt(le)&&(le=Ot(le,Z+(le.key==null||z&&z.key===le.key?"":(""+le.key).replace(Xn,"$&/")+"/")+be)),R.push(le)),1;be=0;var tt=V===""?".":V+":";if(ve(z))for(var Ge=0;Ge<z.length;Ge++)V=z[Ge],se=tt+Jt(V,Ge),be+=N(V,R,Z,se,le);else if(Ge=J(z),typeof Ge=="function")for(z=Ge.call(z),Ge=0;!(V=z.next()).done;)V=V.value,se=tt+Jt(V,Ge++),be+=N(V,R,Z,se,le);else if(se==="object"){if(typeof z.then=="function")return N(Gt(z),R,Z,V,le);throw R=String(z),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return be}function L(z,R,Z){if(z==null)return z;var V=[],le=0;return N(z,V,"","",function(se){return R.call(Z,se,le++)}),V}function ee(z){if(z._status===-1){var R=z._result;R=R(),R.then(function(Z){(z._status===0||z._status===-1)&&(z._status=1,z._result=Z)},function(Z){(z._status===0||z._status===-1)&&(z._status=2,z._result=Z)}),z._status===-1&&(z._status=0,z._result=R)}if(z._status===1)return z._result.default;throw z._result}var Ee=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},_e={map:L,forEach:function(z,R,Z){L(z,function(){R.apply(this,arguments)},Z)},count:function(z){var R=0;return L(z,function(){R++}),R},toArray:function(z){return L(z,function(R){return R})||[]},only:function(z){if(!Lt(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return te.Activity=O,te.Children=_e,te.Component=P,te.Fragment=f,te.Profiler=d,te.PureComponent=X,te.StrictMode=s,te.Suspense=y,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne,te.__COMPILER_RUNTIME={__proto__:null,c:function(z){return ne.H.useMemoCache(z)}},te.cache=function(z){return function(){return z.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(z,R,Z){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var V=G({},z.props),le=z.key;if(R!=null)for(se in R.key!==void 0&&(le=""+R.key),R)!ce.call(R,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&R.ref===void 0||(V[se]=R[se]);var se=arguments.length-2;if(se===1)V.children=Z;else if(1<se){for(var be=Array(se),tt=0;tt<se;tt++)be[tt]=arguments[tt+2];V.children=be}return vt(z.type,le,V)},te.createContext=function(z){return z={$$typeof:b,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:h,_context:z},z},te.createElement=function(z,R,Z){var V,le={},se=null;if(R!=null)for(V in R.key!==void 0&&(se=""+R.key),R)ce.call(R,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(le[V]=R[V]);var be=arguments.length-2;if(be===1)le.children=Z;else if(1<be){for(var tt=Array(be),Ge=0;Ge<be;Ge++)tt[Ge]=arguments[Ge+2];le.children=tt}if(z&&z.defaultProps)for(V in be=z.defaultProps,be)le[V]===void 0&&(le[V]=be[V]);return vt(z,se,le)},te.createRef=function(){return{current:null}},te.forwardRef=function(z){return{$$typeof:D,render:z}},te.isValidElement=Lt,te.lazy=function(z){return{$$typeof:j,_payload:{_status:-1,_result:z},_init:ee}},te.memo=function(z,R){return{$$typeof:m,type:z,compare:R===void 0?null:R}},te.startTransition=function(z){var R=ne.T,Z={};ne.T=Z;try{var V=z(),le=ne.S;le!==null&&le(Z,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ue,Ee)}catch(se){Ee(se)}finally{R!==null&&Z.types!==null&&(R.types=Z.types),ne.T=R}},te.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()},te.use=function(z){return ne.H.use(z)},te.useActionState=function(z,R,Z){return ne.H.useActionState(z,R,Z)},te.useCallback=function(z,R){return ne.H.useCallback(z,R)},te.useContext=function(z){return ne.H.useContext(z)},te.useDebugValue=function(){},te.useDeferredValue=function(z,R){return ne.H.useDeferredValue(z,R)},te.useEffect=function(z,R){return ne.H.useEffect(z,R)},te.useEffectEvent=function(z){return ne.H.useEffectEvent(z)},te.useId=function(){return ne.H.useId()},te.useImperativeHandle=function(z,R,Z){return ne.H.useImperativeHandle(z,R,Z)},te.useInsertionEffect=function(z,R){return ne.H.useInsertionEffect(z,R)},te.useLayoutEffect=function(z,R){return ne.H.useLayoutEffect(z,R)},te.useMemo=function(z,R){return ne.H.useMemo(z,R)},te.useOptimistic=function(z,R){return ne.H.useOptimistic(z,R)},te.useReducer=function(z,R,Z){return ne.H.useReducer(z,R,Z)},te.useRef=function(z){return ne.H.useRef(z)},te.useState=function(z){return ne.H.useState(z)},te.useSyncExternalStore=function(z,R,Z){return ne.H.useSyncExternalStore(z,R,Z)},te.useTransition=function(){return ne.H.useTransition()},te.version="19.2.3",te}var d1;function es(){return d1||(d1=1,Lu.exports=h5()),Lu.exports}var B=es(),Zu={exports:{}},$a={},Yu={exports:{}},Xu={};var v1;function m5(){return v1||(v1=1,(function(u){function c(N,L){var ee=N.length;N.push(L);e:for(;0<ee;){var Ee=ee-1>>>1,_e=N[Ee];if(0<d(_e,L))N[Ee]=L,N[ee]=_e,ee=Ee;else break e}}function f(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var L=N[0],ee=N.pop();if(ee!==L){N[0]=ee;e:for(var Ee=0,_e=N.length,z=_e>>>1;Ee<z;){var R=2*(Ee+1)-1,Z=N[R],V=R+1,le=N[V];if(0>d(Z,ee))V<_e&&0>d(le,Z)?(N[Ee]=le,N[V]=ee,Ee=V):(N[Ee]=Z,N[R]=ee,Ee=R);else if(V<_e&&0>d(le,ee))N[Ee]=le,N[V]=ee,Ee=V;else break e}}return L}function d(N,L){var ee=N.sortIndex-L.sortIndex;return ee!==0?ee:N.id-L.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var b=Date,D=b.now();u.unstable_now=function(){return b.now()-D}}var y=[],m=[],j=1,O=null,q=3,J=!1,Y=!1,G=!1,F=!1,P=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function $(N){for(var L=f(m);L!==null;){if(L.callback===null)s(m);else if(L.startTime<=N)s(m),L.sortIndex=L.expirationTime,c(y,L);else break;L=f(m)}}function ve(N){if(G=!1,$(N),!Y)if(f(y)!==null)Y=!0,ue||(ue=!0,at());else{var L=f(m);L!==null&&Gt(ve,L.startTime-N)}}var ue=!1,ne=-1,ce=5,vt=-1;function Ot(){return F?!0:!(u.unstable_now()-vt<ce)}function Lt(){if(F=!1,ue){var N=u.unstable_now();vt=N;var L=!0;try{e:{Y=!1,G&&(G=!1,me(ne),ne=-1),J=!0;var ee=q;try{t:{for($(N),O=f(y);O!==null&&!(O.expirationTime>N&&Ot());){var Ee=O.callback;if(typeof Ee=="function"){O.callback=null,q=O.priorityLevel;var _e=Ee(O.expirationTime<=N);if(N=u.unstable_now(),typeof _e=="function"){O.callback=_e,$(N),L=!0;break t}O===f(y)&&s(y),$(N)}else s(y);O=f(y)}if(O!==null)L=!0;else{var z=f(m);z!==null&&Gt(ve,z.startTime-N),L=!1}}break e}finally{O=null,q=ee,J=!1}L=void 0}}finally{L?at():ue=!1}}}var at;if(typeof X=="function")at=function(){X(Lt)};else if(typeof MessageChannel<"u"){var Xn=new MessageChannel,Jt=Xn.port2;Xn.port1.onmessage=Lt,at=function(){Jt.postMessage(null)}}else at=function(){P(Lt,0)};function Gt(N,L){ne=P(function(){N(u.unstable_now())},L)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(N){N.callback=null},u.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<N?Math.floor(1e3/N):5},u.unstable_getCurrentPriorityLevel=function(){return q},u.unstable_next=function(N){switch(q){case 1:case 2:case 3:var L=3;break;default:L=q}var ee=q;q=L;try{return N()}finally{q=ee}},u.unstable_requestPaint=function(){F=!0},u.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ee=q;q=N;try{return L()}finally{q=ee}},u.unstable_scheduleCallback=function(N,L,ee){var Ee=u.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ee+ee:Ee):ee=Ee,N){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=ee+_e,N={id:j++,callback:L,priorityLevel:N,startTime:ee,expirationTime:_e,sortIndex:-1},ee>Ee?(N.sortIndex=ee,c(m,N),f(y)===null&&N===f(m)&&(G?(me(ne),ne=-1):G=!0,Gt(ve,ee-Ee))):(N.sortIndex=_e,c(y,N),Y||J||(Y=!0,ue||(ue=!0,at()))),N},u.unstable_shouldYield=Ot,u.unstable_wrapCallback=function(N){var L=q;return function(){var ee=q;q=L;try{return N.apply(this,arguments)}finally{q=ee}}}})(Xu)),Xu}var h1;function g5(){return h1||(h1=1,Yu.exports=m5()),Yu.exports}var Qu={exports:{}},Pe={};var m1;function z5(){if(m1)return Pe;m1=1;var u=es();function c(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)m+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(y,m,j){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:O==null?null:""+O,children:y,containerInfo:m,implementation:j}}var b=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pe.createPortal=function(y,m){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(c(299));return h(y,m,null,j)},Pe.flushSync=function(y){var m=b.T,j=s.p;try{if(b.T=null,s.p=2,y)return y()}finally{b.T=m,s.p=j,s.d.f()}},Pe.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(y,m))},Pe.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Pe.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var j=m.as,O=D(j,m.crossOrigin),q=typeof m.integrity=="string"?m.integrity:void 0,J=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;j==="style"?s.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:O,integrity:q,fetchPriority:J}):j==="script"&&s.d.X(y,{crossOrigin:O,integrity:q,fetchPriority:J,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Pe.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var j=D(m.as,m.crossOrigin);s.d.M(y,{crossOrigin:j,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(y)},Pe.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var j=m.as,O=D(j,m.crossOrigin);s.d.L(y,j,{crossOrigin:O,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Pe.preloadModule=function(y,m){if(typeof y=="string")if(m){var j=D(m.as,m.crossOrigin);s.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:j,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(y)},Pe.requestFormReset=function(y){s.d.r(y)},Pe.unstable_batchedUpdates=function(y,m){return y(m)},Pe.useFormState=function(y,m,j){return b.H.useFormState(y,m,j)},Pe.useFormStatus=function(){return b.H.useHostTransitionStatus()},Pe.version="19.2.3",Pe}var g1;function y5(){if(g1)return Qu.exports;g1=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),Qu.exports=z5(),Qu.exports}var z1;function p5(){if(z1)return $a;z1=1;var u=g5(),c=es(),f=y5();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(s(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return y(a),e;if(i===l)return y(a),t;i=i.sibling}throw Error(s(188))}if(n.return!==l.return)n=a,l=i;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,l=i;break}if(o===l){r=!0,l=a,n=i;break}o=o.sibling}if(!r){for(o=i.child;o;){if(o===n){r=!0,n=i,l=a;break}if(o===l){r=!0,l=i,n=a;break}o=o.sibling}if(!r)throw Error(s(189))}}if(n.alternate!==l)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function j(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=j(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,q=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),me=Symbol.for("react.consumer"),X=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),Ot=Symbol.for("react.memo_cache_sentinel"),Lt=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=Lt&&e[Lt]||e["@@iterator"],typeof e=="function"?e:null)}var Xn=Symbol.for("react.client.reference");function Jt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Xn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case P:return"Profiler";case F:return"StrictMode";case ve:return"Suspense";case ue:return"SuspenseList";case vt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case X:return e.displayName||"Context";case me:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return t=e.displayName||null,t!==null?t:Jt(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return Jt(e(t))}catch{}}return null}var Gt=Array.isArray,N=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},Ee=[],_e=-1;function z(e){return{current:e}}function R(e){0>_e||(e.current=Ee[_e],Ee[_e]=null,_e--)}function Z(e,t){_e++,Ee[_e]=e.current,e.current=t}var V=z(null),le=z(null),se=z(null),be=z(null);function tt(e,t){switch(Z(se,t),Z(le,e),Z(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?R2(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=R2(t),e=j2(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}R(V),Z(V,e)}function Ge(){R(V),R(le),R(se)}function ta(e){e.memoizedState!==null&&Z(be,e);var t=V.current,n=j2(t,e.type);t!==n&&(Z(le,e),Z(V,n))}function Ia(e){le.current===e&&(R(V),R(le)),be.current===e&&(R(be),Qa._currentValue=ee)}var Sc,us;function Qn(e){if(Sc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sc=t&&t[1]||"",us=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Sc+e+us}var xc=!1;function Ec(e,t){if(!e||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(w){var T=w}Reflect.construct(e,[],M)}else{try{M.call()}catch(w){T=w}e.call(M.prototype)}}else{try{throw Error()}catch(w){T=w}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(w){if(w&&T&&typeof w.stack=="string")return[w.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],o=i[1];if(r&&o){var v=r.split(`
`),E=o.split(`
`);for(a=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;a<E.length&&!E[a].includes("DetermineComponentFrameRoot");)a++;if(l===v.length||a===E.length)for(l=v.length-1,a=E.length-1;1<=l&&0<=a&&v[l]!==E[a];)a--;for(;1<=l&&0<=a;l--,a--)if(v[l]!==E[a]){if(l!==1||a!==1)do if(l--,a--,0>a||v[l]!==E[a]){var _=`
`+v[l].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=l&&0<=a);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qn(n):""}function Z1(e,t){switch(e.tag){case 26:case 27:case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return e.child!==t&&t!==null?Qn("Suspense Fallback"):Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 15:return Ec(e.type,!1);case 11:return Ec(e.type.render,!1);case 1:return Ec(e.type,!0);case 31:return Qn("Activity");default:return""}}function ss(e){try{var t="",n=null;do t+=Z1(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ac=Object.prototype.hasOwnProperty,Tc=u.unstable_scheduleCallback,wc=u.unstable_cancelCallback,Y1=u.unstable_shouldYield,X1=u.unstable_requestPaint,ht=u.unstable_now,Q1=u.unstable_getCurrentPriorityLevel,fs=u.unstable_ImmediatePriority,rs=u.unstable_UserBlockingPriority,Pa=u.unstable_NormalPriority,V1=u.unstable_LowPriority,os=u.unstable_IdlePriority,K1=u.log,J1=u.unstable_setDisableYieldValue,na=null,mt=null;function hn(e){if(typeof K1=="function"&&J1(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(na,e)}catch{}}var gt=Math.clz32?Math.clz32:F1,k1=Math.log,$1=Math.LN2;function F1(e){return e>>>=0,e===0?32:31-(k1(e)/$1|0)|0}var ei=256,ti=262144,ni=4194304;function Vn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function li(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?a=Vn(l):(r&=o,r!==0?a=Vn(r):n||(n=o&~e,n!==0&&(a=Vn(n))))):(o=l&~i,o!==0?a=Vn(o):r!==0?a=Vn(r):n||(n=l&~e,n!==0&&(a=Vn(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function la(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function W1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ds(){var e=ni;return ni<<=1,(ni&62914560)===0&&(ni=4194304),e}function _c(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function aa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function I1(e,t,n,l,a,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,v=e.expirationTimes,E=e.hiddenUpdates;for(n=r&~n;0<n;){var _=31-gt(n),M=1<<_;o[_]=0,v[_]=-1;var T=E[_];if(T!==null)for(E[_]=null,_=0;_<T.length;_++){var w=T[_];w!==null&&(w.lane&=-536870913)}n&=~M}l!==0&&vs(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function vs(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-gt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-gt(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function ms(e,t){var n=t&-t;return n=(n&42)!==0?1:Dc(n),(n&(e.suspendedLanes|t))!==0?0:n}function Dc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Nc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gs(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:n1(e.type))}function zs(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var mn=Math.random().toString(36).slice(2),ke="__reactFiber$"+mn,it="__reactProps$"+mn,ol="__reactContainer$"+mn,Cc="__reactEvents$"+mn,P1="__reactListeners$"+mn,eo="__reactHandles$"+mn,ys="__reactResources$"+mn,ia="__reactMarker$"+mn;function Mc(e){delete e[ke],delete e[it],delete e[Cc],delete e[P1],delete e[eo]}function dl(e){var t=e[ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ol]||n[ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=L2(e);e!==null;){if(n=e[ke])return n;e=L2(e)}return t}e=n,n=e.parentNode}return null}function vl(e){if(e=e[ke]||e[ol]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ca(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function hl(e){var t=e[ys];return t||(t=e[ys]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[ia]=!0}var ps=new Set,bs={};function Kn(e,t){ml(e,t),ml(e+"Capture",t)}function ml(e,t){for(bs[e]=t,e=0;e<t.length;e++)ps.add(t[e])}var to=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ss={},xs={};function no(e){return Ac.call(xs,e)?!0:Ac.call(Ss,e)?!1:to.test(e)?xs[e]=!0:(Ss[e]=!0,!1)}function ai(e,t,n){if(no(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ii(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function kt(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function At(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Es(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lo(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rc(e){if(!e._valueTracker){var t=Es(e)?"checked":"value";e._valueTracker=lo(e,t,""+e[t])}}function As(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Es(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ao=/[\n"\\]/g;function Tt(e){return e.replace(ao,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jc(e,t,n,l,a,i,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+At(t)):e.value!==""+At(t)&&(e.value=""+At(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Uc(e,r,At(t)):n!=null?Uc(e,r,At(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+At(o):e.removeAttribute("name")}function Ts(e,t,n,l,a,i,r,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Rc(e);return}n=n!=null?""+At(n):"",t=t!=null?""+At(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Rc(e)}function Uc(e,t,n){t==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function gl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+At(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ws(e,t,n){if(t!=null&&(t=""+At(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+At(n):""}function _s(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(s(92));if(Gt(l)){if(1<l.length)throw Error(s(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=At(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Rc(e)}function zl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var io=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ds(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||io.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ns(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&Ds(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&Ds(e,i,t[i])}function Oc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var co=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ui(e){return uo.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $t(){}var Gc=null;function Hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,pl=null;function Cs(e){var t=vl(e);if(t&&(e=t.stateNode)){var n=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(jc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Tt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[it]||null;if(!a)throw Error(s(90));jc(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&As(l)}break e;case"textarea":ws(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&gl(e,!!n.multiple,t,!1)}}}var qc=!1;function Ms(e,t,n){if(qc)return e(t,n);qc=!0;try{var l=e(t);return l}finally{if(qc=!1,(yl!==null||pl!==null)&&(ki(),yl&&(t=yl,e=pl,pl=yl=null,Cs(t),e)))for(t=0;t<e.length;t++)Cs(e[t])}}function ua(e,t){var n=e.stateNode;if(n===null)return null;var l=n[it]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(Ft)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{Bc=!1}var gn=null,Lc=null,si=null;function Rs(){if(si)return si;var e,t=Lc,n=t.length,l,a="value"in gn?gn.value:gn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===a[i-l];l++);return si=a.slice(e,1<l?1-l:void 0)}function fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ri(){return!0}function js(){return!1}function ct(e){function t(n,l,a,i,r){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ri:js,this.isPropagationStopped=js,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=ct(Jn),fa=O({},Jn,{view:0,detail:0}),so=ct(fa),Zc,Yc,ra,di=O({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ra&&(ra&&e.type==="mousemove"?(Zc=e.screenX-ra.screenX,Yc=e.screenY-ra.screenY):Yc=Zc=0,ra=e),Zc)},movementY:function(e){return"movementY"in e?e.movementY:Yc}}),Us=ct(di),fo=O({},di,{dataTransfer:0}),ro=ct(fo),oo=O({},fa,{relatedTarget:0}),Xc=ct(oo),vo=O({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),ho=ct(vo),mo=O({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),go=ct(mo),zo=O({},Jn,{data:0}),Os=ct(zo),yo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},po={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function So(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bo[e])?!!t[e]:!1}function Qc(){return So}var xo=O({},fa,{key:function(e){if(e.key){var t=yo[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?po[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eo=ct(xo),Ao=O({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gs=ct(Ao),To=O({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),wo=ct(To),_o=O({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Do=ct(_o),No=O({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Co=ct(No),Mo=O({},Jn,{newState:0,oldState:0}),Ro=ct(Mo),jo=[9,13,27,32],Vc=Ft&&"CompositionEvent"in window,oa=null;Ft&&"documentMode"in document&&(oa=document.documentMode);var Uo=Ft&&"TextEvent"in window&&!oa,Hs=Ft&&(!Vc||oa&&8<oa&&11>=oa),qs=" ",Bs=!1;function Ls(e,t){switch(e){case"keyup":return jo.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bl=!1;function Oo(e,t){switch(e){case"compositionend":return Zs(t);case"keypress":return t.which!==32?null:(Bs=!0,qs);case"textInput":return e=t.data,e===qs&&Bs?null:e;default:return null}}function Go(e,t){if(bl)return e==="compositionend"||!Vc&&Ls(e,t)?(e=Rs(),si=Lc=gn=null,bl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hs&&t.locale!=="ko"?null:t.data;default:return null}}var Ho={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ho[e.type]:t==="textarea"}function Xs(e,t,n,l){yl?pl?pl.push(l):pl=[l]:yl=l,t=tc(t,"onChange"),0<t.length&&(n=new oi("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var da=null,va=null;function qo(e){w2(e,0)}function vi(e){var t=ca(e);if(As(t))return e}function Qs(e,t){if(e==="change")return t}var Vs=!1;if(Ft){var Kc;if(Ft){var Jc="oninput"in document;if(!Jc){var Ks=document.createElement("div");Ks.setAttribute("oninput","return;"),Jc=typeof Ks.oninput=="function"}Kc=Jc}else Kc=!1;Vs=Kc&&(!document.documentMode||9<document.documentMode)}function Js(){da&&(da.detachEvent("onpropertychange",ks),va=da=null)}function ks(e){if(e.propertyName==="value"&&vi(va)){var t=[];Xs(t,va,e,Hc(e)),Ms(qo,t)}}function Bo(e,t,n){e==="focusin"?(Js(),da=t,va=n,da.attachEvent("onpropertychange",ks)):e==="focusout"&&Js()}function Lo(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(va)}function Zo(e,t){if(e==="click")return vi(t)}function Yo(e,t){if(e==="input"||e==="change")return vi(t)}function Xo(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Xo;function ha(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Ac.call(t,a)||!zt(e[a],t[a]))return!1}return!0}function $s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,t){var n=$s(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$s(n)}}function Ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Is(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ci(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ci(e.document)}return t}function kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Qo=Ft&&"documentMode"in document&&11>=document.documentMode,Sl=null,$c=null,ma=null,Fc=!1;function Ps(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||Sl==null||Sl!==ci(l)||(l=Sl,"selectionStart"in l&&kc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ma&&ha(ma,l)||(ma=l,l=tc($c,"onSelect"),0<l.length&&(t=new oi("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Sl)))}function kn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xl={animationend:kn("Animation","AnimationEnd"),animationiteration:kn("Animation","AnimationIteration"),animationstart:kn("Animation","AnimationStart"),transitionrun:kn("Transition","TransitionRun"),transitionstart:kn("Transition","TransitionStart"),transitioncancel:kn("Transition","TransitionCancel"),transitionend:kn("Transition","TransitionEnd")},Wc={},ef={};Ft&&(ef=document.createElement("div").style,"AnimationEvent"in window||(delete xl.animationend.animation,delete xl.animationiteration.animation,delete xl.animationstart.animation),"TransitionEvent"in window||delete xl.transitionend.transition);function $n(e){if(Wc[e])return Wc[e];if(!xl[e])return e;var t=xl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ef)return Wc[e]=t[n];return e}var tf=$n("animationend"),nf=$n("animationiteration"),lf=$n("animationstart"),Vo=$n("transitionrun"),Ko=$n("transitionstart"),Jo=$n("transitioncancel"),af=$n("transitionend"),cf=new Map,Ic="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ic.push("scrollEnd");function Ht(e,t){cf.set(e,t),Kn(t,[e])}var hi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],El=0,Pc=0;function mi(){for(var e=El,t=Pc=El=0;t<e;){var n=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var a=wt[t];wt[t++]=null;var i=wt[t];if(wt[t++]=null,l!==null&&a!==null){var r=l.pending;r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a}i!==0&&uf(n,a,i)}}function gi(e,t,n,l){wt[El++]=e,wt[El++]=t,wt[El++]=n,wt[El++]=l,Pc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function e0(e,t,n,l){return gi(e,t,n,l),zi(e)}function Fn(e,t){return gi(e,null,null,t),zi(e)}function uf(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-gt(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function zi(e){if(50<Ha)throw Ha=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Al={};function ko(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,l){return new ko(e,t,n,l)}function t0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function sf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,l,a,i){var r=0;if(l=e,typeof e=="function")t0(e)&&(r=1);else if(typeof e=="string")r=P3(e,n,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case vt:return e=yt(31,n,t,a),e.elementType=vt,e.lanes=i,e;case G:return Wn(n.children,a,i,t);case F:r=8,a|=24;break;case P:return e=yt(12,n,t,a|2),e.elementType=P,e.lanes=i,e;case ve:return e=yt(13,n,t,a),e.elementType=ve,e.lanes=i,e;case ue:return e=yt(19,n,t,a),e.elementType=ue,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:r=10;break e;case me:r=9;break e;case $:r=11;break e;case ne:r=14;break e;case ce:r=16,l=null;break e}r=29,n=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=yt(r,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function Wn(e,t,n,l){return e=yt(7,e,l,t),e.lanes=n,e}function n0(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function ff(e){var t=yt(18,null,null,0);return t.stateNode=e,t}function l0(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rf=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var n=rf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ss(t)},rf.set(e,t),t)}return{value:e,source:t,stack:ss(t)}}var Tl=[],wl=0,pi=null,ga=0,Dt=[],Nt=0,zn=null,Zt=1,Yt="";function It(e,t){Tl[wl++]=ga,Tl[wl++]=pi,pi=e,ga=t}function of(e,t,n){Dt[Nt++]=Zt,Dt[Nt++]=Yt,Dt[Nt++]=zn,zn=e;var l=Zt;e=Yt;var a=32-gt(l)-1;l&=~(1<<a),n+=1;var i=32-gt(t)+a;if(30<i){var r=a-a%5;i=(l&(1<<r)-1).toString(32),l>>=r,a-=r,Zt=1<<32-gt(t)+a|n<<a|l,Yt=i+e}else Zt=1<<i|n<<a|l,Yt=e}function a0(e){e.return!==null&&(It(e,1),of(e,1,0))}function i0(e){for(;e===pi;)pi=Tl[--wl],Tl[wl]=null,ga=Tl[--wl],Tl[wl]=null;for(;e===zn;)zn=Dt[--Nt],Dt[Nt]=null,Yt=Dt[--Nt],Dt[Nt]=null,Zt=Dt[--Nt],Dt[Nt]=null}function df(e,t){Dt[Nt++]=Zt,Dt[Nt++]=Yt,Dt[Nt++]=zn,Zt=t.id,Yt=t.overflow,zn=e}var $e=null,Ce=null,he=!1,yn=null,Ct=!1,c0=Error(s(519));function pn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw za(_t(t,e)),c0}function vf(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ke]=e,t[it]=l,n){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(n=0;n<Ba.length;n++)re(Ba[n],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),Ts(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),_s(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||C2(t.textContent,n)?(l.popover!=null&&(re("beforetoggle",t),re("toggle",t)),l.onScroll!=null&&re("scroll",t),l.onScrollEnd!=null&&re("scrollend",t),l.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||pn(e,!0)}function hf(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:$e=$e.return}}function _l(e){if(e!==$e)return!1;if(!he)return hf(e),he=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Au(e.type,e.memoizedProps)),n=!n),n&&Ce&&pn(e),hf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ce=B2(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ce=B2(e)}else t===27?(t=Ce,jn(e.type)?(e=Nu,Nu=null,Ce=e):Ce=t):Ce=$e?Rt(e.stateNode.nextSibling):null;return!0}function In(){Ce=$e=null,he=!1}function u0(){var e=yn;return e!==null&&(rt===null?rt=e:rt.push.apply(rt,e),yn=null),e}function za(e){yn===null?yn=[e]:yn.push(e)}var s0=z(null),Pn=null,Pt=null;function bn(e,t,n){Z(s0,t._currentValue),t._currentValue=n}function en(e){e._currentValue=s0.current,R(s0)}function f0(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function r0(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var r=a.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=a;for(var v=0;v<t.length;v++)if(o.context===t[v]){i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),f0(i.return,n,e),l||(r=null);break e}i=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(s(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),f0(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Dl(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(s(387));if(r=r.memoizedProps,r!==null){var o=a.type;zt(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===be.current){if(r=a.alternate,r===null)throw Error(s(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Qa):e=[Qa])}a=a.return}e!==null&&r0(t,e,n,l),t.flags|=262144}function bi(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function el(e){Pn=e,Pt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return mf(Pn,e)}function Si(e,t){return Pn===null&&el(e),mf(e,t)}function mf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Pt===null){if(e===null)throw Error(s(308));Pt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Pt=Pt.next=t;return n}var $o=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Fo=u.unstable_scheduleCallback,Wo=u.unstable_NormalPriority,Be={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function o0(){return{controller:new $o,data:new Map,refCount:0}}function ya(e){e.refCount--,e.refCount===0&&Fo(Wo,function(){e.controller.abort()})}var pa=null,d0=0,Nl=0,Cl=null;function Io(e,t){if(pa===null){var n=pa=[];d0=0,Nl=mu(),Cl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return d0++,t.then(gf,gf),t}function gf(){if(--d0===0&&pa!==null){Cl!==null&&(Cl.status="fulfilled");var e=pa;pa=null,Nl=0,Cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Po(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var zf=N.S;N.S=function(e,t){e2=ht(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Io(e,t),zf!==null&&zf(e,t)};var tl=z(null);function v0(){var e=tl.current;return e!==null?e:De.pooledCache}function xi(e,t){t===null?Z(tl,tl.current):Z(tl,t.pool)}function yf(){var e=v0();return e===null?null:{parent:Be._currentValue,pool:e}}var Ml=Error(s(460)),h0=Error(s(474)),Ei=Error(s(542)),Ai={then:function(){}};function pf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xf(e),e;default:if(typeof t.status=="string")t.then($t,$t);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xf(e),e}throw ll=t,Ml}}function nl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ll=n,Ml):n}}var ll=null;function Sf(){if(ll===null)throw Error(s(459));var e=ll;return ll=null,e}function xf(e){if(e===Ml||e===Ei)throw Error(s(483))}var Rl=null,ba=0;function Ti(e){var t=ba;return ba+=1,Rl===null&&(Rl=[]),bf(Rl,e,t)}function Sa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wi(e,t){throw t.$$typeof===q?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ef(e){function t(S,g){if(e){var x=S.deletions;x===null?(S.deletions=[g],S.flags|=16):x.push(g)}}function n(S,g){if(!e)return null;for(;g!==null;)t(S,g),g=g.sibling;return null}function l(S){for(var g=new Map;S!==null;)S.key!==null?g.set(S.key,S):g.set(S.index,S),S=S.sibling;return g}function a(S,g){return S=Wt(S,g),S.index=0,S.sibling=null,S}function i(S,g,x){return S.index=x,e?(x=S.alternate,x!==null?(x=x.index,x<g?(S.flags|=67108866,g):x):(S.flags|=67108866,g)):(S.flags|=1048576,g)}function r(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function o(S,g,x,C){return g===null||g.tag!==6?(g=n0(x,S.mode,C),g.return=S,g):(g=a(g,x),g.return=S,g)}function v(S,g,x,C){var k=x.type;return k===G?_(S,g,x.props.children,C,x.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ce&&nl(k)===g.type)?(g=a(g,x.props),Sa(g,x),g.return=S,g):(g=yi(x.type,x.key,x.props,null,S.mode,C),Sa(g,x),g.return=S,g)}function E(S,g,x,C){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=l0(x,S.mode,C),g.return=S,g):(g=a(g,x.children||[]),g.return=S,g)}function _(S,g,x,C,k){return g===null||g.tag!==7?(g=Wn(x,S.mode,C,k),g.return=S,g):(g=a(g,x),g.return=S,g)}function M(S,g,x){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=n0(""+g,S.mode,x),g.return=S,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case J:return x=yi(g.type,g.key,g.props,null,S.mode,x),Sa(x,g),x.return=S,x;case Y:return g=l0(g,S.mode,x),g.return=S,g;case ce:return g=nl(g),M(S,g,x)}if(Gt(g)||at(g))return g=Wn(g,S.mode,x,null),g.return=S,g;if(typeof g.then=="function")return M(S,Ti(g),x);if(g.$$typeof===X)return M(S,Si(S,g),x);wi(S,g)}return null}function T(S,g,x,C){var k=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return k!==null?null:o(S,g,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case J:return x.key===k?v(S,g,x,C):null;case Y:return x.key===k?E(S,g,x,C):null;case ce:return x=nl(x),T(S,g,x,C)}if(Gt(x)||at(x))return k!==null?null:_(S,g,x,C,null);if(typeof x.then=="function")return T(S,g,Ti(x),C);if(x.$$typeof===X)return T(S,g,Si(S,x),C);wi(S,x)}return null}function w(S,g,x,C,k){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return S=S.get(x)||null,o(g,S,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case J:return S=S.get(C.key===null?x:C.key)||null,v(g,S,C,k);case Y:return S=S.get(C.key===null?x:C.key)||null,E(g,S,C,k);case ce:return C=nl(C),w(S,g,x,C,k)}if(Gt(C)||at(C))return S=S.get(x)||null,_(g,S,C,k,null);if(typeof C.then=="function")return w(S,g,x,Ti(C),k);if(C.$$typeof===X)return w(S,g,x,Si(g,C),k);wi(g,C)}return null}function Q(S,g,x,C){for(var k=null,ge=null,K=g,ie=g=0,de=null;K!==null&&ie<x.length;ie++){K.index>ie?(de=K,K=null):de=K.sibling;var ze=T(S,K,x[ie],C);if(ze===null){K===null&&(K=de);break}e&&K&&ze.alternate===null&&t(S,K),g=i(ze,g,ie),ge===null?k=ze:ge.sibling=ze,ge=ze,K=de}if(ie===x.length)return n(S,K),he&&It(S,ie),k;if(K===null){for(;ie<x.length;ie++)K=M(S,x[ie],C),K!==null&&(g=i(K,g,ie),ge===null?k=K:ge.sibling=K,ge=K);return he&&It(S,ie),k}for(K=l(K);ie<x.length;ie++)de=w(K,S,ie,x[ie],C),de!==null&&(e&&de.alternate!==null&&K.delete(de.key===null?ie:de.key),g=i(de,g,ie),ge===null?k=de:ge.sibling=de,ge=de);return e&&K.forEach(function(qn){return t(S,qn)}),he&&It(S,ie),k}function W(S,g,x,C){if(x==null)throw Error(s(151));for(var k=null,ge=null,K=g,ie=g=0,de=null,ze=x.next();K!==null&&!ze.done;ie++,ze=x.next()){K.index>ie?(de=K,K=null):de=K.sibling;var qn=T(S,K,ze.value,C);if(qn===null){K===null&&(K=de);break}e&&K&&qn.alternate===null&&t(S,K),g=i(qn,g,ie),ge===null?k=qn:ge.sibling=qn,ge=qn,K=de}if(ze.done)return n(S,K),he&&It(S,ie),k;if(K===null){for(;!ze.done;ie++,ze=x.next())ze=M(S,ze.value,C),ze!==null&&(g=i(ze,g,ie),ge===null?k=ze:ge.sibling=ze,ge=ze);return he&&It(S,ie),k}for(K=l(K);!ze.done;ie++,ze=x.next())ze=w(K,S,ie,ze.value,C),ze!==null&&(e&&ze.alternate!==null&&K.delete(ze.key===null?ie:ze.key),g=i(ze,g,ie),ge===null?k=ze:ge.sibling=ze,ge=ze);return e&&K.forEach(function(r5){return t(S,r5)}),he&&It(S,ie),k}function we(S,g,x,C){if(typeof x=="object"&&x!==null&&x.type===G&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case J:e:{for(var k=x.key;g!==null;){if(g.key===k){if(k=x.type,k===G){if(g.tag===7){n(S,g.sibling),C=a(g,x.props.children),C.return=S,S=C;break e}}else if(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ce&&nl(k)===g.type){n(S,g.sibling),C=a(g,x.props),Sa(C,x),C.return=S,S=C;break e}n(S,g);break}else t(S,g);g=g.sibling}x.type===G?(C=Wn(x.props.children,S.mode,C,x.key),C.return=S,S=C):(C=yi(x.type,x.key,x.props,null,S.mode,C),Sa(C,x),C.return=S,S=C)}return r(S);case Y:e:{for(k=x.key;g!==null;){if(g.key===k)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(S,g.sibling),C=a(g,x.children||[]),C.return=S,S=C;break e}else{n(S,g);break}else t(S,g);g=g.sibling}C=l0(x,S.mode,C),C.return=S,S=C}return r(S);case ce:return x=nl(x),we(S,g,x,C)}if(Gt(x))return Q(S,g,x,C);if(at(x)){if(k=at(x),typeof k!="function")throw Error(s(150));return x=k.call(x),W(S,g,x,C)}if(typeof x.then=="function")return we(S,g,Ti(x),C);if(x.$$typeof===X)return we(S,g,Si(S,x),C);wi(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,g!==null&&g.tag===6?(n(S,g.sibling),C=a(g,x),C.return=S,S=C):(n(S,g),C=n0(x,S.mode,C),C.return=S,S=C),r(S)):n(S,g)}return function(S,g,x,C){try{ba=0;var k=we(S,g,x,C);return Rl=null,k}catch(K){if(K===Ml||K===Ei)throw K;var ge=yt(29,K,null,S.mode);return ge.lanes=C,ge.return=S,ge}}}var al=Ef(!0),Af=Ef(!1),Sn=!1;function m0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function g0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ye&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=zi(e),uf(e,null,n),t}return gi(e,l,t,n),zi(e)}function xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,hs(e,n)}}function z0(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var y0=!1;function Ea(){if(y0){var e=Cl;if(e!==null)throw e}}function Aa(e,t,n,l){y0=!1;var a=e.updateQueue;Sn=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var v=o,E=v.next;v.next=null,r===null?i=E:r.next=E,r=v;var _=e.alternate;_!==null&&(_=_.updateQueue,o=_.lastBaseUpdate,o!==r&&(o===null?_.firstBaseUpdate=E:o.next=E,_.lastBaseUpdate=v))}if(i!==null){var M=a.baseState;r=0,_=E=v=null,o=i;do{var T=o.lane&-536870913,w=T!==o.lane;if(w?(oe&T)===T:(l&T)===T){T!==0&&T===Nl&&(y0=!0),_!==null&&(_=_.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var Q=e,W=o;T=t;var we=n;switch(W.tag){case 1:if(Q=W.payload,typeof Q=="function"){M=Q.call(we,M,T);break e}M=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=W.payload,T=typeof Q=="function"?Q.call(we,M,T):Q,T==null)break e;M=O({},M,T);break e;case 2:Sn=!0}}T=o.callback,T!==null&&(e.flags|=64,w&&(e.flags|=8192),w=a.callbacks,w===null?a.callbacks=[T]:w.push(T))}else w={lane:T,tag:o.tag,payload:o.payload,callback:o.callback,next:null},_===null?(E=_=w,v=M):_=_.next=w,r|=T;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;w=o,o=w.next,w.next=null,a.lastBaseUpdate=w,a.shared.pending=null}}while(!0);_===null&&(v=M),a.baseState=v,a.firstBaseUpdate=E,a.lastBaseUpdate=_,i===null&&(a.shared.lanes=0),Dn|=r,e.lanes=r,e.memoizedState=M}}function Tf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function wf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Tf(n[e],t)}var jl=z(null),_i=z(0);function _f(e,t){e=rn,Z(_i,e),Z(jl,t),rn=e|t.baseLanes}function p0(){Z(_i,rn),Z(jl,jl.current)}function b0(){rn=_i.current,R(jl),R(_i)}var pt=z(null),Mt=null;function An(e){var t=e.alternate;Z(He,He.current&1),Z(pt,e),Mt===null&&(t===null||jl.current!==null||t.memoizedState!==null)&&(Mt=e)}function S0(e){Z(He,He.current),Z(pt,e),Mt===null&&(Mt=e)}function Df(e){e.tag===22?(Z(He,He.current),Z(pt,e),Mt===null&&(Mt=e)):Tn()}function Tn(){Z(He,He.current),Z(pt,pt.current)}function bt(e){R(pt),Mt===e&&(Mt=null),R(He)}var He=z(0);function Di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||_u(n)||Du(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tn=0,ae=null,Ae=null,Le=null,Ni=!1,Ul=!1,il=!1,Ci=0,Ta=0,Ol=null,e3=0;function Ue(){throw Error(s(321))}function x0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function E0(e,t,n,l,a,i){return tn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?or:q0,il=!1,i=n(l,a),il=!1,Ul&&(i=Cf(t,n,l,a)),Nf(e),i}function Nf(e){N.H=Da;var t=Ae!==null&&Ae.next!==null;if(tn=0,Le=Ae=ae=null,Ni=!1,Ta=0,Ol=null,t)throw Error(s(300));e===null||Ze||(e=e.dependencies,e!==null&&bi(e)&&(Ze=!0))}function Cf(e,t,n,l){ae=e;var a=0;do{if(Ul&&(Ol=null),Ta=0,Ul=!1,25<=a)throw Error(s(301));if(a+=1,Le=Ae=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}N.H=dr,i=t(n,l)}while(Ul);return i}function t3(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?wa(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(ae.flags|=1024),t}function A0(){var e=Ci!==0;return Ci=0,e}function T0(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function w0(e){if(Ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ni=!1}tn=0,Le=Ae=ae=null,Ul=!1,Ta=Ci=0,Ol=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ae.memoizedState=Le=e:Le=Le.next=e,Le}function qe(){if(Ae===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Le===null?ae.memoizedState:Le.next;if(t!==null)Le=t,Ae=e;else{if(e===null)throw ae.alternate===null?Error(s(467)):Error(s(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Le===null?ae.memoizedState=Le=e:Le=Le.next=e}return Le}function Mi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wa(e){var t=Ta;return Ta+=1,Ol===null&&(Ol=[]),e=bf(Ol,e,t),t=ae,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?or:q0),e}function Ri(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wa(e);if(e.$$typeof===X)return Fe(e)}throw Error(s(438,String(e)))}function _0(e){var t=null,n=ae.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Mi(),ae.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Ot;return t.index++,n}function nn(e,t){return typeof t=="function"?t(e):t}function ji(e){var t=qe();return D0(t,Ae,e)}function D0(e,t,n){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var o=r=null,v=null,E=t,_=!1;do{var M=E.lane&-536870913;if(M!==E.lane?(oe&M)===M:(tn&M)===M){var T=E.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),M===Nl&&(_=!0);else if((tn&T)===T){E=E.next,T===Nl&&(_=!0);continue}else M={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(o=v=M,r=i):v=v.next=M,ae.lanes|=T,Dn|=T;M=E.action,il&&n(i,M),i=E.hasEagerState?E.eagerState:n(i,M)}else T={lane:M,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(o=v=T,r=i):v=v.next=T,ae.lanes|=M,Dn|=M;E=E.next}while(E!==null&&E!==t);if(v===null?r=i:v.next=o,!zt(i,e.memoizedState)&&(Ze=!0,_&&(n=Cl,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=v,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function N0(e){var t=qe(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);zt(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function Mf(e,t,n){var l=ae,a=qe(),i=he;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var r=!zt((Ae||a).memoizedState,n);if(r&&(a.memoizedState=n,Ze=!0),a=a.queue,R0(Uf.bind(null,l,a,e),[e]),a.getSnapshot!==t||r||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,Gl(9,{destroy:void 0},jf.bind(null,l,a,n,t),null),De===null)throw Error(s(349));i||(tn&127)!==0||Rf(l,t,n)}return n}function Rf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t=Mi(),ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jf(e,t,n,l){t.value=n,t.getSnapshot=l,Of(t)&&Gf(e)}function Uf(e,t,n){return n(function(){Of(t)&&Gf(e)})}function Of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Gf(e){var t=Fn(e,2);t!==null&&ot(t,e,2)}function C0(e){var t=nt();if(typeof e=="function"){var n=e;if(e=n(),il){hn(!0);try{n()}finally{hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:e},t}function Hf(e,t,n,l){return e.baseState=n,D0(e,Ae,typeof l=="function"?l:nn)}function n3(e,t,n,l,a){if(Gi(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};N.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,qf(t,i)):(i.next=n.next,t.pending=n.next=i)}}function qf(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=N.T,r={};N.T=r;try{var o=n(a,l),v=N.S;v!==null&&v(r,o),Bf(e,t,o)}catch(E){M0(e,t,E)}finally{i!==null&&r.types!==null&&(i.types=r.types),N.T=i}}else try{i=n(a,l),Bf(e,t,i)}catch(E){M0(e,t,E)}}function Bf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Lf(e,t,l)},function(l){return M0(e,t,l)}):Lf(e,t,n)}function Lf(e,t,n){t.status="fulfilled",t.value=n,Zf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qf(e,n)))}function M0(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Zf(t),t=t.next;while(t!==l)}e.action=null}function Zf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yf(e,t){return t}function Xf(e,t){if(he){var n=De.formState;if(n!==null){e:{var l=ae;if(he){if(Ce){t:{for(var a=Ce,i=Ct;a.nodeType!==8;){if(!i){a=null;break t}if(a=Rt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Ce=Rt(a.nextSibling),l=a.data==="F!";break e}}pn(l)}l=!1}l&&(t=n[0])}}return n=nt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yf,lastRenderedState:t},n.queue=l,n=sr.bind(null,ae,l),l.dispatch=n,l=C0(!1),i=H0.bind(null,ae,!1,l.queue),l=nt(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=n3.bind(null,ae,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function Qf(e){var t=qe();return Vf(t,Ae,e)}function Vf(e,t,n){if(t=D0(e,t,Yf)[0],e=ji(nn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=wa(t)}catch(r){throw r===Ml?Ei:r}else l=t;t=qe();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(ae.flags|=2048,Gl(9,{destroy:void 0},l3.bind(null,a,n),null)),[l,i,e]}function l3(e,t){e.action=t}function Kf(e){var t=qe(),n=Ae;if(n!==null)return Vf(t,n,e);qe(),t=t.memoizedState,n=qe();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Gl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=Mi(),ae.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Jf(){return qe().memoizedState}function Ui(e,t,n,l){var a=nt();ae.flags|=e,a.memoizedState=Gl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Oi(e,t,n,l){var a=qe();l=l===void 0?null:l;var i=a.memoizedState.inst;Ae!==null&&l!==null&&x0(l,Ae.memoizedState.deps)?a.memoizedState=Gl(t,i,n,l):(ae.flags|=e,a.memoizedState=Gl(1|t,i,n,l))}function kf(e,t){Ui(8390656,8,e,t)}function R0(e,t){Oi(2048,8,e,t)}function a3(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=Mi(),ae.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function $f(e){var t=qe().memoizedState;return a3({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Ff(e,t){return Oi(4,2,e,t)}function Wf(e,t){return Oi(4,4,e,t)}function If(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pf(e,t,n){n=n!=null?n.concat([e]):null,Oi(4,4,If.bind(null,t,e),n)}function j0(){}function er(e,t){var n=qe();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&x0(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function tr(e,t){var n=qe();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&x0(t,l[1]))return l[0];if(l=e(),il){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[l,t],l}function U0(e,t,n){return n===void 0||(tn&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=n2(),ae.lanes|=e,Dn|=e,n)}function nr(e,t,n,l){return zt(n,t)?n:jl.current!==null?(e=U0(e,n,l),zt(e,t)||(Ze=!0),e):(tn&42)===0||(tn&1073741824)!==0&&(oe&261930)===0?(Ze=!0,e.memoizedState=n):(e=n2(),ae.lanes|=e,Dn|=e,t)}function lr(e,t,n,l,a){var i=L.p;L.p=i!==0&&8>i?i:8;var r=N.T,o={};N.T=o,H0(e,!1,t,n);try{var v=a(),E=N.S;if(E!==null&&E(o,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var _=Po(v,l);_a(e,t,_,Et(e))}else _a(e,t,l,Et(e))}catch(M){_a(e,t,{then:function(){},status:"rejected",reason:M},Et())}finally{L.p=i,r!==null&&o.types!==null&&(r.types=o.types),N.T=r}}function i3(){}function O0(e,t,n,l){if(e.tag!==5)throw Error(s(476));var a=ar(e).queue;lr(e,a,t,ee,n===null?i3:function(){return ir(e),n(l)})}function ar(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ir(e){var t=ar(e);t.next===null&&(t=e.alternate.memoizedState),_a(e,t.next.queue,{},Et())}function G0(){return Fe(Qa)}function cr(){return qe().memoizedState}function ur(){return qe().memoizedState}function c3(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Et();e=xn(n);var l=En(t,e,n);l!==null&&(ot(l,t,n),xa(l,t,n)),t={cache:o0()},e.payload=t;return}t=t.return}}function u3(e,t,n){var l=Et();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Gi(e)?fr(t,n):(n=e0(e,t,n,l),n!==null&&(ot(n,e,l),rr(n,t,l)))}function sr(e,t,n){var l=Et();_a(e,t,n,l)}function _a(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gi(e))fr(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,o=i(r,n);if(a.hasEagerState=!0,a.eagerState=o,zt(o,r))return gi(e,t,a,0),De===null&&mi(),!1}catch{}if(n=e0(e,t,a,l),n!==null)return ot(n,e,l),rr(n,t,l),!0}return!1}function H0(e,t,n,l){if(l={lane:2,revertLane:mu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Gi(e)){if(t)throw Error(s(479))}else t=e0(e,n,l,2),t!==null&&ot(t,e,2)}function Gi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function fr(e,t){Ul=Ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rr(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,hs(e,n)}}var Da={readContext:Fe,use:Ri,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};Da.useEffectEvent=Ue;var or={readContext:Fe,use:Ri,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:kf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ui(4194308,4,If.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var n=nt();t=t===void 0?null:t;var l=e();if(il){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=nt();if(n!==void 0){var a=n(t);if(il){hn(!0);try{n(t)}finally{hn(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=u3.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=C0(e);var t=e.queue,n=sr.bind(null,ae,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:j0,useDeferredValue:function(e,t){var n=nt();return U0(n,e,t)},useTransition:function(){var e=C0(!1);return e=lr.bind(null,ae,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ae,a=nt();if(he){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),De===null)throw Error(s(349));(oe&127)!==0||Rf(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,kf(Uf.bind(null,l,i,e),[e]),l.flags|=2048,Gl(9,{destroy:void 0},jf.bind(null,l,i,n,t),null),n},useId:function(){var e=nt(),t=De.identifierPrefix;if(he){var n=Yt,l=Zt;n=(l&~(1<<32-gt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ci++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=e3++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:G0,useFormState:Xf,useActionState:Xf,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=H0.bind(null,ae,!0,n),n.dispatch=t,[e,t]},useMemoCache:_0,useCacheRefresh:function(){return nt().memoizedState=c3.bind(null,ae)},useEffectEvent:function(e){var t=nt(),n={impl:e};return t.memoizedState=n,function(){if((ye&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},q0={readContext:Fe,use:Ri,useCallback:er,useContext:Fe,useEffect:R0,useImperativeHandle:Pf,useInsertionEffect:Ff,useLayoutEffect:Wf,useMemo:tr,useReducer:ji,useRef:Jf,useState:function(){return ji(nn)},useDebugValue:j0,useDeferredValue:function(e,t){var n=qe();return nr(n,Ae.memoizedState,e,t)},useTransition:function(){var e=ji(nn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:wa(e),t]},useSyncExternalStore:Mf,useId:cr,useHostTransitionStatus:G0,useFormState:Qf,useActionState:Qf,useOptimistic:function(e,t){var n=qe();return Hf(n,Ae,e,t)},useMemoCache:_0,useCacheRefresh:ur};q0.useEffectEvent=$f;var dr={readContext:Fe,use:Ri,useCallback:er,useContext:Fe,useEffect:R0,useImperativeHandle:Pf,useInsertionEffect:Ff,useLayoutEffect:Wf,useMemo:tr,useReducer:N0,useRef:Jf,useState:function(){return N0(nn)},useDebugValue:j0,useDeferredValue:function(e,t){var n=qe();return Ae===null?U0(n,e,t):nr(n,Ae.memoizedState,e,t)},useTransition:function(){var e=N0(nn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:wa(e),t]},useSyncExternalStore:Mf,useId:cr,useHostTransitionStatus:G0,useFormState:Kf,useActionState:Kf,useOptimistic:function(e,t){var n=qe();return Ae!==null?Hf(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:_0,useCacheRefresh:ur};dr.useEffectEvent=$f;function B0(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var L0={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Et(),a=xn(l);a.payload=t,n!=null&&(a.callback=n),t=En(e,a,l),t!==null&&(ot(t,e,l),xa(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Et(),a=xn(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=En(e,a,l),t!==null&&(ot(t,e,l),xa(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),l=xn(n);l.tag=2,t!=null&&(l.callback=t),t=En(e,l,n),t!==null&&(ot(t,e,n),xa(t,e,n))}};function vr(e,t,n,l,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!ha(n,l)||!ha(a,i):!0}function hr(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&L0.enqueueReplaceState(t,t.state,null)}function cl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=O({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function mr(e){hi(e)}function gr(e){console.error(e)}function zr(e){hi(e)}function Hi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function yr(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Z0(e,t,n){return n=xn(n),n.tag=3,n.payload={element:null},n.callback=function(){Hi(e,t)},n}function pr(e){return e=xn(e),e.tag=3,e}function br(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){yr(t,n,l)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){yr(t,n,l),typeof a!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function s3(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Dl(t,n,a,!0),n=pt.current,n!==null){switch(n.tag){case 31:case 13:return Mt===null?$i():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Ai?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),du(e,l,a)),!1;case 22:return n.flags|=65536,l===Ai?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),du(e,l,a)),!1}throw Error(s(435,n.tag))}return du(e,l,a),$i(),!1}if(he)return t=pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==c0&&(e=Error(s(422),{cause:l}),za(_t(e,n)))):(l!==c0&&(t=Error(s(423),{cause:l}),za(_t(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=_t(l,n),a=Z0(e.stateNode,l,a),z0(e,a),Oe!==4&&(Oe=2)),!1;var i=Error(s(520),{cause:l});if(i=_t(i,n),Ga===null?Ga=[i]:Ga.push(i),Oe!==4&&(Oe=2),t===null)return!0;l=_t(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Z0(n.stateNode,l,e),z0(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Nn===null||!Nn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=pr(a),br(a,e,n,l),z0(n,a),!1}n=n.return}while(n!==null);return!1}var Y0=Error(s(461)),Ze=!1;function We(e,t,n,l){t.child=e===null?Af(t,null,n,l):al(t,e.child,n,l)}function Sr(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var r={};for(var o in l)o!=="ref"&&(r[o]=l[o])}else r=l;return el(t),l=E0(e,t,n,r,i,a),o=A0(),e!==null&&!Ze?(T0(e,t,a),ln(e,t,a)):(he&&o&&a0(t),t.flags|=1,We(e,t,l,a),t.child)}function xr(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!t0(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Er(e,t,i,l,a)):(e=yi(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!F0(e,a)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(r,l)&&e.ref===t.ref)return ln(e,t,a)}return t.flags|=1,e=Wt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Er(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(ha(i,l)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=l=i,F0(e,a))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,ln(e,t,a)}return X0(e,t,n,l,a)}function Ar(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Tr(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xi(t,i!==null?i.cachePool:null),i!==null?_f(t,i):p0(),Df(t);else return l=t.lanes=536870912,Tr(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(xi(t,i.cachePool),_f(t,i),Tn(),t.memoizedState=null):(e!==null&&xi(t,null),p0(),Tn());return We(e,t,a,n),t.child}function Na(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Tr(e,t,n,l,a){var i=v0();return i=i===null?null:{parent:Be._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&xi(t,null),p0(),Df(t),e!==null&&Dl(e,t,l,!0),t.childLanes=a,null}function qi(e,t){return t=Li({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wr(e,t,n){return al(t,e.child,null,n),e=qi(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function f3(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(he){if(l.mode==="hidden")return e=qi(t,l),t.lanes=536870912,Na(null,e);if(S0(t),(e=Ce)?(e=q2(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:Zt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},n=ff(e),n.return=t,t.child=n,$e=t,Ce=null)):e=null,e===null)throw pn(t);return t.lanes=536870912,null}return qi(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(S0(t),a)if(t.flags&256)t.flags&=-257,t=wr(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ze||Dl(e,t,n,!1),a=(n&e.childLanes)!==0,Ze||a){if(l=De,l!==null&&(r=ms(l,n),r!==0&&r!==i.retryLane))throw i.retryLane=r,Fn(e,r),ot(l,e,r),Y0;$i(),t=wr(e,t,n)}else e=i.treeContext,Ce=Rt(r.nextSibling),$e=t,he=!0,yn=null,Ct=!1,e!==null&&df(t,e),t=qi(t,l),t.flags|=4096;return t}return e=Wt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function X0(e,t,n,l,a){return el(t),n=E0(e,t,n,l,void 0,a),l=A0(),e!==null&&!Ze?(T0(e,t,a),ln(e,t,a)):(he&&l&&a0(t),t.flags|=1,We(e,t,n,a),t.child)}function _r(e,t,n,l,a,i){return el(t),t.updateQueue=null,n=Cf(t,l,n,a),Nf(e),l=A0(),e!==null&&!Ze?(T0(e,t,i),ln(e,t,i)):(he&&l&&a0(t),t.flags|=1,We(e,t,n,i),t.child)}function Dr(e,t,n,l,a){if(el(t),t.stateNode===null){var i=Al,r=n.contextType;typeof r=="object"&&r!==null&&(i=Fe(r)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=L0,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},m0(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?Fe(r):Al,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(B0(t,n,r,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&L0.enqueueReplaceState(i,i.state,null),Aa(t,l,i,a),Ea(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,v=cl(n,o);i.props=v;var E=i.context,_=n.contextType;r=Al,typeof _=="object"&&_!==null&&(r=Fe(_));var M=n.getDerivedStateFromProps;_=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||E!==r)&&hr(t,i,l,r),Sn=!1;var T=t.memoizedState;i.state=T,Aa(t,l,i,a),Ea(),E=t.memoizedState,o||T!==E||Sn?(typeof M=="function"&&(B0(t,n,M,l),E=t.memoizedState),(v=Sn||vr(t,n,v,l,T,E,r))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=r,l=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,g0(e,t),r=t.memoizedProps,_=cl(n,r),i.props=_,M=t.pendingProps,T=i.context,E=n.contextType,v=Al,typeof E=="object"&&E!==null&&(v=Fe(E)),o=n.getDerivedStateFromProps,(E=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==M||T!==v)&&hr(t,i,l,v),Sn=!1,T=t.memoizedState,i.state=T,Aa(t,l,i,a),Ea();var w=t.memoizedState;r!==M||T!==w||Sn||e!==null&&e.dependencies!==null&&bi(e.dependencies)?(typeof o=="function"&&(B0(t,n,o,l),w=t.memoizedState),(_=Sn||vr(t,n,_,l,T,w,v)||e!==null&&e.dependencies!==null&&bi(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,w,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,w,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=v,l=_):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Bi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=al(t,e.child,null,a),t.child=al(t,null,n,a)):We(e,t,n,a),t.memoizedState=i.state,e=t.child):e=ln(e,t,a),e}function Nr(e,t,n,l){return In(),t.flags|=256,We(e,t,n,l),t.child}var Q0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function V0(e){return{baseLanes:e,cachePool:yf()}}function K0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=xt),e}function Cr(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(a?An(t):Tn(),(e=Ce)?(e=q2(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:Zt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},n=ff(e),n.return=t,t.child=n,$e=t,Ce=null)):e=null,e===null)throw pn(t);return Du(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,a?(Tn(),a=t.mode,o=Li({mode:"hidden",children:o},a),l=Wn(l,a,n,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=V0(n),l.childLanes=K0(e,r,n),t.memoizedState=Q0,Na(null,l)):(An(t),J0(t,o))}var v=e.memoizedState;if(v!==null&&(o=v.dehydrated,o!==null)){if(i)t.flags&256?(An(t),t.flags&=-257,t=k0(e,t,n)):t.memoizedState!==null?(Tn(),t.child=e.child,t.flags|=128,t=null):(Tn(),o=l.fallback,a=t.mode,l=Li({mode:"visible",children:l.children},a),o=Wn(o,a,n,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,al(t,e.child,null,n),l=t.child,l.memoizedState=V0(n),l.childLanes=K0(e,r,n),t.memoizedState=Q0,t=Na(null,l));else if(An(t),Du(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var E=r.dgst;r=E,l=Error(s(419)),l.stack="",l.digest=r,za({value:l,source:null,stack:null}),t=k0(e,t,n)}else if(Ze||Dl(e,t,n,!1),r=(n&e.childLanes)!==0,Ze||r){if(r=De,r!==null&&(l=ms(r,n),l!==0&&l!==v.retryLane))throw v.retryLane=l,Fn(e,l),ot(r,e,l),Y0;_u(o)||$i(),t=k0(e,t,n)}else _u(o)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ce=Rt(o.nextSibling),$e=t,he=!0,yn=null,Ct=!1,e!==null&&df(t,e),t=J0(t,l.children),t.flags|=4096);return t}return a?(Tn(),o=l.fallback,a=t.mode,v=e.child,E=v.sibling,l=Wt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,E!==null?o=Wt(E,o):(o=Wn(o,a,n,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,Na(null,l),l=t.child,o=e.child.memoizedState,o===null?o=V0(n):(a=o.cachePool,a!==null?(v=Be._currentValue,a=a.parent!==v?{parent:v,pool:v}:a):a=yf(),o={baseLanes:o.baseLanes|n,cachePool:a}),l.memoizedState=o,l.childLanes=K0(e,r,n),t.memoizedState=Q0,Na(e.child,l)):(An(t),n=e.child,e=n.sibling,n=Wt(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function J0(e,t){return t=Li({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Li(e,t){return e=yt(22,e,null,t),e.lanes=0,e}function k0(e,t,n){return al(t,e.child,null,n),e=J0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mr(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),f0(e.return,t,n)}function $0(e,t,n,l,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a,r.treeForkCount=i)}function Rr(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var r=He.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Z(He,r),We(e,t,l,n),l=he?ga:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mr(e,n,t);else if(e.tag===19)Mr(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Di(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$0(t,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Di(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$0(t,!0,n,null,i,l);break;case"together":$0(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Dl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function F0(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bi(e)))}function r3(e,t,n){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),bn(t,Be,e.memoizedState.cache),In();break;case 27:case 5:ta(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:bn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,S0(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(An(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Cr(e,t,n):(An(t),e=ln(e,t,n),e!==null?e.sibling:null);An(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Dl(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Rr(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Z(He,He.current),l)break;return null;case 22:return t.lanes=0,Ar(e,t,n,t.pendingProps);case 24:bn(t,Be,e.memoizedState.cache)}return ln(e,t,n)}function jr(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!F0(e,n)&&(t.flags&128)===0)return Ze=!1,r3(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,he&&(t.flags&1048576)!==0&&of(t,ga,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=nl(t.elementType),t.type=e,typeof e=="function")t0(e)?(l=cl(e,l),t.tag=1,t=Dr(null,t,e,l,n)):(t.tag=0,t=X0(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===$){t.tag=11,t=Sr(null,t,e,l,n);break e}else if(a===ne){t.tag=14,t=xr(null,t,e,l,n);break e}}throw t=Jt(e)||e,Error(s(306,t,""))}}return t;case 0:return X0(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=cl(l,t.pendingProps),Dr(e,t,l,a,n);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,g0(e,t),Aa(t,l,null,n);var r=t.memoizedState;if(l=r.cache,bn(t,Be,l),l!==i.cache&&r0(t,[Be],n,!0),Ea(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Nr(e,t,l,n);break e}else if(l!==a){a=_t(Error(s(424)),t),za(a),t=Nr(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=Rt(e.firstChild),$e=t,he=!0,yn=null,Ct=!0,n=Af(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(In(),l===a){t=ln(e,t,n);break e}We(e,t,l,n)}t=t.child}return t;case 26:return Bi(e,t),e===null?(n=Q2(t.type,null,t.pendingProps,null))?t.memoizedState=n:he||(n=t.type,e=t.pendingProps,l=nc(se.current).createElement(n),l[ke]=t,l[it]=e,Ie(l,n,e),Ve(l),t.stateNode=l):t.memoizedState=Q2(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ta(t),e===null&&he&&(l=t.stateNode=Z2(t.type,t.pendingProps,se.current),$e=t,Ct=!0,a=Ce,jn(t.type)?(Nu=a,Ce=Rt(l.firstChild)):Ce=a),We(e,t,t.pendingProps.children,n),Bi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((a=l=Ce)&&(l=L3(l,t.type,t.pendingProps,Ct),l!==null?(t.stateNode=l,$e=t,Ce=Rt(l.firstChild),Ct=!1,a=!0):a=!1),a||pn(t)),ta(t),a=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,Au(a,i)?l=null:r!==null&&Au(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=E0(e,t,t3,null,null,n),Qa._currentValue=a),Bi(e,t),We(e,t,l,n),t.child;case 6:return e===null&&he&&((e=n=Ce)&&(n=Z3(n,t.pendingProps,Ct),n!==null?(t.stateNode=n,$e=t,Ce=null,e=!0):e=!1),e||pn(t)),null;case 13:return Cr(e,t,n);case 4:return tt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=al(t,null,l,n):We(e,t,l,n),t.child;case 11:return Sr(e,t,t.type,t.pendingProps,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,bn(t,t.type,l.value),We(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,el(t),a=Fe(a),l=l(a),t.flags|=1,We(e,t,l,n),t.child;case 14:return xr(e,t,t.type,t.pendingProps,n);case 15:return Er(e,t,t.type,t.pendingProps,n);case 19:return Rr(e,t,n);case 31:return f3(e,t,n);case 22:return Ar(e,t,n,t.pendingProps);case 24:return el(t),l=Fe(Be),e===null?(a=v0(),a===null&&(a=De,i=o0(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},m0(t),bn(t,Be,a)):((e.lanes&n)!==0&&(g0(e,t),Aa(t,null,null,n),Ea()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),bn(t,Be,l)):(l=i.cache,bn(t,Be,l),l!==a.cache&&r0(t,[Be],n,!0))),We(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function an(e){e.flags|=4}function W0(e,t,n,l,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(c2())e.flags|=8192;else throw ll=Ai,h0}else e.flags&=-16777217}function Ur(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$2(t))if(c2())e.flags|=8192;else throw ll=Ai,h0}function Zi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ds():536870912,e.lanes|=t,Ll|=t)}function Ca(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function o3(e,t,n){var l=t.pendingProps;switch(i0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),en(Be),Ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(_l(t)?an(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,u0())),Me(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(an(t),i!==null?(Me(t),Ur(t,i)):(Me(t),W0(t,a,null,l,n))):i?i!==e.memoizedState?(an(t),Me(t),Ur(t,i)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&an(t),Me(t),W0(t,a,e,l,n)),null;case 27:if(Ia(t),n=se.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&an(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Me(t),null}e=V.current,_l(t)?vf(t):(e=Z2(a,l,n),t.stateNode=e,an(t))}return Me(t),null;case 5:if(Ia(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&an(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Me(t),null}if(i=V.current,_l(t))vf(t);else{var r=nc(se.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(a,{is:l.is}):r.createElement(a)}}i[ke]=t,i[it]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(Ie(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&an(t)}}return Me(t),W0(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&an(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=se.current,_l(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=$e,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[ke]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||C2(e.nodeValue,n)),e||pn(t,!0)}else e=nc(e).createTextNode(l),e[ke]=t,t.stateNode=e}return Me(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=_l(t),n!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ke]=t}else In(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else n=u0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Me(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=_l(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[ke]=t}else In(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),a=!1}else a=u0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Zi(t,t.updateQueue),Me(t),null);case 4:return Ge(),e===null&&pu(t.stateNode.containerInfo),Me(t),null;case 10:return en(t.type),Me(t),null;case 19:if(R(He),l=t.memoizedState,l===null)return Me(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)Ca(l,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Di(e),i!==null){for(t.flags|=128,Ca(l,!1),e=i.updateQueue,t.updateQueue=e,Zi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)sf(n,e),n=n.sibling;return Z(He,He.current&1|2),he&&It(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ht()>Ki&&(t.flags|=128,a=!0,Ca(l,!1),t.lanes=4194304)}else{if(!a)if(e=Di(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Zi(t,e),Ca(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!he)return Me(t),null}else 2*ht()-l.renderingStartTime>Ki&&n!==536870912&&(t.flags|=128,a=!0,Ca(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ht(),e.sibling=null,n=He.current,Z(He,a?n&1|2:n&1),he&&It(t,l.treeForkCount),e):(Me(t),null);case 22:case 23:return bt(t),b0(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&Zi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&R(tl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),en(Be),Me(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function d3(e,t){switch(i0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return en(Be),Ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ia(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(s(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(He),null;case 4:return Ge(),null;case 10:return en(t.type),null;case 22:case 23:return bt(t),b0(),e!==null&&R(tl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return en(Be),null;case 25:return null;default:return null}}function Or(e,t){switch(i0(t),t.tag){case 3:en(Be),Ge();break;case 26:case 27:case 5:Ia(t);break;case 4:Ge();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:R(He);break;case 10:en(t.type);break;case 22:case 23:bt(t),b0(),e!==null&&R(tl);break;case 24:en(Be)}}function Ma(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,r=n.inst;l=i(),r.destroy=l}n=n.next}while(n!==a)}}catch(o){xe(t,t.return,o)}}function wn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var r=l.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var v=n,E=o;try{E()}catch(_){xe(a,v,_)}}}l=l.next}while(l!==i)}}catch(_){xe(t,t.return,_)}}function Gr(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{wf(t,n)}catch(l){xe(e,e.return,l)}}}function Hr(e,t,n){n.props=cl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){xe(e,t,l)}}function Ra(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){xe(e,t,a)}}function Xt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){xe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){xe(e,t,a)}else n.current=null}function qr(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){xe(e,e.return,a)}}function I0(e,t,n){try{var l=e.stateNode;U3(l,e.type,n,t),l[it]=t}catch(a){xe(e,e.return,a)}}function Br(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jn(e.type)||e.tag===4}function P0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Br(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(l!==4&&(l===27&&jn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(eu(e,t,n),e=e.sibling;e!==null;)eu(e,t,n),e=e.sibling}function Yi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&jn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}function Lr(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ie(t,l,n),t[ke]=e,t[it]=n}catch(i){xe(e,e.return,i)}}var cn=!1,Ye=!1,tu=!1,Zr=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function v3(e,t){if(e=e.containerInfo,xu=fc,e=Is(e),kc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,o=-1,v=-1,E=0,_=0,M=e,T=null;t:for(;;){for(var w;M!==n||a!==0&&M.nodeType!==3||(o=r+a),M!==i||l!==0&&M.nodeType!==3||(v=r+l),M.nodeType===3&&(r+=M.nodeValue.length),(w=M.firstChild)!==null;)T=M,M=w;for(;;){if(M===e)break t;if(T===n&&++E===a&&(o=r),T===i&&++_===l&&(v=r),(w=M.nextSibling)!==null)break;M=T,T=M.parentNode}M=w}n=o===-1||v===-1?null:{start:o,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:e,selectionRange:n},fc=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var Q=cl(n.type,a);e=l.getSnapshotBeforeUpdate(Q,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){xe(n,n.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)wu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function Yr(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:sn(e,n),l&4&&Ma(5,n);break;case 1:if(sn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){xe(n,n.return,r)}else{var a=cl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){xe(n,n.return,r)}}l&64&&Gr(n),l&512&&Ra(n,n.return);break;case 3:if(sn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{wf(e,t)}catch(r){xe(n,n.return,r)}}break;case 27:t===null&&l&4&&Lr(n);case 26:case 5:sn(e,n),t===null&&l&4&&qr(n),l&512&&Ra(n,n.return);break;case 12:sn(e,n);break;case 31:sn(e,n),l&4&&Vr(e,n);break;case 13:sn(e,n),l&4&&Kr(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=x3.bind(null,n),Y3(e,n))));break;case 22:if(l=n.memoizedState!==null||cn,!l){t=t!==null&&t.memoizedState!==null||Ye,a=cn;var i=Ye;cn=l,(Ye=t)&&!i?fn(e,n,(n.subtreeFlags&8772)!==0):sn(e,n),cn=a,Ye=i}break;case 30:break;default:sn(e,n)}}function Xr(e){var t=e.alternate;t!==null&&(e.alternate=null,Xr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,ut=!1;function un(e,t,n){for(n=n.child;n!==null;)Qr(e,t,n),n=n.sibling}function Qr(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 26:Ye||Xt(n,t),un(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ye||Xt(n,t);var l=Re,a=ut;jn(n.type)&&(Re=n.stateNode,ut=!1),un(e,t,n),Za(n.stateNode),Re=l,ut=a;break;case 5:Ye||Xt(n,t);case 6:if(l=Re,a=ut,Re=null,un(e,t,n),Re=l,ut=a,Re!==null)if(ut)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode)}catch(i){xe(n,t,i)}else try{Re.removeChild(n.stateNode)}catch(i){xe(n,t,i)}break;case 18:Re!==null&&(ut?(e=Re,G2(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),kl(e)):G2(Re,n.stateNode));break;case 4:l=Re,a=ut,Re=n.stateNode.containerInfo,ut=!0,un(e,t,n),Re=l,ut=a;break;case 0:case 11:case 14:case 15:wn(2,n,t),Ye||wn(4,n,t),un(e,t,n);break;case 1:Ye||(Xt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Hr(n,t,l)),un(e,t,n);break;case 21:un(e,t,n);break;case 22:Ye=(l=Ye)||n.memoizedState!==null,un(e,t,n),Ye=l;break;default:un(e,t,n)}}function Vr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{kl(e)}catch(n){xe(t,t.return,n)}}}function Kr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kl(e)}catch(n){xe(t,t.return,n)}}function h3(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zr),t;default:throw Error(s(435,e.tag))}}function Xi(e,t){var n=h3(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=E3.bind(null,e,l);l.then(a,a)}})}function st(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,r=t,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(jn(o.type)){Re=o.stateNode,ut=!1;break e}break;case 5:Re=o.stateNode,ut=!1;break e;case 3:case 4:Re=o.stateNode.containerInfo,ut=!0;break e}o=o.return}if(Re===null)throw Error(s(160));Qr(i,r,a),Re=null,ut=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Jr(t,e),t=t.sibling}var qt=null;function Jr(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(t,e),ft(e),l&4&&(wn(3,e,e.return),Ma(3,e),wn(5,e,e.return));break;case 1:st(t,e),ft(e),l&512&&(Ye||n===null||Xt(n,n.return)),l&64&&cn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=qt;if(st(t,e),ft(e),l&512&&(Ye||n===null||Xt(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[ia]||i[ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),Ie(i,l,n),i[ke]=e,Ve(i),l=i;break e;case"link":var r=J2("link","href",a).get(l+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(i=r[o],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break t}}i=a.createElement(l),Ie(i,l,n),a.head.appendChild(i);break;case"meta":if(r=J2("meta","content",a).get(l+(n.content||""))){for(o=0;o<r.length;o++)if(i=r[o],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break t}}i=a.createElement(l),Ie(i,l,n),a.head.appendChild(i);break;default:throw Error(s(468,l))}i[ke]=e,Ve(i),l=i}e.stateNode=l}else k2(a,e.type,e.stateNode);else e.stateNode=K2(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?k2(a,e.type,e.stateNode):K2(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&I0(e,e.memoizedProps,n.memoizedProps)}break;case 27:st(t,e),ft(e),l&512&&(Ye||n===null||Xt(n,n.return)),n!==null&&l&4&&I0(e,e.memoizedProps,n.memoizedProps);break;case 5:if(st(t,e),ft(e),l&512&&(Ye||n===null||Xt(n,n.return)),e.flags&32){a=e.stateNode;try{zl(a,"")}catch(Q){xe(e,e.return,Q)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,I0(e,a,n!==null?n.memoizedProps:a)),l&1024&&(tu=!0);break;case 6:if(st(t,e),ft(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(Q){xe(e,e.return,Q)}}break;case 3:if(ic=null,a=qt,qt=lc(t.containerInfo),st(t,e),qt=a,ft(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{kl(t.containerInfo)}catch(Q){xe(e,e.return,Q)}tu&&(tu=!1,kr(e));break;case 4:l=qt,qt=lc(e.stateNode.containerInfo),st(t,e),ft(e),qt=l;break;case 12:st(t,e),ft(e);break;case 31:st(t,e),ft(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xi(e,l)));break;case 13:st(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Vi=ht()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xi(e,l)));break;case 22:a=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,E=cn,_=Ye;if(cn=E||a,Ye=_||v,st(t,e),Ye=_,cn=E,ft(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||v||cn||Ye||ul(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(i=v.stateNode,a)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=v.stateNode;var M=v.memoizedProps.style,T=M!=null&&M.hasOwnProperty("display")?M.display:null;o.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(Q){xe(v,v.return,Q)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=a?"":v.memoizedProps}catch(Q){xe(v,v.return,Q)}}}else if(t.tag===18){if(n===null){v=t;try{var w=v.stateNode;a?H2(w,!0):H2(v.stateNode,!1)}catch(Q){xe(v,v.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Xi(e,n))));break;case 19:st(t,e),ft(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xi(e,l)));break;case 30:break;case 21:break;default:st(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Br(l)){n=l;break}l=l.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var a=n.stateNode,i=P0(e);Yi(e,i,a);break;case 5:var r=n.stateNode;n.flags&32&&(zl(r,""),n.flags&=-33);var o=P0(e);Yi(e,o,r);break;case 3:case 4:var v=n.stateNode.containerInfo,E=P0(e);eu(e,E,v);break;default:throw Error(s(161))}}catch(_){xe(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Yr(e,t.alternate,t),t=t.sibling}function ul(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:wn(4,t,t.return),ul(t);break;case 1:Xt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Hr(t,t.return,n),ul(t);break;case 27:Za(t.stateNode);case 26:case 5:Xt(t,t.return),ul(t);break;case 22:t.memoizedState===null&&ul(t);break;case 30:ul(t);break;default:ul(t)}e=e.sibling}}function fn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:fn(a,i,n),Ma(4,i);break;case 1:if(fn(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(E){xe(l,l.return,E)}if(l=i,a=l.updateQueue,a!==null){var o=l.stateNode;try{var v=a.shared.hiddenCallbacks;if(v!==null)for(a.shared.hiddenCallbacks=null,a=0;a<v.length;a++)Tf(v[a],o)}catch(E){xe(l,l.return,E)}}n&&r&64&&Gr(i),Ra(i,i.return);break;case 27:Lr(i);case 26:case 5:fn(a,i,n),n&&l===null&&r&4&&qr(i),Ra(i,i.return);break;case 12:fn(a,i,n);break;case 31:fn(a,i,n),n&&r&4&&Vr(a,i);break;case 13:fn(a,i,n),n&&r&4&&Kr(a,i);break;case 22:i.memoizedState===null&&fn(a,i,n),Ra(i,i.return);break;case 30:break;default:fn(a,i,n)}t=t.sibling}}function nu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ya(n))}function lu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ya(e))}function Bt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$r(e,t,n,l),t=t.sibling}function $r(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(e,t,n,l),a&2048&&Ma(9,t);break;case 1:Bt(e,t,n,l);break;case 3:Bt(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ya(e)));break;case 12:if(a&2048){Bt(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,o=i.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){xe(t,t.return,v)}}else Bt(e,t,n,l);break;case 31:Bt(e,t,n,l);break;case 13:Bt(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Bt(e,t,n,l):ja(e,t):i._visibility&2?Bt(e,t,n,l):(i._visibility|=2,Hl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&nu(r,t);break;case 24:Bt(e,t,n,l),a&2048&&lu(t.alternate,t);break;default:Bt(e,t,n,l)}}function Hl(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,o=n,v=l,E=r.flags;switch(r.tag){case 0:case 11:case 15:Hl(i,r,o,v,a),Ma(8,r);break;case 23:break;case 22:var _=r.stateNode;r.memoizedState!==null?_._visibility&2?Hl(i,r,o,v,a):ja(i,r):(_._visibility|=2,Hl(i,r,o,v,a)),a&&E&2048&&nu(r.alternate,r);break;case 24:Hl(i,r,o,v,a),a&&E&2048&&lu(r.alternate,r);break;default:Hl(i,r,o,v,a)}t=t.sibling}}function ja(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:ja(n,l),a&2048&&nu(l.alternate,l);break;case 24:ja(n,l),a&2048&&lu(l.alternate,l);break;default:ja(n,l)}t=t.sibling}}var Ua=8192;function ql(e,t,n){if(e.subtreeFlags&Ua)for(e=e.child;e!==null;)Fr(e,t,n),e=e.sibling}function Fr(e,t,n){switch(e.tag){case 26:ql(e,t,n),e.flags&Ua&&e.memoizedState!==null&&e5(n,qt,e.memoizedState,e.memoizedProps);break;case 5:ql(e,t,n);break;case 3:case 4:var l=qt;qt=lc(e.stateNode.containerInfo),ql(e,t,n),qt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ua,Ua=16777216,ql(e,t,n),Ua=l):ql(e,t,n));break;default:ql(e,t,n)}}function Wr(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Oa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Ke=l,Pr(l,e)}Wr(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ir(e),e=e.sibling}function Ir(e){switch(e.tag){case 0:case 11:case 15:Oa(e),e.flags&2048&&wn(9,e,e.return);break;case 3:Oa(e);break;case 12:Oa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qi(e)):Oa(e);break;default:Oa(e)}}function Qi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Ke=l,Pr(l,e)}Wr(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wn(8,t,t.return),Qi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qi(t));break;default:Qi(t)}e=e.sibling}}function Pr(e,t){for(;Ke!==null;){var n=Ke;switch(n.tag){case 0:case 11:case 15:wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ya(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Ke=l;else e:for(n=e;Ke!==null;){l=Ke;var a=l.sibling,i=l.return;if(Xr(l),l===n){Ke=null;break e}if(a!==null){a.return=i,Ke=a;break e}Ke=i}}}var m3={getCacheForType:function(e){var t=Fe(Be),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Fe(Be).controller.signal}},g3=typeof WeakMap=="function"?WeakMap:Map,ye=0,De=null,fe=null,oe=0,Se=0,St=null,_n=!1,Bl=!1,au=!1,rn=0,Oe=0,Dn=0,sl=0,iu=0,xt=0,Ll=0,Ga=null,rt=null,cu=!1,Vi=0,e2=0,Ki=1/0,Ji=null,Nn=null,Xe=0,Cn=null,Zl=null,on=0,uu=0,su=null,t2=null,Ha=0,fu=null;function Et(){return(ye&2)!==0&&oe!==0?oe&-oe:N.T!==null?mu():gs()}function n2(){if(xt===0)if((oe&536870912)===0||he){var e=ti;ti<<=1,(ti&3932160)===0&&(ti=262144),xt=e}else xt=536870912;return e=pt.current,e!==null&&(e.flags|=32),xt}function ot(e,t,n){(e===De&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Yl(e,0),Mn(e,oe,xt,!1)),aa(e,n),((ye&2)===0||e!==De)&&(e===De&&((ye&2)===0&&(sl|=n),Oe===4&&Mn(e,oe,xt,!1)),Qt(e))}function l2(e,t,n){if((ye&6)!==0)throw Error(s(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||la(e,t),a=l?p3(e,t):ou(e,t,!0),i=l;do{if(a===0){Bl&&!l&&Mn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!z3(n)){a=ou(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var o=e;a=Ga;var v=o.current.memoizedState.isDehydrated;if(v&&(Yl(o,r).flags|=256),r=ou(o,r,!1),r!==2){if(au&&!v){o.errorRecoveryDisabledLanes|=i,sl|=i,a=4;break e}i=rt,rt=a,i!==null&&(rt===null?rt=i:rt.push.apply(rt,i))}a=r}if(i=!1,a!==2)continue}}if(a===1){Yl(e,0),Mn(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Mn(l,t,xt,!_n);break e;case 2:rt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(a=Vi+300-ht(),10<a)){if(Mn(l,t,xt,!_n),li(l,0,!0)!==0)break e;on=t,l.timeoutHandle=U2(a2.bind(null,l,n,rt,Ji,cu,t,xt,sl,Ll,_n,i,"Throttled",-0,0),a);break e}a2(l,n,rt,Ji,cu,t,xt,sl,Ll,_n,i,null,-0,0)}}break}while(!0);Qt(e)}function a2(e,t,n,l,a,i,r,o,v,E,_,M,T,w){if(e.timeoutHandle=-1,M=t.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Fr(t,i,M);var Q=(i&62914560)===i?Vi-ht():(i&4194048)===i?e2-ht():0;if(Q=t5(M,Q),Q!==null){on=i,e.cancelPendingCommit=Q(d2.bind(null,e,t,i,n,l,a,r,o,v,_,M,null,T,w)),Mn(e,i,r,!E);return}}d2(e,t,i,n,l,a,r,o,v)}function z3(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!zt(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mn(e,t,n,l){t&=~iu,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-gt(a),r=1<<i;l[i]=-1,a&=~r}n!==0&&vs(e,n,t)}function ki(){return(ye&6)===0?(qa(0),!1):!0}function ru(){if(fe!==null){if(Se===0)var e=fe.return;else e=fe,Pt=Pn=null,w0(e),Rl=null,ba=0,e=fe;for(;e!==null;)Or(e.alternate,e),e=e.return;fe=null}}function Yl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,H3(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),on=0,ru(),De=e,fe=n=Wt(e.current,null),oe=t,Se=0,St=null,_n=!1,Bl=la(e,t),au=!1,Ll=xt=iu=sl=Dn=Oe=0,rt=Ga=null,cu=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-gt(l),i=1<<a;t|=e[a],l&=~i}return rn=t,mi(),n}function i2(e,t){ae=null,N.H=Da,t===Ml||t===Ei?(t=Sf(),Se=3):t===h0?(t=Sf(),Se=4):Se=t===Y0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,St=t,fe===null&&(Oe=1,Hi(e,_t(t,e.current)))}function c2(){var e=pt.current;return e===null?!0:(oe&4194048)===oe?Mt===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Mt:!1}function u2(){var e=N.H;return N.H=Da,e===null?Da:e}function s2(){var e=N.A;return N.A=m3,e}function $i(){Oe=4,_n||(oe&4194048)!==oe&&pt.current!==null||(Bl=!0),(Dn&134217727)===0&&(sl&134217727)===0||De===null||Mn(De,oe,xt,!1)}function ou(e,t,n){var l=ye;ye|=2;var a=u2(),i=s2();(De!==e||oe!==t)&&(Ji=null,Yl(e,t)),t=!1;var r=Oe;e:do try{if(Se!==0&&fe!==null){var o=fe,v=St;switch(Se){case 8:ru(),r=6;break e;case 3:case 2:case 9:case 6:pt.current===null&&(t=!0);var E=Se;if(Se=0,St=null,Xl(e,o,v,E),n&&Bl){r=0;break e}break;default:E=Se,Se=0,St=null,Xl(e,o,v,E)}}y3(),r=Oe;break}catch(_){i2(e,_)}while(!0);return t&&e.shellSuspendCounter++,Pt=Pn=null,ye=l,N.H=a,N.A=i,fe===null&&(De=null,oe=0,mi()),r}function y3(){for(;fe!==null;)f2(fe)}function p3(e,t){var n=ye;ye|=2;var l=u2(),a=s2();De!==e||oe!==t?(Ji=null,Ki=ht()+500,Yl(e,t)):Bl=la(e,t);e:do try{if(Se!==0&&fe!==null){t=fe;var i=St;t:switch(Se){case 1:Se=0,St=null,Xl(e,t,i,1);break;case 2:case 9:if(pf(i)){Se=0,St=null,r2(t);break}t=function(){Se!==2&&Se!==9||De!==e||(Se=7),Qt(e)},i.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:pf(i)?(Se=0,St=null,r2(t)):(Se=0,St=null,Xl(e,t,i,7));break;case 5:var r=null;switch(fe.tag){case 26:r=fe.memoizedState;case 5:case 27:var o=fe;if(r?$2(r):o.stateNode.complete){Se=0,St=null;var v=o.sibling;if(v!==null)fe=v;else{var E=o.return;E!==null?(fe=E,Fi(E)):fe=null}break t}}Se=0,St=null,Xl(e,t,i,5);break;case 6:Se=0,St=null,Xl(e,t,i,6);break;case 8:ru(),Oe=6;break e;default:throw Error(s(462))}}b3();break}catch(_){i2(e,_)}while(!0);return Pt=Pn=null,N.H=l,N.A=a,ye=n,fe!==null?0:(De=null,oe=0,mi(),Oe)}function b3(){for(;fe!==null&&!Y1();)f2(fe)}function f2(e){var t=jr(e.alternate,e,rn);e.memoizedProps=e.pendingProps,t===null?Fi(e):fe=t}function r2(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_r(n,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=_r(n,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:w0(t);default:Or(n,t),t=fe=sf(t,rn),t=jr(n,t,rn)}e.memoizedProps=e.pendingProps,t===null?Fi(e):fe=t}function Xl(e,t,n,l){Pt=Pn=null,w0(t),Rl=null,ba=0;var a=t.return;try{if(s3(e,a,t,n,oe)){Oe=1,Hi(e,_t(n,e.current)),fe=null;return}}catch(i){if(a!==null)throw fe=a,i;Oe=1,Hi(e,_t(n,e.current)),fe=null;return}t.flags&32768?(he||l===1?e=!0:Bl||(oe&536870912)!==0?e=!1:(_n=e=!0,(l===2||l===9||l===3||l===6)&&(l=pt.current,l!==null&&l.tag===13&&(l.flags|=16384))),o2(t,e)):Fi(t)}function Fi(e){var t=e;do{if((t.flags&32768)!==0){o2(t,_n);return}e=t.return;var n=o3(t.alternate,t,rn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Oe===0&&(Oe=5)}function o2(e,t){do{var n=d3(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Oe=6,fe=null}function d2(e,t,n,l,a,i,r,o,v){e.cancelPendingCommit=null;do Wi();while(Xe!==0);if((ye&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Pc,I1(e,n,i,r,o,v),e===De&&(fe=De=null,oe=0),Zl=t,Cn=e,on=n,uu=i,su=a,t2=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,A3(Pa,function(){return z2(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,a=L.p,L.p=2,r=ye,ye|=4;try{v3(e,t,n)}finally{ye=r,L.p=a,N.T=l}}Xe=1,v2(),h2(),m2()}}function v2(){if(Xe===1){Xe=0;var e=Cn,t=Zl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var l=L.p;L.p=2;var a=ye;ye|=4;try{Jr(t,e);var i=Eu,r=Is(e.containerInfo),o=i.focusedElem,v=i.selectionRange;if(r!==o&&o&&o.ownerDocument&&Ws(o.ownerDocument.documentElement,o)){if(v!==null&&kc(o)){var E=v.start,_=v.end;if(_===void 0&&(_=E),"selectionStart"in o)o.selectionStart=E,o.selectionEnd=Math.min(_,o.value.length);else{var M=o.ownerDocument||document,T=M&&M.defaultView||window;if(T.getSelection){var w=T.getSelection(),Q=o.textContent.length,W=Math.min(v.start,Q),we=v.end===void 0?W:Math.min(v.end,Q);!w.extend&&W>we&&(r=we,we=W,W=r);var S=Fs(o,W),g=Fs(o,we);if(S&&g&&(w.rangeCount!==1||w.anchorNode!==S.node||w.anchorOffset!==S.offset||w.focusNode!==g.node||w.focusOffset!==g.offset)){var x=M.createRange();x.setStart(S.node,S.offset),w.removeAllRanges(),W>we?(w.addRange(x),w.extend(g.node,g.offset)):(x.setEnd(g.node,g.offset),w.addRange(x))}}}}for(M=[],w=o;w=w.parentNode;)w.nodeType===1&&M.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<M.length;o++){var C=M[o];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}fc=!!xu,Eu=xu=null}finally{ye=a,L.p=l,N.T=n}}e.current=t,Xe=2}}function h2(){if(Xe===2){Xe=0;var e=Cn,t=Zl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var l=L.p;L.p=2;var a=ye;ye|=4;try{Yr(e,t.alternate,t)}finally{ye=a,L.p=l,N.T=n}}Xe=3}}function m2(){if(Xe===4||Xe===3){Xe=0,X1();var e=Cn,t=Zl,n=on,l=t2;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Zl=Cn=null,g2(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Nn=null),Nc(n),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(na,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=N.T,a=L.p,L.p=2,N.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var o=l[r];i(o.value,{componentStack:o.stack})}}finally{N.T=t,L.p=a}}(on&3)!==0&&Wi(),Qt(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===fu?Ha++:(Ha=0,fu=e):Ha=0,qa(0)}}function g2(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ya(t)))}function Wi(){return v2(),h2(),m2(),z2()}function z2(){if(Xe!==5)return!1;var e=Cn,t=uu;uu=0;var n=Nc(on),l=N.T,a=L.p;try{L.p=32>n?32:n,N.T=null,n=su,su=null;var i=Cn,r=on;if(Xe=0,Zl=Cn=null,on=0,(ye&6)!==0)throw Error(s(331));var o=ye;if(ye|=4,Ir(i.current),$r(i,i.current,r,n),ye=o,qa(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(na,i)}catch{}return!0}finally{L.p=a,N.T=l,g2(e,t)}}function y2(e,t,n){t=_t(n,t),t=Z0(e.stateNode,t,2),e=En(e,t,2),e!==null&&(aa(e,2),Qt(e))}function xe(e,t,n){if(e.tag===3)y2(e,e,n);else for(;t!==null;){if(t.tag===3){y2(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Nn===null||!Nn.has(l))){e=_t(n,e),n=pr(2),l=En(t,n,2),l!==null&&(br(n,l,t,e),aa(l,2),Qt(l));break}}t=t.return}}function du(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new g3;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(au=!0,a.add(n),e=S3.bind(null,e,t,n),t.then(e,e))}function S3(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(oe&n)===n&&(Oe===4||Oe===3&&(oe&62914560)===oe&&300>ht()-Vi?(ye&2)===0&&Yl(e,0):iu|=n,Ll===oe&&(Ll=0)),Qt(e)}function p2(e,t){t===0&&(t=ds()),e=Fn(e,t),e!==null&&(aa(e,t),Qt(e))}function x3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),p2(e,n)}function E3(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),p2(e,n)}function A3(e,t){return Tc(e,t)}var Ii=null,Ql=null,vu=!1,Pi=!1,hu=!1,Rn=0;function Qt(e){e!==Ql&&e.next===null&&(Ql===null?Ii=Ql=e:Ql=Ql.next=e),Pi=!0,vu||(vu=!0,w3())}function qa(e,t){if(!hu&&Pi){hu=!0;do for(var n=!1,l=Ii;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var r=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-gt(42|e)+1)-1,i&=a&~(r&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,E2(l,i))}else i=oe,i=li(l,l===De?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||la(l,i)||(n=!0,E2(l,i));l=l.next}while(n);hu=!1}}function T3(){b2()}function b2(){Pi=vu=!1;var e=0;Rn!==0&&G3()&&(e=Rn);for(var t=ht(),n=null,l=Ii;l!==null;){var a=l.next,i=S2(l,t);i===0?(l.next=null,n===null?Ii=a:n.next=a,a===null&&(Ql=n)):(n=l,(e!==0||(i&3)!==0)&&(Pi=!0)),l=a}Xe!==0&&Xe!==5||qa(e),Rn!==0&&(Rn=0)}function S2(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-gt(i),o=1<<r,v=a[r];v===-1?((o&n)===0||(o&l)!==0)&&(a[r]=W1(o,t)):v<=t&&(e.expiredLanes|=o),i&=~o}if(t=De,n=oe,n=li(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&wc(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||la(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&wc(l),Nc(n)){case 2:case 8:n=rs;break;case 32:n=Pa;break;case 268435456:n=os;break;default:n=Pa}return l=x2.bind(null,e),n=Tc(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&wc(l),e.callbackPriority=2,e.callbackNode=null,2}function x2(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wi()&&e.callbackNode!==n)return null;var l=oe;return l=li(e,e===De?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(l2(e,l,t),S2(e,ht()),e.callbackNode!=null&&e.callbackNode===n?x2.bind(null,e):null)}function E2(e,t){if(Wi())return null;l2(e,t,!0)}function w3(){q3(function(){(ye&6)!==0?Tc(fs,T3):b2()})}function mu(){if(Rn===0){var e=Nl;e===0&&(e=ei,ei<<=1,(ei&261888)===0&&(ei=256)),Rn=e}return Rn}function A2(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ui(""+e)}function T2(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function _3(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=A2((a[it]||null).action),r=l.submitter;r&&(t=(t=r[it]||null)?A2(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var o=new oi("action","action",null,l,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Rn!==0){var v=r?T2(a,r):new FormData(a);O0(n,{pending:!0,data:v,method:a.method,action:i},null,v)}}else typeof i=="function"&&(o.preventDefault(),v=r?T2(a,r):new FormData(a),O0(n,{pending:!0,data:v,method:a.method,action:i},i,v))},currentTarget:a}]})}}for(var gu=0;gu<Ic.length;gu++){var zu=Ic[gu],D3=zu.toLowerCase(),N3=zu[0].toUpperCase()+zu.slice(1);Ht(D3,"on"+N3)}Ht(tf,"onAnimationEnd"),Ht(nf,"onAnimationIteration"),Ht(lf,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(Vo,"onTransitionRun"),Ht(Ko,"onTransitionStart"),Ht(Jo,"onTransitionCancel"),Ht(af,"onTransitionEnd"),ml("onMouseEnter",["mouseout","mouseover"]),ml("onMouseLeave",["mouseout","mouseover"]),ml("onPointerEnter",["pointerout","pointerover"]),ml("onPointerLeave",["pointerout","pointerover"]),Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ba));function w2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var o=l[r],v=o.instance,E=o.currentTarget;if(o=o.listener,v!==i&&a.isPropagationStopped())break e;i=o,a.currentTarget=E;try{i(a)}catch(_){hi(_)}a.currentTarget=null,i=v}else for(r=0;r<l.length;r++){if(o=l[r],v=o.instance,E=o.currentTarget,o=o.listener,v!==i&&a.isPropagationStopped())break e;i=o,a.currentTarget=E;try{i(a)}catch(_){hi(_)}a.currentTarget=null,i=v}}}}function re(e,t){var n=t[Cc];n===void 0&&(n=t[Cc]=new Set);var l=e+"__bubble";n.has(l)||(_2(t,e,2,!1),n.add(l))}function yu(e,t,n){var l=0;t&&(l|=4),_2(n,e,l,t)}var ec="_reactListening"+Math.random().toString(36).slice(2);function pu(e){if(!e[ec]){e[ec]=!0,ps.forEach(function(n){n!=="selectionchange"&&(C3.has(n)||yu(n,!1,e),yu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ec]||(t[ec]=!0,yu("selectionchange",!1,t))}}function _2(e,t,n,l){switch(n1(t)){case 2:var a=a5;break;case 8:a=i5;break;default:a=Uu}n=a.bind(null,t,n,e),a=void 0,!Bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function bu(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var o=l.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=l.return;r!==null;){var v=r.tag;if((v===3||v===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=dl(o),r===null)return;if(v=r.tag,v===5||v===6||v===26||v===27){l=i=r;continue e}o=o.parentNode}}l=l.return}Ms(function(){var E=i,_=Hc(n),M=[];e:{var T=cf.get(e);if(T!==void 0){var w=oi,Q=e;switch(e){case"keypress":if(fi(n)===0)break e;case"keydown":case"keyup":w=Eo;break;case"focusin":Q="focus",w=Xc;break;case"focusout":Q="blur",w=Xc;break;case"beforeblur":case"afterblur":w=Xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ro;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=wo;break;case tf:case nf:case lf:w=ho;break;case af:w=Do;break;case"scroll":case"scrollend":w=so;break;case"wheel":w=Co;break;case"copy":case"cut":case"paste":w=go;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Gs;break;case"toggle":case"beforetoggle":w=Ro}var W=(t&4)!==0,we=!W&&(e==="scroll"||e==="scrollend"),S=W?T!==null?T+"Capture":null:T;W=[];for(var g=E,x;g!==null;){var C=g;if(x=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||x===null||S===null||(C=ua(g,S),C!=null&&W.push(La(g,C,x))),we)break;g=g.return}0<W.length&&(T=new w(T,Q,null,n,_),M.push({event:T,listeners:W}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",T&&n!==Gc&&(Q=n.relatedTarget||n.fromElement)&&(dl(Q)||Q[ol]))break e;if((w||T)&&(T=_.window===_?_:(T=_.ownerDocument)?T.defaultView||T.parentWindow:window,w?(Q=n.relatedTarget||n.toElement,w=E,Q=Q?dl(Q):null,Q!==null&&(we=h(Q),W=Q.tag,Q!==we||W!==5&&W!==27&&W!==6)&&(Q=null)):(w=null,Q=E),w!==Q)){if(W=Us,C="onMouseLeave",S="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(W=Gs,C="onPointerLeave",S="onPointerEnter",g="pointer"),we=w==null?T:ca(w),x=Q==null?T:ca(Q),T=new W(C,g+"leave",w,n,_),T.target=we,T.relatedTarget=x,C=null,dl(_)===E&&(W=new W(S,g+"enter",Q,n,_),W.target=x,W.relatedTarget=we,C=W),we=C,w&&Q)t:{for(W=M3,S=w,g=Q,x=0,C=S;C;C=W(C))x++;C=0;for(var k=g;k;k=W(k))C++;for(;0<x-C;)S=W(S),x--;for(;0<C-x;)g=W(g),C--;for(;x--;){if(S===g||g!==null&&S===g.alternate){W=S;break t}S=W(S),g=W(g)}W=null}else W=null;w!==null&&D2(M,T,w,W,!1),Q!==null&&we!==null&&D2(M,we,Q,W,!0)}}e:{if(T=E?ca(E):window,w=T.nodeName&&T.nodeName.toLowerCase(),w==="select"||w==="input"&&T.type==="file")var ge=Qs;else if(Ys(T))if(Vs)ge=Yo;else{ge=Lo;var K=Bo}else w=T.nodeName,!w||w.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&Oc(E.elementType)&&(ge=Qs):ge=Zo;if(ge&&(ge=ge(e,E))){Xs(M,ge,n,_);break e}K&&K(e,T,E),e==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&Uc(T,"number",T.value)}switch(K=E?ca(E):window,e){case"focusin":(Ys(K)||K.contentEditable==="true")&&(Sl=K,$c=E,ma=null);break;case"focusout":ma=$c=Sl=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Ps(M,n,_);break;case"selectionchange":if(Qo)break;case"keydown":case"keyup":Ps(M,n,_)}var ie;if(Vc)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else bl?Ls(e,n)&&(de="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(de="onCompositionStart");de&&(Hs&&n.locale!=="ko"&&(bl||de!=="onCompositionStart"?de==="onCompositionEnd"&&bl&&(ie=Rs()):(gn=_,Lc="value"in gn?gn.value:gn.textContent,bl=!0)),K=tc(E,de),0<K.length&&(de=new Os(de,e,null,n,_),M.push({event:de,listeners:K}),ie?de.data=ie:(ie=Zs(n),ie!==null&&(de.data=ie)))),(ie=Uo?Oo(e,n):Go(e,n))&&(de=tc(E,"onBeforeInput"),0<de.length&&(K=new Os("onBeforeInput","beforeinput",null,n,_),M.push({event:K,listeners:de}),K.data=ie)),_3(M,e,E,n,_)}w2(M,t)})}function La(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tc(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=ua(e,n),a!=null&&l.unshift(La(e,a,i)),a=ua(e,t),a!=null&&l.push(La(e,a,i))),e.tag===3)return l;e=e.return}return[]}function M3(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function D2(e,t,n,l,a){for(var i=t._reactName,r=[];n!==null&&n!==l;){var o=n,v=o.alternate,E=o.stateNode;if(o=o.tag,v!==null&&v===l)break;o!==5&&o!==26&&o!==27||E===null||(v=E,a?(E=ua(n,i),E!=null&&r.unshift(La(n,E,v))):a||(E=ua(n,i),E!=null&&r.push(La(n,E,v)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var R3=/\r\n?/g,j3=/\u0000|\uFFFD/g;function N2(e){return(typeof e=="string"?e:""+e).replace(R3,`
`).replace(j3,"")}function C2(e,t){return t=N2(t),N2(e)===t}function Te(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||zl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&zl(e,""+l);break;case"className":ii(e,"class",l);break;case"tabIndex":ii(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ii(e,n,l);break;case"style":Ns(e,l,i);break;case"data":if(t!=="object"){ii(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ui(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Te(e,t,"name",a.name,a,null),Te(e,t,"formEncType",a.formEncType,a,null),Te(e,t,"formMethod",a.formMethod,a,null),Te(e,t,"formTarget",a.formTarget,a,null)):(Te(e,t,"encType",a.encType,a,null),Te(e,t,"method",a.method,a,null),Te(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ui(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=$t);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ui(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":re("beforetoggle",e),re("toggle",e),ai(e,"popover",l);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ai(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=co.get(n)||n,ai(e,n,l))}}function Su(e,t,n,l,a,i){switch(n){case"style":Ns(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof l=="string"?zl(e,l):(typeof l=="number"||typeof l=="bigint")&&zl(e,""+l);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"onClick":l!=null&&(e.onclick=$t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bs.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[it]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ai(e,n,l)}}}function Ie(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Te(e,t,i,r,n,null)}}a&&Te(e,t,"srcSet",n.srcSet,n,null),l&&Te(e,t,"src",n.src,n,null);return;case"input":re("invalid",e);var o=i=r=a=null,v=null,E=null;for(l in n)if(n.hasOwnProperty(l)){var _=n[l];if(_!=null)switch(l){case"name":a=_;break;case"type":r=_;break;case"checked":v=_;break;case"defaultChecked":E=_;break;case"value":i=_;break;case"defaultValue":o=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,t));break;default:Te(e,t,l,_,n,null)}}Ts(e,i,o,v,E,r,a,!1);return;case"select":re("invalid",e),l=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":r=o;break;case"multiple":l=o;default:Te(e,t,a,o,n,null)}t=i,n=r,e.multiple=!!l,t!=null?gl(e,!!l,t,!1):n!=null&&gl(e,!!l,n,!0);return;case"textarea":re("invalid",e),i=a=l=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":l=o;break;case"defaultValue":a=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:Te(e,t,r,o,n,null)}_s(e,l,a,i);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(l=n[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Te(e,t,v,l,n,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(l=0;l<Ba.length;l++)re(Ba[l],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(l=n[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Te(e,t,E,l,n,null)}return;default:if(Oc(t)){for(_ in n)n.hasOwnProperty(_)&&(l=n[_],l!==void 0&&Su(e,t,_,l,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(l=n[o],l!=null&&Te(e,t,o,l,n,null))}function U3(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,r=null,o=null,v=null,E=null,_=null;for(w in n){var M=n[w];if(n.hasOwnProperty(w)&&M!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":v=M;default:l.hasOwnProperty(w)||Te(e,t,w,null,l,M)}}for(var T in l){var w=l[T];if(M=n[T],l.hasOwnProperty(T)&&(w!=null||M!=null))switch(T){case"type":i=w;break;case"name":a=w;break;case"checked":E=w;break;case"defaultChecked":_=w;break;case"value":r=w;break;case"defaultValue":o=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,t));break;default:w!==M&&Te(e,t,T,w,l,M)}}jc(e,r,o,v,E,_,i,a);return;case"select":w=r=o=T=null;for(i in n)if(v=n[i],n.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":w=v;default:l.hasOwnProperty(i)||Te(e,t,i,null,l,v)}for(a in l)if(i=l[a],v=n[a],l.hasOwnProperty(a)&&(i!=null||v!=null))switch(a){case"value":T=i;break;case"defaultValue":o=i;break;case"multiple":r=i;default:i!==v&&Te(e,t,a,i,l,v)}t=o,n=r,l=w,T!=null?gl(e,!!n,T,!1):!!l!=!!n&&(t!=null?gl(e,!!n,t,!0):gl(e,!!n,n?[]:"",!1));return;case"textarea":w=T=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Te(e,t,o,null,l,a)}for(r in l)if(a=l[r],i=n[r],l.hasOwnProperty(r)&&(a!=null||i!=null))switch(r){case"value":T=a;break;case"defaultValue":w=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==i&&Te(e,t,r,a,l,i)}ws(e,T,w);return;case"option":for(var Q in n)if(T=n[Q],n.hasOwnProperty(Q)&&T!=null&&!l.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:Te(e,t,Q,null,l,T)}for(v in l)if(T=l[v],w=n[v],l.hasOwnProperty(v)&&T!==w&&(T!=null||w!=null))switch(v){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Te(e,t,v,T,l,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in n)T=n[W],n.hasOwnProperty(W)&&T!=null&&!l.hasOwnProperty(W)&&Te(e,t,W,null,l,T);for(E in l)if(T=l[E],w=n[E],l.hasOwnProperty(E)&&T!==w&&(T!=null||w!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,t));break;default:Te(e,t,E,T,l,w)}return;default:if(Oc(t)){for(var we in n)T=n[we],n.hasOwnProperty(we)&&T!==void 0&&!l.hasOwnProperty(we)&&Su(e,t,we,void 0,l,T);for(_ in l)T=l[_],w=n[_],!l.hasOwnProperty(_)||T===w||T===void 0&&w===void 0||Su(e,t,_,T,l,w);return}}for(var S in n)T=n[S],n.hasOwnProperty(S)&&T!=null&&!l.hasOwnProperty(S)&&Te(e,t,S,null,l,T);for(M in l)T=l[M],w=n[M],!l.hasOwnProperty(M)||T===w||T==null&&w==null||Te(e,t,M,T,l,w)}function M2(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function O3(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,r=a.initiatorType,o=a.duration;if(i&&o&&M2(r)){for(r=0,o=a.responseEnd,l+=1;l<n.length;l++){var v=n[l],E=v.startTime;if(E>o)break;var _=v.transferSize,M=v.initiatorType;_&&M2(M)&&(v=v.responseEnd,r+=_*(v<o?1:(o-E)/(v-E)))}if(--l,t+=8*(i+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xu=null,Eu=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function R2(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j2(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tu=null;function G3(){var e=window.event;return e&&e.type==="popstate"?e===Tu?!1:(Tu=e,!0):(Tu=null,!1)}var U2=typeof setTimeout=="function"?setTimeout:void 0,H3=typeof clearTimeout=="function"?clearTimeout:void 0,O2=typeof Promise=="function"?Promise:void 0,q3=typeof queueMicrotask=="function"?queueMicrotask:typeof O2<"u"?function(e){return O2.resolve(null).then(e).catch(B3)}:U2;function B3(e){setTimeout(function(){throw e})}function jn(e){return e==="head"}function G2(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),kl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Za(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Za(n);for(var i=n.firstChild;i;){var r=i.nextSibling,o=i.nodeName;i[ia]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}else n==="body"&&Za(e.ownerDocument.body);n=a}while(n);kl(t)}function H2(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function wu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wu(n),Mc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function L3(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ia])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function Z3(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Rt(e.nextSibling),e===null))return null;return e}function q2(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function _u(e){return e.data==="$?"||e.data==="$~"}function Du(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Y3(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nu=null;function B2(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Rt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function L2(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Z2(e,t,n){switch(t=nc(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Za(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mc(e)}var jt=new Map,Y2=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var dn=L.d;L.d={f:X3,r:Q3,D:V3,C:K3,L:J3,m:k3,X:F3,S:$3,M:W3};function X3(){var e=dn.f(),t=ki();return e||t}function Q3(e){var t=vl(e);t!==null&&t.tag===5&&t.type==="form"?ir(t):dn.r(e)}var Vl=typeof document>"u"?null:document;function X2(e,t,n){var l=Vl;if(l&&typeof t=="string"&&t){var a=Tt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Y2.has(a)||(Y2.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),Ie(t,"link",e),Ve(t),l.head.appendChild(t)))}}function V3(e){dn.D(e),X2("dns-prefetch",e,null)}function K3(e,t){dn.C(e,t),X2("preconnect",e,t)}function J3(e,t,n){dn.L(e,t,n);var l=Vl;if(l&&e&&t){var a='link[rel="preload"][as="'+Tt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Tt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Tt(n.imageSizes)+'"]')):a+='[href="'+Tt(e)+'"]';var i=a;switch(t){case"style":i=Kl(e);break;case"script":i=Jl(e)}jt.has(i)||(e=O({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),jt.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Ya(i))||t==="script"&&l.querySelector(Xa(i))||(t=l.createElement("link"),Ie(t,"link",e),Ve(t),l.head.appendChild(t)))}}function k3(e,t){dn.m(e,t);var n=Vl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Tt(l)+'"][href="'+Tt(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Jl(e)}if(!jt.has(i)&&(e=O({rel:"modulepreload",href:e},t),jt.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xa(i)))return}l=n.createElement("link"),Ie(l,"link",e),Ve(l),n.head.appendChild(l)}}}function $3(e,t,n){dn.S(e,t,n);var l=Vl;if(l&&e){var a=hl(l).hoistableStyles,i=Kl(e);t=t||"default";var r=a.get(i);if(!r){var o={loading:0,preload:null};if(r=l.querySelector(Ya(i)))o.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},n),(n=jt.get(i))&&Cu(e,n);var v=r=l.createElement("link");Ve(v),Ie(v,"link",e),v._p=new Promise(function(E,_){v.onload=E,v.onerror=_}),v.addEventListener("load",function(){o.loading|=1}),v.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ac(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(i,r)}}}function F3(e,t){dn.X(e,t);var n=Vl;if(n&&e){var l=hl(n).hoistableScripts,a=Jl(e),i=l.get(a);i||(i=n.querySelector(Xa(a)),i||(e=O({src:e,async:!0},t),(t=jt.get(a))&&Mu(e,t),i=n.createElement("script"),Ve(i),Ie(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function W3(e,t){dn.M(e,t);var n=Vl;if(n&&e){var l=hl(n).hoistableScripts,a=Jl(e),i=l.get(a);i||(i=n.querySelector(Xa(a)),i||(e=O({src:e,async:!0,type:"module"},t),(t=jt.get(a))&&Mu(e,t),i=n.createElement("script"),Ve(i),Ie(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Q2(e,t,n,l){var a=(a=se.current)?lc(a):null;if(!a)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Kl(n.href),n=hl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Kl(n.href);var i=hl(a).hoistableStyles,r=i.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=a.querySelector(Ya(e)))&&!i._p&&(r.instance=i,r.state.loading=5),jt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},jt.set(e,n),i||I3(a,e,n,r.state))),t&&l===null)throw Error(s(528,""));return r}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Jl(n),n=hl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Kl(e){return'href="'+Tt(e)+'"'}function Ya(e){return'link[rel="stylesheet"]['+e+"]"}function V2(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function I3(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ie(t,"link",n),Ve(t),e.head.appendChild(t))}function Jl(e){return'[src="'+Tt(e)+'"]'}function Xa(e){return"script[async]"+e}function K2(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Tt(n.href)+'"]');if(l)return t.instance=l,Ve(l),l;var a=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ve(l),Ie(l,"style",a),ac(l,n.precedence,e),t.instance=l;case"stylesheet":a=Kl(n.href);var i=e.querySelector(Ya(a));if(i)return t.state.loading|=4,t.instance=i,Ve(i),i;l=V2(n),(a=jt.get(a))&&Cu(l,a),i=(e.ownerDocument||e).createElement("link"),Ve(i);var r=i;return r._p=new Promise(function(o,v){r.onload=o,r.onerror=v}),Ie(i,"link",l),t.state.loading|=4,ac(i,n.precedence,e),t.instance=i;case"script":return i=Jl(n.src),(a=e.querySelector(Xa(i)))?(t.instance=a,Ve(a),a):(l=n,(a=jt.get(i))&&(l=O({},n),Mu(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ve(a),Ie(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ac(l,n.precedence,e));return t.instance}function ac(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,r=0;r<l.length;r++){var o=l[r];if(o.dataset.precedence===t)i=o;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Cu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ic=null;function J2(e,t,n){if(ic===null){var l=new Map,a=ic=new Map;a.set(n,l)}else a=ic,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[ia]||i[ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var o=l.get(r);o?o.push(i):l.set(r,[i])}}return l}function k2(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function P3(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $2(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function e5(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Kl(l.href),i=t.querySelector(Ya(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=cc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Ve(i);return}i=t.ownerDocument||t,l=V2(l),(a=jt.get(a))&&Cu(l,a),i=i.createElement("link"),Ve(i);var r=i;r._p=new Promise(function(o,v){r.onload=o,r.onerror=v}),Ie(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=cc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ru=0;function t5(e,t){return e.stylesheets&&e.count===0&&sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ru===0&&(Ru=62500*O3());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ru?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uc=null;function sc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,t.forEach(n5,e),uc=null,cc.call(e))}function n5(e,t){if(!(t.state.loading&4)){var n=uc.get(e);if(n)var l=n.get(null);else{n=new Map,uc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var r=a[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),l=r)}l&&n.set(null,l)}a=t.instance,r=a.getAttribute("data-precedence"),i=n.get(r)||l,i===l&&n.set(null,a),n.set(r,a),this.count++,l=cc.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Qa={$$typeof:X,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function l5(e,t,n,l,a,i,r,o,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_c(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.hiddenUpdates=_c(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function F2(e,t,n,l,a,i,r,o,v,E,_,M){return e=new l5(e,t,n,r,v,E,_,M,o),t=1,i===!0&&(t|=24),i=yt(3,null,null,t),e.current=i,i.stateNode=e,t=o0(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},m0(i),e}function W2(e){return e?(e=Al,e):Al}function I2(e,t,n,l,a,i){a=W2(a),l.context===null?l.context=a:l.pendingContext=a,l=xn(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=En(e,l,t),n!==null&&(ot(n,e,t),xa(n,e,t))}function P2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ju(e,t){P2(e,t),(e=e.alternate)&&P2(e,t)}function e1(e){if(e.tag===13||e.tag===31){var t=Fn(e,67108864);t!==null&&ot(t,e,67108864),ju(e,67108864)}}function t1(e){if(e.tag===13||e.tag===31){var t=Et();t=Dc(t);var n=Fn(e,t);n!==null&&ot(n,e,t),ju(e,t)}}var fc=!0;function a5(e,t,n,l){var a=N.T;N.T=null;var i=L.p;try{L.p=2,Uu(e,t,n,l)}finally{L.p=i,N.T=a}}function i5(e,t,n,l){var a=N.T;N.T=null;var i=L.p;try{L.p=8,Uu(e,t,n,l)}finally{L.p=i,N.T=a}}function Uu(e,t,n,l){if(fc){var a=Ou(l);if(a===null)bu(e,t,l,rc,n),l1(e,l);else if(u5(a,e,t,n,l))l.stopPropagation();else if(l1(e,l),t&4&&-1<c5.indexOf(e)){for(;a!==null;){var i=vl(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Vn(i.pendingLanes);if(r!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var v=1<<31-gt(r);o.entanglements[1]|=v,r&=~v}Qt(i),(ye&6)===0&&(Ki=ht()+500,qa(0))}}break;case 31:case 13:o=Fn(i,2),o!==null&&ot(o,i,2),ki(),ju(i,2)}if(i=Ou(l),i===null&&bu(e,t,l,rc,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else bu(e,t,l,null,n)}}function Ou(e){return e=Hc(e),Gu(e)}var rc=null;function Gu(e){if(rc=null,e=dl(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===31){if(e=D(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return rc=e,null}function n1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q1()){case fs:return 2;case rs:return 8;case Pa:case V1:return 32;case os:return 268435456;default:return 32}default:return 32}}var Hu=!1,Un=null,On=null,Gn=null,Va=new Map,Ka=new Map,Hn=[],c5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l1(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":Va.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(t.pointerId)}}function Ja(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=vl(t),t!==null&&e1(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function u5(e,t,n,l,a){switch(t){case"focusin":return Un=Ja(Un,e,t,n,l,a),!0;case"dragenter":return On=Ja(On,e,t,n,l,a),!0;case"mouseover":return Gn=Ja(Gn,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return Va.set(i,Ja(Va.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Ka.set(i,Ja(Ka.get(i)||null,e,t,n,l,a)),!0}return!1}function a1(e){var t=dl(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,zs(e.priority,function(){t1(n)});return}}else if(t===31){if(t=D(n),t!==null){e.blockedOn=t,zs(e.priority,function(){t1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ou(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Gc=l,n.target.dispatchEvent(l),Gc=null}else return t=vl(n),t!==null&&e1(t),e.blockedOn=n,!1;t.shift()}return!0}function i1(e,t,n){oc(e)&&n.delete(t)}function s5(){Hu=!1,Un!==null&&oc(Un)&&(Un=null),On!==null&&oc(On)&&(On=null),Gn!==null&&oc(Gn)&&(Gn=null),Va.forEach(i1),Ka.forEach(i1)}function dc(e,t){e.blockedOn===t&&(e.blockedOn=null,Hu||(Hu=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,s5)))}var vc=null;function c1(e){vc!==e&&(vc=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(Gu(l||n)===null)continue;break}var i=vl(n);i!==null&&(e.splice(t,3),t-=3,O0(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function kl(e){function t(v){return dc(v,e)}Un!==null&&dc(Un,e),On!==null&&dc(On,e),Gn!==null&&dc(Gn,e),Va.forEach(t),Ka.forEach(t);for(var n=0;n<Hn.length;n++){var l=Hn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)a1(n),n.blockedOn===null&&Hn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],r=a[it]||null;if(typeof i=="function")r||c1(n);else if(r){var o=null;if(i&&i.hasAttribute("formAction")){if(a=i,r=i[it]||null)o=r.formAction;else if(Gu(a)!==null)continue}else o=r.action;typeof o=="function"?n[l+1]=o:(n.splice(l,3),l-=3),c1(n)}}}function u1(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function qu(e){this._internalRoot=e}hc.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,l=Et();I2(n,l,e,t,null,null)},hc.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;I2(e.current,2,null,e,null,null),ki(),t[ol]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var t=gs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hn.length&&t!==0&&t<Hn[n].priority;n++);Hn.splice(n,0,e),n===0&&a1(e)}};var s1=c.version;if(s1!=="19.2.3")throw Error(s(527,s1,"19.2.3"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(t),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var f5={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{na=mc.inject(f5),mt=mc}catch{}}return $a.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,l="",a=mr,i=gr,r=zr;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=F2(e,1,!1,null,null,n,l,null,a,i,r,u1),e[ol]=t.current,pu(e),new qu(t)},$a.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var l=!1,a="",i=mr,r=gr,o=zr,v=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),t=F2(e,1,!0,t,n??null,l,a,v,i,r,o,u1),t.context=W2(null),n=t.current,l=Et(),l=Dc(l),a=xn(l),a.callback=null,En(n,a,l),n=l,t.current.lanes=n,aa(t,n),Qt(t),e[ol]=t.current,pu(e),new hc(t)},$a.version="19.2.3",$a}var y1;function b5(){if(y1)return Zu.exports;y1=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),Zu.exports=p5(),Zu.exports}var S5=b5();const x5=o5(S5);class p1 extends B.Component{constructor(c){super(c),this.state={error:!1}}static getDerivedStateFromError(c){return{error:!0}}static getDerivedStateFromProps(c){return{error:c.error}}componentDidCatch(c,f){this.props.onError(c,f)}render(){return this.state.error?null:this.props.children}}const Vu={0:BigInt(1),1:BigInt(10),2:BigInt(100),3:BigInt(1e3),4:BigInt(1e4),5:BigInt(1e5),6:BigInt(1e6),7:BigInt(1e7),8:BigInt(1e8),9:BigInt(1e9),10:BigInt(1e10)},Ku=u=>(Vu[u]||(Vu[u]=BigInt(10)**BigInt(u)),Vu[u]),Ju=16,vn=16,zc={PI:"3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989",TAU:"6.2831853071795864769252867665590057683943387987502116419498891846156328125724179972560696506842341359642961730265646132941876892191011644634507188162569622349005682054038770422111192892458979098607639288576219513318668922569512964675735663305424038182912971338469206972209086532964267872145204982825474491740132126311763497630418419256585081834307287357851807200226610610976409330427682939038830232188661145407315191839061843722347638652235862102370961489247599254991347037715054497824558763660238982596673467248813132861720427898927904494743814043597218874055410784343525863535047693496369353388102640011362542905271216555715426855155792183472743574429368818024499068602930991707421015845593785178470840399122242580439217280688363196272595495426199210374144226999999967459560999021194634656321926371900489189106938166052850446165066893700705238623763420200062756775057731750664167628412343553382946071965069808575109374623191257277647075751875039155637155610643424536132260038557532223918184328403978",ETA:"1.5707963267948966192313216916397514420985846996875529104874722961539082031431044993140174126710585339910740432566411533235469223047752911158626797040642405587251420513509692605527798223114744774651909822144054878329667230642378241168933915826356009545728242834617301743052271633241066968036301245706368622935033031577940874407604604814146270458576821839462951800056652652744102332606920734759707558047165286351828797959765460930586909663058965525592740372311899813747836759428763624456139690915059745649168366812203283215430106974731976123685953510899304718513852696085881465883761923374092338347025660002840635726317804138928856713788948045868185893607342204506124767150732747926855253961398446294617710099780560645109804320172090799068148873856549802593536056749999991864890249755298658664080481592975122297276734541513212611541266723425176309655940855050015689193764432937666041907103085888345736517991267452143777343655797814319411768937968759788909288902660856134033065009639383055979546082100994",PHI:"1.6180339887498948482045868343656381177203091798057628621354486227052604628189024497072072041893911374847540880753868917521266338622235369317931800607667263544333890865959395829056383226613199282902678806752087668925017116962070322210432162695486262963136144381497587012203408058879544547492461856953648644492410443207713449470495658467885098743394422125448770664780915884607499887124007652170575179788341662562494075890697040002812104276217711177780531531714101170466659914669798731761356006708748071013179523689427521948435305678300228785699782977834784587822891109762500302696156170025046433824377648610283831268330372429267526311653392473167111211588186385133162038400522216579128667529465490681131715993432359734949850904094762132229810172610705961164562990981629055520852479035240602017279974717534277759277862561943208275051312181562855122248093947123414517022373580577278616008688382952304592647878017889921990270776903895321968198615143780314997411069260886742962267575605231727775203536139362",GAMMA:"0.57721566490153286060651209008240243104215933593992359880576723488486772677766467093694706329174674951463144724980708248096050401448654283622417399764492353625350033374293733773767394279259525824709491600873520394816567085323315177661152862119950150798479374508570574002992135478614669402960432542151905877553526733139925401296742051375413954911168510280798423487758720503843109399736137255306088933126760017247953783675927135157722610273492913940798430103417771778088154957066107501016191663340152278935867965497252036212879226555953669628176388792726801324310104765059637039473949576389065729679296010090151251959509222435014093498712282479497471956469763185066761290638110518241974448678363808617494551698927923018773910729457815543160050021828440960537724342032854783670151773943987003023703395183286900015581939880427074115422278197165230110735658339673487176504919418123000406546931429992977795693031005030863034185698032310836916400258929708909854868257773642882539549258736295961332985747393",E:"2.718281828459045235360287471352662497757247093699959574966967627724076630353547594571382178525166427427466391932003059921817413596629043572900334295260595630738132328627943490763233829880753195251019011573834187930702154089149934884167509244761460668082264800168477411853742345442437107539077744992069551702761838606261331384583000752044933826560297606737113200709328709127443747047230696977209310141692836819025515108657463772111252389784425056953696770785449969967946864454905987931636889230098793127736178215424999229576351482208269895193668033182528869398496465105820939239829488793320362509443117301238197068416140397019837679320683282376464804295311802328782509819455815301756717361332069811250996181881593041690351598888519345807273866738589422879228499892086805825749279610484198444363463244968487560233624827041978623209002160990235304369941849146314093431738143640546253152096183690888707016768396424378140592714563549061303107208510383750510115747704171898610687396965521267154688957035035402",SQRT2:"1.41421356237309504880168872420969807856967187537694807317667973799073247846210703885038753432764157273501384623091229702492483605585073721264412149709993583141322266592750559275579995050115278206057147010955997160597027453459686201472851741864088919860955232923048430871432145083976260362799525140798968725339654633180882964062061525835239505474575028775996172983557522033753185701135437460340849884716038689997069900481503054402779031645424782306849293691862158057846311159666871301301561856898723723528850926486124949771542183342042856860601468247207714358548741556570696776537202264854470158588016207584749226572260020855844665214583988939443709265918003113882464681570826301005948587040031864803421948972782906410450726368813137398552561173220402450912277002269411275736272804957381089675040183698683684507257993647290607629969413804756548237289971803268024744206292691248590521810044598421505911202494413417285314781058036033710773091828693147101711116839165817268894197587165821521282295184884",SQRT3:"1.73205080756887729352744634150587236694280525381038062805580697945193301690880003708114618675724857567562614141540670302996994509499895247881165551209437364852809323190230558206797482010108467492326501531234326690332288665067225466892183797122704713166036786158801904998653737985938946765034750657605075661834812960610094760218719032508314582952395983299778982450828871446383291734722416398458785539766795806381835366611084317378089437831610208830552490167002352071114428869599095636579708716849807289949329648428302078640860398873869753758231731783139599298300783870287705391336956331210370726401924910676823119928837564114142201674275210237299427083105989845947598766428889779614783795839022885485290357603385280806438197234466105968972287286526415382266469842002119548415527844118128653450703519165001668929441548084607127714399976292683462957743836189511012714863874697654598245178855097537901388066496191196222295711055524292372319219773826256163146884203285371668293864961191704973883639549593",LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286248633409525465082806756666287369098781689482907208325554680843799894826233198528393505308965377732628846163366222287698219886746543667474404243274365155048934314939391479619404400222105101714174800368808401264708068556774321622835522011480466371565912137345074785694768346361679210180644507064800027750268491674655058685693567342067058113642922455440575892572420824131469568901675894025677631135691929203337658714166023010570308963457207544037084746994016826928280848118428931484852494864487192780967627127577539702766860595249671667418348570442250719796500471495105049221477656763693866297697952211071826454973477266242570942932258279850258550978526538320760672631716430950599508780752371033310119785754733154142180842754386359177811705430982748238504564801909561029929182431823752535770975053956518769751037497088869218020518933950723853920514463419726528728696511086257149219884997",LN2:"0.6931471805599453094172321214581765680755001343602552541206800094933936219696947156058633269964186875420014810205706857336855202357581305570326707516350759619307275708283714351903070386238916734711233501153644979552391204751726815749320651555247341395258829504530070953263666426541042391578149520437404303855008019441706416715186447128399681717845469570262716310645461502572074024816377733896385506952606683411372738737229289564935470257626520988596932019650585547647033067936544325476327449512504060694381471046899465062201677204245245296126879465461931651746813926725041038025462596568691441928716082938031727143677826548775664850856740776484514644399404614226031930967354025744460703080960850474866385231381816767514386674766478908814371419854942315199735488037516586127535291661000710535582498794147295092931138971559982056543928717000721808576102523688921324497138932037843935308877482597017155910708823683627589842589185353024363421436706118923678919237231467232172053401649256872747782344535347",LEMNISCATE:"2.622057554292119810464839589891119413682754951431623162816821703800790587070414250230295532961429093446135752671783218055608956901393935694701119434775235840422641497164906951936899979932146072383121390810206221897429600856554539772305369549710288888325526487021329012097540833128568511729752229214296692430513968456455539432881415381331735108409226312132476667633414509988603429421479224714487963907872564189521811027252516629964333384660679333635093139808526237739409142626489848034804572541477046175421256342129955863129980224054609012091499139897885645312480971101149665075060542093841723886900040274785389625483030580303946324783219558325522973037191341918983592199914229536672569106861130938134980725552913015093730332611087045814240765781886530766932476940761626721636249549480066760961388122322476925591018705775743614648912879832686662030731373313562107612636379245785801781364105361306093563472025022592312041202668270457723044608378953311357002940577442011806826257962983642671092116",GAUSS:"0.83462684167407318628142973279904680899399301349034700244982737010368199270952641186969116035127532412906785035241201008672478900763475039265906052674271256032068599897375152146157410719066771476231124461664405187138396784514028386920045138133589075855302049848005280446931643580936897895689068917412073729109406655817518702547740107467837971652635675333190654545251769296103056005406849466254896421861429472075214865365816107620214603752034877535962085677116829220032535910958989989306983319969697733588373910495908596740291824695687469164857451910672757407861143814276105801843203454261549375461009570891175210684201358033124753921938139023239090952343408874222691843888629942222592633521639478011022099075214906939643083603825771794119487059673964272655835084832169397133695059511623882815154747022864207775775371060188804723248904618525301889597025689818013878804895735929346540394633132158338785532854522493441641765173202349682703374720941476496496460623737943995705190866698254812596246577649"};class b1{constructor(c=0,f){if(typeof c=="bigint"){this._n=c,this.precision=f||Ju;return}typeof c=="number"&&(c===0?c="0.0":c=c.toFixed(-Math.log10(Math.abs(c))+Ju)),typeof c=="string"&&(c.match(/\d+.?e-?\d+/)&&(c=parseFloat(c).toFixed(Ju)),c in zc&&(c=zc[c]));let[s,d]=c.split(".").concat("");this.precision=f||d.length||1,this._n=BigInt(s+d.padEnd(this.precision,"0").slice(0,this.precision))}toPrecision(c){c!==this.precision&&(c>this.precision?this._n*=BigInt(10)**BigInt(c-this.precision):this._n/=BigInt(10)**BigInt(this.precision-c),this.precision=c)}adapt(c){return c=pe(c),this.precision>c.precision?c.toPrecision(this.precision):this.precision<c.precision&&this.toPrecision(c.precision),c}add(c){return c instanceof Vt?c.add(this):(c=this.adapt(c),pe(this._n+c._n,this.precision))}subtract(c){return c instanceof Vt?c.neg().add(this):(c=this.adapt(c),pe(this._n-c._n,this.precision))}multiply(c){return c instanceof Vt?c.multiply(this):(c=this.adapt(c),pe(this._n*c._n/Ku(this.precision),this.precision))}divide(c){return c instanceof Vt?c.pow(-1).multiply(this):(c=this.adapt(c),pe(this._n*Ku(this.precision)/c._n,this.precision))}pow(c){if(c instanceof Vt)return c.pow(this);let f=this;if(c%1===0){for(let s=1;s<c;s++)f=f.multiply(this);return f}return c=this.adapt(c),f.log().multiply(c).exp()}tetra(c){let f=pe(1);for(let s=0;s<c;s++)f=this.pow(f);return f}abs(){return pe(this._n<0?-this._n:this._n,this.precision)}sign(){return pe(this._n<0?-1:this._n>0?1:0)}neg(){return this._n=-this._n,this}nop(){return this}sqrt(){const c=this.precision;let f=this._n,s=f,d=(f+1n)/2n;for(;d<s;)s=d,d=(s+f/s)/2n;return pe(s,c)}atan(){const c=this.precision;let f=this,s=pe(0,c);for(let d=1;d<vn;d+=2)s=s.add(f.pow(d).divide(d)),f=f.neg();return s}exp(){const c=this.precision;let f=this,s=pe(1,c);for(let d=1;d<vn;d++)s=s.add(f.pow(d).divide(d));return s}frexp(){let c=this,f=pe();for(;c.gt(pe(1));)c=c.divide(2),f=f.add(1);return[c,f]}log(){const c=this.precision,[f,s]=this.frexp();let d=f.subtract(1),h=pe(),b=1;for(let D=1;D<c;D++)h=h.add(d.pow(D).divide(D).multiply(b)),b*=-1;return h.add(s.multiply(E5(c)))}cos(){const c=this.precision;let f=this,s=pe(1,c),d=-1;for(let h=2;h<vn;h+=2)s=s.add(f.pow(h).divide(h).neg().multiply(d)),d*=-1;return s}sin(){let c=this,f=c,s=-1;for(let d=3;d<vn;d+=2)f=f.add(c.pow(d).divide(d).neg().multiply(s)),s*=-1;return f}tan(){this.precision;let c=this,f=c,s=1;for(let d=3;d<vn;d+=2)f=f.add(c.pow(d).divide(d).multiply(s)),s*=-1;return f}sinh(){const c=this.precision;let f=this,s=pe(1,c);for(let d=2;d<vn;d+=2)s=s.add(f.pow(d).divide(d));return s}cosh(){const c=this.precision;let f=this,s=pe(1,c);for(let d=2;d<vn;d+=2)s=s.add(f.pow(d).divide(d));return s}acos(){const c=this.precision;let f=this,s=pe(0,c),d=1;for(let h=1;h<vn;h+=2)s=s.add(f.pow(h).divide(h).multiply(d)),d*=-1;return s}asin(){const c=this.precision;let f=this,s=pe(0,c),d=1;for(let h=1;h<vn;h+=2)s=s.add(f.pow(h).divide(h).multiply(d)),d*=-1;return s}toExp(){}eq(c){return c=this.adapt(c),this._n===c._n}gt(c){return c=this.adapt(c),this._n>c._n}lt(c){return c=this.adapt(c),this._n<c._n}gte(c){return c=this.adapt(c),this._n>=c._n}lte(c){return c=this.adapt(c),this._n<=c._n}toNumber(){return Number(this._n)/Number(Ku(this.precision))}toString(){let c=this._n.toString().replace("-","").padStart(this.precision+1,"0");return c=(c.slice(0,-this.precision)+"."+c.slice(-this.precision)).replace(/(\.0*|0+)$/,""),this._n<0?"-"+c:c}toFloat(){return parseFloat(this.toString())}}const pe=(u,c)=>!c&&u instanceof b1?u:new b1(u,c);let Vt=class dt{constructor(c,f){this.re=c,this.im=f}add(c){return c=A(c),new dt(this.re.add(c.re),this.im.add(c.im))}subtract(c){return c=A(c),new dt(this.re.subtract(c.re),this.im.subtract(c.im))}multiply(c){return c=A(c),new dt(this.re.multiply(c.re).subtract(this.im.multiply(c.im)),this.re.multiply(c.im).add(this.im.multiply(c.re)))}divide(c){c=A(c);const f=c.re.multiply(c.re).add(c.im.multiply(c.im));return new dt(this.re.multiply(c.re).add(this.im.multiply(c.im)).divide(f),this.im.multiply(c.re).subtract(this.re.multiply(c.im)).divide(f))}neg(){return new dt(this.re.neg(),this.im.neg())}exp(){const c=this.re.exp();return new dt(this.im.cos().multiply(c),this.im.sin().multiply(c))}atan2(){const{re:c,im:f}=this,s=c.abs(),d=f.abs();if(s._n===0n&&d._n===0n)return pe(0);if(s._n===0n)return f>0n?pe(Math.PI/2):pe(-Math.PI/2);const b=f.divide(c).atan();return c._n>0n?b:f._n>=0n?b.add(Math.PI):b.subtract(Math.PI)}sqrt(){const c=this.abs().sqrt(),f=this.arg().divide(2);return new dt(c.multiply(f.cos()),c.multiply(f.sin()))}cos(){return new dt(this.re.cos().multiply(this.im.sinh()),this.re.sin().multiply(this.im.cosh()))}sin(){return new dt(this.re.sin().multiply(this.im.cosh()),this.re.cos().multiply(this.im.sinh()))}tan(){return this.sin().divide(this.cos())}sinh(){return new dt(this.re.sinh().multiply(this.im.cos()),this.re.cosh().multiply(this.im.sin()))}cosh(){return new dt(this.re.cosh().multiply(this.im.cos()),this.re.sinh().multiply(this.im.sin()))}tanh(){return this.sinh().divide(this.cosh())}asin(){return this.multiply(this).neg().add(1).sqrt().add(this.im).log().neg().multiply(A(0,1))}acos(){return this.multiply(this).neg().add(1).sqrt().add(this).log().neg().multiply(A(0,1))}atan(){return this.add(A(0,1)).log().neg().multiply(A(0,.5))}asinh(){return this.multiply(this).add(1).sqrt().add(this).log()}acosh(){return this.multiply(this).subtract(1).sqrt().add(this).log()}atanh(){return this.add(1).divide(this.neg().add(1)).log().multiply(A(.5))}log(){return new dt(this.abs().log(),this.arg())}pow(c){if(c=A(c),c.im.toNumber()===0){const f=c.re.toNumber();if(f%1===0){if(f===0)return A(1);if(f===1)return this;if(f===2)return this.multiply(this);if(f===3)return this.multiply(this).multiply(this);if(f===4){const d=this.multiply(this);return d.multiply(d)}if(f===5){const d=this.multiply(this);return d.multiply(d).multiply(this)}if(f===6){const d=this.multiply(this);return d.multiply(d).multiply(d)}if(f===7){const d=this.multiply(this);return d.multiply(d).multiply(d).multiply(this)}if(f===8){const d=this.multiply(this),h=d.multiply(d);return h.multiply(h)}if(f===9){const d=this.multiply(this),h=d.multiply(d);return h.multiply(h).multiply(this)}let s=this;for(let d=1;d<f;d++)s=s.multiply(this);return s}}return this.re.toNumber()===0&&this.im.toNumber()===0?A(0):c.re.toNumber()===0&&c.im.toNumber()===0?A(1):this.log().multiply(c).exp()}tetra(c){let f=A(1);for(let s=0;s<c;s++)f=this.pow(f);return f}norm2(){return this.re.multiply(this.re).add(this.im.multiply(this.im))}norm(){return pe(this.norm2().sqrt())}arg(){return this.atan2()}conj(){return A(this.re,-this.im)}real(){return this.re}imag(){return this.im}toString(){return`complex: <${this.re}+${this.im}i>`}to2fv(){return[this.re.toNumber(),this.im.toNumber()]}static isComplexString(c){return c.match(/^complex: <.+\+.+i>$/)}static fromString(c){const f=c.match(/^complex: <(.+)\+(.+)i>$/);if(!f)throw new Error("Invalid complex string");const[,s,d]=f;return new dt(pe(s),pe(d))}};const E5=u=>pe("0.6931471805599453094172321214581765680755001343602552541206800094933936219696947156058633269964186875420014810205706857336855202357581305570326707516350759619307275708283714351903070386238916734711233501153644979552391204751726815749320651555247341395258829504530070953263666426541042391578149520437404303855008019441706416715186447128399681717845469570262716310645461502572074024816377733896385506952606683411372738737229289564935470257626520988596932019650585547647033067936544325476327449512504060694381471046899465",u),A=(u=0,c=0,f=null)=>u instanceof Vt?u:new Vt(pe(u,f),pe(c,f));window.m=pe;window.cx=A;const A5={whitespace:/^\s+/,float:/^([0-9]+([.][0-9]*)?|[.][0-9]+)/,integer:/^[0-9]+/,operator:/^(\*\*|[+\-*/%]|\^{1,2}|\|-\|)/,unaryPrefix:/^~/,unarySuffix:/^#/,identifier:/^[a-zA-Z_][a-zA-Z0-9_]*'*/,pipe:/^\|/,lparen:/^\(/,rparen:/^\)/,comma:/^,/},Ut={"+":1,"-":2,"*":3,"/":4,"%":5,"~":5,"^":6,"^^":6};class T5{constructor(c,f,s,d){this.type=c,this.value=f,this.start=s,this.end=d}toString(){return`<${this.type}: ${this.value} at ${this.start}-${this.end}>`}}const w5={"+":"cadd","-":"csub","*":"cmul","/":"cdiv","%":"cmod","^":"cpow","^^":"ctetra","|-|":"diffabs"},Fu={R:"R",I:"I",sqrt:"csqrt",cos:"ccos",sin:"csin",tan:"ctan",acos:"cacos",asin:"casin",atan:"catan",cosh:"ccosh",sinh:"csinh",tanh:"ctanh",acosh:"cacosh",asinh:"casinh",atanh:"catanh",log:"clog",exp:"cexp",expint:"cexpint",lint:"clint",abs:"cnorm",norm:"cnorm",arg:"carg",polar:"cpolar",unpolar:"cunpolar",mod:"cmod",beta:"cbeta","beta'":"cdbeta",gamma:"cgamma","gamma'":"cdgamma",factorial:"cfactorial",eta:"ceta",zeta:"czeta","zeta'":"cdzeta",psi:"cpsi",polygamma:"cpolygamma",phi:"cphi",xi:"cxi",li:"cli",sn:"csn",cn:"ccn",dn:"cdn",tania:"ctania","tania'":"cdtania",atania:"catania","atania'":"cdatania",doya:"cdoya",filog:"cfilog",tet:"ctet",ate:"cate",tetra:"ctetranat",fibonacci:"cfibonacci",weierstrass:"cweierstrass","weierstrass'":"cdweierstrass",weierstrassr:"cweierstrassr",nome:"cnome",ellk:"cellk",ellfi:"cellipticFi",erf:"cerf","erf'":"cderf",erfc:"cerfc",erfcx:"cerfcx",erfi:"cerfi",dawson:"cdawson",faddeeva:"cfaddeeva","faddeeva'":"cdfaddeeva",fresnels:"cfresnels",fresnelc:"cfresnelc",fresnelf:"cfresnelf",fresnelg:"cfresnelg"},S1={"+":(u,c)=>u+c,"-":(u,c)=>u-c,"*":(u,c)=>u*c,"/":(u,c)=>u/c,"%":(u,c)=>u%c,"^":(u,c)=>u**c,"^^":(u,c)=>{let f=1;for(let s=0;s<c;s++)f=u**f;return f}},_5={"-":"-","~":"conj",abs:"abs",sign:"sign"},D5={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"mod","^":"pow","^^":"tetra"},N5={"-":"neg","~":"conj",abs:"abs",sign:"sign"};class U{constructor(c,f,s){this.type=c,this.left=f,this.right=s}is(c){return this.type===c.type&&this.left.is(c.left)&&this.right.is(c.right)}clone(c=null,f=null){let s=this.left,d=this.right;return c&&(s.is(c)&&(s=f),d.is(c)&&(d=f)),new U(this.type,s.clone(c,f),d.clone(c,f))}isPureReal(){return this.left.isPureReal()&&this.right.isPureReal()||this.left.isPureImag()&&this.right.isPureImag()}isPureImag(){return["+","-"].includes(this.type)?this.left.isPureImag()&&this.right.isPureImag():["*","/"].includes(this.type)?this.left.isPureImag()&&this.right.isPureReal()||this.left.isPureReal()&&this.right.isPureImag():!1}toTree(){return`<${this.type}: ${this.left.toTree()} ${this.right.toTree()}>`}toString(){let c=this.left.toString(),f=this.right.toString();return this.type==="complex"?`(${c} + ${f}i)`:((this.left instanceof U&&Ut[this.left.type]<Ut[this.type]||Ut[this.left.type]===Ut[this.type]&&["-","/","^","^^"].includes(this.type))&&(c=`(${c})`),(this.right instanceof U&&Ut[this.right.type]<Ut[this.type]||Ut[this.right.type]===Ut[this.type]&&["-","/","^","^^"].includes(this.type))&&(f=`(${f})`),["^","^^"].includes(this.type)?`${c}${this.type}${f}`:`${c} ${this.type} ${f}`)}toShader(){if(this.type==="^"&&(this.right.type==="number"||this.right instanceof Qe&&this.right.operand.type==="number")){let c=0;if(this.right instanceof Qe?c=this.right.operand.value*(this.right.type==="-"?-1:1):c=this.right.value,c%1===0)return c===1?this.left.toShader():c>0&&c<10?`cpow${c}(${this.left.toShader()})`:`cpow(${this.left.toShader()}, ${c})`}return`${w5[this.type]}(${this.left.toShader()}, ${this.right.toShader()})`}toComplex(){return`(${this.left.toComplex()}).${D5[this.type]}(${this.right.toComplex()})`}toDerivative(c,f){const s=[...c,...f];if(["+","-"].includes(this.type))return new U(this.type,this.left.toDerivative(c,f),this.right.toDerivative(c,f));if(this.type==="*")return new U("+",new U("*",this.left.toDerivative(c,f),this.right),new U("*",this.left,this.right.toDerivative(c,f)));if(this.type==="/")return new U("/",new U("-",new U("*",this.left.toDerivative(c,f),this.right),new U("*",this.left,this.right.toDerivative(c,f))),new U("^",this.right,new I("number",2)));if(this.type==="^")return new U("*",new U("^",this.left,new U("-",this.right,new I("number",1))),new U("+",new U("*",this.right,this.left.toDerivative(c,f)),new U("*",new U("*",this.left,new Ne("log",[this.left])),this.right.toDerivative(c,f))));if(this.type==="^^"){if((this.left.type==="number"||this.left.type==="identifier"&&!s.includes(this.left.value))&&(this.right.type==="number"||this.right.type==="identifier"&&!s.includes(this.right.value)))return this;const d=(h,b)=>b<=1?new I("number",1):new U("*",new U("^^",h,new I("number",b)),new U("+",new U("*",d(h,b-1),new Ne("log",[h])),new U("*",new U("^^",h,new I("number",b-1)),new U("/",new I("number",1),h))));if(this.right.type==="number")return new U("*",this.left.toDerivative(c,f),d(this.left,this.right.value))}return new U(this.type,this.left.toDerivative(c,f),this.right.toDerivative(c,f))}simplify(){const c=this.left.simplify(),f=this.right.simplify();if(this.type==="+"){if(c.type==="number"&&c.value===0)return f;if(f.type==="number"&&f.value===0)return c}if(this.type==="-"){if(c.type==="number"&&c.value===0)return new Qe("-",f).simplify();if(f.type==="number"&&f.value===0)return c}if(this.type==="*"){if(c.type==="number"&&c.value===0||f.type==="number"&&f.value===0)return new I("number",0);if(c.type==="number"&&c.value===1)return f;if(f.type==="number"&&f.value===1)return c}if(this.type==="/"){if(c.type==="number"&&c.value===0)return new I("number",0);if(f.type==="number"&&f.value===1)return c}if(this.type==="^"&&(f.type==="number"||f instanceof Qe&&f.operand.type==="number")){let s=0;if(f instanceof Qe?s=f.operand.value*(f.type==="-"?-1:1):s=f.value,s===0)return new I("number",1);if(s===1)return c;if(c.type==="^"&&c.right.type==="number")return new U("^",c.left,new I("number",c.right.value*s)).simplify()}if(this.type==="^^"&&(f.type==="number"||f instanceof Qe&&f.operand.type==="number")){let s=0;if(f instanceof Qe?s=f.operand.value*(f.type==="-"?-1:1):s=f.value,s===0)return new I("number",1);if(s===1)return c}if(f.type==="number"&&c.type==="number"){const s=this.type==="**"?"^":this.type;return S1[s](c.value,f.value)%1===0?new I("number",S1[s](c.value,f.value)):this}if(c.type==="complex"&&f.isPureReal()){if(["+","-"].includes(this.type))return new fl(new U(this.type,c.real,f),c.imag).simplify();if(["*","/"].includes(this.type))return new fl(new U(this.type,c.real,f),new U(this.type,c.imag,f)).simplify()}if(c.isPureReal()&&f.type==="complex"){if(["+","-"].includes(this.type))return new fl(new U(this.type,c,f.real),f.imag).simplify();if(["*","/"].includes(this.type))return new fl(new U(this.type,c,f.real),new U(this.type,c,f.imag)).simplify()}if(c.type==="complex"&&f.type==="complex"){if(["+","-"].includes(this.type))return new fl(new U(this.type,c.real,f.real),new U(this.type,c.imag,f.imag)).simplify();if(this.type==="*")return new fl(new U("-",new U("*",c.real,f.real),new U("*",c.imag,f.imag)),new U("+",new U("*",c.real,f.imag),new U("*",c.imag,f.real))).simplify();if(this.type==="/"){const s=new U("+",new U("^",f.real,2),new U("^",f.imag,2));return new fl(new U("/",new U("+",new U("*",c.real,f.real),new U("*",c.imag,f.imag)),s),new U("/",new U("-",new U("*",c.imag,f.real),new U("*",c.real,f.imag)),s)).simplify()}}return new U(this.type,c,f)}}class Qe{constructor(c,f){this.type=c,this.operand=f}is(c){return this.type===c.type&&this.operand.is(c.operand)}clone(c=null,f=null){let s=this.operand;return c&&s.is(c)&&(s=f),new Qe(this.type,s.clone(c,f))}isPureReal(){return this.operand.isPureReal()}isPureImag(){return["+","-","~"].includes(this.type)&&this.operand.isPureImag()}toTree(){return`<${this.type}: ${this.operand.toTree()}>`}toString(){let c=this.operand.toString();return(this.operand instanceof U&&Ut[this.operand.type]<Ut[this.type]||Ut[this.operand.type]===Ut[this.type]&&["-","/","^"].includes(this.type))&&(c=`(${c})`),`${this.type}${c}`}toShader(){return this.type==="+"?this.operand.toShader():`${_5[this.type]}(${this.operand.toShader()})`}toComplex(){return this.type==="+"?this.operand.toComplex():`(${this.operand.toComplex()}).${N5[this.type]}()`}toDerivative(c,f){return new Qe(this.type,this.operand.toDerivative(c,f))}simplify(){const c=this.operand.simplify();return this.type==="+"?c:this.type==="'"?c.toDerivative([],["z","z_1"]).simplify():this.type==="#"?new U("/",c,c.toDerivative([],["z","z_1"])).simplify():this.type==="-"&&c.type==="number"?new I("number",-c.value):c instanceof Qe&&["-","~"].includes(this.type)&&c.type===this.type?c.operand:new Qe(this.type,c)}}class Ne{constructor(c,f){this.name=c,this.args=f,this.type="function"}is(c){return this.type===c.type&&this.name===c.name&&this.args.every((f,s)=>f.is(c.args[s]))}clone(c=null,f=null){return new Ne(this.name,this.args.map(s=>s.clone(c,f)))}isPureReal(){return["abs","re","im"].includes(this.name)}isPureImag(){return!1}toTree(){return`<${this.name}(): ${this.args.map(c=>c.toTree()).join(", ")}>`}toString(){return`${this.name}(${this.args.map(c=>c.toString()).join(", ")})`}toShader(){if(["sum","product"].includes(this.name)&&this.args.length===4&&this.args[0].type==="identifier"&&this.args[1].type==="number"&&this.args[2].type==="number"){const[c,f,s,d]=this.args;let h=new I("number",this.name==="sum"?0:1);for(let b=f.value;b<=s.value;b++)h=new U(this.name==="sum"?"+":"*",h,d.clone(c,new I("number",b)));return h.simplify().toShader()}if(this.args.length===0)return`${Fu[this.name]||this.name}()`;if(this.name==="re"){const c=this.args[0].toShader();return this.args[0].type==="number"?c:`vec2(${c}.x, 0.)`}return this.name==="im"?this.args[0].type==="number"?new I("number",0).toShader():`vec2(${this.args[0].toShader()}.y, 0.)`:`${Fu[this.name]||this.name}(${this.args.map(c=>c.toShader()).join(", ")})`}toComplex(){let c={re:"real",im:"imag"}[this.name]||this.name;return c=c.replace("'","_prime"),this.args.length===0?`${c}()`:`${this.args[0].toComplex()}.${c}(${this.args.slice(1).map(f=>f.toComplex()).join(", ")})`}toDerivative(c,f){return this.name==="log"?new U("/",this.args[0].toDerivative(c,f),this.args[0]):this.name==="exp"?new U("*",this,this.args[0].toDerivative(c,f)):this.name==="abs"?new U("*",new Ne("sign",this.args),this.args[0].toDerivative(c,f)):this.name==="sqrt"?new U("/",this.args[0].toDerivative(c,f),new U("*",new I("number",2),this)):this.name==="sin"?new U("*",new Ne("cos",this.args),this.args[0].toDerivative(c,f)):this.name==="cos"?new U("*",new Qe("-",new Ne("sin",this.args)),this.args[0].toDerivative(c,f)):this.name==="tan"?new U("/",this.args[0].toDerivative(c,f),new U("^",new Ne("cos",this.args),new I("number",2))):this.name==="asin"?new U("/",this.args[0].toDerivative(c,f),new U("^",new U("-",new I("number",1),new U("^",this.args[0],new I("number",2))),new I("number",.5))):this.name==="acos"?new U("/",new Qe("-",this.args[0].toDerivative(c,f)),new U("^",new U("-",new I("number",1),new U("^",this.args[0],new I("number",2))),new I("number",.5))):this.name==="atan"?new U("/",this.args[0].toDerivative(c,f),new U("+",new I("number",1),new U("^",this.args[0],new I("number",2)))):this.name==="sinh"?new U("*",new Ne("cosh",this.args),this.args[0].toDerivative(c,f)):this.name==="cosh"?new U("*",new Ne("sinh",this.args),this.args[0].toDerivative(c,f)):this.name==="tanh"?new U("/",this.args[0].toDerivative(c,f),new U("^",new Ne("cosh",this.args),new I("number",2))):this.name==="asinh"?new U("/",this.args[0].toDerivative(c,f),new U("^",new U("+",new U("^",this.args[0],new I("number",2)),new I("number",1)),new I("number",.5))):this.name==="acosh"?new U("/",this.args[0].toDerivative(c,f),new U("^",new U("-",new U("^",this.args[0],new I("number",2)),new I("number",1)),new I("number",.5))):this.name==="atanh"?new U("/",this.args[0].toDerivative(c,f),new U("-",new I("number",1),new U("^",this.args[0],new I("number",2)))):this.name==="log2"?new U("/",new Ne("log",[new I("number",2)]),this.args[0].toDerivative(c,f)):this.name==="log10"?new U("/",new Ne("log",[new I("number",10)]),this.args[0].toDerivative(c,f)):this.name==="sn"?new U("*",new U("*",new Ne("cn",this.args),new Ne("dn",this.args)),this.args[0].toDerivative(c,f)):this.name==="cn"?new U("*",new U("*",new Qe("-",new Ne("sn",this.args)),new Ne("dn",this.args)),this.args[0].toDerivative(c,f)):this.name==="dn"?new U("*",new U("*",new U("*",new Qe("-",this.args[1]||new I("number",.8)),new Ne("sn",this.args)),new Ne("cn",this.args)),this.args[0].toDerivative(c,f)):["re","im"].includes(this.name)?new Ne(this.name,this.args.map(s=>s.toDerivative(c,f))):this.name==="sign"?new I("number",0):new U("*",new Ne(`${this.name}'`,this.args),this.args[0].toDerivative(c,f))}simplify(){const c=this.args.map(f=>f.simplify());return new Ne(this.name,c)}}let fl=class Wu{constructor(c,f){this.real=c,this.imag=f,this.type="complex"}is(c){return this.type===c.type&&this.real===c.real&&this.imag===c.imag}clone(c,f){return new Wu(this.real,this.imag)}isPureReal(){return!1}isPureImag(){return!1}toTree(){return`<complex: ${this.real.toTree()} + ${this.imag.toTree()}i>`}toString(){return`${this.real.toString()} + ${this.imag.toString()}i`}toShader(){return`vec2(${this.real.toShader()}, ${this.imag.toShader()})`}toComplex(){return`cx(${this.real.toComplex()}, ${this.imag.toComplex()})`}toDerivative(c,f){return new I("number",0)}simplify(){return new Wu(this.real.simplify(),this.imag.simplify())}};class I{constructor(c,f){this.type=c,this.value=f}is(c){return this.type===c.type&&this.value===c.value}clone(c,f){return new I(this.type,this.value)}isPureReal(){return this.type==="number"}isPureImag(){return this.type==="identifier"&&this.value==="i"}isConstant(){return Object.keys(zc).includes(this.value)}toTree(){return`<${this.type}: ${this.value}>`}toString(){return`${this.value}`}toShader(){return this.isPureImag()?"vec2(0., 1.)":this.isConstant()?`vec2(${this.value}, 0.)`:this.type==="identifier"?this.value.replace(/'/g,"_prime"):`vec2(${this.value.toFixed(6)}, 0.)`}toComplex(){return this.isPureImag()?"cx(0, 1)":this.isConstant()?`cx("${this.value}")`:this.type==="identifier"?this.value.replace(/'/g,"_prime"):`cx(${this.value})`}toDerivative(c,f){const s=[...c,...f];return this.type==="identifier"&&this.value==="i"?new I("number",0):this.type==="identifier"&&s.includes(this.value)?f.includes(this.value)?new I("number",1):new I("identifier",`${this.value}'`):new I("number",0)}simplify(){return this.type==="identifier"&&this.value==="x"?new Ne("re",[new I("identifier","z")]):this.type==="identifier"&&this.value==="y"?new Ne("im",[new I("identifier","z")]):this}}const C5=(u,c)=>{const f=Object.entries(A5);for(let s=0;s<f.length;s++){const[d,h]=f[s],b=u.slice(c).match(h);if(b!==null){const D=b[0];return new T5(d,D,c,c+D.length)}}throw new SyntaxError("Tokenization error at index "+c+" in "+u)},pc=u=>{let c=[];for(let f=0;f<u.length;){const s=C5(u,f);f=s.end,s.type!=="whitespace"&&c.push(s)}return c},bc=u=>{let c=0;const f=()=>{let y=s();for(;c<u.length;){const m=u[c];if(!m)throw new SyntaxError("Unexpected EOF");if(m.type==="operator"&&["+","-","|-|"].includes(m.value))c++,y=new U(m.value,y,s());else break}return y},s=()=>{let y=d();for(;c<u.length;){const m=u[c];if(!m)throw new SyntaxError("Unexpected EOF");if(m.type==="operator"&&["*","/","%"].includes(m.value))c++,y=new U(m.value,y,d());else if(["lparen","identifier"].includes(m.type))y=new U("*",y,d());else break}return y},d=()=>{let y=h();for(;c<u.length;){const m=u[c];if(!m)throw new SyntaxError("Unexpected EOF");if(m.type==="operator"&&["^","**","^^"].includes(m.value))c++,y=new U(m.value==="**"?"^":m.value,y,d());else break}return y},h=()=>{let y=b();for(;c<u.length;){const m=u[c];if(!m)throw new SyntaxError("Unexpected EOF");if(m.type==="unarySuffix")c++,y=new Qe(m.value,y);else break}return y},b=()=>{const y=u[c];if(!y)throw new SyntaxError("Unexpected EOF");if(y.type==="lparen"){c++;const m=f();if(u[c]?.type!=="rparen")throw new SyntaxError("Expected ) at "+(u[c]?.start||"EOF"));return c++,m}else if(y.type==="pipe"){c++;const m=f();if(u[c]?.type!=="pipe")throw new SyntaxError("Expected | at "+(u[c]?.start||"EOF"));return c++,new Ne("abs",[m])}else{if(y.type==="unaryPrefix")return c++,new Qe(y.value,d());if(y.type==="operator"&&"+-".includes(y.value))return c++,new Qe(y.value,d());if(y.type==="float"||y.type==="integer")return c++,new I("number",parseFloat(y.value));if(y.type==="identifier"){c++;const m=new I("identifier",y.value);if(u[c]?.type==="lparen"){c++;const j=[];for(;u[c]?.type!=="rparen";){if(j.push(f()),!u[c])throw new SyntaxError("Expected ) at EOF");u[c]?.type==="comma"&&c++}return c++,new Ne(m.value,j)}return m}else throw new SyntaxError(`Unexpected token ${y}`)}},D=f();if(c!==u.length)throw new SyntaxError(`Unexpected EOF ${u[c]}`);return D},Wl=(u,c=[])=>{if(u.type==="identifier"&&!c.includes(u.value)&&u.value!=="i"&&c.push(u.value),u.left&&(c=Wl(u.left,c)),u.right&&(c=Wl(u.right,c)),u.args){const f=[...u.args];let s=null;["sum","product"].includes(u.name)&&(s=f.shift().value),f.forEach(d=>{c=Wl(d,c).filter(h=>h!=s)})}return u.operand&&(c=Wl(u.operand,c)),c},Kt=u=>bc(pc(u)).simplify(),Wa=(u,c=["z","z_1"],f=[])=>bc(pc(u)).simplify().toDerivative(c,f).simplify(),C1=(u,c={})=>new Function(...Object.keys(c),`return ${Kt(u).toComplex()}`)(...Object.values(c));window.tokenize=pc;window.parse=bc;window.ast=Kt;window.vars=Wl;window.derive=Wa;window.evaluate=C1;window.astRaw=u=>bc(pc(u));const M1=(u,c)=>{let f;return(...s)=>(clearTimeout(f),f=setTimeout(()=>u(...s),c),()=>clearTimeout(f))},Fa=(u,c)=>!Array.isArray(u)||!Array.isArray(c)?u===c:u.length!==c.length?!1:u.every((f,s)=>Array.isArray(f)?Fa(f,c[s]):f===c[s]),ea=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],M5=u=>Math.abs(u)<1e-9?0:u,R5=u=>{for(let c=0;c<u.length;c++)for(let f=0;f<u[c].length;f++)u[c][f]=M5(u[c][f]);return u},j5=(u,c,f)=>{const s=ea();return s[0][3]=u,s[1][3]=c,s[2][3]=f,s},rl=(u,c,f)=>{const s=Math.cos(u),d=Math.sin(u),h=ea();return h[c][c]=s,h[c][f]=-d,h[f][c]=d,h[f][f]=s,h},U5=(u,c)=>{const f=new Array(u.length);for(let s=0;s<u.length;s++){let d=0;for(let h=0;h<u[0].length;h++)d+=u[s][h]*c[h];f[s]=d}return f},Il=(u,c)=>{const f=new Array(u.length);for(let s=0;s<u.length;s++){f[s]=new Array(c[0].length);for(let d=0;d<c[0].length;d++){let h=0;for(let b=0;b<c.length;b++)h+=u[s][b]*c[b][d];f[s][d]=h}}return f},O5=u=>{u=R5(u);const c=u.length,f=[];for(let s=0;s<c;s++)f.push([...u[s],...ea()[s]]);for(let s=0;s<c;s++){let d=f[s][s];if(d===0){let h=s+1;for(;h<c&&f[h][s]===0;)h++;if(h===c)throw new Error("Matrix is singular and cannot be inverted.");[f[s],f[h]]=[f[h],f[s]],d=f[s][s]}for(let h=0;h<2*c;h++)f[s][h]/=d;for(let h=0;h<c;h++)if(h!==s){let b=f[h][s];for(let D=0;D<2*c;D++)f[h][D]-=b*f[s][D]}}return f.map(s=>s.slice(c))},G5=({left:u,right:c,top:f,bottom:s,near:d,far:h})=>{const b=ea();return b[0][0]=2*d/(c-u),b[0][2]=(c+u)/(c-u),b[1][1]=2*d/(f-s),b[1][2]=(f+s)/(f-s),b[2][2]=-(h+d)/(h-d),b[2][3]=-2*d*h/(h-d),b[3][2]=-1,b[3][3]=0,b},ts=u=>[u[0][0],u[1][0],u[2][0],u[3][0],u[0][1],u[1][1],u[2][1],u[3][1],u[0][2],u[1][2],u[2][2],u[3][2],u[0][3],u[1][3],u[2][3],u[3][3]],R1=["yellow_blue","rainbow","red_green","yellow_green","orange_purple","yellow_purple","pink_green","pink_yellow","viridis","plasma","magma","inferno","turbo"],j1=["domain_coloring","bail_time","bail_time_log","exponential_map","lyapunov_exponent","distance","distance_scaled"],ku=["arg","3d","4d"],Pl={dimensions:2,args:{z:A(),c:A()},scale:A(1.2),varying:"c",move:"c",control:"3d",anakata:10,usePerturbation:null,useDerivative:!0,useCycle:!0,derivative:100,onlyBailed:!0,shading:"bail_time_log",offset:80,velocity:100,transparent:!0,hue:0,saturation:100,lightness:100,iterations:1e3,supersampling:window.devicePixelRatio>2?window.devicePixelRatio/2:1.1,transform:[[1,0],[0,1]],matrix:ea(),rotation:0,f:"z^2 + c",f_prime_z:null,f_prime_c:null,f_perturb:null,palette:"yellow_blue",useRoots:!1,convergent:!1,bailin:-6,divergent:!0,bailout:2.5,showGrid:!1,gridScale:100,gridLog:!1,gridWidth:1,showNormGrid:!1,normShade:!1,normShadeValue:70,normGridScale:100,normGridLog:!0,normGridWidth:1,showArgGrid:!1,argShade:!1,argShadeValue:40,argGridScale:200,argGridLog:!1,argGridWidth:1,scaled:!1,showZeroes:!1,zeroes:-4,showPoles:!1,poles:4,animate:!1,speed:100,showPolya:!1,polya:15,polyaColor:!0,polyaLightness:120},H5=Object.keys(Pl),U1={palette:u=>R1.indexOf(u.palette),shading:u=>j1.indexOf(u.shading),perturb:u=>!!(u.perturb&&u.f_perturb),useDerivative:u=>!!(u.useDerivative&&u.f_prime_z&&u.f_prime_c),convergent:null,divergent:null,onlyBailed:null,useCycle:null,useRoots:null,showGrid:null,showNormGrid:null,normShade:null,showArgGrid:null,argShade:null,gridLog:null,normGridLog:null,argGridLog:null,showPoles:null,showZeroes:null,animate:null,scaled:null,showPolya:null,polyaColor:null},q5=["f","f_prime_z","f_prime_c","f_perturb","args","varying",...Object.keys(U1)],ns={scale:{type:"2fv",value:u=>u.to2fv()},aspect:{type:"2fv",value:(u,c)=>[c.gl.canvas.width/c.gl.canvas.height,1/Math.max(c.gl.canvas.width,c.gl.canvas.height)]},transform:{type:"m2fv",value:u=>u.flat(1)},anakata:"1f",iterations:"1i",maxIterations:{type:"2iv",value:()=>[0,0]},orbit:{type:"1i",value:()=>0},bailin:"1f",bailout:"1f",derivative:"1f",offset:{type:"1f",value:u=>u/25},velocity:{type:"1f",value:u=>u/1e3},hue:{type:"1f",value:u=>u/360},saturation:{type:"1f",value:u=>u/100},lightness:{type:"1f",value:u=>u/100},gridScale:{type:"1f",value:u=>u/100},gridWidth:"1f",normGridScale:{type:"1f",value:u=>u/100},normShadeValue:{type:"1f",value:u=>u/100},normGridWidth:"1f",argGridScale:{type:"1f",value:u=>u/100},argShadeValue:{type:"1f",value:u=>u/100},argGridWidth:"1f",time:{type:"1f",value:()=>0},speed:{type:"1f",value:u=>u/1e6},zeroes:"1f",poles:"1f",polya:"1f",polyaLightness:{type:"1f",value:u=>u/100},matrix:{type:"m4fv",value:u=>ts(u)}},B5=`#version 300 es
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
`,L5=`#version 300 es
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
`,Z5=`#version 300 es

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
`,Y5=`uniform vec2 args;
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

#include globals
#include colors
#include render
#include complex
#include special
`,X5=`const float PI = 3.1415926535897932384626433832795;
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
`,Q5=`
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
`,V5=`vec3 hsl2rgb(in vec3 c) {
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
        #elif PALETTE == 7
        vec3(0.731, 1.098, 0.192), vec3(0.358, 1.090, 0.657), vec3(1.077, 0.360, 0.328), vec3(0.965, 2.265, 0.837)
    #endif
    );
    #elif PALETTE < 13
    return sixticPalette(t,
        #if PALETTE == 8
        vec3(0.2777273272234177, 0.005407344544966578, 0.3340998053353061),
        vec3(0.1050930431085774, 1.404613529898575, 1.384590162594685),
        vec3(-0.3308618287255563, 0.214847559468213, 0.09509516302823659),
        vec3(-4.634230498983486, -5.799100973351585, -19.33244095627987),
        vec3(6.228269936347081, 14.17993336680509, 56.69055260068105),
        vec3(4.776384997670288, -13.74514537774601, -65.35303263337234),
        vec3(-5.435455855934631, 4.645852612178535, 26.3124352495832)
        #elif PALETTE == 9
        vec3(0.05873234392399702, 0.02333670892565664, 0.5433401826748754),
        vec3(2.176514634195958, 0.2383834171260182, 0.7539604599784036),
        vec3(-2.689460476458034, -7.455851135738909, 3.110799939717086),
        vec3(6.130348345893603, 42.3461881477227, -28.51885465332158),
        vec3(-11.10743619062271, -82.66631109428045, 60.13984767418263),
        vec3(10.02306557647065, 71.41361770095349, -54.07218655560067),
        vec3(-3.658713842777788, -22.93153465461149, 18.19190778539828)
        #elif PALETTE == 10
        vec3(-0.002136485053939582, -0.000749655052795221, -0.005386127855323933),
        vec3(0.2516605407371642, 0.6775232436837668, 2.494026599312351),
        vec3(8.353717279216625, -3.577719514958484, 0.3144679030132573),
        vec3(-27.66873308576866, 14.26473078096533, -13.64921318813922),
        vec3(52.17613981234068, -27.94360607168351, 12.94416944238394),
        vec3(-50.76852536473588, 29.04658282127291, 4.23415299384598),
        vec3(18.65570506591883, -11.48977351997711, -5.601961508734096)
        #elif PALETTE == 11
        vec3(0.0002189403691192265, 0.001651004631001012, -0.01948089843709184),
        vec3(0.1065134194856116, 0.5639564367884091, 3.932712388889277),
        vec3(11.60249308247187, -3.972853965665698, -15.9423941062914),
        vec3(-41.70399613139459, 17.43639888205313, 44.35414519872813),
        vec3(77.162935699427, -33.40235894210092, -81.80730925738993),
        vec3(-71.31942824499214, 32.62606426397723, 73.20951985803202),
        vec3(25.13112622477341, -12.24266895238567, -23.07032500287172)
        #elif PALETTE == 12
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
    return vec3(mod(t, 1.));
    #endif
}

vec3 color(float t, float p) {
    return hueAdjust(palette(t), p);
}

vec3 color(float t) {
    return color(t, 0.);
}
`,K5=`float dot2(in vec2 z) {
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
`,J5=`// https://www.ils.uec.ac.jp/~dima/BOOK/443.pdf

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
    for(int i = 0; i < 4; i++) {
        res = cadd(res, cdiv(csub(z, catania(res)), cdatania(res)));
    }
    return res;
}
vec2 ctanianega(vec2 z) {
    vec2 res = cexp(cadd(csub(z, cexp(z)), c1));
    for(int i = 0; i < 5; i++) {
        res = cadd(res, cdiv(csub(z, catania(res)), cdatania(res)));
    }
    return res;
}
vec2 ctaniabig(vec2 z) {
    vec2 res = cadd(csub(z, -clog(z)), c1);
    for(int i = 0; i < 4; i++) {
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

    for(int i = 0; i < 4; i++) {
        res = cadd(res, cdiv(csub(z, catania(res)), cdatania(res)));
    }
    return res;
}
vec2 ctania(in vec2 z) {
    if(abs(z.y) < PI && z.x < -2.51) {
        return ctanianega(z);
    }
    if(length(z) > 7. || z.x > 3.8) {
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
    for(; shift < 250; shift++) {
        if(z.y > 4. + .2379 * z.x) {
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
    vec2 zn_3i = c1;
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
    vec2 zn = c1;

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
    vec2 shift = c0;

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
        } else if(length(csub(clog(z), c1)) < length(csub(z, c1))) {
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

vec2 ctetranat(in vec2 z, in vec2 w) {
    return ctet(w + cate(z));
}

vec2 ctetranat(in vec2 z) {
    return ctetranat(z, c1);
}
vec2 ctetra(in vec2 z, in vec2 n) {
    vec2 w = c1;
    int nr = int(n.x);
    for(int i = 0; i < nr; i++) {
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
    for(float k = 1.; k < 20.; k += 1.) {
        tmp = cmul(tmp, z / k);
        ei = cadd(ei, tmp / k);
    }
    return ei;
}

vec2 cexpintasymp(in vec2 z) {
    vec2 ei = I(sign(z.y) * PI);
    vec2 tmp = cdiv(cexp(z), z);
    for(float k = 1.; k <= length(z) + 1.; k += 1.) {
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

    for(float k = 1.; k <= 20.; k += 1.) {
        c = cinv(csub(csub(R(2. * k + 1.), z), k * k * c));
        d = cinv(csub(csub(R(2. * k + 1.), z), k * k * d));
        ei = cmul(ei, cdiv(d, c));
    }
    return ei;
}

vec2 cexpint(in vec2 z) {
    if(length(z) > 2. - 1.035 * log(1e-3)) {
        return cexpintasymp(z);
    }
    if(length(z) > 1. && (z.x < 0. || abs(z.y) > 1.)) {
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
    for(int k = 1; k < N; k++) {
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

    if(a.x > 1. && z.x < 0.) {
        // zeta(s, a) = zeta(s, a + m) + sum(0 -> m - 1, (n + a)^-s)
        // zeta(s, a + m) = zeta(s, a) - sum(0 -> m - 1, (n + a)^-s)

        float k = fract(a.x);
        float m = a.x - k;
        a.x = k;
        for(int i = 0; i < int(m); i++) {
            suffix = cadd(suffix, cpow(cadd(R(float(i)), a), -z));
        }
        suffix = -suffix;
    } else if(a.x < 0. && z.x < 0.) {
        // zeta(s, a) = zeta(s, a + m) + sum(0 -> m - 1, (n + a)^-s)
        // zeta(s, a + m) = zeta(s, a) - sum(0 -> m - 1, (n + a)^-s)

        float m = -floor(a.x);
        float k = a.x + m;

        for(int i = 0; i < int(m); i++) {
            suffix = cadd(suffix, cpow(cadd(R(float(i)), a), -z));
        }
        a.x = k;
    }

    if(z.x < -1. && (abs(a.y) < 1e-9 && a.x > 0. && a.x <= 1.)) {
        // Fast convergence on negative real part
        // zeta(s, a) = 2*gamma(1-s) / (TAU)^(1-s) (
        //    sin(ETA*s) * sum(1 -> inf, cos(TAU*n*a) * n^(1-s)) +
        //    cos(ETA*s) * sum(1 -> inf, sin(TAU*n*a) * n^(1-s)))
        const int N = 40;
        vec2 sum1 = c0;
        vec2 sum2 = c0;
        vec2 z_1 = csub(z, c1);
        float k = TAU * a.x;
        for(int i = 1; i < N; i++) {
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
    for(int i = 0; i < n; i++) {
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
    while(k < 20) {
        float ft = B2N[k];
        ft *= fact;

        term = ft * deriv;
        term = cmul(term, spoch);
        zeta = cadd(zeta, term);

        ft = dot2(term);
        if(ft < 1e-9) {
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
    for(float i = 1.; i < 30.; ++i) {
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

    for(int i = 1; i < 17; i++) {
        zfac = cmul(zfac, rzz);
        term = -B[i - 1] * zfac / (2. * float(i));
        res = cadd(res, term);
        if(length(term) < 2.220446092504131e-16 * length(res)) {
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
    float absz = length(z);
    vec2 res = c0;
    float smallabsz = 14.;

    if(z.x < 0. && abs(z.y) < smallabsz) {
        res = csub(res, PI * cdiv(ccos(PI * z), csin(PI * z)));
        z = csub(c1, z);
        absz = length(z);
    }

    if(absz < 0.5) {
        res = csub(res, cinv(z));
        z = cadd(c1, z);
        absz = length(z);
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
vec2 cpolygamma(in vec2 z, in vec2 w) {
    if(length(w) < 1e-6) {
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

    for(float i = 0.; i < 50.; ++i) {
        term = cdiv(zk, cpow(cadd(a, vec2(float(i), 0.)), s));
        sum += term;
        if(length(term) <= 1e-9 * (1. + length(sum))) {
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
    // https://www.shadertoy.com/view/WtXGzs
    const float om = 1.529954037057; // real semiperiod
    const float o3 = 0.57735026919; // 1/sqrt(3)
    const vec2 ep = vec2(0.5, 0.866025403784); // exp(i * pi/3)

    vec2 zt = z - 2.0 * om * (vec2(floor(0.5 - o3 * dot(vec2(ep.x, -ep.y), z) / om), 0.) + floor(o3 * z.y / om + 0.5) * ep);
    bool zq = (dot(zt, zt) > 0.25);
    vec2 zz = zq ? 0.0625 * zt : zt;

    vec2 z2 = cmul(zz, zz), z4 = cmul(z2, z2), z3 = cmul(zz, z2), z6 = cmul(z4, z2);
    vec2 wp = cinv(z2) + cdiv(cmul(z4 / 28.0, c1 + z6 / 2730.0), c1 + cmul(z6 / 420.0, z6 / 1729.0 - c1));

    if(zq) {
        for(int k = 0; k < 4; k++) {
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

    if(zq) {
        for(int k = 0; k < 4; k++) {
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
    for(int i = 0; i < 15; i++) {
        res = cadd(res, a * ccos(b * PI * z));
        a *= w.x;
        b *= w.y;
    }
    return res;
}

vec2 cellk(in vec2 z) {
    vec2 agA = c1, agB = csqrt(agA - z);
    vec2 tmp = vec2(0.0), h = tmp;

    for(int i = 0; i <= 9; i++) {
        tmp = csqrt(cmul(agA, agB));
        h = 0.5 * (agB - agA);
        agA += h;
        agB = tmp;
        if(length(h) < 1.0e-6)
            break;
    }

    return (PI * cinv(agA + agB));
}

float polevl(float x, float[11] coef) {
    float ans = coef[0];

    for(int i = 0; i < 11; i++) {
        ans = ans * x + coef[i];
    }
    return ans;
}

float cellpk(in float x) {
    const float P[11] = float[](1.37982864606273237150E-4, 2.28025724005875567385E-3, 7.97404013220415179367E-3, 9.85821379021226008714E-3, 6.87489687449949877925E-3, 6.18901033637687613229E-3, 8.79078273952743772254E-3, 1.49380448916805252718E-2, 3.08851465246711995998E-2, 9.65735902811690126535E-2, 1.38629436111989062502E0);
    const float Q[11] = float[](2.94078955048598507511E-5, 9.14184723865917226571E-4, 5.94058303753167793257E-3, 1.54850516649762399335E-2, 2.39089602715924892727E-2, 3.01204715227604046988E-2, 3.73774314173823228969E-2, 4.88280347570998239232E-2, 7.03124996963957469739E-2, 1.24999999999870820058E-1, 4.99999999999999999821E-1);
    if(x > 0.) {
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
    for(int i = 0; abs(c) > 1e-6; i++) {
        if(mod(phi, PI) != 0.) {
            float dPhi = atan((b * tan(phi)), a);
            if(dPhi < 0.) {
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

    if(abs(t) > 10.) {
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
    if(r == 0.) {
        return vec2(0., cellipticF(0., 1. - m) * sign(z.y));
    }
    if(abs(r - ETA) < .001) {
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
    for(int i = 2; i < 60; i++) {
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

vec2 cfaddeeva(vec2 z) {
    // https://arxiv.org/pdf/1511.00774
    int num = 16;
    float vm = 6. / TAU;
    float hi = vm / float(num);
    float sig = 2.5;
    float sig2 = sig * sig;
    float tauhi = TAU * hi;

    bool is_neg = z.y < 0.;
    if(is_neg) {
        z = -z;
    }
    vec2 t = cadd(z, ci * sig);
    vec2 tt = cpow(t, 2);

    vec2 res = cdiv(ci * 2. * hi * exp(sig * sig), t);
    for(int i = 1; i <= num; i++) {
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
    if(is_neg) {
        res = csub(2. * cexp(-cpow(z, 2)), res);
    }
    return res;
}

vec2 cerf(vec2 z) {
    if(z.x < 0.) {
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
    vec2 z2 = cmul(z, z);
    return csub(cmul(csub(c1 * .5, cfresnels(z)), ccos(z2)), cmul(csub(c1 * .5, cfresnelc(z)), csin(z2)));
}
vec2 cfresnelg(vec2 z) {
    vec2 z2 = cmul(z, z);
    return csub(cmul(csub(c1 * .5, cfresnels(z)), csin(z2)), cmul(csub(c1 * .5, cfresnelc(z)), ccos(z2)));
}
`,k5=`float aafract(float x) {
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
    for(int i = 0; i < iterations; i++) {
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
        if(dot2(zdz) < zdzmax) {
            n = float(iterations);
            break;
        }
        #endif

        #ifdef USE_CYCLE
        if(dot2(z - cycleZRef) < 1e-16) {
            n = float(iterations);
            break;
        }

        if(cycle.x == cycle.y) {
            cycle.y = 0;
            if(cycle.z == cycle.w) {
                cycle.w = 0;
                cycle.x *= 2;
            }
            cycle.w++;
            cycleZRef = z;
        }
        cycle.y++;
        #endif

        #ifdef CONVERGENT
        if(dot2(z - z_1) < BAILIN) {
            break;
        }
        #endif

        #ifdef DIVERGENT
        if(dot2(z) > BAILOUT) {
            break;
        }
        #endif

        #ifdef PERTURB
        // Rebasing
        if(dot2(z) < dot2(dz) || m >= max) {
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
    if(n < float(iterations)) {
        #endif
        float colorLevel = 0.;
        float root = 0.;
        #ifdef USE_ROOTS
        if(lengthZ > .002) {
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
        if(dot2(z - z_1) < BAILIN) {
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

    vec2 gridDist = fract((grid + vec2(timeFactor)) * gridScale);
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
`,$5=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`,F5=`#version 300 es
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
    float eps = 1e-3;
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
    if(anakata < 0.) {
        z = clamp(z, anakata, -anakata);
    }
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
`,W5=`#version 300 es
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
`,I5=({resolution:u=100}={})=>{const c=[],f=[],s=[],d=1/u,h=2*u+1;for(let b=0;b<h;b++)for(let D=0;D<h;D++)if(f.push(-1+D*d,-1+b*d),s.push(D/(h-1),b/(h-1)),D>0&&b>0){const y=D-1,m=b-1;c.push(D+b*h,D+m*h,y+m*h),c.push(D+b*h,y+m*h,y+b*h)}return{vertices:f,indices:c,uvs:s}},P5={includes:Y5,globals:X5,colors:V5,render:Q5,complex:K5,special:J5,iterate:k5},e6=u=>u.replace(/[A-Z]/g,c=>`_${c.toLowerCase()}`).toUpperCase(),t6=u=>Object.entries(U1).map(([c,f])=>(s=>s!==!1?`#define ${e6(c)}${s===!0?"":` ${s}`}`:"")(typeof f=="function"?f(u):u[c])).filter(c=>c).join(`
`),O1=(u,c)=>(Object.entries(P5).forEach(([f,s])=>{c=c.replace(`#include ${f}`,s)}),c=c.replace("##CONFIG",t6(u)),c=c.replace("uniform vec2 args;",Object.keys(u.args).map(f=>`uniform vec2 arg_${f};`).join(`
`)),c=c.replace("#init_args",Object.keys(u.args).map(f=>`vec2 ${f} = arg_${f};`).join(`
`)),c=c.replace("#transform_args",Object.keys(u.args).filter(f=>u.varying.includes(f)).concat(u.perturb&&u.f_perturb?["z","c"].filter(f=>u.varying.includes(f)).map(f=>`d${f}`):[]).map(f=>`${f} += pixel;
  ${f} *= transform;`).join(`
`)),c=c.replace(/\bF\(\s*(.+?)\s*,\s*(.+?)\s*\)/g,Kt(u.f).toShader().replace(/\bz\b/g,"$1").replace(/\bc\b/g,"$2")),u.f_prime_z?c=c.replace(/\bF_prime_z\s*\(\s*(.+?)\s*,\s*(.+?)\s*,\s*(.*?)\s*,\s*(.*?)\s*\)/g,Kt(u.f_prime_z).toShader().replace(/\bz\b/g,"$1").replace(/\bc\b/g,"$2").replace(/\bz_prime\b/g,"$3").replace(/\bz_1_prime\b/g,"$4")):c=c.replace(/\bF_prime_z\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,"vec2(0)"),u.f_prime_c?c=c.replace(/\bF_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,Kt(u.f_prime_c).toShader().replace(/z_prime/g,"$1").replace(/z_1_prime/g,"$2")):c=c.replace(/\bF_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,"vec2(0)"),u.f_perturb?c=c.replace(/F_perturb\(Z,\s*dz,\s*dc\)/g,Kt(u.f_perturb).toShader()):c=c.replace(/F_perturb\(Z,\s*dz,\s*dc\)/g,"vec2(0)"),window.location.search.includes("debug")&&console.info(c.split(`
`).map((f,s)=>`${s+1}: ${f}`).join(`
`)),c),G1=(u,c,f)=>{const{gl:s}=u;if(s.shaderSource(f,c),s.compileShader(f),!s.getShaderParameter(f,s.COMPILE_STATUS)){const h=s.getShaderInfoLog(f);let b=c;const D=h.match(/ERROR: \d+:(\d+):/)?.[1];if(D){const y=parseInt(D),m=5,j=c.split(`
`),O=Math.max(0,y-m),q=Math.min(j.length,y+m);b=j.slice(O,q).map((J,Y)=>(Y===m-1?"=>":"  ")+J).join(`
`)}return console.error(`An error occurred compiling shader: ${h}`,b),h}},n6=u=>{const{gl:c}=u;if(c.linkProgram(u.env.program),!c.getProgramParameter(u.env.program,c.LINK_STATUS)){const s=c.getProgramInfoLog(u.env.program);return console.error(`Unable to initialize the shader program: ${s}`),s}},ls=u=>{G1(u,u.dimensions<3?$5:O1(u,u.dimensions===3?F5:W5),u.env.vertexShader)},as=u=>{const{gl:c}=u;G1(u,O1(u,u.dimensions===1?B5:u.dimensions===2?L5:Z5),u.env.fragmentShader),n6(u),c.useProgram(u.env.program),u.env.uniforms=Object.keys(ns).concat(Object.keys(u.args).map(f=>`arg_${f}`)).reduce((f,s)=>(f[s]=c.getUniformLocation(u.env.program,s),f),{}),window.location.search.includes("debug")&&["f","f_prime_z","f_prime_c","f_perturb"].forEach((f,s)=>{if(!u[f])return;const d=Kt(u[f]);console.info(f,d.toShader(),d.toComplex())}),u.dimensions>2&&(u.env.uniforms.viewProjection=c.getUniformLocation(u.env.program,"viewProjection"),u.env.uniforms.eye=c.getUniformLocation(u.env.program,"eye")),is(u)},H1=u=>{const c=u.gl;if(u.env){if(u.env.dimensions===u.dimensions){console.warn("Dimensions already set",u.dimensions);return}u.env.dimensions<3?c.deleteTexture(u.env.orbit):(c.deleteBuffer(u.env.uvBuffer),c.deleteBuffer(u.env.vertexBuffer),c.deleteBuffer(u.env.indexBuffer),c.deleteVertexArray(u.env.vao)),c.deleteShader(u.env.vertexShader),c.deleteShader(u.env.fragmentShader),c.deleteProgram(u.env.program),delete u.env}if(u.env={vertexShader:c.createShader(c.VERTEX_SHADER),fragmentShader:c.createShader(c.FRAGMENT_SHADER),program:c.createProgram(),dimensions:u.dimensions},c.attachShader(u.env.program,u.env.vertexShader),c.attachShader(u.env.program,u.env.fragmentShader),ls(u),as(u),u.dimensions<3)u.env.orbit=c.createTexture(),c.bindTexture(c.TEXTURE_2D,u.env.orbit),c.texImage2D(c.TEXTURE_2D,0,c.RGBA32F,128,128,0,c.RGBA,c.FLOAT,null),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE),c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,!1);else{u.env.camera={zoom:2,fov:Math.PI/3,eye:[0,0,0],rotation:rl(Math.PI/2,1,2),near:.01,far:100,update(s){const d=j5(0,0,this.zoom),h=[0,0,this.zoom,0];this.eye=U5(this.rotation,h).slice(0,3);const b=O5(Il(this.rotation,d));this.aspect=s?s.fullWidth/s.fullHeight:c.canvas.clientWidth/c.canvas.clientHeight;const D=Math.min(this.aspect,1),y={left:0,right:0,top:0,bottom:0,near:this.near,far:this.far};y.top=this.near*Math.tan(this.fov/2)/D;let m=2*y.top,j=this.aspect*m;y.left=-.5*j,s&&(y.left+=s.x*j/s.fullWidth,y.top-=s.y*m/s.fullHeight,j*=s.width/s.fullWidth,m*=s.height/s.fullHeight),y.bottom=y.top-m,y.right=y.left+j;const O=G5(y),q=Il(O,b);this.viewProjection=ts(q),c.uniformMatrix4fv(u.env.uniforms.viewProjection,!1,this.viewProjection),c.uniform3fv(u.env.uniforms.eye,this.eye)},center(){this.eye=[0,0,0],this.rotation=rl(Math.PI/2,1,2),this.update()}},u.env.camera.update();const f=I5();u.env.elements=f.indices.length,u.env.vao=c.createVertexArray(),c.bindVertexArray(u.env.vao),u.env.indiceBuffer=c.createBuffer(),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,u.env.indiceBuffer),c.bufferData(c.ELEMENT_ARRAY_BUFFER,new Uint16Array(f.indices),c.STATIC_DRAW),u.env.vertexBuffer=c.createBuffer(),c.bindBuffer(c.ARRAY_BUFFER,u.env.vertexBuffer),u.env.vertexLocation=c.getAttribLocation(u.env.program,"vertex"),c.enableVertexAttribArray(u.env.vertexLocation),c.vertexAttribPointer(u.env.vertexLocation,2,c.FLOAT,!1,0,0),c.bufferData(c.ARRAY_BUFFER,new Float32Array(f.vertices),c.STATIC_DRAW),u.env.uvBuffer=c.createBuffer(),c.bindBuffer(c.ARRAY_BUFFER,u.env.uvBuffer),u.env.uvLocation=c.getAttribLocation(u.env.program,"uv"),c.enableVertexAttribArray(u.env.uvLocation),c.vertexAttribPointer(u.env.uvLocation,2,c.FLOAT,!1,0,0),c.bufferData(c.ARRAY_BUFFER,new Float32Array(f.uvs),c.STATIC_DRAW)}},x1=(u,c,f)=>{let s=document.getElementById("webgl2");s||(s=document.createElement("canvas"),s.id="webgl2",document.body.insertBefore(s,document.body.firstChild));const d=s.getContext("webgl2",{antialias:!1,stencil:!1,powerPreference:"high-performance"});if(s.addEventListener("webglcontextlost",c,!1),s.addEventListener("webglcontextrestored",f,!1),u={...u,gl:d},!d){console.error("Unable to initialize WebGL. Your browser may not support it.");return}return H1(u),{...u,gl:d}},is=u=>{const{uniforms:c}=u.env;Object.entries(ns).concat(Object.entries(u.args).map(([f,s])=>[`arg_${f}`,{type:"2fv",value:()=>s.to2fv()}])).forEach(([f,s])=>{typeof s=="string"&&(s={type:s,value:y=>y});const{type:d,value:h}=s,b=c[f];if(!b)return;const D=h(u[f],u);d.startsWith("m")?u.gl["uniformMatrix"+d.slice(1)](b,!1,D):u.gl["uniform"+d](b,D)}),u.env.camera?.update()},l6=(u,c,f)=>{let s=u.clientWidth,d=u.clientHeight,h=f?f.width:s*c,b=f?f.height:d*c;return h!==u.width||b!==u.height?(h=Math.floor(h),b=Math.floor(b),u.width=h,u.height=b,!0):!!f},E1=(u,c)=>A(u.re.multiply(c[0][0]).add(u.im.multiply(c[0][1])),u.re.multiply(c[1][0]).add(u.im.multiply(c[1][1]))),A1=(u,c,f,s,d,h)=>{const[b,D]=h?[2,3]:[0,1],y=new Function("z","c","z_1",`return ${Kt(u.f).toComplex()}`),m=pe(Math.pow(10,u.bailout));let j=0,O=A();for(;j<u.iterations;j++){c[j*4+b]=f.re.toNumber(),c[j*4+D]=f.im.toNumber();let q=f;if(f=y(f,s,O),O=q,f.norm2().gte(m))break}return d[h?1:0]=j,{orbit:c,max:j}},Yn=(u,c)=>{if(!u.gl)return;const{gl:f}=u;if(f.uniform1f(u.env.uniforms.time,u.animate?performance.now()-u.timeref:0),l6(f.canvas,u.supersampling,c)&&(f.viewport(0,0,f.canvas.width,f.canvas.height),f.uniform2fv(u.env.uniforms.aspect,[f.canvas.width/f.canvas.height,1/Math.max(f.canvas.width,f.canvas.height)]),c)){const{x:s,y:d,width:h,height:b,fullWidth:D,fullHeight:y}=c,{scale:m,varying:j,args:O}=u,{uniforms:q}=u.env;f.uniform2fv(q.aspect,[h/b,1/Math.max(h,b)]);const J=m.multiply(b/y);f.uniform2fv(q.scale,J.to2fv());const Y=A(D/2,y/2),F=A(s+h/2,d+b/2).subtract(Y).multiply(m).divide(A(y/2));j.split("").forEach(P=>{const me=O[P].add(F);f.uniform2fv(q[`arg_${P}`],me.to2fv())})}if(u.dimensions<3){if(f.disable(f.DEPTH_TEST),f.disable(f.BLEND),u.perturb){const s=new Float32Array(65536),d=[0,0],h=u.varying.includes("z")?E1(u.args.z,u.transform):u.args.z,b=u.varying.includes("c")?E1(u.args.c,u.transform):u.args.c;try{A1(u,s,A(),b,d),A1(u,s,h,b,d,!0)}catch(D){console.warn(D)}f.uniform2iv(u.env.uniforms.maxIterations,d),f.texImage2D(f.TEXTURE_2D,0,f.RGBA32F,128,128,0,f.RGBA,f.FLOAT,s)}f.drawArrays(f.TRIANGLES,0,3)}else f.clearColor(0,0,0,0),f.clear(f.COLOR_BUFFER_BIT|f.DEPTH_BUFFER_BIT),f.enable(f.DEPTH_TEST),u.transparent?(f.enable(f.BLEND),f.blendFunc(f.ONE,f.ONE),f.depthFunc(f.ALWAYS)):(f.disable(f.BLEND),f.depthFunc(f.LEQUAL)),f.drawElements(f.TRIANGLES,u.env.elements,f.UNSIGNED_SHORT,0)};window.render=Yn;const a6=(u,c)=>{const f=B.useRef(null),s=B.useRef({args:u.args,scale:u.scale,matrix:u.matrix,anakata:u.anakata,pointers:new Map}),d=M1(()=>{c({args:s.current.args,scale:s.current.scale,matrix:s.current.matrix,anakata:s.current.anakata})},150);B.useEffect(()=>{s.current.args={...u.args}},[u.args]),B.useEffect(()=>{s.current.scale=u.scale},[u.scale]),B.useEffect(()=>{s.current.matrix=u.matrix},[u.matrix]),B.useEffect(()=>{s.current.anakata=u.anakata},[u.anakata]);const h=B.useCallback(()=>{f.current=null,Yn(u)},[u]),b=B.useCallback((m,j,O,q)=>{if(u.dimensions>2){if(u.control==="4d"){const F=[[[1,2],[0,1]],[[2,3],[0,3]],[[1,3],[0,2]]];s.current.matrix=Il(Il(rl(5*m,...F[u.rotation][1]),rl(5*j,...F[u.rotation][0])),s.current.matrix);return}if(u.control==="3d"){u.env.camera.rotation=Il(u.env.camera.rotation,Il(rl(5*m,0,2),rl(-5*j,1,2))),u.env.camera.update();return}}const J=u.gl.canvas.width/u.gl.canvas.height,Y=s.current.scale.multiply(2);(O?u.varying:u.move).split("").forEach(F=>{s.current.args[F]=s.current.args[F].add(A(-m*J,j).multiply(Y))})},[u.gl.canvas.height,u.gl.canvas.width,u.move,u.dimensions,u.control,u.rotation,u.varying]),D=B.useCallback((m,j,O)=>{const q=.5-j,J=.5-O;if(u.dimensions<3&&b(q*m,J*m,!0),u.dimensions>2){if(u.control==="3d"){u.env.camera.zoom-=m,u.env.camera.update();return}if(u.control==="4d"){s.current.anakata+=m;return}}const Y=s.current.scale.multiply(m),F=Y.real().toString().match(/^-?0\.(0*)/);F&&F[1].length>Y.real().precision-16&&(Y.real().precision=F[1].length+16),s.current.scale=s.current.scale.subtract(Y)},[b,u.dimensions,u.control]),y=B.useCallback(()=>{u.args=s.current.args,u.scale=s.current.scale,u.matrix=s.current.matrix,u.anakata=s.current.anakata,Object.keys(u.args).forEach(m=>{u.gl.uniform2fv(u.env.uniforms[`arg_${m}`],s.current.args[m].to2fv())}),u.gl.uniform2fv(u.env.uniforms.scale,s.current.scale.to2fv()),u.gl.uniformMatrix4fv(u.env.uniforms.matrix,!1,ts(s.current.matrix)),u.gl.uniform1f(u.env.uniforms.anakata,s.current.anakata),f.current||(f.current=requestAnimationFrame(h))},[h,u.type]);B.useEffect(()=>{let m=null,j=null;const O=Y=>{Y.button!==0||Y.target.id!=="webgl2"||s.current.pointers.set(Y.pointerId,[Y.clientX,Y.clientY])},q=Y=>{if(!s.current.pointers.has(Y.pointerId))return;const G=s.current.pointers.get(Y.pointerId),F=[Y.clientX-G[0],Y.clientY-G[1]];if(s.current.pointers.set(Y.pointerId,[Y.clientX,Y.clientY]),s.current.pointers.size>1){const X=s.current.pointers.values(),$=X.next().value,ve=X.next().value;j===null&&(j=[($[0]+ve[0])/(2*window.innerWidth),($[1]+ve[1])/(2*window.innerHeight)]);const ue=Math.hypot($[0]-ve[0],$[1]-ve[1]);if(m===null){m=ue;return}const ne=(ue-m)/window.innerWidth;m=ue,D(ne*2,...j),y();return}let P=F[0]/window.innerWidth,me=F[1]/window.innerHeight;if(Y.shiftKey&&(P+=me,me=0),(Y.ctrlKey||Y.metaKey)&&(me+=P,P=0),Y.altKey){const X=(P+me)/2;P=X,me=X}b(P,me,!1),y()},J=Y=>{d(),s.current.pointers.clear(),m=null,j=null};return document.addEventListener("pointerdown",O),document.addEventListener("pointermove",q),document.addEventListener("pointerup",J),()=>{document.removeEventListener("pointerdown",O),document.removeEventListener("pointermove",q),document.removeEventListener("pointerup",J)}},[b,D,y]),B.useEffect(()=>{const m=j=>{if(j.target.id!=="webgl2")return;const O=-j.deltaY/window.innerWidth,q=j.clientX/window.innerWidth,J=j.clientY/window.innerHeight;D(O,q,J),y(),d()};return document.addEventListener("wheel",m),()=>{document.removeEventListener("wheel",m)}},[y,D])};function i6({runtime:u,updateParams:c}){return a6(u,c),null}const $u=(u,c)=>c.map(f=>u[f]),c6=u=>Object.entries(u).map(([c,f])=>`${c}|${f}`).join("#"),u6=(u,c)=>{B.useEffect(()=>{c(s=>({...s,perturb:s.usePerturbation===null?Math.log10(s.scale.real().toNumber())<-4.5:s.usePerturbation}))},[u.scale,u.usePerturbation,c]),B.useEffect(()=>{c(s=>(H1(s),s))},[u.dimensions,c]),B.useEffect(()=>{c(s=>(ls(s),as(s),s))},[...$u(u,q5),c]),B.useEffect(()=>{c(s=>(is(s),s))},[...$u(u,Object.keys(ns)),c6(u.args),c]),B.useEffect(()=>{if(!u.gl.canvas)return;const s=new ResizeObserver(()=>{Yn(u)});return s.observe(u.gl.canvas,{box:"content-box"}),()=>s.disconnect()},[u,u.gl.canvas]);const f=B.useRef(null);B.useEffect(()=>{if(u.animate){u.timeref=performance.now();const s=()=>{Yn(u),f.current=requestAnimationFrame(s)};return s(),()=>{cancelAnimationFrame(f.current),f.current=null}}},[u.animate]),B.useEffect(()=>{c(s=>(Yn(s),s))},$u(u,H5))};function s6({runtime:u,setRuntime:c}){return u6(u,c),null}function f6({runtime:u,setRuntime:c,updateParams:f}){window.rt=u;const s=B.useCallback(d=>h=>{h.type=d,c(b=>({...b,error:h}))},[c]);return p.jsxs(p.Fragment,{children:[p.jsx(p1,{error:u.error?.render,onError:s("render"),children:p.jsx(s6,{runtime:u,setRuntime:c})}),p.jsx(p1,{error:u.error?.interact,onError:s("interact"),children:p.jsx(i6,{runtime:u,updateParams:f})})]})}const r6=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:p.jsx("path",{fill:"currentColor",d:"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"})}),q1=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),o6=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),d6=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),v6=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),h6=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"})}),m6=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"M6 18V6h12v12z"})}),g6=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"})}),z6=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"})}),y6=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"})}),p6=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709m.497-1.017q3.09-.202 5.295-2.459T20 12t-2.185-5.505T12.5 4.017z"})}),b6=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"m21.11 22.53l-3.508-3.507q-1.161.935-2.578 1.456T12 21q-1.868 0-3.51-.709t-2.857-1.923t-1.924-2.858T3 12q0-1.608.521-3.024q.521-1.417 1.456-2.578l-3.09-3.09l.713-.714l19.223 19.223zM12 20q1.394 0 2.628-.454t2.249-1.248L12 13.421zm7.625-3.192l-.744-.745q.544-.894.831-1.913T20 12q0-3.325-2.337-5.663T12 4v5.183L7.192 4.375q1.05-.656 2.262-1.016Q10.667 3 12 3q1.868 0 3.51.709t2.858 1.924T20.29 8.49T21 12q0 1.333-.36 2.546t-1.015 2.262"})}),$l=u=>[[Math.cos(u),-Math.sin(u)],[Math.sin(u),Math.cos(u)]],Iu=(u,c)=>c===0||c===u?1:Iu(u-1,c-1)+Iu(u-1,c),S6=(u,c,f,s=0)=>{let d="";for(let h=s;h<=f;h++){const b=Iu(f,h);if(b===0)continue;const D=(q,J)=>J===0?"":J===1?q:`${q}^${J}`,y=D(u,f-h),m=D(c,h),j=y&&m?`${y} * ${m}`:y||m,O=b===1?j:`${b} * ${j}`;d?d=`${O} + ${d}`:d=O}return d},lt=(u,c,f={})=>({name:u,params:{f:`z^${c} + c`,f_perturb:`${S6("Z","dz",c,1)} + dc`,showGrid:!1,showNormGrid:!1,showArgGrid:!1,normShade:!1,argShade:!1,showZeroes:!1,showPoles:!1,onlyBailed:!0,...f}}),Fl=(u,c,f,s={})=>({name:u,params:{...lt(u,c).params,derivative:85,velocity:70,varying:"z",args:{z:A(),c:f},...s}}),et=(u,c,f={})=>({name:u,params:{varying:"z",f:`z - ${f?.args?.a?"a * ":""}(${c})# + c`,iterations:75,useDerivative:!1,useCycle:!1,useRoots:!0,convergent:!0,divergent:!1,showGrid:!1,showNormGrid:!1,showArgGrid:!1,normShade:!1,argShade:!1,showZeroes:!1,showPoles:!1,onlyBailed:!0,...f}}),Bn=(u,c,f={})=>({name:u,params:{args:{z:A(1),c:A(-.5)},f:`z - ${f?.args?.a?"a * ":""}(${c})# + c`,useDerivative:!1,convergent:!0,divergent:!1,showGrid:!1,showNormGrid:!1,showArgGrid:!1,normShade:!1,argShade:!1,showZeroes:!1,showPoles:!1,onlyBailed:!0,...f}}),H=(u,c,f={})=>({name:u,params:{f:c,shading:"domain_coloring",offset:0,iterations:1,varying:"z",palette:"rainbow",divergent:!1,useDerivative:!1,useCycle:!1,usePerturbation:!1,onlyBailed:!1,showGrid:!0,gridScale:100,gridLog:!1,gridWidth:1,showNormGrid:!0,normShade:!0,normShadeValue:70,normGridScale:100,normGridLog:!0,normGridWidth:1,showArgGrid:!0,argShade:!0,argShadeValue:40,argGridScale:200,argGridLog:!1,argGridWidth:1,scaled:!1,showZeroes:!0,showPoles:!0,scale:A(2.5),...f}}),B1=u=>u.map(({name:c,params:f,subforms:s})=>({name:c,params:{...Pl,f_perturb:null,...f,f_prime_z:f.f_prime_z||Wa(f.f,["z","z_1"]).toString(),f_prime_c:f.f_prime_c||Wa(f.f,["z","z_1"],["c"]).toString()},subforms:s?B1(s):[]})),Zn=B1([{...lt("Mandelbrot",2,{args:{z:A(),c:A(-.5)}}),subforms:[lt("Minibrot",2,{args:{z:A(),c:A(-1.71121,2e-5)},scale:A(85e-5),shading:"distance_scaled",velocity:70,saturation:0,lightness:250}),lt("Bibrot",3),lt("Tribrot",4),lt("Quadribrot",5),lt("Quintibrot",6),lt("Hexibrot",7),lt("Heptibrot",8),lt("Octibrot",9),lt("Nonibrot",10),lt("Decabrot",11),lt("Invbibrot",-2,{args:{z:A(10),c:A()},divergent:!1,shading:"lyapunov_exponent",iterations:250,useDerivative:!1,useCycle:!1,offset:25,onlyBailed:!1,scale:A(3)}),lt("Invtribrot",-3,{args:{z:A(10),c:A()},divergent:!1,shading:"lyapunov_exponent",iterations:250,useDerivative:!1,useCycle:!1,offset:140,onlyBailed:!1,palette:"red_green",scale:A(3)}),{name:"Mandelbar",params:{...lt("Mandelbar",2).params,f:"~z^2 + c",f_perturb:"~(2 * Z * dz + dz^2) + dc"}},{name:"Tearbrot",params:{args:{z:A(),c:A(0,1)},scale:A(4),transform:$l(-Math.PI/2),f:"(z + 1)^2 / c",bailed:!0,derivative:80,f_perturb:"(C * dz^2 + 2 * C * dz * Z + 2 * C * dz - dc * Z^2 - 2 * dc * Z - dc) / (C * (C + dc))"}},{name:"Moonbrot",params:{scale:A(6),f:"c / (z + 1)^2",derivative:120}},{name:"Mothbrot",params:{scale:A(1.5),f:"z^2 * (|re(z)| + |im(z)|i)^3 + c",derivative:120}},{name:"Burningship",params:{args:{z:A(),c:A(.5,.5)},transform:$l(Math.PI),derivative:100,scale:A(1.5),f:"(|re(z)| + |im(z)|i)^2 + c",f_perturb:"(2 * re(dz) * re(Z) + re(dz) * re(dz) - 2 * im(Z) * im(dz) - im(dz) * im(dz) + 2 * (diffabs((re(Z) * im(Z)), (re(Z) * im(dz) + re(dz) * im(Z) + re(dz) * im(dz)))) * i) + dc"},subforms:[{name:"Miniship",params:{args:{z:A(),c:A(1.85982,.004584)},transform:$l(Math.PI),derivative:100,shading:"distance_scaled",scale:A(.008069),velocity:62,lightness:300,saturation:0,f:"(|re(z)| + |im(z)|i)^2 + c",f_perturb:"(2 * re(dz) * re(Z) + re(dz) * re(dz) - 2 * im(Z) * im(dz) - im(dz) * im(dz) + 2i * diffabs((re(Z) * im(Z)), (re(Z) * im(dz) + re(dz) * im(Z) + re(dz) * im(dz)))) + dc"}},{name:"Bird of Prey",params:{transform:$l(-3*Math.PI/4),derivative:100,scale:A(1.5),f:"(|re(z)| + |im(z)|i)^3 + c",f_perturb:"(re(Z)^2 - 3 * im(Z)^2) * diffabs(re(Z), re(dz)) + (2 * (re(Z) * re(dz)) + re(dz)^2 - 6 * (im(Z) * im(dz)) - 3 * im(dz)^2) * abs(re(Z) + re(dz)) + i * ((3 * re(Z)^2 - im(Z)^2) * diffabs(im(Z), im(dz)) + (6 * (re(Z) * re(dz)) + 3 * re(dz)^2 - 2 * (im(Z) * im(dz)) - im(dz)^2) * abs(im(Z) + im(dz))) + dc"}},{name:"Buffalo",params:{transform:$l(Math.PI),f:"(|re(z)| + |im(z)|i)^2 - (|re(z)| + |im(z)|i) + c"}},{name:"Bird",params:{f:"(re(z) - |im(z)|i)^2 + c"}}]},{name:"Magnet",params:{args:{z:A(),c:A(1)},scale:A(3),f:"((z^2 + c - 1) / (2z + c - 2))^2",useDerivative:!1,convergent:!0}},{name:"Tetrate",params:{args:{z:A(.5),c:A(1)},scale:A(3),f:"c^z",useDerivative:!1}},{name:"Celtic",params:{args:{z:A(),c:A(-.7)},scale:A(2),f:"|re(z^2)| + i * im(z^2) + c",useDerivative:!1}}]},{...Fl("Julia 0 + .8i",2,A(0,.8)),subforms:[Fl("Julia -.7 + .27015",2,A(-.7,.27015)),Fl("Julia .355 + .355i",2,A(.355,.355)),Fl("Bijulia -.371594 + .662412i",3,A(-.371594,.662412)),Fl("Trijulia -.29053 - .450488i",4,A(-.29053,-.450488),{derivative:175}),Fl("2iJulia","(2i)",A(),{useDerivative:!1,bailout:4.1,iterations:100}),{name:"Collatz",params:{args:{z:A(),c:A()},scale:A(2),f:"z/2+(z/2+1/4)(1-exp(z*i*PI))+ c",varying:"z",shading:"lyapunov_exponent",onlyBailed:!1,useDerivative:!1,divergent:!1}},{name:"Phoenix",params:{args:{z:A(),c:A(.5667)},scale:A(1.5),transform:$l(-Math.PI/2),varying:"z",f:"z^2 + c - 0.5 * z_1",useDerivative:!1,f_perturb:"2 * Z * dz + dz^2 + dc - 0.5 * dz_1"}},{name:"Frothy",params:{args:{z:A(.5),c:A(2+.03,-.01)},varying:"z",scale:A(3),f:"z^2 - c*~z",f_perturb:"dz^2 + 2 * dz * Z - C * ~dz - dc * ~Z - dc * ~dz"}},{name:"Floral",params:{args:{z:A(-.24,.13),c:A(-.348,-.58)},scale:A(3),varying:"z",f:"sin(z^-2) + c",iterations:300,palette:"yellow_green",lightness:180,velocity:40,bailout:3,useDerivative:!1}},{name:"Whirlpool",params:{varying:"z",args:{z:A(),c:A(2,0)},scale:A(3),f:"(c/z + (im(z)*z - re(z))/c)^2"}},{name:"Smokey",params:{varying:"z",args:{z:A(53.95,211.7435),c:A(-1.247,-.9564)},scale:A(395),iterations:50,divergent:!1,onlyBailed:!1,palette:"viridis",cycle:!1,derivative:!1,offset:0,shading:"lyapunov_exponent",f:"faddeeva(z) + c"}}]},{...et("Newton","(z - r)(z - s)(z - t)",{args:{r:A(1),s:A(-.5,-.86603),t:A(-.5,.86603),a:A(1),c:A(),z:A()}}),subforms:[et("Newton","z^3 + 1"),et("Newton","z^4 - 1"),et("Newton","(z^4 - b) / (z - d) - e",{args:{b:A(-1),d:A(3),e:A(1),a:A(1),z:A(),c:A()}}),et("Newton","z^3 - 2z + 2"),et("Newton","z^8 + 15z^4 - 16"),et("Newton","z^5 - 3i * z^3 - (5 + 2i) * z^2 + 3z + 1"),et("Newton","z^6 + z^3 - 1"),et("Newton","z^^3 - 1"),et("Newton","sin(z)",{args:{z:A(Math.PI/2),c:A()}}),et("Newton","cosh(z) - 1",{args:{z:A(-3.14,-3.14),c:A()}}),et("Newton","z^4 * sin(z) - 1"),et("Newton generalized","z^3 - 1",{divergent:!1,convergent:!1,offset:100,velocity:150,shading:"lyapunov_exponent",onlyBailed:!1,useRoots:!1,args:{z:A(),c:A(),a:A(-.5)}}),et("Newton generalized","z^4 - 1",{divergent:!1,convergent:!1,velocity:150,shading:"lyapunov_exponent",onlyBailed:!1,useRoots:!1,args:{z:A(),c:A(),a:A(.03357,-.4829)},scale:A(1.5),palette:"red_green",offset:220}),et("Newton generalized","z^2 - 1",{divergent:!1,convergent:!1,offset:100,velocity:150,shading:"lyapunov_exponent",onlyBailed:!1,iterations:100,useRoots:!1,args:{z:A(),c:A(),a:A(1,1)}}),et("Newton generalized","z^(4 + 3i) - 1",{args:{z:A(1,.25),c:A(),a:A(1.9)},scale:A(.05)})]},{...Bn("Nova","(z - r)(z - s)(z - t)",{args:{r:A(1),s:A(-.5,-.86603),t:A(-.5,.86603),a:A(1),z:A(1),c:A(-.5)}}),subforms:[Bn("Nova","z^3 - 1",{shading:"lyapunov_exponent",convergent:!1,divergent:!1,onlyBailed:!1,useCycle:!1,iterations:100}),Bn("Nova","z^4 - 1"),Bn("Nova","(z - 1)(z - 4 + i * sqrt(2))(z + sqrt(3) - i * sqrt(3))",{args:{z:A(1),c:A()},scale:A(2)}),Bn("Nova","z^3 - 2z + 2"),Bn("Nova","z^8 + 15z^4 - 16"),Bn("Nova","z^6 + z^3 - 1"),Bn("Nova","z^4 * sin(z) - 1")]},{...H("Domain coloring Polynomial","z + c"),subforms:[H("z²","z^2 + c"),H("","((z - 1)(z + 1)^2) / ((z + i)(z - i)^2) + c"),H("","(z^3 - 2 * z + i) / (z^2 + 1) + c"),H("","z / 2 + 1 / (2 * z) + c")]},{...H("Domain coloring Trigonometry","sin(z) + c",{scale:A(3)}),subforms:[H("Cos","cos(z) + c"),H("Tan","tan(z) + c"),H("Acos","acos(z) + c"),H("Asin","asin(z) + c"),H("Atan","atan(z) + c"),H("Cosh","cosh(z) + c"),H("Sinh","sinh(z) + c"),H("Tanh","tanh(z) + c"),H("Acosh","acosh(z) + c"),H("Asinh","asinh(z) + c"),H("Atanh","atanh(z) + c"),H("Cn","cn(z, .5) + c"),H("Sn","sn(z, .5) + c"),H("Dn","dn(z, .5) + c"),H("Cn","cn(z, .5) / cos(z) + c"),H("Complete Elliptic Integral of First Kind","ellk(z) + c"),H("Incomplet Elliptic Integral of First Kind","ellfi(z, .5) + c"),H("Nome","nome(z) + c")]},{...H("Domain coloring Transcendental","exp(z) + c"),subforms:[H("Logarithm","log(z) + c"),H("Exponential Inverse","exp(z^-1) + c",{scale:A(1.5)}),H("Exponential Square Inverse","exp(-z^2) + c",{scale:A(1.5),showPolya:!0}),H("Square Root","sqrt(z) + c"),H("Cubic Root","z^(1/3) + c"),H("Complex Exponentiation","z^c",{args:{z:A(),c:A(2.5)}}),H("²z","z^^2 + c"),H("³z","z^^3 + c"),H("⁴z","z^^4 + c"),H("Exponential Integral","expint(z) + c"),H("Logarithm Integral","lint(z) + c"),H("Error Function","erf(z) + c"),H("Faddeeva","faddeeva(z) + c"),H("Error Function Complementary","erfc(z) + c"),H("Error Function Scaled Complementary","erfcx(z) + c"),H("Error Function Imaginary","erfi(z) + c"),H("Fresnel Cosine","fresnelc(z) + c"),H("Fresnel Sine","fresnels(z) + c"),H("Fresnel Auxiliary F","fresnelf(z) + c"),H("Fresnel Auxiliary G","fresnelg(z) + c"),H("Dawson","dawson(z) + c"),H("Beta","beta(z, c)",{args:{z:A(),c:A(2)}}),H("Beta First derivative","beta'(z, c)",{args:{z:A(),c:A(2)}}),H("Gamma","gamma(z) + c"),H("Gamma First derivative","gamma'(z) + c"),H("Eta","eta(z) + c"),H("Zeta","zeta(z) + c"),H("Zeta First derivative","zeta'(z) + c"),H("Psi (Digamma)","psi(z) + c"),H("Tania","tania(z) + c"),H("Atania","atania(z) + c"),H("Doya","doya(z) + c"),H("Filog","filog(z) + c"),H("Tet","tet(z) + c"),H("Ate","ate(z) + c"),H("Tetra","tetra(z, c)",{args:{z:A(0),c:A(2,2)}})]},{...H("Domain coloring Misc","fibonacci(z) + c"),subforms:[H("Arg","arg(z) + c"),H("Norm","norm(z) + c"),H("","z^-1 + z^-2 + z^-3 + z^-4 + z^-5 + c"),H("","z * sin(z^-1) + c"),H("","sin(z^-2) + c",{scale:A(1.5)}),H("","(z^-18 - z^-1) / (z^-1 - 1) + c"),H("","sqrt(1 - z^-2 + z^3) + c"),H("","((z - 2 - i)^2 * (z^2 - 1)) / (z^2 + 2 + i) + c"),H("","z^(2/3 + i) + c"),H("","(exp(z) - 1) / z^2 + c"),H("","cos(z) / z^2 + c"),H("","sinh(z) / z^4 + c"),H("","(1 - cos(z)) / z^2 + c"),H("","sin(z) / z + c"),H("","z / (exp(z) - 1) + c"),H("","(z - 1) cos(1 / z) + c"),H("","z / i - i / z + c"),H("","z^(4z^(3z^(2z^z))) + c"),H("Weierstrass Elliptic","weierstrass(z) + c"),H("Weierstrass","weierstrassr(z, c)",{args:{z:A(),c:A(.9,1.12)},scale:A(.35)}),H("Wilmshurst","im(exp(-i*PI / 4) * z^c) + i * im(exp(i * PI / 4) * (z - 1)^c)",{args:{z:A(),c:A(4)}}),H("","sum(n, 1, 20, z^n / (c - z^n))",{args:{z:A(),c:A(1)}}),H("","product(n, 1, 20, (c - z^n))",{args:{z:A(),c:A(1)}})]}]);function Ln({allowNull:u,name:c,label:f,value:s,onChange:d}){const h=B.useCallback(D=>{let{name:y,checked:m}=D.target,j;u?j=s===!1?!0:s?null:!1:j=m,d(y,j)},[u,d,s]),b=B.useRef(null);return B.useLayoutEffect(()=>{u&&b.current&&(s===null?b.current.indeterminate=!0:b.current.indeterminate=!1)},[s,u]),p.jsxs("label",{className:"boolean-label",children:[f,p.jsx("input",{type:"checkbox",ref:b,name:c,checked:s||!1,onChange:h})]})}function T1({name:u,label:c,min:f=0,max:s=1/0,value:d,toggler:h,maxWidth:b=5,togglerName:D,decimal:y,onChange:m,...j}){const[O,q]=B.useState(`${d}`),J=B.useCallback(X=>{if(y)try{return pe(X)}catch{try{return C1(X).real()}catch{return NaN}}return parseFloat(X)},[y]);B.useEffect(()=>{try{(y?!d.eq(J(O)):d!==J(O))&&(q(`${d}`),G(!0))}catch(X){console.warn(X),G(!1)}},[y,d]);const[Y,G]=B.useState(!0),F=B.useCallback(X=>{if(q(X),!X){G(!1);return}const $=J(X);if(isNaN($)||!y&&($<f||$>s)){G(!1);return}G(!0),m(u,$)},[y,s,f,u,m]),P=X=>{const $=X.target.value;F($)},me=X=>{m(X.target.name,X.target.checked)};return p.jsxs("label",{className:`number ${Y?"valid":"invalid"}`,children:[c&&p.jsx("span",{className:"number-label",children:c}),D&&p.jsx("input",{type:"checkbox",name:D,checked:h,onChange:me}),(!D||h)&&p.jsx("div",{className:"number-control",children:p.jsx("input",{type:"text",name:u,value:O,style:{width:`${O.length+.3}ch`,maxWidth:`${b}ch`},onChange:P,...j})})]})}function w1({name:u,label:c,min:f=0,max:s=1/0,step:d=1,initial:h=A(0,0),value:b,toggler:D,togglerName:y,arg:m,varying:j=null,onChange:O,...q}){const J=X=>{O(X.target.name,X.target.checked)},Y=(X,$)=>{m?O("args",{...b,[X]:$}):O(X,$)},G=()=>{j.includes(u)?O("varying",j.replace(u,"")):O("varying",j+u)},F=m?b[u]:b,P=(X,$)=>{Y(u,A($,F.im))},me=(X,$)=>{Y(u,A(F.re,$))};return p.jsxs("label",{className:"complex",children:[c&&p.jsx("span",{className:"complex-label",children:c}),y&&p.jsx("input",{type:"checkbox",name:y,checked:D,onChange:J}),(!y||D)&&p.jsxs("div",{className:"complex-control",children:[p.jsx(T1,{name:`${u}-re`,value:F.re,onChange:P,decimal:!0,...q}),p.jsx("span",{className:"complex-inner-label",children:"+"}),p.jsx(T1,{name:`${u}-im`,value:F.im,onChange:me,decimal:!0,...q}),p.jsx("span",{className:"complex-inner-label",children:"i"}),j!==null?p.jsx("button",{type:"button",onClick:G,className:"button",children:j.includes(u)?y6:z6}):null,p.jsx("button",{type:"button",onClick:()=>Y(u,h),className:"button",children:q1})]})]})}function gc({name:u,label:c,togglerName:f,toggler:s,value:d,maxWidth:h=50,onChange:b,...D}){const y=B.useCallback(()=>`${d}`,[d]),[m,j]=B.useState(y);B.useEffect(()=>{j(y()),q(!0)},[y,d]);const[O,q]=B.useState(!0),J=B.useCallback(F=>{j(F);try{const P=["z","c","Z","dz","dc","z_prime","z_1","z_1_prime","dz_1"],me=new Function(...P,`return ${Kt(F).toComplex()}`),X=P.map($=>A(Math.random(),Math.random()));me(...X)}catch(P){if(P instanceof SyntaxError){console.warn("Syntax error in formula",P),q(!1);return}const me=P.toString();if(me.includes("is not a function")){const X=me.match(/(.+) is not a function/)[1].split(".").slice(-1)[0].replace("_prime","'");if(!Object.keys(Fu).includes(X)){console.warn("Unknown function in formula",P),q(!1),b(u,F);return}}if(me.includes("undeclared identifier")||me.includes("is not defined")){const X=me.match(/(.+) is not defined/)[1].split(": ").slice(-1)[0];if(X.length>1&&!zc.includes(X)){console.warn("Undeclared identifier in formula",P),q(!1),b(u,F);return}}}q(!0),b(u,F)},[b,u]),Y=F=>{const P=F.target.value;J(P)},G=F=>{b(F.target.name,F.target.checked)};return p.jsxs("label",{className:`complex-formula ${O?"valid":"invalid"}`,children:[c&&p.jsx("span",{className:"complex-formula-label",children:c}),f&&p.jsx("input",{type:"checkbox",name:f,checked:s,onChange:G}),(!f||s)&&p.jsx("input",{type:"text",name:u,value:m,style:{width:`${m.length+.3}ch`,maxWidth:`${h}ch`},onChange:Y,...D})]})}const x6=(u,c,f,s,d)=>{let h=!0,b=0;return parseInt(s)!==parseFloat(s)?b=u===""?"":parseFloat(u):b=u===""?"":parseInt(u),h=!(b===""||isNaN(b)||b<c||b>f||d&&s%1===0&&b%s!==0||s%1!==0&&u.endsWith(".")||c<0&&u==="-0"),{valid:h,raw:u,value:b}};function je({name:u,label:c,min:f=0,max:s=1/0,step:d=1,value:h,toggler:b,maxWidth:D=5,togglerName:y,noPlusMinus:m,stepLock:j=!1,togglerOnly:O=!1,onChange:q,...J}){const Y=B.useCallback(()=>`${h}`,[h]),[G,F]=B.useState(Y);B.useEffect(()=>{F(Y()),me(!0)},[Y,h]);const[P,me]=B.useState(!0),X=B.useCallback((ce,vt=!1)=>{const Ot=x6(ce,f,s,d,j);F(Ot.raw),me(Ot.valid),Ot.valid&&q(u,Ot.value)},[s,f,u,q,d]),$=B.useCallback(()=>{if(!P){X(`${f}`);return}if(G!==`${f}`){let ce=parseInt(d)===parseFloat(d)?parseInt(G):parseFloat(G);ce-=d,d>0&&d<1?X(ce.toFixed(d.toString().split(".")[1].length)):X(ce.toString())}},[f,G,d,X,P]),ve=B.useCallback(()=>{if(!P){X(`${f}`);return}if(G!==`${s}`){let ce=parseInt(d)===parseFloat(d)?parseInt(G):parseFloat(G);ce+=d,d>0&&d<1?X(ce.toFixed(d.toString().split(".")[1].length)):X(ce.toString())}},[s,f,G,d,X,P]),ue=ce=>{const vt=ce.target.value;X(vt,!0)},ne=ce=>{q(ce.target.name,ce.target.checked)};return p.jsxs("label",{className:`number ${P?"valid":"invalid"}`,children:[c||y?p.jsxs("div",{className:"number-head",children:[c&&p.jsx("span",{className:"number-label",children:c}),y&&p.jsx("input",{type:"checkbox",name:y,checked:b,onChange:ne})]}):null,(!y||b)&&!O&&p.jsxs("div",{className:`number-control${m?" noplusminus":""}`,children:[p.jsx("input",{type:"text",name:u,value:G,style:{width:`${Math.max(...[d,G].map(ce=>ce.toString().length))+.3}ch`,maxWidth:`${D}ch`},onChange:ue,...J}),!m&&p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"plusminus minus",onClick:$,tabIndex:-1,children:"−"}),p.jsx("button",{className:"plusminus plus",onClick:ve,tabIndex:-1,children:"+"})]})]})]})}const Je={width:300,height:150},cs=document.createElement("canvas");cs.width=Je.width;cs.height=Je.height;const E6={dimensions:2,locked:!1,gl:null,env:null,queue:[],init(){this.gl=cs.getContext("webgl2",{antialias:!1,stencil:!1}),this.env={vertexShader:this.gl.createShader(this.gl.VERTEX_SHADER),fragmentShader:this.gl.createShader(this.gl.FRAGMENT_SHADER),program:this.gl.createProgram()},ls(this),this.gl.attachShader(this.env.program,this.env.vertexShader),this.gl.attachShader(this.env.program,this.env.fragmentShader)},render(u){this.gl||this.init();const c={gl:this.gl,env:this.env,...Pl,...u,perturb:!1};as(c),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.viewport(0,0,Je.width,Je.height),this.gl.uniform2fv(this.env.uniforms.aspect,[Je.width/Je.height,1/Math.max(Je.width,Je.height)]),this.gl.drawArrays(this.gl.TRIANGLES,0,3);const f=new Uint8Array(Je.width*Je.height*4);return this.gl.readPixels(0,0,Je.width,Je.height,this.gl.RGBA,this.gl.UNSIGNED_BYTE,f),f}},A6=B.memo(function({params:c}){const f=B.useRef();return B.useEffect(()=>{setTimeout(()=>{if(!f.current)return;const s=E6.render(c);f.current.width=Je.width,f.current.height=Je.height;const d=f.current.getContext("2d"),h=new ImageData(new Uint8ClampedArray(s),Je.width,Je.height);d.putImageData(h,0,0),d.scale(1,-1),d.translate(0,-Je.height),d.drawImage(f.current,0,0)},0)},[c]),p.jsx("canvas",{ref:f,className:"preview",style:Je})}),T6=u=>{const c=Object.keys(u).filter(f=>f!="z").sort();return c.length?c.length===1?c[0]:`{${c.join(", ")}}`:null};function L1({args:u}){const c=T6(u);return p.jsxs(p.Fragment,{children:["F",c?p.jsx("sub",{children:c}):null,"(z) ="]})}const Pu=u=>{if(["string","number"].includes(typeof u))return u;if(u instanceof Array)return u.map(Pu).join("");if(typeof u=="object"&&u)return Pu(u.props.children)},_1=(u,c)=>c==="*"?!0:typeof u=="string"?Pu(u).toLowerCase().includes(c.toLowerCase()):!1,w6=B.memo(function u({name:c,index:f,params:s,search:d,subforms:h=[],sub:b=!1,shown:D,onPreset:y}){const[m,j]=B.useState(!1),[O,q]=B.useState(!0),[J,Y]=B.useState(!1);return B.useEffect(()=>{J&&j(!0)},[J]),B.useEffect(()=>{if(!d){q(!0),Y(!1);return}if(h.length&&h.some(({name:G})=>_1(G,d))){q(!0),Y(!0);return}if(_1(c,d)){q(!0);return}q(!1),Y(!1)},[c,d,h]),p.jsxs("div",{style:{display:O?"block":"none"},children:[p.jsx("div",{className:`preset${b?" sub":""}`,onClick:()=>y(s,f),children:p.jsxs("div",{className:`preset-header preset-name-${h.length?"button":"only"}`,children:[h.length?p.jsx("button",{className:`preset-toggle ${J?"open":"closed"}`,onClick:G=>{G.stopPropagation(),Y(!J)},children:J?"-":"+"}):null,p.jsxs("div",{className:"preset-content-preview",children:[p.jsxs("div",{className:"preset-content",children:[p.jsx("span",{className:"preset-name",children:c}),p.jsxs("code",{className:"preset-formula",children:[p.jsx("span",{className:"preset-assignment",children:p.jsx(L1,{args:s.args})})," ",s.f]}),p.jsxs("code",{className:"preset-derivative_z",children:[p.jsx("span",{className:"preset-assignment",children:"dF(z, z', c)/dz = "}),s.f_prime_z]}),p.jsxs("code",{className:"preset-derivative_c",children:[p.jsx("span",{className:"preset-assignment",children:"dF(z, z', c)/dc = "}),s.f_prime_c]})]}),D?p.jsx(A6,{params:s}):null]})]})}),p.jsx("div",{className:"subforms",style:{display:J?"block":"none"},children:h.map((G,F)=>p.jsx(u,{...G,sub:!0,search:d,shown:D&&m,onPreset:y},F))})]})});function _6({open:u,onPreset:c,onExportImage:f,closePresets:s}){const[d,h]=B.useState(!1),[b,D]=B.useState(""),[y,m]=B.useState(""),j=B.useRef();B.useEffect(()=>{u&&(h(!0),j.current.focus())},[u]);const O=B.useCallback(q=>{m(q.target.value),M1(D(q.target.value),50)},[]);return p.jsxs("div",{style:{display:u?"block":"none"},children:[p.jsx("div",{className:"presets-overlay",onClick:s}),p.jsx("div",{className:"presets",children:p.jsxs("div",{className:"presets-modal",children:[p.jsxs("div",{className:"presets-header",children:[p.jsxs("div",{className:"presets-search",children:[p.jsx("input",{type:"text",placeholder:"Search",ref:j,value:y,onChange:O}),p.jsx("button",{className:"presets-clear",onClick:()=>{D(""),m("")},children:q1})]}),p.jsxs("div",{className:"presets-actions",children:[p.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:o6}),p.jsx("button",{className:"presets-action",onClick:f,children:d6}),p.jsx("button",{className:"presets-action",onClick:s,children:v6})]})]}),p.jsx("div",{className:"presets-list",children:Zn.map(({type:q,content:J,name:Y,params:G,subforms:F},P)=>p.jsx(B.Fragment,{children:q==="title"?p.jsx("h2",{children:J}):q==="group"?p.jsx("h4",{children:J}):p.jsx(w6,{name:Y,index:P,params:G,search:b,shown:d,subforms:F,onPreset:c})},P))})]})})]})}function D1({name:u,value:c,options:f,label:s,onChange:d,...h}){const b=B.useCallback(D=>{const{value:y}=D.target;d(u,y)},[u,d]);return p.jsxs("label",{className:"select-label",children:[s,p.jsx("select",{name:u,value:c,className:"select",onChange:b,children:f.map(D=>p.jsx("option",{value:D,children:D.replace(/_/g," ").replace(/./,y=>y.toUpperCase())},D))})]})}function D6(){return new Promise(u=>{setTimeout(u,100)})}const N6=(u,c,f,s,d,h,b,D=0)=>{const{gl:y}=u,m={left:0,right:0,top:0,bottom:0};m.left=Math.min(D,s),m.top=Math.min(D,d),m.right=Math.min(D,c-s-h),m.bottom=Math.min(D,f-d-b),Yn(u,{height:b+m.top+m.bottom,width:h+m.left+m.right,x:s-m.left,y:d-m.top,fullWidth:c,fullHeight:f});const j=new Uint8ClampedArray(h*b*4);return y.bindFramebuffer(y.FRAMEBUFFER,null),y.readPixels(m.left,m.bottom,h,b,y.RGBA,y.UNSIGNED_BYTE,j),new ImageData(j,h,b)},C6=async(u,c,f,s,d,h,b,D=0)=>{const y=Math.ceil(c/s)*Math.ceil(f/d);let m=0;for(let j=0;j<f;j+=d){const O=Math.min(d,f-j);for(let q=0;q<c;q+=s){const J=Math.min(s,c-q),Y=N6(u,c,f,q,j,J,O,D);if(!Y)return;b.putImageData(Y,q,j),h.innerHTML=`${(++m/y*100).toFixed(0)}%`,await D6()}}};async function M6(u,c,f){const b=document.createElement("div");b.className="export-progress",document.body.appendChild(b);const D=document.createElement("canvas");D.width=c,D.height=f;const y=D.getContext("2d");try{await C6(u,c,f,1e3,1e3,b,y,0)}finally{document.body.removeChild(b)}return is(u),Yn(u),D.toDataURL("image/png")}const R6=()=>{try{return localStorage.getItem("showUI")||"simple"}catch(u){return console.error(u),"simple"}};function j6({runtime:u,params:c,setRuntime:f,updateParams:s}){const[d,h]=B.useState(R6),[b,D]=B.useState(!1),[y,m]=B.useState(0),[j,O]=B.useState(!1),q=B.useCallback(()=>{s({animate:!1}),D(!0)},[s]),J=B.useCallback(()=>{D(!1)},[]),Y=B.useCallback(($,ve)=>{s($,!0),m(ve),J()},[s,J]),G=B.useCallback(($,ve)=>{s({[$]:ve})},[s]),F=B.useCallback(()=>h($=>{const ve={simple:"advanced",advanced:"full",full:"empty",empty:"simple"}[$];try{localStorage.setItem("showUI",ve)}catch(ue){console.error(ue)}return ve}),[]),P=B.useCallback(()=>{O($=>!$)},[]);B.useEffect(()=>{const $=ve=>{if(ve.target.tagName!=="INPUT"){if(ve.key==="ArrowLeft"&&ve.ctrlKey&&y>0){let ue=y-1;for(;Zn[ue].type;){if(ue<2)return;ue--}Y(Zn[ue].params,ue)}else if(ve.key==="ArrowRight"&&ve.ctrlKey&&y<Zn.length-1){let ue=y+1;for(;Zn[ue].type;){if(ue>Zn.length-2)return;ue++}Y(Zn[ue].params,ue)}}};return window.addEventListener("keydown",$),()=>{window.removeEventListener("keydown",$)}},[Y,y]);const me=B.useCallback(async()=>{J();const $=window.prompt("Select image resolution","5000x5000");if(!$||!$.includes("x")){console.error("Invalid resolution");return}const[ve,ue]=$.split("x").map(ce=>parseInt(ce));if(isNaN(ve)||isNaN(ue)){console.error("Invalid resolution");return}const ne=await M6(u,ve,ue);if(ne){const ce=document.createElement("a");document.body.appendChild(ce),ce.style.display="none",ce.href=ne,ce.download=`${document.title}-${ve}x${ue}`,ce.click()}},[J,u]),X=Object.keys(c.args);return p.jsxs(p.Fragment,{children:[p.jsx(_6,{open:b,onPreset:Y,onExportImage:me,closePresets:J}),p.jsxs("main",{className:"ui"+(j?" readable ":"")+(u.error?" error":""),title:u.error,children:[p.jsxs("div",{className:"ui-row ui-row-top",children:[p.jsx("aside",{className:"controls",children:p.jsxs("div",{className:"subcontrols",children:[p.jsx("button",{className:"button",onClick:F,children:g6}),["advanced","full"].includes(d)?p.jsx("button",{className:"button",onClick:P,children:j?p6:b6}):null,["simple","advanced","full"].includes(d)?p.jsx("button",{className:"button",onClick:()=>s({animate:!c.animate}),children:c.animate?m6:h6}):null,["simple","advanced","full"].includes(d)?p.jsxs("button",{className:"button",onClick:()=>s({dimensions:(c.dimensions+1)%5||1}),children:[c.dimensions,"D"]}):null,c.dimensions>2&&["simple","advanced","full"].includes(d)?p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"button",onClick:()=>s({control:ku[(ku.indexOf(c.control)+1)%(ku.length-(c.dimensions===3?1:0))]}),children:c.control}),c.control==="4d"?p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"button",onClick:()=>s({matrix:ea(),anakata:10}),children:"c"}),p.jsx("button",{className:"button",onClick:()=>s({rotation:(c.rotation+1)%3}),children:c.rotation})]}):null,c.control==="3d"?p.jsx("button",{className:"button",onClick:()=>{u.env.camera.rotation=rl(Math.PI/2,1,2),u.env.camera.zoom=2,u.env.camera.update(),Yn(u)},children:"c"}):null,p.jsx("button",{className:"button",onClick:()=>s({transparent:!c.transparent}),children:c.transparent?"T":"O"})]}):null]})}),["simple","advanced","full"].includes(d)?p.jsxs("aside",{className:"formula",children:[p.jsx(gc,{label:p.jsx(L1,{args:c.args}),name:"f",value:c.f,onChange:G}),["advanced","full"].includes(d)&&c.useDerivative?p.jsx(gc,{label:"dF(z, z', c)/dz =",name:"f_prime_z",value:u.f_prime_z,onChange:G}):null,["advanced","full"].includes(d)&&c.useDerivative?p.jsx(gc,{label:"dF(z, z', c)/dc =",name:"f_prime_c",value:u.f_prime_c,onChange:G}):null,["advanced","full"].includes(d)&&u.perturb?p.jsx(gc,{label:"F(Z, dz, dc) =",name:"f_perturb",value:c.f_perturb,onChange:G}):null]}):null]}),p.jsxs("div",{className:"ui-row ui-row-middle",children:[["simple","advanced","full"].includes(d)?p.jsxs("aside",{className:"view",children:[p.jsx(D1,{label:"Palette",name:"palette",value:c.palette,options:R1,onChange:G}),p.jsx(D1,{label:"Shading",name:"shading",value:c.shading,options:j1,onChange:G}),["full"].includes(d)?p.jsx(je,{name:"offset",label:"Offset",min:0,step:10,value:c.offset,onChange:G}):null,["full"].includes(d)?p.jsx(je,{name:"velocity",label:"Velocity",min:0,step:10,value:c.velocity,onChange:G}):null,["full"].includes(d)?p.jsx(je,{name:"hue",label:"Hue",min:0,max:360,step:10,value:c.hue,onChange:G}):null,["full"].includes(d)?p.jsx(je,{name:"saturation",label:"Saturation",min:0,step:10,value:c.saturation,onChange:G}):null,["full"].includes(d)?p.jsx(je,{name:"lightness",label:"Lightness",min:0,step:10,value:c.lightness,onChange:G}):null,["advanced","full"].includes(d)&&c.animate?p.jsx(je,{name:"speed",label:"Speed",min:0,value:c.speed,onChange:G}):null,p.jsx(je,{name:"supersampling",label:"Supersampling",min:0,step:.1,value:c.supersampling,onChange:G})]}):null,["simple","advanced","full"].includes(d)?p.jsxs("aside",{className:"params",children:[p.jsx(je,{name:"iterations",label:"Iterations",min:1,step:1,value:c.iterations,onChange:G}),["advanced","full"].includes(d)?p.jsx(Ln,{className:"button",label:"Roots",name:"useRoots",value:c.useRoots,onChange:G}):null,["advanced","full"].includes(d)?p.jsx(je,{name:"bailin",label:"Bailin",min:-1/0,step:.1,value:c.bailin,togglerName:"convergent",toggler:c.convergent,onChange:G}):null,["advanced","full"].includes(d)?p.jsx(je,{name:"bailout",label:"Bailout",min:-1/0,step:.1,value:c.bailout,togglerName:"divergent",toggler:c.divergent,onChange:G}):null,["advanced","full"].includes(d)&&p.jsx(Ln,{label:"Only Bailed",className:"button",name:"onlyBailed",value:c.onlyBailed,onChange:G}),["advanced","full"].includes(d)?p.jsx(je,{name:"derivative",label:"Derivative",min:0,value:c.derivative,togglerName:"useDerivative",toggler:c.useDerivative,onChange:G}):null,["advanced","full"].includes(d)?p.jsx(Ln,{name:"useCycle",label:"Cycle",value:c.useCycle,onChange:G}):null,d==="full"?p.jsx(Ln,{label:"Perturbation",className:"button",name:"usePerturbation",allowNull:!0,value:c.usePerturbation,onChange:G}):null,["full"].includes(d)?p.jsx(Ln,{name:"scaled",label:"Scaled",value:c.scaled,onChange:G}):null,["advanced","full"].includes(d)?p.jsx(je,{name:"gridScale",label:"Grid",min:0,value:c.gridScale,togglerName:"showGrid",toggler:c.showGrid,togglerOnly:d!=="full",onChange:G}):null,["full"].includes(d)&&c.showGrid?p.jsx(je,{name:"gridWidth",label:"Grid Width",step:.1,value:c.gridWidth,onChange:G}):null,["full"].includes(d)&&c.showGrid?p.jsx(Ln,{name:"gridLog",label:"Grid Log",value:c.gridLog,togglerOnly:d!=="full",onChange:G}):null,["advanced","full"].includes(d)?p.jsx(je,{label:"Norm Grid",step:.1,name:"normGridWidth",value:c.normGridWidth,togglerName:"showNormGrid",toggler:c.showNormGrid,togglerOnly:d!=="full",onChange:G}):null,["advanced","full"].includes(d)?p.jsx(je,{label:"Norm Shade",className:"button",name:"normShadeValue",value:c.normShadeValue,togglerName:"normShade",toggler:c.normShade,togglerOnly:d!=="full",onChange:G}):null,["advanced","full"].includes(d)&&(c.showNormGrid||c.normShade)?p.jsx(je,{name:"normGridScale",label:"Norm Grid Scale",min:0,value:c.normGridScale,onChange:G}):null,["advanced","full"].includes(d)&&(c.showNormGrid||c.normShade)?p.jsx(Ln,{name:"normGridLog",label:"Norm Grid Log",value:c.normGridLog,onChange:G}):null,["advanced","full"].includes(d)?p.jsx(je,{label:"Arg Grid",step:.1,name:"argGridWidth",value:c.argGridWidth,togglerName:"showArgGrid",toggler:c.showArgGrid,togglerOnly:d!=="full",onChange:G}):null,["advanced","full"].includes(d)?p.jsx(je,{label:"Arg Shade",className:"button",name:"argShadeValue",value:c.argShadeValue,togglerName:"argShade",toggler:c.argShade,togglerOnly:d!=="full",onChange:G}):null,["advanced","full"].includes(d)&&(c.showArgGrid||c.argShade)?p.jsx(je,{name:"argGridScale",label:"Arg Grid Scale",min:0,value:c.argGridScale,onChange:G}):null,["advanced","full"].includes(d)&&(c.showArgGrid||c.argShade)?p.jsx(Ln,{name:"argGridLog",label:"Arg Grid Log",value:c.argGridLog,onChange:G}):null,["advanced","full"].includes(d)?p.jsx(je,{label:"Zeroes",className:"button",name:"zeroes",min:-1/0,value:c.zeroes,togglerName:"showZeroes",toggler:c.showZeroes,togglerOnly:d!=="full",onChange:G}):null,["advanced","full"].includes(d)?p.jsx(je,{label:"Poles",className:"button",name:"poles",min:-1/0,value:c.poles,togglerName:"showPoles",toggler:c.showPoles,togglerOnly:d!=="full",onChange:G}):null,["advanced","full"].includes(d)?p.jsx(je,{name:"polya",label:"Polya Plot",min:0,value:c.polya,togglerName:"showPolya",toggler:c.showPolya,togglerOnly:d!=="full",onChange:G}):null,["full"].includes(d)&&c.showPolya?p.jsx(je,{name:"polyaLightness",label:"Polya Lightness",min:0,step:10,togglerName:"polyaColor",toggler:c.polyaColor,value:c.polyaLightness,onChange:G}):null]}):null]}),p.jsxs("div",{className:"ui-row ui-row-bottom",children:[["simple","advanced","full"].includes(d)?p.jsx("button",{className:"preset-button button",onClick:q,title:"Presets",children:r6}):null,["advanced","full"].includes(d)&&p.jsxs("aside",{className:"bounds",children:[X.sort().reverse().map($=>p.jsx(w1,{name:$,label:$,maxWidth:null,value:c.args,arg:!0,varying:c.varying,onChange:G},$)),p.jsx(w1,{name:"scale",label:"Scale",maxWidth:null,initial:A(1,0),value:c.scale,onChange:G})]}),["simple","advanced","full"].includes(d)?p.jsxs("button",{className:`space-button button${u.processing?" processing":""}`,onClick:()=>s({move:X[(X.indexOf(c.move)+1)%X.length]||"c"}),children:["𝚫",c.move]}):null]})]})]})}const yc=(u,c=[],f)=>{const s={...u},d=[];if(Object.entries(s).forEach(([h,b])=>{typeof Pl[h]=="number"?(b===""||isNaN(b))&&(delete s[h],d.push(h)):Array.isArray(Pl[h])&&(Array.isArray(b[0])?b.find(D=>D.find(y=>b===""||isNaN(y)))&&(delete s[h],d.push(h)):b.find(D=>b===""||isNaN(D))&&(delete s[h],d.push(h)))}),c.includes("f")||c.includes("dimensions")){const h=Wl(Kt(s.f)).filter(D=>D.length===1);h.includes("z")||h.push("z"),(s.dimensions===1||s.dimensions===3)&&(h.includes("o")||h.push("o"));const b=Object.keys(s.args);if(Fa(h,b)||(s.args=h.reduce((D,y)=>(D[y]=s.args[y]||A("o".includes(y)?0:1),D),{})),!c.includes("f_prime_z")||s.f_prime_z===null)try{s.f_prime_z=Wa(s.f,["z","z_1"]).toString()}catch(D){d.push("f_prime_z"),console.warn(D)}if(!c.includes("f_prime_c")||s.f_prime_c===null)try{s.f_prime_c=Wa(s.f,["z","z_1"],["c"]).toString()}catch(D){d.push("f_prime_c"),console.warn(D)}h.includes(s.move)||(s.move="z")}return c.includes("dimensions")&&(s.dimensions===3?s.transparent=!1:s.dimensions===4&&(s.transparent=!0)),(c.includes("convergent")||c.includes("divergent"))&&!s.convergent&&!s.divergent&&(s.useDerivative=!1,s.usePerturbation=!1),s.args.z||(s.args.z=A()),{params:s,badParams:d}};function U6({params:u,updateParams:c}){const[f,s]=B.useState({...u,perturb:!1,timeref:0}),[d,h]=B.useState(!1);return B.useEffect(()=>{if(!f.gl&&f.error)return;const b=y=>{console.error("WebGL context lost",y),s(m=>({...m,gl:null,error:new Error("WebGL context lost")})),y.preventDefault()},D=()=>{console.warn("WebGL context restored"),s(y=>({...y,...x1(y,b,D),error:null}))};s(y=>{try{return y.gl?y:x1(y,b,D)}catch(m){return console.error(m),{...y,error:m}}})},[f.gl,f.error]),B.useEffect(()=>{s(b=>({...b,...yc(u).params}))},[u]),p.jsxs(p.Fragment,{children:[f.error?p.jsxs("aside",{className:"global-error",children:[p.jsxs("div",{children:[f.error.toString()," ",p.jsxs("button",{onClick:()=>h(b=>!b),children:[d?"Hide":"Show"," stack"]})]}),f.error.stack&&d?p.jsx("pre",{children:f.error.stack}):null]}):null,f.gl?p.jsxs(p.Fragment,{children:[p.jsx(j6,{runtime:f,params:u,setRuntime:s,updateParams:c}),p.jsx(f6,{runtime:f,setRuntime:s,updateParams:c})]}):null]})}const O6=(u,c)=>c instanceof Vt?c.toString():c,G6=(u,c)=>typeof c=="string"&&Vt.isComplexString(c)?Vt.fromString(c):c,N1=()=>{const{location:u}=window;if(u.hash)try{const f=JSON.parse(atob(u.hash.slice(1)),G6);return yc({...Pl,...f}).params}catch(f){console.warn(f),u.hash=""}const c=Zn.map(f=>f.subforms?f.subforms.map(s=>s.params).concat(f.params):f.params).flat(1);return yc(c[~~(c.length*Math.random())]).params},H6=(u,c=!1)=>{const f="#"+btoa(JSON.stringify(u,O6));window.history[c?"replaceState":"pushState"](null,null,f)},q6=()=>{const[u,c]=B.useState(N1()),f=B.useCallback(d=>{const h=N1();h&&(Object.entries(h).forEach(([b,D])=>{Array.isArray(D)&&Fa(D,u[b])&&(h[b]=u[b])}),c(h))},[u]),s=B.useCallback((d,h=!1)=>{c(b=>{if(!Object.entries(d).filter(([m,j])=>Array.isArray(j)?!Fa(j,b[m]):typeof j=="object"&&j!==null?!Fa(Object.entries(j),Object.entries(b[m])):b[m]!==j).length)return b;const{params:D,badParams:y}=yc(h?d:{...b,...d},h?[]:Object.keys(d));return y.length||H6(D,Object.keys(d).length===1&&d.matrix),D})},[]);return B.useEffect(()=>(window.addEventListener("popstate",f),()=>{window.removeEventListener("popstate",f)}),[f]),p.jsx(U6,{params:u,updateParams:s})};x5.createRoot(document.getElementById("root")).render(p.jsx(q6,{}));
