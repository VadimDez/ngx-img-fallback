import { Ng2ImgFallbackPage } from './app.po';

describe('ng2-img-fallback App', function() {
  let page: Ng2ImgFallbackPage;

  beforeEach(() => {
    page = new Ng2ImgFallbackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-img-fallback works!');
  });
});
