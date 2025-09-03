"use strict";
(self["webpackChunkhospital_management_frontend"] = self["webpackChunkhospital_management_frontend"] || []).push([["src_app_components_doctors_doctors_component_ts"],{

/***/ 9069:
/*!*********************************************************!*\
  !*** ./src/app/components/doctors/doctors.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoctorsComponent: () => (/* binding */ DoctorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);














class DoctorsComponent {
  constructor(fb, snackBar) {
    this.fb = fb;
    this.snackBar = snackBar;
    this.displayedColumns = ['id', 'name', 'specialization', 'department', 'phone', 'email', 'status', 'actions'];
    this.dataSource = [];
    this.filteredDataSource = [];
    this.isAddMode = false;
    this.selectedDoctor = null;
    this.searchTerm = '';
    this.departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Dermatology', 'Psychiatry', 'Emergency Medicine'];
    this.specializations = ['Cardiologist', 'Neurologist', 'Orthopedic Surgeon', 'Pediatrician', 'Oncologist', 'Dermatologist', 'Psychiatrist', 'Emergency Physician'];
    this.doctorForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      specialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[0-9]{10}$')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]],
      licenseNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      experience: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(0)]],
      education: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      address: ['']
    });
  }
  ngOnInit() {
    this.loadDoctors();
  }
  loadDoctors() {
    // Mock data - replace with actual API call
    this.dataSource = [{
      id: 1,
      name: 'Dr. John Smith',
      specialization: 'Cardiologist',
      department: 'Cardiology',
      phone: '1234567890',
      email: 'john.smith@hospital.com',
      status: 'Active',
      licenseNumber: 'MD12345',
      experience: 15,
      education: 'MBBS, MD Cardiology'
    }, {
      id: 2,
      name: 'Dr. Sarah Johnson',
      specialization: 'Neurologist',
      department: 'Neurology',
      phone: '9876543210',
      email: 'sarah.johnson@hospital.com',
      status: 'Active',
      licenseNumber: 'MD67890',
      experience: 12,
      education: 'MBBS, MD Neurology'
    }, {
      id: 3,
      name: 'Dr. Mike Brown',
      specialization: 'Orthopedic Surgeon',
      department: 'Orthopedics',
      phone: '5551234567',
      email: 'mike.brown@hospital.com',
      status: 'Active',
      licenseNumber: 'MD11111',
      experience: 18,
      education: 'MBBS, MS Orthopedics'
    }, {
      id: 4,
      name: 'Dr. Emily Wilson',
      specialization: 'Pediatrician',
      department: 'Pediatrics',
      phone: '4449876543',
      email: 'emily.wilson@hospital.com',
      status: 'Inactive',
      licenseNumber: 'MD22222',
      experience: 8,
      education: 'MBBS, MD Pediatrics'
    }];
    this.filteredDataSource = [...this.dataSource];
  }
  applyFilter() {
    if (!this.searchTerm.trim()) {
      this.filteredDataSource = [...this.dataSource];
      return;
    }
    this.filteredDataSource = this.dataSource.filter(doctor => doctor.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || doctor.specialization.toLowerCase().includes(this.searchTerm.toLowerCase()) || doctor.department.toLowerCase().includes(this.searchTerm.toLowerCase()) || doctor.email.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  openAddDialog() {
    this.isAddMode = true;
    this.selectedDoctor = null;
    this.doctorForm.reset();
  }
  openEditDialog(doctor) {
    this.isAddMode = false;
    this.selectedDoctor = doctor;
    this.doctorForm.patchValue(doctor);
  }
  saveDoctor() {
    if (this.doctorForm.valid) {
      const doctorData = this.doctorForm.value;
      if (this.isAddMode) {
        // Add new doctor
        const newDoctor = {
          ...doctorData,
          id: this.dataSource.length + 1,
          status: 'Active'
        };
        this.dataSource.push(newDoctor);
        this.snackBar.open('Doctor added successfully!', 'Close', {
          duration: 3000
        });
      } else {
        // Update existing doctor
        const index = this.dataSource.findIndex(d => d.id === this.selectedDoctor.id);
        if (index !== -1) {
          this.dataSource[index] = {
            ...this.selectedDoctor,
            ...doctorData
          };
          this.snackBar.open('Doctor updated successfully!', 'Close', {
            duration: 3000
          });
        }
      }
      this.loadDoctors();
      this.closeDialog();
    }
  }
  deleteDoctor(doctor) {
    if (confirm(`Are you sure you want to delete ${doctor.name}?`)) {
      const index = this.dataSource.findIndex(d => d.id === doctor.id);
      if (index !== -1) {
        this.dataSource.splice(index, 1);
        this.loadDoctors();
        this.snackBar.open('Doctor deleted successfully!', 'Close', {
          duration: 3000
        });
      }
    }
  }
  closeDialog() {
    this.selectedDoctor = null;
    this.doctorForm.reset();
  }
  getStatusColor(status) {
    return status === 'Active' ? 'success' : 'warn';
  }
  getDepartmentColor(department) {
    const colors = ['primary', 'accent', 'warn', 'success'];
    const index = this.departments.indexOf(department);
    return colors[index % colors.length];
  }
  static {
    this.ɵfac = function DoctorsComponent_Factory(t) {
      return new (t || DoctorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DoctorsComponent,
      selectors: [["app-doctors"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 0,
      consts: [[1, "doctors-container"]],
      template: function DoctorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Doctors Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Manage doctor profiles and specializations");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule],
      styles: [".doctors-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3RvcnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxDYXBzdG9uZSUyMHByb2plY3RcXGhvc3BpdGFsLW1hbmFnZW1lbnQtZnJvbnRlbmRcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxkb2N0b3JzXFxkb2N0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6ImRvY3RvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdG9ycy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbiIsIi5kb2N0b3JzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kb2N0b3JzL2RvY3RvcnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9DYXBzdG9uZSUyMHByb2plY3QvaG9zcGl0YWwtbWFuYWdlbWVudC1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0Esd2lCQUF3aUIiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdG9ycy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbiIsIi5kb2N0b3JzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_doctors_doctors_component_ts.js.map