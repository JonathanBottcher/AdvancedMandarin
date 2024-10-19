from django.urls import path
from .views import get_sentences

urlpatterns = [
    path('<int:level>/', get_sentences),


    
]
