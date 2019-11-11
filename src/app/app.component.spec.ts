// import { ImgFallbackModule } from "./modules/ngx-img-fallback";
import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { ImgFallbackModule } from "./modules/ngx-img-fallback";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ImgFallbackModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'ngx-img-fallback'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual("ngx-img-fallback");
  // });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".short-description").textContent).toContain(
      "Load placeholder image on image error"
    );
  });
});
