from django.shortcuts import render
from sentences.sentence_processing import save_sentences

# Create your views here.
from django.http import HttpResponse
from django.template import loader


def home(request):
    template = loader.get_template("index.html")
   
    return HttpResponse(template.render())


def download_sentences():
     dwnld_sentences  = save_sentences.download_sentences()

def press_button(request):
    template = loader.get_template("index.html")
    if(request.GET.get('press_button')):
        download_sentences()
    return HttpResponse(template.render())

