/**
 * Created by vadimdez on 27/11/2016.
 */
import { NgModule } from '@angular/core';
import { ImgFallbackDirective } from './ng2-img-fallback.directive';

@NgModule({
  declarations: [ImgFallbackDirective],
  exports: [ImgFallbackDirective]
})

export class ImgFallbackModule {}
