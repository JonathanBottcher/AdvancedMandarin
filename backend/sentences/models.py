from django.db import models

# Create your models here.

class Sentence(models.Model):
    original = models.TextField(max_length=500)
    translation  = models.TextField(max_length=500)
    level = models.CharField(max_length=1)



    def __str__(self):
        return self.original
    def __int__(self):
        return self.level