import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'patients',
    loadComponent: () => import('./components/patients/patients.component').then(m => m.PatientsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'patient-dashboard',
    loadComponent: () => import('./patients/patient-dashboard/patient-dashboard.component').then(m => m.PatientDashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'doctors',
    loadComponent: () => import('./components/doctors/doctors.component').then(m => m.DoctorsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'appointments',
    loadComponent: () => import('./components/appointments/appointments.component').then(m => m.AppointmentsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'billing',
    loadComponent: () => import('./components/billing/billing.component').then(m => m.BillingComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'audit',
    loadComponent: () => import('./components/audit/audit.component').then(m => m.AuditComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
