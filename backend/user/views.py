from django.shortcuts import render
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import UserSerializer,RegisterSerializer,LoginSerializer
from .models import User
import jwt,datetime

@api_view(['POST'])
def register(request):
    serializer=RegisterSerializer(data=request.data)
    print(request.data)
    if serializer.is_valid():
        name=serializer.data["name"]
        email=serializer.data["email"]
        password=serializer.data["password"]
        age=serializer.data["age"]
        height=serializer.data["height"]
        weight=serializer.data["weight"]
        phone=serializer.data["phone"]
        country=serializer.data["country"]
        
        if User.objects.filter(email=email).first():
                return Response({"message":"Acount already exists."}, status=status.HTTP_406_NOT_ACCEPTABLE)
        # new_customer = User.objects.create(email=email, name=name,phone=phone,country=country)
        new_customer = User.objects.create(email=email, name=name,age=age,height=height,weight=weight,phone=phone,country=country)
        new_customer.set_password(password)
        new_customer.save()
        return Response({"message":"Added Account"}, status=status.HTTP_201_CREATED)
        
    return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    serializer=LoginSerializer(data=request.data)
    print(request.data)
    if(serializer.is_valid()):
        email=serializer.data["email"]
        password=serializer.data["password"]
        if(User.objects.filter(email=email).first() is None):
            return Response({"message":"Account does not exist"},status=status.HTTP_404_NOT_FOUND)
        user = authenticate(email=email, password=password)
        if not user:
            return Response({"message":"Incorrect password"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        payload={
            'id':user.id,
            'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat':datetime.datetime.utcnow(),
        }
        token=jwt.encode(payload,'secret',algorithm='HS256')
        response=Response()
        response.set_cookie(key='jwt',value=token,httponly=True)
        response.data={
            'jwt':token
        }
        
        return response
    
@api_view(['GET'])
def user(request):
    token=request.COOKIES.get('jwt')
    if not token:
        return Response({'message':'No auth token'},status=status.HTTP_403)
    try:
        payload = jwt.decode(token, 'secret', algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        return Response({'message':'No auth tokjjjjen'},status=status.HTTP_403)
    user = User.objects.filter(id=payload['id']).first()
    serializer = UserSerializer (user)
    return Response(serializer.data)



@api_view(['POST'])
def logout(request):
    response = Response()
    response. delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response