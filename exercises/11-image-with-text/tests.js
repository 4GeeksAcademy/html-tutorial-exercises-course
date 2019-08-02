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

 it('All <tr> tag exists, all <tr> align=left', function () {
        expect(document.querySelectorAll("tr").length).toBe(4)
         for (let i=0;i<document.querySelectorAll("tr").length;i++){
        expect([].slice.call(document.querySelectorAll("tr"))[i].align).toBe("left")
        }
 })

     it('All <th> tag exists, innerHTML', function () {
        expect(document.querySelectorAll("th").length).toBe(3)
        for(let i=0;i<document.querySelectorAll("th").length;i++){
            if (i===0){
        expect(document.querySelectorAll("th")[i].innerHTML).toBe(`
					Name
				`)
            }
              if (i===1){
        expect(document.querySelectorAll("th")[i].innerHTML).toBe(`
					Last Name
				`)
            }
            if (i===2){
        expect(document.querySelectorAll("th")[i].innerHTML).toBe(`
					Phone Number
				`)
            }
        }
    })
       it('All <td> tag exists, innerHTML', function () {
         if(document.querySelector("td")){
           for(let i=0;i<document.querySelectorAll("table,th,tr,td").length;i++){
               if([6,7,8,10,11,12,14,15,16].includes(i))
                    expect(document.querySelectorAll("table,th,tr,td")[i].tagName)
                        .toStrictEqual("TD")

            }
        }

        expect(document.querySelectorAll("td").length).toBe(9)
        for(let i=0;i<document.querySelectorAll("td").length;i++){
        expect(document.querySelectorAll("td")[i].innerHTML).toBeTruthy()
        }

    })

    it('<table> width, border', function () {
        expect(document.querySelector("table").style.width).toBe("100%")
        expect(document.querySelector("table").border).toBe("1")
    })

     it('<tr>[0] bgcolor, height, align', function () {
        expect(document.querySelectorAll("tr")[0].style.backgroundColor).toBe("red")
        expect(document.querySelectorAll("tr")[0].style.height).toBe("40px")
        expect(document.querySelectorAll("tr")[0].align).toBe("left")
    })

});
