# Órbita 2: sistema visual de Listia

## Enlaces

| Qué | Enlace |
|---|---|
| Archivo de Figma (versión "Entrega Órbita 2") | |
| Prototipo (enlace que empieza por `figma.com/proto/`) | |
| Proyecto de Google Stitch (solo si lo has usado) | |

## Dónde está cada cosa en Figma

| Entregable | Página y sección del archivo |
|---|---|
| Inventario de decisiones | |
| Wireframes rediseñados con sus notas | |
| Componentes | |
| Mockups del happy path | |
| Pantalla principal en el segundo ancho | |
| Pantallas en modo oscuro | |
| Guía de estilo | |

## Lista de comprobación de Figma

- [X] Variables en dos colecciones (primitivos y semánticos), con alias, modos claro y oscuro, ámbito, descripción y sintaxis de código.
- [X] Estilos de texto, efecto y retícula vinculados a las variables.
- [X] Componentes con Auto layout, variables, propiedades y variantes de estado.
- [ ] Mockups construidos enteros con Auto layout y espacios sacados de variables.
- [ ] Pantalla principal en un segundo ancho, con los mismos componentes.
- [X] Modo oscuro aplicado con el selector de modo.
- [X] Prototipo que recorre el happy path completo.
- [X] Prueba 1 superada: al cambiar `color/primary`, cambian todas las pantallas a la vez.
- [X] Prueba 2 superada: con todos los mockups en modo oscuro, nada desaparece contra el fondo.

## Resumen de decisiones

### Rediseño de los wireframes
La pantalla que mas he rediseñado ha sido principalmente el **Menú Principal**. En mi wireframe lo veia muy vacio pero no se me ocurria que podia poner en una web de ese estilo,a si que le pedi un poco de insipiracion y me quede con lo que me parecia mas util y que mas pegaba con lo que yo queria hacer.

### Color
He usado el Azul pizarra (#202330) como color principal acompañado de diferentes tonalidades de gris (#6C757D) y blanco (#FFFFFF). Elegí esta paleta debido a:

- Reducción de la fatiga visual: Dado que la plataforma está pensada para utilizarse de forma continuada durante y después de la jornada laboral, se han evitado intencionadamente los tonos hipersaturados o excesivamente brillantes. Los grises y blancos aportan neutralidad, mientras que el azul pizarra genera una calma que previene el agobio visual del usuario.

- Coherencia con el código semántico de colores: En la interfaz se emplearán colores de estado (verde, amarillo y rojo). El azul pizarra actúa como un tono base neutro que contrasta sin "competir" visualmente con estos indicadores. Esto garantiza que las alertas destaquen adecuadamente sin romper la armonía cromática ni generar incongruencias estéticas.

### Tipografía
He usado Plus Jakarta Sans e Inter:

- **Títulos claros y modernos (Plus Jakarta Sans)**: Al tener una forma limpia y moderna, ayuda a destacar las secciones importantes y permite que el usuario identifique rápido dónde está de un solo vistazo.

- **Texto fácil de leer (Inter)**: Esta letra está especialmente pensada para leerse muy bien en pantallas de ordenador, incluso en tamaños pequeños. Como la web se va a usar durante muchas horas, ayuda a que la lectura sea fluida y no canse la vista.

- **Combinación equilibrada**: Ambas fuentes encajan muy bien juntas, logrando un diseño ordenado y limpio sin recargar la pantalla.

### Espaciado y retícula

- Base de la escala (Sistema de 8px): Todas las distancias, márgenes internos (padding) y espacios entre elementos se han definido en múltiplos de 8 (8px, 16px, 24px, 32px, 48px...), asegurando una alineación limpia y armónica.

- Retícula para Ordenador (Desktop):

  - Columnas: 12 columnas.

  - Medianil (Gutter): 25 px de separación entre columnas para organizar cómodamente el contenido.

- Retícula para Móvil (Mobile):

  - Columnas: 4 columnas.

  - Medianil (Gutter): 16 px (estándar de interfaz móvil para evitar que los elementos colisionen en pantallas estrechas).

### Componentes

| Componente | Descripción | Variantes / Estados |
| :--- | :--- | :--- |
| **Boton formulario** | Botón de acción principal con icono de flecha. | • **Default (Primario):** Fondo azul oscuro con texto blanco.<br>• **Hover / Focus (Secundario):** Fondo gris azulado. |
| **Boton añadir** | Botón cuadrado pequeño con icono de suma (`+`). | • **Default:** Fondo oscuro.<br>• **Hover / Secondary:** Fondo gris. |
| **Boton desplegar menu** | Botón de menú con icono de tres líneas horizontales. | • **Default:** Estado base activado/desactivado. |
| **Boton secunadario - Sesion y Registro** | Pestaña o enlace de texto simple. | • **Default:** Texto destacado.<br>• **Secundario:** Texto atenuado/desactivado. |
| **Mostrar Info M Pedidos** | Tarjeta de información/resumen de pedidos. | • **Default:** Fondo blanco con bordes definidos.<br>• **Hover / Lectura:** Fondo gris claro con menor contraste. |
| **Producto** | Etiqueta de producto individual con botón de eliminación (`X`). | • **Default:** Fondo azul oscuro.<br>• **Hover / Focus:** Fondo gris azulado. |
| **Mostrar Info M Pedidos** | Bloque desplegable o contenedor de texto con doble línea. | • **Borde activo:** Fondo blanco con borde de contraste.<br>• **Borde atenuado:** Fondo blanco simple. |
| **Opcion barra lateral** | Menú desplegable o selector con icono de candado/ubicación. | • **Desactivado (Disabled):** Texto e icono atenuados.<br>• **Default:** Fondo azul oscuro.<br>• **Secundario:** Fondo blanco con sombra. |
| **Apartado largo** | Campo de entrada de texto largo (*Textarea* / Nota). | • **Default:** Fondo gris claro.<br>• **Focus / Active:** Fondo gris claro con diferente nivel de elevación. |
| **Seccion de productos** | Tarjeta contenedora con encabezado, recuento de productos y lista de etiquetas con eliminación. | • **Default:** Estado completo con múltiples etiquetas de producto y enlace "Editar grupo". |
| **Seccion pedir dentro de poco** | Bloque de alerta o resumen para pedidos próximos a vencer/realizar. | • **Default:** Contenedor blanco con chips de productos en estado activo. |
| **Seccion ganancias** | Formulario para el registro o desglose de ingresos y gastos. | • **Default:** Incluye campos de entrada para pago en tarjeta, efectivo, gastos menores y botón de acción "Continuar". |
| **Seccion pedidos pendientes** | Bloque de resumen para pedidos pendientes de entrega o procesamiento. | • **Default:** Tarjeta con fecha (`XX/XX/XXXX`) y chips de productos en azul oscuro. |
| **Seccion ganancias anteriores** | Módulo de historial de ingresos pasados. | • **Default:** Desglose acumulado (tarjeta, efectivo, gastos menores y ganancias totales) en tono grisáceo/azul. |
| **Ajustes** | Lista o formulario de configuración del perfil. | • **Default:** Bloque de campos de texto de opciones múltiples finalizado con botón de confirmación. |

### Responsive y modo oscuro
Mi página no es 100% responsive (si que si la amplias/achicas se mueve pero si el borde de la pantalla llega al texto este se entierra). El modo oscuro no tuve muchos problemas, estuve progando design aparte que los colores combinaran y no hubiera problemas a la hora de usarlo, por lo que ya los tenia bien pensados a la hora de empezar el mockup.

## Uso de IA
He usado Gemini principalmente para tener la escala de colores (por ejemplo, sabia que iba a usar el Azul Pizarra, pero o sabia la saturación exacta).
He usado la IA de Figma para que me ayudara a realizar la guía de estilos.

## Lo que ha quedado pendiente
Me ha quedado pendiente usar variables para el espaciado (si que los he creado pero no usado) y que la web sea 100% responsive.
