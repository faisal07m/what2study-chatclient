(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.What2Study = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(a){if(null===a||"object"!==typeof a)return null;a=z$1&&a[z$1]||a["@@iterator"];return "function"===typeof a?a:null}
	var B$1={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}E$1.prototype.isReactComponent={};
	E$1.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$1.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E$1.prototype;function G$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}var H$1=G$1.prototype=new F;
	H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};
	function M$1(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L$1.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$1,type:a,key:k,ref:h,props:c,_owner:K$1.current}}
	function N$1(a,b){return {$$typeof:l$1,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$1(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$1}function escape$1(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P$1=/\/+/g;function Q$1(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape$1(""+a.key):b.toString(36)}
	function R$1(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l$1:case n$1:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$1(h,0):d,I$1(c)?(e="",null!=a&&(e=a.replace(P$1,"$&/")+"/"),R$1(c,b,e,"",function(a){return a})):null!=c&&(O$1(c)&&(c=N$1(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$1,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$1(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q$1(k,g);h+=R$1(k,b,e,f,c);}else if(f=A$1(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$1(k,g++),h+=R$1(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S$1(a,b,e){if(null==a)return a;var d=[],c=0;R$1(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T$1(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};react_production_min.Children={map:S$1,forEach:function(a,b,e){S$1(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$1(a,function(){b++;});return b},toArray:function(a){return S$1(a,function(a){return a})||[]},only:function(a){if(!O$1(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;
	react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$1({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K$1.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L$1.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$1,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M$1;react_production_min.createFactory=function(a){var b=M$1.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v$1,render:a}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T$1}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V$1.transition;V$1.transition={};try{a();}finally{V$1.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U$1.current.useCallback(a,b)};react_production_min.useContext=function(a){return U$1.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U$1.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U$1.current.useEffect(a,b)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U$1.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U$1.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U$1.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U$1.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U$1.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U$1.current.useRef(a)};react_production_min.useState=function(a){return U$1.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U$1.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.2.0";

	{
	  react.exports = react_production_min;
	}

	var reactExports = react.exports;
	var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

	var client = {};

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (exports) {
	function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
		function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
		"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
		function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=!1;}}var N=!1,O=null,L=-1,P=5,Q=-1;
		function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a);}finally{b?S():(N=!1,O=null);}}else N=!1;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=!0,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
		exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J));};
		exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
		exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
		exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
		exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
	} (scheduler_production_min));

	{
	  scheduler.exports = scheduler_production_min;
	}

	var schedulerExports = scheduler.exports;

	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var aa=reactExports,ca=schedulerExports;function p$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
	function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
	var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
	{},ma={};function oa(a){if(ja.call(ma,a))return !0;if(ja.call(la,a))return !1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return !1}function pa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
	function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1);});
	["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
	sa);z[b]=new v(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1);});
	z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0);});
	function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
	var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=!1;
	function Oa(a,b){if(!a||Na)return "";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
	f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
	function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return ""}}
	function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
	b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
	function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
	case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
	function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
	null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
	function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1);}
	function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
	function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
	function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
	function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
	function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p$1(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p$1(92));if(eb(c)){if(1<c.length)throw Error(p$1(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
	function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
	function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
	function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
	var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
	zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
	function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p$1(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p$1(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p$1(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p$1(62));}}
	function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
	function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p$1(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb();}}
	function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
	typeof c)throw Error(p$1(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=!1;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments);}
	function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null;}else throw Error(p$1(198));Qb||(Qb=!0,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p$1(188));}
	function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p$1(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p$1(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
	c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p$1(189));}}if(c.alternate!==d)throw Error(p$1(190));}if(3!==c.tag)throw Error(p$1(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
	var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
	var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
	function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
	default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
	function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1}}
	function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
	function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
	function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
	function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
	function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return !1}
	function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
	function Xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift();}return !0}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
	function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
	function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=!0;
	function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
	function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
	function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
	function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
	case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
	function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
	function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
	(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
	var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
	a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
	Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
	119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
	var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
	a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
	deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
	function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
	function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
	var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
	function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
	function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
	function Ie(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return !1}return !0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
	function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
	function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
	d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
	var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
	function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
	function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
	ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
	ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
	function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
	function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b));}}
	function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
	function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
	a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
	Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
	w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
	n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
	vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
	xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
	break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
	0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
	function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p$1(425));}function Bf(){}
	var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
	var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
	function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
	function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
	function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p$1(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
	function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
	function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p$1(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p$1(108,Ra(a)||"Unknown",e));return A({},c,d)}
	function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return !0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p$1(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=!0;hg(a);}
	function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
	function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=!1,zg=null;
	function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
	function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
	null,!0):!1;default:return !1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p$1(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a);}}else {if(Dg(a))throw Error(p$1(418));a.flags=a.flags&-4097|2;I=!1;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
	function Gg(a){if(a!==xg)return !1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p$1(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p$1(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
	null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return !0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=!1;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null;}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b;}
	function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null);}
	function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p$1(308));Og=a;Ng.dependencies={lanes:0,firstContext:a};}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a);}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
	function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
	function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function ch(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
	function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
	function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
	b;c.lastBaseUpdate=b;}
	function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
	next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
	h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q;}}
	function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p$1(191,e));e.call(d);}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
	var nh={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=
	lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d));}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
	function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null);}
	function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
	"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}
	function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p$1(309));var d=c.stateNode;}if(!d)throw Error(p$1(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p$1(284));if(!c._owner)throw Error(p$1(290,a));}return a}
	function th(a,b){a=Object.prototype.toString.call(b);throw Error(p$1(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
	function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
	null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
	b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
	c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
	b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d);}return null}
	function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
	x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p$1(150));h=l.call(h);if(null==h)throw Error(p$1(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
	m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
	f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
	d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=zh(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
	(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p$1(174));return a}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(Eh);G(Eh,b);}function Jh(){E(Eh);E(Fh);E(Gh);}
	function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c));}function Lh(a){Fh.current===a&&(E(Eh),E(Fh));}var M=Uf(0);
	function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Nh=[];
	function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0;}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p$1(321));}function Wh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
	function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p$1(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e);}while(Th)}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p$1(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
	function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null;}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else {if(null===a)throw Error(p$1(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a;}return P}
	function ei(a,b){return "function"===typeof b?b(a):b}
	function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
	eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
	function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function hi(){}
	function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p$1(349));0!==(Rh&30)||ni(c,b,e);}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
	function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a);}function ki(a,b,c){return c(function(){oi(b)&&pi(a);})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return !0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1);}
	function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return [b.memoizedState,a]}
	function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d);}
	function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N.flags|=a;e.memoizedState=li(1|b,c,f,d);}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
	function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
	function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b();}finally{C=c,Qh.transition=d;}}function Fi(){return di().memoizedState}
	function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d);}}
	function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d));}}
	function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
	var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
	4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return [d.memoizedState,a]},useRef:function(a){var b=
	ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p$1(407));c=c();}else {c=b();if(null===R)throw Error(p$1(349));0!==(Rh&30)||ni(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
	f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
	useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return [a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
	O?b.memoizedState=a:Di(b,O.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return [a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
	function Mi(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b);};return c}
	function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
	function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a));}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null}
	function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d);}
	function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
	function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
	function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
	function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d;}else null!==
	f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
	function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b);}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
	(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
	("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
	"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
	g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
	a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1);}return kj(a,b,c,d,f,e)}
	function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo);}
	function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return {baseLanes:a,cachePool:null,transitions:null}}
	function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
	g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
	b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
	function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
	function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p$1(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
	if(d)var h=d.dgst;d=h;f=Error(p$1(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
	0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1));}uj();d=Li(Error(p$1(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c);}
	function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
	function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(M,d);if(0===(b.mode&1))b.memoizedState=
	null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
	function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p$1(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
	function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G(M,M.current&1);break;case 19:d=0!==(c&
	b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
	Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Bj=function(){};
	Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
	(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
	c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4);};
	function Ej(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
	function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
	function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
	c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p$1(166));S(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
	d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
	h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
	"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
	a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
	c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
	!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p$1(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
	xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
	a){if(!f)throw Error(p$1(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p$1(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1;}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),
	Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
	g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child}a=
	a.sibling;}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);}else {if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
	b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p$1(156,b.tag));}
	function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p$1(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
	null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Nj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Oj=!1;
	function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
	q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
	case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p$1(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Oj;Oj=!1;return n}
	function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f);}e=e.next;}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
	function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
	function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
	function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}
	function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling;}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling;}
	function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;
	Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next;}while(e!==d)}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
	c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c);}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
	function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a}h=h.return;}if(null===X)throw Error(p$1(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling;}
	function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a);}catch(t){W(a,a.return,t);}try{Qj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
	a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
	f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p$1(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
	null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
	b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V=y):hk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
	rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
	a),fk(a);}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return;}throw Error(p$1(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p$1(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function ik(a,b,c){V=a;jk(a);}
	function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f),f=f.sibling;V=e;Kj=h;U=l;}lk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a);}}
	function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
	b.child.stateNode;break;case 1:c=b.child.stateNode;}ih(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
	default:throw Error(p$1(163));}U||b.flags&512&&Sj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
	function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Sj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Sj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
	var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B()}
	function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p$1(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg());}
	function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Gk(c,Hk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
	function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p$1(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else {b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h);}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);
	else {e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p$1(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
	d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p$1(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null}
	function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a);}
	function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return !1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0}
	function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Fk(a){if(0!==(K&6))throw Error(p$1(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d));}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p$1(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null}
	function Rk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Hj=B()+500,fg&&jg());}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a()}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg();}}function Ij(){gj=fj.current;E(fj);}
	function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij();}c=c.return;}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
	0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}Wg=null;}return a}
	function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Sh=!1;}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
	m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p$1(426));}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
	b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return;}while(null!==f)}Tk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
	function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z);}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e);}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p$1(261));R=null;Z=0;return T}function Uk(){for(;null!==Y;)Vk(Y);}function Mk(){for(;null!==Y&&!cc();)Vk(Y);}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null;}
	function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return}}else {c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d);}finally{pk.transition=e,C=d;}return null}
	function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p$1(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p$1(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
	var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c);dc();K=h;C=g;pk.transition=f;}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
	function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else {a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p$1(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===
	l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
	u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,pk.transition=b;}}return !1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b));}
	function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return;}}
	function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b);}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c));}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c);}
	function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p$1(314));}null!==d&&d.delete(b);Zk(a,c);}var Wk;
	Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1;}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
	null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p$1(306,
	d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p$1(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
	f,b.memoizedState=f,b.flags&256){e=Ki(Error(p$1(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p$1(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c);}b=b.child;}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
	hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
	g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
	c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p$1(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Yi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
	b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p$1(156,b.tag));};function Gk(a,b){return ac(a,b)}
	function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
	function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
	function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
	c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
	function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
	break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p$1(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
	function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
	function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
	null;}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p$1(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p$1(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
	function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
	function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b);}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a);};function ml(a){this._internalRoot=a;}
	nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p$1(409));gl(a,b,null,null);};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null);});b[uf]=null;}};function nl(a){this._internalRoot=a;}
	nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
	function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a);};}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a);};}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d);});return k}
	function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a);};}gl(b,g,a,e);}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()));}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c);}}),jl(a,1);}};
	Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c);}jl(a,134217728);}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d);}jl(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
	yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p$1(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Rk;Hb=Sk;
	var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
	var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
	kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
	reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p$1(200));return dl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!ol(a))throw Error(p$1(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
	reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p$1(188));a=Object.keys(a).join(",");throw Error(p$1(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Sk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!pl(b))throw Error(p$1(200));return sl(null,a,b,!0,c)};
	reactDom_production_min.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p$1(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
	e);return new nl(b)};reactDom_production_min.render=function(a,b,c){if(!pl(b))throw Error(p$1(200));return sl(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p$1(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Rk;
	reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p$1(200));if(null==a||void 0===a._reactInternals)throw Error(p$1(38));return sl(a,b,c,!1,d)};reactDom_production_min.version="18.2.0-next-9e3b772b8-20220608";

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  reactDom.exports = reactDom_production_min;
	}

	var reactDomExports = reactDom.exports;

	var m$1 = reactDomExports;
	{
	  client.createRoot = m$1.createRoot;
	  client.hydrateRoot = m$1.hydrateRoot;
	}

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var __assign$1 = function() {
	    __assign$1 = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign$1.apply(this, arguments);
	};

	function __rest$1(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	function __awaiter(thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (g && (g = 0, op[0] && (_ = 0)), _) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}

	function __spreadArray(to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	}

	typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
	    var e = new Error(message);
	    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	};

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

	{
	  jsxRuntime.exports = reactJsxRuntime_production_min;
	}

	var jsxRuntimeExports = jsxRuntime.exports;

	var EThemes;
	(function (EThemes) {
	    EThemes["LIGHT_THEME_1"] = "LIGHT_THEME_1";
	    EThemes["DARK_THEME_1"] = "DARK_THEME_1";
	})(EThemes || (EThemes = {}));

	var IframeType;
	(function (IframeType) {
	    IframeType[IframeType["CHAT_OPEN_BUTTON"] = 0] = "CHAT_OPEN_BUTTON";
	    IframeType[IframeType["CHAT_CONTAINER_OPEN"] = 1] = "CHAT_CONTAINER_OPEN";
	    IframeType[IframeType["CHAT_CONTAINER_CLOSED"] = 2] = "CHAT_CONTAINER_CLOSED";
	})(IframeType || (IframeType = {}));

	// Unique ID creation requires a high quality random # generator. In the browser we therefore
	// require the crypto API and do not support built-in fallback to lower quality random number
	// generators (like Math.random()).
	let getRandomValues;
	const rnds8 = new Uint8Array(16);
	function rng() {
	  // lazy load so that environments that need to polyfill have a chance to do so
	  if (!getRandomValues) {
	    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
	    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

	    if (!getRandomValues) {
	      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
	    }
	  }

	  return getRandomValues(rnds8);
	}

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */

	const byteToHex = [];

	for (let i = 0; i < 256; ++i) {
	  byteToHex.push((i + 0x100).toString(16).slice(1));
	}

	function unsafeStringify(arr, offset = 0) {
	  // Note: Be careful editing this code!  It's been tuned for performance
	  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
	  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
	}

	const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
	var native = {
	  randomUUID
	};

	function v4(options, buf, offset) {
	  if (native.randomUUID && !buf && !options) {
	    return native.randomUUID();
	  }

	  options = options || {};
	  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

	  rnds[6] = rnds[6] & 0x0f | 0x40;
	  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

	  if (buf) {
	    offset = offset || 0;

	    for (let i = 0; i < 16; ++i) {
	      buf[offset + i] = rnds[i];
	    }

	    return buf;
	  }

	  return unsafeStringify(rnds);
	}

	var DataContext = reactExports.createContext({});
	var EChatDifficultyLevel;
	(function (EChatDifficultyLevel) {
	    EChatDifficultyLevel["CREATIVE"] = "CREATIVE";
	    EChatDifficultyLevel["BALANCED"] = "BALANCED";
	    EChatDifficultyLevel["PRECISE"] = "PRECISE";
	})(EChatDifficultyLevel || (EChatDifficultyLevel = {}));
	var EPopupItem;
	(function (EPopupItem) {
	    EPopupItem["SETTINGS"] = "SETTINGS";
	    EPopupItem["FILTERS"] = "FILTERS";
	    EPopupItem["BOT_INFO"] = "BOT_INFO";
	    EPopupItem["NONE"] = "NONE";
	})(EPopupItem || (EPopupItem = {}));
	var ERoute;
	(function (ERoute) {
	    ERoute["INTRO"] = "INTRO";
	    ERoute["MAIN"] = "MAIN";
	    ERoute["TALK_TO_HUMAN"] = "TALK_TO_HUMAN";
	})(ERoute || (ERoute = {}));
	var EChatLanguage;
	(function (EChatLanguage) {
	    EChatLanguage["EN"] = "EN";
	    EChatLanguage["DE"] = "DE";
	})(EChatLanguage || (EChatLanguage = {}));
	var AVAILABLE_FONTS = ["inter", "roboto", "poppins"];
	var getFont = function (font) {
	    if (AVAILABLE_FONTS.includes(font === null || font === void 0 ? void 0 : font.toLowerCase()))
	        return font;
	    return "inter";
	};
	var defaultClientConfig = {
	    objectId: "9eika1dfYl",
	    userId: "ugg86oBVOk",
	    universityId: "ugg86oBVOk",
	    chatbotName: "What 2 Study",
	    language: "DE",
	    randomQuestionEnabled: true,
	    randomQuestion: "Unsicher, welche Fragen man mir stellen kann? Ich stehe bei verschiedensten Themen zur Verfügung und versuche zu helfen. Unter anderem kann ich konkrete Informationen zu Studiengängen, Zulassungsvoraussetzungen, Campusleben oder Unterstützungsangeboten geben. Aber auch allgemeine Fragen rundum das Hochschulsystem beantworten. Hier sind einige Beispielfragen, die interessant sein könnten: \n\nWelche Studiengänge bietet die Universität an?\nWie lauten die Zulassungsvoraussetzungen für den Studiengang XYZ?\nKannst du mir mehr über das Campusleben berichten?\nWelche Unterstützungsangebote gibt es für Studierende?\nWie bewerbe ich mich für ein Studium an dieser Universität?",
	    talkToaHumanEnabled: true,
	    talkToaHuman: "Wir freuen uns, dass Sie direkt mit uns in Kontakt treten möchten, gerne können Sie hierzu die angegebenen Optionen nutzen. \n\nBitte beachten Sie unsere Öffnungszeiten und gewähren Sie uns nach Möglichkeit Einblick in Ihren Chatverlauf, damit wir direkt sehen können, um welches Problem es sich handelt. Sollte gerade niemand verfügbar sein können wir uns auch auf Wunsch bei Ihnen melden.",
	    Narrator: "male",
	    accessToken: "",
	    chatbotBubbleIcons: "https://i.ibb.co/w007JNQ/default-bubble-icon.png",
	    chatbotProfileImage: "https://i.ibb.co/xSJZqy2/default-profile-icon.png",
	    defaultSettings: {
	        chatbotLanguage: "English",
	        audioNarration: true,
	        narrator: "John",
	    },
	    chatboxBehaviour: {
	        formality: 0,
	        opinion: 0,
	        emotion: 0,
	        length: 0,
	        topics: 0,
	        tone: 0,
	        chatbotBehaviourName: "",
	    },
	    chatbotReplies: {
	        randomQuestions: true,
	        showRandomQuestionsMessage: "",
	    },
	    chatbotContact: {
	        talkToHuman: true,
	        showTalkToHumanMessage: "Connecting to a human...",
	    },
	    chatbotLook: {
	        chatbotHeader: {
	            chatbotHeaderBackgroundColor: "#0c8de9",
	            chatbotHeaderIconFontColor: "#ffffff",
	        },
	        chatbotBackground: {
	            chatbotBackgroundColor: "#ffffff",
	        },
	        textBoxUser: {
	            textBoxUserColor: "#0c8de9",
	            textBoxUserFontColor: "#ffffff",
	            textBoxFontStyle: "inter",
	        },
	        textBoxChatbotReply: {
	            textBoxChatbotReplyColor: "#e0e0e0",
	            textBoxChatbotReplyFontColor: "#000000",
	            textBoxChatboxReplyFontStyle: "inter",
	        },
	        UIGroupA: {
	            UIGroupAUIBackground: "rgb(100, 100, 100)",
	            UIGroupAUIHighlight: "rgb(200, 200, 200)",
	        },
	        UIGroupB: {
	            UIGroupBUIBackground: "rgb(50, 50, 50)",
	            UIGroupBUIHighlight: "rgb(150, 150, 150)",
	        },
	        chatbotLookName: "",
	    },
	};
	var doesImageExists = function (url) { return __awaiter(void 0, void 0, void 0, function () {
	    return __generator(this, function (_a) {
	        if (url.length > 1) {
	            return [2 /*return*/, true];
	        }
	        else {
	            return [2 /*return*/, false];
	        }
	    });
	}); };
	var DataProvider = function (props) {
	    var children = props.children;
	    var _a = reactExports.useState(false), isChatOpen = _a[0], setIsChatOpen = _a[1]; // COMMITODO: false
	    var _b = reactExports.useState(false), isMobileScreen = _b[0], setIsMobileScreen = _b[1];
	    var _c = reactExports.useState(""), sessionId = _c[0], setSessionId = _c[1];
	    var _d = reactExports.useState(EThemes.LIGHT_THEME_1), currentTheme = _d[0], setCurrentTheme = _d[1];
	    var _e = reactExports.useState(EPopupItem.NONE), popupItem = _e[0], setPopupItem = _e[1];
	    var _f = reactExports.useState(true), isBotVolumeOn = _f[0], setIsBotVolumeOn = _f[1];
	    var _g = reactExports.useState(ERoute.INTRO), currentRoute = _g[0], setCurrentRoute = _g[1]; // COMMITODO .MAIN (TD INTRO)
	    var _h = reactExports.useState({
	        tone: 0.1,
	        sentiment: 1,
	        emotiveness: 0.7,
	        length: 0.4,
	    }), chatFilters = _h[0], setChatFilters = _h[1];
	    var _j = reactExports.useState(EChatLanguage.EN), language = _j[0], setLanguage = _j[1];
	    var _k = reactExports.useState(), clientConfig = _k[0], setClientConfig = _k[1]; // config saved by the university in main app
	    var _l = reactExports.useState(false), isClientConfigFetched = _l[0], setIsClientConfigFetched = _l[1];
	    var generateNewSession = function (showIntroScreen) {
	        if (showIntroScreen === void 0) { showIntroScreen = true; }
	        var newSessionId = v4();
	        localStorage.setItem(LOCALSTORAGE_SESSION_ID_KEY, newSessionId);
	        setSessionId(newSessionId);
	        setCurrentRoute(showIntroScreen ? ERoute.INTRO : ERoute.MAIN);
	    };
	    var createOrRehydrateSession = function () { return __awaiter(void 0, void 0, void 0, function () {
	        var existingSessionId, isSessionValid;
	        var _a;
	        return __generator(this, function (_b) {
	            existingSessionId = (_a = localStorage.getItem(LOCALSTORAGE_SESSION_ID_KEY)) === null || _a === void 0 ? void 0 : _a.trim();
	            if (!existingSessionId) {
	                generateNewSession(true);
	                return [2 /*return*/];
	            }
	            isSessionValid = true;
	            if (isSessionValid) {
	                setSessionId(existingSessionId);
	                return [2 /*return*/];
	            }
	            generateNewSession(false);
	            return [2 /*return*/];
	        });
	    }); };
	    var saveClientConfigurations = function (data) {
	        if (data === void 0) { data = {}; }
	        return __awaiter(void 0, void 0, void 0, function () {
	            var objectId, chatbotId, userId, universityId, accessToken, chatbotName, chatbotBubbleIcons, chatbotProfileImage, defaultSettings, chatboxBehaviour, chatbotReplies, chatbotContact, language, randomQuestionEnabled, randomQuestion, talkToaHumanEnabled, talkToaHuman, Narrator, _a, chatbotLook, _b, dChatbotHeader, dChatbotBackground, dTextBoxUser, dTextBoxChatbotReply, dUIGroupA, dUIGroupB, dChatbotLookName, chatbotHeader, chatbotBackground, textBoxUser, textBoxChatbotReply, UIGroupA, UIGroupB, chatbotLookName, config, _c, _d;
	            var _e;
	            return __generator(this, function (_f) {
	                switch (_f.label) {
	                    case 0:
	                        objectId = data.objectId, chatbotId = data.chatbotId, userId = data.userId, universityId = data.universityId, accessToken = data.accessToken, chatbotName = data.chatbotName, chatbotBubbleIcons = data.chatbotBubbleIcons, chatbotProfileImage = data.chatbotProfileImage, defaultSettings = data.defaultSettings, chatboxBehaviour = data.chatboxBehaviour, chatbotReplies = data.chatbotReplies, chatbotContact = data.chatbotContact, language = data.language, randomQuestionEnabled = data.randomQuestionEnabled, randomQuestion = data.randomQuestion, talkToaHumanEnabled = data.talkToaHumanEnabled, talkToaHuman = data.talkToaHuman, Narrator = data.Narrator, _a = data.chatbotLook, chatbotLook = _a === void 0 ? {} : _a;
	                        _b = defaultClientConfig.chatbotLook, dChatbotHeader = _b.chatbotHeader, dChatbotBackground = _b.chatbotBackground, dTextBoxUser = _b.textBoxUser, dTextBoxChatbotReply = _b.textBoxChatbotReply, dUIGroupA = _b.UIGroupA, dUIGroupB = _b.UIGroupB, dChatbotLookName = _b.chatbotLookName;
	                        chatbotHeader = chatbotLook.chatbotHeader, chatbotBackground = chatbotLook.chatbotBackground, textBoxUser = chatbotLook.textBoxUser, textBoxChatbotReply = chatbotLook.textBoxChatbotReply, UIGroupA = chatbotLook.UIGroupA, UIGroupB = chatbotLook.UIGroupB, chatbotLookName = chatbotLook.chatbotLookName;
	                        _e = {
	                            objectId: objectId || defaultClientConfig.objectId,
	                            chatbotId: chatbotId || defaultClientConfig.chatbotId,
	                            userId: userId || defaultClientConfig.userId,
	                            accessToken: accessToken || defaultClientConfig.accessToken,
	                            universityId: universityId || defaultClientConfig.universityId,
	                            chatbotName: chatbotName || defaultClientConfig.chatbotName,
	                            language: language || defaultClientConfig.language,
	                            randomQuestionEnabled: randomQuestionEnabled || defaultClientConfig.randomQuestionEnabled,
	                            randomQuestion: randomQuestion || defaultClientConfig.randomQuestion,
	                            talkToaHumanEnabled: talkToaHumanEnabled || defaultClientConfig.talkToaHumanEnabled,
	                            talkToaHuman: talkToaHuman || defaultClientConfig.talkToaHuman,
	                            Narrator: Narrator || defaultClientConfig.Narrator
	                        };
	                        if (!(typeof chatbotBubbleIcons == "string")) return [3 /*break*/, 2];
	                        return [4 /*yield*/, doesImageExists(chatbotBubbleIcons)];
	                    case 1:
	                        _c = (_f.sent())
	                            ? chatbotBubbleIcons
	                            : defaultClientConfig.chatbotBubbleIcons;
	                        return [3 /*break*/, 3];
	                    case 2:
	                        _c = defaultClientConfig.chatbotBubbleIcons;
	                        _f.label = 3;
	                    case 3:
	                        _e.chatbotBubbleIcons = _c;
	                        if (!(typeof chatbotProfileImage == "string")) return [3 /*break*/, 5];
	                        return [4 /*yield*/, doesImageExists(chatbotProfileImage)];
	                    case 4:
	                        _d = (_f.sent())
	                            ? chatbotProfileImage
	                            : defaultClientConfig.chatbotProfileImage;
	                        return [3 /*break*/, 6];
	                    case 5:
	                        _d = defaultClientConfig.chatbotProfileImage;
	                        _f.label = 6;
	                    case 6:
	                        config = (_e.chatbotProfileImage = _d,
	                            _e.defaultSettings = {
	                                chatbotLanguage: (defaultSettings === null || defaultSettings === void 0 ? void 0 : defaultSettings.chatbotLanguage) ||
	                                    defaultClientConfig.defaultSettings.chatbotLanguage,
	                                audioNarration: (defaultSettings === null || defaultSettings === void 0 ? void 0 : defaultSettings.audioNarration) ||
	                                    defaultClientConfig.defaultSettings.audioNarration,
	                                narrator: (defaultSettings === null || defaultSettings === void 0 ? void 0 : defaultSettings.narrator) || defaultClientConfig.defaultSettings.narrator,
	                            },
	                            _e.chatboxBehaviour = {
	                                formality: (chatboxBehaviour === null || chatboxBehaviour === void 0 ? void 0 : chatboxBehaviour.formality) || defaultClientConfig.chatboxBehaviour.formality,
	                                opinion: (chatboxBehaviour === null || chatboxBehaviour === void 0 ? void 0 : chatboxBehaviour.opinion) || defaultClientConfig.chatboxBehaviour.opinion,
	                                emotion: (chatboxBehaviour === null || chatboxBehaviour === void 0 ? void 0 : chatboxBehaviour.emotion) || defaultClientConfig.chatboxBehaviour.emotion,
	                                length: (chatboxBehaviour === null || chatboxBehaviour === void 0 ? void 0 : chatboxBehaviour.length) || defaultClientConfig.chatboxBehaviour.length,
	                                topics: (chatboxBehaviour === null || chatboxBehaviour === void 0 ? void 0 : chatboxBehaviour.topics) || defaultClientConfig.chatboxBehaviour.topics,
	                                tone: (chatboxBehaviour === null || chatboxBehaviour === void 0 ? void 0 : chatboxBehaviour.tone) || defaultClientConfig.chatboxBehaviour.tone,
	                                chatbotBehaviourName: (chatboxBehaviour === null || chatboxBehaviour === void 0 ? void 0 : chatboxBehaviour.chatbotBehaviourName) ||
	                                    defaultClientConfig.chatboxBehaviour.chatbotBehaviourName,
	                            },
	                            _e.chatbotReplies = {
	                                randomQuestions: (chatbotReplies === null || chatbotReplies === void 0 ? void 0 : chatbotReplies.randomQuestions) ||
	                                    defaultClientConfig.chatbotReplies.randomQuestions,
	                                showRandomQuestionsMessage: (chatbotReplies === null || chatbotReplies === void 0 ? void 0 : chatbotReplies.showRandomQuestionsMessage) ||
	                                    defaultClientConfig.chatbotReplies.showRandomQuestionsMessage,
	                            },
	                            _e.chatbotContact = {
	                                talkToHuman: (chatbotContact === null || chatbotContact === void 0 ? void 0 : chatbotContact.talkToHuman) || defaultClientConfig.chatbotContact.talkToHuman,
	                                showTalkToHumanMessage: (chatbotContact === null || chatbotContact === void 0 ? void 0 : chatbotContact.showTalkToHumanMessage) ||
	                                    defaultClientConfig.chatbotContact.showTalkToHumanMessage,
	                            },
	                            _e.chatbotLook = {
	                                chatbotHeader: {
	                                    chatbotHeaderBackgroundColor: (chatbotHeader === null || chatbotHeader === void 0 ? void 0 : chatbotHeader.chatbotHeaderBackgroundColor) ||
	                                        dChatbotHeader.chatbotHeaderBackgroundColor,
	                                    chatbotHeaderIconFontColor: (chatbotHeader === null || chatbotHeader === void 0 ? void 0 : chatbotHeader.chatbotHeaderIconFontColor) ||
	                                        dChatbotHeader.chatbotHeaderIconFontColor,
	                                },
	                                chatbotBackground: {
	                                    chatbotBackgroundColor: (chatbotBackground === null || chatbotBackground === void 0 ? void 0 : chatbotBackground.chatbotBackgroundColor) ||
	                                        (dChatbotBackground === null || dChatbotBackground === void 0 ? void 0 : dChatbotBackground.chatbotBackgroundColor),
	                                },
	                                textBoxUser: {
	                                    textBoxUserColor: (textBoxUser === null || textBoxUser === void 0 ? void 0 : textBoxUser.textBoxUserColor) || dTextBoxUser.textBoxUserColor,
	                                    textBoxUserFontColor: (textBoxUser === null || textBoxUser === void 0 ? void 0 : textBoxUser.textBoxUserFontColor) || dTextBoxUser.textBoxUserFontColor,
	                                    textBoxFontStyle: getFont((textBoxUser === null || textBoxUser === void 0 ? void 0 : textBoxUser.textBoxFontStyle) || dTextBoxUser.textBoxFontStyle),
	                                },
	                                textBoxChatbotReply: {
	                                    textBoxChatbotReplyColor: (textBoxChatbotReply === null || textBoxChatbotReply === void 0 ? void 0 : textBoxChatbotReply.textBoxChatbotReplyColor) ||
	                                        dTextBoxChatbotReply.textBoxChatbotReplyColor,
	                                    textBoxChatbotReplyFontColor: (textBoxChatbotReply === null || textBoxChatbotReply === void 0 ? void 0 : textBoxChatbotReply.textBoxChatbotReplyFontColor) ||
	                                        dTextBoxChatbotReply.textBoxChatbotReplyFontColor,
	                                    textBoxChatboxReplyFontStyle: getFont((textBoxChatbotReply === null || textBoxChatbotReply === void 0 ? void 0 : textBoxChatbotReply.textBoxChatboxReplyFontStyle) ||
	                                        dTextBoxChatbotReply.textBoxChatboxReplyFontStyle),
	                                },
	                                UIGroupA: {
	                                    UIGroupAUIBackground: (UIGroupA === null || UIGroupA === void 0 ? void 0 : UIGroupA.UIGroupAUIBackground) || dUIGroupA.UIGroupAUIBackground,
	                                    UIGroupAUIHighlight: (UIGroupA === null || UIGroupA === void 0 ? void 0 : UIGroupA.UIGroupAUIHighlight) || dUIGroupA.UIGroupAUIHighlight,
	                                },
	                                UIGroupB: {
	                                    UIGroupBUIBackground: (UIGroupB === null || UIGroupB === void 0 ? void 0 : UIGroupB.UIGroupBUIBackground) || dUIGroupB.UIGroupBUIBackground,
	                                    UIGroupBUIHighlight: (UIGroupB === null || UIGroupB === void 0 ? void 0 : UIGroupB.UIGroupBUIHighlight) || dUIGroupB.UIGroupBUIHighlight,
	                                },
	                                chatbotLookName: chatbotLookName || dChatbotLookName,
	                            },
	                            _e);
	                        setClientConfig(config);
	                        setIsClientConfigFetched(true);
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    var providerValue = {
	        sessionId: sessionId,
	        setSessionId: setSessionId,
	        isChatOpen: isChatOpen,
	        setIsChatOpen: setIsChatOpen,
	        isMobileScreen: isMobileScreen,
	        setIsMobileScreen: setIsMobileScreen,
	        currentTheme: currentTheme,
	        setCurrentTheme: setCurrentTheme,
	        popupItem: popupItem,
	        setPopupItem: setPopupItem,
	        isBotVolumeOn: isBotVolumeOn,
	        setIsBotVolumeOn: setIsBotVolumeOn,
	        currentRoute: currentRoute,
	        setCurrentRoute: setCurrentRoute,
	        chatFilters: chatFilters,
	        setChatFilters: setChatFilters,
	        language: language,
	        setLanguage: setLanguage,
	        clientConfig: clientConfig !== null && clientConfig !== void 0 ? clientConfig : defaultClientConfig,
	        isClientConfigFetched: isClientConfigFetched,
	        saveClientConfigurations: saveClientConfigurations,
	    };
	    // On chat client init
	    reactExports.useEffect(function () {
	        createOrRehydrateSession();
	    }, []);
	    return jsxRuntimeExports.jsx(DataContext.Provider, __assign$1({ value: providerValue }, { children: children }));
	};
	var useData = function () { return reactExports.useContext(DataContext); };

	var lodash = {exports: {}};

	/**
	 * @license
	 * Lodash <https://lodash.com/>
	 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	lodash.exports;

	(function (module, exports) {
	(function() {

		  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
		  var undefined$1;

		  /** Used as the semantic version number. */
		  var VERSION = '4.17.21';

		  /** Used as the size to enable large array optimizations. */
		  var LARGE_ARRAY_SIZE = 200;

		  /** Error message constants. */
		  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
		      FUNC_ERROR_TEXT = 'Expected a function',
		      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

		  /** Used to stand-in for `undefined` hash values. */
		  var HASH_UNDEFINED = '__lodash_hash_undefined__';

		  /** Used as the maximum memoize cache size. */
		  var MAX_MEMOIZE_SIZE = 500;

		  /** Used as the internal argument placeholder. */
		  var PLACEHOLDER = '__lodash_placeholder__';

		  /** Used to compose bitmasks for cloning. */
		  var CLONE_DEEP_FLAG = 1,
		      CLONE_FLAT_FLAG = 2,
		      CLONE_SYMBOLS_FLAG = 4;

		  /** Used to compose bitmasks for value comparisons. */
		  var COMPARE_PARTIAL_FLAG = 1,
		      COMPARE_UNORDERED_FLAG = 2;

		  /** Used to compose bitmasks for function metadata. */
		  var WRAP_BIND_FLAG = 1,
		      WRAP_BIND_KEY_FLAG = 2,
		      WRAP_CURRY_BOUND_FLAG = 4,
		      WRAP_CURRY_FLAG = 8,
		      WRAP_CURRY_RIGHT_FLAG = 16,
		      WRAP_PARTIAL_FLAG = 32,
		      WRAP_PARTIAL_RIGHT_FLAG = 64,
		      WRAP_ARY_FLAG = 128,
		      WRAP_REARG_FLAG = 256,
		      WRAP_FLIP_FLAG = 512;

		  /** Used as default options for `_.truncate`. */
		  var DEFAULT_TRUNC_LENGTH = 30,
		      DEFAULT_TRUNC_OMISSION = '...';

		  /** Used to detect hot functions by number of calls within a span of milliseconds. */
		  var HOT_COUNT = 800,
		      HOT_SPAN = 16;

		  /** Used to indicate the type of lazy iteratees. */
		  var LAZY_FILTER_FLAG = 1,
		      LAZY_MAP_FLAG = 2,
		      LAZY_WHILE_FLAG = 3;

		  /** Used as references for various `Number` constants. */
		  var INFINITY = 1 / 0,
		      MAX_SAFE_INTEGER = 9007199254740991,
		      MAX_INTEGER = 1.7976931348623157e+308,
		      NAN = 0 / 0;

		  /** Used as references for the maximum length and index of an array. */
		  var MAX_ARRAY_LENGTH = 4294967295,
		      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
		      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

		  /** Used to associate wrap methods with their bit flags. */
		  var wrapFlags = [
		    ['ary', WRAP_ARY_FLAG],
		    ['bind', WRAP_BIND_FLAG],
		    ['bindKey', WRAP_BIND_KEY_FLAG],
		    ['curry', WRAP_CURRY_FLAG],
		    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
		    ['flip', WRAP_FLIP_FLAG],
		    ['partial', WRAP_PARTIAL_FLAG],
		    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
		    ['rearg', WRAP_REARG_FLAG]
		  ];

		  /** `Object#toString` result references. */
		  var argsTag = '[object Arguments]',
		      arrayTag = '[object Array]',
		      asyncTag = '[object AsyncFunction]',
		      boolTag = '[object Boolean]',
		      dateTag = '[object Date]',
		      domExcTag = '[object DOMException]',
		      errorTag = '[object Error]',
		      funcTag = '[object Function]',
		      genTag = '[object GeneratorFunction]',
		      mapTag = '[object Map]',
		      numberTag = '[object Number]',
		      nullTag = '[object Null]',
		      objectTag = '[object Object]',
		      promiseTag = '[object Promise]',
		      proxyTag = '[object Proxy]',
		      regexpTag = '[object RegExp]',
		      setTag = '[object Set]',
		      stringTag = '[object String]',
		      symbolTag = '[object Symbol]',
		      undefinedTag = '[object Undefined]',
		      weakMapTag = '[object WeakMap]',
		      weakSetTag = '[object WeakSet]';

		  var arrayBufferTag = '[object ArrayBuffer]',
		      dataViewTag = '[object DataView]',
		      float32Tag = '[object Float32Array]',
		      float64Tag = '[object Float64Array]',
		      int8Tag = '[object Int8Array]',
		      int16Tag = '[object Int16Array]',
		      int32Tag = '[object Int32Array]',
		      uint8Tag = '[object Uint8Array]',
		      uint8ClampedTag = '[object Uint8ClampedArray]',
		      uint16Tag = '[object Uint16Array]',
		      uint32Tag = '[object Uint32Array]';

		  /** Used to match empty string literals in compiled template source. */
		  var reEmptyStringLeading = /\b__p \+= '';/g,
		      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
		      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

		  /** Used to match HTML entities and HTML characters. */
		  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
		      reUnescapedHtml = /[&<>"']/g,
		      reHasEscapedHtml = RegExp(reEscapedHtml.source),
		      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

		  /** Used to match template delimiters. */
		  var reEscape = /<%-([\s\S]+?)%>/g,
		      reEvaluate = /<%([\s\S]+?)%>/g,
		      reInterpolate = /<%=([\s\S]+?)%>/g;

		  /** Used to match property names within property paths. */
		  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
		      reIsPlainProp = /^\w*$/,
		      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

		  /**
		   * Used to match `RegExp`
		   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
		   */
		  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
		      reHasRegExpChar = RegExp(reRegExpChar.source);

		  /** Used to match leading whitespace. */
		  var reTrimStart = /^\s+/;

		  /** Used to match a single whitespace character. */
		  var reWhitespace = /\s/;

		  /** Used to match wrap detail comments. */
		  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
		      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
		      reSplitDetails = /,? & /;

		  /** Used to match words composed of alphanumeric characters. */
		  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

		  /**
		   * Used to validate the `validate` option in `_.template` variable.
		   *
		   * Forbids characters which could potentially change the meaning of the function argument definition:
		   * - "()," (modification of function parameters)
		   * - "=" (default value)
		   * - "[]{}" (destructuring of function parameters)
		   * - "/" (beginning of a comment)
		   * - whitespace
		   */
		  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

		  /** Used to match backslashes in property paths. */
		  var reEscapeChar = /\\(\\)?/g;

		  /**
		   * Used to match
		   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
		   */
		  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

		  /** Used to match `RegExp` flags from their coerced string values. */
		  var reFlags = /\w*$/;

		  /** Used to detect bad signed hexadecimal string values. */
		  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

		  /** Used to detect binary string values. */
		  var reIsBinary = /^0b[01]+$/i;

		  /** Used to detect host constructors (Safari). */
		  var reIsHostCtor = /^\[object .+?Constructor\]$/;

		  /** Used to detect octal string values. */
		  var reIsOctal = /^0o[0-7]+$/i;

		  /** Used to detect unsigned integer values. */
		  var reIsUint = /^(?:0|[1-9]\d*)$/;

		  /** Used to match Latin Unicode letters (excluding mathematical operators). */
		  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

		  /** Used to ensure capturing order of template delimiters. */
		  var reNoMatch = /($^)/;

		  /** Used to match unescaped characters in compiled string literals. */
		  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

		  /** Used to compose unicode character classes. */
		  var rsAstralRange = '\\ud800-\\udfff',
		      rsComboMarksRange = '\\u0300-\\u036f',
		      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
		      rsComboSymbolsRange = '\\u20d0-\\u20ff',
		      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
		      rsDingbatRange = '\\u2700-\\u27bf',
		      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
		      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
		      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
		      rsPunctuationRange = '\\u2000-\\u206f',
		      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
		      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
		      rsVarRange = '\\ufe0e\\ufe0f',
		      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

		  /** Used to compose unicode capture groups. */
		  var rsApos = "['\u2019]",
		      rsAstral = '[' + rsAstralRange + ']',
		      rsBreak = '[' + rsBreakRange + ']',
		      rsCombo = '[' + rsComboRange + ']',
		      rsDigits = '\\d+',
		      rsDingbat = '[' + rsDingbatRange + ']',
		      rsLower = '[' + rsLowerRange + ']',
		      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
		      rsFitz = '\\ud83c[\\udffb-\\udfff]',
		      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
		      rsNonAstral = '[^' + rsAstralRange + ']',
		      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
		      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
		      rsUpper = '[' + rsUpperRange + ']',
		      rsZWJ = '\\u200d';

		  /** Used to compose unicode regexes. */
		  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
		      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
		      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
		      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
		      reOptMod = rsModifier + '?',
		      rsOptVar = '[' + rsVarRange + ']?',
		      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
		      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
		      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
		      rsSeq = rsOptVar + reOptMod + rsOptJoin,
		      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
		      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

		  /** Used to match apostrophes. */
		  var reApos = RegExp(rsApos, 'g');

		  /**
		   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
		   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
		   */
		  var reComboMark = RegExp(rsCombo, 'g');

		  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
		  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

		  /** Used to match complex or compound words. */
		  var reUnicodeWord = RegExp([
		    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
		    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
		    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
		    rsUpper + '+' + rsOptContrUpper,
		    rsOrdUpper,
		    rsOrdLower,
		    rsDigits,
		    rsEmoji
		  ].join('|'), 'g');

		  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
		  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

		  /** Used to detect strings that need a more robust regexp to match words. */
		  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

		  /** Used to assign default `context` object properties. */
		  var contextProps = [
		    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
		    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
		    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
		    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
		    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
		  ];

		  /** Used to make template sourceURLs easier to identify. */
		  var templateCounter = -1;

		  /** Used to identify `toStringTag` values of typed arrays. */
		  var typedArrayTags = {};
		  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
		  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
		  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
		  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
		  typedArrayTags[uint32Tag] = true;
		  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
		  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
		  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
		  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
		  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
		  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
		  typedArrayTags[setTag] = typedArrayTags[stringTag] =
		  typedArrayTags[weakMapTag] = false;

		  /** Used to identify `toStringTag` values supported by `_.clone`. */
		  var cloneableTags = {};
		  cloneableTags[argsTag] = cloneableTags[arrayTag] =
		  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
		  cloneableTags[boolTag] = cloneableTags[dateTag] =
		  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
		  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
		  cloneableTags[int32Tag] = cloneableTags[mapTag] =
		  cloneableTags[numberTag] = cloneableTags[objectTag] =
		  cloneableTags[regexpTag] = cloneableTags[setTag] =
		  cloneableTags[stringTag] = cloneableTags[symbolTag] =
		  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
		  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
		  cloneableTags[errorTag] = cloneableTags[funcTag] =
		  cloneableTags[weakMapTag] = false;

		  /** Used to map Latin Unicode letters to basic Latin letters. */
		  var deburredLetters = {
		    // Latin-1 Supplement block.
		    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
		    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
		    '\xc7': 'C',  '\xe7': 'c',
		    '\xd0': 'D',  '\xf0': 'd',
		    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
		    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
		    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
		    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
		    '\xd1': 'N',  '\xf1': 'n',
		    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
		    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
		    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
		    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
		    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
		    '\xc6': 'Ae', '\xe6': 'ae',
		    '\xde': 'Th', '\xfe': 'th',
		    '\xdf': 'ss',
		    // Latin Extended-A block.
		    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
		    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
		    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
		    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
		    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
		    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
		    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
		    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
		    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
		    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
		    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
		    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
		    '\u0134': 'J',  '\u0135': 'j',
		    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
		    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
		    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
		    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
		    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
		    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
		    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
		    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
		    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
		    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
		    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
		    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
		    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
		    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
		    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
		    '\u0174': 'W',  '\u0175': 'w',
		    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
		    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
		    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
		    '\u0132': 'IJ', '\u0133': 'ij',
		    '\u0152': 'Oe', '\u0153': 'oe',
		    '\u0149': "'n", '\u017f': 's'
		  };

		  /** Used to map characters to HTML entities. */
		  var htmlEscapes = {
		    '&': '&amp;',
		    '<': '&lt;',
		    '>': '&gt;',
		    '"': '&quot;',
		    "'": '&#39;'
		  };

		  /** Used to map HTML entities to characters. */
		  var htmlUnescapes = {
		    '&amp;': '&',
		    '&lt;': '<',
		    '&gt;': '>',
		    '&quot;': '"',
		    '&#39;': "'"
		  };

		  /** Used to escape characters for inclusion in compiled string literals. */
		  var stringEscapes = {
		    '\\': '\\',
		    "'": "'",
		    '\n': 'n',
		    '\r': 'r',
		    '\u2028': 'u2028',
		    '\u2029': 'u2029'
		  };

		  /** Built-in method references without a dependency on `root`. */
		  var freeParseFloat = parseFloat,
		      freeParseInt = parseInt;

		  /** Detect free variable `global` from Node.js. */
		  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

		  /** Detect free variable `self`. */
		  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

		  /** Used as a reference to the global object. */
		  var root = freeGlobal || freeSelf || Function('return this')();

		  /** Detect free variable `exports`. */
		  var freeExports = exports && !exports.nodeType && exports;

		  /** Detect free variable `module`. */
		  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

		  /** Detect the popular CommonJS extension `module.exports`. */
		  var moduleExports = freeModule && freeModule.exports === freeExports;

		  /** Detect free variable `process` from Node.js. */
		  var freeProcess = moduleExports && freeGlobal.process;

		  /** Used to access faster Node.js helpers. */
		  var nodeUtil = (function() {
		    try {
		      // Use `util.types` for Node.js 10+.
		      var types = freeModule && freeModule.require && freeModule.require('util').types;

		      if (types) {
		        return types;
		      }

		      // Legacy `process.binding('util')` for Node.js < 10.
		      return freeProcess && freeProcess.binding && freeProcess.binding('util');
		    } catch (e) {}
		  }());

		  /* Node.js helper references. */
		  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
		      nodeIsDate = nodeUtil && nodeUtil.isDate,
		      nodeIsMap = nodeUtil && nodeUtil.isMap,
		      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
		      nodeIsSet = nodeUtil && nodeUtil.isSet,
		      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

		  /*--------------------------------------------------------------------------*/

		  /**
		   * A faster alternative to `Function#apply`, this function invokes `func`
		   * with the `this` binding of `thisArg` and the arguments of `args`.
		   *
		   * @private
		   * @param {Function} func The function to invoke.
		   * @param {*} thisArg The `this` binding of `func`.
		   * @param {Array} args The arguments to invoke `func` with.
		   * @returns {*} Returns the result of `func`.
		   */
		  function apply(func, thisArg, args) {
		    switch (args.length) {
		      case 0: return func.call(thisArg);
		      case 1: return func.call(thisArg, args[0]);
		      case 2: return func.call(thisArg, args[0], args[1]);
		      case 3: return func.call(thisArg, args[0], args[1], args[2]);
		    }
		    return func.apply(thisArg, args);
		  }

		  /**
		   * A specialized version of `baseAggregator` for arrays.
		   *
		   * @private
		   * @param {Array} [array] The array to iterate over.
		   * @param {Function} setter The function to set `accumulator` values.
		   * @param {Function} iteratee The iteratee to transform keys.
		   * @param {Object} accumulator The initial aggregated object.
		   * @returns {Function} Returns `accumulator`.
		   */
		  function arrayAggregator(array, setter, iteratee, accumulator) {
		    var index = -1,
		        length = array == null ? 0 : array.length;

		    while (++index < length) {
		      var value = array[index];
		      setter(accumulator, value, iteratee(value), array);
		    }
		    return accumulator;
		  }

		  /**
		   * A specialized version of `_.forEach` for arrays without support for
		   * iteratee shorthands.
		   *
		   * @private
		   * @param {Array} [array] The array to iterate over.
		   * @param {Function} iteratee The function invoked per iteration.
		   * @returns {Array} Returns `array`.
		   */
		  function arrayEach(array, iteratee) {
		    var index = -1,
		        length = array == null ? 0 : array.length;

		    while (++index < length) {
		      if (iteratee(array[index], index, array) === false) {
		        break;
		      }
		    }
		    return array;
		  }

		  /**
		   * A specialized version of `_.forEachRight` for arrays without support for
		   * iteratee shorthands.
		   *
		   * @private
		   * @param {Array} [array] The array to iterate over.
		   * @param {Function} iteratee The function invoked per iteration.
		   * @returns {Array} Returns `array`.
		   */
		  function arrayEachRight(array, iteratee) {
		    var length = array == null ? 0 : array.length;

		    while (length--) {
		      if (iteratee(array[length], length, array) === false) {
		        break;
		      }
		    }
		    return array;
		  }

		  /**
		   * A specialized version of `_.every` for arrays without support for
		   * iteratee shorthands.
		   *
		   * @private
		   * @param {Array} [array] The array to iterate over.
		   * @param {Function} predicate The function invoked per iteration.
		   * @returns {boolean} Returns `true` if all elements pass the predicate check,
		   *  else `false`.
		   */
		  function arrayEvery(array, predicate) {
		    var index = -1,
		        length = array == null ? 0 : array.length;

		    while (++index < length) {
		      if (!predicate(array[index], index, array)) {
		        return false;
		      }
		    }
		    return true;
		  }

		  /**
		   * A specialized version of `_.filter` for arrays without support for
		   * iteratee shorthands.
		   *
		   * @private
		   * @param {Array} [array] The array to iterate over.
		   * @param {Function} predicate The function invoked per iteration.
		   * @returns {Array} Returns the new filtered array.
		   */
		  function arrayFilter(array, predicate) {
		    var index = -1,
		        length = array == null ? 0 : array.length,
		        resIndex = 0,
		        result = [];

		    while (++index < length) {
		      var value = array[index];
		      if (predicate(value, index, array)) {
		        result[resIndex++] = value;
		      }
		    }
		    return result;
		  }

		  /**
		   * A specialized version of `_.includes` for arrays without support for
		   * specifying an index to search from.
		   *
		   * @private
		   * @param {Array} [array] The array to inspect.
		   * @param {*} target The value to search for.
		   * @returns {boolean} Returns `true` if `target` is found, else `false`.
		   */
		  function arrayIncludes(array, value) {
		    var length = array == null ? 0 : array.length;
		    return !!length && baseIndexOf(array, value, 0) > -1;
		  }

		  /**
		   * This function is like `arrayIncludes` except that it accepts a comparator.
		   *
		   * @private
		   * @param {Array} [array] The array to inspect.
		   * @param {*} target The value to search for.
		   * @param {Function} comparator The comparator invoked per element.
		   * @returns {boolean} Returns `true` if `target` is found, else `false`.
		   */
		  function arrayIncludesWith(array, value, comparator) {
		    var index = -1,
		        length = array == null ? 0 : array.length;

		    while (++index < length) {
		      if (comparator(value, array[index])) {
		        return true;
		      }
		    }
		    return false;
		  }

		  /**
		   * A specialized version of `_.map` for arrays without support for iteratee
		   * shorthands.
		   *
		   * @private
		   * @param {Array} [array] The array to iterate over.
		   * @param {Function} iteratee The function invoked per iteration.
		   * @returns {Array} Returns the new mapped array.
		   */
		  function arrayMap(array, iteratee) {
		    var index = -1,
		        length = array == null ? 0 : array.length,
		        result = Array(length);

		    while (++index < length) {
		      result[index] = iteratee(array[index], index, array);
		    }
		    return result;
		  }

		  /**
		   * Appends the elements of `values` to `array`.
		   *
		   * @private
		   * @param {Array} array The array to modify.
		   * @param {Array} values The values to append.
		   * @returns {Array} Returns `array`.
		   */
		  function arrayPush(array, values) {
		    var index = -1,
		        length = values.length,
		        offset = array.length;

		    while (++index < length) {
		      array[offset + index] = values[index];
		    }
		    return array;
		  }

		  /**
		   * A specialized version of `_.reduce` for arrays without support for
		   * iteratee shorthands.
		   *
		   * @private
		   * @param {Array} [array] The array to iterate over.
		   * @param {Function} iteratee The function invoked per iteration.
		   * @param {*} [accumulator] The initial value.
		   * @param {boolean} [initAccum] Specify using the first element of `array` as
		   *  the initial value.
		   * @returns {*} Returns the accumulated value.
		   */
		  function arrayReduce(array, iteratee, accumulator, initAccum) {
		    var index = -1,
		        length = array == null ? 0 : array.length;

		    if (initAccum && length) {
		      accumulator = array[++index];
		    }
		    while (++index < length) {
		      accumulator = iteratee(accumulator, array[index], index, array);
		    }
		    return accumulator;
		  }

		  /**
		   * A specialized version of `_.reduceRight` for arrays without support for
		   * iteratee shorthands.
		   *
		   * @private
		   * @param {Array} [array] The array to iterate over.
		   * @param {Function} iteratee The function invoked per iteration.
		   * @param {*} [accumulator] The initial value.
		   * @param {boolean} [initAccum] Specify using the last element of `array` as
		   *  the initial value.
		   * @returns {*} Returns the accumulated value.
		   */
		  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
		    var length = array == null ? 0 : array.length;
		    if (initAccum && length) {
		      accumulator = array[--length];
		    }
		    while (length--) {
		      accumulator = iteratee(accumulator, array[length], length, array);
		    }
		    return accumulator;
		  }

		  /**
		   * A specialized version of `_.some` for arrays without support for iteratee
		   * shorthands.
		   *
		   * @private
		   * @param {Array} [array] The array to iterate over.
		   * @param {Function} predicate The function invoked per iteration.
		   * @returns {boolean} Returns `true` if any element passes the predicate check,
		   *  else `false`.
		   */
		  function arraySome(array, predicate) {
		    var index = -1,
		        length = array == null ? 0 : array.length;

		    while (++index < length) {
		      if (predicate(array[index], index, array)) {
		        return true;
		      }
		    }
		    return false;
		  }

		  /**
		   * Gets the size of an ASCII `string`.
		   *
		   * @private
		   * @param {string} string The string inspect.
		   * @returns {number} Returns the string size.
		   */
		  var asciiSize = baseProperty('length');

		  /**
		   * Converts an ASCII `string` to an array.
		   *
		   * @private
		   * @param {string} string The string to convert.
		   * @returns {Array} Returns the converted array.
		   */
		  function asciiToArray(string) {
		    return string.split('');
		  }

		  /**
		   * Splits an ASCII `string` into an array of its words.
		   *
		   * @private
		   * @param {string} The string to inspect.
		   * @returns {Array} Returns the words of `string`.
		   */
		  function asciiWords(string) {
		    return string.match(reAsciiWord) || [];
		  }

		  /**
		   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
		   * without support for iteratee shorthands, which iterates over `collection`
		   * using `eachFunc`.
		   *
		   * @private
		   * @param {Array|Object} collection The collection to inspect.
		   * @param {Function} predicate The function invoked per iteration.
		   * @param {Function} eachFunc The function to iterate over `collection`.
		   * @returns {*} Returns the found element or its key, else `undefined`.
		   */
		  function baseFindKey(collection, predicate, eachFunc) {
		    var result;
		    eachFunc(collection, function(value, key, collection) {
		      if (predicate(value, key, collection)) {
		        result = key;
		        return false;
		      }
		    });
		    return result;
		  }

		  /**
		   * The base implementation of `_.findIndex` and `_.findLastIndex` without
		   * support for iteratee shorthands.
		   *
		   * @private
		   * @param {Array} array The array to inspect.
		   * @param {Function} predicate The function invoked per iteration.
		   * @param {number} fromIndex The index to search from.
		   * @param {boolean} [fromRight] Specify iterating from right to left.
		   * @returns {number} Returns the index of the matched value, else `-1`.
		   */
		  function baseFindIndex(array, predicate, fromIndex, fromRight) {
		    var length = array.length,
		        index = fromIndex + (fromRight ? 1 : -1);

		    while ((fromRight ? index-- : ++index < length)) {
		      if (predicate(array[index], index, array)) {
		        return index;
		      }
		    }
		    return -1;
		  }

		  /**
		   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
		   *
		   * @private
		   * @param {Array} array The array to inspect.
		   * @param {*} value The value to search for.
		   * @param {number} fromIndex The index to search from.
		   * @returns {number} Returns the index of the matched value, else `-1`.
		   */
		  function baseIndexOf(array, value, fromIndex) {
		    return value === value
		      ? strictIndexOf(array, value, fromIndex)
		      : baseFindIndex(array, baseIsNaN, fromIndex);
		  }

		  /**
		   * This function is like `baseIndexOf` except that it accepts a comparator.
		   *
		   * @private
		   * @param {Array} array The array to inspect.
		   * @param {*} value The value to search for.
		   * @param {number} fromIndex The index to search from.
		   * @param {Function} comparator The comparator invoked per element.
		   * @returns {number} Returns the index of the matched value, else `-1`.
		   */
		  function baseIndexOfWith(array, value, fromIndex, comparator) {
		    var index = fromIndex - 1,
		        length = array.length;

		    while (++index < length) {
		      if (comparator(array[index], value)) {
		        return index;
		      }
		    }
		    return -1;
		  }

		  /**
		   * The base implementation of `_.isNaN` without support for number objects.
		   *
		   * @private
		   * @param {*} value The value to check.
		   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
		   */
		  function baseIsNaN(value) {
		    return value !== value;
		  }

		  /**
		   * The base implementation of `_.mean` and `_.meanBy` without support for
		   * iteratee shorthands.
		   *
		   * @private
		   * @param {Array} array The array to iterate over.
		   * @param {Function} iteratee The function invoked per iteration.
		   * @returns {number} Returns the mean.
		   */
		  function baseMean(array, iteratee) {
		    var length = array == null ? 0 : array.length;
		    return length ? (baseSum(array, iteratee) / length) : NAN;
		  }

		  /**
		   * The base implementation of `_.property` without support for deep paths.
		   *
		   * @private
		   * @param {string} key The key of the property to get.
		   * @returns {Function} Returns the new accessor function.
		   */
		  function baseProperty(key) {
		    return function(object) {
		      return object == null ? undefined$1 : object[key];
		    };
		  }

		  /**
		   * The base implementation of `_.propertyOf` without support for deep paths.
		   *
		   * @private
		   * @param {Object} object The object to query.
		   * @returns {Function} Returns the new accessor function.
		   */
		  function basePropertyOf(object) {
		    return function(key) {
		      return object == null ? undefined$1 : object[key];
		    };
		  }

		  /**
		   * The base implementation of `_.reduce` and `_.reduceRight`, without support
		   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
		   *
		   * @private
		   * @param {Array|Object} collection The collection to iterate over.
		   * @param {Function} iteratee The function invoked per iteration.
		   * @param {*} accumulator The initial value.
		   * @param {boolean} initAccum Specify using the first or last element of
		   *  `collection` as the initial value.
		   * @param {Function} eachFunc The function to iterate over `collection`.
		   * @returns {*} Returns the accumulated value.
		   */
		  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
		    eachFunc(collection, function(value, index, collection) {
		      accumulator = initAccum
		        ? (initAccum = false, value)
		        : iteratee(accumulator, value, index, collection);
		    });
		    return accumulator;
		  }

		  /**
		   * The base implementation of `_.sortBy` which uses `comparer` to define the
		   * sort order of `array` and replaces criteria objects with their corresponding
		   * values.
		   *
		   * @private
		   * @param {Array} array The array to sort.
		   * @param {Function} comparer The function to define sort order.
		   * @returns {Array} Returns `array`.
		   */
		  function baseSortBy(array, comparer) {
		    var length = array.length;

		    array.sort(comparer);
		    while (length--) {
		      array[length] = array[length].value;
		    }
		    return array;
		  }

		  /**
		   * The base implementation of `_.sum` and `_.sumBy` without support for
		   * iteratee shorthands.
		   *
		   * @private
		   * @param {Array} array The array to iterate over.
		   * @param {Function} iteratee The function invoked per iteration.
		   * @returns {number} Returns the sum.
		   */
		  function baseSum(array, iteratee) {
		    var result,
		        index = -1,
		        length = array.length;

		    while (++index < length) {
		      var current = iteratee(array[index]);
		      if (current !== undefined$1) {
		        result = result === undefined$1 ? current : (result + current);
		      }
		    }
		    return result;
		  }

		  /**
		   * The base implementation of `_.times` without support for iteratee shorthands
		   * or max array length checks.
		   *
		   * @private
		   * @param {number} n The number of times to invoke `iteratee`.
		   * @param {Function} iteratee The function invoked per iteration.
		   * @returns {Array} Returns the array of results.
		   */
		  function baseTimes(n, iteratee) {
		    var index = -1,
		        result = Array(n);

		    while (++index < n) {
		      result[index] = iteratee(index);
		    }
		    return result;
		  }

		  /**
		   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
		   * of key-value pairs for `object` corresponding to the property names of `props`.
		   *
		   * @private
		   * @param {Object} object The object to query.
		   * @param {Array} props The property names to get values for.
		   * @returns {Object} Returns the key-value pairs.
		   */
		  function baseToPairs(object, props) {
		    return arrayMap(props, function(key) {
		      return [key, object[key]];
		    });
		  }

		  /**
		   * The base implementation of `_.trim`.
		   *
		   * @private
		   * @param {string} string The string to trim.
		   * @returns {string} Returns the trimmed string.
		   */
		  function baseTrim(string) {
		    return string
		      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
		      : string;
		  }

		  /**
		   * The base implementation of `_.unary` without support for storing metadata.
		   *
		   * @private
		   * @param {Function} func The function to cap arguments for.
		   * @returns {Function} Returns the new capped function.
		   */
		  function baseUnary(func) {
		    return function(value) {
		      return func(value);
		    };
		  }

		  /**
		   * The base implementation of `_.values` and `_.valuesIn` which creates an
		   * array of `object` property values corresponding to the property names
		   * of `props`.
		   *
		   * @private
		   * @param {Object} object The object to query.
		   * @param {Array} props The property names to get values for.
		   * @returns {Object} Returns the array of property values.
		   */
		  function baseValues(object, props) {
		    return arrayMap(props, function(key) {
		      return object[key];
		    });
		  }

		  /**
		   * Checks if a `cache` value for `key` exists.
		   *
		   * @private
		   * @param {Object} cache The cache to query.
		   * @param {string} key The key of the entry to check.
		   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		   */
		  function cacheHas(cache, key) {
		    return cache.has(key);
		  }

		  /**
		   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
		   * that is not found in the character symbols.
		   *
		   * @private
		   * @param {Array} strSymbols The string symbols to inspect.
		   * @param {Array} chrSymbols The character symbols to find.
		   * @returns {number} Returns the index of the first unmatched string symbol.
		   */
		  function charsStartIndex(strSymbols, chrSymbols) {
		    var index = -1,
		        length = strSymbols.length;

		    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
		    return index;
		  }

		  /**
		   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
		   * that is not found in the character symbols.
		   *
		   * @private
		   * @param {Array} strSymbols The string symbols to inspect.
		   * @param {Array} chrSymbols The character symbols to find.
		   * @returns {number} Returns the index of the last unmatched string symbol.
		   */
		  function charsEndIndex(strSymbols, chrSymbols) {
		    var index = strSymbols.length;

		    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
		    return index;
		  }

		  /**
		   * Gets the number of `placeholder` occurrences in `array`.
		   *
		   * @private
		   * @param {Array} array The array to inspect.
		   * @param {*} placeholder The placeholder to search for.
		   * @returns {number} Returns the placeholder count.
		   */
		  function countHolders(array, placeholder) {
		    var length = array.length,
		        result = 0;

		    while (length--) {
		      if (array[length] === placeholder) {
		        ++result;
		      }
		    }
		    return result;
		  }

		  /**
		   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
		   * letters to basic Latin letters.
		   *
		   * @private
		   * @param {string} letter The matched letter to deburr.
		   * @returns {string} Returns the deburred letter.
		   */
		  var deburrLetter = basePropertyOf(deburredLetters);

		  /**
		   * Used by `_.escape` to convert characters to HTML entities.
		   *
		   * @private
		   * @param {string} chr The matched character to escape.
		   * @returns {string} Returns the escaped character.
		   */
		  var escapeHtmlChar = basePropertyOf(htmlEscapes);

		  /**
		   * Used by `_.template` to escape characters for inclusion in compiled string literals.
		   *
		   * @private
		   * @param {string} chr The matched character to escape.
		   * @returns {string} Returns the escaped character.
		   */
		  function escapeStringChar(chr) {
		    return '\\' + stringEscapes[chr];
		  }

		  /**
		   * Gets the value at `key` of `object`.
		   *
		   * @private
		   * @param {Object} [object] The object to query.
		   * @param {string} key The key of the property to get.
		   * @returns {*} Returns the property value.
		   */
		  function getValue(object, key) {
		    return object == null ? undefined$1 : object[key];
		  }

		  /**
		   * Checks if `string` contains Unicode symbols.
		   *
		   * @private
		   * @param {string} string The string to inspect.
		   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
		   */
		  function hasUnicode(string) {
		    return reHasUnicode.test(string);
		  }

		  /**
		   * Checks if `string` contains a word composed of Unicode symbols.
		   *
		   * @private
		   * @param {string} string The string to inspect.
		   * @returns {boolean} Returns `true` if a word is found, else `false`.
		   */
		  function hasUnicodeWord(string) {
		    return reHasUnicodeWord.test(string);
		  }

		  /**
		   * Converts `iterator` to an array.
		   *
		   * @private
		   * @param {Object} iterator The iterator to convert.
		   * @returns {Array} Returns the converted array.
		   */
		  function iteratorToArray(iterator) {
		    var data,
		        result = [];

		    while (!(data = iterator.next()).done) {
		      result.push(data.value);
		    }
		    return result;
		  }

		  /**
		   * Converts `map` to its key-value pairs.
		   *
		   * @private
		   * @param {Object} map The map to convert.
		   * @returns {Array} Returns the key-value pairs.
		   */
		  function mapToArray(map) {
		    var index = -1,
		        result = Array(map.size);

		    map.forEach(function(value, key) {
		      result[++index] = [key, value];
		    });
		    return result;
		  }

		  /**
		   * Creates a unary function that invokes `func` with its argument transformed.
		   *
		   * @private
		   * @param {Function} func The function to wrap.
		   * @param {Function} transform The argument transform.
		   * @returns {Function} Returns the new function.
		   */
		  function overArg(func, transform) {
		    return function(arg) {
		      return func(transform(arg));
		    };
		  }

		  /**
		   * Replaces all `placeholder` elements in `array` with an internal placeholder
		   * and returns an array of their indexes.
		   *
		   * @private
		   * @param {Array} array The array to modify.
		   * @param {*} placeholder The placeholder to replace.
		   * @returns {Array} Returns the new array of placeholder indexes.
		   */
		  function replaceHolders(array, placeholder) {
		    var index = -1,
		        length = array.length,
		        resIndex = 0,
		        result = [];

		    while (++index < length) {
		      var value = array[index];
		      if (value === placeholder || value === PLACEHOLDER) {
		        array[index] = PLACEHOLDER;
		        result[resIndex++] = index;
		      }
		    }
		    return result;
		  }

		  /**
		   * Converts `set` to an array of its values.
		   *
		   * @private
		   * @param {Object} set The set to convert.
		   * @returns {Array} Returns the values.
		   */
		  function setToArray(set) {
		    var index = -1,
		        result = Array(set.size);

		    set.forEach(function(value) {
		      result[++index] = value;
		    });
		    return result;
		  }

		  /**
		   * Converts `set` to its value-value pairs.
		   *
		   * @private
		   * @param {Object} set The set to convert.
		   * @returns {Array} Returns the value-value pairs.
		   */
		  function setToPairs(set) {
		    var index = -1,
		        result = Array(set.size);

		    set.forEach(function(value) {
		      result[++index] = [value, value];
		    });
		    return result;
		  }

		  /**
		   * A specialized version of `_.indexOf` which performs strict equality
		   * comparisons of values, i.e. `===`.
		   *
		   * @private
		   * @param {Array} array The array to inspect.
		   * @param {*} value The value to search for.
		   * @param {number} fromIndex The index to search from.
		   * @returns {number} Returns the index of the matched value, else `-1`.
		   */
		  function strictIndexOf(array, value, fromIndex) {
		    var index = fromIndex - 1,
		        length = array.length;

		    while (++index < length) {
		      if (array[index] === value) {
		        return index;
		      }
		    }
		    return -1;
		  }

		  /**
		   * A specialized version of `_.lastIndexOf` which performs strict equality
		   * comparisons of values, i.e. `===`.
		   *
		   * @private
		   * @param {Array} array The array to inspect.
		   * @param {*} value The value to search for.
		   * @param {number} fromIndex The index to search from.
		   * @returns {number} Returns the index of the matched value, else `-1`.
		   */
		  function strictLastIndexOf(array, value, fromIndex) {
		    var index = fromIndex + 1;
		    while (index--) {
		      if (array[index] === value) {
		        return index;
		      }
		    }
		    return index;
		  }

		  /**
		   * Gets the number of symbols in `string`.
		   *
		   * @private
		   * @param {string} string The string to inspect.
		   * @returns {number} Returns the string size.
		   */
		  function stringSize(string) {
		    return hasUnicode(string)
		      ? unicodeSize(string)
		      : asciiSize(string);
		  }

		  /**
		   * Converts `string` to an array.
		   *
		   * @private
		   * @param {string} string The string to convert.
		   * @returns {Array} Returns the converted array.
		   */
		  function stringToArray(string) {
		    return hasUnicode(string)
		      ? unicodeToArray(string)
		      : asciiToArray(string);
		  }

		  /**
		   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
		   * character of `string`.
		   *
		   * @private
		   * @param {string} string The string to inspect.
		   * @returns {number} Returns the index of the last non-whitespace character.
		   */
		  function trimmedEndIndex(string) {
		    var index = string.length;

		    while (index-- && reWhitespace.test(string.charAt(index))) {}
		    return index;
		  }

		  /**
		   * Used by `_.unescape` to convert HTML entities to characters.
		   *
		   * @private
		   * @param {string} chr The matched character to unescape.
		   * @returns {string} Returns the unescaped character.
		   */
		  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

		  /**
		   * Gets the size of a Unicode `string`.
		   *
		   * @private
		   * @param {string} string The string inspect.
		   * @returns {number} Returns the string size.
		   */
		  function unicodeSize(string) {
		    var result = reUnicode.lastIndex = 0;
		    while (reUnicode.test(string)) {
		      ++result;
		    }
		    return result;
		  }

		  /**
		   * Converts a Unicode `string` to an array.
		   *
		   * @private
		   * @param {string} string The string to convert.
		   * @returns {Array} Returns the converted array.
		   */
		  function unicodeToArray(string) {
		    return string.match(reUnicode) || [];
		  }

		  /**
		   * Splits a Unicode `string` into an array of its words.
		   *
		   * @private
		   * @param {string} The string to inspect.
		   * @returns {Array} Returns the words of `string`.
		   */
		  function unicodeWords(string) {
		    return string.match(reUnicodeWord) || [];
		  }

		  /*--------------------------------------------------------------------------*/

		  /**
		   * Create a new pristine `lodash` function using the `context` object.
		   *
		   * @static
		   * @memberOf _
		   * @since 1.1.0
		   * @category Util
		   * @param {Object} [context=root] The context object.
		   * @returns {Function} Returns a new `lodash` function.
		   * @example
		   *
		   * _.mixin({ 'foo': _.constant('foo') });
		   *
		   * var lodash = _.runInContext();
		   * lodash.mixin({ 'bar': lodash.constant('bar') });
		   *
		   * _.isFunction(_.foo);
		   * // => true
		   * _.isFunction(_.bar);
		   * // => false
		   *
		   * lodash.isFunction(lodash.foo);
		   * // => false
		   * lodash.isFunction(lodash.bar);
		   * // => true
		   *
		   * // Create a suped-up `defer` in Node.js.
		   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
		   */
		  var runInContext = (function runInContext(context) {
		    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

		    /** Built-in constructor references. */
		    var Array = context.Array,
		        Date = context.Date,
		        Error = context.Error,
		        Function = context.Function,
		        Math = context.Math,
		        Object = context.Object,
		        RegExp = context.RegExp,
		        String = context.String,
		        TypeError = context.TypeError;

		    /** Used for built-in method references. */
		    var arrayProto = Array.prototype,
		        funcProto = Function.prototype,
		        objectProto = Object.prototype;

		    /** Used to detect overreaching core-js shims. */
		    var coreJsData = context['__core-js_shared__'];

		    /** Used to resolve the decompiled source of functions. */
		    var funcToString = funcProto.toString;

		    /** Used to check objects for own properties. */
		    var hasOwnProperty = objectProto.hasOwnProperty;

		    /** Used to generate unique IDs. */
		    var idCounter = 0;

		    /** Used to detect methods masquerading as native. */
		    var maskSrcKey = (function() {
		      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
		      return uid ? ('Symbol(src)_1.' + uid) : '';
		    }());

		    /**
		     * Used to resolve the
		     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		     * of values.
		     */
		    var nativeObjectToString = objectProto.toString;

		    /** Used to infer the `Object` constructor. */
		    var objectCtorString = funcToString.call(Object);

		    /** Used to restore the original `_` reference in `_.noConflict`. */
		    var oldDash = root._;

		    /** Used to detect if a method is native. */
		    var reIsNative = RegExp('^' +
		      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
		      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
		    );

		    /** Built-in value references. */
		    var Buffer = moduleExports ? context.Buffer : undefined$1,
		        Symbol = context.Symbol,
		        Uint8Array = context.Uint8Array,
		        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1,
		        getPrototype = overArg(Object.getPrototypeOf, Object),
		        objectCreate = Object.create,
		        propertyIsEnumerable = objectProto.propertyIsEnumerable,
		        splice = arrayProto.splice,
		        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined$1,
		        symIterator = Symbol ? Symbol.iterator : undefined$1,
		        symToStringTag = Symbol ? Symbol.toStringTag : undefined$1;

		    var defineProperty = (function() {
		      try {
		        var func = getNative(Object, 'defineProperty');
		        func({}, '', {});
		        return func;
		      } catch (e) {}
		    }());

		    /** Mocked built-ins. */
		    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
		        ctxNow = Date && Date.now !== root.Date.now && Date.now,
		        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

		    /* Built-in method references for those with the same name as other `lodash` methods. */
		    var nativeCeil = Math.ceil,
		        nativeFloor = Math.floor,
		        nativeGetSymbols = Object.getOwnPropertySymbols,
		        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1,
		        nativeIsFinite = context.isFinite,
		        nativeJoin = arrayProto.join,
		        nativeKeys = overArg(Object.keys, Object),
		        nativeMax = Math.max,
		        nativeMin = Math.min,
		        nativeNow = Date.now,
		        nativeParseInt = context.parseInt,
		        nativeRandom = Math.random,
		        nativeReverse = arrayProto.reverse;

		    /* Built-in method references that are verified to be native. */
		    var DataView = getNative(context, 'DataView'),
		        Map = getNative(context, 'Map'),
		        Promise = getNative(context, 'Promise'),
		        Set = getNative(context, 'Set'),
		        WeakMap = getNative(context, 'WeakMap'),
		        nativeCreate = getNative(Object, 'create');

		    /** Used to store function metadata. */
		    var metaMap = WeakMap && new WeakMap;

		    /** Used to lookup unminified function names. */
		    var realNames = {};

		    /** Used to detect maps, sets, and weakmaps. */
		    var dataViewCtorString = toSource(DataView),
		        mapCtorString = toSource(Map),
		        promiseCtorString = toSource(Promise),
		        setCtorString = toSource(Set),
		        weakMapCtorString = toSource(WeakMap);

		    /** Used to convert symbols to primitives and strings. */
		    var symbolProto = Symbol ? Symbol.prototype : undefined$1,
		        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1,
		        symbolToString = symbolProto ? symbolProto.toString : undefined$1;

		    /*------------------------------------------------------------------------*/

		    /**
		     * Creates a `lodash` object which wraps `value` to enable implicit method
		     * chain sequences. Methods that operate on and return arrays, collections,
		     * and functions can be chained together. Methods that retrieve a single value
		     * or may return a primitive value will automatically end the chain sequence
		     * and return the unwrapped value. Otherwise, the value must be unwrapped
		     * with `_#value`.
		     *
		     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
		     * enabled using `_.chain`.
		     *
		     * The execution of chained methods is lazy, that is, it's deferred until
		     * `_#value` is implicitly or explicitly called.
		     *
		     * Lazy evaluation allows several methods to support shortcut fusion.
		     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
		     * the creation of intermediate arrays and can greatly reduce the number of
		     * iteratee executions. Sections of a chain sequence qualify for shortcut
		     * fusion if the section is applied to an array and iteratees accept only
		     * one argument. The heuristic for whether a section qualifies for shortcut
		     * fusion is subject to change.
		     *
		     * Chaining is supported in custom builds as long as the `_#value` method is
		     * directly or indirectly included in the build.
		     *
		     * In addition to lodash methods, wrappers have `Array` and `String` methods.
		     *
		     * The wrapper `Array` methods are:
		     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
		     *
		     * The wrapper `String` methods are:
		     * `replace` and `split`
		     *
		     * The wrapper methods that support shortcut fusion are:
		     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
		     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
		     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
		     *
		     * The chainable wrapper methods are:
		     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
		     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
		     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
		     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
		     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
		     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
		     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
		     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
		     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
		     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
		     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
		     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
		     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
		     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
		     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
		     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
		     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
		     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
		     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
		     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
		     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
		     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
		     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
		     * `zipObject`, `zipObjectDeep`, and `zipWith`
		     *
		     * The wrapper methods that are **not** chainable by default are:
		     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
		     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
		     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
		     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
		     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
		     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
		     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
		     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
		     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
		     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
		     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
		     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
		     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
		     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
		     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
		     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
		     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
		     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
		     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
		     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
		     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
		     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
		     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
		     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
		     * `upperFirst`, `value`, and `words`
		     *
		     * @name _
		     * @constructor
		     * @category Seq
		     * @param {*} value The value to wrap in a `lodash` instance.
		     * @returns {Object} Returns the new `lodash` wrapper instance.
		     * @example
		     *
		     * function square(n) {
		     *   return n * n;
		     * }
		     *
		     * var wrapped = _([1, 2, 3]);
		     *
		     * // Returns an unwrapped value.
		     * wrapped.reduce(_.add);
		     * // => 6
		     *
		     * // Returns a wrapped value.
		     * var squares = wrapped.map(square);
		     *
		     * _.isArray(squares);
		     * // => false
		     *
		     * _.isArray(squares.value());
		     * // => true
		     */
		    function lodash(value) {
		      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
		        if (value instanceof LodashWrapper) {
		          return value;
		        }
		        if (hasOwnProperty.call(value, '__wrapped__')) {
		          return wrapperClone(value);
		        }
		      }
		      return new LodashWrapper(value);
		    }

		    /**
		     * The base implementation of `_.create` without support for assigning
		     * properties to the created object.
		     *
		     * @private
		     * @param {Object} proto The object to inherit from.
		     * @returns {Object} Returns the new object.
		     */
		    var baseCreate = (function() {
		      function object() {}
		      return function(proto) {
		        if (!isObject(proto)) {
		          return {};
		        }
		        if (objectCreate) {
		          return objectCreate(proto);
		        }
		        object.prototype = proto;
		        var result = new object;
		        object.prototype = undefined$1;
		        return result;
		      };
		    }());

		    /**
		     * The function whose prototype chain sequence wrappers inherit from.
		     *
		     * @private
		     */
		    function baseLodash() {
		      // No operation performed.
		    }

		    /**
		     * The base constructor for creating `lodash` wrapper objects.
		     *
		     * @private
		     * @param {*} value The value to wrap.
		     * @param {boolean} [chainAll] Enable explicit method chain sequences.
		     */
		    function LodashWrapper(value, chainAll) {
		      this.__wrapped__ = value;
		      this.__actions__ = [];
		      this.__chain__ = !!chainAll;
		      this.__index__ = 0;
		      this.__values__ = undefined$1;
		    }

		    /**
		     * By default, the template delimiters used by lodash are like those in
		     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
		     * following template settings to use alternative delimiters.
		     *
		     * @static
		     * @memberOf _
		     * @type {Object}
		     */
		    lodash.templateSettings = {

		      /**
		       * Used to detect `data` property values to be HTML-escaped.
		       *
		       * @memberOf _.templateSettings
		       * @type {RegExp}
		       */
		      'escape': reEscape,

		      /**
		       * Used to detect code to be evaluated.
		       *
		       * @memberOf _.templateSettings
		       * @type {RegExp}
		       */
		      'evaluate': reEvaluate,

		      /**
		       * Used to detect `data` property values to inject.
		       *
		       * @memberOf _.templateSettings
		       * @type {RegExp}
		       */
		      'interpolate': reInterpolate,

		      /**
		       * Used to reference the data object in the template text.
		       *
		       * @memberOf _.templateSettings
		       * @type {string}
		       */
		      'variable': '',

		      /**
		       * Used to import variables into the compiled template.
		       *
		       * @memberOf _.templateSettings
		       * @type {Object}
		       */
		      'imports': {

		        /**
		         * A reference to the `lodash` function.
		         *
		         * @memberOf _.templateSettings.imports
		         * @type {Function}
		         */
		        '_': lodash
		      }
		    };

		    // Ensure wrappers are instances of `baseLodash`.
		    lodash.prototype = baseLodash.prototype;
		    lodash.prototype.constructor = lodash;

		    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
		    LodashWrapper.prototype.constructor = LodashWrapper;

		    /*------------------------------------------------------------------------*/

		    /**
		     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
		     *
		     * @private
		     * @constructor
		     * @param {*} value The value to wrap.
		     */
		    function LazyWrapper(value) {
		      this.__wrapped__ = value;
		      this.__actions__ = [];
		      this.__dir__ = 1;
		      this.__filtered__ = false;
		      this.__iteratees__ = [];
		      this.__takeCount__ = MAX_ARRAY_LENGTH;
		      this.__views__ = [];
		    }

		    /**
		     * Creates a clone of the lazy wrapper object.
		     *
		     * @private
		     * @name clone
		     * @memberOf LazyWrapper
		     * @returns {Object} Returns the cloned `LazyWrapper` object.
		     */
		    function lazyClone() {
		      var result = new LazyWrapper(this.__wrapped__);
		      result.__actions__ = copyArray(this.__actions__);
		      result.__dir__ = this.__dir__;
		      result.__filtered__ = this.__filtered__;
		      result.__iteratees__ = copyArray(this.__iteratees__);
		      result.__takeCount__ = this.__takeCount__;
		      result.__views__ = copyArray(this.__views__);
		      return result;
		    }

		    /**
		     * Reverses the direction of lazy iteration.
		     *
		     * @private
		     * @name reverse
		     * @memberOf LazyWrapper
		     * @returns {Object} Returns the new reversed `LazyWrapper` object.
		     */
		    function lazyReverse() {
		      if (this.__filtered__) {
		        var result = new LazyWrapper(this);
		        result.__dir__ = -1;
		        result.__filtered__ = true;
		      } else {
		        result = this.clone();
		        result.__dir__ *= -1;
		      }
		      return result;
		    }

		    /**
		     * Extracts the unwrapped value from its lazy wrapper.
		     *
		     * @private
		     * @name value
		     * @memberOf LazyWrapper
		     * @returns {*} Returns the unwrapped value.
		     */
		    function lazyValue() {
		      var array = this.__wrapped__.value(),
		          dir = this.__dir__,
		          isArr = isArray(array),
		          isRight = dir < 0,
		          arrLength = isArr ? array.length : 0,
		          view = getView(0, arrLength, this.__views__),
		          start = view.start,
		          end = view.end,
		          length = end - start,
		          index = isRight ? end : (start - 1),
		          iteratees = this.__iteratees__,
		          iterLength = iteratees.length,
		          resIndex = 0,
		          takeCount = nativeMin(length, this.__takeCount__);

		      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
		        return baseWrapperValue(array, this.__actions__);
		      }
		      var result = [];

		      outer:
		      while (length-- && resIndex < takeCount) {
		        index += dir;

		        var iterIndex = -1,
		            value = array[index];

		        while (++iterIndex < iterLength) {
		          var data = iteratees[iterIndex],
		              iteratee = data.iteratee,
		              type = data.type,
		              computed = iteratee(value);

		          if (type == LAZY_MAP_FLAG) {
		            value = computed;
		          } else if (!computed) {
		            if (type == LAZY_FILTER_FLAG) {
		              continue outer;
		            } else {
		              break outer;
		            }
		          }
		        }
		        result[resIndex++] = value;
		      }
		      return result;
		    }

		    // Ensure `LazyWrapper` is an instance of `baseLodash`.
		    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
		    LazyWrapper.prototype.constructor = LazyWrapper;

		    /*------------------------------------------------------------------------*/

		    /**
		     * Creates a hash object.
		     *
		     * @private
		     * @constructor
		     * @param {Array} [entries] The key-value pairs to cache.
		     */
		    function Hash(entries) {
		      var index = -1,
		          length = entries == null ? 0 : entries.length;

		      this.clear();
		      while (++index < length) {
		        var entry = entries[index];
		        this.set(entry[0], entry[1]);
		      }
		    }

		    /**
		     * Removes all key-value entries from the hash.
		     *
		     * @private
		     * @name clear
		     * @memberOf Hash
		     */
		    function hashClear() {
		      this.__data__ = nativeCreate ? nativeCreate(null) : {};
		      this.size = 0;
		    }

		    /**
		     * Removes `key` and its value from the hash.
		     *
		     * @private
		     * @name delete
		     * @memberOf Hash
		     * @param {Object} hash The hash to modify.
		     * @param {string} key The key of the value to remove.
		     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		     */
		    function hashDelete(key) {
		      var result = this.has(key) && delete this.__data__[key];
		      this.size -= result ? 1 : 0;
		      return result;
		    }

		    /**
		     * Gets the hash value for `key`.
		     *
		     * @private
		     * @name get
		     * @memberOf Hash
		     * @param {string} key The key of the value to get.
		     * @returns {*} Returns the entry value.
		     */
		    function hashGet(key) {
		      var data = this.__data__;
		      if (nativeCreate) {
		        var result = data[key];
		        return result === HASH_UNDEFINED ? undefined$1 : result;
		      }
		      return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
		    }

		    /**
		     * Checks if a hash value for `key` exists.
		     *
		     * @private
		     * @name has
		     * @memberOf Hash
		     * @param {string} key The key of the entry to check.
		     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		     */
		    function hashHas(key) {
		      var data = this.__data__;
		      return nativeCreate ? (data[key] !== undefined$1) : hasOwnProperty.call(data, key);
		    }

		    /**
		     * Sets the hash `key` to `value`.
		     *
		     * @private
		     * @name set
		     * @memberOf Hash
		     * @param {string} key The key of the value to set.
		     * @param {*} value The value to set.
		     * @returns {Object} Returns the hash instance.
		     */
		    function hashSet(key, value) {
		      var data = this.__data__;
		      this.size += this.has(key) ? 0 : 1;
		      data[key] = (nativeCreate && value === undefined$1) ? HASH_UNDEFINED : value;
		      return this;
		    }

		    // Add methods to `Hash`.
		    Hash.prototype.clear = hashClear;
		    Hash.prototype['delete'] = hashDelete;
		    Hash.prototype.get = hashGet;
		    Hash.prototype.has = hashHas;
		    Hash.prototype.set = hashSet;

		    /*------------------------------------------------------------------------*/

		    /**
		     * Creates an list cache object.
		     *
		     * @private
		     * @constructor
		     * @param {Array} [entries] The key-value pairs to cache.
		     */
		    function ListCache(entries) {
		      var index = -1,
		          length = entries == null ? 0 : entries.length;

		      this.clear();
		      while (++index < length) {
		        var entry = entries[index];
		        this.set(entry[0], entry[1]);
		      }
		    }

		    /**
		     * Removes all key-value entries from the list cache.
		     *
		     * @private
		     * @name clear
		     * @memberOf ListCache
		     */
		    function listCacheClear() {
		      this.__data__ = [];
		      this.size = 0;
		    }

		    /**
		     * Removes `key` and its value from the list cache.
		     *
		     * @private
		     * @name delete
		     * @memberOf ListCache
		     * @param {string} key The key of the value to remove.
		     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		     */
		    function listCacheDelete(key) {
		      var data = this.__data__,
		          index = assocIndexOf(data, key);

		      if (index < 0) {
		        return false;
		      }
		      var lastIndex = data.length - 1;
		      if (index == lastIndex) {
		        data.pop();
		      } else {
		        splice.call(data, index, 1);
		      }
		      --this.size;
		      return true;
		    }

		    /**
		     * Gets the list cache value for `key`.
		     *
		     * @private
		     * @name get
		     * @memberOf ListCache
		     * @param {string} key The key of the value to get.
		     * @returns {*} Returns the entry value.
		     */
		    function listCacheGet(key) {
		      var data = this.__data__,
		          index = assocIndexOf(data, key);

		      return index < 0 ? undefined$1 : data[index][1];
		    }

		    /**
		     * Checks if a list cache value for `key` exists.
		     *
		     * @private
		     * @name has
		     * @memberOf ListCache
		     * @param {string} key The key of the entry to check.
		     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		     */
		    function listCacheHas(key) {
		      return assocIndexOf(this.__data__, key) > -1;
		    }

		    /**
		     * Sets the list cache `key` to `value`.
		     *
		     * @private
		     * @name set
		     * @memberOf ListCache
		     * @param {string} key The key of the value to set.
		     * @param {*} value The value to set.
		     * @returns {Object} Returns the list cache instance.
		     */
		    function listCacheSet(key, value) {
		      var data = this.__data__,
		          index = assocIndexOf(data, key);

		      if (index < 0) {
		        ++this.size;
		        data.push([key, value]);
		      } else {
		        data[index][1] = value;
		      }
		      return this;
		    }

		    // Add methods to `ListCache`.
		    ListCache.prototype.clear = listCacheClear;
		    ListCache.prototype['delete'] = listCacheDelete;
		    ListCache.prototype.get = listCacheGet;
		    ListCache.prototype.has = listCacheHas;
		    ListCache.prototype.set = listCacheSet;

		    /*------------------------------------------------------------------------*/

		    /**
		     * Creates a map cache object to store key-value pairs.
		     *
		     * @private
		     * @constructor
		     * @param {Array} [entries] The key-value pairs to cache.
		     */
		    function MapCache(entries) {
		      var index = -1,
		          length = entries == null ? 0 : entries.length;

		      this.clear();
		      while (++index < length) {
		        var entry = entries[index];
		        this.set(entry[0], entry[1]);
		      }
		    }

		    /**
		     * Removes all key-value entries from the map.
		     *
		     * @private
		     * @name clear
		     * @memberOf MapCache
		     */
		    function mapCacheClear() {
		      this.size = 0;
		      this.__data__ = {
		        'hash': new Hash,
		        'map': new (Map || ListCache),
		        'string': new Hash
		      };
		    }

		    /**
		     * Removes `key` and its value from the map.
		     *
		     * @private
		     * @name delete
		     * @memberOf MapCache
		     * @param {string} key The key of the value to remove.
		     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		     */
		    function mapCacheDelete(key) {
		      var result = getMapData(this, key)['delete'](key);
		      this.size -= result ? 1 : 0;
		      return result;
		    }

		    /**
		     * Gets the map value for `key`.
		     *
		     * @private
		     * @name get
		     * @memberOf MapCache
		     * @param {string} key The key of the value to get.
		     * @returns {*} Returns the entry value.
		     */
		    function mapCacheGet(key) {
		      return getMapData(this, key).get(key);
		    }

		    /**
		     * Checks if a map value for `key` exists.
		     *
		     * @private
		     * @name has
		     * @memberOf MapCache
		     * @param {string} key The key of the entry to check.
		     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		     */
		    function mapCacheHas(key) {
		      return getMapData(this, key).has(key);
		    }

		    /**
		     * Sets the map `key` to `value`.
		     *
		     * @private
		     * @name set
		     * @memberOf MapCache
		     * @param {string} key The key of the value to set.
		     * @param {*} value The value to set.
		     * @returns {Object} Returns the map cache instance.
		     */
		    function mapCacheSet(key, value) {
		      var data = getMapData(this, key),
		          size = data.size;

		      data.set(key, value);
		      this.size += data.size == size ? 0 : 1;
		      return this;
		    }

		    // Add methods to `MapCache`.
		    MapCache.prototype.clear = mapCacheClear;
		    MapCache.prototype['delete'] = mapCacheDelete;
		    MapCache.prototype.get = mapCacheGet;
		    MapCache.prototype.has = mapCacheHas;
		    MapCache.prototype.set = mapCacheSet;

		    /*------------------------------------------------------------------------*/

		    /**
		     *
		     * Creates an array cache object to store unique values.
		     *
		     * @private
		     * @constructor
		     * @param {Array} [values] The values to cache.
		     */
		    function SetCache(values) {
		      var index = -1,
		          length = values == null ? 0 : values.length;

		      this.__data__ = new MapCache;
		      while (++index < length) {
		        this.add(values[index]);
		      }
		    }

		    /**
		     * Adds `value` to the array cache.
		     *
		     * @private
		     * @name add
		     * @memberOf SetCache
		     * @alias push
		     * @param {*} value The value to cache.
		     * @returns {Object} Returns the cache instance.
		     */
		    function setCacheAdd(value) {
		      this.__data__.set(value, HASH_UNDEFINED);
		      return this;
		    }

		    /**
		     * Checks if `value` is in the array cache.
		     *
		     * @private
		     * @name has
		     * @memberOf SetCache
		     * @param {*} value The value to search for.
		     * @returns {number} Returns `true` if `value` is found, else `false`.
		     */
		    function setCacheHas(value) {
		      return this.__data__.has(value);
		    }

		    // Add methods to `SetCache`.
		    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
		    SetCache.prototype.has = setCacheHas;

		    /*------------------------------------------------------------------------*/

		    /**
		     * Creates a stack cache object to store key-value pairs.
		     *
		     * @private
		     * @constructor
		     * @param {Array} [entries] The key-value pairs to cache.
		     */
		    function Stack(entries) {
		      var data = this.__data__ = new ListCache(entries);
		      this.size = data.size;
		    }

		    /**
		     * Removes all key-value entries from the stack.
		     *
		     * @private
		     * @name clear
		     * @memberOf Stack
		     */
		    function stackClear() {
		      this.__data__ = new ListCache;
		      this.size = 0;
		    }

		    /**
		     * Removes `key` and its value from the stack.
		     *
		     * @private
		     * @name delete
		     * @memberOf Stack
		     * @param {string} key The key of the value to remove.
		     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		     */
		    function stackDelete(key) {
		      var data = this.__data__,
		          result = data['delete'](key);

		      this.size = data.size;
		      return result;
		    }

		    /**
		     * Gets the stack value for `key`.
		     *
		     * @private
		     * @name get
		     * @memberOf Stack
		     * @param {string} key The key of the value to get.
		     * @returns {*} Returns the entry value.
		     */
		    function stackGet(key) {
		      return this.__data__.get(key);
		    }

		    /**
		     * Checks if a stack value for `key` exists.
		     *
		     * @private
		     * @name has
		     * @memberOf Stack
		     * @param {string} key The key of the entry to check.
		     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		     */
		    function stackHas(key) {
		      return this.__data__.has(key);
		    }

		    /**
		     * Sets the stack `key` to `value`.
		     *
		     * @private
		     * @name set
		     * @memberOf Stack
		     * @param {string} key The key of the value to set.
		     * @param {*} value The value to set.
		     * @returns {Object} Returns the stack cache instance.
		     */
		    function stackSet(key, value) {
		      var data = this.__data__;
		      if (data instanceof ListCache) {
		        var pairs = data.__data__;
		        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
		          pairs.push([key, value]);
		          this.size = ++data.size;
		          return this;
		        }
		        data = this.__data__ = new MapCache(pairs);
		      }
		      data.set(key, value);
		      this.size = data.size;
		      return this;
		    }

		    // Add methods to `Stack`.
		    Stack.prototype.clear = stackClear;
		    Stack.prototype['delete'] = stackDelete;
		    Stack.prototype.get = stackGet;
		    Stack.prototype.has = stackHas;
		    Stack.prototype.set = stackSet;

		    /*------------------------------------------------------------------------*/

		    /**
		     * Creates an array of the enumerable property names of the array-like `value`.
		     *
		     * @private
		     * @param {*} value The value to query.
		     * @param {boolean} inherited Specify returning inherited property names.
		     * @returns {Array} Returns the array of property names.
		     */
		    function arrayLikeKeys(value, inherited) {
		      var isArr = isArray(value),
		          isArg = !isArr && isArguments(value),
		          isBuff = !isArr && !isArg && isBuffer(value),
		          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
		          skipIndexes = isArr || isArg || isBuff || isType,
		          result = skipIndexes ? baseTimes(value.length, String) : [],
		          length = result.length;

		      for (var key in value) {
		        if ((inherited || hasOwnProperty.call(value, key)) &&
		            !(skipIndexes && (
		               // Safari 9 has enumerable `arguments.length` in strict mode.
		               key == 'length' ||
		               // Node.js 0.10 has enumerable non-index properties on buffers.
		               (isBuff && (key == 'offset' || key == 'parent')) ||
		               // PhantomJS 2 has enumerable non-index properties on typed arrays.
		               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
		               // Skip index properties.
		               isIndex(key, length)
		            ))) {
		          result.push(key);
		        }
		      }
		      return result;
		    }

		    /**
		     * A specialized version of `_.sample` for arrays.
		     *
		     * @private
		     * @param {Array} array The array to sample.
		     * @returns {*} Returns the random element.
		     */
		    function arraySample(array) {
		      var length = array.length;
		      return length ? array[baseRandom(0, length - 1)] : undefined$1;
		    }

		    /**
		     * A specialized version of `_.sampleSize` for arrays.
		     *
		     * @private
		     * @param {Array} array The array to sample.
		     * @param {number} n The number of elements to sample.
		     * @returns {Array} Returns the random elements.
		     */
		    function arraySampleSize(array, n) {
		      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
		    }

		    /**
		     * A specialized version of `_.shuffle` for arrays.
		     *
		     * @private
		     * @param {Array} array The array to shuffle.
		     * @returns {Array} Returns the new shuffled array.
		     */
		    function arrayShuffle(array) {
		      return shuffleSelf(copyArray(array));
		    }

		    /**
		     * This function is like `assignValue` except that it doesn't assign
		     * `undefined` values.
		     *
		     * @private
		     * @param {Object} object The object to modify.
		     * @param {string} key The key of the property to assign.
		     * @param {*} value The value to assign.
		     */
		    function assignMergeValue(object, key, value) {
		      if ((value !== undefined$1 && !eq(object[key], value)) ||
		          (value === undefined$1 && !(key in object))) {
		        baseAssignValue(object, key, value);
		      }
		    }

		    /**
		     * Assigns `value` to `key` of `object` if the existing value is not equivalent
		     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		     * for equality comparisons.
		     *
		     * @private
		     * @param {Object} object The object to modify.
		     * @param {string} key The key of the property to assign.
		     * @param {*} value The value to assign.
		     */
		    function assignValue(object, key, value) {
		      var objValue = object[key];
		      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
		          (value === undefined$1 && !(key in object))) {
		        baseAssignValue(object, key, value);
		      }
		    }

		    /**
		     * Gets the index at which the `key` is found in `array` of key-value pairs.
		     *
		     * @private
		     * @param {Array} array The array to inspect.
		     * @param {*} key The key to search for.
		     * @returns {number} Returns the index of the matched value, else `-1`.
		     */
		    function assocIndexOf(array, key) {
		      var length = array.length;
		      while (length--) {
		        if (eq(array[length][0], key)) {
		          return length;
		        }
		      }
		      return -1;
		    }

		    /**
		     * Aggregates elements of `collection` on `accumulator` with keys transformed
		     * by `iteratee` and values set by `setter`.
		     *
		     * @private
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} setter The function to set `accumulator` values.
		     * @param {Function} iteratee The iteratee to transform keys.
		     * @param {Object} accumulator The initial aggregated object.
		     * @returns {Function} Returns `accumulator`.
		     */
		    function baseAggregator(collection, setter, iteratee, accumulator) {
		      baseEach(collection, function(value, key, collection) {
		        setter(accumulator, value, iteratee(value), collection);
		      });
		      return accumulator;
		    }

		    /**
		     * The base implementation of `_.assign` without support for multiple sources
		     * or `customizer` functions.
		     *
		     * @private
		     * @param {Object} object The destination object.
		     * @param {Object} source The source object.
		     * @returns {Object} Returns `object`.
		     */
		    function baseAssign(object, source) {
		      return object && copyObject(source, keys(source), object);
		    }

		    /**
		     * The base implementation of `_.assignIn` without support for multiple sources
		     * or `customizer` functions.
		     *
		     * @private
		     * @param {Object} object The destination object.
		     * @param {Object} source The source object.
		     * @returns {Object} Returns `object`.
		     */
		    function baseAssignIn(object, source) {
		      return object && copyObject(source, keysIn(source), object);
		    }

		    /**
		     * The base implementation of `assignValue` and `assignMergeValue` without
		     * value checks.
		     *
		     * @private
		     * @param {Object} object The object to modify.
		     * @param {string} key The key of the property to assign.
		     * @param {*} value The value to assign.
		     */
		    function baseAssignValue(object, key, value) {
		      if (key == '__proto__' && defineProperty) {
		        defineProperty(object, key, {
		          'configurable': true,
		          'enumerable': true,
		          'value': value,
		          'writable': true
		        });
		      } else {
		        object[key] = value;
		      }
		    }

		    /**
		     * The base implementation of `_.at` without support for individual paths.
		     *
		     * @private
		     * @param {Object} object The object to iterate over.
		     * @param {string[]} paths The property paths to pick.
		     * @returns {Array} Returns the picked elements.
		     */
		    function baseAt(object, paths) {
		      var index = -1,
		          length = paths.length,
		          result = Array(length),
		          skip = object == null;

		      while (++index < length) {
		        result[index] = skip ? undefined$1 : get(object, paths[index]);
		      }
		      return result;
		    }

		    /**
		     * The base implementation of `_.clamp` which doesn't coerce arguments.
		     *
		     * @private
		     * @param {number} number The number to clamp.
		     * @param {number} [lower] The lower bound.
		     * @param {number} upper The upper bound.
		     * @returns {number} Returns the clamped number.
		     */
		    function baseClamp(number, lower, upper) {
		      if (number === number) {
		        if (upper !== undefined$1) {
		          number = number <= upper ? number : upper;
		        }
		        if (lower !== undefined$1) {
		          number = number >= lower ? number : lower;
		        }
		      }
		      return number;
		    }

		    /**
		     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
		     * traversed objects.
		     *
		     * @private
		     * @param {*} value The value to clone.
		     * @param {boolean} bitmask The bitmask flags.
		     *  1 - Deep clone
		     *  2 - Flatten inherited properties
		     *  4 - Clone symbols
		     * @param {Function} [customizer] The function to customize cloning.
		     * @param {string} [key] The key of `value`.
		     * @param {Object} [object] The parent object of `value`.
		     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
		     * @returns {*} Returns the cloned value.
		     */
		    function baseClone(value, bitmask, customizer, key, object, stack) {
		      var result,
		          isDeep = bitmask & CLONE_DEEP_FLAG,
		          isFlat = bitmask & CLONE_FLAT_FLAG,
		          isFull = bitmask & CLONE_SYMBOLS_FLAG;

		      if (customizer) {
		        result = object ? customizer(value, key, object, stack) : customizer(value);
		      }
		      if (result !== undefined$1) {
		        return result;
		      }
		      if (!isObject(value)) {
		        return value;
		      }
		      var isArr = isArray(value);
		      if (isArr) {
		        result = initCloneArray(value);
		        if (!isDeep) {
		          return copyArray(value, result);
		        }
		      } else {
		        var tag = getTag(value),
		            isFunc = tag == funcTag || tag == genTag;

		        if (isBuffer(value)) {
		          return cloneBuffer(value, isDeep);
		        }
		        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
		          result = (isFlat || isFunc) ? {} : initCloneObject(value);
		          if (!isDeep) {
		            return isFlat
		              ? copySymbolsIn(value, baseAssignIn(result, value))
		              : copySymbols(value, baseAssign(result, value));
		          }
		        } else {
		          if (!cloneableTags[tag]) {
		            return object ? value : {};
		          }
		          result = initCloneByTag(value, tag, isDeep);
		        }
		      }
		      // Check for circular references and return its corresponding clone.
		      stack || (stack = new Stack);
		      var stacked = stack.get(value);
		      if (stacked) {
		        return stacked;
		      }
		      stack.set(value, result);

		      if (isSet(value)) {
		        value.forEach(function(subValue) {
		          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
		        });
		      } else if (isMap(value)) {
		        value.forEach(function(subValue, key) {
		          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
		        });
		      }

		      var keysFunc = isFull
		        ? (isFlat ? getAllKeysIn : getAllKeys)
		        : (isFlat ? keysIn : keys);

		      var props = isArr ? undefined$1 : keysFunc(value);
		      arrayEach(props || value, function(subValue, key) {
		        if (props) {
		          key = subValue;
		          subValue = value[key];
		        }
		        // Recursively populate clone (susceptible to call stack limits).
		        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
		      });
		      return result;
		    }

		    /**
		     * The base implementation of `_.conforms` which doesn't clone `source`.
		     *
		     * @private
		     * @param {Object} source The object of property predicates to conform to.
		     * @returns {Function} Returns the new spec function.
		     */
		    function baseConforms(source) {
		      var props = keys(source);
		      return function(object) {
		        return baseConformsTo(object, source, props);
		      };
		    }

		    /**
		     * The base implementation of `_.conformsTo` which accepts `props` to check.
		     *
		     * @private
		     * @param {Object} object The object to inspect.
		     * @param {Object} source The object of property predicates to conform to.
		     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
		     */
		    function baseConformsTo(object, source, props) {
		      var length = props.length;
		      if (object == null) {
		        return !length;
		      }
		      object = Object(object);
		      while (length--) {
		        var key = props[length],
		            predicate = source[key],
		            value = object[key];

		        if ((value === undefined$1 && !(key in object)) || !predicate(value)) {
		          return false;
		        }
		      }
		      return true;
		    }

		    /**
		     * The base implementation of `_.delay` and `_.defer` which accepts `args`
		     * to provide to `func`.
		     *
		     * @private
		     * @param {Function} func The function to delay.
		     * @param {number} wait The number of milliseconds to delay invocation.
		     * @param {Array} args The arguments to provide to `func`.
		     * @returns {number|Object} Returns the timer id or timeout object.
		     */
		    function baseDelay(func, wait, args) {
		      if (typeof func != 'function') {
		        throw new TypeError(FUNC_ERROR_TEXT);
		      }
		      return setTimeout(function() { func.apply(undefined$1, args); }, wait);
		    }

		    /**
		     * The base implementation of methods like `_.difference` without support
		     * for excluding multiple arrays or iteratee shorthands.
		     *
		     * @private
		     * @param {Array} array The array to inspect.
		     * @param {Array} values The values to exclude.
		     * @param {Function} [iteratee] The iteratee invoked per element.
		     * @param {Function} [comparator] The comparator invoked per element.
		     * @returns {Array} Returns the new array of filtered values.
		     */
		    function baseDifference(array, values, iteratee, comparator) {
		      var index = -1,
		          includes = arrayIncludes,
		          isCommon = true,
		          length = array.length,
		          result = [],
		          valuesLength = values.length;

		      if (!length) {
		        return result;
		      }
		      if (iteratee) {
		        values = arrayMap(values, baseUnary(iteratee));
		      }
		      if (comparator) {
		        includes = arrayIncludesWith;
		        isCommon = false;
		      }
		      else if (values.length >= LARGE_ARRAY_SIZE) {
		        includes = cacheHas;
		        isCommon = false;
		        values = new SetCache(values);
		      }
		      outer:
		      while (++index < length) {
		        var value = array[index],
		            computed = iteratee == null ? value : iteratee(value);

		        value = (comparator || value !== 0) ? value : 0;
		        if (isCommon && computed === computed) {
		          var valuesIndex = valuesLength;
		          while (valuesIndex--) {
		            if (values[valuesIndex] === computed) {
		              continue outer;
		            }
		          }
		          result.push(value);
		        }
		        else if (!includes(values, computed, comparator)) {
		          result.push(value);
		        }
		      }
		      return result;
		    }

		    /**
		     * The base implementation of `_.forEach` without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} iteratee The function invoked per iteration.
		     * @returns {Array|Object} Returns `collection`.
		     */
		    var baseEach = createBaseEach(baseForOwn);

		    /**
		     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} iteratee The function invoked per iteration.
		     * @returns {Array|Object} Returns `collection`.
		     */
		    var baseEachRight = createBaseEach(baseForOwnRight, true);

		    /**
		     * The base implementation of `_.every` without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} predicate The function invoked per iteration.
		     * @returns {boolean} Returns `true` if all elements pass the predicate check,
		     *  else `false`
		     */
		    function baseEvery(collection, predicate) {
		      var result = true;
		      baseEach(collection, function(value, index, collection) {
		        result = !!predicate(value, index, collection);
		        return result;
		      });
		      return result;
		    }

		    /**
		     * The base implementation of methods like `_.max` and `_.min` which accepts a
		     * `comparator` to determine the extremum value.
		     *
		     * @private
		     * @param {Array} array The array to iterate over.
		     * @param {Function} iteratee The iteratee invoked per iteration.
		     * @param {Function} comparator The comparator used to compare values.
		     * @returns {*} Returns the extremum value.
		     */
		    function baseExtremum(array, iteratee, comparator) {
		      var index = -1,
		          length = array.length;

		      while (++index < length) {
		        var value = array[index],
		            current = iteratee(value);

		        if (current != null && (computed === undefined$1
		              ? (current === current && !isSymbol(current))
		              : comparator(current, computed)
		            )) {
		          var computed = current,
		              result = value;
		        }
		      }
		      return result;
		    }

		    /**
		     * The base implementation of `_.fill` without an iteratee call guard.
		     *
		     * @private
		     * @param {Array} array The array to fill.
		     * @param {*} value The value to fill `array` with.
		     * @param {number} [start=0] The start position.
		     * @param {number} [end=array.length] The end position.
		     * @returns {Array} Returns `array`.
		     */
		    function baseFill(array, value, start, end) {
		      var length = array.length;

		      start = toInteger(start);
		      if (start < 0) {
		        start = -start > length ? 0 : (length + start);
		      }
		      end = (end === undefined$1 || end > length) ? length : toInteger(end);
		      if (end < 0) {
		        end += length;
		      }
		      end = start > end ? 0 : toLength(end);
		      while (start < end) {
		        array[start++] = value;
		      }
		      return array;
		    }

		    /**
		     * The base implementation of `_.filter` without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} predicate The function invoked per iteration.
		     * @returns {Array} Returns the new filtered array.
		     */
		    function baseFilter(collection, predicate) {
		      var result = [];
		      baseEach(collection, function(value, index, collection) {
		        if (predicate(value, index, collection)) {
		          result.push(value);
		        }
		      });
		      return result;
		    }

		    /**
		     * The base implementation of `_.flatten` with support for restricting flattening.
		     *
		     * @private
		     * @param {Array} array The array to flatten.
		     * @param {number} depth The maximum recursion depth.
		     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
		     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
		     * @param {Array} [result=[]] The initial result value.
		     * @returns {Array} Returns the new flattened array.
		     */
		    function baseFlatten(array, depth, predicate, isStrict, result) {
		      var index = -1,
		          length = array.length;

		      predicate || (predicate = isFlattenable);
		      result || (result = []);

		      while (++index < length) {
		        var value = array[index];
		        if (depth > 0 && predicate(value)) {
		          if (depth > 1) {
		            // Recursively flatten arrays (susceptible to call stack limits).
		            baseFlatten(value, depth - 1, predicate, isStrict, result);
		          } else {
		            arrayPush(result, value);
		          }
		        } else if (!isStrict) {
		          result[result.length] = value;
		        }
		      }
		      return result;
		    }

		    /**
		     * The base implementation of `baseForOwn` which iterates over `object`
		     * properties returned by `keysFunc` and invokes `iteratee` for each property.
		     * Iteratee functions may exit iteration early by explicitly returning `false`.
		     *
		     * @private
		     * @param {Object} object The object to iterate over.
		     * @param {Function} iteratee The function invoked per iteration.
		     * @param {Function} keysFunc The function to get the keys of `object`.
		     * @returns {Object} Returns `object`.
		     */
		    var baseFor = createBaseFor();

		    /**
		     * This function is like `baseFor` except that it iterates over properties
		     * in the opposite order.
		     *
		     * @private
		     * @param {Object} object The object to iterate over.
		     * @param {Function} iteratee The function invoked per iteration.
		     * @param {Function} keysFunc The function to get the keys of `object`.
		     * @returns {Object} Returns `object`.
		     */
		    var baseForRight = createBaseFor(true);

		    /**
		     * The base implementation of `_.forOwn` without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Object} object The object to iterate over.
		     * @param {Function} iteratee The function invoked per iteration.
		     * @returns {Object} Returns `object`.
		     */
		    function baseForOwn(object, iteratee) {
		      return object && baseFor(object, iteratee, keys);
		    }

		    /**
		     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Object} object The object to iterate over.
		     * @param {Function} iteratee The function invoked per iteration.
		     * @returns {Object} Returns `object`.
		     */
		    function baseForOwnRight(object, iteratee) {
		      return object && baseForRight(object, iteratee, keys);
		    }

		    /**
		     * The base implementation of `_.functions` which creates an array of
		     * `object` function property names filtered from `props`.
		     *
		     * @private
		     * @param {Object} object The object to inspect.
		     * @param {Array} props The property names to filter.
		     * @returns {Array} Returns the function names.
		     */
		    function baseFunctions(object, props) {
		      return arrayFilter(props, function(key) {
		        return isFunction(object[key]);
		      });
		    }

		    /**
		     * The base implementation of `_.get` without support for default values.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @param {Array|string} path The path of the property to get.
		     * @returns {*} Returns the resolved value.
		     */
		    function baseGet(object, path) {
		      path = castPath(path, object);

		      var index = 0,
		          length = path.length;

		      while (object != null && index < length) {
		        object = object[toKey(path[index++])];
		      }
		      return (index && index == length) ? object : undefined$1;
		    }

		    /**
		     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
		     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
		     * symbols of `object`.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @param {Function} keysFunc The function to get the keys of `object`.
		     * @param {Function} symbolsFunc The function to get the symbols of `object`.
		     * @returns {Array} Returns the array of property names and symbols.
		     */
		    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
		      var result = keysFunc(object);
		      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
		    }

		    /**
		     * The base implementation of `getTag` without fallbacks for buggy environments.
		     *
		     * @private
		     * @param {*} value The value to query.
		     * @returns {string} Returns the `toStringTag`.
		     */
		    function baseGetTag(value) {
		      if (value == null) {
		        return value === undefined$1 ? undefinedTag : nullTag;
		      }
		      return (symToStringTag && symToStringTag in Object(value))
		        ? getRawTag(value)
		        : objectToString(value);
		    }

		    /**
		     * The base implementation of `_.gt` which doesn't coerce arguments.
		     *
		     * @private
		     * @param {*} value The value to compare.
		     * @param {*} other The other value to compare.
		     * @returns {boolean} Returns `true` if `value` is greater than `other`,
		     *  else `false`.
		     */
		    function baseGt(value, other) {
		      return value > other;
		    }

		    /**
		     * The base implementation of `_.has` without support for deep paths.
		     *
		     * @private
		     * @param {Object} [object] The object to query.
		     * @param {Array|string} key The key to check.
		     * @returns {boolean} Returns `true` if `key` exists, else `false`.
		     */
		    function baseHas(object, key) {
		      return object != null && hasOwnProperty.call(object, key);
		    }

		    /**
		     * The base implementation of `_.hasIn` without support for deep paths.
		     *
		     * @private
		     * @param {Object} [object] The object to query.
		     * @param {Array|string} key The key to check.
		     * @returns {boolean} Returns `true` if `key` exists, else `false`.
		     */
		    function baseHasIn(object, key) {
		      return object != null && key in Object(object);
		    }

		    /**
		     * The base implementation of `_.inRange` which doesn't coerce arguments.
		     *
		     * @private
		     * @param {number} number The number to check.
		     * @param {number} start The start of the range.
		     * @param {number} end The end of the range.
		     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
		     */
		    function baseInRange(number, start, end) {
		      return number >= nativeMin(start, end) && number < nativeMax(start, end);
		    }

		    /**
		     * The base implementation of methods like `_.intersection`, without support
		     * for iteratee shorthands, that accepts an array of arrays to inspect.
		     *
		     * @private
		     * @param {Array} arrays The arrays to inspect.
		     * @param {Function} [iteratee] The iteratee invoked per element.
		     * @param {Function} [comparator] The comparator invoked per element.
		     * @returns {Array} Returns the new array of shared values.
		     */
		    function baseIntersection(arrays, iteratee, comparator) {
		      var includes = comparator ? arrayIncludesWith : arrayIncludes,
		          length = arrays[0].length,
		          othLength = arrays.length,
		          othIndex = othLength,
		          caches = Array(othLength),
		          maxLength = Infinity,
		          result = [];

		      while (othIndex--) {
		        var array = arrays[othIndex];
		        if (othIndex && iteratee) {
		          array = arrayMap(array, baseUnary(iteratee));
		        }
		        maxLength = nativeMin(array.length, maxLength);
		        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
		          ? new SetCache(othIndex && array)
		          : undefined$1;
		      }
		      array = arrays[0];

		      var index = -1,
		          seen = caches[0];

		      outer:
		      while (++index < length && result.length < maxLength) {
		        var value = array[index],
		            computed = iteratee ? iteratee(value) : value;

		        value = (comparator || value !== 0) ? value : 0;
		        if (!(seen
		              ? cacheHas(seen, computed)
		              : includes(result, computed, comparator)
		            )) {
		          othIndex = othLength;
		          while (--othIndex) {
		            var cache = caches[othIndex];
		            if (!(cache
		                  ? cacheHas(cache, computed)
		                  : includes(arrays[othIndex], computed, comparator))
		                ) {
		              continue outer;
		            }
		          }
		          if (seen) {
		            seen.push(computed);
		          }
		          result.push(value);
		        }
		      }
		      return result;
		    }

		    /**
		     * The base implementation of `_.invert` and `_.invertBy` which inverts
		     * `object` with values transformed by `iteratee` and set by `setter`.
		     *
		     * @private
		     * @param {Object} object The object to iterate over.
		     * @param {Function} setter The function to set `accumulator` values.
		     * @param {Function} iteratee The iteratee to transform values.
		     * @param {Object} accumulator The initial inverted object.
		     * @returns {Function} Returns `accumulator`.
		     */
		    function baseInverter(object, setter, iteratee, accumulator) {
		      baseForOwn(object, function(value, key, object) {
		        setter(accumulator, iteratee(value), key, object);
		      });
		      return accumulator;
		    }

		    /**
		     * The base implementation of `_.invoke` without support for individual
		     * method arguments.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @param {Array|string} path The path of the method to invoke.
		     * @param {Array} args The arguments to invoke the method with.
		     * @returns {*} Returns the result of the invoked method.
		     */
		    function baseInvoke(object, path, args) {
		      path = castPath(path, object);
		      object = parent(object, path);
		      var func = object == null ? object : object[toKey(last(path))];
		      return func == null ? undefined$1 : apply(func, object, args);
		    }

		    /**
		     * The base implementation of `_.isArguments`.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
		     */
		    function baseIsArguments(value) {
		      return isObjectLike(value) && baseGetTag(value) == argsTag;
		    }

		    /**
		     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
		     */
		    function baseIsArrayBuffer(value) {
		      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
		    }

		    /**
		     * The base implementation of `_.isDate` without Node.js optimizations.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
		     */
		    function baseIsDate(value) {
		      return isObjectLike(value) && baseGetTag(value) == dateTag;
		    }

		    /**
		     * The base implementation of `_.isEqual` which supports partial comparisons
		     * and tracks traversed objects.
		     *
		     * @private
		     * @param {*} value The value to compare.
		     * @param {*} other The other value to compare.
		     * @param {boolean} bitmask The bitmask flags.
		     *  1 - Unordered comparison
		     *  2 - Partial comparison
		     * @param {Function} [customizer] The function to customize comparisons.
		     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
		     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		     */
		    function baseIsEqual(value, other, bitmask, customizer, stack) {
		      if (value === other) {
		        return true;
		      }
		      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
		        return value !== value && other !== other;
		      }
		      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
		    }

		    /**
		     * A specialized version of `baseIsEqual` for arrays and objects which performs
		     * deep comparisons and tracks traversed objects enabling objects with circular
		     * references to be compared.
		     *
		     * @private
		     * @param {Object} object The object to compare.
		     * @param {Object} other The other object to compare.
		     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
		     * @param {Function} customizer The function to customize comparisons.
		     * @param {Function} equalFunc The function to determine equivalents of values.
		     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
		     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		     */
		    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
		      var objIsArr = isArray(object),
		          othIsArr = isArray(other),
		          objTag = objIsArr ? arrayTag : getTag(object),
		          othTag = othIsArr ? arrayTag : getTag(other);

		      objTag = objTag == argsTag ? objectTag : objTag;
		      othTag = othTag == argsTag ? objectTag : othTag;

		      var objIsObj = objTag == objectTag,
		          othIsObj = othTag == objectTag,
		          isSameTag = objTag == othTag;

		      if (isSameTag && isBuffer(object)) {
		        if (!isBuffer(other)) {
		          return false;
		        }
		        objIsArr = true;
		        objIsObj = false;
		      }
		      if (isSameTag && !objIsObj) {
		        stack || (stack = new Stack);
		        return (objIsArr || isTypedArray(object))
		          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
		          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
		      }
		      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
		        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
		            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

		        if (objIsWrapped || othIsWrapped) {
		          var objUnwrapped = objIsWrapped ? object.value() : object,
		              othUnwrapped = othIsWrapped ? other.value() : other;

		          stack || (stack = new Stack);
		          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
		        }
		      }
		      if (!isSameTag) {
		        return false;
		      }
		      stack || (stack = new Stack);
		      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
		    }

		    /**
		     * The base implementation of `_.isMap` without Node.js optimizations.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
		     */
		    function baseIsMap(value) {
		      return isObjectLike(value) && getTag(value) == mapTag;
		    }

		    /**
		     * The base implementation of `_.isMatch` without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Object} object The object to inspect.
		     * @param {Object} source The object of property values to match.
		     * @param {Array} matchData The property names, values, and compare flags to match.
		     * @param {Function} [customizer] The function to customize comparisons.
		     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
		     */
		    function baseIsMatch(object, source, matchData, customizer) {
		      var index = matchData.length,
		          length = index,
		          noCustomizer = !customizer;

		      if (object == null) {
		        return !length;
		      }
		      object = Object(object);
		      while (index--) {
		        var data = matchData[index];
		        if ((noCustomizer && data[2])
		              ? data[1] !== object[data[0]]
		              : !(data[0] in object)
		            ) {
		          return false;
		        }
		      }
		      while (++index < length) {
		        data = matchData[index];
		        var key = data[0],
		            objValue = object[key],
		            srcValue = data[1];

		        if (noCustomizer && data[2]) {
		          if (objValue === undefined$1 && !(key in object)) {
		            return false;
		          }
		        } else {
		          var stack = new Stack;
		          if (customizer) {
		            var result = customizer(objValue, srcValue, key, object, source, stack);
		          }
		          if (!(result === undefined$1
		                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
		                : result
		              )) {
		            return false;
		          }
		        }
		      }
		      return true;
		    }

		    /**
		     * The base implementation of `_.isNative` without bad shim checks.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a native function,
		     *  else `false`.
		     */
		    function baseIsNative(value) {
		      if (!isObject(value) || isMasked(value)) {
		        return false;
		      }
		      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
		      return pattern.test(toSource(value));
		    }

		    /**
		     * The base implementation of `_.isRegExp` without Node.js optimizations.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
		     */
		    function baseIsRegExp(value) {
		      return isObjectLike(value) && baseGetTag(value) == regexpTag;
		    }

		    /**
		     * The base implementation of `_.isSet` without Node.js optimizations.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
		     */
		    function baseIsSet(value) {
		      return isObjectLike(value) && getTag(value) == setTag;
		    }

		    /**
		     * The base implementation of `_.isTypedArray` without Node.js optimizations.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
		     */
		    function baseIsTypedArray(value) {
		      return isObjectLike(value) &&
		        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
		    }

		    /**
		     * The base implementation of `_.iteratee`.
		     *
		     * @private
		     * @param {*} [value=_.identity] The value to convert to an iteratee.
		     * @returns {Function} Returns the iteratee.
		     */
		    function baseIteratee(value) {
		      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
		      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
		      if (typeof value == 'function') {
		        return value;
		      }
		      if (value == null) {
		        return identity;
		      }
		      if (typeof value == 'object') {
		        return isArray(value)
		          ? baseMatchesProperty(value[0], value[1])
		          : baseMatches(value);
		      }
		      return property(value);
		    }

		    /**
		     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the array of property names.
		     */
		    function baseKeys(object) {
		      if (!isPrototype(object)) {
		        return nativeKeys(object);
		      }
		      var result = [];
		      for (var key in Object(object)) {
		        if (hasOwnProperty.call(object, key) && key != 'constructor') {
		          result.push(key);
		        }
		      }
		      return result;
		    }

		    /**
		     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the array of property names.
		     */
		    function baseKeysIn(object) {
		      if (!isObject(object)) {
		        return nativeKeysIn(object);
		      }
		      var isProto = isPrototype(object),
		          result = [];

		      for (var key in object) {
		        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
		          result.push(key);
		        }
		      }
		      return result;
		    }

		    /**
		     * The base implementation of `_.lt` which doesn't coerce arguments.
		     *
		     * @private
		     * @param {*} value The value to compare.
		     * @param {*} other The other value to compare.
		     * @returns {boolean} Returns `true` if `value` is less than `other`,
		     *  else `false`.
		     */
		    function baseLt(value, other) {
		      return value < other;
		    }

		    /**
		     * The base implementation of `_.map` without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} iteratee The function invoked per iteration.
		     * @returns {Array} Returns the new mapped array.
		     */
		    function baseMap(collection, iteratee) {
		      var index = -1,
		          result = isArrayLike(collection) ? Array(collection.length) : [];

		      baseEach(collection, function(value, key, collection) {
		        result[++index] = iteratee(value, key, collection);
		      });
		      return result;
		    }

		    /**
		     * The base implementation of `_.matches` which doesn't clone `source`.
		     *
		     * @private
		     * @param {Object} source The object of property values to match.
		     * @returns {Function} Returns the new spec function.
		     */
		    function baseMatches(source) {
		      var matchData = getMatchData(source);
		      if (matchData.length == 1 && matchData[0][2]) {
		        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
		      }
		      return function(object) {
		        return object === source || baseIsMatch(object, source, matchData);
		      };
		    }

		    /**
		     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
		     *
		     * @private
		     * @param {string} path The path of the property to get.
		     * @param {*} srcValue The value to match.
		     * @returns {Function} Returns the new spec function.
		     */
		    function baseMatchesProperty(path, srcValue) {
		      if (isKey(path) && isStrictComparable(srcValue)) {
		        return matchesStrictComparable(toKey(path), srcValue);
		      }
		      return function(object) {
		        var objValue = get(object, path);
		        return (objValue === undefined$1 && objValue === srcValue)
		          ? hasIn(object, path)
		          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
		      };
		    }

		    /**
		     * The base implementation of `_.merge` without support for multiple sources.
		     *
		     * @private
		     * @param {Object} object The destination object.
		     * @param {Object} source The source object.
		     * @param {number} srcIndex The index of `source`.
		     * @param {Function} [customizer] The function to customize merged values.
		     * @param {Object} [stack] Tracks traversed source values and their merged
		     *  counterparts.
		     */
		    function baseMerge(object, source, srcIndex, customizer, stack) {
		      if (object === source) {
		        return;
		      }
		      baseFor(source, function(srcValue, key) {
		        stack || (stack = new Stack);
		        if (isObject(srcValue)) {
		          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
		        }
		        else {
		          var newValue = customizer
		            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
		            : undefined$1;

		          if (newValue === undefined$1) {
		            newValue = srcValue;
		          }
		          assignMergeValue(object, key, newValue);
		        }
		      }, keysIn);
		    }

		    /**
		     * A specialized version of `baseMerge` for arrays and objects which performs
		     * deep merges and tracks traversed objects enabling objects with circular
		     * references to be merged.
		     *
		     * @private
		     * @param {Object} object The destination object.
		     * @param {Object} source The source object.
		     * @param {string} key The key of the value to merge.
		     * @param {number} srcIndex The index of `source`.
		     * @param {Function} mergeFunc The function to merge values.
		     * @param {Function} [customizer] The function to customize assigned values.
		     * @param {Object} [stack] Tracks traversed source values and their merged
		     *  counterparts.
		     */
		    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
		      var objValue = safeGet(object, key),
		          srcValue = safeGet(source, key),
		          stacked = stack.get(srcValue);

		      if (stacked) {
		        assignMergeValue(object, key, stacked);
		        return;
		      }
		      var newValue = customizer
		        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
		        : undefined$1;

		      var isCommon = newValue === undefined$1;

		      if (isCommon) {
		        var isArr = isArray(srcValue),
		            isBuff = !isArr && isBuffer(srcValue),
		            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

		        newValue = srcValue;
		        if (isArr || isBuff || isTyped) {
		          if (isArray(objValue)) {
		            newValue = objValue;
		          }
		          else if (isArrayLikeObject(objValue)) {
		            newValue = copyArray(objValue);
		          }
		          else if (isBuff) {
		            isCommon = false;
		            newValue = cloneBuffer(srcValue, true);
		          }
		          else if (isTyped) {
		            isCommon = false;
		            newValue = cloneTypedArray(srcValue, true);
		          }
		          else {
		            newValue = [];
		          }
		        }
		        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
		          newValue = objValue;
		          if (isArguments(objValue)) {
		            newValue = toPlainObject(objValue);
		          }
		          else if (!isObject(objValue) || isFunction(objValue)) {
		            newValue = initCloneObject(srcValue);
		          }
		        }
		        else {
		          isCommon = false;
		        }
		      }
		      if (isCommon) {
		        // Recursively merge objects and arrays (susceptible to call stack limits).
		        stack.set(srcValue, newValue);
		        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
		        stack['delete'](srcValue);
		      }
		      assignMergeValue(object, key, newValue);
		    }

		    /**
		     * The base implementation of `_.nth` which doesn't coerce arguments.
		     *
		     * @private
		     * @param {Array} array The array to query.
		     * @param {number} n The index of the element to return.
		     * @returns {*} Returns the nth element of `array`.
		     */
		    function baseNth(array, n) {
		      var length = array.length;
		      if (!length) {
		        return;
		      }
		      n += n < 0 ? length : 0;
		      return isIndex(n, length) ? array[n] : undefined$1;
		    }

		    /**
		     * The base implementation of `_.orderBy` without param guards.
		     *
		     * @private
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
		     * @param {string[]} orders The sort orders of `iteratees`.
		     * @returns {Array} Returns the new sorted array.
		     */
		    function baseOrderBy(collection, iteratees, orders) {
		      if (iteratees.length) {
		        iteratees = arrayMap(iteratees, function(iteratee) {
		          if (isArray(iteratee)) {
		            return function(value) {
		              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
		            }
		          }
		          return iteratee;
		        });
		      } else {
		        iteratees = [identity];
		      }

		      var index = -1;
		      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

		      var result = baseMap(collection, function(value, key, collection) {
		        var criteria = arrayMap(iteratees, function(iteratee) {
		          return iteratee(value);
		        });
		        return { 'criteria': criteria, 'index': ++index, 'value': value };
		      });

		      return baseSortBy(result, function(object, other) {
		        return compareMultiple(object, other, orders);
		      });
		    }

		    /**
		     * The base implementation of `_.pick` without support for individual
		     * property identifiers.
		     *
		     * @private
		     * @param {Object} object The source object.
		     * @param {string[]} paths The property paths to pick.
		     * @returns {Object} Returns the new object.
		     */
		    function basePick(object, paths) {
		      return basePickBy(object, paths, function(value, path) {
		        return hasIn(object, path);
		      });
		    }

		    /**
		     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Object} object The source object.
		     * @param {string[]} paths The property paths to pick.
		     * @param {Function} predicate The function invoked per property.
		     * @returns {Object} Returns the new object.
		     */
		    function basePickBy(object, paths, predicate) {
		      var index = -1,
		          length = paths.length,
		          result = {};

		      while (++index < length) {
		        var path = paths[index],
		            value = baseGet(object, path);

		        if (predicate(value, path)) {
		          baseSet(result, castPath(path, object), value);
		        }
		      }
		      return result;
		    }

		    /**
		     * A specialized version of `baseProperty` which supports deep paths.
		     *
		     * @private
		     * @param {Array|string} path The path of the property to get.
		     * @returns {Function} Returns the new accessor function.
		     */
		    function basePropertyDeep(path) {
		      return function(object) {
		        return baseGet(object, path);
		      };
		    }

		    /**
		     * The base implementation of `_.pullAllBy` without support for iteratee
		     * shorthands.
		     *
		     * @private
		     * @param {Array} array The array to modify.
		     * @param {Array} values The values to remove.
		     * @param {Function} [iteratee] The iteratee invoked per element.
		     * @param {Function} [comparator] The comparator invoked per element.
		     * @returns {Array} Returns `array`.
		     */
		    function basePullAll(array, values, iteratee, comparator) {
		      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
		          index = -1,
		          length = values.length,
		          seen = array;

		      if (array === values) {
		        values = copyArray(values);
		      }
		      if (iteratee) {
		        seen = arrayMap(array, baseUnary(iteratee));
		      }
		      while (++index < length) {
		        var fromIndex = 0,
		            value = values[index],
		            computed = iteratee ? iteratee(value) : value;

		        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
		          if (seen !== array) {
		            splice.call(seen, fromIndex, 1);
		          }
		          splice.call(array, fromIndex, 1);
		        }
		      }
		      return array;
		    }

		    /**
		     * The base implementation of `_.pullAt` without support for individual
		     * indexes or capturing the removed elements.
		     *
		     * @private
		     * @param {Array} array The array to modify.
		     * @param {number[]} indexes The indexes of elements to remove.
		     * @returns {Array} Returns `array`.
		     */
		    function basePullAt(array, indexes) {
		      var length = array ? indexes.length : 0,
		          lastIndex = length - 1;

		      while (length--) {
		        var index = indexes[length];
		        if (length == lastIndex || index !== previous) {
		          var previous = index;
		          if (isIndex(index)) {
		            splice.call(array, index, 1);
		          } else {
		            baseUnset(array, index);
		          }
		        }
		      }
		      return array;
		    }

		    /**
		     * The base implementation of `_.random` without support for returning
		     * floating-point numbers.
		     *
		     * @private
		     * @param {number} lower The lower bound.
		     * @param {number} upper The upper bound.
		     * @returns {number} Returns the random number.
		     */
		    function baseRandom(lower, upper) {
		      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
		    }

		    /**
		     * The base implementation of `_.range` and `_.rangeRight` which doesn't
		     * coerce arguments.
		     *
		     * @private
		     * @param {number} start The start of the range.
		     * @param {number} end The end of the range.
		     * @param {number} step The value to increment or decrement by.
		     * @param {boolean} [fromRight] Specify iterating from right to left.
		     * @returns {Array} Returns the range of numbers.
		     */
		    function baseRange(start, end, step, fromRight) {
		      var index = -1,
		          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
		          result = Array(length);

		      while (length--) {
		        result[fromRight ? length : ++index] = start;
		        start += step;
		      }
		      return result;
		    }

		    /**
		     * The base implementation of `_.repeat` which doesn't coerce arguments.
		     *
		     * @private
		     * @param {string} string The string to repeat.
		     * @param {number} n The number of times to repeat the string.
		     * @returns {string} Returns the repeated string.
		     */
		    function baseRepeat(string, n) {
		      var result = '';
		      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
		        return result;
		      }
		      // Leverage the exponentiation by squaring algorithm for a faster repeat.
		      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
		      do {
		        if (n % 2) {
		          result += string;
		        }
		        n = nativeFloor(n / 2);
		        if (n) {
		          string += string;
		        }
		      } while (n);

		      return result;
		    }

		    /**
		     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
		     *
		     * @private
		     * @param {Function} func The function to apply a rest parameter to.
		     * @param {number} [start=func.length-1] The start position of the rest parameter.
		     * @returns {Function} Returns the new function.
		     */
		    function baseRest(func, start) {
		      return setToString(overRest(func, start, identity), func + '');
		    }

		    /**
		     * The base implementation of `_.sample`.
		     *
		     * @private
		     * @param {Array|Object} collection The collection to sample.
		     * @returns {*} Returns the random element.
		     */
		    function baseSample(collection) {
		      return arraySample(values(collection));
		    }

		    /**
		     * The base implementation of `_.sampleSize` without param guards.
		     *
		     * @private
		     * @param {Array|Object} collection The collection to sample.
		     * @param {number} n The number of elements to sample.
		     * @returns {Array} Returns the random elements.
		     */
		    function baseSampleSize(collection, n) {
		      var array = values(collection);
		      return shuffleSelf(array, baseClamp(n, 0, array.length));
		    }

		    /**
		     * The base implementation of `_.set`.
		     *
		     * @private
		     * @param {Object} object The object to modify.
		     * @param {Array|string} path The path of the property to set.
		     * @param {*} value The value to set.
		     * @param {Function} [customizer] The function to customize path creation.
		     * @returns {Object} Returns `object`.
		     */
		    function baseSet(object, path, value, customizer) {
		      if (!isObject(object)) {
		        return object;
		      }
		      path = castPath(path, object);

		      var index = -1,
		          length = path.length,
		          lastIndex = length - 1,
		          nested = object;

		      while (nested != null && ++index < length) {
		        var key = toKey(path[index]),
		            newValue = value;

		        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
		          return object;
		        }

		        if (index != lastIndex) {
		          var objValue = nested[key];
		          newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
		          if (newValue === undefined$1) {
		            newValue = isObject(objValue)
		              ? objValue
		              : (isIndex(path[index + 1]) ? [] : {});
		          }
		        }
		        assignValue(nested, key, newValue);
		        nested = nested[key];
		      }
		      return object;
		    }

		    /**
		     * The base implementation of `setData` without support for hot loop shorting.
		     *
		     * @private
		     * @param {Function} func The function to associate metadata with.
		     * @param {*} data The metadata.
		     * @returns {Function} Returns `func`.
		     */
		    var baseSetData = !metaMap ? identity : function(func, data) {
		      metaMap.set(func, data);
		      return func;
		    };

		    /**
		     * The base implementation of `setToString` without support for hot loop shorting.
		     *
		     * @private
		     * @param {Function} func The function to modify.
		     * @param {Function} string The `toString` result.
		     * @returns {Function} Returns `func`.
		     */
		    var baseSetToString = !defineProperty ? identity : function(func, string) {
		      return defineProperty(func, 'toString', {
		        'configurable': true,
		        'enumerable': false,
		        'value': constant(string),
		        'writable': true
		      });
		    };

		    /**
		     * The base implementation of `_.shuffle`.
		     *
		     * @private
		     * @param {Array|Object} collection The collection to shuffle.
		     * @returns {Array} Returns the new shuffled array.
		     */
		    function baseShuffle(collection) {
		      return shuffleSelf(values(collection));
		    }

		    /**
		     * The base implementation of `_.slice` without an iteratee call guard.
		     *
		     * @private
		     * @param {Array} array The array to slice.
		     * @param {number} [start=0] The start position.
		     * @param {number} [end=array.length] The end position.
		     * @returns {Array} Returns the slice of `array`.
		     */
		    function baseSlice(array, start, end) {
		      var index = -1,
		          length = array.length;

		      if (start < 0) {
		        start = -start > length ? 0 : (length + start);
		      }
		      end = end > length ? length : end;
		      if (end < 0) {
		        end += length;
		      }
		      length = start > end ? 0 : ((end - start) >>> 0);
		      start >>>= 0;

		      var result = Array(length);
		      while (++index < length) {
		        result[index] = array[index + start];
		      }
		      return result;
		    }

		    /**
		     * The base implementation of `_.some` without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} predicate The function invoked per iteration.
		     * @returns {boolean} Returns `true` if any element passes the predicate check,
		     *  else `false`.
		     */
		    function baseSome(collection, predicate) {
		      var result;

		      baseEach(collection, function(value, index, collection) {
		        result = predicate(value, index, collection);
		        return !result;
		      });
		      return !!result;
		    }

		    /**
		     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
		     * performs a binary search of `array` to determine the index at which `value`
		     * should be inserted into `array` in order to maintain its sort order.
		     *
		     * @private
		     * @param {Array} array The sorted array to inspect.
		     * @param {*} value The value to evaluate.
		     * @param {boolean} [retHighest] Specify returning the highest qualified index.
		     * @returns {number} Returns the index at which `value` should be inserted
		     *  into `array`.
		     */
		    function baseSortedIndex(array, value, retHighest) {
		      var low = 0,
		          high = array == null ? low : array.length;

		      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
		        while (low < high) {
		          var mid = (low + high) >>> 1,
		              computed = array[mid];

		          if (computed !== null && !isSymbol(computed) &&
		              (retHighest ? (computed <= value) : (computed < value))) {
		            low = mid + 1;
		          } else {
		            high = mid;
		          }
		        }
		        return high;
		      }
		      return baseSortedIndexBy(array, value, identity, retHighest);
		    }

		    /**
		     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
		     * which invokes `iteratee` for `value` and each element of `array` to compute
		     * their sort ranking. The iteratee is invoked with one argument; (value).
		     *
		     * @private
		     * @param {Array} array The sorted array to inspect.
		     * @param {*} value The value to evaluate.
		     * @param {Function} iteratee The iteratee invoked per element.
		     * @param {boolean} [retHighest] Specify returning the highest qualified index.
		     * @returns {number} Returns the index at which `value` should be inserted
		     *  into `array`.
		     */
		    function baseSortedIndexBy(array, value, iteratee, retHighest) {
		      var low = 0,
		          high = array == null ? 0 : array.length;
		      if (high === 0) {
		        return 0;
		      }

		      value = iteratee(value);
		      var valIsNaN = value !== value,
		          valIsNull = value === null,
		          valIsSymbol = isSymbol(value),
		          valIsUndefined = value === undefined$1;

		      while (low < high) {
		        var mid = nativeFloor((low + high) / 2),
		            computed = iteratee(array[mid]),
		            othIsDefined = computed !== undefined$1,
		            othIsNull = computed === null,
		            othIsReflexive = computed === computed,
		            othIsSymbol = isSymbol(computed);

		        if (valIsNaN) {
		          var setLow = retHighest || othIsReflexive;
		        } else if (valIsUndefined) {
		          setLow = othIsReflexive && (retHighest || othIsDefined);
		        } else if (valIsNull) {
		          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
		        } else if (valIsSymbol) {
		          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
		        } else if (othIsNull || othIsSymbol) {
		          setLow = false;
		        } else {
		          setLow = retHighest ? (computed <= value) : (computed < value);
		        }
		        if (setLow) {
		          low = mid + 1;
		        } else {
		          high = mid;
		        }
		      }
		      return nativeMin(high, MAX_ARRAY_INDEX);
		    }

		    /**
		     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
		     * support for iteratee shorthands.
		     *
		     * @private
		     * @param {Array} array The array to inspect.
		     * @param {Function} [iteratee] The iteratee invoked per element.
		     * @returns {Array} Returns the new duplicate free array.
		     */
		    function baseSortedUniq(array, iteratee) {
		      var index = -1,
		          length = array.length,
		          resIndex = 0,
		          result = [];

		      while (++index < length) {
		        var value = array[index],
		            computed = iteratee ? iteratee(value) : value;

		        if (!index || !eq(computed, seen)) {
		          var seen = computed;
		          result[resIndex++] = value === 0 ? 0 : value;
		        }
		      }
		      return result;
		    }

		    /**
		     * The base implementation of `_.toNumber` which doesn't ensure correct
		     * conversions of binary, hexadecimal, or octal string values.
		     *
		     * @private
		     * @param {*} value The value to process.
		     * @returns {number} Returns the number.
		     */
		    function baseToNumber(value) {
		      if (typeof value == 'number') {
		        return value;
		      }
		      if (isSymbol(value)) {
		        return NAN;
		      }
		      return +value;
		    }

		    /**
		     * The base implementation of `_.toString` which doesn't convert nullish
		     * values to empty strings.
		     *
		     * @private
		     * @param {*} value The value to process.
		     * @returns {string} Returns the string.
		     */
		    function baseToString(value) {
		      // Exit early for strings to avoid a performance hit in some environments.
		      if (typeof value == 'string') {
		        return value;
		      }
		      if (isArray(value)) {
		        // Recursively convert values (susceptible to call stack limits).
		        return arrayMap(value, baseToString) + '';
		      }
		      if (isSymbol(value)) {
		        return symbolToString ? symbolToString.call(value) : '';
		      }
		      var result = (value + '');
		      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
		    }

		    /**
		     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Array} array The array to inspect.
		     * @param {Function} [iteratee] The iteratee invoked per element.
		     * @param {Function} [comparator] The comparator invoked per element.
		     * @returns {Array} Returns the new duplicate free array.
		     */
		    function baseUniq(array, iteratee, comparator) {
		      var index = -1,
		          includes = arrayIncludes,
		          length = array.length,
		          isCommon = true,
		          result = [],
		          seen = result;

		      if (comparator) {
		        isCommon = false;
		        includes = arrayIncludesWith;
		      }
		      else if (length >= LARGE_ARRAY_SIZE) {
		        var set = iteratee ? null : createSet(array);
		        if (set) {
		          return setToArray(set);
		        }
		        isCommon = false;
		        includes = cacheHas;
		        seen = new SetCache;
		      }
		      else {
		        seen = iteratee ? [] : result;
		      }
		      outer:
		      while (++index < length) {
		        var value = array[index],
		            computed = iteratee ? iteratee(value) : value;

		        value = (comparator || value !== 0) ? value : 0;
		        if (isCommon && computed === computed) {
		          var seenIndex = seen.length;
		          while (seenIndex--) {
		            if (seen[seenIndex] === computed) {
		              continue outer;
		            }
		          }
		          if (iteratee) {
		            seen.push(computed);
		          }
		          result.push(value);
		        }
		        else if (!includes(seen, computed, comparator)) {
		          if (seen !== result) {
		            seen.push(computed);
		          }
		          result.push(value);
		        }
		      }
		      return result;
		    }

		    /**
		     * The base implementation of `_.unset`.
		     *
		     * @private
		     * @param {Object} object The object to modify.
		     * @param {Array|string} path The property path to unset.
		     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
		     */
		    function baseUnset(object, path) {
		      path = castPath(path, object);
		      object = parent(object, path);
		      return object == null || delete object[toKey(last(path))];
		    }

		    /**
		     * The base implementation of `_.update`.
		     *
		     * @private
		     * @param {Object} object The object to modify.
		     * @param {Array|string} path The path of the property to update.
		     * @param {Function} updater The function to produce the updated value.
		     * @param {Function} [customizer] The function to customize path creation.
		     * @returns {Object} Returns `object`.
		     */
		    function baseUpdate(object, path, updater, customizer) {
		      return baseSet(object, path, updater(baseGet(object, path)), customizer);
		    }

		    /**
		     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
		     * without support for iteratee shorthands.
		     *
		     * @private
		     * @param {Array} array The array to query.
		     * @param {Function} predicate The function invoked per iteration.
		     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
		     * @param {boolean} [fromRight] Specify iterating from right to left.
		     * @returns {Array} Returns the slice of `array`.
		     */
		    function baseWhile(array, predicate, isDrop, fromRight) {
		      var length = array.length,
		          index = fromRight ? length : -1;

		      while ((fromRight ? index-- : ++index < length) &&
		        predicate(array[index], index, array)) {}

		      return isDrop
		        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
		        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
		    }

		    /**
		     * The base implementation of `wrapperValue` which returns the result of
		     * performing a sequence of actions on the unwrapped `value`, where each
		     * successive action is supplied the return value of the previous.
		     *
		     * @private
		     * @param {*} value The unwrapped value.
		     * @param {Array} actions Actions to perform to resolve the unwrapped value.
		     * @returns {*} Returns the resolved value.
		     */
		    function baseWrapperValue(value, actions) {
		      var result = value;
		      if (result instanceof LazyWrapper) {
		        result = result.value();
		      }
		      return arrayReduce(actions, function(result, action) {
		        return action.func.apply(action.thisArg, arrayPush([result], action.args));
		      }, result);
		    }

		    /**
		     * The base implementation of methods like `_.xor`, without support for
		     * iteratee shorthands, that accepts an array of arrays to inspect.
		     *
		     * @private
		     * @param {Array} arrays The arrays to inspect.
		     * @param {Function} [iteratee] The iteratee invoked per element.
		     * @param {Function} [comparator] The comparator invoked per element.
		     * @returns {Array} Returns the new array of values.
		     */
		    function baseXor(arrays, iteratee, comparator) {
		      var length = arrays.length;
		      if (length < 2) {
		        return length ? baseUniq(arrays[0]) : [];
		      }
		      var index = -1,
		          result = Array(length);

		      while (++index < length) {
		        var array = arrays[index],
		            othIndex = -1;

		        while (++othIndex < length) {
		          if (othIndex != index) {
		            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
		          }
		        }
		      }
		      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
		    }

		    /**
		     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
		     *
		     * @private
		     * @param {Array} props The property identifiers.
		     * @param {Array} values The property values.
		     * @param {Function} assignFunc The function to assign values.
		     * @returns {Object} Returns the new object.
		     */
		    function baseZipObject(props, values, assignFunc) {
		      var index = -1,
		          length = props.length,
		          valsLength = values.length,
		          result = {};

		      while (++index < length) {
		        var value = index < valsLength ? values[index] : undefined$1;
		        assignFunc(result, props[index], value);
		      }
		      return result;
		    }

		    /**
		     * Casts `value` to an empty array if it's not an array like object.
		     *
		     * @private
		     * @param {*} value The value to inspect.
		     * @returns {Array|Object} Returns the cast array-like object.
		     */
		    function castArrayLikeObject(value) {
		      return isArrayLikeObject(value) ? value : [];
		    }

		    /**
		     * Casts `value` to `identity` if it's not a function.
		     *
		     * @private
		     * @param {*} value The value to inspect.
		     * @returns {Function} Returns cast function.
		     */
		    function castFunction(value) {
		      return typeof value == 'function' ? value : identity;
		    }

		    /**
		     * Casts `value` to a path array if it's not one.
		     *
		     * @private
		     * @param {*} value The value to inspect.
		     * @param {Object} [object] The object to query keys on.
		     * @returns {Array} Returns the cast property path array.
		     */
		    function castPath(value, object) {
		      if (isArray(value)) {
		        return value;
		      }
		      return isKey(value, object) ? [value] : stringToPath(toString(value));
		    }

		    /**
		     * A `baseRest` alias which can be replaced with `identity` by module
		     * replacement plugins.
		     *
		     * @private
		     * @type {Function}
		     * @param {Function} func The function to apply a rest parameter to.
		     * @returns {Function} Returns the new function.
		     */
		    var castRest = baseRest;

		    /**
		     * Casts `array` to a slice if it's needed.
		     *
		     * @private
		     * @param {Array} array The array to inspect.
		     * @param {number} start The start position.
		     * @param {number} [end=array.length] The end position.
		     * @returns {Array} Returns the cast slice.
		     */
		    function castSlice(array, start, end) {
		      var length = array.length;
		      end = end === undefined$1 ? length : end;
		      return (!start && end >= length) ? array : baseSlice(array, start, end);
		    }

		    /**
		     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
		     *
		     * @private
		     * @param {number|Object} id The timer id or timeout object of the timer to clear.
		     */
		    var clearTimeout = ctxClearTimeout || function(id) {
		      return root.clearTimeout(id);
		    };

		    /**
		     * Creates a clone of  `buffer`.
		     *
		     * @private
		     * @param {Buffer} buffer The buffer to clone.
		     * @param {boolean} [isDeep] Specify a deep clone.
		     * @returns {Buffer} Returns the cloned buffer.
		     */
		    function cloneBuffer(buffer, isDeep) {
		      if (isDeep) {
		        return buffer.slice();
		      }
		      var length = buffer.length,
		          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

		      buffer.copy(result);
		      return result;
		    }

		    /**
		     * Creates a clone of `arrayBuffer`.
		     *
		     * @private
		     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
		     * @returns {ArrayBuffer} Returns the cloned array buffer.
		     */
		    function cloneArrayBuffer(arrayBuffer) {
		      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
		      return result;
		    }

		    /**
		     * Creates a clone of `dataView`.
		     *
		     * @private
		     * @param {Object} dataView The data view to clone.
		     * @param {boolean} [isDeep] Specify a deep clone.
		     * @returns {Object} Returns the cloned data view.
		     */
		    function cloneDataView(dataView, isDeep) {
		      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
		      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
		    }

		    /**
		     * Creates a clone of `regexp`.
		     *
		     * @private
		     * @param {Object} regexp The regexp to clone.
		     * @returns {Object} Returns the cloned regexp.
		     */
		    function cloneRegExp(regexp) {
		      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
		      result.lastIndex = regexp.lastIndex;
		      return result;
		    }

		    /**
		     * Creates a clone of the `symbol` object.
		     *
		     * @private
		     * @param {Object} symbol The symbol object to clone.
		     * @returns {Object} Returns the cloned symbol object.
		     */
		    function cloneSymbol(symbol) {
		      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
		    }

		    /**
		     * Creates a clone of `typedArray`.
		     *
		     * @private
		     * @param {Object} typedArray The typed array to clone.
		     * @param {boolean} [isDeep] Specify a deep clone.
		     * @returns {Object} Returns the cloned typed array.
		     */
		    function cloneTypedArray(typedArray, isDeep) {
		      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
		      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
		    }

		    /**
		     * Compares values to sort them in ascending order.
		     *
		     * @private
		     * @param {*} value The value to compare.
		     * @param {*} other The other value to compare.
		     * @returns {number} Returns the sort order indicator for `value`.
		     */
		    function compareAscending(value, other) {
		      if (value !== other) {
		        var valIsDefined = value !== undefined$1,
		            valIsNull = value === null,
		            valIsReflexive = value === value,
		            valIsSymbol = isSymbol(value);

		        var othIsDefined = other !== undefined$1,
		            othIsNull = other === null,
		            othIsReflexive = other === other,
		            othIsSymbol = isSymbol(other);

		        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
		            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
		            (valIsNull && othIsDefined && othIsReflexive) ||
		            (!valIsDefined && othIsReflexive) ||
		            !valIsReflexive) {
		          return 1;
		        }
		        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
		            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
		            (othIsNull && valIsDefined && valIsReflexive) ||
		            (!othIsDefined && valIsReflexive) ||
		            !othIsReflexive) {
		          return -1;
		        }
		      }
		      return 0;
		    }

		    /**
		     * Used by `_.orderBy` to compare multiple properties of a value to another
		     * and stable sort them.
		     *
		     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
		     * specify an order of "desc" for descending or "asc" for ascending sort order
		     * of corresponding values.
		     *
		     * @private
		     * @param {Object} object The object to compare.
		     * @param {Object} other The other object to compare.
		     * @param {boolean[]|string[]} orders The order to sort by for each property.
		     * @returns {number} Returns the sort order indicator for `object`.
		     */
		    function compareMultiple(object, other, orders) {
		      var index = -1,
		          objCriteria = object.criteria,
		          othCriteria = other.criteria,
		          length = objCriteria.length,
		          ordersLength = orders.length;

		      while (++index < length) {
		        var result = compareAscending(objCriteria[index], othCriteria[index]);
		        if (result) {
		          if (index >= ordersLength) {
		            return result;
		          }
		          var order = orders[index];
		          return result * (order == 'desc' ? -1 : 1);
		        }
		      }
		      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
		      // that causes it, under certain circumstances, to provide the same value for
		      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
		      // for more details.
		      //
		      // This also ensures a stable sort in V8 and other engines.
		      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
		      return object.index - other.index;
		    }

		    /**
		     * Creates an array that is the composition of partially applied arguments,
		     * placeholders, and provided arguments into a single array of arguments.
		     *
		     * @private
		     * @param {Array} args The provided arguments.
		     * @param {Array} partials The arguments to prepend to those provided.
		     * @param {Array} holders The `partials` placeholder indexes.
		     * @params {boolean} [isCurried] Specify composing for a curried function.
		     * @returns {Array} Returns the new array of composed arguments.
		     */
		    function composeArgs(args, partials, holders, isCurried) {
		      var argsIndex = -1,
		          argsLength = args.length,
		          holdersLength = holders.length,
		          leftIndex = -1,
		          leftLength = partials.length,
		          rangeLength = nativeMax(argsLength - holdersLength, 0),
		          result = Array(leftLength + rangeLength),
		          isUncurried = !isCurried;

		      while (++leftIndex < leftLength) {
		        result[leftIndex] = partials[leftIndex];
		      }
		      while (++argsIndex < holdersLength) {
		        if (isUncurried || argsIndex < argsLength) {
		          result[holders[argsIndex]] = args[argsIndex];
		        }
		      }
		      while (rangeLength--) {
		        result[leftIndex++] = args[argsIndex++];
		      }
		      return result;
		    }

		    /**
		     * This function is like `composeArgs` except that the arguments composition
		     * is tailored for `_.partialRight`.
		     *
		     * @private
		     * @param {Array} args The provided arguments.
		     * @param {Array} partials The arguments to append to those provided.
		     * @param {Array} holders The `partials` placeholder indexes.
		     * @params {boolean} [isCurried] Specify composing for a curried function.
		     * @returns {Array} Returns the new array of composed arguments.
		     */
		    function composeArgsRight(args, partials, holders, isCurried) {
		      var argsIndex = -1,
		          argsLength = args.length,
		          holdersIndex = -1,
		          holdersLength = holders.length,
		          rightIndex = -1,
		          rightLength = partials.length,
		          rangeLength = nativeMax(argsLength - holdersLength, 0),
		          result = Array(rangeLength + rightLength),
		          isUncurried = !isCurried;

		      while (++argsIndex < rangeLength) {
		        result[argsIndex] = args[argsIndex];
		      }
		      var offset = argsIndex;
		      while (++rightIndex < rightLength) {
		        result[offset + rightIndex] = partials[rightIndex];
		      }
		      while (++holdersIndex < holdersLength) {
		        if (isUncurried || argsIndex < argsLength) {
		          result[offset + holders[holdersIndex]] = args[argsIndex++];
		        }
		      }
		      return result;
		    }

		    /**
		     * Copies the values of `source` to `array`.
		     *
		     * @private
		     * @param {Array} source The array to copy values from.
		     * @param {Array} [array=[]] The array to copy values to.
		     * @returns {Array} Returns `array`.
		     */
		    function copyArray(source, array) {
		      var index = -1,
		          length = source.length;

		      array || (array = Array(length));
		      while (++index < length) {
		        array[index] = source[index];
		      }
		      return array;
		    }

		    /**
		     * Copies properties of `source` to `object`.
		     *
		     * @private
		     * @param {Object} source The object to copy properties from.
		     * @param {Array} props The property identifiers to copy.
		     * @param {Object} [object={}] The object to copy properties to.
		     * @param {Function} [customizer] The function to customize copied values.
		     * @returns {Object} Returns `object`.
		     */
		    function copyObject(source, props, object, customizer) {
		      var isNew = !object;
		      object || (object = {});

		      var index = -1,
		          length = props.length;

		      while (++index < length) {
		        var key = props[index];

		        var newValue = customizer
		          ? customizer(object[key], source[key], key, object, source)
		          : undefined$1;

		        if (newValue === undefined$1) {
		          newValue = source[key];
		        }
		        if (isNew) {
		          baseAssignValue(object, key, newValue);
		        } else {
		          assignValue(object, key, newValue);
		        }
		      }
		      return object;
		    }

		    /**
		     * Copies own symbols of `source` to `object`.
		     *
		     * @private
		     * @param {Object} source The object to copy symbols from.
		     * @param {Object} [object={}] The object to copy symbols to.
		     * @returns {Object} Returns `object`.
		     */
		    function copySymbols(source, object) {
		      return copyObject(source, getSymbols(source), object);
		    }

		    /**
		     * Copies own and inherited symbols of `source` to `object`.
		     *
		     * @private
		     * @param {Object} source The object to copy symbols from.
		     * @param {Object} [object={}] The object to copy symbols to.
		     * @returns {Object} Returns `object`.
		     */
		    function copySymbolsIn(source, object) {
		      return copyObject(source, getSymbolsIn(source), object);
		    }

		    /**
		     * Creates a function like `_.groupBy`.
		     *
		     * @private
		     * @param {Function} setter The function to set accumulator values.
		     * @param {Function} [initializer] The accumulator object initializer.
		     * @returns {Function} Returns the new aggregator function.
		     */
		    function createAggregator(setter, initializer) {
		      return function(collection, iteratee) {
		        var func = isArray(collection) ? arrayAggregator : baseAggregator,
		            accumulator = initializer ? initializer() : {};

		        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
		      };
		    }

		    /**
		     * Creates a function like `_.assign`.
		     *
		     * @private
		     * @param {Function} assigner The function to assign values.
		     * @returns {Function} Returns the new assigner function.
		     */
		    function createAssigner(assigner) {
		      return baseRest(function(object, sources) {
		        var index = -1,
		            length = sources.length,
		            customizer = length > 1 ? sources[length - 1] : undefined$1,
		            guard = length > 2 ? sources[2] : undefined$1;

		        customizer = (assigner.length > 3 && typeof customizer == 'function')
		          ? (length--, customizer)
		          : undefined$1;

		        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
		          customizer = length < 3 ? undefined$1 : customizer;
		          length = 1;
		        }
		        object = Object(object);
		        while (++index < length) {
		          var source = sources[index];
		          if (source) {
		            assigner(object, source, index, customizer);
		          }
		        }
		        return object;
		      });
		    }

		    /**
		     * Creates a `baseEach` or `baseEachRight` function.
		     *
		     * @private
		     * @param {Function} eachFunc The function to iterate over a collection.
		     * @param {boolean} [fromRight] Specify iterating from right to left.
		     * @returns {Function} Returns the new base function.
		     */
		    function createBaseEach(eachFunc, fromRight) {
		      return function(collection, iteratee) {
		        if (collection == null) {
		          return collection;
		        }
		        if (!isArrayLike(collection)) {
		          return eachFunc(collection, iteratee);
		        }
		        var length = collection.length,
		            index = fromRight ? length : -1,
		            iterable = Object(collection);

		        while ((fromRight ? index-- : ++index < length)) {
		          if (iteratee(iterable[index], index, iterable) === false) {
		            break;
		          }
		        }
		        return collection;
		      };
		    }

		    /**
		     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
		     *
		     * @private
		     * @param {boolean} [fromRight] Specify iterating from right to left.
		     * @returns {Function} Returns the new base function.
		     */
		    function createBaseFor(fromRight) {
		      return function(object, iteratee, keysFunc) {
		        var index = -1,
		            iterable = Object(object),
		            props = keysFunc(object),
		            length = props.length;

		        while (length--) {
		          var key = props[fromRight ? length : ++index];
		          if (iteratee(iterable[key], key, iterable) === false) {
		            break;
		          }
		        }
		        return object;
		      };
		    }

		    /**
		     * Creates a function that wraps `func` to invoke it with the optional `this`
		     * binding of `thisArg`.
		     *
		     * @private
		     * @param {Function} func The function to wrap.
		     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
		     * @param {*} [thisArg] The `this` binding of `func`.
		     * @returns {Function} Returns the new wrapped function.
		     */
		    function createBind(func, bitmask, thisArg) {
		      var isBind = bitmask & WRAP_BIND_FLAG,
		          Ctor = createCtor(func);

		      function wrapper() {
		        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
		        return fn.apply(isBind ? thisArg : this, arguments);
		      }
		      return wrapper;
		    }

		    /**
		     * Creates a function like `_.lowerFirst`.
		     *
		     * @private
		     * @param {string} methodName The name of the `String` case method to use.
		     * @returns {Function} Returns the new case function.
		     */
		    function createCaseFirst(methodName) {
		      return function(string) {
		        string = toString(string);

		        var strSymbols = hasUnicode(string)
		          ? stringToArray(string)
		          : undefined$1;

		        var chr = strSymbols
		          ? strSymbols[0]
		          : string.charAt(0);

		        var trailing = strSymbols
		          ? castSlice(strSymbols, 1).join('')
		          : string.slice(1);

		        return chr[methodName]() + trailing;
		      };
		    }

		    /**
		     * Creates a function like `_.camelCase`.
		     *
		     * @private
		     * @param {Function} callback The function to combine each word.
		     * @returns {Function} Returns the new compounder function.
		     */
		    function createCompounder(callback) {
		      return function(string) {
		        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
		      };
		    }

		    /**
		     * Creates a function that produces an instance of `Ctor` regardless of
		     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
		     *
		     * @private
		     * @param {Function} Ctor The constructor to wrap.
		     * @returns {Function} Returns the new wrapped function.
		     */
		    function createCtor(Ctor) {
		      return function() {
		        // Use a `switch` statement to work with class constructors. See
		        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
		        // for more details.
		        var args = arguments;
		        switch (args.length) {
		          case 0: return new Ctor;
		          case 1: return new Ctor(args[0]);
		          case 2: return new Ctor(args[0], args[1]);
		          case 3: return new Ctor(args[0], args[1], args[2]);
		          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
		          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
		          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
		          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
		        }
		        var thisBinding = baseCreate(Ctor.prototype),
		            result = Ctor.apply(thisBinding, args);

		        // Mimic the constructor's `return` behavior.
		        // See https://es5.github.io/#x13.2.2 for more details.
		        return isObject(result) ? result : thisBinding;
		      };
		    }

		    /**
		     * Creates a function that wraps `func` to enable currying.
		     *
		     * @private
		     * @param {Function} func The function to wrap.
		     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
		     * @param {number} arity The arity of `func`.
		     * @returns {Function} Returns the new wrapped function.
		     */
		    function createCurry(func, bitmask, arity) {
		      var Ctor = createCtor(func);

		      function wrapper() {
		        var length = arguments.length,
		            args = Array(length),
		            index = length,
		            placeholder = getHolder(wrapper);

		        while (index--) {
		          args[index] = arguments[index];
		        }
		        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
		          ? []
		          : replaceHolders(args, placeholder);

		        length -= holders.length;
		        if (length < arity) {
		          return createRecurry(
		            func, bitmask, createHybrid, wrapper.placeholder, undefined$1,
		            args, holders, undefined$1, undefined$1, arity - length);
		        }
		        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
		        return apply(fn, this, args);
		      }
		      return wrapper;
		    }

		    /**
		     * Creates a `_.find` or `_.findLast` function.
		     *
		     * @private
		     * @param {Function} findIndexFunc The function to find the collection index.
		     * @returns {Function} Returns the new find function.
		     */
		    function createFind(findIndexFunc) {
		      return function(collection, predicate, fromIndex) {
		        var iterable = Object(collection);
		        if (!isArrayLike(collection)) {
		          var iteratee = getIteratee(predicate, 3);
		          collection = keys(collection);
		          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
		        }
		        var index = findIndexFunc(collection, predicate, fromIndex);
		        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined$1;
		      };
		    }

		    /**
		     * Creates a `_.flow` or `_.flowRight` function.
		     *
		     * @private
		     * @param {boolean} [fromRight] Specify iterating from right to left.
		     * @returns {Function} Returns the new flow function.
		     */
		    function createFlow(fromRight) {
		      return flatRest(function(funcs) {
		        var length = funcs.length,
		            index = length,
		            prereq = LodashWrapper.prototype.thru;

		        if (fromRight) {
		          funcs.reverse();
		        }
		        while (index--) {
		          var func = funcs[index];
		          if (typeof func != 'function') {
		            throw new TypeError(FUNC_ERROR_TEXT);
		          }
		          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
		            var wrapper = new LodashWrapper([], true);
		          }
		        }
		        index = wrapper ? index : length;
		        while (++index < length) {
		          func = funcs[index];

		          var funcName = getFuncName(func),
		              data = funcName == 'wrapper' ? getData(func) : undefined$1;

		          if (data && isLaziable(data[0]) &&
		                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
		                !data[4].length && data[9] == 1
		              ) {
		            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
		          } else {
		            wrapper = (func.length == 1 && isLaziable(func))
		              ? wrapper[funcName]()
		              : wrapper.thru(func);
		          }
		        }
		        return function() {
		          var args = arguments,
		              value = args[0];

		          if (wrapper && args.length == 1 && isArray(value)) {
		            return wrapper.plant(value).value();
		          }
		          var index = 0,
		              result = length ? funcs[index].apply(this, args) : value;

		          while (++index < length) {
		            result = funcs[index].call(this, result);
		          }
		          return result;
		        };
		      });
		    }

		    /**
		     * Creates a function that wraps `func` to invoke it with optional `this`
		     * binding of `thisArg`, partial application, and currying.
		     *
		     * @private
		     * @param {Function|string} func The function or method name to wrap.
		     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
		     * @param {*} [thisArg] The `this` binding of `func`.
		     * @param {Array} [partials] The arguments to prepend to those provided to
		     *  the new function.
		     * @param {Array} [holders] The `partials` placeholder indexes.
		     * @param {Array} [partialsRight] The arguments to append to those provided
		     *  to the new function.
		     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
		     * @param {Array} [argPos] The argument positions of the new function.
		     * @param {number} [ary] The arity cap of `func`.
		     * @param {number} [arity] The arity of `func`.
		     * @returns {Function} Returns the new wrapped function.
		     */
		    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
		      var isAry = bitmask & WRAP_ARY_FLAG,
		          isBind = bitmask & WRAP_BIND_FLAG,
		          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
		          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
		          isFlip = bitmask & WRAP_FLIP_FLAG,
		          Ctor = isBindKey ? undefined$1 : createCtor(func);

		      function wrapper() {
		        var length = arguments.length,
		            args = Array(length),
		            index = length;

		        while (index--) {
		          args[index] = arguments[index];
		        }
		        if (isCurried) {
		          var placeholder = getHolder(wrapper),
		              holdersCount = countHolders(args, placeholder);
		        }
		        if (partials) {
		          args = composeArgs(args, partials, holders, isCurried);
		        }
		        if (partialsRight) {
		          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
		        }
		        length -= holdersCount;
		        if (isCurried && length < arity) {
		          var newHolders = replaceHolders(args, placeholder);
		          return createRecurry(
		            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
		            args, newHolders, argPos, ary, arity - length
		          );
		        }
		        var thisBinding = isBind ? thisArg : this,
		            fn = isBindKey ? thisBinding[func] : func;

		        length = args.length;
		        if (argPos) {
		          args = reorder(args, argPos);
		        } else if (isFlip && length > 1) {
		          args.reverse();
		        }
		        if (isAry && ary < length) {
		          args.length = ary;
		        }
		        if (this && this !== root && this instanceof wrapper) {
		          fn = Ctor || createCtor(fn);
		        }
		        return fn.apply(thisBinding, args);
		      }
		      return wrapper;
		    }

		    /**
		     * Creates a function like `_.invertBy`.
		     *
		     * @private
		     * @param {Function} setter The function to set accumulator values.
		     * @param {Function} toIteratee The function to resolve iteratees.
		     * @returns {Function} Returns the new inverter function.
		     */
		    function createInverter(setter, toIteratee) {
		      return function(object, iteratee) {
		        return baseInverter(object, setter, toIteratee(iteratee), {});
		      };
		    }

		    /**
		     * Creates a function that performs a mathematical operation on two values.
		     *
		     * @private
		     * @param {Function} operator The function to perform the operation.
		     * @param {number} [defaultValue] The value used for `undefined` arguments.
		     * @returns {Function} Returns the new mathematical operation function.
		     */
		    function createMathOperation(operator, defaultValue) {
		      return function(value, other) {
		        var result;
		        if (value === undefined$1 && other === undefined$1) {
		          return defaultValue;
		        }
		        if (value !== undefined$1) {
		          result = value;
		        }
		        if (other !== undefined$1) {
		          if (result === undefined$1) {
		            return other;
		          }
		          if (typeof value == 'string' || typeof other == 'string') {
		            value = baseToString(value);
		            other = baseToString(other);
		          } else {
		            value = baseToNumber(value);
		            other = baseToNumber(other);
		          }
		          result = operator(value, other);
		        }
		        return result;
		      };
		    }

		    /**
		     * Creates a function like `_.over`.
		     *
		     * @private
		     * @param {Function} arrayFunc The function to iterate over iteratees.
		     * @returns {Function} Returns the new over function.
		     */
		    function createOver(arrayFunc) {
		      return flatRest(function(iteratees) {
		        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
		        return baseRest(function(args) {
		          var thisArg = this;
		          return arrayFunc(iteratees, function(iteratee) {
		            return apply(iteratee, thisArg, args);
		          });
		        });
		      });
		    }

		    /**
		     * Creates the padding for `string` based on `length`. The `chars` string
		     * is truncated if the number of characters exceeds `length`.
		     *
		     * @private
		     * @param {number} length The padding length.
		     * @param {string} [chars=' '] The string used as padding.
		     * @returns {string} Returns the padding for `string`.
		     */
		    function createPadding(length, chars) {
		      chars = chars === undefined$1 ? ' ' : baseToString(chars);

		      var charsLength = chars.length;
		      if (charsLength < 2) {
		        return charsLength ? baseRepeat(chars, length) : chars;
		      }
		      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
		      return hasUnicode(chars)
		        ? castSlice(stringToArray(result), 0, length).join('')
		        : result.slice(0, length);
		    }

		    /**
		     * Creates a function that wraps `func` to invoke it with the `this` binding
		     * of `thisArg` and `partials` prepended to the arguments it receives.
		     *
		     * @private
		     * @param {Function} func The function to wrap.
		     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
		     * @param {*} thisArg The `this` binding of `func`.
		     * @param {Array} partials The arguments to prepend to those provided to
		     *  the new function.
		     * @returns {Function} Returns the new wrapped function.
		     */
		    function createPartial(func, bitmask, thisArg, partials) {
		      var isBind = bitmask & WRAP_BIND_FLAG,
		          Ctor = createCtor(func);

		      function wrapper() {
		        var argsIndex = -1,
		            argsLength = arguments.length,
		            leftIndex = -1,
		            leftLength = partials.length,
		            args = Array(leftLength + argsLength),
		            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

		        while (++leftIndex < leftLength) {
		          args[leftIndex] = partials[leftIndex];
		        }
		        while (argsLength--) {
		          args[leftIndex++] = arguments[++argsIndex];
		        }
		        return apply(fn, isBind ? thisArg : this, args);
		      }
		      return wrapper;
		    }

		    /**
		     * Creates a `_.range` or `_.rangeRight` function.
		     *
		     * @private
		     * @param {boolean} [fromRight] Specify iterating from right to left.
		     * @returns {Function} Returns the new range function.
		     */
		    function createRange(fromRight) {
		      return function(start, end, step) {
		        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
		          end = step = undefined$1;
		        }
		        // Ensure the sign of `-0` is preserved.
		        start = toFinite(start);
		        if (end === undefined$1) {
		          end = start;
		          start = 0;
		        } else {
		          end = toFinite(end);
		        }
		        step = step === undefined$1 ? (start < end ? 1 : -1) : toFinite(step);
		        return baseRange(start, end, step, fromRight);
		      };
		    }

		    /**
		     * Creates a function that performs a relational operation on two values.
		     *
		     * @private
		     * @param {Function} operator The function to perform the operation.
		     * @returns {Function} Returns the new relational operation function.
		     */
		    function createRelationalOperation(operator) {
		      return function(value, other) {
		        if (!(typeof value == 'string' && typeof other == 'string')) {
		          value = toNumber(value);
		          other = toNumber(other);
		        }
		        return operator(value, other);
		      };
		    }

		    /**
		     * Creates a function that wraps `func` to continue currying.
		     *
		     * @private
		     * @param {Function} func The function to wrap.
		     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
		     * @param {Function} wrapFunc The function to create the `func` wrapper.
		     * @param {*} placeholder The placeholder value.
		     * @param {*} [thisArg] The `this` binding of `func`.
		     * @param {Array} [partials] The arguments to prepend to those provided to
		     *  the new function.
		     * @param {Array} [holders] The `partials` placeholder indexes.
		     * @param {Array} [argPos] The argument positions of the new function.
		     * @param {number} [ary] The arity cap of `func`.
		     * @param {number} [arity] The arity of `func`.
		     * @returns {Function} Returns the new wrapped function.
		     */
		    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
		      var isCurry = bitmask & WRAP_CURRY_FLAG,
		          newHolders = isCurry ? holders : undefined$1,
		          newHoldersRight = isCurry ? undefined$1 : holders,
		          newPartials = isCurry ? partials : undefined$1,
		          newPartialsRight = isCurry ? undefined$1 : partials;

		      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
		      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

		      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
		        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
		      }
		      var newData = [
		        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
		        newHoldersRight, argPos, ary, arity
		      ];

		      var result = wrapFunc.apply(undefined$1, newData);
		      if (isLaziable(func)) {
		        setData(result, newData);
		      }
		      result.placeholder = placeholder;
		      return setWrapToString(result, func, bitmask);
		    }

		    /**
		     * Creates a function like `_.round`.
		     *
		     * @private
		     * @param {string} methodName The name of the `Math` method to use when rounding.
		     * @returns {Function} Returns the new round function.
		     */
		    function createRound(methodName) {
		      var func = Math[methodName];
		      return function(number, precision) {
		        number = toNumber(number);
		        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
		        if (precision && nativeIsFinite(number)) {
		          // Shift with exponential notation to avoid floating-point issues.
		          // See [MDN](https://mdn.io/round#Examples) for more details.
		          var pair = (toString(number) + 'e').split('e'),
		              value = func(pair[0] + 'e' + (+pair[1] + precision));

		          pair = (toString(value) + 'e').split('e');
		          return +(pair[0] + 'e' + (+pair[1] - precision));
		        }
		        return func(number);
		      };
		    }

		    /**
		     * Creates a set object of `values`.
		     *
		     * @private
		     * @param {Array} values The values to add to the set.
		     * @returns {Object} Returns the new set.
		     */
		    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
		      return new Set(values);
		    };

		    /**
		     * Creates a `_.toPairs` or `_.toPairsIn` function.
		     *
		     * @private
		     * @param {Function} keysFunc The function to get the keys of a given object.
		     * @returns {Function} Returns the new pairs function.
		     */
		    function createToPairs(keysFunc) {
		      return function(object) {
		        var tag = getTag(object);
		        if (tag == mapTag) {
		          return mapToArray(object);
		        }
		        if (tag == setTag) {
		          return setToPairs(object);
		        }
		        return baseToPairs(object, keysFunc(object));
		      };
		    }

		    /**
		     * Creates a function that either curries or invokes `func` with optional
		     * `this` binding and partially applied arguments.
		     *
		     * @private
		     * @param {Function|string} func The function or method name to wrap.
		     * @param {number} bitmask The bitmask flags.
		     *    1 - `_.bind`
		     *    2 - `_.bindKey`
		     *    4 - `_.curry` or `_.curryRight` of a bound function
		     *    8 - `_.curry`
		     *   16 - `_.curryRight`
		     *   32 - `_.partial`
		     *   64 - `_.partialRight`
		     *  128 - `_.rearg`
		     *  256 - `_.ary`
		     *  512 - `_.flip`
		     * @param {*} [thisArg] The `this` binding of `func`.
		     * @param {Array} [partials] The arguments to be partially applied.
		     * @param {Array} [holders] The `partials` placeholder indexes.
		     * @param {Array} [argPos] The argument positions of the new function.
		     * @param {number} [ary] The arity cap of `func`.
		     * @param {number} [arity] The arity of `func`.
		     * @returns {Function} Returns the new wrapped function.
		     */
		    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
		      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
		      if (!isBindKey && typeof func != 'function') {
		        throw new TypeError(FUNC_ERROR_TEXT);
		      }
		      var length = partials ? partials.length : 0;
		      if (!length) {
		        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
		        partials = holders = undefined$1;
		      }
		      ary = ary === undefined$1 ? ary : nativeMax(toInteger(ary), 0);
		      arity = arity === undefined$1 ? arity : toInteger(arity);
		      length -= holders ? holders.length : 0;

		      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
		        var partialsRight = partials,
		            holdersRight = holders;

		        partials = holders = undefined$1;
		      }
		      var data = isBindKey ? undefined$1 : getData(func);

		      var newData = [
		        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
		        argPos, ary, arity
		      ];

		      if (data) {
		        mergeData(newData, data);
		      }
		      func = newData[0];
		      bitmask = newData[1];
		      thisArg = newData[2];
		      partials = newData[3];
		      holders = newData[4];
		      arity = newData[9] = newData[9] === undefined$1
		        ? (isBindKey ? 0 : func.length)
		        : nativeMax(newData[9] - length, 0);

		      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
		        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
		      }
		      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
		        var result = createBind(func, bitmask, thisArg);
		      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
		        result = createCurry(func, bitmask, arity);
		      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
		        result = createPartial(func, bitmask, thisArg, partials);
		      } else {
		        result = createHybrid.apply(undefined$1, newData);
		      }
		      var setter = data ? baseSetData : setData;
		      return setWrapToString(setter(result, newData), func, bitmask);
		    }

		    /**
		     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
		     * of source objects to the destination object for all destination properties
		     * that resolve to `undefined`.
		     *
		     * @private
		     * @param {*} objValue The destination value.
		     * @param {*} srcValue The source value.
		     * @param {string} key The key of the property to assign.
		     * @param {Object} object The parent object of `objValue`.
		     * @returns {*} Returns the value to assign.
		     */
		    function customDefaultsAssignIn(objValue, srcValue, key, object) {
		      if (objValue === undefined$1 ||
		          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
		        return srcValue;
		      }
		      return objValue;
		    }

		    /**
		     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
		     * objects into destination objects that are passed thru.
		     *
		     * @private
		     * @param {*} objValue The destination value.
		     * @param {*} srcValue The source value.
		     * @param {string} key The key of the property to merge.
		     * @param {Object} object The parent object of `objValue`.
		     * @param {Object} source The parent object of `srcValue`.
		     * @param {Object} [stack] Tracks traversed source values and their merged
		     *  counterparts.
		     * @returns {*} Returns the value to assign.
		     */
		    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
		      if (isObject(objValue) && isObject(srcValue)) {
		        // Recursively merge objects and arrays (susceptible to call stack limits).
		        stack.set(srcValue, objValue);
		        baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
		        stack['delete'](srcValue);
		      }
		      return objValue;
		    }

		    /**
		     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
		     * objects.
		     *
		     * @private
		     * @param {*} value The value to inspect.
		     * @param {string} key The key of the property to inspect.
		     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
		     */
		    function customOmitClone(value) {
		      return isPlainObject(value) ? undefined$1 : value;
		    }

		    /**
		     * A specialized version of `baseIsEqualDeep` for arrays with support for
		     * partial deep comparisons.
		     *
		     * @private
		     * @param {Array} array The array to compare.
		     * @param {Array} other The other array to compare.
		     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
		     * @param {Function} customizer The function to customize comparisons.
		     * @param {Function} equalFunc The function to determine equivalents of values.
		     * @param {Object} stack Tracks traversed `array` and `other` objects.
		     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
		     */
		    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
		      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
		          arrLength = array.length,
		          othLength = other.length;

		      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
		        return false;
		      }
		      // Check that cyclic values are equal.
		      var arrStacked = stack.get(array);
		      var othStacked = stack.get(other);
		      if (arrStacked && othStacked) {
		        return arrStacked == other && othStacked == array;
		      }
		      var index = -1,
		          result = true,
		          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined$1;

		      stack.set(array, other);
		      stack.set(other, array);

		      // Ignore non-index properties.
		      while (++index < arrLength) {
		        var arrValue = array[index],
		            othValue = other[index];

		        if (customizer) {
		          var compared = isPartial
		            ? customizer(othValue, arrValue, index, other, array, stack)
		            : customizer(arrValue, othValue, index, array, other, stack);
		        }
		        if (compared !== undefined$1) {
		          if (compared) {
		            continue;
		          }
		          result = false;
		          break;
		        }
		        // Recursively compare arrays (susceptible to call stack limits).
		        if (seen) {
		          if (!arraySome(other, function(othValue, othIndex) {
		                if (!cacheHas(seen, othIndex) &&
		                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
		                  return seen.push(othIndex);
		                }
		              })) {
		            result = false;
		            break;
		          }
		        } else if (!(
		              arrValue === othValue ||
		                equalFunc(arrValue, othValue, bitmask, customizer, stack)
		            )) {
		          result = false;
		          break;
		        }
		      }
		      stack['delete'](array);
		      stack['delete'](other);
		      return result;
		    }

		    /**
		     * A specialized version of `baseIsEqualDeep` for comparing objects of
		     * the same `toStringTag`.
		     *
		     * **Note:** This function only supports comparing values with tags of
		     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
		     *
		     * @private
		     * @param {Object} object The object to compare.
		     * @param {Object} other The other object to compare.
		     * @param {string} tag The `toStringTag` of the objects to compare.
		     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
		     * @param {Function} customizer The function to customize comparisons.
		     * @param {Function} equalFunc The function to determine equivalents of values.
		     * @param {Object} stack Tracks traversed `object` and `other` objects.
		     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		     */
		    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
		      switch (tag) {
		        case dataViewTag:
		          if ((object.byteLength != other.byteLength) ||
		              (object.byteOffset != other.byteOffset)) {
		            return false;
		          }
		          object = object.buffer;
		          other = other.buffer;

		        case arrayBufferTag:
		          if ((object.byteLength != other.byteLength) ||
		              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
		            return false;
		          }
		          return true;

		        case boolTag:
		        case dateTag:
		        case numberTag:
		          // Coerce booleans to `1` or `0` and dates to milliseconds.
		          // Invalid dates are coerced to `NaN`.
		          return eq(+object, +other);

		        case errorTag:
		          return object.name == other.name && object.message == other.message;

		        case regexpTag:
		        case stringTag:
		          // Coerce regexes to strings and treat strings, primitives and objects,
		          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
		          // for more details.
		          return object == (other + '');

		        case mapTag:
		          var convert = mapToArray;

		        case setTag:
		          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
		          convert || (convert = setToArray);

		          if (object.size != other.size && !isPartial) {
		            return false;
		          }
		          // Assume cyclic values are equal.
		          var stacked = stack.get(object);
		          if (stacked) {
		            return stacked == other;
		          }
		          bitmask |= COMPARE_UNORDERED_FLAG;

		          // Recursively compare objects (susceptible to call stack limits).
		          stack.set(object, other);
		          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
		          stack['delete'](object);
		          return result;

		        case symbolTag:
		          if (symbolValueOf) {
		            return symbolValueOf.call(object) == symbolValueOf.call(other);
		          }
		      }
		      return false;
		    }

		    /**
		     * A specialized version of `baseIsEqualDeep` for objects with support for
		     * partial deep comparisons.
		     *
		     * @private
		     * @param {Object} object The object to compare.
		     * @param {Object} other The other object to compare.
		     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
		     * @param {Function} customizer The function to customize comparisons.
		     * @param {Function} equalFunc The function to determine equivalents of values.
		     * @param {Object} stack Tracks traversed `object` and `other` objects.
		     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		     */
		    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
		      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
		          objProps = getAllKeys(object),
		          objLength = objProps.length,
		          othProps = getAllKeys(other),
		          othLength = othProps.length;

		      if (objLength != othLength && !isPartial) {
		        return false;
		      }
		      var index = objLength;
		      while (index--) {
		        var key = objProps[index];
		        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
		          return false;
		        }
		      }
		      // Check that cyclic values are equal.
		      var objStacked = stack.get(object);
		      var othStacked = stack.get(other);
		      if (objStacked && othStacked) {
		        return objStacked == other && othStacked == object;
		      }
		      var result = true;
		      stack.set(object, other);
		      stack.set(other, object);

		      var skipCtor = isPartial;
		      while (++index < objLength) {
		        key = objProps[index];
		        var objValue = object[key],
		            othValue = other[key];

		        if (customizer) {
		          var compared = isPartial
		            ? customizer(othValue, objValue, key, other, object, stack)
		            : customizer(objValue, othValue, key, object, other, stack);
		        }
		        // Recursively compare objects (susceptible to call stack limits).
		        if (!(compared === undefined$1
		              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
		              : compared
		            )) {
		          result = false;
		          break;
		        }
		        skipCtor || (skipCtor = key == 'constructor');
		      }
		      if (result && !skipCtor) {
		        var objCtor = object.constructor,
		            othCtor = other.constructor;

		        // Non `Object` object instances with different constructors are not equal.
		        if (objCtor != othCtor &&
		            ('constructor' in object && 'constructor' in other) &&
		            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
		              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
		          result = false;
		        }
		      }
		      stack['delete'](object);
		      stack['delete'](other);
		      return result;
		    }

		    /**
		     * A specialized version of `baseRest` which flattens the rest array.
		     *
		     * @private
		     * @param {Function} func The function to apply a rest parameter to.
		     * @returns {Function} Returns the new function.
		     */
		    function flatRest(func) {
		      return setToString(overRest(func, undefined$1, flatten), func + '');
		    }

		    /**
		     * Creates an array of own enumerable property names and symbols of `object`.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the array of property names and symbols.
		     */
		    function getAllKeys(object) {
		      return baseGetAllKeys(object, keys, getSymbols);
		    }

		    /**
		     * Creates an array of own and inherited enumerable property names and
		     * symbols of `object`.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the array of property names and symbols.
		     */
		    function getAllKeysIn(object) {
		      return baseGetAllKeys(object, keysIn, getSymbolsIn);
		    }

		    /**
		     * Gets metadata for `func`.
		     *
		     * @private
		     * @param {Function} func The function to query.
		     * @returns {*} Returns the metadata for `func`.
		     */
		    var getData = !metaMap ? noop : function(func) {
		      return metaMap.get(func);
		    };

		    /**
		     * Gets the name of `func`.
		     *
		     * @private
		     * @param {Function} func The function to query.
		     * @returns {string} Returns the function name.
		     */
		    function getFuncName(func) {
		      var result = (func.name + ''),
		          array = realNames[result],
		          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

		      while (length--) {
		        var data = array[length],
		            otherFunc = data.func;
		        if (otherFunc == null || otherFunc == func) {
		          return data.name;
		        }
		      }
		      return result;
		    }

		    /**
		     * Gets the argument placeholder value for `func`.
		     *
		     * @private
		     * @param {Function} func The function to inspect.
		     * @returns {*} Returns the placeholder value.
		     */
		    function getHolder(func) {
		      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
		      return object.placeholder;
		    }

		    /**
		     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
		     * this function returns the custom method, otherwise it returns `baseIteratee`.
		     * If arguments are provided, the chosen function is invoked with them and
		     * its result is returned.
		     *
		     * @private
		     * @param {*} [value] The value to convert to an iteratee.
		     * @param {number} [arity] The arity of the created iteratee.
		     * @returns {Function} Returns the chosen function or its result.
		     */
		    function getIteratee() {
		      var result = lodash.iteratee || iteratee;
		      result = result === iteratee ? baseIteratee : result;
		      return arguments.length ? result(arguments[0], arguments[1]) : result;
		    }

		    /**
		     * Gets the data for `map`.
		     *
		     * @private
		     * @param {Object} map The map to query.
		     * @param {string} key The reference key.
		     * @returns {*} Returns the map data.
		     */
		    function getMapData(map, key) {
		      var data = map.__data__;
		      return isKeyable(key)
		        ? data[typeof key == 'string' ? 'string' : 'hash']
		        : data.map;
		    }

		    /**
		     * Gets the property names, values, and compare flags of `object`.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the match data of `object`.
		     */
		    function getMatchData(object) {
		      var result = keys(object),
		          length = result.length;

		      while (length--) {
		        var key = result[length],
		            value = object[key];

		        result[length] = [key, value, isStrictComparable(value)];
		      }
		      return result;
		    }

		    /**
		     * Gets the native function at `key` of `object`.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @param {string} key The key of the method to get.
		     * @returns {*} Returns the function if it's native, else `undefined`.
		     */
		    function getNative(object, key) {
		      var value = getValue(object, key);
		      return baseIsNative(value) ? value : undefined$1;
		    }

		    /**
		     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
		     *
		     * @private
		     * @param {*} value The value to query.
		     * @returns {string} Returns the raw `toStringTag`.
		     */
		    function getRawTag(value) {
		      var isOwn = hasOwnProperty.call(value, symToStringTag),
		          tag = value[symToStringTag];

		      try {
		        value[symToStringTag] = undefined$1;
		        var unmasked = true;
		      } catch (e) {}

		      var result = nativeObjectToString.call(value);
		      if (unmasked) {
		        if (isOwn) {
		          value[symToStringTag] = tag;
		        } else {
		          delete value[symToStringTag];
		        }
		      }
		      return result;
		    }

		    /**
		     * Creates an array of the own enumerable symbols of `object`.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the array of symbols.
		     */
		    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
		      if (object == null) {
		        return [];
		      }
		      object = Object(object);
		      return arrayFilter(nativeGetSymbols(object), function(symbol) {
		        return propertyIsEnumerable.call(object, symbol);
		      });
		    };

		    /**
		     * Creates an array of the own and inherited enumerable symbols of `object`.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the array of symbols.
		     */
		    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
		      var result = [];
		      while (object) {
		        arrayPush(result, getSymbols(object));
		        object = getPrototype(object);
		      }
		      return result;
		    };

		    /**
		     * Gets the `toStringTag` of `value`.
		     *
		     * @private
		     * @param {*} value The value to query.
		     * @returns {string} Returns the `toStringTag`.
		     */
		    var getTag = baseGetTag;

		    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
		    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
		        (Map && getTag(new Map) != mapTag) ||
		        (Promise && getTag(Promise.resolve()) != promiseTag) ||
		        (Set && getTag(new Set) != setTag) ||
		        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
		      getTag = function(value) {
		        var result = baseGetTag(value),
		            Ctor = result == objectTag ? value.constructor : undefined$1,
		            ctorString = Ctor ? toSource(Ctor) : '';

		        if (ctorString) {
		          switch (ctorString) {
		            case dataViewCtorString: return dataViewTag;
		            case mapCtorString: return mapTag;
		            case promiseCtorString: return promiseTag;
		            case setCtorString: return setTag;
		            case weakMapCtorString: return weakMapTag;
		          }
		        }
		        return result;
		      };
		    }

		    /**
		     * Gets the view, applying any `transforms` to the `start` and `end` positions.
		     *
		     * @private
		     * @param {number} start The start of the view.
		     * @param {number} end The end of the view.
		     * @param {Array} transforms The transformations to apply to the view.
		     * @returns {Object} Returns an object containing the `start` and `end`
		     *  positions of the view.
		     */
		    function getView(start, end, transforms) {
		      var index = -1,
		          length = transforms.length;

		      while (++index < length) {
		        var data = transforms[index],
		            size = data.size;

		        switch (data.type) {
		          case 'drop':      start += size; break;
		          case 'dropRight': end -= size; break;
		          case 'take':      end = nativeMin(end, start + size); break;
		          case 'takeRight': start = nativeMax(start, end - size); break;
		        }
		      }
		      return { 'start': start, 'end': end };
		    }

		    /**
		     * Extracts wrapper details from the `source` body comment.
		     *
		     * @private
		     * @param {string} source The source to inspect.
		     * @returns {Array} Returns the wrapper details.
		     */
		    function getWrapDetails(source) {
		      var match = source.match(reWrapDetails);
		      return match ? match[1].split(reSplitDetails) : [];
		    }

		    /**
		     * Checks if `path` exists on `object`.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @param {Array|string} path The path to check.
		     * @param {Function} hasFunc The function to check properties.
		     * @returns {boolean} Returns `true` if `path` exists, else `false`.
		     */
		    function hasPath(object, path, hasFunc) {
		      path = castPath(path, object);

		      var index = -1,
		          length = path.length,
		          result = false;

		      while (++index < length) {
		        var key = toKey(path[index]);
		        if (!(result = object != null && hasFunc(object, key))) {
		          break;
		        }
		        object = object[key];
		      }
		      if (result || ++index != length) {
		        return result;
		      }
		      length = object == null ? 0 : object.length;
		      return !!length && isLength(length) && isIndex(key, length) &&
		        (isArray(object) || isArguments(object));
		    }

		    /**
		     * Initializes an array clone.
		     *
		     * @private
		     * @param {Array} array The array to clone.
		     * @returns {Array} Returns the initialized clone.
		     */
		    function initCloneArray(array) {
		      var length = array.length,
		          result = new array.constructor(length);

		      // Add properties assigned by `RegExp#exec`.
		      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
		        result.index = array.index;
		        result.input = array.input;
		      }
		      return result;
		    }

		    /**
		     * Initializes an object clone.
		     *
		     * @private
		     * @param {Object} object The object to clone.
		     * @returns {Object} Returns the initialized clone.
		     */
		    function initCloneObject(object) {
		      return (typeof object.constructor == 'function' && !isPrototype(object))
		        ? baseCreate(getPrototype(object))
		        : {};
		    }

		    /**
		     * Initializes an object clone based on its `toStringTag`.
		     *
		     * **Note:** This function only supports cloning values with tags of
		     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
		     *
		     * @private
		     * @param {Object} object The object to clone.
		     * @param {string} tag The `toStringTag` of the object to clone.
		     * @param {boolean} [isDeep] Specify a deep clone.
		     * @returns {Object} Returns the initialized clone.
		     */
		    function initCloneByTag(object, tag, isDeep) {
		      var Ctor = object.constructor;
		      switch (tag) {
		        case arrayBufferTag:
		          return cloneArrayBuffer(object);

		        case boolTag:
		        case dateTag:
		          return new Ctor(+object);

		        case dataViewTag:
		          return cloneDataView(object, isDeep);

		        case float32Tag: case float64Tag:
		        case int8Tag: case int16Tag: case int32Tag:
		        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
		          return cloneTypedArray(object, isDeep);

		        case mapTag:
		          return new Ctor;

		        case numberTag:
		        case stringTag:
		          return new Ctor(object);

		        case regexpTag:
		          return cloneRegExp(object);

		        case setTag:
		          return new Ctor;

		        case symbolTag:
		          return cloneSymbol(object);
		      }
		    }

		    /**
		     * Inserts wrapper `details` in a comment at the top of the `source` body.
		     *
		     * @private
		     * @param {string} source The source to modify.
		     * @returns {Array} details The details to insert.
		     * @returns {string} Returns the modified source.
		     */
		    function insertWrapDetails(source, details) {
		      var length = details.length;
		      if (!length) {
		        return source;
		      }
		      var lastIndex = length - 1;
		      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
		      details = details.join(length > 2 ? ', ' : ' ');
		      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
		    }

		    /**
		     * Checks if `value` is a flattenable `arguments` object or array.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
		     */
		    function isFlattenable(value) {
		      return isArray(value) || isArguments(value) ||
		        !!(spreadableSymbol && value && value[spreadableSymbol]);
		    }

		    /**
		     * Checks if `value` is a valid array-like index.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
		     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
		     */
		    function isIndex(value, length) {
		      var type = typeof value;
		      length = length == null ? MAX_SAFE_INTEGER : length;

		      return !!length &&
		        (type == 'number' ||
		          (type != 'symbol' && reIsUint.test(value))) &&
		            (value > -1 && value % 1 == 0 && value < length);
		    }

		    /**
		     * Checks if the given arguments are from an iteratee call.
		     *
		     * @private
		     * @param {*} value The potential iteratee value argument.
		     * @param {*} index The potential iteratee index or key argument.
		     * @param {*} object The potential iteratee object argument.
		     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
		     *  else `false`.
		     */
		    function isIterateeCall(value, index, object) {
		      if (!isObject(object)) {
		        return false;
		      }
		      var type = typeof index;
		      if (type == 'number'
		            ? (isArrayLike(object) && isIndex(index, object.length))
		            : (type == 'string' && index in object)
		          ) {
		        return eq(object[index], value);
		      }
		      return false;
		    }

		    /**
		     * Checks if `value` is a property name and not a property path.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @param {Object} [object] The object to query keys on.
		     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
		     */
		    function isKey(value, object) {
		      if (isArray(value)) {
		        return false;
		      }
		      var type = typeof value;
		      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
		          value == null || isSymbol(value)) {
		        return true;
		      }
		      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
		        (object != null && value in Object(object));
		    }

		    /**
		     * Checks if `value` is suitable for use as unique object key.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
		     */
		    function isKeyable(value) {
		      var type = typeof value;
		      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
		        ? (value !== '__proto__')
		        : (value === null);
		    }

		    /**
		     * Checks if `func` has a lazy counterpart.
		     *
		     * @private
		     * @param {Function} func The function to check.
		     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
		     *  else `false`.
		     */
		    function isLaziable(func) {
		      var funcName = getFuncName(func),
		          other = lodash[funcName];

		      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
		        return false;
		      }
		      if (func === other) {
		        return true;
		      }
		      var data = getData(other);
		      return !!data && func === data[0];
		    }

		    /**
		     * Checks if `func` has its source masked.
		     *
		     * @private
		     * @param {Function} func The function to check.
		     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
		     */
		    function isMasked(func) {
		      return !!maskSrcKey && (maskSrcKey in func);
		    }

		    /**
		     * Checks if `func` is capable of being masked.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
		     */
		    var isMaskable = coreJsData ? isFunction : stubFalse;

		    /**
		     * Checks if `value` is likely a prototype object.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
		     */
		    function isPrototype(value) {
		      var Ctor = value && value.constructor,
		          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

		      return value === proto;
		    }

		    /**
		     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
		     *
		     * @private
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` if suitable for strict
		     *  equality comparisons, else `false`.
		     */
		    function isStrictComparable(value) {
		      return value === value && !isObject(value);
		    }

		    /**
		     * A specialized version of `matchesProperty` for source values suitable
		     * for strict equality comparisons, i.e. `===`.
		     *
		     * @private
		     * @param {string} key The key of the property to get.
		     * @param {*} srcValue The value to match.
		     * @returns {Function} Returns the new spec function.
		     */
		    function matchesStrictComparable(key, srcValue) {
		      return function(object) {
		        if (object == null) {
		          return false;
		        }
		        return object[key] === srcValue &&
		          (srcValue !== undefined$1 || (key in Object(object)));
		      };
		    }

		    /**
		     * A specialized version of `_.memoize` which clears the memoized function's
		     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
		     *
		     * @private
		     * @param {Function} func The function to have its output memoized.
		     * @returns {Function} Returns the new memoized function.
		     */
		    function memoizeCapped(func) {
		      var result = memoize(func, function(key) {
		        if (cache.size === MAX_MEMOIZE_SIZE) {
		          cache.clear();
		        }
		        return key;
		      });

		      var cache = result.cache;
		      return result;
		    }

		    /**
		     * Merges the function metadata of `source` into `data`.
		     *
		     * Merging metadata reduces the number of wrappers used to invoke a function.
		     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
		     * may be applied regardless of execution order. Methods like `_.ary` and
		     * `_.rearg` modify function arguments, making the order in which they are
		     * executed important, preventing the merging of metadata. However, we make
		     * an exception for a safe combined case where curried functions have `_.ary`
		     * and or `_.rearg` applied.
		     *
		     * @private
		     * @param {Array} data The destination metadata.
		     * @param {Array} source The source metadata.
		     * @returns {Array} Returns `data`.
		     */
		    function mergeData(data, source) {
		      var bitmask = data[1],
		          srcBitmask = source[1],
		          newBitmask = bitmask | srcBitmask,
		          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

		      var isCombo =
		        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
		        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
		        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

		      // Exit early if metadata can't be merged.
		      if (!(isCommon || isCombo)) {
		        return data;
		      }
		      // Use source `thisArg` if available.
		      if (srcBitmask & WRAP_BIND_FLAG) {
		        data[2] = source[2];
		        // Set when currying a bound function.
		        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
		      }
		      // Compose partial arguments.
		      var value = source[3];
		      if (value) {
		        var partials = data[3];
		        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
		        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
		      }
		      // Compose partial right arguments.
		      value = source[5];
		      if (value) {
		        partials = data[5];
		        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
		        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
		      }
		      // Use source `argPos` if available.
		      value = source[7];
		      if (value) {
		        data[7] = value;
		      }
		      // Use source `ary` if it's smaller.
		      if (srcBitmask & WRAP_ARY_FLAG) {
		        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
		      }
		      // Use source `arity` if one is not provided.
		      if (data[9] == null) {
		        data[9] = source[9];
		      }
		      // Use source `func` and merge bitmasks.
		      data[0] = source[0];
		      data[1] = newBitmask;

		      return data;
		    }

		    /**
		     * This function is like
		     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
		     * except that it includes inherited enumerable properties.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the array of property names.
		     */
		    function nativeKeysIn(object) {
		      var result = [];
		      if (object != null) {
		        for (var key in Object(object)) {
		          result.push(key);
		        }
		      }
		      return result;
		    }

		    /**
		     * Converts `value` to a string using `Object.prototype.toString`.
		     *
		     * @private
		     * @param {*} value The value to convert.
		     * @returns {string} Returns the converted string.
		     */
		    function objectToString(value) {
		      return nativeObjectToString.call(value);
		    }

		    /**
		     * A specialized version of `baseRest` which transforms the rest array.
		     *
		     * @private
		     * @param {Function} func The function to apply a rest parameter to.
		     * @param {number} [start=func.length-1] The start position of the rest parameter.
		     * @param {Function} transform The rest array transform.
		     * @returns {Function} Returns the new function.
		     */
		    function overRest(func, start, transform) {
		      start = nativeMax(start === undefined$1 ? (func.length - 1) : start, 0);
		      return function() {
		        var args = arguments,
		            index = -1,
		            length = nativeMax(args.length - start, 0),
		            array = Array(length);

		        while (++index < length) {
		          array[index] = args[start + index];
		        }
		        index = -1;
		        var otherArgs = Array(start + 1);
		        while (++index < start) {
		          otherArgs[index] = args[index];
		        }
		        otherArgs[start] = transform(array);
		        return apply(func, this, otherArgs);
		      };
		    }

		    /**
		     * Gets the parent value at `path` of `object`.
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @param {Array} path The path to get the parent value of.
		     * @returns {*} Returns the parent value.
		     */
		    function parent(object, path) {
		      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
		    }

		    /**
		     * Reorder `array` according to the specified indexes where the element at
		     * the first index is assigned as the first element, the element at
		     * the second index is assigned as the second element, and so on.
		     *
		     * @private
		     * @param {Array} array The array to reorder.
		     * @param {Array} indexes The arranged array indexes.
		     * @returns {Array} Returns `array`.
		     */
		    function reorder(array, indexes) {
		      var arrLength = array.length,
		          length = nativeMin(indexes.length, arrLength),
		          oldArray = copyArray(array);

		      while (length--) {
		        var index = indexes[length];
		        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
		      }
		      return array;
		    }

		    /**
		     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
		     *
		     * @private
		     * @param {Object} object The object to query.
		     * @param {string} key The key of the property to get.
		     * @returns {*} Returns the property value.
		     */
		    function safeGet(object, key) {
		      if (key === 'constructor' && typeof object[key] === 'function') {
		        return;
		      }

		      if (key == '__proto__') {
		        return;
		      }

		      return object[key];
		    }

		    /**
		     * Sets metadata for `func`.
		     *
		     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
		     * period of time, it will trip its breaker and transition to an identity
		     * function to avoid garbage collection pauses in V8. See
		     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
		     * for more details.
		     *
		     * @private
		     * @param {Function} func The function to associate metadata with.
		     * @param {*} data The metadata.
		     * @returns {Function} Returns `func`.
		     */
		    var setData = shortOut(baseSetData);

		    /**
		     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
		     *
		     * @private
		     * @param {Function} func The function to delay.
		     * @param {number} wait The number of milliseconds to delay invocation.
		     * @returns {number|Object} Returns the timer id or timeout object.
		     */
		    var setTimeout = ctxSetTimeout || function(func, wait) {
		      return root.setTimeout(func, wait);
		    };

		    /**
		     * Sets the `toString` method of `func` to return `string`.
		     *
		     * @private
		     * @param {Function} func The function to modify.
		     * @param {Function} string The `toString` result.
		     * @returns {Function} Returns `func`.
		     */
		    var setToString = shortOut(baseSetToString);

		    /**
		     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
		     * with wrapper details in a comment at the top of the source body.
		     *
		     * @private
		     * @param {Function} wrapper The function to modify.
		     * @param {Function} reference The reference function.
		     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
		     * @returns {Function} Returns `wrapper`.
		     */
		    function setWrapToString(wrapper, reference, bitmask) {
		      var source = (reference + '');
		      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
		    }

		    /**
		     * Creates a function that'll short out and invoke `identity` instead
		     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
		     * milliseconds.
		     *
		     * @private
		     * @param {Function} func The function to restrict.
		     * @returns {Function} Returns the new shortable function.
		     */
		    function shortOut(func) {
		      var count = 0,
		          lastCalled = 0;

		      return function() {
		        var stamp = nativeNow(),
		            remaining = HOT_SPAN - (stamp - lastCalled);

		        lastCalled = stamp;
		        if (remaining > 0) {
		          if (++count >= HOT_COUNT) {
		            return arguments[0];
		          }
		        } else {
		          count = 0;
		        }
		        return func.apply(undefined$1, arguments);
		      };
		    }

		    /**
		     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
		     *
		     * @private
		     * @param {Array} array The array to shuffle.
		     * @param {number} [size=array.length] The size of `array`.
		     * @returns {Array} Returns `array`.
		     */
		    function shuffleSelf(array, size) {
		      var index = -1,
		          length = array.length,
		          lastIndex = length - 1;

		      size = size === undefined$1 ? length : size;
		      while (++index < size) {
		        var rand = baseRandom(index, lastIndex),
		            value = array[rand];

		        array[rand] = array[index];
		        array[index] = value;
		      }
		      array.length = size;
		      return array;
		    }

		    /**
		     * Converts `string` to a property path array.
		     *
		     * @private
		     * @param {string} string The string to convert.
		     * @returns {Array} Returns the property path array.
		     */
		    var stringToPath = memoizeCapped(function(string) {
		      var result = [];
		      if (string.charCodeAt(0) === 46 /* . */) {
		        result.push('');
		      }
		      string.replace(rePropName, function(match, number, quote, subString) {
		        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
		      });
		      return result;
		    });

		    /**
		     * Converts `value` to a string key if it's not a string or symbol.
		     *
		     * @private
		     * @param {*} value The value to inspect.
		     * @returns {string|symbol} Returns the key.
		     */
		    function toKey(value) {
		      if (typeof value == 'string' || isSymbol(value)) {
		        return value;
		      }
		      var result = (value + '');
		      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
		    }

		    /**
		     * Converts `func` to its source code.
		     *
		     * @private
		     * @param {Function} func The function to convert.
		     * @returns {string} Returns the source code.
		     */
		    function toSource(func) {
		      if (func != null) {
		        try {
		          return funcToString.call(func);
		        } catch (e) {}
		        try {
		          return (func + '');
		        } catch (e) {}
		      }
		      return '';
		    }

		    /**
		     * Updates wrapper `details` based on `bitmask` flags.
		     *
		     * @private
		     * @returns {Array} details The details to modify.
		     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
		     * @returns {Array} Returns `details`.
		     */
		    function updateWrapDetails(details, bitmask) {
		      arrayEach(wrapFlags, function(pair) {
		        var value = '_.' + pair[0];
		        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
		          details.push(value);
		        }
		      });
		      return details.sort();
		    }

		    /**
		     * Creates a clone of `wrapper`.
		     *
		     * @private
		     * @param {Object} wrapper The wrapper to clone.
		     * @returns {Object} Returns the cloned wrapper.
		     */
		    function wrapperClone(wrapper) {
		      if (wrapper instanceof LazyWrapper) {
		        return wrapper.clone();
		      }
		      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
		      result.__actions__ = copyArray(wrapper.__actions__);
		      result.__index__  = wrapper.__index__;
		      result.__values__ = wrapper.__values__;
		      return result;
		    }

		    /*------------------------------------------------------------------------*/

		    /**
		     * Creates an array of elements split into groups the length of `size`.
		     * If `array` can't be split evenly, the final chunk will be the remaining
		     * elements.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Array
		     * @param {Array} array The array to process.
		     * @param {number} [size=1] The length of each chunk
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {Array} Returns the new array of chunks.
		     * @example
		     *
		     * _.chunk(['a', 'b', 'c', 'd'], 2);
		     * // => [['a', 'b'], ['c', 'd']]
		     *
		     * _.chunk(['a', 'b', 'c', 'd'], 3);
		     * // => [['a', 'b', 'c'], ['d']]
		     */
		    function chunk(array, size, guard) {
		      if ((guard ? isIterateeCall(array, size, guard) : size === undefined$1)) {
		        size = 1;
		      } else {
		        size = nativeMax(toInteger(size), 0);
		      }
		      var length = array == null ? 0 : array.length;
		      if (!length || size < 1) {
		        return [];
		      }
		      var index = 0,
		          resIndex = 0,
		          result = Array(nativeCeil(length / size));

		      while (index < length) {
		        result[resIndex++] = baseSlice(array, index, (index += size));
		      }
		      return result;
		    }

		    /**
		     * Creates an array with all falsey values removed. The values `false`, `null`,
		     * `0`, `""`, `undefined`, and `NaN` are falsey.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {Array} array The array to compact.
		     * @returns {Array} Returns the new array of filtered values.
		     * @example
		     *
		     * _.compact([0, 1, false, 2, '', 3]);
		     * // => [1, 2, 3]
		     */
		    function compact(array) {
		      var index = -1,
		          length = array == null ? 0 : array.length,
		          resIndex = 0,
		          result = [];

		      while (++index < length) {
		        var value = array[index];
		        if (value) {
		          result[resIndex++] = value;
		        }
		      }
		      return result;
		    }

		    /**
		     * Creates a new array concatenating `array` with any additional arrays
		     * and/or values.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to concatenate.
		     * @param {...*} [values] The values to concatenate.
		     * @returns {Array} Returns the new concatenated array.
		     * @example
		     *
		     * var array = [1];
		     * var other = _.concat(array, 2, [3], [[4]]);
		     *
		     * console.log(other);
		     * // => [1, 2, 3, [4]]
		     *
		     * console.log(array);
		     * // => [1]
		     */
		    function concat() {
		      var length = arguments.length;
		      if (!length) {
		        return [];
		      }
		      var args = Array(length - 1),
		          array = arguments[0],
		          index = length;

		      while (index--) {
		        args[index - 1] = arguments[index];
		      }
		      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
		    }

		    /**
		     * Creates an array of `array` values not included in the other given arrays
		     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		     * for equality comparisons. The order and references of result values are
		     * determined by the first array.
		     *
		     * **Note:** Unlike `_.pullAll`, this method returns a new array.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {...Array} [values] The values to exclude.
		     * @returns {Array} Returns the new array of filtered values.
		     * @see _.without, _.xor
		     * @example
		     *
		     * _.difference([2, 1], [2, 3]);
		     * // => [1]
		     */
		    var difference = baseRest(function(array, values) {
		      return isArrayLikeObject(array)
		        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
		        : [];
		    });

		    /**
		     * This method is like `_.difference` except that it accepts `iteratee` which
		     * is invoked for each element of `array` and `values` to generate the criterion
		     * by which they're compared. The order and references of result values are
		     * determined by the first array. The iteratee is invoked with one argument:
		     * (value).
		     *
		     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {...Array} [values] The values to exclude.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {Array} Returns the new array of filtered values.
		     * @example
		     *
		     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
		     * // => [1.2]
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
		     * // => [{ 'x': 2 }]
		     */
		    var differenceBy = baseRest(function(array, values) {
		      var iteratee = last(values);
		      if (isArrayLikeObject(iteratee)) {
		        iteratee = undefined$1;
		      }
		      return isArrayLikeObject(array)
		        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
		        : [];
		    });

		    /**
		     * This method is like `_.difference` except that it accepts `comparator`
		     * which is invoked to compare elements of `array` to `values`. The order and
		     * references of result values are determined by the first array. The comparator
		     * is invoked with two arguments: (arrVal, othVal).
		     *
		     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {...Array} [values] The values to exclude.
		     * @param {Function} [comparator] The comparator invoked per element.
		     * @returns {Array} Returns the new array of filtered values.
		     * @example
		     *
		     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
		     *
		     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
		     * // => [{ 'x': 2, 'y': 1 }]
		     */
		    var differenceWith = baseRest(function(array, values) {
		      var comparator = last(values);
		      if (isArrayLikeObject(comparator)) {
		        comparator = undefined$1;
		      }
		      return isArrayLikeObject(array)
		        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined$1, comparator)
		        : [];
		    });

		    /**
		     * Creates a slice of `array` with `n` elements dropped from the beginning.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.5.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @param {number} [n=1] The number of elements to drop.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {Array} Returns the slice of `array`.
		     * @example
		     *
		     * _.drop([1, 2, 3]);
		     * // => [2, 3]
		     *
		     * _.drop([1, 2, 3], 2);
		     * // => [3]
		     *
		     * _.drop([1, 2, 3], 5);
		     * // => []
		     *
		     * _.drop([1, 2, 3], 0);
		     * // => [1, 2, 3]
		     */
		    function drop(array, n, guard) {
		      var length = array == null ? 0 : array.length;
		      if (!length) {
		        return [];
		      }
		      n = (guard || n === undefined$1) ? 1 : toInteger(n);
		      return baseSlice(array, n < 0 ? 0 : n, length);
		    }

		    /**
		     * Creates a slice of `array` with `n` elements dropped from the end.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @param {number} [n=1] The number of elements to drop.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {Array} Returns the slice of `array`.
		     * @example
		     *
		     * _.dropRight([1, 2, 3]);
		     * // => [1, 2]
		     *
		     * _.dropRight([1, 2, 3], 2);
		     * // => [1]
		     *
		     * _.dropRight([1, 2, 3], 5);
		     * // => []
		     *
		     * _.dropRight([1, 2, 3], 0);
		     * // => [1, 2, 3]
		     */
		    function dropRight(array, n, guard) {
		      var length = array == null ? 0 : array.length;
		      if (!length) {
		        return [];
		      }
		      n = (guard || n === undefined$1) ? 1 : toInteger(n);
		      n = length - n;
		      return baseSlice(array, 0, n < 0 ? 0 : n);
		    }

		    /**
		     * Creates a slice of `array` excluding elements dropped from the end.
		     * Elements are dropped until `predicate` returns falsey. The predicate is
		     * invoked with three arguments: (value, index, array).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the slice of `array`.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney',  'active': true },
		     *   { 'user': 'fred',    'active': false },
		     *   { 'user': 'pebbles', 'active': false }
		     * ];
		     *
		     * _.dropRightWhile(users, function(o) { return !o.active; });
		     * // => objects for ['barney']
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
		     * // => objects for ['barney', 'fred']
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.dropRightWhile(users, ['active', false]);
		     * // => objects for ['barney']
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.dropRightWhile(users, 'active');
		     * // => objects for ['barney', 'fred', 'pebbles']
		     */
		    function dropRightWhile(array, predicate) {
		      return (array && array.length)
		        ? baseWhile(array, getIteratee(predicate, 3), true, true)
		        : [];
		    }

		    /**
		     * Creates a slice of `array` excluding elements dropped from the beginning.
		     * Elements are dropped until `predicate` returns falsey. The predicate is
		     * invoked with three arguments: (value, index, array).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the slice of `array`.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney',  'active': false },
		     *   { 'user': 'fred',    'active': false },
		     *   { 'user': 'pebbles', 'active': true }
		     * ];
		     *
		     * _.dropWhile(users, function(o) { return !o.active; });
		     * // => objects for ['pebbles']
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.dropWhile(users, { 'user': 'barney', 'active': false });
		     * // => objects for ['fred', 'pebbles']
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.dropWhile(users, ['active', false]);
		     * // => objects for ['pebbles']
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.dropWhile(users, 'active');
		     * // => objects for ['barney', 'fred', 'pebbles']
		     */
		    function dropWhile(array, predicate) {
		      return (array && array.length)
		        ? baseWhile(array, getIteratee(predicate, 3), true)
		        : [];
		    }

		    /**
		     * Fills elements of `array` with `value` from `start` up to, but not
		     * including, `end`.
		     *
		     * **Note:** This method mutates `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.2.0
		     * @category Array
		     * @param {Array} array The array to fill.
		     * @param {*} value The value to fill `array` with.
		     * @param {number} [start=0] The start position.
		     * @param {number} [end=array.length] The end position.
		     * @returns {Array} Returns `array`.
		     * @example
		     *
		     * var array = [1, 2, 3];
		     *
		     * _.fill(array, 'a');
		     * console.log(array);
		     * // => ['a', 'a', 'a']
		     *
		     * _.fill(Array(3), 2);
		     * // => [2, 2, 2]
		     *
		     * _.fill([4, 6, 8, 10], '*', 1, 3);
		     * // => [4, '*', '*', 10]
		     */
		    function fill(array, value, start, end) {
		      var length = array == null ? 0 : array.length;
		      if (!length) {
		        return [];
		      }
		      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
		        start = 0;
		        end = length;
		      }
		      return baseFill(array, value, start, end);
		    }

		    /**
		     * This method is like `_.find` except that it returns the index of the first
		     * element `predicate` returns truthy for instead of the element itself.
		     *
		     * @static
		     * @memberOf _
		     * @since 1.1.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @param {number} [fromIndex=0] The index to search from.
		     * @returns {number} Returns the index of the found element, else `-1`.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney',  'active': false },
		     *   { 'user': 'fred',    'active': false },
		     *   { 'user': 'pebbles', 'active': true }
		     * ];
		     *
		     * _.findIndex(users, function(o) { return o.user == 'barney'; });
		     * // => 0
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.findIndex(users, { 'user': 'fred', 'active': false });
		     * // => 1
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.findIndex(users, ['active', false]);
		     * // => 0
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.findIndex(users, 'active');
		     * // => 2
		     */
		    function findIndex(array, predicate, fromIndex) {
		      var length = array == null ? 0 : array.length;
		      if (!length) {
		        return -1;
		      }
		      var index = fromIndex == null ? 0 : toInteger(fromIndex);
		      if (index < 0) {
		        index = nativeMax(length + index, 0);
		      }
		      return baseFindIndex(array, getIteratee(predicate, 3), index);
		    }

		    /**
		     * This method is like `_.findIndex` except that it iterates over elements
		     * of `collection` from right to left.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.0.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @param {number} [fromIndex=array.length-1] The index to search from.
		     * @returns {number} Returns the index of the found element, else `-1`.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney',  'active': true },
		     *   { 'user': 'fred',    'active': false },
		     *   { 'user': 'pebbles', 'active': false }
		     * ];
		     *
		     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
		     * // => 2
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
		     * // => 0
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.findLastIndex(users, ['active', false]);
		     * // => 2
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.findLastIndex(users, 'active');
		     * // => 0
		     */
		    function findLastIndex(array, predicate, fromIndex) {
		      var length = array == null ? 0 : array.length;
		      if (!length) {
		        return -1;
		      }
		      var index = length - 1;
		      if (fromIndex !== undefined$1) {
		        index = toInteger(fromIndex);
		        index = fromIndex < 0
		          ? nativeMax(length + index, 0)
		          : nativeMin(index, length - 1);
		      }
		      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
		    }

		    /**
		     * Flattens `array` a single level deep.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {Array} array The array to flatten.
		     * @returns {Array} Returns the new flattened array.
		     * @example
		     *
		     * _.flatten([1, [2, [3, [4]], 5]]);
		     * // => [1, 2, [3, [4]], 5]
		     */
		    function flatten(array) {
		      var length = array == null ? 0 : array.length;
		      return length ? baseFlatten(array, 1) : [];
		    }

		    /**
		     * Recursively flattens `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Array
		     * @param {Array} array The array to flatten.
		     * @returns {Array} Returns the new flattened array.
		     * @example
		     *
		     * _.flattenDeep([1, [2, [3, [4]], 5]]);
		     * // => [1, 2, 3, 4, 5]
		     */
		    function flattenDeep(array) {
		      var length = array == null ? 0 : array.length;
		      return length ? baseFlatten(array, INFINITY) : [];
		    }

		    /**
		     * Recursively flatten `array` up to `depth` times.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.4.0
		     * @category Array
		     * @param {Array} array The array to flatten.
		     * @param {number} [depth=1] The maximum recursion depth.
		     * @returns {Array} Returns the new flattened array.
		     * @example
		     *
		     * var array = [1, [2, [3, [4]], 5]];
		     *
		     * _.flattenDepth(array, 1);
		     * // => [1, 2, [3, [4]], 5]
		     *
		     * _.flattenDepth(array, 2);
		     * // => [1, 2, 3, [4], 5]
		     */
		    function flattenDepth(array, depth) {
		      var length = array == null ? 0 : array.length;
		      if (!length) {
		        return [];
		      }
		      depth = depth === undefined$1 ? 1 : toInteger(depth);
		      return baseFlatten(array, depth);
		    }

		    /**
		     * The inverse of `_.toPairs`; this method returns an object composed
		     * from key-value `pairs`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} pairs The key-value pairs.
		     * @returns {Object} Returns the new object.
		     * @example
		     *
		     * _.fromPairs([['a', 1], ['b', 2]]);
		     * // => { 'a': 1, 'b': 2 }
		     */
		    function fromPairs(pairs) {
		      var index = -1,
		          length = pairs == null ? 0 : pairs.length,
		          result = {};

		      while (++index < length) {
		        var pair = pairs[index];
		        result[pair[0]] = pair[1];
		      }
		      return result;
		    }

		    /**
		     * Gets the first element of `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @alias first
		     * @category Array
		     * @param {Array} array The array to query.
		     * @returns {*} Returns the first element of `array`.
		     * @example
		     *
		     * _.head([1, 2, 3]);
		     * // => 1
		     *
		     * _.head([]);
		     * // => undefined
		     */
		    function head(array) {
		      return (array && array.length) ? array[0] : undefined$1;
		    }

		    /**
		     * Gets the index at which the first occurrence of `value` is found in `array`
		     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		     * for equality comparisons. If `fromIndex` is negative, it's used as the
		     * offset from the end of `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {*} value The value to search for.
		     * @param {number} [fromIndex=0] The index to search from.
		     * @returns {number} Returns the index of the matched value, else `-1`.
		     * @example
		     *
		     * _.indexOf([1, 2, 1, 2], 2);
		     * // => 1
		     *
		     * // Search from the `fromIndex`.
		     * _.indexOf([1, 2, 1, 2], 2, 2);
		     * // => 3
		     */
		    function indexOf(array, value, fromIndex) {
		      var length = array == null ? 0 : array.length;
		      if (!length) {
		        return -1;
		      }
		      var index = fromIndex == null ? 0 : toInteger(fromIndex);
		      if (index < 0) {
		        index = nativeMax(length + index, 0);
		      }
		      return baseIndexOf(array, value, index);
		    }

		    /**
		     * Gets all but the last element of `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @returns {Array} Returns the slice of `array`.
		     * @example
		     *
		     * _.initial([1, 2, 3]);
		     * // => [1, 2]
		     */
		    function initial(array) {
		      var length = array == null ? 0 : array.length;
		      return length ? baseSlice(array, 0, -1) : [];
		    }

		    /**
		     * Creates an array of unique values that are included in all given arrays
		     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		     * for equality comparisons. The order and references of result values are
		     * determined by the first array.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {...Array} [arrays] The arrays to inspect.
		     * @returns {Array} Returns the new array of intersecting values.
		     * @example
		     *
		     * _.intersection([2, 1], [2, 3]);
		     * // => [2]
		     */
		    var intersection = baseRest(function(arrays) {
		      var mapped = arrayMap(arrays, castArrayLikeObject);
		      return (mapped.length && mapped[0] === arrays[0])
		        ? baseIntersection(mapped)
		        : [];
		    });

		    /**
		     * This method is like `_.intersection` except that it accepts `iteratee`
		     * which is invoked for each element of each `arrays` to generate the criterion
		     * by which they're compared. The order and references of result values are
		     * determined by the first array. The iteratee is invoked with one argument:
		     * (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {...Array} [arrays] The arrays to inspect.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {Array} Returns the new array of intersecting values.
		     * @example
		     *
		     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
		     * // => [2.1]
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
		     * // => [{ 'x': 1 }]
		     */
		    var intersectionBy = baseRest(function(arrays) {
		      var iteratee = last(arrays),
		          mapped = arrayMap(arrays, castArrayLikeObject);

		      if (iteratee === last(mapped)) {
		        iteratee = undefined$1;
		      } else {
		        mapped.pop();
		      }
		      return (mapped.length && mapped[0] === arrays[0])
		        ? baseIntersection(mapped, getIteratee(iteratee, 2))
		        : [];
		    });

		    /**
		     * This method is like `_.intersection` except that it accepts `comparator`
		     * which is invoked to compare elements of `arrays`. The order and references
		     * of result values are determined by the first array. The comparator is
		     * invoked with two arguments: (arrVal, othVal).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {...Array} [arrays] The arrays to inspect.
		     * @param {Function} [comparator] The comparator invoked per element.
		     * @returns {Array} Returns the new array of intersecting values.
		     * @example
		     *
		     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
		     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
		     *
		     * _.intersectionWith(objects, others, _.isEqual);
		     * // => [{ 'x': 1, 'y': 2 }]
		     */
		    var intersectionWith = baseRest(function(arrays) {
		      var comparator = last(arrays),
		          mapped = arrayMap(arrays, castArrayLikeObject);

		      comparator = typeof comparator == 'function' ? comparator : undefined$1;
		      if (comparator) {
		        mapped.pop();
		      }
		      return (mapped.length && mapped[0] === arrays[0])
		        ? baseIntersection(mapped, undefined$1, comparator)
		        : [];
		    });

		    /**
		     * Converts all elements in `array` into a string separated by `separator`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to convert.
		     * @param {string} [separator=','] The element separator.
		     * @returns {string} Returns the joined string.
		     * @example
		     *
		     * _.join(['a', 'b', 'c'], '~');
		     * // => 'a~b~c'
		     */
		    function join(array, separator) {
		      return array == null ? '' : nativeJoin.call(array, separator);
		    }

		    /**
		     * Gets the last element of `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @returns {*} Returns the last element of `array`.
		     * @example
		     *
		     * _.last([1, 2, 3]);
		     * // => 3
		     */
		    function last(array) {
		      var length = array == null ? 0 : array.length;
		      return length ? array[length - 1] : undefined$1;
		    }

		    /**
		     * This method is like `_.indexOf` except that it iterates over elements of
		     * `array` from right to left.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {*} value The value to search for.
		     * @param {number} [fromIndex=array.length-1] The index to search from.
		     * @returns {number} Returns the index of the matched value, else `-1`.
		     * @example
		     *
		     * _.lastIndexOf([1, 2, 1, 2], 2);
		     * // => 3
		     *
		     * // Search from the `fromIndex`.
		     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
		     * // => 1
		     */
		    function lastIndexOf(array, value, fromIndex) {
		      var length = array == null ? 0 : array.length;
		      if (!length) {
		        return -1;
		      }
		      var index = length;
		      if (fromIndex !== undefined$1) {
		        index = toInteger(fromIndex);
		        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
		      }
		      return value === value
		        ? strictLastIndexOf(array, value, index)
		        : baseFindIndex(array, baseIsNaN, index, true);
		    }

		    /**
		     * Gets the element at index `n` of `array`. If `n` is negative, the nth
		     * element from the end is returned.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.11.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @param {number} [n=0] The index of the element to return.
		     * @returns {*} Returns the nth element of `array`.
		     * @example
		     *
		     * var array = ['a', 'b', 'c', 'd'];
		     *
		     * _.nth(array, 1);
		     * // => 'b'
		     *
		     * _.nth(array, -2);
		     * // => 'c';
		     */
		    function nth(array, n) {
		      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined$1;
		    }

		    /**
		     * Removes all given values from `array` using
		     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		     * for equality comparisons.
		     *
		     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
		     * to remove elements from an array by predicate.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.0.0
		     * @category Array
		     * @param {Array} array The array to modify.
		     * @param {...*} [values] The values to remove.
		     * @returns {Array} Returns `array`.
		     * @example
		     *
		     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
		     *
		     * _.pull(array, 'a', 'c');
		     * console.log(array);
		     * // => ['b', 'b']
		     */
		    var pull = baseRest(pullAll);

		    /**
		     * This method is like `_.pull` except that it accepts an array of values to remove.
		     *
		     * **Note:** Unlike `_.difference`, this method mutates `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to modify.
		     * @param {Array} values The values to remove.
		     * @returns {Array} Returns `array`.
		     * @example
		     *
		     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
		     *
		     * _.pullAll(array, ['a', 'c']);
		     * console.log(array);
		     * // => ['b', 'b']
		     */
		    function pullAll(array, values) {
		      return (array && array.length && values && values.length)
		        ? basePullAll(array, values)
		        : array;
		    }

		    /**
		     * This method is like `_.pullAll` except that it accepts `iteratee` which is
		     * invoked for each element of `array` and `values` to generate the criterion
		     * by which they're compared. The iteratee is invoked with one argument: (value).
		     *
		     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to modify.
		     * @param {Array} values The values to remove.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {Array} Returns `array`.
		     * @example
		     *
		     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
		     *
		     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
		     * console.log(array);
		     * // => [{ 'x': 2 }]
		     */
		    function pullAllBy(array, values, iteratee) {
		      return (array && array.length && values && values.length)
		        ? basePullAll(array, values, getIteratee(iteratee, 2))
		        : array;
		    }

		    /**
		     * This method is like `_.pullAll` except that it accepts `comparator` which
		     * is invoked to compare elements of `array` to `values`. The comparator is
		     * invoked with two arguments: (arrVal, othVal).
		     *
		     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.6.0
		     * @category Array
		     * @param {Array} array The array to modify.
		     * @param {Array} values The values to remove.
		     * @param {Function} [comparator] The comparator invoked per element.
		     * @returns {Array} Returns `array`.
		     * @example
		     *
		     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
		     *
		     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
		     * console.log(array);
		     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
		     */
		    function pullAllWith(array, values, comparator) {
		      return (array && array.length && values && values.length)
		        ? basePullAll(array, values, undefined$1, comparator)
		        : array;
		    }

		    /**
		     * Removes elements from `array` corresponding to `indexes` and returns an
		     * array of removed elements.
		     *
		     * **Note:** Unlike `_.at`, this method mutates `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Array
		     * @param {Array} array The array to modify.
		     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
		     * @returns {Array} Returns the new array of removed elements.
		     * @example
		     *
		     * var array = ['a', 'b', 'c', 'd'];
		     * var pulled = _.pullAt(array, [1, 3]);
		     *
		     * console.log(array);
		     * // => ['a', 'c']
		     *
		     * console.log(pulled);
		     * // => ['b', 'd']
		     */
		    var pullAt = flatRest(function(array, indexes) {
		      var length = array == null ? 0 : array.length,
		          result = baseAt(array, indexes);

		      basePullAt(array, arrayMap(indexes, function(index) {
		        return isIndex(index, length) ? +index : index;
		      }).sort(compareAscending));

		      return result;
		    });

		    /**
		     * Removes all elements from `array` that `predicate` returns truthy for
		     * and returns an array of the removed elements. The predicate is invoked
		     * with three arguments: (value, index, array).
		     *
		     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
		     * to pull elements from an array by value.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.0.0
		     * @category Array
		     * @param {Array} array The array to modify.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the new array of removed elements.
		     * @example
		     *
		     * var array = [1, 2, 3, 4];
		     * var evens = _.remove(array, function(n) {
		     *   return n % 2 == 0;
		     * });
		     *
		     * console.log(array);
		     * // => [1, 3]
		     *
		     * console.log(evens);
		     * // => [2, 4]
		     */
		    function remove(array, predicate) {
		      var result = [];
		      if (!(array && array.length)) {
		        return result;
		      }
		      var index = -1,
		          indexes = [],
		          length = array.length;

		      predicate = getIteratee(predicate, 3);
		      while (++index < length) {
		        var value = array[index];
		        if (predicate(value, index, array)) {
		          result.push(value);
		          indexes.push(index);
		        }
		      }
		      basePullAt(array, indexes);
		      return result;
		    }

		    /**
		     * Reverses `array` so that the first element becomes the last, the second
		     * element becomes the second to last, and so on.
		     *
		     * **Note:** This method mutates `array` and is based on
		     * [`Array#reverse`](https://mdn.io/Array/reverse).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to modify.
		     * @returns {Array} Returns `array`.
		     * @example
		     *
		     * var array = [1, 2, 3];
		     *
		     * _.reverse(array);
		     * // => [3, 2, 1]
		     *
		     * console.log(array);
		     * // => [3, 2, 1]
		     */
		    function reverse(array) {
		      return array == null ? array : nativeReverse.call(array);
		    }

		    /**
		     * Creates a slice of `array` from `start` up to, but not including, `end`.
		     *
		     * **Note:** This method is used instead of
		     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
		     * returned.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Array
		     * @param {Array} array The array to slice.
		     * @param {number} [start=0] The start position.
		     * @param {number} [end=array.length] The end position.
		     * @returns {Array} Returns the slice of `array`.
		     */
		    function slice(array, start, end) {
		      var length = array == null ? 0 : array.length;
		      if (!length) {
		        return [];
		      }
		      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
		        start = 0;
		        end = length;
		      }
		      else {
		        start = start == null ? 0 : toInteger(start);
		        end = end === undefined$1 ? length : toInteger(end);
		      }
		      return baseSlice(array, start, end);
		    }

		    /**
		     * Uses a binary search to determine the lowest index at which `value`
		     * should be inserted into `array` in order to maintain its sort order.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {Array} array The sorted array to inspect.
		     * @param {*} value The value to evaluate.
		     * @returns {number} Returns the index at which `value` should be inserted
		     *  into `array`.
		     * @example
		     *
		     * _.sortedIndex([30, 50], 40);
		     * // => 1
		     */
		    function sortedIndex(array, value) {
		      return baseSortedIndex(array, value);
		    }

		    /**
		     * This method is like `_.sortedIndex` except that it accepts `iteratee`
		     * which is invoked for `value` and each element of `array` to compute their
		     * sort ranking. The iteratee is invoked with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The sorted array to inspect.
		     * @param {*} value The value to evaluate.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {number} Returns the index at which `value` should be inserted
		     *  into `array`.
		     * @example
		     *
		     * var objects = [{ 'x': 4 }, { 'x': 5 }];
		     *
		     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
		     * // => 0
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
		     * // => 0
		     */
		    function sortedIndexBy(array, value, iteratee) {
		      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
		    }

		    /**
		     * This method is like `_.indexOf` except that it performs a binary
		     * search on a sorted `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {*} value The value to search for.
		     * @returns {number} Returns the index of the matched value, else `-1`.
		     * @example
		     *
		     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
		     * // => 1
		     */
		    function sortedIndexOf(array, value) {
		      var length = array == null ? 0 : array.length;
		      if (length) {
		        var index = baseSortedIndex(array, value);
		        if (index < length && eq(array[index], value)) {
		          return index;
		        }
		      }
		      return -1;
		    }

		    /**
		     * This method is like `_.sortedIndex` except that it returns the highest
		     * index at which `value` should be inserted into `array` in order to
		     * maintain its sort order.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Array
		     * @param {Array} array The sorted array to inspect.
		     * @param {*} value The value to evaluate.
		     * @returns {number} Returns the index at which `value` should be inserted
		     *  into `array`.
		     * @example
		     *
		     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
		     * // => 4
		     */
		    function sortedLastIndex(array, value) {
		      return baseSortedIndex(array, value, true);
		    }

		    /**
		     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
		     * which is invoked for `value` and each element of `array` to compute their
		     * sort ranking. The iteratee is invoked with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The sorted array to inspect.
		     * @param {*} value The value to evaluate.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {number} Returns the index at which `value` should be inserted
		     *  into `array`.
		     * @example
		     *
		     * var objects = [{ 'x': 4 }, { 'x': 5 }];
		     *
		     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
		     * // => 1
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
		     * // => 1
		     */
		    function sortedLastIndexBy(array, value, iteratee) {
		      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
		    }

		    /**
		     * This method is like `_.lastIndexOf` except that it performs a binary
		     * search on a sorted `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {*} value The value to search for.
		     * @returns {number} Returns the index of the matched value, else `-1`.
		     * @example
		     *
		     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
		     * // => 3
		     */
		    function sortedLastIndexOf(array, value) {
		      var length = array == null ? 0 : array.length;
		      if (length) {
		        var index = baseSortedIndex(array, value, true) - 1;
		        if (eq(array[index], value)) {
		          return index;
		        }
		      }
		      return -1;
		    }

		    /**
		     * This method is like `_.uniq` except that it's designed and optimized
		     * for sorted arrays.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @returns {Array} Returns the new duplicate free array.
		     * @example
		     *
		     * _.sortedUniq([1, 1, 2]);
		     * // => [1, 2]
		     */
		    function sortedUniq(array) {
		      return (array && array.length)
		        ? baseSortedUniq(array)
		        : [];
		    }

		    /**
		     * This method is like `_.uniqBy` except that it's designed and optimized
		     * for sorted arrays.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {Function} [iteratee] The iteratee invoked per element.
		     * @returns {Array} Returns the new duplicate free array.
		     * @example
		     *
		     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
		     * // => [1.1, 2.3]
		     */
		    function sortedUniqBy(array, iteratee) {
		      return (array && array.length)
		        ? baseSortedUniq(array, getIteratee(iteratee, 2))
		        : [];
		    }

		    /**
		     * Gets all but the first element of `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @returns {Array} Returns the slice of `array`.
		     * @example
		     *
		     * _.tail([1, 2, 3]);
		     * // => [2, 3]
		     */
		    function tail(array) {
		      var length = array == null ? 0 : array.length;
		      return length ? baseSlice(array, 1, length) : [];
		    }

		    /**
		     * Creates a slice of `array` with `n` elements taken from the beginning.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @param {number} [n=1] The number of elements to take.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {Array} Returns the slice of `array`.
		     * @example
		     *
		     * _.take([1, 2, 3]);
		     * // => [1]
		     *
		     * _.take([1, 2, 3], 2);
		     * // => [1, 2]
		     *
		     * _.take([1, 2, 3], 5);
		     * // => [1, 2, 3]
		     *
		     * _.take([1, 2, 3], 0);
		     * // => []
		     */
		    function take(array, n, guard) {
		      if (!(array && array.length)) {
		        return [];
		      }
		      n = (guard || n === undefined$1) ? 1 : toInteger(n);
		      return baseSlice(array, 0, n < 0 ? 0 : n);
		    }

		    /**
		     * Creates a slice of `array` with `n` elements taken from the end.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @param {number} [n=1] The number of elements to take.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {Array} Returns the slice of `array`.
		     * @example
		     *
		     * _.takeRight([1, 2, 3]);
		     * // => [3]
		     *
		     * _.takeRight([1, 2, 3], 2);
		     * // => [2, 3]
		     *
		     * _.takeRight([1, 2, 3], 5);
		     * // => [1, 2, 3]
		     *
		     * _.takeRight([1, 2, 3], 0);
		     * // => []
		     */
		    function takeRight(array, n, guard) {
		      var length = array == null ? 0 : array.length;
		      if (!length) {
		        return [];
		      }
		      n = (guard || n === undefined$1) ? 1 : toInteger(n);
		      n = length - n;
		      return baseSlice(array, n < 0 ? 0 : n, length);
		    }

		    /**
		     * Creates a slice of `array` with elements taken from the end. Elements are
		     * taken until `predicate` returns falsey. The predicate is invoked with
		     * three arguments: (value, index, array).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the slice of `array`.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney',  'active': true },
		     *   { 'user': 'fred',    'active': false },
		     *   { 'user': 'pebbles', 'active': false }
		     * ];
		     *
		     * _.takeRightWhile(users, function(o) { return !o.active; });
		     * // => objects for ['fred', 'pebbles']
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
		     * // => objects for ['pebbles']
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.takeRightWhile(users, ['active', false]);
		     * // => objects for ['fred', 'pebbles']
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.takeRightWhile(users, 'active');
		     * // => []
		     */
		    function takeRightWhile(array, predicate) {
		      return (array && array.length)
		        ? baseWhile(array, getIteratee(predicate, 3), false, true)
		        : [];
		    }

		    /**
		     * Creates a slice of `array` with elements taken from the beginning. Elements
		     * are taken until `predicate` returns falsey. The predicate is invoked with
		     * three arguments: (value, index, array).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Array
		     * @param {Array} array The array to query.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the slice of `array`.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney',  'active': false },
		     *   { 'user': 'fred',    'active': false },
		     *   { 'user': 'pebbles', 'active': true }
		     * ];
		     *
		     * _.takeWhile(users, function(o) { return !o.active; });
		     * // => objects for ['barney', 'fred']
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.takeWhile(users, { 'user': 'barney', 'active': false });
		     * // => objects for ['barney']
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.takeWhile(users, ['active', false]);
		     * // => objects for ['barney', 'fred']
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.takeWhile(users, 'active');
		     * // => []
		     */
		    function takeWhile(array, predicate) {
		      return (array && array.length)
		        ? baseWhile(array, getIteratee(predicate, 3))
		        : [];
		    }

		    /**
		     * Creates an array of unique values, in order, from all given arrays using
		     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		     * for equality comparisons.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {...Array} [arrays] The arrays to inspect.
		     * @returns {Array} Returns the new array of combined values.
		     * @example
		     *
		     * _.union([2], [1, 2]);
		     * // => [2, 1]
		     */
		    var union = baseRest(function(arrays) {
		      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
		    });

		    /**
		     * This method is like `_.union` except that it accepts `iteratee` which is
		     * invoked for each element of each `arrays` to generate the criterion by
		     * which uniqueness is computed. Result values are chosen from the first
		     * array in which the value occurs. The iteratee is invoked with one argument:
		     * (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {...Array} [arrays] The arrays to inspect.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {Array} Returns the new array of combined values.
		     * @example
		     *
		     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
		     * // => [2.1, 1.2]
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
		     * // => [{ 'x': 1 }, { 'x': 2 }]
		     */
		    var unionBy = baseRest(function(arrays) {
		      var iteratee = last(arrays);
		      if (isArrayLikeObject(iteratee)) {
		        iteratee = undefined$1;
		      }
		      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
		    });

		    /**
		     * This method is like `_.union` except that it accepts `comparator` which
		     * is invoked to compare elements of `arrays`. Result values are chosen from
		     * the first array in which the value occurs. The comparator is invoked
		     * with two arguments: (arrVal, othVal).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {...Array} [arrays] The arrays to inspect.
		     * @param {Function} [comparator] The comparator invoked per element.
		     * @returns {Array} Returns the new array of combined values.
		     * @example
		     *
		     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
		     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
		     *
		     * _.unionWith(objects, others, _.isEqual);
		     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
		     */
		    var unionWith = baseRest(function(arrays) {
		      var comparator = last(arrays);
		      comparator = typeof comparator == 'function' ? comparator : undefined$1;
		      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
		    });

		    /**
		     * Creates a duplicate-free version of an array, using
		     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		     * for equality comparisons, in which only the first occurrence of each element
		     * is kept. The order of result values is determined by the order they occur
		     * in the array.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @returns {Array} Returns the new duplicate free array.
		     * @example
		     *
		     * _.uniq([2, 1, 2]);
		     * // => [2, 1]
		     */
		    function uniq(array) {
		      return (array && array.length) ? baseUniq(array) : [];
		    }

		    /**
		     * This method is like `_.uniq` except that it accepts `iteratee` which is
		     * invoked for each element in `array` to generate the criterion by which
		     * uniqueness is computed. The order of result values is determined by the
		     * order they occur in the array. The iteratee is invoked with one argument:
		     * (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {Array} Returns the new duplicate free array.
		     * @example
		     *
		     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
		     * // => [2.1, 1.2]
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
		     * // => [{ 'x': 1 }, { 'x': 2 }]
		     */
		    function uniqBy(array, iteratee) {
		      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
		    }

		    /**
		     * This method is like `_.uniq` except that it accepts `comparator` which
		     * is invoked to compare elements of `array`. The order of result values is
		     * determined by the order they occur in the array.The comparator is invoked
		     * with two arguments: (arrVal, othVal).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {Function} [comparator] The comparator invoked per element.
		     * @returns {Array} Returns the new duplicate free array.
		     * @example
		     *
		     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
		     *
		     * _.uniqWith(objects, _.isEqual);
		     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
		     */
		    function uniqWith(array, comparator) {
		      comparator = typeof comparator == 'function' ? comparator : undefined$1;
		      return (array && array.length) ? baseUniq(array, undefined$1, comparator) : [];
		    }

		    /**
		     * This method is like `_.zip` except that it accepts an array of grouped
		     * elements and creates an array regrouping the elements to their pre-zip
		     * configuration.
		     *
		     * @static
		     * @memberOf _
		     * @since 1.2.0
		     * @category Array
		     * @param {Array} array The array of grouped elements to process.
		     * @returns {Array} Returns the new array of regrouped elements.
		     * @example
		     *
		     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
		     * // => [['a', 1, true], ['b', 2, false]]
		     *
		     * _.unzip(zipped);
		     * // => [['a', 'b'], [1, 2], [true, false]]
		     */
		    function unzip(array) {
		      if (!(array && array.length)) {
		        return [];
		      }
		      var length = 0;
		      array = arrayFilter(array, function(group) {
		        if (isArrayLikeObject(group)) {
		          length = nativeMax(group.length, length);
		          return true;
		        }
		      });
		      return baseTimes(length, function(index) {
		        return arrayMap(array, baseProperty(index));
		      });
		    }

		    /**
		     * This method is like `_.unzip` except that it accepts `iteratee` to specify
		     * how regrouped values should be combined. The iteratee is invoked with the
		     * elements of each group: (...group).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.8.0
		     * @category Array
		     * @param {Array} array The array of grouped elements to process.
		     * @param {Function} [iteratee=_.identity] The function to combine
		     *  regrouped values.
		     * @returns {Array} Returns the new array of regrouped elements.
		     * @example
		     *
		     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
		     * // => [[1, 10, 100], [2, 20, 200]]
		     *
		     * _.unzipWith(zipped, _.add);
		     * // => [3, 30, 300]
		     */
		    function unzipWith(array, iteratee) {
		      if (!(array && array.length)) {
		        return [];
		      }
		      var result = unzip(array);
		      if (iteratee == null) {
		        return result;
		      }
		      return arrayMap(result, function(group) {
		        return apply(iteratee, undefined$1, group);
		      });
		    }

		    /**
		     * Creates an array excluding all given values using
		     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		     * for equality comparisons.
		     *
		     * **Note:** Unlike `_.pull`, this method returns a new array.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {Array} array The array to inspect.
		     * @param {...*} [values] The values to exclude.
		     * @returns {Array} Returns the new array of filtered values.
		     * @see _.difference, _.xor
		     * @example
		     *
		     * _.without([2, 1, 2, 3], 1, 2);
		     * // => [3]
		     */
		    var without = baseRest(function(array, values) {
		      return isArrayLikeObject(array)
		        ? baseDifference(array, values)
		        : [];
		    });

		    /**
		     * Creates an array of unique values that is the
		     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
		     * of the given arrays. The order of result values is determined by the order
		     * they occur in the arrays.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.4.0
		     * @category Array
		     * @param {...Array} [arrays] The arrays to inspect.
		     * @returns {Array} Returns the new array of filtered values.
		     * @see _.difference, _.without
		     * @example
		     *
		     * _.xor([2, 1], [2, 3]);
		     * // => [1, 3]
		     */
		    var xor = baseRest(function(arrays) {
		      return baseXor(arrayFilter(arrays, isArrayLikeObject));
		    });

		    /**
		     * This method is like `_.xor` except that it accepts `iteratee` which is
		     * invoked for each element of each `arrays` to generate the criterion by
		     * which by which they're compared. The order of result values is determined
		     * by the order they occur in the arrays. The iteratee is invoked with one
		     * argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {...Array} [arrays] The arrays to inspect.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {Array} Returns the new array of filtered values.
		     * @example
		     *
		     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
		     * // => [1.2, 3.4]
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
		     * // => [{ 'x': 2 }]
		     */
		    var xorBy = baseRest(function(arrays) {
		      var iteratee = last(arrays);
		      if (isArrayLikeObject(iteratee)) {
		        iteratee = undefined$1;
		      }
		      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
		    });

		    /**
		     * This method is like `_.xor` except that it accepts `comparator` which is
		     * invoked to compare elements of `arrays`. The order of result values is
		     * determined by the order they occur in the arrays. The comparator is invoked
		     * with two arguments: (arrVal, othVal).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Array
		     * @param {...Array} [arrays] The arrays to inspect.
		     * @param {Function} [comparator] The comparator invoked per element.
		     * @returns {Array} Returns the new array of filtered values.
		     * @example
		     *
		     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
		     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
		     *
		     * _.xorWith(objects, others, _.isEqual);
		     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
		     */
		    var xorWith = baseRest(function(arrays) {
		      var comparator = last(arrays);
		      comparator = typeof comparator == 'function' ? comparator : undefined$1;
		      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
		    });

		    /**
		     * Creates an array of grouped elements, the first of which contains the
		     * first elements of the given arrays, the second of which contains the
		     * second elements of the given arrays, and so on.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Array
		     * @param {...Array} [arrays] The arrays to process.
		     * @returns {Array} Returns the new array of grouped elements.
		     * @example
		     *
		     * _.zip(['a', 'b'], [1, 2], [true, false]);
		     * // => [['a', 1, true], ['b', 2, false]]
		     */
		    var zip = baseRest(unzip);

		    /**
		     * This method is like `_.fromPairs` except that it accepts two arrays,
		     * one of property identifiers and one of corresponding values.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.4.0
		     * @category Array
		     * @param {Array} [props=[]] The property identifiers.
		     * @param {Array} [values=[]] The property values.
		     * @returns {Object} Returns the new object.
		     * @example
		     *
		     * _.zipObject(['a', 'b'], [1, 2]);
		     * // => { 'a': 1, 'b': 2 }
		     */
		    function zipObject(props, values) {
		      return baseZipObject(props || [], values || [], assignValue);
		    }

		    /**
		     * This method is like `_.zipObject` except that it supports property paths.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.1.0
		     * @category Array
		     * @param {Array} [props=[]] The property identifiers.
		     * @param {Array} [values=[]] The property values.
		     * @returns {Object} Returns the new object.
		     * @example
		     *
		     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
		     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
		     */
		    function zipObjectDeep(props, values) {
		      return baseZipObject(props || [], values || [], baseSet);
		    }

		    /**
		     * This method is like `_.zip` except that it accepts `iteratee` to specify
		     * how grouped values should be combined. The iteratee is invoked with the
		     * elements of each group: (...group).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.8.0
		     * @category Array
		     * @param {...Array} [arrays] The arrays to process.
		     * @param {Function} [iteratee=_.identity] The function to combine
		     *  grouped values.
		     * @returns {Array} Returns the new array of grouped elements.
		     * @example
		     *
		     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
		     *   return a + b + c;
		     * });
		     * // => [111, 222]
		     */
		    var zipWith = baseRest(function(arrays) {
		      var length = arrays.length,
		          iteratee = length > 1 ? arrays[length - 1] : undefined$1;

		      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined$1;
		      return unzipWith(arrays, iteratee);
		    });

		    /*------------------------------------------------------------------------*/

		    /**
		     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
		     * chain sequences enabled. The result of such sequences must be unwrapped
		     * with `_#value`.
		     *
		     * @static
		     * @memberOf _
		     * @since 1.3.0
		     * @category Seq
		     * @param {*} value The value to wrap.
		     * @returns {Object} Returns the new `lodash` wrapper instance.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney',  'age': 36 },
		     *   { 'user': 'fred',    'age': 40 },
		     *   { 'user': 'pebbles', 'age': 1 }
		     * ];
		     *
		     * var youngest = _
		     *   .chain(users)
		     *   .sortBy('age')
		     *   .map(function(o) {
		     *     return o.user + ' is ' + o.age;
		     *   })
		     *   .head()
		     *   .value();
		     * // => 'pebbles is 1'
		     */
		    function chain(value) {
		      var result = lodash(value);
		      result.__chain__ = true;
		      return result;
		    }

		    /**
		     * This method invokes `interceptor` and returns `value`. The interceptor
		     * is invoked with one argument; (value). The purpose of this method is to
		     * "tap into" a method chain sequence in order to modify intermediate results.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Seq
		     * @param {*} value The value to provide to `interceptor`.
		     * @param {Function} interceptor The function to invoke.
		     * @returns {*} Returns `value`.
		     * @example
		     *
		     * _([1, 2, 3])
		     *  .tap(function(array) {
		     *    // Mutate input array.
		     *    array.pop();
		     *  })
		     *  .reverse()
		     *  .value();
		     * // => [2, 1]
		     */
		    function tap(value, interceptor) {
		      interceptor(value);
		      return value;
		    }

		    /**
		     * This method is like `_.tap` except that it returns the result of `interceptor`.
		     * The purpose of this method is to "pass thru" values replacing intermediate
		     * results in a method chain sequence.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Seq
		     * @param {*} value The value to provide to `interceptor`.
		     * @param {Function} interceptor The function to invoke.
		     * @returns {*} Returns the result of `interceptor`.
		     * @example
		     *
		     * _('  abc  ')
		     *  .chain()
		     *  .trim()
		     *  .thru(function(value) {
		     *    return [value];
		     *  })
		     *  .value();
		     * // => ['abc']
		     */
		    function thru(value, interceptor) {
		      return interceptor(value);
		    }

		    /**
		     * This method is the wrapper version of `_.at`.
		     *
		     * @name at
		     * @memberOf _
		     * @since 1.0.0
		     * @category Seq
		     * @param {...(string|string[])} [paths] The property paths to pick.
		     * @returns {Object} Returns the new `lodash` wrapper instance.
		     * @example
		     *
		     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
		     *
		     * _(object).at(['a[0].b.c', 'a[1]']).value();
		     * // => [3, 4]
		     */
		    var wrapperAt = flatRest(function(paths) {
		      var length = paths.length,
		          start = length ? paths[0] : 0,
		          value = this.__wrapped__,
		          interceptor = function(object) { return baseAt(object, paths); };

		      if (length > 1 || this.__actions__.length ||
		          !(value instanceof LazyWrapper) || !isIndex(start)) {
		        return this.thru(interceptor);
		      }
		      value = value.slice(start, +start + (length ? 1 : 0));
		      value.__actions__.push({
		        'func': thru,
		        'args': [interceptor],
		        'thisArg': undefined$1
		      });
		      return new LodashWrapper(value, this.__chain__).thru(function(array) {
		        if (length && !array.length) {
		          array.push(undefined$1);
		        }
		        return array;
		      });
		    });

		    /**
		     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
		     *
		     * @name chain
		     * @memberOf _
		     * @since 0.1.0
		     * @category Seq
		     * @returns {Object} Returns the new `lodash` wrapper instance.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney', 'age': 36 },
		     *   { 'user': 'fred',   'age': 40 }
		     * ];
		     *
		     * // A sequence without explicit chaining.
		     * _(users).head();
		     * // => { 'user': 'barney', 'age': 36 }
		     *
		     * // A sequence with explicit chaining.
		     * _(users)
		     *   .chain()
		     *   .head()
		     *   .pick('user')
		     *   .value();
		     * // => { 'user': 'barney' }
		     */
		    function wrapperChain() {
		      return chain(this);
		    }

		    /**
		     * Executes the chain sequence and returns the wrapped result.
		     *
		     * @name commit
		     * @memberOf _
		     * @since 3.2.0
		     * @category Seq
		     * @returns {Object} Returns the new `lodash` wrapper instance.
		     * @example
		     *
		     * var array = [1, 2];
		     * var wrapped = _(array).push(3);
		     *
		     * console.log(array);
		     * // => [1, 2]
		     *
		     * wrapped = wrapped.commit();
		     * console.log(array);
		     * // => [1, 2, 3]
		     *
		     * wrapped.last();
		     * // => 3
		     *
		     * console.log(array);
		     * // => [1, 2, 3]
		     */
		    function wrapperCommit() {
		      return new LodashWrapper(this.value(), this.__chain__);
		    }

		    /**
		     * Gets the next value on a wrapped object following the
		     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
		     *
		     * @name next
		     * @memberOf _
		     * @since 4.0.0
		     * @category Seq
		     * @returns {Object} Returns the next iterator value.
		     * @example
		     *
		     * var wrapped = _([1, 2]);
		     *
		     * wrapped.next();
		     * // => { 'done': false, 'value': 1 }
		     *
		     * wrapped.next();
		     * // => { 'done': false, 'value': 2 }
		     *
		     * wrapped.next();
		     * // => { 'done': true, 'value': undefined }
		     */
		    function wrapperNext() {
		      if (this.__values__ === undefined$1) {
		        this.__values__ = toArray(this.value());
		      }
		      var done = this.__index__ >= this.__values__.length,
		          value = done ? undefined$1 : this.__values__[this.__index__++];

		      return { 'done': done, 'value': value };
		    }

		    /**
		     * Enables the wrapper to be iterable.
		     *
		     * @name Symbol.iterator
		     * @memberOf _
		     * @since 4.0.0
		     * @category Seq
		     * @returns {Object} Returns the wrapper object.
		     * @example
		     *
		     * var wrapped = _([1, 2]);
		     *
		     * wrapped[Symbol.iterator]() === wrapped;
		     * // => true
		     *
		     * Array.from(wrapped);
		     * // => [1, 2]
		     */
		    function wrapperToIterator() {
		      return this;
		    }

		    /**
		     * Creates a clone of the chain sequence planting `value` as the wrapped value.
		     *
		     * @name plant
		     * @memberOf _
		     * @since 3.2.0
		     * @category Seq
		     * @param {*} value The value to plant.
		     * @returns {Object} Returns the new `lodash` wrapper instance.
		     * @example
		     *
		     * function square(n) {
		     *   return n * n;
		     * }
		     *
		     * var wrapped = _([1, 2]).map(square);
		     * var other = wrapped.plant([3, 4]);
		     *
		     * other.value();
		     * // => [9, 16]
		     *
		     * wrapped.value();
		     * // => [1, 4]
		     */
		    function wrapperPlant(value) {
		      var result,
		          parent = this;

		      while (parent instanceof baseLodash) {
		        var clone = wrapperClone(parent);
		        clone.__index__ = 0;
		        clone.__values__ = undefined$1;
		        if (result) {
		          previous.__wrapped__ = clone;
		        } else {
		          result = clone;
		        }
		        var previous = clone;
		        parent = parent.__wrapped__;
		      }
		      previous.__wrapped__ = value;
		      return result;
		    }

		    /**
		     * This method is the wrapper version of `_.reverse`.
		     *
		     * **Note:** This method mutates the wrapped array.
		     *
		     * @name reverse
		     * @memberOf _
		     * @since 0.1.0
		     * @category Seq
		     * @returns {Object} Returns the new `lodash` wrapper instance.
		     * @example
		     *
		     * var array = [1, 2, 3];
		     *
		     * _(array).reverse().value()
		     * // => [3, 2, 1]
		     *
		     * console.log(array);
		     * // => [3, 2, 1]
		     */
		    function wrapperReverse() {
		      var value = this.__wrapped__;
		      if (value instanceof LazyWrapper) {
		        var wrapped = value;
		        if (this.__actions__.length) {
		          wrapped = new LazyWrapper(this);
		        }
		        wrapped = wrapped.reverse();
		        wrapped.__actions__.push({
		          'func': thru,
		          'args': [reverse],
		          'thisArg': undefined$1
		        });
		        return new LodashWrapper(wrapped, this.__chain__);
		      }
		      return this.thru(reverse);
		    }

		    /**
		     * Executes the chain sequence to resolve the unwrapped value.
		     *
		     * @name value
		     * @memberOf _
		     * @since 0.1.0
		     * @alias toJSON, valueOf
		     * @category Seq
		     * @returns {*} Returns the resolved unwrapped value.
		     * @example
		     *
		     * _([1, 2, 3]).value();
		     * // => [1, 2, 3]
		     */
		    function wrapperValue() {
		      return baseWrapperValue(this.__wrapped__, this.__actions__);
		    }

		    /*------------------------------------------------------------------------*/

		    /**
		     * Creates an object composed of keys generated from the results of running
		     * each element of `collection` thru `iteratee`. The corresponding value of
		     * each key is the number of times the key was returned by `iteratee`. The
		     * iteratee is invoked with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 0.5.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
		     * @returns {Object} Returns the composed aggregate object.
		     * @example
		     *
		     * _.countBy([6.1, 4.2, 6.3], Math.floor);
		     * // => { '4': 1, '6': 2 }
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.countBy(['one', 'two', 'three'], 'length');
		     * // => { '3': 2, '5': 1 }
		     */
		    var countBy = createAggregator(function(result, value, key) {
		      if (hasOwnProperty.call(result, key)) {
		        ++result[key];
		      } else {
		        baseAssignValue(result, key, 1);
		      }
		    });

		    /**
		     * Checks if `predicate` returns truthy for **all** elements of `collection`.
		     * Iteration is stopped once `predicate` returns falsey. The predicate is
		     * invoked with three arguments: (value, index|key, collection).
		     *
		     * **Note:** This method returns `true` for
		     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
		     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
		     * elements of empty collections.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {boolean} Returns `true` if all elements pass the predicate check,
		     *  else `false`.
		     * @example
		     *
		     * _.every([true, 1, null, 'yes'], Boolean);
		     * // => false
		     *
		     * var users = [
		     *   { 'user': 'barney', 'age': 36, 'active': false },
		     *   { 'user': 'fred',   'age': 40, 'active': false }
		     * ];
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.every(users, { 'user': 'barney', 'active': false });
		     * // => false
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.every(users, ['active', false]);
		     * // => true
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.every(users, 'active');
		     * // => false
		     */
		    function every(collection, predicate, guard) {
		      var func = isArray(collection) ? arrayEvery : baseEvery;
		      if (guard && isIterateeCall(collection, predicate, guard)) {
		        predicate = undefined$1;
		      }
		      return func(collection, getIteratee(predicate, 3));
		    }

		    /**
		     * Iterates over elements of `collection`, returning an array of all elements
		     * `predicate` returns truthy for. The predicate is invoked with three
		     * arguments: (value, index|key, collection).
		     *
		     * **Note:** Unlike `_.remove`, this method returns a new array.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the new filtered array.
		     * @see _.reject
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney', 'age': 36, 'active': true },
		     *   { 'user': 'fred',   'age': 40, 'active': false }
		     * ];
		     *
		     * _.filter(users, function(o) { return !o.active; });
		     * // => objects for ['fred']
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.filter(users, { 'age': 36, 'active': true });
		     * // => objects for ['barney']
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.filter(users, ['active', false]);
		     * // => objects for ['fred']
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.filter(users, 'active');
		     * // => objects for ['barney']
		     *
		     * // Combining several predicates using `_.overEvery` or `_.overSome`.
		     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
		     * // => objects for ['fred', 'barney']
		     */
		    function filter(collection, predicate) {
		      var func = isArray(collection) ? arrayFilter : baseFilter;
		      return func(collection, getIteratee(predicate, 3));
		    }

		    /**
		     * Iterates over elements of `collection`, returning the first element
		     * `predicate` returns truthy for. The predicate is invoked with three
		     * arguments: (value, index|key, collection).
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to inspect.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @param {number} [fromIndex=0] The index to search from.
		     * @returns {*} Returns the matched element, else `undefined`.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney',  'age': 36, 'active': true },
		     *   { 'user': 'fred',    'age': 40, 'active': false },
		     *   { 'user': 'pebbles', 'age': 1,  'active': true }
		     * ];
		     *
		     * _.find(users, function(o) { return o.age < 40; });
		     * // => object for 'barney'
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.find(users, { 'age': 1, 'active': true });
		     * // => object for 'pebbles'
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.find(users, ['active', false]);
		     * // => object for 'fred'
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.find(users, 'active');
		     * // => object for 'barney'
		     */
		    var find = createFind(findIndex);

		    /**
		     * This method is like `_.find` except that it iterates over elements of
		     * `collection` from right to left.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.0.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to inspect.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @param {number} [fromIndex=collection.length-1] The index to search from.
		     * @returns {*} Returns the matched element, else `undefined`.
		     * @example
		     *
		     * _.findLast([1, 2, 3, 4], function(n) {
		     *   return n % 2 == 1;
		     * });
		     * // => 3
		     */
		    var findLast = createFind(findLastIndex);

		    /**
		     * Creates a flattened array of values by running each element in `collection`
		     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
		     * with three arguments: (value, index|key, collection).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the new flattened array.
		     * @example
		     *
		     * function duplicate(n) {
		     *   return [n, n];
		     * }
		     *
		     * _.flatMap([1, 2], duplicate);
		     * // => [1, 1, 2, 2]
		     */
		    function flatMap(collection, iteratee) {
		      return baseFlatten(map(collection, iteratee), 1);
		    }

		    /**
		     * This method is like `_.flatMap` except that it recursively flattens the
		     * mapped results.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.7.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the new flattened array.
		     * @example
		     *
		     * function duplicate(n) {
		     *   return [[[n, n]]];
		     * }
		     *
		     * _.flatMapDeep([1, 2], duplicate);
		     * // => [1, 1, 2, 2]
		     */
		    function flatMapDeep(collection, iteratee) {
		      return baseFlatten(map(collection, iteratee), INFINITY);
		    }

		    /**
		     * This method is like `_.flatMap` except that it recursively flattens the
		     * mapped results up to `depth` times.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.7.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @param {number} [depth=1] The maximum recursion depth.
		     * @returns {Array} Returns the new flattened array.
		     * @example
		     *
		     * function duplicate(n) {
		     *   return [[[n, n]]];
		     * }
		     *
		     * _.flatMapDepth([1, 2], duplicate, 2);
		     * // => [[1, 1], [2, 2]]
		     */
		    function flatMapDepth(collection, iteratee, depth) {
		      depth = depth === undefined$1 ? 1 : toInteger(depth);
		      return baseFlatten(map(collection, iteratee), depth);
		    }

		    /**
		     * Iterates over elements of `collection` and invokes `iteratee` for each element.
		     * The iteratee is invoked with three arguments: (value, index|key, collection).
		     * Iteratee functions may exit iteration early by explicitly returning `false`.
		     *
		     * **Note:** As with other "Collections" methods, objects with a "length"
		     * property are iterated like arrays. To avoid this behavior use `_.forIn`
		     * or `_.forOwn` for object iteration.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @alias each
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Array|Object} Returns `collection`.
		     * @see _.forEachRight
		     * @example
		     *
		     * _.forEach([1, 2], function(value) {
		     *   console.log(value);
		     * });
		     * // => Logs `1` then `2`.
		     *
		     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
		     *   console.log(key);
		     * });
		     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
		     */
		    function forEach(collection, iteratee) {
		      var func = isArray(collection) ? arrayEach : baseEach;
		      return func(collection, getIteratee(iteratee, 3));
		    }

		    /**
		     * This method is like `_.forEach` except that it iterates over elements of
		     * `collection` from right to left.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.0.0
		     * @alias eachRight
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Array|Object} Returns `collection`.
		     * @see _.forEach
		     * @example
		     *
		     * _.forEachRight([1, 2], function(value) {
		     *   console.log(value);
		     * });
		     * // => Logs `2` then `1`.
		     */
		    function forEachRight(collection, iteratee) {
		      var func = isArray(collection) ? arrayEachRight : baseEachRight;
		      return func(collection, getIteratee(iteratee, 3));
		    }

		    /**
		     * Creates an object composed of keys generated from the results of running
		     * each element of `collection` thru `iteratee`. The order of grouped values
		     * is determined by the order they occur in `collection`. The corresponding
		     * value of each key is an array of elements responsible for generating the
		     * key. The iteratee is invoked with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
		     * @returns {Object} Returns the composed aggregate object.
		     * @example
		     *
		     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
		     * // => { '4': [4.2], '6': [6.1, 6.3] }
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.groupBy(['one', 'two', 'three'], 'length');
		     * // => { '3': ['one', 'two'], '5': ['three'] }
		     */
		    var groupBy = createAggregator(function(result, value, key) {
		      if (hasOwnProperty.call(result, key)) {
		        result[key].push(value);
		      } else {
		        baseAssignValue(result, key, [value]);
		      }
		    });

		    /**
		     * Checks if `value` is in `collection`. If `collection` is a string, it's
		     * checked for a substring of `value`, otherwise
		     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		     * is used for equality comparisons. If `fromIndex` is negative, it's used as
		     * the offset from the end of `collection`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object|string} collection The collection to inspect.
		     * @param {*} value The value to search for.
		     * @param {number} [fromIndex=0] The index to search from.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
		     * @returns {boolean} Returns `true` if `value` is found, else `false`.
		     * @example
		     *
		     * _.includes([1, 2, 3], 1);
		     * // => true
		     *
		     * _.includes([1, 2, 3], 1, 2);
		     * // => false
		     *
		     * _.includes({ 'a': 1, 'b': 2 }, 1);
		     * // => true
		     *
		     * _.includes('abcd', 'bc');
		     * // => true
		     */
		    function includes(collection, value, fromIndex, guard) {
		      collection = isArrayLike(collection) ? collection : values(collection);
		      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

		      var length = collection.length;
		      if (fromIndex < 0) {
		        fromIndex = nativeMax(length + fromIndex, 0);
		      }
		      return isString(collection)
		        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
		        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
		    }

		    /**
		     * Invokes the method at `path` of each element in `collection`, returning
		     * an array of the results of each invoked method. Any additional arguments
		     * are provided to each invoked method. If `path` is a function, it's invoked
		     * for, and `this` bound to, each element in `collection`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Array|Function|string} path The path of the method to invoke or
		     *  the function invoked per iteration.
		     * @param {...*} [args] The arguments to invoke each method with.
		     * @returns {Array} Returns the array of results.
		     * @example
		     *
		     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
		     * // => [[1, 5, 7], [1, 2, 3]]
		     *
		     * _.invokeMap([123, 456], String.prototype.split, '');
		     * // => [['1', '2', '3'], ['4', '5', '6']]
		     */
		    var invokeMap = baseRest(function(collection, path, args) {
		      var index = -1,
		          isFunc = typeof path == 'function',
		          result = isArrayLike(collection) ? Array(collection.length) : [];

		      baseEach(collection, function(value) {
		        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
		      });
		      return result;
		    });

		    /**
		     * Creates an object composed of keys generated from the results of running
		     * each element of `collection` thru `iteratee`. The corresponding value of
		     * each key is the last element responsible for generating the key. The
		     * iteratee is invoked with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
		     * @returns {Object} Returns the composed aggregate object.
		     * @example
		     *
		     * var array = [
		     *   { 'dir': 'left', 'code': 97 },
		     *   { 'dir': 'right', 'code': 100 }
		     * ];
		     *
		     * _.keyBy(array, function(o) {
		     *   return String.fromCharCode(o.code);
		     * });
		     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
		     *
		     * _.keyBy(array, 'dir');
		     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
		     */
		    var keyBy = createAggregator(function(result, value, key) {
		      baseAssignValue(result, key, value);
		    });

		    /**
		     * Creates an array of values by running each element in `collection` thru
		     * `iteratee`. The iteratee is invoked with three arguments:
		     * (value, index|key, collection).
		     *
		     * Many lodash methods are guarded to work as iteratees for methods like
		     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
		     *
		     * The guarded methods are:
		     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
		     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
		     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
		     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the new mapped array.
		     * @example
		     *
		     * function square(n) {
		     *   return n * n;
		     * }
		     *
		     * _.map([4, 8], square);
		     * // => [16, 64]
		     *
		     * _.map({ 'a': 4, 'b': 8 }, square);
		     * // => [16, 64] (iteration order is not guaranteed)
		     *
		     * var users = [
		     *   { 'user': 'barney' },
		     *   { 'user': 'fred' }
		     * ];
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.map(users, 'user');
		     * // => ['barney', 'fred']
		     */
		    function map(collection, iteratee) {
		      var func = isArray(collection) ? arrayMap : baseMap;
		      return func(collection, getIteratee(iteratee, 3));
		    }

		    /**
		     * This method is like `_.sortBy` except that it allows specifying the sort
		     * orders of the iteratees to sort by. If `orders` is unspecified, all values
		     * are sorted in ascending order. Otherwise, specify an order of "desc" for
		     * descending or "asc" for ascending sort order of corresponding values.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
		     *  The iteratees to sort by.
		     * @param {string[]} [orders] The sort orders of `iteratees`.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
		     * @returns {Array} Returns the new sorted array.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'fred',   'age': 48 },
		     *   { 'user': 'barney', 'age': 34 },
		     *   { 'user': 'fred',   'age': 40 },
		     *   { 'user': 'barney', 'age': 36 }
		     * ];
		     *
		     * // Sort by `user` in ascending order and by `age` in descending order.
		     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
		     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
		     */
		    function orderBy(collection, iteratees, orders, guard) {
		      if (collection == null) {
		        return [];
		      }
		      if (!isArray(iteratees)) {
		        iteratees = iteratees == null ? [] : [iteratees];
		      }
		      orders = guard ? undefined$1 : orders;
		      if (!isArray(orders)) {
		        orders = orders == null ? [] : [orders];
		      }
		      return baseOrderBy(collection, iteratees, orders);
		    }

		    /**
		     * Creates an array of elements split into two groups, the first of which
		     * contains elements `predicate` returns truthy for, the second of which
		     * contains elements `predicate` returns falsey for. The predicate is
		     * invoked with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the array of grouped elements.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney',  'age': 36, 'active': false },
		     *   { 'user': 'fred',    'age': 40, 'active': true },
		     *   { 'user': 'pebbles', 'age': 1,  'active': false }
		     * ];
		     *
		     * _.partition(users, function(o) { return o.active; });
		     * // => objects for [['fred'], ['barney', 'pebbles']]
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.partition(users, { 'age': 1, 'active': false });
		     * // => objects for [['pebbles'], ['barney', 'fred']]
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.partition(users, ['active', false]);
		     * // => objects for [['barney', 'pebbles'], ['fred']]
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.partition(users, 'active');
		     * // => objects for [['fred'], ['barney', 'pebbles']]
		     */
		    var partition = createAggregator(function(result, value, key) {
		      result[key ? 0 : 1].push(value);
		    }, function() { return [[], []]; });

		    /**
		     * Reduces `collection` to a value which is the accumulated result of running
		     * each element in `collection` thru `iteratee`, where each successive
		     * invocation is supplied the return value of the previous. If `accumulator`
		     * is not given, the first element of `collection` is used as the initial
		     * value. The iteratee is invoked with four arguments:
		     * (accumulator, value, index|key, collection).
		     *
		     * Many lodash methods are guarded to work as iteratees for methods like
		     * `_.reduce`, `_.reduceRight`, and `_.transform`.
		     *
		     * The guarded methods are:
		     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
		     * and `sortBy`
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @param {*} [accumulator] The initial value.
		     * @returns {*} Returns the accumulated value.
		     * @see _.reduceRight
		     * @example
		     *
		     * _.reduce([1, 2], function(sum, n) {
		     *   return sum + n;
		     * }, 0);
		     * // => 3
		     *
		     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
		     *   (result[value] || (result[value] = [])).push(key);
		     *   return result;
		     * }, {});
		     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
		     */
		    function reduce(collection, iteratee, accumulator) {
		      var func = isArray(collection) ? arrayReduce : baseReduce,
		          initAccum = arguments.length < 3;

		      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
		    }

		    /**
		     * This method is like `_.reduce` except that it iterates over elements of
		     * `collection` from right to left.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @param {*} [accumulator] The initial value.
		     * @returns {*} Returns the accumulated value.
		     * @see _.reduce
		     * @example
		     *
		     * var array = [[0, 1], [2, 3], [4, 5]];
		     *
		     * _.reduceRight(array, function(flattened, other) {
		     *   return flattened.concat(other);
		     * }, []);
		     * // => [4, 5, 2, 3, 0, 1]
		     */
		    function reduceRight(collection, iteratee, accumulator) {
		      var func = isArray(collection) ? arrayReduceRight : baseReduce,
		          initAccum = arguments.length < 3;

		      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
		    }

		    /**
		     * The opposite of `_.filter`; this method returns the elements of `collection`
		     * that `predicate` does **not** return truthy for.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the new filtered array.
		     * @see _.filter
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney', 'age': 36, 'active': false },
		     *   { 'user': 'fred',   'age': 40, 'active': true }
		     * ];
		     *
		     * _.reject(users, function(o) { return !o.active; });
		     * // => objects for ['fred']
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.reject(users, { 'age': 40, 'active': true });
		     * // => objects for ['barney']
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.reject(users, ['active', false]);
		     * // => objects for ['fred']
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.reject(users, 'active');
		     * // => objects for ['barney']
		     */
		    function reject(collection, predicate) {
		      var func = isArray(collection) ? arrayFilter : baseFilter;
		      return func(collection, negate(getIteratee(predicate, 3)));
		    }

		    /**
		     * Gets a random element from `collection`.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.0.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to sample.
		     * @returns {*} Returns the random element.
		     * @example
		     *
		     * _.sample([1, 2, 3, 4]);
		     * // => 2
		     */
		    function sample(collection) {
		      var func = isArray(collection) ? arraySample : baseSample;
		      return func(collection);
		    }

		    /**
		     * Gets `n` random elements at unique keys from `collection` up to the
		     * size of `collection`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to sample.
		     * @param {number} [n=1] The number of elements to sample.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {Array} Returns the random elements.
		     * @example
		     *
		     * _.sampleSize([1, 2, 3], 2);
		     * // => [3, 1]
		     *
		     * _.sampleSize([1, 2, 3], 4);
		     * // => [2, 3, 1]
		     */
		    function sampleSize(collection, n, guard) {
		      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined$1)) {
		        n = 1;
		      } else {
		        n = toInteger(n);
		      }
		      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
		      return func(collection, n);
		    }

		    /**
		     * Creates an array of shuffled values, using a version of the
		     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to shuffle.
		     * @returns {Array} Returns the new shuffled array.
		     * @example
		     *
		     * _.shuffle([1, 2, 3, 4]);
		     * // => [4, 1, 3, 2]
		     */
		    function shuffle(collection) {
		      var func = isArray(collection) ? arrayShuffle : baseShuffle;
		      return func(collection);
		    }

		    /**
		     * Gets the size of `collection` by returning its length for array-like
		     * values or the number of own enumerable string keyed properties for objects.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object|string} collection The collection to inspect.
		     * @returns {number} Returns the collection size.
		     * @example
		     *
		     * _.size([1, 2, 3]);
		     * // => 3
		     *
		     * _.size({ 'a': 1, 'b': 2 });
		     * // => 2
		     *
		     * _.size('pebbles');
		     * // => 7
		     */
		    function size(collection) {
		      if (collection == null) {
		        return 0;
		      }
		      if (isArrayLike(collection)) {
		        return isString(collection) ? stringSize(collection) : collection.length;
		      }
		      var tag = getTag(collection);
		      if (tag == mapTag || tag == setTag) {
		        return collection.size;
		      }
		      return baseKeys(collection).length;
		    }

		    /**
		     * Checks if `predicate` returns truthy for **any** element of `collection`.
		     * Iteration is stopped once `predicate` returns truthy. The predicate is
		     * invoked with three arguments: (value, index|key, collection).
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {boolean} Returns `true` if any element passes the predicate check,
		     *  else `false`.
		     * @example
		     *
		     * _.some([null, 0, 'yes', false], Boolean);
		     * // => true
		     *
		     * var users = [
		     *   { 'user': 'barney', 'active': true },
		     *   { 'user': 'fred',   'active': false }
		     * ];
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.some(users, { 'user': 'barney', 'active': false });
		     * // => false
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.some(users, ['active', false]);
		     * // => true
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.some(users, 'active');
		     * // => true
		     */
		    function some(collection, predicate, guard) {
		      var func = isArray(collection) ? arraySome : baseSome;
		      if (guard && isIterateeCall(collection, predicate, guard)) {
		        predicate = undefined$1;
		      }
		      return func(collection, getIteratee(predicate, 3));
		    }

		    /**
		     * Creates an array of elements, sorted in ascending order by the results of
		     * running each element in a collection thru each iteratee. This method
		     * performs a stable sort, that is, it preserves the original sort order of
		     * equal elements. The iteratees are invoked with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Collection
		     * @param {Array|Object} collection The collection to iterate over.
		     * @param {...(Function|Function[])} [iteratees=[_.identity]]
		     *  The iteratees to sort by.
		     * @returns {Array} Returns the new sorted array.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'fred',   'age': 48 },
		     *   { 'user': 'barney', 'age': 36 },
		     *   { 'user': 'fred',   'age': 30 },
		     *   { 'user': 'barney', 'age': 34 }
		     * ];
		     *
		     * _.sortBy(users, [function(o) { return o.user; }]);
		     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
		     *
		     * _.sortBy(users, ['user', 'age']);
		     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
		     */
		    var sortBy = baseRest(function(collection, iteratees) {
		      if (collection == null) {
		        return [];
		      }
		      var length = iteratees.length;
		      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
		        iteratees = [];
		      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
		        iteratees = [iteratees[0]];
		      }
		      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
		    });

		    /*------------------------------------------------------------------------*/

		    /**
		     * Gets the timestamp of the number of milliseconds that have elapsed since
		     * the Unix epoch (1 January 1970 00:00:00 UTC).
		     *
		     * @static
		     * @memberOf _
		     * @since 2.4.0
		     * @category Date
		     * @returns {number} Returns the timestamp.
		     * @example
		     *
		     * _.defer(function(stamp) {
		     *   console.log(_.now() - stamp);
		     * }, _.now());
		     * // => Logs the number of milliseconds it took for the deferred invocation.
		     */
		    var now = ctxNow || function() {
		      return root.Date.now();
		    };

		    /*------------------------------------------------------------------------*/

		    /**
		     * The opposite of `_.before`; this method creates a function that invokes
		     * `func` once it's called `n` or more times.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Function
		     * @param {number} n The number of calls before `func` is invoked.
		     * @param {Function} func The function to restrict.
		     * @returns {Function} Returns the new restricted function.
		     * @example
		     *
		     * var saves = ['profile', 'settings'];
		     *
		     * var done = _.after(saves.length, function() {
		     *   console.log('done saving!');
		     * });
		     *
		     * _.forEach(saves, function(type) {
		     *   asyncSave({ 'type': type, 'complete': done });
		     * });
		     * // => Logs 'done saving!' after the two async saves have completed.
		     */
		    function after(n, func) {
		      if (typeof func != 'function') {
		        throw new TypeError(FUNC_ERROR_TEXT);
		      }
		      n = toInteger(n);
		      return function() {
		        if (--n < 1) {
		          return func.apply(this, arguments);
		        }
		      };
		    }

		    /**
		     * Creates a function that invokes `func`, with up to `n` arguments,
		     * ignoring any additional arguments.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Function
		     * @param {Function} func The function to cap arguments for.
		     * @param {number} [n=func.length] The arity cap.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {Function} Returns the new capped function.
		     * @example
		     *
		     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
		     * // => [6, 8, 10]
		     */
		    function ary(func, n, guard) {
		      n = guard ? undefined$1 : n;
		      n = (func && n == null) ? func.length : n;
		      return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
		    }

		    /**
		     * Creates a function that invokes `func`, with the `this` binding and arguments
		     * of the created function, while it's called less than `n` times. Subsequent
		     * calls to the created function return the result of the last `func` invocation.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Function
		     * @param {number} n The number of calls at which `func` is no longer invoked.
		     * @param {Function} func The function to restrict.
		     * @returns {Function} Returns the new restricted function.
		     * @example
		     *
		     * jQuery(element).on('click', _.before(5, addContactToList));
		     * // => Allows adding up to 4 contacts to the list.
		     */
		    function before(n, func) {
		      var result;
		      if (typeof func != 'function') {
		        throw new TypeError(FUNC_ERROR_TEXT);
		      }
		      n = toInteger(n);
		      return function() {
		        if (--n > 0) {
		          result = func.apply(this, arguments);
		        }
		        if (n <= 1) {
		          func = undefined$1;
		        }
		        return result;
		      };
		    }

		    /**
		     * Creates a function that invokes `func` with the `this` binding of `thisArg`
		     * and `partials` prepended to the arguments it receives.
		     *
		     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
		     * may be used as a placeholder for partially applied arguments.
		     *
		     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
		     * property of bound functions.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Function
		     * @param {Function} func The function to bind.
		     * @param {*} thisArg The `this` binding of `func`.
		     * @param {...*} [partials] The arguments to be partially applied.
		     * @returns {Function} Returns the new bound function.
		     * @example
		     *
		     * function greet(greeting, punctuation) {
		     *   return greeting + ' ' + this.user + punctuation;
		     * }
		     *
		     * var object = { 'user': 'fred' };
		     *
		     * var bound = _.bind(greet, object, 'hi');
		     * bound('!');
		     * // => 'hi fred!'
		     *
		     * // Bound with placeholders.
		     * var bound = _.bind(greet, object, _, '!');
		     * bound('hi');
		     * // => 'hi fred!'
		     */
		    var bind = baseRest(function(func, thisArg, partials) {
		      var bitmask = WRAP_BIND_FLAG;
		      if (partials.length) {
		        var holders = replaceHolders(partials, getHolder(bind));
		        bitmask |= WRAP_PARTIAL_FLAG;
		      }
		      return createWrap(func, bitmask, thisArg, partials, holders);
		    });

		    /**
		     * Creates a function that invokes the method at `object[key]` with `partials`
		     * prepended to the arguments it receives.
		     *
		     * This method differs from `_.bind` by allowing bound functions to reference
		     * methods that may be redefined or don't yet exist. See
		     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
		     * for more details.
		     *
		     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
		     * builds, may be used as a placeholder for partially applied arguments.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.10.0
		     * @category Function
		     * @param {Object} object The object to invoke the method on.
		     * @param {string} key The key of the method.
		     * @param {...*} [partials] The arguments to be partially applied.
		     * @returns {Function} Returns the new bound function.
		     * @example
		     *
		     * var object = {
		     *   'user': 'fred',
		     *   'greet': function(greeting, punctuation) {
		     *     return greeting + ' ' + this.user + punctuation;
		     *   }
		     * };
		     *
		     * var bound = _.bindKey(object, 'greet', 'hi');
		     * bound('!');
		     * // => 'hi fred!'
		     *
		     * object.greet = function(greeting, punctuation) {
		     *   return greeting + 'ya ' + this.user + punctuation;
		     * };
		     *
		     * bound('!');
		     * // => 'hiya fred!'
		     *
		     * // Bound with placeholders.
		     * var bound = _.bindKey(object, 'greet', _, '!');
		     * bound('hi');
		     * // => 'hiya fred!'
		     */
		    var bindKey = baseRest(function(object, key, partials) {
		      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
		      if (partials.length) {
		        var holders = replaceHolders(partials, getHolder(bindKey));
		        bitmask |= WRAP_PARTIAL_FLAG;
		      }
		      return createWrap(key, bitmask, object, partials, holders);
		    });

		    /**
		     * Creates a function that accepts arguments of `func` and either invokes
		     * `func` returning its result, if at least `arity` number of arguments have
		     * been provided, or returns a function that accepts the remaining `func`
		     * arguments, and so on. The arity of `func` may be specified if `func.length`
		     * is not sufficient.
		     *
		     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
		     * may be used as a placeholder for provided arguments.
		     *
		     * **Note:** This method doesn't set the "length" property of curried functions.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.0.0
		     * @category Function
		     * @param {Function} func The function to curry.
		     * @param {number} [arity=func.length] The arity of `func`.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {Function} Returns the new curried function.
		     * @example
		     *
		     * var abc = function(a, b, c) {
		     *   return [a, b, c];
		     * };
		     *
		     * var curried = _.curry(abc);
		     *
		     * curried(1)(2)(3);
		     * // => [1, 2, 3]
		     *
		     * curried(1, 2)(3);
		     * // => [1, 2, 3]
		     *
		     * curried(1, 2, 3);
		     * // => [1, 2, 3]
		     *
		     * // Curried with placeholders.
		     * curried(1)(_, 3)(2);
		     * // => [1, 2, 3]
		     */
		    function curry(func, arity, guard) {
		      arity = guard ? undefined$1 : arity;
		      var result = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
		      result.placeholder = curry.placeholder;
		      return result;
		    }

		    /**
		     * This method is like `_.curry` except that arguments are applied to `func`
		     * in the manner of `_.partialRight` instead of `_.partial`.
		     *
		     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
		     * builds, may be used as a placeholder for provided arguments.
		     *
		     * **Note:** This method doesn't set the "length" property of curried functions.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Function
		     * @param {Function} func The function to curry.
		     * @param {number} [arity=func.length] The arity of `func`.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {Function} Returns the new curried function.
		     * @example
		     *
		     * var abc = function(a, b, c) {
		     *   return [a, b, c];
		     * };
		     *
		     * var curried = _.curryRight(abc);
		     *
		     * curried(3)(2)(1);
		     * // => [1, 2, 3]
		     *
		     * curried(2, 3)(1);
		     * // => [1, 2, 3]
		     *
		     * curried(1, 2, 3);
		     * // => [1, 2, 3]
		     *
		     * // Curried with placeholders.
		     * curried(3)(1, _)(2);
		     * // => [1, 2, 3]
		     */
		    function curryRight(func, arity, guard) {
		      arity = guard ? undefined$1 : arity;
		      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
		      result.placeholder = curryRight.placeholder;
		      return result;
		    }

		    /**
		     * Creates a debounced function that delays invoking `func` until after `wait`
		     * milliseconds have elapsed since the last time the debounced function was
		     * invoked. The debounced function comes with a `cancel` method to cancel
		     * delayed `func` invocations and a `flush` method to immediately invoke them.
		     * Provide `options` to indicate whether `func` should be invoked on the
		     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
		     * with the last arguments provided to the debounced function. Subsequent
		     * calls to the debounced function return the result of the last `func`
		     * invocation.
		     *
		     * **Note:** If `leading` and `trailing` options are `true`, `func` is
		     * invoked on the trailing edge of the timeout only if the debounced function
		     * is invoked more than once during the `wait` timeout.
		     *
		     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
		     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
		     *
		     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
		     * for details over the differences between `_.debounce` and `_.throttle`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Function
		     * @param {Function} func The function to debounce.
		     * @param {number} [wait=0] The number of milliseconds to delay.
		     * @param {Object} [options={}] The options object.
		     * @param {boolean} [options.leading=false]
		     *  Specify invoking on the leading edge of the timeout.
		     * @param {number} [options.maxWait]
		     *  The maximum time `func` is allowed to be delayed before it's invoked.
		     * @param {boolean} [options.trailing=true]
		     *  Specify invoking on the trailing edge of the timeout.
		     * @returns {Function} Returns the new debounced function.
		     * @example
		     *
		     * // Avoid costly calculations while the window size is in flux.
		     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
		     *
		     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
		     * jQuery(element).on('click', _.debounce(sendMail, 300, {
		     *   'leading': true,
		     *   'trailing': false
		     * }));
		     *
		     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
		     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
		     * var source = new EventSource('/stream');
		     * jQuery(source).on('message', debounced);
		     *
		     * // Cancel the trailing debounced invocation.
		     * jQuery(window).on('popstate', debounced.cancel);
		     */
		    function debounce(func, wait, options) {
		      var lastArgs,
		          lastThis,
		          maxWait,
		          result,
		          timerId,
		          lastCallTime,
		          lastInvokeTime = 0,
		          leading = false,
		          maxing = false,
		          trailing = true;

		      if (typeof func != 'function') {
		        throw new TypeError(FUNC_ERROR_TEXT);
		      }
		      wait = toNumber(wait) || 0;
		      if (isObject(options)) {
		        leading = !!options.leading;
		        maxing = 'maxWait' in options;
		        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
		        trailing = 'trailing' in options ? !!options.trailing : trailing;
		      }

		      function invokeFunc(time) {
		        var args = lastArgs,
		            thisArg = lastThis;

		        lastArgs = lastThis = undefined$1;
		        lastInvokeTime = time;
		        result = func.apply(thisArg, args);
		        return result;
		      }

		      function leadingEdge(time) {
		        // Reset any `maxWait` timer.
		        lastInvokeTime = time;
		        // Start the timer for the trailing edge.
		        timerId = setTimeout(timerExpired, wait);
		        // Invoke the leading edge.
		        return leading ? invokeFunc(time) : result;
		      }

		      function remainingWait(time) {
		        var timeSinceLastCall = time - lastCallTime,
		            timeSinceLastInvoke = time - lastInvokeTime,
		            timeWaiting = wait - timeSinceLastCall;

		        return maxing
		          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
		          : timeWaiting;
		      }

		      function shouldInvoke(time) {
		        var timeSinceLastCall = time - lastCallTime,
		            timeSinceLastInvoke = time - lastInvokeTime;

		        // Either this is the first call, activity has stopped and we're at the
		        // trailing edge, the system time has gone backwards and we're treating
		        // it as the trailing edge, or we've hit the `maxWait` limit.
		        return (lastCallTime === undefined$1 || (timeSinceLastCall >= wait) ||
		          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
		      }

		      function timerExpired() {
		        var time = now();
		        if (shouldInvoke(time)) {
		          return trailingEdge(time);
		        }
		        // Restart the timer.
		        timerId = setTimeout(timerExpired, remainingWait(time));
		      }

		      function trailingEdge(time) {
		        timerId = undefined$1;

		        // Only invoke if we have `lastArgs` which means `func` has been
		        // debounced at least once.
		        if (trailing && lastArgs) {
		          return invokeFunc(time);
		        }
		        lastArgs = lastThis = undefined$1;
		        return result;
		      }

		      function cancel() {
		        if (timerId !== undefined$1) {
		          clearTimeout(timerId);
		        }
		        lastInvokeTime = 0;
		        lastArgs = lastCallTime = lastThis = timerId = undefined$1;
		      }

		      function flush() {
		        return timerId === undefined$1 ? result : trailingEdge(now());
		      }

		      function debounced() {
		        var time = now(),
		            isInvoking = shouldInvoke(time);

		        lastArgs = arguments;
		        lastThis = this;
		        lastCallTime = time;

		        if (isInvoking) {
		          if (timerId === undefined$1) {
		            return leadingEdge(lastCallTime);
		          }
		          if (maxing) {
		            // Handle invocations in a tight loop.
		            clearTimeout(timerId);
		            timerId = setTimeout(timerExpired, wait);
		            return invokeFunc(lastCallTime);
		          }
		        }
		        if (timerId === undefined$1) {
		          timerId = setTimeout(timerExpired, wait);
		        }
		        return result;
		      }
		      debounced.cancel = cancel;
		      debounced.flush = flush;
		      return debounced;
		    }

		    /**
		     * Defers invoking the `func` until the current call stack has cleared. Any
		     * additional arguments are provided to `func` when it's invoked.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Function
		     * @param {Function} func The function to defer.
		     * @param {...*} [args] The arguments to invoke `func` with.
		     * @returns {number} Returns the timer id.
		     * @example
		     *
		     * _.defer(function(text) {
		     *   console.log(text);
		     * }, 'deferred');
		     * // => Logs 'deferred' after one millisecond.
		     */
		    var defer = baseRest(function(func, args) {
		      return baseDelay(func, 1, args);
		    });

		    /**
		     * Invokes `func` after `wait` milliseconds. Any additional arguments are
		     * provided to `func` when it's invoked.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Function
		     * @param {Function} func The function to delay.
		     * @param {number} wait The number of milliseconds to delay invocation.
		     * @param {...*} [args] The arguments to invoke `func` with.
		     * @returns {number} Returns the timer id.
		     * @example
		     *
		     * _.delay(function(text) {
		     *   console.log(text);
		     * }, 1000, 'later');
		     * // => Logs 'later' after one second.
		     */
		    var delay = baseRest(function(func, wait, args) {
		      return baseDelay(func, toNumber(wait) || 0, args);
		    });

		    /**
		     * Creates a function that invokes `func` with arguments reversed.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Function
		     * @param {Function} func The function to flip arguments for.
		     * @returns {Function} Returns the new flipped function.
		     * @example
		     *
		     * var flipped = _.flip(function() {
		     *   return _.toArray(arguments);
		     * });
		     *
		     * flipped('a', 'b', 'c', 'd');
		     * // => ['d', 'c', 'b', 'a']
		     */
		    function flip(func) {
		      return createWrap(func, WRAP_FLIP_FLAG);
		    }

		    /**
		     * Creates a function that memoizes the result of `func`. If `resolver` is
		     * provided, it determines the cache key for storing the result based on the
		     * arguments provided to the memoized function. By default, the first argument
		     * provided to the memoized function is used as the map cache key. The `func`
		     * is invoked with the `this` binding of the memoized function.
		     *
		     * **Note:** The cache is exposed as the `cache` property on the memoized
		     * function. Its creation may be customized by replacing the `_.memoize.Cache`
		     * constructor with one whose instances implement the
		     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
		     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Function
		     * @param {Function} func The function to have its output memoized.
		     * @param {Function} [resolver] The function to resolve the cache key.
		     * @returns {Function} Returns the new memoized function.
		     * @example
		     *
		     * var object = { 'a': 1, 'b': 2 };
		     * var other = { 'c': 3, 'd': 4 };
		     *
		     * var values = _.memoize(_.values);
		     * values(object);
		     * // => [1, 2]
		     *
		     * values(other);
		     * // => [3, 4]
		     *
		     * object.a = 2;
		     * values(object);
		     * // => [1, 2]
		     *
		     * // Modify the result cache.
		     * values.cache.set(object, ['a', 'b']);
		     * values(object);
		     * // => ['a', 'b']
		     *
		     * // Replace `_.memoize.Cache`.
		     * _.memoize.Cache = WeakMap;
		     */
		    function memoize(func, resolver) {
		      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
		        throw new TypeError(FUNC_ERROR_TEXT);
		      }
		      var memoized = function() {
		        var args = arguments,
		            key = resolver ? resolver.apply(this, args) : args[0],
		            cache = memoized.cache;

		        if (cache.has(key)) {
		          return cache.get(key);
		        }
		        var result = func.apply(this, args);
		        memoized.cache = cache.set(key, result) || cache;
		        return result;
		      };
		      memoized.cache = new (memoize.Cache || MapCache);
		      return memoized;
		    }

		    // Expose `MapCache`.
		    memoize.Cache = MapCache;

		    /**
		     * Creates a function that negates the result of the predicate `func`. The
		     * `func` predicate is invoked with the `this` binding and arguments of the
		     * created function.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Function
		     * @param {Function} predicate The predicate to negate.
		     * @returns {Function} Returns the new negated function.
		     * @example
		     *
		     * function isEven(n) {
		     *   return n % 2 == 0;
		     * }
		     *
		     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
		     * // => [1, 3, 5]
		     */
		    function negate(predicate) {
		      if (typeof predicate != 'function') {
		        throw new TypeError(FUNC_ERROR_TEXT);
		      }
		      return function() {
		        var args = arguments;
		        switch (args.length) {
		          case 0: return !predicate.call(this);
		          case 1: return !predicate.call(this, args[0]);
		          case 2: return !predicate.call(this, args[0], args[1]);
		          case 3: return !predicate.call(this, args[0], args[1], args[2]);
		        }
		        return !predicate.apply(this, args);
		      };
		    }

		    /**
		     * Creates a function that is restricted to invoking `func` once. Repeat calls
		     * to the function return the value of the first invocation. The `func` is
		     * invoked with the `this` binding and arguments of the created function.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Function
		     * @param {Function} func The function to restrict.
		     * @returns {Function} Returns the new restricted function.
		     * @example
		     *
		     * var initialize = _.once(createApplication);
		     * initialize();
		     * initialize();
		     * // => `createApplication` is invoked once
		     */
		    function once(func) {
		      return before(2, func);
		    }

		    /**
		     * Creates a function that invokes `func` with its arguments transformed.
		     *
		     * @static
		     * @since 4.0.0
		     * @memberOf _
		     * @category Function
		     * @param {Function} func The function to wrap.
		     * @param {...(Function|Function[])} [transforms=[_.identity]]
		     *  The argument transforms.
		     * @returns {Function} Returns the new function.
		     * @example
		     *
		     * function doubled(n) {
		     *   return n * 2;
		     * }
		     *
		     * function square(n) {
		     *   return n * n;
		     * }
		     *
		     * var func = _.overArgs(function(x, y) {
		     *   return [x, y];
		     * }, [square, doubled]);
		     *
		     * func(9, 3);
		     * // => [81, 6]
		     *
		     * func(10, 5);
		     * // => [100, 10]
		     */
		    var overArgs = castRest(function(func, transforms) {
		      transforms = (transforms.length == 1 && isArray(transforms[0]))
		        ? arrayMap(transforms[0], baseUnary(getIteratee()))
		        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

		      var funcsLength = transforms.length;
		      return baseRest(function(args) {
		        var index = -1,
		            length = nativeMin(args.length, funcsLength);

		        while (++index < length) {
		          args[index] = transforms[index].call(this, args[index]);
		        }
		        return apply(func, this, args);
		      });
		    });

		    /**
		     * Creates a function that invokes `func` with `partials` prepended to the
		     * arguments it receives. This method is like `_.bind` except it does **not**
		     * alter the `this` binding.
		     *
		     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
		     * builds, may be used as a placeholder for partially applied arguments.
		     *
		     * **Note:** This method doesn't set the "length" property of partially
		     * applied functions.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.2.0
		     * @category Function
		     * @param {Function} func The function to partially apply arguments to.
		     * @param {...*} [partials] The arguments to be partially applied.
		     * @returns {Function} Returns the new partially applied function.
		     * @example
		     *
		     * function greet(greeting, name) {
		     *   return greeting + ' ' + name;
		     * }
		     *
		     * var sayHelloTo = _.partial(greet, 'hello');
		     * sayHelloTo('fred');
		     * // => 'hello fred'
		     *
		     * // Partially applied with placeholders.
		     * var greetFred = _.partial(greet, _, 'fred');
		     * greetFred('hi');
		     * // => 'hi fred'
		     */
		    var partial = baseRest(function(func, partials) {
		      var holders = replaceHolders(partials, getHolder(partial));
		      return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
		    });

		    /**
		     * This method is like `_.partial` except that partially applied arguments
		     * are appended to the arguments it receives.
		     *
		     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
		     * builds, may be used as a placeholder for partially applied arguments.
		     *
		     * **Note:** This method doesn't set the "length" property of partially
		     * applied functions.
		     *
		     * @static
		     * @memberOf _
		     * @since 1.0.0
		     * @category Function
		     * @param {Function} func The function to partially apply arguments to.
		     * @param {...*} [partials] The arguments to be partially applied.
		     * @returns {Function} Returns the new partially applied function.
		     * @example
		     *
		     * function greet(greeting, name) {
		     *   return greeting + ' ' + name;
		     * }
		     *
		     * var greetFred = _.partialRight(greet, 'fred');
		     * greetFred('hi');
		     * // => 'hi fred'
		     *
		     * // Partially applied with placeholders.
		     * var sayHelloTo = _.partialRight(greet, 'hello', _);
		     * sayHelloTo('fred');
		     * // => 'hello fred'
		     */
		    var partialRight = baseRest(function(func, partials) {
		      var holders = replaceHolders(partials, getHolder(partialRight));
		      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
		    });

		    /**
		     * Creates a function that invokes `func` with arguments arranged according
		     * to the specified `indexes` where the argument value at the first index is
		     * provided as the first argument, the argument value at the second index is
		     * provided as the second argument, and so on.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Function
		     * @param {Function} func The function to rearrange arguments for.
		     * @param {...(number|number[])} indexes The arranged argument indexes.
		     * @returns {Function} Returns the new function.
		     * @example
		     *
		     * var rearged = _.rearg(function(a, b, c) {
		     *   return [a, b, c];
		     * }, [2, 0, 1]);
		     *
		     * rearged('b', 'c', 'a')
		     * // => ['a', 'b', 'c']
		     */
		    var rearg = flatRest(function(func, indexes) {
		      return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
		    });

		    /**
		     * Creates a function that invokes `func` with the `this` binding of the
		     * created function and arguments from `start` and beyond provided as
		     * an array.
		     *
		     * **Note:** This method is based on the
		     * [rest parameter](https://mdn.io/rest_parameters).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Function
		     * @param {Function} func The function to apply a rest parameter to.
		     * @param {number} [start=func.length-1] The start position of the rest parameter.
		     * @returns {Function} Returns the new function.
		     * @example
		     *
		     * var say = _.rest(function(what, names) {
		     *   return what + ' ' + _.initial(names).join(', ') +
		     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
		     * });
		     *
		     * say('hello', 'fred', 'barney', 'pebbles');
		     * // => 'hello fred, barney, & pebbles'
		     */
		    function rest(func, start) {
		      if (typeof func != 'function') {
		        throw new TypeError(FUNC_ERROR_TEXT);
		      }
		      start = start === undefined$1 ? start : toInteger(start);
		      return baseRest(func, start);
		    }

		    /**
		     * Creates a function that invokes `func` with the `this` binding of the
		     * create function and an array of arguments much like
		     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
		     *
		     * **Note:** This method is based on the
		     * [spread operator](https://mdn.io/spread_operator).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.2.0
		     * @category Function
		     * @param {Function} func The function to spread arguments over.
		     * @param {number} [start=0] The start position of the spread.
		     * @returns {Function} Returns the new function.
		     * @example
		     *
		     * var say = _.spread(function(who, what) {
		     *   return who + ' says ' + what;
		     * });
		     *
		     * say(['fred', 'hello']);
		     * // => 'fred says hello'
		     *
		     * var numbers = Promise.all([
		     *   Promise.resolve(40),
		     *   Promise.resolve(36)
		     * ]);
		     *
		     * numbers.then(_.spread(function(x, y) {
		     *   return x + y;
		     * }));
		     * // => a Promise of 76
		     */
		    function spread(func, start) {
		      if (typeof func != 'function') {
		        throw new TypeError(FUNC_ERROR_TEXT);
		      }
		      start = start == null ? 0 : nativeMax(toInteger(start), 0);
		      return baseRest(function(args) {
		        var array = args[start],
		            otherArgs = castSlice(args, 0, start);

		        if (array) {
		          arrayPush(otherArgs, array);
		        }
		        return apply(func, this, otherArgs);
		      });
		    }

		    /**
		     * Creates a throttled function that only invokes `func` at most once per
		     * every `wait` milliseconds. The throttled function comes with a `cancel`
		     * method to cancel delayed `func` invocations and a `flush` method to
		     * immediately invoke them. Provide `options` to indicate whether `func`
		     * should be invoked on the leading and/or trailing edge of the `wait`
		     * timeout. The `func` is invoked with the last arguments provided to the
		     * throttled function. Subsequent calls to the throttled function return the
		     * result of the last `func` invocation.
		     *
		     * **Note:** If `leading` and `trailing` options are `true`, `func` is
		     * invoked on the trailing edge of the timeout only if the throttled function
		     * is invoked more than once during the `wait` timeout.
		     *
		     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
		     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
		     *
		     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
		     * for details over the differences between `_.throttle` and `_.debounce`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Function
		     * @param {Function} func The function to throttle.
		     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
		     * @param {Object} [options={}] The options object.
		     * @param {boolean} [options.leading=true]
		     *  Specify invoking on the leading edge of the timeout.
		     * @param {boolean} [options.trailing=true]
		     *  Specify invoking on the trailing edge of the timeout.
		     * @returns {Function} Returns the new throttled function.
		     * @example
		     *
		     * // Avoid excessively updating the position while scrolling.
		     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
		     *
		     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
		     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
		     * jQuery(element).on('click', throttled);
		     *
		     * // Cancel the trailing throttled invocation.
		     * jQuery(window).on('popstate', throttled.cancel);
		     */
		    function throttle(func, wait, options) {
		      var leading = true,
		          trailing = true;

		      if (typeof func != 'function') {
		        throw new TypeError(FUNC_ERROR_TEXT);
		      }
		      if (isObject(options)) {
		        leading = 'leading' in options ? !!options.leading : leading;
		        trailing = 'trailing' in options ? !!options.trailing : trailing;
		      }
		      return debounce(func, wait, {
		        'leading': leading,
		        'maxWait': wait,
		        'trailing': trailing
		      });
		    }

		    /**
		     * Creates a function that accepts up to one argument, ignoring any
		     * additional arguments.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Function
		     * @param {Function} func The function to cap arguments for.
		     * @returns {Function} Returns the new capped function.
		     * @example
		     *
		     * _.map(['6', '8', '10'], _.unary(parseInt));
		     * // => [6, 8, 10]
		     */
		    function unary(func) {
		      return ary(func, 1);
		    }

		    /**
		     * Creates a function that provides `value` to `wrapper` as its first
		     * argument. Any additional arguments provided to the function are appended
		     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
		     * binding of the created function.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Function
		     * @param {*} value The value to wrap.
		     * @param {Function} [wrapper=identity] The wrapper function.
		     * @returns {Function} Returns the new function.
		     * @example
		     *
		     * var p = _.wrap(_.escape, function(func, text) {
		     *   return '<p>' + func(text) + '</p>';
		     * });
		     *
		     * p('fred, barney, & pebbles');
		     * // => '<p>fred, barney, &amp; pebbles</p>'
		     */
		    function wrap(value, wrapper) {
		      return partial(castFunction(wrapper), value);
		    }

		    /*------------------------------------------------------------------------*/

		    /**
		     * Casts `value` as an array if it's not one.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.4.0
		     * @category Lang
		     * @param {*} value The value to inspect.
		     * @returns {Array} Returns the cast array.
		     * @example
		     *
		     * _.castArray(1);
		     * // => [1]
		     *
		     * _.castArray({ 'a': 1 });
		     * // => [{ 'a': 1 }]
		     *
		     * _.castArray('abc');
		     * // => ['abc']
		     *
		     * _.castArray(null);
		     * // => [null]
		     *
		     * _.castArray(undefined);
		     * // => [undefined]
		     *
		     * _.castArray();
		     * // => []
		     *
		     * var array = [1, 2, 3];
		     * console.log(_.castArray(array) === array);
		     * // => true
		     */
		    function castArray() {
		      if (!arguments.length) {
		        return [];
		      }
		      var value = arguments[0];
		      return isArray(value) ? value : [value];
		    }

		    /**
		     * Creates a shallow clone of `value`.
		     *
		     * **Note:** This method is loosely based on the
		     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
		     * and supports cloning arrays, array buffers, booleans, date objects, maps,
		     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
		     * arrays. The own enumerable properties of `arguments` objects are cloned
		     * as plain objects. An empty object is returned for uncloneable values such
		     * as error objects, functions, DOM nodes, and WeakMaps.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to clone.
		     * @returns {*} Returns the cloned value.
		     * @see _.cloneDeep
		     * @example
		     *
		     * var objects = [{ 'a': 1 }, { 'b': 2 }];
		     *
		     * var shallow = _.clone(objects);
		     * console.log(shallow[0] === objects[0]);
		     * // => true
		     */
		    function clone(value) {
		      return baseClone(value, CLONE_SYMBOLS_FLAG);
		    }

		    /**
		     * This method is like `_.clone` except that it accepts `customizer` which
		     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
		     * cloning is handled by the method instead. The `customizer` is invoked with
		     * up to four arguments; (value [, index|key, object, stack]).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to clone.
		     * @param {Function} [customizer] The function to customize cloning.
		     * @returns {*} Returns the cloned value.
		     * @see _.cloneDeepWith
		     * @example
		     *
		     * function customizer(value) {
		     *   if (_.isElement(value)) {
		     *     return value.cloneNode(false);
		     *   }
		     * }
		     *
		     * var el = _.cloneWith(document.body, customizer);
		     *
		     * console.log(el === document.body);
		     * // => false
		     * console.log(el.nodeName);
		     * // => 'BODY'
		     * console.log(el.childNodes.length);
		     * // => 0
		     */
		    function cloneWith(value, customizer) {
		      customizer = typeof customizer == 'function' ? customizer : undefined$1;
		      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
		    }

		    /**
		     * This method is like `_.clone` except that it recursively clones `value`.
		     *
		     * @static
		     * @memberOf _
		     * @since 1.0.0
		     * @category Lang
		     * @param {*} value The value to recursively clone.
		     * @returns {*} Returns the deep cloned value.
		     * @see _.clone
		     * @example
		     *
		     * var objects = [{ 'a': 1 }, { 'b': 2 }];
		     *
		     * var deep = _.cloneDeep(objects);
		     * console.log(deep[0] === objects[0]);
		     * // => false
		     */
		    function cloneDeep(value) {
		      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
		    }

		    /**
		     * This method is like `_.cloneWith` except that it recursively clones `value`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to recursively clone.
		     * @param {Function} [customizer] The function to customize cloning.
		     * @returns {*} Returns the deep cloned value.
		     * @see _.cloneWith
		     * @example
		     *
		     * function customizer(value) {
		     *   if (_.isElement(value)) {
		     *     return value.cloneNode(true);
		     *   }
		     * }
		     *
		     * var el = _.cloneDeepWith(document.body, customizer);
		     *
		     * console.log(el === document.body);
		     * // => false
		     * console.log(el.nodeName);
		     * // => 'BODY'
		     * console.log(el.childNodes.length);
		     * // => 20
		     */
		    function cloneDeepWith(value, customizer) {
		      customizer = typeof customizer == 'function' ? customizer : undefined$1;
		      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
		    }

		    /**
		     * Checks if `object` conforms to `source` by invoking the predicate
		     * properties of `source` with the corresponding property values of `object`.
		     *
		     * **Note:** This method is equivalent to `_.conforms` when `source` is
		     * partially applied.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.14.0
		     * @category Lang
		     * @param {Object} object The object to inspect.
		     * @param {Object} source The object of property predicates to conform to.
		     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
		     * @example
		     *
		     * var object = { 'a': 1, 'b': 2 };
		     *
		     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
		     * // => true
		     *
		     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
		     * // => false
		     */
		    function conformsTo(object, source) {
		      return source == null || baseConformsTo(object, source, keys(source));
		    }

		    /**
		     * Performs a
		     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		     * comparison between two values to determine if they are equivalent.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to compare.
		     * @param {*} other The other value to compare.
		     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		     * @example
		     *
		     * var object = { 'a': 1 };
		     * var other = { 'a': 1 };
		     *
		     * _.eq(object, object);
		     * // => true
		     *
		     * _.eq(object, other);
		     * // => false
		     *
		     * _.eq('a', 'a');
		     * // => true
		     *
		     * _.eq('a', Object('a'));
		     * // => false
		     *
		     * _.eq(NaN, NaN);
		     * // => true
		     */
		    function eq(value, other) {
		      return value === other || (value !== value && other !== other);
		    }

		    /**
		     * Checks if `value` is greater than `other`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.9.0
		     * @category Lang
		     * @param {*} value The value to compare.
		     * @param {*} other The other value to compare.
		     * @returns {boolean} Returns `true` if `value` is greater than `other`,
		     *  else `false`.
		     * @see _.lt
		     * @example
		     *
		     * _.gt(3, 1);
		     * // => true
		     *
		     * _.gt(3, 3);
		     * // => false
		     *
		     * _.gt(1, 3);
		     * // => false
		     */
		    var gt = createRelationalOperation(baseGt);

		    /**
		     * Checks if `value` is greater than or equal to `other`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.9.0
		     * @category Lang
		     * @param {*} value The value to compare.
		     * @param {*} other The other value to compare.
		     * @returns {boolean} Returns `true` if `value` is greater than or equal to
		     *  `other`, else `false`.
		     * @see _.lte
		     * @example
		     *
		     * _.gte(3, 1);
		     * // => true
		     *
		     * _.gte(3, 3);
		     * // => true
		     *
		     * _.gte(1, 3);
		     * // => false
		     */
		    var gte = createRelationalOperation(function(value, other) {
		      return value >= other;
		    });

		    /**
		     * Checks if `value` is likely an `arguments` object.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
		     *  else `false`.
		     * @example
		     *
		     * _.isArguments(function() { return arguments; }());
		     * // => true
		     *
		     * _.isArguments([1, 2, 3]);
		     * // => false
		     */
		    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
		      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
		        !propertyIsEnumerable.call(value, 'callee');
		    };

		    /**
		     * Checks if `value` is classified as an `Array` object.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
		     * @example
		     *
		     * _.isArray([1, 2, 3]);
		     * // => true
		     *
		     * _.isArray(document.body.children);
		     * // => false
		     *
		     * _.isArray('abc');
		     * // => false
		     *
		     * _.isArray(_.noop);
		     * // => false
		     */
		    var isArray = Array.isArray;

		    /**
		     * Checks if `value` is classified as an `ArrayBuffer` object.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.3.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
		     * @example
		     *
		     * _.isArrayBuffer(new ArrayBuffer(2));
		     * // => true
		     *
		     * _.isArrayBuffer(new Array(2));
		     * // => false
		     */
		    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

		    /**
		     * Checks if `value` is array-like. A value is considered array-like if it's
		     * not a function and has a `value.length` that's an integer greater than or
		     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
		     * @example
		     *
		     * _.isArrayLike([1, 2, 3]);
		     * // => true
		     *
		     * _.isArrayLike(document.body.children);
		     * // => true
		     *
		     * _.isArrayLike('abc');
		     * // => true
		     *
		     * _.isArrayLike(_.noop);
		     * // => false
		     */
		    function isArrayLike(value) {
		      return value != null && isLength(value.length) && !isFunction(value);
		    }

		    /**
		     * This method is like `_.isArrayLike` except that it also checks if `value`
		     * is an object.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is an array-like object,
		     *  else `false`.
		     * @example
		     *
		     * _.isArrayLikeObject([1, 2, 3]);
		     * // => true
		     *
		     * _.isArrayLikeObject(document.body.children);
		     * // => true
		     *
		     * _.isArrayLikeObject('abc');
		     * // => false
		     *
		     * _.isArrayLikeObject(_.noop);
		     * // => false
		     */
		    function isArrayLikeObject(value) {
		      return isObjectLike(value) && isArrayLike(value);
		    }

		    /**
		     * Checks if `value` is classified as a boolean primitive or object.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
		     * @example
		     *
		     * _.isBoolean(false);
		     * // => true
		     *
		     * _.isBoolean(null);
		     * // => false
		     */
		    function isBoolean(value) {
		      return value === true || value === false ||
		        (isObjectLike(value) && baseGetTag(value) == boolTag);
		    }

		    /**
		     * Checks if `value` is a buffer.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.3.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
		     * @example
		     *
		     * _.isBuffer(new Buffer(2));
		     * // => true
		     *
		     * _.isBuffer(new Uint8Array(2));
		     * // => false
		     */
		    var isBuffer = nativeIsBuffer || stubFalse;

		    /**
		     * Checks if `value` is classified as a `Date` object.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
		     * @example
		     *
		     * _.isDate(new Date);
		     * // => true
		     *
		     * _.isDate('Mon April 23 2012');
		     * // => false
		     */
		    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

		    /**
		     * Checks if `value` is likely a DOM element.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
		     * @example
		     *
		     * _.isElement(document.body);
		     * // => true
		     *
		     * _.isElement('<body>');
		     * // => false
		     */
		    function isElement(value) {
		      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
		    }

		    /**
		     * Checks if `value` is an empty object, collection, map, or set.
		     *
		     * Objects are considered empty if they have no own enumerable string keyed
		     * properties.
		     *
		     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
		     * jQuery-like collections are considered empty if they have a `length` of `0`.
		     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
		     * @example
		     *
		     * _.isEmpty(null);
		     * // => true
		     *
		     * _.isEmpty(true);
		     * // => true
		     *
		     * _.isEmpty(1);
		     * // => true
		     *
		     * _.isEmpty([1, 2, 3]);
		     * // => false
		     *
		     * _.isEmpty({ 'a': 1 });
		     * // => false
		     */
		    function isEmpty(value) {
		      if (value == null) {
		        return true;
		      }
		      if (isArrayLike(value) &&
		          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
		            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
		        return !value.length;
		      }
		      var tag = getTag(value);
		      if (tag == mapTag || tag == setTag) {
		        return !value.size;
		      }
		      if (isPrototype(value)) {
		        return !baseKeys(value).length;
		      }
		      for (var key in value) {
		        if (hasOwnProperty.call(value, key)) {
		          return false;
		        }
		      }
		      return true;
		    }

		    /**
		     * Performs a deep comparison between two values to determine if they are
		     * equivalent.
		     *
		     * **Note:** This method supports comparing arrays, array buffers, booleans,
		     * date objects, error objects, maps, numbers, `Object` objects, regexes,
		     * sets, strings, symbols, and typed arrays. `Object` objects are compared
		     * by their own, not inherited, enumerable properties. Functions and DOM
		     * nodes are compared by strict equality, i.e. `===`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to compare.
		     * @param {*} other The other value to compare.
		     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		     * @example
		     *
		     * var object = { 'a': 1 };
		     * var other = { 'a': 1 };
		     *
		     * _.isEqual(object, other);
		     * // => true
		     *
		     * object === other;
		     * // => false
		     */
		    function isEqual(value, other) {
		      return baseIsEqual(value, other);
		    }

		    /**
		     * This method is like `_.isEqual` except that it accepts `customizer` which
		     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
		     * are handled by the method instead. The `customizer` is invoked with up to
		     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to compare.
		     * @param {*} other The other value to compare.
		     * @param {Function} [customizer] The function to customize comparisons.
		     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		     * @example
		     *
		     * function isGreeting(value) {
		     *   return /^h(?:i|ello)$/.test(value);
		     * }
		     *
		     * function customizer(objValue, othValue) {
		     *   if (isGreeting(objValue) && isGreeting(othValue)) {
		     *     return true;
		     *   }
		     * }
		     *
		     * var array = ['hello', 'goodbye'];
		     * var other = ['hi', 'goodbye'];
		     *
		     * _.isEqualWith(array, other, customizer);
		     * // => true
		     */
		    function isEqualWith(value, other, customizer) {
		      customizer = typeof customizer == 'function' ? customizer : undefined$1;
		      var result = customizer ? customizer(value, other) : undefined$1;
		      return result === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result;
		    }

		    /**
		     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
		     * `SyntaxError`, `TypeError`, or `URIError` object.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
		     * @example
		     *
		     * _.isError(new Error);
		     * // => true
		     *
		     * _.isError(Error);
		     * // => false
		     */
		    function isError(value) {
		      if (!isObjectLike(value)) {
		        return false;
		      }
		      var tag = baseGetTag(value);
		      return tag == errorTag || tag == domExcTag ||
		        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
		    }

		    /**
		     * Checks if `value` is a finite primitive number.
		     *
		     * **Note:** This method is based on
		     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
		     * @example
		     *
		     * _.isFinite(3);
		     * // => true
		     *
		     * _.isFinite(Number.MIN_VALUE);
		     * // => true
		     *
		     * _.isFinite(Infinity);
		     * // => false
		     *
		     * _.isFinite('3');
		     * // => false
		     */
		    function isFinite(value) {
		      return typeof value == 'number' && nativeIsFinite(value);
		    }

		    /**
		     * Checks if `value` is classified as a `Function` object.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
		     * @example
		     *
		     * _.isFunction(_);
		     * // => true
		     *
		     * _.isFunction(/abc/);
		     * // => false
		     */
		    function isFunction(value) {
		      if (!isObject(value)) {
		        return false;
		      }
		      // The use of `Object#toString` avoids issues with the `typeof` operator
		      // in Safari 9 which returns 'object' for typed arrays and other constructors.
		      var tag = baseGetTag(value);
		      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
		    }

		    /**
		     * Checks if `value` is an integer.
		     *
		     * **Note:** This method is based on
		     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
		     * @example
		     *
		     * _.isInteger(3);
		     * // => true
		     *
		     * _.isInteger(Number.MIN_VALUE);
		     * // => false
		     *
		     * _.isInteger(Infinity);
		     * // => false
		     *
		     * _.isInteger('3');
		     * // => false
		     */
		    function isInteger(value) {
		      return typeof value == 'number' && value == toInteger(value);
		    }

		    /**
		     * Checks if `value` is a valid array-like length.
		     *
		     * **Note:** This method is loosely based on
		     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
		     * @example
		     *
		     * _.isLength(3);
		     * // => true
		     *
		     * _.isLength(Number.MIN_VALUE);
		     * // => false
		     *
		     * _.isLength(Infinity);
		     * // => false
		     *
		     * _.isLength('3');
		     * // => false
		     */
		    function isLength(value) {
		      return typeof value == 'number' &&
		        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
		    }

		    /**
		     * Checks if `value` is the
		     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
		     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
		     * @example
		     *
		     * _.isObject({});
		     * // => true
		     *
		     * _.isObject([1, 2, 3]);
		     * // => true
		     *
		     * _.isObject(_.noop);
		     * // => true
		     *
		     * _.isObject(null);
		     * // => false
		     */
		    function isObject(value) {
		      var type = typeof value;
		      return value != null && (type == 'object' || type == 'function');
		    }

		    /**
		     * Checks if `value` is object-like. A value is object-like if it's not `null`
		     * and has a `typeof` result of "object".
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
		     * @example
		     *
		     * _.isObjectLike({});
		     * // => true
		     *
		     * _.isObjectLike([1, 2, 3]);
		     * // => true
		     *
		     * _.isObjectLike(_.noop);
		     * // => false
		     *
		     * _.isObjectLike(null);
		     * // => false
		     */
		    function isObjectLike(value) {
		      return value != null && typeof value == 'object';
		    }

		    /**
		     * Checks if `value` is classified as a `Map` object.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.3.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
		     * @example
		     *
		     * _.isMap(new Map);
		     * // => true
		     *
		     * _.isMap(new WeakMap);
		     * // => false
		     */
		    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

		    /**
		     * Performs a partial deep comparison between `object` and `source` to
		     * determine if `object` contains equivalent property values.
		     *
		     * **Note:** This method is equivalent to `_.matches` when `source` is
		     * partially applied.
		     *
		     * Partial comparisons will match empty array and empty object `source`
		     * values against any array or object value, respectively. See `_.isEqual`
		     * for a list of supported value comparisons.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Lang
		     * @param {Object} object The object to inspect.
		     * @param {Object} source The object of property values to match.
		     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
		     * @example
		     *
		     * var object = { 'a': 1, 'b': 2 };
		     *
		     * _.isMatch(object, { 'b': 2 });
		     * // => true
		     *
		     * _.isMatch(object, { 'b': 1 });
		     * // => false
		     */
		    function isMatch(object, source) {
		      return object === source || baseIsMatch(object, source, getMatchData(source));
		    }

		    /**
		     * This method is like `_.isMatch` except that it accepts `customizer` which
		     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
		     * are handled by the method instead. The `customizer` is invoked with five
		     * arguments: (objValue, srcValue, index|key, object, source).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {Object} object The object to inspect.
		     * @param {Object} source The object of property values to match.
		     * @param {Function} [customizer] The function to customize comparisons.
		     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
		     * @example
		     *
		     * function isGreeting(value) {
		     *   return /^h(?:i|ello)$/.test(value);
		     * }
		     *
		     * function customizer(objValue, srcValue) {
		     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
		     *     return true;
		     *   }
		     * }
		     *
		     * var object = { 'greeting': 'hello' };
		     * var source = { 'greeting': 'hi' };
		     *
		     * _.isMatchWith(object, source, customizer);
		     * // => true
		     */
		    function isMatchWith(object, source, customizer) {
		      customizer = typeof customizer == 'function' ? customizer : undefined$1;
		      return baseIsMatch(object, source, getMatchData(source), customizer);
		    }

		    /**
		     * Checks if `value` is `NaN`.
		     *
		     * **Note:** This method is based on
		     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
		     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
		     * `undefined` and other non-number values.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
		     * @example
		     *
		     * _.isNaN(NaN);
		     * // => true
		     *
		     * _.isNaN(new Number(NaN));
		     * // => true
		     *
		     * isNaN(undefined);
		     * // => true
		     *
		     * _.isNaN(undefined);
		     * // => false
		     */
		    function isNaN(value) {
		      // An `NaN` primitive is the only value that is not equal to itself.
		      // Perform the `toStringTag` check first to avoid errors with some
		      // ActiveX objects in IE.
		      return isNumber(value) && value != +value;
		    }

		    /**
		     * Checks if `value` is a pristine native function.
		     *
		     * **Note:** This method can't reliably detect native functions in the presence
		     * of the core-js package because core-js circumvents this kind of detection.
		     * Despite multiple requests, the core-js maintainer has made it clear: any
		     * attempt to fix the detection will be obstructed. As a result, we're left
		     * with little choice but to throw an error. Unfortunately, this also affects
		     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
		     * which rely on core-js.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a native function,
		     *  else `false`.
		     * @example
		     *
		     * _.isNative(Array.prototype.push);
		     * // => true
		     *
		     * _.isNative(_);
		     * // => false
		     */
		    function isNative(value) {
		      if (isMaskable(value)) {
		        throw new Error(CORE_ERROR_TEXT);
		      }
		      return baseIsNative(value);
		    }

		    /**
		     * Checks if `value` is `null`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
		     * @example
		     *
		     * _.isNull(null);
		     * // => true
		     *
		     * _.isNull(void 0);
		     * // => false
		     */
		    function isNull(value) {
		      return value === null;
		    }

		    /**
		     * Checks if `value` is `null` or `undefined`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
		     * @example
		     *
		     * _.isNil(null);
		     * // => true
		     *
		     * _.isNil(void 0);
		     * // => true
		     *
		     * _.isNil(NaN);
		     * // => false
		     */
		    function isNil(value) {
		      return value == null;
		    }

		    /**
		     * Checks if `value` is classified as a `Number` primitive or object.
		     *
		     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
		     * classified as numbers, use the `_.isFinite` method.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
		     * @example
		     *
		     * _.isNumber(3);
		     * // => true
		     *
		     * _.isNumber(Number.MIN_VALUE);
		     * // => true
		     *
		     * _.isNumber(Infinity);
		     * // => true
		     *
		     * _.isNumber('3');
		     * // => false
		     */
		    function isNumber(value) {
		      return typeof value == 'number' ||
		        (isObjectLike(value) && baseGetTag(value) == numberTag);
		    }

		    /**
		     * Checks if `value` is a plain object, that is, an object created by the
		     * `Object` constructor or one with a `[[Prototype]]` of `null`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.8.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     * }
		     *
		     * _.isPlainObject(new Foo);
		     * // => false
		     *
		     * _.isPlainObject([1, 2, 3]);
		     * // => false
		     *
		     * _.isPlainObject({ 'x': 0, 'y': 0 });
		     * // => true
		     *
		     * _.isPlainObject(Object.create(null));
		     * // => true
		     */
		    function isPlainObject(value) {
		      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
		        return false;
		      }
		      var proto = getPrototype(value);
		      if (proto === null) {
		        return true;
		      }
		      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
		      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
		        funcToString.call(Ctor) == objectCtorString;
		    }

		    /**
		     * Checks if `value` is classified as a `RegExp` object.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.1.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
		     * @example
		     *
		     * _.isRegExp(/abc/);
		     * // => true
		     *
		     * _.isRegExp('/abc/');
		     * // => false
		     */
		    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

		    /**
		     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
		     * double precision number which isn't the result of a rounded unsafe integer.
		     *
		     * **Note:** This method is based on
		     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
		     * @example
		     *
		     * _.isSafeInteger(3);
		     * // => true
		     *
		     * _.isSafeInteger(Number.MIN_VALUE);
		     * // => false
		     *
		     * _.isSafeInteger(Infinity);
		     * // => false
		     *
		     * _.isSafeInteger('3');
		     * // => false
		     */
		    function isSafeInteger(value) {
		      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
		    }

		    /**
		     * Checks if `value` is classified as a `Set` object.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.3.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
		     * @example
		     *
		     * _.isSet(new Set);
		     * // => true
		     *
		     * _.isSet(new WeakSet);
		     * // => false
		     */
		    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

		    /**
		     * Checks if `value` is classified as a `String` primitive or object.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
		     * @example
		     *
		     * _.isString('abc');
		     * // => true
		     *
		     * _.isString(1);
		     * // => false
		     */
		    function isString(value) {
		      return typeof value == 'string' ||
		        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
		    }

		    /**
		     * Checks if `value` is classified as a `Symbol` primitive or object.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
		     * @example
		     *
		     * _.isSymbol(Symbol.iterator);
		     * // => true
		     *
		     * _.isSymbol('abc');
		     * // => false
		     */
		    function isSymbol(value) {
		      return typeof value == 'symbol' ||
		        (isObjectLike(value) && baseGetTag(value) == symbolTag);
		    }

		    /**
		     * Checks if `value` is classified as a typed array.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
		     * @example
		     *
		     * _.isTypedArray(new Uint8Array);
		     * // => true
		     *
		     * _.isTypedArray([]);
		     * // => false
		     */
		    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

		    /**
		     * Checks if `value` is `undefined`.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
		     * @example
		     *
		     * _.isUndefined(void 0);
		     * // => true
		     *
		     * _.isUndefined(null);
		     * // => false
		     */
		    function isUndefined(value) {
		      return value === undefined$1;
		    }

		    /**
		     * Checks if `value` is classified as a `WeakMap` object.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.3.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
		     * @example
		     *
		     * _.isWeakMap(new WeakMap);
		     * // => true
		     *
		     * _.isWeakMap(new Map);
		     * // => false
		     */
		    function isWeakMap(value) {
		      return isObjectLike(value) && getTag(value) == weakMapTag;
		    }

		    /**
		     * Checks if `value` is classified as a `WeakSet` object.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.3.0
		     * @category Lang
		     * @param {*} value The value to check.
		     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
		     * @example
		     *
		     * _.isWeakSet(new WeakSet);
		     * // => true
		     *
		     * _.isWeakSet(new Set);
		     * // => false
		     */
		    function isWeakSet(value) {
		      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
		    }

		    /**
		     * Checks if `value` is less than `other`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.9.0
		     * @category Lang
		     * @param {*} value The value to compare.
		     * @param {*} other The other value to compare.
		     * @returns {boolean} Returns `true` if `value` is less than `other`,
		     *  else `false`.
		     * @see _.gt
		     * @example
		     *
		     * _.lt(1, 3);
		     * // => true
		     *
		     * _.lt(3, 3);
		     * // => false
		     *
		     * _.lt(3, 1);
		     * // => false
		     */
		    var lt = createRelationalOperation(baseLt);

		    /**
		     * Checks if `value` is less than or equal to `other`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.9.0
		     * @category Lang
		     * @param {*} value The value to compare.
		     * @param {*} other The other value to compare.
		     * @returns {boolean} Returns `true` if `value` is less than or equal to
		     *  `other`, else `false`.
		     * @see _.gte
		     * @example
		     *
		     * _.lte(1, 3);
		     * // => true
		     *
		     * _.lte(3, 3);
		     * // => true
		     *
		     * _.lte(3, 1);
		     * // => false
		     */
		    var lte = createRelationalOperation(function(value, other) {
		      return value <= other;
		    });

		    /**
		     * Converts `value` to an array.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Lang
		     * @param {*} value The value to convert.
		     * @returns {Array} Returns the converted array.
		     * @example
		     *
		     * _.toArray({ 'a': 1, 'b': 2 });
		     * // => [1, 2]
		     *
		     * _.toArray('abc');
		     * // => ['a', 'b', 'c']
		     *
		     * _.toArray(1);
		     * // => []
		     *
		     * _.toArray(null);
		     * // => []
		     */
		    function toArray(value) {
		      if (!value) {
		        return [];
		      }
		      if (isArrayLike(value)) {
		        return isString(value) ? stringToArray(value) : copyArray(value);
		      }
		      if (symIterator && value[symIterator]) {
		        return iteratorToArray(value[symIterator]());
		      }
		      var tag = getTag(value),
		          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

		      return func(value);
		    }

		    /**
		     * Converts `value` to a finite number.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.12.0
		     * @category Lang
		     * @param {*} value The value to convert.
		     * @returns {number} Returns the converted number.
		     * @example
		     *
		     * _.toFinite(3.2);
		     * // => 3.2
		     *
		     * _.toFinite(Number.MIN_VALUE);
		     * // => 5e-324
		     *
		     * _.toFinite(Infinity);
		     * // => 1.7976931348623157e+308
		     *
		     * _.toFinite('3.2');
		     * // => 3.2
		     */
		    function toFinite(value) {
		      if (!value) {
		        return value === 0 ? value : 0;
		      }
		      value = toNumber(value);
		      if (value === INFINITY || value === -INFINITY) {
		        var sign = (value < 0 ? -1 : 1);
		        return sign * MAX_INTEGER;
		      }
		      return value === value ? value : 0;
		    }

		    /**
		     * Converts `value` to an integer.
		     *
		     * **Note:** This method is loosely based on
		     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to convert.
		     * @returns {number} Returns the converted integer.
		     * @example
		     *
		     * _.toInteger(3.2);
		     * // => 3
		     *
		     * _.toInteger(Number.MIN_VALUE);
		     * // => 0
		     *
		     * _.toInteger(Infinity);
		     * // => 1.7976931348623157e+308
		     *
		     * _.toInteger('3.2');
		     * // => 3
		     */
		    function toInteger(value) {
		      var result = toFinite(value),
		          remainder = result % 1;

		      return result === result ? (remainder ? result - remainder : result) : 0;
		    }

		    /**
		     * Converts `value` to an integer suitable for use as the length of an
		     * array-like object.
		     *
		     * **Note:** This method is based on
		     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to convert.
		     * @returns {number} Returns the converted integer.
		     * @example
		     *
		     * _.toLength(3.2);
		     * // => 3
		     *
		     * _.toLength(Number.MIN_VALUE);
		     * // => 0
		     *
		     * _.toLength(Infinity);
		     * // => 4294967295
		     *
		     * _.toLength('3.2');
		     * // => 3
		     */
		    function toLength(value) {
		      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
		    }

		    /**
		     * Converts `value` to a number.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to process.
		     * @returns {number} Returns the number.
		     * @example
		     *
		     * _.toNumber(3.2);
		     * // => 3.2
		     *
		     * _.toNumber(Number.MIN_VALUE);
		     * // => 5e-324
		     *
		     * _.toNumber(Infinity);
		     * // => Infinity
		     *
		     * _.toNumber('3.2');
		     * // => 3.2
		     */
		    function toNumber(value) {
		      if (typeof value == 'number') {
		        return value;
		      }
		      if (isSymbol(value)) {
		        return NAN;
		      }
		      if (isObject(value)) {
		        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
		        value = isObject(other) ? (other + '') : other;
		      }
		      if (typeof value != 'string') {
		        return value === 0 ? value : +value;
		      }
		      value = baseTrim(value);
		      var isBinary = reIsBinary.test(value);
		      return (isBinary || reIsOctal.test(value))
		        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
		        : (reIsBadHex.test(value) ? NAN : +value);
		    }

		    /**
		     * Converts `value` to a plain object flattening inherited enumerable string
		     * keyed properties of `value` to own properties of the plain object.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Lang
		     * @param {*} value The value to convert.
		     * @returns {Object} Returns the converted plain object.
		     * @example
		     *
		     * function Foo() {
		     *   this.b = 2;
		     * }
		     *
		     * Foo.prototype.c = 3;
		     *
		     * _.assign({ 'a': 1 }, new Foo);
		     * // => { 'a': 1, 'b': 2 }
		     *
		     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
		     * // => { 'a': 1, 'b': 2, 'c': 3 }
		     */
		    function toPlainObject(value) {
		      return copyObject(value, keysIn(value));
		    }

		    /**
		     * Converts `value` to a safe integer. A safe integer can be compared and
		     * represented correctly.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to convert.
		     * @returns {number} Returns the converted integer.
		     * @example
		     *
		     * _.toSafeInteger(3.2);
		     * // => 3
		     *
		     * _.toSafeInteger(Number.MIN_VALUE);
		     * // => 0
		     *
		     * _.toSafeInteger(Infinity);
		     * // => 9007199254740991
		     *
		     * _.toSafeInteger('3.2');
		     * // => 3
		     */
		    function toSafeInteger(value) {
		      return value
		        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
		        : (value === 0 ? value : 0);
		    }

		    /**
		     * Converts `value` to a string. An empty string is returned for `null`
		     * and `undefined` values. The sign of `-0` is preserved.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Lang
		     * @param {*} value The value to convert.
		     * @returns {string} Returns the converted string.
		     * @example
		     *
		     * _.toString(null);
		     * // => ''
		     *
		     * _.toString(-0);
		     * // => '-0'
		     *
		     * _.toString([1, 2, 3]);
		     * // => '1,2,3'
		     */
		    function toString(value) {
		      return value == null ? '' : baseToString(value);
		    }

		    /*------------------------------------------------------------------------*/

		    /**
		     * Assigns own enumerable string keyed properties of source objects to the
		     * destination object. Source objects are applied from left to right.
		     * Subsequent sources overwrite property assignments of previous sources.
		     *
		     * **Note:** This method mutates `object` and is loosely based on
		     * [`Object.assign`](https://mdn.io/Object/assign).
		     *
		     * @static
		     * @memberOf _
		     * @since 0.10.0
		     * @category Object
		     * @param {Object} object The destination object.
		     * @param {...Object} [sources] The source objects.
		     * @returns {Object} Returns `object`.
		     * @see _.assignIn
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     * }
		     *
		     * function Bar() {
		     *   this.c = 3;
		     * }
		     *
		     * Foo.prototype.b = 2;
		     * Bar.prototype.d = 4;
		     *
		     * _.assign({ 'a': 0 }, new Foo, new Bar);
		     * // => { 'a': 1, 'c': 3 }
		     */
		    var assign = createAssigner(function(object, source) {
		      if (isPrototype(source) || isArrayLike(source)) {
		        copyObject(source, keys(source), object);
		        return;
		      }
		      for (var key in source) {
		        if (hasOwnProperty.call(source, key)) {
		          assignValue(object, key, source[key]);
		        }
		      }
		    });

		    /**
		     * This method is like `_.assign` except that it iterates over own and
		     * inherited source properties.
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @alias extend
		     * @category Object
		     * @param {Object} object The destination object.
		     * @param {...Object} [sources] The source objects.
		     * @returns {Object} Returns `object`.
		     * @see _.assign
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     * }
		     *
		     * function Bar() {
		     *   this.c = 3;
		     * }
		     *
		     * Foo.prototype.b = 2;
		     * Bar.prototype.d = 4;
		     *
		     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
		     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
		     */
		    var assignIn = createAssigner(function(object, source) {
		      copyObject(source, keysIn(source), object);
		    });

		    /**
		     * This method is like `_.assignIn` except that it accepts `customizer`
		     * which is invoked to produce the assigned values. If `customizer` returns
		     * `undefined`, assignment is handled by the method instead. The `customizer`
		     * is invoked with five arguments: (objValue, srcValue, key, object, source).
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @alias extendWith
		     * @category Object
		     * @param {Object} object The destination object.
		     * @param {...Object} sources The source objects.
		     * @param {Function} [customizer] The function to customize assigned values.
		     * @returns {Object} Returns `object`.
		     * @see _.assignWith
		     * @example
		     *
		     * function customizer(objValue, srcValue) {
		     *   return _.isUndefined(objValue) ? srcValue : objValue;
		     * }
		     *
		     * var defaults = _.partialRight(_.assignInWith, customizer);
		     *
		     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
		     * // => { 'a': 1, 'b': 2 }
		     */
		    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
		      copyObject(source, keysIn(source), object, customizer);
		    });

		    /**
		     * This method is like `_.assign` except that it accepts `customizer`
		     * which is invoked to produce the assigned values. If `customizer` returns
		     * `undefined`, assignment is handled by the method instead. The `customizer`
		     * is invoked with five arguments: (objValue, srcValue, key, object, source).
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Object
		     * @param {Object} object The destination object.
		     * @param {...Object} sources The source objects.
		     * @param {Function} [customizer] The function to customize assigned values.
		     * @returns {Object} Returns `object`.
		     * @see _.assignInWith
		     * @example
		     *
		     * function customizer(objValue, srcValue) {
		     *   return _.isUndefined(objValue) ? srcValue : objValue;
		     * }
		     *
		     * var defaults = _.partialRight(_.assignWith, customizer);
		     *
		     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
		     * // => { 'a': 1, 'b': 2 }
		     */
		    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
		      copyObject(source, keys(source), object, customizer);
		    });

		    /**
		     * Creates an array of values corresponding to `paths` of `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 1.0.0
		     * @category Object
		     * @param {Object} object The object to iterate over.
		     * @param {...(string|string[])} [paths] The property paths to pick.
		     * @returns {Array} Returns the picked values.
		     * @example
		     *
		     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
		     *
		     * _.at(object, ['a[0].b.c', 'a[1]']);
		     * // => [3, 4]
		     */
		    var at = flatRest(baseAt);

		    /**
		     * Creates an object that inherits from the `prototype` object. If a
		     * `properties` object is given, its own enumerable string keyed properties
		     * are assigned to the created object.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.3.0
		     * @category Object
		     * @param {Object} prototype The object to inherit from.
		     * @param {Object} [properties] The properties to assign to the object.
		     * @returns {Object} Returns the new object.
		     * @example
		     *
		     * function Shape() {
		     *   this.x = 0;
		     *   this.y = 0;
		     * }
		     *
		     * function Circle() {
		     *   Shape.call(this);
		     * }
		     *
		     * Circle.prototype = _.create(Shape.prototype, {
		     *   'constructor': Circle
		     * });
		     *
		     * var circle = new Circle;
		     * circle instanceof Circle;
		     * // => true
		     *
		     * circle instanceof Shape;
		     * // => true
		     */
		    function create(prototype, properties) {
		      var result = baseCreate(prototype);
		      return properties == null ? result : baseAssign(result, properties);
		    }

		    /**
		     * Assigns own and inherited enumerable string keyed properties of source
		     * objects to the destination object for all destination properties that
		     * resolve to `undefined`. Source objects are applied from left to right.
		     * Once a property is set, additional values of the same property are ignored.
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Object
		     * @param {Object} object The destination object.
		     * @param {...Object} [sources] The source objects.
		     * @returns {Object} Returns `object`.
		     * @see _.defaultsDeep
		     * @example
		     *
		     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
		     * // => { 'a': 1, 'b': 2 }
		     */
		    var defaults = baseRest(function(object, sources) {
		      object = Object(object);

		      var index = -1;
		      var length = sources.length;
		      var guard = length > 2 ? sources[2] : undefined$1;

		      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
		        length = 1;
		      }

		      while (++index < length) {
		        var source = sources[index];
		        var props = keysIn(source);
		        var propsIndex = -1;
		        var propsLength = props.length;

		        while (++propsIndex < propsLength) {
		          var key = props[propsIndex];
		          var value = object[key];

		          if (value === undefined$1 ||
		              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
		            object[key] = source[key];
		          }
		        }
		      }

		      return object;
		    });

		    /**
		     * This method is like `_.defaults` except that it recursively assigns
		     * default properties.
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.10.0
		     * @category Object
		     * @param {Object} object The destination object.
		     * @param {...Object} [sources] The source objects.
		     * @returns {Object} Returns `object`.
		     * @see _.defaults
		     * @example
		     *
		     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
		     * // => { 'a': { 'b': 2, 'c': 3 } }
		     */
		    var defaultsDeep = baseRest(function(args) {
		      args.push(undefined$1, customDefaultsMerge);
		      return apply(mergeWith, undefined$1, args);
		    });

		    /**
		     * This method is like `_.find` except that it returns the key of the first
		     * element `predicate` returns truthy for instead of the element itself.
		     *
		     * @static
		     * @memberOf _
		     * @since 1.1.0
		     * @category Object
		     * @param {Object} object The object to inspect.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @returns {string|undefined} Returns the key of the matched element,
		     *  else `undefined`.
		     * @example
		     *
		     * var users = {
		     *   'barney':  { 'age': 36, 'active': true },
		     *   'fred':    { 'age': 40, 'active': false },
		     *   'pebbles': { 'age': 1,  'active': true }
		     * };
		     *
		     * _.findKey(users, function(o) { return o.age < 40; });
		     * // => 'barney' (iteration order is not guaranteed)
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.findKey(users, { 'age': 1, 'active': true });
		     * // => 'pebbles'
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.findKey(users, ['active', false]);
		     * // => 'fred'
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.findKey(users, 'active');
		     * // => 'barney'
		     */
		    function findKey(object, predicate) {
		      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
		    }

		    /**
		     * This method is like `_.findKey` except that it iterates over elements of
		     * a collection in the opposite order.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.0.0
		     * @category Object
		     * @param {Object} object The object to inspect.
		     * @param {Function} [predicate=_.identity] The function invoked per iteration.
		     * @returns {string|undefined} Returns the key of the matched element,
		     *  else `undefined`.
		     * @example
		     *
		     * var users = {
		     *   'barney':  { 'age': 36, 'active': true },
		     *   'fred':    { 'age': 40, 'active': false },
		     *   'pebbles': { 'age': 1,  'active': true }
		     * };
		     *
		     * _.findLastKey(users, function(o) { return o.age < 40; });
		     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.findLastKey(users, { 'age': 36, 'active': true });
		     * // => 'barney'
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.findLastKey(users, ['active', false]);
		     * // => 'fred'
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.findLastKey(users, 'active');
		     * // => 'pebbles'
		     */
		    function findLastKey(object, predicate) {
		      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
		    }

		    /**
		     * Iterates over own and inherited enumerable string keyed properties of an
		     * object and invokes `iteratee` for each property. The iteratee is invoked
		     * with three arguments: (value, key, object). Iteratee functions may exit
		     * iteration early by explicitly returning `false`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.3.0
		     * @category Object
		     * @param {Object} object The object to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Object} Returns `object`.
		     * @see _.forInRight
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     *   this.b = 2;
		     * }
		     *
		     * Foo.prototype.c = 3;
		     *
		     * _.forIn(new Foo, function(value, key) {
		     *   console.log(key);
		     * });
		     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
		     */
		    function forIn(object, iteratee) {
		      return object == null
		        ? object
		        : baseFor(object, getIteratee(iteratee, 3), keysIn);
		    }

		    /**
		     * This method is like `_.forIn` except that it iterates over properties of
		     * `object` in the opposite order.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.0.0
		     * @category Object
		     * @param {Object} object The object to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Object} Returns `object`.
		     * @see _.forIn
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     *   this.b = 2;
		     * }
		     *
		     * Foo.prototype.c = 3;
		     *
		     * _.forInRight(new Foo, function(value, key) {
		     *   console.log(key);
		     * });
		     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
		     */
		    function forInRight(object, iteratee) {
		      return object == null
		        ? object
		        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
		    }

		    /**
		     * Iterates over own enumerable string keyed properties of an object and
		     * invokes `iteratee` for each property. The iteratee is invoked with three
		     * arguments: (value, key, object). Iteratee functions may exit iteration
		     * early by explicitly returning `false`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.3.0
		     * @category Object
		     * @param {Object} object The object to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Object} Returns `object`.
		     * @see _.forOwnRight
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     *   this.b = 2;
		     * }
		     *
		     * Foo.prototype.c = 3;
		     *
		     * _.forOwn(new Foo, function(value, key) {
		     *   console.log(key);
		     * });
		     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
		     */
		    function forOwn(object, iteratee) {
		      return object && baseForOwn(object, getIteratee(iteratee, 3));
		    }

		    /**
		     * This method is like `_.forOwn` except that it iterates over properties of
		     * `object` in the opposite order.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.0.0
		     * @category Object
		     * @param {Object} object The object to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Object} Returns `object`.
		     * @see _.forOwn
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     *   this.b = 2;
		     * }
		     *
		     * Foo.prototype.c = 3;
		     *
		     * _.forOwnRight(new Foo, function(value, key) {
		     *   console.log(key);
		     * });
		     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
		     */
		    function forOwnRight(object, iteratee) {
		      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
		    }

		    /**
		     * Creates an array of function property names from own enumerable properties
		     * of `object`.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Object
		     * @param {Object} object The object to inspect.
		     * @returns {Array} Returns the function names.
		     * @see _.functionsIn
		     * @example
		     *
		     * function Foo() {
		     *   this.a = _.constant('a');
		     *   this.b = _.constant('b');
		     * }
		     *
		     * Foo.prototype.c = _.constant('c');
		     *
		     * _.functions(new Foo);
		     * // => ['a', 'b']
		     */
		    function functions(object) {
		      return object == null ? [] : baseFunctions(object, keys(object));
		    }

		    /**
		     * Creates an array of function property names from own and inherited
		     * enumerable properties of `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Object
		     * @param {Object} object The object to inspect.
		     * @returns {Array} Returns the function names.
		     * @see _.functions
		     * @example
		     *
		     * function Foo() {
		     *   this.a = _.constant('a');
		     *   this.b = _.constant('b');
		     * }
		     *
		     * Foo.prototype.c = _.constant('c');
		     *
		     * _.functionsIn(new Foo);
		     * // => ['a', 'b', 'c']
		     */
		    function functionsIn(object) {
		      return object == null ? [] : baseFunctions(object, keysIn(object));
		    }

		    /**
		     * Gets the value at `path` of `object`. If the resolved value is
		     * `undefined`, the `defaultValue` is returned in its place.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.7.0
		     * @category Object
		     * @param {Object} object The object to query.
		     * @param {Array|string} path The path of the property to get.
		     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
		     * @returns {*} Returns the resolved value.
		     * @example
		     *
		     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
		     *
		     * _.get(object, 'a[0].b.c');
		     * // => 3
		     *
		     * _.get(object, ['a', '0', 'b', 'c']);
		     * // => 3
		     *
		     * _.get(object, 'a.b.c', 'default');
		     * // => 'default'
		     */
		    function get(object, path, defaultValue) {
		      var result = object == null ? undefined$1 : baseGet(object, path);
		      return result === undefined$1 ? defaultValue : result;
		    }

		    /**
		     * Checks if `path` is a direct property of `object`.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Object
		     * @param {Object} object The object to query.
		     * @param {Array|string} path The path to check.
		     * @returns {boolean} Returns `true` if `path` exists, else `false`.
		     * @example
		     *
		     * var object = { 'a': { 'b': 2 } };
		     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
		     *
		     * _.has(object, 'a');
		     * // => true
		     *
		     * _.has(object, 'a.b');
		     * // => true
		     *
		     * _.has(object, ['a', 'b']);
		     * // => true
		     *
		     * _.has(other, 'a');
		     * // => false
		     */
		    function has(object, path) {
		      return object != null && hasPath(object, path, baseHas);
		    }

		    /**
		     * Checks if `path` is a direct or inherited property of `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Object
		     * @param {Object} object The object to query.
		     * @param {Array|string} path The path to check.
		     * @returns {boolean} Returns `true` if `path` exists, else `false`.
		     * @example
		     *
		     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
		     *
		     * _.hasIn(object, 'a');
		     * // => true
		     *
		     * _.hasIn(object, 'a.b');
		     * // => true
		     *
		     * _.hasIn(object, ['a', 'b']);
		     * // => true
		     *
		     * _.hasIn(object, 'b');
		     * // => false
		     */
		    function hasIn(object, path) {
		      return object != null && hasPath(object, path, baseHasIn);
		    }

		    /**
		     * Creates an object composed of the inverted keys and values of `object`.
		     * If `object` contains duplicate values, subsequent values overwrite
		     * property assignments of previous values.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.7.0
		     * @category Object
		     * @param {Object} object The object to invert.
		     * @returns {Object} Returns the new inverted object.
		     * @example
		     *
		     * var object = { 'a': 1, 'b': 2, 'c': 1 };
		     *
		     * _.invert(object);
		     * // => { '1': 'c', '2': 'b' }
		     */
		    var invert = createInverter(function(result, value, key) {
		      if (value != null &&
		          typeof value.toString != 'function') {
		        value = nativeObjectToString.call(value);
		      }

		      result[value] = key;
		    }, constant(identity));

		    /**
		     * This method is like `_.invert` except that the inverted object is generated
		     * from the results of running each element of `object` thru `iteratee`. The
		     * corresponding inverted value of each inverted key is an array of keys
		     * responsible for generating the inverted value. The iteratee is invoked
		     * with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.1.0
		     * @category Object
		     * @param {Object} object The object to invert.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {Object} Returns the new inverted object.
		     * @example
		     *
		     * var object = { 'a': 1, 'b': 2, 'c': 1 };
		     *
		     * _.invertBy(object);
		     * // => { '1': ['a', 'c'], '2': ['b'] }
		     *
		     * _.invertBy(object, function(value) {
		     *   return 'group' + value;
		     * });
		     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
		     */
		    var invertBy = createInverter(function(result, value, key) {
		      if (value != null &&
		          typeof value.toString != 'function') {
		        value = nativeObjectToString.call(value);
		      }

		      if (hasOwnProperty.call(result, value)) {
		        result[value].push(key);
		      } else {
		        result[value] = [key];
		      }
		    }, getIteratee);

		    /**
		     * Invokes the method at `path` of `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Object
		     * @param {Object} object The object to query.
		     * @param {Array|string} path The path of the method to invoke.
		     * @param {...*} [args] The arguments to invoke the method with.
		     * @returns {*} Returns the result of the invoked method.
		     * @example
		     *
		     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
		     *
		     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
		     * // => [2, 3]
		     */
		    var invoke = baseRest(baseInvoke);

		    /**
		     * Creates an array of the own enumerable property names of `object`.
		     *
		     * **Note:** Non-object values are coerced to objects. See the
		     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
		     * for more details.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Object
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the array of property names.
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     *   this.b = 2;
		     * }
		     *
		     * Foo.prototype.c = 3;
		     *
		     * _.keys(new Foo);
		     * // => ['a', 'b'] (iteration order is not guaranteed)
		     *
		     * _.keys('hi');
		     * // => ['0', '1']
		     */
		    function keys(object) {
		      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
		    }

		    /**
		     * Creates an array of the own and inherited enumerable property names of `object`.
		     *
		     * **Note:** Non-object values are coerced to objects.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Object
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the array of property names.
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     *   this.b = 2;
		     * }
		     *
		     * Foo.prototype.c = 3;
		     *
		     * _.keysIn(new Foo);
		     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
		     */
		    function keysIn(object) {
		      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
		    }

		    /**
		     * The opposite of `_.mapValues`; this method creates an object with the
		     * same values as `object` and keys generated by running each own enumerable
		     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
		     * with three arguments: (value, key, object).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.8.0
		     * @category Object
		     * @param {Object} object The object to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Object} Returns the new mapped object.
		     * @see _.mapValues
		     * @example
		     *
		     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
		     *   return key + value;
		     * });
		     * // => { 'a1': 1, 'b2': 2 }
		     */
		    function mapKeys(object, iteratee) {
		      var result = {};
		      iteratee = getIteratee(iteratee, 3);

		      baseForOwn(object, function(value, key, object) {
		        baseAssignValue(result, iteratee(value, key, object), value);
		      });
		      return result;
		    }

		    /**
		     * Creates an object with the same keys as `object` and values generated
		     * by running each own enumerable string keyed property of `object` thru
		     * `iteratee`. The iteratee is invoked with three arguments:
		     * (value, key, object).
		     *
		     * @static
		     * @memberOf _
		     * @since 2.4.0
		     * @category Object
		     * @param {Object} object The object to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Object} Returns the new mapped object.
		     * @see _.mapKeys
		     * @example
		     *
		     * var users = {
		     *   'fred':    { 'user': 'fred',    'age': 40 },
		     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
		     * };
		     *
		     * _.mapValues(users, function(o) { return o.age; });
		     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.mapValues(users, 'age');
		     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
		     */
		    function mapValues(object, iteratee) {
		      var result = {};
		      iteratee = getIteratee(iteratee, 3);

		      baseForOwn(object, function(value, key, object) {
		        baseAssignValue(result, key, iteratee(value, key, object));
		      });
		      return result;
		    }

		    /**
		     * This method is like `_.assign` except that it recursively merges own and
		     * inherited enumerable string keyed properties of source objects into the
		     * destination object. Source properties that resolve to `undefined` are
		     * skipped if a destination value exists. Array and plain object properties
		     * are merged recursively. Other objects and value types are overridden by
		     * assignment. Source objects are applied from left to right. Subsequent
		     * sources overwrite property assignments of previous sources.
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.5.0
		     * @category Object
		     * @param {Object} object The destination object.
		     * @param {...Object} [sources] The source objects.
		     * @returns {Object} Returns `object`.
		     * @example
		     *
		     * var object = {
		     *   'a': [{ 'b': 2 }, { 'd': 4 }]
		     * };
		     *
		     * var other = {
		     *   'a': [{ 'c': 3 }, { 'e': 5 }]
		     * };
		     *
		     * _.merge(object, other);
		     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
		     */
		    var merge = createAssigner(function(object, source, srcIndex) {
		      baseMerge(object, source, srcIndex);
		    });

		    /**
		     * This method is like `_.merge` except that it accepts `customizer` which
		     * is invoked to produce the merged values of the destination and source
		     * properties. If `customizer` returns `undefined`, merging is handled by the
		     * method instead. The `customizer` is invoked with six arguments:
		     * (objValue, srcValue, key, object, source, stack).
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Object
		     * @param {Object} object The destination object.
		     * @param {...Object} sources The source objects.
		     * @param {Function} customizer The function to customize assigned values.
		     * @returns {Object} Returns `object`.
		     * @example
		     *
		     * function customizer(objValue, srcValue) {
		     *   if (_.isArray(objValue)) {
		     *     return objValue.concat(srcValue);
		     *   }
		     * }
		     *
		     * var object = { 'a': [1], 'b': [2] };
		     * var other = { 'a': [3], 'b': [4] };
		     *
		     * _.mergeWith(object, other, customizer);
		     * // => { 'a': [1, 3], 'b': [2, 4] }
		     */
		    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
		      baseMerge(object, source, srcIndex, customizer);
		    });

		    /**
		     * The opposite of `_.pick`; this method creates an object composed of the
		     * own and inherited enumerable property paths of `object` that are not omitted.
		     *
		     * **Note:** This method is considerably slower than `_.pick`.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Object
		     * @param {Object} object The source object.
		     * @param {...(string|string[])} [paths] The property paths to omit.
		     * @returns {Object} Returns the new object.
		     * @example
		     *
		     * var object = { 'a': 1, 'b': '2', 'c': 3 };
		     *
		     * _.omit(object, ['a', 'c']);
		     * // => { 'b': '2' }
		     */
		    var omit = flatRest(function(object, paths) {
		      var result = {};
		      if (object == null) {
		        return result;
		      }
		      var isDeep = false;
		      paths = arrayMap(paths, function(path) {
		        path = castPath(path, object);
		        isDeep || (isDeep = path.length > 1);
		        return path;
		      });
		      copyObject(object, getAllKeysIn(object), result);
		      if (isDeep) {
		        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
		      }
		      var length = paths.length;
		      while (length--) {
		        baseUnset(result, paths[length]);
		      }
		      return result;
		    });

		    /**
		     * The opposite of `_.pickBy`; this method creates an object composed of
		     * the own and inherited enumerable string keyed properties of `object` that
		     * `predicate` doesn't return truthy for. The predicate is invoked with two
		     * arguments: (value, key).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Object
		     * @param {Object} object The source object.
		     * @param {Function} [predicate=_.identity] The function invoked per property.
		     * @returns {Object} Returns the new object.
		     * @example
		     *
		     * var object = { 'a': 1, 'b': '2', 'c': 3 };
		     *
		     * _.omitBy(object, _.isNumber);
		     * // => { 'b': '2' }
		     */
		    function omitBy(object, predicate) {
		      return pickBy(object, negate(getIteratee(predicate)));
		    }

		    /**
		     * Creates an object composed of the picked `object` properties.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Object
		     * @param {Object} object The source object.
		     * @param {...(string|string[])} [paths] The property paths to pick.
		     * @returns {Object} Returns the new object.
		     * @example
		     *
		     * var object = { 'a': 1, 'b': '2', 'c': 3 };
		     *
		     * _.pick(object, ['a', 'c']);
		     * // => { 'a': 1, 'c': 3 }
		     */
		    var pick = flatRest(function(object, paths) {
		      return object == null ? {} : basePick(object, paths);
		    });

		    /**
		     * Creates an object composed of the `object` properties `predicate` returns
		     * truthy for. The predicate is invoked with two arguments: (value, key).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Object
		     * @param {Object} object The source object.
		     * @param {Function} [predicate=_.identity] The function invoked per property.
		     * @returns {Object} Returns the new object.
		     * @example
		     *
		     * var object = { 'a': 1, 'b': '2', 'c': 3 };
		     *
		     * _.pickBy(object, _.isNumber);
		     * // => { 'a': 1, 'c': 3 }
		     */
		    function pickBy(object, predicate) {
		      if (object == null) {
		        return {};
		      }
		      var props = arrayMap(getAllKeysIn(object), function(prop) {
		        return [prop];
		      });
		      predicate = getIteratee(predicate);
		      return basePickBy(object, props, function(value, path) {
		        return predicate(value, path[0]);
		      });
		    }

		    /**
		     * This method is like `_.get` except that if the resolved value is a
		     * function it's invoked with the `this` binding of its parent object and
		     * its result is returned.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Object
		     * @param {Object} object The object to query.
		     * @param {Array|string} path The path of the property to resolve.
		     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
		     * @returns {*} Returns the resolved value.
		     * @example
		     *
		     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
		     *
		     * _.result(object, 'a[0].b.c1');
		     * // => 3
		     *
		     * _.result(object, 'a[0].b.c2');
		     * // => 4
		     *
		     * _.result(object, 'a[0].b.c3', 'default');
		     * // => 'default'
		     *
		     * _.result(object, 'a[0].b.c3', _.constant('default'));
		     * // => 'default'
		     */
		    function result(object, path, defaultValue) {
		      path = castPath(path, object);

		      var index = -1,
		          length = path.length;

		      // Ensure the loop is entered when path is empty.
		      if (!length) {
		        length = 1;
		        object = undefined$1;
		      }
		      while (++index < length) {
		        var value = object == null ? undefined$1 : object[toKey(path[index])];
		        if (value === undefined$1) {
		          index = length;
		          value = defaultValue;
		        }
		        object = isFunction(value) ? value.call(object) : value;
		      }
		      return object;
		    }

		    /**
		     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
		     * it's created. Arrays are created for missing index properties while objects
		     * are created for all other missing properties. Use `_.setWith` to customize
		     * `path` creation.
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.7.0
		     * @category Object
		     * @param {Object} object The object to modify.
		     * @param {Array|string} path The path of the property to set.
		     * @param {*} value The value to set.
		     * @returns {Object} Returns `object`.
		     * @example
		     *
		     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
		     *
		     * _.set(object, 'a[0].b.c', 4);
		     * console.log(object.a[0].b.c);
		     * // => 4
		     *
		     * _.set(object, ['x', '0', 'y', 'z'], 5);
		     * console.log(object.x[0].y.z);
		     * // => 5
		     */
		    function set(object, path, value) {
		      return object == null ? object : baseSet(object, path, value);
		    }

		    /**
		     * This method is like `_.set` except that it accepts `customizer` which is
		     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
		     * path creation is handled by the method instead. The `customizer` is invoked
		     * with three arguments: (nsValue, key, nsObject).
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Object
		     * @param {Object} object The object to modify.
		     * @param {Array|string} path The path of the property to set.
		     * @param {*} value The value to set.
		     * @param {Function} [customizer] The function to customize assigned values.
		     * @returns {Object} Returns `object`.
		     * @example
		     *
		     * var object = {};
		     *
		     * _.setWith(object, '[0][1]', 'a', Object);
		     * // => { '0': { '1': 'a' } }
		     */
		    function setWith(object, path, value, customizer) {
		      customizer = typeof customizer == 'function' ? customizer : undefined$1;
		      return object == null ? object : baseSet(object, path, value, customizer);
		    }

		    /**
		     * Creates an array of own enumerable string keyed-value pairs for `object`
		     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
		     * entries are returned.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @alias entries
		     * @category Object
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the key-value pairs.
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     *   this.b = 2;
		     * }
		     *
		     * Foo.prototype.c = 3;
		     *
		     * _.toPairs(new Foo);
		     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
		     */
		    var toPairs = createToPairs(keys);

		    /**
		     * Creates an array of own and inherited enumerable string keyed-value pairs
		     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
		     * or set, its entries are returned.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @alias entriesIn
		     * @category Object
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the key-value pairs.
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     *   this.b = 2;
		     * }
		     *
		     * Foo.prototype.c = 3;
		     *
		     * _.toPairsIn(new Foo);
		     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
		     */
		    var toPairsIn = createToPairs(keysIn);

		    /**
		     * An alternative to `_.reduce`; this method transforms `object` to a new
		     * `accumulator` object which is the result of running each of its own
		     * enumerable string keyed properties thru `iteratee`, with each invocation
		     * potentially mutating the `accumulator` object. If `accumulator` is not
		     * provided, a new object with the same `[[Prototype]]` will be used. The
		     * iteratee is invoked with four arguments: (accumulator, value, key, object).
		     * Iteratee functions may exit iteration early by explicitly returning `false`.
		     *
		     * @static
		     * @memberOf _
		     * @since 1.3.0
		     * @category Object
		     * @param {Object} object The object to iterate over.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @param {*} [accumulator] The custom accumulator value.
		     * @returns {*} Returns the accumulated value.
		     * @example
		     *
		     * _.transform([2, 3, 4], function(result, n) {
		     *   result.push(n *= n);
		     *   return n % 2 == 0;
		     * }, []);
		     * // => [4, 9]
		     *
		     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
		     *   (result[value] || (result[value] = [])).push(key);
		     * }, {});
		     * // => { '1': ['a', 'c'], '2': ['b'] }
		     */
		    function transform(object, iteratee, accumulator) {
		      var isArr = isArray(object),
		          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

		      iteratee = getIteratee(iteratee, 4);
		      if (accumulator == null) {
		        var Ctor = object && object.constructor;
		        if (isArrLike) {
		          accumulator = isArr ? new Ctor : [];
		        }
		        else if (isObject(object)) {
		          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
		        }
		        else {
		          accumulator = {};
		        }
		      }
		      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
		        return iteratee(accumulator, value, index, object);
		      });
		      return accumulator;
		    }

		    /**
		     * Removes the property at `path` of `object`.
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Object
		     * @param {Object} object The object to modify.
		     * @param {Array|string} path The path of the property to unset.
		     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
		     * @example
		     *
		     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
		     * _.unset(object, 'a[0].b.c');
		     * // => true
		     *
		     * console.log(object);
		     * // => { 'a': [{ 'b': {} }] };
		     *
		     * _.unset(object, ['a', '0', 'b', 'c']);
		     * // => true
		     *
		     * console.log(object);
		     * // => { 'a': [{ 'b': {} }] };
		     */
		    function unset(object, path) {
		      return object == null ? true : baseUnset(object, path);
		    }

		    /**
		     * This method is like `_.set` except that accepts `updater` to produce the
		     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
		     * is invoked with one argument: (value).
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.6.0
		     * @category Object
		     * @param {Object} object The object to modify.
		     * @param {Array|string} path The path of the property to set.
		     * @param {Function} updater The function to produce the updated value.
		     * @returns {Object} Returns `object`.
		     * @example
		     *
		     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
		     *
		     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
		     * console.log(object.a[0].b.c);
		     * // => 9
		     *
		     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
		     * console.log(object.x[0].y.z);
		     * // => 0
		     */
		    function update(object, path, updater) {
		      return object == null ? object : baseUpdate(object, path, castFunction(updater));
		    }

		    /**
		     * This method is like `_.update` except that it accepts `customizer` which is
		     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
		     * path creation is handled by the method instead. The `customizer` is invoked
		     * with three arguments: (nsValue, key, nsObject).
		     *
		     * **Note:** This method mutates `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.6.0
		     * @category Object
		     * @param {Object} object The object to modify.
		     * @param {Array|string} path The path of the property to set.
		     * @param {Function} updater The function to produce the updated value.
		     * @param {Function} [customizer] The function to customize assigned values.
		     * @returns {Object} Returns `object`.
		     * @example
		     *
		     * var object = {};
		     *
		     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
		     * // => { '0': { '1': 'a' } }
		     */
		    function updateWith(object, path, updater, customizer) {
		      customizer = typeof customizer == 'function' ? customizer : undefined$1;
		      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
		    }

		    /**
		     * Creates an array of the own enumerable string keyed property values of `object`.
		     *
		     * **Note:** Non-object values are coerced to objects.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Object
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the array of property values.
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     *   this.b = 2;
		     * }
		     *
		     * Foo.prototype.c = 3;
		     *
		     * _.values(new Foo);
		     * // => [1, 2] (iteration order is not guaranteed)
		     *
		     * _.values('hi');
		     * // => ['h', 'i']
		     */
		    function values(object) {
		      return object == null ? [] : baseValues(object, keys(object));
		    }

		    /**
		     * Creates an array of the own and inherited enumerable string keyed property
		     * values of `object`.
		     *
		     * **Note:** Non-object values are coerced to objects.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Object
		     * @param {Object} object The object to query.
		     * @returns {Array} Returns the array of property values.
		     * @example
		     *
		     * function Foo() {
		     *   this.a = 1;
		     *   this.b = 2;
		     * }
		     *
		     * Foo.prototype.c = 3;
		     *
		     * _.valuesIn(new Foo);
		     * // => [1, 2, 3] (iteration order is not guaranteed)
		     */
		    function valuesIn(object) {
		      return object == null ? [] : baseValues(object, keysIn(object));
		    }

		    /*------------------------------------------------------------------------*/

		    /**
		     * Clamps `number` within the inclusive `lower` and `upper` bounds.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Number
		     * @param {number} number The number to clamp.
		     * @param {number} [lower] The lower bound.
		     * @param {number} upper The upper bound.
		     * @returns {number} Returns the clamped number.
		     * @example
		     *
		     * _.clamp(-10, -5, 5);
		     * // => -5
		     *
		     * _.clamp(10, -5, 5);
		     * // => 5
		     */
		    function clamp(number, lower, upper) {
		      if (upper === undefined$1) {
		        upper = lower;
		        lower = undefined$1;
		      }
		      if (upper !== undefined$1) {
		        upper = toNumber(upper);
		        upper = upper === upper ? upper : 0;
		      }
		      if (lower !== undefined$1) {
		        lower = toNumber(lower);
		        lower = lower === lower ? lower : 0;
		      }
		      return baseClamp(toNumber(number), lower, upper);
		    }

		    /**
		     * Checks if `n` is between `start` and up to, but not including, `end`. If
		     * `end` is not specified, it's set to `start` with `start` then set to `0`.
		     * If `start` is greater than `end` the params are swapped to support
		     * negative ranges.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.3.0
		     * @category Number
		     * @param {number} number The number to check.
		     * @param {number} [start=0] The start of the range.
		     * @param {number} end The end of the range.
		     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
		     * @see _.range, _.rangeRight
		     * @example
		     *
		     * _.inRange(3, 2, 4);
		     * // => true
		     *
		     * _.inRange(4, 8);
		     * // => true
		     *
		     * _.inRange(4, 2);
		     * // => false
		     *
		     * _.inRange(2, 2);
		     * // => false
		     *
		     * _.inRange(1.2, 2);
		     * // => true
		     *
		     * _.inRange(5.2, 4);
		     * // => false
		     *
		     * _.inRange(-3, -2, -6);
		     * // => true
		     */
		    function inRange(number, start, end) {
		      start = toFinite(start);
		      if (end === undefined$1) {
		        end = start;
		        start = 0;
		      } else {
		        end = toFinite(end);
		      }
		      number = toNumber(number);
		      return baseInRange(number, start, end);
		    }

		    /**
		     * Produces a random number between the inclusive `lower` and `upper` bounds.
		     * If only one argument is provided a number between `0` and the given number
		     * is returned. If `floating` is `true`, or either `lower` or `upper` are
		     * floats, a floating-point number is returned instead of an integer.
		     *
		     * **Note:** JavaScript follows the IEEE-754 standard for resolving
		     * floating-point values which can produce unexpected results.
		     *
		     * @static
		     * @memberOf _
		     * @since 0.7.0
		     * @category Number
		     * @param {number} [lower=0] The lower bound.
		     * @param {number} [upper=1] The upper bound.
		     * @param {boolean} [floating] Specify returning a floating-point number.
		     * @returns {number} Returns the random number.
		     * @example
		     *
		     * _.random(0, 5);
		     * // => an integer between 0 and 5
		     *
		     * _.random(5);
		     * // => also an integer between 0 and 5
		     *
		     * _.random(5, true);
		     * // => a floating-point number between 0 and 5
		     *
		     * _.random(1.2, 5.2);
		     * // => a floating-point number between 1.2 and 5.2
		     */
		    function random(lower, upper, floating) {
		      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
		        upper = floating = undefined$1;
		      }
		      if (floating === undefined$1) {
		        if (typeof upper == 'boolean') {
		          floating = upper;
		          upper = undefined$1;
		        }
		        else if (typeof lower == 'boolean') {
		          floating = lower;
		          lower = undefined$1;
		        }
		      }
		      if (lower === undefined$1 && upper === undefined$1) {
		        lower = 0;
		        upper = 1;
		      }
		      else {
		        lower = toFinite(lower);
		        if (upper === undefined$1) {
		          upper = lower;
		          lower = 0;
		        } else {
		          upper = toFinite(upper);
		        }
		      }
		      if (lower > upper) {
		        var temp = lower;
		        lower = upper;
		        upper = temp;
		      }
		      if (floating || lower % 1 || upper % 1) {
		        var rand = nativeRandom();
		        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
		      }
		      return baseRandom(lower, upper);
		    }

		    /*------------------------------------------------------------------------*/

		    /**
		     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to convert.
		     * @returns {string} Returns the camel cased string.
		     * @example
		     *
		     * _.camelCase('Foo Bar');
		     * // => 'fooBar'
		     *
		     * _.camelCase('--foo-bar--');
		     * // => 'fooBar'
		     *
		     * _.camelCase('__FOO_BAR__');
		     * // => 'fooBar'
		     */
		    var camelCase = createCompounder(function(result, word, index) {
		      word = word.toLowerCase();
		      return result + (index ? capitalize(word) : word);
		    });

		    /**
		     * Converts the first character of `string` to upper case and the remaining
		     * to lower case.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to capitalize.
		     * @returns {string} Returns the capitalized string.
		     * @example
		     *
		     * _.capitalize('FRED');
		     * // => 'Fred'
		     */
		    function capitalize(string) {
		      return upperFirst(toString(string).toLowerCase());
		    }

		    /**
		     * Deburrs `string` by converting
		     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
		     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
		     * letters to basic Latin letters and removing
		     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to deburr.
		     * @returns {string} Returns the deburred string.
		     * @example
		     *
		     * _.deburr('déjà vu');
		     * // => 'deja vu'
		     */
		    function deburr(string) {
		      string = toString(string);
		      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
		    }

		    /**
		     * Checks if `string` ends with the given target string.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to inspect.
		     * @param {string} [target] The string to search for.
		     * @param {number} [position=string.length] The position to search up to.
		     * @returns {boolean} Returns `true` if `string` ends with `target`,
		     *  else `false`.
		     * @example
		     *
		     * _.endsWith('abc', 'c');
		     * // => true
		     *
		     * _.endsWith('abc', 'b');
		     * // => false
		     *
		     * _.endsWith('abc', 'b', 2);
		     * // => true
		     */
		    function endsWith(string, target, position) {
		      string = toString(string);
		      target = baseToString(target);

		      var length = string.length;
		      position = position === undefined$1
		        ? length
		        : baseClamp(toInteger(position), 0, length);

		      var end = position;
		      position -= target.length;
		      return position >= 0 && string.slice(position, end) == target;
		    }

		    /**
		     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
		     * corresponding HTML entities.
		     *
		     * **Note:** No other characters are escaped. To escape additional
		     * characters use a third-party library like [_he_](https://mths.be/he).
		     *
		     * Though the ">" character is escaped for symmetry, characters like
		     * ">" and "/" don't need escaping in HTML and have no special meaning
		     * unless they're part of a tag or unquoted attribute value. See
		     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
		     * (under "semi-related fun fact") for more details.
		     *
		     * When working with HTML you should always
		     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
		     * XSS vectors.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category String
		     * @param {string} [string=''] The string to escape.
		     * @returns {string} Returns the escaped string.
		     * @example
		     *
		     * _.escape('fred, barney, & pebbles');
		     * // => 'fred, barney, &amp; pebbles'
		     */
		    function escape(string) {
		      string = toString(string);
		      return (string && reHasUnescapedHtml.test(string))
		        ? string.replace(reUnescapedHtml, escapeHtmlChar)
		        : string;
		    }

		    /**
		     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
		     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to escape.
		     * @returns {string} Returns the escaped string.
		     * @example
		     *
		     * _.escapeRegExp('[lodash](https://lodash.com/)');
		     * // => '\[lodash\]\(https://lodash\.com/\)'
		     */
		    function escapeRegExp(string) {
		      string = toString(string);
		      return (string && reHasRegExpChar.test(string))
		        ? string.replace(reRegExpChar, '\\$&')
		        : string;
		    }

		    /**
		     * Converts `string` to
		     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to convert.
		     * @returns {string} Returns the kebab cased string.
		     * @example
		     *
		     * _.kebabCase('Foo Bar');
		     * // => 'foo-bar'
		     *
		     * _.kebabCase('fooBar');
		     * // => 'foo-bar'
		     *
		     * _.kebabCase('__FOO_BAR__');
		     * // => 'foo-bar'
		     */
		    var kebabCase = createCompounder(function(result, word, index) {
		      return result + (index ? '-' : '') + word.toLowerCase();
		    });

		    /**
		     * Converts `string`, as space separated words, to lower case.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to convert.
		     * @returns {string} Returns the lower cased string.
		     * @example
		     *
		     * _.lowerCase('--Foo-Bar--');
		     * // => 'foo bar'
		     *
		     * _.lowerCase('fooBar');
		     * // => 'foo bar'
		     *
		     * _.lowerCase('__FOO_BAR__');
		     * // => 'foo bar'
		     */
		    var lowerCase = createCompounder(function(result, word, index) {
		      return result + (index ? ' ' : '') + word.toLowerCase();
		    });

		    /**
		     * Converts the first character of `string` to lower case.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to convert.
		     * @returns {string} Returns the converted string.
		     * @example
		     *
		     * _.lowerFirst('Fred');
		     * // => 'fred'
		     *
		     * _.lowerFirst('FRED');
		     * // => 'fRED'
		     */
		    var lowerFirst = createCaseFirst('toLowerCase');

		    /**
		     * Pads `string` on the left and right sides if it's shorter than `length`.
		     * Padding characters are truncated if they can't be evenly divided by `length`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to pad.
		     * @param {number} [length=0] The padding length.
		     * @param {string} [chars=' '] The string used as padding.
		     * @returns {string} Returns the padded string.
		     * @example
		     *
		     * _.pad('abc', 8);
		     * // => '  abc   '
		     *
		     * _.pad('abc', 8, '_-');
		     * // => '_-abc_-_'
		     *
		     * _.pad('abc', 3);
		     * // => 'abc'
		     */
		    function pad(string, length, chars) {
		      string = toString(string);
		      length = toInteger(length);

		      var strLength = length ? stringSize(string) : 0;
		      if (!length || strLength >= length) {
		        return string;
		      }
		      var mid = (length - strLength) / 2;
		      return (
		        createPadding(nativeFloor(mid), chars) +
		        string +
		        createPadding(nativeCeil(mid), chars)
		      );
		    }

		    /**
		     * Pads `string` on the right side if it's shorter than `length`. Padding
		     * characters are truncated if they exceed `length`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to pad.
		     * @param {number} [length=0] The padding length.
		     * @param {string} [chars=' '] The string used as padding.
		     * @returns {string} Returns the padded string.
		     * @example
		     *
		     * _.padEnd('abc', 6);
		     * // => 'abc   '
		     *
		     * _.padEnd('abc', 6, '_-');
		     * // => 'abc_-_'
		     *
		     * _.padEnd('abc', 3);
		     * // => 'abc'
		     */
		    function padEnd(string, length, chars) {
		      string = toString(string);
		      length = toInteger(length);

		      var strLength = length ? stringSize(string) : 0;
		      return (length && strLength < length)
		        ? (string + createPadding(length - strLength, chars))
		        : string;
		    }

		    /**
		     * Pads `string` on the left side if it's shorter than `length`. Padding
		     * characters are truncated if they exceed `length`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to pad.
		     * @param {number} [length=0] The padding length.
		     * @param {string} [chars=' '] The string used as padding.
		     * @returns {string} Returns the padded string.
		     * @example
		     *
		     * _.padStart('abc', 6);
		     * // => '   abc'
		     *
		     * _.padStart('abc', 6, '_-');
		     * // => '_-_abc'
		     *
		     * _.padStart('abc', 3);
		     * // => 'abc'
		     */
		    function padStart(string, length, chars) {
		      string = toString(string);
		      length = toInteger(length);

		      var strLength = length ? stringSize(string) : 0;
		      return (length && strLength < length)
		        ? (createPadding(length - strLength, chars) + string)
		        : string;
		    }

		    /**
		     * Converts `string` to an integer of the specified radix. If `radix` is
		     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
		     * hexadecimal, in which case a `radix` of `16` is used.
		     *
		     * **Note:** This method aligns with the
		     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
		     *
		     * @static
		     * @memberOf _
		     * @since 1.1.0
		     * @category String
		     * @param {string} string The string to convert.
		     * @param {number} [radix=10] The radix to interpret `value` by.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {number} Returns the converted integer.
		     * @example
		     *
		     * _.parseInt('08');
		     * // => 8
		     *
		     * _.map(['6', '08', '10'], _.parseInt);
		     * // => [6, 8, 10]
		     */
		    function parseInt(string, radix, guard) {
		      if (guard || radix == null) {
		        radix = 0;
		      } else if (radix) {
		        radix = +radix;
		      }
		      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
		    }

		    /**
		     * Repeats the given string `n` times.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to repeat.
		     * @param {number} [n=1] The number of times to repeat the string.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {string} Returns the repeated string.
		     * @example
		     *
		     * _.repeat('*', 3);
		     * // => '***'
		     *
		     * _.repeat('abc', 2);
		     * // => 'abcabc'
		     *
		     * _.repeat('abc', 0);
		     * // => ''
		     */
		    function repeat(string, n, guard) {
		      if ((guard ? isIterateeCall(string, n, guard) : n === undefined$1)) {
		        n = 1;
		      } else {
		        n = toInteger(n);
		      }
		      return baseRepeat(toString(string), n);
		    }

		    /**
		     * Replaces matches for `pattern` in `string` with `replacement`.
		     *
		     * **Note:** This method is based on
		     * [`String#replace`](https://mdn.io/String/replace).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to modify.
		     * @param {RegExp|string} pattern The pattern to replace.
		     * @param {Function|string} replacement The match replacement.
		     * @returns {string} Returns the modified string.
		     * @example
		     *
		     * _.replace('Hi Fred', 'Fred', 'Barney');
		     * // => 'Hi Barney'
		     */
		    function replace() {
		      var args = arguments,
		          string = toString(args[0]);

		      return args.length < 3 ? string : string.replace(args[1], args[2]);
		    }

		    /**
		     * Converts `string` to
		     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to convert.
		     * @returns {string} Returns the snake cased string.
		     * @example
		     *
		     * _.snakeCase('Foo Bar');
		     * // => 'foo_bar'
		     *
		     * _.snakeCase('fooBar');
		     * // => 'foo_bar'
		     *
		     * _.snakeCase('--FOO-BAR--');
		     * // => 'foo_bar'
		     */
		    var snakeCase = createCompounder(function(result, word, index) {
		      return result + (index ? '_' : '') + word.toLowerCase();
		    });

		    /**
		     * Splits `string` by `separator`.
		     *
		     * **Note:** This method is based on
		     * [`String#split`](https://mdn.io/String/split).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to split.
		     * @param {RegExp|string} separator The separator pattern to split by.
		     * @param {number} [limit] The length to truncate results to.
		     * @returns {Array} Returns the string segments.
		     * @example
		     *
		     * _.split('a-b-c', '-', 2);
		     * // => ['a', 'b']
		     */
		    function split(string, separator, limit) {
		      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
		        separator = limit = undefined$1;
		      }
		      limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
		      if (!limit) {
		        return [];
		      }
		      string = toString(string);
		      if (string && (
		            typeof separator == 'string' ||
		            (separator != null && !isRegExp(separator))
		          )) {
		        separator = baseToString(separator);
		        if (!separator && hasUnicode(string)) {
		          return castSlice(stringToArray(string), 0, limit);
		        }
		      }
		      return string.split(separator, limit);
		    }

		    /**
		     * Converts `string` to
		     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
		     *
		     * @static
		     * @memberOf _
		     * @since 3.1.0
		     * @category String
		     * @param {string} [string=''] The string to convert.
		     * @returns {string} Returns the start cased string.
		     * @example
		     *
		     * _.startCase('--foo-bar--');
		     * // => 'Foo Bar'
		     *
		     * _.startCase('fooBar');
		     * // => 'Foo Bar'
		     *
		     * _.startCase('__FOO_BAR__');
		     * // => 'FOO BAR'
		     */
		    var startCase = createCompounder(function(result, word, index) {
		      return result + (index ? ' ' : '') + upperFirst(word);
		    });

		    /**
		     * Checks if `string` starts with the given target string.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to inspect.
		     * @param {string} [target] The string to search for.
		     * @param {number} [position=0] The position to search from.
		     * @returns {boolean} Returns `true` if `string` starts with `target`,
		     *  else `false`.
		     * @example
		     *
		     * _.startsWith('abc', 'a');
		     * // => true
		     *
		     * _.startsWith('abc', 'b');
		     * // => false
		     *
		     * _.startsWith('abc', 'b', 1);
		     * // => true
		     */
		    function startsWith(string, target, position) {
		      string = toString(string);
		      position = position == null
		        ? 0
		        : baseClamp(toInteger(position), 0, string.length);

		      target = baseToString(target);
		      return string.slice(position, position + target.length) == target;
		    }

		    /**
		     * Creates a compiled template function that can interpolate data properties
		     * in "interpolate" delimiters, HTML-escape interpolated data properties in
		     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
		     * properties may be accessed as free variables in the template. If a setting
		     * object is given, it takes precedence over `_.templateSettings` values.
		     *
		     * **Note:** In the development build `_.template` utilizes
		     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
		     * for easier debugging.
		     *
		     * For more information on precompiling templates see
		     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
		     *
		     * For more information on Chrome extension sandboxes see
		     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category String
		     * @param {string} [string=''] The template string.
		     * @param {Object} [options={}] The options object.
		     * @param {RegExp} [options.escape=_.templateSettings.escape]
		     *  The HTML "escape" delimiter.
		     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
		     *  The "evaluate" delimiter.
		     * @param {Object} [options.imports=_.templateSettings.imports]
		     *  An object to import into the template as free variables.
		     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
		     *  The "interpolate" delimiter.
		     * @param {string} [options.sourceURL='lodash.templateSources[n]']
		     *  The sourceURL of the compiled template.
		     * @param {string} [options.variable='obj']
		     *  The data object variable name.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {Function} Returns the compiled template function.
		     * @example
		     *
		     * // Use the "interpolate" delimiter to create a compiled template.
		     * var compiled = _.template('hello <%= user %>!');
		     * compiled({ 'user': 'fred' });
		     * // => 'hello fred!'
		     *
		     * // Use the HTML "escape" delimiter to escape data property values.
		     * var compiled = _.template('<b><%- value %></b>');
		     * compiled({ 'value': '<script>' });
		     * // => '<b>&lt;script&gt;</b>'
		     *
		     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
		     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
		     * compiled({ 'users': ['fred', 'barney'] });
		     * // => '<li>fred</li><li>barney</li>'
		     *
		     * // Use the internal `print` function in "evaluate" delimiters.
		     * var compiled = _.template('<% print("hello " + user); %>!');
		     * compiled({ 'user': 'barney' });
		     * // => 'hello barney!'
		     *
		     * // Use the ES template literal delimiter as an "interpolate" delimiter.
		     * // Disable support by replacing the "interpolate" delimiter.
		     * var compiled = _.template('hello ${ user }!');
		     * compiled({ 'user': 'pebbles' });
		     * // => 'hello pebbles!'
		     *
		     * // Use backslashes to treat delimiters as plain text.
		     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
		     * compiled({ 'value': 'ignored' });
		     * // => '<%- value %>'
		     *
		     * // Use the `imports` option to import `jQuery` as `jq`.
		     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
		     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
		     * compiled({ 'users': ['fred', 'barney'] });
		     * // => '<li>fred</li><li>barney</li>'
		     *
		     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
		     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
		     * compiled(data);
		     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
		     *
		     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
		     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
		     * compiled.source;
		     * // => function(data) {
		     * //   var __t, __p = '';
		     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
		     * //   return __p;
		     * // }
		     *
		     * // Use custom template delimiters.
		     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
		     * var compiled = _.template('hello {{ user }}!');
		     * compiled({ 'user': 'mustache' });
		     * // => 'hello mustache!'
		     *
		     * // Use the `source` property to inline compiled templates for meaningful
		     * // line numbers in error messages and stack traces.
		     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
		     *   var JST = {\
		     *     "main": ' + _.template(mainText).source + '\
		     *   };\
		     * ');
		     */
		    function template(string, options, guard) {
		      // Based on John Resig's `tmpl` implementation
		      // (http://ejohn.org/blog/javascript-micro-templating/)
		      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
		      var settings = lodash.templateSettings;

		      if (guard && isIterateeCall(string, options, guard)) {
		        options = undefined$1;
		      }
		      string = toString(string);
		      options = assignInWith({}, options, settings, customDefaultsAssignIn);

		      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
		          importsKeys = keys(imports),
		          importsValues = baseValues(imports, importsKeys);

		      var isEscaping,
		          isEvaluating,
		          index = 0,
		          interpolate = options.interpolate || reNoMatch,
		          source = "__p += '";

		      // Compile the regexp to match each delimiter.
		      var reDelimiters = RegExp(
		        (options.escape || reNoMatch).source + '|' +
		        interpolate.source + '|' +
		        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
		        (options.evaluate || reNoMatch).source + '|$'
		      , 'g');

		      // Use a sourceURL for easier debugging.
		      // The sourceURL gets injected into the source that's eval-ed, so be careful
		      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
		      // and escape the comment, thus injecting code that gets evaled.
		      var sourceURL = '//# sourceURL=' +
		        (hasOwnProperty.call(options, 'sourceURL')
		          ? (options.sourceURL + '').replace(/\s/g, ' ')
		          : ('lodash.templateSources[' + (++templateCounter) + ']')
		        ) + '\n';

		      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
		        interpolateValue || (interpolateValue = esTemplateValue);

		        // Escape characters that can't be included in string literals.
		        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

		        // Replace delimiters with snippets.
		        if (escapeValue) {
		          isEscaping = true;
		          source += "' +\n__e(" + escapeValue + ") +\n'";
		        }
		        if (evaluateValue) {
		          isEvaluating = true;
		          source += "';\n" + evaluateValue + ";\n__p += '";
		        }
		        if (interpolateValue) {
		          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
		        }
		        index = offset + match.length;

		        // The JS engine embedded in Adobe products needs `match` returned in
		        // order to produce the correct `offset` value.
		        return match;
		      });

		      source += "';\n";

		      // If `variable` is not specified wrap a with-statement around the generated
		      // code to add the data object to the top of the scope chain.
		      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
		      if (!variable) {
		        source = 'with (obj) {\n' + source + '\n}\n';
		      }
		      // Throw an error if a forbidden character was found in `variable`, to prevent
		      // potential command injection attacks.
		      else if (reForbiddenIdentifierChars.test(variable)) {
		        throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
		      }

		      // Cleanup code by stripping empty strings.
		      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
		        .replace(reEmptyStringMiddle, '$1')
		        .replace(reEmptyStringTrailing, '$1;');

		      // Frame code as the function body.
		      source = 'function(' + (variable || 'obj') + ') {\n' +
		        (variable
		          ? ''
		          : 'obj || (obj = {});\n'
		        ) +
		        "var __t, __p = ''" +
		        (isEscaping
		           ? ', __e = _.escape'
		           : ''
		        ) +
		        (isEvaluating
		          ? ', __j = Array.prototype.join;\n' +
		            "function print() { __p += __j.call(arguments, '') }\n"
		          : ';\n'
		        ) +
		        source +
		        'return __p\n}';

		      var result = attempt(function() {
		        return Function(importsKeys, sourceURL + 'return ' + source)
		          .apply(undefined$1, importsValues);
		      });

		      // Provide the compiled function's source by its `toString` method or
		      // the `source` property as a convenience for inlining compiled templates.
		      result.source = source;
		      if (isError(result)) {
		        throw result;
		      }
		      return result;
		    }

		    /**
		     * Converts `string`, as a whole, to lower case just like
		     * [String#toLowerCase](https://mdn.io/toLowerCase).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to convert.
		     * @returns {string} Returns the lower cased string.
		     * @example
		     *
		     * _.toLower('--Foo-Bar--');
		     * // => '--foo-bar--'
		     *
		     * _.toLower('fooBar');
		     * // => 'foobar'
		     *
		     * _.toLower('__FOO_BAR__');
		     * // => '__foo_bar__'
		     */
		    function toLower(value) {
		      return toString(value).toLowerCase();
		    }

		    /**
		     * Converts `string`, as a whole, to upper case just like
		     * [String#toUpperCase](https://mdn.io/toUpperCase).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to convert.
		     * @returns {string} Returns the upper cased string.
		     * @example
		     *
		     * _.toUpper('--foo-bar--');
		     * // => '--FOO-BAR--'
		     *
		     * _.toUpper('fooBar');
		     * // => 'FOOBAR'
		     *
		     * _.toUpper('__foo_bar__');
		     * // => '__FOO_BAR__'
		     */
		    function toUpper(value) {
		      return toString(value).toUpperCase();
		    }

		    /**
		     * Removes leading and trailing whitespace or specified characters from `string`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to trim.
		     * @param {string} [chars=whitespace] The characters to trim.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {string} Returns the trimmed string.
		     * @example
		     *
		     * _.trim('  abc  ');
		     * // => 'abc'
		     *
		     * _.trim('-_-abc-_-', '_-');
		     * // => 'abc'
		     *
		     * _.map(['  foo  ', '  bar  '], _.trim);
		     * // => ['foo', 'bar']
		     */
		    function trim(string, chars, guard) {
		      string = toString(string);
		      if (string && (guard || chars === undefined$1)) {
		        return baseTrim(string);
		      }
		      if (!string || !(chars = baseToString(chars))) {
		        return string;
		      }
		      var strSymbols = stringToArray(string),
		          chrSymbols = stringToArray(chars),
		          start = charsStartIndex(strSymbols, chrSymbols),
		          end = charsEndIndex(strSymbols, chrSymbols) + 1;

		      return castSlice(strSymbols, start, end).join('');
		    }

		    /**
		     * Removes trailing whitespace or specified characters from `string`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to trim.
		     * @param {string} [chars=whitespace] The characters to trim.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {string} Returns the trimmed string.
		     * @example
		     *
		     * _.trimEnd('  abc  ');
		     * // => '  abc'
		     *
		     * _.trimEnd('-_-abc-_-', '_-');
		     * // => '-_-abc'
		     */
		    function trimEnd(string, chars, guard) {
		      string = toString(string);
		      if (string && (guard || chars === undefined$1)) {
		        return string.slice(0, trimmedEndIndex(string) + 1);
		      }
		      if (!string || !(chars = baseToString(chars))) {
		        return string;
		      }
		      var strSymbols = stringToArray(string),
		          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

		      return castSlice(strSymbols, 0, end).join('');
		    }

		    /**
		     * Removes leading whitespace or specified characters from `string`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to trim.
		     * @param {string} [chars=whitespace] The characters to trim.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {string} Returns the trimmed string.
		     * @example
		     *
		     * _.trimStart('  abc  ');
		     * // => 'abc  '
		     *
		     * _.trimStart('-_-abc-_-', '_-');
		     * // => 'abc-_-'
		     */
		    function trimStart(string, chars, guard) {
		      string = toString(string);
		      if (string && (guard || chars === undefined$1)) {
		        return string.replace(reTrimStart, '');
		      }
		      if (!string || !(chars = baseToString(chars))) {
		        return string;
		      }
		      var strSymbols = stringToArray(string),
		          start = charsStartIndex(strSymbols, stringToArray(chars));

		      return castSlice(strSymbols, start).join('');
		    }

		    /**
		     * Truncates `string` if it's longer than the given maximum string length.
		     * The last characters of the truncated string are replaced with the omission
		     * string which defaults to "...".
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to truncate.
		     * @param {Object} [options={}] The options object.
		     * @param {number} [options.length=30] The maximum string length.
		     * @param {string} [options.omission='...'] The string to indicate text is omitted.
		     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
		     * @returns {string} Returns the truncated string.
		     * @example
		     *
		     * _.truncate('hi-diddly-ho there, neighborino');
		     * // => 'hi-diddly-ho there, neighbo...'
		     *
		     * _.truncate('hi-diddly-ho there, neighborino', {
		     *   'length': 24,
		     *   'separator': ' '
		     * });
		     * // => 'hi-diddly-ho there,...'
		     *
		     * _.truncate('hi-diddly-ho there, neighborino', {
		     *   'length': 24,
		     *   'separator': /,? +/
		     * });
		     * // => 'hi-diddly-ho there...'
		     *
		     * _.truncate('hi-diddly-ho there, neighborino', {
		     *   'omission': ' [...]'
		     * });
		     * // => 'hi-diddly-ho there, neig [...]'
		     */
		    function truncate(string, options) {
		      var length = DEFAULT_TRUNC_LENGTH,
		          omission = DEFAULT_TRUNC_OMISSION;

		      if (isObject(options)) {
		        var separator = 'separator' in options ? options.separator : separator;
		        length = 'length' in options ? toInteger(options.length) : length;
		        omission = 'omission' in options ? baseToString(options.omission) : omission;
		      }
		      string = toString(string);

		      var strLength = string.length;
		      if (hasUnicode(string)) {
		        var strSymbols = stringToArray(string);
		        strLength = strSymbols.length;
		      }
		      if (length >= strLength) {
		        return string;
		      }
		      var end = length - stringSize(omission);
		      if (end < 1) {
		        return omission;
		      }
		      var result = strSymbols
		        ? castSlice(strSymbols, 0, end).join('')
		        : string.slice(0, end);

		      if (separator === undefined$1) {
		        return result + omission;
		      }
		      if (strSymbols) {
		        end += (result.length - end);
		      }
		      if (isRegExp(separator)) {
		        if (string.slice(end).search(separator)) {
		          var match,
		              substring = result;

		          if (!separator.global) {
		            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
		          }
		          separator.lastIndex = 0;
		          while ((match = separator.exec(substring))) {
		            var newEnd = match.index;
		          }
		          result = result.slice(0, newEnd === undefined$1 ? end : newEnd);
		        }
		      } else if (string.indexOf(baseToString(separator), end) != end) {
		        var index = result.lastIndexOf(separator);
		        if (index > -1) {
		          result = result.slice(0, index);
		        }
		      }
		      return result + omission;
		    }

		    /**
		     * The inverse of `_.escape`; this method converts the HTML entities
		     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
		     * their corresponding characters.
		     *
		     * **Note:** No other HTML entities are unescaped. To unescape additional
		     * HTML entities use a third-party library like [_he_](https://mths.be/he).
		     *
		     * @static
		     * @memberOf _
		     * @since 0.6.0
		     * @category String
		     * @param {string} [string=''] The string to unescape.
		     * @returns {string} Returns the unescaped string.
		     * @example
		     *
		     * _.unescape('fred, barney, &amp; pebbles');
		     * // => 'fred, barney, & pebbles'
		     */
		    function unescape(string) {
		      string = toString(string);
		      return (string && reHasEscapedHtml.test(string))
		        ? string.replace(reEscapedHtml, unescapeHtmlChar)
		        : string;
		    }

		    /**
		     * Converts `string`, as space separated words, to upper case.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to convert.
		     * @returns {string} Returns the upper cased string.
		     * @example
		     *
		     * _.upperCase('--foo-bar');
		     * // => 'FOO BAR'
		     *
		     * _.upperCase('fooBar');
		     * // => 'FOO BAR'
		     *
		     * _.upperCase('__foo_bar__');
		     * // => 'FOO BAR'
		     */
		    var upperCase = createCompounder(function(result, word, index) {
		      return result + (index ? ' ' : '') + word.toUpperCase();
		    });

		    /**
		     * Converts the first character of `string` to upper case.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category String
		     * @param {string} [string=''] The string to convert.
		     * @returns {string} Returns the converted string.
		     * @example
		     *
		     * _.upperFirst('fred');
		     * // => 'Fred'
		     *
		     * _.upperFirst('FRED');
		     * // => 'FRED'
		     */
		    var upperFirst = createCaseFirst('toUpperCase');

		    /**
		     * Splits `string` into an array of its words.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category String
		     * @param {string} [string=''] The string to inspect.
		     * @param {RegExp|string} [pattern] The pattern to match words.
		     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		     * @returns {Array} Returns the words of `string`.
		     * @example
		     *
		     * _.words('fred, barney, & pebbles');
		     * // => ['fred', 'barney', 'pebbles']
		     *
		     * _.words('fred, barney, & pebbles', /[^, ]+/g);
		     * // => ['fred', 'barney', '&', 'pebbles']
		     */
		    function words(string, pattern, guard) {
		      string = toString(string);
		      pattern = guard ? undefined$1 : pattern;

		      if (pattern === undefined$1) {
		        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
		      }
		      return string.match(pattern) || [];
		    }

		    /*------------------------------------------------------------------------*/

		    /**
		     * Attempts to invoke `func`, returning either the result or the caught error
		     * object. Any additional arguments are provided to `func` when it's invoked.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Util
		     * @param {Function} func The function to attempt.
		     * @param {...*} [args] The arguments to invoke `func` with.
		     * @returns {*} Returns the `func` result or error object.
		     * @example
		     *
		     * // Avoid throwing errors for invalid selectors.
		     * var elements = _.attempt(function(selector) {
		     *   return document.querySelectorAll(selector);
		     * }, '>_>');
		     *
		     * if (_.isError(elements)) {
		     *   elements = [];
		     * }
		     */
		    var attempt = baseRest(function(func, args) {
		      try {
		        return apply(func, undefined$1, args);
		      } catch (e) {
		        return isError(e) ? e : new Error(e);
		      }
		    });

		    /**
		     * Binds methods of an object to the object itself, overwriting the existing
		     * method.
		     *
		     * **Note:** This method doesn't set the "length" property of bound functions.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Util
		     * @param {Object} object The object to bind and assign the bound methods to.
		     * @param {...(string|string[])} methodNames The object method names to bind.
		     * @returns {Object} Returns `object`.
		     * @example
		     *
		     * var view = {
		     *   'label': 'docs',
		     *   'click': function() {
		     *     console.log('clicked ' + this.label);
		     *   }
		     * };
		     *
		     * _.bindAll(view, ['click']);
		     * jQuery(element).on('click', view.click);
		     * // => Logs 'clicked docs' when clicked.
		     */
		    var bindAll = flatRest(function(object, methodNames) {
		      arrayEach(methodNames, function(key) {
		        key = toKey(key);
		        baseAssignValue(object, key, bind(object[key], object));
		      });
		      return object;
		    });

		    /**
		     * Creates a function that iterates over `pairs` and invokes the corresponding
		     * function of the first predicate to return truthy. The predicate-function
		     * pairs are invoked with the `this` binding and arguments of the created
		     * function.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Util
		     * @param {Array} pairs The predicate-function pairs.
		     * @returns {Function} Returns the new composite function.
		     * @example
		     *
		     * var func = _.cond([
		     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
		     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
		     *   [_.stubTrue,                      _.constant('no match')]
		     * ]);
		     *
		     * func({ 'a': 1, 'b': 2 });
		     * // => 'matches A'
		     *
		     * func({ 'a': 0, 'b': 1 });
		     * // => 'matches B'
		     *
		     * func({ 'a': '1', 'b': '2' });
		     * // => 'no match'
		     */
		    function cond(pairs) {
		      var length = pairs == null ? 0 : pairs.length,
		          toIteratee = getIteratee();

		      pairs = !length ? [] : arrayMap(pairs, function(pair) {
		        if (typeof pair[1] != 'function') {
		          throw new TypeError(FUNC_ERROR_TEXT);
		        }
		        return [toIteratee(pair[0]), pair[1]];
		      });

		      return baseRest(function(args) {
		        var index = -1;
		        while (++index < length) {
		          var pair = pairs[index];
		          if (apply(pair[0], this, args)) {
		            return apply(pair[1], this, args);
		          }
		        }
		      });
		    }

		    /**
		     * Creates a function that invokes the predicate properties of `source` with
		     * the corresponding property values of a given object, returning `true` if
		     * all predicates return truthy, else `false`.
		     *
		     * **Note:** The created function is equivalent to `_.conformsTo` with
		     * `source` partially applied.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Util
		     * @param {Object} source The object of property predicates to conform to.
		     * @returns {Function} Returns the new spec function.
		     * @example
		     *
		     * var objects = [
		     *   { 'a': 2, 'b': 1 },
		     *   { 'a': 1, 'b': 2 }
		     * ];
		     *
		     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
		     * // => [{ 'a': 1, 'b': 2 }]
		     */
		    function conforms(source) {
		      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
		    }

		    /**
		     * Creates a function that returns `value`.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.4.0
		     * @category Util
		     * @param {*} value The value to return from the new function.
		     * @returns {Function} Returns the new constant function.
		     * @example
		     *
		     * var objects = _.times(2, _.constant({ 'a': 1 }));
		     *
		     * console.log(objects);
		     * // => [{ 'a': 1 }, { 'a': 1 }]
		     *
		     * console.log(objects[0] === objects[1]);
		     * // => true
		     */
		    function constant(value) {
		      return function() {
		        return value;
		      };
		    }

		    /**
		     * Checks `value` to determine whether a default value should be returned in
		     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
		     * or `undefined`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.14.0
		     * @category Util
		     * @param {*} value The value to check.
		     * @param {*} defaultValue The default value.
		     * @returns {*} Returns the resolved value.
		     * @example
		     *
		     * _.defaultTo(1, 10);
		     * // => 1
		     *
		     * _.defaultTo(undefined, 10);
		     * // => 10
		     */
		    function defaultTo(value, defaultValue) {
		      return (value == null || value !== value) ? defaultValue : value;
		    }

		    /**
		     * Creates a function that returns the result of invoking the given functions
		     * with the `this` binding of the created function, where each successive
		     * invocation is supplied the return value of the previous.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Util
		     * @param {...(Function|Function[])} [funcs] The functions to invoke.
		     * @returns {Function} Returns the new composite function.
		     * @see _.flowRight
		     * @example
		     *
		     * function square(n) {
		     *   return n * n;
		     * }
		     *
		     * var addSquare = _.flow([_.add, square]);
		     * addSquare(1, 2);
		     * // => 9
		     */
		    var flow = createFlow();

		    /**
		     * This method is like `_.flow` except that it creates a function that
		     * invokes the given functions from right to left.
		     *
		     * @static
		     * @since 3.0.0
		     * @memberOf _
		     * @category Util
		     * @param {...(Function|Function[])} [funcs] The functions to invoke.
		     * @returns {Function} Returns the new composite function.
		     * @see _.flow
		     * @example
		     *
		     * function square(n) {
		     *   return n * n;
		     * }
		     *
		     * var addSquare = _.flowRight([square, _.add]);
		     * addSquare(1, 2);
		     * // => 9
		     */
		    var flowRight = createFlow(true);

		    /**
		     * This method returns the first argument it receives.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Util
		     * @param {*} value Any value.
		     * @returns {*} Returns `value`.
		     * @example
		     *
		     * var object = { 'a': 1 };
		     *
		     * console.log(_.identity(object) === object);
		     * // => true
		     */
		    function identity(value) {
		      return value;
		    }

		    /**
		     * Creates a function that invokes `func` with the arguments of the created
		     * function. If `func` is a property name, the created function returns the
		     * property value for a given element. If `func` is an array or object, the
		     * created function returns `true` for elements that contain the equivalent
		     * source properties, otherwise it returns `false`.
		     *
		     * @static
		     * @since 4.0.0
		     * @memberOf _
		     * @category Util
		     * @param {*} [func=_.identity] The value to convert to a callback.
		     * @returns {Function} Returns the callback.
		     * @example
		     *
		     * var users = [
		     *   { 'user': 'barney', 'age': 36, 'active': true },
		     *   { 'user': 'fred',   'age': 40, 'active': false }
		     * ];
		     *
		     * // The `_.matches` iteratee shorthand.
		     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
		     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
		     *
		     * // The `_.matchesProperty` iteratee shorthand.
		     * _.filter(users, _.iteratee(['user', 'fred']));
		     * // => [{ 'user': 'fred', 'age': 40 }]
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.map(users, _.iteratee('user'));
		     * // => ['barney', 'fred']
		     *
		     * // Create custom iteratee shorthands.
		     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
		     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
		     *     return func.test(string);
		     *   };
		     * });
		     *
		     * _.filter(['abc', 'def'], /ef/);
		     * // => ['def']
		     */
		    function iteratee(func) {
		      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
		    }

		    /**
		     * Creates a function that performs a partial deep comparison between a given
		     * object and `source`, returning `true` if the given object has equivalent
		     * property values, else `false`.
		     *
		     * **Note:** The created function is equivalent to `_.isMatch` with `source`
		     * partially applied.
		     *
		     * Partial comparisons will match empty array and empty object `source`
		     * values against any array or object value, respectively. See `_.isEqual`
		     * for a list of supported value comparisons.
		     *
		     * **Note:** Multiple values can be checked by combining several matchers
		     * using `_.overSome`
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Util
		     * @param {Object} source The object of property values to match.
		     * @returns {Function} Returns the new spec function.
		     * @example
		     *
		     * var objects = [
		     *   { 'a': 1, 'b': 2, 'c': 3 },
		     *   { 'a': 4, 'b': 5, 'c': 6 }
		     * ];
		     *
		     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
		     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
		     *
		     * // Checking for several possible values
		     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
		     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
		     */
		    function matches(source) {
		      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
		    }

		    /**
		     * Creates a function that performs a partial deep comparison between the
		     * value at `path` of a given object to `srcValue`, returning `true` if the
		     * object value is equivalent, else `false`.
		     *
		     * **Note:** Partial comparisons will match empty array and empty object
		     * `srcValue` values against any array or object value, respectively. See
		     * `_.isEqual` for a list of supported value comparisons.
		     *
		     * **Note:** Multiple values can be checked by combining several matchers
		     * using `_.overSome`
		     *
		     * @static
		     * @memberOf _
		     * @since 3.2.0
		     * @category Util
		     * @param {Array|string} path The path of the property to get.
		     * @param {*} srcValue The value to match.
		     * @returns {Function} Returns the new spec function.
		     * @example
		     *
		     * var objects = [
		     *   { 'a': 1, 'b': 2, 'c': 3 },
		     *   { 'a': 4, 'b': 5, 'c': 6 }
		     * ];
		     *
		     * _.find(objects, _.matchesProperty('a', 4));
		     * // => { 'a': 4, 'b': 5, 'c': 6 }
		     *
		     * // Checking for several possible values
		     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
		     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
		     */
		    function matchesProperty(path, srcValue) {
		      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
		    }

		    /**
		     * Creates a function that invokes the method at `path` of a given object.
		     * Any additional arguments are provided to the invoked method.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.7.0
		     * @category Util
		     * @param {Array|string} path The path of the method to invoke.
		     * @param {...*} [args] The arguments to invoke the method with.
		     * @returns {Function} Returns the new invoker function.
		     * @example
		     *
		     * var objects = [
		     *   { 'a': { 'b': _.constant(2) } },
		     *   { 'a': { 'b': _.constant(1) } }
		     * ];
		     *
		     * _.map(objects, _.method('a.b'));
		     * // => [2, 1]
		     *
		     * _.map(objects, _.method(['a', 'b']));
		     * // => [2, 1]
		     */
		    var method = baseRest(function(path, args) {
		      return function(object) {
		        return baseInvoke(object, path, args);
		      };
		    });

		    /**
		     * The opposite of `_.method`; this method creates a function that invokes
		     * the method at a given path of `object`. Any additional arguments are
		     * provided to the invoked method.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.7.0
		     * @category Util
		     * @param {Object} object The object to query.
		     * @param {...*} [args] The arguments to invoke the method with.
		     * @returns {Function} Returns the new invoker function.
		     * @example
		     *
		     * var array = _.times(3, _.constant),
		     *     object = { 'a': array, 'b': array, 'c': array };
		     *
		     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
		     * // => [2, 0]
		     *
		     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
		     * // => [2, 0]
		     */
		    var methodOf = baseRest(function(object, args) {
		      return function(path) {
		        return baseInvoke(object, path, args);
		      };
		    });

		    /**
		     * Adds all own enumerable string keyed function properties of a source
		     * object to the destination object. If `object` is a function, then methods
		     * are added to its prototype as well.
		     *
		     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
		     * avoid conflicts caused by modifying the original.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Util
		     * @param {Function|Object} [object=lodash] The destination object.
		     * @param {Object} source The object of functions to add.
		     * @param {Object} [options={}] The options object.
		     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
		     * @returns {Function|Object} Returns `object`.
		     * @example
		     *
		     * function vowels(string) {
		     *   return _.filter(string, function(v) {
		     *     return /[aeiou]/i.test(v);
		     *   });
		     * }
		     *
		     * _.mixin({ 'vowels': vowels });
		     * _.vowels('fred');
		     * // => ['e']
		     *
		     * _('fred').vowels().value();
		     * // => ['e']
		     *
		     * _.mixin({ 'vowels': vowels }, { 'chain': false });
		     * _('fred').vowels();
		     * // => ['e']
		     */
		    function mixin(object, source, options) {
		      var props = keys(source),
		          methodNames = baseFunctions(source, props);

		      if (options == null &&
		          !(isObject(source) && (methodNames.length || !props.length))) {
		        options = source;
		        source = object;
		        object = this;
		        methodNames = baseFunctions(source, keys(source));
		      }
		      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
		          isFunc = isFunction(object);

		      arrayEach(methodNames, function(methodName) {
		        var func = source[methodName];
		        object[methodName] = func;
		        if (isFunc) {
		          object.prototype[methodName] = function() {
		            var chainAll = this.__chain__;
		            if (chain || chainAll) {
		              var result = object(this.__wrapped__),
		                  actions = result.__actions__ = copyArray(this.__actions__);

		              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
		              result.__chain__ = chainAll;
		              return result;
		            }
		            return func.apply(object, arrayPush([this.value()], arguments));
		          };
		        }
		      });

		      return object;
		    }

		    /**
		     * Reverts the `_` variable to its previous value and returns a reference to
		     * the `lodash` function.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Util
		     * @returns {Function} Returns the `lodash` function.
		     * @example
		     *
		     * var lodash = _.noConflict();
		     */
		    function noConflict() {
		      if (root._ === this) {
		        root._ = oldDash;
		      }
		      return this;
		    }

		    /**
		     * This method returns `undefined`.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.3.0
		     * @category Util
		     * @example
		     *
		     * _.times(2, _.noop);
		     * // => [undefined, undefined]
		     */
		    function noop() {
		      // No operation performed.
		    }

		    /**
		     * Creates a function that gets the argument at index `n`. If `n` is negative,
		     * the nth argument from the end is returned.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Util
		     * @param {number} [n=0] The index of the argument to return.
		     * @returns {Function} Returns the new pass-thru function.
		     * @example
		     *
		     * var func = _.nthArg(1);
		     * func('a', 'b', 'c', 'd');
		     * // => 'b'
		     *
		     * var func = _.nthArg(-2);
		     * func('a', 'b', 'c', 'd');
		     * // => 'c'
		     */
		    function nthArg(n) {
		      n = toInteger(n);
		      return baseRest(function(args) {
		        return baseNth(args, n);
		      });
		    }

		    /**
		     * Creates a function that invokes `iteratees` with the arguments it receives
		     * and returns their results.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Util
		     * @param {...(Function|Function[])} [iteratees=[_.identity]]
		     *  The iteratees to invoke.
		     * @returns {Function} Returns the new function.
		     * @example
		     *
		     * var func = _.over([Math.max, Math.min]);
		     *
		     * func(1, 2, 3, 4);
		     * // => [4, 1]
		     */
		    var over = createOver(arrayMap);

		    /**
		     * Creates a function that checks if **all** of the `predicates` return
		     * truthy when invoked with the arguments it receives.
		     *
		     * Following shorthands are possible for providing predicates.
		     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
		     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Util
		     * @param {...(Function|Function[])} [predicates=[_.identity]]
		     *  The predicates to check.
		     * @returns {Function} Returns the new function.
		     * @example
		     *
		     * var func = _.overEvery([Boolean, isFinite]);
		     *
		     * func('1');
		     * // => true
		     *
		     * func(null);
		     * // => false
		     *
		     * func(NaN);
		     * // => false
		     */
		    var overEvery = createOver(arrayEvery);

		    /**
		     * Creates a function that checks if **any** of the `predicates` return
		     * truthy when invoked with the arguments it receives.
		     *
		     * Following shorthands are possible for providing predicates.
		     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
		     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Util
		     * @param {...(Function|Function[])} [predicates=[_.identity]]
		     *  The predicates to check.
		     * @returns {Function} Returns the new function.
		     * @example
		     *
		     * var func = _.overSome([Boolean, isFinite]);
		     *
		     * func('1');
		     * // => true
		     *
		     * func(null);
		     * // => true
		     *
		     * func(NaN);
		     * // => false
		     *
		     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
		     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
		     */
		    var overSome = createOver(arraySome);

		    /**
		     * Creates a function that returns the value at `path` of a given object.
		     *
		     * @static
		     * @memberOf _
		     * @since 2.4.0
		     * @category Util
		     * @param {Array|string} path The path of the property to get.
		     * @returns {Function} Returns the new accessor function.
		     * @example
		     *
		     * var objects = [
		     *   { 'a': { 'b': 2 } },
		     *   { 'a': { 'b': 1 } }
		     * ];
		     *
		     * _.map(objects, _.property('a.b'));
		     * // => [2, 1]
		     *
		     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
		     * // => [1, 2]
		     */
		    function property(path) {
		      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
		    }

		    /**
		     * The opposite of `_.property`; this method creates a function that returns
		     * the value at a given path of `object`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.0.0
		     * @category Util
		     * @param {Object} object The object to query.
		     * @returns {Function} Returns the new accessor function.
		     * @example
		     *
		     * var array = [0, 1, 2],
		     *     object = { 'a': array, 'b': array, 'c': array };
		     *
		     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
		     * // => [2, 0]
		     *
		     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
		     * // => [2, 0]
		     */
		    function propertyOf(object) {
		      return function(path) {
		        return object == null ? undefined$1 : baseGet(object, path);
		      };
		    }

		    /**
		     * Creates an array of numbers (positive and/or negative) progressing from
		     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
		     * `start` is specified without an `end` or `step`. If `end` is not specified,
		     * it's set to `start` with `start` then set to `0`.
		     *
		     * **Note:** JavaScript follows the IEEE-754 standard for resolving
		     * floating-point values which can produce unexpected results.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Util
		     * @param {number} [start=0] The start of the range.
		     * @param {number} end The end of the range.
		     * @param {number} [step=1] The value to increment or decrement by.
		     * @returns {Array} Returns the range of numbers.
		     * @see _.inRange, _.rangeRight
		     * @example
		     *
		     * _.range(4);
		     * // => [0, 1, 2, 3]
		     *
		     * _.range(-4);
		     * // => [0, -1, -2, -3]
		     *
		     * _.range(1, 5);
		     * // => [1, 2, 3, 4]
		     *
		     * _.range(0, 20, 5);
		     * // => [0, 5, 10, 15]
		     *
		     * _.range(0, -4, -1);
		     * // => [0, -1, -2, -3]
		     *
		     * _.range(1, 4, 0);
		     * // => [1, 1, 1]
		     *
		     * _.range(0);
		     * // => []
		     */
		    var range = createRange();

		    /**
		     * This method is like `_.range` except that it populates values in
		     * descending order.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Util
		     * @param {number} [start=0] The start of the range.
		     * @param {number} end The end of the range.
		     * @param {number} [step=1] The value to increment or decrement by.
		     * @returns {Array} Returns the range of numbers.
		     * @see _.inRange, _.range
		     * @example
		     *
		     * _.rangeRight(4);
		     * // => [3, 2, 1, 0]
		     *
		     * _.rangeRight(-4);
		     * // => [-3, -2, -1, 0]
		     *
		     * _.rangeRight(1, 5);
		     * // => [4, 3, 2, 1]
		     *
		     * _.rangeRight(0, 20, 5);
		     * // => [15, 10, 5, 0]
		     *
		     * _.rangeRight(0, -4, -1);
		     * // => [-3, -2, -1, 0]
		     *
		     * _.rangeRight(1, 4, 0);
		     * // => [1, 1, 1]
		     *
		     * _.rangeRight(0);
		     * // => []
		     */
		    var rangeRight = createRange(true);

		    /**
		     * This method returns a new empty array.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.13.0
		     * @category Util
		     * @returns {Array} Returns the new empty array.
		     * @example
		     *
		     * var arrays = _.times(2, _.stubArray);
		     *
		     * console.log(arrays);
		     * // => [[], []]
		     *
		     * console.log(arrays[0] === arrays[1]);
		     * // => false
		     */
		    function stubArray() {
		      return [];
		    }

		    /**
		     * This method returns `false`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.13.0
		     * @category Util
		     * @returns {boolean} Returns `false`.
		     * @example
		     *
		     * _.times(2, _.stubFalse);
		     * // => [false, false]
		     */
		    function stubFalse() {
		      return false;
		    }

		    /**
		     * This method returns a new empty object.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.13.0
		     * @category Util
		     * @returns {Object} Returns the new empty object.
		     * @example
		     *
		     * var objects = _.times(2, _.stubObject);
		     *
		     * console.log(objects);
		     * // => [{}, {}]
		     *
		     * console.log(objects[0] === objects[1]);
		     * // => false
		     */
		    function stubObject() {
		      return {};
		    }

		    /**
		     * This method returns an empty string.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.13.0
		     * @category Util
		     * @returns {string} Returns the empty string.
		     * @example
		     *
		     * _.times(2, _.stubString);
		     * // => ['', '']
		     */
		    function stubString() {
		      return '';
		    }

		    /**
		     * This method returns `true`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.13.0
		     * @category Util
		     * @returns {boolean} Returns `true`.
		     * @example
		     *
		     * _.times(2, _.stubTrue);
		     * // => [true, true]
		     */
		    function stubTrue() {
		      return true;
		    }

		    /**
		     * Invokes the iteratee `n` times, returning an array of the results of
		     * each invocation. The iteratee is invoked with one argument; (index).
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Util
		     * @param {number} n The number of times to invoke `iteratee`.
		     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		     * @returns {Array} Returns the array of results.
		     * @example
		     *
		     * _.times(3, String);
		     * // => ['0', '1', '2']
		     *
		     *  _.times(4, _.constant(0));
		     * // => [0, 0, 0, 0]
		     */
		    function times(n, iteratee) {
		      n = toInteger(n);
		      if (n < 1 || n > MAX_SAFE_INTEGER) {
		        return [];
		      }
		      var index = MAX_ARRAY_LENGTH,
		          length = nativeMin(n, MAX_ARRAY_LENGTH);

		      iteratee = getIteratee(iteratee);
		      n -= MAX_ARRAY_LENGTH;

		      var result = baseTimes(length, iteratee);
		      while (++index < n) {
		        iteratee(index);
		      }
		      return result;
		    }

		    /**
		     * Converts `value` to a property path array.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Util
		     * @param {*} value The value to convert.
		     * @returns {Array} Returns the new property path array.
		     * @example
		     *
		     * _.toPath('a.b.c');
		     * // => ['a', 'b', 'c']
		     *
		     * _.toPath('a[0].b.c');
		     * // => ['a', '0', 'b', 'c']
		     */
		    function toPath(value) {
		      if (isArray(value)) {
		        return arrayMap(value, toKey);
		      }
		      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
		    }

		    /**
		     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Util
		     * @param {string} [prefix=''] The value to prefix the ID with.
		     * @returns {string} Returns the unique ID.
		     * @example
		     *
		     * _.uniqueId('contact_');
		     * // => 'contact_104'
		     *
		     * _.uniqueId();
		     * // => '105'
		     */
		    function uniqueId(prefix) {
		      var id = ++idCounter;
		      return toString(prefix) + id;
		    }

		    /*------------------------------------------------------------------------*/

		    /**
		     * Adds two numbers.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.4.0
		     * @category Math
		     * @param {number} augend The first number in an addition.
		     * @param {number} addend The second number in an addition.
		     * @returns {number} Returns the total.
		     * @example
		     *
		     * _.add(6, 4);
		     * // => 10
		     */
		    var add = createMathOperation(function(augend, addend) {
		      return augend + addend;
		    }, 0);

		    /**
		     * Computes `number` rounded up to `precision`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.10.0
		     * @category Math
		     * @param {number} number The number to round up.
		     * @param {number} [precision=0] The precision to round up to.
		     * @returns {number} Returns the rounded up number.
		     * @example
		     *
		     * _.ceil(4.006);
		     * // => 5
		     *
		     * _.ceil(6.004, 2);
		     * // => 6.01
		     *
		     * _.ceil(6040, -2);
		     * // => 6100
		     */
		    var ceil = createRound('ceil');

		    /**
		     * Divide two numbers.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.7.0
		     * @category Math
		     * @param {number} dividend The first number in a division.
		     * @param {number} divisor The second number in a division.
		     * @returns {number} Returns the quotient.
		     * @example
		     *
		     * _.divide(6, 4);
		     * // => 1.5
		     */
		    var divide = createMathOperation(function(dividend, divisor) {
		      return dividend / divisor;
		    }, 1);

		    /**
		     * Computes `number` rounded down to `precision`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.10.0
		     * @category Math
		     * @param {number} number The number to round down.
		     * @param {number} [precision=0] The precision to round down to.
		     * @returns {number} Returns the rounded down number.
		     * @example
		     *
		     * _.floor(4.006);
		     * // => 4
		     *
		     * _.floor(0.046, 2);
		     * // => 0.04
		     *
		     * _.floor(4060, -2);
		     * // => 4000
		     */
		    var floor = createRound('floor');

		    /**
		     * Computes the maximum value of `array`. If `array` is empty or falsey,
		     * `undefined` is returned.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Math
		     * @param {Array} array The array to iterate over.
		     * @returns {*} Returns the maximum value.
		     * @example
		     *
		     * _.max([4, 2, 8, 6]);
		     * // => 8
		     *
		     * _.max([]);
		     * // => undefined
		     */
		    function max(array) {
		      return (array && array.length)
		        ? baseExtremum(array, identity, baseGt)
		        : undefined$1;
		    }

		    /**
		     * This method is like `_.max` except that it accepts `iteratee` which is
		     * invoked for each element in `array` to generate the criterion by which
		     * the value is ranked. The iteratee is invoked with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Math
		     * @param {Array} array The array to iterate over.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {*} Returns the maximum value.
		     * @example
		     *
		     * var objects = [{ 'n': 1 }, { 'n': 2 }];
		     *
		     * _.maxBy(objects, function(o) { return o.n; });
		     * // => { 'n': 2 }
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.maxBy(objects, 'n');
		     * // => { 'n': 2 }
		     */
		    function maxBy(array, iteratee) {
		      return (array && array.length)
		        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
		        : undefined$1;
		    }

		    /**
		     * Computes the mean of the values in `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Math
		     * @param {Array} array The array to iterate over.
		     * @returns {number} Returns the mean.
		     * @example
		     *
		     * _.mean([4, 2, 8, 6]);
		     * // => 5
		     */
		    function mean(array) {
		      return baseMean(array, identity);
		    }

		    /**
		     * This method is like `_.mean` except that it accepts `iteratee` which is
		     * invoked for each element in `array` to generate the value to be averaged.
		     * The iteratee is invoked with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.7.0
		     * @category Math
		     * @param {Array} array The array to iterate over.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {number} Returns the mean.
		     * @example
		     *
		     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
		     *
		     * _.meanBy(objects, function(o) { return o.n; });
		     * // => 5
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.meanBy(objects, 'n');
		     * // => 5
		     */
		    function meanBy(array, iteratee) {
		      return baseMean(array, getIteratee(iteratee, 2));
		    }

		    /**
		     * Computes the minimum value of `array`. If `array` is empty or falsey,
		     * `undefined` is returned.
		     *
		     * @static
		     * @since 0.1.0
		     * @memberOf _
		     * @category Math
		     * @param {Array} array The array to iterate over.
		     * @returns {*} Returns the minimum value.
		     * @example
		     *
		     * _.min([4, 2, 8, 6]);
		     * // => 2
		     *
		     * _.min([]);
		     * // => undefined
		     */
		    function min(array) {
		      return (array && array.length)
		        ? baseExtremum(array, identity, baseLt)
		        : undefined$1;
		    }

		    /**
		     * This method is like `_.min` except that it accepts `iteratee` which is
		     * invoked for each element in `array` to generate the criterion by which
		     * the value is ranked. The iteratee is invoked with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Math
		     * @param {Array} array The array to iterate over.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {*} Returns the minimum value.
		     * @example
		     *
		     * var objects = [{ 'n': 1 }, { 'n': 2 }];
		     *
		     * _.minBy(objects, function(o) { return o.n; });
		     * // => { 'n': 1 }
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.minBy(objects, 'n');
		     * // => { 'n': 1 }
		     */
		    function minBy(array, iteratee) {
		      return (array && array.length)
		        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
		        : undefined$1;
		    }

		    /**
		     * Multiply two numbers.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.7.0
		     * @category Math
		     * @param {number} multiplier The first number in a multiplication.
		     * @param {number} multiplicand The second number in a multiplication.
		     * @returns {number} Returns the product.
		     * @example
		     *
		     * _.multiply(6, 4);
		     * // => 24
		     */
		    var multiply = createMathOperation(function(multiplier, multiplicand) {
		      return multiplier * multiplicand;
		    }, 1);

		    /**
		     * Computes `number` rounded to `precision`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.10.0
		     * @category Math
		     * @param {number} number The number to round.
		     * @param {number} [precision=0] The precision to round to.
		     * @returns {number} Returns the rounded number.
		     * @example
		     *
		     * _.round(4.006);
		     * // => 4
		     *
		     * _.round(4.006, 2);
		     * // => 4.01
		     *
		     * _.round(4060, -2);
		     * // => 4100
		     */
		    var round = createRound('round');

		    /**
		     * Subtract two numbers.
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Math
		     * @param {number} minuend The first number in a subtraction.
		     * @param {number} subtrahend The second number in a subtraction.
		     * @returns {number} Returns the difference.
		     * @example
		     *
		     * _.subtract(6, 4);
		     * // => 2
		     */
		    var subtract = createMathOperation(function(minuend, subtrahend) {
		      return minuend - subtrahend;
		    }, 0);

		    /**
		     * Computes the sum of the values in `array`.
		     *
		     * @static
		     * @memberOf _
		     * @since 3.4.0
		     * @category Math
		     * @param {Array} array The array to iterate over.
		     * @returns {number} Returns the sum.
		     * @example
		     *
		     * _.sum([4, 2, 8, 6]);
		     * // => 20
		     */
		    function sum(array) {
		      return (array && array.length)
		        ? baseSum(array, identity)
		        : 0;
		    }

		    /**
		     * This method is like `_.sum` except that it accepts `iteratee` which is
		     * invoked for each element in `array` to generate the value to be summed.
		     * The iteratee is invoked with one argument: (value).
		     *
		     * @static
		     * @memberOf _
		     * @since 4.0.0
		     * @category Math
		     * @param {Array} array The array to iterate over.
		     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
		     * @returns {number} Returns the sum.
		     * @example
		     *
		     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
		     *
		     * _.sumBy(objects, function(o) { return o.n; });
		     * // => 20
		     *
		     * // The `_.property` iteratee shorthand.
		     * _.sumBy(objects, 'n');
		     * // => 20
		     */
		    function sumBy(array, iteratee) {
		      return (array && array.length)
		        ? baseSum(array, getIteratee(iteratee, 2))
		        : 0;
		    }

		    /*------------------------------------------------------------------------*/

		    // Add methods that return wrapped values in chain sequences.
		    lodash.after = after;
		    lodash.ary = ary;
		    lodash.assign = assign;
		    lodash.assignIn = assignIn;
		    lodash.assignInWith = assignInWith;
		    lodash.assignWith = assignWith;
		    lodash.at = at;
		    lodash.before = before;
		    lodash.bind = bind;
		    lodash.bindAll = bindAll;
		    lodash.bindKey = bindKey;
		    lodash.castArray = castArray;
		    lodash.chain = chain;
		    lodash.chunk = chunk;
		    lodash.compact = compact;
		    lodash.concat = concat;
		    lodash.cond = cond;
		    lodash.conforms = conforms;
		    lodash.constant = constant;
		    lodash.countBy = countBy;
		    lodash.create = create;
		    lodash.curry = curry;
		    lodash.curryRight = curryRight;
		    lodash.debounce = debounce;
		    lodash.defaults = defaults;
		    lodash.defaultsDeep = defaultsDeep;
		    lodash.defer = defer;
		    lodash.delay = delay;
		    lodash.difference = difference;
		    lodash.differenceBy = differenceBy;
		    lodash.differenceWith = differenceWith;
		    lodash.drop = drop;
		    lodash.dropRight = dropRight;
		    lodash.dropRightWhile = dropRightWhile;
		    lodash.dropWhile = dropWhile;
		    lodash.fill = fill;
		    lodash.filter = filter;
		    lodash.flatMap = flatMap;
		    lodash.flatMapDeep = flatMapDeep;
		    lodash.flatMapDepth = flatMapDepth;
		    lodash.flatten = flatten;
		    lodash.flattenDeep = flattenDeep;
		    lodash.flattenDepth = flattenDepth;
		    lodash.flip = flip;
		    lodash.flow = flow;
		    lodash.flowRight = flowRight;
		    lodash.fromPairs = fromPairs;
		    lodash.functions = functions;
		    lodash.functionsIn = functionsIn;
		    lodash.groupBy = groupBy;
		    lodash.initial = initial;
		    lodash.intersection = intersection;
		    lodash.intersectionBy = intersectionBy;
		    lodash.intersectionWith = intersectionWith;
		    lodash.invert = invert;
		    lodash.invertBy = invertBy;
		    lodash.invokeMap = invokeMap;
		    lodash.iteratee = iteratee;
		    lodash.keyBy = keyBy;
		    lodash.keys = keys;
		    lodash.keysIn = keysIn;
		    lodash.map = map;
		    lodash.mapKeys = mapKeys;
		    lodash.mapValues = mapValues;
		    lodash.matches = matches;
		    lodash.matchesProperty = matchesProperty;
		    lodash.memoize = memoize;
		    lodash.merge = merge;
		    lodash.mergeWith = mergeWith;
		    lodash.method = method;
		    lodash.methodOf = methodOf;
		    lodash.mixin = mixin;
		    lodash.negate = negate;
		    lodash.nthArg = nthArg;
		    lodash.omit = omit;
		    lodash.omitBy = omitBy;
		    lodash.once = once;
		    lodash.orderBy = orderBy;
		    lodash.over = over;
		    lodash.overArgs = overArgs;
		    lodash.overEvery = overEvery;
		    lodash.overSome = overSome;
		    lodash.partial = partial;
		    lodash.partialRight = partialRight;
		    lodash.partition = partition;
		    lodash.pick = pick;
		    lodash.pickBy = pickBy;
		    lodash.property = property;
		    lodash.propertyOf = propertyOf;
		    lodash.pull = pull;
		    lodash.pullAll = pullAll;
		    lodash.pullAllBy = pullAllBy;
		    lodash.pullAllWith = pullAllWith;
		    lodash.pullAt = pullAt;
		    lodash.range = range;
		    lodash.rangeRight = rangeRight;
		    lodash.rearg = rearg;
		    lodash.reject = reject;
		    lodash.remove = remove;
		    lodash.rest = rest;
		    lodash.reverse = reverse;
		    lodash.sampleSize = sampleSize;
		    lodash.set = set;
		    lodash.setWith = setWith;
		    lodash.shuffle = shuffle;
		    lodash.slice = slice;
		    lodash.sortBy = sortBy;
		    lodash.sortedUniq = sortedUniq;
		    lodash.sortedUniqBy = sortedUniqBy;
		    lodash.split = split;
		    lodash.spread = spread;
		    lodash.tail = tail;
		    lodash.take = take;
		    lodash.takeRight = takeRight;
		    lodash.takeRightWhile = takeRightWhile;
		    lodash.takeWhile = takeWhile;
		    lodash.tap = tap;
		    lodash.throttle = throttle;
		    lodash.thru = thru;
		    lodash.toArray = toArray;
		    lodash.toPairs = toPairs;
		    lodash.toPairsIn = toPairsIn;
		    lodash.toPath = toPath;
		    lodash.toPlainObject = toPlainObject;
		    lodash.transform = transform;
		    lodash.unary = unary;
		    lodash.union = union;
		    lodash.unionBy = unionBy;
		    lodash.unionWith = unionWith;
		    lodash.uniq = uniq;
		    lodash.uniqBy = uniqBy;
		    lodash.uniqWith = uniqWith;
		    lodash.unset = unset;
		    lodash.unzip = unzip;
		    lodash.unzipWith = unzipWith;
		    lodash.update = update;
		    lodash.updateWith = updateWith;
		    lodash.values = values;
		    lodash.valuesIn = valuesIn;
		    lodash.without = without;
		    lodash.words = words;
		    lodash.wrap = wrap;
		    lodash.xor = xor;
		    lodash.xorBy = xorBy;
		    lodash.xorWith = xorWith;
		    lodash.zip = zip;
		    lodash.zipObject = zipObject;
		    lodash.zipObjectDeep = zipObjectDeep;
		    lodash.zipWith = zipWith;

		    // Add aliases.
		    lodash.entries = toPairs;
		    lodash.entriesIn = toPairsIn;
		    lodash.extend = assignIn;
		    lodash.extendWith = assignInWith;

		    // Add methods to `lodash.prototype`.
		    mixin(lodash, lodash);

		    /*------------------------------------------------------------------------*/

		    // Add methods that return unwrapped values in chain sequences.
		    lodash.add = add;
		    lodash.attempt = attempt;
		    lodash.camelCase = camelCase;
		    lodash.capitalize = capitalize;
		    lodash.ceil = ceil;
		    lodash.clamp = clamp;
		    lodash.clone = clone;
		    lodash.cloneDeep = cloneDeep;
		    lodash.cloneDeepWith = cloneDeepWith;
		    lodash.cloneWith = cloneWith;
		    lodash.conformsTo = conformsTo;
		    lodash.deburr = deburr;
		    lodash.defaultTo = defaultTo;
		    lodash.divide = divide;
		    lodash.endsWith = endsWith;
		    lodash.eq = eq;
		    lodash.escape = escape;
		    lodash.escapeRegExp = escapeRegExp;
		    lodash.every = every;
		    lodash.find = find;
		    lodash.findIndex = findIndex;
		    lodash.findKey = findKey;
		    lodash.findLast = findLast;
		    lodash.findLastIndex = findLastIndex;
		    lodash.findLastKey = findLastKey;
		    lodash.floor = floor;
		    lodash.forEach = forEach;
		    lodash.forEachRight = forEachRight;
		    lodash.forIn = forIn;
		    lodash.forInRight = forInRight;
		    lodash.forOwn = forOwn;
		    lodash.forOwnRight = forOwnRight;
		    lodash.get = get;
		    lodash.gt = gt;
		    lodash.gte = gte;
		    lodash.has = has;
		    lodash.hasIn = hasIn;
		    lodash.head = head;
		    lodash.identity = identity;
		    lodash.includes = includes;
		    lodash.indexOf = indexOf;
		    lodash.inRange = inRange;
		    lodash.invoke = invoke;
		    lodash.isArguments = isArguments;
		    lodash.isArray = isArray;
		    lodash.isArrayBuffer = isArrayBuffer;
		    lodash.isArrayLike = isArrayLike;
		    lodash.isArrayLikeObject = isArrayLikeObject;
		    lodash.isBoolean = isBoolean;
		    lodash.isBuffer = isBuffer;
		    lodash.isDate = isDate;
		    lodash.isElement = isElement;
		    lodash.isEmpty = isEmpty;
		    lodash.isEqual = isEqual;
		    lodash.isEqualWith = isEqualWith;
		    lodash.isError = isError;
		    lodash.isFinite = isFinite;
		    lodash.isFunction = isFunction;
		    lodash.isInteger = isInteger;
		    lodash.isLength = isLength;
		    lodash.isMap = isMap;
		    lodash.isMatch = isMatch;
		    lodash.isMatchWith = isMatchWith;
		    lodash.isNaN = isNaN;
		    lodash.isNative = isNative;
		    lodash.isNil = isNil;
		    lodash.isNull = isNull;
		    lodash.isNumber = isNumber;
		    lodash.isObject = isObject;
		    lodash.isObjectLike = isObjectLike;
		    lodash.isPlainObject = isPlainObject;
		    lodash.isRegExp = isRegExp;
		    lodash.isSafeInteger = isSafeInteger;
		    lodash.isSet = isSet;
		    lodash.isString = isString;
		    lodash.isSymbol = isSymbol;
		    lodash.isTypedArray = isTypedArray;
		    lodash.isUndefined = isUndefined;
		    lodash.isWeakMap = isWeakMap;
		    lodash.isWeakSet = isWeakSet;
		    lodash.join = join;
		    lodash.kebabCase = kebabCase;
		    lodash.last = last;
		    lodash.lastIndexOf = lastIndexOf;
		    lodash.lowerCase = lowerCase;
		    lodash.lowerFirst = lowerFirst;
		    lodash.lt = lt;
		    lodash.lte = lte;
		    lodash.max = max;
		    lodash.maxBy = maxBy;
		    lodash.mean = mean;
		    lodash.meanBy = meanBy;
		    lodash.min = min;
		    lodash.minBy = minBy;
		    lodash.stubArray = stubArray;
		    lodash.stubFalse = stubFalse;
		    lodash.stubObject = stubObject;
		    lodash.stubString = stubString;
		    lodash.stubTrue = stubTrue;
		    lodash.multiply = multiply;
		    lodash.nth = nth;
		    lodash.noConflict = noConflict;
		    lodash.noop = noop;
		    lodash.now = now;
		    lodash.pad = pad;
		    lodash.padEnd = padEnd;
		    lodash.padStart = padStart;
		    lodash.parseInt = parseInt;
		    lodash.random = random;
		    lodash.reduce = reduce;
		    lodash.reduceRight = reduceRight;
		    lodash.repeat = repeat;
		    lodash.replace = replace;
		    lodash.result = result;
		    lodash.round = round;
		    lodash.runInContext = runInContext;
		    lodash.sample = sample;
		    lodash.size = size;
		    lodash.snakeCase = snakeCase;
		    lodash.some = some;
		    lodash.sortedIndex = sortedIndex;
		    lodash.sortedIndexBy = sortedIndexBy;
		    lodash.sortedIndexOf = sortedIndexOf;
		    lodash.sortedLastIndex = sortedLastIndex;
		    lodash.sortedLastIndexBy = sortedLastIndexBy;
		    lodash.sortedLastIndexOf = sortedLastIndexOf;
		    lodash.startCase = startCase;
		    lodash.startsWith = startsWith;
		    lodash.subtract = subtract;
		    lodash.sum = sum;
		    lodash.sumBy = sumBy;
		    lodash.template = template;
		    lodash.times = times;
		    lodash.toFinite = toFinite;
		    lodash.toInteger = toInteger;
		    lodash.toLength = toLength;
		    lodash.toLower = toLower;
		    lodash.toNumber = toNumber;
		    lodash.toSafeInteger = toSafeInteger;
		    lodash.toString = toString;
		    lodash.toUpper = toUpper;
		    lodash.trim = trim;
		    lodash.trimEnd = trimEnd;
		    lodash.trimStart = trimStart;
		    lodash.truncate = truncate;
		    lodash.unescape = unescape;
		    lodash.uniqueId = uniqueId;
		    lodash.upperCase = upperCase;
		    lodash.upperFirst = upperFirst;

		    // Add aliases.
		    lodash.each = forEach;
		    lodash.eachRight = forEachRight;
		    lodash.first = head;

		    mixin(lodash, (function() {
		      var source = {};
		      baseForOwn(lodash, function(func, methodName) {
		        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
		          source[methodName] = func;
		        }
		      });
		      return source;
		    }()), { 'chain': false });

		    /*------------------------------------------------------------------------*/

		    /**
		     * The semantic version number.
		     *
		     * @static
		     * @memberOf _
		     * @type {string}
		     */
		    lodash.VERSION = VERSION;

		    // Assign default placeholders.
		    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
		      lodash[methodName].placeholder = lodash;
		    });

		    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
		    arrayEach(['drop', 'take'], function(methodName, index) {
		      LazyWrapper.prototype[methodName] = function(n) {
		        n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);

		        var result = (this.__filtered__ && !index)
		          ? new LazyWrapper(this)
		          : this.clone();

		        if (result.__filtered__) {
		          result.__takeCount__ = nativeMin(n, result.__takeCount__);
		        } else {
		          result.__views__.push({
		            'size': nativeMin(n, MAX_ARRAY_LENGTH),
		            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
		          });
		        }
		        return result;
		      };

		      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
		        return this.reverse()[methodName](n).reverse();
		      };
		    });

		    // Add `LazyWrapper` methods that accept an `iteratee` value.
		    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
		      var type = index + 1,
		          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

		      LazyWrapper.prototype[methodName] = function(iteratee) {
		        var result = this.clone();
		        result.__iteratees__.push({
		          'iteratee': getIteratee(iteratee, 3),
		          'type': type
		        });
		        result.__filtered__ = result.__filtered__ || isFilter;
		        return result;
		      };
		    });

		    // Add `LazyWrapper` methods for `_.head` and `_.last`.
		    arrayEach(['head', 'last'], function(methodName, index) {
		      var takeName = 'take' + (index ? 'Right' : '');

		      LazyWrapper.prototype[methodName] = function() {
		        return this[takeName](1).value()[0];
		      };
		    });

		    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
		    arrayEach(['initial', 'tail'], function(methodName, index) {
		      var dropName = 'drop' + (index ? '' : 'Right');

		      LazyWrapper.prototype[methodName] = function() {
		        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
		      };
		    });

		    LazyWrapper.prototype.compact = function() {
		      return this.filter(identity);
		    };

		    LazyWrapper.prototype.find = function(predicate) {
		      return this.filter(predicate).head();
		    };

		    LazyWrapper.prototype.findLast = function(predicate) {
		      return this.reverse().find(predicate);
		    };

		    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
		      if (typeof path == 'function') {
		        return new LazyWrapper(this);
		      }
		      return this.map(function(value) {
		        return baseInvoke(value, path, args);
		      });
		    });

		    LazyWrapper.prototype.reject = function(predicate) {
		      return this.filter(negate(getIteratee(predicate)));
		    };

		    LazyWrapper.prototype.slice = function(start, end) {
		      start = toInteger(start);

		      var result = this;
		      if (result.__filtered__ && (start > 0 || end < 0)) {
		        return new LazyWrapper(result);
		      }
		      if (start < 0) {
		        result = result.takeRight(-start);
		      } else if (start) {
		        result = result.drop(start);
		      }
		      if (end !== undefined$1) {
		        end = toInteger(end);
		        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
		      }
		      return result;
		    };

		    LazyWrapper.prototype.takeRightWhile = function(predicate) {
		      return this.reverse().takeWhile(predicate).reverse();
		    };

		    LazyWrapper.prototype.toArray = function() {
		      return this.take(MAX_ARRAY_LENGTH);
		    };

		    // Add `LazyWrapper` methods to `lodash.prototype`.
		    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
		      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
		          isTaker = /^(?:head|last)$/.test(methodName),
		          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
		          retUnwrapped = isTaker || /^find/.test(methodName);

		      if (!lodashFunc) {
		        return;
		      }
		      lodash.prototype[methodName] = function() {
		        var value = this.__wrapped__,
		            args = isTaker ? [1] : arguments,
		            isLazy = value instanceof LazyWrapper,
		            iteratee = args[0],
		            useLazy = isLazy || isArray(value);

		        var interceptor = function(value) {
		          var result = lodashFunc.apply(lodash, arrayPush([value], args));
		          return (isTaker && chainAll) ? result[0] : result;
		        };

		        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
		          // Avoid lazy use if the iteratee has a "length" value other than `1`.
		          isLazy = useLazy = false;
		        }
		        var chainAll = this.__chain__,
		            isHybrid = !!this.__actions__.length,
		            isUnwrapped = retUnwrapped && !chainAll,
		            onlyLazy = isLazy && !isHybrid;

		        if (!retUnwrapped && useLazy) {
		          value = onlyLazy ? value : new LazyWrapper(this);
		          var result = func.apply(value, args);
		          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined$1 });
		          return new LodashWrapper(result, chainAll);
		        }
		        if (isUnwrapped && onlyLazy) {
		          return func.apply(this, args);
		        }
		        result = this.thru(interceptor);
		        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
		      };
		    });

		    // Add `Array` methods to `lodash.prototype`.
		    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
		      var func = arrayProto[methodName],
		          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
		          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

		      lodash.prototype[methodName] = function() {
		        var args = arguments;
		        if (retUnwrapped && !this.__chain__) {
		          var value = this.value();
		          return func.apply(isArray(value) ? value : [], args);
		        }
		        return this[chainName](function(value) {
		          return func.apply(isArray(value) ? value : [], args);
		        });
		      };
		    });

		    // Map minified method names to their real names.
		    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
		      var lodashFunc = lodash[methodName];
		      if (lodashFunc) {
		        var key = lodashFunc.name + '';
		        if (!hasOwnProperty.call(realNames, key)) {
		          realNames[key] = [];
		        }
		        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
		      }
		    });

		    realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
		      'name': 'wrapper',
		      'func': undefined$1
		    }];

		    // Add methods to `LazyWrapper`.
		    LazyWrapper.prototype.clone = lazyClone;
		    LazyWrapper.prototype.reverse = lazyReverse;
		    LazyWrapper.prototype.value = lazyValue;

		    // Add chain sequence methods to the `lodash` wrapper.
		    lodash.prototype.at = wrapperAt;
		    lodash.prototype.chain = wrapperChain;
		    lodash.prototype.commit = wrapperCommit;
		    lodash.prototype.next = wrapperNext;
		    lodash.prototype.plant = wrapperPlant;
		    lodash.prototype.reverse = wrapperReverse;
		    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

		    // Add lazy aliases.
		    lodash.prototype.first = lodash.prototype.head;

		    if (symIterator) {
		      lodash.prototype[symIterator] = wrapperToIterator;
		    }
		    return lodash;
		  });

		  /*--------------------------------------------------------------------------*/

		  // Export lodash.
		  var _ = runInContext();

		  // Some AMD build optimizers, like r.js, check for condition patterns like:
		  if (freeModule) {
		    // Export for Node.js.
		    (freeModule.exports = _)._ = _;
		    // Export for CommonJS support.
		    freeExports._ = _;
		  }
		  else {
		    // Export to the global object.
		    root._ = _;
		  }
		}.call(commonjsGlobal)); 
	} (lodash, lodash.exports));

	var lodashExports = lodash.exports;
	var _ = /*@__PURE__*/getDefaultExportFromCjs(lodashExports);

	var DefaultContext = {
	  color: undefined,
	  size: undefined,
	  className: undefined,
	  style: undefined,
	  attr: undefined
	};
	var IconContext = React.createContext && React.createContext(DefaultContext);

	var __assign = undefined && undefined.__assign || function () {
	  __assign = Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];
	      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	    }
	    return t;
	  };
	  return __assign.apply(this, arguments);
	};
	var __rest = undefined && undefined.__rest || function (s, e) {
	  var t = {};
	  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	};
	function Tree2Element(tree) {
	  return tree && tree.map(function (node, i) {
	    return React.createElement(node.tag, __assign({
	      key: i
	    }, node.attr), Tree2Element(node.child));
	  });
	}
	function GenIcon(data) {
	  // eslint-disable-next-line react/display-name
	  return function (props) {
	    return React.createElement(IconBase, __assign({
	      attr: __assign({}, data.attr)
	    }, props), Tree2Element(data.child));
	  };
	}
	function IconBase(props) {
	  var elem = function (conf) {
	    var attr = props.attr,
	      size = props.size,
	      title = props.title,
	      svgProps = __rest(props, ["attr", "size", "title"]);
	    var computedSize = size || conf.size || "1em";
	    var className;
	    if (conf.className) className = conf.className;
	    if (props.className) className = (className ? className + " " : "") + props.className;
	    return React.createElement("svg", __assign({
	      stroke: "currentColor",
	      fill: "currentColor",
	      strokeWidth: "0"
	    }, conf.attr, attr, svgProps, {
	      className: className,
	      style: __assign(__assign({
	        color: props.color || conf.color
	      }, conf.style), props.style),
	      height: computedSize,
	      width: computedSize,
	      xmlns: "http://www.w3.org/2000/svg"
	    }), title && React.createElement("title", null, title), props.children);
	  };
	  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
	    return elem(conf);
	  }) : elem(DefaultContext);
	}

	// THIS FILE IS AUTO GENERATED
	function BsFillMicFill (props) {
	  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"}},{"tag":"path","attr":{"d":"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"}}]})(props);
	}function BsFillPlayCircleFill (props) {
	  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"}}]})(props);
	}function BsChatQuoteFill (props) {
	  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"}}]})(props);
	}

	var IconButton = function (props) {
	    var Icon = props.icon, onClick = props.onClick, title = props.title, className = props.className, _a = props.iconColor, iconColor = _a === void 0 ? "#ffffff" : _a, rest = __rest$1(props, ["icon", "onClick", "title", "className", "iconColor"]);
	    return (jsxRuntimeExports.jsxs("button", __assign$1({ title: title, onClick: onClick, className: "app-icon-button ".concat(className) }, rest, { children: [jsxRuntimeExports.jsx("div", { className: "app-icon-button-anim" }), jsxRuntimeExports.jsx(Icon, { className: "app-icon-button-icon", color: iconColor })] })));
	};

	// THIS FILE IS AUTO GENERATED
	function GiGraduateCap (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 89.61L22.486 177.18 256 293.937l111.22-55.61-104.337-31.9A16 16 0 0 1 256 208a16 16 0 0 1-16-16 16 16 0 0 1 16-16l-2.646 8.602 18.537 5.703a16 16 0 0 1 .008.056l27.354 8.365L455 246.645v12.146a16 16 0 0 0-7 13.21 16 16 0 0 0 7.293 13.406C448.01 312.932 448 375.383 448 400c16 10.395 16 10.775 32 0 0-24.614-.008-87.053-7.29-114.584A16 16 0 0 0 480 272a16 16 0 0 0-7-13.227v-25.42L413.676 215.1l75.838-37.92L256 89.61zM119.623 249L106.5 327.74c26.175 3.423 57.486 18.637 86.27 36.627 16.37 10.232 31.703 21.463 44.156 32.36 7.612 6.66 13.977 13.05 19.074 19.337 5.097-6.288 11.462-12.677 19.074-19.337 12.453-10.897 27.785-22.128 44.156-32.36 28.784-17.99 60.095-33.204 86.27-36.627L392.375 249h-6.25L256 314.063 125.873 249h-6.25z"}}]})(props);
	}

	// THIS FILE IS AUTO GENERATED
	function IoChevronBack (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"fill":"none","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"48","d":"M328 112L184 256l144 144"}}]})(props);
	}function IoCloseSharp (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"}}]})(props);
	}function IoClose (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(props);
	}function IoSend (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z"}}]})(props);
	}function IoSettingsSharp (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z"}}]})(props);
	}

	// THIS FILE IS AUTO GENERATED
	function LuSettings2 (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20 7h-9"}},{"tag":"path","attr":{"d":"M14 17H5"}},{"tag":"circle","attr":{"cx":"17","cy":"17","r":"3"}},{"tag":"circle","attr":{"cx":"7","cy":"7","r":"3"}}]})(props);
	}

	var isFirefox = typeof InstallTrigger !== "undefined";
	var getStyles = function (iframeType, isChatOpen, isMobileScreen) {
	    if (isMobileScreen === void 0) { isMobileScreen = false; }
	    switch (iframeType) {
	        case IframeType.CHAT_CONTAINER_CLOSED:
	            return {
	                border: "none",
	                boxShadow: "#32325d40 0px 50px 100px -20px, #0000004d 0px 30px 60px -30px",
	                width: isMobileScreen ? "100%" : "420px",
	                height: isMobileScreen ? "100%" : "620px",
	                position: "fixed",
	                bottom: isMobileScreen ? "0" : "100px",
	                right: isMobileScreen ? "0" : "30px",
	                borderRadius: isMobileScreen ? "0" : "12px",
	                backgroundColor: "#fff",
	                display: "none",
	                zIndex: "999999999999999999999999"
	            };
	        case IframeType.CHAT_CONTAINER_OPEN:
	            return {
	                border: "none",
	                boxShadow: "#32325d40 0px 50px 100px -20px, #0000004d 0px 30px 60px -30px",
	                width: isMobileScreen ? "100%" : "420px",
	                height: isMobileScreen ? "100%" : "620px",
	                position: "fixed",
	                bottom: isMobileScreen ? "0" : "100px",
	                right: isMobileScreen ? "0" : "30px",
	                borderRadius: isMobileScreen ? "0" : "12px",
	                backgroundColor: "#fff",
	                zIndex: "999999999999999999999999"
	            };
	        case IframeType.CHAT_OPEN_BUTTON:
	            return {
	                display: isChatOpen && isMobileScreen ? "none" : "block",
	                border: "none",
	                width: "54px",
	                height: "54px",
	                position: "fixed",
	                bottom: "28px",
	                right: "24px",
	                borderRadius: "50%",
	                zIndex: "999999999999999999999999"
	            };
	        default:
	            return {
	                border: "none",
	            };
	    }
	};
	var IFrame = function (props) {
	    var _a, _b, _c;
	    var children = props.children, iframeType = props.iframeType, rest = __rest$1(props, ["children", "iframeType"]);
	    var _d = reactExports.useState(null), contentRef = _d[0], setContentRef = _d[1];
	    var _e = useData(), isChatOpen = _e.isChatOpen, setIsMobileScreen = _e.setIsMobileScreen;
	    var _f = reactExports.useState(getStyles(iframeType, isChatOpen, false)), styles = _f[0], setStyles = _f[1];
	    var mountNode = (_b = (_a = contentRef === null || contentRef === void 0 ? void 0 : contentRef.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body;
	    var mountNodeDoc = (_c = contentRef === null || contentRef === void 0 ? void 0 : contentRef.contentWindow) === null || _c === void 0 ? void 0 : _c.document;
	    var addStyles = function () {
	        var link = mountNodeDoc.createElement("link");
	        link.href = "http://localhost:7777/dist/what2StudyClientStyles.css";
	        link.rel = "stylesheet";
	        link.type = "text/css";
	        mountNodeDoc.head.appendChild(link);
	    };
	    var handleWindowResize = function (event) {
	        var isMobileScreen = window.innerWidth < 600;
	        setStyles(getStyles(iframeType, isChatOpen, isMobileScreen));
	        setIsMobileScreen(isMobileScreen);
	    };
	    reactExports.useEffect(function () {
	        handleWindowResize();
	    }, [iframeType, isChatOpen]);
	    reactExports.useEffect(function () {
	        window.addEventListener("resize", handleWindowResize);
	        return function () {
	            window.removeEventListener("resize", handleWindowResize);
	        };
	    }, []);
	    reactExports.useEffect(function () {
	        if (mountNode) {
	            mountNode.style = "margin: 0";
	            addStyles();
	        }
	    }, [mountNode]);
	    return (jsxRuntimeExports.jsx("iframe", __assign$1({ style: styles }, rest, { onLoad: isFirefox ? function (e) { return setContentRef(e.target); } : undefined, ref: !isFirefox ? setContentRef : undefined }, { children: mountNode && reactDomExports.createPortal(children, mountNode) })));
	};

	/* eslint-disable */
	var eventTypeMapping = {
	    click: "onClick",
	    focusin: "onFocus",
	    focusout: "onFocus",
	    mousedown: "onMouseDown",
	    mouseup: "onMouseUp",
	    touchstart: "onTouchStart",
	    touchend: "onTouchEnd",
	};
	var ClickAwayListener = function (_a) {
	    var _b;
	    var children = _a.children, onClickAway = _a.onClickAway, _c = _a.focusEvent, focusEvent = _c === void 0 ? "focusin" : _c, _d = _a.mouseEvent, mouseEvent = _d === void 0 ? "click" : _d, _e = _a.touchEvent, touchEvent = _e === void 0 ? "touchend" : _e;
	    var node = reactExports.useRef(null);
	    var bubbledEventTarget = reactExports.useRef(null);
	    var mountedRef = reactExports.useRef(false);
	    /**
	     * Prevents the bubbled event from getting triggered immediately
	     * https://github.com/facebook/react/issues/20074
	     */
	    reactExports.useEffect(function () {
	        setTimeout(function () {
	            mountedRef.current = true;
	        }, 0);
	        return function () {
	            mountedRef.current = false;
	        };
	    }, []);
	    var handleBubbledEvents = function (type) {
	        return function (event) {
	            bubbledEventTarget.current = event.target;
	            var handler = children === null || children === void 0 ? void 0 : children.props[type];
	            if (handler) {
	                handler(event);
	            }
	        };
	    };
	    var handleChildRef = function (childRef) {
	        node.current = childRef;
	        var ref = children.ref;
	        if (typeof ref === "function") {
	            ref(childRef);
	        }
	        else if (ref) {
	            ref.current = childRef;
	        }
	    };
	    reactExports.useEffect(function () {
	        var _a, _b;
	        var nodeDocument = (_b = (_a = node.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) !== null && _b !== void 0 ? _b : document;
	        var handleEvents = function (event) {
	            if (!mountedRef.current)
	                return;
	            if ((node.current && node.current.contains(event.target)) ||
	                bubbledEventTarget.current === event.target ||
	                !nodeDocument.contains(event.target)) {
	                return;
	            }
	            onClickAway(event);
	        };
	        nodeDocument.addEventListener(mouseEvent, handleEvents);
	        nodeDocument.addEventListener(touchEvent, handleEvents);
	        nodeDocument.addEventListener(focusEvent, handleEvents);
	        return function () {
	            nodeDocument.removeEventListener(mouseEvent, handleEvents);
	            nodeDocument.removeEventListener(touchEvent, handleEvents);
	            nodeDocument.removeEventListener(focusEvent, handleEvents);
	        };
	    }, [focusEvent, mouseEvent, onClickAway, touchEvent]);
	    var mappedMouseEvent = eventTypeMapping[mouseEvent];
	    var mappedTouchEvent = eventTypeMapping[touchEvent];
	    var mappedFocusEvent = eventTypeMapping[focusEvent];
	    return React.Children.only(reactExports.cloneElement(children, (_b = {
	            ref: handleChildRef
	        },
	        _b[mappedFocusEvent] = handleBubbledEvents(mappedFocusEvent),
	        _b[mappedMouseEvent] = handleBubbledEvents(mappedMouseEvent),
	        _b[mappedTouchEvent] = handleBubbledEvents(mappedTouchEvent),
	        _b)));
	};

	// THIS FILE IS AUTO GENERATED
	function RiCloseFill (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"}}]})(props);
	}function RiUser6Fill (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.0009 17C15.6633 17 18.8659 18.5751 20.608 20.9247L18.766 21.796C17.3482 20.1157 14.8483 19 12.0009 19C9.15346 19 6.6535 20.1157 5.23577 21.796L3.39453 20.9238C5.13673 18.5747 8.33894 17 12.0009 17ZM12.0009 2C14.7623 2 17.0009 4.23858 17.0009 7V10C17.0009 12.7614 14.7623 15 12.0009 15C9.23945 15 7.00087 12.7614 7.00087 10V7C7.00087 4.23858 9.23945 2 12.0009 2Z"}}]})(props);
	}

	var classnames = {exports: {}};

	/*!
		Copyright (c) 2018 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
	*/
	classnames.exports;

	(function (module) {
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames () {
				var classes = '';

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (arg) {
						classes = appendClass(classes, parseValue(arg));
					}
				}

				return classes;
			}

			function parseValue (arg) {
				if (typeof arg === 'string' || typeof arg === 'number') {
					return arg;
				}

				if (typeof arg !== 'object') {
					return '';
				}

				if (Array.isArray(arg)) {
					return classNames.apply(null, arg);
				}

				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					return arg.toString();
				}

				var classes = '';

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes = appendClass(classes, key);
					}
				}

				return classes;
			}

			function appendClass (value, newClass) {
				if (!newClass) {
					return value;
				}
			
				if (value) {
					return value + ' ' + newClass;
				}
			
				return value + newClass;
			}

			if (module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else {
				window.classNames = classNames;
			}
		}()); 
	} (classnames));

	var classnamesExports = classnames.exports;
	var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

	const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
	const DEFAULT_MIN_BREAKPOINT = 'xs';
	const ThemeContext = /*#__PURE__*/reactExports.createContext({
	  prefixes: {},
	  breakpoints: DEFAULT_BREAKPOINTS,
	  minBreakpoint: DEFAULT_MIN_BREAKPOINT
	});
	function useBootstrapPrefix(prefix, defaultPrefix) {
	  const {
	    prefixes
	  } = reactExports.useContext(ThemeContext);
	  return prefix || prefixes[defaultPrefix] || defaultPrefix;
	}
	function useBootstrapBreakpoints() {
	  const {
	    breakpoints
	  } = reactExports.useContext(ThemeContext);
	  return breakpoints;
	}
	function useBootstrapMinBreakpoint() {
	  const {
	    minBreakpoint
	  } = reactExports.useContext(ThemeContext);
	  return minBreakpoint;
	}

	// TODO

	const FormContext = /*#__PURE__*/reactExports.createContext({});
	var FormContext$1 = FormContext;

	const FormRange = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  id,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
	  return /*#__PURE__*/jsxRuntimeExports.jsx("input", {
	    ...props,
	    type: "range",
	    ref: ref,
	    className: classNames(className, bsPrefix),
	    id: id || controlId
	  });
	});
	FormRange.displayName = 'FormRange';
	var FormRange$1 = FormRange;

	function warn() {
	  if (console && console.warn) {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    if (typeof args[0] === 'string') args[0] = `react-i18next:: ${args[0]}`;
	    console.warn(...args);
	  }
	}
	const alreadyWarned = {};
	function warnOnce() {
	  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
	  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
	  warn(...args);
	}
	const loadedClb = (i18n, cb) => () => {
	  if (i18n.isInitialized) {
	    cb();
	  } else {
	    const initialized = () => {
	      setTimeout(() => {
	        i18n.off('initialized', initialized);
	      }, 0);
	      cb();
	    };
	    i18n.on('initialized', initialized);
	  }
	};
	function loadNamespaces(i18n, ns, cb) {
	  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
	}
	function loadLanguages(i18n, lng, ns, cb) {
	  if (typeof ns === 'string') ns = [ns];
	  ns.forEach(n => {
	    if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
	  });
	  i18n.loadLanguages(lng, loadedClb(i18n, cb));
	}
	function oldI18nextHasLoadedNamespace(ns, i18n) {
	  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  const lng = i18n.languages[0];
	  const fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
	  const lastLng = i18n.languages[i18n.languages.length - 1];
	  if (lng.toLowerCase() === 'cimode') return true;
	  const loadNotPending = (l, n) => {
	    const loadState = i18n.services.backendConnector.state[`${l}|${n}`];
	    return loadState === -1 || loadState === 2;
	  };
	  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
	  if (i18n.hasResourceBundle(lng, ns)) return true;
	  if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
	  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
	  return false;
	}
	function hasLoadedNamespace(ns, i18n) {
	  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  if (!i18n.languages || !i18n.languages.length) {
	    warnOnce('i18n.languages were undefined or empty', i18n.languages);
	    return true;
	  }
	  const isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;
	  if (!isNewerI18next) {
	    return oldI18nextHasLoadedNamespace(ns, i18n, options);
	  }
	  return i18n.hasLoadedNamespace(ns, {
	    lng: options.lng,
	    precheck: (i18nInstance, loadNotPending) => {
	      if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
	    }
	  });
	}

	const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
	const htmlEntities = {
	  '&amp;': '&',
	  '&#38;': '&',
	  '&lt;': '<',
	  '&#60;': '<',
	  '&gt;': '>',
	  '&#62;': '>',
	  '&apos;': "'",
	  '&#39;': "'",
	  '&quot;': '"',
	  '&#34;': '"',
	  '&nbsp;': ' ',
	  '&#160;': ' ',
	  '&copy;': '©',
	  '&#169;': '©',
	  '&reg;': '®',
	  '&#174;': '®',
	  '&hellip;': '…',
	  '&#8230;': '…',
	  '&#x2F;': '/',
	  '&#47;': '/'
	};
	const unescapeHtmlEntity = m => htmlEntities[m];
	const unescape = text => text.replace(matchHtmlEntity, unescapeHtmlEntity);

	let defaultOptions = {
	  bindI18n: 'languageChanged',
	  bindI18nStore: '',
	  transEmptyNodeValue: '',
	  transSupportBasicHtmlNodes: true,
	  transWrapTextNodes: '',
	  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
	  useSuspense: true,
	  unescape
	};
	function getDefaults() {
	  return defaultOptions;
	}

	let i18nInstance;
	function getI18n() {
	  return i18nInstance;
	}

	const I18nContext = reactExports.createContext();
	class ReportNamespaces {
	  constructor() {
	    this.usedNamespaces = {};
	  }
	  addUsedNamespaces(namespaces) {
	    namespaces.forEach(ns => {
	      if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
	    });
	  }
	  getUsedNamespaces() {
	    return Object.keys(this.usedNamespaces);
	  }
	}

	const usePrevious = (value, ignore) => {
	  const ref = reactExports.useRef();
	  reactExports.useEffect(() => {
	    ref.current = ignore ? ref.current : value;
	  }, [value, ignore]);
	  return ref.current;
	};
	function alwaysNewT(i18n, language, namespace, keyPrefix) {
	  return i18n.getFixedT(language, namespace, keyPrefix);
	}
	function useMemoizedT(i18n, language, namespace, keyPrefix) {
	  return reactExports.useCallback(alwaysNewT(i18n, language, namespace, keyPrefix), [i18n, language, namespace, keyPrefix]);
	}
	function useTranslation(ns) {
	  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  const {
	    i18n: i18nFromProps
	  } = props;
	  const {
	    i18n: i18nFromContext,
	    defaultNS: defaultNSFromContext
	  } = reactExports.useContext(I18nContext) || {};
	  const i18n = i18nFromProps || i18nFromContext || getI18n();
	  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
	  if (!i18n) {
	    warnOnce('You will need to pass in an i18next instance by using initReactI18next');
	    const notReadyT = (k, optsOrDefaultValue) => {
	      if (typeof optsOrDefaultValue === 'string') return optsOrDefaultValue;
	      if (optsOrDefaultValue && typeof optsOrDefaultValue === 'object' && typeof optsOrDefaultValue.defaultValue === 'string') return optsOrDefaultValue.defaultValue;
	      return Array.isArray(k) ? k[k.length - 1] : k;
	    };
	    const retNotReady = [notReadyT, {}, false];
	    retNotReady.t = notReadyT;
	    retNotReady.i18n = {};
	    retNotReady.ready = false;
	    return retNotReady;
	  }
	  if (i18n.options.react && i18n.options.react.wait !== undefined) warnOnce('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
	  const i18nOptions = {
	    ...getDefaults(),
	    ...i18n.options.react,
	    ...props
	  };
	  const {
	    useSuspense,
	    keyPrefix
	  } = i18nOptions;
	  let namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
	  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
	  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
	  const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(n => hasLoadedNamespace(n, i18n, i18nOptions));
	  const memoGetT = useMemoizedT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
	  const getT = () => memoGetT;
	  const getNewT = () => alwaysNewT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
	  const [t, setT] = reactExports.useState(getT);
	  let joinedNS = namespaces.join();
	  if (props.lng) joinedNS = `${props.lng}${joinedNS}`;
	  const previousJoinedNS = usePrevious(joinedNS);
	  const isMounted = reactExports.useRef(true);
	  reactExports.useEffect(() => {
	    const {
	      bindI18n,
	      bindI18nStore
	    } = i18nOptions;
	    isMounted.current = true;
	    if (!ready && !useSuspense) {
	      if (props.lng) {
	        loadLanguages(i18n, props.lng, namespaces, () => {
	          if (isMounted.current) setT(getNewT);
	        });
	      } else {
	        loadNamespaces(i18n, namespaces, () => {
	          if (isMounted.current) setT(getNewT);
	        });
	      }
	    }
	    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
	      setT(getNewT);
	    }
	    function boundReset() {
	      if (isMounted.current) setT(getNewT);
	    }
	    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
	    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
	    return () => {
	      isMounted.current = false;
	      if (bindI18n && i18n) bindI18n.split(' ').forEach(e => i18n.off(e, boundReset));
	      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(e => i18n.store.off(e, boundReset));
	    };
	  }, [i18n, joinedNS]);
	  reactExports.useEffect(() => {
	    if (isMounted.current && ready) {
	      setT(getT);
	    }
	  }, [i18n, keyPrefix, ready]);
	  const ret = [t, i18n, ready];
	  ret.t = t;
	  ret.i18n = i18n;
	  ret.ready = ready;
	  if (ready) return ret;
	  if (!ready && !useSuspense) return ret;
	  throw new Promise(resolve => {
	    if (props.lng) {
	      loadLanguages(i18n, props.lng, namespaces, () => resolve());
	    } else {
	      loadNamespaces(i18n, namespaces, () => resolve());
	    }
	  });
	}

	function I18nextProvider(_ref) {
	  let {
	    i18n,
	    defaultNS,
	    children
	  } = _ref;
	  const value = reactExports.useMemo(() => ({
	    i18n,
	    defaultNS
	  }), [i18n, defaultNS]);
	  return reactExports.createElement(I18nContext.Provider, {
	    value
	  }, children);
	}

	var PopupItemFilters = function () {
	    var _a = useData(), chatFilters = _a.chatFilters, setChatFilters = _a.setChatFilters;
	    var handleFilterValue = function (e) {
	        var _a;
	        setChatFilters(__assign$1(__assign$1({}, chatFilters), (_a = {}, _a[e.target.name] = e.target.value, _a)));
	    };
	    var _b = useTranslation("global"), t = _b[0]; _b[1];
	    return (jsxRuntimeExports.jsxs(PopupContents, __assign$1({ title: t("filters.personality"), className: "popup-contents-filters" }, { children: [jsxRuntimeExports.jsxs("div", __assign$1({ className: "chip-buttons-wrapper" }, { children: [jsxRuntimeExports.jsx("button", __assign$1({ className: "app-chip-button", title: "Reset" }, { children: t("filters.reset") })), jsxRuntimeExports.jsx("button", __assign$1({ className: "app-chip-button", title: "Discard Changes" }, { children: t("filters.discard") }))] })), jsxRuntimeExports.jsxs("div", __assign$1({ className: "filters-wrapper" }, { children: [jsxRuntimeExports.jsxs("div", __assign$1({ className: "filter" }, { children: [jsxRuntimeExports.jsxs("div", __assign$1({ className: "slider-filter-datalist" }, { children: [jsxRuntimeExports.jsx("span", __assign$1({ className: "slider-option" }, { children: t("filters.friendly") })), jsxRuntimeExports.jsx("span", __assign$1({ className: "slider-option" }, { children: t("filters.professional") }))] })), jsxRuntimeExports.jsx(FormRange$1, { name: "tone", value: chatFilters.tone, min: 0, max: 1, step: 0.1, onChange: handleFilterValue, className: "form-range" })] })), jsxRuntimeExports.jsxs("div", __assign$1({ className: "filter" }, { children: [jsxRuntimeExports.jsxs("div", __assign$1({ className: "slider-filter-datalist" }, { children: [jsxRuntimeExports.jsx("span", __assign$1({ className: "slider-option" }, { children: t("filters.opinionated") })), jsxRuntimeExports.jsx("span", __assign$1({ className: "slider-option" }, { children: t("filters.neutral") }))] })), jsxRuntimeExports.jsx(FormRange$1, { name: "sentiment", value: chatFilters.sentiment, min: 0, max: 1, step: 0.1, onChange: handleFilterValue, className: "form-range" })] })), jsxRuntimeExports.jsxs("div", __assign$1({ className: "filter" }, { children: [jsxRuntimeExports.jsxs("div", __assign$1({ className: "slider-filter-datalist" }, { children: [jsxRuntimeExports.jsx("span", __assign$1({ className: "slider-option" }, { children: t("filters.many") })), jsxRuntimeExports.jsx("span", __assign$1({ className: "slider-option" }, { children: t("filters.no") }))] })), jsxRuntimeExports.jsx(FormRange$1, { name: "emotiveness", value: chatFilters.emotiveness, min: 0, max: 1, step: 0.1, onChange: handleFilterValue, className: "form-range" })] })), jsxRuntimeExports.jsxs("div", __assign$1({ className: "filter" }, { children: [jsxRuntimeExports.jsxs("div", __assign$1({ className: "slider-filter-datalist" }, { children: [jsxRuntimeExports.jsx("span", __assign$1({ className: "slider-option" }, { children: t("filters.long") })), jsxRuntimeExports.jsx("span", __assign$1({ className: "slider-option" }, { children: t("filters.short") }))] })), jsxRuntimeExports.jsx(FormRange$1, { name: "length", value: chatFilters.length, min: 0, max: 1, step: 0.1, onChange: handleFilterValue, className: "form-range" })] }))] }))] })));
	};

	var PopupItemInfo = function () {
	    var _a = useTranslation("global"), t = _a[0]; _a[1];
	    return (jsxRuntimeExports.jsxs(PopupContents, __assign$1({ title: t("infoPopup.welcome"), className: "popup-infobox" }, { children: [jsxRuntimeExports.jsxs("p", __assign$1({ className: "info-text" }, { children: [t("infoPopup.what2study"), " ", jsxRuntimeExports.jsxs("span", { children: [" ", t("infoPopup.chatbot")] }), " ", t("infoPopup.that"), jsxRuntimeExports.jsx("span", { children: t("infoPopup.studies") }), "."] })), jsxRuntimeExports.jsx("p", __assign$1({ className: "info-text-title" }, { children: t("infoPopup.please") })), jsxRuntimeExports.jsxs("p", __assign$1({ className: "info-text" }, { children: [t("infoPopup.isnot"), jsxRuntimeExports.jsx("span", { children: t("infoPopup.person") }), t("infoPopup.many"), jsxRuntimeExports.jsx("span", { children: t("infoPopup.cant") }), " ", t("infoPopup.every")] }))] })));
	};

	var propTypes$2 = {exports: {}};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = ReactPropTypesSecret_1;

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  propTypes$2.exports = factoryWithThrowingShims();
	}

	var propTypesExports = propTypes$2.exports;
	var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

	/**
	 * Finds whether a component's `children` prop includes a React element of the
	 * specified type.
	 */
	function hasChildOfType(children, type) {
	  return reactExports.Children.toArray(children).some(child => /*#__PURE__*/reactExports.isValidElement(child) && child.type === type);
	}

	function useCol({
	  as,
	  bsPrefix,
	  className,
	  ...props
	}) {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
	  const breakpoints = useBootstrapBreakpoints();
	  const minBreakpoint = useBootstrapMinBreakpoint();
	  const spans = [];
	  const classes = [];
	  breakpoints.forEach(brkPoint => {
	    const propValue = props[brkPoint];
	    delete props[brkPoint];
	    let span;
	    let offset;
	    let order;
	    if (typeof propValue === 'object' && propValue != null) {
	      ({
	        span,
	        offset,
	        order
	      } = propValue);
	    } else {
	      span = propValue;
	    }
	    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
	    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
	    if (order != null) classes.push(`order${infix}-${order}`);
	    if (offset != null) classes.push(`offset${infix}-${offset}`);
	  });
	  return [{
	    ...props,
	    className: classNames(className, ...spans, ...classes)
	  }, {
	    as,
	    bsPrefix,
	    spans
	  }];
	}
	const Col = /*#__PURE__*/reactExports.forwardRef(
	// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	(props, ref) => {
	  const [{
	    className,
	    ...colProps
	  }, {
	    as: Component = 'div',
	    bsPrefix,
	    spans
	  }] = useCol(props);
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ...colProps,
	    ref: ref,
	    className: classNames(className, !spans.length && bsPrefix)
	  });
	});
	Col.displayName = 'Col';
	var Col$1 = Col;

	const propTypes$1 = {
	  /**
	   * Specify whether the feedback is for valid or invalid fields
	   *
	   * @type {('valid'|'invalid')}
	   */
	  type: PropTypes.string,
	  /** Display feedback as a tooltip. */
	  tooltip: PropTypes.bool,
	  as: PropTypes.elementType
	};
	const Feedback = /*#__PURE__*/reactExports.forwardRef(
	// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	({
	  as: Component = 'div',
	  className,
	  type = 'valid',
	  tooltip = false,
	  ...props
	}, ref) => /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	  ...props,
	  ref: ref,
	  className: classNames(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
	}));
	Feedback.displayName = 'Feedback';
	Feedback.propTypes = propTypes$1;
	var Feedback$1 = Feedback;

	const FormCheckInput = /*#__PURE__*/reactExports.forwardRef(({
	  id,
	  bsPrefix,
	  className,
	  type = 'checkbox',
	  isValid = false,
	  isInvalid = false,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'input',
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ...props,
	    ref: ref,
	    type: type,
	    id: id || controlId,
	    className: classNames(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
	  });
	});
	FormCheckInput.displayName = 'FormCheckInput';
	var FormCheckInput$1 = FormCheckInput;

	const FormCheckLabel = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  htmlFor,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
	  return /*#__PURE__*/jsxRuntimeExports.jsx("label", {
	    ...props,
	    ref: ref,
	    htmlFor: htmlFor || controlId,
	    className: classNames(className, bsPrefix)
	  });
	});
	FormCheckLabel.displayName = 'FormCheckLabel';
	var FormCheckLabel$1 = FormCheckLabel;

	const FormCheck = /*#__PURE__*/reactExports.forwardRef(({
	  id,
	  bsPrefix,
	  bsSwitchPrefix,
	  inline = false,
	  reverse = false,
	  disabled = false,
	  isValid = false,
	  isInvalid = false,
	  feedbackTooltip = false,
	  feedback,
	  feedbackType,
	  className,
	  style,
	  title = '',
	  type = 'checkbox',
	  label,
	  children,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as = 'input',
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
	  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
	  const {
	    controlId
	  } = reactExports.useContext(FormContext$1);
	  const innerFormContext = reactExports.useMemo(() => ({
	    controlId: id || controlId
	  }), [controlId, id]);
	  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel$1);
	  const input = /*#__PURE__*/jsxRuntimeExports.jsx(FormCheckInput$1, {
	    ...props,
	    type: type === 'switch' ? 'checkbox' : type,
	    ref: ref,
	    isValid: isValid,
	    isInvalid: isInvalid,
	    disabled: disabled,
	    as: as
	  });
	  return /*#__PURE__*/jsxRuntimeExports.jsx(FormContext$1.Provider, {
	    value: innerFormContext,
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      style: style,
	      className: classNames(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
	      children: children || /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	        children: [input, hasLabel && /*#__PURE__*/jsxRuntimeExports.jsx(FormCheckLabel$1, {
	          title: title,
	          children: label
	        }), feedback && /*#__PURE__*/jsxRuntimeExports.jsx(Feedback$1, {
	          type: feedbackType,
	          tooltip: feedbackTooltip,
	          children: feedback
	        })]
	      })
	    })
	  });
	});
	FormCheck.displayName = 'FormCheck';
	var FormCheck$1 = Object.assign(FormCheck, {
	  Input: FormCheckInput$1,
	  Label: FormCheckLabel$1
	});

	const FormControl = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  type,
	  size,
	  htmlSize,
	  id,
	  className,
	  isValid = false,
	  isInvalid = false,
	  plaintext,
	  readOnly,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'input',
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-control');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ...props,
	    type: type,
	    size: htmlSize,
	    ref: ref,
	    readOnly: readOnly,
	    id: id || controlId,
	    className: classNames(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === 'color' && `${bsPrefix}-color`, isValid && 'is-valid', isInvalid && 'is-invalid')
	  });
	});
	FormControl.displayName = 'FormControl';
	var FormControl$1 = Object.assign(FormControl, {
	  Feedback: Feedback$1
	});

	const FormFloating = /*#__PURE__*/reactExports.forwardRef(({
	  className,
	  bsPrefix,
	  as: Component = 'div',
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ref: ref,
	    className: classNames(className, bsPrefix),
	    ...props
	  });
	});
	FormFloating.displayName = 'FormFloating';
	var FormFloating$1 = FormFloating;

	const FormGroup = /*#__PURE__*/reactExports.forwardRef(({
	  controlId,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'div',
	  ...props
	}, ref) => {
	  const context = reactExports.useMemo(() => ({
	    controlId
	  }), [controlId]);
	  return /*#__PURE__*/jsxRuntimeExports.jsx(FormContext$1.Provider, {
	    value: context,
	    children: /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	      ...props,
	      ref: ref
	    })
	  });
	});
	FormGroup.displayName = 'FormGroup';
	var FormGroup$1 = FormGroup;

	const FormLabel = /*#__PURE__*/reactExports.forwardRef(({
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'label',
	  bsPrefix,
	  column = false,
	  visuallyHidden = false,
	  className,
	  htmlFor,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
	  let columnClass = 'col-form-label';
	  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
	  const classes = classNames(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
	  htmlFor = htmlFor || controlId;
	  if (column) return /*#__PURE__*/jsxRuntimeExports.jsx(Col$1, {
	    ref: ref,
	    as: "label",
	    className: classes,
	    htmlFor: htmlFor,
	    ...props
	  });
	  return (
	    /*#__PURE__*/
	    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
	    jsxRuntimeExports.jsx(Component, {
	      ref: ref,
	      className: classes,
	      htmlFor: htmlFor,
	      ...props
	    })
	  );
	});
	FormLabel.displayName = 'FormLabel';
	var FormLabel$1 = FormLabel;

	const FormSelect = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  size,
	  htmlSize,
	  className,
	  isValid = false,
	  isInvalid = false,
	  id,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
	  return /*#__PURE__*/jsxRuntimeExports.jsx("select", {
	    ...props,
	    size: htmlSize,
	    ref: ref,
	    className: classNames(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
	    id: id || controlId
	  });
	});
	FormSelect.displayName = 'FormSelect';
	var FormSelect$1 = FormSelect;

	const FormText = /*#__PURE__*/reactExports.forwardRef(
	// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	({
	  bsPrefix,
	  className,
	  as: Component = 'small',
	  muted,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ...props,
	    ref: ref,
	    className: classNames(className, bsPrefix, muted && 'text-muted')
	  });
	});
	FormText.displayName = 'FormText';
	var FormText$1 = FormText;

	const Switch = /*#__PURE__*/reactExports.forwardRef((props, ref) => /*#__PURE__*/jsxRuntimeExports.jsx(FormCheck$1, {
	  ...props,
	  ref: ref,
	  type: "switch"
	}));
	Switch.displayName = 'Switch';
	var Switch$1 = Object.assign(Switch, {
	  Input: FormCheck$1.Input,
	  Label: FormCheck$1.Label
	});

	const FloatingLabel = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  children,
	  controlId,
	  label,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
	  return /*#__PURE__*/jsxRuntimeExports.jsxs(FormGroup$1, {
	    ref: ref,
	    className: classNames(className, bsPrefix),
	    controlId: controlId,
	    ...props,
	    children: [children, /*#__PURE__*/jsxRuntimeExports.jsx("label", {
	      htmlFor: controlId,
	      children: label
	    })]
	  });
	});
	FloatingLabel.displayName = 'FloatingLabel';
	var FloatingLabel$1 = FloatingLabel;

	const propTypes = {
	  /**
	   * The Form `ref` will be forwarded to the underlying element,
	   * which means, unless it's rendered `as` a composite component,
	   * it will be a DOM node, when resolved.
	   *
	   * @type {ReactRef}
	   * @alias ref
	   */
	  _ref: PropTypes.any,
	  /**
	   * Mark a form as having been validated. Setting it to `true` will
	   * toggle any validation styles on the forms elements.
	   */
	  validated: PropTypes.bool,
	  as: PropTypes.elementType
	};
	const Form = /*#__PURE__*/reactExports.forwardRef(({
	  className,
	  validated,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'form',
	  ...props
	}, ref) => /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	  ...props,
	  ref: ref,
	  className: classNames(className, validated && 'was-validated')
	}));
	Form.displayName = 'Form';
	Form.propTypes = propTypes;
	var Form$1 = Object.assign(Form, {
	  Group: FormGroup$1,
	  Control: FormControl$1,
	  Floating: FormFloating$1,
	  Check: FormCheck$1,
	  Switch: Switch$1,
	  Label: FormLabel$1,
	  Text: FormText$1,
	  Range: FormRange$1,
	  Select: FormSelect$1,
	  FloatingLabel: FloatingLabel$1
	});

	var getLanguage = function (language) {
	    switch (language) {
	        case EChatLanguage.EN:
	            return "🇬🇧 EN";
	        case EChatLanguage.DE:
	            return "🇩🇪 DE";
	        default:
	            return "🇬🇧 EN";
	    }
	};
	var PopupItemSettings = function () {
	    var _a = useData(), language = _a.language, setLanguage = _a.setLanguage;
	    var handleLanguage = function (e) {
	        setLanguage(e.target.value);
	        i18n.changeLanguage(e.target.value.toLowerCase());
	    };
	    var _b = useTranslation("global"), t = _b[0], i18n = _b[1];
	    var dummyUserAssumptions = [
	        t("settings.userAssumption1"),
	        t("settings.userAssumption2"),
	        t("settings.userAssumption3")
	    ];
	    return (jsxRuntimeExports.jsxs(PopupContents, __assign$1({ title: t("settings.settings"), className: "popup-settings-wrapper" }, { children: [jsxRuntimeExports.jsx("div", __assign$1({ className: "chip-button-wrapper" }, { children: jsxRuntimeExports.jsx("button", __assign$1({ className: "app-chip-button" }, { children: t("settings.restart") })) })), jsxRuntimeExports.jsxs("div", __assign$1({ className: "setting-block language-select-wrapper" }, { children: [jsxRuntimeExports.jsx("span", __assign$1({ className: "block-title" }, { children: t("settings.language") })), jsxRuntimeExports.jsx(FormSelect$1, __assign$1({ value: language, size: "sm", className: "language-select", onChange: handleLanguage }, { children: Object.values(EChatLanguage).map(function (lang) { return (jsxRuntimeExports.jsx("option", __assign$1({ value: lang }, { children: getLanguage(lang) }))); }) }))] })), jsxRuntimeExports.jsxs("div", __assign$1({ className: "setting-block user-assumptions" }, { children: [jsxRuntimeExports.jsx("span", __assign$1({ className: "block-title" }, { children: t("settings.user") })), jsxRuntimeExports.jsx("div", __assign$1({ className: "chips-wrapper" }, { children: dummyUserAssumptions.map(function (assumption) {
	                            return (jsxRuntimeExports.jsxs("span", __assign$1({ className: "app-chip-with-close-btn" }, { children: [assumption, jsxRuntimeExports.jsx("button", __assign$1({ className: "close-btn" }, { children: jsxRuntimeExports.jsx(IoCloseSharp, { className: "close-icon" }) }))] })));
	                        }) }))] }))] })));
	};

	var PopupContents = function (props) {
	    var title = props.title, children = props.children, className = props.className;
	    var setPopupItem = useData().setPopupItem;
	    return (jsxRuntimeExports.jsxs("div", __assign$1({ className: "popup-content" }, { children: [jsxRuntimeExports.jsxs("div", __assign$1({ className: "popup-content-header" }, { children: [jsxRuntimeExports.jsx("h3", __assign$1({ className: "popup-content-title" }, { children: title })), jsxRuntimeExports.jsx("button", __assign$1({ className: "popup-close-button", "aria-label": "Close", onClick: function () { return setPopupItem(EPopupItem.NONE); } }, { children: jsxRuntimeExports.jsx(RiCloseFill, { className: "popup-close-icon" }) }))] })), jsxRuntimeExports.jsx("div", __assign$1({ className: "popup-content-body ".concat(className) }, { children: children }))] })));
	};
	var getPopupContent = function (popupType) {
	    switch (popupType) {
	        case EPopupItem.SETTINGS:
	            return jsxRuntimeExports.jsx(PopupItemSettings, {});
	        case EPopupItem.FILTERS:
	            return jsxRuntimeExports.jsx(PopupItemFilters, {});
	        case EPopupItem.BOT_INFO:
	            return jsxRuntimeExports.jsx(PopupItemInfo, {});
	        default:
	            return jsxRuntimeExports.jsx(reactExports.Fragment, {});
	    }
	};
	var PopupScreen = function () {
	    var _a = useData(), popupItem = _a.popupItem, setPopupItem = _a.setPopupItem;
	    if (popupItem === EPopupItem.NONE)
	        return jsxRuntimeExports.jsx(reactExports.Fragment, {});
	    return (jsxRuntimeExports.jsx(ClickAwayListener, __assign$1({ onClickAway: function () { return setPopupItem(EPopupItem.NONE); } }, { children: jsxRuntimeExports.jsx("div", __assign$1({ className: "popup-screen" }, { children: getPopupContent(popupItem) })) })));
	};

	// THIS FILE IS AUTO GENERATED
	function MdInfoOutline (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(props);
	}function MdReplay (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}}]})(props);
	}function MdEmail (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(props);
	}function MdCancel (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}}]})(props);
	}function MdThumbDownAlt (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M24 24H0V0h24v24z"}},{"tag":"path","attr":{"d":"M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"}}]})(props);
	}function MdThumbUpAlt (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M24 24H0V0h24v24z"}},{"tag":"path","attr":{"d":"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66a4.8 4.8 0 00-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84A2.34 2.34 0 009.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}}]})(props);
	}function MdOutlineThumbDownOffAlt (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4V3z"}}]})(props);
	}function MdOutlineThumbUpOffAlt (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1V9z"}}]})(props);
	}

	var IntroPage = function () {
	    var _a = useData(), setCurrentRoute = _a.setCurrentRoute, clientConfig = _a.clientConfig;
	    var _b = reactExports.useState(0), introPage = _b[0], setIntroPage = _b[1];
	    var _c = reactExports.useState(false), isVideoOpen = _c[0], setIsVideoOpen = _c[1];
	    var chatbotProfileImage = clientConfig.chatbotProfileImage, chatbotHeader = clientConfig.chatbotLook.chatbotHeader;
	    var _d = useTranslation("global"), t = _d[0]; _d[1];
	    return (jsxRuntimeExports.jsx(reactExports.Fragment, { children: jsxRuntimeExports.jsxs("div", __assign$1({ className: "introScreen-wrapper" }, { children: [isVideoOpen && (jsxRuntimeExports.jsxs("div", __assign$1({ className: "video-wrapper" }, { children: [jsxRuntimeExports.jsx(IconButton, { icon: MdCancel, onClick: function () { return setIsVideoOpen(false); } }), jsxRuntimeExports.jsx("iframe", { width: "100%", height: "200", src: "https://www.youtube.com/embed/p2rgGbp36K0", title: "YouTube video player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true })] }))), introPage == 0 && (jsxRuntimeExports.jsxs("div", __assign$1({ className: "is-contentWrapper" }, { children: [jsxRuntimeExports.jsx("img", { src: chatbotProfileImage, className: "is-icon", alt: "Bot Icon" }), jsxRuntimeExports.jsx("div", __assign$1({ className: "is-infoBlock" }, { children: jsxRuntimeExports.jsxs("p", __assign$1({ className: "is-block-text" }, { children: [t("introPage1.hello"), " ", jsxRuntimeExports.jsx("span", __assign$1({ className: "is-block-bold" }, { children: t("introPage1.iam") })), t("introPage1.built")] })) })), jsxRuntimeExports.jsxs("button", __assign$1({ className: "play-tutorial-button", onClick: function () { return setIsVideoOpen(true); } }, { children: [jsxRuntimeExports.jsx("div", __assign$1({ className: "pt-iconWrapper" }, { children: jsxRuntimeExports.jsx(BsFillPlayCircleFill, { className: "pt-icon" }) })), jsxRuntimeExports.jsx("span", __assign$1({ className: "pt-button-name" }, { children: t("introPage1.play") }))] })), jsxRuntimeExports.jsx("button", __assign$1({ className: "is-tochat-button" }, { children: t("introPage1.chat") }))] }))), introPage == 1 && (jsxRuntimeExports.jsxs("div", __assign$1({ className: "is-contentWrapper" }, { children: [jsxRuntimeExports.jsx("img", { src: chatbotProfileImage, className: "is-icon", alt: "Bot Icon" }), jsxRuntimeExports.jsx("div", __assign$1({ className: "is-infoBlock2" }, { children: jsxRuntimeExports.jsxs("p", __assign$1({ className: "is-block-text" }, { children: [t("introPage2.Lets"), " ", jsxRuntimeExports.jsx("span", __assign$1({ className: "is-block-bold" }, { children: t("introPage2.easy") })), t("introPage2.thats"), jsxRuntimeExports.jsx("span", __assign$1({ className: "is-block-bold" }, { children: t("introPage2.functions") }))] })) })), jsxRuntimeExports.jsx("div", __assign$1({ className: "is-infoBlock2" }, { children: jsxRuntimeExports.jsx("p", __assign$1({ className: "is-block-text" }, { children: t("introPage2.everything") })) })), jsxRuntimeExports.jsx("button", __assign$1({ className: "is-tochat-button" }, { children: "To Chat" }))] }))), jsxRuntimeExports.jsx("button", __assign$1({ className: "is-okayNextButton", onClick: function () {
	                        return introPage < 1 ? setIntroPage(introPage + 1) : setCurrentRoute(ERoute.MAIN);
	                    }, style: {
	                        backgroundColor: chatbotHeader.chatbotHeaderBackgroundColor,
	                        color: chatbotHeader.chatbotHeaderIconFontColor,
	                    } }, { children: t("introPage1.okay") }))] })) }));
	};

	// THIS FILE IS AUTO GENERATED
	function IoIosCall (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z"}}]})(props);
	}function IoMdVolumeHigh (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256zM298.667 64v44.978C360.531 127.632 405.334 186.882 405.334 256c0 69.119-44.803 128.369-106.667 147.022V448C384 428.254 448 349.257 448 256c0-93.256-64-172.254-149.333-192z"}}]})(props);
	}function IoMdVolumeOff (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405.5 256c0 22.717-4.883 44.362-13.603 63.855l31.88 31.88C439.283 323.33 448 290.653 448 256c0-93.256-64-172.254-149-192v44.978C361 127.632 405.5 186.882 405.5 256zM256 80.458l-51.021 52.48L256 183.957zM420.842 396.885L91.116 67.157l-24 24 90.499 90.413-8.28 10.43H64v128h85.334L256 431.543V280l94.915 94.686C335.795 387.443 318 397.213 299 403.022V448c31-7.172 58.996-22.163 82.315-42.809l39.61 39.693 24-24.043-24.002-24.039-.081.083z"}},{"tag":"path","attr":{"d":"M352.188 256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801 50.801A100.596 100.596 0 0 0 352.188 256z"}}]})(props);
	}

	var chatEndpoint = "http://127.0.0.1:5009/chatbot/";
	var EMessageSource;
	(function (EMessageSource) {
	    EMessageSource["BOT"] = "BOT";
	    EMessageSource["USER"] = "USER";
	})(EMessageSource || (EMessageSource = {}));
	var EMessageType;
	(function (EMessageType) {
	    EMessageType["TEXT"] = "text";
	    EMessageType["IMAGE"] = "image";
	    EMessageType["VIDEO"] = "video";
	})(EMessageType || (EMessageType = {}));
	var initialMessages = [
	    {
	        source: EMessageSource.BOT,
	        message: "Herzlich willkommen bei unserer Studienberatung! Wie kann ich Ihnen heute behilflich sein?",
	    },
	];
	var isYoutubeURL = function (url) {
	    if (url === void 0) { url = ""; }
	    var ytRegEx = new RegExp("^(https?://)?(www.youtube.com|youtu.be)/.+$");
	    return ytRegEx.test(url);
	};
	var Main = function (props) {
	    var _a = useData(), setPopupItem = _a.setPopupItem, isBotVolumeOn = _a.isBotVolumeOn, setIsBotVolumeOn = _a.setIsBotVolumeOn, setCurrentRoute = _a.setCurrentRoute, clientConfig = _a.clientConfig, sessionId = _a.sessionId;
	    var _b = reactExports.useState(false), isInputFocused = _b[0], setIsInputFocused = _b[1];
	    var _c = reactExports.useState(""), message = _c[0], setMessage = _c[1];
	    var _d = reactExports.useState(initialMessages), messages = _d[0], setMessages = _d[1];
	    var _e = reactExports.useState(false), loading = _e[0], setLoading = _e[1];
	    var messagesEndRef = reactExports.useRef(null);
	    var WHAT2STUDY_BACKEND_URL = "http://localhost:1339/what2study/parse/functions";
	    var WHAT2STUDY_X_PARSE_APP_ID = "what2study";
	    var WHAT2STUDY_X_PARSE_MASTERKEY = "what2studyMaster";
	    var chatbotProfileImage = clientConfig.chatbotProfileImage, chatbotId = clientConfig.chatbotId, userId = clientConfig.userId, _f = clientConfig.chatbotLook, textBoxUser = _f.textBoxUser, textBoxChatbotReply = _f.textBoxChatbotReply, UIGroupA = _f.UIGroupA, UIGroupB = _f.UIGroupB;
	    var _g = reactExports.useState(''), value = _g[0], setValue = _g[1];
	    reactExports.useEffect(function () {
	        var timeout = setTimeout(function () {
	            if (clientConfig.randomQuestionEnabled) {
	                setMessages(function (prev) {
	                    return __spreadArray(__spreadArray([], prev, true), [
	                        {
	                            source: EMessageSource.BOT,
	                            message: clientConfig.randomQuestion,
	                            type: EMessageType.TEXT,
	                            url: "",
	                        },
	                    ], false);
	                });
	            }
	        }, 20000);
	        // if this effect run again, because `value` changed, we remove the previous timeout
	        return function () { return clearTimeout(timeout); };
	    }, [value]);
	    var handleUserMessage = function (e) { return __awaiter(void 0, void 0, void 0, function () {
	        var params, options, resJson, response_1, chatbotID, currentdate, datetime;
	        var _a;
	        return __generator(this, function (_b) {
	            switch (_b.label) {
	                case 0:
	                    e === null || e === void 0 ? void 0 : e.preventDefault();
	                    setLoading(true);
	                    setMessage("");
	                    if (message.trim() === "")
	                        return [2 /*return*/];
	                    setMessages(__spreadArray(__spreadArray([], messages, true), [{ source: EMessageSource.USER, message: message }], false));
	                    params = {
	                        question: message,
	                        botId: chatbotId,
	                        sessionId: sessionId,
	                        userId: userId,
	                    };
	                    options = {
	                        method: "POST",
	                        headers: { "Content-Type": "application/json" },
	                        body: JSON.stringify(params),
	                    };
	                    _b.label = 1;
	                case 1:
	                    _b.trys.push([1, 5, , 6]);
	                    return [4 /*yield*/, fetch(chatEndpoint, options)];
	                case 2:
	                    resJson = _b.sent();
	                    return [4 /*yield*/, resJson.json()];
	                case 3:
	                    response_1 = _b.sent();
	                    setMessages(function (prev) {
	                        var _a;
	                        return __spreadArray(__spreadArray([], prev, true), [
	                            {
	                                source: EMessageSource.BOT,
	                                message: response_1.answer,
	                                type: response_1.type === "image"
	                                    ? EMessageType.IMAGE
	                                    : response_1.type === "video"
	                                        ? EMessageType.VIDEO
	                                        : EMessageType.TEXT,
	                                url: (_a = response_1.url) !== null && _a !== void 0 ? _a : "",
	                            },
	                        ], false);
	                    });
	                    setValue(response_1.answer);
	                    setLoading(false);
	                    chatbotID = void 0;
	                    if ("chatbotId" in props) {
	                        chatbotID = props.chatbotId;
	                    }
	                    currentdate = new Date();
	                    datetime = currentdate.getDate() + "/"
	                        + (currentdate.getMonth() + 1) + "/"
	                        + currentdate.getFullYear() + " @ "
	                        + currentdate.getHours() + ":"
	                        + currentdate.getMinutes() + ":"
	                        + currentdate.getSeconds();
	                    return [4 /*yield*/, fetch("".concat(WHAT2STUDY_BACKEND_URL, "/saveUserMessage"), {
	                            method: "POST",
	                            headers: {
	                                "X-Parse-Application-Id": WHAT2STUDY_X_PARSE_APP_ID,
	                                "X-Parse-Master-Key": WHAT2STUDY_X_PARSE_MASTERKEY,
	                            },
	                            body: JSON.stringify({
	                                chatbotId: chatbotID,
	                                user: message,
	                                bot: response_1.answer,
	                                sessionID: (_a = localStorage.getItem(LOCALSTORAGE_SESSION_ID_KEY)) === null || _a === void 0 ? void 0 : _a.trim(),
	                                timestamp: datetime,
	                            }),
	                        })];
	                case 4:
	                    _b.sent();
	                    return [3 /*break*/, 6];
	                case 5:
	                    _b.sent();
	                    setMessages(function (prev) {
	                        return __spreadArray(__spreadArray([], prev, true), [
	                            {
	                                source: EMessageSource.BOT,
	                                message: "Something went wrong! Please try again.",
	                            },
	                        ], false);
	                    });
	                    setLoading(false);
	                    return [3 /*break*/, 6];
	                case 6: return [2 /*return*/];
	            }
	        });
	    }); };
	    var handleMessageFeedback = function (msg, feedback) { return __awaiter(void 0, void 0, void 0, function () {
	        var messagesWithFeedback, newMessages, currentdate, datetime, chatbotID;
	        var _a;
	        return __generator(this, function (_b) {
	            switch (_b.label) {
	                case 0:
	                    messagesWithFeedback = __spreadArray([], messages, true);
	                    newMessages = messagesWithFeedback.map(function (msgObj) {
	                        return msgObj.message == msg
	                            ? __assign$1(__assign$1({}, msgObj), { feedback: feedback }) : msgObj;
	                    });
	                    currentdate = new Date();
	                    datetime = currentdate.getDate() + "/"
	                        + (currentdate.getMonth() + 1) + "/"
	                        + currentdate.getFullYear() + " @ "
	                        + currentdate.getHours() + ":"
	                        + currentdate.getMinutes() + ":"
	                        + currentdate.getSeconds();
	                    setMessages(newMessages);
	                    if ("chatbotId" in props) {
	                        chatbotID = props.chatbotId;
	                    }
	                    return [4 /*yield*/, fetch("".concat(WHAT2STUDY_BACKEND_URL, "/saveFeedback"), {
	                            method: "POST",
	                            headers: {
	                                "X-Parse-Application-Id": WHAT2STUDY_X_PARSE_APP_ID,
	                                "X-Parse-Master-Key": WHAT2STUDY_X_PARSE_MASTERKEY,
	                            },
	                            body: JSON.stringify({
	                                chatbotId: chatbotID,
	                                messages: newMessages,
	                                sessionID: (_a = localStorage.getItem(LOCALSTORAGE_SESSION_ID_KEY)) === null || _a === void 0 ? void 0 : _a.trim(),
	                                timestamp: datetime,
	                                type: feedback
	                            }),
	                        })];
	                case 1:
	                    _b.sent();
	                    return [2 /*return*/];
	            }
	        });
	    }); };
	    var scrollToBottom = function () {
	        var _a;
	        (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
	    };
	    reactExports.useEffect(function () {
	        scrollToBottom();
	    }, [messages]);
	    return (jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [jsxRuntimeExports.jsxs("div", __assign$1({ className: "info-talktohuman" }, { children: [jsxRuntimeExports.jsx(IconButton, { className: "info-button", style: { backgroundColor: textBoxUser.textBoxUserColor }, icon: MdInfoOutline, onClick: function () { return setPopupItem(EPopupItem.BOT_INFO); }, "aria-label": "Info", title: "Info", iconColor: textBoxUser.textBoxUserFontColor }), jsxRuntimeExports.jsx("button", __assign$1({ className: "talk-to-human-btn", style: {
	                            backgroundColor: UIGroupB.UIGroupBUIBackground,
	                            color: UIGroupB.UIGroupBUIHighlight,
	                        }, onClick: function () { return setCurrentRoute(ERoute.TALK_TO_HUMAN); } }, { children: "Sprich mit uns" })), jsxRuntimeExports.jsx(IconButton, { className: "volume-button", icon: isBotVolumeOn ? IoMdVolumeHigh : IoMdVolumeOff, onClick: function () { return setIsBotVolumeOn(!isBotVolumeOn); }, "aria-label": "Volume", title: isBotVolumeOn ? "Mute" : "Play", style: { backgroundColor: UIGroupA.UIGroupAUIBackground }, iconColor: UIGroupA.UIGroupAUIHighlight })] })), jsxRuntimeExports.jsxs("div", __assign$1({ className: "chatContainer" }, { children: [messages.map(function (_a, index) {
	                        var message = _a.message, source = _a.source, feedback = _a.feedback, type = _a.type, url = _a.url;
	                        return (jsxRuntimeExports.jsxs("div", __assign$1({ className: "messageWrapper ".concat(source === EMessageSource.BOT
	                                ? "botMessageWrapper"
	                                : "userMessageWrapper") }, { children: [source === EMessageSource.BOT && (jsxRuntimeExports.jsx("div", __assign$1({ className: "bot-iconWrapper", style: { borderColor: UIGroupA.UIGroupAUIBackground } }, { children: jsxRuntimeExports.jsx("img", { src: chatbotProfileImage, alt: "bot", className: "bot-iconImg" }) }))), jsxRuntimeExports.jsxs("div", __assign$1({ className: "message ".concat(source === EMessageSource.BOT ? "botMessage" : "userMessage"), style: source === EMessageSource.BOT
	                                        ? {
	                                            backgroundColor: textBoxChatbotReply.textBoxChatbotReplyColor,
	                                            color: textBoxChatbotReply.textBoxChatbotReplyFontColor,
	                                            fontFamily: textBoxChatbotReply.textBoxChatboxReplyFontStyle,
	                                        }
	                                        : {
	                                            backgroundColor: textBoxUser.textBoxUserColor,
	                                            color: textBoxUser.textBoxUserFontColor,
	                                            fontFamily: textBoxUser.textBoxFontStyle,
	                                        } }, { children: [type === EMessageType.VIDEO ? (isYoutubeURL(url) ? (jsxRuntimeExports.jsx("iframe", { src: url, title: "YouTube video player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true, className: "bot-msg-ytvideo" })) : (jsxRuntimeExports.jsx("video", { src: url, className: "bot-msg-video", controls: true, disablePictureInPicture: false }))) : type === EMessageType.IMAGE ? (jsxRuntimeExports.jsx("img", { src: url, className: "bot-msg-img", alt: "img" })) : (jsxRuntimeExports.jsx(reactExports.Fragment, {})), message, source === EMessageSource.BOT && (jsxRuntimeExports.jsxs("div", __assign$1({ className: "bot-msg-actions-wrapper" }, { children: [jsxRuntimeExports.jsx("button", __assign$1({ title: "Like", className: "action-button", onClick: function () {
	                                                        if (feedback === true)
	                                                            return;
	                                                        handleMessageFeedback(message, typeof feedback !== "undefined" ? !feedback : true);
	                                                    }, style: { backgroundColor: UIGroupA.UIGroupAUIBackground } }, { children: feedback === true ? (jsxRuntimeExports.jsx(MdThumbUpAlt, { className: "action-icon", color: UIGroupA.UIGroupAUIHighlight })) : (jsxRuntimeExports.jsx(MdOutlineThumbUpOffAlt, { className: "action-icon", color: UIGroupA.UIGroupAUIHighlight })) })), jsxRuntimeExports.jsx("button", __assign$1({ title: "Dislike", className: "action-button", onClick: function () {
	                                                        if (feedback === false)
	                                                            return;
	                                                        handleMessageFeedback(message, typeof feedback !== "undefined" ? !feedback : false);
	                                                    }, style: { backgroundColor: UIGroupA.UIGroupAUIBackground } }, { children: feedback === false ? (jsxRuntimeExports.jsx(MdThumbDownAlt, { className: "action-icon", color: UIGroupA.UIGroupAUIHighlight })) : (jsxRuntimeExports.jsx(MdOutlineThumbDownOffAlt, { className: "action-icon", color: UIGroupA.UIGroupAUIHighlight })) })), jsxRuntimeExports.jsx("button", __assign$1({ title: "Regenrate Response", className: "action-button", onClick: console.log, style: { backgroundColor: UIGroupA.UIGroupAUIBackground } }, { children: jsxRuntimeExports.jsx(MdReplay, { className: "action-icon", color: UIGroupA.UIGroupAUIHighlight }) }))] })))] })), source === EMessageSource.USER && (jsxRuntimeExports.jsx("div", __assign$1({ className: "user-iconWrapper" }, { children: jsxRuntimeExports.jsx(RiUser6Fill, { className: "userIcon" }) })))] }), index));
	                    }), loading && (jsxRuntimeExports.jsxs("div", __assign$1({ className: "messageWrapper botMessageWrapper" }, { children: [jsxRuntimeExports.jsx("div", __assign$1({ className: "bot-iconWrapper", style: { borderColor: UIGroupA.UIGroupAUIBackground } }, { children: jsxRuntimeExports.jsx("img", { src: chatbotProfileImage, alt: "bot", className: "bot-iconImg" }) })), jsxRuntimeExports.jsx("div", __assign$1({ className: "typing-anim-wrapper" }, { children: jsxRuntimeExports.jsx("div", { className: "typing-dot-pulse" }) }))] }))), jsxRuntimeExports.jsx("div", { ref: messagesEndRef })] })), jsxRuntimeExports.jsxs("form", __assign$1({ className: "inputFormWrapper", onSubmit: handleUserMessage }, { children: [jsxRuntimeExports.jsx(IconButton, { icon: BsFillMicFill, onClick: console.log, className: "voice-input-button", style: { backgroundColor: UIGroupA.UIGroupAUIBackground }, iconColor: UIGroupA.UIGroupAUIHighlight }), jsxRuntimeExports.jsx("input", { className: "inputField ".concat(isInputFocused ? "inputFieldFocused" : ""), type: "text", value: message, onChange: function (e) { return setMessage(e.target.value); }, onFocus: function () { return setIsInputFocused(true); }, onBlur: function () { return setIsInputFocused(false); } }), jsxRuntimeExports.jsx("button", __assign$1({ type: "submit", className: "sendButton", style: {
	                            backgroundColor: UIGroupB.UIGroupBUIBackground,
	                        }, onClick: handleUserMessage }, { children: jsxRuntimeExports.jsx(IoSend, { className: "buttonIcon", color: UIGroupB.UIGroupBUIHighlight }) }))] }))] }));
	};

	var DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var TalkToHuman = function () {
	    var setCurrentRoute = useData().setCurrentRoute;
	    var _a = reactExports.useState(true), useSavedEmail = _a[0], setUseSavedEmail = _a[1];
	    var _b = reactExports.useState(""), phoneInput = _b[0], setPhoneInput = _b[1];
	    var _c = reactExports.useState({
	        day: "Sat",
	        time: "09:00",
	    }), preferredDayTime = _c[0], setPreferredDayTime = _c[1];
	    var _d = useTranslation("global"), t = _d[0]; _d[1];
	    return (jsxRuntimeExports.jsxs("div", __assign$1({ className: "talkToHuman-wrapper" }, { children: [jsxRuntimeExports.jsx("div", __assign$1({ className: "navbar" }, { children: jsxRuntimeExports.jsxs("button", __assign$1({ className: "navBackBtn", onClick: function () { return setCurrentRoute(ERoute.MAIN); } }, { children: [jsxRuntimeExports.jsx(IoChevronBack, { className: "navIcon" }), jsxRuntimeExports.jsx("span", __assign$1({ className: "navText" }, { children: t("talk2human.back") }))] })) })), jsxRuntimeExports.jsxs("div", __assign$1({ className: "contact-details-wrapper" }, { children: [jsxRuntimeExports.jsxs("a", __assign$1({ className: "contact-detail", href: "tel:+49 9086 4577209" }, { children: [jsxRuntimeExports.jsx("div", __assign$1({ className: "contact-icon-wrapper" }, { children: jsxRuntimeExports.jsx(IoIosCall, { className: "contact-icon" }) })), jsxRuntimeExports.jsx("span", __assign$1({ className: "contact-text" }, { children: "+49 9086 4577209" }))] })), jsxRuntimeExports.jsxs("a", __assign$1({ target: "_blank", className: "contact-detail contact-email", href: "mailto:registration@uni-siegen.de" }, { children: [jsxRuntimeExports.jsx("div", __assign$1({ className: "contact-icon-wrapper" }, { children: jsxRuntimeExports.jsx(MdEmail, { className: "contact-icon" }) })), jsxRuntimeExports.jsx("span", __assign$1({ className: "contact-text" }, { children: "registration@uni-siegen.de" }))] }))] })), jsxRuntimeExports.jsx("div", { className: "divider" }), jsxRuntimeExports.jsxs("div", __assign$1({ className: "tth-data-wrapper" }, { children: [jsxRuntimeExports.jsx("p", __assign$1({ className: "tth-info-text" }, { children: t("talk2human.write") })), jsxRuntimeExports.jsx(FloatingLabel$1, __assign$1({ controlId: "floatingTextarea", label: t("talk2human.message"), className: "tth-message" }, { children: jsxRuntimeExports.jsx(Form$1.Control, { as: "textarea", placeholder: t("talk2human.message"), style: { height: "90px" } }) })), jsxRuntimeExports.jsx(Form$1.Check, { name: "send-chat-details", "aria-label": "Send chat details", label: t("talk2human.send"), defaultChecked: true }), jsxRuntimeExports.jsxs("div", __assign$1({ className: "contact-email" }, { children: [jsxRuntimeExports.jsx("p", __assign$1({ className: "tth-info-text" }, { children: t("talk2human.please") })), jsxRuntimeExports.jsx(Form$1.Check, { type: "radio", name: "email-address", checked: useSavedEmail, onClick: function () { return setUseSavedEmail(true); }, label: jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [t("talk2human.use"), " ", jsxRuntimeExports.jsx("span", __assign$1({ className: "email-address-saved" }, { children: "somebody.nobody@example.com" }))] }) }), jsxRuntimeExports.jsx(Form$1.Check, { type: "radio", name: "email-address", checked: !useSavedEmail, onClick: function () { return setUseSavedEmail(false); }, label: t("talk2human.different") }), jsxRuntimeExports.jsx(Form$1.Control, { type: "text", placeholder: t("talk2human.email"), disabled: useSavedEmail })] })), jsxRuntimeExports.jsxs("div", __assign$1({ className: "contact-email" }, { children: [jsxRuntimeExports.jsx("p", __assign$1({ className: "tth-info-text" }, { children: t("talk2human.would") })), jsxRuntimeExports.jsx(Form$1.Control, { type: "tel", onChange: function (e) { return setPhoneInput(e.target.value); }, value: phoneInput, placeholder: t("talk2human.number") }), phoneInput.trim() !== "" && (jsxRuntimeExports.jsxs("div", __assign$1({ className: "day-time-input-wrapper" }, { children: [jsxRuntimeExports.jsx("p", __assign$1({ className: "tth-info-text" }, { children: t("talk2human.best") })), jsxRuntimeExports.jsx("div", __assign$1({ className: "day-wrapper" }, { children: DAYS.map(function (day) { return (jsxRuntimeExports.jsx("span", __assign$1({ className: "day-select ".concat(preferredDayTime.day === day ? "day-selected" : ""), onClick: function () {
	                                                return setPreferredDayTime(__assign$1(__assign$1({}, preferredDayTime), { day: day }));
	                                            } }, { children: day }))); }) })), jsxRuntimeExports.jsx(Form$1.Control, { type: "time", value: preferredDayTime.time, onChange: function (e) {
	                                            return setPreferredDayTime(__assign$1(__assign$1({}, preferredDayTime), { time: e.target.value }));
	                                        } })] })))] }))] }))] })));
	};

	var ChatContainer = function (props) {
	    var getScreenAsPerRoute = function (route) {
	        switch (route) {
	            case ERoute.INTRO:
	                return jsxRuntimeExports.jsx(IntroPage, {});
	            case ERoute.MAIN:
	                return jsxRuntimeExports.jsx(Main, __assign$1({}, props));
	            case ERoute.TALK_TO_HUMAN:
	                return jsxRuntimeExports.jsx(TalkToHuman, {});
	            default:
	                return jsxRuntimeExports.jsx(reactExports.Fragment, {});
	        }
	    };
	    var _a = useData(), isChatOpen = _a.isChatOpen, isMobileScreen = _a.isMobileScreen, setIsChatOpen = _a.setIsChatOpen, setPopupItem = _a.setPopupItem, currentRoute = _a.currentRoute, clientConfig = _a.clientConfig;
	    var _b = clientConfig.chatbotLook, chatbotHeader = _b.chatbotHeader, chatbotBackground = _b.chatbotBackground;
	    return (jsxRuntimeExports.jsxs(IFrame, __assign$1({ iframeType: isChatOpen ? IframeType.CHAT_CONTAINER_OPEN : IframeType.CHAT_CONTAINER_CLOSED }, { children: [jsxRuntimeExports.jsx(PopupScreen, {}), jsxRuntimeExports.jsxs("div", __assign$1({ className: "chatContainerWrapper", style: { backgroundColor: chatbotBackground.chatbotBackgroundColor } }, { children: [jsxRuntimeExports.jsxs("div", __assign$1({ className: "header-wrapper", style: { backgroundColor: chatbotHeader.chatbotHeaderBackgroundColor } }, { children: [jsxRuntimeExports.jsxs("div", __assign$1({ className: "header" }, { children: [jsxRuntimeExports.jsx(GiGraduateCap, { className: "header-icon", style: { color: chatbotHeader.chatbotHeaderIconFontColor } }), jsxRuntimeExports.jsx("h1", __assign$1({ className: "header-title", style: { color: chatbotHeader.chatbotHeaderIconFontColor } }, { children: "What2Study" }))] })), jsxRuntimeExports.jsxs("div", __assign$1({ className: "settings-wrapper" }, { children: [jsxRuntimeExports.jsx(IconButton, { icon: LuSettings2, onClick: function () { return setPopupItem(EPopupItem.FILTERS); }, "aria-label": "Filters", title: "Filters", iconColor: chatbotHeader.chatbotHeaderIconFontColor }), jsxRuntimeExports.jsx(IconButton, { icon: IoSettingsSharp, onClick: function () { return setPopupItem(EPopupItem.SETTINGS); }, "aria-label": "Settings", title: "Settings", iconColor: chatbotHeader.chatbotHeaderIconFontColor }), isMobileScreen && (jsxRuntimeExports.jsx(IconButton, { icon: IoClose, onClick: function () { return setIsChatOpen(false); }, "aria-label": "Close", title: "Close", iconColor: chatbotHeader.chatbotHeaderIconFontColor }))] }))] })), getScreenAsPerRoute(currentRoute)] }))] })));
	};

	// THIS FILE IS AUTO GENERATED
	function BiChevronDown (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(props);
	}

	var OpenChatButton = function (props) {
	    var icon = props.icon;
	    var _a = useData(), isChatOpen = _a.isChatOpen, setIsChatOpen = _a.setIsChatOpen, setPopupItem = _a.setPopupItem, clientConfig = _a.clientConfig;
	    var Icon = !isChatOpen ? icon : BiChevronDown;
	    var chatbotBubbleIcons = clientConfig.chatbotBubbleIcons, chatbotHeader = clientConfig.chatbotLook.chatbotHeader;
	    var handleOpenChatButtonClick = function () {
	        setIsChatOpen(!isChatOpen);
	        setPopupItem(EPopupItem.NONE);
	    };
	    return (jsxRuntimeExports.jsx(IFrame, __assign$1({ iframeType: IframeType.CHAT_OPEN_BUTTON }, { children: jsxRuntimeExports.jsx("button", __assign$1({ 
	            // inline styles for button as loading stylesheets takes time on browser (causes to show button without styles)
	            style: __assign$1({ width: "48px", height: "48px", margin: "3px", boxShadow: "0px 2px 3px 0px #9b9b9b", backgroundColor: "".concat(chatbotHeader.chatbotHeaderBackgroundColor), border: "none", borderRadius: "50%", cursor: "pointer" }, (isChatOpen
	                ? {
	                    backgroundColor: "#f0f0f0",
	                }
	                : {})), onClick: handleOpenChatButtonClick }, { children: !isChatOpen ? (jsxRuntimeExports.jsx("img", { src: chatbotBubbleIcons, alt: "What2Study", style: { width: "22px" } })) : (jsxRuntimeExports.jsx(Icon, { style: {
	                    fontSize: "22px",
	                    color: "#000000",
	                } })) })) })));
	};

	var WHAT2STUDY_BACKEND_URL = "http://localhost:1339/what2study/parse/functions";
	var WHAT2STUDY_X_PARSE_APP_ID = "what2study";
	var WHAT2STUDY_X_PARSE_MASTERKEY = "what2studyMaster";
	var ChatClient = function (props) {
	    var _a = useData(), saveClientConfigurations = _a.saveClientConfigurations, isClientConfigFetched = _a.isClientConfigFetched;
	    var getChatClientConfiguration = function () { return __awaiter(void 0, void 0, void 0, function () {
	        var resJson, response;
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    if (!("chatbotId" in props && "accessToken" in props)) return [3 /*break*/, 4];
	                    return [4 /*yield*/, fetch("".concat(WHAT2STUDY_BACKEND_URL, "/getChatbotSettings"), {
	                            method: "POST",
	                            headers: {
	                                "X-Parse-Application-Id": WHAT2STUDY_X_PARSE_APP_ID,
	                                "X-Parse-Master-Key": WHAT2STUDY_X_PARSE_MASTERKEY,
	                            },
	                            body: JSON.stringify({
	                                accessToken: props.accessToken,
	                                chatbotId: props.chatbotId,
	                            }),
	                        })];
	                case 1:
	                    resJson = _a.sent();
	                    return [4 /*yield*/, resJson.json()];
	                case 2:
	                    response = _a.sent();
	                    return [4 /*yield*/, saveClientConfigurations(response.result)];
	                case 3:
	                    _a.sent();
	                    return [2 /*return*/];
	                case 4: return [4 /*yield*/, saveClientConfigurations(props)];
	                case 5:
	                    _a.sent();
	                    return [2 /*return*/];
	            }
	        });
	    }); };
	    var getClientConfigWithThrottle = _.throttle(getChatClientConfiguration, 1000);
	    reactExports.useEffect(function () {
	        // TO USE CHAT CLIENT WITH BOT ID AND ACCESS TOKEN
	        getClientConfigWithThrottle();
	    }, [props]);
	    if (isClientConfigFetched)
	        return (jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [jsxRuntimeExports.jsx(ChatContainer, __assign$1({}, props)), jsxRuntimeExports.jsx(OpenChatButton, { icon: BsChatQuoteFill })] }));
	    return jsxRuntimeExports.jsx(reactExports.Fragment, {});
	};

	const consoleLogger = {
	  type: 'logger',
	  log(args) {
	    this.output('log', args);
	  },
	  warn(args) {
	    this.output('warn', args);
	  },
	  error(args) {
	    this.output('error', args);
	  },
	  output(type, args) {
	    if (console && console[type]) console[type].apply(console, args);
	  }
	};
	class Logger {
	  constructor(concreteLogger) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    this.init(concreteLogger, options);
	  }
	  init(concreteLogger) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    this.prefix = options.prefix || 'i18next:';
	    this.logger = concreteLogger || consoleLogger;
	    this.options = options;
	    this.debug = options.debug;
	  }
	  log() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    return this.forward(args, 'log', '', true);
	  }
	  warn() {
	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	    return this.forward(args, 'warn', '', true);
	  }
	  error() {
	    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	    return this.forward(args, 'error', '');
	  }
	  deprecate() {
	    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	      args[_key4] = arguments[_key4];
	    }
	    return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
	  }
	  forward(args, lvl, prefix, debugOnly) {
	    if (debugOnly && !this.debug) return null;
	    if (typeof args[0] === 'string') args[0] = `${prefix}${this.prefix} ${args[0]}`;
	    return this.logger[lvl](args);
	  }
	  create(moduleName) {
	    return new Logger(this.logger, {
	      ...{
	        prefix: `${this.prefix}:${moduleName}:`
	      },
	      ...this.options
	    });
	  }
	  clone(options) {
	    options = options || this.options;
	    options.prefix = options.prefix || this.prefix;
	    return new Logger(this.logger, options);
	  }
	}
	var baseLogger = new Logger();

	class EventEmitter {
	  constructor() {
	    this.observers = {};
	  }
	  on(events, listener) {
	    events.split(' ').forEach(event => {
	      if (!this.observers[event]) this.observers[event] = new Map();
	      const numListeners = this.observers[event].get(listener) || 0;
	      this.observers[event].set(listener, numListeners + 1);
	    });
	    return this;
	  }
	  off(event, listener) {
	    if (!this.observers[event]) return;
	    if (!listener) {
	      delete this.observers[event];
	      return;
	    }
	    this.observers[event].delete(listener);
	  }
	  emit(event) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	    if (this.observers[event]) {
	      const cloned = Array.from(this.observers[event].entries());
	      cloned.forEach(_ref => {
	        let [observer, numTimesAdded] = _ref;
	        for (let i = 0; i < numTimesAdded; i++) {
	          observer(...args);
	        }
	      });
	    }
	    if (this.observers['*']) {
	      const cloned = Array.from(this.observers['*'].entries());
	      cloned.forEach(_ref2 => {
	        let [observer, numTimesAdded] = _ref2;
	        for (let i = 0; i < numTimesAdded; i++) {
	          observer.apply(observer, [event, ...args]);
	        }
	      });
	    }
	  }
	}

	function defer() {
	  let res;
	  let rej;
	  const promise = new Promise((resolve, reject) => {
	    res = resolve;
	    rej = reject;
	  });
	  promise.resolve = res;
	  promise.reject = rej;
	  return promise;
	}
	function makeString(object) {
	  if (object == null) return '';
	  return '' + object;
	}
	function copy(a, s, t) {
	  a.forEach(m => {
	    if (s[m]) t[m] = s[m];
	  });
	}
	const lastOfPathSeparatorRegExp = /###/g;
	function getLastOfPath(object, path, Empty) {
	  function cleanKey(key) {
	    return key && key.indexOf('###') > -1 ? key.replace(lastOfPathSeparatorRegExp, '.') : key;
	  }
	  function canNotTraverseDeeper() {
	    return !object || typeof object === 'string';
	  }
	  const stack = typeof path !== 'string' ? path : path.split('.');
	  let stackIndex = 0;
	  while (stackIndex < stack.length - 1) {
	    if (canNotTraverseDeeper()) return {};
	    const key = cleanKey(stack[stackIndex]);
	    if (!object[key] && Empty) object[key] = new Empty();
	    if (Object.prototype.hasOwnProperty.call(object, key)) {
	      object = object[key];
	    } else {
	      object = {};
	    }
	    ++stackIndex;
	  }
	  if (canNotTraverseDeeper()) return {};
	  return {
	    obj: object,
	    k: cleanKey(stack[stackIndex])
	  };
	}
	function setPath(object, path, newValue) {
	  const {
	    obj,
	    k
	  } = getLastOfPath(object, path, Object);
	  if (obj !== undefined || path.length === 1) {
	    obj[k] = newValue;
	    return;
	  }
	  let e = path[path.length - 1];
	  let p = path.slice(0, path.length - 1);
	  let last = getLastOfPath(object, p, Object);
	  while (last.obj === undefined && p.length) {
	    e = `${p[p.length - 1]}.${e}`;
	    p = p.slice(0, p.length - 1);
	    last = getLastOfPath(object, p, Object);
	    if (last && last.obj && typeof last.obj[`${last.k}.${e}`] !== 'undefined') {
	      last.obj = undefined;
	    }
	  }
	  last.obj[`${last.k}.${e}`] = newValue;
	}
	function pushPath(object, path, newValue, concat) {
	  const {
	    obj,
	    k
	  } = getLastOfPath(object, path, Object);
	  obj[k] = obj[k] || [];
	  if (concat) obj[k] = obj[k].concat(newValue);
	  if (!concat) obj[k].push(newValue);
	}
	function getPath(object, path) {
	  const {
	    obj,
	    k
	  } = getLastOfPath(object, path);
	  if (!obj) return undefined;
	  return obj[k];
	}
	function getPathWithDefaults(data, defaultData, key) {
	  const value = getPath(data, key);
	  if (value !== undefined) {
	    return value;
	  }
	  return getPath(defaultData, key);
	}
	function deepExtend(target, source, overwrite) {
	  for (const prop in source) {
	    if (prop !== '__proto__' && prop !== 'constructor') {
	      if (prop in target) {
	        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
	          if (overwrite) target[prop] = source[prop];
	        } else {
	          deepExtend(target[prop], source[prop], overwrite);
	        }
	      } else {
	        target[prop] = source[prop];
	      }
	    }
	  }
	  return target;
	}
	function regexEscape(str) {
	  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
	}
	var _entityMap = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#39;',
	  '/': '&#x2F;'
	};
	function escape(data) {
	  if (typeof data === 'string') {
	    return data.replace(/[&<>"'\/]/g, s => _entityMap[s]);
	  }
	  return data;
	}
	class RegExpCache {
	  constructor(capacity) {
	    this.capacity = capacity;
	    this.regExpMap = new Map();
	    this.regExpQueue = [];
	  }
	  getRegExp(pattern) {
	    const regExpFromCache = this.regExpMap.get(pattern);
	    if (regExpFromCache !== undefined) {
	      return regExpFromCache;
	    }
	    const regExpNew = new RegExp(pattern);
	    if (this.regExpQueue.length === this.capacity) {
	      this.regExpMap.delete(this.regExpQueue.shift());
	    }
	    this.regExpMap.set(pattern, regExpNew);
	    this.regExpQueue.push(pattern);
	    return regExpNew;
	  }
	}
	const chars = [' ', ',', '?', '!', ';'];
	const looksLikeObjectPathRegExpCache = new RegExpCache(20);
	function looksLikeObjectPath(key, nsSeparator, keySeparator) {
	  nsSeparator = nsSeparator || '';
	  keySeparator = keySeparator || '';
	  const possibleChars = chars.filter(c => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
	  if (possibleChars.length === 0) return true;
	  const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map(c => c === '?' ? '\\?' : c).join('|')})`);
	  let matched = !r.test(key);
	  if (!matched) {
	    const ki = key.indexOf(keySeparator);
	    if (ki > 0 && !r.test(key.substring(0, ki))) {
	      matched = true;
	    }
	  }
	  return matched;
	}
	function deepFind(obj, path) {
	  let keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
	  if (!obj) return undefined;
	  if (obj[path]) return obj[path];
	  const tokens = path.split(keySeparator);
	  let current = obj;
	  for (let i = 0; i < tokens.length;) {
	    if (!current || typeof current !== 'object') {
	      return undefined;
	    }
	    let next;
	    let nextPath = '';
	    for (let j = i; j < tokens.length; ++j) {
	      if (j !== i) {
	        nextPath += keySeparator;
	      }
	      nextPath += tokens[j];
	      next = current[nextPath];
	      if (next !== undefined) {
	        if (['string', 'number', 'boolean'].indexOf(typeof next) > -1 && j < tokens.length - 1) {
	          continue;
	        }
	        i += j - i + 1;
	        break;
	      }
	    }
	    current = next;
	  }
	  return current;
	}
	function getCleanedCode(code) {
	  if (code && code.indexOf('_') > 0) return code.replace('_', '-');
	  return code;
	}

	class ResourceStore extends EventEmitter {
	  constructor(data) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	      ns: ['translation'],
	      defaultNS: 'translation'
	    };
	    super();
	    this.data = data || {};
	    this.options = options;
	    if (this.options.keySeparator === undefined) {
	      this.options.keySeparator = '.';
	    }
	    if (this.options.ignoreJSONStructure === undefined) {
	      this.options.ignoreJSONStructure = true;
	    }
	  }
	  addNamespaces(ns) {
	    if (this.options.ns.indexOf(ns) < 0) {
	      this.options.ns.push(ns);
	    }
	  }
	  removeNamespaces(ns) {
	    const index = this.options.ns.indexOf(ns);
	    if (index > -1) {
	      this.options.ns.splice(index, 1);
	    }
	  }
	  getResource(lng, ns, key) {
	    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
	    const ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
	    let path;
	    if (lng.indexOf('.') > -1) {
	      path = lng.split('.');
	    } else {
	      path = [lng, ns];
	      if (key) {
	        if (Array.isArray(key)) {
	          path.push(...key);
	        } else if (typeof key === 'string' && keySeparator) {
	          path.push(...key.split(keySeparator));
	        } else {
	          path.push(key);
	        }
	      }
	    }
	    const result = getPath(this.data, path);
	    if (!result && !ns && !key && lng.indexOf('.') > -1) {
	      lng = path[0];
	      ns = path[1];
	      key = path.slice(2).join('.');
	    }
	    if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
	    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
	  }
	  addResource(lng, ns, key, value) {
	    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
	      silent: false
	    };
	    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
	    let path = [lng, ns];
	    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
	    if (lng.indexOf('.') > -1) {
	      path = lng.split('.');
	      value = ns;
	      ns = path[1];
	    }
	    this.addNamespaces(ns);
	    setPath(this.data, path, value);
	    if (!options.silent) this.emit('added', lng, ns, key, value);
	  }
	  addResources(lng, ns, resources) {
	    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
	      silent: false
	    };
	    for (const m in resources) {
	      if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
	        silent: true
	      });
	    }
	    if (!options.silent) this.emit('added', lng, ns, resources);
	  }
	  addResourceBundle(lng, ns, resources, deep, overwrite) {
	    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
	      silent: false,
	      skipCopy: false
	    };
	    let path = [lng, ns];
	    if (lng.indexOf('.') > -1) {
	      path = lng.split('.');
	      deep = resources;
	      resources = ns;
	      ns = path[1];
	    }
	    this.addNamespaces(ns);
	    let pack = getPath(this.data, path) || {};
	    if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
	    if (deep) {
	      deepExtend(pack, resources, overwrite);
	    } else {
	      pack = {
	        ...pack,
	        ...resources
	      };
	    }
	    setPath(this.data, path, pack);
	    if (!options.silent) this.emit('added', lng, ns, resources);
	  }
	  removeResourceBundle(lng, ns) {
	    if (this.hasResourceBundle(lng, ns)) {
	      delete this.data[lng][ns];
	    }
	    this.removeNamespaces(ns);
	    this.emit('removed', lng, ns);
	  }
	  hasResourceBundle(lng, ns) {
	    return this.getResource(lng, ns) !== undefined;
	  }
	  getResourceBundle(lng, ns) {
	    if (!ns) ns = this.options.defaultNS;
	    if (this.options.compatibilityAPI === 'v1') return {
	      ...{},
	      ...this.getResource(lng, ns)
	    };
	    return this.getResource(lng, ns);
	  }
	  getDataByLanguage(lng) {
	    return this.data[lng];
	  }
	  hasLanguageSomeTranslations(lng) {
	    const data = this.getDataByLanguage(lng);
	    const n = data && Object.keys(data) || [];
	    return !!n.find(v => data[v] && Object.keys(data[v]).length > 0);
	  }
	  toJSON() {
	    return this.data;
	  }
	}

	var postProcessor = {
	  processors: {},
	  addPostProcessor(module) {
	    this.processors[module.name] = module;
	  },
	  handle(processors, value, key, options, translator) {
	    processors.forEach(processor => {
	      if (this.processors[processor]) value = this.processors[processor].process(value, key, options, translator);
	    });
	    return value;
	  }
	};

	const checkedLoadedFor = {};
	class Translator extends EventEmitter {
	  constructor(services) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    super();
	    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, this);
	    this.options = options;
	    if (this.options.keySeparator === undefined) {
	      this.options.keySeparator = '.';
	    }
	    this.logger = baseLogger.create('translator');
	  }
	  changeLanguage(lng) {
	    if (lng) this.language = lng;
	  }
	  exists(key) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	      interpolation: {}
	    };
	    if (key === undefined || key === null) {
	      return false;
	    }
	    const resolved = this.resolve(key, options);
	    return resolved && resolved.res !== undefined;
	  }
	  extractFromKey(key, options) {
	    let nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
	    if (nsSeparator === undefined) nsSeparator = ':';
	    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
	    let namespaces = options.ns || this.options.defaultNS || [];
	    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
	    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
	    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
	      const m = key.match(this.interpolator.nestingRegexp);
	      if (m && m.length > 0) {
	        return {
	          key,
	          namespaces
	        };
	      }
	      const parts = key.split(nsSeparator);
	      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
	      key = parts.join(keySeparator);
	    }
	    if (typeof namespaces === 'string') namespaces = [namespaces];
	    return {
	      key,
	      namespaces
	    };
	  }
	  translate(keys, options, lastKey) {
	    if (typeof options !== 'object' && this.options.overloadTranslationOptionHandler) {
	      options = this.options.overloadTranslationOptionHandler(arguments);
	    }
	    if (typeof options === 'object') options = {
	      ...options
	    };
	    if (!options) options = {};
	    if (keys === undefined || keys === null) return '';
	    if (!Array.isArray(keys)) keys = [String(keys)];
	    const returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
	    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
	    const {
	      key,
	      namespaces
	    } = this.extractFromKey(keys[keys.length - 1], options);
	    const namespace = namespaces[namespaces.length - 1];
	    const lng = options.lng || this.language;
	    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
	    if (lng && lng.toLowerCase() === 'cimode') {
	      if (appendNamespaceToCIMode) {
	        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
	        if (returnDetails) {
	          return {
	            res: `${namespace}${nsSeparator}${key}`,
	            usedKey: key,
	            exactUsedKey: key,
	            usedLng: lng,
	            usedNS: namespace,
	            usedParams: this.getUsedParamsDetails(options)
	          };
	        }
	        return `${namespace}${nsSeparator}${key}`;
	      }
	      if (returnDetails) {
	        return {
	          res: key,
	          usedKey: key,
	          exactUsedKey: key,
	          usedLng: lng,
	          usedNS: namespace,
	          usedParams: this.getUsedParamsDetails(options)
	        };
	      }
	      return key;
	    }
	    const resolved = this.resolve(keys, options);
	    let res = resolved && resolved.res;
	    const resUsedKey = resolved && resolved.usedKey || key;
	    const resExactUsedKey = resolved && resolved.exactUsedKey || key;
	    const resType = Object.prototype.toString.apply(res);
	    const noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
	    const joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
	    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
	    const handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';
	    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
	      if (!options.returnObjects && !this.options.returnObjects) {
	        if (!this.options.returnedObjectHandler) {
	          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
	        }
	        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
	          ...options,
	          ns: namespaces
	        }) : `key '${key} (${this.language})' returned an object instead of string.`;
	        if (returnDetails) {
	          resolved.res = r;
	          resolved.usedParams = this.getUsedParamsDetails(options);
	          return resolved;
	        }
	        return r;
	      }
	      if (keySeparator) {
	        const resTypeIsArray = resType === '[object Array]';
	        const copy = resTypeIsArray ? [] : {};
	        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
	        for (const m in res) {
	          if (Object.prototype.hasOwnProperty.call(res, m)) {
	            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
	            copy[m] = this.translate(deepKey, {
	              ...options,
	              ...{
	                joinArrays: false,
	                ns: namespaces
	              }
	            });
	            if (copy[m] === deepKey) copy[m] = res[m];
	          }
	        }
	        res = copy;
	      }
	    } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
	      res = res.join(joinArrays);
	      if (res) res = this.extendTranslation(res, keys, options, lastKey);
	    } else {
	      let usedDefault = false;
	      let usedKey = false;
	      const needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
	      const hasDefaultValue = Translator.hasDefaultValue(options);
	      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
	      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
	        ordinal: false
	      }) : '';
	      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
	      const defaultValue = needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] || options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
	      if (!this.isValidLookup(res) && hasDefaultValue) {
	        usedDefault = true;
	        res = defaultValue;
	      }
	      if (!this.isValidLookup(res)) {
	        usedKey = true;
	        res = key;
	      }
	      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
	      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
	      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
	      if (usedKey || usedDefault || updateMissing) {
	        this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
	        if (keySeparator) {
	          const fk = this.resolve(key, {
	            ...options,
	            keySeparator: false
	          });
	          if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
	        }
	        let lngs = [];
	        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
	        if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
	          for (let i = 0; i < fallbackLngs.length; i++) {
	            lngs.push(fallbackLngs[i]);
	          }
	        } else if (this.options.saveMissingTo === 'all') {
	          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
	        } else {
	          lngs.push(options.lng || this.language);
	        }
	        const send = (l, k, specificDefaultValue) => {
	          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
	          if (this.options.missingKeyHandler) {
	            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
	          } else if (this.backendConnector && this.backendConnector.saveMissing) {
	            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
	          }
	          this.emit('missingKey', l, namespace, k, res);
	        };
	        if (this.options.saveMissing) {
	          if (this.options.saveMissingPlurals && needsPluralHandling) {
	            lngs.forEach(language => {
	              const suffixes = this.pluralResolver.getSuffixes(language, options);
	              if (needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
	                suffixes.push(`${this.options.pluralSeparator}zero`);
	              }
	              suffixes.forEach(suffix => {
	                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
	              });
	            });
	          } else {
	            send(lngs, key, defaultValue);
	          }
	        }
	      }
	      res = this.extendTranslation(res, keys, options, resolved, lastKey);
	      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}:${key}`;
	      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
	        if (this.options.compatibilityAPI !== 'v1') {
	          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : undefined);
	        } else {
	          res = this.options.parseMissingKeyHandler(res);
	        }
	      }
	    }
	    if (returnDetails) {
	      resolved.res = res;
	      resolved.usedParams = this.getUsedParamsDetails(options);
	      return resolved;
	    }
	    return res;
	  }
	  extendTranslation(res, key, options, resolved, lastKey) {
	    var _this = this;
	    if (this.i18nFormat && this.i18nFormat.parse) {
	      res = this.i18nFormat.parse(res, {
	        ...this.options.interpolation.defaultVariables,
	        ...options
	      }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
	        resolved
	      });
	    } else if (!options.skipInterpolation) {
	      if (options.interpolation) this.interpolator.init({
	        ...options,
	        ...{
	          interpolation: {
	            ...this.options.interpolation,
	            ...options.interpolation
	          }
	        }
	      });
	      const skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
	      let nestBef;
	      if (skipOnVariables) {
	        const nb = res.match(this.interpolator.nestingRegexp);
	        nestBef = nb && nb.length;
	      }
	      let data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
	      if (this.options.interpolation.defaultVariables) data = {
	        ...this.options.interpolation.defaultVariables,
	        ...data
	      };
	      res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
	      if (skipOnVariables) {
	        const na = res.match(this.interpolator.nestingRegexp);
	        const nestAft = na && na.length;
	        if (nestBef < nestAft) options.nest = false;
	      }
	      if (!options.lng && this.options.compatibilityAPI !== 'v1' && resolved && resolved.res) options.lng = resolved.usedLng;
	      if (options.nest !== false) res = this.interpolator.nest(res, function () {
	        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	        if (lastKey && lastKey[0] === args[0] && !options.context) {
	          _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
	          return null;
	        }
	        return _this.translate(...args, key);
	      }, options);
	      if (options.interpolation) this.interpolator.reset();
	    }
	    const postProcess = options.postProcess || this.options.postProcess;
	    const postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;
	    if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
	      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
	        i18nResolved: {
	          ...resolved,
	          usedParams: this.getUsedParamsDetails(options)
	        },
	        ...options
	      } : options, this);
	    }
	    return res;
	  }
	  resolve(keys) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    let found;
	    let usedKey;
	    let exactUsedKey;
	    let usedLng;
	    let usedNS;
	    if (typeof keys === 'string') keys = [keys];
	    keys.forEach(k => {
	      if (this.isValidLookup(found)) return;
	      const extracted = this.extractFromKey(k, options);
	      const key = extracted.key;
	      usedKey = key;
	      let namespaces = extracted.namespaces;
	      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
	      const needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
	      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
	      const needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
	      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
	      namespaces.forEach(ns => {
	        if (this.isValidLookup(found)) return;
	        usedNS = ns;
	        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
	          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
	          this.logger.warn(`key "${usedKey}" for languages "${codes.join(', ')}" won't get resolved as namespace "${usedNS}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
	        }
	        codes.forEach(code => {
	          if (this.isValidLookup(found)) return;
	          usedLng = code;
	          const finalKeys = [key];
	          if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
	            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
	          } else {
	            let pluralSuffix;
	            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
	            const zeroSuffix = `${this.options.pluralSeparator}zero`;
	            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
	            if (needsPluralHandling) {
	              finalKeys.push(key + pluralSuffix);
	              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
	                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
	              }
	              if (needsZeroSuffixLookup) {
	                finalKeys.push(key + zeroSuffix);
	              }
	            }
	            if (needsContextHandling) {
	              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
	              finalKeys.push(contextKey);
	              if (needsPluralHandling) {
	                finalKeys.push(contextKey + pluralSuffix);
	                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
	                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
	                }
	                if (needsZeroSuffixLookup) {
	                  finalKeys.push(contextKey + zeroSuffix);
	                }
	              }
	            }
	          }
	          let possibleKey;
	          while (possibleKey = finalKeys.pop()) {
	            if (!this.isValidLookup(found)) {
	              exactUsedKey = possibleKey;
	              found = this.getResource(code, ns, possibleKey, options);
	            }
	          }
	        });
	      });
	    });
	    return {
	      res: found,
	      usedKey,
	      exactUsedKey,
	      usedLng,
	      usedNS
	    };
	  }
	  isValidLookup(res) {
	    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
	  }
	  getResource(code, ns, key) {
	    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
	    return this.resourceStore.getResource(code, ns, key, options);
	  }
	  getUsedParamsDetails() {
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    const optionsKeys = ['defaultValue', 'ordinal', 'context', 'replace', 'lng', 'lngs', 'fallbackLng', 'ns', 'keySeparator', 'nsSeparator', 'returnObjects', 'returnDetails', 'joinArrays', 'postProcess', 'interpolation'];
	    const useOptionsReplaceForData = options.replace && typeof options.replace !== 'string';
	    let data = useOptionsReplaceForData ? options.replace : options;
	    if (useOptionsReplaceForData && typeof options.count !== 'undefined') {
	      data.count = options.count;
	    }
	    if (this.options.interpolation.defaultVariables) {
	      data = {
	        ...this.options.interpolation.defaultVariables,
	        ...data
	      };
	    }
	    if (!useOptionsReplaceForData) {
	      data = {
	        ...data
	      };
	      for (const key of optionsKeys) {
	        delete data[key];
	      }
	    }
	    return data;
	  }
	  static hasDefaultValue(options) {
	    const prefix = 'defaultValue';
	    for (const option in options) {
	      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
	        return true;
	      }
	    }
	    return false;
	  }
	}

	function capitalize(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}
	class LanguageUtil {
	  constructor(options) {
	    this.options = options;
	    this.supportedLngs = this.options.supportedLngs || false;
	    this.logger = baseLogger.create('languageUtils');
	  }
	  getScriptPartFromCode(code) {
	    code = getCleanedCode(code);
	    if (!code || code.indexOf('-') < 0) return null;
	    const p = code.split('-');
	    if (p.length === 2) return null;
	    p.pop();
	    if (p[p.length - 1].toLowerCase() === 'x') return null;
	    return this.formatLanguageCode(p.join('-'));
	  }
	  getLanguagePartFromCode(code) {
	    code = getCleanedCode(code);
	    if (!code || code.indexOf('-') < 0) return code;
	    const p = code.split('-');
	    return this.formatLanguageCode(p[0]);
	  }
	  formatLanguageCode(code) {
	    if (typeof code === 'string' && code.indexOf('-') > -1) {
	      const specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
	      let p = code.split('-');
	      if (this.options.lowerCaseLng) {
	        p = p.map(part => part.toLowerCase());
	      } else if (p.length === 2) {
	        p[0] = p[0].toLowerCase();
	        p[1] = p[1].toUpperCase();
	        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
	      } else if (p.length === 3) {
	        p[0] = p[0].toLowerCase();
	        if (p[1].length === 2) p[1] = p[1].toUpperCase();
	        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
	        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
	        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
	      }
	      return p.join('-');
	    }
	    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
	  }
	  isSupportedCode(code) {
	    if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
	      code = this.getLanguagePartFromCode(code);
	    }
	    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
	  }
	  getBestMatchFromCodes(codes) {
	    if (!codes) return null;
	    let found;
	    codes.forEach(code => {
	      if (found) return;
	      const cleanedLng = this.formatLanguageCode(code);
	      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
	    });
	    if (!found && this.options.supportedLngs) {
	      codes.forEach(code => {
	        if (found) return;
	        const lngOnly = this.getLanguagePartFromCode(code);
	        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
	        found = this.options.supportedLngs.find(supportedLng => {
	          if (supportedLng === lngOnly) return supportedLng;
	          if (supportedLng.indexOf('-') < 0 && lngOnly.indexOf('-') < 0) return;
	          if (supportedLng.indexOf('-') > 0 && lngOnly.indexOf('-') < 0 && supportedLng.substring(0, supportedLng.indexOf('-')) === lngOnly) return supportedLng;
	          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
	        });
	      });
	    }
	    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
	    return found;
	  }
	  getFallbackCodes(fallbacks, code) {
	    if (!fallbacks) return [];
	    if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
	    if (typeof fallbacks === 'string') fallbacks = [fallbacks];
	    if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
	    if (!code) return fallbacks.default || [];
	    let found = fallbacks[code];
	    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
	    if (!found) found = fallbacks[this.formatLanguageCode(code)];
	    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
	    if (!found) found = fallbacks.default;
	    return found || [];
	  }
	  toResolveHierarchy(code, fallbackCode) {
	    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
	    const codes = [];
	    const addCode = c => {
	      if (!c) return;
	      if (this.isSupportedCode(c)) {
	        codes.push(c);
	      } else {
	        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
	      }
	    };
	    if (typeof code === 'string' && (code.indexOf('-') > -1 || code.indexOf('_') > -1)) {
	      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
	      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
	      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
	    } else if (typeof code === 'string') {
	      addCode(this.formatLanguageCode(code));
	    }
	    fallbackCodes.forEach(fc => {
	      if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
	    });
	    return codes;
	  }
	}

	let sets = [{
	  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
	  nr: [1, 2],
	  fc: 1
	}, {
	  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
	  nr: [1, 2],
	  fc: 2
	}, {
	  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
	  nr: [1],
	  fc: 3
	}, {
	  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
	  nr: [1, 2, 5],
	  fc: 4
	}, {
	  lngs: ['ar'],
	  nr: [0, 1, 2, 3, 11, 100],
	  fc: 5
	}, {
	  lngs: ['cs', 'sk'],
	  nr: [1, 2, 5],
	  fc: 6
	}, {
	  lngs: ['csb', 'pl'],
	  nr: [1, 2, 5],
	  fc: 7
	}, {
	  lngs: ['cy'],
	  nr: [1, 2, 3, 8],
	  fc: 8
	}, {
	  lngs: ['fr'],
	  nr: [1, 2],
	  fc: 9
	}, {
	  lngs: ['ga'],
	  nr: [1, 2, 3, 7, 11],
	  fc: 10
	}, {
	  lngs: ['gd'],
	  nr: [1, 2, 3, 20],
	  fc: 11
	}, {
	  lngs: ['is'],
	  nr: [1, 2],
	  fc: 12
	}, {
	  lngs: ['jv'],
	  nr: [0, 1],
	  fc: 13
	}, {
	  lngs: ['kw'],
	  nr: [1, 2, 3, 4],
	  fc: 14
	}, {
	  lngs: ['lt'],
	  nr: [1, 2, 10],
	  fc: 15
	}, {
	  lngs: ['lv'],
	  nr: [1, 2, 0],
	  fc: 16
	}, {
	  lngs: ['mk'],
	  nr: [1, 2],
	  fc: 17
	}, {
	  lngs: ['mnk'],
	  nr: [0, 1, 2],
	  fc: 18
	}, {
	  lngs: ['mt'],
	  nr: [1, 2, 11, 20],
	  fc: 19
	}, {
	  lngs: ['or'],
	  nr: [2, 1],
	  fc: 2
	}, {
	  lngs: ['ro'],
	  nr: [1, 2, 20],
	  fc: 20
	}, {
	  lngs: ['sl'],
	  nr: [5, 1, 2, 3],
	  fc: 21
	}, {
	  lngs: ['he', 'iw'],
	  nr: [1, 2, 20, 21],
	  fc: 22
	}];
	let _rulesPluralsTypes = {
	  1: function (n) {
	    return Number(n > 1);
	  },
	  2: function (n) {
	    return Number(n != 1);
	  },
	  3: function (n) {
	    return 0;
	  },
	  4: function (n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  5: function (n) {
	    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
	  },
	  6: function (n) {
	    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
	  },
	  7: function (n) {
	    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  8: function (n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
	  },
	  9: function (n) {
	    return Number(n >= 2);
	  },
	  10: function (n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
	  },
	  11: function (n) {
	    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
	  },
	  12: function (n) {
	    return Number(n % 10 != 1 || n % 100 == 11);
	  },
	  13: function (n) {
	    return Number(n !== 0);
	  },
	  14: function (n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
	  },
	  15: function (n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  16: function (n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
	  },
	  17: function (n) {
	    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
	  },
	  18: function (n) {
	    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
	  },
	  19: function (n) {
	    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
	  },
	  20: function (n) {
	    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
	  },
	  21: function (n) {
	    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
	  },
	  22: function (n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
	  }
	};
	const nonIntlVersions = ['v1', 'v2', 'v3'];
	const intlVersions = ['v4'];
	const suffixesOrder = {
	  zero: 0,
	  one: 1,
	  two: 2,
	  few: 3,
	  many: 4,
	  other: 5
	};
	function createRules() {
	  const rules = {};
	  sets.forEach(set => {
	    set.lngs.forEach(l => {
	      rules[l] = {
	        numbers: set.nr,
	        plurals: _rulesPluralsTypes[set.fc]
	      };
	    });
	  });
	  return rules;
	}
	class PluralResolver {
	  constructor(languageUtils) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    this.languageUtils = languageUtils;
	    this.options = options;
	    this.logger = baseLogger.create('pluralResolver');
	    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
	      this.options.compatibilityJSON = 'v3';
	      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
	    }
	    this.rules = createRules();
	  }
	  addRule(lng, obj) {
	    this.rules[lng] = obj;
	  }
	  getRule(code) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    if (this.shouldUseIntlApi()) {
	      try {
	        return new Intl.PluralRules(getCleanedCode(code === 'dev' ? 'en' : code), {
	          type: options.ordinal ? 'ordinal' : 'cardinal'
	        });
	      } catch (err) {
	        return;
	      }
	    }
	    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
	  }
	  needsPlural(code) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    const rule = this.getRule(code, options);
	    if (this.shouldUseIntlApi()) {
	      return rule && rule.resolvedOptions().pluralCategories.length > 1;
	    }
	    return rule && rule.numbers.length > 1;
	  }
	  getPluralFormsOfKey(code, key) {
	    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    return this.getSuffixes(code, options).map(suffix => `${key}${suffix}`);
	  }
	  getSuffixes(code) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    const rule = this.getRule(code, options);
	    if (!rule) {
	      return [];
	    }
	    if (this.shouldUseIntlApi()) {
	      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map(pluralCategory => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${pluralCategory}`);
	    }
	    return rule.numbers.map(number => this.getSuffix(code, number, options));
	  }
	  getSuffix(code, count) {
	    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    const rule = this.getRule(code, options);
	    if (rule) {
	      if (this.shouldUseIntlApi()) {
	        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${rule.select(count)}`;
	      }
	      return this.getSuffixRetroCompatible(rule, count);
	    }
	    this.logger.warn(`no plural rule found for: ${code}`);
	    return '';
	  }
	  getSuffixRetroCompatible(rule, count) {
	    const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
	    let suffix = rule.numbers[idx];
	    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
	      if (suffix === 2) {
	        suffix = 'plural';
	      } else if (suffix === 1) {
	        suffix = '';
	      }
	    }
	    const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
	    if (this.options.compatibilityJSON === 'v1') {
	      if (suffix === 1) return '';
	      if (typeof suffix === 'number') return `_plural_${suffix.toString()}`;
	      return returnSuffix();
	    } else if (this.options.compatibilityJSON === 'v2') {
	      return returnSuffix();
	    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
	      return returnSuffix();
	    }
	    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
	  }
	  shouldUseIntlApi() {
	    return !nonIntlVersions.includes(this.options.compatibilityJSON);
	  }
	}

	function deepFindWithDefaults(data, defaultData, key) {
	  let keySeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
	  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
	  let path = getPathWithDefaults(data, defaultData, key);
	  if (!path && ignoreJSONStructure && typeof key === 'string') {
	    path = deepFind(data, key, keySeparator);
	    if (path === undefined) path = deepFind(defaultData, key, keySeparator);
	  }
	  return path;
	}
	class Interpolator {
	  constructor() {
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    this.logger = baseLogger.create('interpolator');
	    this.options = options;
	    this.format = options.interpolation && options.interpolation.format || (value => value);
	    this.init(options);
	  }
	  init() {
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    if (!options.interpolation) options.interpolation = {
	      escapeValue: true
	    };
	    const iOpts = options.interpolation;
	    this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
	    this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
	    this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
	    this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
	    this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
	    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
	    this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
	    this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
	    this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
	    this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
	    this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
	    this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
	    this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
	    this.resetRegExp();
	  }
	  reset() {
	    if (this.options) this.init(this.options);
	  }
	  resetRegExp() {
	    const getOrResetRegExp = (existingRegExp, pattern) => {
	      if (existingRegExp && existingRegExp.source === pattern) {
	        existingRegExp.lastIndex = 0;
	        return existingRegExp;
	      }
	      return new RegExp(pattern, 'g');
	    };
	    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
	    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
	    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
	  }
	  interpolate(str, data, lng, options) {
	    let match;
	    let value;
	    let replaces;
	    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
	    function regexSafe(val) {
	      return val.replace(/\$/g, '$$$$');
	    }
	    const handleFormat = key => {
	      if (key.indexOf(this.formatSeparator) < 0) {
	        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
	        return this.alwaysFormat ? this.format(path, undefined, lng, {
	          ...options,
	          ...data,
	          interpolationkey: key
	        }) : path;
	      }
	      const p = key.split(this.formatSeparator);
	      const k = p.shift().trim();
	      const f = p.join(this.formatSeparator).trim();
	      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
	        ...options,
	        ...data,
	        interpolationkey: k
	      });
	    };
	    this.resetRegExp();
	    const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
	    const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
	    const todos = [{
	      regex: this.regexpUnescape,
	      safeValue: val => regexSafe(val)
	    }, {
	      regex: this.regexp,
	      safeValue: val => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
	    }];
	    todos.forEach(todo => {
	      replaces = 0;
	      while (match = todo.regex.exec(str)) {
	        const matchedVar = match[1].trim();
	        value = handleFormat(matchedVar);
	        if (value === undefined) {
	          if (typeof missingInterpolationHandler === 'function') {
	            const temp = missingInterpolationHandler(str, match, options);
	            value = typeof temp === 'string' ? temp : '';
	          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
	            value = '';
	          } else if (skipOnVariables) {
	            value = match[0];
	            continue;
	          } else {
	            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
	            value = '';
	          }
	        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
	          value = makeString(value);
	        }
	        const safeValue = todo.safeValue(value);
	        str = str.replace(match[0], safeValue);
	        if (skipOnVariables) {
	          todo.regex.lastIndex += value.length;
	          todo.regex.lastIndex -= match[0].length;
	        } else {
	          todo.regex.lastIndex = 0;
	        }
	        replaces++;
	        if (replaces >= this.maxReplaces) {
	          break;
	        }
	      }
	    });
	    return str;
	  }
	  nest(str, fc) {
	    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    let match;
	    let value;
	    let clonedOptions;
	    function handleHasOptions(key, inheritedOptions) {
	      const sep = this.nestingOptionsSeparator;
	      if (key.indexOf(sep) < 0) return key;
	      const c = key.split(new RegExp(`${sep}[ ]*{`));
	      let optionsString = `{${c[1]}`;
	      key = c[0];
	      optionsString = this.interpolate(optionsString, clonedOptions);
	      const matchedSingleQuotes = optionsString.match(/'/g);
	      const matchedDoubleQuotes = optionsString.match(/"/g);
	      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
	        optionsString = optionsString.replace(/'/g, '"');
	      }
	      try {
	        clonedOptions = JSON.parse(optionsString);
	        if (inheritedOptions) clonedOptions = {
	          ...inheritedOptions,
	          ...clonedOptions
	        };
	      } catch (e) {
	        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
	        return `${key}${sep}${optionsString}`;
	      }
	      delete clonedOptions.defaultValue;
	      return key;
	    }
	    while (match = this.nestingRegexp.exec(str)) {
	      let formatters = [];
	      clonedOptions = {
	        ...options
	      };
	      clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== 'string' ? clonedOptions.replace : clonedOptions;
	      clonedOptions.applyPostProcessor = false;
	      delete clonedOptions.defaultValue;
	      let doReduce = false;
	      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
	        const r = match[1].split(this.formatSeparator).map(elem => elem.trim());
	        match[1] = r.shift();
	        formatters = r;
	        doReduce = true;
	      }
	      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
	      if (value && match[0] === str && typeof value !== 'string') return value;
	      if (typeof value !== 'string') value = makeString(value);
	      if (!value) {
	        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
	        value = '';
	      }
	      if (doReduce) {
	        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
	          ...options,
	          interpolationkey: match[1].trim()
	        }), value.trim());
	      }
	      str = str.replace(match[0], value);
	      this.regexp.lastIndex = 0;
	    }
	    return str;
	  }
	}

	function parseFormatStr(formatStr) {
	  let formatName = formatStr.toLowerCase().trim();
	  const formatOptions = {};
	  if (formatStr.indexOf('(') > -1) {
	    const p = formatStr.split('(');
	    formatName = p[0].toLowerCase().trim();
	    const optStr = p[1].substring(0, p[1].length - 1);
	    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
	      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
	    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
	      if (!formatOptions.range) formatOptions.range = optStr.trim();
	    } else {
	      const opts = optStr.split(';');
	      opts.forEach(opt => {
	        if (!opt) return;
	        const [key, ...rest] = opt.split(':');
	        const val = rest.join(':').trim().replace(/^'+|'+$/g, '');
	        if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val;
	        if (val === 'false') formatOptions[key.trim()] = false;
	        if (val === 'true') formatOptions[key.trim()] = true;
	        if (!isNaN(val)) formatOptions[key.trim()] = parseInt(val, 10);
	      });
	    }
	  }
	  return {
	    formatName,
	    formatOptions
	  };
	}
	function createCachedFormatter(fn) {
	  const cache = {};
	  return function invokeFormatter(val, lng, options) {
	    const key = lng + JSON.stringify(options);
	    let formatter = cache[key];
	    if (!formatter) {
	      formatter = fn(getCleanedCode(lng), options);
	      cache[key] = formatter;
	    }
	    return formatter(val);
	  };
	}
	class Formatter {
	  constructor() {
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    this.logger = baseLogger.create('formatter');
	    this.options = options;
	    this.formats = {
	      number: createCachedFormatter((lng, opt) => {
	        const formatter = new Intl.NumberFormat(lng, {
	          ...opt
	        });
	        return val => formatter.format(val);
	      }),
	      currency: createCachedFormatter((lng, opt) => {
	        const formatter = new Intl.NumberFormat(lng, {
	          ...opt,
	          style: 'currency'
	        });
	        return val => formatter.format(val);
	      }),
	      datetime: createCachedFormatter((lng, opt) => {
	        const formatter = new Intl.DateTimeFormat(lng, {
	          ...opt
	        });
	        return val => formatter.format(val);
	      }),
	      relativetime: createCachedFormatter((lng, opt) => {
	        const formatter = new Intl.RelativeTimeFormat(lng, {
	          ...opt
	        });
	        return val => formatter.format(val, opt.range || 'day');
	      }),
	      list: createCachedFormatter((lng, opt) => {
	        const formatter = new Intl.ListFormat(lng, {
	          ...opt
	        });
	        return val => formatter.format(val);
	      })
	    };
	    this.init(options);
	  }
	  init(services) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	      interpolation: {}
	    };
	    const iOpts = options.interpolation;
	    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
	  }
	  add(name, fc) {
	    this.formats[name.toLowerCase().trim()] = fc;
	  }
	  addCached(name, fc) {
	    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
	  }
	  format(value, format, lng) {
	    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    const formats = format.split(this.formatSeparator);
	    const result = formats.reduce((mem, f) => {
	      const {
	        formatName,
	        formatOptions
	      } = parseFormatStr(f);
	      if (this.formats[formatName]) {
	        let formatted = mem;
	        try {
	          const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
	          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
	          formatted = this.formats[formatName](mem, l, {
	            ...formatOptions,
	            ...options,
	            ...valOptions
	          });
	        } catch (error) {
	          this.logger.warn(error);
	        }
	        return formatted;
	      } else {
	        this.logger.warn(`there was no format function for ${formatName}`);
	      }
	      return mem;
	    }, value);
	    return result;
	  }
	}

	function removePending(q, name) {
	  if (q.pending[name] !== undefined) {
	    delete q.pending[name];
	    q.pendingCount--;
	  }
	}
	class Connector extends EventEmitter {
	  constructor(backend, store, services) {
	    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    super();
	    this.backend = backend;
	    this.store = store;
	    this.services = services;
	    this.languageUtils = services.languageUtils;
	    this.options = options;
	    this.logger = baseLogger.create('backendConnector');
	    this.waitingReads = [];
	    this.maxParallelReads = options.maxParallelReads || 10;
	    this.readingCalls = 0;
	    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
	    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
	    this.state = {};
	    this.queue = [];
	    if (this.backend && this.backend.init) {
	      this.backend.init(services, options.backend, options);
	    }
	  }
	  queueLoad(languages, namespaces, options, callback) {
	    const toLoad = {};
	    const pending = {};
	    const toLoadLanguages = {};
	    const toLoadNamespaces = {};
	    languages.forEach(lng => {
	      let hasAllNamespaces = true;
	      namespaces.forEach(ns => {
	        const name = `${lng}|${ns}`;
	        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
	          this.state[name] = 2;
	        } else if (this.state[name] < 0) ; else if (this.state[name] === 1) {
	          if (pending[name] === undefined) pending[name] = true;
	        } else {
	          this.state[name] = 1;
	          hasAllNamespaces = false;
	          if (pending[name] === undefined) pending[name] = true;
	          if (toLoad[name] === undefined) toLoad[name] = true;
	          if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
	        }
	      });
	      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
	    });
	    if (Object.keys(toLoad).length || Object.keys(pending).length) {
	      this.queue.push({
	        pending,
	        pendingCount: Object.keys(pending).length,
	        loaded: {},
	        errors: [],
	        callback
	      });
	    }
	    return {
	      toLoad: Object.keys(toLoad),
	      pending: Object.keys(pending),
	      toLoadLanguages: Object.keys(toLoadLanguages),
	      toLoadNamespaces: Object.keys(toLoadNamespaces)
	    };
	  }
	  loaded(name, err, data) {
	    const s = name.split('|');
	    const lng = s[0];
	    const ns = s[1];
	    if (err) this.emit('failedLoading', lng, ns, err);
	    if (data) {
	      this.store.addResourceBundle(lng, ns, data, undefined, undefined, {
	        skipCopy: true
	      });
	    }
	    this.state[name] = err ? -1 : 2;
	    const loaded = {};
	    this.queue.forEach(q => {
	      pushPath(q.loaded, [lng], ns);
	      removePending(q, name);
	      if (err) q.errors.push(err);
	      if (q.pendingCount === 0 && !q.done) {
	        Object.keys(q.loaded).forEach(l => {
	          if (!loaded[l]) loaded[l] = {};
	          const loadedKeys = q.loaded[l];
	          if (loadedKeys.length) {
	            loadedKeys.forEach(n => {
	              if (loaded[l][n] === undefined) loaded[l][n] = true;
	            });
	          }
	        });
	        q.done = true;
	        if (q.errors.length) {
	          q.callback(q.errors);
	        } else {
	          q.callback();
	        }
	      }
	    });
	    this.emit('loaded', loaded);
	    this.queue = this.queue.filter(q => !q.done);
	  }
	  read(lng, ns, fcName) {
	    let tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	    let wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
	    let callback = arguments.length > 5 ? arguments[5] : undefined;
	    if (!lng.length) return callback(null, {});
	    if (this.readingCalls >= this.maxParallelReads) {
	      this.waitingReads.push({
	        lng,
	        ns,
	        fcName,
	        tried,
	        wait,
	        callback
	      });
	      return;
	    }
	    this.readingCalls++;
	    const resolver = (err, data) => {
	      this.readingCalls--;
	      if (this.waitingReads.length > 0) {
	        const next = this.waitingReads.shift();
	        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
	      }
	      if (err && data && tried < this.maxRetries) {
	        setTimeout(() => {
	          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
	        }, wait);
	        return;
	      }
	      callback(err, data);
	    };
	    const fc = this.backend[fcName].bind(this.backend);
	    if (fc.length === 2) {
	      try {
	        const r = fc(lng, ns);
	        if (r && typeof r.then === 'function') {
	          r.then(data => resolver(null, data)).catch(resolver);
	        } else {
	          resolver(null, r);
	        }
	      } catch (err) {
	        resolver(err);
	      }
	      return;
	    }
	    return fc(lng, ns, resolver);
	  }
	  prepareLoading(languages, namespaces) {
	    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    let callback = arguments.length > 3 ? arguments[3] : undefined;
	    if (!this.backend) {
	      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
	      return callback && callback();
	    }
	    if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
	    if (typeof namespaces === 'string') namespaces = [namespaces];
	    const toLoad = this.queueLoad(languages, namespaces, options, callback);
	    if (!toLoad.toLoad.length) {
	      if (!toLoad.pending.length) callback();
	      return null;
	    }
	    toLoad.toLoad.forEach(name => {
	      this.loadOne(name);
	    });
	  }
	  load(languages, namespaces, callback) {
	    this.prepareLoading(languages, namespaces, {}, callback);
	  }
	  reload(languages, namespaces, callback) {
	    this.prepareLoading(languages, namespaces, {
	      reload: true
	    }, callback);
	  }
	  loadOne(name) {
	    let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	    const s = name.split('|');
	    const lng = s[0];
	    const ns = s[1];
	    this.read(lng, ns, 'read', undefined, undefined, (err, data) => {
	      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
	      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
	      this.loaded(name, err, data);
	    });
	  }
	  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
	    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	    let clb = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : () => {};
	    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
	      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
	      return;
	    }
	    if (key === undefined || key === null || key === '') return;
	    if (this.backend && this.backend.create) {
	      const opts = {
	        ...options,
	        isUpdate
	      };
	      const fc = this.backend.create.bind(this.backend);
	      if (fc.length < 6) {
	        try {
	          let r;
	          if (fc.length === 5) {
	            r = fc(languages, namespace, key, fallbackValue, opts);
	          } else {
	            r = fc(languages, namespace, key, fallbackValue);
	          }
	          if (r && typeof r.then === 'function') {
	            r.then(data => clb(null, data)).catch(clb);
	          } else {
	            clb(null, r);
	          }
	        } catch (err) {
	          clb(err);
	        }
	      } else {
	        fc(languages, namespace, key, fallbackValue, clb, opts);
	      }
	    }
	    if (!languages || !languages[0]) return;
	    this.store.addResource(languages[0], namespace, key, fallbackValue);
	  }
	}

	function get() {
	  return {
	    debug: false,
	    initImmediate: true,
	    ns: ['translation'],
	    defaultNS: ['translation'],
	    fallbackLng: ['dev'],
	    fallbackNS: false,
	    supportedLngs: false,
	    nonExplicitSupportedLngs: false,
	    load: 'all',
	    preload: false,
	    simplifyPluralSuffix: true,
	    keySeparator: '.',
	    nsSeparator: ':',
	    pluralSeparator: '_',
	    contextSeparator: '_',
	    partialBundledLanguages: false,
	    saveMissing: false,
	    updateMissing: false,
	    saveMissingTo: 'fallback',
	    saveMissingPlurals: true,
	    missingKeyHandler: false,
	    missingInterpolationHandler: false,
	    postProcess: false,
	    postProcessPassResolved: false,
	    returnNull: false,
	    returnEmptyString: true,
	    returnObjects: false,
	    joinArrays: false,
	    returnedObjectHandler: false,
	    parseMissingKeyHandler: false,
	    appendNamespaceToMissingKey: false,
	    appendNamespaceToCIMode: false,
	    overloadTranslationOptionHandler: function handle(args) {
	      let ret = {};
	      if (typeof args[1] === 'object') ret = args[1];
	      if (typeof args[1] === 'string') ret.defaultValue = args[1];
	      if (typeof args[2] === 'string') ret.tDescription = args[2];
	      if (typeof args[2] === 'object' || typeof args[3] === 'object') {
	        const options = args[3] || args[2];
	        Object.keys(options).forEach(key => {
	          ret[key] = options[key];
	        });
	      }
	      return ret;
	    },
	    interpolation: {
	      escapeValue: true,
	      format: value => value,
	      prefix: '{{',
	      suffix: '}}',
	      formatSeparator: ',',
	      unescapePrefix: '-',
	      nestingPrefix: '$t(',
	      nestingSuffix: ')',
	      nestingOptionsSeparator: ',',
	      maxReplaces: 1000,
	      skipOnVariables: true
	    }
	  };
	}
	function transformOptions(options) {
	  if (typeof options.ns === 'string') options.ns = [options.ns];
	  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
	  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];
	  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
	    options.supportedLngs = options.supportedLngs.concat(['cimode']);
	  }
	  return options;
	}

	function noop() {}
	function bindMemberFunctions(inst) {
	  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
	  mems.forEach(mem => {
	    if (typeof inst[mem] === 'function') {
	      inst[mem] = inst[mem].bind(inst);
	    }
	  });
	}
	class I18n extends EventEmitter {
	  constructor() {
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    let callback = arguments.length > 1 ? arguments[1] : undefined;
	    super();
	    this.options = transformOptions(options);
	    this.services = {};
	    this.logger = baseLogger;
	    this.modules = {
	      external: []
	    };
	    bindMemberFunctions(this);
	    if (callback && !this.isInitialized && !options.isClone) {
	      if (!this.options.initImmediate) {
	        this.init(options, callback);
	        return this;
	      }
	      setTimeout(() => {
	        this.init(options, callback);
	      }, 0);
	    }
	  }
	  init() {
	    var _this = this;
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    let callback = arguments.length > 1 ? arguments[1] : undefined;
	    this.isInitializing = true;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
	      if (typeof options.ns === 'string') {
	        options.defaultNS = options.ns;
	      } else if (options.ns.indexOf('translation') < 0) {
	        options.defaultNS = options.ns[0];
	      }
	    }
	    const defOpts = get();
	    this.options = {
	      ...defOpts,
	      ...this.options,
	      ...transformOptions(options)
	    };
	    if (this.options.compatibilityAPI !== 'v1') {
	      this.options.interpolation = {
	        ...defOpts.interpolation,
	        ...this.options.interpolation
	      };
	    }
	    if (options.keySeparator !== undefined) {
	      this.options.userDefinedKeySeparator = options.keySeparator;
	    }
	    if (options.nsSeparator !== undefined) {
	      this.options.userDefinedNsSeparator = options.nsSeparator;
	    }
	    function createClassOnDemand(ClassOrObject) {
	      if (!ClassOrObject) return null;
	      if (typeof ClassOrObject === 'function') return new ClassOrObject();
	      return ClassOrObject;
	    }
	    if (!this.options.isClone) {
	      if (this.modules.logger) {
	        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
	      } else {
	        baseLogger.init(null, this.options);
	      }
	      let formatter;
	      if (this.modules.formatter) {
	        formatter = this.modules.formatter;
	      } else if (typeof Intl !== 'undefined') {
	        formatter = Formatter;
	      }
	      const lu = new LanguageUtil(this.options);
	      this.store = new ResourceStore(this.options.resources, this.options);
	      const s = this.services;
	      s.logger = baseLogger;
	      s.resourceStore = this.store;
	      s.languageUtils = lu;
	      s.pluralResolver = new PluralResolver(lu, {
	        prepend: this.options.pluralSeparator,
	        compatibilityJSON: this.options.compatibilityJSON,
	        simplifyPluralSuffix: this.options.simplifyPluralSuffix
	      });
	      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
	        s.formatter = createClassOnDemand(formatter);
	        s.formatter.init(s, this.options);
	        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
	      }
	      s.interpolator = new Interpolator(this.options);
	      s.utils = {
	        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
	      };
	      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
	      s.backendConnector.on('*', function (event) {
	        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }
	        _this.emit(event, ...args);
	      });
	      if (this.modules.languageDetector) {
	        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
	        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
	      }
	      if (this.modules.i18nFormat) {
	        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
	        if (s.i18nFormat.init) s.i18nFormat.init(this);
	      }
	      this.translator = new Translator(this.services, this.options);
	      this.translator.on('*', function (event) {
	        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          args[_key2 - 1] = arguments[_key2];
	        }
	        _this.emit(event, ...args);
	      });
	      this.modules.external.forEach(m => {
	        if (m.init) m.init(this);
	      });
	    }
	    this.format = this.options.interpolation.format;
	    if (!callback) callback = noop;
	    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
	      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
	      if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
	    }
	    if (!this.services.languageDetector && !this.options.lng) {
	      this.logger.warn('init: no languageDetector is used and no lng is defined');
	    }
	    const storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
	    storeApi.forEach(fcName => {
	      this[fcName] = function () {
	        return _this.store[fcName](...arguments);
	      };
	    });
	    const storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
	    storeApiChained.forEach(fcName => {
	      this[fcName] = function () {
	        _this.store[fcName](...arguments);
	        return _this;
	      };
	    });
	    const deferred = defer();
	    const load = () => {
	      const finish = (err, t) => {
	        this.isInitializing = false;
	        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn('init: i18next is already initialized. You should call init just once!');
	        this.isInitialized = true;
	        if (!this.options.isClone) this.logger.log('initialized', this.options);
	        this.emit('initialized', this.options);
	        deferred.resolve(t);
	        callback(err, t);
	      };
	      if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized) return finish(null, this.t.bind(this));
	      this.changeLanguage(this.options.lng, finish);
	    };
	    if (this.options.resources || !this.options.initImmediate) {
	      load();
	    } else {
	      setTimeout(load, 0);
	    }
	    return deferred;
	  }
	  loadResources(language) {
	    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	    let usedCallback = callback;
	    const usedLng = typeof language === 'string' ? language : this.language;
	    if (typeof language === 'function') usedCallback = language;
	    if (!this.options.resources || this.options.partialBundledLanguages) {
	      if (usedLng && usedLng.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
	      const toLoad = [];
	      const append = lng => {
	        if (!lng) return;
	        if (lng === 'cimode') return;
	        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
	        lngs.forEach(l => {
	          if (l === 'cimode') return;
	          if (toLoad.indexOf(l) < 0) toLoad.push(l);
	        });
	      };
	      if (!usedLng) {
	        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
	        fallbacks.forEach(l => append(l));
	      } else {
	        append(usedLng);
	      }
	      if (this.options.preload) {
	        this.options.preload.forEach(l => append(l));
	      }
	      this.services.backendConnector.load(toLoad, this.options.ns, e => {
	        if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
	        usedCallback(e);
	      });
	    } else {
	      usedCallback(null);
	    }
	  }
	  reloadResources(lngs, ns, callback) {
	    const deferred = defer();
	    if (!lngs) lngs = this.languages;
	    if (!ns) ns = this.options.ns;
	    if (!callback) callback = noop;
	    this.services.backendConnector.reload(lngs, ns, err => {
	      deferred.resolve();
	      callback(err);
	    });
	    return deferred;
	  }
	  use(module) {
	    if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
	    if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
	    if (module.type === 'backend') {
	      this.modules.backend = module;
	    }
	    if (module.type === 'logger' || module.log && module.warn && module.error) {
	      this.modules.logger = module;
	    }
	    if (module.type === 'languageDetector') {
	      this.modules.languageDetector = module;
	    }
	    if (module.type === 'i18nFormat') {
	      this.modules.i18nFormat = module;
	    }
	    if (module.type === 'postProcessor') {
	      postProcessor.addPostProcessor(module);
	    }
	    if (module.type === 'formatter') {
	      this.modules.formatter = module;
	    }
	    if (module.type === '3rdParty') {
	      this.modules.external.push(module);
	    }
	    return this;
	  }
	  setResolvedLanguage(l) {
	    if (!l || !this.languages) return;
	    if (['cimode', 'dev'].indexOf(l) > -1) return;
	    for (let li = 0; li < this.languages.length; li++) {
	      const lngInLngs = this.languages[li];
	      if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
	      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
	        this.resolvedLanguage = lngInLngs;
	        break;
	      }
	    }
	  }
	  changeLanguage(lng, callback) {
	    var _this2 = this;
	    this.isLanguageChangingTo = lng;
	    const deferred = defer();
	    this.emit('languageChanging', lng);
	    const setLngProps = l => {
	      this.language = l;
	      this.languages = this.services.languageUtils.toResolveHierarchy(l);
	      this.resolvedLanguage = undefined;
	      this.setResolvedLanguage(l);
	    };
	    const done = (err, l) => {
	      if (l) {
	        setLngProps(l);
	        this.translator.changeLanguage(l);
	        this.isLanguageChangingTo = undefined;
	        this.emit('languageChanged', l);
	        this.logger.log('languageChanged', l);
	      } else {
	        this.isLanguageChangingTo = undefined;
	      }
	      deferred.resolve(function () {
	        return _this2.t(...arguments);
	      });
	      if (callback) callback(err, function () {
	        return _this2.t(...arguments);
	      });
	    };
	    const setLng = lngs => {
	      if (!lng && !lngs && this.services.languageDetector) lngs = [];
	      const l = typeof lngs === 'string' ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
	      if (l) {
	        if (!this.language) {
	          setLngProps(l);
	        }
	        if (!this.translator.language) this.translator.changeLanguage(l);
	        if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage) this.services.languageDetector.cacheUserLanguage(l);
	      }
	      this.loadResources(l, err => {
	        done(err, l);
	      });
	    };
	    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
	      setLng(this.services.languageDetector.detect());
	    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
	      if (this.services.languageDetector.detect.length === 0) {
	        this.services.languageDetector.detect().then(setLng);
	      } else {
	        this.services.languageDetector.detect(setLng);
	      }
	    } else {
	      setLng(lng);
	    }
	    return deferred;
	  }
	  getFixedT(lng, ns, keyPrefix) {
	    var _this3 = this;
	    const fixedT = function (key, opts) {
	      let options;
	      if (typeof opts !== 'object') {
	        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
	          rest[_key3 - 2] = arguments[_key3];
	        }
	        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
	      } else {
	        options = {
	          ...opts
	        };
	      }
	      options.lng = options.lng || fixedT.lng;
	      options.lngs = options.lngs || fixedT.lngs;
	      options.ns = options.ns || fixedT.ns;
	      options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
	      const keySeparator = _this3.options.keySeparator || '.';
	      let resultKey;
	      if (options.keyPrefix && Array.isArray(key)) {
	        resultKey = key.map(k => `${options.keyPrefix}${keySeparator}${k}`);
	      } else {
	        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
	      }
	      return _this3.t(resultKey, options);
	    };
	    if (typeof lng === 'string') {
	      fixedT.lng = lng;
	    } else {
	      fixedT.lngs = lng;
	    }
	    fixedT.ns = ns;
	    fixedT.keyPrefix = keyPrefix;
	    return fixedT;
	  }
	  t() {
	    return this.translator && this.translator.translate(...arguments);
	  }
	  exists() {
	    return this.translator && this.translator.exists(...arguments);
	  }
	  setDefaultNamespace(ns) {
	    this.options.defaultNS = ns;
	  }
	  hasLoadedNamespace(ns) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    if (!this.isInitialized) {
	      this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
	      return false;
	    }
	    if (!this.languages || !this.languages.length) {
	      this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
	      return false;
	    }
	    const lng = options.lng || this.resolvedLanguage || this.languages[0];
	    const fallbackLng = this.options ? this.options.fallbackLng : false;
	    const lastLng = this.languages[this.languages.length - 1];
	    if (lng.toLowerCase() === 'cimode') return true;
	    const loadNotPending = (l, n) => {
	      const loadState = this.services.backendConnector.state[`${l}|${n}`];
	      return loadState === -1 || loadState === 2;
	    };
	    if (options.precheck) {
	      const preResult = options.precheck(this, loadNotPending);
	      if (preResult !== undefined) return preResult;
	    }
	    if (this.hasResourceBundle(lng, ns)) return true;
	    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
	    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
	    return false;
	  }
	  loadNamespaces(ns, callback) {
	    const deferred = defer();
	    if (!this.options.ns) {
	      if (callback) callback();
	      return Promise.resolve();
	    }
	    if (typeof ns === 'string') ns = [ns];
	    ns.forEach(n => {
	      if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
	    });
	    this.loadResources(err => {
	      deferred.resolve();
	      if (callback) callback(err);
	    });
	    return deferred;
	  }
	  loadLanguages(lngs, callback) {
	    const deferred = defer();
	    if (typeof lngs === 'string') lngs = [lngs];
	    const preloaded = this.options.preload || [];
	    const newLngs = lngs.filter(lng => preloaded.indexOf(lng) < 0);
	    if (!newLngs.length) {
	      if (callback) callback();
	      return Promise.resolve();
	    }
	    this.options.preload = preloaded.concat(newLngs);
	    this.loadResources(err => {
	      deferred.resolve();
	      if (callback) callback(err);
	    });
	    return deferred;
	  }
	  dir(lng) {
	    if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
	    if (!lng) return 'rtl';
	    const rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
	    const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
	    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
	  }
	  static createInstance() {
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    let callback = arguments.length > 1 ? arguments[1] : undefined;
	    return new I18n(options, callback);
	  }
	  cloneInstance() {
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	    const forkResourceStore = options.forkResourceStore;
	    if (forkResourceStore) delete options.forkResourceStore;
	    const mergedOptions = {
	      ...this.options,
	      ...options,
	      ...{
	        isClone: true
	      }
	    };
	    const clone = new I18n(mergedOptions);
	    if (options.debug !== undefined || options.prefix !== undefined) {
	      clone.logger = clone.logger.clone(options);
	    }
	    const membersToCopy = ['store', 'services', 'language'];
	    membersToCopy.forEach(m => {
	      clone[m] = this[m];
	    });
	    clone.services = {
	      ...this.services
	    };
	    clone.services.utils = {
	      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
	    };
	    if (forkResourceStore) {
	      clone.store = new ResourceStore(this.store.data, mergedOptions);
	      clone.services.resourceStore = clone.store;
	    }
	    clone.translator = new Translator(clone.services, mergedOptions);
	    clone.translator.on('*', function (event) {
	      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	        args[_key4 - 1] = arguments[_key4];
	      }
	      clone.emit(event, ...args);
	    });
	    clone.init(mergedOptions, callback);
	    clone.translator.options = mergedOptions;
	    clone.translator.backendConnector.services.utils = {
	      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
	    };
	    return clone;
	  }
	  toJSON() {
	    return {
	      options: this.options,
	      store: this.store,
	      language: this.language,
	      languages: this.languages,
	      resolvedLanguage: this.resolvedLanguage
	    };
	  }
	}
	const instance = I18n.createInstance();
	instance.createInstance = I18n.createInstance;

	instance.createInstance;
	instance.dir;
	instance.init;
	instance.loadResources;
	instance.reloadResources;
	instance.use;
	instance.changeLanguage;
	instance.getFixedT;
	instance.t;
	instance.exists;
	instance.setDefaultNamespace;
	instance.hasLoadedNamespace;
	instance.loadNamespaces;
	instance.loadLanguages;

	var LOCALSTORAGE_SESSION_ID_KEY = "what2studyUserSessionId";
	instance
	    .init({
	    interpolation: { escapeValue: false },
	    lng: "de",
	    react: {
	        useSuspense: false
	    },
	    resources: {
	        en: {
	            global: {
	                "introPage1": {
	                    "hello": "Hello. It's nice to meet you!",
	                    "iam": "I am a chatbot",
	                    "built": " built to help you with your studies! Before we get started, here are a few important facts.",
	                    "play": "Play Tutorial",
	                    "chat": "To Chat",
	                    "okay": "Okay"
	                },
	                "introPage2": {
	                    "Lets": "Let's start with the basics! It's important to me that working with me is ",
	                    "easy": "easy and safe",
	                    "thats": " That's why I want to give you as much information as possible about my",
	                    "functions": " functions and procedures.",
	                    "everything": "Everything we discuss here is confidential; no one will be informed of the subject of this discussion unless you have given your explicit consent (e.g. when submitting a request via the \"Talk to us\" function). In order to improve the quality of the answers, anonymized answers will be evaluated in an initial test phase.",
	                    "okay": "Okay"
	                },
	                "infoPopup": {
	                    "welcome": "Welcome to What2Study!",
	                    "what2study": "What2Study is a ",
	                    "chatbot": "Chatbot",
	                    "that": " that was developed to support in all your question and endeavors concerning",
	                    "studies": " studies",
	                    "please": "Please note:",
	                    "isnot": "What2Study is not a real",
	                    "person": " person. ",
	                    "many": "Many people have been involved in its development and have extensively tested whether the answers and content are correct and helpful. However, we ",
	                    "cant": "cannot guarantee",
	                    "every": "that every answer given by this chatbot is correct. We recommend that you verify important information yourself."
	                },
	                "talk2human": {
	                    "back": "Back",
	                    "write": "Contact [Name of the organisation]:",
	                    "message": "Briefly describe the question/concern here (if it is not obvious from the chat history or if it is not sent at the same time)",
	                    "send": "Send chat history",
	                    "please": "Enter your email address for contact purposes:",
	                    "use": "Use the saved email address: ",
	                    "different": "Use a different email address",
	                    "email": "Enter email address",
	                    "would": "Is a phone response preferred?",
	                    "number": "Enter contact number",
	                    "best": "What is the best time to call you?"
	                },
	                "filters": {
	                    "personality": "Chatbot Personality",
	                    "reset": "Default",
	                    "discard": "Undo Changes",
	                    "friendly": "Casual",
	                    "professional": "Formal",
	                    "opinionated": "Recommending",
	                    "neutral": "Neutral",
	                    "many": "Many emojis 🤩",
	                    "no": "No emojis",
	                    "long": "Long answers",
	                    "short": "Short answers"
	                },
	                "settings": {
	                    "settings": "Settings",
	                    "restart": "Restart Intro",
	                    "language": "Language",
	                    "user": "Assumptions",
	                    "userAssumption1": "Studies Design",
	                    "userAssumption2": "22 year old",
	                    "userAssumption3": "University of Bielefeld"
	                }
	            }
	        },
	        de: {
	            global: {
	                "introPage1": {
	                    "hello": "Hello,",
	                    "iam": "ich bin ein Chatbot",
	                    "built": " der dir bei deinem Studium helfen soll! Bevor wir loslegen, ein paar wichtige Fakten.",
	                    "play": "Erklärvideo",
	                    "chat": "Direkt zum Chat",
	                    "okay": "Weiter"
	                },
	                "introPage2": {
	                    "Lets": "Fangen wir mit den Grundlagen an! Es ist mir wichtig, dass der Umgang mit mir ",
	                    "easy": "einfach und sicher ist.",
	                    "thats": " Deshalb möchte ich so gut wie möglich über meine",
	                    "functions": " Funktionen und Vorgehensweisen informieren.",
	                    "everything": "Alles, was wir hier besprechen, ist vertraulich, niemand wird über den Inhalt hier in Kenntnis gesetzt, es sei denn, es liegt eine ausdrückliche Zustimmung zur Weitergabe vor (z.B.: bei Weiterleitung einer Anfrage über die Funktion \"Sprich mit uns\"). Um die Qualität der Antworten zu verbessern, werden in einer ersten Testphase anonymisierte Antworten ausgewertet.",
	                    "okay": "Okay"
	                },
	                "infoPopup": {
	                    "welcome": "Willkommen bei What2Study!",
	                    "what2study": "What2Study ist ein ",
	                    "chatbot": "Chatbot, ",
	                    "that": "der entwickelt wurde, um Studierende und Studieninteressierte bei allen Fragen rund um das ",
	                    "studies": "Studium zu unterstützen",
	                    "please": "Bitte beachten:",
	                    "isnot": "What2Study ist keine ",
	                    "person": "reale Person",
	                    "many": "Viele Menschen waren an der Entwicklung beteiligt und haben ausgiebig getestet, ob die Antworten und Signaturen korrekt und hilfreich sind. Dennoch können wir ",
	                    "cant": "nicht garantieren, ",
	                    "every": "dass jede Antwort des Chatbots korrekt ist. Wir empfehlen daher, insbesondere wichtige Informationen noch einmal selbst zu überprüfen."
	                },
	                "talk2human": {
	                    "back": "Zurück",
	                    "write": "[Name of the organisation] kontaktieren:",
	                    "message": "Deine Nachricht",
	                    "send": "Chatverlauf senden",
	                    "please": "Angabe der E-Mail-Adresse für Kontaktzwecke:",
	                    "use": "Gespeichtere E-Mail-Adresse verwenden: ",
	                    "different": "Andere E-Mail-Adresse verwenden: ",
	                    "email": "E-Mail-Adresse eingeben",
	                    "would": "Ist eine telefonische Rückmeldung bevorzugt?",
	                    "number": "Telefonnummer eingeben",
	                    "best": "Wann kann ich Sie am besten anrufen?"
	                },
	                "filters": {
	                    "personality": "Chatbot-Charakter",
	                    "reset": "Standard",
	                    "discard": "Änderungen zurücksetzen",
	                    "friendly": "Locker",
	                    "professional": "Formell",
	                    "opinionated": "Vorschlagend",
	                    "neutral": "Objektiv",
	                    "many": "Viele Emojis 🤩",
	                    "no": "Keine emojis",
	                    "long": "Lange Antworten",
	                    "short": "Kurze Antworten"
	                },
	                "settings": {
	                    "settings": "Einstellungen",
	                    "restart": "Intro starten",
	                    "language": "Sprache",
	                    "user": "Annahmen",
	                    "userAssumption1": "Studiert Design",
	                    "userAssumption2": "22 Jahre alt",
	                    "userAssumption3": "Universität Bielefeld"
	                }
	            }
	        }
	    }
	});
	var App = function (props) {
	    return (jsxRuntimeExports.jsx(DataProvider, { children: jsxRuntimeExports.jsx(I18nextProvider, __assign$1({ i18n: instance }, { children: jsxRuntimeExports.jsx(ChatClient, __assign$1({}, props)) })) }));
	};

	const defaultRoot = "what2studyChatclientWrapper";
	const W2SChatClient = function () {
	  let clientConfigurations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  const {
	    rootId = defaultRoot,
	    ...rest
	  } = clientConfigurations;
	  const root = client.createRoot(document.getElementById(rootId));
	  root.render( /*#__PURE__*/React.createElement(App, rest));
	};

	return W2SChatClient;

}));
