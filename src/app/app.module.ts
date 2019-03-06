import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TOKEN_SAMPLE } from './token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: TOKEN_SAMPLE, useValue: 'InjectionToken Test'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
