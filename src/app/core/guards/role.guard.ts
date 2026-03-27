import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivateFn } from '@angular/router';

export const RoleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const allowedRoles = route.data['roles'] as string[] | undefined;

  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  if (allowedRoles && !auth.hasRole(allowedRoles)) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
