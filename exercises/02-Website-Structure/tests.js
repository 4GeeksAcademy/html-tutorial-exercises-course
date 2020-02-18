const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

 it('<!DOCTYPE html> tag should exist', function () {
    let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<!DOCTYPE html>")).not.toBe(-1)
})
it('<html> tag should exists', function () {
    let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<html")).not.toBe(-1)
})
it('<head> tag should exists', function () {
let a = document.documentElement.innerHTML = html.toString()
    expect(a.indexOf("<head>")).not.toBe(-1)
})
it('<title> tag exists and the innerHTML needs to be "Hello World"', function () {
    let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<title>")).not.toBe(-1)
        expect(document.querySelector("title").innerHTML).toBe("Hello World")
})
it('<body> tag exists', function () {
let a = document.documentElement.innerHTML = html.toString()
    expect(a.indexOf("<body")).not.toBe(-1)
})
    
    describe('basic HTML structure', function () {
        beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
        afterEach(() => { jest.resetModules(); });
        
        it('The DOCTYPE needs to be added begore the <html> tag', function () {
            let a = document.documentElement.innerHTML = html.toString()
            let b = a.indexOf("DOCTYPE")
            let c = a.indexOf("<html")
            
            expect(b).toBeLessThan(c)
        })
        it('The <head> tag needs to be added imidialty after the html opening tag', function () {
            let a = document.documentElement.innerHTML = html.toString()
            let c = a.indexOf("<html")
            let d = a.indexOf("<head>")
            
            expect(c).toBeLessThan(d)
        })
        it('The <title> opening and closing tags need to be added inside the <head></head> tags', function () {
            let a = document.documentElement.innerHTML = html.toString()
            let d = a.indexOf("<head>")
            let e = a.indexOf("<title>")
            
            expect(d).toBeLessThan(e)
        })
        it('The <body> opening tag needs to be added immediately after the </header> closing tag', function () {
            let a = document.documentElement.innerHTML = html.toString()
            let e = a.indexOf("</head>")
            let f = a.indexOf("<body>")
            
            expect(e).toBeLessThan(f)
        })
    });
        
        