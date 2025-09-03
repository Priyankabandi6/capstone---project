"use strict";
(self["webpackChunkhospital_management_frontend"] = self["webpackChunkhospital_management_frontend"] || []).push([["src_app_components_patients_patients_component_ts"],{

/***/ 5791:
/*!***********************************************************!*\
  !*** ./src/app/components/patients/patients.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatientsComponent: () => (/* binding */ PatientsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 4646);
































const _c0 = () => [5, 10, 25, 100];
function PatientsComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patient_r1.id);
  }
}
function PatientsComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35)(1, "div", 36)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const patient_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patient_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patient_r2.bloodGroup);
  }
}
function PatientsComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", patient_r3.age, " yrs");
  }
}
function PatientsComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35)(1, "mat-chip", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const patient_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", patient_r4.gender === "Male" ? "primary" : "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patient_r4.gender, " ");
  }
}
function PatientsComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patient_r5.phone);
  }
}
function PatientsComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patient_r6.email);
  }
}
function PatientsComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35)(1, "mat-chip", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const patient_r7 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r7.getStatusColor(patient_r7.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patient_r7.status, " ");
  }
}
function PatientsComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35)(1, "button", 40)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 0)(6, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientsComponent_td_62_Template_button_click_6_listener() {
      const patient_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.openEditDialog(patient_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientsComponent_td_62_Template_button_click_11_listener() {
      const patient_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.deletePatient(patient_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 42)(17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", menu_r11);
  }
}
function PatientsComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 43);
  }
}
function PatientsComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 44);
  }
}
function PatientsComponent_div_66_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_div_66_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Age is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_div_66_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Age must be between 0 and 150 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_div_66_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_div_66_mat_error_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_div_66_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid 10-digit phone number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_div_66_mat_error_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_div_66_mat_error_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_div_66_mat_error_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PatientsComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientsComponent_div_66_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientsComponent_div_66_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientsComponent_div_66_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PatientsComponent_div_66_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.savePatient());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 50)(10, "div", 11)(11, "div", 4)(12, "mat-form-field", 12)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PatientsComponent_div_66_mat_error_16_Template, 2, 0, "mat-error", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4)(18, "mat-form-field", 12)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PatientsComponent_div_66_mat_error_22_Template, 2, 0, "mat-error", 52)(23, PatientsComponent_div_66_mat_error_23_Template, 2, 0, "mat-error", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11)(25, "div", 4)(26, "mat-form-field", 12)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 54)(30, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PatientsComponent_div_66_mat_error_36_Template, 2, 0, "mat-error", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4)(38, "mat-form-field", 12)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Blood Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-select", 58)(42, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "A+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "A-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "B+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "B-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "AB+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "AB-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "O+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "O-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11)(59, "div", 4)(60, "mat-form-field", 12)(61, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, PatientsComponent_div_66_mat_error_64_Template, 2, 0, "mat-error", 52)(65, PatientsComponent_div_66_mat_error_65_Template, 2, 0, "mat-error", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4)(67, "mat-form-field", 12)(68, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, PatientsComponent_div_66_mat_error_71_Template, 2, 0, "mat-error", 52)(72, PatientsComponent_div_66_mat_error_72_Template, 2, 0, "mat-error", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11)(74, "div", 69)(75, "mat-form-field", 12)(76, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "textarea", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, PatientsComponent_div_66_mat_error_79_Template, 2, 0, "mat-error", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 11)(81, "div", 4)(82, "mat-form-field", 12)(83, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Emergency Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 4)(87, "mat-form-field", 12)(88, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Medical History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "textarea", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 73)(92, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientsComponent_div_66_Template_button_click_92_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
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
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.isAddMode ? "Add New Patient" : "Edit Patient");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r7.patientForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r7.patientForm.get("name")) == null ? null : tmp_3_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r7.patientForm.get("age")) == null ? null : tmp_4_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r7.patientForm.get("age")) == null ? null : tmp_5_0.hasError("min")) || ((tmp_5_0 = ctx_r7.patientForm.get("age")) == null ? null : tmp_5_0.hasError("max")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r7.patientForm.get("gender")) == null ? null : tmp_6_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r7.patientForm.get("phone")) == null ? null : tmp_7_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r7.patientForm.get("phone")) == null ? null : tmp_8_0.hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r7.patientForm.get("email")) == null ? null : tmp_9_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r7.patientForm.get("email")) == null ? null : tmp_10_0.hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r7.patientForm.get("address")) == null ? null : tmp_11_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.patientForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.isAddMode ? "Add Patient" : "Update Patient", " ");
  }
}
class PatientsComponent {
  constructor(fb, dialog, snackBar) {
    this.fb = fb;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.displayedColumns = ['id', 'name', 'age', 'gender', 'phone', 'email', 'status', 'actions'];
    this.dataSource = [];
    this.filteredDataSource = [];
    this.isAddMode = false;
    this.selectedPatient = null;
    this.searchTerm = '';
    this.patientForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.max(150)]],
      gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('^[0-9]{10}$')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      bloodGroup: [''],
      emergencyContact: [''],
      medicalHistory: ['']
    });
  }
  ngOnInit() {
    this.loadPatients();
  }
  loadPatients() {
    // Mock data - replace with actual API call
    this.dataSource = [{
      id: 1,
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      phone: '1234567890',
      email: 'john@example.com',
      status: 'Active',
      bloodGroup: 'O+',
      address: '123 Main St'
    }, {
      id: 2,
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      phone: '9876543210',
      email: 'jane@example.com',
      status: 'Active',
      bloodGroup: 'A+',
      address: '456 Oak Ave'
    }, {
      id: 3,
      name: 'Mike Wilson',
      age: 42,
      gender: 'Male',
      phone: '5551234567',
      email: 'mike@example.com',
      status: 'Inactive',
      bloodGroup: 'B+',
      address: '789 Pine Rd'
    }, {
      id: 4,
      name: 'Sarah Davis',
      age: 31,
      gender: 'Female',
      phone: '4449876543',
      email: 'sarah@example.com',
      status: 'Active',
      bloodGroup: 'AB+',
      address: '321 Elm St'
    }];
    this.filteredDataSource = [...this.dataSource];
  }
  applyFilter() {
    if (!this.searchTerm.trim()) {
      this.filteredDataSource = [...this.dataSource];
      return;
    }
    this.filteredDataSource = this.dataSource.filter(patient => patient.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || patient.email.toLowerCase().includes(this.searchTerm.toLowerCase()) || patient.phone.includes(this.searchTerm));
  }
  openAddDialog() {
    this.isAddMode = true;
    this.selectedPatient = null;
    this.patientForm.reset();
  }
  openEditDialog(patient) {
    this.isAddMode = false;
    this.selectedPatient = patient;
    this.patientForm.patchValue(patient);
  }
  savePatient() {
    if (this.patientForm.valid) {
      const patientData = this.patientForm.value;
      if (this.isAddMode) {
        // Add new patient
        const newPatient = {
          ...patientData,
          id: this.dataSource.length + 1,
          status: 'Active'
        };
        this.dataSource.push(newPatient);
        this.snackBar.open('Patient added successfully!', 'Close', {
          duration: 3000
        });
      } else {
        // Update existing patient
        const index = this.dataSource.findIndex(p => p.id === this.selectedPatient.id);
        if (index !== -1) {
          this.dataSource[index] = {
            ...this.selectedPatient,
            ...patientData
          };
          this.snackBar.open('Patient updated successfully!', 'Close', {
            duration: 3000
          });
        }
      }
      this.loadPatients();
      this.closeDialog();
    }
  }
  deletePatient(patient) {
    if (confirm(`Are you sure you want to delete ${patient.name}?`)) {
      const index = this.dataSource.findIndex(p => p.id === patient.id);
      if (index !== -1) {
        this.dataSource.splice(index, 1);
        this.loadPatients();
        this.snackBar.open('Patient deleted successfully!', 'Close', {
          duration: 3000
        });
      }
    }
  }
  closeDialog() {
    this.selectedPatient = null;
    this.patientForm.reset();
  }
  getStatusColor(status) {
    return status === 'Active' ? 'success' : 'warn';
  }
  static {
    this.ɵfac = function PatientsComponent_Factory(t) {
      return new (t || PatientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientsComponent,
      selectors: [["app-patients"]],
      viewQuery: function PatientsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 67,
      vars: 7,
      consts: [["menu", "matMenu"], [1, "patients-container"], [1, "header-section", "mb-4"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "page-title"], [1, "me-2"], [1, "page-subtitle"], [1, "col-md-6", "text-md-end"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mb-4"], [1, "row"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "Search by name, email, or phone", 3, "ngModelChange", "input", "ngModel"], ["matSuffix", ""], [1, "d-flex", "gap-2"], ["mat-stroked-button", ""], [1, "table-responsive"], ["mat-table", "", "matSort", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "age"], ["matColumnDef", "gender"], ["matColumnDef", "phone"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "email"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of patients", 3, "pageSizeOptions"], ["class", "modal", 3, "click", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "patient-name"], [1, "text-muted", "d-block"], ["selected", "", 3, "color"], ["mat-header-cell", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["mat-icon-button", "", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], ["matInput", "", "formControlName", "name", "placeholder", "Enter full name"], [4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "age", "placeholder", "Enter age"], ["formControlName", "gender"], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["formControlName", "bloodGroup"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], ["matInput", "", "formControlName", "phone", "placeholder", "Enter phone number"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "Enter email"], [1, "col-12"], ["matInput", "", "formControlName", "address", "rows", "3", "placeholder", "Enter address"], ["matInput", "", "formControlName", "emergencyContact", "placeholder", "Enter emergency contact"], ["matInput", "", "formControlName", "medicalHistory", "rows", "2", "placeholder", "Enter medical history"], [1, "modal-footer"], ["mat-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]],
      template: function PatientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h1", 5)(5, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "people");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Patient Management ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Manage patient records and information");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientsComponent_Template_button_click_11_listener() {
            return ctx.openAddDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add New Patient ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 10)(16, "mat-card-content")(17, "div", 11)(18, "div", 4)(19, "mat-form-field", 12)(20, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Search Patients");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PatientsComponent_Template_input_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PatientsComponent_Template_input_input_22_listener() {
            return ctx.applyFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4)(26, "div", 15)(27, "button", 16)(28, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "filter_list");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Filter ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16)(32, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "download");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Export ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card")(36, "mat-card-content")(37, "div", 17)(38, "table", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PatientsComponent_th_40_Template, 2, 0, "th", 20)(41, PatientsComponent_td_41_Template, 2, 1, "td", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PatientsComponent_th_43_Template, 2, 0, "th", 20)(44, PatientsComponent_td_44_Template, 6, 2, "td", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PatientsComponent_th_46_Template, 2, 0, "th", 20)(47, PatientsComponent_td_47_Template, 2, 1, "td", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, PatientsComponent_th_49_Template, 2, 0, "th", 20)(50, PatientsComponent_td_50_Template, 3, 2, "td", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PatientsComponent_th_52_Template, 2, 0, "th", 26)(53, PatientsComponent_td_53_Template, 2, 1, "td", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, PatientsComponent_th_55_Template, 2, 0, "th", 26)(56, PatientsComponent_td_56_Template, 2, 1, "td", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, PatientsComponent_th_58_Template, 2, 0, "th", 20)(59, PatientsComponent_td_59_Template, 3, 2, "td", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PatientsComponent_th_61_Template, 2, 0, "th", 26)(62, PatientsComponent_td_62_Template, 21, 1, "td", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, PatientsComponent_tr_63_Template, 1, 0, "tr", 30)(64, PatientsComponent_tr_64_Template, 1, 0, "tr", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-paginator", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PatientsComponent_div_66_Template, 96, 13, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.filteredDataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPatient !== null || ctx.isAddMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortHeader, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChip, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBarModule],
      styles: [".patients-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 300;\n  color: #1976d2;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n}\n.patients-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin: 0;\n}\n.patients-container[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n.patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1976d2;\n  font-weight: 500;\n}\n.patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e0e0e0;\n  background: #f8f9fa;\n  border-radius: 0 0 12px 12px;\n}\n.patients-container[_ngcontent-%COMP%]   .mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.patients-container[_ngcontent-%COMP%]   .mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.patients-container[_ngcontent-%COMP%]   .mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.patients-container[_ngcontent-%COMP%]   .mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem;\n  vertical-align: middle;\n}\n.patients-container[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.patients-container[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n@media (max-width: 768px) {\n  .patients-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .patients-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    max-width: 95vw;\n    max-height: 95vh;\n  }\n  .patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], .patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%], .patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .patients-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .patients-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .mat-mdc-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}\n@media (max-width: 480px) {\n  .patients-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .patients-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], .patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%], .patients-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .patients-container[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n\n  .mat-mdc-form-field .mat-mdc-form-field-wrapper {\n  padding-bottom: 0;\n}\n  .mat-mdc-chip {\n  font-size: 0.8rem;\n  height: 24px;\n}\n  .mat-mdc-chip .mat-mdc-chip-content {\n  padding: 0 8px;\n}\n  .mat-mdc-paginator {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnRzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQ2Fwc3RvbmUlMjBwcm9qZWN0XFxob3NwaXRhbC1tYW5hZ2VtZW50LWZyb250ZW5kXFxzcmNcXGFwcFxcY29tcG9uZW50c1xccGF0aWVudHNcXHBhdGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0ROO0FESUk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDRk47QURPSTtFQUNFLGlCQUFBO0FDTE47QURVRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDUko7QURVSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7QUNSTjtBRFVNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNSUjtBRFVRO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1JWO0FEWU07RUFDRSxlQUFBO0FDVlI7QURZUTtFQUNFLG1CQUFBO0FDVlY7QURZVTtFQUNFLGdCQUFBO0FDVlo7QURlTTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDYlI7QURvQkk7RUFDRSxtQkFBQTtBQ2xCTjtBRG9CTTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ2xCUjtBRHVCTTtFQUNFLG1CQUFBO0FDckJSO0FEd0JNO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ3RCUjtBRDRCRTtFQUNFLG1CQUFBO0VBQ0EseUNBQUE7QUMxQko7QUQ0Qkk7RUFDRSxlQUFBO0FDMUJOO0FEK0JFO0VBRUk7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7RUM5Qk47RURpQ0k7SUFDRSxlQUFBO0VDL0JOO0VEbUNFO0lBQ0UsZUFBQTtFQ2pDSjtFRG1DSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQ2pDTjtFRG1DTTs7O0lBR0UsYUFBQTtFQ2pDUjtFRHNDRTtJQUNFLGdCQUFBO0VDcENKO0VEc0NJO0lBQ0UsZ0JBQUE7RUNwQ047QUFDRjtBRHdDRTtFQUVJO0lBQ0UsaUJBQUE7RUN2Q047RUQwQ0k7SUFDRSxpQkFBQTtFQ3hDTjtFRDhDTTs7O0lBR0UsZ0JBQUE7RUM1Q1I7RURrREk7SUFDRSxhQUFBO0VDaEROO0FBQ0Y7O0FEd0RJO0VBQ0UsaUJBQUE7QUNyRE47QUR5REU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUN2REo7QUR5REk7RUFDRSxjQUFBO0FDdkROO0FEMkRFO0VBQ0UsdUJBQUE7QUN6REoiLCJmaWxlIjoicGF0aWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF0aWVudHMtY29udGFpbmVyIHtcclxuICAuaGVhZGVyLXNlY3Rpb24ge1xyXG4gICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhZ2Utc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYXRpZW50LW5hbWUge1xyXG4gICAgLnRleHQtbXV0ZWQge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1vZGFsIFN0eWxlc1xyXG4gIC5tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBcclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgIFxyXG4gICAgICAubW9kYWwtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgICAgICBcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5tb2RhbC1mb290ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVGFibGUgU3R5bGVzXHJcbiAgLm1hdC1tZGMtdGFibGUge1xyXG4gICAgLm1hdC1tZGMtaGVhZGVyLXJvdyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgIFxyXG4gICAgICAubWF0LW1kYy1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LW1kYy1yb3cge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubWF0LW1kYy1jZWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTZWFyY2ggYW5kIEZpbHRlciBTZWN0aW9uXHJcbiAgLm1hdC1tZGMtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBcclxuICAgIC5tYXQtbWRjLWNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlc3BvbnNpdmUgRGVzaWduXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaGVhZGVyLXNlY3Rpb24ge1xyXG4gICAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wYWdlLXN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1vZGFsIHtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBcclxuICAgICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIG1heC13aWR0aDogOTV2dztcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5NXZoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5tb2RhbC1oZWFkZXIsXHJcbiAgICAgICAgLm1vZGFsLWJvZHksXHJcbiAgICAgICAgLm1vZGFsLWZvb3RlciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgIFxyXG4gICAgICAubWF0LW1kYy10YWJsZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuaGVhZGVyLXNlY3Rpb24ge1xyXG4gICAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wYWdlLXN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgLm1vZGFsLWhlYWRlcixcclxuICAgICAgICAubW9kYWwtYm9keSxcclxuICAgICAgICAubW9kYWwtZm9vdGVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtbWRjLWNhcmQge1xyXG4gICAgICAubWF0LW1kYy1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE1hdGVyaWFsIERlc2lnbiBPdmVycmlkZXNcclxuOjpuZy1kZWVwIHtcclxuICAubWF0LW1kYy1mb3JtLWZpZWxkIHtcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubWF0LW1kYy1jaGlwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgXHJcbiAgICAubWF0LW1kYy1jaGlwLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1hdC1tZGMtcGFnaW5hdG9yIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuIiwiLnBhdGllbnRzLWNvbnRhaW5lciAuaGVhZGVyLXNlY3Rpb24gLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYXRpZW50cy1jb250YWluZXIgLmhlYWRlci1zZWN0aW9uIC5wYWdlLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW46IDA7XG59XG4ucGF0aWVudHMtY29udGFpbmVyIC5wYXRpZW50LW5hbWUgLnRleHQtbXV0ZWQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ucGF0aWVudHMtY29udGFpbmVyIC5tb2RhbCAubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbn1cbi5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1oZWFkZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG4ucGF0aWVudHMtY29udGFpbmVyIC5tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAucm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5yb3c6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGF0aWVudHMtY29udGFpbmVyIC5tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubWF0LW1kYy10YWJsZSAubWF0LW1kYy1oZWFkZXItcm93IHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cbi5wYXRpZW50cy1jb250YWluZXIgLm1hdC1tZGMtdGFibGUgLm1hdC1tZGMtaGVhZGVyLXJvdyAubWF0LW1kYy1oZWFkZXItY2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubWF0LW1kYy10YWJsZSAubWF0LW1kYy1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubWF0LW1kYy10YWJsZSAubWF0LW1kYy1yb3cgLm1hdC1tZGMtY2VsbCB7XG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubWF0LW1kYy1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ucGF0aWVudHMtY29udGFpbmVyIC5tYXQtbWRjLWNhcmQgLm1hdC1tZGMtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYXRpZW50cy1jb250YWluZXIgLmhlYWRlci1zZWN0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgfVxuICAucGF0aWVudHMtY29udGFpbmVyIC5oZWFkZXItc2VjdGlvbiAucGFnZS1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIC5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbiAgLnBhdGllbnRzLWNvbnRhaW5lciAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogOTV2dztcbiAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICB9XG4gIC5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1oZWFkZXIsXG4gIC5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5LFxuICAucGF0aWVudHMtY29udGFpbmVyIC5tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC5wYXRpZW50cy1jb250YWluZXIgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgLnBhdGllbnRzLWNvbnRhaW5lciAudGFibGUtcmVzcG9uc2l2ZSAubWF0LW1kYy10YWJsZSB7XG4gICAgbWluLXdpZHRoOiA4MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5wYXRpZW50cy1jb250YWluZXIgLmhlYWRlci1zZWN0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAucGF0aWVudHMtY29udGFpbmVyIC5oZWFkZXItc2VjdGlvbiAucGFnZS1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgLnBhdGllbnRzLWNvbnRhaW5lciAubW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlcixcbiAgLnBhdGllbnRzLWNvbnRhaW5lciAubW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHksXG4gIC5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gIH1cbiAgLnBhdGllbnRzLWNvbnRhaW5lciAubWF0LW1kYy1jYXJkIC5tYXQtbWRjLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxufVxuXG46Om5nLWRlZXAgLm1hdC1tZGMtZm9ybS1maWVsZCAubWF0LW1kYy1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbjo6bmctZGVlcCAubWF0LW1kYy1jaGlwIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGhlaWdodDogMjRweDtcbn1cbjo6bmctZGVlcCAubWF0LW1kYy1jaGlwIC5tYXQtbWRjLWNoaXAtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtbWRjLXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL0NhcHN0b25lJTIwcHJvamVjdC9ob3NwaXRhbC1tYW5hZ2VtZW50LWZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNETjtBRElJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0ZOO0FET0k7RUFDRSxpQkFBQTtBQ0xOO0FEVUU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ1JKO0FEVUk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0FDUk47QURVTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDUlI7QURVUTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNSVjtBRFlNO0VBQ0UsZUFBQTtBQ1ZSO0FEWVE7RUFDRSxtQkFBQTtBQ1ZWO0FEWVU7RUFDRSxnQkFBQTtBQ1ZaO0FEZU07RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ2JSO0FEb0JJO0VBQ0UsbUJBQUE7QUNsQk47QURvQk07RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNsQlI7QUR1Qk07RUFDRSxtQkFBQTtBQ3JCUjtBRHdCTTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUN0QlI7QUQ0QkU7RUFDRSxtQkFBQTtFQUNBLHlDQUFBO0FDMUJKO0FENEJJO0VBQ0UsZUFBQTtBQzFCTjtBRCtCRTtFQUVJO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VDOUJOO0VEaUNJO0lBQ0UsZUFBQTtFQy9CTjtFRG1DRTtJQUNFLGVBQUE7RUNqQ0o7RURtQ0k7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUNqQ047RURtQ007OztJQUdFLGFBQUE7RUNqQ1I7RURzQ0U7SUFDRSxnQkFBQTtFQ3BDSjtFRHNDSTtJQUNFLGdCQUFBO0VDcENOO0FBQ0Y7QUR3Q0U7RUFFSTtJQUNFLGlCQUFBO0VDdkNOO0VEMENJO0lBQ0UsaUJBQUE7RUN4Q047RUQ4Q007OztJQUdFLGdCQUFBO0VDNUNSO0VEa0RJO0lBQ0UsYUFBQTtFQ2hETjtBQUNGOztBRHdESTtFQUNFLGlCQUFBO0FDckROO0FEeURFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDdkRKO0FEeURJO0VBQ0UsY0FBQTtBQ3ZETjtBRDJERTtFQUNFLHVCQUFBO0FDekRKO0FEQ0EsNDZZQUE0NlkiLCJzb3VyY2VzQ29udGVudCI6WyIucGF0aWVudHMtY29udGFpbmVyIHtcclxuICAuaGVhZGVyLXNlY3Rpb24ge1xyXG4gICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhZ2Utc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYXRpZW50LW5hbWUge1xyXG4gICAgLnRleHQtbXV0ZWQge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1vZGFsIFN0eWxlc1xyXG4gIC5tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBcclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgIFxyXG4gICAgICAubW9kYWwtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgICAgICBcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5tb2RhbC1mb290ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVGFibGUgU3R5bGVzXHJcbiAgLm1hdC1tZGMtdGFibGUge1xyXG4gICAgLm1hdC1tZGMtaGVhZGVyLXJvdyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgIFxyXG4gICAgICAubWF0LW1kYy1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LW1kYy1yb3cge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubWF0LW1kYy1jZWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTZWFyY2ggYW5kIEZpbHRlciBTZWN0aW9uXHJcbiAgLm1hdC1tZGMtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBcclxuICAgIC5tYXQtbWRjLWNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlc3BvbnNpdmUgRGVzaWduXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaGVhZGVyLXNlY3Rpb24ge1xyXG4gICAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wYWdlLXN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1vZGFsIHtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBcclxuICAgICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIG1heC13aWR0aDogOTV2dztcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5NXZoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5tb2RhbC1oZWFkZXIsXHJcbiAgICAgICAgLm1vZGFsLWJvZHksXHJcbiAgICAgICAgLm1vZGFsLWZvb3RlciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgIFxyXG4gICAgICAubWF0LW1kYy10YWJsZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuaGVhZGVyLXNlY3Rpb24ge1xyXG4gICAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wYWdlLXN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgLm1vZGFsLWhlYWRlcixcclxuICAgICAgICAubW9kYWwtYm9keSxcclxuICAgICAgICAubW9kYWwtZm9vdGVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtbWRjLWNhcmQge1xyXG4gICAgICAubWF0LW1kYy1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE1hdGVyaWFsIERlc2lnbiBPdmVycmlkZXNcclxuOjpuZy1kZWVwIHtcclxuICAubWF0LW1kYy1mb3JtLWZpZWxkIHtcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubWF0LW1kYy1jaGlwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgXHJcbiAgICAubWF0LW1kYy1jaGlwLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1hdC1tZGMtcGFnaW5hdG9yIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuIiwiLnBhdGllbnRzLWNvbnRhaW5lciAuaGVhZGVyLXNlY3Rpb24gLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYXRpZW50cy1jb250YWluZXIgLmhlYWRlci1zZWN0aW9uIC5wYWdlLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW46IDA7XG59XG4ucGF0aWVudHMtY29udGFpbmVyIC5wYXRpZW50LW5hbWUgLnRleHQtbXV0ZWQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ucGF0aWVudHMtY29udGFpbmVyIC5tb2RhbCAubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbn1cbi5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1oZWFkZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG4ucGF0aWVudHMtY29udGFpbmVyIC5tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAucm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5yb3c6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGF0aWVudHMtY29udGFpbmVyIC5tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubWF0LW1kYy10YWJsZSAubWF0LW1kYy1oZWFkZXItcm93IHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cbi5wYXRpZW50cy1jb250YWluZXIgLm1hdC1tZGMtdGFibGUgLm1hdC1tZGMtaGVhZGVyLXJvdyAubWF0LW1kYy1oZWFkZXItY2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubWF0LW1kYy10YWJsZSAubWF0LW1kYy1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubWF0LW1kYy10YWJsZSAubWF0LW1kYy1yb3cgLm1hdC1tZGMtY2VsbCB7XG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnBhdGllbnRzLWNvbnRhaW5lciAubWF0LW1kYy1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ucGF0aWVudHMtY29udGFpbmVyIC5tYXQtbWRjLWNhcmQgLm1hdC1tZGMtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYXRpZW50cy1jb250YWluZXIgLmhlYWRlci1zZWN0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgfVxuICAucGF0aWVudHMtY29udGFpbmVyIC5oZWFkZXItc2VjdGlvbiAucGFnZS1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIC5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbiAgLnBhdGllbnRzLWNvbnRhaW5lciAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogOTV2dztcbiAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICB9XG4gIC5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1oZWFkZXIsXG4gIC5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5LFxuICAucGF0aWVudHMtY29udGFpbmVyIC5tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC5wYXRpZW50cy1jb250YWluZXIgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgLnBhdGllbnRzLWNvbnRhaW5lciAudGFibGUtcmVzcG9uc2l2ZSAubWF0LW1kYy10YWJsZSB7XG4gICAgbWluLXdpZHRoOiA4MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5wYXRpZW50cy1jb250YWluZXIgLmhlYWRlci1zZWN0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAucGF0aWVudHMtY29udGFpbmVyIC5oZWFkZXItc2VjdGlvbiAucGFnZS1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgLnBhdGllbnRzLWNvbnRhaW5lciAubW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlcixcbiAgLnBhdGllbnRzLWNvbnRhaW5lciAubW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHksXG4gIC5wYXRpZW50cy1jb250YWluZXIgLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gIH1cbiAgLnBhdGllbnRzLWNvbnRhaW5lciAubWF0LW1kYy1jYXJkIC5tYXQtbWRjLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxufVxuXG46Om5nLWRlZXAgLm1hdC1tZGMtZm9ybS1maWVsZCAubWF0LW1kYy1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbjo6bmctZGVlcCAubWF0LW1kYy1jaGlwIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGhlaWdodDogMjRweDtcbn1cbjo6bmctZGVlcCAubWF0LW1kYy1jaGlwIC5tYXQtbWRjLWNoaXAtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtbWRjLXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3482:
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/dialog.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkDialogContainer: () => (/* binding */ CdkDialogContainer),
/* harmony export */   DEFAULT_DIALOG_CONFIG: () => (/* binding */ DEFAULT_DIALOG_CONFIG),
/* harmony export */   DIALOG_DATA: () => (/* binding */ DIALOG_DATA),
/* harmony export */   DIALOG_SCROLL_STRATEGY: () => (/* binding */ DIALOG_SCROLL_STRATEGY),
/* harmony export */   DIALOG_SCROLL_STRATEGY_PROVIDER: () => (/* binding */ DIALOG_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY: () => (/* binding */ DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   DialogConfig: () => (/* binding */ DialogConfig),
/* harmony export */   DialogModule: () => (/* binding */ DialogModule),
/* harmony export */   DialogRef: () => (/* binding */ DialogRef),
/* harmony export */   throwDialogContentAlreadyAttachedError: () => (/* binding */ throwDialogContentAlreadyAttachedError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 4879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 137);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3037);














/** Configuration for opening a modal dialog. */
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {}
class DialogConfig {
  constructor() {
    /** The ARIA role of the dialog element. */
    this.role = 'dialog';
    /** Optional CSS class or classes applied to the overlay panel. */
    this.panelClass = '';
    /** Whether the dialog has a backdrop. */
    this.hasBackdrop = true;
    /** Optional CSS class or classes applied to the overlay backdrop. */
    this.backdropClass = '';
    /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
    this.disableClose = false;
    /** Width of the dialog. */
    this.width = '';
    /** Height of the dialog. */
    this.height = '';
    /** Data being injected into the child component. */
    this.data = null;
    /** ID of the element that describes the dialog. */
    this.ariaDescribedBy = null;
    /** ID of the element that labels the dialog. */
    this.ariaLabelledBy = null;
    /** Dialog label applied via `aria-label` */
    this.ariaLabel = null;
    /** Whether this is a modal dialog. Used to set the `aria-modal` attribute. */
    this.ariaModal = true;
    /**
     * Where the dialog should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    this.autoFocus = 'first-tabbable';
    /**
     * Whether the dialog should restore focus to the previously-focused element upon closing.
     * Has the following behavior based on the type that is passed in:
     * - `boolean` - when true, will return focus to the element that was focused before the dialog
     *    was opened, otherwise won't restore focus at all.
     * - `string` - focus will be restored to the first element that matches the CSS selector.
     * - `HTMLElement` - focus will be restored to the specific element.
     */
    this.restoreFocus = true;
    /**
     * Whether the dialog should close when the user navigates backwards or forwards through browser
     * history. This does not apply to navigation via anchor element unless using URL-hash based
     * routing (`HashLocationStrategy` in the Angular router).
     */
    this.closeOnNavigation = true;
    /**
     * Whether the dialog should close when the dialog service is destroyed. This is useful if
     * another service is wrapping the dialog and is managing the destruction instead.
     */
    this.closeOnDestroy = true;
    /**
     * Whether the dialog should close when the underlying overlay is detached. This is useful if
     * another service is wrapping the dialog and is managing the destruction instead. E.g. an
     * external detachment can happen as a result of a scroll strategy triggering it or when the
     * browser location changes.
     */
    this.closeOnOverlayDetachments = true;
  }
}
function throwDialogContentAlreadyAttachedError() {
  throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Internal component that wraps user-provided dialog content.
 * @docs-private
 */
class CdkDialogContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.BasePortalOutlet {
  constructor(_elementRef, _focusTrapFactory, _document, _config, _interactivityChecker, _ngZone, _overlayRef, _focusMonitor) {
    super();
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._config = _config;
    this._interactivityChecker = _interactivityChecker;
    this._ngZone = _ngZone;
    this._overlayRef = _overlayRef;
    this._focusMonitor = _focusMonitor;
    this._platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
    /** The class that traps and manages focus within the dialog. */
    this._focusTrap = null;
    /** Element that was focused before the dialog was opened. Save this to restore upon close. */
    this._elementFocusedBeforeDialogWasOpened = null;
    /**
     * Type of interaction that led to the dialog being closed. This is used to determine
     * whether the focus style will be applied when returning focus to its original location
     * after the dialog is closed.
     */
    this._closeInteractionType = null;
    /**
     * Queue of the IDs of the dialog's label element, based on their definition order. The first
     * ID will be used as the `aria-labelledby` value. We use a queue here to handle the case
     * where there are two or more titles in the DOM at a time and the first one is destroyed while
     * the rest are present.
     */
    this._ariaLabelledByQueue = [];
    this._changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    /**
     * Attaches a DOM portal to the dialog container.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */
    this.attachDomPortal = portal => {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwDialogContentAlreadyAttachedError();
      }
      const result = this._portalOutlet.attachDomPortal(portal);
      this._contentAttached();
      return result;
    };
    this._document = _document;
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._handleBackdropClicks();
    this._captureInitialFocus();
  }
  /**
   * Can be used by child classes to customize the initial focus
   * capturing behavior (e.g. if it's tied to an animation).
   */
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._restoreFocus();
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
  /** Captures focus if it isn't already inside the dialog. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      // The tabindex attribute should be removed to avoid navigating to that element again
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          element.removeEventListener('blur', callback);
          element.removeEventListener('mousedown', callback);
          element.removeAttribute('tabindex');
        };
        element.addEventListener('blur', callback);
        element.addEventListener('mousedown', callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus() {
    const element = this._elementRef.nativeElement;
    // If were to attempt to focus immediately, then the content of the dialog would not yet be
    // ready in instances where change detection has to run first. To deal with this, we simply
    // wait for the microtask queue to be empty when setting focus when autoFocus isn't set to
    // dialog. If the element inside the dialog can't be focused, then the container is focused
    // so the user can't tab into other elements behind it.
    switch (this._config.autoFocus) {
      case false:
      case 'dialog':
        // Ensure that focus is on the dialog container. It's possible that a different
        // component tried to move focus while the open animation was running. See:
        // https://github.com/angular/components/issues/16215. Note that we only want to do this
        // if the focus isn't inside the dialog already, because it's possible that the consumer
        // turned off `autoFocus` in order to move focus themselves.
        if (!this._containsFocus()) {
          element.focus();
        }
        break;
      case true:
      case 'first-tabbable':
        this._focusTrap?.focusInitialElementWhenReady().then(focusedSuccessfully => {
          // If we weren't able to find a focusable element in the dialog, then focus the dialog
          // container instead.
          if (!focusedSuccessfully) {
            this._focusDialogContainer();
          }
        });
        break;
      case 'first-heading':
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this._focusByCssSelector(this._config.autoFocus);
        break;
    }
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === 'string') {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === 'boolean') {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    // We need the extra check, because IE can set the `activeElement` to null in some cases.
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === 'function') {
      const activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
      const element = this._elementRef.nativeElement;
      // Make sure that focus is still inside the dialog or is on the body (usually because a
      // non-focusable element like the backdrop was clicked) before moving it. It's possible that
      // the consumer moved it themselves before the animation was done, in which case we shouldn't
      // do anything.
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer() {
    // Note that there is no focus method when rendering on the server.
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus();
    }
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
    return element === activeElement || element.contains(activeElement);
  }
  /** Sets up the focus trap. */
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      // Save the previously focused element. This element will be re-focused
      // when the dialog closes.
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
      }
    }
  }
  /** Sets up the listener that handles clicks on the dialog backdrop. */
  _handleBackdropClicks() {
    // Clicking on the backdrop will move focus out of dialog.
    // Recapture it if closing via the backdrop is disabled.
    this._overlayRef.backdropClick().subscribe(() => {
      if (this._config.disableClose) {
        this._recaptureFocus();
      }
    });
  }
  static {
    this.ɵfac = function CdkDialogContainer_Factory(t) {
      return new (t || CdkDialogContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CdkDialogContainer,
      selectors: [["cdk-dialog-container"]],
      viewQuery: function CdkDialogContainer_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.CdkPortalOutlet, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
      hostVars: 6,
      hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkPortalOutlet", ""]],
      template: function CdkDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.CdkPortalOutlet],
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],
      encapsulation: 2
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkDialogContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'cdk-dialog-container',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.CdkPortalOutlet],
      host: {
        'class': 'cdk-dialog-container',
        'tabindex': '-1',
        '[attr.id]': '_config.id || null',
        '[attr.role]': '_config.role',
        '[attr.aria-modal]': '_config.ariaModal',
        '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledByQueue[0]',
        '[attr.aria-label]': '_config.ariaLabel',
        '[attr.aria-describedby]': '_config.ariaDescribedBy || null'
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusTrapFactory
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [DialogConfig]
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.InteractivityChecker
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayRef
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor
  }], {
    _portalOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();

/**
 * Reference to a dialog opened via the Dialog service.
 */
class DialogRef {
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    /** Emits when the dialog has been closed. */
    this.closed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id; // By the time the dialog is created we are guaranteed to have an ID.
    this.keydownEvents.subscribe(event => {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE && !this.disableClose && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) {
        event.preventDefault();
        this.close(undefined, {
          focusOrigin: 'keyboard'
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose) {
        this.close(undefined, {
          focusOrigin: 'mouse'
        });
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      // Check specifically for `false`, because we want `undefined` to be treated like `true`.
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  /**
   * Close the dialog.
   * @param result Optional result to return to the dialog opener.
   * @param options Additional options to customize the closing behavior.
   */
  close(result, options) {
    if (this.containerInstance) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || 'program';
      // Drop the detach subscription first since it can be triggered by the
      // `dispose` call and override the result of this closing sequence.
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  /** Updates the position of the dialog based on the current position strategy. */
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = '', height = '') {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
}

/** Injection token for the Dialog's ScrollStrategy. */
const DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('DialogScrollStrategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
/** Injection token for the Dialog's Data. */
const DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('DialogData');
/** Injection token that can be used to provide default options for the dialog module. */
const DEFAULT_DIALOG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('DefaultDialogConfig');
/**
 * @docs-private
 * @deprecated No longer used. To be removed.
 * @breaking-change 19.0.0
 */
function DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.block();
}
/**
 * @docs-private
 * @deprecated No longer used. To be removed.
 * @breaking-change 19.0.0
 */
const DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: DIALOG_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay],
  useFactory: DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};

/** Unique id for the created dialog. */
let uniqueId = 0;
class Dialog {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  constructor(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy) {
    this._overlay = _overlay;
    this._injector = _injector;
    this._defaultOptions = _defaultOptions;
    this._parentDialog = _parentDialog;
    this._overlayContainer = _overlayContainer;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._ariaHiddenElements = new Map();
    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     */
    this.afterAllClosed = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.defer)(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(undefined)));
    this._scrollStrategy = scrollStrategy;
  }
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = {
      ...defaults,
      ...config
    };
    config.id = config.id || `cdk-dialog-${uniqueId++}`;
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = this._overlay.create(overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    // If this is the first dialog that we're opening, hide all the non-overlay content.
    if (!this.openDialogs.length) {
      this._hideNonDialogContentFromAssistiveTechnology();
    }
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    reverseForEach(this.openDialogs, dialog => dialog.close());
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find(dialog => dialog.id === id);
  }
  ngOnDestroy() {
    // Make one pass over all the dialogs that need to be untracked, but should not be closed. We
    // want to stop tracking the open dialog even if it hasn't been closed, because the tracking
    // determines when `aria-hidden` is removed from elements outside the dialog.
    reverseForEach(this._openDialogsAtThisLevel, dialog => {
      // Check for `false` specifically since we want `undefined` to be interpreted as `true`.
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    // Make a second pass and close the remaining dialogs. We do this second pass in order to
    // correctly dispatch the `afterAllClosed` event in case we have a mixed array of dialogs
    // that should be closed and dialogs that should not.
    reverseForEach(this._openDialogsAtThisLevel, dialog => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param config The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(config) {
    const state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayConfig({
      positionStrategy: config.positionStrategy || this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation
    });
    if (config.backdropClass) {
      state.backdropClass = config.backdropClass;
    }
    return state;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachContainer(overlay, dialogRef, config) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === 'function') {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.ComponentPortal(containerType, config.viewContainerRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector.create({
      parent: userInjector || this._injector,
      providers
    }), config.componentFactoryResolver);
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param config Configuration used to open the dialog.
   */
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, undefined);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = {
          ...context,
          ...(typeof config.templateContext === 'function' ? config.templateContext() : config.templateContext)
        };
      }
      dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector, config.componentFactoryResolver));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
   * dialog injector, if the user didn't provide a custom one.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === 'function') {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
        useValue: {
          value: config.direction,
          change: (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)()
        }
      });
    }
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   * @param emitEvent Whether to emit an event if this is the last dialog.
   */
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      // If all the dialogs were closed, remove/restore the `aria-hidden`
      // to a the siblings and emit to the `afterAllClosed` stream.
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute('aria-hidden', previousValue);
          } else {
            element.removeAttribute('aria-hidden');
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  /** Hides all of the content that isn't an overlay from assistive technology. */
  _hideNonDialogContentFromAssistiveTechnology() {
    const overlayContainer = this._overlayContainer.getContainerElement();
    // Ensure that the overlay container is attached to the DOM.
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
          sibling.setAttribute('aria-hidden', 'true');
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  static {
    this.ɵfac = function Dialog_Factory(t) {
      return new (t || Dialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DEFAULT_DIALOG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](Dialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DIALOG_SCROLL_STRATEGY));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Dialog,
      factory: Dialog.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Dialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
  }, {
    type: DialogConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [DEFAULT_DIALOG_CONFIG]
    }]
  }, {
    type: Dialog,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
    }]
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayContainer
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [DIALOG_SCROLL_STRATEGY]
    }]
  }], null);
})();
/**
 * Executes a callback against all elements in an array while iterating in reverse.
 * Useful if the array is being modified as it is being iterated.
 */
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
class DialogModule {
  static {
    this.ɵfac = function DialogModule_Factory(t) {
      return new (t || DialogModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DialogModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [Dialog],
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.PortalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule,
      // Re-export the PortalModule so that people extending the `CdkDialogContainer`
      // don't have to remember to import it or be faced with an unhelpful error.
      _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.PortalModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.PortalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, CdkDialogContainer],
      exports: [
      // Re-export the PortalModule so that people extending the `CdkDialogContainer`
      // don't have to remember to import it or be faced with an unhelpful error.
      _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.PortalModule, CdkDialogContainer],
      providers: [Dialog]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2587:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/dialog.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_DIALOG_DATA: () => (/* binding */ MAT_DIALOG_DATA),
/* harmony export */   MAT_DIALOG_DEFAULT_OPTIONS: () => (/* binding */ MAT_DIALOG_DEFAULT_OPTIONS),
/* harmony export */   MAT_DIALOG_SCROLL_STRATEGY: () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY),
/* harmony export */   MAT_DIALOG_SCROLL_STRATEGY_PROVIDER: () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY: () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   MatDialog: () => (/* binding */ MatDialog),
/* harmony export */   MatDialogActions: () => (/* binding */ MatDialogActions),
/* harmony export */   MatDialogClose: () => (/* binding */ MatDialogClose),
/* harmony export */   MatDialogConfig: () => (/* binding */ MatDialogConfig),
/* harmony export */   MatDialogContainer: () => (/* binding */ MatDialogContainer),
/* harmony export */   MatDialogContent: () => (/* binding */ MatDialogContent),
/* harmony export */   MatDialogModule: () => (/* binding */ MatDialogModule),
/* harmony export */   MatDialogRef: () => (/* binding */ MatDialogRef),
/* harmony export */   MatDialogState: () => (/* binding */ MatDialogState),
/* harmony export */   MatDialogTitle: () => (/* binding */ MatDialogTitle),
/* harmony export */   _closeDialogVia: () => (/* binding */ _closeDialogVia),
/* harmony export */   _defaultParams: () => (/* binding */ _defaultParams),
/* harmony export */   matDialogAnimations: () => (/* binding */ matDialogAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/dialog */ 3482);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 137);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ 4879);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 7172);
















/**
 * Configuration for opening a modal dialog with the MatDialog service.
 */
function MatDialogContainer_ng_template_2_Template(rf, ctx) {}
class MatDialogConfig {
  constructor() {
    /** The ARIA role of the dialog element. */
    this.role = 'dialog';
    /** Custom class for the overlay pane. */
    this.panelClass = '';
    /** Whether the dialog has a backdrop. */
    this.hasBackdrop = true;
    /** Custom class for the backdrop. */
    this.backdropClass = '';
    /** Whether the user can use escape or clicking on the backdrop to close the modal. */
    this.disableClose = false;
    /** Width of the dialog. */
    this.width = '';
    /** Height of the dialog. */
    this.height = '';
    /** Data being injected into the child component. */
    this.data = null;
    /** ID of the element that describes the dialog. */
    this.ariaDescribedBy = null;
    /** ID of the element that labels the dialog. */
    this.ariaLabelledBy = null;
    /** Aria label to assign to the dialog element. */
    this.ariaLabel = null;
    /** Whether this is a modal dialog. Used to set the `aria-modal` attribute. */
    this.ariaModal = true;
    /**
     * Where the dialog should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    this.autoFocus = 'first-tabbable';
    /**
     * Whether the dialog should restore focus to the
     * previously-focused element, after it's closed.
     */
    this.restoreFocus = true;
    /** Whether to wait for the opening animation to finish before trapping focus. */
    this.delayFocusTrap = true;
    /**
     * Whether the dialog should close when the user goes backwards/forwards in history.
     * Note that this usually doesn't include clicking on links (unless the user is using
     * the `HashLocationStrategy`).
     */
    this.closeOnNavigation = true;
    // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
  }
}

/** Class added when the dialog is open. */
const OPEN_CLASS = 'mdc-dialog--open';
/** Class added while the dialog is opening. */
const OPENING_CLASS = 'mdc-dialog--opening';
/** Class added while the dialog is closing. */
const CLOSING_CLASS = 'mdc-dialog--closing';
/** Duration of the opening animation in milliseconds. */
const OPEN_ANIMATION_DURATION = 150;
/** Duration of the closing animation in milliseconds. */
const CLOSE_ANIMATION_DURATION = 75;
class MatDialogContainer extends _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.CdkDialogContainer {
  constructor(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef, _animationMode, focusMonitor) {
    super(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef, focusMonitor);
    this._animationMode = _animationMode;
    /** Emits when an animation state changes. */
    this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Whether animations are enabled. */
    this._animationsEnabled = this._animationMode !== 'NoopAnimations';
    /** Number of actions projected in the dialog. */
    this._actionSectionCount = 0;
    /** Host element of the dialog container component. */
    this._hostElement = this._elementRef.nativeElement;
    /** Duration of the dialog open animation. */
    this._enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
    /** Duration of the dialog close animation. */
    this._exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
    /** Current timer for dialog animations. */
    this._animationTimer = null;
    /**
     * Completes the dialog open by clearing potential animation classes, trapping
     * focus and emitting an opened event.
     */
    this._finishDialogOpen = () => {
      this._clearAnimationClasses();
      this._openAnimationDone(this._enterAnimationDuration);
    };
    /**
     * Completes the dialog close by clearing potential animation classes, restoring
     * focus and emitting a closed event.
     */
    this._finishDialogClose = () => {
      this._clearAnimationClasses();
      this._animationStateChanged.emit({
        state: 'closed',
        totalTime: this._exitAnimationDuration
      });
    };
  }
  _contentAttached() {
    // Delegate to the original dialog-container initialization (i.e. saving the
    // previous element, setting up the focus trap and moving focus to the container).
    super._contentAttached();
    // Note: Usually we would be able to use the MDC dialog foundation here to handle
    // the dialog animation for us, but there are a few reasons why we just leverage
    // their styles and not use the runtime foundation code:
    //   1. Foundation does not allow us to disable animations.
    //   2. Foundation contains unnecessary features we don't need and aren't
    //      tree-shakeable. e.g. background scrim, keyboard event handlers for ESC button.
    //   3. Foundation uses unnecessary timers for animations to work around limitations
    //      in React's `setState` mechanism.
    //      https://github.com/material-components/material-components-web/pull/3682.
    this._startOpenAnimation();
  }
  /** Starts the dialog open animation if enabled. */
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: 'opening',
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
      // We need to give the `setProperty` call from above some time to be applied.
      // One would expect that the open class is added once the animation finished, but MDC
      // uses the open class in combination with the opening class to start the animation.
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      // Note: We could immediately finish the dialog opening here with noop animations,
      // but we defer until next tick so that consumers can subscribe to `afterOpened`.
      // Executing this immediately would mean that `afterOpened` emits synchronously
      // on `dialog.open` before the consumer had a change to subscribe to `afterOpened`.
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  /**
   * Starts the exit animation of the dialog if enabled. This method is
   * called by the dialog ref.
   */
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: 'closing',
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
      // We need to give the `setProperty` call from above some time to be applied.
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      // This subscription to the `OverlayRef#backdropClick` observable in the `DialogRef` is
      // set up before any user can subscribe to the backdrop click. The subscription triggers
      // the dialog close and this method synchronously. If we'd synchronously emit the `CLOSED`
      // animation state event if animations are disabled, the overlay would be disposed
      // immediately and all other subscriptions to `DialogRef#backdropClick` would be silently
      // skipped. We work around this by waiting with the dialog close until the next tick when
      // all subscriptions have been fired as expected. This is not an ideal solution, but
      // there doesn't seem to be any other good way. Alternatives that have been considered:
      //   1. Deferring `DialogRef.close`. This could be a breaking change due to a new microtask.
      //      Also this issue is specific to the MDC implementation where the dialog could
      //      technically be closed synchronously. In the non-MDC one, Angular animations are used
      //      and closing always takes at least a tick.
      //   2. Ensuring that user subscriptions to `backdropClick`, `keydownEvents` in the dialog
      //      ref are first. This would solve the issue, but has the risk of memory leaks and also
      //      doesn't solve the case where consumers call `DialogRef.close` in their subscriptions.
      // Based on the fact that this is specific to the MDC-based implementation of the dialog
      // animations, the defer is applied here.
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  /**
   * Updates the number action sections.
   * @param delta Increase/decrease in the number of sections.
   */
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  /** Clears all dialog animation classes. */
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    // Note that we want this timer to run inside the NgZone, because we want
    // the related events like `afterClosed` to be inside the zone as well.
    this._animationTimer = setTimeout(callback, duration);
  }
  /** Runs a callback in `requestAnimationFrame`, if available. */
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  /**
   * Callback for when the open dialog animation has finished. Intended to
   * be called by sub-classes that use different animation implementations.
   */
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: 'opened',
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    // When a component is passed into the dialog, the host element interrupts
    // the `display:flex` from affecting the dialog title, content, and
    // actions. To fix this, we make the component host `display: contents` by
    // marking its host with the `mat-mdc-dialog-component-host` class.
    //
    // Note that this problem does not exist when a template ref is used since
    // the title, contents, and actions are then nested directly under the
    // dialog surface.
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add('mat-mdc-dialog-component-host');
    return ref;
  }
  static {
    this.ɵfac = function MatDialogContainer_Factory(t) {
      return new (t || MatDialogContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatDialogContainer,
      selectors: [["mat-dialog-container"]],
      hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
      hostVars: 10,
      hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx._config.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 0,
      consts: [[1, "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
      template: function MatDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.CdkPortalOutlet],
      styles: [".mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],
      encapsulation: 2
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-dialog-container',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.CdkPortalOutlet],
      host: {
        'class': 'mat-mdc-dialog-container mdc-dialog',
        'tabindex': '-1',
        '[attr.aria-modal]': '_config.ariaModal',
        '[id]': '_config.id',
        '[attr.role]': '_config.role',
        '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledByQueue[0]',
        '[attr.aria-label]': '_config.ariaLabel',
        '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
        '[class._mat-animation-noopable]': '!_animationsEnabled',
        '[class.mat-mdc-dialog-container-with-actions]': '_actionSectionCount > 0'
      },
      template: "<div class=\"mdc-dialog__container\">\n  <div class=\"mat-mdc-dialog-surface mdc-dialog__surface\">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n",
      styles: [".mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusTrapFactory
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
    }]
  }, {
    type: MatDialogConfig
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.InteractivityChecker
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
  }], null);
})();
const TRANSITION_DURATION_PROPERTY = '--mat-dialog-transition-duration';
// TODO(mmalerba): Remove this function after animation durations are required
//  to be numbers.
/**
 * Converts a CSS time string to a number in ms. If the given time is already a
 * number, it is assumed to be in ms.
 */
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === 'number') {
    return time;
  }
  if (time.endsWith('ms')) {
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceNumberProperty)(time.substring(0, time.length - 2));
  }
  if (time.endsWith('s')) {
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceNumberProperty)(time.substring(0, time.length - 1)) * 1000;
  }
  if (time === '0') {
    return 0;
  }
  return null; // anything else is invalid.
}
var MatDialogState;
(function (MatDialogState) {
  MatDialogState[MatDialogState["OPEN"] = 0] = "OPEN";
  MatDialogState[MatDialogState["CLOSING"] = 1] = "CLOSING";
  MatDialogState[MatDialogState["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
/**
 * Reference to a dialog opened via the MatDialog service.
 */
class MatDialogRef {
  constructor(_ref, config, _containerInstance) {
    this._ref = _ref;
    this._containerInstance = _containerInstance;
    /** Subject for notifying the user that the dialog has finished opening. */
    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** Subject for notifying the user that the dialog has started closing. */
    this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** Current state of the dialog. */
    this._state = MatDialogState.OPEN;
    this.disableClose = config.disableClose;
    this.id = _ref.id;
    // Used to target panels specifically tied to dialogs.
    _ref.addPanelClass('mat-mdc-dialog-panel');
    // Emit when opening animation completes
    _containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event.state === 'opened'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    // Dispose overlay when closing animation is complete
    _containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event.state === 'closed'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.backdropClick(), this.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.ESCAPE && !this.disableClose && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.hasModifierKey)(event)))).subscribe(event => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === 'keydown' ? 'keyboard' : 'mouse');
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */
  close(dialogResult) {
    this._result = dialogResult;
    // Transition the backdrop in parallel to the dialog.
    this._containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event.state === 'closing'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(event => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      // The logic that disposes of the overlay depends on the exit animation completing, however
      // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
      // timeout which will clean everything up if the animation hasn't fired within the specified
      // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
      // vast majority of cases the timeout will have been cleared before it has the chance to fire.
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */
  afterClosed() {
    return this._ref.closed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */
  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = '', height = '') {
    this._ref.updateSize(width, height);
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */
  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
}
/**
 * Closes the dialog with the specified interaction type. This is currently not part of
 * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
 * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
 */
// TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}

/** Injection token that can be used to access the data that was passed in to a dialog. */
const MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MatMdcDialogData');
/** Injection token that can be used to specify default dialog options. */
const MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-mdc-dialog-default-options');
/** Injection token that determines the scroll handling while the dialog is open. */
const MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-mdc-dialog-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
/**
 * @docs-private
 * @deprecated No longer used. To be removed.
 * @breaking-change 19.0.0
 */
function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.block();
}
/**
 * @docs-private
 * @deprecated No longer used. To be removed.
 * @breaking-change 19.0.0
 */
const MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_DIALOG_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay],
  useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};
// Counter for unique dialog ids.
let uniqueId = 0;
/**
 * Service to open Material Design modal dialogs.
 */
class MatDialog {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  constructor(_overlay, injector,
  /**
   * @deprecated `_location` parameter to be removed.
   * @breaking-change 10.0.0
   */
  location, _defaultOptions, _scrollStrategy, _parentDialog,
  /**
   * @deprecated No longer used. To be removed.
   * @breaking-change 15.0.0
   */
  _overlayContainer,
  /**
   * @deprecated No longer used. To be removed.
   * @breaking-change 14.0.0
   */
  _animationMode) {
    this._overlay = _overlay;
    this._defaultOptions = _defaultOptions;
    this._scrollStrategy = _scrollStrategy;
    this._parentDialog = _parentDialog;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.dialogConfigClass = MatDialogConfig;
    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     */
    this.afterAllClosed = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.defer)(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(undefined)));
    this._dialog = injector.get(_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.Dialog);
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  open(componentOrTemplateRef, config) {
    let dialogRef;
    config = {
      ...(this._defaultOptions || new MatDialogConfig()),
      ...config
    };
    config.id = config.id || `mat-mdc-dialog-${uniqueId++}`;
    config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, {
      ...config,
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on destroy, because this service cleans up its open dialogs as well.
      // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
      // the dialogs immediately whereas we want it to wait for the animations to finish.
      closeOnDestroy: false,
      // Disable closing on detachments so that we can sync up the animation.
      // The Material dialog ref handles this manually.
      closeOnOverlayDetachments: false,
      container: {
        type: this._dialogContainerType,
        providers: () => [
        // Provide our config as the CDK config as well since it has the same interface as the
        // CDK one, but it contains the actual values passed in by the user for things like
        // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
        {
          provide: this.dialogConfigClass,
          useValue: config
        }, {
          provide: _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogConfig,
          useValue: config
        }]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
        dialogRef.updatePosition(config?.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];
      }
    });
    // This can't be assigned in the `providers` callback, because
    // the instance hasn't been assigned to the CDK ref yet.
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find(dialog => dialog.id === id);
  }
  ngOnDestroy() {
    // Only close the dialogs at this level on destroy
    // since the parent service may still be active.
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
  static {
    this.ɵfac = function MatDialog_Factory(t) {
      return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MatDialog,
      factory: MatDialog.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: MatDialogConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [MAT_DIALOG_DEFAULT_OPTIONS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [MAT_DIALOG_SCROLL_STRATEGY]
    }]
  }, {
    type: MatDialog,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
    }]
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayContainer
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
    }]
  }], null);
})();

/** Counter used to generate unique IDs for dialog elements. */
let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
class MatDialogClose {
  constructor(
  // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  dialogRef, _elementRef, _dialog) {
    this.dialogRef = dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    /** Default to "button" to prevents accidental form submits. */
    this.type = 'button';
  }
  ngOnInit() {
    if (!this.dialogRef) {
      // When this directive is included in a dialog via TemplateRef (rather than being
      // in a Component), the DialogRef isn't available via injection because embedded
      // views cannot be given a custom injector. Instead, we look up the DialogRef by
      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
      // be resolved at constructor time.
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    // Determinate the focus origin using the click event, because using the FocusMonitor will
    // result in incorrect origins. Most of the time, close buttons will be auto focused in the
    // dialog, and therefore clicking the button won't result in a focus change. This means that
    // the FocusMonitor won't detect any origin change, and will always output `program`.
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
  }
  static {
    this.ɵfac = function MatDialogClose_Factory(t) {
      return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatDialog));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatDialogClose,
      selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
      hostVars: 2,
      hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) {
            return ctx._onButtonClick($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
        }
      },
      inputs: {
        ariaLabel: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].None, "aria-label", "ariaLabel"],
        type: "type",
        dialogResult: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].None, "mat-dialog-close", "dialogResult"],
        _matDialogClose: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].None, "matDialogClose", "_matDialogClose"]
      },
      exportAs: ["matDialogClose"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogClose, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[mat-dialog-close], [matDialogClose]',
      exportAs: 'matDialogClose',
      standalone: true,
      host: {
        '(click)': '_onButtonClick($event)',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.type]': 'type'
      }
    }]
  }], () => [{
    type: MatDialogRef,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: MatDialog
  }], {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-label']
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dialogResult: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['mat-dialog-close']
    }],
    _matDialogClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matDialogClose']
    }]
  });
})();
class MatDialogLayoutSection {
  constructor(
  // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  _dialogRef, _elementRef, _dialog) {
    this._dialogRef = _dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    // Note: we null check because there are some internal
    // tests that are mocking out `MatDialogRef` incorrectly.
    const instance = this._dialogRef?._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
  static {
    this.ɵfac = function MatDialogLayoutSection_Factory(t) {
      return new (t || MatDialogLayoutSection)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatDialog));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatDialogLayoutSection,
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogLayoutSection, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      standalone: true
    }]
  }], () => [{
    type: MatDialogRef,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: MatDialog
  }], null);
})();
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
class MatDialogTitle extends MatDialogLayoutSection {
  constructor() {
    super(...arguments);
    this.id = `mat-mdc-dialog-title-${dialogElementUid++}`;
  }
  _onAdd() {
    // Note: we null check the queue, because there are some internal
    // tests that are mocking out `MatDialogRef` incorrectly.
    this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
  }
  _onRemove() {
    this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
  }
  static {
    this.ɵfac = /* @__PURE__ */(() => {
      let ɵMatDialogTitle_BaseFactory;
      return function MatDialogTitle_Factory(t) {
        return (ɵMatDialogTitle_BaseFactory || (ɵMatDialogTitle_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatDialogTitle)))(t || MatDialogTitle);
      };
    })();
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatDialogTitle,
      selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
      hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
      hostVars: 1,
      hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      exportAs: ["matDialogTitle"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[mat-dialog-title], [matDialogTitle]',
      exportAs: 'matDialogTitle',
      standalone: true,
      host: {
        'class': 'mat-mdc-dialog-title mdc-dialog__title',
        '[id]': 'id'
      }
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * Scrollable content container of a dialog.
 */
class MatDialogContent {
  static {
    this.ɵfac = function MatDialogContent_Factory(t) {
      return new (t || MatDialogContent)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatDialogContent,
      selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
      hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        'class': 'mat-mdc-dialog-content mdc-dialog__content'
      },
      standalone: true
    }]
  }], null, null);
})();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
class MatDialogActions extends MatDialogLayoutSection {
  _onAdd() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
  }
  _onRemove() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
  }
  static {
    this.ɵfac = /* @__PURE__ */(() => {
      let ɵMatDialogActions_BaseFactory;
      return function MatDialogActions_Factory(t) {
        return (ɵMatDialogActions_BaseFactory || (ɵMatDialogActions_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatDialogActions)))(t || MatDialogActions);
      };
    })();
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatDialogActions,
      selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
      hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
      hostVars: 6,
      hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
        }
      },
      inputs: {
        align: "align"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      standalone: true,
      host: {
        'class': 'mat-mdc-dialog-actions mdc-dialog__actions',
        '[class.mat-mdc-dialog-actions-align-start]': 'align === "start"',
        '[class.mat-mdc-dialog-actions-align-center]': 'align === "center"',
        '[class.mat-mdc-dialog-actions-align-end]': 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains('mat-mdc-dialog-container')) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find(dialog => dialog.id === parent.id) : null;
}
const DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
class MatDialogModule {
  static {
    this.ɵfac = function MatDialogModule_Factory(t) {
      return new (t || MatDialogModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatDialogModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [MatDialog],
      imports: [_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule, ...DIRECTIVES],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();

/**
 * Default parameters for the animation for backwards compatibility.
 * @docs-private
 */
const _defaultParams = {
  params: {
    enterAnimationDuration: '150ms',
    exitAnimationDuration: '75ms'
  }
};
/**
 * Animations used by MatDialog.
 * @docs-private
 */
const matDialogAnimations = {
  /** Animation that is applied on the dialog container by default. */
  dialogContainer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('dialogContainer', [
  // Note: The `enter` animation transitions to `transform: none`, because for some reason
  // specifying the transform explicitly, causes IE both to blur the dialog content and
  // decimate the animation performance. Leaving it as `none` solves both issues.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('void, exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
    opacity: 0,
    transform: 'scale(0.7)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
    transform: 'none'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('* => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
    transform: 'none',
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animateChild)(), {
    optional: true
  })]), _defaultParams), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('* => void, * => exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animateChild)(), {
    optional: true
  })]), _defaultParams)])
};

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4624:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/paginator.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_PAGINATOR_DEFAULT_OPTIONS: () => (/* binding */ MAT_PAGINATOR_DEFAULT_OPTIONS),
/* harmony export */   MAT_PAGINATOR_INTL_PROVIDER: () => (/* binding */ MAT_PAGINATOR_INTL_PROVIDER),
/* harmony export */   MAT_PAGINATOR_INTL_PROVIDER_FACTORY: () => (/* binding */ MAT_PAGINATOR_INTL_PROVIDER_FACTORY),
/* harmony export */   MatPaginator: () => (/* binding */ MatPaginator),
/* harmony export */   MatPaginatorIntl: () => (/* binding */ MatPaginatorIntl),
/* harmony export */   MatPaginatorModule: () => (/* binding */ MatPaginatorModule),
/* harmony export */   PageEvent: () => (/* binding */ PageEvent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6042);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 4950);









/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */
function MatPaginator_Conditional_2_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pageSizeOption_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pageSizeOption_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSizeOption_r3, " ");
  }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 13)(1, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._changePageSize($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, MatPaginator_Conditional_2_Conditional_3_For_3_Template, 2, 2, "mat-option", 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", ctx_r1._formFieldAppearance)("color", ctx_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.pageSize)("disabled", ctx_r1.disabled)("aria-labelledby", ctx_r1._pageSizeLabelId)("panelClass", ctx_r1.selectConfig.panelClass || "")("disableOptionCentering", ctx_r1.selectConfig.disableOptionCentering);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r1._displayedPageSizeOptions);
  }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pageSize);
  }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatPaginator_Conditional_2_Conditional_3_Template, 4, 7, "mat-form-field", 13)(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1._pageSizeLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1._intl.itemsPerPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](3, ctx_r1._displayedPageSizeOptions.length > 1 ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, ctx_r1._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.firstPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
  }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.lastPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1._intl.lastPageLabel)("matTooltipDisabled", ctx_r1._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._nextButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1._intl.lastPageLabel);
  }
}
class MatPaginatorIntl {
  constructor() {
    /**
     * Stream to emit from when labels are changed. Use this to notify components when the labels have
     * changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** A label for the page size selector. */
    this.itemsPerPageLabel = 'Items per page:';
    /** A label for the button that increments the current page. */
    this.nextPageLabel = 'Next page';
    /** A label for the button that decrements the current page. */
    this.previousPageLabel = 'Previous page';
    /** A label for the button that moves to the first page. */
    this.firstPageLabel = 'First page';
    /** A label for the button that moves to the last page. */
    this.lastPageLabel = 'Last page';
    /** A label for the range of items within the current page and the length of the whole list. */
    this.getRangeLabel = (page, pageSize, length) => {
      if (length == 0 || pageSize == 0) {
        return `0 of ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      // If the start index exceeds the list length, do not try and fix the end index to the end.
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} – ${endIndex} of ${length}`;
    };
  }
  static {
    this.ɵfac = function MatPaginatorIntl_Factory(t) {
      return new (t || MatPaginatorIntl)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MatPaginatorIntl,
      factory: MatPaginatorIntl.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatorIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** @docs-private */
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
/** @docs-private */
const MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};

/** The default page size if there is no page size and there are no provided page size options. */
const DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
class PageEvent {}
/** Injection token that can be used to provide the default options for the paginator module. */
const MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_PAGINATOR_DEFAULT_OPTIONS');
let nextUniqueId = 0;
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */
class MatPaginator {
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = Math.max(value || 0, 0);
    this._changeDetectorRef.markForCheck();
  }
  /** The length of the total number of items that are being paginated. Defaulted to 0. */
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value || 0;
    this._changeDetectorRef.markForCheck();
  }
  /** Number of items to display on a page. By default set to 50. */
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = Math.max(value || 0, 0);
    this._updateDisplayedPageSizeOptions();
  }
  /** The set of provided page size options to display to the user. */
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }
  set pageSizeOptions(value) {
    this._pageSizeOptions = (value || []).map(p => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(p, 0));
    this._updateDisplayedPageSizeOptions();
  }
  constructor(_intl, _changeDetectorRef, defaults) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    /** ID for the DOM node containing the paginator's items per page label. */
    this._pageSizeLabelId = `mat-paginator-page-size-label-${nextUniqueId++}`;
    this._isInitialized = false;
    this._initializedStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
    this._pageIndex = 0;
    this._length = 0;
    this._pageSizeOptions = [];
    /** Whether to hide the page size selection UI from the user. */
    this.hidePageSize = false;
    /** Whether to show the first/last buttons UI to the user. */
    this.showFirstLastButtons = false;
    /** Used to configure the underlying `MatSelect` inside the paginator. */
    this.selectConfig = {};
    /** Whether the paginator is disabled. */
    this.disabled = false;
    /** Event emitted when the paginator changes the page size or page index. */
    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the paginator is initialized. */
    this.initialized = this._initializedStream;
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
    if (defaults) {
      const {
        pageSize,
        pageSizeOptions,
        hidePageSize,
        showFirstLastButtons
      } = defaults;
      if (pageSize != null) {
        this._pageSize = pageSize;
      }
      if (pageSizeOptions != null) {
        this._pageSizeOptions = pageSizeOptions;
      }
      if (hidePageSize != null) {
        this.hidePageSize = hidePageSize;
      }
      if (showFirstLastButtons != null) {
        this.showFirstLastButtons = showFirstLastButtons;
      }
    }
    this._formFieldAppearance = defaults?.formFieldAppearance || 'outline';
  }
  ngOnInit() {
    this._isInitialized = true;
    this._updateDisplayedPageSizeOptions();
    this._initializedStream.next();
  }
  ngOnDestroy() {
    this._initializedStream.complete();
    this._intlChanges.unsubscribe();
  }
  /** Advances to the next page if it exists. */
  nextPage() {
    if (!this.hasNextPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex + 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move back to the previous page if it exists. */
  previousPage() {
    if (!this.hasPreviousPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex - 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the first page if not already there. */
  firstPage() {
    // hasPreviousPage being false implies at the start
    if (!this.hasPreviousPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = 0;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the last page if not already there. */
  lastPage() {
    // hasNextPage being false implies at the end
    if (!this.hasNextPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.getNumberOfPages() - 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Whether there is a previous page. */
  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  /** Whether there is a next page. */
  hasNextPage() {
    const maxPageIndex = this.getNumberOfPages() - 1;
    return this.pageIndex < maxPageIndex && this.pageSize != 0;
  }
  /** Calculate the number of pages */
  getNumberOfPages() {
    if (!this.pageSize) {
      return 0;
    }
    return Math.ceil(this.length / this.pageSize);
  }
  /**
   * Changes the page size so that the first item displayed on the page will still be
   * displayed using the new page size.
   *
   * For example, if the page size is 10 and on the second page (items indexed 10-19) then
   * switching so that the page size is 5 will set the third page as the current page so
   * that the 10th item will still be displayed.
   */
  _changePageSize(pageSize) {
    // Current page needs to be updated to reflect the new page size. Navigate to the page
    // containing the previous page's first item.
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;
    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this._emitPageEvent(previousPageIndex);
  }
  /** Checks whether the buttons for going forwards should be disabled. */
  _nextButtonsDisabled() {
    return this.disabled || !this.hasNextPage();
  }
  /** Checks whether the buttons for going backwards should be disabled. */
  _previousButtonsDisabled() {
    return this.disabled || !this.hasPreviousPage();
  }
  /**
   * Updates the list of page size options to display to the user. Includes making sure that
   * the page size is an option and that the list is sorted.
   */
  _updateDisplayedPageSizeOptions() {
    if (!this._isInitialized) {
      return;
    }
    // If no page size is provided, use the first page size option or the default page size.
    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
    }
    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    }
    // Sort the numbers using a number-specific sort function.
    this._displayedPageSizeOptions.sort((a, b) => a - b);
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an event notifying that a change of the paginator's properties has been triggered. */
  _emitPageEvent(previousPageIndex) {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }
  static {
    this.ɵfac = function MatPaginator_Factory(t) {
      return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatPaginator,
      selectors: [["mat-paginator"]],
      hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
      inputs: {
        color: "color",
        pageIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pageIndex", "pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        length: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "length", "length", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        pageSize: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pageSize", "pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        pageSizeOptions: "pageSizeOptions",
        hidePageSize: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "hidePageSize", "hidePageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showFirstLastButtons: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showFirstLastButtons", "showFirstLastButtons", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        selectConfig: "selectConfig",
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        page: "page"
      },
      exportAs: ["matPaginator"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 14,
      consts: [[1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
      template: function MatPaginator_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPaginator_Conditional_2_Template, 5, 4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatPaginator_Conditional_6_Template, 3, 5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
            return ctx.previousPage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
            return ctx.nextPage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MatPaginator_Conditional_13_Template, 3, 5, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, !ctx.hidePageSize ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](6, ctx.showFirstLastButtons ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](13, ctx.showFirstLastButtons ? 13 : -1);
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip],
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-paginator',
      exportAs: 'matPaginator',
      host: {
        'class': 'mat-mdc-paginator',
        'role': 'group'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      standalone: true,
      imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip],
      template: "<div class=\"mat-mdc-paginator-outer-container\">\n  <div class=\"mat-mdc-paginator-container\">\n    @if (!hidePageSize) {\n      <div class=\"mat-mdc-paginator-page-size\">\n        <div class=\"mat-mdc-paginator-page-size-label\" [attr.id]=\"_pageSizeLabelId\">\n          {{_intl.itemsPerPageLabel}}\n        </div>\n\n        @if (_displayedPageSizeOptions.length > 1) {\n          <mat-form-field\n            [appearance]=\"_formFieldAppearance!\"\n            [color]=\"color\"\n            class=\"mat-mdc-paginator-page-size-select\">\n            <mat-select\n              [value]=\"pageSize\"\n              [disabled]=\"disabled\"\n              [aria-labelledby]=\"_pageSizeLabelId\"\n              [panelClass]=\"selectConfig.panelClass || ''\"\n              [disableOptionCentering]=\"selectConfig.disableOptionCentering\"\n              (selectionChange)=\"_changePageSize($event.value)\"\n              hideSingleSelectionIndicator>\n              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {\n                <mat-option [value]=\"pageSizeOption\">\n                  {{pageSizeOption}}\n                </mat-option>\n              }\n            </mat-select>\n          </mat-form-field>\n        }\n\n        @if (_displayedPageSizeOptions.length <= 1) {\n          <div class=\"mat-mdc-paginator-page-size-value\">{{pageSize}}</div>\n        }\n      </div>\n    }\n\n    <div class=\"mat-mdc-paginator-range-actions\">\n      <div class=\"mat-mdc-paginator-range-label\" aria-live=\"polite\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      @if (showFirstLastButtons) {\n        <button mat-icon-button type=\"button\"\n                class=\"mat-mdc-paginator-navigation-first\"\n                (click)=\"firstPage()\"\n                [attr.aria-label]=\"_intl.firstPageLabel\"\n                [matTooltip]=\"_intl.firstPageLabel\"\n                [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n                [matTooltipPosition]=\"'above'\"\n                [disabled]=\"_previousButtonsDisabled()\">\n          <svg class=\"mat-mdc-paginator-icon\"\n              viewBox=\"0 0 24 24\"\n              focusable=\"false\"\n              aria-hidden=\"true\">\n            <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n          </svg>\n        </button>\n      }\n      <button mat-icon-button type=\"button\"\n              class=\"mat-mdc-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-mdc-paginator-icon\"\n             viewBox=\"0 0 24 24\"\n             focusable=\"false\"\n             aria-hidden=\"true\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-mdc-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-mdc-paginator-icon\"\n             viewBox=\"0 0 24 24\"\n             focusable=\"false\"\n             aria-hidden=\"true\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      @if (showFirstLastButtons) {\n        <button mat-icon-button type=\"button\"\n                class=\"mat-mdc-paginator-navigation-last\"\n                (click)=\"lastPage()\"\n                [attr.aria-label]=\"_intl.lastPageLabel\"\n                [matTooltip]=\"_intl.lastPageLabel\"\n                [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n                [matTooltipPosition]=\"'above'\"\n                [disabled]=\"_nextButtonsDisabled()\">\n          <svg class=\"mat-mdc-paginator-icon\"\n              viewBox=\"0 0 24 24\"\n              focusable=\"false\"\n              aria-hidden=\"true\">\n            <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n          </svg>\n        </button>\n      }\n    </div>\n  </div>\n</div>\n",
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"]
    }]
  }], () => [{
    type: MatPaginatorIntl
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    length: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    pageSizeOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hidePageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showFirstLastButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class MatPaginatorModule {
  static {
    this.ɵfac = function MatPaginatorModule_Factory(t) {
      return new (t || MatPaginatorModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatPaginatorModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [MAT_PAGINATOR_INTL_PROVIDER],
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule, MatPaginator]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule, MatPaginator],
      exports: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2047:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/sort.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_SORT_DEFAULT_OPTIONS: () => (/* binding */ MAT_SORT_DEFAULT_OPTIONS),
/* harmony export */   MAT_SORT_HEADER_INTL_PROVIDER: () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER),
/* harmony export */   MAT_SORT_HEADER_INTL_PROVIDER_FACTORY: () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER_FACTORY),
/* harmony export */   MatSort: () => (/* binding */ MatSort),
/* harmony export */   MatSortHeader: () => (/* binding */ MatSortHeader),
/* harmony export */   MatSortHeaderIntl: () => (/* binding */ MatSortHeaderIntl),
/* harmony export */   MatSortModule: () => (/* binding */ MatSortModule),
/* harmony export */   matSortAnimations: () => (/* binding */ matSortAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ 4879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6042);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 4646);








/** @docs-private */
const _c0 = ["mat-sort-header", ""];
const _c1 = ["*"];
function MatSortHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_Conditional_3_Template_div_animation_arrowPosition_start_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._disableViewStateAnimation = true);
    })("@arrowPosition.done", function MatSortHeader_Conditional_3_Template_div_animation_arrowPosition_done_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._disableViewStateAnimation = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5)(4, "div", 6)(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r1._getArrowViewState())("@arrowPosition", ctx_r1._getArrowViewState())("@allowChildren", ctx_r1._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r1._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r1._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r1._getArrowDirectionState());
  }
}
function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
/** @docs-private */
function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
/** @docs-private */
function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
/** @docs-private */
function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}

/** Injection token to be used to override the default options for `mat-sort`. */
const MAT_SORT_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_SORT_DEFAULT_OPTIONS');
/** Container for MatSortables to manage the sort state and provide default sort parameters. */
class MatSort {
  /** The sort direction of the currently active MatSortable. */
  get direction() {
    return this._direction;
  }
  set direction(direction) {
    if (direction && direction !== 'asc' && direction !== 'desc' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getSortInvalidDirectionError(direction);
    }
    this._direction = direction;
  }
  constructor(_defaultOptions) {
    this._defaultOptions = _defaultOptions;
    this._initializedStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
    /** Collection of all registered sortables that this directive manages. */
    this.sortables = new Map();
    /** Used to notify any child components listening to state changes. */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * The direction to set when an MatSortable is initially sorted.
     * May be overridden by the MatSortable's sort start.
     */
    this.start = 'asc';
    this._direction = '';
    /** Whether the sortable is disabled. */
    this.disabled = false;
    /** Event emitted when the user changes either the active sort or sort direction. */
    this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the paginator is initialized. */
    this.initialized = this._initializedStream;
  }
  /**
   * Register function to be used by the contained MatSortables. Adds the MatSortable to the
   * collection of MatSortables.
   */
  register(sortable) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }
      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }
    this.sortables.set(sortable.id, sortable);
  }
  /**
   * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
   * collection of contained MatSortables.
   */
  deregister(sortable) {
    this.sortables.delete(sortable.id);
  }
  /** Sets the active sort id and determines the new sort direction. */
  sort(sortable) {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }
    this.sortChange.emit({
      active: this.active,
      direction: this.direction
    });
  }
  /** Returns the next sort direction of the active sortable, checking for potential overrides. */
  getNextSortDirection(sortable) {
    if (!sortable) {
      return '';
    }
    // Get the sort direction cycle with the potential sortable overrides.
    const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
    // Get and return the next direction in the cycle
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }
  ngOnInit() {
    this._initializedStream.next();
  }
  ngOnChanges() {
    this._stateChanges.next();
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._initializedStream.complete();
  }
  static {
    this.ɵfac = function MatSort_Factory(t) {
      return new (t || MatSort)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatSort,
      selectors: [["", "matSort", ""]],
      hostAttrs: [1, "mat-sort"],
      inputs: {
        active: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matSortActive", "active"],
        start: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matSortStart", "start"],
        direction: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matSortDirection", "direction"],
        disableClear: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "matSortDisableClear", "disableClear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "matSortDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        sortChange: "matSortChange"
      },
      exportAs: ["matSort"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSort, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matSort]',
      exportAs: 'matSort',
      host: {
        'class': 'mat-sort'
      },
      standalone: true
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }], {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortActive']
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortStart']
    }],
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortDirection']
    }],
    disableClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        alias: 'matSortDisableClear',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        alias: 'matSortDisabled',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    sortChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['matSortChange']
    }]
  });
})();
/** Returns the sort direction cycle to use given the provided parameters of order and clear. */
function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ['asc', 'desc'];
  if (start == 'desc') {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push('');
  }
  return sortOrder;
}
const SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.AnimationDurations.ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.AnimationCurves.STANDARD_CURVE;
/**
 * Animations used by MatSort.
 * @docs-private
 */
const matSortAnimations = {
  /** Animation that moves the sort indicator. */
  indicator: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('indicator', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0px)'
  })),
  // 10px is the height of the sort indicator, minus the width of the pointers
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(10px)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('leftPointer', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(-45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rightPointer', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(-45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /** Animation that controls the arrow opacity. */
  arrowOpacity: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('arrowOpacity', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-active, asc-to-active, active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-hint, asc-to-hint, hint', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 0.54
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 0
  })),
  // Transition between all states except for immediate transitions
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => asc, * => desc, * => active, * => hint, * => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0ms')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* <=> *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('arrowPosition', [
  // Hidden Above => Hint Center
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => desc-to-hint, * => desc-to-active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })]))),
  // Hint Center => Hidden Below
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => hint-to-desc, * => active-to-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  })]))),
  // Hidden Below => Hint Center
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => asc-to-hint, * => asc-to-active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })]))),
  // Hint Center => Hidden Above
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => hint-to-asc, * => active-to-asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  })]))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-desc, active-to-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-asc, active-to-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  }))]),
  /** Necessary trigger that calls animate on children animations. */
  allowChildren: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('allowChildren', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animateChild)(), {
    optional: true
  })])])
};

/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */
class MatSortHeaderIntl {
  constructor() {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  static {
    this.ɵfac = function MatSortHeaderIntl_Factory(t) {
      return new (t || MatSortHeaderIntl)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MatSortHeaderIntl,
      factory: MatSortHeaderIntl.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeaderIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** @docs-private */
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
/** @docs-private */
const MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};

/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MatSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */
class MatSortHeader {
  /**
   * Description applied to MatSortHeader's button element with aria-describedby. This text should
   * describe the action that will occur when the user clicks the sort header.
   */
  get sortActionDescription() {
    return this._sortActionDescription;
  }
  set sortActionDescription(value) {
    this._updateSortActionDescription(value);
  }
  constructor(
  /**
   * @deprecated `_intl` parameter isn't being used anymore and it'll be removed.
   * @breaking-change 13.0.0
   */
  _intl, _changeDetectorRef,
  // `MatSort` is not optionally injected, but just asserted manually w/ better error.
  // tslint:disable-next-line: lightweight-tokens
  _sort, _columnDef, _focusMonitor, _elementRef, /** @breaking-change 14.0.0 _ariaDescriber will be required. */
  _ariaDescriber, defaultOptions) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._sort = _sort;
    this._columnDef = _columnDef;
    this._focusMonitor = _focusMonitor;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    /**
     * Flag set to true when the indicator should be displayed while the sort is not active. Used to
     * provide an affordance that the header is sortable by showing on focus and hover.
     */
    this._showIndicatorHint = false;
    /**
     * The view transition state of the arrow (translation/ opacity) - indicates its `from` and `to`
     * position through the animation. If animations are currently disabled, the fromState is removed
     * so that there is no animation displayed.
     */
    this._viewState = {};
    /** The direction the arrow should be facing according to the current state. */
    this._arrowDirection = '';
    /**
     * Whether the view state animation should show the transition between the `from` and `to` states.
     */
    this._disableViewStateAnimation = false;
    /** Sets the position of the arrow that displays when sorted. */
    this.arrowPosition = 'after';
    /** whether the sort header is disabled. */
    this.disabled = false;
    // Default the action description to "Sort" because it's better than nothing.
    // Without a description, the button's label comes from the sort header text content,
    // which doesn't give any indication that it performs a sorting operation.
    this._sortActionDescription = 'Sort';
    // Note that we use a string token for the `_columnDef`, because the value is provided both by
    // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
    // and we want to avoid having the sort header depending on the CDK table because
    // of this single reference.
    if (!_sort && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }
    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }
    this._handleStateChanges();
  }
  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    }
    // Initialize the direction of the arrow and set the view state to be immediately that state.
    this._updateArrowDirection();
    this._setAnimationTransitionState({
      toState: this._isSorted() ? 'active' : this._arrowDirection
    });
    this._sort.register(this);
    this._sortButton = this._elementRef.nativeElement.querySelector('.mat-sort-header-container');
    this._updateSortActionDescription(this._sortActionDescription);
  }
  ngAfterViewInit() {
    // We use the focus monitor because we also want to style
    // things differently based on the focus origin.
    this._focusMonitor.monitor(this._elementRef, true).subscribe(origin => {
      const newState = !!origin;
      if (newState !== this._showIndicatorHint) {
        this._setIndicatorHintVisible(newState);
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._sort.deregister(this);
    this._rerenderSubscription.unsubscribe();
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
    }
  }
  /**
   * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
   * user showing what the active sort will become. If set to false, the arrow will fade away.
   */
  _setIndicatorHintVisible(visible) {
    // No-op if the sort header is disabled - should not make the hint visible.
    if (this._isDisabled() && visible) {
      return;
    }
    this._showIndicatorHint = visible;
    if (!this._isSorted()) {
      this._updateArrowDirection();
      if (this._showIndicatorHint) {
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: 'hint'
        });
      } else {
        this._setAnimationTransitionState({
          fromState: 'hint',
          toState: this._arrowDirection
        });
      }
    }
  }
  /**
   * Sets the animation transition view state for the arrow's position and opacity. If the
   * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
   * no animation appears.
   */
  _setAnimationTransitionState(viewState) {
    this._viewState = viewState || {};
    // If the animation for arrow position state (opacity/translation) should be disabled,
    // remove the fromState so that it jumps right to the toState.
    if (this._disableViewStateAnimation) {
      this._viewState = {
        toState: viewState.toState
      };
    }
  }
  /** Triggers the sort on this sort header and removes the indicator hint. */
  _toggleOnInteraction() {
    this._sort.sort(this);
    // Do not show the animation if the header was already shown in the right position.
    if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
      this._disableViewStateAnimation = true;
    }
  }
  _handleClick() {
    if (!this._isDisabled()) {
      this._sort.sort(this);
    }
  }
  _handleKeydown(event) {
    if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER)) {
      event.preventDefault();
      this._toggleOnInteraction();
    }
  }
  /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
  _isSorted() {
    return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
  }
  /** Returns the animation state for the arrow direction (indicator and pointers). */
  _getArrowDirectionState() {
    return `${this._isSorted() ? 'active-' : ''}${this._arrowDirection}`;
  }
  /** Returns the arrow position state (opacity, translation). */
  _getArrowViewState() {
    const fromState = this._viewState.fromState;
    return (fromState ? `${fromState}-to-` : '') + this._viewState.toState;
  }
  /**
   * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
   * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
   * active sorted direction. The reason this is updated through a function is because the direction
   * should only be changed at specific times - when deactivated but the hint is displayed and when
   * the sort is active and the direction changes. Otherwise the arrow's direction should linger
   * in cases such as the sort becoming deactivated but we want to animate the arrow away while
   * preserving its direction, even though the next sort direction is actually different and should
   * only be changed once the arrow displays again (hint or activation).
   */
  _updateArrowDirection() {
    this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
  }
  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }
  /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */
  _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return 'none';
    }
    return this._sort.direction == 'asc' ? 'ascending' : 'descending';
  }
  /** Whether the arrow inside the sort header should be rendered. */
  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }
  _updateSortActionDescription(newDescription) {
    // We use AriaDescriber for the sort button instead of setting an `aria-label` because some
    // screen readers (notably VoiceOver) will read both the column header *and* the button's label
    // for every *cell* in the table, creating a lot of unnecessary noise.
    // If _sortButton is undefined, the component hasn't been initialized yet so there's
    // nothing to update in the DOM.
    if (this._sortButton) {
      // removeDescription will no-op if there is no existing message.
      // TODO(jelbourn): remove optional chaining when AriaDescriber is required.
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      this._ariaDescriber?.describe(this._sortButton, newDescription);
    }
    this._sortActionDescription = newDescription;
  }
  /** Handles changes in the sorting state. */
  _handleStateChanges() {
    this._rerenderSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(() => {
      if (this._isSorted()) {
        this._updateArrowDirection();
        // Do not show the animation if the header was already shown in the right position.
        if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
          this._disableViewStateAnimation = true;
        }
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: 'active'
        });
        this._showIndicatorHint = false;
      }
      // If this header was recently active and now no longer sorted, animate away the arrow.
      if (!this._isSorted() && this._viewState && this._viewState.toState === 'active') {
        this._disableViewStateAnimation = false;
        this._setAnimationTransitionState({
          fromState: 'active',
          toState: this._arrowDirection
        });
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  static {
    this.ɵfac = function MatSortHeader_Factory(t) {
      return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.AriaDescriber, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatSortHeader,
      selectors: [["", "mat-sort-header", ""]],
      hostAttrs: [1, "mat-sort-header"],
      hostVars: 3,
      hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
            return ctx._handleClick();
          })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
            return ctx._setIndicatorHintVisible(true);
          })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
            return ctx._setIndicatorHintVisible(false);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
        }
      },
      inputs: {
        id: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "mat-sort-header", "id"],
        arrowPosition: "arrowPosition",
        start: "start",
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        sortActionDescription: "sortActionDescription",
        disableClear: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disableClear", "disableClear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      exportAs: ["matSortHeader"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 7,
      consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
      template: function MatSortHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_Conditional_3_Template, 6, 6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](3, ctx._renderArrow() ? 3 : -1);
        }
      },
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
      encapsulation: 2,
      data: {
        animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
      },
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-sort-header]',
      exportAs: 'matSortHeader',
      host: {
        'class': 'mat-sort-header',
        '(click)': '_handleClick()',
        '(keydown)': '_handleKeydown($event)',
        '(mouseenter)': '_setIndicatorHintVisible(true)',
        '(mouseleave)': '_setIndicatorHintVisible(false)',
        '[attr.aria-sort]': '_getAriaSortAttribute()',
        '[class.mat-sort-header-disabled]': '_isDisabled()'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
      standalone: true,
      template: "<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button's `aria-label`\n  will be read out as the user is navigating the table's cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class=\"mat-sort-header-container mat-focus-indicator\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition === 'before'\"\n     [attr.tabindex]=\"_isDisabled() ? null : 0\"\n     [attr.role]=\"_isDisabled() ? null : 'button'\">\n\n  <!--\n    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn't visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class=\"mat-sort-header-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  @if (_renderArrow()) {\n    <div class=\"mat-sort-header-arrow\"\n        [@arrowOpacity]=\"_getArrowViewState()\"\n        [@arrowPosition]=\"_getArrowViewState()\"\n        [@allowChildren]=\"_getArrowDirectionState()\"\n        (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n        (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n      <div class=\"mat-sort-header-stem\"></div>\n      <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n        <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n        <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n        <div class=\"mat-sort-header-pointer-middle\"></div>\n      </div>\n    </div>\n  }\n</div>\n",
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"]
    }]
  }], () => [{
    type: MatSortHeaderIntl
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: MatSort,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: ['MAT_SORT_HEADER_COLUMN_DEF']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.AriaDescriber,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }], {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mat-sort-header']
    }],
    arrowPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    sortActionDescription: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();
class MatSortModule {
  static {
    this.ɵfac = function MatSortModule_Factory(t) {
      return new (t || MatSortModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatSortModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [MAT_SORT_HEADER_INTL_PROVIDER],
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, MatSort, MatSortHeader],
      exports: [MatSort, MatSortHeader],
      providers: [MAT_SORT_HEADER_INTL_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 640:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/tooltip.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_TOOLTIP_DEFAULT_OPTIONS: () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS),
/* harmony export */   MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   MatTooltip: () => (/* binding */ MatTooltip),
/* harmony export */   MatTooltipModule: () => (/* binding */ MatTooltipModule),
/* harmony export */   SCROLL_THROTTLE_MS: () => (/* binding */ SCROLL_THROTTLE_MS),
/* harmony export */   TOOLTIP_PANEL_CLASS: () => (/* binding */ TOOLTIP_PANEL_CLASS),
/* harmony export */   TooltipComponent: () => (/* binding */ TooltipComponent),
/* harmony export */   getMatTooltipInvalidPositionError: () => (/* binding */ getMatTooltipInvalidPositionError),
/* harmony export */   matTooltipAnimations: () => (/* binding */ matTooltipAnimations)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 4879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 4646);



















/** Time in ms to throttle repositioning after scroll events. */
const _c0 = ["tooltip"];
const SCROLL_THROTTLE_MS = 20;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @docs-private
 */
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
/** Injection token that determines the scroll handling while a tooltip is visible. */
const MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-tooltip-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay);
    return () => overlay.scrollStrategies.reposition({
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  }
});
/** @docs-private */
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition({
    scrollThrottle: SCROLL_THROTTLE_MS
  });
}
/** @docs-private */
const MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
/** @docs-private */
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
/** Injection token to be used to override the default options for `matTooltip`. */
const MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-tooltip-default-options', {
  providedIn: 'root',
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/**
 * CSS class that will be attached to the overlay panel.
 * @deprecated
 * @breaking-change 13.0.0 remove this variable
 */
const TOOLTIP_PANEL_CLASS = 'mat-mdc-tooltip-panel';
const PANEL_CLASS = 'tooltip-panel';
/** Options used to bind passive event listeners. */
const passiveListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true
});
// These constants were taken from MDC's `numbers` object. We can't import them from MDC,
// because they have some top-level references to `window` which break during SSR.
const MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
const UNBOUNDED_ANCHOR_GAP = 8;
const MIN_HEIGHT = 24;
const MAX_WIDTH = 200;
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */
class MatTooltip {
  /** Allows the user to define the position of the tooltip relative to the parent element */
  get position() {
    return this._position;
  }
  set position(value) {
    if (value !== this._position) {
      this._position = value;
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
        this._tooltipInstance?.show(0);
        this._overlayRef.updatePosition();
      }
    }
  }
  /**
   * Whether tooltip should be relative to the click or touch origin
   * instead of outside the element bounding box.
   */
  get positionAtOrigin() {
    return this._positionAtOrigin;
  }
  set positionAtOrigin(value) {
    this._positionAtOrigin = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this._detach();
    this._overlayRef = null;
  }
  /** Disables the display of the tooltip. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    // If tooltip is disabled, hide immediately.
    if (this._disabled) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
    }
  }
  /** The default delay in ms before showing the tooltip after show is called */
  get showDelay() {
    return this._showDelay;
  }
  set showDelay(value) {
    this._showDelay = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
  }
  /** The default delay in ms before hiding the tooltip after hide is called */
  get hideDelay() {
    return this._hideDelay;
  }
  set hideDelay(value) {
    this._hideDelay = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
    if (this._tooltipInstance) {
      this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
    }
  }
  /** The message to be displayed in the tooltip */
  get message() {
    return this._message;
  }
  set message(value) {
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message, 'tooltip');
    // If the message is not a string (e.g. number), convert it to a string and trim it.
    // Must convert with `String(value)`, not `${value}`, otherwise Closure Compiler optimises
    // away the string-conversion: https://github.com/angular/components/issues/20684
    this._message = value != null ? String(value).trim() : '';
    if (!this._message && this._isTooltipVisible()) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
      this._updateTooltipMessage();
      this._ngZone.runOutsideAngular(() => {
        // The `AriaDescriber` has some functionality that avoids adding a description if it's the
        // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
        // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
        // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
        Promise.resolve().then(() => {
          this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, 'tooltip');
        });
      });
    }
  }
  /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
  get tooltipClass() {
    return this._tooltipClass;
  }
  set tooltipClass(value) {
    this._tooltipClass = value;
    if (this._tooltipInstance) {
      this._setTooltipClass(this._tooltipClass);
    }
  }
  constructor(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, _document) {
    this._overlay = _overlay;
    this._elementRef = _elementRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._viewContainerRef = _viewContainerRef;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._ariaDescriber = _ariaDescriber;
    this._focusMonitor = _focusMonitor;
    this._dir = _dir;
    this._defaultOptions = _defaultOptions;
    this._position = 'below';
    this._positionAtOrigin = false;
    this._disabled = false;
    this._viewInitialized = false;
    this._pointerExitEventsInitialized = false;
    this._tooltipComponent = TooltipComponent;
    this._viewportMargin = 8;
    this._cssClassPrefix = 'mat-mdc';
    /**
     * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
     * uses a long press gesture to show and hide, however it can conflict with the native browser
     * gestures. To work around the conflict, Angular Material disables native gestures on the
     * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
     * elements). The different values for this option configure the touch event handling as follows:
     * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
     *   browser gestures on particular elements. In particular, it allows text selection on inputs
     *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
     * - `on` - Enables touch gestures for all elements and disables native
     *   browser gestures with no exceptions.
     * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
     *   showing on touch devices.
     */
    this.touchGestures = 'auto';
    this._message = '';
    /** Manually-bound passive event listeners. */
    this._passiveListeners = [];
    /** Emits when the component is destroyed. */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._scrollStrategy = scrollStrategy;
    this._document = _document;
    if (_defaultOptions) {
      this._showDelay = _defaultOptions.showDelay;
      this._hideDelay = _defaultOptions.hideDelay;
      if (_defaultOptions.position) {
        this.position = _defaultOptions.position;
      }
      if (_defaultOptions.positionAtOrigin) {
        this.positionAtOrigin = _defaultOptions.positionAtOrigin;
      }
      if (_defaultOptions.touchGestures) {
        this.touchGestures = _defaultOptions.touchGestures;
      }
    }
    _dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => {
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
      }
    });
    this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
  }
  ngAfterViewInit() {
    // This needs to happen after view init so the initial values for all inputs have been set.
    this._viewInitialized = true;
    this._setupPointerEnterEventsIfNeeded();
    this._focusMonitor.monitor(this._elementRef).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(origin => {
      // Note that the focus monitor runs outside the Angular zone.
      if (!origin) {
        this._ngZone.run(() => this.hide(0));
      } else if (origin === 'keyboard') {
        this._ngZone.run(() => this.show());
      }
    });
  }
  /**
   * Dispose the tooltip when destroyed.
   */
  ngOnDestroy() {
    const nativeElement = this._elementRef.nativeElement;
    clearTimeout(this._touchstartTimeout);
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._tooltipInstance = null;
    }
    // Clean up the event listeners set in the constructor
    this._passiveListeners.forEach(([event, listener]) => {
      nativeElement.removeEventListener(event, listener, passiveListenerOptions);
    });
    this._passiveListeners.length = 0;
    this._destroyed.next();
    this._destroyed.complete();
    this._ariaDescriber.removeDescription(nativeElement, this.message, 'tooltip');
    this._focusMonitor.stopMonitoring(nativeElement);
  }
  /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
  show(delay = this.showDelay, origin) {
    if (this.disabled || !this.message || this._isTooltipVisible()) {
      this._tooltipInstance?._cancelPendingAnimations();
      return;
    }
    const overlayRef = this._createOverlay(origin);
    this._detach();
    this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.ComponentPortal(this._tooltipComponent, this._viewContainerRef);
    const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
    instance._triggerElement = this._elementRef.nativeElement;
    instance._mouseLeaveHideDelay = this._hideDelay;
    instance.afterHidden().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => this._detach());
    this._setTooltipClass(this._tooltipClass);
    this._updateTooltipMessage();
    instance.show(delay);
  }
  /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
  hide(delay = this.hideDelay) {
    const instance = this._tooltipInstance;
    if (instance) {
      if (instance.isVisible()) {
        instance.hide(delay);
      } else {
        instance._cancelPendingAnimations();
        this._detach();
      }
    }
  }
  /** Shows/hides the tooltip */
  toggle(origin) {
    this._isTooltipVisible() ? this.hide() : this.show(undefined, origin);
  }
  /** Returns true if the tooltip is currently visible to the user */
  _isTooltipVisible() {
    return !!this._tooltipInstance && this._tooltipInstance.isVisible();
  }
  /** Create the overlay config and position strategy */
  _createOverlay(origin) {
    if (this._overlayRef) {
      const existingStrategy = this._overlayRef.getConfig().positionStrategy;
      if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef) {
        return this._overlayRef;
      }
      this._detach();
    }
    const scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);
    // Create connected position strategy that listens for scroll events to reposition.
    const strategy = this._overlay.position().flexibleConnectedTo(this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
    strategy.positionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(change => {
      this._updateCurrentPositionClass(change.connectionPair);
      if (this._tooltipInstance) {
        if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
          // After position changes occur and the overlay is clipped by
          // a parent scrollable then close the tooltip.
          this._ngZone.run(() => this.hide(0));
        }
      }
    });
    this._overlayRef = this._overlay.create({
      direction: this._dir,
      positionStrategy: strategy,
      panelClass: `${this._cssClassPrefix}-${PANEL_CLASS}`,
      scrollStrategy: this._scrollStrategy()
    });
    this._updatePosition(this._overlayRef);
    this._overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => this._detach());
    this._overlayRef.outsidePointerEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
    this._overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(event => {
      if (this._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) {
        event.preventDefault();
        event.stopPropagation();
        this._ngZone.run(() => this.hide(0));
      }
    });
    if (this._defaultOptions?.disableTooltipInteractivity) {
      this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
    }
    return this._overlayRef;
  }
  /** Detaches the currently-attached tooltip. */
  _detach() {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
    this._tooltipInstance = null;
  }
  /** Updates the position of the current tooltip. */
  _updatePosition(overlayRef) {
    const position = overlayRef.getConfig().positionStrategy;
    const origin = this._getOrigin();
    const overlay = this._getOverlayPosition();
    position.withPositions([this._addOffset({
      ...origin.main,
      ...overlay.main
    }), this._addOffset({
      ...origin.fallback,
      ...overlay.fallback
    })]);
  }
  /** Adds the configured offset to a position. Used as a hook for child classes. */
  _addOffset(position) {
    const offset = UNBOUNDED_ANCHOR_GAP;
    const isLtr = !this._dir || this._dir.value == 'ltr';
    if (position.originY === 'top') {
      position.offsetY = -offset;
    } else if (position.originY === 'bottom') {
      position.offsetY = offset;
    } else if (position.originX === 'start') {
      position.offsetX = isLtr ? -offset : offset;
    } else if (position.originX === 'end') {
      position.offsetX = isLtr ? offset : -offset;
    }
    return position;
  }
  /**
   * Returns the origin position and a fallback position based on the user's position preference.
   * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
   */
  _getOrigin() {
    const isLtr = !this._dir || this._dir.value == 'ltr';
    const position = this.position;
    let originPosition;
    if (position == 'above' || position == 'below') {
      originPosition = {
        originX: 'center',
        originY: position == 'above' ? 'top' : 'bottom'
      };
    } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
      originPosition = {
        originX: 'start',
        originY: 'center'
      };
    } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
      originPosition = {
        originX: 'end',
        originY: 'center'
      };
    } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(originPosition.originX, originPosition.originY);
    return {
      main: originPosition,
      fallback: {
        originX: x,
        originY: y
      }
    };
  }
  /** Returns the overlay position and a fallback position based on the user's preference */
  _getOverlayPosition() {
    const isLtr = !this._dir || this._dir.value == 'ltr';
    const position = this.position;
    let overlayPosition;
    if (position == 'above') {
      overlayPosition = {
        overlayX: 'center',
        overlayY: 'bottom'
      };
    } else if (position == 'below') {
      overlayPosition = {
        overlayX: 'center',
        overlayY: 'top'
      };
    } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
      overlayPosition = {
        overlayX: 'end',
        overlayY: 'center'
      };
    } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
      overlayPosition = {
        overlayX: 'start',
        overlayY: 'center'
      };
    } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
    return {
      main: overlayPosition,
      fallback: {
        overlayX: x,
        overlayY: y
      }
    };
  }
  /** Updates the tooltip message and repositions the overlay according to the new message length */
  _updateTooltipMessage() {
    // Must wait for the message to be painted to the tooltip so that the overlay can properly
    // calculate the correct positioning based on the size of the text.
    if (this._tooltipInstance) {
      this._tooltipInstance.message = this.message;
      this._tooltipInstance._markForCheck();
      this._ngZone.onMicrotaskEmpty.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => {
        if (this._tooltipInstance) {
          this._overlayRef.updatePosition();
        }
      });
    }
  }
  /** Updates the tooltip class */
  _setTooltipClass(tooltipClass) {
    if (this._tooltipInstance) {
      this._tooltipInstance.tooltipClass = tooltipClass;
      this._tooltipInstance._markForCheck();
    }
  }
  /** Inverts an overlay position. */
  _invertPosition(x, y) {
    if (this.position === 'above' || this.position === 'below') {
      if (y === 'top') {
        y = 'bottom';
      } else if (y === 'bottom') {
        y = 'top';
      }
    } else {
      if (x === 'end') {
        x = 'start';
      } else if (x === 'start') {
        x = 'end';
      }
    }
    return {
      x,
      y
    };
  }
  /** Updates the class on the overlay panel based on the current position of the tooltip. */
  _updateCurrentPositionClass(connectionPair) {
    const {
      overlayY,
      originX,
      originY
    } = connectionPair;
    let newPosition;
    // If the overlay is in the middle along the Y axis,
    // it means that it's either before or after.
    if (overlayY === 'center') {
      // Note that since this information is used for styling, we want to
      // resolve `start` and `end` to their real values, otherwise consumers
      // would have to remember to do it themselves on each consumption.
      if (this._dir && this._dir.value === 'rtl') {
        newPosition = originX === 'end' ? 'left' : 'right';
      } else {
        newPosition = originX === 'start' ? 'left' : 'right';
      }
    } else {
      newPosition = overlayY === 'bottom' && originY === 'top' ? 'above' : 'below';
    }
    if (newPosition !== this._currentPosition) {
      const overlayRef = this._overlayRef;
      if (overlayRef) {
        const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
        overlayRef.removePanelClass(classPrefix + this._currentPosition);
        overlayRef.addPanelClass(classPrefix + newPosition);
      }
      this._currentPosition = newPosition;
    }
  }
  /** Binds the pointer events to the tooltip trigger. */
  _setupPointerEnterEventsIfNeeded() {
    // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
    if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
      return;
    }
    // The mouse events shouldn't be bound on mobile devices, because they can prevent the
    // first tap from firing its click event or can cause the tooltip to open for clicks.
    if (this._platformSupportsMouseEvents()) {
      this._passiveListeners.push(['mouseenter', event => {
        this._setupPointerExitEventsIfNeeded();
        let point = undefined;
        if (event.x !== undefined && event.y !== undefined) {
          point = event;
        }
        this.show(undefined, point);
      }]);
    } else if (this.touchGestures !== 'off') {
      this._disableNativeGesturesIfNecessary();
      this._passiveListeners.push(['touchstart', event => {
        const touch = event.targetTouches?.[0];
        const origin = touch ? {
          x: touch.clientX,
          y: touch.clientY
        } : undefined;
        // Note that it's important that we don't `preventDefault` here,
        // because it can prevent click events from firing on the element.
        this._setupPointerExitEventsIfNeeded();
        clearTimeout(this._touchstartTimeout);
        const DEFAULT_LONGPRESS_DELAY = 500;
        this._touchstartTimeout = setTimeout(() => this.show(undefined, origin), this._defaultOptions.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
      }]);
    }
    this._addListeners(this._passiveListeners);
  }
  _setupPointerExitEventsIfNeeded() {
    if (this._pointerExitEventsInitialized) {
      return;
    }
    this._pointerExitEventsInitialized = true;
    const exitListeners = [];
    if (this._platformSupportsMouseEvents()) {
      exitListeners.push(['mouseleave', event => {
        const newTarget = event.relatedTarget;
        if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
          this.hide();
        }
      }], ['wheel', event => this._wheelListener(event)]);
    } else if (this.touchGestures !== 'off') {
      this._disableNativeGesturesIfNecessary();
      const touchendListener = () => {
        clearTimeout(this._touchstartTimeout);
        this.hide(this._defaultOptions.touchendHideDelay);
      };
      exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
    }
    this._addListeners(exitListeners);
    this._passiveListeners.push(...exitListeners);
  }
  _addListeners(listeners) {
    listeners.forEach(([event, listener]) => {
      this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
    });
  }
  _platformSupportsMouseEvents() {
    return !this._platform.IOS && !this._platform.ANDROID;
  }
  /** Listener for the `wheel` event on the element. */
  _wheelListener(event) {
    if (this._isTooltipVisible()) {
      const elementUnderPointer = this._document.elementFromPoint(event.clientX, event.clientY);
      const element = this._elementRef.nativeElement;
      // On non-touch devices we depend on the `mouseleave` event to close the tooltip, but it
      // won't fire if the user scrolls away using the wheel without moving their cursor. We
      // work around it by finding the element under the user's cursor and closing the tooltip
      // if it's not the trigger.
      if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
        this.hide();
      }
    }
  }
  /** Disables the native browser gestures, based on how the tooltip has been configured. */
  _disableNativeGesturesIfNecessary() {
    const gestures = this.touchGestures;
    if (gestures !== 'off') {
      const element = this._elementRef.nativeElement;
      const style = element.style;
      // If gestures are set to `auto`, we don't disable text selection on inputs and
      // textareas, because it prevents the user from typing into them on iOS Safari.
      if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
        style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = 'none';
      }
      // If we have `auto` gestures and the element uses native HTML dragging,
      // we don't set `-webkit-user-drag` because it prevents the native behavior.
      if (gestures === 'on' || !element.draggable) {
        style.webkitUserDrag = 'none';
      }
      style.touchAction = 'none';
      style.webkitTapHighlightColor = 'transparent';
    }
  }
  static {
    this.ɵfac = function MatTooltip_Factory(t) {
      return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.AriaDescriber), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatTooltip,
      selectors: [["", "matTooltip", ""]],
      hostAttrs: [1, "mat-mdc-tooltip-trigger"],
      hostVars: 2,
      hostBindings: function MatTooltip_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tooltip-disabled", ctx.disabled);
        }
      },
      inputs: {
        position: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matTooltipPosition", "position"],
        positionAtOrigin: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matTooltipPositionAtOrigin", "positionAtOrigin"],
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matTooltipDisabled", "disabled"],
        showDelay: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matTooltipShowDelay", "showDelay"],
        hideDelay: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matTooltipHideDelay", "hideDelay"],
        touchGestures: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matTooltipTouchGestures", "touchGestures"],
        message: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matTooltip", "message"],
        tooltipClass: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matTooltipClass", "tooltipClass"]
      },
      exportAs: ["matTooltip"],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matTooltip]',
      exportAs: 'matTooltip',
      host: {
        'class': 'mat-mdc-tooltip-trigger',
        '[class.mat-mdc-tooltip-disabled]': 'disabled'
      },
      standalone: true
    }]
  }], () => [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.AriaDescriber
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FocusMonitor
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_TOOLTIP_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
    }]
  }], {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipPosition']
    }],
    positionAtOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipPositionAtOrigin']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipDisabled']
    }],
    showDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipShowDelay']
    }],
    hideDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipHideDelay']
    }],
    touchGestures: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipTouchGestures']
    }],
    message: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltip']
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTooltipClass']
    }]
  });
})();
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */
class TooltipComponent {
  constructor(_changeDetectorRef, _elementRef, animationMode) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    /* Whether the tooltip text overflows to multiple lines */
    this._isMultiline = false;
    /** Whether interactions on the page should close the tooltip */
    this._closeOnInteraction = false;
    /** Whether the tooltip is currently visible. */
    this._isVisible = false;
    /** Subject for notifying that the tooltip has been hidden from the view */
    this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /** Name of the show animation and the class that toggles it. */
    this._showAnimation = 'mat-mdc-tooltip-show';
    /** Name of the hide animation and the class that toggles it. */
    this._hideAnimation = 'mat-mdc-tooltip-hide';
    this._animationsDisabled = animationMode === 'NoopAnimations';
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */
  show(delay) {
    // Cancel the delayed hide if it is scheduled
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = setTimeout(() => {
      this._toggleVisibility(true);
      this._showTimeoutId = undefined;
    }, delay);
  }
  /**
   * Begins the animation to hide the tooltip after the provided delay in ms.
   * @param delay Amount of milliseconds to delay showing the tooltip.
   */
  hide(delay) {
    // Cancel the delayed show if it is scheduled
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    this._hideTimeoutId = setTimeout(() => {
      this._toggleVisibility(false);
      this._hideTimeoutId = undefined;
    }, delay);
  }
  /** Returns an observable that notifies when the tooltip has been hidden from view. */
  afterHidden() {
    return this._onHide;
  }
  /** Whether the tooltip is being displayed. */
  isVisible() {
    return this._isVisible;
  }
  ngOnDestroy() {
    this._cancelPendingAnimations();
    this._onHide.complete();
    this._triggerElement = null;
  }
  /**
   * Interactions on the HTML body should close the tooltip immediately as defined in the
   * material design spec.
   * https://material.io/design/components/tooltips.html#behavior
   */
  _handleBodyInteraction() {
    if (this._closeOnInteraction) {
      this.hide(0);
    }
  }
  /**
   * Marks that the tooltip needs to be checked in the next change detection run.
   * Mainly used for rendering the initial text before positioning a tooltip, which
   * can be problematic in components with OnPush change detection.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _handleMouseLeave({
    relatedTarget
  }) {
    if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
      if (this.isVisible()) {
        this.hide(this._mouseLeaveHideDelay);
      } else {
        this._finalizeAnimation(false);
      }
    }
  }
  /**
   * Callback for when the timeout in this.show() gets completed.
   * This method is only needed by the mdc-tooltip, and so it is only implemented
   * in the mdc-tooltip, not here.
   */
  _onShow() {
    this._isMultiline = this._isTooltipMultiline();
    this._markForCheck();
  }
  /** Whether the tooltip text has overflown to the next line */
  _isTooltipMultiline() {
    const rect = this._elementRef.nativeElement.getBoundingClientRect();
    return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
  }
  /** Event listener dispatched when an animation on the tooltip finishes. */
  _handleAnimationEnd({
    animationName
  }) {
    if (animationName === this._showAnimation || animationName === this._hideAnimation) {
      this._finalizeAnimation(animationName === this._showAnimation);
    }
  }
  /** Cancels any pending animation sequences. */
  _cancelPendingAnimations() {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = this._hideTimeoutId = undefined;
  }
  /** Handles the cleanup after an animation has finished. */
  _finalizeAnimation(toVisible) {
    if (toVisible) {
      this._closeOnInteraction = true;
    } else if (!this.isVisible()) {
      this._onHide.next();
    }
  }
  /** Toggles the visibility of the tooltip element. */
  _toggleVisibility(isVisible) {
    // We set the classes directly here ourselves so that toggling the tooltip state
    // isn't bound by change detection. This allows us to hide it even if the
    // view ref has been detached from the CD tree.
    const tooltip = this._tooltip.nativeElement;
    const showClass = this._showAnimation;
    const hideClass = this._hideAnimation;
    tooltip.classList.remove(isVisible ? hideClass : showClass);
    tooltip.classList.add(isVisible ? showClass : hideClass);
    if (this._isVisible !== isVisible) {
      this._isVisible = isVisible;
      this._changeDetectorRef.markForCheck();
    }
    // It's common for internal apps to disable animations using `* { animation: none !important }`
    // which can break the opening sequence. Try to detect such cases and work around them.
    if (isVisible && !this._animationsDisabled && typeof getComputedStyle === 'function') {
      const styles = getComputedStyle(tooltip);
      // Use `getPropertyValue` to avoid issues with property renaming.
      if (styles.getPropertyValue('animation-duration') === '0s' || styles.getPropertyValue('animation-name') === 'none') {
        this._animationsDisabled = true;
      }
    }
    if (isVisible) {
      this._onShow();
    }
    if (this._animationsDisabled) {
      tooltip.classList.add('_mat-animation-noopable');
      this._finalizeAnimation(isVisible);
    }
  }
  static {
    this.ɵfac = function TooltipComponent_Factory(t) {
      return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TooltipComponent,
      selectors: [["mat-tooltip-component"]],
      viewQuery: function TooltipComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tooltip = _t.first);
        }
      },
      hostAttrs: ["aria-hidden", "true"],
      hostVars: 2,
      hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
            return ctx._handleMouseLeave($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("zoom", ctx.isVisible() ? 1 : null);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 4,
      consts: [["tooltip", ""], [1, "mdc-tooltip", "mdc-tooltip--shown", "mat-mdc-tooltip", 3, "animationend", "ngClass"], [1, "mdc-tooltip__surface", "mdc-tooltip__surface-animation"]],
      template: function TooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handleAnimationEnd($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-tooltip--multiline", ctx._isMultiline);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.tooltipClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass],
      styles: [".mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - 2*8px);margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - 2*8px);align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mat-mdc-tooltip .mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color)}.mat-mdc-tooltip .mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__caret-surface-top,.mat-mdc-tooltip .mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color)}.mat-mdc-tooltip .mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font);line-height:var(--mdc-plain-tooltip-supporting-text-line-height);font-size:var(--mdc-plain-tooltip-supporting-text-size);font-weight:var(--mdc-plain-tooltip-supporting-text-weight);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:\"\";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tooltip-component',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        // Forces the element to have a layout in IE and Edge. This fixes issues where the element
        // won't be rendered if the animations are disabled or there is no web animations polyfill.
        '[style.zoom]': 'isVisible() ? 1 : null',
        '(mouseleave)': '_handleMouseLeave($event)',
        'aria-hidden': 'true'
      },
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass],
      template: "<div\n  #tooltip\n  class=\"mdc-tooltip mdc-tooltip--shown mat-mdc-tooltip\"\n  [ngClass]=\"tooltipClass\"\n  (animationend)=\"_handleAnimationEnd($event)\"\n  [class.mdc-tooltip--multiline]=\"_isMultiline\">\n  <div class=\"mdc-tooltip__surface mdc-tooltip__surface-animation\">{{message}}</div>\n</div>\n",
      styles: [".mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - 2*8px);margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - 2*8px);align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mat-mdc-tooltip .mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color)}.mat-mdc-tooltip .mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__caret-surface-top,.mat-mdc-tooltip .mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color)}.mat-mdc-tooltip .mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font);line-height:var(--mdc-plain-tooltip-supporting-text-line-height);font-size:var(--mdc-plain-tooltip-supporting-text-size);font-weight:var(--mdc-plain-tooltip-supporting-text-weight);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:\"\";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }], {
    _tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tooltip', {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }]
  });
})();

/**
 * Animations used by MatTooltip.
 * @docs-private
 */
const matTooltipAnimations = {
  /** Animation that transitions a tooltip in and out. */
  tooltipState: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('state', [
  // TODO(crisbeto): these values are based on MDC's CSS.
  // We should be able to use their styles directly once we land #19432.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('initial, void, hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0,
    transform: 'scale(0.8)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    transform: 'scale(1)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('* => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('* => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('75ms cubic-bezier(0.4, 0, 1, 1)'))])
};
class MatTooltipModule {
  static {
    this.ɵfac = function MatTooltipModule_Factory(t) {
      return new (t || MatTooltipModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatTooltipModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.A11yModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.CdkScrollableModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.A11yModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule, MatTooltip, TooltipComponent],
      exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.CdkScrollableModule],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_components_patients_patients_component_ts.js.map