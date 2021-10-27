from django.urls import path, include

from rest_framework import routers

from .views import (
    ExpenseViewSet,
    CategoryViewSet,
)

router = routers.DefaultRouter()
router.register(r'expenses', ExpenseViewSet)
router.register(r'categories', CategoryViewSet)


urlpatterns = [
    path('', include(router.urls))
]
