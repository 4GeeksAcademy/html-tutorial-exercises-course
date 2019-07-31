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

    it('<table> innerHTML, style, border', function () {
        expect(document.querySelector("table").style).toBe("width:100%")
    })





});
