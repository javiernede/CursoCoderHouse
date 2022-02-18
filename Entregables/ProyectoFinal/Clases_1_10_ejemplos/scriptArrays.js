const showServiciosOnCart = () => {

    const divCart = document.getElementById("serviciosOnCarts")
    let htmlListServicios = ""

    cart.forEach(servicio => {
        htmlListServicios += `
        <div style= "border: 1px solid blue">
            <b>${servicio.name}</b>
            <p>${servicio.price}</p>
        </div>
        `
        })
        divCart.innerHTML = htmlListServicios
        
    }
 

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

const getPrice = (id)=> {
        let htmlListServicios = ""
        const servicio = servicios.find( p=> p.id == id)
        htmlListServicios = ` <b>${servicio.price}</b>`
   }

const showServicios = () => {

    registerClickEvent()

    const precios =  document.getElementById("1") /*Esto es un array */
    getPrice(precios)
    
}

const addCart = (event) =>  {

    const ServicioId = parseInt(event.target.id) /*target: quien llamo ese evento*/ 
    
    addServicio(ServicioId)

    showServiciosOnCart()
}

showServicios()



