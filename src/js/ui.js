import { pedidos, accesosRapidos, historialCaja } from './datos.js';

export const pintarProductosPorCategoria = (categorias, productos) => {
    const contenedor = document.querySelector('.main-content')

    categorias.forEach((categoria => {
        const seccion = document.createElement('section')
        const cabecera = document.createElement('header')
        const tituloCabecera = document.createElement('h2')
        const spanCabecera = document.createElement('span')

        seccion.classList = 'section-card'
        cabecera.classList = 'section-header'

        tituloCabecera.textContent = categoria.nombre
        tituloCabecera.appendChild(spanCabecera)

        cabecera.appendChild(tituloCabecera)

        const lista = document.createElement('ul')
        lista.classList = 'product-list'

        let contadorProducto = 0
        productos.forEach((producto => {
            if (producto.categoriaId === categoria.id) {
                contadorProducto++

                const productoLi = document.createElement('li')
                productoLi.classList = 'product-item'

                if (producto.stock < producto.stockMinimo) {
                    productoLi.classList.add('low-stock')
                }

                const nombreProducto = document.createElement('span')
                nombreProducto.textContent = producto.nombre

                const stockProducto = document.createElement('span')
                stockProducto.classList = 'product-badge'
                stockProducto.textContent = producto.stock

                productoLi.appendChild(nombreProducto)
                productoLi.appendChild(stockProducto)

                lista.appendChild(productoLi)
            }
        }))
        spanCabecera.textContent = ` (${contadorProducto} productos)`

        seccion.appendChild(cabecera)
        seccion.appendChild(lista)
        contenedor.appendChild(seccion)
    }))
}

export const mostrarInfoPedido = (pedidoId) => {
    const pedidoSeleccionado = pedidos.find((pedido) => pedido.id === Number(pedidoId));
    console.log(pedidoSeleccionado);

    const contenedor = document.createElement('section')
    contenedor.classList.add('popup-overlay')
    contenedor.id = 'pedido-bimbo-popup'

    const carta = document.createElement('article')
    carta.classList.add('popup-card')
    contenedor.appendChild(carta)

    const cabecera = document.createElement('header')
    cabecera.classList.add('section-header')
    carta.appendChild(cabecera)

    const proveedor = document.createElement('h2')
    proveedor.textContent = pedidoSeleccionado.proveedor
    proveedor.id = 'popup-proveedor'
    cabecera.appendChild(proveedor)

    const estado = document.createElement('span')
    estado.textContent = pedidoSeleccionado.estado
    estado.classList.add('status-pending')
    estado.id = 'popup-estado'
    cabecera.appendChild(estado)

    const parrafo = document.createElement('p')
    parrafo.classList.add('popup-fecha-hora')
    carta.appendChild(parrafo)

    const fechaHoraTexto = document.createElement('strong')
    fechaHoraTexto.textContent = 'Fecha y hora: '
    parrafo.appendChild(fechaHoraTexto)

    const fechaHoraReal = document.createElement('span')
    fechaHoraReal.id = 'modal-fecha-hora'
    fechaHoraReal.textContent = `${pedidoSeleccionado.fecha} • ${pedidoSeleccionado.hora}`
    parrafo.appendChild(fechaHoraReal)

    const productosPedidosTitulo = document.createElement('h3')
    productosPedidosTitulo.textContent = 'Productos del pedido:'
    carta.appendChild(productosPedidosTitulo)

    const listaProductos = document.createElement('ul')
    listaProductos.classList.add('productos-lista')
    listaProductos.classList.add('popup-producto')
    listaProductos.id = 'popup-lista-productos'
    carta.appendChild(listaProductos)

    pedidoSeleccionado.productos.forEach((producto) => {
        const productoLi = document.createElement('li')
        productoLi.classList.add('product-item')
        listaProductos.appendChild(productoLi)

        const productoNombre = document.createElement('span')
        productoNombre.textContent = producto.nombre
        productoLi.appendChild(productoNombre)

        const productoCantidad = document.createElement('span')
        productoCantidad.classList.add('product-badge')
        productoCantidad.textContent = producto.cantidad
        productoLi.appendChild(productoCantidad)
    })

    const botonCerrar = document.createElement('button')
    botonCerrar.type = 'button'
    botonCerrar.classList.add('btn-primary')
    botonCerrar.id = 'btn-cerrar-popup'
    botonCerrar.textContent = 'Cerrar'
    carta.appendChild(botonCerrar)

    botonCerrar.addEventListener('click', () => {
        contenedor.remove()
    })

    contenedor.classList.add('activo')
    document.body.appendChild(contenedor)
}

export const mostrarPedidos = () => {
    const contenedor = document.querySelector('#pedidos-hoy')

    pedidos.forEach((pedido) => {
        if (pedido.fecha === '23/07/2026') { // He puesto la fecha fija para que siempre se muestre algo
            const tarjeta = document.createElement('article')
            tarjeta.classList.add('order-card')
            tarjeta.dataset.id = pedido.id

            const titulo = document.createElement('h3')
            titulo.textContent = pedido.proveedor
            tarjeta.appendChild(titulo)

            const hora = document.createElement('time')
            hora.textContent = pedido.hora
            tarjeta.appendChild(hora)

            const estado = document.createElement('span')
            estado.textContent = pedido.estado;
            if (pedido.estado === 'Entregado') {
                estado.classList.add('status-delivered')
            } else {
                estado.classList.add('status-pending')
            }
            tarjeta.appendChild(estado);
            contenedor.appendChild(tarjeta)
        }
    });
}

export const mostrarAlertaStock = () => {
    const seccion = document.querySelector('.quick-access-section')
    accesosRapidos.forEach((acceso) => {
        const tarjeta = document.createElement('article')
        tarjeta.classList.add('alert-card');

        const titulo = document.createElement('h3')
        titulo.textContent = acceso.titulo
        tarjeta.appendChild(titulo)

        const parrafo = document.createElement('p')
        parrafo.textContent = acceso.textoAntes

        const cantidad = document.createElement('strong')
        cantidad.id = 'low-stock-count'
        cantidad.textContent = acceso.cantidad
        parrafo.appendChild(cantidad)

        parrafo.append(acceso.textoDespues)
        tarjeta.appendChild(parrafo)

        seccion.appendChild(tarjeta)
    });
}

export const mostrarPedirPronto = (productos) => {
    const lista = document.querySelector('#lista-pedir-pronto')
    productos.forEach((producto) => {
        if (producto.stock <= producto.stockMinimo) {
            const productoLi = document.createElement('li')
            productoLi.classList.add('product-item')

            const nombreProducto = document.createElement('span')
            nombreProducto.textContent = producto.nombre
            productoLi.appendChild(nombreProducto)

            const stockProducto = document.createElement('span')
            stockProducto.classList.add('product-badge')
            stockProducto.textContent = producto.stock
            productoLi.appendChild(stockProducto)

            lista.appendChild(productoLi)
        }
    })
}

export const mostrarFechasPedidos = () => {
    const listaAuxiliar = []
    pedidos.forEach((pedido => {
        if (!listaAuxiliar.includes(pedido.fecha)) {
            listaAuxiliar.push(pedido.fecha)
        }
    }))
    listaAuxiliar.forEach((fecha => {
        const contenedor = document.querySelector('.main-content')
        const seccion = document.createElement('section')
        seccion.classList.add('section-card')
        contenedor.appendChild(seccion)

        const fechaTitulo = document.createElement('header')
        fechaTitulo.classList.add('section-header')
        seccion.appendChild(fechaTitulo)

        const fechaTituloH2 = document.createElement('h2')
        fechaTituloH2.textContent = fecha
        fechaTitulo.appendChild(fechaTituloH2)

        const productosLista = document.createElement('ul')
        productosLista.classList.add('product-list')
        seccion.appendChild(productosLista)

        pedidos.forEach((pedido => {
            if (pedido.fecha === fecha) {
                pedido.productos.forEach((producto => {
                    const contenedorProducto = document.createElement('li')
                    contenedorProducto.classList.add('product-item')

                    const nombreProducto = document.createElement('span')
                    nombreProducto.textContent = producto.nombre
                    contenedorProducto.appendChild(nombreProducto)

                    const cantidadProducto = document.createElement('span')
                    cantidadProducto.classList.add('product-badge')
                    cantidadProducto.textContent = producto.cantidad
                    contenedorProducto.appendChild(cantidadProducto)

                    productosLista.appendChild(contenedorProducto)
                }))
            }
        }))
    }))
}

export const mostrarCajaDiasAnteriores = () => {
    const contenedor = document.querySelector('#historial-caja')
    historialCaja.forEach((dia) => {
        const carta = document.createElement('article')
        carta.classList.add('form-card')

        const titulo = document.createElement('h2')
        titulo.textContent = dia.fecha
        carta.appendChild(titulo)

        const lista = document.createElement('ul')
        lista.classList.add('history-list')

        const totalCalculado = dia.tarjeta + dia.efectivo - dia.gastos
        const valores = [dia.tarjeta, dia.efectivo, dia.gastos, totalCalculado]

        valores.forEach((valor, indice) => {
            const fila = document.createElement('li')
            fila.classList.add('history-row')

            if (indice === valores.length - 1) {
                fila.classList.add('total')
            }

            fila.textContent = `${valor.toFixed(2)} €`
            lista.appendChild(fila);
        });

        carta.appendChild(lista)
        contenedor.appendChild(carta)
    })
}

export const listenerPedido = () => {
    const pedidos = document.querySelector('#pedidos-hoy')
    pedidos.addEventListener('click', e => {
        const pedidoTitulo = e.target.closest('.order-card')
        const pedidoId = pedidoTitulo.dataset.id;
        mostrarInfoPedido(pedidoId);
    })
}