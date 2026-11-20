import { categorias, productos } from './datos.js';
import { pintarProductosPorCategoria, mostrarPedidos, mostrarAlertaStock, listenerPedido } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // He buscado como hacer que (por ejemplo) las cosas de stock no aparezcan en el index. Esta es la mejor forma que he encontrado
    const ruta = window.location.pathname;

    if (ruta.includes('index.html') || ruta.endsWith('/')) {
        mostrarPedidos();
        mostrarAlertaStock();
        listenerPedido();
    }

    if (ruta.includes('stock.html')) {
        pintarProductosPorCategoria(categorias, productos);
    }
});