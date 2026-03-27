import { Component, HostListener, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ThemeService } from '../../core/services/theme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  profileOpen = signal(false);

  constructor(
    public theme: ThemeService,
    private auth: AuthService
  ) {}

  toggleProfile() {
    this.profileOpen.update(v => !v);
  }

  // Close dropdown if clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.profile-menu-container')) {
      this.profileOpen.set(false);
    }
  }

  logout() {
    this.auth.logout();
    window.location.href = '/login';
  }
}
