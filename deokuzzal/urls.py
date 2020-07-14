from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path

from deokuzzal import views

urlpatterns = [
    path('', views.index, name='index'),
]
urlpatterns += staticfiles_urlpatterns()
