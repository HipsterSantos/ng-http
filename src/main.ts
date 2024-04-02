// import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModuleModule } from './app/app.module.module';


platformBrowserDynamic().bootstrapModule(AppModuleModule)
.catch(console.error)

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
