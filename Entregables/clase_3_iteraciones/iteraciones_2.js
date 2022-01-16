 /*Declaraciones de const*/
 const sAries = "El signo se asocia al carnero, a la constelación de Aries (por lo menos desde el siglo I a. C.) \n " + 
                "y al mito griego de Jasón y los argonautas. En este mito, Frixo y Hele fueron rescatados por un carnero y luego \n " +
                "el animal es sacrificado en honor al dios Marte. Finalmente, Zeus en agradecimiento coloca al carnero en el cielo.";

const sTauro = "Tauro es el segundo de los doce signos zodiacales, luego de Aries,  \n " +
                " y el primero de la triplicidad de tierra, junto a los signos de Virgo y Capricornio.4​ El signo rige la garganta.6​ \ n " +
                 "Su glifo está representado por un círculo copado por astas que puede hacer referencia a la cabeza de un toro o vaca.";

const sGeminis = "En la astrología occidental, basada en las doce divisiones en partes iguales de la eclíptica a partir del punto Aries \n" +
                " o equinoccio de marzo que da inicio a la rueda del zodiaco, se considera que alguien es del signo Géminis cuando nace entre el 21 de \n" +
                "mayo y el 21 de junio,6​ o también, dado que las fechas de inicio y fin pueden cambiar cada año en función al momento exacto del equinoccio \n " +
                "de marzo y al huso horario del lugar en el planeta en donde se nace,7​nota 1​ entre el 22 de mayo y el 21 de junio.8​";

/*Declaraciones de variables*/

 let sDescrip = "";
 let iNoMuestro = 0;

/*Cuerpo del programa*/
let texto = prompt("Ingrese el signo del zodiaco por favor (ESC sale del programa): ");

while (texto.toLowerCase() != "esc")  {

    switch (texto.toLowerCase() ) {
        case "aries":

            sDescrip =  texto + " " + sAries;
            break;

        case "tauro":

            sDescrip =  texto + " " + sTauro;
            break;

        case "geminis":

            sDescrip =  texto + " " + sGeminis;
            break;

        default:
            
            alert("Lo lamentamos, el signo elegido todavia no esta disponible ");
            iNoMuestro = 1;
            break;
      }
      
        if (iNoMuestro == 0)
        alert("informacion del signo elegido: " + sDescrip );

        sDescrip = "";

        iNoMuestro = 0;

        let pregunta = prompt("¿Hay algún signo mas que quiera consultar? S / N: ");
        
        if (pregunta.toLowerCase() == "n") {


            texto = "esc";


        } else {
    
            texto = prompt("Ingrese el signo del zodiaco por favor (ESC sale del programa): ");
        }
    
}