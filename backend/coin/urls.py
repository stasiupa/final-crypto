from django.urls import path
from . import views

urlpatterns = [
    path('coin-list/', views.coin_list, name='coin-list'),
    path('coin-list/<str:coin_name>/', views.get_coin_data, name='get-coin-data'),
]