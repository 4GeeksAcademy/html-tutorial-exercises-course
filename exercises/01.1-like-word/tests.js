const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

 it('Add a opening tag <p>', function () {
    let a = document.documentElement.innerHTML = html.toString()
    expect(a.indexOf("<p>")).not.toBe(-1)
});
it('Add a closing tag </p>', function () {
    let a = document.documentElement.innerHTML = html.toString()
    expect(a.indexOf("</p>")).not.toBe(-1)
});
 it('Add "HTML tags are similar to MS Word elements" between the <p> cosing tags → <p>HERE</p> ', function () {
    let p = document.querySelector("P")
    const _regex = /\s*HTML\s*tags\s*are\s*similar\s*to\s*MS\s*Word\s*elements\s*/gm;
    expect(_regex.test(p.innerHTML)).toBe(true);
});
