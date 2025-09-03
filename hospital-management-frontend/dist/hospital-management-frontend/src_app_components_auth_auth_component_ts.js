"use strict";
(self["webpackChunkhospital_management_frontend"] = self["webpackChunkhospital_management_frontend"] || []).push([["src_app_components_auth_auth_component_ts"],{

/***/ 8967:
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthComponent: () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 4646);
























function AuthComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_mat_spinner_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 22);
  }
}
function AuthComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid 10-digit phone number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Role is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_error_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You must agree to the terms and conditions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_mat_spinner_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 22);
  }
}
function AuthComponent_form_44_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthComponent_form_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponent_form_44_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onRegister());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23)(2, "div", 24)(3, "mat-form-field", 6)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthComponent_form_44_mat_error_7_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24)(9, "mat-form-field", 6)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AuthComponent_form_44_mat_error_13_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AuthComponent_form_44_mat_error_18_Template, 2, 0, "mat-error", 9)(19, AuthComponent_form_44_mat_error_19_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 6)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AuthComponent_form_44_mat_error_24_Template, 2, 0, "mat-error", 9)(25, AuthComponent_form_44_mat_error_25_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23)(27, "div", 24)(28, "mat-form-field", 6)(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_form_44_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.togglePasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AuthComponent_form_44_mat_error_35_Template, 2, 0, "mat-error", 9)(36, AuthComponent_form_44_mat_error_36_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24)(38, "mat-form-field", 6)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_form_44_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleConfirmPasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AuthComponent_form_44_mat_error_45_Template, 2, 0, "mat-error", 9)(46, AuthComponent_form_44_mat_error_46_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 6)(48, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select", 30)(51, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Administrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Doctor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Nurse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AuthComponent_form_44_mat_error_59_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " I agree to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AuthComponent_form_44_mat_error_66_Template, 2, 0, "mat-error", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12)(68, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AuthComponent_form_44_mat_spinner_69_Template, 1, 0, "mat-spinner", 14)(70, AuthComponent_form_44_span_70_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.registerForm.get("firstName")) == null ? null : tmp_2_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.registerForm.get("lastName")) == null ? null : tmp_3_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_4_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_5_0.hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r1.registerForm.get("phone")) == null ? null : tmp_6_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r1.registerForm.get("phone")) == null ? null : tmp_7_0.hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.hidePassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hidePassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_10_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_11_0.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.hideConfirmPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hideConfirmPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx_r1.registerForm.get("confirmPassword")) == null ? null : tmp_14_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx_r1.registerForm.get("confirmPassword")) == null ? null : tmp_15_0.hasError("passwordMismatch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx_r1.registerForm.get("role")) == null ? null : tmp_16_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx_r1.registerForm.get("agreeToTerms")) == null ? null : tmp_17_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.registerForm.invalid || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
  }
}
class AuthComponent {
  constructor(fb, snackBar, router) {
    this.fb = fb;
    this.snackBar = snackBar;
    this.router = router;
    this.isLoading = false;
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.showRegisterForm = false;
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)]],
      rememberMe: [false]
    });
    this.registerForm = this.fb.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('^[0-9]{10}$')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      role: ['user', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      agreeToTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  ngOnInit() {}
  passwordMatchValidator(form) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({
        passwordMismatch: true
      });
      return {
        passwordMismatch: true
      };
    }
    return null;
  }
  onLogin() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      // Mock login - replace with actual API call
      setTimeout(() => {
        const {
          email,
          password
        } = this.loginForm.value;
        if (email === 'admin@hospital.com' && password === 'admin123') {
          this.snackBar.open('Login successful!', 'Close', {
            duration: 3000
          });
          this.router.navigate(['/dashboard']);
        } else {
          this.snackBar.open('Invalid credentials. Please try again.', 'Close', {
            duration: 3000
          });
        }
        this.isLoading = false;
      }, 1000);
    }
  }
  onRegister() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      // Mock registration - replace with actual API call
      setTimeout(() => {
        this.snackBar.open('Registration successful! Please login.', 'Close', {
          duration: 3000
        });
        this.isLoading = false;
        this.registerForm.reset();
        this.showRegisterForm = false;
      }, 1000);
    }
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }
  forgotPassword() {
    this.snackBar.open('Password reset link sent to your email.', 'Close', {
      duration: 3000
    });
  }
  static {
    this.ɵfac = function AuthComponent_Factory(t) {
      return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthComponent,
      selectors: [["app-auth"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 45,
      vars: 12,
      consts: [[1, "auth-container"], [1, "auth-wrapper"], [1, "auth-card"], [1, "text-center", "w-100"], [1, "auth-icon"], [1, "auth-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "Enter your email"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "password", "placeholder", "Enter your password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "w-100", 3, "disabled"], ["diameter", "20", 4, "ngIf"], [1, "form-footer"], ["mat-button", "", "type", "button", 1, "forgot-password", 3, "click"], [1, "divider"], [1, "register-section"], [1, "text-center"], ["mat-stroked-button", "", "color", "primary", 1, "w-100", 3, "click"], ["class", "auth-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["diameter", "20"], [1, "row"], [1, "col-md-6"], ["matInput", "", "formControlName", "firstName", "placeholder", "Enter first name"], ["matInput", "", "formControlName", "lastName", "placeholder", "Enter last name"], ["matInput", "", "formControlName", "phone", "placeholder", "Enter phone number"], ["matInput", "", "formControlName", "password", "placeholder", "Enter password", 3, "type"], ["matInput", "", "formControlName", "confirmPassword", "placeholder", "Confirm password", 3, "type"], ["formControlName", "role"], ["value", "user"], ["value", "admin"], ["value", "doctor"], ["value", "nurse"], [1, "form-check", "mb-3"], ["type", "checkbox", "formControlName", "agreeToTerms", "id", "agreeToTerms", 1, "form-check-input"], ["for", "agreeToTerms", 1, "form-check-label"], ["href", "#", 1, "text-primary"], ["class", "d-block", 4, "ngIf"], [1, "d-block"]],
      template: function AuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-header")(4, "mat-card-title", 3)(5, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "local_hospital");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Hospital Management System ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign in to your account");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content")(11, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_11_listener() {
            return ctx.onLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AuthComponent_mat_error_18_Template, 2, 0, "mat-error", 9)(19, AuthComponent_mat_error_19_Template, 2, 0, "mat-error", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 6)(21, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_24_listener() {
            return ctx.togglePasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AuthComponent_mat_error_27_Template, 2, 0, "mat-error", 9)(28, AuthComponent_mat_error_28_Template, 2, 0, "mat-error", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12)(30, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AuthComponent_mat_spinner_31_Template, 1, 0, "mat-spinner", 14)(32, AuthComponent_span_32_Template, 2, 0, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15)(34, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_34_listener() {
            return ctx.forgotPassword();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Forgot Password? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17)(37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "or");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18)(40, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Don't have an account?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_42_listener() {
            return ctx.showRegisterForm = !ctx.showRegisterForm;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AuthComponent_form_44_Template, 71, 20, "form", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_5_0;
          let tmp_6_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.hasError("minlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.showRegisterForm ? "Back to Login" : "Create Account", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRegisterForm);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 2rem;\n}\n\n.auth-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.auth-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);\n  color: white;\n  padding: 2rem 2rem 1rem;\n  text-align: center;\n}\n.auth-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .auth-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: 1rem;\n}\n.auth-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .mat-mdc-card-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 300;\n  margin-bottom: 0.5rem;\n}\n.auth-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .mat-mdc-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.9;\n}\n.auth-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n.auth-form[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 48px;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.auth-form[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%] {\n  color: #666;\n  text-decoration: none;\n}\n.auth-form[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n}\n\n.divider[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 2rem 0;\n  position: relative;\n}\n.divider[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #e0e0e0;\n}\n.divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0 1rem;\n  color: #666;\n  font-size: 0.9rem;\n}\n\n.register-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.register-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #666;\n}\n.register-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 768px) {\n  .auth-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .auth-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%] {\n    padding: 1.5rem 1.5rem 1rem;\n  }\n  .auth-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .auth-icon[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .auth-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .mat-mdc-card-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .auth-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .auth-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .auth-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%] {\n    padding: 1rem 1rem 0.5rem;\n  }\n  .auth-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .auth-icon[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    width: 2rem;\n    height: 2rem;\n  }\n  .auth-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .mat-mdc-card-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .auth-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxDYXBzdG9uZSUyMHByb2plY3RcXGhvc3BpdGFsLW1hbmFnZW1lbnQtZnJvbnRlbmRcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxhdXRoXFxhdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZEQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NOO0FERUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNBTjtBREdJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNETjtBREtFO0VBQ0UsYUFBQTtBQ0hKOztBRFFFO0VBQ0UsbUJBQUE7QUNMSjtBRFFFO0VBQ0Usa0JBQUE7QUNOSjtBRFFJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNOTjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEVUk7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNSTjtBRFVNO0VBQ0UsY0FBQTtBQ1JSOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNYRjtBRGFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDWEo7QURjRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1pKOztBRGdCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNiRjtBRGVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDYko7QURnQkU7RUFDRSxZQUFBO0FDZEo7O0FEbUJFO0VBQ0Usb0JBQUE7QUNoQko7QURtQkU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNqQko7QURtQkk7RUFDRSxxQkFBQTtBQ2pCTjtBRG1CTTtFQUNFLDBCQUFBO0FDakJSOztBRHdCQTtFQUNFO0lBQ0UsYUFBQTtFQ3JCRjtFRHlCRTtJQUNFLDJCQUFBO0VDdkJKO0VEeUJJO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFQ3ZCTjtFRDBCSTtJQUNFLGlCQUFBO0VDeEJOO0VENEJFO0lBQ0UsZUFBQTtFQzFCSjtBQUNGO0FEOEJBO0VBQ0U7SUFDRSxlQUFBO0VDNUJGO0VEZ0NFO0lBQ0UseUJBQUE7RUM5Qko7RURnQ0k7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUM5Qk47RURpQ0k7SUFDRSxpQkFBQTtFQy9CTjtFRG1DRTtJQUNFLGFBQUE7RUNqQ0o7QUFDRiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uYXV0aC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5hdXRoLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAubWF0LW1kYy1jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE5NzZkMiAwJSwgIzE1NjVjMCAxMDAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnJlbSAycmVtIDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIC5hdXRoLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgICBcbiAgICAubWF0LW1kYy1jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB9XG4gICAgXG4gICAgLm1hdC1tZGMtY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuICB9XG4gIFxuICAubWF0LW1kYy1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbn1cblxuLmF1dGgtZm9ybSB7XG4gIC5tYXQtbWRjLWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgXG4gIC5mb3JtLWFjdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBcbiAgICBidXR0b24ge1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmZvcm0tZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBcbiAgICAuZm9yZ290LXBhc3N3b3JkIHtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5kaXZpZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICB9XG4gIFxuICBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbn1cblxuLnJlZ2lzdGVyLXNlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgXG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbiAgXG4gIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG4gIFxuICAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gICAgXG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgXG4gIC5hdXRoLWNhcmQge1xuICAgIC5tYXQtbWRjLWNhcmQtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMXJlbTtcbiAgICAgIFxuICAgICAgLmF1dGgtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm1hdC1tZGMtY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAubWF0LW1kYy1jYXJkLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmF1dGgtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbiAgXG4gIC5hdXRoLWNhcmQge1xuICAgIC5tYXQtbWRjLWNhcmQtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwLjVyZW07XG4gICAgICBcbiAgICAgIC5hdXRoLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5tYXQtbWRjLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLm1hdC1tZGMtY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuICB9XG59XG4iLCIuYXV0aC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5hdXRoLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmF1dGgtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hdXRoLWNhcmQgLm1hdC1tZGMtY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTk3NmQyIDAlLCAjMTU2NWMwIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJyZW0gMnJlbSAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtaGVhZGVyIC5hdXRoLWljb24ge1xuICBmb250LXNpemU6IDNyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtaGVhZGVyIC5tYXQtbWRjLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmF1dGgtY2FyZCAubWF0LW1kYy1jYXJkLWhlYWRlciAubWF0LW1kYy1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBvcGFjaXR5OiAwLjk7XG59XG4uYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5hdXRoLWZvcm0gLm1hdC1tZGMtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uYXV0aC1mb3JtIC5mb3JtLWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4uYXV0aC1mb3JtIC5mb3JtLWFjdGlvbnMgYnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5hdXRoLWZvcm0gLmZvcm0tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmF1dGgtZm9ybSAuZm9ybS1mb290ZXIgLmZvcmdvdC1wYXNzd29yZCB7XG4gIGNvbG9yOiAjNjY2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXV0aC1mb3JtIC5mb3JtLWZvb3RlciAuZm9yZ290LXBhc3N3b3JkOmhvdmVyIHtcbiAgY29sb3I6ICMxOTc2ZDI7XG59XG5cbi5kaXZpZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdmlkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbn1cbi5kaXZpZGVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5yZWdpc3Rlci1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4ucmVnaXN0ZXItc2VjdGlvbiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICM2NjY7XG59XG4ucmVnaXN0ZXItc2VjdGlvbiBidXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5mb3JtLWNoZWNrIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uZm9ybS1jaGVjayAuZm9ybS1jaGVjay1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzY2Njtcbn1cbi5mb3JtLWNoZWNrIC5mb3JtLWNoZWNrLWxhYmVsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9ybS1jaGVjayAuZm9ybS1jaGVjay1sYWJlbCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLmF1dGgtY2FyZCAubWF0LW1kYy1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMS41cmVtIDEuNXJlbSAxcmVtO1xuICB9XG4gIC5hdXRoLWNhcmQgLm1hdC1tZGMtY2FyZC1oZWFkZXIgLmF1dGgtaWNvbiB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgfVxuICAuYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtaGVhZGVyIC5tYXQtbWRjLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5hdXRoLWNhcmQgLm1hdC1tZGMtY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuICAuYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMC41cmVtO1xuICB9XG4gIC5hdXRoLWNhcmQgLm1hdC1tZGMtY2FyZC1oZWFkZXIgLmF1dGgtaWNvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgfVxuICAuYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtaGVhZGVyIC5tYXQtbWRjLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5hdXRoLWNhcmQgLm1hdC1tZGMtY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9DYXBzdG9uZSUyMHByb2plY3QvaG9zcGl0YWwtbWFuYWdlbWVudC1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZEQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NOO0FERUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNBTjtBREdJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNETjtBREtFO0VBQ0UsYUFBQTtBQ0hKOztBRFFFO0VBQ0UsbUJBQUE7QUNMSjtBRFFFO0VBQ0Usa0JBQUE7QUNOSjtBRFFJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNOTjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEVUk7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNSTjtBRFVNO0VBQ0UsY0FBQTtBQ1JSOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNYRjtBRGFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDWEo7QURjRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1pKOztBRGdCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNiRjtBRGVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDYko7QURnQkU7RUFDRSxZQUFBO0FDZEo7O0FEbUJFO0VBQ0Usb0JBQUE7QUNoQko7QURtQkU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNqQko7QURtQkk7RUFDRSxxQkFBQTtBQ2pCTjtBRG1CTTtFQUNFLDBCQUFBO0FDakJSOztBRHdCQTtFQUNFO0lBQ0UsYUFBQTtFQ3JCRjtFRHlCRTtJQUNFLDJCQUFBO0VDdkJKO0VEeUJJO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFQ3ZCTjtFRDBCSTtJQUNFLGlCQUFBO0VDeEJOO0VENEJFO0lBQ0UsZUFBQTtFQzFCSjtBQUNGO0FEOEJBO0VBQ0U7SUFDRSxlQUFBO0VDNUJGO0VEZ0NFO0lBQ0UseUJBQUE7RUM5Qko7RURnQ0k7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUM5Qk47RURpQ0k7SUFDRSxpQkFBQTtFQy9CTjtFRG1DRTtJQUNFLGFBQUE7RUNqQ0o7QUFDRjtBRENBLG96VEFBb3pUIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uYXV0aC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5hdXRoLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAubWF0LW1kYy1jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE5NzZkMiAwJSwgIzE1NjVjMCAxMDAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnJlbSAycmVtIDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIC5hdXRoLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgICBcbiAgICAubWF0LW1kYy1jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB9XG4gICAgXG4gICAgLm1hdC1tZGMtY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuICB9XG4gIFxuICAubWF0LW1kYy1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbn1cblxuLmF1dGgtZm9ybSB7XG4gIC5tYXQtbWRjLWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgXG4gIC5mb3JtLWFjdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBcbiAgICBidXR0b24ge1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmZvcm0tZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBcbiAgICAuZm9yZ290LXBhc3N3b3JkIHtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5kaXZpZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICB9XG4gIFxuICBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbn1cblxuLnJlZ2lzdGVyLXNlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgXG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbiAgXG4gIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG4gIFxuICAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gICAgXG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgXG4gIC5hdXRoLWNhcmQge1xuICAgIC5tYXQtbWRjLWNhcmQtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMXJlbTtcbiAgICAgIFxuICAgICAgLmF1dGgtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm1hdC1tZGMtY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAubWF0LW1kYy1jYXJkLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmF1dGgtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbiAgXG4gIC5hdXRoLWNhcmQge1xuICAgIC5tYXQtbWRjLWNhcmQtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwLjVyZW07XG4gICAgICBcbiAgICAgIC5hdXRoLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5tYXQtbWRjLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLm1hdC1tZGMtY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuICB9XG59XG4iLCIuYXV0aC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5hdXRoLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmF1dGgtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hdXRoLWNhcmQgLm1hdC1tZGMtY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTk3NmQyIDAlLCAjMTU2NWMwIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJyZW0gMnJlbSAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtaGVhZGVyIC5hdXRoLWljb24ge1xuICBmb250LXNpemU6IDNyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtaGVhZGVyIC5tYXQtbWRjLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmF1dGgtY2FyZCAubWF0LW1kYy1jYXJkLWhlYWRlciAubWF0LW1kYy1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBvcGFjaXR5OiAwLjk7XG59XG4uYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5hdXRoLWZvcm0gLm1hdC1tZGMtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uYXV0aC1mb3JtIC5mb3JtLWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4uYXV0aC1mb3JtIC5mb3JtLWFjdGlvbnMgYnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5hdXRoLWZvcm0gLmZvcm0tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmF1dGgtZm9ybSAuZm9ybS1mb290ZXIgLmZvcmdvdC1wYXNzd29yZCB7XG4gIGNvbG9yOiAjNjY2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXV0aC1mb3JtIC5mb3JtLWZvb3RlciAuZm9yZ290LXBhc3N3b3JkOmhvdmVyIHtcbiAgY29sb3I6ICMxOTc2ZDI7XG59XG5cbi5kaXZpZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdmlkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbn1cbi5kaXZpZGVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5yZWdpc3Rlci1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4ucmVnaXN0ZXItc2VjdGlvbiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICM2NjY7XG59XG4ucmVnaXN0ZXItc2VjdGlvbiBidXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5mb3JtLWNoZWNrIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uZm9ybS1jaGVjayAuZm9ybS1jaGVjay1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzY2Njtcbn1cbi5mb3JtLWNoZWNrIC5mb3JtLWNoZWNrLWxhYmVsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9ybS1jaGVjayAuZm9ybS1jaGVjay1sYWJlbCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLmF1dGgtY2FyZCAubWF0LW1kYy1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMS41cmVtIDEuNXJlbSAxcmVtO1xuICB9XG4gIC5hdXRoLWNhcmQgLm1hdC1tZGMtY2FyZC1oZWFkZXIgLmF1dGgtaWNvbiB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgfVxuICAuYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtaGVhZGVyIC5tYXQtbWRjLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5hdXRoLWNhcmQgLm1hdC1tZGMtY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuICAuYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMC41cmVtO1xuICB9XG4gIC5hdXRoLWNhcmQgLm1hdC1tZGMtY2FyZC1oZWFkZXIgLmF1dGgtaWNvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgfVxuICAuYXV0aC1jYXJkIC5tYXQtbWRjLWNhcmQtaGVhZGVyIC5tYXQtbWRjLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5hdXRoLWNhcmQgLm1hdC1tZGMtY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1134:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/progress-spinner.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS: () => (/* binding */ MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS),
/* harmony export */   MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MatProgressSpinner: () => (/* binding */ MatProgressSpinner),
/* harmony export */   MatProgressSpinnerModule: () => (/* binding */ MatProgressSpinnerModule),
/* harmony export */   MatSpinner: () => (/* binding */ MatSpinner)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 4646);





/** Injection token to be used to override the default options for `mat-progress-spinner`. */
const _c0 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx_r0._viewBox());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._circleRadius());
  }
}
const MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-progress-spinner-default-options', {
  providedIn: 'root',
  factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
  return {
    diameter: BASE_SIZE
  };
}
/**
 * Base reference size of the spinner.
 */
const BASE_SIZE = 100;
/**
 * Base reference stroke width of the spinner.
 */
const BASE_STROKE_WIDTH = 10;
class MatProgressSpinner {
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /** Theme palette color of the progress spinner. */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  constructor(_elementRef, animationMode, defaults) {
    this._elementRef = _elementRef;
    this._defaultColor = 'primary';
    this._value = 0;
    this._diameter = BASE_SIZE;
    this._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;
    this.mode = _elementRef.nativeElement.nodeName.toLowerCase() === 'mat-spinner' ? 'indeterminate' : 'determinate';
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
  }
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this.mode === 'determinate' ? this._value : 0;
  }
  set value(v) {
    this._value = Math.max(0, Math.min(100, v || 0));
  }
  /** The diameter of the progress spinner (will set width and height of svg). */
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = size || 0;
  }
  /** Stroke width of the progress spinner. */
  get strokeWidth() {
    return this._strokeWidth ?? this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = value || 0;
  }
  /** The radius of the spinner, adjusted for stroke width. */
  _circleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  /** The view box of the spinner's svg element. */
  _viewBox() {
    const viewBox = this._circleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  /** The stroke circumference of the svg circle. */
  _strokeCircumference() {
    return 2 * Math.PI * this._circleRadius();
  }
  /** The dash offset of the svg circle. */
  _strokeDashOffset() {
    if (this.mode === 'determinate') {
      return this._strokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  /** Stroke width of the circle in percent. */
  _circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  static {
    this.ɵfac = function MatProgressSpinner_Factory(t) {
      return new (t || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatProgressSpinner,
      selectors: [["mat-progress-spinner"], ["mat-spinner"]],
      viewQuery: function MatProgressSpinner_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._determinateCircle = _t.first);
        }
      },
      hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
      hostVars: 18,
      hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mat-" + ctx.color);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--mdc-circular-progress-size", ctx.diameter + "px")("--mdc-circular-progress-active-indicator-width", ctx.diameter + "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
        }
      },
      inputs: {
        color: "color",
        mode: "mode",
        value: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "value", "value", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        diameter: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "diameter", "diameter", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        strokeWidth: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "strokeWidth", "strokeWidth", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute]
      },
      exportAs: ["matProgressSpinner"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 11,
      consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
      template: function MatProgressSpinner_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](9, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](11, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](13, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const circle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._viewBox());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx._circleRadius());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", circle_r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", circle_r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", circle_r2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
      styles: ["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinner, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-progress-spinner, mat-spinner',
      exportAs: 'matProgressSpinner',
      host: {
        'role': 'progressbar',
        'class': 'mat-mdc-progress-spinner mdc-circular-progress',
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        'tabindex': '-1',
        '[class]': '"mat-" + color',
        '[class._mat-animation-noopable]': `_noopAnimations`,
        '[class.mdc-circular-progress--indeterminate]': 'mode === "indeterminate"',
        '[style.width.px]': 'diameter',
        '[style.height.px]': 'diameter',
        '[style.--mdc-circular-progress-size]': 'diameter + "px"',
        '[style.--mdc-circular-progress-active-indicator-width]': 'diameter + "px"',
        '[attr.aria-valuemin]': '0',
        '[attr.aria-valuemax]': '100',
        '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
        '[attr.mode]': 'mode'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
      template: "<ng-template #circle>\n  <svg [attr.viewBox]=\"_viewBox()\" class=\"mdc-circular-progress__indeterminate-circle-graphic\"\n       xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\">\n    <circle [attr.r]=\"_circleRadius()\"\n            [style.stroke-dasharray.px]=\"_strokeCircumference()\"\n            [style.stroke-dashoffset.px]=\"_strokeCircumference() / 2\"\n            [style.stroke-width.%]=\"_circleStrokeWidth()\"\n            cx=\"50%\" cy=\"50%\"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class=\"mdc-circular-progress__determinate-container\" aria-hidden=\"true\" #determinateSpinner>\n  <svg [attr.viewBox]=\"_viewBox()\" class=\"mdc-circular-progress__determinate-circle-graphic\"\n       xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\">\n    <circle [attr.r]=\"_circleRadius()\"\n            [style.stroke-dasharray.px]=\"_strokeCircumference()\"\n            [style.stroke-dashoffset.px]=\"_strokeDashOffset()\"\n            [style.stroke-width.%]=\"_circleStrokeWidth()\"\n            class=\"mdc-circular-progress__determinate-circle\"\n            cx=\"50%\" cy=\"50%\"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class=\"mdc-circular-progress__indeterminate-container\" aria-hidden=\"true\">\n  <div class=\"mdc-circular-progress__spinner-layer\">\n    <div class=\"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left\">\n      <ng-container [ngTemplateOutlet]=\"circle\"></ng-container>\n    </div>\n    <div class=\"mdc-circular-progress__gap-patch\">\n      <ng-container [ngTemplateOutlet]=\"circle\"></ng-container>\n    </div>\n    <div class=\"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right\">\n      <ng-container [ngTemplateOutlet]=\"circle\"></ng-container>\n    </div>\n  </div>\n</div>\n",
      styles: ["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _determinateCircle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['determinateSpinner']
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    diameter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    strokeWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }]
  });
})();
/**
 * @deprecated Import Progress Spinner instead. Note that the
 *    `mat-spinner` selector isn't deprecated.
 * @breaking-change 16.0.0
 */
// tslint:disable-next-line:variable-name
const MatSpinner = MatProgressSpinner;
class MatProgressSpinnerModule {
  static {
    this.ɵfac = function MatProgressSpinnerModule_Factory(t) {
      return new (t || MatProgressSpinnerModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatProgressSpinnerModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinnerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, MatProgressSpinner, MatSpinner],
      exports: [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8223:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/tabs.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_TAB: () => (/* binding */ MAT_TAB),
/* harmony export */   MAT_TABS_CONFIG: () => (/* binding */ MAT_TABS_CONFIG),
/* harmony export */   MAT_TAB_CONTENT: () => (/* binding */ MAT_TAB_CONTENT),
/* harmony export */   MAT_TAB_GROUP: () => (/* binding */ MAT_TAB_GROUP),
/* harmony export */   MAT_TAB_LABEL: () => (/* binding */ MAT_TAB_LABEL),
/* harmony export */   MatInkBar: () => (/* binding */ MatInkBar),
/* harmony export */   MatPaginatedTabHeader: () => (/* binding */ MatPaginatedTabHeader),
/* harmony export */   MatTab: () => (/* binding */ MatTab),
/* harmony export */   MatTabBody: () => (/* binding */ MatTabBody),
/* harmony export */   MatTabBodyPortal: () => (/* binding */ MatTabBodyPortal),
/* harmony export */   MatTabChangeEvent: () => (/* binding */ MatTabChangeEvent),
/* harmony export */   MatTabContent: () => (/* binding */ MatTabContent),
/* harmony export */   MatTabGroup: () => (/* binding */ MatTabGroup),
/* harmony export */   MatTabHeader: () => (/* binding */ MatTabHeader),
/* harmony export */   MatTabLabel: () => (/* binding */ MatTabLabel),
/* harmony export */   MatTabLabelWrapper: () => (/* binding */ MatTabLabelWrapper),
/* harmony export */   MatTabLink: () => (/* binding */ MatTabLink),
/* harmony export */   MatTabNav: () => (/* binding */ MatTabNav),
/* harmony export */   MatTabNavPanel: () => (/* binding */ MatTabNavPanel),
/* harmony export */   MatTabsModule: () => (/* binding */ MatTabsModule),
/* harmony export */   _MAT_INK_BAR_POSITIONER: () => (/* binding */ _MAT_INK_BAR_POSITIONER),
/* harmony export */   _MAT_INK_BAR_POSITIONER_FACTORY: () => (/* binding */ _MAT_INK_BAR_POSITIONER_FACTORY),
/* harmony export */   matTabsAnimations: () => (/* binding */ matTabsAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 4876);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/keycodes */ 4879);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 7470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/observers */ 9539);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/animations */ 7172);


















/**
 * Injection token that can be used to reference instances of `MatTabContent`. It serves as
 * alternative token to the actual `MatTabContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const _c0 = ["*"];
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
const _c1 = ["tabListContainer"];
const _c2 = ["tabList"];
const _c3 = ["tabListInner"];
const _c4 = ["nextPaginator"];
const _c5 = ["previousPaginator"];
const _c6 = a0 => ({
  animationDuration: a0
});
const _c7 = (a0, a1) => ({
  value: a0,
  params: a1
});
function MatTabBody_ng_template_2_Template(rf, ctx) {}
const _c8 = ["tabBodyWrapper"];
const _c9 = ["tabHeader"];
function MatTabGroup_For_3_Conditional_6_ng_template_0_Template(rf, ctx) {}
function MatTabGroup_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTabGroup_For_3_Conditional_6_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
  }
}
function MatTabGroup_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.textLabel);
  }
}
function MatTabGroup_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabGroup_For_3_Template_div_click_0_listener() {
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const tab_r4 = ctx_r2.$implicit;
      const i_r5 = ctx_r2.$index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const tabHeader_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._handleClick(tab_r4, tabHeader_r7, i_r5));
    })("cdkFocusChange", function MatTabGroup_For_3_Template_div_cdkFocusChange_0_listener($event) {
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._tabFocusChanged($event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10)(5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatTabGroup_For_3_Conditional_6_Template, 1, 1, null, 12)(7, MatTabGroup_For_3_Conditional_7_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r5 = ctx.$index;
    const tabNode_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](tab_r4.labelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-tab--active", ctx_r5.selectedIndex === i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r5._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("fitInkBarToContent", ctx_r5.fitInkBarToContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", ctx_r5._getTabIndex(i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r5._tabs.length)("aria-controls", ctx_r5._getTabContentId(i_r5))("aria-selected", ctx_r5.selectedIndex === i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", tabNode_r8)("matRippleDisabled", tab_r4.disabled || ctx_r5.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](6, tab_r4.templateLabel ? 6 : 7);
  }
}
function MatTabGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
function MatTabGroup_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-body", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("_onCentered", function MatTabGroup_For_8_Template_mat_tab_body__onCentered_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_For_8_Template_mat_tab_body__onCentering_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._setTabBodyWrapperHeight($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const i_r11 = ctx.$index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](tab_r10.bodyClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-body-active", ctx_r5.selectedIndex === i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r5._getTabContentId(i_r11))("content", tab_r10.content)("position", tab_r10.position)("origin", tab_r10.origin)("animationDuration", ctx_r5.animationDuration)("preserveContent", ctx_r5.preserveContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r5.contentTabIndex != null && ctx_r5.selectedIndex === i_r11 ? ctx_r5.contentTabIndex : null)("aria-labelledby", ctx_r5._getTabLabelId(i_r11))("aria-hidden", ctx_r5.selectedIndex !== i_r11);
  }
}
const _c10 = ["mat-tab-nav-bar", ""];
const _c11 = ["mat-tab-link", ""];
const MAT_TAB_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabContent');
/** Decorates the `ng-template` tags and reads out the template from it. */
class MatTabContent {
  constructor(/** Content for the tab. */template) {
    this.template = template;
  }
  static {
    this.ɵfac = function MatTabContent_Factory(t) {
      return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatTabContent,
      selectors: [["", "matTabContent", ""]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }])]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matTabContent]',
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }],
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();

/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabLabel');
/**
 * Used to provide a tab label to a tab without causing a circular dependency.
 * @docs-private
 */
const MAT_TAB = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB');
/** Used to flag tab labels for use with the portal directive */
class MatTabLabel extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortal {
  constructor(templateRef, viewContainerRef, _closestTab) {
    super(templateRef, viewContainerRef);
    this._closestTab = _closestTab;
  }
  static {
    this.ɵfac = function MatTabLabel_Factory(t) {
      return new (t || MatTabLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TAB, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatTabLabel,
      selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-tab-label], [matTabLabel]',
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }],
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_TAB]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], null);
})();

/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */
const MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB_GROUP');
class MatTab {
  /** Content for the tab label given by `<ng-template mat-tab-label>`. */
  get templateLabel() {
    return this._templateLabel;
  }
  set templateLabel(value) {
    this._setTemplateLabelInput(value);
  }
  /** @docs-private */
  get content() {
    return this._contentPortal;
  }
  constructor(_viewContainerRef, _closestTabGroup) {
    this._viewContainerRef = _viewContainerRef;
    this._closestTabGroup = _closestTabGroup;
    /** whether the tab is disabled. */
    this.disabled = false;
    /**
     * Template provided in the tab content that will be used if present, used to enable lazy-loading
     */
    this._explicitContent = undefined;
    /** Plain text label for the tab, used when there is no template label. */
    this.textLabel = '';
    /** Portal that will be the hosted content of the tab */
    this._contentPortal = null;
    /** Emits whenever the internal state of the tab changes. */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * The relatively indexed position where 0 represents the center, negative is left, and positive
     * represents the right.
     */
    this.position = null;
    /**
     * The initial relatively index origin of the tab if it was created and selected after there
     * was already a selected tab. Provides context of what position the tab should originate from.
     */
    this.origin = null;
    /**
     * Whether the tab is currently active.
     */
    this.isActive = false;
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
      this._stateChanges.next();
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  ngOnInit() {
    this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setTemplateLabelInput(value) {
    // Only update the label if the query managed to find one. This works around an issue where a
    // user may have manually set `templateLabel` during creation mode, which would then get
    // clobbered by `undefined` when the query resolves. Also note that we check that the closest
    // tab matches the current one so that we don't pick up labels from nested tabs.
    if (value && value._closestTab === this) {
      this._templateLabel = value;
    }
  }
  static {
    this.ɵfac = function MatTab_Factory(t) {
      return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatTab,
      selectors: [["mat-tab"]],
      contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLabel, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabContent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
        }
      },
      viewQuery: function MatTab_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
        }
      },
      hostAttrs: ["hidden", ""],
      inputs: {
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        textLabel: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "label", "textLabel"],
        ariaLabel: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "aria-label", "ariaLabel"],
        ariaLabelledby: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "aria-labelledby", "ariaLabelledby"],
        labelClass: "labelClass",
        bodyClass: "bodyClass"
      },
      exportAs: ["matTab"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_TAB,
        useExisting: MatTab
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatTab_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTab, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matTab',
      providers: [{
        provide: MAT_TAB,
        useExisting: MatTab
      }],
      standalone: true,
      host: {
        // This element will be rendered on the server in order to support hydration.
        // Hide it so it doesn't cause a layout shift when it's removed on the client.
        'hidden': ''
      },
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n"
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_TAB_GROUP]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    templateLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatTabLabel]
    }],
    _explicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatTabContent, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    _implicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }],
    textLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['label']
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    labelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bodyClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/** Class that is applied when a tab indicator is active. */
const ACTIVE_CLASS = 'mdc-tab-indicator--active';
/** Class that is applied when the tab indicator should not transition. */
const NO_TRANSITION_CLASS = 'mdc-tab-indicator--no-transition';
/**
 * Abstraction around the MDC tab indicator that acts as the tab header's ink bar.
 * @docs-private
 */
class MatInkBar {
  constructor(_items) {
    this._items = _items;
  }
  /** Hides the ink bar. */
  hide() {
    this._items.forEach(item => item.deactivateInkBar());
  }
  /** Aligns the ink bar to a DOM node. */
  alignToElement(element) {
    const correspondingItem = this._items.find(item => item.elementRef.nativeElement === element);
    const currentItem = this._currentItem;
    if (correspondingItem === currentItem) {
      return;
    }
    currentItem?.deactivateInkBar();
    if (correspondingItem) {
      const domRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
      // The ink bar won't animate unless we give it the `DOMRect` of the previous item.
      correspondingItem.activateInkBar(domRect);
      this._currentItem = correspondingItem;
    }
  }
}
class InkBarItem {
  constructor() {
    this._elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    this._fitToContent = false;
  }
  /** Whether the ink bar should fit to the entire tab or just its content. */
  get fitInkBarToContent() {
    return this._fitToContent;
  }
  set fitInkBarToContent(newValue) {
    if (this._fitToContent !== newValue) {
      this._fitToContent = newValue;
      if (this._inkBarElement) {
        this._appendInkBarElement();
      }
    }
  }
  /** Aligns the ink bar to the current item. */
  activateInkBar(previousIndicatorClientRect) {
    const element = this._elementRef.nativeElement;
    // Early exit if no indicator is present to handle cases where an indicator
    // may be activated without a prior indicator state
    if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
      element.classList.add(ACTIVE_CLASS);
      return;
    }
    // This animation uses the FLIP approach. You can read more about it at the link below:
    // https://aerotwist.com/blog/flip-your-animations/
    // Calculate the dimensions based on the dimensions of the previous indicator
    const currentClientRect = element.getBoundingClientRect();
    const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    element.classList.add(NO_TRANSITION_CLASS);
    this._inkBarContentElement.style.setProperty('transform', `translateX(${xPosition}px) scaleX(${widthDelta})`);
    // Force repaint before updating classes and transform to ensure the transform properly takes effect
    element.getBoundingClientRect();
    element.classList.remove(NO_TRANSITION_CLASS);
    element.classList.add(ACTIVE_CLASS);
    this._inkBarContentElement.style.setProperty('transform', '');
  }
  /** Removes the ink bar from the current item. */
  deactivateInkBar() {
    this._elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
  }
  /** Initializes the foundation. */
  ngOnInit() {
    this._createInkBarElement();
  }
  /** Destroys the foundation. */
  ngOnDestroy() {
    this._inkBarElement?.remove();
    this._inkBarElement = this._inkBarContentElement = null;
  }
  /** Creates and appends the ink bar element. */
  _createInkBarElement() {
    const documentNode = this._elementRef.nativeElement.ownerDocument || document;
    const inkBarElement = this._inkBarElement = documentNode.createElement('span');
    const inkBarContentElement = this._inkBarContentElement = documentNode.createElement('span');
    inkBarElement.className = 'mdc-tab-indicator';
    inkBarContentElement.className = 'mdc-tab-indicator__content mdc-tab-indicator__content--underline';
    inkBarElement.appendChild(this._inkBarContentElement);
    this._appendInkBarElement();
  }
  /**
   * Appends the ink bar to the tab host element or content, depending on whether
   * the ink bar should fit to content.
   */
  _appendInkBarElement() {
    if (!this._inkBarElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Ink bar element has not been created and cannot be appended');
    }
    const parentElement = this._fitToContent ? this._elementRef.nativeElement.querySelector('.mdc-tab__content') : this._elementRef.nativeElement;
    if (!parentElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Missing element to host the ink bar');
    }
    parentElement.appendChild(this._inkBarElement);
  }
  static {
    this.ɵfac = function InkBarItem_Factory(t) {
      return new (t || InkBarItem)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InkBarItem,
      inputs: {
        fitInkBarToContent: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "fitInkBarToContent", "fitInkBarToContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InkBarItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, {
    fitInkBarToContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */
function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = element => ({
    left: element ? (element.offsetLeft || 0) + 'px' : '0',
    width: element ? (element.offsetWidth || 0) + 'px' : '0'
  });
  return method;
}
/** Injection token for the MatInkBar's Positioner. */
const _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatInkBarPositioner', {
  providedIn: 'root',
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});

/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */
class MatTabLabelWrapper extends InkBarItem {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
    /** Whether the tab is disabled. */
    this.disabled = false;
  }
  /** Sets focus on the wrapper element */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  getOffsetLeft() {
    return this.elementRef.nativeElement.offsetLeft;
  }
  getOffsetWidth() {
    return this.elementRef.nativeElement.offsetWidth;
  }
  static {
    this.ɵfac = function MatTabLabelWrapper_Factory(t) {
      return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatTabLabelWrapper,
      selectors: [["", "matTabLabelWrapper", ""]],
      hostVars: 3,
      hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matTabLabelWrapper]',
      host: {
        '[class.mat-mdc-tab-disabled]': 'disabled',
        '[attr.aria-disabled]': '!!disabled'
      },
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();

/** Config used to bind passive event listeners */
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */
const HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */
const HEADER_SCROLL_INTERVAL = 100;
/**
 * Base class for a tab header that supported pagination.
 * @docs-private
 */
class MatPaginatedTabHeader {
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(v) {
    const value = isNaN(v) ? 0 : v;
    if (this._selectedIndex != value) {
      this._selectedIndexChanged = true;
      this._selectedIndex = value;
      if (this._keyManager) {
        this._keyManager.updateActiveItem(value);
      }
    }
  }
  constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._viewportRuler = _viewportRuler;
    this._dir = _dir;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._animationMode = _animationMode;
    /** The distance in pixels that the tab labels should be translated to the left. */
    this._scrollDistance = 0;
    /** Whether the header should scroll to the selected index after the view has been checked. */
    this._selectedIndexChanged = false;
    /** Emits when the component is destroyed. */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Whether the controls for pagination should be displayed */
    this._showPaginationControls = false;
    /** Whether the tab list can be scrolled more towards the end of the tab label list. */
    this._disableScrollAfter = true;
    /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
    this._disableScrollBefore = true;
    /** Stream that will stop the automated scrolling. */
    this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Whether pagination should be disabled. This can be used to avoid unnecessary
     * layout recalculations if it's known that pagination won't be required.
     */
    this.disablePagination = false;
    this._selectedIndex = 0;
    /** Event emitted when the option is selected. */
    this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when a label is focused. */
    this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
    _ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(_elementRef.nativeElement, 'mouseleave').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => {
        this._stopInterval();
      });
    });
  }
  ngAfterViewInit() {
    // We need to handle these events manually, because we want to bind passive event listeners.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress('before');
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress('after');
    });
  }
  ngAfterContentInit() {
    const dirChange = this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)('ltr');
    const resize = this._viewportRuler.change(150);
    const realign = () => {
      this.updatePagination();
      this._alignInkBarToSelectedTab();
    };
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap()
    // Allow focus to land on disabled tabs, as per https://w3c.github.io/aria-practices/#kbd_disabled_controls
    .skipPredicate(() => false);
    this._keyManager.updateActiveItem(this._selectedIndex);
    // Defer the first call in order to allow for slower browsers to lay out the elements.
    // This helps in cases where the user lands directly on a page with paginated tabs.
    // Note that we use `onStable` instead of `requestAnimationFrame`, because the latter
    // can hold up tests that are in a background tab.
    this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(realign);
    // On dir change or window resize, realign the ink bar and update the orientation of
    // the key manager if the direction has changed.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(dirChange, resize, this._items.changes, this._itemsResized()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => {
      // We need to defer this to give the browser some time to recalculate
      // the element dimensions. The call has to be wrapped in `NgZone.run`,
      // because the viewport change handler runs outside of Angular.
      this._ngZone.run(() => {
        Promise.resolve().then(() => {
          // Clamp the scroll distance, because it can change with the number of tabs.
          this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
          realign();
        });
      });
      this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
    });
    // If there is a change in the focus key manager we need to emit the `indexFocused`
    // event in order to provide a public event that notifies about focus changes. Also we realign
    // the tabs container by scrolling the new focused tab into the visible section.
    this._keyManager.change.subscribe(newFocusIndex => {
      this.indexFocused.emit(newFocusIndex);
      this._setTabFocus(newFocusIndex);
    });
  }
  /** Sends any changes that could affect the layout of the items. */
  _itemsResized() {
    if (typeof ResizeObserver !== 'function') {
      return rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY;
    }
    return this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this._items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(tabItems => new rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable(observer => this._ngZone.runOutsideAngular(() => {
      const resizeObserver = new ResizeObserver(entries => observer.next(entries));
      tabItems.forEach(item => resizeObserver.observe(item.elementRef.nativeElement));
      return () => {
        resizeObserver.disconnect();
      };
    }))),
    // Skip the first emit since the resize observer emits when an item
    // is observed for new items when the tab is already inserted
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.skip)(1),
    // Skip emissions where all the elements are invisible since we don't want
    // the header to try and re-render with invalid measurements. See #25574.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(entries => entries.some(e => e.contentRect.width > 0 && e.contentRect.height > 0)));
  }
  ngAfterContentChecked() {
    // If the number of tab labels have changed, check if scrolling should be enabled
    if (this._tabLabelCount != this._items.length) {
      this.updatePagination();
      this._tabLabelCount = this._items.length;
      this._changeDetectorRef.markForCheck();
    }
    // If the selected index has changed, scroll to the label and check if the scrolling controls
    // should be disabled.
    if (this._selectedIndexChanged) {
      this._scrollToLabel(this._selectedIndex);
      this._checkScrollingControls();
      this._alignInkBarToSelectedTab();
      this._selectedIndexChanged = false;
      this._changeDetectorRef.markForCheck();
    }
    // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
    // then translate the header to reflect this.
    if (this._scrollDistanceChanged) {
      this._updateTabScrollPosition();
      this._scrollDistanceChanged = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this._stopScrolling.complete();
  }
  /** Handles keyboard events on the header. */
  _handleKeydown(event) {
    // We don't handle any key bindings with a modifier key.
    if ((0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.hasModifierKey)(event)) {
      return;
    }
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ENTER:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          const item = this._items.get(this.focusIndex);
          if (item && !item.disabled) {
            this.selectFocusedIndex.emit(this.focusIndex);
            this._itemSelected(event);
          }
        }
        break;
      default:
        this._keyManager.onKeydown(event);
    }
  }
  /**
   * Callback for when the MutationObserver detects that the content has changed.
   */
  _onContentChanges() {
    const textContent = this._elementRef.nativeElement.textContent;
    // We need to diff the text content of the header, because the MutationObserver callback
    // will fire even if the text content didn't change which is inefficient and is prone
    // to infinite loops if a poorly constructed expression is passed in (see #14249).
    if (textContent !== this._currentTextContent) {
      this._currentTextContent = textContent || '';
      // The content observer runs outside the `NgZone` by default, which
      // means that we need to bring the callback back in ourselves.
      this._ngZone.run(() => {
        this.updatePagination();
        this._alignInkBarToSelectedTab();
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  /**
   * Updates the view whether pagination should be enabled or not.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateTabScrollPosition();
  }
  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value) {
    if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
      return;
    }
    this._keyManager.setActiveItem(value);
  }
  /**
   * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
   * providing a valid index and return true.
   */
  _isValidIndex(index) {
    return this._items ? !!this._items.toArray()[index] : true;
  }
  /**
   * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
   * scrolling is enabled.
   */
  _setTabFocus(tabIndex) {
    if (this._showPaginationControls) {
      this._scrollToLabel(tabIndex);
    }
    if (this._items && this._items.length) {
      this._items.toArray()[tabIndex].focus();
      // Do not let the browser manage scrolling to focus the element, this will be handled
      // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
      // should be the full width minus the offset width.
      const containerEl = this._tabListContainer.nativeElement;
      const dir = this._getLayoutDirection();
      if (dir == 'ltr') {
        containerEl.scrollLeft = 0;
      } else {
        containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
      }
    }
  }
  /** The layout direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
  _updateTabScrollPosition() {
    if (this.disablePagination) {
      return;
    }
    const scrollDistance = this.scrollDistance;
    const translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
    // Don't use `translate3d` here because we don't want to create a new layer. A new layer
    // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
    // and ripples will exceed the boundaries of the visible tab bar.
    // See: https://github.com/angular/components/issues/10276
    // We round the `transform` here, because transforms with sub-pixel precision cause some
    // browsers to blur the content of the element.
    this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
    // Setting the `transform` on IE will change the scroll offset of the parent, causing the
    // position to be thrown off in some cases. We have to reset it ourselves to ensure that
    // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
    // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
    if (this._platform.TRIDENT || this._platform.EDGE) {
      this._tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  get scrollDistance() {
    return this._scrollDistance;
  }
  set scrollDistance(value) {
    this._scrollTo(value);
  }
  /**
   * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
   * the end of the list, respectively). The distance to scroll is computed to be a third of the
   * length of the tab list view window.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollHeader(direction) {
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    // Move the scroll distance one-third the length of the tab list's viewport.
    const scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
    return this._scrollTo(this._scrollDistance + scrollAmount);
  }
  /** Handles click events on the pagination arrows. */
  _handlePaginatorClick(direction) {
    this._stopInterval();
    this._scrollHeader(direction);
  }
  /**
   * Moves the tab list such that the desired tab label (marked by index) is moved into view.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollToLabel(labelIndex) {
    if (this.disablePagination) {
      return;
    }
    const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
    if (!selectedLabel) {
      return;
    }
    // The view length is the visible width of the tab labels.
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos, labelAfterPos;
    if (this._getLayoutDirection() == 'ltr') {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }
    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;
    if (labelBeforePos < beforeVisiblePos) {
      // Scroll header to move label to the before direction
      this.scrollDistance -= beforeVisiblePos - labelBeforePos;
    } else if (labelAfterPos > afterVisiblePos) {
      // Scroll header to move label to the after direction
      this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
    }
  }
  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * tab list is wider than the size of the header container, then the pagination controls should
   * be shown.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkPaginationEnabled() {
    if (this.disablePagination) {
      this._showPaginationControls = false;
    } else {
      const isEnabled = this._tabListInner.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
      if (!isEnabled) {
        this.scrollDistance = 0;
      }
      if (isEnabled !== this._showPaginationControls) {
        this._changeDetectorRef.markForCheck();
      }
      this._showPaginationControls = isEnabled;
    }
  }
  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkScrollingControls() {
    if (this.disablePagination) {
      this._disableScrollAfter = this._disableScrollBefore = true;
    } else {
      // Check if the pagination arrows should be activated.
      this._disableScrollBefore = this.scrollDistance == 0;
      this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the tab list container and tab header container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _getMaxScrollDistance() {
    const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  /** Tells the ink-bar to align itself to the current label wrapper */
  _alignInkBarToSelectedTab() {
    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
    const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedLabelWrapper) {
      this._inkBar.alignToElement(selectedLabelWrapper);
    } else {
      this._inkBar.hide();
    }
  }
  /** Stops the currently-running paginator interval.  */
  _stopInterval() {
    this._stopScrolling.next();
  }
  /**
   * Handles the user pressing down on one of the paginators.
   * Starts scrolling the header after a certain amount of time.
   * @param direction In which direction the paginator should be scrolled.
   */
  _handlePaginatorPress(direction, mouseEvent) {
    // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
    // null check the `button`, but we do it so we don't break tests that use fake events.
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    }
    // Avoid overlapping timers.
    this._stopInterval();
    // Start a timer after the delay and keep firing based on the interval.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.timer)(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
    // Keep the timer going until something tells it to stop or the component is destroyed.
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this._stopScrolling, this._destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this._scrollHeader(direction);
      // Stop the timer if we've reached the start or the end.
      if (distance === 0 || distance >= maxScrollDistance) {
        this._stopInterval();
      }
    });
  }
  /**
   * Scrolls the header to a given position.
   * @param position Position to which to scroll.
   * @returns Information on the current scroll distance and the maximum.
   */
  _scrollTo(position) {
    if (this.disablePagination) {
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }
    const maxScrollDistance = this._getMaxScrollDistance();
    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
    // Mark that the scroll distance has changed so that after the view is checked, the CSS
    // transformation can move the header.
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this._scrollDistance
    };
  }
  static {
    this.ɵfac = function MatPaginatedTabHeader_Factory(t) {
      return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatPaginatedTabHeader,
      inputs: {
        disablePagination: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disablePagination", "disablePagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        selectedIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "selectedIndex", "selectedIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute]
      },
      outputs: {
        selectFocusedIndex: "selectFocusedIndex",
        indexFocused: "indexFocused"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.ViewportRuler
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }], {
    disablePagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    selectFocusedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    indexFocused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */
class MatTabHeader extends MatPaginatedTabHeader {
  constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    /** Whether the ripple effect is disabled or not. */
    this.disableRipple = false;
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
  _itemSelected(event) {
    event.preventDefault();
  }
  static {
    this.ɵfac = function MatTabHeader_Factory(t) {
      return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatTabHeader,
      selectors: [["mat-tab-header"]],
      contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
        }
      },
      viewQuery: function MatTabHeader_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListInner = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-tab-header"],
      hostVars: 4,
      hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
        }
      },
      inputs: {
        disableRipple: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 13,
      vars: 10,
      consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled", "disabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-labels"], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled", "disabled"]],
      template: function MatTabHeader_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabHeader_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("before"));
          })("mousedown", function MatTabHeader_Template_button_mousedown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("before", $event));
          })("touchend", function MatTabHeader_Template_button_touchend_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handleKeydown($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onContentChanges());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_button_mousedown_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("after", $event));
          })("click", function MatTabHeader_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("after"));
          })("touchend", function MatTabHeader_Template_button_touchend_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple)("disabled", ctx._disableScrollBefore || null);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple)("disabled", ctx._disableScrollAfter || null);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.CdkObserveContent],
      styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color)}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"],
      encapsulation: 2
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      host: {
        'class': 'mat-mdc-tab-header',
        '[class.mat-mdc-tab-header-pagination-controls-enabled]': '_showPaginationControls',
        '[class.mat-mdc-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
      },
      standalone: true,
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.CdkObserveContent],
      template: "<!-- TODO: this also had `mat-elevation-z4`. Figure out what we should do with it. -->\n<button class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     type=\"button\"\n     mat-ripple\n     tabindex=\"-1\"\n     [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     [disabled]=\"_disableScrollBefore || null\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</button>\n\n<div\n  class=\"mat-mdc-tab-label-container\"\n  #tabListContainer\n  (keydown)=\"_handleKeydown($event)\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\">\n  <div\n    #tabList\n    class=\"mat-mdc-tab-list\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-mdc-tab-labels\" #tabListInner>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n\n<!-- TODO: this also had `mat-elevation-z4`. Figure out what we should do with it. -->\n<button class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     type=\"button\"\n     mat-ripple\n     [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     [disabled]=\"_disableScrollAfter || null\"\n     tabindex=\"-1\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</button>\n",
      styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color)}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.ViewportRuler
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }], {
    _items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _tabListContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListContainer', {
        static: true
      }]
    }],
    _tabList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabList', {
        static: true
      }]
    }],
    _tabListInner: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListInner', {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['nextPaginator']
    }],
    _previousPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['previousPaginator']
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();

/** Injection token that can be used to provide the default options the tabs module. */
const MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TABS_CONFIG');

/**
 * Animations used by the Material tabs.
 * @docs-private
 */
const matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.trigger)('translateTab', [
  // Transitions to `none` instead of 0, because some browsers might blur the content.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.state)('center, void, left-origin-center, right-origin-center', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
    transform: 'none'
  })),
  // If the tab is either on the left or right, we additionally add a `min-height` of 1px
  // in order to ensure that the element has a height before its state changes. This is
  // necessary because Chrome does seem to skip the transition in RTL mode if the element does
  // not have a static height and is not rendered. See related issue: #9465
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.state)('left', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    minHeight: '1px',
    // Normally this is redundant since we detach the content from the DOM, but if the user
    // opted into keeping the content in the DOM, we have to hide it so it isn't focusable.
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.state)('right', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
    transform: 'translate3d(100%, 0, 0)',
    minHeight: '1px',
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)('* => left, * => right, left => center, right => center', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)('void => left-origin-center', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)('void => right-origin-center', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
    transform: 'translate3d(100%, 0, 0)',
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
};

/**
 * The portal host directive for the contents of the tab.
 * @docs-private
 */
class MatTabBodyPortal extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet {
  constructor(componentFactoryResolver, viewContainerRef, _host, _document) {
    super(componentFactoryResolver, viewContainerRef, _document);
    this._host = _host;
    /** Subscription to events for when the tab body begins centering. */
    this._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_23__.Subscription.EMPTY;
    /** Subscription to events for when the tab body finishes leaving from center position. */
    this._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_23__.Subscription.EMPTY;
  }
  /** Set initial visibility or set up subscription for changing visibility. */
  ngOnInit() {
    super.ngOnInit();
    this._centeringSub = this._host._beforeCentering.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this._host._isCenterPosition(this._host._position))).subscribe(isCentering => {
      if (isCentering && !this.hasAttached()) {
        this.attach(this._host._content);
      }
    });
    this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
      if (!this._host.preserveContent) {
        this.detach();
      }
    });
  }
  /** Clean up centering subscription. */
  ngOnDestroy() {
    super.ngOnDestroy();
    this._centeringSub.unsubscribe();
    this._leavingSub.unsubscribe();
  }
  static {
    this.ɵfac = function MatTabBodyPortal_Factory(t) {
      return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabBody)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_24__.DOCUMENT));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatTabBodyPortal,
      selectors: [["", "matTabBodyHost", ""]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabBodyPortal, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matTabBodyHost]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: MatTabBody,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabBody)]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.DOCUMENT]
    }]
  }], null);
})();
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */
class MatTabBody {
  /** The shifted index position of the tab body, where zero represents the active center tab. */
  set position(position) {
    this._positionIndex = position;
    this._computePositionAnimationState();
  }
  constructor(_elementRef, _dir, changeDetectorRef) {
    this._elementRef = _elementRef;
    this._dir = _dir;
    /** Subscription to the directionality change observable. */
    this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_23__.Subscription.EMPTY;
    /** Emits when an animation on the tab is complete. */
    this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Event emitted when the tab begins to animate towards the center as the active tab. */
    this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted before the centering of the tab begins. */
    this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted before the centering of the tab begins. */
    this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the tab completes its animation towards the center. */
    this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    // Note that the default value will always be overwritten by `MatTabBody`, but we need one
    // anyway to prevent the animations module from throwing an error if the body is used on its own.
    /** Duration for the tab's animation. */
    this.animationDuration = '500ms';
    /** Whether the tab's content should be kept in the DOM while it's off-screen. */
    this.preserveContent = false;
    if (_dir) {
      this._dirChangeSubscription = _dir.change.subscribe(dir => {
        this._computePositionAnimationState(dir);
        changeDetectorRef.markForCheck();
      });
    }
    // Ensure that we get unique animation events, because the `.done` callback can get
    // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.
    this._translateTabComplete.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.distinctUntilChanged)((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(event => {
      // If the transition to the center is complete, emit an event.
      if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
        this._onCentered.emit();
      }
      if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
        this._afterLeavingCenter.emit();
      }
    });
  }
  /**
   * After initialized, check if the content is centered and has an origin. If so, set the
   * special position states that transition the tab from the left or right before centering.
   */
  ngOnInit() {
    if (this._position == 'center' && this.origin != null) {
      this._position = this._computePositionFromOrigin(this.origin);
    }
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._translateTabComplete.complete();
  }
  _onTranslateTabStarted(event) {
    const isCentering = this._isCenterPosition(event.toState);
    this._beforeCentering.emit(isCentering);
    if (isCentering) {
      this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
    }
  }
  /** The text direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Whether the provided position state is considered center, regardless of origin. */
  _isCenterPosition(position) {
    return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
  }
  /** Computes the position state that will be used for the tab-body animation trigger. */
  _computePositionAnimationState(dir = this._getLayoutDirection()) {
    if (this._positionIndex < 0) {
      this._position = dir == 'ltr' ? 'left' : 'right';
    } else if (this._positionIndex > 0) {
      this._position = dir == 'ltr' ? 'right' : 'left';
    } else {
      this._position = 'center';
    }
  }
  /**
   * Computes the position state based on the specified origin position. This is used if the
   * tab is becoming visible immediately after creation.
   */
  _computePositionFromOrigin(origin) {
    const dir = this._getLayoutDirection();
    if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
      return 'left-origin-center';
    }
    return 'right-origin-center';
  }
  static {
    this.ɵfac = function MatTabBody_Factory(t) {
      return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatTabBody,
      selectors: [["mat-tab-body"]],
      viewQuery: function MatTabBody_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-tab-body"],
      inputs: {
        _content: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "content", "_content"],
        origin: "origin",
        animationDuration: "animationDuration",
        preserveContent: "preserveContent",
        position: "position"
      },
      outputs: {
        _onCentering: "_onCentering",
        _beforeCentering: "_beforeCentering",
        _afterLeavingCenter: "_afterLeavingCenter",
        _onCentered: "_onCentered"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 6,
      consts: [["content", ""], ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["matTabBodyHost", ""]],
      template: function MatTabBody_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onTranslateTabStarted($event));
          })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._translateTabComplete.next($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c7, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c6, ctx.animationDuration)));
        }
      },
      dependencies: [MatTabBodyPortal, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.CdkScrollable],
      styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*=\"visibility: hidden\"]{display:none}"],
      encapsulation: 2,
      data: {
        animation: [matTabsAnimations.translateTab]
      }
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabBody, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-body',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      animations: [matTabsAnimations.translateTab],
      host: {
        'class': 'mat-mdc-tab-body'
      },
      standalone: true,
      imports: [MatTabBodyPortal, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.CdkScrollable],
      template: "<div class=\"mat-mdc-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\"\n     cdkScrollable>\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
      styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*=\"visibility: hidden\"]{display:none}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    _onCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _beforeCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _afterLeavingCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _onCentered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _portalHost: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet]
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['content']
    }],
    origin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preserveContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/** Used to generate unique ID's for each tab component */
let nextId = 0;
/** Boolean constant that determines whether the tab group supports the `backgroundColor` input */
const ENABLE_BACKGROUND_INPUT = true;
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */
class MatTabGroup {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent = value;
    this._changeDetectorRef.markForCheck();
  }
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    this._indexToSelect = isNaN(value) ? null : value;
  }
  /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + '';
    this._animationDuration = /^\d+$/.test(stringValue) ? value + 'ms' : stringValue;
  }
  /**
   * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
   * accessibility when the tab does not have focusable elements or if it has scrollable content.
   * The `tabindex` will be removed automatically for inactive tabs.
   * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
   */
  get contentTabIndex() {
    return this._contentTabIndex;
  }
  set contentTabIndex(value) {
    this._contentTabIndex = isNaN(value) ? null : value;
  }
  /**
   * Background color of the tab group.
   * @deprecated The background color should be customized through Sass theming APIs.
   * @breaking-change 20.0.0 Remove this input
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    if (!ENABLE_BACKGROUND_INPUT) {
      throw new Error(`mat-tab-group background color must be set through the Sass theming API`);
    }
    const classList = this._elementRef.nativeElement.classList;
    classList.remove('mat-tabs-with-background', `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add('mat-tabs-with-background', `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  constructor(_elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    /** All of the tabs that belong to the group. */
    this._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** The tab index that should be selected after the content has been checked. */
    this._indexToSelect = 0;
    /** Index of the tab that was focused last. */
    this._lastFocusedTabIndex = null;
    /** Snapshot of the height of the tab body wrapper before another tab is activated. */
    this._tabBodyWrapperHeight = 0;
    /** Subscription to tabs being added/removed. */
    this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_23__.Subscription.EMPTY;
    /** Subscription to changes in the tab labels. */
    this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_23__.Subscription.EMPTY;
    this._fitInkBarToContent = false;
    /** Whether tabs should be stretched to fill the header. */
    this.stretchTabs = true;
    /** Whether the tab group should grow to the size of the active tab. */
    this.dynamicHeight = false;
    this._selectedIndex = null;
    /** Position of the tab header. */
    this.headerPosition = 'above';
    /**
     * Whether pagination should be disabled. This can be used to avoid unnecessary
     * layout recalculations if it's known that pagination won't be required.
     */
    this.disablePagination = false;
    /** Whether ripples in the tab group are disabled. */
    this.disableRipple = false;
    /**
     * By default tabs remove their content from the DOM while it's off-screen.
     * Setting this to `true` will keep it in the DOM which will prevent elements
     * like iframes and videos from reloading next time it comes back into the view.
     */
    this.preserveContent = false;
    /** Output to enable support for two-way binding on `[(selectedIndex)]` */
    this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when focus has changed within a tab group. */
    this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the body animation has completed */
    this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the tab selection has changed. */
    this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    /** Whether the tab group is rendered on the server. */
    this._isServer = !(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform).isBrowser;
    this._groupId = nextId++;
    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    if (defaultConfig?.contentTabIndex != null) {
      this.contentTabIndex = defaultConfig.contentTabIndex;
    }
    this.preserveContent = !!defaultConfig?.preserveContent;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  /**
   * After the content is checked, this component knows what tabs have been defined
   * and what the selected index should be. This is where we can know exactly what position
   * each tab should be in according to the new selected index, and additionally we know how
   * a new selected tab should transition in (from the left or right).
   */
  ngAfterContentChecked() {
    // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
    // the amount of tabs changes before the actual change detection runs.
    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
    // If there is a change in selected index, emit a change event. Should not trigger if
    // the selected index has not yet been initialized.
    if (this._selectedIndex != indexToSelect) {
      const isFirstRun = this._selectedIndex == null;
      if (!isFirstRun) {
        this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        // Preserve the height so page doesn't scroll up during tab change.
        // Fixes https://stackblitz.com/edit/mat-tabs-scroll-page-top-on-tab-change
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.minHeight = wrapper.clientHeight + 'px';
      }
      // Changing these values after change detection has run
      // since the checked content may contain references to them.
      Promise.resolve().then(() => {
        this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
          // Clear the min-height, this was needed during tab change to avoid
          // unnecessary scrolling.
          this._tabBodyWrapper.nativeElement.style.minHeight = '';
        }
      });
    }
    // Setup the position for each tab and optionally setup an origin on the next selected tab.
    this._tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      // If there is already a selected tab, then set up an origin for the next selected tab
      // if it doesn't have one already.
      if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this._lastFocusedTabIndex = null;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngAfterContentInit() {
    this._subscribeToAllTabChanges();
    this._subscribeToTabLabels();
    // Subscribe to changes in the amount of tabs, in order to be
    // able to re-render the content as new tabs are added or removed.
    this._tabsSubscription = this._tabs.changes.subscribe(() => {
      const indexToSelect = this._clampTabIndex(this._indexToSelect);
      // Maintain the previously-selected tab if a new tab is added or removed and there is no
      // explicit change that selects a different tab.
      if (indexToSelect === this._selectedIndex) {
        const tabs = this._tabs.toArray();
        let selectedTab;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
            // event, otherwise the consumer may end up in an infinite loop in some edge cases like
            // adding a tab within the `selectedIndexChange` event.
            this._indexToSelect = this._selectedIndex = i;
            this._lastFocusedTabIndex = null;
            selectedTab = tabs[i];
            break;
          }
        }
        // If we haven't found an active tab and a tab exists at the selected index, it means
        // that the active tab was swapped out. Since this won't be picked up by the rendering
        // loop in `ngAfterContentChecked`, we need to sync it up manually.
        if (!selectedTab && tabs[indexToSelect]) {
          Promise.resolve().then(() => {
            tabs[indexToSelect].isActive = true;
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          });
        }
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Listens to changes in all of the tabs. */
  _subscribeToAllTabChanges() {
    // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
    // some that are inside of nested tab groups. We filter them out manually by checking that
    // the closest group to the tab is the current one.
    this._allTabs.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this._allTabs)).subscribe(tabs => {
      this._tabs.reset(tabs.filter(tab => {
        return tab._closestTabGroup === this || !tab._closestTabGroup;
      }));
      this._tabs.notifyOnChanges();
    });
  }
  ngOnDestroy() {
    this._tabs.destroy();
    this._tabsSubscription.unsubscribe();
    this._tabLabelSubscription.unsubscribe();
  }
  /** Re-aligns the ink bar to the selected tab element. */
  realignInkBar() {
    if (this._tabHeader) {
      this._tabHeader._alignInkBarToSelectedTab();
    }
  }
  /**
   * Recalculates the tab group's pagination dimensions.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    if (this._tabHeader) {
      this._tabHeader.updatePagination();
    }
  }
  /**
   * Sets focus to a particular tab.
   * @param index Index of the tab to be focused.
   */
  focusTab(index) {
    const header = this._tabHeader;
    if (header) {
      header.focusIndex = index;
    }
  }
  _focusChanged(index) {
    this._lastFocusedTabIndex = index;
    this.focusChange.emit(this._createChangeEvent(index));
  }
  _createChangeEvent(index) {
    const event = new MatTabChangeEvent();
    event.index = index;
    if (this._tabs && this._tabs.length) {
      event.tab = this._tabs.toArray()[index];
    }
    return event;
  }
  /**
   * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
   * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
   * binding to be updated, we need to subscribe to changes in it and trigger change detection
   * manually.
   */
  _subscribeToTabLabels() {
    if (this._tabLabelSubscription) {
      this._tabLabelSubscription.unsubscribe();
    }
    this._tabLabelSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...this._tabs.map(tab => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Clamps the given index to the bounds of 0 and the tabs length. */
  _clampTabIndex(index) {
    // Note the `|| 0`, which ensures that values like NaN can't get through
    // and which would otherwise throw the component into an infinite loop
    // (since Math.max(NaN, 0) === NaN).
    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
  }
  /** Returns a unique id for each tab label element */
  _getTabLabelId(i) {
    return `mat-tab-label-${this._groupId}-${i}`;
  }
  /** Returns a unique id for each tab content element */
  _getTabContentId(i) {
    return `mat-tab-content-${this._groupId}-${i}`;
  }
  /**
   * Sets the height of the body wrapper to the height of the activating tab if dynamic
   * height property is true.
   */
  _setTabBodyWrapperHeight(tabHeight) {
    if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
      return;
    }
    const wrapper = this._tabBodyWrapper.nativeElement;
    wrapper.style.height = this._tabBodyWrapperHeight + 'px';
    // This conditional forces the browser to paint the height so that
    // the animation to the new height can have an origin.
    if (this._tabBodyWrapper.nativeElement.offsetHeight) {
      wrapper.style.height = tabHeight + 'px';
    }
  }
  /** Removes the height of the tab body wrapper. */
  _removeTabBodyWrapperHeight() {
    const wrapper = this._tabBodyWrapper.nativeElement;
    this._tabBodyWrapperHeight = wrapper.clientHeight;
    wrapper.style.height = '';
    this.animationDone.emit();
  }
  /** Handle click events, setting new selected index if appropriate. */
  _handleClick(tab, tabHeader, index) {
    tabHeader.focusIndex = index;
    if (!tab.disabled) {
      this.selectedIndex = index;
    }
  }
  /** Retrieves the tabindex for the tab. */
  _getTabIndex(index) {
    const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
    return index === targetIndex ? 0 : -1;
  }
  /** Callback for when the focused state of a tab has changed. */
  _tabFocusChanged(focusOrigin, index) {
    // Mouse/touch focus happens during the `mousedown`/`touchstart` phase which
    // can cause the tab to be moved out from under the pointer, interrupting the
    // click sequence (see #21898). We don't need to scroll the tab into view for
    // such cases anyway, because it will be done when the tab becomes selected.
    if (focusOrigin && focusOrigin !== 'mouse' && focusOrigin !== 'touch') {
      this._tabHeader.focusIndex = index;
    }
  }
  static {
    this.ɵfac = function MatTabGroup_Factory(t) {
      return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatTabGroup,
      selectors: [["mat-tab-group"]],
      contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTab, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
        }
      },
      viewQuery: function MatTabGroup_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-tab-group"],
      hostVars: 10,
      hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mat-" + (ctx.color || "primary"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--mat-tab-animation-duration", ctx.animationDuration);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-group-dynamic-height", ctx.dynamicHeight)("mat-mdc-tab-group-inverted-header", ctx.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", ctx.stretchTabs);
        }
      },
      inputs: {
        color: "color",
        fitInkBarToContent: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "fitInkBarToContent", "fitInkBarToContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        stretchTabs: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "mat-stretch-tabs", "stretchTabs", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        dynamicHeight: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "dynamicHeight", "dynamicHeight", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        selectedIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "selectedIndex", "selectedIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        headerPosition: "headerPosition",
        animationDuration: "animationDuration",
        contentTabIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "contentTabIndex", "contentTabIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        disablePagination: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disablePagination", "disablePagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disableRipple: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        preserveContent: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "preserveContent", "preserveContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        backgroundColor: "backgroundColor"
      },
      outputs: {
        selectedIndexChange: "selectedIndexChange",
        focusChange: "focusChange",
        animationDone: "animationDone",
        selectedTabChange: "selectedTabChange"
      },
      exportAs: ["matTabGroup"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 9,
      vars: 6,
      consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabNode", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "id", "mdc-tab--active", "class", "disabled", "fitInkBarToContent"], [1, "mat-mdc-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "mat-mdc-tab-body-active", "class", "content", "position", "origin", "animationDuration", "preserveContent"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "click", "cdkFocusChange", "id", "disabled", "fitInkBarToContent"], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "id", "content", "position", "origin", "animationDuration", "preserveContent"]],
      template: function MatTabGroup_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-header", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._focusChanged($event));
          })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.selectedIndex = $event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, MatTabGroup_For_3_Template, 8, 17, "div", 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatTabGroup_Conditional_4_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](7, MatTabGroup_For_8_Template, 1, 13, "mat-tab-body", 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx._tabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, ctx._isServer ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx._tabs);
        }
      },
      dependencies: [MatTabHeader, MatTabLabelWrapper, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.CdkMonitorFocus, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, MatTabBody],
      styles: [".mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;font-family:var(--mat-tab-header-label-text-font);font-size:var(--mat-tab-header-label-text-size);letter-spacing:var(--mat-tab-header-label-text-tracking);line-height:var(--mat-tab-header-label-text-line-height);font-weight:var(--mat-tab-header-label-text-weight)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-top-width:var(--mdc-tab-indicator-active-indicator-height)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:not(.mdc-tab--stacked){height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab:not(:disabled).mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):hover.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):focus.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):active.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:disabled.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):hover:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):focus:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):active:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:disabled:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color)}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color)}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color)}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color)}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color)}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color)}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color)}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color)}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color);display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}"],
      encapsulation: 2
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-group',
      exportAs: 'matTabGroup',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        'class': 'mat-mdc-tab-group',
        '[class]': '"mat-" + (color || "primary")',
        '[class.mat-mdc-tab-group-dynamic-height]': 'dynamicHeight',
        '[class.mat-mdc-tab-group-inverted-header]': 'headerPosition === "below"',
        '[class.mat-mdc-tab-group-stretch-tabs]': 'stretchTabs',
        '[style.--mat-tab-animation-duration]': 'animationDuration'
      },
      standalone: true,
      imports: [MatTabHeader, MatTabLabelWrapper, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.CdkMonitorFocus, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, MatTabBody],
      template: "<mat-tab-header #tabHeader\n                [selectedIndex]=\"selectedIndex || 0\"\n                [disableRipple]=\"disableRipple\"\n                [disablePagination]=\"disablePagination\"\n                (indexFocused)=\"_focusChanged($event)\"\n                (selectFocusedIndex)=\"selectedIndex = $event\">\n\n  @for (tab of _tabs; track tab; let i = $index) {\n    <div class=\"mdc-tab mat-mdc-tab mat-mdc-focus-indicator\"\n        #tabNode\n        role=\"tab\"\n        matTabLabelWrapper\n        cdkMonitorElementFocus\n        [id]=\"_getTabLabelId(i)\"\n        [attr.tabIndex]=\"_getTabIndex(i)\"\n        [attr.aria-posinset]=\"i + 1\"\n        [attr.aria-setsize]=\"_tabs.length\"\n        [attr.aria-controls]=\"_getTabContentId(i)\"\n        [attr.aria-selected]=\"selectedIndex === i\"\n        [attr.aria-label]=\"tab.ariaLabel || null\"\n        [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n        [class.mdc-tab--active]=\"selectedIndex === i\"\n        [class]=\"tab.labelClass\"\n        [disabled]=\"tab.disabled\"\n        [fitInkBarToContent]=\"fitInkBarToContent\"\n        (click)=\"_handleClick(tab, tabHeader, i)\"\n        (cdkFocusChange)=\"_tabFocusChanged($event, i)\">\n      <span class=\"mdc-tab__ripple\"></span>\n\n      <!-- Needs to be a separate element, because we can't put\n          `overflow: hidden` on tab due to the ink bar. -->\n      <div\n        class=\"mat-mdc-tab-ripple\"\n        mat-ripple\n        [matRippleTrigger]=\"tabNode\"\n        [matRippleDisabled]=\"tab.disabled || disableRipple\"></div>\n\n      <span class=\"mdc-tab__content\">\n        <span class=\"mdc-tab__text-label\">\n          <!--\n            If there is a label template, use it, otherwise fall back to the text label.\n            Note that we don't have indentation around the text label, because it adds\n            whitespace around the text which breaks some internal tests.\n          -->\n          @if (tab.templateLabel) {\n            <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n          } @else {{{tab.textLabel}}}\n        </span>\n      </span>\n    </div>\n  }\n</mat-tab-header>\n\n<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren't any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n<div\n  class=\"mat-mdc-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  @for (tab of _tabs; track tab; let i = $index) {\n    <mat-tab-body role=\"tabpanel\"\n                 [id]=\"_getTabContentId(i)\"\n                 [attr.tabindex]=\"(contentTabIndex != null && selectedIndex === i) ? contentTabIndex : null\"\n                 [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n                 [attr.aria-hidden]=\"selectedIndex !== i\"\n                 [class.mat-mdc-tab-body-active]=\"selectedIndex === i\"\n                 [class]=\"tab.bodyClass\"\n                 [content]=\"tab.content!\"\n                 [position]=\"tab.position!\"\n                 [origin]=\"tab.origin\"\n                 [animationDuration]=\"animationDuration\"\n                 [preserveContent]=\"preserveContent\"\n                 (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n                 (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n    </mat-tab-body>\n  }\n</div>\n",
      styles: [".mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;font-family:var(--mat-tab-header-label-text-font);font-size:var(--mat-tab-header-label-text-size);letter-spacing:var(--mat-tab-header-label-text-tracking);line-height:var(--mat-tab-header-label-text-line-height);font-weight:var(--mat-tab-header-label-text-weight)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-top-width:var(--mdc-tab-indicator-active-indicator-height)}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:not(.mdc-tab--stacked){height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab:not(:disabled).mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):hover.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):focus.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):active.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:disabled.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):hover:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):focus:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:not(:disabled):active:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab:disabled:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color)}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color)}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color)}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color)}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color)}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color)}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color)}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color)}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color);display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_TABS_CONFIG]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }], {
    _allTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodyWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabBodyWrapper']
    }],
    _tabHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabHeader']
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fitInkBarToContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        alias: 'mat-stretch-tabs',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    dynamicHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    headerPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentTabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    disablePagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    preserveContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    focusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    animationDone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selectedTabChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/** A simple change event emitted on focus or selection changes. */
class MatTabChangeEvent {}

// Increasing integer for generating unique ids for tab nav components.
let nextUniqueId = 0;
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
class MatTabNav extends MatPaginatedTabHeader {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent.value;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent.next(value);
    this._changeDetectorRef.markForCheck();
  }
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + '';
    this._animationDuration = /^\d+$/.test(stringValue) ? value + 'ms' : stringValue;
  }
  /** Background color of the tab nav. */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove('mat-tabs-with-background', `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add('mat-tabs-with-background', `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode, defaultConfig) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this._fitInkBarToContent = new rxjs__WEBPACK_IMPORTED_MODULE_26__.BehaviorSubject(false);
    /** Whether tabs should be stretched to fill the header. */
    this.stretchTabs = true;
    /** Whether the ripple effect is disabled or not. */
    this.disableRipple = false;
    /** Theme color of the nav bar. */
    this.color = 'primary';
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  _itemSelected() {
    // noop
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    // We need this to run before the `changes` subscription in parent to ensure that the
    // selectedIndex is up-to-date by the time the super class starts looking for it.
    this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => {
      this.updateActiveLink();
    });
    super.ngAfterContentInit();
  }
  ngAfterViewInit() {
    if (!this.tabPanel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw new Error('A mat-tab-nav-panel must be specified via [tabPanel].');
    }
    super.ngAfterViewInit();
  }
  /** Notifies the component that the active link has been changed. */
  updateActiveLink() {
    if (!this._items) {
      return;
    }
    const items = this._items.toArray();
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        this.selectedIndex = i;
        this._changeDetectorRef.markForCheck();
        if (this.tabPanel) {
          this.tabPanel._activeTabId = items[i].id;
        }
        return;
      }
    }
    // The ink bar should hide itself if no items are active.
    this.selectedIndex = -1;
    this._inkBar.hide();
  }
  _getRole() {
    return this.tabPanel ? 'tablist' : this._elementRef.nativeElement.getAttribute('role');
  }
  static {
    this.ɵfac = function MatTabNav_Factory(t) {
      return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatTabNav,
      selectors: [["", "mat-tab-nav-bar", ""]],
      contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLink, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
        }
      },
      viewQuery: function MatTabNav_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListInner = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"],
      hostVars: 17,
      hostBindings: function MatTabNav_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._getRole());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--mat-tab-animation-duration", ctx.animationDuration);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", ctx.stretchTabs)("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        fitInkBarToContent: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "fitInkBarToContent", "fitInkBarToContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        stretchTabs: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "mat-stretch-tabs", "stretchTabs", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        animationDuration: "animationDuration",
        backgroundColor: "backgroundColor",
        disableRipple: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        color: "color",
        tabPanel: "tabPanel"
      },
      exportAs: ["matTabNavBar", "matTabNav"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      attrs: _c10,
      ngContentSelectors: _c0,
      decls: 13,
      vars: 8,
      consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled", "disabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-links"], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled", "disabled"]],
      template: function MatTabNav_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabNav_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("before"));
          })("mousedown", function MatTabNav_Template_button_mousedown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("before", $event));
          })("touchend", function MatTabNav_Template_button_touchend_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handleKeydown($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onContentChanges());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabNav_Template_button_mousedown_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("after", $event));
          })("click", function MatTabNav_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("after"));
          })("touchend", function MatTabNav_Template_button_touchend_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple)("disabled", ctx._disableScrollBefore || null);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple)("disabled", ctx._disableScrollAfter || null);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.CdkObserveContent],
      styles: [".mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color)}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"],
      encapsulation: 2
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabNav, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-tab-nav-bar]',
      exportAs: 'matTabNavBar, matTabNav',
      host: {
        '[attr.role]': '_getRole()',
        'class': 'mat-mdc-tab-nav-bar mat-mdc-tab-header',
        '[class.mat-mdc-tab-header-pagination-controls-enabled]': '_showPaginationControls',
        '[class.mat-mdc-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
        '[class.mat-mdc-tab-nav-bar-stretch-tabs]': 'stretchTabs',
        '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
        '[class.mat-accent]': 'color === "accent"',
        '[class.mat-warn]': 'color === "warn"',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[style.--mat-tab-animation-duration]': 'animationDuration'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.CdkObserveContent],
      template: "<!-- TODO: this also had `mat-elevation-z4`. Figure out what we should do with it. -->\n<button class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     type=\"button\"\n     mat-ripple\n     tabindex=\"-1\"\n     [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     [disabled]=\"_disableScrollBefore || null\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</button>\n\n<div class=\"mat-mdc-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div class=\"mat-mdc-tab-list\" #tabList (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-mdc-tab-links\" #tabListInner>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n\n<!-- TODO: this also had `mat-elevation-z4`. Figure out what we should do with it. -->\n<button class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     type=\"button\"\n     mat-ripple\n     [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     [disabled]=\"_disableScrollAfter || null\"\n     tabindex=\"-1\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</button>\n",
      styles: [".mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color)}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.ViewportRuler
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_TABS_CONFIG]
    }]
  }], {
    fitInkBarToContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        alias: 'mat-stretch-tabs',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabLink), {
        descendants: true
      }]
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabPanel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _tabListContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListContainer', {
        static: true
      }]
    }],
    _tabList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabList', {
        static: true
      }]
    }],
    _tabListInner: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListInner', {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['nextPaginator']
    }],
    _previousPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['previousPaginator']
    }]
  });
})();
/**
 * Link inside a `mat-tab-nav-bar`.
 */
class MatTabLink extends InkBarItem {
  /** Whether the link is active. */
  get active() {
    return this._isActive;
  }
  set active(value) {
    if (value !== this._isActive) {
      this._isActive = value;
      this._tabNavBar.updateActiveLink();
    }
  }
  /**
   * Whether ripples are disabled on interaction.
   * @docs-private
   */
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
  }
  constructor(_tabNavBar, /** @docs-private */elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
    super();
    this._tabNavBar = _tabNavBar;
    this.elementRef = elementRef;
    this._focusMonitor = _focusMonitor;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Whether the tab link is active or not. */
    this._isActive = false;
    /** Whether the tab link is disabled. */
    this.disabled = false;
    /** Whether ripples are disabled on the tab link. */
    this.disableRipple = false;
    this.tabIndex = 0;
    /** Unique id for the tab. */
    this.id = `mat-tab-link-${nextUniqueId++}`;
    this.rippleConfig = globalRippleOptions || {};
    this.tabIndex = parseInt(tabIndex) || 0;
    if (animationMode === 'NoopAnimations') {
      this.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }
    _tabNavBar._fitInkBarToContent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(fitInkBarToContent => {
      this.fitInkBarToContent = fitInkBarToContent;
    });
  }
  /** Focuses the tab link. */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.elementRef);
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    super.ngOnDestroy();
    this._focusMonitor.stopMonitoring(this.elementRef);
  }
  _handleFocus() {
    // Since we allow navigation through tabbing in the nav bar, we
    // have to update the focused index whenever the link receives focus.
    this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
  }
  _handleKeydown(event) {
    if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ENTER) {
      if (this.disabled) {
        event.preventDefault();
      } else if (this._tabNavBar.tabPanel) {
        // Only prevent the default action on space since it can scroll the page.
        // Don't prevent enter since it can break link navigation.
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.SPACE) {
          event.preventDefault();
        }
        this.elementRef.nativeElement.click();
      }
    }
  }
  _getAriaControls() {
    return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute('aria-controls');
  }
  _getAriaSelected() {
    if (this._tabNavBar.tabPanel) {
      return this.active ? 'true' : 'false';
    } else {
      return this.elementRef.nativeElement.getAttribute('aria-selected');
    }
  }
  _getAriaCurrent() {
    return this.active && !this._tabNavBar.tabPanel ? 'page' : null;
  }
  _getRole() {
    return this._tabNavBar.tabPanel ? 'tab' : this.elementRef.nativeElement.getAttribute('role');
  }
  _getTabIndex() {
    if (this._tabNavBar.tabPanel) {
      return this._isActive && !this.disabled ? 0 : -1;
    } else {
      return this.disabled ? -1 : this.tabIndex;
    }
  }
  static {
    this.ɵfac = function MatTabLink_Factory(t) {
      return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatTabLink,
      selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
      hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-mdc-focus-indicator"],
      hostVars: 11,
      hostBindings: function MatTabLink_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatTabLink_focus_HostBindingHandler() {
            return ctx._handleFocus();
          })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._getTabIndex())("role", ctx._getRole());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-disabled", ctx.disabled)("mdc-tab--active", ctx.active);
        }
      },
      inputs: {
        active: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "active", "active", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disableRipple: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        tabIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabIndex", "tabIndex", value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)],
        id: "id"
      },
      exportAs: ["matTabLink"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      attrs: _c11,
      ngContentSelectors: _c0,
      decls: 5,
      vars: 2,
      consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]],
      template: function MatTabLink_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx.elementRef.nativeElement)("matRippleDisabled", ctx.rippleDisabled);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple],
      styles: [".mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;font-family:var(--mat-tab-header-label-text-font);font-size:var(--mat-tab-header-label-text-size);letter-spacing:var(--mat-tab-header-label-text-tracking);line-height:var(--mat-tab-header-label-text-line-height);font-weight:var(--mat-tab-header-label-text-weight)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-top-width:var(--mdc-tab-indicator-active-indicator-height)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:not(.mdc-tab--stacked){height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link:not(:disabled).mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):hover.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):focus.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):active.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:disabled.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):hover:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):focus:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):active:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:disabled:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color)}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color)}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color)}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color)}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color)}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color)}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color)}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color)}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color);display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLink, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-tab-link], [matTabLink]',
      exportAs: 'matTabLink',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'mdc-tab mat-mdc-tab-link mat-mdc-focus-indicator',
        '[attr.aria-controls]': '_getAriaControls()',
        '[attr.aria-current]': '_getAriaCurrent()',
        '[attr.aria-disabled]': 'disabled',
        '[attr.aria-selected]': '_getAriaSelected()',
        '[attr.id]': 'id',
        '[attr.tabIndex]': '_getTabIndex()',
        '[attr.role]': '_getRole()',
        '[class.mat-mdc-tab-disabled]': 'disabled',
        '[class.mdc-tab--active]': 'active',
        '(focus)': '_handleFocus()',
        '(keydown)': '_handleKeydown($event)'
      },
      standalone: true,
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple],
      template: "<span class=\"mdc-tab__ripple\"></span>\n\n<div\n  class=\"mat-mdc-tab-ripple\"\n  mat-ripple\n  [matRippleTrigger]=\"elementRef.nativeElement\"\n  [matRippleDisabled]=\"rippleDisabled\"></div>\n\n<span class=\"mdc-tab__content\">\n  <span class=\"mdc-tab__text-label\">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n",
      styles: [".mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;font-family:var(--mat-tab-header-label-text-font);font-size:var(--mat-tab-header-label-text-size);letter-spacing:var(--mat-tab-header-label-text-tracking);line-height:var(--mat-tab-header-label-text-line-height);font-weight:var(--mat-tab-header-label-text-weight)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-top-width:var(--mdc-tab-indicator-active-indicator-height)}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:not(.mdc-tab--stacked){height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link:not(:disabled).mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):hover.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):focus.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):active.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:disabled.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):hover:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):focus:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:not(:disabled):active:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link:disabled:not(.mdc-tab--active) .mdc-tab__icon{fill:currentColor}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color)}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color)}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color)}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color)}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color)}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color)}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color)}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color)}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color);display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color)}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}"]
    }]
  }], () => [{
    type: MatTabNav
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
      args: ['tabindex']
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }], {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)
      }]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Tab panel component associated with MatTabNav.
 */
class MatTabNavPanel {
  constructor() {
    /** Unique id for the tab panel. */
    this.id = `mat-tab-nav-panel-${nextUniqueId++}`;
  }
  static {
    this.ɵfac = function MatTabNavPanel_Factory(t) {
      return new (t || MatTabNavPanel)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatTabNavPanel,
      selectors: [["mat-tab-nav-panel"]],
      hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"],
      hostVars: 2,
      hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._activeTabId)("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      exportAs: ["matTabNavPanel"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatTabNavPanel_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabNavPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-nav-panel',
      exportAs: 'matTabNavPanel',
      template: '<ng-content></ng-content>',
      host: {
        '[attr.aria-labelledby]': '_activeTabId',
        '[attr.id]': 'id',
        'class': 'mat-mdc-tab-nav-panel',
        'role': 'tabpanel'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatTabsModule {
  static {
    this.ɵfac = function MatTabsModule_Factory(t) {
      return new (t || MatTabsModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatTabsModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_components_auth_auth_component_ts.js.map