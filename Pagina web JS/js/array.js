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

function region(){
    const select = document.getElementById("cmbRegion");

    for (const i of arrayDos) {
        const option = document.createElement("option");
        option.value = i.id;
        option.textContent = i.nombre;
        select.appendChild(option);
    }
}


function valor(){
    let valor = document.getElementById("cmbRegion").value;
    console.log("valor: ",valor);
}

function load(){
    region();
    api();
}


function api(){
    fetch('https://mindicador.cl/api')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            let dolar = document.getElementById("dolar");
            dolar.innerHTML += data.dolar.valor;

            let bitcoin = document.getElementById("bitcoin");
            bitcoin.innerHTML += data.bitcoin.valor;

            let euro = document.getElementById("euro");
            euro.innerHTML += data.euro.valor;

            let uf = document.getElementById("uf");
            uf.innerHTML += data.uf.valor;
        })
}