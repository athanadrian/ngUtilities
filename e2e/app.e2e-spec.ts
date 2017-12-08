import { NgTscPage } from './app.po';

describe('ng-tsc App', () => {
  let page: NgTscPage;

  beforeEach(() => {
    page = new NgTscPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
