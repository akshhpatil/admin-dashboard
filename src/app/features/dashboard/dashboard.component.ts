import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  // Weekly revenue data for CSS bar chart
  revenueData = [
    { day: 'Mon', amount: 1200, height: '40%' },
    { day: 'Tue', amount: 3100, height: '80%' },
    { day: 'Wed', amount: 2400, height: '65%' },
    { day: 'Thu', amount: 1800, height: '50%' },
    { day: 'Fri', amount: 4200, height: '100%' },
    { day: 'Sat', amount: 3800, height: '90%' },
    { day: 'Sun', amount: 2100, height: '60%' }
  ];

  // Recent transactions table
  transactions = [
    { id: '#ORD-001', customer: 'Alex Johnson', date: new Date('2026-03-27T10:30'), amount: 129.99, status: 'Completed' },
    { id: '#ORD-002', customer: 'Maria Garcia', date: new Date('2026-03-27T09:15'), amount: 49.00, status: 'Pending' },
    { id: '#ORD-003', customer: 'James Smith', date: new Date('2026-03-26T16:45'), amount: 999.00, status: 'Completed' },
    { id: '#ORD-004', customer: 'Linda Wu', date: new Date('2026-03-26T14:20'), amount: 15.50, status: 'Failed' },
    { id: '#ORD-005', customer: 'Robert Taylor', date: new Date('2026-03-26T11:05'), amount: 349.00, status: 'Completed' },
  ];

  // Activities feed
  activities = [
    { title: 'New user registered', time: '2 mins ago', type: 'user', color: 'blue' },
    { title: 'Order #ORD-001 shipped', time: '1 hour ago', type: 'order', color: 'emerald' },
    { title: 'Weekly report generated', time: '5 hours ago', type: 'report', color: 'purple' },
    { title: 'Server load warning', time: 'Yesterday', type: 'alert', color: 'rose' }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400';
      case 'Pending': return 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400';
      case 'Failed': return 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400';
      default: return 'bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-400';
    }
  }

  getActivityColorClass(color: string): string {
    switch(color) {
      case 'blue': return 'bg-blue-500 text-white';
      case 'emerald': return 'bg-emerald-500 text-white';
      case 'purple': return 'bg-purple-500 text-white';
      case 'rose': return 'bg-rose-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  }

}
