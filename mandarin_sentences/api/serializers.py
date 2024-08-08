# -*- coding: utf-8 -*-
"""
Created on Sat May 18 23:29:45 2024

@author: Jonathan
"""

from rest_framework import serializers
from sentences.models import Sentence

class SentenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sentence
        fields = ['original', 'translation', 'level']
        