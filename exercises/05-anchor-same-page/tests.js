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
    })

        it('<a href> should point to <h2> id', function () {
            const a = document.querySelectorAll("a")
            const h2 = document.querySelectorAll("h2")
        for(let i=0; i<a.length;i++){
            if (i===0)
             expect(a[i].href).toEqual("http://localhost/" + "#"+h2[1].id)
             if (i===1)
             expect(a[i].href).toEqual("http://localhost/" + "#"+h2[0].id)

        }


    })

});
