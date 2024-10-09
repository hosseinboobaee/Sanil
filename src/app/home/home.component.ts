import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { PoosterComponent } from '../../pooster/pooster.component';
import { WebGoodComponent } from '../../web-good/web-good.component';
import { ServicesComponent } from '../../services/services.component';
import { IconComponent } from '../../icon/icon.component';
import { LiseningComponent } from '../../lisening/lisening.component';
import { ModelComponent } from '../../model/model.component';
import { ExampleComponent } from '../../example/example.component';
import { VeblogComponent } from '../../veblog/veblog.component';
import { QuestionComponent } from '../../question/question.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
    PoosterComponent,
    WebGoodComponent,
    ServicesComponent,
    IconComponent,
    LiseningComponent,
    ModelComponent,
    ExampleComponent,
    VeblogComponent,
    QuestionComponent,
    FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
