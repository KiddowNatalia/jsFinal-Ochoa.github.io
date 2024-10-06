//?Voy a realizar un proyecto que se trata de una pagina en la cual se van a sacar turnos
//?para ir al dentista. Tambien
//? se va a poder cotizar segun lo que el cliente necesite hacer

//!Actividad con CICLOS
//?El usuario va a tener la posibilidad de elegir entre tres tratamientos: implantes
//? caries o consulta. En todos los casos se va a dar a conocer los precios */

//todo: Primero deberia saludar al usuario y preguntarle que prefiere consultar: si sacar turno para una consulta, sacar turno para implantes o para caries;
//todo: una vez que el usuario elige pasarle la cotizacion.

//todo: Crear un ciclo switch que te muestre los escenarios posibles

/* let implantes= 360000;
let caries = 65000 ;
let consulta = 35000;

let pregunta = console.log(`Que necesitas? \n1) Saber precio sobre implantes \n2) Saber precio de caries \n3) Saber precio de la consulta`);
let respuesta1= 1;
let respuesta2= 2;
let respuesta3= 3;

let respuesta= respuesta2;

switch(respuesta){
    case respuesta1: 
        console.log(`el precio de los implantes es $${implantes}`);
    break;
    case respuesta2:
        console.log(`El precio de las caries es de $${caries}`);
    break;
    case respuesta3: 
        console.log(`El precio de la consulta es de $${consulta}`);
    break;
} */

//!Actividad con CONDICIONALES
//?El usuario va a querer sacar un turno para sacarse una caries. Yo le voy a mostrar 
//? los horarios y fechas que tenemos disponibles.

//todo: Primero deberia mostrarle los horarios y fechas que tenemos disponibles
//todo: Segundo el usuario elige
//todo: Tercero se le muestra al usuario la fecha y la hora que eligio para atenderse

//todo: Crear un condicional if else if. Hacer tres variables que almacenen 3 fechas y 3 horarios en cada caso.


let fecha1= "3/10/2024";
let fecha2= "5/10/2024";
let fecha3= "10/10/2024";

let horario1= 13;
let horario2=16;
let horario3=20;


let pregunta1= console.log(`En que fecha quisieras sacar el turno? \n1) ${fecha1} \n2) ${fecha2} \n3) ${fecha3}`);
let respuestaA= fecha1;
let respuestaB= fecha2;
let respuestaC= fecha3; 

let pregunta2= console.log(`En que horario quisieras sacar el turno? \n1) ${horario1} \n2) ${horario2} \n3) ${horario3}`);
let respuestaD= horario1;
let respuestaE= horario2;
let respuestaF= horario3;

function fecha (a, b, c){
    if(a == respuestaA){
            console.log(`La fecha que elegiste es ${a}`);
    }else if(b == respuestaB){
        console.log(`La fecha que elegiste es ${b}`);
    }else if(c == respuestaC){
        console.log(`La fecha que elegiste es ${c}`);
    }else{
        console.log(`Elegi una respuesta`);
    }
}
function horario(d,e,f){
    if(d == respuestaD){
        console.log(`La fecha que elegiste es ${d}`);
}else if(e == respuestaE){
    console.log(`La fecha que elegiste es ${e}`);
}else if(f == respuestaF){
    console.log(`La fecha que elegiste es ${f}`);
}else{
    console.log(`Elegi una respuesta`);
}
}
console.log(fecha(respuestaA));
console.log(horario(respuestaE));


