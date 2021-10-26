from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Todo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=64, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    done = models.BooleanField(default=False, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)