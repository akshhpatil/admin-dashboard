import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { User } from '../../core/types/user';
import { ToastService } from '../../core/services/toast.service';
import { TableComponent, TableColumn } from '../../shared/ui/table/table';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, TableComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  columns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'isActive', label: 'Active' }
  ];

  // Static array so the dashboard works fully offline / as a template
  users: User[] = [
    { id: 1 as any, name: 'Alice Smith', email: 'alice@company.com', role: 'admin', isActive: true },
    { id: 2 as any, name: 'Robert Jones', email: 'robert@company.com', role: 'manager', isActive: true },
    { id: 3 as any, name: 'Charlie Clark', email: 'charlie@company.com', role: 'viewer', isActive: false },
    { id: 4 as any, name: 'Diana Prince', email: 'diana@company.com', role: 'manager', isActive: true },
    { id: 5 as any, name: 'Evan Wright', email: 'evan@company.com', role: 'viewer', isActive: true },
  ];

  search = '';

  showModal = false;
  isEdit = false;
  currentUser: Partial<User> = {};

  constructor(
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    // No API call required, loaded from static memory 
  }

  openCreate() {
    this.isEdit = false;
    this.currentUser = { isActive: true, role: 'viewer' };
    this.showModal = true;
  }

  openEdit(user: User) {
    this.isEdit = true;
    this.currentUser = { ...user };
    this.showModal = true;
  }

  save() {
    if (!this.currentUser.name || !this.currentUser.email || !this.currentUser.role) {
      this.toast.open('Name, email and role are required', 'error');
      return;
    }

    if (this.isEdit && this.currentUser.id != null) {
      // Update locally
      const index = this.users.findIndex(u => u.id === this.currentUser.id);
      if (index !== -1) {
        this.users[index] = this.currentUser as User;
        this.toast.open('User updated locally', 'success');
      }
    } else {
      // Create locally
      const newId = this.users.length > 0 ? Math.max(...this.users.map(u => Number(u.id) || 0)) + 1 : 1;
      const newUser = { ...this.currentUser, id: newId as any } as User;
      this.users.push(newUser);
      this.toast.open('User created locally', 'success');
    }
    this.showModal = false;
  }

  delete(user: User) {
    if (!confirm(`Delete user ${user.name}?`)) return;

    // Delete locally
    this.users = this.users.filter(u => u.id !== user.id);
    this.toast.open('User deleted locally', 'success');
  }

  get filteredUsers() {
    const term = this.search.toLowerCase().trim();
    if (!term) return this.users;
    
    return this.users.filter(
      u =>
        u.name.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term)
    );
  }
}
