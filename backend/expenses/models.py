import uuid
from django.db import models
from django.db.models import Sum

# Create your models here.
class Expense(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    date = models.DateField()
    amount = models.FloatField()
    description = models.TextField()

class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    # Get the amount of expenses for this category.
    def get_expenses(self):
        return Expense.objects.filter(category=self).aggregate(Sum('amount'))['amount__sum']

    class Meta:
        verbose_name_plural = 'Categories'