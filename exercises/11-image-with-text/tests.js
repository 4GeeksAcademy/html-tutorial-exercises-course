const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');


describe('image with text', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });



 it('order of HTML tag', function () {

const selectors = document.querySelectorAll("table,tr,td,img,h1");
console.log(selectors)
for(let i=0;i<selectors.length;i++){
    if (i===0){
        expect(selectors[i].tagName).toStrictEqual("TABLE")
}
if (i===1){
    expect(selectors[i].tagName).toStrictEqual("TR")

}

}

    })


 it('<table> tag exists', function () {
        const table = document.querySelector("table")
        expect(table).toBeTruthy()
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
