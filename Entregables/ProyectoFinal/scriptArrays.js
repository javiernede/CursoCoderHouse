/*Declaraciones de const*/
const sServicio1 = " 1 - Servicio de control de matafuegos."
const sServicio2 = " 2 - Servicio de control de compresores."
const sServicio3 = " 3  - Servicio de equipamiento de personal."

const descuento = 20
const precioServicioMataFuego = 2500
const precioCompresores = 1300
const precioEquipSegu = 500


/*Declaraciones de variables*/


let iNoMuestro = 0;
let totalComprado = 0;

/*Cuerpo del programa*/



const servicios = []


let carrito = new Carrito();

let servicio1 = new ServicioSeg(sServicio1, 12000, 1)
let servicio2 = new ServicioSeg(sServicio2, 15000, 1)
let servicio3 = new ServicioSeg(sServicio3, 18000, 1)

let texto = prompt("Ingrese por favor el número de servicio que desee contratar (ESC sale del programa): \n " + 
                    sServicio1 + "\n" + sServicio2 + "\n" + sServicio3);

while (texto.toLowerCase() != "esc")  {

    switch (parseInt(texto)) {

    case 1: /*Serivcio de control de matafuegosS*/

      servicios.push(servicio1);

      carrito.addServicio(servicio1)
      
       break;


    case 2: /*Servicio de control de compresores*/
        
       servicios.push(servicio2);

       carrito.addServicio(servicio2)

        break;

    case 3: /*Servicio de control de equipamiento de personal.*/
         
        servicios.push(servicio3);    

        carrito.addServicio(servicio3);

        break;

    default: /*No eligio un servicio valido.*/

        alert("Lo lamentamos, no ingreso un servicio válido ");

        iNoMuestro = 1;

        break;
      
    }



    let pregunta = prompt("¿Hay algún servicio mas que quiera consultar? S / N: ");

    /*while (pregunta == "s"  ) 
    {
        alert("No ingreso una respuesta correcta")   

         pregunta = prompt("¿Hay algún servicio mas que quiera consultar? S / N: ");
    }*/
    if (pregunta.toLowerCase() == "n"){
        break;
    }
  

    texto = prompt("Ingrese por favor el número de servicio que desee contratar (ESC sale del programa): \n " + 
    sServicio1 + "\n" + sServicio2 + "\n" + sServicio3);
}

/*Muesto lo que se registro por el arrays*/ 
for (const servicio of servicios){
    console.log(servicio)
}
