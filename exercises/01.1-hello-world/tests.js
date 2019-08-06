const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('basic HTML structure', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

 it('<!DOCTYPE html> tag exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<!DOCTYPE html>")).not.toBe(-1)
    })
    it('<html> tag exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<html>")).not.toBe(-1)
    })
        it('<head> tag exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<head>")).not.toBe(-1)
    })
        it('<title> tag exists & innerHTML', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<title>")).not.toBe(-1)
           expect(document.querySelector("title").innerHTML).toBeTruthy()
    })
      it('<body> tag exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<body>")).not.toBe(-1)
    })


});
