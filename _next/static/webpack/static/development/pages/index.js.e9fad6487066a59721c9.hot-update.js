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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "changeRoute", function (route) {
      _this.setState({
        route: route
      });
    });

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
      photo: null,
      route: "Home"
    };
    return _this;
  }

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

      return __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        height: "100vh",
        overflow: "hidden"
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        height: "60vh"
      }, !this.state.email ? __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], null, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        paddingY: 3,
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        weight: "bold",
        align: "center"
      }, "WELLCOME TO CONTACTI ", __jsx("div", {
        className: "X"
      }, __jsx(react_hexagon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        style: {
          strokeWidth: 50,
          fill: "#0080ff",
          stroke: "#000000"
        }
      })), __jsx("div", {
        className: "X"
      }, __jsx(react_hexagon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        style: {
          strokeWidth: 50,
          fill: "#e50000",
          stroke: "#000000"
        }
      })))), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginButton"], {
        onClick: function onClick() {
          return _this3.authenticate("Facebook");
        },
        className: "button_login"
      }), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginButton"], {
        onClick: function onClick() {
          return _this3.authenticate("Google");
        },
        className: "button_login"
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        paddingY: 3
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        align: "center",
        color: "gray"
      }, "For more information: Please contact hexacon.app@gmail.com"))) : __jsx("div", null, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        paddingY: 1,
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        weight: "bold",
        align: "center"
      }, "CONTACTI ", __jsx("div", {
        className: "X"
      }, __jsx(react_hexagon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        style: {
          strokeWidth: 50,
          fill: "#0080ff",
          stroke: "#000000"
        }
      })), __jsx("div", {
        className: "X"
      }, __jsx(react_hexagon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        style: {
          strokeWidth: 50,
          fill: "#e50000",
          stroke: "#000000"
        }
      })))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        display: "flex",
        paddingY: 3
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        span: 4
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], null, __jsx("div", {
        onClick: function onClick(e) {
          return _this3.changeRoute('Home');
        }
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        align: "center"
      }, "Home")))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        span: 4
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], null, __jsx("div", {
        onClick: function onClick(e) {
          return _this3.changeRoute('Home');
        }
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        align: "center"
      }, "Rank")))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        span: 4
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], null, __jsx("div", {
        onClick: function onClick(e) {
          return _this3.changeRoute('Home');
        }
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        align: "center"
      }, "Logout"))))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], null, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        alignItems: "center",
        direction: "row",
        display: "flex",
        paddingX: 2,
        paddingY: 1,
        color: "lightGray",
        shape: "rounded",
        margin: 2
      }, __jsx("div", {
        className: "avatar",
        paddingX: 1
      }, __jsx(react_hexagon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        backgroundImage: this.state.photo + "?type=large",
        style: {
          strokeWidth: 20,
          stroke: "#999999"
        }
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        paddingX: 1,
        marginLeft: 3
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        weight: "bold",
        truncate: true
      }, this.state.displayName), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        truncate: true
      }, "joined 2 years ago"))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        alignItems: "center",
        direction: "row",
        display: "flex",
        paddingX: 2,
        paddingY: 1,
        color: "lightGray",
        shape: "rounded",
        margin: 2
      }, __jsx("div", {
        className: "avatar",
        paddingX: 1
      }, __jsx(react_hexagon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        backgroundImage: this.state.photo + "?type=large",
        style: {
          strokeWidth: 20,
          stroke: "#999999"
        }
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        paddingX: 1,
        marginLeft: 3
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        weight: "bold",
        truncate: true
      }, this.state.displayName), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        truncate: true
      }, "joined 2 years ago")))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], null, __jsx("button", {
        onClick: function onClick() {
          return _this3.logout();
        }
      }, "Logout")))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        height: "40vh",
        paddingX: 2
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        weight: "bold",
        size: "sm"
      }, "Advertisement")));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js":
false,

/***/ "./node_modules/@material-ui/core/esm/NoSsr/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Paper/Paper.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Paper/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js":
false,

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Tab/Tab.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Tab/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Tabs/TabScrollButton.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Tabs/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/animate.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/createSvgIcon.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/debounce.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/focusVisible.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/setRef.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/useForkRef.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/StylesProvider/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/createStyles/createStyles.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/createStyles/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/getThemeProps/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/jssPreset/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/mergeClasses/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/styled/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/styled/styled.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/useTheme/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/useTheme/useTheme.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/withStyles/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/withStyles/withStyles.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/withTheme/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/withTheme/withTheme.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/chainPropTypes.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/deepmerge.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/elementAcceptingRef.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/exactProp.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/getDisplayName.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/index.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/ponyfillGlobal.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/refType.js":
false,

/***/ "./node_modules/clsx/dist/clsx.m.js":
false,

/***/ "./node_modules/css-vendor/dist/css-vendor.esm.js":
false,

/***/ "./node_modules/dom-helpers/esm/addClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/hyphenate-style-name/index.js":
false,

/***/ "./node_modules/is-in-browser/dist/module.js":
false,

/***/ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js":
false,

/***/ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
false,

/***/ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js":
false,

/***/ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js":
false,

/***/ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
false,

/***/ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js":
false,

/***/ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js":
false,

/***/ "./node_modules/jss/dist/jss.esm.js":
false,

/***/ "./node_modules/normalize-scroll-left/esm/main.js":
false,

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/Transition.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
false,

/***/ "./node_modules/react-transition-group/esm/config.js":
false,

/***/ "./node_modules/react-transition-group/esm/index.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
false,

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
false

})
//# sourceMappingURL=index.js.e9fad6487066a59721c9.hot-update.js.map