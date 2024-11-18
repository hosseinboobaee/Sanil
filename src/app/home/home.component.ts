import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { HeaderComponent } from '../header/header.component';
import { WebGoodComponent } from '../web-good/web-good.component';
import { ServicesComponent } from '../services/services.component';
import { IconComponent } from '../icon/icon.component';
import { LiseningComponent } from '../lisening/lisening.component';
import { ModelComponent } from '../model/model.component';
import { ExampleComponent } from '../example/example.component';
import { QuestionComponent } from '../question/question.component';
import { FooterComponent } from '../footer/footer.component';
import { RequestComponent } from '../request/request.component';
import { MoshavereComponent } from '../moshavere/moshavere.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SliderComponent,
    WebGoodComponent,
    ServicesComponent,
    IconComponent,
    LiseningComponent,
    ModelComponent,
    ExampleComponent,
    QuestionComponent,
    FooterComponent,
    RequestComponent,
    MoshavereComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  constructor(){
    
  }
  images = [
    {
      imageSrc: '/Image/slider1.webp',
      imageAlt: 'طراحی وب سایت',
      Id: 1,
    },
    {
      imageSrc: '/Image/slider2.webp',
      imageAlt: 'طراحی منو',
      Id: 2,
    }
  ];
  test() {
    console.log(window.scrollY);
  }
}
