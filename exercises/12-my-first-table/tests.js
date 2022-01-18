const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('Replicate Nested Tag Example', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

    it('the table tag should exist, and it should have a width of 100% and a border of 1', function () {
        const tableTag = document.querySelector("table")
        expect(tableTag).toBeTruthy()
        expect(tableTag.width).toBe("100%")
        expect(tableTag.border).toBe("1")
    })

    it('The first row of the table should have red background and a height of 40px', function () {
        const allTR = document.querySelectorAll("tr")
        expect(allTR[0].style.backgroundColor).toBe("red")
        expect(allTR[0].style.height).toBe("40px")
    })

    it('All <tr> tags exists (They should be 4)', function () {
        const allTR = document.querySelectorAll("tr")
        expect(allTR.length).toBe(4);
    })

    it('All <th> tags should exists with the proper innerHTML', function () {
        const allTH = document.querySelectorAll("th")
        expect(allTH.length).toBe(3)
        expect(allTH[0].innerHTML).toBe(`Name`)
        expect(allTH[1].innerHTML).toBe(`Last Name`)
        expect(allTH[2].innerHTML).toBe(`Phone Number`)
    })

    it('All <td> tag exists, innerHTML', function () {
        const allSelectors = document.querySelectorAll("table,th,tr,td")
        const allTD = document.querySelectorAll("td")
        expect(allTD.length).toBe(9)
        for (let i = 0; i < allTD.length; i++) {
            expect(allTD[i].innerHTML).toBeTruthy()
        }
    })
});
