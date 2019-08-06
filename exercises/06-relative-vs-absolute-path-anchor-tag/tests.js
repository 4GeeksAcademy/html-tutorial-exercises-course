const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('<a> tag should open in new window', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

   it('2 <a> tag exists', function () {
        expect(document.querySelectorAll("a").length).toBe(2)
    })

       it(' 2nd <a> tag should have an innerHTML and an absolute href path to google', function () {
           const a = document.querySelectorAll("a")
           for(let i =0;i<a.length;i++){
               if(i===1)
        expect(a[i].href).toBe("https://www.google.com/")
        expect(a[i].innerHTML).toBeTruthy()
           }
    })


});
