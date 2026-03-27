import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { User } from '../../core/types/user';
import { UserService } from '../../core/api/user.api';
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

  users: User[] = [];
  search = '';

  showModal = false;
  isEdit = false;
  currentUser: Partial<User> = {};

  constructor(
    private userService: UserService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.userService.getUsers().subscribe({
      next: users => (this.users = users),
      error: () => this.toast.open('Failed to load users', 'error')
    });
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
      this.userService.updateUser(this.currentUser.id, this.currentUser).subscribe({
        next: () => {
          this.toast.open('User updated', 'success');
          this.showModal = false;
          this.load();
        },
        error: () => this.toast.open('Failed to update user', 'error')
      });
    } else {
      const payload = this.currentUser as Omit<User, 'id'>;
      this.userService.createUser(payload).subscribe({
        next: () => {
          this.toast.open('User created', 'success');
          this.showModal = false;
          this.load();
        },
        error: () => this.toast.open('Failed to create user', 'error')
      });
    }
  }

  delete(user: User) {
    if (!confirm(`Delete user ${user.name}?`)) return;

    this.userService.deleteUser(user.id).subscribe({
      next: () => {
        this.toast.open('User deleted', 'success');
        this.load();
      },
      error: () => this.toast.open('Failed to delete user', 'error')
    });
  }

  get filteredUsers() {
    const term = this.search.toLowerCase().trim();
    return this.users.filter(
      u =>
        u.name.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term)
    );
  }
}
