const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('<a> tag should exist', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

 it('<a> tag exists', function () {
        expect(document.querySelector("a")).toBeTruthy()
    })

     it('<a> innerHTML exists', function () {
        expect(document.querySelector("a").innerHTML).toBe("Click me to search on google")
    })

     it('<a href = https://www.google.com/ > exists', function () {
        expect(document.querySelector("a").href).toBe("https://www.google.com/")
    })

});
