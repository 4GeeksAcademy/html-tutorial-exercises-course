const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const configFile = fs.readFileSync(path.resolve('./.learn', './config.json'));

jest.dontMock('fs');

describe('The absolute path to the image should contain the entire URL', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

    it('The absolute path to the image should be the correct one', function () {
        let img = document.querySelector('img');
        expect(img).toBeTruthy();

        let config = JSON.parse(configFile);
        expect(img.src).toBe(`${config.config.publicUrl}/.learn/assets/absolute-path-vs-relative-path.png`)
    })
})
