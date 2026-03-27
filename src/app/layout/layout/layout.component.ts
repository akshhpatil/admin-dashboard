import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { LoaderComponent } from '../../shared/components/loader/loader';
import { ToastComponent } from '../../shared/components/toast/toast';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,HeaderComponent,LoaderComponent,ToastComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {}
