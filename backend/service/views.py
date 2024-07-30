# from django.shortcuts import render
from rest_framework import viewsets
from service.models import Service
from service.serializers import serviceerializer

# Create your views here.
# ViewSets define the view behavior.

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = serviceerializer
