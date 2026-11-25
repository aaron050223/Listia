import { categorias, productos } from './datos.js';
import { pintarProductosPorCategoria, mostrarPedidos, mostrarAlertaStock, listenerPedido, mostrarPedirPronto, mostrarFechasPedidos, mostrarCajaDiasAnteriores, mostrarUsuarios, listenerPerfil, mostrarMensajes, listenerContacto } from './ui.js';
import { listenerNombre, listenerCorreo, listenerContrasena, listenerConfirmarContrasena, listenerFecha, listenerTerminos, listenerTelefono, listenerMotivo, listenerMensaje } from './validacion.js';

document.addEventListener('DOMContentLoaded', () => {
    // He buscado como hacer que (por ejemplo) las cosas de stock no aparezcan en el index. Esta es la mejor forma que he encontrado
    const ruta = window.location.pathname

    if (ruta.includes('index.html') || ruta.endsWith('/')) {
        mostrarPedidos()
        mostrarAlertaStock()
        listenerPedido()
    }

    if (ruta.includes('stock.html')) {
        pintarProductosPorCategoria(categorias, productos)
    }

    if (ruta.includes('pedidos.html')) {
        mostrarPedirPronto(productos)
        mostrarFechasPedidos()
    }

    if (ruta.includes('caja.html')) {
        mostrarCajaDiasAnteriores()
    }

    if (ruta.includes('perfil.html')) {
        listenerNombre()
        listenerCorreo()
        listenerContrasena()
        listenerConfirmarContrasena()
        listenerFecha()
        listenerTerminos()
        mostrarUsuarios()
        listenerPerfil()
    }
    if (ruta.includes('contacto.html')) {
        listenerNombre()
        listenerCorreo()
        listenerTelefono()
        listenerMotivo()
        listenerMensaje()
        mostrarMensajes()
        listenerContacto()
    }
})