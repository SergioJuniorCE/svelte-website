from rest_framework import serializers

from .models import (
    Expense,
    Category
)

# Serializers define the API representation.
class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'