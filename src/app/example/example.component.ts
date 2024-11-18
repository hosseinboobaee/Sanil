import { Component } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {

  images =[
    {
      id: 1,
      imageSrc:'/Image/sarvfaraz.jpg',
      imageAlt :'نرم افزار سپیدز',
      header:'طراحی وب سایت',
      title:'شرکت سروفراز',
      href:'https://sarvfaraz.com/'
    },
    {
      id: 2,
      imageSrc:'/Image/eiren.jpg',
      imageAlt :'نرم افزار ارایشگاهی',
      header:'طراحی وب سایت',
      title:'نرم افزار آرایشگاهی ایرن',
      href:'https://erencloud.com/'
    },
    {
      id: 3,
      imageSrc:'/Image/shop.sarvfaraz.jpg',
      imageAlt :'فروشگاه سرو فراز',
      header:'طراحی وب سایت',
      title:'فروشگاه سروفراز',
      href:'https://shop.sarvfaraz.com/'
    },
    {
      id: 4,
      imageSrc:'/Image/bigshwo.jpg',
      imageAlt :'خرید کفش سایز بزرگ',
      header:'طراحی وب سایت',
      title:'فروشگاه کفش بیگ شو',
      href:'https://iranbigshoes.ir/'
    },
    // {
    //   id: 5,
    //   imageSrc:'/Image/zz.jpg',
    //   imageAlt :'آموزش خیاطی',
    //   header:'طراحی وب سایت',
    //   title:'آموزش خیاطی '
    // },
  ];
}
