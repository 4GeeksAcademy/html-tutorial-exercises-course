const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('basic HTML structure', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

         it('order of HTML tags', function () {
        let a = document.documentElement.innerHTML = html.toString()
        let b = a.indexOf("<!DOCTYPE html>")
        let c = a.indexOf("<html>")
        let f = a.indexOf("<body>")
        let h = a.indexOf("<h1>")

        expect(b).toBe(0)
        expect(b).toBeLessThan(c)
        expect(c).toBeLessThan(f)
        expect(f).toBeLessThan(h)

    })

 it('<!DOCTYPE html> tag exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<!DOCTYPE html>")).not.toBe(-1)
    })
    it('<html> tag exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<html>")).not.toBe(-1)
    })
        it('<head> & <title> cannot exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<head>")).toBe(-1)
            expect(a.indexOf("<title>")).toBe(-1)
    })

      it('<body> tag exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<body>")).not.toBe(-1)
    })
     it('<h1> tag exists with your name', function () {
     let a = document.querySelector("h1")
           expect(a.innerHTML).toBeTruthy()
    })


});
