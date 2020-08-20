(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/Visitor/LatestNews/VisitorApp.NewsComponent.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/Visitor/LatestNews/VisitorApp.NewsComponent.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: rgb(248, 235, 218);\">\r\n<div class=\"col-md-12\">\r\n  <h1 style=\"text-align: center;\">Latest News</h1>\r\n\r\n</div>\r\n<hr>>\r\n\r\n<div *ngFor=\"let row of lastestNewsList\">\r\n\r\n  <div style=\"    margin-top: 10px;\r\n      margin-left: 40px;\r\n      font-weight: normal;\r\n      color:black;\r\n           \">\r\n      <b>\r\n               <span style=\"   color: blue;\">{{row.source.name}}</span>:&nbsp;<span>{{row.author}}</span>\r\n               {{row.publishedAt | date:'medium'}}\r\n           </b>\r\n      <br>\r\n      <br>\r\n      <b>{{row.title}}</b>\r\n      <br>\r\n      <br>\r\n\r\n      <div style=\"color: black;\r\n           margin-right: 10px;\r\n           background-color: rgb(248, 235, 218);\r\n           text-align: left;\">\r\n          <div  style=\"    height: 6em;\">\r\n\r\n\r\n                  <span >{{row.description}}</span>\r\n\r\n             <img [src]=\"row.urlToImage\" style=\"    height: 1em;\r\n             width: 1em;\" alt=\"\">\r\n              <span >\r\n                  <a style=\"    background: none;\r\n                  border: none;\r\n                  color:blue;\r\n                  text-align: left;\r\n                  font-size: 1.2em;\r\n                  outline: none;\" type=\"button\" href=\"{{row.url}}\" target=\"_blank\">&nbsp;read more... </a>\r\n                  </span>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n  <div style=\"border-top: 1px dotted #636363;\"></div>\r\n\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/Visitor/Main/VisitorApp.MasterView.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/Visitor/Main/VisitorApp.MasterView.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \r\n<table style=\"background-color: lightblue; border-color: blue; border-style: solid; height:80vh; width: 100%;\">\r\n    <tr align = \"Center\">\r\n        \r\n    </tr>\r\n    <tr bordercolor = \"red\">\r\n        <td  style=\"position: static; vertical-align: top;\">\r\n          <ul>\r\n           <li><a   [routerLink] = \"['Visitor']\"><b>Visitor</b></a></li> \r\n            <li><a  [routerLink] = \"['LatestNews']\"><b>News</b></a></li>\r\n        </ul> \r\n        </td>\r\n\r\n        <td>\r\n            <div>\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </td>\r\n\r\n    </tr>\r\n    <tr align=\"Center\">\r\n        <td>This is my @Footer</td>\r\n    </tr>\r\n</table> -->\r\n\r\n\r\n\r\n<mat-toolbar color=\"warn\">\r\n    <mat-toolbar-row>\r\n     \r\n      \r\n      <img style=\"width: 120px; height: 70px;\" src=\"assets/img/vis.png\">\r\n      <span class=\"menu-spacer\"></span>\r\n      <div class=\"NavItem\" >\r\n          <div>\r\n            <a  mat-button [routerLink]=\"'/Visitor'\"> Visitor </a>\r\n            <a  mat-button [routerLink]=\"'/LatestNews'\"> Latest News </a>\r\n          </div>\r\n        \r\n      </div>\r\n    </mat-toolbar-row>\r\n  \r\n    \r\n  </mat-toolbar>\r\n\r\n  <div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/Visitor/Visitorlog/VisitorApp.VisitorlogComponent.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/Visitor/Visitorlog/VisitorApp.VisitorlogComponent.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: burlywood;\">\r\n    <h1 style=\"text-align: center;\">Visitor Log</h1>\r\n<div>\r\n   <form  [formGroup] = \"VisitorValidate\">\r\n<label>Name  :</label>           <input formControlName=\"Name\" type=\"text\" />\r\n<label>Email :</label>           <input formControlName=\"Email\" type=\"text\"/>\r\n<label>Type of Visit :</label>\r\n   <select formControlName=\"Typeofvisit\" id=\"TOV\" name=\"typeofvisit\">\r\n    <option  value=\"meeting\">Meeting</option>\r\n    <option  value=\"delivery\">Delivery</option>\r\n    <option  value=\"personal\">Personal</option>\r\n</select>\r\n<label>Person to visit :</label> <input formControlName=\"Persontovisit\" type=\"text\" />\r\n<label>Date :</label>            <input formControlName=\"Date\" type=\"date\" />\r\n<label>Time of Entry :</label>   <input formControlName=\"Timeofentry\" type=\"time\" />\r\n<label>Time of exit :</label>    <input formControlName=\"Timeofexit\" type=\"time\" /> &nbsp;&nbsp;\r\n<button class=\"btn btn-primary\" style=\"margin: 20px;\" (click) = \"Submit()\" type=\"submit\">Submit</button>\r\n<button class=\"btn btn-danger\" (click) = \"GetfromServer()\" type=\"submit\">Visitor Logs</button>\r\n\r\n    </form>\r\n </div> <br>\r\n\r\n<b>Visitor Log Details :</b>\r\n</div>\r\n<hr>\r\n<ag-grid-angular\r\n    style=\"width: 73%; height: 500px; \"\r\n    [loading]=\"loading\"\r\n    class=\"ag-theme-balham\"\r\n    [rowData]=\"rowData\"\r\n    [columnDefs]=\"columnDefs\">\r\n\r\n</ag-grid-angular>\r\n<!-- <table id=\"users\"\r\n    <tr>\r\n      <th *ngFor=\"let col of columnDefs\">\r\n        {{col.headerName}}\r\n      </th>\r\n    </tr>\r\n    <tr *ngFor=\"let colObj of rowData\">\r\n      <td *ngFor=\"let col of field\">\r\n        {{colObj[col]}}\r\n      </td>\r\n    </tr>\r\n\r\n  </table> -->\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
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
        while (_) try {
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/Visitor/LatestNews/VisitorApp.NewsComponent.ts":
/*!************************************************************!*\
  !*** ./src/Visitor/LatestNews/VisitorApp.NewsComponent.ts ***!
  \************************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let NewsComponent = class NewsComponent {
    constructor(http) {
        this.http = http;
        this.lastestNewsList = [];
        this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=c2571d3d3f6a4194a3f15f4f1d5f1249")
            .subscribe(res => {
            this.lastestNewsList = res.articles;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
};
NewsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./VisitorApp.NewsComponent.html */ "./node_modules/raw-loader/dist/cjs.js!./src/Visitor/LatestNews/VisitorApp.NewsComponent.html")).default
    })
], NewsComponent);



/***/ }),

/***/ "./src/Visitor/Main/VisitorApp.MainModule.ts":
/*!***************************************************!*\
  !*** ./src/Visitor/Main/VisitorApp.MainModule.ts ***!
  \***************************************************/
/*! exports provided: VisitorMainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorMainModule", function() { return VisitorMainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _VisitorApp_MasterComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VisitorApp.MasterComponent */ "./src/Visitor/Main/VisitorApp.MasterComponent.ts");
/* harmony import */ var _Routing_VisitorApp_MainRouting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Routing/VisitorApp.MainRouting */ "./src/Visitor/Routing/VisitorApp.MainRouting.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Visitorlog_VisitorApp_VisitorlogComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Visitorlog/VisitorApp.VisitorlogComponent */ "./src/Visitor/Visitorlog/VisitorApp.VisitorlogComponent.ts");
/* harmony import */ var _LatestNews_VisitorApp_NewsComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../LatestNews/VisitorApp.NewsComponent */ "./src/Visitor/LatestNews/VisitorApp.NewsComponent.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/fesm2015/ag-grid-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");












let VisitorMainModule = class VisitorMainModule {
};
VisitorMainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _VisitorApp_MasterComponent__WEBPACK_IMPORTED_MODULE_4__["MasterComponent"], _Visitorlog_VisitorApp_VisitorlogComponent__WEBPACK_IMPORTED_MODULE_7__["VisitorComponent"], _LatestNews_VisitorApp_NewsComponent__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_Routing_VisitorApp_MainRouting__WEBPACK_IMPORTED_MODULE_5__["MainRouting"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents([]),
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
        providers: [],
        bootstrap: [_VisitorApp_MasterComponent__WEBPACK_IMPORTED_MODULE_4__["MasterComponent"]]
    })
], VisitorMainModule);



/***/ }),

/***/ "./src/Visitor/Main/VisitorApp.MasterComponent.css":
/*!*********************************************************!*\
  !*** ./src/Visitor/Main/VisitorApp.MasterComponent.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    font-size: 20px;\r\n}\r\n.NavItem div{\r\n    position: absolute;\r\n    top: 1;\r\n    right: 0;\r\n    \r\n}\r\na:hover {\r\n    color: rgb(44, 44, 233);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9WaXNpdG9yL01haW4vVmlzaXRvckFwcC5NYXN0ZXJDb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFROztBQUVaO0FBQ0E7SUFDSSx1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL1Zpc2l0b3IvTWFpbi9WaXNpdG9yQXBwLk1hc3RlckNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5OYXZJdGVtIGRpdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgXHJcbn1cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDQ0LCA0NCwgMjMzKTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/Visitor/Main/VisitorApp.MasterComponent.ts":
/*!********************************************************!*\
  !*** ./src/Visitor/Main/VisitorApp.MasterComponent.ts ***!
  \********************************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MasterComponent = class MasterComponent {
};
MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./VisitorApp.MasterView.html */ "./node_modules/raw-loader/dist/cjs.js!./src/Visitor/Main/VisitorApp.MasterView.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./VisitorApp.MasterComponent.css */ "./src/Visitor/Main/VisitorApp.MasterComponent.css")).default]
    })
], MasterComponent);



/***/ }),

/***/ "./src/Visitor/Routing/VisitorApp.MainRouting.ts":
/*!*******************************************************!*\
  !*** ./src/Visitor/Routing/VisitorApp.MainRouting.ts ***!
  \*******************************************************/
/*! exports provided: MainRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRouting", function() { return MainRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Visitorlog_VisitorApp_VisitorlogComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Visitorlog/VisitorApp.VisitorlogComponent */ "./src/Visitor/Visitorlog/VisitorApp.VisitorlogComponent.ts");
/* harmony import */ var _LatestNews_VisitorApp_NewsComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LatestNews/VisitorApp.NewsComponent */ "./src/Visitor/LatestNews/VisitorApp.NewsComponent.ts");



const MainRouting = [
    { path: '', component: _Visitorlog_VisitorApp_VisitorlogComponent__WEBPACK_IMPORTED_MODULE_1__["VisitorComponent"] },
    { path: 'Visitor', component: _Visitorlog_VisitorApp_VisitorlogComponent__WEBPACK_IMPORTED_MODULE_1__["VisitorComponent"] },
    { path: 'LatestNews', component: _LatestNews_VisitorApp_NewsComponent__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"] }
];


/***/ }),

/***/ "./src/Visitor/Visitorlog/VisitorApp.VisitorlogComponent.css":
/*!*******************************************************************!*\
  !*** ./src/Visitor/Visitorlog/VisitorApp.VisitorlogComponent.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvVmlzaXRvci9WaXNpdG9ybG9nL1Zpc2l0b3JBcHAuVmlzaXRvcmxvZ0NvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/Visitor/Visitorlog/VisitorApp.VisitorlogComponent.ts":
/*!******************************************************************!*\
  !*** ./src/Visitor/Visitorlog/VisitorApp.VisitorlogComponent.ts ***!
  \******************************************************************/
/*! exports provided: VisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorComponent", function() { return VisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let VisitorComponent = class VisitorComponent {
    constructor(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.title = 'VisitorApplication';
        //  VisitorModel : Visitor = new Visitor;
        //  VisitorModels : Array<Visitor> = new Array<Visitor>();
        this.VisitorValidate = null; // step 1
        this.loading = false;
        this.columnDefs = [
            { headerName: 'Name', field: 'Name', sortable: true, filter: true, editable: true, cellStyle: { color: 'black', 'background-color': 'beige' } },
            { headerName: 'Email', field: 'Email', sortable: true, filter: true, cellStyle: { color: 'black', 'background-color': 'beige' } },
            { headerName: 'Type of visit', field: 'Typeofvisit', sortable: true, filter: true, cellStyle: { color: 'black', 'background-color': 'beige' } },
            { headerName: 'Person to Visit', field: 'Persontovisit', sortable: true, filter: true, cellStyle: { color: 'black', 'background-color': 'beige' } },
            { headerName: 'Date', field: 'Date', sortable: true, filter: true, cellStyle: { color: 'black', 'background-color': 'beige' } },
            { headerName: 'Time of Entry', field: 'Timeofentry', sortable: true, filter: true, cellStyle: { color: 'black', 'background-color': 'beige' } },
            { headerName: 'Time of Exit ', field: 'Timeofexit', sortable: true, filter: true, cellStyle: { color: 'black', 'background-color': 'beige' } }
        ];
        //this/.GetfromServer()
    }
    ngOnInit() {
        this.VisitorValidate = this.formBuilder.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email],
            Typeofvisit: [''],
            Persontovisit: ['',],
            Date: [''],
            Timeofentry: [''],
            Timeofexit: [''],
        });
    }
    Submit() {
        if (this.VisitorValidate.valid) {
            this.http.post("https://localhost:3000/Customers", this.VisitorValidate.value).subscribe(res => alert("Record sent"), res => console.debug(res.json()));
            this.VisitorValidate.reset();
        }
        else {
            alert("Name is required");
        }
    }
    GetfromServer() {
        this.loading = true;
        this.http.get("https://localhost:3000/Customers").subscribe(res => { this.rowData = res; this.loading = false; });
    }
};
VisitorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VisitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./VisitorApp.VisitorlogComponent.html */ "./node_modules/raw-loader/dist/cjs.js!./src/Visitor/Visitorlog/VisitorApp.VisitorlogComponent.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./VisitorApp.VisitorlogComponent.css */ "./src/Visitor/Visitorlog/VisitorApp.VisitorlogComponent.css")).default]
    })
], VisitorComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _Visitor_Main_VisitorApp_MainModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Visitor/Main/VisitorApp.MainModule */ "./src/Visitor/Main/VisitorApp.MainModule.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_Visitor_Main_VisitorApp_MainModule__WEBPACK_IMPORTED_MODULE_4__["VisitorMainModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Github\VisitorLog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map