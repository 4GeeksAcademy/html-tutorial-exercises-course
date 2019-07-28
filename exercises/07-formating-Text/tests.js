const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');

describe('Replicate the exact same styles with pure html, use headings, paragraph, strong, blockquote, ol and il', function () {

    beforeEach(() => { document.documentElement.innerHTML = html.toString()});
    afterEach(() => { jest.resetModules(); });

   it('order of html tags', function () {
       if(document.querySelector("p")){
        expect([].slice.call(document.querySelectorAll("p, h1, ol,li"))[1,2]).toStrictEqual(document.querySelector("p")
        )
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
     it('HTML setup', function () {
        expect(document.querySelector("body")).toEqual(()=> <p></p> ,<h1></h1>)
    })

   it('<h1> innerHTML exist', function () {
        expect(document.querySelector("h1").innerHTML).toBeTruthy()
    })

     it('<p> exist', function () {
        expect(document.querySelector("p")).toBeTruthy()
    })
     it('<p> innerHTML exist', function () {
        expect(document.querySelector("p").innerHTML).toBeTruthy()
    })
});