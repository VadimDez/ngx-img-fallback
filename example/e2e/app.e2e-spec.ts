import { Example2Page } from './app.po';

describe('example App', function() {
  let page: Example2Page;

  beforeEach(() => {
    page = new Example2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
