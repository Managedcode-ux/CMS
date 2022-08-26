import uuid
from django.db import models


class customer(models.Model):
    userId = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    First_Name = models.CharField(max_length=50, null=False, blank=False)
    Last_Name = models.CharField(max_length=50, null=False, blank=False)
    email = models.EmailField(max_length=254, null=False, blank=False)
    Address_Line = models.CharField(max_length=500, null=False, blank=False)
    city = models.CharField(max_length=20, null=False, blank=False)
    State = models.CharField(max_length=20, null=False, blank=False)
    PinCode = models.CharField(max_length=10, null=False, blank=False)
    Phone_Number = models.CharField(max_length=20, null=False, blank=False)
    dateCreated = models.DateTimeField(auto_now_add=True, null=False)

    def __str__(self):
        return self.First_Name + ' ' + self.Last_Name
