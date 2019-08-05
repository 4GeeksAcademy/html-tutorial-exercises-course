const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('<a> tag should open in new window', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

   it('Two (2) <a> exists', function () {
        expect(document.querySelectorAll("a").length).toBe(2)
    })

       it('Added <a> should have an absolute href path', function () {
           for(let i=0; i<document.querySelectorAll("a").length;i++){
        expect(document.querySelectorAll("a")[1].href).toBe("https://www.google.com/")
           }
    })


});
