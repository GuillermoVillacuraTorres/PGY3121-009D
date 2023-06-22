from django.urls import path
from . import views

urlpatterns = [
    path('productos',views.ObtenerProductos.as_view())
]