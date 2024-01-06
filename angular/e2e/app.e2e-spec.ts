import { AspNetCrudTemplatePage } from './app.po';

describe('AspNetCrud App', function() {
  let page: AspNetCrudTemplatePage;

  beforeEach(() => {
    page = new AspNetCrudTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
