# `08` Ruta Relativa vs Absoluta

Este es el código típico que necesitas para usar una etiqueta de anclaje o link en un sitio web:

```html
<a href="where/to/take/the/user">Click Me</a>
```
Cuando agregas una etiqueta `<a>` (ancla) en un sitio web, debes establecer la propiedad `href` en la URL donde deseas que esa ancla lleve a los usuarios, esa ruta de URL puede ser absoluta o relativa:

## Ejemplos de rutas relativas:

```html
<a href="index.html">Llevame a index.html desde el directorio actual (en el url)</a>
<a href="/graphics/image.png">Llevame a /graphics/images.png in importar el URL actual (solo el dominio es relevante y sera reutilizado)</a>
<a href="/help/articles/how-do-i-set-up-a-webpage.html">Take me to /help/articles/how-do-i-set-up-a-webpage.html</a>
```

Si usas rutas relativas, debes suponer que la parte inicial de la ruta está oculta y es igual a la ruta actual en la que estoy parado ahora (que se muestra en la barra de URL).

## Rutas Absolutas
```html
<a href="http://www.mysite.com">Click Me</a>
<a href="http://www.mysite.com/graphics/image.png">Click Me</a>
<a href="http://www.mysite.com/help/articles/how-do-i-set-up-a-webpage.html">Click Me</a>
```

La diferencia es que las rutas absolutas llevan al usuario a un sitio web diferente, las rutas relativas llevan al usuario al mismo sitio web pero en un directorio o ruta diferente.

Por ejemplo: Si miras tu barra de URL en este momento, la URL es algo así como:
```
https://<url>/html-exercises
```

## 📝 Instrucciones

Por favor crea un ancla con una ruta relativa que lleve al usuario al tercer ejercicio: `03`.
Tendrás que encontrar esa url de ese ejercicio y hacer el enlace de anclaje a él utilizando una ruta relativa.

## 💡 Pista

Aquí hay un video que explica la diferencia entre relativo y absoluto
https://www.youtube.com/watch?v=ephId3mYu9o