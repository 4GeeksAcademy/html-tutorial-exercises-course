---
tutorial: "https://www.youtube.com/watch?v=QUoq-uQf6As"
---

# `13` Image with Text

Before `CSS` existed, using tables was the only way possible to do some website layouts. It is a very similar process to creating layouts on MS Office.

Now, let's recreate an example similar to this:

![demo](../../.learn/assets/opTIFpg.png?raw=true)

## 📝 Instructions: 

1. Create a `<table>` with attribute `border = "0"`.

```html
<table border="X"></table>
```

2. Add the `<tr>` row with 2 `<td>` columns inside.

```html
<table border="X">
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>
```

3. The first column (`<td>`) with the attribute `width="25%"`, it should contain an image with the attribute `width="100%"` (You can use any image from google).

```html
<td width="X"><img width="X" src="url"/></td>
```

4. The second column (`<td>`), contains the paragraph along with the `valign = "top"` attribute (this is used to move the text to the top of the cell and also add text inside).

```html
<td valign="X">Here goes the text</td>
``` 

## 💡Hint:

+ You can choose your fake text on this page: [http://www.lipsum.com/](http://www.lipsum.com/)
