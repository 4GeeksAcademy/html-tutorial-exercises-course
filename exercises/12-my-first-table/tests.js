const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
import React from 'react'

jest.dontMock('fs');

describe('Replicate Nested Tag Example', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });


 it('<table> tag, width & border exist', function () {
     const tableTag = document.querySelector("table")
        expect(tableTag).toBeTruthy()
        expect(tableTag.width).toBe("100%")
         expect(tableTag.border).toBe("1")
    })


     it('<tr>[0] bgcolor, height, align', function () {
         const allTR = document.querySelectorAll("tr")
        expect(allTR[0].style.backgroundColor).toBe("red")
        expect(allTR[0].style.height).toBe("40px")
        expect(allTR[0].align).toBe("left")
    })

 it('All <tr> tag exists & all <tr> align=left', function () {
     const allTR = document.querySelectorAll("tr")
        expect(allTR.length).toBe(4)
         for (let i=0;i<allTR.length;i++){
        expect(allTR[i].align).toBe("left")
        }
 })

     it('All <th> tag exists & innerHTML', function () {
         const allTH = document.querySelectorAll("th")
        expect(allTH.length).toBe(3)
        for(let i=0;i<allTH.length;i++){
            if (i===0){
        expect(allTH[i].innerHTML).toBe(`
					Name
				`)
            }
              if (i===1){
        expect(allTH[i].innerHTML).toBe(`
					Last Name
				`)
            }
            if (i===2){
        expect(allTH[i].innerHTML).toBe(`
					Phone Number
				`)
            }
        }
    })
       it('All <td> tag exists, innerHTML', function () {
            const allSelectors =document.querySelectorAll("table,th,tr,td")
            const allTD = document.querySelectorAll("td")
           for(let i=0;i<allSelectors.length;i++){
               if([6,7,8,10,11,12,14,15,16].includes(i))
                    expect(allSelectors[i].tagName)
                        .toStrictEqual("TD")

            }


        expect(allTD.length).toBe(9)
        for(let i=0;i<allTD.length;i++){
        expect(allTD[i].innerHTML).toBeTruthy()
        }

    })




});
