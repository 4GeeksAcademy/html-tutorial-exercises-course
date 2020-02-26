const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');

describe('Format the exact same styles with pure html, use h1 headings, paragraph, strong, blockquote, ol and il', function () {

    beforeEach(() => { document.documentElement.innerHTML = html.toString()});
    afterEach(() => { jest.resetModules(); });

   it('Order of html tags', function () {
       const allSelectors = document.querySelectorAll("h1,p, ol,li,a,h2,ul")

        expect(allSelectors[0].tagName).toStrictEqual("H1")
        expect(allSelectors[3].tagName).toStrictEqual("OL")
        expect(allSelectors[8].tagName).toStrictEqual("UL")
        expect(allSelectors[13].tagName).toStrictEqual("A")

        for (let i =0;i<allSelectors.length;i++){
            if (i=== 1 && i ===7){
        expect(allSelectors[i].tagName).toStrictEqual("H2")
            }

        if (i===2 && i===12){

        expect(allSelectors[i].tagName).toStrictEqual("P")
        }

         let arr=[4,5,6,9,10,11]
        if(i===arr[i]){
        expect(allSelectors[i].tagName).toStrictEqual("LI")
        }
        }

    })
        it('<h1> tag & innerHTML Exist', function () {
            const h1 = document.querySelector("h1")
         expect(h1).toBeTruthy()
         expect(h1.innerHTML).toBe("The learning essay")
      })


       it('<h2> tag & innerHTML Exist', function () {
           const allH2 = document.querySelectorAll("h2")
            expect(allH2.length).toBe(2)

                for(let i =0; i<allH2.length;i++){
                    if (i === 0){
        expect(allH2[i].innerHTML).toBe("3 Reasons you know you are learning")
                    }
                    if (i === 1){
        expect(allH2[i].innerHTML).toBe("3 Reasons you know love are learning what you are learning")
                    }
                }
      })

        it('All <p> tags and innerHTML Exist', function () {
            const allP = document.querySelectorAll("p")
            expect(allP.length).toBe(2)

          for(let i =0; i<allP.length;i++){
                 if (i === 0){
        expect(allP[i].innerHTML).toBe(`
			We are going to explain in this paragraph the 3 most common signs that should look into yourself to recognize if you are learning.
		`)
                 }
             if (i === 1){
        expect(allP[i].innerHTML).toBe("If you cant sleep, what better than watching videos of cats?<a href=\"https://www.google.com\">Click me</a>")
                 }
             }
      })


         it('<ol> Exist', function () {
         expect(document.querySelectorAll("ol")).toBeTruthy()
      })

      it('<ul> Exist', function () {
         expect(document.querySelector("ul")).toBeTruthy()
      })

       it('<li> Exist', function () {
         expect(document.querySelectorAll("li").length).toBe(6)
      })


          it('<li> Inner HTML Exist', function () {
              const allLI = document.querySelectorAll("li")

            for(let i =0; i<allLI.length;i++){
                if (i === 0){
        expect(allLI[i].innerHTML).toBe("You are able to complete the exercise by yourself.")
                }
                if (i === 1){
        expect(allLI[i].innerHTML).toBe("You understand what the teacher is talking about.")
                }
                  if (i === 2){
        expect(allLI[i].innerHTML).toBe("Your are able to have conversations about the topic.")
                }
                   if (i === 3){
        expect(allLI[i].innerHTML).toBe("Time passes fast.")
                }
                 if (i === 4){
        expect(allLI[i].innerHTML).toBe("You are anxious to finish this exercise and start the next one.")
                }
                  if (i === 5){
        expect(allLI[i].innerHTML).toBe("Is 12am and you dont want to go to sleep.")
                }
            }
      })


      it('<a> tag and href Exist', function () {
          const a = document.querySelector("a")
         expect(a).toBeTruthy()
         expect(a.href.indexOf("http") > -1).toBe(true)
      })






});