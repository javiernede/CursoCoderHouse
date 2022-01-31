class Producto{
    constructor (name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    getkeys(){
        return  this.name.toLowerCase();
    }
}

class Carrito {

    constructor() {

     this.obj = {}
    }

     /*Metodo de la clase */ 
    addProducto(producto){

        let key = producto.getkeys();

        //Validamos stock

        if(producto.stock < 1){
            return `No hay stock de ${producto.name}`;
        }

        if (key in this.obj){
            //Existe el producto en el carrito
            this.obj[key].cantidad++;
            this.obj[key].subTotal += producto.price;

        } else {
            //No existe el producto en el carrito.
            this.obj[key] = {

                cantidad: 1,

                subTotal: producto.price,
                unitPrice: producto.price

            }
        }

        producto.stock--;
       
    }
    /* Metodo de la clase */
    rmProducto(p){

        let key = p.getkeys();

        if (key in this.obj){

            //Existe el producto en el carrito
        
            if(this.obj[key].cantidad < 1 ){

             
                return "El servicio No existe en el carrito";
            }

            this.obj[key].cantidad--;

            this.obj[key].subTotal -= p.price;

        } else {

             //No existe el servicio en el carrito

            return "El servicio no existe en el carrito";

            }
        }


    /* Metodo de la clase */
    resumen(){
        console.log(this.obj)
    }

        total(){

            let result = {
                cantidad: 0,
                total: 0
            }

            for(const key in this.obj){
                result.cantidad += this.obj[key].cantidad;
                result.total += this.obj[key].subTotal;
            }

            return result;
        }
  
    }






