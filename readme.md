# 🐝 BeeCalderones

**Apiario de la Familia Calderón**  
**Proyecto integrador:** Tecnologías de Internet I (ISW-311)  
**Estudiante:** Ángel Luis Calderón  
**Matrícula:** 2024-0380

## Descripción

BeeCalderones es un sitio web académico sobre el apiario de la Familia Calderón. Presenta el emprendimiento, las opciones de compra de miel y el servicio de evaluación y rescate de enjambres.

## Páginas

- **`index.html` — Inicio:** presentación del apiario, misión, visión, valores, objetivos, importancia de las abejas y preguntas frecuentes.
- **`servicios.html` — Servicios:** catálogo de miel, tabla de precios, descripción del rescate de enjambres y glosario apícola.
- **`contacto.html` — Contacto:** teléfono, zona de referencia, enlaces de atención y formulario de consultas.

## Productos y servicios

| Producto o servicio | Precio |
|---|---:|
| Miel en galón | RD$2,400 |
| Miel en medio galón | RD$1,200 |
| Miel en botella | RD$800 |
| Evaluación y rescate de enjambres | A consultar |

**Teléfono indicado en el sitio:** 809-000-1100.

## Mapa de etiquetas: las nueve familias del taller

Esta tabla describe **lo que aparece realmente en los archivos revisados**. Las ausencias se detallan después, para no afirmar que el proyecto cumple requisitos que todavía no implementa.

| Familia | Página y sección | Etiquetas comprobadas | ¿Por qué se utilizaron? |
|---|---|---|---|
| **1. Cimientos** | Las tres páginas, estructura general | `<!DOCTYPE html>`, `html`, `head`, `meta` (charset y viewport), `title`, `body` | Estas etiquetas definen la base del documento, permiten mostrar acentos y adaptar la página a diferentes tamaños de pantalla. |
| **2. Encabezados y párrafos** | Las tres páginas | `h1`, `h2`, `h3`, `p`, `br`; además, `h4` y `hr` en Inicio y `hr` en Servicios | Los títulos ordenan la información; los párrafos explican cada tema; los saltos y líneas separan contenidos cuando corresponde. |
| **3. Texto y citas** | `index.html`: bienvenida, quiénes somos y sección informativa | `strong`, `em`, `q`, `abbr`, `sup`, `sub`, `blockquote`, `cite` | Permiten destacar palabras, escribir una frase breve entre comillas, explicar «RD», representar unidades como m² y fórmulas como H₂O, y presentar una cita con su referencia. |
| **4. Listas** | `index.html`: valores y objetivos; `servicios.html`: glosario; `contacto.html`: accesos rápidos | `ul`, `li`, `dl`, `dt`, `dd` | Las listas con viñetas agrupan valores, objetivos y enlaces; la lista de definiciones presenta términos apícolas con su significado. |
| **5. Enlaces** | Menú de las tres páginas; catálogo y accesos rápidos de Contacto | `a` con `href`, `target="_blank"`, `rel="noopener"`, enlaces `tel:` y enlaces a otras páginas | Permiten navegar entre Inicio, Servicios y Contacto; abrir WhatsApp en otra pestaña y realizar una llamada desde dispositivos compatibles. |
| **6. Imágenes y multimedia** | `index.html`: bienvenida; `servicios.html`: imágenes de enjambres | `img` con `src` y `alt` | Las imágenes ilustran el apiario y los enjambres; el texto alternativo explica lo que representan. |
| **7. Tablas** | `servicios.html`: catálogo comercial | `table`, `caption`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`, `scope`, `rowspan`, `colspan` | Organizan las presentaciones, categorías y precios. Se unen dos filas de servicios apícolas y las celdas de la nota final para evitar repeticiones. |
| **8. Formularios** | `contacto.html`: «Envíanos tu solicitud» | `form`, `fieldset`, `legend`, `label`, `input` (`text`, `email`, `tel`, `checkbox`, `number`, `radio`), `textarea`, `button` | Permiten recoger datos de contacto y conocer qué producto o servicio solicita el visitante. Los grupos separan datos personales e información del pedido. |
| **9. Semántica y div/span** | `index.html`: estructura y preguntas frecuentes; `servicios.html`: catálogo; `contacto.html`: datos de contacto | `header`, `nav`, `section`, `article`, `aside`, `footer`, `main`, `address`, `details`, `summary`, `div`, `span` | Identifican áreas con una función específica: navegación, contenido, fichas de productos, preguntas desplegables y datos de contacto. `div` y `span` agrupan elementos cuando es necesario. **No todas aparecen aún en todas las páginas.** |


Funciones de JavaScript incluidas en js/app.js:

1. alternarTema() - Cambia entre modo claro y modo oscuro y lo guarda en localStorage.
2. alternarMenu() - Abre y cierra el menu de navegacion en pantallas de celular.
3. pintarTarjetas() y filtrarCatalogo() - Muestra y filtra los productos en servicios.html.
4. Validacion del formulario - Revisa nombre, correo, telefono dominicano (809/829/849) y pedido en contacto.html.
**BeeCalderones — Tradición familiar, dulzura natural.**
