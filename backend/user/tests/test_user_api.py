"""
Tests for the User API.
"""
from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse

from rest_framework.test import APIClient
from rest_framework import status

CREATE_USER_URL = reverse('user:create-user')


def create_user(**params):
    user = get_user_model().objects.create_user(**params)
    return user


class TestPublicUserAPI(TestCase):
    """Test for the unauthenticated User"""
    def setUp(self):
        self.client = APIClient()

    def test_create_user(self):
        payload = {
            'email': 'test@example.com',
            'name': 'Test name',
            'password': 'testpass123',
        }

        response = self.client.post(CREATE_USER_URL, payload)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['email'], payload['email'])
