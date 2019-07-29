const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');

describe('Format the exact same styles with pure html, use h1 headings, paragraph, strong, blockquote, ol and il', function () {

    beforeEach(() => { document.documentElement.innerHTML = html.toString()});
    afterEach(() => { jest.resetModules(); });

   it('Order of html tags', function () {
       if(document.querySelectorAll("p")){
        expect([].slice.call(document.querySelectorAll("p, h1, ol,li,blockquote"))[1,3].tagName).toStrictEqual(document.querySelector("p").tagName)
       }

       if(document.querySelectorAll("blockquote")){
        expect([].slice.call(document.querySelectorAll("p, h1, ol,li,blockquote"))[2].tagName).toStrictEqual(document.querySelector("blockquote").tagName)
       }

        if(document.querySelector("ol")){
        expect([].slice.call(document.querySelectorAll("p, h1, ol,li,blockquote"))[4]).toBe(document.querySelector("ol")
        )
       }
         if(document.querySelector("li")){
        expect([].slice.call(document.querySelectorAll("p, h1, ol,li,blockquote"))[5,6,7].tagName).toStrictEqual(document.querySelector("li").tagName
        )
       }
          if(document.querySelector("h1")){
        expect([].slice.call(document.querySelectorAll("p, h1, ol,li,blockquote"))[0]).toBe(document.querySelector("h1")
        )
       }
    })
it('<h1> exists', function () {
        expect(document.querySelector("h1")).toBeTruthy()
    })

    it('<blockquote> exists', function () {
        expect(document.querySelector("blockquote")).toBeTruthy()
    })


     it('Two(2) <p> exist', function () {
        expect(document.querySelectorAll("p").length).toBe(2)
    })


     it('Two(2) <strong> exist', function () {
        expect(document.querySelectorAll("strong").length).toBe(2)
    })

    it('<ol> exist', function () {
        expect(document.querySelectorAll("ol").length).toBeTruthy()
    })
    it('Three(3) <li> exist', function () {
        expect(document.querySelectorAll("li").length).toBe(3)
    })


      it('<h1> innerHTML exist', function () {
        expect(document.querySelector("h1").innerHTML).toBeTruthy()
    })

        it('<blockquote> innerHTML exist', function () {
        expect(document.querySelector("blockquote").innerHTML).toBeTruthy()
    })

     it('<p> innerHTML exist', function () {
         for (let i=0; i<document.querySelectorAll("p".length);i++){
        expect([].slice.call(document.querySelectorAll("p"))[i].innerHTML).toBeTruthy()
         }
    })
    it('<li> innerHTML exist', function () {
        for (let i=0; i<document.querySelectorAll("p".length);i++){
        expect([].slice.call(document.querySelectorAll("li"))[i].innerHTML).toBeTruthy()
        }
    })
});