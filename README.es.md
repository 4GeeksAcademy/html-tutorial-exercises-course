<!-- hide -->
<div align="center">

# Aprende lo básico de HTML Interactivamente

[![Tutorial certificado](https://img.shields.io/badge/4Geeks_Academy-Tutorial_certificado-2563eb?style=for-the-badge)](https://4geeks.com/es/interactive-exercise/html-tutorial-exercises-course)
[![Autocorregido con LearnPack](https://img.shields.io/badge/LearnPack-16_ejercicios_autocorregidos-2563eb?style=for-the-badge)](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/tree/HEAD/exercises)
[![Abrir en Codespaces](https://img.shields.io/badge/Abrir_en-Codespaces-fb5a1f?style=for-the-badge&logo=github)](https://github.com/codespaces/new/?repo=4GeeksAcademy/html-tutorial-exercises-course)

![Imagen de portada del tutorial: las palabras Learn HTML interactive en rojo oscuro junto al logotipo naranja del escudo de HTML5](https://raw.githubusercontent.com/4GeeksAcademy/html-tutorial-exercises-course/master/preview.png)

</div>
<!-- endhide -->

Este tutorial enseña HTML con 16 ejercicios autocorregidos más un paso de bienvenida: unas 8 horas de trabajo, dificultad fácil y sin necesidad de saber programar. Editas un fichero `index.html` real, pulsas run para previsualizarlo y 55 comprobaciones automáticas te dicen al instante si el marcado está bien. Cubre estructura del documento, encabezados, listas, enlaces, rutas relativas y absolutas, tablas, imágenes, `<video>` e `<iframe>`. Quince ejercicios traen solución en vídeo.

<!-- hide -->
## 📋 Sobre este tutorial

- **Dificultad**: fácil — pensado para principiantes absolutos, no hace falta saber HTML
- **Duración estimada**: 8 horas
- **Ejercicios**: 17 pasos (1 de bienvenida + 16 corregidos automáticamente)
- **Comprobaciones automáticas**: 55 aserciones sobre Jest + jsdom
- **Soluciones en vídeo**: sí, 15 de los 16 ejercicios corregidos tienen una
- **Tecnologías**: HTML5, LearnPack, Node.js, Jest
- **Editor**: VS Code (Codespaces, Gitpod o local), editor de LearnPack v5.0
- **Idiomas**: [English](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/blob/HEAD/README.md) · [Español](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/blob/HEAD/README.es.md)
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

HTML es un lenguaje de marcado: todo lo que escribes vive dentro de etiquetas de apertura y cierre. Este tutorial lleva esa idea desde un simple `<span>` hasta un documento completo con tablas, contenido multimedia y navegación interna. Al terminar sabrás:

- Montar el esqueleto de cualquier página: `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>` y `<body>`, y qué pasa cuando dejas fuera el `<head>`.
- Usar las etiquetas de documento para las que nació HTML: `<h1>` y `<h2>`, `<p>`, `<strong>`, `<i>`, `<blockquote>`, `<br />`, `<ul>`, `<ol>` y `<li>`.
- Enlazar páginas con `<a>` y su atributo `href`, abrir un enlace en una pestaña nueva con `target="_blank"` y saltar a una sección de la misma página con `href="#id-del-elemento"`.
- Distinguir una ruta relativa de una absoluta y saber cuál toca en cada caso, sea una imagen o un enlace que se va fuera de tu sitio.
- Anidar etiquetas correctamente: una `<i>` dentro de un `<h1>`, un `<strong>` dentro de un `<p>`, y hasta un `<h2>` y un `<p>` enteros dentro de un `<a>`.
- Maquetar con `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` y `<td>` usando atributos HTML puros como `width`, `border`, `height` y `valign`, que es como se maquetaba antes de que existiera CSS.
- Incrustar medios: una `<img>` dimensionada con `width`, un `<video>` con `<source>`, `autoplay` y `muted`, y un `<iframe>` que mete un reproductor de YouTube dentro de tu propia página.

## 👀 ¿Qué vas a construir?

Aquí no hay un proyecto final único. Lo que haces son 16 ejercicios pequeños y corregidos, cada uno una página web que escribes desde cero o que arreglas:

1. **`01` Hello World** — envuelve texto en `<span>` y `<strong>` y pulsa run para ver el resultado.
2. **`01.1` Like Word** — tu primer `<p>`, relacionando las etiquetas HTML con los elementos de un procesador de textos.
3. **`02` Website Structure** — añade doctype, `<html>`, `<head>`, `<title>` y `<body>`, y ve el título aparecer en la pestaña del navegador.
4. **`03` Hello without Head** — la misma estructura pero sin `<head>`, con un `<h1>` que lleva tu nombre.
5. **`04` List of Reasons** — una lista ordenada `<ol>` con exactamente 6 elementos `<li>`.
6. **`05` Create Anchors** — tu primer atributo: un `<a href="https://google.com">`.
7. **`06` New Window** — haz que ese mismo enlace se abra en una pestaña nueva.
8. **`07` Same Page** — enlaza a otra sección del documento usando `id` y `#`.
9. **`08` Relative vs Absolute Path** — convierte el `src` relativo de una imagen en una URL absoluta completa sin romperla.
10. **`09` Formatting Text** — reproduce un documento con formato usando encabezados, párrafos, un `<blockquote>` y una lista de viñetas, sin CSS.
11. **`10` Replicate HTML** — reconstruye una página a partir de una captura usando `<h1>`, `<h2>`, `<ul>`, `<ol>`, `<li>` y `<p>`.
12. **`11` Nested Tags** — tres ejercicios de anidado, cada uno con su resultado esperado.
13. **`12` My First Table** — una tabla de contactos de 3 columnas con cabecera roja, construida paso a paso.
14. **`13` Image with Text** — maquetación en dos columnas con tabla: una columna de imagen al 25% y otra de texto alineada arriba.
15. **`14` Video Tag** — un vídeo de fondo a pantalla completa con `autoplay`, `muted` y sin controles.
16. **`15` Iframe** — un `<iframe>` de 1280x720 que incrusta un vídeo de YouTube.

El ejercicio `10` resume bien el estilo del tutorial: te enseñan una captura anotada y tienes que escribir el marcado que la genera.

![Captura usada en el ejercicio 10: un documento con formato titulado The learning essay, con cada parte etiquetada en rojo con la etiqueta HTML que la produce - h1 para el título, h2 para los encabezados de sección, p para el párrafo, ol para la lista numerada y ul para la lista de viñetas](https://raw.githubusercontent.com/4GeeksAcademy/html-tutorial-exercises-course/master/.learn/assets/10-replicate-html.png)

## 🎓 ¿Qué necesitas antes de empezar?

- **Conocimientos previos de programación**: ninguno. El primer ejercicio da por hecho que nunca has escrito una etiqueta.
- **CSS o JavaScript**: no hacen falta. El tutorial se queda a propósito en atributos HTML puros, y los ejercicios `09` y `12` te piden de forma explícita que no uses CSS.
- **Instalación, camino fácil**: ninguna. Abres el repositorio en GitHub Codespaces o en Gitpod y los ejercicios arrancan solos.
- **Instalación, camino local**: Node.js 14 o superior y la CLI `@learnpack/learnpack` instalada de forma global.
- **Tiempo**: unas 8 horas en total, que puedes repartir en varias sesiones — LearnPack recuerda por dónde ibas.

## ✅ ¿Cómo funciona la corrección automática?

Cada carpeta de ejercicio corregido tiene un fichero `tests.js` junto a tu `index.html`. Cuando pulsas el botón de run o de test, LearnPack lee tu `index.html`, lo convierte en un DOM real con jsdom y ejecuta contra él las aserciones de Jest. En total hay 55 aserciones repartidas entre los 16 ejercicios, entre 1 y 5 por ejercicio.

Las comprobaciones consultan el DOM igual que lo haría un navegador. En el ejercicio `06`, por ejemplo, las tres aserciones buscan un `<a>` dentro del `<body>`, comprueban que su `href` apunta a Google y comprueban que su atributo `target` vale `_blank`. Cada aserción lleva un mensaje legible, así que un fallo se lee como "la etiqueta `<a>` debería tener el atributo target con valor `_blank`" y no como una traza de error.

> 💡 Los tests son deliberadamente estrictos con los atributos y sus valores. Toma un test en rojo como una pista de lo que falta, no como un veredicto sobre tu código: los propios autores lo advierten en el ejercicio de bienvenida.

Cada carpeta incluye además un `solution.hide.html` con la solución de referencia, y 15 de los ejercicios enlazan un vídeo con la resolución al principio de las instrucciones.

## 💡 ¿Qué errores conviene evitar?

- **Tirar de CSS donde el ejercicio pide atributos HTML.** Los ejercicios `12` y `13` maquetan sus tablas con `width`, `border`, `height` y `valign`, y el `09` dice sin rodeos que no añadas nada de CSS. La excepción deliberada es la fila de cabecera roja del `12`, cuyo corrector busca un `background-color` rojo en línea sobre el primer `<tr>`.
- **Dar por hecho que una ruta relativa funciona desde cualquier sitio.** Una ruta relativa como `../../.learn/assets/rigo-baby.jpg` se resuelve contra la URL actual. Solo una ruta absoluta, la que incluye el dominio, seguirá funcionando desde otro sitio web.
- **Perder el punto de `.learn`.** El ejercicio `08` avisa de esto en concreto: la carpeta de recursos es `.learn`, no `learn`, y quitarle el punto rompe la imagen sin decir nada.
- **Enlazar a una sección que no tiene `id`.** `href="#upperSide"` solo funciona si algún elemento lleva de verdad `id="upperSide"`. No hay otra forma de hacer anclas internas.
- **Olvidar `muted` en un vídeo con autoplay.** El ejercicio `14` exige `autoplay` y `muted` juntos, `width="100%"` y `height="100%"`, y ningún atributo `controls`.
- **Aproximar las cifras.** La lista del ejercicio `04` tiene que llevar exactamente 6 elementos, y en el `15` el iframe se comprueba con los valores literales `1280px` y `720px`. Al corrector no le vale "casi".
- **Anidar al revés.** En el ejercicio `11` la `<i>` va dentro del `<h1>`, no al contrario, y tanto el `<h2>` como el `<p>` van dentro del `<a>`.

## ❓ Preguntas frecuentes

### ¿Cuánto se tarda en aprender lo básico de HTML?

Este tutorial estima 8 horas de trabajo concentrado para sus 17 pasos y está etiquetado como fácil. Con eso ya escribes por tu cuenta una página estática bien estructurada. Llegar a construir un sitio que alguien use requiere además CSS, que es otro tutorial aparte.

### ¿Necesito saber CSS o JavaScript antes?

No. HTML va primero en cualquier orden de aprendizaje razonable, y este tutorial parte de cero. Un par de ejercicios te piden expresamente que no uses CSS para que veas hasta dónde llega HTML solo, incluida la maquetación con tablas anterior a CSS, que conviene entender aunque hoy ya no se use en sitios modernos.

### ¿Tengo que instalar algo?

No necesariamente. Abrir el repositorio en GitHub Codespaces o en Gitpod te da un VS Code listo donde los ejercicios se lanzan automáticamente. Si prefieres trabajar sin conexión necesitas Node.js 14+ y la CLI de LearnPack, y después ejecutar `learnpack start` desde la carpeta donde está `learn.json`.

### ¿Es gratis? ¿Puedo reutilizar el contenido?

Acceder no cuesta nada y el HTML que escribas en tu propia copia es tuyo. Ahora bien, el material del tutorial no es open source: la [LICENCIA](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/blob/HEAD/LICENSE.md) se reserva todos los derechos de propiedad intelectual y prohíbe expresamente republicar, vender, sublicenciar, copiar o redistribuir el contenido. El uso personal sí está permitido; replicarlo en tu web, no. El tutorial lo publica 4Geeks Academy y también se puede hacer en [4geeks.com](https://4geeks.com/es/interactive-exercise/html-tutorial-exercises-course).

### ¿Sigue mereciendo la pena aprender HTML?

Sí. HTML es el único formato que los navegadores renderizan de forma nativa, y todos los frameworks — React, Vue, Astro, plantillas de toda la vida — acaban emitiéndolo. Saber qué significa cada etiqueta es además lo que hace que una página sea accesible para un lector de pantalla y legible para un buscador, y es el requisito previo de CSS, los formularios y las APIs del DOM que usarás después.

### ¿Qué aprendo después de esto?

Primero formularios HTML, que es como una página recoge datos; después CSS para el aspecto visual y CSS Layouts para la colocación. Si te atascas con alguna etiqueta, tienes un repaso conceptual en la [lección sobre qué es HTML](https://4geeks.com/es/lesson/what-is-html-learn-html).

### ¿Puedo ver la solución si me atasco?

Sí. Cada ejercicio corregido incluye un fichero `solution.hide.html`, y 15 de los 16 enlazan además un vídeo donde el autor resuelve el ejercicio paso a paso. Leer la solución después de intentarlo en serio es una forma legítima de aprender; copiarla antes de intentarlo, no.

<!-- hide -->
## 📚 Otros tutoriales de la serie

1. [Aprende HTML](https://github.com/4GeeksAcademy/html-tutorial-exercises-course) ← 🔥 estás aquí
2. [Aprende Formularios HTML5](https://github.com/4GeeksAcademy/html-forms-tutorial-exercises)
3. [Aprende CSS](https://github.com/4GeeksAcademy/css-tutorial-exercises-course)
4. [Aprende CSS Layouts](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises)
5. [Aprende Bootstrap](https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial)

## 🚀 Cómo empezar

Lo más rápido es un clic, sin instalar nada:

- [Abrir en Codespaces](https://github.com/codespaces/new/?repo=4GeeksAcademy/html-tutorial-exercises-course) (recomendado)
- [Abrir en Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/html-tutorial-exercises-course.git)

Cuando se abra VS Code, los ejercicios de LearnPack deberían arrancar solos. Si no lo hacen, escribe esto en la terminal:

```sh
$ learnpack start
```

También puedes ver el [vídeo de introducción](https://www.youtube.com/watch?v=kDQAnCqGS-w) antes de empezar.

## 💻 Instalación local

1. Instala LearnPack de forma global. Necesitas Node.js 14 o superior:

   ```sh
   $ npm i @learnpack/learnpack -g
   ```

2. Clona el repositorio y entra en la carpeta:

   ```sh
   $ git clone https://github.com/4GeeksAcademy/html-tutorial-exercises-course
   $ cd html-tutorial-exercises-course
   ```

3. Arranca el tutorial desde el mismo nivel donde está `learn.json`:

   ```sh
   $ learnpack start
   ```

Tienes más detalle en la [documentación de LearnPack](https://4geeks.com/es/docs/learnpack).

## 📝 Cómo están organizados los ejercicios

Cada ejercicio corregido es una carpeta dentro de [`exercises/`](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/tree/HEAD/exercises) con este mismo conjunto de ficheros:

1. **`index.html`** — el fichero que editas. El ejercicio es esto.
2. **`README.md`** — las instrucciones, las pistas y el resultado esperado, con un `README.es.md` al lado para la versión en español.
3. **`tests.js`** — las aserciones de Jest que corrigen tu trabajo. No necesitas abrirlo.
4. **`solution.hide.html`** — la solución de referencia, oculta por defecto.

La carpeta `00-welcome` es la única excepción: es una introducción sin código y sin tests.

## 🤝 Colaboradores

Gracias a estas personas maravillosas ([leyenda de emojis](https://github.com/kentcdodds/all-contributors#emoji-key)):

- [Alejandro Sánchez (@alesanchezr)](https://github.com/alesanchezr) — código 💻, idea 🤔, tests ⚠️, revisión de pull requests 👀, construcción del tutorial ✅, documentación 📖
- [David Hay (@haydavid23)](https://github.com/haydavid23) — tests ⚠️
- [Daniel Machota (@d4rkm0nst3r)](https://github.com/d4rkm0nst3r) — construcción del tutorial ✅, traducción 🌍
- [Paolo Lucano (@plucodev)](https://github.com/plucodev) — código 💻, tests ⚠️
- [Marco Gómez (@marcogonzalo)](https://github.com/marcogonzalo) — traducción 🌍
- [Charly Chacón (@charlytoc)](https://github.com/charlytoc) — remasterización y vídeos 🤖

Aquí está la [lista completa de colaboradores](https://github.com/4GeeksAcademy/html-tutorial-exercises-course/graphs/contributors). Este proyecto sigue la especificación [all-contributors](https://github.com/kentcdodds/all-contributors) y toda contribución es bienvenida.
<!-- endhide -->
