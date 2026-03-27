import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // LOGIN ROUTE
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component')
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
          import('./features/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },

      // {
      //   path: 'users',
      //   canActivate: [RoleGuard],
      //   data: { roles: ['admin', 'manager'] },
      //   loadComponent: () =>
      //     import('./features/users/users.component')
      //       .then(m => m.UsersComponent)
      // },

      {
        path: 'users',
        loadComponent: () =>
          import('./features/users/users.component')
            .then(m => m.UsersComponent)
      },


      {
        path: 'profile',
        loadComponent: () =>
          import('./features/profile/profile.component')
            .then(m => m.ProfileComponent)
      }
    ]
  },

  { path: '**', redirectTo: 'dashboard' }
];
