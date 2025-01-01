(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _providers_check_tutorial_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/check-tutorial.guard */ 68005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
var _AppRoutingModule;




const routes = [{
  path: '',
  redirectTo: '/tutorial',
  pathMatch: 'full'
}, {
  path: 'account',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 88422)).then(m => m.AccountModule)
}, {
  path: 'support',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/support/support.module */ 26230)).then(m => m.SupportModule)
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 29370)).then(m => m.LoginModule)
}, {
  path: 'signup',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 34168)).then(m => m.SignUpModule)
}, {
  path: 'app',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic_core_components_animation_js"), __webpack_require__.e("default-node_modules_ionic_core_components_ios_transition_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs-page_tabs-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs-page/tabs-page.module */ 10650)).then(m => m.TabsModule)
}, {
  path: 'tutorial',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tutorial_tutorial_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tutorial/tutorial.module */ 42828)).then(m => m.TutorialModule),
  canMatch: [_providers_check_tutorial_guard__WEBPACK_IMPORTED_MODULE_0__.checkTutorialGuard]
}];
class AppRoutingModule {}
_AppRoutingModule = AppRoutingModule;
_AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _AppRoutingModule
});
_AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/status-bar */ 19153);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/splash-screen */ 7661);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/user-data */ 59333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 47743);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ 46140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);

var _AppComponent;















function AppComponent_ion_menu_toggle_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-menu-toggle", 4)(1, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", p_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", p_r1.icon + "-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r1.title, " ");
  }
}
function AppComponent_ion_list_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-list", 1)(1, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-menu-toggle", 4)(4, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-menu-toggle", 4)(9, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-menu-toggle", 4)(14, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_ion_list_8_Template_ion_item_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function AppComponent_ion_list_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-list", 1)(1, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-menu-toggle", 4)(4, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-menu-toggle", 4)(9, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-menu-toggle", 4)(14, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Signup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_ion_list_9_Template_ion_toggle_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r2.dark, $event) || (ctx_r2.dark = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Dark Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.dark);
  }
}
class AppComponent {
  constructor(menu, platform, router, storage, userData, swUpdate, toastCtrl) {
    this.menu = menu;
    this.platform = platform;
    this.router = router;
    this.storage = storage;
    this.userData = userData;
    this.swUpdate = swUpdate;
    this.toastCtrl = toastCtrl;
    this.appPages = [{
      title: 'Dash',
      url: '/app/tabs/dash',
      icon: 'home'
    }, {
      title: 'Trades',
      url: '/app/tabs/trades',
      icon: 'calendar'
    }, {
      title: 'Speakers',
      url: '/app/tabs/speakers',
      icon: 'people'
    }, {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }];
    this.loggedIn = false;
    this.dark = false;
    this.initializeApp();
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storage.create();
      _this.checkLoginStatus();
      _this.listenForLoginEvents();
      _this.swUpdate.versionUpdates.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const toast = yield _this.toastCtrl.create({
            message: 'Update available!',
            position: 'bottom',
            buttons: [{
              role: 'cancel',
              text: 'Reload'
            }]
          });
          yield toast.present();
          toast.onDidDismiss().then(() => _this.swUpdate.activateUpdate()).then(() => window.location.reload());
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.hide();
        _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__.SplashScreen.hide();
      }
    });
  }
  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }
  updateLoggedInStatus(loggedIn) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }
  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });
    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });
    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }
  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/app/tabs/dash');
    });
  }
  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
_AppComponent = AppComponent;
_AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_3__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController));
};
_AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _AppComponent,
  selectors: [["app-root"]],
  decls: 19,
  vars: 5,
  consts: [["contentId", "main-content"], ["lines", "none"], ["autoHide", "false", 4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], ["autoHide", "false"], ["button", "", "detail", "false", 3, "click"], ["slot", "start", "name", "hammer"], ["id", "main-content"], ["routerLinkActive", "selected", "routerDirection", "root", "detail", "false", 3, "routerLink"], ["slot", "start", 3, "name"], ["routerLink", "/account", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "person"], ["routerLink", "/support", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "help"], ["slot", "start", "name", "log-out"], ["routerLink", "/login", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "log-in"], ["routerLink", "/signup", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "person-add"], ["slot", "start", "name", "moon-outline"], [3, "ngModelChange", "ngModel"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-app")(1, "ion-split-pane", 0)(2, "ion-menu", 0)(3, "ion-content")(4, "ion-list", 1)(5, "ion-list-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Conference ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AppComponent_ion_menu_toggle_7_Template, 5, 3, "ion-menu-toggle", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AppComponent_ion_list_8_Template, 18, 0, "ion-list", 3)(9, AppComponent_ion_list_9_Template, 22, 1, "ion-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-list", 1)(11, "ion-list-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Tutorial ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-menu-toggle", 4)(14, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_14_listener() {
        return ctx.openTutorial();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Show Tutorial");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "ion-router-outlet", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ion-palette-dark", ctx.dark);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.appPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate],
  styles: ["ion-menu ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: var(--ion-item-background, var(--ion-background-color, #ffffff));\n}\n\n/* Remove background transitions for switching themes */\nion-menu ion-item {\n  --transition: none;\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/*\n * Material Design Menu\n*/\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-list-header {\n  padding-right: 18px;\n  padding-left: 18px;\n  font-size: min(0.875rem, 32px);\n  font-weight: 450;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\nion-menu.md ion-item {\n  --padding-start: 18px;\n  margin-right: 10px;\n  border-radius: 0 50px 50px 0;\n  font-weight: 500;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgb(var(--ion-color-primary-rgb) 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-item ion-icon {\n  color: var(--ion-color-step-650, #5f6368);\n}\n\nion-menu.md ion-list:not(:last-of-type) {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\n/*\n * iOS Menu\n*/\nion-menu.ios ion-list-header {\n  margin-bottom: 8px;\n  padding-right: 16px;\n  padding-left: 16px;\n  font-size: clamp(22px, 1.375rem, 40px);\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  color: #73849a;\n  font-size: 24px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhFQUFBO0FBQ0Y7O0FBRUEsdURBQUE7QUFDQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQUVBOztDQUFBO0FBR0E7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsOEJBQUE7RUFFQSxnQkFBQTtFQUVBLHFCQUFBO0VBRUEseUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBRUEsa0JBQUE7RUFFQSw0QkFBQTtFQUVBLGdCQUFBO0FBTkY7O0FBU0E7RUFDRSxvREFBQTtBQU5GOztBQVNBO0VBQ0UsK0JBQUE7QUFORjs7QUFTQTs7RUFFRSx5Q0FBQTtBQU5GOztBQVNBO0VBQ0UsMkRBQUE7QUFORjs7QUFVQTs7Q0FBQTtBQUdBO0VBQ0Usa0JBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsc0NBQUE7QUFURjs7QUFZQTtFQUNFLGlCQUFBO0FBVEY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSxjQUFBO0VBRUEsZUFBQTtBQVZGOztBQWFBO0VBQ0UsK0JBQUE7QUFWRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZmZmZikpO1xufVxuXG4vKiBSZW1vdmUgYmFja2dyb3VuZCB0cmFuc2l0aW9ucyBmb3Igc3dpdGNoaW5nIHRoZW1lcyAqL1xuaW9uLW1lbnUgaW9uLWl0ZW0ge1xuICAtLXRyYW5zaXRpb246IG5vbmU7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIE1lbnVcbiovXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1yaWdodDogMThweDtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuXG4gIGZvbnQtc2l6ZTogbWluKDAuODc1cmVtLCAzMnB4KTtcblxuICBmb250LXdlaWdodDogNDUwO1xuXG4gIGxldHRlci1zcGFjaW5nOiAuMWVtO1xuXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xuXG4gIG1hcmdpbi1yaWdodDogMTBweDtcblxuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xuXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02NTAsICM1ZjYzNjgpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdDpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuXG4vKlxuICogaU9TIE1lbnVcbiovXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcblxuICBmb250LXNpemU6IGNsYW1wKDIycHgsIDEuMzc1cmVtLCA0MHB4KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzczODQ5YTtcblxuICBmb250LXNpemU6IDI0cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});

/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80197);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage-angular */ 26817);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 46140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 45312);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
var _AppModule;















class AppModule {}
_AppModule = AppModule;
_AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
_AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__.InAppBrowser, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__.HashLocationStrategy
  }
  // provideIonicAngular({
  //   useSetInputAPI: true, //  required for input signals on controller based modals.
  // })
  ],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule.forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 68005:
/*!***************************************************!*\
  !*** ./src/app/providers/check-tutorial.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkTutorialGuard: () => (/* binding */ checkTutorialGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 47743);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);




const checkTutorialGuard = () => {
  const storage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(storage.get('ion_did_tutorial')).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(didTutorial => {
    if (didTutorial === true) {
      router.navigate(['/app', 'tabs', 'dash']);
    }
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(didTutorial => !didTutorial));
};

/***/ }),

/***/ 59333:
/*!****************************************!*\
  !*** ./src/app/providers/user-data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserData: () => (/* binding */ UserData)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 47743);
var _UserData;



class UserData {
  constructor(storage) {
    this.storage = storage;
    this.favorites = [];
    this.HAS_LOGGED_IN = 'hasLoggedIn';
    this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  }
  hasFavorite(sessionName) {
    return this.favorites.indexOf(sessionName) > -1;
  }
  addFavorite(sessionName) {
    this.favorites.push(sessionName);
  }
  removeFavorite(sessionName) {
    const index = this.favorites.indexOf(sessionName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }
  login(username) {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }
  signup(username) {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }
  logout() {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('username');
    }).then(() => {
      window.dispatchEvent(new CustomEvent('user:logout'));
    });
  }
  setUsername(username) {
    return this.storage.set('username', username);
  }
  getUsername() {
    return this.storage.get('username').then(value => {
      return value;
    });
  }
  isLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then(value => {
      return value === true;
    });
  }
  checkHasSeenTutorial() {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then(value => {
      return value;
    });
  }
}
_UserData = UserData;
_UserData.ɵfac = function UserData_Factory(t) {
  return new (t || _UserData)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage));
};
_UserData.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _UserData,
  factory: _UserData.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ 45568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 45312);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 88996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		37518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		41981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		71603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		82273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		19642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		32095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		72335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		78221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		47184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		38759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		24248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		69863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		51769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-ae11fd43_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		76534,
		"default-node_modules_ionic_core_dist_esm_data-ae11fd43_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		25458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		70654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		36034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
	],
	"./ion-input.entry.js": [
		20761,
		"default-node_modules_ionic_core_dist_esm_input_utils-09c71bc7_js-node_modules_ionic_core_dist-8b8a84",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		29557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		68353,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		51024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		29160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		60393,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-option.entry.js": [
		68442,
		"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
	],
	"./ion-picker-column.entry.js": [
		43110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
	],
	"./ion-picker.entry.js": [
		15575,
		"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
	],
	"./ion-popover.entry.js": [
		16772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		34810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		14639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		90628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		10852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		61479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		24065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		57971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		93184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment-content.entry.js": [
		94312,
		"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
	],
	"./ion-segment-view.entry.js": [
		54540,
		"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select-modal.entry.js": [
		57101,
		"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
	],
	"./ion-select_3.entry.js": [
		78471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		40388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		42392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		36059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		50198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"default-node_modules_ionic_core_dist_esm_input_utils-09c71bc7_js-node_modules_ionic_core_dist-8b8a84",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		45297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 88996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 54140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 54140;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map