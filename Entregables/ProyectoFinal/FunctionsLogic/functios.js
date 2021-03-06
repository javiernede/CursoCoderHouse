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



const SetPrice = (id)=> {
        const precios =  document.getElementsByClassName("precios") /*Esto es un array */
        let htmlListServicios = ""
        const serv = servicios.find( p=> p.id == id)
            htmlListServicios = 
           ` 
           <div>
                <p>     
                <b> Precio: ${serv.price}</b>
                </p>  
            </div> `
            precios.innerHTML = htmlListServicios

}


const ShowService = ()=> {
  
    const divServicios = document.getElementById("servicios")
    let htmlListServicios = ""

    servicios.forEach(serv => {

        htmlListServicios += 
        `
        <li id="controlEquipPersonal" style= "border: 3px solid #e8491d">
        <div>
            <p>     
             ${serv.desc}
            </p>  
            <p>     
            <b> Precio: ${serv.price}</b>
            </p> 
            <button class ="AddCart" id="${serv.id}"> Agregar al carrito: ???? </button> 
        </div> 
        </li>`
        
    })
    
    
    divServicios.innerHTML = htmlListServicios

}

const addCart = (event) =>  {

    const ServicioId = parseInt(event.target.id) /*target: quien llamo ese evento*/ 
    
    addServicio(ServicioId)

    showServiciosOnCart()
}

const showServicios = () => {

    ShowService()

    registerClickEvent()

  
    
}

const registerClickEvent = ()=> {
    const btnAddCarts = document.getElementsByClassName("AddCart") /*Esto es un array */
    for(const btn of btnAddCarts){ /*Recorro el array*/ 
       btn.onclick = addCart
   }
}