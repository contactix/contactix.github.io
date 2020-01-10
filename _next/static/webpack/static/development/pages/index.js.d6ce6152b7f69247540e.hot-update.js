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
      var user, database, ref;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = authData.user;
              console.log(user);
              database = _base__WEBPACK_IMPORTED_MODULE_13__["default"].database();
              ref = database.ref("");

              _this.setState({
                email: user.email,
                displayName: user.displayName,
                photo: user.photoURL
              });

              _this.props.hideMes();

            case 6:
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
                displayName: null,
                route: "Home"
              });

              _this.props.showMes();

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "logoutAndDelete", function _callee3() {
      var _user$providerData$;

      var user, provider, authProvider;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              user = firebase__WEBPACK_IMPORTED_MODULE_12___default.a.auth().currentUser;
              provider = (user === null || user === void 0 ? void 0 : (_user$providerData$ = user.providerData[0]) === null || _user$providerData$ === void 0 ? void 0 : _user$providerData$.providerId) === "google.com" ? "Google" : "Facebook";
              authProvider = new firebase__WEBPACK_IMPORTED_MODULE_12___default.a.auth["".concat(provider, "AuthProvider")]();
              _context3.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_base__WEBPACK_IMPORTED_MODULE_13__["default"].auth().signInWithPopup(authProvider).then(function (authData) {
                firebase__WEBPACK_IMPORTED_MODULE_12___default.a.auth().currentUser["delete"]().then(function () {
                  _this.setState({
                    email: null,
                    displayName: null,
                    route: "Home"
                  });
                });
              }));

            case 5:
              _this.props.showMes();

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      });
    });

    _this.state = {
      email: null,
      displayName: null,
      photo: null,
      route: "Home",
      views: 0,
      disabledLogin: true
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

        _this2.setState({
          disabledLogin: false
        });
      });
      fetch("https://api.github.com/repos/contactix/contactix.github.io/traffic/views").then(function (res) {
        return res.json();
      }).then(function (res) {
        return _this2.setState({
          views: res.count
        });
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
          return _this3.state.disabledLogin ? {} : _this3.authenticate("Facebook");
        },
        className: "button_login"
      }), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginButton"], {
        onClick: function onClick() {
          return _this3.state.disabledLogin ? {} : _this3.authenticate("Google");
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
        marginTop: 3
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        span: 4
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        color: this.state.route === "Home" ? "lightGray" : "white"
      }, __jsx("div", {
        onClick: function onClick(e) {
          return _this3.changeRoute('Home');
        },
        className: "tab"
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        align: "center"
      }, "Home")))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        span: 4
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        color: this.state.route === "Rank" ? "lightGray" : "white"
      }, __jsx("div", {
        onClick: function onClick(e) {
          return _this3.changeRoute('Rank');
        },
        className: "tab"
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        align: "center"
      }, "Rank")))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        span: 4
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        color: this.state.route === "Logout" ? "lightGray" : "white"
      }, __jsx("div", {
        onClick: function onClick(e) {
          return _this3.changeRoute('Logout');
        },
        className: "tab"
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        align: "center"
      }, "Logout"))))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Divider"], null), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        display: this.state.route === "Home" ? "block" : "none"
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        alignItems: "center",
        direction: "row",
        display: "flex",
        paddingX: 2,
        paddingY: 1,
        color: "lightGray",
        shape: "rounded",
        margin: 2,
        dangerouslySetInlineStyle: {
          __style: {
            cursor: "pointer",
            opacity: this.props.currentPlayer === "#0080ff" ? "100%" : "50%"
          }
        }
      }, __jsx("div", {
        className: "avatar"
      }, __jsx(react_hexagon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        backgroundImage: this.state.photo + "?type=large",
        style: {
          strokeWidth: 20,
          stroke: "#0080ff"
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
        margin: 2,
        dangerouslySetInlineStyle: {
          __style: {
            cursor: "pointer",
            opacity: this.props.currentPlayer === "#e50000" ? "100%" : "50%"
          }
        }
      }, __jsx("div", {
        className: "avatar"
      }, __jsx(react_hexagon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        backgroundImage: this.state.photo + "?type=large",
        style: {
          strokeWidth: 20,
          stroke: "#e50000"
        }
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        paddingX: 1,
        marginLeft: 3
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        weight: "bold",
        truncate: true
      }, this.state.displayName), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        truncate: true
      }, "joined 2 years ago")))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        display: this.state.route === "Logout" ? "block" : "none"
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        padding: 2,
        marginTop: 2
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        align: "center"
      }, "THANK YOU!")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        padding: 2
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "blue",
        onClick: function onClick() {
          return _this3.logout();
        },
        text: "Logout"
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        align: "center"
      }, "OR"), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        padding: 2
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "red",
        onClick: function onClick() {
          return _this3.logoutAndDelete();
        },
        text: "Logout and remove all data"
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        paddingY: 3
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        align: "center",
        color: "gray"
      }, "For more information: Please contact hexacon.app@gmail.com")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        paddingY: 2
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        align: "center",
        weight: "bold"
      }, "Total ", this.state.views ? this.state.views : 0, " visistors"))))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
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

/***/ })

})
//# sourceMappingURL=index.js.d6ce6152b7f69247540e.hot-update.js.map