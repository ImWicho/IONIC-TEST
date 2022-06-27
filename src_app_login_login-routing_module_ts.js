"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login-routing_module_ts"],{

/***/ 8633:
/*!**********************************************************!*\
  !*** ./src/app/login/login-page/login-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page.component.html?ngResource */ 837);
/* harmony import */ var _login_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.component.scss?ngResource */ 9274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let LoginPageComponent = class LoginPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onClick() {
        this.router.navigate(['/home']);
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login-page',
        template: _login_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPageComponent);



/***/ }),

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page/login-page.component */ 8633);




const routes = [
    { path: '', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], LoginRoutingModule);



/***/ }),

/***/ 9274:
/*!***********************************************************************!*\
  !*** ./src/app/login/login-page/login-page.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".wrap-content {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wrap-content .wrap-form {\n  width: 90%;\n  min-width: 300px;\n}\n.item-native {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBR0E7RUFDRSxxQkFBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcC1jb250ZW50e1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLndyYXAtZm9ybXtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW0tbmF0aXZle1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 837:
/*!***********************************************************************!*\
  !*** ./src/app/login/login-page/login-page.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"wrap-content\">\n  <div class=\"wrap-form\">\n    <div style=\"margin: 30px 0;\">\n      <ion-item>\n        <ion-label position=\"floating\">Correo</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Contraseña</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n    </div>\n    <ion-button expand=\"block\" (click)=\"onClick()\">Iniciar sesión</ion-button>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login-routing_module_ts.js.map