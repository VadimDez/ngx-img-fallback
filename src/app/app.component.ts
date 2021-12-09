import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  brokenPlaceholder = "broken_placeholder";
  workingPlaceholder = "https://via.placeholder.com/100x100";

  onLoad(isFallback: boolean) {
    console.log(isFallback);
  }
}
