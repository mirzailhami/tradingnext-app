"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tutorial_tutorial_module_ts"],{

/***/ 2165:
/*!***********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TutorialPageRoutingModule: () => (/* binding */ TutorialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial */ 6744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _TutorialPageRoutingModule;




const routes = [{
  path: '',
  component: _tutorial__WEBPACK_IMPORTED_MODULE_0__.TutorialPage
}];
class TutorialPageRoutingModule {}
_TutorialPageRoutingModule = TutorialPageRoutingModule;
_TutorialPageRoutingModule.ɵfac = function TutorialPageRoutingModule_Factory(t) {
  return new (t || _TutorialPageRoutingModule)();
};
_TutorialPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _TutorialPageRoutingModule
});
_TutorialPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TutorialPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2828:
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TutorialModule: () => (/* binding */ TutorialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial */ 6744);
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial-routing.module */ 2165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _TutorialModule;





class TutorialModule {}
_TutorialModule = TutorialModule;
_TutorialModule.ɵfac = function TutorialModule_Factory(t) {
  return new (t || _TutorialModule)();
};
_TutorialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _TutorialModule
});
_TutorialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_1__.TutorialPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TutorialModule, {
    declarations: [_tutorial__WEBPACK_IMPORTED_MODULE_0__.TutorialPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_1__.TutorialPageRoutingModule]
  });
})();

/***/ }),

/***/ 6744:
/*!********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TutorialPage: () => (/* binding */ TutorialPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 7743);
var _TutorialPage;







class TutorialPage {
  constructor(menu, router, storage) {
    this.menu = menu;
    this.router = router;
    this.storage = storage;
    this.showSkip = true;
  }
  startApp() {
    this.router.navigateByUrl('/app/tabs/dash', {
      replaceUrl: true
    }).then(() => this.storage.set('ion_did_tutorial', true));
  }
  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/app/tabs/dash', {
          replaceUrl: true
        });
      }
    });
    this.menu.enable(false);
  }
  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
_TutorialPage = TutorialPage;
_TutorialPage.ɵfac = function TutorialPage_Factory(t) {
  return new (t || _TutorialPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage));
};
_TutorialPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _TutorialPage,
  selectors: [["page-tutorial"]],
  decls: 41,
  vars: 1,
  consts: [[1, "ion-no-border"], ["slot", "end"], ["color", "primary", 3, "click", "hidden"], ["fullscreen", "true"], [1, "slide-container"], [1, "slide"], ["src", "assets/img/ica-slidebox-img-1.png", 1, "slide-image"], [1, "slide-title"], ["src", "assets/img/ica-slidebox-img-2.png", 1, "slide-image"], ["src", "assets/img/ica-slidebox-img-3.png", 1, "slide-image"], ["src", "assets/img/ica-slidebox-img-4.png", 1, "slide-image"], ["fill", "clear", 3, "click"], ["slot", "end", "name", "arrow-forward"]],
  template: function TutorialPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialPage_Template_ion_button_click_3_listener() {
        return ctx.startApp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Skip");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content", 3)(6, "div", 4)(7, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Welcome to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ICA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ionic conference app");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " is a practical preview of the ionic framework in action, and a demonstration of proper code use. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "What is Ionic?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p")(23, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ionic Framework");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "What is Ionic Appflow?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p")(31, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ionic Appflow");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ready to Play?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialPage_Template_ion_button_click_38_listener() {
        return ctx.startApp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Continue ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showSkip);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar],
  styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n.slide-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 100%);\n  grid-template-rows: 1fr;\n  height: 100%;\n  overflow: scroll;\n  scroll-snap-type: x mandatory;\n}\n\n.slide[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: center;\n  scroll-snap-align: center;\n  scroll-snap-stop: always;\n}\n\n.slide-title[_ngcontent-%COMP%] {\n  margin-top: 2.8rem;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  max-width: 80%;\n  max-height: 50%;\n  margin: -5vh 0 0;\n  pointer-events: none;\n}\n\nb[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  color: var(--ion-color-step-600, #60646b);\n  font-size: 14px;\n  line-height: 1.5;\n}\np[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUVBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFFQSxrQkFBQTtFQUVBLHlCQUFBO0VBQ0Esd0JBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBRUEseUNBQUE7RUFFQSxlQUFBO0VBRUEsZ0JBQUE7QUFURjtBQVdFO0VBQ0UscUNBQUE7QUFUSiIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxMDAlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG5cbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xufVxuXG4uc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIHdpZHRoOiAxMDAlO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1heC1oZWlnaHQ6IDUwJTtcblxuICBtYXJnaW46IC01dmggMCAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG5cbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgYiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tutorial_tutorial_module_ts.js.map