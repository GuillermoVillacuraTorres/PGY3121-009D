import json
from django.shortcuts import render

from django.views import View
from django.http import JsonResponse
from apps.Tienda.models import Producto

# Create your views here.


class ObtenerProductos(View):
    def get(self,request):
        productos = Producto.objects.all()
        return JsonResponse(list(productos.values()),safe=False)

