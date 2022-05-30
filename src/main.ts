import { enableProdMode, importProvidersFrom } from "@angular/core";
import { environment } from "./environments/environment";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app/app.routes";
import { ServiceWorkerModule } from "@angular/service-worker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
      ServiceWorkerModule.register("ngsw-worker.js", {
        enabled: environment.production,
        registrationStrategy: "registerWhenStable:30000",
      })
    ),
  ],
}).catch((reason) => console.error(reason));
