import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  //readonly panelOpenState = signal(false);
constructor(){

}
items = [
  { id:1,title: ' ساخت سایت با وردپرس چقدر زمانبر است؟ ', content: 'برای استفاده از خدمات طراحی سایت و یا سایر خدمات می‌توانید از طریق تماس با کارشناسان ارتباط برقرار کنید و یا می‌توانید شماره تماس خود در قسمت زیر وارد نمایید تا کارشناسان ما در کمتر از 24 ساعت با شما تماس بگیرند.', isOpen: false },
  { id:2,title: ' چگونه میتوانم از خدمات مشاوره سئو وبسایت استفاده کنم؟ ', content: 'برای استفاده از خدمات مشاوره طراحی سایت میتوانید با تکمیل فرم مشاوره و ارتباط با کارشناسان ما بهترین راهنمایی ها را در زمینه طراحی سایت برخوردار شوید', isOpen: false },
  { id:3,title: 'هزینه طراحی سایت با وردپرس چقدر است؟ ', content: 'هزینه طراحی سایت بسته به نوع انتخاب شما و درخواست های شما و میزان پشتیبانی و خدمات سئو از 5 میلیون تومان آغاز میشود', isOpen: false },
  { id:4,title: 'مدت زمان پشتیبانی از سایت طراحی شده چقدر است؟ ', content: ' بعد از زمان تحویل سایت شما مشتریان عزیز 6ما کاملا رایگان و به طور نامحدود شامل پشتیبانی خواهید بود', isOpen: false },
  { id:5,title: 'آیا طراحی سایت نیاز به پلن و استراتژی دارد؟ ', content: 'بله، طراحی سایت شما برحسب بیزینس شما شامل پلن ها و برنامه های متفاوتی خواهد بود', isOpen: false },
  { id:6,title: 'کدام فروشگاه و یا شرکت میتوانند از وردپرس استفاده کنند؟', content: 'در واقع تمام فروشگاه ها و شرکت ها میتوانند از وردپرس استفاده کنند که بر حسب نیاز فروشگاه یا شرکت از خدمات ورودپرس یا طراحی اختصاصی برخوردار میشوند', isOpen: false }
  ];


toggleItem(index: number) {
  this.items.forEach((item, i) => {
  if (i === index) {
  item.isOpen = !item.isOpen;
  } else {
  item.isOpen = false;
  }
  });
  }
}
