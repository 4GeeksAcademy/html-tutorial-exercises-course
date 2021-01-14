const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('<a> tag should exist', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

 it('<a> tag exists', function () {
        const anchor = document.querySelector("a");
        expect(anchor).toBeTruthy()
    })

     it('<a> innerHTML exists and matches', function () {
        expect(document.querySelector("a").innerHTML).toBe("Click me to search on google")
    })

     it('The url should be absolute and not relative', function () {
         const anchor = document.querySelector("a").href;
        expect(anchor.indexOf("http://") > -1 || anchor.indexOf("https://") > -1).toBe(true)
    })

     it('The url should point to google', function () {
         const anchor = document.querySelector("a").href;
        expect(anchor.indexOf("google.com") > 0).toBe(true)
    })

});
