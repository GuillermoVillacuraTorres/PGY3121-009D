function crearStorage(){
    array = [
        {
            rut:"12.123.123-0",
            nombre:"Juan",
            apellido:"Diaz"
        },
        {
            rut:"45.456.456-5",
            nombre:"Pedro",
            apellido:"Bravo"
        },
        {
            rut:"78.789.789-8",
            nombre:"Daniel",
            apellido:"Pereira"
        }
    ]
    //console.log(array);

    let cadenaString = JSON.stringify(array);
    console.log(cadenaString);

    localStorage.setItem("miPrimerStorage",cadenaString);

    console.log("Creando storage");

}

function obtenerStorage(){
    let storage = localStorage.getItem("miPrimerStorage");
    let array = JSON.parse(storage);
    console.log("Obteniendo storage", array);
}

function eliminarStorage(){
    localStorage.removeItem("miPrimerStorage");
    console.log("Eliminando storage");
}

function eliminarUnoStorage(){
    let valor = document.getElementById("txtRut").value;
    let storage = JSON.parse(localStorage.getItem("miPrimerStorage"));
    console.log("Storage", storage);
    let arrayTemporal = [];

    let filtro = storage.filter(e => e.rut == valor);
    console.log("Filtro", filtro);

    if (filtro.length == 0) {
        alert("Elrut ingresado no existe!")
    }else{
        for (const i of storage) {
            if (i.rut != valor) {
                arrayTemporal.push(i);
            }
        }
    
        console.log("ArrayTemporal",arrayTemporal);
    
        let cadenaString = JSON.stringify(arrayTemporal);
        
        localStorage.setItem("miPrimerStorage",cadenaString);
    }

   
}
