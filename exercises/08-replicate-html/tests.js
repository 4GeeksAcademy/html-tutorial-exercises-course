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

});