
from service.models import Service
from rest_framework import serializers

class serviceerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'flag', 'service_name', 'description', 'validity_days', 'ready_date', 'price', 'service_type']
