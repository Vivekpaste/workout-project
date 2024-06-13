from django.urls import path
from .views import run_subprocess1,run_subprocess2

urlpatterns = [
    path('model',run_subprocess1),
    path('model2',run_subprocess2),
  
]
