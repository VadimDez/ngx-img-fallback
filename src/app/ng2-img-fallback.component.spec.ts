import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2ImgFallbackAppComponent } from '../app/ng2-img-fallback.component';

beforeEachProviders(() => [Ng2ImgFallbackAppComponent]);

describe('App: Ng2ImgFallback', () => {
  it('should create the app',
      inject([Ng2ImgFallbackAppComponent], (app: Ng2ImgFallbackAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-img-fallback works!\'',
      inject([Ng2ImgFallbackAppComponent], (app: Ng2ImgFallbackAppComponent) => {
    expect(app.title).toEqual('ng2-img-fallback works!');
  }));
});
