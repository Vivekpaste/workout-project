from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name= models.CharField(max_length=255)
    email=models.EmailField(max_length=255, unique=True)
    phone=models.IntegerField(unique=True,default=1331000)
    country=models.CharField(max_length=255)
    age=models.IntegerField(default=10)
    height=models.IntegerField(default=1231)
    weight=models.IntegerField(default=13000131)
    
    username=None
    
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]
    