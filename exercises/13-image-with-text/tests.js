const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');


describe('image with text', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });



 it('order of HTML tag', function () {

const allSelectors = document.querySelectorAll("TABLE,TD,TR,IMG");
console.log(allSelectors)
for(let i=0;i<allSelectors.length;i++){
    if (i===0){
        expect(allSelectors[i].tagName).toStrictEqual("TABLE")
}
if (i===1){
    expect(allSelectors[i].tagName).toStrictEqual("TR")
}
if (i===2){
    expect(allSelectors[i].tagName).toStrictEqual("TD")
}
if (i===3){
    expect(allSelectors[i].tagName).toStrictEqual("IMG")
}
if (i===4){
    expect(allSelectors[i].tagName).toStrictEqual("TD")
}

}

    })


 it('table tag & border exist', function () {
     const tableTag= document.querySelector("TABLE")
      expect(tableTag).toBeTruthy()
      expect(tableTag.border).toBe("0")

 })


it('<tr> tag exists', function () {
        expect(document.querySelector("TR")).toBeTruthy()
    })
it('<td> tags,innerHTML & valign exists', function () {
    const allTD = document.querySelectorAll("TD")
        expect(allTD.length).toBe(2)
        for(let i=0;i<allTD.length;i++){
            if (i===1){
                expect(allTD[i].vAlign).toBe("top")
               expect(allTD[i].innerHTML).toBeTruthy()
            }
        }
    })


 it('<img> tag, src & height exists', function () {
     const imgTag = document.querySelector("img")
        expect(imgTag).toBeTruthy()
        expect(imgTag.src).toBeTruthy()
        expect(imgTag.height).toBe(150)
    })

});
