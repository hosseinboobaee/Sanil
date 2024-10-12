import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-company-web-site',
  standalone: true,
  imports: [HeaderComponent,
    FooterComponent
  ],
  templateUrl: './company-web-site.component.html',
  styleUrl: './company-web-site.component.scss'
})
export class CompanyWebSiteComponent {

}
