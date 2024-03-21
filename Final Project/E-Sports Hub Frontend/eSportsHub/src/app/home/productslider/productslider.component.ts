import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productslider',
  templateUrl: './productslider.component.html',
  styleUrls: ['./productslider.component.scss']
})
export class ProductsliderComponent implements OnInit {
  images = [
    { name: 'Tennis', link:"",path:'/assets/img/tennis.png'},
    { name: 'Football', link: "FootballComponent",path:'/assets/img/football.png'},
    { name: 'Gym', link: "GymComponent",path:'/assets/img/gym.png' },
    { name: 'Cycle', link: "",path:'/assets/img/cycle.png' }
  ];
  currentIndex = 0;
  slideWidth: number;
  interval: any;

  constructor(private router:Router) {
    // Calculate slide width based on number of images
    this.slideWidth = 400 / this.images.length;
  }

  ngOnInit() {
    // Start auto sliding
    this.startAutoSlide();
  }

  ngOnDestroy() {
    // Stop auto sliding when component is destroyed
    this.stopAutoSlide();
  }

  navigateToLink(link: string) {
    this.router.navigate([link]);
  }
  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Adjust the interval time (in milliseconds) as needed
  }

  stopAutoSlide() {
    clearInterval(this.interval);
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlidePosition();
    }
  }

  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.updateSlidePosition();
    } else {
      this.currentIndex = 0; // Loop back to the first slide
      this.updateSlidePosition();
    }
  }

  updateSlidePosition() {
    const slides = document.querySelector('.slides');
    if (slides) {
      const translateValue = `translateX(-${this.currentIndex * this.slideWidth}%)`;
      slides.setAttribute('style', `transform: ${translateValue}`);
    }
  }
}