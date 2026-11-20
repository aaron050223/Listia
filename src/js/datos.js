export const categorias = [
    { id: 1, nombre: 'Bebida' },
    { id: 2, nombre: 'Snacks' },
    { id: 3, nombre: 'Bollería' }
];

export const productos = [
    {
        id: 1,
        nombre: 'Coca-Cola',
        categoriaId: 1,
        stock: 9,
        stockMinimo: 3,
    },
    {
        id: 2,
        nombre: 'Fanta Naranja',
        categoriaId: 1,
        stock: 4,
        stockMinimo: 3,
    },
    {
        id: 3,
        nombre: 'Sprite',
        categoriaId: 1,
        stock: 2,
        stockMinimo: 3,
    },
    {
        id: 4,
        nombre: 'Fuze Tea Limón',
        categoriaId: 1,
        stock: 7,
        stockMinimo: 3,
    },
    {
        id: 5,
        nombre: 'Aquarius Limón',
        categoriaId: 1,
        stock: 6,
        stockMinimo: 3,
    },

    {
        id: 6,
        nombre: 'Doritos',
        categoriaId: 2,
        stock: 2,
        stockMinimo: 3,
    },
    {
        id: 7,
        nombre: '3D',
        categoriaId: 2,
        stock: 5,
        stockMinimo: 2,
    },
    {
        id: 8,
        nombre: 'Pelotazos',
        categoriaId: 2,
        stock: 6,
        stockMinimo: 2,
    },
    {
        id: 9,
        nombre: 'Lays',
        categoriaId: 2,
        stock: 8,
        stockMinimo: 3,
    },
    {
        id: 10,
        nombre: 'Ruffles Jamón',
        categoriaId: 2,
        stock: 4,
        stockMinimo: 2,
    },
    {
        id: 11,
        nombre: 'Cheetos Pandilla',
        categoriaId: 2,
        stock: 7,
        stockMinimo: 3,
    },

    {
        id: 12,
        nombre: 'Donuts',
        categoriaId: 3,
        stock: 5,
        stockMinimo: 2,
    },
    {
        id: 13,
        nombre: 'Bollycao',
        categoriaId: 3,
        stock: 2,
        stockMinimo: 3,
    },
    {
        id: 14,
        nombre: 'Phoskitos',
        categoriaId: 3,
        stock: 6,
        stockMinimo: 2,
    },
    {
        id: 15,
        nombre: 'Tigretón',
        categoriaId: 3,
        stock: 4,
        stockMinimo: 2,
    },
    {
        id: 16,
        nombre: 'Pantera Rosa',
        categoriaId: 3,
        stock: 5,
        stockMinimo: 2,
    }
];

export const pedidos = [
    {
        id: 1,
        proveedor: 'Bimbo',
        fecha: '23/07/2026',
        hora: '11:30',
        estado: 'Entregado',
        productos: [
            { nombre: 'Pan de molde', cantidad: 5 },
            { nombre: 'Donuts', cantidad: 12 },
            { nombre: 'Bollycao', cantidad: 10 },
            { nombre: 'Phoskitos', cantidad: 8 }
        ]
    },
    {
        id: 2,
        proveedor: 'El Pozo',
        fecha: '23/07/2026',
        hora: '13:40',
        estado: 'Pendiente',
        productos: [
            { nombre: 'Mortadela', cantidad: 9 },
            { nombre: 'Jamón cocido', cantidad: 8 },
            { nombre: 'Pechuga de pavo', cantidad: 6 }
        ]
    },
    {
        id: 3,
        proveedor: 'Alhambra',
        fecha: '24/07/2026',
        hora: '10:15',
        estado: 'Pendiente',
        productos: [
            { nombre: 'Alhambra Especial (tercios)', cantidad: 24 },
            { nombre: 'Alhambra Reserva 1925', cantidad: 12 },
            { nombre: 'Alhambra Sin Alcohol', cantidad: 12 }
        ]
    },
    {
        id: 4,
        proveedor: 'Mahou San Miguel',
        fecha: '24/07/2026',
        hora: '12:30',
        estado: 'Pendiente',
        productos: [
            { nombre: 'Mahou Tostada', cantidad: 7 },
            { nombre: 'San Miguel S/G', cantidad: 7 },
            { nombre: 'Agua con Gas', cantidad: 6 },
            { nombre: 'Agua', cantidad: 8 }
        ]
    },
    {
        id: 5,
        proveedor: 'Coca-Cola',
        fecha: '25/07/2026',
        hora: '09:45',
        estado: 'Pendiente',
        productos: [
            { nombre: 'Coca-Cola', cantidad: 24 },
            { nombre: 'Sprite', cantidad: 12 },
            { nombre: 'Fanta Naranja', cantidad: 12 },
            { nombre: 'Aquarius Limón', cantidad: 10 }
        ]
    },
    {
        id: 6,
        proveedor: 'Matutano',
        fecha: '25/07/2026',
        hora: '11:00',
        estado: 'Pendiente',
        productos: [
            { nombre: 'Doritos', cantidad: 15 },
            { nombre: 'Lays', cantidad: 10 },
            { nombre: 'Ruffles Jamón', cantidad: 8 }
        ]
    }
];

export const accesosRapidos = [
    {
        id: 1,
        titulo: 'Bajo Stock',
        textoAntes: 'Tienes ',
        cantidad: productos.filter((p) => p.stock < p.stockMinimo).length,
        textoDespues: ' productos en bajo stock'
    }
];