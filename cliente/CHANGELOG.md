## Hito 1

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

---

## Hito 2

| Estado | Prioridad | Funcionalidad | Descripción |
| --- | --- | --- | --- |
| **Realizado** | **Alta** | **Capa de datos (`almacen.js`)** | Módulo genérico para gestionar `localStorage` con `obtenerTodos`, `obtenerPorId`, `crear`, `actualizar` y `borrar`. |
| **Realizado** | **Alta** | **Módulo de validación (`validacion.js`)** | Funciones reutilizables que devuelven el mensaje de error o `null`, junto con listeners en `blur` e `input`. |
| **Realizado** | **Alta** | **Formulario de registro (`perfil.html`)** | Validación de nombre, correo (regex), contraseña (`minlength="8"`, mayúscula y número), repetición de contraseña, fecha de nacimiento (+18 años y no futura) y aceptación de condiciones. |
| **Realizado** | **Alta** | **CRUD de usuarios sin contraseña en claro** | Persistencia en `localStorage` omitiendo la contraseña, listado en «Usuarios registrados», edición en el mismo formulario y borrado con `confirm()`. |
| **Realizado** | **Alta** | **Formulario de contacto (`contacto.html`)** | Nueva vista integrada en el menú con validación de nombre, correo, teléfono, motivo y mensaje. |
| **Realizado** | **Alta** | **Validación cruzada y contador de caracteres** | Teléfono obligatorio al marcar *«Prefiero que me llaméis»* y control de longitud mínima/máxima del mensaje con contador en tiempo real. |
| **Realizado** | **Alta** | **Vista «Mensajes enviados»** | Guardado de mensajes en `localStorage` y listado dinámico en pantalla con botón de borrado confirmado. |
| **Realizado** | **Alta** | **Accesibilidad y gestión del foco** | Formularios con `novalidate`, atributos `aria-invalid` y `aria-describedby`, foco automático en el primer error y delegación de eventos. |

Considero que cada una de las piezas requieren una prioridad **Alta** ya que se solicitan explicitamente para poder completar la práctica.