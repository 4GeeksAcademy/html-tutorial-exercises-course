const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');


describe('video tag', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

it('<video> tag exist', function () {

      expect( document.querySelector("VIDEO")).toBeTruthy()
      })

    it('<video> tag muted & autoplay exist', function () {
        const videoTag = document.querySelector("VIDEO")

       //expect(videoTag.muted).toBeTruthy()
        expect(videoTag.autoplay).toBeTruthy()

       })

    it('<video> tag width=100% & height=100% exist', function () {
        const videoTag = document.querySelector("VIDEO")
      expect(videoTag.height + "%").toBe("100%")
      expect(videoTag.width + "%").toBe("100%")
       })

});
