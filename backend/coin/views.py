import requests
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from coin.serializers import CoinSerializer, CoinDetailSerializer
from core.models import Coin


@api_view(['GET'])
def coin_list(request):
    coins = Coin.objects.all()
    url = "https://api.coingecko.com/api/v3/coins/list"
    response = requests.get(url)
    coin_data = response.json()

    serializer = CoinSerializer(coin_data, many=True)
    # Serialize the coin data to return as JSON
    # You can use Django REST framework serializers for this
    return Response(serializer.data)


# @api_view(['GET'])
# def get_coin_data(request, coin_name):
#     url = f"https://api.coingecko.com/api/v3/simple/price?ids={coin_name}&vs_currencies=usd"
#     response = requests.get(url)
#     data = response.json()
#
#     serializer = CoinDetailSerializer(data, many=True)
#
#     return Response(serializer.data)

@api_view(['GET'])
def get_coin_data(request, coin_name):
    try:
        # Wykonaj zapytanie do CoinGecko API, aby pobrać cenę wybranej kryptowaluty w USD
        url = f"https://api.coingecko.com/api/v3/simple/price?ids={coin_name}&vs_currencies=usd"
        response = requests.get(url)
        data = response.json()

        # Sprawdź, czy kryptowaluta istnieje w odpowiedzi API
        if coin_name in data:
            # Pobierz cenę kryptowaluty w USD
            current_price = data[coin_name]["usd"]

            # Utwórz słownik z ceną kryptowaluty
            price_data = {
                "coin_name": coin_name,
                "current_price_usd": current_price
            }

            return Response(price_data)
        else:
            return Response({'detail': 'Kryptowaluta nie istnieje'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'detail': 'Wystąpił błąd'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
