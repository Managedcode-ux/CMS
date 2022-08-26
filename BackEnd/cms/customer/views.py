from django.shortcuts import render
from rest_framework.views import APIView
from . models import customer
from rest_framework.response import Response
from .serializer import *


class customerView(APIView):
    serializers_class = customerSerializer

    def get(self, request, *args, **kwargs):
        detail = [{"FirstName": detail.First_Name,
                   "LastName": detail.Last_Name,
                   "email": detail.email,
                   "Address": detail.Address_Line,
                   "city": detail.city,
                   "state": detail.State,
                   "PinCode": detail.PinCode,
                   'Phone_Number': detail.Phone_Number}
                  for detail in customer.objects.all()]
        return Response(detail)
