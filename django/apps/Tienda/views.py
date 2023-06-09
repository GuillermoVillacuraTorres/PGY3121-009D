from django.shortcuts import render
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