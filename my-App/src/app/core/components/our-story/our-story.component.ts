import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent {
  images: string[] = [
    '/assets/OurStory1.png',
    '/assets/OurStory2.png',
    '/assets/OurStory3.png'
  ];
  
  currentImageIndex: number = 0;
  
  ngOnInit() {
    this.startImageSwap();
    this.startCounting();
  }

  startImageSwap() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 3000); 
  }


  stats: { value: number, target: number }[] = [
    { value: 0, target: 1000 }, 
    { value: 0, target: 2000 },
    { value: 0, target: 3000 }
  ];



  startCounting() {
    this.stats.forEach(stat => {
      const interval = setInterval(() => {
        if (stat.value < stat.target) {
          stat.value += Math.ceil(stat.target / 100); 
        } else {
          stat.value = stat.target;
          clearInterval(interval);
        }
      }, 20); 
    });
  }
}
