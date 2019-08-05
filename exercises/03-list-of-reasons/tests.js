const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('ol should exist', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });


 it('ol exists', function () {
        expect(document.querySelector("ol")).toBeTruthy()
    })
    it('li exists', function () {
        expect(document.querySelectorAll("li").length).toBe(6)
    })

       it(" LI innerHTML exist", function(){
        const li = document.querySelectorAll("li")
        for(let i=0; i<li.length;i++){
             expect(li[i].innerHTML).toBeTruthy()
        }
    })



});
