from django.db import models

# Create your models here.
# Player 
class Player(models.Model):
    name = models.CharField(max_length=45)
    created_at : models.DateTimeField(auto_now_add=True)
    updated_at : models.DateTimeField(auto_now=True)

class Item(models.Model):
    name = models.CharField(max_length=45)
    effect = models.CharField(max_length=45)
    players = models.ManyToManyField(Player, related_name="inventory")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)