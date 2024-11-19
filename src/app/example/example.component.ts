import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent implements OnInit {
  interval!: NodeJS.Timeout;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.AutoSlide();
    }
  }
  images = [
    {
      id: 1,
      imageSrc: '/Image/sarvfaraz.jpg',
      imageAlt: 'نرم افزار سپیدز',
      header: 'طراحی وب سایت',
      title: 'شرکت سروفراز',
      href: 'https://sarvfaraz.com/',
    },
    {
      id: 2,
      imageSrc: '/Image/eiren.jpg',
      imageAlt: 'نرم افزار ارایشگاهی',
      header: 'طراحی وب سایت',
      title: 'نرم افزار آرایشگاهی ایرن',
      href: 'https://erencloud.com/',
    },
    {
      id: 3,
      imageSrc: '/Image/shop.sarvfaraz.jpg',
      imageAlt: 'فروشگاه سرو فراز',
      header: 'طراحی وب سایت',
      title: 'فروشگاه سروفراز',
      href: 'https://shop.sarvfaraz.com/',
    },
    {
      id: 4,
      imageSrc: '/Image/bigshwo.jpg',
      imageAlt: 'خرید کفش سایز بزرگ',
      header: 'طراحی وب سایت',
      title: 'فروشگاه کفش بیگ شو',
      href: 'https://iranbigshoes.ir/',
    },
    {
      id: 5,
      imageSrc: '/Image/zz.jpg',
      imageAlt: 'آموزش خیاطی',
      header: 'طراحی وب سایت',
      title: 'آموزش خیاطی ',
    },
  ];
  Prev() {
    let items = document.querySelectorAll('.template');
    document.querySelector('.templates')?.appendChild(items[0]);
    clearInterval(this.interval);
    this.AutoSlide();
  }
  Next() {
    let items = document.querySelectorAll('.template');
    document.querySelector('.templates')?.prepend(items[items.length - 1]);
    clearInterval(this.interval);
    this.AutoSlide();
  }
  AutoSlide() {
    const intervalTime = 4000;
    this.interval = setInterval(() => {
      this.Next();
    }, intervalTime);
  }
}
