"use strict";
(self["webpackChunkhospital_management_frontend"] = self["webpackChunkhospital_management_frontend"] || []).push([["src_app_components_billing_billing_component_ts"],{

/***/ 9921:
/*!*********************************************************!*\
  !*** ./src/app/components/billing/billing.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingComponent: () => (/* binding */ BillingComponent)
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














class BillingComponent {
  constructor(fb, snackBar) {
    this.fb = fb;
    this.snackBar = snackBar;
    this.displayedColumns = ['id', 'patient', 'services', 'amount', 'status', 'date', 'actions'];
    this.dataSource = [];
    this.filteredDataSource = [];
    this.isAddMode = false;
    this.selectedBill = null;
    this.searchTerm = '';
    this.paymentStatuses = ['Pending', 'Paid', 'Overdue', 'Cancelled'];
    this.serviceTypes = ['Consultation', 'Laboratory', 'Radiology', 'Surgery', 'Medication', 'Room Charges'];
    this.billingForm = this.fb.group({
      patientId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      services: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(0)]],
      status: ['Pending'],
      dueDate: [''],
      notes: ['']
    });
  }
  ngOnInit() {
    this.loadBills();
  }
  loadBills() {
    // Mock data - replace with actual API call
    this.dataSource = [{
      id: 1,
      patient: 'John Doe',
      services: 'Consultation, Laboratory',
      amount: 250.00,
      status: 'Paid',
      date: '2024-01-15',
      dueDate: '2024-01-15',
      notes: 'Regular checkup and blood tests'
    }, {
      id: 2,
      patient: 'Jane Smith',
      services: 'Surgery, Room Charges',
      amount: 2500.00,
      status: 'Pending',
      date: '2024-01-14',
      dueDate: '2024-01-21',
      notes: 'Appendectomy surgery'
    }, {
      id: 3,
      patient: 'Mike Wilson',
      services: 'Radiology, Consultation',
      amount: 180.00,
      status: 'Overdue',
      date: '2024-01-10',
      dueDate: '2024-01-10',
      notes: 'X-ray and consultation'
    }, {
      id: 4,
      patient: 'Sarah Davis',
      services: 'Medication, Follow-up',
      amount: 95.00,
      status: 'Paid',
      date: '2024-01-12',
      dueDate: '2024-01-12',
      notes: 'Prescription refill'
    }];
    this.filteredDataSource = [...this.dataSource];
  }
  applyFilter() {
    if (!this.searchTerm.trim()) {
      this.filteredDataSource = [...this.dataSource];
      return;
    }
    this.filteredDataSource = this.dataSource.filter(bill => bill.patient.toLowerCase().includes(this.searchTerm.toLowerCase()) || bill.services.toLowerCase().includes(this.searchTerm.toLowerCase()) || bill.status.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  openAddDialog() {
    this.isAddMode = true;
    this.selectedBill = null;
    this.billingForm.reset();
    this.billingForm.patchValue({
      status: 'Pending'
    });
  }
  openEditDialog(bill) {
    this.isAddMode = false;
    this.selectedBill = bill;
    this.billingForm.patchValue(bill);
  }
  saveBill() {
    if (this.billingForm.valid) {
      const billData = this.billingForm.value;
      if (this.isAddMode) {
        // Add new bill
        const newBill = {
          ...billData,
          id: this.dataSource.length + 1,
          date: new Date().toISOString().split('T')[0]
        };
        this.dataSource.push(newBill);
        this.snackBar.open('Bill generated successfully!', 'Close', {
          duration: 3000
        });
      } else {
        // Update existing bill
        const index = this.dataSource.findIndex(b => b.id === this.selectedBill.id);
        if (index !== -1) {
          this.dataSource[index] = {
            ...this.selectedBill,
            ...billData
          };
          this.snackBar.open('Bill updated successfully!', 'Close', {
            duration: 3000
          });
        }
      }
      this.loadBills();
      this.closeDialog();
    }
  }
  deleteBill(bill) {
    if (confirm(`Are you sure you want to delete this bill?`)) {
      const index = this.dataSource.findIndex(b => b.id === bill.id);
      if (index !== -1) {
        this.dataSource.splice(index, 1);
        this.loadBills();
        this.snackBar.open('Bill deleted successfully!', 'Close', {
          duration: 3000
        });
      }
    }
  }
  closeDialog() {
    this.selectedBill = null;
    this.billingForm.reset();
  }
  getStatusColor(status) {
    switch (status) {
      case 'Paid':
        return 'success';
      case 'Pending':
        return 'primary';
      case 'Overdue':
        return 'warn';
      case 'Cancelled':
        return 'warn';
      default:
        return 'primary';
    }
  }
  generateInvoice(bill) {
    // Mock invoice generation
    this.snackBar.open(`Invoice generated for ${bill.patient}`, 'Close', {
      duration: 3000
    });
  }
  markAsPaid(bill) {
    const index = this.dataSource.findIndex(b => b.id === bill.id);
    if (index !== -1) {
      this.dataSource[index].status = 'Paid';
      this.loadBills();
      this.snackBar.open(`Payment recorded for ${bill.patient}`, 'Close', {
        duration: 3000
      });
    }
  }
  static {
    this.ɵfac = function BillingComponent_Factory(t) {
      return new (t || BillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BillingComponent,
      selectors: [["app-billing"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 0,
      consts: [[1, "billing-container"]],
      template: function BillingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Billing Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Generate invoices and track payments");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule],
      styles: [".billing-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxpbmcuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxDYXBzdG9uZSUyMHByb2plY3RcXGhvc3BpdGFsLW1hbmFnZW1lbnQtZnJvbnRlbmRcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxiaWxsaW5nXFxiaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6ImJpbGxpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlsbGluZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbiIsIi5iaWxsaW5nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9iaWxsaW5nL2JpbGxpbmcuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9DYXBzdG9uZSUyMHByb2plY3QvaG9zcGl0YWwtbWFuYWdlbWVudC1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvYmlsbGluZy9iaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0Esd2lCQUF3aUIiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlsbGluZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbiIsIi5iaWxsaW5nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_billing_billing_component_ts.js.map