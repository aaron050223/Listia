| Prioridad | Funcionalidad | Descripción |
| --- | --- | --- |
| **Alta** | **Estructura base y navegación** | Maquetación del HTML desde `main.js` para 4 páginas. |
| **Alta** | **Modelo de datos (`datos.js`)** | Definición y exportación de los arrays de `categorias`, `productos`, `pedidos`, `accesosRapidos` e `historialCaja`. |
| **Alta** | **Listado de stock por categorías** | Renderizado dinámico en `stock.html` agrupado por categoría con el numero de unidades disponibles. |
| **Alta** | **Aviso visual de bajo stock** | Resaltado automático en rojo para los productos con menos del stock minimo establecido. |
| **Alta** | **Pedidos previstos para hoy** | Carga dinámica en `index.html` de los pedidos de la fecha actual con proveedor, hora y estado. |
| **Media** | **Modal con detalle de pedido** | Ventana emergente al pulsar una tarjeta de pedido con sus datos completos, listado de productos y botón de cierre. |
| **Media** | **Alerta rápida en Menú Principal** | Tarjeta dinámica en `index.html` que muestra el total de productos por debajo del stock mínimo. |
| **Media** | **Sección «Pedir dentro de poco»** | Listado en `pedidos.html` con los productos cuyo `stock <= stockMinimo` (similar a los que se pintan en rojo en `stock.html`). |
| **Media** | **Pedidos agrupados por fecha** | Creación dinámica en `pedidos.html` de una tarjeta por cada fecha distinta con los productos solicitados. |
| **Media** | **Histórico de cierres de caja** | Renderizado dinámico en `caja.html` de días anteriores con tarjeta, efectivo, gastos y balance neto calculado. |
| **Baja** | **Formulario de cierre diario** | Input en `caja.html` para registrar los movimientos de la jornada actual. |
| **Baja** | **Formulario de perfil de usuario** | Input en `perfil.html` para editar correo, contraseña, nombre y teléfono del responsable.