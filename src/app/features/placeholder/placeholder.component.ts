import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  template: `
    <div class="h-[75vh] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
      <div class="w-24 h-24 mb-6 rounded-3xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-500 shadow-sm border border-slate-100 dark:border-slate-700 transform transition-transform hover:scale-105">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      </div>
      <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">{{ title }}</h2>
      <p class="text-[15px] font-medium text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
        This module is part of the Ultimate Angular Boilerplate layout. The underlying UI components and services are ready to be integrated.
      </p>
      <button class="mt-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-[14px] font-bold px-6 py-2.5 rounded-xl shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors active:scale-95">
        Read Documentation
      </button>
    </div>
  `
})
export class PlaceholderComponent {
  title = '';
  
  constructor() {
    const route = inject(ActivatedRoute);
    route.data.subscribe(data => {
      this.title = data['title'] || 'Coming Soon';
    });
  }
}
