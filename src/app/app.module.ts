import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ImgFallbackModule } from "./modules/ngx-img-fallback";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ImgFallbackModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
