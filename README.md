# Invitación digital · Mis XV años

Sitio estático (HTML + CSS + JS), listo para GitHub Pages. Diseño inspirado en invitaciones tipo "wedding site": banda de color con tarjetas flotantes, fotos en arco, florales de línea, un itinerario tipo tarjeta en arco con línea de tiempo vertical, y música de fondo en bucle.

## 1. Qué archivos editar

| Archivo | Qué contiene |
|---|---|
| `index.html` | Todo el texto y las fotos. Busca los comentarios `<!-- EDITABLE -->` |
| `script.js` | La fecha exacta del countdown y tu número de WhatsApp |
| `style.css` | Colores, tipografías y tamaños (sección `:root` al inicio) |

## 2. Datos que YA están cargados

- Nombre: **Valeria** · Fecha: **26 de septiembre de 2026**
- Padres: Bétzi Marroquín & David Ruano
- Misa: 4:00 PM, Iglesia Nuestra Señora del Carmen
- Recepción: 5:30 PM, Salón Centro de Convenciones Las Torrelleanas
- Itinerario: Misa 4:00 · Recepción 5:30 · Cena 6:30 · Baile 7:30
- Vestimenta: evitar rosado, celeste y plateado
- Pases: 2 lugares reservados
- Sugerencia de regalo: en efectivo, con sobre el día del evento
- RSVP por WhatsApp

## 3. Lo que falta que agregues tú

### a) Tu número de WhatsApp
En `script.js`:
```js
const WHATSAPP_NUMBER = '50212345678'; // tu número con código de país, sin +
```

### b) Los links de "Ver ubicación"
En `index.html`, reemplaza cada `href="https://maps.google.com"` por el link real de Maps de la iglesia y del salón.

### c) Las fotos — son 12 en total
Busca cada `<div class="photo ..." aria-hidden="true"></div>` en `index.html` y reemplázalo por:
```html
<img class="photo NOMBRE-DE-CLASE" src="assets/NOMBRE-ARCHIVO.jpg" alt="">
```
(mantén la misma clase que tenía el div, por ejemplo `photo--hero`, `photo--tall`, `photo--arch`, `photo--pair-item`, `gallery__item`).

Lista de fotos que necesitas, en el orden en que aparecen:

1. **Hero** (`photo--hero`) — foto vertical de cuerpo completo, será el fondo de toda la primera pantalla.
2. **Bendición** (`photo--tall`) — foto vertical, después de tu nombre en script.
3. **Misa** (`photo--arch`) — foto que se recorta en forma de arco.
4. **Recepción** (`photo--arch`) — otra foto en forma de arco.
5–6. **Pareja de fotos junto a Recepción** (`photo--pair-item` x2) — cuadradas.
7. **Sugerencia de regalo** (`photo--tall`) — foto vertical.
8. **Pases / cuenta regresiva** (`photo--tall`, dentro de `.pases-photo`) — foto vertical (el countdown se sobrepone encima).
9–10. **Pareja de fotos en RSVP** (`photo--pair-item` x2) — cuadradas.
11–16. **Galería** (`gallery__item` x6) — cuadro de 6 fotos variadas.

El **itinerario** ahora es una tarjeta de color vino con íconos y ya no lleva foto de fondo.

Sube todas a una carpeta `assets/` en la raíz del repositorio.

### d) La canción de fondo
El sitio ahora reproduce música en bucle apenas se abre, con un botoncito ⏯️ flotante abajo a la derecha para pausarla o volverla a poner.

1. Sube tu canción (en formato `.mp3`) a `assets/` con el nombre exacto **`musica.mp3`**.
2. Usa solo música de la que tengas los derechos o licencia (por ejemplo, música libre de regalías), ya que la mayoría de canciones comerciales están protegidas por derechos de autor.
3. Casi todos los navegadores (sobre todo en celular) bloquean el sonido automático hasta que la persona toca la pantalla — por eso el script intenta reproducirla sola y, si el navegador la bloquea, arranca en cuanto alguien haga el primer clic o toque en cualquier parte de la página.

## 4. Publicar en GitHub Pages

1. Sube `index.html`, `style.css`, `script.js` y la carpeta `assets/` a la raíz del repositorio.
2. Ve a **Settings → Pages**, con "Source" en `Deploy from a branch`, rama `main`, carpeta `/ (root)`.
3. Tu link: `https://tu-usuario.github.io/nombre-del-repositorio/`

## 5. Antes de compartir

Abre `index.html` en tu navegador para revisar que todo cargue bien antes de subirlo, y recuerda: cualquier cambio que subas tarda 1-2 minutos en reflejarse, y si alguien ya vio el sitio antes, puede necesitar un refresh forzado (Ctrl+Shift+R / Cmd+Shift+R) para ver la versión nueva.
