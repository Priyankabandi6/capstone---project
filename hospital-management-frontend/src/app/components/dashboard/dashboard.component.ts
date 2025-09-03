import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats = [
    {
      title: 'Total Patients',
      value: '1,234',
      icon: 'fas fa-users',
      color: '#3498db',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Active Appointments',
      value: '89',
      icon: 'fas fa-calendar-check',
      color: '#27ae60',
      change: '+5%',
      changeType: 'positive'
    },
    {
      title: 'Available Doctors',
      value: '45',
      icon: 'fas fa-user-md',
      color: '#f39c12',
      change: '+2%',
      changeType: 'positive'
    },
    {
      title: 'Total Revenue',
      value: '$45,678',
      icon: 'fas fa-dollar-sign',
      color: '#9b59b6',
      change: '+18%',
      changeType: 'positive'
    }
  ];

  recentActivities = [
    {
      type: 'appointment',
      message: 'New appointment scheduled for John Doe',
      time: '2 minutes ago',
      icon: 'fas fa-calendar-plus',
      color: '#27ae60'
    },
    {
      type: 'patient',
      message: 'Patient Jane Smith checked in',
      time: '15 minutes ago',
      icon: 'fas fa-user-plus',
      color: '#3498db'
    },
    {
      type: 'doctor',
      message: 'Dr. Johnson updated patient records',
      time: '1 hour ago',
      icon: 'fas fa-edit',
      color: '#f39c12'
    },
    {
      type: 'billing',
      message: 'Payment received from Patient ID #1234',
      time: '2 hours ago',
      icon: 'fas fa-credit-card',
      color: '#9b59b6'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}

