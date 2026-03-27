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
        loadComponent: () => import('./features/forms/forms.component').then(m => m.FormsComponent)
      },
      {
        path: 'tables',
        data: { title: 'Tables & Grids' },
        loadComponent: () => import('./features/tables/tables.component').then(m => m.TablesComponent)
      },
      {
        path: 'ui-elements',
        data: { title: 'UI Elements Collection' },
        loadComponent: () => import('./features/ui-elements/ui-elements.component').then(m => m.UiElementsComponent)
      },
      {
        path: 'charts',
        data: { title: 'Charts & Visualizations' },
        loadComponent: () => import('./features/charts/charts.component').then(m => m.ChartsComponent)
      },
      {
        path: 'settings',
        data: { title: 'Application Settings' },
        loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent)
      }
    ]
  },

  { path: '**', redirectTo: '404' }
];
