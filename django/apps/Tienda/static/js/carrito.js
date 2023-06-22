let btnCarrito = document.getElementById("btnCarrito");

btnCarrito.addEventListener('click',function(){
    productos = [
        {
            sku:1,
            cantidad:10,
            nombre:"Limon"
        },
        {
            sku:2,
            cantidad:20,
            nombre:"Platano"
        },
        {
            sku:3,
            cantidad:50,
            nombre:"Naranja"
        },
    ]
    
    let token = document.getElementsByName('csrfmiddlewaretoken')[0].value;

    fetch('/carrito',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':token
        },
        body:JSON.stringify(productos)

    })


})