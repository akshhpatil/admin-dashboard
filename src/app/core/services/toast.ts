import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  message = signal('');
  type = signal<'success' | 'error' | 'info'>('info');
  show = signal(false);

  open(message: string, type: 'success' | 'error' | 'info' = 'info') {
    this.message.set(message);
    this.type.set(type);
    this.show.set(true);

    setTimeout(() => this.show.set(false), 3000);
  }
}
