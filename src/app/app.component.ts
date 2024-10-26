import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,
      HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas :[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
  title = 'my-app';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('App is running in the browser');
    } else {
      console.log('App is running on the server');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    console.log('Scroll position:', scrollPosition)
    }
}
