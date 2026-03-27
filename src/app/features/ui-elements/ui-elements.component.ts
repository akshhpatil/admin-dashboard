import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-elements',
  standalone: true,
  imports: [],
  templateUrl: './ui-elements.component.html',
  styleUrls: ['./ui-elements.component.css']
})
export class UiElementsComponent {

  triggerAlert(type: string) {
    alert(`This is a ${type} alert action!`);
  }

}
