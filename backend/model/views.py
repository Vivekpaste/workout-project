from django.shortcuts import render
import mediapipe as mp
import cv2
import numpy as np
from django.http import HttpResponse
from django.views.decorators import gzip
from rest_framework.response import Response
from django.http import StreamingHttpResponse,JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import threading
import pickle
import pandas as pd
import base64
from rest_framework import status



import subprocess
from django.core.files.uploadedfile import InMemoryUploadedFile
import json
from io import BytesIO
import PIL.Image
import uuid
import base64

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
  





