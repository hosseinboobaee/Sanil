import { animate, style, transition, trigger } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgIf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class ServicesComponent {
    isVisible:boolean =false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('Scroll position:', window.scrollY); // برای بررسی مقدار اسکرول
    const number = window.scrollY;
    console.log(number);
    
    if (number >= 10) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}
