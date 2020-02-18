const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

 it('Add a opening strong tag <strong>', function () {
    let a = document.documentElement.innerHTML = html.toString()
    expect(a.indexOf("<strong>")).not.toBe(-1)
});
it('Add a closing strong tag </strong>', function () {
    let a = document.documentElement.innerHTML = html.toString()
    expect(a.indexOf("</strong>")).not.toBe(-1)
});
 it('Add a opening strong tag <span>', function () {
    let a = document.documentElement.innerHTML = html.toString()
    expect(a.indexOf("<span>")).not.toBe(-1)
});
it('Add a closing strong tag </span>', function () {
    let a = document.documentElement.innerHTML = html.toString()
    expect(a.indexOf("</span>")).not.toBe(-1)
});