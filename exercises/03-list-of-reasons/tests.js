const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('ol should exist', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });
    const li = document.querySelectorAll("li").length

 it('ol exists', function () {
        expect(document.querySelector("ol")).toBeTruthy()
    })
    it('li exists', function () {
        expect(document.querySelectorAll("li").length).toBe(6)
    })

       it("InnerHTML Exist", function(){
        expect(document.querySelectorAll("li")).filter(l => l.innerHTML !== "").toBeTruthy()
    })


});
