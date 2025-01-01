"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs-page_tabs-page_module_ts"],{

/***/ 1377:
/*!******************************************************!*\
  !*** ./src/app/pages/about-popover/about-popover.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverPage: () => (/* binding */ PopoverPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _PopoverPage;



class PopoverPage {
  constructor(popoverCtrl) {
    this.popoverCtrl = popoverCtrl;
  }
  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }
  close(url) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
_PopoverPage = PopoverPage;
_PopoverPage.ɵfac = function PopoverPage_Factory(t) {
  return new (t || _PopoverPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.PopoverController));
};
_PopoverPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _PopoverPage,
  selectors: [["ng-component"]],
  decls: 16,
  vars: 0,
  consts: [["button", "", 3, "click"]],
  template: function PopoverPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list")(1, "ion-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_1_listener() {
        return ctx.close("https://ionicframework.com/getting-started");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Learn Ionic");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_4_listener() {
        return ctx.close("https://ionicframework.com/docs/");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_7_listener() {
        return ctx.close("https://showcase.ionicframework.com");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Showcase");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_10_listener() {
        return ctx.close("https://github.com/ionic-team/ionic");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "GitHub Repo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_13_listener() {
        return ctx.support();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonList],
  encapsulation: 2
});

/***/ }),

/***/ 9087:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPageRoutingModule: () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ 6206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _AboutPageRoutingModule;




const routes = [{
  path: '',
  component: _about__WEBPACK_IMPORTED_MODULE_0__.AboutPage
}];
class AboutPageRoutingModule {}
_AboutPageRoutingModule = AboutPageRoutingModule;
_AboutPageRoutingModule.ɵfac = function AboutPageRoutingModule_Factory(t) {
  return new (t || _AboutPageRoutingModule)();
};
_AboutPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _AboutPageRoutingModule
});
_AboutPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2014:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutModule: () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ 6206);
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about-popover/about-popover */ 1377);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ 9087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
var _AboutModule;







class AboutModule {}
_AboutModule = AboutModule;
_AboutModule.ɵfac = function AboutModule_Factory(t) {
  return new (t || _AboutModule)();
};
_AboutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _AboutModule,
  bootstrap: [_about__WEBPACK_IMPORTED_MODULE_0__.AboutPage]
});
_AboutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_2__.AboutPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, {
    declarations: [_about__WEBPACK_IMPORTED_MODULE_0__.AboutPage, _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__.PopoverPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_2__.AboutPageRoutingModule]
  });
})();

/***/ }),

/***/ 6206:
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPage: () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var _home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about-popover/about-popover */ 1377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);

var _AboutPage;






const _c0 = () => ({
  "opacity": "1"
});
function AboutPage_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-datetime", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AboutPage_ng_template_39_Template_ion_datetime_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.conferenceDate, $event) || (ctx_r1.conferenceDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.conferenceDate);
  }
}
class AboutPage {
  constructor(popoverCtrl) {
    this.popoverCtrl = popoverCtrl;
    this.location = 'madison';
    this.conferenceDate = '2047-05-17';
    this.selectOptions = {
      header: 'Select a Location'
    };
  }
  presentPopover(event) {
    var _this = this;
    return (0,_home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverCtrl.create({
        component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__.PopoverPage,
        event
      });
      yield popover.present();
    })();
  }
}
_AboutPage = AboutPage;
_AboutPage.ɵfac = function AboutPage_Factory(t) {
  return new (t || _AboutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController));
};
_AboutPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _AboutPage,
  selectors: [["page-about"]],
  decls: 54,
  vars: 23,
  consts: [[1, "ion-no-border"], ["slot", "start"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "ios", "ellipsis-horizontal", "md", "ellipsis-vertical"], [1, "about-header"], [1, "about-image", "madison", 3, "ngStyle"], [1, "about-image", "austin", 3, "ngStyle"], [1, "about-image", "chicago", 3, "ngStyle"], [1, "about-image", "seattle", 3, "ngStyle"], [1, "about-info"], [1, "ion-padding-top", "ion-padding-start"], [1, "ion-padding-start", "ion-padding-end"], ["lines", "none"], ["label", "Location", 3, "ngModelChange", "ngModel", "interfaceOptions"], ["value", "madison"], ["value", "austin"], ["value", "chicago"], ["value", "seattle"], ["button", "true", "id", "open-date-input"], ["id", "date-input-popover", "trigger", "open-date-input", "side", "top", "alignment", "end", 3, "showBackdrop"], [1, "ion-text-end"], ["max", "2056", "presentation", "date", 3, "ngModelChange", "ngModel"]],
  template: function AboutPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content")(1, "ion-header", 0)(2, "ion-toolbar")(3, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-buttons", 2)(6, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AboutPage_Template_ion_button_click_6_listener($event) {
        return ctx.presentPopover($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-list", 13)(22, "ion-item")(23, "ion-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AboutPage_Template_ion_select_ngModelChange_23_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.location, $event) || (ctx.location = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-select-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Madison, WI");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-select-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Austin, TX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-select-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Chicago, IL");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-select-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Seattle, WA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-item", 19)(33, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-text", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-popover", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, AboutPage_ng_template_39_Template, 1, 1, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Internet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-list", 13)(43, "ion-item")(44, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Wifi network ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "ion-item")(50, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " makegoodthings ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "madison" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "austin" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "chicago" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "seattle" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" The Ionic Conference is a one-day conference on ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 10, ctx.conferenceDate, "mediumDate"), " featuring talks from the Ionic team. It is focused on Ionic applications being built with Ionic Framework. This includes migrating apps to the latest version of the framework, Angular concepts, Webpack, Sass, and many other technologies used in Ionic 2. Tickets are completely sold out, and we\u2019re expecting more than 1000 developers \u2013 making this the largest Ionic conference ever! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.location);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interfaceOptions", ctx.selectOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](37, 13, ctx.conferenceDate, "mediumDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showBackdrop", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ica", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](48, 16, ctx.conferenceDate, "y"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n}\n\nion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], \nion-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], \nion-toolbar[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%] {\n  --color: white;\n}\n\n.about-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  transition: opacity 500ms ease-in-out;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  opacity: 0;\n}\n\n.about-header[_ngcontent-%COMP%]   .madison[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/madison.jpg\");\n}\n\n.about-header[_ngcontent-%COMP%]   .austin[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/austin.jpg\");\n}\n\n.about-header[_ngcontent-%COMP%]   .chicago[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/chicago.jpg\");\n}\n\n.about-header[_ngcontent-%COMP%]   .seattle[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/seattle.jpg\");\n}\n\n.about-info[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #ffffff);\n  z-index: 2;\n}\n\n.about-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.about-info[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.about-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  line-height: 130%;\n}\n\n.about-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n#date-input-popover[_ngcontent-%COMP%] {\n  --offset-y: -var(--ion-safe-area-bottom);\n  --max-width: 90%;\n  --width: 336px;\n}\n\n\n\n\n\n.ios[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%] {\n  --ion-padding: 19px;\n}\n\n.ios[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBQUY7O0FBR0E7OztFQUdFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBRUEsUUFBQTtFQUVBLHFDQUFBO0VBRUEsNEJBQUE7RUFFQSwyQkFBQTtFQUNBLHNCQUFBO0VBRUEsVUFBQTtBQU5GOztBQVNBO0VBQ0Usc0RBQUE7QUFORjs7QUFTQTtFQUNFLHFEQUFBO0FBTkY7O0FBU0E7RUFDRSxzREFBQTtBQU5GOztBQVNBO0VBQ0Usc0RBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBRUEsaUJBQUE7RUFFQSxtQkFBQTtFQUVBLGdEQUFBO0VBRUEsVUFBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtBQVZGOztBQWFBO0VBQ0UsNEJBQUE7RUFFQSxpQkFBQTtBQVhGOztBQWNBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQVhGOztBQWNBO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFYRjs7QUFjQTs7RUFBQTtBQUlBO0VBQ0UsbUJBQUE7QUFaRjs7QUFlQTtFQUNFLGdCQUFBO0FBWkYiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdXQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgaW5zZXQ6IDA7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcblxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBvcGFjaXR5OiAwO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5tYWRpc29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYWJvdXQvbWFkaXNvbi5qcGdcIik7XG59XG5cbi5hYm91dC1oZWFkZXIgLmF1c3RpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Fib3V0L2F1c3Rpbi5qcGdcIik7XG59XG5cbi5hYm91dC1oZWFkZXIgLmNoaWNhZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9hYm91dC9jaGljYWdvLmpwZ1wiKTtcbn1cblxuLmFib3V0LWhlYWRlciAuc2VhdHRsZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Fib3V0L3NlYXR0bGUuanBnXCIpO1xufVxuXG4uYWJvdXQtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBtYXJnaW4tdG9wOiAtMTBweDtcblxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmZmZmKTtcblxuICB6LWluZGV4OiAyOyAvLyBkaXNwbGF5IHJvdW5kZWQgYm9yZGVyIGFib3ZlIGhlYWRlciBpbWFnZVxufVxuXG4uYWJvdXQtaW5mbyBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xufVxuXG4uYWJvdXQtaW5mbyBpb24taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xufVxuXG4jZGF0ZS1pbnB1dC1wb3BvdmVyIHtcbiAgLS1vZmZzZXQteTogLXZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tKTtcbiAgLS1tYXgtd2lkdGg6IDkwJTtcbiAgLS13aWR0aDogMzM2cHg7XG59XG5cbi8qXG4gKiBpT1MgT25seVxuICovXG5cbi5pb3MgLmFib3V0LWluZm8ge1xuICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xufVxuXG4uaW9zIC5hYm91dC1pbmZvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5861:
/*!***************************************************!*\
  !*** ./src/app/pages/dash/dash-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashPageRoutingModule: () => (/* binding */ DashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash */ 3400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _DashPageRoutingModule;




const routes = [{
  path: '',
  component: _dash__WEBPACK_IMPORTED_MODULE_0__.DashPage
}];
class DashPageRoutingModule {}
_DashPageRoutingModule = DashPageRoutingModule;
_DashPageRoutingModule.ɵfac = function DashPageRoutingModule_Factory(t) {
  return new (t || _DashPageRoutingModule)();
};
_DashPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _DashPageRoutingModule
});
_DashPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6060:
/*!*******************************************!*\
  !*** ./src/app/pages/dash/dash.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashModule: () => (/* binding */ DashModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash */ 3400);
/* harmony import */ var _dash_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dash-routing.module */ 5861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _DashModule;





class DashModule {}
_DashModule = DashModule;
_DashModule.ɵfac = function DashModule_Factory(t) {
  return new (t || _DashModule)();
};
_DashModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _DashModule
});
_DashModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _dash_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashModule, {
    declarations: [_dash__WEBPACK_IMPORTED_MODULE_0__.DashPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _dash_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashPageRoutingModule]
  });
})();

/***/ }),

/***/ 3400:
/*!************************************!*\
  !*** ./src/app/pages/dash/dash.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashPage: () => (/* binding */ DashPage)
/* harmony export */ });
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
var _DashPage;






function DashPage_ion_segment_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-segment", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function DashPage_ion_segment_4_Template_ion_segment_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.segment, $event) || (ctx_r1.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-segment-button", 19)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-segment-button", 20)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.segment);
  }
}
function DashPage_ion_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Dash");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DashPage_ion_toolbar_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-toolbar")(1, "ion-segment", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function DashPage_ion_toolbar_6_Template_ion_segment_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.segment, $event) || (ctx_r1.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-segment-button", 19)(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-segment-button", 21)(6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.segment);
  }
}
function DashPage_ng_template_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The lower the score, the higher the odds are that a company is heading for bankruptcy. An Altman Z-score of lower than 1.8, in particular, indicates that the company is on its way to bankruptcy. Companies with scores above 3 are unlikely to enter bankruptcy. Scores in between 1.8 and 3 define a gray area.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class DashPage {
  constructor(apiService, config) {
    this.apiService = apiService;
    this.config = config;
    this.segment = 'summary';
    this.metrics = this.apiService.getMetrics();
    this.apiService.getMetrics().subscribe(res => {
      console.log(res);
    });
  }
  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";
  }
}
_DashPage = DashPage;
_DashPage.ɵfac = function DashPage_Factory(t) {
  return new (t || _DashPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Config));
};
_DashPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _DashPage,
  selectors: [["page-dash"]],
  decls: 130,
  vars: 45,
  consts: [["translucent", "true"], ["slot", "start"], [3, "ngModel", "ngModelChange", 4, "ngIf"], [4, "ngIf"], ["fullscreen", "true"], ["collapse", "condense"], ["size", "large"], ["id", "summary"], [1, "ion-margin-top", "ion-padding-horizontal"], ["size", "small", "fill", "outline", 1, "ion-margin-end"], ["size", "small", "fill", "outline"], ["lines", "inset"], ["slot", "end"], [1, "ion-display-flex", "ion-align-items-center"], [1, "ion-margin-end"], ["id", "click-trigger", "name", "information-circle-outline"], ["side", "right", "size", "auto", "trigger", "click-trigger", "triggerAction", "click"], ["id", "stats"], [3, "ngModelChange", "ngModel"], ["value", "summary", "content-id", "summary"], ["value", "stats", "content-id", "stats`"], ["value", "stats", "content-id", "stats"], [1, "ion-padding"]],
  template: function DashPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashPage_ion_segment_4_Template, 7, 1, "ion-segment", 2)(5, DashPage_ion_title_5_Template, 2, 0, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DashPage_ion_toolbar_6_Template, 8, 1, "ion-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 4)(8, "ion-header", 5)(9, "ion-toolbar")(10, "ion-title", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Dash");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-segment-view")(13, "ion-segment-content", 7)(14, "div", 8)(15, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "30D");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "3M");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "6M");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "12M");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-list")(26, "ion-list-header", 11)(27, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "P/L Stats");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item")(30, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-item")(36, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Trades");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-item")(42, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Win Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-item")(48, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Profit Factor");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-item")(54, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Average Win (pips)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-item")(60, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Average Loss (pips)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-item")(66, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Best Trade (pips)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ion-item")(72, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Worst Trade (pips)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ion-item")(78, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Standard Deviation");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "ion-item")(84, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Expectancy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "ion-item")(90, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Probability");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "ion-item")(96, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Sharpe Ratio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "ion-item")(102, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "CAGR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](106, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "ion-item")(108, "ion-label")(109, "div", 13)(110, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "zScore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "ion-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "ion-popover", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, DashPage_ng_template_114_Template, 2, 0, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](117, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "ion-list")(119, "ion-list-header", 11)(120, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Inset");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "ion-item")(123, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "ion-item")(126, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "ion-segment-content", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, " abc ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      let tmp_15_0;
      let tmp_16_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 17, ctx.metrics)) == null ? null : tmp_3_0.daysSinceTradingStarted);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 19, ctx.metrics)) == null ? null : tmp_4_0.trades);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 21, ctx.metrics)) == null ? null : tmp_5_0.wonTradesPercent);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 23, ctx.metrics)) == null ? null : tmp_6_0.profitFactor);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 25, ctx.metrics)) == null ? null : tmp_7_0.averageWinPips);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 27, ctx.metrics)) == null ? null : tmp_8_0.averageLossPips);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 29, ctx.metrics)) == null ? null : tmp_9_0.bestTradePips);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 31, ctx.metrics)) == null ? null : tmp_10_0.worstTradePips);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 33, ctx.metrics)) == null ? null : tmp_11_0.standardDeviationProfit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 35, ctx.metrics)) == null ? null : tmp_12_0.expectancy);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](94, 37, ctx.metrics)) == null ? null : tmp_13_0.probability);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 39, ctx.metrics)) == null ? null : tmp_14_0.sharpeRatio);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](106, 41, ctx.metrics)) == null ? null : tmp_15_0.cagr);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](117, 43, ctx.metrics)) == null ? null : tmp_16_0.zScore);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegmentContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegmentView, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1732:
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryPageRoutingModule: () => (/* binding */ HistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ 918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _HistoryPageRoutingModule;




const routes = [{
  path: '',
  component: _history__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
}];
class HistoryPageRoutingModule {}
_HistoryPageRoutingModule = HistoryPageRoutingModule;
_HistoryPageRoutingModule.ɵfac = function HistoryPageRoutingModule_Factory(t) {
  return new (t || _HistoryPageRoutingModule)();
};
_HistoryPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _HistoryPageRoutingModule
});
_HistoryPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HistoryPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1590:
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryPageModule: () => (/* binding */ HistoryPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ 918);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-routing.module */ 1732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _HistoryPageModule;





class HistoryPageModule {}
_HistoryPageModule = HistoryPageModule;
_HistoryPageModule.ɵfac = function HistoryPageModule_Factory(t) {
  return new (t || _HistoryPageModule)();
};
_HistoryPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _HistoryPageModule
});
_HistoryPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _history_routing_module__WEBPACK_IMPORTED_MODULE_1__.HistoryPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HistoryPageModule, {
    declarations: [_history__WEBPACK_IMPORTED_MODULE_0__.HistoryPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _history_routing_module__WEBPACK_IMPORTED_MODULE_1__.HistoryPageRoutingModule]
  });
})();

/***/ }),

/***/ 918:
/*!******************************************!*\
  !*** ./src/app/pages/history/history.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryPage: () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var _home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);

var _HistoryPage;






const _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];
function HistoryPage_ion_segment_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-segment", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function HistoryPage_ion_segment_4_Template_ion_segment_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.segment, $event) || (ctx_r2.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-segment-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Trades ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-segment-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-segment-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Withdrawal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.segment);
  }
}
function HistoryPage_ion_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "History");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HistoryPage_ion_toolbar_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-toolbar")(1, "ion-segment", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function HistoryPage_ion_toolbar_11_Template_ion_segment_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.segment, $event) || (ctx_r2.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-segment-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Trades ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-segment-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-segment-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Withdrawal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.segment);
  }
}
function HistoryPage_ng_container_17_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-skeleton-text", 19)(3, "ion-skeleton-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-skeleton-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("animated", true);
  }
}
function HistoryPage_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HistoryPage_ng_container_17_ion_item_2_Template, 6, 3, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
  }
}
function HistoryPage_ng_template_18_ion_item_group_1_ion_item_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 26)(1, "ion-label")(2, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 21)(9, "ion-note", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const trade_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("track", trade_r5.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", trade_r5.symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("sell", trade_r5.success === "lost")("buy", trade_r5.success === "won");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](trade_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", trade_r5.openPrice, " \u2192 ", trade_r5.closePrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", trade_r5.success === "won" ? "rise" : "fall");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 13, trade_r5.pips * 10, "1.2-2"), " pips");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](14, 16, trade_r5.closeTime, "HH:mm"), ", ", trade_r5.durationInMinutes, " min");
  }
}
function HistoryPage_ng_template_18_ion_item_group_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item-group")(1, "ion-item-divider", 23)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "small", 5)(5, "ion-text", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-text", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HistoryPage_ng_template_18_ion_item_group_1_ion_item_10_Template, 15, 19, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r6.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", x_r6.trades.length, " trades | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", x_r6.pips < 0 ? "fall" : "rise");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 5, x_r6.pips * 10, "1.2-2"), " pips");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", x_r6.trades);
  }
}
function HistoryPage_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HistoryPage_ng_template_18_ion_item_group_1_Template, 11, 8, "ion-item-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.trades);
  }
}
class HistoryPage {
  constructor(apiService, actionSheetCtrl, config, modalCtrl, routerOutlet) {
    this.apiService = apiService;
    this.actionSheetCtrl = actionSheetCtrl;
    this.config = config;
    this.modalCtrl = modalCtrl;
    this.routerOutlet = routerOutlet;
    this.loading = true; // Initial loading state
    this.segment = "trades";
    this.excludeTracks = [];
  }
  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";
  }
  ionViewWillEnter() {
    this.loading = true;
    console.log(this.loading);
    this.apiService.getHistoryTrades().subscribe(res => {
      this.trades = this.groupTradesByCloseDate(res);
      this.loading = false; // Set loading to false after fetching trades
      console.log(this.loading);
      console.log(this.trades);
    });
  }
  ionViewDidEnter() {}
  groupTradesByCloseDate(trades) {
    return trades.filter(trade => trade.type !== "DEAL_TYPE_BALANCE") // Exclude balance trades
    .map(trade => ({
      ...trade,
      type: trade.type === "DEAL_TYPE_BUY" ? "buy" : trade.type === "DEAL_TYPE_SELL" ? "sell" : trade.type,
      comment: trade.comment ? trade.comment.toLowerCase().includes("tp") ? "tp" : trade.comment.toLowerCase().includes("sl") ? "sl" : trade.comment : trade.comment
    })) // Map type and comment fields
    .reduce((acc, trade) => {
      const date = trade.closeTime.split(" ")[0]; // Extract YYYY-MM-DD
      let group = acc.find(g => g.date === date);
      if (!group) {
        group = {
          date,
          trades: [],
          pips: 0
        }; // Initialize pips for the group
        acc.push(group);
      }
      group.trades.push(trade);
      group.pips += trade.pips || 0; // Accumulate pips, default to 0 if undefined
      return acc;
    }, []);
  }
  filterBySymbol() {}
  filterByDate() {
    var _this = this;
    return (0,_home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this.actionSheetCtrl.create({
        header: 'Actions',
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete'
          }
        }, {
          text: 'Share',
          data: {
            action: 'share'
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel'
          }
        }]
      });
      yield actionSheet.present();
    })();
  }
}
_HistoryPage = HistoryPage;
_HistoryPage.ɵfac = function HistoryPage_Factory(t) {
  return new (t || _HistoryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Config), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRouterOutlet));
};
_HistoryPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _HistoryPage,
  selectors: [["page-history"]],
  decls: 20,
  vars: 5,
  consts: [["tradesList", ""], ["translucent", "true"], ["slot", "start"], [3, "ngModel", "value", "ngModelChange", 4, "ngIf"], [4, "ngIf"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "options"], ["id", "filterByDate"], ["slot", "icon-only", "name", "calendar"], ["fullscreen", "true"], ["collapse", "condense"], ["size", "large"], [4, "ngIf", "ngIfElse"], [3, "ngModelChange", "ngModel", "value"], ["value", "trades"], ["value", "orders"], ["value", "depo"], [4, "ngFor", "ngForOf"], [2, "width", "70%", 3, "animated"], [2, "width", "50%", 3, "animated"], ["slot", "end", 1, "ion-text-wrap", "ion-text-right"], [2, "width", "30%", 3, "animated"], ["sticky", ""], [3, "color"], [3, "track", 4, "ngFor", "ngForOf"], [3, "track"], [1, "ion-align-items-center"], [1, "ion-margin-start", "order-type", "sell"], [1, "pips", 3, "color"], ["color", "medium", 1, "time"]],
  template: function HistoryPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HistoryPage_ion_segment_4_Template, 7, 2, "ion-segment", 3)(5, HistoryPage_ion_title_5_Template, 2, 0, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-buttons", 5)(7, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoryPage_Template_ion_button_click_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.filterBySymbol());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HistoryPage_ion_toolbar_11_Template, 8, 2, "ion-toolbar", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-content", 10)(13, "ion-header", 11)(14, "ion-toolbar")(15, "ion-title", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HistoryPage_ng_container_17_Template, 3, 2, "ng-container", 13)(18, HistoryPage_ng_template_18_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const tradesList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", tradesList_r7);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["ion-item[track=tp][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid var(--ion-color-rise);\n}\n\nion-item[track=sl][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid var(--ion-color-fall);\n}\n\nion-fab-button[_ngcontent-%COMP%] {\n  --background: var(--ion-color-step-150, #ffffff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n\n\n\n\n\n.ios[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n}\nion-label[_ngcontent-%COMP%]   .order-type[_ngcontent-%COMP%] {\n  font-size: x-small;\n  padding: 2px 6px;\n  border-radius: 3px;\n  margin-left: 10px;\n}\nion-label[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-rise);\n  color: var(--ion-color-rise);\n}\nion-label[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-fall);\n  color: var(--ion-color-fall);\n}\n\n.pips[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 24px;\n}\n\n.time[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdHJhZGVzL3RyYWRlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FO0VBQ0Usa0JBQUE7RUFDQSw0Q0FBQTtBQUxKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSw0Q0FBQTtBQUFKOztBQUlBO0VBQ0UsZ0RBQUE7RUFDQSxzREFBQTtFQUNBLHdEQUFBO0VBQ0EsMENBQUE7QUFERjs7QUFJQTs7O0VBQUE7QUFJQTtFQUNFLDBEQUFBO0FBREY7O0FBS0U7RUFDRSxhQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSEo7QUFNRTtFQUNFLHVDQUFBO0VBQ0EsNEJBQUE7QUFKSjtBQU9FO0VBQ0UsdUNBQUE7RUFDQSw0QkFBQTtBQUxKOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EseUVBQUE7QUFORiIsInNvdXJjZXNDb250ZW50IjpbIiRjYXRlZ29yaWVzOiAoXG4gIHRwOiB2YXIoLS1pb24tY29sb3ItcmlzZSksXG4gIHNsOiB2YXIoLS1pb24tY29sb3ItZmFsbClcbik7XG5cbkBlYWNoICR0cmFjaywgJHZhbHVlIGluIG1hcC1yZW1vdmUoJGNhdGVnb3JpZXMpIHtcbiAgaW9uLWl0ZW1bdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHZhbHVlO1xuICB9XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNmZmZmZmYpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2YyZjJmMik7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsICNkOWQ5ZDkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcbiAqIHNvIG9ubHkgc3R5bGUgdGhlIGlPUyBhY3RpdmF0ZWQgYmFja2dyb3VuZFxuICovXG4uaW9zIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgaDMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAub3JkZXItdHlwZSB7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLmJ1eXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcmlzZSk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yaXNlKTtcbiAgfVxuXG4gIC5zZWxse1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1mYWxsKTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZhbGwpO1xuICB9XG59XG5cbi5waXBze1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4udGltZXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDAwLCAjNjY2NjY2KSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4523:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-page */ 2122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _TabsPageRoutingModule;




const routes = [{
  path: 'tabs',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: 'dash',
    children: [{
      path: '',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../dash/dash.module */ 6060)).then(m => m.DashModule)
    }]
  }, {
    path: 'trades',
    children: [{
      path: '',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../trades/trades.module */ 9286)).then(m => m.TradesModule)
      // component: SchedulePage,
    }
    // {
    //   path: 'session/:sessionId',
    //   loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
    // }
    ]
  }, {
    path: 'history',
    children: [{
      path: '',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../history/history.module */ 1590)).then(m => m.HistoryPageModule)
    }
    // {
    //   path: 'session/:sessionId',
    //   loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
    // },
    // {
    //   path: 'speaker-details/:speakerId',
    //   loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
    // }
    ]
  }, {
    path: 'about',
    children: [{
      path: '',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../about/about.module */ 2014)).then(m => m.AboutModule)
    }]
  }, {
    path: '',
    redirectTo: '/app/tabs/trades',
    pathMatch: 'full'
  }]
}];
class TabsPageRoutingModule {}
_TabsPageRoutingModule = TabsPageRoutingModule;
_TabsPageRoutingModule.ɵfac = function TabsPageRoutingModule_Factory(t) {
  return new (t || _TabsPageRoutingModule)();
};
_TabsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _TabsPageRoutingModule
});
_TabsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 650:
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsModule: () => (/* binding */ TabsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-page */ 2122);
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-page-routing.module */ 4523);
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.module */ 2014);
/* harmony import */ var _dash_dash_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dash/dash.module */ 6060);
/* harmony import */ var _trades_trades_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trades/trades.module */ 9286);
/* harmony import */ var _history_history_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../history/history.module */ 1590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
var _TabsModule;









class TabsModule {}
_TabsModule = TabsModule;
_TabsModule.ɵfac = function TabsModule_Factory(t) {
  return new (t || _TabsModule)();
};
_TabsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _TabsModule
});
_TabsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_2__.AboutModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _dash_dash_module__WEBPACK_IMPORTED_MODULE_3__.DashModule, _trades_trades_module__WEBPACK_IMPORTED_MODULE_4__.TradesModule, _history_history_module__WEBPACK_IMPORTED_MODULE_5__.HistoryPageModule, _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TabsModule, {
    declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage],
    imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_2__.AboutModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _dash_dash_module__WEBPACK_IMPORTED_MODULE_3__.DashModule, _trades_trades_module__WEBPACK_IMPORTED_MODULE_4__.TradesModule, _history_history_module__WEBPACK_IMPORTED_MODULE_5__.HistoryPageModule, _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule]
  });
})();

/***/ }),

/***/ 2122:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _TabsPage;


class TabsPage {}
_TabsPage = TabsPage;
_TabsPage.ɵfac = function TabsPage_Factory(t) {
  return new (t || _TabsPage)();
};
_TabsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _TabsPage,
  selectors: [["ng-component"]],
  decls: 18,
  vars: 0,
  consts: [["slot", "bottom"], ["tab", "dash"], ["name", "stats-chart"], ["tab", "trades"], ["name", "analytics"], ["tab", "history"], ["name", "list"], ["tab", "about"], ["name", "information-circle"]],
  template: function TabsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs")(1, "ion-tab-bar", 0)(2, "ion-tab-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dash");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Trades");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-tab-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-tab-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Statistics");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabs],
  encapsulation: 2
});

/***/ }),

/***/ 6606:
/*!****************************************************!*\
  !*** ./src/app/pages/trade-filter/trade-filter.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TradeFilterPage: () => (/* binding */ TradeFilterPage)
/* harmony export */ });
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 3798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
var _TradeFilterPage;







function TradeFilterPage_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TradeFilterPage_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TradeFilterPage_ion_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TradeFilterPage_ion_button_4_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selectAll(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TradeFilterPage_ion_item_14_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 11);
  }
  if (rf & 2) {
    const track_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", track_r5.icon);
  }
}
function TradeFilterPage_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TradeFilterPage_ion_item_14_ion_icon_2_Template, 1, 1, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TradeFilterPage_ion_item_14_Template_ion_checkbox_ngModelChange_3_listener($event) {
      const track_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](track_r5.isChecked, $event) || (track_r5.isChecked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const track_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("track", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, track_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.ios);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", track_r5.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", track_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", track_r5.name, " ");
  }
}
function TradeFilterPage_ion_footer_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TradeFilterPage_ion_footer_15_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selectAll(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Deselect All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 3)(6, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TradeFilterPage_ion_footer_15_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selectAll(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class TradeFilterPage {
  constructor(confData, config, modalCtrl, navParams) {
    this.confData = confData;
    this.config = config;
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.tracks = [];
  }
  ionViewWillEnter() {
    this.ios = this.config.get('mode') === `ios`;
    // passed in array of track names that should be excluded (unchecked)
    const excludedTrackNames = this.navParams.get('excludedTracks');
    this.confData.getTracks().subscribe(tracks => {
      tracks.forEach(track => {
        this.tracks.push({
          name: track.name,
          icon: track.icon,
          isChecked: excludedTrackNames.indexOf(track.name) === -1
        });
      });
    });
  }
  selectAll(check) {
    // set all to checked or unchecked
    this.tracks.forEach(track => {
      track.isChecked = check;
    });
  }
  applyFilters() {
    // Pass back a new array of track names to exclude
    const excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }
  dismiss(data) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
_TradeFilterPage = TradeFilterPage;
_TradeFilterPage.ɵfac = function TradeFilterPage_Factory(t) {
  return new (t || _TradeFilterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_0__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Config), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams));
};
_TradeFilterPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _TradeFilterPage,
  selectors: [["page-trade-filter"]],
  decls: 16,
  vars: 5,
  consts: [["translucent", "true"], ["slot", "start"], [3, "click", 4, "ngIf"], ["slot", "end"], ["strong", "", 3, "click"], [3, "lines"], [4, "ngFor", "ngForOf"], ["translucent", "true", 4, "ngIf"], [3, "click"], ["slot", "start", "color", "medium", 3, "name", 4, "ngIf"], [3, "ngModelChange", "ngModel"], ["slot", "start", "color", "medium", 3, "name"]],
  template: function TradeFilterPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TradeFilterPage_ion_button_3_Template, 2, 0, "ion-button", 2)(4, TradeFilterPage_ion_button_4_Template, 2, 0, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Filter Sessions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-buttons", 3)(8, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TradeFilterPage_Template_ion_button_click_8_listener() {
        return ctx.applyFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Done");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content")(11, "ion-list", 5)(12, "ion-list-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Tracks");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TradeFilterPage_ion_item_14_Template, 5, 7, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TradeFilterPage_ion_footer_15_Template, 8, 0, "ion-footer", 7);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lines", ctx.ios ? "inset" : "full");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tracks);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ios);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.BooleanValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.LowerCasePipe],
  styles: ["\n\n\n\n.md[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  text-transform: capitalize;\n}\n\n.md[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --checkbox-background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n\n.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n\n\n\n\n.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.ios[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdHJhZGUtZmlsdGVyL3RyYWRlLWZpbHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBSUE7RUFDRSxpQkFBQTtFQUVBLDBCQUFBO0FBREY7O0FBSUE7RUFDRSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFLQTs7RUFBQTtBQUlBO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTWF0ZXJpYWwgRGVzaWduXG4gKi9cblxuLm1kIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICBsZXR0ZXItc3BhY2luZzogMDtcblxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1kIGlvbi1jaGVja2JveCB7XG4gIC0tY2hlY2tib3gtYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuXG4vKlxuICogaU9TXG4gKi9cblxuLmlvcyBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW9zIGlvbi1jaGVja2JveCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7527:
/*!*******************************************************!*\
  !*** ./src/app/pages/trades/trades-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TradesRoutingModule: () => (/* binding */ TradesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _trades__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trades */ 6102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _TradesRoutingModule;




const routes = [{
  path: '',
  component: _trades__WEBPACK_IMPORTED_MODULE_0__.TradesPage
}];
class TradesRoutingModule {}
_TradesRoutingModule = TradesRoutingModule;
_TradesRoutingModule.ɵfac = function TradesRoutingModule_Factory(t) {
  return new (t || _TradesRoutingModule)();
};
_TradesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _TradesRoutingModule
});
_TradesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TradesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9286:
/*!***********************************************!*\
  !*** ./src/app/pages/trades/trades.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TradesModule: () => (/* binding */ TradesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _trades__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trades */ 6102);
/* harmony import */ var _trade_filter_trade_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trade-filter/trade-filter */ 6606);
/* harmony import */ var _trades_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trades-routing.module */ 7527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
var _TradesModule;







class TradesModule {}
_TradesModule = TradesModule;
_TradesModule.ɵfac = function TradesModule_Factory(t) {
  return new (t || _TradesModule)();
};
_TradesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _TradesModule
});
_TradesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _trades_routing_module__WEBPACK_IMPORTED_MODULE_2__.TradesRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TradesModule, {
    declarations: [_trades__WEBPACK_IMPORTED_MODULE_0__.TradesPage, _trade_filter_trade_filter__WEBPACK_IMPORTED_MODULE_1__.TradeFilterPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _trades_routing_module__WEBPACK_IMPORTED_MODULE_2__.TradesRoutingModule]
  });
})();

/***/ }),

/***/ 6102:
/*!****************************************!*\
  !*** ./src/app/pages/trades/trades.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TradesPage: () => (/* binding */ TradesPage)
/* harmony export */ });
/* harmony import */ var _home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _trade_filter_trade_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trade-filter/trade-filter */ 6606);
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/conference-data */ 3798);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user-data */ 9333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);

var _TradesPage;













const _c0 = ["scheduleList"];
const _c1 = () => [0, 1, 2, 3];
function TradesPage_ion_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TradesPage_ion_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TradesPage_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TradesPage_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TradesPage_ion_item_sliding_22_ion_item_option_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TradesPage_ion_item_sliding_22_ion_item_option_15_Template_ion_item_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.removeFavorite(ctx_r2.slidingItem, ctx_r2.session, "Remove Favorite"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TradesPage_ion_item_sliding_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-item")(2, "ion-label")(3, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "XAUUSD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "SELL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "2685 \u2192 2650");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 22)(10, "ion-note", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "+25 pips");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "2 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-item-options");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, TradesPage_ion_item_sliding_22_ion_item_option_15_Template, 2, 0, "ion-item-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.segment === "favorites");
  }
}
function TradesPage_ion_item_sliding_29_ion_item_option_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TradesPage_ion_item_sliding_29_ion_item_option_13_Template_ion_item_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const slidingItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.removeFavorite(slidingItem_r5, ctx_r2.session, "Remove Favorite"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TradesPage_ion_item_sliding_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-sliding", null, 1)(2, "ion-item")(3, "ion-label")(4, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "XAUUSD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "buy limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "0.01 at 2685");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-text", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Placed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-item-options");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, TradesPage_ion_item_sliding_29_ion_item_option_13_Template, 2, 0, "ion-item-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.segment === "favorites");
  }
}
function TradesPage_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 3)(3, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TradesPage_ng_template_35_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Welcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content")(8, "form", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function TradesPage_ng_template_35_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-list", 30)(10, "ion-select", 31)(11, "ion-select-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "XAUUSD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-select-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "EURUSD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-item")(16, "ion-select", 34)(17, "ion-select-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-select-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 37)(22, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Order type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "ion-input", 38)(25, "ion-input", 39)(26, "ion-input", 40)(27, "ion-input", 41)(28, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 43)(30, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Create Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r2.order);
  }
}
class TradesPage {
  constructor(fb, alertCtrl, confData, loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, user, config) {
    this.fb = fb;
    this.alertCtrl = alertCtrl;
    this.confData = confData;
    this.loadingCtrl = loadingCtrl;
    this.modalCtrl = modalCtrl;
    this.router = router;
    this.routerOutlet = routerOutlet;
    this.toastCtrl = toastCtrl;
    this.user = user;
    this.config = config;
    this.dayIndex = 0;
    this.queryText = "";
    this.segment = "all";
    this.excludeTracks = [];
    this.shownSessions = [];
    this.groups = [];
    this.submitted = false;
  }
  ngOnInit() {
    this.order = this.fb.group({
      actionType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      symbol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      openPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      stopLoss: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      takeProfit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      expiration: [''],
      comment: ['']
    });
    this.updateSchedule();
    this.ios = this.config.get("mode") === "ios";
  }
  updateSchedule() {
    // Close any open sliding items when the schedule updates
    if (this.scheduleList) {
      this.scheduleList.closeSlidingItems();
    }
    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(data => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }
  presentFilter() {
    var _this = this;
    return (0,_home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _trade_filter_trade_filter__WEBPACK_IMPORTED_MODULE_1__.TradeFilterPage,
        presentingElement: _this.routerOutlet.nativeEl,
        componentProps: {
          excludedTracks: _this.excludeTracks
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      if (data) {
        _this.excludeTracks = data;
        _this.updateSchedule();
      }
    })();
  }
  addFavorite(slidingItem, sessionData) {
    var _this2 = this;
    return (0,_home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.user.hasFavorite(sessionData.name)) {
        // Prompt to remove favorite
        _this2.removeFavorite(slidingItem, sessionData, "Favorite already added");
      } else {
        // Add as a favorite
        _this2.user.addFavorite(sessionData.name);
        // Close the open item
        slidingItem.close();
        // Create a toast
        const toast = yield _this2.toastCtrl.create({
          header: `${sessionData.name} was successfully added as a favorite.`,
          duration: 3000,
          buttons: [{
            text: "Close",
            role: "cancel"
          }]
        });
        // Present the toast at the bottom of the page
        yield toast.present();
      }
    })();
  }
  removeFavorite(slidingItem, sessionData, title) {
    var _this3 = this;
    return (0,_home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertCtrl.create({
        header: title,
        message: "Would you like to remove this session from your favorites?",
        buttons: [{
          text: "Cancel",
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }, {
          text: "Remove",
          handler: () => {
            // they want to remove this session from their favorites
            _this3.user.removeFavorite(sessionData.name);
            _this3.updateSchedule();
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }]
      });
      // now present the alert on top of all other content
      yield alert.present();
    })();
  }
  openSocial(network, fab) {
    var _this4 = this;
    return (0,_home_runner_work_tradingnext_app_tradingnext_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this4.loadingCtrl.create({
        message: `Posting to ${network}`,
        duration: Math.random() * 1000 + 500
      });
      yield loading.present();
      yield loading.onWillDismiss();
      fab.close();
    })();
  }
  cancel() {
    this.modal.dismiss(null, "cancel");
  }
  confirm() {
    // this.submitted = true;
    console.log(this.order);
    if (this.order.valid) {
      this.modal.dismiss(this.order, "confirm");
      // this.userData.login(this.login.username);
      // this.router.navigateByUrl('/app/tabs/trades');
    }
  }
  onWillDismiss(event) {
    const ev = event;
    if (ev.detail.role === "confirm") {
      // this.message = `Hello, ${ev.detail.data}!`;
      console.log(ev.detail);
    }
  }
}
_TradesPage = TradesPage;
_TradesPage.ɵfac = function TradesPage_Factory(t) {
  return new (t || _TradesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_3__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Config));
};
_TradesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _TradesPage,
  selectors: [["page-trades"]],
  viewQuery: function TradesPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.scheduleList = _t.first);
    }
  },
  decls: 36,
  vars: 8,
  consts: [["fab", ""], ["slidingItem", ""], ["translucent", "true"], ["slot", "start"], [4, "ngIf"], ["slot", "end"], [3, "click"], ["fullscreen", "true"], ["collapse", "condense"], ["size", "large"], ["sticky", ""], ["slot", "end", "size", "small", "fill", "clear", "color", "medium"], ["slot", "icon-only", "ios", "ellipsis-horizontal", "md", "ellipsis-horizontal"], [4, "ngFor", "ngForOf"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], ["id", "open-modal"], ["name", "add"], ["trigger", "open-modal", 3, "willDismiss"], ["slot", "icon-only", "name", "search"], ["slot", "icon-only", "name", "options"], [1, "ion-align-items-center"], [1, "ion-margin-start", "order-type", "sell"], ["slot", "end", 1, "ion-text-wrap", "ion-text-right"], ["color", "rise", 1, "pips"], ["color", "medium", 1, "time"], ["color", "danger", 3, "click", 4, "ngIf"], ["color", "danger", 3, "click"], [1, "ion-margin-start", "order-type", "buy"], ["color", "medium", "slot", "end", 1, "ion-text-wrap"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "ion-margin-start"], ["error-text", "Symbol is required", "formControlName", "symbol", "name", "symbol", "aria-label", "Pair", "interface", "action-sheet", "label", "Select Pair", "justify", "space-between"], ["value", "xauusd"], ["value", "eurusd"], ["error-text", "Order type is required", "formControlName", "actionType", "name", "actionType", "errorText", "Order is required", "aria-label", "Pending Order", "interface", "popover", "label", "Select Order", "justify", "space-between", "label-placement", "floating", "required", ""], ["value", "buy"], ["value", "sell"], [1, "error-text"], ["error-text", "Pair is required", "label", "Price", "labelPlacement", "floating", "type", "number", "formControlName", "openPrice", "required", ""], ["error-text", "Stop Loss is required", "label", "Stop Loss", "labelPlacement", "floating", "type", "number", "formControlName", "stopLoss", "required", ""], ["error-text", "Take Profit is required", "label", "Take Profit", "labelPlacement", "floating", "type", "number", "formControlName", "takeProfit", "required", ""], ["label", "Expired After", "labelPlacement", "floating", "type", "number", "formControlName", "expiration", "helperText", "*) Batas waktu maks 48 jam. Khusus Jumat maks 96 jam."], ["label", "Notes", "labelPlacement", "floating", "type", "text", "formControlName", "comment", "placeholder", "Maks. 48 chars (optional)", "helperText", "*) TradingView link for setup/mapping (only you can see this)"], [1, "ion-padding"], ["type", "submit", "expand", "block", "fill", "solid"]],
  template: function TradesPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 2)(1, "ion-toolbar")(2, "ion-buttons", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TradesPage_ion_title_4_Template, 2, 0, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-buttons", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TradesPage_ion_button_6_Template, 2, 0, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TradesPage_Template_ion_button_click_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.presentFilter());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TradesPage_span_8_Template, 2, 0, "span", 4)(9, TradesPage_span_9_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-content", 7)(11, "ion-header", 8)(12, "ion-toolbar")(13, "ion-title", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Trades");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-list")(16, "ion-item-group")(17, "ion-item-divider", 10)(18, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Positions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, TradesPage_ion_item_sliding_22_Template, 16, 1, "ion-item-sliding", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-item-group")(24, "ion-item-divider", 10)(25, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Pending Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, TradesPage_ion_item_sliding_29_Template, 14, 1, "ion-item-sliding", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ion-fab", 14, 0)(32, "ion-fab-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ion-modal", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("willDismiss", function TradesPage_Template_ion_modal_willDismiss_34_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onWillDismiss($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, TradesPage_ng_template_35_Template, 32, 1, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor],
  styles: ["ion-item[track=tp][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid var(--ion-color-rise);\n}\n\nion-item[track=sl][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid var(--ion-color-fall);\n}\n\nion-fab-button[_ngcontent-%COMP%] {\n  --background: var(--ion-color-step-150, #ffffff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n\n\n\n\n\n.ios[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n}\nion-label[_ngcontent-%COMP%]   .order-type[_ngcontent-%COMP%] {\n  font-size: x-small;\n  padding: 2px 6px;\n  border-radius: 3px;\n  margin-left: 10px;\n}\nion-label[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-rise);\n  color: var(--ion-color-rise);\n}\nion-label[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-fall);\n  color: var(--ion-color-fall);\n}\n\n.pips[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 24px;\n}\n\n.time[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdHJhZGVzL3RyYWRlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FO0VBQ0Usa0JBQUE7RUFDQSw0Q0FBQTtBQUxKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSw0Q0FBQTtBQUFKOztBQUlBO0VBQ0UsZ0RBQUE7RUFDQSxzREFBQTtFQUNBLHdEQUFBO0VBQ0EsMENBQUE7QUFERjs7QUFJQTs7O0VBQUE7QUFJQTtFQUNFLDBEQUFBO0FBREY7O0FBS0U7RUFDRSxhQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSEo7QUFNRTtFQUNFLHVDQUFBO0VBQ0EsNEJBQUE7QUFKSjtBQU9FO0VBQ0UsdUNBQUE7RUFDQSw0QkFBQTtBQUxKOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EseUVBQUE7QUFORiIsInNvdXJjZXNDb250ZW50IjpbIiRjYXRlZ29yaWVzOiAoXG4gIHRwOiB2YXIoLS1pb24tY29sb3ItcmlzZSksXG4gIHNsOiB2YXIoLS1pb24tY29sb3ItZmFsbClcbik7XG5cbkBlYWNoICR0cmFjaywgJHZhbHVlIGluIG1hcC1yZW1vdmUoJGNhdGVnb3JpZXMpIHtcbiAgaW9uLWl0ZW1bdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHZhbHVlO1xuICB9XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNmZmZmZmYpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2YyZjJmMik7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsICNkOWQ5ZDkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcbiAqIHNvIG9ubHkgc3R5bGUgdGhlIGlPUyBhY3RpdmF0ZWQgYmFja2dyb3VuZFxuICovXG4uaW9zIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgaDMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAub3JkZXItdHlwZSB7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLmJ1eXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcmlzZSk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yaXNlKTtcbiAgfVxuXG4gIC5zZWxse1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1mYWxsKTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZhbGwpO1xuICB9XG59XG5cbi5waXBze1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4udGltZXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDAwLCAjNjY2NjY2KSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3798:
/*!**********************************************!*\
  !*** ./src/app/providers/conference-data.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConferenceData: () => (/* binding */ ConferenceData)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-data */ 9333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
var _ConferenceData;







class ConferenceData {
  constructor(http, user) {
    this.http = http;
    this.user = user;
  }
  load() {
    if (this.data) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.data);
    } else {
      return this.http.get('assets/data/data.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.processData, this));
    }
  }
  processData(data) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data;
    // loop through each day in the schedule
    this.data.schedule.forEach(day => {
      // loop through each timeline group in the day
      day.groups.forEach(group => {
        // loop through each session in the timeline group
        group.sessions.forEach(session => {
          session.speakers = [];
          if (session.speakerNames) {
            session.speakerNames.forEach(speakerName => {
              const speaker = this.data.speakers.find(s => s.name === speakerName);
              if (speaker) {
                session.speakers.push(speaker);
                speaker.sessions = speaker.sessions || [];
                speaker.sessions.push(session);
              }
            });
          }
        });
      });
    });
    return this.data;
  }
  getTimeline(dayIndex, queryText = '', excludeTracks = [], segment = 'all') {
    return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      const day = data.schedule[dayIndex];
      day.shownSessions = 0;
      queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
      const queryWords = queryText.split(' ').filter(w => !!w.trim().length);
      day.groups.forEach(group => {
        group.hide = true;
        group.sessions.forEach(session => {
          // check if this session should show or not
          this.filterSession(session, queryWords, excludeTracks, segment);
          if (!session.hide) {
            // if this session is not hidden then this group should show
            group.hide = false;
            day.shownSessions++;
          }
        });
      });
      return day;
    }));
  }
  filterSession(session, queryWords, excludeTracks, segment) {
    let matchesQueryText = false;
    if (queryWords.length) {
      // of any query word is in the session name than it passes the query test
      queryWords.forEach(queryWord => {
        if (session.name.toLowerCase().indexOf(queryWord) > -1) {
          matchesQueryText = true;
        }
      });
    } else {
      // if there are no query words then this session passes the query test
      matchesQueryText = true;
    }
    // if any of the sessions tracks are not in the
    // exclude tracks then this session passes the track test
    let matchesTracks = false;
    session.tracks.forEach(trackName => {
      if (excludeTracks.indexOf(trackName) === -1) {
        matchesTracks = true;
      }
    });
    // if the segment is 'favorites', but session is not a user favorite
    // then this session does not pass the segment test
    let matchesSegment = false;
    if (segment === 'favorites') {
      if (this.user.hasFavorite(session.name)) {
        matchesSegment = true;
      }
    } else {
      matchesSegment = true;
    }
    // all tests must be true if it should not be hidden
    session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
  }
  getSpeakers() {
    return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      return data.speakers.sort((a, b) => {
        const aName = a.name.split(' ').pop();
        const bName = b.name.split(' ').pop();
        return aName.localeCompare(bName);
      });
    }));
  }
  getTracks() {
    return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      return data.tracks.sort();
    }));
  }
  getMap() {
    return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      return data.map;
    }));
  }
}
_ConferenceData = ConferenceData;
_ConferenceData.ɵfac = function ConferenceData_Factory(t) {
  return new (t || _ConferenceData)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_data__WEBPACK_IMPORTED_MODULE_0__.UserData));
};
_ConferenceData.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _ConferenceData,
  factory: _ConferenceData.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3366:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
var _ApiService;




class ApiService {
  constructor(http) {
    this.http = http;
  }
  // getMetrics(): Observable<any> {
  //   return this.http.get<any>("http://localhost:3000/stats/metrics").pipe(
  //     map((res: any) => {
  //       return res.metrics;
  //     })
  //   );
  // }
  getMetrics() {
    if (this.metrics) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.metrics);
    } else {
      return this.http.get('assets/data/metrics.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        this.metrics = res.metrics;
        return this.metrics;
      }, this));
    }
  }
  getHistoryTrades() {
    if (this.historyTrades) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.historyTrades);
    } else {
      return this.http.get('assets/data/history-trades.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        this.historyTrades = res.trades;
        return this.historyTrades;
      }, this));
    }
  }
}
_ApiService = ApiService;
_ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || _ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
_ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _ApiService,
  factory: _ApiService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs-page_tabs-page_module_ts.js.map