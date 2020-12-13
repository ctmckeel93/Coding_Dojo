from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('create_dojo', views.create_dojo),
    path('add_ninja', views.add_to_dojo),
]