import { NgClass, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

export interface carouselimage {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-slider',
  standalone: true,
  imports:[MatButtonModule,RouterLink,NgIf,NgClass ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas :[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SliderComponent {
  ngOnInit() {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }
  @Input() images: carouselimage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;
  selectedIndex = 0;

  selectImage(index: number) {
    this.selectedIndex = index;
  }
  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
  }
