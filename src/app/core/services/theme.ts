import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  // Detect dark mode from localStorage
  isDark = signal<boolean>(
    typeof window !== 'undefined' &&
    localStorage.getItem('theme') === 'dark'
  );

  constructor() {
    // Apply theme automatically when the signal changes
    effect(() => {
      if (typeof document === 'undefined') return;

      const html = document.documentElement;

      if (this.isDark()) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  toggle() {
    this.isDark.update(v => !v);
  }
}
