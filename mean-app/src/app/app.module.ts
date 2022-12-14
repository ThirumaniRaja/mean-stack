import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RxjsComponent } from './components/Rxjs-Demo/rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
