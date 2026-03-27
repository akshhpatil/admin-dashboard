import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      
      <!-- Ambient Background Orbs -->
      <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 dark:opacity-20 pointer-events-none"></div>
      <div class="absolute bottom-[-10%] right-[10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 dark:opacity-20 pointer-events-none"></div>

      <div class="text-center z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
         <h1 class="text-[150px] font-black text-slate-800 dark:text-white mb-2 leading-none tracking-tighter drop-shadow-sm">404</h1>
         <h2 class="text-3xl font-extrabold text-slate-600 dark:text-slate-300 mb-6 tracking-tight">Page Not Found</h2>
         <p class="text-[15px] text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">The component or module you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
         
         <a routerLink="/dashboard" class="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 group">
            <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Return to Dashboard
         </a>
      </div>
    </div>
  `
})
export class NotFoundComponent {}
