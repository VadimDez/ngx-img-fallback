export class Ng2ImgFallbackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-img-fallback-app h1')).getText();
  }
}
