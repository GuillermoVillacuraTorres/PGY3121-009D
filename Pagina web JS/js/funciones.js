console.log("Hola mundo");
//alert("Bienvenidos!!!");

let variableUno = 10;
let variableDos = "10";

console.log(variableUno);

if (variableUno === variableDos) {
    console.log("son iguales.");
}else{
    console.log("no son iguales.");
}

suma(100,100);

function suma(n1,n2){
    let resultado = 0;
    resultado = n1 + n2;
    console.log("El resultrado de la suma es: ", resultado);
    let variablelocal = 50;
    
}

//console.log("El valor de la variable global es: ",variablelocal);

const constante = 10;
//constante = 20;
console.log("CONSTANTE", constante);


function eventBlur(){
    console.log("Evento BLUR");
}

function eventFocus(){
    console.log("Evento focus");
}

function eventClick(){
    console.log("Evento Click");
}

function eventKeyDown(){
    console.log("Evento KEY DOWN");
}

function eventKeyUp(){
    console.log("Evento KEY UP");
}

function eventChange(){
    console.log("Evento CHANGE");
}