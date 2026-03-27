import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  collapsed = signal(false);

  menu = [
    { label: 'Dashboard', icon: '🏠', path: '/dashboard' },
    { label: 'Users', icon: '👥', path: '/users' },
    { label: 'Profile', icon: '👤', path: '/profile' }
  ];

  toggle() {
    this.collapsed.update(v => !v);
  }
}
