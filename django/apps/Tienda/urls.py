from django.urls import path
from . import views

urlpatterns = [
    path('',views.cargarInicio),
    path('agregarProducto',views.cargarAgregarProducto)
]