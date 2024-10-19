from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serializers import SentenceSerializer
from sentences.models import Sentence
from api.query_set import query_set
import sys
import random

# Create your views here.

sys.path.append("..")

@api_view(['GET'])
def get_sentences(request, level):
    if request.method == 'GET':
        items = list(Sentence.objects.all().filter(level = level))
        sentences = random.sample(items, 10)
        serializer = SentenceSerializer(sentences, many=True)
    return Response(serializer.data)
