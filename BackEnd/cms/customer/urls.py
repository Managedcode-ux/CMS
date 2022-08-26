from django.urls import path, include
from . import views
from .views import customerView

app_name = 'customer'
urlpatterns = [
    path('', customerView.as_view(), name='customerList'),
]
