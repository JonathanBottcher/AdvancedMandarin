from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serializers import SentenceSerializer
from sentences.models import Sentence
from api.query_set import query_set
import sys
import random
# Create your views here.

sys.path.append("..")

'''
Notes:

Maybe change everything to one function that takes arguments, making only one endpoint and not five'
Also taking arguments to change the amount of sentences to fetch, e.g. instad of 10 fetch 20.

'''


#Fetch hsk level sentences
@api_view(['GET'])
def get_level1(request):
    if request.method == 'GET':
        items = list(Sentence.objects.all().filter(level='1'))
        #sentences = query_set('1', Sentence) 
        sentences = random.sample(items, 10)
        serializer = SentenceSerializer(sentences, many=True) 
        return Response(serializer.data)

@api_view(['GET'])
def get_level2(request):
    if request.method == 'GET':
        items = list(Sentence.objects.all().filter(level='2'))
        #sentences = query_set('1', Sentence) 
        sentences = random.sample(items, 10)
        serializer = SentenceSerializer(sentences, many=True) 
        return Response(serializer.data)

@api_view(['GET'])
def get_level3(request):
    if request.method == 'GET':
        items = list(Sentence.objects.all().filter(level='3'))
        #sentences = query_set('1', Sentence) 
        sentences = random.sample(items, 10)
        serializer = SentenceSerializer(sentences, many=True) 
        return Response(serializer.data)

@api_view(['GET'])
def get_level4(request):
    if request.method == 'GET':
        items = list(Sentence.objects.all().filter(level='4'))
        #sentences = query_set('1', Sentence) 
        sentences = random.sample(items, 10)
        serializer = SentenceSerializer(sentences, many=True) 
        return Response(serializer.data)
    
@api_view(['GET'])
def get_level5(request):
    if request.method == 'GET':
        items = list(Sentence.objects.all().filter(level='5'))
        #sentences = query_set('1', Sentence) 
        sentences = random.sample(items, 10)
        serializer = SentenceSerializer(sentences, many=True) 
        return Response(serializer.data)

'''
KEPT JUST IN CASE
Old implementation:
@api_view(['GET'])
def get_level5(request):
    if request.method == 'GET':
        #sentences = query_set('1', Sentence) 
        sentences = Sentence.objects.all().filter(level='1')
        serializer = SentenceSerializer(sentences, many=True) 
        return Response(serializer.data)
'''