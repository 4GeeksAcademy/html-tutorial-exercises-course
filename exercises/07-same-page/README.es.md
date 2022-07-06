# `07` Same Page

Los anchors (`<a>`) también son capaces de desplazar al usuario en un sitio web, hacía un elemento específico dentro de él.

Para hacer esto, debes asignar un `id` (identificación) al elemento que deseas desplazarte, y luego, establecer la `URL` del anchor (`<a>`) a esa `id` que asignateste anteriormente, precedida por un carácter "`#`", como este:

```html
<a href="#element_id"></a>

<div id="element_id"></div>
```
## 📝 Instrucciones:

1. Crea dos anchors `<a>`, uno que desplace al usuario al **final** del sitio web y otro que lo envíe al **comienzo** del sitio web.

## 💡 Pista:

+ La única forma de usar anchors como esta, es con la `id` de los elementos, no hay otra forma.

+ Debes agregarle un `id` a ambas etiquetas `<h2>` para poder redirigir al usuario con los anchors `<a>`.