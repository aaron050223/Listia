export const obtenerTodos = (coleccion) => {
    const datos = localStorage.getItem(coleccion)

    if (datos === null) {
        return []
    } else {
        return JSON.parse(datos)
    }
}

export const obtenerPorId = (coleccion, id) => {
    const lista = obtenerTodos(coleccion)
    const encontrado = lista.find((item) => {
        return item.id === Number(id)
    })

    if (encontrado) {
        return encontrado
    } else {
        return null
    }
}

export const crear = (coleccion, dato) => {
    const lista = obtenerTodos(coleccion)
    let idAleatorio
    let existe

    do {
        idAleatorio = Math.floor(Math.random() * 100000) + 1
        existe = lista.find((item) => {
            return item.id === idAleatorio
        })
    } while (existe)

    const nuevo = {
        id: idAleatorio,
        ...dato
    }

    lista.push(nuevo)
    localStorage.setItem(coleccion, JSON.stringify(lista))

    return nuevo
}

export const actualizar = (coleccion, id, dato) => {
    const lista = obtenerTodos(coleccion)

    const listaActualizada = lista.map((item) => {
        if (item.id === Number(id)) {
            return {
                ...item,
                ...dato,
                id: Number(id)
            }
        } else {
            return item
        }
    })

    localStorage.setItem(coleccion, JSON.stringify(listaActualizada))
}

export const borrar = (coleccion, id) => {
    const lista = obtenerTodos(coleccion)

    const listaFiltrada = lista.filter((item) => {
        return item.id !== Number(id)
    })

    localStorage.setItem(coleccion, JSON.stringify(listaFiltrada))
}