from django.urls import path
from .views import *
urlpatterns = [
    path('model',run_subprocess1),
    path('model2',run_subprocess2),
    path('model3',run_subprocess3),
    path('model4',run_subprocess4),
  
]
