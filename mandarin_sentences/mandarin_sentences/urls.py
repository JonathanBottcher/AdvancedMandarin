from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("sentences/", include("sentences.urls")),
    path("admin/", admin.site.urls),
    path('api/', include('api.urls')),
    path('management/', include('management.urls')),
]
