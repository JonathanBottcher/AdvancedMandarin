from django.db import models

# Create your models here.

class Sentence(models.Model):
    original = models.CharField(max_length=500)
    translation = models.CharField(max_length=500)
    level = models.CharField(max_length=10)
  
    
    
    def __str__(self):
        return self.original
    def __int__(self):
        return self.level



    
