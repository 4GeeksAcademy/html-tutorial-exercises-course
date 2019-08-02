const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');


describe('image with text', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });



 it('order of HTML tag', function () {
 for(let i=0;i<document.querySelectorAll("table tr td img").length;i++){
            if (i===0){
        expect(document.querySelectorAll("table tr td img")[i].tagName).toStrictEqual(document.querySelector("table").tagName)
            }
         if(i===1){
        expect(document.querySelectorAll("table tr td img")[i].tagName).toStrictEqual(document.querySelector("tr").tagName)
       }
           if(i===2){
        expect(document.querySelectorAll("table tr td img")[i].tagName).toStrictEqual(document.querySelector("td").tagName)
       }
 }
    })


 it('<table> tag exists', function () {
        expect(document.querySelector("table")).toBeTruthy()
    })

    it('<tr> tag exists', function () {
        expect(document.querySelector("tr")).toBeTruthy()
    })

      it('<td> tags exists', function () {
        expect(document.querySelectorAll("td").length).toBe(2)
    })


 it('<img> tags exists', function () {
        expect(document.querySelectorAll("img")).toBeTruthy()
    })

});
