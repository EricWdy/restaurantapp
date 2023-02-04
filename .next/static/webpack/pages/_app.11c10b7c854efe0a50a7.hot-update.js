webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\\u9053\u5143\\Documents\\\u5168\u6808\u8BFE\u7A0B\\Week28\\set Apollo\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function MyApp(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem,
      user = _useContext.user,
      setUser = _useContext.setUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cart: cart
  }),
      state = _useState[0],
      setState = _useState[1];

  var Component = props.Component,
      pageProps = props.pageProps;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      urState = _useState2[0],
      seturState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isAuth = _useState3[0],
      setisAuth = _useState3[1]; // setUser = (user) => {
  //   setState({ user });
  // };


  addItem = function addItem(item) {
    var items = state.cart.items; //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++

    var foundItem = true;

    if (items.length > 0) {
      foundItem = items.find(function (i) {
        return i.id === item.id;
      });
      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    console.log("Found Item value: ".concat(JSON.stringify(foundItem))); // if item is not new, add to cart, set quantity to 1

    if (!foundItem) {
      //set quantity property to 1
      var temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.cart.items), [temp]),
        total: state.cart.total + item.price
      };
      setState({
        cart: newCart
      });
      console.log("Total items: ".concat(JSON.stringify(newCart)));
    } else {
      // we already have it so just increase quantity ++
      console.log("Total so far:  ".concat(state.cart.total));
      newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price
      };
    }

    setState({
      cart: newCart
    }); // problem is this is not updated yet

    console.log("state reset to cart:".concat(JSON.stringify(state)));
  };

  removeItem = function removeItem(item) {
    var items = state.cart.items; //check for item already in cart

    var foundItem = items.find(function (i) {
      return i.id === item.id;
    });

    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity - 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price
      }; //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      console.log("Try remove item ".concat(JSON.stringify(foundItem)));
      var index = items.findIndex(function (i) {
        return i.id === foundItem.id;
      });
      items.splice(index, 1);
      var newCart = {
        items: items,
        total: state.cart.total - item.price
      };
    }

    setState({
      cart: newCart
    });
  };

  console.log('isAuth is' & isAuth);
  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      cart: state.cart,
      addItem: addItem,
      removeItem: removeItem,
      isAuthenticated: isAuth,
      setisAuth: setisAuth,
      user: urState,
      setUser: seturState
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }))));
}

_s(MyApp, "7icYeJEaiWbdYxNIfLAB5OrYUU0=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVyU3RhdGUiLCJzZXR1clN0YXRlIiwiaXNBdXRoIiwic2V0aXNBdXRoIiwiaXRlbSIsIml0ZW1zIiwiZm91bmRJdGVtIiwibGVuZ3RoIiwiZmluZCIsImkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidGVtcCIsInBhcnNlIiwicXVhbnRpdHkiLCJuZXdDYXJ0IiwidG90YWwiLCJwcmljZSIsIm1hcCIsIk9iamVjdCIsImFzc2lnbiIsImluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiaXNBdXRoZW50aWNhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXFCO0FBQUE7O0FBQUEsb0JBQzRCQyx3REFBVSxDQUFDQywyREFBRCxDQUR0QztBQUFBLE1BQ2RDLElBRGMsZUFDZEEsSUFEYztBQUFBLE1BQ1RDLE9BRFMsZUFDVEEsT0FEUztBQUFBLE1BQ0RDLFVBREMsZUFDREEsVUFEQztBQUFBLE1BQ1dDLElBRFgsZUFDV0EsSUFEWDtBQUFBLE1BQ2lCQyxPQURqQixlQUNpQkEsT0FEakI7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUM7QUFBQ0wsUUFBSSxFQUFDQTtBQUFOLEdBQUQsQ0FGZDtBQUFBLE1BRVpNLEtBRlk7QUFBQSxNQUVOQyxRQUZNOztBQUFBLE1BR1hDLFNBSFcsR0FHY1gsS0FIZCxDQUdYVyxTQUhXO0FBQUEsTUFHQUMsU0FIQSxHQUdj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S0FBRCxDQUFSO0FBQ0QsR0F0QkQ7O0FBdUJBUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFjVixNQUExQjtBQUNBLFNBQ0UsTUFBQywyREFBRCxDQUFZLFFBQVo7QUFBcUIsU0FBSyxFQUFFO0FBQUNaLFVBQUksRUFBRU0sS0FBSyxDQUFDTixJQUFiO0FBQW1CQyxhQUFPLEVBQUVBLE9BQTVCO0FBQXFDQyxnQkFBVSxFQUFFQSxVQUFqRDtBQUE2RG1DLHFCQUFlLEVBQUN6QixNQUE3RTtBQUFxRkMsZUFBUyxFQUFDQSxTQUEvRjtBQUEwR1YsVUFBSSxFQUFDTyxPQUEvRztBQUF3SE4sYUFBTyxFQUFDTztBQUFoSSxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsWUFETjtBQUVFLFFBQUksRUFBQyx1RUFGUDtBQUdFLGFBQVMsRUFBQyx5RUFIWjtBQUlFLGVBQVcsRUFBQyxXQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBVUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFELHlGQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixDQVZGLENBREY7QUFrQkQ7O0dBL0ZRYixLOztLQUFBQSxLO0FBa0dNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjExYzEwYjdjODU0ZWZlMGE1MGE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaW5kZXhcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCJcblxuXG5mdW5jdGlvbiBNeUFwcChwcm9wcyl7XG4gIHZhciB7Y2FydCxhZGRJdGVtLHJlbW92ZUl0ZW0sIHVzZXIsIHNldFVzZXJ9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoe2NhcnQ6Y2FydH0pO1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgW3VyU3RhdGUsc2V0dXJTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdFtpc0F1dGgsc2V0aXNBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAvLyBzZXRVc2VyID0gKHVzZXIpID0+IHtcbiAgLy8gICBzZXRTdGF0ZSh7IHVzZXIgfSk7XG4gIC8vIH07XG5cbiAgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcbiAgICAvL2lmIG5vdCBpbiBjYXJ0LCBhZGQgaXRlbSBpZiBpdGVtIGlzIGZvdW5kIGluY3JlYXNlIHF1YW5pdHkgKytcbiAgICBsZXQgZm91bmRJdGVtID0gdHJ1ZTtcbiAgICBpZihpdGVtcy5sZW5ndGggPiAwKXtcbiAgICAgIGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuICAgICBcbiAgICAgIGlmKCFmb3VuZEl0ZW0pIGZvdW5kSXRlbSA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgZm91bmRJdGVtID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBGb3VuZCBJdGVtIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YClcbiAgICAvLyBpZiBpdGVtIGlzIG5vdCBuZXcsIGFkZCB0byBjYXJ0LCBzZXQgcXVhbnRpdHkgdG8gMVxuICAgIGlmICghZm91bmRJdGVtKSB7XG4gICAgICAvL3NldCBxdWFudGl0eSBwcm9wZXJ0eSB0byAxXG4gICAgXG4gICAgICBsZXQgdGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICAgICAgdGVtcC5xdWFudGl0eSA9IDE7XG4gICAgICB2YXIgbmV3Q2FydCA9IHtcbiAgICAgICAgICBpdGVtczogWy4uLnN0YXRlLmNhcnQuaXRlbXMsdGVtcF0sXG4gICAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgfVxuICAgICAgc2V0U3RhdGUoe2NhcnQ6bmV3Q2FydH0pXG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgaXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkobmV3Q2FydCl9YClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2UgYWxyZWFkeSBoYXZlIGl0IHNvIGp1c3QgaW5jcmVhc2UgcXVhbnRpdHkgKytcbiAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBzbyBmYXI6ICAke3N0YXRlLmNhcnQudG90YWx9YClcbiAgICAgIG5ld0NhcnQ9IHtcbiAgICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PntcbiAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCl7XG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9KVxuICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfX0pLFxuICAgICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRTdGF0ZSh7Y2FydDogbmV3Q2FydH0pOyAgLy8gcHJvYmxlbSBpcyB0aGlzIGlzIG5vdCB1cGRhdGVkIHlldFxuICAgIGNvbnNvbGUubG9nKGBzdGF0ZSByZXNldCB0byBjYXJ0OiR7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfWApXG4gICAgIFxuICB9O1xuICByZW1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcbiAgICAvL2NoZWNrIGZvciBpdGVtIGFscmVhZHkgaW4gY2FydFxuICAgIGNvbnN0IGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuICAgIGlmIChmb3VuZEl0ZW0ucXVhbnRpdHkgPiAxKSB7XG4gICAgICB2YXIgbmV3Q2FydCA9IHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT57XG4gICAgICAgIGlmKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCl7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgLSAxIH0pXG4gICAgICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9fSksXG4gICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UsXG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKGBOZXdDYXJ0IGFmdGVyIHJlbW92ZTogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKVxuICAgIH0gZWxzZSB7IC8vIG9ubHkgMSBpbiB0aGUgY2FydCBzbyByZW1vdmUgdGhlIHdob2xlIGl0ZW1cbiAgICAgIGNvbnNvbGUubG9nKGBUcnkgcmVtb3ZlIGl0ZW0gJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApXG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PT0gZm91bmRJdGVtLmlkKTtcbiAgICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB2YXIgbmV3Q2FydD0geyBpdGVtczogaXRlbXMsIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSB9IFxuICAgIH1cbiAgICBzZXRTdGF0ZSh7Y2FydDpuZXdDYXJ0fSk7XG4gIH1cbiAgY29uc29sZS5sb2coJ2lzQXV0aCBpcycgJiBpc0F1dGgpXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjYXJ0OiBzdGF0ZS5jYXJ0LCBhZGRJdGVtOiBhZGRJdGVtLCByZW1vdmVJdGVtOiByZW1vdmVJdGVtLCBpc0F1dGhlbnRpY2F0ZWQ6aXNBdXRoLCBzZXRpc0F1dGg6c2V0aXNBdXRoLCB1c2VyOnVyU3RhdGUsIHNldFVzZXI6c2V0dXJTdGF0ZX19PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICBcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG4gIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==