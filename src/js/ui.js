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