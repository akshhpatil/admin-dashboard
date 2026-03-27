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

  menu: any[] = [
    { label: 'Dashboard', icon: '🏠', path: '/dashboard' },
    { label: 'Users', icon: '👥', path: '/users' },
    { label: 'Forms', icon: '📝', path: '/forms' },
    { label: 'Tables', icon: '📋', path: '/tables' },
    { label: 'UI Elements', icon: '🧩', path: '/ui-elements' },
    { label: 'Charts', icon: '📉', path: '/charts' },
    { 
      label: 'Authentication', 
      icon: '🔒', 
      expanded: false,
      children: [
        { label: 'Sign In', path: '/login' },
        { label: 'Sign Up', path: '/signup' },
        { label: 'Error 404', path: '/404' }
      ]
    },
    { label: 'Settings', icon: '⚙️', path: '/settings' },
  ];

  toggle() {
    this.collapsed.update(v => !v);
  }

  toggleSubmenu(item: any) {
    if (item.children) {
      item.expanded = !item.expanded;
      if (item.expanded && this.collapsed()) {
        this.collapsed.set(false);
      }
    }
  }
}
