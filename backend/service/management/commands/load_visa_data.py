import json
from django.core.management.base import BaseCommand
from service.models import Service

class Command(BaseCommand):
    help = 'Load service data from JSON'

    def handle(self, *args, **kwargs):
        with open('service.json', 'r') as file:
            service_data = json.load(file)

        for service in service_data:
            Service.objects.create(**service)

        self.stdout.write(self.style.SUCCESS('Successfully loaded service data'))