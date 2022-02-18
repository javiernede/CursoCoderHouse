class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.vendido = false
    }

    sumarIva (){

        this.precio = this.precio * 1.21
        
    }
}

const productos = []

productos.push(new Producto("Cerveza", 120))
productos.push(new Producto("Vino", 50))
productos.push(new Producto("Fernet", 300))

for(const producto of productos) producto.sumarIva()
