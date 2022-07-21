const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');


jest.dontMock('fs');



describe('Replicate Nested Tag Example', function () {

    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

    it('Order of html tags', function () {
           const allSelectors = document.querySelectorAll("h1,h2,p,i,a");
console.log(document.querySelectorAll("h1,h2,p,i,a"))
        for(let i=0;i<allSelectors.length;i++){
            if (i===0 || i===2){
        expect(allSelectors[i].tagName).toStrictEqual("H1")
            }
         if(i===5){
        expect(allSelectors[i].tagName).toStrictEqual("H2")
       }
        if(i===3){
        expect(allSelectors[i].tagName).toStrictEqual("P")
       }
         if(i===1){
        expect(allSelectors[i].tagName).toStrictEqual("I")
       }
         if(i===4){
        expect(allSelectors[i].tagName).toStrictEqual("A")
       }
    }

    })

 it('<h1> tag exists', function () {

        expect(document.querySelectorAll("h1").length).toBe(2)
    })
     it('<i> tag exists', function () {
        expect(document.querySelector("i")).toBeTruthy()
    })
    it('<h2> tag exists', function () {
        expect(document.querySelector("h2")).toBeTruthy()
    })
     it('<p> tag exists', function () {
        expect(document.querySelectorAll("p").length).toBe(2)
    })
     it('<a> tag exists', function () {
        expect(document.querySelector("a")).toBeTruthy()
    })

      it('<h1> innerHTML', function () {
          for(let i=0;i<document.querySelectorAll("h1").length;i++){
              if (i===0){
        expect(document.querySelectorAll("h1")[i].innerHTML).toBe("Hello world.<i> Italic word.</i>")
              }
               if (i===1){
        const h1InnerHtml = document.querySelectorAll("h1")[i].childNodes;
        expect(h1InnerHtml[0].textContent).toBe("\n\t\t\tHello world.\n\t\t\t")
        expect(h1InnerHtml[1].outerHTML).toBe("<p>Italic word.</p>")
    }
          
}
    })

    it('<a> href', function () {
        expect(document.querySelector("a").href).toBeTruthy()})

     it('<a> inner HTML', function () {
        const anchorInnerHtml = document.querySelector("a").childNodes;
        expect(document.querySelector("a").childNodes[1].outerHTML).toBe("<h2>Hello</h2>")
        expect(anchorInnerHtml[3].localName).toBe("p")
        expect(anchorInnerHtml[3].innerHTML).toBe("\n\t\t\t\tThis exercises seem boring, but I have to do them anyway because the more I practice the less my brain forgets, at least for the first\n\t\t\t\t4 days.\n\t\t\t")
    })

    })
