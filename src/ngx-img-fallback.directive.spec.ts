import {
  async,
  addProviders,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import { ImgFallbackDirective } from './ngx-img-fallback.directive';

@Component({
  selector: 'test-component',
  template: `<div src-fallback></div>`
})
class TestComponent {}

describe('Ng2ImgFallback Directive', () => {
  beforeEach(() => addProviders([]));

  it('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
    });
  })));
});
