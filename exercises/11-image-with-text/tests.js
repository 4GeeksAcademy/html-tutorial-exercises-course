const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');


describe('image with text', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });



 it('order of HTML tag', function () {

const allSelectors = document.querySelectorAll("TABLE,TD,TR,IMG,H1");
console.log(allSelectors)
for(let i=0;i<allSelectors.length;i++){
    if (i===0){
        expect(allSelectors[i].tagName).toStrictEqual("TABLE")
}
if (i===1){
    expect(allSelectors[i].tagName).toStrictEqual("TR")

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
