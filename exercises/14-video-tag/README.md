---
tutorial: "https://www.youtube.com/watch?v=fHTYfMkxPpQ"
---

# `14` Video Tag

The `<video>` tag is used to include video content within a document.

> Note: You can read about video tags here: [Html Video Tags](https://www.w3schools.com/tags/tag_video.asp)

## 📝 Instructions:

1. Use the `<video>` tag to include this video on the website: [https://4geeks-temp.s3.amazonaws.com/y2mate.is+-+How+to+Pair+Program+(Pair+Programming+Tips+from+Steven+Nunez)-YhV4TaZaB84-720p-1694414048.mp4](https://4geeks-temp.s3.amazonaws.com/y2mate.is+-+How+to+Pair+Program+(Pair+Programming+Tips+from+Steven+Nunez)-YhV4TaZaB84-720p-1694414048.mp4).

2. The video must cover the entire website, for this we are going to apply a `width="100%"` and a `height="100%"`.

3. The video should play automatically, make use of the attribute: `autoplay`.

4. Make use of the attribute `muted` in order to play the video without any sound.

> Note: The video MUST NOT have controls: play, pause, etc.

## 💡 Hints:

+ Something like this should be your code.

```html
<video width="X" height="X" autoplay muted>
	<source src="here goes the URL of the video"/>
</video>
```

+ You can remove the `muted` attribute to watch the video with sound.
