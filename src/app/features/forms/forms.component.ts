import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  personalInfo = {
    firstName: '',
    lastName: '',
    country: 'United States',
    streetAddress: '',
    city: '',
    state: '',
    zip: ''
  };

  onSubmitContact() {
    console.log('Contact form submitted:', this.contactForm);
    alert('Contact form submitted!');
  }

  onSubmitPersonal() {
    console.log('Personal info submitted:', this.personalInfo);
    alert('Personal info submitted!');
  }
}
