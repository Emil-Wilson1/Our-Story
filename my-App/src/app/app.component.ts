import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { ShiftBusinessComponent } from "./core/components/shift-business/shift-business.component";
import { OurServicesComponent } from './core/components/our-services/our-services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ShiftBusinessComponent,OurServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-App';
}
