$(document).ready(function(){
    
});

$(function(){
    console.log("Ready");
})

$("p").css({"background-color": "red"});

$(".primero").css({"background-color": "green"});

$("#ocultar").on("click",function(){
    //$(".primero").hide();
    //$(".primero").fadeOut();
    $(".primero").slideUp();
});

$("#mostrar").on("click",function(){
    //$(".primero").show();
    //$(".primero").fadeIn();
    $(".primero").slideDown();
});

$("#btn").on("click", function(){
    console.log($("#quinto").text());
    $("#quinto").text("1234564897");
    $("#cuarto").html("<strong> Hola </strong>");

    $("#tercero").append("<strong> Hola </strong>" + "Welcome");
    $("#tercero").prepend("First");

});


$("#btnValor").on("click", function(){
    let valor = $("#txtValor").val();
    console.log("El valor del input es: ", valor);

})

/* 
setInterval(function(){
    $("#contenedor").animate({marginLeft: "700px"});
$("#contenedor").animate({marginTop: "200px"});
$("#contenedor").animate({marginLeft: "0px"});
$("#contenedor").animate({marginTop: "0px"});
},1000)
 */


$(function(){
    $("#miFormulario").validate({
        rules:{
            txtRut:{
                required:true,
                minlength:5
            },
            txtNombre:{
                required:true
            }
        },
        messages:{
            txtRut:{
                required: "El rut es un campo obligatorio.",
                minlength: "El minimo de caracteres es 5."
            }
        }
        
    })
})