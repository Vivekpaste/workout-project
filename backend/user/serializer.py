from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','name','email','country','weight','height','age','phone']
        
        
       
class RegisterSerializer(serializers.Serializer) :
    email = serializers.EmailField(required = True)
    name = serializers.CharField(required = False)
    password = serializers.CharField(required = True)          
    country = serializers.CharField()          
    weight= serializers.IntegerField(required=True)         
    height= serializers.IntegerField(required=True)         
    phone= serializers.IntegerField(required=True)         
    age= serializers.IntegerField(required=True)         
           
       
class LoginSerializer(serializers.Serializer) :
    email = serializers.EmailField(required = True)
    password = serializers.CharField(required = False)
      
           
    
        

