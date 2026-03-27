import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth';
import { NgIf } from '@angular/common';
import { ThemeService } from '../../core/services/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public theme: ThemeService,
    private auth: AuthService
  ) {}

  logout() {
    this.auth.logout();
    window.location.href = '/login';
  }
}
