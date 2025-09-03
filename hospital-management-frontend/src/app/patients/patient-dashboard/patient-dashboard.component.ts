import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})
export class PatientDashboardComponent implements OnInit {
  patients = [
    {
      id: 1,
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      contact: '+1-555-0123',
      lastVisit: '2024-01-15',
      status: 'Active',
      bloodType: 'O+',
      allergies: ['Penicillin', 'Peanuts']
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      contact: '+1-555-0124',
      lastVisit: '2024-01-10',
      status: 'Active',
      bloodType: 'A-',
      allergies: ['Latex']
    },
    {
      id: 3,
      name: 'Mike Johnson',
      age: 45,
      gender: 'Male',
      contact: '+1-555-0125',
      lastVisit: '2024-01-08',
      status: 'Inactive',
      bloodType: 'B+',
      allergies: []
    }
  ];

  filteredPatients = [...this.patients];
  searchTerm = '';
  selectedStatus = 'all';
  selectedGender = 'all';

  ngOnInit(): void {
    this.filterPatients();
  }

  filterPatients(): void {
    this.filteredPatients = this.patients.filter(patient => {
      const matchesSearch = patient.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           patient.contact.includes(this.searchTerm);
      const matchesStatus = this.selectedStatus === 'all' || patient.status === this.selectedStatus;
      const matchesGender = this.selectedGender === 'all' || patient.gender === this.selectedGender;
      
      return matchesSearch && matchesStatus && matchesGender;
    });
  }

  onSearchChange(): void {
    this.filterPatients();
  }

  onStatusChange(): void {
    this.filterPatients();
  }

  onGenderChange(): void {
    this.filterPatients();
  }

  getStatusClass(status: string): string {
    return status === 'Active' ? 'status-active' : 'status-inactive';
  }

  viewPatientDetails(patientId: number): void {
    console.log('Viewing patient:', patientId);
    // Navigate to patient details page
  }

  editPatient(patientId: number): void {
    console.log('Editing patient:', patientId);
    // Navigate to edit patient page
  }
}
