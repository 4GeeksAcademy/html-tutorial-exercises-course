const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('<a> tag should open in new window', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

   it('Two (2) <a> tags and innerHTML exist', function () {
       const allA = document.querySelectorAll("a")
        expect(allA.length).toBe(2)
        for (let i=0;i<allA.length;i++){
        expect(allA[i].innerHTML).toBeTruthy()
        }
    })


    it('<h2> ids exist', function () {
        const h2 = document.querySelectorAll("h2")
        for(let i=0; i<h2.length;i++){
             expect(h2[i].id).toBeTruthy()
        }
    });

        it('The first anchor needs to point to the second h2', function () {
            const a = document.querySelectorAll("a")[0];
            const h2 = document.querySelectorAll("h2")[1];
            expect(a).toBeTruthy();
            expect(a.href).toEqual("http://localhost/" + "#"+h2.id)
        });

        it('The second anchor needs to point to the first h2', function () {
            const a = document.querySelectorAll("a")[1];
            const h2 = document.querySelectorAll("h2")[0];
            expect(a).toBeTruthy();
            expect(a.href).toEqual("http://localhost/" + "#"+h2.id)
        });


    });
