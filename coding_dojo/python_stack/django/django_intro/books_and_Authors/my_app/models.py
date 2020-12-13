from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=200)

class Author(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    books = models.ManyToManyField(Book, related_name='authors')
    notes = models.TextField(default="Hello")

