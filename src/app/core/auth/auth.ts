import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  token = signal<string | null>(localStorage.getItem('token'));
  role = signal<'admin' | 'manager' | 'viewer' | null>(
    (localStorage.getItem('role') as any) || null
  );

  login(username: string, password: string) {
    // Dummy logic for now
    if (username === 'admin' && password === '123') {
      localStorage.setItem('token', 'dummy-token');
      localStorage.setItem('role', 'admin');
      this.token.set('dummy-token');
      this.role.set('admin');
      return true;
    }

    if (username === 'manager' && password === '123') {
      localStorage.setItem('token', 'dummy-token');
      localStorage.setItem('role', 'manager');
      this.token.set('dummy-token');
      this.role.set('manager');
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.token.set(null);
    this.role.set(null);
  }

  isLoggedIn() {
    return this.token() !== null;
  }

  hasRole(roles: string[]): boolean {
    return !!this.role() && roles.includes(this.role()!);
  }
}
