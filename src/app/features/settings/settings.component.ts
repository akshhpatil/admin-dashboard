import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  
  // Dummy settings state
  settings = {
    emailNotifications: true,
    smsAlerts: false,
    marketingEmails: true,
    twoFactor: false,
    publicProfile: true
  };

  constructor(public themeService: ThemeService) {}

  saveSettings() {
    alert("Settings saved successfully!");
  }
}
