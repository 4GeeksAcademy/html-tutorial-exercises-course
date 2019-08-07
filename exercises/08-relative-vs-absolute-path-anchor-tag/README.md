# `08` Relative vs Absolute Path

## 📝 Instructions

Add an anchor with an absolute path that takes the user to google.com

This is the typical code that you need to use an anchor tag into a website:
```html
<a href="where/to/take/the/user">Click Me</a>
```
When you add an `<a>` (anchor) tag into a website, you have to set the `href` property to the URL where you want that anchor to take the userss, that URL path can be absolute or relative:

## Relative Paths Examples:
```html
<a href="index.html">Take me to index.html</a>
<a href="/graphics/image.png">Take me to index.html</a>
<a href="/help/articles/how-do-i-set-up-a-webpage.html">Take me to index.html</a>
```

If you use relative paths, you have to assume that the initial part of the path is hidden, and is equal to the current path in which I'm standing right now (shown in the URL bar).

## Absolute Paths
```html
<a href="http://www.mysite.com">Click Me</a>
<a href="http://www.mysite.com/graphics/image.png">Click Me</a>
<a href="http://www.mysite.com/help/articles/how-do-i-set-up-a-webpage.html">Click Me</a>
```

The difference is that absolute paths take the user to a different website, relative paths take the user to the same website.

For example: If you look at your URL bar right now, the url is something like:
https://repl.it/student/submissions/962737

If you find an anchor link in this current website (repl.it) taking you to  /graphics/image.png the browser will redirect you to  the user to https://repl.it/student/submissions/graphics/image.png.

## 💡 Hint

Here is a video explaining the difference between relative and absolute
https://www.youtube.com/watch?v=ephId3mYu9o