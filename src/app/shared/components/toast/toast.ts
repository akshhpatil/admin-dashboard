import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { ToastService } from '../../../core/services/toast';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class ToastComponent {
  constructor(public toast: ToastService) {}
}
