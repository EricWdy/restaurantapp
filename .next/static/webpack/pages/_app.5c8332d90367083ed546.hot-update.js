webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/cart.js":
/*!****************************!*\
  !*** ./components/cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\u9053\u5143\\Documents\\\u5168\u6808\u8BFE\u7A0B\\Week28\\set Apollo\\components\\cart.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // we can pass cart data in via props method
// the alternative is using useContext as below

function Cart() {
  _s();

  var _this = this;

  // let isAuthenticated = true;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem,
      isAuthenticated = _useContext.isAuthenticated; //const [cartA, setCartA] = useState({cart})
  //cart = value.cart;
  //console.log('props:'+ JSON.stringify(value));


  console.log("in CART: ".concat(JSON.stringify(cart))); //   problem is that cart may not be set

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log("Router Path: ".concat(JSON.stringify(router)));

  var renderItems = function renderItems() {
    var items = cart.items;
    console.log("items: ".concat(JSON.stringify(items)));

    if (items && items.length) {
      var itemList = cart.items.map(function (item) {
        if (item.quantity > 0) {
          return __jsx("div", {
            className: "items-one",
            style: {
              marginBottom: 15
            },
            key: item.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 13
            }
          }, __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }
          }, __jsx("span", {
            id: "item-price",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }
          }, "\xA0 $", item.price), __jsx("span", {
            id: "item-name",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 17
            }
          }, "\xA0 ", item.name)), __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }
          }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 5,
              marginLeft: 10
            },
            onClick: function onClick() {
              return addItem(item);
            },
            color: "link",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 17
            }
          }, "+"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 10
            },
            onClick: function onClick() {
              return removeItem(item);
            },
            color: "link",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }
          }, "-"), __jsx("span", {
            style: {
              marginLeft: 5
            },
            id: "item-quantity",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }
          }, item.quantity, "x")));
        }
      });
      return itemList;
    } else {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 14
        }
      });
    }
  };

  var checkoutItems = function checkoutItems() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
      style: {
        width: 200,
        padding: 10
      },
      color: "light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }
    }, __jsx("h5", {
      style: {
        fontWeight: 100,
        color: "gray"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, "Total:"), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }, "$", cart.total)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/checkout/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      style: {
        width: "60%"
      },
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }, "Order"))));
  }; // return Cart


  return isAuthenticated ? __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, "Cart"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    style: {
      padding: "10px 5px"
    },
    className: "cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    style: {
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "Your Order:"), __jsx("hr", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    style: {
      padding: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      marginBottom: 6
    },
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, "Items:")), __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, renderItems()), __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, checkoutItems()), console.log("Router Path: ".concat(router.asPath)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3161218026",
    __self: this
  }, "#item-price.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}#item-quantity.jsx-3161218026{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}#item-name.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6YGT5YWDXFxEb2N1bWVudHNcXOWFqOagiOivvueoi1xcV2VlazI4XFxzZXQgQXBvbGxvXFxjb21wb25lbnRzXFxjYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHa0IsQUFHMkIsQUFJQyxBQUtELGdCQVJVLEFBU0EsQ0FMUCxtQkFDVSxHQUovQixBQVNBLHVCQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xc6YGT5YWDXFxEb2N1bWVudHNcXOWFqOagiOivvueoi1xcV2VlazI4XFxzZXQgQXBvbGxvXFxjb21wb25lbnRzXFxjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBCYWRnZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyB3ZSBjYW4gcGFzcyBjYXJ0IGRhdGEgaW4gdmlhIHByb3BzIG1ldGhvZFxuLy8gdGhlIGFsdGVybmF0aXZlIGlzIHVzaW5nIHVzZUNvbnRleHQgYXMgYmVsb3dcbmZ1bmN0aW9uIENhcnQoKSB7XG4gIC8vIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICBsZXQgeyBjYXJ0LCBhZGRJdGVtLCByZW1vdmVJdGVtLCBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIC8vY29uc3QgW2NhcnRBLCBzZXRDYXJ0QV0gPSB1c2VTdGF0ZSh7Y2FydH0pXG4gIC8vY2FydCA9IHZhbHVlLmNhcnQ7XG4gIC8vY29uc29sZS5sb2coJ3Byb3BzOicrIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIGNvbnNvbGUubG9nKGBpbiBDQVJUOiAke0pTT04uc3RyaW5naWZ5KGNhcnQpfWApO1xuXG4gIC8vICAgcHJvYmxlbSBpcyB0aGF0IGNhcnQgbWF5IG5vdCBiZSBzZXRcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKGBSb3V0ZXIgUGF0aDogJHtKU09OLnN0cmluZ2lmeShyb3V0ZXIpfWApO1xuICBjb25zdCByZW5kZXJJdGVtcyA9ICgpID0+IHtcbiAgICBsZXQgeyBpdGVtcyB9ID0gY2FydDtcbiAgICBjb25zb2xlLmxvZyhgaXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkoaXRlbXMpfWApO1xuICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHZhciBpdGVtTGlzdCA9IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLW9uZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTUgfX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1wcmljZVwiPiZuYnNwOyAke2l0ZW0ucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+Jm5ic3A7IHtpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtKX1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0gaWQ9XCJpdGVtLXF1YW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX14XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGRpdj48L2Rpdj47XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGVja291dEl0ZW1zID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmFkZ2Ugc3R5bGU9e3sgd2lkdGg6IDIwMCwgcGFkZGluZzogMTAgfX0gY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAxMDAsIGNvbG9yOiBcImdyYXlcIiB9fT5Ub3RhbDo8L2g1PlxuICAgICAgICAgIDxoMz4ke2NhcnQudG90YWx9PC9oMz5cbiAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dC9cIj5cbiAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiIH19IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgPGE+T3JkZXI8L2E+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgLy8gcmV0dXJuIENhcnRcbiAgcmV0dXJuIGlzQXV0aGVudGljYXRlZCA/IChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNhcnQ8L2gxPlxuICAgICAgPENhcmQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDVweFwiIH19IGNsYXNzTmFtZT1cImNhcnRcIj5cbiAgICAgICAgPENhcmRUaXRsZSBzdHlsZT17eyBtYXJnaW46IDEwIH19PllvdXIgT3JkZXI6PC9DYXJkVGl0bGU+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYgfX0+XG4gICAgICAgICAgICA8c21hbGw+SXRlbXM6PC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PntyZW5kZXJJdGVtcygpfTwvZGl2PlxuICAgICAgICAgIDxkaXY+e2NoZWNrb3V0SXRlbXMoKX08L2Rpdj5cblxuICAgICAgICAgIHtjb25zb2xlLmxvZyhgUm91dGVyIFBhdGg6ICR7cm91dGVyLmFzUGF0aH1gKX1cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI2l0ZW0tcHJpY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XG4gICAgICAgIH1cbiAgICAgICAgI2l0ZW0tcXVhbnRpdHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgI2l0ZW0tbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICBjb2xvcjogcmdiYSg5NywgOTcsIDk3LCAxKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApIDogKDxkaXY+UGxlYXNlIHNpZ24gaW4gZmlyc3QhPC9kaXY+KVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\\u9053\u5143\\\\Documents\\\\\u5168\u6808\u8BFE\u7A0B\\\\Week28\\\\set Apollo\\\\components\\\\cart.js */")) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 8
    }
  }, "Please sign in first!");
}

_s(Cart, "dL5pJkiTwTF8hS5xfHPeIYA5+1c=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Cart;
/* harmony default export */ __webpack_exports__["default"] = (Cart);

var _c;

$RefreshReg$(_c, "Cart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsImlzQXV0aGVudGljYXRlZCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwicm91dGVyIiwidXNlUm91dGVyIiwicmVuZGVySXRlbXMiLCJpdGVtcyIsImxlbmd0aCIsIml0ZW1MaXN0IiwibWFwIiwiaXRlbSIsInF1YW50aXR5IiwibWFyZ2luQm90dG9tIiwiaWQiLCJwcmljZSIsIm5hbWUiLCJoZWlnaHQiLCJwYWRkaW5nIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJjaGVja291dEl0ZW1zIiwiZm9udFdlaWdodCIsImNvbG9yIiwidG90YWwiLCJtYXJnaW4iLCJhc1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUNBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDZDtBQURjLG9CQUV1Q0Msd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FGakQ7QUFBQSxNQUVSQyxJQUZRLGVBRVJBLElBRlE7QUFBQSxNQUVGQyxPQUZFLGVBRUZBLE9BRkU7QUFBQSxNQUVPQyxVQUZQLGVBRU9BLFVBRlA7QUFBQSxNQUVtQkMsZUFGbkIsZUFFbUJBLGVBRm5CLEVBR2Q7QUFDQTtBQUNBOzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLG9CQUF3QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWYsQ0FBeEIsR0FOYyxDQVFkOztBQUNBLE1BQU1RLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUwsU0FBTyxDQUFDQyxHQUFSLHdCQUE0QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVDLE1BQWYsQ0FBNUI7O0FBQ0EsTUFBTUUsV0FBVyxHQUFHLFNBQWRB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QTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNUCxXQUFXLEVBQWpCLENBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTWdCLGFBQWEsRUFBbkIsQ0FMRixFQU9HdEIsT0FBTyxDQUFDQyxHQUFSLHdCQUE0QkcsTUFBTSxDQUFDdUIsTUFBbkMsRUFQSCxDQUhGLENBRkY7QUFBQTtBQUFBO0FBQUEsbzRMQURvQixHQWdDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFoQ0w7QUFpQ0Q7O0dBcEhRbEMsSTtVQVNRWSxxRDs7O0tBVFJaLEk7QUFxSE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWM4MzMyZDkwMzY3MDgzZWQ1NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQmFkZ2UgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gd2UgY2FuIHBhc3MgY2FydCBkYXRhIGluIHZpYSBwcm9wcyBtZXRob2Rcbi8vIHRoZSBhbHRlcm5hdGl2ZSBpcyB1c2luZyB1c2VDb250ZXh0IGFzIGJlbG93XG5mdW5jdGlvbiBDYXJ0KCkge1xuICAvLyBsZXQgaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgbGV0IHsgY2FydCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICAvL2NvbnN0IFtjYXJ0QSwgc2V0Q2FydEFdID0gdXNlU3RhdGUoe2NhcnR9KVxuICAvL2NhcnQgPSB2YWx1ZS5jYXJ0O1xuICAvL2NvbnNvbGUubG9nKCdwcm9wczonKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICBjb25zb2xlLmxvZyhgaW4gQ0FSVDogJHtKU09OLnN0cmluZ2lmeShjYXJ0KX1gKTtcblxuICAvLyAgIHByb2JsZW0gaXMgdGhhdCBjYXJ0IG1heSBub3QgYmUgc2V0XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZyhgUm91dGVyIFBhdGg6ICR7SlNPTi5zdHJpbmdpZnkocm91dGVyKX1gKTtcbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoKSA9PiB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IGNhcnQ7XG4gICAgY29uc29sZS5sb2coYGl0ZW1zOiAke0pTT04uc3RyaW5naWZ5KGl0ZW1zKX1gKTtcbiAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgICB2YXIgaXRlbUxpc3QgPSBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5xdWFudGl0eSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1vbmVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tcHJpY2VcIj4mbmJzcDsgJHtpdGVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tbmFtZVwiPiZuYnNwOyB7aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSXRlbShpdGVtKX1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9eFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpdGVtTGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2hlY2tvdXRJdGVtcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJhZGdlIHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBhZGRpbmc6IDEwIH19IGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogMTAwLCBjb2xvcjogXCJncmF5XCIgfX0+VG90YWw6PC9oNT5cbiAgICAgICAgICA8aDM+JHtjYXJ0LnRvdGFsfTwvaDM+XG4gICAgICAgIDwvQmFkZ2U+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXQvXCI+XG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiB9fSBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIDxhPk9yZGVyPC9hPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIC8vIHJldHVybiBDYXJ0XG4gIHJldHVybiBpc0F1dGhlbnRpY2F0ZWQgPyAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DYXJ0PC9oMT5cbiAgICAgIDxDYXJkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCA1cHhcIiB9fSBjbGFzc05hbWU9XCJjYXJ0XCI+XG4gICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5Zb3VyIE9yZGVyOjwvQ2FyZFRpdGxlPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPENhcmRCb2R5IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA2IH19PlxuICAgICAgICAgICAgPHNtYWxsPkl0ZW1zOjwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj57cmVuZGVySXRlbXMoKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PntjaGVja291dEl0ZW1zKCl9PC9kaXY+XG5cbiAgICAgICAgICB7Y29uc29sZS5sb2coYFJvdXRlciBQYXRoOiAke3JvdXRlci5hc1BhdGh9YCl9XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNpdGVtLXByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDEpO1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLXF1YW50aXR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDEpO1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKSA6ICg8ZGl2PlBsZWFzZSBzaWduIGluIGZpcnN0ITwvZGl2Pilcbn1cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9