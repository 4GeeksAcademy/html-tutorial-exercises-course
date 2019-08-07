const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('<a> tag should open in new window', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

   it('<a> tag exists', function () {
        expect(document.querySelectorAll("a").length).toBe(1)
    })

       it(' 2nd <a> tag should have an innerHTML and an absolute href path to the 03 exercise', function () {
            const a = document.querySelector("a");
            expect(a.href).toBe("/#03-hello-without-head");
            expect(a.innerHTML === "").toBe(false);
    })


});
