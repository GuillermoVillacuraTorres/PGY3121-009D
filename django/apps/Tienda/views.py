from django.shortcuts import render

# Create your views here.

def cargarInicio(request):
    return render(request,"inicio.html")