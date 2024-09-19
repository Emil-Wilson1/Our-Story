import { Component } from '@angular/core';
import { ReviewComponent } from "../review/review.component";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [ReviewComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

}
