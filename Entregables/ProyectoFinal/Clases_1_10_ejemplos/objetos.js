class Servicio{
    constructor (name, price) {
        this.name = name;
        this.price = price;
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
    addServicio(servicio){

    let key = servicio.getkeys();


    if (key in this.obj){

        //Existe el servicio en el carrito
        
        this.obj[key].cantidad++;

        this.obj[key].subTotal += servicio.price;

    } else {
        //No existe el servicio en el carrito.
        this.obj[key] = {

            cantidad: 1,

            subTotal: servicio.price,

            unitPrice: servicio.price

        }
    }

    servicio.stock--;
       
    }
    /* Metodo de la clase */
    rmServicio(p){

        let key = p.getkeys();

        if (key in this.obj){

            //Existe el servicio en el carrito
        
            if(this.obj[key].cantidad < 1 ){

             
                return "El servicio No existe en el carrito";
            }

            this.obj[key].cantidad--;

            this.obj[key].subTotal -= p.price;

            delete this.obj[key].name

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






