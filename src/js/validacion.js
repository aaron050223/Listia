export const validarNombre = (nombre) => {
    if (!nombre || nombre.trim() === '') {
        return 'El nombre de usuario es obligatorio.'
    }
    return null
}

export const validarCorreo = (correo) => {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regexCorreo.test(correo.trim()) === false) {
        return 'Formato incorrecto (xxxx@xxx.xxx)'
    }
    return null
}

export const validarContrasena = (password) => {
    const errores = []

    if (password.length < 8) {
        errores.push('• Debe tener al menos 8 caracteres.')
    }
    if (!/[A-Z]/.test(password)) {
        errores.push('• Debe incluir al menos una mayúscula.')
    }
    if (!/[0-9]/.test(password)) {
        errores.push('• Debe incluir al menos un número.')
    }

    if (errores.length === 0) {
        return null
    }
    return errores.join('\n')
}

export const validarConfirmarContrasena = (password, passwordRepeat) => {
    if (password !== passwordRepeat) {
        return 'Las contraseñas no coinciden.'
    }
    return null
}

export const validarFecha = (fechaTexto) => {
    if (!fechaTexto) {
        return 'Introduce tu fecha de nacimiento.'
    }

    const fechaNacimiento = new Date(fechaTexto + 'T00:00:00')
    const hoy = new Date()

    if (fechaNacimiento > hoy) {
        return 'La fecha de nacimiento no puede ser futura.'
    }

    const fechaLimite = new Date()
    fechaLimite.setFullYear(hoy.getFullYear() - 18)

    if (fechaNacimiento > fechaLimite) {
        return 'Debes tener al menos 18 años.'
    }

    return null
}

export const validarTerminos = (aceptado) => {
    if (!aceptado) {
        return 'Debes aceptar las condiciones.'
    }
    return null
}

const mostrarErrores = (idInput, mensaje) => {
    const input = document.getElementById(idInput)
    const contenedor = input.closest('.campo-grupo, .campo-checkbox')
    const elementoError = contenedor.querySelector('.campo-error')

    elementoError.textContent = mensaje || ''
}

export const listenerNombre = () => {
    const inputNombre = document.querySelector('#input-nombre')
    let tocado = false

    inputNombre.addEventListener('blur', () => {
        tocado = true
        const error = validarNombre(inputNombre.value)
        mostrarErrores('input-nombre', error)
    })

    inputNombre.addEventListener('input', () => {
        if (tocado === true) {
            const error = validarNombre(inputNombre.value)
            mostrarErrores('input-nombre', error)
        }
    })
}

export const listenerCorreo = () => {
    const inputEmail = document.querySelector('#input-email')
    let tocado = false

    inputEmail.addEventListener('blur', () => {
        tocado = true
        const error = validarCorreo(inputEmail.value)
        mostrarErrores('input-email', error)
    })

    inputEmail.addEventListener('input', () => {
        if (tocado === true) {
            const error = validarCorreo(inputEmail.value)
            mostrarErrores('input-email', error)
        }
    })
}

export const listenerContrasena = () => {
    const inputPassword = document.querySelector('#input-password')
    const inputPasswordRepeat = document.querySelector('#input-password-repeat')
    let tocado = false

    inputPassword.addEventListener('blur', () => {
        tocado = true
        const error = validarContrasena(inputPassword.value)
        mostrarErrores('input-password', error)

        if (inputPasswordRepeat.value !== '') {
            const errorRepetida = validarConfirmarContrasena(inputPassword.value, inputPasswordRepeat.value)
            mostrarErrores('input-password-repeat', errorRepetida)
        }
    })

    inputPassword.addEventListener('input', () => {
        if (tocado === true) {
            const error = validarContrasena(inputPassword.value)
            mostrarErrores('input-password', error)

            if (inputPasswordRepeat.value !== '') {
                const errorRepetida = validarConfirmarContrasena(inputPassword.value, inputPasswordRepeat.value)
                mostrarErrores('input-password-repeat', errorRepetida)
            }
        }
    })
}

export const listenerConfirmarContrasena = () => {
    const inputPassword = document.querySelector('#input-password')
    const inputPasswordRepeat = document.querySelector('#input-password-repeat')
    let tocado = false

    inputPasswordRepeat.addEventListener('blur', () => {
        tocado = true
        const error = validarConfirmarContrasena(inputPassword.value, inputPasswordRepeat.value)
        mostrarErrores('input-password-repeat', error)
    })

    inputPasswordRepeat.addEventListener('input', () => {
        if (tocado === true) {
            const error = validarConfirmarContrasena(inputPassword.value, inputPasswordRepeat.value)
            mostrarErrores('input-password-repeat', error)
        }
    })
}

export const listenerFecha = () => {
    const inputFecha = document.querySelector('#input-fecha')
    let tocado = false

    inputFecha.addEventListener('blur', () => {
        tocado = true
        const error = validarFecha(inputFecha.value)
        mostrarErrores('input-fecha', error)
    })

    inputFecha.addEventListener('input', () => {
        if (tocado === true) {
            const error = validarFecha(inputFecha.value)
            mostrarErrores('input-fecha', error)
        }
    })
}

export const listenerTerminos = () => {
    const inputTerminos = document.querySelector('#input-terminos')
    let tocado = false

    inputTerminos.addEventListener('blur', () => {
        tocado = true
        const error = validarTerminos(inputTerminos.checked)
        mostrarErrores('input-terminos', error)
    })

    inputTerminos.addEventListener('input', () => {
        if (tocado === true) {
            const error = validarTerminos(inputTerminos.checked)
            mostrarErrores('input-terminos', error)
        }
    })
}