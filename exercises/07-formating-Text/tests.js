const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');

describe('Replicate the exact same styles with pure html, use headings, paragraph, strong, blockquote, ol and il', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

   it('body setup', function () {
        expect(document.querySelector("body").innerHTML).toBe(document.querySelector("p")

        )
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