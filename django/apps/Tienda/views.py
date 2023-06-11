from django.shortcuts import render, redirect
from .models import *

# Create your views here.

def cargarInicio(request):
    productos = Producto.objects.all()
    cate_producto_jardineria = Producto.objects.filter(categoriaId = 1) 
    cate_producto_arbol = Producto.objects.filter(categoriaId = 2) 
    return render(request,"inicio.html",{"producto":productos,"cate_arbol":cate_producto_arbol,"cate_jardineria": cate_producto_jardineria})



def cargarAgregarProducto(request):
    categorias = Categoria.objects.all()
    return render(request,"agregarProductos.html",{"cate":categorias})


def agregarProducto(request):
    #print("AGREGAR PRODUCTOS", request.POST)

    v_categoria = Categoria.objects.get(id_categoria = request.POST['cmbCategoria'])

    v_sku = request.POST['txtSku']
    v_nombre = request.POST['txtnombre']
    v_precio = request.POST['txtprecio']
    v_stock = request.POST['txtStock']
    v_descripcion = request.POST['txtDescripcion']
    v_imagen = request.POST['txtImagen']

    Producto.objects.create(sku = v_sku, nombre = v_nombre, precio = v_precio,stock = v_stock, descripcion = v_descripcion, imagenUrl=v_imagen,categoriaId = v_categoria)
    
    return redirect('/agregarProducto')
