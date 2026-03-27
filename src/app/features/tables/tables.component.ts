import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Pending' | 'Suspended';
  avatar: string;
  lastLogin: string;
}

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  
  // Fake users data
  allUsers: User[] = [
    { id: 1, name: 'Alex Johnson', email: 'alex.j@example.com', role: 'Admin', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d', lastLogin: '2 mins ago' },
    { id: 2, name: 'Sarah Miller', email: 'sarah.m@example.com', role: 'Editor', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', lastLogin: '1 hour ago' },
    { id: 3, name: 'Michael Chen', email: 'm.chen@example.com', role: 'User', status: 'Pending', avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d', lastLogin: 'Never' },
    { id: 4, name: 'Emily Davis', email: 'emily.d@example.com', role: 'User', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d', lastLogin: 'Yesterday' },
    { id: 5, name: 'James Wilson', email: 'j.wilson@example.com', role: 'User', status: 'Suspended', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026023d', lastLogin: '1 week ago' },
    { id: 6, name: 'Olivia Martinez', email: 'olivia.m@example.com', role: 'Editor', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', lastLogin: '3 days ago' },
  ];

  // signals for state management
  searchQuery = signal('');
  activeTab = signal<'All' | 'Active' | 'Pending' | 'Suspended'>('All');

  // Computed data based on filters
  filteredUsers = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const tab = this.activeTab();
    
    return this.allUsers.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query);
      const matchesTab = tab === 'All' || user.status === tab;
      return matchesSearch && matchesTab;
    });
  });

  setTab(tab: 'All' | 'Active' | 'Pending' | 'Suspended') {
    this.activeTab.set(tab);
  }

  updateSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
  }
}
