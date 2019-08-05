const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('<a> tag should open in new window', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

   it('<a> exists', function () {
        expect(document.querySelector("a")).toBeTruthy()
    })

       it('<a> should have an innerHTML and an absolute href path to google', function () {
           const a = document.querySelector("a")
        expect(a.href).toBe("https://www.google.com/")
        expect(a.innerHTML).toBeTruthy()
    })


});
