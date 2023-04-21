let miArray = [100,200,"Hola",true];

miArray.push(1500);
miArray.unshift(500);

for (const i of miArray) {
    
    
    //console.log(i);
}

//console.log(miArray[3]);

let arrayDos = [
    {
        id:1,
        nombre:"Metropolitana"
    },
    {
        id:2,
        nombre:"Maule"
    }

];

arrayDos.push({id:3,nombre:"Atacama"});
arrayDos.unshift({id:4, nombre:"Los lagos"});

//console.log(arrayDos[2].nombre);
console.table(arrayDos);

for (const i of arrayDos) {
    //console.log(i);
}

console.log(arrayDos);