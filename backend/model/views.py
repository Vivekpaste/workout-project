from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import subprocess

@api_view(['GET'])
def run_subprocess1(request):
    try:        
        result=subprocess.run(['python', 'subprocess/test.py'],stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
      
        return Response({'status': 'success', 
                             'message': 'External program executed successfully'
                             }, status=status.HTTP_201_CREATED)
    
    except subprocess.CalledProcessError as e:
        return Response({'message':'No auth token'},status=status.HTTP_400_BAD_REQUEST) 

    
@api_view(['GET'])
def run_subprocess2(request):
    try:
        result=subprocess.run(['python', 'subprocess/test2.py'],stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
        
        return Response({'status': 'success', 
                             'message': 'External program executed successfully'
                             }, status=status.HTTP_201_CREATED)
    
    except subprocess.CalledProcessError as e:
        return Response({'message':'No auth token'},status=status.HTTP_400_BAD_REQUEST)
  
@api_view(['GET'])
def run_subprocess3(request):
    try:
        result=subprocess.run(['python', 'subprocess/test3.py'],stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
        
        return Response({'status': 'success', 
                             'message': 'External program executed successfully'
                             }, status=status.HTTP_201_CREATED)
    
    except subprocess.CalledProcessError as e:
        return Response({'message':'No auth token'},status=status.HTTP_400_BAD_REQUEST)
  
@api_view(['GET'])
def run_subprocess4(request):
    try:
        result=subprocess.run(['python', 'subprocess/test4.py'],stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
        
        return Response({'status': 'success', 
                             'message': 'External program executed successfully'
                             }, status=status.HTTP_201_CREATED)
    
    except subprocess.CalledProcessError as e:
        return Response({'message':'No auth token'},status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def run_subprocess5(request):
    try:
        result=subprocess.run(['python', 'subprocess/test5.py'],stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
     
        return Response({'status': 'success', 
                             'message': 'External program executed successfully'
                             }, status=status.HTTP_201_CREATED)
    
    except subprocess.CalledProcessError as e:
        return Response({'message':'No auth token'},status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def run_subprocess6(request):
    try:
        result=subprocess.run(['python', 'subprocess/test6.py'],stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
     
        return Response({'status': 'success', 
                             'message': 'External program executed successfully'
                             }, status=status.HTTP_201_CREATED)
    
    except subprocess.CalledProcessError as e: 
        return Response({'message':'No auth token'},status=status.HTTP_400_BAD_REQUEST)