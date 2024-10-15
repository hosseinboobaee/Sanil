import { CUSTOM_ELEMENTS_SCHEMA, Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports:[MatButtonModule,RouterLink ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas :[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SliderComponent {

  }
