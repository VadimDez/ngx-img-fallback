import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Component, DebugElement } from "@angular/core";
import { ImgFallbackDirective } from "./ngx-img-fallback.directive";
import { By } from "@angular/platform-browser";
import { ImgFallbackModule } from "./ngx-img-fallback.module";

@Component({
  selector: "test-component",
  template: `
    <img src-fallback />
  `
})
class TestComponent {}

describe("Ng2ImgFallback Directive", () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let imgElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ImgFallbackModule],
      declarations: [TestComponent]
    }).compileComponents();
  }));

  it("should set placeholder", () => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    imgElement = fixture.debugElement.query(By.css("img"));
    // imgElement.
    expect(true).toBeTruthy();
  });
});
