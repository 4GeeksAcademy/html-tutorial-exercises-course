const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');

describe('Format the exact same styles with pure html, use h1 headings, paragraph, strong, blockquote, ol and il', function () {

    beforeEach(() => { document.documentElement.innerHTML = html.toString()});
    afterEach(() => { jest.resetModules(); });

   it('Order of html tags', function () {
       if(document.querySelector("h1")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2,ul"))[0].tagName).toStrictEqual(document.querySelector("h1").tagName)
       }

        if(document.querySelector("h2")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2,ul"))[1,7].tagName).toStrictEqual(document.querySelector("h2").tagName)
       }

        if(document.querySelector("p")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2, ul"))[2,12].tagName).toStrictEqual(document.querySelector("p").tagName)
       }
        if(document.querySelector("ol")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2, ul"))[3].tagName).toStrictEqual(document.querySelector("ol").tagName)
       }
       if(document.querySelector("li")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2,ul"))[4,5,6,9,10,11].tagName).toStrictEqual(document.querySelector("li").tagName)
       }

       if(document.querySelector("ul")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2,ul"))[8].tagName).toStrictEqual(document.querySelector("ul").tagName)
       }
       if(document.querySelector("a")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2,ul"))[13].tagName).toStrictEqual(document.querySelector("a").tagName)
       }

    })
        it('<h1> Exist', function () {
         expect(document.querySelector("h1")).toBeTruthy()
      })

       it('<h2> Exist', function () {
         expect(document.querySelectorAll("h2").length).toBe(2)
      })
        it('<p> Exist', function () {
         expect(document.querySelectorAll("p").length).toBe(2)
      })
         it('<ol> Exist', function () {
         expect(document.querySelectorAll("ol")).toBeTruthy()
      })
      it('<ul> Exist', function () {
         expect(document.querySelector("ul")).toBeTruthy()
      })
       it('<li> Exist', function () {
         expect(document.querySelectorAll("li").length).toBe(6)
      })
      it('<a> Exist', function () {
         expect(document.querySelector("a")).toBeTruthy()
      })


      it('<h1> Inner HTML Exist', function () {
         expect(document.querySelector("h1").innerHTML).toBeTruthy()
      })
        it('<p> Inner HTML Exist', function () {
             for(let i =0; i<document.querySelectorAll("p").length;i++){
        expect([].slice.call(document.querySelectorAll("p"))[i].innerHTML).toBeTruthy()
             }
      })
        it('<h2> Inner HTML Exist', function () {
            for(let i =0; i<document.querySelectorAll("h2").length;i++){
        expect([].slice.call(document.querySelectorAll("h2"))[i].innerHTML).toBeTruthy()
            }
      })
          it('<li> Inner HTML Exist', function () {
            for(let i =0; i<document.querySelectorAll("li").length;i++){
        expect([].slice.call(document.querySelectorAll("li"))[i].innerHTML).toBeTruthy()
            }
      })


});