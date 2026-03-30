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

  advancedForm = {
    selectedFruits: ['Apple', 'Mango'] as string[],
    department: 'Engineering',
    birthDate: '',
    meetingTime: '',
    appointmentDateTime: ''
  };

  fruitOptions = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango', 'Orange', 'Strawberry'];
  departments = ['Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Design'];

  toggleFruit(fruit: string) {
    const index = this.advancedForm.selectedFruits.indexOf(fruit);
    if (index > -1) {
      this.advancedForm.selectedFruits.splice(index, 1);
    } else {
      this.advancedForm.selectedFruits.push(fruit);
    }
  }

  isFruitSelected(fruit: string): boolean {
    return this.advancedForm.selectedFruits.includes(fruit);
  }

  onSubmitContact() {
    console.log('Contact form submitted:', this.contactForm);
    alert('Contact form submitted!');
  }

  onSubmitPersonal() {
    console.log('Personal info submitted:', this.personalInfo);
    alert('Personal info submitted!');
  }

  onSubmitAdvanced() {
    console.log('Advanced form submitted:', this.advancedForm);
    alert('Advanced form submitted!\n' + JSON.stringify(this.advancedForm, null, 2));
  }
}
