import { SalesforceDemoPagePage } from './app.po';

describe('salesforce-demo-page App', function() {
  let page: SalesforceDemoPagePage;

  beforeEach(() => {
    page = new SalesforceDemoPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
