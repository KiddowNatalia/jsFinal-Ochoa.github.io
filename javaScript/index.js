
function muestraPrecios (precio){
    alert(`El precio es $${precio}`);
} 

function saberPrecios (respuestaDeUsuario){
    switch(respuestaDeUsuario){ 
        case 1: 
        muestraPrecios(`360000 por implante`);
    break;
        case 2:
        muestraPrecios(`65000 por caries`);
    break;
        case 3: 
        muestraPrecios(`35000 por consulta`);
        break;
    default:
        alert(`Ingresaste un dato invalido, por favor indique un nuevo valor`)
}
}


let saberMas = 1;

do{

    let respuesta = Number(prompt(`Que necesitas? marca con un numero la opcion que necesitas\n1) Saber precio sobre implantes \n2) Saber precio de caries \n3) Saber precio de la consulta`));

    saberPrecios(respuesta)

    saberMas = Number(prompt(`¿Queres saber otro precio? Marca con un numero la opcion que necesitas: \n1) Si \n2) No`));

} while(saberMas == 1)
