
from django.db import models

class Service(models.Model):
    flag = models.CharField(max_length=10, blank=True, null=True)
    service_name = models.CharField(max_length=255, blank=True, null=True)
    service_type = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    validity_days = models.PositiveIntegerField(null=True, blank=True)
    ready_date = models.DateField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.service_name 