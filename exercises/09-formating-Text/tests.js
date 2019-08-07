const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');

describe('Format the exact same styles with pure html, use h1 headings, paragraph, strong, blockquote, ol and il', function () {

    beforeEach(() => { document.documentElement.innerHTML = html.toString()});
    afterEach(() => { jest.resetModules(); });

   it('Order of html tags', function () {
       const allSelectors = document.querySelectorAll("p, h1, ol,li,blockquote")
       let arr = [5,6,7]
       for(let i =0;i<allSelectors;i++){
           if (i===1 && i===3)
        expect(allSelectors[i].tagName).toStrictEqual("P")

       if (arr[i]=== i)
        expect(allSelectors[i].tagName).toStrictEqual("LI")

        if(i===2)
        expect(allSelectors[i].tagName).toStrictEqual("BLOCKQUOTE")


        if (i===4){
        expect(allSelectors[i].tagName).toBe("ul")
        }


         if (i===0){
        expect(allSelectors[i].tagName).toBe("H1")
         }
       }
    })



it('<h1> exists', function () {
        expect(document.querySelector("h1")).toBeTruthy()
    })

    it('<blockquote> exists', function () {
        expect(document.querySelector("blockquote")).toBeTruthy()
    })


     it('Two(4) <p> exist', function () {
        expect(document.querySelectorAll("p").length).toBe(4)
    })


     it('Two(1) <strong> exist', function () {
        expect(document.querySelectorAll("strong").length).toBe(1)
    })

    it('<ul> exist', function () {
        expect(document.querySelectorAll("ul").length).toBeTruthy()
    })
    it('Three(3) <li> exist', function () {
        expect(document.querySelectorAll("li").length).toBe(3)
    })


      it('<h1> innerHTML exist', function () {
        expect(document.querySelector("h1").innerHTML).toBeTruthy()
    })

        it('<blockquote> innerHTML exist', function () {
        expect(document.querySelector("blockquote").innerHTML).toBeTruthy()
    })

     it('<p> innerHTML exist', function () {
         const allP = document.querySelectorAll("p")
         for (let i=0; i<allP.length;i++){
        expect(allP[i].innerHTML).toBeTruthy()
         }
    })
    it('<li> innerHTML exist', function () {
        const allLI = document.querySelectorAll("li")
        for (let i=0; i<allLI.length;i++){
        expect(allLI[i].innerHTML).toBeTruthy()
        }
    })
});