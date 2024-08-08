from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('download_sentences', views.press_button, name='press_button'),
]