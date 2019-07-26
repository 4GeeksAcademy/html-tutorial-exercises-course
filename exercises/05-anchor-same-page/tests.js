const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('<a> tag should open in new window', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

   it('<a> exists', function () {
        expect(document.querySelectorAll("a").length).toBe(2)
    })


    it('<h2> id exist', function () {

        for(let i=0; i<document.querySelectorAll("h2").length;i++){
             expect(document.querySelectorAll("h2")[i].id).toBeTruthy()
        }
    })

        it('<a> should take user to end and beginning of website', function () {
            if ( document.querySelectorAll("a").length === 2) {
        for(let i=0; i<document.querySelectorAll("a").length;i++){
             expect(document.querySelectorAll("a")[i].href).toBeTruthy()
        }
            }

    })

});
