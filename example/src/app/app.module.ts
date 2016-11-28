import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2ImgFallbackModule } from 'ng2-img-fallback';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2ImgFallbackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
