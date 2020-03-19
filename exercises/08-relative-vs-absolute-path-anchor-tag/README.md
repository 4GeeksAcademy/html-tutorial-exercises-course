---
tutorial: "https://www.youtube.com/watch?v=tj3T071UL5I"
---

# `08` Relative vs Absolute Path

This is the typical code that you need to use an anchor tag:

```html
<a href="where/to/take/the/user">Click Me</a>
```
When you add an `<a>` (anchor) tag into a website, you have to set the `href` property to the URL where you want that anchor to take the users, that URL path can be absolute or relative:

## Relative Paths Examples:

```html
<a href="index.html">Take me to index.html from the current directory</a>
<a href="/graphics/image.png">Take me to index.html that is inside the /graphics/ directory</a>
<a href="/help/articles/how-do-i-set-up-a-webpage.html">Take me to how-do-i-set-up-a-webpage.html</a>
```

If you use relative paths, you have to assume that the initial part of the path is hidden, and is equal to the current path in the URL bar.

## Absolute Paths

```html
<a href="http://www.mysite.com">Click Me</a>
<a href="http://www.mysite.com/graphics/image.png">Click Me</a>
<a href="http://www.mysite.com/help/articles/how-do-i-set-up-a-webpage.html">Click Me</a>
```

The difference is that absolute paths take the user to a different website, relative paths take the user to the same website but in a different directory or path.

For example: If you look at your URL bar right now, the url is something like:
```
https://<url>/html-exercises
```

## 📝 Instructions

Please create a anchor with a relative path that takes the user to the third exercise: `03`.
You will have to find that url of that exercise and make the anchor link to it using a relative path.

## 💡 Hint

Here is a video explaining the difference between relative and absolute
https://www.youtube.com/watch?v=ephId3mYu9o
