---
tutorial: "https://www.youtube.com/watch?v=p9oHBMI6gc0"
---

# `14`  Video Tag

El tag de `<video>` se utiliza para incluir un contenido de video dentro de un documento.

> Nota: Aquí puedes leer sobre los tags de video: [Html Video Tags](https://www.w3schools.com/tags/tag_video.asp)

## 📝 Instrucciones:

1. Usa el tag `<video>` para incluir este video en el sitio web: `https://github.com/breatheco-de/assets-old/blob/bb5870b89e029884360641b544665bcb037ef437/apis/video/videos/4geeks-background.mp4?raw=true`.

2. El video debe cubrir todo el sitio web, para ello vamos a aplicarle un `width="100%"` y un `height="100%"`.

3. El video debe reproducirse automáticamente, haz uso del atributo: `autoplay`.

4. El video debe estar silenciado al principio, utiliza el atributo: `muted`.

> Nota: El video NO DEBE tener controles: play, pausa, etc.

## 💡 Pistas:

+ Algo así debería ser tu código.

```html
<video width="X" height="X" muted autoplay>
	<source src="aquí va la URL del video"/>
</video>
```

+ Puedes borrar el atributo `muted` para ver el video con sonido.
