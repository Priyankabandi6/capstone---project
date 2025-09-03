# Hospital Management System - Frontend

A modern, responsive Angular-based frontend application for comprehensive hospital management.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Authentication System**: Secure login/register with role-based access
- **Patient Management**: Complete patient dashboard with search and filtering
- **Role-Based Access Control**: Different views for admin, doctors, and patients
- **Modern UI Components**: Beautiful, accessible components with smooth animations
- **Mobile Optimized**: Fully responsive across all device sizes

## 🏗️ Project Structure

```
hospital-management-frontend/
├─ src/
│  ├─ app/
│  │  ├─ core/
│  │  │  ├─ interceptors/
│  │  │  │  └─ token.interceptor.ts
│  │  │  ├─ guards/
│  │  │  │  └─ auth.guard.ts
│  │  │  ├─ services/
│  │  │  │  ├─ auth.service.ts
│  │  │  │  └─ user.service.ts
│  │  ├─ shared/
│  │  │  ├─ navbar/
│  │  │  │  ├─ navbar.component.ts
│  │  │  │  ├─ navbar.component.html
│  │  │  │  └─ navbar.component.scss
│  │  ├─ patients/
│  │  │  ├─ patient-dashboard/
│  │  │  │  ├─ patient-dashboard.component.ts
│  │  │  │  ├─ patient-dashboard.component.html
│  │  │  │  └─ patient-dashboard.component.scss
│  │  ├─ auth/
│  │  │  ├─ login/
│  │  │  │  ├─ login.component.ts
│  │  │  │  ├─ login.component.html
│  │  │  │  └─ login.component.scss
│  │  │  └─ register/
│  │  │     ├─ register.component.ts
│  │  │     ├─ register.component.html
│  │  │     └─ register.component.scss
│  │  ├─ components/
│  │  │  ├─ dashboard/
│  │  │  ├─ patients/
│  │  │  ├─ doctors/
│  │  │  ├─ appointments/
│  │  │  ├─ billing/
│  │  │  └─ audit/
│  │  ├─ app.routes.ts
│  │  ├─ app.component.ts
│  │  └─ app.component.scss
│  └─ environments/
│     ├─ environment.ts
│     └─ environment.prod.ts
├─ proxy.conf.json
├─ package.json
└─ README.md
```

## 🛠️ Technologies Used

- **Angular 17+**: Latest Angular framework with standalone components
- **TypeScript**: Type-safe JavaScript development
- **SCSS**: Advanced CSS with variables and mixins
- **Font Awesome**: Icon library for modern UI
- **Responsive Design**: CSS Grid and Flexbox for layouts
- **HTTP Interceptors**: Token-based authentication
- **Route Guards**: Protected routes with authentication

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hospital-management-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

## 🔐 Authentication

The system includes a complete authentication system:

- **Login**: Username/password authentication
- **Register**: User registration with role selection
- **Token Management**: JWT token handling with interceptors
- **Route Protection**: Guards for protected routes
- **Role-Based Access**: Different permissions for different user types

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile**: Optimized for small screens with collapsible navigation
- **Tablet**: Adaptive layouts for medium screens
- **Desktop**: Full-featured interface for large screens
- **Touch-Friendly**: Optimized for touch devices

## 🎨 UI Components

### Core Components

- **Navbar**: Responsive navigation with mobile menu
- **Dashboard**: Overview with statistics and quick actions
- **Patient Dashboard**: Patient management with search and filters
- **Forms**: Modern, accessible form components
- **Cards**: Consistent card design system

### Design System

- **Color Palette**: Professional healthcare color scheme
- **Typography**: Clear, readable fonts
- **Spacing**: Consistent spacing system
- **Shadows**: Subtle depth and elevation
- **Animations**: Smooth transitions and hover effects

## 🔧 Configuration

### Environment Variables

- `environment.ts`: Development configuration
- `environment.prod.ts`: Production configuration

### Proxy Configuration

- `proxy.conf.json`: API proxy for development

## 📊 Features

### Dashboard
- Real-time statistics
- Quick action buttons
- Recent activities feed
- System status monitoring

### Patient Management
- Patient search and filtering
- Patient statistics
- Responsive data tables
- Action buttons for patient operations

### Authentication
- Secure login form
- User registration
- Password visibility toggle
- Form validation
- Error handling

## 🚀 Deployment

### Build Process

1. **Production Build**
   ```bash
   npm run build
   ```

2. **Environment Configuration**
   - Update `environment.prod.ts` with production API URLs
   - Configure proxy settings if needed

3. **Deploy to Server**
   - Upload `dist/` folder to your web server
   - Configure server for Angular routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Future Enhancements

- [ ] Advanced patient search
- [ ] Appointment scheduling system
- [ ] Doctor management interface
- [ ] Billing and invoicing
- [ ] Audit logging system
- [ ] Real-time notifications
- [ ] Dark mode support
- [ ] PWA capabilities

---

**Built with ❤️ for modern healthcare management**
