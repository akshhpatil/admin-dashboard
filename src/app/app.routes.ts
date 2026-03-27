import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth-guard';
import { RoleGuard } from './core/auth/role-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // LOGIN ROUTE
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component')
        .then(m => m.LoginComponent),
  },

  // PROTECTED LAYOUT SHELL
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./layout/layout/layout.component')
        .then(m => m.LayoutComponent),

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },

      // {
      //   path: 'users',
      //   canActivate: [RoleGuard],
      //   data: { roles: ['admin', 'manager'] },
      //   loadComponent: () =>
      //     import('./pages/users/users.component')
      //       .then(m => m.UsersComponent)
      // },

      {
        path: 'users',
        loadComponent: () =>
          import('./pages/users/users.component')
            .then(m => m.UsersComponent)
      },


      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.component')
            .then(m => m.ProfileComponent)
      }
    ]
  },

  { path: '**', redirectTo: 'dashboard' }
];
