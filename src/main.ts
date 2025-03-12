import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { retryErrorInterceptor } from './app/tools/interceptor/retry-error.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        retryErrorInterceptor
      ])
    )
  ]
}).catch(err => console.error(err));
