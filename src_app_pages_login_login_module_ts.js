"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 4987:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ 1434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _LoginPageRoutingModule;




const routes = [{
  path: '',
  component: _login__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
class LoginPageRoutingModule {}
_LoginPageRoutingModule = LoginPageRoutingModule;
_LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) {
  return new (t || _LoginPageRoutingModule)();
};
_LoginPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _LoginPageRoutingModule
});
_LoginPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9370:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginModule: () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ 1434);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 4987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _LoginModule;






class LoginModule {}
_LoginModule = LoginModule;
_LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || _LoginModule)();
};
_LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _LoginModule
});
_LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule]
  });
})();

/***/ }),

/***/ 1434:
/*!**************************************!*\
  !*** ./src/app/pages/login/login.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/user-data */ 9333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _LoginPage;







class LoginPage {
  constructor(userData, router) {
    this.userData = userData;
    this.router = router;
    this.login = {
      username: '',
      password: ''
    };
    this.submitted = false;
  }
  onLogin(form) {
    this.submitted = true;
    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/dash');
    }
  }
  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
_LoginPage = LoginPage;
_LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || _LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_0__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _LoginPage,
  selectors: [["page-login"]],
  decls: 23,
  vars: 2,
  consts: [["loginForm", "ngForm"], ["username", "ngModel"], ["password", "ngModel"], ["slot", "start"], [1, "login-logo"], ["src", "assets/img/appicon.svg", "alt", "Ionic logo"], [1, "login-form"], ["novalidate", ""], ["label", "Username", "labelPlacement", "stacked", "fill", "solid", "name", "username", "type", "text", "spellcheck", "false", "autocapitalize", "off", "errorText", "Username is required", "required", "", 3, "ngModelChange", "ngModel"], ["label", "Password", "labelPlacement", "stacked", "fill", "solid", "name", "password", "type", "password", "errorText", "Password is required", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", "expand", "block", 3, "click"], ["color", "light", "expand", "block", 3, "click"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content")(7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "form", 7, 0)(12, "ion-input", 8, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_12_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.login.username, $event) || (ctx.login.username = $event);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-input", 9, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_14_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.login.password, $event) || (ctx.login.password = $event);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row")(17, "ion-col")(18, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_18_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
        const loginForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onLogin(loginForm_r2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-col")(21, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_21_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSignup());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.login.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.login.password);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor],
  styles: [".login-logo[_ngcontent-%COMP%] {\n  min-height: 200px;\n  padding: 20px 0;\n  text-align: center;\n}\n\n.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\nion-input[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBRUEsZUFBQTtFQUVBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1sb2dvIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG5cbiAgcGFkZGluZzogMjBweCAwO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG5pb24taW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map