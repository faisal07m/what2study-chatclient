import * as React from 'react';
import React__default, { createContext, useState, useEffect, useContext, useRef, cloneElement, useMemo, Fragment } from 'react';
import { createPortal } from 'react-dom';

var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports(){ return jsxRuntimeExports; },
  set exports(v){ jsxRuntimeExports = v; },
};

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
var f=React__default,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

(function (module) {

	{
	  module.exports = reactJsxRuntime_production_min;
	}
} (jsxRuntime));

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default.createContext && React__default.createContext(DefaultContext);

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React__default.createElement(node.tag, __assign$1({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return React__default.createElement(IconBase, __assign$1({
      attr: __assign$1({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest$1(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return React__default.createElement("svg", __assign$1({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign$1(__assign$1({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React__default.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? React__default.createElement(IconContext.Consumer, null, function (conf) {
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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
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
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
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

var DataContext = createContext({});
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
var DataProvider = function (props) {
    var children = props.children;
    var _a = useState(false), isChatOpen = _a[0], setIsChatOpen = _a[1]; // COMMITODO: false
    var _b = useState(false), isMobileScreen = _b[0], setIsMobileScreen = _b[1];
    var _c = useState(""), sessionId = _c[0], setSessionId = _c[1];
    var _d = useState(EThemes.LIGHT_THEME_1), currentTheme = _d[0], setCurrentTheme = _d[1];
    var _e = useState(EPopupItem.NONE), popupItem = _e[0], setPopupItem = _e[1];
    var _f = useState(true), isBotVolumeOn = _f[0], setIsBotVolumeOn = _f[1];
    var _g = useState(ERoute.INTRO), currentRoute = _g[0], setCurrentRoute = _g[1]; // COMMITODO .MAIN (TD INTRO)
    var _h = useState({
        tone: 0.1,
        sentiment: 1,
        emotiveness: 0.7,
        length: 0.4,
    }), chatFilters = _h[0], setChatFilters = _h[1];
    var _j = useState(EChatLanguage.EN), language = _j[0], setLanguage = _j[1];
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
    };
    // On chat client init
    useEffect(function () {
        createOrRehydrateSession();
    }, []);
    return jsxRuntimeExports.jsx(DataContext.Provider, __assign({ value: providerValue }, { children: children }));
};
var useData = function () { return useContext(DataContext); };

var IconButton = function (props) {
    var Icon = props.icon, onClick = props.onClick, title = props.title, className = props.className, rest = __rest(props, ["icon", "onClick", "title", "className"]);
    return (jsxRuntimeExports.jsxs("button", __assign({ title: title, onClick: onClick, className: "app-icon-button ".concat(className) }, rest, { children: [jsxRuntimeExports.jsx("div", { className: "app-icon-button-anim" }), jsxRuntimeExports.jsx(Icon, { className: "app-icon-button-icon" })] })));
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
                width: isMobileScreen ? "100%" : "400px",
                height: isMobileScreen ? "100%" : "600px",
                position: "fixed",
                bottom: isMobileScreen ? "0" : "100px",
                right: isMobileScreen ? "0" : "30px",
                borderRadius: isMobileScreen ? "0" : "12px",
                backgroundColor: "#fff",
                display: "none",
            };
        case IframeType.CHAT_CONTAINER_OPEN:
            return {
                border: "none",
                boxShadow: "#32325d40 0px 50px 100px -20px, #0000004d 0px 30px 60px -30px",
                width: isMobileScreen ? "100%" : "400px",
                height: isMobileScreen ? "100%" : "600px",
                position: "fixed",
                bottom: isMobileScreen ? "0" : "100px",
                right: isMobileScreen ? "0" : "30px",
                borderRadius: isMobileScreen ? "0" : "12px",
                backgroundColor: "#fff",
            };
        case IframeType.CHAT_OPEN_BUTTON:
            return {
                display: isChatOpen && isMobileScreen ? "none" : "block",
                border: "none",
                width: "54px",
                height: "54px",
                position: "fixed",
                bottom: "24px",
                right: "24px",
                borderRadius: "50%",
            };
        default:
            return {
                border: "none",
            };
    }
};
var IFrame = function (props) {
    var _a, _b, _c;
    var children = props.children, iframeType = props.iframeType, rest = __rest(props, ["children", "iframeType"]);
    var _d = useState(null), contentRef = _d[0], setContentRef = _d[1];
    var _e = useData(), isChatOpen = _e.isChatOpen, setIsMobileScreen = _e.setIsMobileScreen;
    var _f = useState(getStyles(iframeType, isChatOpen, false)), styles = _f[0], setStyles = _f[1];
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
    useEffect(function () {
        handleWindowResize();
    }, [iframeType, isChatOpen]);
    useEffect(function () {
        window.addEventListener("resize", handleWindowResize);
        return function () {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    useEffect(function () {
        if (mountNode) {
            mountNode.style = "margin: 0;";
            addStyles();
        }
    }, [mountNode]);
    return (jsxRuntimeExports.jsx("iframe", __assign({ style: styles }, rest, { onLoad: isFirefox ? function (e) { return setContentRef(e.target); } : undefined, ref: !isFirefox ? setContentRef : undefined }, { children: mountNode && createPortal(children, mountNode) })));
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
    var node = useRef(null);
    var bubbledEventTarget = useRef(null);
    var mountedRef = useRef(false);
    /**
     * Prevents the bubbled event from getting triggered immediately
     * https://github.com/facebook/react/issues/20074
     */
    useEffect(function () {
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
    useEffect(function () {
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
    return React__default.Children.only(cloneElement(children, (_b = {
            ref: handleChildRef
        },
        _b[mappedFocusEvent] = handleBubbledEvents(mappedFocusEvent),
        _b[mappedMouseEvent] = handleBubbledEvents(mappedMouseEvent),
        _b[mappedTouchEvent] = handleBubbledEvents(mappedTouchEvent),
        _b)));
};

// THIS FILE IS AUTO GENERATED
function RiChatSmile3Fill (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H2L4.92893 19.0711C3.11929 17.2614 2 14.7614 2 12C2 6.47715 6.47715 2 12 2ZM16 13H8C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13Z"}}]})(props);
}function RiCloseFill (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"}}]})(props);
}function RiUser6Fill (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.0009 17C15.6633 17 18.8659 18.5751 20.608 20.9247L18.766 21.796C17.3482 20.1157 14.8483 19 12.0009 19C9.15346 19 6.6535 20.1157 5.23577 21.796L3.39453 20.9238C5.13673 18.5747 8.33894 17 12.0009 17ZM12.0009 2C14.7623 2 17.0009 4.23858 17.0009 7V10C17.0009 12.7614 14.7623 15 12.0009 15C9.23945 15 7.00087 12.7614 7.00087 10V7C7.00087 4.23858 9.23945 2 12.0009 2Z"}}]})(props);
}

var classnamesExports = {};
var classnames = {
  get exports(){ return classnamesExports; },
  set exports(v){ classnamesExports = v; },
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var classNames = classnamesExports;

const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const DEFAULT_MIN_BREAKPOINT = 'xs';
const ThemeContext = /*#__PURE__*/React.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
  const {
    breakpoints
  } = useContext(ThemeContext);
  return breakpoints;
}
function useBootstrapMinBreakpoint() {
  const {
    minBreakpoint
  } = useContext(ThemeContext);
  return minBreakpoint;
}

// TODO

const FormContext = /*#__PURE__*/React.createContext({});
var FormContext$1 = FormContext;

const FormRange = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext$1);
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

var PopupItemFilters = function () {
    var _a = useData(), chatFilters = _a.chatFilters, setChatFilters = _a.setChatFilters;
    var handleFilterValue = function (e) {
        var _a;
        setChatFilters(__assign(__assign({}, chatFilters), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    return (jsxRuntimeExports.jsxs(PopupContents, __assign({ title: "Chatbot Personality", className: "popup-contents-filters" }, { children: [jsxRuntimeExports.jsxs("div", __assign({ className: "chip-buttons-wrapper" }, { children: [jsxRuntimeExports.jsx("button", __assign({ className: "app-chip-button", title: "Reset" }, { children: "Reset" })), jsxRuntimeExports.jsx("button", __assign({ className: "app-chip-button", title: "Discard Changes" }, { children: "Discard Changes" }))] })), jsxRuntimeExports.jsxs("div", __assign({ className: "filters-wrapper" }, { children: [jsxRuntimeExports.jsxs("div", __assign({ className: "filter" }, { children: [jsxRuntimeExports.jsxs("div", __assign({ className: "slider-filter-datalist" }, { children: [jsxRuntimeExports.jsx("span", __assign({ className: "slider-option" }, { children: "Friendly" })), jsxRuntimeExports.jsx("span", __assign({ className: "slider-option" }, { children: "Professional" }))] })), jsxRuntimeExports.jsx(FormRange$1, { name: "tone", value: chatFilters.tone, min: 0, max: 1, step: 0.1, onChange: handleFilterValue, className: "form-range" })] })), jsxRuntimeExports.jsxs("div", __assign({ className: "filter" }, { children: [jsxRuntimeExports.jsxs("div", __assign({ className: "slider-filter-datalist" }, { children: [jsxRuntimeExports.jsx("span", __assign({ className: "slider-option" }, { children: "Opinionated" })), jsxRuntimeExports.jsx("span", __assign({ className: "slider-option" }, { children: "Neutral" }))] })), jsxRuntimeExports.jsx(FormRange$1, { name: "sentiment", value: chatFilters.sentiment, min: 0, max: 1, step: 0.1, onChange: handleFilterValue, className: "form-range" })] })), jsxRuntimeExports.jsxs("div", __assign({ className: "filter" }, { children: [jsxRuntimeExports.jsxs("div", __assign({ className: "slider-filter-datalist" }, { children: [jsxRuntimeExports.jsx("span", __assign({ className: "slider-option" }, { children: "Many emojis" })), jsxRuntimeExports.jsx("span", __assign({ className: "slider-option" }, { children: "No emojis" }))] })), jsxRuntimeExports.jsx(FormRange$1, { name: "emotiveness", value: chatFilters.emotiveness, min: 0, max: 1, step: 0.1, onChange: handleFilterValue, className: "form-range" })] })), jsxRuntimeExports.jsxs("div", __assign({ className: "filter" }, { children: [jsxRuntimeExports.jsxs("div", __assign({ className: "slider-filter-datalist" }, { children: [jsxRuntimeExports.jsx("span", __assign({ className: "slider-option" }, { children: "Long answers" })), jsxRuntimeExports.jsx("span", __assign({ className: "slider-option" }, { children: "Short answers" }))] })), jsxRuntimeExports.jsx(FormRange$1, { name: "length", value: chatFilters.length, min: 0, max: 1, step: 0.1, onChange: handleFilterValue, className: "form-range" })] }))] }))] })));
};

var PopupItemInfo = function () {
    return (jsxRuntimeExports.jsxs(PopupContents, __assign({ title: "Welcome to What2Study", className: "popup-infobox" }, { children: [jsxRuntimeExports.jsxs("p", __assign({ className: "info-text" }, { children: ["What2Study is a ", jsxRuntimeExports.jsx("span", { children: "chatbot" }), " that was developed to support in all your question and endeavors concerning ", jsxRuntimeExports.jsx("span", { children: "studies" }), "."] })), jsxRuntimeExports.jsx("p", __assign({ className: "info-text-title" }, { children: "Please keep in mind:" })), jsxRuntimeExports.jsxs("p", __assign({ className: "info-text" }, { children: ["What2Study is not a ", jsxRuntimeExports.jsx("span", { children: "person" }), ". Many people were involved in its development and throughly tested weather its responses or suggestions were accurate and helpful. Still, we ", jsxRuntimeExports.jsx("span", { children: "can't guarantee" }), " that every answer given by this chatbot is correct. You need to validate crucial information for yourself."] }))] })));
};

var propTypesExports = {};
var propTypes$2 = {
  get exports(){ return propTypesExports; },
  set exports(v){ propTypesExports = v; },
};

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

var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

const pascalCase = str => str[0].toUpperCase() + camelize(str).slice(1);
// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/React.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const componentProps = {
      ...defaultProps,
      ...props
    };
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/jsxRuntimeExports.jsx(Tag, {
      ref: ref,
      className: classNames(className, resolvedPrefix),
      ...componentProps
    });
  });
  BsComponent.displayName = displayName;
  return BsComponent;
}

/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */
function hasChildOfType(children, type) {
  return React.Children.toArray(children).some(child => /*#__PURE__*/React.isValidElement(child) && child.type === type);
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
const Col = /*#__PURE__*/React.forwardRef(
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
  type: propTypesExports.string,
  /** Display feedback as a tooltip. */
  tooltip: propTypesExports.bool,
  as: propTypesExports.elementType
};
const Feedback = /*#__PURE__*/React.forwardRef(
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

const FormCheckInput = /*#__PURE__*/React.forwardRef(({
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
  } = useContext(FormContext$1);
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

const FormCheckLabel = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext$1);
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

const FormCheck = /*#__PURE__*/React.forwardRef(({
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
  } = useContext(FormContext$1);
  const innerFormContext = useMemo(() => ({
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

const FormControl = /*#__PURE__*/React.forwardRef(({
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
  } = useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-control');
  let classes;
  if (plaintext) {
    classes = {
      [`${bsPrefix}-plaintext`]: true
    };
  } else {
    classes = {
      [bsPrefix]: true,
      [`${bsPrefix}-${size}`]: size
    };
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
    ...props,
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classNames(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === 'color' && `${bsPrefix}-color`)
  });
});
FormControl.displayName = 'FormControl';
var FormControl$1 = Object.assign(FormControl, {
  Feedback: Feedback$1
});

var FormFloating = createWithBsPrefix('form-floating');

const FormGroup = /*#__PURE__*/React.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = useMemo(() => ({
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

const FormLabel = /*#__PURE__*/React.forwardRef(({
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
  } = useContext(FormContext$1);
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

const FormSelect = /*#__PURE__*/React.forwardRef(({
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
  } = useContext(FormContext$1);
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

const FormText = /*#__PURE__*/React.forwardRef(
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

const Switch = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/jsxRuntimeExports.jsx(FormCheck$1, {
  ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
var Switch$1 = Object.assign(Switch, {
  Input: FormCheck$1.Input,
  Label: FormCheck$1.Label
});

const FloatingLabel = /*#__PURE__*/React.forwardRef(({
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
  _ref: propTypesExports.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: propTypesExports.bool,
  as: propTypesExports.elementType
};
const Form = /*#__PURE__*/React.forwardRef(({
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
  Floating: FormFloating,
  Check: FormCheck$1,
  Switch: Switch$1,
  Label: FormLabel$1,
  Text: FormText$1,
  Range: FormRange$1,
  Select: FormSelect$1,
  FloatingLabel: FloatingLabel$1
});

var dummyUserAssumptions = ["Studies design", "22 year old", "University of Bielefeld"];
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
    };
    return (jsxRuntimeExports.jsxs(PopupContents, __assign({ title: "Settings", className: "popup-settings-wrapper" }, { children: [jsxRuntimeExports.jsx("div", __assign({ className: "chip-button-wrapper" }, { children: jsxRuntimeExports.jsx("button", __assign({ className: "app-chip-button" }, { children: "Restart Intro" })) })), jsxRuntimeExports.jsxs("div", __assign({ className: "setting-block language-select-wrapper" }, { children: [jsxRuntimeExports.jsx("span", __assign({ className: "block-title" }, { children: "Language" })), jsxRuntimeExports.jsx(FormSelect$1, __assign({ value: language, size: "sm", className: "language-select", onChange: handleLanguage }, { children: Object.values(EChatLanguage).map(function (lang) { return (jsxRuntimeExports.jsx("option", __assign({ value: lang }, { children: getLanguage(lang) }))); }) }))] })), jsxRuntimeExports.jsxs("div", __assign({ className: "setting-block user-assumptions" }, { children: [jsxRuntimeExports.jsx("span", __assign({ className: "block-title" }, { children: "User Assumption" })), jsxRuntimeExports.jsx("div", __assign({ className: "chips-wrapper" }, { children: dummyUserAssumptions.map(function (assumption) {
                            return (jsxRuntimeExports.jsxs("span", __assign({ className: "app-chip-with-close-btn" }, { children: [assumption, jsxRuntimeExports.jsx("button", __assign({ className: "close-btn" }, { children: jsxRuntimeExports.jsx(IoCloseSharp, { className: "close-icon" }) }))] })));
                        }) }))] }))] })));
};

var PopupContents = function (props) {
    var title = props.title, children = props.children, className = props.className;
    var setPopupItem = useData().setPopupItem;
    return (jsxRuntimeExports.jsxs("div", __assign({ className: "popup-content" }, { children: [jsxRuntimeExports.jsxs("div", __assign({ className: "popup-content-header" }, { children: [jsxRuntimeExports.jsx("h3", __assign({ className: "popup-content-title" }, { children: title })), jsxRuntimeExports.jsx("button", __assign({ className: "popup-close-button", "aria-label": "Close", onClick: function () { return setPopupItem(EPopupItem.NONE); } }, { children: jsxRuntimeExports.jsx(RiCloseFill, { className: "popup-close-icon" }) }))] })), jsxRuntimeExports.jsx("div", __assign({ className: "popup-content-body ".concat(className) }, { children: children }))] })));
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
            return jsxRuntimeExports.jsx(Fragment, {});
    }
};
var PopupScreen = function () {
    var _a = useData(), popupItem = _a.popupItem, setPopupItem = _a.setPopupItem;
    if (popupItem === EPopupItem.NONE)
        return jsxRuntimeExports.jsx(Fragment, {});
    return (jsxRuntimeExports.jsx(ClickAwayListener, __assign({ onClickAway: function () { return setPopupItem(EPopupItem.NONE); } }, { children: jsxRuntimeExports.jsx("div", __assign({ className: "popup-screen" }, { children: getPopupContent(popupItem) })) })));
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
}function MdOutlineWarningAmber (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}}]})(props);
}

var IntroPage = function () {
    var setCurrentRoute = useData().setCurrentRoute;
    var _a = useState(0), introPage = _a[0], setIntroPage = _a[1];
    var _b = useState(false), isVideoOpen = _b[0], setIsVideoOpen = _b[1];
    return (jsxRuntimeExports.jsx(Fragment, { children: jsxRuntimeExports.jsxs("div", __assign({ className: "introScreen-wrapper" }, { children: [isVideoOpen && (jsxRuntimeExports.jsxs("div", __assign({ className: "video-wrapper" }, { children: [jsxRuntimeExports.jsx(IconButton, { icon: MdCancel, onClick: function () { return setIsVideoOpen(false); } }), jsxRuntimeExports.jsx("iframe", { width: "100%", height: "200", src: "https://www.youtube.com/embed/p2rgGbp36K0", title: "YouTube video player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true })] }))), introPage == 0 && (jsxRuntimeExports.jsxs("div", __assign({ className: "is-contentWrapper" }, { children: [jsxRuntimeExports.jsx("img", { src: "https://i.ibb.co/rcrz1c6/bot-icon.png", className: "is-icon", alt: "Bot Icon" }), jsxRuntimeExports.jsx("div", __assign({ className: "is-infoBlock" }, { children: jsxRuntimeExports.jsxs("p", __assign({ className: "is-block-text" }, { children: ["Hello. It's nice to meet you!", " ", jsxRuntimeExports.jsx("span", __assign({ className: "is-block-bold" }, { children: "I am a chatbot" })), " built to help you with your studies! Before we get started, here are a few important facts."] })) })), jsxRuntimeExports.jsxs("button", __assign({ className: "play-tutorial-button", onClick: function () { return setIsVideoOpen(true); } }, { children: [jsxRuntimeExports.jsx("div", __assign({ className: "pt-iconWrapper" }, { children: jsxRuntimeExports.jsx(BsFillPlayCircleFill, { className: "pt-icon" }) })), jsxRuntimeExports.jsx("span", __assign({ className: "pt-button-name" }, { children: "Play Tutorial" }))] })), jsxRuntimeExports.jsx("button", __assign({ className: "is-tochat-button" }, { children: "To Chat" }))] }))), introPage == 1 && (jsxRuntimeExports.jsxs("div", __assign({ className: "is-contentWrapper" }, { children: [jsxRuntimeExports.jsx("img", { src: "https://i.ibb.co/rcrz1c6/bot-icon.png", className: "is-icon", alt: "Bot Icon" }), jsxRuntimeExports.jsx("div", __assign({ className: "is-infoBlock" }, { children: jsxRuntimeExports.jsxs("p", __assign({ className: "is-block-text" }, { children: ["Hello. It's nice to meet you!", " ", jsxRuntimeExports.jsx("span", __assign({ className: "is-block-bold" }, { children: "I am a chatbot" })), " built to help you with your studies! Before we get started, here are a few important facts."] })) })), jsxRuntimeExports.jsx("div", __assign({ className: "is-infoBlock" }, { children: jsxRuntimeExports.jsxs("p", __assign({ className: "is-block-text" }, { children: ["Hello. It's nice to meet you!", " ", jsxRuntimeExports.jsx("span", __assign({ className: "is-block-bold" }, { children: "I am a chatbot" })), " built to help you with your studies! Before we get started, here are a few important facts."] })) })), jsxRuntimeExports.jsx("button", __assign({ className: "is-tochat-button" }, { children: "To Chat" }))] }))), jsxRuntimeExports.jsx("button", __assign({ className: "is-okayNextButton", onClick: function () {
                        return introPage < 1 ? setIntroPage(introPage + 1) : setCurrentRoute(ERoute.MAIN);
                    } }, { children: "Okay!" }))] })) }));
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
var EMessageTypes;
(function (EMessageTypes) {
    EMessageTypes["BOT"] = "BOT";
    EMessageTypes["USER"] = "USER";
})(EMessageTypes || (EMessageTypes = {}));
var dummyMessages = [
    {
        type: EMessageTypes.BOT,
        message: "Hey! This is you what2study bot. How can I help you?",
    },
    // {
    //     type: EMessageTypes.USER,
    //     message: "Hi. I'm looking for a masters course in Economics.",
    // },
];
var Main = function () {
    var _a = useData(), setPopupItem = _a.setPopupItem, isBotVolumeOn = _a.isBotVolumeOn, setIsBotVolumeOn = _a.setIsBotVolumeOn, setCurrentRoute = _a.setCurrentRoute;
    var _b = useState(false), isInputFocused = _b[0], setIsInputFocused = _b[1];
    var _c = useState(""), message = _c[0], setMessage = _c[1];
    var _d = useState(dummyMessages), messages = _d[0], setMessages = _d[1];
    var _e = useState(false), loading = _e[0], setLoading = _e[1];
    var messagesEndRef = useRef(null);
    var handleUserMessage = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var params, options, resJson, response_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e === null || e === void 0 ? void 0 : e.preventDefault();
                    setLoading(true);
                    setMessage("");
                    if (message.trim() === "")
                        return [2 /*return*/];
                    setMessages(__spreadArray(__spreadArray([], messages, true), [{ type: EMessageTypes.USER, message: message }], false));
                    params = {
                        question: message,
                        botId: "",
                        sessionId: "",
                    };
                    options = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(params),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(chatEndpoint, options)];
                case 2:
                    resJson = _a.sent();
                    return [4 /*yield*/, resJson.json()];
                case 3:
                    response_1 = _a.sent();
                    setMessages(function (prev) {
                        return __spreadArray(__spreadArray([], prev, true), [
                            {
                                type: EMessageTypes.BOT,
                                message: response_1.answer,
                            },
                        ], false);
                    });
                    setLoading(false);
                    return [3 /*break*/, 5];
                case 4:
                    _a.sent();
                    setMessages(function (prev) {
                        return __spreadArray(__spreadArray([], prev, true), [
                            {
                                type: EMessageTypes.BOT,
                                message: "Something went wrong! Please try again.",
                            },
                        ], false);
                    });
                    setLoading(false);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleMessageFeedback = function (msg, feedback) {
        var messagesWithFeedback = __spreadArray([], messages, true);
        var newMessages = messagesWithFeedback.map(function (msgObj) {
            return msgObj.message == msg
                ? __assign(__assign({}, msgObj), { feedback: feedback }) : msgObj;
        });
        setMessages(newMessages);
    };
    var scrollToBottom = function () {
        var _a;
        (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(function () {
        scrollToBottom();
    }, [messages]);
    return (jsxRuntimeExports.jsxs(Fragment, { children: [jsxRuntimeExports.jsxs("div", __assign({ className: "info-talktohuman" }, { children: [jsxRuntimeExports.jsx(IconButton, { className: "info-button", icon: MdInfoOutline, onClick: function () { return setPopupItem(EPopupItem.BOT_INFO); }, "aria-label": "Info", title: "Info" }), jsxRuntimeExports.jsx("button", __assign({ className: "talk-to-human-btn", onClick: function () { return setCurrentRoute(ERoute.TALK_TO_HUMAN); } }, { children: "Want to talk to human?" })), jsxRuntimeExports.jsx(IconButton, { className: "volume-button", icon: isBotVolumeOn ? IoMdVolumeHigh : IoMdVolumeOff, onClick: function () { return setIsBotVolumeOn(!isBotVolumeOn); }, "aria-label": "Volume", title: isBotVolumeOn ? "Mute" : "Play" })] })), jsxRuntimeExports.jsxs("div", __assign({ className: "chatContainer" }, { children: [messages.map(function (_a, index) {
                        var message = _a.message, type = _a.type, feedback = _a.feedback;
                        return (jsxRuntimeExports.jsxs("div", __assign({ className: "messageWrapper ".concat(type === EMessageTypes.BOT ? "botMessageWrapper" : "userMessageWrapper") }, { children: [type === EMessageTypes.BOT && (jsxRuntimeExports.jsx("div", __assign({ className: "bot-iconWrapper" }, { children: jsxRuntimeExports.jsx(RiChatSmile3Fill, { className: "botIcon" }) }))), jsxRuntimeExports.jsxs("div", __assign({ className: "message ".concat(type === EMessageTypes.BOT ? "botMessage" : "userMessage") }, { children: [message, type === EMessageTypes.BOT && (jsxRuntimeExports.jsxs("div", __assign({ className: "bot-msg-actions-wrapper" }, { children: [jsxRuntimeExports.jsx("button", __assign({ title: "Report", className: "action-button", onClick: console.log }, { children: jsxRuntimeExports.jsx(MdOutlineWarningAmber, { className: "action-icon" }) })), jsxRuntimeExports.jsx("button", __assign({ title: "Like", className: "action-button", onClick: function () {
                                                        if (feedback === true)
                                                            return;
                                                        handleMessageFeedback(message, typeof feedback !== "undefined" ? !feedback : true);
                                                    } }, { children: feedback === true ? (jsxRuntimeExports.jsx(MdThumbUpAlt, { className: "action-icon" })) : (jsxRuntimeExports.jsx(MdOutlineThumbUpOffAlt, { className: "action-icon" })) })), jsxRuntimeExports.jsx("button", __assign({ title: "Dislike", className: "action-button", onClick: function () {
                                                        if (feedback === false)
                                                            return;
                                                        handleMessageFeedback(message, typeof feedback !== "undefined" ? !feedback : false);
                                                    } }, { children: feedback === false ? (jsxRuntimeExports.jsx(MdThumbDownAlt, { className: "action-icon" })) : (jsxRuntimeExports.jsx(MdOutlineThumbDownOffAlt, { className: "action-icon" })) })), jsxRuntimeExports.jsx("button", __assign({ title: "Regenrate Response", className: "action-button", onClick: console.log }, { children: jsxRuntimeExports.jsx(MdReplay, { className: "action-icon" }) }))] })))] })), type === EMessageTypes.USER && (jsxRuntimeExports.jsx("div", __assign({ className: "user-iconWrapper" }, { children: jsxRuntimeExports.jsx(RiUser6Fill, { className: "userIcon" }) })))] }), index));
                    }), loading && (jsxRuntimeExports.jsxs("div", __assign({ className: "messageWrapper botMessageWrapper" }, { children: [jsxRuntimeExports.jsx("div", __assign({ className: "bot-iconWrapper" }, { children: jsxRuntimeExports.jsx(RiChatSmile3Fill, { className: "botIcon" }) })), jsxRuntimeExports.jsx("div", __assign({ className: "typing-anim-wrapper" }, { children: jsxRuntimeExports.jsx("div", { className: "typing-dot-pulse" }) }))] }))), jsxRuntimeExports.jsx("div", { ref: messagesEndRef })] })), jsxRuntimeExports.jsxs("form", __assign({ className: "inputFormWrapper", onSubmit: handleUserMessage }, { children: [jsxRuntimeExports.jsx(IconButton, { icon: BsFillMicFill, onClick: console.log, className: "voice-input-button" }), jsxRuntimeExports.jsx("input", { className: "inputField ".concat(isInputFocused ? "inputFieldFocused" : ""), type: "text", value: message, onChange: function (e) { return setMessage(e.target.value); }, onFocus: function () { return setIsInputFocused(true); }, onBlur: function () { return setIsInputFocused(false); } }), jsxRuntimeExports.jsx("button", __assign({ type: "submit", className: "sendButton", onClick: handleUserMessage }, { children: jsxRuntimeExports.jsx(IoSend, { className: "buttonIcon" }) }))] }))] }));
};

var DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var TalkToHuman = function () {
    var setCurrentRoute = useData().setCurrentRoute;
    var _a = useState(true), useSavedEmail = _a[0], setUseSavedEmail = _a[1];
    var _b = useState(""), phoneInput = _b[0], setPhoneInput = _b[1];
    var _c = useState({
        day: "Sat",
        time: "09:00",
    }), preferredDayTime = _c[0], setPreferredDayTime = _c[1];
    return (jsxRuntimeExports.jsxs("div", __assign({ className: "talkToHuman-wrapper" }, { children: [jsxRuntimeExports.jsx("div", __assign({ className: "navbar" }, { children: jsxRuntimeExports.jsxs("button", __assign({ className: "navBackBtn", onClick: function () { return setCurrentRoute(ERoute.MAIN); } }, { children: [jsxRuntimeExports.jsx(IoChevronBack, { className: "navIcon" }), jsxRuntimeExports.jsx("span", __assign({ className: "navText" }, { children: "Back" }))] })) })), jsxRuntimeExports.jsxs("div", __assign({ className: "contact-details-wrapper" }, { children: [jsxRuntimeExports.jsxs("a", __assign({ className: "contact-detail", href: "tel:+49 9086 4577209" }, { children: [jsxRuntimeExports.jsx("div", __assign({ className: "contact-icon-wrapper" }, { children: jsxRuntimeExports.jsx(IoIosCall, { className: "contact-icon" }) })), jsxRuntimeExports.jsx("span", __assign({ className: "contact-text" }, { children: "+49 9086 4577209" }))] })), jsxRuntimeExports.jsxs("a", __assign({ target: "_blank", className: "contact-detail contact-email", href: "mailto:registration@uni-siegen.de" }, { children: [jsxRuntimeExports.jsx("div", __assign({ className: "contact-icon-wrapper" }, { children: jsxRuntimeExports.jsx(MdEmail, { className: "contact-icon" }) })), jsxRuntimeExports.jsx("span", __assign({ className: "contact-text" }, { children: "registration@uni-siegen.de" }))] }))] })), jsxRuntimeExports.jsx("div", { className: "divider" }), jsxRuntimeExports.jsxs("div", __assign({ className: "tth-data-wrapper" }, { children: [jsxRuntimeExports.jsx("p", __assign({ className: "tth-info-text" }, { children: "Write a message to Central Student Advisory Service:" })), jsxRuntimeExports.jsx(FloatingLabel$1, __assign({ controlId: "floatingTextarea", label: "Your message", className: "tth-message" }, { children: jsxRuntimeExports.jsx(Form$1.Control, { as: "textarea", placeholder: "Your message...", style: { height: "90px" } }) })), jsxRuntimeExports.jsx(Form$1.Check, { name: "send-chat-details", "aria-label": "Send chat details", label: "Send chat details", defaultChecked: true }), jsxRuntimeExports.jsxs("div", __assign({ className: "contact-email" }, { children: [jsxRuntimeExports.jsx("p", __assign({ className: "tth-info-text" }, { children: "Please leave an email that the ZSB can use to contact you:" })), jsxRuntimeExports.jsx(Form$1.Check, { type: "radio", name: "email-address", checked: useSavedEmail, onClick: function () { return setUseSavedEmail(true); }, label: jsxRuntimeExports.jsxs(Fragment, { children: ["Use saved email id", " ", jsxRuntimeExports.jsx("span", __assign({ className: "email-address-saved" }, { children: "somebody.nobody@example.com" }))] }) }), jsxRuntimeExports.jsx(Form$1.Check, { type: "radio", name: "email-address", checked: !useSavedEmail, onClick: function () { return setUseSavedEmail(false); }, label: "Use a different email address" }), jsxRuntimeExports.jsx(Form$1.Control, { type: "text", placeholder: "Enter email address", disabled: useSavedEmail })] })), jsxRuntimeExports.jsxs("div", __assign({ className: "contact-email" }, { children: [jsxRuntimeExports.jsx("p", __assign({ className: "tth-info-text" }, { children: "Would you like to be called with the answer?" })), jsxRuntimeExports.jsx(Form$1.Control, { type: "tel", onChange: function (e) { return setPhoneInput(e.target.value); }, value: phoneInput, placeholder: "Enter contact number" }), phoneInput.trim() !== "" && (jsxRuntimeExports.jsxs("div", __assign({ className: "day-time-input-wrapper" }, { children: [jsxRuntimeExports.jsx("p", __assign({ className: "tth-info-text" }, { children: "What is the best time to call you?" })), jsxRuntimeExports.jsx("div", __assign({ className: "day-wrapper" }, { children: DAYS.map(function (day) { return (jsxRuntimeExports.jsx("span", __assign({ className: "day-select ".concat(preferredDayTime.day === day ? "day-selected" : ""), onClick: function () {
                                                return setPreferredDayTime(__assign(__assign({}, preferredDayTime), { day: day }));
                                            } }, { children: day }))); }) })), jsxRuntimeExports.jsx(Form$1.Control, { type: "time", value: preferredDayTime.time, onChange: function (e) {
                                            return setPreferredDayTime(__assign(__assign({}, preferredDayTime), { time: e.target.value }));
                                        } })] })))] }))] }))] })));
};

var getScreenAsPerRoute = function (route) {
    switch (route) {
        case ERoute.INTRO:
            return jsxRuntimeExports.jsx(IntroPage, {});
        case ERoute.MAIN:
            return jsxRuntimeExports.jsx(Main, {});
        case ERoute.TALK_TO_HUMAN:
            return jsxRuntimeExports.jsx(TalkToHuman, {});
        default:
            return jsxRuntimeExports.jsx(Fragment, {});
    }
};
var ChatContainer = function () {
    var _a = useData(), isChatOpen = _a.isChatOpen, isMobileScreen = _a.isMobileScreen, setIsChatOpen = _a.setIsChatOpen, setPopupItem = _a.setPopupItem, currentRoute = _a.currentRoute;
    return (jsxRuntimeExports.jsxs(IFrame, __assign({ iframeType: isChatOpen ? IframeType.CHAT_CONTAINER_OPEN : IframeType.CHAT_CONTAINER_CLOSED }, { children: [jsxRuntimeExports.jsx(PopupScreen, {}), jsxRuntimeExports.jsxs("div", __assign({ className: "chatContainerWrapper" }, { children: [jsxRuntimeExports.jsxs("div", __assign({ className: "header-wrapper" }, { children: [jsxRuntimeExports.jsxs("div", __assign({ className: "header" }, { children: [jsxRuntimeExports.jsx(GiGraduateCap, { className: "header-icon" }), jsxRuntimeExports.jsx("h1", __assign({ className: "header-title" }, { children: "What2Study" }))] })), jsxRuntimeExports.jsxs("div", __assign({ className: "settings-wrapper" }, { children: [jsxRuntimeExports.jsx(IconButton, { icon: LuSettings2, onClick: function () { return setPopupItem(EPopupItem.FILTERS); }, "aria-label": "Filters", title: "Filters" }), jsxRuntimeExports.jsx(IconButton, { icon: IoSettingsSharp, onClick: function () { return setPopupItem(EPopupItem.SETTINGS); }, "aria-label": "Settings", title: "Settings" }), isMobileScreen && (jsxRuntimeExports.jsx(IconButton, { icon: IoClose, onClick: function () { return setIsChatOpen(false); }, "aria-label": "Close", title: "Close" }))] }))] })), getScreenAsPerRoute(currentRoute)] }))] })));
};

// THIS FILE IS AUTO GENERATED
function BiChevronDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(props);
}

var OpenChatButton = function (props) {
    var icon = props.icon;
    var _a = useData(), isChatOpen = _a.isChatOpen, setIsChatOpen = _a.setIsChatOpen, setPopupItem = _a.setPopupItem;
    var Icon = !isChatOpen ? icon : BiChevronDown;
    var handleOpenChatButtonClick = function () {
        setIsChatOpen(!isChatOpen);
        setPopupItem(EPopupItem.NONE);
    };
    return (jsxRuntimeExports.jsx(IFrame, __assign({ iframeType: IframeType.CHAT_OPEN_BUTTON }, { children: jsxRuntimeExports.jsx("button", __assign({ 
            // inline styles for button as loading stylesheets takes time on browser (causes to show button without styles)
            style: __assign({ width: "48px", height: "48px", margin: "3px", boxShadow: "0px 2px 3px 0px #9b9b9b", backgroundColor: "#0c8de9", border: "none", borderRadius: "50%", cursor: "pointer" }, (isChatOpen
                ? {
                    backgroundColor: "#f0f0f0",
                }
                : {})), onClick: handleOpenChatButtonClick }, { children: jsxRuntimeExports.jsx(Icon, { style: __assign({ fontSize: "22px", color: "#ffffff" }, (isChatOpen ? { color: "#000000" } : {})) }) })) })));
};

var ChatClient = function () {
    return (jsxRuntimeExports.jsxs(Fragment, { children: [jsxRuntimeExports.jsx(ChatContainer, {}), jsxRuntimeExports.jsx(OpenChatButton, { icon: BsChatQuoteFill })] }));
};

var LOCALSTORAGE_SESSION_ID_KEY = "what2studyUserSessionId";
var App = function () {
    return (jsxRuntimeExports.jsx(DataProvider, { children: jsxRuntimeExports.jsx(ChatClient, {}) }));
};

export { LOCALSTORAGE_SESSION_ID_KEY, App as default };
