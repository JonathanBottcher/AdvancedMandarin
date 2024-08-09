from django.urls import path
from .views import get_level1, get_level2, get_level3, get_level4, get_level5

urlpatterns = [
    path('level-1/', get_level1),
    path('level-2/', get_level2),
    path('level-3/', get_level3),
    path('level-4/', get_level4),
    path('level-5/', get_level5),

]