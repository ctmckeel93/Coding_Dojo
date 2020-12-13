from django.db import models
from django.db.models.fields import CharField, DateTimeField

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    age = models.IntegerField()
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)



