# `08` Relative vs Absolute Path

This is the typical code that you need to use an image tag:

```html
<img src="where/to/get/the/image" />
```
When you add an `<img />` (image) tag into a website, you have to set the `src` property to the URL where you want to take that image from, that URL path can be absolute or relative:

## Relative Paths Examples:

```html
<img src="../../.learn/assets/rigo-baby.jpg" />
<a href="index.html">Take me to index.html from the current directory</a>
<a href="/graphics/image.png">Take me to image.png that is inside the /graphics/ directory</a>
<a href="/help/articles/how-do-i-set-up-a-webpage.html">Take me to how-do-i-set-up-a-webpage.html</a>
```

If you use relative paths, you have to assume that the initial part of the path is hidden, and is equal to the current path in the URL bar.

## Absolute Paths Examples:

```html
<img src="https://github.com/learnpack/html-tutorial-exercises-course/raw/master/HTML-badge.png" />
<a href="http://www.mysite.com">Click Me</a>
<a href="http://www.mysite.com/graphics/image.png">Click Me</a>
<a href="http://www.mysite.com/help/articles/how-do-i-set-up-a-webpage.html">Click Me</a>
```

The difference is that absolute paths take the user to a different website, relative paths take the user to the same website but in a different directory or path.

## 📝 Instructions

Please modify the relative path that the img tag has and add the absolute path to that image.

## 💡 Hint

+ Your absolute path should start with this: {{publicUrl}}

+ You can build it, do right click on the image, click on 'Copy Image Address' and look at the absolute path of the image.

+ Here is a video explaining the difference between relative and absolute
https://www.youtube.com/watch?v=ephId3mYu9o
