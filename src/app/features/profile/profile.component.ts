import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'Alex Johnson',
    role: 'Senior Frontend Engineer',
    location: 'San Francisco, CA',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    coverImage: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2675&auto=format&fit=crop',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    followers: 1420,
    following: 384,
    projects: 42,
    about: 'Passionate frontend engineer with 8+ years of experience building scalable web applications. Minimalist design enthusiast and open-source contributor. Always learning and exploring new web technologies.'
  };

  activeTab: 'overview' | 'projects' | 'activity' = 'overview';

  skills = [
    { name: 'Angular', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'RxJS', level: 80 },
    { name: 'Node.js', level: 70 },
  ];

  recentActivity = [
    { id: 1, action: 'Pushed a commit to', target: 'admin-dashboard-v2', time: '2 hours ago', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { id: 2, action: 'Commented on issue', target: '#42 in angular/angular', time: '5 hours ago', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    { id: 3, action: 'Published a new package', target: '@ng-premium/ui', time: '1 day ago', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  ];

  setTab(tab: 'overview' | 'projects' | 'activity') {
    this.activeTab = tab;
  }
}
