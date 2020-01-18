function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-topbar></app-topbar>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Корзина</h3>\n\n<div *ngFor=\"let item of items\">\n  <span>{{ item.name }}</span>\n  <span>{{ item.price+' руб'  }}</span>\n  <span>{{ item.price * item.amount +' руб' }}</span>\n  <input type=\"number\"  value=\"{{ item.amount }}\" min=\"1\" (change)=\"recount($event, item.id)\">\n  <button (click)=\"addToWishlist(item)\">В избранное</button>\n  <button (click)=\"deleteFromCart(item.id)\">Удалить</button>\n</div>\n\n<form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n  <fieldset>\n    <label for=\"name\">ФИО:</label>\n    <input type=\"text\" formControlName=\"name\" id=\"name\">\n  </fieldset>\n  <span *ngIf=\"(name.dirty || name.touched) && name.invalid && name.errors.required\">\n    Необходимо заполнить ФИО.\n  </span>\n  <fieldset>\n    <label for=\"phone\">Номер телефона:</label>\n    <input type=\"number\" formControlName=\"phone\" id=\"phone\" placeholder=\"+7XXXXXXXXXX\">\n  </fieldset>\n  <span *ngIf=\"(phone.dirty || phone.touched) && phone.invalid && phone.errors.required\">\n    Необходимо указать номер телефона.\n  </span>\n  <fieldset>\n    <label for=\"email\">Email:</label>\n    <input type=\"email\" formControlName=\"email\" id=\"email\">\n  </fieldset>\n  <span *ngIf=\"(email.dirty || email.touched) && email.invalid && email.errors.email\">\n    Неправильно указан email.\n  </span>\n  <fieldset>\n    <label for=\"address\">Адрес доставки:</label>\n    <input type=\"text\" formControlName=\"address\" id=\"adress\">\n  </fieldset>\n  <span *ngIf=\"(address.dirty || address.touched) && address.invalid && address.errors.required\">\n    Необходимо указать адрес доставки.\n  </span>\n  <fieldset>\n    <label for=\"comment\">Комментарии:</label>\n    <textarea id=\"comment\" formControlName=\"comment\"></textarea>\n  </fieldset>\n  <button type=\"submit\" class=\"submit\" [disabled]=\"userForm.invalid\">Оформить заказ</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDialogDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Добавить в корзину</h2>\n\n<mat-dialog-content>\n  <div *ngIf=\"product\">\n    <img src={{product.img}} alt=\"Iphone\">\n    <p>{{ product.name }}</p>\n    <label>Кол-во: <input type=\"number\"  value=\"1\" min=\"1\" (change)=\"valuechange($event)\"></label>\n    <p>Сумма: {{ product.price * productAmount+' руб' }}</p>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button (click)=\"close()\" class=\"closeButton\">X</button>\n  <button class=\"cart-button\" (click)=\"addToCart(product)\">Добавить</button>\n</mat-dialog-actions>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n\r\n  <div class=\"product-item\" *ngFor=\"let product of products\">\r\n    <img src={{product.img}} alt=\"Iphone\">\r\n    <p>{{product.name}}</p>\r\n    <p>{{product.price+' руб'}}</p>\r\n    <div class=\"buttons\">\r\n      <button class=\"cart-button\" (click)=\"openDialog(product)\">В корзину</button>\r\n      <button class=\"wishlist\" (click)=\"addToWishlist(product)\"></button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopbarTopbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"nav\">\r\n  <div class=\"menu\">\r\n    <button [routerLink]=\"['/']\">Главная</button>\r\n    <button [routerLink]=\"['/cart']\">Корзина</button>\r\n  </div>\r\n\r\n  <div class=\"info\">\r\n\r\n      <button class=\"wishlist\" (click)=\"toggle()\"> {{ wishlistItems.length }} товара</button>\r\n      <div class=\"pop-up\" [ngClass]=\"{invisible: visibility}\">\r\n        <div class=\"popup-items\" *ngFor=\"let item of wishlistItems; let i=index\">\r\n          <div *ngIf=\"i < 5\">\r\n            <img class=\"preview\" src={{item.img}} alt=\"Iphone\"> <br>\r\n            {{ item.date | date:'d/M/yy hh:mm:ss' }} <br>\r\n            {{ item.name }}\r\n            <hr>\r\n        </div>\r\n      </div>\r\n      <button [routerLink]=\"['/wishlist']\">Избранное</button>\r\n      </div>\r\n\r\n      <div class=\"cart-info\" *ngIf=\"cartAmount>0\">\r\n      <span>В корзине <strong>{{ cartAmount+' товаров' }}</strong>\r\n      </span> <br>\r\n        <span>На сумму <strong>{{ cartSumm+' руб' }}</strong></span>\r\n      </div>\r\n\r\n      <div class=\"cart-info\" *ngIf=\"!(cartAmount>0)\">\r\n      <span>В корзине <strong>0 товаров</strong>\r\n      </span> <br>\r\n        <span>На сумму <strong>0 руб</strong></span>\r\n      </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wish-list/wish-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wish-list/wish-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWishListWishListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Список желаний</h3>\n\n<div class=\"container\">\n  {{ amount }}\n  <div class=\"product-item\" *ngFor=\"let item of items\">\n    <img src={{item.img}} alt=\"Iphone\">\n    <p>{{item.name}}</p>\n    <p>{{item.price+' руб'}}</p>\n    <button class=\"cart-button\" (click)=\"openDialog(item)\">В корзину</button>\n    <button class=\"delete\" (click)=\"deleteFromWishlist(item.id)\">Удалить</button>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-shop-task';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/index.js");
    /* harmony import */


    var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./in-memory-data.service */
    "./src/app/in-memory-data.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./topbar/topbar.component */
    "./src/app/topbar/topbar.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./wish-list/wish-list.component */
    "./src/app/wish-list/wish-list.component.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts"); // import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__["TopbarComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"], _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_15__["WishListComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DialogComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{
        path: '',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"]
      }, {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"]
      }, {
        path: 'wishlist',
        component: _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_15__["WishListComponent"]
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__["InMemoryDataService"], {
        dataEncapsulation: false
      }), _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DialogComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/cart.service.ts":
  /*!*********************************!*\
    !*** ./src/app/cart.service.ts ***!
    \*********************************/

  /*! exports provided: CartService */

  /***/
  function srcAppCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CartService =
    /*#__PURE__*/
    function () {
      function CartService() {
        _classCallCheck(this, CartService);

        this.items = [];
        this.productAmountCart = 0;
        this.cartAmount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.cartSumm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.totalCartAmount = 0;
        this.totalSumm = 0;
      }

      _createClass(CartService, [{
        key: "addToCart",
        value: function addToCart(product, productAmount) {
          var flag = false;
          product.amount = productAmount;
          var items = this.items;
          var totalAmount = this.totalCartAmount;
          var totalSumm = this.totalSumm;
          items.forEach(function (item) {
            if (item.id == product.id) {
              item.amount = +item.amount + +product.amount;
              flag = true;
            }
          });

          if (!flag) {
            this.items.push(product);
          }

          items.forEach(function (item) {
            totalAmount = totalAmount + +item.amount;
            totalSumm = totalSumm + +item.amount * +item.price;
          });
          this.cartAmount.next(totalAmount);
          this.cartSumm.next(totalSumm);
        }
      }, {
        key: "getItems",
        value: function getItems() {
          return this.items;
        }
      }, {
        key: "clearCart",
        value: function clearCart() {
          this.items = [];
          var totalAmount = 0;
          this.cartAmount.next(totalAmount);
          return this.items;
        }
      }, {
        key: "deleteFromCart",
        value: function deleteFromCart(id) {
          var items = this.items;
          var totalAmount = this.totalCartAmount;
          var totalSumm = this.totalSumm;
          console.log(totalAmount);
          items.forEach(function (item) {
            var index = items.indexOf(item);

            if (item.id == id) {
              items.splice(index, 1);
            }
          });
          items.forEach(function (item) {
            totalAmount = totalAmount + +item.amount;
            totalSumm = totalSumm + item.amount * item.price;
          });
          this.cartAmount.next(totalAmount);
          this.cartSumm.next(totalSumm);
          return items;
        }
      }, {
        key: "recount",
        value: function recount(amount, id) {
          var items = this.items;
          var totalAmount = this.totalCartAmount;
          var totalSumm = this.totalSumm;
          items.forEach(function (item) {
            var index = items.indexOf(item);

            if (item.id == id) {
              item.amount = amount;
              totalAmount = totalAmount + +item.amount;
            }

            totalSumm = totalSumm + item.amount * item.price;
          });
          this.cartAmount.next(totalAmount);
          this.cartSumm.next(totalSumm);
          return items;
        }
      }, {
        key: "getAmount",
        value: function getAmount() {
          return this.cartAmount.asObservable();
        }
      }, {
        key: "getSumm",
        value: function getSumm() {
          return this.cartSumm.asObservable();
        }
      }]);

      return CartService;
    }();

    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CartService);
    /***/
  },

  /***/
  "./src/app/cart/cart.component.css":
  /*!*****************************************!*\
    !*** ./src/app/cart/cart.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\r\n  width: 100%;\r\n  min-width: 400px;\r\n  max-width: 800px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 16px 32px;\r\n  margin-bottom: 8px;\r\n  margin-left: 10px;\r\n  border-radius: 2px;\r\n  background-color: #EEEEEE;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\ndiv input {\r\n  width: 40px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  outline: none;\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  border: 1px solid #aeaeae;\r\n  border-radius: 10px;\r\n  background-color: #d8d8d8;\r\n  padding: 10px;\r\n  width: 1000px;\r\n}\r\n\r\nform span {\r\n  color: red;\r\n  margin-left: 200px;\r\n  font-size: 90%;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  width: 800px;\r\n  font-weight: bold;\r\n}\r\n\r\nfieldset input,\r\nfieldset textarea {\r\n  width: 600px;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  outline: none;\r\n  float: right;\r\n}\r\n\r\n.submit {\r\n  position: relative;\r\n  left: 40%;\r\n}\r\n\r\nlabel {\r\n  margin-top: 8px;\r\n  float: left;\r\n}\r\n\r\ninput.ng-invalid{\r\n border-color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5kaXYgaW5wdXQge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2FlYWVhZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwMHB4O1xyXG59XHJcblxyXG5mb3JtIHNwYW4ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuZmllbGRzZXQgaW5wdXQsXHJcbmZpZWxkc2V0IHRleHRhcmVhIHtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDQwJTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZHtcclxuIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cart.service */
    "./src/app/cart.service.ts");
    /* harmony import */


    var _wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../wishlist.service */
    "./src/app/wishlist.service.ts");

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(cartService, formBuilder, wishlistService) {
        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.wishlistService = wishlistService;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = this.cartService.getItems();
          this.userForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ''
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.userForm.invalid) {
            console.log("error");
            return;
          }

          this.cartService.clearCart();
          alert('Order: ' + JSON.stringify(this.items) + '\n\n' + JSON.stringify(this.userForm.value));
        }
      }, {
        key: "recount",
        value: function recount(event, id) {
          this.amount = event.target.value;
          this.items = this.cartService.recount(this.amount, id);
        }
      }, {
        key: "deleteFromCart",
        value: function deleteFromCart(id) {
          this.items = this.cartService.deleteFromCart(id);
        }
      }, {
        key: "addToWishlist",
        value: function addToWishlist(product) {
          var items = this.wishlistService.getItems();
          var flag = false;
          items.forEach(function (item) {
            if (product.id == item.id) {
              flag = true;
            }
          });

          if (!flag) {
            this.wishlistService.addToWishlist(product);
            this.deleteFromCart(product.id);
          }
        }
      }, {
        key: "name",
        get: function get() {
          return this.userForm.get('name');
        }
      }, {
        key: "phone",
        get: function get() {
          return this.userForm.get('phone');
        }
      }, {
        key: "email",
        get: function get() {
          return this.userForm.get('email');
        }
      }, {
        key: "address",
        get: function get() {
          return this.userForm.get('address');
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"]
      }];
    };

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/cart/cart.component.css")).default]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/dialog/dialog.component.css":
  /*!*********************************************!*\
    !*** ./src/app/dialog/dialog.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDialogDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n  width: 400px;\r\n}\r\n\r\n\r\nmat-dialog-content {\r\n  font-weight: bold;\r\n}\r\n\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\nmat-dialog-content input {\r\n  width: 40px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  outline: none;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 110%;\r\n}\r\n\r\n\r\nmat-dialog-content img {\r\n  width: 150px;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #75b06b;\r\n  border-radius: 10px;\r\n  color: white;\r\n  width: 300px;\r\n  margin-bottom:  40px;\r\n  margin-left: 15px;\r\n  font-size: 100%;\r\n}\r\n\r\n\r\nbutton:hover {\r\n  background-color: #52a832;\r\n}\r\n\r\n\r\n.cart-button::before {\r\n  left: 30px;\r\n}\r\n\r\n\r\n.closeButton {\r\n  width: 20px;\r\n  position: relative;\r\n  top: -230px;\r\n  left: 370px;\r\n  background-color: white;\r\n  color: black;\r\n  border: none;\r\n  padding: 0;\r\n}\r\n\r\n\r\n.closeButton:hover {\r\n  background-color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtBQUNaOzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudCBpbnB1dCB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTEwJTtcclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50IGltZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzViMDZiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAgNDBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYTgzMjtcclxufVxyXG5cclxuLmNhcnQtYnV0dG9uOjpiZWZvcmUge1xyXG4gIGxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbiB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTIzMHB4O1xyXG4gIGxlZnQ6IDM3MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNsb3NlQnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/dialog/dialog.component.ts":
  /*!********************************************!*\
    !*** ./src/app/dialog/dialog.component.ts ***!
    \********************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cart.service */
    "./src/app/cart.service.ts");
    /* harmony import */


    var _wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../wishlist.service */
    "./src/app/wishlist.service.ts");

    var DialogComponent =
    /*#__PURE__*/
    function () {
      function DialogComponent(cartService, wishlistService, dialogRef, data) {
        _classCallCheck(this, DialogComponent);

        this.cartService = cartService;
        this.wishlistService = wishlistService;
        this.dialogRef = dialogRef;
        this.productAmount = 1;
        this.product = data.product;
      }

      _createClass(DialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "valuechange",
        value: function valuechange(event) {
          this.productAmount = event.target.value;
          return this.productAmount;
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          this.cartService.addToCart(product, this.productAmount);
          this.dialogRef.close();
          this.wishlistService.deleteFromWishlist(product.id);
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ctorParameters = function () {
      return [{
        type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }, {
        type: _wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog.component.css */
      "./src/app/dialog/dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], DialogComponent);
    /***/
  },

  /***/
  "./src/app/in-memory-data.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/in-memory-data.service.ts ***!
    \*******************************************/

  /*! exports provided: InMemoryDataService */

  /***/
  function srcAppInMemoryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
      return InMemoryDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InMemoryDataService =
    /*#__PURE__*/
    function () {
      function InMemoryDataService() {
        _classCallCheck(this, InMemoryDataService);
      }

      _createClass(InMemoryDataService, [{
        key: "createDb",
        value: function createDb() {
          var products = [{
            id: 1,
            name: 'Apple Iphone 5s',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }, {
            id: 2,
            name: 'Apple Iphone 6',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }, {
            id: 3,
            name: 'Apple Iphone 6s',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }, {
            id: 4,
            name: 'Apple Iphone 5s',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }, {
            id: 5,
            name: 'Apple Iphone 6',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }, {
            id: 6,
            name: 'Apple Iphone 6s',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }, {
            id: 7,
            name: 'Apple Iphone 5s',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }, {
            id: 8,
            name: 'Apple Iphone 6',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }, {
            id: 9,
            name: 'Apple Iphone 6s',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }, {
            id: 10,
            name: 'Apple Iphone 5s',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }, {
            id: 11,
            name: 'Apple Iphone 6',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }, {
            id: 12,
            name: 'Apple Iphone 6s',
            price: 59100,
            img: "assets/images/iphone.jpg"
          }];
          return {
            products: products
          };
        }
      }]);

      return InMemoryDataService;
    }();

    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InMemoryDataService);
    /***/
  },

  /***/
  "./src/app/product-list/product-list.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/product-list/product-list.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductListProductListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\r\n  width: 150px;\r\n}\r\n\r\np {\r\n  font-weight: bold;\r\n}\r\n\r\n.wishlist {\r\n  margin-left: 5px;\r\n  width: 50px;\r\n  height: 40px;\r\n  background: url('/./assets/images/wishlist.png') no-repeat center #d8d8d8;\r\n  position: relative;\r\n  top: 5px;\r\n}\r\n\r\n.wishlist:hover {\r\n  cursor: pointer;\r\n  background-color: #aeaeae;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUVBQXlFO0VBQ3pFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud2lzaGxpc3Qge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLy4vYXNzZXRzL2ltYWdlcy93aXNobGlzdC5wbmcnKSBuby1yZXBlYXQgY2VudGVyICNkOGQ4ZDg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNXB4O1xyXG59XHJcblxyXG4ud2lzaGxpc3Q6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVhZWFlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/product-list/product-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/product-list/product-list.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../wishlist.service */
    "./src/app/wishlist.service.ts");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../cart.service */
    "./src/app/cart.service.ts");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/products.service.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");

    var ProductListComponent =
    /*#__PURE__*/
    function () {
      function ProductListComponent(route, wishlistService, productsService, cartService, http, dialog) {
        _classCallCheck(this, ProductListComponent);

        this.route = route;
        this.wishlistService = wishlistService;
        this.productsService = productsService;
        this.cartService = cartService;
        this.http = http;
        this.dialog = dialog;
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProduct();
        }
      }, {
        key: "getProduct",
        value: function getProduct() {
          var _this = this;

          this.productsService.getProducts().subscribe(function (products) {
            return _this.products = products;
          });
        }
      }, {
        key: "addToWishlist",
        value: function addToWishlist(product) {
          var items = this.wishlistService.getItems();
          var flag = false;
          items.forEach(function (item) {
            if (product.id == item.id) {
              flag = true;
            }
          });

          if (!flag) {
            this.wishlistService.addToWishlist(product);
          }
        }
      }, {
        key: "openDialog",
        value: function openDialog(product) {
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
          dialogConfig.autoFocus = true;
          dialogConfig.data = {
            product: product
          };
          this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], dialogConfig);
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"]
      }, {
        type: _products_service__WEBPACK_IMPORTED_MODULE_7__["ProductsService"]
      }, {
        type: _cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.component.css */
      "./src/app/product-list/product-list.component.css")).default]
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/products.service.ts":
  /*!*************************************!*\
    !*** ./src/app/products.service.ts ***!
    \*************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProductsService =
    /*#__PURE__*/
    function () {
      function ProductsService(http) {
        _classCallCheck(this, ProductsService);

        this.http = http;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this.productsUrl = "api/products";
      }

      _createClass(ProductsService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.http.get(this.productsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProducts', [])));
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductsService);
    /***/
  },

  /***/
  "./src/app/topbar/topbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/topbar/topbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopbarTopbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav {\r\n  height: 30px;\r\n  background-color: #d8d8d8;\r\n  border: 1px solid #aeaeae;\r\n  padding: 5px 10px;\r\n  font-weight: bold;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.nav button {\r\n  border: none;\r\n}\r\n\r\n.info {\r\n  position: relative;\r\n  font-weight: normal;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.wishlist {\r\n  height: 40px;\r\n  border: none;\r\n}\r\n\r\n.cart-info {\r\n  background: url('/./assets/images/supermarket.png') no-repeat 1px;\r\n  padding-left: 40px;\r\n  padding-top: 2px;\r\n}\r\n\r\n.wishlist::before {\r\n  content: \"\";\r\n  display: block;\r\n  background: url('/./assets/images/wishlist.png') no-repeat;\r\n  width: 40px;\r\n  height: 40px;\r\n  float: left;\r\n  position: relative;\r\n  top: -5px;\r\n}\r\n\r\n.pop-up {\r\n  position: absolute;\r\n  top: 40px;\r\n  width: 300px;\r\n  border: 1px solid #aeaeae;\r\n  z-index: 1;\r\n  background-color: white;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.pop-up button {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.preview {\r\n  width: 100px;\r\n}\r\n\r\n.invisible {\r\n  display:none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlFQUFpRTtFQUNqRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCwwREFBMEQ7RUFDMUQsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2FlYWVhZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYgYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ud2lzaGxpc3Qge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJ0LWluZm8ge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLy4vYXNzZXRzL2ltYWdlcy9zdXBlcm1hcmtldC5wbmcnKSBuby1yZXBlYXQgMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG4ud2lzaGxpc3Q6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy8uL2Fzc2V0cy9pbWFnZXMvd2lzaGxpc3QucG5nJykgbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtNXB4O1xyXG59XHJcblxyXG4ucG9wLXVwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWVhZWFlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ucG9wLXVwIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucHJldmlldyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uaW52aXNpYmxlIHtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/topbar/topbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/topbar/topbar.component.ts ***!
    \********************************************/

  /*! exports provided: TopbarComponent */

  /***/
  function srcAppTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../wishlist.service */
    "./src/app/wishlist.service.ts");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cart.service */
    "./src/app/cart.service.ts");

    var TopbarComponent =
    /*#__PURE__*/
    function () {
      function TopbarComponent(wishlistService, cartService) {
        var _this2 = this;

        _classCallCheck(this, TopbarComponent);

        this.wishlistService = wishlistService;
        this.cartService = cartService;
        this.visibility = true;
        this.cartAmount = this.cartService.getAmount().subscribe(function (cartAmount) {
          _this2.cartAmount = cartAmount;
        });
        this.cartSumm = this.cartService.getSumm().subscribe(function (cartSumm) {
          _this2.cartSumm = cartSumm;
        });
      }

      _createClass(TopbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.wishlistItems = this.wishlistService.getItems();
          this.cartItems = this.cartService.getItems();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.cartAmount.unsubscribe();
          this.cartSumm.unsubscribe();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.visibility = !this.visibility;
        }
      }]);

      return TopbarComponent;
    }();

    TopbarComponent.ctorParameters = function () {
      return [{
        type: _wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"]
      }, {
        type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }];
    };

    TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topbar.component.css */
      "./src/app/topbar/topbar.component.css")).default]
    })], TopbarComponent);
    /***/
  },

  /***/
  "./src/app/wish-list/wish-list.component.css":
  /*!***************************************************!*\
    !*** ./src/app/wish-list/wish-list.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWishListWishListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\r\n  width: 150px;\r\n}\r\n\r\np {\r\n  font-weight: bold;\r\n}\r\n\r\n.delete {\r\n  margin-left: 5px;\r\n  position: relative;\r\n  top: 2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaC1saXN0L3dpc2gtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC93aXNoLWxpc3Qvd2lzaC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMnB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/wish-list/wish-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/wish-list/wish-list.component.ts ***!
    \**************************************************/

  /*! exports provided: WishListComponent */

  /***/
  function srcAppWishListWishListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishListComponent", function () {
      return WishListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../wishlist.service */
    "./src/app/wishlist.service.ts");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../cart.service */
    "./src/app/cart.service.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");

    var WishListComponent =
    /*#__PURE__*/
    function () {
      function WishListComponent(wishlistService, cartService, dialog) {
        _classCallCheck(this, WishListComponent);

        this.wishlistService = wishlistService;
        this.cartService = cartService;
        this.dialog = dialog;
      }

      _createClass(WishListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = this.wishlistService.getItems();
        }
      }, {
        key: "deleteFromWishlist",
        value: function deleteFromWishlist(id) {
          this.items = this.wishlistService.deleteFromWishlist(id);
        }
      }, {
        key: "openDialog",
        value: function openDialog(item) {
          var product = item;
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
          dialogConfig.autoFocus = true;
          dialogConfig.data = {
            product: product
          };
          this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], dialogConfig);
        }
      }]);

      return WishListComponent;
    }();

    WishListComponent.ctorParameters = function () {
      return [{
        type: _wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"]
      }, {
        type: _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    WishListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wish-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wish-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wish-list/wish-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wish-list.component.css */
      "./src/app/wish-list/wish-list.component.css")).default]
    })], WishListComponent);
    /***/
  },

  /***/
  "./src/app/wishlist.service.ts":
  /*!*************************************!*\
    !*** ./src/app/wishlist.service.ts ***!
    \*************************************/

  /*! exports provided: WishlistService */

  /***/
  function srcAppWishlistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistService", function () {
      return WishlistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WishlistService =
    /*#__PURE__*/
    function () {
      function WishlistService() {
        _classCallCheck(this, WishlistService);

        this.items = [];
      }

      _createClass(WishlistService, [{
        key: "addToWishlist",
        value: function addToWishlist(product) {
          var date = new Date();
          product.date = date;
          this.items.push(product);
          this.items.sort(function (a, b) {
            return b.date - a.date;
          });
        }
      }, {
        key: "getItems",
        value: function getItems() {
          return this.items;
        }
      }, {
        key: "deleteFromWishlist",
        value: function deleteFromWishlist(id) {
          var items = this.items;
          items.forEach(function (item) {
            var index = items.indexOf(item);

            if (item.id == id) {
              var _index = items.indexOf(item);

              items.splice(_index, 1);
            }
          });
          return items;
        }
      }]);

      return WishlistService;
    }();

    WishlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WishlistService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Татьяна\Desktop\Макеты\angular-shop-task\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map