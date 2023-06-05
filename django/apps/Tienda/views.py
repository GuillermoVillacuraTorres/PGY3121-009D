from django.shortcuts import render
from .models import *

# Create your views here.

def cargarInicio(request):
    productos = Producto.objects.all()
    return render(request,"inicio.html",{"producto":productos})