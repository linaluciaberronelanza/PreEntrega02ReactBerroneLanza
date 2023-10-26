import Item from "./Componentes/Item/Item";

const misProductos = [
    { id: "1", nombre: "Render exterior", precio: 10000, img: "../imgItems/caj1.png", idCat: "3" },
    { id: "2", nombre: "Render interior", precio: 7000, img: "../imgItems/pcrender4.png", idCat: "3" },
    { id: "3", nombre: "Render planta de venta", precio: 7000, img: "../imgItems/pcrender8.png", idCat: "3" },
    { id: "4", nombre: "Maquetado 3D", precio: 10000, img: "../imgItems/prod4.png", idCat: "3" },
    { id: "5", nombre: "Infografia", precio: 3000, img: "../imgItems/prod5.png", idCat: "2" },
    { id: "6", nombre: "Infografia Compleja", precio: 7000, img: "../imgItems/prod6.png", idCat: "2" },
    { id: "7", nombre: "Axonometria", precio: 12000, img: "../imgItems/graficocontacto1.png", idCat: "3" },
    { id: "8", nombre: "Legajo Arquitectonico", precio: 12000, img: "../imgItems/prod8.jpg", idCat: "2" },
    { id: "9", nombre: "Desarrollo Urbanistico", precio: 15000, img: "../imgItems/prod9.png", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}