<!-- hide -->
<div align="center">

# Learn the basics of HTML Interactively

[![Certified tutorial](https://img.shields.io/badge/4Geeks_Academy-Certified_tutorial-2563eb?style=for-the-badge)](https://4geeks.com/interactive-exercise/html-tutorial-exercises-course)
[![Autograded with LearnPack](https://img.shields.io/badge/LearnPack-16_autograded_exercises-2563eb?style=for-the-badge)](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/tree/HEAD/exercises)
[![Open in Codespaces](https://img.shields.io/badge/Open_in-Codespaces-fb5a1f?style=for-the-badge&logo=github)](https://github.com/codespaces/new/?repo=4GeeksAcademy/html-tutorial-exercises-course)

![Cover image of the tutorial: the words Learn HTML interactive in dark red next to the orange HTML5 shield logo](https://raw.githubusercontent.com/4GeeksAcademy/html-tutorial-exercises-course/master/preview.png)

</div>
<!-- endhide -->

This tutorial teaches HTML through 16 auto-graded exercises plus a welcome step, about 8 hours of work at an easy difficulty level and with no prior coding experience required. You edit a real `index.html` file, press run to preview it, and 55 automated checks tell you instantly whether the markup is correct. It covers document structure, headings, lists, anchors, relative and absolute paths, tables, images, `<video>` and `<iframe>`. Fifteen exercises include a recorded video solution.

<!-- hide -->
## 📋 About this tutorial

- **Difficulty**: Easy — designed for absolute beginners, no previous HTML needed
- **Estimated duration**: 8 hours
- **Exercises**: 17 steps (1 welcome + 16 graded exercises)
- **Automated checks**: 55 assertions running on Jest + jsdom
- **Video solutions**: yes, 15 of the 16 graded exercises have one
- **Technologies**: HTML5, LearnPack, Node.js, Jest
- **Editor**: VS Code (Codespaces, Gitpod or local), LearnPack editor v5.0
- **Languages**: [English](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/blob/HEAD/README.md) · [Español](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/blob/HEAD/README.es.md)
<!-- endhide -->

## 🎯 What will you learn?

HTML is a markup language: everything you write lives inside opening and closing tags. This tutorial walks that idea from a single `<span>` up to a full document with tables, media and internal navigation. By the end you will be able to:

- Build the skeleton of any web page: `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>` and `<body>`, and understand what happens when you leave `<head>` out.
- Use the document-style tags HTML was invented for: `<h1>` and `<h2>`, `<p>`, `<strong>`, `<i>`, `<blockquote>`, `<br />`, `<ul>`, `<ol>` and `<li>`.
- Link pages together with `<a>` and its `href` attribute, open links in a new tab with `target="_blank"`, and jump to a section of the same page with `href="#element-id"`.
- Tell relative paths from absolute paths, and know which one to use for an image or a link that leaves your site.
- Nest tags correctly: an `<i>` inside an `<h1>`, a `<strong>` inside a `<p>`, a whole `<h2>` and `<p>` inside an `<a>`.
- Lay out content with `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` and `<td>` using plain HTML attributes such as `width`, `border`, `height` and `valign` — the way layouts were built before CSS existed.
- Embed media: an `<img>` sized with `width`, a `<video>` with `<source>`, `autoplay` and `muted`, and an `<iframe>` that puts a YouTube player inside your own page.

## 👀 What will you build?

There is no single final project here. Instead you complete 16 small graded exercises, each one a working web page you write from scratch or fix:

1. **`01` Hello World** — wrap text in `<span>` and `<strong>` and press run to see the result.
2. **`01.1` Like Word** — write your first `<p>`, mapping HTML tags to the elements of a word processor.
3. **`02` Website Structure** — add doctype, `<html>`, `<head>`, `<title>` and `<body>`, and see the title appear in the browser tab.
4. **`03` Hello without Head** — the same structure minus the `<head>`, with an `<h1>` carrying your name.
5. **`04` List of Reasons** — an ordered list `<ol>` with exactly 6 `<li>` items.
6. **`05` Create Anchors** — your first attribute: an `<a href="https://google.com">`.
7. **`06` New Window** — make that same anchor open in a new tab.
8. **`07` Same Page** — link to another section of the document using `id` and `#`.
9. **`08` Relative vs Absolute Path** — convert an image's relative `src` into a full absolute URL without breaking it.
10. **`09` Formatting Text** — reproduce a formatted document with headings, paragraphs, a `<blockquote>` and a bullet list, no CSS allowed.
11. **`10` Replicate HTML** — rebuild a page from a screenshot using `<h1>`, `<h2>`, `<ul>`, `<ol>`, `<li>` and `<p>`.
12. **`11` Nested Tags** — three nesting drills, each with its own expected result.
13. **`12` My First Table** — a 3-column contacts table with a red header row, built step by step.
14. **`13` Image with Text** — a two-column table layout: a 25% image column and a top-aligned text column.
15. **`14` Video Tag** — a full-screen background video with `autoplay`, `muted` and no controls.
16. **`15` Iframe** — a 1280x720 `<iframe>` embedding a YouTube video.

Exercise `10` is a good example of the style: you are shown an annotated screenshot and asked to produce the markup that generates it.

![Screenshot used in exercise 10: a formatted document titled The learning essay, with each part labelled in red with the HTML tag that produces it - h1 for the title, h2 for the section headings, p for the paragraph, ol for the numbered list and ul for the bullet list](https://raw.githubusercontent.com/4GeeksAcademy/html-tutorial-exercises-course/master/.learn/assets/10-replicate-html.png)

## 🎓 What do you need before starting?

- **Prior programming knowledge**: none. The first exercise assumes you have never written a tag before.
- **CSS or JavaScript**: not required. The tutorial deliberately sticks to plain HTML attributes, and exercises `09` and `12` explicitly tell you not to use CSS.
- **Setup, easiest path**: none — open the repository in GitHub Codespaces or Gitpod and the exercises start on their own.
- **Setup, local path**: Node.js 14 or higher, plus the `@learnpack/learnpack` CLI installed globally.
- **Time**: around 8 hours in total, which you can split across sessions — LearnPack remembers where you left off.

## ✅ How does the automatic grading work?

Every graded exercise folder contains a `tests.js` file next to your `index.html`. When you press the run or test button, LearnPack reads your `index.html`, parses it into a real DOM with jsdom, and runs the Jest assertions against it. There are 55 assertions in total across the 16 exercises, between 1 and 5 per exercise.

The checks query the DOM the same way a browser would. In exercise `06`, for example, the three assertions look for an `<a>` inside the `<body>`, verify its `href` points to Google, and verify its `target` attribute equals `_blank`. Each assertion has a human-readable message, so a failure reads like "The `<a>` tag should have the attribute target with `_blank` as value" rather than a stack trace.

> 💡 The tests are deliberately strict about attributes and values. Treat a red test as a hint about what is missing, not as a verdict on your code — the original authors say the same thing in the welcome exercise.

Each exercise folder also ships a `solution.hide.html` file with a reference answer, and 15 of them link a recorded video walkthrough at the top of the instructions.

## 💡 What mistakes should you avoid?

- **Reaching for CSS where the exercise wants HTML attributes.** Exercises `12` and `13` build their table layouts with `width`, `border`, `height` and `valign`, and `09` tells you outright not to add any CSS. The deliberate exception is the red header row in `12`, whose grader looks for an inline `background-color` of red on the first `<tr>`.
- **Assuming a relative path works anywhere.** A relative path such as `../../.learn/assets/rigo-baby.jpg` is resolved against the current URL. Only an absolute path, the one that includes the domain, will keep working from another site.
- **Losing the dot in `.learn`.** Exercise `08` warns about it specifically: the assets folder is `.learn`, not `learn`, and dropping the dot silently breaks the image.
- **Linking to a section that has no `id`.** `href="#upperSide"` only works if some element actually carries `id="upperSide"`. There is no other mechanism for in-page anchors.
- **Forgetting `muted` on an autoplaying video.** Exercise `14` requires `autoplay` and `muted` together, `width="100%"` and `height="100%"`, and no `controls` attribute.
- **Approximating the numbers.** The list in exercise `04` must have exactly 6 items, and the iframe in `15` is checked for the literal values `1280px` and `720px`. Close is not enough for the grader.
- **Nesting tags in the wrong direction.** In exercise `11` the `<i>` goes inside the `<h1>`, not the other way around, and both the `<h2>` and the `<p>` go inside the `<a>`.

## ❓ Frequently asked questions

### How long does it take to learn the basics of HTML?

This tutorial is estimated at 8 hours of focused work for its 17 steps, and it is labelled easy. That is enough to write a well-structured static page on your own. Getting comfortable enough to build a site people use also requires CSS, which is a separate tutorial.

### Do I need to know CSS or JavaScript first?

No. HTML comes first in every sensible learning order, and this tutorial assumes zero prior knowledge. A couple of exercises actively ask you not to use CSS so that you learn what HTML alone can do — including the pre-CSS technique of laying out a page with tables, which is worth understanding even though modern sites no longer use it.

### Do I have to install anything?

Not necessarily. Opening the repository in GitHub Codespaces or Gitpod gives you a ready-to-use VS Code environment where the exercises launch automatically. If you prefer to work offline you need Node.js 14+ and the LearnPack CLI, then `learnpack start` from the folder that contains `learn.json`.

### Is it free, and can I reuse the content?

Access costs nothing and the HTML you type into your own copy is yours. The tutorial material itself is not open source, though: the [LICENSE](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/blob/HEAD/LICENSE.md) reserves all intellectual property rights and explicitly forbids republishing, selling, sub-licensing, copying or redistributing the content. Personal use is allowed; mirroring it on your own site is not. The tutorial is published by 4Geeks Academy and also runs at [4geeks.com](https://4geeks.com/interactive-exercise/html-tutorial-exercises-course).

### Is HTML still worth learning?

Yes. HTML is the only format browsers render natively, and every framework — React, Vue, Astro, plain templates — ultimately emits it. Knowing which tag means what is also what makes a page accessible to screen readers and legible to search engines, and it is the prerequisite for CSS, forms and the DOM APIs you will use later.

### What should I learn after finishing this?

HTML forms first, since that is how a page collects data, then CSS for visual styling and CSS layouts for positioning. A conceptual refresher on any tag you get stuck on is available in the [What is HTML lesson](https://4geeks.com/lesson/what-is-html-learn-html).

### Can I see the solution if I get stuck?

Yes. Each graded exercise ships a `solution.hide.html` file, and 15 of the 16 also link a video where the author solves the exercise step by step. Reading the solution after an honest attempt is a legitimate way to learn; copying it before trying is not.

<!-- hide -->
## 📚 Other tutorials in this series

1. [Learn HTML](https://github.com/4GeeksAcademy/html-tutorial-exercises-course) ← 🔥 you are here
2. [Learn HTML5 Forms](https://github.com/4GeeksAcademy/html-forms-tutorial-exercises)
3. [Learn CSS](https://github.com/4GeeksAcademy/css-tutorial-exercises-course)
4. [Learn CSS Layouts](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises)
5. [Learn Bootstrap](https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial)

## 🚀 How to start

The fastest way is one click, no installation:

- [Open in Codespaces](https://github.com/codespaces/new/?repo=4GeeksAcademy/html-tutorial-exercises-course) (recommended)
- [Open in Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/html-tutorial-exercises-course.git)

Once VS Code opens, the LearnPack exercises should start on their own. If they don't, type this in the terminal:

```sh
$ learnpack start
```

You can also watch the [intro video](https://www.youtube.com/watch?v=V07P0hV9w_0) before you begin.

## 💻 Local installation

1. Install LearnPack globally. You need Node.js 14 or higher:

   ```sh
   $ npm i @learnpack/learnpack -g
   ```

2. Clone the repository and enter the folder:

   ```sh
   $ git clone https://github.com/4GeeksAcademy/html-tutorial-exercises-course
   $ cd html-tutorial-exercises-course
   ```

3. Start the tutorial from the same level where `learn.json` lives:

   ```sh
   $ learnpack start
   ```

More detail in the [LearnPack documentation](https://4geeks.com/docs/learnpack/quickstart-for-learners).

## 📝 How the exercises are organized

Every graded exercise is a folder inside [`exercises/`](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/tree/HEAD/exercises) containing the same set of files:

1. **`index.html`** — the file you edit. This is the whole exercise.
2. **`README.md`** — the instructions, hints and expected result, with a `README.es.md` next to it for Spanish.
3. **`tests.js`** — the Jest assertions that grade your work. You don't need to open it.
4. **`solution.hide.html`** — the reference solution, hidden by default.

The `00-welcome` folder is the only exception: it is an introduction with no code and no tests.

## 🤝 Contributors

Thanks to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

- [Alejandro Sánchez (@alesanchezr)](https://github.com/alesanchezr) — coder 💻, idea 🤔, build-tests ⚠️, pull-request-review 👀, build-tutorial ✅, documentation 📖
- [David Hay (@haydavid23)](https://github.com/haydavid23) — tests ⚠️
- [Daniel Machota (@d4rkm0nst3r)](https://github.com/d4rkm0nst3r) — build-tutorial ✅, translation 🌍
- [Paolo Lucano (@plucodev)](https://github.com/plucodev) — coder 💻, build-tests ⚠️
- [Marco Gómez (@marcogonzalo)](https://github.com/marcogonzalo) — translation 🌍
- [Charly Chacón (@charlytoc)](https://github.com/charlytoc) — remastering and video tutorials 🤖

See the [full contributor list](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/graphs/contributors). This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification and contributions of any kind are welcome.
<!-- endhide -->
