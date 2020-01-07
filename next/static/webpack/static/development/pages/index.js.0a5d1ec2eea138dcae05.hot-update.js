webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hexagon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hexagon */ "./node_modules/react-hexagon/lib/Hexagon.js");
/* harmony import */ var react_hexagon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_hexagon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var gestalt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gestalt */ "./node_modules/gestalt/dist/gestalt.es.js");
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-social-login-buttons */ "./node_modules/react-social-login-buttons/dist/index.js");
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./base */ "./components/base.js");
/* harmony import */ var gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gestalt/dist/gestalt.css */ "./node_modules/gestalt/dist/gestalt.css");
/* harmony import */ var gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_14__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var Menu =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Menu, _React$Component);

  function Menu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Menu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Menu).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "authenticate", function (provider) {
      var authProvider = new firebase__WEBPACK_IMPORTED_MODULE_12___default.a.auth["".concat(provider, "AuthProvider")]();
      _base__WEBPACK_IMPORTED_MODULE_13__["default"].auth().signInWithPopup(authProvider).then(_this.authHandler);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "authHandler", function _callee(authData) {
      var user;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = authData.user;
              console.log(user);

              _this.setState({
                email: user.email,
                displayName: user.displayName,
                photo: user.photoURL
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "logout", function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(firebase__WEBPACK_IMPORTED_MODULE_12___default.a.auth().signOut());

            case 2:
              _this.setState({
                email: null,
                displayName: null
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    });

    _this.state = {
      email: null,
      displayName: null,
      photo: null
    };
    return _this;
  } //xác thực theo provider


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      firebase__WEBPACK_IMPORTED_MODULE_12___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          _this2.authHandler({
            user: user
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.state.email) {
        return __jsx("button", {
          className: "ui facebook button",
          onClick: function onClick() {
            return _this3.authenticate("Facebook");
          }
        }, __jsx("i", {
          className: "facebook icon"
        }), "Login with Facebook");
      }

      return __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        height: "100vh",
        overflow: "hidden"
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        height: "50vh"
      }, __jsx("button", {
        onClick: function onClick() {
          return _this3.logout();
        }
      }, "Logout"), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], null, this.state.displayName), __jsx("img", {
        src: this.state.photo + "?type=large"
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        height: "50vh",
        paddingX: 2
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        weight: "bold"
      }, "Advertisement")));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./node_modules/react-social-login-buttons/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-social-login-buttons/dist/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){e.exports=n(4)()},function(e,t,n){"use strict";e.exports=n(2)},function(e,t,n){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(3),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,i,a,c){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,c],l=0;(e=Error(t.replace(/%s/g,function(){return u[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function O(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||m}function S(){}function x(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||m}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=O.prototype;var E=x.prototype=new S;E.constructor=x,r(E,O.prototype),E.isPureReactComponent=!0;var j={current:null},k={current:null},F=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,n){var r=void 0,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)F.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var _=/\/+/g,T=[];function z(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function B(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var u=!1;if(null===t)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case i:case a:u=!0}}if(u)return r(o,t,""===n?"."+R(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=n+R(c=t[l],l);u+=e(c,f,r,o)}else if(f=null===t||"object"!=typeof t?null:"function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(c=t.next()).done;)u+=e(c=c.value,f=n+R(c,l++),r,o);else"object"===c&&b("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,r,n,function(e){return e}):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function V(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(_,"$&/")+"/"),B(e,I,t=z(t,i,r,o)),M(t)}function A(){var e=j.current;return null===e&&b("321"),e}var H={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return V(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;B(e,$,t=z(null,null,t,n)),M(t)},count:function(e){return B(e,function(){return null},null)},toArray:function(e){var t=[];return V(e,t,null,function(e){return e}),t},only:function(e){return P(e)||b("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return A().useCallback(e,t)},useContext:function(e,t){return A().useContext(e,t)},useEffect:function(e,t){return A().useEffect(e,t)},useImperativeHandle:function(e,t,n){return A().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return A().useLayoutEffect(e,t)},useMemo:function(e,t){return A().useMemo(e,t)},useReducer:function(e,t,n){return A().useReducer(e,t,n)},useRef:function(e){return A().useRef(e)},useState:function(e){return A().useState(e)},Fragment:c,StrictMode:u,Suspense:d,createElement:L,cloneElement:function(e,t,n){null==e&&b("267",e);var o=void 0,a=r({},e.props),c=e.key,u=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,l=k.current),void 0!==t.key&&(c=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)F.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];a.children=f}return{$$typeof:i,type:e.type,key:c,ref:u,props:a,_owner:l}},createFactory:function(e){var t=L.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:j,ReactCurrentOwner:k,assign:r}},D={default:H},q=D&&H||D;e.exports=q.default||q},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,c,u=a(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(u[f]=n[f]);if(r){c=r(n);for(var s=0;s<c.length;s++)i.call(n,c[s])&&(u[c[s]]=n[c[s]])}}return u}},function(e,t,n){"use strict";var r=n(5);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"FacebookLoginButton",function(){return L}),n.d(r,"GoogleLoginButton",function(){return T}),n.d(r,"GithubLoginButton",function(){return B}),n.d(r,"TwitterLoginButton",function(){return I}),n.d(r,"AmazonLoginButton",function(){return H}),n.d(r,"InstagramLoginButton",function(){return N}),n.d(r,"LinkedInLoginButton",function(){return W}),n.d(r,"MicrosoftLoginButton",function(){return J}),n.d(r,"BufferLoginButton",function(){return X}),n.d(r,"createButton",function(){return k}),n.d(r,"createSvgIcon",function(){return F});var o=n(1),i=n.n(o),a=n(0),c=n.n(a),u=function(e){var t=e.name,n=e.size,r=e.format;return i.a.createElement("i",{className:r(t),style:{fontSize:n}})};u.propTypes={format:c.a.func,name:c.a.string.isRequired,size:c.a.oneOfType([c.a.string,c.a.number]).isRequired},u.defaultProps={format:function(e){return"demo-icon icon-".concat(e)},size:26};var l=u,f=function(e){var t=e.type,n=e.size,r=e.format;return"string"==typeof t?i.a.createElement(l,{format:r,name:t,size:n}):i.a.createElement(t,{size:n})};f.propTypes={format:c.a.func,size:c.a.oneOfType([c.a.number,c.a.string]),type:c.a.oneOfType([c.a.string,c.a.node,c.a.func])};var s=f;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=this,o=(e=g(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==y(o)&&"function"!=typeof o?v(r):o,m(v(n),"state",{focused:!1,hovered:!1}),m(v(n),"handleMouseEnter",function(){n.setState({hovered:!0}),"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter()}),m(v(n),"handleMouseLeave",function(){n.setState({hovered:!1}),"function"==typeof n.props.onMouseLeave&&n.props.onMouseLeave()}),m(v(n),"handleFocus",function(){n.setState({focused:!0})}),m(v(n),"handleBlur",function(){n.setState({focused:!1})}),m(v(n),"handleClick",function(){"function"==typeof n.props.onClick&&n.props.onClick()}),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.activeStyle,n=e.align,r=e.text,o=e.children,a=void 0===o?r:o,c=e.className,u=e.icon,l=e.iconFormat,f=e.iconSize,p=e.preventActiveStyles,y=e.size,h=e.style,g=this.state,v=g.focused,b=g.hovered,m=O(S.button,{activeStyle:p?h:t,customStyle:h,active:b||v,size:y});return i.a.createElement("button",d({style:m,onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur},{className:c}),i.a.createElement("div",{style:S.flex},i.a.createElement("div",{style:{display:"flex",justifyContent:"center",minWidth:f}},i.a.createElement(s,{type:u,size:f,format:l})),i.a.createElement("div",{style:S.divider}),i.a.createElement("div",{style:{textAlign:n,width:"100%"}},a)))}}])&&h(n.prototype,r),a&&h(n,a),t}(),O=function(e,t){var n=t.size,r=t.customStyle,o=t.active,i=t.activeStyle;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{height:n},r,{},o&&i)};w.propTypes={activeStyle:c.a.object,align:c.a.oneOf(["left","right","center"]),children:c.a.node,className:c.a.string,icon:c.a.oneOfType([c.a.string,c.a.node,c.a.func]),iconFormat:c.a.func,iconSize:c.a.string,onClick:c.a.func,onMouseEnter:c.a.func,onMouseLeave:c.a.func,preventActiveStyles:c.a.bool,size:c.a.string,style:c.a.object,text:c.a.string},w.defaultProps={align:"left",iconSize:"26px",preventActiveStyles:!1,size:"50px"};var S={button:{display:"block",border:0,borderRadius:3,boxShadow:"rgba(0, 0, 0, 0.5) 0 1px 2px",color:"#ffffff",cursor:"pointer",fontSize:"19px",margin:"5px",width:"calc(100% - 10px)",overflow:"hidden",padding:"0 10px",userSelect:"none"},divider:{width:"10px"},flex:{alignItems:"center",display:"flex",height:"100%"}};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){j(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){return function(t){var n=E({activeStyle:E({},e.activeStyle,{},t.activeStyle)},e,{},t,{style:E({},e.style,{},t.style)});return i.a.createElement(w,n)}},F=function(e){return function(t){var n=t.size;return i.a.createElement(e,{width:n,height:n})}},C={activeStyle:{background:"#293e69"},icon:F(P),style:{background:"#3b5998"},text:"Login with Facebook"},L=k(C);function P(e){var t=e.width,n=e.height;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 0 90 90"},i.a.createElement("g",null,i.a.createElement("path",{d:"M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z",fill:"#FFFFFF"})))}P.propTypes={width:c.a.oneOfType([c.a.number,c.a.string]),height:c.a.oneOfType([c.a.number,c.a.string])};var _={activeStyle:{background:"#a5331c"},icon:F(z),style:{background:"#cb3f22"},text:"Login with Google"},T=k(_);function z(e){var t=e.width,n=e.height;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,fill:"#ffffff",viewBox:"0 0 50 50"},i.a.createElement("g",null,i.a.createElement("path",{d:"M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z "})))}z.propTypes={width:c.a.oneOfType([c.a.number,c.a.string]),height:c.a.oneOfType([c.a.number,c.a.string])};var M={activeStyle:{background:"#555555"},icon:F(R),style:{background:"#333333"},text:"Login with GitHub"},B=k(M);function R(e){var t=e.width,n=e.height;return i.a.createElement("svg",{fill:"#ffffff",role:"img",viewBox:"0 0 24 24",width:t,height:n,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))}R.propTypes={width:c.a.oneOfType([c.a.number,c.a.string]),height:c.a.oneOfType([c.a.number,c.a.string])};var $={activeStyle:{background:"#3b82da"},icon:F(V),style:{background:"#5aa4eb"},text:"Login with Twitter"},I=k($);function V(e){var t=e.width,n=e.height;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 0 24 24"},i.a.createElement("path",{fill:"#FFFFFF",d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}))}V.propTypes={width:c.a.oneOfType([c.a.number,c.a.string]),height:c.a.oneOfType([c.a.number,c.a.string])};var A={activeStyle:{background:"#ff9f23"},icon:F(D),style:{background:"#f9ae32"},text:"Login with Amazon"},H=k(A);function D(e){var t=e.width,n=void 0===t?24:t,r=e.height,o=void 0===r?24:r;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"white",width:n,height:o,viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.383-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66.704-3.716 4.06-4.838 7.066-4.838 1.537 0 3.547.41 4.758 1.574 1.538 1.436 1.392 3.352 1.392 5.438v4.923c0 1.481.616 2.13 1.192 2.929.204.287.247.63-.01.839-.647.541-1.794 1.537-2.423 2.099l-.008-.007zm3.559 1.988c-2.748 1.472-5.735 2.181-8.453 2.181-4.027 0-7.927-1.393-11.081-3.706-.277-.202-.481.154-.251.416 2.925 3.326 6.786 5.326 11.076 5.326 3.061 0 6.614-1.214 9.066-3.494.406-.377.058-.945-.357-.723zm.67 2.216c-.091.227.104.32.31.147 1.339-1.12 1.685-3.466 1.411-3.804-.272-.336-2.612-.626-4.04.377-.22.154-.182.367.062.337.805-.096 2.595-.312 2.913.098.319.41-.355 2.094-.656 2.845z",fillRule:"evenodd",clipRule:"evenodd"}))}D.propTypes={width:c.a.oneOfType([c.a.number,c.a.string]),height:c.a.oneOfType([c.a.number,c.a.string])};var q={activeStyle:{background:"linear-gradient(to right, rgb(214, 146, 60) 0%, rgb(160, 11, 143) 50%, rgb(56, 10, 115) 100%)"},icon:F(U),style:{background:"linear-gradient(to right, rgb(236, 146, 35) 0%, rgb(177, 42, 160) 50%, rgb(105, 14, 224) 100%)"},text:"Login with Instagram"},N=k(q);function U(e){var t=e.width,n=e.height;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 0 169.063 169.063"},i.a.createElement("g",null,i.a.createElement("path",{d:"M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z",fill:"#FFFFFF"}),i.a.createElement("path",{d:"M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z",fill:"#FFFFFF"}),i.a.createElement("path",{d:"M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z",fill:"#FFFFFF"})))}U.propTypes={width:c.a.oneOfType([c.a.number,c.a.string]),height:c.a.oneOfType([c.a.number,c.a.string])};var G={activeStyle:{background:"rgb(7, 112, 169)"},icon:F(Y),style:{background:"rgb(26, 129, 185)"},text:"Login with LinkedIn"},W=k(G);function Y(e){var t=e.width,n=e.height;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 0 430.117 430.117"},i.a.createElement("g",null,i.a.createElement("path",{id:"LinkedIn",d:"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z",fill:"#FFFFFF"})))}Y.propTypes={width:c.a.oneOfType([c.a.number,c.a.string]),height:c.a.oneOfType([c.a.number,c.a.string])};var Z={activeStyle:{background:"rgb(0, 137, 255)"},icon:F(K),style:{background:"rgb(50, 159, 253)"},text:"Login with Microsoft"},J=k(Z);function K(e){var t=e.width,n=e.height;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 0 480 480"},i.a.createElement("g",null,i.a.createElement("path",{d:"M0.176,224L0.001,67.963l192-26.072V224H0.176z M224.001,37.241L479.937,0v224H224.001V37.241z M479.999,256l-0.062,224   l-255.936-36.008V256H479.999z M192.001,439.918L0.157,413.621L0.147,256h191.854V439.918z",fill:"#FFFFFF"})))}K.propTypes={width:c.a.oneOfType([c.a.number,c.a.string]),height:c.a.oneOfType([c.a.number,c.a.string])};var Q={activeStyle:{background:"#1171BB"},icon:F(ee),style:{background:"#168EEA"},text:"Login with Buffer"},X=k(Q);function ee(e){var t=e.width,n=e.height;return i.a.createElement("svg",{"aria-labelledby":"simpleicons-buffer-icon",role:"img",viewBox:"0 0 24 24",width:t,height:n,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M23.784 18.24c.287.142.287.267 0 .374l-11.357 5.223c-.287.145-.57.145-.854 0L.213 18.614c-.284-.107-.284-.232 0-.375l2.722-1.23c.284-.14.57-.14.852 0l7.787 3.573c.285.14.57.14.854 0l7.787-3.574c.283-.14.568-.14.852 0l2.717 1.23zm0-6.454c.287.143.287.285 0 .426L12.427 17.44c-.287.104-.57.104-.854 0L.213 12.21c-.284-.143-.284-.284 0-.426l2.722-1.227c.284-.144.57-.144.852 0l7.787 3.57c.285.144.57.144.854 0l7.787-3.57c.283-.144.568-.144.852 0l2.717 1.226zM.214 5.76c-.285-.143-.285-.267 0-.375L11.574.16c.283-.14.57-.14.852 0l11.358 5.23c.287.107.287.232 0 .375l-11.357 5.223c-.287.143-.57.143-.854 0L.213 5.76z",fill:"#FFFFFF"}))}ee.propTypes={width:c.a.oneOfType([c.a.number,c.a.string]),height:c.a.oneOfType([c.a.number,c.a.string])},n.d(t,"FacebookLoginButton",function(){return L}),n.d(t,"GoogleLoginButton",function(){return T}),n.d(t,"GithubLoginButton",function(){return B}),n.d(t,"TwitterLoginButton",function(){return I}),n.d(t,"AmazonLoginButton",function(){return H}),n.d(t,"InstagramLoginButton",function(){return N}),n.d(t,"LinkedInLoginButton",function(){return W}),n.d(t,"MicrosoftLoginButton",function(){return J}),n.d(t,"BufferLoginButton",function(){return X}),n.d(t,"createButton",function(){return k}),n.d(t,"createSvgIcon",function(){return F});t.default=r}]);

/***/ })

})
//# sourceMappingURL=index.js.0a5d1ec2eea138dcae05.hot-update.js.map