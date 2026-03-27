import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#ebe6ff] via-white to-[#cce8eb] dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      
      <div class="relative w-full max-w-[420px] z-10 animate-in fade-in duration-500">
        <div class="bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-none border border-slate-100 dark:border-slate-700">
          
          <div class="text-center mb-8">
            <h2 class="text-3xl font-black text-slate-900 dark:text-white mb-2">Create Account</h2>
            <p class="text-[13px] text-slate-500 dark:text-slate-400">Join the ultimate boilerplate platform today.</p>
          </div>

          <div class="space-y-4">
            
            <div>
              <label class="block text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <input type="text" [(ngModel)]="name" class="block w-full pl-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm placeholder:text-slate-300" placeholder="John Doe" />
              </div>
            </div>

            <div>
              <label class="block text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                </div>
                <input type="email" [(ngModel)]="email" class="block w-full pl-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm placeholder:text-slate-300" placeholder="hello@company.com" />
              </div>
            </div>

            <div>
              <label class="block text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-2">Password</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <input type="password" [(ngModel)]="password" class="block w-full pl-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm placeholder:text-slate-300" placeholder="••••••••" />
              </div>
            </div>

            <button class="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-bold flex items-center justify-center gap-2 py-3 rounded-xl shadow-md transition-all active:scale-[0.98] mt-6">
              Sign Up
            </button>
            
            <p class="text-center text-[13px] text-slate-500 mt-4 pt-2">
              Already have an account? <a routerLink="/login" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-bold ml-1">Sign In instead</a>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  `
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  error = '';
}
