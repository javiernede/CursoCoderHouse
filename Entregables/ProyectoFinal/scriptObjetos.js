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

/*Innstancio los objetos servicio y el carrito de compras en base a las dos clases declaradas.*/



let servicio1 = new Servicio(sServicio1, 1500);

let servicio2 = new Servicio(sServicio2, 12000);

let servicio3 = new Servicio(sServicio3, 15000);

let carrito = new Carrito();


let texto = prompt("Ingrese por favor el número de servicio que desee contratar (ESC sale del programa): \n " + 
                    sServicio1 + "\n" + sServicio2 + "\n" + sServicio3);

while (texto.toLowerCase() != "esc")  {

    switch (parseInt(texto)) {

    case 1: /*Serivcio de control de matafuegosS*/

      carrito.addServicio(servicio1);


       break;


    case 2: /*Servicio de control de compresores*/
        
       carrito.addServicio(servicio2);

        break;

    case 3: /*Servicio de control de equipamiento de personal.*/
         
        carrito.addServicio(servicio3);

        break;

    default: /*No eligio un servicio valido.*/

        alert("Lo lamentamos, no ingreso un servicio válido ");

        iNoMuestro = 1;

        break;
      
    }

    if (iNoMuestro == 0) {


        carrito.resumen()


        let nSubtotal = carrito.subtotal();

        alert(`El subtotal es ${nSubtotal}`)
    }


   /* iNoMuestro = 0;*/

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