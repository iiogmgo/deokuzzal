from django.urls import path

from deokuzzal import views

urlpatterns = [
    path('', views.index, name='index'),
]
