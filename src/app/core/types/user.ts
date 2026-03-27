export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'viewer';
  isActive: boolean;
  createdAt?: string;
}
