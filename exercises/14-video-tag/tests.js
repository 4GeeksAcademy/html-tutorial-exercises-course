const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

it('You should create a <video> tag inside the <body>.', function () {
    let body = document.querySelector("body");
    expect(body).toBeTruthy();

    let video = body.querySelector("video");
    expect(video).toBeTruthy();
})

it('The <video> tag should have width and height of "100%".', function () {
  let body = document.querySelector("body");
  expect(body).toBeTruthy();
  
  let video = body.querySelector("video");
  expect(video).toBeTruthy();
  expect(video.width).toBe(100)
  expect(video.height).toBe(100)
})

it('The <video> tag should have a <source> tag inside.', function () {
    let body = document.querySelector("body");
    expect(body).toBeTruthy();

    let video = body.querySelector("video");
    expect(video).toBeTruthy();

    let source = video.querySelector("source");
    expect(source).toBeTruthy();
})

it('The <source> tag should have the expected video in the "src" attribute.', function () {
    let body = document.querySelector("body");
    expect(body).toBeTruthy();

    let video = body.querySelector("video");
    expect(video).toBeTruthy();

    let source = video.querySelector("source");
    expect(source).toBeTruthy();
    expect(source.src).toBe("https://4geeks-temp.s3.amazonaws.com/y2mate.is+-+How+to+Pair+Program+(Pair+Programming+Tips+from+Steven+Nunez)-YhV4TaZaB84-720p-1694414048.mp4")
})