from rest_framework import serializers
from core.models import Coin  # Adjust the import path as needed


class CoinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coin
        fields = ['name']


class CoinDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coin
        fields = ['price']