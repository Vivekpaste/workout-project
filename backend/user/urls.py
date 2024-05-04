from django.urls import path
from .views import register,login,user,logout

urlpatterns = [
    path('register',register),
    path('login',login),
    path('user',user),
    path('logout',logout),
]
