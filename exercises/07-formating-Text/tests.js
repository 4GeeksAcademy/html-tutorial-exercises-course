const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');

describe('Replicate the exact same styles with pure html, use headings, paragraph, strong, blockquote, ol and il', function () {

    beforeEach(() => { document.documentElement.innerHTML = html.toString()});
    afterEach(() => { jest.resetModules(); });

   it('order of html tags', function () {
       if(document.querySelectorAll("p")){
        expect([].slice.call(document.querySelectorAll("p, h1, ol,li"))[1,2].tagName).toStrictEqual(document.querySelector("p").tagName)
       }
        if(document.querySelector("ol")){
        expect([].slice.call(document.querySelectorAll("p, h1, ol,li"))[3]).toBe(document.querySelector("ol")
        )
       }
         if(document.querySelector("li")){
        expect([].slice.call(document.querySelectorAll("p, h1, ol,li"))[4,5,6]).toStrictEqual(document.querySelector("li")
        )
       }
          if(document.querySelector("h1")){
        expect([].slice.call(document.querySelectorAll("p, h1, ol,li"))[0]).toBe(document.querySelector("h1")
        )
       }
    })
it('<h1> exists', function () {
        expect(document.querySelector("h1")).toBeTruthy()
    })

   it('<h1> innerHTML exist', function () {
        expect(document.querySelector("h1").innerHTML).toBeTruthy()
    })

     it(' two (2) <p> exist', function () {
        expect(document.querySelectorAll("p").length).toBe(2)
    })
     it('<p> innerHTML exist', function () {
        expect([].slice.call(document.querySelectorAll("p"))[0,1].innerHTML).toBeTruthy()
    })
});