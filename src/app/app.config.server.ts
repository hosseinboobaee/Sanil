import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideToastr } from 'ngx-toastr';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), 
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
