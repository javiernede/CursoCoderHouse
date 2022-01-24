/*Declaraciones de const*/
const sServicio1 = " 1 - Servicio de control de matafuegos."
const sServicio2 = " 2 - Servicio de control de compresores."
const sServicio3 = " 3  - Servicio de equipamiento de personal."

const descuento = 20
const precioServicioMataFuego = 2500
const precioCompresores = 1300
const precioEquipSegu = 500


/*Declaraciones de variables*/

let sServicio;
let nPrecioDescuento = 0;
let nPrecioFinal = 0;
let nPrecioServicio = 0;
let nPrecioTotalServicio = 0;
let iNoMuestro = 0;


/*Cuerpo del programa*/

/*funciones*/
const suma = (a,b)=> a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21

function calcularPrecioPorServicio(pPrecioServicio, pDescuento)
{
    nPrecioDescuento = resta(pPrecioServicio,pDescuento); 

    nPrecioTotalServicio = suma(nPrecioDescuento, iva(nPrecioDescuento));

    return nPrecioTotalServicio.toFixed(2);
}


let texto = prompt("Ingrese por favor el número de servicio que desee contratar (ESC sale del programa): \n " + 
                    sServicio1 + "\n" + sServicio2 + "\n" + sServicio3);

while (texto.toLowerCase() != "esc")  {

    switch (parseInt(texto)) {

    case 1: /*Serivcio de control de matafuegosS*/

        nPrecioTotalServicio = calcularPrecioPorServicio(precioServicioMataFuego, descuento);  

        sServicio = sServicio1;

       break;


    case 2: /*Servicio de control de compresores*/
        
        nPrecioTotalServicio = calcularPrecioPorServicio(precioCompresores, descuento);

        sServicio = sServicio2;

        break;

    case 3: /*Servicio de control de equipamiento de personal.*/
         
        nPrecioTotalServicio = calcularPrecioPorServicio(precioEquipSegu, descuento);

        sServicio = sServicio3;

        break;

    default: /*No eligio un servicio valido.*/

        alert("Lo lamentamos, no ingreso un servicio válido ");

        iNoMuestro = 1;

        break;
      
    }
    if (iNoMuestro == 0)

        alert("El servicio elegido es el "  + sServicio + "\n" +  "Descuento aplicado: " + descuento + "\n" + " Precio: " + nPrecioTotalServicio );


    iNoMuestro = 0;

    let pregunta = prompt("¿Hay algún servicio mas que quiera consultar? S / N: ");

    /*while (pregunta == "s"  ) 
    {
        alert("No ingreso una respuesta correcta")   

         pregunta = prompt("¿Hay algún servicio mas que quiera consultar? S / N: ");
    }*/
    if (pregunta.toLowerCase() == "n"){
        break;
    }
  


    sServicio = "";

    texto = prompt("Ingrese por favor el número de servicio que desee contratar (ESC sale del programa): \n " + 
    sServicio1 + "\n" + sServicio2 + "\n" + sServicio3);
}