import Helpers from '../src/helpers';

describe('showMessage', () => {
  it('should insert message on html body', () => {
    document.body.innerHTML = `<div id="message"></div>`;

    Helpers.showMessage('ASD');

    expect(document.body.querySelector("#message").innerHTML)
      .toBe(`<p>ASD</p>`)
  });
});
