import { Injectable, inject } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  private toast = inject(ToastService);

  handleError(error: any) {
    console.error('An error occurred:', error);
    
    // Check if it's an HTTP error with a message
    const message = error?.error?.message || error?.message || 'An unexpected error occurred';
    
    this.toast.open(message, 'error');
  }
}
