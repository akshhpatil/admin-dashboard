import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { LoaderService } from '../../../core/services/loader';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loader.html',
  styleUrl: './loader.css'
})
export class LoaderComponent {
  constructor(public loader: LoaderService) {}
}
