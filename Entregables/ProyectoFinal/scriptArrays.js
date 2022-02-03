
const op1 = " 1 - Comprar Servicios"
const op2 = " 2 - Eliminar Servicios"
const op3 = " 3  - Servicio de equipamiento de personal."


const sServicio1 = " 1 - Servicio de control de matafuegos."
const sServicio2 = " 2 - Servicio de control de compresores."
const sServicio3 = " 3  - Servicio de equipamiento de personal."


let id = 0
let quantity = 0
let servicioMensaje = 0

const cart = []


menu = prompt("Ingrese por favor que operacion quiere realizar: \n " + 
op1 + "\n" + op2);


let respueta = 0;

respueta = parseInt(menu)
if (respueta == 1) {

    servicioMensaje = prompt("Ingrese por favor el número de servicio que desee contratar (0 sale del programa): \n " + 
                      sServicio1 + "\n" + sServicio2 + "\n" + sServicio3);
}


id = parseInt(servicioMensaje)          

quantity = parseInt(prompt("Ingrese la cantidad del servicio " + servicioMensaje));




while (id != 0 && respueta !=0 )  {

   
   if (respueta == 1){ 
       
     

         const addServicio = (id, quantity = 1) => {     /*busca en el array x id*/ 


        const servicio = servicios.find( p=> p.id == id)
    
        /* Si el id ingresado no existe */
    
        if(!servicio) return "El servicio no existe"
    
        if (servicio.stock <= quantity) return "No puede contratar mas servicios"
    
        /* Busco si el Servicio ingresado existe en el carrito*/
    
        const servicioCart = cart.find( p => p.id == id)
    
        /*Si existe, entonces lo sumo al existente*/ 
    
        if(servicioCart) servicioCart.quantity += quantity
    
        /*Sino existe entonces lo agrego al carrito*/ 
    
        else cart.push(new ServicioToCart(servicio, quantity))
    
        servicio.stock -= quantity
      
        alert(cart.join('\n'))
     
    }

   addServicio(id,quantity)

    

}
    
     precioTotal = () => {

    
        const suma = cart.reduce((suma,p) => suma + p.price,0)
    
        alert(`Precio Total: ${suma}`)
    }
    
    
    
     rmServicios = (id, qty = 1) => {
    
        const service = cart.find(p => p.id == id)
    
        service.quantity -= qty
    
        if(service.quantity < 1) {
    
            //Obtengo el index en el carrito
    
            const idx = cart.indexOf(p => p.id == id)
    
            //Borro por indice obtenido en la sentencia anterior.
            cart.splice(idx-1, 1)
    
    
        }
    }
    
     addCupon = (cupon) => {
    
        cuponFound = cupones.find( c=> c.name == cupon && !c.apply)
    
        if(!cuponFound) return "Cupon not found"
    
        cuponFound.apply = true
    
        cart.forEach((p) => {
            p.price = p.price * 0.05
        })
    }


     menu = prompt("Ingrese por favor que operacion quiere realizar: \n " + 
    op1 + "\n" + op2);

    respueta = parseInt(menu)

    if (respueta == 1) {

    servicioMensaje = prompt("Ingrese por favor el número de servicio que desee contratar (0 sale del programa): \n " + 
                      sServicio1 + "\n" + sServicio2 + "\n" + sServicio3);

    id = parseInt(servicioMensaje)          

    quantity = parseInt(prompt("Ingrese la cantidad de del servicio " + servicioMensaje));

    }

}







