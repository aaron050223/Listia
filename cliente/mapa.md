1. **Menú Principal (`index.html`)**
* **Cabecera y resumen mensual:** Fecha de la jornada actual, ingresos acumulados del mes, comparativa porcentual respecto al mes anterior y progreso hacia el objetivo mensual.
* **Panel:** Número de tickets emitidos, ticket medio, total de cobros en efectivo y total de cobros con tarjeta.
* **Pedidos de hoy:** Tarjetas dinámicas filtradas por la fecha actual con nombre del proveedor, hora estimada y estado (*Entregado* en verde / *Pendiente* en amarillo), además de enlace directo a la vista completa de pedidos.
* **Ventana emergente con detalles del pedido:** Proveedor, estado, fecha y hora completas, listado de productos incluidos con sus cantidades y botón para cerrar.
* **Accesos rápidos:** Tarjeta de alerta que muestra el recuento dinámico de productos en bajo stock.

2. **Stock (`stock.html`)**
* **Cabecera:** Título de sección y fecha de la jornada.
* **Tarjetas por categoría:** Una sección por cada categoría registrada indicando entre paréntesis el número total de productos que contiene.
* **Listado de productos:** Nombre de cada artículo y su cantidad actual en almacén. Los artículos con stock inferior al mínimo establedico se muestran destacados en color rojo como aviso visual.

3. **Pedidos (`pedidos.html`)**
* **Cabecera:** Título de seccion y fecha de la jornada.
* **Bloque "Pedir dentro de poco":** Lista dinámica de productos cuyo stock actual es menor o igual al stock mínimo, junto con las unidades restantes.
* **Bloques agrupados por fecha:** Una tarjeta por cada fecha de entrega registrada (23/07/2026, 24/07/2026, 25/07/2026) con el listado de todos los productos que llegan ese día y las unidades pedidas de cada uno.

4. **Caja (`caja.html`)**
* **Cabecera:** Título de sección y fecha de la jornada.
* **Formulario de cierre diario:** Fecha de la jornada actual y campos de entrada obligatorios para registrar los cobros en tarjeta, cobros en efectivo y gastos menores.
* **Historial de días anteriores:** Tarjetas dinámicas de jornadas pasadas (22/07, 21/07, 20/07) que muestran el desglose de tarjeta, efectivo, gastos y el total neto calculado automáticamente (tarjeta + efectivo - gastos).

5. **Perfil de usuario (`perfil.html`)**
* **Cabecera:** Título de sección y fecha de la jornada.
* **Formulario de datos personales:** Campos para gestionar el correo electronico, contraseña, nombre del usuario y teléfono de contacto (opcional).