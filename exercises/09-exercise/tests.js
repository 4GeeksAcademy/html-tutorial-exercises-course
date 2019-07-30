const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('Replicate Nested Tag Example', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

    it('Order of html tags', function () {
       if(document.querySelector("h1")){
        expect([].slice.call(document.querySelectorAll("h1,h2,p,i,a"))[0,2].tagName).toStrictEqual(document.querySelector("h1").tagName)
       }
         if(document.querySelector("h2")){
        expect([].slice.call(document.querySelectorAll("h1,h2,p,i,a"))[5].tagName).toStrictEqual(document.querySelector("h2").tagName)
       }
        if(document.querySelector("p")){
        expect([].slice.call(document.querySelectorAll("h1,h2,p,i,a"))[3].tagName).toStrictEqual(document.querySelector("p").tagName)
       }
         if(document.querySelector("i")){
        expect([].slice.call(document.querySelectorAll("h1,h2,p,i,a"))[1].tagName).toStrictEqual(document.querySelector("i").tagName)
       }
         if(document.querySelector("a")){
        expect([].slice.call(document.querySelectorAll("h1,h2,p,i,a"))[4].tagName).toStrictEqual(document.querySelector("a").tagName)
       }

    })

 it('<h1> tag exists', function () {
        expect(document.querySelectorAll("h1").length).toBe(2)
    })
     it('<i> tag exists', function () {
        expect(document.querySelector("i")).toBeTruthy()
    })
    it('<h2> tag exists', function () {
        expect(document.querySelector("h2")).toBeTruthy()
    })
     it('<p> tag exists', function () {
        expect(document.querySelectorAll("p").length).toBe(2)
    })
     it('<a> tag exists', function () {
        expect(document.querySelector("a")).toBeTruthy()
    })

      it('<h1> innerHTML', function () {
          for(let i=0;i<document.querySelectorAll("h1").length;i++){
              if (i=== 0){
        expect([].slice.call(document.querySelectorAll("h1"))[i].innerHTML).toBe("Hello world.<i> italic word.</i>")
              }
               if (i=== 2){
        expect([].slice.call(document.querySelectorAll("h1"))[i].innerHTML).toBe("Hello world.<p>Italic word.</p>")
              }
          }
    })

    it('<a> inner HTML', function () {
        expect(document.querySelector("a").innerHTML).toBe("<h2>Hello</h2><p>Hello This is a test</p>")})



});
