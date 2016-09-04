/**
 * Created by vadimdez on 15/08/16.
 */
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';
import { Ng2ImgFallback } from 'ng2-img-fallback';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Ng2ImgFallback],
  bootstrap: [AppComponent]
})
export class AppModule {}
