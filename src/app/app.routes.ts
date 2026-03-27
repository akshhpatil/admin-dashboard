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
  {
    path: 'signup',
    loadComponent: () =>
      import('./features/signup/signup.component')
        .then(m => m.SignupComponent),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./features/not-found/not-found.component')
        .then(m => m.NotFoundComponent),
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
      },
      {
        path: 'forms',
        data: { title: 'Forms Module' },
        loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent)
      },
      {
        path: 'tables',
        data: { title: 'Tables & Grids' },
        loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent)
      },
      {
        path: 'ui-elements',
        data: { title: 'UI Elements Collection' },
        loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent)
      },
      {
        path: 'charts',
        data: { title: 'Charts & Visualizations' },
        loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent)
      },
      {
        path: 'settings',
        data: { title: 'Application Settings' },
        loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent)
      }
    ]
  },

  { path: '**', redirectTo: '404' }
];
