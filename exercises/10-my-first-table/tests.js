const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
import React from 'react'

jest.dontMock('fs');

describe('Replicate Nested Tag Example', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });


 it('<table> tag exists', function () {
        expect(document.querySelector("table")).toBeTruthy()
    })

 it('<tr> tag exists', function () {
        expect(document.querySelectorAll("tr").length).toBe(2)
    })
     it('<th> tag exists', function () {
        expect(document.querySelectorAll("th").length).toBe(3)
    })
     it('<td> tag exists', function () {
        expect(document.querySelectorAll("td").length).toBe(3)
    })

    it('<table> style', function () {
        expect(document.querySelector("table").style.width).toBe("100%")
    })
     it('<table> border', function () {
        expect(document.querySelector("table").border).toBe("1")
    })


     it('<tr>[0] bgcolor', function () {
        expect(document.querySelectorAll("tr")[0].style.backgroundColor).toBe("red")
        expect(document.querySelectorAll("tr")[0].height).toStrictEqual("40")
    })






});
