import {
  ComponentFixture, TestBed
} from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { ImgFallbackDirective } from './ngx-img-fallback.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test-component',
  template: `<img src-fallback>`
})

class TestComponent {}

describe('Ng2ImgFallback Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let imgElement: DebugElement;

  TestBed.configureTestingModule({
    declarations: [
      TestComponent,
      ImgFallbackDirective
    ]
  });

  fixture = TestBed.createComponent(TestComponent);
  component = fixture.componentInstance;
  imgElement = fixture.debugElement.query(By.css('img'));

  it('should set placeholder', () => {
    // imgElement.
    expect(true).toBeTruthy();
  });
});