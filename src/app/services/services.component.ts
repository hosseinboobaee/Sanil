import { animate, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
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
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class ServicesComponent implements OnInit{
  isHover:boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object){

  }
  ngOnInit() {
    // if (isPlatformBrowser(this.platformId)) {
    //   const btn = document.querySelector('.box1') as HTMLElement | null;
    //   if (btn && btn.textContent) {
    //     const text: string = btn.textContent.trim();
    //     btn.innerHTML = '';  // حذف محتوای فعلی دکمه
      
    //     // تقسیم متن به کلمات به جای حروف
    //     const words = text.split(' '); // جدا کردن کلمات با استفاده از فاصله
      
    //     for (const word of words) {
    //       const span = document.createElement('span');
    //       span.textContent = word;
    //       span.classList.add("word-span");
    //       btn.appendChild(span);
      
    //       // اضافه کردن فاصله بین کلمات
    //       const space = document.createTextNode('\u00A0');
    //       btn.appendChild(space);
    //     }
    //     let spans = btn.querySelectorAll('span');
    //    btn.addEventListener('mouseenter' , ()=>{
    //     spans.forEach((index:any) =>{
    //       setTimeout(() => {
    //         this.isHover = true;
    //       }, index * 50);
    //     })
    //    })

    //    btn.addEventListener('mouseleave' , ()=>{
    //     spans.forEach((index:any) =>{
    //       setTimeout(() => {
    //         this.isHover = false
    //       }, index * 50);
    //     })
    //    })
    //   }
    // }
  }
  isVisible: boolean = false;

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

  style(e: MouseEvent) {
    let btn = document.querySelector('.box') as HTMLElement;

    // let x = e.pageX - btn.offsetLeft;
    // let y = e.pageY - btn.offsetTop;
    let rect = btn.getBoundingClientRect();
    let x = e.pageX - rect.left;
    let y = e.pageY - rect.top;

    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  }

}
