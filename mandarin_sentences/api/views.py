from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serializers import SentenceSerializer
from sentences.models import Sentence
from api.query_set import query_set
import sys
# Create your views here.

sys.path.append("..")


#Fetch hsk level sentences
@api_view(['GET'])
def get_level1(request):
    if request.method == 'GET':
        #sentences = query_set('1', Sentence) 
        sentences = Sentence.objects.all().filter(level='1')
        serializer = SentenceSerializer(sentences, many=True) 
        return Response(serializer.data)

@api_view(['GET'])
def get_level2(request):
    if request.method == 'GET':
        #sentences = query_set('1', Sentence) 
        sentences = Sentence.objects.all().filter(level='2')
        serializer = SentenceSerializer(sentences, many=True) 
        return Response(serializer.data)
    
@api_view(['GET'])
def get_level3(request):
    if request.method == 'GET':
        #sentences = query_set('1', Sentence) 
        sentences = Sentence.objects.all().filter(level='3')
        serializer = SentenceSerializer(sentences, many=True) 
        return Response(serializer.data)

@api_view(['GET'])
def get_level4(request):
    if request.method == 'GET':
        #sentences = query_set('1', Sentence) 
        sentences = Sentence.objects.all().filter(level='4')
        serializer = SentenceSerializer(sentences, many=True) 
        return Response(serializer.data)

@api_view(['GET'])
def get_level5(request):
    if request.method == 'GET':
        #sentences = query_set('1', Sentence) 
        sentences = Sentence.objects.all().filter(level='5')
        serializer = SentenceSerializer(sentences, many=True) 
        return Response(serializer.data)