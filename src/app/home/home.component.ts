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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  img = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'person2',
    },
  ]
  test(){
    console.log(window.scrollY);
    
  }

}
