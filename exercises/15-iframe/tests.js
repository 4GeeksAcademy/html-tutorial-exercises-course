const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');


describe('video tag', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

it('<iframe> tag exist', function () {
    const iframe =  document.querySelector("iframe")
      expect(iframe).toBeTruthy()
      })

it('<iframe> width=300px', function () {
    const iframe =  document.querySelector("iframe")
      expect(iframe.width).toBe("300px")
      })

      it('<iframe> height=200px', function () {
    const iframe = document.querySelector("iframe")
      expect(iframe.height).toBe("200px")
      })
           it('<iframe> height=200px', function () {
    const iframe = document.querySelector("iframe")
      expect(iframe.src).toBe("https://www.youtube.com/embed/hFQiSDiysWs")
      })


});
