
const op1 = " 1 - Comprar Servicios"
const op2 = " 2 - Eliminar Servicios"
const op3 = " 3  - Servicio de equipamiento de personal."


const sServicio1 = " 1 - Servicio de control de matafuegos."
const sServicio2 = " 2 - Servicio de control de compresores."
const sServicio3 = " 3  - Servicio de equipamiento de personal."







const showServiciosOnCart = () => {

    const divServicios = document.getElementById("serviciosOnCarts")
    let htmlListServicios = ""

    cart.forEach(servicio => {
        htmlListServicios += `
        <div>
            <b>${servicio.name}</b>
            <p>${servicio.price}</p>
        </div>
        `
        })
        divServicios.innerHTML = htmlListServicios
        
    }


/******************************************************************************************************** */
 



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

}

const registerClickEvent = ()=> {
    const btnAddCarts = document.getElementsByClassName("AddCart") /*Esto es un array */
    for(const btn of btnAddCarts){ /*Recorro el array*/ 
       btn.onclick = addCart
   }
}
const showServicios = () => {

    registerClickEvent()
}

const addCart = (event) =>  {

    const ServicioId = parseInt(event.target.id) /*target: quien llamo ese evento*/ 
    
    addServicio(ServicioId)

    showServiciosOnCart()
}

showServicios()



