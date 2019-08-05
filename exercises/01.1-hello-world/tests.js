const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('basic HTML structure', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

 it('<!DOCTYPE html> tag exists', function () {
     console.log(document.querySelector("HEAD"))
       expect(document.querySelector("HEAD")).toBeTruthy()

    })


});
