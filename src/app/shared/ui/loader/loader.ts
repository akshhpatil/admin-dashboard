import { Component } from '@angular/core';

import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.css'
})
export class LoaderComponent {
  constructor(public loader: LoaderService) {}
}
