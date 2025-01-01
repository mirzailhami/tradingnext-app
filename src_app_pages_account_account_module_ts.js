"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_account_module_ts"],{

/***/ 87191:
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountPageRoutingModule: () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ 33750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
var _AccountPageRoutingModule;




const routes = [{
  path: '',
  component: _account__WEBPACK_IMPORTED_MODULE_0__.AccountPage
}];
class AccountPageRoutingModule {}
_AccountPageRoutingModule = AccountPageRoutingModule;
_AccountPageRoutingModule.ɵfac = function AccountPageRoutingModule_Factory(t) {
  return new (t || _AccountPageRoutingModule)();
};
_AccountPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _AccountPageRoutingModule
});
_AccountPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 88422:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountModule: () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ 33750);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-routing.module */ 87191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
var _AccountModule;





class AccountModule {}
_AccountModule = AccountModule;
_AccountModule.ɵfac = function AccountModule_Factory(t) {
  return new (t || _AccountModule)();
};
_AccountModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _AccountModule
});
_AccountModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_1__.AccountPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccountModule, {
    declarations: [_account__WEBPACK_IMPORTED_MODULE_0__.AccountPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_1__.AccountPageRoutingModule]
  });
})();

/***/ }),

/***/ 33750:
/*!******************************************!*\
  !*** ./src/app/pages/account/account.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountPage: () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var _home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/user-data */ 59333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);

var _AccountPage;








function AccountPage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-list", 4)(5, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPage_div_7_Template_ion_item_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.updatePicture());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Update Picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPage_div_7_Template_ion_item_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.changeUsername());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Change Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPage_div_7_Template_ion_item_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPage_div_7_Template_ion_item_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.support());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPage_div_7_Template_ion_item_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.username);
  }
}
class AccountPage {
  constructor(alertCtrl, router, userData) {
    this.alertCtrl = alertCtrl;
    this.router = router;
    this.userData = userData;
  }
  ngAfterViewInit() {
    this.getUsername();
  }
  updatePicture() {
    console.log('Clicked to update picture');
  }
  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    var _this = this;
    return (0,_home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: 'Change Username',
        buttons: ['Cancel', {
          text: 'Ok',
          handler: data => {
            _this.userData.setUsername(data.username);
            _this.getUsername();
          }
        }],
        inputs: [{
          type: 'text',
          name: 'username',
          value: _this.username,
          placeholder: 'username'
        }]
      });
      yield alert.present();
    })();
  }
  getUsername() {
    this.userData.getUsername().then(username => {
      this.username = username;
    });
  }
  changePassword() {
    console.log('Clicked to change password');
  }
  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }
  support() {
    this.router.navigateByUrl('/support');
  }
}
_AccountPage = AccountPage;
_AccountPage.ɵfac = function AccountPage_Factory(t) {
  return new (t || _AccountPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_1__.UserData));
};
_AccountPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _AccountPage,
  selectors: [["page-account"]],
  decls: 8,
  vars: 1,
  consts: [["slot", "start"], ["class", "ion-padding-top ion-text-center", 4, "ngIf"], [1, "ion-padding-top", "ion-text-center"], ["src", "https://www.gravatar.com/avatar?d=mm&s=140", "alt", "avatar"], ["inset", ""], [3, "click"]],
  template: function AccountPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AccountPage_div_7_Template, 15, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.username);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
  styles: ["img[_ngcontent-%COMP%] {\n  max-width: 140px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBtYXgtd2lkdGg6IDE0MHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_account_module_ts.js.map