---
tutorial: "https://www.youtube.com/watch?v=HkJtj2618YU"
---

# `07` Same Page

Anchors (`<a>`) are also capable to scroll the user through the website to a specific element within it.

To do that, you have to assign an `id` to the element you want to scroll to, and then, set the `URL` of the anchor `<a>` to that `id` you have assigned before, prepended by a "`#`" character, like this:

```html
<a href="#element_id">This anchor will take you to the div</a>

<div id="element_id">Hello I'm the div</div>
```

## 📝 Instructions:

1. Create 2 anchors `<a>`, one that scrolls the user to the **end** of the website and another one that sends the user to the **beginning** of the website.

## 💡 Hint:

+ The only way to use anchors like this, is with the `id` of the elements, there is no other way.

+ You have to add an `id` to the `<h2>` tags, in order to redirect the user to them with the anchor