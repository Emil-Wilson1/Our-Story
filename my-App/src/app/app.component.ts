import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { ShiftBusinessComponent } from "./core/components/shift-business/shift-business.component";
import { OurServicesComponent } from './core/components/our-services/our-services.component';
import { OurStoryComponent } from './core/components/our-story/our-story.component';
import { TestimonialComponent } from "./core/components/testimonial/testimonial.component";
import { FooterComponent } from "./core/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ShiftBusinessComponent, OurServicesComponent, OurStoryComponent, TestimonialComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-App';
}
