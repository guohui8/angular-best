import { AngularBestPage } from './app.po';

describe('angular-best App', () => {
  let page: AngularBestPage;

  beforeEach(() => {
    page = new AngularBestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
