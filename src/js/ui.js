import { pedidos, accesosRapidos, historialCaja } from './datos.js';
import { obtenerTodos, obtenerPorId, crear, actualizar, borrar } from './almacen.js';
import { validarNombre, validarCorreo, validarContrasena, validarConfirmarContrasena, validarFecha, validarTerminos, validarTelefono, validarMotivo, validarMensaje } from './validacion.js';

export const pintarProductosPorCategoria = (categorias, productos) => {
    const contenedor = document.querySelector('.contenedor-principal')

    categorias.forEach((categoria => {
        const seccion = document.createElement('section')
        const cabecera = document.createElement('header')
        const tituloCabecera = document.createElement('h2')
        tituloCabecera.classList.add('tarjeta-titulo')
        const spanCabecera = document.createElement('span')

        seccion.classList = 'tarjeta'
        cabecera.classList = 'tarjeta-header'

        tituloCabecera.textContent = categoria.nombre
        tituloCabecera.appendChild(spanCabecera)

        cabecera.appendChild(tituloCabecera)

        const lista = document.createElement('ul')
        lista.classList = 'lista-productos'

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
    cabecera.classList.add('tarjeta-header')
    carta.appendChild(cabecera)

    const proveedor = document.createElement('h2')
    proveedor.classList.add('tarjeta-titulo')
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
    botonCerrar.classList.add('boton-principal')
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
    const seccion = document.querySelector('#accesos-rapidos')
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
    const lista = document.querySelector('#pedir-pronto .lista-productos')
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
        const contenedor = document.querySelector('.contenedor-principal')
        const seccion = document.createElement('section')
        seccion.classList.add('tarjeta')
        contenedor.appendChild(seccion)

        const fechaTitulo = document.createElement('header')
        fechaTitulo.classList.add('tarjeta-header')
        seccion.appendChild(fechaTitulo)

        const fechaTituloH2 = document.createElement('h2')
        fechaTituloH2.classList.add('tarjeta-titulo')
        fechaTituloH2.textContent = fecha
        fechaTitulo.appendChild(fechaTituloH2)

        const productosLista = document.createElement('ul')
        productosLista.classList.add('lista-productos')
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
    const contenedor = document.querySelector('#caja-historial')
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

export const mostrarUsuarios = () => {
    const contenedor = document.querySelector('#lista-usuarios')
    const usuarios = obtenerTodos('usuarios')

    contenedor.replaceChildren()

    if (usuarios.length === 0) {
        const vacio = document.createElement('p')
        vacio.textContent = 'No hay usuarios registrados todavía.'
        contenedor.appendChild(vacio)
    } else {
        usuarios.forEach((usuario) => {
            const fila = document.createElement('article')
            fila.classList.add('history-row')

            const info = document.createElement('span')
            info.textContent = `${usuario.nombre} (${usuario.email}) • Nac: ${usuario.fechaNacimiento}`

            const botones = document.createElement('div')
            botones.classList.add('usuario-acciones')

            const botonEditar = document.createElement('button')
            botonEditar.type = 'button'
            botonEditar.textContent = 'Editar'
            botonEditar.dataset.id = usuario.id
            botonEditar.classList.add('btn-editar')

            const botonBorrar = document.createElement('button')
            botonBorrar.type = 'button'
            botonBorrar.textContent = 'Borrar'
            botonBorrar.dataset.id = usuario.id
            botonBorrar.classList.add('btn-borrar')

            botones.appendChild(botonEditar)
            botones.appendChild(botonBorrar)
            fila.appendChild(info)
            fila.appendChild(botones)
            contenedor.appendChild(fila)
        })
    }
}

export const listenerPerfil = () => {
    const form = document.querySelector('#form-perfil')
    const listaUsuarios = document.querySelector('#lista-usuarios')
    const botonSubmit = form.querySelector('button[type="submit"]')

    const inputNombre = document.querySelector('#input-nombre')
    const inputEmail = document.querySelector('#input-email')
    const inputPassword = document.querySelector('#input-password')
    const inputPasswordRepetida = document.querySelector('#input-password-repeat')
    const inputFecha = document.querySelector('#input-fecha')
    const inputTerminos = document.querySelector('#input-terminos')

    let idEditando = null

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let hayErrores = false
        let primerInputConError = null

        const comprobarCampo = (input, mensajeError) => {
            const cajaCampo = input.parentElement
            const parrafoError = cajaCampo.querySelector('.campo-error')

            const idError = `error-${input.id}`
            parrafoError.id = idError
            input.setAttribute('aria-describedby', idError)

            if (mensajeError !== null) {
                parrafoError.textContent = mensajeError
                input.setAttribute('aria-invalid', 'true')
                hayErrores = true

                if (primerInputConError === null) {
                    primerInputConError = input
                }
            } else {
                parrafoError.textContent = ''
                input.setAttribute('aria-invalid', 'false')
            }
        }

        comprobarCampo(inputNombre, validarNombre(inputNombre.value))
        comprobarCampo(inputEmail, validarCorreo(inputEmail.value))
        comprobarCampo(inputPassword, validarContrasena(inputPassword.value, inputPassword.minLength))
        comprobarCampo(inputPasswordRepetida, validarConfirmarContrasena(inputPassword.value, inputPasswordRepetida.value))
        comprobarCampo(inputFecha, validarFecha(inputFecha.value))
        comprobarCampo(inputTerminos, validarTerminos(inputTerminos.checked))

        if (hayErrores === false) {
            const datosUsuario = {
                nombre: inputNombre.value.trim(),
                email: inputEmail.value.trim(),
                fechaNacimiento: inputFecha.value,
                terminos: inputTerminos.checked
            }

            if (idEditando !== null) {
                actualizar('usuarios', idEditando, datosUsuario)
                idEditando = null
                botonSubmit.textContent = 'Continuar'
            } else {
                crear('usuarios', datosUsuario)
            }

            form.reset()
            mostrarUsuarios()
        } else {
            primerInputConError.focus()
        }
    })

    listaUsuarios.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-editar')) {
            const id = e.target.dataset.id
            const usuario = obtenerPorId('usuarios', id)

            if (usuario !== null) {
                inputNombre.value = usuario.nombre
                inputEmail.value = usuario.email
                inputFecha.value = usuario.fechaNacimiento
                inputTerminos.checked = usuario.terminos

                idEditando = usuario.id
                botonSubmit.textContent = 'Guardar cambios'
            }
        } else if (e.target.classList.contains('btn-borrar')) {
            const id = e.target.dataset.id

            if (confirm('¿Seguro que quieres borrar este usuario?')) {
                borrar('usuarios', id)
                mostrarUsuarios()
            }
        }
    })
}

export const mostrarMensajes = () => {
    const contenedor = document.querySelector('#lista-mensajes')
    const mensajes = obtenerTodos('mensajes')

    contenedor.replaceChildren()

    if (mensajes.length === 0) {
        const vacio = document.createElement('p')
        vacio.textContent = 'No hay mensajes enviados todavía.'
        contenedor.appendChild(vacio)
    } else {
        mensajes.forEach((mensaje) => {
            const fila = document.createElement('article')
            fila.classList.add('history-row')

            const info = document.createElement('span')
            const textoTelefono = mensaje.telefono ? ` • Tel: ${mensaje.telefono}` : ''
            const textoLlamar = mensaje.llamar ? ' (Prefiere llamada)' : ''
            info.textContent = `${mensaje.nombre} (${mensaje.email}${textoTelefono}${textoLlamar}) — [${mensaje.motivo}]: ${mensaje.mensaje}`

            const botonBorrar = document.createElement('button')
            botonBorrar.type = 'button'
            botonBorrar.textContent = 'Borrar'
            botonBorrar.dataset.id = mensaje.id
            botonBorrar.classList.add('btn-borrar')

            fila.appendChild(info)
            fila.appendChild(botonBorrar)
            contenedor.appendChild(fila)
        })
    }
}

export const listenerContacto = () => {
    const form = document.querySelector('#form-contacto')
    const listaMensajes = document.querySelector('#lista-mensajes')
    const contador = document.querySelector('#contador-caracteres')

    const inputNombre = document.querySelector('#input-nombre')
    const inputEmail = document.querySelector('#input-email')
    const inputTelefono = document.querySelector('#input-telefono')
    const inputLlamar = document.querySelector('#input-llamar')
    const inputMotivo = document.querySelector('#input-motivo')
    const inputMensaje = document.querySelector('#input-mensaje')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let hayErrores = false
        let primerInputConError = null

        const comprobarCampo = (input, mensajeError) => {
            const cajaCampo = input.parentElement
            const spanError = cajaCampo.querySelector('.campo-error')

            const idError = `error-${input.id}`
            spanError.id = idError
            input.setAttribute('aria-describedby', idError)

            if (mensajeError !== null) {
                spanError.textContent = mensajeError
                input.setAttribute('aria-invalid', 'true')
                hayErrores = true

                if (primerInputConError === null) {
                    primerInputConError = input
                }
            } else {
                spanError.textContent = ''
                input.setAttribute('aria-invalid', 'false')
            }
        }

        comprobarCampo(inputNombre, validarNombre(inputNombre.value))
        comprobarCampo(inputEmail, validarCorreo(inputEmail.value))
        comprobarCampo(inputTelefono, validarTelefono(inputTelefono.value, inputLlamar.checked))
        comprobarCampo(inputMotivo, validarMotivo(inputMotivo.value))
        comprobarCampo(inputMensaje, validarMensaje(inputMensaje.value, inputMensaje.minLength, inputMensaje.maxLength))

        if (hayErrores === false) {
            const datosMensaje = {
                nombre: inputNombre.value.trim(),
                email: inputEmail.value.trim(),
                telefono: inputTelefono.value.trim(),
                llamar: inputLlamar.checked,
                motivo: inputMotivo.value,
                mensaje: inputMensaje.value.trim()
            }

            crear('mensajes', datosMensaje)

            form.reset()
            contador.textContent = `0 / ${inputMensaje.maxLength} caracteres`
            mostrarMensajes()
        } else {
            primerInputConError.focus()
        }
    })

    listaMensajes.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-borrar')) {
            const id = e.target.dataset.id

            if (confirm('¿Seguro que quieres borrar este mensaje?')) {
                borrar('mensajes', id)
                mostrarMensajes()
            }
        }
    })
}