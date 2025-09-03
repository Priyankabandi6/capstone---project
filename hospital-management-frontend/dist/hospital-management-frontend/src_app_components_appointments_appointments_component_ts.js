"use strict";
(self["webpackChunkhospital_management_frontend"] = self["webpackChunkhospital_management_frontend"] || []).push([["src_app_components_appointments_appointments_component_ts"],{

/***/ 4831:
/*!*******************************************************************!*\
  !*** ./src/app/components/appointments/appointments.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentsComponent: () => (/* binding */ AppointmentsComponent)
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
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
















class AppointmentsComponent {
  constructor(fb, snackBar) {
    this.fb = fb;
    this.snackBar = snackBar;
    this.displayedColumns = ['id', 'patient', 'doctor', 'date', 'time', 'type', 'status', 'actions'];
    this.dataSource = [];
    this.filteredDataSource = [];
    this.isAddMode = false;
    this.selectedAppointment = null;
    this.searchTerm = '';
    this.appointmentTypes = ['Consultation', 'Follow-up', 'Emergency', 'Surgery', 'Check-up'];
    this.appointmentStatuses = ['Scheduled', 'Confirmed', 'In Progress', 'Completed', 'Cancelled'];
    this.appointmentForm = this.fb.group({
      patientId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      doctorId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      notes: [''],
      status: ['Scheduled']
    });
  }
  ngOnInit() {
    this.loadAppointments();
  }
  loadAppointments() {
    // Mock data - replace with actual API call
    this.dataSource = [{
      id: 1,
      patient: 'John Doe',
      doctor: 'Dr. Smith',
      date: '2024-01-15',
      time: '09:00 AM',
      type: 'Consultation',
      status: 'Confirmed',
      notes: 'Regular checkup'
    }, {
      id: 2,
      patient: 'Jane Smith',
      doctor: 'Dr. Johnson',
      date: '2024-01-15',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'Scheduled',
      notes: 'Post-surgery follow-up'
    }, {
      id: 3,
      patient: 'Mike Wilson',
      doctor: 'Dr. Brown',
      date: '2024-01-15',
      time: '02:00 PM',
      type: 'Emergency',
      status: 'In Progress',
      notes: 'Chest pain'
    }, {
      id: 4,
      patient: 'Sarah Davis',
      doctor: 'Dr. Wilson',
      date: '2024-01-16',
      time: '11:00 AM',
      type: 'Check-up',
      status: 'Scheduled',
      notes: 'Annual physical'
    }];
    this.filteredDataSource = [...this.dataSource];
  }
  applyFilter() {
    if (!this.searchTerm.trim()) {
      this.filteredDataSource = [...this.dataSource];
      return;
    }
    this.filteredDataSource = this.dataSource.filter(appointment => appointment.patient.toLowerCase().includes(this.searchTerm.toLowerCase()) || appointment.doctor.toLowerCase().includes(this.searchTerm.toLowerCase()) || appointment.type.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  openAddDialog() {
    this.isAddMode = true;
    this.selectedAppointment = null;
    this.appointmentForm.reset();
    this.appointmentForm.patchValue({
      status: 'Scheduled'
    });
  }
  openEditDialog(appointment) {
    this.isAddMode = false;
    this.selectedAppointment = appointment;
    this.appointmentForm.patchValue(appointment);
  }
  saveAppointment() {
    if (this.appointmentForm.valid) {
      const appointmentData = this.appointmentForm.value;
      if (this.isAddMode) {
        // Add new appointment
        const newAppointment = {
          ...appointmentData,
          id: this.dataSource.length + 1
        };
        this.dataSource.push(newAppointment);
        this.snackBar.open('Appointment scheduled successfully!', 'Close', {
          duration: 3000
        });
      } else {
        // Update existing appointment
        const index = this.dataSource.findIndex(a => a.id === this.selectedAppointment.id);
        if (index !== -1) {
          this.dataSource[index] = {
            ...this.selectedAppointment,
            ...appointmentData
          };
          this.snackBar.open('Appointment updated successfully!', 'Close', {
            duration: 3000
          });
        }
      }
      this.loadAppointments();
      this.closeDialog();
    }
  }
  deleteAppointment(appointment) {
    if (confirm(`Are you sure you want to delete this appointment?`)) {
      const index = this.dataSource.findIndex(a => a.id === appointment.id);
      if (index !== -1) {
        this.dataSource.splice(index, 1);
        this.loadAppointments();
        this.snackBar.open('Appointment deleted successfully!', 'Close', {
          duration: 3000
        });
      }
    }
  }
  closeDialog() {
    this.selectedAppointment = null;
    this.appointmentForm.reset();
  }
  getStatusColor(status) {
    switch (status) {
      case 'Confirmed':
        return 'success';
      case 'Scheduled':
        return 'primary';
      case 'In Progress':
        return 'accent';
      case 'Completed':
        return 'success';
      case 'Cancelled':
        return 'warn';
      default:
        return 'primary';
    }
  }
  getTypeColor(type) {
    switch (type) {
      case 'Emergency':
        return 'warn';
      case 'Surgery':
        return 'accent';
      case 'Consultation':
        return 'primary';
      case 'Follow-up':
        return 'success';
      case 'Check-up':
        return 'primary';
      default:
        return 'primary';
    }
  }
  static {
    this.ɵfac = function AppointmentsComponent_Factory(t) {
      return new (t || AppointmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppointmentsComponent,
      selectors: [["app-appointments"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 0,
      consts: [[1, "appointments-container"]],
      template: function AppointmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Appointments Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Schedule and manage patient appointments");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule],
      styles: [".appointments-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50cy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXENhcHN0b25lJTIwcHJvamVjdFxcaG9zcGl0YWwtbWFuYWdlbWVudC1mcm9udGVuZFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFwcG9pbnRtZW50c1xcYXBwb2ludG1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6ImFwcG9pbnRtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBvaW50bWVudHMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4iLCIuYXBwb2ludG1lbnRzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHBvaW50bWVudHMvYXBwb2ludG1lbnRzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vQ2Fwc3RvbmUlMjBwcm9qZWN0L2hvc3BpdGFsLW1hbmFnZW1lbnQtZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2FwcG9pbnRtZW50cy9hcHBvaW50bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7QURDQSxnbEJBQWdsQiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBvaW50bWVudHMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4iLCIuYXBwb2ludG1lbnRzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_appointments_appointments_component_ts.js.map