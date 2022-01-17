# `08` Relative vs Absolute Path

Este es el código típico que necesitas para usar una etiqueta o tag de imagen

```html
<img src="where/to/get/the/image" />
```
Cuando agregas una etiqueta `<img />` (imagen) en un sitio web, tienes que establecer la propiedad `src` en la URL de donde deseas tomar esa imagen, esa ruta de URL puede ser **absoluta o relativa**:

## Ejemplos de Rutas Relativas:

```html
<img src="../../.learn/assets/rigo-baby.jpg" />
<a href="index.html">Take me to index.html from the current directory</a>
<a href="/graphics/image.png">Take me to image.png that is inside the /graphics/ directory</a>
<a href="/help/articles/how-do-i-set-up-a-webpage.html">Take me to how-do-i-set-up-a-webpage.html</a>
```

Si usas **rutas relativas** , tienes que asumir que la parte inicial de la ruta está oculta y es igual a la ruta actual en la barra de URL.

## Ejemplos de Rutas Absolutas:

```html
<img src="https://github.com/learnpack/html-tutorial-exercises-course/raw/master/HTML-badge.png" />
<a href="http://www.mysite.com">Click Me</a>
<a href="http://www.mysite.com/graphics/image.png">Click Me</a>
<a href="http://www.mysite.com/help/articles/how-do-i-set-up-a-webpage.html">Click Me</a>
```

**Las rutas absolutas** contienen la URL completa porque normalmente se utilizan para llevar al usuario a un sitio web diferente.
 
**Las rutas relativas** no contienen la primera parte de la URL (el nombre de dominio) y solo pueden redirigir al usuario a diferentes partes del mismo sitio web.

## 📝 Instrucciones:

1. Comienza por **building** (haz clic en el botón de build o de compilación) el sitio web actual, si abre la compilación, verás una imagen.

2. Modifica la propiedad `src` de la imagen y convierte la URL en una URL absoluta. Asegúrate de que la imagen aún se muestre correctamente después de realizar los cambios.

## 💡 Pista:

+ Tu ruta absoluta debe comenzar con esto: {{publicUrl}}

+ Si construyes (`build`) el ejercicio, abre el sitio web y haz un clic derecho en la imagen, el menú contextual mostrará una opción 'Copiar dirección de imagen' que copiará tu URL absoluta en tu portapapeles.

+ Aquí hay un video que explica [la diferencia entre rutas relativas y absolutas](https://www.youtube.com/watch?v=ephId3mYu9o)