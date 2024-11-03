import { isPlatformBrowser, NgClass, NgFor, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

export interface carouselimage {
  imageSrc: string;
  imageAlt: string;
  Id: number;
}
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MatButtonModule, RouterLink, NgIf, NgClass, NgFor],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() images: carouselimage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 5000;
  selectedIndex = 0;
  private intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (this.autoSlide && isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  selectImage(index: number) {
    this.selectedIndex = index;
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  onNextClick() {
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
  }

}
