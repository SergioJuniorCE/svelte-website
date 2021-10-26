from rest_framework import serializers

from .models import Expense

# Serializers define the API representation.
class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'