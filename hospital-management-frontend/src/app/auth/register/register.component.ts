import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    role: 'patient'
  };
  
  isLoading = false;
  errorMessage = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.validateForm()) {
      return;
    }

    if (this.userData.password !== this.userData.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // In a real app, you would call a registration service
    // For now, we'll simulate registration
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/auth/login']);
    }, 2000);
  }

  validateForm(): boolean {
    if (!this.userData.username || !this.userData.email || !this.userData.password || 
        !this.userData.confirmPassword || !this.userData.firstName || !this.userData.lastName) {
      this.errorMessage = 'Please fill in all fields';
      return false;
    }

    if (this.userData.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long';
      return false;
    }

    if (!this.isValidEmail(this.userData.email)) {
      this.errorMessage = 'Please enter a valid email address';
      return false;
    }

    return true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  clearError(): void {
    this.errorMessage = '';
  }
}
