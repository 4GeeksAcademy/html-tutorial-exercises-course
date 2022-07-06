# `12` My first table

Vamos a crear una tabla de datos con solamente código HTML. Esta va a llevar la siquiente información:

![demo](../../.learn/assets/12-my-first-table-0.png?raw=true)

Sin usar `CSS`, con `HTML` simple puedes agregar algunos estilos básicos a los elementos.

Vamos a practicar realizando las siguientes tareas para jugar con el formato de tabla. ¿Estás listo? 😉

## 📝 Instrucciones:

1. Agrega el atributo `width` (ancho) de 100% al `<table>` y un `border` (borde) de `1` (Usa solo atributos HTML básicos en las etiquetas).

```html
<table width="X" border="X"></table>
```

2. Dentro del tag `<table>`, agrega el tag `<thead>`.

```html
<table width="X" border="X">
		<thead></thead>
</table>
```

3. Ya teniendo el tag `<thead>` vamos a crear dentro otro tag `<tr>`, al cual vamos a asignarle  un `height`  (altura) de `40` y  un `background-color` (color de fondo) rojo. 

```html
<table width="X" border="X">
		<thead>
            <tr height="X" style="background-color:X"></tr>
        </thead>
</table>
```

4. Dentro de ese `<tr>`, vamos a hacer 3 `<th>` para formar las celdas de nuestra tabla con la información que vamos a pedir.

```html
<table width="X" border="X">
		<thead>
            <tr height="X" style="background-color:X">
                <th>Name</th>
				<th>Last Name</th>
				<th>Phone Number</th>
            </tr>
        </thead>
</table>
```

5. Por último, debajo del tag `<table>` vamos a repetir 3 veces mas nuestros `<tr>` para completar las 3 columnas y filas faltantes de nuestra tabla. (Recuerda llenarlas con la información de primer cuadro)

```html
<tr>
	<th>Name</th>
	<th>Last Name</th>
	<th>Phone Number</th>
</tr>
<tr>
	<th>Name</th>
	<th>Last Name</th>
	<th>Phone Number</th>
</tr>
<tr>
	<th>Name</th>
	<th>Last Name</th>
	<th>Phone Number</th>
</tr>
```

## Resultado Esperado:

![demo](../../.learn/assets/12-my-first-table.png?raw=true)


## 💡 Pista:

+ Después de cada paso dale clic a `build`, para asegurarte que todo va bien.

+ Puedes copiar los bloques de código para que no tengas que escribirlos 3 veces más, solo recuerda cambiar la información de las celdas.

+ ¡No uses CSS! use atributos HTML básicos en las etiquetas.