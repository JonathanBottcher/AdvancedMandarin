from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from sentences.management.save import download_sentences


# Create your views here.

def home(request):
    template = loader.get_template("index.html")
    if(request.GET.get('press_button')):
        download_sentences()
        
    return HttpResponse(template.render())
