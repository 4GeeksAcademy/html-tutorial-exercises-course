const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');



jest.dontMock('fs');

describe('Format the exact same styles with pure html, use h1 headings, paragraph, strong, blockquote, ol and il', function () {

    beforeEach(() => { document.documentElement.innerHTML = html.toString()});
    afterEach(() => { jest.resetModules(); });

   it('Order of html tags', function () {
       if(document.querySelector("h1")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2,ul"))[0].tagName).toStrictEqual(document.querySelector("h1").tagName)
       }

        if(document.querySelector("h2")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2,ul"))[1,7].tagName).toStrictEqual(document.querySelector("h2").tagName)
       }

        if(document.querySelector("p")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2, ul"))[2,12].tagName).toStrictEqual(document.querySelector("p").tagName)
       }
        if(document.querySelector("ol")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2, ul"))[3].tagName).toStrictEqual(document.querySelector("ol").tagName)
       }
       if(document.querySelector("li")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2,ul"))[4,5,6,9,10,11].tagName).toStrictEqual(document.querySelector("li").tagName)
       }

       if(document.querySelector("ul")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2,ul"))[8].tagName).toStrictEqual(document.querySelector("ul").tagName)
       }
       if(document.querySelector("a")){
        expect([].slice.call(document.querySelectorAll("h1,p, ol,li,a,h2,ul"))[13].tagName).toStrictEqual(document.querySelector("a").tagName)
       }

    })
        it('<h1> Exist', function () {
         expect(document.querySelector("h1")).toBeTruthy()
      })

       it('<h2> Exist', function () {
         expect(document.querySelectorAll("h2").length).toBe(2)
      })
        it('<p> Exist', function () {
         expect(document.querySelectorAll("p").length).toBe(2)
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
      it('<a> Exist', function () {
         expect(document.querySelector("a")).toBeTruthy()
      })


      it('<h1> Inner HTML Exist', function () {
         expect(document.querySelector("h1").innerHTML).toBe("The learning essay")
      })
        it('<p> Inner HTML Exist', function () {
             for(let i =0; i<document.querySelectorAll("p").length;i++){
                 if (i === 0){
        expect([].slice.call(document.querySelectorAll("p"))[i].innerHTML).toBe("We are going to explain in this paragraph the 3 most common signs that should look into yourself to recognize if you are learning.")
                 }
                          if (i === 1){
        expect([].slice.call(document.querySelectorAll("p"))[i].innerHTML).toBe("If you cant sleep, what better than watching videos of cats?<a href=\"google.com\">Click me</a>")
                 }
             }
      })
        it('<h2> Inner HTML Exist', function () {
                for(let i =0; i<document.querySelectorAll("h2").length;i++){
                    if (i === 0){
        expect([].slice.call(document.querySelectorAll("h2"))[i].innerHTML).toBe("3 Reason you know you are learning")
                    }
                    if (i === 1){
        expect([].slice.call(document.querySelectorAll("h2"))[i].innerHTML).toBe("3 Reason you know love are learning what you are learning")
                    }
                }
      })
          it('<li> Inner HTML Exist', function () {
            for(let i =0; i<document.querySelectorAll("li").length;i++){
                if (i === 0){
        expect([].slice.call(document.querySelectorAll("li"))[i].innerHTML).toBe("You are able to complete the exercise by yourself.")
                }
                if (i === 1){
        expect([].slice.call(document.querySelectorAll("li"))[i].innerHTML).toBe("You understand what the teacher is talking about.")
                }
                  if (i === 2){
        expect([].slice.call(document.querySelectorAll("li"))[i].innerHTML).toBe("Your are able to have conversations about the topic.")
                }
                   if (i === 3){
        expect([].slice.call(document.querySelectorAll("li"))[i].innerHTML).toBe("Time passes fast.")
                }
                 if (i === 4){
        expect([].slice.call(document.querySelectorAll("li"))[i].innerHTML).toBe("You are anxious to finish this exercise and start the next one.")
                }
                  if (i === 5){
        expect([].slice.call(document.querySelectorAll("li"))[i].innerHTML).toBe("Is 12am and you dont want to go to sleep.")
                }
            }
      })


});